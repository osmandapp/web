---
source-hash: 02488ffc13aed2fc0d33253f071c8dbb2d3bc8a182a496a94f4a68885929b5dd
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

تحميل الخرائط إلى تطبيق OsmAnd هو خطوة أساسية لضمان عمل سلس واستخدام الملاحة دون اتصال. بدون خرائط غير متصلة، لا يمكن للتطبيق العمل بشكل كامل. تنزيل الخرائط يمنحك الوصول إلى خرائط مناطق مختلفة، مما يسمح لك بالتنقل بدون اتصال إنترنت.  

لديك طريقتان *رئيسيتان* لتنزيل الخرائط: **1)** البدء من [شاشة الإعداد الأولي](#initial-setup-screen) أو [عرض قائمة المناطق في القائمة الرئيسية](#maps-and-resources)، أو **2)** [اختيار المنطقة المطلوبة مباشرة على الخريطة](#select-on-the-map). هذا يمنحك المرونة في اختيار المناطق التي تريدها ويضمن أن تتناسب الخرائط مع خططك.  

على الرغم من أن OsmAnd يدعم كلاً من [الخرائط المتجهة](../map/vector-maps.md) و[الخرائط الرسومية](../map/raster-maps.md)، إلا أنه يُوصى بالبدء في العمل مع الخرائط المتجهة دون اتصال. هذا النوع من الخرائط (اقرأ المزيد عن [أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types) هنا) يضمن عملًا موثوقًا لجميع الوظائف الرئيسية للتطبيق، بما في ذلك [البحث](../search/index.md)، [الملاحة](../navigation/index.md)، و[قائمة السياق](../map/map-context-menu.md). هذا مهم بشكل خاص إذا كانت رحلاتك تشمل زيارات إلى أماكن نائية أو أماكن ذات وصول محدود إلى الإنترنت.


## شاشة الإعداد الأولي {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

عند تشغيل التطبيق لأول مرة، يُطلب منك تنزيل خريطة مصممة خصيصًا لموقعك الحالي، الذي يُحدد بواسطة اتصال الإنترنت الخاص بك. هذه الخطوة اختيارية، مما يسمح لك بتخطي التنزيل والانتقال مباشرة إلى واجهة الخرائط المحلية لمنطقتك.  

إذا كنت تستخدم VPN، قد يقترح OsmAnd خريطة بناءً على الموقع الافتراضي للـVPN. في مثل هذه الحالات، يمكنك اختيار خريطة يدويًا تتناسب بشكل أفضل مع منطقتك الجغرافية الفعلية.  


### قائمة النقاط الثلاث {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تنزيل خريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![تنزيل خريطة iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**قائمة الموقع:**

- *اختيار منطقة مختلفة.* تفتح قائمة [تنزيل الخرائط](#maps-and-resources).
- *السماح لنا بتحديد موقعك.* [تطلب الإذن](../start-with/first-steps.md#permission-to-access-the-location) للوصول إلى الموقع، والبحث عن الخريطة المطلوبة باستخدام هذه البيانات.

**القائمة الأخرى:**

- *استعادة من OsmAnd Cloud.* تفتح الشاشة الرئيسية أو شاشة تسجيل الدخول لـ[OsmAnd Cloud](../personal/osmand-cloud.md). هذا مفيد إذا قمت بإعادة تثبيت التطبيق أو تريد استعادة تجربة المستخدم السابقة دون إعادة اختيار المناطق والإعدادات.
- *استعادة من ملف.* تفتح مدير الملفات في الجهاز لاختيار واستيراد ملف `.osf`.  


## الخرائط والموارد {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![قائمة تنزيل الخرائط العامة أندرويد](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة تنزيل الخرائط العامة iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

شاشة [الخرائط والموارد](../personal/maps-resources.md) توفر الوصول إلى الأقسام التالية:

- [التنزيلات](../personal/maps-resources.md#downloads-menu). تقدم اختيارًا شاملاً لـ[أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types).
- [المحلي](../personal/maps-resources.md#local-menu). تعرض جميع بيانات الخرائط المخزنة حاليًا على جهازك، بما في ذلك الموارد المخصصة والمستوردة.
- [التحديثات](../personal/maps-resources.md#updates-menu). تمكنك من تحديث الخرائط شهريًا للحفاظ على بياناتك حديثة.

### تنزيل الخرائط {#downloading-maps}

لتنزيل نوع خريطة محدد لبلد أو منطقة:

- انتقل إلى مجلد المنطقة المطلوبة، مثل أفريقيا، أوروبا، أو قارة أخرى.
- اختر البلد أو المنطقة المفضلة من القائمة.
- في الشاشة التالية، راجع واختر من أنواع الخرائط المتاحة لهذه المنطقة.

يمكنك العثور على معلومات عن أنواع الخرائط الأخرى في قسم [التنزيلات](../personal/maps-resources.md#downloads-menu) من مقالة **الخرائط**.

## خيارات خريطة العالم {#world-map-options}

يحتوي OsmAnd على خيارين لخريطة العالم:  

1. **خريطة العالم المصغرة** (مثبتة مسبقًا). خريطة خفيفة الوزن تمكن الملاحة الأساسية وتوفر نظرة عامة على العالم.  
2. **خريطة العالم التفصيلية** (قابلة للتنزيل). خريطة عالمية تتميز بالمدن الرئيسية، والطرق، والأنهار، وغيرها من المعالم الجغرافية.

***ملاحظات هامة:***

- **خريطة العالم التفصيلية لا تحل محل خرائط البلدان أو المناطق الفردية.** إنها مفيدة للنظرة العامة لكنها لا تحتوي على نفس مستوى التفاصيل كالخرائط الإقليمية.  
- إذا كنت بحاجة إلى ملاحة تفصيلية، **قم بتنزيل خرائط بلدان أو مناطق محددة يدويًا** عبر *القائمة → الخرائط والموارد → تنزيل الخرائط.*
- يمكن للمستخدمين الذين لديهم **OsmAnd Pro أو Maps+** تنزيل **عدد غير محدود من الخرائط** لكنهم يجب أن يقوموا بتنزيل كل منطقة بشكل منفصل.  
- **لا يوجد خيار واحد لتنزيل جميع خرائط العالم دفعة واحدة.**


## الاختيار على الخريطة {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![النقر القصير على خريطة العالم يسمح بتنزيل خريطة المنطقة](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![النقر القصير على خريطة العالم يسمح بتنزيل خريطة المنطقة](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

إحدى الطرق لتنزيل خريطة هي التكبير إلى خارج على خريطة العالم والنقر باختصار لاختيار منطقة للتنزيل. ستُبرز هذه المنطقة باللون الأصفر، وسيظهر لوح في الأسفل مع اسم المنطقة واقتراح بتنزيلها أو اختيار خرائط أخرى.  

:::tip لون الخريطة  
على الشاشة الصغيرة، ستُبرز الخريطة المختارة للتنزيل باللون الأصفر، والخرائط التي تم تنزيلها بالفعل ستُبرز باللون الأخضر، والخرائط المعطلة ستُبرز باللون البرتقالي. تُتجاوز الخرائط **المعطلة** لتسريع البرنامج في حال كان لديك الكثير من الخرائط المحملة.
:::

## البحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة البحث لتنزيل الخريطة أندرويد](@site/static/img/settings/search_download_map_3_andr.png) ![وظيفة البحث لتنزيل الخريطة أندرويد](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة البحث لتنزيل الخريطة iOS](@site/static/img/settings/search_download_map_1_ios.png) ![وظيفة البحث لتنزيل الخريطة iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

يجعل البحث العثور على خريطة أو منطقة محددة سهلاً، مما يوفر طريقة مريحة وسريعة لتنزيل البيانات التي تحتاجها. يمكنك العثور على الخريطة وتنزيلها باستخدام [وظيفة البحث](../search/index.md).

- ابدأ البحث بإدخال اسم بلد أو منطقة في حقل البحث. ثم اختر الخريطة المطلوبة من القائمة التي تظهر.
- تُعرض الخرائط المتاحة للتنزيل باللون الرمادي مع أيقونة تنزيل، والخرائط المحملة لها لون أخضر وزر قائمة.
- انقر على اسم النتيجة المطلوبة وسيفتح قائمة خرائط المنطقة بالكامل.
- اختر [أنواع الخرائط](../personal/maps-resources.md#map-types): *الخريطة القياسية، الخريطة الطرق فقط، خطوط الارتفاع، ويكيبيديا*.