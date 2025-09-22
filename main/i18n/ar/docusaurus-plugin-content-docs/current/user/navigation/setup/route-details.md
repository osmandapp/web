---
source-hash: e31e5212327dba32b41b4f464d67c7ab7f9725a2d4fbd06bb60453040bbfe587
sidebar_position: 4
title:  تفاصيل المسار
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

يسمح لك OsmAnd بالعثور على أفضل مسار واستكشاف تفاصيله. يوفر التطبيق معلومات مفصلة حول المسار مثل المسافة، [وقت الرحلة](#distance--time--co2)، [نوع السطح](#road-attributes)، [فروق الارتفاع](#elevation-info)، [بيانات البصمة الكربونية لثاني أكسيد الكربون](#distance--time--co2)، و[معلومات الانعطافات](#turn-by-turn-information). يمكنك أيضًا [تحليل](#analyze-on-map) المسار على الخريطة، ومعرفة معلومات حول مقاطع المسار، و[طباعة](#print) خطة المسار، و[حفظ](#share--export-actions) المسار، ومشاركته مع الآخرين. مع هذه الوظيفة، ستعرف دائمًا تفاصيل المسار ويمكنك التخطيط لرحلتك بكفاءة أكبر.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل المسار أندرويد](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تفاصيل المسار iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### كيفية الوصول {#how-to-access}

بعد حساب مسار في [قائمة الملاحة](./route-navigation.md#start--stop-navigation)، يمكنك الوصول إلى "التفاصيل" حول هذا المسار. هذه المعلومات مفيدة للاستخدام قبل بدء الرحلة لتحسين تخطيط المسار أو للتحقق من المعلومات حول الطريق أمامك أثناء القيادة.
هناك ثلاث طرق للوصول إلى *قائمة تفاصيل المسار*.

1. اذهب إلى *القائمة الرئيسية ← الملاحة*، قم بتعيين المسار، وانقر على زر *التفاصيل*.
2. انقر على أيقونة *الملاحة* على شاشة الخريطة، قم بتعيين المسار، وانقر على زر *التفاصيل*.
3. اذهب إلى قائمة *أماكني*، انقر على أي مسار متاح في القائمة *القائمة ← أماكني ← المسارات*، حدد أيقونة *الملاحة* في قائمة سياق المسار في *نظرة عامة* وانقر على *التفاصيل*.

اعتمادًا على [إعدادات الملف الشخصي](../../personal/profiles.md) المحددة و[نوع التوجيه](../../navigation/routing/osmand-routing.md#routing-types) المحدد، قد لا يتم عرض بعض تفاصيل المسار. بالإضافة إلى ذلك، تعتمد تفاصيل المسار بشكل كبير على *تغطية بيانات OpenStreetMap*.


## المسافة / الوقت / ثاني أكسيد الكربون {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل المسار](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***المسافة الإجمالية*** تُحسب بين جميع مقاطع المسار، بما في ذلك النقاط المتوسطة بالـ [وحدات](../../personal/profiles.md#units--formats) المحددة.

- ***وقت الرحلة المقدر*** يُحسب كمجموع الأوقات في كل مقطع والعقوبات الزمنية في نقاط محددة. لكل ملف تعريف ملاحة قواعد مختلفة لحساب السرعة في مقطع وأي عقوبات يجب تضمينها (تُكوّن في [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). على سبيل المثال، تأخذ ملفات تعريف السيارة والدراجة متوسط السرعة لكل مقطع من بيانات OpenStreetMap، لكن ملفات تعريف المشاة والقوارب والطائرات تستخدم السرعة *الافتراضية* من [إعدادات الملاحة](../guidance/vehicle-parameters.md#default-speed).

- ***وقت الوصول المقدر*** يُحسب كوقت من الآن بالتوقيت المحلي للمنطلق باستخدام *وقت الرحلة المقدر*.

- ***بيانات البصمة الكربونية لثاني أكسيد الكربون*** تقدر تقريبًا كمية ثاني أكسيد الكربون التي سيتم إنتاجها أثناء اتباع المسار. تحتاج إلى تكوين [نوع محرك الوقود](../guidance/vehicle-parameters.md#fuel-used-by-motor) في معلمات المركبة للحصول على تقدير أكثر دقة.


## معلومات الارتفاع {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل المسار](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**معلومات الارتفاع** متوفرة في جميع ملفات تعريف المسار غير المتصلة بالإنترنت في OsmAnd، باستثناء ملفات التعريف التي تستخدم [الملاحة بخط مستقيم](../routing/straight-line-routing.md). بيانات الارتفاع هي جزء من خرائط OsmAnd غير المتصلة بالإنترنت ويتم حسابها بناءً على [مصادر SRTM العامة](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *نطاق الارتفاع*. يعرض الحد الأدنى / الأقصى للارتفاع على المسار.
- *متوسط الارتفاع*. يعرض متوسط الارتفاع المرجح على المسار.
- *صعود / هبوط*. يعرض نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية ويشير عدد الدرجات إلى درجة ميل أعلى أو أكثر انحدارًا. يُظهر الانحدار أقصى ميل للطريق بالنسبة المئوية من موقعك إلى نهاية الرسم البياني المرئي، أو للقسم المحدد من المسار دون أن تكون نقطة الموقع مرئية على الشاشة.


***ترخيص لبيانات DEM المستخدمة بواسطة OsmAnd للكشف عن التضاريس***
تم الحصول على بيانات الارتفاع على الخريطة (بين خط عرض 70 درجة شمالًا و 70 درجة جنوبًا) من قياسات أُجريت كجزء من *مهمة طبوغرافيا الرادار المكوكية (SRTM)*. استخدمت *مقياس الإشعاع الحراري والانعكاس المتقدم المحمول في الفضاء (ASTER)*، وهو أداة التصوير الرئيسية في *نظام مراقبة الأرض التابع لناسا*. للحصول على معلومات كاملة، راجع [الترخيص](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>بيانات DEM (DSM)</summary>
<div dir="rtl">
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. تم توفير البيانات الأصلية المستخدمة لهذا المنتج بواسطة AW3D التابع لـ JAXA.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">نماذج التضاريس الرقمية LiDAR لسوني في أوروبا</a> (DTM).
</div>
</details>


### الرسم البياني للارتفاع {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل المسار](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

تعرض [الرسوم البيانية](../../map/tracks/track-context-menu.md#altitude--speed-graphs) بصريًا معلومات حول الارتفاع والانحدار لمسار الملاحة الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع والانحدار الحاليين. يتم رسم الرسم البياني على محورين. المحور السيني (X) هو المسافة على مسارك. المحور الصادي الأول (Y) هو الارتفاع فوق مستوى سطح البحر، وتعتمد قيمته على التضاريس، والمحور الصادي الثاني (Y) هو [الانحدار](https://en.wikipedia.org/wiki/Grade_(slope)) التقريبي. يمكنك عرض الرسم البياني للارتفاع للمسار بأكمله أو فقط لفترة محددة عن طريق تغيير مقياس الرسم البياني.

- ***تكبير/تصغير***. بشكل افتراضي، يعرض الرسم البياني المسار من الموقع الحالي إلى وجهتك. يمكنك استخدام [حركات إصبعين](../../map/interact-with-map.md#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، للأمام على المسار، وللخلف إلى الموقع الحالي. *تشير هذه التلاعبات أيضًا إلى الكتلة المرئية للمعلومات في كتلة [سمات الطريق](#road-attributes).*

- ***دبوس الموقع***. إذا كنت ترغب في رؤية المعلومات في نقطة معينة أمامك على مسارك، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر مع نسبة الارتفاع والانحدار.


## التحليل على الخريطة {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل المسار أندرويد](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تفاصيل المسار iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

أداة **التحليل على الخريطة** تشبه أداة عرض [تفاصيل المسار](../../map/tracks/index.md#analyze-track-on-map) على الخريطة. تتيح لك عرض الرسوم البيانية المختلفة والتفاعل معها بصريًا ورؤية النقطة المحددة على الخريطة.

إذا كانت البيانات موجودة، يمكنك تحديد أحد الأنواع التالية:

- *المحور الصادي (Y)*:
   - [*الارتفاع*](../../map/tracks/track-context-menu.md#altitude). هذه هي [عملية](https://wiki.openstreetmap.org/wiki/Altitude) الحصول على الارتفاع فوق مستوى ثابت.
   - [*الانحدار*](https://wiki.openstreetmap.org/wiki/Key:incline). [انحدار التضاريس](https://en.wikipedia.org/wiki/Grade_(slope)) يعني ظل زاوية ميل السطح إلى الأفقي.
   - [*السرعة*](../../map/tracks/track-context-menu.md#speed). قيم السرعة عند القيادة على مسار.
   - رسوم بيانية بنوعين من البيانات: &nbsp;*الارتفاع/الانحدار*، &nbsp;*الارتفاع/السرعة*، &nbsp;*الانحدار/السرعة*، &nbsp;*تكبير متحرك/السرعة*.
- *المحور السيني (X)*:
   - *المسافة*. يمكنك عرض بيانات المسار التي تتعلق بطول المسار.
   - *الوقت*. يمكنك عرض بيانات المسار التي تتعلق بالوقت المحسوب لذلك المسار.
   - *وقت اليوم*. يمكنك عرض بيانات المسار في أوقات معينة من اليوم.


### أنواع التفاعلات {#type-of-interactions}

- *النقر والسحب*. انقر على الرسم البياني لعرض معلومات حول نقطة المسار والحركة على طوله. يبرز الرسم البياني موقع النقطة على الخريطة ويعرض معلومات عنها على المسطرة.
- *تغيير المقياس*. قم بتغيير مقياس الرسم البياني بـ [إيماءة إصبعين](../../map/interact-with-map.md#gestures).
- *متابعة موقعي* (*أندرويد فقط*). يمكنك النقر على [موقعي](../../map/interact-with-map.md#my-location-and-zoom) لمزامنة عرض الخريطة والرسم البياني مع موقعك. أثناء تحركك، سينتقل الرسم البياني من اليسار إلى اليمين، ويعرض المعلومات أمام مسارك.


## سمات الطريق {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![مسار الملاحة أندرويد](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![مسار الملاحة iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

يمكن الوصول إلى سمات الطريق في [تفاصيل المسار](#how-to-access) وتعرض معلومات متعلقة بالمقاطع من بيانات OpenStreetMap وبيانات الارتفاع. يرتبط مؤشر اللون بكيفية عرض سمات معينة على الخريطة (انظر [مفتاح الخريطة](../../map-legend/osmand.md#surface-smoothness)). الرسوم البيانية الشريطية تفاعلية أيضًا، ومن الممكن رؤية المعلومات في موقع محدد عن طريق النقر على الرسم البياني.

- [**نوع الطريق**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). يتم تحديد نوع الطريق بناءً على غرضه الوظيفي وخصائصه، مثل عدد الحارات، وحدود السرعة، والقدرة الاستيعابية للحمولة، ووجود مسارات للمشاة والدراجات، وجوانب الطرق، وغيرها من المعلمات. قد يكون لأنواع الطرق المختلفة قيود وقواعد مرور مختلفة.

   على سبيل المثال، عادةً ما يكون لـ [الطرق السريعة](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) الرئيسية حد سرعة مرتفع ويمكن تقسيمها إلى حارات، ويمكن أن يكون لـ [الطرق المحلية](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) حد سرعة منخفض وحارة واحدة في كل اتجاه.

- [**السطح**](https://wiki.openstreetmap.org/wiki/Key:surface). أسطح الطرق هي الطبقة العليا من الرصيف التي تتلامس مع عجلات المركبات. يمكن أن تكون من أنواع مختلفة اعتمادًا على خصائصها وغرضها الوظيفي.

   على سبيل المثال، يوفر رصيف [الأسفلت](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) احتكاكًا جيدًا وعزلًا للضوضاء، ورصيف [الخرسانة](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) أكثر متانة وله قدرة استيعابية أكبر للحمولة. يمكن أيضًا استخدام مواد أخرى مثل الحصى والحجر المكسر والألواح الخشبية وغيرها لإنشاء سطح طريق.

- [**الانحدار**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). هذا قياس لزاوية ميل الطريق، معبرًا عنه كنسبة مئوية. يشير إلى مدى انحدار الطريق صعودًا أو هبوطًا بالنسبة للأفق، ويتم حسابه عن طريق قياس التغير الرأسي في ارتفاع الطريق على المسافة الأفقية وضرب القيمة الناتجة في 100٪.

   على سبيل المثال، إذا كان انحدار الطريق 10٪، فهذا يعني أنه لكل 100 متر من المسافة الأفقية على طول الطريق، فإنك تصعد أو تهبط 10 أمتار. يمكن أن يؤثر انحدار الطريق على سرعة مركبتك، والفرملة، واستهلاك الوقود، وسلامة القيادة، خاصة على الطرق الزلقة في فصل الشتاء.

- [**صلابة السطح**](https://wiki.openstreetmap.org/wiki/Key:tracktype). يمكن لسطح الطريق أن يتعافى من التشوه أو الحمل. كلما زادت صلابة السطح، قل احتمال تلف المركبة وزادت راحة الطريق. يمكن أن تؤثر صلابة السطح أيضًا على سرعة المركبة واستهلاك الوقود.

- [**الميل**](https://wiki.openstreetmap.org/wiki/Key:incline). يشير إلى النسبة المئوية للمنحدرات الموجودة على مسارك.

- [**النعومة**](https://wiki.openstreetmap.org/wiki/Key:smoothness). ينطبق على جميع أنواع المسارات والمناطق، مثل الطرق السريعة ومواقف السيارات والشواطئ والممرات، ويشير إلى قابلية استخدام المسار. يمنحك معلومات تفيد بأنه يمكنك القيادة دون مخاطر كبيرة من التلف، مثل الهيكل السفلي للمركبة، أو الإصابة، مثل السقوط.

- [**الطرق الشتوية والجليدية**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). يعرض نظام ألوان المسار وفقًا لتصنيف [الطرق الشتوية](../../map/vector-maps.md#winter-and-ski).

- [**صعوبة مسارات الخيل**](https://wiki.openstreetmap.org/wiki/Riding). تشير سمة الطريق هذه إلى صعوبة المسار أثناء ركوب الخيل. مناسب لـ [توجيه ركوب الخيل](../../navigation/routing/horse-routing.md).


## معلومات الانعطافات {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

توفر معلومات الانعطافات [تعليمات](#instructions) مفصلة حول كيفية التنقل في المسار. بالإضافة إلى قائمة *التفاصيل*، يتم عرضها أيضًا في ودجات [*مناورات المسار*](../../widgets/nav-widgets.md#route-guidance) و[*الحارات*](../../widgets/nav-widgets.md#lanes). تساعدك هذه المعلومات على التنقل بشكل أفضل في مسارك وتسمح لك بالتخطيط المسبق.

انقر على قسم معين من المسار في القائمة لعرض معلومات مفصلة أو إجراء تغييرات حسب الحاجة. يتم تكبير الخريطة وفتح [قائمة السياق](../../map/map-context-menu.md).


### التعليمات {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

تتضمن التعليمات معلومات حول التحرك على طول المسار، مثل:

- [*سهم الانعطاف التالي*](../../widgets/nav-widgets.md#next-turn) و*اتجاهه*.
- *المسافة إلى المناورة*.
- وصف *ما يجب فعله*، والذي يتضمن *اسم الشارع أو الممر*.
- *المسافة الإجمالية* و*وقت المسار*.
- *تخطيط [الحارات](../../widgets/nav-widgets.md#lanes)* للطريق الحالي.
- [*مؤشر جانب الطريق*](#roadside-indicator) (*iOS فقط*).


### مؤشر جانب الطريق {#roadside-indicator}

:::caution iOS فقط
هذا النوع من التعليمات *غير متوفر حاليًا* لنسخة أندرويد من تطبيق OsmAnd.
:::

![مؤشر الجانب](@site/static/img/navigation/route/side_indication.png)

في قائمة التعليمات، يوضح **مؤشر جانب الطريق** الاتجاه من موقعك الحالي واتجاه الحركة إلى وجهتك النهائية، يمكن أن يكون هذا يسارًا ويمينًا ومستقيمًا للأمام.

يتم قياس الزاوية بين وجهتك (*[الاتجاه](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) من آخر نقطة*) وآخر مقطع (*الاتجاه إلى آخر نقطتين من المسار*)، وتقسيمها إلى 3 قطاعات من 120 درجة، والنتيجة هي أنه يمكنك رؤية الاتجاه الذي تقع فيه وجهتك.

- `-60 °`&nbsp; &nbsp; &nbsp; إلى &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - تُحدد كـ **للأمام مباشرة**.
- `-180 °`&nbsp; &nbsp; إلى &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - تُحدد كـ جانب **أيسر**.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; إلى &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - تُحدد كـ جانب **أيمن**.


### طباعة {#print}

<InfoAndroidOnly/>

![تفاصيل المسار](@site/static/img/navigation/route/route_details_print-2.png)

يمكن أن تكون ميزة **الطباعة** لوصف مسار منعطف بمنعطف مفيدة إذا كنت تفضل الحصول على نسخة مادية من وصف مسارك بدلاً من استخدام الأجهزة الإلكترونية، أو إذا لم يكن لديك وصول إلى تطبيقات الملاحة أو أجهزة الملاحة GPS، أو لا يوجد اتصال بالإنترنت، أو إذا كنت بحاجة إلى معلومات لأشخاص آخرين يسافرون معك.

يوفر وصف المسار المطبوع *تعليمات مفصلة منعطف بمنعطف* حول كيفية التنقل في مسارك، بما في ذلك المسافة إلى الانعطاف التالي، واتجاه القيادة، وأسماء الشوارع أو الممرات، بالإضافة إلى معلومات المسافة ووقت الرحلة.

يمكن أن تكون هذه المعلومات مفيدة عند التخطيط لرحلة وترغب في تقدير الوقت والمسافة بين نقاط مختلفة على المسار وتحديد وقت الوصول المتوقع.

تعد القدرة على **طباعة** أو **حفظ** معلومات الانعطافات **بتنسيق PDF** مفيدة بشكل خاص عند السفر لمسافات طويلة أو في أماكن غير مألوفة عندما تحتاج إلى فكرة أكثر تفصيلاً عن المسار والوقت الذي يستغرقه للوصول إلى هناك.


## مشاركة / تصدير (إجراءات) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسار الملاحة أندرويد](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسار الملاحة iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

يحتوي قسم الملاحة في تفاصيل المسار على خيارات تتيح لك تنفيذ إجراءات معينة بمعلومات المسار.

- [**طباعة**](#print). يسمح لك بطباعة أو حفظ معلومات المسار منعطف بمنعطف.
- **تصدير/حفظ**. يسمح لك بحفظ معلومات المسار **كمسار جديد** للاستخدام لاحقًا دون اتصال بالإنترنت. يحتوي المسار المصدر على جميع المعلومات حول سمات الطريق وتعليمات الانعطاف. لذا، يجب أن توفر [الملاحة بواسطة هذا المسار](./gpx-navigation.md) جميع الميزات مثل الملاحة بواسطة المسار.
- **مشاركة**. يشارك مسارًا مصدرًا أو رابطًا إلى المسار يمكن فتحه على جهاز آخر مثبت عليه OsmAnd.


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [الملاحة بواسطة مسار](./gpx-navigation.md)
- [الملاحة بواسطة العلامات](./markers-navigation.md)
- [إعدادات الملاحة](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء الملاحة](../guidance/map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)