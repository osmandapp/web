---
source-hash: 7e3135f97cb0856e50ca46f17778ece558a18d14044f072d10d8739db6285192
sidebar_position: 10
title:  التوجيه في خط مستقيم (الطائرات)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## نظرة عامة {#overview}

على عكس خوارزميات التوجيه التقليدية التي تستخدم الطرق أو المسارات أو المسارات المحددة مسبقًا، تحسب خوارزمية التوجيه في خط مستقيم أقصر مسافة بين نقطتين على الخريطة كخط مستقيم. يمكن أن تكون هذه الميزة مفيدة للمتنزهين النشطين الذين يرغبون في الابتعاد عن المسارات أو استكشاف المناطق النائية حيث قد لا تتوفر المسارات التقليدية. بالنسبة لطياري الطائرات الخفيفة وقباطنة السفن، يمكن أن يكون استخدام *نوع التوجيه في خط مستقيم* مفيدًا جدًا في الملاحة.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png) -->

- لا يأخذ التوجيه *في خط مستقيم* في الاعتبار أي عوائق أو حواجز قد تكون موجودة في التضاريس، مثل الجبال أو الأنهار أو الغابات الكثيفة.
- لا يوفر أي معلومات حول جودة التضاريس، أو مستوى صعوبة المسار، أو أي عوامل أخرى ذات صلة قد تؤثر على سلامة أو جدوى المسار (قسم [تفاصيل المسار](../setup/route-details.md) فارغ).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## معلمات المسار - خط مستقيم {#route-parameters---straight-line}

:::note
يرتبط التوجيه في خط مستقيم بـ *ملف تعريف الطائرة*. بشكل افتراضي، يتم إلغاء تنشيط هذا الملف الشخصي. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

يمكن تكوين التوجيه *في خط مستقيم* وفقًا لاحتياجاتك في [قسم معلمات المسار](../guidance/navigation-settings.md#route-parameters) في إعدادات الملاحة.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | عندما تكون الزاوية بين المسار المحسوب والموقع الجغرافي الفعلي أعلى من تلك التي حددتها، سيتم بناء أقصر مسار من موقعك الحالي إلى المسار المحسوب. بعبارة أخرى، سيحسب OsmAnd جزءًا إضافيًا من المسار إلى المسار المحسوب مسبقًا. |


## إعدادات التوجيه الأخرى {#other-routing-settings}

- في [قسم إعادة حساب المسار](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يتم تعيين المسافة التي سيتم عندها إعادة حساب المسار لـ *التوجيه في خط مستقيم* على 500 متر افتراضيًا.

- في [قسم التطوير](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يمكن أيضًا تعيين هذه الإعدادات للتوجيه *المباشر إلى نقطة*. يتم استخدامه لحساب وقت الوصول المقدر.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*