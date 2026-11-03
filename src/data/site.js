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
  // Form Zoho Forms "Funnel_hotellerie" (lo stesso che sblocca la demo):
  // dopo l'invio deve reindirizzare a /grazie, che sblocca la demo e consegna la guida
  formUrl: 'https://forms.zohopublic.eu/portaleswm/form/Funnelhotellerie/formperma/0v6LduQD91dJDm6b-IMAnhege71Pl-Y9TRZqEtiZaok',
};

/* Form che sblocca la demo: azione principale del sito (home, pagine app, /guida).
   Oggi è il form Zoho "Funnel_hotellerie"; per il form breve a 4 campi basta
   sostituire qui l'indirizzo del nuovo form. */
export const demoFormUrl = guide.formUrl;
export const contactFormUrl = demoFormUrl;

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
  { href: "/perche", label: "Perché" },
  { href: "/come-funziona", label: "Come funziona" },
  {
    label: "Le app",
    hub: "/app",
    hubLabel: "Tutte le app di marketing",
    columns: 2,
    children: apps.map((a) => ({ href: `/${a.slug}`, label: a.name, desc: a.menu, icon: a.icon })),
    foot: { text: "Sette app Zoho, un solo ospite al centro.", href: "/come-funziona", cta: "Come lavorano insieme" },
  },
  { href: "/casi", label: "Casi" },
  { href: "/prezzi", label: "Prezzi" },
  { href: "/chi-siamo", label: "Chi siamo" },
];

/* CTA del sito: una principale (demo, bassa soglia), una secondaria (consulenza). */
export const ctaDemo = { href: '/demo', label: 'Sblocca la demo' };
export const ctaCall = { href: site.bookings, label: 'Prenota una consulenza' };

/* --- Per chi (fascia scorrevole) --- */
export const propertyTypes = [
  'Hotel indipendenti', 'Boutique hotel', 'Resort e villaggi', 'Dimore storiche', 'Agriturismi',
  'B&B e affittacamere', 'Residence', 'Piccoli gruppi alberghieri', 'Wellness e spa hotel', 'Nuove aperture',
];

/* --- Home: il problema -------------------------------------------------- */
export const pains = [
  { icon: 'wallet', title: 'Paghi due volte lo stesso ospite', text: 'La prima volta lo trova il portale. La seconda pure, se non hai modo di riconoscerlo e richiamarlo tu.' },
  { icon: 'users', title: 'Non sai chi è tornato', text: 'Il nome è nel gestionale, la mail in una casella, il messaggio su Instagram. Nessuno ha il quadro intero.' },
  { icon: 'heart', title: 'Il ricordo svanisce', text: 'Un soggiorno perfetto e poi silenzio. L’anno dopo l’ospite cerca di nuovo, e il primo risultato non sei tu.' },
];

/* --- Calcolatore -------------------------------------------------------- */
export const calcDefaults = { rooms: 30, occupancy: 65, adr: 120, otaShare: 60, commission: 18, shift: 10 };

/* --- Il cuore: l'ospite -------------------------------------------------- */
export const guestFacts = [
  { icon: 'calendar', title: 'Ogni soggiorno', text: 'Date, camere, canale, richieste speciali: la storia completa.' },
  { icon: 'heart', title: 'Cosa ama', text: 'La camera vista mare, la spa, il tavolo in terrazza.' },
  { icon: 'filter', title: 'Chi è', text: 'Coppia, famiglia, business, ospite abituale: segmenti che si aggiornano da soli.' },
  { icon: 'shield', title: 'Il suo permesso', text: 'Consensi registrati con data e fonte, per scrivergli senza rischi.' },
];

/* --- Prova sociale ------------------------------------------------------
   ⚠️ SEGNAPOSTO: i casi qui sotto sono ESEMPI di formato, non clienti reali.
   Sostituirli con hotel veri (nome, camere, numeri, citazione, foto) prima della
   pubblicazione, oppure impostare `placeholder: false` solo sui casi verificati. */
export const cases = [
  { placeholder: true, hotel: 'Hotel sul lago', size: '40 camere', metric: '18% → 27%', metricLabel: 'quota di prenotazioni dirette in una stagione', quote: 'Finalmente sappiamo chi torna e lo ringraziamo prima che prenoti altrove.', person: 'Nome Cognome, proprietario' },
  { placeholder: true, hotel: 'Boutique hotel in città', size: '22 camere', metric: '+31%', metricLabel: 'ospiti di ritorno dopo il programma fedeltà', quote: 'Le email partono da sole e parlano come parleremmo noi alla reception.', person: 'Nome Cognome, direttrice' },
  { placeholder: true, hotel: 'Resort al mare', size: '85 camere', metric: '−4 ore', metricLabel: 'a settimana di lavoro manuale sui preventivi', quote: 'Le richieste arrivano complete e assegnate. Rispondiamo in giornata.', person: 'Nome Cognome, revenue manager' },
];

/* Credibilità: numeri di Mineo separati da quelli di Zoho */
export const trust = [
  { value: 9, suffix: ' anni', label: 'da Zoho Authorized Partner', who: 'Mineo' },
  { value: 7, suffix: '', label: 'app di marketing configurate per l’hotel', who: 'Mineo' },
  { value: 45, suffix: '+', label: 'app Zoho su un unico account', who: 'Zoho' },
  { value: 1, suffix: ' mln+', label: 'aziende nel mondo usano Zoho', who: 'Zoho' },
];

/* --- Demo ---------------------------------------------------------------- */
export const demoPoints = [
  'Il sito di Hotel Soleluna con il widget di prenotazione attivo',
  'Una richiesta fatta da te, vista come la vedrebbe la tua reception',
  'La scheda ospite, le automazioni e la dashboard del diretto',
];

/* --- Prezzi --------------------------------------------------------------
   ⚠️ DA CONFERMARE CON MINEO: setup e canone sono SEGNAPOSTO (`null` = non mostrato
   come cifra). Le licenze Zoho sono prezzi pubblici di listino: verificarli su
   zoho.com prima della pubblicazione. */
export const pricing = {
  example: 'Hotel di 25 camere, 3 persone che usano il CRM',
  rows: [
    { label: 'Licenze Zoho CRM Enterprise', value: 'da circa 40 € per utente/mese', note: 'Listino pubblico Zoho, fatturazione annuale. Le paghi a Zoho, il conto è tuo.', link: 'https://www.zoho.com/crm/zohocrm-pricing.html' },
    { label: 'Configurazione iniziale Mineo', value: null, note: 'Una tantum: CRM, widget, moduli, automazioni e formazione del team.' },
    { label: 'Assistenza e evoluzioni', value: null, note: 'Facoltativa, mensile. Puoi anche gestire tutto in autonomia.' },
  ],
  reassure: ['Nessun vincolo pluriennale con noi', 'Licenze e dati restano intestati alla struttura', 'Preventivo scritto prima di iniziare'],
};

/* --- Strada B: il gestionale (pagina /gestionale) ------------------------ */
export const pmsModules = [
  { icon: 'calendar', title: 'Front office e planning', text: 'Check-in, check-out e planning camere in un’unica schermata, lo stesso calendario che alimenta il booking engine.' },
  { icon: 'bed', title: 'Housekeeping e manutenzione', text: 'Pulizie che seguono arrivi e partenze, guasti segnalati subito, interventi incastrati senza bloccare la vendita.' },
  { icon: 'refresh', title: 'Channel manager (Channex)', text: 'Disponibilità e tariffe aggiornate su Booking.com, Airbnb e gli altri portali, senza overbooking.' },
  { icon: 'sun', title: 'Tariffe stagionali', text: 'Bassa, alta stagione e periodi speciali gestiti nel CRM, con parity rate sotto controllo.' },
  { icon: 'shield', title: 'Alloggiati Web e ISTAT', text: 'Dati alla Questura e comunicazioni ISTAT generati dall’anagrafica, senza doppia battitura.' },
  { icon: 'document', title: 'Fatturazione elettronica', text: 'Fatture conformi allo SdI dal preventivo all’incasso, con addebiti di bar e ristorante sul conto camera.' },
];

/* --- FAQ ---------------------------------------------------------------- */
export const faq = [
  {
    q: 'Quanto costa, in pratica?',
    a: 'Due voci separate: le licenze Zoho, che paghi direttamente a Zoho a prezzo di listino, e il nostro lavoro di configurazione. Nella sezione Prezzi trovi un esempio; il preventivo scritto arriva prima di iniziare.',
  },
  {
    q: 'Devo cambiare il gestionale che uso?',
    a: 'No. Si parte da CRM e marketing lasciando il gestionale al suo posto: i dati di prenotazioni e ospiti arrivano nel CRM. Se un giorno vorrai sostituirlo, c’è la strada B.',
  },
  {
    q: 'Che cos’è CRM Hotellerie, rispetto a Zoho?',
    a: `È Zoho, con il suo CRM e le app di marketing, configurato sul tuo hotel da ${site.legal}, Zoho Authorized Partner da ${site.partnerYears} anni. Zoho fornisce piattaforma e licenze; noi configurazione, formazione e assistenza in italiano.`,
  },
  {
    q: 'Cosa vedo nella demo e cosa devo lasciare?',
    a: 'Nome, struttura, email e telefono. Subito dopo si apre Hotel Soleluna, il nostro hotel dimostrativo: provi il widget come un ospite e vedi cosa succede nel CRM. Nessuna chiamata obbligatoria.',
  },
  {
    q: 'Cosa succede ai miei dati se smetto di lavorare con voi?',
    a: 'Restano tuoi. L’account Zoho è della struttura: ospiti, prenotazioni e storico rimangono nel tuo CRM e li esporti quando vuoi.',
  },
];
