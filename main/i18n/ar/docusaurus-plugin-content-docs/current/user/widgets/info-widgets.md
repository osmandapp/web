---
source-hash: 27b32890625cf93a03c736a3e9e5b69340ef24cbdda764258f58f7265e15c755
sidebar_position: 3
title: عناصر واجهة المستخدم المعلوماتية
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

توفر لك عناصر واجهة المستخدم المعلوماتية وصولاً سريعًا إلى البيانات الهامة. يمكن أن تكون هذه البيانات متعلقة بالسرعة، الطقس، موقع الركن، بيانات من مستشعرات خارجية، وأكثر من ذلك بكثير. يمكن تهيئة عناصر واجهة المستخدم وفقًا لمتطلباتك الخاصة، مما يتيح رؤيتها على شاشة التطبيق أو تعطيلها إذا لزم الأمر.

![عناصر واجهة المستخدم المعلوماتية](@site/static/img/widgets/informational_widgets_all.png)

## عناصر واجهة المستخدم للارتفاع {#altitude-widgets}

تعرض عناصر واجهة المستخدم للارتفاع الارتفاع فوق مستوى سطح البحر للموقع الجغرافي الحالي وارتفاع مركز الخريطة.

### الارتفاع: الموقع الحالي {#altitude-current-location}

:::note  تنزيل تصحيح الارتفاع العالمي
على بعض أجهزة Android، قد يظهر الارتفاع بشكل غير دقيق. لحل هذه المشكلة، قم بتنزيل خريطة مع تصحيح الارتفاع.

- اذهب إلى: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- لمزيد من التفاصيل، قم بزيارة [الخرائط والموارد](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم للارتفاع أندرويد](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم للارتفاع iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_altitude_current_location"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدات الطول* |

### الارتفاع: مركز الخريطة {#elevation-map-center}

:::info ميزة مدفوعة
&nbsp;<ProFeature/> للحصول على إمكانية استخدام عنصر واجهة المستخدم *الارتفاع: مركز الخريطة*، اشترك في OsmAnd Pro لـ [أندرويد](../purchases/android.md#pro-features) أو [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم للارتفاع أندرويد](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم للارتفاع iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام عنصر واجهة المستخدم لمعرفة ارتفاع مركز الخريطة الحالي فوق مستوى سطح البحر. يلزم وجود [خريطة تضاريس (تظليل التلال والمنحدرات)](../plugins/topography.md#download-maps) للمنطقة المطلوبة لعرض المعلومات في **عنصر واجهة المستخدم الارتفاع: مركز الخريطة**.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_altitude_map_center"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← الإعدادات ← ملفات تعريف التطبيق ← الإعدادات العامة ← الوحدات والتنسيقات ← وحدات الطول* |

## الوقت الحالي {#current-time}

![عنصر واجهة المستخدم للوقت الحالي](@site/static/img/widgets/current_time_widget.png)

يعرض عنصر واجهة المستخدم هذا الوقت الحالي المأخوذ من جهازك.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_plain_time"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_plain_time"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | إعدادات الجهاز تهيئة الوقت والتنسيق. |

## السرعة الحالية {#current-speed}

![عنصر واجهة المستخدم للسرعة](@site/static/img/widgets/current_speed_widget.png)

يعرض عنصر واجهة المستخدم السرعة الحالية التي تم اكتشافها بواسطة مستشعر GPS.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_current_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_current_speed"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |

## متوسط السرعة {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم لمتوسط السرعة أندرويد](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم لمتوسط السرعة iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

يحسب عنصر واجهة المستخدم **متوسط السرعة** ويعرض متوسط سرعتك خلال فترة زمنية محددة دون الحاجة إلى التنقل أو تسجيل المسار. إنه مفيد لمراقبة الامتثال للسرعة على الطرق السريعة أو تتبع متوسط السرعة خلال الدقائق القليلة الماضية من ركوب الدراجات.

1. ***تهيئة عنصر واجهة المستخدم.***
   لضبط الإعدادات، انقر على زر **الإعدادات** (*أندرويد*) أو **حقل عنصر واجهة المستخدم** (*iOS*). الخيارات المتاحة تشمل:

2. ***الفاصل الزمني.***

   - يتم حساب متوسط السرعة بناءً على الفاصل الزمني المحدد، والذي يمكن أن يتراوح من **15 ثانية إلى 60 دقيقة**.

   - يعتمد الحساب على بيانات GPS باستخدام الصيغة:
   `متوسط السرعة = متوسط (GPS_LOCATION.speed)`.

3. ***أخذ التوقفات في الاعتبار.***

   **ممكن** — إذا كانت السرعة المسجلة أقل من 1 وحدة في الساعة، يتم تجاهلها، مما يمنع الانخفاضات غير الضرورية في متوسط السرعة عند التوقف عند إشارات المرور أو أخذ فترات راحة قصيرة.

   **معطل** — يتم تضمين التوقفات في الحساب، مما يعني أن فترات التوقف الطويلة ستقلل من متوسط السرعة الإجمالي.

4. ***إعادة تعيين متوسط السرعة.***
   يمكنك إعادة تعيين حساب متوسط السرعة بطريقتين:

   - انقر طويلاً على عنصر واجهة المستخدم لفتح [قائمة السياق](../widgets/configure-screen.md#widget-context-menu)، واختر *إعادة تعيين متوسط السرعة*.
   - افتح *إعدادات عنصر واجهة المستخدم* عبر [قائمة تهيئة الشاشة](../widgets/configure-screen.md#settings) واختر خيار إعادة التعيين.

بعد إعادة التعيين، يتم إعادة حساب متوسط السرعة من بيانات GPS الجديدة. هذه الميزة مفيدة لمراقبة السرعة في الوقت الفعلي، مثل تتبع السرعة في المناطق التي تحتوي على **كاميرات إنفاذ متوسط السرعة**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![متوسط السرعة](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عناصر واجهة المستخدم لمتوسط السرعة](@site/static/img/widgets/average_speed_widget_ios_1.png) ![عناصر واجهة المستخدم لمتوسط السرعة](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_average_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_average_speed"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu). <br/> يمكن استخدامه لإعادة تعيين متوسط السرعة. |

## نسبة الانزلاق {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

|عناصر واجهة المستخدم| عناصر واجهة المستخدم على الشاشة|
|:--------|:---------|
|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_3.png)|![نسبة الانزلاق](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|عناصر واجهة المستخدم| عناصر واجهة المستخدم على الشاشة|
|:--------|:---------|
|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![نسبة الانزلاق](@site/static/img/widgets/glide_ratio_widget_ios.png)|

</TabItem>

</Tabs>

توفر عناصر واجهة المستخدم [البسيطة](../widgets/configure-screen.md#widgets-for-all-panels) *نسبة الانزلاق* معلومات قيمة حول نسبة الانزلاق للمساعدة في اتخاذ قرارات مستنيرة عند تخطيط المسارات الجوية. يساعد عنصر واجهة المستخدم *نسبة الانزلاق* في OsmAnd على تقييم كفاءة هبوطك أو صعودك عند التنقل إلى موقع معين (موضع [علامة](../personal/markers.md) على الخريطة). يحسب نسبة الانزلاق كنسبة المسافة إلى الفرق في الارتفاع بين موقعك الحالي ووجهتك المقصودة. يمكنك قراءة المزيد عن هذا [هنا](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).

**استخدام عناصر واجهة المستخدم:**

- *تخطيط رحلات الانزلاق.* بالنسبة لطياري الانزلاق، يصبح عنصر واجهة المستخدم *نسبة الانزلاق إلى الهدف* أداة لا غنى عنها عند تخطيط وتنفيذ رحلات الانزلاق. يمكن للطيارين تقدير مدى بعدهم عن هدفهم بالنظر إلى الظروف الحالية ونسبة الانزلاق المطلوبة.
- *تحسين الصعود والهبوط.* يسمح متوسط نسبة الانزلاق للطيارين بتحسين الصعود والهبوط بناءً على الظروف الحالية. يمكن للطيارين اختيار التوقيت الأمثل للصعود لزيادة وقت الطيران، أو للهبوط للوصول إلى نقطة الهدف.
- *الاستجابة للظروف المتغيرة.* يوفر عنصر واجهة المستخدم تحديثات مستمرة لنسبة الانزلاق، مما يسمح للطيارين بالاستجابة فورًا للتغيرات في الظروف الجوية أو المسارات. يمكنهم تعديل خطة طيرانهم لضمان السلامة والكفاءة.
- *الاستخدام الأقصى للمسافة الأفقية.* يسمح معرفة نسبة الانزلاق للطيارين بزيادة استخدام المسافة الأفقية للانتقال إلى الهدف، وهو أمر مهم بشكل خاص عند تخطيط الرحلات الطويلة.
- *تقليل المخاطر*. يساعد عنصر واجهة المستخدم *نسبة الانزلاق إلى الهدف* الطيارين على تجنب المواقف التي يصبح فيها الوصول إلى الهدف مستحيلاً بسبب عدم كفاية نسبة الانزلاق. وهذا يساعد على تقليل المخاطر وتحسين سلامة الطيران.

**القيم الإيجابية والسلبية:**

- **القيم الإيجابية** تشير إلى أن وجهتك على ارتفاع أقل من موقعك الحالي، مما يتطلب الهبوط.
- **القيم السلبية** تشير إلى أن وجهتك على ارتفاع أعلى، مما يستلزم الصعود. على سبيل المثال، "-90:1" يعني أنه بعد تغطية مسافة 90 كيلومترًا، تحتاج إلى الصعود بمقدار 1 كيلومتر للوصول إلى وجهتك.

**التقريب/التنسيق:**

- القيمة **≤ 0.1**:
  - "0.05" تُعرض كـ "0".
- القيمة **> 0.1 و < 100**:
  - على سبيل المثال، "50.7643" تُعرض كـ "50.8:1".
- القيمة **> 100:**
  - "102.35" تُعرض كـ "102:1".

### نسبة الانزلاق إلى الهدف {#glide-ratio-to-target}

- **نسبة الانزلاق إلى الهدف** تُظهر نسبة الانزلاق الدقيقة المطلوبة للوصول إلى نقطة الهدف.
- **ارتفاع الهدف** يُظهر ارتفاع نقطة الهدف. يجب استخدام [علامة الخريطة](../personal/markers.md) كنقطة الهدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← نسبة الانزلاق* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← نسبة الانزلاق* |
| بالنقر | يغير *نسبة الانزلاق إلى الهدف* أو *ارتفاع الهدف* |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### متوسط نسبة الانزلاق {#average-glide-ratio}

- **متوسط نسبة الانزلاق** يُظهر متوسط نسبة الانزلاق لفاصل زمني محدد.
- **متوسط السرعة الرأسية** يشير إلى المعدل الذي يصعد أو يهبط به كائن بمرور الوقت. يتم النظر فقط في النقطتين الأولى والأخيرة من الفاصل الزمني للتقييم. يمكنك تعيين الفاصل الزمني لهذا العنصر من 15 ثانية إلى 60 دقيقة. يجب عليك استخدام [علامة الخريطة](../personal/markers.md) كنقطة الهدف.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← نسبة الانزلاق* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← نسبة الانزلاق* |
| بالنقر | يغير *متوسط نسبة الانزلاق* أو *متوسط السرعة الرأسية* |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

## مستوى البطارية {#battery-level}

![عنصر واجهة المستخدم لمستوى البطارية](@site/static/img/widgets/battery_level_widget.png)

يعرض عنصر واجهة المستخدم **مستوى البطارية** نسبة بطارية جهازك مباشرة على شاشة الخريطة ويتم تحديثه تلقائيًا مرة واحدة على الأقل في الدقيقة.

- **iOS 17 والإصدارات الأحدث** — بسبب **قيود الخصوصية**، تتوفر بيانات مستوى البطارية بزيادات 5% فقط (على سبيل المثال، 35%، 60%، أو 85%). هذا هو قيد نظام تفرضه Apple.

- أجهزة **أندرويد** — يعرض عنصر واجهة المستخدم نسبة البطارية الدقيقة كما أبلغ عنها النظام، بدون تقريب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_battery"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_battery"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

## عنصر واجهة المستخدم للإحداثيات {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم للإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_1.png) ![عنصر واجهة المستخدم للإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم للإحداثيات أندرويد](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

يقدم OsmAnd نوعين من عناصر واجهة المستخدم للإحداثيات:

- **الإحداثيات: مركز الخريطة** - يعرض الإحداثيات الجغرافية لمركز الخريطة الحالي.
- **الإحداثيات: الموقع الحالي** - يعرض الإحداثيات الجغرافية للموقع الجغرافي الحالي.

تُعرض عناصر واجهة المستخدم للإحداثيات في الجزء العلوي من الشاشة. تُظهر الأيقونات ذات الخلفية الخضراء خطوط الطول والعرض للنقطة في مركز الجزء المرئي من الخريطة، وتُظهر الأيقونات ذات الخلفية الزرقاء إحداثيات موقعك الحالي. يمكن العثور على معلومات حول *تنسيقات الإحداثيات* المدعومة في مقالة *[البحث عن الإحداثيات](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← <Translate android="true" ids="coordinates_widget"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> ← <Translate ios="true" ids="coordinates"/>* |
| بالنقر | ينسخ الإحداثيات إلى الحافظة. |
| التنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) أو <Translate android="true" ids="configure_profile"/> (أندرويد) ← <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |

## معلومات GPS {#gps-info}

<InfoAndroidOnly />

![معلومات GPS عنصر واجهة المستخدم أندرويد](@site/static/img/widgets/gps_info_widget.png)

يعرض عنصر واجهة المستخدم لمعلومات GPS (نظام تحديد المواقع العالمي) عدد الأقمار الصناعية التي يكتشفها الجهاز ويستخدمها حاليًا. يمكنك استخدامه للتحقق من حالة GPS في حالة ضعف الإشارة.

يمكنك إعادة تعيين ذاكرة التخزين المؤقت الحالية لنظام تحديد المواقع العالمي (GPS) من خلال:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_gps_info"/>* |
| بالنقر | يفتح قائمة حالة GPS باستخدام أدوات طرف ثالث لتهيئة جهاز GPS المدمج. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

## موضع الشمس {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عناصر واجهة المستخدم للغروب والشروق](@site/static/img/widgets/sun_position.png) ![عناصر واجهة المستخدم للغروب والشروق](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عناصر واجهة المستخدم للغروب والشروق](@site/static/img/widgets/sun_position_4_ios.png) ![عناصر واجهة المستخدم للغروب والشروق](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

تُظهر عناصر واجهة المستخدم لموضع الشمس أوقات الشروق والغروب التالية لمركز الخريطة. عند النقر عليها، تُظهر الوقت المتبقي حتى الغروب أو الشروق المتوقع. في كلتا الحالتين، يعتمد الوقت على الوقت المُهيأ لجهازك.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_sun_position"/> ← <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_sun_position"/> ← <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| بالنقر | التبديل بين الوقت المتبقي ووقت الشروق/الغروب التالي. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

## مسطرة نصف القطر {#radius-ruler}

:::note
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[مسطرة نصف القطر والمسطرة](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

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

يعرض عنصر واجهة المستخدم مسطرة نصف القطر المسافة بين موقعك ونقطة مركز مسطرة نصف القطر. يساوي نصف قطر الدائرة الأولى [مقياس الخريطة](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="radius_ruler_item"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="map_widget_ruler_control"/>* |
| بالنقر | يغير حالة عنصر واجهة المستخدم بين مقياس أسود، تدرج رمادي، وأنماط غير مرئية. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

## عداد السرعة {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عداد السرعة](@site/static/img/widgets/speedometer_1_andr.png) ![عداد السرعة](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عداد السرعة](@site/static/img/widgets/speedometer_1_ios.png) ![عداد السرعة](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**عنصر واجهة المستخدم لعداد السرعة** هو عرض رسومي للسرعة الحالية للمركبة بناءً على *البيانات المستلمة من نظام تحديد المواقع العالمي (GPS)*. يسمح لك بمراقبة التوافق في الوقت الفعلي بين سرعتك والحد الأقصى للسرعة المسموح بها. يتم توفير الحد الأقصى للسرعة المسموح بها من [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) لقسم طريق معين وإعداد [تسامح حد السرعة](../navigation/guidance/voice-navigation.md#speed-limit) في OsmAnd.

- في *إعدادات عداد السرعة*، يمكنك تحديد حجم (**الارتفاع**) لعنصر واجهة المستخدم على شاشة التطبيق كـ *صغير* أو *متوسط* أو *كبير*.
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

## عناصر واجهة المستخدم الإضافية {#plugin-widgets}

يتم تمكين عناصر واجهة المستخدم هذه وتعمل بالاشتراك مع المكونات الإضافية المقابلة لها.

### عناصر واجهة المستخدم لتسجيل الرحلات {#trip-recording-widgets}

:::note
يمكنك قراءة وصف أكثر تفصيلاً هنا: **[المكون الإضافي <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم لتسجيل الرحلات](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم لتسجيل الرحلات](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

تشير عناصر واجهة المستخدم لتسجيل الرحلات إلى [المكون الإضافي <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). يمكنك استخدام عناصر واجهة المستخدم لعرض معلومات موجزة حول تسجيل المسار على الشاشة. مثل *المسافة*، *المدة*، *الصعود* و *الهبوط*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_monitoring"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_monitoring"/>* |
| بالنقر | يبدأ/يوقف تسجيل المسار أو يعرض الرسم البياني. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### عناصر واجهة المستخدم للمستشعرات الخارجية {#external-sensors-widgets}

:::note
لإضافة عناصر واجهة المستخدم للمستشعرات الخارجية إلى شاشة الخريطة، قم بتمكين [المكون الإضافي للمستشعرات الخارجية](https://osmand.net/docs/user/plugins/external-sensors) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عناصر واجهة المستخدم للمستشعرات الخارجية أندرويد](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم لتسجيل الرحلات](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

تشير عناصر واجهة المستخدم إلى [المكون الإضافي للمستشعرات الخارجية](../plugins/external-sensors.md#widgets). يمكنك استخدامها لعرض معلومات موجزة من مستشعراتك الخارجية، مثل: **<Translate android="true" ids="map_widget_ant_heart_rate"/>، <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*أندرويد فقط*)، **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>، <Translate android="true" ids="map_widget_ant_bicycle_speed"/>، <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** و **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *على iOS*، يمكنك أيضًا تحديد **مستوى بطارية** مستشعرات BLE المتصلة ليتم عرضها مباشرة في عنصر واجهة المستخدم.

- لإضافة عنصر واجهة مستخدم — [قم بتمكين](../plugins/index.md#enable--disable) المكون الإضافي للمستشعرات الخارجية في OsmAnd.

- لإضافة مستشعرات، اختر أحد الخيارات:
  - اذهب إلى *القائمة ← المكونات الإضافية ← المستشعرات الخارجية ← الإعدادات ← إقران مستشعر جديد*.
  - اذهب إلى *القائمة ← تهيئة الشاشة ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← المستشعرات الخارجية ← اختر مستشعر ← الإعدادات ← إقران مستشعر جديد*.

- أضف عناصر واجهة المستخدم حتى لو لم يكن هناك مستشعر خارجي متصل.

- **جميع عناصر واجهة المستخدم المضافة مرئية** حتى لو لم يكن هناك مستشعر خارجي متصل.

- استخدم [المكون الإضافي لتسجيل الرحلات](../plugins/trip-recording.md#recording-settings) لتسجيل بيانات المستشعر.

- اقرأ عن كيفية اختيار المستشعر (من نفس النوع) الذي سيتم عرضه في عنصر واجهة المستخدم [هنا](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| بالنقر | لا توجد تغييرات (*أندرويد*) / يبدل الوضع بين بيانات المستشعر ومستوى البطارية (*iOS*). |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### عناصر واجهة المستخدم لمقاييس المركبة {#vehicle-metrics-widgets}

:::note
لإضافة عناصر واجهة المستخدم لمقاييس المركبة إلى شاشة الخريطة، قم بتمكين [المكون الإضافي لمقاييس المركبة](https://osmand.net/docs/user/plugins/vehicle-metrics) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عناصر واجهة المستخدم لمقاييس المركبة أندرويد](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عناصر واجهة المستخدم لمقاييس المركبة أندرويد](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>

تنتمي عناصر واجهة المستخدم إلى [المكون الإضافي لمقاييس المركبة](../plugins/vehicle-metrics.md#widgets). يمكنك استخدامها لعرض معلومات من ماسح OBD-II متصل، مثل (*13 مقياسًا*): **درجة حرارة السحب**، &nbsp; **درجة حرارة المحيط**، &nbsp; **درجة حرارة سائل التبريد**، &nbsp; **درجة حرارة زيت المحرك**، &nbsp; **سرعة المحرك** (*مجاني*)، &nbsp; **وقت تشغيل المحرك**، &nbsp; **الحمل المحسوب للمحرك**، &nbsp; **ضغط الوقود**، &nbsp; **استهلاك الوقود**، &nbsp; **الوقود المتبقي**، &nbsp; **مستوى البطارية**، &nbsp; **سرعة المركبة** (*مجاني*)، و **موضع الخانق**.

- لإضافة عناصر واجهة المستخدم لمقاييس المركبة إلى شاشة الخريطة، [قم بتمكين](../plugins/index.md#enable--disable) **المكون الإضافي لمقاييس المركبة**.
- يمكنك إضافة عناصر واجهة المستخدم حتى لو لم يكن هناك ماسح OBD-II متصل.
- جميع عناصر واجهة المستخدم المضافة مرئية سواء كان ماسح OBD-II متصلاً أم لا.
- لتعديل عنصر واجهة مستخدم، انقر على عنصر واجهة المستخدم المضاف إلى اللوحة، ثم انقر على *الإعدادات*، أو انقر مباشرة على *أيقونة الإعدادات* في حقل عنصر واجهة المستخدم.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="obd_widget_group"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="obd_plugin_name"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### عناصر واجهة المستخدم للطقس {#weather-widgets}

:::note
لإضافة عناصر واجهة المستخدم للطقس إلى شاشة الخريطة، قم بتمكين [المكون الإضافي للطقس](https://osmand.net/docs/user/plugins/weather) في OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم للطقس أندرويد](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم للطقس iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

تعرض عناصر واجهة المستخدم للطقس معلومات الطقس الحالية لنقطة مركزية على الخريطة. يتم تمكينها تلقائيًا على الشاشة عند عرضها باستخدام المكون الإضافي (*القائمة ← الطقس*)، ويمكنك اختيار أي منها تضعه على الشاشة الرئيسية للاستخدام اليومي (*القائمة ← تخصيص الشاشة*). يمكنك قراءة المزيد عن هذا في مقالة [المكون الإضافي للطقس](../plugins/weather.md).

- **درجة الحرارة**. <Translate android="true" ids="temperature_widget_desc"/>
- **ضغط الهواء**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **الرياح**. <Translate android="true" ids="wind_widget_desc"/>
- **السحاب**. <Translate android="true" ids="clouds_widget_desc"/>
- **الهطول**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="shared_string_weather"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="shared_string_weather"/>* |
| بالنقر | يعرض في مربع حوار منبثق التاريخ والوقت عندما تكون معلومات الطقس ذات صلة. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *القائمة ← المكونات الإضافية ← الطقس ← الإعدادات* أو *القائمة ← الإعدادات ← ملف تعريف التطبيق ← الطقس* |

### عنصر واجهة المستخدم لوقوف السيارات {#parking-widget}

:::note
لإضافة عناصر واجهة المستخدم لوقوف السيارات إلى شاشة الخريطة، قم بتمكين [المكون الإضافي لموقع وقوف السيارات](https://osmand.net/docs/user/plugins/parking) في OsmAnd.
:::

![عنصر واجهة المستخدم لوقوف السيارات](@site/static/img/plugins/parking/parking_widget.png)

يعرض عنصر واجهة المستخدم للمكون الإضافي لوقوف السيارات المسافة من مركز الشاشة إلى موقع وقوف السيارات. لتعيين مكان لوقوف السيارات على الخريطة، قم بالتكبير إلى المستوى المطلوب، ثم انقر طويلاً على المكان على الخريطة لفتح قائمة السياق. اتبع [هذه الإعدادات](../plugins/parking.md#set-a-spot).

**ملاحظة:** سيظهر عنصر واجهة المستخدم لوقوف السيارات فقط إذا تم إضافة موقع لوقوف السيارات إلى الخريطة. بدون موقع وقوف سيارات محفوظ، لن يكون عنصر واجهة المستخدم مرئيًا.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_parking"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="parking_place"/>* |
| بالنقر | ينقل عرض الخريطة إلى موقع وقوف السيارات. |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

### عنصر واجهة المستخدم Mapillary {#mapillary-widget}

:::note
لإضافة عنصر واجهة المستخدم Mapillary إلى شاشة الخريطة، قم بتمكين [المكون الإضافي Mapillary](https://osmand.net/docs/user/plugins/mapillary) في OsmAnd.
:::

![عنصر واجهة المستخدم Mapillary](@site/static/img/widgets/mapillary_widget.png)

هذا هو عنصر واجهة المستخدم للمكون الإضافي Mapillary الذي يوفر وصولاً سريعًا إلى تطبيق Mapillary، والذي يمكّنك من إضافة [*صور على مستوى الشارع*](../plugins/mapillary.md#enable-layer). يتم إضافة عنصر واجهة المستخدم إلى الخريطة تلقائيًا عند تمكين المكون الإضافي.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="mapillary"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="mapillary"/>* |
| بالنقر | يفتح تطبيق [Mapillary](https://www.mapillary.com/). |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### عنصر واجهة المستخدم للملاحظات الصوتية/المرئية {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
لإضافة عناصر واجهة المستخدم للملاحظات الصوتية/المرئية إلى شاشة الخريطة، قم بتمكين [المكون الإضافي للملاحظات الصوتية/المرئية](https://osmand.net/docs/user/plugins/audio-video-notes) في OsmAnd.
:::

![عنصر واجهة المستخدم للملاحظات الصوتية والمرئية](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

هذه هي عناصر واجهة المستخدم للمكون الإضافي للملاحظات الصوتية/المرئية التي توفر وصولاً سريعًا لبدء/إيقاف أخذ الملاحظات الصوتية أو المرئية أو الصور.

يمكنك تهيئة الإجراء الذي يتم تحديده افتراضيًا:

- *عند الطلب*. الحالة الافتراضية. يتم عرض مربع حوار اختيار الإجراء في كل مرة.
- *تسجيل الصوت* - يسجل ملاحظة صوتية.
- *تسجيل الفيديو* - يسمح لك بتسجيل فيديو.
- *التقاط صورة* - يسمح لك بالتقاط صورة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_av_notes"/>* |
| بالنقر | يبدأ / يوقف أخذ ملاحظة |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

### عنصر واجهة المستخدم للمتتبع {#tracker-widget}

<InfoAndroidOnly />

:::note
لإضافة عنصر واجهة المستخدم للمتتبع إلى شاشة الخريطة، قم بتمكين [المكون الإضافي للمتتبع](https://osmand.net/docs/user/plugins/osmand-tracker) في OsmAnd.
:::

لكي يعمل المكون الإضافي وعنصر واجهة المستخدم، تحتاج إلى تثبيت [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) من Google Play أو مصادر أخرى.

يستخدم عنصر واجهة المستخدم للمكون الإضافي OsmAnd Tracker هذا للوصول السريع إلى تطبيق OsmAnd Tracker ومشاركة معلومات موقعك مع مستخدمين آخرين. يرسل التطبيق رسائل *الموقع المباشر* إلى الدردشات المحددة خلال فترة زمنية معينة، ويعرض قائمة جهات الاتصال والمجموعات، ويتحقق من الدردشات بحثًا عن رسائل تحتوي على موقعك، والتي يتم عرضها بعد ذلك على الخريطة في OsmAnd.

![عنصر واجهة المستخدم للمتتبع](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="tracker_item"/>* |
| بالنقر | يفتح تطبيق OsmAnd Online GPS Tracker. |

### عناصر واجهة المستخدم للمطورين {#developer-widgets}

:::note
لإضافة عناصر واجهة المستخدم للمطورين إلى شاشة الخريطة، قم بتمكين [المكون الإضافي لتطوير OsmAnd](https://osmand.net/docs/user/plugins/development) في OsmAnd.
:::

**عناصر واجهة المستخدم للمطورين** توفر معلومات حول [سرعة عرض الخريطة](../plugins/development.md#map-rendering-fps-widget) ومعلمات موضع الكاميرا الافتراضية، بما في ذلك [مستوى التكبير](../plugins/development.md#zoom-level)، [المسافة](../plugins/development.md#distance-to-target) إلى مركز الخريطة، [ارتفاع الكاميرا](../plugins/development.md#camera-elevation) و [زاوية الميل](../plugins/development.md#camera-tilt).

#### إطارات عرض الخريطة في الثانية {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم FPS أندرويد](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

يعرض [عنصر واجهة المستخدم إطارات عرض الخريطة في الثانية](../plugins/development.md#map-rendering-fps-widget) سرعة عرض الخريطة وعناصرها، مقاسة بالإطارات في الثانية (FPS). تشير قيمة FPS الأعلى إلى عرض أسرع وأداء بصري أكثر سلاسة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="map_widget_rendering_fps"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

#### عناصر واجهة المستخدم للكاميرا {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عناصر واجهة المستخدم لموضع الكاميرا](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عناصر واجهة المستخدم لموضع الكاميرا 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

تسمح لك **عناصر واجهة المستخدم للكاميرا** بمراقبة المحاذاة بين خريطة OsmAnd وسطح الأرض.

- [ميل الكاميرا](../plugins/development.md#camera-tilt). يعرض زاوية ميل الكاميرا في وضع المنظور. القيمة الافتراضية هي 90 درجة (لا يوجد ميل).
- [ارتفاع الكاميرا](../plugins/development.md#camera-elevation). يشير إلى ارتفاع الكاميرا فوق مستوى السطح.
- [مستوى التكبير](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [المسافة من الكاميرا إلى الهدف](../plugins/development.md#distance-to-target). يقيس المسافة بين الكاميرا والموقع المستهدف على الخريطة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="developer_widgets"/>* |
| | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate ios="true" ids="developer_widgets"/>* |
| بالنقر | التبديل بين الأوضاع (*مستوى التكبير*) / لا توجد تغييرات (*أخرى*) |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

#### ذاكرة الوصول العشوائي المتاحة {#available-ram}

<InfoAndroidOnly />

![عناصر واجهة المستخدم لمتوسط السرعة](@site/static/img/widgets/available_RAM_2_andr.png)

عنصر واجهة المستخدم **ذاكرة الوصول العشوائي المتاحة** هو أداة لمراقبة استخدام ذاكرة جهازك فيما يتعلق بـ OsmAnd. يوفر بيانات مفصلة للمساعدة في تحسين أداء التطبيق.

- **ذاكرة الوصول العشوائي المتاحة للتطبيق.** يعرض مقدار ذاكرة الوصول العشوائي المتاحة لـ OsmAnd للاستخدام دون التسبب في مشاكل في الأداء.

- **استخدام ذاكرة الوصول العشوائي للتطبيق** — يعرض الاستهلاك الحالي لذاكرة الوصول العشوائي بواسطة OsmAnd.

- **إجمالي ذاكرة الوصول العشوائي للتطبيق** — يشير إلى إجمالي الذاكرة المخصصة لـ OsmAnd، بما في ذلك الذاكرة المستخدمة والمتاحة.

> **ملاحظة**. *قد تختلف *إجمالي ذاكرة الوصول العشوائي المتاحة* اعتمادًا على العمليات الخلفية والتطبيقات الأخرى التي تعمل على جهازك. هذه القيم ديناميكية وتوفر طريقة لتتبع وإدارة استخدام الذاكرة للحصول على أداء OsmAnd متسق وفعال.*

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="true" ids="developer_widgets"/> ← *ذاكرة الوصول العشوائي المتاحة* |
| بالنقر | لا توجد تغييرات |
| النقر الطويل | يفتح [قائمة السياق لعنصر واجهة المستخدم](../widgets/configure-screen.md#widget-context-menu) |

## مقالات ذات صلة {#related-articles}

- [تهيئة الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [عناصر واجهة المستخدم للملاحة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [عناصر واجهة المستخدم للعلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: أبريل 2025*