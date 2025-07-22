---
source-hash: 82f8eb0792e7d1e839f270fe978f42afb1342112ba3154466d07b464ea6b59b9
sidebar_position: 18
title:  Plugin

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

I plugin estendono in modo significativo la funzionalità di OsmAnd. Ognuno è progettato per affrontare un compito o un caso d'uso specifico, come registrare un viaggio, accedere a articoli di Wikipedia offline, visualizzare dati del terreno o fornire una vista a livello stradale.

I plugin possono essere interni, attivati nell'applicazione OsmAnd, o esterni, programmi installati separatamente. I plugin di terze parti funzionano tramite l'API di OsmAnd e possono accedere ai dati di OsmAnd.


## Configurare Plugin {#configure-plugin}

Per accedere alla funzionalità di un plugin, questo deve prima essere [abilitato](#enable--disable), e alcuni plugin richiedono un [acquisto](#purchase) prima dell'uso. Quindi, in alcuni casi, è necessario attivare un livello di mappa specifico o [configurare](#plugin-settings) un profilo utente.


### Abilita / Disabilita {#enable--disable}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Vai a: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Abilita*

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Vai a: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Acquisto {#purchase}

La maggior parte dei plugin è disponibile gratuitamente, solo i plugin nell'elenco seguente richiedono l'acquisto di una licenza [OsmAnd+ o OsmAnd Pro](../purchases/index.md) per essere utilizzati:

- [Topografia](../plugins/topography.md)
- [Rilievo 3D](../plugins/topography.md#3d-relief) (funzione del plugin Topografia)
- [Wikipedia](../plugins/wikipedia.md)
- [Vista mappa nautica](../plugins/nautical-charts.md)
- [Meteo](../plugins/weather.md)

Informazioni dettagliate sull'acquisto dell'applicazione sono disponibili nella sezione [Acquisto](../purchases/).

### Funzionalità dei plugin {#plugin-features}

I plugin di OsmAnd possono aumentare questi gruppi di funzionalità: **Livelli**, **Widget**, **Azioni menu contestuale**, **Azioni cassetto**, **Stile mappa**, **Sorgente mappa**, **Profilo**.

🤖 *- solo per la versione Android di OsmAnd.*

| Nome plugin | Funzionalità |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Livello mappa](../plugins/wikipedia.md#download-wikipedia-packages), [Menu contestuale](../plugins/wikipedia.md#wikipedia-languages) |
| [Mappe online](#online-maps) |[Livello mappa](../plugins/online-map.md#configure-map-source) |
| [Registrazione viaggio](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profilo](../plugins/trip-recording.md#profile-settings) |
| [Topografia](#topography) | [Livello mappa](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [Rilievo 3D](#topography) 🤖  | [Livello mappa](../plugins/topography.md#3d-relief) |
| [Meteo](../plugins/weather.md) | [Livello mappa](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Schermata](../plugins/weather.md#configure-screen) |
| [Vista mappa nautica](#nautical-map-view) | [Stile mappa](../plugins/nautical-charts.md#nautical-map-style), [Profilo](../plugins/nautical-charts.md#nautical-options)  |
| [Vista mappa sci](#ski-map-view) | [Stile mappa](../plugins/ski-maps.md#set-winter-style), [Profilo](../plugins/ski-maps.md#skiing-profile) |
|[Note audio/video](#audiovideo-notes) 🤖  | [Livello mappa](../plugins/audio-video-notes.md#show-all-on-the-map), [Menu contestuale](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[Modifica OpenStreetMap](#openstreetmap-editing)| [Livello mappa](../plugins/osm-editing.md#how-to-use) |
|[Posizione parcheggio](#parking-position) | [Menu contestuale](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Livello mappa](../plugins/mapillary.md#map-layer), [Menu contestuale](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[Sensori esterni](#external-sensors) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Accessibilità](#accessibility) 🤖  | [Impostazioni personalizzate](../plugins/accessibility.md#plugin-settings) |
| [Sviluppo OsmAnd](#osmand-development) | [Impostazioni personalizzate](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](#osmand-tracker) 🤖  | [Livello mappa](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Menu contestuale](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [Tracker navi AIS](#ais-vessel-tracker) 🤖  |  [Impostazioni personalizzate](../plugins/ais-tracker.md#plugin-settings) |


### Impostazioni plugin {#plugin-settings}

:::caution NOTA
Solo il plugin di sviluppo di OsmAnd e il plugin di modifica OSM modificano le impostazioni per tutti i profili. I restanti plugin sono configurati per ogni profilo separatamente.
:::

La maggior parte dei plugin fornisce impostazioni specifiche per il profilo o globali, a cui è possibile accedere tramite:

- *Menu principale → Plugin → Nome plugin → Impostazioni (&#x2699 per ios)* o
- *Menu principale → Impostazioni → Profilo → [Impostazioni plugin](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Settings plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Settings plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Settings plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Settings plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

I seguenti plugin forniscono le proprie impostazioni:

🤖 *- solo per la versione Android di OsmAnd.*

| Nome plugin | Impostazioni |
|:------------|:-------|
| [Registrazione viaggio](#trip-recording) | Configura le [modalità operative](../plugins/trip-recording.md#recording-parameters) della registrazione viaggio |
| [Meteo](#weather) | Configura le unità di misura per la visualizzazione degli eventi meteorologici |
|[Note audio/video](#audiovideo-notes) 🤖  | Seleziona [formato video, durata di archiviazione, ecc.](../plugins/audio-video-notes.md#plugin-settings) |
|[Modifica OpenStreetMap](#openstreetmap-editing)| Specifica [login](../plugins/osm-editing.md#plugin-settings) utente  |
|  [Sensori esterni](#external-sensors) 🤖  | Connetti a dispositivo esterno [Impostazioni](../plugins/external-sensors.md#settings) |
|  [Accessibilità](#accessibility) 🤖  | Le [Impostazioni](../plugins/accessibility.md#plugin-settings) ti consentono di utilizzare le [funzionalità di accessibilità di Android](https://www.android.com/accessibility/) all'interno di OsmAnd. |
| [Sviluppo OsmAnd](#osmand-development) | Le [Impostazioni plugin](../plugins/development.md#plugin-settings) ti consentono di abilitare funzionalità speciali per sviluppatori o utenti esperti |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Tutte le impostazioni sono configurabili in un'app separata |
| [Tracker navi AIS](#ais-vessel-tracker) | Le [Impostazioni plugin](../plugins/ais-tracker.md#plugin-settings) ti consentono di abilitare impostazioni speciali |

### Azioni plugin {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *utilizzando questa opzione le impostazioni del plugin possono essere ripristinate ai valori predefiniti*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *le impostazioni del plugin possono essere copiate da un altro profilo*.


## Elenco plugin {#plugins-list}


### [Wikipedia](./wikipedia.md) {#wikipedia}

Avere Wikipedia durante il tuo viaggio ti aiuta a saperne di più sui luoghi che visiti. È disponibile offline e mostra articoli di Wikipedia relativi ai punti di interesse direttamente sulla mappa.

### [Mappe online](./online-map.md) {#online-maps}

Le mappe online di OsmAnd sono un'estensione estesa al database OpenStreetMap già presente nell'applicazione. Con questo plugin, puoi aggiungere livelli alla tua mappa con informazioni da varie fonti.

### [Registrazione viaggio](./trip-recording.md) {#trip-recording}

Per raccontare una storia di dove sei stato, i dati GPS, come latitudine e longitudine della tua posizione, possono essere registrati e archiviati in un file, e quindi riutilizzati, migliorati, arricchiti con waypoint, forniti per la navigazione, condivisi con gli amici, ecc.

### [Topografia](./topography.md) {#topography}

Le informazioni topografiche, come curve di livello, ombreggiatura, pendenza, rilievo 3D, aiutano a fare una valutazione visiva della configurazione del terreno vedendo elevazione, rilievo, estremi, pendenza, punti di uguale altezza, ecc.

### [Vista mappa nautica](./nautical-charts.md) {#nautical-map-view}

La vista mappa nautica fornisce una rappresentazione grafica dettagliata di oceani, mari, aree costiere e fiumi per aiutarti a navigare sull'acqua, vedere le rotte di traffico popolari, gli ostacoli nel corso d'acqua, i porti, gli ancoraggi e altri riferimenti essenziali.

### [Vista mappa sci](./ski-maps.md) {#ski-map-view}

La vista mappa sci mostra colori invernali e piste da discesa o da fondo, nonché funivie, seggiovie, strutture e servizi nelle vicinanze, utile per navigare destinazioni come aree ricreative, stazioni sciistiche e snowpark.

### [Note audio/video](./audio-video-notes.md) {#audiovideo-notes}

Crea note audio/video per riferimento futuro, ad esempio per ricordare un evento, una scena o un'interazione. Le note audio/video create sono disponibili da *I miei luoghi* così come sulla mappa come livello individuale di storie e pensieri creati dall'utente legati a una geolocalizzazione. Solo per Android.

### [Posizione parcheggio](./parking.md) {#parking-position}

Imposta un punto sulla mappa dove hai lasciato la tua auto per strada e notifica al tuo calendario quando termina il tempo di parcheggio. Questo ti renderà più facile tenere traccia del tempo e della posizione della tua auto.

### [Modifica OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Il plugin di modifica OpenStreetMap ti consente di contribuire a OpenStreetMap, una comunità globale che crea una mappa completa del mondo e fornisce dati open-source aggiornati pubblicamente disponibili.

### [Mapillary](./mapillary.md) {#mapillary}

Visualizza viste a livello stradale dei tuoi percorsi o punti di interesse, fornite da [Mapillary](https://www.mapillary.com/) (è necessaria una connessione Internet).

### [Accessibilità](./accessibility.md) {#accessibility}

Il plugin Accessibilità rende le funzionalità di accessibilità del dispositivo direttamente disponibili in OsmAnd. Solo per Android.

### [Sensori esterni](./external-sensors.md) {#external-sensors}

Connetti sensori esterni per visualizzare i loro dati in OsmAnd e archiviare le informazioni nelle registrazioni delle tracce.

### [Metriche veicolo](./vehicle-metrics.md) {#vehicle-metrics}

Connetti scanner OBD-II per visualizzare i dati del veicolo in OsmAnd e archiviare le informazioni nelle registrazioni delle tracce.

### [Meteo](./weather.md) {#weather}

Mostra le previsioni orarie per il giorno corrente e per i 7 giorni successivi.

### [Sviluppo OsmAnd](./development.md) {#osmand-development}

Il plugin di sviluppo OsmAnd è rivolto a sviluppatori e utenti esperti. Ti consente di simulare percorsi di navigazione, controllare le prestazioni di rendering dello schermo, ecc.

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker ti aiuta a vedere dove si trovano i tuoi contatti sulla mappa in OsmAnd. Solo per Android.

### [Tracker navi AIS](./ais-tracker.md) {#ais-vessel-tracker}

Visualizza posizioni AIS e informazioni sulle navi circostanti. I dati AIS vengono ricevuti tramite rete da un ricevitore AIS esterno.

## [Crea un plugin personalizzato](./custom.md) {#create-a-custom-plugin}

Puoi creare il tuo plugin seguendo l'articolo *Pacchetto personalizzato*.


_______

> *Ultimo aggiornamento: Marzo 2025*