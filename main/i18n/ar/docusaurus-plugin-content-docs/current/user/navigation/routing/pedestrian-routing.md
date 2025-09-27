---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
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

يشير توجيه المشاة إلى عملية إيجاد أفضل مسار للمشاة للانتقال من موقع إلى آخر، مع مراعاة عوامل مثل المناطق المخصصة للمشاة فقط، والأرصفة، وممرات المشاة، والتقاطعات الصديقة للمشاة. وقد يأخذ في الاعتبار أيضًا عوامل أخرى مثل *السلالم*، والتي قد تكون مفيدة لإمكانية وصول الكراسي المتحركة. يستخدم OsmAnd دائمًا بيانات الارتفاع عند حساب الوقت المقدر للوصول (الوقت اللازم لقطع المسافة) وفقًا لـ [قاعدة نايسميث](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

لتهيئة *توجيه المشاة*، انتقل إلى [قسم معلمات المسار](../guidance/navigation-settings#route-parameters) في إعدادات الملاحة.
  
### معلمات المسار - المشي {#route-parameters---walking}

يمكن أن يكون توجيه المشاة مفيدًا ليس فقط في المناطق الحضرية، حيث قد يواجه المشاة عقبات مختلفة عند محاولة الانتقال من مكان إلى آخر. يمكنك أيضًا استخدام هذا النوع من التوجيه أثناء الركض والمشي لمسافات طويلة والمشي النوردي خارج المدينة أو في الجبال. ما عليك سوى ضبط معلمات التوجيه وفقًا لاحتياجاتك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">  

![إعدادات توجيه المشاة في أندرويد 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه المشاة في iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة.  </summary>![تجنب الطرق في أندرويد](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، يحمل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> يمكنك اختيار نوع السطح الذي تفضله عند إنشاء مسار. </summary> ![تفضيل المشاة في أندرويد](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | يمكنك الاختيار بين خيارين:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). توجد هذه المسارات عادةً في البيئات الطبيعية مثل الغابات والجبال والحدائق. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). قد يتم تثبيت نظام مؤشر السطح الأرضي المزخرف هذا على ممرات المشاة والسلالم ومنصات النقل العام لمساعدة المشاة المكفوفين أو ضعاف البصر في التنقل. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  سيتم تجاهل قيود الوصول الخاص عند حساب المسار.  | يُستخدم وسم *[خاص](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود المفروضة على استخدام الطرق السريعة ومسارات النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> سيتم استخدام بيانات الارتفاع في حساب المسار: سيتم تعيين [عقوبات](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) للطرق التي تختلف عن النوع المحدد. </summary> ![استخدام بيانات الارتفاع في أندرويد](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | يمكن أن يساعد هذا التفضيل في تجنب التلال شديدة الانحدار أو العكس، تفضيلها. قد يكون استخدام هذا الخيار مفيدًا جدًا في توجيه المشاة. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما لو كان على تضاريس مستوية. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| سيتم استخدام مسارات *Via ferrata* للتوجيه عند تمكين هذا الخيار مع *استخدام بيانات الارتفاع*.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) هو طريق جبلي مجهز بكابلات ثابتة، ودرجات، وسلالم، وجسور. |