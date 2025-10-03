---
source-hash: 05be00df9d721de88f5dd84f0a538f8c8ba8d0e110de8bf88f54300e5f72b004
sidebar_position: 4
title:  Власний пакет
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



## Огляд {#overview}

У застосунку OsmAnd ви можете створювати багато налаштувань та експортувати їх у файл `.osf`. Після додавання опису, зображення та іконки ці налаштування стають повністю незалежним плагіном. Цей плагін може містити:

- Усі [налаштування профілю](../personal/profiles.md) з новим профілем.
- Спеціальний набір швидких дій та макетів меню для *Бічної панелі* та *Контекстного меню*.
- Власна офлайн-мапа всередині плагіна або запропонована для завантаження.
- Специфічні типи онлайн-маршрутизації та онлайн-мапи.


## Як створити {#how-to-create}

![Власний пакет](@site/static/img/plugins/custom/1.jpg)

*Файл* `.osf` — це перейменований *файл* `.zip`, що містить файли та папки `.json`. Як приклад, ви можете завантажити наші підготовлені файли з [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) або готовий плагін за цим [посиланням](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).  

Ви можете змінювати файли `.json` за допомогою файлу OsmAnd *items.json*, який містить команди для імпорту файлів `.json`, `.obf`, іконок тощо.

Вам може знадобитися прочитати:

- Про [формат `.json`](https://en.wikipedia.org/wiki/JSON).
- Про [текстові редактори](https://en.wikipedia.org/wiki/List_of_text_editors), за допомогою яких можна відкривати та редагувати файли у форматі JSON.
- Про [редактор Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text), який використовується в OsmAnd як еталон.
- Ви можете перевірити свій код у [JSON Editor Online](https://jsoneditoronline.org/).


### items.json {#itemsjson}

<details>
<summary> Файл <b>items.json</b> OsmAnd. </summary> 

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


## Типи імпорту {#import-types}

Існує багато типів імпорту для файлу *items.JSON* OsmAnd. Усі типи можна знайти [тут](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133), а в цій статті описано лише деякі з них.

### Опис плагіна {#plugin-description}

Для початку ви створюєте та додаєте свій плагін до *items.JSON*. Перший тип імпорту — **"PLUGIN"**.  
   *<u>ПРИМІТКА</u>*. Ви повинні створити та додати цей рядок для кожного типу **"pluginId":"test.plugin"**, де *test.plugin* — це назва вашого пакета.  

   ![Власний пакет](@site/static/img/plugins/custom/2.jpg)

### Зображення плагіна {#plugin-images}

Щоб імпортувати зображення іконок вашого плагіна в OsmAnd, створіть папку (у нашому прикладі це папка *"res"*) де зберігатимуться файли зображень. Назва цього типу — **"RESOURCES"**.  

   ![Власний пакет](@site/static/img/plugins/custom/4.jpg)


### Профілі {#profiles}

Використовуючи тип **"PROFILE"**, ви можете додати навігаційний профіль для свого плагіна. Усю інформацію про ваш навігаційний профіль можна отримати в експортованому файлі JSON, де можна прочитати, які типи *items.JSON* були додані (*“QUICK_ACTIONS”, “POI_UI_FILTERS”, “MAP_SOURCES”* або інші).
ПРИМІТКА: Почніть створювати навігаційний профіль з усіма параметрами, для цього експортуйте навігаційні профілі та скопіюйте необхідні елементи з файлу *profiles.osf* (items.JSON) навігації до файлу *PLUGIN.osf* (items.JSON).  

   ![Власний пакет](@site/static/img/plugins/custom/6.jpg)

### Завантаження {#downloads}

Ви можете додати будь-які файли, такі як *SQLite, OBF або шрифти* для завантаження, використовуючи тип **"DOWNLOADS"**. Основні типи файлів, що завантажуються, можна знайти [тут](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).  
   *<u>ПРИМІТКА</u>*. Тег **"isHidden":"true"** (за замовчуванням *false*) може приховати дані вашої мапи з розділу [Мапи та ресурси](../personal/maps-resources.md#local) OsmAnd.  У **"scope-id"** ви можете додати всю необхідну інформацію про URL-адресу, назву, опис вашого файлу тощо.  

   ![Власний пакет](@site/static/img/plugins/custom/3.jpg)

### Запропоновані завантаження {#suggested-downloads}

У типі **"SUGGESTED_DOWNLOADS"** ви можете завантажити мапи, які OsmAnd пропонує під час імпорту нового плагіна.  

   ![Власний пакет](@site/static/img/plugins/custom/7.jpg)

### Файли {#files}

 У типі **"FILE"** ви можете додавати файли з папок вашого плагіна до папок OsmAnd, "підтип" яких можна знайти [тут](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). У наведеному прикладі були додані файли *routing.xml* та *rendering.xml*. Про те, як створити ці файли, ви можете прочитати за посиланнями [тут](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) та [тут](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).  

   ![Власний пакет](@site/static/img/plugins/custom/8.jpg)

Коли файл *items.JSON* і всі файли в папці готові, ви можете заархівувати їх в один документ. Після цього *файл .zip* слід перейменувати на *.osf*, і тоді ваш *PLUGIN.osf* буде готовий до додавання в застосунок OsmAnd.


## Приклади {#examples}

Ви можете поглянути на деякі плагіни, які користувачі OsmAnd зробили самостійно:

 - [Мапи США](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) власний плагін (дані PAD-US, стежки та дороги USFS, зони відпочинку USFS).
 - [Мапи Anygis](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) власний плагін.
 - [Легенда мапи](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) власний плагін.
 - [UMP-PL](https://ump.waw.pl/) [власний плагін мапи](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf) Польщі.
 - [Плагін рендерингу OsmAnd](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) власний плагін.
 - [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) власний плагін.


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)