---
source-hash: 8b4b667b38727ca309c90df02690584a8e0ee6676ef632e8d21492801ca58e69
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

يحتوي OsmAnd على العديد من الميزات القوية لعرض [المسارات](#type-of-routes) المختلفة على الخريطة. بشكل افتراضي، تكون هذه المسارات جزءًا من [الخرائط المتجهية](./vector-maps.md#routes) (بيانات OpenStreetMap)، ومع ذلك، يتم توفير وظائف مماثلة بواسطة [المسارات](./tracks/index.md) التي يمكن إنشاؤها باستخدام [تخطيط مسار](../plan-route/create-route.md)، أو استيرادها كـ [مسارات GPX](#save-as-a-track)، أو تسجيلها باستخدام [ملحق تسجيل الرحلات](../plugins/trip-recording.md). يمكن العثور على وسيلة إيضاح خريطة المسارات [هنا](../map-legend/osmand.md#routes).


## أنواع المسارات {#type-of-routes}

تمثل المسارات أنشطة خارجية مختلفة باستخدام بيانات من [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). سيؤدي النقر على **أيقونة الدرع التي تحمل رقم المسار أو علم المسار** على الخريطة إلى فتح قائمة سياقية توفر معلومات إضافية حول المسار وتسمح باستخدامه كجزء من الملاحة.

يمكنك تكوين تصفية بعض أنواع المسارات في قائمة [تكوين الخريطة](../map/configure-map-menu.md).

### مسارات الدراجات {#cycle-routes}

توجد [مسارات الدراجات](https://wiki.openstreetmap.org/wiki/Cycle_routes) في ثلاثة أنواع: *محلية* (`lcn`)، و*إقليمية* (`rcn`)، و*وطنية* (`ncn`)، و*دولية* (`icn`). أيضًا، يمكن أن تكون مسارات الدراجات جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). يمكنك اختيار كيفية تعيين لون لقطاعات المسار:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

يمكنك العثور على مزيد من المعلومات في مقالة [وسيلة إيضاح الخريطة](../map-legend/index.md).


### مسارات الدراجات الجبلية {#mountain-bike-routes}

تحتوي مسارات الدراجات الجبلية (MTB) على تخطيط محدد في [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) ويمكن تحديدها بشكل منفصل عن مسارات الدراجات الهوائية.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. يعرض المسارات وفقًا لمقياس MTB. يتوفر المزيد من المعلومات في مقالة [وسيلة إيضاح الخريطة](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. يعرض مسارات MTB وفقًا لجمعية الدراجات الجبلية الدولية، [MTB IMBA](https://www.imba.com/). يتوفر المزيد من المعلومات في مقالة [وسيلة إيضاح الخريطة](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### مسارات المشي لمسافات طويلة / المشي {#hiking--walking-routes}

توجد [مسارات المشي لمسافات طويلة](https://wiki.openstreetmap.org/wiki/Walking_Routes) في ثلاثة أنواع: *محلية* (`lwn`)، و*إقليمية* (`rwn`)، و*وطنية* (`nwn`)، و*دولية* (`iwn`). أيضًا، يمكن أن تكون مسارات المشي جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). لا يفصل OsmAnd بين مسارات المشي والمشي لمسافات طويلة ويجمعها في مجموعة واحدة. يمكنك اختيار كيفية تعيين لون لقطاعات المسار:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. يلون المسارات وفقًا لـ [لونها المحلي](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) الفردي (إذا كان متاحًا في OpenStreetMap) ورمز الدرع السياحي.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. يلون حسب [الانتماء للشبكة](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. يلون المسارات وفقًا لنوع [شبكة العقد](https://wiki.openstreetmap.org/wiki/Node_Networks) (دولية أو إقليمية أو محلية).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### مسارات الدراجات الترابية {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

تتيح لك ميزة **مسارات الدراجات الترابية** عرض مسارات خاصة بالدراجات الترابية على الخريطة بناءً على وسم `dirtbike:scale`. يسلط هذا المقياس الضوء على المسارات المناسبة لركوب الدراجات الترابية، مع تراكب ملون يوضح مستويات الصعوبة ([وسيلة إيضاح الخريطة](../map-legend/osmand.md#routes)).  

يمكنك تفعيل هذه الميزة في *القائمة ← تكوين الخريطة ← المسارات ← مسارات الدراجات الترابية*. يعمل النظام بشكل مشابه لمقياس MTB، حيث يقدم تمثيلاً مرئيًا للمسارات المصممة خصيصًا لركوب الدراجات الترابية — يمكن العثور على المزيد حول [وسم `dirtbike` هنا](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### مسارات التسلق {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

يدعم OsmAnd *مناطق التسلق* (`climbing=area`) و*جروف التسلق* (`climbing=crag`)، مما يتيح لك العثور على مواقع [تسلق الصخور](https://wiki.openstreetmap.org/wiki/Climbing) مباشرة على الخريطة.

- تمثل **مناطق التسلق** **مناطق أكبر** حيث توجد مسارات تسلق متعددة.

- تشير **جروف التسلق** إلى **تكوينات صخرية محددة** أو جدران مناسبة للتسلق.

- تتضمن هذه المواقع **سمات مفصلة** مثل:

    - *درجة التسلق* (على سبيل المثال، UIAA، الفرنسية، YDS).
    - *نوع الصخر* (على سبيل المثال، الحجر الجيري، الجرانيت).
    - *طول المسار* (بالأمتار).
    - *جودة التسلق* (صلبة، مفككة، مختلطة).
    - *توفر سجل القمة*.

لتمكين مواقع التسلق على الخريطة، انتقل إلى: *القائمة ← تكوين الخريطة ← المسارات ← مسارات التسلق*.


### درجة صعوبة مسارات المشي لمسافات طويلة {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

يمكن أن تكون بعض قطاعات الطرق جزءًا من العديد من المسارات، ولكن يمكن تلوينها بشكل فردي لتمثيل صعوبة القطاع في المناطق الجبلية. حاليًا، يدعم OsmAnd التصنيفات الإيطالية والسويسرية، ولكل منها قائمة محددة من متطلبات المعدات للوصول إلى هذا القطاع.  

1. [مقياس SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [مقياس CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### مسارات التزلج {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

مسارات التزلج هي مجموعة محددة من [المسارات](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) في OpenStreetMap. عادةً، يمكن استخدام هذه المسارات مع نمط خريطة [الشتاء والتزلج](../map/vector-maps.md#winter-and-ski) مع جميع [مسارات التزلج](https://wiki.openstreetmap.org/wiki/Pistes) المرئية.  


### مسارات الخيل {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

يتم عرض [مسارات الخيل](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) كمسارات ملونة مع رموز لركوب الخيل.  


### رياضات المياه البيضاء {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

يتم عرض [مسارات المياه البيضاء](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) مع أيقونات الوصول ومناطق الخطر لـ [سياحة المياه البيضاء](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### مسارات الجري {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

تُستخدم [مسارات الجري](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) في OpenStreetMap للمسارات المسماة أو المرقمة أو المميزة بطريقة أخرى، بشكل أساسي لألعاب القوى.


### مسارات اللياقة البدنية {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[مسار اللياقة البدنية](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) هو مسار أو ممر مجهز بعقبات أو محطات على طوله لممارسة التمارين الرياضية لتحسين الصحة.  


### مسارات السفر {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

مسارات السفر هي جزء من ملفات [كتاب السفر](../plan-route/travel-guides.md) المخصصة (`travel.obf`)، والتي يمكن إنشاؤها من [مسارات المستخدم](https://osmand.net/blog/routes#generated-travel-routes) أو تكون جزءًا من [ملحقات](../plugins/index.md) إضافية.  

يمكنك تخصيص عرض بعض ***كتب السفر*** وأنواع ***المسارات***، وعرض المسارات كنقاط، أو ***مجموعات نقاط*** (على سبيل المثال لكتب سفر Wikivoyage). تعرف على المزيد حول [أدلة السفر هنا](../plan-route/travel-guides.md).


## عرض المسارات على الخريطة {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- لعرض المسارات المطلوبة على الخريطة، قم بتمكينها في *قائمة المسارات* من قائمة [تكوين الخريطة](../map/configure-map-menu.md).
- يمكن لـ OsmAnd إبراز [المسارات الموجودة على OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). يمكن تحديدها عن طريق النقر على [الرمز الموجود على المسار](#save-as-a-track)، وإذا تم تكوين مجموعة المسارات المرئية بشكل صحيح، يمكنك اتباع اللون والأيقونات.
- يمكنك إنشاء مسار فوق المسارات باستخدام أداة [تخطيط مسار](../plan-route/create-route.md).  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

## تفاصيل منطقة وجرف التسلق {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

عند تحديد [منطقة أو جرف تسلق](../map/routes.md#climbing-routes)، يقدم OsmAnd ملخصًا مفصلاً لموقع التسلق، بما في ذلك: الاسم والموقع، وتصنيف صعوبة التسلق (UIAA، الفرنسية، YDS، إلخ)، ونوع الصخر، والارتفاع وطول المسار، وجودة التسلق وظروف السطح.



## الإجراءات مع المسارات {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

على الخريطة، يمكنك تحديد مسارات [للمشي لمسافات طويلة، وركوب الدراجات، والسفر، والمزيد](#type-of-routes)، والتي يتم تمييزها بـ [رموز OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) حيثما ينطبق ذلك.

عند النقر على **رمز المسار** على الخريطة:

- يتم عرض **قائمة بالمسارات القريبة** في ذلك الموقع.
- بعد تحديد مسار من القائمة، تفتح [قائمة سياقية](../map/tracks/track-context-menu.md) لذلك المسار، تعرض معلومات مفصلة والإجراءات المتاحة.

في **القائمة السياقية**، يمكنك:

- عرض [معلومات إضافية](#route-info-and-elevation) حول المسار المحدد.
- [حفظ المسار](#save-as-a-track) كـ **مسار GPX**.
- [بدء الملاحة](#start-navigation) على طول المسار.


### معلومات المسار والارتفاع {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

ستكون المعلومات التالية مرئية في القائمة السياقية:

- **معلومات المسار**: اسم المسار، رابط OSM (يتطلب ملحق تحرير OSM)، النوع، الوصف، المسافة، الاتجاه، الصعود/النزول، نطاق الارتفاع، الشبكة، المشغل، الحالة، اللون، رحلة ذهابًا وإيابًا، نقاط البداية/النهاية، والمزيد.
- **عام**: الحجم، الموقع، تاريخ الإنشاء.
- **معلومات إضافية**. يعرض نوع النشاط.
- أزرار الإجراءات: [حفظ باسم](#save-as-a-track) و [بدء الملاحة](#start-navigation).
- [معلومات الارتفاع](../navigation/setup/route-details.md#elevation-info). يعرض معلومات حول بيانات الارتفاع على المسار.
- [تحليل المسار على الخريطة](../map/tracks/index.md#analyze-track-on-map). يعرض تحليلًا مفصلاً لبيانات المسار باستخدام الرسوم البيانية والخرائط.

لعرض الرسم البياني للارتفاع أو الانحدار أو تفاصيل الارتفاع لمسار محدد، ما عليك سوى النقر على أي من القيم التالية في القائمة السياقية: **المسافة**، **صعود**، **نزول**، أو **الارتفاع**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### حفظ كمسار {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


لحفظ المسار كملف *GPX*، انقر على زر **حفظ (تنزيل)** تحت [لوحة المعلومات](../map/tracks/track-context-menu.md#info-panel). سيؤدي هذا إلى فتح لوحة أزرار [الإجراءات السريعة](../map/tracks/track-context-menu.md#track-actions) حيث ستتمكن من الوصول إلى إجراءات المسار مثل تغيير [المظهر](./tracks/appearance.md)، أو [الملاحة](../navigation/setup/route-navigation.md)، أو تحرير [تخطيط مسار](../plan-route/create-route.md).


### بدء الملاحة {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

لبدء الملاحة على طول مسار OSM المحدد، انقر على زر **بدء الملاحة** في [**لوحة المعلومات**](../map/tracks/track-context-menu.md#info-panel).

سيؤدي هذا إلى تشغيل وضع [**الملاحة حسب المسار**](../navigation/setup/gpx-navigation.md)، مما يتيح لك اتباع المسار مع التوجيه الصوتي وميزات الملاحة.



### الإجراءات السريعة {#quick-actions}

يمكنك تخصيص ما إذا كانت المسارات قيد التشغيل أو الإيقاف باستخدام أداة [الإجراء السريع](../widgets/quick-action.md#configure-map).


## البحث عن المسارات {#routes-search}

ابحث عن المسارات باستخدام [وظيفة البحث](../search/index.md) بالاسم أو عن طريق تحديد "المسارات" في [قسم الفئات](../search/search-poi.md#).

للبحث، انتقل إلى قائمة *<Translate android="true" ids="search_button"/>* أو *<Translate android="true" ids="search_button,search_categories"/>* وأدخل نشاطك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

انتقل إلى *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* للعثور على المسارات المطلوبة. تتضمن المسارات الاسم ونوع النشاط والطول والموقع والمسافة إلى أقرب نقطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

استخدم زر المرشحات (الزاوية العلوية اليمنى) لعرض المسارات المطلوبة فقط.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](./map-context-menu.md)
- [تكوين الخريطة](./configure-map-menu.md)
- [المسارات](./tracks/index.md)
- [قائمة سياق المسارات](./tracks/track-context-menu.md)
- [النقل العام](./public-transport.md)
- [مظهر خط مسار الملاحة](../navigation/guidance/map-during-navigation.md#route-line-appearance)