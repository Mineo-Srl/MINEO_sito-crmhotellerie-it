# CRM Hotellerie — sito (www.crmhotellerie.it)

Sito statico [Astro](https://astro.build) di CRM Hotellerie, servizio di MINEO S.r.l.
Stile e componenti presi dal design system di mineoepartners.it (nero / giallo #f1c40e / grigio,
Manrope + Inter).

## Pagine

| Percorso | Contenuto |
| --- | --- |
| `/` | Home: hero, 7 app di marketing, ospite al centro, dashboard, perché Zoho, FAQ |
| `/pagesense`, `/salesiq`, `/forms`, `/marketing-automation`, `/social`, `/survey`, `/thrive` | Una pagina per app (template `src/pages/[slug].astro`, testi in `src/data/apps.js`) |
| `/guida` | Landing della guida PDF con form Zoho Forms |
| `/grazie` | Thank you page con download del PDF (noindex) |
| `/privacy-policy`, `/cookie-policy` | Note legali; banner cookie in `src/components/CookieBanner.astro` |

Recapiti, link e testi della home: `src/data/site.js`.

## Da fare in Zoho Forms

Nel form "Funnel_hotellerie" impostare il reindirizzamento dopo l'invio su
`https://www.crmhotellerie.it/grazie` (facoltativo: aggiungere `?nome=` con il nome compilato
per personalizzare il titolo).

## Anteprima e deploy

- Doppio clic su **Anteprima sito.command** (apre il sito su http://localhost:4334).
- `npm run package` → build + zip in `deploy/` (`crmhotellerie-sito-latest.zip`): il contenuto va
  caricato nella radice del dominio.
