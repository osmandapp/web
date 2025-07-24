---
source-hash: c714e52890d474392987e42babe6eed754ad1dbbaa5e4c8fe091171e272426fe
sidebar_position: 5
title:  مظهر المسار
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

تتيح ميزة **مظهر المسار** للمستخدمين تخصيص كيفية عرض المسارات على الخريطة. يتضمن ذلك ضبط اللون والعرض ومؤشرات الاتجاه والعناصر المرئية الأخرى. يساعد تخصيص مظهر المسار في تمييز المسارات المتعددة، وإبراز مسارات محددة، وتحسين قابلية قراءة الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Track Appearance overview Android](/img/map/track-appear-and-1.png) ![Track menu Appearance Android](/img/map/track_appearence_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](/img/map/track_appearence_2_ios.png)

</TabItem>

</Tabs>


## الوصول إلى القائمة {#access-to-the-menu}

يمكنك تعديل مظهر المسار باستخدام إحدى الطرق التالية:

- **من أماكني**. افتح *القائمة ← أماكني ← المسارات*، حدد مسارًا، اضغط على *أيقونة المظهر* في [قائمة سياق المسار](../../map/tracks/track-context-menu.md#overview).
- **من الخريطة**. اضغط على مسار مباشرة على الخريطة، ثم اضغط على *أيقونة المظهر* في قسم *نظرة عامة*.
- **من تسجيل المسار**. قم بتعديل مظهر المسار المسجل حاليًا عبر [قائمة سياق تسجيل المسار](../../plugins/trip-recording.md#сurrent-track-recording).
- **من قائمة تهيئة الخريطة**. انتقل إلى *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> ←* **&#8942;** *← <Translate android="true" ids="change_appearance"/>* للمسارات المعروضة.


## إعدادات مظهر المسار {#track-appearance-settings}

### اللون {#color}

:::tip مشتريات
يمكنك استخدام بعض الإعدادات فقط مع *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">أندرويد</a> و <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> الميزات المجانية والمدفوعة.
:::

![Appearance](/img/map/appearance_color_andr.png)

يمكنك تعيين لون المسار يدويًا أو استخدام **تصور البيانات المعتمد على اللون** (مثل السرعة والارتفاع والميل). إذا كان المسار يفتقر إلى بيانات معينة، فإن OsmAnd يعرض الأقسام المفقودة باللون الرمادي.

**خيارات الألوان المتاحة:**

- **الإعدادات المجانية**: *<Translate android="true" ids="track_coloring_solid"/> لون*، *<Translate android="true" ids="shared_string_speed"/>* (إذا تم تسجيله) و *<Translate android="true" ids="altitude"/>* (إذا تم تسجيله).

    ![Track menu Appearance Track color Android](/img/map/track_appearance_menu_track_color_android.png) ![Appearance Track color Android](/img/map/track_appearance_menu_track_color_ios-2.png)

- [ميزة Pro](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*، *<Translate android="true" ids="routeInfo_roadClass_name"/>*، *<Translate android="true" ids="routeInfo_surface_name"/>*، *<Translate android="true" ids="routeInfo_smoothness_name"/>*، *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*، *<Translate android="true" ids="routeInfo_surface_name"/>*، *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.

لمزيد من التفاصيل حول تخصيص مظهر خط المسار، راجع [شاشة الخريطة أثناء التنقل](../../navigation/guidance/map-during-navigation.md#color) وحول اختيار وإنشاء لون مخصص، راجع [مخططات الألوان](../../personal/color-palette-schemes.md#routes).


### العرض {#width}

![Track menu Appearance Track Thickness Android](/img/map/track_appearance_menu_track_thickness_android.png) ![Track Appearance](/img/map/track_appearance_width_andr.png)

يمكنك تخصيص مظهر المسار في عدة قوائم في التطبيق:

- [*المسار ← المظهر*](../../personal/tracks/manage-tracks.md#track-folder).
- [*إعدادات التنقل ← تخصيص خط المسار*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*أماكني ← علامة تبويب المسارات ← أي مجلد ← المظهر الافتراضي*](../../personal/tracks/manage-tracks.md#track-folder).

اضبط عرض المسار لتحسين الرؤية على الخريطة.

- **خيارات الإعداد المسبق**: **رفيع، متوسط،** و **عريض**.

- **عرض مخصص**: قابل للتعديل من 1 إلى 24 بكسل باستخدام شريط التمرير.

- **عرض مستند إلى الملف الشخصي**: يمكن تعيينه عبر *إعدادات التنقل ← [تخصيص خط المسار](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### الفاصل الزمني {#split-interval}

![Track menu Appearance Split interval](/img/map/track_appearance_menu_split_interval_android.png) ![Split interval](/img/map/track_appearance_menu_split_interval_ios.png)

اختر ما إذا كنت تريد تقسيم الفاصل الزمني على المسار **حسب المسافة أو حسب الوقت**.

### أسهم الاتجاه {#direction-arrows}

![Track menu Appearance direction arrows Android](/img/map/track_appearance_menu_direction_arrows_android.png)

يضيف **علامات سهم** على طول المسار للإشارة إلى اتجاه الحركة.

### أيقونات البدء والانتهاء {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](/img/map/track_appearance_menu_sf_icons_android.png)

يتيح لك تحديد ما إذا كنت تريد إظهار **أيقونات البدء والانتهاء** لأجزاء المسار.

### ربط الفجوات {#join-gaps}

يربط **أجزاء المسار** التي انقطعت بسبب فقدان نظام تحديد المواقع العالمي (GPS) أو توقف التسجيل مؤقتًا. تتيح ميزة **<Translate android="true" ids="join_segments"/>** (*أندرويد*) أو **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) لك ربط هذه الفجوات في مسار GPX المحدد باستخدام خطوط مستقيمة.

### إعادة تعيين إلى الأصلي {#reset-to-original}

يعيد جميع **إعدادات مظهر المسار** إلى قيمها الافتراضية.


## مسار ثلاثي الأبعاد {#3d-track}

:::info ميزة مدفوعة
**المسار ثلاثي الأبعاد** هي ميزة مدفوعة من **OsmAnd Pro** لـ [iOS](../../purchases/ios.md#pro-features) و [أندرويد](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Track menu Appearance 3D visualisation](/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

تُنشئ ميزة **المسار ثلاثي الأبعاد** تصورًا ثلاثي الأبعاد من خلال دمج بيانات الارتفاع في المسارات ثنائية الأبعاد القياسية. تُنشئ هذه الوظيفة تمثيلًا معززًا بالعمق، مما يتيح تحليلًا دقيقًا للمسار فيما يتعلق بالتضاريس. من خلال دمج تفاصيل الارتفاع، يوفر المسار ثلاثي الأبعاد رؤية أكثر شمولاً لتضاريس المسار وسياقه الجغرافي.

### إعدادات المسار ثلاثي الأبعاد {#3d-track-settings}

**ارتفاع الجدار**
يمكنك تصور مسار ثلاثي الأبعاد حسب الارتفاع والبيانات الأخرى المتاحة داخل المسار، أو حسب ارتفاع ثابت.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*الارتفاع*، &nbsp;*السرعة*، &nbsp;*الارتفاع الثابت*. بيانات المستشعر ثلاثي الأبعاد: &nbsp;*معدل ضربات القلب*، &nbsp;*إيقاع الدراجة*، &nbsp;*قوة الدراجة*، &nbsp;*درجة الحرارة*، &nbsp;*سرعة الدراجة*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. إذا تم التصور بواسطة *الارتفاع* أو *السرعة*، يمكنك قياس البيانات ثلاثية الأبعاد للحصول على تصور أكثر بروزًا للمسار ثلاثي الأبعاد في نطاق *لا شيء* إلى *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. إذا تم التصور بواسطة *الارتفاع الثابت*، قم بتعيين الارتفاع الثابت للمسار ثلاثي الأبعاد عن طريق تحديد ارتفاعه على الخريطة في نطاق *لا شيء* إلى *2000 م*.

- يمكنك دمجها مع [الإغاثة ثلاثية الأبعاد](../../plugins/topography.md#3d-relief). إذا لم يكن مصدر البيانات ثلاثية الأبعاد هو الارتفاع، فسيكون التمثيل ثلاثي الأبعاد مزيجًا من ارتفاع الإغاثة والبيانات المحددة، مثل السرعة أو معدل ضربات القلب.

**<Translate android="true" ids="wall_color"/>**
تخصيص **لون المسار ثلاثي الأبعاد** باستخدام التدرجات أو التصور المستند إلى البيانات.
تتضمن الخيارات: *لا شيء*، &nbsp;*صلب*، &nbsp;*تدرج نزولي*، &nbsp;*تدرج صعودي*، &nbsp;*ارتفاع*، &nbsp;*ميل*، &nbsp;*سرعة*.

**<Translate android="true" ids="track_line"/>**
يضيف [خطًا مميزًا](#color) إلى أعلى أو أسفل المسار ثلاثي الأبعاد.
تتضمن الخيارات: *أعلى*، &nbsp;*أسفل*، &nbsp;*أعلى وأسفل*.

> **ملاحظة**: *يتطلب **إصدار أندرويد** من التطبيق تمكين محرك عرض الخرائط [الإصدار 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine) لاستخدام تصور المسار ثلاثي الأبعاد.*


### حالات الاستخدام {#use-cases}

تُعد ميزة المسار ثلاثي الأبعاد مفيدة للغاية للأنشطة مثل الطيران الشراعي، حيث يمكن أن يوفر تصور مسار طيرانك رؤى أعمق. من خلال عرض المسار في 3D، يمكنك الاستفادة من ميزات مثل **ارتفاع الجدار** و **لون الجدار** لاستخراج معلومات مرئية قيمة للتحليل.

1. **التصور حسب السرعة مع 3D**.
    أحد الاستخدامات الشائعة هو استخدام المسارات ثلاثية الأبعاد لتصور اختلافات السرعة. يتيح لك ذلك تحديد أقسام معينة من المسار حيث تباطأت أو تسارعت.

    مع لون الجدار المستند إلى الميل، يمكنك ملاحظة كيف أثرت التضاريس، وخاصة التلال والمنحدرات، على سرعتك. يوفر هذا المزيج من تصور السرعة والميل فهمًا مفصلاً للأداء طوال النشاط.

2. **التصور بواسطة مستشعر القلب مع الإغاثة ثلاثية الأبعاد**.
    تطبيق آخر مفيد هو دمج بيانات مستشعر معدل ضربات القلب مع خرائط الإغاثة ثلاثية الأبعاد. يتيح لك ذلك رسم خرائط لتقلبات معدل ضربات القلب مباشرة على التضاريس، مما يمنحك رؤية شاملة لكيفية تأثير تغيرات الارتفاع على جهدك البدني.

    تعمل ميزة الإغاثة ثلاثية الأبعاد، التي تبالغ في الارتفاع، بشكل مستقل عن عرض المسار ثلاثي الأبعاد. يمكن تعديل معاملي المبالغة الرأسية لفهم أفضل للارتباط بين معدل ضربات القلب وارتفاع التضاريس.

3. **تصور ارتفاع المسار وخط لون الميل على عرض أرض مسطحة.**
    عند تصور بيانات الارتفاع، يوصى باستخدام عرض أرض مسطحة لتجنب مشكلات مثل أخطاء نظام تحديد المواقع العالمي (GPS)، والتي قد تتسبب في ظهور أجزاء من المسار تحت الأرض.

    في هذا السيناريو، يمكن تصور تغيرات الميل بشكل منفصل على طول خط المسار، بينما يتم استخدام لون الجدار لتمثيل الارتفاع. تضمن هذه الطريقة أنه حتى مع وجود أخطاء محتملة في البيانات، لا يزال بإمكانك الحصول على تصور واضح ودقيق للميل والارتفاع.

## تغيير المظهر لمسارات متعددة {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Appearance Android](/img/personal/tracks/my_places_tracks_change_appear_1_andr.png) ![Appearance Android](/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](/img/map/tracks_change_appear_3_ios.png) ![Change Appearance](/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>

تعرض علامة تبويب [المسارات](../../personal/tracks/manage-tracks.md) تلقائيًا جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها. يتم تنظيمها حسب المجلد أو عرضها كقائمة أسفلها.

قم بتعديل مظاهر مسارات متعددة في *أماكني ← المسارات*:

- **تغيير المظهر الافتراضي** - يطبق الإعدادات على جميع المسارات في [مجلد](../../personal/tracks/manage-tracks.md#track-folder).
- **إعادة تعيين إلى الأصلي** - يستعيد إعدادات المسار الفردية.

- [وضع التحديد](../../personal/tracks/manage-tracks.md#selection-mode) - يغير مظهر مسارات محددة في المجلد المحدد أو القائمة بأكملها في علامة تبويب المسارات.
    - حدد *قائمة النقاط الثلاث* في الزاوية العلوية اليمنى من علامة تبويب المسارات واضغط على *تحديد*.
    - ثم اضغط على *قائمة النقاط الثلاث* في الجزء العلوي من الشاشة وحدد *تغيير المظهر*.

خيارات تخصيص المظهر بالجملة:

- **أسهم الاتجاه** - يضيف [مؤشرات الحركة](#direction-arrows).
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تشغيل*، &nbsp;*إيقاف*.

- **إظهار أيقونات البدء والانتهاء** - [يعرض علامات](#start-and-finish-icons) لنقاط بدء وانتهاء المسار.
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تشغيل*، &nbsp;*إيقاف*.

- **اللون** – تطبيق [تلوين](#color) يدوي أو مستند إلى البيانات.

- **العرض** – ضبط [عرض خط المسار](#width) باستخدام الإعدادات المسبقة أو يدويًا.

- **الفاصل الزمني** – [تعيين الفاصل الزمني](#split-interval) لعلامات المسافة / الوقت.
    الحالات: *لم يتغير*، &nbsp;*أصلي*، &nbsp;*تحديد*: *الوقت* أو *المسافة*.

الأصلي وغير المتغير:

- **الأصلي** - يستعيد المعلمات الأصلية من ملف المسار.

- **لم يتغير** - يحتفظ بالإعدادات الحالية أثناء جلسة التحرير.


## ألوان المسار في ملفات GPX {#track-colors-in-gpx-files}

يدعم OsmAnd **ألوان المسار المخصصة** في ملفات GPX باستخدام وسم `<osmand:color>` ضمن قسم `<extensions>` لعنصر `<trk>`. يتيح ذلك للمستخدمين تحديد ألوان للمسارات الفردية، مما يعزز التمييز البصري عند عرض مسارات متعددة على الخريطة.

لتحديد لون لمسار، استخدم التنسيق التالي:

```xml
<trk>
  <name>Example Track</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- يقبل وسم `<osmand:color>` **رموز الألوان السداسية العشرية** (على سبيل المثال، `#FF0000` للأحمر).
- إذا كانت هناك مسارات متعددة في ملف GPX، يمكن أن يكون لكل مسار وسم `<osmand:color>` الخاص به.


**السلوك في OsmAnd:**

1. **تعيين اللون الافتراضي**:

    - عند **استيراد مسار GPX كمسار واحد** (خيار ***استيراد كمسار واحد***)، يتم تعيين المسار بأكمله **لون GPX الافتراضي** (الأحمر).
    - في OsmAnd **4.9.10 والإصدارات الأحدث**، تم حل هذه المشكلة - يتم الآن الاحتفاظ بألوان المسار الفردية عند الاستيراد.

2. **عرض بلون واحد للمسارات المدمجة:**

    - إذا تم **دمج** المسارات باستخدام ***ربط الأجزاء***، يتم التعامل مع المسار الناتج **كمسار واحد مستمر بجزء واحد**.
    - لا يتم **دعم** التمثيل متعدد الألوان للمسارات المدمجة.
    - سيتم عرض المسار المدمج باستخدام **لون GPX الرئيسي** (الافتراضي: أحمر)، حتى لو كانت أجزاء المسار الفردية تحتوي في الأصل على ألوان مختلفة.

3. **أولوية إعدادات المظهر:**

    - يدعم OsmAnd حاليًا **إعدادات اللون والعرض للمسار بأكمله فقط**.
    - يتم تخزين إعدادات المظهر هذه في **ملحقات GPX ذات المستوى الأعلى**.
    - إذا تم **تعيين لون أو عرض على المستوى الأعلى** (إما في ملف GPX أو يدويًا في OsmAnd)، فإن هذا الإعداد سيتجاوز الألوان المعينة لأجزاء المسار الفردية.

**حل بديل للمسارات متعددة الألوان:**

- للحفاظ على **الألوان الفردية لمسارات متعددة**، **استورد المسارات بشكل منفصل** بدلاً من دمجها.

- اضبط ألوان المسار يدويًا في **إعدادات مظهر المسار**:

  - افتح المسار في OsmAnd.
  - اضغط على المسار لفتح **قائمة السياق**.
  - حدد **المظهر**.
  - اختر اللون المفضل.

- يضمن هذا أن يحتفظ كل مسار **بتمثيله اللوني المقصود**، حتى لو كان ملف GPX يحتوي في الأصل على أجزاء متعددة بألوان مختلفة.


## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](../map-context-menu.md)
- [تهيئة الخريطة](../configure-map-menu.md)
- [النقاط على الخريطة](../point-layers-on-map.md)
- [المسارات](../tracks/index.md)
- [قائمة سياق المسارات](../tracks/track-context-menu.md)
- [تسجيل الرحلة](../../plugins/trip-recording.md)

> *آخر تحديث: فبراير 2025*