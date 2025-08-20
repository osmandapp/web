---
source-hash: 8656c688a740924ceba6f990dbce2cb596b8d6da1d84627c6aa7082b084dadaf
sidebar_position: 6
title: خرائط نقطية (متصلة / غير متصلة)
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

تُعد الخرائط النقطية إضافات مهمة ومفيدة لخرائط أوزماند المتجهة. فهي تتيح لك دمج مصادر خرائط متنوعة مع الخرائط المتجهة. على سبيل المثال، تُعرض معلومات التلال والمنحدرات كطبقة نقطية. يمكنك عرض تراكب لمسارات المشي، وخرائط الأمطار، وبيانات حركة المرور في الوقت الفعلي، وتراكب لصور الأقمار الصناعية على خريطة متجهة أساسية شفافة. يمكنك أيضًا تبديل الخرائط الافتراضية إلى مربعات نقطية على الويب.


## حالات الاستخدام {#use-cases}

تتمتع الخرائط النقطية بمجموعة واسعة من الاستخدامات. إليك بعض من أشهرها:

- صور الأقمار الصناعية كطبقة سفلية.
- معلومات حركة المرور في الوقت الفعلي.
- توقعات الأمطار كطبقة علوية.
- خرائط تضاريسية مع تظليل التلال والمنحدرات.
- مسارات ركوب الدراجات والجري النشطة كطبقة علوية.
- معلومات السفن في الوقت الفعلي.
- مربعات OpenStreetMap عبر الإنترنت لتحرير OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
يمكنك أيضًا تغيير المصدر الرئيسي للخرائط من الخرائط المتجهة إلى المربعات عبر الإنترنت.
:::


## الخرائط النقطية {#raster-maps}

تتكون الخرائط عبر الإنترنت في أوزماند من بيانات نقطية، والتي تتكون من وحدات بكسل (يشار إليها أيضًا بخلايا الشبكة) - وهي في الأساس مجموعة من الصور الصغيرة المعروفة باسم المربعات. على عكس الخرائط المتجهة، التي تمثل البيانات مثل الطرق والنقاط والمضلعات باستخدام معلومات ثنائية، يتم ترتيب مربعات الخرائط النقطية في شبكة وقد تظهر متقطعة عند مستويات التكبير العالية لأن كل بكسل له قيمة أو فئة ثابتة.

#### مقارنة بالخرائط المتجهة الافتراضية {#comparison-to-default-vector-maps}

**المزايا:**

- نظرًا لأن الخرائط النقطية يتم عرضها مسبقًا، فإنها تُحمّل بشكل أسرع، مما يلغي الحاجة إلى معالجة الجهاز وعرض البيانات في الوقت الفعلي.
- يمكن تحميل الخرائط النقطية ديناميكيًا أثناء التصفح.
- يمكنك إنشاء ذاكرة تخزين مؤقت غير متصلة بالإنترنت وتنزيل المربعات المفقودة فقط حسب الحاجة.
- يمكنك استخدام عدد غير محدود من مصادر الويب الخارجية للخرائط النقطية، مما يجعلها مرنة لأنواع الخرائط المختلفة، مثل عروض الأقمار الصناعية أو الخرائط المتخصصة.
- يمكن تحديث البيانات النقطية، مثل معلومات حركة المرور، بانتظام بعد انتهاء الصلاحية (على سبيل المثال، كل 20-30 دقيقة، اعتمادًا على التكوين).

**العيوب:**

- تشغل الخرائط النقطية مساحة أكبر بكثير من الخرائط المتجهة. على سبيل المثال، قد تكون خريطة مدينة بحجم 15 ميجابايت كخريطة متجهة، ولكنها تزيد إلى 50 ميجابايت عند مستوى التكبير 15، و200 ميجابايت عند مستوى التكبير 16، وما يصل إلى 800 ميجابايت عند مستوى التكبير 17.
- لا يمكنك النقر على أماكن أو كائنات محددة على الخرائط النقطية للحصول على مزيد من المعلومات.
- لا يمكن تصميم الخرائط النقطية أو تعديلها لاستبعاد كائنات محددة.
- قد يؤدي التكبير المفرط إلى ظهور الصورة متقطعة، خاصة إذا كانت مربعات عالية الدقة غير متوفرة.
- لا يمكن تدوير الخريطة دون تدوير النص، مما قد يجعل قراءة التسميات صعبة.


## كيفية استخدام الخرائط النقطية {#how-to-use-raster-maps}

**تفعيل المكون الإضافي**.

- **iOS**. بالنسبة لنظام *iOS*، تعمل هذه الميزة افتراضيًا.
- **أندرويد**. بالنسبة لنظام *أندرويد*، لاستخدام الخرائط النقطية في أوزماند، تحتاج إلى تمكين [مكون الخرائط عبر الإنترنت الإضافي](../plugins/online-map.md). اتبع هذه الخطوات: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> ← &#8942; ← <Translate android="true" ids="shared_string_enable"/>*

**تغيير معلمات الطبقة**. لتحسين رؤية ومزج طبقات الخرائط النقطية، يمكنك ضبط شفافية الطبقة باستخدام شريط التمرير على الشاشة. بالإضافة إلى ذلك، يمكنك تعديل نمط الخريطة المتجهة عن طريق إخفاء المضلعات، مما يجعل الطبقات السفلية أكثر وضوحًا. وهذا مفيد بشكل خاص عند عرض صور الأقمار الصناعية.


## تحديد الخرائط النقطية {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

في أوزماند، يمكن أن تعمل الخرائط النقطية كمصدر خريطة إضافي بجانب خرائط المتجهات الافتراضية، والتي تم تحسينها للاستخدام دون اتصال.

لديك المرونة لإضافة طبقة أو طبقتين من المربعات عبر الإنترنت لتكمل خريطتك الأساسية. يتيح لك هذا عرض ما يصل إلى ثلاث طبقات خريطة في وقت واحد على شاشتك. على سبيل المثال، يمكنك أن يكون لديك خريطة المتجهات غير المتصلة بالإنترنت من أوزماند كأساس، وتراكبها بعرض القمر الصناعي، ووضع خريطة مسار الدراجة كطبقة سفلية للحصول على تفاصيل إضافية.

يمكنك أيضًا ضبط شفافية الخريطة الأساسية لمزجها مع طبقاتك. إذا لزم الأمر، يمكنك تمكين شريط تمرير الشفافية على الشاشة الرئيسية لإجراء تعديلات سريعة.


### رئيسي {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

يمكنك اختيار نمط خريطة من القائمة أو [إضافة](#add-new-online-raster-map-source) نمط خاص بك.


### طبقة التراكب {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *تشغيل/إيقاف* خريطة الطبقة السفلية.
2. *شفافية التراكب* (*أندرويد*)/ *شفافية* خريطة التراكب (*iOS*).
3. *إظهار شريط تمرير الشفافية* (*أندرويد*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
4. *مصدر خريطة التراكب* (*أندرويد*) / *الطبقات المتاحة* (*iOS*). يمكنك اختيار خريطة مربعات لتثبيتها أو تحديثها.
5. *إظهار رموز الخريطة* - مثل النص وعلامات الطريق وغيرها.
6. *إضافة مصدر عبر الإنترنت* (*iOS*).
7. *استيراد من المستندات* (*iOS*).


### طبقة سفلية {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *تشغيل/إيقاف* خريطة الطبقة السفلية.
2. *شفافية الخريطة الأساسية*.
3. *إظهار شريط تمرير الشفافية* (*أندرويد*) / *إظهار شريط التمرير على الخريطة* (*iOS*). وصول سريع إلى إعداد الشفافية.
4. *مصدر خريطة الطبقة السفلية* (*أندرويد*) / *الطبقات المتاحة* (*iOS*). يمكنك اختيار خريطة مربعات لتثبيتها أو تحديثها.
5. *إظهار/إخفاء المضلعات*.
6. *إضافة مصدر عبر الإنترنت* (*iOS*).
7. *استيراد من المستندات* (*iOS*).


## تظليل التلال / المنحدرات {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**تظليل التلال** و **المنحدرات** هي خرائط نقطية غير متصلة بالإنترنت تعرض تضاريس التضاريس. يتم عرضها كطبقة خريطة خاصة، وهي طبقة تراكب ثانية على الخريطة الأساسية. تحتوي الخرائط على معلومات ارتفاع إضافية لمساعدتك على فهم منحدر وظلال المناظر الطبيعية بشكل أكثر دقة. تستند معلومات *تظليل التلال* و *المنحدرات* إلى بيانات من مصدر واحد، وهو ملف *الكوكب العالمي*، ويتم تقسيمها إلى مناطق.

لا تحتاج إلى التبديل بين طبقات تظليل التلال والمنحدرات، حيث يتم دمجها تلقائيًا. يمكنك تحديد طبقة واحدة فقط من هذه الطبقات لعرضها على الخريطة، ولكن لديك أيضًا خيار دمجها معًا [كطبقة سفلية أو تراكب](#select-raster-maps) على طبقات أخرى للحصول على تمثيل مرئي أكثر للتضاريس.

للبدء باستخدام تظليل التلال والمنحدرات، تحتاج إلى:

1. شراء مكون التضاريس الإضافي:
    - [مشتريات أندرويد](../purchases/android.md)
    - [مشتريات iOS](../purchases/ios.md)
2. تمكين [مكون التضاريس الإضافي](../plugins/topography.md):
    *القائمة ← المكونات الإضافية ← ︙ ← تمكين*
3. حدد منطقتك المطلوبة، وقم بتنزيل **خريطة التضاريس (ثلاثية الأبعاد)**.
4. قد تستغرق عملية التنزيل بعض الوقت، اعتمادًا على حجم المنطقة المحددة وسرعة اتصالك بالإنترنت.


### تظليل التلال والتضاريس ثلاثية الأبعاد {#hillshade-and-3d-relief}

| تظليل التلال | تضاريس ثلاثية الأبعاد |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

يتم وصف الفرق في عرض التضاريس على الخريطة عند تطبيق هذه الإعدادات في مقال **التضاريس** في القسم المقابل [تظليل التلال والتضاريس ثلاثية الأبعاد](../plugins/topography.md#hillshade-and-3d-relief).


### تكوين خيارات العرض {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

يمكنك تخصيص مستوى التكبير للعرض والشفافية لتظليل التلال والمنحدرات. يمكنك قراءة المزيد في [مقال التضاريس](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## تضاريس ثلاثية الأبعاد {#3d-relief}

:::note
[التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) هي ميزة مدفوعة [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

تُعد ميزة [**التضاريس ثلاثية الأبعاد**](../plugins/topography.md#3d-relief) تقنية رسم خرائط تسمح بتصور التضاريس على الخريطة باستخدام نماذج ثلاثية الأبعاد. تضيف هذه الميزة معلومات الارتفاع إلى خريطة ثنائية الأبعاد عادية، مما يخلق تأثيرًا ثلاثي الأبعاد وعمقًا ويسمح لك بتصور التضاريس بشكل أفضل.

*للبدء في استخدام التضاريس ثلاثية الأبعاد*:
تحتاج إلى شراء [خطة شراء OsmAnd Pro](../plugins/index.md#purchase)، وتمكين [مكون التضاريس الإضافي](../plugins/topography.md)، وتشغيل عنصر [التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) في *القائمة ← تكوين الخريطة*.


*كيف تعمل ميزة التضاريس ثلاثية الأبعاد*:
*1.* لإنشاء تضاريس ثلاثية الأبعاد، يتلقى أوزماند معلومات حول ارتفاع التضاريس.
*2.* بناءً على بيانات الارتفاع، يتم إنشاء نموذج ثلاثي الأبعاد لعرض الجبال والتلال والوديان وعناصر التضاريس الأخرى على الخريطة.
*3.* ثم يعرض أوزماند هذه النماذج ثلاثية الأبعاد على خريطة مسطحة. يمكن تكبير الخريطة وتصغيرها وتدويرها لعرض التضاريس من زوايا ومنظورات مختلفة.
*4.* لا يعتمد عرض خطوط الكنتور على الخريطة على ما إذا كان مصدر الخريطة متصلاً بالإنترنت أو غير متصل.


## إعداد/نسخ الخرائط النقطية إلى الجهاز {#preparecopy-raster-maps-to-device}

هناك طرق متعددة لإضافة خريطة نقطية جديدة، ونسخها من جهاز آخر، وإعدادها على جهاز الكمبيوتر، وتنزيل المربعات مسبقًا لاستخدامها دون اتصال. على سبيل المثال، يمكنك إنشاء حزمة الخرائط الخاصة بك على جهاز الكمبيوتر باستخدام برامج خاصة مثل [MOBAC، OsmAndMapCreator، وما إلى ذلك](../../technical/map-creation/index.md). عادةً ما يتم توزيع الخرائط النقطية كملفات بامتداد `.sqlitedb`.

فيما يلي الطرق الرئيسية لإضافة مصدر خريطة نقطية جديد لم يتم تعريفه في أوزماند بعد:

- افتح ملف `.sqlitedb` جاهز للاستخدام باستخدام أوزماند.
- استورد حزمة بخرائط معدة عبر الإنترنت من تطبيق أوزماند آخر كـ **حزمة** `.osf` خاصة عبر [وظيفة الاستيراد / التصدير](../personal/import-export.md).
- أنشئ مصدر خريطة جديد عبر الإنترنت على الجهاز المحمول نفسه.
- أعد عنوان URL سحريًا بمعلمات مصدر الخريطة عبر الإنترنت وافتحه باستخدام أوزماند.


### إضافة مصدر خريطة نقطية جديد عبر الإنترنت {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

لإنشاء مصدر خريطة نقطية، تحتاج إلى معرفة **عنوان URL لمربع**، وهو عنوان URL محدد يوزع مربعات الخرائط في إسقاط ميركاتور. على سبيل المثال، قد يبدو عنوان URL لمربع بهذا الشكل: `https://tile.osmand.net/hd/6/55/25.png`، حيث `tile.osmand.net/hd/` هو عنوان URL الأساسي.

فيما يلي المعلمات الرئيسية التي يجب تكوينها عند إعداد مصدر خريطة جديد عبر الإنترنت:

| المعلمة | الوصف |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | قم بتوفير اسم لمصدر الخريطة الجديد عبر الإنترنت. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | أدخل أو الصق عنوان URL لمصدر المربعات عبر الإنترنت. تأكد من أنه يتبع تنسيق عنوان URL للمربع. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | تؤثر هذه المعلمة على كيفية عرض الخريطة. <br/><ul><li>كنوع *خريطة*، ستقتصر الخريطة على مستويات التكبير المحددة.</li><li>كتراكب */طبقة سفلية*، ستظهر الخريطة عند مستويات التكبير المحددة، مع تطبيق التكبير أو التصغير خارج تلك المستويات.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | قم بتعيين المدة (بالدقائق) التي ستُحدّث بعدها المربعات المخزنة مؤقتًا. يمكنك ترك هذا الحقل فارغًا إذا كنت لا تريد إعادة تحميل المربعات تلقائيًا. <br/><ul><li>يوم واحد = 1440 دقيقة</li><li>أسبوع واحد = 10,080 دقيقة</li><li>30 يومًا = 43,200 دقيقة</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | اختر بين *إسقاط شبه ميركاتور* و *إسقاط ميركاتور الإهليلجي*، اعتمادًا على المصدر. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | حدد كيفية تخزين المربعات: إما في *ملف SQLiteDB* أو كـ *ملف صورة واحد لكل مربع*. |


### عنوان URL السحري لتثبيت مصدر الخريطة {#magic-url-to-install-map-source}

يمكن إضافة الخرائط عبر الإنترنت باستخدام رابط خاص إلى قائمة خرائط OsmAnd النقطية. انقر على هذا الرابط واختر OsmAnd للفتح:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|معلمة الرابط|مثال|
|:--------|:---------------|
| [جزء ثابت]| `http://osmand.net/add-tile-source` |
|[فواصل]| ? & |
|[الاسم]|name=TEST|
|[عنوان URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[مستويات التكبير]|min_zoom=9 / max_zoom=15|

ستجد خريطة عبر الإنترنت مضافة في قائمة [الطبقة الرئيسية / السفلية / العلوية](#select-raster-maps).


## إدارة الخرائط النقطية {#manage-raster-maps}

يمكن أن تشغل الخرائط النقطية قدرًا كبيرًا من مساحة القرص، لذلك قد تحتاج إلى التحقق منها بانتظام. بالنسبة لمجموعات البيانات الكبيرة، يوصى باستخدام *مصدر SQLite النقطي* لأنه سيخزن جميع المربعات في ملف واحد كبير (قاعدة بيانات SQLite).

- [**تنسيق SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**تنسيق Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

لتغيير تنسيق المربع، يمكنك اختيار <Translate android="true" ids="storage_format"/> في قائمة تحرير الخرائط عبر الإنترنت:

- **أندرويد**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ←
&#8942; ← <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### مسح ذاكرة التخزين المؤقت للخرائط النقطية {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

يتم تخزين المربعات في ذاكرة التخزين المؤقت عند استخدام الخرائط النقطية عبر الإنترنت كطبقة رئيسية / تراكب / سفلية. يمكنك رؤية حجم ملف SQ Lite الخاص بك تحت اسم الخريطة عبر الإنترنت في القائمة. في بعض الأحيان يكون التنظيف المنتظم مطلوبًا لتسريع عرض المربعات أو لتحديث البيانات.

لمسح ذاكرة التخزين المؤقت لمربعات الخرائط، تحتاج إلى القيام بما يلي:

- **أندرويد**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ←
&#8942; ← <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_clear_cache"/>*


### تنزيل / تحديث المربعات {#download--update-tiles}

إذا كنت ترغب في الوصول إلى الخرائط النقطية دون اتصال بالإنترنت، فقد تحتاج إلى تحميل المربعات مسبقًا. يمكن القيام بذلك على جهازك المحمول، ولكن كن على دراية بأن بعض الخدمات قد تحظر تنزيلات الحزم الكبيرة. يمكنك أيضًا استخدام نفس الميزة لتحديث المربعات التي تم تنزيلها بالفعل للمناطق المحددة، وإلا، سيستمر OsmAnd في عرض المربعات المخزنة بالفعل في ذاكرة التخزين المؤقت.

لتحديث المربعات تلقائيًا بعد فترة، يمكنك تعيين [وقت انتهاء الصلاحية](#add-new-online-raster-map-source)، ثم سيعيد OsmAnd تحميل المربعات بمجرد عرضها.

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

- لتنزيل أو تحديث المربعات النقطية، تحتاج إلى تحديد مصدر الخريطة عبر الإنترنت كمصدر [الخريطة الرئيسية](#select-raster-maps) (**أندرويد / iOS**). يمكنك أيضًا تحديد المربعات عبر الإنترنت بشكل منفصل لخريطة [التراكب](#overlay-layer) أو لـ [الطبقة السفلية](#underlay-layer) (فقط لـ **أندرويد**).

- بالنسبة لإصدار **أندرويد** من تطبيق OsmAnd، تحتاج إلى تحديد منطقة وفقًا لحجم شاشة جهازك والنقر مطولاً على الخريطة. ثم حدد [*الإجراءات*](../map/map-context-menu.md#update--download-online-maps) في قائمة سياق الخريطة وخيار *تنزيل الخريطة* أو *تحديث الخريطة*. في شاشة تنزيل الخريطة، قم بإجراء تغييرات على الإعدادات الضرورية وانقر على تنزيل.

- في إصدار **iOS** من تطبيق OsmAnd، تحتاج إلى النقر مطولاً على الخريطة، ثم تحديد [*الإجراءات*](../map/map-context-menu.md#update--download-online-maps) وخيار *تنزيل الخريطة* أو *تحديث الخريطة* من قائمة سياق الخريطة. في شاشة تنزيل الخريطة، يمكنك تحديد المنطقة المطلوبة وتعديل الإعدادات الضرورية. بعد تعيين جميع المعلمات، يمكنك رؤية عدد المربعات وحجم التنزيل.


### تغيير معلمات الخريطة النقطية {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> ← اختر الخرائط عبر الإنترنت ← &#8942; ← <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> ← i ← <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

يمكن استخدام الخرائط النقطية كما هي موجودة بالفعل إذا تم تعيين المربعات بالفعل. إذا تم توفير الخرائط النقطية عبر الإنترنت، فهناك دائمًا عنوان URL أساسي يحتاج إلى التكوين. هناك بعض المعلمات الأساسية الأخرى التي يمكن تغييرها للخرائط النقطية، يمكنك قراءة المزيد عنها في [هذا القسم](#add-new-online-raster-map-source) من المقال. يتم ترميز المعلمات الأكثر تعقيدًا في المكونات الداخلية [لتنسيق SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## مقالات ذات صلة {#related-articles}

- [استيراد / تصدير](../personal/import-export.md)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: أكتوبر 2024*