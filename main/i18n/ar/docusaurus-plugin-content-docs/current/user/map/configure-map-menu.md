---
source-hash: 37751eb7faea59cec520cd8d8ca456b80fef44964424340366c4b1999e2835d6
sidebar_position: 4
title:  تهيئة الخريطة
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## نظرة عامة {#overview}

قائمة **تهيئة الخريطة** هي عنصر مهم في *القائمة الرئيسية* لـ OsmAnd، حيث يمكنك تخصيص عرض الخريطة ليناسب احتياجاتك. يمكنك إبراز النقاط المفضلة، أو علامات الملاحة، أو نقاط الاهتمام الخاصة على الخريطة، وعرض مسارات محددة أو ملفات GPX من جهات خارجية، وتراكب معلومات التضاريس، أو صور الأقمار الصناعية، أو أي صور نقطية أخرى متاحة، وعرض معلومات النقل العام، وتغيير نمط الخريطة.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

قسم **إظهار**:  

![Configure map android](@site/static/img/map/configure_map_show1_andr.png)  ![Configure map android](@site/static/img/map/configure_map_show2_andr.png)  

قسم **التضاريس**:  

![Configure map android](@site/static/img/map/configure_map_topography_andr.png)  

قسم **OpenStreetMap**:  

![Configure map android](@site/static/img/map/configure_map_osm_andr.png)  

أقسام **المسارات وتصيير الخريطة**:  

![Configure map android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

قسم **عرض على الخريطة**:  

![Configure map android](@site/static/img/map/configure_map_show1_ios.png)  

قسم **التضاريس**:  

![Configure map android](@site/static/img/map/configure_map_topography_ios.png)  

قسم **OpenStreetMap**:  

![Configure map android](@site/static/img/map/configure_map_osm_ios.png)  

قسم **المسارات**:  

![Configure map android](@site/static/img/map/configure_map_routes_new_ios.png)

أقسام **نوع الخريطة ونمط الخريطة**:  

![Configure map android](@site/static/img/map/configure_map_style_ios.png)

أقسام **التراكب/التحتية ولغة**:  

![Configure map android](@site/static/img/map/configure_map_overlay_ios.png)

</TabItem>

</Tabs>


تنقسم قائمة **<Translate android="true" ids="configure_map"/>** إلى فئتين:

- [معلمات نمط الخريطة](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (أو **<Translate ios="true" ids="map_widget_renderer"/>**) هي مجموعة من الإعدادات التي تسمح لك بتغيير طريقة عرض الخريطة الرئيسية.  
- [طبقات الخريطة](#map-layers). تسمح هذه الطبقات بوضع معلومات فوق (أو تحت) طبقة الخريطة الرئيسية ولكنها لا تغير عرض الخريطة نفسها.  

**ملاحظات:**

- لتغيير المعلومات على الشاشة (الودجات، الأيقونات)، يمكنك إجراء الإعدادات في [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- تعتمد إعدادات تهيئة الخريطة على [ملفك الشخصي](../personal/profiles.md).
- انتبه - قائمة تهيئة الخريطة **تُغلق** عند النقر على حقل الخريطة.

## طبقات الخريطة {#map-layers}

- [طبقة الخريطة المتجهية](../map/vector-maps.md) - تعرض جميع معلومات الخريطة المتجهية بما في ذلك OpenStreetMap، وخطوط الكنتور، والبيانات البحرية.
- [مصادر الخريطة النقطية](../map/raster-maps.md#select-raster-maps) - تسمح باختيار خريطة الطبقة السفلية / المصدر الرئيسي / الطبقة العلوية مع مستويات الشفافية.
- [التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers) - تعرض معلومات المنحدر / تظليل التلال، والنماذج ثلاثية الأبعاد.
- [حدود الخرائط التي تم تنزيلها](../map/vector-maps.md#show-borders) - تعرض جميع حدود الخرائط التي تم تنزيلها على طبقة الخريطة الرئيسية.
- [شبكة الإحداثيات](../map/vector-maps.md#coordinates-grid) - تتحكم في رؤية شبكة الإحداثيات على الخريطة.

## طبقات بيانات الخريطة {#map-data-layers}

   - [المفضلة](../map/point-layers-on-map.md) - تعرض النقاط المفضلة.
   - [نقاط الاهتمام](../map/point-layers-on-map.md) - تعرض نقاط الاهتمام للفئات المحددة.
   - [علامات الخريطة](../map/point-layers-on-map.md) - تعرض علامات الخريطة.
   - [تسميات التراكب](../map/point-layers-on-map.md) - تظهر أسماء النقاط والمفضلة على الخريطة.
   - [النقل](../map/vector-maps.md#transport) - تظهر محطات النقل العام.
   - [المسارات](../map/tracks/index.md) - تعرض المسارات المستوردة أو المخططة أو المسجلة فوق الخريطة.
   - [صور مستوى الشارع](../plugins/mapillary.md#map-layer) - تعرض النقاط التي تتوفر بها صور على مستوى الشارع.
   - [أدلة السفر](../plan-route/travel-guides.md) - تعرض أدلة السفر على الخريطة.
   - [ويكيبيديا](../plugins/wikipedia.md) - تبرز مقالات ويكيبيديا المرتبطة بالخريطة.
   - [تحرير OSM](../plugins/osm-editing.md#osm-editing-layer) - يعرض تعديلات OpenStreetMap، والملاحظات، وطبقات المساعدة المتعلقة بالرسم على الخرائط.
   - [طبقات الإضافات الأخرى](../plugins/index.md#configure-plugin) - تضيف العديد من الإضافات طبقاتها الخاصة بمعلومات إضافية.

## معلمات نمط الخريطة {#map-style-parameters}

تعتمد إعدادات نمط الخريطة على نمط الخريطة الرئيسي المعروض. يمكنك قراءة المزيد حول هذا الموضوع في [مقالة أنماط الخرائط](../map/vector-maps).

   - [نمط الخريطة](../map/vector-maps.md#default-map-styles) - يشمل OsmAnd (المدينة)، والطبوغرافي، والبحري، وغيرها.
   - [وضع الخريطة](../map/vector-maps.md#map-mode) - يسمح لك باختيار عرض الخريطة والملاحة حسب الوقت من اليوم.
   - [مكبر الخريطة](../map/vector-maps.md#map-magnifier) - يسمح بتغيير تكبير الخريطة.
   - [حجم النص](../map/vector-maps.md#text-size) - يسمح بزيادة أو تقليل حجم النص على الخريطة.
   - [لغة الخريطة](../map/vector-maps.md#map-language) - تسمح باختيار اللغة المفضلة المعروضة على الخريطة.
   - [التفاصيل](../map/vector-maps.md#details) - تظهر كائنات محددة.
   - [إخفاء](../map/vector-maps.md#hide) - يخفي كائنات محددة.
   - [المسارات](../map/vector-maps.md#routes) - تسمح بإبراز المسارات ورموزها.  


## تخصيص واجهة المستخدم (Android) {#ui-customization-android}

لكل ملف شخصي محدد في نظام Android، يمكنك تغيير ترتيب عناصر قائمة <Translate android="true" ids="configure_map"/>، أو إخفاء العناصر، أو إعادة تعيين الإعدادات الافتراضية، أو نسخها من ملف شخصي آخر. سيساعد هذا في تحسين تفاعلك مع تطبيق OsmAnd.  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)