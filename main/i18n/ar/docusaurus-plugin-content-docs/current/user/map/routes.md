---
source-hash: 24073bbbba8108ac4befa02adbada3ce95bc6b6c5197b214d7ffa297c6ee56c5
sidebar_position: 10
title:  المسارات
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

يحتوي OsmAnd على العديد من الميزات القوية لعرض [المسارات](#type-of-routes) المختلفة على الخريطة. بشكل افتراضي، هذه المسارات هي جزء من [خرائط المتجهات](./vector-maps.md#routes) (بيانات OpenStreetMap)، ومع ذلك، يتم توفير وظائف مماثلة بواسطة [المسارات](./tracks/index.md) التي يمكن إنشاؤها باستخدام [تخطيط مسار](../plan-route/create-route.md)، أو استيرادها كـ [مسارات GPX](#save-as-a-track)، أو تسجيلها باستخدام [المكون الإضافي لتسجيل الرحلات](../plugins/trip-recording.md).

## أنواع المسارات {#type-of-routes}

تمثل المسارات أنشطة خارجية مختلفة باستخدام بيانات من [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). سيؤدي النقر على **أيقونة الدرع التي تحتوي على رقم المسار أو علم المسار** على الخريطة إلى فتح قائمة سياقية توفر معلومات إضافية حول المسار وتسمح باستخدامه كجزء من التنقل.

يمكنك تكوين تصفية بعض أنواع المسارات في قائمة [تكوين الخريطة](../map/configure-map-menu.md).

### مسارات الدراجات {#cycle-routes}

توجد [مسارات الدراجات](https://wiki.openstreetmap.org/wiki/Cycle_routes) في ثلاثة أنواع: *محلية* (`lcn`)، *إقليمية* (`rcn`)، *وطنية* (`ncn`)، *ودولية* (`icn`). كما يمكن أن تكون مسارات الدراجات جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). يمكنك اختيار كيفية تعيين اللون لأجزاء المسار:

- ***<Translate android="true" ids="layer_route"/>***.
![مسارات الخريطة - مسارات الدراجات](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.
![مسارات الخريطة - شبكات عقد الدراجات](@site/static/img/map/map-routes-cycle-node-networks.png)

يمكنك العثور على مزيد من المعلومات في مقال [دليل الخريطة](../map-legend/index.md).

### مسارات الدراجات الجبلية {#mountain-bike-routes}

تتمتع مسارات الدراجات الجبلية (MTB) بتعيين خاص في [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) ويمكن اختيارها بشكل منفصل عن مسارات ركوب الدراجات.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  يعرض المسارات وفقًا لمقياس MTB. مزيد من المعلومات موجودة في مقال [دليل الخريطة](../map-legend/index.md).
![مسارات الخريطة - مسارات MTB](@site/static/img/map/map-routes-mtb-trails.png)

- ***<Translate android="true" ids="mtb_imba"/>***.  يعرض مسارات MTB وفقًا للاتحاد الدولي للدراجات الجبلية، [MTB IMBA](https://www.imba.com/). مزيد من المعلومات موجودة في مقال [دليل الخريطة](../map-legend/index.md).
![مسارات الخريطة - مسارات MTB IMBA](@site/static/img/map/map-routes-mtb_imba-trails.png)

### مسارات المشي / التنزه {#hiking--walking-routes}

توجد [مسارات المشي](https://wiki.openstreetmap.org/wiki/Walking_Routes) في ثلاثة أنواع: *محلية* (`lwn`)، *إقليمية* (`rwn`)، *وطنية* (`nwn`)، *ودولية* (`iwn`). كما يمكن أن تكون مسارات المشي جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). لا يفصل OsmAnd مسارات المشي والتنزه ويجمعها في مجموعة واحدة. يمكنك اختيار كيفية تعيين اللون لأجزاء المسار:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  يلون المسارات وفقًا [للونها المحلي](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (إذا كان متاحًا في OpenStreetMap) ورمز الدرع السياحي.
![مسارات الخريطة - OSMC للمشي لمسافات طويلة](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  يلون حسب [الانتماء إلى الشبكة](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).
![مسارات الخريطة - شبكة المشي لمسافات طويلة](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  يلون المسارات وفقًا لنوع [شبكة العقد](https://wiki.openstreetmap.org/wiki/Node_Networks) (دولية، إقليمية، أو محلية).
![مسارات الخريطة - شبكات عقد المشي لمسافات طويلة](@site/static/img/map/map-routes-hiking-node-networks.png)

### مسارات الدراجات الترابية {#dirt-bike-trails}

![مسارات الخريطة - مسارات الدراجات الترابية](@site/static/img/map/map-routes-dirt-bike-trails.png)

تتيح لك ميزة **مسارات الدراجات الترابية** عرض مسارات الدراجات الترابية الخاصة على الخريطة بناءً على علامة `dirtbike:scale`. يسلط هذا المقياس الضوء على المسارات المناسبة لركوب الدراجات الترابية، مع تراكب ملون يوضح مستويات الصعوبة.

يمكنك تفعيل هذه الميزة في *القائمة ← تكوين الخريطة ← المسارات ← مسارات الدراجات الترابية*. يعمل النظام بشكل مشابه لمقياس MTB، حيث يوفر تمثيلاً مرئيًا للمسارات المصممة لركوب الدراجات الترابية — يمكن العثور على مزيد من المعلومات حول علامة [`dirtbike` هنا](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).

### مسارات التسلق {#climbing-routes}

![مسارات الخريطة - مسارات التسلق](@site/static/img/map/map-routes-climbing-routes.png)

يدعم OsmAnd *مناطق التسلق* (`climbing=area`) و *جروف التسلق* (`climbing=crag`)، مما يتيح لك العثور على مواقع [تسلق الصخور](https://wiki.openstreetmap.org/wiki/Climbing) مباشرة على الخريطة.

- تمثل **مناطق التسلق** **مناطق أكبر** حيث توجد مسارات تسلق متعددة.

- تشير **جروف التسلق** إلى **تشكيلات صخرية محددة** أو جدران مناسبة للتسلق.

- تتضمن هذه المواقع **سمات تفصيلية** مثل:

    - *درجة التسلق* (مثل UIAA، الفرنسية، YDS).
    - *نوع الصخر* (مثل الحجر الجيري، الجرانيت).
    - *طول المسار* (بالمتر).
    - *جودة التسلق* (صلب، مفكك، مختلط).
    - *توفر سجل القمة*.

لتمكين مواقع التسلق على الخريطة، انتقل إلى: *القائمة ← تكوين الخريطة ← المسارات ← مسارات التسلق*.

### درجة صعوبة مسارات المشي لمسافات طويلة {#hiking-trails-difficulty-grade}

![مسارات الخريطة - المشي لمسافات طويلة في جبال الألب](@site/static/img/map/map-routes-alpine-hiking.png)

يمكن أن تكون بعض أجزاء الطريق جزءًا من العديد من المسارات، ولكن يمكن تلوينها بشكل فردي لتمثيل صعوبة الجزء في المناطق الجبلية. يدعم OsmAnd حاليًا التصنيفات الإيطالية والسويسرية، ولكل منها قائمة محددة من متطلبات المعدات للوصول إلى هذا الجزء.

1. [مقياس SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [مقياس CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)

### مسارات التزلج {#ski-routes}

![مسارات الخريطة - منحدرات التزلج](@site/static/img/map/map-routes-ski-slopes.png)

مسارات التزلج هي مجموعة محددة من [المسارات](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) في OpenStreetMap. عادةً، يمكن استخدام هذه المسارات مع نمط خريطة [الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) مع جميع [منحدرات التزلج](https://wiki.openstreetmap.org/wiki/Pistes) المرئية.

### مسارات الخيل {#horse-routes}

![مسارات الخريطة - مسارات الخيل](@site/static/img/map/map-routes-horse.png)

تُعرض [مسارات الخيل](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) كمسارات ملونة مع رموز لركوب الخيل.

### الرياضات المائية البيضاء {#whitewater-sports}

![مسارات الخريطة - الرياضات المائية البيضاء](@site/static/img/map/map-routes-whitewater-sport.png)

تُعرض [مسارات المياه البيضاء](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) مع أيقونات الوصول ومناطق الخطر [للسياحة المائية البيضاء](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).

### مسارات الجري {#running-routes}

![مسارات اللياقة البدنية](@site/static/img/map/fitness_1.png)

تُستخدم [مسارات الجري](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) في OpenStreetMap للمسارات المسماة أو المرقمة أو المحددة بطريقة أخرى، وذلك بشكل أساسي لألعاب القوى.

### مسارات اللياقة البدنية {#fitness-trails}

![مسارات اللياقة البدنية](@site/static/img/map/fitness_route.png)

[مسار اللياقة البدنية](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) هو مسار أو طريق مجهز بعوائق أو محطات على طوله لتمرين جسم الإنسان لتحسين الصحة.

### مسارات السفر {#travel-routes}

<InfoAndroidOnly />

![مسارات السفر](@site/static/img/map/travel_route_2.png) ![مسارات السفر](@site/static/img/map/travel_routes.png)

مسارات السفر هي جزء من ملفات [كتب السفر](../plan-route/travel-guides.md) المخصصة (`travel.obf`)، والتي يمكن إنشاؤها من [مسارات المستخدم](https://osmand.net/blog/routes#generated-travel-routes) أو أن تكون جزءًا من [المكونات الإضافية](../plugins/index.md) الإضافية.

يمكنك تخصيص عرض بعض ***كتب السفر*** وأنواع ***المسارات***، وعرض المسارات كنقاط، أو ***مجموعات نقاط*** (على سبيل المثال لكتب سفر Wikivoyage). تعرف على المزيد حول [أدلة السفر هنا](../plan-route/travel-guides.md).

## عرض المسارات على الخريطة {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![قسم مسارات تكوين الخريطة](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![قائمة المسار iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- لعرض المسارات المطلوبة على الخريطة، قم بتمكينها في *قائمة المسارات* من قائمة [تكوين الخريطة](../map/configure-map-menu.md).
- يمكن لـ OsmAnd تمييز [المسارات الموجودة على OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). يمكن تحديدها بالنقر على [الرمز الموجود على المسار](#save-as-a-track)، وإذا تم تكوين مجموعة المسارات المرئية بشكل صحيح، يمكنك متابعة اللون والأيقونات.
- يمكنك إنشاء مسار فوق المسارات باستخدام أداة [تخطيط مسار](../plan-route/create-route.md).

![مسارات الخريطة - OSMC للمشي لمسافات طويلة](@site/static/img/map/map-routes-hiking-osmc.png)![مسارات الخريطة - شبكات عقد الدراجات](@site/static/img/map/map-routes-cycle-node-networks.png)

## الإجراءات مع المسارات {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![معلومات المسار](@site/static/img/map/routes_osm.png) ![معلومات المسار](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![معلومات المسار](@site/static/img/map/routes_osm_ios.png) ![معلومات المسار](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

على الخريطة، يمكنك تحديد مسارات [للمشي لمسافات طويلة، وركوب الدراجات، والسفر، والمزيد](#type-of-routes)، والتي يتم تمييزها [بأيقونات OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) حيثما ينطبق ذلك.

عند النقر على **رمز المسار** على الخريطة:

- يتم عرض **قائمة بالمسارات القريبة** في ذلك الموقع.
- بعد تحديد مسار من القائمة، تفتح [قائمة سياقية](../map/tracks/track-context-menu.md) لذلك المسار، تعرض معلومات مفصلة وإجراءات متاحة.

في **القائمة السياقية**، يمكنك:

- عرض [معلومات إضافية](#route-info-and-elevation) حول المسار المحدد.
- [حفظ المسار](#save-as-a-track) كـ **مسار GPX**.
- [بدء التنقل](#start-navigation) على طول المسار.

### معلومات المسار والارتفاع {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![معلومات المسار](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![معلومات المسار](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

ستكون المعلومات التالية مرئية في القائمة السياقية:

- **معلومات المسار**: اسم المسار، رابط OSM (يتطلب مكون OSM Editing الإضافي)، النوع، الوصف، المسافة، الاتجاه، الصعود/الهبوط، نطاق الارتفاع، الشبكة، المشغل، الولاية، اللون، الرحلة الدائرية، نقاط البداية/النهاية، والمزيد.
- **عام**: الحجم، الموقع، تاريخ الإنشاء.
- **معلومات إضافية**. يعرض نوع النشاط.
- أزرار الإجراءات: [حفظ باسم](#save-as-a-track) و [بدء التنقل](#start-navigation).
- [معلومات الارتفاع](../navigation/setup/route-details.md#elevation-info). يعرض معلومات حول بيانات الارتفاع على المسار.
- [تحليل المسار على الخريطة](../map/tracks/index.md#analyze-track-on-map). يعرض تحليلًا مفصلاً لبيانات المسار باستخدام الرسوم البيانية والخرائط.

لعرض رسم بياني للارتفاع أو الميل أو تفاصيل الارتفاع لمسار محدد، ما عليك سوى النقر على أي من القيم التالية في القائمة السياقية: **المسافة**، **الصعود**، **الهبوط**، أو **الارتفاع**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### حفظ كمسار {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/routes-4.png) ![المسارات على الأرض](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/hiking.png) ![المسارات على الأرض](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

لحفظ المسار كملف *GPX*، انقر على زر **حفظ (تنزيل)** أسفل [لوحة المعلومات](../map/tracks/track-context-menu.md#info-panel). سيؤدي هذا إلى فتح لوحة أزرار [الإجراءات السريعة](../map/tracks/track-context-menu.md#track-actions) حيث ستتمكن من الوصول إلى إجراءات المسار مثل تغيير [المظهر](./tracks/appearance.md)، [التنقل](../navigation/setup/route-navigation.md)، أو تحرير [تخطيط مسار](../plan-route/create-route.md).

### بدء التنقل {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

لبدء التنقل على طول مسار OSM المحدد، انقر على زر **بدء التنقل** في [**لوحة المعلومات**](../map/tracks/track-context-menu.md#info-panel).

سيؤدي هذا إلى تشغيل وضع [**التنقل حسب المسار**](../navigation/setup/gpx-navigation.md)، مما يتيح لك متابعة المسار مع التوجيه الصوتي وميزات التنقل.

### الإجراءات السريعة {#quick-actions}

يمكنك تخصيص ما إذا كانت المسارات قيد التشغيل أو الإيقاف باستخدام أداة [الإجراء السريع](../widgets/quick-action.md#configure-map).

## البحث عن المسارات {#routes-search}

ابحث عن المسارات باستخدام [وظيفة البحث](../search/index.md) بالاسم أو عن طريق تحديد "المسارات" في [قسم الفئات](../search/search-poi.md#).

للبحث، انتقل إلى قائمة *<Translate android="true" ids="search_button"/>* أو *<Translate android="true" ids="search_button,search_categories"/>* وأدخل نشاطك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

انتقل إلى *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* للعثور على المسارات المطلوبة. تتضمن المسارات الاسم، نوع النشاط، الطول، الموقع، والمسافة إلى أقرب نقطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

استخدم زر الفلاتر (الزاوية العلوية اليمنى) لعرض المسارات المطلوبة فقط.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![المسارات على الأرض](@site/static/img/map/route_search_2.png) ![المسارات على الأرض](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![المسارات على الأرض](@site/static/img/map/route_search_2_ios.png) ![المسارات على الأرض](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](./map-context-menu.md)
- [تكوين الخريطة](./configure-map-menu.md)
- [المسارات](./tracks/index.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)
- [مظهر خط مسار التنقل](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *آخر تحديث: مايو 2025*