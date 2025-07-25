---
source-hash: 451b8efe0bb4fc8a733a523dde0cd088f5c21c5cb00a83e08ca8410c09e04755
sidebar_position: 4
title:  البحث عن نقاط الاهتمام
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

يتيح لك شريط البحث إدخال كلمات رئيسية متعلقة بالأماكن التي تهتم بها. يقدم بحث نقاط الاهتمام أيضًا قائمة مريحة مرتبة حسب [الفئة](#poi-search-by-categories) لمساعدتك في العثور بسرعة على ما تبحث عنه، ويسمح لك [الفلتر](#save-new-custom-filters) بتحديد خصائص معينة لنقاط الاهتمام لعرض النتائج ذات الصلة فقط.

يعزز [البحث المخصص](#custom-poi-search) وظيفة البحث من خلال السماح باختيارات متعددة للفئات والفئات الفرعية. يمكنك حفظ الفلاتر التي تم إنشاؤها للاستخدام المستقبلي، مما يسهل تحديد مواقع نقاط الاهتمام التي تلبي معايير أو تفضيلات محددة بسرعة. لمزيد من التفاصيل، ارجع إلى قسم حفظ الفلاتر المخصصة [هنا](#save-new-custom-filters).

يوفر OsmAnd عدة طرق للوصول إلى أداة البحث حيث يوجد قسم **بحث الفئات**.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#how-to-use) للأداة، حيث يمكنك العثور على علامة التبويب *الفئات*.
- انتقل إلى *القائمة الرئيسية ← بحث ← علامة تبويب الفئات*.
- عند التحضير لبدء مسار، انقر على [*الملاحة ← تعيين الوجهة ← حقل البحث ← علامة تبويب الفئات*](../navigation/setup/route-navigation.md#set-target-point).
- انتقل إلى *القائمة الرئيسية ← تهيئة الخريطة ← تراكب نقاط الاهتمام ← بحث*.

## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن نقاط الاهتمام Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*يمكنك العثور على جميع أنواع نقاط الاهتمام في OsmAnd هنا:* [رابط GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **البحث عن نقاط الاهتمام (POI):**
    - يسمح لك بالبحث:
       - عن نقاط الاهتمام القريبة أو فئات معينة منها.
       - عن [مسارات OSM](../map/routes.md).
       - عن [الأماكن الشهيرة (ويكيبيديا)](../map/map-context-menu.md#details).

    - يمكن تصفية النتائج وفرزها حسب الفئة أو المسافة أو التقييم.

    - تظهر نتائج البحث موقع نقطة الاهتمام ومعلومات الاتصال بها وتقييماتها ومراجعاتها.

- **البحث عن نقاط الاهتمام حسب الفئة مباشرة على الخريطة**:
    - تحتاج إلى تحديد الفئات المطلوبة من [**القائمة**](../map/point-layers-on-map.md#points-of-interest-pois) في *تهيئة الخريطة ← إظهار تراكب نقاط الاهتمام...* والبحث عن طريق الأيقونات في الموقع المتوقع.

    - *Android*: يمكنك بدء البحث عن نقاط الاهتمام في *القائمة ← بحث ← فئات*.

- **البحث عن العلامات التجارية:**
    - عند إدخال اسم مكان عمل أو علامة تجارية (مثل Audi أو Starbucks أو Aldi)، يتم ترتيب قائمة نتائج البحث حسب أولوية اسم نقطة الاهتمام وفرزها حسب المسافة من الموقع المقابل.

    - يتم عرض اسم المنطقة بجانب كل نتيجة بحث لمساعدتك في تحديد الموقع الصحيح بين المواقع الأخرى على مسافة مماثلة منك.

    - هذا النوع من البحث مناسب للاستخدام إذا كان منفذ البيع بالتجزئة متخصصًا في بيع سلع أو خدمات علامة تجارية واحدة أو إذا كانت العلامة التجارية نفسها أكثر شهرة ومعروفة من اسم أو فئة نقطة الاهتمام.

    - لإجراء بحث، يجب إضافة العلامة `brand` وأسماء العلامات التجارية إلى وصف نقطة الاهتمام.

    - مثال على متجر سيارات: *نوع نقطة الاهتمام* - وكيل سيارات، *الاسم* - Octo Automobile، [***اسم العلامة التجارية***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi، BMW، Fiat، Jaguar، Land Rover.

    ![البحث عن نقاط الاهتمام Android](@site/static/img/search/brand_search_andr.png)


:::note
لإنجاز بعض هذه المهام (تحديد العناوين، نقاط الاهتمام) ستحتاج إلى ملف خريطة المتجهات غير المتصلة بالإنترنت. في البداية، يعتمد البحث على البيانات الموجودة على الخريطة في المنطقة المرئية من شاشة الجهاز. إذا لم تجد شيئًا، يقترح OsmAnd زيادة نصف قطر البحث.
:::

## البحث عن نقاط الاهتمام حسب الفئات {#poi-search-by-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

تتيح لك أداة **البحث حسب الفئات** العثور بسرعة على الكائنات والأماكن والطرق المصنفة إلى فئات مختلفة. تحتوي كل فئة على مجموعة فريدة من الخصائص، وتحتوي هذه الأداة على فلاتر تتيح لك تحسين نتائج البحث عن طريق تحديد قيم مختلفة للخصائص الإضافية.

كيف تعمل:

- *اختيار الفئة* - تختار الفئة التي تهتم بها، مثل المطاعم والفنادق والمتاجر ومسارات OSM وأماكن ويكيبيديا الشهيرة وغيرها، من قائمة الفئات المقترحة.
- *فلاتر الخصائص* - بعد تحديد فئة، يعرض التطبيق خصائص إضافية يمكن استخدامها لتحسين البحث. على سبيل المثال، بالنسبة لفئة المطاعم، يمكنك تحديد فلاتر مثل نوع المطبخ (الإيطالي، الصيني، إلخ)، ونطاق الأسعار، والتقييم، وتوفر موقف السيارات.
- *تطبيق الفلاتر* - تحدد القيم المطلوبة في الفلاتر، ثم يطبق التطبيق هذه الفلاتر على نتائج البحث لإظهار الخصائص التي تتطابق مع الخصائص المحددة فقط.
- *عرض النتائج* - بعد تطبيق الفلاتر، يعرض OsmAnd قائمة بمعلومات موجزة تتطابق مع الفئة والخصائص المحددة.

الفوائد:

- *تخصيص المستخدم* - تتيح فلاتر الميزات للمستخدمين تخصيص عمليات البحث لتلبية احتياجاتهم وتفضيلاتهم الخاصة.
- *نتائج محسّنة* - تساعد الفلاتر في تحسين نتائج البحث، مما يجعلها أكثر صلة ودقة.
- *فئات متعددة* - تحتوي قاعدة بيانات OpenStreetMap على مجموعة واسعة من فئات نقاط الاهتمام، مما يتيح لك العثور على مواقع من أنواع وفئات مختلفة.

<!--
يتيح لك البحث عن فئات نقاط الاهتمام العثور بسرعة على الأماكن المهمة وتحديدها بناءً على احتياجاتك. إنها أداة مفيدة للسفر والعثور على الخدمات أو الأماكن المهمة القريبة وتخطيط المسارات بناءً على فئات نقاط الاهتمام المحددة.

يبدأ OsmAnd في البحث عن أسماء وفئات نقاط الاهتمام بالكلمات المدخلة. ستكون النتائج الأولى هي الفئات، وستكون النتائج الثانية هي نقاط الاهتمام مع معلومات إضافية، والاسم الكامل، واسم الفئة، والاتجاه والمسافة إلى نقطة الاهتمام، ووقت العمل. يؤدي الضغط على الفئة المطلوبة إلى فتح قائمة نقاط الاهتمام لهذه الفئة.

يؤدي النقر على نقطة الاهتمام المختارة في القائمة إلى فتح [قائمة سياق الخريطة](../map/map-context-menu.md#select-an-object-single-tap) لنقطة الاهتمام.
-->

### أنواع الفلاتر {#types-of-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

باستخدام وظيفة **الفلتر**، يمكنك تحديد الخصائص الضرورية ونتيجة لذلك الحصول على قائمة تحتوي على الكائنات ذات الصلة فقط. لاستخدام الفلتر:

- حدد الفئة التي تهتم بها من قائمة الفئات.
- على الشاشة التي تفتح، انقر على الأيقونة التي تعرض الفلتر. تقع أسفل حقل الإدخال، بجوار *إظهار على الخريطة*.
- في الفلتر، حدد نوع الخصائص.

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_filter_icon_andr.png)

يمكن أن يتكون الفلتر من عدد كبير من العناصر، ويعتمد وجودها على الفئة المحددة. تحتوي كل فئة على عدد من الفلاتر الخاصة بها، منظمة في مجلدات حسب النوع. يوجد إجمالي *22 فئة افتراضية*. بعضها مدرج هنا:

1. **<Translate android="true" ids="poi_filter_accomodation"/>**. يشمل [الإقامة](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) المرافق التي توفر سكنًا مؤقتًا مثل الفنادق والموتيلات والنزل وبيوت الضيافة ومواقع التخييم. توفر هذه الأماكن وسائل الراحة والخدمات لإقامة مريحة أثناء السفر.
        يتضمن *9* أنواع من الفلاتر: **ثلاجة** (لها *قيمتان*), **تدفئة** (لها *7 قيم*), **نوع الوصول إلى الإنترنت** (له *3 قيم*), **مرتبة** (لها *قيمتان*), **نوع الدفع** (أكثر من *10 قيم*), **دش** (له *قيمة واحدة*), **تدخين** (له *6 قيم*), **تقييم النجوم** (له *10 قيم*), **إمكانية الوصول للكراسي المتحركة** (لها *4 قيم*), مفتوح الآن / مفتوح 24/7.

2. **مقهى ومطعم**. يمثل [المقهى](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) و[المطاعم](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) أماكن لتقديم الطعام.
        يتضمن *16* نوعًا من الفلاتر: **طاولة تغيير حفاضات** (لها *3 قيم*), **قهوة** (لها *قيمتان*), **مطبخ** (أكثر من *10 قيم*), **توصيل** (له *قيمة واحدة*), **نظام غذائي** (له *8 قيم*), **طبق** (أكثر من *10 قيم*), **إعادة تعبئة مياه الشرب** (لها *قيمة واحدة*), **خدمة السيارات** (لها *قيمة واحدة*), **نوع الوصول إلى الإنترنت** (له *3 قيم*), **مصنع جعة صغير** (له *قيمة واحدة*), **منتجات عضوية** (لها *قيمتان*), **مقاعد خارجية** (لها *قيمة واحدة*), **نوع الدفع** (أكثر من *10 قيم*), **تدخين** (له *6 قيم*), **وجبات جاهزة** (لها *قيمة واحدة*), **إمكانية الوصول للكراسي المتحركة** (لها *4 قيم*), مفتوح الآن / مفتوح 24/7.

3. **محطة شحن**. [محطة الشحن](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) هي مرفق بنية تحتية حيث يمكن لأصحاب المركبات الكهربائية إعادة شحن سياراتهم أو دراجاتهم النارية أو غيرها من المركبات الكهربائية. توفر هذه النقاط شواحن ووصلات مناسبة لتزويد بطاريات المركبات بالطاقة.
        يتضمن *35* نوعًا من الفلاتر: **وصول الدراجات الهوائية** (له *قيمة واحدة*), **وصول الحافلات** (له *قيمة واحدة*), **وصول المركبات الثقيلة** (له *5 قيم*), **وصول السيارات** (له *قيمة واحدة*), **وصول السكوتر** (له *قيمة واحدة*), **مصادقة بالتطبيق** (لها *قيمة واحدة*), **مصادقة ببطاقة الشريحة** (لها *قيمة واحدة*), **مصادقة بدون تلامس** (لها *قيمة واحدة*), **مصادقة بالمفتاح** (لها *قيمة واحدة*), **مصادقة مطلوبة** (لها *قيمة واحدة*), **مصادقة بمكالمة هاتفية** (لها *قيمة واحدة*), **مصادقة برسالة قصيرة** (لها *قيمة واحدة*), **رسوم** (لها *قيمتان*), **نوع الوصول إلى الإنترنت** (له *3 قيم*), **نوع الوصول إلى الإنترنت** (له *3 قيم*), **إمكانية الوصول للكراسي المتحركة** (لها *4 قيم*), مفتوح الآن / مفتوح 24/7، وغيرها.

4. **متجر صغير وسوبر ماركت**. يمثل [المتجر الصغير](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) و[السوبر ماركت](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) مرافق بيع بالتجزئة.
        يتضمن *13* نوعًا من الفلاتر: **شراء بالجملة** (لها *قيمتان*), **سحب نقدي** (له *5 قيم*), **طاولة تغيير حفاضات** (لها *3 قيم*), **قهوة** (لها *قيمتان*), **توصيل** (له *قيمة واحدة*), **نظام غذائي** (له *8 قيم*), **آيس كريم** (له *قيمة واحدة*), **منتجات عضوية** (لها *قيمتان*), **نوع الدفع** (أكثر من *10 قيم*), **فلتر مستعمل** (لها *قيمتان*), **الدفع الذاتي** (لها *قيمتان*), **إمكانية الوصول للكراسي المتحركة** (لها *4 قيم*), مفتوح الآن / مفتوح 24/7.

5. **<Translate android="true" ids="poi_filter_emergency"/>**. يشمل [الطوارئ](https://wiki.openstreetmap.org/wiki/Key:emergency) المرافق والمواقع المرتبطة بخدمات الطوارئ مثل المستشفيات ومراكز الشرطة ومحطات الإطفاء ومراكز الإسعافات الأولية.
        لا يحتوي على أي فلاتر.

6. **محطة وقود**. [محطة وقود](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel)، تُعرف أيضًا بمحطة تعبئة الوقود، أو محطة بنزين، أو محطة غاز، أو كراج بنزين. وهي مرفق بيع بالتجزئة حيث يمكن إعادة تزويد المركبات بالوقود.
        يتضمن *13* نوعًا من الفلاتر: **غسيل سيارات** (لها *قيمتان*), **سحب نقدي** (له *5 قيم*), **هواء مضغوط** (له *قيمة واحدة*), **نوع الوقود (طيران)** (له أكثر من *20 قيمة*), **بطاقات الوقود** (لها *5 قيم*), **نوع الدفع** (له أكثر من *20 قيمة*), **الدفع الذاتي** (له *قيمتان*), **وصول عربات الثلج** (له *3 قيم*), **غرفة استراحة** (أكثر من *قيمة واحدة*), **مكنسة كهربائية** (لها *قيمة واحدة*), **موزع وقود أوتوماتيكي** (له *قيمة واحدة*), **إمكانية الوصول للكراسي المتحركة** (لها *4 قيم*), مفتوح الآن / مفتوح 24/7.

7. **المالية**. [المالية](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) تستخدم لمكاتب الشركات في القطاع المالي.
        يتضمن *5* أنواع من الفلاتر.

8. **طعام**. يشمل [الطعام](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) جميع الأماكن التي تقدم الطعام والمشروبات.
        يتضمن *24* نوعًا من الفلاتر.

9. **الرعاية الصحية**. [الرعاية الصحية](https://wiki.openstreetmap.org/wiki/Healthcare) تشمل الخدمات التي يقدمها مختلف المهنيين في أنواع مختلفة من المرافق.
        يتضمن *13* نوعًا من الفلاتر.

10. **الترفيه**. يشمل [الترفيه](https://wiki.openstreetmap.org/wiki/Category:Leisure) أنواعًا مختلفة من الأماكن والمرافق للترفيه.
        يتضمن *15* نوعًا من الفلاتر.

11. **بحري**. يشمل نقاط الاهتمام المتعلقة بالأنواع البحرية.
        لا يحتوي على أي فلاتر.

12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. يشمل نقاط الاهتمام القريبة منك.
        يتضمن *216* نوعًا من الفلاتر.

13. **<Translate android="true" ids="poi_filter_parking"/>**. يشمل [مواقف السيارات](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) المرافق التي يستخدمها الجمهور أو العملاء أو المستخدمون المصرح لهم الآخرون لركن المركبات مثل السيارات والشاحنات، والمعروفة عادة باسم موقف السيارات (الإنجليزية البريطانية) أو موقف السيارات (الإنجليزية الأمريكية).
        يتضمن *34* نوعًا من الفلاتر.

14. **النقل الشخصي**. جميع [أنواع المركبات](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) قد تكون بحوزتك.
        يتضمن *38* نوعًا من الفلاتر.

15. **الأماكن الشهيرة (ويكيبيديا)**. للبحث في هذه الفئة، تحتاج إلى تنزيل [خريطة ويكيبيديا](../plugins/wikipedia.md#overview) للمنطقة التي تهتم بها.
        لا يحتوي على أي فلاتر.

16. **وصول خاص**.
        يتضمن *6* أنواع من الفلاتر.

17. **<Translate android="true" ids="poi_filter_public_transport"/>**. إنه نظام نقل مصمم لنقل الأشخاص لأغراض عامة، ومتاح لجميع السكان والزوار في مدينة أو منطقة.
        يتضمن *9* أنواع من الفلاتر.

18. **المسارات**. يشمل [مسارات OSM](../map/routes.md) لأنواع مختلفة من الأنشطة.
        يتضمن *14* نوعًا من الفلاتر: **نقطة تفتيش**, **عقدة شبكة ركوب الدراجات**, **عقدة شبكة المشي لمسافات طويلة**, **شبكة المسارات (ركوب الدراجات)**, **شبكة المسارات (المشي لمسافات طويلة)**, **فئة نقطة المسار**, **الرياضات الجوية**, **ركوب الدراجات**, **القيادة**, **المشي**, **ركوب الدراجات النارية**, **مسارات أخرى**, **الرياضات المائية**, **الرياضات الشتوية**.

19. **مشاهدة المعالم السياحية**. إنه نشاط يزور فيه الناس أماكن أو مواقع مثيرة للاهتمام للتعرف عليها والاستمتاع بجمالها أو تاريخها أو أهميتها.
        يتضمن *8* أنواع من الفلاتر.

20. **الرياضة**. يشمل مناطق الأنشطة الرياضية.
        يتضمن *11* نوعًا من الفلاتر.

21. **المتجر**. يشير [المتجر](https://wiki.openstreetmap.org/wiki/Key:shop) إلى مجموعة متنوعة من المؤسسات والشركات التي تقدم سلعًا أو خدمات مختلفة للبيع، مثل متاجر البقالة ومتاجر الملابس ومتاجر الإلكترونيات وغيرها.
        يتضمن *36* نوعًا من الفلاتر.

22. **السياحة**. تشمل [السياحة](https://wiki.openstreetmap.org/wiki/Key:tourism) الأماكن والأشياء ذات الأهمية الخاصة للسياح بما في ذلك الأماكن التي يمكن رؤيتها، وأماكن الإقامة، والأشياء والأماكن التي توفر المعلومات والدعم للسياح.
        يتضمن *32* نوعًا من الفلاتر.

23. **الماء**. مصادر [مياه الشرب](https://wiki.openstreetmap.org/wiki/Key:drinking_water) التي أنشأها أو رتبها الإنسان.
        لا يحتوي على أي فلاتر.


### إعادة ترتيب الفئات {#rearrange-categories}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![البحث عن نقاط الاهتمام iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

تتيح لك ميزة إعادة ترتيب الفئات سرد الفئات التي تحتاجها فقط وترتيبها بالترتيب الذي يناسبك أكثر.

الوصف وكيفية الاستخدام:

- في البداية، *يتم فرز القائمة أبجديًا*. تتم إضافة الفئات التي تم إنشاؤها أيضًا بترتيب أبجدي.
- يتم إجراء التغييرات في قائمة الفئات لكل ملف تعريف على حدة.
- انقل الفئات عن طريق سحبها وإفلاتها في الموضع الصحيح في القائمة.
- *لإخفاء* الفئات غير الضرورية، انقر على أيقونة **الناقص**.
- **متاح**. يمكن إعادة الفئات *المخفية* سابقًا إلى القائمة المعروضة بالنقر على أيقونة **الزائد**.
- استخدم زر **إعادة التعيين** إلى الافتراضي لإعادة القائمة إلى حالتها المحددة مسبقًا.
- يمكن حذف الفئات التي تم إنشاؤها باستخدام [البحث المخصص](#custom-poi-search) أو [الفلاتر](#save-new-custom-filters) باستخدام أيقونة **الحذف**.

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_rearrange_del_andr.png)

### البحث عبر الإنترنت {#online-search}

<InfoAndroidOnly />

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_online_2_andr.png)

يتيح **البحث عبر الإنترنت** العثور على المواقع والعناوين ونقاط الاهتمام في الوقت الفعلي. يستخدم OsmAnd [Nominatim](https://nominatim.openstreetmap.org/ui/search.html)، وهو محدد جغرافي عبر الإنترنت تم تطويره بواسطة OpenStreetMap يقوم بتحويل استعلامات المستخدمين النصية إلى إحداثيات جغرافية والعكس ([*مثال*](#example-of-online-search-query)).

يتضمن البحث عبر الإنترنت الميزات التالية:

1. **البحث حسب الموقع** - يمكنك إدخال اسم مدينة أو شارع أو حي أو أي موقع آخر وسيقدم OsmAnd نتائج مطابقة للاستعلام.
2. **تحديد الموقع الجغرافي** - يحول البحث عبر الإنترنت استعلاماتك النصية إلى إحداثيات جغرافية، مما يتيح تحديد الموقع بدقة.
3. **تحديد الموقع الجغرافي العكسي** - يمكنك إدخال إحداثيات جغرافية وسيقوم البحث بإرجاع الموقع المقابل كاسم مدينة أو اسم شارع أو مكان على الخريطة.
4. **البحث عن نقاط الاهتمام** - يتيح لك البحث عن نقاط مختلفة بالاسم أو الفئة.

استخدام البحث عبر الإنترنت:

- يضمن البحث عبر الإنترنت أن البيانات محدثة وأن التحديثات متاحة، حيث يتم تحديث الخدمة باستمرار وتستخدم مصادر بيانات مفتوحة.
- يوفر تغطية واسعة للأماكن والكائنات، مما يتيح لك العثور على أماكن مهمة في مناطق مختلفة من العالم.
- عمليات البحث عبر الإنترنت تتم في الوقت الفعلي، مما يوفر وصولاً سريعًا إلى نتائج البحث.
- مفيد في المدن وعلى الطرق السريعة مع تغطية إنترنت جيدة.
- البحث عبر الإنترنت مناسب للاستخدام إذا لم تكن هناك خرائط للمنطقة وإذا كان من المستحيل تنزيلها.
- *يتطلب اتصال إنترنت ثابت ومستمر.*

![البحث عن نقاط الاهتمام Android](@site/static/img/search/search_poi_online_increase2_andr.png)

لتحسين النتائج، قبل استخدام أداة البحث، قم بتكبير الخريطة للاقتراب من المكان الذي تحتاج إلى العثور على موقع معين فيه. وأثناء البحث، يمكنك **زيادة نصف قطر البحث** للعثور على الأماكن الأبعد عن موقعك. عند البحث دون اتصال بالإنترنت، إذا لم تكن النتائج المطلوبة متاحة، يقترح OsmAnd استخدام البحث عبر الإنترنت.

يمكنك العثور على معلومات حول الملاحة عبر الإنترنت في مقال [التوجيه عبر الإنترنت](../navigation/routing/online-routing.md).

#### مثال على استعلام البحث عبر الإنترنت {#example-of-online-search-query}

يُستخدم *Nominatim* في OsmAnd كمحرك بحث لبيانات OpenStreetMap، والذي يمكنك من خلاله البحث بالاسم (البحث حسب العنوان معطل حاليًا). تحتوي كل نتيجة على رابط إلى صفحة تفاصيل لمعرفة البيانات المخزنة حول الكائن في قاعدة البيانات.

**مثال على ملف XML.** لا يحتوي ملف XML هذا على أي معلومات نمط مرتبطة به. تظهر شجرة المستند في [الرابط](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).

## البحث المخصص عن نقاط الاهتمام {#custom-poi-search}

البحث المخصص عن نقاط الاهتمام هو ميزة بحث متقدمة تتيح لك العثور على نقاط الاهتمام من فئات مختلفة ودمجها لإجراء بحث أكثر دقة وتخصيصًا. على عكس البحث القياسي عن نقاط الاهتمام، والذي يقتصر على بعض الفئات المحددة مسبقًا، يوفر البحث المخصص عن نقاط الاهتمام المرونة في تحديد ودمج أنواع مختلفة من نقاط الاهتمام.

على سبيل المثال، يمكنك البحث عن المطاعم والصيدليات في وقت واحد للعثور على أقرب مكان لتناول الطعام ثم تناول دوائك. أو البحث عن أقرب محطة وقود وخدمة سيارات عندما تواجه مشكلة في سيارتك.

هذه الوظيفة مفيدة بشكل خاص في حالات مختلفة:

- *السفر*. عند السفر، باستخدام البحث المخصص، يمكنك العثور بسرعة على أماكن مختلفة ذات أهمية ودمجها لإنشاء مسار أمثل.
- *حالات الطوارئ*. إذا كنت بحاجة إلى العثور على عدة أنواع من الخدمات بسرعة، يمكنك استخدام بحث مخصص عن نقاط الاهتمام للحصول على جميع المعلومات التي تحتاجها.
- *البحث عن الخدمات القريبة*. يتيح لك البحث المخصص دمج فئات مختلفة من نقاط الاهتمام لسهولة البحث إذا كنت بحاجة إلى العثور على عدة أنواع من الخدمات في حي معين أو في جزء معين من المسار.

### فلتر نقاط الاهتمام المخصص {#custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![البحث المخصص Android](@site/static/img/search/search_custom_filter_andr.png) ![البحث المخصص Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_ios.png) ![أنواع نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![أنواع نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

يتضمن *فلتر نقاط الاهتمام المخصص* مجموعات من فئات المرافق التي تتكون من قيم ذات صلة. يتيح لك OsmAnd جمع ودمج أنواع نقاط الاهتمام المطلوبة من فئة واحدة أو أكثر من الفئات المقترحة.

لإنشاء فلاتر مخصصة للعثور على الأماكن على الخريطة، حدد الفئات والفئات الفرعية ذات الصلة التي تهمك. يمكنك [حفظ](#save-new-custom-filters) هذه الفلاتر للاستخدام لاحقًا أو [تعديلها](#edit-an-existing-filter) إذا لزم الأمر. بدلاً من ذلك، يمكنك عرض البيانات المفلترة دون حفظ بالنقر على زر *إظهار*. ومع ذلك، لاحظ أنه إذا لم تقم بحفظ الفلاتر، فسيتم إلغاء جميع التحديدات بمجرد تبديل عمليات البحث أو الخروج من أداة البحث.

- تحتوي كل فئة من فئات المرافق على قائمة بالقيم العامة المتاحة لأنواع نقاط الاهتمام.
- لديك خيار تحديدها أو إلغاء تحديدها بشكل فردي بالنقر على حقل النوع الذي تهتم به.
- *تحديد الكل* - للقيام بذلك، حدد زر التبديل.
- تحسين القائمة عن طريق استبعاد العناصر غير الضرورية - ابدأ في كتابة الاسم المقترح في حقل *البحث عن أنواع نقاط الاهتمام*.

#### الفئات وفلاترها {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. يتضمن 25 نوعًا: *مخصصات، جزيرة مرجانية، حي، مدينة، كتلة مدينة، بلد، محكمة، جمارك، مكتب دبلوماسي، مزرعة، حكومة، قرية صغيرة، جزيرة، جزيرة صغيرة، مسكن معزول، منطقة، حي، شرطة، سجن، ربع، منطقة سكنية، ضاحية، بلدة، قاعة مدينة، قرية*.

2. **عيد الميلاد**. يتضمن 5 أنواع من الفلاتر:
    *حدث عيد الميلاد، سوق عيد الميلاد، هرم عيد الميلاد، متجر عيد الميلاد، شجرة عيد الميلاد*.

3. **<Translate android="true" ids="amenity_type_education"/>**. يتضمن 16 نوعًا: *مخصصات، جزيرة مرجانية، حي، مدينة، كتلة مدينة، بلد، محكمة، جمارك، مكتب دبلوماسي، مزرعة، حكومة، قرية صغيرة، جزيرة، جزيرة صغيرة، مسكن معزول، منطقة، حي، شرطة، سجن، ربع، منطقة سكنية، ضاحية، بلدة، قاعة مدينة، قرية*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. يتضمن 14 نوعًا من الفلاتر.

5. **البنية التحتية للطوارئ**. يتضمن 12 نوعًا من الفلاتر.

6. **<Translate android="true" ids="amenity_type_finance"/>**. يتضمن 12 نوعًا من الفلاتر.

7. **طعام**. يتضمن 12 نوعًا من الفلاتر.

8. **خطر**. يتضمن 5 أنواع: *خطر الانهيار الجليدي، خطر التآكل، خطر الفيضانات، خطر نووي، طريق زلق*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. يتضمن 31 نوعًا من الفلاتر.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. يتضمن 148 نوعًا من الفلاتر.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. يتضمن 121 نوعًا من الفلاتر.

12. **<Translate android="true" ids="amenity_type_military"/>**. يتضمن 7 أنواع: *منطقة خطر، مخبأ عسكري، قاعدة بحرية عسكرية، مكتب عسكري، نطاق عسكري، منطقة عسكرية، موقع انفجار نووي*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. يتضمن 50 نوعًا من الفلاتر.

14. **بحري**. يتضمن 41 نوعًا من الفلاتر.

15. **<Translate android="true" ids="amenity_type_office"/>**. يتضمن 39 نوعًا من الفلاتر.

16. **الأماكن الشهيرة (ويكيبيديا)**. يتضمن نوعًا واحدًا: *ويكيبيديا*.

17. **وصول خاص**. لا يتضمن أي فلاتر.

18. **المسارات**. يتضمن 15 نوعًا من الفلاتر.

19. **الخدمة**. يتضمن 111 نوعًا من الفلاتر.

20. **<Translate android="true" ids="amenity_type_sport"/>**. يتضمن 119 نوعًا من الفلاتر.

21. **المتجر**. يتضمن 156 نوعًا من الفلاتر.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. يتضمن 103 أنواع من الفلاتر.

23. **النقل**. يتضمن 97 نوعًا من الفلاتر.

24. **معرف من قبل المستخدم**. يتضمن نوعًا واحدًا: *رمز بريدي آخر معرف من قبل المستخدم*.

<!--
:::note since OsmAnd 5.0 for Android
متاح للبحث:

- نقاط الاهتمام الدينية بناءً على علامة `amenity=place_of_worship` مقسمة إلى مواقع دينية محددة مثل الكنائس أو المساجد أو المعابد اليهودية.
- المرافق الثانوية مثل "مقعد"، "مقعد شباب" (`amenity=bench`) متاحة في قائمة الفئات.
:::
-->

### حفظ فلاتر مخصصة جديدة {#save-new-custom-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![حفظ نقاط الاهتمام المخصصة Android](@site/static/img/search/custom_poi_save_android.png) ![حفظ نقاط الاهتمام المخصصة Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![حفظ نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

لـ **حفظ** فلتر مخصص، حدد أنواع الفلاتر، ثم:

- انقر على زر *إظهار* وحدد زر *حفظ* لنظام iOS أو الزر الذي يحمل *أيقونة تشير إلى إجراء الحفظ* لنظام Android.
- أدخل اسمًا للفئة الجديدة.
- سيظهر الفلتر الخاص بك في قائمة *علامة تبويب الفئات* في أداة البحث.

طريقة أخرى لـ **الحفظ**:

- حدد *[الفئة](#poi-search-by-categories) ← [أيقونة الفلتر](#types-of-filters) ←* حدد *أنواع* الخصائص *← قائمة ثلاث نقاط ← حفظ الفلتر*.

### تعديل فلتر موجود {#edit-an-existing-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![حذف نقاط الاهتمام المخصصة Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![حذف نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

من الشاشة الرئيسية:

- انقر على زر *العدسة المكبرة* في الزاوية العلوية اليسرى من شاشة الجهاز لفتح قائمة *البحث*.
- حدد علامة التبويب *الفئات*.
- حدد فئة مخصصة محفوظة، وستظهر شاشة نتائج البحث.
- انقر على أيقونة *الفلتر* بجوار *إظهار على الخريطة* لفتح شاشة *الفلاتر*.
- انقر على *قائمة النقاط الثلاث*.
- في القائمة المنسدلة، حدد **تعديل الفلتر**.
- لحفظ بحث نقاط الاهتمام المخصص بعد التعديل:
    - حدد فئات نقاط الاهتمام وأنواع الفلاتر لها *←* انقر على *إظهار ← قائمة النقاط الثلاث ← حفظ باسم ←* أدخل اسم فلتر جديد أو *احفظ* التغييرات على الفلتر الحالي.

### حذف فلتر نقاط الاهتمام المخصص {#delete-custom-poi-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![حذف نقاط الاهتمام المخصصة Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![حذف نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

يمكنك فقط حذف الفئات التي تم إنشاؤها باستخدام الفلاتر أو البحث المخصص.

- انتقل إلى علامة التبويب [الفئات](#poi-search-by-categories) وحدد الفئة المطلوبة.
- في الحقل المجاور لـ *إظهار على الخريطة*، انقر على الأيقونة التي تمثل *الفلتر*.
- في قائمة *الفلاتر*، انقر على *قائمة النقاط الثلاث* (&#8285;) الموجودة في الزاوية العلوية اليمنى من الشاشة.
- حدد **حذف الفلتر**.
- ***لا يمكنك التراجع عن الحذف.***

#### حذف الفئات المخصصة (iOS) {#delete-custom-categories-ios}

![حذف نقاط الاهتمام المخصصة iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

خيار إضافي لتطبيق iOS فقط هو **حذف الفئات المخصصة**.

- هذا العنصر موجود في نهاية قائمة علامة التبويب *الفئات*.
- حدد الفئات غير الضرورية عنصرًا تلو الآخر أو *تحديد الكل*.
- انقر على زر **حذف**.

## مقالات ذات صلة {#related-articles}

- [البحث عن الكل](./search-all.md)
- [البحث عن عنوان](./search-address.md)
- [سجل البحث](./search-history.md)
- [البحث عن إحداثيات](./search-coordinates.md)

> *آخر تحديث: مايو 2025*