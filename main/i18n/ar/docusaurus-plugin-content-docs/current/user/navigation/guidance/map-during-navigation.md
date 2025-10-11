---
source-hash: 126bdbfe84f38b892a3c07c56eec4eba2956a96775fa4206e17eba71b6dbd43d
sidebar_position: 2
title: شاشة الخريطة أثناء الملاحة
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

تصف هذه المقالة كيفية تكوين مظهر الخريطة أثناء الملاحة. يتضمن ذلك ميزات مثل عرض [النقاط المهمة على طول المسار](#show-points-along-the-route)، واستخدام [تنبيهات الشاشة](#screen-alerts)، و[مظهر خط المسار](#route-line-appearance) بما في ذلك اللون والعرض وأسهم الانعطاف. ترتبط هذه الميزات ارتباطًا وثيقًا بـ[إعدادات الملاحة بالمسار](../setup/route-navigation.md#settings).


## الخريطة أثناء الملاحة {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![شاشة الخريطة أثناء الملاحة](@site/static/img/navigation/map_during_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![شاشة الخريطة أثناء الملاحة](@site/static/img/navigation/map_during_navigation_2_ios.png)

</TabItem>

</Tabs>

أثناء الملاحة، تكون الخريطة أداة مرئية لتحديد موقعك، وتحديد وجهتك، وتخطيط مسارك، وعرض إرشادات الملاحة. يمكنك استخدام التكبير للقيام بذلك وسحب الخريطة وتدويرها حسب الحاجة. يمكن للخريطة أيضًا عرض معلومات الطريق وأسماء الشوارع والمباني وغيرها من الكائنات لمساعدتك في تحديد مسارك بسهولة.  

أثناء الملاحة، يتم تعديل مظهر الخريطة بناءً على ملف تعريف الملاحة المحدد. قبل بدء الملاحة، تأكد من أن مظهر الخريطة يتوافق مع تفضيلاتك لكيفية عملها أثناء القيادة.

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* |  الوقت الذي تتم فيه مزامنة عرض الخريطة مع الموضع الحالي بعد التحرك.  |  *القيمة:* <br /> أبدًا، ٥ ثوانٍ، ١٠ ثوانٍ، ١٥ ثانية، ٢٠ ثانية، ٢٥ ثانية، ٣٠ ثانية، ٤٥ ثانية، ٦٠ ثانية، ٥٠ ثانية. |
| *<Translate android="true" ids="auto_zoom_map"/>*  |  تغيير مقياس الخريطة تلقائيًا وفقًا لسرعتك، طالما أن الخريطة متزامنة مع موقعك الحالي. | *القيمة:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - تكبير يدوي. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - التكبير ٢٠٠ متر. <br /> *<Translate android="true" ids="auto_zoom_far"/>* - التكبير ١٠٠ متر. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - التكبير ٥ أمتار. |
| *تكبير تلقائي لزاوية ٣D* | يحدد ميل الخريطة عند التبديل إلى عرض ثلاثي الأبعاد أثناء الملاحة. زاوية أعلى تجعل الأفق يبدو أبعد، مما يعطي رؤية أمامية أكبر. |يتم تطبيقه فقط عند تمكين التكبير التلقائي. القيم: ٢٠°، ٢٥°، ٣٠°، ٣٥°، ٤٠°. الافتراضي: ٢٥°.  |
| *معاينة الانعطاف التالي* | يقوم بتدوير الخريطة تلقائيًا قليلاً مسبقًا لإظهار الانعطاف أو المناورة التالية أثناء الملاحة. يساعد في توقع الإجراءات القادمة.  | مفعل افتراضيًا. إذا قمت بتصدير وإعادة استيراد ملف تعريف، تأكد من التحقق من هذا الإعداد، حيث كان في بعض الإصدارات السابقة يمكن أن يعاد تعيينه إلى “مفعل”.   |
| *<Translate android="true" ids="snap_to_road"/>*  | سيتم ربط أيقونة الموضع الحالي بمسار الملاحة الحالي.  | يمكنك إيقاف تشغيل هذا الخيار، ولكن جميع الخيارات المتعلقة بالطريق، مثل عرض الحارات، لن تكون مرئية أيضًا أثناء الملاحة.  |



## عرض النقاط على طول المسار {#show-points-along-the-route}

يسمح لك إعداد *العرض على طول المسار* بتكوين معلمات مسار إضافية وهو مطلوب لتشغيل الودجات مثل [اسم الشارع](../../widgets/nav-widgets#street-name) و[ودجة التنبيهات](../../widgets/nav-widgets.md#alert-widget). تشمل الخيارات عرض [**النقاط المهمة**](#points-of-interest-pois) و[**مفضلتي**](#my-favorites) على طول المسار أو استخدامها كإضافة لتلك التي تم تكوينها بالفعل للملف الشخصي، بالإضافة إلى عرض قائمة كاملة بـ[**تحذيرات المرور**](#traffic-warnings) على طول المسار.  

- تعد القدرة على تعيين مسافات مختلفة (تصل إلى ٥ كم، أو ٣.١١ ميل، اعتمادًا على [وحدة الطول](../../personal/profiles.md#units--formats) التي تحددها) من المسار إلى النقاط القريبة مفيدة عند استخدام أنواع التوجيه مثل [الخط المستقيم](../routing/straight-line-routing.md) أو [مباشرة إلى النقطة](../routing/direct-to-point-routing.md).
- بالنسبة لإعداد *العرض على طول المسار*، يوصى باستخدام [التوجيهات الصوتية](../guidance/voice-navigation.md) للملاحة.
- *النقاط المهمة، والمفضلة، وتحذيرات المرور* لا يتم عرضها في القائمة لمسار قد سافرته بالفعل.

:::info note
يؤثر خيار **العرض على طول المسار** فقط على قوائم النقاط المهمة ومفضلتي، وليس على الخريطة نفسها. يتم عرض أيقونات النقاط المهمة والمفضلة في كل مكان على الخريطة بغض النظر عن مسافة بعدها عن المسار.
:::


### عرض واختيار النقاط {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![النقاط على طول المسار](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ عرض على طول المسار*

![النقاط على طول المسار](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

عند إنشاء مسار، يمكنك تعيين أنواع النقاط التي سيتم عرضها على طول المسار في قسم *الملاحة*.


### النقاط المهمة (POIs) {#points-of-interest-pois}

![تراكب النقاط المهمة أندرويد](@site/static/img/map/poi_overlay_android.png) ![تراكب النقاط المهمة iOS](@site/static/img/map/poi_overlay_ios.png)

ترتبط إعدادات النقاط المهمة في [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) بإعداد **العرض على طول المسار**. 

عند تحديد عرض نقاط مهمة معينة في *تكوين الخريطة*، يتم عرضها جميعًا على الخرائط التي قمت بتنزيلها، سواء كنت قد حددت فئات أو، إذا كنت لا تهتم بالفئة، حددت نقاط مهمة قريبة.  

- يعتمد عدد وتحديد النقاط المهمة على *مقياس الرسم*.

- يعرض إعداد *العرض على طول المسار* نفس الفئة كما في *تراكب النقاط المهمة*، لكنك ترى *القائمة الكاملة* للنقاط المهمة المحددة مرة واحدة، بدءًا من نقطة الموقع الحالي على المسافة المحددة داخل مسارك.  

- يمكنك إزالة النقاط المهمة غير الضرورية من القائمة أو تحريرها في [قائمة السياق](../../map/map-context-menu.md) عن طريق النقر على إحداها.

- تحتوي القائمة على [أنواع النقاط المهمة](../../map/point-layers-on-map.md#poi-types) المحددة ومعلومات موجزة عن كل منها، مثل *أيقونة النوع، والاسم، والمسافة من نقطة الموقع الحالي إلى النقطة المهمة على طول المسار*، و*مؤشرات عن أي جانب من المسار في خط مستقيم ومدى بعد النقطة المهمة*.  


### مفضلتي {#my-favorites}

تحتوي القائمة على جميع نقاط [المفضلة](../../personal/favorites.md#favorite-point) المضافة مسبقًا بالقرب من المسار الذي أنشأته. كما هو الحال مع النقاط المهمة، يمكنك تحديد المسافة التي تقع عندها هذه النقاط.  

- إذا قمت بـ[إيقاف عرض المفضلة على الخريطة](../../map/configure-map-menu.md)، فإنها لا تختفي من القائمة وتستمر في الظهور في [الودجة](../../widgets/nav-widgets.md#street-name) ويتم الإعلان عنها عند الاقتراب منها.

- يمكنك إضافة *نقاطك المفضلة* إلى الخريطة ليس فقط مسبقًا ولكن أيضًا أثناء الملاحة في المسار.

- *لتحديث القائمة*، قم بإيقاف تشغيل "مفضلتي" ثم أعد تشغيلها.

- تحتوي كل نقطة على اسم أو إحداثيات، ومجموعة، والمسافة من نقطة الموقع الحالي إلى *المفضلة* مباشرة على خط المسار، ومعلومات حول مدى بعد النقطة يمينًا أو يسارًا عن الخط، واتجاه المسار.


### تحذيرات المرور {#traffic-warnings}

لا يتم عرض *تحذيرات المرور* مباشرة على الخريطة مثل *النقاط المهمة* أو *مفضلتي*.

- **لتمكين** هذا الخيار ورؤية التحذيرات، يجب عليك أولاً تمكين وتكوين [ودجة التنبيهات](../../widgets/nav-widgets.md#alert-widget).

- يتيح لك اختيار عرض *تحذيرات المرور* على طول مسارك رؤية القائمة الكاملة قبل بدء مسارك مباشرة، وهو أمر مفيد عند التخطيط لرحلتك.

- يمكنك إزالة التنبيهات غير الضرورية من القائمة، أو النقر على اسم التنبيه لـ[تعديل الموقع](../../map/map-context-menu.md#avoid-road).


## تنبيهات الشاشة {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | ستظهر الإشعارات، مثل تحذيرات المرور أو حدود السرعة، على الشاشة كودجة. تظهر في الزاوية السفلية اليسرى أثناء الملاحة. | [أنواع ودجات التنبيه](../../widgets/nav-widgets.md#alert-widget)   |


## مظهر خط المسار {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![مسار الملاحة أندرويد](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![مسار الملاحة أندرويد](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

يمكنك تحديد مظهر خط المسار حسب النمط أو تحديد اللون والعرض والشفافية للخط يدويًا. بالإضافة إلى ذلك، يمكنك اختيار ما إذا كنت تريد إظهار أسهم الانعطاف وأسهم الاتجاه على الخط.

**متقدم**: يسمح لك إعداد تخصيص خط المسار بضبط مظهر خط المسار لعرض تغيرات الارتفاع، أو الصعود أو الهبوط الكبير، أو الجليد على الطريق، أو الطرق غير المعبدة، أو الطرق السريعة، وغيرها من العوائق المحتملة. يمكنك أيضًا تحديد أو إنشاء [أنظمة ألوان](../../personal/color-palette-schemes.md#routes) مخصصة لتطبيقها على خط المسار.


:::note
 <ProFeature/> بعض المعلمات يمكنك استخدامها فقط مع <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">اشتراك OsmAnd Pro</a>.
:::


### اللون {#color}

يغير إعداد **اللون** درجات ألوان خطوط المسار. يتغير لونها العام اعتمادًا على النوع المحدد من مجموعة OsmAnd، ووفقًا لـ **مفتاح الخريطة**. بدلاً من ذلك، يصبح لونها أي لون وشفافية تحددها يدويًا.

- ***<Translate android="true" id="map_widget_renderer"/>***. يستخدم مع الألوان الافتراضية. للحصول على وصف كامل للألوان، انتقل إلى [أنماط الخريطة الافتراضية](../../map/vector-maps.md#default-map-styles).  
    ![نمط الخريطة](@site/static/img/navigation/route/map_st_2.png)

- ***مخصص***. يسمح لك بتحديد خط بأي لون وشفافية مفضلة. يمكنك تحديد إعدادات مختلفة لخريطة النهار وبشكل منفصل لخريطة الليل.  
    ![مخصص](@site/static/img/navigation/route/custom.png)   ![مخصص](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. يظهر ارتفاع نقطة المسار كتدرج **أخضر-أصفر-أحمر**. يشير **الأخضر** إلى أدنى نقطة في المسار، ويشير **الأصفر** إلى متوسط ارتفاع النقطة، و**الأحمر** هو الأعلى. إذا كان فرق ارتفاع المسار أقل من ١٠٠ متر، يتم تطبيق التدرج جزئيًا أو لا يتم تطبيقه، على سبيل المثال لتسلق بسيط من ١٠٠ متر إلى ١٥٠ مترًا - سيكون التدرج **أخضر-أصفر**. لاحظ أن اللون لا يمثل القيمة المطلقة للارتفاع.  
    ![الارتفاع](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. يتم تلوين خط المسار بألوان مختلفة اعتمادًا على ملف الارتفاع للمسار. يوجد وصف تفصيلي في مقالة *إضافة التضاريس*، قسم [المنحدر](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![الارتفاع](@site/static/img/navigation/route/Slope.png)   ![الارتفاع](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. يلون خط المسار أو المسار وفقًا لـ *تصنيف الطريق*. يوجد وصف تفصيلي في قسم *الخرائط المتجهة - [نمط الطريق](../../map/vector-maps.md#road-style)*.  
    ![الارتفاع](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. يوفر معلومات حول السطح المادي للطريق أو الممر. يمكن العثور على وصف تفصيلي في مقالة *نمط خريطة OsmAnd - [السطح](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.  
    ![الارتفاع](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. تصنيف قدرة المناورة على الطريق أو الممر للمركبات ذات العجلات، خاصة فيما يتعلق بانتظام ونعومة السطح. يمكن العثور على وصف تفصيلي في مقالة *نمط خريطة OsmAnd - [النعومة](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.  
    ![الارتفاع](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. يلون خط المسار أو المسار وفقًا لـ *تصنيف الطرق الشتوية*. يمكن العثور على وصف تفصيلي في مقالة *الخرائط المتجهة*، قسم [الطرق الشتوية والجليدية](../../map/vector-maps.md#winter-and-ski).  
    ![الارتفاع](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. تلوين خط المسار أو الممر حسب تكوين الرصيف. يستخدم عادةً عندما تكون شبكة الطرق غير معبدة إلى حد كبير. يمكن العثور على وصف تفصيلي في مقالة *نمط خريطة OsmAnd - [صلابة السطح](../../map-legend/osmand.md#surface-smoothness)* في قسم *مفتاح الخريطة*.  
    ![الارتفاع](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;صعوبة مسارات الخيل***. عرض المسارات وفقًا لصعوبة مسارات الخيل.  
    ![الارتفاع](@site/static/img/navigation/route/firmness.png)


### العرض {#width}

يمكنك ضبط عرض خط المسار ليتماشى مع الطريق أو الممر المعروض على الخريطة. لتحديد بصري أوضح، يمكنك زيادة أو تقليل عرض الخط يدويًا حسب الحاجة. لمزيد من التفاصيل، راجع مقالة *المسارات والمسارات — [المظهر](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. يستخدم مع العرض الافتراضي الذي حدده OsmAnd. يمكن العثور على وصف كامل في مقالة *الخرائط المتجهة*، قسم [نمط الخريطة](../../map/vector-maps.md#default-map-styles).  
    ![نمط الخريطة](@site/static/img/navigation/route/map_st_2.png)

- ***عروض رفيعة ومتوسطة وسميكة***. يمكنك تحديد عرض الخط ليتناسب مع عرض الطريق، أو التأكيد على خط المسار بشكل أقوى على الخريطة.  
    ![العرض](@site/static/img/navigation/route/width_med.png)

- ***مخصص***. يسمح لك بعرض خط بالعرض الذي تحتاجه. استخدم شريط التمرير لتحديد العرض.  
    ![مخصص](@site/static/img/navigation/route/custom_2.png)  


### أسهم الانعطاف {#turn-arrows}

يسمح لك إعداد أسهم الانعطاف بتحديد ما إذا كان سيتم عرض أسهم الانعطاف على خط المسار.  

- ***على الخريطة***  
    ![الارتفاع](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![أسهم الانعطاف iOS على الخريطة](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***في التطبيق***  
    ![الارتفاع](@site/static/img/navigation/route/turn_arr.png)   ![أسهم الانعطاف iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## مقالات ذات صلة {#related-articles}

- [معلمات المسار](../routing/osmand-routing.md#routing-types)
- [إعداد المسار](../setup/route-navigation.md)
- [الملاحة بواسطة المسار](../setup/gpx-navigation.md)
- [الملاحة بواسطة العلامات](../setup/markers-navigation.md)
- [تفاصيل المسار](../setup/route-details.md)
- [إعدادات الملاحة](./navigation-settings.md)
- [التوجيهات الصوتية / الإشعارات](./voice-navigation.md)
- [أندرويد أوتو](../auto-car.md)
- [CarPlay](../car-play.md)