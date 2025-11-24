---
source-hash: fdd12adf291a5cea20dd8e7dbadf1d71cf7c14eada5b2f809e40ee69e559cbd6
sidebar_position: 1
title:  تهيئة الشاشة
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

تسمح لك قائمة **تهيئة الشاشة** في OsmAnd بتخصيص واجهة الخريطة عن طريق إضافة وترتيب الأدوات والأزرار والإجراءات السريعة عبر لوحات متعددة.

يمكنك:

- إضافة أدوات [معلوماتية](../widgets/info-widgets.md)، و[ملاحية](../widgets/nav-widgets.md)، و[متعلقة بالعلامات](../widgets/markers.md).
- إضافة أو تعديل [الإجراءات السريعة](../widgets/quick-action.md)، و[الأزرار المخصصة](../widgets/quick-action.md#custom-buttons)، و[الأزرار الافتراضية](../widgets/map-buttons.md).
- تنظيم الأدوات في لوحات (علوية، سفلية، يسرى، يمنى، وسطى).
- إنشاء **صفحات** متعددة داخل اللوحات الجانبية، واختيار حجم الأدوات.
- اختيار ارتفاع الصف وتشغيل/إيقاف أيقونات الأدوات.

جميع الأدوات [تعتمد على الملف الشخصي](../personal/profiles.md) — لكل ملف شخصي تخطيطه وترتيبه ورؤيته وإعداداته الخاصة.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## لوحات الأدوات {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![تهيئة الشاشة](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![تهيئة الشاشة](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

يسمح لك OsmAnd بتنظيم واجهة الخريطة باستخدام لوحات أدوات قابلة للتخصيص.
يمكنك إضافة وإعادة ترتيب وتجميع وإزالة الأدوات في اللوحات التالية:

- **اللوحة العلوية**
- **اللوحة السفلية**
- **اللوحة اليسرى**
- **اللوحة اليمنى**

تدعم كل لوحة سلوكيات تخطيط مختلفة:

- تعرض **اللوحتان العلوية والسفلية** الأدوات في صفوف. يمكنك وضع أداة واحدة أو اثنتين في كل صف وإضافة صفوف متعددة إذا لزم الأمر.
- تدعم **اللوحتان اليسرى واليمنى** صفحات متعددة. يمكنك تجميع الأدوات في صفحات منفصلة والتبديل بينها.


### كتالوج الأدوات {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***أدوات الملاحة:***  

- [الاتجاه](../widgets/nav-widgets.md#bearing-widget).  
    تعرض هذه المجموعة الاتجاه المطلق أو النسبي إلى هدف بوحدات زاوية.  
    تتضمن ٣ أدوات: *الاتجاه النسبي*، *الاتجاه المغناطيسي*، *الاتجاه الحقيقي*.

- [ملف الارتفاع](../widgets/nav-widgets#elevation-widget) (*فقط في اللوحة العلوية/السفلية*، *أندرويد فقط*).  
    يعرض ارتفاع المسار والانحدار.

- [المسارات](../widgets/nav-widgets#lanes) (*فقط في اللوحة العلوية/السفلية*).  
    إرشاد مرئي للمسارات.

- [شريط علامات الخريطة](../widgets/markers.md#configure-marker-widgets) (*فقط في اللوحة العلوية/السفلية*).  
    يعرض المسافة/الاتجاه إلى العلامات المحفوظة.  
    قابل للتهيئة لعلامة واحدة أو اثنتين.

- [نقطة الملاحة](../widgets/nav-widgets.md#navigation-points).  
    تعرض المجموعة المسافة المتبقية إلى الوجهة، أو نقطة وسيطة، أو وقت الوصول إلى نقطة وسيطة، أو وقت السفر لمسار محسوب.  
    تتضمن ٤ أدوات: [المسافة إلى الوجهة](../widgets/nav-widgets.md#distance-to-destination)، [المسافة إلى النقطة الوسيطة](../widgets/nav-widgets.md#distance-to-intermediate)، [الوقت إلى النقطة الوسيطة](../widgets/nav-widgets.md#time-to-intermediate)، [الوقت إلى الوجهة](../widgets/nav-widgets.md#time-to-destination).

- [مناورات المسار](../widgets/nav-widgets.md#next-turn) (*فقط في اللوحة اليسرى/اليمنى*).  
    يتم تنشيط هذه المجموعة أثناء الملاحة وتعرض المسافة والسهم إلى المناورة التالية.  
    تتضمن ٣ أدوات: *المنعطف التالي*، *المنعطف التالي (صغير)*، *المنعطف الثاني التالي*.

- [حد السرعة](../widgets/nav-widgets.md#speed-limit).  
    يعرض حد السرعة الحالي للطريق.

- [عداد السرعة](../widgets/info-widgets.md#speedometer).  
    يعرض السرعة الحالية بناءً على بيانات GPS والسرعة المحدودة بناءً على [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [اسم الشارع](../widgets/nav-widgets#street-name) (*فقط في اللوحة العلوية/السفلية*).  
    يعرض الشارع الحالي أو القادم.

<br/>

***أدوات المعلومات:***

- [الارتفاع](../widgets/info-widgets.md#altitude-widgets).  
    تعرض المجموعة الارتفاع فوق مستوى سطح البحر للموقع الحالي أو لمركز الخريطة الحالي.  
    تتضمن أداتين: *الارتفاع: الموقع الحالي*، *الارتفاع: مركز الخريطة*.

- [متوسط السرعة](../widgets/info-widgets.md#average-speed).  
    يعرض متوسط سرعة الرحلة الحالية.

- [مستوى البطارية](../widgets/info-widgets.md#battery-level).  
    يعرض مستوى بطارية الجهاز.

- [أدوات الإحداثيات](../widgets/info-widgets#coordinates-widget) (*فقط في اللوحة العلوية/السفلية*).  
    تعرض هذه المجموعة الإحداثيات الجغرافية للموقع الجغرافي الحالي.  
    تتضمن أداتين: *الإحداثيات: مركز الخريطة*، *الإحداثيات: الموقع الحالي*.

- [السرعة الحالية](../widgets/info-widgets.md#current-speed).  
    يعرض السرعة من مستشعر GPS.

- [الوقت الحالي](../widgets/info-widgets.md#current-time).  
    يعرض وقت النظام الحالي.

- [نسبة الانحدار](../widgets/info-widgets.md#glide-ratio).  
    تعرض الأدوات نسبة الانحدار إلى الهدف ومتوسط نسبة الانحدار للرحلة الحالية.  
    تتضمن أداتين: *نسبة الانحدار إلى الهدف*، *متوسط نسبة الانحدار*.

- [معلومات GPS](../widgets/info-widgets.md#gps-info) (*أندرويد فقط*).  
    يعرض عدد الأقمار الصناعية المكتشفة.

- [علامات الخريطة](../widgets/markers.md).  
    تعرض المجموعة المسافة أو وقت الوصول المقدر (ETA) لأول علامتين في [القائمة](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    تتضمن أداتين: *العلامة الأولى*، *العلامة الثانية*.

- [مسطرة نصف القطر](../widgets/info-widgets.md#radius-ruler).  
    يعرض المسافة بين موقعك ونقطة على الخريطة، محاطة بـ [أداة مسطرة نصف القطر](../widgets/radius-ruler.md).

- [شروق الشمس، غروب الشمس](../widgets/info-widgets.md#sun-position).  
    يعرض وقت شروق الشمس أو غروبها التالي لمركز الخريطة.  
    تتضمن أداتين: *شروق الشمس*، *غروب الشمس*.

<br/>

***أدوات تعتمد على الإضافات:***  

- [ملاحظات صوتية/فيديو](../widgets/info-widgets.md#audiovideo-notes-widget).  
    وصول سريع لالتقاط الوسائط.  
    تتضمن ٤ أدوات: *عند الطلب*، *تسجيل صوتي*، *تسجيل فيديو*، *التقاط صورة*.

- [أدوات المطور](../widgets/info-widgets.md#developer-widgets).  
    يعرض معلومات اختيارية.  
    تتضمن ٥ أدوات: *معدل إطارات عرض الخريطة*، *إمالة الكاميرا*، *ارتفاع الكاميرا*، *مستوى التكبير*، *المسافة من الكاميرا إلى الهدف*، *ذاكرة الوصول العشوائي المتاحة*.  

- [أدوات المستشعرات الخارجية](../widgets/info-widgets.md#external-sensors-widgets).  
    تساعد المجموعة على تتبع البيانات من مستشعرات BLE/ANT+ في الوقت الفعلي.  
    تتضمن ٦ أدوات: *معدل ضربات القلب*، *طاقة الدراجة* (*أندرويد فقط*)، *إيقاع الدراجة*، *سرعة الدراجة*، *مسافة الدراجة*، *درجة الحرارة*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    يفتح تطبيق Mapillary للحصول على صور على مستوى الشارع.

- [حالة OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    وصول سريع إلى [تطبيق OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [أداة ركن السيارة](../widgets/info-widgets.md#parking-widget).  
    المسافة من مركز الشاشة إلى موقع ركن السيارة المحفوظ.

- [تسجيل الرحلة](../widgets/info-widgets.md#trip-recording-widgets).  
    يبدأ ويوقف تسجيل المسار، ويعرض بيانات تسجيل المسار.  
    تتضمن ٤ أدوات: *المسافة*، *المدة*، *الصعود*، *النزول*.

- [الطقس](../widgets/info-widgets.md#weather-widgets).  
    يعرض معلومات الطقس التفصيلية.  
    تتضمن ٥ أدوات: *درجة الحرارة*، *ضغط الهواء*، *الرياح*، *الغيوم*، *الهطول*.

:::note أدوات تعتمد على اللوحة

- متاحة فقط في **اللوحتين العلوية والسفلية** ويجب وضعها في صفوف منفصلة: *أدوات الإحداثيات، أداة ملف الارتفاع، أداة المسارات، شريط علامات الخريطة، أداة اسم الشارع*.
- متاحة فقط في **اللوحتين اليسرى واليمنى**: *مناورات المسار*.

:::


### الصفوف {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



تسمح لك ميزة **وضع الصف** بإضافة أي عدد من الصفوف حسب الحاجة إلى اللوحتين العلوية والسفلية. يمكنك عرض أدوات متعددة في كل صف، مما يعزز كمية المعلومات المرئية.

***كيفية تهيئة الصفوف:***

- **إضافة أدوات**: انقر على زر *الزائد* (أندرويد) أو *إضافة أداة* (iOS)، ثم اختر من قائمة الأدوات المتاحة.
- **إعادة ترتيب الأدوات**: انقر على زر *القلم* (أندرويد) أو *تعديل* (iOS) لإعادة ترتيب الأدوات.
- **إضافة صفوف**: انقر على زر *إضافة صف* لإنشاء صفوف جديدة لأدواتك.
- **نقل الأدوات**: اسحب الأدوات بين الصفوف المختلفة.
- **الوصول إلى إعدادات الأداة**: انقر على أيقونة *"i"* (أندرويد) أو سهم *">"* (iOS) لفتح إعدادات الأداة.
- **حفظ التغييرات**: انقر على *تطبيق* (أندرويد) أو *تم* (iOS) لحفظ التخطيط.


#### أنواع الأدوات والقيود {#widget-types-and-restrictions}

يسمح لك الوضع بإضافة **أكثر من أداة واحدة في صف واحد** على اللوحتين العلوية والسفلية لعرض أكبر قدر ممكن من المعلومات.  

- **الأدوات المعقدة**. يمكن إضافة أداة معقدة واحدة فقط في كل صف. وتشمل هذه:
    - [شريط علامات الخريطة (*أندرويد فقط*)](../widgets/markers.md#configure-marker-widgets)
    - [اسم الشارع](../widgets/nav-widgets#street-name)
    - [أدوات الإحداثيات](../widgets/info-widgets#coordinates-widget)
    - [المسارات](../widgets/nav-widgets#lanes)
    - [ملف الارتفاع (*أندرويد فقط*)](../widgets/nav-widgets#elevation-widget)
    - [مناورات المسار](../widgets/nav-widgets.md#next-turn)

- **الأدوات البسيطة**. يمكن إضافة أدوات بسيطة متعددة إلى صف واحد. يمكن أن تعرض هذه الأدوات *الاسم*، *وحدات القياس*، *القيمة*، و*الأيقونة*. يتم تلخيط النص في الأدوات البسيطة تلقائيًا لضمان قابلية القراءة الواضحة مقابل خلفيات الخرائط المختلفة في وضع اللوحة الشفافة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![تلخيط الأداة أندرويد](@site/static/img/widgets/simple_widgets_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![تلخيط الأداة iOS](@site/static/img/widgets/simple_widgets_ios.png) 

</TabItem>

</Tabs>


### الصفحات {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → تعديل → إضافة صفحة*  

![صفحة الأداة](@site/static/img/widgets/widget_page_1_andr.png) ![صفحة الأداة](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → تعديل → إضافة صفحة*

![صفحة الأداة](@site/static/img/widgets/widget_page_1_ios.png) ![صفحة الأداة](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

يمكن تجميع الأدوات في اللوحتين اليمنى واليسرى في **صفحات**. تتيح لك ميزة **وضع الصفحات** إضافة ٥ صفحات إلى اللوحتين اليسرى واليمنى.

***كيفية تهيئة الصفحات:***

- **إضافة صفحة**. انتقل إلى إعدادات اللوحة اليسرى/اليمنى وانقر على *تعديل → إضافة صفحة*.
- **تنظيم الأدوات حسب الصفحة**. هذه الميزة مفيدة عندما تكون هناك حاجة لمجموعات مختلفة من الأدوات لمهام مختلفة، مثل الملاحة مقابل تصفح الخريطة.
- تسمح لك الصفحات بإنشاء **مجموعات أدوات** لسيناريوهات محددة، مما يحسن سير العمل ويقلل من الفوضى.


## إعدادات الأداة {#widget-settings}

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

١. **خيارات حجم الأداة** (*لجميع اللوحات*):  
    يمكنك تخصيص حجم **الأدوات البسيطة** في **اللوحات العلوية والسفلية واليسرى واليمنى**:

    - **صغير**. مثالي للشاشات المدمجة، مما يوفر مساحة أكبر على الشاشة للخرائط.
    - **متوسط** (*حجم الأداة الافتراضي*). يوازن بين الرؤية واستخدام المساحة.
    - **كبير**. يوفر معلومات أداة أكبر وأكثر وضوحًا.  

٢. **إخفاء أيقونات الأدوات** (*للوحتين العلوية والسفلية*):

    - يحسن الوضوح ويزيد من المساحة المخصصة للبيانات المهمة.
    - مفيد بشكل خاص عند عرض العديد من الأدوات في نفس **الصف**.

٣. **إخفاء تسميات نص الأداة**:

    - يخفي تلقائيًا تسميات النص للحفاظ على رؤية المعلومات الرقمية بالكامل في التخطيطات المدمجة.
    - يساعد في الحفاظ على ترتيب أداة نظيف وقابل للقراءة عندما تكون المساحة محدودة.   

٤. **حجم فردي لصفوف مختلفة** (*لجميع اللوحات*):

    - يمكن تحديد حجم الأدوات بشكل فردي عن طريق ضبط حجم الصف والعمود.
    - **ملاحظة:** سيؤدي تغيير حجم أداة واحدة في صف/عمود إلى تغيير حجم جميع الأدوات في ذلك الصف/العمود.

٥. **لتغيير حجم الأداة ورؤية الأيقونة:**

    - حدد أداة قمت بإضافتها بالفعل إلى اللوحة.  
    - انقر على أيقونة *الإعدادات* على الجانب الأيمن من حقل الأداة.
    - انقر على إعداد *الحجم* وحدد أحد الأحجام المتاحة.
    - قم بالتبديل إلى وضع الإيقاف، في حقل *إظهار الأيقونة*.


## تخصيص اللوحات {#panels-customization}

### قائمة سياق الأداة {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة سياق الأداة](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة سياق الأداة](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

توفر **قائمة سياق الأداة** طريقة سريعة لإدارة وتهيئة الأدوات مباشرة من شاشة الخريطة. يمكنك الوصول إليها عن طريق ***النقر المطول*** على أي أداة لتخصيص تخطيط الأدوات دون مغادرة الخريطة.


- **إضافة أداة إلى اليمين/اليسار** (فقط *للوحتين العلوية والسفلية*)
    - حدد موضعًا للأداة الجديدة بالنسبة للأداة الحالية.
    - اختر الأداة من قائمة [الأدوات المتاحة](#widgets-catalog).

- **إضافة أداة أعلى/أسفل** (فقط *للوحتين اليسرى واليمنى*)
    - حدد ما إذا كنت تريد وضع الأداة الجديدة أعلى أو أسفل الأداة الحالية.
    - انقر على الأداة المطلوبة في القائمة لإضافتها إلى الموضع المحدد.

- **الإعدادات**
    - الوصول إلى إعدادات الأداة (إذا كانت متاحة) لتخصيص مظهرها أو سلوكها.

- **حذف**
    - إزالة الأداة من اللوحة.
    - يضمن موجه التأكيد أن الإجراء مقصود.

- **إعادة تعيين متوسط السرعة** (مثال على *إجراءات خاصة بالأداة*)
    - متاح لأداة [متوسط السرعة](../widgets/info-widgets.md#average-speed).
    - انقر مطولاً لإعادة تعيين قيمة السرعة فورًا أثناء الرحلة.


### نسخ الأدوات {#copies-of-widgets}

*قائمة OsmAnd → تهيئة الشاشة → الأدوات → اللوحة*  

![تكرار الأداة](@site/static/img/widgets/widget_dublicate.png)  

يسمح لك OsmAnd بإضافة نسخ متعددة من نفس الأداة إلى لوحات أو صفحات مختلفة. هذه الميزة مفيدة بشكل خاص عندما تحتاج إلى معلومات متسقة عبر طرق عرض أو ملفات شخصية مختلفة.  

***كيفية تكرار الأدوات:***

- **إضافة الأداة**. انتقل إلى: *قائمة OsmAnd → تهيئة الشاشة → الأدوات → اللوحة →* **إضافة** *أداة*.
- **التكرار باستخدام قائمة السياق**. انقر على الأداة وحدد **تكرار** من قائمة الإجراءات.
- **طريقة بديلة**. حدد نفس الأداة من قائمة *الأدوات المتاحة* وانقر على *إضافة*.


### نقل أو حذف {#move-or-delete}

*قائمة OsmAnd → تهيئة الشاشة → الأدوات → اللوحة*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



يمكنك إعادة ترتيب أو إزالة الأدوات من شاشة التطبيق باستخدام وضع **التعديل**.  

***كيفية نقل أداة:***

- اذهب إلى: *قائمة OsmAnd → تهيئة الشاشة → الأدوات → اللوحة → زر التعديل*.
- انقر مطولاً على **الأيقونة على يمين** الأداة.
- اسحبها إلى الموضع المطلوب في قائمة الأدوات.

***كيفية حذف أداة:***  

- اتبع نفس الخطوات المذكورة أعلاه.
- انقر على **أيقونة الناقص** على يسار اسم الأداة.
- قم بتأكيد الحذف عند المطالبة.


## الأزرار {#buttons}

### الأزرار المخصصة {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**الإجراء السريع (الأزرار المخصصة)** يسمح لك بإضافة قائمة من الإجراءات الفردية من جميع [الإجراءات السريعة](../widgets/quick-action.md#custom-buttons) المتاحة. يمكن تعيين هذه الإجراءات لزر أداة واحد أو أكثر على شاشة الخريطة. توفر الأزرار المخصصة وصولاً سريعًا إلى الإجراءات المستخدمة بشكل متكرر.

### الأزرار الافتراضية {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![صفحة الأداة](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

١. تسمح لك **الأزرار الافتراضية** بتخصيص أي من أزرار الخريطة المعدة مسبقًا تكون مرئية على شاشة الخريطة. يمكنك اختيار إخفاء أو إظهار الأزرار التالية:

    - [وضع ثلاثي الأبعاد](../widgets/map-buttons.md#3d-mode). بالنسبة لنظام iOS، يكون الزر متاحًا دائمًا. بالنسبة لنظام أندرويد، يظهر في القائمة ويكون متاحًا للإعداد إذا تم تحديد محرك عرض الخريطة [الإصدار ٢ (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [البوصلة](../widgets/map-buttons.md#display-options). يشير إلى كيفية توجيه الخريطة على الجهاز.  
    ٣ طرق عرض: *مرئي دائمًا*، *مخفي دائمًا*، *مرئي إذا تم تدوير الخريطة*.

    - [تهيئة الخريطة](../map/configure-map-menu.md). الوصول إلى خيارات لتعديل نمط الخريطة وطبقاتها وإعداداتها الإضافية.

    - [القائمة](../widgets/map-buttons.md#main-menu). يفتح قائمة التطبيق الرئيسية للوصول إلى جميع الميزات.

    - [موقعي](../widgets/map-buttons.md#my-location-and-zoom). يركز الخريطة على موقعك الحالي.

    - [الملاحة](../widgets/map-buttons.md#directions). ضروري لتخطيط المسار وبدء الملاحة.

    - [بحث](../widgets/map-buttons.md#search). يفتح أداة البحث للعثور على المواقع.

    - [تكبير / تصغير](../widgets/map-buttons.md#my-location-and-zoom). يضبط مستوى تكبير الخريطة لإظهار تفاصيل أكثر أو أقل.

٢. تحتوي **قائمة النقاط الثلاث** على شاشة الأزرار الافتراضية على إجراءات مثل:

    - *إعادة التعيين إلى الافتراضي*. يسمح لك بإعادة إعدادات الزر إلى مظهرها الأصلي.
    - *نسخ من ملف شخصي آخر*. حدد من أي ملف شخصي من القائمة المعروضة تريد نسخ إعدادات الزر.

٣. يوفر **مظهر الزر الافتراضي** (*أندرويد فقط*) مجموعة متنوعة من خيارات التخصيص لهذا النوع من الأزرار. لتعديل مظهر الزر، انقر على الزر المطلوب من القائمة وحدد خيار [المظهر](#button-appearance).


### مظهر الزر {#button-appearance}

<InfoAndroidOnly/>

![مظهر الزر](@site/static/img/widgets/button_appearance_settings_andr.png)

تتيح لك ميزة *مظهر الزر* تخصيص مظهر الأزرار على واجهة الخريطة بالكامل. تتوفر خيارات التخصيص هذه لكل من *الإجراء السريع (الأزرار المخصصة)* و*الأزرار الافتراضية*، مما يوفر تحكمًا شاملاً في مظهر واجهة الخريطة ويسمح بإجراء تعديلات دقيقة على تصميم الزر.

***خيارات التخصيص***:

- **الأيقونة**. اختر من قائمة الأيقونات التي تمثل الإجراءات التي أضفتها بالفعل، مما يسهل التعرف على الوظائف بلمحة.
- **نصف قطر الزاوية**. اضبط هذا الإعداد لتغيير شكل الزر، بدءًا من الزوايا الحادة والمربعة إلى الحواف الدائرية والناعمة.
- **الحجم**. اختر حجم الزر الذي يناسب شاشتك ويبرز حسب الحاجة. بالنسبة *للأزرار الافتراضية*، تكون الأحجام محددة مسبقًا ولا يمكن تعديلها.
- **شفافية الخلفية**. تحكم في رؤية خلفية الزر. يمكنك ضبطها لتكون مرئية بالكامل أو شفافة جزئيًا، أو عرض ظل الإطار والأيقونة فقط.


## أخرى {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![صفحة الأداة](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ أخرى*

![صفحة الأداة](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [المسافة بالنقر](../widgets/radius-ruler.md#distance-by-tap). يمنح القدرة على قياس المسافة من موقعك إلى النقطة المحددة.
- [عداد السرعة](../widgets/info-widgets.md#speedometer). يعرض السرعة الحالية بناءً على بيانات GPS والسرعة المحدودة بناءً على [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). تعتمد البيانات المعروضة أيضًا على إعداد [تفاوت حد السرعة](../navigation/guidance/voice-navigation.md#speed-limit) في OsmAnd.


### موضع العرض (موضع الموقع على الشاشة) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![صفحة الأداة](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![صفحة الأداة](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *موضع الموقع على الشاشة* هو اسم هذا الإعداد في إصدار iOS من OsmAnd.  

يسمح لك بتعيين موضع المؤشر إلى *[موقعي](../map/interact-with-map.md#my-location-and-zoom)* على خريطة OsmAnd. هناك ثلاثة خيارات متاحة:  

- **<Translate android="true" ids="position_on_map_center"/>**. يتم وضع المؤشر دائمًا في وسط الشاشة.
- **<Translate android="true" ids="position_on_map_bottom"/>**. يتم وضع *موقعي* أسفل مركز الشاشة قليلاً. يسمح هذا الوضع برؤية المزيد من معلومات الخريطة أمام حركتك، وهو أمر مفيد أثناء الملاحة.
- **<Translate android="true" ids="shared_string_automatic"/>**. يضع *موقعي* اعتمادًا على *[اتجاه الخريطة](../map/interact-with-map.md#map-orientation-modes)* (*أسفل* - لاتجاه الحركة، *وسط* - لجميع الحالات الأخرى).


## الإجراءات {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![صفحة الأداة](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → أي لوحة*

![صفحة الأداة](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

الوصول إلى الإجراءات الإضافية في شاشة التهيئة هي:

- *أندرويد*. تقع في شاشة التهيئة في أسفل الشاشة في قسم *الإجراءات*: *القائمة → تهيئة الشاشة → الإجراءات*.
- *أندرويد / iOS*. تقع على شاشات كل لوحة في *قائمة النقاط الثلاث* في الزاوية اليمنى العليا من الشاشة.

الإجراءات المتاحة:

- **إعادة التعيين إلى الافتراضي**. تتيح لك هذه الميزة إعادة تعيين جميع الإعدادات إلى القيم الافتراضية إذا كنت ترغب في البدء من جديد، أو استخدام الإعدادات المسبقة فقط عند بدء تشغيل OsmAnd.
- **نسخ من ملف شخصي آخر**. تتيح لك هذه الميزة استيراد الإعدادات بسرعة من ملف شخصي آخر، وتحديد الإعدادات المطلوبة من القائمة، ونسخها.


## تبديل الملف الشخصي {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة تهيئة الشاشة](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- لأجهزة **أندرويد**، يمكنك تغيير الملفات الشخصية في الجزء العلوي من الشاشة الرئيسية لتهيئة الشاشة باستخدام أيقونات الملفات الشخصية المتاحة.  
- إذا كنت تستخدم جهاز **iOS**، فانقر على أيقونة الملف الشخصي في الزاوية العلوية من الشاشة الرئيسية لتهيئة الشاشة وحدد الملف الشخصي المطلوب من القائمة لتفعيله.  

**ملاحظة**: لا يعرض *خيار تبديل الملف الشخصي* جميع الملفات الشخصية الموجودة، ولكن فقط تلك التي تم *تشغيلها* في قائمة الإعدادات.


## مقالات ذات صلة {#related-articles}

- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات الملاحة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [أدوات العلامات](./markers.md)
- [الإجراء السريع](./quick-action.md)