---
source-hash: c9cc4966613ed52d676e5a31b688413d05a80561124ece1be768467357788ff3
sidebar_position: 4
title:  توجيه المشاة
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

يشير توجيه المشاة إلى عملية إيجاد أفضل مسار للمشاة للتنقل من موقع إلى آخر، مع الأخذ في الاعتبار عوامل مثل مناطق المشاة فقط، والأرصفة، ومعابر المشاة، والتقاطعات الصديقة للمشاة. وقد يأخذ في الاعتبار أيضًا عوامل أخرى مثل *السلالم*، والتي قد تكون مفيدة لإمكانية وصول الكراسي المتحركة. يستخدم OsmAnd دائمًا بيانات الارتفاع عند حساب الوقت المقدر للوصول (الوقت اللازم لقطع المسافة) وفقًا [لقاعدة نايميث](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

لتكوين *توجيه المشاة*، انتقل إلى [قسم معلمات المسار](../guidance/navigation-settings#route-parameters) في إعدادات الملاحة.

### معلمات المسار - المشي {#route-parameters---walking}

يمكن أن يكون توجيه المشاة مفيدًا ليس فقط في المناطق الحضرية، حيث قد يواجه المشاة عوائق مختلفة عند محاولة الانتقال من مكان إلى آخر. يمكنك أيضًا استخدام هذا النوع من التوجيه أثناء الركض والمشي لمسافات طويلة والمشي الشمالي خارج المدينة أو في الجبال. ما عليك سوى ضبط معلمات التوجيه وفقًا لاحتياجاتك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات توجيه المشاة أندرويد 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه المشاة iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء التنقل. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة. </summary>![تجنب طرق أندرويد](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، ينقل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> يمكنك اختيار نوع السطح الذي تفضله عند بناء مسار. </summary> ![ارتفاع المشاة أندرويد](@site/static/img/navigation/routing/prefer_pedestrian_andr.png) </details> | يمكنك الاختيار بين خيارين:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). توجد هذه المسارات عادة في البيئات الطبيعية مثل الغابات والجبال والحدائق. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). قد يتم تثبيت نظام مؤشر السطح الأرضي ذو الملمس هذا على الممرات والسلالم ومنصات النقل العام لمساعدة المشاة المكفوفين أو ضعاف البصر على التنقل. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاصة عند حساب المسار. | يتم استخدام العلامة *[خاص](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود على استخدام الطرق السريعة وطرق النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> سيتم استخدام بيانات الارتفاع في حساب المسار: سيتم تعيين [عقوبات](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) للطرق التي تختلف عن النوع المحدد. </summary> ![استخدام بيانات الارتفاع أندرويد](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | يمكن أن يساعد هذا التفضيل في تجنب التلال شديدة الانحدار أو العكس، تفضيلها. قد يكون استخدام هذا الخيار مفيدًا جدًا في توجيه المشاة. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما هو الحال في التضاريس المستوية. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| سيتم استخدام مسارات *Via ferrata* للتوجيه عندما يتم تمكين هذا الخيار مع *استخدام بيانات الارتفاع*. | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) هو مسار جبلي مجهز بكابلات ثابتة، ودعامات، وسلالم، وجسور. |


## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في [*قسم إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في [*قسم التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يستخدم هذا الإعداد على الطرق غير المعروفة بدون حدود للسرعة. هذا هو الحال غالبًا عند التنقل في مسار أو مسار عبر الإنترنت. يجب ضبطه وفقًا لمعلمات مركبتك.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*