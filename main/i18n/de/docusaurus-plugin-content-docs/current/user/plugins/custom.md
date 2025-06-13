---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title:  Benutzerdefiniertes Paket
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



## Überblick {#overview}

In der OsmAnd-Anwendung können Sie viele Anpassungen vornehmen und diese in eine `.osf`-Datei exportieren. Nach dem Hinzufügen einer Beschreibung, eines Bildes und eines Symbols werden diese Anpassungen zu einem völlig unabhängigen Plugin. Dieses Plugin kann Folgendes enthalten:

- Alle [Profileinstellungen](../personal/profiles.md) mit einem neuen Profil.
- Spezifischer Satz von Schnellaktionen und Menülayouts für *Drawer* und *Kontextmenü*.
- Benutzerdefinierte Offline Karte innerhalb des Plugins oder zum Herunterladen vorgeschlagen.
- Spezifische Online-Routing-Typen und Online Karten.


## Wie man erstellt {#how-to-create}

![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/1.jpg)

Die `.osf`-*Datei* ist eine umbenannte `.zip`-*Datei*, die `.json`-Dateien und Ordner enthält. Als Beispiel können Sie unsere vorbereiteten Dateien von [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) oder ein fertiges Plugin von diesem [Link](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe) herunterladen.

Sie können `.json`-Dateien mit der *items.json*-Datei von OsmAnd ändern, die Befehle zum Importieren von `.json`-Dateien, `.obf`-Dateien, Symbolen und mehr enthält.

Möglicherweise müssen Sie lesen:

- Über das [`.json`-Format](https://en.wikipedia.org/wiki/JSON).
- Über [Texteditoren](https://en.wikipedia.org/wiki/List_of_text_editors), mit denen Sie Dateien im JSON-Format öffnen und bearbeiten können.
- Über den [Sublime Text Editor](https://en.wikipedia.org/wiki/Sublime_Text), der in OsmAnd als Referenz verwendet wird.
- Sie können Ihren Code in [JSON Editor Online](https://jsoneditoronline.org/) überprüfen.


### items.json {#itemsjson}

<details>
<summary> OsmAnds <b>items.json</b> Datei. </summary>

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


## Import-Typen {#import-types}

Es gibt viele Import-Typen für die OsmAnd *items.JSON*-Datei. Alle Typen finden Sie [hier](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), und dieser Artikel beschreibt nur einige davon.

### Plugin-Beschreibung {#plugin-description}

Zuerst erstellen Sie Ihr Plugin und fügen es zu *items.JSON* hinzu. Der erste Import-Typ ist **"PLUGIN"**.
   *<u>HINWEIS</u>*. Sie müssen diese Zeile für jeden Typ erstellen und hinzufügen: **"pluginId":"test.plugin"**, wobei *test.plugin* der Name Ihres Pakets ist.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/2.jpg)

### Plugin-Bilder {#plugin-images}

Um Ihre Plugin-Symbolbilder in OsmAnd zu importieren, erstellen Sie einen Ordner (in unserem Beispiel ist es der Ordner *"res"*) in dem die Bilddateien gespeichert werden. Der Name dieses Typs ist **"RESOURCES"**.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/4.jpg)


### Profile {#profiles}

Mit dem Typ **"PROFILE"** können Sie ein Navigationsprofil für Ihr Plugin hinzufügen. Sie können alle Informationen über Ihr Navigationsprofil in der exportierten JSON-Datei erhalten, in der Sie lesen können, welche *items.JSON*-Typen hinzugefügt wurden (*"QUICK_ACTIONS", "POI_UI_FILTERS", "MAP_SOURCES"* oder andere).
HINWEIS: Beginnen Sie mit der Erstellung eines Navigationsprofils mit allen Parametern, exportieren Sie dazu Navigationsprofile und kopieren Sie die notwendigen Elemente aus der Navigations-*profiles.osf* (items.JSON)-Datei in die *PLUGIN.osf* (items.JSON)-Datei.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/6.jpg)

### Downloads {#downloads}

Sie können beliebige Dateien wie *SQLite, OBF oder Schriftarten* zum Herunterladen mit dem Typ **"DOWNLOADS"** hinzufügen. Die Haupttypen von herunterladbaren Dateien finden Sie [hier](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).
   *<u>HINWEIS</u>*. Das Tag **"isHidden":"true"** (standardmäßig ist es *false*) kann Ihre Kartendaten aus [Karten und Ressourcen](../personal/maps-resources.md#local) von OsmAnd verbergen. In **"scope-id"** können Sie alle notwendigen Informationen über die URL, den Namen, die Beschreibung und mehr Ihrer Datei hinzufügen.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/3.jpg)

### Vorgeschlagene Downloads {#suggested-downloads}

Im Typ **"SUGGESTED_DOWNLOADS"** können Sie die Karten herunterladen, die OsmAnd beim Importieren eines neuen Plugins anbietet.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/7.jpg)

### Dateien {#files}

Im Typ **"FILE"** können Sie Dateien aus Ihren Plugin-Ordnern in OsmAnd-Ordner hinzufügen, deren "subtype" [hier](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312) gefunden werden kann. Im bereitgestellten Beispiel wurden die Dateien *routing.xml* und *rendering.xml* hinzugefügt. Sie können unter den Links [hier](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) und [hier](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles) nachlesen, wie Sie diese Dateien erstellen.

   ![Benutzerdefiniertes Paket](@site/static/img/plugins/custom/8.jpg)

Wenn die *items.JSON*-Datei und alle Dateien im Ordner bereit sind, können Sie sie in einem Dokument zippen. Danach sollte die *.zip-Datei* in *.osf* umbenannt werden, und dann ist Ihre *PLUGIN.osf* bereit, zur OsmAnd-Anwendung hinzugefügt zu werden.


## Beispiele {#examples}

Sie können sich einige der Plugins ansehen, die OsmAnd-Benutzer selbst erstellt haben:

 - [The USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) benutzerdefiniertes Plugin (PAD-US Daten, USFS-Trails und -Straßen, USFS-Erholung).
 - [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) benutzerdefiniertes Plugin.
 - [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) benutzerdefiniertes Plugin.
 - [UMP-PL](https://ump.waw.pl/) Polen [Karten-Plugin](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
 - [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) benutzerdefiniertes Plugin.
 - [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) benutzerdefiniertes Plugin.


## Verwandte Artikel {#related-articles}

- [Interaktion mit der Karte](../../user/map/interact-with-map.md)
- [Globale Einstellungen](../../user/personal/global-settings.md)
- [Vektorkarten (Kartenstile)](../../user/map/vector-maps.md)

 > *Zuletzt aktualisiert: Juni 2024*