---
source-hash: 7008e200a45abc6dac5f84f04d67cfa4d6839d97740df298ea502bad90aec24d
sidebar_position: 6
title:  توجيه ركوب الخيل
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

يمكن أن يكون *توجيه ركوب الخيل* مفيدًا للفرسان الذين يرغبون في تخطيط مساراتهم على طرق ومسارات آمنة ومناسبة للخيول. بمساعدة هذا النوع من التوجيه، قد تكتشف أيضًا مسارات جديدة لم تكن معروفة من قبل.

يمكن تهيئة *توجيه ركوب الخيل* وفقًا لاحتياجاتك في [قسم معلمات المسار](../guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## معلمات المسار - الخيل {#route-parameters---horse}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف تعريف ركوب الخيل*. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

تم تصميم توجيه ركوب الخيل لتزويد الفرسان بمعلومات حول المسارات الصديقة للخيول، ومسارات الخيل، ومسارات الركوب.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> حدد الطرق التي تريد تجنبها أثناء الملاحة. يمكنك إما [تحديد طريق على الخريطة](../../map/map-context-menu/#avoid-road) أو اختيار أنواع الطرق من القائمة. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (نوع من النقل المائي، ينقل المركبات عبر المسطحات المائية)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> يمكنك اختيار ما إذا كنت تفضل المسارات المخصصة للخيول أم لا. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). طريق مخصص للاستخدام من قبل راكبي الخيل (بشكل أساسي) والمشاة (حسب اللوائح الخاصة بكل بلد). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [البوابة](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) هي نوع من [الحواجز](https://wiki.openstreetmap.org/wiki/Key:barrier)، التي تمنع الحركة. عادة ما تكون جزءًا في جدار أو سياج يمكن فتحه أو إغلاقه للسماح بالوصول أو تقييده. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | في بعض البلدان، لا يُسمح [بالعربات التي تجرها الخيول](https://wiki.openstreetmap.org/wiki/Key:carriage) على الطرق السريعة، ويُسمح بها فقط على عدد قليل جدًا من الطرق الأخرى. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | سيتم تجاهل قيود الوصول الخاصة عند حساب المسار. | تُستخدم علامة *[خاص](https://wiki.openstreetmap.org/wiki/Key:access)* في OSM لوصف القيود على استخدام الطرق السريعة وطرق النقل الأخرى، بالإضافة إلى المباني والمداخل والمرافق والكيانات الترفيهية. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | سيتم استخدام الشوارع المخصصة للخيول فقط للتوجيه. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | سيتم استخدام الطرق المخصصة للخيول فقط للتوجيه. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> سيعكس وقت السفر المتوقع تأثير الارتفاع. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | يمكن أن يساعد هذا التفضيل في تجنب الصعود الشديد. بدون بيانات الارتفاع، سيتم حساب أسرع مسار كما هو الحال في التضاريس المستوية. |


## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار [<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations). لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في قسم [إعادة حساب المسار](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في قسم [التطوير](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [المكون الإضافي لتطوير OsmAnd](../../plugins/development.md).

- يوجد إعداد [<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds) في إصدار *iOS* من OsmAnd في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يُستخدم هذا الإعداد على الطرق غير المعروفة بدون حدود للسرعة. يحدث هذا غالبًا عند التنقل في مسار أو طريق عبر الإنترنت. يجب ضبطه وفقًا لمعلمات مركبتك.

- [<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters). سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*