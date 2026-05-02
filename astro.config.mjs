// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmarkus42.github.io',
  base: '/cipher-mux-site',
  integrations: [sitemap()],
});