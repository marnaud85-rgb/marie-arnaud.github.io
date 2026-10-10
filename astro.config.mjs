import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Domaine custom (marie-arnaud.com) : pas de `base`.
export default defineConfig({
  site: 'https://marie-arnaud.com',
  vite: { plugins: [tailwindcss()] },
});
