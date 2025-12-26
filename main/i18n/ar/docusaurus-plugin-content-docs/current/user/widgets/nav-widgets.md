---
source-hash: d919292bddbc80c1a1efb89edfade660870a675d2742aed4707122301de32aa4
sidebar_position: 4
title:  Navigational Widgets
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

يتم تفعيل أدوات التنقل أثناء التنقل لعرض معلومات مثل المسافة، ووقت الوصول أو الوقت المتبقي، والمنعطفات التالية، والاتجاه، واسم الشارع الحالي، ومعلومات المسارات، والسرعة القصوى، وتنبيهات الاقتراب، ونقاط الاهتمام، ونقاط الطريق.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## التنقل النشط والسلبي {#active-and-passive-navigation}

تم تصميم أدوات التنقل في OsmAnd لتعزيز كل من وضعي التنقل **النشط** و**السلبي**. توفر هذه الأدوات معلومات قيمة مثل اتجاهات الطريق، وتفاصيل الطريق، وحظر السرعة، اعتمادًا على **ملف التنقل** المحدد.  

#### التنقل النشط {#active-navigation}

- **المتطلبات:**  
  - تعيين **وجهة**.  
  - حساب **الطريق** باستخدام ميزة *Directions*.  
  - **بدء** التنقل (الإرشاد الصوتي اختياري).
  - متاح فقط عند التحرك على طول الطريق.

- **الأدوات المدعومة:**  
  - جميع **أدوات التنقل** متاحة.  

- **الفوائد الرئيسية:**  
  - يوفر **تعليمات منعطف-بمنعطف**، و**إرشاد المسار**، و**ETA**.  
  - يضمن تحديثات دقيقة وديناميكية أثناء الرحلة.  

#### التنقل السلبي {#passive-navigation}

- **كيفية العمل:**  
  - لا حاجة لوجهة.  
  - يعمل تلقائيًا عندما تختار **ملف تنقل** (مثل، *Driving*، *Cycling*).  

- **الوظائف:**  
  - يحاول تحديد الطريق الذي تتبعه باستخدام بيانات GPS.  
  - يعرض **معلومات الطريق الأساسية**، مثل [اسم الشارع](#street-name)، [معلومات المسارات](#lanes)، [السرعة القصوى](#speed-limit).

- **القيود:**  
  - قد لا تعمل بعض الميزات المتقدمة بشكل صحيح بدون تعيين وجهة.  
  - قد لا تكون المعلومات المقدمة دائمًا **دقيقة**، خاصة على شبكات الطرق المعقدة.

> **ملاحظة.** *تذكر أن ملف **Browse Map** لا يدعم أدوات التنقل في أي وضع. قم بالتبديل إلى **ملف تنقل** ذي صلة لتفعيل هذه الميزات.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## أداة الارتفاع {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/>  هذه الأداة يمكنك استخدامها فقط مع ميزة Pro  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">مشتركو OsmAnd Pro</a>.

:::

تعرض أداة الارتفاع رسمًا بيانيًا مع الارتفاع وميل طريق التنقل الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع الحالي والميل. يتم رسم الرسم البياني على محورين. المحور X هو مسافة طريقك. المحور Y هو الارتفاع، والقيمة تعتمد على التضاريس، ويتم عرض الميل كنسبة مئوية.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### التفاعلات مع الرسم البياني {#interactions-with-the-graph}

- *تكبير/تصغير*. افتراضيًا، يعرض الرسم البياني الطريق من الموقع الحالي حتى ١٠ كم إلى الأمام. يمكنك استخدام [حركة الإصبعين](../map/interact-with-map.md#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً لتغييرات الارتفاع على طريقك. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، إلى الأمام على الطريق، وإلى الخلف إلى الموقع الحالي.  
- *وضع نقطة على الرسم البياني*. إذا كنت تريد رؤية قيمة الارتفاع والدرجة في نقطة معينة إلى الأمام على طريقك، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر مع القيم.  


#### ما بداخلها {#whats-in}

عندما تختار طريقًا وتضغط على زر **Start**، يفتح الخريطة مع موقعك الحالي، والطريق، والأداة في أسفل الشاشة. تحتوي الأداة على الرسم البياني ومعلومات حول *Uphill*، *Downhill*، *Grade*، المسافة، الارتفاع، وزاوية الميل. يمكنك اختيار *المقياس الأمثل* ورؤية جميع العوائق الممكنة على طريقك.  

- يتم الإشارة إلى جميع القيم إما للطريق بأكمله أو فقط للفاصل المحدد عن طريق تكبير الرسم البياني.
- اقرأ عن [الترخيص لبيانات DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) المستخدمة من قبل OsmAnd لتحديد الارتفاع.

|  |
|:------------|
| ***دبوس الموقع*** |
| موقعك ***الحالي*** على الرسم البياني يشمل أيقونة موقع، وارتفاع، وقيمة نسبة الميل المئوية. الجانب الأيمن من الأداة يحتوي على أعلى ارتفاع وميل، والقيمة المتوسطة لهما، والقيمة الأدنى في القسم المحدد من الطريق المرئي على الرسم البياني. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***معلومات إضافية*** |
| الجانب الأيمن من الأداة يحتوي على بيانات حول أعلى ارتفاع وميل، والقيمة المتوسطة لكليهما، وأدنى ارتفاع وميل في القسم المحدد من الطريق المرئي على الرسم البياني. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|القيمتا ***Uphill*** و***Downhill*** هما مجموع المسافات من نقطة موقعك إلى نهاية الرسم البياني المرئي. إذا لم يكن هناك نقطة موقع على الرسم البياني، فإنه مجموع الرسم البياني المرئي بأكمله على الشاشة (هذا يمكن أن يحدث عندما تغير المقياس ويخرج الموقع خارج الرسم البياني).|
| **Uphill** – يعرض مجموع جميع المسافات مع زيادة الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| **Downhill** – يعرض مجموع جميع المسافات مع انخفاض الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Grade*** هو نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية وعدد الدرجات يشير إلى درجة ميل أعلى أو أكثر انحدارًا.|
| **Grade** – يعرض أقصى ميل طريق كنسبة مئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## أداة الاتجاه   {#bearing-widget}
  
الاتجاه هو الاتجاه نحو هدف خارج مركبتك، مثل وجهة أو نقطة أصل. يمكن أن يكون الاتجاه *نسبيًا* (وفقًا لمسارك) أو *مغناطيسيًا* (وفقًا للبوصلة). على سبيل المثال، الاتجاه المغناطيسي ١٨٠° هو الاتجاه نحو الجنوب، والاتجاه النسبي ١٨٠° هو مباشرة خلفك. النقاط الرئيسية هي الاتجاهات الأربعة الرئيسية للبوصلة. وهي الشمال (*N* - ٠° أو ٣٦٠°)، الشرق (*E* - ٩٠°)، الجنوب (*S* - ١٨٠°)، والغرب (*W* - ٢٧٠°).  

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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Choose a panel → Add widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** You can change the data display format for angular units: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** You can change the data display format for angular units: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### كيفية العمل {#how-it-works}

لعرض الاتجاه، يجب اختيار **نقطة هدف**. إذا تم اختيار نقطة **وجهة** (أو **النقطة الوسيطة الأولى**، إذا كانت موجودة) للتنقل، فسيتم استخدامها كنقطة هدف. وإلا، سيتم استخدام **أعلى علامة محددة**.  

- [Relative bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) هو الزاوية بين اتجاه حركتك الأمامية ونقطة الهدف. اتجاه **الحركة الأمامية** هو إما **اتجاه حركتك** المحصل من أجهزة استشعار GPS أو إذا كنت واقفًا **حيث أشرت جهازك** (أي. اتجاه جهازك وفقًا لبوصلته المغناطيسية). مثال: جسم باتجاه نسبي ٠° مباشرة أمامك وجسم باتجاه نسبي ١٨٠° مباشرة خلفك. **الاتجاه النسبي** هو الزاوية بين اتجاهك الأمامي ونقطة الهدف.

- [Magnetic bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) هو الزاوية الساعية (الأفقية) بين الشمال المغناطيسي ونقطة الهدف المرصودة من موقعك. يجب أن تتبع قيمة بوصلة مغناطيسية هذه للوصول إلى هدفك. مثال: إذا تم عرض **الاتجاه المغناطيسي** كـ ٠° M، يجب أن تتحرك بدقة نحو الشمال المغناطيسي للوصول إلى نقطة الهدف.

- [True bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) يُعبر عنه كزاوية أفقية بين خط الطول الجغرافي وخط على الأرض. تحديدًا، **true point bearing** هو الزاوية المقاسة بالدرجات ساعية من خط الشمال الحقيقي. سيعرض برنامج OsmAnd لك الاتجاه الحقيقي والتوجه في واجهتنا الودية للمستخدم، مما يجعل من السهل عليك اتخاذ القرار الصحيح مبكرًا.

### التنقل على طول خط الرُومب {#navigation-along-the-rhumb-line}

- **Relative bearing**. إذا التزمت باتجاه نسبي قدره ٠ درجات وتحركت إلى الأمام، فسوف تصل إلى نقطة الوجهة، لكن ليس بالطريق الأقصر ( [Rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Magnetic bearing**. إذا قمت بمواءمة البوصلة على قاربك/مركبتك مع قيمة الأداة وتوجهت إلى الأمام، فسوف تصل إلى وجهتك، لكن ليس بالطريق الأقصر ( [Rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## نقاط التنقل {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

يعرض مجموعة أدوات *Navigation point* المسافة المتبقية إلى وجهتك، والنقطة الوسيطة، ووقت الوصول إلى النقطة الوسيطة أو وقت السفر للطريق المحسوب، ووقت الوصول المتوقع.

### معلومات الطريق {#route-information}


![Destination widget](@site/static/img/widgets/route_information_widget.png)  

توفر أداة *Route Information* بيانات في الوقت الفعلي حول طريق التنقل الجاري وطريقة سريعة [لإدارة طريق نشط](../navigation/setup/route-navigation.md#start--stop-navigation). تساعد في تتبع تفاصيل الطريق الرئيسية وتسمح لك بإيقاف أو استئناف جلسة التنقل الحالية بتفاعل أدنى.

**المعلومات المعروضة:**

- **وقت الوصول المتوقع (ETA)**. يعرض وقت الوصول المتوقع إلى الوجهة النهائية.
- **الوقت المتبقي للسفر**. يعرض الوقت المتوقع المتبقي للوصول إلى الوجهة.
- **المسافة إلى الوجهة**. يشير إلى إجمالي المسافة المتبقية إلى الوجهة النهائية والمسافات إلى النقاط الوسيطة.

**قائمة الإعدادات**:

- اختر **عرض افتراضي** لتحديد أولوية إحدى القيم التالية: *وقت الوصول المتوقع*، *الوقت للذهاب*، *المسافة*.
- في **أولوية العرض**، اختر بين *الوجهة أولاً (افتراضي)* أو *الوسيط أولاً* لتحديد أولوية المعلومات الأكثر صلة بالطريق.

> ملاحظة: الأداة مرئية فقط أثناء التنقل.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Add widget  →معلومات الطريق* |
| By tapping | Tap the button with arrow to open [Start/Stop Navigation panel](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### المسافة إلى الوجهة {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)  

تعرض الأداة المسافة المتبقية إلى آخر نقطة وجهة عند اتباع طريق محسوب.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| By tapping | Moves the map to the destination point. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |

### المسافة إلى الوسيط {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

تعرض الأداة المسافة إلى أول نقطة وسيطة على طول الطريق المحسوب. بعد المرور بنقاط وسيطة، سيتم تحديث المساحة إلى النقطة الوسيطة التالية. إذا لم تكن هناك نقاط وسيطة، فإن الأداة لا تُعرض.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| By tapping | **One intermediate point** - move the map to the intermediate point. <br /> **Two or more intermediate points** - opens Destinations list menu. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |

### الوقت إلى الوسيط {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

تعرض الأداة *وقت الوصول* أو *الوقت للذهاب* إلى أول نقطة وسيطة. أثناء التنقل، يتم تحديث الوقت باستمرار، وبمجرد المرور بنقطة وسيطة، سيتم تحديث الوقت إلى النقطة التالية. على سبيل المثال، إذا توقفت عن التنقل، سيبقى *الوقت للذهاب* دون تغيير وسيكون *وقت الوصول* مساويًا لـ *الوقت للذهاب* بالإضافة إلى *الوقت الحالي*.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget →  <Translate ios="true" ids="map_widget_time_to_intermediate"/>* |
| By tapping | Changes between *Arrival time* to *Time to go* and the reverse. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### الوقت إلى الوجهة {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

تعرض الأداة *وقت الوصول* أو *الوقت للذهاب* إلى آخر نقطة وجهة. يتم تحديث الوقت باستمرار أثناء التنقل وهو مساوٍ لوقت الطريق من موقعك الحالي.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_time_to_destination"/>* |
| By tapping | Changes between *Arrival time* to *Time to go* and the reverse. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |  


## حظر السرعة {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

تعرض أداة *Speed Limit* حظر السرعة الحالي بناءً على بيانات الخريطة لطريقك.

- يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- تعمل الأداة في وضعي التنقل السلبي والنشط.
- إذا كانت بيانات حظر السرعة غير متاحة لطريق أو منطقة معينة، *لن تظهر الأداة*.

> ملاحظة: تأكد من أن [خرائطك محدثة](../personal/maps-resources.md#updates-menu) وأنك قمت بتنزيل جميع البيانات الإقليمية الضرورية للوصول إلى أحدث معلومات حظر السرعة.

| |  |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## إرشاد الطريق {#route-guidance}


![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

يوفر إرشاد طريق في الوقت الفعلي، بما في ذلك المسافة إلى المنعطف التالي، واسم الطريق، واسم الشارع الحالي، ومعلومات المسار. الأدوات نشطة أثناء التنقل.

تحتوي أدوات *Route Guidance* على معلومات حول:

- [Lanes](#lanes) - يعرض الموقع الحالي لمسارات الطريق ويبرز تلك التي يجب أن تقود عليها. (فقط لـ _Top / Bottom panels_)
- [Next turn](#next-turn) - المنعطف التالي مع سهم كبير يمثل المناورة وبيانات حول المسافة إليه.
- [Next turn (small)](#next-turn) - المنعطف التالي مع سهم صغير يمثل المناورة وبيانات مسافة بجانب السهم. (فقط لـ _Left / Right panels_)
- [Second next turn](#next-turn) هو المنعطف التالي بعد المنعطف الأول، والذي يتم تفعيله إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| Enable      | **Android:** *Menu → Configure screen →  Left / Right / Top / Bottom panel → Route Guidance → Add widget → Lane, Next turn, Second next turn*  |
|      | **iOS:** *Menu → Configure screen →  Left / Right / Top / Bottom panel → Route Guidance → Add widget → Lane, Next turn, Second next turn*   |
| By tapping  | **Next turn**: If [voice prompts](../navigation/guidance/voice-navigation.md) are enabled, the next maneuver and the distance to it are pronounced. <br/> **Lane**: No changes. |
| Long tap    | **Next turn**: Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Lanes**: No changes. |


### المسارات {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

تبرز أداة **Lanes** المسار الحالي عندما يكون التنقل نشطًا وتعرض تخطيط المسار للطريق الفعلي عندما يكون التنقل سلبيًا. كما يُعرض مؤشر مسافة أيضًا أسفل رسم المسار، يمثل المسافة المتبقية حتى المناورة التي ينطبق عليها إرشاد المسار. هذه الأداة متاحة فقط لـ Top وBottom panels. يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).


### المنعطف التالي {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

يمكن وضع أدوات التنقل **Next turn**، **Next turn (small)**، **Second next turn** على أي لوحة لتسهيل المستخدم. ومع ذلك، تختلف المعلومات المعروضة اعتمادًا على نوع الأداة ووضعها. 

في لوحات Top / Bottom، يمكن عرض أدوات Next turn وSecond next turn كـ Full width (أداة واحدة لكل صف) أو Half width (أداتان لكل صف). يعتمد المحتوى على التخطيط وحجم الأداة المحدد (S / M / L).

يعرض Full width:
- السطر الأول — المسافة إلى المنعطف + Exit N (إذا كان متاحًا)
- السطر الثاني — رقم الطريق مع درع + اسم الطريق/الشارع

يعرض Half width:
- السطر الأول — المسافة إلى المنعطف
- السطر الثاني — Exit N (إذا كان متاحًا) + رقم الطريق مع درع + اسم الطريق/الشارع

**Next turn** يستخدم سهمًا كبيرًا ويدعم تخطيطات Full width / Half width في لوحات Top / Bottom. **Next turn (small)** يستخدم سهمًا صغيرًا مع المسافة الموضوعة بجانب السهم وهو مخصص للوحات Left / Right. **Second next turn** يعرض المناورة بعد المنعطف التالي ويصبح نشطًا عندما تكون المناورة الثانية ضمن مسافة الاقتراب.

### تلميحات الألوان {#color-prompts}

يعرض هذا الجدول الوقت التقريبي حتى تفعيل التلميحات والإشارة اللونية المقابلة للأسهم لأداء المناورة. لمزيد من المعلومات، راجع [الوثائق الفنية](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) أو في المقالة [Voice prompts](../navigation/guidance/voice-navigation.md).

| Color     | ~ Trigger Time | Distance   | Prompt type     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Green  | 5 seconds      | Close by   | Turn now        |
| 🟡 Yellow | 20 seconds     | Approaching| Turn in `x` m   |
| ⚪ Grey   | > 100 seconds  | Distant    | Prepare to turn |

ينطبق نفس معنى اللون على أداة Lanes. تُعرض أداة Lanes وفقًا لإعدادات وقت الاقتراب، ولألوان المسارات تتبع مرحلة الإرشاد الصوتي.

<!--
### Color Prompts for Lanes {#color-prompts-for-lanes}

Displays a widget by approach time settings. Lane's color is associated with [voice prompts](../navigation/guidance/voice-navigation.md) and time remaining to perform the maneuver.

| Color     | ~ Trigger Time | Distance    | Prompt type |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Green  | 5 seconds      | Close by    | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Yellow | 20 seconds     | Approaching | [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
-->


## أداة التنبيه {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

تجمع أداة **Alert** بين عدة أنواع من التنبيهات التي تُعرض في الزاوية اليسرى السفلية أثناء تنقلك.  

- لديك القدرة على تشغيل تنبيهات مثل *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* و *<Translate android="true" ids="show_tunnels"/>* وإيقافها. التنبيهات الأخرى نشطة افتراضيًا إذا تم تفعيل الأداة.  

- بالنسبة لنوع تنبيه *Speed Limit*، يمكنك تعديل قيمة <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) في إعدادات الإرشاد الصوتي لتتناسب بشكل أفضل مع سرعة المركبة وسرعة GPS.  

- معظم التنبيهات تُعرض على الشاشة وتُعلن بواسطة الإرشاد الصوتي لمدة ١٥ ثانية، بالإضافة إلى وقت التشغيل للمرور بنقطة Waypoint، أو نقطة المفضلة، أو POI. اقرأ المزيد [هنا](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Enable | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### أنواع التنبيهات {#alert-types}

لأنواع التنبيه تصميم بصري مختلف، يعتمد على **<Translate android="true" ids="driving_region"/>**  ويمكن تهيئتها من خلال  *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. لا يهدف OsmAnd إلى تمثيل ١٠٠٪ علامات الطريق المتطابقة بل يشير إلى بعض التشابهات.

| | | |
|:------------|:------------|:------------|
| Name | Description | Icon |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Traffic calming](https://en.wikipedia.org/wiki/Traffic_calming) uses physical design and other measures to improve safety for motorists, pedestrians and cyclists. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [A pedestrian crossing](https://en.wikipedia.org/wiki/Pedestrian_crossing) (primarily British English) or crosswalk is a place designated for pedestrians to cross a road, street, or avenue. OsmAnd shows the alert of the uncontrolled pedestrian crossing.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In most countries, the [Road speed limits](https://en.wikipedia.org/wiki/Speed_limit) set the legal maximum, middle, or minimum speed at which road vehicles may travel on a given stretch of road. In OsmAnd, the alert is shown when you exceed the speed. You can set parameters of speed exceeding (0, 5, 10.. km/h). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | A tunnel is an underground passageway, passing under a mountain, river, or a congested urban area. In OsmAnd, the alert *Tunnels* have information about tunnel length. If you are in a tunnel, it shows the distance to the end of the tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Traffic enforcement cameras](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) and [speed cameras](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) record traffic offenses, including speeding, running red lights, and other types of illegal behavior. <br />**NOTE:** Speed camera alerts are prohibited or illegal in some countries. To completely [remove speed cameras](../personal/global-settings.md#legal) from OsmAnd, go to main *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [A stop sign](https://en.wikipedia.org/wiki/Stop_sign) is a traffic sign designed to notify drivers that they must come to a complete stop and make sure the intersection is safely clear of vehicles and pedestrians before continuing past the sign.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |This warning means that there is a [railway crossing](https://en.wikipedia.org/wiki/Crossbuck) ahead. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |This warning indicates that border control is ahead.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Hazard symbols or warning symbols](https://en.wikipedia.org/wiki/Hazard_symbol) are recognizable symbols designed to warn about hazardous materials, locations, or objects, including electric currents, poisons, and radioactivity. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | This warning indicates that a toll booth for a toll road is ahead.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## اسم الشارع {#street-name}

تعرض أداة اسم الشارع **اسم الشارع الحالي** مع سهم مستقيم، أو **اسم الشارع التالي** مع المناورة المراد أداؤها. عادةً ما يتكون اسم الشارع من درع الطريق السريع، و[اسم](https://wiki.openstreetmap.org/wiki/Key:name)، و[ref](https://wiki.openstreetmap.org/wiki/Key:ref)، و[مرجع دولي](https://wiki.openstreetmap.org/wiki/Key:int_ref)، و[وجهة](https://wiki.openstreetmap.org/wiki/Key:destination). 

في الإعدادات يمكنك اختيار عرض **اسم الشارع الحالي** دائمًا واستخدامه مع أداة [**Next turn**](#next-turn). **Next turn information** مغلق افتراضيًا. إذا قمت بتفعيله، فإن التبديل بين اسم الشارع الحالي واسم الشارع التالي يحدث عندما تقترب من المكان الذي تريد أداء المناورة فيه (~٢٠ ثانية)، نفس الإرشاد الصوتي [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![Street name without next turn](@site/static/img/widgets/without_next_turn_and.png) ![Street name with next turn](@site/static/img/widgets/with_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![Street name without next turn ios](@site/static/img/widgets/without_next_turn_ios.png) ![Street name with next turn ios](@site/static/img/widgets/with_next_turn_ios.png) 

</TabItem>

</Tabs>


| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → <Translate android="true" ids="map_widget_top_text"/>* |
| Settings | اختر لعرض **اسم الشارع الحالي** دائمًا أو عرض **اسم الشارع التالي** عند الاقتراب من المناورة |
| By tapping | Opens a context menu with Settings (toggle Next turn information ON/OFF) and Delete |


## نقاط الاهتمام / المفضلات الاقتراب {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

أداة **Approach POIs/Favorites/Waypoints** مجتمعة مع [اسم الشارع](#street-name) وتعرض نقاط الاهتمام الاقترابية والمرور، ونقاط الطريق للمسار المتبع، والمفضلات على طول الطريق.  

تعرض **الاسم**، **أيقونة النقطة**، و٢ **مسافات**:

- **مسافة الطريق** (أعلى) تعرض كم مسافة يجب تغطيتها بالطريق التالي.
- **مسافة الانحراف** هي مسافة مستقيمة من أقرب نقطة طريق إلى النقطة نفسها.

**iOS** - بالإضافة إلى المسافة إلى أقرب نقطة طريق، يتم عرض الجانب (اليسار أو اليمين) للطريق الذي تقع عليه نقطة الطريق أيضًا.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Start navigation → pencil button* |
| By tapping | No changes |


## المقالات ذات الصلة {#related-articles}

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)