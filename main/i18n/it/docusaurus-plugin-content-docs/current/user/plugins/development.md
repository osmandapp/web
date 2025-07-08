---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title: Sviluppo OsmAnd
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

Le funzioni di test dell'app sono raccolte nel plugin di sviluppo di OsmAnd. Usale a tuo rischio e pericolo.

Il plugin di sviluppo di OsmAnd ti consente di provare nuove funzionalità dell'app o di configurare OsmAnd per i test: simulare percorsi di navigazione, controllare le prestazioni di rendering dello schermo, ecc. Il plugin è progettato per *sviluppatori e utenti esperti* e non è necessario per l'uso quotidiano dell'applicazione.


## Parametri di configurazione richiesti {#required-setup-parameters}

Per attivare funzionalità speciali per sviluppatori e tester:

1. [Abilita](../plugins/index.md#enable--disable) il plugin di sviluppo di OsmAnd nella sezione Plugin del *Menu principale*.
2. Effettua le impostazioni necessarie nel [menu Impostazioni](#plugin-settings) del plugin.
3. Abilita i **widget per sviluppatori** se necessario.


## Impostazioni plugin {#plugin-settings}

:::info info
Le impostazioni del plugin di sviluppo di OsmAnd sono globali e si applicano a tutti i profili.
:::

Utilizza uno dei seguenti percorsi per aprire le impostazioni del plugin:

- *Menu principale → Plugin → Sviluppo OsmAnd → Impostazioni*.
- *Menu principale → [Impostazioni globali](../personal/global-settings.md) → Profilo → Impostazioni plugin di sviluppo OsmAnd*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni di sviluppo Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Impostazioni di sviluppo 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di sviluppo iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Terreno {#terrain}

- **Usa formato raster [SQLIte](../../technical/osmand-file-formats/osmand-sqlite) per ombreggiatura e pendenza** (*Android*). Carica mappe raster in vecchio formato.


### Risoluzione dei problemi {#troubleshotting}

- **Simula la tua posizione** (*Android* / *iOS*). [Simula](#gpx-track-simulation) la posizione e il movimento utilizzando una traccia GPX.
- **Modalità risparmio batteria** (*Android* / *iOS*). Questa impostazione riduce [la frequenza di aggiornamento dello schermo](#map-rendering-fps-widget) di 20 fotogrammi al secondo per aiutare a risparmiare la batteria durante l'utilizzo delle applicazioni.
- **Usa icone di posizione 3D** (*iOS*). Ti consente di selezionare un'icona 3D per l'[icona La mia posizione](../personal/profiles.md#my-location-appearance).
- **Simula dati obd** (*Android*). Consente la simulazione dell'utilizzo dello [scanner OBD](./vehicle-metrics.md).
- **Informazioni di debug sulle prestazioni** (*Android*). Visualizza le prestazioni di rendering e navigazione.
- **Disabilita livelli mappa** (*Android*). Disabilita tutti i livelli mappa sulla mappa vettoriale (richiesto riavvio).
- **Buffer Logcat** (*Android*). Controlla e condividi i log dettagliati dell'app.
- **Mostra toast sul tasto premuto** (*Android*). Visualizza un messaggio sul tasto.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Il rilevamento è la direzione della bussola dalla tua posizione attuale alla tua destinazione prevista. Influisce sulla *[registrazione della traccia](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. La rotta è la direzione della bussola dalla tua posizione attuale verso il nord vero. Questa opzione è abilitata per impostazione predefinita. Influisce sulla *[registrazione della traccia](../plugins/trip-recording.md)*.


### Test dell'applicazione {#application-testing}

:::caution Solo Android
:::

- **Simula il primo avvio dell'app**. Imposta il flag che indica il primo avvio dell'app, mantenendo tutte le altre impostazioni invariate.
- **Testa i messaggi vocali**. Seleziona una voce e testa riproducendo gli annunci.
- **Barra di stato trasparente**. La mappa diventa visibile sotto la barra di stato.
- **Mostra banner versione gratuita**. Visualizza il banner della versione gratuita anche nella versione a pagamento.
- **Mostra informazioni di debug**. Visualizza informazioni grafiche sul posizionamento di ogni testo sulla mappa.
- **Consenti visualizzazione in alto**. Consente la visualizzazione dei testi della mappa uno sopra l'altro.


### Algoritmi interni {#internal-algorithms}

:::caution Solo Android
:::

- **Modalità sicura**. Esegui l'app in modalità sicura (più lenta).


### Impostazioni di memoria {#memory-settings}

:::caution Solo Android
:::

- L'opzione **Memoria allocata per il routing** ti consente di determinare la quantità di memoria allocata per il calcolo di percorsi lunghi. Puoi utilizzare questa opzione se nelle *Impostazioni di navigazione* è selezionato il [routing A* standard](../navigation/guidance/navigation-settings.md#development-settings).

***Calcolo di percorsi extra-lunghi:***

- Una maggiore allocazione di memoria potrebbe influire sulle prestazioni di altre app.
- [Calcolo di percorsi di 50 km per pedoni](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Informazioni e statistiche {#info-and-statistics}

:::caution Solo Android
:::

- **Memoria allocata**. Visualizza la memoria di sistema allocata per l'applicazione OsmAnd.
- **Memoria nativa totale**. Visualizza la quantità totale di memoria nativa allocata all'applicazione, inclusa la memoria proporzionale.
- **Informazioni A-GPS**. Indica quando sono stati scaricati per l'ultima volta i dati A-GPS.
- **Informazioni giorno/notte**. Indica gli orari di alba e tramonto di oggi.
- **Statistiche energetiche (media 1 / 5 / 15 minuti)**. Visualizza il livello della batteria al minuto (%) e il consumo energetico medio (mAh) su intervalli di 1, 5 e 15 minuti.
- **Statistiche di rendering (media 1 / 5 / 15 minuti)**. Mostra le statistiche di rendering, inclusi FPS sugli ultimi 1k fotogrammi, CPU (tiles), CPU (tempo di inattività) e CPU (standby) medie su intervalli di 1, 5 e 15 minuti.

**Pulsante:**

- **Ripristina le impostazioni del plugin ai valori predefiniti**. Ripristina tutte le impostazioni del plugin ai loro valori predefiniti.

![Impostazioni di sviluppo Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget FPS rendering mappa {#map-rendering-fps-widget}

:::info Importante
I widget per sviluppatori di OsmAnd possono essere aggiunti allo schermo solo quando il plugin di sviluppo di OsmAnd è abilitato.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget di sviluppo fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Widget di sviluppo fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Widget di sviluppo iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

Il [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) mostra la velocità con cui vengono visualizzati e aggiornati la mappa e gli elementi della mappa. Il valore numerico è indicato in fotogrammi al secondo (FPS).


## Widget posizione fotocamera {#camera-position-widgets}

:::info Importante
I widget per sviluppatori di OsmAnd possono essere aggiunti allo schermo solo quando il plugin di sviluppo di OsmAnd è abilitato.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Widget posizione fotocamera 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Widget posizione fotocamera 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Widget posizione fotocamera 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Widget posizione fotocamera 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Puoi utilizzare i [widget posizione fotocamera](../widgets/info-widgets.md#camera-widgets) per dare alla mappa di OsmAnd un aspetto realistico e abbinare le foto della Terra scattate sia dall'alto che dallo spazio.


### Inclinazione fotocamera {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget inclinazione fotocamera Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Widget inclinazione fotocamera Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget inclinazione fotocamera ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Widget inclinazione fotocamera ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Il widget Inclinazione fotocamera visualizza l'inclinazione tra il vettore di visualizzazione centrale della fotocamera (spettatore) e un immaginario terreno pianeggiante della terra. Il valore predefinito è 90 gradi (nessuna inclinazione).

:::note
L'inclinazione della fotocamera viene modificata spostando la fotocamera (spettatore) mentre il punto centrale sulla mappa (che stiamo guardando) rimane lo stesso. La distanza da esso (in realtà, lo zoom) non cambia.
Allo stesso tempo, a causa del movimento immaginario dello spettatore, la distanza dalla fotocamera alla superficie cambia.
:::


### Elevazione fotocamera {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget elevazione fotocamera Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Widget elevazione fotocamera Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget elevazione fotocamera ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Widget elevazione fotocamera ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Il widget Elevazione fotocamera mostra l'elevazione della fotocamera sopra il livello della superficie. L'elevazione della fotocamera è indicata in metri / chilometri.


### Livello di zoom {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget livello di zoom Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Widget livello di zoom Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget livello di zoom ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Widget livello di zoom ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Il widget ha due visualizzazioni che vengono cambiate toccandolo:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Mostra il livello di zoom corrente della mappa.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Mostra il rapporto corrente tra una distanza su una mappa e la corrispondente distanza sulla terra. Esempi: "1 : 3 000", "1 : 3,3 M" "1: 340 K".

:::note

- Il livello di zoom iniziale (0) è il livello in cui l'intera superficie terrestre (la mappa completa) viene visualizzata sullo schermo e le sue dimensioni sono 256 per 256 pixel.
- Ogni livello di zoom successivo riduce la distanza immaginaria dal terreno di circa 2 volte.

:::

### Distanza dal bersaglio {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Widget distanza dal bersaglio 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Widget distanza dal bersaglio 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Widget distanza dal bersaglio 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Widget distanza dal bersaglio 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Il widget Distanza dalla fotocamera al bersaglio mostra la distanza tra la fotocamera (spettatore) e il centro della mappa. Questa distanza è visualizzata in metri / chilometri.


### Confronto con un'immagine satellitare {#comparison-with-a-satellite-imagery}

![Confronto](@site/static/img/plugins/development/comparison.png)

Un confronto tra la mappa di OsmAnd e la superficie terrestre rivela i seguenti schemi:

- La massima distorsione si osserva con zoom elevati (zoom 6-7 per inclinazione della fotocamera di 90 gradi).
- Al diminuire dell'inclinazione della fotocamera (da 90 a 10 gradi), la distorsione della mappa aumenta.
- Le distorsioni iniziano a essere osservate prima alle alte latitudini.

La tabella seguente contiene informazioni sull'inclinazione della fotocamera e sulla distanza dal bersaglio e sul livello di zoom a cui diventano visibili le distorsioni della mappa di OsmAnd. Se la fotocamera continua ad allontanarsi dal bersaglio, la distorsione osservata della mappa di OsmAnd aumenterà.

|Inclinazione (90) |Latitudine |Zoom massimo |Altezza, km |Distorsione|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Inclinazione (60)** |**Latitudine** |**Zoom massimo** |**Altezza, km** |**Distorsione**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Inclinazione (45)** |**Latitudine** |**Zoom massimo** |**Altezza, km** |**Distorsione**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Inclinazione (20)** |**Latitudine** |**Zoom massimo** |**Altezza, km** |**Distorsione**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Widget RAM disponibile {#available-ram-widget}

Questo widget è progettato specificamente per te quando utilizzi OsmAnd per fornire un'interazione più comoda e informativa con la RAM disponibile sul tuo dispositivo. Ti consente di monitorare facilmente e rapidamente la RAM disponibile, il che è particolarmente utile quando utilizzi OsmAnd per la navigazione. Maggiori informazioni sul widget sono disponibili nell'articolo [Widget informazioni](../widgets/info-widgets.md#available-ram).


## Simulazione traccia GPX {#gpx-track-simulation}

OsmAnd offre l'opportunità di simulare la posizione e il movimento del tuo dispositivo utilizzando una traccia GPX. A tale scopo, utilizza l'opzione *<Translate android="true" ids="simulate_location_by_gpx"/>* nelle [impostazioni](#plugin-settings) del plugin di sviluppo di OsmAnd:

- Tocca *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Seleziona una traccia per simulare la posizione e il movimento del dispositivo.
- Seleziona la velocità di simulazione del movimento.
- Tocca il pulsante Avvia.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Impostazioni di sviluppo Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Impostazioni di sviluppo Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Impostazioni di sviluppo iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Impostazioni di sviluppo iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Dopo aver avviato la simulazione, vedrai sulla schermata principale dell'app che il segno di navigazione si muove in base alla traccia GPX. Tocca il [pulsante la mia posizione](../map/interact-with-map#my-location-and-zoom) per sincronizzare *La mia posizione* (geolocalizzazione simulata del dispositivo) con il centro della mappa.
Per interrompere la simulazione del movimento del tuo dispositivo, torna alle [impostazioni](#plugin-settings) del plugin di sviluppo di OsmAnd e tocca **stop** nell'opzione **simula la tua posizione**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* è accessibile anche tramite il **[menu Azioni rapide](../widgets/quick-action.md#navigation)**.
- La velocità di movimento della posizione durante la simulazione può essere impostata uguale alla velocità registrata (1), o più veloce (x2, x3, x4).
- Puoi anche simulare il movimento lungo una traccia GPX dal [menu di navigazione](../navigation/setup/route-navigation.md#simulated-navigation) senza abilitare il plugin di sviluppo di OsmAnd. In tal caso, la tua posizione non sarà sincronizzata con la traccia.


## Articoli correlati {#related-articles}

- [Interagisci con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)

> *Ultimo aggiornamento: maggio 2023*