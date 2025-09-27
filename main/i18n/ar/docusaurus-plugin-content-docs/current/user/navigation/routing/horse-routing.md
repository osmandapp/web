---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  توجيه الخيول
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

يمكن أن يكون *توجيه الخيول* مفيدًا للفرسان الذين يرغبون في تخطيط جولاتهم على المسارات والطرق الآمنة والمناسبة للخيول. بمساعدة هذا النوع من التوجيه، قد تكتشف أيضًا طرقًا جديدة لم تكن معروفة من قبل.

يمكن تكوين *توجيه الخيول* وفقًا لاحتياجاتك في قسم [معلمات المسار](../guidance/navigation-settings.md#route-parameters) في إعدادات الملاحة.

![ركوب الخيل](@site/static/img/navigation/routing/horseback_routing_overview.png)


## معلمات المسار - الخيل {#route-parameters---horse}

:::note
بشكل افتراضي، يكون *ملف تعريف ركوب الخيل* غير نشط. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

تم تصميم توجيه الخيول لتزويد الفرسان بمعلومات حول المسارات الصديقة للخيول، ومسارات اللجام، ومسارات الركوب.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إعدادات توجيه الخيل أندرويد 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه الخيل iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة. </summary> ![تجنب الطرق أندرويد](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، يحمل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> يمكنك اختيار ما إذا كنت تفضل مسارات الخيول أم لا. </summary> ![تفضيل مسارات الخيول أندرويد](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). طريق مخصص للاستخدام من قبل راكبي الخيول (بشكل أساسي) والمشاة (حسب اللوائح الخاصة بكل بلد). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [البوابة](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) هي نوع من [الحواجز](https://wiki.openstreetmap.org/wiki/Key:barrier)، التي تمنع الحركة. عادة ما تكون قسمًا في جدار أو سياج يمكن فتحه أو إغلاقه للسماح بالوصول أو تقييده. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | في بعض البلدان، لا يُسمح بـ[العربات التي تجرها الخيول](https://wiki.openstreetmap.org/wiki/Key:carriage) على الطرق السريعة، ويُسمح بها فقط على عدد قليل جدًا من الطرق الأخرى. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاصة عند حساب المسار. | يُستخدم وسم *[private](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود المفروضة على استخدام الطرق السريعة وطرق النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | سيتم استخدام الشوارع المخصصة للخيول فقط في التوجيه. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | سيتم استخدام الطرق المخصصة للخيول فقط في التوجيه. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> سيعكس وقت السفر المتوقع تأثير الارتفاع. </summary> ![استخدام بيانات الارتفاع أندرويد](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | يمكن أن يساعد هذا التفضيل في تجنب الصعود الحاد. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما لو كان على أرض مستوية. |