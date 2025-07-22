---
source-hash: 128d77aba82249d6c7c6f4680929168a77c9a1b7b68d147ef9ee216321970557
sidebar_position: 4
title:  عناصر واجهة المستخدم الملاحية
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

يتم تمكين عناصر واجهة المستخدم الملاحية أثناء التنقل لعرض معلومات مثل المسافة، ووقت الوصول أو الوقت المتبقي، والمنعطفات التالية، والاتجاه، واسم الشارع الحالي، ومعلومات المسار، والسرعة القصوى، وتنبيهات الاقتراب، ونقاط الاهتمام، ونقاط الطريق.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## التنقل النشط والسلبي {#active-and-passive-navigation}

تم تصميم عناصر واجهة المستخدم الملاحية في OsmAnd لتعزيز وضعي التنقل **النشط** و**السلبي**. توفر هذه العناصر معلومات قيمة مثل اتجاهات المسار وتفاصيل الطريق وحدود السرعة، اعتمادًا على **ملف تعريف التنقل** المحدد.

#### التنقل النشط {#active-navigation}

- **المتطلبات:**
  - تعيين **وجهة**.
  - حساب **المسار** باستخدام ميزة *الاتجاهات*.
  - **بدء** التنقل (التوجيه الصوتي اختياري).
  - متاح فقط عند التحرك على طول المسار.

- **عناصر واجهة المستخدم المدعومة:**
  - جميع **عناصر واجهة المستخدم الملاحية** متاحة.

- **الفوائد الرئيسية:**
  - يوفر **تعليمات مفصلة خطوة بخطوة**، و**إرشادات المسار**، و**الوقت المقدر للوصول**.
  - يضمن تحديثات دقيقة وديناميكية أثناء الرحلة.

#### التنقل السلبي {#passive-navigation}

- **كيف يعمل:**
  - لا توجد حاجة لوجهة.
  - يعمل تلقائيًا عند تحديد **ملف تعريف تنقل** (مثل *القيادة*، *ركوب الدراجات*).

- **الوظائف:**
  - يحاول تحديد الطريق الذي تتبعه باستخدام بيانات GPS.
  - يعرض **معلومات الطريق الأساسية**، مثل [اسم الشارع](#street-name)، [معلومات المسار](#lanes)، [السرعة القصوى](#speed-limit).

- **القيود:**
  - قد لا تعمل بعض الميزات المتقدمة بشكل صحيح بدون وجهة محددة.
  - قد لا تكون المعلومات المقدمة **دقيقة** دائمًا، خاصة على شبكات الطرق المعقدة.

> **ملاحظة.** *تذكر أن ملف تعريف **تصفح الخريطة** لا يدعم عناصر واجهة المستخدم الملاحية في أي من الوضعين. قم بالتبديل إلى **ملف تعريف تنقل** ذي صلة لتمكين هذه الميزات.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## عنصر واجهة المستخدم للارتفاع {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> يمكنك استخدام هذه الأداة فقط مع ميزة Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">مشتركي OsmAnd Pro</a>.

:::

يعرض عنصر واجهة المستخدم للارتفاع رسمًا بيانيًا يوضح الارتفاع والانحدار لمسار التنقل الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع والانحدار الحاليين. يتم رسم الرسم البياني على محورين. المحور السيني هو مسافة مسارك. المحور الصادي هو الارتفاع، وتعتمد القيمة على التضاريس، ويتم عرض الانحدار كنسبة مئوية.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### التفاعلات مع الرسم البياني {#interactions-with-the-graph}

- *تكبير/تصغير*. بشكل افتراضي، يعرض الرسم البياني المسار من الموقع الحالي حتى 10 كم للأمام. يمكنك استخدام [حركة إصبعين](../map/interact-with-map#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً لتغيرات الارتفاع على مسارك. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، للأمام على المسار، وللخلف إلى الموقع الحالي.
- *وضع نقطة على الرسم البياني*. إذا كنت ترغب في رؤية قيمة الارتفاع والدرجة عند نقطة معينة للأمام على مسارك، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر بالقيم.


#### ما يحتويه {#whats-in}

عند تحديد مسار والضغط على زر **ابدأ**، تفتح الخريطة مع موقعك الحالي، والمسار، وعنصر واجهة المستخدم في أسفل الشاشة. يحتوي عنصر واجهة المستخدم على الرسم البياني ومعلومات حول *الصعود*، و*النزول*، و*الانحدار*، والمسافة، والارتفاع، وزاوية الانحدار. يمكنك تحديد *المقياس الأمثل* ورؤية جميع العوائق المحتملة على مسارك.

- يتم الإشارة إلى جميع القيم إما للمسار بأكمله أو فقط للفاصل الزمني المحدد عن طريق قياس الرسم البياني.
- اقرأ عن [ترخيص بيانات DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) المستخدمة بواسطة OsmAnd لتحديد الارتفاع.

| |
|:------------|
| ***دبوس الموقع*** |
| يتضمن ***موقعك الحالي*** على الرسم البياني أيقونة موقع، وارتفاع، وقيمة نسبة مئوية للانحدار. يحتوي الجانب الأيمن من عنصر واجهة المستخدم على أعلى ارتفاع وانحدار، والقيمة المتوسطة لهما، وأدنى قيمة في الجزء المحدد من المسار المرئي على الرسم البياني. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***معلومات إضافية*** |
| يحتوي الجانب الأيمن من عنصر واجهة المستخدم على بيانات حول أعلى ارتفاع وانحدار، والقيمة المتوسطة لكليهما، وأدنى ارتفاع وانحدار في الجزء المحدد من المسار المرئي على الرسم البياني. |
| ![data](@site/static/img/widgets/sch_1-2.png)|
| قيم ***الصعود*** و***النزول*** هي مجموع المسافات من نقطة موقعك إلى نهاية الرسم البياني المرئي. إذا لم تكن هناك نقطة موقع على الرسم البياني، فإنها مجموع الرسم البياني المرئي بالكامل على الشاشة (يمكن أن يحدث هذا عندما تغير المقياس ويخرج الموقع عن الرسم البياني).|
| **الصعود** – يعرض مجموع جميع المسافات مع زيادة الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|
| **النزول** – يعرض مجموع جميع المسافات مع انخفاض الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|
|***الانحدار*** هو نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية ويشير عدد الدرجات إلى درجة انحدار أعلى أو أكثر حدة.|
| **الانحدار** – يعرض أقصى انحدار للطريق بالنسبة المئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## عنصر واجهة المستخدم للاتجاه {#bearing-widget}

الاتجاه هو الاتجاه إلى هدف خارج مركبتك، مثل وجهة أو نقطة أصل. يمكن أن يكون الاتجاه *نسبيًا* (وفقًا لمسارك) أو *مغناطيسيًا* (وفقًا للبوصلة). على سبيل المثال، الاتجاه المغناطيسي 180 درجة هو الاتجاه إلى الجنوب، والاتجاه النسبي 180 درجة هو مباشرة خلفك. النقاط الأساسية هي الاتجاهات الأربعة الرئيسية للبوصلة. وهي الشمال (*N* - 0° أو 360°)، الشرق (*E* - 90°)، الجنوب (*S* - 180°)، والغرب (*W* - 270°).

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="shared_string_bearing"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="shared_string_bearing"/>* |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | **أندرويد:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
| | **iOS:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### كيف يعمل {#how-it-works}

لعرض الاتجاه، يجب تحديد **نقطة هدف**. إذا تم تحديد نقطة **وجهة** (أو **النقطة الوسيطة الأولى**، إذا كانت موجودة) للتنقل، فسيتم استخدامها كنقطة الهدف. وإلا، فسيتم استخدام **العلامة المحددة الأعلى**.

- [الاتجاه النسبي](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) هو الزاوية بين اتجاه حركتك الأمامية ونقطة الهدف. **اتجاه الحركة الأمامية** هو إما **اتجاه حركتك** الذي تم الحصول عليه من مستشعرات GPS أو إذا كنت واقفًا **حيث وجهت جهازك** (أي اتجاه جهازك وفقًا لبصلته المغناطيسية). مثال: جسم له اتجاه نسبي 0 درجة يكون مباشرة أمامك وجسم له اتجاه نسبي 180 درجة يكون مباشرة خلفك. **الاتجاه النسبي** هو الزاوية بين اتجاهك الأمامي ونقطة الهدف.

- [الاتجاه المغناطيسي](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) هو الزاوية في اتجاه عقارب الساعة (الأفقية) بين الشمال المغناطيسي ونقطة الهدف التي تم رصدها من موقعك. تحتاج إلى اتباع قيمة البوصلة المغناطيسية هذه للوصول إلى هدفك. مثال: إذا تم عرض **الاتجاه المغناطيسي** على أنه 0 درجة M، فأنت بحاجة إلى التحرك بدقة نحو الشمال المغناطيسي للوصول إلى نقطة الهدف.

- [الاتجاه الحقيقي](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) يتم التعبير عنه كزاوية أفقية بين خط الزوال الجغرافي وخط على الأرض. على وجه التحديد، **الاتجاه الحقيقي للنقطة** هو الزاوية المقاسة بالدرجات في اتجاه عقارب الساعة من خط الشمال الحقيقي. سيعرض لك برنامج OsmAnd الاتجاه الحقيقي والمسار في واجهتنا سهلة الاستخدام، مما يسهل عليك اتخاذ القرار الصحيح مبكرًا.

### التنقل على طول خط الرومب {#navigation-along-the-rhumb-line}

- **الاتجاه النسبي**. إذا التزمت باتجاه نسبي قدره 0 درجة وتحركت للأمام، فستصل إلى نقطة الوجهة، ولكن ليس بأقصر طريق ([خط الرومب](https://en.wikipedia.org/wiki/Rhumb_line)).
- **الاتجاه المغناطيسي**. إذا قمت بمحاذاة البوصلة على قاربك/مركبتك مع قيمة الأداة وتوجهت للأمام، فستصل إلى وجهتك، ولكن ليس بأقصر طريق ([خط الرومب](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## نقاط التنقل {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

تعرض مجموعة أدوات *نقطة التنقل* المسافة المتبقية إلى وجهتك، والنقطة الوسيطة، ووقت الوصول إلى النقطة الوسيطة أو وقت السفر للمسار المحسوب، والوقت المقدر للوصول.

### معلومات المسار {#route-information}


![Destination widget](@site/static/img/widgets/route_information_widget.png)

توفر أداة *معلومات المسار* بيانات في الوقت الفعلي حول مسار التنقل الجاري وطريقة سريعة [لإدارة مسار نشط](../navigation/setup/route-navigation.md#start--stop-navigation). تساعد في تتبع تفاصيل المسار الرئيسية وتسمح لك بإيقاف أو استئناف جلسة التنقل الحالية بأقل قدر من التفاعل.

**المعلومات المعروضة:**

- **الوقت المقدر للوصول (ETA)**. يعرض وقت الوصول المتوقع إلى الوجهة النهائية.
- **وقت السفر المتبقي**. يعرض الوقت المقدر المتبقي للوصول إلى الوجهة.
- **المسافة إلى الوجهة**. يشير إلى المسافة الإجمالية المتبقية إلى الوجهة النهائية والمسافات إلى النقاط الوسيطة.

**قائمة الإعدادات**:

- حدد **عرض افتراضي** لتحديد أولوية إحدى القيم التالية: *الوقت المقدر للوصول*، *الوقت المتبقي*، *المسافة*.
- في **أولوية العرض**، اختر بين *الوجهة أولاً (افتراضي)* أو *الوسيطة أولاً* لتحديد أولوية معلومات المسار الأكثر صلة.

> ملاحظة: الأداة مرئية فقط أثناء التنقل.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ←<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← معلومات المسار* |
| بالنقر | انقر على الزر مع السهم لفتح [لوحة بدء/إيقاف التنقل](../navigation/setup/route-navigation.md#start--stop-navigation) |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |
| التنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### المسافة إلى الوجهة {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)

تعرض الأداة المسافة المتبقية إلى نقطة الوجهة الأخيرة عند اتباع مسار محسوب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_distance_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| بالنقر | ينقل الخريطة إلى نقطة الوجهة. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### المسافة إلى نقطة وسيطة {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

تعرض الأداة المسافة إلى النقطة الوسيطة الأولى على طول المسار المحسوب. بعد تجاوز النقاط الوسيطة، سيتم تحديث المساحة إلى النقطة الوسيطة التالية. إذا لم تكن هناك نقاط وسيطة، فلن يتم عرض الأداة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| بالنقر | **نقطة وسيطة واحدة** - انقل الخريطة إلى النقطة الوسيطة. <br /> **نقطتان وسيطتان أو أكثر** - يفتح قائمة قائمة الوجهات. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |

### الوقت إلى نقطة وسيطة {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png) ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png) ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

تعرض الأداة *وقت الوصول* أو *الوقت المتبقي* إلى النقطة الوسيطة الأولى. أثناء التنقل، يتم تحديث الوقت باستمرار، وبمجرد تجاوز نقطة وسيطة، سيتم تحديث الوقت إلى نقطة الطريق التالية. على سبيل المثال، إذا أوقفت التنقل، سيبقى *الوقت المتبقي* دون تغيير وسيكون *وقت الوصول* مساويًا لـ *الوقت المتبقي* زائد *الوقت الحالي*.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| بالنقر | يتغير بين *وقت الوصول* إلى *الوقت المتبقي* والعكس. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |


### الوقت إلى الوجهة {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

تعرض الأداة *وقت الوصول* أو *الوقت المتبقي* إلى نقطة الوجهة الأخيرة. يتم تحديث الوقت باستمرار أثناء التنقل وهو يساوي وقت المسار من موقعك الحالي.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_destination"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_time_to_destination"/>* |
| بالنقر | يتغير بين *وقت الوصول* إلى *الوقت المتبقي* والعكس. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |


## حد السرعة {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

يعرض عنصر واجهة المستخدم *حد السرعة* حد السرعة الحالي بناءً على بيانات الخريطة لمسارك.

- يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- يعمل عنصر واجهة المستخدم في وضع التنقل السلبي والنشط.
- إذا كانت بيانات حد السرعة غير متاحة لطريق أو منطقة معينة، *فلن يظهر عنصر واجهة المستخدم*.

> ملاحظة: تأكد من أن [خرائطك محدثة](../personal/maps-resources.md#updates) وأنك قمت بتنزيل جميع البيانات الإقليمية اللازمة للوصول إلى أحدث معلومات حد السرعة.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة أداة ← <Translate android="true" ids="map_widget_max_speed"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اختر لوحة ← إضافة أداة ← <Translate ios="true" ids="map_widget_max_speed"/>* |
| بالنقر | لا توجد تغييرات |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |


## مناورات المسار {#route-maneuvers}

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

يتم تنشيط هذه المجموعة من عناصر واجهة المستخدم الملاحية أثناء التنقل وتعرض معلومات حول المسافة إلى المناورة التالية.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تكوين الشاشة ← اللوحة اليسرى / اليمنى ← إضافة أداة ← مناورات المسار ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اللوحة اليسرى / اليمنى ← إضافة أداة ← مناورات المسار ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| بالنقر | إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |


### المنعطف التالي {#next-turn}

![Next turns widget](@site/static/img/widgets/next_turns_widgets_andr.png)

تحتوي أدوات *مناورات المسار* على معلومات حول:

- **المنعطف التالي** - المنعطف التالي بسهم كبير يمثل المناورة ومع بيانات حول المسافة إليها.
- **المنعطف التالي (صغير)** - المنعطف التالي بسهم صغير يمثل المناورة ومع بيانات المسافة بجانب السهم.
- **المنعطف الثاني التالي** - المنعطف التالي بعد المنعطف الأول، والذي يتم تنشيطه إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تكوين الشاشة ← اللوحة اليسرى / اليمنى ← إضافة أداة ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← اللوحة اليسرى / اليمنى ← إضافة أداة ← المنعطف التالي، المنعطف التالي (صغير)، المنعطف الثاني التالي* |
| بالنقر | إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. |
| نقرة طويلة | يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) |


### مطالبات الألوان للمنعطف التالي {#color-prompts-for-next-turn}

يعرض هذا الجدول الوقت التقريبي حتى يتم تنشيط المطالبات والإشارة اللونية المقابلة للأسهم لتنفيذ المناورة. لمزيد من المعلومات، راجع [الوثائق الفنية](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) أو في مقالة [المطالبات الصوتية](../navigation/guidance/voice-navigation.md).

| اللون | ~ وقت التشغيل | المسافة | نوع المطالبة |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 أخضر | 5 ثوانٍ | قريب | انعطف الآن |
| 🟡 أصفر | 20 ثانية | يقترب | انعطف في `x` م |
| ⚪ رمادي | > 100 ثانية | بعيد | استعد للانعطاف |


## المسارات {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

تعرض أداة **المسارات** المسار الحالي عندما يكون التنقل نشطًا وتعرض تخطيط المسار للطريق الفعلي عندما يكون التنقل سلبيًا. يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← <Translate android="true" ids="route_guidance"/> ← إضافة أداة ← <Translate android="true" ids="show_lanes"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="show_lanes"/>* |
| بالنقر | لا توجد تغييرات |

### مطالبات الألوان للمسارات {#color-prompts-for-lanes}

يعرض عنصر واجهة المستخدم حسب إعدادات وقت الاقتراب. يرتبط لون المسار بـ [المطالبات الصوتية](../navigation/guidance/voice-navigation.md) والوقت المتبقي لتنفيذ المناورة.

| اللون | ~ وقت التشغيل | المسافة | نوع المطالبة |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 أخضر | 5 ثوانٍ | قريب | [انعطف الآن](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 أصفر | 20 ثانية | يقترب | [انعطف في X م](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## توجيه المسار {#route-guidance}

<InfoAndroidOnly />

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

يوفر توجيهًا للمسار في الوقت الفعلي، بما في ذلك المسافة إلى المنعطف التالي، واسم الطريق، واسم الشارع الحالي، ومعلومات المسار. تكون الأدوات نشطة أثناء التنقل.

تحتوي أدوات *توجيه المسار* على معلومات حول:

- [المسارات](#lanes) - تعرض الموقع الحالي لمسارات الطريق وتسلط الضوء على المسارات التي يجب أن تسلكها.
- **المنعطف التالي** - المنعطف التالي بسهم كبير يمثل المناورة ومع بيانات حول المسافة إليها.
- **المنعطف الثاني التالي** هو المنعطف التالي بعد المنعطف الأول، والذي يتم تنشيطه إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *القائمة ← تكوين الشاشة ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← المسار، المنعطف التالي، المنعطف الثاني التالي* |
| بالنقر | **المنعطف التالي**: إذا تم تمكين [المطالبات الصوتية](../navigation/guidance/voice-navigation.md)، يتم نطق المناورة التالية والمسافة إليها. <br/> **المسار**: لا توجد تغييرات. |
| نقرة طويلة | **المنعطف التالي**: يفتح [قائمة سياق الأداة](../widgets/configure-screen.md#widget-context-menu) <br/> **المسار**: لا توجد تغييرات. |


## أداة التنبيه {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

تجمع **أداة التنبيه** عدة أنواع من التنبيهات التي تظهر في الزاوية السفلية اليسرى أثناء التنقل.

- لديك القدرة على تشغيل وإيقاف التنبيهات مثل *<Translate android="true" ids="traffic_warning_speed_limit"/>، <Translate android="true" ids="show_traffic_warnings"/>، <Translate android="true" ids="show_pedestrian_warnings"/>، <Translate android="true" ids="show_cameras"/>،* و *<Translate android="true" ids="show_tunnels"/>*. التنبيهات الأخرى تكون نشطة بشكل افتراضي إذا كانت الأداة ممكّنة.

- بالنسبة لنوع تنبيه *حد السرعة*، يمكنك ضبط قيمة <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) في إعدادات المطالبة الصوتية لتتوافق بشكل أفضل مع سرعة السيارة وسرعة GPS.

- تظهر معظم التنبيهات على الشاشة ويتم الإعلان عنها عن طريق مطالبة صوتية لمدة 15 ثانية، بالإضافة إلى وقت التشغيل لتجاوز نقطة طريق، أو نقطة مفضلة، أو نقطة اهتمام. اقرأ المزيد [هنا](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| تمكين | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
| | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### أنواع التنبيهات {#alert-types}

تتميز أنواع التنبيهات بتصميم مرئي مختلف، يعتمد على **<Translate android="true" ids="driving_region"/>** ويمكن تهيئتها من خلال *<Translate android="true" ids="shared_string_settings"/> ← <Translate android="true" ids="general_settings_2"/>*. لا يهدف OsmAnd إلى تمثيل علامات الطرق المتطابقة بنسبة 100% ولكن يشير إلى بعض أوجه التشابه.

| | | |
|:------------|:------------|:------------|
| الاسم | الوصف | الأيقونة |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [تهدئة حركة المرور](https://en.wikipedia.org/wiki/Traffic_calming) تستخدم التصميم المادي وتدابير أخرى لتحسين السلامة للسائقين والمشاة وراكبي الدراجات. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png) ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [معبر المشاة](https://en.wikipedia.org/wiki/Pedestrian_crossing) (البريطانية بشكل أساسي) أو ممر المشاة هو مكان مخصص للمشاة لعبور طريق أو شارع أو جادة. يعرض OsmAnd تنبيه معبر المشاة غير المتحكم فيه. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png) ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | في معظم البلدان، تحدد [حدود السرعة على الطرق](https://en.wikipedia.org/wiki/Speed_limit) السرعة القصوى أو المتوسطة أو الدنيا القانونية التي يمكن للمركبات السفر بها على جزء معين من الطريق. في OsmAnd، يظهر التنبيه عند تجاوز السرعة. يمكنك تعيين معلمات تجاوز السرعة (0، 5، 10.. كم/ساعة). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | النفق هو ممر تحت الأرض، يمر تحت جبل، أو نهر، أو منطقة حضرية مزدحمة. في OsmAnd، يحتوي تنبيه *الأنفاق* على معلومات حول طول النفق. إذا كنت في نفق، فإنه يعرض المسافة إلى نهاية النفق. ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png) | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png) ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [كاميرات إنفاذ حركة المرور](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) و[كاميرات السرعة](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) تسجل مخالفات المرور، بما في ذلك السرعة الزائدة، وتجاوز الإشارات الحمراء، وأنواع أخرى من السلوك غير القانوني. <br />**ملاحظة:** تنبيهات كاميرات السرعة محظورة أو غير قانونية في بعض البلدان. لإزالة [كاميرات السرعة تمامًا](../personal/global-settings.md#legal) من OsmAnd، انتقل إلى *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>* | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png) |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [علامة التوقف](https://en.wikipedia.org/wiki/Stop_sign) هي علامة مرور مصممة لإخطار السائقين بضرورة التوقف التام والتأكد من خلو التقاطع من المركبات والمشاة بأمان قبل المتابعة بعد العلامة. | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* | يعني هذا التحذير أن هناك [معبر سكة حديد](https://en.wikipedia.org/wiki/Crossbuck) أمامك. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png) ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | يشير هذا التحذير إلى وجود نقطة تفتيش حدودية أمامك. | ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png) |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [رموز الخطر أو رموز التحذير](https://en.wikipedia.org/wiki/Hazard_symbol) هي رموز يمكن التعرف عليها مصممة للتحذير من المواد الخطرة أو المواقع أو الأشياء، بما في ذلك التيارات الكهربائية والسموم والإشعاع. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png) ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | يشير هذا التحذير إلى وجود كشك تحصيل رسوم لطريق مدفوع أمامه. ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## اسم الشارع {#street-name}

يعرض عنصر واجهة المستخدم لاسم الشارع **اسم الشارع الحالي** بسهم مستقيم، أو **اسم الشارع التالي** مع المناورة التي سيتم تنفيذها. يتكون اسم الشارع عادةً من درع طريق سريع، و[اسم](https://wiki.openstreetmap.org/wiki/Key:name)، و[مرجع](https://wiki.openstreetmap.org/wiki/Key:ref)، و[مرجع دولي](https://wiki.openstreetmap.org/wiki/Key:int_ref)، و[وجهة](https://wiki.openstreetmap.org/wiki/Key:destination). يحدث التبديل بين اسم الشارع الحالي واسم الشارع التالي عند الاقتراب من المكان الذي تريد فيه تنفيذ المناورة (~20 ثانية)، على غرار المطالبة الصوتية [انعطف في X م](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- عند القيادة على طول شارع أو طريق سريع، تعرض الأداة اسم أو تسمية الشارع (الطريق) الحالي بسهم أزرق.

  ![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

- عند تغيير الاتجاه، تعرض الأداة مخطط المناورة واسم (تسمية) الشارع (الطريق) الذي تحتاج إلى الانعطاف إليه.

  ![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="map_widget_top_text"/>* |
| | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> ← إضافة أداة ← <Translate android="true" ids="map_widget_top_text"/>* |
| بالنقر | لا توجد تغييرات |


## الاقتراب من نقاط الاهتمام / المفضلة {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

تتحد أداة **الاقتراب من نقاط الاهتمام/المفضلة/نقاط الطريق** مع [اسم الشارع](#street-name) وتعرض نقاط الاهتمام ونقاط الطريق للمسار المتبع والمفضلة على طول المسار.

تعرض **الاسم**، و**أيقونة النقطة**، ومسافتين:

- **مسافة المسار** (أعلى) تعرض المسافة التي يجب قطعها باتباع المسار.
- **مسافة الانحراف** هي مسافة مستقيمة من أقرب نقطة مسار إلى النقطة نفسها.

**iOS** - بالإضافة إلى المسافة إلى أقرب نقطة طريق، يتم عرض الجانب (اليسار أو اليمين) من المسار الذي تقع عليه نقطة الطريق أيضًا.

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>، <Translate android="true" ids="shared_string_my_favorites"/>، <Translate android="true" ids="way_alarms"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> ← بدء التنقل ← زر القلم الرصاص* |
| بالنقر | لا توجد تغييرات |


## مقالات ذات صلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات التنقل](./nav-widgets.md)
- [مقياس نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: أبريل 2025*