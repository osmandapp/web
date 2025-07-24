---
source-hash: 7371416328fd739b31ec178647a97d46782b548fb574f29facc0559cdd279011
sidebar_position: 4
title:  البحث عن نقاط الاهتمام (POI)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>


## نظرة عامة {#overview}

توفر وظيفة [نقاط الاهتمام في OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) الدقة والرؤية والراحة في العثور على الأماكن والطرق والخدمات المثيرة للاهتمام بالقرب من موقعك الحالي أو منطقة محددة على الخريطة.

يسمح لك شريط البحث بإدخال كلمات رئيسية تتعلق بالأماكن التي تهتم بها. يقدم بحث نقاط الاهتمام أيضًا قائمة مريحة مرتبة حسب [الفئة](#poi-search-by-categories) لمساعدتك في العثور بسرعة على ما تبحث عنه، ويسمح لك [الفلتر](#save-new-custom-filters) بتحديد خصائص معينة لنقاط الاهتمام لعرض النتائج ذات الصلة فقط.

يعزز [البحث المخصص](#custom-poi-search) وظيفة البحث من خلال السماح باختيارات متعددة للفئات والفئات الفرعية. يمكنك حفظ الفلاتر التي تم إنشاؤها لاستخدامها في المستقبل، مما يسهل تحديد مواقع نقاط الاهتمام التي تلبي معايير أو تفضيلات محددة بسرعة. لمزيد من التفاصيل، ارجع إلى قسم حفظ الفلاتر المخصصة [هنا](#save-new-custom-filters).

يوفر OsmAnd عدة طرق للوصول إلى أداة البحث حيث يوجد قسم **بحث الفئات**.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#how-to-use) للأداة، حيث يمكنك العثور على علامة التبويب *الفئات*.
- انتقل إلى *القائمة الرئيسية ← بحث ← علامة تبويب الفئات*.
- عند التحضير لبدء مسار، انقر على [*الملاحة ← تعيين الوجهة ← حقل البحث ← علامة تبويب الفئات*](../navigation/setup/route-navigation.md#set-target-point).
- انتقل إلى *القائمة الرئيسية ← تكوين الخريطة ← تراكب نقاط الاهتمام ← بحث*](../map/point-layers-on-map.md#points-of-interest-pois).


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![البحث عن نقاط الاهتمام أندرويد](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*يمكنك العثور على جميع أنواع نقاط الاهتمام في OsmAnd هنا:* [رابط GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **البحث عن نقاط الاهتمام (POI):**
    - يسمح لك بالبحث:
       - عن فئات نقاط الاهتمام (POI) القريبة أو المحددة.
       - عن [مسارات OSM](../map/routes.md).
       - عن [الأماكن الشهيرة (ويكيبيديا)](../map/map-context-menu.md#details).

    - يمكن تصفية النتائج وفرزها حسب الفئة أو المسافة أو التقييم.

    - تظهر نتائج البحث موقع نقطة الاهتمام ومعلومات الاتصال بها وتقييماتها ومراجعاتها.

- **البحث عن نقاط الاهتمام حسب الفئة مباشرة على الخريطة**:
    - تحتاج إلى تحديد الفئات المطلوبة من [**القائمة**](../map/point-layers-on-map.md#points-of-interest-pois) في *تكوين الخريطة ← إظهار تراكب نقاط الاهتمام...* والبحث عن طريق الأيقونات في الموقع المتوقع.

    - *أندرويد*: يمكنك البدء في البحث عن نقاط الاهتمام في *القائمة ← بحث ← فئات*.

- **البحث عن العلامات التجارية:**
    - عند إدخال اسم مكان عمل أو علامة تجارية (مثل أودي، ستاربكس، أو ألدي)، يتم ترتيب قائمة نتائج البحث مع إعطاء الأولوية لاسم نقطة الاهتمام وفرزها حسب المسافة من الموقع المقابل.

    - يتم عرض اسم المنطقة بجانب كل نتيجة بحث لمساعدتك في تحديد الموقع الصحيح بين المواقع الأخرى على مسافة مماثلة منك.

    - هذا النوع من البحث مناسب للاستخدام إذا كان منفذ البيع بالتجزئة متخصصًا في بيع سلع أو خدمات علامة تجارية واحدة أو إذا كانت العلامة التجارية نفسها معروفة ومميزة أكثر من اسم أو فئة نقطة الاهتمام.

    - لإجراء بحث، يجب إضافة العلامة `brand` وأسماء العلامات التجارية إلى وصف نقطة الاهتمام.

    - مثال على متجر سيارات: *نوع نقطة الاهتمام* - وكيل سيارات، *الاسم* - Octo Automobile، [***اسم العلامة التجارية***](https://wiki.openstreetmap.org/wiki/Key:brand) - أودي، بي إم دبليو، فيات، جاغوار، لاند روفر.

    ![البحث عن نقاط الاهتمام أندرويد](@site/static/img/search/brand_search_andr.png)


:::note
لإنجاز بعض هذه المهام (تحديد العناوين، نقاط الاهتمام) ستحتاج إلى ملف خريطة المتجهات غير المتصلة بالإنترنت. في البداية، يعتمد البحث على البيانات الموجودة على الخريطة في المنطقة المرئية من شاشة الجهاز. إذا لم تجد شيئًا، يقترح OsmAnd زيادة نصف قطر البحث.
:::


## البحث عن نقاط الاهتمام حسب الفئات {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![البحث عن نقاط الاهتمام أندرويد](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

تسمح لك أداة **البحث حسب الفئات** بالعثور بسرعة على الكائنات والأماكن والمسارات المصنفة إلى فئات مختلفة. تحتوي كل فئة على مجموعة فريدة من الخصائص، وتحتوي هذه الأداة على فلاتر تسمح لك بتحسين نتائج البحث عن طريق تحديد قيم مختلفة للخصائص الإضافية.

كيف تعمل:

- *اختيار الفئة* - تختار الفئة التي تهتم بها، مثل المطاعم والفنادق والمتاجر ومسارات OSM وأماكن ويكيبيديا الشهيرة وغيرها، من قائمة الفئات المقترحة.
- *فلاتر الخصائص* - بعد اختيار فئة، يعرض التطبيق خصائص إضافية يمكن استخدامها لتحسين البحث. على سبيل المثال، بالنسبة لفئة المطاعم، يمكنك تحديد فلاتر مثل نوع المطبخ (إيطالي، صيني، إلخ)، ونطاق السعر، والتقييم، وتوفر موقف السيارات.
- *تطبيق الفلاتر* - تحدد القيم المطلوبة في الفلاتر، ثم يطبق التطبيق هذه الفلاتر على نتائج البحث لإظهار فقط تلك الخصائص التي تتطابق مع الخصائص المحددة.
- *عرض النتائج* - بعد تطبيق الفلاتر، يعرض OsmAnd قائمة بمعلومات موجزة تتطابق مع الفئة والخصائص المحددة.

الفوائد:

- *تخصيص المستخدم* - تسمح فلاتر الميزات بتخصيص عمليات البحث لتلبية احتياجاتهم وتفضيلاتهم المحددة.
- *نتائج محسنة* - تساعد الفلاتر على تحسين نتائج البحث، مما يجعلها أكثر صلة ودقة.
- *فئات متعددة* - تحتوي قاعدة بيانات OpenStreetMap على مجموعة واسعة من فئات نقاط الاهتمام، مما يسمح لك بالعثور على مواقع من أنواع وفئات مختلفة.

<!--
POI category search allows you to quickly find and select places of interest based on your needs. It is a handy tool for traveling, finding nearby services or places of interest, and planning routes based on selected POI categories.

OsmAnd starts to find names and categories of POI by entered words. First results will be categories, second resolts will be POI with additional info, full name, categorie name, direction and distance to POI, work time. Pressing to needed categorie opens POI list of this categorie.

Tapping to chosen POI in the list opens [Map Context menu](../map/map-context-menu.md#select-an