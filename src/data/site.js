/* ==========================================================================
   CRM Hotellerie — sito concept costruito sulla guida v3 (5 aree).
   Recapiti, navigazione, guida, segmenti e FAQ. Le pagine funzionalità
   stanno in features.js.
   ========================================================================== */
import { features, groups, featureHref, TOP_LEVEL, AREA_ANCHOR } from './features.js';

export const site = {
  name: 'CRM Hotellerie',
  product: 'CRM Hotellerie',
  legal: 'MINEO S.r.l.',
  domain: 'www.crmhotellerie.it',
  url: 'https://www.crmhotellerie.it',
  tagline: 'Il software unico per il tuo hotel',
  mainSite: 'https://www.mineoepartners.it',
  partnerYears: 9,

  email: 'info@mineoepartners.it',
  privacyEmail: 'privacy@mineoepartners.it',
  pec: 'mineosrl@legalmail.it',
  whatsapp: '+39 389 668 0301',
  whatsappHref: '393896680301',

  street: 'Viale Villoresi, 3',
  zip: '20045',
  city: 'Lainate',
  province: 'MI',
  country: 'IT',
  address: 'Viale Villoresi 3, 20045 Lainate (MI)',
  vat: 'P.IVA 14522690966',

  // Agenda Zoho Bookings di Andrea Mineo per demo e consulenze
  bookings: 'https://mineoepartners.zohobookings.eu/#/andreamineo',
  // Hotel dimostrativo
  demoUrl: 'https://hotelsoleluna.crmhotellerie.it/',
  linkedin: 'https://www.linkedin.com/company/80985139',
};

export const whatsappUrl = `https://wa.me/${site.whatsappHref}`;

export const guide = {
  pdf: '/download/guida-crm-hotellerie.pdf',
  pages: 9,
  size: '9,4 MB',
  title: 'Zoho per il tuo hotel',
  // Form Zoho Forms "Funnel_hotellerie": dopo l'invio deve reindirizzare a /grazie
  formUrl: 'https://forms.zohopublic.eu/portaleswm/form/Funnelhotellerie/formperma/0v6LduQD91dJDm6b-IMAnhege71Pl-Y9TRZqEtiZaok',
};
// SEGNAPOSTO: quando esiste un form contatti dedicato, sostituire qui.
export const contactFormUrl = guide.formUrl;

/* --- Le cinque aree (i "cinque momenti dell'ospite") --------------------- */
export const areas = [
  {
    n: '01', key: 'marketing', title: 'Marketing e conversione', slug: 'marketing-e-conversione', icon: 'chart',
    text: 'Tutto ciò che accade prima della prenotazione: il sito web dell’hotel, portare visitatori, capire cosa fanno e convincerli a prenotare in diretta.',
    tags: ['Sito web', 'Social', 'Google Ads', 'PageSense', 'SalesIQ', 'Forms'], img: '/img/app/pagesense-canali.jpg',
  },
  {
    n: '02', key: 'booking', title: 'Booking engine e channel manager', slug: 'booking-engine', icon: 'calendar',
    text: 'Il motore di prenotazione sul tuo sito e la sincronizzazione di tariffe e disponibilità con Booking.com, Airbnb e gli altri portali.',
    tags: ['Widget di prenotazione', 'Channex'], img: '/img/app/tipi-camera.jpg',
  },
  {
    n: '03', key: 'crm', title: 'CRM', slug: 'crm-e-preventivi', icon: 'users',
    text: 'L’archivio vivo dell’ospite: storico, preferenze, consensi, preventivi e comunicazioni automatiche prima e dopo il soggiorno.',
    tags: ['Zoho CRM', 'Marketing Automation', 'Survey', 'Thrive'], img: '/img/app/checkout-elenco.jpg',
  },
  {
    n: '04', key: 'pms', title: 'PMS e reparti', slug: 'pms-gestionale', icon: 'gear',
    text: 'Il gestionale operativo: planning camere, check-in e check-out, conto dell’ospite, fatturazione, adempimenti, pulizie e manutenzioni.',
    tags: ['Planning camere', 'Zoho Books', 'App per i reparti'], img: '/img/app/planning.jpg',
  },
  {
    n: '05', key: 'analytics', title: 'Analytics e revenue', slug: 'analytics-e-revenue', icon: 'presentation',
    text: 'I numeri dell’intero percorso: canali di vendita, domanda respinta, margine recuperato. I dati si collegano al tuo RMS.',
    tags: ['Zoho Analytics'], img: '/img/app/pagesense-pagine.jpg',
  },
];

/* --- Tipi di struttura (menu "Soluzioni") -------------------------------- */
export const segments = [
  {
    id: 'hotel-indipendenti', title: 'Hotel indipendenti e boutique hotel', icon: 'bed', photo: '/img/photos/camera-deluxe.webp',
    text: 'Poche persone, tanti ruoli. Serve un sistema che tolga lavoro alla reception e riporti l’ospite sul sito, senza dipendere dai portali.',
    focus: ['Booking engine con il tuo brand', 'Scheda ospite e campagne di ritorno', 'Planning e conto in un solo posto'],
    links: ['booking-engine', 'crm-e-preventivi', 'pms-gestionale'],
  },
  {
    id: 'resort-e-villaggi', title: 'Resort e villaggi', icon: 'sun', photo: '/img/photos/ombrelloni.webp',
    text: 'Molti reparti, stagioni intense, tanti servizi da vendere. Il valore sta nel coordinamento e negli extra proposti prima dell’arrivo.',
    focus: ['App per pulizie, manutenzione e F&B', 'Upselling prima dell’arrivo', 'Dashboard per stagione e reparto'],
    links: ['pulizie', 'automazioni-e-loyalty', 'analytics-e-revenue'],
  },
  {
    id: 'agriturismi-e-bb', title: 'Agriturismi, B&B e dimore storiche', icon: 'home', photo: '/img/photos/camera-angolo-lettura.webp',
    text: 'Strutture piccole con un’identità forte. Si parte dal necessario: prenotazioni dirette, adempimenti automatici, un ospite che torna.',
    focus: ['Widget di prenotazione e caparra', 'Alloggiati Web, ISTAT e tassa di soggiorno', 'Survey e referral con Thrive'],
    links: ['booking-engine', 'fatturazione-e-adempimenti', 'automazioni-e-loyalty'],
  },
  {
    id: 'gruppi-alberghieri', title: 'Piccoli gruppi alberghieri e residence', icon: 'layers', photo: '/img/photos/corridoio.webp',
    text: 'Più strutture, un solo archivio di ospiti. Ognuno vede la sua struttura, la direzione legge i numeri di tutte.',
    focus: ['Anagrafica unica tra le strutture', 'Ruoli e accessi per reparto', 'Confronto per canale e per stagione'],
    links: ['crm-e-preventivi', 'app-su-misura', 'analytics-e-revenue'],
  },
  {
    id: 'wellness-e-spa', title: 'Wellness e spa', icon: 'spark', photo: '/img/photos/spa-sauna.webp',
    text: 'La spa è un motivo di ritorno. Il CRM sa chi l’ha usata, quanto ha speso e quando proporgli il prossimo weekend.',
    focus: ['Spesa extra per ospite', 'Segmenti per interesse', 'Offerte sui periodi scarichi'],
    links: ['crm-e-preventivi', 'automazioni-e-loyalty', 'ristorante-e-bar'],
  },
  {
    id: 'nuove-aperture', title: 'Nuove aperture', icon: 'flag', photo: '/img/photos/hall.webp',
    text: 'Partire con il sistema giusto evita di migrare dopo. Si costruisce dal primo giorno sull’account Zoho della struttura.',
    focus: ['Configurazione da zero', 'Formazione in italiano', 'Si aggiunge un modulo alla volta'],
    links: ['pms-gestionale', 'marketing-e-conversione', 'channel-manager'],
  },
];

export const propertyTypes = [
  'Hotel indipendenti', 'Boutique hotel', 'Resort e villaggi', 'Dimore storiche', 'Agriturismi',
  'B&B e affittacamere', 'Residence', 'Piccoli gruppi alberghieri', 'Wellness e spa', 'Nuove aperture',
];

/* --- Chi possiede i dati ------------------------------------------------- */
export const dataOwnership = [
  ['Ricerche senza prenotazione', 'Date, occupanti, camera cercata, prezzo visto', 'Non restituite'],
  ['Abbandono del funnel', 'Passaggio esatto, con contatto se già noto', 'Solo tasso aggregato, senza nominativo'],
  ['Anagrafica e consensi', 'Titolare l’hotel', 'Contitolarità o titolarità del fornitore'],
  ['Storico se cambi fornitore', 'Resta all’hotel', 'Si perde, o si esporta ridotto'],
];

/* --- Chi fa cosa ---------------------------------------------------------- */
export const roles = [
  {
    label: 'Zoho', title: 'La piattaforma',
    text: 'CRM, marketing automation, chat sul sito, analisi e oltre 50 app integrate su un unico account, con data center certificati ISO 27001.',
    points: ['Licenze in abbonamento, a parte', 'Edizione minima: Zoho CRM Enterprise, inclusa in Zoho One', 'Aggiornamenti inclusi'],
  },
  {
    label: 'Mineo', title: 'La personalizzazione', dark: true,
    text: 'Moduli, widget di prenotazione, automazioni, app per i reparti e integrazioni scritte da noi, ogni giorno su Zoho.',
    points: [`Zoho Authorized Partner da ${site.partnerYears} anni`, 'Configurazione, formazione e assistenza in italiano', 'Integrazione con il tuo RMS, se ne usi uno'],
  },
  {
    label: 'La tua struttura', title: 'I dati',
    text: 'L’account Zoho è della struttura: ospiti, prenotazioni e storico restano tuoi, esportabili in ogni momento.',
    points: ['Nessun modello pubblicitario sui dati', 'Se cambi partner, CRM e storico restano', 'Aggiungi People o Desk quando servono'],
  },
];

/* --- Demo: cosa succede ---------------------------------------------------- */
export const demoSteps = [
  { title: 'Ci racconti', text: 'Come lavora oggi il tuo hotel: gestionale in uso, quota di prenotazioni dai portali e cosa ti fa perdere più tempo.' },
  { title: 'Ti mostriamo', text: 'CRM Hotellerie dal vivo sull’hotel dimostrativo, con le sole app Zoho che ti servono.' },
  { title: 'Ragioniamo sui numeri', text: 'Rifacciamo il calcolo delle commissioni con i dati della tua struttura.' },
  { title: 'Decidi con calma', text: 'Ricevi una proposta su misura, con tempi e passaggi chiari. Nessun impegno.' },
];

/* --- FAQ (risposte ricavate dalla guida) ---------------------------------- */
export const faq = [
  {
    q: 'Che cos’è CRM Hotellerie, rispetto a Zoho?',
    a: `È un sistema per hotel costruito sulla piattaforma Zoho. Zoho fornisce le app e le licenze; ${site.legal}, Zoho Authorized Partner da ${site.partnerYears} anni, scrive moduli, widget di prenotazione, automazioni e app per i reparti, e si occupa di configurazione, formazione e assistenza in italiano.`,
  },
  {
    q: 'Le licenze Zoho sono comprese?',
    a: 'No, le licenze sono in abbonamento e a parte. L’edizione minima è Zoho CRM Enterprise, inclusa anche in Zoho One. Gli aggiornamenti della piattaforma sono inclusi nella licenza.',
  },
  {
    q: 'Devo attivare tutte e cinque le aree?',
    a: 'No. Non tutti gli hotel hanno bisogno di tutto: in una consulenza gratuita individuiamo le funzioni che contano per la tua struttura e ti suggeriamo solo le app davvero utili.',
  },
  {
    q: 'Il channel manager è incluso?',
    a: 'Il channel manager è un servizio opzionale: sincronizza tariffe e disponibilità con Booking.com, Airbnb e gli altri portali tramite Channex, sullo stesso calendario della reception.',
  },
  {
    q: 'Uso già un sistema di revenue management. Devo cambiarlo?',
    a: 'No. CRM Hotellerie fornisce al revenue manager i dati che di solito mancano (ricerche per periodo, anticipo medio, richieste respinte per motivo, canali) e, se la struttura usa già un RMS per il pricing dinamico, lo integriamo.',
  },
  {
    q: 'Fattura elettronica, Alloggiati Web e ISTAT sono gestiti?',
    a: 'Sì. La fattura elettronica passa da Zoho Books e dal Sistema di Interscambio; Alloggiati Web parte dai dati del check-in; ISTAT e tassa di soggiorno sono generati dall’anagrafica.',
  },
  {
    q: 'Di chi sono i dati degli ospiti?',
    a: 'Della struttura. L’account Zoho è intestato all’hotel: ospiti, prenotazioni e storico restano tuoi, esportabili in ogni momento. Se cambi partner, CRM e storico restano. Nessun modello pubblicitario sui dati.',
  },
  {
    q: 'Le app dei reparti si possono adattare?',
    a: 'Sì. Le schermate dei reparti sono sviluppate da noi sui processi della tua struttura: se un reparto lavora in modo diverso, lo adattiamo senza cambiare piattaforma.',
  },
];

/* --- Integrazioni --------------------------------------------------------- */
export const integrations = [
  {
    title: 'App Zoho', text: 'Tutte sullo stesso account e sulla stessa anagrafica dell’ospite.',
    items: [
      ['Zoho CRM', 'Scheda ospite, pipeline, preventivi'], ['Marketing Automation', 'Campagne e flussi per segmento'],
      ['PageSense', 'Percorso di prenotazione e test A/B'], ['SalesIQ', 'Chat con trigger contestuali'],
      ['Forms', 'Richieste, preventivi, iscrizioni'], ['Social', 'Pubblicazione e lead social'],
      ['Survey', 'Questionari a fine soggiorno'], ['Thrive', 'Loyalty e referral'],
      ['Books', 'Fatturazione elettronica'], ['Analytics', 'Dashboard e indicatori'],
      ['People', 'Personale, quando serve'], ['Desk', 'Assistenza agli ospiti, quando serve'],
    ],
  },
  {
    title: 'Canali e portali', text: 'Tariffe e disponibilità allineate, un solo calendario.',
    items: [['Channex', 'Channel manager (servizio opzionale)'], ['Booking.com', 'Tramite Channex'], ['Airbnb', 'Tramite Channex'], ['Altre OTA', 'Tramite Channex'], ['Google Ads', 'Campagne verso landing dedicate']],
  },
  {
    title: 'Adempimenti', text: 'Dai dati già inseriti, senza ribatterli.',
    items: [['Sistema di Interscambio', 'Fattura elettronica via Zoho Books'], ['Alloggiati Web', 'Dai dati del check-in'], ['ISTAT', 'Generato dall’anagrafica'], ['Tassa di soggiorno', 'Generata dall’anagrafica']],
  },
  {
    title: 'Revenue management', text: 'Se usi già un RMS, lo colleghiamo.',
    items: [['Il tuo RMS', 'Ricerche, anticipo, domanda respinta, canali']],
  },
];

/* --- Navigazione (versione compatta: 5 voci) ------------------------------ */
const areaItem = (a) => ({ href: a.n === '01' ? '/marketing/' : `/il-software/#${AREA_ANCHOR[a.n]}`, label: a.title, desc: a.tags.slice(0, 3).join(' · '), icon: a.icon });

export const nav = [
  {
    label: 'Il software', mega: true,
    groups: [
      { title: 'Vendere e fidelizzare', items: areas.filter((a) => ['01', '02', '03'].includes(a.n)).map(areaItem) },
      { title: 'Gestire e decidere', items: areas.filter((a) => ['04', '05'].includes(a.n)).map(areaItem).concat([{ href: '/il-software/', label: 'Tutto il software', desc: 'Le cinque aree in una pagina', icon: 'layers' }]) },
    ],
    foot: { text: 'Ogni area si attiva anche da sola, e si collega alle altre quando vuoi.', href: '/trova-la-soluzione/', cta: 'Componi la tua soluzione' },
    // Esempi di singole aree attivabili da sole (fascia in cima al menu "Il software")
    solo: [
      { label: 'Solo CRM', href: '/il-software/#clienti' },
      { label: 'Solo Marketing', href: '/marketing/' },
      { label: 'Solo Prenotazioni', href: '/il-software/#prenotazioni' },
      { label: 'Solo Fatturazione', href: '/il-software/#fatturazione-e-adempimenti' },
    ],
  },
  { label: 'Marketing', href: '/marketing/' },
  { label: 'Componi la tua soluzione', href: '/trova-la-soluzione/' },
  { label: 'Chi siamo', href: '/chi-siamo/' },
  {
    label: 'Risorse',
    items: [
      { href: '/guida/', label: 'Guida gratuita', desc: `${guide.pages} pagine sulle 5 aree`, icon: 'download' },
      { href: '/calcolatore/', label: 'Calcolatore commissioni', desc: 'Quanto ti costano i portali', icon: 'euro' },
      { href: site.demoUrl, label: 'Hotel dimostrativo', desc: 'Hotel Soleluna, navigabile', icon: 'play', external: true },
      { href: '/faq/', label: 'Domande frequenti', desc: 'Licenze, dati, integrazioni', icon: 'chat' },
    ],
    feature: { href: '/guida/', eyebrow: 'Guida gratuita', title: 'Un unico software per il tuo hotel', img: '/img/photos/camera-deluxe.webp' },
  },
];

/* --- Trova la soluzione: ogni esigenza ha la sua risposta ---------------- */
/* Ogni soluzione si può attivare da sola e collegare alle altre in seguito.
   "slug" = pagina funzionalità di approfondimento. */
export const problemCats = [
  { id: 'vendere', label: 'Vendere di più' },
  { id: 'clienti', label: 'Clienti e fidelizzazione' },
  { id: 'struttura', label: 'Struttura e personale' },
  { id: 'amministrazione', label: 'Amministrazione e numeri' },
];

export const problems = [
  {
    id: 'commissioni', cat: 'vendere', icon: 'euro', slug: 'booking-engine',
    pain: 'Pago troppe commissioni ai portali',
    sol: 'Prenotazioni dirette sul tuo sito',
    text: 'Un booking engine con il tuo brand: l’ospite prenota sul sito dell’hotel e la richiesta arriva già completa, senza commissioni.',
    points: ['Widget con colori, logo e lingue dell’hotel', 'Disponibilità in tempo reale, niente overbooking', 'Caparra e stati della prenotazione automatici'],
  },
  {
    id: 'sito', cat: 'vendere', icon: 'chart', slug: 'marketing-e-conversione',
    pain: 'Il sito ha visite ma poche prenotazioni',
    sol: 'Marketing e conversione',
    text: 'Vedi dove i visitatori si fermano nel percorso di prenotazione e li intercetti al momento giusto, in chat.',
    points: ['Percorso di prenotazione mappato passo per passo', 'Chat che si apre con trigger contestuali', 'Richieste e iscrizioni raccolte con i consensi'],
  },
  {
    id: 'portali', cat: 'vendere', icon: 'sync', slug: 'channel-manager',
    pain: 'Aggiorno Booking.com e Airbnb a mano',
    sol: 'Channel manager',
    text: 'Tariffe e disponibilità sincronizzate con i portali tramite Channex, sullo stesso calendario della reception.',
    points: ['Cambi una tariffa una volta sola', 'Niente doppie gestioni, niente overbooking', 'Anche le prenotazioni OTA entrano nella scheda ospite'],
  },
  {
    id: 'ospiti', cat: 'clienti', icon: 'users', slug: 'crm-e-preventivi',
    pain: 'Non so chi sono i miei ospiti',
    sol: 'Gestione clienti (CRM)',
    text: 'Una scheda per ogni ospite con storico soggiorni, spesa in hotel, preferenze e consensi, aggiornata da sola.',
    points: ['Storico e canale di ogni soggiorno', 'Spesa extra e interessi', 'Segmenti pronti: nuovo, abituale, VIP'],
  },
  {
    id: 'ritorno', cat: 'clienti', icon: 'refresh', slug: 'automazioni-e-loyalty',
    pain: 'Gli ospiti non tornano e ho periodi vuoti',
    sol: 'Fidelizzazione e campagne',
    text: 'Email automatiche prima e dopo il soggiorno, survey, programmi loyalty e offerte mirate sulle date scariche.',
    points: ['Offerte al segmento giusto sui periodi vuoti', 'Servizi extra proposti prima dell’arrivo', 'Loyalty e referral: chi arriva da un portale torna dal sito'],
  },
  {
    id: 'preventivi', cat: 'clienti', icon: 'chat', slug: 'crm-e-preventivi',
    pain: 'Richieste e preventivi sparsi tra email, telefono e social',
    sol: 'Richieste e preventivi in un unico flusso',
    text: 'Ogni richiesta, da qualunque canale, entra nella stessa pipeline e diventa un preventivo con l’upselling già dentro.',
    points: ['Sito, telefono, email e social nello stesso posto', 'Promemoria prima della scadenza dell’opzione', 'Mail automatica alla conferma'],
  },
  {
    id: 'planning', cat: 'struttura', icon: 'calendar', slug: 'pms-gestionale',
    pain: 'Planning su Excel e check-in lenti',
    sol: 'Gestione della struttura (PMS)',
    text: 'Planning camere, check-in online o in reception, check-out e saldo in un passaggio, conto unico dell’ospite.',
    points: ['Planning anti-overbooking', 'Check-in online o in reception', 'Ristorante, bar e spa sul conto della camera'],
  },
  {
    id: 'reparti', cat: 'struttura', icon: 'spark', slug: 'pulizie',
    pain: 'Pulizie e manutenzione coordinate su WhatsApp',
    sol: 'App per i reparti',
    text: 'Pulizie e manutenzioni sullo stesso calendario della reception: la reception sa sempre quale camera è pronta.',
    points: ['Staff assegnato, priorità e ricorrenze', 'Segnalazioni per camera e aree comuni', 'Interventi senza fermare la vendita'],
  },
  {
    id: 'ristorante', cat: 'struttura', icon: 'utensils', slug: 'ristorante-e-bar',
    pain: 'Blocchetti di ristorante e bar da riconciliare',
    sol: 'Ristorante e bar sul conto della camera',
    text: 'Coperti prenotati e addebiti sul conto della camera: un solo conto per l’ospite, nessun blocchetto.',
    points: ['Addebiti in camera', 'Spesa per ospite nella scheda CRM', 'Note e preferenze per la ristorazione'],
  },
  {
    id: 'extra', cat: 'struttura', icon: 'gift', slug: 'pms-gestionale', noPreset: true,
    pain: 'Servizi extra ed esperienze prenotati a voce o via email',
    sol: 'Prenotazione di servizi ed esperienze',
    text: 'Spa, massaggi, degustazioni, transfer, bici, late check-out: l’ospite li prenota con il soggiorno o durante la permanenza, e il costo finisce sul conto della camera.',
    points: ['Catalogo di servizi ed esperienze con prezzi e posti', 'Prenotabili con la camera o dopo l’arrivo', 'Addebito sul conto e spesa extra nella scheda ospite'],
  },
  {
    id: 'staff', cat: 'struttura', icon: 'key', slug: 'app-su-misura',
    pain: 'Lo staff vede tutto, o non trova niente',
    sol: 'Ruoli e app su misura',
    text: 'Ogni addetto vede solo ciò che gli serve, dalla lavanderia alla reception. Le schermate si adattano ai processi della tua struttura.',
    points: ['Accessi per reparto', 'Tutti sugli stessi dati', 'App sviluppate sui tuoi processi'],
  },
  {
    id: 'fatture', cat: 'amministrazione', icon: 'file', slug: 'fatturazione-e-adempimenti',
    pain: 'Fatture, Alloggiati Web e ISTAT mi portano via ore',
    sol: 'Fatturazione e adempimenti',
    text: 'Fattura elettronica via SdI dal conto dell’ospite; Alloggiati Web, ISTAT e tassa di soggiorno dai dati già inseriti.',
    points: ['Fattura elettronica con Zoho Books', 'Alloggiati Web dai dati del check-in', 'ISTAT e tassa di soggiorno dall’anagrafica'],
  },
  {
    id: 'numeri', cat: 'amministrazione', icon: 'presentation', slug: 'analytics-e-revenue',
    pain: 'Decido le tariffe a intuito',
    sol: 'Report e revenue',
    text: 'Dashboard per operatività, revenue e direzione, e le richieste perse per tutto esaurito o minimo notti.',
    points: ['Domanda respinta con il motivo', 'Occupazione, ADR, RevPAR, canali', 'Dati pronti per il tuo RMS'],
  },
];

export const startOptions = [
  {
    k: 'Una soluzione', title: 'Parti dalla priorità di oggi',
    text: 'Hai un’urgenza precisa? Partiamo da lì: per esempio solo le prenotazioni dirette, o solo la gestione clienti.',
    points: ['Attivi solo ciò che ti serve', 'Il resto lo aggiungi quando serve'],
  },
  {
    k: 'Più soluzioni', title: 'Componi il tuo set', dark: true,
    text: 'Scegli le aree che ti servono e le colleghiamo tra loro: i dati dell’ospite passano da una all’altra senza reinserirli.',
    points: ['Per esempio prenotazioni + clienti + fatture', 'Un solo account, gli stessi dati'],
  },
  {
    k: 'Tutto il software', title: 'Gestisci tutto l’hotel',
    text: 'Marketing, prenotazioni, gestione clienti, fatturazione, struttura e reparti: un unico gestionale per tutta la struttura.',
    points: ['Un solo strumento per tutti i reparti', 'Una sola formazione, un solo referente'],
  },
];
