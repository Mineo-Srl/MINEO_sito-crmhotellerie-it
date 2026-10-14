/* ==========================================================================
   Dati del sito e contenuti del sito verticale.
   Prodotto: CRM Hotellerie — il CRM alberghiero costruito su Zoho da Mineo.
   Obiettivo: vendere il CRM ai proprietari di hotel (richiesta demo / consulenza).
   Testi di partenza: «Testi sito web Zoho Hotel.docx».
   Tutta la copy modificabile sta qui o nelle singole sezioni di index.astro.
   ========================================================================== */

/* --- Base path -----------------------------------------------------------
   `u()` costruisce ogni link interno tenendo conto del base path di Astro:
   se il sito finisse in una sottocartella basta aggiungere `base` in
   astro.config.mjs, senza toccare nient'altro. */
const B = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

export function u(path = '/') {
  if (!path || /^(https?:|mailto:|tel:|#|\/\/)/.test(path)) return path;
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${B}${clean}` || '/';
}

export const site = {
  name: 'Mineo Srl',
  legal: 'MINEO S.r.l.',
  product: 'CRM Hotellerie',
  brand: 'CRM Hotellerie',
  /* ⚠️ Dominio di pubblicazione: sostituiscilo con quello definitivo.
     Serve per canonical, Open Graph e sitemap (non per i link interni). */
  domain: 'www.crmhotellerie.it',
  url: 'https://www.crmhotellerie.it',
  tagline: 'Zoho Authorized Partner',
  /* Anni da Zoho Authorized Partner: aggiornalo qui, vale per tutto il sito */
  partnerYears: 9,
  email: 'info@mineoepartners.it',
  privacyEmail: 'privacy@mineoepartners.it',
  phone: '+39 02 814 807 92',
  phoneHref: '+390281480792',
  whatsapp: '+39 389 6680301',
  whatsappHref: '393896680301',
  address: 'Viale Villoresi, 3 — 20045 Lainate (MI), Italia',
  addressStreet: 'Viale Villoresi, 3',
  addressCity: 'Lainate',
  addressZip: '20045',
  addressRegion: 'MI',
  vat: 'P.IVA 14522690966',
  vatNumber: '14522690966',
  linkedin: 'https://www.linkedin.com/company/80985139',
  mainSite: 'https://www.mineoepartners.it',

  /* Incolla qui l'URL dell'endpoint Zoho (Zoho Forms → "Share → Embed → form action",
     oppure un webhook Zoho Flow / CRM WebForm). Finché resta vuoto il form
     funziona comunque: apre il client di posta con i dati già compilati. */
  /* Calendario Zoho Bookings per le consulenze gratuite */
  bookingUrl: 'https://mineoepartners.zohobookings.eu/#/andreamineo',
  formEndpoint: '',

  /* ID misurazione Google Analytics 4 (es. 'G-XXXXXXX').
     Se vuoto, nessuno script di tracciamento viene caricato. */
  gaId: '',

  /* Sito dimostrativo (lead magnet): si sblocca dopo aver lasciato i dati, link sulla pagina /grazie */
  demoUrl: 'https://hotelsoleluna.crmhotellerie.it/',
};

/* --- Navigazione (anchor della single page) ------------------------------ */
/* Menu a imbuto: una voce per fase di decisione (max 4 + CTA).
   Interesse → Perché CRM Hotellerie · Fiducia → Perché Zoho · Prova → Guardalo dal vivo · Dubbi → FAQ.
   La CTA principale (navCta) resta sempre visibile e porta al form. */
export const nav = [
  { href: '#ospite', label: 'L’ospite' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#perche-zoho', label: 'Perché Zoho' },
  { href: '#faq', label: 'FAQ' },
];

export const navCta = { href: 'https://mineoepartners.zohobookings.eu/#/andreamineo', label: 'Prenota una consulenza gratuita', labelLong: 'Prenota una consulenza gratuita' };

/* Footer: tutte le sezioni della pagina, per chi scorre fino in fondo */
export const footerNav = [
  { href: '#ospite', label: 'L’ospite al centro' },
  { href: '#marketing', label: 'Marketing alberghiero' },
  { href: '#dashboard', label: 'Dashboard' },
  { href: '#perche-crm', label: 'Perché CRM Hotellerie' },
  { href: '#widget', label: 'Il widget dal vivo' },
  { href: '#perche-zoho', label: 'Chi fa cosa' },
  { href: '#perche-zoho', label: 'Perché Zoho' },
  { href: '#demo-hotel', label: 'La demo' },
  { href: '#percorsi', label: 'Da dove parti tu' },
  { href: '#come-si-parte', label: 'Come si parte' },
  { href: '#faq', label: 'FAQ' },
  { href: '#demo', label: 'Compila il form' },
];

/* --- Tipologie di struttura (marquee) ----------------------------------- */
export const propertyTypes = [
  { label: 'Hotel indipendenti', icon: 'building' },
  { label: 'Boutique hotel', icon: 'sparkles' },
  { label: 'Resort e villaggi', icon: 'palm' },
  { label: 'Dimore storiche', icon: 'key' },
  { label: 'Agriturismi', icon: 'leaf' },
  { label: 'B&B e affittacamere', icon: 'bed' },
  { label: 'Residence e apartment hotel', icon: 'layers' },
  { label: 'Piccoli gruppi alberghieri', icon: 'globe' },
  { label: 'Wellness e spa hotel', icon: 'droplet' },
  { label: 'Strutture di nuova apertura', icon: 'bolt' },
];

/* --- Hero: i tre benefici in testa -------------------------------------- */
export const heroBenefits = [
  { icon: 'wallet', text: 'Recuperi margine sul canale diretto, abbassando la dipendenza dalle commissioni OTA' },
  { icon: 'calendar', text: 'Reparti coordinati su un solo calendario: reception, pulizie, manutenzione' },
  { icon: 'document', text: 'Adempimenti automatici: fatturazione elettronica, Alloggiati Web e ISTAT senza passaggi manuali' },
];

/* --- 1. CRM ospite ------------------------------------------------------ */
export const crmPoints = [
  { title: 'Gestione preventivi multicanale', text: 'Richieste da sito, telefono, email e social gestite nello stesso flusso, senza fogli Excel paralleli.' },
  { title: 'Catalogo prodotti per reparto', text: 'Camere, bar, ristorante, spa, servizi ed esperienze, con upselling e cross-selling guidati già in fase di preventivo.' },
  { title: 'Storico ospite completo', text: 'Soggiorni passati, no-show, richieste speciali e consensi privacy, sempre consultabili.' },
  { title: 'Nessuna sostituzione del gestionale in uso', text: 'Il CRM si affianca al PMS esistente, aggiungendo ciò che manca.' },
];

/* --- 2. Operatività: un calendario per tre reparti ---------------------- */
export const opsPoints = [
  { icon: 'calendar', title: 'Front office e booking engine', text: 'Lo stesso calendario usato in reception alimenta anche il motore di prenotazione diretta sul sito, con chiave univoca camera-data contro l’overbooking.' },
  { icon: 'bed', title: 'Housekeeping pianificato', text: 'Le pulizie seguono partenze e arrivi, con segnalazione immediata di guasti o anomalie.' },
  { icon: 'cog', title: 'Manutenzione negli stessi slot', text: 'Interventi preventivi e straordinari incastrati nel calendario, senza bloccare la vendita della camera.' },
  { icon: 'lock', title: 'Visibilità per reparto', text: 'Ogni addetto vede solo ciò che gli serve, dalla lavanderia alla reception.' },
];

/* --- 3. Distribuzione e tariffe ----------------------------------------- */
export const distribution = [
  { icon: 'refresh', title: 'Channel manager integrato (Channex)', text: 'Aggiornamento automatico di disponibilità e tariffe su tutti gli OTA collegati, azzerando il rischio di overbooking tra canali.' },
  { icon: 'sun', title: 'Tariffazione stagionale nel CRM', text: 'Bassa stagione, alta stagione e periodi speciali con fasce di prezzo differenziate, senza fogli di calcolo separati.' },
  { icon: 'shield', title: 'Parity rate sotto controllo', text: 'Stessa tariffa, stessa disponibilità, su ogni canale di vendita.' },
  { icon: 'search', title: 'Dati di prima parte sulla domanda diretta', text: 'Chi visita il sito, cerca una data e non prenota resta un dato della struttura, non del fornitore del booking engine.' },
];

/* --- 4. Due strade: da zero oppure accanto al PMS ----------------------- */
export const modules = [
  { icon: 'deskbell', title: 'Front office', text: 'Check-in, check-out e planning camere in un’unica schermata.' },
  { icon: 'bed', title: 'Housekeeping', text: 'Pulizie e manutenzione pianificate sullo stesso calendario delle prenotazioni.' },
  { icon: 'document', title: 'Amministrazione', text: 'Fatturazione elettronica, Alloggiati Web, ISTAT e reportistica, tutto automatico.' },
  { icon: 'code', title: 'Booking engine', text: 'Motore di prenotazione diretta collegato al sito, sincronizzato in tempo reale con la disponibilità.' },
  { icon: 'globe', title: 'Channel manager', text: 'Distribuzione automatica su Booking.com, Airbnb e gli altri OTA tramite Channex.' },
];

export const pmsPoints = [
  { title: 'Nessuna migrazione forzata', text: 'Il tuo PMS resta al suo posto, i dati continuano a vivere lì dove sono oggi.' },
  { title: 'Integrazione, non duplicazione', text: 'Il CRM aggiunge marketing, operatività di reparto e fidelizzazione senza reinserire i dati a mano.' },
  { title: 'Un ecosistema pensato per l’apertura', text: 'API documentate, non un sistema chiuso da cui è difficile uscire.' },
  { title: 'La scelta resta tua', text: 'Con il tempo puoi decidere se restare nel modello ibrido o migrare anche il gestionale su Zoho.' },
];

/* --- 5. Marketing: il percorso dell'ospite ------------------------------ */
export const marketing = [
  { icon: 'chart', tool: 'PageSense', text: 'Mappa il funnel di prenotazione (camera, ricerca, riepilogo, pagamento), individua dove si interrompe e lo corregge con test A/B mirati.' },
  { icon: 'chat', tool: 'SalesIQ', text: 'Intercetta in chat l’ospite indeciso, con trigger contestuali: chi cerca una data senza prenotare, chi torna più volte, chi è già cliente riconosciuto dal CRM.' },
  { icon: 'inbox', tool: 'Forms', text: 'Raccoglie richieste e preventivi senza disperdere il lead tra mille canali.' },
  { icon: 'send', tool: 'Marketing Automation', text: 'Trasforma i contatti raccolti in prenotazioni dirette attribuite, con campagne mirate prima e dopo il soggiorno.' },
  { icon: 'megaphone', tool: 'Social', text: 'Presidio continuo su ogni canale, messaggi e lead in un’unica coda.' },
  { icon: 'star', tool: 'Survey', text: 'Misura l’NPS a fine soggiorno e lo correla alla tipologia di camera.' },
  { icon: 'refresh', tool: 'Thrive', text: 'Trasforma l’ospite che riparte in un ospite che torna, con programmi di loyalty e referral.' },
];

/* --- 6. Reparti connessi ------------------------------------------------ */
export const departments = [
  { icon: 'glass', title: 'Ristorante', text: 'Coperti prenotati sempre visibili, addebiti extra caricati direttamente sulla camera.' },
  { icon: 'coffee', title: 'Bar', text: 'Consumazioni registrate al volo, nessun blocchetto cartaceo da riconciliare a fine turno.' },
  { icon: 'bed', title: 'Pulizie', text: 'Lista camere da pulire aggiornata in automatico, con segnalazione immediata di anomalie o danni.' },
  { icon: 'check', title: 'Zero doppi inserimenti', text: 'Un solo addebito, un solo conto, una sola fonte di verità.' },
];

/* --- 7. Amministrazione ------------------------------------------------- */
export const compliance = [
  { icon: 'shield', title: 'Alloggiati Web', text: 'I dati della Questura inviati automaticamente al check-in, nessun documento da caricare a mano a fine giornata.' },
  { icon: 'document', title: 'ISTAT turismo e tassa di soggiorno', text: 'Comunicazioni generate senza doppia battitura dei dati ospite.' },
  { icon: 'wallet', title: 'Fatturazione elettronica via SdI', text: 'Ogni fattura già conforme al Sistema di Interscambio, dal preventivo all’incasso.' },
  { icon: 'users', title: 'Un’unica anagrafica', text: 'I dati inseriti una volta in CRM alimentano prenotazione, fattura e adempimenti di legge.' },
];

/* --- 8. Numeri (dashboard) --------------------------------------------- */
export const insights = [
  { icon: 'close', title: 'Richieste respinte per motivo', text: 'Tutto esaurito o minimo notti: capisci quanto margine resta sul tavolo.' },
  { icon: 'users', title: 'Composizione della domanda', text: 'Coppie, famiglie, gruppi, con anticipo medio di prenotazione.' },
  { icon: 'layers', title: 'Performance per canale', text: 'Diretto, OTA e agenzie a confronto, nella stessa dashboard.' },
  { icon: 'clock', title: 'Tre ritmi di decisione', text: 'Dashboard settimanali per marketing e revenue, mensili per la direzione.' },
];

/* --- 9. Ecosistema Zoho ------------------------------------------------- */
export const zohoStats = [
  { value: '45+', label: 'applicazioni integrate su un unico account' },
  { value: '30', label: 'anni di attività' },
  { value: '1 mln+', label: 'aziende clienti nel mondo' },
  { value: 'ISO 27001', label: 'data center di proprietà, certificati' },
];

export const ecosystem = [
  { icon: 'layers', title: 'Una sola piattaforma, non un fornitore in più', text: 'Reception, marketing, assistenza e back office sullo stesso stack, con lo stesso dato al centro.' },
  { icon: 'lock', title: 'Il dato resta della struttura', text: 'Esportabile in ogni momento, mai chiuso nel silo di un singolo fornitore. Nessun modello pubblicitario sui dati.' },
  { icon: 'building', title: 'Cresce con l’hotel', text: 'Dall’indipendente di 20 camere al gruppo con più strutture, senza cambiare piattaforma.' },
  { icon: 'plug', title: 'Stessa famiglia, zero fornitori aggiuntivi', text: 'Ogni modulo che aggiungi — Bookings, People, Analytics — condivide dati e accessi: non è un nuovo contratto da firmare altrove.' },
];

/* --- Consulenza: cosa si affronta -------------------------------------- */
export const consultPoints = [
  {
    icon: 'wallet',
    title: 'Quanto vale spostare dieci punti sul diretto',
    text: 'Partiamo dai numeri reali del tuo hotel: quanto pesano oggi le commissioni OTA e cosa cambia recuperando una parte di prenotazioni sul canale diretto.',
  },
  {
    icon: 'calendar',
    title: 'Quali reparti coordinare da subito',
    text: 'Reception, pulizie, manutenzione, ristorante, bar: vediamo dove oggi si perde tempo e dove il calendario unico dà il ritorno più rapido.',
  },
  {
    icon: 'bolt',
    title: 'Cosa cambia già nella prima settimana',
    text: 'Niente promesse generiche: ti indichiamo cosa si può attivare subito, con il gestionale che usi oggi che resta al suo posto.',
  },
];

/* --- FAQ --------------------------------------------------------------- */
export const faq = [
  {
    q: 'Che cos’è CRM Hotellerie, rispetto a Zoho?',
    a: `È Zoho, con il suo CRM e tutte le app di marketing, personalizzato sul tuo hotel da noi: Zoho Authorized Partner da ${site.partnerYears} anni. Zoho fornisce la piattaforma e le licenze; noi la conoscenza della suite, la personalizzazione, la formazione e l’assistenza in italiano.`,
  },
  {
    q: 'Devo acquistare le licenze Zoho a parte?',
    a: 'Sì. CRM Hotellerie funziona sull’account Zoho della tua struttura, con licenze in abbonamento a parte. Serve almeno l’edizione Enterprise di Zoho CRM, inclusa anche in Zoho One: ti indichiamo noi la soluzione giusta e la attiviamo come partner. I costi li vediamo insieme in consulenza, sui numeri della tua struttura.',
  },
  {
    q: 'Posso tenere il gestionale e il booking engine che uso già?',
    a: 'Sì. Puoi partire da CRM e marketing lasciando al suo posto il gestionale che usi oggi: in consulenza vediamo come portare nel CRM i dati di prenotazioni e ospiti dal sistema che hai, e se e quando ha senso fare di più.',
  },
  {
    q: 'Cosa succede ai miei dati se un giorno smetto di lavorare con voi?',
    a: 'Restano tuoi. L’account Zoho è della struttura: moduli, ospiti, prenotazioni e storico rimangono nel tuo CRM e puoi esportarli in ogni momento. Nessun modello pubblicitario sui dati.',
  },
  {
    q: 'Posso gestire con Zoho anche il personale dell’hotel?',
    a: 'Sì. Zoho People è il modulo dedicato alla gestione delle persone: anagrafica dei dipendenti, presenze, ferie e permessi, turni e inserimento dei nuovi assunti. Vive sullo stesso account del CRM Hotellerie, con gli stessi accessi, così reception, housekeeping e direzione lavorano su dati coerenti senza un altro gestionale da affiancare.',
  },
  {
    q: 'Zoho è solo un CRM?',
    a: 'No. Zoho è un ecosistema di oltre 45 applicazioni integrate su un unico account, che coprono aree diverse: vendite e marketing, assistenza clienti, fatturazione e contabilità, risorse umane, analisi dei dati e collaborazione. Il CRM Hotellerie è il cuore, ma ogni modulo che aggiungi condivide dati e accessi: un solo sistema, non un nuovo contratto da firmare altrove.',
  },
  {
    q: 'Il sistema è personalizzabile sulla mia struttura?',
    a: 'Sì, ed è il punto di forza. Non è un software preconfezionato: lo cuciamo su misura del tuo hotel. Il widget di prenotazione porta i colori, il logo e i campi della struttura; pipeline, preventivi, ruoli per reparto, automazioni e dashboard si tarano sul tuo modo di lavorare e possono crescere nel tempo, senza cambiare piattaforma.',
  },
];

/* --- Landing SEO: contenuti specifici ------------------------------------ */
export const seo = {
  title: 'CRM e marketing per hotel su Zoho: segui ogni ospite dall’inizio alla fine',
  description:
    'CRM e marketing per hotel su Zoho: chat sul sito, scheda ospite completa e campagne che riportano l’ospite sul canale diretto. I dati restano tuoi. Sblocca la demo.',
};

export const photo = (name) => u(`/img/photos/${name.includes('.') ? name : name + '.webp'}`);

/* Le tre aree, come i tre pallini di bemyguest.it */
export const pillars = [
  { color: 'magenta', label: 'Prenotazioni dirette' },
  { color: 'teal', label: 'Reparti coordinati' },
  { color: 'orange', label: 'Adempimenti automatici' },
];

/* Vantaggi (sezione #vantaggi) con foto reale della struttura dimostrativa */
export const benefits = [
  {
    id: 'dirette',
    color: 'magenta',
    kicker: 'Prenotazioni dirette',
    title: 'Dalla prenotazione dell’ospite al tuo calendario, senza passaggi',
    text: 'Il nostro widget, creato ad hoc, vive sul sito dell’hotel e porta la richiesta completa direttamente in Zoho. Stesso calendario della reception, nessuna commissione sulle prenotazioni dirette, dati dell’ospite che restano tuoi.',
    bullets: [
      'Widget con il brand dell’hotel, date, ospiti, camera e trattamento',
      'Booking engine sincronizzato in tempo reale con la disponibilità',
      'Channel manager Channex per Booking.com, Airbnb e gli altri OTA',
    ],
    img: 'prenotazioni-dirette.jpg',
    pos: '0% 0%',
    alt: 'Planning del CRM con le prenotazioni dirette arrivate dal widget',
  },
  {
    id: 'reparti',
    color: 'teal',
    kicker: 'Reparti coordinati',
    title: 'Reception, pulizie e manutenzione sullo stesso calendario',
    text: 'Il planning camere anti-overbooking non vive da solo: la cameriera ai piani sa quali camere liberare prima del check-in e la reception non assegna mai una camera non ancora pronta.',
    bullets: [
      'Chiave univoca camera-data contro l’overbooking',
      'Housekeeping e manutenzione negli stessi slot',
      'Ristorante e bar addebitano sul conto della camera',
    ],
    img: 'aree-comuni-reparti.jpg',
    pos: '0% 0%',
    alt: 'Aree comuni nel CRM: pulizie, manutenzioni e segnalazioni dei reparti in un’unica schermata',
  },
  {
    id: 'adempimenti',
    color: 'orange',
    kicker: 'Adempimenti automatici',
    title: 'Alloggiati Web, ISTAT e fatture partono al check-in',
    text: 'I dati inseriti una volta alimentano prenotazione, fattura e obblighi di legge: niente portali da aprire a fine giornata, niente doppie battiture.',
    bullets: [
      'Alloggiati Web inviato automaticamente alla Questura',
      'ISTAT e tassa di soggiorno generati dall’anagrafica',
      'Fatturazione elettronica conforme al Sistema di Interscambio',
    ],
    img: 'checkout-saldo.jpg',
    pos: '66% 0%',
    alt: 'Check-out nel CRM: saldo da pagare, pagamenti registrati e chiusura del conto',
  },
];

/* Galleria reparti connessi */
export const deptShots = [
  { img: 'ristorante-sala', alt: 'Sala ristorante dell’hotel', cap: 'Ristorante: coperti sempre visibili' },
  { img: 'cocktail', alt: 'Cocktail servito al bar dell’hotel', cap: 'Bar: addebito sulla camera in pochi secondi' },
  { img: 'colazione', alt: 'Sala colazioni di un hotel', cap: 'Colazioni e sale' },
  { img: 'spa-sauna', alt: 'Area spa con sauna', cap: 'Spa e servizi extra' },
];

export const steps = [
  { n: '1', title: 'Lasci i tuoi dati', text: 'Pochi secondi: nome, struttura, email e telefono. Nessuna carta, nessun impegno.' },
  { n: '2', title: 'Ricevi la demo e ti richiamiamo', text: 'Subito dopo l’invio sblocchi il sito dimostrativo con il widget attivo; ti contattiamo entro 1 giorno lavorativo.' },
  { n: '3', title: 'Consulenza sui tuoi numeri', text: 'Un confronto gratuito su commissioni OTA, reparti e adempimenti. Si configura solo se ha senso per te.' },
];

/* --- Concetto hero: il percorso in un unico sistema ----------------------- */
export const flow = [
  { icon: 'calendar', title: 'Prenotazione', text: 'L’ospite sceglie date e camera' },
  { icon: 'code', title: 'Widget su misura', text: 'Sul sito, con il brand dell’hotel' },
  { icon: 'bed', title: 'Reparti', text: 'Reception, pulizie, bar e ristorante' },
  { icon: 'megaphone', title: 'Marketing', text: 'Prima, durante e dopo il soggiorno' },
  { icon: 'chart', title: 'Dashboard', text: 'Numeri, adempimenti e controllo' },
];

/* --- Perché Zoho: cucito su misura ---------------------------------------- */
export const tailor = [
  { icon: 'code', title: 'Il widget con il tuo brand', text: 'Colori, font, logo, lingue e campi sono quelli dell’hotel: sul sito sembra nato lì.' },
  { icon: 'document', title: 'Pipeline e preventivi', text: 'Stati reali, template di preventivo e assegnazioni tarati sul tuo processo.' },
  { icon: 'lock', title: 'Ruoli per reparto', text: 'Ogni addetto vede solo ciò che gli serve, dalla lavanderia alla reception.' },
  { icon: 'bolt', title: 'Automazioni su misura', text: 'Promemoria, messaggi pre e post soggiorno, upselling: le regole le scriviamo con te.' },
  { icon: 'chart', title: 'Dashboard che guardi davvero', text: 'Gli indicatori che contano per te, con ritmo settimanale e mensile.' },
  { icon: 'layers', title: 'Cresce con l’hotel', text: 'Aggiungi People, Books, Desk o Analytics senza cambiare piattaforma né migrare dati.' },
];

/* --- Partner ufficiale Zoho ---------------------------------------------- */
export const partnerPoints = [
  {
    icon: 'shield',
    title: 'Riconoscimento Zoho',
    text: 'Mineo Srl è Zoho Authorized Partner: operiamo con il riconoscimento ufficiale di Zoho, non come rivenditore improvvisato.',
  },
  {
    icon: 'cog',
    title: 'Esperienza quotidiana su Zoho',
    text: 'Ogni giorno configuriamo Zoho per aziende di settori diversi: CRM, marketing automation, assistenza, progetti e integrazioni. Conosciamo la piattaforma da dentro.',
  },
  {
    icon: 'building',
    title: 'Un prodotto completo, fatto per gli hotel',
    text: 'CRM Hotellerie non è un modello generico adattato in fretta: è un prodotto verticale costruito da noi su Zoho, con calendario unico, widget, channel manager e adempimenti già pensati per l’albergo.',
  },
];

export const partnerPromises = [
  'Un solo referente per software, configurazione e assistenza',
  'Assistenza e formazione dei reparti in italiano',
  'Aggiornamenti e nuovi moduli Zoho senza cambiare sistema',
];

/* --- Lead magnet: cosa si sblocca con la demo ------------------------------ */
export const demoUnlock = [
  { icon: 'code', title: 'Il widget dal lato dell’ospite', text: 'Prova una richiesta di prenotazione sul sito dell’hotel dimostrativo.' },
  { icon: 'inbox', title: 'La richiesta che arriva in Zoho', text: 'La stessa richiesta, completa e assegnata, nel CRM.' },
  { icon: 'chart', title: 'La dashboard della direzione', text: 'RevPAR, ADR, richieste respinte e canali di vendita.' },
  { icon: 'cog', title: 'Il tuo caso, su misura', text: 'Nella consulenza vediamo come cucirlo sulla tua struttura.' },
];

/* --- Pagina di ringraziamento -------------------------------------------- */
export const thanksSteps = [
  { n: '1', title: 'Confermiamo l’orario', text: 'Entro 1 giorno lavorativo ti chiamiamo per confermare giorno e fascia scelti.' },
  { n: '2', title: 'Prepara tre numeri (facoltativo)', text: 'Camere, quota di prenotazioni OTA e gestionale in uso: bastano per partire dai tuoi dati reali.' },
  { n: '3', title: 'Consulenza gratuita', text: 'Vediamo insieme dove recuperare margine e cosa cambia già nella prima settimana.' },
];

/* ============================================================================
   FUNNEL COMPLETO
   1 landing (/) → 2 demo sbloccata (/demo-sbloccata) → 3 prenota consulenza
   (/prenota-consulenza) → 4 grazie finale (/grazie)
   ========================================================================== */
export const funnelPaths = {
  demo: '/demo-sbloccata',
  book: '/prenota-consulenza',
  thanks: '/grazie',
  /* pagina mostrata dopo l'invio del form della home (reindirizzamento da impostare in Zoho Forms) */
  formThanks: '/grazie-form',
};

export const funnelSteps = [
  { n: 1, label: 'Dati' },
  { n: 2, label: 'Demo' },
  { n: 3, label: 'Consulenza' },
];

/* Pagina "demo sbloccata": tre cose da provare */
export const demoTasks = [
  { icon: 'code', title: 'Fai una richiesta come un ospite', text: 'Apri Hotel Soleluna, scegli date e camera e prova il widget di prenotazione come lo userebbe un tuo cliente.' },
  { icon: 'inbox', title: 'Pensa a cosa succede dietro le quinte', text: 'La stessa richiesta arriva in Zoho completa, assegnata e con i consensi registrati. Nella consulenza te la mostriamo in diretta.' },
  { icon: 'chart', title: 'Immagina i tuoi numeri', text: 'Quante richieste dirette ricevi oggi e quante ne perdi? La dashboard le rende visibili: ne parliamo insieme.' },
];

/* Cosa interessa di più: scelto nella demo, portato nella prenotazione */
export const interests = [
  { id: 'marketing', label: 'Marketing e fidelizzazione', icon: 'megaphone' },
  { id: 'dirette', label: 'Più prenotazioni dirette', icon: 'wallet' },
  { id: 'pms', label: 'Affiancare il mio PMS', icon: 'plug' },
  { id: 'dashboard', label: 'Dashboard e numeri', icon: 'chart' },
  { id: 'reparti', label: 'Coordinare i reparti', icon: 'calendar' },
  { id: 'adempimenti', label: 'Adempimenti automatici', icon: 'shield' },
];

export const bookingSlots = [
  { id: 'mattina', label: 'Mattina' },
  { id: 'pomeriggio', label: 'Pomeriggio' },
  { id: 'indifferente', label: 'Indifferente' },
];

/* Cosa si vede nella consulenza (pagina prenotazione) */
export const bookingAgenda = [
  { icon: 'wallet', title: 'I tuoi numeri', text: 'Quanto pesano oggi le commissioni OTA e quanto margine puoi recuperare sul canale diretto.' },
  { icon: 'code', title: 'Il widget sul tuo sito', text: 'Come si adatta al brand dell’hotel e come la richiesta arriva in Zoho.' },
  { icon: 'cog', title: 'Cosa cambia da subito', text: 'Quali reparti coordinare per primi e come affiancare il gestionale che usi oggi.' },
];

/* --- Hero: dal sito alla strategia di marketing (differenziante) ---------- */
export const heroFlow = [
  { icon: 'code', title: 'Il plugin sul tuo sito', text: 'Il nostro widget raccoglie visite e richieste direttamente dal sito dell’hotel.' },
  { icon: 'calendar', title: 'La prenotazione, gestita', text: 'Richiesta completa, preventivo e conferma sullo stesso calendario della reception.' },
  { icon: 'users', title: 'I dati, organizzati nel CRM', text: 'Ogni ospite una scheda unica: storico, preferenze e consensi.' },
  { icon: 'megaphone', title: 'La strategia, con le app Zoho', text: 'Campagne, chat, analisi e fidelizzazione costruite sui tuoi dati.' },
];

/* --- Hero "il dato resta tuo": le tre fasi -------------------------------- */
export const heroPhases = [
  { icon: 'chat', title: 'Prima: chat e visite', text: 'Chatti con l’ospite indeciso e registri ricerche, abbandoni e ritorni sul sito: ogni evento diventa un dato tuo.', apps: ['SalesIQ chat', 'PageSense eventi'] },
  { icon: 'bed', title: 'Durante: richiesta e soggiorno', text: 'Richieste, preventivi, preferenze e servizi usati finiscono nella stessa scheda, con lo storico completo.', apps: ['Forms', 'Zoho CRM'] },
  { icon: 'chart', title: 'Dopo: analisi e ritorno', text: 'Dallo storico analizzi i dati e riparti con survey, campagne e loyalty che riportano l’ospite sul canale diretto.', apps: ['Analytics', 'Survey', 'Marketing Automation', 'Thrive'] },
];

/* --- Il widget dal vivo: schermate reali del CRM ---------------------------- */
export const widgetTabs = [
  {
    id: 'chat', icon: 'chat', tag: 'Marketing', title: 'Visitatori live e chat', url: 'salesiq.zoho.eu · Hotel Soleluna',
    text: 'Vedi chi è sul sito in questo momento, da dove arriva e da quanto tempo: puoi intercettarlo in chat prima che se ne vada.',
    img: 'salesiq-live', alt: 'SalesIQ: visualizzazione live dei visitatori del sito dell’hotel',
    chips: ['Visitatori in tempo reale', 'Chat con l’ospite indeciso', 'Provenienza e tempo sul sito'],
  },
  {
    id: 'analisi', icon: 'chart', tag: 'Marketing', title: 'Analisi del sito', url: 'pagesense.zoho.eu · Hotel Soleluna',
    text: 'Pagine più viste, tempo medio, rimbalzi e canali di acquisizione: ogni visita diventa un dato tuo, con lo storico.',
    img: 'pagesense-pagine', alt: 'PageSense: analisi delle pagine del sito con visualizzazioni, ingressi e tasso di rimbalzo', img2: 'pagesense-canali', alt2: 'PageSense: canali di acquisizione con sessioni e visitatori',
    chips: ['Pagine e percorsi', 'Canali di provenienza', 'Storico giornaliero'],
  },
  {
    id: 'planning', icon: 'calendar', tag: 'Prenotazione', title: 'Planning unico',
    text: 'Prenotazioni, pulizie e manutenzioni sullo stesso calendario, con stagione e occupazione di ogni giorno.',
    img: 'planning', alt: 'Planning camere nel CRM con prenotazioni, pulizie e manutenzioni',
    chips: ['Anti-overbooking', 'Stagionalità visibile', 'Tutti i reparti'],
  },
  {
    id: 'interventi', icon: 'cog', tag: 'Reparti', title: 'Pulizie e manutenzioni',
    text: 'Pianifichi ogni intervento con priorità, orari, staff e ricorrenza. La camera si blocca solo quando serve.',
    img: 'pulizie', alt: 'Scheda di modifica di una pulizia nel planning', img2: 'manutenzione', alt2: 'Scheda di modifica di una manutenzione',
    chips: ['Staff assegnato', 'Ricorrenze', 'Esito verifica'],
  },
  {
    id: 'segnalazioni', icon: 'bell', tag: 'Reparti', title: 'Segnalazioni',
    text: 'Guasti e richieste dei reparti, per camera e per aree comuni: da fare, in corso, completata.',
    img: 'segnalazioni', alt: 'Elenco segnalazioni delle camere e delle aree comuni', img2: 'aree-comuni', alt2: 'Aree comuni con pulizie e manutenzioni',
    chips: ['Camere e aree comuni', 'Stati e priorità', 'Un solo posto'],
  },
  {
    id: 'addebiti', icon: 'wallet', tag: 'Soggiorno', title: 'Addebiti in hotel',
    text: 'Ristorante, bar ed extra finiscono sul conto della camera: totale dovuto, extra da saldare e già incassati.',
    img: 'addebiti', alt: 'Addebiti in hotel registrati sulla camera',
    chips: ['Un solo conto', 'Zero blocchetti', 'Extra in tempo reale'],
  },
  {
    id: 'checkout', icon: 'key', tag: 'Check-out', title: 'Check-out e saldo',
    text: 'Saldo da pagare, pagamenti registrati, stampa del conto e check-out in un unico passaggio.',
    img: 'checkout', alt: 'Schermata di check-out con saldo e pagamenti', img2: 'checkout-elenco', alt2: 'Elenco delle prenotazioni ancora aperte',
    chips: ['Acconti registrati', 'Stampa conto', 'Prenotazioni aperte'],
  },
  {
    id: 'camere', icon: 'bed', tag: 'Catalogo', title: 'Tipi di camera',
    text: 'Il catalogo camere con foto, metri quadri, ospiti e descrizione: è lo stesso che alimenta il widget sul sito.',
    img: 'tipi-camera', alt: 'Catalogo dei tipi di camera con foto e descrizioni',
    chips: ['Foto e descrizioni', 'Capienza', 'Collegato al widget'],
  },
  {
    id: 'tariffe', icon: 'sun', tag: 'Configurazione', title: 'Tariffe e stagioni',
    text: 'Periodi di stagione, regole per giorno della settimana e calendario prezzi: impostati una volta, validi ovunque.',
    img: 'tariffe', alt: 'Configurazione hotel con tariffe e regole per giorno', img2: 'configurazione', alt2: 'Menu di configurazione Hotel - Prenotazioni e Interventi',
    chips: ['Alta / media / bassa', 'Regole weekend', 'Minimo notti'],
  },
];

/* ==========================================================================
   L'OSPITE AL CENTRO (sezione #ospite): cosa contiene la scheda ospite.
   Ogni voce corrisponde a campi reali dei moduli Prenotazioni/Addebiti.
   ========================================================================== */
export const guestRecord = [
  { title: 'Storico soggiorni e canale', text: 'ogni prenotazione, diretta od OTA, con camera, trattamento e periodo.' },
  { title: 'Spesa in hotel', text: 'ristorante, bar, spa ed extra addebitati in camera, soggiorno per soggiorno.' },
  { title: 'Preferenze e interessi', text: 'lingua, note per la ristorazione, richieste di arrivo anticipato o partenza posticipata.' },
  { title: 'Segmenti pronti', text: 'nuovo, ricorrente, abituale; privato, business, VIP e influencer.' },
  { title: 'Consensi registrati', text: 'privacy, newsletter e WhatsApp raccolti con la prenotazione.' },
];

/* Scheda ospite d'esempio (dati dimostrativi, persona inventata) */
export const guestCard = {
  initials: 'GR',
  name: 'Giulia R.',
  sub: 'Ospite abituale · 4 soggiorni',
  segment: 'Abituale',
  rows: [
    { k: 'Ultimo soggiorno', v: 'Agosto · Junior suite · mezza pensione' },
    { k: 'Canale', v: 'La prima volta da un portale, poi sempre dal sito' },
    { k: 'Spesa extra media', v: '160 € a soggiorno (spa, cena)' },
    { k: 'Interessi', v: 'Spa · Enogastronomia · Bici' },
    { k: 'Lingua', v: 'Italiano' },
    { k: 'Consensi', v: 'Privacy ✓ · Newsletter ✓ · WhatsApp ✓' },
  ],
  next: 'Offerta weekend spa a marzo, inviata solo a ospiti abituali interessati alla spa.',
};

/* Cosa ci fai con la scheda ospite */
export const guestUses = [
  { icon: 'calendar', title: 'Riempi i periodi vuoti', text: 'Scegli il segmento giusto (famiglie, coppie, ospiti abituali) e lanci l’offerta sulle date in cui la struttura è scarica.' },
  { icon: 'sparkles', title: 'Vendi di più prima dell’arrivo', text: 'Spa, cena, transfer, partenza posticipata: proposti nei giorni prima del soggiorno a chi ha già mostrato interesse.' },
  { icon: 'refresh', title: 'Riporta l’ospite sul diretto', text: 'Chi è arrivato da un portale torna a prenotare dal tuo sito, senza commissioni, grazie ai consensi raccolti durante il soggiorno.' },
];

/* ==========================================================================
   CHI FA COSA (sezione #chi-fa-cosa): la collaborazione con Zoho, senza cifre.
   ========================================================================== */
export const zohoRoles = [
  {
    who: 'Zoho', icon: 'layers', title: 'CRM e marketing',
    text: 'CRM, marketing automation, chat sul sito, analisi e tutte le altre app su un unico account, con data center certificati ISO 27001.',
    items: ['Licenze in abbonamento, a parte', 'Edizione minima: Zoho CRM Enterprise, inclusa in Zoho One', 'Aggiornamenti della piattaforma inclusi'],
  },
  {
    who: 'Noi', icon: 'cog', title: 'La personalizzazione',
    text: `Da ${site.partnerYears} anni lavoriamo su Zoho ogni giorno: lo cuciamo sul tuo hotel con moduli, widget di prenotazione, automazioni e integrazioni scritte da noi.`,
    items: [`Zoho Authorized Partner da ${site.partnerYears} anni`, 'Conoscenza dell’intera suite, non solo del CRM', 'Configurazione, formazione e assistenza in italiano'],
  },
  {
    who: 'La tua struttura', icon: 'lock', title: 'I dati',
    text: 'L’account Zoho è della struttura: ospiti, prenotazioni e storico restano tuoi, esportabili in ogni momento.',
    items: ['Nessun modello pubblicitario sui dati', 'Se cambi partner, CRM e storico restano', 'Aggiungi Books, People o Desk quando ti servono'],
  },
];

/* Cosa paghi: solo le voci, le cifre si vedono in consulenza */
export const payItems = [
  { title: 'Licenze Zoho', text: 'abbonamento per utente, nell’edizione che ti indichiamo.' },
  { title: 'Personalizzazione CRM Hotellerie', text: 'configurazione sulla tua struttura e formazione iniziale dei reparti.' },
  { title: 'Servizi opzionali', text: 'channel manager per gli OTA e marketing gestito da noi, se vuoi delegarlo.' },
];

/* App Zoho su cui lavoriamo ogni giorno (sezione #chi-fa-cosa) */
export const zohoApps = [
  'CRM', 'Marketing Automation', 'Campaigns', 'SalesIQ', 'PageSense', 'Forms', 'Analytics',
  'Books', 'Desk', 'People', 'Creator', 'Catalyst', 'Flow', 'Sign', 'WorkDrive', 'Writer', 'Voice',
];

/* --- Grazie dopo il form della home --------------------------------------- */
export const formThanksSteps = [
  { n: '1', title: 'Ti contattiamo entro 1 giorno lavorativo', text: 'Una persona del team Mineo ti chiama o ti scrive per capire come lavora il tuo hotel.' },
  { n: '2', title: 'Prepara tre numeri (facoltativo)', text: 'Camere, quota di prenotazioni OTA e gestionale in uso: bastano per partire dai tuoi dati reali.' },
  { n: '3', title: 'Consulenza gratuita', text: 'Vediamo insieme dove recuperare margine e cosa cambia già nella prima settimana. Nessun impegno.' },
];
