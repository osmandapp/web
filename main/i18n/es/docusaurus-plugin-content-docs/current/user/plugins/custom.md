---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title: Paquete personalizado
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

## Descripción general {#overview}

En la aplicación OsmAnd, puedes crear muchas personalizaciones y exportarlas a un archivo `.osf`. Después de añadir una descripción, una imagen y un icono, estas personalizaciones se convierten en un plugin completamente independiente. Este plugin puede incluir:

- Todas las [configuraciones de perfil](../personal/profiles.md) con un nuevo perfil.
- Conjunto específico de acciones rápidas y diseños de menú para el *Cajón* y el *Menú contextual*.
- Mapa offline personalizado dentro del plugin o sugerido para descargar.
- Tipos de rutas online y mapas online específicos.

## Cómo crear {#how-to-create}

![Paquete personalizado](@site/static/img/plugins/custom/1.jpg)

El *archivo* `.osf` es un *archivo* `.zip` renombrado que contiene archivos y carpetas `.json`. Como ejemplo, puedes descargar nuestros archivos preparados desde [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) o un plugin ya hecho desde este [enlace](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-7s_WSRSe).

Puedes modificar los archivos `.json` usando el archivo *items.json* de OsmAnd, que contiene comandos para importar archivos `.json`, archivos `.obf`, iconos y más.

Puede que necesites leer:

- Sobre el [formato `.json`](https://en.wikipedia.org/wiki/JSON).
- Sobre los [editores de texto](https://en.wikipedia.org/wiki/List_of_text_editors), con los que puedes abrir y editar archivos en formato JSON.
- Sobre el [editor Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), que se utiliza en OsmAnd como referencia.
- Puedes verificar tu código en [JSON Editor Online](https://jsoneditoronline.org/).

### items.json {#itemsjson}

<details>
<summary> Archivo <b>items.json</b> de OsmAnd. </summary>

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

## Tipos de importación {#import-types}

Existen muchos tipos de importación para el archivo *items.JSON* de OsmAnd. Todos los tipos se pueden encontrar [aquí](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), y este artículo describe solo algunos de ellos.

### Descripción del plugin {#plugin-description}

Para empezar, crea y añade tu plugin a *items.JSON*. El primer tipo de importación es **"PLUGIN"**.
   *<u>NOTA</u>*. Debes crear y añadir esta línea para cada tipo **"pluginId":"test.plugin"**, donde *test.plugin* es el nombre de tu paquete.

   ![Paquete personalizado](@site/static/img/plugins/custom/2.jpg)

### Imágenes del plugin {#plugin-images}

Para importar las imágenes del icono de tu plugin a OsmAnd, crea una carpeta (en nuestro ejemplo es la carpeta *"res"*) donde se almacenarán los archivos de imagen. El nombre de este tipo es **"RESOURCES"**.

   ![Paquete personalizado](@site/static/img/plugins/custom/4.jpg)

### Perfiles {#profiles}

Usando el tipo **"PROFILE"** puedes añadir un perfil de navegación para tu plugin. Puedes obtener toda la información sobre tu perfil de navegación en el archivo JSON exportado, donde es posible leer qué tipos de *items.JSON* se añadieron (*"QUICK_ACTIONS"*, *"POI_UI_FILTERS"*, *"MAP_SOURCES"* u otros).
NOTA: Empieza a crear un perfil de navegación con todos los parámetros, para ello exporta los perfiles de navegación y copia los elementos necesarios del archivo *profiles.osf* (items.JSON) de navegación al archivo *PLUGIN.osf* (items.JSON).

   ![Paquete personalizado](@site/static/img/plugins/custom/6.jpg)

### Descargas {#downloads}

Puedes añadir cualquier archivo como *SQLite, OBF o fuentes* para descargar usando el tipo **"DOWNLOADS"**. Los principales tipos de archivos descargables se pueden encontrar [aquí](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).
   *<u>NOTA</u>*. La etiqueta **"isHidden":"true"** (por defecto es *false*) puede ocultar los datos de tu mapa de [Mapas y Recursos](../personal/maps-resources.md#local) de OsmAnd. En **"scope-id"** puedes añadir toda la información necesaria sobre la URL, el nombre, la descripción de tu archivo y más.

   ![Paquete personalizado](@site/static/img/plugins/custom/3.jpg)

### Descargas sugeridas {#suggested-downloads}

En el tipo **"SUGGESTED_DOWNLOADS"**, puedes descargar los mapas que OsmAnd ofrece al importar un nuevo plugin.

   ![Paquete personalizado](@site/static/img/plugins/custom/7.jpg)

### Archivos {#files}

En el tipo **"FILE"** puedes añadir archivos de las carpetas de tu plugin a las carpetas de OsmAnd, cuyo "subtipo" se puede encontrar [aquí](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). En el ejemplo proporcionado, se han añadido los archivos *routing.xml* y *rendering.xml*. Puedes leer cómo crear estos archivos en los enlaces [aquí](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) y [aquí](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).

   ![Paquete personalizado](@site/static/img/plugins/custom/8.jpg)

Cuando el archivo *items.JSON* y todos los archivos de la carpeta estén listos, puedes comprimirlos en un solo documento. Después de eso, el *archivo .zip* debe renombrarse a *.osf*, y entonces tu *PLUGIN.osf* estará listo para ser añadido a la aplicación OsmAnd.

## Ejemplos {#examples}

Puedes echar un vistazo a algunos de los plugins que los usuarios de OsmAnd han creado por su cuenta:

- Plugin personalizado [USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) (datos PAD-US, senderos y carreteras USFS, recreación USFS).
- Plugin personalizado [Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf).
- Plugin personalizado [Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf).
- [UMP-PL](https://ump.waw.pl/) Polonia [plugin personalizado de mapa](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
- Plugin personalizado [OsmAnd Rendering plugin](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf).
- Plugin personalizado [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf).

## Artículos relacionados {#related-articles}

- [Interactuar con el mapa](../../user/map/interact-with-map.md)
- [Configuración global](../../user/personal/global-settings.md)
- [Mapas vectoriales (Estilos de mapa)](../../user/map/vector-maps.md)

 > *Última actualización: junio de 2024*