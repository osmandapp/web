---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title: Pacote Personalizado
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



## Visão Geral {#overview}

No aplicativo OsmAnd, você pode criar muitas personalizações e exportá-las para um arquivo `.osf`. Depois de adicionar uma descrição, imagem e ícone, essas personalizações se tornam um plugin completamente independente. Este plugin pode incluir:

- Todas as [Configurações de Perfil](../personal/profiles.md) com um novo perfil.
- Conjunto específico de ações rápidas e layouts de menu para *Gaveta* e *Menu de Contexto*.
- Mapa offline personalizado dentro do plugin ou sugerido para download.
- Tipos de roteamento online específicos e mapas online.


## Como Criar {#how-to-create}

![Pacote personalizado](@site/static/img/plugins/custom/1.jpg)

O *arquivo* `.osf` é um *arquivo* `.zip` renomeado contendo arquivos e pastas `.json`. Como exemplo, você pode baixar nossos arquivos preparados do [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) ou um plugin pronto a partir deste [link](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).

Você pode modificar arquivos `.json` usando o arquivo *items.json* do OsmAnd, que contém comandos para importar arquivos `.json`, arquivos `.obf`, ícones e muito mais.

Você pode precisar ler:

- Sobre o [formato `.json`](https://en.wikipedia.org/wiki/JSON).
- Sobre [editores de texto](https://en.wikipedia.org/wiki/List_of_text_editors), com os quais você pode abrir e editar arquivos no formato JSON.
- Sobre o [editor Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), que é usado no OsmAnd como referência.
- Você pode verificar seu código no [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> Arquivo <b>items.json</b> do OsmAnd. </summary>

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


## Tipos de Importação {#import-types}

Existem muitos tipos de importação para o arquivo *items.JSON* do OsmAnd. Todos os tipos podem ser encontrados [aqui](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), e este artigo descreve apenas alguns deles.

### Descrição do Plugin {#plugin-description}

Para começar, você cria e adiciona seu plugin ao *items.JSON*. O primeiro tipo de importação é **"PLUGIN"**.
   *<u>NOTA</u>*. Você deve criar e adicionar esta linha para cada tipo **"pluginId":"test.plugin"**, onde *test.plugin* é o nome do seu pacote.

   ![Pacote personalizado](@site/static/img/plugins/custom/2.jpg)

### Imagens do Plugin {#plugin-images}

Para importar as imagens do ícone do seu plugin para o OsmAnd, crie uma pasta (em nosso exemplo é a pasta *"res"*) onde os arquivos de imagem serão armazenados. O nome deste tipo é **"RESOURCES"**.

   ![Pacote personalizado](@site/static/img/plugins/custom/4.jpg)


### Perfis {#profiles}

Usando o tipo **"PROFILE"** você pode adicionar um perfil de navegação para o seu plugin. Você pode obter todas as informações sobre o seu perfil de navegação no arquivo JSON exportado, onde é possível ler quais tipos de *items.JSON* foram adicionados (*“QUICK_ACTIONS”, “POI_UI_FILTERS”, “MAP_SOURCES”* ou outros).
NOTA: Comece a criar um perfil de navegação com todos os parâmetros, para isso exporte os perfis de navegação e copie os itens necessários do arquivo *profiles.osf* (items.JSON) de navegação para o arquivo *PLUGIN.osf* (items.JSON).

   ![Pacote personalizado](@site/static/img/plugins/custom/6.jpg)

### Downloads {#downloads}

Você pode adicionar quaisquer arquivos como *SQLite, OBF ou fontes* para download usando o tipo **"DOWNLOADS"**. Os principais tipos de arquivos para download podem ser encontrados [aqui](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).
   *<u>NOTA</u>*. A tag **"isHidden":"true"** (por padrão é *false*) pode ocultar seus dados de mapa de [Mapas e Recursos](../personal/maps-resources.md#local) do OsmAnd. Em **"scope-id"** você pode adicionar todas as informações necessárias sobre a URL do seu arquivo, nome, descrição e muito mais.

   ![Pacote personalizado](@site/static/img/plugins/custom/3.jpg)

### Downloads Sugeridos {#suggested-downloads}

No tipo **"SUGGESTED_DOWNLOADS"**, você pode baixar os mapas que o OsmAnd oferece ao importar um novo plugin.

   ![Pacote personalizado](@site/static/img/plugins/custom/7.jpg)

### Arquivos {#files}

No tipo **"FILE"** você pode adicionar arquivos das pastas do seu plugin para as pastas do OsmAnd, cujo "subtipo" pode ser encontrado [aqui](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). No exemplo fornecido, os arquivos *routing.xml* e *rendering.xml* foram adicionados. Você pode ler sobre como criar esses arquivos nos links [aqui](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) e [aqui](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).

   ![Pacote personalizado](@site/static/img/plugins/custom/8.jpg)

Quando o arquivo *items.JSON* e todos os arquivos na pasta estiverem prontos, você pode compactá-los em um único documento. Depois disso, o *arquivo .zip* deve ser renomeado para *.osf*, e então seu *PLUGIN.osf* estará pronto para ser adicionado ao aplicativo OsmAnd.


## Exemplos {#examples}

Você pode dar uma olhada em alguns dos plugins que os usuários do OsmAnd criaram por conta própria:

 - [O plugin personalizado USA Maps](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) (dados PAD-US, trilhas e estradas USFS, recreação USFS).
 - [Plugin personalizado Anygis maps](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf).
 - [Plugin personalizado Map Legend](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf).
 - [UMP-PL](https://ump.waw.pl/) Polônia [plugin personalizado de mapa](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
 - [Plugin personalizado OsmAnd Rendering](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf).
 - [Plugin personalizado Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf).


## Artigos Relacionados {#related-articles}

- [Interagir com o Mapa](../../user/map/interact-with-map.md)
- [Configurações Globais](../../user/personal/global-settings.md)
- [Mapas Vetoriais (Estilos de Mapa)](../../user/map/vector-maps.md)

 > *Última atualização: Junho de 2024*