---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title:  توجيه القوارب
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

يمكن أن يكون توجيه القوارب أداة قيمة لأي شخص يستمتع بركوب القوارب أو الإبحار عبر القنوات أو الأنهار أو الممرات المائية. نظرًا لعدم وجود معظم الممرات المائية في بيانات OpenStreetMap، فإن توجيه القوارب *لا يوصى به* لـ **الملاحة في المياه المفتوحة**، ويُقترح استخدام **[التوجيه المباشر إلى نقطة](#direct-to-point-routing-for-boat)** بدلاً من ذلك. مع تمكين خطوط الكنتور العمق، يمكن أن يساعدك على البقاء آمنًا على الماء من خلال تجنب المخاطر مثل المياه الضحلة أو الصخور أو العوائق الأخرى.
يأخذ محرك توجيه القوارب في OsmAnd أيضًا في الاعتبار خصائص الممرات المائية والقوارب نفسها.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## معلمات المسار - القارب {#route-parameters---boat}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف تعريف القارب*. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

يمكن تكوين توجيه القوارب وفقًا لاحتياجاتك في [قسم معلمات المسار](../../navigation/guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.

عادةً، يتم استخدام *توجيه القوارب* مع ملف تعريف القارب (آخر ملف تم تمكينه مع [المكون الإضافي البحري](../../plugins/nautical-charts.md)). ومع ذلك، من الممكن استخدام توجيه القوارب مع ملفات تعريف أخرى أيضًا، ويمكن أيضًا استخدام [أنواع توجيه مختلفة](#other-routing-types-for-boat) في ملف تعريف القارب.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Boat routing settings Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Boat routing settings iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف | ملاحظة |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | يسمح لك باستخدام الجداول والمصارف للملاحة بالقوارب. قد يكون تمكين هذا الخيار مفيدًا للقوارب الصغيرة مثل الزوارق، قوارب الكاياك، الطوافات، قوارب التجديف. | [الجداول](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) هي ممرات مائية طبيعية ضيقة جدًا بحيث لا يمكن تسميتها نهرًا. [المصارف](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) هي ممرات مائية اصطناعية، عادة ما تكون مبطنة بالخرسانة أو ما شابه ذلك، وتستخدم لنقل المياه الزائدة مثل مياه الأمطار أو التصريف الرمادي. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | يتيح لك تشغيل هذا الخيار استخدام الممرات المائية المتقطعة للتنقل بالقارب. | تُستخدم علامة [متقطع](https://wiki.openstreetmap.org/wiki/Key:intermittent) للإشارة إلى أن الممر المائي لا يحتوي على ماء بشكل دائم. |

:::note الملاحة المائية والقيود

1. تم تصميم ملف تعريف القارب للتوجيه على طول الأنهار والبحيرات والممرات المائية الأخرى. وهو يدعم علامات OSM مثل:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`، إلخ.

2. لا يدعم ملف تعريف القارب **مسارات العبارات (`route=ferry`)**. وهذا يعني أن مسارات العبارات، حتى لو كانت موجودة على الخريطة، **لن تُستخدم** عند حساب مسارات القوارب.

3. لمتابعة خط عبارة يدويًا:

    - استخدم أداة [تخطيط مسار](../../plan-route/create-route.md) ووضع نقاط الطريق يدويًا.
    - استخدم ملف تعريف السيارة، الذي يدعم مسارات العبارات

:::

## أنواع التوجيه الأخرى للقوارب {#other-routing-types-for-boat}

نوع [توجيه القوارب](#route-parameters---boat) هو خوارزمية التوجيه الافتراضية لملف تعريف القوارب. على الرغم من أنه يمكنك اختيار نوع توجيه آخر، وهو مناسب أيضًا للملاحة بالقوارب:

- [التوجيه المباشر إلى نقطة للقوارب](./boat-navigation.md#direct-to-point-routing-for-boat)
- [التوجيه بخط مستقيم للقوارب](./boat-navigation.md#straight-line-routing-for-boat)

من المهم ملاحظة أن أنواع التوجيه *المباشر إلى نقطة* و *الخط المستقيم* يجب استخدامها فقط في المياه المفتوحة حيث لا توجد عوائق أو مخاطر للملاحة. إذا كنت تتنقل في ممر مائي بقناة أو مسار محدد، فيجب عليك استخدام نوع توجيه القوارب في OsmAnd، والذي سيرشدك عبر قنوات الملاحة الصحيحة ويتجنب المناطق الضحلة أو المخاطر الأخرى.

يمكن تفعيل أنواع التوجيه هذه لملف تعريف القارب باستخدام المسار التالي: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> أو آخر) ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### التوجيه المباشر إلى نقطة للقوارب {#direct-to-point-routing-for-boat}

:::note
عند استخدام أنواع الملاحة المباشرة إلى نقطة والقوارب، ستحتاج إلى [بيانات خطوط الكنتور العمق](../../plugins/nautical-charts.md#nautical-map-style)، والتي يمكن تمكينها وتعيينها في *تكوين الخريطة*.
:::

يمكن استخدام [نوع التوجيه المباشر إلى نقطة](./direct-to-point-routing.md) مع ملف تعريف القارب عندما ترغب في التنقل بقاربك في المياه المفتوحة دون اتباع أي مسار أو ممر مائي محدد. يتيح لك نوع التوجيه هذا تعيين نقطة وجهة وسيقوم OsmAnd بحساب مسار مباشر إلى تلك النقطة من موقعك الحالي. لا يأخذ هذا النوع من التوجيه في الاعتبار خصائص قاربك مثل السرعات الدنيا والقصوى، الارتفاع والعرض. لن يتم إعادة حساب مسارك في حالة الانحراف.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### التوجيه بخط مستقيم للقوارب {#straight-line-routing-for-boat}

يمكن استخدام [نوع التوجيه بخط مستقيم](./straight-line-routing) مع ملف تعريف القارب عندما ترغب في التنقل بقاربك في المياه المفتوحة ولكن تفضل اتباع خط مستقيم بدلاً من مسار منحني إلى نقطة وجهتك. يمكن أن يكون هذا مفيدًا عند التنقل إلى نقطة بعيدة، تكون مرئية في الأفق، على سبيل المثال.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في قسم *[إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وتعديل خيارات إعادة حساب المسار.

- في قسم *[التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [المكون الإضافي لتطوير OsmAnd](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات الملاحة ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يُستخدم هذا الإعداد على الطرق غير المعروفة بدون حدود للسرعة. هذا هو الحال غالبًا عند التنقل في مسار أو مسار عبر الإنترنت. يجب تعيينه وفقًا لمعلمات مركبتك.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: مايو 2025*