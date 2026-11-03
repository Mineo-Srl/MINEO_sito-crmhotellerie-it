# CRM Hotellerie — versione "emozione"

Variante del sito (copia di `Claude Workspace/crmhotelleriesito`) riscritta sull'analisi di
conversione: messaggio sul risultato, demo come azione principale, prova sociale, prezzi,
calcolatore delle commissioni, gestionale spostato in una pagina a parte.

## Struttura del sito (percorso di comunicazione)

`/` home = sintesi del percorso in 12 capitoli, ciascuno con il link alla pagina completa:
`/perche` (problema) → `/come-funziona` (soluzione) → `/app` + 7 pagine app (strumenti) → `/casi` (prove)
→ `/prezzi` (costi) → `/chi-siamo` (fiducia) → `/demo` (azione). Ogni pagina del percorso finisce con
"Capitolo successivo" (`NextPage.astro`). Pagine di servizio: `/calcolatore`, `/faq`, `/contatti`,
`/gestionale`, `/guida`, `/grazie`, `/prenotazione-confermata`, privacy, cookie, 404.
Testi delle pagine interne in `src/data/pages.js`, sezioni condivise in `src/components/sections/`.

## Cosa cambia rispetto al sito base
- **H1** "Più conosci l'ospite, meno paghi per riaverlo"; Zoho come credibilità nel sottotitolo.
- **CTA principale "Sblocca la demo"** (form Zoho in pagina, `#demo`); consulenza secondaria.
- **/grazie** = demo sbloccata + guida PDF + invito alla consulenza.
- **Calcolatore** commissioni OTA (`#calcolatore`), risultato ricordato accanto al form.
- **Casi** e **Prezzi**: struttura pronta, contenuti SEGNAPOSTO in `src/data/site.js` (`cases`, `pricing`).
- **/gestionale**: la "strada B" (PMS, channel manager, adempimenti) fuori dalla home.
- **/prenotazione-confermata**: pagina di ritorno da Zoho Bookings per misurare le consulenze.
- **Tracking**: eventi PageSense/GA4 (CTA, calcolatore, lettura 60 s di Prezzi/FAQ, lead, booking)
  e azioni personalizzate SalesIQ per i trigger (`src/components/Tracking.astro`).

## Prima di pubblicare
1. Sostituire i casi segnaposto con hotel reali e inserire gli importi Mineo in `pricing`.
2. Zoho Forms: form breve a 4 campi (nome, struttura, email, telefono) e redirect a `/grazie`.
3. Zoho Bookings: redirect dopo la prenotazione a `/prenotazione-confermata`.
4. SalesIQ: creare i trigger sulle azioni `lettura_60s_prezzi`, `lettura_60s_faq`, `calcolatore_usato`.
5. PageSense: progetto dedicato a crmhotellerie.it con obiettivi `lead_form`, `booking_completed`, clic CTA.

Anteprima: doppio clic su **Anteprima sito.command** (porta 4336). Zip: `npm run package` → `deploy/`.
