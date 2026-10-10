// Calcul de contraste WCAG 2.x à partir des tokens CSS (variables --x), sans dépendance.
// Gère les alphas (rgba / #rrggbbaa) en les composant sur un fond opaque.

/** Extrait { root, dark, light } : maps nom → valeur brute, depuis un fichier de tokens. */
export function parseTokens(css) {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const blocks = { root: {}, dark: {}, light: {} };
  const re = /(:root|\[data-theme="(?:dark|light)"\])\s*\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(clean))) {
    const key = m[1] === ':root' ? 'root' : m[1].includes('dark') ? 'dark' : 'light';
    for (const d of m[2].matchAll(/(--[a-z0-9-]+)\s*:\s*([^;]+);/gi)) blocks[key][d[1]] = d[2].trim();
  }
  return blocks;
}

/** Résout une variable pour un thème (dark/light), en suivant les var(--x). */
export function resolve(blocks, theme, name, depth = 0) {
  if (depth > 8) throw new Error(`Référence circulaire : ${name}`);
  if (!name.startsWith('--')) name = `--${name}`;
  const raw = blocks[theme][name] ?? blocks.root[name];
  if (raw === undefined) throw new Error(`Token inconnu en ${theme} : ${name}`);
  const v = raw.match(/^var\((--[a-z0-9-]+)\)$/i);
  return v ? resolve(blocks, theme, v[1], depth + 1) : raw;
}

/** Couleur CSS → { r, g, b, a } (r,g,b 0-255). Hex #rgb/#rrggbb/#rrggbbaa et rgb()/rgba(). */
export function parseColor(str) {
  const s = str.trim();
  if (s.startsWith('#')) {
    let h = s.slice(1);
    if (h.length === 3) h = [...h].map((c) => c + c).join('');
    const n = (i) => parseInt(h.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: h.length === 8 ? n(6) / 255 : 1 };
  }
  const m = s.match(/^rgba?\(([^)]+)\)$/i);
  if (!m) throw new Error(`Couleur non gérée : ${str}`);
  const p = m[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat);
  return { r: p[0], g: p[1], b: p[2], a: p[3] ?? 1 };
}

/** Compose `top` sur `under` (opaque). */
export function over(top, under) {
  const a = top.a;
  return { r: top.r * a + under.r * (1 - a), g: top.g * a + under.g * (1 - a), b: top.b * a + under.b * (1 - a), a: 1 };
}

const lin = (c) => { const v = c / 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
export const luminance = ({ r, g, b }) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
export function ratio(c1, c2) {
  const [a, b] = [luminance(c1), luminance(c2)].sort((x, y) => y - x);
  return (a + 0.05) / (b + 0.05);
}

/** `bg` : nom de token ou tableau de tokens empilés (du dessous au dessus). */
export function evalPair(blocks, theme, pair) {
  const layers = [].concat(pair.bg).map((n) => parseColor(resolve(blocks, theme, n)));
  let bg = layers[0];
  if (bg.a < 1) bg = over(bg, { r: 0, g: 0, b: 0, a: 1 });
  for (const l of layers.slice(1)) bg = over(l, bg);
  const fg = over(parseColor(resolve(blocks, theme, pair.fg)), bg);
  return { value: ratio(fg, bg), fg, bg };
}
