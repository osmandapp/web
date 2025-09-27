---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  النقل العام
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## نظرة عامة {#overview}

النقل العام هو طبقة إضافية تسمح لك بعرض مسارات ومحطات النقل على الخريطة، للتحقق من المعلومات التفصيلية عنها والتنقل.

## محطات النقل (طبقة) {#transport-stops-layer}

تمكين/تعطيل طبقة النقل العام:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![طبقة النقل العام على أندرويد](@site/static/img/map/pt_layer_android.png) ![طبقة النقل العام على iOS](@site/static/img/map/pt_layer_ios.png)

اختر بين فئة واحدة أو أكثر من فئات النقل لعرضها:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[اقرأ المزيد](../map/vector-maps.md#transport) حول كيفية عرض وسائل النقل على الخريطة.


## مسارات النقل (قائمة السياق) {#transport-routes-context-menu}

![قائمة مسار النقل العام على أندرويد](@site/static/img/map/pt_routemenu_android.png) ![قائمة مسار النقل العام على iOS](@site/static/img/map/pt_routemenu_ios.png)

لفتح قائمة النقل، يمكنك النقر على أيقونة النقل. تعرض القائمة:

- شارات النقل العام الملونة (**قابلة للنقر**)
- [قائمة المسارات](#routes) التي تتوقف في تلك المحطة أو بالقرب منها (في نطاق 150 مترًا)
- اسم المحطة و[تفاصيل](#transport-stop-details) أخرى

### تفاصيل محطة النقل {#transport-stop-details}

![تفاصيل قائمة مسار النقل العام على أندرويد](@site/static/img/map/pt_routemenu_details_android.png) ![تفاصيل قائمة مسار النقل العام على iOS](@site/static/img/map/pt_routemenu_details_ios.png)

توفر محطة النقل العام تفاصيل إضافية مقارنة بـ[قائمة](../map/map-context-menu.md#details) كائن OpenStreetMap القياسية:

- وجود مقعد
- وجود غطاء
- إمكانية الوصول للكراسي المتحركة
- اسم المشغل

**ملاحظة**: يمكنك تصفية المحطات حسب معايير معينة. على سبيل المثال، قم بتوسيع وانقر على "مقعد" / "نعم" ويمكنك رؤية قائمة المحطات التي بها مقاعد. كما يمكن [عرضها على الخريطة](../map/point-layers-on-map.md#points-of-interest-pois).


### المسارات {#routes}

![مسارات النقل العام على أندرويد](@site/static/img/map/pt_routes_android.png) ![مسارات النقل العام على iOS](@site/static/img/map/pt_routes_ios.png)

مسارات النقل هي جميع مسارات النقل العام التي تقترب عبر المحطة المحددة والمسارات القريبة (في نطاق 150 مترًا). يتم أخذ معلومات المسارات من [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) مثل المرجع والاسم واللون والنوع.

**لون الشارة**:

- مترو الأنفاق - لون الخط الخاص به
- السكك الحديدية - بني
- الحافلات وغيرها - أحمر
- الترام - أزرق
- حافلة كهربائية (ترولي باص) - بنفسجي

### تصفح المسار {#browse-route}

![قائمة مسارات النقل العام على أندرويد](@site/static/img/map/pt_route_list_android.png)  ![قائمة مسارات النقل العام على iOS](@site/static/img/map/pt_route_list_ios.png)

يمكنك الدخول إلى قائمة تصفح المسار عن طريق **النقر على شارة** أو **تحديد مسار** من قائمة المسارات. بعد ذلك يمكنك التصفح بين المحطات بالنقر على '<Translate android="true" ids="shared_string_previous"/>' و '<Translate android="true" ids="shared_string_next"/>'. سيتم تحديث معلومات المحطة في القائمة وسيتم تحديد موقع المحطة على الخريطة.

يمكنك رؤية القائمة الكاملة للمحطات بالنقر على <Translate android="true" ids="rendering_category_details"/>. يتم تمييز المحطة المحددة حاليًا بأيقونة "الموقع" في قائمة المسارات.

> **ملاحظة**: *إذا نقرت على زر <Translate android="true" ids="get_directions"/>، فستحصل على مسار من موقعك الحالي إلى محطة النقل العام المحددة.*


## مقالات ذات صلة {#related-articles}

- [الخرائط المتجهية](../map/vector-maps.md)
- [الملاحة عبر النقل العام](../navigation/routing/public-transport-navigation.md)