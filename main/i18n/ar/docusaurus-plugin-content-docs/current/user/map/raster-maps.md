---
source-hash: 83d4ecf6d84f9f5018413830b5bf57a59206a20ae29a9582bf53a3d68c72d1e2
sidebar_position: 7
title:  الخرائط النقطية (عبر الإنترنت / دون اتصال)
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

<!--
<InfoIncompleteArticle/>
-->

## نظرة عامة {#overview}

تعد الخرائط النقطية إضافات مهمة ومفيدة لخرائط OsmAnd المتجهية. فهي تتيح لك دمج مصادر خرائط متنوعة مع الخرائط المتجهية. على سبيل المثال، يتم عرض المعلومات حول التلال والمنحدرات كطبقة نقطية. يمكنك عرض طبقة علوية من مسارات المشي لمسافات طويلة، وخرائط الأمطار، وبيانات حركة المرور في الوقت الفعلي، وطبقة علوية من صور الأقمار الصناعية على خريطة متجهية أساسية شبه شفافة. يمكنك أيضًا تبديل الخرائط الافتراضية إلى مربعات نقطية على الويب.

تُقدم الخرائط النقطية في OsmAnd عادةً كمجموعة من الصور الصغيرة (المربعات) المرتبة في شبكة. على عكس الخرائط المتجهية، التي تخزن الكائنات مثل الطرق والنقاط والمضلعات كبيانات، فإن مربعات الخرائط النقطية هي صور مُعالجة مسبقًا ويمكن أن تظهر منقطة عند مستويات التكبير العالية لأن كل بكسل له قيمة ثابتة.

**المزايا:**
- نظرًا لأن الخرائط النقطية يتم عرضها مسبقًا، فإنها تُحمَّل بشكل أسرع، مما يلغي حاجة الجهاز إلى معالجة وعرض البيانات في الوقت الفعلي.
- يمكن تحميل الخرائط النقطية ديناميكيًا أثناء التصفح.
- يمكنك إنشاء ذاكرة تخزين مؤقت دون اتصال وتنزيل المربعات المفقودة فقط حسب الحاجة.
- يمكنك استخدام عدد غير محدود من مصادر الويب الخارجية للخرائط النقطية، مما يجعلها مرنة لأنواع مختلفة من الخرائط، مثل عروض الأقمار الصناعية أو الخرائط المتخصصة.
- يمكن تحديث البيانات النقطية، مثل معلومات حركة المرور، بانتظام بعد انتهاء صلاحيتها (على سبيل المثال، كل ٢٠-٣٠ دقيقة، حسب الإعدادات).

**العيوب:**
- تشغل الخرائط النقطية مساحة أكبر بكثير من الخرائط المتجهية. على سبيل المثال، قد تكون خريطة مدينة بحجم ١٥ ميجابايت كخريطة متجهية، ولكنها تزيد إلى ٥٠ ميجابايت عند مستوى التكبير ١٥، و ٢٠٠ ميجابايت عند مستوى التكبير ١٦، وتصل إلى ٨٠٠ ميجابايت عند مستوى التكبير ١٧.
- لا يمكنك النقر على أماكن أو كائنات معينة على الخرائط النقطية للحصول على مزيد من المعلومات.
- لا يمكن تصميم الخرائط النقطية أو تعديلها لاستبعاد كائنات معينة.
- يمكن أن يؤدي التكبير المفرط إلى ظهور الصورة منقطة، خاصة إذا لم تكن المربعات عالية الدقة متوفرة.
- لا يمكن تدوير الخريطة دون تدوير النص، مما قد يجعل قراءة التسميات صعبة.


## حالات الاستخدام {#use-cases}

للخرائط النقطية مجموعة واسعة من الاستخدامات. إليك بعض أكثرها شيوعًا:

- صور الأقمار الصناعية كطبقة سفلية.
- معلومات حركة المرور في الوقت الفعلي.
- توقعات الأمطار كطبقة علوية.
- الخرائط الطبوغرافية مع تظليل التلال والمنحدرات.
- مسارات ركوب الدراجات والجري النشطة كطبقة علوية.
- معلومات السفن في الوقت الفعلي.
- مربعات OpenStreetMap عبر الإنترنت لتحرير OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
يمكنك أيضًا تغيير [المصدر الرئيسي](#main) للخرائط من الخرائط المتجهية إلى المربعات عبر الإنترنت.
:::


## البدء في الاستخدام {#getting-started}

**تفعيل الإضافة**.

- **iOS**. بالنسبة لنظام *iOS*، تعمل هذه الميزة بشكل افتراضي.
- **Android**. بالنسبة لنظام *Android*، لاستخدام الخرائط النقطية في OsmAnd، تحتاج إلى تفعيل [إضافة الخرائط عبر الإنترنت](../plugins/online-map.md). اتبع هذه الخطوات: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**[تغيير معلمات الطبقة](#layers)**. لتحسين رؤية ومزج طبقات الخرائط النقطية، يمكنك ضبط شفافية الطبقة باستخدام شريط التمرير على الشاشة. بالإضافة إلى ذلك، يمكنك تعديل نمط الخريطة المتجهية عن طريق إخفاء المضلعات، مما يجعل الطبقات السفلية أكثر وضوحًا. هذا مفيد بشكل خاص عند عرض صور الأقمار الصناعية.


## الطبقات {#layers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr_new.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios_new.png)  

</TabItem>

</Tabs>

في OsmAnd، يمكن أن تعمل الخرائط النقطية كمصدر خريطة إضافي إلى جانب الخرائط المتجهية الافتراضية، والتي تم تحسينها للاستخدام دون اتصال بالإنترنت.  

لديك المرونة لإضافة طبقة أو طبقتين من المربعات عبر الإنترنت لتكملة خريطتك الأساسية. يتيح لك هذا عرض ما يصل إلى ثلاث طبقات من الخرائط في وقت واحد على شاشتك (بالإضافة إلى التضاريس). فكر فيها مثل فطيرة: [**الطبقة السفلية**](#underlay) (قاعدة نقطية أسفل)، [**الرئيسية**](#main) (متجهية* أو نقطية أساسية)، [**الطبقة العلوية**](#overlay) (نقطية فوق)، مع تظليل [**التضاريس**](#terrain) فوق الجميع. على سبيل المثال، يمكنك الحصول على خريطة OsmAnd المتجهية غير المتصلة بالإنترنت كقاعدة رئيسية، وتغطيتها بعرض القمر الصناعي، ووضع خريطة مسار الدراجات كطبقة سفلية لمزيد من التفاصيل.

>[الخرائط المتجهية](./vector-maps.md) متوفرة **فقط** في [الطبقة الرئيسية](#main) (وهي الافتراضية هناك). يمكن استخدام الخرائط النقطية في جميع الطبقات الثلاث: الرئيسية، والسفلية، والعلوية.



إذا كنت ترغب في تبديل هذه الطبقات بشكل أسرع ([مصدر الخريطة الرئيسي](#main)، [الطبقة العلوية](#overlay)، [الطبقة السفلية](#underlay)، و[التضاريس](#terrain))، يمكنك إضافة [إجراء سريع (زر مخصص)](../widgets/quick-action.md) إلى شاشة الخريطة وتعيين الإجراءات الخاصة بالخريطة المقابلة إليها.

يمكنك أيضًا ضبط شفافية الخريطة الأساسية لمزجها مع طبقاتك. إذا لزم الأمر، يمكنك تمكين شريط تمرير الشفافية على الشاشة الرئيسية لإجراء تعديلات سريعة.

### الرئيسية {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,gpx_add_track"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source_1.png) ![Show maps](@site/static/img/plugins/online-maps/map_source_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps,map_settings_install_more"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type_new.png)

</TabItem>

</Tabs>

افتراضيًا، يتم تعيين الخريطة الرئيسية إلى [الخرائط المتجهية دون اتصال](./vector-maps.md) (خرائط OsmAnd)، المحسّنة للاستخدام دون اتصال. يمكنك اختيار مصدر خريطة مختلف من القائمة (_إضافة المزيد_(أندرويد) أو _تثبيت المزيد_ (iOS)) أو [إضافة](#add-new-online-source) خاص بك.

### الطبقة العلوية {#overlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

١. *تشغيل/إيقاف* طبقة الطبقة السفلية.
٢. *شفافية الطبقة العلوية* (*أندرويد*)/ *شفافية* خريطة الطبقة العلوية (*iOS*).
٣. *إظهار شريط تمرير الشفافية* (*أندرويد*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
٤. *مصدر خريطة الطبقة العلوية* (*أندرويد*) / *الطبقات المتاحة* (*iOS*). اختر خريطة مربعات عبر الإنترنت من القائمة لإضافتها مباشرة كطبقة علوية.
٥. *إظهار رموز الخريطة* - مثل النصوص وعلامات الطرق وغيرها.  
٦. *إضافة مصدر عبر الإنترنت* (*iOS*). [إضافة مصدر عبر الإنترنت جديد](#add-new-online-source).
٧. *استيراد من المستندات* (*iOS*).

### الطبقة السفلية {#underlay}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

١. *تشغيل/إيقاف* الطبقة السفلية.
٢. *شفافية الخريطة الأساسية*.
٣. *إظهار شريط تمرير الشفافية* (*أندرويد*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
٤. *مصدر خريطة الطبقة السفلية* (*أندرويد*) / *الطبقات المتاحة* (*iOS*). اختر خريطة مربعات عبر الإنترنت من القائمة لإضافتها مباشرة كطبقة سفلية.
٥. *إظهار/إخفاء المضلعات*.
٦. *إضافة مصدر عبر الإنترنت* (*iOS*). [إضافة مصدر عبر الإنترنت جديد](#add-new-online-source).
٧. *استيراد من المستندات* (*iOS*).

### التضاريس {#terrain}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

في سياق الخرائط النقطية، يشير [التضاريس](../plugins/topography.md#terrain) إلى طبقة تظليل الارتفاع تساعد في تصور شكل المناظر الطبيعية على خريطة مسطحة. تعتمد هذه الطبقة على بيانات تضاريس نقطية وتُعرض فوق الخريطة الأساسية لتحسين إدراك المنحدرات، وأشكال التضاريس.

تظليل التضاريس هو واحدة من طبقات الرستر المتاحة في OsmAnd ويمثل تصور ارتفاع ملون مشتق من بيانات الارتفاع. 

لاستخدام طبقة التضاريس تحتاج إلى:
١. شراء إضافة الطبوغرافيا:
    - [مشتريات أندرويد](../purchases/android.md)
    - [مشتريات iOS](../purchases/ios.md)
٢. تفعيل [إضافة الطبوغرافيا](../plugins/topography.md):  
    *القائمة → الإضافات → ︙ → تفعيل*
٣. حدد منطقتك المطلوبة، وقم بتنزيل تظليل التلال أو المنحدرات (لـ Maps+) أو خريطة التضاريس ثلاثية الأبعاد (لـ Pro).
٤. قد تستغرق عملية التنزيل بعض الوقت، اعتمادًا على حجم المنطقة المحددة وسرعة اتصالك بالإنترنت.

يمكن دمج تصور التضاريس مع طبقات رستر أخرى ومع الخريطة المتجهية الافتراضية.

الميزات المتقدمة للتضاريس، بما في ذلك الارتفاع ثلاثي الأبعاد (فقط Pro) وخيارات إضافية متعلقة بالتضاريس، موصوفة في مقالة [الطبوغرافيا](../plugins/topography.md).

<!--
## تظليل التلال / الانحدار {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**تظليل التلال (Hillshade)** و **الانحدار (Slope)** هما خرائط نقطية غير متصلة بالإنترنت تعرض تضاريس الأرض. يتم عرضهما كطبقة خريطة خاصة، وهي طبقة علوية ثانية على الخريطة الأساسية. تحتوي الخرائط على معلومات ارتفاع إضافية لمساعدتك على فهم انحدار وظلال المناظر الطبيعية بشكل أكثر دقة. تستند معلومات *تظليل التلال* و *الانحدار* إلى بيانات من مصدر واحد، وهو *ملف الكوكب العالمي*، وهي مقسمة إلى مناطق.  

لا تحتاج إلى التبديل بين طبقات تظليل التلال والانحدار، حيث يتم دمجهما تلقائيًا. يمكنك تحديد إحدى هاتين الطبقتين فقط لعرضها على الخريطة، ولكن لديك أيضًا خيار دمجهما معًا [كطبقة سفلية أو علوية](#layers) على طبقات أخرى للحصول على تمثيل مرئي أفضل للتضاريس.

للبدء في استخدام تظليل التلال والانحدار، تحتاج إلى:

١. شراء إضافة الطبوغرافيا:
    - [مشتريات أندرويد](../purchases/android.md)
    - [مشتريات iOS](../purchases/ios.md)
٢. تفعيل [إضافة الطبوغرافيا](../plugins/topography.md):  
    *القائمة ← الإضافات ← ︙ ← تفعيل*
٣. حدد منطقتك المطلوبة، وقم بتنزيل **خريطة التضاريس (ثلاثية الأبعاد)**.
٤. قد تستغرق عملية التنزيل بعض الوقت، اعتمادًا على حجم المنطقة المحددة وسرعة اتصالك بالإنترنت.


### تظليل التلال والتضاريس ثلاثية الأبعاد {#hillshade-and-3d-relief}

| تظليل التلال | التضاريس ثلاثية الأبعاد |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

تم وصف الفرق في عرض التضاريس على الخريطة عند تطبيق هذه الإعدادات في مقالة **الطبوغرافيا** في القسم المقابل [تظليل التلال والتضاريس ثلاثية الأبعاد](../plugins/topography.md#hillshade-and-3d-relief).


### تكوين خيارات العرض {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

يمكنك تخصيص مستوى التكبير للعرض والشفافية لتظليل التلال والانحدار. يمكنك قراءة المزيد في [مقالة الطبوغرافيا](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## التضاريس ثلاثية الأبعاد {#3d-relief}

:::note
[التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) هي ميزة مدفوعة في [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

ميزة [**التضاريس ثلاثية الأبعاد**](../plugins/topography.md#3d-relief) هي تقنية رسم خرائط تتيح تصور التضاريس على الخريطة باستخدام نماذج ثلاثية الأبعاد. تضيف هذه الميزة معلومات الارتفاع إلى خريطة ثنائية الأبعاد عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمقًا ويسمح لك بتصور التضاريس بشكل أفضل.  

*لبدء استخدام التضاريس ثلاثية الأبعاد*:  
تحتاج إلى شراء [خطة شراء OsmAnd Pro](../plugins/index.md#purchase)، وتفعيل [إضافة الطبوغرافيا](../plugins/topography.md)، وتشغيل عنصر [التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) في *القائمة → تكوين الخريطة*.


*كيف تعمل ميزة التضاريس ثلاثية الأبعاد*:  
*١.* لإنشاء تضاريس ثلاثية الأبعاد، يتلقى OsmAnd معلومات حول ارتفاع التضاريس.  
*٢.* بناءً على بيانات الارتفاع، يتم إنشاء نموذج ثلاثي الأبعاد لعرض الجبال والتلال والوديان وعناصر التضاريس الأخرى على الخريطة.  
*٣.* يعرض OsmAnd بعد ذلك هذه النماذج ثلاثية الأبعاد على خريطة مسطحة. يمكن تكبير الخريطة وتصغيرها وتدويرها لعرض التضاريس من زوايا ووجهات نظر مختلفة.  
*٤.* لا يعتمد عرض خطوط الكنتور على الخريطة على ما إذا كان مصدر الخريطة عبر الإنترنت أو دون اتصال.
-->


## إعداد/نسخ الخرائط {#preparecopy-maps}

هناك طرق متعددة لإضافة خريطة نقطية جديدة، أو نسخها من جهاز آخر، أو إعدادها على جهاز كمبيوتر، أو تنزيل المربعات مسبقًا لاستخدامها دون اتصال بالإنترنت. على سبيل المثال، يمكنك إنشاء حزمة الخرائط الخاصة بك على جهاز كمبيوتر باستخدام برامج خاصة مثل [MOBAC، OsmAndMapCreator، إلخ](../../technical/map-creation/index.md). عادةً ما يتم توزيع الخرائط النقطية كملفات بامتداد `.sqlitedb`.

فيما يلي الطرق الرئيسية لإضافة مصدر خريطة نقطية جديد غير محدد في OsmAnd بعد:

- افتح ملف `.sqlitedb` جاهز للاستخدام باستخدام OsmAnd.
- استورد حزمة تحتوي على خرائط عبر الإنترنت معدة مسبقًا من تطبيق OsmAnd آخر كـ **حزمة** خاصة بامتداد `.osf` عبر [وظيفة الاستيراد / التصدير](../personal/import-export.md).
- أنشئ مصدر خريطة جديد عبر الإنترنت على الجهاز المحمول نفسه.
- قم بإعداد عنوان URL سحري (magic URL) بمعلمات مصدر الخريطة عبر الإنترنت وافتحه باستخدام OsmAnd.


### إضافة مصدر عبر الإنترنت جديد {#add-new-online-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add_manually"/>*

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2_ios.png)

</TabItem>

</Tabs>

لإنشاء مصدر خريطة نقطية، تحتاج إلى معرفة **عنوان URL للمربع**، وهو عنوان URL محدد يوزع مربعات الخرائط في إسقاط مركاتور. على سبيل المثال، قد يبدو عنوان URL للمربع كما يلي: `https://tile.osmand.net/hd/6/55/25.png`، حيث يكون `https://tile.osmand.net/hd/` هو عنوان URL الأساسي.

فيما يلي المعلمات الرئيسية التي يجب تكوينها عند إعداد مصدر خريطة جديد عبر الإنترنت:

| المعلمة | الوصف |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | أدخل اسمًا لمصدر الخريطة الجديد عبر الإنترنت. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | أدخل أو الصق عنوان URL لمصدر المربعات عبر الإنترنت. تأكد من أنه يتبع تنسيق عنوان URL للمربعات. يمكن أن يحتوي عنوان URL على بعض العناصر النائبة، والتي سيحل OsmAnd محلها تلقائيًا بناءً على المربع المحدد. العناصر النائبة الأكثر شيوعًا مستندة إلى [اتفاقية أسماء المربعات في خرائط OpenStreetMap الزلقة](https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames): <ul><li>`{z}` أو `{0}`: مستوى التكبير</li><li>`{x}` أو `{1}`: فهرس X للمربع</li><li>`{y}` أو `{2}`: فهرس Y للمربع</li></ul> لأمثلة على العناصر النائبة الأقل شيوعًا، انظر [مصادر الخرائط النقطية عبر الإنترنت المحددة مسبقًا](https://github.com/osmandapp/web/blob/main/main/static/tile_sources.xml). |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | تؤثر هذه المعلمة على كيفية عرض الخريطة. <br/><ul><li>*كنوع خريطة*، ستقتصر الخريطة على مستويات التكبير المحددة.</li><li>*كطبقة علوية/سفلية*، ستظهر الخريطة عند مستويات التكبير المحددة، مع تطبيق التكبير أو التصغير خارج تلك المستويات.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | حدد المدة (بالدقائق) التي سيتم بعدها تحديث المربعات المخزنة مؤقتًا. يمكنك ترك هذا الحقل فارغًا إذا كنت لا تريد إعادة تحميل المربعات تلقائيًا. <br/><ul><li>يوم واحد = ١٤٤٠ دقيقة</li><li>أسبوع واحد = ١٠٠٨٠ دقيقة</li><li>٣٠ يومًا = ٤٣٢٠٠ دقيقة</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | اختر بين *إسقاط مركاتور الزائف* و *إسقاط مركاتور الإهليلجي*، اعتمادًا على المصدر. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | حدد كيفية تخزين المربعات: إما في *ملف SQLiteDB* أو *كملف صورة واحد لكل مربع*. |


### عنوان URL السحري لتثبيت مصدر الخريطة {#magic-url-to-install-map-source}

يمكن إضافة الخرائط عبر الإنترنت باستخدام رابط خاص إلى قائمة الخرائط النقطية في OsmAnd. انقر على هذا الرابط واختر OsmAnd لفتحه:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|معلمة الرابط|مثال|
|:--------|:---------------|
| [الجزء الثابت]| `http://osmand.net/add-tile-source` |
|[الفواصل]| ?   & |
|[الاسم]|name=TEST|
|[عنوان URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[مستويات التكبير]|min_zoom=9 / max_zoom=15|

ستجد الخريطة المضافة عبر الإنترنت في قائمة [الطبقة الرئيسية / السفلية / العلوية](#layers).


## إدارة بيانات الخريطة {#manage-map-data}

يمكن أن تشغل الخرائط النقطية قدرًا كبيرًا من مساحة القرص، لذلك قد تحتاج إلى التحقق منها بانتظام. بالنسبة لمجموعات البيانات الكبيرة، يوصى باستخدام *مصدر SQLite النقطي* لأنه سيخزن جميع المربعات في ملف واحد كبير (قاعدة بيانات SQLite).

- [**تنسيق SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**تنسيق Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

لتغيير تنسيق المربعات، يمكنك اختيار <Translate android="true" ids="storage_format"/> في قائمة تحرير الخرائط عبر الإنترنت:

- **أندرويد**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → اختر الخرائط عبر الإنترنت →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### مسح ذاكرة التخزين المؤقت للمربعات {#clear-tile-cache}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → اختر الخرائط عبر الإنترنت →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*

![Online sources list](@site/static/img/plugins/online-maps/clear_cache_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

![Online sources list](@site/static/img/plugins/online-maps/clear_cache_ios.png)
</TabItem>

</Tabs>

يتم تخزين المربعات في ذاكرة التخزين المؤقت عند استخدام الخرائط النقطية عبر الإنترنت كطبقة رئيسية / علوية / سفلية. يمكنك رؤية حجم ملف SQ Lite الخاص بك تحت اسم الخريطة عبر الإنترنت في القائمة. في بعض الأحيان، يكون التنظيف المنتظم مطلوبًا لتسريع عرض المربعات أو لتحديث البيانات.  

### تنزيل / تحديث المربعات {#download--update-tiles}

إذا كنت ترغب في الوصول إلى الخرائط النقطية دون اتصال بالإنترنت، فقد تحتاج إلى تحميل المربعات مسبقًا. يمكن القيام بذلك على جهازك المحمول، ولكن كن على علم بأن بعض الخدمات قد تحظر تنزيل الحزم الكبيرة. يمكنك أيضًا استخدام نفس الميزة لتحديث المربعات التي تم تنزيلها بالفعل لمناطق محددة، وإلا سيستمر OsmAnd في عرض المربعات المخزنة بالفعل في ذاكرة التخزين المؤقت.  

لكي تقوم الخرائط بتحديث المربعات تلقائيًا بعد فترة، يمكنك تعيين [وقت انتهاء الصلاحية](#add-new-online-source)، وعندها سيعيد OsmAnd تحميل المربعات بمجرد عرضها.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- لتنزيل أو تحديث المربعات النقطية، تحتاج إلى تحديد مصدر الخريطة عبر الإنترنت [كمصدر الخريطة الرئيسي](#layers) (**أندرويد / iOS**). يمكنك أيضًا تحديد المربعات عبر الإنترنت بشكل منفصل لخريطة [الطبقة العلوية](#overlay) أو [الطبقة السفلية](#underlay) (فقط لـ **أندرويد**).

- بالنسبة لإصدار **أندرويد** من تطبيق OsmAnd، تحتاج إلى تحديد منطقة وفقًا لحجم شاشة جهازك والنقر لفترة طويلة على الخريطة. ثم حدد [*إجراءات*](../map/map-context-menu.md#update--download-online-maps) في قائمة سياق الخريطة وخيار *تنزيل الخريطة* أو *تحديث الخريطة*. على شاشة تنزيل الخريطة، قم بإجراء تغييرات على الإعدادات اللازمة وانقر على تنزيل.  

- في إصدار **iOS** من تطبيق OsmAnd، تحتاج إلى النقر لفترة طويلة على الخريطة، ثم تحديد [*إجراءات*](../map/map-context-menu.md#update--download-online-maps) وخيار *تنزيل الخريطة* أو *تحديث الخريطة* من قائمة سياق الخريطة. على شاشة تنزيل الخريطة، يمكنك تحديد المنطقة المطلوبة وتعديل الإعدادات اللازمة. بعد تعيين جميع المعلمات، يمكنك رؤية عدد المربعات وحجم التنزيل.


### تغيير المعلمات {#change-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,quick_action_map_source_title"/> → اختر الخرائط عبر الإنترنت →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

يمكن استخدام الخرائط النقطية كما هي موجودة بالفعل إذا كانت المربعات قد تم تعيينها بالفعل. إذا تم توفير الخرائط النقطية عبر الإنترنت، فهناك دائمًا عنوان URL أساسي يجب تكوينه. هناك عدد قليل من المعلمات الأساسية الأخرى التي يمكن تغييرها للخرائط النقطية، يمكنك قراءة المزيد عن ذلك في [هذا القسم](#add-new-online-source) من المقالة. يتم ترميز المعلمات الأكثر تعقيدًا في المكونات الداخلية لـ [تنسيق SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)
- [إجراء سريع (زر مخصص)](../widgets/quick-action.md)
- [الخرائط عبر الإنترنت](../plugins/online-map.md)
- [الطبوغرافيا](../plugins/topography.md)
- [إنشاء خرائط نقطية ومتجهية دون اتصال](technical/map-creation/create-offline-maps-yourself.md)