// @ts-check
import { defineConfig } from 'astro/config';

// La landing è configurata per vivere nella ROOT di un dominio/sottodominio dedicato.
//
// ▸ Prima di pubblicare: sostituisci `site` con il dominio reale (serve solo per
//   canonical, Open Graph e sitemap — non per i link interni).
// ▸ Se invece dovesse finire in una sottocartella di mineoepartners.it, aggiungi qui
//   `base: '/crm-hotel'`: tutti i link interni passano dall'helper `u()` in
//   src/data/site.js e si adeguano da soli, senza toccare le pagine.
export default defineConfig({
  site: 'https://crmhotel.mineoepartners.it',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  compressHTML: true,
});
