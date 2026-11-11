# CRM Hotellerie — versione definitiva

Sito Astro di CRM Hotellerie, il software per hotel su Zoho di Mineo S.r.l.
Messaggio: un unico software, modulare — ogni area si attiva anche da sola.

## Struttura (22 pagine)
- `/` home: hero (versione A), prove, demo come azione principale
- `/il-software/` le cinque aree in una pagina (sostituisce le vecchie pagine `/funzionalita/*`)
- `/marketing/` sito web e principali app Zoho per il marketing; `/marketing/<app>/` una pagina per il sito web e per ognuna delle 8 app (Bookings compreso)
- `/trova-la-soluzione/` configuratore "Componi la tua soluzione" (con servizi extra ed esperienze)
- `/chi-siamo/` chi siamo, come lavoriamo, chi è Zoho (logo e confronto con/senza partner), costi, dati
- `/demo/`, `/guida/`, `/calcolatore/`, `/faq/`, `/contatti/`, `/grazie/`, privacy e cookie

Le vecchie URL rimandano alla nuova posizione (`redirects` in `astro.config.mjs`).

## Comandi
- Anteprima locale: doppio clic su `Anteprima sito.command` (porta 4347)
- Build: `npm run build` → `dist/`
- ZIP per il deploy: `npm run package` → `deploy/crmhotellerie-revisionato-latest.zip`

## Dove si modificano i testi
- `src/data/site.js` — aree, menu, esigenze, strutture, FAQ
- `src/data/features.js` — funzionalità (schede di /il-software/)
- `src/data/apps.js` — sito web e 8 app di marketing (pagine /marketing/<app>/)
- `src/data/seo.js` — title, meta description e parole chiave di ogni pagina
- `public/llms.txt` — riepilogo del sito per i motori AI (GEO)

## Da completare prima della pubblicazione
- Prezzo indicativo nel blocco "Quanto costa" della home
- Immagine di condivisione `public/img/og-default.png` (ancora nella vecchia versione gialla)
- ID Google Analytics e redirect del form Zoho della guida verso `/grazie/`
