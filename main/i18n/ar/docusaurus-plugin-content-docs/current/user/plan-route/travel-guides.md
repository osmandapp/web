---
source-hash: 0890149ad782b462cb3c62cceac41b86ca265c6bf722b509b91f1be130761689
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

تقدم أدلة السفر الافتراضية في OsmAnd للمستخدمين معلومات قيمة وتوصيات ونصائح. كما أنها تتيح للمسافرين الوصول إلى معلومات ملاحية شاملة حول المعالم السياحية في التطبيق.

تعتمد أدلة السفر في OsmAnd على بيانات من [ويكيبيديا](https://www.wikivoyage.org/)، وهو مشروع مجتمعي مشابه لويكيبيديا، حيث يقوم المؤلفون المتطوعون بإنشاء مقالات محدثة.
تتضمن معلومات ويكيبيديا الحقائق الرئيسية حول مكان ما، والنقل، والمعالم السياحية، والتسوق، والمزيد.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![عرض أدلة السفر عام](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة الخرائط iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

- [تنزيل](#download-articles) *أدلة السفر*.
- تصفح [المقالات](#browse-articles) حول بلد أو منطقة أو مدينة أو معلم جذب.
    - بدلاً من ذلك، [اعرض مقالات أدلة السفر و/أو النقاط على الخريطة](#travel-routes) باستخدام قائمة تكوين الخريطة.
    - تصفح المعالم السياحية على الخريطة، وأضفها إلى *[علامات الخريطة](../personal/markers.md#add--edit-markers)* أو *[المفضلة](../personal/favorites.md#favorite-group-actions)*.
    - باستخدام زر *[قراءة كاملة](#manage-as-gpx-track)*، انتقل إلى *[المقالة](#travel-article) داخل *أدلة السفر*.
- [وضع إشارة مرجعية](#explore-and-bookmark) على المقالات لقراءتها لاحقًا.
- اختر [نقاط](#points) من المقالات لزيارتها وإضافتها إلى خريطة OsmAnd.
- احصل على مزيد من المعلومات حول الأماكن التي يمكنك زيارتها من [مقالات ويكيبيديا](#combine-with-wikipedia) غير المتصلة بالإنترنت.
- [أنشئ مسارًا](../navigation/setup/route-navigation.md#set-destinations) إلى المعالم السياحية المختارة أو نزهة حرة بين النقاط.

:::note
يتم تخزين مقالات *أدلة السفر* داخل OsmAnd كمسارات GPX مع نقاط طريق. بعد إضافة هذه المسارات إلى الخريطة (انظر قسمي *[النقاط](#points)* أو *[مسارات السفر](#travel-routes)* من هذه المقالة)، يمكنك إدارتها عبر قائمة *[أماكني](../personal/myplaces.md)*.
:::

### تنزيل المقالات {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![قائمة تنزيل أدلة السفر](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![قائمة الخرائط iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

قبل البدء في استخدام أدلة السفر، تحتاج إلى تنزيلها عبر [قائمة تنزيل الخرائط](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). يتم تجميع المقالات حسب المناطق: *أفريقيا، آسيا، أستراليا وأوقيانوسيا، أمريكا الوسطى، أوروبا، أمريكا الشمالية، روسيا، وأمريكا الجنوبية*، لذلك لا يتعين عليك تنزيل كتب السفر لمدينة أو بلد منفصل.
من خلال حفظ المناطق المطلوبة على جهازك، يمكنك تصفح المقالات باستخدام OsmAnd حتى عندما تكون في الخارج أو خارج نطاق شبكة هاتفك المحمول.

:::note
بالإضافة إلى أدلة البلدان أو المناطق أو المدن، يمكنك العثور على أدلة لأماكن من الأفلام والكتب وألعاب الكمبيوتر وأماكن ذاكرة عظماء الناس وما إلى ذلك.
توجد أيضًا أدلة متخصصة، مثل قائمة شبكة اليونسكو العالمية للمتنزهات الجيولوجية أو أكبر وأعقد المطارات الدولية في العالم.
:::

## تصفح المقالات {#browse-articles}

تتكون شاشة *أدلة السفر* من جزأين عامين: *[حقل بحث](#search)* وقائمة *أدلة السفر* مع علامتي تبويب: *[<Translate android="true" ids="shared_string_explore"/> و <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. يمكنك التبديل بينهما بنقرة واحدة على علامة التبويب.
عند فتح *أدلة السفر* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*)، سيعرض لك OsmAnd مقالات حول أماكن مثيرة للاهتمام تقع بالقرب من الإحداثيات الجغرافية لمركز الخريطة الحالي. عند النقر على العنصر من القائمة، تفتح [مقالة دليل السفر](#travel-article). في أسفل الشاشة يوجد مفتاح لعلامة تبويب *الإشارات المرجعية*.

### استكشاف ووضع إشارة مرجعية {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الشاشة الرئيسية لأدلة السفر](@site/static/img/guides/travel_guides_main_screen_1.png) ![الشاشة الرئيسية لأدلة السفر 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![الشاشة الرئيسية لأدلة السفر](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![الشاشة الرئيسية لأدلة السفر 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

في علامة التبويب **استكشاف** أو **<Translate android="true" ids="popular_destinations"/>**، يتم سرد أفضل 30 مقالة حول الوجهات المجاورة لمركز الشاشة (خارج الموقع). من خلال النقر على عنصر من القائمة مع عنوان ووصف موجز للمقالة، يمكنك عرض النص الكامل لتلك المقالة.
إذا نقرت على زر *الإشارة المرجعية*، فسيتم حفظ المقالة لقراءتها لاحقًا وستكون متاحة في علامة تبويب الإشارات المرجعية. في علامة تبويب *المقالات المرجعية*، يتم ترتيب المقالات كما تم حفظها، مع أحدث المقالات في الأعلى.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. يفتح [مقالة السفر](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. ينقل المقالة المحددة إلى <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. يزيل المقالة المحددة من <Translate android="true" ids="saved_articles"/>.

### بحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

يقع حقل البحث في الجزء العلوي من شاشة <Translate android="true" ids="shared_string_travel_guides"/>. إذا بدأت في كتابة الأحرف الأولى من اسم بلد أو مدينة أو مكان مشهور، فستظهر قائمة بالمقالات أسفل حقل البحث. من خلال لمس المقالة المطلوبة، يمكنك البدء في القراءة.
بجانب كل نتيجة بحث، يتم سرد اللغات الثلاث الأكثر استخدامًا والتي يمكن قراءة المقالة المحددة بها. ومع ذلك، تتوفر المقالات الشائعة بلغات أكثر من اللغات الثلاث المدرجة.

**ميزات إضافية:**

- يمكنك البحث عن مناطق جذب ثقافية خاصة، مثل *سياحة هاري بوتر*، *المدن الأشباح*، *الممالك*، وغيرها.
- لحذف سجل البحث، تحتاج إلى استخدام زر [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### خيارات {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة خيارات أدلة السفر](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك تخصيص مظهر المقالات عند العمل دون اتصال بالإنترنت. ملاحظة، أن أدلة السفر *[التي تم تنزيلها](#download-articles)* لا تحتوي على صور. تظهر فقط عند عرض المقالات مع اتصال إنترنت نشط.
في قائمة الخيارات، يمكنك اختيار ما إذا كنت تريد حفظ الصور في المقالات المعروضة لاستخدامها عندما تكون غير متصل بالإنترنت. يمكنك أيضًا مسح ذاكرة التخزين المؤقت للصور الموجودة أو حذف سجل البحث (يعمل فقط عند البحث في *أدلة السفر*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. يمكن تنزيل الصور في المقالات للاستخدام دون اتصال بالإنترنت.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. يمسح ذاكرة التخزين المؤقت للصور لتحرير الذاكرة.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. يمسح [سجل البحث](#search).

## مقالة السفر {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مقالة أدلة السفر](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

يمكنك فتح مقالة من الخيارات المقترحة في *[علامة تبويب الاستكشاف](#explore-and-bookmark)* أو باستخدام خيار *[البحث](#search)*. عند إضافة مناطق جذب سياحي تسمى *[نقاط](#points)* من *مقالة دليل السفر* إلى خريطة OsmAnd، يمكنك أيضًا فتح المقالة باستخدام زر *قراءة كاملة* في [قسم الوصف](../map/tracks/track-context-menu.md#description-and-info) لنقطة الطريق.

توجد عناصر التحكم التالية في الجزء العلوي من الشاشة:

- مفتاح لتغيير لغة المقالة. يمكن تحديد اللغة من الخيارات المتاحة. يتم استخدام لغة النظام افتراضيًا.
- باستخدام زر &#8942;، يمكنك مشاركة المقالة مع أصدقائك. يفتح الرابط في تطبيق OsmAnd، ويجب تنزيل ملفات أدلة السفر المناسبة على جهاز المستلم أو موقع [Wikivoyage](https://www.wikivoyage.org/)، إذا لم يكن لدى المستلم تطبيق OsmAnd أو لأجهزة iOS.
- يؤدي النقر على شريط التنقل إلى فتح *[قائمة التنقل لأدلة السفر](#navigation-menu)*.

في أسفل الشاشة توجد أزرار مثل:

- [المحتويات](#table-of-contents). يفتح جدول محتويات المقالة.
- [النقاط](#points). يعرض مناطق الجذب السياحي المتعلقة بالمقالة على الخريطة.
- [الإشارة المرجعية](#explore-and-bookmark). يسمح لك بإضافة مقالة إلى الإشارات المرجعية لقراءتها لاحقًا.


### قائمة التنقل {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محتويات أدلة السفر](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

للانتقال من مقالة إلى أخرى في *مقالات دليل السفر*، استخدم **قائمة التنقل**. يمكنك الوصول إليها بالنقر على حقل العنوان فوق الصورة. ملاحظة، يتم تجميع المقالات في أدلة السفر على النحو التالي: *القارة ← المنطقة ← البلد ← المقاطعة (المنطقة) ← المدينة*.
إذا نقرت على السهم في الزاوية العلوية اليسرى من الشاشة، فستنتقل مباشرة إلى علامة تبويب *الاستكشاف* أو *المقالات المرجعية* (حسب علامة التبويب التي فتحتها سابقًا).


### جدول المحتويات {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محتويات أدلة السفر](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

معظم *مقالات دليل السفر* لها نفس هيكل المحتوى: *مقدمة* (صور ووصف للموقع السياحي) و *فصول لاحقة*.

- &nbsp;*فهم*. تفاصيل حول الثقافة والعادات المحلية.
- &nbsp;*الوصول*. تفاصيل حول كيفية الوصول إلى بعض الأماكن وكم سيكلف هذا المسار.
- &nbsp;*مشاهدة*. قائمة بالمعالم السياحية (المتاحف، المواقع التاريخية، وما إلى ذلك) مع أوصاف كاملة: أسعار التذاكر، ساعات العمل، روابط مفيدة، وأرقام هواتف.
- &nbsp;*القيام*. أماكن لقضاء الوقت.
- &nbsp;*شراء*. مواقع للتسوق.
- &nbsp;*أكل*. مرافق تقديم الطعام (مقسمة حسب الميزانية: ميزانية، متوسطة المدى، فاخرة).
- &nbsp;*شرب*. الحانات والمقاهي.
- &nbsp;*نوم*. أماكن الإقامة مقسمة حسب الميزانية (ميزانية، متوسطة المدى، فاخرة).
- &nbsp;*اذهب بعد ذلك*. أقرب الأماكن من ويكيبيديا.

### نقاط {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

غالبًا ما تحتوي *مقالات دليل السفر* على مناطق جذب سياحي مجمعة حسب الموضوع. من خلال النقر مرة واحدة على زر *النقاط* في أسفل *[المقالة](#travel-article)*، ستتم إضافة جميع مناطق الجذب المتعلقة بالموضوع (أماكن تناول الطعام، خيارات الإقامة، المطارات، المتاجر، الآثار التاريخية، وما إلى ذلك) إلى الخريطة ويمكن *[إدارتها كمسار](#manage-as-gpx-track)*.

افتراضيًا، يتم تمييز مجموعات الجذب برموز معينة: فئات *الأكل والشرب* بسكين وشوكة في دائرة حمراء، و *القيام والمشاهدة* بكاميرا في دائرة خضراء، وغيرها. يمكنك إدارة مجموعات النقاط باستخدام &#8942; مثل *[مجلد نقطة طريق](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
تشير النقاط في *مقالات السفر* إلى نقاط الطريق على مسار GPX.
يمكنك أيضًا *[إضافة نقاط إلى الخريطة](#travel-routes)* في قائمة *تكوين الخريطة*. يمكنك عرضها كلها أو تحديد فئة معينة.
:::


## مسارات السفر {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

طريقة بديلة لتصفح *أدلة السفر* هي عرضها على الخريطة باستخدام قائمة *تكوين الخريطة*. لا تنطبق هذه الميزة على القدرة التي يوفرها OsmAnd لاستخدام Wikivoyage، بل تنطبق فقط على المسارات. يمكنك قراءة المزيد في [مدونتنا](https://osmand.net/blog/routes#generated-travel-routes).

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_travel_routes_path.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_travel_routes_view.png)


### مسارات ومقالات السفر على الخريطة {#travel-routes-and-articles-on-the-map}

![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![قائمة نقاط أدلة السفر](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

بعد تمكين عرض *مسارات السفر* في قائمة *تكوين الخريطة*، ستظهر دوائر بألوان مختلفة على الخريطة. تمثل الدوائر البرتقالية مسارات المسار، ومقالات المسار، وبعض نقاط الطريق. انقر على مسار أو مقالة أو نقطة معينة ثم انقر على زر *تنزيل* (&#9047;)، ويمكنك [إدارتها كمسار](#manage-as-gpx-track).

### أدلة سفر مخصصة {#custom-travel-guides}

نوصي بإضافة مقالات جديدة أو تعديلات إلى [ويكيبيديا](https://en.wikivoyage.org/). نقوم بتحديث أدلة السفر كل 6 أشهر تقريبًا، ويمكنك تنزيل مقالات جديدة. يمكنك أيضًا إنشاء *كتاب سفر* خاص بك. كيفية إنشائه موصوفة في الوثائق الفنية (انظر مقالة *[إنشاء دليل سفر مخصص](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## إدارة كمسار GPX {#manage-as-gpx-track}

![قائمة نقاط أدلة السفر 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![قائمة نقاط أدلة السفر 2](@site/static/img/guides/travel_guides_articles_my_places.png)

بعد إضافة *أدلة السفر* إلى الخريطة، يمكن حفظ *مقالات السفر* كمسار GPX وإدارتها من خلال قائمة *[أماكني](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). يمكن عرضها على الخريطة، ومشاركتها، وإعادة تسميتها، ووضعها في مجلد آخر، وتصديرها، أو حذفها.

- &nbsp;في *[نظرة عامة](../map/tracks/track-context-menu.md#overview)*، يمكنك قراءة وصف موجز أو فتح [مقالة دليل السفر](#travel-article) بالنقر على زر *قراءة كاملة*. يسمح لك *التعديل* بتصحيح المقالة.
- &nbsp;لا توجد معلومات في قسم *[المسار](../map/tracks/track-context-menu.md#altitude--speed-graphs)*، ملفات GPX الخاصة بـ *أدلة السفر* تحتوي فقط على نقاط طريق.
- &nbsp;تحت *[النقاط](../map/tracks/track-context-menu.md#points--waypoints)* ترى مجلدات تحتوي على نقاط مجمعة حسب الاسم (شراء، القيام، شرب، وهكذا).
- &nbsp;يقوم زر *[الخيار](../map/tracks/track-context-menu.md#options)* بنفس الوظائف كما في المسار العادي.

:::info
يتم تخزين *النقاط* في [ملف GPX](../../technical/osmand-file-formats/osmand-gpx.md) (تنسيق شائع الاستخدام للمسارات) كنقاط [طريق](../map/point-layers-on-map.md#track-waypoints). يتم تحديد عدد النقاط (نقاط الطريق) في المسار بجانب الرمز &#128681; في حقل المسار.
في *[قائمة سياق المسار](../map/tracks/track-context-menu.md)* لملف GPX، يمكنك العثور على معلومات عامة حول المقالة التي ينتمي إليها هذا المسار.
:::

## الدمج مع ويكيبيديا {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أدلة السفر تدمج مع ويكيبيديا 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![أدلة السفر تدمج مع ويكيبيديا 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![قائمة بحث أدلة السفر](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

في *مقالات دليل السفر* يمكنك العثور على معلومات مفيدة حول مناطق الجذب السياحي (معلومات الاتصال، روابط الويب، الأسعار، وهكذا). تحتوي العديد من المقالات على زر *ويكيبيديا* الذي يسمح بفتح *[مقالة ويكيبيديا](../plugins/wikipedia.md)* (عبر الإنترنت أو دون اتصال) حول المكان محل الاهتمام.

في بعض الحالات، ستطلب منك *[علامة تبويب الإشارات المرجعية](#explore-and-bookmark)* في OsmAnd تنزيل [طبقة خريطة ويكيبيديا](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) لتصفح المقالات ذات الصلة دون اتصال بالإنترنت.

![أدلة السفر تنزيل ويكيبيديا](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info ملاحظة
[ملحق ويكيبيديا](../plugins/wikipedia.md) هو [ميزة مدفوعة](../purchases/index.md) في تطبيق OsmAnd.
:::

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: يناير 2025*