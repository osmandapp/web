---
source-hash: 1009e397e49c6876a7afb34c8bd224fefa84be12f75b981af08e61dc95164eaf
sidebar_position: 9
title:  التوجيه المباشر إلى النقطة (قارب)
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

يُعد التوجيه المباشر إلى النقطة في OsmAnd ميزة مفيدة تتيح لك التنقل مباشرةً إلى نقطة معينة على الخريطة دون الحاجة إلى اتباع مسار محدد مسبقًا أو شبكة طرق. يمكن استخدام هذه الميزة من قبل قادة القوارب،
عشاق الأنشطة الخارجية، أو من قبل خدمات الطوارئ أثناء عمليات الإنقاذ. بشكل عام، يُعد التوجيه المباشر إلى النقطة ميزة مرنة ومتعددة الاستخدامات يمكن استخدامها في مجموعة متنوعة من المواقف التي قد لا تكون فيها طرق التوجيه التقليدية مناسبة أو فعالة.

![نوع التنقل المباشر Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

النقطة على الخط هي نقطة افتراضية تكون المسافة منها إلى الوجهة هي نفسها المسافة من موقعك الحالي، ولكنها ليست إسقاطًا لموقعك الحالي على خط. هذا يجعل من السهل قياس التقدم، ويمكنك استخدام أداة القياس للحصول على المسافة الصحيحة.


## معلمات المسار - مباشر إلى نقطة {#route-parameters---direct-to-point}

نوع التوجيه *المباشر إلى نقطة* غير مرتبط بأي ملف تعريف ويمكن استخدامه مع ملفات تعريف مختلفة.
لا يأخذ هذا النوع من التوجيه في الاعتبار أي عوائق أو حواجز قد تكون موجودة في التضاريس، مثل الجبال أو الأنهار أو الغابات الكثيفة. كما أنه لا يوفر أي معلومات حول جودة التضاريس أو مستوى صعوبة المسار أو أي عوامل أخرى ذات صلة قد تؤثر على سلامة المسار أو قابليته للتطبيق (قسم [تفاصيل المسار](../setup/route-details.md) فارغ).

:::note
عند استخدام أنواع التنقل المباشر إلى نقطة والقارب، ستحتاج إلى [بيانات خطوط الكنتور للعمق](../../plugins/nautical-charts.md#nautical-map-style)، والتي يمكن تمكينها وتعيينها في *تكوين الخريطة*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> ← أي ملف تعريف ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![إعدادات التوجيه المباشر إلى نقطة](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> ← أي ملف تعريف ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![إعدادات التوجيه المباشر إلى نقطة iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## إعدادات التوجيه الأخرى {#other-routing-settings}

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار. القيمة الافتراضية هي 0 متر من الانحراف، مما يعني أن المسار لا يتم إعادة حسابه.

- في قسم [*التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة لا تزال في مرحلة الاختبار. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

- إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd موجود في *إعدادات التنقل ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يمكن أيضًا تعيين هذه الإعدادات للتوجيه *المباشر إلى نقطة*. تُستخدم هذه الإعدادات لحساب وقت الوصول المقدر.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب حسب نوع المركبة وقيود الطريق، وكذلك حساب وقت السفر.

> *آخر تحديث: يونيو 2024*