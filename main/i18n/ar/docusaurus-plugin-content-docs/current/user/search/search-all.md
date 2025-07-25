---
source-hash: b39da87cb283fc3373cd7fc8ea9c535845d2da42231bb2b94d76bc577ea35ed4
sidebar_position: 1
title:  البحث الشامل
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



<InfoIncompleteArticle/>


## نظرة عامة {#overview}

**البحث** هو أداة مفيدة للعثور على المواقع بسرعة. يمكنك استخدام البحث للعثور على موقع حسب العنوان أو الإحداثيات أو نقاط الاهتمام (POI) أو عمليات البحث السابقة. يتيح لك البحث [العنوان](#search-address) إدخال العنوان الذي تريد الحصول على موقع دقيق له. يعمل بحث [الإحداثيات](#search-coordinates) مع الإحداثيات الجغرافية مثل خطوط العرض والطول. باستخدام بحث [نقاط الاهتمام (POI)](#search-poi)، يمكنك البحث عن الأماكن القريبة في فئات محددة، مثل المقاهي أو الفنادق أو محطات الوقود. يحفظ [سجل البحث](#search-history) عمليات البحث السابقة للوصول السريع إلى الأماكن التي تم العثور عليها مسبقًا. تسهل ميزة البحث تخطيط الرحلات والتنقل في التضاريس غير المعروفة والعثور على نقاط الاهتمام القريبة.


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة نقاط الاهتمام للبحث أندرويد](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة نقاط الاهتمام للبحث iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

تحتاج إلى اتباع إحدى الخطوات لبدء البحث:

- اضغط على [زر البحث](../widgets/map-buttons.md#search) على شاشة تطبيق الخريطة وأدخل استعلامك.

- انتقل إلى *القائمة الرئيسية ← بحث ← أدخل استعلام البحث*.

- عند التحضير لبدء مسار، اضغط على [*التنقل ← تعيين الوجهة ← حقل البحث*](../navigation/setup/route-navigation.md#set-target-point) *← استعلام البحث*.  


معلومات هامة:

- ***مطلوب خرائط متجهية غير متصلة بالإنترنت للبحث باستخدام OsmAnd***.

- في البداية، **يعتمد البحث على البيانات الموجودة على الخريطة في المنطقة المرئية من شاشة الجهاز**، ولكن إذا لم يتم العثور على أي شيء هناك، يقدم OsmAnd زيادة نطاق البحث.  

### الاستعلامات الأساسية {#basic-queries}

***قائمة الاستعلامات*:**

- الإحداثيات بجميع التنسيقات المتاحة.
- العنوان:
    - الشارع، رقم المنزل؛
    - المدينة، الشارع؛
    - تقاطعات الشوارع؛
    - المدينة؛
    - بيانات تايجر؛
    - الرمز البريدي، رقم المنزل؛
    - الرمز البريدي، الشارع، رقم المنزل.
- البحث عن نقاط الاهتمام بالاسم والفئة مع مرشحات إضافية.
- البحث عن مسارات OSM بالاسم والفئة مع مرشحات إضافية.
- البحث عن أبرز القمم والبراكين.
- البحث عن المفضلة ونقاط الطريق.
- البحث عن الأيقونات حسب أسماء الفئات الفرعية لنقاط الاهتمام.
- البحث عن المسارات.
- البحث عن الأماكن التجارية وأسماء العلامات التجارية.
- البحث عبر الإنترنت (Nominatim).
- البحث عن طريق URL (جوجل و OsmAnd).
- سجل البحث.

<!--
***التنسيقات المدعومة*:**  

***يمكن استخدام العلامات*** كاستعلام بحث. تتكون من ***مفتاح وقيمة***، على سبيل المثال:
*addr:street=StreetName*.  
لتجنب الارتباك، يتم أحيانًا إحاطة المفتاح أو القيمة بعلامات اقتباس: **key="value" أو "key"="value"**. علامات الاقتباس وعلامة التساوي ليست جزءًا من محتوى العلامة.
-->

### فرز نتائج البحث {#sorting-search-results}

يقوم OsmAnd تلقائيًا بفرز نتائج البحث وفقًا لثلاثة معايير رئيسية:

1. **الاستعلامات المطابقة** — يتم عرض النتائج التي تحتوي على تطابقات دقيقة أو جزئية للكلمات التي أدخلتها في الأعلى.

2. **نوع الكائن** - عند الفرز حسب الاسم، يتم إعطاء الأولوية للمدن والشوارع على نقاط الاهتمام عند عرض النتائج.

3. **المسافة** - عندما تكون للنتائج معايير مطابقة وأنواع كائنات متشابهة، يتم عرض النتائج الأقرب إلى موقع المستخدم الحالي أولاً.

***على سبيل المثال***، سيُظهر استعلام البحث *مكتب بريد* أقرب مكاتب البريد أولاً، حتى لو كانت هناك عناصر أخرى بأسماء مشابهة على مسافة أكبر.  

***القيود الحالية:***

- لا يوجد إعداد يدوي لتغيير ترتيب فرز نتائج البحث.
- تتم إدارة عملية الفرز **تلقائيًا** بواسطة OsmAnd، بناءً على المعايير المذكورة أعلاه.
- في الحالات التي تكون فيها نتائج البحث واسعة جدًا، يمكن لـ OsmAnd **تقييد النتائج المعروضة** لتلك التي تتمتع بأعلى دقة مطابقة للكلمات.


### البحث النصي الكامل {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث المفضلة أندرويد](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث المفضلة iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

يمكنك العثور على الموقع المطلوب على الخريطة من قائمة النقاط التي تظهر عند إدخال استعلام.

1. ابدأ بكتابة الاسم أو العنوان في شريط البحث.

2. أثناء الكتابة، تعرض القائمة النقاط الأقرب إلى الاستعلام، بهذا الترتيب تقريبًا:
    - فئات نقاط الاهتمام
    - المفضلة، نقاط الاهتمام، المسارات، ونقاط الطريق
    - المسارات
    - العناوين
    - الخرائط للتحميل

3. إذا أدخلت [اسم علامة تجارية](../search/search-poi.md#how-to-use)، فستبدأ القائمة بالنتائج التي تحمل هذا الاسم، مرتبة حسب أقرب مسافة.

:::note قيود بيانات TIGER في عمليات البحث عن العناوين
لقد دمجت OsmAnd [**بيانات TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) في خرائط الولايات المتحدة لتوفير معلومات حول عناوين الولايات المتحدة. مجموعة بيانات TIGER **تعتمد على النطاق** ولا تحتوي على أرقام منازل دقيقة، لذلك قد تكون بعض العناوين مفقودة أو غير دقيقة.
:::


### البحث على الخريطة {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث نقاط الاهتمام أندرويد](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![بحث نقاط الاهتمام iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

يتيح لك OsmAnd البحث عن النقاط المعروضة على الخريطة على شاشة جهازك. للقيام بذلك:

- استخدم [إحدى الطرق](#how-to-use) للوصول إلى أداة البحث.
- ابدأ بكتابة الاسم أو العنوان في مربع البحث.
- سيظهر مربع به زر *إظهار على الخريطة* أسفل حقل إدخال البحث.
- اضغط على هذا الزر للانتقال إلى الخريطة.
- يمكنك متابعة كتابة استعلامك في الجزء العلوي من الشاشة.


### البحث بالقرب {#search-nearby}

![بحث أندرويد](@site/static/img/search/search_all_near_location_andr.png)

يمكنك استخدام البحث في محيط موقع معين. للقيام بذلك، حدد النقطة المطلوبة [من القائمة في قائمة البحث](#full-text-search) أو حددها مباشرة على الخريطة. في [قائمة سياق الخريطة](../map/map-context-menu.md#actions)، حدد *الإجراءات ← البحث بالقرب*.


## البحث عن عنوان {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث أندرويد](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

يستخدم **البحث عن عنوان** بيانات OpenStreetMap. يتيح لك هذا النوع من البحث العثور على الموقع والاتجاهات إلى عنوان محدد من قائمة مرتبة جاهزة. اقرأ المزيد في مقال [البحث عن عنوان](./search-address.md).


## سجل البحث {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![سجل البحث](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![سجل البحث](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام **سجل البحث** للبحث مرة أخرى عن الأماكن أو العناوين التي تم العثور عليها مسبقًا، أو الأماكن التي تمت زيارتها بشكل متكرر دون إدخال الاستعلام مرة أخرى. يمكن العثور على مزيد من التفاصيل في مقال [سجل البحث](./search-history.md).


## البحث عن نقاط الاهتمام (POI) {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث نقاط الاهتمام أندرويد](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث نقاط الاهتمام iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**البحث عن نقاط الاهتمام (POI)** هو قائمة، مرتبة حسب الفئة، يمكنك من خلالها بسهولة العثور على الأماكن والخدمات بالقرب من موقعك الحالي أو منطقة محددة على الخريطة.

- يتيح لك [البحث المخصص عن نقاط الاهتمام](./search-poi.md#custom-poi-search) دمج فئات مختلفة من نقاط الاهتمام لتبسيط البحث وتخصيصه.  
على سبيل المثال، إذا كنت بحاجة إلى العثور على عدة أنواع من الخدمات في منطقة معينة أو في جزء معين من المسار.

- يوفر OsmAnd [بحثًا عبر الإنترنت](./search-poi.md#online-search) يعمل في الوقت الفعلي، مما يتيح لك الوصول السريع إلى نتائج البحث.  
من الملائم استخدامه عندما تكون خرائط المنطقة غير متاحة، ولكن يلزم اتصال إنترنت ثابت ومستقر.

- اقرأ مقال [البحث عن نقاط الاهتمام (POI)](./search-poi.md) لمزيد من المعلومات.


## البحث عن الإحداثيات {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![بحث الإحداثيات أندرويد](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![بحث الإحداثيات iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

يوفر البحث عن الإحداثيات موقعًا دقيقًا. يمكنك إدخال إحداثيات دقيقة تم الحصول عليها، على سبيل المثال، من مصادر أخرى مثل الخريطة أو جهاز GPS أو الخدمات عبر الإنترنت، وهو أمر مفيد بشكل خاص عندما يتعلق الأمر بأماكن لا تحتوي على عنوان دقيق. لمزيد من المعلومات، راجع مقال [البحث عن الإحداثيات](./search-coordinates.md).


## مقالات ذات صلة {#related-articles}

- [البحث عن عنوان](./search-address.md)
- [سجل البحث](./search-history.md)
- [البحث عن نقاط الاهتمام (POI)](./search-poi.md)
- [البحث عن الإحداثيات](./search-coordinates.md)

> *آخر تحديث: أبريل 2025*