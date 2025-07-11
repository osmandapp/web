---
source-hash: ae22b6cd7849daf3b25f0a644bcdf63cfd6f3e48185e0d277a59873ba978a352
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

توفر ميزة **إعداد المسار** في OsmAnd إرشادات ملاحية خطوة بخطوة لأنواع مختلفة من [التوجيه](./../routing/osmand-routing.md#routing-types)، بما في ذلك [القيادة](./../routing/car-based-routing.md)، و[المشي](./../routing/pedestrian-routing.md)، وركوب الدراجات، و[ركوب الخيل](./../routing/horse-routing.md)، و[التزلج](./../routing/ski-routing.md). يمكن للمستخدمين تخصيص إعدادات الملاحة، وإضافة وجهات، وتحسين المسارات لتحقيق الكفاءة.

:::tip

- يتم تمكين **الملاحة دون اتصال بالإنترنت** افتراضيًا. ومع ذلك، يمكنك أيضًا استخدام [محركات التوجيه عبر الإنترنت](./../routing/online-routing.md).

- **يتطلب OsmAnd إذنًا** للوصول إلى [الموقع الدقيق](../../start-with/first-steps.md#permission-to-access-the-location) للملاحة الدقيقة. قم بتمكين هذا في إعدادات الجهاز إذا لزم الأمر.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![شاشة الملاحة أندرويد 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![شاشة الملاحة أندرويد 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة الملاحة iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![شاشة الملاحة iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## تعيين الوجهات {#set-destinations}

**الخطوة 1: تنزيل الخرائط.**

قبل استخدام الملاحة دون اتصال بالإنترنت، تأكد من تنزيل [الخرائط المطلوبة](../../start-with/download-maps.md). انتقل إلى *القائمة ← الخرائط والموارد ← تنزيل الخرائط* لتثبيت خرائط منطقتك.

**الخطوة 2: تكوين ملفات تعريف الملاحة.**

[قم بتكوين الملفات الشخصية](../../personal/profiles.md) التي تنوي استخدامها:

- قم بتعيين [معلمات المركبة](../guidance/navigation-settings.md#size-parameters) (*مهم لسائقي الشاحنات*)، وحدد [نوع المحرك](../guidance/navigation-settings.md#fuel-used-by-motor) (*اختياري*).

- قم بتكوين [مظهر خط المسار](../guidance/map-during-navigation#route-line-appearance) (*اختياري*، متاح لمستخدمي Pro ([أندرويد](../../purchases/android.md#pro-features-pro-features) / [iOS](../../purchases/ios.md#pro-features-pro-features))).

- قم بتكوين [المطالبات الصوتية](../guidance/voice-navigation.md).

**الخطوة 3: تعيين الوجهات.**

1. افتح [*قائمة الملاحة*](#navigation-menu):

    - حدد [نقطة الوجهة](#set-target-point).
    - انتظر حتى يتم حساب المسار. بعد ذلك، ستتمكن من الحصول على معلومات إضافية حول مسارك في *[قسم التفاصيل](./route-details.md#overview)*.
    - يمكنك التبديل بين [أنواع التوجيه](./../routing/osmand-routing.md#routing-types) المختلفة (الملفات الشخصية) للحصول على أفضل نتيجة.
    - أضف [وجهات وسيطة](#intermediate-destinations) (اختياري).
    - يمكنك أيضًا تغيير نقطة المغادرة من [الموقع الحالي](../../map/interact-with-map#my-location-and-zoom) إلى الموقع المطلوب.

2. يمكن استخدام [إعدادات الملاحة](#settings) الإضافية حسب أغراضك (يمكنك تكوين الطرق التي يجب تجنبها أو تفضيلها، أو توفير الوقود أو اختيار أسرع مسار، وما إلى ذلك).

3. [ابدأ](#start--stop-navigation) الملاحة أو قم أولاً [بمحاكاة الملاحة](#simulated-navigation) (باستخدام هذه الوظيفة يمكنك اختبار مسارك قبل السفر فعليًا على طوله).

4. أثناء المسار، يمكنك [إيقاف مؤقت/استئناف](#pause--resume-navigation) الملاحة و[إيقافها](#start--stop-navigation).


:::note

**لا يمكن بناء المسار عند تحديد *[الخريطة عبر الإنترنت](../../map/raster-maps.md#select-raster-maps)* كمصدر للخريطة.**

:::


### قائمة الملاحة {#navigation-menu}

هناك 3 طرق للوصول إلى قائمة الملاحة:

- [زر الملاحة](../../widgets/map-buttons.md#directions) على شاشة الخريطة.
- *الاتجاه إلى/من* في [قائمة سياق الخريطة](../../map/map-context-menu.md#directions-to--from).
- قسم الملاحة في [القائمة الرئيسية](../../start-with/main-menu.md) *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![قائمة الملاحة أندرويد 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الملاحة iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – تعيين موقع البدء (افتراضي: [*موقعي الحالي*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - استخدم لـ [تعيين نقطة وجهتك](#set-target-point).
- **إضافة** &nbsp;&#43; - إدراج [نقاط وسيطة](../../widgets/nav-widgets.md#distance-to-intermediate) على طول المسار.
- **تبديل** &nbsp;&#8595;&#8593; - عكس نقاط *البدء* و *الانتهاء*.
- **زر الصوت** - كتم [المطالبات الصوتية](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [تعديل](#settings) تفضيلات المسار وقيود الطريق.

قم بتعيين وجهتك في *قائمة الملاحة* باستخدام:

- نقاط المفضلة الخاصة [المنزل / العمل](#use-home-or-work-points).
- المسار السابق أو [السجل](../../personal/global-settings.md#history).
- يؤدي زر **إلغاء** إلى العودة إلى الشاشة الرئيسية.
- [زر البدء](#start--stop-navigation) يبدأ الملاحة بعد انتهاء حساب المسار.

### تحديد نقطة البداية {#select-starting-point}

بالنسبة لنقطة البداية، يمكنك اختيار موقعك الحالي، أو موقع [نقطة مفضلة](../../map/point-layers-on-map.md#favorites)، أو تحديد نقطة على الخريطة، أو استخدام [البحث](../../search/index.md). يمكنك أيضًا تعيين نقطة بداية في [قائمة سياق الخريطة](../../map/map-context-menu.md) عن طريق تحديد وظيفة [الاتجاهات من](../../map/map-context-menu.md#directions-to--from).

### تعيين نقطة الهدف {#set-target-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![قائمة الملاحة أندرويد 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الملاحة iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

أهم شيء لبدء الملاحة هو تحديد وجهتك. يمكن العثور على نقطة الوجهة باستخدام وظيفة [*البحث*](../../search/index.md#overview)، أو ببساطة على الخريطة. يمكنك أيضًا تعيين نقطة الهدف في [*قائمة الملاحة*](#navigation-menu):

- **<Translate android="true" ids="search_button"/>** - يفتح [قائمة البحث](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - يفتح [قائمة البحث عن العنوان](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - يفتح الخريطة لاختيار نقطة وجهة بالنقر على الخريطة.
- **<Translate android="true" ids="shared_string_favorites"/>** - يسمح باستخدام [المفضلة](../../personal/favorites.md) كوجهة.
- **<Translate android="true" ids="shared_string_markers"/>** - يسمح باختيار أحد [علامات الخريطة](../../personal/markers.md) كنقطة وجهة.
- **تبديل نقطة البداية والوجهة** &nbsp;&#8595;&#8593; - يسمح بتبديل نقاط *البداية* و *الانتهاء*.


### الوجهات الوسيطة {#intermediate-destinations}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![الملاحة الوسيطة أندرويد 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![الملاحة الوسيطة أندرويد 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الملاحة الوسيطة iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![الملاحة الوسيطة iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - يسمح بفتح قائمة نقاط الوجهة لإجراء تغييرات.
- **&nbsp;&#8592;** - ينتقل إلى شاشة قائمة الملاحة.
- **&nbsp;&#10005;** - يسمح بحذف نقطة الوجهة من قائمة النقاط.
- **&nbsp;&#61;** - يسمح بتغيير ترتيب النقاط في قائمة النقاط.
- *&nbsp;&#43; إضافة* - يفتح قائمة السياق *إضافة وسيطة*.
- *&nbsp;&#9776; مسح الكل* - يسمح بمسح جميع النقاط الوسيطة.

إذا اخترت **فرز** (*أندرويد*) أو **خيارات** (*iOS*) في قائمة الوجهات، ستصل إلى خيارات خاصة لضبط ترتيب التنقل إلى النقاط الوسيطة.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![الملاحة الوسيطة أندرويد 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الملاحة الوسيطة iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك العثور على خيارات إضافية لإدارة نقاط الوجهة:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - سيقدم OsmAnd أقصر مسار بين جميع وجهاتك، ومع ذلك، يمكن تعديل ترتيب الزيارة. لن يتم تغيير نقطة البداية والوجهة النهائية.

- **<Translate android="true" ids="switch_start_finish"/>** - سيتم تبديل نقطة البداية والوجهة النهائية.

- **<Translate android="true" ids="reverse_all_points"/>** (*أندرويد فقط*) - سيتم وضع جميع النقاط في الاتجاه المعاكس.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. يمكنك إضافة وجهات وسيطة من هذه القائمة.

- **<Translate android="true" ids="clear_all_intermediates"/>**. سيتم إزالة جميع الوجهات الوسيطة من الخريطة.

### استخدام نقاط المنزل أو العمل {#use-home-or-work-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![المفضلة الخاصة أندرويد](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المفضلة الخاصة iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

يمكن استخدام علامات تبويب **المنزل** و**العمل** (أو [النقاط الخاصة](../../personal/favorites.md#special-favorites-personal) للمفضلة) لتعيين نقاط الوجهة بسرعة في قائمة الملاحة. إذا لم تكن قد أدخلت عناوين المفضلة الخاصة، فستظل هذه الخلايا فارغة. إذا نقرت على هذا الحقل، ستتم مطالبتك بإنشاء نقاط الاهتمام هذه.

### سجل المسارات السابقة {#history-of-previous-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![المسار السابق أندرويد](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسار السابق iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

إذا تم تمكين تسجيل [سجل الملاحة](../../personal/global-settings.md#history)، يمكنك استخدام المسارات أو الوجهات السابقة من قائمة السجل للملاحة. يمكن أن يكون هذا الخيار مفيدًا للوصول السريع إلى المسارات المستخدمة بشكل متكرر. يتم فرز العناصر في قائمة السجل حسب أحدث استخدام، بدءًا من الأحدث.

:::note

- عند تعطيل [تسجيل بيانات السجل](../../personal/global-settings.md#history-options)، لن تتم مطالبتك باستخدام المسارات السابقة للملاحة.
- يمكنك حذف بعض أو كل سجلات السجل حول مساراتك السابقة. يمكن القيام بذلك في علامة التبويب *[سجل الملاحة](../../personal/global-settings.md#history-options)* من خيار السجل (*القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل*).

:::


## بدء / إيقاف الملاحة {#start--stop-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![شاشة الملاحة بدء أندرويد](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![شاشة الملاحة iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

بمجرد تحديد نقطتي البداية والنهاية، سيقوم التطبيق بإنشاء مسار بينهما باستخدام ملف تعريف نشط. سيتم تبديل [ملف تعريف التطبيق](../../personal/profiles.md) و[أدوات الواجهة](../../widgets/index.md) فقط بمجرد النقر على زر *بدء* الملاحة.

- **انقر على بدء** لبدء الملاحة.
- [إيقاف مؤقت](#pause--resume-navigation) الملاحة عند أخذ استراحة. (*أندرويد فقط*)
- **إيقاف** الملاحة عن طريق تحديد **إيقاف** (*أندرويد*) أو **إلغاء** (*iOS*).

:::note تفاصيل المسار
يمكن العثور على معلومات إضافية حول المسار الذي تم إنشاؤه، مثل الارتفاع، والتعليمات خطوة بخطوة، وأداة التحليل، وغيرها، في قسم [**التفاصيل**](../setup/route-details.md).
:::

### إعادة حساب المسار {#route-recalculation}

يمكن إعادة حساب المسار تلقائيًا في حالة الانحراف عنه. يمكنك تغيير معلمات إعادة الحساب في [إعدادات الملاحة](../guidance/navigation-settings.md#recalculate-route). يمكنك أيضًا تعطيل الإشعار حول إعادة حساب المسار في إعدادات [المطالبات الصوتية](../guidance/voice-navigation.md#voice-settings).

### إيقاف مؤقت / استئناف الملاحة {#pause--resume-navigation}

<InfoAndroidOnly/>

إذا كنت ترغب في التوقف لأخذ قسط من الراحة والانحراف عن المسار لفترة قصيرة، يمكنك استخدام وظيفة *إيقاف مؤقت/استئناف* الملاحة لإيقاف المطالبات الصوتية مؤقتًا وإيقاف إعادة حساب المسار.
يتوفر هذا الخيار في إصدار أندرويد من التطبيق في *[قائمة الإشعارات](../guidance/voice-navigation.md#text-notifications)* أو من *[قائمة الإجراءات السريعة](../../widgets/quick-action.md)*.

![شاشة الإشعارات أندرويد](@site/static/img/navigation/route/navigation_pause_android.png)

لاستئناف الملاحة:

- استخدم الرسالة من OsmAnd في شريط الإشعارات.
- استخدم *قائمة الإجراءات السريعة* أو مربع الحوار الذي يظهر عند النقر على *[زر الملاحة](../../widgets/map-buttons.md#directions)* (انظر لقطة الشاشة).

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![استئناف الملاحة أندرويد](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![استئناف الملاحة iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
عند **النقر على زر الملاحة** أثناء مسارك، فإن الملاحة **لا تتوقف، وتستمر المطالبات الصوتية في العمل**، على الرغم من أن الخيارات المقترحة استئناف أو بدء قد تكون مربكة.
:::


### نصائح لتوفير الطاقة {#power-saving-tips}

تستخدم الملاحة نظام تحديد المواقع العالمي (GPS) والمعالجة في الخلفية، مما قد يؤدي إلى استنزاف البطارية. لتحسين استخدام الطاقة:

- **أطفئ الشاشة** مع الاعتماد على المطالبات الصوتية.
- قم بتمكين [التحكم في الشاشة](../guidance/voice-navigation.md#screen-control) (*أندرويد فقط*) في *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## الإعدادات {#settings}

![إعداد المسار أندرويد](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### إعدادات الملاحة {#navigation-settings}

للوصول إلى إعدادات الملاحة، اتبع إحدى الخطوات التالية:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *زر الملاحة ← <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
لا توجد إعدادات ملاحة في ملف تعريف *تصفح الخريطة*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![إعدادات الملاحة أندرويد](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات الملاحة للملفات الشخصية iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** يحدد كيفية حساب المسارات. على سبيل المثال، يحتوي ملف تعريف الدراجة الخاص بك على نوع ملاحة ركوب الدراجات، والذي يحدد قواعد التوجيه. يمكنك استيراد هذه القواعد (كملف routing.xml) في OsmAnd. يمكنك قراءة المزيد حول التوجيه على صفحة [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) الخاصة بنا.&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** يتحكم في المعلمات التي سيتم استخدامها أثناء التوجيه (وهي عملية تحديد مسار للملاحة).

يرجى قراءة عن معلمات المسار لنوع الملاحة المقابل.

كيفية تكوين [نوع التوجيه](../routing/osmand-routing.md#routing-types) و[معلمات المسار](../guidance/navigation-settings.md#route-parameters) يمكنك قراءتها في [مقالة إعدادات الملاحة](../guidance/navigation-settings.md) أو في المقالات حول أنواع محددة من التوجيه في [قسم معلمات المسار](../routing/osmand-routing.md#routing-types).

### الملاحة المحاكية {#simulated-navigation}

تتيح لك أداة **الملاحة المحاكية** معاينة مسار قبل السفر. يساعد هذا في التخطيط والتعرف واختبار نظام الملاحة في OsmAnd.

#### بدء / إيقاف المحاكاة {#start--stop-simulation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![محاكاة الملاحة أندرويد](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![محاكاة الملاحة iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

عند بناء مسار ملاحة، يمكنك البدء في محاكاة الملاحة باستخدام خيار **<Translate android="true" ids="simulate_navigation"/>**.

- في [قائمة الملاحة](#navigation-menu) انتقل إلى *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- قم بتبديل المفتاح لتمكين الخيار.
- انقر على زر [بدء](#start--stop-navigation) الملاحة لبدء المحاكاة.
- لـ [إيقاف](#start--stop-navigation) محاكاة الملاحة، انقر على **إيقاف** (*أندرويد*)، أو **إلغاء** (*iOS*).


#### وضع السرعة {#speed-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![محاكاة الملاحة أندرويد](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![محاكاة الملاحة iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - يسرع المحاكاة على المسارات المستقيمة، ويتباطأ عند التقاطعات.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - يعمل بسرعة ثابتة.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **في الأقسام المستقيمة** من الطريق، ستكون السرعة قريبة من السرعة القصوى المسموح بها.
    - **عند التقاطعات**، سيقلل المحاكي السرعة.
    - سيتم تطبيق **عقوبات إضافية** عند إشارات المرور وعلامات التوقف والعقبات المماثلة الأخرى.


## الخرائط مفقودة أو غير متزامنة {#maps-missing-or-not-synchronized}

لبناء مسار، يجب تنزيل جميع **الخرائط الضرورية** وأن يكون لها نفس تاريخ الإصدار. يرجى ملاحظة أنه في بعض الحالات، قد تكون رسالة الخرائط المفقودة مخفية في قائمة إعداد المسار. إذا سحبت قائمة الملاحة لأعلى، فسترى الأسباب المحتملة لعدم إمكانية حساب مسارك.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![رسالة لا توجد خرائط عند بناء الملاحة أندرويد 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![رسالة لا توجد خرائط عند بناء الملاحة iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### الخرائط المطلوبة {#required-maps}

في مربع حوار الخرائط المطلوبة، سترى اقتراحات للخرائط التي يجب تنزيلها أو تحديثها. قد لا تكون قائمة الخرائط المستخدمة دقيقة لأنها تحسب مسارًا أساسيًا جدًا، للحصول على قائمة دقيقة للخرائط، يمكنك النقر على **حساب عبر الإنترنت**. إذا اخترت **استخدام الخرائط التي تم تنزيلها**، فستحاول عملية حساب التوجيه استخدام الخرائط التي تم تنزيلها بالفعل وتجاوز رسالة التحذير.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![رسالة لا توجد خرائط عند بناء الملاحة أندرويد](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![رسالة لا توجد خرائط عند بناء الملاحة iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## المشكلات الشائعة والحلول {#common-issues-and-solutions}

1. [الأسباب المحتملة لبطء حساب المسار.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [ماذا تفعل إذا تجاوز طول المسار 250 كيلومترًا.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [ماذا تفعل إذا بدا المسار المقترح غير صحيح.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [كيفية حل الموقف عندما لا تكون الملاحة ممكنة بسبب نقص الخرائط الضرورية.](#maps-missing-or-not-synchronized)

لمزيد من خطوات استكشاف الأخطاء وإصلاحها، راجع [مشكلات الملاحة](../../troubleshooting/navigation.md).


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [تفاصيل المسار](./route-details.md)
- [الملاحة حسب المسار](./gpx-navigation.md)
- [الملاحة حسب العلامات](./markers-navigation.md)
- [إعدادات الملاحة](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)
- [المطالبات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: فبراير 2025*