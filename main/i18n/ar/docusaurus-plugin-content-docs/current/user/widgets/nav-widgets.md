---
source-hash: cf00228b0959bc2aae53ebe181345d3b69c04b3d0d42a49a8ed5ebc376ca2673
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

يتم تمكين عناصر واجهة المستخدم الملاحية أثناء التنقل لعرض معلومات مثل المسافة، ووقت الوصول أو المغادرة، والمنعطفات التالية، والاتجاه، واسم الشارع الحالي، ومعلومات المسار، والسرعة القصوى، وتنبيهات الاقتراب، ونقاط الاهتمام، ونقاط الطريق.

![جميع عناصر واجهة المستخدم الملاحية](@site/static/img/widgets/navigational_widgets_all.png)

## التنقل النشط والسلبي {#active-and-passive-navigation}

تم تصميم عناصر واجهة المستخدم الملاحية في OsmAnd لتعزيز كل من أوضاع التنقل **النشطة** و**الخاملة**. توفر هذه العناصر معلومات قيمة مثل اتجاهات المسار وتفاصيل الطريق وحدود السرعة، اعتمادًا على **ملف التنقل** المحدد.

#### التنقل النشط {#active-navigation}

- **المتطلبات:**
  - تعيين **وجهة**.
  - حساب **المسار** باستخدام ميزة *الاتجاهات*.
  - **بدء** التنقل (التوجيه الصوتي اختياري).
  - متاح فقط عند التحرك على طول المسار.

- **عناصر واجهة المستخدم المدعومة:**
  - جميع **عناصر واجهة المستخدم الملاحية** متاحة.

- **الفوائد الرئيسية:**
  - يوفر **تعليمات خطوة بخطوة**، و**إرشادات المسار**، و**وقت الوصول المتوقع**.
  - يضمن تحديثات دقيقة وديناميكية أثناء الرحلة.

#### التنقل السلبي {#passive-navigation}

- **كيف يعمل:**
  - لا توجد وجهة مطلوبة.
  - يعمل تلقائيًا عند تحديد **ملف تنقل** (على سبيل المثال، *القيادة*، *ركوب الدراجات*).

- **الوظائف:**
  - يحاول تحديد الطريق الذي تتبعه باستخدام بيانات GPS.
  - يعرض **معلومات الطريق الأساسية**، مثل [اسم الشارع](#street-name)، [معلومات المسار](#lanes)، [السرعة القصوى](#speed-limit).

- **القيود:**
  - قد لا تعمل بعض الميزات المتقدمة بشكل صحيح بدون وجهة محددة.
  - قد لا تكون المعلومات المقدمة دائمًا **دقيقة**، خاصة على شبكات الطرق المعقدة.

> **ملاحظة.** *تذكر أن ملف تعريف **تصفح الخريطة** لا يدعم عناصر واجهة المستخدم الملاحية في أي من الوضعين. قم بالتبديل إلى **ملف تنقل** ذي صلة لتمكين هذه الميزات.*

<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## عنصر واجهة المستخدم للارتفاع {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> يمكنك استخدام عنصر واجهة المستخدم هذا فقط مع ميزة Pro <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">مشتركي OsmAnd Pro</a>.

:::

يعرض عنصر واجهة المستخدم للارتفاع رسمًا بيانيًا للارتفاع ومنحدر مسار التنقل الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع الحالي والمنحدر. يتم رسم الرسم البياني على محورين. المحور السيني هو مسافة مسارك. المحور الصادي هو الارتفاع، وتعتمد القيمة على التضاريس، ويتم عرض المنحدر كنسبة مئوية.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![عنصر واجهة المستخدم للارتفاع](@site/blog/2021-12-10-android-4-1/elevation_widget.png)

#### التفاعلات مع الرسم البياني {#interactions-with-the-graph}

- *التكبير/التصغير*. بشكل افتراضي، يعرض الرسم البياني المسار من الموقع الحالي حتى 10 كم للأمام. يمكنك استخدام [حركة إصبعين](../map/interact-with-map#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً لتغيرات الارتفاع على مسارك. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، للأمام على المسار، وللخلف إلى الموقع الحالي.
- *وضع نقطة على الرسم البياني*. إذا كنت ترغب في رؤية قيمة الارتفاع والدرجة عند نقطة معينة للأمام على مسارك، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر بالقيم.

#### ما يحتويه {#whats-in}

عند تحديد مسار والضغط على زر **ابدأ**، تفتح الخريطة بموقعك الحالي، والمسار، وعنصر واجهة المستخدم في أسفل الشاشة. يحتوي عنصر واجهة المستخدم على الرسم البياني ومعلومات حول *الصعود*، و*النزول*، و*الدرجة*، والمسافة، والارتفاع، وزاوية الميل. يمكنك تحديد *المقياس الأمثل* ورؤية جميع العقبات المحتملة على مسارك.

- تُشار إلى جميع القيم إما للمسار بأكمله أو للفاصل الزمني المحدد فقط عن طريق قياس الرسم البياني.
- اقرأ عن [ترخيص بيانات DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) المستخدمة بواسطة OsmAnd لتحديد الارتفاع.

| |
|:------------|
| ***دبوس الموقع*** |
| يتضمن ***موقعك الحالي*** على الرسم البياني أيقونة موقع، وارتفاع، وقيمة نسبة مئوية للميل. يحتوي الجانب الأيمن من عنصر واجهة المستخدم على أعلى ارتفاع وانحدار، والقيمة المتوسطة لهما، وأدنى قيمة على الجزء المحدد من المسار المرئي على الرسم البياني. |
| ![نقطة](@site/static/img/widgets/sch_1-1.png)|
| ***معلومات إضافية*** |
| يحتوي الجانب الأيمن من عنصر واجهة المستخدم على بيانات حول أعلى ارتفاع وانحدار، والقيمة المتوسطة لكليهما، وأدنى ارتفاع وانحدار على الجزء المحدد من المسار المرئي على الرسم البياني. |
| ![بيانات](@site/static/img/widgets/sch_1-2.png)|
| قيم ***الصعود*** و***النزول*** هي مجموع المسافات من نقطة موقعك إلى نهاية الرسم البياني المرئي. إذا لم تكن هناك نقطة موقع على الرسم البياني، فإنها مجموع الرسم البياني المرئي بالكامل على الشاشة (يمكن أن يحدث هذا عند تغيير المقياس ويخرج الموقع عن الرسم البياني).|
| **الصعود** – يعرض مجموع جميع المسافات مع زيادة الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
| ![مخطط الصعود](@site/static/img/widgets/sch_uphill_1.png) ![مخطط الصعود](@site/static/img/widgets/sch_uphill_2.png)|
| **النزول** – يعرض مجموع جميع المسافات مع انخفاض الارتفاع من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة.|
| ![مخطط النزول](@site/static/img/widgets/sch_downhill_1.png) ![مخطط النزول](@site/static/img/widgets/sch_downhill_2.png)|
|***الدرجة*** هي نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية ويشير عدد الدرجات إلى درجة ميل أعلى أو أكثر انحدارًا.|
| **الدرجة** – تعرض أقصى ميل للطريق بنسبة مئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة. |
|![مخطط الدرجة](@site/static/img/widgets/sch_grade_1.png) ![مخطط الدرجة](@site/static/img/widgets/sch_grade_2.png)|

## عنصر واجهة المستخدم للاتجاه {#bearing-widget}

الاتجاه هو الاتجاه إلى هدف خارج مركبتك، مثل وجهة أو نقطة أصل. يمكن أن يكون الاتجاه *نسبيًا* (وفقًا لمسارك) أو *مغناطيسيًا* (وفقًا للبوصلة). على سبيل المثال، الاتجاه المغناطيسي 180 درجة هو الاتجاه إلى الجنوب، والاتجاه النسبي 180 درجة هو خلفك مباشرة. النقاط الأساسية هي الاتجاهات الأربعة الرئيسية للبوصلة. وهي الشمال (*N* - 0 درجة أو 360 درجة)، والشرق (*E* - 90 درجة)، والجنوب (*S* - 180 درجة)، والغرب (*W* - 270 درجة).

![عنصر واجهة المستخدم لتسجيل الرحلة](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عنصر واجهة المستخدم لتسجيل الرحلة](@site/static/img/widgets/bearing_widget.png) ![عنصر واجهة المستخدم لتسجيل الرحلة](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![عنصر واجهة المستخدم لتسجيل الرحلة](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| تمكين | **أندرويد:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> ← اختر لوحة ← إضافة عنصر واجهة مستخدم ← <Translate android="