---
source-hash: 5a6d57c30dcc7cffb0562681b9341b0e7b62aafd5fd56183371bd8098893001c
sidebar_position: 7
title: إجراء سريع (أزرار مخصصة)
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

عنصر واجهة المستخدم "الإجراء السريع" هو عنصر تفاعلي في واجهة المستخدم يوفر وصولاً سريعًا إلى الوظائف أو الإجراءات الرئيسية دون فتح إعدادات إضافية. يتم وضع هذه الأداة على شاشة الخريطة الرئيسية وتتيح لك تبسيط وتسريع التفاعل مع التطبيق، مما يجعله أكثر ملاءمة وفعالية.

![Quick action widget](/img/widgets/quick_action_widget.png)


## أداة الإجراء السريع {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_android](/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_ios](/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

لاستخدام زر الإجراء السريع، يجب عليك تمكين هذه الأداة أولاً.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### إضافة وحذف الإجراءات {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> ← اضغط على حذف (أيقونة سلة المهملات في الزاوية العلوية اليمنى) ← حدد الإجراءات*

![Quick action widget_android_add](/img/widgets/quick_action_widget_andr.png) ![Custom button Android](/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> ← اضغط على تحرير (أيقونة القلم الرصاص في الزاوية العلوية اليمنى) ← حدد الإجراءات*

![Quick action widget_ios_add](/img/widgets/quick_action_widget_2_ios.png) ![Custom button Android](/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

يتم تنظيم جميع الإجراءات في قائمة **إضافة إجراء** وتجميعها حسب النوع. يمكن العثور على قائمة كاملة بالإجراءات وأوصافها في قسم [أنواع الإجراءات](#action-types).

يمكنك تعيين إجراء واحد أو أكثر [إجراءات](#action-types) لزر الإجراء السريع. هناك طريقتان لإضافة الإجراءات.

- **في شاشة التكوين**. حدد زرًا من القائمة، ثم اضغط على الزر &nbsp; "**＋**" &nbsp;. تحتاج إلى تحديد [نوع الإجراء](#action-types) أولاً، ثم تغيير اسمه و[معلماته](#actions-in-loop).
- **في لوحة زر الإجراء السريع**. اضغط على *زر الإجراء السريع* على شاشة الخريطة. في نهاية القائمة، على الشاشة الأخيرة في اللوحة، يوجد مربع &nbsp; "**＋**" &nbsp; *إضافة إجراء*. اضغط عليه وحدد إجراءً من [قائمة الأنواع](#action-types).


:::note

- يجب أن يكون لكل إجراء اسم فريد.
- يتم إنشاء الشاشات، المسماة رقميًا الشاشة 1، الشاشة 2، وما إلى ذلك، تلقائيًا عندما يزداد عدد الإجراءات في القائمة إلى 6 عناصر.

:::


### معلمات الإجراء {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Quick action widget_android_order](/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios_order](/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

يتم تجميع الإجراءات المعينة لزر الإجراء السريع في شاشات. يتم فتح مجموعات الإجراءات هذه عند النقر على هذا الزر على الخريطة. يتم إنشاء شاشات جديدة تلقائيًا عندما تتجاوز قائمة الإجراءات *6 عناصر*. يمكنك إعادة ترتيب الإجراءات لتناسب تفضيلاتك باتباع هذه الخطوات:

**لنظام أندرويد**.

1. عبر شاشة التكوين:

    - انتقل إلى *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - استخدم *الضغط مع السحب* على أيقونة الخطين العموديين لإعادة ترتيب الإجراءات.

2. عبر قائمة الإجراء السريع:

    - افتح قائمة الإجراء السريع، ثم اضغط مطولاً على *إضافة إجراء*.
    - استخدم *الضغط مع السحب* على أيقونة الخطين العموديين لإعادة ترتيب الإجراءات.

**لنظام iOS**.

- انتقل إلى *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- اضغط على *تحرير* (أيقونة القلم الرصاص)، ثم *اضغط مع السحب* على أيقونة الخطوط العمودية الثلاثة لإعادة ترتيب الإجراءات.

#### الإجراءات في حلقة {#actions-in-loop}

![Custom button Android](/img/widgets/actions_in_loop_andr.png)

بالنسبة لبعض الإجراءات، يمكنك تعيين قائمة من الطبقات التي ستتغير في دائرة مع كل نقرة: *مصدر الخريطة*، *نمط الخريطة*، *تراكب*، *تراكب سفلي*، *نظام ألوان التضاريس*، *إضافة ملف تعريف*.

يسمح لك الزر بتعيين طبقة واحدة أو قائمة من الطبقات التي تتغير بشكل دائري عند النقر أو مع مربع حوار مؤقت.

- **إظهار مربع حوار مؤقت**. يعرض مربع حوار بقائمة من الخرائط.
- **عدم إظهار مربع حوار مؤقت**. تتغير مصادر الخريطة بترتيب محدد.


### تغيير الموضع على الخريطة {#change-position-on-the-map}

تظهر أداة *الإجراء السريع* في الزاوية السفلية من شاشة الخريطة عند تمكينها لأول مرة. يمكنك نقل الأداة إلى أي جزء من الشاشة عن طريق الضغط والسحب. لتحديد موضع الأزرار بدقة على شاشة الخريطة، يتم محاذاتها تلقائيًا إلى أقرب موضع شبكة غير مرئية عند سحبها.

- **المظهر الأولي**. بشكل افتراضي، يتم وضع أداة الإجراء السريع في الزاوية السفلية اليمنى من واجهة الخريطة.

    ![Quick action widget_view](/img/widgets/quick_action_widget_view.png)

- **نقل الأداة**. عن طريق الضغط مطولاً وسحب الأداة، يمكنك إعادة وضعها على الشاشة، مع محاذاة تلقائية للأعمدة والصفوف.

    ![Quick action widget_tap](/img/widgets/quick_action_widget_tap.png)

- **الموضع الجديد**. بمجرد نقلها، ستبقى الأداة في موضعها الجديد على شاشة الخريطة حتى يتم تعديلها يدويًا مرة أخرى.

    ![Quick action widget_move](/img/widgets/quick_action_widget_move.png)

- **أزرار [مخصصة](#custom-buttons) متعددة**. يمكنك إضافة أزرار إجراء سريع متعددة إلى شاشة الخريطة. يمكن أيضًا تخصيص هذه الأزرار وإعادة وضعها بشكل فردي باستخدام نفس طريقة السحب والإفلات.

    ![Quick action widget_move](/img/widgets/quick_action_widget_multi.png)


### أزرار مخصصة {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> ←* &nbsp; "**＋**" &nbsp; *← <Translate android="true" ids="add_button"/>*

![Custom button Android](/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> ←* &nbsp; "**＋**" &nbsp; *← <Translate ios="true" ids="add_button"/>*

![Custom button Android](/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**الأزرار المخصصة** هي أزرار إضافية على الخريطة تعمل بنفس طريقة زر *الإجراء السريع*. يمكنك إنشاء زر بإجراء واحد أو أكثر وعرضه على شاشة الخريطة. توجد الأزرار المخصصة في قائمة *تكوين الشاشة ← الأزرار ← الأزرار المخصصة*. يحتوي كل زر على قائمة إجراءات مستقلة عن الملف الشخصي ويجب أن يكون له ***اسم*** فريد، ومع ذلك، يمكن تشغيل/إيقاف الزر بشكل فردي لكل **ملف شخصي**.

جميع [الإجراءات](#action-types) المتاحة متطابقة مع تلك التي يمكن تطبيقها على الإجراء السريع الافتراضي. يمكن تكوين الأزرار المخصصة كأزرار ***إجراء واحد***، والتي تطبق الإجراء المحدد فورًا عند النقر عليها، دون الحاجة إلى التنقل عبر قائمة إضافية.


### مظهر زر الإجراء السريع {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Quick action button appearance](/img/widgets/qa_button_appearance_andr.png)

يمكنك تعديل مظهر أزرار الإجراء السريع من خلال: *القائمة ← تكوين الشاشة ← الأزرار المخصصة ← الإجراء السريع ← قائمة ثلاث نقاط ← المظهر*. يوفر هذا الإعداد خيارات لتخصيص حجم الزر وشكله وأيقونته وشفافية الخلفية، مما يوفر تحكمًا أكبر في كيفية ظهور الأزرار على شاشتك.

للحصول على إعدادات تخصيص مفصلة، ارجع إلى مقالة [تكوين الشاشة](../widgets/configure-screen.md#button-appearance)، حيث يمكنك معرفة كيفية ضبط مظهر كل زر ليتناسب مع تفضيلاتك.


## أنواع الإجراءات {#action-types}

### تكوين الخريطة {#configure-map}

| الإجراء | الوصف |
|:-------------|:-------------|
| إظهار / إخفاء <br/> [**المسارات**](../map/vector-maps.md#routes) | يمكنك تحديد أنواع المسارات لتمكين أو تعطيل عرضها. <br/> تحتوي بعض المسارات على إعدادات إضافية. بشكل افتراضي، إذا لم تحدد أي شيء في قائمة [تكوين الخريطة](../map/configure-map-menu.md)، فسيتم تعيين أول نوع مسار من القائمة، وإلا فسيتم تعيين نوع من اختيارك. يمكنك قراءة المزيد في مقالة [المسارات](../map/routes.md). <br/> - ***مسارات الدراجات*** &nbsp;(*مسار*، *شبكات العقد*) <br/> - ***مسارات الدراجات الجبلية*** &nbsp;(*مقياس MTB*، *IMBA*) <br/> - ***مسارات المشي لمسافات طويلة*** &nbsp;(*OSMC*، *الانتماء للشبكة*، *شبكات العقد*) <br/> - ***درجة صعوبة مسارات المشي لمسافات طويلة*** &nbsp;(*مقياس SAC*، *مقياس CAI*) <br/> - ***منحدرات التزلج*** <br/> - ***مسارات الخيل*** <br/> - ***الرياضات المائية البيضاء*** <br/> - ***مسارات الجري*** <br/> - ***مسارات اللياقة البدنية*** <br/> - ***مسارات السفر*** &nbsp;(*المسارات*، *كتب السفر*، *النقاط*) <br/> |
| إظهار / إخفاء <br/> [**طبقات التضاريس**](../plugins/topography.md#overview) | يتم عرض جميع بيانات التضاريس كطبقات خريطة منفصلة. يمكنك تبديل رؤية هذه الطبقات بسرعة باستخدام الإجراء السريع. <br/> - ***خطوط الكنتور*** <br/> - ***التضاريس*** &nbsp;(*اعتمادًا على الطبقة المحددة في قائمة [تكوين الخريطة](../map/configure-map-menu.md)*، *سيتم عرض تظليل التلال*، *المنحدر*، أو *الارتفاع*.) |
| تغيير <br/> [**نظام ألوان التضاريس**](../plugins/topography.md#modify-color-scheme) | يسمح لك بتحديد لوحة واحدة أو أكثر من قائمة اللوحات الموجودة، والتي ستتغير عند النقر على الزر. |
| إظهار / إخفاء <br/> [**طبقات الطقس**](../plugins/weather.md#weather-layers) | يتم عرض جميع بيانات الطقس كطبقات خريطة منفصلة. باستخدام الإجراء السريع، يمكنك الوصول السريع لتبديل رؤية هذه الطبقات على الخريطة. <br/> - ***طبقة الهطول*** <br/> - ***طبقة السحب*** <br/> - ***طبقة الضغط*** <br/> - ***طبقة الرياح*** <br/> - ***طبقة درجة الحرارة*** |
| فتح <br/> [**شاشة الطقس**](../plugins/weather.md) <br /> *أندرويد فقط* | يفتح [شاشة توقعات الطقس](../plugins/weather.md#weather-forecast-screen) بمعلومات مفصلة. |
| إظهار / إخفاء <br/> [**المفضلة**](../personal/favorites.md#view-on-the-map) | إظهار أو إخفاء النقاط المفضلة على الخريطة. |
| إظهار / إخفاء <br/> [**المسارات**](../personal/tracks/manage-tracks.md#track-menu) | إظهار أو إخفاء آخر المسارات المرئية على الخريطة. |
| إظهار / إخفاء <br/> [**نقاط الاهتمام (POI)**](../map/point-layers-on-map.md#points-of-interest-pois) | تمكين أو تعطيل عرض طبقات نقاط الاهتمام مع الفئات المحددة على الخريطة.<br/>يمكنك تحديد فئات نقاط اهتمام متعددة. يحل الإجراء محل فئات نقاط الاهتمام من تكوين الخريطة المحددة دون استخدام الإجراءات السريعة. |
| تغيير <br/> [**وضع الخريطة**](../map/vector-maps.md#map-mode) | وصول سريع للتبديل بين وضعي النهار والليل. |
| تغيير <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | يسمح لك الزر بتعيين مصدر خريطة واحد أو قائمة مصادر تتغير بشكل دائري عند النقر أو مع مربع حوار مؤقت. <br/> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار بقائمة من الخرائط. <br/> - *عدم إظهار مربع حوار مؤقت*. تتغير مصادر الخريطة بترتيب محدد. <br/> - *الاسم المعروض* - *مصدر الخريطة* >. تشير ">" بعد اسم الخريطة إلى مصدر الخريطة المحدد حاليًا. <br/> - *الاسم المعروض* - > *مصدر الخريطة التالي*. تشير ">" قبل اسم الخريطة إلى مصدر الخريطة المحدد التالي إذا تم تنفيذ الإجراء. <br/> - *ملاحظة*. لتغيير مصادر الخريطة في OsmAnd، يمكنك إما إعداد إجراء سريع واحد يسمح لك بالتبديل بين مصادر خرائط متعددة، أو إنشاء عدة إجراءات سريعة منفصلة، كل منها لمصدر خريطة محدد. |
| إظهار / إخفاء <br /> [**النقل العام**](../map/vector-maps.md#transport) | تمكين أو تعطيل طبقة خريطة النقل العام <br /> - *نوع النقل*. عند النقر الأول، يمكنك تحديد نوع واحد أو عدة أنواع من النقل، بما في ذلك *محطات النقل*، *مسارات الحافلات، الترولي باص، والحافلات الصغيرة*، *مسارات الترام والقطارات*، *مسارات المترو*. |
| تغيير <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | إنشاء قائمة بمصادر الخرائط كتراكب للخريطة والتنقل بينها. <br /> - *ملاحظة*. لتغيير تراكبات الخرائط في OsmAnd، يمكنك إما إعداد إجراء سريع واحد يسمح لك بالتبديل بين تراكبات خرائط متعددة، أو إنشاء عدة إجراءات سريعة منفصلة، كل منها لتراكب خريطة محدد. |
| تغيير <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | إنشاء قائمة بمصادر الخرائط كتراكب سفلي للخريطة والتنقل بينها. <br /> - *ملاحظة*. لتغيير تراكبات الخرائط في OsmAnd، يمكنك إما إعداد إجراء سريع واحد يسمح لك بالتبديل بين تراكبات خرائط متعددة، أو إنشاء عدة إجراءات سريعة منفصلة، كل منها لتراكب خريطة محدد. |
| تغيير <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | إنشاء قائمة بأنماط الخرائط للخرائط المتجهة والتنقل بينها. <br /> - *ملاحظة*. لتغيير أنماط الخرائط في OsmAnd، يمكنك إما إعداد إجراء سريع واحد يسمح لك بالتبديل بين تراكبات خرائط متعددة، أو إنشاء عدة إجراءات سريعة منفصلة، كل منها لنمط خريطة محدد. |
| إظهار / إخفاء <br/> [**طبقة Mapillary**](../plugins/mapillary.md) | يسمح لك بعرض طبقات الخريطة مع صور على مستوى الشارع مقدمة من Mapillary. |
| إظهار / إخفاء <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | يمكنك اختيار عرض أو إخفاء جميع ملاحظات OSM على الخريطة بنقرة زر واحدة. |


### الواجهة {#interface}

| الإجراء | الوصف |
|:-------------|:-------------|
| التنقل <br/> **الشاشة السابقة** | مفتاح تبديل للتنقل إلى الشاشة السابقة. |
| إظهار / إخفاء <br/> [**عرض التنقل**](../navigation/setup/route-navigation.md) | تبديل رؤية عرض شاشة التنقل. |
| إظهار / إخفاء <br/> [**عرض البحث**](../search/search-all.md) | يفتح أو يغلق عرض البحث. |
| إظهار / إخفاء <br/> [**القائمة الجانبية**](../start-with/main-menu.md) | تبديل رؤية القائمة الجانبية الرئيسية للوصول إلى الميزات الأساسية. |
| تشغيل / إيقاف <br/> [**قفل شاشة اللمس**](../map/interact-with-map.md#touch-screen-lock) | ينشط أو يلغي تنشيط قفل شاشة اللمس لتجنب التفاعلات غير المقصودة مع الشاشة. |


### تفاعلات الخريطة {#map-interactions}

| الإجراء | الوصف |
|:-------------|:-------------|
| الخريطة <br/> [**تكبير**](../map/interact-with-map.md) | تكبير الخريطة مع زيادة كمية البيانات المعروضة في نفس الوقت. |
| الخريطة <br/> [**تصغير**](../map/interact-with-map.md) | تقليل حجم الخريطة. من الملائم استخدامه مع [أداة المطور - مستوى التكبير](../widgets/info-widgets.md#developer-widgets). |
| تحريك <br/> [**الخريطة للأسفل**](../map/interact-with-map.md) | يمكنك استخدام زر الإجراء السريع لتحريك الخريطة للأسفل. |
| تحريك <br/> [**الخريطة للأعلى**](../map/interact-with-map.md) | عند النقر، تتحرك شاشة الخريطة للأعلى. |
| تحريك <br/> [**الخريطة إلى اليسار**](../map/interact-with-map.md) | عند النقر على الزر، تتحرك شاشة الخريطة إلى اليسار. |
| تحريك <br/> [**الخريطة إلى اليمين**](../map/interact-with-map.md) | باستخدام زر الإجراء السريع، يمكنك تحريك الخريطة إلى اليمين. |
| تحريك <br/> [**إلى موقعي**](../map/interact-with-map.md#my-location-and-zoom) | يحرك الخريطة إلى موضع *موقعي*. |


### أماكني {#my-places}

| الإجراء | الوصف |
|:-------------|:-------------|
| بدء / إيقاف مؤقت <br/> [**تسجيل الرحلة**](../plugins/trip-recording.md#new-track-recording) | بدء جلسة تسجيل للمسار الحالي أو إيقاف مؤقت للتوقف مؤقتًا دون إكمال الرحلة. |
| بدء <br/> [**مقطع رحلة جديد**](../plugins/trip-recording.md#overview-screen) | بدء مقطع جديد من الرحلة دون إيقاف التسجيل الكلي. |
| حفظ <br/> [**الرحلة المسجلة والمتابعة**](../plugins/trip-recording.md#current-track-recording) | حفظ تسجيل الرحلة الحالي ومتابعة التسجيل دون انقطاع. |
| إنهاء <br/> [**تسجيل الرحلة**](../plugins/trip-recording.md#current-track-recording) | إنهاء جلسة تسجيل الرحلة الحالية. |
| إضافة <br/> [**مفضلة**](../map/configure-map-menu.md#map-layers) | يضيف مفضلة إلى موقع الخريطة المحدد (المركزي). <br /> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار تأكيد. <br /> - *المجموعة*. يضيف مفضلة إلى المجموعة المحددة. <br /> - *اللون*. يضيف مفضلة بلون محدد مسبقًا. <br /> - *الاسم*. يضيف مفضلة ببادئة الاسم المحددة. |
| إضافة <br/> [**نقطة طريق للمسار**](../map/point-layers-on-map.md#track-waypoints) | يضيف نقطة طريق جديدة للمسار إلى [المسار الذي يتم تسجيله حاليًا](../plugins/trip-recording.md) أو [أي مسار في أماكني](../personal/tracks/manage-tracks.md). <br /> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار تأكيد. <br /> - *المجموعة*. يضيف مفضلة إلى المجموعة المحددة. <br /> - *اللون*. يضيف مفضلة بلون محدد مسبقًا. <br /> - *الاسم*. يضيف مفضلة ببادئة الاسم المحددة. |
| إضافة <br/> [**علامة خريطة**](../map/configure-map-menu.md#map-layers) | يضيف علامة إلى موقع خريطة محدد (المركز). |
| إضافة <br/> [**مكان وقوف السيارات**](../plugins/parking.md) | يضيف مكان وقوف السيارات إلى موقع خريطة محدد (المركز). يتم حذف موقع وقوف السيارات القديم. |
| إضافة <br/> [**نقطة اهتمام (POI)**](../map/point-layers-on-map.md#points-of-interest-pois) | يضيف نقطة اهتمام إلى موقع خريطة محدد (المركز) (نفس إجراء قائمة السياق). <br /> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار تأكيد. <br /> - *نوع نقطة الاهتمام* (اختياري). يحدد مسبقًا نوع نقطة اهتمام OSM. <br /> - *العلامة/القيمة* (متعددة). يضيف علامات / قيم [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) |
| إضافة <br/> [**ملاحظة OSM**](../plugins/osm-editing.md#create--modify-osm-note) | يضيف [ملاحظة OSM](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار تأكيد. <br /> - *الرسالة*. يضيف رسالة افتراضية إلى الملاحظة. |
| إضافة <br/> [**ملاحظات الوسائط**](../plugins/audio-video-notes.md) | يبدأ تسجيل ملاحظة صوتية / صور / فيديو لموقع خريطة محدد (المركز). |
| إنشاء <br/> [**مسار جديد**](../plan-route/create-route.md) <br /> *أندرويد فقط* | يفتح أداة [تخطيط مسار](../plan-route/create-route.md) وينشئ مسارًا للموقع المحدد (المركزي) على الخريطة. |


### التنقل {#navigation}

| الإجراء | الوصف |
|:-------------|:-------------|
| إضافة <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | يمكنك تحديد مركز شاشة الخريطة كنقطة وسيطة أولى. تظل الوجهة السابقة كما هي. |
| تشغيل / إيقاف <br/> [**توجيهات صوتية**](../navigation/guidance/voice-navigation.md) | كتم أو إلغاء كتم التوجيه الصوتي أثناء التنقل. |
| تعيين <br/> [**نقطة البداية**](../navigation/setup/route-navigation.md#set-destinations) | وضع علامة على موقع خريطة محدد (المركز) كنقطة انطلاق. |
| تعيين <br/> [**الوجهة**](../navigation/setup/route-navigation.md#set-destinations) | إضافة الموقع المحدد (المركزي) على الخريطة كوجهة. تصبح الوجهة السابقة النقطة الوسيطة الأخيرة. |
| استبدال <br/> [**الوجهة**](../navigation/setup/route-navigation.md#intermediate-destinations) | تعيين / استبدال موقع خريطة محدد (المركز) كوجهة. يتم حذف الوجهة السابقة. |
| تشغيل / إيقاف <br/> [**تكبير الخريطة تلقائيًا**](../map/interact-with-map.md) | تمكين أو تعطيل التكبير التلقائي للخريطة أثناء التنقل. |
| بدء / إيقاف <br/> [**التنقل**](../navigation/setup/route-navigation.md#start--stop-navigation) | بدء التنقل (إذا كانت هناك نقطة وجهة موجودة) أو إيقاف التنقل. |
| إيقاف مؤقت / استئناف <br/> [**التنقل**](../navigation/setup/route-navigation.md#pause--resume-navigation) | إيقاف مؤقت / استئناف التنقل. |
| إزالة <br/> [**نقطة الوجهة التالية**](../navigation/setup/route-navigation.md#intermediate-destinations) | يزيل النقطة الوسيطة التالية، إذا كانت موجودة، وإلا يزيل الوجهة ويعرض مربع حوار إنهاء التنقل. الإجراء غير نشط إذا لم يكن لديك أي وجهة. |
| محاكاة <br/> [**الموقع بواسطة GPX**](../plugins/development.md#gpx-track-simulation) | يحاكي موقع وحركة جهازك باستخدام مسار GPX. |


### الإعدادات {#settings}

| الإجراء | الوصف |
|:-------------|:-------------|
| تغيير <br/> [**ملف تعريف التطبيق**](../personal/profiles.md) | إنشاء قائمة بملفات تعريف التطبيق والتنقل بينها. <br /> - *إظهار مربع حوار مؤقت*. يعرض مربع حوار بقائمة من الملفات الشخصية. <br /> - *عدم إظهار مربع حوار مؤقت*. تتغير الملفات الشخصية بترتيب محدد. <br /> - *ملاحظة*. يمكنك تخصيص إجراء واحد يسمح لك بالتبديل بين ملفات تعريف متعددة، أو إنشاء عدة إجراءات منفصلة، كل منها لملف تعريف محدد. |
| تغيير <br/> [**ملف تعريف التطبيق إلى التالي**](../personal/profiles.md) | التبديل إلى الملف الشخصي التالي في القائمة. |
| تغيير <br/> [**ملف تعريف التطبيق إلى السابق**](../personal/profiles.md) | التبديل إلى الملف الشخصي السابق في القائمة. |
| تغيير <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *أندرويد فقط* | يسمح لك بتعيين موضع مؤشر *موقعي* على الخريطة. تمكين أو تعطيل المؤشر ليكون دائمًا في منتصف الشاشة. |
| تغيير <br/> [**موضع الموقع على الشاشة**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *iOS فقط* | يسمح لك بتمكين أو تعطيل عرض موضع مؤشر موقعي المحدد مسبقًا على الخريطة. |


## استخدام لوحة المفاتيح للإجراءات {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> ← &#43;*

![External devices](/img/map/external_custom_2_andr.png)

باستخدام وظيفة أداة الإجراء السريع، يمكنك تعيين الإجراءات المطلوبة لمفاتيح جهاز الإدخال الخارجي الخاص بك. يمكن العثور على وصف في مقالة [التفاعل مع الخريطة](../map/interact-with-map.md#custom-input-device-type).


## مقالات ذات صلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات التنقل](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)

> *آخر تحديث: أبريل 2025*