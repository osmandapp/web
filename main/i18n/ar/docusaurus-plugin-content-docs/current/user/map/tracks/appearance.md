---
source-hash: 03b2d3f6e375b05230f448cf1908a173e0c48d07ed9e09a8337b5c05c7d6208d
sidebar_position: 5
title: مظهر المسار
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

تتيح ميزة **مظهر المسار** للمستخدمين تخصيص كيفية عرض المسارات على الخريطة. يتضمن ذلك ضبط اللون والعرض ومؤشرات الاتجاه والعناصر المرئية الأخرى. يساعد تخصيص مظهر المسار على التمييز بين المسارات المتعددة، وإبراز مسارات محددة، وتحسين قابلية قراءة الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![نظرة عامة على مظهر المسار في أندرويد](@site/static/img/map/track-appear-and-1.png)  ![قائمة المسار - المظهر في أندرويد](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المسار - المظهر في iOS](@site/static/img/map/track_appearence_1_ios.png) ![قائمة المسار - المظهر في iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## الوصول إلى القائمة {#access-to-the-menu}

يمكنك تعديل مظهر المسار باستخدام إحدى الطرق التالية:

- **من أماكني**. افتح *القائمة ← أماكني ← المسارات*، حدد مسارًا، انقر على *أيقونة المظهر* في [قائمة سياق المسار](../../map/tracks/track-context-menu.md#overview).
- **من الخريطة**. انقر على مسار مباشرة على الخريطة، ثم انقر على *أيقونة المظهر* في قسم *نظرة عامة*.
- **من تسجيل المسار**. عدّل مظهر المسار المسجل حاليًا عبر [قائمة سياق تسجيل المسار](../../plugins/trip-recording.md#current-track-recording).  
- **من قائمة إعداد الخريطة**. اذهب إلى *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> ←* **&#8942;** *← <Translate android="true" ids="change_appearance"/>* للمسارات المعروضة.


## إعدادات مظهر المسار {#track-appearance-settings}

### اللون {#color}

:::tip purchases
بعض الإعدادات لا يمكنك استخدامها إلا مع *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> و <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> المجانية والمدفوعة.
:::

![المظهر](@site/static/img/map/appearance_color_andr.png) ![قائمة التلوين في iOS](@site/static/img/map/colorisation_ios.png)

يمكنك ضبط لون المسار يدويًا أو استخدام **تصور البيانات المعتمد على اللون** (مثل السرعة والارتفاع والميل). إذا كان المسار يفتقر إلى بيانات معينة، يعرض OsmAnd الأجزاء المفقودة باللون الرمادي.

**خيارات الألوان المتاحة:**

- **الإعدادات المجانية**: لون *<Translate android="true" ids="track_coloring_solid"/>*، *<Translate android="true" ids="shared_string_speed"/>* (إذا تم تسجيله) و *<Translate android="true" ids="altitude"/>* (إذا تم تسجيله).   
- [ميزة Pro](../../purchases/index.md): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

في iOS، يفتح **قائمة التلوين** كقائمة سياق. يمكن أن تظهر العناصر في ثلاث حالات: 
1. <Translate ios="true" ids="shared_string_enabled"/>. يمكن تطبيقها على المسار الحالي.
2. <Translate ios="true" ids="weather_update_disabled"/>. يفتقر المسار إلى البيانات المطلوبة.
3. PRO. متاحة للمسار الحالي لكنها تتطلب اشتراكًا؛ الضغط عليها يفتح شاشة [<Translate ios="true" ids="purchase_dialog_title"/>](https://osmand.net/docs/user/purchases/ios).

لمزيد من التفاصيل حول تخصيص مظهر خط المسار، راجع [شاشة الخريطة أثناء الملاحة](../../navigation/guidance/map-during-navigation.md#color) وحول تحديد وإنشاء لون مخصص، راجع [أنظمة الألوان](../../personal/color-palette-schemes.md#routes).


### العرض {#width}

![قائمة المسار - المظهر - سماكة المسار في أندرويد](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![مظهر المسار](@site/static/img/map/track_appearance_width_andr.png)  

يمكنك تخصيص مظهر المسار في عدة قوائم في التطبيق:

- [*المسار ← المظهر*](../../personal/tracks/manage-tracks.md#track-folder).
- [*إعدادات الملاحة ← تخصيص خط المسار*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*أماكني ← تبويب المسارات ← أي مجلد ← المظهر الافتراضي*](../../personal/tracks/manage-tracks.md#track-folder).

اضبط عرض المسار لتحسين الرؤية على الخريطة.

- **الخيارات المحددة مسبقًا**: **رفيع، متوسط،** و **عريض**.

- **عرض مخصص**: قابل للتعديل من 1 إلى 24 بكسل باستخدام شريط تمرير.

- **العرض المعتمد على الملف الشخصي**: يمكن ضبطه عبر *إعدادات الملاحة ← [تخصيص خط المسار](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### الفاصل الزمني للتقسيم {#split-interval}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة المسار - المظهر - الفاصل الزمني للتقسيم في أندرويد](@site/static/img/map/split_interval_android.png)  ![الفاصل الزمني للتقسيم في أندرويد](@site/static/img/map/split_interval_2_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المسار - المظهر - الفاصل الزمني للتقسيم](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![الفاصل الزمني للتقسيم](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

</TabItem>

</Tabs>

حدد ما إذا كنت تريد تقسيم المسار إلى فواصل **حسب المسافة**، **حسب الوقت**، أو **الصعود/الهبوط** (أندرويد)، أو **حسب المسافة** أو **حسب الوقت** (iOS). لعرض إحصاءات مفصلة لكل فاصل، راجع [التحليل حسب الفواصل](../../map/tracks/track-context-menu.md#analyze-by-intervals) (أندرويد فقط).


### أسهم الاتجاه {#direction-arrows}

![قائمة المسار - المظهر - أسهم الاتجاه في أندرويد](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

يضيف **علامات أسهم** على طول المسار للإشارة إلى اتجاه الحركة.

### أيقونات البداية والنهاية {#start-and-finish-icons}

![قائمة المسار - المظهر - أيقونات البداية والنهاية في أندرويد](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

يسمح لك بتحديد ما إذا كنت تريد إظهار **أيقونات البداية والنهاية** لمقاطع المسار.

### ربط الفجوات {#join-gaps}

يربط **مقاطع المسار** التي انقطعت بسبب فقدان إشارة GPS أو إيقاف التسجيل مؤقتًا. تتيح لك ميزة **<Translate android="true" ids="join_segments"/>** (*أندرويد*) أو **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) ربط هذه الفجوات في مسار GPX المحدد باستخدام خطوط مستقيمة.

### إعادة التعيين إلى الأصل {#reset-to-original}

يعيد جميع **إعدادات مظهر المسار** إلى قيمها الافتراضية.


## مسار ثلاثي الأبعاد {#3d-track}

:::info Paid feature
**المسار ثلاثي الأبعاد** هي ميزة مدفوعة في **OsmAnd Pro** لنظامي [iOS](../../purchases/ios.md#pro-features) و [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة المسار - المظهر - تصور ثلاثي الأبعاد](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المسار - المظهر - تصور ثلاثي الأبعاد](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

تنشئ ميزة **المسار ثلاثي الأبعاد** تصورًا ثلاثي الأبعاد عن طريق دمج بيانات الارتفاع في المسارات ثنائية الأبعاد القياسية. تنشئ هذه الوظيفة تمثيلاً معززًا بالعمق، مما يتيح تحليلًا دقيقًا للمسار فيما يتعلق بالتضاريس. من خلال دمج تفاصيل الارتفاع، يقدم المسار ثلاثي الأبعاد عرضًا أكثر شمولاً لتضاريس المسار وسياقه الجغرافي.

### إعدادات المسار ثلاثي الأبعاد {#3d-track-settings}

**ارتفاع الجدار**  
يمكنك تصور مسار ثلاثي الأبعاد حسب الارتفاع والبيانات الأخرى المتاحة داخل المسار، أو حسب ارتفاع ثابت.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*الارتفاع*، &nbsp;*السرعة*، &nbsp;*ارتفاع ثابت*. بيانات المستشعر ثلاثي الأبعاد: &nbsp;*معدل ضربات القلب*، &nbsp;*إيقاع الدراجة*، &nbsp;*قوة الدراجة*، &nbsp;*درجة الحرارة*، &nbsp;*سرعة الدراجة*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. إذا تم التصور حسب *الارتفاع* أو *السرعة*، يمكنك قياس البيانات ثلاثية الأبعاد للحصول على تصور أكثر بروزًا للمسار ثلاثي الأبعاد في نطاق من *لا شيء* إلى *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. إذا تم التصور حسب *ارتفاع ثابت*، فقم بتعيين الارتفاع الثابت للمسار ثلاثي الأبعاد عن طريق تحديد ارتفاعه على الخريطة في نطاق من *لا شيء* إلى *2000 م*.

- يمكنك دمجه مع [التضاريس ثلاثية الأبعاد](../../plugins/topography.md#3d-relief). إذا لم يكن مصدر البيانات ثلاثية الأبعاد هو الارتفاع، فسيكون التمثيل ثلاثي الأبعاد مزيجًا من ارتفاع التضاريس والبيانات المحددة، مثل السرعة أو معدل ضربات القلب.

**<Translate android="true" ids="wall_color"/>**  
يخصص **لون المسار ثلاثي الأبعاد** باستخدام التدرجات أو التصور المعتمد على البيانات.  
تشمل الخيارات: *لا شيء*، &nbsp;*صلب*، &nbsp;*تدرج لأسفل*، &nbsp;*تدرج لأعلى*، &nbsp;*الارتفاع*، &nbsp;*الميل*، &nbsp;*السرعة*.

**<Translate android="true" ids="track_line"/>**  
يضيف [خطًا مميزًا](#color) إلى الجزء العلوي أو السفلي من المسار ثلاثي الأبعاد.  
تشمل الخيارات: *أعلى*، &nbsp;*أسفل*، &nbsp;*أعلى وأسفل*.

> **ملاحظة**: *يتطلب **إصدار أندرويد** من التطبيق تمكين محرك عرض الخرائط [الإصدار 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) لاستخدام تصور المسار ثلاثي الأبعاد.*


### حالات الاستخدام {#use-cases}

تعد ميزة المسار ثلاثي الأبعاد مفيدة للغاية للأنشطة مثل الطيران الشراعي، حيث يمكن أن يوفر تصور مسار طيرانك رؤى أعمق. من خلال عرض المسار في صورة ثلاثية الأبعاد، يمكنك الاستفادة من ميزات مثل **ارتفاع الجدار** و **لون الجدار** لاستخراج معلومات مرئية قيمة للتحليل.

1. **التصور حسب السرعة مع ثلاثي الأبعاد**.  
    إحدى حالات الاستخدام الشائعة هي استخدام المسارات ثلاثية الأبعاد لتصور تغيرات السرعة. يتيح لك ذلك تحديد أقسام معينة من المسار حيث تباطأت أو أسرعت.  

    مع لون الجدار المعتمد على الميل، يمكنك ملاحظة كيف أثرت التضاريس، وخاصة التلال والمنحدرات، على سرعتك. يوفر هذا المزيج من تصور السرعة والميل فهمًا مفصلاً للأداء طوال النشاط.

2. **التصور حسب مستشعر القلب مع التضاريس ثلاثية الأبعاد**.  
    تطبيق آخر ثاقب هو دمج بيانات مستشعر معدل ضربات القلب مع خرائط التضاريس ثلاثية الأبعاد. يتيح لك ذلك رسم تقلبات معدل ضربات القلب مباشرة على التضاريس، مما يمنحك رؤية شاملة لكيفية تأثير تغيرات الارتفاع على مجهودك البدني.  

    تعمل ميزة التضاريس ثلاثية الأبعاد، التي تبالغ في الارتفاع، بشكل مستقل عن عرض المسار ثلاثي الأبعاد. يمكن تعديل معلمتين للمبالغة الرأسية لفهم العلاقة بين معدل ضربات القلب وارتفاع التضاريس بشكل أفضل.

3. **تصور ارتفاع المسار وخط لون الميل على عرض الأرض المسطحة.**  
    عند تصور بيانات الارتفاع، يوصى باستخدام عرض الأرض المسطحة لتجنب مشكلات مثل أخطاء GPS، والتي قد تتسبب في ظهور أجزاء من المسار تحت الأرض.  

    في هذا السيناريو، يمكن تصور تغيرات الميل بشكل منفصل على طول خط المسار، بينما يتم استخدام لون الجدار لتمثيل الارتفاع. تضمن هذه الطريقة أنه حتى مع وجود عدم دقة محتملة في البيانات، لا تزال تتلقى تصورًا واضحًا ودقيقًا للميل والارتفاع.

## تغيير مظهر مسارات متعددة {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المظهر في أندرويد](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![المظهر في أندرويد](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تغيير المظهر](@site/static/img/map/tracks_change_appear_3_ios.png)  ![تغيير المظهر](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

يعرض تبويب [المسارات](../../personal/tracks/manage-tracks.md) تلقائيًا جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها على الإطلاق. يتم تنظيمها حسب المجلد أو عرضها كقائمة أسفلها.  

عدّل مظهر مسارات متعددة في *أماكني ← المسارات*:

- **تغيير المظهر الافتراضي** (أندرويد فقط) - يسمح بتكوين الإعدادات الافتراضية التي سيتم تطبيقها عند إضافة مسار إلى [المجلد](../../personal/tracks/manage-tracks.md#track-folder).
- **إعادة التعيين إلى الأصل** - يعيد إعدادات المسار الفردية.

- [وضع التحديد](../../personal/tracks/manage-tracks.md#selection-mode) - يغير مظهر مسارات محددة في المجلد المحدد أو القائمة بأكملها في تبويب المسارات.
    - حدد *قائمة النقاط الثلاث* في الزاوية اليمنى العليا من تبويب المسارات وانقر على *تحديد*.
    - ثم انقر على *قائمة النقاط الثلاث* في الجزء العلوي من الشاشة وحدد *تغيير المظهر*.  

خيارات تخصيص المظهر المجمّع:

- **أسهم الاتجاه** - يضيف [مؤشرات الحركة](#direction-arrows).  
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تشغيل*، &nbsp;*إيقاف*.

- **إظهار أيقونات البداية والنهاية** - [يعرض علامات](#start-and-finish-icons) لنقاط بداية ونهاية المسار.  
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تشغيل*، &nbsp;*إيقاف*.

- **اللون** – طبق [تلوينًا](#color) يدويًا أو معتمدًا على البيانات.

- **العرض** – اضبط [عرض خط المسار](#width) باستخدام الإعدادات المسبقة أو يدويًا.

- **الفاصل الزمني للتقسيم** – [اضبط الفاصل الزمني](#split-interval) لعلامات المسافة / الوقت.  
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تحديد*: *الوقت* أو *المسافة*.

الأصلي وغير المتغير:

- **أصلي** - يعيد المعلمات الأصلية من ملف المسار.

- **لم يتغير** - يحتفظ بالإعدادات الحالية أثناء جلسة التحرير.


## ألوان المسار في ملفات GPX {#track-colors-in-gpx-files}

يدعم OsmAnd **ألوان المسار المخصصة** في ملفات GPX باستخدام علامة `<osmand:color>` داخل قسم `<extensions>` لعنصر `<trk>`. يتيح هذا للمستخدمين تحديد ألوان للمسارات الفردية، مما يعزز التمييز البصري عند عرض مسارات متعددة على الخريطة.

لتحديد لون لمسار، استخدم التنسيق التالي:  

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- تقبل علامة `<osmand:color>` **رموز الألوان السداسية العشرية** (على سبيل المثال، `#FF0000` للون الأحمر).
- إذا كانت هناك مسارات متعددة في ملف GPX، يمكن أن يكون لكل مسار علامة `<osmand:color>` خاصة به.


**السلوك في OsmAnd:**

1. **تعيين اللون الافتراضي**:  

    - عند **استيراد مسار GPX كمسار واحد** (خيار ***استيراد كمسار واحد***)، يتم تعيين **لون GPX الافتراضي** (أحمر) للمسار بأكمله.  
    - في OsmAnd **4.9.10 والإصدارات الأحدث**، تم حل هذه المشكلة — يتم الآن الحفاظ على ألوان المسار الفردية عند الاستيراد.

2. **عرض لون واحد للمسارات المدمجة:**  

    - إذا تم **دمج** المسارات باستخدام ***ربط المقاطع***، يتم التعامل مع المسار الناتج على أنه **مسار مستمر واحد مع مقطع واحد**.
    - التمثيل متعدد الألوان **غير مدعوم** للمسارات المدمجة.
    - سيتم عرض المسار المدمج باستخدام **لون GPX الرئيسي** (الافتراضي: أحمر)، حتى لو كانت مقاطع المسار الفردية لها ألوان مختلفة في الأصل.

3. **أولوية إعدادات المظهر:**  

    - يدعم OsmAnd حاليًا **إعدادات اللون والعرض للمسار بأكمله فقط**.
    - يتم تخزين إعدادات المظهر هذه في **ملحقات GPX ذات المستوى الأعلى**.
    - إذا تم **تعيين لون أو عرض على المستوى الأعلى** (إما في ملف GPX أو يدويًا في OsmAnd)، فسيكون لهذا الإعداد الأسبقية على الألوان المخصصة لمقاطع المسار الفردية.

**حل بديل للمسارات متعددة الألوان:**

- للحفاظ على **الألوان الفردية لمسارات متعددة**، **استورد المسارات بشكل منفصل** بدلاً من دمجها.

- اضبط ألوان المسار يدويًا في **إعدادات مظهر المسار**:

  - افتح المسار في OsmAnd.
  - انقر على المسار لفتح **قائمة السياق**.
  - حدد **المظهر**.
  - اختر اللون المفضل.

- يضمن هذا أن يحتفظ كل مسار **بتمثيله اللوني المقصود**، حتى لو كان ملف GPX يحتوي في الأصل على مقاطع متعددة بألوان مختلفة.


## مقالات ذات صلة {#related-articles}

- [Map Context menu](../map-context-menu.md)
- [Configure Map](../configure-map-menu.md)
- [Points on the map](../point-layers-on-map.md)
- [Tracks](../tracks/index.md)
- [Tracks Context menu](../tracks/track-context-menu.md)
- [Trip Recording](../../plugins/trip-recording.md)