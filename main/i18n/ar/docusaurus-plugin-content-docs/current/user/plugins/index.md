---
source-hash: be742f68ef2cf4f1c1882c64eeb0f7f01eae8cee4fda985a0ff5a22115f9f3cf
sidebar_position: 18
title:  الإضافات
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

توسع الإضافات من وظائف OsmAnd بشكل كبير. كل إضافة مصممة لمعالجة مهمة محددة أو حالة استخدام، مثل تسجيل رحلة، أو الوصول إلى مقالات ويكيبيديا دون اتصال بالإنترنت، أو تصور بيانات التضاريس، أو توفير عرض على مستوى الشارع.

يمكن أن تكون الإضافات داخلية، يتم تفعيلها في تطبيق OsmAnd، أو خارجية، وهي برامج يتم تثبيتها بشكل منفصل. تعمل إضافات الطرف الثالث من خلال واجهة برمجة تطبيقات OsmAnd (API) ويمكنها الوصول إلى بيانات OsmAnd.


## تهيئة الإضافة {#configure-plugin}

للوصول إلى وظائف الإضافة، يجب أولاً [تفعيلها](#enable--disable)، وتتطلب بعض الإضافات [شراءً](#purchase) قبل الاستخدام. بعد ذلك، في بعض الحالات، يجب تفعيل طبقة خريطة معينة، أو يجب [تهيئة](#plugin-settings) ملف تعريف المستخدم.


### تفعيل / تعطيل {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> ← &#65049; ← تفعيل*

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> ← &#10003;*

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### الشراء {#purchase}

معظم الإضافات متاحة مجانًا، فقط الإضافات الموجودة في القائمة أدناه تتطلب شراء ترخيص [OsmAnd+ أو OsmAnd Pro](../purchases/index.md) لاستخدامها:

- [التضاريس](../plugins/topography.md)
- [التضاريس ثلاثية الأبعاد](../plugins/topography.md#3d-relief) (ميزة في إضافة التضاريس)
- [ويكيبيديا](../plugins/wikipedia.md)
- [عرض الخرائط البحرية](../plugins/nautical-charts.md)
- [الطقس](../plugins/weather.md)

يمكن العثور على معلومات مفصلة حول شراء التطبيق في قسم [الشراء](../purchases/).

### ميزات الإضافة {#plugin-features}

قد تزيد إضافات OsmAnd من مجموعات الميزات هذه: **الطبقات**، **الأدوات المصغرة (Widgets)**، **إجراءات قائمة السياق**، **إجراءات القائمة الجانبية**، **نمط الخريطة**، **مصدر الخريطة**، **الملف الشخصي**.

🤖 *- فقط لإصدار أندرويد من OsmAnd.*

| اسم الإضافة |الميزات |
|:------------|:-------|
| [ويكيبيديا](#wikipedia) | [طبقة الخريطة](../plugins/wikipedia.md#download-wikipedia-packages)، [قائمة السياق](../plugins/wikipedia.md#wikipedia-settings) |
| [الخرائط عبر الإنترنت](#online-maps) |[طبقة الخريطة](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [تسجيل الرحلة](#trip-recording) | [أداة مصغرة (Widget)](../plugins/trip-recording.md#widgets)، [الملف الشخصي](../plugins/trip-recording.md#recording-settings) |
| [التضاريس](#topography) | [طبقة الخريطة](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [التضاريس ثلاثية الأبعاد](#topography) 🤖  | [طبقة الخريطة](../plugins/topography.md#3d-relief) |
| [الطقس](../plugins/weather.md) | [طبقة الخريطة](../plugins/weather.md#display-weather-on-the-map)، [أداة مصغرة (Widget)](../plugins/weather#weather-widgets)، [شاشة](../plugins/weather.md#weather-forecast-screen) |
| [عرض الخرائط البحرية](#nautical-map-view) | [نمط الخريطة](../plugins/nautical-charts.md#nautical-map-style)، [الملف الشخصي](../plugins/nautical-charts.md#nautical-profile)  |
| [عرض خرائط التزلج](#ski-map-view) | [نمط الخريطة](../plugins/ski-maps.md#set-winter-and-ski-map-style)، [الملف الشخصي](../plugins/ski-maps.md#skiing-profile) |
|[الملاحظات الصوتية/المرئية](#audiovideo-notes) 🤖  | [طبقة الخريطة](../plugins/audio-video-notes.md#show-all-on-the-map)، [قائمة السياق](../plugins/audio-video-notes.md#create-a-single-note)، [أداة مصغرة (Widget)](../plugins/audio-video-notes.md#recording-widget) |
|[موقف السيارة](#parking-position) | [قائمة السياق](../plugins/parking.md#set-a-spot)، [أداة مصغرة (Widget)](../plugins/parking.md#parking-widget) |
|[تعديل OpenStreetMap](#openstreetmap-editing)| [طبقة الخريطة](../plugins/osm-editing.md#authorization) |
|[Mapillary](#mapillary) | [طبقة الخريطة](../plugins/mapillary.md#map-layer)، [قائمة السياق](../plugins/mapillary.md#map-context-menu) ، [أداة مصغرة (Widget)](../plugins/mapillary.md#mapillary-widget)|
|[المستشعرات الخارجية](#external-sensors) 🤖  | [أداة مصغرة (Widget)](../plugins/external-sensors.md#widgets) |
|[مقاييس المركبة](#vehicle-metrics)  | [إعدادات مخصصة](../plugins/vehicle-metrics#scanner-settings)، [أداة مصغرة (Widget)](../plugins/vehicle-metrics#widgets) |
|[الفلك](#astronomy)  | [شاشة](../plugins/astronomy.md#star-map-screen)، [قائمة السياق](../plugins/astronomy.md#celestial-object-info) |
|[إمكانية الوصول](#accessibility) 🤖  | [إعدادات مخصصة](../plugins/accessibility.md#plugin-settings) |
|[تطوير OsmAnd](#osmand-development) | [إعدادات مخصصة](../plugins/development.md#plugin-settings) |
|[متتبع OsmAnd](#osmand-tracker) 🤖  | [طبقة الخريطة](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map)، [أداة مصغرة (Widget)](../plugins/osmand-tracker.md#tracker-widget)، [قائمة السياق](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
|[متتبع سفن AIS](#ais-vessel-tracker) 🤖  |  [إعدادات مخصصة](../plugins/ais-tracker.md#plugin-settings) |


### إعدادات الإضافة {#plugin-settings}

:::caution ملاحظة
فقط إضافة تطوير OsmAnd وإضافة تعديل OSM تغير الإعدادات لجميع الملفات الشخصية. يتم تكوين الإضافات المتبقية لكل ملف شخصي على حدة.
:::

توفر معظم الإضافات إعدادات ملف شخصي محددة أو إعدادات عامة، والتي يمكن الوصول إليها عبر:

- *القائمة الرئيسية ← الإضافات ← اسم الإضافة ← الإعدادات (&#x2699 لـ iOS)* أو
- *القائمة الرئيسية ← الإعدادات ← الملف الشخصي ← [إعدادات الإضافة](../personal/profiles.md#plugin-settings)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Settings plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Settings plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Settings plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Settings plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

توفر الإضافات التالية إعداداتها الخاصة:

🤖 *- فقط لإصدار أندرويد من OsmAnd.*

| اسم الإضافة | الإعدادات |
|:------------|:-------|
| [تسجيل الرحلة](#trip-recording) | تهيئة [أوضاع التشغيل](../plugins/trip-recording.md#required-setup-parameters) تسجيل الرحلة |
| [الطقس](#weather) | تهيئة وحدات القياس لعرض أحداث الطقس |
|[الملاحظات الصوتية/المرئية](#audiovideo-notes) 🤖  | حدد [تنسيق الفيديو، ومدة التخزين، إلخ.](../plugins/audio-video-notes.md#plugin-settings) |
|[تعديل OpenStreetMap](#openstreetmap-editing)| حدد [تسجيل دخول](../plugins/osm-editing.md#settings) المستخدم |
|  [المستشعرات الخارجية](#external-sensors) 🤖  | اتصل بالجهاز الخارجي [الإعدادات](../plugins/external-sensors.md#required-setup-parameters) |
|  [إمكانية الوصول](#accessibility) 🤖  | تسمح لك [الإعدادات](../plugins/accessibility.md#plugin-settings) باستخدام [ميزات إمكانية الوصول في أندرويد](https://www.android.com/accessibility/) داخل OsmAnd. |
| [تطوير OsmAnd](#osmand-development) | تسمح لك [إعدادات الإضافة](../plugins/development.md#plugin-settings) بتمكين ميزات خاصة للمطورين أو المستخدمين الخبراء |
|  [متتبع OsmAnd](#osmand-tracker) 🤖  | جميع الإعدادات قابلة للتكوين في تطبيق منفصل |
| [متتبع سفن AIS](#ais-vessel-tracker) | تسمح لك [إعدادات الإضافة](../plugins/ais-tracker.md#plugin-settings) بتمكين إعدادات خاصة |

### إجراءات الإضافة {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *باستخدام هذا الخيار يمكن إعادة تعيين إعدادات الإضافة إلى القيم الافتراضية*.
**<Translate android="true" ids="copy_from_other_profile"/>** - *يمكن نسخ إعدادات الإضافة من ملف شخصي آخر*.


## قائمة الإضافات {#plugins-list}

### [ويكيبيديا](./wikipedia.md) {#wikipedia}

يساعدك وجود ويكيبيديا في رحلتك على معرفة المزيد عن الأماكن التي تزورها. وهي متاحة دون اتصال بالإنترنت وتعرض مقالات ويكيبيديا المتعلقة بالنقاط المهمة مباشرة على الخريطة.

### [الخرائط عبر الإنترنت](./online-map.md) {#online-maps}

تعد خرائط OsmAnd عبر الإنترنت إضافة واسعة لقاعدة بيانات OpenStreetMap الموجودة بالفعل في التطبيق. باستخدام هذه الإضافة، يمكنك إضافة طبقات إلى خريطتك بمعلومات من مصادر مختلفة.

### [تسجيل الرحلة](./trip-recording.md) {#trip-recording}

لتحكي قصة الأماكن التي زرتها، يمكن تسجيل بيانات GPS، مثل خطوط الطول والعرض لموقعك، وتخزينها في ملف، ثم إعادة استخدامها، وتحسينها، وتعزيزها بنقاط الطريق، وتوفيرها للملاحة، ومشاركتها مع الأصدقاء، وما إلى ذلك.

### [التضاريس](./topography.md) {#topography}

تساعد معلومات التضاريس، مثل خطوط الكنتور، وتظليل التلال، والانحدار، والتضاريس ثلاثية الأبعاد، على إجراء تقييم مرئي لتضاريس الأرض من خلال رؤية الارتفاع، والتضاريس، والنقاط القصوى، والانحدار، ونقاط الارتفاع المتساوية، وما إلى ذلك.

### [الطقس](./weather.md) {#weather}

يعرض التوقعات الجوية بالساعة لليوم الحالي ولـ 7 أيام قادمة.

### [عرض الخرائط البحرية](./nautical-charts.md) {#nautical-map-view}

يوفر عرض الخرائط البحرية تمثيلاً رسومياً مفصلاً للمحيطات والبحار والمناطق الساحلية والأنهار لمساعدتك على التنقل في المياه، ورؤية طرق المرور الشائعة، والعوائق في الممرات المائية، والموانئ، والمراسي، والمراجع الأساسية الأخرى.

### [عرض خرائط التزلج](./ski-maps.md) {#ski-map-view}

يعرض عرض خرائط التزلج ألوان الشتاء ومسارات التزلج على المنحدرات أو عبر البلاد، بالإضافة إلى التلفريك، ومصاعد الكراسي، والمرافق والخدمات القريبة، وهو أمر مفيد للتنقل في وجهات مثل مناطق الترفيه ومنتجعات التزلج والحدائق التضاريسية.

### [الملاحظات الصوتية/المرئية](./audio-video-notes.md) {#audiovideo-notes}

أنشئ ملاحظات صوتية/مرئية للرجوع إليها في المستقبل، على سبيل المثال لتذكر حدث أو مشهد أو تفاعل. تتوفر الملاحظات الصوتية/المرئية التي تم إنشاؤها من *أماكني* وكذلك على الخريطة كطبقة فردية من القصص والأفكار التي أنشأها المستخدم مرتبطة بموقع جغرافي. لنظام أندرويد فقط.

### [موقف السيارة](./parking.md) {#parking-position}

حدد نقطة على الخريطة حيث تركت سيارتك في الشارع وأخطر تقويمك عندما ينتهي وقت وقوف السيارات. سيجعل هذا من السهل عليك تتبع وقت وموقع سيارتك.

### [تعديل OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

تتيح لك إضافة تعديل OpenStreetMap المساهمة في OpenStreetMap، وهو مجتمع عالمي ينشئ خريطة شاملة للعالم ويوفر بيانات محدثة ومفتوحة المصدر ومتاحة للجمهور.

### [Mapillary](./mapillary.md) {#mapillary}

شاهد عروضًا على مستوى الشارع لمساراتك أو الأماكن التي تهمك، مقدمة من [Mapillary](https://www.mapillary.com/) (يلزم الاتصال بالإنترنت).

### [المستشعرات الخارجية](./external-sensors.md) {#external-sensors}

قم بتوصيل مستشعرات خارجية لعرض بياناتها في OsmAnd وتخزين المعلومات في تسجيلات المسار.

### [مقاييس المركبة](./vehicle-metrics.md) {#vehicle-metrics}

قم بتوصيل ماسح OBD-II لعرض بيانات السيارة في OsmAnd وتخزين المعلومات في تسجيلات المسار.

### [الفلك](./astronomy.md) {#astronomy}

يعرض إضافة الفلك طبقة تفاعلية لسماء النجوم مع النجوم، والكوكبات، والشمس، والقمر، والكواكب. يساعدك على تحديد الأجسام السماوية فوق موقعك الحالي، ومعاينة مساراتها لتاريخ وزمان محدد، وتخطيط جلسات مراقبة النجوم باستخدام عناصر التحكم في الوقت والخيارات المدمجة للعرض.

### [إمكانية الوصول](./accessibility.md) {#accessibility}

تجعل إضافة إمكانية الوصول ميزات إمكانية الوصول في الجهاز متاحة مباشرة في OsmAnd. لنظام أندرويد فقط.

### [تطوير OsmAnd](./development.md) {#osmand-development}

تستهدف إضافة تطوير OsmAnd المطورين والمستخدمين الخبراء. تتيح لك محاكاة مسارات الملاحة، والتحقق من أداء عرض الشاشة، وما إلى ذلك.

### [متتبع OsmAnd](./osmand-tracker.md) {#osmand-tracker}

يساعدك متتبع OsmAnd على رؤية مكان جهات الاتصال الخاصة بك على الخريطة في OsmAnd. لنظام أندرويد فقط.

### [متتبع سفن AIS](./ais-tracker.md) {#ais-vessel-tracker}

عرض مواقع AIS ومعلومات حول السفن المحيطة. يتم استقبال بيانات AIS عبر الشبكة من جهاز استقبال AIS خارجي.

## [إنشاء إضافة مخصصة](./custom.md) {#create-a-custom-plugin}

يمكنك إنشاء إضافتك الخاصة باتباع مقالة *الحزمة المخصصة*.


_______