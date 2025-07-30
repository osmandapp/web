---
source-hash: aedd55d826014d3cfaaa5918963baf22bd911b20a8772409d2eb09fa220d9c67
sidebar_position: 6
title: Mapillary
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## نظرة عامة {#overview}

للتنقل بشكل أسرع، يمكنك في OsmAnd استخدام عروض مستوى الشارع لمساراتك أو الأماكن التي تهمك والتي توفرها [Mapillary](https://www.mapillary.com/) (يتطلب اتصالاً بالإنترنت).

تُدخل [طبقة Mapillary](https://www.mapillary.com/) صور مستوى الشارع مباشرةً إلى تطبيق OsmAnd، بحيث يمكنك بسهولة استعراض المناطق المحيطة بأي مكان يهمك أو على طول المسار الذي خططت له. إذا كانت الصور مفقودة، يمكنك إضافتها بنفسك، ويمكن للآخرين استخدامها. ظهرت هذه الميزة من تعاوننا مع [فريق Mapillary](https://www.mapillary.com/about)، لتوحيد فوائد كلا التطبيقين.

## معلمات الإعداد المطلوبة {#required-setup-parameters}

لعرض صور مستوى الشارع على خريطة OsmAnd، تحتاج إلى إجراء الإعدادات التالية:

1. تفعيل [المكوّن الإضافي Mapillary](../plugins/#enable--disable) في قسم *المكونات الإضافية* من *القائمة الرئيسية*.
2. عرض [صور مستوى الشارع](#enable-layer) على الخريطة للملف الشخصي المطلوب في قائمة تهيئة الخريطة.

## طبقة الخريطة {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![نقاط المكون الإضافي Mapillary على خريطة Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نقاط المكون الإضافي Mapillary على خريطة iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

تُعرض طبقة الخريطة التي تحتوي على صور الشوارع على خريطة OsmAnd كصفوف من النقاط الخضراء المتصلة.

- تُرفق صور مستخدمي Mapillary بهذه النقاط الخضراء.
- انقر على نقطة خضراء على الخريطة لفتح صورة عرض الشارع. يمكن أيضًا تحديد الصور من قائمة في [قائمة سياق الخريطة](#map-context-menu)، إذا كانت متاحة.
- بعد التحديد، تُقسم شاشة التطبيق إلى خريطة OsmAnd وصور شوارع Mapillary على مستوى الشارع.
- يمكنك تطبيق [فلاتر](#data-filtering) لتحديد الصور التي تريد عرضها على الخريطة.

### تفعيل الطبقة {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![صور المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المكون الإضافي Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![صور المكون الإضافي Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

لعرض صور مستوى الشارع من Mapillary على الخريطة، تحتاج إلى تفعيل هذه الطبقة في [قائمة تهيئة الخريطة](../map/configure-map-menu.md) في قسم *إظهار*.

*للوصول: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note عارض صور Mapillary

- انقر على زر *قائمة النقاط الثلاث* (&#8285;) لفتح الصورة المحددة في تطبيق [**Mapillary**](https://www.mapillary.com/mobile-apps).
- انقر على السهم للانتقال من صورة إلى أخرى.
:::

### تصفية البيانات {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![فلتر المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![فلتر المكون الإضافي Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

يمكنك إنشاء فلتر وتحديد الصور التي تريد عرضها على الخريطة. على سبيل المثال، اختر عرض الصور الحديثة فقط أو صور 360 درجة فقط.

*للوصول: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note ذاكرة التخزين المؤقت للمربعات
إذا لم تُعرض الصور المحددة، استخدم **إعادة التحميل** لـ **ذاكرة التخزين المؤقت للمربعات**.
:::

## قائمة سياق الخريطة {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة سياق خريطة المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق خريطة المكون الإضافي Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

إذا كان المكون الإضافي Mapillary مفعلاً، يمكنك عرض صور الشوارع المتاحة ضمن دائرة نصف قطرها 40 مترًا من النقطة المحددة على الخريطة. تُفتح الصور في [قائمة سياق الخريطة](../map/map-context-menu.md#online-photos).

## إضافة صور {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة سياق خريطة المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق خريطة المكون الإضافي Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

لإضافة صور، تحتاج إلى التسجيل في [تطبيق Mapillary](https://www.mapillary.com/mobile-apps). يمكنك أيضًا إضافة صور إلى قائمة سياق الخريطة بالنقر على زر *إضافة صور* في قسم [الصور عبر الإنترنت](../map/map-context-menu.md#online-photos) من قائمة سياق الخريطة. ثم سيُفتح تطبيق Mapillary.

## ويدجت Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="mapillary"/>*

![المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png) ![قائمة سياق خريطة المكون الإضافي Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate ios="true" ids="mapillary"/>*

![تفعيل تطبيق Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

يُستخدم [ويدجت Mapillary](../widgets/info-widgets.md#mapillary-widget) للوصول السريع إلى تطبيق Mapillary. يُضاف الويدجت إلى الشاشة الرئيسية تلقائيًا عند تفعيل المكون الإضافي Mapillary. يمكنك تفعيل أو تعطيل ويدجت Mapillary والويدجت الأخرى في قائمة [تهيئة الشاشة](../widgets/configure-screen.md).

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: أكتوبر 2024*