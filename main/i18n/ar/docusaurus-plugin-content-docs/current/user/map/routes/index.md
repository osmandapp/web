---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: المسارات
sidebar_position: 11
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

يوفر OsmAnd العديد من الميزات القوية لعرض [مسارات](./types-of-routes.md) مختلفة على الخريطة. بشكل افتراضي، هذه المسارات جزء من [الخرائط المتجهة](../../map/vector-maps.md#routes) (بيانات OpenStreetMap)، ومع ذلك يتم توفير وظائف مشابهة بواسطة [المسارات](../../map/tracks/index.md) التي يمكن إنشاؤها باستخدام [خطط مسار](../../plan-route/create-route.md)، أو استيرادها كـ [مسارات GPX](#save-as-a-track)، أو تسجيلها باستخدام [ملحق تسجيل الرحلة](../../plugins/trip-recording.md). أسطورة خريطة المسارات [هنا](../../map-legend/osmand.md#routes).


## عرض المسارات على الخريطة {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- لعرض المسارات المطلوبة على الخريطة، قم بتمكينها في *قائمة المسارات* ضمن قائمة [تهيئة الخريطة](../../map/configure-map-menu.md).
- يمكن لـ OsmAnd تمييز [المسارات الموجودة على OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). يمكن تحديدها بالنقر على [الرمز الموجود على المسار](#save-as-a-track)، وإذا تم تكوين مجموعة المسارات المرئية بشكل صحيح، يمكنك متابعة الألوان والأيقونات.
- يمكن أيضًا تصفية أنواع المسارات الرئيسية حسب الفئات والفئات الفرعية، مما يتيح عرض مجموعات محددة فقط ضمن كل نوع. على سبيل المثال، يمكن عرض مسارات المشي لمسافات طويلة بواسطة **رموز OSMC** كفئات، وبواسطة *شبكات دولية أو وطنية أو إقليمية أو محلية* كفئات فرعية، وهي متاحة حاليًا عند تمكين [ملحق تطوير OsmAnd](../../plugins/development.md).
- يمكنك إنشاء مسار فوق المسارات باستخدام أداة [خطط مسار](../../plan-route/create-route.md). 
- عندما تمر عدة مسارات على نفس الطريق، يُعرض كل مسار كخط شبه شفاف منفصل موضوع فوق الآخرين. 
- عند النقر على موقع تتداخل فيه عدة مسارات، تظهر قائمة سياقية تحتوي على جميع المسارات التي تمر عبر هذه النقطة. 
- يلزم تحديث الخرائط المتجهة لعرض جميع عناصر مخطط عرض المسارات الجديد. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- لعرض المسارات المطلوبة على الخريطة، قم بتمكينها في *قائمة المسارات* ضمن قائمة [تهيئة الخريطة](../../map/configure-map-menu.md).
- يمكن لـ OsmAnd تمييز [المسارات الموجودة على OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). يمكن تحديدها بالنقر على [الرمز الموجود على المسار](#save-as-a-track)، وإذا تم تكوين مجموعة المسارات المرئية بشكل صحيح، يمكنك متابعة الألوان والأيقونات.
- يمكنك إنشاء مسار فوق المسارات باستخدام أداة [خطط مسار](../../plan-route/create-route.md). 
- عندما تمر عدة مسارات على نفس الطريق، يُعرض كل مسار كخط شبه شفاف منفصل موضوع فوق الآخرين.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## إجراءات على المسارات {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

على الخريطة، يمكنك تحديد مسارات [المشي لمسافات طويلة، وركوب الدراجات، والتزلج، وركوب الدراجات الجبلية، وركوب الدراجات الترابية، والسفر، وغيرها](./types-of-routes.md). عند توفرها، تعرض مسارات المشي لمسافات طويلة علاماتها باستخدام [رموز OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)؛ وتستخدم أنواع المسارات الأخرى علاماتها الخاصة.

عند النقر على **رمز المسار** على الخريطة:

- يتم عرض **قائمة بالمسارات القريبة** في ذلك الموقع.
- بعد تحديد مسار من القائمة، تفتح [قائمة سياقية](../../map/tracks/track-context-menu.md) لذلك المسار، تعرض معلومات مفصلة والإجراءات المتاحة.
- يُفتح المسار المحدد في عرض المسار، مما يتيح التفاعل معه بنفس طريقة مسار GPX.

في **القائمة السياقية**، يمكنك:

- عرض [معلومات إضافية](#route-info-and-elevation) حول المسار المحدد.
- [حفظ المسار](#save-as-a-track) كـ **مسار GPX**.
- [بدء التنقل](#start-navigation) على طول المسار.

### تفاصيل منطقة التسلق والصخرة {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

عند تحديد [منطقة تسلق أو صخرة](./types-of-routes.md#climbing-routes)، يوفر OsmAnd ملخصًا مفصلاً لموقع التسلق، بما في ذلك: الاسم والموقع، ودرجة صعوبة التسلق (UIAA، French، YDS، إلخ)، ونوع الصخر، والارتفاع وطول المسار، وجودة التسلق وظروف السطح.

### معلومات المسار والارتفاع {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

ستظهر المعلومات التالية في القائمة السياقية:

- **معلومات المسار**: اسم المسار، رابط OSM (يتطلب ملحق OSM Editing)، النوع، الوصف، المسافة، الاتجاه، الصعود/الهبوط، نطاق الارتفاع، الشبكة، المشغل، الحالة، اللون، الرحلة الدائرية، نقاط البداية/النهاية، وغيرها.
- **عام**: الحجم، الموقع، تاريخ الإنشاء.
- **معلومات إضافية**. تعرض نوع النشاط.
- أزرار الإجراءات: [حفظ كـ](#save-as-a-track) و [بدء التنقل](#start-navigation).
- [معلومات الارتفاع](../../navigation/setup/route-details.md#elevation-info). تعرض معلومات حول بيانات الارتفاع على المسار.
- [تحليل المسار على الخريطة](../../map/tracks/index.md#analyze-track-on-map). تعرض تحليلًا مفصلاً لبيانات المسار باستخدام الرسوم البيانية والخرائط.

لعرض رسم بياني للارتفاع أو المنحدر أو تفاصيل الارتفاع لمسار محدد، ما عليك سوى النقر على أي من القيم التالية في القائمة السياقية: **المسافة**، **الصعود**، **الهبوط**، أو **الارتفاع**.

يمكنك أيضًا فتح علامة التبويب *المسار* والتبديل إلى عرض *الارتفاع* لرؤية الرسم البياني الكامل للارتفاع للمسار.

**ملاحظة:** تُنشأ بيانات الارتفاع تلقائيًا وقد تختلف قليلاً حسب البيانات المتاحة.

### حفظ كمسار {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


لحفظ المسار كملف *GPX*، انقر على زر **حفظ (تنزيل)** ضمن [لوحة المعلومات](../../map/tracks/track-context-menu.md#info-panel). سيؤدي ذلك إلى فتح لوحة أزرار [الإجراءات السريعة](../../map/tracks/track-context-menu.md#track-actions) حيث ستتمكن من الوصول إلى إجراءات المسار مثل تغيير [المظهر](../../map/tracks/appearance.md)، [التنقل](../../navigation/setup/route-navigation.md)، أو تحرير [خطط مسار](../../plan-route/create-route.md). تتصرف المسارات المحفوظة بنفس طريقة المسارات الأخرى وتكون متاحة في مجموعة مساراتك.

### بدء التنقل {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

لبدء التنقل على طول مسار OSM المحدد، انقر على زر **بدء التنقل** في [**لوحة المعلومات**](../../map/tracks/track-context-menu.md#info-panel).

سيؤدي ذلك إلى تشغيل وضع [**التنقل حسب المسار**](../../navigation/setup/gpx-navigation.md)، مما يتيح لك متابعة المسار مع التوجيه الصوتي وميزات التنقل.

### إجراءات سريعة {#quick-actions}

يمكنك تخصيص ما إذا كانت المسارات مفعّلة أو معطّلة باستخدام أداة [الإجراء السريع](../../widgets/quick-action.md#configure-map).


## البحث عن المسارات {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

ابحث عن المسارات باستخدام [وظيفة البحث](../../search/index.md) بالاسم أو عن طريق تحديد "المسارات" في [قسم الفئات](../../search/search-poi.md#).

للبحث، انتقل إلى قائمة *<Translate android="true" ids="search_button"/>* أو *<Translate android="true" ids="search_button,search_categories"/>* وأدخل نشاطك.

انتقل إلى *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* للعثور على المسارات المطلوبة. تعرض نتائج البحث عن المسارات اسم المسار ونوع النشاط والطول والموقع والصعود/الهبوط (على Android) والمسافة إلى أقرب نقطة. 

### عوامل تصفية المسارات {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

في نتائج البحث عن المسارات، انقر على زر **عوامل التصفية** في الزاوية العلوية اليمنى لتضييق القائمة. تتضمن شاشة عوامل التصفية حقل **تصفية حسب الاسم**؛ وكتلة **النوع** مع *مكتب*، *ملحق بريد*، و*شريك بريد*؛ و**معايير إضافية** تعتمد على فئة المسار أو النشاط المحدد، حيث يمكن لكل فئة عرض خصائصها وقيم التصفية الخاصة بها.

يمكنك تمكين أو تعطيل عوامل التصفية باستخدام المفاتيح، وتتضمن بعض الأقسام *عرض الكل* لعرض قيم إضافية.


## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](../../map/map-context-menu.md)
- [تهيئة الخريطة](../../map/configure-map-menu.md)
- [المسارات](../../map/tracks/index.md)
- [قائمة سياق المسارات](../../map/tracks/track-context-menu.md)
- [النقل العام](../public-transport.md)
- [مظهر خط مسار التنقل](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [البحث عن نقاط الاهتمام](../../search/search-poi.md#)
- [أنواع المسارات](./types-of-routes.md)