---
source-hash: 902bef4fdd0d54f22291ab4b5aaec0a1b3cb8cc76cda1964e3fb3c36d2adb6fb
sidebar_position: 4
title:  Pakiet niestandardowy
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


## Przegląd {#overview}

W aplikacji OsmAnd można tworzyć wiele dostosowań i eksportować je do pliku `.osf`. Po dodaniu opisu, obrazu i ikony te dostosowania stają się całkowicie niezależną wtyczką. Taka wtyczka może zawierać:

- Wszystkie [Ustawienia profilu](../personal/profiles.md) z nowym profilem.
- Określony zestaw szybkich akcji i układów menu dla *Szuflady* i *Menu kontekstowego*.
- Niestandardową mapę offline wewnątrz wtyczki lub sugerowaną do pobrania.
- Specyficzne typy trasowania online i mapy online.


## Jak utworzyć {#how-to-create}

![Pakiet niestandardowy](@site/static/img/plugins/custom/1.jpg)

Plik `.osf` to plik `.zip` o zmienionej nazwie, zawierający pliki `.json` i foldery. Jako przykład można pobrać nasze przygotowane pliki z [Dysku Google](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) lub gotową wtyczkę z tego [linku](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).  

Możesz modyfikować pliki `.json` za pomocą pliku *items.json* OsmAnd, który zawiera polecenia do importowania plików `.json`, plików `.obf`, ikon i innych.

Może być konieczne przeczytanie:

- O [formacie `.json`](https://en.wikipedia.org/wiki/JSON).
- O [edytorach tekstu](https://en.wikipedia.org/wiki/List_of_text_editors), za pomocą których można otwierać i edytować pliki w formacie JSON.
- O [edytorze Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), który jest używany w OsmAnd jako odniesienie.
- Możesz sprawdzić swój kod w [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> Plik <b>items.json</b> OsmAnd. </summary> 

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


## Typy importu {#import-types}

Istnieje wiele typów importu dla pliku *items.JSON* OsmAnd. Wszystkie typy można znaleźć [tutaj](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), a ten artykuł opisuje tylko kilka z nich.

### Opis wtyczki {#plugin-description}

Na początek tworzysz i dodajesz swoją wtyczkę do *items.JSON*. Pierwszym typem importu jest **"PLUGIN"**.  
   *<u>UWAGA</u>*. Musisz utworzyć i dodać tę linię dla każdego typu **"pluginId":"test.plugin"**, gdzie *test.plugin* to nazwa Twojego pakietu.  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/2.jpg)

### Obrazy wtyczki {#plugin-images}

Aby zaimportować obrazy ikon wtyczki do OsmAnd, utwórz folder (w naszym przykładzie jest to folder *"res ”*), w którym będą przechowywane pliki obrazów. Nazwa tego typu to **"RESOURCES"**.  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/4.jpg)


### Profile {#profiles}

Używając typu **"PROFILE ”** możesz dodać profil nawigacyjny dla swojej wtyczki. Wszystkie informacje o swoim profilu nawigacyjnym możesz uzyskać w wyeksportowanym pliku JSON, gdzie można odczytać, które typy *items.JSON* zostały dodane (*“QUICK_ACTIONS”, “POI_UI_FILTERS”, “MAP_SOURCES ”* lub inne).
UWAGA: Zacznij tworzyć profil nawigacyjny ze wszystkimi parametrami, w tym celu wyeksportuj profile nawigacyjne i skopiuj niezbędne elementy z pliku *profiles.osf* (items.JSON) do pliku *PLUGIN.osf* (items.JSON).  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/6.jpg)

### Pobrane pliki {#downloads}

Możesz dodać dowolne pliki, takie jak *SQLite, OBF lub czcionki* do pobrania, używając typu **"DOWNLOADS"**. Główne typy plików do pobrania można znaleźć [tutaj](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).  
   *<u>UWAGA</u>*. Tag **"isHidden":"true"** (domyślnie jest to *false*) może ukryć dane mapy przed [Mapami i zasobami](../personal/maps-resources.md#local-menu) OsmAnd.  W **"scope-id"** możesz dodać wszystkie niezbędne informacje o adresie URL pliku, nazwie, opisie i nie tylko.  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/3.jpg)

### Sugerowane pliki do pobrania {#suggested-downloads}

W typie **"SUGGESTED_DOWNLOADS"** możesz pobrać mapy, które OsmAnd oferuje podczas importowania nowej wtyczki.  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/7.jpg)

### Pliki {#files}

 W typie **"FILE"** możesz dodawać pliki z folderów wtyczki do folderów OsmAnd, których "podtyp" można znaleźć [tutaj](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). W podanym przykładzie dodano pliki *routing.xml* i *rendering.xml*. O tym, jak tworzyć te pliki, można przeczytać pod linkami [tutaj](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) i [tutaj](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).  

   ![Pakiet niestandardowy](@site/static/img/plugins/custom/8.jpg)

Gdy plik *items.JSON* i wszystkie pliki w folderze są gotowe, można je spakować do jednego dokumentu. Następnie plik *.zip* należy przemianować na *.osf*, a wtedy Twój *PLUGIN.osf* będzie gotowy do dodania do aplikacji OsmAnd.


## Przykłady {#examples}

Możesz rzucić okiem na niektóre wtyczki, które użytkownicy OsmAnd stworzyli samodzielnie:

 - Niestandardowa wtyczka [The USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) (dane PAD-US, szlaki i drogi USFS, rekreacja USFS).
 - Niestandardowa wtyczka [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf).
 - Niestandardowa wtyczka [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf).
 - Polska [niestandardowa wtyczka mapy](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf) [UMP-PL](https://ump.waw.pl/).
 - Niestandardowa wtyczka [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf).
 - Niestandardowa wtyczka [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf).


## Powiązane artykuły {#related-articles}

- [Interakcja z mapą](../../user/map/interact-with-map.md)
- [Ustawienia globalne](../../user/personal/global-settings.md)
- [Mapy wektorowe (Style mapy)](../../user/map/vector-maps.md)