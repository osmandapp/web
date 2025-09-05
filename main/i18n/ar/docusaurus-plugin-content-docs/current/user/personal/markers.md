---
source-hash: fac05f4f13c5bd5f7843d69f6e63dcd842a9f677768496e4a171674d0bf80050
sidebar_position: 8
title:  العلامات
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

العلامات هي نقاط خاصة يتم تحديدها على الخريطة كأعلام يمكن إنشاؤها بسرعة بنقرة واحدة دون تحديد الاسم والمعلومات الأخرى على عكس [النقاط المفضلة](./favorites.md). توفر العلامات أيضًا وظائف إضافية مع [الأدوات المصغرة](../widgets/markers.md)، و**الأسهم** (<Translate android="true" ids="show_arrows_on_the_map"/>) و**إشارة المسافة** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![علامات الخريطة أندرويد](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![علامات الخريطة iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## العلامات {#markers}

### إضافة / تعديل العلامات {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انقر نقرة قصيرة أو طويلة على الخريطة وحدد الإجراء المطلوب من [قائمة سياق الخريطة](../map/map-context-menu.md#add--edit-marker).

![إجراء إضافة علامة تحرير أندرويد](@site/static/img/map/add_marker_android.png) ![إجراء علامة مرور أندرويد](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انقر نقرة قصيرة أو طويلة على الخريطة واختر الإجراء المطلوب في [قائمة سياق الخريطة](../map/map-context-menu.md#add--edit-marker).

![إجراء إضافة علامة تحرير iOS](@site/static/img/map/add_marker_ios.png) ![إجراء استعادة علامة أندرويد](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

من الممكن وضع علامة على نقطة أو كائن لتسهيل تخطيط التنقل. ما عليك سوى النقر على أيقونة *العلم* (*أندرويد*) أو *السهم* (*iOS*) في القائمة لعرض الاتجاه والمسافة إلى النقطة المحددة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة لمس الخريطة الأولية عند إيقاف تشغيل الموقع).

***الإجراءات***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. يضع علامة جديدة على النقطة المحددة.
- **تحديد كـ "تم المرور به"** (*أندرويد*) / تجاهل (iOS). يلغي تنشيط العلامة ويضعها في السجل.
- **تنشيط** (*أندرويد*). ينقل العلامة إلى الموضع العلوي (على اللوحة العلوية).
- **استعادة العلامة** (*أندرويد*). ينقل العلامة من السجل إلى قائمة النشطة.

:::note
لا يمكنك حذف العلامة فورًا، بل تحتاج أولاً إلى إلغاء تنشيطها (تحديدها كـ "تم المرور بها")، بحيث يتم نقلها إلى [السجل](#history) ثم يمكنك حذفها نهائيًا من السجل. بمجرد إلغاء تنشيط العلامة، ستتم إزالتها من الخريطة وقائمة المسار.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### قائمة المسار {#itinerary-list}

قائمة المسار تمثل قائمة مرتبة من العلامات حيث يتم استخدام العلامة الأولى في الأدوات المصغرة للتنقل. اقرأ المزيد عنها في مقال [التنقل بواسطة العلامات](../navigation/setup/markers-navigation.md#itinerary-list).

### مجموعات العلامات {#marker-groups}

<InfoAndroidOnly />

![مجموعات علامات الخريطة أندرويد](@site/static/img/personal/markers/map_markers_groups_add_android.png)

يمكن إضافة العلامات وحذفها كمجموعة كاملة من مجموعة المفضلة أو ملف GPX مع نقاط الطريق. وهذا يجعلها مريحة جدًا للاستخدام في وضع تنقل خاص - [التنقل بواسطة العلامات](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### السجل {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![سجل علامات الخريطة أندرويد](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![سجل علامات الخريطة iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

السجل هو قائمة بجميع العلامات غير النشطة (التي تم المرور بها). من هذه القائمة، يمكن حذف علامة بشكل دائم أو استعادتها.

## المظهر على الخريطة {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![المظهر على الخريطة](@site/static/img/widgets/appearence_on_the_map-01.png) ![المظهر على الخريطة](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![مظهر علامات الخريطة iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![مظهر علامات الخريطة iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

قائمة *المظهر على الخريطة* هي إعداد عام لعرض العلامات والمؤشرات الإضافية لها.
في إصدار iOS من OsmAnd، *المظهر على الخريطة* هو أيضًا إعداد لعرض الأدوات المصغرة. توجد أيضًا إعدادات إضافية لـ [تكوين الأدوات المصغرة باستخدام العلامات](../widgets/markers.md#configure-marker-widgets).

- **العلامات النشطة**. تعرض معلومات حول العلامة الأولى أو الثانية في قائمة علامات الخريطة.
- **إشارة المسافة** *(لـ iOS)*. تسمح لك باختيار ما إذا كنت تريد عرض الأدوات المصغرة وكيف ستظهر: فوق الخريطة (الشريط العلوي) أو على الجانب الأيمن من الشاشة (الأدوات المصغرة).
- **الأسهم على الخريطة**. تشير إلى الاتجاه إلى العلامة المتعقبة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلن يتم عرض أي سهم.
- **خط الاتجاه**. يظهر الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتعقبة في خط مستقيم.
- ***نقرة واحدة*** نشطة (*لأندرويد*). بنقرة واحدة على العلامة المطلوبة على الخريطة، تنتقل هذه العلامة إلى أعلى قائمة علامات الخريطة النشطة دون فتح قائمة السياق.
- **الاحتفاظ بالعلامات التي تم المرور بها على الخريطة** *(لأندرويد)*. العلامات المضافة كمجموعة من المفضلة أو نقاط طريق GPX التي تم تحديدها كـ "تم المرور بها" ستبقى على الخريطة. إذا لم تكن المجموعة نشطة، فستختفي العلامات من الخريطة.

## تخطيط المسار للعلامات {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![نقاط تخطيط مسار علامات الخريطة أندرويد](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![خيارات تخطيط مسار علامات الخريطة أندرويد](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

باستخدام وظيفة أداة "تخطيط مسار" في قائمة العلامات، يمكنك فرز *العلامات* *من الباب إلى الباب*، أو وضعها بترتيب عكسي، أو إنشاء *رحلة ذهاب وعودة*. إذا نقرت على خيار *التنقل*، فسيتم استخدام *العلامات* كـ [وجهات وسيطة](../navigation/setup/route-navigation.md#intermediate-destinations).

## الإجراءات {#actions}

<InfoAndroidOnly />

![المزيد من علامات الخريطة أندرويد](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. يمكن فرز العلامات في القائمة حسب الاسم، القرب، وقت الإضافة.
- **<Translate android="true" ids="appearance_on_the_map"/>** أو **<Translate ios="true" ids="shared_string_appearance"/>**. [إعدادات علامات الخريطة](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. يضيف العلامات عن طريق [إدخال الإحداثيات](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. يبني مسارًا [للتنقل](../navigation/setup/markers-navigation.md) باستخدام العلامات المختارة.
- **<Translate android="true" ids="marker_save_as_track"/>**. يحفظ العلامات النشطة في ملف GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. يلغي تنشيط جميع العلامات وينقلها إلى [السجل](#history).

## مقالات ذات صلة {#related-articles}

- [التنقل بواسطة العلامات](../navigation/setup/markers-navigation.md)
- [أدوات العلامات المصغرة](../widgets/markers.md)

> *آخر تحديث: أغسطس 2024*