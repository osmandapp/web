---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
sidebar_position: 1
title:  Search All
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

**البحث** أداة مفيدة للعثور بسرعة على المواقع. يمكنك استخدام البحث للعثور على موقع بعنوان، إحداثيات، نقاط اهتمام (POI)، أو عمليات بحث سابقة. يسمح [البحث بالعنوان](#search-address) بإدخال العنوان الذي تريد الحصول على موقعه الدقيق. يعمل البحث [بالإحداثيات](#search-coordinates) مع الإحداثيات الجغرافية مثل خط العرض وخط الطول. مع [البحث عن POI](#search-poi) يمكنك البحث عن أماكن قريبة في فئات محددة، مثل المقاهي، الفنادق، أو محطات الوقود. يحفظ [تاريخ البحث](#search-history) عمليات البحث السابقة للوصول السريع إلى الأماكن الموجودة سابقًا. تجعل ميزة البحث من السهولة في تخطيط الرحلات، والتنقل في التضاريس المجهولة، والعثور على نقاط الاهتمام القريبة.


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة POI البحث أندرويد](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة POI البحث iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

تحتاج إلى اتباع إحدى الخطوات لبدء بحثك:

- اضغط على [زر البحث](../widgets/map-buttons.md#search) في شاشة تطبيق الخريطة وأدخل استعلامك.

- اذهب إلى القائمة الرئيسية *القائمة → البحث → أدخل استعلام البحث الخاص بك*.

- عند التحضير لبدء الطريق، اضغط على [*التنقل → تعيين الوجهة → حقل البحث*](../navigation/setup/route-navigation.md#set-target-point) *→ استعلام البحث*.  


معلومات مهمة:

- ***يُتَطَلَّبْ تحميل الخرائط المتجهة دون اتصال مسبقًا للبحث باستخدام OsmAnd***.

- في البداية، **يعتمد البحث على البيانات الموجودة على الخريطة في المنطقة المرئية لشاشة الجهاز**، ولكن إذا لم يتم العثور على شيء هناك، يقترح OsmAnd زيادة نصف قطر البحث.  

### الاستعلامات الأساسية {#basic-queries}

***قائمة الاستعلام*:**

- الإحداثيات بجميع الصيغ المتاحة.
- العنوان:
    - الشارع، رقم المنزل؛
    - المدينة، الشارع؛
    - تقاطعات الشوارع؛
    - المدينة؛
    - بيانات Tiger؛
    - الرمز البريدي، رقم المنزل؛
    - الرمز البريدي، الشارع، رقم المنزل.
- البحث عن POI بالاسم وبفئة مع فلاتر إضافية.
- البحث عن طرق OSM بالاسم وبفئة مع فلاتر إضافية.
- البحث عن أبرز القمم والبراكين.
- البحث بالمفضلات والنقاط الطريقية.
- البحث عن الأيقونات بأسماء فئات POI الفرعية.
- البحث بالمسارات.
- البحث بأماكن الأعمال وأسماء العلامات التجارية.
- البحث عبر الإنترنت (Nominatim).
- البحث عبر URL (Google وOsmAnd).
- تاريخ البحث.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### ترتيب نتائج البحث {#sorting-search-results}

يُرَتِّبْ OsmAnd نتائج البحث تلقائيًا حسب ثلاث معايير رئيسية:

1. **مطابقة الاستعلامات** — تُعْرَضْ النتائج التي تحتوي على تطابقات دقيقة أو جزئية للكلمات التي أدخلتها في مرتبة أعلى.

2. **نوع الكائن** - عند الترتيب بالاسم، تُعْطَىْ الأولوية للمدن والشوارع على POI عند عرض النتائج.

3. **المسافة** - عندما تكون لدى النتائج معايير تطابق مشابهة وأنواع كائنات، تُعْرَضْ النتائج الأقرب إلى موقع المستخدم الحالي أولاً.

***على سبيل المثال***، سيُظْهِرْ استعلام البحث *مكتب بريد* أقرب مكاتب البريد أولاً، حتى لو كانت هناك عناصر أخرى بأسماء مشابهة على مسافة أكبر.  

***القيود الحالية:***

- لا يوجد إعداد يدوي لتغيير ترتيب نتائج البحث.
- يتم إدارة عملية الترتيب **تلقائيًا** بواسطة OsmAnd، بناءً على المعايير المذكورة أعلاه.
- في الحالات التي تكون فيها نتائج البحث واسعة جدًا، يمكن لـ OsmAnd **تقييد النتائج المعروضة** إلى تلك ذات أعلى دقة تطابق الكلمات.


### البحث النصي الكامل {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن المفضل أندرويد](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن المفضل iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

يمكنك العثور على الموقع المطلوب على الخريطة من قائمة النقاط التي تظهر أثناء إدخال الاستعلام.

1. ابدأ بكتابة الاسم أو العنوان في شريط البحث.

2. أثناء الكتابة، تعرض القائمة النقاط الأقرب إلى الاستعلام، تقريبًا بهذا الترتيب:
    - فئات POI
    - المفضلات، POI، الطرق، والنقاط الطريقية
    - المسارات
    - العناوين
    - الخرائط للتحميل

3. إذا أدخلت [اسم علامة تجارية](../search/search-poi.md#how-to-use)، ستبدأ القائمة بنتائج بهذا الاسم، المرتبة حسب أقرب مسافة.

:::note قيود بيانات TIGER في عمليات البحث بالعنوان
لقد دمج OsmAnd بيانات [**TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) في خرائط الولايات المتحدة لتوفير معلومات عن عناوين الولايات المتحدة. مجموعة بيانات TIGER هي **بناءً على النطاق** ولا تحتوي على أرقام منازل دقيقة، لذا قد تكون بعض العناوين مفقودة أو غير دقيقة.
:::


### البحث على الخريطة {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن POI أندرويد](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![البحث عن POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

يسمح OsmAnd لك بالبحث عن النقاط المعروضة على الخريطة في شاشة جهازك. للقيام بذلك:

- استخدم [إحدى الطرق](#how-to-use) للوصول إلى أداة البحث.
- ابدأ بكتابة الاسم أو العنوان في مربع البحث.
- سيظهر مربع مع زر *عرض على الخريطة* أسفل حقل إدخال البحث.
- اضغط على هذا الزر للانتقال إلى الخريطة.
- يمكنك الاستمرار في كتابة استعلامك في أعلى الشاشة.


### البحث القريب {#search-nearby}

![البحث أندرويد](@site/static/img/search/search_all_near_location_andr.png)

يمكنك استخدام البحث في محيط موقع محدد. للقيام بذلك، حدد النقطة المطلوبة [من القائمة في قائمة البحث](#full-text-search) أو حددها مباشرة على الخريطة. في [قائمة السياق للخريطة](../map/map-context-menu.md#actions)، حدد *الإجراءات → البحث القريب*.


## البحث بالعنوان {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث أندرويد](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**البحث بالعنوان** يستخدم بيانات OpenStreetMap. يسمح هذا النوع من البحث بالعثور على الموقع والإشارة إلى عنوان محدد من قائمة جاهزة الترتيب. اقرأ المزيد في مقالة [البحث بالعنوان](./search-address.md).


## تاريخ البحث {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث التاريخي](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث التاريخي](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يمكنك استخدام **تاريخ البحث** للبحث مرة أخرى عن الأماكن، العناوين، أو الأماكن المزارة بشكل متكرر السابقة دون إدخال الاستعلام مرة أخرى. يمكن العثور على تفاصيل إضافية في مقالة [تاريخ البحث](./search-history.md).


## البحث عن POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن POI أندرويد](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**البحث عن POI** هي قائمة مرتبة حسب الفئة، والتي يمكنك من خلالها العثور بسهولة على الأماكن والخدمات بالقرب من موقعك الحالي أو منطقة محددة على الخريطة.

- يسمح [البحث المخصص عن POI](./search-poi.md#customize-poi-search) بدمج فئات POI المختلفة لتبسيط وتخصيص بحثك.  
على سبيل المثال، إذا كنت بحاجة إلى العثور على عدة أنواع من الخدمات في منطقة معينة أو في قسم معين من طريق.

- يوفر OsmAnd [بحثًا عبر الإنترنت](./search-poi.md#online-search) يعمل في الوقت الفعلي، مما يمنحك وصولاً سريعًا إلى نتائج البحث.  
من الرائع استخدامه عندما تكون الخرائط غير متوفرة في المنطقة، لكن يتطلب اتصال إنترنت مستقر ومستمر.

- اقرأ مقالة [البحث عن POI](./search-poi.md) للحصول على مزيد من المعلومات.


## البحث بالإحداثيات {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث بالإحداثيات أندرويد](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث بالإحداثيات iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

يوفر البحث بالإحداثيات موقعًا دقيقًا. يمكنك إدخال إحداثيات دقيقة تم الحصول عليها، على سبيل المثال، من مصادر أخرى مثل خريطة، جهاز GPS، أو خدمات عبر الإنترنت، وهو مفيد بشكل خاص عندما يتعلق الأمر بأماكن لا تمتلك عنوانًا دقيقًا. للحصول على مزيد من المعلومات، انظر مقالة [البحث بالإحداثيات](./search-coordinates.md).


## المقالات ذات الصلة {#related-articles}

- [البحث بالعنوان](./search-address.md)
- [تاريخ البحث](./search-history.md)
- [البحث عن POI](./search-poi.md)
- [البحث بالإحداثيات](./search-coordinates.md)
