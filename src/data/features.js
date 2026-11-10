/* ==========================================================================
   Funzionalità: nella versione compatta stanno tutte nella pagina /il-software/.
   Testi presi dalla guida v3. "blocks" attiva le sezioni speciali del
   template (tabella dati, scheda ospite, automazioni, dashboard, ecc.).
   ========================================================================== */

/* Pagine di approfondimento delle app di marketing: ora sono nel sito stesso,
   in /marketing/<app>/ (src/pages/marketing/[slug].astro). */
export const APP_SITE = '/marketing';

export const groups = [
  { key: 'sistema', title: 'Un unico software' },
  { key: 'reparti', title: 'Reparti e personale' },
];

export const features = [
  /* ---------------- 01 · Marketing e conversione ---------------- */
  {
    slug: 'marketing-e-conversione', group: 'sistema', area: '01', areaTitle: 'Marketing e conversione',
    name: 'Marketing', menu: 'Più visite e richieste dal tuo sito', icon: 'chart',
    title: 'Dal primo clic, ', hl: 'ogni visita diventa un dato tuo',
    lead: 'Prima ancora della prenotazione, il sito racconta quanta domanda stai perdendo. Il sistema la registra, la intercetta in chat e la riporta sul canale diretto.',
    img: { src: '/img/app/pagesense-canali.jpg', caption: 'PageSense: visite e canali di provenienza.' },
    tags: ['Sito web', 'Social', 'Google Ads', 'PageSense', 'SalesIQ', 'Forms'],
    cards: [
      {
        label: 'Il punto di partenza', title: 'Sito web',
        more: { app: 'Sito web', href: `${APP_SITE}/sito-web/` },
        text: 'Il sito dell’hotel, veloce, multilingua e trovabile su Google, con il booking engine dentro le pagine. Servizi ed esperienze prenotabili, moduli e chat collegati al CRM.',
      },
      {
        label: 'Visita al sito', title: 'PageSense',
        more: { app: 'PageSense', href: `${APP_SITE}/pagesense/` },
        text: 'Mappa il percorso di prenotazione (pagina camera, ricerca, riepilogo, pagamento) e mostra dove i visitatori si fermano.',
        list: [
          ['In una settimana', 'sai quanti hanno cercato disponibilità senza prenotare, e a quale passaggio.'],
          ['Sessioni di abbandono reali:', 'si vede il visitatore che se ne va, non solo il tasso.'],
          ['Test A/B', 'mirato sul punto più debole, di norma il salto dal sito al booking engine.'],
        ],
      },
      {
        label: 'Visita con intenzione', title: 'SalesIQ', dark: true,
        more: { app: 'SalesIQ', href: `${APP_SITE}/salesiq/` },
        text: 'Non una chat generica: tre trigger contestuali, costruiti sui dati del sito.',
        list: [
          ['Fermo oltre 40 secondi', 'sulla pagina camera dopo aver cercato una data: la chat chiede se serve aiuto con le date.'],
          ['Terza visita in due settimane', 'senza prenotare: offre condizioni dirette, come late check-out o upgrade.'],
          ['Ospite già cliente,', 'riconosciuto dal CRM: la chat si apre con nome e storico dei soggiorni.'],
        ],
      },
      {
        label: 'Raccolta del contatto', title: 'Forms e newsletter',
        more: { app: 'Forms', href: `${APP_SITE}/forms/` },
        text: 'Richieste, preventivi e iscrizioni in un solo punto, con consensi registrati. Ogni contatto entra nel CRM e attiva il nurturing giusto per origine.',
      },
      {
        label: 'Presidio continuo', title: 'Social e Google Ads',
        more: { app: 'Social', href: `${APP_SITE}/social/` },
        text: 'Campagne e contenuti portano visitatori su landing dedicate. Messaggi e lead social confluiscono in un’unica coda, già nel CRM.',
      },
    ],
    blocks: ['example'],
    related: ['booking-engine', 'crm-e-preventivi', 'analytics-e-revenue'],
  },

  /* ---------------- 02 · Booking engine ---------------- */
  {
    slug: 'booking-engine', group: 'sistema', area: '02', areaTitle: 'Booking engine e channel manager',
    name: 'Prenotazioni online', menu: 'Booking engine sul sito, senza commissioni', icon: 'calendar',
    title: 'Prenotazioni dirette, ', hl: 'senza commissioni',
    lead: 'Il booking engine è il motore di prenotazione sul tuo sito: l’ospite sceglie date, camera e trattamento e la richiesta arriva già completa nel sistema.',
    img: { src: '/img/app/tipi-camera.jpg', caption: 'Il catalogo camere, con foto e descrizioni, alimenta il widget sul sito. Schermata dall’hotel dimostrativo.' },
    tags: ['Widget di prenotazione', 'Disponibilità in tempo reale'],
    points: [
      ['Widget con il tuo brand', 'Colori, font, logo, lingue e campi sono quelli dell’hotel: sul sito sembra nato lì.'],
      ['Disponibilità in tempo reale', 'Un solo calendario con la reception: la chiave univoca camera-data evita l’overbooking.'],
      ['Tariffe e stagioni', 'Periodi di stagione, regole per giorno della settimana e minimo notti, impostati una volta.'],
      ['Caparra e stati della prenotazione', 'Opzionata blocca la camera, confermata a caparra versata, scaduta libera la camera e fa partire un nurturing dedicato.'],
    ],
    callout: { label: 'Il dato che non perdi', text: 'Ogni ricerca senza esito è registrata con il motivo (tutto esaurito o minimo notti): scopri quanta domanda hai respinto e quando.' },
    blocks: ['states', 'ownership'],
    related: ['channel-manager', 'pms-gestionale', 'analytics-e-revenue'],
  },
  {
    slug: 'channel-manager', group: 'sistema', area: '02', areaTitle: 'Booking engine e channel manager',
    name: 'Channel manager', menu: 'Booking.com e Airbnb sullo stesso calendario', icon: 'sync',
    title: 'Un solo calendario, ', hl: 'anche con le OTA',
    lead: 'Sincronizza tariffe e disponibilità con Booking.com, Airbnb e gli altri portali tramite Channex: niente doppie gestioni, niente overbooking. Servizio opzionale.',
    img: { src: '/img/app/planning.jpg', caption: 'Le prenotazioni dei portali finiscono sullo stesso planning della reception. Schermata dall’hotel dimostrativo.' },
    tags: ['Channex', 'Servizio opzionale'],
    points: [
      ['Tariffe e disponibilità allineate', 'Cambi una tariffa o chiudi una data una volta sola: i portali si aggiornano.'],
      ['Niente doppie gestioni', 'Prenotazioni dirette e da OTA sullo stesso calendario, con la stessa chiave camera-data.'],
      ['Ogni prenotazione nel CRM', 'Anche chi arriva da un portale entra nella scheda ospite: è il primo passo per riportarlo sul diretto.'],
      ['Canale tracciato', 'Ogni soggiorno porta con sé il canale di provenienza, letto poi in Analytics.'],
    ],
    callout: { label: 'Dal portale al diretto', text: 'Sulla scheda ospite: “La prima volta da un portale, poi sempre dal sito”. Il channel manager porta l’ospite, il CRM lo fa tornare.' },
    blocks: ['channels'],
    related: ['booking-engine', 'automazioni-e-loyalty', 'analytics-e-revenue'],
  },

  /* ---------------- 03 · CRM ---------------- */
  {
    slug: 'crm-e-preventivi', group: 'sistema', area: '03', areaTitle: 'CRM',
    name: 'Gestione clienti', menu: 'Scheda ospite, preventivi, segmenti (CRM)', icon: 'users',
    title: 'Una scheda per ogni ospite, ', hl: 'una storia che continua',
    lead: 'Il CRM raccoglie in un’unica scheda tutto ciò che sai dell’ospite, dal primo contatto al ritorno, e lo usa per scrivergli al momento giusto.',
    tags: ['Zoho CRM', 'Pipeline', 'Segmenti', 'Consensi'],
    points: [
      ['Storico soggiorni e canale', 'Ogni prenotazione, diretta od OTA, con camera, trattamento e periodo.'],
      ['Spesa in hotel', 'Ristorante, bar, spa ed extra addebitati in camera, soggiorno per soggiorno.'],
      ['Preferenze e interessi', 'Lingua, note per la ristorazione, arrivo anticipato o partenza posticipata.'],
      ['Segmenti pronti', 'Nuovo, ricorrente, abituale; privato, business, VIP.'],
      ['Consensi registrati', 'Privacy, newsletter e WhatsApp raccolti con la prenotazione.'],
      ['Pipeline e preventivi', 'Richieste da sito, telefono, email e social nello stesso flusso, con upselling già nel preventivo.'],
    ],
    blocks: ['guestCard'],
    related: ['automazioni-e-loyalty', 'marketing-e-conversione', 'pms-gestionale'],
  },
  {
    slug: 'automazioni-e-loyalty', group: 'sistema', area: '03', areaTitle: 'CRM',
    name: 'Fidelizzazione', menu: 'Email automatiche, survey, loyalty', icon: 'refresh',
    title: 'Dalla richiesta al ritorno: ', hl: 'le automazioni',
    lead: 'Ogni passaggio della prenotazione fa partire la comunicazione giusta. Dopo la partenza, survey, segmenti e loyalty riportano l’ospite sul tuo sito.',
    tags: ['Marketing Automation', 'Survey', 'Thrive'],
    blocks: ['automations'],
    goals: [
      ['Riempi i periodi vuoti', 'Scegli il segmento giusto e lanci l’offerta sulle date in cui la struttura è scarica, con Marketing Automation.'],
      ['Vendi di più prima dell’arrivo', 'Spa, cena, transfer, partenza posticipata: proposti a chi ha già mostrato interesse.'],
      ['Riporta l’ospite sul diretto', 'Survey a fine soggiorno, programmi loyalty e referral con Thrive: chi arriva da un portale torna dal tuo sito.'],
    ],
    related: ['crm-e-preventivi', 'marketing-e-conversione', 'analytics-e-revenue'],
  },

  /* ---------------- 04 · PMS ---------------- */
  {
    slug: 'pms-gestionale', group: 'sistema', area: '04', areaTitle: 'PMS e reparti',
    name: 'Gestione struttura', menu: 'Planning, check-in, conto ospite (PMS)', icon: 'gear',
    title: 'Dal check-in al conto, ', hl: 'tutto dagli stessi dati',
    lead: 'Il PMS è il gestionale operativo della struttura. In CRM Hotellerie condivide l’anagrafica con il CRM: i dati dell’ospite si inseriscono una sola volta.',
    img: { src: '/img/app/planning.jpg', caption: 'Planning camere: prenotazioni, pulizie e manutenzioni sullo stesso calendario, con stagione e occupazione di ogni giorno.', wide: true },
    tags: ['Planning camere', 'Front office', 'Conto dell’ospite'],
    columns: [
      { title: 'Front office', list: [['Planning anti-overbooking', 'con chiave univoca camera-data.'], ['Check-in', 'online o in reception, con stato aggiornato in CRM.'], ['Check-out e saldo', 'in un unico passaggio.'], ['Prenotazioni aperte', 'cercabili per camera, ospite o codice.']] },
      { title: 'Conto dell’ospite', list: [['Un solo conto:', 'ristorante, bar, spa ed extra finiscono sulla camera.'], ['Zero blocchetti', 'da riconciliare a fine soggiorno.'], ['Acconti e pagamenti', 'registrati, con stampa del conto.']] },
      { title: 'Amministrazione e obblighi', dark: true, list: [['Fattura elettronica', 'con Zoho Books e Sistema di Interscambio.'], ['Alloggiati Web', '(Questura) dai dati del check-in.'], ['ISTAT e tassa di soggiorno', 'generati dall’anagrafica.']] },
    ],
    blocks: ['rates', 'gallery'],
    gallery: [
      ['/img/app/checkout.jpg', 'Check-out e saldo in un unico passaggio.'],
      ['/img/app/addebiti.jpg', 'Addebiti in camera: un solo conto per l’ospite.'],
      ['/img/app/checkout-elenco.jpg', 'Prenotazioni aperte cercabili per camera, ospite o codice.'],
    ],
    related: ['fatturazione-e-adempimenti', 'pulizie', 'booking-engine'],
  },
  {
    slug: 'fatturazione-e-adempimenti', group: 'sistema', area: '04', areaTitle: 'PMS e reparti',
    name: 'Fatturazione', menu: 'Fattura elettronica, Alloggiati Web, ISTAT', icon: 'file',
    title: 'Gli obblighi di legge, ', hl: 'dai dati che hai già',
    lead: 'Fattura elettronica, Questura, ISTAT e tassa di soggiorno partono dall’anagrafica e dal check-in. Nessun dato da ribattere su un altro portale.',
    img: { src: '/img/app/addebiti.jpg', caption: 'Il conto dell’ospite raccoglie gli addebiti e diventa fattura. Schermata dall’hotel dimostrativo.' },
    tags: ['Zoho Books', 'Sistema di Interscambio', 'Alloggiati Web', 'ISTAT'],
    points: [
      ['Fattura elettronica', 'Con Zoho Books e il Sistema di Interscambio, dal conto dell’ospite.'],
      ['Alloggiati Web', 'La comunicazione alla Questura parte dai dati raccolti al check-in.'],
      ['ISTAT', 'Il movimento ospiti è generato dall’anagrafica, senza ricompilarlo.'],
      ['Tassa di soggiorno', 'Calcolata dall’anagrafica e dalle notti effettive.'],
      ['Acconti e pagamenti', 'Registrati sulla prenotazione, con stampa del conto.'],
    ],
    callout: { label: 'Una sola volta', text: 'I dati dell’ospite si inseriscono una volta: servono al CRM, al conto, alla fattura e agli adempimenti.' },
    related: ['pms-gestionale', 'ristorante-e-bar', 'analytics-e-revenue'],
  },

  /* ---------------- 05 · Analytics ---------------- */
  {
    slug: 'analytics-e-revenue', group: 'sistema', area: '05', areaTitle: 'Analytics e revenue',
    name: 'Report e revenue', menu: 'Dashboard e richieste perse', icon: 'presentation',
    title: 'I numeri che un gestionale ', hl: 'da solo non mostra',
    lead: 'Un gestionale sa dire quanto hai venduto. Zoho Analytics legge l’intero percorso, dal primo clic al check-out, e dice anche quanto ti è stato chiesto e non hai potuto vendere.',
    tags: ['Zoho Analytics', 'Occupazione', 'ADR', 'RevPAR', 'Performance per canale'],
    blocks: ['demand', 'dashboards', 'rms'],
    related: ['marketing-e-conversione', 'booking-engine', 'channel-manager'],
  },

  /* ---------------- App per i reparti ---------------- */
  {
    slug: 'pulizie', group: 'reparti', area: '04', areaTitle: 'App per i reparti',
    name: 'Pulizie', menu: 'Priorità, staff, ricorrenze', icon: 'spark',
    title: 'Camere pronte, ', hl: 'la reception lo sa',
    lead: 'Camere da pulire con priorità, orari, staff assegnato e ricorrenza. La camera si blocca solo quando serve e la reception non assegna mai una camera non ancora pronta.',
    img: { src: '/img/app/pulizie.jpg', caption: 'Pulizia pianificata: priorità, orari, staff e ricorrenza.' },
    tags: ['Housekeeping', 'Stesso calendario'],
    points: [
      ['Priorità e orari', 'Prima le camere in arrivo, poi le altre: l’ordine lo dà il planning.'],
      ['Staff assegnato', 'Ogni addetto vede le sue camere, con note e tempi.'],
      ['Ricorrenze', 'Pulizie ordinarie e a fondo programmate una volta.'],
      ['Blocco solo quando serve', 'La camera resta vendibile finché l’intervento non la occupa davvero.'],
    ],
    related: ['manutenzione-e-segnalazioni', 'pms-gestionale', 'app-su-misura'],
  },
  {
    slug: 'manutenzione-e-segnalazioni', group: 'reparti', area: '04', areaTitle: 'App per i reparti',
    name: 'Manutenzione e segnalazioni', menu: 'Guasti per camera e aree comuni', icon: 'wrench',
    title: 'Interventi nel calendario, ', hl: 'senza fermare la vendita',
    lead: 'Interventi preventivi e straordinari incastrati nel calendario. Guasti e richieste per camera e aree comuni: da fare, in corso, completata.',
    img: { src: '/img/app/segnalazioni.jpg', caption: 'Segnalazioni per camera e aree comuni: da fare, in corso, completata.' },
    tags: ['Manutenzione', 'Aree comuni'],
    points: [
      ['Preventiva e straordinaria', 'Gli interventi programmati si incastrano tra le prenotazioni.'],
      ['Segnalazioni per camera', 'Chi trova un guasto lo segnala dalla camera, con stato visibile a tutti.'],
      ['Aree comuni', 'Hall, ristorante e spazi condivisi in un’unica schermata.'],
      ['Tre stati', 'Da fare, in corso, completata: la reception sa sempre cosa è pronto.'],
    ],
    blocks: ['gallery'],
    gallery: [
      ['/img/app/aree-comuni.jpg', 'Aree comuni: hall, ristorante e spazi condivisi in un’unica schermata.'],
      ['/img/app/manutenzione.jpg', 'Manutenzione pianificata sul planning camere.'],
    ],
    related: ['pulizie', 'app-su-misura', 'pms-gestionale'],
  },
  {
    slug: 'ristorante-e-bar', group: 'reparti', area: '04', areaTitle: 'App per i reparti',
    name: 'Ristorante e bar', menu: 'Coperti e addebiti in camera', icon: 'utensils',
    title: 'Un solo conto, ', hl: 'nessun blocchetto',
    lead: 'Coperti prenotati e addebiti sul conto della camera: un solo conto per l’ospite, nessun blocchetto da riconciliare a fine soggiorno.',
    img: { src: '/img/photos/ristorante-sala.webp', caption: 'Ristorante e bar lavorano sugli stessi dati della reception.' },
    tags: ['Food & beverage', 'Addebiti in camera'],
    points: [
      ['Coperti prenotati', 'Il ristorante sa chi arriva e con quale trattamento.'],
      ['Addebiti in camera', 'Bar, cena e spa finiscono sul conto della camera.'],
      ['Spesa per ospite', 'Ogni addebito alimenta la spesa extra media nella scheda CRM.'],
      ['Note per la ristorazione', 'Preferenze e intolleranze arrivano dalla scheda ospite.'],
    ],
    blocks: ['gallery'],
    gallery: [['/img/app/addebiti.jpg', 'Addebiti in camera dall’hotel dimostrativo.']],
    related: ['pms-gestionale', 'crm-e-preventivi', 'app-su-misura'],
  },
  {
    slug: 'app-su-misura', group: 'reparti', area: '04', areaTitle: 'App per i reparti',
    name: 'Ruoli e personale', menu: 'Accessi per reparto, app su misura', icon: 'key',
    title: 'Un’app cucita ', hl: 'sui tuoi reparti',
    lead: 'Le schermate dei reparti sono sviluppate da noi sui processi della tua struttura. Se un reparto lavora in modo diverso, lo adattiamo, senza cambiare piattaforma.',
    img: { src: '/img/app/config-menu.jpg', caption: 'Configurazione dell’hotel dimostrativo.' },
    tags: ['Ruoli', 'Accessi', 'Sviluppo su Zoho'],
    points: [
      ['Ruoli per reparto', 'Ogni addetto vede solo ciò che gli serve, dalla lavanderia alla reception.'],
      ['Tutti sugli stessi dati', 'Ognuno con i suoi accessi, nessuno su un foglio a parte.'],
      ['Adattata ai processi', 'Se un reparto lavora in modo diverso, cambia la schermata, non la piattaforma.'],
      ['Cresce con l’hotel', 'Aggiungi People o Desk quando servono.'],
    ],
    related: ['pulizie', 'manutenzione-e-segnalazioni', 'ristorante-e-bar'],
  },
];

export const getFeature = (slug) => features.find((f) => f.slug === slug);

/* Marketing ha una pagina di primo livello (/marketing/), voce del menu principale. */
export const TOP_LEVEL = { 'marketing-e-conversione': '/marketing/' };
/* Versione compatta: tutte le funzionalità vivono in una sola pagina,
   /il-software/, con un'ancora per funzionalità e una per area. */
export const AREA_ANCHOR = { '01': 'marketing', '02': 'prenotazioni', '03': 'clienti', '04': 'struttura', '05': 'numeri' };
export const featureHref = (slug) => TOP_LEVEL[slug] || `/il-software/#${slug}`;
