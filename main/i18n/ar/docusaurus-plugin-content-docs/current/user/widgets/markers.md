---
source-hash: d3abf03ba6407956088e1ed644ced36e7ab7236b5ccbcd41e305f4fac26a3b36
sidebar_position: 6
title:  أدوات تحديد المواقع (Marker Widgets)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## نظرة عامة {#overview}

العلامات هي نقاط مؤقتة تُشار إليها على الخريطة على شكل أعلام. تُظهر الأدوات *الاتجاه* و*المسافة* و*العنوان* و*الوقت المقدر للوصول* إلى العلامة. تسمح لك بالعثور بسرعة على العلامات على الخريطة، بالإضافة إلى تغيير موقعها. يمكنك قراءة المزيد عن العلامات في هذه [المقالة](../personal/markers).


## أداة الشريط العلوي {#top-bar-widget}

تعرض أداة **شريط علامات الخريطة** (أندرويد) / أداة **إشارة المسافة - الشريط العلوي** (iOS) ما يلي:

- المسافة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع مغلقًا) إلى النقطة المحددة المشار إليها بواسطة العلامة على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- يشير سهم بنفس لون العلامة إلى الاتجاه من الموقع الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع مغلقًا) واتجاه جهازك في الفضاء (الاتجاه) نحو العلامة.
- عنوان الموقع.
- أيقونة القائمة التي تؤدي إلى [قائمة علامات الخريطة](../personal/markers/#map-markers-menu).

يمكنك أيضًا اختيار عرض علامة واحدة أو اثنتين. اقرأ المزيد عن إعدادات الأداة في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع مغلقًا) والعلامة.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![علامات الخريطة على أداة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| النقر الطويل + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتتبعة، تحتاج إلى النقر طويلاً ثم تحريك موضع الخريطة قليلاً (يجب ألا تظهر قائمة السياق). |
| الاقتراب من العلامة | في حال كان موقعك ضمن دائرة صغيرة من علامة الخريطة (**< 50 م**)، في حقل الأداة يمكنك رؤية زر علامة اختيار لحذف علامة الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال العلامة التي تم وضع علامة عليها بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![علامات الخريطة على أداة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>*|
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| الاقتراب من العلامة | في حال كان موقعك ضمن دائرة صغيرة من علامة الخريطة (**< 50 م**)، في حقل الأداة يمكنك رؤية زر علامة اختيار لحذف علامة الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال العلامة التي تم وضع علامة عليها بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## أدوات اللوحة {#panel-widgets}

تعرض أداة **علامات الخريطة** *(لأندرويد)* وأداة **إشارة المسافة - الأدوات** *(لـ iOS)* ما يلي:

- *المسافة من موقعك الحالي* إلى النقطة المحددة المشار إليها بواسطة العلامة على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- *الوقت المقدر للوصول أو ETA*.
يُحسب هذا الوقت (ساعة:دقيقة) الذي يجب أن تصل فيه المركبة أو الشخص إلى الوجهة. ويُحسب كالمسافة إلى العلامة مقسومة على متوسط السرعة.
يُحسب متوسط السرعة كمتوسط لجميع قيم السرعة المستلمة من نقاط الموقع للفترة الزمنية التي حددتها من 15 ثانية إلى 60 دقيقة.

يمكنك أيضًا اختيار عرض علامة واحدة أو اثنتين. اقرأ المزيد عن إعدادات الأداة في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة معينة على الخريطة) والعلامة.
:::


<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![أدوات اللوحة](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> ← <Translate android="true" ids="map_markers_item"/>* |
| بالنقر 1 | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| بالنقر 2 | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة (وضع الانتقال إلى موقع العلامة) |
| النقر الطويل + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتتبعة، تحتاج إلى النقر طويلاً ثم تحريك موضع الخريطة قليلاً (يجب ألا تظهر قائمة السياق). |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![أدوات اللوحة](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## تهيئة أدوات العلامات {#configure-marker-widgets}

يمكنك قراءة معلومات عامة حول إعدادات أداة علامات الخريطة في هذه [الصفحة](../personal/markers#map-markers-widgets).

**شريط علامات الخريطة**
تعرض أداة الشريط العلوي المسافة والاتجاه إلى علامة الخريطة التالية من موقعك الحالي. في الإعدادات، يمكنك اختيار ما إذا كانت علامة واحدة أو اثنتين ستُعرضان في الجزء العلوي من الشاشة.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-02.png)

**علامات الخريطة**
تعرض الأداة المسافة أو الوقت المقدر للوصول (ETA) للعلامة الأولى أو الثانية في قائمة علامات الخريطة. يمكنك اختيار: علامة واحدة، الأولى أو الثانية، ليتم عرضها على الشاشة أو كليهما.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-01.png) ![المظهر على الخريطة](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| العروض | يسمح لك هذا الوضع باختيار المعلومات التي ستعرضها الأداة: *المسافة* أو *الوقت المقدر للوصول*. |
| الفاصل الزمني | إذا تم اختيار *الوقت المقدر للوصول* في "العرض"، يظهر هذا الخيار مع اختيار الأوقات (من 15 ثانية إلى 60 دقيقة) لحساب الوقت المقدر للوصول. |
| النقر على الأداة | يسمح لك هذا الإعداد باختيار الإجراء الذي سيتم تنفيذه عند النقر على الأداة: *تبديل الوضع* أو *الانتقال إلى موقع العلامة*. |


## المظهر على الخريطة {#appearance-on-the-map}

تتوفر تهيئة مظهر علامات الخريطة في كل من إصداري أندرويد و iOS من OsmAnd. قائمة "المظهر على الخريطة" هي إعداد عام لعلامات الخريطة وتُطبق سواء كانت الأدوات ممكّنة أم لا. يمكنك قراءة المعلومات التفصيلية في هذه [الصفحة](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![المظهر على الخريطة](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو الثانية في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | يشير إلى الاتجاه إلى العلامة المتتبعة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلا يتم عرض سهم. |
| <Translate android="true" ids="show_guide_line"/> | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتتبعة في خط مستقيم. |
| <Translate android="true" ids="one_tap_active"/> | بنقرة واحدة على العلامة المطلوبة على الخريطة، تنتقل هذه العلامة إلى أعلى قائمة علامات الخريطة النشطة دون فتح قائمة السياق. |
| <Translate android="true" ids="keep_passed_markers"/> | العلامات المضافة كمجموعة من المفضلة أو نقاط طريق GPX التي تم وضع علامة "تم المرور" عليها ستبقى على الخريطة. إذا لم تكن المجموعة نشطة، ستختفي العلامات من الخريطة. |

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![مظهر علامات الخريطة iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو الثانية في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_direction"/> | يسمح لك باختيار ما إذا كنت تريد عرض الأدوات وكيف ستظهر: فوق الخريطة (<Translate android="true" ids="shared_string_topbar"/>) أو على الجانب الأيمن من الشاشة (<Translate android="true" ids="shared_string_widgets"/>). |
| الأسهم على الخريطة | يشير إلى الاتجاه إلى العلامة المتتبعة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلا يتم عرض سهم. |
| خط الاتجاه | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتتبعة في خط مستقيم. |

</TabItem>

</Tabs>


## مقالات ذات صلة {#related-articles}

- [تهيئة الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [أدوات المعلومات](./info-widgets.md)
- [أدوات الملاحة](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [الإجراء السريع](./quick-action.md)


> *آخر تحديث: أكتوبر 2023*