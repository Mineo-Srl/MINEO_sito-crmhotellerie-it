/* ==========================================================================
   Dati del sito CRM Hotellerie (www.crmhotellerie.it), di MINEO S.r.l.
   Recapiti, navigazione e contenuti della home. I testi delle 7 app di
   marketing stanno in apps.js.
   ========================================================================== */

export const site = {
  name: 'CRM Hotellerie',
  product: 'CRM Hotellerie',
  legal: 'MINEO S.r.l.',
  domain: 'www.crmhotellerie.it',
  url: 'https://www.crmhotellerie.it',
  tagline: 'Il CRM per hotel costruito su Zoho',
  mainSite: 'https://www.mineoepartners.it',

  // Anni da Zoho Authorized Partner: vale per tutto il sito
  partnerYears: 9,

  // Contatti
  email: 'info@mineoepartners.it',
  privacyEmail: 'privacy@mineoepartners.it',
  pec: 'mineosrl@legalmail.it',
  whatsapp: '+39 389 668 0301',
  whatsappHref: '393896680301',

  // Sede
  street: 'Viale Villoresi, 3',
  zip: '20045',
  city: 'Lainate',
  province: 'MI',
  country: 'IT',
  address: 'Viale Villoresi 3, 20045 Lainate (MI)',

  // Dati fiscali
  vat: 'P.IVA 14522690966',
  vatId: 'IT14522690966',
  sdi: 'JKKZDGR',

  // Agenda Zoho Bookings per le consulenze gratuite
  bookings: 'https://mineoepartners.zohobookings.eu/#/andreamineo',

  // Hotel dimostrativo
  demoUrl: 'https://hotelsoleluna.crmhotellerie.it/',

  linkedin: 'https://www.linkedin.com/company/80985139',

  // ID Google Analytics 4 (es. 'G-XXXXXXX'): si carica solo dopo il consenso.
  gaId: '',

  // Zoho PageSense (progetto Mineo "portaleswm", lo stesso dell'attuale crmhotellerie.it):
  // si carica solo con il consenso ai cookie di analisi.
  pagesense: 'https://cdn-eu.pagesense.io/js/portaleswm/a01f018e8ebe4d4cadf1aa8128000557.js',

  // Zoho SalesIQ (chat di Mineo, la stessa di mineoepartners.it). Con il consenso ai cookie
  // di analisi si carica subito; senza, parte solo quando il visitatore apre la chat.
  salesiq: 'https://salesiq.zohopublic.eu/widget?wc=siqda58f7dfdca0b025ca6ad277a6fb7c77427ab5ae4c340bf5a8de58116d5cc885',
};

export const bookingsUrl = site.bookings;
export const whatsappUrl = `https://wa.me/${site.whatsappHref}`;

/* --- Guida PDF (lead magnet) -------------------------------------------- */
export const guide = {
  pdf: '/download/guida-crm-hotellerie.pdf',
  pages: 10,
  size: '5,4 MB',
  title: 'Tutto Zoho, cucito sul tuo hotel',
  // Form Zoho Forms "Funnel_hotellerie": dopo l'invio deve reindirizzare a /grazie
  formUrl: 'https://forms.zohopublic.eu/portaleswm/form/Funnelhotellerie/formperma/0v6LduQD91dJDm6b-IMAnhege71Pl-Y9TRZqEtiZaok',
};

/* Form delle richieste di informazioni nelle pagine delle app e in home.
   Per ora è lo stesso form della guida: chi lo compila riceve anche la guida su /grazie.
   Quando c'è un form dedicato basta sostituire l'indirizzo qui. */
export const contactFormUrl = guide.formUrl;

export const guideChapters = [
  { n: '01', title: 'Marketing e conversione', text: 'Portare visitatori sul sito, capire cosa fanno e convincerli a prenotare in diretta.', tags: ['Social', 'PageSense', 'SalesIQ', 'Forms'] },
  { n: '02', title: 'Booking engine e channel manager', text: 'Il motore di prenotazione sul tuo sito e la sincronizzazione con Booking.com, Airbnb e gli altri portali.', tags: ['Widget', 'Channex'] },
  { n: '03', title: 'CRM', text: 'L’archivio vivo dell’ospite: storico, preferenze, consensi, preventivi e comunicazioni prima e dopo il soggiorno.', tags: ['Zoho CRM', 'Marketing Automation', 'Survey', 'Thrive'] },
  { n: '04', title: 'PMS e reparti', text: 'Planning camere, check-in e check-out, conto dell’ospite, fatture, adempimenti, pulizie e manutenzione.', tags: ['Planning', 'Zoho Books', 'App reparti'] },
  { n: '05', title: 'Analytics', text: 'I numeri che servono a marketing, revenue e direzione, con il ritmo giusto per ciascuno.', tags: ['Zoho Analytics'] },
];

export const guideNext = [
  { title: '1 · Ci racconti', text: 'Come lavora oggi il tuo hotel: gestionale in uso, quota di prenotazioni dai portali e cosa ti fa perdere più tempo.' },
  { title: '2 · Ti mostriamo', text: 'CRM Hotellerie in funzione, sui numeri della tua struttura e con le sole app Zoho che ti servono.' },
  { title: '3 · Decidi con calma', text: 'Ricevi una proposta su misura, con tempi e passaggi chiari. Nessun impegno.' },
];

/* --- Navigazione -------------------------------------------------------- */
import { apps } from './apps.js';

export const nav = [
  {
    label: 'App di marketing',
    columns: 2,
    children: apps.map((a) => ({ href: `/${a.slug}`, label: a.name, desc: a.menu, icon: a.icon })),
    foot: { text: 'Sette app Zoho, un solo dato dell’ospite.', href: '/#marketing', cta: 'Vedi il percorso' },
  },
  { href: '/#ospite', label: 'L’ospite' },
  { href: '/#perche-zoho', label: 'Perché Zoho' },
  { href: '/#faq', label: 'FAQ' },
];

/* --- Home --------------------------------------------------------------- */
export const propertyTypes = [
  'Hotel indipendenti', 'Boutique hotel', 'Resort e villaggi', 'Dimore storiche', 'Agriturismi',
  'B&B e affittacamere', 'Residence', 'Piccoli gruppi alberghieri', 'Wellness e spa hotel', 'Nuove aperture',
];

export const heroPoints = [
  'Widget di prenotazione con il tuo brand',
  'Pipeline e preventivi in un unico flusso',
  'Ruoli e viste per ogni reparto',
  'Automazioni prima, durante e dopo il soggiorno',
  'Dashboard per marketing, revenue e direzione',
  'Cresce con l’hotel, un modulo alla volta',
];

export const guestFacts = [
  { icon: 'calendar', title: 'Storico soggiorni', text: 'Date, camere, canale di provenienza, no-show e richieste speciali.' },
  { icon: 'wallet', title: 'Spesa e preferenze', text: 'Quanto ha speso, in cosa, e cosa chiede ogni volta che torna.' },
  { icon: 'filter', title: 'Segmenti', text: 'Coppie, famiglie, business, ospiti abituali: liste che si aggiornano da sole.' },
  { icon: 'shield', title: 'Consensi', text: 'Privacy e marketing registrati con data e fonte, pronti per ogni campagna.' },
];

export const insights = [
  { icon: 'close', title: 'Richieste respinte per motivo', text: 'Tutto esaurito o minimo notti: quanto margine resta sul tavolo.' },
  { icon: 'users', title: 'Composizione della domanda', text: 'Coppie, famiglie, gruppi, con l’anticipo medio di prenotazione.' },
  { icon: 'layers', title: 'Performance per canale', text: 'Diretto, OTA e agenzie a confronto, nella stessa dashboard.' },
  { icon: 'clock', title: 'Tre ritmi di lettura', text: 'Settimanale per marketing e revenue, mensile per la direzione.' },
];

export const reasons = [
  { icon: 'wallet', title: 'Più prenotazioni dirette', text: 'Recuperi margine sul tuo sito e dipendi meno dalle commissioni dei portali.' },
  { icon: 'calendar', title: 'Reparti coordinati', text: 'Reception, pulizie e manutenzione sullo stesso calendario.' },
  { icon: 'document', title: 'Adempimenti automatici', text: 'Alloggiati Web, ISTAT e fatturazione elettronica senza ribattere i dati.' },
];

export const zohoStats = [
  { value: 45, suffix: '+', label: 'applicazioni integrate su un unico account' },
  { value: 30, suffix: '', label: 'anni di attività di Zoho' },
  { value: 1, suffix: ' mln+', label: 'aziende clienti nel mondo' },
  { value: 9, suffix: ' anni', label: 'da Zoho Authorized Partner' },
];

export const paths = [
  {
    title: 'Affianchi il gestionale che hai',
    text: 'Parti da CRM e marketing e lasci il PMS al suo posto. I dati di prenotazioni e ospiti arrivano nel CRM senza reinserirli.',
    points: ['Nessuna migrazione forzata', 'Integrazione, non duplicazione', 'Più avanti decidi tu se andare oltre'],
  },
  {
    title: 'Riparti da zero su Zoho',
    text: 'Front office, housekeeping, amministrazione, booking engine e channel manager sullo stesso sistema del CRM.',
    points: ['Planning camere e check-in/out', 'Channel manager Channex integrato', 'Fatture SdI, Alloggiati Web e ISTAT'],
  },
];

export const steps = [
  { title: 'Scarica la guida', text: 'Dieci pagine per capire come le app Zoho lavorano insieme in un hotel.' },
  { title: 'Guarda la demo', text: 'Hotel Soleluna è il nostro hotel dimostrativo: lo navighi come fosse il tuo.' },
  { title: 'Prenota la consulenza', text: 'Trenta minuti in videochiamata sui numeri della tua struttura. Gratis.' },
];

export const faq = [
  {
    q: 'Che cos’è CRM Hotellerie, rispetto a Zoho?',
    a: `È Zoho, con il suo CRM e le app di marketing, configurato sul tuo hotel da ${site.legal}, Zoho Authorized Partner da ${site.partnerYears} anni. Zoho fornisce la piattaforma e le licenze; noi la configurazione, la formazione e l’assistenza in italiano.`,
  },
  {
    q: 'Devo acquistare le licenze Zoho a parte?',
    a: 'Sì. CRM Hotellerie funziona sull’account Zoho della tua struttura, con licenze in abbonamento. Serve almeno l’edizione Enterprise di Zoho CRM, inclusa anche in Zoho One: ti indichiamo la soluzione giusta e la attiviamo come partner.',
  },
  {
    q: 'Devo attivare tutte e sette le app di marketing?',
    a: 'No. Si parte da quelle che rispondono al problema più urgente, spesso Forms e Marketing Automation, e si aggiungono le altre quando servono. Tutte condividono la stessa anagrafica dell’ospite.',
  },
  {
    q: 'Posso tenere il gestionale e il booking engine che uso già?',
    a: 'Sì. Puoi partire da CRM e marketing lasciando al suo posto il gestionale di oggi: in consulenza vediamo come portare nel CRM i dati di prenotazioni e ospiti.',
  },
  {
    q: 'Cosa succede ai miei dati se smetto di lavorare con voi?',
    a: 'Restano tuoi. L’account Zoho è della struttura: ospiti, prenotazioni e storico rimangono nel tuo CRM e li puoi esportare quando vuoi.',
  },
];
