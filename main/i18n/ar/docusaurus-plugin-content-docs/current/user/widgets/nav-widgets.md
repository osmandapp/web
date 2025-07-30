---
source-hash: cf00228b0959bc2aae53ebe181345d3b69c04b3d0d42a49a8ed5ebc376ca2673
sidebar_position: 4
title:  أدوات الملاحة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## نظرة عامة {#overview}

يتم تمكين أدوات الملاحة أثناء التنقل لعرض معلومات مثل المسافة، ووقت الوصول أو المغادرة، والمنعطفات التالية، والاتجاه، واسم الشارع الحالي، ومعلومات المسار، والسرعة القصوى، وتنبيهات الاقتراب، ونقاط الاهتمام، ونقاط الطريق.

![أدوات الملاحة كلها](@site/static/img/widgets/navigational_widgets_all.png)

## الملاحة النشطة وغير النشطة {#active-and-passive-navigation}

صُممت أدوات الملاحة في OsmAnd لتعزيز وضعي الملاحة **النشط** و**السلبي**. توفر هذه الأدوات معلومات قيمة مثل اتجاهات المسار وتفاصيل الطريق وحدود السرعة، اعتمادًا على **ملف الملاحة** المحدد.

#### الملاحة النشطة {#active-navigation}

- **المتطلبات:**
  - تعيين **وجهة**.
  - حساب **المسار** باستخدام ميزة *الاتجاهات*.
  - **بدء** الملاحة (التوجيه الصوتي اختياري).
  - متاح فقط عند التحرك على طول المسار.

- **الأدوات المدعومة:**
  - جميع **أدوات الملاحة** متاحة.

- **الفوائد الرئيسية:**
  - يوفر **تعليمات خطوة بخطوة**، و**توجيهات المسار**، و**وقت الوصول المقدر**.
  - يضمن تحديثات دقيقة وديناميكية أثناء الرحلة.

#### الملاحة السلبية {#passive-navigation}

- **كيف تعمل:**
  - لا توجد حاجة لوجهة.
  - تعمل تلقائيًا عند تحديد **ملف ملاحة** (مثل *القيادة*، *ركوب الدراجات*).

- **الوظائف:**
  - تحاول تحديد الطريق الذي تسلكه باستخدام بيانات GPS.
  - تعرض **معلومات الطريق الأساسية**، مثل [اسم الشارع](#street-name)، و[معلومات المسار](#lanes)، و[السرعة القصوى](#speed-limit).

- **القيود:**
  - قد لا تعمل بعض الميزات المتقدمة بشكل صحيح بدون وجهة محددة.
  - قد لا تكون المعلومات المقدمة دائمًا **دقيقة**، خاصة على شبكات الطرق المعقدة.

> **ملاحظة.** *تذكر أن ملف تعريف **تصفح الخريطة** لا يدعم أدوات الملاحة في أي من الوضعين. قم بالتبديل إلى **ملف ملاحة** ذي صلة لتمكين هذه الميزات.*

<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## أداة الارتفاع {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> هذه الأداة يمكنك استخدامها فقط مع ميزة Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">لمشتركي OsmAnd Pro</a>.

:::

تعرض أداة الارتفاع رسمًا بيانيًا للارتفاع ومنحدر مسار الملاحة الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع الحالي والمنحدر. يتم رسم الرسم البياني على محورين. المحور السيني هو مسافة مسارك. المحور الصادي هو الارتفاع، وتعتمد القيمة على التضاريس، ويتم عرض المنحدر كنسبة مئوية.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![أداة الارتفاع](@site/blog/2021-12-10-android-4-1/elevation_widget.png)

#### التفاعلات مع الرسم البياني {#interactions-with-the-graph}

- *التكبير/التصغير*. افتراضيًا، يعرض الرسم البياني المسار من الموقع الحالي حتى 10 كم للأمام. يمكنك استخدام [حركة إصبعين](../map/interact-with-map#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً لتغيرات الارتفاع على مسارك. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، للأمام على المسار، وللخلف إلى الموقع الحالي.
- *وضع نقطة على الرسم البياني*. إذا كنت ترغب في رؤية قيمة الارتفاع والدرجة عند نقطة معينة أمامك على مسارك، يمكنك النقر في أي مكان على الرسم البياني وستظهر مؤشر بالقيم.

#### ما يحتويه {#whats-in}

عند تحديد مسار والضغط على زر **ابدأ**، تفتح الخريطة مع موقعك الحالي، والمسار، والأداة في أسفل الشاشة. تحتوي الأداة على الرسم البياني ومعلومات حول *الصعود*، و*النزول*، و*الدرجة*، والمسافة، والارتفاع، وزاوية الميل. يمكنك تحديد *المقياس الأمثل* ورؤية جميع العوائق المحتملة على مسارك.

- تُشير جميع القيم إما للمسار بأكمله أو فقط للفاصل الزمني المحدد عن طريق قياس الرسم البياني.
- اقرأ عن [ترخيص بيانات DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) المستخدمة بواسطة OsmAnd لتحديد الارتفاع.

| |
|:------------|
| ***دبوس الموقع*** |
| يتضمن ***موقعك الحالي*** على الرسم البياني أيقونة موقع، وارتفاع، وقيمة نسبة مئوية للميل. يحتوي الجانب الأيمن من الأداة على أعلى ارتفاع وتدرج، والقيمة المتوسطة لهما، وأدنى قيمة في القسم المحدد من المسار المرئي على الرسم البياني. |
| ![نقطة](@site/static/img/widgets/sch_1-1.png)|
| ***معلومات إضافية*** |
| يحتوي الجانب الأيمن من الأداة على بيانات حول أعلى ارتفاع ومنحدر، والقيمة المتوسطة لكليهما، وأدنى ارتفاع ومنحدر في قسم المسار المحدد المرئي على الرسم البياني. |
| ![بيانات](@site/static/img/widgets/sch_1-2.png)|
| قيم ***الصعود*** و***النزول*** هي مجموع المسافات من نقطة موقعك إلى نهاية الرسم البياني المرئي. إذا لم تكن هناك نقطة موقع على الرسم البياني، فإنها مجموع الرسم البياني المرئي بالكامل على الشاشة (يمكن أن يحدث هذا عند تغيير المقياس ويخرج الموقع عن الرسم البياني).|
| **الصعود** – يُظهر مجموع جميع المسافات مع زيادة الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
| ![مخطط صعود](@site/static/img/widgets/sch_uphill_1.png) ![مخطط صعود](@site/static/img/widgets/sch_uphill_2.png)|
| **النزول** – يُظهر مجموع جميع المسافات مع انخفاض الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من المسار بدون نقطة الموقع المرئية على الشاشة.|
| ![مخطط نزول](@site/static/img/widgets/sch_downhill_1.png) ![مخطط نزول](@site/static/img/widgets/sch_downhill_2.png)|
|***الدرجة*** هي نسبة المسار إلى الأفقي، حيث تشير الصفر إلى الأفقية ويشير عدد الدرجات إلى درجة ميل أعلى أو أكثر انحدارًا.|
| **الدرجة** – تُظهر أقصى ميل للطريق بالنسبة المئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
|![مخطط درجة](@site/static/img/widgets/sch_grade_1.png) ![مخطط درجة](@site/static/img/widgets/sch_grade_2.png)|

## أداة الاتجاه {#bearing-widget}

الاتجاه هو الاتجاه إلى هدف خارج مركبتك، مثل وجهة أو نقطة أصل. يمكن أن يكون الاتجاه *نسبيًا* (وفقًا لمسارك) أو *مغناطيسيًا* (وفقًا للبوصلة). على سبيل المثال، الاتجاه المغناطيسي 180 درجة هو الاتجاه إلى الجنوب، والاتجاه النسبي 180 درجة هو خلفك مباشرة. النقاط الأساسية هي الاتجاهات الأربعة الرئيسية للبوصلة. وهي الشمال (*N* - 0 درجة أو 360 درجة)، والشرق (*E* - 90 درجة)، والجنوب (*S* - 180 درجة)، والغرب (*W* - 270 درجة).

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget.png) ![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="shared_string_bearing"/>* |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | **أندرويد:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |

#### كيف تعمل {#how-it-works}

لعرض الاتجاه، يجب تحديد **نقطة هدف**. إذا تم تحديد نقطة **وجهة** (أو **النقطة الوسيطة الأولى**، إذا كانت موجودة) للملاحة، فسيتم استخدامها كنقطة الهدف. وإلا، فسيتم استخدام **العلامة المحددة الأعلى**.

- [الاتجاه النسبي](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) هو الزاوية بين اتجاه حركتك الأمامية ونقطة الهدف. **اتجاه الحركة الأمامية** هو إما **اتجاه حركتك** الذي تم الحصول عليه من مستشعرات GPS أو إذا كنت واقفًا **حيث وجهت جهازك** (أي اتجاه جهازك وفقًا لبوصلته المغناطيسية). مثال: جسم ذو اتجاه نسبي 0 درجة يكون أمامك مباشرة وجسم ذو اتجاه نسبي 180 درجة يكون خلفك مباشرة. **الاتجاه النسبي** هو الزاوية بين اتجاهك الأمامي ونقطة الهدف.

- [الاتجاه المغناطيسي](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) هو الزاوية (الأفقية) باتجاه عقارب الساعة بين الشمال المغناطيسي ونقطة الهدف التي يتم رصدها من موقعك. تحتاج إلى اتباع قيمة البوصلة المغناطيسية هذه للوصول إلى هدفك. مثال: إذا تم عرض **الاتجاه المغناطيسي** على أنه 0 درجة M، فأنت بحاجة إلى التحرك بدقة نحو الشمال المغناطيسي للوصول إلى نقطة الهدف.

- [الاتجاه الحقيقي](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) يُعبر عنه بالزاوية الأفقية بين خط الطول الجغرافي وخط على الأرض. على وجه التحديد، **الاتجاه الحقيقي للنقطة** هو الزاوية المقاسة بالدرجات باتجاه عقارب الساعة من خط الشمال الحقيقي. سيعرض لك برنامج OsmAnd الاتجاه الحقيقي والمسار في واجهتنا سهلة الاستخدام، مما يسهل عليك اتخاذ القرار الصحيح مبكرًا.

### الملاحة على طول خط الرومب {#navigation-along-the-rhumb-line}

- **الاتجاه النسبي**. إذا التزمت باتجاه نسبي قدره 0 درجة وتحركت للأمام، فستصل إلى نقطة الوجهة، ولكن ليس بأقصر طريق ([خط الرومب](https://en.wikipedia.org/wiki/Rhumb_line)).
- **الاتجاه المغناطيسي**. إذا قمت بمحاذاة البوصلة على قاربك/مركبتك مع قيمة الأداة وتوجهت للأمام، فستصل إلى وجهتك، ولكن ليس بأقصر طريق ([خط الرومب](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->

## نقاط الملاحة {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

تُظهر مجموعة أدوات *نقطة الملاحة* المسافة المتبقية إلى وجهتك، والنقطة الوسيطة، ووقت الوصول إلى النقطة الوسيطة أو وقت السفر للمسار المحسوب، والوقت المقدر للوصول.

### معلومات المسار {#route-information}

![أداة الوجهة](@site/static/img/widgets/route_information_widget.png)

توفر أداة *معلومات المسار* بيانات في الوقت الفعلي حول مسار الملاحة الجاري وطريقة سريعة [لإدارة مسار نشط](../navigation/setup/route-navigation.md#start--stop-navigation). تساعد في تتبع تفاصيل المسار الرئيسية وتسمح لك بإيقاف أو استئناف جلسة الملاحة الحالية بأقل قدر من التفاعل.

**المعلومات المعروضة:**

- **الوقت المقدر للوصول (ETA)**. يعرض الوقت المتوقع للوصول إلى الوجهة النهائية.
- **الوقت المتبقي للسفر**. يعرض الوقت المقدر المتبقي للوصول إلى الوجهة.
- **المسافة إلى الوجهة**. يشير إلى إجمالي المسافة المتبقية إلى الوجهة النهائية والمسافات إلى النقاط الوسيطة.

**قائمة الإعدادات**:

- حدد **عرض افتراضي** لتحديد أولوية إحدى القيم التالية: *الوقت المقدر للوصول*، *الوقت المتبقي*، *المسافة*.
- في **أولوية العرض**، حدد بين *الوجهة أولاً (افتراضي)* أو *الوسيطة أولاً* لتحديد أولوية معلومات المسار الأكثر صلة.

> ملاحظة: الأداة مرئية فقط أثناء الملاحة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← معلومات المسار* |
| بالنقر | انقر على الزر مع السهم لفتح [لوحة بدء/إيقاف الملاحة](../navigation/setup/route-navigation.md#start--stop-navigation) |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### المسافة إلى الوجهة {#distance-to-destination}

![أداة الوجهة](@site/static/img/widgets/destination_widget.png)

تعرض الأداة المسافة المتبقية إلى نقطة الوجهة الأخيرة عند اتباع مسار محسوب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| بالنقر | ينقل الخريطة إلى نقطة الوجهة. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### المسافة إلى نقطة وسيطة {#distance-to-intermediate}

![أداة الوجهة الوسيطة](@site/static/img/widgets/intermediate_destination_widget.png)

تُظهر الأداة المسافة إلى النقطة الوسيطة الأولى على طول المسار المحسوب. بعد تجاوز النقاط الوسيطة، سيتم تحديث المساحة إلى النقطة الوسيطة التالية. إذا لم تكن هناك نقاط وسيطة، فلن تُعرض الأداة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| بالنقر | **نقطة وسيطة واحدة** - انقل الخريطة إلى النقطة الوسيطة. <br /> **نقطتان وسيطتان أو أكثر** - تفتح قائمة قائمة الوجهات. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### الوقت إلى نقطة وسيطة {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وقت الوصول أداة الوقت المتبقي](@site/static/img/widgets/arrival_time_widget_android.png) ![وقت الوصول أداة الوقت المتبقي](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وقت الوصول أداة الوقت المتبقي](@site/static/img/widgets/arrival_time_widget_ios.png) ![وقت الوصول أداة الوقت المتبقي](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

تُظهر الأداة *وقت الوصول* أو *الوقت المتبقي* إلى النقطة الوسيطة الأولى. أثناء الملاحة، يتم تحديث الوقت باستمرار، وبمجرد تجاوز نقطة وسيطة، سيتم تحديث الوقت إلى نقطة الطريق التالية. على سبيل المثال، إذا أوقفت الملاحة، سيبقى *الوقت المتبقي* دون تغيير وسيكون *وقت الوصول* مساويًا لـ *الوقت المتبقي* بالإضافة إلى *الوقت الحالي*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| بالنقر | يتغير بين *وقت الوصول* و*الوقت المتبقي* والعكس. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### الوقت إلى الوجهة {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وقت الوصول الوسيط أداة الوقت](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وقت الوصول الوسيط أداة الوقت](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

تعرض الأداة *وقت الوصول* أو *الوقت المتبقي* إلى نقطة الوجهة الأخيرة. يتم تحديث الوقت باستمرار أثناء الملاحة وهو يساوي وقت المسار من موقعك الحالي.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_destination"/>* |
| بالنقر | يتغير بين *وقت الوصول* و*الوقت المتبقي* والعكس. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

## حد السرعة {#speed-limit}

![أداة حد السرعة](@site/static/img/widgets/speed_limit_widget_2.png)

تعرض أداة *حد السرعة* حد السرعة الحالي بناءً على بيانات الخريطة لمسارك.

- يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- تعمل الأداة في وضعي الملاحة السلبي والنشط.
- إذا كانت بيانات حد السرعة غير متوفرة لطريق أو منطقة معينة، *فلن تظهر الأداة*.

> ملاحظة: تأكد من أن [خرائطك محدثة](../personal/maps-resources.md#updates) وأنك قمت بتنزيل جميع البيانات الإقليمية الضرورية للوصول إلى أحدث معلومات حد السرعة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_max_speed"/>* |
| بالنقر | لا توجد تغييرات |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

## مناورات المسار {#route-maneuvers}

![أداة المنعطفات التالية](@site/static/img/widgets/next_turns_widget.png)

يتم تنشيط هذه المجموعة من أدوات الملاحة أثناء الملاحة وتعرض معلومات حول المسافة إلى المناورة التالية.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تهيئة الشاشة ← اللوحة اليسرى / اليمنى ← إضافة أداة ← مناورات المسار ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اللوحة اليسرى / اليمنى ← إضافة أداة ← مناورات المسار ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| بالنقر | إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### المنعطف التالي {#next-turn}

![أداة المنعطفات التالية](@site/static/img/widgets/next_turns_widgets_andr.png)

تحتوي أدوات *مناورات المسار* على معلومات حول:

- **المنعطف التالي** - المنعطف التالي بسهم كبير يمثل المناورة وبيانات حول المسافة إليه.
- **المنعطف التالي (صغير)** - المنعطف التالي بسهم صغير يمثل المناورة وبيانات المسافة بجانب السهم.
- **المنعطف الثاني التالي** - المنعطف التالي بعد المنعطف الأول، والذي يتم تنشيطه إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تهيئة الشاشة ← اللوحة اليسرى / اليمنى ← إضافة أداة ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اللوحة اليسرى / اليمنى ← إضافة أداة ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| بالنقر | إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. |
| ضغطة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### مطالبات الألوان للمنعطف التالي {#color-prompts-for-next-turn}

يوضح هذا الجدول الوقت التقريبي حتى يتم تنشيط المطالبات وإشارة اللون المقابلة للأسهم لأداء المناورة. لمزيد من المعلومات، ارجع إلى [الوثائق الفنية](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) أو في مقالة [المطالبات الصوتية](../navigation/guidance/voice-navigation.md).

| اللون | ~ وقت التفعيل | المسافة | نوع المطالبة |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 أخضر | 5 ثوانٍ | قريب | انعطف الآن |
| 🟡 أصفر | 20 ثانية | يقترب | انعطف في `x` متر |
| ⚪ رمادي | > 100 ثانية | بعيد | استعد للانعطاف |

## المسارات {#lanes}

![أداة المسارات](@site/static/img/widgets/lanes_widget.png)

تُبرز أداة **المسارات** المسار الحالي عندما تكون الملاحة نشطة وتعرض تخطيط المسار للطريق الفعلي عندما تكون الملاحة سلبية. يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← <Translate android="true" ids="route_guidance"/> ← إضافة أداة ← <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="show_lanes"/>* |
| بالنقر | لا توجد تغييرات |

### مطالبات الألوان للمسارات {#color-prompts-for-lanes}

يعرض أداة حسب إعدادات وقت الاقتراب. يرتبط لون المسار بـ [المطالبات الصوتية](../navigation/guidance/voice-navigation.md) والوقت المتبقي لأداء المناورة.

| اللون | ~ وقت التفعيل | المسافة | نوع المطالبة |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 أخضر | 5 ثوانٍ | قريب | [انعطف الآن](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 أصفر | 20 ثانية | يقترب | [انعطف في X متر](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |

## توجيه المسار {#route-guidance}

<InfoAndroidOnly />

![أداة توجيه المسار](@site/static/img/widgets/route_guidence_widgets_andr.png)

يوفر توجيه المسار في الوقت الفعلي، بما في ذلك المسافة إلى المنعطف التالي، واسم الطريق، واسم الشارع الحالي، ومعلومات المسار. تكون الأدوات نشطة أثناء الملاحة.

تحتوي أدوات *توجيه المسار* على معلومات حول:

- [المسارات](#lanes) - تُظهر الموقع الحالي لمسارات الطريق وتُبرز المسارات التي يجب أن تسير عليها.
- **المنعطف التالي** - المنعطف التالي بسهم كبير يمثل المناورة وبيانات حول المسافة إليه.
- **المنعطف الثاني التالي** هو المنعطف التالي بعد المنعطف الأول، والذي يتم تنشيطه إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تهيئة الشاشة ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← المسار، المنعطف التالي، المنعطف الثاني التالي* |
| بالنقر | **المنعطف التالي**: إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. <br/> **المسار**: لا توجد تغييرات. |
| ضغطة طويلة | **المنعطف التالي**: يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) <br/> **المسار**: لا توجد تغييرات. |

## أداة التنبيه {#alert-widget}

![أدوات معلومات التنبيه](@site/static/img/widgets/alert_information_widget.png)

تجمع **أداة التنبيه** عدة أنواع من التنبيهات التي تظهر في الزاوية السفلية اليسرى أثناء التنقل.

- لديك القدرة على تشغيل وإيقاف التنبيهات مثل *<Translate android="true" ids="traffic_warning_speed_limit"/>، <Translate android="true" ids="show_traffic_warnings"/>، <Translate android="true" ids="show_pedestrian_warnings"/>، <Translate android="true" ids="show_cameras"/>،* و *<Translate android="true" ids="show_tunnels"/>*. التنبيهات الأخرى نشطة افتراضيًا إذا تم تمكين الأداة.

- بالنسبة لنوع تنبيه *حد السرعة*، يمكنك ضبط قيمة <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) في إعدادات المطالبة الصوتية لتتناسب بشكل أفضل مع سرعة السيارة وسرعة GPS.

- تُعرض معظم التنبيهات على الشاشة ويتم الإعلان عنها عن طريق مطالبة صوتية لمدة 15 ثانية، بالإضافة إلى وقت التفعيل لتجاوز نقطة طريق، أو نقطة مفضلة، أو نقطة اهتمام. اقرأ المزيد [هنا](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| تمكين | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |

### أنواع التنبيهات {#alert-types}

تتميز أنواع التنبيهات بتصميم مرئي مختلف، يعتمد على **<Translate android="true" ids="driving_region"/>** ويمكن تهيئتها من خلال *<Translate android="true" ids="shared_string_settings"/> ← <Translate android="true" ids="general_settings_2"/>*. لا يهدف OsmAnd إلى تمثيل علامات الطرق المتطابقة بنسبة 100% ولكنه يشير إلى بعض أوجه التشابه.

| | | |
|:------------|:------------|:------------|
| الاسم | الوصف | الأيقونة |
| *<Translate android="true" ids="show_traffic_warnings"/>* | يستخدم [تهدئة حركة المرور](https://en.wikipedia.org/wiki/Traffic_calming) التصميم المادي وتدابير أخرى لتحسين السلامة للسائقين والمشاة وراكبي الدراجات. | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_traffic_calming.png) ![تنبيه تهدئة حركة المرور في الولايات المتحدة](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [معبر المشاة](https://en.wikipedia.org/wiki/Pedestrian_crossing) (إنجليزية بريطانية بشكل أساسي) أو ممر المشاة هو مكان مخصص للمشاة لعبور طريق أو شارع أو جادة. يعرض OsmAnd تنبيه معبر المشاة غير المتحكم فيه. | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_pedestrian.png) ![تنبيه تهدئة حركة المرور في الولايات المتحدة](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | في معظم البلدان، تحدد [حدود السرعة على الطرق](https://en.wikipedia.org/wiki/Speed_limit) السرعة القصوى أو المتوسطة أو الدنيا القانونية التي يمكن للمركبات السير بها على جزء معين من الطريق. في OsmAnd، يظهر التنبيه عند تجاوز السرعة. يمكنك ضبط معلمات تجاوز السرعة (0، 5، 10.. كم/ساعة). ![تنبيه تجاوز السرعة](@site/static/img/widgets/ex_warning_speed.png) | ![تنبيه حد السرعة](@site/static/img/widgets/warnings_limit.png) ![تنبيه حد السرعة في كندا](@site/static/img/widgets/warnings_speed_limit_ca.png) ![تنبيه حد السرعة في الولايات المتحدة](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | النفق هو ممر تحت الأرض، يمر تحت جبل، أو نهر، أو منطقة حضرية مزدحمة. في OsmAnd، يحتوي تنبيه *الأنفاق* على معلومات حول طول النفق. إذا كنت في نفق، فإنه يظهر المسافة إلى نهاية النفق. ![تنبيه نفق](@site/static/img/widgets/ex_warning_tunnel.png) | ![تنبيهات الأنفاق](@site/static/img/widgets/warnings_tunnel.png) ![تنبيهات الأنفاق في الولايات المتحدة](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [كاميرات إنفاذ حركة المرور](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) و[كاميرات السرعة](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) تسجل مخالفات المرور، بما في ذلك السرعة الزائدة، وتجاوز الإشارات الحمراء، وأنواع أخرى من السلوك غير القانوني. <br />**ملاحظة:** تنبيهات كاميرات السرعة محظورة أو غير قانونية في بعض البلدان. لإزالة [كاميرات السرعة بالكامل](../personal/global-settings.md#legal) من OsmAnd، انتقل إلى *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* الرئيسية | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [علامة التوقف](https://en.wikipedia.org/wiki/Stop_sign) هي علامة مرور مصممة لإبلاغ السائقين بضرورة التوقف التام والتأكد من أن التقاطع خالٍ تمامًا من المركبات والمشاة قبل المتابعة بعد العلامة. | ![تنبيه التوقف](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* | يعني هذا التحذير وجود [معبر سكة حديد](https://en.wikipedia.org/wiki/Crossbuck) أمامك. | ![تنبيهات السكك الحديدية](@site/static/img/widgets/warnings_railways.png) ![تنبيهات السكك الحديدية في كندا](@site/static/img/widgets/warnings_railways_ca.png) ![تنبيهات السكك الحديدية في الولايات المتحدة](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | يشير هذا التحذير إلى وجود نقطة تفتيش حدودية أمامك. | ![تنبيه مراقبة الحدود](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [رموز الخطر أو رموز التحذير](https://en.wikipedia.org/wiki/Hazard_symbol) هي رموز معروفة مصممة للتحذير من المواد الخطرة، أو المواقع، أو الأشياء، بما في ذلك التيارات الكهربائية، والسموم، والإشعاع. | ![تنبيهات الخطر](@site/static/img/widgets/warnings_hazard.png) ![تنبيهات الخطر في الولايات المتحدة](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | يشير هذا التحذير إلى وجود كشك تحصيل رسوم لطريق مدفوع الأجر أمامك. ![تنبيه كشك تحصيل الرسوم](@site/static/img/widgets/ex_toll_booth.png) | ![تنبيه حد السرعة](@site/static/img/widgets/warnings_limit.png) |

## اسم الشارع {#street-name}

تُظهر أداة اسم الشارع **اسم الشارع الحالي** بسهم مستقيم، أو **اسم الشارع التالي** مع المناورة التي سيتم إجراؤها. يتكون اسم الشارع عادةً من درع الطريق السريع، و[اسم](https://wiki.openstreetmap.org/wiki/Key:name)، و[مرجع](https://wiki.openstreetmap.org/wiki/Key:ref)، و[مرجع دولي](https://wiki.openstreetmap.org/wiki/Key:int_ref)، و[وجهة](https://wiki.openstreetmap.org/wiki/Key:destination). يحدث التبديل بين اسم الشارع الحالي واسم الشارع التالي عند الاقتراب من المكان الذي تريد إجراء المناورة فيه (~20 ثانية)، على غرار المطالبة الصوتية [انعطف في X متر](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- عند القيادة على طول شارع أو طريق سريع، تُظهر الأداة اسم أو تسمية الشارع (الطريق) الحالي بسهم أزرق.

  ![أداة نقاط الاهتمام لاسم الشارع 2](@site/static/img/widgets/street_name_widget_2.png)

- عند تغيير الاتجاه، تُظهر الأداة مخطط المناورة واسم (تسمية) الشارع (الطريق) الذي تحتاج إلى الانعطاف إليه.

  ![أداة نقاط الاهتمام لاسم الشارع](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="map_widget_top_text"/>* |
| بالنقر | لا توجد تغييرات |

## الاقتراب من نقاط الاهتمام / المفضلة {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الاقتراب من نقاط الاهتمام/المفضلة أندرويد](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الاقتراب من نقاط الاهتمام/المفضلة iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

تُدمج أداة **الاقتراب من نقاط الاهتمام/المفضلة/نقاط الطريق** مع [اسم الشارع](#street-name) وتعرض نقاط الاهتمام ونقاط الطريق المفضلة على طول المسار عند الاقتراب منها وتجاوزها.

تعرض **الاسم**، و**أيقونة النقطة**، ومسافتين:

- **مسافة المسار** (أعلى) تعرض المسافة التي يجب قطعها باتباع المسار.
- **مسافة الانحراف** هي مسافة مستقيمة من أقرب نقطة على المسار إلى النقطة نفسها.

**iOS** - بالإضافة إلى المسافة إلى أقرب نقطة طريق، يتم أيضًا عرض جانب (يسار أو يمين) المسار الذي تقع عليه نقطة الطريق.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>، <Translate android="true" ids="shared_string_my_favorites"/>، <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> ← بدء الملاحة ← زر القلم الرصاص* |
| بالنقر | لا توجد تغييرات |

## مقالات ذات صلة {#related-articles}

- [تهيئة الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات الملاحة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: أبريل 2025*