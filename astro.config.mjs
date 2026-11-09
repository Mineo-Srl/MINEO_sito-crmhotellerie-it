// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.crmhotellerie.it',
  trailingSlash: 'ignore',
  // Versione compatta: le vecchie pagine rimandano alla pagina che le contiene ora
  redirects: {
    "/funzionalita": "/il-software/",
    "/soluzioni": "/trova-la-soluzione/",
    "/come-funziona": "/chi-siamo/#come-lavoriamo",
    "/i-tuoi-dati": "/chi-siamo/#dati",
    "/integrazioni": "/il-software/",
    "/funzionalita/marketing-e-conversione": "/marketing/",
    "/funzionalita/booking-engine": "/il-software/#booking-engine",
    "/funzionalita/channel-manager": "/il-software/#channel-manager",
    "/funzionalita/crm-e-preventivi": "/il-software/#crm-e-preventivi",
    "/funzionalita/automazioni-e-loyalty": "/il-software/#automazioni-e-loyalty",
    "/funzionalita/pms-gestionale": "/il-software/#pms-gestionale",
    "/funzionalita/fatturazione-e-adempimenti": "/il-software/#fatturazione-e-adempimenti",
    "/funzionalita/analytics-e-revenue": "/il-software/#analytics-e-revenue",
    "/funzionalita/pulizie": "/il-software/#pulizie",
    "/funzionalita/manutenzione-e-segnalazioni": "/il-software/#manutenzione-e-segnalazioni",
    "/funzionalita/ristorante-e-bar": "/il-software/#ristorante-e-bar",
    "/funzionalita/app-su-misura": "/il-software/#app-su-misura"
},
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
