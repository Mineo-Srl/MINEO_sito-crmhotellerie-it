/* ==========================================================================
   Le 7 app di marketing di CRM Hotellerie, una pagina ciascuna
   (src/pages/[slug].astro). L'ordine segue il percorso dell'ospite:
   prima della prenotazione → contatto → soggiorno → ritorno.
   `site` è la frase del box sulla home di crmhotellerie.it.
   `visual` sceglie l'animazione del hero (components/AppVisual.astro).
   ========================================================================== */

export const phases = {
  prima: 'Prima della prenotazione',
  contatto: 'Primo contatto',
  dopo: 'Dopo il soggiorno',
};

export const apps = [
  /* ------------------------------------------------------------- PageSense */
  {
    slug: 'pagesense',
    name: 'PageSense',
    full: 'Zoho PageSense',
    icon: 'chart',
    visual: 'funnel',
    phase: 'prima',
    menu: 'Dove si ferma chi non prenota',
    site: 'Mappa il funnel di prenotazione (camera, ricerca, riepilogo, pagamento), individua dove si interrompe e lo corregge con test A/B mirati.',
    title: 'Scopri dove il tuo sito ',
    highlight: 'perde le prenotazioni',
    lead: 'PageSense segue i visitatori lungo il percorso di prenotazione, ti mostra il passaggio in cui abbandonano e ti fa provare una versione migliore della pagina prima di cambiarla per tutti.',
    seo: {
      title: 'Zoho PageSense per hotel: analizza il funnel di prenotazione',
      description: 'Con Zoho PageSense vedi dove i visitatori del sito del tuo hotel abbandonano la prenotazione, guardi heatmap e registrazioni e provi le modifiche con test A/B.',
      keywords: ['PageSense hotel', 'funnel prenotazione hotel', 'test A/B sito hotel', 'heatmap sito hotel', 'conversione sito albergo'],
    },
    problem: [
      'Vedi quante visite fa il sito, non perché chi cerca una camera poi non prenota.',
      'Le modifiche al sito si decidono a gusto, senza sapere se hanno funzionato.',
      'Il booking engine resta una scatola chiusa: i dati della domanda li ha il fornitore.',
    ],
    solution: [
      'Il percorso camera → ricerca → riepilogo → pagamento misurato passo per passo.',
      'Ogni cambiamento provato su una parte del traffico, con un vincitore chiaro.',
      'I dati di navigazione restano nell’account Zoho della struttura.',
    ],
    features: [
      { icon: 'filter', title: 'Analisi del funnel', text: 'Definisci i passaggi della prenotazione e vedi quanti visitatori arrivano a ciascuno, per canale e per dispositivo.' },
      { icon: 'eye', title: 'Heatmap e scrollmap', text: 'Dove si clicca davvero sulla pagina camere, fin dove si scorre, quali pulsanti vengono ignorati.' },
      { icon: 'play', title: 'Registrazioni delle sessioni', text: 'Rivedi in forma anonima la navigazione di chi ha abbandonato, per capire cosa l’ha bloccato.' },
      { icon: 'split', title: 'Test A/B e split URL', text: 'Due versioni del pulsante “Prenota”, della foto o del prezzo mostrate a metà del traffico ciascuna.' },
      { icon: 'document', title: 'Analisi dei moduli', text: 'Quali campi del modulo di richiesta fanno perdere tempo e quali vengono lasciati vuoti.' },
      { icon: 'chat', title: 'Popup e sondaggi', text: 'Un’offerta o una domanda breve a chi sta per uscire dal sito senza aver prenotato.' },
    ],
    steps: [
      { title: 'Installiamo lo script', text: 'Un solo codice sul sito e sul widget di prenotazione, attivo solo dopo il consenso ai cookie.' },
      { title: 'Disegniamo il funnel', text: 'Camera, ricerca date, riepilogo, pagamento: gli stessi passaggi che vede il tuo ospite.' },
      { title: 'Leggiamo i dati', text: 'Dopo qualche settimana di traffico il punto debole emerge da solo, nei numeri e nelle heatmap.' },
      { title: 'Proviamo e misuriamo', text: 'Lanciamo il test A/B sulla pagina critica e teniamo la versione che converte di più.' },
    ],
    scenario: {
      title: 'Un caso tipico',
      text: 'Su 100 visitatori che aprono la pagina camere, 41 cercano le date e solo 9 arrivano al pagamento. Le registrazioni mostrano che sul riepilogo molti tornano indietro a cercare la tassa di soggiorno. La versione B del riepilogo mostra subito il totale con tutte le voci: è quella che teniamo.',
      note: 'Numeri di esempio, a scopo illustrativo.',
    },
    metrics: ['Tasso di conversione per passaggio', 'Abbandoni per dispositivo', 'Canali che portano prenotazioni', 'Pagine più lette prima di prenotare', 'Esito dei test A/B'],
    crm: 'Gli obiettivi raggiunti su PageSense si collegano ai contatti di Marketing Automation e al CRM: sai da quale campagna arriva chi prenota.',
    screens: [
      { src: '/img/app/pagesense-canali.jpg', alt: 'Report di PageSense con le visite suddivise per canale' },
      { src: '/img/app/pagesense-pagine.jpg', alt: 'Report di PageSense con le pagine più visitate del sito dell’hotel' },
    ],
    photo: '/img/photos/prenota-ora.webp',
    faq: [
      { q: 'PageSense rallenta il sito?', a: 'Lo script si carica in modo asincrono e pesa poco. Lo configuriamo perché parta solo dopo il consenso ai cookie di analisi.' },
      { q: 'Funziona anche se il booking engine non è di Zoho?', a: 'Sì, se possiamo inserire lo script nelle pagine del motore. Con il widget di CRM Hotellerie il funnel è già predisposto.' },
      { q: 'Quanto traffico serve per un test A/B?', a: 'Dipende dalla differenza tra le due versioni. Per un hotel con poche centinaia di visite al giorno di solito bastano alcune settimane.' },
    ],
  },

  /* --------------------------------------------------------------- SalesIQ */
  {
    slug: 'salesiq',
    name: 'SalesIQ',
    full: 'Zoho SalesIQ',
    icon: 'chat',
    visual: 'chat',
    phase: 'prima',
    menu: 'La chat che intercetta l’indeciso',
    site: 'Intercetta in chat l’ospite indeciso, con trigger contestuali: chi cerca una data senza prenotare, chi torna più volte, chi è già cliente riconosciuto dal CRM.',
    title: 'Parla con l’ospite ',
    highlight: 'mentre sta decidendo',
    lead: 'SalesIQ riconosce chi sta guardando il sito, cosa ha già cercato e se è un tuo cliente, e apre la conversazione al momento giusto: in chat con la reception o con un assistente automatico.',
    seo: {
      title: 'Zoho SalesIQ per hotel: chat e trigger sul sito',
      description: 'Zoho SalesIQ per hotel: live chat, chatbot e trigger contestuali per parlare con chi cerca una data senza prenotare, con il contatto salvato nel CRM.',
      keywords: ['SalesIQ hotel', 'chat sito hotel', 'chatbot hotel', 'live chat albergo', 'prenotazioni dirette chat'],
    },
    problem: [
      'L’ospite ha un dubbio sul parcheggio o sul cane, non trova la risposta e prenota su un portale.',
      'La chat, se c’è, saluta tutti allo stesso modo dopo cinque secondi.',
      'Le conversazioni restano nel widget e non arrivano mai nella scheda dell’ospite.',
    ],
    solution: [
      'Messaggi diversi per chi cerca una data, chi torna più volte e chi è già cliente.',
      'Un assistente risponde di notte alle domande frequenti e passa la palla alla reception.',
      'Ogni chat finisce nel CRM, con nome, email e pagine visitate.',
    ],
    triggers: [
      { icon: 'search', title: 'Cerca una data e non prenota', text: '“Per quelle date abbiamo ancora la Deluxe vista mare. Vuoi che ti tenga da parte la camera?”' },
      { icon: 'refresh', title: 'Torna sul sito per la terza volta', text: '“Bentornato! Se hai domande sulla camera che stai guardando, la reception è online.”' },
      { icon: 'star', title: 'È già un cliente nel CRM', text: '“Ciao Giulia, che bello rivederti. Per te c’è la tariffa riservata agli ospiti abituali.”' },
    ],
    features: [
      { icon: 'chat', title: 'Live chat sul sito', text: 'La reception risponde dal computer o dall’app per smartphone, anche fuori dal banco.' },
      { icon: 'bolt', title: 'Trigger contestuali', text: 'Regole su pagina visitata, tempo di permanenza, numero di visite e provenienza.' },
      { icon: 'sparkles', title: 'Assistente automatico', text: 'Un bot senza codice per orari, servizi, animali, parcheggio e richieste di preventivo.' },
      { icon: 'eye', title: 'Visitatori in tempo reale', text: 'Chi è sul sito ora, da dove arriva, cosa sta guardando e quante volte è già passato.' },
      { icon: 'globe', title: 'Più lingue', text: 'Messaggi e risposte nella lingua del visitatore, per la clientela straniera.' },
      { icon: 'users', title: 'Collegata al CRM', text: 'Il visitatore riconosciuto mostra il suo storico; il nuovo diventa un contatto.' },
    ],
    steps: [
      { title: 'Inseriamo il widget', text: 'Lo snippet di SalesIQ sul sito, con i colori e il tono della tua struttura.' },
      { title: 'Scriviamo i trigger', text: 'Le regole e i messaggi per i tre momenti chiave, in italiano e nelle lingue che ti servono.' },
      { title: 'Prepariamo l’assistente', text: 'Le risposte alle domande che la reception riceve ogni giorno, con passaggio all’operatore.' },
      { title: 'Colleghiamo il CRM', text: 'Ogni conversazione si salva nella scheda dell’ospite, con le pagine che ha visitato.' },
    ],
    scenario: {
      title: 'Venerdì sera, ore 23',
      text: 'Un visitatore cerca due notti ad agosto, guarda la Deluxe e torna sulla pagina dei servizi. Dopo quaranta secondi SalesIQ gli chiede se ha bisogno di aiuto. Chiede se i cani sono ammessi: l’assistente risponde e gli propone di lasciare l’email per ricevere il preventivo. La mattina la reception lo trova nel CRM con la richiesta già compilata.',
      note: 'Scenario di esempio.',
    },
    metrics: ['Chat aperte da trigger', 'Chat che diventano richieste', 'Tempo di prima risposta', 'Domande più frequenti', 'Visitatori di ritorno'],
    crm: 'SalesIQ legge il CRM per riconoscere l’ospite e ci scrive ogni conversazione: chi risponde vede lo storico, chi fa marketing vede da dove arriva la richiesta.',
    screens: [{ src: '/img/app/salesiq-live.jpg', alt: 'Pannello di SalesIQ con i visitatori del sito in tempo reale' }],
    photo: '/img/photos/hall.webp',
    faq: [
      { q: 'Serve qualcuno sempre online?', a: 'No. Quando la reception non è disponibile risponde l’assistente automatico, oppure la chat raccoglie un messaggio che arriva per email e nel CRM.' },
      { q: 'Si può usare anche su WhatsApp?', a: 'SalesIQ gestisce anche canali di messaggistica come WhatsApp, Instagram e Messenger, con la stessa coda delle chat del sito. Lo valutiamo insieme in base al tuo account.' },
      { q: 'È conforme al GDPR?', a: 'Lo configuriamo con il data center europeo di Zoho, il banner di consenso e l’informativa aggiornata.' },
    ],
  },

  /* ----------------------------------------------------------------- Forms */
  {
    slug: 'forms',
    name: 'Forms',
    full: 'Zoho Forms',
    icon: 'inbox',
    visual: 'form',
    phase: 'contatto',
    menu: 'Ogni richiesta in un solo posto',
    site: 'Raccoglie richieste e preventivi senza disperdere il lead tra mille canali.',
    title: 'Ogni richiesta arriva ',
    highlight: 'nello stesso posto',
    lead: 'Con Zoho Forms le richieste di preventivo, i gruppi, gli eventi e il pre check-in passano da moduli pensati per l’hotel e finiscono direttamente nel CRM, già ordinate.',
    seo: {
      title: 'Zoho Forms per hotel: preventivi e richieste nel CRM',
      description: 'Zoho Forms per hotel: moduli di preventivo, gruppi, eventi e pre check-in collegati al CRM, con notifiche alla reception e nessuna richiesta persa.',
      keywords: ['Zoho Forms hotel', 'modulo preventivo hotel', 'form richiesta hotel', 'pre check-in online', 'richieste preventivo albergo'],
    },
    problem: [
      'Le richieste arrivano da email, sito, telefono e social, e qualcuna si perde.',
      'Il modulo del sito chiede “messaggio” e poi servono tre email per sapere date e persone.',
      'Qualcuno ricopia a mano i dati nel gestionale, con errori e ritardi.',
    ],
    solution: [
      'Moduli diversi per camere, gruppi, eventi e matrimoni, con i campi giusti.',
      'Ogni invio crea il contatto e la richiesta nel CRM, assegnata a chi deve rispondere.',
      'La reception riceve una notifica e risponde con il preventivo già impostato.',
    ],
    forms: [
      { icon: 'bed', title: 'Preventivo camere', text: 'Date, persone, età dei bambini, tipologia e trattamento.' },
      { icon: 'users', title: 'Gruppi ed eventi', text: 'Numero di partecipanti, sale, coffee break, camere in blocco.' },
      { icon: 'heart', title: 'Matrimoni e cerimonie', text: 'Data, invitati, ricevimento, camere per gli ospiti.' },
      { icon: 'document', title: 'Pre check-in online', text: 'Dati degli ospiti e documenti prima dell’arrivo, per un check-in più veloce.' },
    ],
    features: [
      { icon: 'filter', title: 'Logica condizionale', text: 'Se l’ospite indica bambini, compaiono i campi per le età. Se sceglie “evento”, quelli per la sala.' },
      { icon: 'users', title: 'Collegamento al CRM', text: 'Contatto, richiesta e fonte vengono creati nel CRM appena il modulo è inviato.' },
      { icon: 'bell', title: 'Notifiche e assegnazioni', text: 'La richiesta va alla persona giusta: reception, ufficio gruppi o eventi.' },
      { icon: 'wallet', title: 'Pagamenti e caparre', text: 'Un modulo può incassare un acconto con i principali sistemi di pagamento online.' },
      { icon: 'globe', title: 'Più lingue', text: 'Lo stesso modulo in italiano, inglese, tedesco e nelle lingue dei tuoi ospiti.' },
      { icon: 'shield', title: 'Consensi tracciati', text: 'Privacy e marketing raccolti con data e testo dell’informativa, salvati nel CRM.' },
    ],
    steps: [
      { title: 'Mappiamo le richieste', text: 'Da dove arrivano oggi e quali informazioni mancano sempre alla prima email.' },
      { title: 'Costruiamo i moduli', text: 'Con la grafica del sito e i campi che servono a preparare subito il preventivo.' },
      { title: 'Colleghiamo il CRM', text: 'Ogni campo va al posto giusto nella scheda dell’ospite e nella richiesta.' },
      { title: 'Misuriamo', text: 'Quanti moduli vengono aperti, iniziati e completati, campo per campo.' },
    ],
    scenario: {
      title: 'Una richiesta per un gruppo',
      text: 'Un’agenzia compila il modulo gruppi: 24 persone, tre notti, una sala per mezza giornata. Il CRM crea la richiesta, la assegna all’ufficio gruppi e manda all’agenzia la conferma di ricezione. Il preventivo parte in giornata, con camere e sala già selezionate dal catalogo.',
      note: 'Scenario di esempio.',
    },
    metrics: ['Richieste per tipo e canale', 'Tempo medio di risposta', 'Moduli iniziati e non completati', 'Richieste che diventano prenotazioni'],
    crm: 'Forms è la porta d’ingresso del CRM: ogni modulo crea o aggiorna l’ospite, avvia la pipeline del preventivo e alimenta Marketing Automation con i consensi.',
    photo: '/img/photos/sala-design.webp',
    faq: [
      { q: 'Posso tenere il modulo che ho già sul sito?', a: 'Possiamo collegarlo al CRM, ma di solito conviene rifarlo con Zoho Forms: è più semplice aggiungere campi e logiche e i dati arrivano completi.' },
      { q: 'Si possono raccogliere i documenti per il check-in?', a: 'Sì, con un modulo dedicato e il caricamento dei file. Definiamo insieme quali dati chiedere e per quanto conservarli.' },
      { q: 'I moduli funzionano da smartphone?', a: 'Sì, si adattano allo schermo. C’è anche l’app per compilarli al banco o a una fiera, pure senza connessione.' },
    ],
  },

  /* -------------------------------------------------- Marketing Automation */
  {
    slug: 'marketing-automation',
    name: 'Marketing Automation',
    full: 'Zoho Marketing Automation',
    icon: 'send',
    visual: 'journey',
    phase: 'contatto',
    menu: 'Campagne prima e dopo il soggiorno',
    site: 'Trasforma i contatti raccolti in prenotazioni dirette attribuite, con campagne mirate prima e dopo il soggiorno.',
    title: 'Dai contatti raccolti a ',
    highlight: 'prenotazioni dirette',
    lead: 'Marketing Automation manda il messaggio giusto a ogni ospite nel momento giusto: dalla richiesta di preventivo alla vigilia dell’arrivo, fino all’offerta per tornare l’anno dopo. E ti dice quali campagne hanno portato prenotazioni.',
    seo: {
      title: 'Zoho Marketing Automation per hotel: email e percorsi automatici',
      description: 'Zoho Marketing Automation per hotel: percorsi automatici prima e dopo il soggiorno, segmenti dal CRM e prenotazioni dirette attribuite a ogni campagna.',
      keywords: ['Marketing Automation hotel', 'email marketing hotel', 'newsletter albergo', 'automazioni pre soggiorno', 'fidelizzazione ospiti hotel'],
    },
    problem: [
      'La newsletter parte a tutti, uguale, due volte l’anno.',
      'I preventivi senza risposta restano lì, nessuno li richiama.',
      'Non sai quante prenotazioni ha portato l’ultima campagna.',
    ],
    solution: [
      'Segmenti presi dal CRM: famiglie, coppie, business, ospiti abituali.',
      'Percorsi automatici che seguono l’ospite dal preventivo al ritorno.',
      'Ogni prenotazione diretta attribuita alla campagna che l’ha generata.',
    ],
    journey: [
      { when: 'Preventivo inviato', what: 'Promemoria dopo due giorni se l’ospite non ha risposto' },
      { when: '7 giorni prima', what: 'Benvenuto, info di arrivo e proposta di upgrade o spa' },
      { when: 'Giorno di partenza', what: 'Grazie del soggiorno e invito al questionario' },
      { when: '30 giorni dopo', what: 'Ricordo del soggiorno e tariffa riservata per tornare' },
      { when: 'Compleanno', what: 'Auguri con un regalo per il prossimo soggiorno' },
    ],
    features: [
      { icon: 'network', title: 'Percorsi visuali', text: 'Disegni il percorso a blocchi: attese, condizioni, email, SMS, aggiornamenti nel CRM.' },
      { icon: 'filter', title: 'Segmenti dinamici', text: 'Liste che si aggiornano da sole in base a soggiorni, spesa, canale e preferenze.' },
      { icon: 'target', title: 'Punteggio dei contatti', text: 'Chi apre, clicca e torna sul sito sale di punteggio: la reception sa chi chiamare.' },
      { icon: 'mail', title: 'Email con il tuo stile', text: 'Modelli con il marchio dell’hotel, testati su smartphone e nei principali client di posta.' },
      { icon: 'chart', title: 'Attribuzione', text: 'Aperture, clic e soprattutto prenotazioni e ricavi generati da ogni campagna.' },
      { icon: 'shield', title: 'Consensi e disiscrizioni', text: 'Si scrive solo a chi ha dato il consenso; chi si disiscrive viene escluso ovunque.' },
    ],
    steps: [
      { title: 'Puliamo la base', text: 'Importiamo e deduplichiamo gli ospiti, verificando i consensi disponibili.' },
      { title: 'Creiamo i segmenti', text: 'Dal CRM: tipologia di ospite, stagione, camera, canale di prenotazione.' },
      { title: 'Attiviamo i percorsi', text: 'Prima e dopo il soggiorno, con testi scritti per il tuo hotel.' },
      { title: 'Misuriamo', text: 'Ogni mese vediamo cosa ha portato prenotazioni e cosa va cambiato.' },
    ],
    scenario: {
      title: 'Il preventivo che non risponde',
      text: 'Una famiglia chiede un preventivo per una settimana a luglio e non risponde. Dopo due giorni parte un’email con le foto della family room e la piscina. La apre, clicca, torna sul sito: il punteggio sale e la reception la richiama. La prenotazione arriva sul canale diretto e il CRM la attribuisce al percorso “preventivo”.',
      note: 'Scenario di esempio.',
    },
    metrics: ['Prenotazioni e ricavi per campagna', 'Tasso di apertura e clic', 'Preventivi recuperati', 'Ospiti di ritorno', 'Crescita della base con consenso'],
    crm: 'Marketing Automation legge segmenti e consensi dal CRM e ci riscrive aperture, clic e punteggio: tutto quello che l’ospite fa con le tue email è nella sua scheda.',
    photo: '/img/photos/colazione.webp',
    faq: [
      { q: 'Posso importare la mia lista attuale?', a: 'Sì, a patto di avere il consenso per le comunicazioni commerciali. Prima di importarla verifichiamo insieme la provenienza dei contatti.' },
      { q: 'Chi scrive i testi delle email?', a: 'Possiamo prepararli noi partendo dal tono del tuo hotel, oppure configurare i modelli e lasciarli al tuo team.' },
      { q: 'Si possono mandare anche SMS?', a: 'Sì, Marketing Automation gestisce anche gli SMS con un fornitore collegato. Li consigliamo per i messaggi brevi a ridosso dell’arrivo.' },
    ],
  },

  /* ---------------------------------------------------------------- Social */
  {
    slug: 'social',
    name: 'Social',
    full: 'Zoho Social',
    icon: 'megaphone',
    visual: 'inbox',
    phase: 'prima',
    menu: 'Tutti i canali in un’unica coda',
    site: 'Presidio continuo su ogni canale, messaggi e lead in un’unica coda.',
    title: 'Tutti i social, ',
    highlight: 'un’unica coda',
    lead: 'Zoho Social mette insieme pubblicazioni, messaggi e commenti di Facebook, Instagram, Google e degli altri canali. Programmi i post del mese in un’ora e nessuna domanda resta senza risposta.',
    seo: {
      title: 'Zoho Social per hotel: post, messaggi e lead in un’unica coda',
      description: 'Zoho Social per hotel: calendario editoriale, pubblicazione su Facebook, Instagram e Google, messaggi in un’unica coda e lead dei social nel CRM.',
      keywords: ['Zoho Social hotel', 'social media hotel', 'gestione Instagram hotel', 'calendario editoriale albergo', 'lead Facebook hotel'],
    },
    problem: [
      'Cinque app aperte sul telefono per rispondere a messaggi e commenti.',
      'I post si fanno quando c’è tempo, cioè quasi mai in alta stagione.',
      'Chi chiede disponibilità in direct non entra mai nel CRM.',
    ],
    solution: [
      'Un calendario unico per pubblicare su tutti i canali.',
      'Messaggi e commenti in un’unica coda, assegnati a chi risponde.',
      'I contatti dai social arrivano nel CRM come richieste.',
    ],
    channels: ['Facebook', 'Instagram', 'Google Business', 'LinkedIn', 'TikTok', 'YouTube', 'X', 'Pinterest'],
    features: [
      { icon: 'calendar', title: 'Calendario editoriale', text: 'Pianifichi i post di settimane o mesi, con anteprima per ogni canale.' },
      { icon: 'clock', title: 'Orari migliori', text: 'Zoho Social suggerisce quando il tuo pubblico è più attivo e pubblica in quel momento.' },
      { icon: 'inbox', title: 'Coda unica dei messaggi', text: 'Direct, commenti e menzioni di tutti i canali in un solo posto, con lo stato di ogni conversazione.' },
      { icon: 'users', title: 'Lavoro di squadra', text: 'Bozze, approvazioni e assegnazioni: l’agenzia propone, la direzione approva.' },
      { icon: 'target', title: 'Lead nel CRM', text: 'I moduli delle campagne su Facebook e Instagram creano contatti nel CRM.' },
      { icon: 'chart', title: 'Report', text: 'Crescita, interazioni e post migliori, in report che si mandano da soli ogni mese.' },
    ],
    steps: [
      { title: 'Colleghiamo i canali', text: 'Facebook, Instagram, Google Business e gli altri profili della struttura.' },
      { title: 'Impostiamo il calendario', text: 'Rubriche ricorrenti, stagionalità ed eventi del territorio.' },
      { title: 'Organizziamo la coda', text: 'Chi risponde a cosa, con risposte pronte alle domande frequenti.' },
      { title: 'Colleghiamo il CRM', text: 'Lead e conversazioni importanti diventano richieste da seguire.' },
    ],
    scenario: {
      title: 'Una domanda in direct',
      text: 'Sotto un reel della piscina qualcuno chiede “avete posto a Pasqua?”. Il commento arriva nella coda di Zoho Social, la reception risponde con il link al modulo di preventivo e la richiesta compilata entra nel CRM con fonte “Instagram”. A fine mese sai quante prenotazioni ha portato Instagram.',
      note: 'Scenario di esempio.',
    },
    metrics: ['Interazioni per canale', 'Tempo di risposta ai messaggi', 'Post con più risultati', 'Lead e prenotazioni da social'],
    crm: 'Con Zoho Social i social smettono di essere un mondo a parte: i contatti che arrivano da lì sono ospiti nel CRM, con la fonte registrata.',
    photo: '/img/photos/rooftop-mare.webp',
    faq: [
      { q: 'Posso continuare a pubblicare dalle app dei social?', a: 'Sì. Zoho Social affianca le app ufficiali; conviene però passare da lì per avere calendario e report completi.' },
      { q: 'Lo può usare l’agenzia che segue i nostri social?', a: 'Sì, con un utente dedicato e le approvazioni: l’agenzia prepara i post e tu li approvi prima della pubblicazione.' },
      { q: 'Gestisce anche le recensioni su Google?', a: 'Il profilo Google Business si collega a Zoho Social per i post. Per le recensioni definiamo insieme il flusso più adatto, anche con Survey.' },
    ],
  },

  /* ---------------------------------------------------------------- Survey */
  {
    slug: 'survey',
    name: 'Survey',
    full: 'Zoho Survey',
    icon: 'star',
    visual: 'nps',
    phase: 'dopo',
    menu: 'L’NPS di ogni soggiorno',
    site: 'Misura l’NPS a fine soggiorno e lo correla alla tipologia di camera.',
    title: 'Sai cosa pensano gli ospiti ',
    highlight: 'prima delle recensioni',
    lead: 'Zoho Survey manda a ogni ospite un questionario breve alla partenza e misura l’NPS, cioè quanto ti consiglierebbe. Le risposte arrivano nel CRM e si leggono per camera, reparto e periodo.',
    seo: {
      title: 'Zoho Survey per hotel: NPS e questionari di soddisfazione',
      description: 'Zoho Survey per hotel: questionari post soggiorno, NPS per tipologia di camera e reparto, risposte nel CRM e avvisi sugli ospiti insoddisfatti.',
      keywords: ['Zoho Survey hotel', 'NPS hotel', 'questionario soddisfazione hotel', 'customer satisfaction albergo', 'feedback ospiti'],
    },
    problem: [
      'Scopri che un ospite era scontento quando leggi la recensione online.',
      'I questionari cartacei in camera li compilano in pochi e nessuno li riassume.',
      'Non sai se a deludere è la camera, la colazione o il check-in.',
    ],
    solution: [
      'Un questionario breve in automatico alla partenza, da smartphone.',
      'NPS per tipologia di camera, reparto e periodo, in una dashboard.',
      'Un avviso alla direzione quando un ospite dà un voto basso.',
    ],
    features: [
      { icon: 'star', title: 'NPS e soddisfazione', text: 'La domanda “quanto ci consiglieresti?” più poche domande sui reparti.' },
      { icon: 'filter', title: 'Domande condizionali', text: 'Chi dà un voto basso spiega il motivo; chi è entusiasta riceve l’invito a lasciare una recensione.' },
      { icon: 'send', title: 'Invio automatico', text: 'Il questionario parte dal CRM al check-out, senza che nessuno debba ricordarsene.' },
      { icon: 'globe', title: 'Più lingue', text: 'Ogni ospite risponde nella sua lingua; i risultati restano confrontabili.' },
      { icon: 'chart', title: 'Report per camera e reparto', text: 'Incroci le risposte con i dati del soggiorno: tipologia, durata, canale, stagione.' },
      { icon: 'bell', title: 'Avvisi', text: 'Un voto basso apre un’attività nel CRM per richiamare l’ospite.' },
    ],
    steps: [
      { title: 'Scriviamo il questionario', text: 'Poche domande, in due minuti dallo smartphone: l’NPS più i reparti che contano.' },
      { title: 'Lo colleghiamo al check-out', text: 'Parte da solo con i dati del soggiorno già associati.' },
      { title: 'Impostiamo gli avvisi', text: 'Chi riceve la segnalazione di un voto basso e cosa deve fare.' },
      { title: 'Leggiamo i risultati', text: 'Dashboard mensile per camera, reparto e periodo.' },
    ],
    scenario: {
      title: 'Le camere al secondo piano',
      text: 'L’NPS complessivo è buono, ma incrociato con le tipologie le Comfort del secondo piano sono molto sotto la media. Le risposte aperte parlano di rumore dalla strada. La direzione anticipa la sostituzione degli infissi e tre mesi dopo il punteggio di quelle camere si allinea alle altre.',
      note: 'Scenario di esempio.',
    },
    metrics: ['NPS complessivo e per camera', 'Soddisfazione per reparto', 'Tasso di risposta', 'Ospiti insoddisfatti richiamati', 'Inviti alla recensione accettati'],
    crm: 'Il voto finisce nella scheda dell’ospite: Marketing Automation scrive in modo diverso a chi è entusiasta e a chi ha avuto un intoppo.',
    photo: '/img/photos/camera-deluxe.webp',
    faq: [
      { q: 'Cos’è l’NPS?', a: 'Net Promoter Score: si chiede da 0 a 10 quanto l’ospite ti consiglierebbe. Si sottrae la percentuale di chi dà da 0 a 6 a quella di chi dà 9 o 10.' },
      { q: 'Quante domande conviene fare?', a: 'Poche: l’NPS, tre o quattro voti sui reparti e un campo libero. Un questionario breve ha più risposte.' },
      { q: 'Si può usare anche in hotel, su un tablet?', a: 'Sì, Zoho Survey ha una modalità chiosco per raccogliere risposte alla reception o al ristorante.' },
    ],
  },

  /* ---------------------------------------------------------------- Thrive */
  {
    slug: 'thrive',
    name: 'Thrive',
    full: 'Zoho Thrive',
    icon: 'gift',
    visual: 'loyalty',
    phase: 'dopo',
    menu: 'Loyalty e passaparola',
    site: 'Trasforma l’ospite che riparte in un ospite che torna, con programmi di loyalty e referral.',
    title: 'L’ospite che riparte ',
    highlight: 'diventa un ospite che torna',
    lead: 'Zoho Thrive gestisce programmi fedeltà e di passaparola: punti per ogni soggiorno prenotato in diretta, livelli con vantaggi crescenti e premi per chi porta un amico.',
    seo: {
      title: 'Zoho Thrive per hotel: programma fedeltà e passaparola',
      description: 'Zoho Thrive per hotel: programma fedeltà a punti e livelli, referral “porta un amico” e premi per chi prenota sul canale diretto, collegati al CRM.',
      keywords: ['Zoho Thrive hotel', 'programma fedeltà hotel', 'loyalty hotel', 'referral hotel', 'fidelizzazione ospiti'],
    },
    problem: [
      'L’ospite soddisfatto la volta dopo riprenota dal portale, per abitudine.',
      'Gli sconti agli habitué si fanno a voce, senza regole né memoria.',
      'Il passaparola esiste ma non sai chi ti ha mandato chi.',
    ],
    solution: [
      'Punti e vantaggi solo per chi prenota sul tuo sito.',
      'Livelli chiari, con regole uguali per tutti e calcolate in automatico.',
      'Un link personale per invitare gli amici, con il premio tracciato.',
    ],
    tiers: [
      { name: 'Benvenuto', text: 'Dalla prima prenotazione diretta: punti su ogni soggiorno.' },
      { name: 'Habitué', text: 'Dopo tre soggiorni: late check-out e welcome drink.' },
      { name: 'Di casa', text: 'Dopo sei soggiorni: upgrade quando disponibile e tariffa riservata.' },
    ],
    features: [
      { icon: 'star', title: 'Punti e premi', text: 'Punti per notti, spesa o azioni come la recensione; premi da riscattare nel soggiorno successivo.' },
      { icon: 'layers', title: 'Livelli', text: 'Più l’ospite torna, più vantaggi sblocca. I passaggi di livello sono automatici.' },
      { icon: 'users', title: 'Porta un amico', text: 'Ogni ospite ha un link personale: se l’amico prenota, entrambi ricevono un premio.' },
      { icon: 'globe', title: 'Pagina del programma', text: 'L’ospite vede i suoi punti e i premi disponibili in un’area con i colori dell’hotel.' },
      { icon: 'mail', title: 'Comunicazioni', text: 'Benvenuto nel programma, punti in scadenza, nuovo livello: messaggi che partono da soli.' },
      { icon: 'chart', title: 'Report', text: 'Iscritti, punti emessi e riscattati, prenotazioni portate dal programma e dai referral.' },
    ],
    steps: [
      { title: 'Disegniamo le regole', text: 'Quanti punti, quali premi, quali livelli: sostenibili per il tuo margine.' },
      { title: 'Colleghiamo le prenotazioni', text: 'I punti si accumulano dai soggiorni registrati nel CRM.' },
      { title: 'Lanciamo il programma', text: 'Pagina, email di invito agli ospiti con consenso e materiali per la reception.' },
      { title: 'Misuriamo', text: 'Quante prenotazioni dirette arrivano da iscritti e amici invitati.' },
    ],
    scenario: {
      title: 'Due coppie, un link',
      text: 'Marco è al terzo soggiorno: passa al livello Habitué e riceve il late check-out. Gira il suo link a un amico, che prenota un weekend sul sito. Marco riceve punti per la prossima cena, l’amico uno sconto sul primo soggiorno, e l’hotel ha due prenotazioni senza commissioni.',
      note: 'Scenario di esempio.',
    },
    metrics: ['Iscritti al programma', 'Prenotazioni dirette da iscritti', 'Referral convertiti', 'Punti riscattati', 'Frequenza di ritorno'],
    crm: 'Thrive usa i soggiorni del CRM per assegnare i punti e ci scrive livello e saldo: la reception vede subito chi è un ospite “di casa”.',
    photo: '/img/photos/spa-sauna.webp',
    faq: [
      { q: 'Un programma fedeltà non costa troppo?', a: 'Dipende dai premi. Spesso funzionano meglio i vantaggi che costano poco all’hotel, come late check-out, upgrade o welcome drink, rispetto agli sconti.' },
      { q: 'I punti valgono anche per chi prenota dai portali?', a: 'Si decide nelle regole. Di solito i punti si danno solo sulle prenotazioni dirette, per spostare gli ospiti sul tuo sito.' },
      { q: 'Serve un’app per gli ospiti?', a: 'No. L’ospite usa la pagina del programma dal browser e riceve gli aggiornamenti per email.' },
    ],
  },
];

export const appBySlug = Object.fromEntries(apps.map((a) => [a.slug, a]));
