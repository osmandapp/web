---
source-hash: 3010d587c123ef963a233b0b6205168ae7e8d4f377766e5140cb45e5c54f1d00
sidebar_position: 4
title:  قائمة سياق المسار
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

توفر *قائمة سياق المسار* معلومات حول *[المسار](../../personal/tracks/index.md)* في شكل نصي و[رسومي](#altitude--speed-graphs). تتيح لك إضافة معلومات وإجراء تغييرات وتحرير وتنفيذ العديد من الإجراءات الأخرى مع المسار. يمكنك الوصول إلى *قائمة سياق المسار* ببساطة عن طريق النقر على المسار المطلوب على الخريطة أو باستخدام قائمة *[أماكني](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). قد تحتاج إلى فتح مجلد المسار وتحديد المسار المطلوب عن طريق النقر عليه.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار نظرة عامة أندرويد](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار نظرة عامة iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## نظرة عامة على المسار {#track-overview}

عند النقر على مسار، تفتح الشاشة الأولى من *قائمة سياق المسار* - *علامة تبويب النظرة العامة*. في هذه العلامة التبويب، يمكنك العثور على ملخص حول المسار المختار (*[لوحة المعلومات](#info-panel)*) وإجراء الإجراءات الأكثر شيوعًا مع المسار باستخدام *[قائمة إجراءات المسار](#track-actions)*. يمكنك رؤية [الوصف ومعلومات الخدمة](#description-and-info) حول مسارك إذا سحبت علامة تبويب النظرة العامة لأعلى.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### لوحة المعلومات {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![لوحة معلومات نظرة عامة أندرويد](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![لوحة معلومات نظرة عامة iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

في الجزء العلوي من لوحة المعلومات، يمكنك رؤية اسم المسار والرمز المستخدم لتمييزه (*أندرويد فقط*). يمكن تغيير اسم المسار باستخدام وظيفة إعادة التسمية في [قائمة الخيارات](#options). قد تحتوي بعض المسارات (معظمها *[أدلة السفر](../../plan-route/travel-guides.md#manage-as-gpx-track)*) على *[وصف](#description-and-info)* قصير و(أو) صورة أسفل *اسم المسار*. يشير سهم إلى *الاتجاه إلى أقرب نقطة من المسار* من [موقعي](../../map/interact-with-map#my-location-and-zoom).

توفر لوحة المعلومات أيضًا معلومات حول ما يلي:

- *<Translate android="true" ids="distance"/>*. يعرض طول المسار.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. يعرض المجموع الكلي للصعود والهبوط خلال الرحلة.
- *<Translate android="true" ids="altitude_range"/>*. يشير إلى الحد الأدنى والأقصى للارتفاع على المسار.

:::note
في حال تم إنشاء مسارك في OsmAnd أو أي تطبيق تتبع آخر (بحيث تحتوي نقاطه على علامات [`time` و `speed`](../../plugins/trip-recording#recorded-gpx-file))، فإن لوحة المعلومات ستحتوي أيضًا على معلومات حول *<Translate android="true" ids="average_speed"/>*، *<Translate android="true" ids="max_speed"/>*، *<Translate android="true" ids="shared_string_time_span"/>* (*أندرويد*) أو *<Translate ios="true" ids="total_time"/>* (*iOS*) (مدة الوقت بين نقطة البداية والنهاية للمسار)، *<Translate android="true" ids="shared_string_time_moving"/>* (مجموع الوقت أثناء القيادة).
:::

### إجراءات المسار {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار نظرة عامة أندرويد 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار نظرة عامة iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- أزرار **إظهار / إخفاء**. تغير رؤية المسار على الخريطة.
- [المظهر](./appearance.md). تخصيص مظهر مسارك.
- **تحرير المسار** (*أندرويد*). يفتح المسار في [أداة تخطيط المسار](../../plan-route/create-route.md).
- **تصدير** (*iOS*). يسمح لك [بتصدير مسار](../../personal/tracks/manage-tracks.md#export).
- **الاتجاهات**. يفتح المسار في وضع *[التنقل](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### خيارات {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خيارات قائمة المسار أندرويد](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خيارات قائمة المسار أندرويد](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

تتيح لك قائمة **الخيارات** إدارة وتعديل المسار المحدد باستخدام أدوات وإعدادات متنوعة.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – تتحكم في رؤية المسار على الخريطة.
- **<Translate android="true" ids="shared_string_appearance"/>** – تفتح [قائمة المظهر](../tracks/appearance.md) لتخصيص لون المسار وعرضه وشفافيته.
- **<Translate android="true" ids="follow_track"/>** (*أندرويد*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – تبدأ [التنقل بالمسار](../../navigation/setup/gpx-navigation.md).، مع محاذاة مسارك مع المسار المحدد.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*أندرويد فقط*) – تدمج أجزاء المسار لملء الفجوات.
- **<Translate android="true" ids="analyze_on_map"/>**. تفتح أداة [التحليل على الخريطة](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) لفحص ارتفاع المسار وسرعته ومسافته.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*أندرويد فقط*) - تحلل المسار حسب [فترات](./track-context-menu.md#split-interval) زمنية أو مسافية.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – تصدر المسار المحدد بتنسيق GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [تحمل](../../plugins/osm-editing.md#upload-gps-track) المسار المحدد إلى OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - تفتح أداة [تخطيط المسار](../../plan-route/create-route.md) لتعديل المسار.
- **تكرار المسار** (*iOS فقط*) – تنشئ وتحفظ نسخة من المسار.
- **<Translate android="true" ids="rename_track"/>** – تسمح بتغيير اسم المسار.
- **<Translate android="true" ids="change_folder"/>** – تنقل المسار إلى مجلد آخر أو تنشئ مجلدًا جديدًا.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*أندرويد فقط*) - تسمح [بتصفية نقاط المسار](#gps-filter) لتحسين الدقة.
- **<Translate android="true" ids="altitude_correction"/>** (*أندرويد فقط*) - [لتلقي بيانات الارتفاع](#calculate-missing-elevation)، [إرفاق مسارك بالطرق](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) أو حسابها دون اتصال (تحتاج [خرائط التضاريس](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*أندرويد فقط*) - [تحاكي موقعك](../../plugins/development.md#gpx-track-simulation) باستخدام مسار GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. تحذف المسار.


### الوصف والمعلومات {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الوصف والمعلومات أندرويد](@site/static/img/personal/tracks/track_context_overview_1_andr.png) ![الوصف والمعلومات أندرويد](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وصف المسار iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

يعرض هذا القسم من علامة التبويب *نظرة عامة* ***بيانات العلامة*** و***جميع المعلومات العامة***.

- **الوصف**. يُستخدم زر *<Translate android="true" ids="shared_string_edit"/>* (*أندرويد*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) لتحرير وصف المسار. العلامة `desc`.

- **عام**. يحتوي على معلومات حول *حجم ملف GPX*، و*مجلد الملف*، و*تاريخ الإنشاء* مع علامة `time`.

- **معلومات**. العلامات: *الكلمات المفتاحية* - `keywords`، &nbsp;*الرابط* - `link`، &nbsp;*النشاط* - `activities`.

- **المؤلف**. العلامات: *المؤلف* - `author`، &nbsp;*الاسم* - `name`، &nbsp;*عنوان البريد الإلكتروني* - `email`، &nbsp;*الرابط* - `link`.

- **حقوق النشر**. العلامات: *حقوق النشر* - `copyright`، &nbsp;*المؤلف* - `author`، &nbsp;*السنة* - `year`، &nbsp;*الترخيص* - `license`.

- **إضافي**. جميع العلامات من قسم ***الإضافات***:&nbsp; `address`،&nbsp; `icon`،&nbsp; `background`،&nbsp; `color`،&nbsp; `country`،&nbsp; `state`،&nbsp; `telephone`،&nbsp; `postcode`،&nbsp; `start_date`،&nbsp; `desc`.

<details>

<summary>مثال على كود XML لملف GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### نشاط معلومات المسار {#track-information-activity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نشاط معلومات المسار](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نشاط معلومات المسار](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


تتيح لك ميزة *النشاط* في OsmAnd وضع علامات على مسارات GPX المسجلة بأنشطة محددة لمزيد من التحليل والتنظيم في المجلدات.

- [علامات النشاط لمسارات GPX](../../plugins/trip-recording.md#recording-settings). عند تسجيل مسار GPX، يمكنك تعيين نوع نشاط. يساعد هذا التصنيف للنشاط في تصنيف المسارات مبدئيًا.
- [فلتر النشاط](../../personal/tracks/smart-folder.md#search-filter). يمكنك تصفية مسارات GPX المسجلة حسب النشاط، مما يتيح لك التركيز على العثور على أنواع محددة من التسجيلات، مثل جميع مسارات ركوب الدراجات أو المشي لمسافات طويلة.
- [إدارة أنواع الأنشطة](../../personal/tracks/manage-tracks.md#selection-mode). يمكنك تغيير نوع النشاط للمجلدات أو المسارات المحددة باستخدام وضع التحديد في علامة تبويب المسارات في قائمة أماكني.
- **قائمة الأنشطة**. يتم تعريف فئات ومجموعات الأنشطة في موارد OsmAnd. للمطورين والمساهمين، يتم الاحتفاظ بقائمة الأنشطة بتنسيق منظم في [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json)، والذي يوضح بالتفصيل مجموعات وأنواع الأنشطة المتاحة.


## رسوم بيانية للارتفاع / السرعة {#altitude--speed-graphs}

في علامة التبويب *<Translate android="true" ids="shared_string_gpx_track"/>*، يمكنك العثور على معلومات حول المسار في شكل رسومي. باستخدام المفتاح، يمكنك اختيار البيانات التي تريد عرضها على الرسم البياني: بيانات منفصلة عن *[<Translate android="true" ids="altitude"/>](#altitude)*، أو عن *[السرعة](#speed)* (هذا الخيار متاح فقط للمسارات المسجلة) أو عرضها جميعًا (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

التفاعل مع الرسم البياني:

- ***وضع نقطة على الرسم البياني***. إذا كنت ترغب في رؤية المعلومات عند نقطة معينة من المسار، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر مع القيم. في الوقت نفسه، ستظهر علامة زرقاء على الخريطة، تشير إلى هذا الموقع على المسار.
- ***التكبير / التصغير***. يمكنك استخدام [حركات الإصبعين](../../map/interact-with-map.md#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً. بعد التكبير، يمكنك تحريك الرسم البياني إلى اليمين واليسار، بما يتوافق مع التحرك للأمام والخلف على طول المسار.
- ***معلومات إضافية***. يحتوي الجانب الأيمن من الرسم البياني على بيانات حول أدنى وأعلى ومتوسط الارتفاع والانحدار والسرعة. في الجزء السفلي من الرسم البياني، يمكنك رؤية علامات المسافة.


### معلومات عامة {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة المسار السياقية الرسوم البيانية أندرويد](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المسار السياقية الرسوم البيانية iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

في علامة التبويب **نظرة عامة**، يمكنك رؤية معلمات مثل:

- *<Translate android="true" ids="distance"/>*. مجموع المسافة الإجمالية المقطوعة على المسار، أو طول المسار نفسه.
- *<Translate android="true" ids="shared_string_time_span"/>*. الفاصل الزمني بين نقطة البداية والنهاية للمسار.
- *<Translate android="true" ids="shared_string_start_time"/>* الوقت المحدد الذي يبدأ فيه تسجيل المسار.
- *<Translate android="true" ids="shared_string_end_time"/>*. وقت انتهاء تسجيل المسار.

تتيح **الأزرار** النشطة الوصول إلى إجراءات مثل:

- زر **<Translate android="true" ids="analyze_on_map"/>** يفتح [قائمة تحليل المسار](../tracks/index.md#analyze-track-on-map) للمسار.
- زر **<Translate android="true" ids="shared_string_options"/>** يفتح قائمة تحتوي على:

  - *تحرير* يفتح المسار في [أداة تخطيط المسار](../../plan-route/index.md).
  - *حذف* يسمح لك بإزالة عنصر المسار المحدد.
  - *تقسيم الفاصل الزمني* يفتح [وظيفة تقسيم الفاصل الزمني](#split-interval) للمسار.


### السرعة {#speed}

:::note المسارات المسجلة فقط
يمكن رؤية علامة التبويب هذه فقط في المسارات المسجلة. تحتوي النقاط في هذا النوع من المسارات على علامات **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![رسم بياني للمسار السرعة أندرويد](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![رسم بياني للمسار السرعة iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

يعرض الرسم البياني **السرعة** مقاييس مثل:

- *<Translate android="true" ids="average_speed"/>*. يشير إلى متوسط السرعة أثناء الرحلة.
- *<Translate android="true" ids="max_speed"/>*. يعرض أقصى سرعة أثناء الرحلة.
- *<Translate android="true" ids="moving_time"/>*. يعرض إجمالي الوقت أثناء الرحلة في الحركة فقط.
- *<Translate android="true" ids="distance_moving"/>*. يشير إلى المسافة المعدلة للرحلة.


### الارتفاع {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![رسم بياني لارتفاع المسار iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

يعرض الرسم البياني **الارتفاع** مقاييس مثل:

- *<Translate android="true" ids="average_altitude"/>*. يشير إلى متوسط الارتفاع فوق مستوى سطح البحر على المسار.
- *<Translate android="true" ids="altitude_range"/>*. أعلى وأدنى ارتفاع مسجل على المسار.
- *<Translate android="true" ids="altitude_ascent"/>*. الارتفاع التراكمي فوق مستوى سطح البحر على طول المسار.
- *<Translate android="true" ids="altitude_descent"/>*. الانخفاض التراكمي في الارتفاع على طول المسار.

**الحصول على بيانات الارتفاع.**
إذا لم تكن هناك *معلومات ارتفاع* على المسار، يمكنك إضافتها بالطرق التالية:

- *زر حساب الارتفاع ← [استخدام الطرق القريبة](../../plan-route/create-route.md#get-elevation-data)*. يستخدم خريطة غير متصلة بالإنترنت للعثور على الطرق القريبة وبيانات الارتفاع. يتيح لك تخصيص هندسة المسار.
- [استخدام خرائط التضاريس](#calculate-missing-elevation). يستخدم خرائط التضاريس للحصول على بيانات الارتفاع. تظل هندسة المسار دون تغيير.


### حساب الارتفاع المفقود {#calculate-missing-elevation}

:::note اشتراك OsmAnd Pro
ميزة حساب الارتفاع دون اتصال متاحة فقط [لمشتركي OsmAnd Pro](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

تتيح لك هذه الميزة حساب ملف تعريف الارتفاع لمسار GPX دون اتصال لأي تضاريس بين 70 درجة شمال خط العرض و 70 درجة جنوب خط العرض، بناءً على [بيانات خرائط التضاريس](../../plugins/topography.md#download-maps). *يجب تنزيل خرائط التضاريس (ثلاثية الأبعاد) مسبقًا*.

1. قم بتنزيل [خرائط التضاريس (ثلاثية الأبعاد)](../../plugins/topography.md#download-maps) للمنطقة المطلوبة.
2. إذا لم يحتوي المسار على أي بيانات ارتفاع، فانتقل إلى قائمة سياق المسار (*قائمة سياق المسار ← <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*)، وحدد *استخدام خرائط التضاريس*، وبعد الحساب ستحصل على رسم بياني للمسار بناءً على بيانات التضاريس.

    ![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_2.png) ![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_10.png) <!--![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_4.png) ![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. إذا كنت تقوم بإنشاء مسار باستخدام [أداة تخطيط المسار](../../plan-route/create-route.md#graph) باستخدام طريقة *الخط المستقيم* ولا توجد بيانات ارتفاع على الرسم البياني، فستحتاج إلى:
    - انقر على *الحصول على بيانات الارتفاع*، ثم حدد *استخدام خرائط التضاريس*.
    - بعد الحساب، ستحصل على رسم بياني كامل للارتفاع/الانحدار لمسارك بناءً على بيانات التضاريس.

  ![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_9.png) ![رسم بياني لارتفاع المسار أندرويد](@site/static/img/personal/tracks/calculate_elevation_5.png)


## النقاط / نقاط الطريق {#points--waypoints}

نقاط الطريق هي أحد أنواع النقاط المتاحة على الخريطة. بشكل عام، يمكن أن تكون نقاط مسار جزءًا من ملفات GPX. يتوفر وصف تفصيلي في مقالة [النقاط على الخريطة](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار النقاط أندرويد](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار النقاط iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

في علامة التبويب *النقاط* هذه:

- [عرض بيانات نقاط المسار](#display-custom-gpx-tags) وتعديل نقاط المسار (نقاط الطريق ونقاط المسار)، [حذفها وإضافة](#points--waypoints) نقاط طريق إلى مسار.
- إنشاء وتعديل [مجموعة (مجلد) من النقاط](#waypoint-groups).


### إضافة نقطة طريق إلى مسار {#add-waypoint-to-a-track}

يمكن إضافة نقاط الطريق إلى المسار المسجل حاليًا أو إلى أي مسار من قائمة [*أماكني ← قائمة المسارات*](../../personal/tracks/manage-tracks.md):

- استخدم [قائمة سياق الخريطة](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - تظهر نقاط الطريق تلقائيًا إذا كان المسار المحدد ممكّنًا على الخريطة.
  - [انقر مطولاً](../../map/map-context-menu.md#select-any-point-long-tap) على الخريطة في أي موقع مختار لإنشاء نقطة طريق.
  - يمكنك تعيين معلومات حول نقطة الطريق في [قائمة سياق الخريطة](../../map/map-context-menu.md#-add--edit-track-waypoint) المفتوحة.

- استخدم زر [إضافة نقطة طريق](#points--waypoints) في قائمة سياق المسار.

- أضف نقطة طريق كزر [إجراء سريع](../../widgets/quick-action.md#my-places).

#### إنشاء نقطة طريق {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoint_1_andr.png) ![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة نقطة طريق](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png) ![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

انقر على زر *إضافة نقطة طريق* لفتح شاشة إنشاء نقطة الطريق (هذه الشاشة مألوفة مع [قائمة سياق المفضلة](../../personal/favorites.md#create)).

1. **أضف** *اسم* نقطة الطريق، *عنوان* الموقع المحدد و*وصف* له (اختياري).
2. **حدد** المجموعة.

    - حدد فئات المجموعات التي تم إنشاؤها مسبقًا أو أنشئ فئة جديدة.
    - أنشئ اسمًا ومظهرًا لمجموعة نقاط الطريق الجديدة. يسمى هذا أيضًا *فئة جديدة* في التطبيق.
    - سيتم استخدام **الرمز** و**لون الرمز** و**الشكل** لجميع نقاط الطريق الجديدة المضافة إلى المجموعة.

3. إعداد **المظهر**:

    - حدد [**رمزًا**](../../personal/favorites.md#favorite-icons) من قائمة رموز جميع فئات نقاط الاهتمام.
    - حدد **لون** الرمز.
    - ثم حدد **شكل** الرمز: *دائرة، مثمن، مربع*.

4. **استبدل** نقطة أخرى بهذه، إذا كنت بحاجة إلى ذلك.


### إجراءات مع المجموعات {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة مجموعة المسار أندرويد](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة مجموعة المسار iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

تفتح *قائمة النقاط الثلاث* ( &#8285; ) *قائمة مجموعة* نقاط الطريق.

**الإجراءات:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - يسمح لك بعرض أو عدم عرض نقاط طريق المجموعة على الخريطة. أو يمكنك استخدام [زر الشاشة](#points--waypoints) لعرض أو إغفال نقاط طريق المجموعة على الخريطة.
- **<Translate android="true" ids="shared_string_rename"/>** - تغيير اسم المجموعة.
- **<Translate android="true" ids="change_default_appearance"/>** - تغيير خيارات العرض لمجموعة من نقاط الطريق.
- **<Translate android="true" ids="add_group_to_markers"/>** أو **إزالة** (*أندرويد فقط*) - نقل نقاط طريق المجموعة إلى قائمة [علامات الخريطة](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*أندرويد فقط*) - نقل نقاط طريق المجموعة إلى [المفضلة](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*أندرويد فقط*) - ينشئ مسارًا بين نقاط الطريق. تصبح النقطتان الأولى والأخيرة بداية ونهاية المسار، ويتم تحويل الباقي إلى نقاط وسيطة.
- **<Translate android="true" ids="shared_string_delete"/>** - حذف مجموعة من نقاط الطريق.


### مجموعات نقاط الطريق {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خريطة مجموعة قائمة المسار أندرويد](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![خريطة مجموعة قائمة المسار أندرويد](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خريطة مجموعة قائمة المسار iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![خريطة مجموعة قائمة المسار iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

إدارة رؤية المجموعات على الخريطة: إذا أخفيت مسارًا واحدًا، فسيتم إخفاء المجموعة بأكملها أيضًا.

يمكنك تشغيل أو إيقاف تشغيل نقاط طريق المجموعة على الخريطة باستخدام الزر الموجود في الزاوية العلوية اليمنى من قائمة سياق المسار على الخريطة. انقر عليه وحدد الإجراء المطلوب.

### عرض علامات GPX المخصصة {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![النقاط](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![النقاط](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>

<details>

<summary>مثال على كود XML لعلامات نقطة الطريق</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>مثال على كود XML لعلامات نقطة المسار</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**العلامات:**

| المعلمة | الوصف |
| --- | --- |
| `lat` | **خط العرض** هو أحد الإحداثيات الجغرافية التي يمكنك من خلالها تحديد موقع. |
| `lon` | **خط الطول** هو إحداثي جغرافي آخر يمكنك من خلاله تحديد موقع. |
| `time` | **الطابع الزمني** هو التاريخ والوقت الذي تم فيه تسجيل النقطة. |
| `name` | **الاسم** هو اسم النقطة. يُسمح بأي أحرف. |
| `desc` | **الوصف** يحتوي على معلومات إضافية حول النقطة. |
| `type` | **تحديد المجموعة** هو اسم مجلد OsmAnd الذي تم حفظ نقطة الطريق هذه فيه. |
| `cmt` | **التعليق** هو تعليق قصير على نقطة. |
| `link` | **الرابط** هو رابط لأي مصادر. |
| `ele` | **الارتفاع** هو ارتفاع النقطة. |


**الإضافات:**

| الإضافة | الوصف |
| --- | --- |
| `osmand:icon` | **الرمز** هو اسم الرمز الذي حددته. |
| `osmand:color` | **اللون** هو اللون بتنسيق HEX. |
| `osmand:background` | **الخلفية** هي شكل الرمز، مثل دائرة أو مثمن أو مربع. |
| `osmand:country` | **البلد** هو اسم البلد. |
| `osmand:address` | **العنوان** هو العنوان. |
| `osmand:postcode` | **الرمز البريدي** هو الرمز البريدي. |
| `osmand:telephone` | **الهاتف** هو رقم الهاتف. |
| `osmand:state` | **الولاية** هو اسم الولاية. |
| `osmand:start_date` | **تاريخ البدء** هو بيانات جدول نقطة. |

يتم تسجيل نقاط الطريق مع المسار في [ملف GPX](../../../technical/osmand-file-formats/osmand-gpx.md). تحتوي كل نقطة من هذه النقاط على مجموعة خاصة بها من العلامات للوصف. يتم سرد جميع العلامات المتعلقة مباشرة بوصف نقاط الطريق التي يمكن تحريرها مباشرة في تطبيق OsmAnd في هذا القسم.
لتغيير وصف نقطة الطريق، يمكنك اتباع إحدى الطرق التالية:

1. ابحث عن المسار المطلوب في قائمة علامة التبويب *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. انقر على المسار على الخريطة، إذا كان مدرجًا في [قائمة المسارات المرئية](../tracks/index.md#display-tracks-on-the-map).
3. انقر على نقطة الطريق المطلوبة إذا كانت [مرئية](../../personal/tracks/manage-tracks.md#track-menu) على الخريطة.

    ثم في [قائمة سياق المسارات](./track-context-menu.md) انقر على *النقاط*، وحقل المجلد المطلوب مع نقاط الطريق المتاحة ونقطة الطريق التي تبحث عنها. حدد قائمة *الإجراءات ←* **تحرير نقطة طريق GPX** وقم بإجراء التغييرات. لا يمكنك تغيير تاريخ إنشاء نقطة، *الطابع الزمني*، في التطبيق.

**علامات المرافق** التي تصف معلومات إضافية، مثل ساعات العمل أو رقم الهاتف، خاصة بنقطة الاهتمام تأخذ تلك المعلومات من بيانات OpenStreetMap أو البيانات التي أدخلتها عند إنشاء نقطة الاهتمام. يمكنك تحرير هذه العلامات و[العلامات المخصصة](#display-custom-gpx-tags) فقط في كود ملف GPX، والذي يمكنك فتحه بأي محرر نصوص على جهازك.


## تقسيم الفاصل الزمني {#split-interval}

<InfoAndroidOnly />

يمكنك تقسيم المسار إلى فترات، مثل المسافة والوقت، وتحليله.

قسّم المسار حسب المسافة أو الفاصل الزمني.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![شاشة تقسيم المسار أندرويد](@site/static/img/personal/tracks/track_split_interval_android.png) ![شاشة تقسيم المسار أندرويد](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## فلتر GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![شاشة فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

يسمح لك هذا الفلتر بتحسين إحصائيات مسارك عن طريق استبعاد البيانات غير الضرورية أو غير الصحيحة. يمكنك تصفية نقاط المسار التي لا تتناسب مع معلمات مسارك، ونتيجة لذلك، الحصول على رسم بياني أكثر دقة وخط مسار مرئي بدون تشويه أو ضوضاء تسجيل. يمكنك إجراء تغييرات باستخدام فلاتر مثل *التنعيم* و*السرعة* و*الارتفاع* و*دقة GPS*، والتي تخفي النقاط المفلترة من المسار الحالي. بالإضافة إلى ذلك، في قائمة *الإحصائيات*، يمكنك التحقق من كيفية عرض تغييراتك على الرسم البياني قبل حفظها. يمكنك أيضًا *إعادة التعيين إلى الأصل* و*الحفظ كنسخة* من مسارك في هذا الفلتر دون حفظ المسار الأصلي.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

تتضمن صفحة تطبيق فلتر GPS لنظام أندرويد ما يلي:

- خريطة مع مسار محفوظ وزر إضافي، *موقع مساري* (يقوم بمحاذاة المسار إلى مركز الخريطة).
- زران *تحديث* و*قائمة* في الأعلى (*تفتح القائمة* حقل *الإجراء* في أسفل الصفحة).
- كتل *فلتر*، *إحصائيات*، *إجراء*.


### قائمة الفلتر {#filter-menu}

في هذه القائمة، يمكنك تغيير بعض معلمات مسارك مثل *التنعيم* أو *السرعة* أو *الارتفاع* أو *دقة GPS* باستخدام الفلاتر. تنقسم القائمة إلى *جزء النقاط* و*جزء الإجراءات*.

| ***النقاط*** |
|:------------|
|يعرض هذا الجزء عدد النقاط بعد التصفية والعدد الإجمالي للنقاط على المسار المحدد قبل استخدام الفلاتر.|
|![أرقام نقاط شاشة فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***الإجراءات*** |
|*التنعيم*. يحدد مسافة العتبة بين النقاط. يتم إخفاء نقاط المسار التي تبعد هذه المسافة على الأقل عن آخر نقطة مرئية. سيتم إخفاء جميع النقاط على المسار، التي تبعد عن بعضها البعض مسافة أقل من المسافة المحددة بواسطة الفلتر. يتم حساب نقاط المسار من آخر نقطة مرئية. لاحظ أن العتبات العالية يمكن أن تبسط هندسة المسار بشكل مفرط.|
|![أرقام تنعيم فلتر GPS أندروid](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*السرعة*. يتم عرض نقاط المسار التي تتوافق مع فاصل السرعة المحدد فقط على الرسم البياني والخريطة، ويتم إخفاء النقاط الأخرى.|
|![أرقام سرعة فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*الارتفاع*. يتم عرض نقاط المسار التي تتوافق مع فاصل الارتفاع المحدد فقط على الرسم البياني والخريطة، ويتم إخفاء النقاط الأخرى.|
|![أرقام ارتفاع فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*دقة GPS*. تحدد القيمة القصوى المسموح بها لـ HDOP. يتم إخفاء النقاط ذات القيمة الأعلى.|
|![أرقام دقة فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### الإحصائيات {#statistics}

![رسم بياني لفلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

تعرض علامة التبويب "الإحصائيات" معلومات حول المسار **المعدل**، أي المسار بدون القيم المفلترة. يتم عرضها في كتل الإحصائيات وبيانات الرسم البياني.

- يعرض جزء *البيانات* إحصائيات مشابهة [لقائمة الفلتر](#filter-menu).
- يعرض جزء *الرسم البياني* ثلاثة أنواع من الرسوم البيانية حسب المعلمات: نظرة عامة، ارتفاع، وسرعة. هذه الوظيفة هي نسخة من [رسم بياني للمسار](#altitude--speed-graphs).

### الإجراءات {#actions}

![إجراء فلتر GPS أندرويد](@site/static/img/personal/tracks/gps_filter_action_android.png)

تتوفر قائمة الإجراءات في أسفل علامة التبويب **فلتر** أو **إحصائيات**. يطبق OsmAnd جميع التغييرات التي تم إجراؤها على المسار دون تحديث الملف، ولكن يمكنك حفظ التغييرات يدويًا.

- *<Translate android="true" ids="reset_to_original"/>*. يسمح لك بإعادة المعلمات إلى حالتها الأصلية.
- *<Translate android="true" ids="save_as_copy"/>*. يسمح لك بحفظ المسار كمسار جديد.
- *<Translate android="true" ids="save_changes_into_file"/>*. يسمح لك بإعادة كتابة المسار بالمعلمات الجديدة.


## مقالات ذات صلة {#related-articles}

- [مسارات GPX](../../personal/tracks/manage-tracks.md)
- [المسارات على الخريطة](./track-context-menu.md)
- [التنقل بالمسار](../../navigation/setup/gpx-navigation.md)
- [تخطيط المسار](../../plan-route/index.md)
- [ملحق تسجيل الرحلات](../../plugins/trip-recording.md)
- [التحليل على الخريطة](../index.md#analyze-track-on-map)

> *آخر تحديث: نوفمبر 2024*