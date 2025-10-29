---
source-hash: 74a5b610d6f4eeafabe0fe3369b3c7c103d064d346a88aacce7696290df5bb64
sidebar_position: 2
title:  توجيه السيارة (الشاحنة، الدراجة النارية)
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

تم تصميم التوجيه المعتمد على السيارة لمساعدة السائقين على التنقل في الطرق بكفاءة وأمان وراحة، من خلال توفير اتجاهات مخصصة مصممة خصيصًا لتلبية احتياجات وتفضيلات كل سائق الفريدة. يمكن أن تساعد إعدادات التوجيه الصحيحة السائقين على توفير الوقت والوقود، وتجنب المخاطر على الطريق. يتم تقديم أسرع توجيه بشكل افتراضي.

:::info
تختلف آلية التوجيه للمركبات البرية ذات المحركات في بعض الإعدادات فقط. تم وصف المعلمات المشتركة في قسم [السيارة](#route-parameters---car) من هذه المقالة. لكل من [الشاحنة](#route-parameters---truck) و[الدراجة النارية](#route-parameters---motorcycle) خصوصياتها.
:::

يمكن تكوين التوجيه وفقًا لاحتياجاتك في [قسم معلمات المسار](../../navigation/guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة للملف الشخصي المقابل (*القيادة، الشاحنة، الدراجة النارية*).

## معلمات المسار - السيارة {#route-parameters---car}

تم تصميم توجيه السيارة لمساعدة السائقين في العثور على أكثر الطرق كفاءة ومباشرة إلى وجهاتهم. يأخذ في الاعتبار قيود القيادة الشائعة، مثل الشوارع ذات الاتجاه الواحد، وحظر الانعطاف، ومناطق المشاة، ويساعد أيضًا في تجنب الطرق غير المناسبة للسيارات، مثل الطرق الضيقة أو الطرق ذات قيود الوزن.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه السيارة على أندرويد](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه السيارة على iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة. </summary>![تجنب الطرق على أندرويد](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (تجنب عبور الحدود إلى بلد آخر).</li><li>تجنب [الطرق الجليدية](https://wiki.openstreetmap.org/wiki/Key:ice_road) (الطرق الموسمية في المناطق الباردة التي تُبنى على المياه المتجمدة) و[المخاضات](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (أجزاء من طريق سريع حيث يمر مجرى مائي فوقه). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، ينقل المركبات عبر المسطحات المائية).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (قطارات نقل السيارات، التي تربط بين مكانين لا يمكن الوصول إليهما بسهولة عن طريق البر).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (مناسبة فقط لمركبات الدفع الرباعي).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | بالنسبة لتوجيه السيارة، يُفترض أن سطح الطرق [مُعبّد](https://wiki.openstreetmap.org/wiki/Key:surface)، ما لم يُنص على خلاف ذلك. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاصة عند حساب المسار. | يُستخدم الوسم *[private](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود المفروضة على استخدام الطرق السريعة وغيرها من طرق النقل، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (للسيارة&nbsp;فقط) | <details><summary> سيتم تجنب الطرق المغلقة لتسليم البضائع. </summary>![تسليم البضائع على أندرويد](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| ينطبق هذا الخيار فقط على المركبات التي تنقل بضائع ولا يزيد وزنها عن ٣.٥ طن. إذا كان وزن مركبتك يزيد عن ٣.٥ طن، يجب عليك استخدام [ملف تعريف الشاحنة](#route-parameters---truck). |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | لحساب مسار موفر للوقود، يحد محرك التوجيه السرعة داخليًا إلى ٦٠ كم/ساعة، ولكنه لا يغير الوقت المقدر للوصول. لذلك في حالة وجود مسارين متطابقين من البداية إلى النهاية: طريق سريع (١٢٠ كم/ساعة) وطريق فرعي (٦٠ كم/ساعة) - سيتم اختيار المسار الأقصر. بالنسبة لطرق الخدمة التي لها حد سرعة < ٦٠ كم/ساعة، سيتم اختيار المسار الأسرع. |

## معلمات المسار - الشاحنة {#route-parameters---truck}

:::note
بشكل افتراضي، يكون *ملف تعريف الشاحنة* غير نشط. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تفعيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

توجيه الشاحنات مشابه لتوجيه السيارات، ولكنه مصمم خصيصًا لسائقي المركبات التجارية الكبيرة. يأخذ في الاعتبار عوامل إضافية مثل قيود [الارتفاع والعرض والوزن، أقصى حمل للمحور، وقيود الوزن الأقصى عند الحمولة الكاملة](../guidance/vehicle-parameters.md#size-parameters) للمركبة وإمكانية نقل المواد الخطرة (راجع الجدول أدناه). جميع إعدادات التوجيه الأخرى مطابقة [لتوجيه السيارة](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه الشاحنة على أندرويد 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه الشاحنة على iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (لمنطقة **الاتحاد الأوروبي**) | <details><summary> قد تمنع السلطات المحلية نقل المواد الخطرة على بعض الطرق أو الأنفاق. </summary> ![نقل المواد الخطرة على أندرويد](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | عند التمكين، تأخذ آلية توجيه الشاحنات في الاعتبار وسم OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. يمكنك اختيار واحدة من الفئات الخمس (*A, B, C, D, E*) للمواد الخطرة وفقًا **لقيود الاتحاد الأوروبي**. |
| *<Translate android="true" ids="dangerous_goods"/>* (فقط إذا تم تحديد **منطقة الولايات المتحدة الأمريكية**) | <details><summary> تختلف قواعد نقل المواد الخطرة في الولايات المتحدة الأمريكية عن الاتحاد الأوروبي. يتم عرضها فقط إذا تم تعيين منطقة القيادة على الولايات المتحدة. يمكنك تحديد فئات متعددة. </summary> ![نقل المواد الخطرة على أندرويد](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | حدد أحد الأنواع (من ١ إلى ٩) للمواد الخطرة وفقًا [**لقيود الولايات المتحدة الأمريكية**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). يُحظر نقل المواد الخطرة على بعض الطرق والأنفاق. <ul><li>١. *المتفجرات* </li><li> ٢. *الغازات* </li><li> ٣. *السوائل القابلة للاشتعال* </li><li> ٤. *المواد الصلبة القابلة للاشتعال* </li><li> ٥. *العوامل المؤكسدة والبيروكسيدات العضوية* </li><li> ٦. *المواد السامة والمعدية* </li><li> ٧. *المواد المشعة* </li><li> ٨. *المواد المسببة للتآكل* </li><li> ٩. *متنوعات* </li></ul> |

## معلمات المسار - الدراجة النارية {#route-parameters---motorcycle}

:::note
بشكل افتراضي، يكون *ملف تعريف الدراجة النارية* غير نشط. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تفعيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

توجيه الدراجات النارية هو عملية إنشاء مسار مُحسَّن خصيصًا لسفر الدراجات النارية. يأخذ هذا النوع من التوجيه في الاعتبار الاحتياجات والتفضيلات الفريدة لراكبي الدراجات النارية، مما يوفر أفضل ظروف ركوب ممكنة. يتم تخطيط المسارات مع مراعاة عدد من المعلمات مثل اختيار سطح الطريق (على سبيل المثال، يمكن تفضيل أو تجنب ظروف الطريق السيئة)، وتجنب الاختناقات المرورية، وإمكانية الوصول إلى البنية التحتية أو السلامة.