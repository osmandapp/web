---
source-hash: f1188d09955bc3e6f60dd73a49f429e588c513aea0cfc5bf7e9e38efe46e0dc9
sidebar_position: 3
title:  الودجات المعلوماتية
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

توفر لك الودجات المعلوماتية وصولاً سريعًا إلى البيانات الهامة. يمكن أن تكون هذه البيانات متعلقة بالسرعة، الطقس، موقع الركن، بيانات من أجهزة استشعار خارجية، وغير ذلك الكثير. يمكن تهيئة الودجات وفقًا لمتطلباتك الخاصة، مما يتيح إظهارها على شاشة التطبيق أو تعطيلها عند الضرورة.

![الودجات المعلوماتية](@site/static/img/widgets/informational_widgets_all.png)


## ودجات الارتفاع {#altitude-widgets}

تعرض ودجات الارتفاع الارتفاع فوق مستوى سطح البحر للموقع الجغرافي الحالي وارتفاع مركز الخريطة.


### الارتفاع: الموقع الحالي {#altitude-current-location}

:::note تنزيل تصحيح الارتفاع العالمي
في بعض أجهزة أندرويد، قد يظهر الارتفاع بشكل غير دقيق. لحل هذه المشكلة، قم بتنزيل خريطة مع تصحيح الارتفاع.

- اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- لمزيد من التفاصيل، قم بزيارة [الخرائط والموارد](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة الارتفاع أندرويد](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة الارتفاع iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدات الطول* |


### الارتفاع: مركز الخريطة {#elevation-map-center}

:::info ميزة مدفوعة
&nbsp;<ProFeature/> للحصول على إمكانية استخدام ودجة *الارتفاع: مركز الخريطة*، اشترك في OsmAnd Pro لـ [أندرويد](../purchases/android.md#pro-features) أو [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة الارتفاع أندرويد](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة الارتفاع iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام الودجة لمعرفة ارتفاع مركز الخريطة الحالي فوق مستوى سطح البحر. يلزم وجود [خريطة تضاريس (تظليل التلال والمنحدرات)](../plugins/topography.md#download-maps) للمنطقة المطلوبة لعرض المعلومات في **ودجة الارتفاع: مركز الخريطة**.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدات الطول* |


## الوقت الحالي {#current-time}

![ودجة الوقت الحالي](@site/static/img/widgets/current_time_widget.png)

تعرض هذه الودجة الوقت الحالي المأخوذ من جهازك.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_plain_time"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | إعدادات الجهاز تهيئ الوقت والتنسيق. |


## السرعة الحالية {#current-speed}

![ودجة السرعة](@site/static/img/widgets/current_speed_widget.png)

تعرض الودجة السرعة الحالية التي يكتشفها مستشعر GPS.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_current_speed"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## متوسط السرعة {#average-speed}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة متوسط السرعة أندرويد](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة متوسط السرعة iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

تقوم ودجة **متوسط السرعة** بحساب وعرض متوسط سرعتك خلال فترة زمنية محددة دون الحاجة إلى التنقل أو تسجيل المسار. وهي مفيدة لمراقبة الامتثال للسرعة على الطرق السريعة أو تتبع متوسط السرعة خلال الدقائق القليلة الأخيرة من ركوب الدراجات.

1. ***تهيئة الودجة.***
   لضبط الإعدادات، انقر على زر **الإعدادات** (*أندرويد*) أو **حقل الودجة** (*iOS*). تشمل الخيارات المتاحة:

2. ***الفاصل الزمني.***

   - يتم حساب متوسط السرعة بناءً على الفاصل الزمني المحدد، والذي يمكن أن يتراوح من **15 ثانية إلى 60 دقيقة**.

   - يعتمد الحساب على بيانات GPS باستخدام الصيغة:
   `متوسط السرعة = متوسط (GPS_LOCATION.speed)`.

3. ***أخذ التوقفات في الاعتبار.***

   **ممكّن** — إذا كانت السرعة المسجلة أقل من 1 وحدة في الساعة، يتم تجاهلها، مما يمنع الانخفاضات غير الضرورية في متوسط السرعة عند التوقف عند إشارات المرور أو أخذ فترات راحة قصيرة.

   **معطّل** — يتم تضمين التوقفات في الحساب، مما يعني أن فترات التوقف الطويلة ستقلل من متوسط السرعة الإجمالي.

4. ***إعادة تعيين متوسط السرعة.***
   يمكنك إعادة تعيين حساب متوسط السرعة بطريقتين:

   - انقر مطولاً على الودجة لفتح [قائمة السياق](../widgets/configure-screen.md#widget-context-menu)، واختر *إعادة تعيين متوسط السرعة*.
   - افتح *إعدادات الودجة* عبر [قائمة تهيئة الشاشة](../widgets/configure-screen.md#settings) واختر خيار إعادة التعيين.

بعد إعادة التعيين، يتم إعادة حساب متوسط السرعة من بيانات GPS الجديدة. هذه الميزة مفيدة لمراقبة السرعة في الوقت الفعلي، مثل تتبع السرعة في المناطق التي تحتوي على **كاميرات مراقبة متوسط السرعة**.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![متوسط السرعة](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجات متوسط السرعة](@site/static/img/widgets/average_speed_widget_ios_1.png) ![ودجات متوسط السرعة](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_average_speed"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu). <br/> يمكن استخدامه لإعادة تعيين متوسط السرعة. |


## نسبة الانزلاق {#glide-ratio}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

|الودجات| الودجات على الشاشة|
|:--------|:---------|
|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_3.png)|![نسبة الانزلاق](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|الودجات| الودجات على الشاشة|
|:--------|:---------|
|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>

توفر ودجات *نسبة الانزلاق* [البسيطة](../widgets/configure-screen.md#widgets-for-all-panels) معلومات قيمة حول نسبة الانزلاق للمساعدة في اتخاذ قرارات مستنيرة عند تخطيط المسارات الجوية. تساعد ودجة *نسبة الانزلاق* في OsmAnd على تقييم كفاءة هبوطك أو صعودك عند التنقل إلى موقع معين (موضع [علامة](../personal/markers.md) على الخريطة). تحسب نسبة الانزلاق كنسبة المسافة إلى الفرق في الارتفاع بين موقعك الحالي ووجهتك المقصودة. يمكنك قراءة المزيد حول هذا [هنا](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**استخدامات الودجات:**

- *تخطيط رحلات التحليق.* بالنسبة لطياري التحليق، تصبح ودجة *نسبة الانزلاق إلى الهدف* أداة لا غنى عنها عند تخطيط وتنفيذ رحلات التحليق. يمكن للطيارين تقدير المسافة التي يمكنهم الطيران إليها بالنظر إلى الظروف الحالية ونسبة الانزلاق المطلوبة.
- *تحسين الصعود والهبوط.* يسمح متوسط نسبة الانزلاق للطيارين بتحسين الصعود والهبوط بناءً على الظروف الحالية. يمكن للطيارين اختيار التوقيت الأمثل للصعود لزيادة وقت الطيران إلى أقصى حد، أو للهبوط للوصول إلى نقطة الهدف.
- *التفاعل مع الظروف المتغيرة.* توفر الودجة تحديثات مستمرة لنسبة الانزلاق، مما يسمح للطيارين بالتفاعل فورًا مع التغيرات في الظروف الجوية أو المسارات. يمكنهم تعديل خطة طيرانهم لضمان السلامة والكفاءة.
- *الاستخدام الأقصى للمسافة الأفقية.* معرفة نسبة الانزلاق تسمح للطيارين بزيادة استخدام المسافة الأفقية للانتقال إلى الهدف، وهو أمر مهم بشكل خاص عند تخطيط الرحلات الطويلة.
- *تقليل المخاطر*. تساعد ودجة *نسبة الانزلاق إلى الهدف* الطيارين على تجنب المواقف التي يصبح فيها الوصول إلى الهدف مستحيلاً بسبب عدم كفاية نسبة الانزلاق. وهذا يساعد على تقليل المخاطر وتحسين سلامة الطيران.


**القيم الموجبة والسالبة:**

- **القيم الموجبة** تشير إلى أن وجهتك على ارتفاع أقل من موقعك الحالي، مما يتطلب الهبوط.
- **القيم السالبة** تشير إلى أن وجهتك على ارتفاع أعلى، مما يستلزم الصعود. على سبيل المثال، "-90:1" تعني أنه بعد قطع مسافة 90 كيلومترًا، تحتاج إلى الصعود بمقدار كيلومتر واحد للوصول إلى وجهتك.


**التقريب/التنسيق:**

- قيمة **≤ 0.1**:
  - "0.05" تُعرض كـ "0".
- قيمة **> 0.1 و < 100**:
  - على سبيل المثال، "50.7643" تُعرض كـ "50.8:1".
- قيمة **> 100:**
  - "102.35" تُعرض كـ "102:1."


### نسبة الانزلاق إلى الهدف {#glide-ratio-to-target}

- **نسبة الانزلاق إلى الهدف** تُظهر نسبة الانزلاق الدقيقة المطلوبة للوصول إلى نقطة الهدف.
- **ارتفاع الهدف** يُظهر ارتفاع نقطة الهدف. يجب استخدام [علامة الخريطة](../personal/markers.md) كنقطة الهدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← نسبة الانزلاق* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← نسبة الانزلاق* |
| بالنقر | يغير *نسبة الانزلاق إلى الهدف* أو *ارتفاع الهدف* |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### متوسط نسبة الانزلاق {#average-glide-ratio}

- **متوسط نسبة الانزلاق** يُظهر متوسط نسبة الانزلاق لفاصل زمني محدد.
- **متوسط السرعة العمودية** يشير إلى المعدل الذي يصعد أو يهبط به الجسم بمرور الوقت. يتم أخذ النقطتين الأولى والأخيرة فقط من الفاصل الزمني في الاعتبار للتقييم. يمكنك تعيين الفاصل الزمني لهذه الودجة من 15 ثانية إلى 60 دقيقة. يجب استخدام [علامة الخريطة](../personal/markers.md) كنقطة الهدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← نسبة الانزلاق* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← نسبة الانزلاق* |
| بالنقر | يغير *متوسط نسبة الانزلاق* أو *متوسط السرعة العمودية* |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


## مستوى البطارية {#battery-level}

![ودجة مستوى البطارية](@site/static/img/widgets/battery_level_widget.png)

تعرض ودجة **مستوى البطارية** نسبة بطارية جهازك مباشرة على شاشة الخريطة وتُحدّث تلقائيًا مرة واحدة على الأقل في الدقيقة.

- **iOS 17 والإصدارات الأحدث** — بسبب **قيود الخصوصية**، تتوفر بيانات مستوى البطارية بزيادات 5% فقط (على سبيل المثال، 35%، 60%، أو 85%). هذا قيد نظام تفرضه Apple.

- أجهزة **أندرويد** — تعرض الودجة نسبة البطارية الدقيقة كما يبلغ عنها النظام، دون تقريب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_battery"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


## ودجة الإحداثيات {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة الإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_1.png) ![ودجة الإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة الإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

تقدم OsmAnd نوعين من ودجات الإحداثيات:

- **الإحداثيات: مركز الخريطة** - تُظهر الإحداثيات الجغرافية لمركز الخريطة الحالي.
- **الإحداثيات: الموقع الحالي** - تُظهر الإحداثيات الجغرافية للموقع الجغرافي الحالي.

تُعرض ودجات الإحداثيات في الجزء العلوي من الشاشة. تُظهر الأيقونات ذات الخلفية الخضراء خطوط العرض والطول للنقطة في مركز الجزء المرئي من الخريطة، وتُظهر الأيقونات ذات الخلفية الزرقاء إحداثيات موقعك الحالي. يمكن العثور على معلومات حول *تنسيقات الإحداثيات* المدعومة في مقال *[البحث عن الإحداثيات](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> ← <Translate ios="true" ids="coordinates"/>* |
| بالنقر | ينسخ الإحداثيات إلى الحافظة. |
| التنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) أو <Translate android="true" ids="configure_profile"/> (أندرويد) ← <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## معلومات GPS {#gps-info}

<InfoAndroidOnly />

![ودجة معلومات GPS أندرويد](@site/static/img/widgets/gps_info_widget.png)

تُظهر ودجة معلومات GPS (نظام تحديد المواقع العالمي) عدد الأقمار الصناعية التي يكتشفها الجهاز ويستخدمها حاليًا. يمكنك استخدامها للتحقق من حالة GPS في حالة ضعف الإشارة.

يمكنك إعادة تعيين ذاكرة التخزين المؤقت الحالية لـ GPS من خلال:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_gps_info"/>* |
| بالنقر | يفتح قائمة حالة GPS باستخدام أدوات الطرف الثالث لتهيئة جهاز GPS المدمج. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


## موقع الشمس {#sun-position}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجات غروب وشروق الشمس](@site/static/img/widgets/sun_position.png) ![ودجات غروب وشروق الشمس](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجات غروب وشروق الشمس](@site/static/img/widgets/sun_position_4_ios.png) ![ودجات غروب وشروق الشمس](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

تُظهر ودجات موقع الشمس أوقات شروق وغروب الشمس التالية لمركز الخريطة. عند النقر عليها، تعرض الوقت المتبقي حتى غروب الشمس أو شروقها المتوقع. في كلتا الحالتين، يعتمد الوقت على الوقت المُهيأ لجهازك.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_sun_position"/> ← <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_sun_position"/> ← <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| بالنقر | التبديل بين الوقت المتبقي ووقت شروق/غروب الشمس التالي. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


## مسطرة نصف القطر {#radius-ruler}

:::note
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[مسطرة نصف القطر والمسطرة](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![شاشة مسطرة نصف القطر](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="مسطرة نصف القطر"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="مسطرة نصف القطر"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="مسطرة نصف القطر"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

تُظهر ودجة مسطرة نصف القطر المسافة بين موقعك ونقطة مركز مسطرة نصف القطر. نصف قطر الدائرة الأولى يساوي [مقياس الخريطة](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="map_widget_ruler_control"/>* |
| بالنقر | يغير حالة الودجة بين وضع المقياس الأسود، والتدرج الرمادي، والأوضاع غير المرئية. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |


## عداد السرعة {#speedometer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![عداد السرعة](@site/static/img/widgets/speedometer_1_andr.png) ![عداد السرعة](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عداد السرعة](@site/static/img/widgets/speedometer_1_ios.png) ![عداد السرعة](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**ودجة عداد السرعة** هي عرض رسومي للسرعة الحالية للمركبة بناءً على *البيانات المستلمة من نظام تحديد المواقع العالمي (GPS)*. تسمح لك بمراقبة التوافق في الوقت الفعلي بين سرعتك والحد الأقصى للسرعة المسموح بها. يتم توفير الحد الأقصى للسرعة المسموح بها بواسطة [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) لقسم طريق معين وإعداد [تسامح حد السرعة](../navigation/guidance/voice-navigation.md#speed-limit) في OsmAnd.

- في *إعدادات عداد السرعة*، يمكنك تحديد حجم (**الارتفاع**) للودجة على شاشة التطبيق كـ *صغير*، *متوسط* أو *كبير*.
- يمكنك تحديد متى تتلقى **تحذير حد السرعة،** باختيار *دائمًا* أو *عند التجاوز*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="عداد السرعة"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="عداد السرعة"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *← عداد السرعة* |
| التنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |


## ودجات المكونات الإضافية {#plugin-widgets}

يتم تمكين هذه الودجات وتعمل بالاشتراك مع المكونات الإضافية المقابلة لها.


### ودجات تسجيل الرحلة {#trip-recording-widgets}

:::note
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[مكون <Translate android="true" ids="record_plugin_name"/> الإضافي](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة تسجيل الرحلة](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة تسجيل الرحلة](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

تشير ودجات تسجيل الرحلة إلى [مكون <Translate android="true" ids="record_plugin_name"/> الإضافي](../plugins/trip-recording.md#widgets). يمكنك استخدام الودجات لعرض معلومات موجزة حول تسجيل المسار على الشاشة. مثل *المسافة*، *المدة*، *الصعود* و *الهبوط*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_monitoring"/>* |
| بالنقر | يبدأ/يوقف تسجيل المسار أو يعرض الرسم البياني. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### ودجات أجهزة الاستشعار الخارجية {#external-sensors-widgets}

:::note
لإضافة ودجات أجهزة الاستشعار الخارجية إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [أجهزة الاستشعار الخارجية الإضافي](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجات أجهزة الاستشعار الخارجية أندرويد](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة تسجيل الرحلة](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

تشير الودجات إلى [مكون أجهزة الاستشعار الخارجية الإضافي](../plugins/external-sensors.md#widgets). يمكنك استخدامها لعرض معلومات موجزة من أجهزة الاستشعار الخارجية الخاصة بك، مثل: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*أندرويد فقط*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** و **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *على iOS*، يمكنك أيضًا تحديد **مستوى بطارية** أجهزة استشعار BLE المتصلة لعرضها مباشرة في الودجة.

- لإضافة ودجة — [قم بتمكين](../plugins/index.md#enable--disable) مكون OsmAnd أجهزة الاستشعار الخارجية الإضافي.

- لإضافة أجهزة استشعار، اختر أحد الخيارات:
  - اذهب إلى *القائمة ← المكونات الإضافية ← أجهزة الاستشعار الخارجية ← الإعدادات ← إقران مستشعر جديد*.
  - اذهب إلى *القائمة ← تهيئة الشاشة ← اختر لوحة ← إضافة ودجة ← أجهزة الاستشعار الخارجية ← اختر مستشعر ← الإعدادات ← إقران مستشعر جديد*.

- أضف الودجات حتى لو لم يتم توصيل مستشعر خارجي.

- **جميع الودجات المضافة مرئية** حتى لو لم يتم توصيل مستشعر خارجي.

- استخدم [مكون تسجيل الرحلة الإضافي](../plugins/trip-recording.md#recording-settings) لتسجيل بيانات المستشعر.

- اقرأ عن كيفية اختيار المستشعر (من نفس النوع) الذي سيتم عرضه في الودجة [هنا](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| بالنقر | لا توجد تغييرات (*أندرويد*) / يغير الوضع بين بيانات المستشعر ومستوى البطارية (*iOS*). |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### ودجات مقاييس المركبة {#vehicle-metrics-widgets}

<InfoAndroidOnly />

:::note
لإضافة ودجات مقاييس المركبة إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [مقاييس المركبة الإضافي](../plugins/vehicle-metrics.md).
:::

![ودجات مقاييس المركبة أندرويد](@site/static/img/widgets/vehicle_metrics_1.png)

تنتمي الودجات إلى [مكون مقاييس المركبة الإضافي](../plugins/vehicle-metrics.md#widgets). يمكنك استخدامها لعرض معلومات من ماسح OBD-II متصل، مثل (*13 مقياسًا*): **درجة حرارة المدخل**، &nbsp; **درجة الحرارة المحيطة**، &nbsp; **درجة حرارة سائل التبريد**، &nbsp; **درجة حرارة زيت المحرك**، &nbsp; **سرعة المحرك** (*مجاني*)، &nbsp; **وقت تشغيل المحرك**، &nbsp; **حمل المحرك المحسوب**، &nbsp; **ضغط الوقود**، &nbsp; **استهلاك الوقود**، &nbsp; **الوقود المتبقي**، &nbsp; **مستوى البطارية**، &nbsp; **سرعة المركبة** (*مجاني*)، و **موضع الخانق**.

- لإضافة ودجات مقاييس المركبة إلى شاشة الخريطة، [قم بتمكين](../plugins/index.md#enable--disable) **مكون مقاييس المركبة الإضافي**.
- يمكنك إضافة ودجات حتى لو لم يتم توصيل ماسح OBD-II.
- جميع الودجات المضافة مرئية سواء كان ماسح OBD-II متصلاً أم لا.
- لتعديل ودجة، انقر على الودجة المضافة إلى اللوحة، ثم انقر على *الإعدادات*، أو انقر مباشرة على *أيقونة الإعدادات* في حقل الودجة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="obd_widget_group"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### ودجات الطقس {#weather-widgets}

:::note
لإضافة ودجات الطقس إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [الطقس الإضافي](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة الطقس أندرويد](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة الطقس iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

تعرض ودجات الطقس معلومات الطقس الحالية لنقطة مركزية على الخريطة. يتم تمكينها تلقائيًا على الشاشة عند عرضها باستخدام المكون الإضافي (*القائمة ← الطقس*)، ويمكنك اختيار أي منها تضعه على الشاشة الرئيسية للاستخدام اليومي (*القائمة ← تخصيص الشاشة*). يمكنك قراءة المزيد عن هذا في مقال [مكون الطقس الإضافي](../plugins/weather.md).

- **درجة الحرارة**. <Translate android="true" ids="temperature_widget_desc"/>
- **ضغط الهواء**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **الرياح**. <Translate android="true" ids="wind_widget_desc"/>
- **السحاب**. <Translate android="true" ids="clouds_widget_desc"/>
- **الهطول**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="shared_string_weather"/>* |
| بالنقر | يُظهر في مربع حوار منبثق التاريخ والوقت عندما تكون معلومات الطقس ذات صلة. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← المكونات الإضافية ← الطقس ← الإعدادات* أو *القائمة ← الإعدادات ← ملف تعريف التطبيق ← الطقس* |


### ودجة الركن {#parking-widget}

:::note
لإضافة ودجات الركن إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [موقع الركن الإضافي](../plugins/parking.md).
:::

![ودجة الركن](@site/static/img/plugins/parking/parking_widget.png)

تُظهر ودجة مكون الركن الإضافي المسافة من مركز الشاشة إلى موقع الركن. لتعيين نقطة ركن على الخريطة، قم بالتكبير إلى المستوى المطلوب، ثم انقر مطولاً على المكان على الخريطة لفتح قائمة السياق. اتبع [هذه الإعدادات](../plugins/parking.md#set-a-spot).

**ملاحظة:** ستظهر ودجة الركن فقط إذا تمت إضافة موقع ركن إلى الخريطة. بدون موقع ركن محفوظ، لن تكون الودجة مرئية.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="parking_place"/>* |
| بالنقر | ينقل عرض الخريطة إلى موقع الركن. |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### ودجة Mapillary {#mapillary-widget}

:::note
لإضافة ودجة Mapillary إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [Mapillary الإضافي](../plugins/mapillary.md).
:::

![ودجة Mapillary](@site/static/img/widgets/mapillary_widget.png)

هذه ودجة مكون Mapillary الإضافي التي توفر وصولاً سريعًا إلى تطبيق Mapillary، والذي يتيح لك إضافة [*صور على مستوى الشارع*](../plugins/mapillary.md#enable-layer). تُضاف الودجة إلى الخريطة تلقائيًا عند تمكين المكون الإضافي.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="mapillary"/>* |
| بالنقر | يفتح تطبيق [Mapillary](https://www.mapillary.com/). |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### ودجة الملاحظات الصوتية/المرئية {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
لإضافة ودجات الملاحظات الصوتية/المرئية إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [الملاحظات الصوتية/المرئية الإضافي](../plugins/audio-video-notes.md).
:::

![ودجة الملاحظات الصوتية والمرئية](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

هذه ودجات مكون الملاحظات الصوتية/المرئية الإضافي التي توفر وصولاً سريعًا لبدء/إيقاف أخذ الملاحظات الصوتية أو المرئية أو الصور.

يمكنك تهيئة الإجراء الذي يتم تحديده افتراضيًا:

- *عند الطلب*. الحالة الافتراضية. يتم عرض مربع حوار اختيار الإجراء في كل مرة.
- *تسجيل صوت* - يسجل ملاحظة صوتية.
- *تسجيل فيديو* - يسمح لك بتسجيل فيديو.
- *التقاط صورة* - يسمح لك بالتقاط صورة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_av_notes"/>* |
| بالنقر | يبدأ / يوقف أخذ ملاحظة |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


### ودجة التتبع {#tracker-widget}

<InfoAndroidOnly />

:::note
لإضافة ودجة التتبع إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [التتبع الإضافي](../plugins/osmand-tracker.md).
:::

لكي يعمل المكون الإضافي والودجة، تحتاج إلى تثبيت [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) من Google Play أو مصادر أخرى.

تُستخدم ودجة مكون OsmAnd Tracker الإضافي هذه للوصول السريع إلى تطبيق OsmAnd Tracker ومشاركة معلومات موقعك مع مستخدمين آخرين. يرسل التطبيق رسائل *الموقع المباشر* إلى الدردشات المحددة خلال فترة زمنية معينة، ويعرض قائمة جهات الاتصال والمجموعات، ويتحقق من الدردشات بحثًا عن رسائل تحتوي على موقعك، والتي يتم عرضها بعد ذلك على الخريطة في OsmAnd.

![ودجة التتبع](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="tracker_item"/>* |
| بالنقر | يفتح تطبيق OsmAnd Online GPS Tracker. |


### ودجات المطورين {#developer-widgets}

:::note
لإضافة ودجات المطورين إلى شاشة الخريطة، قم بتمكين مكون OsmAnd [تطوير OsmAnd الإضافي](../plugins/development.md).
:::

توفر **ودجات المطورين** معلومات حول [سرعة عرض الخريطة](../plugins/development.md#map-rendering-fps-widget) ومعلمات موضع الكاميرا الافتراضية، بما في ذلك [مستوى التكبير](../plugins/development.md#zoom-level)، [المسافة](../plugins/development.md#distance-to-target) إلى مركز الخريطة، [ارتفاع الكاميرا](../plugins/development.md#camera-elevation) و [زاوية الميل](../plugins/development.md#camera-tilt).

#### إطارات عرض الخريطة في الثانية {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجة FPS أندرويد](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجة FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

تعرض [ودجة إطارات عرض الخريطة في الثانية](../plugins/development.md#map-rendering-fps-widget) سرعة عرض الخريطة وعناصرها، مقاسة بالإطارات في الثانية (FPS). تشير قيمة FPS الأعلى إلى عرض أسرع وأداء بصري أكثر سلاسة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


#### ودجات الكاميرا {#camera-widgets}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![ودجات موضع الكاميرا](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![ودجات موضع الكاميرا 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

تسمح لك **ودجات الكاميرا** بمراقبة محاذاة خريطة OsmAnd مع سطح الأرض.

- [ميل الكاميرا](../plugins/development.md#camera-tilt). يعرض زاوية ميل الكاميرا في الوضع المنظوري. القيمة الافتراضية هي 90 درجة (لا يوجد ميل).
- [ارتفاع الكاميرا](../plugins/development.md#camera-elevation). يشير إلى ارتفاع الكاميرا فوق مستوى السطح.
- [مستوى التكبير](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [المسافة من الكاميرا إلى الهدف](../plugins/development.md#distance-to-target). تقيس المسافة بين الكاميرا والموقع المستهدف على الخريطة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة ودجة ← <Translate ios="true" ids="developer_widgets"/>* |
| بالنقر | التبديل بين الأوضاع (*مستوى التكبير*) / لا توجد تغييرات (*أخرى*) |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


#### ذاكرة الوصول العشوائي المتاحة {#available-ram}

<InfoAndroidOnly />

![ودجات متوسط السرعة](@site/static/img/widgets/available_RAM_2_andr.png)

ودجة **ذاكرة الوصول العشوائي المتاحة** هي أداة لمراقبة استخدام ذاكرة جهازك فيما يتعلق بـ OsmAnd. توفر بيانات مفصلة للمساعدة في تحسين أداء التطبيق.

- **ذاكرة الوصول العشوائي المتاحة للتطبيق.** تعرض كمية ذاكرة الوصول العشوائي المتاحة لـ OsmAnd لاستخدامها دون التسبب في مشاكل في الأداء.

- **استخدام ذاكرة الوصول العشوائي للتطبيق** — تُظهر استهلاك ذاكرة الوصول العشوائي الحالي بواسطة OsmAnd.

- **إجمالي ذاكرة الوصول العشوائي للتطبيق** — تشير إلى إجمالي الذاكرة المخصصة لـ OsmAnd، بما في ذلك الذاكرة المستخدمة والمتاحة.

> **ملاحظة**. *قد تختلف *إجمالي ذاكرة الوصول العشوائي المتاحة* اعتمادًا على العمليات الخلفية والتطبيقات الأخرى التي تعمل على جهازك. هذه القيم ديناميكية وتوفر طريقة لتتبع وإدارة استخدام الذاكرة للحصول على أداء OsmAnd ثابت وفعال.*

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة ودجة ← <Translate android="true" ids="developer_widgets"/> ← *ذاكرة الوصول العشوائي المتاحة* |
| بالنقر | لا توجد تغييرات |
| النقر المطول | يفتح [قائمة سياق الودجة](../widgets/configure-screen.md#widget-context-menu) |


## مقالات ذات صلة {#related-articles}

- [تهيئة الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [ودجات الملاحة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [ودجات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: أبريل 2025*