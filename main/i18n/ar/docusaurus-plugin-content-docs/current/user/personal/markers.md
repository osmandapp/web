---
source-hash: 4a76625c2bb84dea3475d937395b2dcabeed514e2bbf68736a1f6e8649b066f9
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

العلامات هي نقاط خاصة محددة على الخريطة كأعلام يمكن إنشاؤها بسرعة بنقرة واحدة دون تحديد اسم ومعلومات أخرى على عكس [النقاط المفضلة](./favorites.md). توفر العلامات أيضًا وظائف إضافية مع [الودجات](../widgets/markers.md)، و**الأسهم** (<Translate android="true" ids="show_arrows_on_the_map"/>) و**مؤشر المسافة** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![علامات الخريطة في أندرويد](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![علامات الخريطة في iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## العلامات {#markers}

### إضافة / تعديل العلامات {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انقر نقرة قصيرة أو طويلة على الخريطة وحدد الإجراء المطلوب من [قائمة سياق الخريطة](../map/map-context-menu.md#add--edit-marker).

![إجراء إضافة تعديل علامة في أندرويد](@site/static/img/map/add_marker_android.png) ![إجراء تجاوز علامة في أندرويد](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انقر نقرة قصيرة أو طويلة على الخريطة واختر الإجراء المطلوب في [قائمة سياق الخريطة](../map/map-context-menu.md#add--edit-marker).

![إجراء إضافة تعديل علامة في iOS](@site/static/img/map/add_marker_ios.png) ![إجراء استعادة علامة في أندرويد](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

من الممكن تحديد نقطة أو كائن لتسهيل تخطيط الملاحة. ما عليك سوى النقر على أيقونة *العلم* (أندرويد) أو *السهم* (iOS) في القائمة لعرض الاتجاه والمسافة إلى النقطة المحددة من موقعك الحالي (أو نقطة مركز الخريطة / نقطة اللمس الأولية للخريطة عند إيقاف تشغيل الموقع).

***الإجراءات***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. يضع علامة جديدة على النقطة المحددة.
- **تحديد كتجاوز** (أندرويد) / تجاهل (iOS). يعطل العلامة ويضعها في السجل.
- **تفعيل** (أندرويد). ينقل العلامة إلى الموضع العلوي (في اللوحة العلوية).
- **استعادة العلامة** (أندرويد). ينقل العلامة من السجل إلى القائمة النشطة.

:::note
لا يمكنك حذف العلامة على الفور، بل تحتاج أولاً إلى تعطيلها (تحديدها كتجاوز)، بحيث يتم نقلها إلى [السجل](#history) وبعد ذلك يمكنك حذفها نهائيًا من السجل. بمجرد تعطيل العلامة، ستتم إزالتها من الخريطة وقائمة خط السير.
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


### قائمة خط السير {#itinerary-list}

تمثل قائمة خط السير قائمة مرتبة من العلامات حيث يتم استخدام العلامة الأولى في القائمة في الودجات للملاحة. اقرأ المزيد عنها في مقال [الملاحة حسب العلامات](../navigation/setup/markers-navigation.md#itinerary-list).

### مجموعات العلامات {#marker-groups}

<InfoAndroidOnly />

![مجموعات علامات الخريطة في أندرويد](@site/static/img/personal/markers/map_markers_groups_add_android.png)

يمكن إضافة العلامات وحذفها كمجموعة كاملة من مجموعة المفضلة أو ملف GPX مع نقاط الطريق. وهذا يجعلها مريحة جدًا للاستخدام في وضع ملاحة خاص - [الملاحة حسب العلامات](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### السجل {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![سجل علامات الخريطة في أندرويد](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![سجل علامات الخريطة في iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

السجل هو قائمة بجميع العلامات المعطلة (التي تم تجاوزها). من هذه القائمة، من الممكن حذف علامة بشكل دائم أو استعادتها.


## المظهر على الخريطة {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![المظهر_على_الخريطة](@site/static/img/widgets/appearence_on_the_map-01.png) ![المظهر_على_الخريطة](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![مظهر علامات الخريطة في iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![مظهر علامات الخريطة في iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

قائمة *المظهر على الخريطة* هي إعداد عام لعرض العلامات والمؤشرات الإضافية لها.
في إصدار iOS من OsmAnd، يعد *المظهر على الخريطة* أيضًا إعدادًا لعرض الودجات. هناك أيضًا إعدادات إضافية لـ [تكوين الودجات مع العلامات](../widgets/markers.md#configure-marker-widgets).

- **العلامات النشطة**. يعرض معلومات حول العلامة الأولى أو العلامتين الأوليين في قائمة علامات الخريطة.
- **مؤشر المسافة** *(لـ iOS)*. يسمح لك باختيار ما إذا كنت تريد عرض الودجات أم لا وكيف ستظهر: فوق الخريطة (الشريط العلوي) أو على الجانب الأيمن من الشاشة (الودجات).
- **الأسهم على الخريطة**. يشير إلى الاتجاه إلى العلامة المتعقبة (واحدة أو اثنتين) كسهم على الخريطة. إذا كانت العلامة في الجزء المرئي من الخريطة، فلن يتم عرض أي سهم.
- **خط الاتجاه**. يعرض الاتجاه، كخط متقطع، من نقطة معينة على الخريطة إلى العلامة المتعقبة في خط مستقيم.
- ***نقرة واحدة*** نشطة (*لـ أندرويد*). بنقرة واحدة على العلامة المطلوبة على الخريطة، تنتقل هذه العلامة إلى أعلى قائمة علامات الخريطة النشطة دون فتح قائمة السياق.
- **الاحتفاظ بالعلامات التي تم تجاوزها على الخريطة** *(لـ أندرويد)*. ستبقى العلامات المضافة كمجموعة من المفضلة أو نقاط طريق GPX التي تم تحديدها كتجاوز على الخريطة. إذا لم تكن المجموعة نشطة، فستختفي العلامات من الخريطة.


## تخطيط مسار للعلامات {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![نقاط تخطيط مسار علامات الخريطة في أندرويد](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![خيارات تخطيط مسار علامات الخريطة في أندرويد](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

باستخدام وظيفة أداة تخطيط مسار في قائمة العلامات، يمكنك فرز *العلامات* *من الباب إلى الباب*، أو وضعها بترتيب عكسي أو إنشاء *رحلة ذهابًا وإيابًا*. إذا نقرت على خيار *الملاحة*، فسيتم استخدام *العلامات* كـ [وجهات وسيطة](../navigation/setup/route-navigation.md#intermediate-destinations).


## الإجراءات {#actions}

<InfoAndroidOnly />

![المزيد من علامات الخريطة في أندرويد](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. يمكن فرز العلامات في القائمة حسب الاسم، القرب، وقت الإضافة.
- **<Translate android="true" ids="appearance_on_the_map"/>** أو **<Translate ios="true" ids="shared_string_appearance"/>**. [إعدادات علامات الخريطة](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. يضيف علامات عن طريق [إدخال الإحداثيات](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. يبني مسارًا [للملاحة](../navigation/setup/markers-navigation.md) باستخدام العلامات المختارة.
- **<Translate android="true" ids="marker_save_as_track"/>**. يحفظ العلامات النشطة في ملف GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. يعطل جميع العلامات وينقلها إلى [السجل](#history).


## مقالات ذات صلة {#related-articles}

- [الملاحة حسب العلامات](../navigation/setup/markers-navigation.md)
- [ودجات العلامات](../widgets/markers.md)