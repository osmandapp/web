---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
sidebar_position: 6
title:  مابيلاري
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

للتجول بشكل أسرع، يمكنك في أوسماند استخدام عروض مستوى الشارع لمساراتك أو الأماكن التي تهمك والتي يوفرها [مابيلاري](https://www.mapillary.com/) (يتطلب اتصالاً بالإنترنت).

تجلب طبقة [مابيلاري](https://www.mapillary.com/) صور مستوى الشارع مباشرة إلى تطبيق أوسماند، بحيث يمكنك بسهولة استعراض محيط أي مكان يهمك أو على طول المسار الذي خططت له. إذا كانت الصور مفقودة، يمكنك إضافتها بنفسك، ويمكن للآخرين استخدامها. نشأت هذه الميزة من تعاوننا مع [فريق مابيلاري](https://www.mapillary.com/about)، موحدةً فوائد كلا التطبيقين.


## إعدادات التهيئة المطلوبة {#required-setup-parameters}

لعرض صور مستوى الشارع على خريطة أوسماند، تحتاج إلى إجراء الإعدادات التالية:

1. تمكين [ملحق مابيلاري](../plugins/#enable--disable) في قسم *الملحقات* من *القائمة الرئيسية*.
2. عرض [صور مستوى الشارع](#enable-layer) على الخريطة للملف الشخصي المطلوب في قائمة تهيئة الخريطة.


## طبقة الخريطة {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نقاط ملحق مابيلاري على الخريطة في أندرويد](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نقاط ملحق مابيلاري على الخريطة في iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

تُعرض طبقة الخريطة التي تحتوي على صور الشوارع على خريطة أوسماند على شكل صفوف من النقاط الخضراء المتصلة.

- صور مستخدمي مابيلاري مرفقة بهذه النقاط الخضراء.
- انقر على نقطة خضراء على الخريطة لفتح صورة عرض الشارع. يمكن أيضًا تحديد الصور من قائمة في [قائمة سياق الخريطة](#map-context-menu)، إذا كانت متوفرة.
- بعد التحديد، تنقسم شاشة التطبيق إلى خريطة أوسماند وصور مستوى الشارع من مابيلاري.
- يمكنك تطبيق [الفلاتر](#data-filtering) لتحديد الصور التي تريد عرضها على الخريطة.


### تفعيل الطبقة {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![صور ملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![صور ملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

لعرض صور مستوى الشارع من مابيلاري على الخريطة، تحتاج إلى تفعيل هذه الطبقة في قائمة [تهيئة الخريطة](../map/configure-map-menu.md) في قسم *إظهار*.

*للوصول: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note عارض صور مابيلاري

- انقر على زر *قائمة النقاط الثلاث* (&#8285;) لفتح الصورة المحددة في تطبيق [**مابيلاري**](https://www.mapillary.com/mobile-apps).
- انقر على السهم للتنقل من صورة إلى أخرى.
:::


### فلترة البيانات {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![فلتر ملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![فلتر ملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

يمكنك إنشاء فلتر وتحديد الصور التي سيتم عرضها على الخريطة. على سبيل المثال، اختر عرض الصور الحديثة فقط أو الصور بزاوية 360 درجة فقط.

*للوصول: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note ذاكرة التخزين المؤقت للبلاطات
إذا لم يتم عرض الصور المحددة، استخدم **إعادة التحميل** لـ **ذاكرة التخزين المؤقت للبلاطات**.
:::


## قائمة سياق الخريطة {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق الخريطة لملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق الخريطة لملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

إذا تم تفعيل ملحق مابيلاري، يمكنك عرض صور الشوارع المتاحة في نطاق 40 مترًا من النقطة المحددة على الخريطة. يتم فتح الصور في [قائمة سياق الخريطة](../map/map-context-menu.md#online-photos).


## إضافة صور {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق الخريطة لملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق الخريطة لملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

لإضافة صور، تحتاج إلى التسجيل في [تطبيق مابيلاري](https://www.mapillary.com/mobile-apps). يمكنك أيضًا إضافة صور إلى قائمة سياق الخريطة عن طريق النقر على زر *إضافة صور* في قسم [الصور عبر الإنترنت](../map/map-context-menu.md#online-photos) من قائمة سياق الخريطة. بعد ذلك سيتم فتح تطبيق مابيلاري.


## ودجت مابيلاري {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="mapillary"/>*

![ملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![قائمة سياق الخريطة لملحق مابيلاري في أندرويد](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate ios="true" ids="mapillary"/>*

![قائمة سياق الخريطة لملحق مابيلاري في iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

يُستخدم [ودجت مابيلاري](../widgets/info-widgets.md#mapillary-widget) للوصول السريع إلى تطبيق مابيلاري. تتم إضافة الودجت إلى الشاشة الرئيسية تلقائيًا عند تفعيل ملحق مابيلاري. يمكنك تفعيل أو تعطيل ودجت مابيلاري والودجات الأخرى في قائمة [تهيئة الشاشة](../widgets/configure-screen.md).


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)