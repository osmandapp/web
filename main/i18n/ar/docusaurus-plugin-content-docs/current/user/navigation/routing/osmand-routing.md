---
source-hash: afe72063425498b71bb1dd721322f8785efd87d15a05cdd773b5036abe42e09b
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

يعتمد توجيه OsmAnd دون اتصال بالإنترنت على بيانات OpenStreetMap ويوفر مجموعة متنوعة من المسارات لأغراض مختلفة. هذه قائمة بأنواع التوجيه المحددة مسبقًا والتي يمكن توسيعها. توجد قواعد الملاحة في ملف [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) وتُستخدم للتوجيه دون اتصال بالإنترنت. يتغير نوع المسار تلقائيًا عند تغيير ملف التعريف الخاص بك.

## أنواع التوجيه {#routing-types}

تم إعداد الملفات الشخصية التالية مع أنواع التوجيه الخاصة بها مسبقًا في OsmAnd: *القيادة، ركوب الدراجات، المشي، الشاحنة، الدراجة النارية، الدراجة البخارية، النقل العام، القارب، الطائرة، التزلج، القطار، ركوب الخيل*. بالإضافة إلى ذلك، يمكنك إنشاء ملفات تعريف خاصة بك بقواعد توجيه محددة أو [تعديل خوارزمية توجيه OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- يتم إيقاف تشغيل ملفات تعريف [**الشاحنة، الدراجة النارية، الدراجة البخارية، القطار، الطائرة، القارب، وركوب الخيل**](./osmand-routing.md) افتراضيًا. لاستخدام هذه الملفات الشخصية، تحتاج إلى تفعيلها في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- لا يحتوي نوع الملاحة [**المباشر إلى نقطة**](./direct-to-point-routing.md) على ملف تعريف خاص به ويمكن استخدامه مع أي ملف تعريف مفعل.

- يمكن [**تكوين توجيه OsmAnd دون اتصال بالإنترنت عن طريق تعديل ملف .xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. لمزيد من المعلومات، راجع مقال [*تخصيص التوجيه دون اتصال بالإنترنت*](../routing/osmand-routing.md#customize-offline-routing).

:::

| الفئة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *توجيه OsmAnd دون اتصال بالإنترنت* | تستخدم آلية توجيه OsmAnd دون اتصال بالإنترنت الخرائط المحملة مسبقًا كمصدر بيانات لحساب المسار. | أنواع الملاحة: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md)، [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md)، [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md)، [ركوب الخيل](./horse-routing.md)، [الدراجة البخارية](./moped-routing.md)، [الدراجة النارية](./car-based-routing.md#route-parameters---motorcycle)، [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md)، [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md)، [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md)، [الشاحنة](car-based-routing#route-parameters---truck)، [القطار](./train-routing.md). |
| *التوجيه المباشر إلى نقطة* | يستخدم أيضًا الخرائط دون اتصال بالإنترنت ويوفر توجيهًا بخط مستقيم (أو ملاحة *من نقطة إلى نقطة*). | أنواع الملاحة: *[خط مستقيم](./straight-line-routing.md)*، *[مباشر إلى نقطة](./direct-to-point-routing.md)*. |
| [*BRouter* *(دون اتصال بالإنترنت)*](./brouter.md) | توجيه دون اتصال بالإنترنت مقدم من [تطبيق BRouter](https://brouter.de/). | متاح لنظام **Android فقط**. الوصف الكامل اقرأ [هنا](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | يقوم التوجيه عبر الإنترنت ببناء موارد خوادم المسار عبر الإنترنت عن طريق الاتصال بالإنترنت. | متاح لنظام **Android فقط**. يمكنك تكوين [التوجيه عبر الإنترنت](./online-routing.md) لبناء مسار من محركات توجيه مختلفة عبر الإنترنت مثل [Graphhopper](https://graphhopper.com/)، [OSRM](http://project-osrm.org/)، [Routing OSM DE](https://routing.openstreetmap.de/)، GPX عام. |

- *[توجيه السيارة (الشاحنة، الدراجة النارية)](./car-based-routing.md)* - يوفر OsmAnd تعليمات القيادة لسائقي السيارات والشاحنات والدراجات النارية.
- *[توجيه الدراجات (MTB)](./bicycle-based-routing.md)* - يوفر توجيه الدراجات توجيهات ملاحة خاصة لراكبي الدراجات وعشاق الدراجات الجبلية. يمكن استخدامه أيضًا من قبل سائقي الدراجات البخارية (السكوتر).
- *[توجيه المشاة](./pedestrian-routing.md)* - يمكن استخدامه ليس فقط للمشي في المدينة، ولكن أيضًا أثناء رحلات المشي لمسافات طويلة.
- *[توجيه الدراجات البخارية](./moped-routing.md)* - يعتمد على توجيه الدراجات، على الرغم من أنه يتميز بميزاته الخاصة.
- *[توجيه النقل العام](./public-transport-navigation.md)* - يمكن أن يساعدك أثناء التنقل في المدينة.
- *[توجيه ركوب الخيل](./horse-routing.md)* - يوفر لراكبي الخيل الأدوات التي يحتاجونها لتخطيط والاستمتاع بأنشطة ركوب الخيل.
- *[توجيه التزلج](./ski-routing.md)* - يسمح للمستخدمين بتخطيط والتنقل في جولات التزلج وغيرها من أنشطة الرياضات الشتوية باستخدام تطبيق OsmAnd للهاتف المحمول.
- *[توجيه القطار](./train-routing.md)* - يوفر فرصة لاستخدام مسارات السكك الحديدية للملاحة.
- *[توجيه القوارب](./boat-navigation.md)* - يمكن استخدامه لبناء مسار على الأنهار والقنوات والبحيرات الصغيرة وفي البحر المفتوح ولكن فقط عندما تكون الممرات المائية معلمة في OpenStreetMap.
- *[توجيه الخط المستقيم](./straight-line-routing.md)* - يوفر توجيهًا بخط مستقيم (أو ملاحة "من نقطة إلى نقطة") يتم إعادة حسابه عند تغيير موقعك.
- *[التوجيه المباشر إلى نقطة](./direct-to-point-routing.md)* - يوفر توجيهًا بخط مستقيم (أو ملاحة "من نقطة إلى نقطة") يبقى مستقرًا للملاحة بأكملها على عكس توجيه **الخط المستقيم** (إعادة حساب المسار معطلة).

## تخصيص التوجيه دون اتصال بالإنترنت {#customize-offline-routing}

يمكنك أيضًا إنشاء **ملف routing.xml الخاص بك** أو تعديل ملف **routing.xml** الافتراضي واستخدامه للملاحة (لمستخدمي OsmAnd المتقدمين فقط).

- انسخ ملف [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) إلى جهازك. اقرأ [معلومات المساعدة](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) بعناية. كمثال، شاهد ملف [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) لمستخدم OsmAnd.
- بعد إجراء التغييرات، يمكن إضافة ملف *routing.xml* الجديد إلى OsmAnd عن طريق النقر عليه واختيار فتحه في تطبيق OsmAnd.
- حدد [نوع الملاحة](../../navigation/guidance/navigation-settings.md#navigation-type) المعدل لملفك الشخصي.

يمكن العثور على مزيد من المعلومات حول هذه الميزة في [*الوثائق الفنية*](../../../technical/osmand-file-formats/osmand-routing-xml.md) وعلى [*صفحة OsmAnd على GitHub*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

## تجنب طرق معينة {#avoid-specific-roads}

:::caution
ميزة تجنب الطرق هي ميزة عامة وتؤثر على جميع **[أنواع التوجيه](#routing-types)** باستثناء *[التوجيه عبر الإنترنت](../routing/online-routing.md)* و *[BRouter](../routing/brouter.md)*.
:::

هناك طريقتان ممكنتان لاختيار الطرق التي يجب تجنبها عند حساب المسار:

- حدد نوع الطريق في قسم [معلمات المسار](../guidance/navigation-settings.md#route-parameters) من [إعدادات الملاحة](../guidance/navigation-settings.md). يتم توفير وصف لهذا الإعداد في المقالات حول إعدادات [أنواع التوجيه](#routing-types). على سبيل المثال، انظر وصف نوع توجيه [السيارة / الشاحنة / الدراجة النارية](../routing/car-based-routing.md#route-parameters---car).
- يمكنك أيضًا تحديد طرق معينة لن يتم استخدامها للتوجيه باستخدام خيار *[تجنب الطرق](../../map/map-context-menu.md#avoid-road)* من خلال *قائمة سياق الخريطة* أو باستخدام *[قائمة تجنب الطرق](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- يجب تحديد الطريق بأقصى تكبير، حيث قد يسيء OsmAnd تفسير النقر ويحظر، على سبيل المثال، الجانب غير الصحيح من طريق ذي مسارين أو رصيف.
- لا تعمل وظيفة تجنب الطرق المحددة بشكل صحيح مع خيار [الملاحة حسب المسار](../setup/gpx-navigation.md) ولا تؤثر على [ملاحة العلامات](../setup/markers-navigation.md#use-markers-in-navigation) المبسطة.

:::

### قائمة تجنب الطرق {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *زر الملاحة ← الإعدادات ← تجنب الطرق...*

![قائمة تجنب الطرق Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *زر الملاحة ← الإعدادات ← تجنب الطرق*

![قائمة تجنب الطرق iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

في هذه القائمة، يمكنك إلغاء التحديد السابق للطريق الذي يجب تجنبه. للقيام بذلك، انقر على علامة X (Android) أو علامة **"-"** الحمراء المقابلة للطريق الذي تنوي استخدامه لحساب المسار.

باستخدام خيار *تحديد على الخريطة*، يمكنك الاستمرار في تحديد الطرق على أنها غير صالحة للتوجيه على خريطة OsmAnd.

عند تحديد طريق لتجنبه باستخدام *قائمة سياق الخريطة* أو *قائمة تجنب الطرق*، ستظهر قائمة الطرق فوق شاشة الخريطة.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة تجنب الطرق على الخريطة Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة تجنب الطرق على الخريطة iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>

## تصدير / استيراد {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![تصدير تجنب الطرق على الخريطة Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![تصدير تجنب الطرق على الخريطة Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![تصدير تجنب الطرق على الخريطة iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![تصدير تجنب الطرق على الخريطة iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

اعتمادًا على إعدادات جهازك والتطبيقات المتاحة، يمكن [تصدير](../../personal/import-export.md#export) قائمة الطرق الكاملة التي يجب تجنبها أو واحدة منها فقط كملف `.osf` إلى مواقع مختلفة. حدد الطرق التي تريد تصديرها في القائمة المقترحة.

يمكنك [استيراد](../../personal/import-export.md#import) الطرق التي يجب تجنبها أثناء حساب المسار من مصادر أخرى بتنسيق ملف `.osf`. كما يمكن القيام بذلك باستخدام خيار *الاستيراد* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). يمكنك اختيار استيراد جميع البيانات أو عدد قليل فقط من الطرق التي يجب تجنبها (تحديد طريق بعلامة صح في القائمة).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![استيراد تجنب الطرق على الخريطة Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![استيراد تجنب الطرق على الخريطة iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
الطريقة الأكثر ملاءمة لمزامنة الطرق التي يجب تجنبها بين أجهزتك هي استخدام [OsmAnd Cloud](../../personal/osmand-cloud.md) (يتطلب اشتراك Pro).
:::

## مراعاة القيود المؤقتة {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

يسمح خيار *مراعاة القيود المؤقتة* بأخذ القيود المؤقتة على الطرق في الاعتبار عند حساب المسارات. قد تشمل هذه القيود أشياء مثل أعمال الطرق أو إغلاق الطرق لسبب ما (حادث، إصلاحات طرق، كوارث طبيعية). يمكن أن يساعد تمكين هذا الخيار في تجنب التحويلات أو التأخيرات غير المتوقعة. يرجى ملاحظة أن هذه المعلومات قد تكون قديمة في بعض الأحيان.
في OpenStreetMap، عادة ما يتم تمييز هذه المعلومات بالعلامة [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).

## قسم التطوير {#development-section}

قسم **التطوير** في إعدادات *معلمات المسار* (*القائمة ← الإعدادات ← ملف تعريف التطبيق ← إعدادات الملاحة ← معلمات المسار ← التطوير*) يكون مرئيًا فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md). يتضمن إعدادات مثل *نوع التوجيه (Android) / خوارزمية التوجيه (iOS)، تقريب GPX (Android فقط)، التكبير التلقائي، وبيانات OsmAnd Live (Android فقط)*. اقرأ مقال [إعدادات الملاحة](../../navigation/guidance/navigation-settings.md#development-settings) للحصول على وصف مفصل.

> *آخر تحديث: يوليو 2024*