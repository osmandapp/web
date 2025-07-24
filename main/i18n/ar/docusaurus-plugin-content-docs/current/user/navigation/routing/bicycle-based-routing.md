---
source-hash: 5518fc70081b20221258351fc52ceac84a6e4c65f687401c6f1e219d9057dfed
sidebar_position: 3
title: توجيه الدراجات الهوائية (MTB)
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

يأخذ توجيه الدراجات الهوائية في الاعتبار عوامل مثل توفر مسارات الدراجات والممرات والطرق الآمنة والقانونية لراكبي الدراجات. يستخدم OsmAnd دائمًا بيانات الارتفاع عند حساب الوقت المقدر للوصول (الوقت اللازم لتغطية المسافة) وفقًا [لقاعدة نايسميث](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). يتم توفير أسرع مسار بشكل افتراضي.
يمكن أن يكون توجيه الدراجات الهوائية مفيدًا أيضًا [لركوب الدراجات الجبلية](#mtb-routing-particularities).

يمكنك تكوين *توجيه الدراجات الهوائية* في [قسم معلمات المسار](../guidance/navigation-settings#route-parameters) من إعدادات التنقل.

## معلمات المسار - الدراجة الهوائية {#route-parameters---bicycle}

تتيح ميزات توجيه الدراجات الهوائية في OsmAnd لراكبي الدراجات إدخال نقطة بداية ونهاية، ثم إنشاء مسار يأخذ في الاعتبار تفضيلاتهم والجغرافيا المحلية.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات توجيه الدراجات الهوائية](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه الدراجات الهوائية iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | ستختار آلية التوجيه طرقًا أكثر مباشرة، وبالتالي أسرع. | على الرغم من زيادة سرعة الحركة، تزداد المسافة المقطوعة في نفس الوقت. وهذا يؤدي إلى زيادة الجهد العضلي. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (أندرويد) *أسلوب القيادة* (iOS) | <details><summary> يمكنك اختيار أسلوب قيادتك لتوجيه أفضل. </summary> ![أسلوب قيادة الدراجات الهوائية أندرويد](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (ستُفضّل الطرق الأقل ازدحامًا ذات العلامات [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) و [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *تفضيل [الطرق غير المعبدة](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (هذا الخيار هو شيء بين *تفضيل الطرق الفرعية* و *أقصر مسار*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (للتوجيه ستُفضّل الطرق الأوسع والأكثر ازدحامًا عادةً، مما يوفر مسارات أسرع) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء التنقل. </summary>![تجنب الطرق أندرويد](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار نوع (أنواع) الطريق من القائمة: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (تجنب عبور الحدود إلى بلد آخر)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، ينقل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[تجنب الطرق المرصوفة بالحصى](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (أجزاء من الطريق السريع يمر فوقها مجرى مائي) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [لا يوجد رصف](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاصة عند حساب المسار. | تُستخدم علامة *[private](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود المفروضة على استخدام الطرق السريعة ومسارات النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (أندرويد) *التضاريس المفضلة* (iOS) | <details><summary> سيتم استخدام بيانات الارتفاع في حساب المسار: سيتم تعيين [عقوبات للطرق](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) ذات ملف تعريف ارتفاع آخر. </summary> ![استخدام بيانات الارتفاع أندرويد](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | يمكن أن يساعد هذا التفضيل في تجنب التلال شديدة الانحدار أو العكس، تفضيلها. إذا اخترت مسارًا *جبليًا*، فسيتم إعطاء الأفضلية للتلال والجبال. إذا كان *مسطحًا* - للمناطق المسطحة، سيتم تجنب التلال. تفضيل التلال الأقل هو شيء بين هذين الخيارين. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما لو كان على تضاريس مستوية. |

## خصوصيات توجيه الدراجات الجبلية (MTB) {#mtb-routing-particularities}

آلية توجيه الدراجات الجبلية (MTB) هي نفسها آلية توجيه الدراجات الهوائية. لاحظ أن هناك بعض العقوبات على استخدام [مسارات الدراجات الجبلية](../../map/vector-maps.md#routes)، وبالتالي فمن غير المرجح أن يتم تقديمها لركوب الدراجات إلى المنزل أو العمل.

## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في [*قسم التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات التنقل ← معلمات المسار* (لـ *أندرويد*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يُستخدم هذا الإعداد على الطرق غير المعروفة التي لا تحتوي على حدود سرعة. يحدث هذا غالبًا عند التنقل في مسار أو طريق عبر الإنترنت. يجب ضبطه وفقًا لمعلمات مركبتك.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*