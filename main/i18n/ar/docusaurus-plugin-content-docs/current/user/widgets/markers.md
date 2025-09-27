---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  ودجات العلامات
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

العلامات هي نقاط مؤقتة تظهر على الخريطة على شكل أعلام. تعرض الودجات *الاتجاه*، و*المسافة*، و*العنوان*، و*وقت الوصول المقدر* إلى العلامة. تسمح لك بالعثور بسرعة على العلامات على الخريطة، وكذلك تغيير موضعها. يمكنك قراءة المزيد عن العلامات في هذا [المقال](../personal/markers).

## ودجة الشريط العلوي {#top-bar-widget}

تعرض ودجة **شريط علامات الخريطة** (لأندرويد) / ودجة **مؤشر المسافة - الشريط العلوي** (لـ iOS) ما يلي:

- المسافة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة اللمس الأولية للخريطة عند إيقاف تشغيل الموقع) إلى النقطة المحددة التي تشير إليها العلامة على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- سهم بنفس لون العلامة يشير إلى الاتجاه من الموقع الحالي (أو نقطة مركز الخريطة / نقطة اللمس الأولية للخريطة عند إيقاف تشغيل الموقع) واتجاه جهازك في الفضاء (heading) نحو العلامة.
- عنوان الموقع.
- أيقونة القائمة التي تؤدي إلى [قائمة علامات الخريطة](../navigation/setup/markers-navigation.md#itinerary-list).

يمكنك أيضًا تحديد عرض علامة واحدة أو علامتين. اقرأ المزيد عن إعدادات الودجة في هذا [المقال](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة مركز الخريطة / نقطة اللمس الأولية للخريطة عند إيقاف تشغيل الموقع) والعلامة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![علامات الخريطة على ودجة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)

| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → اختر لوحة → <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع العلامة. |
| نقر مطول + تحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتعقبة، تحتاج إلى النقر مطولاً وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر القائمة السياقية). |
| الاقتراب من العلامة | في حال كان موقعك ضمن نصف قطر صغير من علامة الخريطة (**< ٥٠ م**)، يمكنك في حقل الودجة رؤية زر علامة صح لحذف علامة الخريطة بسرعة (تمييزها كـ "تم المرور بها"). يتم استبدال العلامة المحددة بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

<TabItem value="ios" label="iOS">

![علامات الخريطة على ودجة الشريط العلوي](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → اختر لوحة → <Translate android="true" ids="map_markers_bar"/>*|
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "وقت الوصول المقدر" (وضع التبديل). |
| الاقتراب من العلامة | في حال كان موقعك ضمن نصف قطر صغير من علامة الخريطة (**< ٥٠ م**)، يمكنك في حقل الودجة رؤية زر علامة صح لحذف علامة الخريطة بسرعة (تمييزها كـ "تم المرور بها"). يتم استبدال العلامة المحددة بالعلامة التالية في قائمة العلامات. |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>

## ودجات اللوحة {#panel-widgets}

تعرض ودجة **علامات الخريطة** *(لأندرويد)* وودجة **مؤشر المسافة - الودجات** *(لـ iOS)* ما يلي:

- *المسافة من موقعك الحالي* إلى النقطة المحددة التي تشير إليها العلامة على الخريطة (يمكن اختيار [وحدات الطول](../personal/profiles/#general-settings) في إعدادات الملف الشخصي).
- *وقت الوصول المقدر أو ETA*. هذا هو الوقت (ساعة:دقيقة) الذي يجب أن تصل فيه المركبة أو الشخص إلى الوجهة. يتم حسابه بقسمة المسافة إلى العلامة على متوسط السرعة. يتم حساب متوسط السرعة كمتوسط لجميع قيم السرعة المستلمة من نقاط الموقع للفاصل الزمني الذي حددته من ١٥ ثانية إلى ٦٠ دقيقة.

يمكنك أيضًا تحديد عرض علامة واحدة أو علامتين. اقرأ المزيد عن إعدادات الودجة في هذا [المقال](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*المسافة إلى العلامة* هي طول الخط المستقيم بين موقعك (أو نقطة معينة على الخريطة) والعلامة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![ودجات اللوحة](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| تمكين | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| بالنقر ١ | التبديل بين "المسافة" / "وقت الوصول المقدر" (وضع التبديل). |
| بالنقر ٢ | ينتقل الجزء المرئي من الخريطة إلى موقع العلامة (وضع الانتقال إلى موقع العلامة) |
| نقر مطول + تحريك | لقياس المسافة ورؤية الاتجاه من نقطة معينة على الخريطة إلى العلامة المتعقبة، تحتاج إلى النقر مطولاً وتحريك موضع الخريطة قليلاً على الفور (يجب ألا تظهر القائمة السياقية). |
| تنسيق المسافة | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

<TabItem value="ios" label="iOS">

![ودجات اللوحة](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| تمكين | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → اختر لوحة → <Translate android="true" ids="map_markers_bar"/>* |
| بالنقر | ينتقل الجزء المرئي من الخريطة إلى موقع العلامة. |
| بالنقر | التبديل بين "المسافة" / "وقت الوصول المقدر" (وضع التبديل). |
| تنسيق المسافة | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>

## ضبط ودجات العلامات {#configure-marker-widgets}

يمكنك قراءة معلومات عامة حول إعدادات ودجة علامات الخريطة في هذه [الصفحة](../personal/markers#appearance-on-the-map).

### شريط علامات الخريطة {#map-markers-bar}
تعرض ودجة الشريط العلوي المسافة والاتجاه إلى علامة الخريطة التالية من موقعك الحالي. في الإعدادات، يمكنك اختيار ما إذا كان سيتم عرض علامة واحدة أو علامتين في الجزء العلوي من الشاشة.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-02.png)

### علامات الخريطة {#map-markers}
تعرض الودجة المسافة أو وقت الوصول المقدر (ETA) للعلامة الأولى أو الثانية في قائمة علامات الخريطة. يمكنك اختيار: علامة واحدة، الأولى أو الثانية، ليتم عرضها على الشاشة أو كليهما.

![المظهر على الخريطة](@site/static/img/widgets/configure-marker-wid-01.png) ![المظهر على الخريطة](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| العرض | يسمح لك هذا الوضع باختيار المعلومات التي ستعرضها الودجة: *المسافة* أو *وقت الوصول المقدر*. |
| الفاصل الزمني | إذا تم تحديد *وقت الوصول المقدر* في "العرض"، يظهر هذا الخيار مع اختيار الأوقات (من ١٥ ثانية إلى ٦٠ دقيقة) لحساب وقت الوصول المقدر. |
| النقر على الودجة | يسمح لك هذا الإعداد باختيار الإجراء الذي سيتم تنفيذه عند النقر على الودجة: *وضع التبديل* أو *الانتقال إلى موقع العلامة*. |

## المظهر على الخريطة {#appearance-on-the-map}

يتوفر ضبط مظهر علامات الخريطة في كل من إصداري أوسماند لأندرويد و iOS. قائمة "المظهر على الخريطة" هي إعداد عام لعلامات الخريطة ويتم تطبيقها سواء كانت الودجات ممكّنة أم لا. يمكنك قراءة المعلومات التفصيلية في هذه [الصفحة](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![المظهر على الخريطة](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو العلامتين الأوليين في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | يشير إلى الاتجاه إلى العلامة المتعقبة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلن يتم عرض أي سهم. |
| <Translate android="true" ids="show_guide_line"/> | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتعقبة في خط مستقيم. |
| <Translate android="true" ids="one_tap_active"/> | بنقرة واحدة على العلامة المطلوبة على الخريطة، تنتقل هذه العلامة إلى أعلى قائمة علامات الخريطة النشطة دون فتح القائمة السياقية. |
| <Translate android="true" ids="keep_passed_markers"/> | ستبقى العلامات المضافة كمجموعة من المفضلة أو نقاط الطريق GPX التي تم تمييزها بأنها "تم المرور بها" على الخريطة. إذا لم تكن المجموعة نشطة، فستختفي العلامات من الخريطة. |

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![مظهر علامات الخريطة iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | يعرض معلومات حول العلامة الأولى أو العلامتين الأوليين في قائمة علامات الخريطة. |
| <Translate android="true" ids="show_direction"/> | يسمح لك باختيار ما إذا كنت تريد عرض الودجات أم لا وكيف ستظهر: فوق الخريطة (<Translate android="true" ids="shared_string_topbar"/>) أو على الجانب الأيمن من الشاشة (<Translate android="true" ids="shared_string_widgets"/>). |
| أسهم على الخريطة | يشير إلى الاتجاه إلى العلامة المتعقبة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلن يتم عرض أي سهم. |
| خط الاتجاه | يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتعقبة في خط مستقيم. |

</TabItem>

</Tabs>

## مقالات ذات صلة {#related-articles}

- [ضبط الشاشة](./configure-screen.md)
- [أزرار الخريطة](./map-buttons.md)
- [الودجات المعلوماتية](./info-widgets.md)
- [الودجات الملاحية](./nav-widgets.md)
- [مسطرة نصف القطر والمسطرة](./radius-ruler.md)
- [الإجراء السريع](./quick-action.md)