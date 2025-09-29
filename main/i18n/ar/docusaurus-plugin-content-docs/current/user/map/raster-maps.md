---
source-hash: 18d6a31fa10f304cf5ed4712a573c452b11e151b3e929eabeedf23dd67ec220a
sidebar_position: 6
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


<InfoIncompleteArticle/>

## نظرة عامة {#overview}

تعد الخرائط النقطية إضافات مهمة ومفيدة لخرائط OsmAnd المتجهية. فهي تتيح لك دمج مصادر خرائط متنوعة مع الخرائط المتجهية. على سبيل المثال، يتم عرض المعلومات حول التلال والمنحدرات كطبقة نقطية. يمكنك عرض طبقة علوية من مسارات المشي لمسافات طويلة، وخرائط الأمطار، وبيانات حركة المرور في الوقت الفعلي، وطبقة علوية من صور الأقمار الصناعية على خريطة متجهية أساسية شبه شفافة. يمكنك أيضًا تبديل الخرائط الافتراضية إلى مربعات نقطية على الويب.


## حالات الاستخدام {#use-cases}

للخرائط النقطية مجموعة واسعة من الاستخدامات. إليك بعض أكثرها شيوعًا:

- صور الأقمار الصناعية كطبقة سفلية.
- معلومات حركة المرور في الوقت الفعلي.
- توقعات الأمطار كطبقة علوية.
- الخرائط الطبوغرافية مع تظليل التلال والمنحدرات.
- مسارات ركوب الدراجات والجري النشطة كطبقة علوية.
- معلومات السفن في الوقت الفعلي.
- مربعات OpenStreetMap عبر الإنترنت لتحرير OSM.

![نظرة عامة على الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
يمكنك أيضًا تغيير المصدر الرئيسي للخرائط من الخرائط المتجهية إلى المربعات عبر الإنترنت.
:::


## الخرائط النقطية {#raster-maps}

تتكون الخرائط عبر الإنترنت في OsmAnd من بيانات نقطية، والتي تتألف من وحدات بكسل (يشار إليها أيضًا بخلايا الشبكة) - وهي في الأساس مجموعة من الصور الصغيرة المعروفة باسم المربعات (tiles). على عكس الخرائط المتجهية، التي تمثل البيانات مثل الطرق والنقاط والمضلعات باستخدام معلومات ثنائية، يتم ترتيب مربعات الخرائط النقطية في شبكة ويمكن أن تظهر منقطة عند مستويات التكبير العالية لأن كل بكسل له قيمة أو فئة ثابتة.

### مقارنة بالخرائط المتجهية الافتراضية {#comparison-to-default-vector-maps}

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


## كيفية استخدام الخرائط النقطية {#how-to-use-raster-maps}

**تفعيل الإضافة**.

- **iOS**. بالنسبة لنظام *iOS*، تعمل هذه الميزة بشكل افتراضي.
- **Android**. بالنسبة لنظام *Android*، لاستخدام الخرائط النقطية في OsmAnd، تحتاج إلى تفعيل [إضافة الخرائط عبر الإنترنت](../plugins/online-map.md). اتبع هذه الخطوات: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**تغيير معلمات الطبقة**. لتحسين رؤية ومزج طبقات الخرائط النقطية، يمكنك ضبط شفافية الطبقة باستخدام شريط التمرير على الشاشة. بالإضافة إلى ذلك، يمكنك تعديل نمط الخريطة المتجهية عن طريق إخفاء المضلعات، مما يجعل الطبقات السفلية أكثر وضوحًا. هذا مفيد بشكل خاص عند عرض صور الأقمار الصناعية.


## تحديد الخرائط النقطية {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![عرض الخرائط](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![عرض الخرائط](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

في OsmAnd، يمكن أن تعمل الخرائط النقطية كمصدر خريطة إضافي إلى جانب الخرائط المتجهية الافتراضية، والتي تم تحسينها للاستخدام دون اتصال بالإنترنت.  

لديك المرونة لإضافة طبقة أو طبقتين من المربعات عبر الإنترنت لتكملة خريطتك الأساسية. يتيح لك هذا عرض ما يصل إلى ثلاث طبقات من الخرائط في وقت واحد على شاشتك. على سبيل المثال، يمكنك الحصول على خريطة OsmAnd المتجهية غير المتصلة بالإنترنت كقاعدة، وتغطيتها بعرض القمر الصناعي، ووضع خريطة مسار الدراجات كطبقة سفلية لمزيد من التفاصيل.  

يمكنك أيضًا ضبط شفافية الخريطة الأساسية لمزجها مع طبقاتك. إذا لزم الأمر، يمكنك تمكين شريط تمرير الشفافية على الشاشة الرئيسية لإجراء تعديلات سريعة.


### الطبقة الرئيسية {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![عرض الخرائط](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![عرض الخرائط](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

يمكنك اختيار نمط خريطة من القائمة أو [إضافة](#add-new-online-raster-map-source) نمط خاص بك.


### الطبقة العلوية (Overlay) {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![تكوين الطبقة السفلية / العلوية في أندرويد](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![تكوين الطبقة السفلية / العلوية في iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

١. *تشغيل/إيقاف* خريطة الطبقة السفلية.
٢. *شفافية الطبقة العلوية* (لأندرويد)/ *شفافية* خريطة الطبقة العلوية (لـ iOS).
٣. *إظهار شريط تمرير الشفافية* (لأندرويد) / *إظهار شريط التمرير على الخريطة* (لـ iOS). وصول سريع إلى إعداد الشفافية.
٤. *مصدر خريطة الطبقة العلوية* (لأندرويد) / *الطبقات المتاحة* (لـ iOS). يمكنك اختيار خريطة مربعات لتثبيتها أو تحديثها.
٥. *إظهار رموز الخريطة* - مثل النصوص وعلامات الطرق وغيرها.  
٦. *إضافة مصدر عبر الإنترنت* (لـ iOS).
٧. *استيراد من المستندات* (لـ iOS).


### الطبقة السفلية (Underlay) {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![تكوين الطبقة السفلية / العلوية في أندرويد](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![تكوين الطبقة السفلية / العلوية في iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

١. *تشغيل/إيقاف* خريطة الطبقة السفلية.
٢. *شفافية الخريطة الأساسية*.
٣. *إظهار شريط تمرير الشفافية* (لأندرويد) / *إظهار شريط التمرير على الخريطة* (لـ iOS). وصول سريع إلى إعداد الشفافية.
٤. *مصدر خريطة الطبقة السفلية* (لأندرويد) / *الطبقات المتاحة* (لـ iOS). يمكنك اختيار خريطة مربعات لتثبيتها أو تحديثها.
٥. *إظهار/إخفاء المضلعات*.
٦. *إضافة مصدر عبر الإنترنت* (لـ iOS).
٧. *استيراد من المستندات* (لـ iOS).


## تظليل التلال / الانحدار {#hillshade--slope}

![طبقات التضاريس](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**تظليل التلال (Hillshade)** و **الانحدار (Slope)** هما خرائط نقطية غير متصلة بالإنترنت تعرض تضاريس الأرض. يتم عرضهما كطبقة خريطة خاصة، وهي طبقة علوية ثانية على الخريطة الأساسية. تحتوي الخرائط على معلومات ارتفاع إضافية لمساعدتك على فهم انحدار وظلال المناظر الطبيعية بشكل أكثر دقة. تستند معلومات *تظليل التلال* و *الانحدار* إلى بيانات من مصدر واحد، وهو *ملف الكوكب العالمي*، وهي مقسمة إلى مناطق.  

لا تحتاج إلى التبديل بين طبقات تظليل التلال والانحدار، حيث يتم دمجهما تلقائيًا. يمكنك تحديد إحدى هاتين الطبقتين فقط لعرضها على الخريطة، ولكن لديك أيضًا خيار دمجهما معًا [كطبقة سفلية أو علوية](#select-raster-maps) على طبقات أخرى للحصول على تمثيل مرئي أفضل للتضاريس.

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
| ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

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

![طبقات التضاريس](@site/static/img/plugins/online-maps/terrain_layers.png)

يمكنك تخصيص مستوى التكبير للعرض والشفافية لتظليل التلال والانحدار. يمكنك قراءة المزيد في [مقالة الطبوغرافيا](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## التضاريس ثلاثية الأبعاد {#3d-relief}

:::note
[التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) هي ميزة مدفوعة في [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![خرائط نقطية ثلاثية الأبعاد](@site/static/img/plugins/online-maps/raster_maps_3d.png)

ميزة [**التضاريس ثلاثية الأبعاد**](../plugins/topography.md#3d-relief) هي تقنية رسم خرائط تتيح تصور التضاريس على الخريطة باستخدام نماذج ثلاثية الأبعاد. تضيف هذه الميزة معلومات الارتفاع إلى خريطة ثنائية الأبعاد عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمقًا ويسمح لك بتصور التضاريس بشكل أفضل.  

*لبدء استخدام التضاريس ثلاثية الأبعاد*:  
تحتاج إلى شراء [خطة شراء OsmAnd Pro](../plugins/index.md#purchase)، وتفعيل [إضافة الطبوغرافيا](../plugins/topography.md)، وتشغيل عنصر [التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) في *القائمة ← تكوين الخريطة*.


*كيف تعمل ميزة التضاريس ثلاثية الأبعاد*:  
*١.* لإنشاء تضاريس ثلاثية الأبعاد، يتلقى OsmAnd معلومات حول ارتفاع التضاريس.  
*٢.* بناءً على بيانات الارتفاع، يتم إنشاء نموذج ثلاثي الأبعاد لعرض الجبال والتلال والوديان وعناصر التضاريس الأخرى على الخريطة.  
*٣.* يعرض OsmAnd بعد ذلك هذه النماذج ثلاثية الأبعاد على خريطة مسطحة. يمكن تكبير الخريطة وتصغيرها وتدويرها لعرض التضاريس من زوايا ووجهات نظر مختلفة.  
*٤.* لا يعتمد عرض خطوط الكنتور على الخريطة على ما إذا كان مصدر الخريطة عبر الإنترنت أو دون اتصال.


## إعداد/نسخ الخرائط النقطية إلى الجهاز {#preparecopy-raster-maps-to-device}

هناك طرق متعددة لإضافة خريطة نقطية جديدة، أو نسخها من جهاز آخر، أو إعدادها على جهاز كمبيوتر، أو تنزيل المربعات مسبقًا لاستخدامها دون اتصال بالإنترنت. على سبيل المثال، يمكنك إنشاء حزمة الخرائط الخاصة بك على جهاز كمبيوتر باستخدام برامج خاصة مثل [MOBAC، OsmAndMapCreator، إلخ](../../technical/map-creation/index.md). عادةً ما يتم توزيع الخرائط النقطية كملفات بامتداد `.sqlitedb`.

فيما يلي الطرق الرئيسية لإضافة مصدر خريطة نقطية جديد غير محدد في OsmAnd بعد:

- افتح ملف `.sqlitedb` جاهز للاستخدام باستخدام OsmAnd.
- استورد حزمة تحتوي على خرائط عبر الإنترنت معدة مسبقًا من تطبيق OsmAnd آخر كـ **حزمة** خاصة بامتداد `.osf` عبر [وظيفة الاستيراد / التصدير](../personal/import-export.md).
- أنشئ مصدر خريطة جديد عبر الإنترنت على الجهاز المحمول نفسه.
- قم بإعداد عنوان URL سحري (magic URL) بمعلمات مصدر الخريطة عبر الإنترنت وافتحه باستخدام OsmAnd.


### إضافة مصدر خريطة نقطية جديد عبر الإنترنت {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![إضافة مصدر عبر الإنترنت](@site/static/img/plugins/online-maps/add-online-source-2.png)

لإنشاء مصدر خريطة نقطية، تحتاج إلى معرفة **عنوان URL للمربع**، وهو عنوان URL محدد يوزع مربعات الخرائط في إسقاط مركاتور. على سبيل المثال، قد يبدو عنوان URL للمربع كما يلي: `https://tile.osmand.net/hd/6/55/25.png`، حيث يكون `https://tile.osmand.net/hd/` هو عنوان URL الأساسي.

فيما يلي المعلمات الرئيسية التي يجب تكوينها عند إعداد مصدر خريطة جديد عبر الإنترنت:

| المعلمة | الوصف |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | أدخل اسمًا لمصدر الخريطة الجديد عبر الإنترنت. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | أدخل أو الصق عنوان URL لمصدر المربعات عبر الإنترنت. تأكد من أنه يتبع تنسيق عنوان URL للمربعات. |
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

ستجد الخريطة المضافة عبر الإنترنت في قائمة [الطبقة الرئيسية / السفلية / العلوية](#select-raster-maps).


## إدارة الخرائط النقطية {#manage-raster-maps}

يمكن أن تشغل الخرائط النقطية قدرًا كبيرًا من مساحة القرص، لذلك قد تحتاج إلى التحقق منها بانتظام. بالنسبة لمجموعات البيانات الكبيرة، يوصى باستخدام *مصدر SQLite النقطي* لأنه سيخزن جميع المربعات في ملف واحد كبير (قاعدة بيانات SQLite).

- [**تنسيق SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**تنسيق Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

لتغيير تنسيق المربعات، يمكنك اختيار <Translate android="true" ids="storage_format"/> في قائمة تحرير الخرائط عبر الإنترنت:

- **أندرويد**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ←  
&#8942; ← <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### مسح ذاكرة التخزين المؤقت للخرائط النقطية {#clear-raster-map-cache}

![قائمة المصادر عبر الإنترنت](@site/static/img/plugins/online-maps/online-sources-list.png)

يتم تخزين المربعات في ذاكرة التخزين المؤقت عند استخدام الخرائط النقطية عبر الإنترنت كطبقة رئيسية / علوية / سفلية. يمكنك رؤية حجم ملف SQ Lite الخاص بك تحت اسم الخريطة عبر الإنترنت في القائمة. في بعض الأحيان، يكون التنظيف المنتظم مطلوبًا لتسريع عرض المربعات أو لتحديث البيانات.  

لمسح ذاكرة التخزين المؤقت لمربعات الخريطة، تحتاج إلى القيام بما يلي:

- **أندرويد**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ←  
&#8942; ← <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_clear_cache"/>*



### تنزيل / تحديث المربعات {#download--update-tiles}

إذا كنت ترغب في الوصول إلى الخرائط النقطية دون اتصال بالإنترنت، فقد تحتاج إلى تحميل المربعات مسبقًا. يمكن القيام بذلك على جهازك المحمول، ولكن كن على علم بأن بعض الخدمات قد تحظر تنزيل الحزم الكبيرة. يمكنك أيضًا استخدام نفس الميزة لتحديث المربعات التي تم تنزيلها بالفعل لمناطق محددة، وإلا سيستمر OsmAnd في عرض المربعات المخزنة بالفعل في ذاكرة التخزين المؤقت.  

لكي تقوم الخرائط بتحديث المربعات تلقائيًا بعد فترة، يمكنك تعيين [وقت انتهاء الصلاحية](#add-new-online-raster-map-source)، وعندها سيعيد OsmAnd تحميل المربعات بمجرد عرضها.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="خرائط-نقطية"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="خرائط-نقطية"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="خرائط-نقطية"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="خرائط-نقطية"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![تنزيل المربعات في iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- لتنزيل أو تحديث المربعات النقطية، تحتاج إلى تحديد مصدر الخريطة عبر الإنترنت [كمصدر الخريطة الرئيسي](#select-raster-maps) (**أندرويد / iOS**). يمكنك أيضًا تحديد المربعات عبر الإنترنت بشكل منفصل لخريطة [الطبقة العلوية](#overlay-layer) أو [الطبقة السفلية](#underlay-layer) (فقط لـ **أندرويد**).

- بالنسبة لإصدار **أندرويد** من تطبيق OsmAnd، تحتاج إلى تحديد منطقة وفقًا لحجم شاشة جهازك والنقر لفترة طويلة على الخريطة. ثم حدد [*إجراءات*](../map/map-context-menu.md#update--download-online-maps) في قائمة سياق الخريطة وخيار *تنزيل الخريطة* أو *تحديث الخريطة*. على شاشة تنزيل الخريطة، قم بإجراء تغييرات على الإعدادات اللازمة وانقر على تنزيل.  

- في إصدار **iOS** من تطبيق OsmAnd، تحتاج إلى النقر لفترة طويلة على الخريطة، ثم تحديد [*إجراءات*](../map/map-context-menu.md#update--download-online-maps) وخيار *تنزيل الخريطة* أو *تحديث الخريطة* من قائمة سياق الخريطة. على شاشة تنزيل الخريطة، يمكنك تحديد المنطقة المطلوبة وتعديل الإعدادات اللازمة. بعد تعيين جميع المعلمات، يمكنك رؤية عدد المربعات وحجم التنزيل.


### تغيير معلمات الخريطة النقطية {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ←  &#8942; ← <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

يمكن استخدام الخرائط النقطية كما هي موجودة بالفعل إذا كانت المربعات قد تم تعيينها بالفعل. إذا تم توفير الخرائط النقطية عبر الإنترنت، فهناك دائمًا عنوان URL أساسي يجب تكوينه. هناك عدد قليل من المعلمات الأساسية الأخرى التي يمكن تغييرها للخرائط النقطية، يمكنك قراءة المزيد عن ذلك في [هذا القسم](#add-new-online-raster-map-source) من المقالة. يتم ترميز المعلمات الأكثر تعقيدًا في المكونات الداخلية لـ [تنسيق SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)