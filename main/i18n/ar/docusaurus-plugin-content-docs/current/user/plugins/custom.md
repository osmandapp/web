---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title:  حزمة مخصصة
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

## نظرة عامة {#overview}

في تطبيق OsmAnd، يمكنك إنشاء العديد من التخصيصات وتصديرها إلى ملف `.osf`. بعد إضافة وصف وصورة وأيقونة، تصبح هذه التخصيصات مكونًا إضافيًا مستقلاً تمامًا. قد يتضمن هذا المكون الإضافي ما يلي:

- جميع [إعدادات الملف الشخصي](../personal/profiles.md) مع ملف شخصي جديد.
- مجموعة محددة من الإجراءات السريعة وتخطيطات القائمة لـ *الدرج* و*قائمة السياق*.
- خريطة غير متصلة بالإنترنت مخصصة داخل المكون الإضافي أو مقترحة للتنزيل.
- أنواع توجيه عبر الإنترنت محددة وخرائط عبر الإنترنت.

## كيفية الإنشاء {#how-to-create}

![حزمة مخصصة](@site/static/img/plugins/custom/1.jpg)

ملف `.osf` هو ملف `.zip` معاد تسميته يحتوي على ملفات ومجلدات `.json`. على سبيل المثال، يمكنك تنزيل ملفاتنا المعدة من [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) أو مكون إضافي جاهز من هذا [الرابط](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe).

يمكنك تعديل ملفات `.json` باستخدام ملف *items.json* الخاص بـ OsmAnd، والذي يحتوي على أوامر لاستيراد ملفات `.json` وملفات `.obf` والأيقونات والمزيد.

قد تحتاج إلى قراءة:

- حول [تنسيق `.json`](https://en.wikipedia.org/wiki/JSON).
- حول [محررات النصوص](https://en.wikipedia.org/wiki/List_of_text_editors)، والتي يمكنك من خلالها فتح وتحرير الملفات بتنسيق JSON.
- حول [محرر Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text)، والذي يستخدم في OsmAnd كمرجع.
- يمكنك التحقق من الكود الخاص بك في [JSON Editor Online](https://jsoneditoronline.org/).

### items.json {#itemsjson}

<details>
<summary> ملف <b>items.json</b> الخاص بـ OsmAnd. </summary>

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

## أنواع الاستيراد {#import-types}

هناك العديد من أنواع الاستيراد لملف *items.JSON* الخاص بـ OsmAnd. يمكن العثور على جميع الأنواع [هنا](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133)، وتصف هذه المقالة عددًا قليلاً منها فقط.

### وصف المكون الإضافي {#plugin-description}

للبدء، يمكنك إنشاء المكون الإضافي الخاص بك وإضافته إلى *items.JSON*. النوع الأول من الاستيراد هو **"PLUGIN"**.
   *<u>ملاحظة</u>*. يجب عليك إنشاء وإضافة هذا السطر لكل نوع **"pluginId":"test.plugin"**، حيث *test.plugin* هو اسم الحزمة الخاصة بك.

   ![حزمة مخصصة](@site/static/img/plugins/custom/2.jpg)

### صور المكون الإضافي {#plugin-images}

لاستيراد صور أيقونة المكون الإضافي الخاص بك إلى OsmAnd، قم بإنشاء مجلد (في مثالنا هو مجلد *"res"*) حيث سيتم تخزين ملفات الصور. اسم هذا النوع هو **"RESOURCES"**.

   ![حزمة مخصصة](@site/static/img/plugins/custom/4.jpg)

### الملفات الشخصية {#profiles}

باستخدام نوع **"PROFILE"**، يمكنك إضافة ملف تعريف تنقل للمكون الإضافي الخاص بك. يمكنك الحصول على جميع المعلومات حول ملف تعريف التنقل الخاص بك في ملف JSON المصدر، حيث يمكن قراءة أنواع *items.JSON* التي تمت إضافتها (*"QUICK_ACTIONS"، "POI_UI_FILTERS"، "MAP_SOURCES"* أو غيرها).
ملاحظة: ابدأ بإنشاء ملف تعريف تنقل بجميع المعلمات، لهذا الغرض قم بتصدير ملفات تعريف التنقل، وانسخ العناصر الضرورية من ملف *profiles.osf* (items.JSON) إلى ملف *PLUGIN.osf* (items.JSON).

   ![حزمة مخصصة](@site/static/img/plugins/custom/6.jpg)

### التنزيلات {#downloads}

يمكنك إضافة أي ملفات مثل *SQLite أو OBF أو الخطوط* للتنزيل باستخدام نوع **"DOWNLOADS"**. يمكن العثور على الأنواع الرئيسية للملفات القابلة للتنزيل [هنا](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33).
   *<u>ملاحظة</u>*. يمكن للعلامة **"isHidden":"true"** (افتراضيًا هي *false*) إخفاء بيانات الخريطة الخاصة بك من [الخرائط والموارد](../personal/maps-resources.md#local) في OsmAnd. في **"scope-id"** يمكنك إضافة جميع المعلومات الضرورية حول عنوان URL لملفك واسمه ووصفه والمزيد.

   ![حزمة مخصصة](@site/static/img/plugins/custom/3.jpg)

### التنزيلات المقترحة {#suggested-downloads}

في نوع **"SUGGESTED_DOWNLOADS"**، يمكنك تنزيل الخرائط التي يقدمها OsmAnd عند استيراد مكون إضافي جديد.

   ![حزمة مخصصة](@site/static/img/plugins/custom/7.jpg)

### الملفات {#files}

في نوع **"FILE"** يمكنك إضافة ملفات من مجلدات المكون الإضافي الخاص بك إلى مجلدات OsmAnd، ويمكن العثور على "subtype" الخاص بها [هنا](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312). في المثال المقدم، تمت إضافة ملفي *routing.xml* و*rendering.xml*. يمكنك قراءة كيفية إنشاء هذه الملفات من الروابط [هنا](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) و [هنا](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles).

   ![حزمة مخصصة](@site/static/img/plugins/custom/8.jpg)

عندما يكون ملف *items.JSON* وجميع الملفات في المجلد جاهزة، يمكنك ضغطها في مستند واحد. بعد ذلك، يجب إعادة تسمية ملف *.zip* إلى *.osf*، ثم سيكون *PLUGIN.osf* الخاص بك جاهزًا للإضافة إلى تطبيق OsmAnd.

## أمثلة {#examples}

يمكنك إلقاء نظرة على بعض المكونات الإضافية التي أنشأها مستخدمو OsmAnd بأنفسهم:

- [خرائط الولايات المتحدة الأمريكية](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) مكون إضافي مخصص (بيانات PAD-US، مسارات وطرق USFS، ترفيه USFS).
- [خرائط Anygis](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) مكون إضافي مخصص.
- [تسمية الخريطة](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) مكون إضافي مخصص.
- [UMP-PL](https://ump.waw.pl/) بولندا [مكون إضافي مخصص للخرائط](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
- [مكون OsmAnd Rendering الإضافي](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) مكون إضافي مخصص.
- [مستكشف الأماكن الخارجية](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) مكون إضافي مخصص.

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهة (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: يونيو 2024*