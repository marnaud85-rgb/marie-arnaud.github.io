import { fr, type Dict } from './fr';
import { en } from './en';

export const locales = ['fr', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'fr';

const dicts: Record<Lang, Dict> = { fr, en };

/** Dictionnaire de la langue courante (`Astro.currentLocale`). */
export function useT(lang: string | undefined): Dict {
  return dicts[(lang as Lang) in dicts ? (lang as Lang) : defaultLang];
}

/** Chemin d'une page dans une autre langue (FR sans préfixe, EN sous /en/). */
export function pathFor(pathname: string, lang: Lang): string {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return lang === defaultLang ? bare : `/en${bare === '/' ? '/' : bare}`;
}
