---
source-hash: 935cab06de14f7d40135dc91b1f1ba4ea6e4f6419796e6398db2850a17971af3
sidebar_position: 12
title: أنواع المسارات
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

تمثل المسارات أنشطة خارجية مختلفة باستخدام بيانات من [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). النقر على **أيقونة الدرع التي تحتوي على رقم المسار أو علم المسار** على الخريطة سيفتح قائمة سياقية توفر معلومات إضافية حول المسار وتسمح باستخدامه كجزء من التنقل.

يمكنك تكوين تصفية بعض أنواع المسارات في قائمة [تكوين الخريطة](../../map/configure-map-menu.md).

## الدراجات {#cycle}

تتواجد [مسارات الدراجات](https://wiki.openstreetmap.org/wiki/Cycle_routes) بثلاثة أنواع: *محلية* (`lcn`)، *إقليمية* (`rcn`)، *وطنية* (`ncn`)، *دولية* (`icn`). كما يمكن أن تكون مسارات الدراجات جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). يمكنك اختيار كيفية تعيين اللون لأجزاء المسار:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

يمكنك العثور على مزيد من المعلومات في مقالة [دليل الخريطة](../../map-legend/osmand.md#cycling).


## دراجات الجبال {#mountain-bike}

تحتوي مسارات الدراجات الجبلية على تعيين محدد في [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) ويمكن تحديدها بشكل منفصل عن مسارات الدراجات.

- ***<Translate android="true" ids="mtb_scale"/>***.  تعرض المسارات وفقًا لمقياس MTB. المزيد من المعلومات في مقالة [دليل الخريطة](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  تعرض مسارات MTB وفقًا للرابطة الدولية لركوب الدراجات الجبلية، [MTB IMBA](https://www.imba.com/). المزيد من المعلومات في مقالة [دليل الخريطة](../../map-legend/osmand.md#mtb).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

## المشي / التنزه {#hiking--walking}

تتواجد [مسارات المشي](https://wiki.openstreetmap.org/wiki/Walking_Routes) بثلاثة أنواع: *محلية* (`lwn`)، *إقليمية* (`rwn`)، *وطنية* (`nwn`)، *دولية* (`iwn`). كما يمكن أن تكون مسارات المشي جزءًا من [شبكات العقد](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). لا يفصل OsmAnd بين مسارات المشي والتنزه ويدمجها في مجموعة واحدة. يمكنك اختيار كيفية تعيين اللون لأجزاء المسار:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  تلوّن المسارات وفقًا لـ[لونها المحلي](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (إن وجد في OpenStreetMap) ورمز الدرع السياحي.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  تلوّن حسب [الانتماء للشبكة](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  تلوّن المسارات وفقًا لنوع [شبكة العقد](https://wiki.openstreetmap.org/wiki/Node_Networks) (دولية أو إقليمية أو محلية).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


## مسارات دراجات الطرق الوعرة {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

تتيح ميزة **مسارات دراجات الطرق الوعرة** عرض مسارات مخصصة لدراجات الطرق الوعرة على الخريطة بناءً على وسم `dirtbike:scale`. يبرز هذا المقياس المسارات المناسبة لركوب دراجات الطرق الوعرة، مع طبقة ملونة توضح مستويات الصعوبة ([دليل الخريطة](../../map-legend/osmand.md#dirtbike-scale)).  

يمكنك تفعيل هذه الميزة من *القائمة ← تكوين الخريطة ← المسارات ← مسارات دراجات الطرق الوعرة*. تعمل هذه الوظيفة بشكل مشابه لمقياس MTB، وتوفر تمثيلاً بصريًا للمسارات المخصصة لركوب دراجات الطرق الوعرة — يمكنك معرفة المزيد عن [وسم `dirtbike` هنا](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## مسارات التسلق {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

يدعم OsmAnd *مناطق التسلق* (`climbing=area`) و*صخور التسلق* (`climbing=crag`)، مما يتيح لك العثور على مواقع [التسلق الصخري](https://wiki.openstreetmap.org/wiki/Climbing) مباشرة على الخريطة.

- **مناطق التسلق** تمثل **مناطق أكبر** تحتوي على مسارات تسلق متعددة.

- **صخور التسلق** تشير إلى **تشكيلات صخرية** أو جدران مناسبة للتسلق.

- تشمل هذه المواقع **سمات مفصلة** مثل:

    - *درجة التسلق* (مثل UIAA، French، YDS).
    - *نوع الصخر* (مثل الحجر الجيري، الجرانيت).
    - *طول المسار* (بالأمتار).
    - *جودة التسلق* (صلب، مفكك، مختلط).
    - *توفر سجل القمة*.

لتمكين مواقع التسلق على الخريطة، انتقل إلى: *القائمة ← تكوين الخريطة ← المسارات ← مسارات التسلق*.


## درجة صعوبة مسارات المشي {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

قد تكون بعض أجزاء الطرق جزءًا من مسارات متعددة، لكن يمكن تلوينها بشكل فردي لتمثيل صعوبة الجزء في المناطق الجبلية. يدعم OsmAnd حاليًا التصنيفات الإيطالية والسويسرية، ولكل منها قائمة محددة بمتطلبات المعدات للوصول إلى هذا الجزء.  

1. [مقياس SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [مقياس CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## منحدرات ومسارات التزلج {#ski-slopes-and-routes}

- _منحدرات ومسارات التزلج_ في نمط خريطة _الشتاء والتزلج_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _منحدرات ومسارات التزلج_ في نمط خريطة _OsmAnd الافتراضي_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

تُعد منحدرات ومسارات التزلج مجموعة محددة من [المسارات](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) في OpenStreetMap. عادةً يمكن استخدام هذه المسارات مع نمط خريطة [الشتاء والتزلج](../../map/map-styles.md#winter-and-ski) مع جميع [المسارات الثلجية](https://wiki.openstreetmap.org/wiki/Pistes) المرئية. إذا كان نمط خريطة آخر نشطًا، يظهر شريط يقترح التبديل إلى [الشتاء والتزلج](../../map/map-styles.md#winter-and-ski) (*لنظام Android فقط*) ويتم عرض المنحدرات فقط. اضغط ***تبديل*** لتغيير نمط الخريطة دون مغادرة الشاشة الحالية، أو ***لاحقًا*** لإخفاء الشريط.


## مسارات الدراجات الثلجية {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail_new.png)

تُرسم مسارات الدراجات الثلجية في [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) كـ `route=snowmobile`. تُستخدم للترفيه الشتوي وربط المناطق النائية خلال موسم الثلوج. في OsmAnd، يمكن النقر على مسارات الدراجات الثلجية، راجع قسم [الإجراءات مع المسارات](./index.md#actions-with-routes).


## مسارات الخيول {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

تُعرض [مسارات الخيول](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) كمسارات ملونة مع رموز لركوب الخيل.  


## رياضات المياه البيضاء {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

تُعرض [مسارات المياه البيضاء](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) مع أيقونات الوصول ومناطق الخطر والمنحدرات القريبة لـ[سياحة المياه البيضاء](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). راجع [ميزات المياه البيضاء](../../map-legend/osmand.md#whitewater-features) في دليل الخريطة لدرجات المنحدرات ودرجات أقسام النهر والرموز ذات الصلة.


## الجري {#running}

![Fitness routes](@site/static/img/map/fitness_1.png)

تُستخدم [مسارات الجري](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) في OpenStreetMap لمسارات الجري المسماة أو المرقمة أو المميزة بطريقة أخرى، وذلك بشكل أساسي لألعاب القوى.


## مسارات اللياقة البدنية {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[مسار اللياقة البدنية](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) هو مسار أو طريق مجهز بعقبات أو محطات على طوله لتمرين الجسم البشري وتحسين الصحة.  


## السفر {#travel}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

تُعد مسارات السفر جزءًا من ملفات [كتاب السفر](../../plan-route/travel-guides.md) المخصصة (`travel.obf`)، والتي يمكن إنشاؤها من [مسارات المستخدم](https://osmand.net/blog/routes#generated-travel-routes) أو تكون جزءًا من [إضافات](../../plugins/index.md) إضافية.  

يمكنك تخصيص عرض بعض ***كتب السفر*** وأنواع ***المسارات***، وعرض المسارات كنقاط، أو ***مجموعات النقاط*** (على سبيل المثال لكتب السفر في ويكيفوياج). تعرف على المزيد حول [أدلة السفر هنا](../../plan-route/travel-guides.md).


## مقالات ذات صلة {#related-articles}

- [تكوين الخريطة](../../map/configure-map-menu.md)
- [دليل الخريطة](../../map-legend/osmand.md)
- [المسارات](./index.md)