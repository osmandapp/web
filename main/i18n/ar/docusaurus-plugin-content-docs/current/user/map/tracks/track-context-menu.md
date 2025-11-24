---
source-hash: c3e5ac67f7089096f5b71e7e0201440bab4f393bc16c357be3085327287a1bd3
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

توفر *قائمة سياق المسار* معلومات حول *[المسار](../../personal/tracks/index.md)* في شكل نصي و[رسوم بيانية](#altitude--speed-graphs). تتيح لك إضافة معلومات، وإجراء تغييرات، وتحرير، وتنفيذ إجراءات أخرى متنوعة على المسار. يمكنك الوصول إلى *قائمة سياق المسار* ببساطة عن طريق النقر على المسار المطلوب على الخريطة أو استخدام قائمة *[أماكني](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). قد تحتاج إلى فتح مجلد المسار وتحديد المسار المطلوب بالنقر عليه.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نظرة عامة على قائمة سياق المسار في أندرويد](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على قائمة سياق المسار في iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## نظرة عامة على المسار {#track-overview}

عندما تنقر على مسار، تفتح الشاشة الأولى من *قائمة سياق المسار* - *علامة تبويب النظرة العامة*. في علامة التبويب هذه، يمكنك العثور على ملخص حول المسار المختار (*[لوحة المعلومات](#info-panel)*) واتخاذ الإجراءات الأكثر شيوعًا مع المسار باستخدام *[قائمة إجراءات المسار](#track-actions)*. يمكنك رؤية [الوصف ومعلومات الخدمة](#description-and-info) حول مسارك إذا قمت بسحب علامة تبويب النظرة العامة لأعلى.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### لوحة المعلومات {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نظرة عامة على لوحة المعلومات في أندرويد](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على لوحة المعلومات في iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

في الجزء العلوي من لوحة المعلومات، يمكنك رؤية اسم المسار والرمز المستخدم لتمييزه (*أندرويد فقط*). يمكن تغيير اسم المسار باستخدام وظيفة إعادة التسمية في [قائمة الخيارات](#options). قد تحتوي بعض المسارات (غالبًا *[أدلة السفر](../../plan-route/travel-guides.md#manage-as-gpx-track)*) على *[وصف](#description-and-info)* قصير و/أو صورة أسفل *اسم المسار*. يظهر سهم *الاتجاه إلى أقرب نقطة في المسار* من [موقعي](../../map/interact-with-map.md#my-location-and-zoom).  

توفر لوحة المعلومات أيضًا معلومات حول ما يلي:

- *<Translate android="true" ids="distance"/>*. يعرض طول المسار.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. يعرض المجموع الكلي للصعود والهبوط أثناء الرحلة.
- *<Translate android="true" ids="altitude_range"/>*. يشير إلى الحد الأدنى والأقصى للارتفاع على المسار.  

:::note
في حال تم إنشاء مسارك في OsmAnd أو أي تطبيق تتبع آخر (بحيث تحتوي نقاطه على علامات [`time` و `speed`](../../plugins/trip-recording#recorded-gpx-file))، ستحتوي لوحة المعلومات أيضًا على معلومات حول *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="map_widget_trip_recording_duration"/>* (المدة الزمنية بين نقطتي البداية والنهاية للمسار)، و*<Translate android="true" ids="shared_string_time_moving"/>* (مجموع الوقت أثناء الحركة).

**ملاحظة:** بالنسبة للمسارات المسجلة، يعرض المدة الزمنية الفعلية للسفر بناءً على الطوابع الزمنية. أما بالنسبة للمسارات المخططة، فيعرض المدة الزمنية الوقت المقدر المحسوب من طول الطريق ومتوسط السرعة لملف الملاحة المحدد، إذا كان الطريق بأكمله يستخدم ملفًا واحدًا ولا يحتوي على أجزاء خطوط مستقيمة.
:::

### إجراءات المسار {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نظرة عامة على قائمة سياق المسار في أندرويد 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على قائمة سياق المسار في iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **أزرار إظهار / إخفاء**. يغير رؤية المسار على الخريطة.
- [المظهر](./appearance.md). تخصيص مظهر مسارك.
- **تحرير المسار** (*أندرويد*). يفتح المسار في [أداة تخطيط المسار](../../plan-route/create-route.md).
- **تصدير** (*iOS*). يسمح لك [بتصدير مسار](../../personal/tracks/manage-tracks.md#export).
- **الاتجاهات**. يفتح المسار في وضع *[الملاحة](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### الخيارات {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خيارات قائمة المسار في أندرويد](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![خيارات قائمة المسار في iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

تتيح لك قائمة **الخيارات** إدارة وتعديل المسار المحدد باستخدام أدوات وإعدادات متنوعة.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – يتحكم في رؤية المسار على الخريطة.
- **<Translate android="true" ids="shared_string_appearance"/>** – يفتح [قائمة المظهر](../tracks/appearance.md) لتخصيص لون المسار وعرضه وشفافيته.
- **<Translate android="true" ids="follow_track"/>** (*أندرويد*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – يبدأ [الملاحة حسب المسار](../../navigation/setup/gpx-navigation.md).، مع محاذاة مسارك مع المسار المحدد.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*أندرويد فقط*) – يدمج أجزاء المسار لملء الفجوات.
- **<Translate android="true" ids="analyze_on_map"/>**. يفتح أداة [التحليل على الخريطة](../tracks/index.md#analyze-track-on-map) لفحص ارتفاع المسار وسرعته ومسافته.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*أندرويد فقط*) - يحلل المسار حسب [الفواصل](./track-context-menu.md#analyze-by-intervals) الزمنية أو المسافة.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – يصدر المسار المحدد بتنسيق GPX عبر قائمة المشاركة في النظام.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [يرفع](../../plugins/osm-editing.md#upload-gps-track) المسار المحدد إلى OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - يفتح أداة [تخطيط المسار](../../plan-route/create-route.md) لتعديل المسار.
- **تكرار المسار** (*iOS فقط*) – ينشئ ويحفظ نسخة من المسار.
- **<Translate android="true" ids="rename_track"/>** – يسمح بتغيير اسم المسار.
- **<Translate android="true" ids="change_folder"/>** – ينقل المسار إلى مجلد آخر أو ينشئ مجلدًا جديدًا.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*أندرويد فقط*) - يسمح [بترشيح نقاط المسار](#gps-filter) لتحسين الدقة.
- **<Translate android="true" ids="altitude_correction"/>** (*أندرويد فقط*) - ل[تلقي بيانات الارتفاع](#calculate-missing-elevation)، [اربط مسارك بالطرق](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) أو احسبه دون اتصال بالإنترنت (تحتاج إلى [خرائط التضاريس](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*أندرويد فقط*) - [يحاكي موقعك](../../plugins/development.md#gpx-track-simulation) باستخدام مسار GPX.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. يحذف المسار.


### الوصف والمعلومات {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الوصف والمعلومات في أندرويد](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![الوصف والمعلومات في أندرويد](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وصف المسار في iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

يعرض هذا القسم من علامة تبويب *النظرة العامة* ***بيانات العلامات*** و***جميع المعلومات العامة***.

- **الوصف**.  زر *<Translate android="true" ids="shared_string_edit"/>* (*أندرويد*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) يُستخدم لتحرير وصف المسار. علامة `desc`.

- **عام**. يحتوي على معلومات حول *حجم ملف GPX*، و*مجلد الملف*، و*تاريخ الإنشاء* مع علامة `time`.

- **معلومات**. العلامات: *الكلمات الرئيسية* - `keywords`, &nbsp;*الرابط* - `link`, &nbsp;*النشاط* - `activities`.

- **المؤلف**. العلامات: *المؤلف* - `author`, &nbsp;*الاسم* - `name`, &nbsp;*عنوان البريد الإلكتروني* - `email`, &nbsp;*الرابط* - `link`.

- **حقوق النشر**. العلامات: *حقوق النشر* - `copyright`, &nbsp;*المؤلف* - `author`, &nbsp;*السنة* - `year`, &nbsp;*الترخيص* - `license`.

- **إضافي**. جميع العلامات من قسم ***الامتدادات***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

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


### نوع نشاط المسار {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نوع نشاط المسار](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نوع نشاط المسار](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


تتيح ميزة *النشاط* في OsmAnd وضع علامات على مسارات GPX المسجلة بأنشطة محددة لمزيد من التحليل والتنظيم في المجلدات.

- [علامات النشاط لمسارات GPX](../../plugins/trip-recording.md#recording-settings). تتلقى المسارات المسجلة نوع نشاط تلقائيًا بناءً على الملف المحدد، مما يساعد في تصنيفها وترشيحها لاحقًا. يمكنك تغيير النشاط يدويًا إذا لزم الأمر.
- [مرشح النشاط](../../personal/tracks/smart-folder.md#search-filter). يمكنك ترشيح مسارات GPX المسجلة حسب النشاط، مما يتيح لك التركيز على العثور على أنواع معينة من التسجيلات، مثل جميع مسارات ركوب الدراجات أو المشي لمسافات طويلة.
- [إدارة أنواع الأنشطة](../../personal/tracks/manage-tracks.md#selection-mode). يمكنك تغيير نوع النشاط للمجلدات أو المسارات المحددة باستخدام وضع التحديد في علامة تبويب المسارات في قائمة أماكني.
- **قائمة الأنشطة**. يتم تحديد فئات ومجموعات الأنشطة في موارد OsmAnd. للمطورين والمساهمين، يتم الاحتفاظ بقائمة الأنشطة بتنسيق منظم في [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json)، والذي يفصل مجموعات وأنواع الأنشطة المتاحة.


## الرسوم البيانية للارتفاع / السرعة {#altitude--speed-graphs}

في علامة التبويب *<Translate android="true" ids="shared_string_gpx_track"/>*، يمكنك العثور على معلومات حول المسار في شكل رسوم بيانية. باستخدام المفتاح، يمكنك اختيار البيانات التي سيتم عرضها على الرسم البياني: بيانات منفصلة عن *[<Translate android="true" ids="altitude"/>](#altitude)*، وعن *[السرعة](#speed)* (هذا الخيار متاح فقط للمسارات المسجلة) أو عرضها معًا (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

التفاعل مع الرسم البياني:

- ***ضع نقطة على الرسم البياني***. إذا كنت تريد رؤية المعلومات عند نقطة معينة من المسار، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر بالقيم. في نفس الوقت، سيظهر علامة زرقاء على الخريطة، تشير إلى ذلك الموقع على المسار.
- ***تكبير/تصغير***. يمكنك استخدام [حركات إصبعين](../../map/interact-with-map.md#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً. بعد التكبير، يمكنك تحريك الرسم البياني إلى اليمين واليسار، وهو ما يتوافق مع التحرك للأمام والخلف على طول المسار.
- ***معلومات إضافية***. يحتوي الجانب الأيمن من الرسم البياني على بيانات حول أدنى وأعلى ومتوسط الارتفاع والانحدار والسرعة. في الجزء السفلي من الرسم البياني، يمكنك رؤية علامات المسافة.


### معلومات النظرة العامة {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار الرسوم البيانية أندرويد](@site/static/img/personal/tracks/track_menu_graph_1_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار الرسوم البيانية iOS](@site/static/img/personal/tracks/track_menu_graph_2_new_ios.png)

</TabItem>

</Tabs>

في علامة التبويب **نظرة عامة**، يمكنك رؤية معلمات مثل:

- *<Translate android="true" ids="distance"/>*. مجموع المسافة الإجمالية المقطوعة على المسار، أو طول المسار نفسه.
- *<Translate android="true" ids="map_widget_trip_recording_duration"/>*. الفاصل الزمني بين نقطتي البداية والنهاية للمسار.
- *<Translate android="true" ids="shared_string_start_time"/>* الوقت المحدد لبدء تسجيل المسار.
- *<Translate android="true" ids="shared_string_end_time"/>*. وقت انتهاء تسجيل المسار.

تتيح **الأزرار** النشطة الوصول إلى إجراءات مثل:

- زر **<Translate android="true" ids="analyze_on_map"/>** يفتح [قائمة تحليل المسار](../tracks/index.md#analyze-track-on-map) للمسار.
- زر **<Translate android="true" ids="shared_string_options"/>** يفتح قائمة تحتوي على:

  - *تحرير* يفتح المسار في [أداة تخطيط المسار](../../plan-route/index.md).
  - *حذف* يسمح لك بإزالة عنصر المسار المحدد.
  - *تقسيم الفاصل* يفتح [وظيفة تقسيم الفاصل](#analyze-by-intervals) للمسار.


### السرعة {#speed}

:::note المسارات المسجلة فقط
لا يمكن رؤية علامة التبويب هذه إلا على المسارات المسجلة. تحتوي النقاط في هذا النوع من المسارات على علامات **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الرسم البياني لسرعة المسار في أندرويد](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الرسم البياني لسرعة المسار في iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

يعرض الرسم البياني **للسرعة** مقاييس مثل:

- *<Translate android="true" ids="average_speed"/>*. يشير إلى متوسط السرعة أثناء الرحلة.
- *<Translate android="true" ids="max_speed"/>*. يعرض السرعة القصوى أثناء الرحلة.
- *<Translate android="true" ids="moving_time"/>*. يعرض إجمالي الوقت أثناء الرحلة في حالة الحركة فقط.
- *<Translate android="true" ids="distance_moving"/>*. يشير إلى المسافة المعدلة للرحلة.


### الارتفاع {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الرسم البياني لارتفاع المسار في أندرويد](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الرسم البياني لارتفاع المسار في iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

يعرض الرسم البياني **للارتفاع** مقاييس مثل:

- *<Translate android="true" ids="average_altitude"/>*. يشير إلى متوسط الارتفاع فوق مستوى سطح البحر على المسار.
- *<Translate android="true" ids="altitude_range"/>*. أعلى وأدنى ارتفاع مسجل على المسار.
- *<Translate android="true" ids="altitude_ascent"/>*. الكسب التراكمي في الارتفاع فوق مستوى سطح البحر على طول المسار.
- *<Translate android="true" ids="altitude_descent"/>*. الخسارة التراكمية للارتفاع على طول المسار.

**الحصول على بيانات الارتفاع.**  
إذا لم تكن هناك *معلومات عن الارتفاع* على المسار، يمكنك إضافتها بالطرق التالية:

- *زر حساب الارتفاع ← [استخدام الطرق القريبة](../../plan-route/create-route.md#get-elevation-data)*. يستخدم خريطة غير متصلة بالإنترنت للعثور على الطرق القريبة وبيانات الارتفاع. يسمح لك بتخصيص هندسة المسار.
- [استخدام خرائط التضاريس](#calculate-missing-elevation). يستخدم خرائط التضاريس للحصول على بيانات الارتفاع. تظل هندسة المسار دون تغيير.


### حساب الارتفاع المفقود {#calculate-missing-elevation}

:::note اشتراك OsmAnd Pro
ميزة حساب الارتفاع دون اتصال بالإنترنت متاحة فقط [**لمشتركي OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

تتيح لك هذه الميزة حساب ملف تعريف الارتفاع لمسار GPX دون اتصال بالإنترنت لأي تضاريس بين خط عرض ٧٠ درجة شمالًا و ٧٠ درجة جنوبًا، بناءً على [بيانات خرائط التضاريس](../../plugins/topography.md#download-maps). *يجب تنزيل خرائط التضاريس (ثلاثية الأبعاد) مسبقًا*.

١. قم بتنزيل [خرائط التضاريس (ثلاثية الأبعاد)](../../plugins/topography.md#download-maps) للمنطقة المطلوبة.
٢. إذا كان المسار لا يحتوي على أي بيانات ارتفاع، فانتقل إلى قائمة سياق المسار (*قائمة سياق المسار ← <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), وحدد *استخدام خرائط التضاريس*، وبعد الحساب ستحصل على رسم بياني للمسار بناءً على بيانات التضاريس.  

    ![الرسم البياني لارتفاع المسار في أندرويد](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![الرسم البياني لارتفاع المسار في أندرويد](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

٣. إذا كنت تقوم بإنشاء مسار باستخدام أداة [تخطيط المسار](../../plan-route/create-route.md#graph) باستخدام طريقة *الخط المستقيم* ولا توجد بيانات ارتفاع على الرسم البياني، فأنت بحاجة إلى:
    - النقر على *الحصول على بيانات الارتفاع*، ثم تحديد *استخدام خرائط التضاريس*.
    - بعد الحساب، ستحصل على رسم بياني كامل للارتفاع/الانحدار لمسارك بناءً على بيانات التضاريس.  

  ![الرسم البياني لارتفاع المسار في أندرويد](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![الرسم البياني لارتفاع المسار في أندرويد](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## النقاط / نقاط الطريق {#points--waypoints}

نقاط الطريق هي أحد أنواع النقاط المتاحة على الخريطة. بشكل عام، يمكن أن تكون نقاط مسار تشكل جزءًا من ملفات GPX. يتوفر وصف مفصل في مقالة [النقاط على الخريطة](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق المسار النقاط أندرويد](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار النقاط iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

في علامة التبويب *النقاط* هذه:

- [عرض بيانات نقاط المسار](#display-custom-gpx-tags) وتعديل نقاط المسار الخاصة بك (نقاط الطريق ونقاط المسار)، [حذفها وإضافة](#points--waypoints) نقاط طريق إلى مسار.
- إنشاء وتعديل [مجموعة (مجلد) من النقاط](#waypoint-groups).


### إضافة نقطة طريق إلى مسار {#add-waypoint-to-a-track}

يمكن إضافة نقاط الطريق إلى المسار المسجل حاليًا أو إلى أي مسار من [*أماكني ← قائمة المسارات*](../../personal/tracks/manage-tracks.md):

- استخدم [قائمة سياق الخريطة](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - يتم عرض نقاط الطريق تلقائيًا إذا تم تمكين المسار المحدد على الخريطة.
  - [انقر نقرًا طويلاً](../../map/map-context-menu.md#select-any-point-long-tap) على الخريطة في أي موقع مختار لإنشاء نقطة طريق.
  - يمكنك تعيين معلومات حول نقطة الطريق في [قائمة سياق الخريطة](../../map/map-context-menu.md#-add--edit-track-waypoint) المفتوحة.

- استخدم زر [إضافة نقطة طريق](#points--waypoints) في قائمة سياق المسار.

- أضف نقطة طريق كزر [إجراء سريع](../../widgets/quick-action.md#my-places).

### إنشاء نقطة طريق {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة نقطة طريق](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![إضافة نقطة طريق](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

انقر على زر *إضافة نقطة طريق* لفتح شاشة إنشاء نقطة الطريق (هذه الشاشة مألوفة مع [قائمة سياق المفضلة](../../personal/favorites.md#create)).

١. **أضف** *اسم* نقطة الطريق، و*عنوان* الموقع المحدد و*وصف* له (اختياري).
٢. **حدد** المجموعة.

    - حدد فئات المجموعات التي تم إنشاؤها مسبقًا أو أنشئ فئة جديدة.
    - أنشئ اسمًا ومظهرًا لمجموعة نقاط الطريق الجديدة. وهذا ما يسمى أيضًا *فئة جديدة* في التطبيق.
    - سيتم استخدام **الرمز** و**لون الرمز** و**الشكل** لجميع نقاط الطريق الجديدة المضافة إلى المجموعة.

٣. إعداد **المظهر**:

    - حدد [**رمزًا**](../../personal/favorites.md#favorite-icons) من قائمة جميع رموز فئات النقاط المهمة.
    - حدد **لون** الرمز.
    - ثم حدد **شكل** الرمز: *دائرة، مثمن، مربع*.

٤. **استبدل** نقطة أخرى بهذه، إذا كنت بحاجة إلى ذلك.  


### الإجراءات مع المجموعات {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة مجموعة قائمة المسار أندرويد](@site/static/img/personal/tracks/track_menu_group_menu_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة مجموعة قائمة المسار iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

تفتح *قائمة النقاط الثلاث* ( &#8285; ) *قائمة مجموعة* نقاط الطريق.

**الإجراءات:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - يسمح لك بعرض أو عدم عرض نقاط طريق المجموعة على الخريطة. أو يمكنك استخدام [زر الشاشة](#points--waypoints) لعرض أو إغفال نقاط طريق المجموعة على الخريطة.
- **<Translate android="true" ids="shared_string_rename"/>** - تغيير اسم المجموعة.
- **<Translate android="true" ids="change_default_appearance"/>** - تغيير خيارات العرض لمجموعة من نقاط الطريق.
- **<Translate android="true" ids="add_group_to_markers"/>** أو **إزالة** (*أندرويد فقط*) - نقل نقاط طريق المجموعة إلى قائمة [علامات الخريطة](../../personal/markers.md).
- **<Translate android="true" ids="add_to_favorites"/>** (*أندرويد فقط*) - يسمح لك بنسخ المجموعة المحددة من نقاط الطريق إلى [المفضلة](../../personal/favorites.md). يمكنك اختيار إحدى خيارين: ***<Translate android="true" ids="copy_as_new_folder"/>*** أو ***<Translate android="true" ids="add_to_a_folder"/>***.
- **<Translate android="true" ids="add_to_navigation"/>**  (*أندرويد فقط*) - ينشئ مسارًا بين نقاط الطريق. تصبح النقطتان الأولى والأخيرة بداية ونهاية المسار، ويتم تحويل الباقي إلى نقاط وسيطة.
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

إدارة رؤية المجموعات على الخريطة: إذا قمت بإخفاء مسار واحد، فسيتم إخفاء المجموعة بأكملها أيضًا.  

يمكنك تشغيل أو إيقاف تشغيل نقاط طريق المجموعة على الخريطة باستخدام الزر الموجود في الزاوية اليمنى العليا من قائمة سياق المسار على الخريطة. انقر عليه وحدد الإجراء المطلوب.

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

<summary>مثال على كود XML لعلامات نقاط الطريق</summary>

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

<summary>مثال على كود XML لعلامات نقاط المسار</summary>

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
| `name` | **الاسم** هو اسم النقطة. يُسمح بأي أحرف.  |
| `desc` | **الوصف** يحتوي على معلومات إضافية حول النقطة. |
| `type` | **تحديد مجموعة** هو اسم مجلد OsmAnd الذي يتم فيه حفظ نقطة الطريق هذه. |
| `cmt` | **تعليق** هو تعليق قصير على نقطة. |
| `link` | **الرابط** هو رابط لأي مصادر. |
| `ele` | **الارتفاع** هو ارتفاع النقطة. |


**الامتدادات:**  

| الامتداد | الوصف |
| --- | --- |
| `osmand:icon` | **الرمز** هو اسم الرمز الذي حددته. |
| `osmand:color` | **اللون** هو اللون بتنسيق HEX.  |
| `osmand:background` | **الخلفية** هي شكل الرمز، مثل دائرة أو مثمن أو مربع. |
| `osmand:country` | **البلد** هو اسم البلد.  |
| `osmand:address` | **العنوان** هو العنوان.  |
| `osmand:postcode` | **الرمز البريدي** هو الرمز البريدي.  |
| `osmand:telephone` | **الهاتف** هو رقم الهاتف.  |
| `osmand:state` | **الولاية** هو اسم الولاية.  |
| `osmand:start_date` | **تاريخ البدء** هو بيانات الجدول الزمني لنقطة.  |

يتم تسجيل نقاط الطريق مع المسار في [ملف GPX](../../../technical/osmand-file-formats/osmand-gpx.md). كل من نقاط الطريق هذه لها مجموعة علامات خاصة بها للوصف. جميع العلامات المتعلقة مباشرة بوصف نقاط الطريق التي يمكن تحريرها مباشرة في تطبيق OsmAnd مدرجة في هذا القسم.  
لتغيير وصف نقطة الطريق، يمكنك اتباع إحدى الطرق التالية:
  
١. ابحث عن المسار المطلوب في قائمة علامة التبويب *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab* list.
٢. انقر على المسار على الخريطة، إذا كان مدرجًا في [قائمة المسارات المرئية](../tracks/index.md#display-tracks-on-the-map).
٣. انقر على نقطة الطريق المطلوبة إذا كانت [مرئية](../../personal/tracks/manage-tracks.md#track-menu) على الخريطة.  

    ثم في [قائمة سياق المسارات](./track-context-menu.md) انقر على *النقاط*، حقل المجلد المطلوب مع نقاط الطريق المتاحة ونقطة الطريق التي تبحث عنها. حدد قائمة *الإجراءات ←* **تحرير نقطة طريق GPX** وقم بإجراء التغييرات. لا يمكنك تغيير تاريخ إنشاء نقطة، *الطابع الزمني*، في التطبيق.  

**علامات المرافق** التي تصف معلومات إضافية، مثل ساعات العمل أو رقم الهاتف، الخاصة بالنقاط المهمة تأخذ تلك المعلومات من بيانات OpenStreetMap أو البيانات التي أدخلتها عند إنشاء النقطة المهمة. يمكنك تحرير هذه العلامات و[العلامات المخصصة](#display-custom-gpx-tags) فقط في كود ملف GPX، والذي يمكنك فتحه بأي محرر نصوص على جهازك.


## التحليل حسب الفواصل {#analyze-by-intervals}

<InfoAndroidOnly />

![تقسيم المسار في أندرويد](@site/static/img/personal/tracks/split_by_1.png) 

تتيح خيار **التحليل حسب الفواصل** تقسيم مسار إلى أقسام وعرض إحصائيات مفصلة لكل جزء من المسار. يمكن تقسيم المسارات حسب معلمات ***المسافة***، ***الوقت***، أو ***الصعود/الهبوط***. 

لفتح هذا الخيار:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → اختر وضع التقسيم المطلوب 


### التقسيم حسب المسافة {#split-by-distance}

![علامة تبويب تقسيم المسار حسب المسافة](@site/static/img/personal/tracks/split_by_2_new_tab.png) ![خريطة تقسيم المسار حسب المسافة](@site/static/img/personal/tracks/split_by_2_map.png)  

يسمح هذا الخيار بتقسيم مسار إلى فواصل مسافة ثابتة وتحليل إحصائيات مفصلة لكل قطعة. الفواصل المسافية المتاحة هي ***20 م***، ***50 م***، ***100 م***، ***200 م***، ***500 م***، ***1 كم***، ***2 كم***، ***5 كم***، و***10 كم***. بعد اختيار فاصل مسافة، يتم عرض المسار كقائمة من القطع. 

لكل قطعة، يمكنك رؤية:
- المسافة المقطوعة.
- الفاصل الزمني.
- متوسط الارتفاع، والحد الأدنى والأقصى.
- الصعود والهبوط.
- الوقت في الحركة.
- متوسط السرعة والسرعة القصوى.

عند النقر على أي قطعة في القائمة، تعرض عرض الخريطة المسار الكامل مع فواصله وتفتح قائمة السياق للمسار في أسفل الشاشة.


### التقسيم حسب الوقت {#split-by-time}

![علامة تبويب تقسيم المسار حسب الوقت](@site/static/img/personal/tracks/split_by_3_new_tab.png) ![خريطة تقسيم المسار حسب الوقت](@site/static/img/personal/tracks/split_by_3_map.png) 

يقسم خيار **التقسيم حسب الوقت** مسارًا إلى فواصل زمنية متساوية المدة. يمكنك الاختيار بين ***1 دقيقة***، ***2 دقيقة***، ***2.5 دقيقة***، ***5 دقائق***، ***10 دقائق***، ***15 دقيقة***، ***30 دقيقة***، و***60 دقيقة***. الطريقة التي يتم بها عرض الفواصل، والإحصائيات المقدمة لكل قطعة، وكيفية ظهورها على الخريطة هي نفسها كما في قسم [التقسيم حسب المسافة](#split-by-distance).


### التقسيم حسب الصعود/الهبوط {#split-by-uphill-downhill}

![علامة تبويب تقسيم المسار حسب الصعود/الهبوط](@site/static/img/personal/tracks/split_by_4_new_tab.png) ![خريطة تقسيم المسار حسب الصعود/الهبوط](@site/static/img/personal/tracks/split_by_4_map.png) 

يقسم هذا الخيار مسارًا إلى قطع بناءً على تغييرات الارتفاع. يتم تصنيف كل فاصل كـ ***صعود***، ***هبوط***، أو ***مسطح***. الطريقة التي يتم بها عرض الفواصل، والإحصائيات المقدمة لكل قطعة، وكيفية ظهورها على الخريطة هي أيضًا نفسها كما في قسم [التقسيم حسب المسافة](#split-by-distance).


### مقاييس معدل ضربات القلب {#heart-rate-metrics}

![مقاييس معدل ضربات القلب](@site/static/img/personal/tracks/heart_rate.png)

يسمح هذا الخيار برؤية قيم متوسط معدل ضربات القلب، والحد الأدنى، والأقصى (نبضات في الدقيقة، نبض/دق) لكل فاصل من مسارك. يؤخذ بيانات معدل ضربات القلب من ملف GPX للمسار أو يتم تسجيلها مباشرة من [مستشعر معدل ضربات القلب الخارجي المتصل](https://osmand.net/docs/user/plugins/external-sensors) (BLE). إذا لم تكن بيانات معدل ضربات القلب متاحة، فسيتم إخفاء هذا الصف في جدول الفاصل.

**ملاحظة:** يمكنك الاتصال بمراقب معدل ضربات القلب BLE عبر *<Translate android="true" ids="shared_string_plugin,external_sensors_plugin_name"/>* لتسجيل بيانات HR مباشرة في OsmAnd.


## مرشح GPS {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![شاشة مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

يسمح لك هذا المرشح بتحسين إحصائيات مسارك عن طريق استبعاد البيانات غير الضرورية أو غير الصحيحة. يمكنك ترشيح نقاط المسار التي لا تتناسب مع معلمات مسارك، ونتيجة لذلك، الحصول على رسم بياني أكثر دقة وخط مسار مرئي بدون تشويه أو ضوضاء تسجيل. يمكنك إجراء تغييرات باستخدام مرشحات مثل *التنعيم*، و*السرعة*، و*الارتفاع*، و*دقة GPS*، والتي تخفي النقاط المرشحة من المسار الحالي. بالإضافة إلى ذلك، في قائمة *الإحصائيات*، يمكنك التحقق من كيفية عرض تغييراتك على الرسم البياني قبل حفظها. يمكنك أيضًا *إعادة التعيين إلى الأصل* و*حفظ كنسخة* من مسارك في هذا المرشح دون حفظ المسار الأصلي.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

تتضمن صفحة تطبيق مرشح GPS في أندرويد ما يلي:  

- خريطة بها مسار محفوظ وزر إضافي، *موقع مساري* (يقوم بمحاذاة المسار إلى مركز الخريطة).
- أزرار *تحديث* و*قائمة* في الأعلى (*القائمة* تفتح حقل *الإجراء* في أسفل الصفحة).
- كتل *المرشح*، و*الإحصائيات*، و*الإجراء*.  


### قائمة المرشح {#filter-menu}

في هذه القائمة، يمكنك تغيير بعض معلمات مسارك مثل *التنعيم*، أو *السرعة*، أو *الارتفاع*، أو *دقة GPS* باستخدام المرشحات. تنقسم القائمة إلى *جزء النقاط* و*جزء الإجراءات*.

| ***النقاط*** |
|:------------|
|يعرض هذا الجزء عدد النقاط بعد الترشيح والعدد الإجمالي للنقاط على المسار المحدد قبل استخدام المرشحات.|
|![أرقام نقاط شاشة مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***الإجراءات*** |
|*التنعيم*. يحدد عتبة المسافة بين النقاط. يتم إخفاء نقاط المسار التي تبعد على الأقل هذه المسافة عن آخر نقطة مرئية. سيتم إخفاء جميع النقاط على المسار التي تكون المسافة بينها أقل من المسافة المحددة بواسطة المرشح. يتم حساب نقاط المسار من آخر نقطة مرئية. لاحظ أن العتبات العالية يمكن أن تبسط هندسة المسار بشكل مفرط.|
|![أرقام تنعيم مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*السرعة*. يتم عرض نقاط المسار المقابلة لفاصل السرعة المحدد فقط على الرسم البياني والخريطة، ويتم إخفاء الأخرى.|
|![أرقام سرعة مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*الارتفاع*. يتم عرض نقاط المسار المقابلة لفاصل الارتفاع المحدد فقط على الرسم البياني والخريطة، ويتم إخفاء الأخرى.|
|![أرقام ارتفاع مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*دقة GPS*. يحدد القيمة القصوى المسموح بها لـ HDOP. يتم إخفاء النقاط ذات القيمة الأعلى.|
|![أرقام دقة مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### الإحصائيات {#statistics}

![الرسم البياني لمرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_graph_statistics_new_andr.png)

تعرض علامة تبويب الإحصائيات معلومات حول المسار **المعدل**، أي المسار بدون القيم المرشحة. يتم عرضه في كتل الإحصائيات وبيانات الرسم البياني.
  
- يعرض جزء *البيانات* إحصائيات مشابهة لـ [قائمة المرشح](#filter-menu).  
- يعرض جزء *الرسم البياني* ثلاثة أنواع من الرسوم البيانية حسب المعلمات: نظرة عامة، والارتفاع، والسرعة. هذه الوظيفة هي نسخة من [الرسم البياني للمسار](#altitude--speed-graphs).

### الإجراءات {#actions}

![إجراء مرشح GPS في أندرويد](@site/static/img/personal/tracks/gps_filter_action_android.png)

قائمة الإجراءات متاحة في أسفل علامة التبويب **المرشح** أو **الإحصائيات**. يطبق OsmAnd جميع التغييرات التي تم إجراؤها على المسار دون تحديث الملف، ولكن يمكنك حفظ التغييرات يدويًا.

- *<Translate android="true" ids="reset_to_original"/>*. يسمح لك بإعادة المعلمات إلى حالتها الأصلية.  
- *<Translate android="true" ids="save_as_copy"/>*. يسمح لك بحفظ المسار كمسار جديد.
- *<Translate android="true" ids="save_changes_into_file"/>*. يسمح لك بإعادة كتابة المسار بالمعلمات الجديدة.  


## مقالات ذات صلة {#related-articles}

- [مسارات GPX](../../personal/tracks/manage-tracks.md)
- [المسارات على الخريطة](./track-context-menu.md)
- [الملاحة حسب المسار](../../navigation/setup/gpx-navigation.md)
- [تخطيط المسار](../../plan-route/index.md)
- [ملحق تسجيل الرحلات](../../plugins/trip-recording.md)
- [التحليل على الخريطة](../tracks/index.md#analyze-track-on-map)