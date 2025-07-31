---
source-hash: 1089ba9ce4a9f9d1985bccd4ba5ebfe5e0e35eb8437bb1a83fe1c4859bf5a769
sidebar_position: 10
title:  المواصلات العامة
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

## نظرة عامة {#overview}

المواصلات العامة هي طبقة إضافية تتيح لك عرض مسارات وتوقفات النقل على الخريطة، للتحقق من معلومات مفصلة عنها والتنقل.

## محطات النقل (طبقة) {#transport-stops-layer}

تفعيل/تعطيل طبقة المواصلات العامة:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> ←* ...

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> ←* ...

<p> </p>

![طبقة المواصلات العامة أندرويد](@site/static/img/map/pt_layer_android.png) ![طبقة المواصلات العامة iOS](@site/static/img/map/pt_layer_ios.png)

اختر بين فئة نقل واحدة أو أكثر للعرض:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[اقرأ المزيد](../map/vector-maps.md#transport) حول كيفية عرض النقل على الخريطة.

## مسارات النقل (قائمة السياق) {#transport-routes-context-menu}

![قائمة مسار المواصلات العامة أندرويد](@site/static/img/map/pt_routemenu_android.png) ![قائمة مسار المواصلات العامة iOS](@site/static/img/map/pt_routemenu_ios.png)

لفتح قائمة النقل، يمكنك النقر على أيقونة النقل. تعرض:

- دروع المواصلات العامة الملونة (**قابلة للنقر**)
- [قائمة المسارات](#routes) التي تتوقف عند تلك المحطة أو بالقرب منها (في نطاق 150 مترًا)
- اسم المحطة و[تفاصيل أخرى](#transport-stop-details)

### تفاصيل محطة النقل {#transport-stop-details}

![تفاصيل قائمة مسار المواصلات العامة أندرويد](@site/static/img/map/pt_routemenu_details_android.png) ![تفاصيل قائمة مسار المواصلات العامة iOS](@site/static/img/map/pt_routemenu_details_ios.png)

توفر محطة المواصلات العامة تفاصيل إضافية مقارنة بقائمة [كائن OpenStreetMap القياسية](../map/map-context-menu.md#details):

- وجود مقعد
- وجود غطاء
- إمكانية الوصول بالكراسي المتحركة
- اسم المشغل

**ملاحظة**: يمكنك تصفية المحطات حسب معايير معينة. على سبيل المثال، قم بتوسيع والنقر على "مقعد" / "نعم" ويمكنك رؤية قائمة المحطات التي تحتوي على مقاعد. كما يمكن [عرضها على الخريطة](../map/point-layers-on-map.md#points-of-interest-pois).

### المسارات {#routes}

![مسارات المواصلات العامة أندرويد](@site/static/img/map/pt_routes_android.png) ![مسارات المواصلات العامة iOS](@site/static/img/map/pt_routes_ios.png)

مسارات النقل هي جميع مسارات المواصلات العامة التي تقترب عبر المحطة المحددة والمسارات القريبة (في نطاق 150 مترًا). يتم أخذ معلومات المسارات من [بيانات OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport) مثل المرجع والاسم واللون والنوع.

**لون الدرع**:

- مترو الأنفاق - لون الخط الخاص به
- السكك الحديدية - بني
- الحافلات وغيرها - أحمر
- الترام - أزرق
- الترولي باص - أرجواني

### تصفح المسار {#browse-route}

![قائمة مسار المواصلات العامة أندرويد](@site/static/img/map/pt_route_list_android.png) ![قائمة مسار المواصلات العامة أندرويد](@site/static/img/map/pt_route_list_ios.png)

يمكنك الدخول إلى قائمة تصفح المسار عن طريق **النقر على درع** أو **تحديد مسار** من قائمة المسارات. بعد ذلك يمكنك التصفح بين المحطات بالنقر على '<Translate android="true" ids="shared_string_previous"/>' و '<Translate android="true" ids="shared_string_next"/>'. سيتم تحديث معلومات المحطة في القائمة وسيتم تحديد موقع المحطة على الخريطة.

يمكنك رؤية القائمة الكاملة للمحطات بالنقر على <Translate android="true" ids="rendering_category_details"/>. يتم تمييز المحطة المحددة حاليًا بأيقونة "الموقع" في قائمة المسارات.

> **ملاحظة**: *إذا نقرت على زر <Translate android="true" ids="get_directions"/>، فستحصل على مسار من موقعك الحالي إلى محطة المواصلات العامة المحددة.*

## مقالات ذات صلة {#related-articles}

- [خرائط المتجهات](../map/vector-maps.md)
- [الملاحة في المواصلات العامة](../navigation/routing/public-transport-navigation.md)

> *آخر تحديث: أغسطس 2022*