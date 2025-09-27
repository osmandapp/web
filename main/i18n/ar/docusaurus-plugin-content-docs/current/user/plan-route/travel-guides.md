---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  أدلة السفر
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



## نظرة عامة {#overview}

:::info ميزة مدفوعة
أدلة السفر هي [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

تقدم أدلة السفر الافتراضية في OsmAnd للمستخدمين معلومات قيمة وتوصيات ونصائح. كما أنها تتيح للمسافرين الوصول إلى معلومات ملاحة شاملة حول المعالم السياحية في التطبيق.

تستند أدلة السفر في OsmAnd إلى بيانات من [ويكي سفر (Wikivoyage)](https://www.wikivoyage.org/)، وهو مشروع مجتمعي مشابه لويكيبيديا، حيث يقوم مؤلفون متطوعون بإنشاء مقالات محدثة.
تتضمن معلومات ويكي سفر الحقائق الرئيسية حول مكان ما، ووسائل النقل، والمعالم السياحية، والتسوق، والمزيد.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عرض أدلة السفر العام](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

- [تنزيل](#download-articles) *أدلة السفر*.
- تصفح [المقالات](#browse-articles) حول بلد أو منطقة أو مدينة أو معلم سياحي.
    - بدلاً من ذلك، [اعرض مقالات و/أو نقاط أدلة السفر على الخريطة](#travel-routes) باستخدام قائمة "إعداد الخريطة".
    - تصفح المعالم السياحية على الخريطة، وأضفها إلى *[علامات الخريطة](../personal/markers.md#add--edit-markers)* أو *[المفضلة](../personal/favorites.md#favorite-group-actions)*.
    - باستخدام زر *[قراءة المقال كاملاً](#manage-as-gpx-track)*، انتقل إلى *[المقال](#travel-article) داخل *أدلة السفر*.
- [أضف إشارة مرجعية](#explore-and-bookmark) للمقالات لقراءتها لاحقًا.
- اختر [نقاطًا](#points) من المقالات لزيارتها وأضفها إلى خريطة OsmAnd.
- احصل على مزيد من المعلومات حول الأماكن التي يمكن زيارتها من [مقالات ويكيبيديا](#combine-with-wikipedia) المتاحة دون اتصال بالإنترنت.
- [أنشئ مسارًا](../navigation/setup/route-navigation.md#set-destinations) إلى المعالم السياحية المختارة أو تجولًا حرًا بين النقاط.

:::note
يتم تخزين مقالات *أدلة السفر* داخل OsmAnd كمسارات GPX مع نقاط طريق. بعد إضافة هذه المسارات إلى الخريطة (انظر قسمي *[النقاط](#points)* أو *[مسارات السفر](#travel-routes)* من هذا المقال)، يمكنك إدارتها عبر قائمة *[أماكني](../personal/myplaces.md)*.
:::

### تنزيل المقالات {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![قائمة تنزيل أدلة السفر](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![قائمة الخرائط iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

قبل البدء في استخدام أدلة السفر، تحتاج إلى تنزيلها عبر [قائمة تنزيل الخرائط](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). يتم تجميع المقالات حسب المناطق: *إفريقيا، آسيا، أستراليا وأوقيانوسيا، أمريكا الوسطى، أوروبا، أمريكا الشمالية، روسيا، وأمريكا الجنوبية*، لذلك لا يتعين عليك تنزيل كتب السفر لمدينة أو بلد منفصل.
من خلال حفظ المناطق المطلوبة على جهازك، يمكنك تصفح المقالات باستخدام OsmAnd حتى عندما تكون في الخارج أو خارج نطاق شبكة هاتفك المحمول.

:::note
بالإضافة إلى أدلة البلدان أو المناطق أو المدن، يمكنك العثور على أدلة لأماكن من الأفلام والكتب وألعاب الكمبيوتر وأماكن ذكرى العظماء وما إلى ذلك.
هناك أيضًا أدلة متخصصة، مثل قائمة شبكة اليونسكو العالمية للحدائق الجيولوجية أو أكبر وأعقد المطارات الدولية في العالم.
:::

## تصفح المقالات {#browse-articles}

تتكون شاشة *أدلة السفر* من جزأين عامين: *[حقل بحث](#search)* وقائمة *أدلة السفر* مع علامتي تبويب: *[<Translate android="true" ids="shared_string_explore"/> و <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. يمكنك التبديل بينهما بنقرة واحدة على علامة التبويب.
عند فتح *أدلة السفر* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*)، سيعرض لك OsmAnd مقالات حول الأماكن المثيرة للاهتمام الموجودة بالقرب من الإحداثيات الجغرافية لمركز الخريطة الحالي. عند النقر على عنصر من القائمة، يفتح [مقال دليل السفر](#travel-article). يوجد في أسفل الشاشة مفتاح للتبديل إلى *علامة تبويب الإشارات المرجعية*.

### الاستكشاف والإشارات المرجعية {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الشاشة الرئيسية لأدلة السفر](@site/static/img/guides/travel_guides_main_screen_1.png) ![الشاشة الرئيسية لأدلة السفر 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الشاشة الرئيسية لأدلة السفر](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![الشاشة الرئيسية لأدلة السفر 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

في علامة التبويب **استكشاف** أو **<Translate android="true" ids="popular_destinations"/>**، يتم إدراج أفضل ٣٠ مقالًا حول الوجهات المجاورة لمركز الشاشة (خارج الموقع). من خلال النقر على عنصر من القائمة مع عنوان ووصف موجز للمقال، يمكنك عرض النص الكامل لذلك المقال.
إذا نقرت على *زر الإشارة المرجعية*، فسيتم حفظ المقال لقراءته لاحقًا وسيكون متاحًا في علامة تبويب الإشارات المرجعية. في علامة تبويب *المقالات المحفوظة كإشارة مرجعية*، يتم ترتيب المقالات كما تم حفظها، مع وجود أحدث المقالات في الأعلى.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. يفتح [مقال السفر](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. ينقل المقال المحدد إلى <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. يزيل المقال المحدد من <Translate android="true" ids="saved_articles"/>.

### البحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

يقع حقل البحث في الجزء العلوي من شاشة <Translate android="true" ids="shared_string_travel_guides"/>. إذا بدأت في كتابة الأحرف الأولى من بلد أو مدينة أو مكان مشهور، فستظهر قائمة بالمقالات أسفل حقل البحث. من خلال لمس المقال المطلوب، يمكنك البدء في القراءة.
بجوار كل نتيجة بحث، يتم سرد أول ٣ لغات الأكثر استخدامًا والتي يمكن قراءة المقال المحدد بها. ومع ذلك، تتوفر المقالات الشائعة بلغات أكثر من اللغات الثلاث المدرجة.

**ميزات إضافية:**

- يمكنك البحث عن معالم ثقافية خاصة، مثل *سياحة هاري بوتر*، *مدن الأشباح*، *الممالك*، وغيرها.
- لحذف سجل البحث، تحتاج إلى استخدام [زر <Translate android="true" ids="shared_string_options"/>](#options).

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### الخيارات {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة خيارات أدلة السفر](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك تخصيص مظهر المقالات عند العمل دون اتصال بالإنترنت. لاحظ أن أدلة السفر *[المنزلة](#download-articles)* لا تحتوي على صور. تظهر فقط عند عرض المقالات مع اتصال إنترنت نشط.
في قائمة الخيارات، يمكنك اختيار ما إذا كنت تريد حفظ الصور في المقالات التي تم عرضها لاستخدامها عندما تكون غير متصل بالإنترنت. يمكنك أيضًا مسح ذاكرة التخزين المؤقت للصور الحالية أو حذف سجل البحث (يعمل فقط عند البحث في *أدلة السفر*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. يمكن تنزيل الصور في المقالات للاستخدام دون اتصال بالإنترنت.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. يمسح ذاكرة التخزين المؤقت للصور لتوفير الذاكرة.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. يمسح [سجل البحث](#search).

## مقال السفر {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مقال أدلة السفر](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

يمكنك فتح مقال من الخيارات المقترحة في *[علامة تبويب الاستكشاف](#explore-and-bookmark)* أو باستخدام خيار *[البحث](#search)*. عند إضافة معالم سياحية تسمى *[النقاط](#points)* من *مقال دليل السفر* إلى خريطة OsmAnd، يمكنك أيضًا فتح المقال باستخدام زر *قراءة المقال كاملاً* في [قسم الوصف](../map/tracks/track-context-menu.md#description-and-info) لنقطة الطريق.

توجد عناصر التحكم التالية في الجزء العلوي من الشاشة:

- مفتاح لتغيير لغة المقال. يمكن تحديد اللغة من الخيارات المتاحة. يتم استخدام لغة النظام بشكل افتراضي.
- باستخدام الزر &#8942;، يمكنك مشاركة المقال مع أصدقائك. يفتح الرابط في تطبيق OsmAnd، ويجب تنزيل ملف أدلة السفر المناسب على جهاز المستلم أو موقع [ويكي سفر (Wikivoyage)](https://www.wikivoyage.org/)، إذا لم يكن لدى المستلم تطبيق OsmAnd أو لأجهزة iOS.
- يؤدي النقر على شريط التنقل إلى فتح *[قائمة التنقل في أدلة السفر](#navigation-menu)*.

توجد في أسفل الشاشة أزرار مثل:

- [المحتويات](#table-of-contents). يفتح جدول محتويات المقال.
- [النقاط](#points). يعرض المعالم السياحية المتعلقة بالمقال على الخريطة.
- [إشارة مرجعية](#explore-and-bookmark). يسمح لك بإضافة مقال إلى الإشارات المرجعية لقراءته لاحقًا.


### قائمة التنقل {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محتويات أدلة السفر](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

للانتقال من مقال إلى آخر في *مقالات دليل السفر*، استخدم **قائمة التنقل**. يمكنك الوصول إليها عن طريق النقر على حقل العنوان فوق الصورة. لاحظ أن المقالات في أدلة السفر مجمعة على النحو التالي: *القارة ← المنطقة ← البلد ← المقاطعة (الإقليم) ← المدينة*.
إذا نقرت على السهم في الزاوية العلوية اليسرى من الشاشة، فستنتقل مباشرة إلى علامة تبويب *الاستكشاف* أو *المقالات المحفوظة كإشارة مرجعية* (حسب علامة التبويب التي فتحتها سابقًا).


### جدول المحتويات {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محتويات أدلة السفر](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

تحتوي معظم *مقالات دليل السفر* على نفس بنية المحتوى: *مقدمة* (صور ووصف للموقع السياحي) و*فصول لاحقة*.

- &nbsp;*افهم*. تفاصيل حول الثقافة والعادات المحلية.
- &nbsp;*الوصول*. تفاصيل حول كيفية الوصول إلى بعض الأماكن وتكلفة هذا المسار.
- &nbsp;*شاهد*. قائمة بالمعالم السياحية (المتاحف، المواقع التاريخية، وما إلى ذلك) مع أوصاف كاملة: أسعار التذاكر، ساعات العمل، روابط مفيدة، وأرقام هواتف.
- &nbsp;*افعل*. أماكن لقضاء الوقت.
- &nbsp;*اشترِ*. مواقع للتسوق.
- &nbsp;*كُل*. مرافق تقديم الطعام (مقسمة حسب الميزانية: اقتصادية، متوسطة، فاخرة).
- &nbsp;*اشرب*. الحانات والمقاهي.
- &nbsp;*نَم*. أماكن الإقامة مقسمة حسب الميزانية (اقتصادية، متوسطة، فاخرة).
- &nbsp;*اذهب تاليًا*. أقرب الأماكن من ويكي سفر.

### النقاط {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

غالبًا ما تحتوي *مقالات دليل السفر* على معالم سياحية مجمعة حسب الموضوع. من خلال النقر مرة واحدة على زر *النقاط* في أسفل *[المقال](#travel-article)*، ستتم إضافة جميع المعالم المتعلقة بالموضوع (أماكن تناول الطعام، خيارات الإقامة، المطارات، المتاجر، المعالم التاريخية، وما إلى ذلك) إلى الخريطة ويمكن *[إدارتها كمسار](#manage-as-gpx-track)*.

بشكل افتراضي، يتم تمييز مجموعات المعالم بأيقونات معينة: فئات *كُل واشرب* بسكين وشوكة في دائرة حمراء، و*افعل وشاهد* بكاميرا في دائرة خضراء، وغيرها. يمكنك إدارة مجموعات النقاط باستخدام &#8942; مثل *[مجلد نقاط الطريق](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
تشير النقاط في *مقالات السفر* إلى نقاط الطريق على مسار GPX.
يمكنك أيضًا *[إضافة نقاط إلى الخريطة](#travel-routes)* في قائمة *إعداد الخريطة*. يمكنك عرضها جميعًا أو تحديد فئة معينة.
:::


## مسارات السفر {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

طريقة بديلة لتصفح *أدلة السفر* هي عرضها على الخريطة باستخدام قائمة *إعداد الخريطة*. لا تنطبق هذه الميزة على الإمكانية التي يوفرها OsmAnd لاستخدام ويكي سفر، بل تنطبق فقط على المسارات. يمكنك قراءة المزيد في [مدونتنا](https://osmand.net/blog/routes#generated-travel-routes).

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_travel_routes_path.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_travel_routes_view.png)


### مسارات السفر والمقالات على الخريطة {#travel-routes-and-articles-on-the-map}

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

بعد تمكين عرض *مسارات السفر* في قائمة *إعداد الخريطة*، ستظهر دوائر بألوان مختلفة على الخريطة. تمثل الدوائر البرتقالية مسارات الطرق ومقالات المسارات وبعض نقاط الطريق. انقر على مسار أو مقال أو نقطة معينة ثم انقر على زر *تنزيل* (&#9047;)، ويمكنك [إدارتها كمسار](#manage-as-gpx-track).

### أدلة السفر المخصصة {#custom-travel-guides}

نوصيك بإضافة مقالات جديدة أو تعديلات إلى [ويكي سفر (Wikivoyage)](https://en.wikivoyage.org/). نقوم بتحديث أدلة السفر كل ٦ أشهر تقريبًا، ويمكنك تنزيل مقالات جديدة. يمكنك أيضًا إنشاء *كتاب سفر* خاص بك. كيفية القيام بذلك موصوفة في الوثائق الفنية (انظر مقال *[إنشاء دليل سفر مخصص](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## الإدارة كمسار GPX {#manage-as-gpx-track}

![قائمة نقاط أدلة السفر 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![قائمة نقاط أدلة السفر 2](@site/static/img/guides/travel_guides_articles_my_places.png)

بعد إضافة *أدلة السفر* إلى الخريطة، يمكن حفظ *مقالات السفر* كمسار GPX وإدارتها من خلال قائمة *[أماكني](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). يمكن عرضها على الخريطة أو مشاركتها أو إعادة تسميتها أو وضعها في مجلد آخر أو تصديرها أو حذفها.

- &nbsp;في *[نظرة عامة](../map/tracks/track-context-menu.md#overview)*، يمكنك قراءة وصف موجز أو فتح [مقال دليل السفر](#travel-article) عن طريق النقر على زر *قراءة المقال كاملاً*. يتيح لك *تعديل* تصحيح المقال.
- &nbsp;لا توجد معلومات في قسم *[المسار](../map/tracks/track-context-menu.md#altitude--speed-graphs)*، حيث تحتوي ملفات GPX الخاصة بـ *أدلة السفر* على نقاط طريق فقط.
- &nbsp;تحت *[النقاط](../map/tracks/track-context-menu.md#points--waypoints)*، سترى مجلدات تحتوي على نقاط مجمعة حسب الاسم (اشترِ، افعل، اشرب، وما إلى ذلك).
- &nbsp;يقوم زر *[الخيار](../map/tracks/track-context-menu.md#options)* بنفس وظائف المسار العادي.

:::info
يتم تخزين *النقاط* في [ملف GPX](../../technical/osmand-file-formats/osmand-gpx.md) (تنسيق شائع الاستخدام للمسارات) كـ [نقاط طريق](../map/point-layers-on-map.md#track-waypoints). يتم تمييز عدد النقاط (نقاط الطريق) في المسار بجوار الأيقونة &#128681; في حقل المسار.
في *[قائمة سياق المسار](../map/tracks/track-context-menu.md)* لملف GPX، يمكنك العثور على معلومات عامة حول المقال الذي ينتمي إليه هذا المسار.
:::

## الدمج مع ويكيبيديا {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![دمج أدلة السفر مع ويكيبيديا 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![دمج أدلة السفر مع ويكيبيديا 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

في *مقالات دليل السفر* يمكنك العثور على معلومات مفيدة حول المعالم السياحية (معلومات الاتصال، روابط الويب، الأسعار، وما إلى ذلك). تحتوي العديد من المقالات على زر *ويكيبيديا* الذي يسمح بفتح *[مقال ويكيبيديا](../plugins/wikipedia.md)* (عبر الإنترنت أو دون اتصال) حول المكان محل الاهتمام.

في بعض الحالات، ستطالبك *[علامة تبويب الإشارات المرجعية](#explore-and-bookmark)* في OsmAnd بتنزيل [طبقة خريطة ويكيبيديا](../plugins/wikipedia.md#download-wikipedia-packages) لتصفح المقالات ذات الصلة دون اتصال بالإنترنت.

![تنزيل ويكيبيديا لأدلة السفر](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info ملاحظة
[ملحق ويكيبيديا](../plugins/wikipedia.md) هو [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)