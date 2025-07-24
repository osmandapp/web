---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title:  أدوات تحديد المواقع (المؤشرات)
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

المؤشرات هي نقاط مؤقتة تُشار إليها على الخريطة على شكل أعلام. تعرض الأدوات *الاتجاه* و*المسافة* و*العنوان* و*الوقت المقدر للوصول* إلى المؤشر. تتيح لك العثور بسرعة على المؤشرات على الخريطة، بالإضافة إلى تغيير موقعها. يمكنك قراءة المزيد عن المؤشرات في هذه [المقالة](../personal/markers).


## أداة الشريط العلوي {#top-bar-widget}

تعرض أداة **شريط مؤشرات الخريطة** (أندرويد) / أداة **إشارة المسافة - الشريط العلوي** (iOS) ما يلي:

- المسافة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) إلى النقطة المحددة التي يشير إليها المؤشر على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- يشير سهم بنفس لون المؤشر إلى الاتجاه من الموقع الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) واتجاه جهازك في الفضاء (الاتجاه) نحو المؤشر.
- عنوان الموقع.
- أيقونة القائمة التي تؤدي إلى [قائمة مؤشرات الخريطة](../personal/markers/#map-markers-menu).

يمكنك أيضًا اختيار عرض مؤشر واحد أو مؤشرين. اقرأ المزيد عن إعدادات الأداة في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى المؤشر* هي طول الخط المستقيم بين موقعك (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عندما يكون الموقع متوقفًا) والمؤشر.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مؤشرات الخريطة على أداة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع المؤشر. |
| النقر الطويل + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى المؤشر المتتبع، تحتاج إلى النقر طويلاً وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر قائمة السياق). |
| الاقتراب من المؤشر | في حال كان موقعك ضمن دائرة نصف قطرها صغيرة من مؤشر الخريطة (**< 50 مترًا**)، في حقل الأداة يمكنك رؤية زر علامة اختيار لحذف مؤشر الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال المؤشر الذي تم التحقق منه بالمؤشر التالي في قائمة المؤشرات. |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![مؤشرات الخريطة على أداة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>*|
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع المؤشر. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| الاقتراب من المؤشر | في حال كان موقعك ضمن دائرة نصف قطرها صغيرة من مؤشر الخريطة (**< 50 مترًا**)، في حقل الأداة يمكنك رؤية زر علامة اختيار لحذف مؤشر الخريطة بسرعة (وضع علامة "تم المرور"). يتم استبدال المؤشر الذي تم التحقق منه بالمؤشر التالي في قائمة المؤشرات. |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## أدوات اللوحة {#panel-widgets}

تعرض أداة **مؤشرات الخريطة** *(لأندرويد)* وأداة **إشارة المسافة - الأدوات** *(لـ iOS)* ما يلي:

- *المسافة من موقعك الحالي* إلى النقطة المحددة التي يشير إليها المؤشر على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- *الوقت المقدر للوصول أو ETA*.
هذا هو الوقت (ساعة:دقيقة) الذي يجب أن تصل فيه المركبة أو الشخص إلى الوجهة. يتم حسابه كالمسافة إلى المؤشر مقسومة على متوسط السرعة.
يتم حساب متوسط السرعة كمتوسط لجميع قيم السرعة المستلمة من نقاط الموقع للفترة الزمنية التي حددتها من 15 ثانية إلى 60 دقيقة.

يمكنك أيضًا اختيار عرض مؤشر واحد أو مؤشرين. اقرأ المزيد عن إعدادات الأداة في هذه [المقالة](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى المؤشر* هي طول الخط المستقيم بين موقعك (أو نقطة معينة على الخريطة) والمؤشر.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أدوات اللوحة](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> ← <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> ← <Translate android="true" ids="map_markers_item"/>* |
| بالنقر 1 | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| بالنقر 2 | ينتقل الجزء المرئي من الخريطة إلى موقع المؤشر (وضع الانتقال إلى موقع المؤشر) |
| النقر الطويل + التحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى المؤشر المتتبع، تحتاج إلى النقر طويلاً وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر قائمة السياق). |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![أدوات اللوحة](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> ← اختر لوحة ← <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع المؤشر. |
| بالنقر | التبديل بين "المسافة" / "الوقت المقدر للوصول" (وضع التبديل). |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## تهيئة أدوات المؤشرات {#configure-marker-widgets}

يمكنك قراءة معلومات عامة حول إعدادات أداة مؤشرات الخريطة على هذه [الصفحة](../personal/markers#map-markers-widgets).

**شريط مؤشرات الخريطة**
تعرض أداة الشريط العلوي المسافة والاتجاه إلى مؤشر الخريطة التالي من موقعك الحالي. في الإعدادات، يمكنك اختيار ما إذا كان سيتم عرض مؤشر واحد أو مؤشرين في الجزء العلوي من الشاشة.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-02.png)

**مؤشرات الخريطة**
تعرض الأداة المسافة أو الوقت المقدر للوصول (ETA) للمؤشر الأول أو الثاني في قائمة مؤشرات الخريطة. يمكنك اختيار: مؤشر واحد، الأول أو الثاني، ليتم عرضه على الشاشة أو كليهما.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-01.png) ![المظهر على الخريطة](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| العروض | يتيح لك هذا الوضع اختيار المعلومات التي ستعرضها الأداة: *المسافة* أو *الوقت المقدر للوصول*. |
| الفاصل الزمني | إذا تم تحديد *الوقت المقدر للوصول* في "عرض"، يظهر هذا الخيار مع اختيار الأوقات (من 15 ثانية إلى 60 دقيقة) لحساب ETA. |
| النقر على الأداة | يتيح لك هذا الإعداد اختيار الإجراء الذي سيتم تنفيذه عند النقر على الأداة: *تبديل الوضع* أو *الانتقال إلى موقع المؤشر*. |


## المظهر على الخريطة {#appearance-on-the-map}

تتوفر تهيئة مظهر مؤشرات الخريطة في كل من إصدارات أندرويد و iOS من OsmAnd. قائمة "المظهر على الخريطة" هي إعداد عام لمؤشرات الخريطة وتطبق سواء كانت الأدوات ممكّنة أم لا. يمكنك قراءة المعلومات التفصيلية على هذه [الصفحة](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![المظهر على الخريطة](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول المؤشر الأول أو الثاني في قائمة مؤشرات الخريطة. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | يشير إلى الاتجاه إلى المؤشر المتتبع (واحد أو اثنين) كسهم على الخريطة. إذا كان المؤشر في الجزء المرئي من الخريطة، فلن يتم عرض سهم. |
| <Translate android="true" ids="show_guide_line"/> | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى المؤشر المتتبع في خط مستقيم. |
| <Translate android="true" ids="one_tap_active"/> | بنقرة واحدة على المؤشر المطلوب على الخريطة، ينتقل هذا المؤشر إلى أعلى قائمة مؤشرات الخريطة النشطة دون فتح قائمة السياق. |
| <Translate android="true" ids="keep_passed_markers"/> | المؤشرات المضافة كمجموعة من المفضلة أو نقاط طريق GPX التي تم وضع علامة "تم المرور" عليها ستبقى على الخريطة. إذا لم تكن المجموعة نشطة، فستختفي المؤشرات من الخريطة. |

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![مظهر مؤشرات الخريطة iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول المؤشر الأول أو الثاني في قائمة مؤشرات الخريطة. |
| <Translate android="true" ids="show_direction"/> | يتيح لك اختيار ما إذا كنت تريد عرض الأدوات وكيف ستظهر: فوق الخريطة (<Translate android="true" ids="shared_string_topbar"/>) أو على الجانب الأيمن من الشاشة (<Translate android="true" ids="shared_string_widgets"/>). |
| الأسهم على الخريطة | يشير إلى الاتجاه إلى المؤشر المتتبع (واحد أو اثنين) كسهم على الخريطة. إذا كان المؤشر في الجزء المرئي من الخريطة، فلن يتم عرض سهم. |
| خط الاتجاه | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى المؤشر المتتبع في خط مستقيم. |

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