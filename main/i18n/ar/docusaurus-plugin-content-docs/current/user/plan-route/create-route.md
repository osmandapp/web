---
source-hash: fb9912804ef2b1009e063e1cb1e5c8220b279d2fee5b64bf122b770e595651c9
sidebar_position: 1
title:  Plan a Route
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

تُعد أداة **تخطيط مسار** (*القائمة ← تخطيط مسار*) ميزة قوية في تطبيق OsmAnd تتيح لك [إنشاء مسارات جديدة](#create-new-route) كمسارات GPX، و[تعديل وإضافة مقاطع جديدة](#segments) إلى المسارات المحفوظة بالفعل، و[قياس المسافات](#distance-measurement) على الخريطة، و[إرفاق مقاطع المسار](#attach-track-to-roads) بأقرب طريق متاح باستخدام ملفات تعريف تنقل مختلفة. تم تصميم هذه الميزة للعمل في *وضع عدم الاتصال*.

يتكون المسار من مجموعة من المقاطع بين نقاط محددة. يمكن أن تكون المقاطع خطوطًا مستقيمة أو مسارات تتكيف مع الملف الشخصي المحدد. يمكن حفظ المسار كملف GPX للاستيراد والتعديل و[التنقل](../navigation/setup/gpx-navigation.md) لاحقًا.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## حالات الاستخدام الرئيسية {#main-use-cases}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![تخطيط مسار iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### إنشاء مسار جديد {#create-new-route}

لإنشاء مسار جديد بتنسيق GPX، استخدم الوظيفة الرئيسية لأداة *تخطيط مسار*. يتميز إنشاء المسار مسبقًا بالعديد من المزايا، على عكس تسجيل المسار الحالي باستخدام *[مكون تسجيل الرحلة الإضافي](../plugins/trip-recording.md)*. يمكنك [إضافة](#adding-points) العديد من النقاط التي تريدها إلى المسار، و[حذفها ونقلها](#point-context-menu)، وتغيير أنواع المسارات حسب [المقاطع](#route-between-points)، والحصول على [معلومات مفصلة حول المسار](#graph).  

بشكل افتراضي، سيتطابق نوع التوجيه مع الملف الشخصي المحدد مسبقًا، انقر على أيقونة التوجيه لتحديد كيفية حساب التطبيق للمقطع لربط النقاط. يجب تكوين الملف الشخصي المتاح [بشكل منفصل](../navigation/routing/osmand-routing.md#routing-types).  

يمكنك **التكبير والتصغير** لسهولة وضع النقاط عند إنشاء مسار أو تعديله. عند **التصغير**، تصبح النقاط على المسار غير مرئية للحصول على عرض أفضل لطول المسار بالكامل والخريطة ككل. تبقى النقطة الأخيرة المضافة والمؤشر لإضافة النقطة التالية مرئيين فقط.


### تعديل مسار GPX موجود {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

تتيح أداة *تخطيط مسار* تعديل مسار GPX موجود بالإضافة إلى [مسار مستورد](../personal/tracks/manage-tracks.md#import). ومع ذلك، في حال كنت بحاجة إلى استبعاد كمية كبيرة من النقاط بناءً على معايير عامة، فقد يكون [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) أداة أكثر ملاءمة.


### قياس المسافة {#distance-measurement}

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_lines_andr.png)  

*تخطيط مسار* هي طريقة سريعة وسهلة لقياس المسافة بين النقاط.

- حدد طريقة *الخط المستقيم* لتخطيط المسار. سيتم رسم خط متقطع بين النقاط.
- [أضف](#adding-points) النقطة الأولى على الخريطة التي سيتم رسم الخط منها.
- حرك الخريطة لتحديد المسافة والاتجاه. ستُعرض المعلومات في حقل به قائمة بالنقاط أسفل الخريطة.

:::note
الخط المستقيم مطلوب وسيُستخدم للمناطق غير المغطاة ببيانات التوجيه، مثل المناطق الوعرة وخارج المسار.
:::


### الحصول على بيانات الارتفاع {#get-elevation-data}

<InfoAndroidOnly />

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

إذا كانت [بيانات الارتفاع](../map/tracks/track-context-menu.md#calculating-missing-elevation) مفقودة في مسار موجود، فمن الممكن إضافتها باستخدام الأدوات التالية:

- [استخدم الطرق القريبة](#attach-track-to-roads). يستخدم هذا الوضع خرائط غير متصلة بالإنترنت للعثور على أقرب الطرق لبناء مسار، لذلك سيتم استرداد بيانات الارتفاع من الطرق المرفقة. يمكن تعديل هندسة المسار.  
- [استخدم خرائط التضاريس](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) يحسب الوضع الارتفاع بناءً على بيانات خريطة التضاريس (ثلاثية الأبعاد). يمكن استخدام الفرق بين الارتفاعات المسجلة بواسطة جهازك لتصحيح الارتفاع. تظل هندسة المسار دون تغيير.


### إرفاق المسار بالطرق {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

يسمح إعداد **إرفاق بالطرق** بإرفاق مسار مسجل أو مستورد بالطرق من خرائط OsmAnd غير المتصلة بالإنترنت للحصول على معلومات إضافية:

- تصحيح معلومات الانعطاف لـ [التنقل بالمسار](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (خاصة عند الدوارات).
- أسماء الشوارع ومعلومات المسارات.
- بيانات الارتفاع.
- [سمات الطريق](../navigation/setup/route-details.md#road-attributes).

يمكنك تحديد [قيمة حدية](../navigation/setup/gpx-navigation.md#attach-to-the-roads) للمسافة التي يمكن أن تكون عليها نقاط المسار المبسطة من نقاط المسار الأصلية.

:::note أيقونة ملف تعريف غير محددة
إذا حددت مسارًا وظهرت أيقونة ملف التعريف ***غير المحدد*** ("؟") بجوار أيقونة *الإعدادات*، فانقر عليها لاختيار ما إذا كنت تريد إرفاق المسار بالطرق أو مجرد ربط النقاط بخط مستقيم والتعامل معه كمسار مسجل.
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

### إضافة نقاط {#adding-points}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

لقياس مسافة أو تخطيط رحلة، أضف النقاط في موقع *المؤشر* واحدة تلو الأخرى وانقر على زر *إضافة نقطة*. من خلال الوصول إلى **قائمة النقاط** أدناه، يمكنك إعادة ترتيب النقاط أو حذفها أو الوصول إلى [قائمة سياق نقطة](#point-context-menu) معينة.

:::note
يمكنك أيضًا **التراجع**/**الإعادة** عن كل إجراء قمت به في تخطيط المسار.
:::
  
### المسار بين النقاط {#route-between-points}

يمكن ربط النقاط المضافة في المحرر كخط مستقيم أو كمسار بين نقاط ملف تعريف محدد. يمكن الوصول إلى *المسار بين النقاط* بعدة طرق:

1. من قائمة *الخيارات* *←* *المسار بين النقاط*.
2. انقر على *أيقونة الملف الشخصي* في الزاوية السفلية اليسرى من شاشة الخريطة. ليس على الأيقونة العلوية، سيفتح قائمة تكوين الخريطة.
3. في *[قائمة سياق النقطة](#point-context-menu) ← تغيير نوع المسار قبل/بعد*.  

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_between_points_andr.png) ![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

يمكنك تغيير المسار بين نقطتين محددتين أو بين عدة نقاط:

- *المسار بأكمله*. سيتم إعادة حساب المسار بأكمله باستخدام الملف الشخصي المحدد.
- *المقطع التالي*. سيتم إعادة حساب المقطع التالي فقط باستخدام الملف الشخصي المحدد.  
- *تغيير نوع المسار قبل/بعد النقطة*. في *قائمة سياق النقطة*، يمكنك تغيير طريقة حساب المسار للقسم من هذه النقطة إلى أقرب نقطة أو إلى النقطة الطرفية. يوفر الإعداد معلومات حول المسافة من هذه النقطة إلى بداية المسار أو نهايته، أو إلى النقطة التالية/السابقة.
- *إعادة حساب المسارات*. يمكنك استخدام إعادة حساب المسار دون تغيير نوع الملف الشخصي. لن تتغير أيقونة الملف الشخصي المعروضة على المسار المخطط في الأداة، ولكن سيتطابق نوع المسار مع النوع المحدد. قد تحتاج إلى ذلك للعثور على مسارات بديلة.  

### المقاطع {#segments}

مقطع المسار هو مجموعة من النقاط المتصلة بدون **فجوات**. في أداة تخطيط المسار، من الممكن:

- دمج المقاطع: يزيل خيار [دمج المقاطع](#point-context-menu) الفجوة إلى المقاطع المنفصلة سابقًا.
- تقسيم أو إنشاء أقسام جديدة غير متصلة من المسار. لإنشاء واحدة، استخدم خيار [بدء مقطع جديد](#point-context-menu) أو حدد ميزة [تقسيم](#point-context-menu) من قائمة سياق النقطة.

### قائمة سياق النقطة {#point-context-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

لكل نقطة على مسارك قائمة سياق خاصة بها. تُظهر *الرقم التسلسلي* للنقطة، و*المسافة من بداية المسار*، ووظيفة نقلها على الخريطة وإزالتها، ومجموعة من الإجراءات مع أقسام المسار قبل وبعد هذه النقطة. للتحرير، انقر على النقطة المطلوبة في [قائمة النقاط](#adding-points) أو مباشرة على الخريطة.

- ***معلومات حول النقطة***. عدد النقاط في القائمة. تعتمد المسافة إلى النقطة الأولى على نوع التوجيه المحدد، وقد تتغير المسافة عند إعادة الحساب إلى النوع الجديد إذا تم تغيير معلمة *المسار بين النقاط*.  

- ***<Translate ios="true" ids="move_point"/>***. يسمح لك بتغيير موضع النقطة على الخريطة. حرك الخريطة باستخدام الإيماءات لتغيير موقع النقطة. سيكون مؤشر النقطة في مركز الجزء المرئي من الخريطة.  

- ***<Translate ios="true" ids="add_point_after"/>***. حرك الخريطة لإضافة نقطة بعد النقطة المحددة. يمكنك إضافة العديد من النقاط حسب حاجتك حتى تنقر على إلغاء أو تطبيق.  

- ***<Translate ios="true" ids="add_point_before"/>***. حرك الخريطة لإضافة العديد من النقاط حسب الضرورة بعد النقطة المحددة على المقطع بين هذه النقطة والنقطة التالية.  

- ***<Translate ios="true" ids="trim_before"/>***. يمكنك قص القسم بأكمله من المسار، والنقاط، والمقاطع، من بدايته إلى النقطة المحددة. تظهر المسافة المراد قصها تحت اسم الخيار.  

- ***<Translate ios="true" ids="trim_after"/>***. يمكنك قص مسار، ونقاط، ومقاطع، من النقطة الأخيرة المضافة إلى النقطة المحددة. تظهر المسافة المراد قصها تحت اسم الخيار.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. يسمح بتقسيم المسار قبل النقطة المحددة إلى مقاطع منفصلة وغير متصلة.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. يسمح بتقسيم المسار بعد النقطة المحددة إلى مقاطع منفصلة وغير متصلة.  

- ***<Translate ios="true" ids="join_segments"/>***. تحتوي النقطة الأخيرة على أحد المقاطع المقسمة والنقطة التالية في قائمة النقاط على المقطع الآخر على إعداد الاتصال هذا.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. يمكنك تغيير نوع التوجيه المكون لملف تعريف متاح، بين النقاط على المقطع السابق، أو لجميع المقاطع من بداية المسار إلى النقطة المحددة.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. يمكنك تغيير نوع التوجيه بين النقاط على المقطع التالي، أو لجميع المقاطع من النقطة المحددة إلى النقطة الأخيرة المضافة.  

- ***<Translate ios="true" ids="delete_point"/>***. إزالة النقطة المحددة من المسار. مماثل لحذف نقطة في قائمة.

### المسارات متعددة الوسائط {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد-خط المسار](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS-شاشة](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

باستخدام أداة *تخطيط مسار* وخيار [المسار بين النقاط](#route-between-points)، يمكنك إنشاء مسارات متعددة الوسائط حيث، على سبيل المثال، يمكن أن يكون الجزء الأول مسارًا *لركوب الدراجات*، والجزء الثاني مسارًا *مستقيمًا* ثم مسارًا *للمشاة*. لاحظ أن التنقل في المسارات متعددة الوسائط غير متاح، لذلك تحتاج إلى تحديد أحد الملفات الشخصية الأكثر ملاءمة لتتمكن من اتباع تعليمات التوجيه خطوة بخطوة.


## المحرر {#editor}

### حفظ المسار {#save-route}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


بعد [إضافة](#adding-points) نقطة واحدة على الأقل إلى الخريطة، يمكنك استخدام خيار الحفظ. يمكن العثور على جميع المسارات المحفوظة في *تخطيط مسار* في *<Translate android="true" ids="shared_string_menu"/> الرئيسي ← <Translate android="true" ids="shared_string_my_places"/> ←* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

هناك أربع طرق للحفظ:

- ***الحفظ السريع***. يسمح زر ***تم*** / ***حفظ*** (للمسارات الموجودة) في الزاوية العلوية اليمنى بالحفظ السريع للتغييرات والخروج من أداة *تخطيط مسار*. يتم إنشاء الاسم بناءً على التاريخ الحالي.
- ***حفظ التغييرات*** في [قائمة الخيارات](#options) يسمح لك بحفظ التغييرات في ملف ومتابعة تخطيط المسار.
- ***حفظ كمسار جديد*** في [قائمة الخيارات](#options) يفتح مربع حوار حيث تحدد اسم المسار والمجلد الذي سيتم حفظ المسار فيه.
- ***إضافة تغييرات إلى مسار***. يرفق مسارًا تم إنشاؤه [كمقطع منفصل](#segments) بمسار آخر موجود. لا يمكن التراجع عن التغييرات التي تم إجراؤها على مسار محدد.

:::note خيار المسار المبسط
عند حفظ مسار جديد، يمكنك تحديد خيار المسار ***المبسط*** لجعل المسار متوافقًا مع تطبيقات الطرف الثالث الأخرى. من الناحية الفنية، سيتم حفظ المسار بدون تعليمات توجيه كمسار هندسي بحت.
:::

### الخيارات {#options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد-خيارات](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار iOS-خيارات](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). يعرض ملف تعريف التطبيق المحدد (الافتراضي هو خط مستقيم). النقر على هذا الإجراء هو نفسه النقر على زر *الملف الشخصي*، والذي يفتح [قائمة ملفات تعريف التطبيق](../personal/profiles.md).
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) أو **<Translate android="true" ids="plan_route_add_new_segment"/>** (*أندرويد*). يرسم مقاطع مسار جديدة لا تتصل بالمقطع السابق.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). إذا كان مسارًا جديدًا بدون ربط بالمسار الموجود، فستفتح قائمة *حفظ كمسار جديد*. عند إضافة مقاطع جديدة إلى مسار مفتوح أو مستورد، يظهر إشعار حول حفظ ملف GPS إلى التخزين، وبعد ذلك يمكنك متابعة إنشاء المقطع التالي.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). يحفظ مسارك كمسار GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). أضف مسارك إلى مسار من مجلد المسارات الخاص بك واحفظ المسار الجديد.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). يبدأ التنقل من موقعك إلى نقطة النهاية باستخدام مسار مرسوم.
- **<Translate android="true" ids="reverse_route"/>**. تقوم بتبديل نقطة *البداية* للمسار والنقطة الأخيرة المضافة. لا تتغير إعدادات مقطع المسار عند تطبيق العكس.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). ينشئ مسارًا تقريبيًا. يتم مطابقة كل نقطة على المسار بأقرب طريق مسموح به على الخريطة وفقًا للملف الشخصي المحدد والمسافة الحدية.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (أندرويد فقط). يمكنك تصفية نقاط المسار التي لا تتطابق مع نوع التوجيه المحدد، أو حذف البيانات غير الضرورية، أو تصحيح البيانات غير الدقيقة. سيعمل مرشح GPS فقط إذا تم تحديد نوع التوجيه على أنه *خط مستقيم*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*أندرويد فقط*). يظهر هذا الخيار في القائمة فقط إذا لم تكن بيانات الارتفاع متاحة. باستخدام هذا [الخيار](#get-elevation-data)، يمكنك حساب الارتفاع باستخدام *بيانات خريطة التضاريس* أو استخدام البيانات من الخرائط التي تم تنزيلها للعثور على *الطرق القريبة*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. يقوم بأرشفة جميع الإجراءات الخاصة بك بالكامل. يبقى "أثر" على الخريطة - الخطوط المتقطعة للمسار الذي تم مسحه للتو. يختفي عند الإضافة التالية، إضافة نقاط جديدة. يمكنك إلغاء وظيفة مسح الكل باستخدام زر إجراء الإرجاع. لا تؤثر الميزة على الأجزاء غير المتغيرة من المسارات المفتوحة في الأداة.

### الرسم البياني {#graph}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![تخطيط مسار أندرويد](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

أثناء تخطيط المسار، يعرض [الرسم البياني](../navigation/setup/route-details.md#elevation-graph) معلومات ارتفاع المسار ونسبة الانحدار، بالإضافة إلى أنه يمكنك النقر في أي مكان على الرسم البياني لعرض مؤشر ببيانات معينة.  

- بالنسبة لـ **أندرويد**، يتم عرض الرسم البياني في علامة التبويب *الرسم البياني* عند إنشاء مسار أو فتحه، وعند [التنقل](../navigation/setup/gpx-navigation.md) باستخدام *تخطيط مسار*.
- بالنسبة لـ **iOS**، يتوفر الرسم البياني فقط من خلال قائمة *[الخيارات](#options) ← التنقل*.

عند حساب مسار للتنقل في *تخطيط مسار*، يمكنك معرفة معلومات إضافية عن المسار مثل [معلومات الارتفاع](../navigation/setup/route-details.md#elevation-info) و[سمات الطريق](../navigation/setup/route-details.md#road-attributes)، واستخدام أداة [التحليل على الخريطة](../navigation/setup/route-details.md#analyse-on-map). انقر على زر *التفاصيل* أسفل الرسم البياني.  


## مقالات ذات صلة {#related-articles}

- [إظهار المسار على الخريطة](../map/tracks/index.md)
- [التحليل على الخريطة](../map/tracks/index.md#analyze-track-on-map)
- [قائمة سياق المسار](../map/tracks/track-context-menu.md)
- [التنقل بالمسار](../navigation/setup/gpx-navigation.md)
- [تسجيل الرحلة](../plugins/trip-recording.md)

> *آخر تحديث: مايو 2025*