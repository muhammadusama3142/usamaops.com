// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://usamaops.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    // Keep CSS in external files so the Content-Security-Policy can stay strict (style-src 'self').
    inlineStylesheets: 'never',
  },
});
