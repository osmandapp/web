---
source-hash: d91382fd90471c35f09518fffca8df6e01494de94a597a6b8006d0c7f62c249d
sidebar_position: 3
sidebar_label: الخريطة
title: الخريطة العالمية على الموقع الإلكتروني
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


<InfoIncompleteArticle/>

:::info
موقع *[osmand.net/map](https://osmand.net/map/)* قيد التطوير والاختبار حاليًا.
**لذلك، قد يختلف تصميم وتشغيل بعض الوظائف على الموقع عن تلك الموصوفة في هذا المقال.**

لقد أنشأنا [موضوع المناقشة](https://github.com/osmandapp/OsmAnd/discussions/16567) على GitHub الخاص بنا حتى تتمكن من ترك ملاحظاتك هناك.
:::


## نظرة عامة {#overview}

خريطة OsmAnd على الويب هي خريطة عالمية تستند إلى بيانات [أوبن ستريت ماب (OSM)](https://www.openstreetmap.org/). تتيح للمستخدمين عرض بياناتهم الخاصة، مثل المسارات والمفضلة، وإنشاء مسارات ملاحة لأي ملف تعريف، والوصول إلى ميزات إضافية مثل الطقس، ومسارات GPX العامة، ونقاط الاهتمام، وصور ويكيميديا. استكشف وخصص تجربة بياناتك مباشرة في متصفحك.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## قائمة سياق الخريطة {#map-context-menu}

لفتحها، انقر بزر الماوس الأيمن في أي مكان على الخريطة. تتضمن هذه القائمة الإجراءات التالية:

- **أين أنا** – للعثور بسرعة على موقعك الحالي على الخريطة. تعرض هذه الميزة أقرب العناوين إلى النقطة المحددة على الخريطة.
- **فتح الطقس** – للوصول إلى [قائمة الطقس](#weather-on-the-web) لعرض تفاصيل الطقس.
- **إنشاء مسار جديد** – لفتح أداة [*تخطيط مسار*](../web/planner.md#navigation-route) مع الموقع المحدد كنقطة بداية أو وجهة.
- **إضافة مفضلة** – تتيح لك إنشاء وحفظ [مفضلة](../web/web-userdata.mdx#add--edit-favorite) في أي نقطة على الخريطة لسهولة الوصول إليها.
- **الاتجاهات من** – لتعيين النقطة المحددة [كموقع بداية](../web/planner.md#navigation-route) للملاحة.
- **الاتجاهات إلى** – لتعيين النقطة المحددة [كوجهة للملاحة](../web/planner.md#navigation-route).
- **نسخ الإحداثيات** – لنسخ إحداثيات النقطة المحددة للاستخدام الخارجي.
- **إضافة دبوس** – لوضع دبوس لتحديد موقع على الخريطة. ([مثال](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **إظهار المناطق** – لعرض المناطق المرتبطة بالموقع المحدد.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## الطقس على الويب {#weather-on-the-web}

يوفر OsmAnd Web معلومات الطقس من مصدرين للتنبؤ:

- **GFS (الافتراضي)**
- **ECMWF**

للتبديل بين مصادر التنبؤ هذه، انقر على **زر المظلة** في قائمة الطقس.

***ميزات قائمة الطقس:***

- **بيانات الطقس الحالية**: يعرض إحداثياتك مع البيانات التالية:

  - درجة الحرارة.
  - هطول الأمطار.
  - الرياح.
  - ضغط الهواء.
  - الغطاء السحابي.

- **تعديل الوقت**: عدّل التاريخ والوقت باستخدام **أداة الوقت** في قائمة الطقس لعرض الطقس في لحظة معينة.

***طبقات الطقس على الخريطة:***

- استخدم **زر الطبقات** لتحديد وتمكين طبقات الطقس مثل:

  - درجة الحرارة.
  - الضغط.
  - الرياح.
  - الغطاء السحابي.
  - هطول الأمطار.

***عرض التنبؤات:***

- تتوفر تنبؤات الطقس لتوقعات **٧ أيام**.
- يتم توفير تحديثات التنبؤ في **خطوات مدتها ٣ ساعات** للحصول على رؤى تفصيلية.

للوصول إلى هذه الميزات أو تخصيصها، استخدم القوائم على الجانب الأيسر أو الأيمن من الواجهة.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***تنبؤات ٧ أيام***:

انقر على بيانات التنبؤ في القائمة لعرض **تنبؤات ٧ أيام** لموقعك. التنبؤ متاح في:

- **تنسيق الرسم البياني**
- **تنسيق القائمة**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## قائمة "تكوين الخريطة" {#configure-map-menu}

تتيح لك قائمة "تكوين الخريطة" إدارة إعدادات عرض بيانات الخريطة، مثل طبقات نقاط الاهتمام، والمفضلة، والمسارات، والتضاريس. يرجى تسجيل الدخول إلى حساب OsmAnd الخاص بك لاستخدام هذا القسم من القائمة.

لفتح هذه القائمة، انقر على الزر في **الزاوية العلوية اليسرى** أو قم بالوصول إليها من خلال **القائمة**.

- [تراكب نقاط الاهتمام...](#poi-overlay-section). يتيح لك اختيار وعرض فئات نقاط الاهتمام المطلوبة على الخريطة.
- [المفضلة](#favorites-section). تبديل عرض المفضلة على الخريطة.
- [المسارات](#tracks-section). يحتوي على مسارات GPX المرئية على الخريطة.
- [التضاريس](#terrain-section). تمكين أو تعطيل نظام ألوان التضاريس على الخريطة.

![POIs menu](@site/static/img/web/configure_map_web.png)


### قسم تراكب نقاط الاهتمام {#poi-overlay-section}

لإظهار نقاط الاهتمام على الخريطة:

*قائمة تكوين الخريطة ← تراكب نقاط الاهتمام...*. هنا، يمكنك اختيار الفئات لعرضها على الخريطة.

بدلاً من ذلك، يمكنك استخدام [**قسم البحث**](web-search.md) للعثور على المكان المطلوب.

![POIs menu](@site/static/img/web/poi_menu.png)


### قسم المفضلة {#favorites-section}

بنقرة واحدة، يمكنك تبديل عرض المفضلة على الخريطة أو إيقافها. ومع ذلك، سيتم عرض المفضلة التي تم [**تمكين "إظهار على الخريطة"**](../web/web-userdata.mdx#favorites-on-the-web) لها فقط.


### قسم المسارات {#tracks-section}

يحتوي هذا القسم على قائمة [**بمسارات GPX المرئية على الخريطة**](../web/web-userdata.mdx#visible-on-the-map) والمسارات **المرئية مؤخرًا**.

- يمكنك تبديل عرض المسارات أو إيقافه مباشرة.
- قم بتبديل عرض المسارات أو إيقافه من قائمة **المرئية مؤخرًا**.

لكل مسار **قائمة سياق** (يمكن الوصول إليها عبر زر ⋮) بالأوامر التالية:

- **إخفاء المسار**: يخفي المسار المرئي حاليًا من الخريطة.
- **جعل المسار مرئيًا**: يعرض مسارًا من قائمة "المرئية مؤخرًا" على الخريطة.
- **إعادة تسمية**: يتيح لك إعادة تسمية المسار لتسهيل التعرف عليه.
- **تكرار**: ينشئ نسخة من المسار.
- **تنزيل**: يحفظ المسار على جهازك المحلي.
- **حذف**: يزيل المسار نهائيًا من القائمة.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### قسم التضاريس {#terrain-section}

قسم **التضاريس** هو ميزة مدفوعة <ProFeature/>. لاستخدام هذه الميزة، يجب عليك أولاً تسجيل الدخول إلى حساب OsmAnd Pro الخاص بك.

في هذا القسم، يمكنك:

- اختيار **نظام ألوان** للتضاريس:
  - **تظليل التلال**
  - **الميل**
  - **الارتفاع**
- ضبط رؤية طبقة التضاريس المحددة من **٠٪ إلى ١٠٠٪**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.  
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## مخططات عناوين URL {#url-schemes}

لسهولة استخدام خدمة الويب (والتطبيق) من OsmAnd، يمكنك الاستفادة من الروابط المباشرة. وهي عناوين URL خاصة تسمح لك بنقل بيانات الموقع وتضمين تفاصيل حول الدبابيس والمسارات والطقس والمزيد.

يمكن نسخ هذه العناوين ومشاركتها باستخدام أي وسيط يدعمه جهازك وهي متوافقة مع إصداري OsmAnd لنظامي Android و iOS.

١. **عنوان URL مع دبوس على الخريطة:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

٢. **عنوان URL بدون دبوس على الخريطة:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

٣. **عنوان URL مع الملاحة:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

اعتمادًا على المعلمات المحددة، يمكن أن تحتوي سلاسل عناوين URL على:

- **latitude**: قيمة خط العرض كرقم.
- **longitude**: قيمة خط الطول كرقم.
- **start-finish**: إحداثيات الملاحة.
- **profile**: ملف تعريف الملاحة (مثل، سيارة، دراجة).
- **zoom**: مستوى التكبير.

٤. **الطقس**&nbsp; – &nbsp;`osmand.net/map/weather`

***على سبيل المثال***، يمكنك الوصول مباشرة إلى صفحة الطقس بإحداثيات محددة:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

٥. **الحساب**&nbsp; – &nbsp;`osmand.net/map/account`

٦. **تكوين الخريطة**&nbsp; – &nbsp;`osmand.net/map/configure/`

٧. **المسارات**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

٨. **المفضلة**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

٩. **الإعدادات**&nbsp; – &nbsp;`osmand.net/map/settings`

١٠. **تخطيط مسار**&nbsp; - &nbsp;`osmand.net/map/plan`

١١. رابط مباشر إلى [**صفحة الاستكشاف**](https://osmand.net/docs/user/web/web-search#explore) الحالية&nbsp; - &nbsp;`osmand.net/map/search`