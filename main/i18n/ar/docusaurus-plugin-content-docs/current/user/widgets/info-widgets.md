---
source-hash: 70169cd2998df00b54377d1283470fc9f5a52a674c1e72f22616285dfb57880e
sidebar_position: 3
title: الأدوات الإعلامية
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

توفر الأدوات الإعلامية لك وصولاً سريعاً إلى بيانات مهمة. يمكن أن تكون هذه البيانات حول السرعة، والطقس، وموقع الوقوف، وبيانات من أجهزة استشعار خارجية، وغير ذلك الكثير. يمكن تكوين الأدوات وفقاً لمتطلباتك الخاصة، مما يمكن من إظهارها على شاشة التطبيق أو تعطيلها إذا لزم الأمر.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## أدوات الارتفاع   {#altitude-widgets}

تعرض أدوات الارتفاع الارتفاع فوق مستوى سطح البحر للموقع الجغرافي الحالي وارتفاع مركز الخريطة.  


### الارتفاع: الموقع الحالي   {#altitude-current-location}
  
:::note  تنزيل تصحيح الارتفاع العالمي
على بعض أجهزة أندرويد، قد يظهر الارتفاع بشكل غير دقيق. لحل هذه المشكلة، قم بتنزيل خريطة مع تصحيح الارتفاع.

- اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- لمزيد من التفاصيل، قم بزيارة [الخرائط والموارد](../personal/maps-resources.md#downloads-menu).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Altitude widget Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Altitude widget iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| تمكين |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *القائمة → الإعدادات → ملفات التطبيق → الإعدادات العامة → الوحدات والتنسيقات → وحدات الطول* |  


### الارتفاع: مركز الخريطة {#elevation-map-center}

:::info ميزة مدفوعة
&nbsp;<ProFeature/> للحصول على الوصول إلى استخدام أداة *الارتفاع: مركز الخريطة*، اشترك في OsmAnd Pro لـ [أندرويد](../purchases/android.md#pro-features) أو [آي أو إس](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Elevation widget iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام الأداة لمعرفة ارتفاع مركز الخريطة الحالي فوق مستوى سطح البحر. يجب تنزيل [خريطة التضاريس (التلال المظللة والمنحدرات)](../plugins/topography.md#download-maps) للمنطقة المطلوبة لعرض المعلومات في **أداة الارتفاع: مركز الخريطة**.  

| | |
|:------------|:------------|
| تمكين |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *القائمة → الإعدادات → ملفات التطبيق → الإعدادات العامة → الوحدات والتنسيقات → وحدات الطول* |


## الوقت الحالي {#current-time}

![Current time widget](@site/static/img/widgets/current_time_widget.png)

تعرض هذه الأداة الوقت الحالي المأخوذ من جهازك.  

| | |
|:------------|:------------|
| تمكين |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_plain_time"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | إعدادات الجهاز تكونف الوقت والتنسيق. |


## السرعة الحالية {#current-speed}

![Speed widget](@site/static/img/widgets/current_speed_widget.png)  

تعرض الأداة السرعة الحالية المكتشفة بواسطة مستشعر GPS.  

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_current_speed"/>* |
| بالنقر  | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## السرعة المتوسطة {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Average speed widget Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

تحسب أداة **السرعة المتوسطة** وتعرض سرعتك المتوسطة على مدار فترة زمنية محددة دون الحاجة إلى التنقل أو تسجيل المسار. إنها مفيدة لمراقبة الامتثال للسرعة على الطرق السريعة أو تتبع السرعة المتوسطة على مدار الدقائق القليلة الأخيرة من ركوب الدراجات.

1. ***تكوين الأداة.***  
   لضبط الإعدادات، انقر على زر **الإعدادات** (*أندرويد*) أو **حقل الأداة** (*آي أو إس*). تشمل الخيارات المتاحة:

2. ***فترة زمنية.***

   - يتم حساب السرعة المتوسطة بناءً على الفترة الزمنية المحددة، والتي يمكن أن تتراوح من **15 ثانية إلى 60 دقيقة**.  

   - يعتمد الحساب على بيانات GPS باستخدام الصيغة:  
   `Average Speed = AVERAGE(GPS_LOCATION.speed)`.

3. ***أخذ التوقفات في الاعتبار.***

   **مفعل** — إذا كانت السرعة المسجلة أقل من 1 وحدة في الساعة، فإنها تُتجاهل، مما يمنع الانخفاض غير الضروري في السرعة المتوسطة عند التوقف عند إشارات المرور أو أخذ فترات راحة قصيرة.  

   **معطل** — يتم تضمين التوقفات في الحساب، مما يعني أن الوقفات الطويلة ستقلل من السرعة المتوسطة الإجمالية.

4. ***إعادة تعيين السرعة المتوسطة.***
   يمكنك إعادة تعيين حساب السرعة المتوسطة بطريقتين:

   - النقر الطويل على الأداة لفتح [قائمة السياق](../widgets/configure-screen.md#widget-context-menu)، واختر *إعادة تعيين السرعة المتوسطة*.
   - افتح *إعدادات الأداة* عبر [قائمة تكوين الشاشة](../widgets/configure-screen.md#widget-settings) واختر خيار إعادة التعيين.

بعد إعادة التعيين، يتم إعادة حساب السرعة المتوسطة من بيانات GPS الجديدة. هذه الميزة مفيدة لمراقبة السرعة في الوقت الفعلي، مثل تتبع السرعة في المناطق التي تحتوي على **كاميرات إنفاذ السرعة المتوسطة**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Average speed](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| تمكين |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_average_speed"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu). <br/> يمكن استخدامها لإعادة تعيين السرعة المتوسطة. |


## نسبة الانزلاق {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/static/img/widgets/glide_ratio_3.png)|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Glide ratio](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

توفر أدوات *نسبة الانزلاق* [البسيطة](../widgets/configure-screen.md#widget-panels) معلومات قيمة عن نسبة الانزلاق للمساعدة في اتخاذ قرارات مدروسة عند التخطيط لمسارات الجو. تساعد أداة *نسبة الانزلاق* في OsmAnd على تقييم كفاءة الهبوط أو الصعود عند التنقل إلى موقع محدد (موقع [العلامة](../personal/markers.md) على الخريطة). تحسب نسبة الانزلاق كنسبة المسافة إلى الفرق في الارتفاع بين موقعك الحالي ووجهتك المقصودة. يمكنك قراءة المزيد عن ذلك [هنا](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**استخدام الأدوات:**

- *التخطيط لرحلات الارتفاع.* بالنسبة للطيارين المتخصصين في الارتفاع، تصبح أداة *نسبة الانزلاق إلى الهدف* أداة أساسية عند التخطيط وتنفيذ رحلات الارتفاع. يمكن للطيارين تقدير مدى يمكنهم الطيران إلى هدفهم بناءً على الظروف الحالية والنسبة المطلوبة للانزلاق.
- *تحسين الصعود والهبوط.* تسمح النسبة المتوسطة للانزلاق للطيارين بتحسين الصعود والهبوط بناءً على الظروف الحالية. يمكن للطيارين اختيار التوقيت الأمثل للصعود لتعظيم وقت الطيران، أو للهبوط للوصول إلى نقطة هدف.
- *الرد على الظروف المتغيرة.* توفر الأداة تحديثات مستمرة لنسبة الانزلاق، مما يسمح للطيارين بالرد فوراً على التغييرات في الظروف الجوية أو المسارات. يمكنهم تعديل خطة الطيران لضمان السلامة والكفاءة.
- *الاستفادة القصوى من المسافة الأفقية.* معرفة نسبة الانزلاق تسمح للطيارين بتعظيم استخدام المسافة الأفقية للانتقال إلى الهدف، وهو أمر مهم بشكل خاص عند التخطيط لرحلات طويلة.
- *تقليل المخاطر*. تساعد أداة *نسبة الانزلاق إلى الهدف* الطيارين على تجنب المواقف التي يصبح فيها الوصول إلى الهدف مستحيلاً بسبب نسبة انزلاق غير كافية. هذا يساعد في تقليل المخاطر وتحسين سلامة الطيران.


**القيم الإيجابية والسلبية:**

- **القيم الإيجابية** تشير إلى أن وجهتك في ارتفاع أقل من موقعك الحالي، مما يتطلب هبوطاً.
- **القيم السلبية** تشير إلى أن وجهتك في ارتفاع أعلى، مما يستلزم صعوداً. على سبيل المثال، "-90:1" تعني أنه بعد قطع مسافة 90 كيلومتراً، تحتاج إلى الصعود بمقدار 1 كيلومتر للوصول إلى وجهتك.


**التقريب/التنسيق:**

- القيمة **≤ 0.1**:  
  - "0.05" يتم عرضها كـ "0".
- القيمة **> 0.1 و < 100**:  
  - على سبيل المثال، "50.7643" يتم عرضها كـ "50.8:1".
- القيمة **> 100:**  
  - "102.35" يتم عرضها كـ "102:1."


### نسبة الانزلاق إلى الهدف {#glide-ratio-to-target}

- **نسبة الانزلاق إلى الهدف** تعرض النسبة الدقيقة للانزلاق المطلوبة للوصول إلى نقطة الهدف.
- **ارتفاع الهدف** يعرض ارتفاع نقطة الهدف. يجب استخدام [علامة الخريطة](../personal/markers.md) كنقطة هدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → Glide ratio* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → Glide ratio* |
| بالنقر | يغير *نسبة الانزلاق إلى الهدف* أو *ارتفاع الهدف*  |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### نسبة الانزلاق المتوسطة {#average-glide-ratio}

- **نسبة الانزلاق المتوسطة** تعرض النسبة المتوسطة للانزلاق على مدار فترة زمنية محددة.
- **السرعة العمودية المتوسطة** تشير إلى معدل الصعود أو الهبوط لكائن على مدار فترة زمنية. يتم النظر في النقطتين الأولى والأخيرة فقط من الفترة الزمنية للتقييم. يمكنك تعيين الفترة الزمنية لهذه الأداة من 15 ثانية إلى 60 دقيقة. يجب استخدام [علامة الخريطة](../personal/markers.md) كنقطة هدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → Glide ratio* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → Glide ratio* |
| بالنقر | يغير *نسبة الانزلاق المتوسطة* أو *السرعة العمودية المتوسطة*  |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## مستوى البطارية {#battery-level}

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)  

تعرض أداة **مستوى البطارية** نسبة بطارية جهازك مباشرة على شاشة الخريطة وتحديثها تلقائياً على الأقل مرة واحدة في الدقيقة.

- **آي أو إس 17 وما بعدها** — بسبب **قيود الخصوصية**، تكون بيانات مستوى البطارية متاحة فقط بزيادات 5% (مثل 35%، 60%، أو 85%). هذا قيد نظامي فرضته آبل.

- أجهزة **أندرويد** — تعرض الأداة النسبة الدقيقة للبطارية كما يبلغ عنها النظام، دون تقريب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_battery"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_battery"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## أداة الإحداثيات {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

يقدم OsmAnd نوعين من أدوات الإحداثيات:

- **الإحداثيات: مركز الخريطة** - تعرض الإحداثيات الجغرافية لمركز الخريطة الحالي.
- **الإحداثيات: الموقع الحالي** - تعرض الإحداثيات الجغرافية للموقع الجغرافي الحالي.

تُعرض أدوات الإحداثيات في أعلى الشاشة. تعرض الأيقونات ذات الخلفية الخضراء خط العرض وخط الطول للنقطة في مركز الجزء المرئي من الخريطة، وتلك ذات الخلفية الزرقاء تعرض إحداثيات موقعك الحالي. يمكن العثور على معلومات حول *تنسيقات الإحداثيات المدعومة* في [مقالة البحث عن الإحداثيات](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| بالنقر | ينسخ الإحداثيات إلى الحافظة. |
| تنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (آي أو إس) أو <Translate android="true" ids="configure_profile"/> (أندرويد) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## معلومات GPS   {#gps-info}

<InfoAndroidOnly />

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

تعرض أداة معلومات GPS (نظام تحديد المواقع العالمي) عدد الأقمار الصناعية التي يكتشفها الجهاز ويستخدمها حالياً. يمكنك استخدامها للتحقق من حالة GPS في حالة إشارة ضعيفة.  

يمكنك إعادة تعيين ذاكرة التخزين المؤقت الحالية لـ GPS من خلال:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_gps_info"/>* |  
| بالنقر | يفتح قائمة حالة GPS مع أدوات خارجية لتكوين جهاز GPS الداخلي. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## موقع الشمس {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sunset and sunrise widgets](@site/static/img/widgets/sun_position.png) ![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_4_ios.png) ![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

تعرض أدوات موقع الشمس أوقات شروق الشمس وغروبها التالية لمركز الخريطة. عند النقر عليها، تعرض الوقت المتبقي حتى غروب الشمس أو شروقها المتوقع. في كلا الحالتين، يعتمد الوقت على الوقت المكون لجهازك.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| بالنقر | التبديل بين الوقت المتبقي والوقت للشروق/الغروب التالي. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## مسطرة النصف القطر {#radius-ruler}

:::note  
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[مسطرة النصف القطر والمسطرة](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

تعرض أداة مسطرة النصف القطر المسافة بين موقعك ونقطة المركز لمسطرة النصف القطر. يساوي نصف قطر الدائرة الأولى [مقياس الخريطة](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| بالنقر | يغير حالة الأداة بين مقياس أسود، ودرجات رمادي، وأوضاع غير مرئية. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## عداد السرعة {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Speedometer](@site/static/img/widgets/speedometer_1_andr.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Speedometer](@site/static/img/widgets/speedometer_1_ios.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

أداة **عداد السرعة** هي عرض رسومي لسرعة المركبة الحالية بناءً على *البيانات المستلمة من GPS*. تسمح لك بمراقبة الامتثال في الوقت الفعلي بين سرعتك والحد الأقصى المسموح به للسرعة. يتم توفير الحد الأقصى المسموح به للسرعة من [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) لقسم طريق معين وإعداد [تحمل حد السرعة](../navigation/guidance/voice-navigation.md#speed-limit) في OsmAnd.  

- في *إعدادات عداد السرعة*، يمكنك اختيار حجم (**الارتفاع**) للأداة على شاشة التطبيق كـ *صغير*، *متوسط* أو *كبير*.
- يمكنك تحديد متى تتلقى **تحذير حد السرعة**، باختيار *دائماً* أو *عند التجاوز*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Speedometer"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Speedometer"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Speedometer* |
| تنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## أدوات الإضافات {#plugin-widgets}

تُمكن هذه الأدوات وتعمل بالاشتراك مع الإضافات المقابلة لها.


### أدوات تسجيل الرحلة   {#trip-recording-widgets}

:::note  
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

تشير أدوات تسجيل الرحلة إلى [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md#widgets). يمكنك استخدام الأدوات لعرض معلومات موجزة حول تسجيل المسار على الشاشة. مثل *المسافة*، *المدة*، *الصعود* و*الهبوط*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_monitoring"/>* |
| بالنقر | بدء/إيقاف تسجيل المسار أو عرض الرسم البياني. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### أدوات أجهزة الاستشعار الخارجية {#external-sensors-widgets}

:::note
لإضافة أدوات أجهزة الاستشعار الخارجية إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [أجهزة الاستشعار الخارجية](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![External sensor widgets Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

تشير الأدوات إلى [إضافة أجهزة الاستشعار الخارجية](../plugins/external-sensors.md#widgets). يمكنك استخدامها لعرض معلومات موجزة من أجهزة الاستشعار الخارجية الخاصة بك، مثل: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*أندرويد فقط*)، **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** و**<Translate android="true" ids="external_device_characteristic_temperature"/>**. يمكنك أيضاً اختيار **مستوى البطارية** لأجهزة الاستشعار BLE المتصلة ليتم عرضه مباشرة في الأداة.  

- لإضافة أداة — [تمكين](../plugins/index.md#enable--disable) إضافة أجهزة الاستشعار الخارجية في OsmAnd.

- لإضافة أجهزة استشعار، اختر إحدى الخيارات:
  - اذهب إلى *القائمة → الإضافات → أجهزة الاستشعار الخارجية → الإعدادات → ربط جهاز استشعار جديد*.
  - اذهب إلى *القائمة → تكوين الشاشة → اختر لوحة → أضف أداة → أجهزة الاستشعار الخارجية → اختر جهاز استشعار → الإعدادات → ربط جهاز استشعار جديد*.

- أضف الأدوات حتى لو لم يكن هناك جهاز استشعار خارجي متصل.

- **جميع الأدوات المضافة مرئية** حتى لو لم يكن هناك جهاز استشعار خارجي متصل.

- استخدم [إضافة تسجيل الرحلة](../plugins/trip-recording.md#recording-settings) لتسجيل بيانات الاستشعار.

- اقرأ عن كيفية اختيار أي جهاز استشعار (من نفس النوع) ليتم عرضه في الأداة [هنا](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| بالنقر | لا تغييرات (*أندرويد*) / يغير الوضع بين بيانات الاستشعار ومستوى البطارية (*آي أو إس*). |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### أدوات مقاييس المركبة {#vehicle-metrics-widgets}


:::note
لإضافة أدوات مقاييس المركبة إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [مقاييس المركبة](../plugins/vehicle-metrics.md).
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Vehicle metrics widgets Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vehicle metrics widgets Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


تنتمي الأدوات إلى [إضافة مقاييس المركبة](../plugins/vehicle-metrics.md#widgets). يمكنك استخدامها لعرض معلومات من ماسح OBD-II المتصل، مثل (*14 مقياساً*): **درجة حرارة المدخل**،&nbsp; **درجة الحرارة المحيطة**،&nbsp; **درجة حرارة سائل التبريد**،&nbsp; **درجة حرارة زيت المحرك**،&nbsp; **سرعة المحرك** (*مجاني*)،&nbsp; **وقت تشغيل المحرك**،&nbsp; **الحمل المحسوب للمحرك**،&nbsp; **ضغط الوقود**،&nbsp; **استهلاك الوقود**،&nbsp; **الوقود المتبقي**،&nbsp; **مستوى البطارية**،&nbsp; **جهد المحول**،&nbsp; **سرعة المركبة** (*مجاني*)، و**موضع الخانق**.  

- لإضافة أدوات مقاييس المركبة إلى شاشة الخريطة، [تمكين](../plugins/index.md#enable--disable) **إضافة مقاييس المركبة**.
- يمكنك إضافة الأدوات حتى لو لم يكن ماسح OBD-II متصلاً.
- جميع الأدوات المضافة مرئية سواء كان ماسح OBD-II متصلاً أم لا.
- لتحرير أداة، انقر على الأداة المضافة إلى اللوحة، ثم انقر على *الإعدادات*، أو انقر مباشرة على *أيقونة الإعدادات* في حقل الأداة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة →  <Translate ios="true" ids="obd_plugin_name"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### أدوات الطقس {#weather-widgets}

:::note
لإضافة أدوات الطقس إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [الطقس](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather widget Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather widget iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

تعرض أدوات الطقس معلومات الطقس الحالية لنقطة مركزية على الخريطة. تُمكن تلقائياً على الشاشة عند عرضها مع الإضافة (*القائمة → الطقس*)، ويمكنك اختيار أيها تضعها على الشاشة الرئيسية للاستخدام اليومي (*القائمة → تخصيص الشاشة*). يمكنك قراءة المزيد عن ذلك في مقالة [إضافة الطقس](../plugins/weather.md).

- **درجة الحرارة**. <Translate android="true" ids="temperature_widget_desc"/>
- **ضغط الهواء**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **الرياح**. <Translate android="true" ids="wind_widget_desc"/>
- **الغيوم**. <Translate android="true" ids="clouds_widget_desc"/>
- **الهطول**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="shared_string_weather"/>* |  
| بالنقر | يعرض في نافذة منبثقة التاريخ والوقت الذي تكون فيه معلومات الطقس ذات صلة. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *القائمة → الإضافات → الطقس → الإعدادات* أو *القائمة → الإعدادات → ملف التطبيق → الطقس* |  


### أداة الوقوف {#parking-widget}

:::note
لإضافة أدوات الوقوف إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [موقع الوقوف](../plugins/parking.md).
:::  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)  

تعرض أداة إضافة الوقوف المسافة من مركز الشاشة إلى موقع الوقوف. لتعيين مكان وقوف على الخريطة، قم بالتكبير إلى المستوى المطلوب، ثم النقر الطويل على المكان على الخريطة لفتح قائمة السياق. اتبع [هذه الإعدادات](../plugins/parking.md#set-a-spot).  

**ملاحظة:** ستظهر أداة الوقوف فقط إذا تم إضافة موقع وقوف إلى الخريطة. بدون موقع وقوف محفوظ، لن تكون الأداة مرئية.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="parking_place"/>* |
| بالنقر | ينقل عرض الخريطة إلى موقع الوقوف. |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### أداة Mapillary {#mapillary-widget}

:::note  
لإضافة أداة Mapillary إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [Mapillary](../plugins/mapillary.md).  
:::  

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png)

هذه أداة إضافة Mapillary التي توفر وصولاً سريعاً إلى تطبيق Mapillary، الذي يمكنك من إضافة [*صور مستوى الشارع*](../plugins/mapillary.md#enable-layer). تُضاف الأداة إلى الخريطة تلقائياً عند تمكين الإضافة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="mapillary"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="mapillary"/>* |
| بالنقر | يفتح تطبيق [Mapillary](https://www.mapillary.com/). |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### أداة الملاحظات الصوتية/المرئية {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
لإضافة أدوات الملاحظات الصوتية/المرئية إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md).
:::

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

هذه أدوات إضافة الملاحظات الصوتية/المرئية التي توفر وصولاً سريعاً لبدء/إيقاف أخذ الملاحظات الصوتية أو المرئية أو التصوير الفوتوغرافي.  

يمكنك تكوين الإجراء الذي يتم اختياره افتراضياً:

- *عند الطلب*. الحالة الافتراضية. يتم عرض حوار اختيار الإجراء في كل مرة.
- *تسجيل صوتي* - يسجل ملاحظة صوتية.
- *تسجيل فيديو* - يسمح لك بتسجيل فيديو.
- *التقاط صورة* - يسمح لك بالتقاط صورة.  

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_av_notes"/>*  |
| بالنقر | بدء / إيقاف أخذ ملاحظة  |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### أداة التتبع {#tracker-widget}

<InfoAndroidOnly />

:::note
لإضافة أداة التتبع إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [التتبع](../plugins/osmand-tracker.md).
:::  

ليعمل الإضافة والأداة، تحتاج إلى تثبيت [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) من Google Play أو مصادر أخرى.  

تُستخدم أداة إضافة تتبع OsmAnd للوصول السريع إلى تطبيق تتبع OsmAnd ومشاركة معلومات موقعك مع مستخدمين آخرين. يرسل التطبيق رسائل *الموقع الحي* إلى الدردشات المحددة خلال فترة زمنية معينة، يعرض قائمة بالجهات الاتصال والمجموعات، ويتحقق من الدردشات بحثاً عن رسائل تحتوي على موقعك، والتي يتم عرضها ثم على خريطة في OsmAnd.  

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="tracker_item"/>* |
| بالنقر | يفتح تطبيق OsmAnd Online GPS Tracker. |


### أدوات المطور {#developer-widgets}

:::note
لإضافة أدوات المطور إلى شاشة الخريطة، قم بتمكين إضافة OsmAnd [تطوير OsmAnd](../plugins/development.md).
:::

توفر **أدوات المطور** معلومات حول [سرعة الرسم](../plugins/development.md#map-rendering-fps-widget) للخريطة ومعاملات موقع الكاميرا الافتراضية، بما في ذلك [مستوى التكبير](../plugins/development.md#zoom-level)، [المسافة](../plugins/development.md#distance-to-target) إلى مركز الخريطة، [ارتفاع الكاميرا](../plugins/development.md#camera-elevation) و[زاوية الإمالة](../plugins/development.md#camera-tilt).  

#### إطارات الرسم في الثانية للخريطة {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

تعرض [أداة إطارات الرسم في الثانية للخريطة](../plugins/development.md#map-rendering-fps-widget) سرعة رسم الخريطة وعناصرها، مقاسة بالإطارات في الثانية (FPS). تشير قيمة FPS أعلى إلى رسم أسرع وأداء بصري أكثر سلاسة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


#### أدوات الكاميرا {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera position widgets](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera position Widgets 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

تسمح **أدوات الكاميرا** لك بمراقبة التوافق بين خريطة OsmAnd وسطح الأرض.

- [إمالة الكاميرا](../plugins/development.md#camera-tilt). تعرض زاوية إمالة الكاميرا في وضع المنظور. القيمة الافتراضية هي 90° (بدون إمالة).
- [ارتفاع الكاميرا](../plugins/development.md#camera-elevation). تشير إلى ارتفاع الكاميرا فوق مستوى السطح.
- [مستوى التكبير](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [المسافة من الكاميرا إلى الهدف](../plugins/development.md#distance-to-target). تقيس المسافة بين الكاميرا وموقع الهدف على الخريطة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="developer_widgets"/>* |
|   |  **آي أو إس**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="developer_widgets"/>* |
| بالنقر | التبديل بين الأوضاع (*مستوى التكبير*)  / لا تغييرات (*الآخرين*) |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


#### الذاكرة المتاحة {#available-ram}

<InfoAndroidOnly />

![Average speed widgets](@site/static/img/widgets/available_RAM_2_andr.png)

أداة **الذاكرة المتاحة** هي أداة لمراقبة استخدام ذاكرة جهازك فيما يتعلق بـ OsmAnd. توفر بيانات مفصلة للمساعدة في تحسين أداء التطبيق.

- **الذاكرة المتاحة للتطبيق.** تعرض كمية الذاكرة المتاحة لاستخدام OsmAnd دون التسبب في مشكلات أداء.

- **استخدام الذاكرة للتطبيق** — تعرض الاستهلاك الحالي للذاكرة بواسطة OsmAnd.

- **إجمالي الذاكرة للتطبيق** — تشير إلى إجمالي الذاكرة المخصصة لـ OsmAnd، بما في ذلك الذاكرة المستخدمة والمتاحة.

> **ملاحظة**. *قد يختلف *إجمالي الذاكرة المتاحة* اعتماداً على العمليات الخلفية والتطبيقات الأخرى التي تعمل على جهازك. هذه القيم ديناميكية وتوفر طريقة لتتبع وإدارة استخدام الذاكرة لأداء OsmAnd مستقر وفعال.*

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="developer_widgets"/> → *Available RAM* |
| بالنقر | لا تغييرات |
| النقر الطويل | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## المقالات ذات الصلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات التنقل](./nav-widgets.md)
- [مسطرة النصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)