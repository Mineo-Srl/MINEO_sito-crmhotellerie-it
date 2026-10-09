# CRM Hotel — funnel con hero "il dato resta tuo" (Mineo Srl)

Sesta versione: stessa struttura del funnel completo di `../crmhotellerie-funnel/` (landing → demo sbloccata → prenota consulenza → grazie), ma con **hero nuovo**.

**Messaggio:** il CRM ce l'hanno tutti; noi puntiamo sul dato dell'ospite che resta della struttura, dal primo clic al ritorno, gestito con marketing e analisi Zoho. Hero scuro con le tre fasi (prima della prenotazione → PageSense/SalesIQ; durante il soggiorno → Zoho CRM; dopo la partenza → Survey/Marketing Automation/Thrive), la frase "Più conosci l'ospite, meno paghi per riaverlo" e il form per sbloccare la demo. Anteprima porta 4328, zip `deploy/crm-hotellerie-dato-latest.zip`.

---


Quinta versione del sito CRM Hotel, con **tutte le pagine del funnel**. Le versioni precedenti restano in
`../crmhotellerie/`, `../crmhotellerie-landing/`, `../crmhotellerie-leadmagnet/`.
Stile bemyguest.it con i colori Mineo (nero `#000`, giallo `#f1c40e`, grigio `#727070`).

## Il percorso del lead
| Passo | Pagina | Cosa succede |
|---|---|---|
| 1 | `/` landing | Si capisce in 3 secondi cosa offriamo; form breve nell'hero (nome, struttura, email, telefono, privacy) per **sbloccare la demo**. Form completo in fondo. |
| 2 | `/demo-sbloccata` | "La demo è tua": pulsante per aprire Hotel Soleluna (sito dimostrativo con widget), tre cose da provare (checklist salvata), scelta degli argomenti di interesse. CTA verso la consulenza. |
| 3 | `/prenota-consulenza` | Il lead sceglie giorno (prossimi 7 giorni lavorativi) e fascia (mattina/pomeriggio/indifferente) per essere richiamato, conferma argomenti e note. Dati dei passi precedenti già compilati. |
| 4 | `/grazie` | Ringraziamento e attesa: riepilogo della richiesta, "ti richiamiamo entro 1 giorno lavorativo", tre passi, WhatsApp. |

Le pagine 2-4 hanno stepper di avanzamento (Dati → Demo → Consulenza), header ridotto (solo logo) e `noindex`.
I dati passano da una pagina all'altra con `sessionStorage` (`crmhotel_lead`, `crmhotel_interests`, `crmhotel_booking`).

## Misurazione (dataLayer)
`generate_lead` (form landing) → `demo_unlocked` → `demo_opened` → `booking_requested` → `lead_thank_you`.
Ogni CTA ha `data-cta="…"`. Collegabili a GA4 / Google Tag Manager / Zoho PageSense (`site.gaId`).

## Da collegare prima di pubblicare
- **Endpoint Zoho** (`site.formEndpoint` in `src/data/site.js`): oggi, senza endpoint, i form aprono la mail
  precompilata e proseguono nel funnel, ma *i lead non vengono registrati*. Con l'endpoint i dati partono via
  `fetch` verso Zoho Forms/Flow/CRM WebForm. Servono due mappature: lead iniziale e richiesta di consulenza.
- Le pagine 2-4 sono raggiungibili da chi ne conosce l'URL: sito statico, nessuna autenticazione. Il "blocco"
  è una scelta di percorso, non una protezione.
- Dominio definitivo (`site.url`, `astro.config.mjs`).
- Il numero di telefono Mineo è stato tolto dal sito (resta nell'informativa privacy, dati del titolare).
  I form chiedono comunque il telefono del lead per il richiamo.

## Comandi
```bash
export PATH="$HOME/.local/nodejs/node-v24.19.0-darwin-x64/bin:$PATH"
npm install
npm run build      # build statica in dist/
npm run serve      # anteprima su http://localhost:4327
npm run package    # build + deploy/crm-hotellerie-funnel-latest.zip
```
Anteprima senza terminale: doppio clic su `Anteprima sito.command`.
