---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
sidebar_position: 2
title:  الخرائط والموارد
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

في قسم **الخرائط والموارد**، يمكنك إدارة الخرائط *المتصلة بالإنترنت* و*غير المتصلة بالإنترنت*، والموارد الأخرى المستخدمة في OsmAnd. على سبيل المثال، يمكنك تنزيل الخرائط وحذفها وإعادة تسميتها ومسح ذاكرة التخزين المؤقت وتحديثها والتحقق من حجمها، وتنفيذ إجراءات مختلفة.

يعمل OsmAnd بنوعين من الخرائط: [خرائط المتجهات](../map/vector-maps.md) و[خرائط الرسوم النقطية](../map/raster-maps.md). يخزن تبويب [المحلية](#local) جميع الخرائط والموارد. يمكن تنزيل أنواع الخرائط المتاحة من تبويب [التنزيلات](#downloads). في تبويب [التحديثات](#updates)، يمكنك تنزيل الخرائط المتاحة للتحديثات واستخدام [التحديثات المباشرة](#osmand-live). يمكنك أيضًا الوصول إلى ميزة [الخرائط الإضافية](#extra-maps) لإنشاء أنواع الخرائط الخاصة بك.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![قائمة الخرائط أندرويد](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة الخرائط iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## أنواع الخرائط {#map-types}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![قائمة تنزيل الخرائط أندرويد](@site/static/img/personal/maps/map_type_1_andr.png) ![خرائط على مستوى المنطقة أندرويد](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تنزيل الخرائط iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![خرائط على مستوى المنطقة أندرويد](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

يعد تنزيل الخرائط في تطبيق OsmAnd خطوة مهمة تحدد وظائف وكفاءة التنقل.

#### الميزات المجانية للموقع المحدد {#free-features-for-the-selected-location}

- **الخريطة القياسية**. توفر نظرة عامة على المنطقة بناءً على مصدر [OpenStreetMap](https://www.openstreetmap.org/) وتحتوي على خريطة ومسارات وعناوين ونقاط اهتمام ومعلومات النقل العام. يؤدي النقر إلى فتح شاشة تحتوي على قائمة بمناطق البلد المحدد ومعلومات حول مقدار المساحة التي ستشغلها هذه الخرائط على جهازك.  
- **الطرق فقط** (*أندرويد فقط*). تحتوي الخريطة على معلومات شبكة الطرق فقط للتركيز على المسارات والبنية التحتية للطرق. عن طريق إزالة التفاصيل مثل المباني ونقاط الاهتمام، تكون أصغر من الخريطة القياسية. يؤدي النقر إلى فتح شاشة تحتوي على قائمة بمناطق البلد المحدد ومعلومات حول مقدار المساحة التي ستشغلها هذه الخرائط على جهازك.

#### الميزات المدفوعة للموقع المحدد {#paid-features-for-the-selected-location}

- [خطوط الكنتور](../plugins/topography.md#contour-lines). خريطة تحتوي على خطوط ارتفاع الكنتور لتصوير التضاريس.
- [خريطة التضاريس (تظليل التلال والمنحدرات)](../plugins/topography.md#hillshade-slope-and-altitude-layers). خرائط ذات ظلال أو منحدرات توفر معلومات إضافية عن التضاريس.
- [خريطة التضاريس (ثلاثية الأبعاد)](../plugins/topography.md#3d-relief). تمثيل ثلاثي الأبعاد للتضاريس لفهم أفضل لمحيطك. يجب تمكين [محرك عرض الخرائط الإصدار 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [ويكيبيديا](../plugins/wikipedia.md). خريطة متجهات تحتوي على مقالات [ويكيبيديا](https://wikipedia.org/) ذات موقع جغرافي حول المعالم أو معلومات إضافية حول الأماكن.
- [توقعات الطقس](../plugins/weather.md). معلومات الطقس على الخريطة لتخطيط المسار بسهولة.
- [خرائط الرسوم النقطية عبر الإنترنت](../map/raster-maps.md). الخرائط متاحة للتنزيل عبر الإنترنت ويمكن تثبيتها كخرائط طرف ثالث أو بلاطات OsmAnd.

#### خريطة نظرة عامة على العالم {#world-overview-map}

تقدم إصدارات OsmAnd حتى 3.8 تنزيل خريطة عالمية حتى تتمكن من عرضها على نطاق كوكبي. في الإصدارات الأحدث من OsmAnd، يتم تجميع *خريطة عالمية مصغرة* خفيفة الوزن مع التطبيق. يتيح لك التطبيق تنزيل خريطة عالمية أكبر مع معلومات أكثر تفصيلاً.


## الخرائط والموارد {#maps--resources}

يوفر قسم **الخرائط والموارد** في *القائمة الرئيسية* لتطبيق OsmAnd الوصول لإدارة الخرائط والبيانات الهامة الأخرى.

- يسمح لك تبويب [تنزيل](#downloads) الخرائط بتنزيل الخرائط للاستخدام دون اتصال بالإنترنت، مما يضمن توفرها بدون إنترنت.  
- في تبويب [الخرائط المحلية](#local)، يمكنك العثور على معلومات مفصلة حول الخرائط والأماكن وإدارتها، بما في ذلك المفضلة والمسارات وملاحظات OSM والعناصر الأخرى الموجودة على جهازك.  
- يسمح تبويب [التحديثات](#updates) للمستخدمين بالحصول على معلومات حول التحديثات المتاحة للخرائط والموارد الأخرى، مما يضمن أن البيانات حديثة ودقيقة.

***إجراءات عامة يمكنك القيام بها في الخرائط والموارد***:

- **تحديث**. يعيد تحميل قائمة الخرائط المتاحة من خادم OsmAnd.  
- **بحث**. ابحث عن الخرائط حسب **البلد** أو **المقاطعة** أو **المدينة** الرئيسية.  
- **ذاكرة الجهاز**. يظهر على المؤشر مقدار الذاكرة المتاحة للتنزيل وعدد الخرائط التي يمكن تنزيلها مجانًا. اعتمادًا على التبويب، يتم عرض بيانات مختلفة قليلاً في بعض الأحيان.  
- **عداد الخرائط** (*الإصدار المجاني* مرئي فقط إذا لم يكن لديك [اشتراك](../purchases/index.md)). يظهر المؤشر مع الفواصل عدد الخرائط المتبقية لديك للتنزيل من أصل *7 خرائط متاحة*.

:::info تحديثات الخرائط الشهرية
يرجى ملاحظة أن تحديثات الخرائط الشهرية تعتبر تنزيل خريطة آخر ويتم خصمها من العدد المتاح لتنزيلات الخرائط المجانية.
:::


### التنزيلات {#downloads}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![قائمة تنزيل الخرائط عامة أندرويد](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![قائمة تنزيل الخرائط عامة iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

يتيح لك تبويب **التنزيل** تنزيل أنواع مختلفة من الخرائط من خوادم OsmAnd، مما يتطلب اتصال إنترنت نشط.

***لتنزيل خريطة:***

- **افتح تبويب التنزيل**، حدد القسم المطلوب، وانقر على المجلد ذي الصلة لرؤية الخرائط المتاحة.

- تعرض **الخرائط المتاحة** أيقونات تنزيل، لخريطة واحدة أو لـ[خرائط متعددة](#multiple-map-loading).

- تعرض **الخرائط التي تم تنزيلها** أيقونة خضراء مع زر قائمة:  
    - *أندرويد*: قائمة ثلاث نقاط.  
    - *iOS*: أيقونة معلومات (I).

- **الخرائط في طور التحميل** لها أيقونة تصور ذلك. لإلغاء التنزيل، انقر على الأيقونة. لعرض قائمة الخرائط في قائمة الانتظار وإلغاء التنزيلات، انقر على شريط التنزيل في منطقة معلومات ذاكرة الجهاز في تبويبات التنزيلات والتحديثات.

- **في الإصدار المجاني**، تعرض الخرائط غير المتاحة للتنزيل أيقونة [الحصول](../purchases/index.md)، والتي ترتبط بصفحة الشراء.

***يتكون تبويب التنزيلات من مجموعات خرائط:***

- **معلومات ذاكرة الجهاز**. تصور مقدار المساحة المشغولة والمتاحة على جهازك.
- **عداد الخرائط** (***الإصدار المجاني***). يعرض عدد الخرائط المتبقية لديك للتنزيل.
- [خرائط إضافية](#extra-maps). يعرض بيانات الخريطة لـ[الحزمة المخصصة](../plugins/custom.md).
- **المناطق**. قائمة حسب القارة والمنطقة العالمية: *أفريقيا، القارة القطبية الجنوبية، آسيا، أستراليا وأوقيانوسيا، أمريكا الوسطى، أوروبا، أمريكا الشمالية، روسيا، وأمريكا الجنوبية.*
- [خرائط العالم](#world-maps). قائمة بخرائط العالم بأكمله: *تصحيح ارتفاع العالم (أندرويد فقط)*، *خريطة نظرة عامة على العالم*، *جميع أنحاء العالم (توقعات الطقس)*
- [الخرائط البحرية](../plugins/nautical-charts.md) ([*ميزة مدفوعة*](../purchases/index.md)). خرائط متجهات ذات ارتفاعات كنقاط أو خطوط.
- [أدلة السفر (ويكيبيديا)](../plan-route/travel-guides.md) ([*ميزة مدفوعة*](../purchases/index.md)). خرائط متجهات مع مجموعة من المقالات بتنسيق HTML وملفات GPX إضافية.
- **خرائط أخرى**. خرائط لا يمكن تعيينها للتسلسل الهرمي الحالي للخرائط لأنها غير مدعومة أو ستكون متاحة في الإصدارات المستقبلية.
- [المطالبات الصوتية](../navigation/guidance/voice-navigation.md) (*أندرويد فقط*). حزم صوتية للمطالبات الصوتية للملاحة.
- [خطوط الخرائط](../map/vector-maps.md#map-fonts-android) (*أندرويد فقط*). ملفات خطوط إضافية تعرض النص على الخريطة.

#### خرائط العالم {#world-maps}

في قائمة تنزيل الخرائط، يوجد قسم **خرائط العالم** الذي يوفر الوصول لتنزيل خرائط عالمية متنوعة، مما يكمل وظائف التطبيق.  

- **تصحيح ارتفاع العالم** (*أندرويد فقط*). يحسن دقة الملاحة، خاصة في التضاريس الجبلية.
- **خريطة نظرة عامة على العالم**. توفر نظرة عامة واسعة على سطح الأرض، مفيدة لتخطيط المسارات طويلة المدى والاستكشاف العادي.
- **جميع أنحاء العالم (توقعات الطقس)**. تتيح لك تنزيل خريطة بمعلومات الطقس.

يمكن العثور على معلومات حول *قائمة الخرائط* و*الإجراءات* في مقالة [تنزيل الخرائط](../start-with/download-maps.md).


#### تحميل خرائط متعددة {#multiple-map-loading}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![قائمة تنزيل الخرائط عامة أندرويد](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تنزيل الخرائط عامة iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

بالنسبة للبلدان التي تتكون من **خرائط مناطق متعددة**، يمكنك استخدام التحميل بالجملة لخرائط متعددة. يتم عرض الخرائط المتاحة لهذا النوع من التنزيل بأيقونات سهم تنزيل مزدوجة وتسمية بعدد المناطق بالداخل (على سبيل المثال، خطوط الكنتور / جميع المناطق: 10). يمكنك اختيار عدد الخرائط التي تريد تنزيلها.


### المحلية {#local}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">  

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![تبويب محلي أندرويد 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![تبويب محلي أندرويد 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![قائمة تبويب محلي iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

يوفر تبويب المحلية نظرة عامة على استخدام التخزين لجميع بيانات OsmAnd على جهازك. تنقسم البيانات إلى ثلاثة أقسام مرمزة بالألوان للوضوح، مع فرز العناصر حسب الحجم من الأكبر إلى الأصغر. يعرض كل قسم العناصر التي تحتوي على بيانات تم تنزيلها فقط:

- ***الموارد*** (*أزرق*).  
    تتضمن الخرائط ([قياسية](../map/vector-maps.md)، &nbsp;[بحرية](../plugins/nautical-charts.md)، &nbsp;[تضاريس](../plugins/topography.md)، &nbsp;[طقس](../plugins/weather.md))، &nbsp;[ويكيبيديا](../plugins/wikipedia.md) و[أدلة السفر](../plan-route/travel-guides.md)، &nbsp;[تحديثات مباشرة](../personal/maps-resources.md#osmand-live)، &nbsp;**طريق فقط**،  &nbsp;[مصادر الخرائط](../map/raster-maps.md)، &nbsp;[أنماط العرض](../map/vector-maps.md#default-map-styles)، &nbsp;**خطوط الخرائط، &nbsp;مطالبات صوتية (مسجلة و TTS)، &nbsp;ذاكرة التخزين المؤقت**.  

- ***أماكني*** (*أصفر*).  
    تتضمن [المفضلة](../personal/favorites.md)، &nbsp;[المسارات](../personal/tracks/manage-tracks.md)، &nbsp;[ملاحظات OSM](../plugins/osm-editing.md#create--modify-osm-note)، &nbsp;[تعديلات OSM](../plugins/osm-editing.md#osm-editing-layer)، &nbsp;[ملاحظات صوتية/مرئية](../plugins/audio-video-notes.md)، &nbsp;[علامات الخرائط](../personal/markers.md)، &nbsp;[السجل](../personal/global-settings.md#history)، &nbsp;*مسار الرحلة*.  

- ***الإعدادات*** (*أخضر*).  
    تتضمن [الملفات الشخصية](../personal/profiles.md)، &nbsp;[الألوان](../personal/color-palette-schemes.md) و**تكوينات التطبيق الأخرى**.


#### عرض البيانات {#viewing-data}

![نظرة عامة على الفئة المحلية أندرويد 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![خيارات الفئة المحلية أندرويد 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


انقر على أي عنصر في تبويب **المحلية** لفتح قائمته التفصيلية. في الجزء العلوي من هذه القائمة، تعرض لوحة مرئية مقدار المساحة التي يشغلها نوع البيانات المحدد بالنسبة إلى إجمالي مساحة تخزين OsmAnd.

***الإجراءات المتاحة:***

- **بحث**. ابحث عن بيانات محددة بالاسم داخل المجلد المحدد.
- **قائمة ثلاث نقاط**:  
    ***تحديد***. اختر عناصر متعددة لإجراءات مثل *حذف* أو *تعطيل* أو *تنشيط*.  
    ***استيراد***. الوصول إلى مساحة تخزين الجهاز لاستيراد الملفات.
- [خيار الفرز](#sorting-options). فرز العناصر حسب الاسم أو البلد أو التاريخ أو الحجم (يعتمد التوفر على نوع البيانات).


#### قائمة العناصر من القائمة {#menu-for-items-from-the-list}

![إجراءات عناصر الفئة المحلية 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![إجراءات عناصر الفئة المحلية](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

يقدم كل عنصر في القائمة *قائمة ثلاث نقاط* مع خيارات:

- **معلومات**. عرض معلومات مفصلة عن *[عنصر البيانات](#local-data-item-overview)*.
- **تصدير**. حفظ البيانات في ملف عبر *الإعدادات ← تصدير إلى ملف*.

***خيارات إضافية للخرائط:***

- **تعطيل**. تعطيل خرائط المتجهات دون حذفها. تبقى مخزنة ولكن لا تستخدم للملاحة أو البحث أو التوجيه. يقلل الحمل على الجهاز ويسرع OsmAnd.
- **تحديث**. تنزيل أحدث إصدار من الخريطة.
- **إعادة تسمية**. تخصيص اسم الخريطة لتحديد أفضل.
- **إزالة**. حذف الخريطة من جهازك.
- **تعديل** (للخرائط عبر الإنترنت). تعديل تكوين الخريطة عبر الإنترنت.

#### قائمة عناصر مصدر الخريطة {#map-source-items-menu}

![قائمة عناصر مصدر الخريطة](@site/static/img/personal/maps/map_source_items_menu_andr.png)

يوفر كل عنصر في قائمة [مصدر الخريطة](../map/raster-maps.md) إعدادات لإدارة خريطة الرسوم النقطية عبر الإنترنت المخزنة على جهازك. افتح *قائمة النقاط الثلاث* للوصول إلى الإجراءات المتاحة:

- [معلومات](#local-data-item-overview). يعرض تفاصيل عامة حول مصدر الخريطة المحدد، بما في ذلك التنسيق وتاريخ آخر تحديث.  
- **حساب الحجم**. يقدر التخزين الذي تشغله البلاطات المخزنة مؤقتًا لمصدر الخريطة هذا. إذا تجاوزت ذاكرة التخزين المؤقت *50 ميجابايت*، يمكن عرض الحجم كـ *≥50 ميجابايت* بدلاً من رقم دقيق.
- **مسح جميع البلاطات**. يحذف جميع البلاطات المخزنة مؤقتًا لمصدر الخريطة المحدد، مما يحرر مساحة التخزين مع الحفاظ على مصدر الخريطة متاحًا للاستخدام المستقبلي.  
- **تصدير**. يحفظ تكوين مصدر الخريطة المحدد للنسخ الاحتياطي أو المشاركة.  
- **إزالة**. يحذف مصدر الخريطة المحدد. لا يؤثر هذا الإجراء على الخرائط التي تم تنزيلها دون اتصال بالإنترنت ولكنه يمسح ذاكرة التخزين المؤقت المرتبطة بها.


#### نظرة عامة على عنصر البيانات المحلية {#local-data-item-overview}

![نظرة عامة على عنصر البيانات المحلية](@site/static/img/settings/local_category_overview_2.png) ![نظرة عامة على عنصر البيانات المحلية 2](@site/static/img/settings/local_category_overview_1.png)  

عند عرض عنصر بيانات محلي، ترى:

- **النوع**. نوع البيانات من قائمة **المحلية**.
- **تم الإنشاء**. تاريخ إضافة العنصر.
- **الحجم**. حجم العنصر بالميغابايت.

تعتمد **الإجراءات** المتاحة على نوع البيانات وقد تتضمن **تعطيل**، **تحديث**، **إعادة تسمية**، **تصدير**، و**حذف**.

#### خيارات الفرز {#sorting-options}

![خيارات فرز البيانات المحلية](@site/static/img/settings/local_sorting_options_andr_1.png)

استخدم خيارات الفرز لتنظيم بيانات الخريطة:

- **الاسم (أ - ي / ي - أ)**. تحديد العناصر أبجديًا.
- **اسم البلد (أ - ي / ي - أ)**. تنظيم الخرائط جغرافيًا.
- **أحدث تاريخ أولاً** / **أقدم تاريخ أولاً**. رؤية التحديثات أو الإصدارات القديمة.
- **حجم كبير أولاً** / **حجم صغير أولاً**. تحديد الخرائط الكبيرة لتحرير مساحة التخزين.


### التحديثات {#updates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![قائمة الخرائط تحديث الخرائط أندرويد](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![قائمة الخرائط تحديث الخرائط iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

يتيح لك تبويب **التحديثات** تحديث خرائط OsmAnd شهريًا. استخدم زر *تحديث الكل* لتحديث جميع الخرائط في وقت واحد، أو تحديث الخرائط الفردية حسب الحاجة. يتم إصدار الخرائط القياسية وخرائط الطرق فقط عادةً في الأسبوعين الأولين من كل شهر. للحصول على تحديثات كل ساعة، تحقق من حالة اشتراكك في [OsmAnd Live](#osmand-live). إذا تم تمكينه، سيظهر قسم **التحديثات المباشرة** في الجزء العلوي من التبويب، أسفل مؤشر ذاكرة الجهاز.


### خرائط إضافية {#extra-maps}

يدعم OsmAnd نقل الإعدادات والبيانات الخاصة بالملف الشخصي، بما في ذلك ملفات العرض والخطوط والمسارات والخرائط والمكونات الإضافية المخصصة. قم بإنشاء مجلد خرائط مخصص باستخدام ملف مكون إضافي `.osf` (تنسيق `.zip` مضغوط).

لاستيراد ملف:

1. حدد موقع ملف `.osf` في مساحة تخزين جهازك أو في برنامج المراسلة أو البريد الإلكتروني.
2. انقر لفتحه باستخدام OsmAnd.
3. سيظهر المكون الإضافي في قسم **قائمة المكونات الإضافية**، حيث يمكن تنشيطه.
4. سيظهر مجلد مطابق بعد ذلك في قسم **الخرائط الإضافية** في تبويب [التنزيلات](#downloads).

اقرأ المزيد في مقالة [**الحزمة المخصصة**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip شراء
OsmAnd Live هي ميزة مدفوعة.  
:::
<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![قائمة الخرائط OsmAnd live أندرويد](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![قائمة الخرائط OsmAnd live تعديل أندرويد](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![قائمة الخرائط OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![قائمة الخرائط OsmAnd live تعديل iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

يوفر **OsmAnd Live** تحديثات متزايدة ومتكررة للخرائط من خلال [الاشتراك](../purchases/index.md) أو مجانًا لـ[مساهمي OSM](#free-for-osm-mappers). تحدث التحديثات كل 15 دقيقة على خوادم OsmAnd ويمكن تنزيلها كل ساعة أو يوميًا أو أسبوعيًا. تستهلك هذه التحديثات الحد الأدنى من التخزين - حوالي 2-4% من حجم الخريطة الكامل شهريًا.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

الميزات الرئيسية:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> تحديثات مباشرة**. إدارة عبر مفتاح تبديل في الإعدادات.
- زر **&#8230; &#124;** (*أندرويد*) / زر **&#62;** (*iOS*). فتح إعدادات *OsmAnd live*.
- **مفتاح تبديل**(*أندرويد*) / زر **&#43;** (*iOS*). إضافة خرائط لـ*التحديثات المباشرة*.
- **<Translate android="true" ids="update_frequency"/>**. حدد تكرار تحديث الخريطة (كل ساعة، يوميًا، أو أسبوعيًا).
- **<Translate android="true" ids="update_now"/>**. ابدأ تحديث خريطة *OsmAnd live*.
- **<Translate android="true" ids="updates_size"/>**(*أندرويد*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). حجم *التحديثات المباشرة*.
- زر **المهملات**(*أندرويد*). حذف جميع *التحديثات المباشرة* المستلمة للخريطة الحالية.
- **<Translate android="true" ids="only_download_over_wifi"/>**. إدارة تنزيل *التحديثات المباشرة* عبر اتصال Wi-Fi.


### طوابع زمنية للتحديث {#update-timestamps}

- **آخر تحديث لـ OSM.**  
    يشير إلى آخر التغييرات التي تمت معالجتها في OpenStreetMap.
- **تم تحديث المنطقة.**  
    يظهر متى تمت معالجة تحديثات المنطقة المحددة آخر مرة.
- **التحديث التالي.**  
    يعرض الوقت المقرر للتحقق من التحديث التالي.


### قيود OsmAnd Live {#limitations-of-osmand-live}

تغييرات العناوين مدعومة فقط عبر التحديثات الشهرية.
تفتقر الطرق المحدثة إلى تفاصيل الارتفاع، مما يؤثر على رسوم بيانية التدرج.
قد تظهر المراجع المحذوفة أو المعدلة للمسارات بشكل غير صحيح.


### مجاني لمساهمي OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![OsmAnd live للمساهمين](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live للمساهمين](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

المساهمون في [OpenStreetMap](https://openstreetmap.org/) مؤهلون للحصول على تنزيلات خرائط غير محدودة مجانية وتحديثات مباشرة. للتأهل:
قم بتمكين [مكون OpenStreetMap Editing الإضافي](../plugins/osm-editing.md).
[سجل الدخول](../plugins/osm-editing.md#settings) باستخدام اسم مستخدم OSM الخاص بك.
حافظ على ما لا يقل عن [**30 تعديلاً**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) خلال الشهرين الماضيين.

## مقالات ذات صلة {#related-articles}

- [الملفات الشخصية (الإعدادات)](./profiles.md)
- [استيراد / تصدير](../personal/import-export.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

- الملاحة الصوتية. [(تحقق)](../troubleshooting/navigation.md#voice-navigation)
- كيفية حذف سجل البحث. [(تحقق)](../troubleshooting/general.md#how-to-delete-search-history)
- لمزيد من استكشاف الأخطاء وإصلاحها، قم بزيارة: [الخرائط والبيانات](../troubleshooting/maps-data.md)

> *آخر تحديث: فبراير 2025*