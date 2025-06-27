---
source-hash: 8826b2eb6a139e524ef632c763796638e85679b9e77950d519cb5b8c87dc9085
sidebar_position: 15
title: Registrazione percorso
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

Il **plugin Registrazione percorso** è uno strumento essenziale per acquisire percorsi, movimenti e allenamenti. Questa funzionalità non solo consente di registrare i percorsi, ma anche di riutilizzare, modificare, aggiornare e condividere facilmente le tracce con altri utenti.

Con il *plugin Registrazione percorso*, è possibile creare nuove tracce, visualizzare quelle registrate direttamente sulla mappa e gestire le registrazioni esistenti. Offre preziose informazioni sui percorsi, come velocità, variazioni di altitudine, dettagli del terreno e dati provenienti da sensori esterni. Il plugin registra il percorso, consentendo un'analisi dettagliata e la condivisione dopo il viaggio.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Percorso registrato in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Percorso registrato in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Parametri di configurazione richiesti {#required-setup-parameters}

Per iniziare a registrare le tracce, è necessario effettuare le seguenti impostazioni:

1. [Abilitare](../plugins/index.md#enable--disable) il **plugin Registrazione percorso**.
2. [Configurare](#recording-settings) le **impostazioni di registrazione** per il [profilo](../personal/profiles.md) richiesto.
3. [Aggiungere](#widgets) i **widget Registrazione percorso** allo schermo (opzionale).
4. [Gestire](../map/tracks/appearance.md) le tracce sulla mappa (opzionale).


## Registrazione di una nuova traccia {#new-track-recording}

![Widget Distanza/Avvia-Interrompi in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Widget Distanza/Avvia-Interrompi in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

Con il plugin Registrazione percorso in OsmAnd, è possibile avviare facilmente la registrazione della traccia utilizzando una varietà di opzioni convenienti. Ecco come è possibile iniziare il viaggio:

- [Widget Distanza/Avvia-Interrompi](#distance-start-stop) — Utilizzare per attivare la registrazione.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — Toccare il pulsante nella scheda *Menu <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> principale*.

- Pulsanti [Azione rapida](../widgets/quick-action.md#add-and-delete-actions) — Per avviare la registrazione di un percorso, andare su *Menu → Configura schermo → Pulsanti personalizzati → Azione rapida → Aggiungi azione → I miei luoghi* e scegliere [Avvia / Pausa: Registrazione percorso](../widgets/quick-action.md#my-places).

- *Solo Android*:
    - Andare su *Menu <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> principale*.

    - [Notifica di sistema](#notifications) — Utilizzare nell'area di notifica del dispositivo.

    - [Avvio applicazione](#launcher-android) — Utilizzare per avviare la registrazione.

**Raccomandazioni:**

- [Posizione precisa](../start-with/first-steps.md#permission-to-access-the-location) — Per una registrazione precisa della traccia, assicurarsi che OsmAnd disponga di questa autorizzazione.

- [Risoluzione dei problemi](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — I **dispositivi iOS** a volte possono **sospendere o interrompere temporaneamente le app** in esecuzione in background, il che potrebbe interrompere la registrazione della traccia.

- **Origine posizione** (*solo Android*) — Regolare le impostazioni in OsmAnd per scegliere il provider GPS più adatto per registrazioni accurate. [Ulteriori informazioni qui](../personal/global-settings.md#location-source).


### Avvia un dialogo {#start-a-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Il dialogo di avvio si apre se l'opzione **<Translate android="true" ids="show_start_dialog"/>** è abilitata nella sezione delle impostazioni della finestra di dialogo di avvio.

![Avvia registrazione in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Il dialogo di avvio si apre se l'opzione **<Translate ios="true" ids="track_interval_remember"/>** non è attivata.

![Avvia registrazione in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Intervallo di registrazione** (*Android/iOS*). Questa impostazione controlla la frequenza con cui l'app richiede dati dal sensore GPS per segnare nuovi punti sulla traccia. La regolazione dell'intervallo consente di bilanciare il dettaglio della traccia e l'utilizzo della batteria. Un intervallo più breve si tradurrà in tracce più dettagliate ma un maggiore consumo della batteria, mentre un intervallo più lungo conserva la batteria ma riduce la precisione della traccia.

- **Icona linea** (*Android*). Toccare questa icona per accedere alle [opzioni di aspetto della traccia](../map/tracks/appearance.md). Qui è possibile personalizzare l'aspetto della traccia sulla mappa, inclusi colore, spessore e stile della linea. Una volta salvata una traccia con un aspetto personalizzato, queste impostazioni verranno mantenute per le registrazioni future, garantendo la coerenza ogni volta che si visualizza o si riattiva la traccia.

- **Menu Impostazioni** (*Android*). Accedere a questo menu per perfezionare le preferenze di registrazione. Per una panoramica dettagliata, fare riferimento alla sezione [Impostazioni registrazione percorso](#recording-settings).

- **Ricorda la mia scelta** (*iOS*). Quando abilitato, la registrazione della traccia si avvia automaticamente, senza richiedere impostazioni o conferme aggiuntive. Se si desidera modificare le impostazioni di registrazione prima di avviare una nuova traccia, riavviare il plugin Registrazione percorso per far riapparire il menu delle impostazioni.


### Avvio (Android) {#launcher-android}

![Menu contestuale dell'icona](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Icona Avvia registrazione](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

È possibile avviare rapidamente una nuova registrazione della traccia direttamente dalla schermata del dispositivo Android utilizzando il menu contestuale dell'icona dell'app OsmAnd.

- **Toccare a lungo** l'icona dell'app OsmAnd per aprire il menu contestuale, dove è possibile trovare l'opzione **Avvia registrazione**.

- Toccare l'opzione **Avvia registrazione** per avviare l'app OsmAnd con le [impostazioni di registrazione della traccia](#overview-screen) visualizzate sullo schermo.

- **Toccare a lungo** l'opzione **Avvia registrazione** nel menu contestuale dell'icona dell'app, per aggiungere un collegamento per un accesso più rapido.

Mentre la registrazione della traccia è attiva, un badge di notifica apparirà nell'angolo dell'icona dell'app OsmAnd, indicando che la registrazione è in corso. Per ulteriori dettagli sulla gestione di questa notifica, vedere la sezione [Notifica](#notifications).


## Registrazione traccia corrente {#current-track-recording}

Per *Interrompi / Salva / Pausa*:

- Per **Interrompere** la registrazione, toccare il pulsante corrispondente nella finestra di dialogo del [widget Distanza/Avvia-Interrompi](#distance-start-stop).

- (*Solo Android*) Per **Interrompere** la registrazione, toccare la voce di menu principale *Registrazione percorso*.

- Per **Interrompere** o **Salvare** una traccia di registrazione, andare su *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*Scheda <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) e toccare il pulsante appropriato nel campo *Traccia attualmente in registrazione*.

- Per **Salvare, Mettere in pausa, Avviare** un nuovo segmento o **Terminare** la registrazione, utilizzare i pulsanti [Azione rapida](../widgets/quick-action.md#add-and-delete-actions). Andare su *Menu → Configura schermo → Pulsanti personalizzati → Azione rapida → Aggiungi azione → [I miei luoghi](../widgets/quick-action.md#my-places)* e aggiungere uno o più pulsanti di azione rapida.

- (*Solo Android*) Per **Mettere in pausa** o **Salvare** una traccia di registrazione, utilizzare la [notifica](#notifications) di sistema nell'area di notifica del dispositivo.<br/><br/> ![interrompi-salva-pausa](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### Schermata Panoramica {#overview-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![panoramica](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png) ![panoramica](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Termina registrazione in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png) ![Termina registrazione in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

In OsmAnd, le versioni **Android** e **iOS** gestiscono l'interfaccia di registrazione della traccia in modo leggermente diverso. Su Android, si trova un menu dedicato per il contesto *Registrazione traccia*, mentre su iOS, questo è semplificato nel menu contestuale *Traccia attualmente in registrazione*.

Durante la registrazione di una traccia, vengono generati grafici dinamici che forniscono dati visivi in tempo reale sul viaggio. Questi grafici possono riflettere informazioni per l'intero percorso o solo per un segmento selezionato, a seconda del livello di zoom.
Ecco cosa si può trovare su di essi:

- **Valori dei dati**. Sul lato destro del grafico si trovano i valori ***più alti***, ***più bassi*** e ***medi*** per la sezione visibile della traccia.

- **Grafico per informazioni chiave**:
    - ***Android***. Per l'***asse Y*** sul grafico, è possibile selezionare *fino a due parametri* tra tutti i dati disponibili come *Altitudine*, *Pendenza*, *Velocità* e [informazioni da sensori esterni](../plugins/external-sensors.md#trip-recording). Per l'***asse X***, selezionare di visualizzare *Distanza*, *Tempo* o *Ora del giorno*.
    - ***iOS***. I parametri sono organizzati in schede *Panoramica*, *Altitudine* e *Velocità* con i valori appropriati per l'asse Y e *Distanza* per l'asse X.

Per una visualizzazione più dettagliata, è possibile **scalare il grafico**:

- Utilizzare il [gesto a due dita](../map/interact-with-map.md#gestures) per ingrandire o rimpicciolire e concentrarsi su intervalli specifici.
- Toccare un punto qualsiasi del grafico per visualizzare un indicatore che mostra i valori esatti per quella posizione.

| |
| ------------- |
|**Scheda Panoramica** iOS (per Android, i parametri dell'asse Y sono *Altitudine*, *Velocità* e il parametro dell'asse X è *Distanza*). Questa scheda visualizza un grafico che mostra le variazioni di velocità e altitudine lungo la lunghezza della traccia e i dettagli chiave della traccia. Dati della traccia per iOS: *Distanza*, *Intervallo di tempo*, *Ora di inizio* e *Ora di fine*. È possibile vedere come questo viene visualizzato nelle versioni Android e iOS di seguito. |
| ![dati](@site/static/img/plugins/trip-recording/graph_overview_andr.png) ![dati](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| **Scheda Altitudine** iOS (per Android, i parametri dell'asse Y sono *Altitudine*, *Pendenza* e il parametro dell'asse X è *Distanza*). Questa scheda si concentra sul profilo altimetrico della traccia registrata, fornendo informazioni sulle variazioni di altitudine e sulle pendenze del terreno. Le metriche chiave per iOS includono: *Altitudine media*, *Intervallo altitudine*, *Salita* e *Discesa*. I grafici seguenti illustrano le differenze tra le interfacce Android e iOS. |
| ![dati](@site/static/img/plugins/trip-recording/graph_altitude_andr.png) ![dati](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| **Scheda Velocità** iOS (per Android, il parametro dell'asse Y è *Velocità* e il parametro dell'asse X è *Distanza*). La scheda Velocità evidenzia i dati relativi alla velocità lungo la traccia. Per iOS, include informazioni come *Velocità media*, *Velocità massima*, *Tempo in movimento* e *Distanza corretta*. Gli screenshot seguenti mostrano come questi dati vengono visualizzati su entrambe le piattaforme. |
| ![dati](@site/static/img/plugins/trip-recording/graph_speed_andr.png) ![dati](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| Per **Android**, è possibile creare più combinazioni di dati disponibili sull'asse Y e valori sull'asse X. |
| ![dati](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
Per maggiori dettagli, è possibile esplorare il [**Menu contestuale delle tracce**](../map/tracks/track-context-menu.md#options), dove è possibile gestire varie opzioni relative alle tracce come rinominare, eliminare o aggiungere waypoint. Per regolare l'aspetto delle tracce sulla mappa, visitare la sezione [**Aspetto**](../map/tracks/appearance.md). Se si desidera aggiungere waypoint specifici alla traccia corrente, consultare la guida [**Punti traccia**](../map/tracks/track-context-menu.md#points--waypoints). Per qualsiasi modifica, come rinominare una traccia, utilizzare la scheda [**Opzioni**](https://osmand.net/docs/user/map/track-context-menu#options) all'interno del Menu contestuale delle tracce.
:::


### Mostra sulla mappa {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![mostra_tr_sullamappa_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configura tracce mappa Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![mostra_tr_sullamappa_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configura tracce mappa iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Gestisci quali tracce sono visibili sulla tua mappa utilizzando una delle due opzioni. Vai su *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*Scheda <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) e abilita l'opzione *Mostra sulla mappa* per qualsiasi traccia che desideri visualizzare o nascondere. In alternativa, puoi andare su *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) per regolare rapidamente la visibilità di tutte le tue tracce in un unico posto.


### File GPX registrato {#recorded-gpx-file}

OsmAnd cattura il tuo viaggio in un [file GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) strutturato, utilizzando una gerarchia di *file > traccia > segmenti > punti*. Ecco come funziona:

- I **punti** rappresentano singoli momenti del percorso registrato, ciascuno contrassegnato da attributi come coordinate, velocità, altitudine e direzione.
- Questi punti sono raggruppati per formare **tracce**, che rappresentano l'intero percorso.
- Se c'è un intervallo nella registrazione (ad esempio, se il tracciamento è stato messo in pausa), il punto successivo alla pausa avvia un nuovo **segmento**, segnando la separazione nel viaggio.
- Sia i **segmenti** che le **tracce** sono rappresentati visivamente con icone *Inizio* e *Fine* sulla mappa.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![File GPX di una traccia registrata](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![File GPX di una traccia registrata](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png) -->


| Parametro | Descrizione |
|-----------------|----------------|
| `trkpt` | **Punto traccia** rappresenta una posizione geografica specifica rilevata durante l'attività. Ogni punto traccia include coordinate di latitudine e longitudine, formando la base del percorso registrato. |
| `trkseg` | **Segmento traccia** raggruppa punti traccia consecutivi, separati da interruzioni nell'attività, come pause o fermate. Questo aiuta a distinguere il movimento continuo dai periodi di inattività all'interno di una singola registrazione. |
| `lat` | **Latitudine** indica la posizione nord-sud di un punto sulla superficie terrestre. È una metà della coppia di coordinate utilizzata per individuare la posizione esatta. |
| `lon` | **Longitudine** specifica la posizione est-ovest, completando la latitudine, per localizzare accuratamente un punto sul globo. Insieme, latitudine e longitudine definiscono la posizione geografica precisa. |
| `ele` | **Altitudine** misura l'altezza di un punto traccia sopra il livello del mare, registrata in metri. Questo può essere utile per tracciare le variazioni di altitudine durante le attività, come escursioni o gite in bicicletta. |
| `time` | **Timestamp** registra la data e l'ora esatte in cui viene registrato un punto traccia. Questo consente di tracciare la durata e la tempistica dell'attività con precisione. |
| `hdop` | **Diluizione orizzontale della precisione (HDOP)** è una misura dell'accuratezza GPS, che riflette l'errore potenziale nella posizione dovuto alle posizioni dei satelliti. A differenza dell'HDOP standard, le tracce GPX di OsmAnd utilizzano questo valore per rappresentare l'accuratezza orizzontale in metri. Si prega di notare che questa implementazione differisce dagli standard HDOP tipici. [Ulteriori informazioni](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **Velocità** registra la velocità di movimento in metri al secondo. Fornisce informazioni sul ritmo durante vari segmenti dell'attività. |
| `heading` | **Direzione** indica la direzione in cui è puntata la parte anteriore del veicolo o del dispositivo, misurata in gradi. È distinta dalla rotta, che è il percorso effettivo di movimento. Possono verificarsi differenze a causa di fattori esterni come vento, correnti o condizioni stradali. [Maggiori informazioni sulla direzione](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | La **velocità** dai [sensori esterni](../plugins/external-sensors.md) acquisisce dati dai sensori collegati, fornendo informazioni sulla velocità più precise, particolarmente utili durante il ciclismo. Per maggiori dettagli, fare riferimento alla [documentazione del formato file GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | La **cadenza** misura il numero di rivoluzioni del pedale al minuto, registrata utilizzando [sensori esterni](../plugins/external-sensors.md). Questo è particolarmente utile per i ciclisti che mirano a monitorare e ottimizzare l'efficienza della pedalata. [Ulteriori informazioni](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | La **potenza della bicicletta** quantifica la potenza generata durante la pedalata, acquisita da [sensori esterni](../plugins/external-sensors.md). È una metrica essenziale per i ciclisti seri che desiderano valutare le loro prestazioni. [Ulteriori informazioni](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | La **temperatura dell'aria** registra la temperatura ambiente durante l'attività, misurata utilizzando [sensori esterni](../plugins/external-sensors.md). Si noti che la temperatura dell'acqua non è supportata. [Dettagli qui](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | La **frequenza cardiaca** monitora i battiti cardiaci al minuto, utilizzando i dati dei [sensori](../plugins/external-sensors.md) collegati. Queste informazioni possono essere vitali per monitorare le prestazioni cardiovascolari durante gli allenamenti. [Ulteriori informazioni](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## Impostazioni di registrazione {#recording-settings}

Prima di iniziare a tracciare i tuoi viaggi, devi configurare correttamente il **plugin Registrazione percorso** per prestazioni ottimali.

- **Impostazioni specifiche del profilo**. Ogni profilo nell'app può avere le proprie impostazioni di Registrazione percorso uniche. Ciò ti consente di personalizzare con precisione il comportamento di registrazione in base alla tua attività, come guidare, andare in bicicletta o persino fare nordic walking, che potrebbero richiedere configurazioni diverse.

- **Personalizza i parametri di registrazione**. Le impostazioni di registrazione possono variare a seconda di come ti muovi. Ad esempio, guidare per lunghe distanze potrebbe richiedere una frequenza di registrazione inferiore, mentre l'escursionismo o la camminata potrebbero beneficiare di aggiornamenti più frequenti.

- **Dati di posizione precisi**. Per garantire che le tue registrazioni siano fluide e utilizzabili per un uso futuro, puoi personalizzare il modo in cui acquisisci i punti di posizione. Ciò potrebbe includere la regolazione della frequenza di registrazione, il formato dei dati (come il numero di punti per unità di distanza) o la spaziatura tra i punti registrati.

- **Impostazioni globali**. Le impostazioni di Registrazione percorso sono configurate per profilo, che puoi gestire nelle [impostazioni](../personal/global-settings.md) globali dell'app. Prima di personalizzare il plugin Registrazione percorso, seleziona il profilo che desideri configurare dalla sezione [profili](../personal/profiles.md). Da lì, naviga nelle impostazioni del profilo per accedere alle opzioni di Registrazione percorso.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Configurazione registrazione percorso in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) ![Configurazione registrazione percorso in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configurazione registrazione percorso in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) ![Configurazione registrazione percorso in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parametro | Descrizione |
|---|---|
| **Finestra di dialogo ottimizzazione batteria** (*Android*) | Apre le [impostazioni di ottimizzazione batteria di Android](#battery-optimization). Tocca *Non chiedere più* se non desideri essere nuovamente richiesto. |
| **Mostra finestra di dialogo di avvio** (*Android*) | Abilita una finestra di dialogo in cui è possibile configurare le impostazioni prima di iniziare la registrazione. Se disabilitato, la registrazione si avvia automaticamente. |
| **Registra automaticamente la traccia durante la navigazione** | Registra automaticamente la traccia durante la navigazione e la salva nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*. <br />*Nota*: la registrazione della traccia consuma batteria e continua a funzionare in background, anche se lo schermo è spento. |
| **Intervallo di registrazione generale** | Definisce la frequenza con cui vengono registrati i punti di posizione. Il valore predefinito è 5 secondi. È abilitato con il *widget Registrazione percorso*. |
| **Spostamento minimo** | Un filtro per evitare di registrare punti quando c'è poco o nessun movimento. Aiuta a ridurre il rumore dei dati.<ul><li>*Effetti collaterali*: i periodi di riposo potrebbero non essere registrati e i piccoli movimenti potrebbero essere ignorati. Questo può ridurre i dati di post-elaborazione, ma può anche impedire la registrazione degli errori GPS.</li><li>*Raccomandazione*: impostare lo spostamento a 5 metri se si desiderano meno dettagli minori nelle registrazioni.</li></ul> |
| **Precisione minima** | Filtra i punti di posizione al di sotto di una soglia di indicazione di precisione minima, come riportato dal dispositivo.<ul><li>*Effetti collaterali*: i punti in aree con segnale scarso (sotto ponti, alberi, tra edifici o in alcune condizioni meteorologiche) potrebbero mancare.</li><li>*Raccomandazione*: se non si è sicuri, potrebbe essere meglio disabilitare questo filtro per evitare di perdere dati.</li></ul><details><summary>*Osservazione*</summary>Supponiamo che il GPS sia stato spento poco prima della registrazione. In tal caso, il primo punto misurato potrebbe avere una precisione ridotta, quindi è meglio attendere un po' prima di registrare il punto o registrare il migliore di 3 punti consecutivi.</details> |
| **Velocità minima** | Imposta una soglia per ignorare i punti registrati al di sotto di una certa velocità.<ul><li>*Effetti collaterali*: le sezioni in cui la velocità scende al di sotto di una soglia specificata non verranno registrate.</li><li>*Raccomandazione*: utilizzare invece il filtro *Spostamento minimo*, poiché può fornire risultati migliori senza perdere dati importanti.</li></ul><details><summary>*Osservazione*</summary>Provare prima a utilizzare il rilevamento del movimento tramite il filtro di spostamento minimo di registrazione (B), potrebbe produrre risultati migliori e si perderanno meno dati. Se le tracce rimangono rumorose a basse velocità, provare valori diversi da zero qui. Si noti che alcune misurazioni potrebbero non riportare alcun valore di velocità (alcuni metodi basati sulla rete), nel qual caso non si registrerebbe nulla.<br/><br/>Controllo velocità > 0: la maggior parte dei chipset GPS riporta un valore di velocità solo se l'algoritmo determina che si è in movimento, e nessuno se non lo si è. Quindi l'utilizzo dell'impostazione > 0 in questo filtro in un certo senso utilizza il rilevamento del movimento del chipset GPS. Ma anche se non filtrato qui al momento della registrazione, utilizziamo comunque questa funzionalità nella nostra analisi GPX per determinare la Distanza corretta, ovvero il valore visualizzato in quel campo è la distanza registrata mentre si è in movimento.</details> |
| **Suddivisione automatica delle registrazioni dopo un intervallo** | Suddivide automaticamente le tracce in base agli intervalli di tempo tra i punti registrati. <ul><li>Un nuovo segmento inizia dopo un intervallo di 6 minuti.</li><li>Una nuova traccia inizia dopo un intervallo di 2 ore.</li><li>Un nuovo file inizia quando cambia la data.</li><li>Gli intervalli possono derivare dalla perdita del segnale GPS, dalla bassa velocità o dalle impostazioni di configurazione.</li></ul><details><summary>*Osservazione*</summary>Un intervallo viene identificato quando non vengono registrati punti. Ciò può accadere perché la posizione non viene rilevata o perché viene rilevata ma non registrata. Diversi fattori possono causare ciò, tra cui segnali GPS deboli a causa di condizioni meteorologiche avverse o la velocità di movimento che scende al di sotto della soglia configurata. In tali casi, anche se il dispositivo può rilevare la posizione, non la registra.<br/><br/>Questi intervalli nei dati registrati possono attivare la creazione di un nuovo segmento all'interno della stessa traccia, una nuova traccia nello stesso file o un nuovo file GPX all'interno di una singola sessione di registrazione di avvio/arresto. Questo viene gestito all'interno di una singola sessione di registrazione di avvio/arresto.</details> |
| **Impedisci registrazione autonoma** (*Android*) | Mette in pausa la registrazione della traccia quando l'app OsmAnd viene terminata (tramite *app recenti*). L'indicazione in background non viene visualizzata nel pannello di notifica di Android. |
| **Includi direzione** | Registra la direzione (direzione del movimento) per ogni punto nel file GPX. La direzione è la direzione in cui è rivolto il dispositivo, che può differire dalla direzione del movimento a causa di fattori esterni come vento o sbandamento. |
| **Attività** (*Android*) | L'opzione consente di preselezionare un [tipo di attività](../map/tracks/track-context-menu.md#track-information-activity) per un profilo, che viene quindi applicato automaticamente a tutte le tracce registrate. |
| **Sensori esterni** <br/> *Plugin necessario abilitato* | I dati provenienti da [sensori esterni](../plugins/external-sensors.md#trip-recording) come *<Translate android="true" ids="map_widget_ant_heart_rate"/>* o *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* vengono registrati nel file GPX. I dati di *Distanza* non vengono registrati su Android o iOS. Visualizzato solo quando il [plugin Sensori esterni](../plugins/external-sensors.md) è abilitato. |
| **Metriche veicolo** (*Android*) <br/> *Plugin necessario abilitato* | I dati provenienti dallo [scanner OBD-II](../plugins/vehicle-metrics.md#trip-recording) vengono registrati nel file GPX. Visualizzato solo quando il [plugin Metriche veicolo](../plugins/vehicle-metrics.md) è abilitato.<br />*Nota*: è possibile aggiungere quali metriche registrare nel file GPX dall'elenco: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **Cartella di archiviazione tracce** (*Android*) | Definisce dove nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* vengono archiviate le tracce registrate. Le opzioni includono l'archiviazione di tutte le tracce nella cartella Rec o l'organizzazione per mese, ad esempio Rec/aaaa-mm. |
| **Notifica** | Controlla la visualizzazione di una [notifica di registrazione percorso](#notifications) di sistema nell'area di notifica del dispositivo che consente di avviare la registrazione dei percorsi. |
| **Tracciamento online** (*Android*) | Consente il tracciamento in tempo reale della posizione inviando i punti registrati a un URL specificato. L'intervallo di tracciamento determina la frequenza con cui vengono inviati i punti e il buffer di tempo memorizza i punti quando non c'è connessione Internet.<details><summary>*Osservazione*</summary>Se questa opzione è abilitata e la registrazione della traccia è in corso, il widget Distanza/Avvia-Interrompi (REC) diventa **verde** invece di **rosso**, indicando che ogni punto registrato viene trasmesso a un URL specificato. Il campo **Indirizzo web** consente di inserire l'URL utilizzando il seguente formato di parametri:<ul><li>`lat={0}`: Latitudine</li><li>`lon={1}`: Longitudine</li><li>`timestamp={2}`: Timestamp (ora Unix)</li><li>`hdop={3}`: Diluizione orizzontale della precisione</li><li>`altitude={4}`: Altitudine</li><li>`speed={5}`: Velocità</li><li>`bearing={6}`: Direzione (direzione del movimento)</li><li>`eta={7}`: Tempo stimato di arrivo (ora Unix)</li><li>`etfa={8}`: Tempo stimato al primo punto intermedio o punto di arrivo (ora Unix)</li><li>`eda={9}`: Distanza stimata all'arrivo o a un indicatore (in metri)</li><li>`edfa={10}`: Distanza stimata al primo punto intermedio o punto di arrivo (in metri)</li></ul>È possibile impostare l'**Intervallo di tracciamento** per specificare la frequenza con cui vengono inviati i punti di posizione, con opzioni che vanno da 0 secondi a 5 minuti. Inoltre, il parametro **Buffer di tempo** determina per quanto tempo i punti di posizione vengono memorizzati se non c'è connessione Internet, garantendo che i dati vengano salvati e trasmessi quando la connessione viene ripristinata.</details> |
| **Tracce** | Un riferimento rapido alla cartella in cui vengono salvate le tracce nella scheda *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **Ripristina impostazioni plugin predefinite** | Ripristina tutte le impostazioni di registrazione percorso per il profilo corrente ai valori predefiniti. |
| **Copia da un altro profilo** (*Android*) | Copia le impostazioni di registrazione percorso da un profilo a un altro. |


### Ottimizzazione batteria {#battery-optimization}

<InfoAndroidOnly />

![Traccia sulla mappa iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png) ![Traccia sulla mappa iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)

Questa funzionalità consente di gestire le impostazioni di ottimizzazione della batteria per OsmAnd per garantire un accesso ininterrotto alla posizione, anche quando l'app è in esecuzione in background durante la navigazione o la registrazione della traccia.

- **Impostazioni di ottimizzazione della batteria**. Apre le impostazioni di Android, dove è possibile modificare le preferenze di risparmio energetico per OsmAnd. [Maggiori dettagli qui](../troubleshooting/general.md#optimizing-battery-consumption).
- **Non chiedere più**. Chiude definitivamente la finestra di dialogo, in modo che non appaia più.
- **Chiudi**. Chiude temporaneamente la finestra di dialogo, che riapparirà la prossima volta che l'ottimizzazione della batteria richiede attenzione.


### Notifiche {#notifications}

![Notifica registrazione percorso](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)

Se la [Notifica](#recording-settings) è abilitata nelle impostazioni del plugin, le notifiche di registrazione percorso verranno sempre visualizzate nell'area di notifica del sistema quando la registrazione è attiva. Questa notifica garantisce che il processo di registrazione non venga interrotto dal sistema e non può essere disabilitata durante una registrazione attiva.

- L'area di notifica si apre scorrendo verso il basso dalla parte superiore dello schermo e si chiude scorrendo verso l'alto. Questi messaggi notificano azioni come l'avvio/arresto della registrazione percorso, specialmente quando la registrazione automatica è abilitata durante la navigazione.
- Le notifiche rimangono visibili indipendentemente dal fatto che l'app sia in esecuzione in primo piano, in background o sia chiusa. È possibile cancellare manualmente la vecchia notifica se non è più necessaria, ma ciò non interromperà la registrazione in corso.

**Nota importante**.

Questo comportamento è richiesto da Android per qualsiasi servizio in primo piano, come la registrazione percorso, per rimanere visibile all'utente.

- Se la notifica viene rimossa, Android interromperà automaticamente la registrazione. È possibile utilizzare l'impostazione [Impedisci registrazione autonoma](#recording-settings).
- L'impostazione **Notifica** in OsmAnd influisce sulla visualizzazione di un collegamento rapido nella barra di notifica per avviare una registrazione quando nessuna registrazione è attiva. **Non** controlla la visibilità della notifica durante una registrazione attiva.

**Opzioni Android aggiuntive**.

![Notifica registrazione percorso](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- In ***Impostazioni Android → Notifiche e barra di stato → Notifiche schermata di blocco***, è possibile rimuovere OsmAnd dall'elenco delle app per impedire la visualizzazione delle notifiche sulla schermata di blocco, evitando l'attivazione accidentale dello schermo. Ciò non influirà sulla registrazione della traccia. Le notifiche appariranno comunque nell'area di notifica normale.
- **OsmAnd** potrebbe anche apparire in ***Privacy → Autorizzazioni speciali → Attiva schermo***. Se si desidera impedire l'attivazione dello schermo quando appare una notifica, provare a rimuovere OsmAnd da questo elenco.

<!--
- OsmAnd non è elencato in **Privacy** *→* **Autorizzazioni speciali** → **Allarmi e promemoria**.
-->

**Notifica badge**.

![Notifica registrazione percorso](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

Il badge dell'icona dell'app appare accanto all'icona di OsmAnd quando la registrazione della traccia è attiva.

- Questa icona scompare quando la registrazione della traccia è completa. Per verificare se una registrazione è attiva, è possibile andare su *Menu → I miei luoghi → Scheda Tracce* o toccare il widget per gestire la registrazione.
- Se non è in corso alcuna registrazione e il badge è ancora visualizzato, potrebbe significare che un messaggio da OsmAnd è rimasto nel pannello di notifica del dispositivo.
- Per disabilitare i badge nelle impostazioni di Android, andare su *Impostazioni dispositivo → App → OsmAnd → Notifiche* e disabilitare l'opzione di visualizzazione del badge per questa app.


## Widget {#widgets}

I widget consentono di visualizzare informazioni chiave sulla registrazione della traccia direttamente sullo schermo, come *Distanza*, *Durata*, *Salita* e *Discesa*.

Per iniziare a utilizzare i *widget Registrazione percorso*, è necessario effettuare tutte le seguenti impostazioni:

1. [Abilitare il plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configurare le impostazioni di registrazione percorso per il [profilo](../personal/profiles.md) richiesto.
3. Aggiungere i **widget Registrazione percorso** necessari allo schermo. Si noti che questa configurazione è **specifica per ogni profilo**.


### Aggiungi widget di registrazione {#add-recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_widget_monitoring"/>*

![Aggiunta widget Distanza/Avvia-Interrompi in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Scegli un pannello → <Translate android="true" ids="map_widget_monitoring"/>*

![Aggiunta widget Distanza/Avvia-Interrompi in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

Il [widget Registrazione percorso](../widgets/info-widgets.md#trip-recording-widgets) fornisce un modo semplice per monitorare lo stato della registrazione e accedere rapidamente alle impostazioni e ai dettagli della registrazione. Questo widget viene aggiunto automaticamente allo schermo quando il plugin Registrazione percorso è abilitato.

Per personalizzare l'interfaccia, è possibile aggiungere o rimuovere il widget Registrazione percorso e [altri widget](../plugins/trip-recording#duration-uphill-downhill) tramite il menu Configura schermo.


### Distanza (Avvia-Interrompi) {#distance-start-stop}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget registrazione percorso](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Termina registrazione in Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget registrazione percorso](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Widget registrazione percorso](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

Quando i widget vengono visualizzati sulla mappa, toccandone uno si rivelano ulteriori dettagli della traccia e si consente l'interazione con la registrazione.
Il widget *Distanza* visualizza la distanza totale del percorso registrato corrente e funge da interfaccia principale per la gestione delle registrazioni. Toccandolo si apre la [finestra di dialogo Registrazione percorso](#start-a-dialog), dove è possibile avviare, interrompere e visualizzare informazioni dettagliate sulla traccia.

- Il widget viene aggiunto automaticamente quando il *plugin Registrazione percorso* è abilitato, ma può essere nascosto tramite il [menu Configura schermo](../widgets/configure-screen.md#configure-screen-menu).
- Se l'opzione *Mostra finestra di dialogo di avvio* è disabilitata nelle impostazioni del plugin Registrazione percorso, toccando il widget attivo si aprirà comunque la finestra di dialogo *Registrazione percorso*, consentendo di accedere a ulteriori opzioni e informazioni.

Oltre al widget *Distanza/Avvia-Interrompi*, il **plugin Registrazione percorso** include altri tre widget: *Durata*, *Salita* e *Discesa*. Questi forniscono informazioni aggiuntive sul viaggio, aiutandoti a monitorare i progressi in tempo reale.

| |
|-----------|
| **Distanza/Avvia-Interrompi**. Questo widget visualizza la distanza della registrazione del percorso in corso. Viene aggiunto automaticamente quando il plugin Registrazione percorso è abilitato, ma è possibile nasconderlo tramite il menu Configura schermo. Il widget presenta tre stati distinti: *Registrazione*, *In pausa* e *Inattivo*, ciascuno indicante lo stato corrente della registrazione del percorso. |
| ![Widget registrazione percorso (REC)](@site/static/img/widgets/tr_rec_wid_rec.png) |
| Per aprire la [finestra di dialogo Registrazione percorso](#start-a-dialog) quando si tocca un widget inattivo, abilitare l'opzione *Mostra finestra di dialogo di avvio* nelle impostazioni del plugin Registrazione percorso. Se l'opzione è disabilitata, la registrazione inizierà immediatamente dopo aver toccato il widget senza aprire la finestra di dialogo. |


### Durata, Salita, Discesa {#duration-uphill-downhill}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**Durata**. Visualizza il tempo totale della registrazione del percorso corrente in ore e minuti. |
|![widget](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**Salita**. Mostra il dislivello cumulativo per la registrazione del percorso corrente. |
|![widget](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Discesa**. Indica la discesa totale accumulata durante la registrazione del percorso corrente. |
|![widget](@site/static/img/widgets/tr_rec_wid_dow.png)|

Se hai selezionato più widget - *Durata*, *Salita* o *Discesa* - puoi accedere alla stessa finestra di dialogo per ciascuno senza dover cambiare o chiuderla. Questa interfaccia unificata semplifica la visualizzazione e la gestione di tutte le informazioni correlate senza interruzioni.


## Articoli correlati {#related-articles}

- [Menu contestuale mappa](../map/map-context-menu.md)
- [Mostra traccia sulla mappa](../map/tracks/index.md)
- [Analizza sulla mappa](../map/tracks/index.md#analyze-track-on-map)
- [Menu contestuale traccia](../map/tracks/track-context-menu.md)
- [Navigazione per traccia](../navigation/setup/gpx-navigation.md)

### Problemi comuni e soluzioni {#common-issues-and-solutions}

- La registrazione del percorso non si avvia.
    - Assicurarsi che il **plugin Registrazione percorso** sia abilitato: *Menu → Plugin → Registrazione percorso → Abilita*.
    - Verificare che le impostazioni siano corrette: *Menu → Configura profilo → Impostazioni plugin → Registrazione percorso*.
    - Se la registrazione non si avvia ancora, riavviare l'app e riprovare.

- La registrazione del percorso si interrompe inaspettatamente.
    - Verificare se le *impostazioni di ottimizzazione della batteria del dispositivo* stanno interrompendo la registrazione. Alcuni dispositivi potrebbero mettere in pausa l'attività in background per risparmiare energia. Andare su *Impostazioni dispositivo → Batteria*.

- La distanza registrata non corrisponde alla distanza effettiva.
    - Verificare che il GPS sia abilitato e abbia un segnale attivo.
    - Ridurre la soglia di precisione GPS: *Menu → Configura profilo → Registrazione percorso → Precisione minima*.

- Le tracce registrate sono rumorose. [(verifica)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- Le tracce registrate presentano interruzioni. [(verifica)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- Come tracciare la distanza percorsa. [(verifica)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

Per ulteriori risoluzioni dei problemi, visitare: [Risoluzione dei problemi di registrazione traccia](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *Ultimo aggiornamento: gennaio 2025*