---
source-hash: 9ba4729ca286e34fdb20e15ca2c215a62dbbad2e5adc8d7696c39a618e9021e5
sidebar_position: 11
title:  Sviluppo OsmAnd
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

Le funzioni di test dell'app sono raccolte nel plugin Sviluppo OsmAnd. Usale a tuo rischio.

Il plugin Sviluppo OsmAnd ti permette di provare nuove funzionalità dell'app o di configurare OsmAnd per i test: simulare percorsi di navigazione, verificare le prestazioni di rendering dello schermo, ecc. Il plugin è progettato per *sviluppatori e utenti esperti* e non è necessario per l'uso quotidiano dell'applicazione.  


## Parametri di configurazione richiesti {#required-setup-parameters}

Per attivare le funzioni speciali per sviluppatori e tester:

1. [Abilita](../plugins/index.md#enable--disable) il plugin Sviluppo OsmAnd nella sezione Plugin del *Menu principale*.
2. Effettua le impostazioni necessarie nel [menu Impostazioni](#plugin-settings) del plugin.  
3. Abilita i **widget per sviluppatori** se necessario.  


## Impostazioni del plugin {#plugin-settings}

:::info info  
Le impostazioni del plugin Sviluppo OsmAnd sono globali e si applicano a tutti i profili.  
:::  

Usa uno dei seguenti percorsi per aprire le impostazioni del plugin:  

- *Menu principale → Plugin → Sviluppo OsmAnd → Impostazioni*.
- *Menu principale → [Impostazioni globali](../personal/global-settings.md) → Profilo → Impostazioni del plugin Sviluppo OsmAnd*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_ios_3_new.png)

</TabItem>

</Tabs>  


### Terreno {#terrain}

- **Usa il formato raster [SQLite format](../../technical/osmand-file-formats/osmand-sqlite) per la mappa a rilievo e la pendenza** (*Android*). Quando si utilizza il motore di rendering V2, invece di calcolare l'ombreggiatura del rilievo o le pendenze dalla mappa del Terreno 3D, utilizza le mappe raster in formato precedente per questo scopo. Può accelerare significativamente il rendering.


### Risoluzione dei problemi {#troubleshooting}

- **Simula la tua posizione** (*Android* / *iOS*). [Simula](#gpx-track-simulation) la posizione e il movimento utilizzando una traccia GPX.
- **Modalità risparmio energetico** (*Android* / *iOS*). Questa impostazione riduce [la frequenza di aggiornamento dello schermo](#map-rendering-fps-widget) di 20 fotogrammi al secondo per aiutare a risparmiare la batteria durante l'uso delle applicazioni.
- **Usa icone di posizione 3D** (*iOS*). Permette di selezionare un'icona 3D per l'[icona La mia posizione](../personal/profiles.md#my-location-appearance).
- **Simula dati OBD** (*Android* / *iOS*). Permette la simulazione dell'uso dello [scanner OBD](./vehicle-metrics.md).
- **<Translate android="true" ids="trace_rendering"/>** (*Android* / *iOS*). Visualizza le prestazioni di rendering e navigazione.
- **<Translate android="true" ids="show_debug_tile"/>** (*Android* / *iOS*). Visualizza le informazioni di debug sulla rasterizzazione delle tessere.
- **Disabilita i livelli della mappa** (*Android*). Disabilita tutti i livelli della mappa sopra la mappa vettoriale (richiede il riavvio).
- **Buffer Logcat** (*Android*). Controlla e condividi i log dettagliati dell'app.  
- **Mostra un messaggio toast per il tasto premuto** (*Android*). Visualizza un messaggio relativo al tasto.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Il rilevamento è la direzione della bussola dalla posizione corrente alla destinazione prevista. Influisce sulla *[registrazione della traccia](../plugins/trip-recording.md)*.  
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. La direzione è la direzione della bussola dalla posizione corrente verso il nord geografico. Questa opzione è abilitata per impostazione predefinita. Influisce sulla *[registrazione della traccia](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="enable_msaa"/>** (*Android*) / **<Translate ios="true" ids="enable_msaa_carplay"/>** (*iOS*). Abilita l'anti-aliasing multisample per rendere fluido il rendering della mappa. Migliora la qualità visiva dell'[icona La mia posizione](../personal/profiles.md#my-location-appearance) e della linea del percorso riducendo i bordi pixelati. Su Android, questa opzione influisce sul rendering della mappa sul dispositivo e durante l'uso di [Android Auto](../navigation/auto-car.md). Su iOS, si applica solo a [CarPlay](../navigation/car-play.md).


### Test dell'applicazione {#application-testing}

:::caution Solo Android
:::

- **Simula il primo avvio dell'app**. Imposta il flag che indica il primo avvio dell'app, mantenendo invariate tutte le altre impostazioni.  
- **Testa le istruzioni vocali**. Seleziona una voce e testala riproducendo gli annunci.  
- **Mostra i tocchi** (*iOS*). Evidenzia i tocchi sullo schermo con indicatori visivi.
- **Barra di stato trasparente**. La mappa diventa visibile sotto la barra di stato.  
- **Mostra il banner della versione gratuita**. Visualizza il banner della versione gratuita anche nella versione a pagamento.  
- **Mostra informazioni di debug**. Visualizza informazioni grafiche sul posizionamento di ogni testo sulla mappa.
- **Consenti la visualizzazione in primo piano**. Permette ai testi della mappa di essere visualizzati uno sopra l'altro.


### Algoritmi interni {#internal-algorithms}

:::caution Solo Android
:::

- **Modalità provvisoria**. Esegui l'app in modalità provvisoria (più lenta).  


### Impostazioni di memoria {#memory-settings}

:::caution Solo Android
:::  

- L'opzione **Memoria allocata per il calcolo del percorso** permette di determinare la quantità di memoria allocata per il calcolo di percorsi lunghi. Puoi usare questa opzione se è selezionato il [Calcolo del percorso standard A*](../navigation/guidance/navigation-settings.md#development-settings) nelle *Impostazioni di navigazione*.

***Calcolo di percorsi extra-lunghi:***

- Un'allocazione di memoria maggiore potrebbe influire sulle prestazioni di altre app.
- [Calcolo di percorsi di 50 km per pedoni](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Informazioni e statistiche {#info-and-statistics}

:::caution Solo Android
:::  

- **Memoria allocata**. Visualizza la memoria di sistema allocata per l'applicazione OsmAnd.  
- **Memoria nativa totale**. Visualizza la quantità totale di memoria nativa allocata all'applicazione, inclusa la memoria proporzionale.  
- **Info A-GPS**. Indica quando i dati A-GPS sono stati scaricati l'ultima volta.  
- **Info giorno/notte**.  Indica gli orari di alba e tramonto di oggi.  
- **Statistiche energetiche (media 1 / 5 / 15 minuti)**. Visualizza il livello della batteria al minuto (%) e il consumo medio di energia (mAh) su intervalli di 1, 5 e 15 minuti.  
- **Statistiche di rendering (media 1 / 5 / 15 minuti)**. Mostra le statistiche di rendering, inclusi gli FPS sugli ultimi 1000 fotogrammi, le medie di CPU (tile), CPU (tempo di inattività) e CPU (standby) su intervalli di 1, 5 e 15 minuti.  

**Pulsante:**

- **Ripristina le impostazioni predefinite del plugin**. Ripristina tutte le impostazioni del plugin ai loro valori predefiniti.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Widget FPS di rendering della mappa {#map-rendering-fps-widget}

:::info  Importante
I widget per sviluppatori di OsmAnd possono essere aggiunti allo schermo solo quando il plugin Sviluppo OsmAnd è abilitato.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*  

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>  

Il [Widget FPS](../widgets/info-widgets.md#map-rendering-fps) mostra la velocità con cui la mappa e gli elementi della mappa vengono visualizzati e aggiornati. Il valore numerico è indicato in fotogrammi al secondo (FPS).


## Widget Posizione telecamera {#camera-position-widgets}

:::info  Importante
I widget per sviluppatori di OsmAnd possono essere aggiunti allo schermo solo quando il plugin Sviluppo OsmAnd è abilitato.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Vai a: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*  

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Vai a: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>  

Puoi usare i [widget Posizione telecamera](../widgets/info-widgets.md#camera-widgets) per dare alla mappa di OsmAnd un aspetto realistico e abbinare le foto della Terra scattate sia dall'alto che dallo spazio.  


### Inclinazione telecamera {#camera-tilt}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)  

</TabItem>

</Tabs>  

Il widget Inclinazione telecamera mostra l'inclinazione tra il vettore di vista centrale della telecamera (osservatore) e un terreno piatto immaginario della terra. Il valore predefinito è 90 gradi (nessuna inclinazione).  

:::note  
L'inclinazione della telecamera viene modificata spostando la telecamera (osservatore) mentre il punto centrale sulla mappa (che stiamo guardando) rimane lo stesso. La distanza da esso (in effetti, lo zoom) non cambia.
Allo stesso tempo, a causa del movimento immaginario dell'osservatore, la distanza dalla telecamera alla superficie cambia.
:::


### Altitudine telecamera {#camera-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)  

</TabItem>

</Tabs>  

Il widget Altitudine telecamera mostra l'altitudine della telecamera sopra il livello della superficie. L'altitudine della telecamera è indicata in metri / chilometri.  


### Livello di zoom {#zoom-level}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)  

</TabItem>

</Tabs>  

Il widget ha due visualizzazioni che si alternano toccandolo:  

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Mostra il livello di zoom attuale della mappa.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Mostra il rapporto attuale tra una distanza sulla mappa e la distanza corrispondente sulla terra. Esempi: "1 : 3 000", "1 : 3,3 M" "1: 340 K".  

:::note

- Il livello di zoom iniziale (0) è il livello in cui l'intera superficie della terra (la mappa completa) viene visualizzata sullo schermo, e la sua dimensione è di 256 per 256 pixel.  
- Ogni livello di zoom successivo riduce la distanza immaginaria dal suolo di circa 2 volte.

:::

### Distanza dal bersaglio {#distance-to-target}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)  
</TabItem>

</Tabs>  

Il widget Distanza dalla telecamera al bersaglio mostra la distanza tra la telecamera (osservatore) e il centro della mappa. Questa distanza è visualizzata in metri / chilometri.  


### Confronto con un'immagine satellitare {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Un confronto tra la mappa di OsmAnd e la superficie terrestre rivela i seguenti schemi:  

- La distorsione massima si osserva con zoom elevati (zoom 6-7 per un'inclinazione della telecamera di 90 gradi).  
- Man mano che l'inclinazione della telecamera diminuisce (da 90 a 10 gradi), la distorsione della mappa aumenta.  
- Le distorsioni iniziano a essere osservate prima alle alte latitudini.

La tabella seguente contiene informazioni sull'inclinazione della telecamera e sulla distanza dal bersaglio e sul livello di zoom a cui le distorsioni della mappa di OsmAnd diventano visibili. Se la telecamera continua ad allontanarsi dal bersaglio, la distorsione osservata della mappa di OsmAnd aumenterà.  

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


## Widget Informazioni memoria {#memory-info-widget}

Questo widget è progettato specificamente per te quando usi OsmAnd per fornire un'interazione più comoda e informativa con l'utilizzo della memoria del dispositivo. Ti permette di monitorare facilmente e rapidamente i diversi tipi di memoria utilizzati dall'applicazione, il che è particolarmente utile quando si utilizza OsmAnd per la navigazione. Leggi di più sul widget nell'articolo [Widget informativi](../widgets/info-widgets.md#memory-info).


## Simulazione traccia GPX {#gpx-track-simulation}

OsmAnd offre l'opportunità di simulare la posizione e il movimento del tuo dispositivo utilizzando una traccia GPX. A tal fine, utilizza l'opzione *<Translate android="true" ids="simulate_location_by_gpx"/>* nelle [impostazioni](#plugin-settings) del plugin Sviluppo OsmAnd:  

- Tocca *<Translate android="true" ids="simulate_location_by_gpx"/>*.  
- Seleziona una traccia per simulare la posizione e il movimento del dispositivo.
- Seleziona la velocità di simulazione del movimento.
- Tocca il pulsante Avvia.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)  

</TabItem>

</Tabs>  

Dopo aver avviato la simulazione, vedrai sulla schermata principale dell'app che il marcatore di navigazione si sta muovendo secondo la traccia GPX. Tocca il [pulsante La mia posizione](../map/interact-with-map.md#my-position-and-zoom) per sincronizzare *La mia posizione* (geolocalizzazione simulata del dispositivo) con il centro della mappa.  
Per interrompere la simulazione del movimento del tuo dispositivo, torna alle [impostazioni](#plugin-settings) di Sviluppo OsmAnd e tocca **stop** nell'opzione **simula la tua posizione**.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* può essere accessibile anche tramite il **[menu Azione rapida](../widgets/quick-action.md#navigation)**.
- La velocità di movimento della posizione durante la simulazione può essere impostata uguale alla velocità registrata (1), o più veloce (x2, x3, x4).
- Puoi anche simulare il movimento lungo una traccia GPX dal [menu di navigazione](../navigation/setup/route-navigation.md#simulated-navigation) senza abilitare il plugin Sviluppo OsmAnd. In tal caso, la tua posizione non sarà sincronizzata con la traccia.


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)