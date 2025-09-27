---
source-hash: 7576748af3fca36da2e3db2fe22a613cead6ff3a3cb42002f475c4e8a00cc8f1
sidebar_position: 15
title:  Registrazione tracce
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Il **plugin Registrazione tracce** è uno strumento essenziale per catturare i vostri percorsi, movimenti e allenamenti. Questa funzione non solo vi permette di registrare i vostri viaggi, ma consente anche di riutilizzare, modificare, aggiornare e condividere facilmente le vostre tracce con altri.

Con il *plugin Registrazione tracce*, potete creare nuove tracce, visualizzare quelle registrate direttamente sulla mappa e gestire i record esistenti. Offre informazioni preziose sui vostri viaggi, come velocità, dislivelli, dettagli del terreno e dati da sensori esterni. Il plugin registra il vostro percorso, consentendo un'analisi dettagliata e la condivisione dopo il viaggio.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Traccia registrata su Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Traccia registrata su iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per iniziare a registrare le tracce, è necessario effettuare le seguenti impostazioni:

1. [Abilitare](../plugins/index.md#enable--disable) il **plugin Registrazione tracce**.
2. [Configurare](#recording-settings) le **impostazioni di registrazione** per il [profilo](../personal/profiles.md) richiesto.
3. [Aggiungere](#widgets) i **widget di Registrazione tracce** allo schermo (opzionale).
4. [Gestire](../map/tracks/appearance.md) le tracce sulla mappa (opzionale).


## Registrazione nuova traccia {#new-track-recording}

![Widget Distanza/Avvio-Stop su iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget Distanza/Avvio-Stop su Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Con il plugin Registrazione tracce in OsmAnd, potete facilmente iniziare a registrare la vostra traccia utilizzando una varietà di comode opzioni. Ecco come potete iniziare il vostro viaggio:

- [Widget Distanza/Avvio-Stop](#distance-start-stop) — Utilizzare per attivare la registrazione.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Toccare il pulsante nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> principale*.

- Pulsanti [Azione rapida](../widgets/quick-action.md#add-and-delete-actions) — Per avviare la registrazione di un viaggio, andare su *Menu → Configura schermo → Pulsanti personalizzati → Azione rapida → Aggiungi azione → Miei luoghi* e scegliere [Avvia / Pausa: Registrazione tracce](../widgets/quick-action.md#my-places).

- *Solo Android*:
    - Andare su *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> principale*.

    - [Notifica di sistema](#notifications) — Utilizzare nell'area di notifica del dispositivo.

    - [Launcher dell'applicazione](#launcher-android) — Utilizzare per avviare la registrazione.

**Raccomandazioni:**

- [Posizione precisa](../start-with/first-steps.md#permission-to-access-the-location) — Per una registrazione accurata della traccia, assicurarsi che OsmAnd abbia questa autorizzazione.

- [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — I **dispositivi iOS** possono talvolta **sospendere o interrompere temporaneamente le app** in esecuzione in background, il che potrebbe interrompere la registrazione della traccia.

- **Fonte di localizzazione** (*Solo Android*) — Regolare le impostazioni in OsmAnd per scegliere il fornitore GPS più adatto per registrazioni accurate. [Per saperne di più qui](../personal/global-settings.md#location-source).


### Finestra di dialogo Avvio {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

La finestra di dialogo di avvio si apre se l'opzione **<Translate android="true" ids="show_start_dialog"/>** è abilitata nella sezione delle impostazioni della finestra di dialogo di avvio.

![Avvio registrazione su Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

La finestra di dialogo di avvio si apre se l'opzione **<Translate ios="true" ids="track_interval_remember"/>** non è attivata.

![Avvio registrazione su iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervallo di registrazione** (*Android/iOS*). Questa impostazione controlla la frequenza con cui l'app richiede i dati dal sensore GPS per segnare nuovi punti sulla traccia. La regolazione dell'intervallo consente di bilanciare il dettaglio della traccia e il consumo della batteria. Un intervallo più breve si tradurrà in tracce più dettagliate ma con un consumo di batteria maggiore, mentre un intervallo più lungo conserva la batteria ma riduce la precisione della traccia.

- **Icona linea** (*Android*). Toccare questa icona per accedere alle opzioni di [Aspetto della traccia](../map/tracks/appearance.md). Qui è possibile personalizzare l'aspetto della traccia sulla mappa, inclusi colore, spessore e stile della linea. Una volta salvata una traccia con un aspetto personalizzato, queste impostazioni verranno mantenute per le registrazioni future, garantendo coerenza ogni volta che si visualizza o si riattiva la traccia.

- **Menu Impostazioni** (*Android*). Accedere a questo menu per perfezionare le preferenze di registrazione. Per una panoramica dettagliata, fare riferimento alla sezione [Impostazioni di registrazione](#recording-settings).

- **Ricorda la mia scelta** (*iOS*). Quando abilitata, la registrazione della traccia si avvia automaticamente, senza richiedere impostazioni aggiuntive o conferme. Se si desidera modificare le impostazioni di registrazione prima di avviare una nuova traccia, riavviare il plugin Registrazione tracce per far riapparire il menu delle impostazioni.


### Launcher (Android) {#launcher-android}

![Menu contestuale dell'icona](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icona Avvia Registrazione](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

È possibile avviare rapidamente una nuova registrazione di traccia direttamente dallo schermo del dispositivo Android utilizzando il menu contestuale dell'icona dell'app OsmAnd.

- **Toccare a lungo** l'icona dell'app OsmAnd per aprire il menu contestuale, dove è possibile trovare l'opzione **Avvia registrazione**.

- Toccare l'opzione **Avvia registrazione** per avviare l'app OsmAnd con le [impostazioni di registrazione della traccia](#overview-screen) visualizzate sullo schermo.

- **Toccare a lungo** l'opzione **Avvia registrazione** nel menu contestuale dell'icona dell'app, per aggiungere una scorciatoia per un accesso più rapido.

Mentre la registrazione della traccia è attiva, un badge di notifica apparirà sull'angolo dell'icona dell'app OsmAnd, indicando che la registrazione è in corso. Per ulteriori dettagli sulla gestione di questa notifica, vedere la sezione [Notifiche](#notifications).


## Registrazione traccia corrente {#current-track-recording}

Per *Interrompi / Salva / Pausa*:

- Per **Interrompere** la registrazione, toccare il pulsante corrispondente nella finestra di dialogo del [widget Distanza/Avvio-Stop](#distance-start-stop).

- (*Solo Android*) Per **Interrompere** la registrazione, toccare la voce del menu principale *Registrazione tracce*.

- Per **Interrompere** o **Salvare** una traccia in registrazione, andare su *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*scheda <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) e toccare il pulsante appropriato nel campo *Traccia attualmente in registrazione*.

- Per **Salvare, Mettere in pausa, Avviare** un nuovo segmento o **Terminare** la registrazione, utilizzare i pulsanti [Azione rapida](../widgets/quick-action.md#add-and-delete-actions). Andare su *Menu → Configura schermo → Pulsanti personalizzati → Azione rapida → Aggiungi azione → [Miei luoghi](../widgets/quick-action.md#my-places)* e aggiungere uno o più pulsanti di azione rapida.

- (*Solo Android*) Per **Mettere in pausa** o **Salvare** una traccia in registrazione, utilizzare la [notifica](#notifications) di sistema nell'area di notifica del dispositivo.<br/><br/> ![interrompi-salva-pausa](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Schermata di panoramica {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![panoramica](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png)  ![panoramica](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Termina registrazione su iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Termina registrazione su iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd, le versioni **Android** e **iOS** gestiscono l'interfaccia di registrazione della traccia in modo leggermente diverso. Su Android, troverete un menu dedicato per il contesto *Registrazione traccia*, mentre su iOS, questo è integrato nel menu contestuale *Traccia attualmente in registrazione*.

Mentre si registra una traccia, vengono generati grafici dinamici che forniscono dati visivi in tempo reale sul vostro viaggio. Questi grafici possono riflettere informazioni per l'intero percorso o solo per un segmento selezionato, a seconda del livello di zoom.
Ecco cosa potete trovare su di essi:

- **Valori dei dati**. Sul lato destro del grafico ci sono i valori ***massimo***, ***minimo*** e ***medio*** per la sezione visibile della traccia.

- **Grafico per informazioni chiave**:
    - ***Android***. Per l'***asse Y*** del grafico, è possibile selezionare *fino a due parametri* tra tutti i dati disponibili come *Altitudine*, *Pendenza*, *Velocità* e [informazioni da sensori esterni](../plugins/external-sensors.md#trip-recording). Per l'***asse X***, selezionare la visualizzazione di *Distanza*, *Tempo* o *Ora del giorno*.
    - ***iOS***. I parametri sono organizzati nelle schede *Panoramica*, *Altitudine* e *Velocità* con i valori appropriati per l'asse Y e *Distanza* per l'asse X.

- **Statistiche**. Per Android, visualizza un insieme costante di dati statistici indipendenti dalle impostazioni del grafico: *Distanza*, *Intervallo di tempo*, *Salita*, *Discesa*, *Velocità media*. Per iOS, ogni scheda, Panoramica, Altitudine e Velocità, ha un diverso set di dati.

Per una visualizzazione più dettagliata, è possibile **scalare il grafico**:

- Utilizzare il [gesto a due dita](../map/interact-with-map.md#gestures) per ingrandire o ridurre e concentrarsi su intervalli specifici.
- Toccare un punto qualsiasi del grafico per visualizzare un marcatore che mostra i valori esatti per quella posizione.

| |  
| ------------- |
|**Scheda Panoramica** iOS (per Android, i parametri dell'asse Y sono *Altitudine*, *Velocità* e il parametro dell'asse X è *Distanza*). Questa scheda mostra un grafico che illustra le variazioni di velocità e altitudine lungo la traccia, e i dettagli chiave della traccia. Dati della traccia per iOS: *Distanza*, *Intervallo di tempo*, *Ora di inizio* e *Ora di fine*. Potete vedere come questo viene visualizzato nelle versioni Android e iOS qui sotto. |
| ![dati](@site/static/img/plugins/trip-recording/graph_overview_andr.png)  ![dati](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Scheda Altitudine** iOS (per Android, i parametri dell'asse Y sono *Altitudine*, *Pendenza* e il parametro dell'asse X è *Distanza*). Questa scheda si concentra sul profilo altimetrico della traccia registrata, fornendo informazioni sui cambiamenti di altitudine e sulle pendenze del terreno. Le metriche chiave per iOS includono: *Altitudine media*, *Intervallo di altitudine*, *Salita* e *Discesa*. I grafici sottostanti illustrano le differenze tra le interfacce Android e iOS. |
| ![dati](@site/static/img/plugins/trip-recording/graph_altitude_andr.png)  ![dati](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Scheda Velocità** iOS (per Android, il parametro dell'asse Y è *Velocità* e il parametro dell'asse X è *Distanza*). La scheda Velocità evidenzia i dati relativi alla velocità lungo tutta la traccia. Per iOS, include informazioni come *Velocità media*, *Velocità massima*, *Tempo in movimento* e *Distanza corretta*. Gli screenshot sottostanti mostrano come questi dati vengono visualizzati su entrambe le piattaforme. |
| ![dati](@site/static/img/plugins/trip-recording/graph_speed_andr.png)  ![dati](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Per **Android**, è possibile creare più combinazioni di dati disponibili per l'asse Y e valori per l'asse X. |
| ![dati](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Per maggiori dettagli, potete esplorare il [**Menu contestuale delle tracce**](../map/tracks/track-context-menu.md#options), dove potete gestire varie opzioni relative alle tracce come rinominare, eliminare o aggiungere waypoint. Per regolare l'aspetto delle tracce sulla mappa, visitate la sezione [**Aspetto**](../map/tracks/appearance.md). Se volete aggiungere waypoint specifici alla vostra traccia corrente, consultate la guida [**Punti della traccia**](../map/tracks/track-context-menu.md#points--waypoints). Per qualsiasi modifica, come rinominare una traccia, utilizzate la scheda [**Opzioni**](https://osmand.net/docs/user/map/track-context-menu#options) all'interno del Menu contestuale delle tracce.
:::


### Mostra sulla mappa {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![mostra_tr_sulla_mappa_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configura tracce mappa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![mostra_tr_sulla_mappa_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configura tracce mappa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gestite quali tracce sono visibili sulla vostra mappa utilizzando una delle due opzioni. Andate su *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*scheda <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) e abilitate l'opzione *Mostra sulla mappa* per qualsiasi traccia che volete visualizzare o nascondere. In alternativa, potete andare su *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) per regolare rapidamente la visibilità di tutte le vostre tracce in un unico posto.


### File GPX registrato {#recorded-gpx-file}

OsmAnd cattura il vostro viaggio in un [file GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) strutturato, utilizzando una gerarchia di *file > traccia > segmenti > punti*. Ecco come funziona:

- I **Punti** rappresentano momenti individuali del vostro percorso registrato, ognuno contrassegnato da attributi come coordinate, velocità, altitudine e direzione.
- Questi punti sono raggruppati per formare **tracce**, che rappresentano l'intero percorso.
- Se c'è un'interruzione nella registrazione (ad esempio, se la registrazione è stata messa in pausa), il punto successivo dopo l'interruzione inizia un nuovo **segmento**, segnando la separazione nel vostro viaggio.
- Sia i **segmenti** che le **tracce** sono rappresentati visivamente con le icone *Inizio* e *Fine* sulla mappa.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parametro | Descrizione |
|-----------------|----------------|
| `trkpt` | **Punto di traccia** rappresenta una specifica posizione geografica rilevata durante la vostra attività. Ogni punto di traccia include coordinate di latitudine e longitudine, formando la base del vostro percorso registrato. |
| `trkseg` | **Segmento di traccia** raggruppa punti di traccia consecutivi, separati da interruzioni nell'attività, come pause o fermate. Questo aiuta a distinguere il movimento continuo dai periodi di inattività all'interno di una singola registrazione. |
| `lat` | **Latitudine** indica la posizione nord-sud di un punto sulla superficie terrestre. È una delle due coordinate utilizzate per individuare la vostra posizione esatta. |
| `lon` | **Longitudine** specifica la posizione est-ovest, completando la latitudine, per localizzare accuratamente un punto sul globo. Insieme, latitudine e longitudine definiscono la vostra posizione geografica precisa. |
| `ele` | **Elevazione** misura l'altezza di un punto di traccia sopra il livello del mare, registrata in metri. Questo può essere utile per tracciare i cambiamenti di altitudine durante le vostre attività, come escursioni a piedi o in bicicletta. |
| `time` | **Timestamp** registra la data e l'ora esatte in cui un punto di traccia viene registrato. Questo vi permette di tracciare la durata e la tempistica della vostra attività con precisione. |
| `hdop` | **Diluizione orizzontale della precisione (HDOP)** è una misura della precisione del GPS, che riflette l'errore potenziale nella posizione dovuto alla posizione dei satelliti. A differenza dell'HDOP standard, le tracce GPX di OsmAnd utilizzano questo valore per rappresentare la precisione orizzontale in metri. Si prega di notare che questa implementazione differisce dagli standard HDOP tipici. [Per saperne di più](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Velocità** registra la vostra velocità di movimento in metri al secondo. Fornisce informazioni sul vostro ritmo durante i vari segmenti della vostra attività. |
| `heading` | **Direzione** indica la direzione in cui è puntata la parte anteriore del vostro veicolo o dispositivo, misurata in gradi. È distinta dalla rotta, che è il percorso effettivo del movimento. Le differenze possono verificarsi a causa di fattori esterni come vento, correnti o condizioni stradali. [Maggiori informazioni sulla direzione](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **Velocità** da [sensori esterni](../plugins/external-sensors.md) cattura dati da sensori collegati, fornendo informazioni sulla velocità più precise, particolarmente utili quando si va in bicicletta. Per maggiori dettagli, fare riferimento alla [documentazione del formato file GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **Cadenza** misura il numero di rivoluzioni dei pedali al minuto, registrato utilizzando [sensori esterni](../plugins/external-sensors.md). Questo è particolarmente utile per i ciclisti che mirano a monitorare e ottimizzare la loro efficienza di pedalata. [Leggi di più](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **Potenza della bicicletta** quantifica la potenza generata durante la pedalata, catturata da [sensori esterni](../plugins/external-sensors.md). È una metrica essenziale per i ciclisti seri che vogliono valutare le loro prestazioni. [Per saperne di più](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **Temperatura dell'aria** registra la temperatura ambiente durante la vostra attività, misurata utilizzando [sensori esterni](../plugins/external-sensors.md). Notare che la temperatura dell'acqua non è supportata. [Dettagli qui](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **Frequenza cardiaca** monitora i battiti cardiaci al minuto, utilizzando dati da [sensori](../plugins/external-sensors.md) collegati. Questa informazione può essere vitale per tracciare le vostre prestazioni cardiovascolari durante gli allenamenti. [Scopri di più](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Impostazioni di registrazione {#recording-settings}

Prima di iniziare a tracciare i vostri viaggi, è necessario configurare correttamente il **plugin Registrazione tracce** per prestazioni ottimali.

- **Impostazioni specifiche del profilo**. Ogni profilo nell'app può avere le proprie impostazioni uniche di Registrazione tracce. Ciò consente di personalizzare con precisione il comportamento della registrazione in base alla propria attività, come la guida, il ciclismo o anche la camminata nordica, che potrebbero richiedere configurazioni diverse.

- **Personalizzare i parametri di registrazione**. Le impostazioni di registrazione possono variare a seconda di come ci si muove. Ad esempio, la guida su lunghe distanze potrebbe richiedere una frequenza di registrazione più bassa, mentre l'escursionismo o la camminata potrebbero beneficiare di aggiornamenti più frequenti.

- **Dati di posizione precisi**. Per garantire che le registrazioni siano fluide e utilizzabili per usi futuri, è possibile personalizzare il modo in cui si catturano i punti di localizzazione. Ciò potrebbe includere la regolazione della frequenza di registrazione, il formato dei dati (come il numero di punti per unità di distanza) o la spaziatura tra i punti registrati.

- **Impostazioni globali**. Le impostazioni di Registrazione tracce sono configurate per profilo, che è possibile gestire nelle [impostazioni](../personal/global-settings.md) globali dell'app. Prima di personalizzare il plugin Registrazione tracce, selezionare il profilo che si desidera configurare dalla sezione [profili](../personal/profiles.md). Da lì, navigare alle impostazioni del profilo per accedere alle opzioni di Registrazione tracce.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Configurazione Registrazione tracce su Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Configurazione Registrazione tracce su Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurazione Registrazione tracce su iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Configurazione Registrazione tracce su iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione |
|---|---|
| **Finestra di dialogo ottimizzazione batteria** (*Android*) | Apre le [impostazioni di ottimizzazione della batteria di Android](#battery-optimization). Toccare *Non chiedere più* se non si desidera essere nuovamente avvisati. |
| **Mostra finestra di dialogo avvio** (*Android*) | Abilita una finestra di dialogo in cui è possibile configurare le impostazioni prima di avviare la registrazione. Se disabilitata, la registrazione si avvia automaticamente. |
| **Registra automaticamente la traccia durante la navigazione** | Registra automaticamente la traccia durante la navigazione e la salva nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*Nota*: La registrazione della traccia consuma batteria e continua a funzionare in background, anche se lo schermo è spento. |
| **Intervallo di registrazione generale** | Definisce la frequenza con cui vengono registrati i punti di localizzazione. Il valore predefinito è 5 secondi. È abilitato con il *widget Registrazione tracce*. |
| **Spostamento minimo** | Un filtro per evitare di registrare punti quando c'è poco o nessun movimento. Aiuta a ridurre il rumore dei dati.<ul><li>*Effetti collaterali*: I periodi di riposo potrebbero non essere registrati e i piccoli movimenti potrebbero essere ignorati. Questo può ridurre i dati di post-elaborazione ma può anche impedire la registrazione di errori GPS.</li><li>*Raccomandazione*: Impostare lo spostamento a 5 metri se si desiderano meno dettagli minori nelle registrazioni.</li></ul> |
| **Precisione minima** | Filtra i punti di localizzazione al di sotto di una soglia minima di indicazione di precisione, come riportato dal dispositivo.<ul><li>*Effetti collaterali*: I punti in aree con segnale debole (sotto ponti, alberi, tra edifici o in alcune condizioni meteorologiche) potrebbero mancare.</li><li>*Raccomandazione*: In caso di dubbio, potrebbe essere meglio disabilitare questo filtro per evitare di perdere dati.</li></ul><details><summary>*Nota*</summary>Supponiamo che il GPS sia stato spento poco prima della registrazione. In tal caso, il primo punto misurato potrebbe avere una precisione ridotta, quindi è meglio attendere un po' prima di registrare il punto o registrare il migliore di 3 punti consecutivi.</details> |
| **Velocità minima** | Imposta una soglia per ignorare i punti registrati al di sotto di una certa velocità.<ul><li>*Effetti collaterali*: Le sezioni in cui la velocità scende al di sotto di una soglia specificata non verranno registrate.</li><li>*Raccomandazione*: Utilizzare invece il filtro *Spostamento minimo*, poiché può dare risultati migliori senza perdere dati importanti.</li></ul><details><summary>*Nota*</summary>Provate prima a utilizzare il rilevamento del movimento tramite il filtro di spostamento minimo di registrazione (B), potrebbe produrre risultati migliori e perderete meno dati. Se le vostre tracce rimangono rumorose a basse velocità, provate valori non nulli qui. Si prega di notare che alcune misurazioni potrebbero non riportare alcun valore di velocità (alcuni metodi basati sulla rete), nel qual caso non registrereste nulla.<br/><br/>Controllo Velocità > 0: La maggior parte dei chipset GPS riporta un valore di velocità solo se l'algoritmo determina che siete in movimento, e nessuno se non lo siete. Quindi, utilizzare l'impostazione > 0 in questo filtro in un certo senso utilizza il rilevamento del movimento del chipset GPS. Ma anche se non filtrato qui al momento della registrazione, utilizziamo ancora questa funzione nella nostra analisi GPX per determinare la Distanza corretta, cioè il valore visualizzato in quel campo è la distanza registrata mentre si è in movimento.</details> |
| **Divisione automatica delle registrazioni dopo un'interruzione** | Divide automaticamente le tracce in base a intervalli di tempo tra i punti registrati. <ul><li>Un nuovo segmento inizia dopo un'interruzione di 6 minuti.</li><li>Una nuova traccia inizia dopo un'interruzione di 2 ore.</li><li>Un nuovo file inizia quando cambia la data.</li><li>Le interruzioni possono derivare dalla perdita del segnale GPS, dalla bassa velocità o dalle impostazioni di configurazione.</li></ul><details><summary>*Nota*</summary>Un'interruzione viene identificata quando non vengono registrati punti. Ciò può accadere perché la posizione non viene rilevata o perché viene rilevata ma non registrata. Diversi fattori possono causare questo, inclusi segnali GPS deboli a causa di cattive condizioni meteorologiche, o la velocità di movimento che scende al di sotto della soglia configurata. In tali casi, anche se il dispositivo può rilevare la posizione, non la registra.<br/><br/>Queste interruzioni nei dati registrati possono attivare la creazione di un nuovo segmento all'interno della stessa traccia, una nuova traccia nello stesso file o un nuovo file GPX all'interno di una singola registrazione. Questo viene gestito all'interno di una singola sessione di avvio/arresto della registrazione.</details> |
| **Impedisci registrazione autonoma** (*Android*) | Mette in pausa la registrazione della traccia quando l'app OsmAnd viene chiusa (tramite *app recenti*). L'indicazione di background non viene visualizzata nel pannello di notifica di Android. |
| **Includi direzione** | Registra la direzione (direzione del movimento) per ogni punto nel file GPX. La direzione è la direzione in cui è rivolto il dispositivo, che può differire dalla direzione del movimento a causa di fattori esterni come vento o slittamento. |
| **Attività** | L'opzione consente di preselezionare un [tipo di attività](../map/tracks/track-context-menu.md#ttrack-activity-type) per un profilo, che viene quindi applicato automaticamente a tutte le tracce registrate. |
| **Sensori esterni** <br/> *Necessario plugin abilitato* | I dati da [sensori esterni](../plugins/external-sensors.md#trip-recording) come *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, o *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* vengono registrati nel file GPX. I dati di *Distanza* non vengono registrati su Android o iOS. Visualizzato solo quando il [plugin Sensori esterni](../plugins/external-sensors.md) è abilitato. |
| **Metriche veicolo** <br/> *Necessario plugin abilitato* | I dati dallo [scanner OBD-II](../plugins/vehicle-metrics.md#trip-recording) vengono registrati nel file GPX. Visualizzato solo quando il [plugin Metriche veicolo](../plugins/vehicle-metrics.md) è abilitato.<br />*Nota*: È possibile aggiungere quali metriche registrare nel file GPX dalla lista: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Cartella di archiviazione tracce** (*Android*) | Definisce dove nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* vengono archiviate le tracce registrate. Le opzioni includono l'archiviazione di tutte le tracce nella cartella Rec o l'organizzazione per mese, come Rec/aaaa-mm. |
| **Notifica** | Controlla la visualizzazione di una notifica di sistema di [registrazione tracce](#notifications) nell'area di notifica del dispositivo che consente di avviare la registrazione dei viaggi. |
| **Tracciamento online** (*Android*) | Consente il tracciamento in tempo reale della vostra posizione inviando i punti registrati a un URL specificato. L'intervallo di tracciamento determina la frequenza con cui i punti vengono inviati e il buffer di tempo memorizza i punti quando non c'è connessione a Internet.<details><summary>*Nota*</summary>Se questa opzione è abilitata e la registrazione della traccia è in corso, il widget Distanza/Avvio-Stop (REC) diventa **verde** invece di **rosso**, indicando che ogni punto registrato viene trasmesso a un URL specificato. Il campo **Indirizzo web** consente di inserire l'URL utilizzando il seguente formato di parametri:<ul><li>`lat={0}`: Latitudine</li><li>`lon={1}`: Longitudine</li><li>`timestamp={2}`: Timestamp (ora Unix)</li><li>`hdop={3}`: Diluizione orizzontale della precisione</li><li>`altitude={4}`: Altitudine</li><li>`speed={5}`: Velocità</li><li>`bearing={6}`: Direzione (direzione del movimento)</li><li>`eta={7}`: Orario di arrivo previsto (ora Unix)</li><li>`etfa={8}`: Orario previsto al primo punto intermedio o al punto di arrivo (ora Unix)</li><li>`eda={9}`: Distanza stimata all'arrivo o a un marcatore (in metri)</li><li>`edfa={10}`: Distanza stimata al primo punto intermedio o al punto di arrivo (in metri)</li></ul>È possibile impostare l'**Intervallo di tracciamento** per specificare la frequenza con cui i punti di localizzazione vengono inviati, con opzioni che vanno da 0 secondi a 5 minuti. Inoltre, il parametro **Buffer di tempo** determina per quanto tempo i punti di localizzazione vengono memorizzati se non c'è connessione a Internet, garantendo che i dati vengano salvati e trasmessi quando la connessione viene ripristinata.</details> |
| **Tracce** | Un riferimento rapido alla cartella in cui vengono salvate le tracce nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Ripristina impostazioni predefinite del plugin** | Ripristina tutte le impostazioni di registrazione delle tracce per il profilo corrente ai valori predefiniti. |
| **Copia da un altro profilo** (*Android*) | Copia le impostazioni di registrazione delle tracce da un profilo a un altro. |


### Ottimizzazione della batteria {#battery-optimization}

<InfoAndroidOnly />

![Traccia sulla mappa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Traccia sulla mappa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

Questa funzione consente di gestire le impostazioni di ottimizzazione della batteria per OsmAnd per garantire un accesso ininterrotto alla propria posizione, anche quando l'app è in esecuzione in background durante la navigazione o la registrazione di una traccia.

- **Impostazioni di ottimizzazione della batteria**. Apre le impostazioni di Android, dove è possibile modificare le preferenze di risparmio energetico per OsmAnd. [Maggiori dettagli qui](../troubleshooting/general.md#optimizing-battery-consumption).
- **Non chiedere più**. Chiude permanentemente la finestra di dialogo, in modo che non appaia più.
- **Chiudi**. Chiude temporaneamente la finestra di dialogo, che apparirà di nuovo la prossima volta che l'ottimizzazione della batteria richiederà attenzione.


### Notifiche {#notifications}

![Notifica Registrazione Tracce](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

Se [Notifica](#recording-settings) è abilitata nelle impostazioni del plugin, le notifiche di registrazione delle tracce verranno sempre visualizzate nell'area di notifica del sistema quando la registrazione è attiva. Questa notifica garantisce che il processo di registrazione non venga interrotto dal sistema e non può essere disabilitata durante una registrazione attiva.

- L'area di notifica si apre scorrendo verso il basso dalla parte superiore dello schermo e si chiude scorrendo verso l'alto. Questi messaggi notificano azioni come l'avvio/arresto della registrazione delle tracce, specialmente quando la registrazione automatica è abilitata durante la navigazione.
- Le notifiche rimangono visibili indipendentemente dal fatto che l'app sia in esecuzione in primo piano, in background o sia chiusa. È possibile cancellare manualmente la vecchia notifica se non è più necessaria, ma ciò non interromperà la registrazione in corso.

**Nota importante**.

Questo comportamento è richiesto da Android per qualsiasi servizio in primo piano, come la registrazione delle tracce, affinché rimanga visibile all'utente.

- Se la notifica viene rimossa, Android interromperà automaticamente la registrazione. È possibile utilizzare l'impostazione [Impedisci registrazione autonoma](#recording-settings).
- L'impostazione **Notifica** in OsmAnd influisce sulla visualizzazione di una scorciatoia nella barra delle notifiche per avviare una registrazione quando nessuna registrazione è attiva. **Non** controlla la visibilità della notifica durante una registrazione attiva.

**Opzioni aggiuntive di Android**.

![Notifica Registrazione Tracce](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Impostazioni Android → Notifiche e barra di stato → Notifiche sulla schermata di blocco***, è possibile rimuovere OsmAnd dall'elenco delle app per evitare che le notifiche appaiano sulla schermata di blocco, evitando l'attivazione accidentale dello schermo. Ciò non influirà sulla registrazione della traccia. Le notifiche appariranno comunque nell'area di notifica normale.
- **OsmAnd** potrebbe anche apparire sotto ***Privacy → Autorizzazioni speciali → Attiva schermo***. Se si desidera impedire l'accensione dello schermo quando appare una notifica, provare a rimuovere OsmAnd da questo elenco.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**Notifica badge**.

![Notifica Badge Registrazione Tracce](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Il badge dell'icona dell'app appare accanto all'icona di OsmAnd quando la registrazione della traccia è attiva.

- Questa icona scompare quando la registrazione della traccia è completata. Per verificare se una registrazione è attiva, è possibile andare su *Menu → Miei luoghi → scheda Tracce* o toccare il widget per gestire la registrazione.
- Se non c'è nessuna registrazione in corso e il badge è ancora visualizzato, potrebbe significare che un messaggio da OsmAnd è rimasto nel pannello di notifica del dispositivo.
- Per disabilitare i badge nelle impostazioni di Android, andare su *Impostazioni dispositivo → App → OsmAnd → Notifiche* e disabilitare l'opzione di visualizzazione del badge per questa app.


## Widget {#widgets}

I widget consentono di visualizzare informazioni chiave sulla registrazione della traccia direttamente sullo schermo, come *Distanza*, *Durata*, *Salita* e *Discesa*.

Per iniziare a utilizzare i *widget di Registrazione tracce*, è necessario effettuare tutte le seguenti impostazioni:

1. [Abilitare il plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurare le impostazioni di registrazione delle tracce per il [profilo](../personal/profiles.md) richiesto.
3. Aggiungere i **widget di Registrazione tracce** necessari allo schermo. Notare che questa configurazione è **specifica per ogni profilo**.


### Aggiungi widget di registrazione {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Andare su: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_widget_monitoring"/>*

![Aggiunta del widget Distanza/Avvio-Stop su Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Andare su: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_widget_monitoring"/>*  

![Aggiunta del widget Distanza/Avvio-Stop su iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Il [widget Registrazione tracce](../widgets/info-widgets.md#trip-recording-widgets) fornisce un modo semplice per monitorare lo stato della registrazione e accedere rapidamente alle impostazioni e ai dettagli della registrazione. Questo widget viene aggiunto automaticamente allo schermo quando il plugin Registrazione tracce è abilitato.

Per personalizzare l'interfaccia, è possibile aggiungere o rimuovere il widget Registrazione tracce e [altri widget](../plugins/trip-recording#duration-uphill-downhill) tramite il menu Configura schermo.


### Distanza (Avvio-Stop) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Widget Registrazione tracce](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Termina registrazione su Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget Registrazione tracce](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget Registrazione tracce](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)  

</TabItem>

</Tabs>  

Quando i widget vengono visualizzati sulla mappa, toccandone uno qualsiasi si rivelano dettagli aggiuntivi sulla traccia e si consente l'interazione con la registrazione.
Il widget *Distanza* visualizza la distanza totale del viaggio attualmente registrato e funge da interfaccia principale per la gestione delle registrazioni. Toccandolo si apre la [finestra di dialogo Registrazione tracce](#start-a-dialog), dove è possibile avviare, interrompere e visualizzare informazioni dettagliate sulla traccia.

- Il widget viene aggiunto automaticamente quando il *plugin Registrazione tracce* è abilitato, ma può essere nascosto tramite il [menu Configura schermo](../widgets/configure-screen.md#overview).
- Se l'opzione *Mostra finestra di dialogo avvio* è disabilitata nelle impostazioni del plugin Registrazione tracce, toccando il widget attivo si aprirà comunque la finestra di dialogo *Registrazione tracce*, consentendo di accedere a ulteriori opzioni e informazioni.

Oltre al widget *Distanza/Avvio-Stop*, il **plugin Registrazione tracce** include altri tre widget: *Durata*, *Salita* e *Discesa*. Questi forniscono informazioni aggiuntive sul vostro viaggio, aiutandovi a monitorare i progressi in tempo reale.

| |
|-----------|
| **Distanza/Avvio-Stop**. Questo widget visualizza la distanza della registrazione del viaggio in corso. Viene aggiunto automaticamente quando il plugin Registrazione tracce è abilitato, ma è possibile nasconderlo tramite il menu Configura schermo. Il widget presenta tre stati distinti: *Registrazione*, *In pausa* e *Inattivo*, ognuno dei quali indica lo stato attuale della registrazione del viaggio. |
| ![Widget Registrazione tracce (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Per aprire la [finestra di dialogo Registrazione tracce](#start-a-dialog) quando si tocca un widget inattivo, abilitare l'opzione *Mostra finestra di dialogo avvio* nelle impostazioni del plugin Registrazione tracce. Se l'opzione è disabilitata, la registrazione inizierà immediatamente dopo aver toccato il widget senza aprire la finestra di dialogo.|  


### Durata, Salita, Discesa {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">  

</TabItem>

</Tabs>

| |
|------------|
|**Durata**. Visualizza il tempo totale della registrazione del viaggio corrente in ore e minuti. |
|![widget](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Salita**. Mostra il dislivello positivo cumulativo per la registrazione del viaggio corrente. |
|![widget](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Discesa**. Indica la discesa totale accumulata durante la registrazione del viaggio corrente. |
|![widget](@site/static/img/widgets/tr_rec_wid_dow.png)|

Se avete selezionato più widget — *Durata*, *Salita* o *Discesa* — potete accedere alla stessa finestra di dialogo per ciascuno senza doverla cambiare o chiudere. Questa interfaccia unificata facilita la visualizzazione e la gestione di tutte le informazioni correlate in modo fluido.


## Articoli correlati {#related-articles}

- [Menu contestuale della mappa](../map/map-context-menu.md)
- [Mostra traccia sulla mappa](../map/tracks/index.md)
- [Analizza sulla mappa](../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale della traccia](../map/tracks/track-context-menu.md)
- [Navigazione tramite traccia](../navigation/setup/gpx-navigation.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

- La registrazione della traccia non si avvia.
    - Assicurarsi che il **plugin Registrazione tracce** sia abilitato: *Menu → Plugin → Registrazione tracce → Abilita*.
    - Verificare che le impostazioni siano corrette: *Menu → Configura profilo → Impostazioni plugin → Registrazione tracce*.
    - Se la registrazione non si avvia ancora, riavviare l'app e riprovare.

- La registrazione della traccia si interrompe inaspettatamente.
    - Verificare se le *impostazioni di ottimizzazione della batteria del dispositivo* stanno interrompendo la registrazione. Alcuni dispositivi possono mettere in pausa l'attività in background per risparmiare energia. Andare su *Impostazioni dispositivo → Batteria*.

- La distanza registrata non corrisponde alla distanza effettiva.
    - Verificare che il GPS sia abilitato e abbia un segnale attivo.
    - Ridurre la soglia di precisione del GPS: *Menu → Configura profilo → Registrazione tracce → Precisione minima*.

- Le tracce registrate sono rumorose. [(controlla)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Le tracce registrate hanno delle interruzioni. [(controlla)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Come tracciare la distanza percorsa. [(controlla)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Per ulteriore risoluzione dei problemi, visitare: [Risoluzione dei problemi di registrazione delle tracce](https://osmand.net/docs/user/troubleshooting/track-recording-issues).