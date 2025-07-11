---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title:  تنزيل الخرائط
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

يعد تحميل الخرائط إلى تطبيق OsmAnd خطوة أساسية لضمان سلاسة التشغيل واستخدام التنقل دون اتصال بالإنترنت. بدون الخرائط غير المتصلة بالإنترنت، لا يمكن للتطبيق أن يعمل بشكل كامل. يمنحك تنزيل الخرائط إمكانية الوصول إلى خرائط مناطق مختلفة، مما يتيح لك التنقل دون اتصال بالإنترنت.

لديك طريقتان *رئيسيتان* لتنزيل الخرائط: **1)** [عرض قائمة المناطق في *القائمة الرئيسية*](#maps-and-resources)، أو **2)** [تحديد المنطقة المطلوبة مباشرة على الخريطة](#select-on-the-map). يمنحك هذا المرونة في تحديد المناطق التي تريدها ويضمن أن الخرائط ستناسب خططك.

على الرغم من أن OsmAnd يدعم كلاً من [الخرائط المتجهة](../map/vector-maps.md) و [الخرائط النقطية](../map/raster-maps.md)، فمن المستحسن البدء بالعمل مع الخرائط المتجهة دون اتصال بالإنترنت. يضمن هذا النوع من الخرائط (اقرأ المزيد حول [أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types) هنا) التشغيل الموثوق لجميع الوظائف الرئيسية للتطبيق، بما في ذلك [البحث](../search/index.md)، [التنقل](../navigation/index.md)، و [قائمة السياق](../map/map-context-menu.md). هذا مهم بشكل خاص إذا كانت رحلاتك تتضمن السفر إلى مواقع نائية أو أماكن ذات وصول محدود للإنترنت.


## تنزيل {#download}

ابدأ تحميل الخرائط من [شاشة الإعداد الأولية](#initial-setup-screen)، أو انتقل إلى *القائمة الجانبية* الرئيسية *←* [الخرائط والموارد](#maps-and-resources) وحدد الخرائط المطلوبة من القائمة العامة، أو [حدد منطقة](#select-on-the-map) مباشرة على الخريطة بالنقر على المنطقة التي تحتاجها.


### شاشة الإعداد الأولية {#initial-setup-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

عند تشغيل التطبيق لأول مرة، يُطلب منك تنزيل خريطة مصممة خصيصًا لموقعك الحالي، والذي يتم تحديده بواسطة اتصالك بالإنترنت. هذه الخطوة اختيارية، مما يتيح لك تخطي التنزيل والمتابعة مباشرة إلى واجهة الخرائط المحلية لمنطقتك.

إذا كنت تستخدم شبكة افتراضية خاصة (VPN)، فقد يقترح OsmAnd خريطة بناءً على الموقع الافتراضي لشبكة VPN. في مثل هذه الحالات، يمكنك تحديد خريطة يدويًا تتوافق بشكل أفضل مع منطقتك الجغرافية الفعلية.


#### قائمة النقاط الثلاث {#three-dot-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_andr.png) ![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_ios.png) ![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**قائمة الموقع:**

- *تحديد منطقة مختلفة.* يفتح قائمة [تنزيل الخرائط](#maps-and-resources).
- *اسمح لنا بتحديد موقعك.* [يطلب الإذن](../start-with/first-steps.md#permission-to-access-the-location) للوصول إلى الموقع، والعثور على الخريطة المطلوبة باستخدام هذه البيانات.

**قائمة أخرى:**

- *الاستعادة من OsmAnd Cloud.* يفتح الشاشة الرئيسية لـ [OsmAnd Cloud](../personal/osmand-cloud.md) أو شاشة تسجيل الدخول. هذا مفيد إذا قمت بإعادة تثبيت التطبيق أو كنت ترغب في استعادة تجربة المستخدم السابقة دون إعادة تحديد المناطق والإعدادات.
- *الاستعادة من ملف.* يفتح مدير ملفات الجهاز لتحديد واستيراد ملف `.osf`.


### الخرائط والموارد {#maps-and-resources}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![تنزيل قائمة الخرائط العامة أندرويد](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![تنزيل قائمة الخرائط العامة iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

توفر شاشة [الخرائط والموارد](../personal/maps-resources.md) الوصول إلى الأقسام التالية:

- [التنزيلات](../personal/maps-resources.md#downloads). تقدم مجموعة شاملة من [أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types).
- [المحلية](../personal/maps-resources.md#local). تعرض جميع بيانات الخرائط المخزنة حاليًا على جهازك، بما في ذلك الموارد المخصصة والمستوردة.
- [التحديثات](../personal/maps-resources.md#updates). تمكنك من تحديث الخرائط شهريًا للحفاظ على بياناتك محدثة.

#### تنزيل الخرائط {#downloading-maps}

لتنزيل نوع خريطة معين لبلد أو منطقة:

- انتقل إلى المجلد الخاص بالمنطقة المطلوبة، مثل إفريقيا أو أوروبا أو قارة أخرى.
- حدد البلد أو المنطقة المفضلة لديك من القائمة.
- في الشاشة التالية، راجع واختر من بين أنواع الخرائط المتاحة لتلك المنطقة.

يمكنك العثور على معلومات حول أنواع الخرائط الأخرى في قسم [التنزيلات](../personal/maps-resources.md#downloads) من مقال **الخرائط**.

### خيارات خريطة العالم {#world-map-options}

يتضمن OsmAnd خيارين لخريطة العالم:

1. **خريطة العالم المصغرة** (مثبتة مسبقًا). خريطة خفيفة الوزن تتيح التنقل الأساسي وتوفر نظرة عامة على العالم.
2. **خريطة العالم التفصيلية** (قابلة للتنزيل). خريطة عالمية تتميز بالمدن الرئيسية والطرق والأنهار والميزات الجغرافية الأخرى.

***ملاحظات هامة:***

- **خريطة العالم التفصيلية لا تحل محل خرائط البلدان أو المناطق الفردية.** إنها مفيدة للحصول على نظرة عامة ولكنها لا تحتوي على نفس مستوى التفاصيل مثل الخرائط الإقليمية.
- إذا كنت بحاجة إلى تنقل مفصل، **قم بتنزيل خرائط بلد أو منطقة محددة يدويًا** عبر *القائمة ← الخرائط والموارد ← تنزيل الخرائط.*
- يمكن للمستخدمين الذين لديهم **OsmAnd Pro أو Maps+** تنزيل **عدد غير محدود من الخرائط** ولكن يجب عليهم الاستمرار في تنزيل كل منطقة على حدة.
- **لا يوجد خيار واحد لتنزيل جميع خرائط العالم دفعة واحدة.**


### التحديد على الخريطة {#select-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![النقر القصير على خريطة العالم يسمح بتنزيل خريطة المنطقة](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![النقر القصير على خريطة العالم يسمح بتنزيل خريطة المنطقة](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

إحدى طرق تنزيل الخريطة هي التصغير على خريطة العالم والنقر لفترة وجيزة لتحديد منطقة لتنزيلها. سيتم تمييز هذه المنطقة باللون الأصفر، وستظهر لوحة في الأسفل تحمل اسم المنطقة واقتراحًا لتنزيلها أو تحديد خرائط أخرى.

:::tip لون الخريطة
على الشاشة الصغيرة، ستُبرز الخريطة المختارة للتنزيل باللون الأصفر، وستُبرز الخرائط التي تم تنزيلها بالفعل باللون الأخضر، وستُبرز الخرائط المعطلة باللون البرتقالي. يتم تجاوز الخرائط **المعطلة** لتسريع البرنامج في حال كان لديك الكثير من الخرائط المحملة.
:::

### البحث {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![وظيفة البحث لتنزيل خريطة أندرويد](@site/static/img/settings/search_download_map_3_andr.png) ![وظيفة البحث لتنزيل خريطة أندرويد](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة البحث لتنزيل خريطة iOS](@site/static/img/settings/search_download_map_1_ios.png) ![وظيفة البحث لتنزيل خريطة iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

يجعل البحث من السهل العثور على خريطة أو منطقة معينة، مما يوفر طريقة مريحة وسريعة لتنزيل البيانات التي تحتاجها. يمكنك العثور على الخريطة وتنزيلها باستخدام [وظيفة البحث](../search/index.md).

- ابدأ البحث بإدخال اسم بلد أو منطقة في حقل البحث. ثم حدد الخريطة المطلوبة من القائمة التي تظهر.
- تظهر الخرائط المتاحة للتنزيل باللون الرمادي مع أيقونة تنزيل، والخرائط التي تم تنزيلها لها لون أخضر وزر قائمة.
- انقر على اسم النتيجة المطلوبة وستفتح قائمة خرائط المنطقة.
- حدد [أنواع الخرائط](../personal/maps-resources.md#map-types): *خريطة قياسية، خريطة طرق فقط، خطوط كنتورية، ويكيبيديا*.

> *آخر تحديث: يناير 2025*