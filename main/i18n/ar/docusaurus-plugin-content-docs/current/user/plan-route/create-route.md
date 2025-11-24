---
source-hash: e175b4348c1413c15e33f549f53698ae0970ca70deb9fd83602a6d9dbda79e15
sidebar_position: 1
title:  تخطيط مسار
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## نظرة عامة {#overview}

أداة **تخطيط مسار** (*القائمة ← تخطيط مسار*) هي ميزة قوية في تطبيق OsmAnd تسمح لك بـ[إنشاء مسارات جديدة](#create-new-route) كمسارات GPX، و[تعديل وإضافة مقاطع جديدة](#segments) إلى المسارات المحفوظة بالفعل، و[قياس المسافات](#distance-measurement) على الخريطة، و[إرفاق مقاطع المسار](#attach-track-to-roads) بأقرب طريق متاح باستخدام ملفات تعريف ملاحة مختلفة. تم تصميم الميزة للعمل في *وضع عدم الاتصال بالإنترنت*.

يتكون المسار من مجموعة من المقاطع بين نقاط محددة. يمكن أن تكون المقاطع خطوطًا مستقيمة أو مسارات متكيفة مع الملف المحدد. يمكن حفظ المسار كملف GPX لاستيراده وتعديله و[التنقل به](../navigation/setup/gpx-navigation.md) لاحقًا.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## حالات الاستخدام الرئيسية {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### إنشاء مسار جديد {#create-new-route}

لإنشاء مسار جديد بصيغة GPX، استخدم الوظيفة الرئيسية لأداة *تخطيط مسار*. إنشاء مسار مسبقًا له العديد من المزايا، على عكس تسجيل المسار الحالي باستخدام *[ملحق تسجيل الرحلات](../plugins/trip-recording.md)*. يمكنك [إضافة](#adding-points) أي عدد تريده من النقاط إلى المسار، و[حذفها ونقلها](#point-context-menu)، وتغيير أنواع المسارات حسب [المقاطع](#route-between-points)، والحصول على [معلومات مفصلة حول المسار](#graph).  

بشكل افتراضي، سيتطابق نوع التوجيه مع ملف التعريف المحدد مسبقًا، انقر على أيقونة التوجيه لتحديد كيفية حساب التطبيق للمقطع لربط النقاط. يجب تكوين ملف التعريف المتاح [بشكل منفصل](../navigation/routing/osmand-routing.md#routing-types).  

يمكنك **التكبير والتصغير** لتسهيل وضع النقاط عند إنشاء مسار أو تعديله. عند **التصغير**، تصبح النقاط على المسار غير مرئية لرؤية أفضل لطول المسار بأكمله والخريطة ككل. تظل النقطة المضافة الأخيرة فقط ومؤشر إضافة النقطة التالية مرئيين.


### تعديل مسار GPX موجود {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="آي أو إس">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

تسمح أداة *تخطيط مسار* بتعديل مسار GPX موجود بالإضافة إلى [مسار مستورد](../personal/tracks/manage-tracks.md#import). ومع ذلك، في حال احتجت إلى استبعاد عدد كبير من النقاط بناءً على معايير عامة، قد تكون أداة [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) أكثر ملاءمة.


### قياس المسافة {#distance-measurement}

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_lines_andr.png)  

أداة *تخطيط مسار* هي طريقة سريعة وسهلة لقياس المسافة بين النقاط.

- حدد طريقة *الخط المستقيم* لتخطيط المسار. سيتم رسم خط متقطع بين النقاط.
- [أضف](#adding-points) النقطة الأولى على الخريطة التي سيتم رسم الخط منها.
- حرك الخريطة لتحديد المسافة والسمت. سيتم عرض المعلومات في حقل مع قائمة النقاط أسفل الخريطة.

:::note
مطلوب استخدام *الخط المستقيم* وسيتم استخدامه للمناطق غير المغطاة ببيانات التوجيه، مثل المناطق الوعرة وخارج المسارات.
:::


### الحصول على بيانات الارتفاع {#get-elevation-data}

<InfoAndroidOnly />

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

إذا كانت [بيانات الارتفاع](../map/tracks/track-context-menu.md#calculate-missing-elevation) مفقودة في مسار موجود، فمن الممكن إضافتها باستخدام الأدوات التالية:

- [استخدام الطرق القريبة](#attach-track-to-roads). يستخدم هذا الوضع الخرائط غير المتصلة بالإنترنت للعثور على أقرب الطرق لبناء مسار، لذلك سيتم استرداد بيانات الارتفاع من الطرق المرفقة. يمكن تعديل هندسة المسار.  
- [استخدام خرائط التضاريس](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) يحسب هذا الوضع الارتفاع بناءً على بيانات خريطة التضاريس (ثلاثية الأبعاد). يمكن استخدام الفرق بين الارتفاعات المسجلة بواسطة جهازك لتصحيح الارتفاع. تظل هندسة المسار دون تغيير.


### إرفاق المسار بالطرق {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار إرفاق-طريق-أندرويد](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار إرفاق-طريق-آي أو إس](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

يسمح إعداد **إرفاق بالطرق** بإرفاق مسار مسجل أو مستورد بالطرق من خرائط OsmAnd غير المتصلة بالإنترنت للحصول على معلومات إضافية:

- تصحيح معلومات المنعطفات لـ [التنقل حسب المسار](../navigation/setup/gpx-navigation.md#follow-track-options) (خاصة عند الدوارات).
- أسماء الشوارع ومعلومات الحارات.
- بيانات الارتفاع.
- [سمات الطريق](../navigation/setup/route-details.md#road-attributes).
- ملف تعريف ارتفاع محدث بناءً على هندسة الطريق.
- إعادة حساب محتمل لهندسة المسار (تبسيط أو تعديل النقاط إلى شبكة الطرق).

عند إرفاق مسار بالطرق، قد تتغير المعلمات التالية لأن هندسة المسار وارتفاعه يتم إعادة حسابهما: *المسافة، الصعود / الهبوط، السرعة المتوسطة (ورسم بياني السرعة)، السرعة القصوى، الوقت في الحركة*، و*المدة*. قد تختلف هذه القيم عن مسار GPX الأصلي إذا انحرف الارتفاع أو الهندسة المبنية على الطريق المعاد حسابها بشكل كبير عن بيانات GPS المسجلة.

يمكنك تحديد [قيمة حدية](../navigation/setup/gpx-navigation.md#attach-to-the-roads) للمسافة التي يمكن أن تكون بها نقاط المسار المبسطة بعيدة عن نقاط المسار الأصلية.

:::note أيقونة ملف تعريف غير محددة
إذا قمت بتحديد مسار وظهرت أيقونة ملف التعريف ***غير المحدد*** ("؟") بجوار أيقونة *الإعدادات*، فانقر عليها لاختيار ما إذا كنت تريد إرفاق المسار بالطرق أو مجرد توصيل النقاط بخط مستقيم والتعامل معه كمسار مسجل.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## النقاط والمقاطع {#points--segments}

### إضافة النقاط {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_points_list_andr.png) ![تخطيط مسار المفضلات أندرويد](@site/static/img/plan-route/plan_route_favorites_and.png)

لقياس مسافة أو تخطيط رحلة، أضف النقاط في موقع *المؤشر* واحدة تلو الأخرى وانقر على زر *إضافة*. من خلال الوصول إلى **قائمة النقاط** أدناه، يمكنك إعادة ترتيب النقاط أو حذفها أو الوصول إلى [قائمة سياق نقطة](#point-context-menu) معينة.

يمكنك أيضًا إضافة نقطة عبر مباشرة من الخريطة بالنقر على POI أو مفضل لفتح قائمة السياق الخاصة به ثم النقر على *إضافة نقطة*. في هذا الوضع، لا تظهر قوائم السياق للكائنات غير النقاط. عند إضافة POI/مفضل، يتم الحفاظ على اسمه كنوع نقطة المسار؛ إذا قمت لاحقًا بنقل هذه النقطة على الخريطة، يتم إعادة تعيين الاسم.

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_points_list_ios.png)

لقياس مسافة أو تخطيط رحلة، أضف النقاط في موقع *المؤشر* واحدة تلو الأخرى وانقر على زر *إضافة نقطة*. من خلال الوصول إلى **قائمة النقاط** أدناه، يمكنك إعادة ترتيب النقاط أو حذفها أو الوصول إلى [قائمة سياق نقطة](#point-context-menu) معينة.

</TabItem>

</Tabs>  

:::note
يمكنك أيضًا **التراجع**/**الإعادة** عن كل إجراء قمت به في تخطيط المسار.
:::
  
### المسار بين النقاط {#route-between-points}

يمكن توصيل النقاط المضافة في المحرر كخط مستقيم أو كمسار بين نقاط ملف تعريف محدد. يمكن الوصول إلى *المسار بين النقاط* بعدة طرق:

1. من قائمة *الخيارات* *←* *المسار بين النقاط*.
2. انقر على *أيقونة ملف التعريف* في الزاوية السفلية اليسرى من شاشة الخريطة. ليس على الأيقونة العلوية، فهذا سيفتح قائمة تكوين الخريطة.
3. في *[قائمة سياق النقطة](#point-context-menu) ← تغيير نوع المسار قبل/بعد*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_between_points_andr.png) ![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_between_points_ios.png) ![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

يمكنك تغيير المسار بين نقطتين محددتين أو بين عدة نقاط:

- *المسار بأكمله*. سيتم إعادة حساب المسار بأكمله باستخدام ملف التعريف المحدد.
- *المقطع التالي*. سيتم إعادة حساب المقطع التالي فقط باستخدام ملف التعريف المحدد.  
- *تغيير نوع المسار قبل/بعد النقطة*. في *قائمة سياق النقطة*، يمكنك تغيير طريقة حساب المسار للقسم من هذه النقطة إلى أقرب نقطة أو إلى نقطة الحافة. يوفر الإعداد معلومات حول المسافة من هذه النقطة إلى بداية أو نهاية المسار، أو إلى النقطة التالية/السابقة.
- *إعادة حساب المسارات*. يمكنك استخدام إعادة حساب المسار دون تغيير نوع ملف التعريف. لن تتغير أيقونة ملف التعريف المعروضة على المسار المخطط في الأداة، ولكن نوع المسار سيتطابق مع النوع المحدد. قد تحتاج إلى هذا للعثور على مسارات بديلة.  

### المقاطع {#segments}

مقطع المسار هو مجموعة من النقاط المتصلة بدون **فجوات**. في أداة تخطيط المسار، من الممكن:

- دمج المقاطع: خيار [دمج المقاطع](#point-context-menu) يزيل الفجوة إلى المقاطع المنفصلة سابقًا.
- تقسيم أو إنشاء أقسام جديدة غير متصلة من المسار. لإنشاء واحد، استخدم خيار [بدء مقطع جديد](#point-context-menu) أو حدد ميزة [التقسيم](#point-context-menu) من قائمة سياق النقطة.

### قائمة سياق النقطة {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

لكل نقطة على مسارك قائمة سياق خاصة بها. تعرض *الرقم التسلسلي* للنقطة، و*المسافة من بداية المسار*، ووظيفة نقلها على الخريطة وإزالتها، ومجموعة من الإجراءات مع أقسام المسار قبل وبعد هذه النقطة. للتعديل، انقر على النقطة المطلوبة في [قائمة النقاط](#adding-points) أو مباشرة على الخريطة.

- ***معلومات حول النقطة***. عدد النقاط في القائمة. تعتمد المسافة إلى النقطة الأولى على نوع التوجيه المحدد، وقد تتغير المسافة عند إعادة الحساب إلى النوع الجديد إذا تم تغيير معامل *المسار بين النقاط*.  

- ***<Translate ios="true" ids="move_point"/>***. يسمح لك بتغيير موضع نقطة على الخريطة. حرك الخريطة باستخدام الإيماءات لتغيير موقع النقطة. سيكون مؤشر النقطة في وسط الجزء المرئي من الخريطة.  

- ***<Translate ios="true" ids="add_point_after"/>***. حرك الخريطة لإضافة نقطة بعد النقطة المحددة. يمكنك إضافة أي عدد تريده من النقاط حتى تنقر على إلغاء أو تطبيق.  

- ***<Translate ios="true" ids="add_point_before"/>***. حرك الخريطة لإضافة أي عدد ضروري من النقاط بعد النقطة المحددة في المقطع بين هذه النقطة والنقطة التالية.  

- ***<Translate ios="true" ids="trim_before"/>***. يمكنك قص قسم كامل من المسار والنقاط والمقاطع، من بدايته إلى النقطة المحددة. المسافة التي سيتم قصها موضحة تحت اسم الخيار.  

- ***<Translate ios="true" ids="trim_after"/>***. يمكنك قص مسار ونقاط ومقاطع، من آخر نقطة مضافة إلى النقطة المحددة. المسافة التي سيتم قصها موضحة تحت اسم الخيار.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. يسمح بتقسيم المسار قبل النقطة المحددة إلى مقاطع منفصلة وغير متصلة.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. يسمح بتقسيم المسار بعد النقطة المحددة إلى مقاطع منفصلة وغير متصلة.  

- ***<Translate ios="true" ids="join_segments"/>***. النقطة الأخيرة في أحد المقاطع المقسمة والنقطة التالية في قائمة النقاط في المقطع الآخر لها هذا الإعداد للاتصال.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. يمكنك تغيير نوع التوجيه المكون لملف تعريف متاح، بين النقاط في المقطع السابق، أو لجميع المقاطع من بداية المسار إلى النقطة المحددة.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. يمكنك تغيير نوع التوجيه بين النقاط في المقطع التالي، أو لجميع المقاطع من النقطة المحددة إلى آخر نقطة مضافة.  

- ***<Translate ios="true" ids="delete_point"/>***. إزالة النقطة المحددة من المسار. مشابه لحذف نقطة في قائمة.

### المسارات متعددة الوسائط {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خط مسار أندرويد](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![شاشة آي أو إس لتخطيط المسار](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

باستخدام أداة *تخطيط مسار* وخيار [المسار بين النقاط](#route-between-points)، يمكنك إنشاء مسارات متعددة الوسائط حيث، على سبيل المثال، يمكن أن يكون الجزء الأول مسار *دراجات*، والجزء الثاني مسار *خط مستقيم* ثم مسار *مشاة*. لاحظ أن التنقل في المسارات متعددة الوسائط غير متاح، لذا تحتاج إلى تحديد أحد ملفات التعريف الأكثر ملاءمة لتتمكن من اتباع التعليمات خطوة بخطوة.


## المحرر {#editor}

### حفظ المسار {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


بعد [إضافة](#adding-points) نقطة واحدة على الأقل إلى الخريطة، يمكنك استخدام خيار الحفظ. يمكن العثور على جميع المسارات المحفوظة في *تخطيط مسار* في *<Translate android="true" ids="shared_string_menu"/> ← <Translate android="true" ids="shared_string_my_places"/> ←* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

هناك أربع طرق للحفظ:

- ***حفظ سريع***. يسمح زر ***تم*** / ***حفظ*** (للمسارات الموجودة) في الزاوية العلوية اليمنى بحفظ التغييرات بسرعة والخروج من أداة *تخطيط مسار*. يتم إنشاء الاسم بناءً على التاريخ الحالي.
- ***حفظ التغييرات*** في [قائمة الخيارات](#options) يسمح لك بحفظ التغييرات في ملف ومتابعة تخطيط المسار.
- ***حفظ كمسار جديد*** في [قائمة الخيارات](#options) يفتح مربع حوار حيث تحدد اسم المسار والمجلد الذي سيتم حفظ المسار فيه.
- ***إضافة التغييرات إلى مسار***. يرفق مسارًا تم إنشاؤه كـ[مقطع منفصل](#segments) بمسار آخر موجود. التغييرات على مسار محدد *لا يمكن التراجع عنها*.

:::note خيار المسار المبسط
عند حفظ مسار جديد، يمكنك تحديد خيار المسار ***المبسط*** لجعل المسار متوافقًا مع تطبيقات الطرف الثالث الأخرى. من الناحية الفنية، سيتم حفظ المسار بدون تعليمات التوجيه كمسار هندسي بحت.
:::

### الخيارات {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خيارات تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![خيارات تخطيط مسار آي أو إس](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). يعرض ملف تعريف التطبيق المحدد (الافتراضي هو خط مستقيم). النقر على هذا الإجراء هو نفس النقر على زر *ملف التعريف*، الذي يفتح قائمة [ملفات تعريف](../personal/profiles.md) التطبيق.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*آي أو إس*) أو **<Translate android="true" ids="plan_route_add_new_segment"/>** (*أندرويد*). يرسم مقاطع مسار جديدة لا تتصل بالمقطع السابق.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). إذا كان مسارًا جديدًا بدون ربط بالمسار الموجود، تفتح قائمة *حفظ كمسار جديد*. عند إضافة مقاطع جديدة إلى مسار مفتوح أو مستورد، يظهر إشعار حول حفظ ملف GPS في التخزين، وبعد ذلك يمكنك متابعة إنشاء المقطع التالي.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). يحفظ مسارك كمسار GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). أضف مسارك إلى مسار من مجلد المسارات الخاص بك واحفظ المسار الجديد.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). يبدأ الملاحة من موقعك إلى نقطة النهاية باستخدام مسار مرسوم.
- **<Translate android="true" ids="reverse_route"/>**. يمكنك تبديل نقطة *البداية* للمسار وآخر نقطة مضافة. لا تتغير إعدادات مقطع المسار عند تطبيق العكس.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). ينشئ مسارًا تقريبيًا. تتم مطابقة كل نقطة على المسار مع أقرب طريق مسموح به على الخريطة وفقًا لملف التعريف المحدد والمسافة الحدية.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (أندرويد فقط). يمكنك تصفية نقاط المسار التي لا تتطابق مع نوع التوجيه المحدد، أو حذف البيانات غير الضرورية، أو تصحيح البيانات غير الدقيقة. سيعمل مرشح GPS فقط إذا تم تحديد نوع التوجيه كـ *خط مستقيم*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*أندرويد فقط*). يتم عرض هذا الخيار فقط في القائمة إذا لم تكن بيانات الارتفاع متاحة. باستخدام هذا [الخيار](#get-elevation-data)، يمكنك حساب الارتفاع باستخدام *بيانات خريطة التضاريس* أو استخدام البيانات من الخرائط التي تم تنزيلها للعثور على *الطرق القريبة*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. يقوم بأرشفة جميع أفعالك بالكامل. يبقى "أثر" على الخريطة - الخطوط المتقطعة للمسار الذي تم مسحه للتو. يختفي عند إضافة نقاط جديدة تالية. يمكنك إلغاء وظيفة مسح الكل باستخدام زر إجراء العودة. لا تؤثر الميزة على الأجزاء غير المتغيرة من المسارات المفتوحة في الأداة.

### الرسم البياني {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

</TabItem>

<TabItem value="ios" label="آي أو إس">

![تخطيط مسار إرفاق-طريق-آي أو إس](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

أثناء تخطيط المسار، يعرض [الرسم البياني](../navigation/setup/route-details.md#elevation-graph) معلومات ارتفاع المسار ونسبة الانحدار، بالإضافة إلى أنه يمكنك النقر في أي مكان على الرسم البياني لعرض مؤشر ببيانات معينة.  

- بالنسبة لـ **أندرويد**، يتم عرض الرسم البياني في علامة التبويب *الرسم البياني* عند إنشاء مسار أو فتحه، وعند [الملاحة](../navigation/setup/gpx-navigation.md) باستخدام *تخطيط مسار*.
- بالنسبة لـ **آي أو إس**، يتوفر الرسم البياني فقط من خلال قائمة *[الخيارات](#options) ← الملاحة*.

عند حساب مسار للملاحة في *تخطيط مسار*، يمكنك معرفة معلومات إضافية عن المسار مثل [معلومات الارتفاع](../navigation/setup/route-details.md#elevation-info) و[سمات الطريق](../navigation/setup/route-details.md#road-attributes)، واستخدام أداة [التحليل على الخريطة](../navigation/setup/route-details.md#analyze-on-map). انقر على زر *التفاصيل* أسفل الرسم البياني.  


## مقالات ذات صلة {#related-articles}

- [عرض المسار على الخريطة](../map/tracks/index.md)
- [التحليل على الخريطة](../map/tracks/index.md#analyze-track-on-map)
- [قائمة سياق المسار](../map/tracks/track-context-menu.md)
- [التنقل حسب المسار](../navigation/setup/gpx-navigation.md)
- [تسجيل الرحلة](../plugins/trip-recording.md)