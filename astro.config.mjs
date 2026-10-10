import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Domaine custom (marie-arnaud.com) : pas de `base`.
export default defineConfig({
  site: 'https://marie-arnaud.com',
  // FR par défaut (URL inchangée), EN sous /en/. Pas de redirection automatique selon le navigateur.
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
