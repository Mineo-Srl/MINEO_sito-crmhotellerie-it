// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.crmhotellerie.it',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
