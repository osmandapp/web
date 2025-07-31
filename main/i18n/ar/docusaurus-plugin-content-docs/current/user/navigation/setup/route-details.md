---
source-hash: c79e974f36d7aa431b244d904400ae8e4b3fa0f00f5d843333d559e34b86a4b7
sidebar_position: 4
title: تفاصيل المسار
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

يتيح لك OsmAnd العثور على أفضل مسار واستكشاف تفاصيله. يوفر التطبيق معلومات مفصلة حول المسار مثل المسافة، [وقت السفر](#distance--time--co2)، [ونوع السطح](#road-attributes)، [واختلافات الارتفاع](#elevation-info)، [وبيانات بصمة الكربون (CO2)](#distance--time--co2)، [ومعلومات الانعطاف](#turn-by-turn-information). يمكنك أيضًا [تحليل](#analyze-on-map) المسار على الخريطة، ومعرفة معلومات حول أجزاء المسار، [وطباعة](#print) خطة المسار، [وحفظ](#share--export-actions) المسار، ومشاركته مع الآخرين. باستخدام هذه الوظيفة، ستعرف دائمًا تفاصيل المسار ويمكنك تخطيط رحلتك بكفاءة أكبر.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Route details Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>

### كيفية الوصول {#how-to-access}

بعد حساب مسار في [قائمة التنقل](./route-navigation.md#start--stop-navigation)، يمكنك الوصول إلى "التفاصيل" حول هذا المسار. هذه المعلومات مفيدة للاستخدام قبل بدء الرحلة لتحسين تخطيط المسار أو للتحقق من معلومات حول الطريق أمامك أثناء القيادة.
هناك ثلاث طرق للوصول إلى قائمة *تفاصيل المسار*.

1. انتقل إلى *القائمة الرئيسية ← التنقل*، اضبط المسار، ثم اضغط على زر *التفاصيل*.
2. اضغط على أيقونة *التنقل* على شاشة الخريطة، اضبط المسار، ثم اضغط على زر *التفاصيل*.
3. انتقل إلى قائمة *أماكني*، اضغط على أي مسار متاح في القائمة *القائمة الرئيسية ← أماكني ← المسارات*، حدد أيقونة *التنقل* في قائمة سياق المسار في *نظرة عامة*، ثم اضغط على *التفاصيل*.

اعتمادًا على [إعدادات الملف الشخصي](../../personal/profiles.md) المحددة ونوع [التوجيه](../../navigation/routing/osmand-routing.md#routing-types) المحدد، قد لا يتم عرض بعض تفاصيل المسار. بالإضافة إلى ذلك، تعتمد تفاصيل المسار بشكل كبير على *تغطية بيانات OpenStreetMap*.

## المسافة / الوقت / ثاني أكسيد الكربون {#distance--time--co2}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***المسافة الإجمالية*** تُحسب بين جميع أجزاء المسار، بما في ذلك النقاط الوسيطة في [الوحدات](../../personal/profiles.md#units--formats) المحددة.

- ***الوقت المقدر للسفر*** يُحسب كمجموع الأوقات على كل جزء وعقوبات الوقت في نقاط محددة. لكل ملف تعريف تنقل قواعد مختلفة لحساب السرعة على جزء وما هي العقوبات التي يجب تضمينها (مُكوّنة في [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). على سبيل المثال، تأخذ ملفات تعريف السيارة والدراجة متوسط السرعة لكل جزء من بيانات OpenStreetMap، ولكن ملفات تعريف المشاة والقوارب والطائرات تستخدم سرعة *افتراضية* من [إعدادات التنقل](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***الوقت المقدر للوصول*** يُحسب كوقت من الآن بالتوقيت المحلي للمنطقة الأصلية باستخدام *الوقت المقدر للسفر*.

- ***بيانات بصمة الكربون (CO2)*** تُقدّر تقريبًا كمية ثاني أكسيد الكربون التي ستُنتج أثناء اتباع المسار. تحتاج إلى تكوين [نوع محرك الوقود](../guidance/navigation-settings.md#fuel-used-by-motor) في معلمات المركبة للحصول على تقدير أكثر دقة.

## معلومات الارتفاع {#elevation-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**معلومات الارتفاع** متوفرة في جميع ملفات تعريف مسارات OsmAnd غير المتصلة بالإنترنت، باستثناء الملفات التعريفية التي تستخدم [التنقل بخط مستقيم](../routing/straight-line-routing.md). بيانات الارتفاع هي جزء من خرائط OsmAnd غير المتصلة بالإنترنت ويتم حسابها بناءً على [مصادر SRTM العامة](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *نطاق الارتفاع*. يعرض الحد الأدنى / الأقصى للارتفاع على المسار.
- *متوسط الارتفاع*. يعرض متوسط الارتفاع المرجح على المسار.
- *صعودًا / نزولًا*. يعرض نسبة المسار إلى الأفقي، حيث يشير الصفر إلى الأفقية ويشير عدد الدرجات إلى درجة ميل أعلى أو أكثر انحدارًا. يوضح الميل أقصى انحدار للطريق بالنسبة المئوية من نقطة موقعك إلى نهاية الرسم البياني المرئي، أو للجزء المحدد من المسار بدون نقطة الموقع المرئية على الشاشة.

***ترخيص بيانات DEM المستخدمة بواسطة OsmAnd للكشف عن التضاريس***
تم الحصول على بيانات الارتفاع على الخريطة (بين 70 درجة شمال خط العرض و 70 درجة جنوب خط العرض) من القياسات التي تمت كجزء من *مهمة تضاريس الرادار المكوكية (SRTM)*. وقد استخدمت *مقياس الإشعاع الحراري والانبعاثات الفضائية المتقدم (ASTER)*، الأداة الرئيسية للتصوير في *نظام مراقبة الأرض التابع لناسا*. للحصول على معلومات كاملة، راجع [الترخيص](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).

<details>
<summary>بيانات DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. تم توفير البيانات الأصلية المستخدمة لهذا المنتج بواسطة AW3D من JAXA.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: بورتر، كلير؛ مورين، بول؛ هاوات، إيان؛ نوه، ميونغ-جون؛ بيتس، براين؛ بيترمان، كينيث؛ كيسي، سكوت؛ شلينك، ماثيو؛ غاردينر، جوديث؛ تومكو، كارين؛ ويليس، مايكل؛ كيليهير، كول؛ كلوتييه، مايكل؛ هاسبي، إريك؛ فوغا، ستيفن؛ ناكامورا، هيتومي؛ بلاتسون، ميليسا؛ ويذينغتون، مايكل، الابن؛ ويليامسون، كاثلين؛ باور، غريغوري؛ إينوس، جيريمي؛ أرنولد، غالن؛ كرامر، ويليام؛ بيكر، بيتر؛ دوشي، أبهيجيت؛ دي سوزا، كريستيل؛ كومنز، بات؛ لورييه، فابيان؛ بوجيسن، ميكيل، 2018، “ArcticDEM”، هارفارد داتافيرس، V1.<br/>
 - <a href="https://sonny.4lima.de">نماذج التضاريس الرقمية LiDAR من سوني لأوروبا</a> (DTM).

</details>

### رسم بياني للارتفاع {#elevation-graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Route details](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

تعرض [الرسوم البيانية](../../map/tracks/track-context-menu.md#altitude--speed-graphs) معلومات مرئية حول ارتفاع وميل مسار التنقل الخاص بك وموقعك الحالي على هذا الرسم البياني مع الارتفاع والميل الحاليين. يتم رسم الرسم البياني على محورين. المحور السيني هو المسافة على مسارك. المحور الصادي الأول هو الارتفاع فوق مستوى سطح البحر، وتعتمد قيمته على التضاريس، والمحور الصادي الثاني هو [الميل](https://en.wikipedia.org/wiki/Grade_(slope)) التقريبي. يمكنك عرض رسم بياني للارتفاع للمسار بأكمله أو لفاصل زمني محدد فقط عن طريق تغيير حجم الرسم البياني.

- ***تكبير/تصغير***. بشكل افتراضي، يعرض الرسم البياني المسار من الموقع الحالي إلى نقطة وجهتك. يمكنك استخدام [حركات الإصبعين](../../map/interact-with-map.md#gestures) للتكبير والتصغير للحصول على عرض أكثر تفصيلاً. يمكنك أيضًا تحريك الرسم البياني إلى اليمين، إلى الأمام على المسار، وإلى الخلف إلى الموقع الحالي. *تنطبق هذه التلاعبات أيضًا على الكتلة المرئية للمعلومات في كتلة [سمات الطريق](#road-attributes).*

- ***دبوس الموقع***. إذا كنت ترغب في رؤية المعلومات في نقطة معينة أمامك على مسارك، يمكنك النقر في أي مكان على الرسم البياني وسيظهر مؤشر مع الارتفاع ونسبة الميل.

## تحليل على الخريطة {#analyze-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Route details Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

أداة **التحليل على الخريطة** تشبه أداة عرض [تفاصيل المسار](../../map/tracks/index.md#analyze-track-on-map) على الخريطة. تسمح لك بعرض والتفاعل بصريًا مع الرسوم البيانية المختلفة ورؤية النقطة المحددة على الخريطة.

إذا كانت البيانات موجودة، يمكنك تحديد أحد الأنواع التالية:

- *المحور الصادي*:
   - [*الارتفاع*](../../map/tracks/track-context-menu.md#altitude). هذه هي [العملية](https://wiki.openstreetmap.org/wiki/Altitude) للحصول على الارتفاع فوق مستوى ثابت.
   - [*الميل*](https://wiki.openstreetmap.org/wiki/Key:incline). [ميل التضاريس](https://en.wikipedia.org/wiki/Grade_(slope)) يعني ظل زاوية ميل السطح إلى الأفقي.
   - [*السرعة*](../../map/tracks/track-context-menu.md#speed). قيم السرعة عند القيادة على مسار.
   - رسوم بيانية بنوعين من البيانات: &nbsp;*الارتفاع/الميل*، &nbsp;*الارتفاع/السرعة*، &nbsp;*الميل/السرعة*، &nbsp;*تكبير متحرك/السرعة*.
- *المحور السيني*:
   - *المسافة*. يمكنك عرض بيانات المسار التي تتعلق بطول المسار.
   - *الوقت*. يمكنك عرض بيانات المسار التي تتعلق بالوقت المحسوب لذلك المسار.
   - *وقت اليوم*. يمكنك عرض بيانات المسار في أوقات معينة من اليوم.

### أنواع التفاعلات {#type-of-interactions}

- *الضغط والتمرير*. اضغط على الرسم البياني لعرض معلومات حول نقطة المسار والحركة على طولها. يبرز الرسم البياني موقع النقطة على الخريطة ويعرض معلومات عنها على المسطرة.
- *القياس*. قم بقياس الرسم البياني بواسطة [إيماءة إصبعين](../../map/interact-with-map.md#gestures).
- *اتبع موقعي* (*أندرويد فقط*). يمكنك النقر على [موقعي](../../map/interact-with-map.md#my-location-and-zoom) لمزامنة عرض الخريطة والرسم البياني مع موقعك. أثناء تحركك، سينتقل الرسم البياني من اليسار إلى اليمين، ويعرض معلومات أمام مسارك.

## سمات الطريق {#road-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> علامة التبويب*

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

يمكن الوصول إلى سمات الطريق في [تفاصيل المسار](#how-to-access) وتعرض معلومات متعلقة بالقطاعات من OpenStreetMap وبيانات الارتفاع. يشير اللون إلى كيفية عرض سمات محددة على الخريطة (انظر [مفتاح الخريطة](../../map-legend/osmand.md#surface-smoothness)). الرسوم البيانية الشريطية تفاعلية أيضًا، ومن الممكن رؤية المعلومات في موقع محدد عن طريق النقر على الرسم البياني.

- [**نوع الطريق**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). يتم تحديد نوع الطريق بناءً على غرضه الوظيفي وخصائصه، مثل عدد المسارات، وحدود السرعة، وقدرة التحميل، ووجود مسارات للمشاة والدراجات، وحواف الطرق، ومعلمات أخرى. قد يكون لأنواع الطرق المختلفة قيود وقواعد مرور مختلفة.

   على سبيل المثال، عادة ما تكون [الطرق السريعة](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) الرئيسية ذات حد سرعة عالٍ ويمكن تقسيمها إلى مسارات، ويمكن أن تكون [الطرق المحلية](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) ذات حد سرعة منخفض ومسار واحد في كل اتجاه.

- [**السطح**](https://wiki.openstreetmap.org/wiki/Key:surface). أسطح الطرق هي الطبقة العلوية من الرصيف التي تتلامس مع عجلات المركبات. يمكن أن تكون من أنواع مختلفة حسب خصائصها وغرضها الوظيفي.

   على سبيل المثال، يوفر رصيف [الأسفلت](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) تماسكًا جيدًا وعزلًا للضوضاء، ورصيف [الخرسانة](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) أكثر متانة وله قدرة تحميل أكبر. يمكن أيضًا استخدام مواد أخرى مثل الحصى والحجر المكسر والألواح الخشبية وغيرها لإنشاء سطح طريق.

- [**الانحدار**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). هذا قياس لزاوية ميل الطريق، معبرًا عنها كنسبة مئوية. يشير إلى مدى انحدار الطريق صعودًا أو نزولًا بالنسبة للأفق، ويتم حسابه عن طريق قياس التغير الرأسي في ارتفاع الطريق بالمسافة الأفقية وضرب القيمة الناتجة في 100%.

   على سبيل المثال، إذا كان انحدار الطريق 10%، فهذا يعني أنه لكل 100 متر من المسافة الأفقية على طول الطريق، فإنك تصعد أو تنزل 10 أمتار. يمكن أن يؤثر انحدار الطريق على سرعة سيارتك، والفرملة، واستهلاك الوقود، وسلامة القيادة، خاصة على الطرق الزلقة في الشتاء.

- [**صلابة السطح**](https://wiki.openstreetmap.org/wiki/Key:tracktype). يمكن لسطح الطريق أن يتعافى من التشوه أو الحمل. كلما زادت صلابة السطح، قل احتمال تلف المركبة وزادت راحة الطريق. يمكن أن تؤثر صلابة السطح أيضًا على سرعة المركبة واستهلاك الوقود.

- [**الميل**](https://wiki.openstreetmap.org/wiki/Key:incline). يشير إلى النسبة المئوية للمنحدرات الموجودة على مسارك.

- [**النعومة**](https://wiki.openstreetmap.org/wiki/Key:smoothness). تنطبق على جميع أنواع المسارات والمناطق، مثل الطرق السريعة ومواقف السيارات والشواطئ والمسارات، وتشير إلى مدى قابلية استخدام المسار. تمنحك معلومات تفيد بأنه يمكنك القيادة دون خطر كبير من التلف، مثل الجزء السفلي من السيارة، أو الإصابة، مثل السقوط.

- [**طرق الشتاء والجليد**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). يعرض نظام الألوان للمسار وفقًا لتصنيف [طرق الشتاء](../../map/vector-maps.md#winter-and-ski).

- [**صعوبة مسارات الخيل**](https://wiki.openstreetmap.org/wiki/Riding). تشير هذه السمة للطريق إلى صعوبة المسار أثناء ركوب الخيل. مناسبة [لتوجيه الخيل](../../navigation/routing/horse-routing.md).

## معلومات التوجيه خطوة بخطوة {#turn-by-turn-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

توفر معلومات التوجيه خطوة بخطوة [تعليمات](#instructions) مفصلة حول كيفية التنقل في المسار. بالإضافة إلى قائمة *التفاصيل*، يتم عرضها أيضًا في أدوات [*مناورات المسار*](../../widgets/nav-widgets.md#route-maneuvers) و[*المسارات*](../../widgets/nav-widgets.md#lanes). تساعدك هذه المعلومات على التنقل بشكل أفضل في مسارك وتسمح لك بالتخطيط المسبق.

اضغط على قسم معين من المسار في القائمة لعرض معلومات مفصلة أو إجراء تغييرات حسب الحاجة. تتسع الخريطة وتفتح [قائمة السياق](../../map/map-context-menu.md).

### التعليمات {#instructions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

تتضمن التعليمات معلومات حول التحرك على طول المسار، مثل:

- [سهم الانعطاف التالي](../../widgets/nav-widgets.md#next-turn) و*اتجاهه*.
- *المسافة إلى المناورة*.
- وصف *ما يجب فعله*، والذي يتضمن *اسم الشارع أو المسار*.
- *المسافة الإجمالية* و*وقت المسار*.
- تخطيط [المسارات](../../widgets/nav-widgets.md#lanes) للطريق الحالي.
- [مؤشر جانب الطريق](#roadside-indicator) (*iOS فقط*).

### مؤشر جانب الطريق {#roadside-indicator}

:::caution iOS فقط
هذا النوع من التعليمات *غير متاح حاليًا لإصدار أندرويد* من تطبيق OsmAnd.
:::

![Side indication](@site/static/img/navigation/route/side_indication.png)

في قائمة التعليمات، يشير **مؤشر جانب الطريق** إلى الاتجاه من موقعك الحالي واتجاه الحركة إلى نقطة وجهتك، يمكن أن يكون هذا يسارًا أو يمينًا أو مستقيمًا للأمام.

يتم قياس الزاوية بين وجهتك (*[الاتجاه](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) من آخر نقطة*) والجزء الأخير (*الاتجاه إلى آخر نقطتين من المسار*)، وتقسيمها إلى 3 قطاعات من 120 درجة، والنتيجة هي أنه يمكنك رؤية الاتجاه الذي توجد فيه وجهتك.

- `-60 °` &nbsp; &nbsp; &nbsp; إلى &nbsp; &nbsp;`60 °` &nbsp; &nbsp; &nbsp; - معلمة على أنها **مستقيم للأمام**.
- `-180 °` &nbsp; &nbsp; إلى &nbsp; &nbsp;`-60 °` &nbsp; &nbsp; - معلمة على أنها جانب **يسار**.
- `60 °` &nbsp; &nbsp; &nbsp; &nbsp; إلى &nbsp; &nbsp;`180 °` &nbsp; &nbsp; - معلمة على أنها جانب **يمين**.

### طباعة {#print}

<InfoAndroidOnly/>

![route details](@site/static/img/navigation/route/route_details_print-2.png)

يمكن أن تكون ميزة **الطباعة** لوصف المسار خطوة بخطوة مفيدة إذا كنت تفضل الحصول على نسخة ورقية من وصف المسار بدلاً من استخدام الأجهزة الإلكترونية، أو إذا لم يكن لديك وصول إلى تطبيقات التنقل أو أجهزة تحديد المواقع (GPS)، أو لا يوجد اتصال بالإنترنت، أو إذا كنت بحاجة إلى معلومات لأشخاص آخرين يسافرون معك.

يوفر وصف المسار المطبوع *تعليمات مفصلة خطوة بخطوة* حول كيفية التنقل في مسارك، بما في ذلك المسافة إلى الانعطاف التالي، واتجاه القيادة، وأسماء الشوارع أو المسارات، بالإضافة إلى معلومات المسافة ووقت السفر.

يمكن أن تكون هذه المعلومات مفيدة عند التخطيط لرحلة وترغب في تقدير الوقت والمسافة بين نقاط مختلفة على المسار وتحديد الوقت المتوقع للوصول.

تعد القدرة على **طباعة** أو **حفظ** معلومات التوجيه خطوة بخطوة **بتنسيق PDF** مفيدة بشكل خاص عند السفر لمسافات طويلة أو في أماكن غير مألوفة عندما تحتاج إلى فكرة أكثر تفصيلاً عن المسار والوقت الذي يستغرقه الوصول إلى هناك.

## مشاركة / تصدير (إجراءات) {#share--export-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

يحتوي قسم التنقل في تفاصيل المسار على خيارات تسمح لك بتنفيذ إجراءات معينة باستخدام معلومات المسار.

- [**طباعة**](#print). يسمح لك بطباعة أو حفظ معلومات المسار خطوة بخطوة.
- **تصدير/حفظ**. يسمح لك بحفظ معلومات المسار **كمسار جديد** للاستخدام لاحقًا دون اتصال بالإنترنت. يحتوي المسار المصدر على جميع المعلومات حول سمات الطريق وتعليمات الانعطاف. لذا، يجب أن يوفر [التنقل بهذا المسار](./gpx-navigation.md) جميع الميزات كتنقل بالمسار.
- **مشاركة**. يشارك مسارًا مصدرًا أو رابطًا إلى المسار يمكن فتحه على جهاز آخر باستخدام OsmAnd.

## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](./route-navigation.md)
- [التنقل بالمسار](./gpx-navigation.md)
- [التنقل بالعلامات](./markers-navigation.md)
- [إعدادات التنقل](../guidance/navigation-settings.md)
- [شاشة الخريطة أثناء التنقل](../guidance/map-during-navigation.md)
- [التوجيهات الصوتية / الإشعارات](../guidance/voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: نوفمبر 2024*