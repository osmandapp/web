---
source-hash: ab1e41d88d45cf90e8e97f0efc04df7c72257821a9279cc6ccbc4b8571774469
sidebar_position: 2
title:  Maps & Resources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## نظرة عامة {#overview}

في قسم **الخرائط والموارد**، يمكنك إدارة كل من الخرائط *عبر الإنترنت* و*دون اتصال*، وغيرها من الموارد المستخدمة في OsmAnd. على سبيل المثال، يمكنك تنزيل، وحذف، وإعادة تسمية، ومسح ذاكرة التخزين المؤقت، وتحديث وفحص الحجم، وتنفيذ إجراءات مختلفة.

يعمل OsmAnd مع نوعين من الخرائط: [خرائط متجهة](../map/vector-maps.md) و[خرائط نقطية](../map/raster-maps.md). يحتوي تبويب [المحلي](#local-menu) على جميع الخرائط والموارد. يمكن تنزيل أنواع الخرائط المتاحة من تبويب [التنزيلات](#downloads-menu). في تبويب [التحديثات](#updates-menu)، يمكنك تنزيل الخرائط المتاحة للتحديث واستخدام [التحديثات الحية](#live-updates). يمكنك أيضًا الوصول إلى ميزة [الخريطة الإضافية](#extra-maps) لإنشاء أنواع خرائطك الخاصة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![قائمة الخرائط أندرويد](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة الخرائط iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## أنواع الخرائط {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة تنزيل الخريطة أندرويد](@site/static/img/personal/maps/map_type_1_andr.png) ![خرائط إقليمية واسعة أندرويد](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تنزيل الخريطة iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![خرائط إقليمية واسعة أندرويد](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

تنزيل الخرائط إلى تطبيق OsmAnd هو خطوة مهمة تحدد وظائف الملاحة وكفاءتها.

### محتوى الخريطة المجاني {#free-map-content}

- **الخريطة القياسية**. توفر نظرة عامة على المنطقة بناءً على مصدر [OpenStreetMap](https://www.openstreetmap.org/) وتحتوي على خريطة، ومسارات، وعناوين، ونقاط اهتمام، ومعلومات النقل العام. اللمس يفتح شاشة تحتوي على قائمة بالمناطق في البلد المحدد ومعلومات حول المساحة التي ستشغلها هذه الخرائط على جهازك.  
- **الطرق فقط** (*أندرويد فقط*). تحتوي الخريطة على معلومات شبكة الطرق فقط للتركيز على المسارات وبنية الطرق. من خلال إزالة التفاصيل مثل المباني ونقاط الاهتمام، فهي أصغر من الخريطة القياسية. اللمس يفتح شاشة تحتوي على قائمة بالمناطق في البلد المحدد ومعلومات حول المساحة التي ستشغلها هذه الخرائط على جهازك.
- **خريطة نظرة عامة عالمية**. تقدم إصدارات OsmAnd حتى 3.8 تنزيل خريطة عالمية حتى تتمكن من عرضها على نطاق كوكبي. في الإصدارات الأحدث من OsmAnd، يتم تضمين *خريطة عالمية مصغرة* خفيفة الوزن مع التطبيق. يسمح التطبيق بتنزيل خريطة نظرة عامة عالمية أكبر مع معلومات أكثر تفصيلاً. 

:::info تحديثات الخريطة الشهرية
يرجى ملاحظة أن تحديثات الخريطة الشهرية تعتبر تنزيل خريطة آخر وتُطرح من عدد التنزيلات المجانية المتاحة.
:::

### محتوى الخريطة المدفوع {#paid-map-content}

- [خطوط الارتفاع](../plugins/topography.md#contour-lines). خريطة تحتوي على خطوط الارتفاع لتصور التضاريس.
- [خريطة التضاريس (ظلال التلال والمنحدرات)](../plugins/topography.md#hillshade-slope-and-altitude-layers). توفر الخرائط ذات الظلال أو المنحدرات معلومات إضافية عن التضاريس.
- [خريطة التضاريس (3D)](../plugins/topography.md#3d-relief). تمثيل ثلاثي الأبعاد للتضاريس لفهم أفضل لمحيطك. يجب تمكين [محرك عرض الخرائط الإصدار 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [العمق البحري والخطوط الارتفاعية](../plugins/nautical-charts.md). خرائط بحرية تظهر خطوط السواحل، والأعماق، ووسائل الملاحة، والموانئ، والمخاطر للإبحار والشراع الآمن.
- [ويكيبيديا](../plugins/wikipedia.md). خريطة متجهة مع مقالات [ويكيبيديا](https://wikipedia.org/) الموضعية جغرافيًا حول المعالم أو معلومات إضافية عن الأماكن.
- [ويكي فوياج](../plan-route/travel-guides.md). توفر خرائط متجهة مع دليل سفر افتراضي، تقدم للمستخدمين معلومات قيمة، وتوصيات، ونصائح.
- [توقعات الطقس](../plugins/weather.md). معلومات الطقس على الخريطة لتخطيط المسار بسهولة.


## قائمة التنزيلات {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![قائمة تنزيل الخريطة العامة أندرويد](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة تنزيل الخريطة العامة iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

يسمح تبويب **التنزيل** بتنزيل أنواع مختلفة من الخرائط من خوادم OsmAnd، مما يتطلب اتصال إنترنت نشط.

***لتنزيل خريطة:***

- **افتح تبويب التنزيل**، وابحث عن القسم المطلوب، واضغط على المجلد ذي الصلة لرؤية الخرائط المتاحة.

- **الخرائط المتاحة** تعرض أيقونات التنزيل، لخريطة واحدة أو ل[خرائط متعددة](#multiple-map-loading).

- **الخرائط المحملة** تعرض أيقونة خضراء مع زر قائمة:  
    - *أندرويد*: قائمة ثلاث نقاط.  
    - *iOS*: أيقونة معلومات (i).

- **الخرائط في عملية التحميل** لها أيقونة توضح ذلك. لإلغاء التنزيل، اضغط على الأيقونة. لرؤية قائمة الخرائط في قائمة التنزيل وإلغاء التنزيلات، اضغط على شريط التنزيل في منطقة معلومات ذاكرة الجهاز في تبويبي التنزيلات والتحديثات.

- **في الإصدار المجاني**، تظهر الخرائط غير المتاحة للتنزيل أيقونة [GET](../purchases/index.md)، ترتبط بصفحة الشراء.

***يتكون تبويب التنزيلات من مجموعات خرائط:***

- **معلومات ذاكرة الجهاز**. تصور كمية المساحة المشغولة والحرة على جهازك.
- **عداد الخرائط** (***الإصدار المجاني***). يعرض كمية الخرائط المتبقية للتنزيل.
- [الخرائط الإضافية](#extra-maps). يعرض بيانات الخريطة للحزمة [المخصصة](../plugins/custom.md).
- **المناطق**. قائمة حسب القارة والمنطقة العالمية: *أفريقيا، أنتاركتيكا، آسيا، أستراليا وأوقيانوسيا، أمريكا الوسطى، أوروبا، أمريكا الشمالية، روسيا، وأمريكا الجنوبية.*
- [الخرائط العالمية](#world-maps). قائمة بالخرائط للعالم بأكمله: *تصحيح الارتفاع العالمي (أندرويد فقط)*، *خريطة نظرة عامة عالمية*، *الكل عالمي (توقعات الطقس)*
- [الخرائط البحرية](../plugins/nautical-charts.md) ([*ميزة مدفوعة*](../purchases/index.md)). خرائط متجهة مع ارتفاعات كنقاط أو خطوط.
- [دليل السفر (ويكي فوياج)](../plan-route/travel-guides.md) ([*ميزة مدفوعة*](../purchases/index.md)). خرائط متجهة مع مجموعة من المقالات بتنسيق HTML وبالإضافة إلى ملفات GPX.
- **خرائط أخرى**. خرائط لا يمكن تخصيصها للهيكل الحالي للخرائط لأنها غير مدعومة أو ستكون متاحة في إصدارات مستقبلية.
- [تعليمات الصوت](../navigation/guidance/voice-navigation.md) (*أندرويد فقط*). حزم صوتية لنطق تعليمات الملاحة.
- [خطوط الخريطة](../map/vector-maps.md#map-fonts-android) (*أندرويد فقط*). ملفات خط إضافية لعرض النص على الخريطة.
- **البحث عن مدينة أو منطقة** (*أندرويد فقط*). أداة بحث سريع في أعلى تبويب التنزيلات (أيقونة عدسة مكبرة) للعثور على المدينة أو المنطقة المطلوبة.

### الخرائط العالمية {#world-maps}

في قائمة تنزيل الخرائط، هناك قسم **الخرائط العالمية** يوفر الوصول لتنزيل خرائط مختلفة للعالم، مكملًا وظائف التطبيق.  

- **تصحيح الارتفاع العالمي** (*أندرويد فقط*). يحتوي هذا الملف على تصحيحات الارتفاع لتعويض انحناء الكوكب.
- **خريطة نظرة عامة عالمية**. توفر نظرة عامة واسعة على سطح الأرض، مفيدة لتخطيط المسارات طويلة الأمد والاستكشاف العرضي.
- **الكل عالمي (توقعات الطقس)**. يسمح لك بتنزيل خريطة مع معلومات الطقس.


### الخرائط الإضافية {#extra-maps}

يدعم OsmAnd نقل الإعدادات والبيانات الخاصة بالملف الشخصي، بما في ذلك ملفات العرض، والخطوط، والمسارات، والخرائط، والإضافات المخصصة. أنشئ مجلد خريطة مخصص باستخدام ملف إضافة `.osf` (تنسيق مضغوط `.zip`).

لاستيراد ملف:

1. حدد موقع ملف `.osf` في تخزين جهازك، أو الرسائل، أو البريد الإلكتروني.
2. اضغط لفتحه مع OsmAnd.
3. ستظهر الإضافة في قسم **قائمة الإضافات**، حيث يمكن تفعيلها.
4. سيظهر مجلد مقابل بعد ذلك في قسم **الخرائط الإضافية** في تبويب [التنزيلات](#downloads-menu).

اقرأ المزيد في مقالة [**الحزمة المخصصة**](../plugins/custom).


### تحميل خرائط متعددة {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة تنزيل الخريطة العامة أندرويد](@site/static/img/personal/maps/multiple_maps_andr.png) ![قائمة إلغاء التحديد أندرويد](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تنزيل الخريطة العامة iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![قائمة إلغاء التحديد iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

بالنسبة للدول التي تتكون من **خرائط مناطق متعددة**، يمكنك استخدام تحميل جماعي لخرائط متعددة. تُعرض الخرائط المتاحة لهذا النوع من التنزيل مع أيقونات سهم تنزيل مزدوج وتسمية بعدد المناطق داخلها (مثل خطوط الارتفاع / جميع المناطق: 10). يمكنك اختيار كمية الخرائط للتنزيل.


## قائمة المحلي {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![تبويب المحلي أندرويد 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![تبويب المحلي أندرويد 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

يوفر تبويب المحلي نظرة عامة على استخدام التخزين لجميع بيانات OsmAnd على جهازك. يتم تقسيم البيانات إلى ثلاثة أقسام ملونة للوضوح، مع ترتيب العناصر حسب الحجم من الأكبر إلى الأصغر. يعرض كل قسم فقط العناصر التي تحتوي على بيانات محملة:

- ***الموارد*** (*أزرق*).  
    تشمل الخرائط ([القياسية](../map/vector-maps.md)، &nbsp;[البحرية](../plugins/nautical-charts.md)، &nbsp;[الطبوغرافية](../plugins/topography.md)، &nbsp;[الطقس](../plugins/weather.md))، &nbsp;[ويكيبيديا](../plugins/wikipedia.md) و[دليل السفر](../plan-route/travel-guides.md)، &nbsp;[التحديثات الحية](../personal/maps-resources.md#live-updates)، &nbsp;**الطرق فقط**،  &nbsp;[مصادر الخريطة](../map/raster-maps.md)، &nbsp;[أنماط العرض](../map/vector-maps.md#default-map-styles)، &nbsp;**خطوط الخريطة، &nbsp;تعليمات الصوت (مسجلة وTTS)، &nbsp;ذاكرة التخزين المؤقت**.  

- ***أماكني*** (*أصفر*).  
    تشمل [المفضلة](../personal/favorites.md)، &nbsp;[المسارات](../personal/tracks/manage-tracks.md)، &nbsp;[ملاحظات OSM](../plugins/osm-editing.md#create--modify-osm-note)، &nbsp;[تعديلات OSM](../plugins/osm-editing.md#osm-editing-layer)، &nbsp;[ملاحظات الصوت/الفيديو](../plugins/audio-video-notes.md)، &nbsp;[علامات الخريطة](../personal/markers.md)، &nbsp;[التاريخ](../personal/global-settings.md#history)، &nbsp;*الجدول الزمني*.  

- ***الإعدادات*** (*أخضر*).  
    تشمل [الملفات الشخصية](../personal/profiles.md)، &nbsp;[الألوان](../personal/color-palette-schemes.md) و**إعدادات التطبيق الأخرى**.

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![قائمة تبويب المحلي iOS](@site/static/img/personal/maps/local_tab_ios.png)

يوفر تبويب المحلي نظرة عامة على استخدام التخزين لخرائط وبيانات الموارد على جهازك. يعرض شريط الذاكرة في الأعلى ثلاث فئات:

- ***أخضر***. إجمالي تخزين الجهاز المستخدم.
- ***برتقالي***. جزء من التخزين المستخدم المشغول بتنزيلات OsmAnd.
- ***رمادي***. التخزين الحر المتاح على الجهاز.

تحت شريط الذاكرة، يتم عرض قائمة بجميع خرائط وموارد OsmAnd المحملة، بما في ذلك نوعها وحجم الملف. لا تُحسب الخرائط عبر الإنترنت في شريط الذاكرة، حيث يتم بثها وتخزينها مؤقتًا فقط.

</TabItem>

</Tabs>


### عرض البيانات {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![نظرة عامة على فئة المحلي أندرويد 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![خيارات فئة المحلي أندرويد 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


اضغط على أي عنصر في تبويب **المحلي** لفتح قائمته التفصيلية. في أعلى هذه القائمة، يعرض لوحة بصرية كمية المساحة التي يشغلها نوع البيانات المحدد بالنسبة لتخزين OsmAnd الإجمالي.

***الإجراءات المتاحة:***

- **البحث**. ابحث عن بيانات محددة بالاسم داخل المجلد المحدد.
- **قائمة ثلاث نقاط**:  
    ***تحديد***. اختر عناصر متعددة لإجراءات مثل *حذف*، *إلغاء تفعيل*، أو *تفعيل*.  
    ***استيراد***. الوصول إلى تخزين الجهاز لاستيراد الملفات.
- **خيار الترتيب**. رتب العناصر حسب الاسم، أو البلد، أو التاريخ، أو الحجم (التوافر يعتمد على نوع البيانات).

يعرض كل عنصر في القائمة *قائمة ثلاث نقاط* مع خيارات:

- **معلومات**. عرض معلومات تفصيلية حول *[الإجراءات](#actions)*.
- **تصدير**. حفظ البيانات إلى ملف عبر *الإعدادات → تصدير إلى ملف*.

***خيارات إضافية للخرائط:***

- **إلغاء التفعيل**. تعطيل الخرائط المتجهة دون حذفها. تبقى مخزنة لكنها غير مستخدمة للملاحة أو البحث أو التوجيه. يقلل من الحمل على الجهاز ويسرع OsmAnd.
- **تحديث**. تنزيل الإصدار الأحدث من الخريطة.
- **إعادة تسمية**. تخصيص اسم الخريطة لتحديد أفضل.
- **إزالة**. حذف الخريطة من جهازك.
- **تعديل** (للخرائط عبر الإنترنت). تعديل تكوين الخريطة عبر الإنترنت.

</TabItem>

<TabItem value="ios" label="iOS">  

![عرض البيانات](@site/static/img/personal/maps/viewing_data_ios.png)

اضغط على أي عنصر غير متصل في تبويب **المحلي** لفتح بياناته التفصيلية، كالتالي:

- **النوع**. نوع العنصر مثل **الخريطة القياسية**، **ويكيبيديا**، **خطوط الارتفاع**، أو غير ذلك.
- **الحجم**. حجم العنصر بالميغابايت.
- **تم إنشاؤه في**. التاريخ الذي تمت فيه إضافة العنصر.

بالنسبة للخرائط عبر الإنترنت، يتم عرض النوع وحجم بيانات التخزين المؤقت فقط.

</TabItem>

</Tabs>


### الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![قائمة عناصر مصدر الخريطة](@site/static/img/personal/maps/map_source_items_menu_andr.png)

يعرض كل عنصر في قائمة [مصدر الخريطة](../map/raster-maps.md) إعدادات لإدارة الخريطة النقطية عبر الإنترنت المخزنة على جهازك. افتح *قائمة ثلاث نقاط* للوصول إلى الإجراءات المتاحة:

- **معلومات**. يعرض تفاصيل عامة حول مصدر الخريطة المحدد، بما في ذلك التنسيق وتاريخ آخر تحديث.  
- **حساب الحجم**. يقدر التخزين المشغول ببلاطات التخزين المؤقت لهذا مصدر الخريطة. إذا تجاوزت الذاكرة المؤقتة *50 ميغابايت*، يمكن عرض الحجم كـ *≥50 ميغابايت* بدلاً من رقم دقيق.
- **مسح جميع البلاطات**. يحذف جميع بلاطات التخزين المؤقت لمصدر الخريطة المحدد، مما يحرر التخزين مع الحفاظ على مصدر الخريطة متاحًا للاستخدام المستقبلي.  
- **تصدير**. يحفظ تكوين مصدر الخريطة المحدد للنسخ الاحتياطي أو المشاركة.  
- **إزالة**. يحذف مصدر الخريطة المحدد. هذا الإجراء لا يؤثر على الخرائط غير المتصلة المحملة لكنه يمسح الذاكرة المؤقتة المرتبطة.

عند عرض عنصر بيانات محلي، ترى:

- **النوع**. نوع البيانات من قائمة **المحلي**.
- **تم إنشاؤه**. التاريخ الذي تمت فيه إضافة العنصر.
- **الحجم**. حجم العنصر بالميغابايت.

تعتمد **الإجراءات** المتاحة على نوع البيانات وقد تشمل **إلغاء التفعيل**، **التحديث**، **إعادة التسمية**، **التصدير**، و**الحذف**.

</TabItem>

<TabItem value="ios" label="iOS">  

![الإجراءات iOS](@site/static/img/personal/maps/local_actions_ios.png)

تعتمد **الإجراءات** المتاحة على نوع البيانات:

- بالنسبة لـ **العناصر غير المتصلة**، تكون خيار **الحذف** متاحًا فقط.
- بالنسبة لـ **الخرائط عبر الإنترنت**، قد تشمل الإجراءات **مسح الذاكرة المؤقتة**، **التعديل**، و**الحذف**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## قائمة التحديثات {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![قائمة الخرائط تحديث الخرائط أندرويد](@site/static/img/personal/maps/maps_update_andr.png)

يسمح تبويب **التحديثات** بتحديث خرائط وموارد OsmAnd. تُصدر الخرائط القياسية والطرق فقط مرة واحدة شهريًا، عادةً بين اليوم الثاني والخامس، وتشمل بيانات OpenStreetMap حتى اليوم الأخير من الشهر السابق (على سبيل المثال، إصدار أكتوبر يحتوي على بيانات حتى 30 سبتمبر). قد تتبع بيانات أخرى مثل ويكيبيديا، أو التضاريس، أو الخرائط البحرية جداول تحديث مختلفة، غير منتظمة. لدى توقعات الطقس دورة تحديث منتظمة خاصة بها. للتفاصيل، انظر [تنزيل التوقعات](../plugins/weather.md#download-forecast). 

استخدم زر *تحديث الكل* لتحديث جميع الخرائط في وقت واحد، أو حدث الخرائط الفردية حسب الحاجة. للتحديثات الساعية، تحقق من حالة اشتراك [التحديثات الحية](#live-updates). إذا تم تمكينها، سيظهر قسم **التحديثات الحية** في أعلى التبويب، تحت مؤشر ذاكرة الجهاز.

</TabItem>

<TabItem value="iOS" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![قائمة الخرائط تحديث الخرائط iOS](@site/static/img/personal/maps/maps_update_ios.png) ![توقعات الطقس تحديث الخرائط iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

يسمح تبويب **التحديثات** بتحديث خرائط وموارد OsmAnd. تُصدر الخرائط القياسية والطرق فقط مرة واحدة شهريًا، عادةً بين اليوم الثاني والخامس، وتشمل بيانات OpenStreetMap حتى اليوم الأخير من الشهر السابق (على سبيل المثال، إصدار أكتوبر يحتوي على بيانات حتى 30 سبتمبر). قد تتبع بيانات أخرى مثل ويكيبيديا، أو التضاريس، أو الخرائط البحرية جداول تحديث مختلفة، غير منتظمة. 

استخدم زر *تحديث الكل* لتحديث جميع الخرائط في وقت واحد، أو حدث الخرائط الفردية حسب الحاجة. للتحديثات الساعية، تحقق من حالة اشتراك [التحديثات الحية](#live-updates). إذا تم تمكينها، سيظهر قسم **التحديثات الحية** في أعلى التبويب، تحت مؤشر ذاكرة الجهاز.

يشمل تبويب **التحديثات** أيضًا قسم توقعات الطقس. تم تصميمه لإدارة توقعاتك غير المتصلة للدول المحددة:

- إذا لم يتم تنزيل توقع بعد، سترى دعوة لاختيار الدول. بيانات التوقع متاحة لمدة تصل إلى 7 أيام.
- بمجرد تنزيل التوقع، تعرض شاشة ***التوقع غير المتصل*** قائمة بالدول مع معلومات الحالة، بما في ذلك وقت آخر تحديث، وفترة الصلاحية، وحجم البيانات الإجمالي.
- الضغط على بلد يفتح معلومات تفصيلية مثل وقت آخر تحديث، والتحديث التالي، وحجم البيانات، والدقة. تشمل الخيارات ***التحديث الآن***، وتمكين أو تعطيل ***التحديث التلقائي*** (لدى توقعات الطقس دورة تحديث منتظمة خاصة بها. للتفاصيل، انظر [تنزيل التوقعات](../plugins/weather.md#download-forecast).)، و***إزالة التوقع***.


</TabItem>

</Tabs>

## التحديثات الحية {#live-updates}

:::tip شراء
التحديثات الحية هي ميزة مدفوعة.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![قائمة الخرائط OsmAnd الحية أندرويد](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![قائمة الخرائط تحرير OsmAnd الحية أندرويد](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![قائمة الخرائط OsmAnd الحية iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![قائمة الخرائط تحرير OsmAnd الحية iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

توفر **التحديثات الحية** تحديثات خرائط تدريجية متكررة من خلال [الاشتراك](../purchases/index.md) أو مجانًا ل[مساهمي OSM](#free-for-osm-mappers). تحدث التحديثات كل 15 دقيقة على خوادم OsmAnd ويمكن تنزيلها ساعيًا، أو يوميًا، أو أسبوعيًا. تستهلك هذه التحديثات تخزينًا ضئيلًا — حوالي 2-4% من حجم الخريطة الكامل شهريًا.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

الميزات الرئيسية:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> التحديثات الحية**. إدارة عبر مفتاح تبديل في الإعدادات.
- **&#8230; &#124;** زر (*أندرويد*) / **&#62;** زر (*iOS*). فتح إعدادات *التحديثات الحية*.
- **مفتاح التبديل**(*أندرويد*) / **&#43;** زر (*iOS*). إضافة خرائط لـ *التحديثات الحية*.
- **<Translate android="true" ids="update_frequency"/>**. اختيار تكرار تحديث الخريطة (ساعي، يومي، أو أسبوعي).
- **<Translate android="true" ids="update_now"/>**. بدء *التحديثات الحية* للخريطة.
- **<Translate android="true" ids="updates_size"/>**(*أندرويد*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). حجم *التحديثات الحية*.
- **زر سلة المهملات**(*أندرويد*). حذف جميع *التحديثات الحية* المستلمة للخريطة الحالية.
- **<Translate android="true" ids="only_download_over_wifi"/>**. إدارة تنزيل *التحديثات الحية* عبر اتصال Wi-Fi.


### طوابع زمنية التحديث {#update-timestamps}

- **آخر تحديث OSM.**  
    يشير إلى آخر تغييرات OpenStreetMap المعالجة.
- **تم تحديث المنطقة.**  
    يظهر متى تم معالجة تحديثات المنطقة المحددة آخر مرة.
- **التحديث التالي.**  
    يعرض الوقت المجدول لفحص التحديث التالي.


### قيود التحديثات الحية {#limitations-of-live-updates}

يتم دعم تغييرات العناوين فقط عبر التحديثات الشهرية.
تفتقر الطرق المحدثة إلى تفاصيل الارتفاع، مما يؤثر على رسوم بيانية التدرج.
قد تظهر مراجع المسارات المحذوفة أو المعدلة بشكل غير صحيح.


### مجانًا لمرسمي OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd الحية للمرسمين](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd الحية للمرسمين](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

المساهمون في [OpenStreetMap](https://openstreetmap.org/) مؤهلون لتنزيلات خرائط غير محدودة مجانًا والتحديثات الحية. للتأهل:
فعل إضافة [تحرير OpenStreetMap](../plugins/osm-editing.md).
[تسجيل الدخول](../plugins/osm-editing.md#settings) باسم المستخدم OSM الخاص بك.
الحفاظ على ما لا يقل عن [**30 تعديلًا**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) خلال الشهرين الماضيين.

## المقالات ذات الصلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](./profiles.md)
- [الاستيراد / التصدير](../personal/import-export.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

- الملاحة الصوتية. [(تحقق)](../troubleshooting/navigation.md#voice-navigation)
- كيفية حذف تاريخ البحث. [(تحقق)](../troubleshooting/general.md#how-to-delete-search-history)
- لمزيد من استكشاف الأخطاء، قم بزيارة: [الخرائط والبيانات](../troubleshooting/maps-data.md)