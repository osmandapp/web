---
source-hash: 652f7e88fdf4d2bae94537d58c7ea9e1d5aa0e57dfb954e058fd661aae10355c
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

OsmAnd Tracker è un client Telegram modificato creato per monitorare in modo flessibile e inviare messaggi con posizioni GPS in tempo reale.

[OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) ti aiuta a vedere i tuoi contatti su una mappa in OsmAnd. Ha un aspetto sociale, il che significa che per usarlo devi fornire l'accesso ai tuoi contatti per la piattaforma scelta da OsmAnd.

Abbiamo scelto [Telegram](https://telegram.org/) come piattaforma sociale più aperta perché ha un' [API aperta](https://core.telegram.org/api), un SDK aperto e, inoltre, avrà infine un'implementazione server aperta (Blockchain).

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My_Location.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Map.png)

### Come funziona {#how-it-works}

È importante sottolineare che esiste un elevato livello di compatibilità tra le app. Puoi facilmente condividere la tua posizione con i tuoi contatti senza avere l'app mobile di Telegram (OsmAnd Online GPS Tracker è un client Telegram indipendente) e, viceversa, i tuoi contatti non hanno bisogno di avere [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) per vedere la tua posizione.

Abbiamo progettato [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) in modo che tu possa continuare a utilizzare l'app Telegram e l'app OsmAnd nel modo a cui sei abituato, senza restrizioni aggiuntive.

L'applicazione invia messaggi di Posizione in tempo reale alle chat selezionate per il tempo impostato, visualizza un elenco dei tuoi contatti e gruppi e controlla le chat per i messaggi con la tua posizione, che vengono quindi visualizzati sulla mappa in OsmAnd.
L'applicazione non invia né visualizza i tuoi messaggi di testo.

Accedi utilizzando il tuo numero di telefono registrato su Telegram per abilitare quanto segue:

- Gestisci l'elenco dei contatti e dei gruppi che ti inviano la loro posizione.
- Visualizza la posizione di contatti e gruppi in tempo reale su una mappa in OsmAnd.
- Imposta il tempo per la condivisione della posizione separatamente per ogni chat.
- Imposta la frequenza con cui la tua posizione viene aggiornata.
- Monitora la cronologia dei tuoi spostamenti e dei tuoi contatti.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/My-location_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)

## Parametri di configurazione richiesti {#required-setup-parameters}

Installa l'APK di OsmAnd Online GPS Tracker:

- [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand.telegram)
- [Server OsmAnd](https://download.osmand.net/latest-night-build/OsmAnd-tracker.apk)

## Impostazioni del plugin {#plugin-settings}

Ci sono diverse impostazioni per gestire la frequenza di condivisione delle posizioni e controllare la visualizzazione delle posizioni che ti vengono inviate.

Per aprire il menu *Impostazioni*:

*Schermata [La mia posizione](#my-location-screen) → scorri la schermata verso il basso (elenco contatti) → ⋮ → Impostazioni*
o
*Schermata [In diretta ora](#live-now-screen) → ⋮ → Impostazioni*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_settings_1.png)

### Posizione {#position}

**Invia la mia posizione** — ti permette di impostare l'intervallo per l'invio della tua posizione da una volta al secondo (per aumentare la precisione) a una volta ogni 5 minuti (per ridurre il consumo energetico).

**Non in movimento** — ti permette di impostare il tempo (da 1 minuto a 1 ora) dopo il quale la posizione di un contatto è considerata obsoleta. Se una posizione diventa obsoleta, diventa grigia.

**Cronologia delle posizioni** — ti permette di impostare il tempo (da 5 minuti a 24 ore) dopo il quale il contatto con la posizione eliminata verrà nascosto dall'elenco e dalla mappa di OsmAnd.

**Invia posizione come** - ti permette di scegliere una categoria per l'invio di messaggi sulla tua posizione in Telegram (3 tipi di invio): testo, mappa, testo e mappa.

**Tempo di scadenza del buffer** - ti permette di scegliere il tempo di salvataggio dei punti nel buffer.

**Lavoro in background** - ti permette di modificare le impostazioni di ottimizzazione della batteria per stabilizzare la condivisione della posizione.

**Sorgente della posizione** - ti permette di scegliere *Google Play Services* (per impostazione predefinita) o *Android API* per determinare la posizione.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/settingstracker.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)

### Unità e formati {#units--formats}

Ti permette di aggiungere impostazioni per unità e formati. Ora puoi scegliere i valori che preferisci per i messaggi di Telegram quando condividi i dati di posizione.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/22.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/20.jpg)

### Aspetto {#appearance}

Ti permette di mostrare il numero di punti GPS ricevuti da altri contatti, così come quelli inviati da te.

### Privacy {#privacy}

Utilizzo del proxy all'interno di OsmAnd Tracker. Vai su Impostazioni e scrivi i dati del tuo proxy: *Impostazioni → Privacy → Impostazioni proxy*

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1.jpg)

### Impostazioni GPS {#gps-settings}

Impostazioni del punto di posizione. Ad esempio, se rimani in un luogo per un po' di tempo senza muoverti, i dati del tuo punto di posizione non vengono inviati e la tua traccia GPX visualizzerà dati più precisi e accurati.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5-1.jpg)

### Condividi posizione come {#share-location-as}

Se vuoi collegare più dispositivi a un account Telegram, devi cliccare su "Aggiungi dispositivo" e dare un nome al dispositivo.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-ShowGPSPoints.png)

### OsmAnd Connect {#osmand-connect}

Questa impostazione ti permette di selezionare la versione di OsmAnd in cui i tuoi contatti con la loro posizione appariranno sulla mappa.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Settings-2.png)

### Account {#account}

Utilizza questa impostazione per verificare quale account Telegram stai utilizzando attualmente. Inoltre, in questo menu puoi uscire dall'applicazione OsmAnd Telegram semplicemente toccando il pulsante *Esci*.

### Buffer Logcat {#logcat-buffer}

Qui puoi controllare e condividere i log dettagliati dell'app.

## Schermata La mia posizione {#my-location-screen}

In questa schermata puoi vedere i tuoi contatti Telegram. Puoi sceglierne uno o più, impostare le opzioni di condivisione e iniziare a condividere la tua posizione.

Dopo il primo avvio, vedrai un elenco di contatti suggeriti. Questi sono i cinque contatti più recenti con cui hai condiviso la tua posizione. Puoi cliccare una sola volta per continuare a condividere la tua posizione con questi contatti.

Tempo di condivisione è l'ultimo tempo di condivisione che hai selezionato per il contatto.

Quando inizi a condividere, vedrai un elenco di contatti suggeriti e un pulsante *Torna a OsmAnd* nella schermata *La mia posizione*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/8.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/9.jpg)

## Schermata In diretta ora {#live-now-screen}

In questo menu puoi vedere tutti i contatti che stanno condividendo una posizione con te. Tocca il contatto e guardalo sulla **mappa di OsmAnd**.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Live.png)

### Indicatore attivo sulla mappa di OsmAnd {#active-marker-on-the-osmand-map}

Ti permette di tracciare la distanza, la velocità e l'angolo di movimento dei tuoi contatti sulla mappa di OsmAnd e nel testo di Telegram. Puoi capire dove e come si sta muovendo il tuo contatto.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6-1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7-1.jpg)

## Schermata Cronologia {#timeline-screen}

Questa è la terza scheda nell'applicazione. Qui puoi selezionare un giorno per visualizzare la cronologia delle posizioni condivise con te. Selezionando un giorno vengono visualizzati i contatti che hanno mostrato la loro posizione quel giorno.

Il monitoraggio ti permette di raccogliere informazioni in background quando i tuoi contatti le condividono. Per fare ciò, devi abilitarlo.

Per visualizzare tutte le informazioni sulla posizione di un contatto, tocca la sua icona o apri una traccia GPX in OsmAnd ed esplora la traccia in modo più dettagliato ([leggi di più qui](./trip-recording.md)). Puoi anche condividere la traccia GPX per un periodo selezionato: inviandola a un'e-mail o a qualsiasi instant messenger.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4-1-Timeline.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/Timeline_2.png)

Puoi vedere il movimento online dei tuoi contatti sulla mappa di OsmAnd utilizzando la traccia GPS online. Per fare ciò, devi abilitare *In diretta* al contatto nella *Cronologia*. Se ci sono molti contatti in comune al momento, l'app OsmAnd seleziona il colore delle tracce in modo casuale.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/1.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/2.jpg)

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/3.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/4.jpg)

Quando tocchi "Mostra in OsmAnd" o sulla mini-mappa, puoi selezionare impostazioni speciali per il tracciamento GPX del tuo contatto nell'app OsmAnd e vedere il suo movimento in tempo reale sulla mappa di OsmAnd.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/5.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/6.jpg)

Se non ci sono dati raccolti nella data selezionata, apparirà una notifica speciale sullo schermo. Puoi spostarti alla data più vicina toccando la freccia avanti o indietro.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/7.jpg)

## Widget Tracker {#tracker-widget}

Per visualizzare il [widget](../widgets/info-widgets.md#tracker-widget-android), devi prima abilitare il plugin OsmAnd Tracker. Dopodiché, un widget con la parola *Avvia* apparirà nell'angolo in alto a destra dello schermo di OsmAnd.

Per disabilitarlo, puoi andare su *Menu principale → Configura schermo*.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_1.png) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/tracker_widget_2.png)

Il widget ha diverse visualizzazioni.

1. La prima è *Avvia*.
Quando tocchi *Avvia*, vai su [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram), dove puoi selezionare qualsiasi contatto o toccare Contatti suggeriti.
2. Secondo, quando inizi a condividere la tua posizione, il widget cambia aspetto.

- L'icona emoji verde *OK* significa che la tua posizione è ora condivisa. Tutto è normale, la condivisione funziona senza errori.
- Un'icona emoji arancione *OK* significa che la tua posizione non può essere inviata. C'è un problema con la connessione Internet o GPS.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/11.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/13.jpg)

- Se non hai una connessione Internet per molto tempo, i tuoi punti di posizione vengono salvati nel buffer di OsmAnd Tracker. Il widget in OsmAnd cambia aspetto in un'icona emoji grigia. Mostra il tempo di riempimento del buffer, per quanto tempo il buffer salva già i tuoi punti di posizione.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/15.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/16.jpg)

3. Non appena la connessione Internet viene ripristinata, inizierà a caricare i punti di posizione dal buffer. Il widget di OsmAnd cambierà aspetto e il numero di minuti in esso inizierà a diminuire. Quando tutti i punti di posizione dal buffer saranno caricati su Telegram, apparirà l'icona emoji *OK* sul widget.

![OsmAnd Tracker](@site/static/img/plugins/online-tracker/18.jpg) ![OsmAnd Tracker](@site/static/img/plugins/online-tracker/23.jpg)

4. Se vedi il widget come icona emoji *OK*, significa che tutto va bene. Il processo di scambio sta procedendo senza problemi.

## Assistente OsmAnd {#osmand-assistant}

L'app OsmAnd ha il suo bot Telegram chiamato "OsmAnd Assistant", che ti aiuta a integrare OsmAnd Telegram con tracker o API di terze parti. Potrai condividere non solo la tua posizione, ma anche la posizione della tua bici o di un gruppo di persone che gareggiano disponibili tramite l'API. OsmAnd Telegram ti darà una bella presentazione delle tue posizioni sulla mappa in OsmAnd stesso.

Condividi con noi cosa ne pensi di questa nuova app su [Twitter](https://twitter.com/osmandapp) e altri canali social.

Per visualizzare le posizioni GPS dei contatti sulla mappa, è necessaria la versione più recente di [OsmAnd o OsmAnd+](./../purchases/android.md). La versione minima supportata di OsmAnd o OsmAnd+ è la 3.0.4.

> *Ultimo aggiornamento: luglio 2024*