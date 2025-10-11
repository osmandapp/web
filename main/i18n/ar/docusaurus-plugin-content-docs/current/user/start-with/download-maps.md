---
source-hash: 02488ffc13aed2fc0d33253f071c8dbb2d3bc8a182a496a94f4a68885929b5dd
sidebar_position: 2
title:  تحميل الخرائط
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

ترقيع الخرائط إلى تطبيق OsmAnd هو خطوة أساسية لضمان عمل سلس واستخدام الملاحة دون اتصال. بدون خرائط دون اتصال، لا يمكن للتطبيق العمل بشكل كامل. تحميل الخرائط يمنحك الوصول إلى خرائط مناطق مختلفة، مما يسمح لك بالتنقل بدون اتصال إنترنت.  

لديك طريقتان *رئيسيتان* لتحميل الخرائط: **١)** البدء من [شاشة الإعداد الأولي](#initial-setup-screen) أو [عرض قائمة المناطق في القائمة الرئيسية](#maps-and-resources)، أو **٢)** [اختيار المنطقة المطلوبة مباشرة على الخريطة](#select-on-the-map). هذا يمنحك المرونة في اختيار المناطق التي تريدها ويضمن أن تتناسب الخرائط مع خططك.  

على الرغم من أن OsmAnd يدعم كلاً من [الخرائط المتجهة](../map/vector-maps.md) و[الخرائط الرستر](../map/raster-maps.md)، إلا أنه يُوصى بالبدء في العمل مع الخرائط المتجهة دون اتصال. هذا النوع من الخرائط (اقرأ المزيد عن [أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types) هنا) يضمن عملًا موثوقًا لجميع الوظائف الرئيسية للتطبيق، بما في ذلك [البحث](../search/index.md)، [الملاحة](../navigation/index.md)، و[قائمة السياق](../map/map-context-menu.md). هذا أمر مهم بشكل خاص إذا كانت رحلاتك تشمل زيارات إلى مواقع نائية أو أماكن ذات وصول محدود إلى الإنترنت.


## شاشة الإعداد الأولي {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تحميل الخريطة أندرويد](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحميل الخريطة iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

عند تشغيل التطبيق للمرة الأولى، يُطلب منك تحميل خريطة مصممة خصيصًا لموقعك الحالي، الذي يُحدد بواسطة اتصالك بالإنترنت. هذه الخطوة اختيارية، مما يسمح لك بتخطي التحميل والانتقال مباشرة إلى واجهة الخرائط المحلية لمنطقتك.  

إذا كنت تستخدم VPN، قد يقترح OsmAnd خريطة بناءً على الموقع الافتراضي للـVPN. في مثل هذه الحالات، يمكنك اختيار خريطة يدويًا تتناسب بشكل أفضل مع منطقتك الجغرافية الفعلية.  


### قائمة النقاط الثلاث {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تحميل الخريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![تحميل الخريطة iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحميل الخريطة أندرويد](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![تحميل الخريطة iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**قائمة الموقع:**

- *اختر منطقة مختلفة.* تفتح قائمة [تحميل الخرائط](#maps-and-resources).
- *اسمح لنا بتحديد موقعك.* [تطلب الإذن](../start-with/first-steps.md#permission-to-access-the-location) للوصول إلى الموقع، والبحث عن الخريطة المطلوبة باستخدام هذه البيانات.

**القائمة الأخرى:**

- *استعادة من OsmAnd Cloud.* تفتح الشاشة الرئيسية لـ[ OsmAnd Cloud](../personal/osmand-cloud.md) أو شاشة تسجيل الدخول. هذا مفيد إذا قمت بإعادة تثبيت التطبيق أو ترغب في استعادة تجربة المستخدم السابقة دون إعادة اختيار المناطق والإعدادات.
- *استعادة من ملف.* تفتح مدير الملفات في الجهاز لاختيار واستيراد ملف `.osf`.  


## الخرائط والموارد {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![قائمة تحميل الخرائط العامة أندرويد](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة تحميل الخرائط العامة iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

شاشة [الخرائط والموارد](../personal/maps-resources.md) توفر الوصول إلى الأقسام التالية:

- [التحميلات](../personal/maps-resources.md#downloads-menu). تقدم اختيارًا شاملاً لـ[أنواع خرائط OsmAnd](../personal/maps-resources.md#map-types).
- [المحلي](../personal/maps-resources.md#local-menu). تعرض جميع بيانات الخرائط المخزنة حاليًا على جهازك، بما في ذلك الموارد المخصصة والمستوردة.
- [التحديثات](../personal/maps-resources.md#updates-menu). تمكنك من تحديث الخرائط شهريًا للحفاظ على بياناتك حديثة.

### تحميل الخرائط {#downloading-maps}

لتحميل نوع معين من الخرائط لدولة أو منطقة:

- انتقل إلى مجلد المنطقة المطلوبة، مثل أفريقيا، أوروبا، أو قارة أخرى.
- اختر الدولة أو المنطقة المفضلة من القائمة.
- في الشاشة التالية، راجع واختر من أنواع الخرائط المتاحة لهذه المنطقة.

يمكنك العثور على معلومات حول أنواع أخرى من الخرائط في قسم [التحميلات](../personal/maps-resources.md#downloads-menu) من مقالة **الخرائط**.

## خيارات خريطة العالم {#world-map-options}

يحتوي OsmAnd على خيارين لخريطة العالم:  

١. **خريطة العالم المصغرة** (مثبتة مسبقًا). خريطة خفيفة الوزن تمكن الملاحة الأساسية وتوفر نظرة عامة على العالم.  
٢. **خريطة العالم التفصيلية** (قابلة للتحميل). خريطة عالمية تتميز بالمدن الرئيسية، والطرق، والأنهار، وغيرها من المعالم الجغرافية.

***ملاحظات هامة:***

- **خريطة العالم التفصيلية لا تحل محل خرائط الدول أو المناطق الفردية.** إنها مفيدة للنظرة العامة لكنها لا تحتوي على نفس مستوى التفاصيل كالخرائط الإقليمية.  
- إذا كنت بحاجة إلى ملاحة تفصيلية، **قم بتحميل خرائط دول أو مناطق محددة يدويًا** عبر *القائمة → الخرائط والموارد → تحميل الخرائط.*
- يمكن للمستخدمين الذين لديهم **OsmAnd Pro أو Maps+** تحميل **عدد غير محدود من الخرائط** لكنهم يجب أن يقوموا بتحميل كل منطقة على حدة.  
- **لا يوجد خيار واحد لتحميل جميع خرائط العالم دفعة واحدة.**


## الاختيار على الخريطة {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![النقر القصير على خريطة العالم يسمح بتحميل خريطة المنطقة](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![النقر القصير على خريطة العالم يسمح بتحميل خريطة المنطقة](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

إحدى الطرق لتحميل خريطة هي تكبير الخريطة العالمية إلى الخارج والنقر باختصار لاختيار منطقة للتحميل. ستُبرز هذه المنطقة باللون الأصفر، وسيظهر لوح في الأسفل مع اسم المنطقة واقتراح لتحميلها أو اختيار خرائط أخرى.  

:::tip لون الخريطة  
على الشاشة الصغيرة، ستُبرز الخريطة المختارة للتحميل باللون الأصفر، والخرائط التي تم تحميلها بالفعل ستُبرز باللون الأخضر، والخرائط المعطلة ستُبرز باللون البرتقالي. تُتجاوز الخرائط **المعطلة** لتسريع البرنامج في حال كان لديك الكثير من الخرائط المحملة.
:::

## البحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة البحث لتحميل الخريطة أندرويد](@site/static/img/settings/search_download_map_3_andr.png) ![وظيفة البحث لتحميل الخريطة أندرويد](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة البحث لتحميل الخريطة iOS](@site/static/img/settings/search_download_map_1_ios.png) ![وظيفة البحث لتحميل الخريطة iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

يجعل البحث العثور على خريطة أو منطقة محددة أمرًا سهلاً، مما يوفر طريقة مريحة وسريعة لتحميل البيانات التي تحتاجها. يمكنك العثور على الخريطة وتحميلها باستخدام [وظيفة البحث](../search/index.md).

- ابدأ البحث بإدخال اسم دولة أو منطقة في حقل البحث. ثم اختر الخريطة المطلوبة من القائمة التي تظهر.
- تُعرض الخرائط المتاحة للتحميل باللون الرمادي مع أيقونة تحميل، والخرائط المحملة لها لون أخضر وزر قائمة.
- انقر على اسم النتيجة المطلوبة وسيفتح قائمة خرائط المنطقة بالكامل.
- اختر [أنواع الخرائط](../personal/maps-resources.md#map-types): *خريطة قياسية، خريطة طرق فقط، خطوط الارتفاع، ويكيبيديا*.