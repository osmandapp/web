---
source-hash: f5ae16407762521ec4aa196b206ad374ecb06bfd7b394248db04784c9100bc68
sidebar_position: 7
title:  توجيه القطار
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

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف تعريف القطار*. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

يوفر *توجيه القطار* في OsmAnd للمستخدمين إمكانية استخدام خطوط السكك الحديدية للملاحة كما لو كانوا يقودون قطارًا مثل السيارة. يمكن أن يكون هذا الخيار مفيدًا، على سبيل المثال، للمشي لمسافات طويلة عندما لا تتوفر طرق أخرى. في حالات أخرى، من الأفضل استخدام *[توجيه النقل العام](./public-transport-navigation.md)*.

![Map transport tram](@site/static/img/navigation/routing/train_routing_overview.png)


## معلمات المسار - القطار {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![Train routing settings Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Train routing settings iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

يمكن تكوين *توجيه القطار* وفقًا لاحتياجاتك في [قسم معلمات المسار](../guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.


## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في [*قسم إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في [*قسم التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [المكون الإضافي لتطوير OsmAnd](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يمكن أيضًا تعيين هذه الإعدادات لتوجيه *مباشر إلى نقطة*. يتم استخدامه لحساب الوقت المقدر للوصول.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*