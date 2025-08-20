---
source-hash: e005142473200bc1f9ed4e7e38e90fe7a2db323071277cbdb521ac266234d560
sidebar_position: 7
title:  النقاط على الخريطة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## نظرة عامة {#overview}

يمكن للخريطة عرض نقاط مثل [المفضلة](#favorites)، [نقاط الاهتمام](#points-of-interest-pois)، [العلامات](#markers)، [ويكيبيديا](#-wikipedia--wikipedia)، [نتائج البحث](#search-results-poi)، [ملاحظات الصوت والفيديو](#-audio--video-points-android--audio--video-points-android)، و[تعديل OSM](#-osm-edit-points--osm-edit-points).


## المفضلة {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![طبقة المفضلة أندرويد](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![طبقة المفضلة iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[المفضلة](../personal/favorites.md) هي نقاط خاصة يحددها المستخدمون. افتراضيًا، تظهر على شكل نجوم صفراء على الخريطة، على الرغم من إمكانية تخصيصها بأي لون وشكل وأيقونة. تصبح مرئية على الخريطة بدءًا من مستوى التكبير 6.

:::info
في إصدار أندرويد من OsmAnd، يمكنك عرض مجموعات معينة فقط من المفضلة على الخريطة وأثناء البحث. انتقل إلى *القائمة ← أماكني ← المفضلة*، اضغط على &#8942; واختر إما *إظهارها على الخريطة* أو لا.
:::


## أسماء المفضلة ونقاط الاهتمام {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![طبقة تسميات المفضلة](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![طبقة تسميات المفضلة](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

افتراضيًا، يتم عرض المفضلة ونقاط الاهتمام (POI) بدون أسماء، حتى لا يتم إرباك الخريطة بالنصوص. يمكنك تمكين الأسماء في قائمة تكوين الخريطة.  


## نقاط الاهتمام (POIs) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![تراكب نقاط الاهتمام أندرويد](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![تراكب نقاط الاهتمام iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[نقاط الاهتمام (POIs)](https://wiki.openstreetmap.org/wiki/Points_of_interest) هي مواقع محددة معلمة برمز على الخريطة. تشير إلى أماكن وأشياء مثيرة للاهتمام أو مفيدة وهي جزء من [خرائط المتجهات](../map/vector-maps.md).  

يتم عرض أبرز نقاط الاهتمام على الخريطة تلقائيًا. ومع ذلك، يمكنك تحديد نوع معين من نقاط الاهتمام (مثل *المطاعم*) وسيتم تمييزها جميعًا على الخريطة بـ **دائرة برتقالية** (بدءًا من مستوى التكبير 9).  

يمكن العثور على معلومات مفصلة حول نقطة الاهتمام في [قائمة السياق](../map/map-context-menu.md) التي تظهر عند [النقر](../map/map-context-menu.md#select-an-object-single-tap) على النقطة.  


### أنواع نقاط الاهتمام {#poi-types}

![تحديد نقطة اهتمام واحدة](@site/static/img/map/single_selection_android.png) ![تحديد نقاط اهتمام متعددة](@site/static/img/map/multiple_selection_android.png)

يمكنك تحديد نوع واحد أو عدة أنواع من نقاط الاهتمام القياسية في OsmAnd، أو إنشاء [فلتر نقاط اهتمام](../search/search-poi.md) خاص بك وتحديده لعرض نقاط الاهتمام على الخريطة.

**أندرويد**. اضغط على الزر السفلي الأيسر للتبديل بين تحديد نقطة اهتمام واحدة أو أكثر.


### نقاط الاهتمام بنمط الخريطة {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![نقاط الاهتمام على نمط الخريطة](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![نقاط الاهتمام على نمط الطوبوغرافيا](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

يتم تعيين أيقونة ولون محددين لكل نوع من نقاط الاهتمام في OsmAnd. قد يختلف [مستوى التكبير](../map/vector-maps.md#details) وتصميم نقاط الاهتمام في بعض [أنماط الخرائط](../map/vector-maps.md#default-map-styles).  

[اقرأ المزيد](../map/vector-maps.md#hide).


## العلامات {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![علامات الخريطة أندرويد](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![علامات الخريطة iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[علامات الخريطة](../personal/markers.md) هي نقاط مؤقتة معلمة على الخريطة كأعلام. يمكن تخصيص مظهرها باستخدام **الأسهم** (الأسهم على الخريطة) و**مؤشر المسافة** (خطوط الاتجاه).  

يمكنك قراءة المزيد عن مظهر العلامات في هذه [المقالة](../personal/markers#appearance-on-the-map).


## نقاط مسار التتبع {#track-waypoints}

![تتبع على الخريطة](@site/static/img/map/track_point_on_map.png)

نقاط التتبع (نقاط الطريق) هي جزء من ملفات التتبع (GPX). يتم عرض هذه النقاط تلقائيًا إذا كان المسار على الخريطة. تبدو ويمكن تهيئتها بشكل مشابه لـ [المفضلة](#favorites) - أيقونة، أسماء، لون، شكل. لقراءة كيفية إنشاء وإضافة نقطة طريق، اقرأ في [المقالة](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[اقرأ المزيد](../map/tracks/index.md) عن المسارات على الخريطة.


## نتائج البحث (نقاط الاهتمام) {#search-results-poi}

![بحث نقاط الاهتمام](@site/static/img/map/poi_search.png) ![نتيجة بحث نقاط الاهتمام](@site/static/img/map/poi_search_result.png)

يمكن عرض نتائج البحث على الخريطة كطبقة خاصة من نقاط الاهتمام. أثناء البحث، اضغط على صف خاص (**<Translate android="true" ids="shared_string_show_on_map"/>**) لعرض نقاط الاهتمام على الخريطة.  

لإيقاف تشغيل نقاط الاهتمام، اضغط على **X** في الزاوية العلوية اليمنى.  

اقرأ المزيد عن [البحث](../search/index.md).


## * صور مستوى الشارع {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![فلتر Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![عرض الشارع Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

يتم عرض [صور مستوى الشارع (Mapillary)](../plugins/mapillary.md) كنقاط خضراء على الخريطة. يتم إرفاق صور عرض الشارع بهذه النقاط. يمكنك إنشاء [فلتر](../plugins/mapillary.md#data-filtering) وتحديد الصور التي تريد عرضها على الخريطة. لفتح صورة عرض الشارع، اضغط على النقطة الخضراء.  

يتطلب [مكون Mapillary الإضافي](../plugins/mapillary.md).


## * نقطة وقوف السيارات {#-parking-point}

![مواقف محدودة](@site/static/img/map/context_menu_limited_parking.png) ![مواقف غير محدودة](@site/static/img/map/context_menu_unlimited_parking.png)

[نقطة وقوف السيارات](../plugins/parking.md) هي نقطة يحددها المستخدمون على الخريطة لتخزين معلومات حول الموقع الدقيق للمركبة. يمكن تقسيمها إلى مناطق وقوف سيارات غير مقيدة ومقيدة.  

يتطلب [مكون Parking position الإضافي](../plugins/parking.md).


## * ويكيبيديا {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![ويكيبيديا على الخريطة](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![لغة ويكيبيديا - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

يحتوي OsmAnd على نقاط اهتمام خاصة معلمة بشعار "W" ومرتبطة بمقالات ويكيبيديا. يمكن عرض هذه النقاط مثل أي نوع آخر من نقاط الاهتمام، عبر البحث أو بالانتقال إلى <Translate android="true" ids="configure_map"/> ← <Translate android="true" ids="layer_poi"/>. ومع ذلك، هناك طريقة خاصة لتصفية مقالات ويكيبيديا حسب **اللغات المتاحة**.  

[اقرأ المزيد](../plugins/wikipedia.md) عن كيفية تنزيل واستخدام ميزة ويكيبيديا في OsmAnd.


## * نقاط الصوت / الفيديو (أندرويد) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![نقاط اهتمام الصوت/الفيديو](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

ملاحظات الصوت / الفيديو هي نقاط تحتوي على بيانات صوتية وصور وفيديو على الخريطة أنشأها المستخدمون.  

يتطلب [مكون ملاحظات الصوت / الفيديو الإضافي](../plugins/audio-video-notes.md).


## * نقاط تحرير OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![نقاط اهتمام تحرير OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![نقاط اهتمام تحرير OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

نقاط تحرير OSM هي نقاط اهتمام أنشأها المستخدمون لإضافتها إلى [مشروع OpenStreetMap](https://www.openstreetmap.org/).  

يتطلب [مكون تحرير OSM الإضافي](../plugins/osm-editing.md).


## * ملاحظات OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![ملاحظات OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![ملاحظات OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

ملاحظات OSM هي نقاط اهتمام أنشأها المستخدمون للإبلاغ عن المشكلات المتعلقة ببيانات الخريطة في [OpenStreetMap](https://www.openstreetmap.org/). يتم تمييز الملاحظات الجديدة (التي لم يتم تحميلها بعد إلى OpenStreetMap) باللون الأخضر بعلامة **+**، ويتم تمييز الملاحظات المغلقة باللون الأخضر بعلامة "V"، ويتم تمييز الملاحظات المفتوحة باللون الأحمر. يمكنك تخصيص مستوى التكبير لعرض الملاحظات واختيار ما إذا كنت تريد إظهار الملاحظات المغلقة أو إخفائها.  

يتطلب [مكون تحرير OSM الإضافي](../plugins/osm-editing.md).


## النقاط على طول المسار {#points-along-the-route}

تشير نقاط الطريق، ونقاط الاهتمام، ونقاط المفضلة، وملاحظات الصوت/الفيديو جميعها إلى مفهوم حفظ المواقع والمسارات بتنسيق [GPX (تنسيق تبادل GPS)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). يمكنك استخدام [نفس العلامات](../map/tracks/track-context-menu.md#display-custom-gpx-tags) لوصفها وتعديلها.  

[نقاط الطريق](#track-waypoints) هي نقاط فردية على الخريطة أو المسار. يمكن استخدامها لتمييز أماكن معينة قد تكون مهمة للتنقل أو تسجيل رحلاتك. على سبيل المثال، يمكنك إنشاء نقطة طريق على الخريطة للإشارة إلى تقاطع مهم أو تغيير في الاتجاه.  

[نقاط الاهتمام (POIs)](#points-of-interest-pois) هي أماكن ذات أهمية خاصة للمستخدمين. يمكن أن تكون هذه معالم، مطاعم، فنادق، محطات وقود، وأماكن أخرى مثيرة للاهتمام قد ترغب في ملاحظتها أو زيارتها.  

[نقاط المفضلة](#favorites) هي أماكن يجدها المستخدمون مهمة أو مثيرة للاهتمام بشكل خاص ويحفظونها في قائمة الأماكن المفضلة لديهم. يمكن أن تشمل الأماكن أي موقع قد ترغب في العثور عليه والعودة إليه لاحقًا.

[ملاحظات الصوت/الفيديو](#-audio--video-points-android--audio--video-points-android). بتنسيق GPX، يمكنك حفظ تسجيلات الصوت والفيديو كنقاط طريق. يتيح لك ذلك ربط ملفات الوسائط بمواقع محددة على الخريطة أو المسار.  

يمكن حفظ جميع أنواع النقاط هذه بتنسيق GPX لتزويدك بمعلومات الموقع والمساعدة في التنقل وتخطيط المسار. تخدم أغراضًا مختلفة، ولكن الفكرة العامة هي تخزين ونقل المعلومات الجغرافية حتى تتمكن من استخدامها في مهام التنقل الخاصة بك.


## مقالات ذات صلة {#related-articles}

- [قائمة تكوين الخريطة](../map/configure-map-menu.md)
- [خرائط المتجهات (أنماط الخريطة)](./vector-maps.md)
- [خرائط الراستر (عبر الإنترنت / دون اتصال)](./raster-maps.md)

> *آخر تحديث: يونيو 2025*