---
source-hash: cd7a6be8622eb21754f0737fc6e482333633f7712490b8d2d401bc90d556be56
sidebar_position: 2
title: توجيه السيارة (شاحنة، دراجة نارية)
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

صُمم توجيه السيارة لمساعدة السائقين على التنقل في الطرق بكفاءة وأمان وراحة، من خلال توفير توجيهات مخصصة تتناسب مع احتياجات وتفضيلات كل سائق الفريدة. يمكن أن تساعد إعدادات التوجيه الصحيحة السائقين على توفير الوقت والوقود، وتجنب المخاطر على الطريق. يتم تقديم أسرع توجيه افتراضيًا.

:::info
تختلف آلية التوجيه للمركبات الأرضية المزودة بمحركات في عدد قليل من الإعدادات فقط. يتم وصف المعلمات المشتركة في قسم [السيارة](#route-parameters---car) من هذه المقالة. أما [الشاحنة](#route-parameters---truck) و[الدراجة النارية](#route-parameters---motorcycle) فلهما خصوصياتهما.
:::

يمكن تكوين التوجيه وفقًا لاحتياجاتك في قسم [معلمات المسار](../../navigation/guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة للملف الشخصي المقابل (*القيادة، الشاحنة، الدراجة النارية*).

## معلمات المسار - السيارة {#route-parameters---car}

صُمم توجيه السيارة لمساعدة السائقين على إيجاد الطرق الأكثر كفاءة ومباشرة إلى وجهاتهم. يأخذ في الاعتبار قيود القيادة الشائعة، مثل الشوارع ذات الاتجاه الواحد، وحظر الانعطافات، ومناطق المشاة، ويساعد أيضًا على تجنب الطرق غير المناسبة للسيارات، مثل الطرق الضيقة أو الطرق ذات قيود الوزن.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه السيارة أندرويد](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه السيارة iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة. </summary>![تجنب الطرق أندرويد](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (تجنب عبور الحدود إلى بلد آخر).</li><li>تجنب [الطرق الجليدية](https://wiki.openstreetmap.org/wiki/Key:ice_road) (طرق موسمية في المناطق الباردة تُبنى فوق الماء المتجمد) و[المخاضات](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (أجزاء من الطريق السريع يمر عليها مجرى مائي). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، ينقل المركبات عبر المسطحات المائية).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (قطارات تحمل السيارات، تربط بين مكانين لا يمكن الوصول إليهما بسهولة عن طريق البر).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (مناسبة فقط لمركبات الدفع الرباعي).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | لتوجيه السيارة، يُفترض أن سطح الطرق [مرصوف](https://wiki.openstreetmap.org/wiki/Key:surface)، ما لم يُحدد خلاف ذلك. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاص عند حساب المسار. | تُستخدم علامة *[خاص](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود على استخدام الطرق السريعة وطرق النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (سيارة&nbsp;فقط) | <details><summary> سيتم تجنب الطرق المغلقة لتسليم البضائع. </summary>![تسليم البضائع أندرويد](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| ينطبق هذا الخيار فقط على المركبات التي تحمل بضائع لا يزيد وزنها عن 3.5 طن. إذا كان وزن مركبتك يزيد عن 3.5 طن، يجب عليك استخدام [ملف الشاحنة](#route-parameters---truck). |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | لحساب التوجيه الموفر للوقود، يحد محرك التوجيه السرعة داخليًا إلى 60 كم/ساعة، ومع ذلك لا يغير وقت الوصول المقدر. لذا في حالة وجود مسارين متطابقين من البداية إلى النهاية، طريق سريع (120 كم/ساعة) وطريق ثانوي (60 كم/ساعة) - سيتم اختيار المسار الأقصر. بالنسبة لطرق الخدمة التي يقل فيها حد السرعة عن 60 كم/ساعة، سيتم اختيار المسار الأسرع. |

## معلمات المسار - الشاحنة {#route-parameters---truck}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف الشاحنة*. لاستخدام هذا الملف للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

يشبه توجيه الشاحنة توجيه السيارة، ولكنه مصمم خصيصًا لسائقي المركبات التجارية الكبيرة. يأخذ في الاعتبار عوامل إضافية مثل [ارتفاع المركبة ووزنها وعرضها](../guidance/navigation-settings.md#size-parameters) وإمكانية نقل المواد الخطرة (راجع الجدول أدناه). جميع إعدادات التوجيه الأخرى مطابقة [لتوجيه السيارة](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه الشاحنة أندرويد 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![إعدادات توجيه الشاحنة iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (لمنطقة **الاتحاد الأوروبي**) | <details><summary> قد تمنع السلطات المحلية نقل المواد الخطرة على بعض الطرق أو الأنفاق. </summary> ![نقل المواد الخطرة أندرويد](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | عند التمكين، تأخذ آلية توجيه الشاحنة في الاعتبار علامة OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. يمكنك اختيار إحدى الفئات الخمس (*A, B, C, D, E*) للمواد الخطرة وفقًا [لقيود الاتحاد الأوروبي](https://wiki.openstreetmap.org/wiki/Key:hazmat). |
| *<Translate android="true" ids="dangerous_goods"/>* (فقط إذا تم تحديد منطقة **الولايات المتحدة الأمريكية**) | <details><summary> تختلف قواعد نقل المواد الخطرة في الولايات المتحدة الأمريكية عن الاتحاد الأوروبي. تُعرض فقط إذا تم تعيين منطقة القيادة على الولايات المتحدة. يمكنك تحديد فئات متعددة. </summary> ![نقل المواد الخطرة أندرويد](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | حدد أحد أنواع (من 1 إلى 9) المواد الخطرة وفقًا [لقيود الولايات المتحدة الأمريكية](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). يُحظر نقل المواد الخطرة على بعض الطرق والأنفاق. <ul><li>1. *المتفجرات* </li><li> 2. *الغازات* </li><li> 3. *السوائل القابلة للاشتعال* </li><li> 4. *المواد الصلبة القابلة للاشتعال* </li><li> 5. *العوامل المؤكسدة والبيروكسيدات العضوية* </li><li> 6. *المواد السامة والمعدية* </li><li> 7. *المواد المشعة* </li><li> 8. *المواد المسببة للتآكل* </li><li> 9. *متنوعة* </li></ul> |

## معلمات المسار - الدراجة النارية {#route-parameters---motorcycle}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف الدراجة النارية*. لاستخدام هذا الملف للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

توجيه الدراجات النارية هو عملية إنشاء مسار مُحسّن خصيصًا للسفر بالدراجات النارية. يأخذ هذا النوع من التوجيه في الاعتبار الاحتياجات والتفضيلات الفريدة لسائقي الدراجات النارية، مما يوفر أفضل ظروف ركوب ممكنة. يتم تحديد المسارات مع الأخذ في الاعتبار عددًا من المعلمات مثل اختيار سطح الطريق (على سبيل المثال، يمكن تفضيل ظروف الطريق السيئة أو تجنبها)، وتجنب الازدحامات المرورية، وإمكانية الوصول إلى البنية التحتية أو السلامة.

## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في قسم [*التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [المكون الإضافي لتطوير OsmAnd](../../plugins/development.md).

- إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd موجود في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يُستخدم هذا الإعداد على الطرق غير المعروفة بدون حدود سرعة. يحدث هذا غالبًا عند التنقل في مسار أو طريق عبر الإنترنت. يجب ضبطه وفقًا لمعلمات مركبتك.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يوليو 2024*