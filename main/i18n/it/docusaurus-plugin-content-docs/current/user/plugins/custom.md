---
source-hash: 05be00df9d721de88f5dd84f0a538f8c8ba8d0e110de8bf88f54300e5f72b004
sidebar_position: 4
title:  Pacchetto personalizzato
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStoreTracker from '@site/src/components/buttons/TrackerGooglePlay.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Panoramica {#overview}

Nell'applicazione OsmAnd è possibile creare molte personalizzazioni ed esportarle in un file `.osf`. Dopo aver aggiunto una descrizione, un'immagine e un'icona, queste personalizzazioni diventano un plugin completamente indipendente. Questo plugin può includere:

- Tutte le [Impostazioni del profilo](../personal/profiles.md) con un nuovo profilo.
- Un set specifico di azioni rapide e layout di menu per il *Pannello laterale* e il *Menu contestuale*.
- Mappa offline personalizzata all'interno del plugin o suggerita per il download.
- Tipi di routing online specifici e mappe online.


## Come creare {#how-to-create}

![Pacchetto personalizzato](@site/static/img/plugins/custom/1.jpg)

Il file `.osf` è un file `.zip` rinominato che contiene file `.json` e cartelle. Come esempio, è possibile scaricare i nostri file preparati da [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) o un plugin già pronto da questo [link](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).  

È possibile modificare i file `.json` utilizzando il file `items.json` di OsmAnd, che contiene i comandi per importare file `.json`, file `.obf`, icone e altro.

Potrebbe essere necessario leggere:

- Informazioni sul [formato `.json`](https://en.wikipedia.org/wiki/JSON).
- Informazioni sugli [editor di testo](https://en.wikipedia.org/wiki/List_of_text_editors), con cui è possibile aprire e modificare file in formato JSON.
- Informazioni sull'editor [Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), che viene utilizzato in OsmAnd come riferimento.
- È possibile controllare il proprio codice in [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> File <b>items.json</b> di OsmAnd. </summary> 

```
{
   "version":1,
   "items":[

      {
         "type":"PLUGIN",
         "pluginId":"test.plugin",
         "version" : 1,
         "icon": {
             "" : "@plugin-id.png"
             
         },
         "image": {
             "" :"@plugin-image.webp"
         },
         "name":{
            "":"Test Plugin",
            "ru":"Test Plugin: RU language"
         },
         "description":{
            "":"This package is a test package and displays test information.",
            "ru":"This package is a test package and displays test information. RU language."
         }
      },

      {
         "type":"RESOURCES",
         "pluginId":"test.plugin",
         "file":"res"
      },


      {
         "type":"DOWNLOADS",
         "pluginId":"test.plugin",
         "items":[
            {
               "path":"test",
               "name":{
                  "":"My offline maps",
                  "ru":"RU: My offline maps"
               },
               "icon":{
                  "":"ic_world_globe_dark"
               },
               "header-color":"#002E64",
               "description":{
                  "text":{
                     "":"This package is a collection of online and offline map sources of various types.",
                     "ru":"RU: This package is a collection of online and offline map sources of various types."
                  },
                  "button":[
                     {
                        "":"Telegram chat OsmAnd",
                        "url":"https:\/\/t.me\/OsmAndMaps"
                     }
                  ]
               }
            },
            {
               "scope-id":"offline-maps",
               "path":"test/Waterway",
               "header-color":"#002E64",
               "name":{
                  "":"Waterway",
                  "ru":"RU: waterway"
               },
               "icon":{
                  "":"ic_world_globe_dark"
               },
               "items":[
                  {
                     "name":{
                        "":"Offline Waterway map SA",
                        "ru":"RU: Offline Waterway map SA"
                     },
                     "filename":"waterway.obf.zip",
                     "type":"map",
                     "isHidden":"true",
                     "timestamp":1582994500,
                     "containerSize":28195301,
                     "contentSize":28195301,
                     "description":{
                        "text":{
                           "":"Zoom min: 0<br />Zoom max: 19<br />Countries: SA",
                           "ru":"RU: Zoom min: 0<br />Zoom max: 19<br />Countries: SA"
                        },
                        "image":[
                           "https://drive.google.com/uc?id=16HjUHsSWNgeQI0bmuup9ohpyrg6rWkHH&export=download"
                        ]
                     },
                     "downloadurl":"https://drive.google.com/uc?id=10iP2VZexHtHC0QLhACZ1QoEy-duNN5Wg&export=download",
                     "firstsubname":{
                        "":"Waterway",
                        "ru":"RU: Waterway"
                     },
                     "secondsubname":{
                        "":"",
                        "ru":""
                     }
                }
           ]
        }] 
    },

      {
         "type":"PROFILE",
         "pluginId":"test.plugin",
         "file":"bicycle_test.json",
         "appMode":{
            "iconColor":"RED",
            "iconName":"ic_action_motorcycle_dark",
            "locIcon":"BENTLEY",
            "navIcon":"BENTLEY",
            "order":32,
            "parent":"bicycle",
            "stringKey":"bicycle_test",
            "userProfileName" : "Test Prof"
         },
         "prefs" : {
            "drawer_logo": { "" : "@logo.png"},
            "drawer_url" : { "" : "https://osmand.net"},
            "drawer_items" : { "hidden" : ["dashboard"], "order" : ["map_markers", "my_places", "search"] },
            "context_menu_items" : {},
            "configure_map_items" : {},
            "route_service":"OSMAND",
            "renderer":"test-rendering.render.xml",
            "routing_profile":"routing-test.xml/test-car"
        }
      },

      {
         "type":"FILE",
         "pluginId":"test.plugin",
         "subtype" : "rendering_style",
         "file":"\/rendering\/test-rendering.render.xml"
      },

      {
         "type":"FILE",
         "pluginId":"test.plugin",
         "subtype" : "routing_config",
         "file":"\/routing\/routing-test.xml"
      },

      {
         "type":"SUGGESTED_DOWNLOADS",
         "pluginId":"test.plugin",
         "comment-1" : "search-type are latlon (closest by latlon), worldregion (by boundaries if name matches worldRegion downloadName as we do for default types), by default natural order, limit finds first N elements",
         "comment-2" : "predefined scope-id are @type of indexes.xml map, srtm_map, road_map, wikimap, wikivoyage, hillshade, slope, fonts, voice, depth ",
         "comment-3" : "names filters ignore case by name.contains(filterName)",
         "items": [{
             "scope-id" : "test-downloads",
             "limit" : 1,
             "search-type" : "latlon"
         }, {
             "scope-id" : "road_map",
             "names" : [
                 "Poland_lesser-poland_europe_2.obf.zip", "netherlands_noord-holland_europe"]
         }, {
             "scope-id" : "wikimap",
             "search-type" : "worldregion"
         }]
      },

      {
         "type":"NAVIGATION_ICONS",
         "pluginId":"test.plugin",
         "items" : [{
            "locationIcon": {
                 "" : "@bentley-car.png"
            },
            "locationIconId": "BENTLEY", 
            "navigationIcon": {
                 "" : "@bentley-car-moving.png"
            },
            "navigationIconId": "BENTLEY"
         }]
      },
      
      {
         "type":"QUICK_ACTIONS",
         "pluginId":"test.plugin",
         "items": [{
            "name": "Test quick action",
            "actionType": "osmbug.add",
            "params": "{\"dialog\":\"false\",\"message\":\"Message\"}"
          }]
      },

      {
         "type":"POI_UI_FILTERS",
         "pluginId":"test.plugin",
          "items": [{
                "name": "Test Search",
                "filterId": "test_search",
                "acceptedTypes": "{\"sustenance\":[\"bar\",\"alpine_hut\"]}"
            }]
      },

      {
         "type":"MAP_SOURCES",
         "pluginId":"test.plugin",
         "items": [{
            "sql": false,
            "name": "OsmAnd (test)",
            "minZoom": 1,
            "maxZoom": 19,
            "url": "https:\/\/tile.osmand.net\/hd\/{0}\/{1}\/{2}.png",
            "ellipsoid": false,
            "inverted_y": false,
            "timesupported": false,
            "expire": -1,
            "inversiveZoom": false,
            "ext": ".png",
            "tileSize": 512,
            "bitDensity": 8,
            "avgSize": 18000
        }]
      }
   ]
}

```

</details>


## Tipi di importazione {#import-types}

Esistono molti tipi di importazione per il file `items.JSON` di OsmAnd. Tutti i tipi possono essere trovati [qui](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), e questo articolo ne descrive solo alcuni.

### Descrizione del plugin {#plugin-description}

Per iniziare, si crea e si aggiunge il proprio plugin a `items.JSON`. Il primo tipo di importazione è **"PLUGIN"**.  
   <u>NOTA</u>. È necessario creare e aggiungere questa riga per ogni tipo **`"pluginId":"test.plugin"`**, dove *test.plugin* è il nome del pacchetto.  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/2.jpg)

### Immagini del plugin {#plugin-images}

Per importare le immagini delle icone del plugin in OsmAnd, creare una cartella (nel nostro esempio è la cartella *`"res"`*) in cui verranno archiviati i file immagine. Il nome di questo tipo è **"RESOURCES"**.  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/4.jpg)


### Profili {#profiles}

Utilizzando il tipo **`"PROFILE"`** è possibile aggiungere un profilo di navigazione per il proprio plugin. È possibile ottenere tutte le informazioni sul profilo di navigazione nel file JSON esportato, dove è possibile leggere quali tipi di `items.JSON` sono stati aggiunti (`“QUICK_ACTIONS”`, `“POI_UI_FILTERS”`, `“MAP_SOURCES”` o altri).
NOTA: Iniziare a creare un profilo di navigazione con tutti i parametri; a tal fine, esportare i profili di navigazione e copiare gli elementi necessari dal file di navigazione `profiles.osf` (`items.JSON`) al file `PLUGIN.osf` (`items.JSON`).  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/6.jpg)

### Download {#downloads}

È possibile aggiungere qualsiasi file come `SQLite`, `OBF` o `fonts` per il download utilizzando il tipo **"DOWNLOADS"**. I principali tipi di file scaricabili si trovano [qui](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).  
   <u>NOTA</u>. Il tag **`"isHidden":"true"`** (per impostazione predefinita è `false`) può nascondere i dati della mappa da [Mappe e Risorse](../personal/maps-resources.md#local) di OsmAnd. In **`"scope-id"`** è possibile aggiungere tutte le informazioni necessarie sull'URL, il nome, la descrizione del file e altro ancora.  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/3.jpg)

### Download suggeriti {#suggested-downloads}

Nel tipo **"SUGGESTED_DOWNLOADS"**, è possibile scaricare le mappe che OsmAnd offre durante l'importazione di un nuovo plugin.  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/7.jpg)

### File {#files}

 Nel tipo **"FILE"** è possibile aggiungere file dalle cartelle del plugin alle cartelle di OsmAnd, il cui `"subtype"` può essere trovato [qui](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). Nell'esempio fornito, sono stati aggiunti i file `routing.xml` e `rendering.xml`. È possibile leggere come creare questi file ai link [qui](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) e [qui](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).  

   ![Pacchetto personalizzato](@site/static/img/plugins/custom/8.jpg)

Quando il file `items.JSON` e tutti i file nella cartella sono pronti, è possibile comprimerli in un unico documento. Dopodiché, il file `*.zip` deve essere rinominato in `*.os*f*`, e il vostro `PLUGIN.osf` sarà pronto per essere aggiunto all'applicazione OsmAnd.


## Esempi {#examples}

Potete dare un'occhiata ad alcuni dei plugin che gli utenti di OsmAnd hanno realizzato da soli:

 - Plugin personalizzato [The USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) (dati PAD-US, sentieri e strade USFS, aree ricreative USFS).
 - Plugin personalizzato [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf).
 - Plugin personalizzato [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf).
 - [UMP-PL](https://ump.waw.pl/) [plugin personalizzato per la mappa](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf) della Polonia.
 - Plugin personalizzato [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf).
 - Plugin personalizzato [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf).


## Articoli correlati {#related-articles}

- [Interagire con la mappa](../../user/map/interact-with-map.md)
- [Impostazioni globali](../../user/personal/global-settings.md)
- [Mappe vettoriali (Stili mappa)](../../user/map/vector-maps.md)