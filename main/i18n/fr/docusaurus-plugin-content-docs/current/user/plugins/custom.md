---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title:  Package personnalisé
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



## Vue d'ensemble {#overview}

Dans l'application OsmAnd, vous pouvez créer de nombreuses personnalisations et les exporter vers un fichier `.osf`. Après avoir ajouté une description, une image et une icône, ces personnalisations deviennent un plugin complètement indépendant. Ce plugin peut inclure :

- Tous les [Paramètres de profil](../personal/profiles.md) avec un nouveau profil.
- Un ensemble spécifique d'actions rapides et de dispositions de menu pour le *Tiroir* et le *Menu contextuel*.
- Une carte hors ligne personnalisée à l'intérieur du plugin ou suggérée au téléchargement.
- Des types de routage en ligne et des cartes en ligne spécifiques.


## Comment créer {#how-to-create}

![Package personnalisé](@site/static/img/plugins/custom/1.jpg)

Le *fichier* `.osf` est un *fichier* `.zip` renommé contenant des fichiers et des dossiers `.json`. À titre d'exemple, vous pouvez télécharger nos fichiers préparés depuis [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) ou un plugin prêt à l'emploi depuis ce [lien](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).

Vous pouvez modifier les fichiers `.json` en utilisant le fichier *items.json* d'OsmAnd, qui contient les commandes pour importer des fichiers `.json`, des fichiers `.obf`, des icônes, et plus encore.

Vous pourriez avoir besoin de lire :

- À propos du [format `.json`](https://en.wikipedia.org/wiki/JSON).
- À propos des [éditeurs de texte](https://en.wikipedia.org/wiki/List_of_text_editors), avec lesquels vous pouvez ouvrir et modifier des fichiers au format JSON.
- À propos de l'[éditeur Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), qui est utilisé dans OsmAnd comme référence.
- Vous pouvez vérifier votre code dans [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> Fichier <b>items.json</b> d'OsmAnd. </summary>

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


## Types d'importation {#import-types}

Il existe de nombreux types d'importation pour le fichier *items.JSON* d'OsmAnd. Tous les types peuvent être trouvés [ici](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), et cet article n'en décrit que quelques-uns.

### Description du plugin {#plugin-description}

Pour commencer, vous créez et ajoutez votre plugin à *items.JSON*. Le premier type d'importation est **"PLUGIN"**.
   *<u>NOTE</u>*. Vous devez créer et ajouter cette ligne pour chaque type **"pluginId":"test.plugin"**, où *test.plugin* est le nom de votre package.

   ![Package personnalisé](@site/static/img/plugins/custom/2.jpg)

### Images du plugin {#plugin-images}

Pour importer les images de l'icône de votre plugin dans OsmAnd, créez un dossier (dans notre exemple, c'est le dossier *"res"*) où les fichiers image seront stockés. Le nom de ce type est **"RESOURCES"**.

   ![Package personnalisé](@site/static/img/plugins/custom/4.jpg)


### Profils {#profiles}

En utilisant le type **"PROFILE"**, vous pouvez ajouter un profil de navigation pour votre plugin. Vous pouvez obtenir toutes les informations sur votre profil de navigation dans le fichier JSON exporté, où il est possible de lire quels types *items.JSON* ont été ajoutés (*"QUICK_ACTIONS", "POI_UI_FILTERS", "MAP_SOURCES"* ou autres).
NOTE : Commencez par créer un profil de navigation avec tous les paramètres, pour cela exportez les profils de navigation, et copiez les éléments nécessaires du fichier *profiles.osf* (items.JSON) de navigation vers le fichier *PLUGIN.osf* (items.JSON).

   ![Package personnalisé](@site/static/img/plugins/custom/6.jpg)

### Téléchargements {#downloads}

Vous pouvez ajouter n'importe quel fichier tel que *SQLite, OBF ou des polices* à télécharger en utilisant le type **"DOWNLOADS"**. Les principaux types de fichiers téléchargeables peuvent être trouvés [ici](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).
   *<u>NOTE</u>*. La balise **"isHidden":"true"** (par défaut, elle est *false*) peut masquer les données de votre carte dans les [Cartes et ressources](../personal/maps-resources.md#local) d'OsmAnd. Dans **"scope-id"**, vous pouvez ajouter toutes les informations nécessaires sur l'URL de votre fichier, son nom, sa description, et plus encore.

   ![Package personnalisé](@site/static/img/plugins/custom/3.jpg)

### Téléchargements suggérés {#suggested-downloads}

Dans le type **"SUGGESTED_DOWNLOADS"**, vous pouvez télécharger les cartes qu'OsmAnd propose lors de l'importation d'un nouveau plugin.

   ![Package personnalisé](@site/static/img/plugins/custom/7.jpg)

### Fichiers {#files}

 Dans le type **"FILE"**, vous pouvez ajouter des fichiers de vos dossiers de plugin aux dossiers OsmAnd, dont le "subtype" peut être trouvé [ici](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). Dans l'exemple fourni, les fichiers *routing.xml* et *rendering.xml* ont été ajoutés. Vous pouvez lire comment créer ces fichiers aux liens [ici](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) et [ici](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).

   ![Package personnalisé](@site/static/img/plugins/custom/8.jpg)

Lorsque le fichier *items.JSON* et tous les fichiers du dossier sont prêts, vous pouvez les compresser en un seul document. Après cela, le *fichier .zip* doit être renommé en *.osf*, et votre *PLUGIN.osf* sera alors prêt à être ajouté à l'application OsmAnd.


## Exemples {#examples}

Vous pouvez jeter un œil à certains des plugins que les utilisateurs d'OsmAnd ont créés eux-mêmes :

 - Plugin personnalisé [The USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) (données PAD-US, sentiers et routes USFS, loisirs USFS).
 - Plugin personnalisé [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf).
 - Plugin personnalisé [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf).
 - [UMP-PL](https://ump.waw.pl/) Pologne [plugin personnalisé de carte](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
 - Plugin personnalisé [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf).
 - Plugin personnalisé [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf).


## Articles connexes {#related-articles}

- [Interagir avec la carte](../../user/map/interact-with-map.md)
- [Paramètres globaux](../../user/personal/global-settings.md)
- [Cartes vectorielles (Styles de carte)](../../user/map/vector-maps.md)

 > *Dernière mise à jour : juin 2024*