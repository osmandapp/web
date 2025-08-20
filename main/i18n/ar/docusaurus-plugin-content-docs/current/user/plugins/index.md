---
source-hash: 7e75b5e052216e2fd2c8684ffc936212758b2d1c0efb985a5c0f8ef838440750
sidebar_position: 18
title:  البرامج الملحقة
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

تُوسِّع البرامج الملحقة وظائف OsmAnd بشكل كبير. صُمِّم كل منها لمعالجة مهمة أو حالة استخدام محددة، مثل تسجيل رحلة، أو الوصول إلى مقالات ويكيبيديا دون اتصال بالإنترنت، أو تصور بيانات التضاريس، أو توفير عرض على مستوى الشارع.

يمكن أن تكون البرامج الملحقة داخلية، تُنشَّط في تطبيق OsmAnd، أو خارجية، وهي برامج تُثبَّت بشكل منفصل. تعمل البرامج الملحقة التابعة لجهات خارجية من خلال واجهة برمجة تطبيقات OsmAnd ويمكنها الوصول إلى بيانات OsmAnd.


## تهيئة البرنامج الملحق {#configure-plugin}

للوصول إلى وظائف البرنامج الملحق، يجب أولاً [تمكينه](#enable--disable)، وتتطلب بعض البرامج الملحقة [شراءً](#purchase) قبل الاستخدام. ثم، في بعض الحالات، يجب تنشيط طبقة خريطة محددة، أو يجب [تهيئة](#plugin-settings) ملف تعريف المستخدم.


### تمكين / تعطيل {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> ← &#65049; ← تمكين*

![تمكين البرامج الملحقة أندرويد](@site/static/img/settings/plugins_enable_android.png) ![مثال على برنامج ملحق أندرويد](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> ← &#10003;*

![تمكين البرامج الملحقة iOS](@site/static/img/settings/plugins_enable_ios.png) ![مثال على برنامج ملحق iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### شراء {#purchase}

تتوفر معظم البرامج الملحقة مجانًا، فقط البرامج الملحقة في القائمة أدناه تتطلب شراء ترخيص [OsmAnd+ أو OsmAnd Pro](../purchases/index.md) لاستخدامها:

- [الطبغرافيا](../plugins/topography.md)
- [إغاثة ثلاثية الأبعاد](../plugins/topography.md#3d-relief) (ميزة برنامج الطبغرافيا الملحق)
- [ويكيبيديا](../plugins/wikipedia.md)
- [عرض الخريطة البحرية](../plugins/nautical-charts.md)
- [الطقس](../plugins/weather.md)

يمكن العثور على معلومات مفصلة حول شراء التطبيق في قسم [الشراء](../purchases/).

### ميزات البرنامج الملحق {#plugin-features}

قد تُعزِّز برامج OsmAnd الملحقة مجموعات الميزات هذه: **الطبقات**، **الأدوات**، **إجراءات قائمة السياق**، **إجراءات الدرج**، **نمط الخريطة**، **مصدر الخريطة**، **الملف الشخصي**.

🤖 - *فقط لإصدار أندرويد من OsmAnd.*

| اسم البرنامج الملحق | الميزات |
|:------------|:-------|
| [ويكيبيديا](#wikipedia) | [طبقة الخريطة](../plugins/wikipedia.md#download-wikipedia-packages)، [قائمة السياق](../plugins/wikipedia.md#wikipedia-languages) |
| [الخرائط عبر الإنترنت](#online-maps) | [طبقة الخريطة](../plugins/online-map.md#configure-map-source) |
| [تسجيل الرحلة](#trip-recording) | [أداة](../plugins/trip-recording.md#widgets)، [ملف شخصي](../plugins/trip-recording.md#profile-settings) |
| [الطبغرافيا](#topography) | [طبقة الخريطة](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [إغاثة ثلاثية الأبعاد](#topography) 🤖 | [طبقة الخريطة](../plugins/topography.md#3d-relief) |
| [الطقس](../plugins/weather.md) | [طبقة الخريطة](../plugins/weather.md#display-weather-on-the-map)، [أداة](../plugins/weather#weather-widgets)، [شاشة](../plugins/weather.md#configure-screen) |
| [عرض الخريطة البحرية](#nautical-map-view) | [نمط الخريطة](../plugins/nautical-charts.md#nautical-map-style)، [ملف شخصي](../plugins/nautical-charts.md#nautical-options) |
| [عرض خريطة التزلج](#ski-map-view) | [نمط الخريطة](../plugins/ski-maps.md#set-winter-style)، [ملف شخصي](../plugins/ski-maps.md#skiing-profile) |
|[ملاحظات صوتية/فيديو](#audiovideo-notes) 🤖 | [طبقة الخريطة](../plugins/audio-video-notes.md#show-all-on-the-map)، [قائمة السياق](../plugins/audio-video-notes.md#create)، [أداة](../plugins/audio-video-notes.md#recording-widget) |
|[تحرير OpenStreetMap](#openstreetmap-editing)| [طبقة الخريطة](../plugins/osm-editing.md#how-to-use) |
|[موقف السيارة](#parking-position) | [قائمة السياق](../plugins/parking.md#set-a-point)، [أداة](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [طبقة الخريطة](../plugins/mapillary.md#map-layer)، [قائمة السياق](../plugins/mapillary.md#map-context-menu)، [أداة](../plugins/mapillary.md#mapillary-widget)|
|[مستشعرات خارجية](#external-sensors) 🤖 | [أداة](../plugins/external-sensors.md#widgets) |
|[إمكانية الوصول](#accessibility) 🤖 | [إعدادات مخصصة](../plugins/accessibility.md#plugin-settings) |
| [تطوير OsmAnd](#osmand-development) | [إعدادات مخصصة](../plugins/development.md#plugin-settings) |
| [متتبع OsmAnd](#osmand-tracker) 🤖 | [طبقة الخريطة](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map)، [أداة](../plugins/osmand-tracker.md#osmand-tracker-widget)، [قائمة السياق](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
| [متتبع السفن AIS](#ais-vessel-tracker) 🤖 | [إعدادات مخصصة](../plugins/ais-tracker.md#plugin-settings) |


### إعدادات البرنامج الملحق {#plugin-settings}

:::caution ملاحظة
يغير برنامج تطوير OsmAnd الملحق وبرنامج تحرير OSM الملحق الإعدادات لجميع الملفات الشخصية. تُهيأ البرامج الملحقة المتبقية لكل ملف شخصي على حدة.
:::

توفر معظم البرامج الملحقة إعدادات ملف تعريف محددة أو إعدادات عامة، يمكن الوصول إليها عبر:

- *القائمة الرئيسية ← البرامج الملحقة ← اسم البرنامج الملحق ← الإعدادات (&#x2699 لـ iOS)* أو
- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← [إعدادات البرنامج الملحق](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات البرنامج الملحق أندرويد 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![إعدادات البرنامج الملحق أندرويد 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات البرنامج الملحق iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![إعدادات البرنامج الملحق iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

توفر البرامج الملحقة التالية إعداداتها الخاصة:

🤖 - *فقط لإصدار أندرويد من OsmAnd.*

| اسم البرنامج الملحق | الإعدادات |
|:------------|:-------|
| [تسجيل الرحلة](#trip-recording) | تهيئة [أوضاع تشغيل](../plugins/trip-recording.md#recording-parameters) تسجيل الرحلة |
| [الطقس](#weather) | تهيئة وحدات القياس لعرض أحداث الطقس |
|[ملاحظات صوتية/فيديو](#audiovideo-notes) 🤖 | تحديد [تنسيق الفيديو، مدة التخزين، إلخ.](../plugins/audio-video-notes.md#plugin-settings) |
|[تحرير OpenStreetMap](#openstreetmap-editing)| تحديد [تسجيل دخول](../plugins/osm-editing.md#plugin-settings) المستخدم |
| [مستشعرات خارجية](#external-sensors) 🤖 | الاتصال بجهاز خارجي [الإعدادات](../plugins/external-sensors.md#settings) |
| [إمكانية الوصول](#accessibility) 🤖 | [الإعدادات](../plugins/accessibility.md#plugin-settings) تسمح لك باستخدام [ميزات إمكانية الوصول في أندرويد](https://www.android.com/accessibility/) داخل OsmAnd. |
| [تطوير OsmAnd](#osmand-development) | [إعدادات البرنامج الملحق](../plugins/development.md#plugin-settings) تسمح لك بتمكين ميزات خاصة للمطورين أو المستخدمين ذوي الخبرة |
| [متتبع OsmAnd](#osmand-tracker) 🤖 | جميع الإعدادات قابلة للتهيئة في تطبيق منفصل |
| [متتبع السفن AIS](#ais-vessel-tracker) | [إعدادات البرنامج الملحق](../plugins/ais-tracker.md#plugin-settings) تسمح لك بتمكين إعدادات خاصة |

### إجراءات البرنامج الملحق {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *باستخدام هذا الخيار يمكن إعادة تعيين إعدادات البرنامج الملحق إلى القيم الافتراضية*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *يمكن نسخ إعدادات البرنامج الملحق من ملف تعريف آخر*.


## قائمة البرامج الملحقة {#plugins-list}


### [ويكيبيديا](./wikipedia.md) {#wikipedia}

يساعدك وجود ويكيبيديا في رحلتك على معرفة المزيد عن الأماكن التي تزورها. وهي متاحة دون اتصال بالإنترنت وتُظهر مقالات ويكيبيديا المتعلقة بنقاط الاهتمام مباشرة على الخريطة.

### [الخرائط عبر الإنترنت](./online-map.md) {#online-maps}

تُعد خرائط OsmAnd عبر الإنترنت إضافة واسعة النطاق إلى قاعدة بيانات OpenStreetMap الموجودة بالفعل في التطبيق. باستخدام هذا البرنامج الملحق، يمكنك إضافة طبقات إلى خريطتك بمعلومات من مصادر مختلفة.

### [تسجيل الرحلة](./trip-recording.md) {#trip-recording}

لسرد قصة الأماكن التي زرتها، يمكن تسجيل بيانات GPS، مثل خطوط الطول والعرض لموقعك، وتخزينها في ملف، ثم إعادة استخدامها، وتحسينها، وتعزيزها بنقاط طريق، وتوفيرها للملاحة، ومشاركتها مع الأصدقاء، وما إلى ذلك.

### [الطبغرافيا](./topography.md) {#topography}

تساعد معلومات الطبغرافيا، مثل خطوط الكنتور، والتظليل التلي، والمنحدر، والإغاثة ثلاثية الأبعاد، في إجراء تقييم بصري لتضاريس الأرض من خلال رؤية الارتفاع، والإغاثة، والتطرفات، والانحدار، ونقاط الارتفاع المتساوية، وما إلى ذلك.

### [عرض الخريطة البحرية](./nautical-charts.md) {#nautical-map-view}

يوفر عرض الخريطة البحرية تمثيلاً رسوميًا مفصلاً للمحيطات والبحار والمناطق الساحلية والأنهار لمساعدتك في التنقل على الماء، ورؤية طرق المرور الشائعة، والعوائق في الممر المائي، والموانئ، ومناطق الرسو، وغيرها من المراجع الأساسية.

### [عرض خريطة التزلج](./ski-maps.md) {#ski-map-view}

يُظهر عرض خريطة التزلج ألوان الشتاء ومسارات التزلج نزولاً أو عبر البلاد، بالإضافة إلى التلفريك، ومصاعد الكراسي، والمرافق والخدمات القريبة، وهو مفيد للتنقل في الوجهات مثل مناطق الترفيه، ومنتجعات التزلج، ومتنزهات التضاريس.

### [ملاحظات صوتية/فيديو](./audio-video-notes.md) {#audiovideo-notes}

أنشئ ملاحظات صوتية/فيديو للرجوع إليها مستقبلاً، على سبيل المثال لتذكر حدث أو مشهد أو تفاعل. تتوفر الملاحظات الصوتية/الفيديو التي تم إنشاؤها من *أماكني* وكذلك على الخريطة كطبقة فردية من القصص والأفكار التي صنعها المستخدمون والمرتبطة بموقع جغرافي. لأندرويد فقط.

### [موقف السيارة](./parking.md) {#parking-position}

عيّن نقطة على الخريطة حيث تُترك سيارتك في الشارع وأبلغ تقويمك عند انتهاء وقت وقوف السيارة. سيجعل هذا من السهل عليك تتبع وقت وموقع سيارتك.

### [تحرير OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

يسمح لك برنامج تحرير OpenStreetMap الملحق بالمساهمة في OpenStreetMap، وهو مجتمع عالمي ينشئ خريطة شاملة للعالم ويوفر بيانات مفتوحة المصدر ومحدثة ومتاحة للجمهور.

### [Mapillary](./mapillary.md) {#mapillary}

شاهد مناظر على مستوى الشارع لطرقك أو أماكن اهتمامك، مقدمة من [Mapillary](https://www.mapillary.com/) (يتطلب اتصالاً بالإنترنت).

### [إمكانية الوصول](./accessibility.md) {#accessibility}

يجعل برنامج إمكانية الوصول الملحق ميزات إمكانية الوصول بالجهاز متاحة مباشرة في OsmAnd. لأندرويد فقط.

### [مستشعرات خارجية](./external-sensors.md) {#external-sensors}

وصل المستشعرات الخارجية لعرض بياناتها في OsmAnd وتخزين المعلومات في تسجيلات المسار.

### [مقاييس المركبة](./vehicle-metrics.md) {#vehicle-metrics}

وصل ماسح OBD-II لعرض بيانات المركبة في OsmAnd وتخزين المعلومات في تسجيلات المسار.

### [الطقس](./weather.md) {#weather}

يُظهر التنبؤ بالساعة لليوم الحالي وللأيام السبعة القادمة.

### [تطوير OsmAnd](./development.md) {#osmand-development}

يستهدف برنامج تطوير OsmAnd الملحق المطورين والمستخدمين ذوي الخبرة. يسمح لك بمحاكاة مسارات التنقل، والتحقق من أداء عرض الشاشة، وما إلى ذلك.

### [متتبع OsmAnd](./osmand-tracker.md) {#osmand-tracker}

يساعدك متتبع OsmAnd على رؤية مكان جهات اتصالك على الخريطة في OsmAnd. لأندرويد فقط.

### [متتبع السفن AIS](./ais-tracker.md) {#ais-vessel-tracker}

يعرض مواقع AIS ومعلومات عن السفن المحيطة. تُستقبل بيانات AIS عبر الشبكة من مستقبل AIS خارجي.

## [إنشاء برنامج ملحق مخصص](./custom.md) {#create-a-custom-plugin}

يمكنك إنشاء برنامجك الملحق الخاص باتباع مقالة *الحزمة المخصصة*.


_______

> *آخر تحديث: مارس 2025*