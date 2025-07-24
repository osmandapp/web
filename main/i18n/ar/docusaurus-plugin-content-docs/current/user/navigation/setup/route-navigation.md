---
source-hash: 5614ff96c05b150dc149ccfc7296cdeb953b69993517dcf326e81979e07d4a0f
sidebar_position: 1
title:  إعداد المسار
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

توفر ميزة **إعداد المسار** في OsmAnd إرشادات تنقل خطوة بخطوة لأنواع [توجيه مختلفة](./../routing/osmand-routing.md#routing-types)، بما في ذلك [القيادة](./../routing/car-based-routing.md)، [والمشي](./../routing/pedestrian-routing.md)، وركوب الدراجات، [ورفوب الخيل](./../routing/horse-routing.md)، [والتزلج](./../routing/ski-routing.md). يمكن للمستخدمين تخصيص إعدادات التنقل، وإضافة وجهات، وتحسين المسارات لتحقيق الكفاءة.

:::tip

- يتم تمكين **التنقل دون اتصال بالإنترنت** افتراضيًا. ومع ذلك، يمكنك أيضًا استخدام [محركات التوجيه عبر الإنترنت](./../routing/online-routing.md).

- **يتطلب OsmAnd إذنًا** للوصول إلى [الموقع الدقيق](../../start-with/first-steps.md#permission-to-access-the-location) للتنقل الدقيق. قم بتمكين هذا في إعدادات الجهاز إذا لزم الأمر.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![شاشة التنقل أندرويد 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![شاشة التنقل أندرويد 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة التنقل iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![شاشة التنقل iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## تعيين الوجهات {#set-destinations}

**الخطوة 1: تنزيل الخرائط.**

قبل استخدام التنقل دون اتصال بالإنترنت، تأكد من [تنزيل الخرائط](../../start-with/download-maps.md) المطلوبة. انتقل إلى *القائمة ← الخرائط والموارد ← تنزيل الخرائط* لتثبيت خرائط منطقتك.

**الخطوة 2: تكوين ملفات تعريف التنقل.**

[قم بتكوين الملفات الشخصية](../../personal/profiles.md) التي تنوي استخدامها:

- تعيين [معلمات المركبة](../guidance/navigation-settings.md#size-parameters) (*مهم لسائقي الشاحنات*)، وتحديد [نوع المحرك](../guidance/navigation-settings.md#fuel-used-by-motor) (*اختياري*).

- تكوين [مظهر خط المسار](../guidance/map-during-navigation#route-line-appearance) (*اختياري*، متاح لمستخدمي Pro ([أندرويد](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- تكوين [المطالبات الصوتية](../guidance/voice-navigation.md).

**الخطوة 3: تعيين الوجهات.**

1. افتح [*قائمة التنقل*](#navigation-menu):

    - حدد [نقطة الوجهة](#set-target-point).
    - انتظر حتى يتم حساب المسار. بعد ذلك، ستتمكن من الحصول على معلومات إضافية حول مسارك في *[قسم التفاصيل](./route-details.md#overview)*.
    - يمكنك التبديل بين [أنواع التوجيه المختلفة](./../routing/osmand-routing.md#routing-types) (الملفات الشخصية) للحصول على أفضل نتيجة.
    - إضافة [وجهات وسيطة](#intermediate-destinations) (اختياري).
    - يمكنك أيضًا تغيير نقطة المغادرة من [الموقع الحالي](../../map/interact-with-map#my-location-and-zoom) إلى الموقع المطلوب.

2. يمكن استخدام [*إعدادات التنقل*](#settings) الإضافية حسب أغراضك (يمكنك تكوين الطرق التي يجب تجنبها أو تفضيلها، أو توفير الوقود أو اختيار أسرع مسار، وما إلى ذلك).

3. [بدء](#start--stop-navigation) التنقل أو أولاً [محاكاة التنقل](#simulated-navigation) (باستخدام هذه الوظيفة يمكنك اختبار مسارك قبل السفر فعليًا على طوله).

4. أثناء وجودك على المسار، يمكنك [*إيقاف مؤقت/استئناف*](#pause--resume-navigation) التنقل و[*إيقافه*](#start--stop-navigation).


:::note

**لا يمكن بناء المسار عندما يتم تحديد *[الخريطة عبر الإنترنت](../../map/raster-maps.md#select-raster-maps)* كمصدر للخريطة.**

:::


### قائمة التنقل {#navigation-menu}

هناك 3 طرق للوصول إلى قائمة التنقل:

- [زر التنقل](../../widgets/map-buttons.md#directions) على شاشة الخريطة.
- *الاتجاه إلى/من* في [*قائمة سياق الخريطة*](../../map/map-context-menu.md#directions-to--from).
- قسم التنقل في [*القائمة الرئيسية*](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة التنقل أندرويد 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة التنقل iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – تعيين موقع البدء (افتراضي: [*موقعي الحالي*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - استخدم لـ [تعيين نقطة وجهتك](#set-target-point).
- **إضافة** &nbsp;&#43; - إدراج [نقاط وسيطة](../../widgets/nav-widgets.md#distance-to-intermediate) على طول المسار.
- **تبديل** &nbsp;&#8595;&#8593; - عكس نقاط *البداية* و *النهاية*.
- **زر الصوت** - كتم [المطالبات الصوتية](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [تعديل](#settings) تفضيلات المسار وقيود الطريق.

قم بتعيين وجهتك في *قائمة التنقل* باستخدام:

- نقاط المفضلة الخاصة [المنزل / العمل](#use-home-or-work-points).
- المسار السابق أو [السجل](../../personal/global-settings.md#history).
- يؤدي زر **إلغاء** إلى العودة إلى الشاشة الرئيسية.
- يبدأ [زر البدء](#start--stop-navigation) التنقل بعد انتهاء حساب المسار.
  
### تحديد نقطة البداية {#select-starting-point}

بالنسبة لنقطة البداية، يمكنك اختيار موقعك الحالي، أو موقع [نقطة مفضلة](../../map/point-layers-on-map.md#favorites)، أو تحديد نقطة على الخريطة، أو استخدام [البحث](../../search/index.md). يمكنك أيضًا تعيين نقطة بداية في [قائمة سياق الخريطة](../../map/map-context-menu.md) عن طريق تحديد وظيفة [الاتجاهات من](../../map/map-context-menu.md#directions-to--from).  


### تعيين نقطة الهدف {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة التنقل أندرويد 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![قائمة التنقل iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

أهم شيء لبدء التنقل هو تحديد وجهتك. يمكن العثور على نقطة الوجهة باستخدام وظيفة [*البحث*](../../search/index.md#overview)، أو ببساطة على الخريطة. يمكنك أيضًا تعيين نقطة الهدف في [*قائمة التنقل*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - يفتح [قائمة البحث](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - يفتح [قائمة البحث عن العنوان](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - يفتح الخريطة لاختيار نقطة وجهة عن طريق النقر على الخريطة.
- **<Translate android="true" ids="shared_string_favorites"/>** - يسمح باستخدام [المفضلة](../../personal/favorites.md) كوجهة.
- **<Translate android="true" ids="shared_string_markers"/>** - يسمح باختيار أحد [علامات الخريطة](../../personal/markers.md) كنقطة وجهة.
- **تبديل نقطة البداية والوجهة** &nbsp;&#8595;&#8593; - يسمح بتبديل نقاط *البداية* و *النهاية*.


### الوجهات الوسيطة {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![التنقل الوسيط أندرويد 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![التنقل الوسيط أندرويد 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![التنقل الوسيط iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![التنقل الوسيط iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - يسمح بفتح قائمة نقاط الوجهة لإجراء التغييرات.
- **&nbsp;&#8592;** - ينتقل إلى شاشة قائمة التنقل.
- **&nbsp;&#10005;** - يسمح بحذف نقطة الوجهة من قائمة النقاط.
- **&nbsp;&#61;** - يسمح بتغيير ترتيب النقاط في قائمة النقاط.
- *&nbsp;&#43; إضافة* - يفتح قائمة السياق *إضافة وسيطة*.
- *&nbsp;&#9776; مسح الكل* - يسمح بمسح جميع النقاط الوسيطة.

إذا اخترت **فرز** (*أندرويد*) أو **خيارات** (*iOS*) في قائمة الوجهات، فستصل إلى خيارات خاصة لضبط ترتيب التنقل إلى النقاط الوسيطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![التنقل الوسيط أندرويد 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![التنقل الوسيط iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك العثور على خيارات إضافية لإدارة نقاط الوجهة:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - سيقدم OsmAnd أقصر مسار بين جميع وجهاتك، ومع ذلك، يمكن تعديل ترتيب الزيارة. لن يتم تغيير نقطة البداية والوجهة النهائية.

- **<Translate android="true" ids="switch_start_finish"/>** - سيتم تبديل نقطة البداية والوجهة النهائية.

- **<Translate android="true" ids="reverse_all_points"/>** (*أندرويد فقط*) - سيتم وضع جميع النقاط في الاتجاه المعاكس.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. يمكنك إضافة وجهات وسيطة من هذه القائمة.

- **<Translate android="true" ids="clear_all_intermediates"/>**. سيتم إزالة جميع الوجهات الوسيطة من الخريطة.

### استخدام نقاط المنزل أو العمل {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![المفضلة الخاصة أندرويد](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المفضلة الخاصة iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

يمكن استخدام علامات التبويب **المنزل** و **العمل** (أو [النقاط الخاصة](../../personal/favorites.md#special-favorites-personal) للمفضلة) لتعيين نقاط الوجهة بسرعة في قائمة التنقل. إذا لم تقم بإدخال عناوين المفضلة الخاصة، فستظل هذه الخلايا فارغة. إذا نقرت على هذا الحقل، فسيُطلب منك إنشاء نقاط الاهتمام هذه.  


### سجل المسارات السابقة {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![المسار السابق أندرويد](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![المسار السابق iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

إذا تم تمكين تسجيل [سجل التنقل](../../personal/global-settings.md#history)، يمكنك استخدام المسارات أو الوجهات السابقة من قائمة السجل للتنقل. يمكن أن يكون هذا الخيار مفيدًا للوصول السريع إلى المسارات المستخدمة بشكل متكرر. يتم فرز العناصر في قائمة السجل حسب أحدث استخدام، بدءًا من الأحدث.  

:::note

- عند تعطيل تسجيل بيانات [السجل](../../personal/global-settings.md#history-options)، لن يُطلب منك استخدام المسارات السابقة للتنقل.
- يمكنك حذف بعض أو كل سجلات السجل حول مساراتك السابقة. يمكن القيام بذلك في علامة التبويب *[سجل التنقل](../../personal/global-settings.md#history-options)* لخيار السجل (*القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل*).

:::


## بدء / إيقاف التنقل {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![شاشة التنقل بدء أندرويد](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة التنقل iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

بمجرد تحديد نقاط البداية والنهاية، سيقوم التطبيق بإنشاء مسار بينهما باستخدام ملف تعريف نشط. لن يتم تبديل [ملف تعريف التطبيق](../../personal/profiles.md) و [مجموعة الأدوات](../../widgets/index.md) إلا بعد النقر على زر *بدء* التنقل.

- **انقر على بدء** لبدء التنقل.
- [إيقاف مؤقت](#pause--resume-navigation) التنقل عند أخذ استراحة. (*أندرويد فقط*)
- **إيقاف** التنقل عن طريق تحديد **إيقاف** (*أندرويد*) أو **إلغاء** (*iOS*).

:::note تفاصيل المسار
يمكن العثور على معلومات إضافية حول المسار الذي تم إنشاؤه، مثل الارتفاع، وتوجيهات الانعطاف، وأداة التحليل، وغيرها، في قسم [**التفاصيل**](../setup/route-details.md).
:::

### إعادة حساب المسار {#route-recalculation}

يمكن إعادة حساب المسار تلقائيًا في حالة الانحراف عنه. يمكنك تغيير معلمات إعادة الحساب في [إعدادات التنقل](../guidance/navigation-settings.md#recalculate-route). يمكنك أيضًا تعطيل الإشعار حول إعادة حساب المسار في إعدادات [المطالبات الصوتية](../guidance/voice-navigation.md#voice-settings).

### إيقاف مؤقت / استئناف التنقل {#pause--resume-navigation}

<InfoAndroidOnly/>

إذا كنت ترغب في التوقف للاستراحة والانحراف عن المسار لفترة قصيرة، يمكنك استخدام وظيفة *إيقاف مؤقت/استئناف* التنقل لإيقاف المطالبات الصوتية مؤقتًا وإيقاف إعادة حساب المسار.
يتوفر هذا الخيار في إصدار أندرويد من التطبيق في *[قائمة الإشعارات](../guidance/voice-navigation.md#text-notifications)* أو من *[قائمة الإجراءات السريعة](../../widgets/quick-action.md)*.

![شاشة الإشعارات أندرويد](@site/static/img/navigation/route/navigation_pause_android.png)

لاستئناف التنقل:

- استخدم الرسالة من OsmAnd في شريط الإشعارات.
- استخدم *قائمة الإجراءات السريعة* أو مربع الحوار الذي يظهر عند النقر على *[زر التنقل](../../widgets/map-buttons.md#directions)* (انظر لقطة الشاشة).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![استئناف التنقل أندرويد](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![استئناف التنقل iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
عندما **تنقر على زر التنقل** أثناء وجودك على مسارك، فإن التنقل **لا يتوقف، وتستمر المطالبات الصوتية في النطق**، على الرغم من أن الخيارات المقترحة استئناف أو بدء قد تكون مربكة.
:::


### نصائح لتوفير الطاقة {#power-saving-tips}

يستخدم التنقل نظام تحديد المواقع العالمي (GPS) ومعالجة الخلفية، مما قد يؤدي إلى استنزاف البطارية. لتحسين استخدام الطاقة:

- **أطفئ الشاشة** مع الاعتماد على المطالبات الصوتية.
- قم بتمكين [التحكم في الشاشة](../guidance/voice-navigation.md#screen-control) (*أندرويد فقط*) في *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## الإعدادات {#settings}

![إعداد المسار أندرويد](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### إعدادات التنقل {#navigation-settings}

للوصول إلى إعدادات التنقل، اتبع إحدى الخطوات التالية:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *زر التنقل ← <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
لا توجد إعدادات تنقل في ملف تعريف *تصفح الخريطة*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات التنقل أندرويد](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات التنقل للملفات الشخصية iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** يحدد كيفية حساب المسارات. على سبيل المثال، يحتوي ملف تعريف دراجتك على نوع تنقل ركوب الدراجات، والذي يحدد قواعد التوجيه. يمكنك استيراد هذه القواعد (كملف routing.xml) في OsmAnd. المزيد عن التوجيه يمكنك قراءته على صفحتنا [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** يتحكم في المعلمات التي سيتم استخدامها أثناء التوجيه (وهي عملية اختيار مسار للتنقل).

يرجى قراءة عن معلمات المسار لنوع التنقل المقابل.

كيفية تكوين [نوع التوجيه](../routing/osmand-routing.md#routing-types) و [معلمات المسار](../guidance/navigation-settings.md#route-parameters) يمكنك قراءتها في [مقالة إعدادات التنقل](../guidance/navigation-settings.md) أو في المقالات حول أنواع محددة من التوجيه في [قسم معلمات المسار](../routing/osmand-routing.md#routing-types).  


### التنقل المحاكى {#simulated-navigation}

تتيح لك أداة **التنقل المحاكى** معاينة المسار قبل السفر. يساعد هذا في التخطيط والتعرف واختبار نظام التنقل في OsmAnd.

#### بدء / إيقاف المحاكاة {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![محاكاة التنقل أندرويد](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![محاكاة التنقل iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

عند بناء مسار تنقل، يمكنك بدء محاكاة التنقل باستخدام خيار **<Translate android="true" ids="simulate_navigation"/>**.  

- في [قائمة التنقل](#navigation-menu) انتقل إلى *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- قم بتبديل المفتاح لتمكين الخيار.
- انقر على زر [بدء](#start--stop-navigation) التنقل لبدء المحاكاة.
- لـ [إيقاف](#start--stop-navigation) محاكاة التنقل، انقر على **إيقاف** (*أندرويد*)، أو **إلغاء** (*iOS*).


#### وضع السرعة {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![محاكاة التنقل أندرويد](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![محاكاة التنقل iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - يسرع المحاكاة على المسارات المستقيمة، ويتباطأ عند التقاطعات.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - يعمل بسرعة ثابتة.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **في الأقسام المستقيمة** من الطريق، ستكون السرعة قريبة من السرعة القصوى المسموح بها.
    - **عند التقاطعات**، سيقلل المحاكي السرعة.
    - سيتم تطبيق **عقوبات إضافية** عند إشارات المرور وعلامات التوقف والعقبات المماثلة الأخرى.


## الخرائط مفقودة أو غير متزامنة {#maps-missing-or-not-synchronized}

لبناء مسار، يجب تنزيل جميع **الخرائط الضرورية** وأن يكون لها نفس تاريخ الإصدار. يرجى ملاحظة أنه في بعض الحالات قد تكون رسالة الخرائط المفقودة مخفية في قائمة إعداد المسار. إذا سحبت قائمة التنقل لأعلى، فسترى الأسباب المحتملة لعدم إمكانية حساب مسارك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![رسالة لا توجد خرائط عند بناء التنقل أندرويد 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![رسالة لا توجد خرائط عند بناء التنقل iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### الخرائط المطلوبة {#required-maps}

في مربع حوار الخرائط المطلوبة، سترى اقتراحات للخرائط التي يجب تنزيلها أو تحديثها. قد لا تكون قائمة الخرائط المستخدمة دقيقة لأنها تحسب مسارًا أساسيًا جدًا، للحصول على قائمة دقيقة بالخرائط يمكنك النقر فوق **حساب عبر الإنترنت**. إذا حددت **استخدام الخرائط التي تم تنزيلها**، فستحاول عملية حساب التوجيه استخدام الخرائط التي تم تنزيلها بالفعل وتجاوز رسالة التحذير.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![رسالة لا توجد خرائط عند بناء التنقل أندرويد](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![رسالة لا توجد خرائط عند بناء التنقل iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## المشكلات الشائعة والحلول {#common-issues-and-solutions}

1. [الأسباب المحتملة لبطء حساب المسار.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [ماذا تفعل إذا تجاوز طول المسار 250 كيلومترًا.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [ماذا تفعل إذا بدا المسار المقترح غير صحيح.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [كيفية حل الموقف عندما لا يكون التنقل ممكنًا بسبب نقص الخرائط الضرورية.](#maps-missing-or-not-synchronized)

لمزيد من خطوات استكشاف الأخطاء وإصلاحها، راجع [مشكلات التنقل](../../troubleshooting/navigation.md).


## المقالات ذات الصلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [تفاصيل المسار](./route-details.md)
- [التنقل حسب المسار](./gpx-navigation.md)
- [التنقل حسب العلامات](./markers-navigation.md)
- [إعدادات التنقل](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء التنقل](../guidance/map-during-navigation.md)
- [المطالبات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: فبراير 2025*