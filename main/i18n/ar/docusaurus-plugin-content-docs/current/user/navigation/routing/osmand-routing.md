---
source-hash: 7c8272dbf6899f4214dddc8dd2957ce245f83752b109660a6880724a955deb10
sidebar_position: 0
title:  حول توجيه OsmAnd
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

يعتمد توجيه OsmAnd في وضع عدم الاتصال على بيانات OpenStreetMap ويوفر مجموعة متنوعة من المسارات لأغراض مختلفة. هذه قائمة بأنواع التوجيه المحددة مسبقًا والتي يمكن توسيعها. قواعد الملاحة موجودة في ملف [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) وتستخدم للتوجيه في وضع عدم الاتصال. يتغير نوع المسار تلقائيًا عند تغيير ملفك الشخصي.


## أنواع التوجيه {#routing-types}

الملفات الشخصية التالية مع أنواع التوجيه الخاصة بها محددة مسبقًا في OsmAnd: *القيادة، ركوب الدراجات، المشي، الشاحنة، الدراجة النارية، الدراجة البخارية، النقل العام، القارب، الطائرة، التزلج، القطار، ركوب الخيل*. إلى جانب هذه، يمكنك إنشاء ملفاتك الشخصية بقواعد توجيه محددة أو [تعديل خوارزمية توجيه OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- ملفات تعريف [**الشاحنة، والدراجة النارية، والدراجة البخارية، والقطار، والطائرة، والقارب، وركوب الخيل**](./osmand-routing.md) تكون معطلة بشكل افتراضي. لاستخدام هذه الملفات الشخصية، تحتاج إلى تفعيلها في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- نوع الملاحة [**مباشرة إلى النقطة**](./direct-to-point-routing.md) ليس له ملف تعريف خاص به ويمكن استخدامه مع أي ملف شخصي مفعل.

- يمكن **تكوين توجيه OsmAnd في وضع عدم الاتصال عن طريق تعديل [ملف .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. لمزيد من المعلومات، راجع مقال [*تخصيص التوجيه في وضع عدم الاتصال*](../routing/osmand-routing.md#customize-offline-routing).

:::

| الفئة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *توجيه OsmAnd دون اتصال* | تستخدم آلية توجيه OsmAnd دون اتصال الخرائط التي تم تنزيلها مسبقًا كمصدر بيانات لحساب المسار. | أنواع الملاحة: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md)، [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md)، [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md)، [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md)، [الدراجة البخارية](./moped-routing.md)، [الدراجة النارية](./car-based-routing.md#route-parameters---motorcycle)، [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md)، [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md)، [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md)، [الشاحنة](car-based-routing#route-parameters---truck)، [القطار](./train-routing.md). |
| *توجيه مباشر إلى نقطة* | يستخدم أيضًا الخرائط غير المتصلة بالإنترنت ويوفر توجيهًا بخط مستقيم (أو ملاحة *من نقطة إلى نقطة*). | أنواع الملاحة: *[خط مستقيم](./straight-line-routing.md)*، *[مباشرة إلى النقطة](./direct-to-point-routing.md)*. |
| [*BRouter* *(دون اتصال)*](./brouter.md) | توجيه دون اتصال مقدم من [تطبيق BRouter](https://brouter.de/). | متاح **للأندرويد فقط**. اقرأ الوصف الكامل [هنا](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*أندرويد*)](./online-routing.md) | يبني التوجيه عبر الإنترنت موارد خوادم المسار عبر الإنترنت من خلال اتصال الإنترنت. | متاح **للأندرويد فقط**. يمكنك تكوين [التوجيه عبر الإنترنت](./online-routing.md) لإنشاء مسار من محركات توجيه مختلفة عبر الإنترنت مثل [Graphhopper](https://graphhopper.com/)، [OSRM](http://project-osrm.org/)، [Routing OSM DE](https://routing.openstreetmap.de/)، Generic GPX. |

- *[توجيه السيارة (شاحنة، دراجة نارية)](./car-based-routing.md)* - يوفر OsmAnd تعليمات القيادة لسائقي السيارات والشاحنات والدراجات النارية.
- *[توجيه الدراجات (MTB)](./bicycle-based-routing.md)* - يوفر توجيه الدراجات إرشادات ملاحية مخصصة لراكبي الدراجات وعشاق الدراجات الجبلية. يمكن استخدامه أيضًا من قبل سائقي الدراجات البخارية (السكوتر).
- *[توجيه المشاة](./pedestrian-routing.md)* - يمكن استخدامه ليس فقط للتجول في المدينة، ولكن أيضًا أثناء رحلات المشي لمسافات طويلة.
- *[توجيه الدراجة البخارية](./moped-routing.md)* - يعتمد على توجيه الدراجات، على الرغم من أن له ميزاته الخاصة.
- *[توجيه النقل العام](./public-transport-navigation.md)* - يمكن أن يساعدك أثناء السفر في جميع أنحاء المدينة.
- *[توجيه ركوب الخيل](./horse-routing.md)* - يزود الفرسان بالأدوات التي يحتاجونها لتخطيط أنشطة ركوب الخيل والاستمتاع بها.
- *[توجيه التزلج](./ski-routing.md)* - يسمح للمستخدمين بتخطيط جولات التزلج والأنشطة الرياضية الشتوية الأخرى والتنقل فيها باستخدام تطبيق OsmAnd للجوال.
- *[توجيه القطار](./train-routing.md)* - يوفر فرصة لاستخدام مسارات السكك الحديدية للملاحة.
- *[توجيه القوارب](./boat-navigation.md)* - يمكن استخدامه لإنشاء مسار على الأنهار والقنوات والبحيرات الصغيرة وفي البحر المفتوح ولكن فقط عندما يتم تمييز الممرات المائية في OpenStreetMap.
- *[توجيه الخط المستقيم](./straight-line-routing.md)* - يوفر توجيهًا بخط مستقيم (أو ملاحة "من نقطة إلى نقطة") يتم إعادة حسابه عند تغيير موقعك.
- *[توجيه مباشر إلى النقطة](./direct-to-point-routing.md)* - يوفر توجيهًا بخط مستقيم (أو ملاحة "من نقطة إلى نقطة") يظل ثابتًا طوال فترة الملاحة على عكس توجيه **الخط المستقيم** (يتم تعطيل إعادة حساب المسار).


## تخصيص التوجيه دون اتصال {#customize-offline-routing}

يمكنك أيضًا إنشاء **ملف routing.xml الخاص بك** أو تعديل **routing.xml** الافتراضي واستخدامه للملاحة (لمستخدمي OsmAnd المتقدمين فقط).

- انسخ ملف [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) إلى جهازك. اقرأ [معلومات المساعدة](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) بعناية. كمثال، شاهد ملف [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) لمستخدم OsmAnd.
- بعد إجراء التغييرات، يمكن إضافة ملف *routing.xml* الجديد إلى OsmAnd عن طريق النقر عليه واختيار فتحه في تطبيق OsmAnd.
- حدد [نوع الملاحة](../../navigation/guidance/navigation-settings.md#navigation-type) المعدل لملفك الشخصي.

يمكن العثور على مزيد من المعلومات حول هذه الميزة في [*الوثائق الفنية*](../../../technical/osmand-file-formats/osmand-routing-xml.md) وعلى [*صفحة OsmAnd على GitHub*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## تجنب طرق محددة {#avoid-specific-roads}

:::caution
ميزة تجنب الطرق هي ميزة عامة وتؤثر على جميع **[أنواع التوجيه](#routing-types)** باستثناء *[التوجيه عبر الإنترنت](../routing/online-routing.md)* و *[BRouter](../routing/brouter.md)*.
:::

هناك طريقتان ممكنتان لاختيار الطرق التي يجب تجنبها عند حساب المسار:

- حدد نوع الطريق في قسم [معلمات المسار](../guidance/navigation-settings.md#route-parameters) من [إعدادات الملاحة](../guidance/navigation-settings.md). يتم توفير وصف هذا الإعداد في المقالات حول إعدادات [أنواع التوجيه](#routing-types). كمثال، راجع وصف نوع توجيه [السيارة / الشاحنة / الدراجة النارية](../routing/car-based-routing.md#route-parameters---car).
- يمكنك أيضًا تحديد طرق معينة لن يتم استخدامها للتوجيه باستخدام خيار *[تجنب الطرق](../../map/map-context-menu.md#avoid-road)* من خلال *قائمة سياق الخريطة* أو باستخدام *[قائمة تجنب الطرق](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- يجب تحديد الطريق عند أقصى تكبير، حيث قد يسيء OsmAnd تفسير النقرة ويحظر، على سبيل المثال، الجانب غير الصحيح من طريق ذي مسارين أو رصيف.
- وظيفة تجنب طرق محددة لا تعمل بشكل صحيح مع خيار [الملاحة حسب المسار](../setup/gpx-navigation.md) ولا تؤثر على [ملاحة العلامات](../setup/markers-navigation.md#use-markers-in-navigation) المبسطة.

:::

### قائمة تجنب الطرق {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *زر الملاحة ← الإعدادات ← تجنب الطرق...*

![قائمة تجنب الطرق على أندرويد](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *زر الملاحة ← الإعدادات ← تجنب الطرق*

![قائمة تجنب الطرق على iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك إلغاء التحديد السابق للطريق الذي يجب تجنبه. للقيام بذلك، انقر على علامة "x" (في أندرويد) أو علامة **"-"** حمراء مقابل الطريق الذي تنوي استخدامه لحساب المسار.

باستخدام خيار *تحديد على الخريطة*، يمكنك الاستمرار في تحديد الطرق على أنها غير صالحة للتوجيه على خريطة OsmAnd.

عند تحديد طريق لتجنبه باستخدام *قائمة سياق الخريطة* أو *قائمة تجنب الطرق*، ستظهر قائمة الطرق فوق شاشة الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة تجنب الطرق على الخريطة في أندرويد](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تجنب الطرق على الخريطة في iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## تصدير / استيراد {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![تصدير قائمة تجنب الطرق على الخريطة في أندرويد 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![تصدير قائمة تجنب الطرق على الخريطة في أندرويد 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![تصدير قائمة تجنب الطرق على الخريطة في iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![تصدير قائمة تجنب الطرق على الخريطة في iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

اعتمادًا على إعدادات جهازك والتطبيقات المتاحة، يمكن [تصدير](../../personal/import-export.md#export) قائمتك الكاملة للطرق التي يجب تجنبها أو طريق واحد منها فقط كملف `.osf` إلى مواقع مختلفة. حدد الطرق التي تريد تصديرها في القائمة المقترحة.

يمكنك [استيراد](../../personal/import-export.md#import) الطرق التي يجب تجنبها أثناء حساب المسار من مصادر أخرى بتنسيق ملف `.osf`. يمكن أيضًا القيام بذلك باستخدام *خيار الاستيراد* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). يمكنك اختيار استيراد جميع البيانات أو فقط بعض الطرق لتجنبها (عن طريق وضع علامة اختيار بجانب الطريق في القائمة).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![استيراد قائمة تجنب الطرق على الخريطة في أندرويد](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![استيراد قائمة تجنب الطرق على الخريطة في iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
أكثر الطرق ملاءمة لمزامنة الطرق التي يجب تجنبها بين أجهزتك هي استخدام [سحابة OsmAnd](../../personal/osmand-cloud.md) (يتطلب اشتراك Pro).
:::


## مراعاة القيود المؤقتة {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

يسمح خيار *مراعاة القيود المؤقتة* بأخذ القيود المؤقتة على الطرق في الاعتبار عند حساب المسارات. قد تشمل هذه القيود أعمال بناء الطرق أو إغلاق الطرق لسبب ما (حادث، إصلاحات طرق، كوارث طبيعية). يمكن أن يساعدك تمكين هذا الخيار على تجنب التحويلات غير المتوقعة أو التأخير. يرجى ملاحظة أن هذه المعلومات قد تكون قديمة في بعض الأحيان.
في OpenStreetMap، عادةً ما يتم تمييز هذه المعلومات بالوسم [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## قسم التطوير {#development-section}

يظهر **قسم التطوير** من إعدادات *معلمات المسار* (*القائمة ← الإعدادات ← ملف تعريف التطبيق ← إعدادات الملاحة ← معلمات المسار ← التطوير*) فقط عند تمكين [إضافة التطوير لـ OsmAnd](../../plugins/development.md). يتضمن إعدادات مثل *نوع التوجيه (أندرويد) / خوارزمية التوجيه (iOS)، تقريب GPX (أندرويد فقط)، التكبير التلقائي، وبيانات التحديثات المباشرة (أندرويد فقط)*. اقرأ مقال [إعدادات الملاحة](../../navigation/guidance/navigation-settings.md#development-settings) للحصول على وصف مفصل.