---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title:  الخطوات الأولى
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## نظرة عامة {#overview}

مرحباً بك في OsmAnd (اتجاهات الملاحة الآلية لـ OpenStreetMap)!

اكتشف كيفية تنزيل الخرائط، وكيفية تهيئة التطبيق، وكيفية استخدام الخريطة وبناء مسار، وكيفية بدء الملاحة، وكيفية البحث عن نقاط الاهتمام. تعرف على النقاط الرئيسية لسياسة خصوصية OsmAnd والأذونات المطلوبة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الملاحة دون اتصال أندرويد](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الملاحة دون اتصال iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## تثبيت OsmAnd {#install-osmand}

OsmAnd هو تطبيق جوال للخرائط والملاحة متاح لأجهزة **أندرويد** و **iOS**. يمكنك تنزيله من أشهر المتاجر.

**أسواق أندرويد**: [متجر جوجل بلاي](https://play.google.com/store/apps/details?id=net.osmand) و [معرض تطبيقات هواوي](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [متجر التطبيقات](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[اقرأ المزيد](../purchases/index.md) حول إصدارات OsmAnd والمشتريات.


## مرحباً بك في OsmAnd {#welcome-to-osmand}

نهدف إلى إنشاء تطبيق وظيفي بالكامل موجه للخرائط يمكن استخدامه لأغراض متنوعة دون اتصال وعبر الإنترنت. يحتوي التطبيق على العديد من الميزات، لذلك لن تضطر إلى التبديل بين التطبيقات المختلفة، وسيكون كل شيء في متناول يدك.

- عرض خريطة عالمية مع الكثير من التفاصيل المعروضة في [أنماط خرائط مختلفة](../map/vector-maps.md).
- عرض، [بحث](../search/search-poi.md) وحفظ [نقاط اهتمام](../map/point-layers-on-map.md) مختلفة.
- [تخطيط مسار](../plan-route/create-route.md) بالسيارة، الدراجة، المشي والجمع في مسارات متعددة الوسائط.
- بدء [الملاحة الموجهة بالصوت](../navigation/guidance/voice-navigation.md) عند تشغيل الشاشة وإيقاف تشغيلها.
- اجعل رحلتك السياحية غنية بـ [ويكيبيديا](../plugins/wikipedia.md) و [ويكيبوياج](../plan-route/travel-guides.md) دون اتصال.
- تخصيص كامل لكيفية [عرض الخريطة](../map/configure-map-menu.md) وما هي [الأدوات](../widgets/index.md) المعروضة عليها.
- التنقل [حسب المسار](../navigation/setup/route-navigation.md)، [حسب مسار معين](../navigation/setup/gpx-navigation.md)، [بواسطة النقل العام](../navigation/routing/public-transport-navigation.md) و [خارج الطريق](../navigation/setup/markers-navigation.md).
- كل شيء يعمل **دون اتصال**.
- ولا تنس المساهمة في [OpenStreetMap](https://www.openstreetmap.org/) باستخدام [ملحق تحرير OSM](../plugins/osm-editing.md).


## دليل الإجراءات {#actions-guide}

### إذن الوصول إلى الموقع {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الموقع الدقيق أندرويد](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الموقع الدقيق iOS](@site/static/img/steps/first_start_ios.png) ![الموقع الدقيق iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

نوصي بمنح OsmAnd إذنًا لتلقي معلومات حول الموقع الدقيق لجهازك. نحن لا نجمع أو نستخدم أو نشارك معلوماتك الخاصة، لذا فإن الوصول إلى تحديد الموقع الجغرافي الدقيق ضروري للعمل الصحيح دون اتصال لوظائف البحث والملاحة وغيرها من وظائف OsmAnd.


### كيفية تنزيل الخرائط {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عرض على الخريطة](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عرض على الخريطة](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

يعمل تطبيق OsmAnd مع أنواع مختلفة من الخرائط، ولكنه لا يمكن أن يعمل بشكل كامل إلا مع الخرائط التي تم تنزيلها دون اتصال بالإنترنت، لذلك بعد شاشة *<Translate android="true" ids="get_started"/>*، سيُطلب منك [*تنزيل خريطة*](../start-with/download-maps.md#initial-setup-screen) لمنطقتك. يمكنك اختيار منطقة مختلفة، أو الاستعادة من [OsmAnd Cloud](../personal/osmand-cloud.md)، أو تخطي هذه الخطوة وتنزيل الخرائط لاحقًا.
لخيارات تنزيل الخرائط الأخرى المتاحة، راجع مقالة [تنزيل الخرائط](../start-with/download-maps.md).

:::note ابدأ العمل بخرائط غير متصلة بالإنترنت
لا يمكن لـ OsmAnd العمل بشكل صحيح بدون خرائط غير متصلة بالإنترنت تم تنزيلها. على الرغم من أن التطبيق يدعم خرائط [المتجهات](../map/vector-maps.md) و [الراستر](../map/raster-maps.md)، إلا أنه يوصى بشدة بالبدء بالعمل بخرائط المتجهات غير المتصلة بالإنترنت لجعل جميع الوظائف مثل [البحث](../search/index.md)، [الملاحة](../navigation/index.md)، و [قائمة السياق](../map/map-context-menu.md) تعمل بشكل صحيح.
:::


### كيفية تنزيل خرائط العالم كله {#how-download-maps-for-the-whole-world}

بينما يسمح لك OsmAnd بتنزيل خرائط لجميع المناطق المتاحة، لا توجد حزمة واحدة لتنزيل العالم بأكمله دفعة واحدة. بدلاً من ذلك، يمكنك تنزيل خرائط فردية للبلدان أو المناطق بناءً على احتياجاتك.

***النقاط الرئيسية:***

- يوفر **OsmAnd Pro** و **Maps+** **تنزيلات خرائط غير محدودة**، ولكن لا يزال يتعين عليك تنزيل الخرائط منطقة تلو الأخرى.
- **قيود التخزين.** تأكد من أن جهازك يحتوي على مساحة كافية قبل تنزيل مناطق متعددة.
- **تحديثات تلقائية.** بمجرد التنزيل، يمكن تحديث الخرائط عبر *القائمة ← الخرائط والموارد ← التحديثات.*


### كيفية تغيير لغة التطبيق {#how-to-change-app-language}

يُستخدم خيار *لغة العرض* لتغيير لغة التطبيق بالكامل، بما في ذلك المطالبات المنبثقة، والنصوص الداخلية، والرسائل، والمزيد. حتى Android 12، يسمح لك OsmAnd بتخصيص لغة العرض وفقًا لتفضيلاتك مباشرة في التطبيق. بدءًا من Android 13 وعلى أجهزة iOS، لا يمكن تغيير لغة العرض إلا في إعدادات النظام (انظر كيفية تغيير تفضيلات اللغة لكل تطبيق في [Android](https://developer.android.com/guide/topics/resources/app-languages) و [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *الإعدادات ← التطبيقات ← OsmAnd ← اللغة*

![لغة الإعدادات العامة أندرويد](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *الإعدادات ← خرائط OsmAnd ← اللغة*

![لغة الإعدادات العامة iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note لا يوجد خيار لتعيين لغات التطبيق
على بعض أجهزة Android (Xiaomi مع Muiu 14)، لا يوجد خيار لتعيين لغات التطبيق بشكل فردي في إعدادات النظام، لذلك لا يمكن تغيير لغة OsmAnd إلا مع لغة النظام بأكمله. يمكنك الاطلاع على المناقشة على [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) للحصول على معلومات إضافية.
:::


### كيفية إدارة إعداداتك {#how-to-manage-your-settings}

يمكنك إدارة إعدادات التطبيق كـ [إعدادات عامة](../personal/global-settings.md) أو كـ [تكوين ملف تعريف](../personal/profiles.md) عبر [القائمة الرئيسية](../start-with/main-menu.md). يأتي التطبيق بقائمة محددة مسبقًا من الملفات الشخصية التي يمكن تعديلها لاحقًا. يمكن اعتبار كل ملف شخصي تطبيق خرائط مخصصًا لأغراض محددة. افتراضيًا، تُستخدم الملفات الشخصية فقط كأوضاع ملاحة مختلفة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إدارة الملف الشخصي أندرويد](@site/static/img/settings/manage_profile_android.png) ![تكوين الملف الشخصي أندرويد](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إدارة الملف الشخصي iOS](@site/static/img/settings/manage_profile_ios.png) ![تكوين الملف الشخصي iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../personal/global-settings.md) حول الإعدادات العامة.
[اقرأ المزيد](../personal/profiles.md) حول إعدادات الملف الشخصي.


### كيفية تهيئة المكونات الإضافية {#how-to-configure-plugins}

[المكونات الإضافية](../plugins/index.md#configure-plugin) توسع وظائف التطبيق بشكل كبير. تقريبًا جميع المكونات الإضافية لها [إجراءات الخريطة](../map/map-context-menu.md)، [طبقات الخريطة](../map/configure-map-menu.md)، [تنزيلات الخريطة](../start-with/download-maps.md) و [الإعدادات](../plugins/#plugin-settings) الخاصة بها.

يمكنك تمكين / تعطيل المكونات الإضافية عبر [القائمة الرئيسية](../start-with/main-menu.md) ← [المكونات الإضافية](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تمكين المكونات الإضافية أندرويد](@site/static/img/settings/plugins_enable_android.png) ![مثال على المكون الإضافي أندرويد](@site/static/img/settings/plugin_example_android.png)

لتمكين / تعطيل المكونات الإضافية، انتقل إلى:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> ← &#65049; ← تمكين

</TabItem>

<TabItem value="ios" label="iOS">

![تمكين المكونات الإضافية iOS](@site/static/img/settings/plugins_enable_ios.png) ![مثال على المكون الإضافي iOS](@site/static/img/settings/plugin_example_ios.png)

لتمكين / تعطيل المكونات الإضافية، انتقل إلى:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> ← &#10003;

</TabItem>

</Tabs>

[اقرأ المزيد](../plugins/index.md#configure-plugin) حول مكونات OsmAnd الإضافية.


### كيفية استخدام الخريطة {#how-to-use-a-map}

الخريطة هي عنصر أساسي في OsmAnd، ومن المهم معرفة [كيفية استخدامها](../map/interact-with-map.md) (الإيماءات، الأزرار، إلخ). يمكنك [تكوين الخريطة](../map/configure-map-menu.md) حسب احتياجاتك: [تغيير نمط الخريطة](../map/configure-map-menu.md#map-style-parameters)، تكوين [طبقات الخريطة](../map/configure-map-menu.md#map-layers) المختلفة مثل المفضلة، نقاط الاهتمام، النقل العام، المسارات، خطوط الكنتور، تظليل التضاريس وغيرها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تكوين الخريطة أندرويد](@site/static/img/settings/configure_map_menu_android.png) ![مثال على تكوين الخريطة أندرويد](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تكوين الخريطة iOS](@site/static/img/settings/configure_map_menu_ios.png) ![مثال على تكوين الخريطة iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../map/configure-map-menu.md) حول تكوين الخريطة.


### كيفية تهيئة الشاشة {#how-to-configure-screen}

تسمح لك [تهيئة الشاشة](../widgets/configure-screen.md) بتمكين الأدوات [المعلوماتية](../widgets/info-widgets.md) (الارتفاع، السرعة، الوقت الحالي، إلخ) و [الملاحية](../widgets/nav-widgets.md) (الوجهة، الاتجاه، وقت الوصول، إلخ)، [الإجراء السريع](../widgets/quick-action.md) والعناصر الأخرى التي ستُعرض فوق الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تهيئة الشاشة أندرويد](@site/static/img/widgets/configure_screen_android.png) ![مثال على تهيئة الشاشة أندرويد](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تهيئة الشاشة iOS](@site/static/img/settings/configure_screen_ios.png) ![مثال على تهيئة الشاشة iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../widgets/configure-screen.md) حول تهيئة الشاشة.


### كيفية إضافة بيانات شخصية إلى الخرائط {#how-to-add-personal-data-to-maps}

يسمح لك OsmAnd بوضع علامات مختلفة على الخريطة لاحتياجاتك الشخصية. على سبيل المثال، [نقاط المفضلة](../personal/favorites.md) - نقاط شخصية ذات اسم وأيقونة وفئة، [علامات](../personal/markers.md) - نقاط مضافة بسرعة كهدف، [ملاحظات صوتية/فيديو](../plugins/audio-video-notes.md) - ملاحظات وسائط مسجلة في نقطة محددة، [مسارات](../personal/tracks/manage-tracks.md) - مسارات وجولات مسجلة ومستوردة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة بيانات شخصية أندرويد](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة بيانات شخصية iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../map/point-layers-on-map.md) حول النقاط على الخريطة.


### كيفية تصفح والعثور على نقطة اهتمام {#how-to-browse--find-point-of-interest}

[نقاط الاهتمام (POI)](../map/point-layers-on-map.md#points-of-interest-pois) هي مرافق يمكن البحث عنها أو تمييزها على الخريطة. تمثل هذه النقاط أماكن مثيرة للاهتمام أو مفيدة ويتم توزيعها كجزء من [خرائط المتجهات](../map/vector-maps.md). يمكنك استخدامها [للعرض على الخريطة](../map/point-layers-on-map.md#points-of-interest-pois)، [للملاحة](../navigation/index.md) و [للبحث](../search/search-poi.md) عن نقاط الاهتمام على الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![اختيار نقاط اهتمام متعددة](@site/static/img/map/multiple_selection_android.png) ![بحث وعرض نقاط اهتمام أندرويد](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![اختيار نقاط اهتمام متعددة](@site/static/img/settings/multiple_selection_iOS.png) ![بحث وعرض نقاط اهتمام iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../search/search-poi.md) حول البحث عن نقاط الاهتمام.


### كيفية تخطيط مسار {#how-to-plan-a-route}

[تخطيط المسار](../plan-route/create-route.md) هو أداة قوية تتيح لك إنشاء رحلة، وتعديل مسار موجود، وقياس المسافة على الفور. يمكنك وضع نقاط وسيطة بسرعة وربطها بخطوط ملاحة مختلفة (دراجة، مشاة، خط مستقيم، إلخ). يمكن حفظ النتائج في ملف GPX، بحيث يمكن [مشاركتها](../personal/tracks/index.md) أو [استخدامها للملاحة](../navigation/setup/gpx-navigation.md) لاحقًا.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط المسار أندرويد](@site/static/img/settings/plan_route_android.png) ![رسم بياني لتخطيط المسار أندرويد](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط المسار iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../plan-route/create-route.md) حول ميزة تخطيط المسار.


### كيفية البحث عن طريق العنوان {#how-to-search-by-address}

يوفر OsmAnd العديد من إمكانيات البحث، بما في ذلك البحث عن العنوان. افتراضيًا، يستخدم [بيانات OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) ويجب أن يكون قادرًا على العثور على جميع العناوين باستخدام إدخال البحث السريع. كما يمكنك [البحث](../search/search-address.md) عن طريق المدينة، الشارع، الرمز البريدي، والإحداثيات.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث العنوان أندرويد](@site/static/img/settings/address_search_android.png) ![نتيجة البحث أندرويد](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث العنوان iOS](@site/static/img/settings/address_search_ios.png) ![نتيجة البحث iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
تحتاج إلى تنزيل الخريطة قبل البحث عن عنوان هناك. أيضًا، إذا كان موقعك الحالي بعيدًا جدًا عن العنوان الذي تبحث عنه، فقد تحتاج إلى زيادة نصف قطر البحث.
:::

[اقرأ المزيد](../search/search-address.md) حول البحث عن العنوان.


### كيفية بدء الملاحة {#how-to-start-navigation}

توفر لك [الملاحة](../navigation/index.md) إرشادات خطوة بخطوة إلى وجهتك عن طريق عرض المسار، وتقديم تعليمات منعطف بمنعطف، ومعلومات إضافية عن الطريق حول السطح، والنعومة، وما إلى ذلك، وإرشادات صوتية اختيارية.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بدء الملاحة أندرويد](@site/static/img/settings/start_navigation_android.png) ![رسم بياني للمسار أندرويد](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بدء الملاحة iOS](@site/static/img/settings/start_navigation_ios.png) ![رسم بياني للمسار iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../navigation/index.md) حول الملاحة.


### كيفية تسجيل رحلتك {#how-to-record-your-trip}

[تسجيل الرحلة](../plugins/trip-recording.md) هو أداة خاصة مدمجة كملحق OsmAnd تتيح لك تسجيل جميع الحركات على المسار باستخدام نظام تحديد المواقع العالمي (GPS) الخاص بالجهاز.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تسجيل الرحلة أندرويد](@site/static/img/settings/trip_recording_android.png) ![نظرة عامة على تسجيل الرحلة أندرويد](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بدء تسجيل الرحلة iOS](@site/static/img/settings/trip_recording_start_ios.png) ![قائمة تسجيل الرحلة iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../plugins/trip-recording.md) حول تسجيل الرحلة.


### كيفية تحرير الخرائط {#how-to-edit-maps}

يتم تشغيل OsmAnd بواسطة بيانات [OpenStreetMap](https://www.openstreetmap.org/). يتم إنشاء الخرائط بواسطة مساهمين متطوعين، لذلك يمكن أن تحتوي على تفاصيل أكثر أو أقل اعتمادًا على مقدار العمل الذي تم إنجازه في جزء معين من الخريطة. يمكن لأي شخص التسجيل كمساهم وإضافة أو تحرير خرائط OSM. يوفر OsmAnd مكونًا إضافيًا للتحرير يساعد على تحسين OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ملاحظة OSM أندرويد](@site/static/img/settings/osm_note_android.png) ![إنشاء نقطة اهتمام أندرويد](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ملاحظة OSM iOS](@site/static/img/settings/osm_note_ios.png) ![إنشاء نقطة اهتمام iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[اقرأ المزيد](../plugins/osm-editing.md) حول تحرير OSM.


### كيفية إغلاق التطبيق {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

هناك طريقتان متاحتان لإغلاق OsmAnd.

1. أغلق التطبيق عن طريق التمرير لأعلى وخارج الشاشة. لقائمة عمودية من التطبيقات، اسحب لليسار أو لليمين.

2. قد تحتاج إلى تنفيذ الخطوات التالية قبل القيام بذلك، وإلا سيستمر OsmAnd في العمل في الخلفية:
    - [إلغاء الملاحة](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [إيقاف تنزيل الخرائط وتحديثها](../start-with/download-maps.md)
    - [إيقاف تسجيل الرحلة](../plugins/trip-recording.md#create-new-track)
    - [إيقاف تسجيل الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md)

3. وظيفة *إيقاف إجباري*:
    - اضغط مطولاً على *أيقونة OsmAnd ← زر **i** ← إيقاف إجباري*.
    - افتح الإعدادات واضغط على *التطبيقات والإشعارات ← OsmAnd ← إيقاف إجباري*.

</TabItem>

<TabItem value="ios" label="iOS">

أغلق التطبيق عن طريق التمرير لأعلى وخارج الشاشة. لقائمة عمودية من التطبيقات، اسحب لليسار أو لليمين.

قد تحتاج إلى تنفيذ الخطوات التالية قبل القيام بذلك، وإلا سيستمر OsmAnd في العمل في الخلفية:

- [إلغاء الملاحة](../navigation/setup/route-navigation.md)
- [إيقاف تنزيل الخرائط وتحديثها](../start-with/download-maps.md)
- [إيقاف تسجيل الرحلة](../plugins/trip-recording.md#create-new-track)
- [إيقاف تسجيل الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## اختصارات التطبيق {#app-shortcuts}

<InfoAndroidOnly/>

[اختصارات التطبيق](https://support.google.com/android/answer/9450271) متاحة لأيقونة OsmAnd. ما عليك سوى الضغط مطولاً على أيقونة OsmAnd على شاشة جهازك لفتح قائمة اختصارات التطبيق. هنا، يمكنك الضغط لفترة قصيرة لتحديد الإجراءات التالية: *التنقل إلى المنزل*، *التنقل إلى العمل*، *بدء التسجيل*، *البحث*، *أماكني*، *التنقل إلى*. الضغط مطولاً على إجراء يسمح لك بإضافة أيقونة إجراء جديدة إلى شاشة جهازك.

انقر على أيقونة الإجراء لبدء التطبيق فورًا بالإجراء المحدد.

![الاختصارات](@site/static/img/steps/shortcuts_3_andr.png) ![الاختصارات](@site/static/img/steps/shortcuts_4_andr.png)


## المساعدة دون اتصال {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

في *قائمة المساعدة*، يمكنك العثور على مقالات من موقعنا [www.osmand.net/docs](https://osmand.net/docs/intro/). بعد التنزيل الأولي (يتطلب اتصال بالإنترنت)، تتوفر مقالات المساعدة دون اتصال.
يحتوي القسم الفرعي الأول، *المساعدة دون اتصال*، على **الأكثر مشاهدة** (أو المقالات الشائعة) بين مستخدمينا. تحتوي أقسام **دليل المستخدم** و **استكشاف الأخطاء وإصلاحها** على نفس الهيكل الموجود على الموقع الإلكتروني.
في *قائمة المساعدة*، يمكنك أيضًا العثور على روابط مفيدة لشبكات OsmAnd الاجتماعية، ومعلومات الإصدار حول تطبيقك، وملاحظات الإصدار، وجهات اتصال الدعم. من خلال المساعدة، يمكنك أيضًا إرسال [سجلات الأعطال و logcat](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### القائمة {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **إرسال سجل الأعطال** (*لأندرويد*). يسمح للمستخدمين بإرسال تقارير عن أعطال التطبيق إلى المطورين، مما يساعد في تحديد المشكلات وحلها.
- **إرسال سجل logcat** (*لأندرويد*). يوفر للمستخدمين القدرة على إرسال سجلات مفصلة لأعطال التطبيق إلى المطورين، مما يسهل التحليل العميق واستكشاف الأخطاء وإصلاحها.
- **إرسال سجل** (*لـ iOS*). يؤدي وظيفة مماثلة لميزة *إرسال سجل الأعطال* لنظام أندرويد، مما يمكن المستخدمين على أجهزة iOS من الإبلاغ عن أعطال التطبيق للمطورين لأغراض تصحيح الأخطاء.
- **نسخ إصدار البناء**. يمكّن المستخدمين من توصيل الإصدار الحالي للتطبيق بسرعة ودقة إلى المطورين عند الإبلاغ عن المشكلات، مما يبسط عملية التشخيص والحل.


### الأكثر مشاهدة {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

تشير المقالات الأكثر مشاهدة بين مستخدمينا إلى المقالات الموجودة في التطبيق أو على الموقع التي حظيت بأكبر عدد من المشاهدات أو تفاعلات المستخدمين. يساعد هذا المقياس في تحديد المحتوى الذي يثير اهتمام المستخدمين أو يفيدهم بشكل خاص. يمكن أن يوفر رؤى قيمة حول تفضيلات المستخدمين واهتماماتهم، مما يسمح للمطورين ومنشئي المحتوى بتخصيص المحتوى المستقبلي لتلبية احتياجات الجمهور بشكل أفضل. بالإضافة إلى ذلك، يمكن أن يساعد تسليط الضوء على المقالات الشائعة المستخدمين الجدد في العثور على موارد قيمة داخل التطبيق.


### دليل المستخدم {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

قسم **دليل المستخدم** في قائمة المساعدة هو دليل كامل يتبع هيكل موقع OsmAnd الإلكتروني، مما يضمن اتساق المعلومات وسهولة التنقل عبر المنصات. باستخدام المساعدة، يمكنك التنقل بسهولة من التطبيق إلى الموقع الإلكتروني، والعثور على نفس المحتوى المنظم بشكل مألوف. يعزز هذا الاتساق قابلية الاستخدام من خلال توفير مورد دعم واحد للعثور على إجابات للأسئلة واستكشاف المشكلات وإصلاحها بسرعة.


### استكشاف الأخطاء وإصلاحها {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

حلول ونصائح لحل المشاكل الشائعة. إذا كان لديك سؤال محدد، يرجى مراجعة [استكشاف الأخطاء وإصلاحها](../troubleshooting/index.md) للحصول على إجابته.

- [الإعداد](../troubleshooting/setup.md). عند إعداد تطبيق، هذه هي المشكلات التي تنشأ غالبًا.
- [الخرائط والبيانات](../troubleshooting/maps-data.md). المشكلات المتعلقة بالخرائط والبحث وبقية البيانات.
- [الملاحة](../troubleshooting/navigation.md). المشكلات الأكثر شيوعًا التي تحدث في وضع الملاحة.
- [تسجيل المسار](../troubleshooting/track-recording-issues.md). المشكلات الشائعة المتعلقة بتسجيل المسار مثل الضوضاء والفجوات وعدم الدقة.
- [عام](../troubleshooting/general.md). المشكلات الشائعة المرتبطة بميزات OsmAnd المختلفة.
- [سجلات الأعطال](../troubleshooting/crash-logs.md). كيفية إرسال سجلات الأعطال إلى فريق OsmAnd.
- [أندرويد أوتو](../troubleshooting/android_auto.md) (*لأندرويد فقط*). مشاكل الملاحة التلقائية.

### اتصل بنا {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

يسمح لك بطرح الأسئلة أو تقديم الاقتراحات.

### الإبلاغ عن المشكلات {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **فتح مشكلة على GitHub**. [إصدار أندرويد GitHub](https://github.com/osmandapp/OsmAnd-Issues/issues)، [إصدار iOS GitHub](https://github.com/osmandapp/OsmAnd-iOS/issues): اطرح الأسئلة، اكتب عن الأخطاء واقترح الميزات.
- **إرسال سجل الأعطال** (*لأندرويد*). يحتوي فقط على معلومات حول الأعطال.
- [إرسال سجل logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*أندرويد*) / [إرسال سجل](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). ملف سجل مفصل.

### حول OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لقطة شاشة المساعدة دون اتصال أندرويد](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

يمكنك التعرف على فريقنا، والاطلاع على الإصدار الحالي من التطبيق وما هو الجديد، وتنزيل الإصدار التجريبي من التطبيق.


## الخصوصية {#privacy}

إنه تطبيق [مفتوح المصدر](https://github.com/osmandapp/osmand)، خالٍ من الإعلانات/المتتبعات، ويركز على الخصوصية. للحفاظ على أقصى قدر من الخصوصية، يقدم OsmAnd خرائط دون اتصال بالإنترنت كخيار أول، بحيث لا يتم تسريب أي تفاعل أو معلومات جغرافية من جهازك. نحن نولي اهتمامًا كبيرًا للبيانات التي يتم جمعها والبيانات التي يتم نقلها عبر الشبكة، يمكنك قراءة المزيد في [سياسة الخصوصية](https://osmand.net/help-online/privacy-policy) الخاصة بنا.


## الأذونات {#permissions}

لا يتطلب OsmAnd أي أذونات على إصدار iOS / Android.

**أساسي**:

- **الإنترنت**. التنزيل/التحديث الأولي للخرائط دون اتصال. كما قد يكون مطلوبًا للوصول إلى الميزات عبر الإنترنت مثل [صور مستوى الشارع](../map/point-layers-on-map.md#-street-level-imagery)، [الصور عبر الإنترنت](../map/map-context-menu.md#online-photos) أو [الخرائط عبر الإنترنت](../map/raster-maps.md).
- **نظام تحديد المواقع العالمي (GPS) / شبكة GSM**. تحديد موقعك، متابعتك في وضع الملاحة، وتسجيل رحلتك (اختياري). يُطلب هذا الإذن عند النقر على [زر موقعي](../widgets/map-buttons.md#my-location-and-zoom) أو عند [بدء الملاحة](../navigation/setup/route-navigation.md#start--stop-navigation).

**اختياري**:

- **تسجيل الكاميرا/الصوت** (*أندرويد*). يستخدم فقط بواسطة [ملاحظات الصوت/الفيديو](../plugins/audio-video-notes.md). هذه الميزة مدمجة كملحق ومعطلة افتراضيًا. تسمح لك بإنشاء ملاحظات صوتية/فيديو مرتبطة بالموقع بسرعة أثناء الرحلة.


> *آخر تحديث: يناير 2025*