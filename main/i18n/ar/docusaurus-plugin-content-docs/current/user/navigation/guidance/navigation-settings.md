---
source-hash: 2df261c9180b4551af320e1c543ad9f218568286c2606e5a64d23089fbff8bdd
sidebar_position: 1
title:  إعدادات الملاحة
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

لنجاح الملاحة، من المهم تكوين الإعدادات المناسبة بشكل صحيح وفقًا لاحتياجاتك وكيفية سفرك - بالسيارة، سيرًا على الأقدام، على ظهر الخيل، أو على الزلاجات. يصف هذا المقال معلمات المسار الأساسية، [التوجيهات الصوتية](#voice-prompts)، [تنبيهات الشاشة](#screen-alerts)، [سلوك الخريطة أثناء الملاحة](#map-during-navigation)، و[مظهر خطوط المسار](#customize-route-line). كما يفصل [إعدادات المركبة](#vehicle-parameters) مثل السرعة الافتراضية، ونوع المحرك لحساب ثاني أكسيد الكربون، وسعة خزان الوقود، وقيود الحجم/الوزن. سيساعدك ضبط هذه الإعدادات على تحقيق أقصى استفادة من استخدام OsmAnd والوصول إلى وجهتك دون تأخير غير ضروري.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### كيفية الفتح {#how-to-open}

يقدم هذا القسم إعدادات الملاحة اللازمة لحساب ورسم المسار، والتي يمكنك تعيينها للملف الشخصي المحدد. تتضمن هذه القائمة إعدادات [إعداد المسار](../setup/route-navigation.md)، و[شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)، وما تقوم بتعيينه في *إعدادات الملاحة* يؤثر بشكل مباشر على عرض البيانات في [تفاصيل المسار](../setup/route-details.md).

هناك ثلاث طرق للوصول إلى قائمة إعدادات الملاحة.

- اذهب إلى *القائمة ← الإعدادات* الرئيسية، حدد *الملف الشخصي* المطلوب، وانقر على *إعدادات الملاحة*.

- انقر على أيقونة *الملاحة* على شاشة الخريطة، ثم حدد *أيقونة الإعدادات ← إعدادات الملاحة*.

- اذهب إلى *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
لا يحتوي الملف الشخصي الافتراضي *تصفح الخريطة* على إعدادات ملاحة.
:::


## نوع الملاحة {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

الملاحة جزء مهم من الرحلة، واختيار *النوع المناسب* من الملاحة يمكن أن يجعل رحلتك أسهل بكثير. يمكن أن يعتمد نوع الملاحة الذي تختاره على كيفية سفرك وما إذا كان لديك اتصال بالإنترنت.

- **الملاحة عبر الإنترنت**
    تستخدم بشكل أساسي نظام توجيه خاص أو موقع ويب يسمح لتطبيق OsmAnd برسم مسار بناءً على المعلومات الحالية وعوامل أخرى. يمكنك القراءة عن اختيار أفضل مسار عبر الإنترنت في مقال [التوجيه عبر الإنترنت](../routing/online-routing.md). هذا النوع من الملاحة متاح فقط *لإصدار أندرويد* من التطبيق.

- **الملاحة دون اتصال بالإنترنت**
لا تتطلب الوصول إلى الإنترنت وتقدم مجموعة أوسع من [أنواع الملاحة](../routing/osmand-routing.md#routing-types) التي يمكن استخدامها لحساب المسار. من بينها *الدراجة، القارب، السيارة، سيرًا على الأقدام، التزلج*، و*الخط المستقيم*. يوجد حاليًا ١٣ نوعًا أساسيًا من التوجيه، بالإضافة إلى نوع توجيه خارجي [BRouter](../routing/brouter.md) الذي يوفر فرص توجيه إضافية.

يحدد نوع الملاحة القواعد المستخدمة لحساب المسارات. إذا كنت بحاجة إلى نوع معين من الملاحة، يمكنك **استيراد ملف توجيه *XML* معدل خاص بك**. اقرأ المزيد عن قواعد التوجيه على [صفحتنا على GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). وهناك مقال منفصل حول تنسيق XML وكيفية استخدامه، [نمط عرض الخريطة](../../../technical/osmand-file-formats/osmand-rendering-style.md)، والذي يمكن أن يساعدك في إنشاء ملف مسار.


## معلمات المسار {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** هي إعدادات تحدد كيفية حساب التطبيق لمسار للوصول إلى وجهة، مع مراعاة عوامل مثل نوع النقل، وأولويات التوجيه، وظروف المسار، وتعقيد المسار، وتفضيلات المستخدم.

لكل [ملف شخصي](../../personal/global-settings.md#default-profile)، باستثناء *تصفح الخريطة*، يختار OsmAnd افتراضيًا [نوع الملاحة](#navigation-type) الأمثل و[معلمات المسار](../routing/osmand-routing.md#routing-types) ذات الصلة. ومع ذلك، يمكنك اختيار أي نوع تريده وتغيير المعلمات حسب تفضيلاتك والظروف الخارجية للرحلة القادمة.

جميع معلمات المسار موصوفة بالتفصيل في الأقسام المقابلة من الوثائق:  
*[توجيه السيارة (شاحنة، دراجة نارية)](../routing/car-based-routing.md)، [توجيه الدراجة (MTB)](../routing/bicycle-based-routing.md)، [توجيه الدراجة البخارية](../routing/moped-routing.md)، [توجيه المشاة](../routing/pedestrian-routing.md)، [توجيه النقل العام](../routing/public-transport-navigation.md)، [توجيه الخيل](../routing/horse-routing.md)، [توجيه التزلج](../routing/ski-routing.md)، [توجيه القطار](../routing/train-routing.md)، [توجيه القوارب](../routing/boat-navigation.md)، [التوجيه المباشر إلى النقطة](../routing/direct-to-point-routing.md)، [توجيه الخط المستقيم](../routing/straight-line-routing.md)، [التوجيه عبر الإنترنت](../routing/online-routing.md)، [توجيه BRouter](../routing/brouter.md)*.


### إعادة حساب المسار {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

يقوم خيار **حساب المسار** تلقائيًا بتغيير المسار المحسوب عند الانحراف عنه أو القيادة في الاتجاه المعاكس. في كلتا الحالتين، يساعدك هذا الإعداد في الحفاظ على اتجاه سفرك والوصول إلى وجهتك دون إضاعة الوقت في البحث يدويًا عن مسار جديد.

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> في حالة الانحراف*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | إذا كانت [التوجيهات الصوتية](../guidance/voice-navigation.md#voice-settings) مفعلة، يعلن OsmAnd أنه يتم إعادة حساب المسار. |
|  *إعادة حساب المسار في حالة الاتجاه العكسي*  | سيتم إعادة حساب مسارك إذا تحركت إلى نقطة البداية.  |  عند إيقاف هذا الإعداد، لا يعتبر التحرك إلى نقطة البداية انحرافًا عن المسار (طالما أنه يتبع المسار المحسوب).  |


### إعدادات المطور {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *القائمة ← الإعدادات ← ملف التطبيق الشخصي ← إعدادات الملاحة ← معلمات المسار ← التطوير*

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *القائمة ← الإعدادات ← ملف التطبيق الشخصي ← إعدادات الملاحة ← معلمات المسار ← التطوير*

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

المعلمات في قسم **التطوير** مخصصة بشكل أساسي للمستخدمين المتقدمين وهي متاحة فقط عند تمكين [ملحق تطوير OsmAnd](../../plugins/development.md).

| المعلمة | الوصف |
|:------------|:---------------|
| *نوع التوجيه* (*أندرويد*) / *خوارزمية التوجيه* (*iOS*) | <ul><li>**A*** ذو مرحلتين (*أندرويد*) / **A*** (*iOS*) يضيف مرحلة إضافية إلى الخوارزمية الافتراضية لتحسين جودة المسار المحسوب. يمكن أن يكون هذا الخيار مفيدًا للعثور على مسارات في شبكات الطرق الكبيرة والمعقدة، ولكن قد يستغرق حساب المسار وقتًا أطول.</li><li>**A* كلاسيكي** (*أندرويد*) / **تسلسلات الطرق السريعة** (*iOS*) يحسن تخطيط المسار من خلال تفضيل الطرق الرئيسية والطرق السريعة، مما يقلل من عدد المنعطفات والتقاطعات على المسار. فعال بشكل خاص للمسافات الطويلة.</li><li>**HH (تسلسلات الطرق السريعة) x Java** (*أندرويد فقط*) يعتمد على تنفيذ هياكل البيانات الهرمية لتحسين البحث عن المسار على الخريطة، مع مراعاة قيود وقت التشغيل واستهلاك موارد الجهاز، ويتم تحقيقه على منصة Java.</li><li>**HH (تسلسلات الطرق السريعة) x C++** (*أندرويد فقط*) هي خوارزمية تستخدم لغة البرمجة C++ لمعالجة بيانات شبكة الطرق بكفاءة وبناء مسارات مثالية باستخدام هياكل البيانات الهرمية. تم تحسينها للمعالجة السريعة لكميات كبيرة من البيانات وهي فعالة بشكل خاص للملاحة على الخرائط التي تحتوي على العديد من شبكات الطرق.</li></ul> |  
| *تقريب GPX* (*أندرويد فقط*)  | <ul><li>تقريب GPX **المبني على التوجيه** في **C++ و Java** يستخدم بيانات المسار لتقريب مسارات GPS مع مسارات الطرق الحالية، مما يحسن دقة المسار ويقلل من حجمه.</li><li>تقريب GPX **المبني على الهندسة** في **C++ و Java** يعمل بناءً على المبادئ الهندسية لتقريب مسارات GPS بسرعة ودقة، مما يسمح بمعالجة فعالة لكميات كبيرة من البيانات.</li></ul> |
| *تكبير تلقائي* | <ul><li>**متقطع** يسمح لك بتكبير الخريطة إلى مستوى معين من التفاصيل يقاس في بضع خطوات متقطعة.</li><li>**سلس** يوفر تغييرًا تدريجيًا في مقياس الخريطة مع تأثيرات رسوم متحركة سلسة دون اهتزازات أو قفزات.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*أندرويد فقط*)  | استخدم [التحديثات المباشرة](../../personal/maps-resources.md#live-updates) أثناء التوجيه. لاحظ أننا نوصي باستخدام هذا الخيار لأغراض الاختبار فقط.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## التوجيهات الصوتية {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![إعدادات التوجيه الصوتي أندرويد](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *زر <Translate ios="true" ids="routing_settings"/>* *(أو <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) ← اختر الملف الشخصي ← <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![إعدادات التوجيه الصوتي iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

يصف الجزء الأول من مقال *[التوجيهات الصوتية / الإشعارات](./voice-navigation.md)* كيفية إعداد التوجيهات الصوتية بالتفصيل.

تساعدك التعليمات الصوتية أثناء الملاحة كسائق أو مشاة على الوصول إلى وجهتك أثناء [الملاحة في مسار محدد](../setup/route-navigation.md). تحتوي على معلومات حول المنعطفات، واتجاهات القيادة، وعلامات الطريق، والمسافات إلى وجهتك، وعوامل أخرى قد تؤثر على الملاحة.

إذا اخترت مسارًا كنقطة وجهة، فأنت بحاجة إلى استخدام خيار [إرفاق بالطرق](../setup/gpx-navigation.md#attach-to-the-roads) لكي تعمل التوجيهات الصوتية بشكل صحيح.

تسمح لك *التوجيهات الصوتية* بالتركيز على الطريق وعدم تشتيت انتباهك بالخريطة أو جهاز الملاحة. كما أنها تحسن سلامة القيادة، وتقلل من الوقت المستغرق للتنقل في التضاريس غير المألوفة، ويمكن أن تكون مفيدة لمختلف [أنواع المسارات](../routing/osmand-routing.md#routing-types).

في قسم **الإعلان**، يمكنك اختيار أنواع الإشعارات التي يجب تشغيلها أو عرضها أثناء الملاحة:

- **اتجاهات خطوة بخطوة** (أندرويد فقط) – تسمح بتمكين أو تعطيل التعليمات الملاحية القياسية مثل *«انعطف يسارًا»*، *«انعطف يمينًا»*، أو *«في ٢٠٠ متر...»* . عند تعطيل الخيار، لا يتم تقديم الإعلانات عن المنعطفات وأسماء الشوارع، بينما تظل الإشعارات لنقاط الطريق، ونقاط المستخدم، وأحداث المسار نشطة. هذا الوضع مخصص للأنشطة مثل ركوب الزوارق الشراعية، أو المشي لمسافات طويلة، أو ركوب الدراجات على طول المسارات المسجلة مسبقًا، عندما تكون التنبيهات مطلوبة فقط لنقاط الطريق المضافة يدويًا.
- **أسماء الشوارع(TTS)** – يعلن أسماء الشوارع على طول مسارك.
- **رقم المخرج** – يعلن رقم المخرج عند القيادة على الطرق السريعة.
- **تحذيرات المرور** – يقدم تنبيهات حول أحداث الطريق المهمة مثل الازدحام أو القيود.
- **ممرات المشاة** – يحذرك عند الاقتراب من ممرات المشاة.
- **[كاميرات السرعة](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – ينبه إلى مواقع كاميرات السرعة (حيث يُسمح قانونيًا).
- **الأنفاق** – يُبلغك عند الدخول إلى نفق.


## تنبيهات الشاشة {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

يُمكّن إعداد الملاحة **تنبيه الشاشة** [**ويدجت التنبيهات**](../../widgets/nav-widgets.md#alert-widget). *التفاصيل:*

- عند الاقتراب من إحدى العقبات المدعومة على الطريق، تظهر الإشعارات في الزاوية السفلية اليسرى من الخريطة.
- إذا قمت بتكوين [*التوجيهات الصوتية والنصية*](../../navigation/guidance/voice-navigation.md) المتاحة في تطبيق OsmAnd، فستحظى برحلة أكثر راحة وأمانًا.
- يعتمد مظهر وتوقيت التوجيهات على إعدادات سرعتك. يمكنك العثور عليها [في المقال](../../../technical/algorithms/voice-prompt-triggering.md).  
- يتأثر سلوك *تنبيهات الشاشة* أيضًا بإعداد [إظهار النقاط على طول المسار](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

يمكنك ***تحديد التنبيهات*** التي تريد رؤيتها على شاشة التطبيق أثناء الملاحة:

- **حد السرعة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). في إعداد تنبيهات الشاشة، يتم عرض *حد السرعة* فقط على الشاشة مع تشغيل *تحذيرات المرور*. إذا كنت ترغب في رؤية حدود السرعة أثناء الملاحة بدون تحذيرات أخرى، فاستخدم [الويدجت](../../widgets/nav-widgets.md#speed-limit).
- **تحذيرات المرور** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). معلومات إضافية يمكن العثور عليها في مقال [شاشة الخريطة أثناء الملاحة](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **ممرات المشاة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **كاميرات السرعة** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). لمزيد من المعلومات حول إعداد كاميرا السرعة في OsmAnd، اقرأ [أنواع التنبيهات](../../widgets/nav-widgets.md#alert-types) ومقال *الإعدادات العامة*، قسم [قانوني](../../personal/global-settings.md#legal).
- **الأنفاق** ([معلومات OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
تتمتع أنواع التحذيرات بمظهر مرئي مختلف، والذي يعتمد على منطقة السفر. لا يهدف OsmAnd إلى تقديم علامات طرق متطابقة بنسبة ١٠٠٪ ولكنه يشير إلى بعض أوجه التشابه.
:::


## الخريطة أثناء الملاحة {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

تُستخدم **الخريطة أثناء الملاحة** لتحديد موقعك، وتخطيط مسارك، وتوجيهك على الأرض. أثناء الملاحة، يمكنك عرض الخريطة مع *التمركز التلقائي*، وتحريكها، و*التكبير والتصغير* لرؤية المنطقة المطلوبة. يمكن للخريطة أيضًا عرض علامات تشير إلى نقاط الاهتمام، والمسارات، وظروف الطقس، وعلامات الطريق، وغيرها من الكائنات لمساعدتك في الملاحة. يمكن تحديث الخريطة في *الوقت الفعلي* وتعرض *معلومات محدثة* يمكن أن تؤثر على تخطيط المسار.

يمكنك معرفة كيف يتغير سلوك الخريطة أثناء الملاحة في مقال [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md).

## تخصيص خط المسار {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![إعدادات الملاحة](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

باستخدام إعداد **تخصيص خط المسار**، يمكنك اختيار مظهر خط المسار الذي سيكون مرئيًا على الخريطة أثناء الملاحة. يمكنك تحديد *اللون*، و*عرض الخط*، وعرض *أسهم المنعطفات* عليه. لكل ملف شخصي، يمكنك اختيار عرض خط مختلف. جميع هذه المعلمات موصوفة بالتفصيل في مقال *شاشة الخريطة أثناء الملاحة* في قسم [مظهر خط المسار](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## معلمات المركبة {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![إعدادات الملاحة iOS](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

لضمان حساب OsmAnd للمسار الأمثل، من الضروري تكوين معلمات مركبتك - بما في ذلك سرعتها وأبعادها ووزنها ونوع الوقود - مما يسمح للتطبيق بتقدير وقت الرحلة بدقة، وتجنب قيود الطريق، وتتبع استهلاك الوقود، كما هو موضح في دليلنا الكامل حول [معلمات المركبة](./vehicle-parameters.md).


## توجيه المسار المفصل {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![إرفاق بالطرق 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![إعدادات الملاحة أندرويد](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *توجيه المسار المفصل*

![إعدادات الملاحة](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![إعدادات الملاحة](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

تعمل ميزة **توجيه المسار المفصل** على تحسين دقة الملاحة عند استخدام **المسارات المستندة إلى المسارات المسجلة**. عند تحديد مسار مسجل كوجهة، يمكنك تمكين إعداد [إرفاق بالطرق](../setup/gpx-navigation.md#attach-to-the-roads) من قائمة [اتباع المسار](../setup/gpx-navigation.md#follow-track-options). يضمن هذا محاذاة المسار المسجل مع الطرق الحالية، بحيث توفر الملاحة تعليمات دقيقة حول الدوارات والمنعطفات، وتوفر حدود السرعة، ومسارات الانعطاف، وأسماء الشوارع للطرق.

هناك خياران لاستخدام *توجيه المسار المفصل*:

- **<Translate android="true" ids="ask_every_time"/>** (*الإعدادات الافتراضية*) – سيظهر خيار *إرفاق بالطرق* في قسم [تفاصيل المسار](../setup/route-details.md) في كل مرة يتم فيها حساب مسار مستند إلى مسار مسجل. يتيح لك هذا تحديد ما إذا كنت تريد تطبيق إرفاق الطريق لكل جلسة ملاحة.

- **<Translate android="true" ids="shared_string_always"/>** – سيتم تطبيق عملية إرفاق الطريق تلقائيًا لكل مسار *ملاحة حسب المسار المسجل* دون الحاجة إلى تأكيد يدوي.

لمزيد من المعلومات حول استخدام الملاحة المستندة إلى المسارات المسجلة، قم بزيارة [الملاحة حسب المسار المسجل](../setup/gpx-navigation.md).


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [الملاحة حسب المسار المسجل](../setup/gpx-navigation.md)
- [الملاحة حسب العلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [شاشة الخريطة أثناء الملاحة](./map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](./voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [CarPlay](../car-play.md)