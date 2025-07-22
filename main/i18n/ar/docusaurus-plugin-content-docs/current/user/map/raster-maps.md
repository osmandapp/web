---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
sidebar_position: 6
title: خرائط الراستر (عبر الإنترنت / دون اتصال)

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

تُعد خرائط الراستر إضافات مهمة ومفيدة لخرائط المتجهات في OsmAnd. فهي تتيح لك دمج مصادر خرائط متنوعة مع خرائط المتجهات. على سبيل المثال، يتم عرض معلومات التلال والمنحدرات كطبقة راستر. يمكنك عرض تراكب لمسارات المشي، وخرائط الأمطار، وبيانات حركة المرور في الوقت الفعلي، وتراكب لصور الأقمار الصناعية على خريطة متجهة أساسية شفافة. يمكنك أيضًا تبديل الخرائط الافتراضية إلى بلاطات راستر على الويب.

## حالات الاستخدام {#use-cases}

تتمتع خرائط الراستر بمجموعة واسعة من الاستخدامات. إليك بعض من الأكثر شيوعًا:

- صور الأقمار الصناعية كطبقة سفلية.
- معلومات حركة المرور في الوقت الفعلي.
- توقعات الأمطار كتراكب.
- خرائط طوبوغرافية مع تظليل التلال والمنحدرات.
- مسارات ركوب الدراجات والجري النشطة كتراكب.
- معلومات السفن في الوقت الفعلي.
- بلاطات OpenStreetMap عبر الإنترنت لتحرير OSM.

![نظرة عامة على الخرائط عبر الإنترنت](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
يمكنك أيضًا تغيير المصدر الرئيسي للخرائط من خرائط المتجهات إلى البلاطات عبر الإنترنت.
:::

## خرائط الراستر {#raster-maps}

تتكون الخرائط عبر الإنترنت في OsmAnd من بيانات راستر، والتي تتكون من وحدات بكسل (يُشار إليها أيضًا باسم خلايا الشبكة) - وهي في الأساس مجموعة من الصور الصغيرة المعروفة باسم البلاطات. على عكس خرائط المتجهات، التي تمثل البيانات مثل الطرق والنقاط والمضلعات باستخدام معلومات ثنائية، يتم ترتيب بلاطات خرائط الراستر في شبكة ويمكن أن تظهر منقطة عند مستويات التكبير العالية لأن كل بكسل له قيمة أو فئة ثابتة.

#### مقارنة بخرائط المتجهات الافتراضية {#comparison-to-default-vector-maps}

**المزايا:**

- نظرًا لأن خرائط الراستر مُجهزة مسبقًا، فإنها تُحمّل بشكل أسرع، مما يلغي حاجة الجهاز إلى معالجة البيانات وعرضها في الوقت الفعلي.
- يمكن تحميل خرائط الراستر ديناميكيًا أثناء التصفح.
- يمكنك إنشاء ذاكرة تخزين مؤقت دون اتصال وتنزيل البلاطات المفقودة فقط حسب الحاجة.
- يمكنك استخدام عدد غير محدود من مصادر الويب الخارجية لخرائط الراستر، مما يجعلها مرنة لأنواع الخرائط المختلفة، مثل عروض الأقمار الصناعية أو الخرائط المتخصصة.
- يمكن تحديث بيانات الراستر، مثل معلومات حركة المرور، بانتظام بعد انتهاء صلاحيتها (على سبيل المثال، كل 20-30 دقيقة، اعتمادًا على التكوين).

**العيوب:**

- تشغل خرائط الراستر مساحة أكبر بكثير من خرائط المتجهات. على سبيل المثال، قد تكون خريطة المدينة 15 ميجابايت كخريطة متجهة، ولكنها تزداد إلى 50 ميجابايت عند مستوى التكبير 15، و 200 ميجابايت عند مستوى التكبير 16، وما يصل إلى 800 ميجابايت عند مستوى التكبير 17.
- لا يمكنك النقر على أماكن أو كائنات محددة على خرائط الراستر للحصول على مزيد من المعلومات.
- لا يمكن تصميم خرائط الراستر أو تعديلها لاستبعاد كائنات محددة.
- قد يؤدي التكبير المفرط إلى ظهور الصورة منقطة، خاصة إذا كانت بلاطات عالية الدقة غير متوفرة.
- لا يمكن تدوير الخريطة دون تدوير النص، مما قد يجعل قراءة التسميات صعبة.

## كيفية استخدام خرائط الراستر {#how-to-use-raster-maps}

**تمكين المكون الإضافي**.

- **iOS**. بالنسبة لنظام *iOS*، تعمل هذه الميزة افتراضيًا.
- **Android**. بالنسبة لنظام *Android*، لاستخدام خرائط الراستر في OsmAnd، تحتاج إلى تمكين [مكون الخرائط عبر الإنترنت الإضافي](../plugins/online-map.md). اتبع هذه الخطوات: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> ← ⁞ ← <Translate android="true" ids="shared_string_enable"/>*

**تغيير معلمات الطبقة**. لتحسين رؤية ومزيج طبقات خريطة الراستر، يمكنك ضبط شفافية الطبقة باستخدام شريط التمرير على الشاشة. بالإضافة إلى ذلك، يمكنك تعديل نمط خريطة المتجهات عن طريق إخفاء المضلعات، مما يجعل الطبقات السفلية أكثر وضوحًا. وهذا مفيد بشكل خاص عند عرض صور الأقمار الصناعية.

## تحديد خرائط الراستر {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إظهار الخرائط](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إظهار الخرائط](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

في OsmAnd، يمكن أن تكون خرائط الراستر مصدر خريطة إضافي بجانب خرائط المتجهات الافتراضية، والتي تم تحسينها للاستخدام دون اتصال.

لديك المرونة في إضافة طبقة أو طبقتين من البلاطات عبر الإنترنت لتكمل خريطتك الأساسية. يتيح لك هذا عرض ما يصل إلى ثلاث طبقات خريطة في وقت واحد على شاشتك. على سبيل المثال، يمكنك استخدام خريطة المتجهات غير المتصلة بالإنترنت من OsmAnd كأساس، وتراكبها بعرض الأقمار الصناعية، ووضع خريطة مسار الدراجات كطبقة سفلية للحصول على تفاصيل إضافية.

يمكنك أيضًا ضبط شفافية الخريطة الأساسية لمزجها مع طبقاتك. إذا لزم الأمر، يمكنك تمكين شريط تمرير الشفافية على الشاشة الرئيسية لإجراء تعديلات سريعة.

### رئيسي {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![إظهار الخرائط](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*

![إظهار الخرائط](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

يمكنك اختيار نمط خريطة من القائمة أو [إضافة](#add-new-online-raster-map-source) نمط خاص بك.

### طبقة التراكب {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![تكوين الطبقة السفلية / التراكب Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![تكوين الطبقة السفلية / التراكب iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *تشغيل/إيقاف* خريطة التراكب.
2. *شفافية التراكب* (*Android*)/ *شفافية* خريطة التراكب (*iOS*).
3. *إظهار شريط تمرير الشفافية* (*Android*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
4. *مصدر خريطة التراكب* (*Android*) / *الطبقات المتاحة* (*iOS*). يمكنك اختيار خريطة بلاطات للتثبيت أو التحديث.
5. *إظهار رموز الخريطة* - مثل النص وعلامات الطريق وغيرها.
6. *إضافة مصدر عبر الإنترنت* (*iOS*).
7. *استيراد من المستندات* (*iOS*).

### طبقة سفلية {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![تكوين الطبقة السفلية / التراكب Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![تكوين الطبقة السفلية / التراكب iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *تشغيل/إيقاف* خريطة الطبقة السفلية.
2. *شفافية الخريطة الأساسية*.
3. *إظهار شريط تمرير الشفافية* (*Android*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
4. *مصدر خريطة الطبقة السفلية* (*Android*) / *الطبقات المتاحة* (*iOS*). يمكنك اختيار خريطة بلاطات للتثبيت أو التحديث.
5. *إظهار/إخفاء المضلعات*.
6. *إضافة مصدر عبر الإنترنت* (*iOS*).
7. *استيراد من المستندات* (*iOS*).

## تظليل التلال / المنحدرات {#hillshade--slope}

![طبقات التضاريس](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**تظليل التلال** و**المنحدرات** هما خريطتان راستر غير متصلتين بالإنترنت تعرضان تضاريس التضاريس. يتم عرضهما كطبقة خريطة خاصة، وهي تراكب ثانٍ على الخريطة الأساسية. تحتوي الخرائط على معلومات ارتفاع إضافية لمساعدتك على فهم منحدر وظلال المناظر الطبيعية بشكل أكثر دقة. تستند معلومات *تظليل التلال* و*المنحدرات* إلى بيانات من مصدر واحد، وهو ملف *Global planet*، ويتم تقسيمها إلى مناطق.

لا تحتاج إلى التبديل بين طبقات تظليل التلال والمنحدرات، حيث يتم دمجها تلقائيًا. يمكنك تحديد طبقة واحدة فقط من هذه الطبقات لعرضها على الخريطة، ولكن لديك أيضًا خيار دمج كليهما [كطبقة سفلية أو تراكب](#select-raster-maps) على طبقات أخرى للحصول على تمثيل مرئي أكثر للتضاريس.

للبدء في استخدام تظليل التلال والمنحدرات، تحتاج إلى:

1. شراء مكون الطوبوغرافيا الإضافي:
    - [مشتريات Android](../purchases/android.md)
    - [مشتريات iOS](../purchases/ios.md)
2. تمكين [مكون الطوبوغرافيا الإضافي](../plugins/topography.md):
    *القائمة ← المكونات الإضافية ← ⁙ ← تمكين*
3. حدد منطقتك المطلوبة، وقم بتنزيل **خريطة التضاريس (ثلاثية الأبعاد)**.
4. قد تستغرق عملية التنزيل بعض الوقت، اعتمادًا على حجم المنطقة المحددة وسرعة اتصالك بالإنترنت.

### تظليل التلال والإغاثة ثلاثية الأبعاد {#hillshade-and-3d-relief}

| تظليل التلال | الإغاثة ثلاثية الأبعاد |
|---|---|
| ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![طبقات التضاريس](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

يتم وصف الفرق في عرض التضاريس على الخريطة عند تطبيق هذه الإعدادات في مقالة **الطوبوغرافيا** في القسم المقابل [تظليل التلال والإغاثة ثلاثية الأبعاد](../plugins/topography.md#hillshade-and-3d-relief).

### تكوين خيارات العرض {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![طبقات التضاريس](@site/static/img/plugins/online-maps/terrain_layers.png)

يمكنك تخصيص مستوى التكبير للعرض وشفافية تظليل التلال والمنحدرات. يمكنك قراءة المزيد في [مقالة الطوبوغرافيا](../plugins/topography.md#hillshade-slope-and-altitude-layers).

## الإغاثة ثلاثية الأبعاد {#3d-relief}

:::note
[الإغاثة ثلاثية الأبعاد](../plugins/topography.md#3d-relief) هي ميزة مدفوعة من [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![طبقات التضاريس](@site/static/img/plugins/online-maps/raster_maps_3d.png)

تُعد ميزة [**الإغاثة ثلاثية الأبعاد**](../plugins/topography.md#3d-relief) تقنية رسم خرائط تتيح تصور التضاريس على الخريطة باستخدام نماذج ثلاثية الأبعاد. تضيف هذه الميزة معلومات الارتفاع إلى خريطة ثنائية الأبعاد عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمقًا ويسمح لك بتصور التضاريس بشكل أفضل.

*للبدء في استخدام الإغاثة ثلاثية الأبعاد*:
تحتاج إلى شراء [خطة شراء OsmAnd Pro](../plugins/index.md#purchase)، وتمكين [مكون الطوبوغرافيا الإضافي](../plugins/topography.md)، وتشغيل عنصر [الإغاثة ثلاثية الأبعاد](../plugins/topography.md#3d-relief) في *القائمة ← تكوين الخريطة*.

*كيف تعمل ميزة الإغاثة ثلاثية الأبعاد*:
*1.* لإنشاء إغاثة ثلاثية الأبعاد، يتلقى OsmAnd معلومات حول ارتفاع التضاريس.
*2.* بناءً على بيانات الارتفاع، يتم إنشاء نموذج ثلاثي الأبعاد لعرض الجبال والتلال والوديان وعناصر التضاريس الأخرى على الخريطة.
*3.* يعرض OsmAnd بعد ذلك هذه النماذج ثلاثية الأبعاد على خريطة مسطحة. يمكن تكبير الخريطة وتصغيرها وتدويرها لعرض التضاريس من زوايا ووجهات نظر مختلفة.
*4.* لا يعتمد عرض خطوط الكنتور على الخريطة على ما إذا كان مصدر الخريطة عبر الإنترنت أو دون اتصال.

## إعداد/نسخ خرائط الراستر إلى الجهاز {#preparecopy-raster-maps-to-device}

هناك طرق متعددة لإضافة خريطة راستر جديدة، ونسخها من جهاز آخر، وإعدادها على جهاز الكمبيوتر، وتنزيل البلاطات مسبقًا لاستخدامها دون اتصال. على سبيل المثال، يمكنك إنشاء حزمة الخرائط الخاصة بك على جهاز الكمبيوتر باستخدام برامج خاصة مثل [MOBAC، OsmAndMapCreator، إلخ](../../technical/map-creation/index.md). عادةً ما يتم توزيع خرائط الراستر كملفات بامتداد `.sqlitedb`.

فيما يلي الطرق الرئيسية لإضافة مصدر خريطة راستر جديد غير معرف في OsmAnd بعد:

- افتح ملف `.sqlitedb` جاهز للاستخدام باستخدام OsmAnd.
- استورد حزمة بخرائط عبر الإنترنت مُعدة من تطبيق OsmAnd آخر كـ **حزمة** `.osf` خاصة عبر [وظيفة الاستيراد / التصدير](../personal/import-export.md).
- أنشئ مصدر خريطة جديد عبر الإنترنت على الجهاز المحمول نفسه.
- أعد عنوان URL سحريًا بمعلمات مصدر الخريطة عبر الإنترنت وافتحه باستخدام OsmAnd.

### إضافة مصدر خريطة راستر جديد عبر الإنترنت {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![إضافة مصدر عبر الإنترنت](@site/static/img/plugins/online-maps/add-online-source-2.png)

لإنشاء مصدر خريطة راستر، تحتاج إلى معرفة **عنوان URL للبلاطة**، وهو عنوان URL محدد يوزع بلاطات الخرائط في إسقاط ميركاتور. على سبيل المثال، قد يبدو عنوان URL للبلاطة كالتالي: `https://tile.osmand.net/hd/6/55/25.png`، حيث `tile.osmand.net/hd/` هو عنوان URL الأساسي.

فيما يلي المعلمات الرئيسية التي يجب تكوينها عند إعداد مصدر خريطة جديد عبر الإنترنت:

| المعلمة | الوصف |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | قم بتوفير اسم لمصدر الخريطة الجديد عبر الإنترنت. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | أدخل أو الصق عنوان URL لمصدر البلاطات عبر الإنترنت. تأكد من أنه يتبع تنسيق عنوان URL للبلاطة. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | تؤثر هذه المعلمة على كيفية عرض الخريطة. <br/><ul><li>كنوع *خريطة*، ستقتصر الخريطة على مستويات التكبير المحددة.</li><li>كتراكب/طبقة سفلية، ستظهر الخريطة عند مستويات التكبير المحددة، مع تطبيق تكبير أو تصغير خارج تلك المستويات.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | قم بتعيين المدة (بالدقائق) التي ستتجدد بعدها البلاطات المخزنة مؤقتًا. يمكنك ترك هذا الحقل فارغًا إذا كنت لا تريد إعادة تحميل البلاطات تلقائيًا. <br/><ul><li>يوم واحد = 1440 دقيقة</li><li>أسبوع واحد = 10,080 دقيقة</li><li>30 يومًا = 43,200 دقيقة</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | اختر بين *إسقاط Pseudo-Mercator* و*إسقاط Elliptic Mercator*، اعتمادًا على المصدر. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | حدد كيفية تخزين البلاطات: إما في *ملف SQLiteDB* أو كـ *ملف صورة واحد لكل بلاطة*. |

### عنوان URL سحري لتثبيت مصدر الخريطة {#magic-url-to-install-map-source}

يمكن إضافة الخرائط عبر الإنترنت باستخدام رابط خاص إلى قائمة خرائط OsmAnd Raster. انقر على هذا الرابط واختر OsmAnd للفتح:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|معلمة الرابط|مثال|
|:--------|:---------------|
|[جزء ثابت]| `http://osmand.net/add-tile-source` |
|[فواصل]| ? & |
|[الاسم]|name=TEST|
|[عنوان URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[مستويات التكبير]|min_zoom=9 / max_zoom=15|

ستجد خريطة عبر الإنترنت مضافة في قائمة [الطبقة الرئيسية / السفلية / التراكب](#select-raster-maps).

## إدارة خرائط الراستر {#manage-raster-maps}

يمكن أن تشغل خرائط الراستر مساحة كبيرة من القرص، لذلك قد تحتاج إلى التحقق منها بانتظام. بالنسبة لمجموعات البيانات الكبيرة، يوصى باستخدام *مصدر راستر SQLite* لأنه سيخزن جميع البلاطات في ملف كبير واحد (قاعدة بيانات SQLite).

- [**تنسيق SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**تنسيق Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

لتغيير تنسيق البلاطات، يمكنك اختيار <Translate android="true" ids="storage_format"/> في قائمة تحرير الخرائط عبر الإنترنت:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ← ⁞ ← <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*

### مسح ذاكرة التخزين المؤقت لخرائط الراستر {#clear-raster-map-cache}

![قائمة المصادر عبر الإنترنت](@site/static/img/plugins/online-maps/online-sources-list.png)

يتم تخزين البلاطات في ذاكرة التخزين المؤقت عند استخدام خرائط الراستر عبر الإنترنت كطبقة رئيسية / تراكب / سفلية. يمكنك رؤية حجم ملف SQ Lite الخاص بك تحت اسم الخريطة عبر الإنترنت في القائمة. في بعض الأحيان يكون التنظيف المنتظم مطلوبًا لتسريع عرض البلاطات أو لتحديث البيانات.

لمسح ذاكرة التخزين المؤقت لبلاطات الخريطة، تحتاج إلى القيام بما يلي:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ← ⁞ ← <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_clear_cache"/>*

### تنزيل / تحديث البلاطات {#download--update-tiles}

إذا كنت ترغب في الوصول إلى خرائط الراستر دون اتصال بالإنترنت، فقد تحتاج إلى تحميل البلاطات مسبقًا. يمكن القيام بذلك على جهازك المحمول، ولكن كن على دراية بأن بعض الخدمات قد تمنع تنزيلات الحزم الكبيرة. يمكنك أيضًا استخدام نفس الميزة لتحديث البلاطات التي تم تنزيلها بالفعل للمناطق المحددة، وإلا فسيستمر OsmAnd في عرض البلاطات المخزنة بالفعل في ذاكرة التخزين المؤقت.

لكي تقوم الخرائط بتحديث البلاطات تلقائيًا بعد فترة، يمكنك تعيين [وقت انتهاء الصلاحية](#add-new-online-raster-map-source)، ثم سيعيد OsmAnd تحميل البلاطات بمجرد عرضها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="خرائط راستر"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="خرائط راستر"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="خرائط راستر"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="خرائط راستر"/></td>
    </tr>
</table>

<!--

![تنزيل البلاطات Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![تنزيل البلاطات Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![تنزيل البلاطات Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![تنزيل البلاطات Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->

</TabItem>

<TabItem value="ios" label="iOS">

![تنزيل البلاطات iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- لتنزيل أو تحديث بلاطات الراستر، تحتاج إلى تحديد مصدر الخريطة عبر الإنترنت كمصدر [الخريطة الرئيسية](#select-raster-maps). يمكنك أيضًا تحديد بلاطات عبر الإنترنت بشكل منفصل لخريطة [التراكب](#overlay-layer) أو لخريطة [الطبقة السفلية](#underlay-layer).

- بالنسبة لإصدار **Android** من تطبيق OsmAnd، تحتاج إلى تحديد منطقة وفقًا لحجم شاشة جهازك والضغط مطولاً على الخريطة. ثم حدد [الإجراءات](../map/map-context-menu.md#customize) في قائمة سياق الخريطة وخيار *تنزيل الخريطة* أو *تحديث الخريطة*. في شاشة تنزيل الخريطة، قم بإجراء التغييرات على الإعدادات الضرورية وانقر على تنزيل.

- في إصدار iOS من تطبيق OsmAnd، تحتاج إلى الضغط مطولاً على الخريطة، ثم تحديد *الإجراءات* وخيار *تنزيل الخريطة* أو *تحديث الخريطة* من قائمة سياق الخريطة. في شاشة تنزيل الخريطة، يمكنك تحديد المنطقة المطلوبة وتعديل الإعدادات الضرورية. بعد تعيين جميع المعلمات، يمكنك رؤية عدد البلاطات وحجم التنزيل.

### تغيير معلمات خريطة الراستر {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ← ⁞ ← <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

يمكن استخدام خرائط الراستر كما هي موجودة بالفعل إذا كانت البلاطات قد تم تعيينها بالفعل. إذا تم توفير خرائط الراستر عبر الإنترنت، فهناك دائمًا عنوان URL أساسي يحتاج إلى التكوين. هناك عدد قليل من المعلمات الأساسية الأخرى التي يمكن تغييرها لخرائط الراستر، يمكنك قراءة المزيد عن ذلك في [هذا القسم](#add-new-online-raster-map-source) من المقالة. يتم ترميز المعلمات الأكثر تعقيدًا في المكونات الداخلية [لتنسيق SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).

## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: أكتوبر 2024*