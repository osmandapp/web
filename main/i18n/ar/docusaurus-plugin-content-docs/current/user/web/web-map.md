---
source-hash: dde8250578460772829e966968add9c68eaa6a84529c9781ca298152f25ce984
sidebar_position: 3
sidebar_label: Map
title: Global Map on the Website
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
يتم حاليًا تطوير واختبار موقع *[osmand.net/map](https://osmand.net/map/)*.
**لذلك، قد يختلف تصميم وتشغيل بعض الوظائف على الموقع عما هو موضح في هذه المقالة.**

لقد أنشأنا [موضوع المناقشة](https://github.com/osmandapp/OsmAnd/discussions/16567) على GitHub الخاص بنا حتى تتمكن من ترك تعليقاتك هناك.
:::


## نظرة عامة {#overview}

خريطة الويب OsmAnd هي خريطة عالمية تعتمد على بيانات [OpenStreetMap (OSM)](https://www.openstreetmap.org/). تتيح للمستخدمين عرض بياناتهم الخاصة، مثل المسارات والمفضلة، وإنشاء مسارات تنقل لأي ملف تعريف، والوصول إلى ميزات إضافية مثل الطقس، ومسارات GPX العامة، ونقاط الاهتمام (POIs)، وصور ويكيميديا. استكشف وخصص تجربة بياناتك مباشرة في متصفحك.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## قائمة سياق الخريطة {#map-context-menu}

لفتحها، انقر بزر الماوس الأيمن في أي مكان على الخريطة. تتضمن هذه القائمة الإجراءات التالية:

- **أين أنا** – ابحث بسرعة عن موقعك الحالي على الخريطة. تعرض هذه الميزة أقرب العناوين إلى النقطة المحددة على الخريطة.
- **فتح الطقس** – الوصول إلى [قائمة الطقس](#weather-on-the-web) لعرض تفاصيل الطقس.
- **إنشاء مسار جديد** – يفتح أداة [*تخطيط مسار*](../web/planner.md#create-track-and-local) مع الموقع المحدد كنقطة بداية أو وجهة.
- **إضافة مفضلة** – تتيح لك إنشاء وحفظ [مفضلة](../web/web-userdata.mdx#add--edit-favorite) في أي نقطة على الخريطة لسهولة الوصول إليها.
- **الاتجاهات من** – يحدد النقطة المحددة [كموقع بداية](../web/planner.md#navigation-route) للتنقل.
- **الاتجاهات إلى** – يحدد النقطة المحددة [كوجهة للتنقل](../web/planner.md#navigation-route).
- **نسخ الإحداثيات** – ينسخ إحداثيات النقطة المحددة للاستخدام الخارجي.
- **إضافة دبوس** – يضع دبوسًا لتحديد موقع على الخريطة. ([مثال](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **إظهار المناطق** – يعرض المناطق المرتبطة بالموقع المحدد.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## الطقس على الويب {#weather-on-the-web}

يوفر OsmAnd Web معلومات الطقس من مصدرين للتنبؤات:

- **GFS (افتراضي)**
- **ECMWF**

للتبديل بين مصادر التنبؤات هذه، انقر فوق **زر المظلة** في قائمة الطقس.

***ميزات قائمة الطقس:***

- **بيانات الطقس الحالية**: تعرض إحداثياتك جنبًا إلى جنب مع البيانات التالية:

  - درجة الحرارة.
  - هطول الأمطار.
  - الرياح.
  - ضغط الهواء.
  - تغطية السحب.

- **تعديل الوقت**: قم بتعديل التاريخ والوقت باستخدام **أداة الوقت** في قائمة الطقس لعرض الطقس للحظة محددة.

***طبقات الطقس على الخريطة:***

- استخدم **زر الطبقات** لتحديد وتمكين طبقات الطقس مثل:

  - درجة الحرارة.
  - الضغط.
  - الرياح.
  - تغطية السحب.
  - هطول الأمطار.

***عرض التنبؤات:***

- تتوفر تنبؤات الطقس لتوقعات **7 أيام**.
- يتم توفير تحديثات التنبؤات في **خطوات 3 ساعات** للحصول على رؤى مفصلة.

للوصول إلى هذه الميزات أو تخصيصها، استخدم القوائم على الجانب الأيسر أو الأيمن من الواجهة.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***توقعات 7 أيام***:

انقر على بيانات التنبؤ في القائمة لعرض **توقعات 7 أيام** لموقعك. التنبؤ متاح في:

- **تنسيق الرسم البياني**
- **تنسيق القائمة**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## قائمة تكوين الخريطة {#configure-map-menu}

تتيح لك قائمة تكوين الخريطة إدارة إعدادات العرض لبيانات الخريطة، مثل طبقات نقاط الاهتمام (POI)، والمفضلة، والمسارات، والتضاريس. يرجى تسجيل الدخول إلى حساب OsmAnd الخاص بك لاستخدام هذا القسم من القائمة.

لفتح هذه القائمة، انقر على الزر في **الزاوية العلوية اليسرى** أو قم بالوصول إليها من خلال **القائمة**.

- [تراكب نقاط الاهتمام...](#poi-overlay-section). يتيح لك اختيار وعرض فئات نقاط الاهتمام المطلوبة على الخريطة.
- [المفضلة](#favorites-section). تبديل عرض المفضلة على الخريطة.
- [المسارات](#tracks-section). يحتوي على مسارات GPX المرئية على الخريطة.
- [التضاريس](#terrain-section). تمكين أو تعطيل مخطط ألوان التضاريس على الخريطة.

![POIs menu](@site/static/img/web/configure_map_web.png)


### قسم تراكب نقاط الاهتمام (POI) {#poi-overlay-section}

لعرض نقاط الاهتمام على الخريطة:

*تكوين قائمة الخريطة ← تراكب نقاط الاهتمام...*. هنا، يمكنك اختيار الفئات لعرضها على الخريطة.

بدلاً من ذلك، يمكنك استخدام [**قسم البحث**](web-search.md) للعثور على المكان المطلوب.

![POIs menu](@site/static/img/web/poi_menu.png)


### قسم المفضلة {#favorites-section}

بنقرة واحدة، يمكنك تبديل المفضلة على الخريطة أو إيقاف تشغيلها. ومع ذلك، لن يتم عرض سوى المفضلة التي تم [**تمكين "إظهار على الخريطة"**](../web/web-userdata.mdx##favorites-on-the-web) لها.


### قسم المسارات {#tracks-section}

يحتوي هذا القسم على قائمة [**مسارات GPX المرئية على الخريطة**](../web/web-userdata.mdx#visible-on-the-map) و **المسارات المرئية مؤخرًا**.

- يمكنك تبديل المسارات مباشرة.
- تبديل المسارات من قائمة **المرئية مؤخرًا**.

يحتوي كل مسار على **قائمة سياق** (يمكن الوصول إليها عبر زر ⋮) مع الأوامر التالية:

- **إخفاء المسار**: يخفي المسار المرئي حاليًا من الخريطة.
- **جعل المسار مرئيًا**: يعرض مسارًا من قائمة المرئية مؤخرًا على الخريطة.
- **إعادة تسمية**: يتيح لك إعادة تسمية المسار لتسهيل التعرف عليه.
- **تكرار**: ينشئ نسخة من المسار.
- **تنزيل**: يحفظ المسار على جهازك المحلي.
- **حذف**: يزيل المسار بشكل دائم من القائمة.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### قسم التضاريس {#terrain-section}

قسم **التضاريس** هو ميزة مدفوعة <ProFeature/>. لاستخدام هذه الميزة، يجب عليك أولاً تسجيل الدخول إلى حساب OsmAnd Pro الخاص بك.

في هذا القسم، يمكنك:

- اختيار **مخطط ألوان** للتضاريس:
  - **تظليل التلال**
  - **المنحدر**
  - **الارتفاع**
- ضبط وضوح طبقة التضاريس المختارة من **0% إلى 100%**.

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


## مخططات URL {#url-schemes}

للاستخدام السهل لخدمة الويب OsmAnd (والتطبيق)، يمكنك الاستفادة من الروابط المباشرة. هذه هي عناوين URL خاصة تسمح لك بنقل بيانات الموقع وتضمين تفاصيل حول الدبابيس والمسارات والطقس والمزيد.

يمكن نسخ عناوين URL هذه ومشاركتها باستخدام أي وسيط يدعمه جهازك وهي متوافقة مع إصدارات Android و iOS من OsmAnd.

1. **URL مع دبوس على الخريطة:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL بدون دبوس على الخريطة:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL مع التنقل:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

اعتمادًا على المعلمات المحددة، يمكن أن تحتوي سلاسل URL على:

- **خط العرض**: قيمة خط العرض كرقم.
- **خط الطول**: قيمة خط الطول كرقم.
- **البداية-النهاية**: إحداثيات التنقل.
- **الملف الشخصي**: ملف تعريف التنقل (على سبيل المثال، سيارة، دراجة).
- **التكبير**: مستوى التكبير.

4. **الطقس**&nbsp; – &nbsp;`osmand.net/map/weather`

***على سبيل المثال***، يمكنك الوصول مباشرة إلى صفحة الطقس بإحداثيات محددة:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **الحساب**&nbsp; – &nbsp;`osmand.net/map/account`

6. **تكوين الخريطة**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **المسارات**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **المفضلة**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **الإعدادات**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **تخطيط مسار**&nbsp; - &nbsp;`osmand.net/map/plan`

11. رابط مباشر إلى [**صفحة الاستكشاف**](https://osmand.net/docs/user/web/web-search#explore) الحالية&nbsp; - &nbsp;`osmand.net/map/search`


> *آخر تحديث: يناير 2025*