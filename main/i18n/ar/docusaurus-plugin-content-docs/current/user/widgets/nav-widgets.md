---
source-hash: 292d8a0b5fbc689d6e07f6ebd71d0b9a70856fabf41202c365ab38c143096e5d
sidebar_position: 4
title:  أدوات التنقل
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

![جميع أدوات التنقل](@site/static/img/widgets/navigational_widgets_all.png)


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

:::info ميزة Pro
أداة الارتفاع هي ميزة مدفوعة لـ [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

تعرض أداة الارتفاع رسمًا بيانيًا مع الارتفاع وميل طريق التنقل الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع الحالي والميل. يتم رسم الرسم البياني على محورين. المحور X هو مسافة طريقك. المحور Y هو الارتفاع، والقيمة تعتمد على التضاريس، ويتم عرض الميل كنسبة مئوية.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![أداة الارتفاع](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


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
| ![نقطة](@site/static/img/widgets/sch_1-1.png)|
| ***معلومات إضافية*** |
| الجانب الأيمن من الأداة يحتوي على بيانات حول أعلى ارتفاع وميل، والقيمة المتوسطة لكليهما، وأدنى ارتفاع وميل في القسم المحدد من الطريق المرئي على الرسم البياني. |
|  ![بيانات](@site/static/img/widgets/sch_1-2.png)|
|القيمتا ***Uphill*** و***Downhill*** هما مجموع المسافات من نقطة موقعك إلى نهاية الرسم البياني المرئي. إذا لم يكن هناك نقطة موقع على الرسم البياني، فإنه مجموع الرسم البياني المرئي بأكمله على الشاشة (هذا يمكن أن يحدث عندما تغير المقياس ويخرج الموقع خارج الرسم البياني).|
| **Uphill** – يعرض مجموع جميع المسافات مع زيادة الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة. |
| ![مخطط الصعود](@site/static/img/widgets/sch_uphill_1.png) ![مخطط الصعود](@site/static/img/widgets/sch_uphill_2.png)|  
| **Downhill** – يعرض مجموع جميع المسافات مع انخفاض الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة.|
| ![مخطط النزول](@site/static/img/widgets/sch_downhill_1.png) ![مخطط النزول](@site/static/img/widgets/sch_downhill_2.png)|  
|***Grade*** هو نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية وعدد الدرجات يشير إلى درجة ميل أعلى أو أكثر انحدارًا.|
| **Grade** – يعرض أقصى ميل طريق كنسبة مئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للقسم المحدد من الطريق بدون نقطة الموقع المرئية على الشاشة. |
|![مخطط الميل](@site/static/img/widgets/sch_grade_1.png) ![مخطط الميل](@site/static/img/widgets/sch_grade_2.png)|


## أداة الاتجاه   {#bearing-widget}
  
الاتجاه هو الاتجاه نحو هدف خارج مركبتك، مثل وجهة أو نقطة أصل. يمكن أن يكون الاتجاه *نسبيًا* (وفقًا لمسارك) أو *مغناطيسيًا* (وفقًا للبوصلة). على سبيل المثال، الاتجاه المغناطيسي ١٨٠° هو الاتجاه نحو الجنوب، والاتجاه النسبي ١٨٠° هو مباشرة خلفك. النقاط الرئيسية هي الاتجاهات الأربعة الرئيسية للبوصلة. وهي الشمال (*N* - ٠° أو ٣٦٠°)، الشرق (*E* - ٩٠°)، الجنوب (*S* - ١٨٠°)، والغرب (*W* - ٢٧٠°).  

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget.png) ![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![أداة تسجيل الرحلة](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → اختر لوحة → أضف أداة →  <Translate ios="true" ids="shared_string_bearing"/>* |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | **أندرويد:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **آي أو إس:** يمكنك تغيير تنسيق عرض البيانات للوحدات الزاوية: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### كيفية العمل {#how-it-works}

لعرض الاتجاه، يجب اختيار **نقطة هدف**. إذا تم اختيار نقطة **وجهة** (أو **النقطة الوسيطة الأولى**، إذا كانت موجودة) للتنقل، فسيتم استخدامها كنقطة هدف. وإلا، سيتم استخدام **أعلى علامة محددة**.  

- [Relative bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) هو الزاوية بين اتجاه حركتك الأمامية ونقطة الهدف. اتجاه **الحركة الأمامية** هو إما **اتجاه حركتك** المحصل من أجهزة استشعار GPS أو إذا كنت واقفًا **حيث أشرت جهازك** (أي. اتجاه جهازك وفقًا لبوصلته المغناطيسية). مثال: جسم باتجاه نسبي ٠° مباشرة أمامك وجسم باتجاه نسبي ١٨٠° مباشرة خلفك. **الاتجاه النسبي** هو الزاوية بين اتجاهك الأمامي ونقطة الهدف.

- [Magnetic bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) هو الزاوية الساعية (الأفقية) بين الشمال المغناطيسي ونقطة الهدف المرصودة من موقعك. يجب أن تتبع قيمة بوصلة مغناطيسي هذه للوصول إلى هدفك. مثال: إذا تم عرض **الاتجاه المغناطيسي** كـ ٠° M، يجب أن تتحرك بدقة نحو الشمال المغناطيسي للوصول إلى نقطة الهدف.

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


![أداة الوجهة](@site/static/img/widgets/route_information_widget.png)  

توفر أداة *Route Information* بيانات في الوقت الفعلي حول طريق التنقل الجاري وطريقة سريعة [لإدارة طريق نشط](../navigation/setup/route-navigation.md#start--stop-navigation). تساعد في تتبع تفاصيل الطريق الرئيسية وتسمح لك بإيقاف أو استئناف جلسة التنقل الحالية بتفاعل أدنى.

**المعلومات المعروضة:**

- **وقت الوصول المتوقع (ETA)**. يعرض وقت الوصول المتوقع إلى الوجهة النهائية.
- **الوقت المتبقي للسفر**. يعرض الوقت المتوقع المتبقي للوصول إلى الوجهة.
- **المسافة إلى الوجهة**. يشير إلى إجمالي المسافة المتبقية إلى الوجهة النهائية والمسافات إلى النقاط الوسيطة.

**قائمة الإعدادات**:

- اختر **عرض افتراضي** لتحديد أولوية إحدى القيم التالية: *وقت الوصول المتوقع*، *الوقت للذهاب*، *المسافة*.
- في **أولوية العرض**، اختر بين *الوجهة أولاً (افتراضي)* أو *الوسيط أولاً* لتحديد أولوية المعلومات الأكثر صلة بالطريق.
- فعّل أو عطّل خيار **إظهار زر التوسيع** لإظهار أو إخفاء زر توسيع واجهة التنقل. هذا الخيار مفعّل افتراضيًا.

> ملاحظة: الأداة مرئية فقط أثناء التنقل.

على هواتف أندرويد في الاتجاه الأفقي، تكون أداة *<Translate android="true" ids="map_widget_route_information"/>* مخفية افتراضيًا. وبدلاً من ذلك، تعرض *<Translate android="true" ids="map_widget_right"/>* الأدوات [<Translate android="true" ids="map_widget_distance_to_destination"/>](#distance-to-destination) و[<Translate android="true" ids="map_widget_time_to_destination"/>](#time-to-destination) و[<Translate android="true" ids="map_widget_distance_to_intermediate"/>](#distance-to-intermediate) و[<Translate android="true" ids="map_widget_time_to_intermediate"/>](#time-to-intermediate). يمكنك إظهار أو إخفاء أي من هذه الأدوات في [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md).

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → أضف أداة → <Translate android="true" ids="map_widget_route_information"/>* |
| | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → أضف أداة → معلومات الطريق* |
| بالنقر  | اضغط على الزر ذي السهم لفتح [لوحة بدء/إيقاف التنقل](../navigation/setup/route-navigation.md#start--stop-navigation) |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |
| تنسيق | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### المسافة إلى الوجهة {#distance-to-destination}

![أداة الوجهة](@site/static/img/widgets/destination_widget.png)  

تعرض الأداة المسافة المتبقية إلى آخر نقطة وجهة عند اتباع طريق محسوب.  

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| بالنقر  | ينقل الخريطة إلى نقطة الوجهة. |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |

### المسافة إلى الوسيط {#distance-to-intermediate}

![أداة الوجهة الوسيطة](@site/static/img/widgets/intermediate_destination_widget.png)

تعرض الأداة المسافة إلى أول نقطة وسيطة على طول الطريق المحسوب. بعد المرور بنقاط وسيطة، سيتم تحديث المساحة إلى النقطة الوسيطة التالية. إذا لم تكن هناك نقاط وسيطة، فإن الأداة لا تُعرض.

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| بالنقر  | **نقطة وسيطة واحدة** - ينقل الخريطة إلى النقطة الوسيطة. <br /> **نقطتان وسيطتان أو أكثر** - يفتح قائمة الوجهات. |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |

### الوقت إلى الوسيط {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![أداة وقت الوصول والوقت المتبقي](@site/static/img/widgets/arrival_time_widget_android.png)  ![أداة وقت الوصول والوقت المتبقي](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![أداة وقت الوصول والوقت المتبقي](@site/static/img/widgets/arrival_time_widget_ios.png)  ![أداة وقت الوصول والوقت المتبقي](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

تعرض الأداة *وقت الوصول* أو *الوقت للذهاب* إلى أول نقطة وسيطة. أثناء التنقل، يتم تحديث الوقت باستمرار، وبمجرد المرور بنقطة وسيطة، سيتم تحديث الوقت إلى النقطة التالية. على سبيل المثال، إذا توقفت عن التنقل، سيبقى *الوقت للذهاب* دون تغيير وسيكون *وقت الوصول* مساويًا لـ *الوقت للذهاب* بالإضافة إلى *الوقت الحالي*.

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| بالنقر  | يبدل بين *وقت الوصول* و*الوقت المتبقي* والعكس. |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


### الوقت إلى الوجهة {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![أداة وقت الوصول الوسيط والوقت](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![أداة وقت الوصول الوسيط والوقت](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

تعرض الأداة *وقت الوصول* أو *الوقت للذهاب* إلى آخر نقطة وجهة. يتم تحديث الوقت باستمرار أثناء التنقل وهو مساوٍ لوقت الطريق من موقعك الحالي.  

| | |
|:------------|:------------|
| تمكين  |  **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| بالنقر  | يبدل بين *وقت الوصول* و*الوقت المتبقي* والعكس. |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |  


## حظر السرعة {#speed-limit}

![أداة حظر السرعة](@site/static/img/widgets/speed_limit_widget_2.png)

تعرض أداة *Speed Limit* حظر السرعة الحالي بناءً على بيانات الخريطة لطريقك.

- يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- تعمل الأداة في وضعي التنقل السلبي والنشط.
- إذا كانت بيانات حظر السرعة غير متاحة لطريق أو منطقة معينة، *لن تظهر الأداة*.

> ملاحظة: تأكد من أن [خرائطك محدثة](../personal/maps-resources.md#updates-menu) وأنك قمت بتنزيل جميع البيانات الإقليمية الضرورية للوصول إلى أحدث معلومات حظر السرعة.

| |  |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → اختر لوحة → أضف أداة → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **آي أو إس:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → اختر لوحة → أضف أداة → <Translate ios="true" ids="map_widget_max_speed"/>* |
| بالنقر  | لا تغييرات |
| النقر الطويل  | يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) |


## إرشاد الطريق {#route-guidance}


![أداة المنعطفات التالية](@site/static/img/widgets/next_turns_widget.png)

يوفر إرشاد طريق في الوقت الفعلي، بما في ذلك المسافة إلى المنعطف التالي، واسم الطريق، واسم الشارع الحالي، ومعلومات المسار. الأدوات نشطة أثناء التنقل.

تحتوي أدوات *Route Guidance* على معلومات حول:

- [Lanes](#lanes) - يعرض الموقع الحالي لمسارات الطريق ويبرز تلك التي يجب أن تقود عليها. (فقط لـ _Top / Bottom panels_)
- [Next turn](#next-turn) - المنعطف التالي مع سهم كبير يمثل المناورة وبيانات حول المسافة إليه.
- [Next turn (small)](#next-turn) - المنعطف التالي مع سهم صغير يمثل المناورة وبيانات مسافة بجانب السهم. (فقط لـ _Left / Right panels_)
- [Second next turn](#next-turn) هو المنعطف التالي بعد المنعطف الأول، والذي يتم تفعيله إذا كان ضمن مسافة الاقتراب.

| | |
|:------------|:------------|
| تمكين       | **أندرويد:** *القائمة → تهيئة الشاشة → لوحة يسرى / يمنى / علوية / سفلية → إرشاد الطريق → أضف أداة → المسارات، المنعطف التالي، المنعطف التالي الثاني*  |
|      | **آي أو إس:** *القائمة → تهيئة الشاشة → لوحة يسرى / يمنى / علوية / سفلية → إرشاد الطريق → أضف أداة → المسارات، المنعطف التالي، المنعطف التالي الثاني*   |
| بالنقر   | **المنعطف التالي**: إذا كانت [المطالبات الصوتية](../navigation/guidance/voice-navigation.md) مفعّلة، يتم نطق المناورة التالية والمسافة إليها. <br/> **المسارات**: لا تغييرات. |
| النقر الطويل     | **المنعطف التالي**: يفتح [قائمة السياق للأداة](../widgets/configure-screen.md#widget-context-menu) <br/> **المسارات**: لا تغييرات. |


### المسارات {#lanes}

![أدوات المسارات](@site/static/img/widgets/lanes_widget.png)

تبرز أداة **Lanes** المسار الحالي عندما يكون التنقل نشطًا وتعرض تخطيط المسار للطريق الفعلي عندما يكون التنقل سلبيًا. كما يُعرض مؤشر مسافة أيضًا أسفل رسم المسار، يمثل المسافة المتبقية حتى المناورة التي ينطبق عليها إرشاد المسار. هذه الأداة متاحة فقط لـ Top وBottom panels. يتم أخذ البيانات من [مشروع OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn). إذا لم تحدد بيانات الخريطة اتجاهًا لكل مسار، يكمل OsmAnd الاتجاهات المفقودة بناءً على تخطيط التقاطع.

على Android، تتضمن إعدادات الأداة خيار *Display on minor intersections when navigating straight*، وهو مفعّل افتراضيًا. مع هذا الخيار، تعرض الأداة المسارات عند كل تقاطع تمر به أثناء القيادة مباشرة، حتى لو لم يكن هناك إرشاد صوتي لذلك التقاطع.


### المنعطف التالي {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![أداة إرشاد الطريق](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![اقتراب نقاط الاهتمام/المفضلات iOS](@site/static/img/widgets/route_guidence_widgets_ios.png)

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

| اللون     | الوقت التقريبي للتفعيل | المسافة   | نوع التلميح     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 أخضر  | ٥ ثوانٍ      | قريب   | انعطف الآن        |
| 🟡 أصفر | ٢٠ ثانية     | اقتراب| انعطف بعد `x` م   |
| ⚪ رمادي   | > ١٠٠ ثانية  | بعيد    | استعد للانعطاف |

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

![أدوات معلومات التنبيه](@site/static/img/widgets/alert_information_widget.png)

تجمع أداة **Alert** بين عدة أنواع من التنبيهات التي تُعرض في الزاوية اليسرى السفلية أثناء تنقلك.  

- لديك القدرة على تشغيل تنبيهات مثل *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* و *<Translate android="true" ids="show_tunnels"/>* وإيقافها. التنبيهات الأخرى نشطة افتراضيًا إذا تم تفعيل الأداة.  

- بالنسبة لنوع تنبيه *Speed Limit*، يمكنك تعديل قيمة <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) في إعدادات الإرشاد الصوتي لتتناسب بشكل أفضل مع سرعة المركبة وسرعة GPS.  

- معظم التنبيهات تُعرض على الشاشة وتُعلن بواسطة الإرشاد الصوتي لمدة ١٥ ثانية، بالإضافة إلى وقت التشغيل للمرور بنقطة Waypoint، أو نقطة المفضلة، أو POI. اقرأ المزيد [هنا](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| تمكين  | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### أنواع التنبيهات {#alert-types}

لأنواع التنبيه تصميم بصري مختلف، يعتمد على **<Translate android="true" ids="driving_region"/>**  ويمكن تهيئتها من خلال  *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. لا يهدف OsmAnd إلى تمثيل ١٠٠٪ علامات الطريق المتطابقة بل يشير إلى بعض التشابهات.

| | | |
|:------------|:------------|:------------|
| الاسم | الوصف | الأيقونة |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [تهدئة حركة المرور](https://en.wikipedia.org/wiki/Traffic_calming) تستخدم التصميم المادي وإجراءات أخرى لتحسين السلامة لسائقي المركبات والمشاة وراكبي الدراجات. | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_traffic_calming.png)  ![تنبيه تهدئة حركة المرور الولايات المتحدة](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [معبر المشاة](https://en.wikipedia.org/wiki/Pedestrian_crossing) (crosswalk) هو مكان مخصص لعبور المشاة طريقًا أو شارعًا أو جادة. يعرض OsmAnd تنبيه معبر المشاة غير المنظم.  | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_pedestrian.png)  ![تنبيه تهدئة حركة المرور الولايات المتحدة](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | في معظم البلدان، تحدد [حدود سرعة الطرق](https://en.wikipedia.org/wiki/Speed_limit) السرعة القصوى أو المتوسطة أو الدنيا القانونية التي يمكن للمركبات السير بها على امتداد معين من الطريق. في OsmAnd، يُعرض التنبيه عند تجاوز السرعة. يمكنك ضبط معاملات تجاوز السرعة (٠، ٥، ١٠.. كم/س). ![تنبيه مثال تجاوز السرعة](@site/static/img/widgets/ex_warning_speed.png)  | ![تنبيه حظر السرعة](@site/static/img/widgets/warnings_limit.png) ![تنبيه حظر السرعة كندا](@site/static/img/widgets/warnings_speed_limit_ca.png) ![تنبيه حظر السرعة الولايات المتحدة](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | النفق هو ممر تحت الأرض، يمر تحت جبل أو نهر أو منطقة حضرية مزدحمة. في OsmAnd، يحتوي تنبيه *الأنفاق* على معلومات عن طول النفق. إذا كنت داخل نفق، فإنه يعرض المسافة إلى نهاية النفق.   ![تنبيه مثال نفق](@site/static/img/widgets/ex_warning_tunnel.png)  | ![تنبيه نفق](@site/static/img/widgets/warnings_tunnel.png)  ![تنبيه نفق الولايات المتحدة](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [كاميرات إنفاذ المرور](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) و[كاميرات السرعة](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) تسجل المخالفات المرورية، بما في ذلك تجاوز السرعة وقطع الإشارة الحمراء وأنواع أخرى من السلوك المخالف للقانون. <br />**ملاحظة:** تنبيهات كاميرات السرعة محظورة أو غير قانونية في بعض البلدان. لإزالة [كاميرات السرعة](../personal/global-settings.md#legal) بالكامل من OsmAnd، اذهب إلى *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![تنبيه تهدئة حركة المرور](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [إشارة التوقف](https://en.wikipedia.org/wiki/Stop_sign) هي إشارة مرورية مصممة لإبلاغ السائقين بوجوب التوقف التام والتأكد من خلو التقاطع بأمان من المركبات والمشاة قبل متابعة السير بعد الإشارة.  | ![تنبيه إشارة التوقف](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* | يعني هذا التحذير وجود [تقاطع سكة حديد](https://en.wikipedia.org/wiki/Crossbuck) في الأمام. | ![تنبيه تقاطع سكة حديد](@site/static/img/widgets/warnings_railways.png) ![تنبيه تقاطع سكة حديد كندا](@site/static/img/widgets/warnings_railways_ca.png)  ![تنبيه تقاطع سكة حديد الولايات المتحدة](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | يشير هذا التحذير إلى وجود نقطة مراقبة حدودية في الأمام. | ![تنبيه نقطة مراقبة حدودية](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [رموز الخطر أو رموز التحذير](https://en.wikipedia.org/wiki/Hazard_symbol) هي رموز معروفة مصممة للتحذير من المواد أو الأماكن أو الأجسام الخطرة، بما في ذلك التيارات الكهربائية والسموم والإشعاع. | ![تنبيه رمز الخطر](@site/static/img/widgets/warnings_hazard.png)  ![تنبيه رمز الخطر الولايات المتحدة](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | يشير هذا التحذير إلى وجود كشك رسوم لطريق مدفوع في الأمام.   ![تنبيه كشك الرسوم](@site/static/img/widgets/ex_toll_booth.png) | ![تنبيه حظر السرعة](@site/static/img/widgets/warnings_limit.png) |


## اسم الشارع {#street-name}

تعرض أداة اسم الشارع **اسم الشارع الحالي** مع سهم مستقيم، أو **اسم الشارع التالي** مع المناورة المراد أداؤها. عادةً ما يتكون اسم الشارع من درع الطريق السريع، و[اسم](https://wiki.openstreetmap.org/wiki/Key:name)، و[ref](https://wiki.openstreetmap.org/wiki/Key:ref)، و[مرجع دولي](https://wiki.openstreetmap.org/wiki/Key:int_ref)، و[وجهة](https://wiki.openstreetmap.org/wiki/Key:destination). 

في الإعدادات يمكنك اختيار عرض **اسم الشارع الحالي** دائمًا واستخدامه مع أداة [**Next turn**](#next-turn) لترى دائمًا اسم الشارع التالي أيضًا. **معلومات المنعطف التالي** مغلقة افتراضيًا. إذا قمت بتفعيلها، فإن التبديل بين اسم الشارع الحالي واسم الشارع التالي يحدث عندما تقترب من المكان الذي تريد أداء المناورة فيه (~٢٠ ثانية)، نفس الإرشاد الصوتي [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

 ![اسم الشارع بدون المنعطف التالي](@site/static/img/widgets/without_next_turn_and.png) ![اسم الشارع مع المنعطف التالي](@site/static/img/widgets/with_next_turn_and.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

 ![اسم الشارع بدون المنعطف التالي iOS](@site/static/img/widgets/without_next_turn_ios.png) ![اسم الشارع مع المنعطف التالي iOS](@site/static/img/widgets/with_next_turn_ios.png) 

</TabItem>

</Tabs>


| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → أضف أداة → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **آي أو إس:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → أضف أداة → <Translate android="true" ids="map_widget_top_text"/>* |
| Settings | اختر لعرض **اسم الشارع الحالي** دائمًا أو عرض **اسم الشارع التالي** عند الاقتراب من المناورة |
| بالنقر  | يفتح قائمة سياق تحتوي على الإعدادات (تشغيل/إيقاف معلومات المنعطف التالي) والحذف |


## نقاط الاهتمام / المفضلات الاقتراب {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![اقتراب نقاط الاهتمام/المفضلات أندرويد](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![اقتراب نقاط الاهتمام/المفضلات iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

أداة **Approach POIs/Favorites/Waypoints** مجتمعة مع [اسم الشارع](#street-name) وتعرض نقاط الاهتمام الاقترابية والمرور، ونقاط الطريق للمسار المتبع، والمفضلات على طول الطريق.  

تعرض **الاسم**، **أيقونة النقطة**، و٢ **مسافات**:

- **مسافة الطريق** (أعلى) تعرض كم مسافة يجب تغطيتها بالطريق التالي.
- **مسافة الانحراف** هي مسافة مستقيمة من أقرب نقطة طريق إلى النقطة نفسها.

**iOS** - بالإضافة إلى المسافة إلى أقرب نقطة طريق، يتم عرض الجانب (اليسار أو اليمين) للطريق الذي تقع عليه نقطة الطريق أيضًا.

| | |
|:------------|:------------|
| تمكين  | **أندرويد:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **آي أو إس:** *<Translate ios="true" ids="shared_string_menu"/> → ابدأ التنقل → زر القلم* |
| بالنقر  | لا تغييرات |


## المقالات ذات الصلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [الأدوات المعلوماتية](./info-widgets.md)
- [أدوات التنقل](./nav-widgets.md)
- [مسطرة النصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)