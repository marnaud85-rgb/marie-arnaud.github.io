// Vérifie les paires texte/fond déclarées dans src/styles/contrast-pairs.json
// pour les thèmes dark et light. Usage : node scripts/check-contrast.mjs [tokens.css] [pairs.json]
import { readFileSync } from 'node:fs';
import { parseTokens, evalPair } from './contrast-lib.mjs';

const tokensPath = process.argv[2] ?? 'src/styles/tokens.css';
const pairsPath = process.argv[3] ?? 'src/styles/contrast-pairs.json';
const blocks = parseTokens(readFileSync(tokensPath, 'utf8'));
const pairs = JSON.parse(readFileSync(pairsPath, 'utf8'));

let fails = 0;
const rows = [];
for (const theme of ['dark', 'light']) {
  for (const p of pairs) {
    if (p.themes && !p.themes.includes(theme)) continue;
    const { value } = evalPair(blocks, theme, p);
    const ok = value >= p.min;
    if (!ok && p.level !== 'advisory') fails++;
    rows.push({ theme, id: p.id, ratio: value.toFixed(2), min: p.min, status: ok ? 'OK' : p.level === 'advisory' ? 'conseil' : 'ÉCHEC' });
  }
}
const w = Math.max(...rows.map((r) => r.id.length));
for (const r of rows) console.log(`${r.status.padEnd(6)} ${r.theme.padEnd(5)} ${r.ratio.padStart(5)}:1 (min ${r.min})  ${r.id.padEnd(w)}`);
console.log(fails ? `\n${fails} paire(s) sous le seuil.` : '\nToutes les paires obligatoires respectent le seuil.');
process.exit(fails ? 1 : 0);
