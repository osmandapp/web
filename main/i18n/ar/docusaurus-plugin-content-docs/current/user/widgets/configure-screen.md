---
source-hash: cbfcf0aa9a07f3ab40e670385d79d1a04431696bcbef518decc18f41ef282921
sidebar_position: 1
title:  تكوين الشاشة
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

تسمح لك قائمة **تكوين الشاشة** في OsmAnd بتخصيص واجهة الخريطة عن طريق إضافة وترتيب الأدوات المصغرة (widgets) والأزرار والإجراءات السريعة عبر لوحات متعددة.

يمكنك:

- إضافة أدوات مصغرة [معلوماتية](../widgets/info-widgets.md)، [ملاحية](../widgets/nav-widgets.md)، و[متعلقة بالعلامات](../widgets/markers.md).
- إضافة أو تعديل [الإجراءات السريعة](../widgets/quick-action.md)، [الأزرار المخصصة](../widgets/quick-action.md#custom-buttons) و[الأزرار الافتراضية](../widgets/map-buttons.md).
- تنظيم الأدوات المصغرة في لوحات (أعلى، أسفل، يسار، يمين، وسط).
- إنشاء **صفحات** متعددة داخل اللوحات الجانبية، واختيار حجم الأدوات المصغرة.
- اختيار ارتفاع الصف وتبديل أيقونات الأدوات المصغرة.

جميع الأدوات المصغرة [تعتمد على الملف الشخصي](../personal/profiles.md) — لكل ملف شخصي تخطيطه الخاص، وترتيبه، ورؤيته، وإعداداته.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_overview_1-1_andr.png) ![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_overview_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_overview_ios_1.png)

</TabItem>

</Tabs>


## لوحات الأدوات المصغرة {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*

![تكوين الشاشة](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*

![تكوين الشاشة](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

يتيح لك OsmAnd تنظيم واجهة الخريطة باستخدام لوحات الأدوات المصغرة القابلة للتخصيص.
يمكنك إضافة، إعادة ترتيب، تجميع، وإزالة الأدوات المصغرة في اللوحات التالية:

- **اللوحة العلوية**
- **اللوحة السفلية**
- **اللوحة اليسرى**
- **اللوحة اليمنى**

تدعم كل لوحة سلوكيات تخطيط مختلفة:

- تعرض **اللوحات العلوية والسفلية** الأدوات المصغرة في صفوف. يمكنك وضع أداة مصغرة واحدة أو اثنتين لكل صف وإضافة صفوف متعددة إذا لزم الأمر.
- تدعم **اللوحات اليسرى واليمنى** صفحات متعددة. يمكنك تجميع الأدوات المصغرة في صفحات منفصلة والتبديل بينها.


### كتالوج الأدوات المصغرة {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***أدوات الملاحة المصغرة:***

- [الاتجاه](../widgets/nav-widgets.md#bearing).
    تُظهر هذه المجموعة الاتجاه المطلق أو النسبي إلى هدف بوحدات زاوية.
    تتضمن 3 أدوات مصغرة: *الاتجاه النسبي*، *الاتجاه المغناطيسي*، *الاتجاه الحقيقي*.

- [ملف الارتفاع](../widgets/nav-widgets#elevation-widget) (*أعلى/أسفل فقط*، *أندرويد فقط*).
    يعرض ارتفاع المسار وانحداره.

- [المسارات](../widgets/nav-widgets#lanes) (*أعلى/أسفل فقط*).
    توجيه بصري للمسار.

- [شريط علامات الخريطة](../widgets/markers.md#configure-marker-widgets-android) (*أعلى/أسفل فقط*).
    يعرض المسافة/الاتجاه إلى العلامات المحفوظة.
    قابل للتكوين لعلامة واحدة أو اثنتين.

- [نقطة الملاحة](../widgets/nav-widgets.md#navigation-points).
    تُظهر المجموعة المسافة المتبقية إلى وجهة، أو نقطة وسيطة، أو وقت الوصول إلى نقطة وسيطة، أو وقت السفر لمسار محسوب.
    تتضمن 4 أدوات مصغرة: [المسافة إلى الوجهة](../widgets/nav-widgets.md#distance-to-destination)، [المسافة إلى النقطة الوسيطة](../widgets/nav-widgets.md#distance-to-intermediate)، [الوقت إلى النقطة الوسيطة](../widgets/nav-widgets.md#time-to-intermediate)، [الوقت إلى الوجهة](../widgets/nav-widgets.md#time-to-destination).

- [مناورات المسار](../widgets/nav-widgets.md#next-turn) (*اللوحة اليسرى/اليمنى فقط*).
    تُنشّط هذه المجموعة أثناء الملاحة وتُظهر المسافة والسهم للمناورة التالية.
    تتضمن 3 أدوات مصغرة: *الدورة التالية*، *الدورة التالية (صغيرة)*، *الدورة الثانية التالية*.

- [حد السرعة](../widgets/nav-widgets.md#speed-limit).
    عرض حد السرعة الحالي للطريق.

- [عداد السرعة](../widgets/info-widgets.md#speedometer).
    يعرض السرعة الحالية بناءً على بيانات GPS والسرعة المحدودة بناءً على [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [اسم الشارع](../widgets/nav-widgets#street-name) (*أعلى/أسفل فقط*).
    يعرض الشارع الحالي أو القادم.

<br/>

***أدوات معلوماتية مصغرة:***

- [الارتفاع](../widgets/info-widgets.md#altitude-widgets).
    تُظهر المجموعة الارتفاع فوق مستوى سطح البحر للموقع الحالي أو لمركز الخريطة الحالي.
    تتضمن أداتين مصغرتين: *الارتفاع: الموقع الحالي*، *الارتفاع: مركز الخريطة*.

- [متوسط السرعة](../widgets/info-widgets.md#average-speed-widget).
    يعرض متوسط سرعة الرحلة الحالية.

- [مستوى البطارية](../widgets/info-widgets.md#battery-level).
    يعرض مستوى بطارية الجهاز.

- [أدوات الإحداثيات المصغرة](../widgets/info-widgets#coordinates-widget) (*أعلى/أسفل فقط*).
    تُظهر هذه المجموعة الإحداثيات الجغرافية للموقع الجغرافي الحالي.
    تتضمن أداتين مصغرتين: *الإحداثيات: مركز الخريطة*، *الإحداثيات: الموقع الحالي*.

- [السرعة الحالية](../widgets/info-widgets.md#speed).
    تعرض السرعة من مستشعر GPS.

- [الوقت الحالي](../widgets/info-widgets.md#current-time).
    يعرض وقت النظام الحالي.

- [نسبة الانزلاق](../widgets/info-widgets.md#glide-ratio).
    تُظهر الأدوات المصغرة نسبة الانزلاق إلى الهدف ومتوسط نسبة الانزلاق للرحلة الحالية.
    تتضمن أداتين مصغرتين: *نسبة الانزلاق إلى الهدف*، *متوسط نسبة الانزلاق*.

- [معلومات GPS](../widgets/info-widgets.md#gps-info) (*أندرويد فقط*).
    يعرض عدد الأقمار الصناعية المكتشفة.

- [علامات الخريطة](../widgets/markers.md).
    تُظهر المجموعة المسافة أو الوقت المقدر للوصول (ETA) لأول علامتين في [القائمة](https://osmand.net/docs/user/personal/markers#itinerary-list).
    تتضمن أداتين مصغرتين: *العلامة الأولى*، *العلامة الثانية*.

- [مسطرة نصف القطر](../widgets/info-widgets.md#radius-ruler).
    تُظهر المسافة بين موقعك ونقطة على الخريطة، محاطة بأداة [مسطرة نصف القطر](../widgets/radius-ruler.md).

- [شروق الشمس، غروب الشمس](../widgets/info-widgets.md#sunset-and-sunrise).
    يعرض وقت شروق الشمس أو غروبها التالي لمركز الخريطة.
    تتضمن أداتين مصغرتين: *شروق الشمس*، *غروب الشمس*.

<br/>

***أدوات مصغرة تعتمد على المكونات الإضافية:***

- [ملاحظات صوتية/فيديو](../widgets/info-widgets.md#audiovideo-notes-widget).
    وصول سريع لالتقاط الوسائط.
    تتضمن 4 أدوات مصغرة: *عند الطلب*، *تسجيل صوت*، *تسجيل فيديو*، *التقاط صورة*.

- [أدوات المطور المصغرة](../widgets/info-widgets.md#developer-widgets).
    تعرض معلومات اختيارية.
    تتضمن 5 أدوات مصغرة: *معدل إطارات عرض الخريطة*، *ميل الكاميرا*، *ارتفاع الكاميرا*، *مستوى التكبير*، *المسافة من الكاميرا إلى الهدف*، *ذاكرة الوصول العشوائي المتاحة*.

- [أدوات المستشعرات الخارجية المصغرة](../widgets/info-widgets.md#external-sensors-widgets).
    تساعد المجموعة في تتبع البيانات من مستشعرات BLE/ANT+ في الوقت الفعلي.
    تتضمن 6 أدوات مصغرة: *معدل ضربات القلب*، *قوة الدراجة* (*أندرويد فقط*)، *إيقاع الدراجة*، *سرعة الدراجة*، *مسافة الدراجة*، *درجة الحرارة*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).
    يفتح تطبيق Mapillary لصور مستوى الشارع.

- [حالة متتبع OsmAnd](../widgets/info-widgets.md#tracker-widget).
    وصول سريع إلى [تطبيق OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [أداة ركن السيارة المصغرة](../widgets/info-widgets.md#parking-widget).
    المسافة من مركز الشاشة إلى موقع ركن السيارة المحفوظ.

- [تسجيل الرحلة](../widgets/info-widgets.md#trip-recording-widgets).
    يبدأ ويوقف تسجيل المسار، ويعرض بيانات تسجيل المسار.
    تتضمن 4 أدوات مصغرة: *المسافة*، *المدة*، *صعود*، *نزول*.

- [الطقس](../widgets/info-widgets.md#weather-widgets).
    يعرض معلومات الطقس التفصيلية.
    تتضمن 5 أدوات مصغرة: *درجة الحرارة*، *ضغط الهواء*، *الرياح*، *الغيوم*، *هطول الأمطار*.

:::note أدوات مصغرة تعتمد على اللوحة

- متوفرة فقط في **اللوحات العلوية والسفلية** ويجب وضعها في صفوف منفصلة: *أدوات الإحداثيات المصغرة، أداة ملف الارتفاع، أداة المسارات، شريط علامات الخريطة، أداة اسم الشارع*.
- متوفرة فقط في **اللوحات اليسرى واليمنى**: *مناورات المسار*.

:::


### الصفوف {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png) ![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png) ![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_ios.png)

</TabItem>

</Tabs>



تسمح لك ميزة **وضع الصفوف** بإضافة العديد من الصفوف حسب الحاجة إلى اللوحات العلوية والسفلية. يمكنك عرض أدوات مصغرة متعددة لكل صف، مما يعزز كمية المعلومات المرئية.

***كيفية تكوين الصفوف:***

- **إضافة أدوات مصغرة**: اضغط على زر *الزائد* (أندرويد) أو *إضافة أداة مصغرة* (iOS)، ثم اختر من قائمة الأدوات المصغرة المتاحة.
- **إعادة ترتيب الأدوات المصغرة**: اضغط على زر *القلم* (أندرويد) أو *تحرير* (iOS) لإعادة ترتيب الأدوات المصغرة.
- **إضافة صفوف**: اضغط على زر *إضافة صف* لإنشاء صفوف جديدة لأدواتك المصغرة.
- **نقل الأدوات المصغرة**: اسحب الأدوات المصغرة بين صفوف مختلفة.
- **الوصول إلى إعدادات الأداة المصغرة**: اضغط على أيقونة *"i"* (أندرويد) أو سهم *">"* (iOS) لفتح إعدادات الأداة المصغرة.
- **حفظ التغييرات**: اضغط على *تطبيق* (أندرويد) أو *تم* (iOS) لحفظ التخطيط.


#### أنواع الأدوات المصغرة والقيود {#widget-types-and-restrictions}

يسمح لك هذا الوضع بإضافة **أكثر من أداة مصغرة في صف واحد** على اللوحات العلوية والسفلية لعرض أكبر قدر ممكن من المعلومات.

- **الأدوات المصغرة المعقدة**. يمكن إضافة أداة مصغرة معقدة واحدة فقط لكل صف. وتشمل هذه:
    - [شريط علامات الخريطة (*أندرويد فقط*)](../widgets/markers.md#configure-marker-widgets-android)
    - [اسم الشارع](../widgets/nav-widgets#street-name)
    - [أدوات الإحداثيات المصغرة](../widgets/info-widgets#coordinates-widget)
    - [المسارات](../widgets/nav-widgets#lanes)
    - [ملف الارتفاع (*أندرويد فقط*)](../widgets/nav-widgets#elevation-widget)
    - [مناورات المسار](../widgets/nav-widgets.md#next-turn)

- **الأدوات المصغرة البسيطة**. يمكن إضافة أدوات مصغرة بسيطة متعددة إلى صف واحد. يمكن لهذه الأدوات المصغرة عرض *الاسم*، *وحدات القياس*، *القيمة*، و*الأيقونة*.


### الصفحات {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> ← تحرير ← إضافة صفحة*

![صفحة الأداة المصغرة](@site/static/img/widgets/widget_page_1_andr.png) ![صفحة الأداة المصغرة](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> ← تحرير ← إضافة صفحة*

![صفحة الأداة المصغرة](@site/static/img/widgets/widget_page_1_ios.png) ![صفحة الأداة المصغرة](@site/static/img/widgets/widget_page_2_ios.png)

</TabItem>

</Tabs>

يمكن تجميع الأدوات المصغرة في اللوحات اليمنى واليسرى في **صفحات**. تسمح لك ميزة **وضع الصفحات** بإضافة 5 صفحات إلى اللوحات اليسرى واليمنى.

***كيفية تكوين الصفوف:***

- **إضافة صفحة**. انتقل إلى إعدادات اللوحة اليسرى/اليمنى واضغط على *تحرير ← إضافة صفحة*.
- **تنظيم الأدوات المصغرة حسب الصفحة**. هذه الميزة مفيدة عندما تكون هناك حاجة إلى مجموعات مختلفة من الأدوات المصغرة لمهام مختلفة، مثل التنقل مقابل تصفح الخريطة.
- تسمح لك الصفحات بإنشاء **مجموعات أدوات مصغرة** لسيناريوهات محددة، مما يحسن سير العمل ويقلل من الفوضى.


## إعدادات الأداة المصغرة {#widget-settings}

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png) ![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **خيارات حجم الأداة المصغرة** (*لجميع اللوحات*):
    يمكنك تخصيص حجم **الأدوات المصغرة البسيطة** في **اللوحات العلوية والسفلية واليسرى واليمنى**:

    - **صغير**. مثالي للشاشات المدمجة، مما يوفر مساحة أكبر على الشاشة للخرائط.
    - **متوسط** (*حجم الأداة المصغرة الافتراضي*). يوازن بين الرؤية واستخدام المساحة.
    - **كبير**. يوفر معلومات أداة مصغرة أكبر وأكثر وضوحًا.

2. **إخفاء أيقونات الأداة المصغرة** (*للوحات العلوية والسفلية*):

    - يحسن الوضوح ويزيد المساحة المخصصة للبيانات الهامة.
    - مفيد بشكل خاص عند عرض العديد من الأدوات المصغرة في نفس **الصف**.

3. **حجم فردي لصفوف مختلفة** (*لجميع اللوحات*):

    - يمكن تحديد حجم الأدوات المصغرة بشكل فردي عن طريق ضبط حجم الصف والعمود.
    - **ملاحظة:** تغيير حجم أداة مصغرة واحدة في صف/عمود سيغير حجم جميع الأدوات المصغرة في ذلك الصف/العمود.

4. **لتغيير حجم الأداة المصغرة ورؤية الأيقونة:**

    - حدد أداة مصغرة قمت بإضافتها بالفعل إلى اللوحة.
    - اضغط على أيقونة *الإعدادات* على الجانب الأيمن من حقل الأداة المصغرة.
    - اضغط على إعداد *الحجم* وحدد أحد الأحجام المتاحة.
    - قم بالتبديل إلى وضع الإيقاف، في حقل *إظهار الأيقونة*.


## تخصيص اللوحات {#panels-customization}

### قائمة سياق الأداة المصغرة {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تكرار الأداة المصغرة](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تكرار الأداة المصغرة](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

توفر **قائمة سياق الأداة المصغرة** طريقة سريعة لإدارة وتكوين الأدوات المصغرة مباشرة من شاشة الخريطة. يمكنك الوصول إليها عن طريق ***الضغط مطولاً*** على أي أداة مصغرة لتخصيص تخطيط الأدوات المصغرة دون مغادرة الخريطة.

**للوحات العلوية والسفلية**

- *إضافة أداة مصغرة إلى اليمين/اليسار:*

    - حدد موضعًا للأداة المصغرة الجديدة بالنسبة إلى الأداة الحالية.
    - اختر الأداة المصغرة من قائمة [الأدوات المصغرة المتاحة](#widgets-for-all-panels).

**للوحات اليسرى واليمنى**

- *إضافة أداة مصغرة فوق/تحت:*

    - حدد ما إذا كنت تريد وضع الأداة المصغرة الجديدة فوق أو تحت الأداة المصغرة الحالية.
    - اضغط على الأداة المصغرة المطلوبة في القائمة لإضافتها إلى الموضع المحدد.

**إجراءات عامة لجميع اللوحات**

- *الإعدادات*.
    - الوصول إلى إعدادات الأداة المصغرة (إذا كانت متاحة) لتخصيص مظهرها أو سلوكها.

- *إعادة تعيين متوسط السرعة*.
    - متوفر لأداة [متوسط السرعة](../widgets/info-widgets.md#average-speed) المصغرة.
    - اضغط مطولاً لإعادة تعيين قيمة السرعة على الفور أثناء الرحلة.

- *حذف*.
    - إزالة الأداة المصغرة من اللوحة.
    - يضمن تأكيد الإجراء أن يكون مقصودًا.

### نسخ الأدوات المصغرة {#copies-of-widgets}

*قائمة OsmAnd ← تكوين الشاشة ← الأدوات المصغرة ← اللوحة*

![تكرار الأداة المصغرة](@site/static/img/widgets/widget_dublicate.png)

يسمح لك OsmAnd بإضافة نسخ متعددة من نفس الأداة المصغرة إلى لوحات أو صفحات مختلفة. هذه الميزة مفيدة بشكل خاص عندما تحتاج إلى معلومات متسقة عبر طرق عرض أو ملفات تعريف مختلفة.

***كيفية تكرار الأدوات المصغرة:***

- **إضافة الأداة المصغرة**. انتقل إلى: *قائمة OsmAnd ← تكوين الشاشة ← الأدوات المصغرة ← اللوحة ←* **إضافة** *أداة مصغرة*.
- **تكرار باستخدام قائمة السياق**. اضغط على الأداة المصغرة وحدد **تكرار** من قائمة الإجراءات.
- **طريقة بديلة**. حدد نفس الأداة المصغرة من قائمة *الأدوات المصغرة المتاحة* واضغط على *إضافة*.


### نقل أو حذف {#move-or-delete}

*قائمة OsmAnd ← تكوين الشاشة ← الأدوات المصغرة ← اللوحة*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_remove_ios.png)

</TabItem>

</Tabs>



يمكنك إعادة ترتيب أو إزالة الأدوات المصغرة من شاشة التطبيق باستخدام وضع **التحرير**.

***كيفية نقل أداة مصغرة:***

- انتقل إلى: *قائمة OsmAnd ← تكوين الشاشة ← الأدوات المصغرة ← اللوحة ← زر التحرير*.
- اضغط مطولاً على **الأيقونة الموجودة على يمين** الأداة المصغرة.
- اسحبها إلى الموضع المطلوب في قائمة الأدوات المصغرة.

***كيفية حذف أداة مصغرة:***

- اتبع نفس الخطوات المذكورة أعلاه.
- اضغط على **أيقونة الناقص** على يسار اسم الأداة المصغرة.
- قم بتأكيد الحذف عند المطالبة بذلك.


## الأزرار {#buttons}

### الأزرار المخصصة {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

تسمح لك **الإجراءات السريعة (الأزرار المخصصة)** بإضافة قائمة من الإجراءات الفردية من جميع [الإجراءات السريعة](../widgets/quick-action.md#custom-buttons) المتاحة. يمكن تعيين هذه الإجراءات لزر واحد أو أكثر من أزرار الأداة المصغرة على شاشة الخريطة. توفر الأزرار المخصصة وصولاً سريعًا إلى الإجراءات المستخدمة بشكل متكرر.

### الأزرار الافتراضية {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. تسمح لك **الأزرار الافتراضية** بتخصيص الأزرار المحددة مسبقًا التي تظهر على شاشة الخريطة. يمكنك اختيار إخفاء أو إظهار الأزرار التالية:

    - [وضع ثلاثي الأبعاد](../widgets/map-buttons.md#3d-mode). بالنسبة لنظام iOS، الزر متاح دائمًا. بالنسبة لنظام Android، يظهر في القائمة ويكون متاحًا للإعداد إذا تم تحديد محرك عرض الخريطة [الإصدار 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [البوصلة](../widgets/map-buttons.md#display-options). تشير إلى كيفية توجيه الخريطة على الجهاز.
    3 طرق عرض: *مرئي دائمًا*، *مخفي دائمًا*، *مرئي إذا تم تدوير الخريطة*.

    - [تكوين الخريطة](../map/configure-map-menu.md). الوصول إلى خيارات لتعديل نمط الخريطة، والطبقات، والإعدادات الإضافية.

    - [القائمة](../widgets/map-buttons.md#main-menu). تفتح قائمة التطبيق الرئيسية للوصول إلى جميع الميزات.

    - [موقعي](../widgets/map-buttons.md#my-location-and-zoom). يركز الخريطة على موقعك الحالي.

    - [الملاحة](../widgets/map-buttons.md#directions). أساسي لتخطيط المسار وبدء الملاحة.

    - [البحث](../widgets/map-buttons.md#search). يفتح أداة البحث عن المواقع.

    - [تكبير / تصغير](../widgets/map-buttons.md#my-location-and-zoom). يضبط مستوى تكبير الخريطة لإظهار المزيد أو أقل من التفاصيل.

2. تحتوي **قائمة النقاط الثلاث** في شاشة الأزرار الافتراضية على إجراءات مثل:

    - *إعادة تعيين إلى الافتراضي*. يسمح لك بإعادة إعدادات الزر إلى مظهرها الأصلي.
    - *نسخ من ملف تعريف آخر*. حدد من أي ملف تعريف من القائمة المعروضة تريد نسخ إعدادات الزر.

3. يوفر **مظهر الزر الافتراضي** (*أندرويد فقط*) مجموعة متنوعة من خيارات التخصيص لهذا النوع من الأزرار. لتعديل مظهر الزر، اضغط على الزر المطلوب من القائمة وحدد خيار [المظهر](#button-appearance).


### مظهر الزر {#button-appearance}

<InfoAndroidOnly/>

![مظهر الزر](@site/static/img/widgets/button_appearance_settings_andr.png)

تتيح لك ميزة *مظهر الزر* تخصيص مظهر الأزرار على واجهة الخريطة بالكامل. تتوفر خيارات التخصيص هذه لكل من *الإجراءات السريعة (الأزرار المخصصة)* و*الأزرار الافتراضية*، مما يوفر تحكمًا شاملاً في مظهر واجهة الخريطة ويسمح بإجراء تعديلات دقيقة على تصميم الزر.

***خيارات التخصيص***:

- **الأيقونة**. اختر من قائمة الأيقونات التي تمثل الإجراءات التي أضفتها بالفعل، مما يسهل تحديد الوظائف بنظرة سريعة.
- **نصف قطر الزاوية**. اضبط هذا الإعداد لتغيير شكل الزر، بدءًا من الزوايا الحادة والمربعة إلى الحواف الناعمة والمستديرة.
- **الحجم**. اختر حجم الزر الذي يناسب شاشتك ويبرز حسب الحاجة. بالنسبة لـ *الأزرار الافتراضية*، يتم تحديد الأحجام مسبقًا ولا يمكن تعديلها.
- **شفافية الخلفية**. تحكم في رؤية خلفية الزر. يمكنك ضبطها لتكون مرئية بالكامل أو شفافة جزئيًا، أو عرض ظل الإطار والأيقونة فقط.


## أخرى {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *← أخرى*

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [المسافة بالنقر](../widgets/radius-ruler.md#distance-by-tap). يتيح القدرة على قياس المسافة من موقعك إلى النقطة المحددة.
- [عداد السرعة](../widgets/info-widgets.md#speedometer). يعرض السرعة الحالية بناءً على بيانات GPS والسرعة المحدودة بناءً على [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). تعتمد البيانات المعروضة أيضًا على إعداد [تسامح حد السرعة](../navigation/guidance/voice-navigation.md#speed-limit) في OsmAnd.


### عرض الموضع (موضع الموقع على الشاشة) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_display_position_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![صفحة الأداة المصغرة](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *موضع الموقع على الشاشة* هو اسم هذا الإعداد في إصدار iOS من OsmAnd.

يسمح لك بتعيين موضع المؤشر لـ *[موقعي](../map/interact-with-map.md#my-location-and-zoom)* على خريطة OsmAnd. تتوفر ثلاثة خيارات:

- **<Translate android="true" ids="position_on_map_center"/>**. يتم وضع المؤشر دائمًا في منتصف الشاشة.
- **<Translate android="true" ids="position_on_map_bottom"/>**. يتم وضع *موقعي* أسفل منتصف الشاشة بقليل. يسمح لك هذا الوضع برؤية المزيد من معلومات الخريطة أمام حركتك، وهو مفيد أثناء التنقل.
- **<Translate android="true" ids="shared_string_automatic"/>**. يضع *موقعي* اعتمادًا على *[اتجاه الخريطة](../map/interact-with-map.md#map-orientation-modes)* (أسفل - لاتجاه الحركة، وسط - لجميع الاتجاهات الأخرى).


## الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*

![صفحة الأداة المصغرة](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> ← أي لوحة*

![صفحة الأداة المصغرة](@site/static/img/widgets/widget_actions_ios.png)

</TabItem>

</Tabs>

الوصول إلى إجراءات إضافية في شاشة التكوين هي:

- *أندرويد*. تقع في شاشة التكوين في أسفل الشاشة في قسم *الإجراءات*: *القائمة ← تكوين الشاشة ← الإجراءات*.
- *أندرويد / iOS*. تقع على شاشات كل لوحة في *قائمة النقاط الثلاث* في الزاوية العلوية اليمنى من الشاشة.

الإجراءات المتاحة:

- **إعادة تعيين إلى الافتراضي**. تتيح لك هذه الميزة إعادة تعيين جميع الإعدادات إلى القيم الافتراضية إذا كنت ترغب في البدء من جديد، أو استخدام الإعدادات المسبقة فقط عند بدء تشغيل OsmAnd.
- **نسخ من ملف تعريف آخر**. تتيح لك هذه الميزة استيراد الإعدادات بسرعة من ملف تعريف آخر، وتحديد الملفات المطلوبة من القائمة، ونسخها.


## تبديل الملف الشخصي {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تكوين الشاشة](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- بالنسبة لأجهزة **أندرويد**، يمكنك تغيير الملفات الشخصية في الجزء العلوي من الشاشة الرئيسية لتكوين الشاشة باستخدام أيقونات الملفات الشخصية المتاحة.
- إذا كنت تستخدم جهاز **iOS**، فاضغط على أيقونة الملف الشخصي في الزاوية العلوية من الشاشة الرئيسية لتكوين الشاشة وحدد الملف الشخصي المطلوب من القائمة لتنشيطه.

**ملاحظة**. لا يعرض خيار *تبديل الملف الشخصي* جميع الملفات الشخصية الموجودة، بل فقط تلك التي تم *تشغيلها* في قائمة الإعدادات.


## مقالات ذات صلة {#related-articles}

- [أزرار الخريطة](./map-buttons.md)
- [أدوات معلوماتية مصغرة](./info-widgets.md)
- [أدوات ملاحية مصغرة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات المصغرة](./markers.md)
- [الإجراء السريع](./quick-action.md)

> *آخر تحديث: يوليو 2025*