---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title:  عناصر واجهة مستخدم العلامات
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

العلامات هي نقاط مؤقتة تُشار إليها على الخريطة على شكل أعلام. تعرض عناصر واجهة المستخدم *الاتجاه* و*المسافة* و*العنوان* و*الوقت المقدر للوصول* إلى العلامة. تتيح لك العثور بسرعة على العلامات على الخريطة، بالإضافة إلى تغيير موقعها. يمكنك قراءة المزيد عن العلامات في هذه [المقالة](../personal/markers).


## عنصر واجهة المستخدم في الشريط العلوي {#top-bar-widget}

يعرض عنصر واجهة المستخدم **شريط علامات الخريطة** (أندرويد) / **إشارة المسافة - الشريط العلوي** (iOS):

- المسافة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) إلى النقطة المحددة المشار إليها بالعلامة على الخريطة ([وحدات الطول](../personal/profiles/#general-settings) يمكن اختيارها في إعدادات الملف الشخصي).
- سهم بنفس لون العلامة يشير إلى الاتجاه من الموقع الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) واتجاه جهازك في الفضاء (الاتجاه) نحو العلامة.
- عنوان الموقع.
- أيقونة القائمة التي تؤدي إلى [قائمة علامات الخريطة](../personal/markers/#map-markers-menu).

يمكنك أيضًا اختيار عرض علامة واحدة أو اثنتين. اقرأ المزيد عن إعدادات عنصر واجهة المستخدم في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) والعلامة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختيار لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| الضغط المطول + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتتبعة، تحتاج إلى الضغط المطول وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر قائمة السياق). |
| الاقتراب من العلامة | في حال كان موقعك ضمن دائرة صغيرة من علامة الخريطة (**< 50 م**)، في حقل عنصر واجهة المستخدم يمكنك رؤية زر علامة اختيار لحذف علامة الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال العلامة التي تم وضع علامة عليها بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختيار لوحة ← <Translate android="true" ids="map_markers_bar"/>*|
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| الاقتراب من العلامة | في حال كان موقعك ضمن دائرة صغيرة من علامة الخريطة (**< 50 م**)، في حقل عنصر واجهة المستخدم يمكنك رؤية زر علامة اختيار لحذف علامة الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال العلامة التي تم وضع علامة عليها بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## عناصر واجهة المستخدم للوحة {#panel-widgets}

يعرض عنصر واجهة المستخدم **علامات الخريطة** *(لأندرويد)* وعنصر واجهة المستخدم **إشارة المسافة - عناصر واجهة المستخدم** *(لـ iOS)*:

- *المسافة من موقعك الحالي* إلى النقطة المحددة المشار إليها بالعلامة على الخريطة ([وحدات الطول](../personal/profiles/#general-settings) يمكن اختيارها في إعدادات الملف الشخصي).
- *الوقت المقدر للوصول أو ETA*.
  هذا هو الوقت (ساعة:دقيقة) الذي يجب أن تصل فيه المركبة أو الشخص إلى الوجهة. يتم حسابه كالمسافة إلى العلامة مقسومة على متوسط السرعة.
  يتم حساب متوسط السرعة كمتوسط لجميع قيم السرعة المستلمة من نقاط الموقع للفترة الزمنية التي حددتها من 15 ثانية إلى 60 دقيقة.

يمكنك أيضًا اختيار عرض علامة واحدة أو اثنتين. اقرأ المزيد عن إعدادات عنصر واجهة المستخدم في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة معينة على الخريطة) والعلامة.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panel widgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> ← <Translate android="true" ids="map_markers_item"/>* |
| بالنقر 1 | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| بالنقر 2 | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة (وضع الانتقال إلى موقع العلامة) |
| الضغط المطول + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتتبعة، تحتاج إلى الضغط المطول وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر قائمة السياق). |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختيار لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | الجزء المرئي من الخريطة ينتقل إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## تكوين عناصر واجهة مستخدم العلامات {#configure-marker-widgets}

يمكنك قراءة معلومات عامة حول إعدادات عنصر واجهة مستخدم علامات الخريطة في هذه [الصفحة](../personal/markers#map-markers-widgets).

**شريط علامات الخريطة**
يعرض عنصر واجهة المستخدم في الشريط العلوي المسافة والاتجاه إلى علامة الخريطة التالية من موقعك الحالي. في الإعدادات، يمكنك اختيار ما إذا كانت علامة واحدة أو اثنتين ستعرضان في أعلى الشاشة.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)

**علامات الخريطة**
يعرض عنصر واجهة المستخدم المسافة أو الوقت المقدر للوصول (ETA) للعلامة الأولى أو الثانية في قائمة علامات الخريطة. يمكنك اختيار: علامة واحدة، الأولى أو الثانية، لعرضها على الشاشة أو كليهما.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png) ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| يعرض | يتيح لك هذا الوضع اختيار المعلومات التي سيعرضها عنصر واجهة المستخدم: *المسافة* أو *الوقت المقدر للوصول*. |
| الفاصل الزمني | إذا تم اختيار *الوقت المقدر للوصول* في "عرض"، يظهر هذا الخيار مع اختيار الأوقات (من 15 ثانية إلى 60 دقيقة) لحساب الوقت المقدر للوصول. |
| النقر على عنصر واجهة المستخدم | يتيح لك هذا الإعداد اختيار الإجراء الذي سيتم تنفيذه عند النقر على عنصر واجهة المستخدم: *تبديل الوضع* أو *الانتقال إلى موقع العلامة*. |


## المظهر على الخريطة {#appearance-on_the-map}

يتوفر تكوين مظهر علامات الخريطة في كل من إصدارات أندرويد و iOS من OsmAnd. قائمة "المظهر على الخريطة" هي إعداد عام لعلامات الخريطة وتنطبق سواء كانت عناصر واجهة المستخدم ممكّنة أم لا. يمكنك قراءة المعلومات التفصيلية في هذه [الصفحة](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو الاثنتين في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | يشير إلى الاتجاه إلى العلامة المتتبعة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، لا يتم عرض سهم. |
| <Translate android="true" ids="show_guide_line"/> | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتتبعة في خط مستقيم. |
| <Translate android="true" ids="one_tap_active"/> | بنقرة واحدة على العلامة المطلوبة على الخريطة، تنتقل هذه العلامة إلى أعلى قائمة علامات الخريطة النشطة دون فتح قائمة السياق. |
| <Translate android="true" ids="keep_passed_markers"/> | العلامات المضافة كمجموعة من المفضلة أو نقاط طريق GPX التي تم وضع علامة "تم المرور" عليها ستبقى على الخريطة. إذا لم تكن المجموعة نشطة، ستختفي العلامات من الخريطة. |

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو الاثنتين في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_direction"/> | يتيح لك اختيار ما إذا كنت تريد عرض عناصر واجهة المستخدم وكيف ستظهر: فوق الخريطة (<Translate android="true" ids="shared_string_topbar"/>) أو على الجانب الأيمن من الشاشة (<Translate android="true" ids="shared_string_widgets"/>). |
| الأسهم على الخريطة | يشير إلى الاتجاه إلى العلامة المتتبعة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، لا يتم عرض سهم. |
| خط الاتجاه | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتتبعة في خط مستقيم. |

</TabItem>

</Tabs>


## مقالات ذات صلة {#related-articles}

- [تكوين الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [عناصر واجهة المستخدم المعلوماتية](./info-widgets.md)
- [عناصر واجهة المستخدم الملاحية](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [الإجراء السريع](./quick-action.md)


> *آخر تحديث: أكتوبر 2023*