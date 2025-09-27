---
source-hash: a6e0323cbd4db8c2fd02e4930fceccaef76a54dd4ddb8b27261785baf14b6d7c
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

يمكن للخريطة عرض نقاط مثل [المفضلة](#favorites)، و[نقاط الاهتمام](#points-of-interest-pois)، و[العلامات](#markers)، و[ويكيبيديا](#-wikipedia)، و[نتائج البحث](#search-results-poi)، و[الملاحظات الصوتية والمرئية](#-audio--video-points-android)، و[تعديل OSM](#-osm-edit-points).


## المفضلة {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![طبقة المفضلة في أندرويد](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![طبقة المفضلة في iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

[المفضلة](../personal/favorites.md) هي نقاط خاصة يحددها المستخدمون. بشكل افتراضي، تظهر كنجوم صفراء على الخريطة، على الرغم من أنه يمكن تخصيصها بأي لون وشكل وأيقونة. تصبح مرئية على الخريطة بدءًا من مستوى التكبير/التصغير 6.

:::info
في إصدار أندرويد من OsmAnd، يمكنك عرض مجموعات مفضلة معينة فقط على الخريطة وأثناء البحث. اذهب إلى *القائمة ← أماكني ← المفضلة*، انقر على &#8942; واختر إما *إظهارها على الخريطة* أو لا.
:::


## أسماء المفضلة ونقاط الاهتمام {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![طبقة تسميات المفضلة](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![طبقة تسميات المفضلة](@site/static/img/map/favorite_labels_layer.png)

</TabItem>

</Tabs>

بشكل افتراضي، يتم عرض المفضلة ونقاط الاهتمام (POI) بدون أسماء، حتى لا تزدحم الخريطة بالنصوص. يمكنك تمكين الأسماء في قائمة إعداد الخريطة.


## نقاط الاهتمام (POIs) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![تراكب نقاط الاهتمام في أندرويد](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![تراكب نقاط الاهتمام في iOS](@site/static/img/map/poi_overlay_ios.png)

</TabItem>

</Tabs>

[نقاط الاهتمام (POIs)](https://wiki.openstreetmap.org/wiki/Points_of_interest) هي مواقع محددة معلمة برمز على الخريطة. تشير إلى أماكن وأشياء مثيرة للاهتمام أو مفيدة وهي جزء من [الخرائط المتجهية](../map/vector-maps.md).

يتم عرض أبرز نقاط الاهتمام على الخريطة تلقائيًا. ومع ذلك، يمكنك تحديد نوع معين من نقاط الاهتمام (مثل *المطاعم*) وسيتم تمييزها جميعًا على الخريطة **بدائرة برتقالية** (بدءًا من مستوى التكبير/التصغير 9).

يمكن العثور على معلومات مفصلة حول نقطة اهتمام في [قائمة السياق](../map/map-context-menu.md) التي تظهر عند [النقر](../map/map-context-menu.md#select-an-object-single-tap) على النقطة.


### أنواع نقاط الاهتمام {#poi-types}

![تحديد نقطة اهتمام واحدة](@site/static/img/map/single_selection_android.png) ![تحديد نقاط اهتمام متعددة](@site/static/img/map/multiple_selection_android.png)

يمكنك تحديد نوع واحد أو أكثر من أنواع نقاط الاهتمام القياسية في OsmAnd، أو إنشاء [مرشح نقاط اهتمام](../search/search-poi.md) خاص بك وتحديده لعرض نقاط الاهتمام على الخريطة.

**أندرويد**. انقر على الزر الأيسر السفلي للتبديل بين تحديد نقطة اهتمام واحدة أو أكثر.


### نقاط الاهتمام حسب نمط الخريطة {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![نقاط الاهتمام على نمط الخريطة](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![نقاط الاهتمام على النمط الطبوغرافي](@site/static/img/map/poi_layer_topo_style.png)

</TabItem>

</Tabs>

لكل نوع من نقاط الاهتمام في OsmAnd أيقونة ولون محدد. قد يختلف [مستوى التكبير/التصغير](../map/vector-maps.md#details) وتصميم نقاط الاهتمام في بعض [أنماط الخرائط](../map/vector-maps.md#default-map-styles).

[اقرأ المزيد](../map/vector-maps.md#hide).


## العلامات {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![علامات الخريطة في أندرويد](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![علامات الخريطة في iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

[علامات الخريطة](../personal/markers.md) هي نقاط مؤقتة معلمة على الخريطة كأعلام. يمكن تخصيص مظهرها باستخدام **الأسهم** (أسهم على الخريطة) و**مؤشر المسافة** (خطوط الاتجاه).

يمكنك قراءة المزيد حول مظهر العلامات في هذا [المقال](../personal/markers#appearance-on-the-map).


## النقاط المرجعية للمسار {#track-waypoints}

![مسار على الخريطة](@site/static/img/map/track_point_on_map.png)

نقاط المسار (النقاط المرجعية) هي جزء من ملفات المسار (GPX). يتم عرض هذه النقاط تلقائيًا إذا كان المسار على الخريطة. تبدو ويمكن تهيئتها بشكل مشابه لـ [المفضلة](#favorites) - الأيقونة والأسماء واللون والشكل. كيفية إنشاء وإضافة نقطة مرجعية، اقرأ في [المقال](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).

[اقرأ المزيد](../map/tracks/index.md) عن المسارات على الخريطة.


## نتائج البحث (نقاط الاهتمام) {#search-results-poi}

![بحث عن نقاط الاهتمام](@site/static/img/map/poi_search.png) ![نتيجة بحث نقاط الاهتمام](@site/static/img/map/poi_search_result.png)

يمكن عرض نتائج البحث على الخريطة كطبقة خاصة لنقاط الاهتمام. أثناء البحث، انقر على صف خاص (**<Translate android="true" ids="shared_string_show_on_map"/>**) لعرض نقاط الاهتمام على الخريطة.

لإيقاف تشغيل نقاط الاهتمام، اضغط على **X** في الزاوية اليمنى العليا.

اقرأ المزيد عن [البحث](../search/index.md).


## * صور على مستوى الشارع {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![مرشح Mapillary](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![عرض الشارع من Mapillary](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

يتم عرض [صور على مستوى الشارع (Mapillary)](../plugins/mapillary.md) كنقاط خضراء على الخريطة. صور عرض الشارع مرفقة بهذه النقاط. يمكنك إنشاء [مرشح](../plugins/mapillary.md#data-filtering) وتحديد الصور التي تريد عرضها على الخريطة. لفتح صورة عرض الشارع، انقر على النقطة الخضراء.

يتطلب [إضافة Mapillary](../plugins/mapillary.md).


## * نقطة وقوف السيارات {#-parking-point}

![موقف سيارات محدود](@site/static/img/map/context_menu_limited_parking.png) ![موقف سيارات غير محدود](@site/static/img/map/context_menu_unlimited_parking.png)

[نقطة وقوف السيارات](../plugins/parking.md) هي نقطة يحددها المستخدمون على الخريطة لتخزين معلومات حول الموقع الدقيق للمركبة. يمكن تقسيمها إلى مناطق وقوف غير مقيدة ومقيدة.

يتطلب [إضافة موضع وقوف السيارات](../plugins/parking.md).


## * ويكيبيديا {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![ويكيبيديا على الخريطة](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![لغة ويكيبيديا - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

يحتوي OsmAnd على نقاط اهتمام خاصة معلمة بشعار "W" ومرتبطة بمقالات ويكيبيديا. يمكن عرض هذه النقاط تمامًا مثل أي نوع آخر من نقاط الاهتمام، عبر البحث أو بالانتقال إلى <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. ومع ذلك، هناك طريقة خاصة لتصفية مقالات ويكيبيديا حسب **اللغات المتاحة**.

[اقرأ المزيد](../plugins/wikipedia.md) عن كيفية تنزيل واستخدام ميزة ويكيبيديا في OsmAnd.


## * نقاط الصوت / الفيديو (أندرويد) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![نقاط اهتمام صوتية/مرئية](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

ملاحظات الصوت / الفيديو هي نقاط تحتوي على بيانات صوتية وصور وفيديو على الخريطة أنشأها المستخدمون.

يتطلب [إضافة ملاحظات الصوت / الفيديو](../plugins/audio-video-notes.md).


## * نقاط تعديل OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![نقاط اهتمام تعديل OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![نقاط اهتمام تعديل OSM](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

نقاط تعديل OSM هي نقاط اهتمام أنشأها المستخدمون لإضافتها إلى [مشروع OpenStreetMap](https://www.openstreetmap.org/).

يتطلب [إضافة تعديل OSM](../plugins/osm-editing.md).


## * ملاحظات OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![ملاحظات OSM](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![ملاحظات OSM](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

ملاحظات OSM هي نقاط اهتمام أنشأها المستخدمون للإبلاغ عن المشكلات المتعلقة ببيانات الخريطة في [OpenStreetMap](https://www.openstreetmap.org/). الملاحظات الجديدة (التي لم يتم تحميلها بعد إلى OpenStreetMap) معلمة باللون الأخضر بعلامة **+**، والملاحظات المغلقة معلمة باللون الأخضر بحرف "V"، والملاحظات المفتوحة معلمة باللون الأحمر. يمكنك تخصيص مستوى التكبير/التصغير لعرض الملاحظات واختيار إظهار أو إخفاء الملاحظات المغلقة.

يتطلب [إضافة تعديل OSM](../plugins/osm-editing.md).


## النقاط على طول المسار {#points-along-the-route}

النقاط المرجعية، ونقاط الاهتمام، والنقاط المفضلة، والملاحظات الصوتية/المرئية كلها تشير إلى مفهوم حفظ المواقع والمسارات بتنسيق [GPX (تنسيق تبادل GPS)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). يمكنك استخدام [نفس العلامات](../map/tracks/track-context-menu.md#display-custom-gpx-tags) لوصفها وتعديلها.

[النقاط المرجعية](#track-waypoints) هي نقاط فردية على خريطة أو مسار. يمكن استخدامها لتمييز أماكن معينة قد تكون مهمة للتنقل أو تسجيل رحلاتك. على سبيل المثال، يمكنك إنشاء نقطة مرجعية على الخريطة للإشارة إلى تقاطع مهم أو تغيير في الاتجاه.

[نقاط الاهتمام (POIs)](#points-of-interest-pois) هي أماكن ذات أهمية خاصة للمستخدمين. يمكن أن تكون هذه معالم، مطاعم، فنادق، محطات وقود، وأماكن أخرى ذات أهمية قد ترغب في تدوينها أو زيارتها.

[النقاط المفضلة](#favorites) هي أماكن يجدها المستخدمون مهمة أو مثيرة للاهتمام بشكل خاص ويحفظونها في قائمة الأماكن المفضلة لديهم. يمكن أن تشمل الأماكن أي موقع قد ترغب في العثور عليه والعودة إليه لاحقًا.

[الملاحظات الصوتية/المرئية](#-audio--video-points-android). بتنسيق GPX، يمكنك حفظ التسجيلات الصوتية والمرئية كنقاط مرجعية. يسمح لك هذا بربط ملفات الوسائط بمواقع محددة على الخريطة أو المسار.

يمكن حفظ كل أنواع هذه النقاط بتنسيق GPX لتزويدك بمعلومات الموقع والمساعدة في التنقل وتخطيط المسار. إنها تخدم أغراضًا مختلفة، لكن الفكرة العامة هي تخزين ونقل المعلومات الجغرافية حتى تتمكن من استخدامها في مهام الملاحة الخاصة بك.


## مقالات ذات صلة {#related-articles}

- [قائمة إعداد الخريطة](../map/configure-map-menu.md)
- [الخرائط المتجهية (أنماط الخرائط)](./vector-maps.md)
- [الخرائط النقطية (عبر الإنترنت / دون اتصال)](./raster-maps.md)