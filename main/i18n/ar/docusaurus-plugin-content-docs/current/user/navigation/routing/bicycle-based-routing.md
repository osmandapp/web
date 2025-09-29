---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  توجيه الدراجات (MTB)
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

يأخذ توجيه الدراجات في الاعتبار عوامل مثل توفر مسارات الدراجات، والممرات، والطرق الآمنة والقانونية لراكبي الدراجات. يستخدم OsmAnd دائمًا بيانات الارتفاع عند حساب الوقت المقدر للوصول (الوقت اللازم لقطع المسافة) وفقًا [لقاعدة نايسميث](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). بشكل افتراضي، يتم توفير أسرع مسار.
يمكن أن يكون توجيه الدراجات مفيدًا أيضًا [لركوب الدراجات الجبلية](#mtb-routing-particularities).

يمكنك تكوين *توجيه الدراجات* في قسم [معلمات المسار](../guidance/navigation-settings#route-parameters) من إعدادات الملاحة.


## معلمات المسار - الدراجة {#route-parameters---bicycle}

تسمح ميزات توجيه الدراجات في OsmAnd لراكبي الدراجات بإدخال نقطة بداية ونهاية، ثم إنشاء مسار يأخذ في الاعتبار تفضيلاتهم والجغرافيا المحلية.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![إعدادات توجيه الدراجات](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه الدراجات iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  ستختار آلية التوجيه طرقًا أكثر مباشرة، وبالتالي أسرع.  | على الرغم من زيادة سرعة الحركة، تزداد المسافة المقطوعة أيضًا في نفس الوقت. وهذا يؤدي إلى زيادة في الجهد العضلي. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Driving&nbsp;style* (iOS) | <details><summary> يمكنك اختيار أسلوب الركوب الخاص بك لتوجيه أفضل. </summary> ![أسلوب الركوب للدراجات Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (سيتم تفضيل الطرق الأقل ازدحامًا ذات الوسوم [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) و [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *تفضيل [الطرق غير المعبدة](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (هذا الخيار هو شيء بين *تفضيل الطرق الفرعية* و *أقصر مسار*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (للتوجيه، سيتم تفضيل الطرق الأوسع والأكثر ازدحامًا عادةً، مما يوفر مسارات أسرع) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة.  </summary>![تجنب الطرق Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار نوع (أنواع) الطرق من القائمة:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (تجنب عبور الحدود إلى بلد آخر)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، يحمل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[تجنب الحصى](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (أجزاء من طريق سريع حيث يمر مجرى مائي فوقه) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [لا للأحجار المرصوفة](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  سيتم تجاهل قيود الوصول الخاصة عند حساب المسار.  | يستخدم الوسم *[private](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود على استخدام الطرق السريعة وطرق النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferred&nbsp;terrain* (iOS) | <details><summary> سيتم استخدام بيانات الارتفاع في حساب المسار: سيتم تعيين [عقوبات للطرق](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) ذات ملف تعريف ارتفاع مختلف. </summary> ![استخدام بيانات الارتفاع Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | يمكن أن يساعد هذا التفضيل في تجنب التلال شديدة الانحدار أو العكس، تفضيلها. إذا اخترت مسارًا *جبليًا*، فسيتم إعطاء الأفضلية للتلال والجبال. إذا كان *مسطحًا* - فسيتم تفضيل السهول وتجنب التلال. تفضيل التلال الأقل هو شيء بين هذين الخيارين. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما هو الحال في التضاريس السهلية. |


## خصوصيات توجيه الدراجات الجبلية (MTB) {#mtb-routing-particularities}

آلية توجيه الدراجات الجبلية (MTB) هي نفسها آلية توجيه الدراجات. لاحظ أن هناك بعض العقوبات على استخدام [مسارات الدراجات الجبلية](../../map/vector-maps.md#routes)، وبالتالي فهي أقل احتمالًا أن تُقترح لركوب الدراجات إلى المنزل أو العمل.