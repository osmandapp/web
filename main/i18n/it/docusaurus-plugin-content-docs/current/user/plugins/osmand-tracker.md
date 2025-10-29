---
source-hash: ed4b1b02f7f55c370674eabb71f00501510288e583e3135341a0905ed0b8ad69
sidebar_position: 11
title:  OsmAnd Tracker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoAndroidOnly />

## Panoramica {#overview}

OsmAnd Tracker è un client Telegram modificato creato per il monitoraggio flessibile e l'invio di messaggi con posizioni GPS in tempo reale.  

[OsmAnd tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) ti aiuta a vedere i tuoi contatti su una mappa in OsmAnd. Ha un aspetto social, il che significa che per usarlo è necessario fornire l'accesso ai propri contatti alla piattaforma scelta da OsmAnd.  

Abbiamo scelto [Telegram](https://telegram.org/) come la piattaforma social più aperta perché ha un'[API aperta](https://core.telegram.org/api), un SDK aperto e, inoltre, avrà in futuro un'implementazione di server aperto (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)


### Come funziona {#how-it-works}

È importante notare che esiste un alto livello di compatibilità tra le app. Puoi condividere facilmente la tua posizione con i tuoi contatti senza avere l'app mobile di Telegram (OsmAnd Online GPS Tracker è un client Telegram indipendente) e, viceversa, i tuoi contatti non hanno bisogno di avere [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) per vedere la tua posizione.  

Abbiamo progettato [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) in modo che tu possa continuare a usare l'app di Telegram e l'app di OsmAnd nel modo in cui sei abituato, senza restrizioni aggiuntive.  

L'applicazione invia messaggi di Posizione Live alle chat selezionate per il tempo impostato, visualizza un elenco dei tuoi contatti e gruppi e controlla le chat per i messaggi con la tua posizione, che vengono poi visualizzati sulla mappa in OsmAnd.
L'applicazione non invia né visualizza i tuoi messaggi di testo.  

Accedi utilizzando il tuo numero di telefono registrato su Telegram per abilitare quanto segue:

- Gestire l'elenco dei contatti e dei gruppi che ti inviano la loro posizione.
- Visualizzare la posizione di contatti e gruppi in tempo reale su una mappa in OsmAnd.
- Impostare il tempo di condivisione della posizione separatamente per ogni chat.
- Impostare la frequenza di aggiornamento della tua posizione.
- Monitorare la cronologia dei tuoi spostamenti e dei tuoi contatti.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


## Parametri di configurazione richiesti {#required-setup-parameters}

Puoi installare OsmAnd Online GPS Tracker:

- dal [Google Play store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- o dal [server OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk) (file APK)


## Impostazioni del plugin {#plugin-settings}

Ci sono diverse impostazioni per gestire la frequenza di condivisione delle posizione e controllare la visualizzazione delle posizioni che ti vengono inviate.

Per aprire il menu *Impostazioni*:  

*Schermata [La mia posizione](#my-location-screen) → scorri la schermata verso il basso (elenco contatti) → ⋮ → Impostazioni*  
o  
*Schermata [Live ora](#live-now-screen) → ⋮ → Impostazioni*  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)


### Posizione {#position}

**Invia la mia posizione** — permette di impostare l'intervallo di invio della propria posizione da una volta al secondo (per aumentare la precisione) a una volta ogni 5 minuti (per ridurre il consumo energetico).

**Non in movimento** — permette di impostare il tempo (da 1 minuto a 1 ora) dopo il quale la posizione di un contatto è considerata obsoleta. Se una posizione diventa obsoleta, diventa grigia.

**Cronologia posizione** — permette di impostare il tempo (da 5 minuti a 24 ore) dopo il quale il contatto con la posizione cancellata verrà nascosto dall'elenco e dalla mappa di OsmAnd.

**Invia posizione come** - permette di scegliere una categoria per l'invio di messaggi sulla propria posizione in Telegram (3 tipi di invio): testo, mappa, testo e mappa.

**Tempo di scadenza del buffer** - permette di scegliere il tempo di salvataggio dei punti nel buffer.

**Lavoro in background** - permette di modificare le impostazioni di ottimizzazione della batteria per stabilizzare la condivisione della posizione.

**Sorgente della posizione** - permette di scegliere i *Servizi di Google Play* (predefinito) o l'*API di Android* per determinare la posizione.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Unità e formati {#units--formats}

Permette di aggiungere impostazioni per unità e formati. Ora puoi scegliere i valori che ti sono comodi per i messaggi di Telegram quando condividi i dati sulla posizione.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)


### Aspetto {#appearance}

Permette di mostrare il numero di punti GPS ricevuti da altri contatti, così come quelli inviati da te.


### Privacy {#privacy}

Uso del proxy all'interno di OsmAnd Tracker. Vai su Impostazioni e inserisci i dati del tuo proxy: *Impostazioni → Privacy → Impostazioni proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg)  ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)


### Impostazioni GPS {#gps-settings}

Impostazioni dei punti di localizzazione. Ad esempio, se rimani in un luogo per un po' di tempo senza muoverti, i dati del tuo punto di localizzazione non vengono inviati e la tua traccia GPX mostrerà dati più precisi e accurati.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)


### Condividi posizione come {#share-location-as}

Se vuoi collegare più dispositivi a un unico account Telegram, devi cliccare su "Aggiungi dispositivo" e dare un nome al dispositivo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)


### OsmAnd Connect {#osmand-connect}

Questa impostazione ti permette di selezionare la versione di OsmAnd in cui i tuoi contatti con la loro posizione appariranno sulla mappa.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)


### Account {#account}

Usa questa impostazione per controllare quale account Telegram stai usando al momento. Inoltre, in questo menu puoi uscire dall'applicazione OsmAnd Telegram semplicemente toccando il pulsante *Esci*.  


### Buffer Logcat {#logcat-buffer}

Qui puoi controllare e condividere i log dettagliati dell'app.


## Schermata La mia posizione {#my-location-screen}

In questa schermata puoi vedere i tuoi contatti di Telegram. Puoi selezionarne uno o più, impostare le opzioni di condivisione e iniziare a condividere la tua posizione.  

Dopo il primo avvio, vedrai un elenco di Contatti suggeriti. Questi sono i cinque contatti più recenti con cui hai condiviso la tua posizione. Puoi cliccare una sola volta per continuare a condividere la tua posizione con questi contatti.  

Il tempo di condivisione è l'ultimo tempo di condivisione che hai selezionato per il contatto.  

Quando inizi a condividere, vedrai un elenco di Contatti suggeriti e un pulsante *Torna a OsmAnd* nella schermata *La mia posizione*.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)


## Schermata Live ora {#live-now-screen}

In questo menu, puoi vedere tutti i contatti che stanno condividendo una posizione con te. Tocca il contatto e guardalo sulla **mappa di OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)


### Indicatore attivo sulla mappa di OsmAnd {#active-marker-on-the-osmand-map}

Permette di tracciare la distanza, la velocità e l'angolo di movimento dei tuoi contatti sulla mappa di OsmAnd e nel testo di Telegram. Puoi capire dove e come si sta muovendo il tuo contatto.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)


## Schermata Cronologia {#timeline-screen}

Questa è la terza scheda dell'applicazione. Qui puoi selezionare un giorno per visualizzare la cronologia delle posizione condivise con te. Selezionando un giorno vengono visualizzati i contatti che hanno mostrato la loro posizione quel giorno.  

Il monitoraggio ti permette di raccogliere informazioni in background quando i tuoi contatti le condividono. Per fare ciò, devi abilitarlo.

Per visualizzare tutte le informazioni sulla posizione di un contatto, tocca la sua icona o apri una traccia GPX in OsmAnd ed esplora la traccia in modo più dettagliato ([leggi di più qui](./trip-recording.md)). Puoi anche condividere la traccia GPX per un periodo selezionato: inviandola a un'e-mail o a qualsiasi messaggistica istantanea.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Puoi vedere il movimento online dei tuoi contatti sulla mappa di OsmAnd utilizzando la traccia GPS online. Per fare ciò, devi abilitare *Live* presso il contatto nella *Cronologia*. Se ci sono molti contatti in comune al momento, l'app OsmAnd seleziona il colore delle tracce in modo casuale.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Quando tocchi "Mostra in OsmAnd" o sulla mini-mappa, puoi selezionare impostazioni speciali per il tracciamento GPX del tuo contatto nell'app OsmAnd e vedere il loro movimento in tempo reale sulla mappa di OsmAnd.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Se non ci sono dati raccolti nella data selezionata, apparirà una notifica speciale sullo schermo. Puoi spostarti alla data più vicina toccando la freccia avanti o indietro.  

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)


## Widget Tracker {#tracker-widget}

Per visualizzare il [widget](../widgets/info-widgets.md#trip-recording-widgets), devi prima abilitare il plugin OsmAnd Tracker. Dopodiché, un widget con la parola *Start* apparirà nell'angolo in alto a destra dello schermo di OsmAnd.  

Per disabilitarlo, puoi andare su *Menu principale → Configura schermata*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png)   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Il widget ha diverse visualizzazioni.  

1. La prima è *Start*.  
   Quando tocchi *Start*, vai su [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), dove puoi selezionare qualsiasi contatto o toccare Contatti suggeriti.
2. In secondo luogo, quando inizi a condividere la tua posizione, il widget cambia aspetto.  

   - L'icona emoji verde *OK* significa che la tua posizione è ora condivisa. Tutto è normale, la condivisione è in esecuzione senza errori.  
   - Un'icona emoji arancione *OK* significa che la tua posizione non può essere inviata. C'è un problema con la connessione Internet o GPS.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

   - Se non hai una connessione Internet per molto tempo, i tuoi punti di localizzazione vengono salvati nel buffer di OsmAnd Tracker. Il widget in OsmAnd cambia il suo aspetto in un'icona emoji grigia. Mostra il tempo di riempimento del buffer, per quanto tempo il buffer sta già salvando i tuoi punti di localizzazione.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Non appena la connessione Internet viene ripristinata, inizierà a caricare i punti di localizzazione dal buffer. Il widget di OsmAnd cambierà aspetto e il numero di minuti in esso inizierà a diminuire. Quando tutti i punti di localizzazione dal buffer saranno caricati su Telegram, l'icona emoji *OK* apparirà sul widget.  

   ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg)     ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Se vedi il widget come un'icona emoji *OK*, significa che va tutto bene. Il processo di scambio sta procedendo senza problemi.  


## OsmAnd Assistant {#osmand-assistant}

L'app OsmAnd ha il suo bot Telegram chiamato "OsmAnd Assistant", che ti aiuta a integrare OsmAnd Telegram con tracker o API di terze parti. Sarai in grado di condividere non solo la tua posizione, ma anche la posizione della tua bici o di un gruppo di persone in gara disponibile tramite l'API. OsmAnd Telegram ti darà una bella presentazione delle tue posizioni sulla mappa in OsmAnd stesso.  

Per favore, condividi con noi cosa ne pensi di questa nuova app su [Twitter](https://x.com/osmandapp) e altri canali social.

Per visualizzare le posizioni GPS dei contatti sulla mappa, è necessaria l'ultima versione di [OsmAnd o OsmAnd+](./../purchases/android.md). La versione minima supportata di OsmAnd o OsmAnd+ è la 3.0.4.