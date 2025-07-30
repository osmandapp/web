---
source-hash: 8c47a63c8420d1c5228963331f215a7aa5c8808f6c030e2e1fc5ca817821edbb
sidebar_position: 4
title:  تكوين الخريطة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## نظرة عامة {#overview}

تُعد قائمة **تكوين الخريطة** عنصرًا مهمًا في **القائمة الرئيسية** لتطبيق OsmAnd، حيث يمكنك تخصيص عرض الخريطة ليناسب احتياجاتك. يمكنك إبراز النقاط المفضلة، علامات التنقل، أو نقاط الاهتمام الخاصة على الخريطة، عرض مسارات محددة أو ملفات GPX من جهات خارجية، تراكب معلومات التضاريس، صور الأقمار الصناعية، أو أي صور نقطية أخرى متاحة، عرض معلومات النقل العام، وتغيير نمط الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

قسم **إظهار**:

![تكوين الخريطة أندرويد](@site/static/img/map/configure_map_show1_andr.png) ![تكوين الخريطة أندرويد](@site/static/img/map/configure_map_show2_andr.png)

قسم **التضاريس**:

![تكوين الخريطة أندرويد](@site/static/img/map/configure_map_topography_andr.png)

قسم **OpenStreetMap**:

![تكوين الخريطة أندرويد](@site/static/img/map/configure_map_osm_andr.png)

قسما **المسارات وعرض الخريطة**:

![تكوين الخريطة أندرويد](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تكوين الخريطة iOS](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>

تنقسم قائمة **<Translate android="true" ids="configure_map"/>** إلى فئتين:

- [معلمات نمط الخريطة](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (أو **<Translate ios="true" ids="map_widget_renderer"/>**) هي مجموعة من الإعدادات التي تسمح لك بتغيير طريقة عرض الخريطة الرئيسية.
- [طبقات الخريطة](#map-layers). تسمح لك هذه الطبقات بوضع المعلومات فوق (أو تحت) طبقة الخريطة الرئيسية ولكنها لا تغير عرض الخريطة نفسها.

**ملاحظات:**

- لتغيير المعلومات على الشاشة (الأدوات، الأيقونات)، يمكنك إجراء الإعدادات في [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- تعتمد إعدادات تكوين الخريطة على [ملفك الشخصي](../personal/profiles.md).
- انتبه - قائمة تكوين الخريطة **تُغلق** عند النقر على حقل الخريطة.

## طبقات الخريطة {#map-layers}

- [طبقة الخريطة المتجهة](../map/vector-maps.md) - تعرض جميع معلومات الخريطة المتجهة بما في ذلك OpenStreetMap، خطوط الكنتور، والبيانات البحرية.
- [مصادر الخريطة النقطية](../map/raster-maps.md#select-raster-maps) - تسمح باختيار خريطة أساسية / مصدر رئيسي / تراكب مع مستويات شفافية.
- [التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers) - تعرض معلومات المنحدر / تظليل التلال، الإغاثة ثلاثية الأبعاد.
- [حدود الخرائط المحملة](../map/vector-maps.md#show-borders) - تعرض جميع حدود الخرائط المحملة على طبقة الخريطة الرئيسية.
- [شبكة الإحداثيات](../map/vector-maps.md#coordinates-grid) - تتحكم في رؤية شبكة الإحداثيات على الخريطة.

## طبقات بيانات الخريطة {#map-data-layers}

- [المفضلة](../map/point-layers-on-map.md) - تعرض النقاط المفضلة.
- [نقاط الاهتمام](../map/point-layers-on-map.md) - تعرض نقاط الاهتمام للفئات المختارة.
- [علامات الخريطة](../map/point-layers-on-map.md) - تعرض علامات الخريطة.
- [تسميات التراكب](../map/point-layers-on-map.md) - تعرض أسماء النقاط والمفضلة على الخريطة.
- [النقل](../map/vector-maps.md#transport) - تعرض محطات النقل العام.
- [المسارات](../map/tracks/index.md) - تعرض المسارات المستوردة، المخطط لها، أو المسجلة فوق الخريطة.
- [صور مستوى الشارع](../plugins/mapillary.md#map-layer) - تعرض النقاط التي تتوفر بها صور مستوى الشارع.
- [أدلة السفر](../plan-route/travel-guides.md) - تعرض أدلة السفر على الخريطة.
- [ويكيبيديا](../plugins/wikipedia.md) - تبرز مقالات ويكيبيديا المرتبطة بالخريطة.
- [طبقات المكونات الإضافية الأخرى](../plugins/index.md#configure-plugin) - تضيف العديد من المكونات الإضافية طبقاتها بمعلومات إضافية.

## معلمات نمط الخريطة {#map-style-parameters}

تعتمد إعدادات نمط الخريطة على نمط الخريطة الرئيسي المعروض. يمكنك قراءة المزيد حول هذا في مقال [أنماط الخريطة](../map/vector-maps).

- [نمط الخريطة](../map/vector-maps.md#default-map-styles) - يتضمن OsmAnd (المدينة)، الطبوغرافية، البحرية، وغيرها.
- [وضع الخريطة](../map/vector-maps.md#map-mode) - يسمح لك باختيار عرض الخريطة والتنقل حسب وقت اليوم.
- [مكبر الخريطة](../map/vector-maps.md#map-magnifier) - يسمح بتغيير تكبير الخريطة.
- [حجم النص](../map/vector-maps.md#text-size) - يسمح بزيادة أو تقليل حجم النص على الخريطة.
- [لغة الخريطة](../map/vector-maps.md#map-language) - تسمح باختيار اللغة المفضلة المعروضة على الخريطة.
- [التفاصيل](../map/vector-maps.md#details) - تعرض كائنات محددة.
- [إخفاء](../map/vector-maps.md#hide) - تخفي كائنات محددة.
- [المسارات](../map/vector-maps.md#routes) - تسمح بإبراز المسارات ورموزها.

## تخصيص واجهة المستخدم (أندرويد) {#ui-customization-android}

لكل ملف تعريف محدد في نظام أندرويد، يمكنك تغيير ترتيب عناصر قائمة <Translate android="true" ids="configure_map"/>، إخفاء العناصر، إعادة تعيين الإعدادات الافتراضية، أو نسخها من ملف تعريف آخر. سيساعد هذا في تحسين تفاعلك مع تطبيق OsmAnd.

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![عناصر تكوين الخريطة ](@site/static/img/settings/configure-screen-ui-customization.png)

> *آخر تحديث: فبراير 2025*