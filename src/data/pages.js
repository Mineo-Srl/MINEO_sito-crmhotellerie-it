/* ==========================================================================
   Contenuti delle pagine interne. Il percorso di comunicazione del sito:
   Perché (il problema) → Come funziona (la soluzione) → Le app (gli strumenti)
   → Casi (le prove) → Prezzi (il rischio tolto) → Chi siamo (la fiducia)
   → Demo (l'azione). Recapiti e dati generali stanno in site.js.
   ========================================================================== */
import { site } from './site.js';

/* --- Struttura del sito: usata da header, footer e "pagina successiva" --- */
export const journey = [
  { href: '/perche', label: 'Perché', title: 'Il problema', desc: 'Cosa ti costa davvero l’ospite che riprenota dal portale', icon: 'wallet' },
  { href: '/come-funziona', label: 'Come funziona', title: 'La soluzione', desc: 'Una scheda per ogni ospite e tre momenti per farlo tornare', icon: 'network' },
  { href: '/app', label: 'Le app', title: 'Gli strumenti', desc: 'Sette app Zoho configurate per il tuo hotel', icon: 'layers' },
  { href: '/casi', label: 'Casi', title: 'Le prove', desc: 'Hotel come il tuo e i numeri che contano', icon: 'chart' },
  { href: '/prezzi', label: 'Prezzi', title: 'Quanto costa', desc: 'Licenze e lavoro, separati e trasparenti', icon: 'document' },
  { href: '/chi-siamo', label: 'Chi siamo', title: 'Chi ti segue', desc: `${site.legal}, Zoho Authorized Partner da ${site.partnerYears} anni`, icon: 'users' },
];

/* --- /perche ------------------------------------------------------------ */
export const perche = {
  costs: [
    { value: '15–25%', label: 'la commissione tipica di un portale su ogni prenotazione' },
    { value: '2 volte', label: 'la paghi, se l’ospite che torna riprenota dal portale' },
    { value: '0', label: 'i dati dell’ospite che ti restano, se non li raccogli tu' },
  ],
  story: [
    { when: 'Primo soggiorno', text: 'Giulia trova il tuo hotel su un portale. Prenota, paga la camera, tu paghi la commissione. Giusto così: il portale ti ha portato un cliente nuovo.' },
    { when: 'Durante', text: 'Il soggiorno è perfetto. Giulia ama la vista mare e la spa, festeggia l’anniversario. Lo sa la reception, ma nessuno lo scrive da nessuna parte.' },
    { when: 'Un anno dopo', text: 'Giulia vuole tornare. Cerca su Google, il primo risultato è il portale. Prenota lì. Tu paghi di nuovo la commissione, per un’ospite che era già tua.' },
  ],
  shift: [
    { from: 'Il portale conosce l’ospite', to: 'Tu conosci l’ospite: storia, gusti, ricorrenze' },
    { from: 'Scrivi a tutti la stessa newsletter', to: 'Scrivi a ciascuno al momento giusto' },
    { from: 'L’ospite torna se si ricorda di te', to: 'L’ospite torna perché te ne ricordi tu' },
    { from: 'Non sai quale azione porta prenotazioni', to: 'Ogni prenotazione diretta ha la sua origine' },
  ],
};

/* --- /come-funziona ------------------------------------------------------ */
export const comeFunziona = {
  moments: [
    {
      n: '1', title: 'Prima che prenoti', lead: 'Il visitatore arriva sul tuo sito e sta decidendo.',
      points: [
        'PageSense mostra dove si ferma chi non prenota e prova la versione migliore della pagina.',
        'SalesIQ apre la chat al momento giusto: chi cerca una data, chi torna per la terza volta.',
        'Social raccoglie messaggi e richieste da Instagram, Facebook e Google in un’unica coda.',
      ],
      apps: ['pagesense', 'salesiq', 'social'],
    },
    {
      n: '2', title: 'Quando ti contatta', lead: 'Chiede un preventivo, scrive, prenota.',
      points: [
        'Forms raccoglie la richiesta con i campi giusti e la mette nel CRM, assegnata a chi risponde.',
        'Marketing Automation richiama chi non risponde al preventivo e prepara l’arrivo.',
        'Il widget di prenotazione sul tuo sito registra la prenotazione diretta con la sua origine.',
      ],
      apps: ['forms', 'marketing-automation'],
    },
    {
      n: '3', title: 'Dopo che è ripartito', lead: 'È il momento in cui si decide se tornerà.',
      points: [
        'Survey chiede com’è andata e avvisa la direzione se qualcosa non ha funzionato.',
        'Thrive premia chi torna e chi porta un amico, solo sulle prenotazioni dirette.',
        'Marketing Automation scrive per l’anniversario, la stagione giusta, l’offerta riservata.',
      ],
      apps: ['survey', 'thrive', 'marketing-automation'],
    },
  ],
  insights: [
    { icon: 'layers', title: 'Diretto contro portali', text: 'Quota di prenotazioni dirette mese per mese e quanto hai risparmiato in commissioni.' },
    { icon: 'refresh', title: 'Ospiti di ritorno', text: 'Chi è tornato, dopo quanto tempo, e da quale canale ha riprenotato.' },
    { icon: 'send', title: 'Campagne che rendono', text: 'Prenotazioni e ricavi generati da ogni email, percorso e post.' },
    { icon: 'close', title: 'Richieste perse', text: 'Tutto esaurito, minimo notti, preventivi senza risposta: il margine rimasto sul tavolo.' },
  ],
  connects: [
    { icon: 'code', title: 'Widget di prenotazione', text: 'Sul tuo sito, con il tuo marchio, collegato al CRM: ogni prenotazione diretta entra con la sua storia.' },
    { icon: 'refresh', title: 'Channel manager Channex', text: 'Disponibilità e tariffe sincronizzate con Booking.com, Airbnb e gli altri portali.' },
    { icon: 'building', title: 'Il tuo gestionale', text: 'Resta al suo posto: i dati di ospiti e prenotazioni arrivano nel CRM senza reinserirli.' },
  ],
  steps: [
    { title: 'Ascolto', text: 'Come lavora oggi il tuo hotel: canali, gestionale, persone, numeri.' },
    { title: 'Progetto', text: 'Quali app attivare per prime, quali automazioni, quali integrazioni.' },
    { title: 'Attivazione', text: 'Configuriamo, importiamo i dati e formiamo il tuo team.' },
    { title: 'Crescita', text: 'Misuriamo, correggiamo, aggiungiamo app quando servono.' },
  ],
};

/* --- /casi -------------------------------------------------------------- */
export const casi = {
  measure: [
    { icon: 'layers', title: 'Quota di prenotazioni dirette', text: 'Il numero che più di tutti dice se il sistema funziona.' },
    { icon: 'refresh', title: 'Tasso di ritorno', text: 'Quanti ospiti tornano entro 12–24 mesi, e su quale canale.' },
    { icon: 'wallet', title: 'Commissioni evitate', text: 'Prenotazioni dirette da ospiti di ritorno × commissione media.' },
    { icon: 'clock', title: 'Tempo risparmiato', text: 'Ore di lavoro manuale tolte a preventivi, email e liste.' },
  ],
};

/* --- /prezzi ------------------------------------------------------------ */
export const prezzi = {
  included: [
    'Analisi iniziale del tuo hotel e progetto delle app da attivare',
    'Configurazione del CRM: scheda ospite, campi, segmenti, ruoli',
    'Widget di prenotazione o collegamento al tuo booking engine',
    'Moduli, automazioni e modelli email con il tuo stile',
    'Importazione degli ospiti esistenti, con verifica dei consensi',
    'Formazione del team e affiancamento nelle prime settimane',
  ],
  notIncluded: [
    'Le licenze Zoho: le paghi direttamente a Zoho, intestate al tuo hotel',
    'Eventuali servizi di terzi (es. channel manager, SMS) a consumo',
  ],
  faq: [
    { q: 'Perché le licenze sono separate?', a: 'Perché l’account Zoho deve essere tuo: licenze, dati e storico sono intestati alla struttura. Se un giorno cambi partner, non perdi nulla.' },
    { q: 'Serve per forza Zoho CRM Enterprise?', a: 'Sì, per le funzioni usate da CRM Hotellerie serve almeno l’edizione Enterprise di Zoho CRM, inclusa anche in Zoho One. Ti indichiamo la soluzione più conveniente per il numero di persone che la useranno.' },
    { q: 'Posso partire con poche app?', a: 'Sì, ed è quello che consigliamo: si parte da quelle che rispondono al problema più urgente e si aggiungono le altre quando servono.' },
    { q: 'Ci sono vincoli di durata?', a: 'Con noi no. Le licenze Zoho seguono le condizioni di Zoho (mensili o annuali, a tua scelta).' },
  ],
};

/* --- /chi-siamo (dal sito mineoepartners.it) ----------------------------- */
export const chiSiamo = {
  values: [
    { icon: 'target', title: 'Prima l’hotel, poi il software', text: 'Partiamo da come lavora la tua struttura. Il CRM si adatta ai tuoi processi, non il contrario.' },
    { icon: 'network', title: 'Un sistema, non una somma di strumenti', text: 'Ogni app attivata dialoga con le altre: il valore nasce dalla connessione dei dati sull’ospite.' },
    { icon: 'users', title: 'Partner operativo', text: 'Analisi, configurazione, formazione e supporto nel tempo. Al tuo fianco, in italiano.' },
    { icon: 'chart', title: 'Risultati misurabili', text: 'Definiamo insieme cosa deve migliorare e misuriamo l’impatto di quello che costruiamo.' },
  ],
  method: [
    { n: '01', title: 'Analisi', text: 'Mappiamo processi, strumenti in uso e punti di frizione: dove si perdono tempo, dati e margine.' },
    { n: '02', title: 'Progettazione', text: 'Disegniamo il sistema: quali app, quali flussi, quali automazioni e integrazioni.' },
    { n: '03', title: 'Implementazione', text: 'Configuriamo Zoho, migriamo i dati, colleghiamo le aree e formiamo le persone.' },
    { n: '04', title: 'Evoluzione', text: 'Monitoriamo l’uso reale, correggiamo, estendiamo. Il sistema cresce con l’hotel.' },
  ],
};

/* --- /demo -------------------------------------------------------------- */
export const demo = {
  what: [
    { icon: 'code', title: 'Il sito di Hotel Soleluna', text: 'Un hotel dimostrativo completo, con il widget di prenotazione attivo.' },
    { icon: 'search', title: 'Prenoti come un ospite', text: 'Scegli date e camera e invii una richiesta, proprio come farebbe un tuo cliente.' },
    { icon: 'users', title: 'Vedi l’altra parte', text: 'Cosa arriva nel CRM, come viene assegnato, quali automazioni partono.' },
  ],
  faq: [
    { q: 'Devo fare una chiamata per vedere la demo?', a: 'No. Lasci nome, struttura, email e telefono e la demo si apre subito. La consulenza è facoltativa.' },
    { q: 'Mi chiamerete comunque?', a: 'Potremmo scriverti per chiederti com’è andata. Se non ti interessa, basta dircelo: non insistiamo.' },
    { q: 'Quanto tempo serve?', a: 'Dieci minuti bastano per provare il widget e farti un’idea. Con la guida PDF hai anche il quadro completo.' },
  ],
};

/* --- /faq: tutte le domande, per argomento ------------------------------ */
export const faqGroups = [
  {
    title: 'Il prodotto',
    items: [
      { q: 'Che cos’è CRM Hotellerie, rispetto a Zoho?', a: `È Zoho, con il suo CRM e le app di marketing, configurato sul tuo hotel da ${site.legal}, Zoho Authorized Partner da ${site.partnerYears} anni. Zoho fornisce piattaforma e licenze; noi configurazione, formazione e assistenza in italiano.` },
      { q: 'Devo attivare tutte e sette le app?', a: 'No. Si parte da quelle che rispondono al problema più urgente, spesso Forms e Marketing Automation, e si aggiungono le altre quando servono.' },
      { q: 'È adatto a una struttura piccola?', a: 'Sì. Lavoriamo con hotel indipendenti, B&B, agriturismi e piccoli gruppi: il sistema si dimensiona sul numero di persone che lo usano.' },
    ],
  },
  {
    title: 'Gestionale e integrazioni',
    items: [
      { q: 'Devo cambiare il gestionale che uso?', a: 'No. Si parte da CRM e marketing lasciando il gestionale al suo posto. Se un giorno vorrai sostituirlo, c’è la strada B.' },
      { q: 'Funziona con il mio booking engine?', a: 'Possiamo usare il widget di prenotazione di CRM Hotellerie oppure collegare quello che hai, se espone i dati. Lo verifichiamo in consulenza.' },
      { q: 'E con Booking.com e gli altri portali?', a: 'Con il channel manager Channex disponibilità e tariffe restano sincronizzate su tutti i portali collegati.' },
    ],
  },
  {
    title: 'Dati e privacy',
    items: [
      { q: 'Di chi sono i dati degli ospiti?', a: 'Tuoi. L’account Zoho è intestato alla struttura: ospiti, prenotazioni e storico restano nel tuo CRM e li esporti quando vuoi.' },
      { q: 'Dove sono conservati?', a: 'Nei data center europei di Zoho, certificati ISO 27001.' },
      { q: 'Come gestite i consensi?', a: 'Ogni consenso è registrato con data, fonte e testo dell’informativa. Le campagne partono solo verso chi ha detto sì.' },
    ],
  },
  {
    title: 'Costi e tempi',
    items: [
      { q: 'Quanto costa?', a: 'Due voci: le licenze Zoho, che paghi a Zoho a prezzo di listino, e il nostro lavoro di configurazione. Trovi i dettagli nella pagina Prezzi.' },
      { q: 'Quanto ci vuole per partire?', a: 'Dipende da quante app attivi e dai dati da importare. In consulenza ti diamo tempi precisi, per iscritto.' },
      { q: 'Ci sono vincoli di durata?', a: 'Con noi no. Le licenze Zoho seguono le condizioni di Zoho, mensili o annuali a tua scelta.' },
    ],
  },
];
