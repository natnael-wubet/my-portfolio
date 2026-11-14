// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// The canonical origin. Change it here and in src/lib/site.ts together, or
// set SITE_URL when a custom domain replaces the Vercel one.
const site = process.env.SITE_URL ?? 'https://my-portfolio-three-lime-27.vercel.app';

export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()]
  }
});