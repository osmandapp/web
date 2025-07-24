---
source-hash: e01063d9fc36bf4b74ae42e7ffe9e8041b28514fb02d5f5070fe0dae8604ff4b
sidebar_position: 2
title:  التفاعل مع الخريطة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## نظرة عامة {#overview}

يشرح هذا المقال كيفية تخصيص الخريطة والتفاعل معها باستخدام أزرار وإيماءات مختلفة. ويغطي كيفية تدوير الخريطة وتكبيرها وتعديل زاوية العرض وتغيير زاوية عرض الخريطة وتدويرها يدويًا أو تلقائيًا باستخدام البوصلة أو وفقًا للاتجاه.


## الإيماءات {#gestures}

الإيماءات ضرورية للتنقل في الخريطة بسهولة وبشكل حدسي.

| إجراء الخريطة | الإيماءة |
|:------------|:-------------|
| **تحريك** | اضغط مع الاستمرار على الخريطة بإصبع **واحد**، ثم اسحب للتحرك. |
| **انزلاق** | اسحب الخريطة بإصبع **واحد**. |
| **تكبير** | انقر نقرًا مزدوجًا على الخريطة بإصبع **واحد**. <br/> انقر نقرًا مزدوجًا بإصبع **واحد** واسحب للأسفل. <br/> قرص بإصبعين **اثنين** للتكبير. |
| **تصغير** | انقر نقرًا مزدوجًا بإصبعين **اثنين**. <br/> انقر نقرًا مزدوجًا بإصبع **واحد** واسحب للأعلى. <br/> قرص بإصبعين **اثنين** للتصغير. |
| **تدوير** | اضغط على الخريطة بإصبعين **اثنين**، ثم قم بتدوير أصابعك بحركة دائرية. |
| **إمالة (ثلاثية الأبعاد)** | اضغط بإصبعين **اثنين** وحركهما للأعلى أو للأسفل. <br/> متاح فقط مع [محرك عرض الخرائط](../personal/global-settings.md#map-rendering-engine) الإصدار 2 (OpenGL). |

يمكن تعطيل رسوم الانزلاق المتحركة في الإعدادات باستخدام [خيار خاص](#no-animations).


## موقعي والتكبير {#my-location-and-zoom}

![قائمة شاشة التكوين](@site/static/img/widgets/location_zoom_buttons.png)

**موقعي**.
زر *موقعي* هو أيقونة دائرية تشير إلى ما إذا كان مركز الخريطة متزامنًا مع الموقع الجغرافي الحالي لجهازك. يُشار إليه غالبًا باسم زر "أين أنا؟"، ويساعدك على العثور على موقعك بسرعة على الخريطة. أثناء التنقل، تظل الخريطة عادةً متزامنة مع موقع الجهاز، لذلك يظل الزر مخفيًا. ومع ذلك، يصبح مرئيًا إذا خرجت الخريطة وموقعك عن التزامن بسبب تفاعل المستخدم. سيؤدي النقر على الزر إلى إعادة توسيط الخريطة على موقعك الحالي، وسيؤدي النقر المزدوج إلى تبديل العرض إلى وضع ثلاثي الأبعاد.

- يحتوي زر *موقعي* على الحالات التالية:
  - *أيقونة زرقاء كاملة*. تم العثور على الموقع ولكنه غير متزامن مع الخريطة.
  - *أيقونة بيضاء*. تم العثور على الموقع ومتزامن مع الخريطة.
  - *أيقونة رمادية*. لم يتم العثور على الموقع بعد.
  - *أيقونة سهم*. تم تنشيط وضع ثلاثي الأبعاد.

- **الضغط المطول** (*Android*) على زر *موقعي* يفتح [قائمة سياق الخريطة](../map/map-context-menu.md)، مما يسمح لك بمشاركة موقعك.

<br/>

**أزرار التكبير**.
تكون *أزرار التكبير* مرئية دائمًا بجوار *موقعي* وتسمح لك بالتحكم في مستوى تكبير الخريطة.

- لا يؤثر تغيير مستوى التكبير على تزامن الخريطة مع موقعك.
- **الضغط المطول** على *أزرار التكبير* يفتح مربع حوار *مكبر الخريطة*، مما يسمح لك بضبط مستويات تفاصيل الخريطة.
- ضع في اعتبارك أنه أثناء التنقل، يمكن التحكم في التكبير تلقائيًا بواسطة إعداد **التكبير التلقائي**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### مظهر موقعي {#my-location-appearance}

يمكنك تخصيص أيقونات زر **موقعي** باستخدام إعدادات مظهر الملف الشخصي. اقرأ المزيد حول كيفية القيام بذلك [هنا](../personal/profiles.md#profile-appearance).


## مكبر الخريطة {#map-magnifier}

*مكبر الخريطة* هو أداة تعزز وضوح الخريطة، على غرار العدسة المكبرة المستخدمة مع الخرائط الورقية. يسمح لك بتكبير الخريطة لعرض النصوص والتفاصيل بشكل أوضح أو لضبط مستوى التفاصيل مع الحفاظ على نفس المقياس. لمزيد من المعلومات، انتقل إلى مقال [خرائط المتجهات](../map/vector-maps.md#map-magnifier).


## أوضاع توجيه الخريطة {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![أداة البوصلة](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![أداة البوصلة](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

تسمح لك *أوضاع توجيه الخريطة* باختيار كيفية عرض الخريطة على شاشة الجهاز. يقدم OsmAnd أوضاعًا مثل **مدوّرة يدويًا**، **اتجاه الحركة**، **اتجاه البوصلة**، و**الشمال للأعلى**. يؤدي تمكين كل وضع إلى تغيير طريقة توجيه الخريطة وفقًا للخيار المحدد. للحصول على التفاصيل الكاملة، راجع مقال [أزرار الخريطة](../widgets/map-buttons.md#compass).


## البوصلة {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![أداة البوصلة](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![أداة البوصلة](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

يُظهر زر البوصلة كيفية [توجيه الخريطة](#map-orientation-modes). يشير *السهم الأحمر* على الأيقونات، أو اتجاه السهم في وضع *اتجاه الحركة*، إلى الشمال. [تشير الأيقونة الموجودة على زر البوصلة](../widgets/map-buttons.md#compass) إلى وضع توجيه الخريطة الحالي. يوفر أداة زر البوصلة ثلاثة [خيارات تفاعل](../widgets/map-buttons.md#compass-tapping-behavior): يؤدي *الضغط الفردي* إلى تدوير الخريطة إلى الشمال، ويؤدي *الضغط المزدوج* إلى التبديل بين جميع أوضاع توجيه الخريطة، ويؤدي *الضغط المطول* إلى فتح قائمة الأوضاع.


## تدوير الخريطة حسب الاتجاه {#rotate-map-by-bearing}

في وضع **تدوير الخريطة حسب الاتجاه** ([اتجاه الحركة](../widgets/map-buttons.md#compass))، تتوافق الخريطة تلقائيًا مع اتجاه حركتك، بحيث تظهر المنطقة أمامك في الجزء العلوي من الشاشة. يعزز هذا الوضع التنقل عن طريق تحريك مركز الخريطة قليلاً إلى الأسفل، مما يظهر المزيد من المسار الأمامي. إذا كنت ثابتًا، تظل الخريطة ثابتة.

يمكنك تنشيط هذه الميزة عبر *القائمة ← الإعدادات ← الملفات الشخصية ← الإعدادات العامة ← المظهر ← توجيه الخريطة* أو عن طريق النقر المزدوج على [زر البوصلة](../widgets/map-buttons.md#compass-tapping-behavior). لمزيد من التفاصيل حول الاتجاه، راجع [هنا](../widgets/nav-widgets.md#bearing-widget).


## إمالة الخريطة والأفق {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![إمالة أندرويد 1](@site/static/img/map/tilt_horizon_andr_1.png) ![إمالة أندرويد 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إمالة iOS 1](@site/static/img/map/tilt_horizon_ios_1.png) ![إمالة iOS 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

باستخدام [محرك العرض](../personal/global-settings.md#map-rendering-engine) الجديد للخريطة، يمكنك تغيير [إمالة الكاميرا](../plugins/development.md#camera-tilt) من 90 (بدون إمالة) إلى 10 درجات. عند إمالة الخريطة أقل من 20-22 درجة تقريبًا (تعتمد هذه المعلمة على مستوى التكبير)، يصبح خط الأفق الوهمي مرئيًا. على عكس الأفق الحقيقي، يكون أفق البرنامج دائمًا مستقيمًا.

تحت الأفق، يمكنك رؤية ما يسمى *الضباب* أو *الضباب الدخاني*. هذه المنطقة من الخريطة مملوءة باللون الرمادي، ولا يمكن ملاحظة سوى عدد قليل من تفاصيل الخريطة.
يعد استخدام الضباب ضروريًا لأن عرض الكائنات البعيدة على الخريطة يتطلب موارد حوسبة كبيرة وليس مبررًا دائمًا بسبب [تشوهات](../plugins/development.md#comparison-with-a-satellite-imagery) الخريطة عند زوايا عرض صغيرة. لذا فإن المسافة المرئية على خريطة OsmAnd محدودة حاليًا بـ 35 بلاطة.

:::info
يمكن تغيير إمالة الخريطة بالضغط المطول على الشاشة بإصبعين وتحريكهما لأعلى/لأسفل. يمكنك أيضًا تغيير الإمالة بالنقر على أيقونة [موقعي](#my-location-and-zoom) في الزاوية السفلية اليمنى من الشاشة (تتوفر فقط مواضع 45 و 90 درجة).
لا يمكنك تغيير إمالة الكاميرا عندما يكون [محرك عرض الخريطة](../personal/global-settings.md#map-rendering-engine) القديم (الإصدار 1) قيد التشغيل.
:::


## قفل شاشة اللمس {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![زر الإجراء السريع قفل شاشة اللمس أندرويد](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![زر الإجراء السريع قفل شاشة اللمس iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

استخدم ميزة **قفل شاشة اللمس** لتجنب اللمسات العرضية أثناء التنقل. هذا مفيد بشكل خاص للأنشطة مثل ركوب الدراجات أو المشي لمسافات طويلة، حيث قد تؤدي اللمسات غير المقصودة إلى تعطيل مسارك.

**فتح القفل**.
انقر على الزر الذي يظهر على الشاشة، أو، إذا كان القفل نشطًا، عبر زر خارجي (مثل زر خفض الصوت)، اضغط على الزر الخارجي وانقر على الزر الذي يظهر على الشاشة.

**الإعداد**.

- انتقل إلى *القائمة ← تكوين الشاشة ← الأزرار المخصصة*.
- حدد *+ ← إضافة إجراء ← الواجهة ← قفل شاشة اللمس*.

ستوجهك الرسائل الواضحة التي تظهر على الشاشة عند قفل الشاشة أو فتحها.


## الإعدادات {#settings}

### إعدادات البوصلة الإضافية {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> ينعم دوران الخريطة برسوم متحركة أبطأ للدوران، على الرغم من أن هذا يؤدي إلى تأخير طفيف، لا يزيد عن ثانية واحدة.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> ينعم دوران الخريطة برسوم متحركة أبطأ للدوران، على الرغم من أن هذا يؤدي إلى تأخير طفيف، لا يزيد عن ثانية واحدة.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### لا توجد رسوم متحركة {#no-animations}

<InfoAndroidOnly/>

يمكنك تعطيل جميع رسوم الخريطة المتحركة أثناء تفاعلات الخريطة، بما في ذلك الإيماءات والأزرار.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### تحريك موقعي {#animate-own-position}

**أندرويد**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

ينشئ تأثير تحريك خريطة سلسًا مقابل أيقونة *[موقعي](../personal/profiles/#profile-appearance)* عند الحركة. يؤدي التأثير إلى تأخير طفيف مقابل الواقع الأرضي يبلغ حوالي ثانية واحدة. وقد أُبلغ عن أن تمكين هذا يؤدي إلى بعض مشاكل التأخير الواضحة في بعض الظروف، قم بتعطيله إذا ظهرت مثل هذه المشاكل.


## أجهزة الإدخال الخارجية {#external-input-devices}

توفر أزرار أجهزة الإدخال الخارجية طريقة مريحة وفعالة للتفاعل مع الخريطة وواجهة تطبيق OsmAnd. وهي موجودة على الأجهزة الخارجية، مثل **لوحات المفاتيح التي تعمل بالبلوتوث أو أنواع أخرى من لوحات المفاتيح**، **الأزرار المتخصصة على أجهزة الملاحة في المركبات**، أو وحدات التحكم [WunderLINQ](https://blackboxembedded.com/) و [Parrot](https://www.parrot.com/en).

إحدى الوظائف الرئيسية للأزرار الموجودة على أجهزة الإدخال الخارجية هي تكبير وتصغير الخريطة. كما أنها تسمح لك بالتنقل في الخريطة وتغيير اتجاهها دون الحاجة إلى النقر والإيماءات على الشاشة. تدعم الأزرار الموجودة على أجهزة الإدخال الخارجية العديد من الوظائف الأخرى، مثل فتح *القائمة الرئيسية*.

:::note
تظل لوحة المفاتيح تعمل حتى عند إيقاف تشغيل خيار *أجهزة الإدخال الخارجية*، وتحديد *لا شيء*.
:::

### جهاز إدخال مسبق التكوين {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![الأجهزة الخارجية](@site/static/img/map/external_menu_android.png) ![الأجهزة الخارجية](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![الأجهزة الخارجية](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

للوصول إلى إعدادات جهاز الإدخال الخارجي، تحتاج إلى تمكين هذه الميزة.

- انتقل إلى *القائمة الرئيسية ← الإعدادات ←* حدد *الملف الشخصي ← الإعدادات العامة ← أخرى ← أجهزة الإدخال الخارجية*، وقم بالتبديل إلى *ممكن*.

- حدد جهازًا من الأجهزة المدعومة بواسطة OsmAnd بالنقر على عنصر *النوع* في القائمة:
    **<Translate android="true" ids="sett_generic_ext_input"/>**،&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**،&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*أندرويد فقط*)، أو قم بإنشاء [**النوع الخاص بك**](#custom-input-device-type) (*أندرويد فقط*).

- يوجد **تعيين مختلف لمجموعة الإجراءات والمفاتيح** لكل نوع من أجهزة الإدخال الخارجية. انقر على *<Translate android="true" ids="key_assignments"/>* لرؤية قائمة الإجراءات والمفاتيح. يظهر جدول المفاتيح أدناه.

- يمكنك قراءة المزيد حول إجراءات جهاز الإدخال الخارجي على GitHub في حزمة [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| المفتاح | الجهاز | الإجراء |
|:---------|:---------------|:---------------|
|**C**| *لوحة المفاتيح* | تحريك - [إلى موقعي](#my-location-and-zoom) |
|**D**| *لوحة المفاتيح* | تغيير - [توجيه الخريطة](#map-orientation-modes) |
|**N**| *لوحة المفاتيح* | إظهار / إخفاء - عرض التنقل |
|**S**| *لوحة المفاتيح* | إظهار / إخفاء - [عرض البحث](../search/index.md) |
|**P**| *لوحة المفاتيح* | تغيير - ملف تعريف التطبيق إلى التالي |
|**O**| *لوحة المفاتيح* | تغيير - ملف تعريف التطبيق إلى السابق |
|**&#8593;**| *لوحة المفاتيح* | تحريك - الخريطة للأعلى |
|**&#8595;**| *لوحة المفاتيح* | تحريك - الخريطة للأسفل |
|**&#8592;**| *لوحة المفاتيح* | تحريك - الخريطة إلى اليسار |
|**&#8594;**| *لوحة المفاتيح* | تحريك - الخريطة إلى اليمين |
|**&#43;** **=**| *لوحة المفاتيح* | الخريطة - [تكبير](#my-location-and-zoom) |
|**&#8722;**| *لوحة المفاتيح* | الخريطة - [تصغير](#my-location-and-zoom) |
|**الضغط على زر الرجوع**| *لوحة المفاتيح* | التنقل – الشاشة السابقة |
|**&#8595;**| *Wunderlinq* | الخريطة - [تصغير](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | الخريطة - [تكبير](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | فتح شبكة بيانات WunderLINQ |
| **M** <br/> (*أندرويد قديم*) | *لوحة المفاتيح* | إظهار / إخفاء - [القائمة الجانبية](../start-with/main-menu.md#main-menu-side-menu) |
| **الضغط على عصا التحكم** <br/> (*أندرويد قديم*) | *لوحة المفاتيح* | تحريك - [إلى موقعي](#my-location-and-zoom) |
| **زر الوسائط** <br/> (*أندرويد فقط*)| *لوحة المفاتيح* | إظهار / إخفاء - [ملاحظات الصوت والفيديو](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*أندرويد فقط*)| *Parrot* | الخريطة - [تصغير](#my-location-and-zoom) |
| **&#8594;** <br/> (*أندرويد فقط*) | *Parrot* | الخريطة - [تكبير](#my-location-and-zoom) |


### نوع جهاز الإدخال المخصص {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![الأجهزة الخارجية](@site/static/img/map/external_mypilot_android.png) ![الأجهزة الخارجية](@site/static/img/map/external_mypilot2_android.png)

إذا كنت ترغب في تعيين مفاتيح لجهاز إدخال خارجي (مثل لوحة مفاتيح، عصا تحكم، أو وحدة تحكم)، تحتاج إلى إنشاء نوع جهاز: انتقل إلى إعداد [جهاز الإدخال الخارجي](#external-input-devices)، حدد **النوع** من القائمة، انقر على &nbsp;"**＋**"&nbsp; وأدخل اسمًا. يحتوي كل نوع على قائمة بخيارات التالية: ***إعادة تسمية، تكرار***، و ***إزالة***.

### إضافة إجراء وتعيينات المفاتيح {#add-action--key-asssigments}

![الأجهزة الخارجية](@site/static/img/map/external_custom_4_andr.png) ![الأجهزة الخارجية](@site/static/img/map/external_custom_3_andr.png)

بعد إنشاء نوع إدخال مخصص، يمكنك تعيين الإجراءات المطلوبة للمفاتيح. تتوفر مجموعة واسعة من [أنواع الإجراءات](../widgets/quick-action.md#action-types) من أداة الإجراء السريع.

- حدد نوع الجهاز، ثم انقر على عنصر **تعيينات المفاتيح**.
- انقر على زر ***إضافة*** (&nbsp;"**＋**"&nbsp;) في الزاوية السفلية اليمنى من الشاشة.
- حدد الإجراء المطلوب ثم انقر على حقل ***إضافة مفتاح*** وانقر على الزر الموجود على جهازك لتعيينه للإجراء.

:::note

- إذا كان الزر الذي تقوم بتعيينه مستخدمًا بالفعل لإجراء آخر، فستتلقى إشعارًا مع خيار إعادة تعيين الزر أو إلغاء التعيين.
- لاحقًا يمكنك تغيير الإجراءات وتعيينات المفاتيح أو إضافة أخرى للإجراءات التي تم إنشاؤها بالفعل، ما عليك سوى تحديد عنصر في قائمة تعيينات المفاتيح.

:::

### حذف تعيين المفتاح {#delete-key-assignment}

![الأجهزة الخارجية](@site/static/img/map/external_custom_1_andr.png)

يمكنك حذف عدة إجراءات غير ضرورية باستخدام **زر التعديل** (*على شكل قلم رصاص*) في الزاوية العلوية اليمنى من الشاشة دفعة واحدة:

- ***إزالة إجراء واحد*** لكل إجراء، باستخدام زر &nbsp;"**−**"&nbsp; في حقل العنصر.
- ***إزالة جميع تعيينات المفاتيح*** للنوع المحدد بالنقر على الزر في الزاوية العلوية اليمنى من الشاشة بجوار *تعديل الاسم*.


## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](./map-context-menu.md)
- [تكوين الخريطة](./configure-map-menu.md)
- [خرائط المتجهات (أنماط الخرائط)](./vector-maps.md)
- [خرائط الراستر (عبر الإنترنت / غير متصل)](./raster-maps.md)
- [النقاط على الخريطة](./point-layers-on-map.md)
- [المسارات والطرق](./tracks/index.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)


> *آخر تحديث: ديسمبر 2024*