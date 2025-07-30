---
source-hash: 9dfdc23272c2395a2fe157264de05cb42ea6de2b1b0d9d756c1c1bf66f78f6d3
sidebar_position: 7
title: إعدادات الملاحة
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

للملاحة الناجحة، من المهم تكوين الإعدادات المناسبة وفقًا لاحتياجاتك وكيفية سفرك - بالسيارة، سيرًا على الأقدام، على ظهر الخيل، أو التزلج. تصف هذه المقالة معلمات المسار الأساسية، [المطالبات الصوتية](#voice-prompts)، [تنبيهات الشاشة](#screen-alerts)، [سلوك الخريطة أثناء الملاحة](#map-during-navigation)، و[مظهر خطوط المسار](#customize-route-line). كما تفصل إعدادات المركبة مثل [السرعة الافتراضية](#default-speed) و[السرعة القصوى/الدنيا](#road-speeds)، [نوع المحرك](#fuel-used-by-motor) لحساب ثاني أكسيد الكربون، [سعة خزان الوقود](#fuel-tank-capacity)، و[الحجم/الوزن](#size-parameters)، والتي يمكن أن تؤثر على المسار. سيساعدك تعديل هذه الإعدادات على تحقيق أقصى استفادة من استخدام OsmAnd والوصول إلى هدفك دون تأخير غير ضروري.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### كيفية الفتح {#how-to-open}

يقدم هذا القسم إعدادات الملاحة الضرورية لحساب ورسم المسار، والتي يمكنك تعيينها للملف الشخصي المحدد. تتضمن هذه القائمة إعدادات [إعداد المسار](../setup/route-navigation.md)، [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)، وما تقوم بتعيينه في *إعدادات الملاحة* يؤثر مباشرة على عرض البيانات في [تفاصيل المسار](../setup/route-details.md).

هناك ثلاث طرق للوصول إلى قائمة إعدادات الملاحة.

- انتقل إلى *القائمة الرئيسية ← الإعدادات*، حدد *الملف الشخصي* المطلوب، وانقر على *إعدادات الملاحة*.

- انقر على أيقونة *الملاحة* على شاشة الخريطة، ثم حدد *أيقونة الإعدادات ← إعدادات الملاحة*.

- انتقل إلى *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>* الرئيسية.

:::info
الملف الشخصي الافتراضي *تصفح الخريطة* لا يحتوي على إعدادات ملاحة.
:::

## نوع الملاحة {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png) ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

الملاحة جزء مهم من الرحلة، واختيار *النوع الصحيح* من الملاحة يمكن أن يجعل رحلتك أسهل بكثير. يمكن أن يعتمد نوع الملاحة الذي تختاره على كيفية سفرك وما إذا كان لديك اتصال بالإنترنت.

- **الملاحة عبر الإنترنت**
تستخدم بشكل أساسي نظام توجيه خاص أو موقع ويب يسمح لتطبيق OsmAnd برسم مسار بناءً على المعلومات الحالية وعوامل أخرى. يمكنك قراءة المزيد حول اختيار أفضل مسار عبر الإنترنت في مقالة [التوجيه عبر الإنترنت](../routing/online-routing.md). هذا النوع من الملاحة متاح فقط لـ *إصدار أندرويد* من التطبيق.

- **الملاحة دون اتصال**
لا تتطلب الوصول إلى الإنترنت وتقدم مجموعة أوسع من [أنواع الملاحة](../routing/osmand-routing.md#routing-types) التي يمكن استخدامها لحساب المسار. من بينها *الدراجة، القارب، السيارة، سيرًا على الأقدام، التزلج*، و*الخط المستقيم*. يوجد حاليًا 13 نوعًا أساسيًا من التوجيه، بالإضافة إلى نوع توجيه خارجي [BRouter](../routing/brouter.md) يوفر فرص توجيه إضافية.

يحدد نوع الملاحة القواعد المستخدمة لحساب المسارات. إذا كنت بحاجة إلى نوع معين من الملاحة، يمكنك **استيراد ملف توجيه *XML* المعدل الخاص بك**. اقرأ المزيد حول قواعد التوجيه على [صفحتنا على GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). وهناك مقالة منفصلة حول تنسيق XML وكيفية استخدامه، [نمط عرض الخريطة](../../../technical/osmand-file-formats/osmand-rendering-style.md)، والتي يمكن أن تساعدك في إنشاء ملف مسار.

## معلمات المسار {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>** هي إعدادات تحدد كيفية حساب التطبيق للمسار للوصول إلى وجهة، مع الأخذ في الاعتبار عوامل مثل نوع النقل، أولويات التوجيه، ظروف المسار، تعقيد المسار، وتفضيلات المستخدم.

لكل [ملف شخصي](../../personal/global-settings.md#default-profile)، باستثناء *تصفح الخريطة*، يختار OsmAnd افتراضيًا [نوع الملاحة](#navigation-type) الأمثل و[معلمات المسار](../routing/osmand-routing.md#routing-types) ذات الصلة. ومع ذلك، يمكنك اختيار أي نوع تريده وتغيير المعلمات اعتمادًا على تفضيلاتك والظروف الخارجية للرحلة القادمة.

تم وصف جميع معلمات المسار بالتفصيل في الأقسام المقابلة من الوثائق:
*[توجيه السيارة (الشاحنة، الدراجة النارية)](../routing/car-based-routing.md)، [توجيه الدراجة (MTB)](../routing/bicycle-based-routing.md)، [توجيه الدراجة البخارية](../routing/moped-routing.md)، [توجيه المشاة](../routing/pedestrian-routing.md)، [توجيه النقل العام](../routing/public-transport-navigation.md)، [توجيه ركوب الخيل](../routing/horse-routing.md)، [توجيه التزلج](../routing/ski-routing.md)، [توجيه القطار](../routing/train-routing.md)، [توجيه القارب](../routing/boat-navigation.md)، [توجيه مباشر إلى نقطة](../routing/direct-to-point-routing.md)، [توجيه الخط المستقيم](../routing/straight-line-routing.md)، [توجيه عبر الإنترنت](../routing/online-routing.md)، [توجيه BRouter](../routing/brouter.md)*.

### إعادة حساب المسار {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

يغير معلم **حساب المسار** المسار المحسوب تلقائيًا عندما تنحرف عنه أو تقود في الاتجاه المعاكس. في كلتا الحالتين، يساعدك هذا الإعداد في الحفاظ على اتجاه سفرك والوصول إلى وجهتك دون إضاعة الوقت في البحث يدويًا عن مسار جديد.

| المعلم | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> في حالة الانحراف* | <Translate android="true" ids="recalculate_route_distance_promo"/> | إذا تم تشغيل [المطالبات الصوتية](../guidance/voice-navigation.md#voice-settings)، يعلن OsmAnd أن المسار يتم إعادة حسابه. |
| *إعادة حساب المسار في حالة الاتجاه المعاكس* | سيتم إعادة حساب مسارك إذا تحركت إلى نقطة البداية. | مع إيقاف تشغيل هذا الإعداد، لا يعتبر التحرك إلى نقطة البداية انحرافًا عن المسار (طالما أنه يتبع المسار المحسوب). |

### إعدادات التطوير {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *القائمة ← الإعدادات ← ملف تعريف التطبيق ← إعدادات الملاحة ← معلمات المسار ← التطوير*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *القائمة ← الإعدادات ← ملف تعريف التطبيق ← إعدادات الملاحة ← معلمات المسار ← التطوير*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

المعلمات في قسم **التطوير** مخصصة بشكل أساسي للمستخدمين المتقدمين وهي متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

| المعلم | الوصف |
|:------------|:---------------|
| *نوع التوجيه* (*أندرويد*) / *خوارزمية التوجيه* (*iOS*) | <ul><li>**A*** مرحلتين (*أندرويد*) / **A*** (*iOS*) يضيف مرحلة إضافية إلى الخوارزمية الافتراضية لتحسين جودة المسار المحسوب. يمكن أن يكون هذا الخيار مفيدًا لإيجاد مسارات في شبكات الطرق الكبيرة والمعقدة، ولكن قد يستغرق حساب المسار وقتًا أطول.</li><li>**A* كلاسيكي** (*أندرويد*) / **تسلسلات هرمية للطرق السريعة** (*iOS*) يحسن تخطيط المسار عن طريق تفضيل الطرق الرئيسية والطرق السريعة، مما يقلل من عدد المنعطفات والتقاطعات على المسار. فعال بشكل خاص على المسافات الطويلة.</li><li>**HH (تسلسلات هرمية للطرق السريعة) x Java** (*أندرويد فقط*) يعتمد على تنفيذ هياكل البيانات الهرمية لتحسين إيجاد المسار على الخريطة، مع الأخذ في الاعتبار قيود وقت التشغيل واستهلاك موارد الجهاز، ويتم تحقيقه على منصة Java.</li><li>**HH (تسلسلات هرمية للطرق السريعة) x C++** (*أندرويد فقط*) هي خوارزمية تستخدم لغة البرمجة C++ لمعالجة بيانات شبكة الطرق بكفاءة وبناء مسارات مثالية باستخدام هياكل البيانات الهرمية. تم تحسينها للمعالجة السريعة لكميات كبيرة من البيانات وهي فعالة بشكل خاص للتنقل في الخرائط التي تحتوي على العديد من شبكات الطرق.</li></ul> |
| *تقريب GPX* (*أندرويد فقط*) | <ul><li>يستخدم تقريب GPX **المعتمد على التوجيه** في **C++ و Java** بيانات المسار لتقريب مسارات GPS مع مسارات الطرق الموجودة، مما يحسن دقة المسار ويقلل من حجم المسار.</li><li>تعمل تقريبات GPX **المعتمدة على الهندسة** في **C++ و Java** بناءً على المبادئ الهندسية لتقريب مسارات GPS بسرعة ودقة، مما يسمح بالمعالجة الفعالة لكميات كبيرة من البيانات.</li></ul> |
| *التكبير التلقائي* | <ul><li>**المنفصل** يسمح لك بتكبير الخريطة إلى مستوى معين من التفاصيل يتم قياسه في بضع خطوات منفصلة.</li><li>**السلس** يوفر تغييرًا تدريجيًا في مقياس الخريطة مع تأثيرات رسوم متحركة سلسة بدون اهتزازات أو قفزات.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*أندرويد فقط*) | استخدم [تحديثات OsmAnd Live](../../personal/maps-resources.md#osmand-live) أثناء التوجيه. لاحظ أننا نوصي باستخدام هذا الخيار لأغراض الاختبار فقط. |

<!--
| المعلم | الوصف | ملاحظة |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>* | يسمح باستخدام [تحديثات OsmAnd Live](../../personal/maps-resources.md#osmand-live) أثناء التوجيه. لاحظ أننا نوصي باستخدام هذا الخيار لأغراض الاختبار فقط. |
| *<Translate android="true" ids="use_two_phase_routing"/>* | يضيف مرحلة إضافية إلى خوارزمية (A*) الافتراضية لتحسين جودة المسار المحسوب. قد يكون هذا الخيار مفيدًا لإيجاد مسارات في شبكات الطرق الكبيرة والمعقدة، على الرغم من أنه قد يستغرق وقتًا أطول لحساب المسار. |
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/> |
-->

## المطالبات الصوتية {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *زر <Translate ios="true" ids="routing_settings"/>* *(أو <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) ← اختر ملف تعريف ← <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

يصف الجزء الأول من مقالة *[المطالبات الصوتية / الإشعارات](./voice-navigation.md)* كيفية إعداد المطالبات الصوتية بالتفصيل.

تساعدك التعليمات الصوتية أثناء الملاحة كسائق أو مشاة على الوصول إلى وجهتك أثناء [التنقل في مسار محدد](../setup/route-navigation.md). تحتوي على معلومات حول المنعطفات، اتجاهات القيادة، علامات الطريق، المسافات إلى وجهتك، وعوامل أخرى قد تؤثر على ملاحتك.

إذا اخترت مسارًا كنقطة وجهتك، فأنت بحاجة إلى استخدام خيار [الربط بالطرق](../setup/gpx-navigation.md#attach-to-the-roads) لكي تعمل المطالبات الصوتية بشكل صحيح.

تسمح لك *المطالبات الصوتية* بالتركيز على الطريق وعدم التشتت بالخريطة أو جهاز الملاحة. كما أنها تحسن سلامة القيادة، وتقلل الوقت المستغرق للتنقل في تضاريس غير مألوفة، ويمكن أن تكون مفيدة لأنواع مختلفة من [المسارات](../routing/osmand-routing.md#routing-types).

## تنبيهات الشاشة {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

يمكّن إعداد الملاحة **تنبيه الشاشة** [**أداة التنبيهات**](../../widgets/nav-widgets.md#alert-widget). *التفاصيل:*

- عند الاقتراب من إحدى العوائق المدعومة على الطريق، تظهر الإشعارات في الزاوية السفلية اليسرى من الخريطة.
- إذا قمت بتكوين [*المطالبات الصوتية والنصية*](../../navigation/guidance/voice-navigation.md) المتاحة في تطبيق OsmAnd، فستحظى برحلة أكثر راحة وأمانًا.
- يعتمد ظهور وتوقيت المطالبات على إعدادات السرعة الخاصة بك. يمكنك العثور عليها [في المقالة](../../../technical/algorithms/voice-prompt-triggering.md).
- يتأثر سلوك *تنبيهات الشاشة* أيضًا بإعداد [إظهار النقاط على طول المسار](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

يمكنك ***تحديد التنبيهات التي تريد رؤيتها*** على شاشة التطبيق أثناء التنقل:

- **حد السرعة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). في إعداد تنبيهات الشاشة، يتم عرض *حد السرعة* فقط على الشاشة مع تشغيل *تحذيرات المرور*. إذا كنت ترغب في رؤية حدود السرعة أثناء التنقل بدون تحذيرات أخرى، استخدم [الأداة](../../widgets/nav-widgets.md#speed-limit).
- **تحذيرات المرور** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). يمكن العثور على معلومات إضافية في مقالة [شاشة الخريطة أثناء التنقل](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **ممرات المشاة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **كاميرات السرعة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). لمزيد من المعلومات حول إعداد كاميرا السرعة في OsmAnd، اقرأ [أنواع التنبيهات](../../widgets/nav-widgets.md#alert-types) ومقالة *الإعدادات العامة*، قسم [القانوني](../../personal/global-settings.md#legal).
- **الأنفاق** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
تختلف أنواع التحذيرات في مظهرها البصري، والذي يعتمد على منطقة السفر. لا يهدف OsmAnd إلى تقديم علامات طريق متطابقة بنسبة 100% ولكنه يشير إلى بعض أوجه التشابه.
:::

## الخريطة أثناء الملاحة {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

تُستخدم **الخريطة أثناء الملاحة** لتحديد موقعك، وتخطيط مسارك، وتوجيهك. أثناء الملاحة، يمكنك عرض الخريطة مع *التمركز التلقائي*، وتحريكها، و*التكبير والتصغير* لرؤية المنطقة المطلوبة. يمكن للخريطة أيضًا عرض علامات تشير إلى نقاط الاهتمام، والمسارات، وظروف الطقس، وعلامات الطريق، وغيرها من الكائنات لمساعدتك في التنقل. يمكن تحديث الخريطة في *الوقت الفعلي* وتعرض *معلومات محدثة* يمكن أن تؤثر على تخطيط المسار.

يمكنك معرفة كيفية تغير سلوك الخريطة أثناء الملاحة في مقالة [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md).

## تخصيص خط المسار {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

باستخدام إعداد **تخصيص خط المسار**، يمكنك اختيار مظهر خط المسار الذي سيكون مرئيًا على الخريطة أثناء الملاحة. يمكنك تحديد *اللون*، *عرض الخط*، وعرض *أسهم الانعطاف* عليه. لكل ملف شخصي، يمكنك اختيار عرض خط مختلف. تم وصف جميع هذه المعلمات بالتفصيل في مقالة *شاشة الخريطة أثناء الملاحة* في قسم [مظهر خط المسار](../../navigation/guidance/map-during-navigation.md#route-line-appearance).

## معلمات المركبة {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

لحساب المسار الأمثل في OsmAnd، يجب مراعاة معلمات المركبة التالية:

1. قم بتعيين [*السرعة الافتراضية* أو *سرعات الطريق*](#default-speed--road-speeds)، كـ [الحد الأدنى والأقصى للسرعة](#road-speeds) للمركبة. سيساعد هذا التطبيق على تحديد الوقت المطلوب لإكمال المسار ويسمح له باختيار أفضل مسار، مع الأخذ في الاعتبار حدود السرعة على أجزاء الطريق المختلفة.
2. حدد [*نوع*](#fuel-used-by-motor) الوقود المستخدم من قبل المحرك. سيسمح هذا للتطبيق بتقدير انبعاثات ثاني أكسيد الكربون.
3. أدخل [*سعة خزان الوقود*](#fuel-tank-capacity) لتتبع مستوى الوقود واستهلاكه بدقة.
4. حدد [*معلمات الحجم والوزن*](#size-parameters) لمركبتك، والتي يمكن أن تساعد التطبيق في حساب المسار الأمثل وتجنب العوائق على الطريق بسبب القيود.

سيساعدك تعيين المعلمات بشكل صحيح في تطبيق OsmAnd على تجنب المشاكل عند التنقل في مسار، واختيار الأنسب وفقًا لنوع المركبة وقيود الطريق، وحساب وقت رحلتك.

### معلمات الحجم {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

تؤثر معلمات المركبة على الملاحة وإنشاء المسار لأنها تحدد توفر الطرق والجسور والعبّارات والسدود وغيرها من البنى التحتية. إذا تجاوز ارتفاع أو عرض أو طول أو وزن المركبة القيم المسموح بها لأقسام معينة من الطريق، فسيجد نظام الملاحة OsmAnd مسارًا بديلاً لتجنب العوائق على طول الطريق.

- ستتطابق وحدات القياس مع الإعدادات المحددة في *الإعدادات العامة ← [الوحدات والتنسيقات](../../personal/profiles.md#units--formats)*.
- يمكن تعيين معلمات المركبة يدويًا.
- إذا اخترت معلم قياس المركبة يدويًا، سيعرض لك التطبيق أقرب قيمة من القائمة الجاهزة. هذا ضروري لتجنب الأخطاء وبناء المسار بشكل أكثر صحة.
- يمكنك اختيار معلمات المركبة من قائمة جاهزة من الأحجام.
- لا تقم بتعيين الحجم، *بلا*، مما يعني عدم تطبيق أي قيود على المعلم المحدد.

#### الحدود {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> الحد**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> معلم الوزن متاح فقط في أنواع الملاحة مثل [*السيارة، الشاحنة*، و*الدراجة النارية*](../../navigation/routing/car-based-routing.md).

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> الحد**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> معلم الارتفاع متاح فقط في أنواع الملاحة مثل *[السيارة، الشاحنة، الدراجة النارية](../../navigation/routing/car-based-routing.md)*، و*[القارب](../../navigation/routing/boat-navigation.md)*.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> الحد**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> معلم الطول متاح فقط في أنواع الملاحة مثل [*السيارة، الشاحنة*، و*الدراجة النارية*](../../navigation/routing/car-based-routing.md).

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> الحد**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> معلم العرض متاح فقط في أنواع الملاحة مثل *[السيارة، الشاحنة، الدراجة النارية](../../navigation/routing/car-based-routing.md)*، و*[القارب](../../navigation/routing/boat-navigation.md)*.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

يمكن أن تكون حدود معلمات المركبة مهمة للملاحة وسلامة الطرق. قد تتضمن بعض هذه القيود:

1. قيود على المركبات التي تتحرك في مناطق حضرية معينة.
2. قيود على حركة المركبات في أقسام معينة من الطريق، مثل حيث توجد جسور، أنفاق ذات مساحة محدودة، جسور علوية منخفضة الارتفاع، منعطفات معقدة، أو هياكل أخرى.
3. حدود الوزن لكل محور مركبة يمكن أن تكون مهمة بشكل خاص للشاحنات.
4. قيود على المركبات التي تتحرك في ظروف معينة، مثل درجات الحرارة العالية، الطرق الرطبة أو الثلجية، في الليل، أو في ظروف جوية ذات رؤية محدودة.

يمكن أن تكون هذه القيود مهمة للملاحة ويجب مراعاتها عند تخطيط المسار. إذا تجاوزت المركبة الحدود، فقد يؤدي ذلك إلى مشاكل في سلامة الطرق، وتلف البنية التحتية، وغرامات الحوادث، وعواقب قانونية أخرى. لذلك، يجب على السائقين فحص المسار بعناية والتأكد من أن ارتفاع مركبتهم يفي بالحدود.

### معلمات الوقود {#fuel-parameters}

#### الوقود المستخدم من قبل المحرك {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

إذا اخترت نوع المحرك في معلمات المركبة، فسيتم عرض [***بيانات بصمة ثاني أكسيد الكربون***](../../navigation/setup/route-details.md#elevation-info) فوق الرسم البياني في [تفاصيل المسار](../setup/route-details.md).
تتوفر ستة أنواع وقود: ***بنزين، ديزل، غاز البترول المسال، غاز طبيعي مضغوط، كهرباء،*** و***هجين***.

**قابلية التطبيق:**

إعداد **الوقود المستخدم من قبل المحرك** متاح فقط في الملاحة القائمة على المركبات مثل *[السيارة، الدراجة النارية، والشاحنة](../../navigation/routing/car-based-routing.md)*.

#### سعة خزان الوقود {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

يسمح لك معلم **سعة خزان الوقود** بتتبع مستوى الوقود واستهلاكه في مركبتك بدقة أكبر من خلال توفير الحجم الكلي لخزان الوقود الخاص بك. يتم تحديد وحدة القياس لسعة الوقود بواسطة الإعدادات المكونة في *القائمة ← تكوين الملف الشخصي ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدة الحجم*. للحصول على إرشادات مفصلة حول إعداد الوحدات والتنسيقات، راجع مقالة [الملف الشخصي (الإعدادات)](https://osmand.net/docs/user/personal/profiles#units--formats).

يدعم OsmAnd الوحدات التالية للسعة:

- جالونات - **gal**. تُستخدم هذه الاختصار لتمثيل كل من **الجالونات الإمبراطورية** و**الجالونات الأمريكية**، اعتمادًا على تفضيلات الوحدة المحددة لديك.
- لترات - **l**. الوحدة المترية للسعة.

**قابلية التطبيق:**

إعداد **سعة خزان الوقود** متاح فقط في الملاحة القائمة على المركبات. لأنواع الملاحة مثل *الدراجة*، *ركوب الخيل*، *سيرًا على الأقدام*، و*التزلج*، لا يتم عرض هذا المعلم في معلمات المركبة.

من خلال إدخال السعة الدقيقة لخزان الوقود الخاص بك، يمكن للتطبيق توفير تجربة مخصصة بشكل أكبر، بما في ذلك:

- تتبع دقيق للوقود المتبقي بناءً على استهلاكك.
- تخطيط مسار محسّن مع توقفات وقود محسّنة وفقًا لحجم خزان الوقود الخاص بك.

لضمان حسابات واقتراحات ملاحة دقيقة، تحقق من أن وحدتك المختارة تتطابق مع معيار قياس خزان الوقود الخاص بك.

### السرعة الافتراضية / سرعات الطريق {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

لجميع أنواع الملاحة، يمكن أن تختلف السرعة الدنيا والقصوى المسموح بها، سواء افتراضيًا أو حسب الطريق، وفقًا لقيم معينة ([حدود السرعة الافتراضية](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) وقيود المركبات. يتم تعيين السرعة أيضًا بزيادات معينة لجعل إعدادات التطبيق قابلة للاستخدام إلى أقصى حد. بالنسبة لملفات تعريف *المشي* و*ركوب الخيل* و*ركوب الدراجات*، بزيادات صغيرة تعادل 0.1 كم/ساعة ([الوحدات والتنسيقات](https://osmand.net/docs/user/personal/profiles#units--formats))، وبالنسبة للملفات الشخصية الأخرى، بزيادات تعادل 1 كم/ساعة.
تحدد إعدادات السرعة متى يتم تفعيل [الإعلانات الصوتية](../guidance/voice-navigation.md).

تُستخدم هذه المعلمات كسرعة لتقدير [وقت الوصول](../../widgets/nav-widgets.md#time-to-intermediate) عندما لا يمكن تحديد السرعة من بيانات الخريطة:

- للملف الشخصي المحدد؛
- إذا كانت الطرق المستخدمة لا تحتوي على حدود سرعة، مما قد يؤثر أيضًا على التوجيه؛
- إذا تم تحديد مسارات تم إنشاؤها بواسطة المستخدم أو مستوردة.

#### السرعة الافتراضية {#default-speed}

**السرعة الافتراضية** هي سرعة الحركة المحددة مسبقًا. تُستخدم لحساب وقت الوصول وتحديد المسار الأمثل بناءً على سرعة الحركة التي يعتبرها التطبيق نموذجية لهذا الوضع من النقل. على سبيل المثال، السيارة، النقل العام، المشاة، أو السرعة التي تحددها يدويًا.

#### سرعات الطريق {#road-speeds}

<InfoAndroidOnly />

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>

:::note
هذه الإعدادات في iOS متاحة في *القائمة ← الإعدادات ← ملف تعريف التطبيق ← إعدادات الملاحة ← معلمات المسار ← سرعات الطريق*.
:::
-->

- **السرعة الدنيا**
يحدد الإعداد السرعة الدنيا للقيادة لجميع أنواع الطرق على المسار. يزيد من الأولوية للطرق ذات السرعة الموصى بها الأقل من السرعة الدنيا.
- **السرعة القصوى**
يحدد الإعداد السرعة القصوى للقيادة ويقلل من الأولوية للطرق ذات السرعة الممكنة الأعلى من السرعة القصوى.

## توجيه المسار المفصل {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png) ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* ← *توجيه المسار المفصل*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png) ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

تعمل ميزة **توجيه المسار المفصل** على تحسين دقة الملاحة في المسار عند استخدام **المسارات القائمة على التتبع**. عند تحديد مسار كوجهة، يمكنك تمكين إعداد [الربط بالطرق](../setup/gpx-navigation.md#attach-to-the-roads) من قائمة [متابعة المسار](../setup/gpx-navigation.md#follow-track-options). يضمن ذلك محاذاة المسار مع الطرق الموجودة لملاحة أكثر سلاسة ودقة.

هناك خياران لاستخدام *توجيه المسار المفصل*:

- **<Translate android="true" ids="ask_every_time"/>** (*الإعدادات الافتراضية*) – سيظهر خيار *الربط بالطرق* في قسم [تفاصيل المسار](../setup/route-details.md) في كل مرة يتم فيها حساب مسار قائم على التتبع. يتيح لك هذا تحديد ما إذا كنت تريد تطبيق ربط الطرق لكل جلسة ملاحة.

- **<Translate android="true" ids="shared_string_always"/>** – سيتم تطبيق عملية ربط الطرق تلقائيًا لكل مسار *ملاحة بالمسار* دون الحاجة إلى تأكيد يدوي.

لمزيد من المعلومات حول استخدام الملاحة القائمة على التتبع، قم بزيارة [الملاحة بالمسار](../setup/gpx-navigation.md).

## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [الملاحة بالمسار](../setup/gpx-navigation.md)
- [الملاحة بالعلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [شاشة الخريطة أثناء الملاحة](./map-during-navigation.md)
- [المطالبات الصوتية / الإشعارات](./voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: أبريل 2025*