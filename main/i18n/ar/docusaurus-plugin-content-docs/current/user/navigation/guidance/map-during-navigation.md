---
source-hash: 647711494d62816fdbd45cf8b18ef90488d2e460f73ad6eb67974d9a0645067f
sidebar_position: 1
title: شاشة الخريطة أثناء التنقل
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

تصف هذه المقالة كيفية تهيئة مظهر الخريطة أثناء التنقل. يتضمن ذلك ميزات مثل عرض [نقاط الاهتمام (POIs) على طول المسار](#show-points-along-the-route)، واستخدام [تنبيهات الشاشة](#screen-alerts)، و[مظهر خط المسار](#route-line-appearance) بما في ذلك اللون والعرض وأسهم الانعطاف. ترتبط هذه الميزات ارتباطًا وثيقًا بـ [إعدادات التنقل في المسار](../setup/route-navigation.md#settings).


## الخريطة أثناء التنقل {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![شاشة الخريطة أثناء التنقل](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![شاشة الخريطة أثناء التنقل](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

أثناء التنقل، تعد الخريطة أداة مرئية لتحديد موقعك، وتحديد وجهتك، وتخطيط مسارك، وعرض إرشادات التنقل. يمكنك استخدام التكبير/التصغير للقيام بذلك وسحب الخريطة وتدويرها حسب الحاجة. يمكن للخريطة أيضًا عرض معلومات الطريق وأسماء الشوارع والمباني والأشياء الأخرى لمساعدتك في تحديد مسارك بسهولة.

أثناء التنقل، يتكيف مظهر الخريطة بناءً على ملف تعريف التنقل المحدد. قبل بدء التنقل، تأكد من أن مظهر الخريطة يتوافق مع تفضيلاتك لكيفية عملها أثناء القيادة.

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | الوقت الذي تتم فيه مزامنة عرض الخريطة مع الموضع الحالي بعد التحرك. | *القيمة:* <br /> أبدًا، 5 ثوانٍ، 10 ثوانٍ، 15 ثانية، 20 ثانية، 25 ثانية، 30 ثانية، 45 ثانية، 60 ثانية، 50 ثانية. |
| *<Translate android="true" ids="auto_zoom_map"/>* | قم بتغيير حجم الخريطة تلقائيًا وفقًا لسرعتك، طالما أن الخريطة متزامنة مع موقعك الحالي. | *القيمة:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - تكبير يدوي. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - التكبير 200 متر.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - التكبير 100 متر. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - التكبير 5 أمتار. |
| *<Translate android="true" ids="snap_to_road"/>* | سيتم ربط أيقونة الموضع الحالي بمسار التنقل الحالي. | يمكنك إيقاف تشغيل هذا الخيار، ولكن جميع الخيارات المتعلقة بالطريق، مثل عرض المسار، لن تكون مرئية أيضًا أثناء التنقل. |
| *<Translate android="true" ids="approximate_bearing"/>* | يحدد الاتجاه بناءً على مسار التنقل الذي تتبعه. | لا يظهر الإعداد إلا عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md). <br /> يجب تمكين هذه الإعدادات إذا كان اتجاه الخريطة الاتجاهية معكوسًا أو يهتز عند استخدام [Android Auto](../auto-car.md#common-issues-and-solutions). |


## إظهار النقاط على طول المسار {#show-points-along-the-route}

يسمح لك إعداد *إظهار على طول المسار* بتهيئة معلمات المسار الإضافية وهو مطلوب لتشغيل الأدوات مثل [اسم الشارع](../../widgets/nav-widgets#street-name) و[أداة التنبيه](../../widgets/nav-widgets.md#alert-widget). تتضمن الخيارات عرض [**نقاط الاهتمام (POIs)**](#points-of-interest-pois) و[**مفضلاتي**](#my-favorites) على طول المسار أو استخدامها كإضافة لتلك التي تم تهيئتها بالفعل للملف الشخصي، بالإضافة إلى عرض قائمة كاملة بـ [**تحذيرات المرور**](#traffic-warnings) على طول المسار.

- تعد القدرة على تعيين مسافات مختلفة (حتى 5 كم، أو 3.11 ميل، اعتمادًا على [وحدة الطول](../../personal/profiles.md#units--formats) التي تحددها) من المسار إلى النقاط القريبة مفيدة عند استخدام أنواع التوجيه مثل [التوجيه بخط مستقيم](../routing/straight-line-routing.md) أو [التوجيه المباشر إلى نقطة](../routing/direct-to-point-routing.md).
- لإعداد *إظهار على طول المسار*، يوصى باستخدام [التوجيه الصوتي](../guidance/voice-navigation.md) للتنقل.
- لا يتم عرض *نقاط الاهتمام (POIs) والمفضلة وتحذيرات المرور* في القائمة لمسار سبق لك السفر فيه.


### عرض وتحديد النقاط {#view-and-select-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![نقاط على طول المسار](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *← إظهار على طول المسار*

![نقاط على طول المسار](@site/static/img/navigation/show-points-along-4-ios.png)

</TabItem>

</Tabs>

عند إنشاء مسار، يمكنك تعيين أنواع النقاط التي سيتم عرضها على طول المسار في قسم *التنقل*.


### نقاط الاهتمام (POIs) {#points-of-interest-pois}

![تراكب نقاط الاهتمام (POI) أندرويد](@site/static/img/map/poi_overlay_android.png) ![تراكب نقاط الاهتمام (POI) iOS](@site/static/img/map/poi_overlay_ios.png)

ترتبط إعدادات نقاط الاهتمام (POIs) في [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) بإعداد **إظهار على طول المسار**. هذا في الأساس إعداد إضافي لعرض نقاط الاهتمام (POIs) على الخريطة، ويرتبط مباشرة بالمسار الذي تم إنشاؤه.

عند تحديد عرض نقاط اهتمام (POIs) معينة على *تهيئة الخريطة*، يتم عرضها جميعًا على الخرائط التي قمت بتنزيلها، سواء كنت قد حددت فئات أو، إذا لم تهتم بأي فئة، حددت نقاط اهتمام (POIs) قريبة.

- يعتمد عدد وتحديد نقاط الاهتمام (POIs) على *المقياس*.

- يعرض إعداد *إظهار على طول المسار* نفس الفئة كما في *تراكب نقاط الاهتمام (POI)*، ولكنك ترى *القائمة الكاملة* لنقاط الاهتمام (POIs) المحددة مرة واحدة، بدءًا من نقطة الموقع الحالي بالمسافة المحددة داخل مسارك.

- يمكنك إزالة نقاط الاهتمام (POIs) غير الضرورية من القائمة أو تعديلها في [قائمة السياق](../../map/map-context-menu.md) بالنقر على إحداها.

- تحتوي القائمة على [أنواع نقاط الاهتمام (POI)](../../map/point-layers-on-map.md#poi-types) المحددة ومعلومات موجزة عن كل منها، مثل *أيقونة النوع، الاسم، المسافة من نقطة الموقع الحالي إلى نقطة الاهتمام (POI) على طول المسار*، و*إشارات إلى أي جانب من المسار في خط مستقيم ومدى بعد نقطة الاهتمام (POI)*.


### مفضلاتي {#my-favorites}

تحتوي القائمة على جميع نقاط [المفضلة](../../personal/favorites.md#favorite-point) المضافة مسبقًا بالقرب من المسار الذي أنشأته. كما هو الحال مع نقاط الاهتمام (POIs)، يمكنك تحديد المسافة التي تقع عندها هذه النقاط.

- إذا [أوقفت تشغيل عرض المفضلة على الخريطة](../../map/configure-map-menu.md)، فإنها لا تختفي من القائمة وتستمر في الظهور في [الأداة](../../widgets/nav-widgets.md#street-name) ويتم الإعلان عنها عند الاقتراب منها.

- يمكنك إضافة *نقاطك المفضلة* إلى الخريطة ليس فقط مسبقًا ولكن أيضًا أثناء التنقل في مسار.

- *لتحديث القائمة*، قم بإيقاف تشغيل مفضلاتي ثم تشغيلها مرة أخرى.

- تحتوي كل نقطة على اسم أو إحداثيات، ومجموعة، والمسافة من نقطة الموقع الحالي إلى *المفضلة* مباشرة على خط المسار، ومعلومات حول مدى بعد النقطة إلى اليمين أو اليسار من الخط، واتجاه المسار.


### تحذيرات المرور {#traffic-warnings}

لا يتم عرض *تحذيرات المرور* مباشرة على الخريطة مثل *نقاط الاهتمام (POIs)* أو *مفضلاتي*.

- **لتمكين** هذا الخيار ورؤية التحذيرات، يجب عليك أولاً تمكين وتهيئة [أداة التنبيهات](../../widgets/nav-widgets.md#alert-widget).

- يتيح لك اختيار عرض *تحذيرات المرور* على طول مسارك رؤية القائمة الكاملة قبل بدء مسارك مباشرة، وهو أمر مفيد عند التخطيط لرحلتك.

- يمكنك إزالة التنبيهات غير الضرورية من القائمة، أو النقر على اسم التنبيه [لتعديل الموقع](../../map/map-context-menu.md#avoid-road).


## تنبيهات الشاشة {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | ستظهر الإشعارات، مثل تحذيرات المرور أو حدود السرعة، على الشاشة كأداة. تظهر في الزاوية السفلية اليسرى أثناء التنقل. | [أنواع أدوات التنبيه](../../widgets/nav-widgets.md#alert-widget) |


## مظهر خط المسار {#route-line-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![مسار التنقل أندرويد](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![مسار التنقل أندرويد](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

يمكنك تحديد مظهر خط المسار حسب النمط أو تحديد اللون والعرض وشفافية الخط يدويًا. بالإضافة إلى ذلك، يمكنك اختيار ما إذا كنت تريد إظهار أسهم الانعطاف وأسهم الاتجاه على الخط.

**متقدم**: يسمح لك إعداد تخصيص خط المسار بضبط مظهر خط المسار لعرض التغيرات في الارتفاع، أو الصعود أو الهبوط الكبير، أو الجليد على الطريق، أو الطرق غير المعبدة، أو الطرق السريعة، والعقبات المحتملة الأخرى. يمكنك أيضًا تحديد أو إنشاء [مخططات ألوان مخصصة](../../personal/color-palette-schemes.md#routes) لتطبيقها على خط المسار.


:::note
 <ProFeature/> بعض المعلمات التي يمكنك استخدامها فقط مع [اشتراك OsmAnd Pro](https://osmand.net/docs/user/purchases/android#free-and-paid-features).
:::


### اللون {#color}

يغير إعداد **اللون** درجات ألوان خطوط المسار. يتغير لونها الإجمالي اعتمادًا على النوع المحدد من مجموعة OsmAnd، ووفقًا لـ **مفتاح الخريطة**. بدلاً من ذلك، يصبح لونها أي لون وشفافية تحدده يدويًا.

- ***<Translate android="true" id="map_widget_renderer"/>***. يستخدم مع الألوان الافتراضية. للحصول على وصف كامل للألوان، انتقل إلى [أنماط الخرائط الافتراضية](../../map/vector-maps.md#default-map-styles).
    ![نمط الخريطة](@site/static/img/navigation/route/map_st_2.png)

- ***مخصص***. يسمح لك بتحديد خط بأي لون وشفافية مفضلين. يمكنك تحديد إعدادات مختلفة لخريطة النهار وبشكل منفصل لخريطة الليل.
    ![مخصص](@site/static/img/navigation/route/custom.png) ![مخصص](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. يظهر ارتفاع نقطة المسار كتدرج **أخضر-أصفر-أحمر**. يشير **الأخضر** إلى أدنى نقطة في المسار، ويشير **الأصفر** إلى متوسط ارتفاع النقطة، و**الأحمر** هو الأعلى. إذا كان فرق ارتفاع المسار < 100 متر، يتم تطبيق التدرج جزئيًا أو لا يتم تطبيقه، على سبيل المثال لتسلق بسيط من 100 متر إلى 150 مترًا - سيكون التدرج **أخضر-أصفر**. لاحظ أن اللون لا يمثل القيمة المطلقة للارتفاع.
    ![الارتفاع](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. يتم تلوين خط المسار بألوان مختلفة اعتمادًا على ملف تعريف ارتفاع المسار. يوجد وصف تفصيلي في مقال *مكون الطبوغرافيا الإضافي*، قسم [المنحدر](../../plugins/topography.md#hillshade-slope-and-altitude-layers).
    ![الارتفاع](@site/static/img/navigation/route/Slope.png) ![الارتفاع](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. يلون مسارًا أو خط مسار وفقًا لـ *تصنيف الطريق*. يوجد وصف تفصيلي في مقال *الخرائط المتجهة - قسم [نمط الطريق](../../map/vector-maps.md#road-style)*.
    ![الارتفاع](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. يوفر معلومات حول السطح المادي للطريق أو المسار. يمكن العثور على وصف تفصيلي في مقال *نمط خريطة OsmAnd - [السطح](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.
    ![الارتفاع](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. تصنيف قدرة المناورة على الطريق أو المسار للمركبات ذات العجلات، خاصة فيما يتعلق بانتظام ونعومة السطح. يمكن العثور على وصف تفصيلي في مقال *نمط خريطة OsmAnd - [النعومة](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.
    ![الارتفاع](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. يلون مسارًا أو خط مسار وفقًا لـ *تصنيف الطرق الشتوية*. يمكن العثور على وصف تفصيلي في مقال *الخرائط المتجهة*، قسم [الطرق الشتوية والجليدية](../../map/vector-maps.md#winter-and-ski).
    ![الارتفاع](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. تلوين مسار أو خط مسار حسب تكوين الرصف. يستخدم عادة عندما تكون شبكة الطرق غير معبدة إلى حد كبير. يمكن العثور على وصف تفصيلي في مقال *نمط خريطة OsmAnd - [صلابة السطح](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.
    ![الارتفاع](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;صعوبة مسارات الخيل***. عرض المسارات حسب صعوبة مسارات الخيل.
    ![الارتفاع](@site/static/img/navigation/route/firmness.png)


### العرض {#width}

يمكنك ضبط عرض خط المسار ليتوافق مع الطريق أو المسار المعروض على الخريطة. لتحديد بصري أوضح، يمكنك زيادة أو تقليل عرض الخط يدويًا حسب الحاجة. لمزيد من التفاصيل، راجع مقال *المسارات والطرق - [المظهر](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. يستخدم مع العرض الافتراضي الذي حددته OsmAnd. يمكن العثور على وصف كامل في مقال *الخرائط المتجهة*، قسم [نمط الخريطة](../../map/vector-maps.md#default-map-styles).
    ![نمط الخريطة](@site/static/img/navigation/route/map_st_2.png)

- ***عروض رفيعة ومتوسطة وعريضة***. يمكنك تحديد عرض الخط ليتناسب مع عرض الطريق، أو إبراز خط المسار بشكل أقوى على الخريطة.
    ![العرض](@site/static/img/navigation/route/width_med.png)

- ***مخصص***. يسمح لك بعرض خط بالعرض الذي تحتاجه. استخدم شريط التمرير لتحديد العرض.
    ![مخصص](@site/static/img/navigation/route/custom_2.png)


### أسهم الانعطاف {#turn-arrows}

يسمح لك إعداد أسهم الانعطاف بتحديد ما إذا كانت أسهم الانعطاف ستظهر على خط المسار.

- ***على الخريطة***
    ![الارتفاع](@site/static/img/navigation/route/turn_arr_on_map_and.png) ![أسهم الانعطاف iOS الخريطة](@site/static/img/navigation/route/turn_arr_ios_on_map.png)

- ***في التطبيق***
    ![الارتفاع](@site/static/img/navigation/route/turn_arr.png) ![أسهم الانعطاف iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [التنقل بالمسار](../setup/gpx-navigation.md)
- [التنقل بالعلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [إعدادات التنقل](./navigation-settings.md)
- [التوجيهات الصوتية / الإشعارات](./voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [كار بلاي](../car-play.md)

> *آخر تحديث: ديسمبر 2024*