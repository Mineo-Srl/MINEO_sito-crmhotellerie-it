# CRM Hotel — versione "widget" (ramo nuovo, 9 ottobre 2026)

Copia di `../crmhotellerie-funnel-dato_def/` con una sezione in più: **«Il widget dal vivo»** (#widget), dopo «Perché CRM Hotel».
Mostra le 11 schermate reali della cartella `immagini/` di `_def`, ottimizzate in `public/img/widget/` (JPG 1600px).

Come funziona (`src/components/WidgetShowcase.astro`, testi in `widgetTabs` di `src/data/site.js`):
7 schede (Planning unico · Pulizie e manutenzioni · Segnalazioni · Addebiti · Check-out · Tipi di camera · Tariffe e stagioni),
cornice da browser, immagine principale + schermata secondaria sovrapposta, tre punti chiave sotto,
cambio automatico ogni 7 secondi (si ferma quando clicchi), tastiera con le frecce, su telefono schede scorrevoli.
Voce «Il widget» aggiunta al menu in alto.

Anteprima: porta 4330 (`Anteprima sito.command`). Zip: `deploy/crm-hotellerie-widget-latest.zip`.
**Privacy:** le schermate contengono nomi di prenotazioni e staff di prova (es. «Mario Rossi», «Andrea Mineo»): controllare prima di pubblicare.
