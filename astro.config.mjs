// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dinulisendy.github.io',
  output: 'static',
  outDir: './dist',
  integrations: [sitemap()],
});
