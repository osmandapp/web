---
source-hash: 8b0e6840fa8a6ab7074614a2706b18f2202e61cb73c6101c59c92ac68b75cc73
sidebar_position: 4
title: Özel Paket
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

## Genel Bakış {#overview}

OsmAnd uygulamasında birçok özelleştirme oluşturabilir ve bunları bir `.osf` dosyasına aktarabilirsiniz. Bir açıklama, resim ve simge ekledikten sonra, bu özelleştirmeler tamamen bağımsız bir eklenti haline gelir. Bu eklenti şunları içerebilir:

- Yeni bir profille tüm [Profil Ayarları](../personal/profiles.md).
- *Çekmece* ve *Bağlam menüsü* için belirli hızlı eylemler ve menü düzenleri kümesi.
- Eklenti içinde özel çevrimdışı harita veya indirilmesi önerilen harita.
- Belirli çevrimiçi yönlendirme türleri ve çevrimiçi haritalar.

## Nasıl Oluşturulur {#how-to-create}

![Özel paket](@site/static/img/plugins/custom/1.jpg)

`.osf` *dosyası*, `.json` dosyaları ve klasörleri içeren yeniden adlandırılmış bir `.zip` *dosyasıdır*. Örnek olarak, hazırladığımız dosyaları [Google Drive](https://drive.google.com/drive/folders/1wDPGThkdRi9_3UrCKROgt49qi-1gM6jk?usp=sharing) adresinden veya hazır bir eklentiyi bu [bağlantıdan](https://drive.google.com/open?id=1efZ01uAIL27aTQLLoTl8KYH-ts_WSRSe) indirebilirsiniz.

`.json` dosyalarını, `.json` dosyalarını, `.obf` dosyalarını, simgeleri ve daha fazlasını içe aktarma komutlarını içeren OsmAnd'ın *items.json* dosyasını kullanarak değiştirebilirsiniz.

Şunları okumanız gerekebilir:

- [`.json` formatı](https://en.wikipedia.org/wiki/JSON) hakkında.
- [Metin düzenleyicileri](https://en.wikipedia.org/wiki/List_of_text_editors) hakkında, JSON formatındaki dosyaları açıp düzenleyebileceğiniz.
- OsmAnd'da referans olarak kullanılan [Sublime Text düzenleyicisi](https://en.wikipedia.org/wiki/Sublime_Text) hakkında.
- Kodunuzu [JSON Editor Online](https://jsoneditoronline.org/) adresinde kontrol edebilirsiniz.

### items.json {#itemsjson}

<details>
<summary> OsmAnd'ın <b>items.json</b> dosyası. </summary> 

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

## İçe Aktarma Türleri {#import-types}

OsmAnd *items.JSON* dosyası için birçok içe aktarma türü vardır. Tüm türler [burada](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L133) bulunabilir ve bu makale bunlardan sadece birkaçını açıklamaktadır.

### Eklenti Açıklaması {#plugin-description}

Başlamak için, eklentinizi oluşturur ve *items.JSON*'a eklersiniz. İlk içe aktarma türü **"PLUGIN"**'dir.
*<u>NOT</u>*. Her tür için bu satırı oluşturmalı ve eklemelisiniz: **"pluginId":"test.plugin"**, burada *test.plugin* paketinizin adıdır.

![Özel paket](@site/static/img/plugins/custom/2.jpg)

### Eklenti Resimleri {#plugin-images}

Eklenti simge resimlerinizi OsmAnd'a aktarmak için, resim dosyalarının depolanacağı bir klasör (örneğimizde *"res"* klasörü) oluşturun. Bu türün adı **"RESOURCES"**'dir.

![Özel paket](@site/static/img/plugins/custom/4.jpg)

### Profiller {#profiles}

**"PROFILE"** türünü kullanarak eklentiniz için bir navigasyon profili ekleyebilirsiniz. Navigasyon profilinizle ilgili tüm bilgileri dışa aktarılan JSON dosyasında bulabilirsiniz; burada hangi *items.JSON* türlerinin eklendiğini (*“QUICK_ACTIONS”, “POI_UI_FILTERS”, “MAP_SOURCES”* veya diğerleri) okumak mümkündür.
NOT: Tüm parametrelerle bir navigasyon profili oluşturmaya başlayın, bu amaçla navigasyon profillerini dışa aktarın ve gerekli öğeleri navigasyon *profiles.osf* (items.JSON) dosyasından *PLUGIN.osf* (items.JSON) dosyasına kopyalayın.

![Özel paket](@site/static/img/plugins/custom/6.jpg)

### İndirmeler {#downloads}

**"DOWNLOADS"** türünü kullanarak *SQLite, OBF veya yazı tipleri* gibi herhangi bir dosyayı indirmek için ekleyebilirsiniz. İndirilebilir dosyaların ana türleri [burada](https://github.com/osmandapp/Osmand/blob/master/OsmAnd/src/net/osmand/plus/download/DownloadActivityType.java#L33) bulunabilir.
*<u>NOT</u>*. **"isHidden":"true"** etiketi (varsayılan olarak *false*'tur) harita verilerinizi OsmAnd'ın [Haritalar ve Kaynaklar](../personal/maps-resources.md#local) bölümünden gizleyebilir. **"scope-id"** içinde dosyanızın URL'si, adı, açıklaması ve daha fazlası hakkında gerekli tüm bilgileri ekleyebilirsiniz.

![Özel paket](@site/static/img/plugins/custom/3.jpg)

### Önerilen İndirmeler {#suggested-downloads}

**"SUGGESTED_DOWNLOADS"** türünde, yeni bir eklenti içe aktarılırken OsmAnd'ın sunduğu haritaları indirebilirsiniz.

![Özel paket](@site/static/img/plugins/custom/7.jpg)

### Dosyalar {#files}

**"FILE"** türünde, eklenti klasörlerinizdeki dosyaları OsmAnd klasörlerine ekleyebilirsiniz; bunların "subtype"ı [burada](https://github.com/osmandapp/Osmand/blob/r3.7/OsmAnd/src/net/osmand/plus/settings/backend/SettingsHelper.java#L1312) bulunabilir. Sağlanan örnekte, *routing.xml* ve *rendering.xml* dosyaları eklenmiştir. Bu dosyaların nasıl oluşturulacağını [burada](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) ve [burada](https://github.com/osmandapp/OsmAnd-resources/tree/master/rendering_styles) bulunan bağlantılardan okuyabilirsiniz.

![Özel paket](@site/static/img/plugins/custom/8.jpg)

*items.JSON* dosyası ve klasördeki tüm dosyalar hazır olduğunda, bunları tek bir belgeye sıkıştırabilirsiniz. Bundan sonra, *.zip dosyası* *.osf* olarak yeniden adlandırılmalı ve ardından *PLUGIN.osf*'niz OsmAnd uygulamasına eklenmeye hazır olacaktır.

## Örnekler {#examples}

OsmAnd kullanıcılarının kendi başlarına yaptıkları bazı eklentilere göz atabilirsiniz:

- [ABD Haritaları](https://osmand.net/uploads/plugins/us.maps/2/us.maps-2.osf) özel eklentisi (PAD-US verileri, USFS patikaları ve yolları, USFS rekreasyonu).
- [Anygis haritaları](https://osmand.net/uploads/plugins/ru.anygis.plugin/2/ru.anygis.plugin-2.osf) özel eklentisi.
- [Harita Lejantı](https://osmand.net/uploads/plugins/legend.plugin/1/legend.plugin-1.osf) özel eklentisi.
- [UMP-PL](https://ump.waw.pl/) Polonya [harita özel eklentisi](https://osmand.net/uploads/plugins/UMP_map.plugin/1/UMP_map.plugin-1.osf).
- [OsmAnd Rendering eklentisi](https://osmand.net/uploads/plugins/osmand.rendering.plugin/1/osmand.rendering.plugin-1.osf) özel eklentisi.
- [Outdoor Explorer](https://osmand.net/uploads/plugins/outdoor-explorer.plugin/1/outdoor-explorer.plugin-1.osf) özel eklentisi.

## İlgili Makaleler {#related-articles}

- [Harita ile Etkileşim](../../user/map/interact-with-map.md)
- [Küresel Ayarlar](../../user/personal/global-settings.md)
- [Vektör Haritalar (Harita Stilleri)](../../user/map/vector-maps.md)

> *Son güncelleme: Haziran 2024*