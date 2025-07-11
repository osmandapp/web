---
source-hash: 7f81c110562bd27c6dfc6fe07b890ebf5cb1758a6fee93796173d681f752db77
sidebar_position: 6
title:  توجيه التزلج
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

:::note
توجيه التزلج وملف تعريف التزلج متاحان فقط عند تفعيل [مكون عرض خريطة التزلج الإضافي](../../plugins/ski-maps.md).
:::

يمكن أن يكون *توجيه التزلج* مفيدًا بشكل خاص للمتزلجين في المناطق النائية، ومتسلقي الجبال المتزلجين، وغيرهم من عشاق الرياضات الشتوية الذين يرغبون في استكشاف مناطق جديدة وتخطيط رحلاتهم مسبقًا. باستخدام *توجيه التزلج*، يمكن لمستخدمي OsmAnd تخطيط المسارات والتنقل بأمان أثناء الاستمتاع بجمال المناظر الطبيعية الشتوية.

يمكن تكوين *توجيه التزلج* وفقًا لاحتياجاتك في [قسم معلمات المسار](../guidance/navigation-settings.md#route-parameters) في إعدادات التنقل.

![خرائط المسارات - منحدرات التزلج](@site/static/img/navigation/routing/ski_routing_overview.png)


## معلمات المسار - التزلج {#route-parameters---ski}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف تعريف التزلج*. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

تسمح إعدادات *توجيه التزلج* للمستخدمين بتخطيط مساراتهم عن طريق تحديد مستوى الصعوبة المطلوب ونوع التضاريس التي يرغبون في استكشافها. هناك خيارات متنوعة للحركة الآمنة والمريحة والممتعة على المنحدرات أو أثناء التزلج الحر.

<Tabs groupId="operating-systems">

<TabItem value="android" label="أندرويد">

![إعدادات توجيه التزلج أندرويد 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![إعدادات توجيه التزلج أندرويد 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه التزلج iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| المعلمة | تسمح بالاستخدام للتوجيه | ملاحظة |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | مسار [جولة تزلج](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) موصى به أو منطقة يستخدمها العديد من المتزلجين بشكل عام خلال الموسم لغرض الصعود الاسكندنافي والنزول المنحدر في المناطق النائية. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | سيتم السماح بـ [مسارات أكثر صعوبة](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) للتوجيه. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> اختر أحد الخيارات للتزلج الحر. </summary>![خارج المسار أندرويد](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | سيتم تشغيل [مصاعد التزلج](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(أندرويد) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [الزلاجات](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) هي مركبات أصغر يتم سحبها بواسطة إنسان أو يتم دفعها بواسطة الجاذبية فقط. عند التمكين، سيتم استخدام [مسارات التزلج](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) لتوجيه التزلج |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![خارج المسار أندرويد](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## إعدادات التوجيه الأخرى {#other-routing-settings}

- يمكن لخوارزمية التوجيه أيضًا أن تأخذ في الاعتبار القيود المؤقتة المحددة في OpenStreetMap. يمكن القيام بذلك باستخدام خيار *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. لاحظ أنه في بعض الحالات، قد تكون المعلومات من OSM قديمة.

- في قسم [*إعادة حساب المسار*](../../navigation/guidance/navigation-settings.md#recalculate-route) من *معلمات المسار*، يمكنك تمكين وضبط خيارات إعادة حساب المسار.

- في قسم [*التطوير*](../guidance/navigation-settings.md#development-settings) من *معلمات المسار*، يمكنك تجربة ميزات توجيه جديدة قيد الاختبار حاليًا. لاحظ أن هذه الإعدادات متاحة فقط عند تمكين [مكون OsmAnd الإضافي للتطوير](../../plugins/development.md).

- يوجد إعداد *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* في إصدار *iOS* من OsmAnd في *إعدادات التنقل ← معلمات المسار* (بالنسبة لـ *Android*، في *معلمات المركبة ← [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). يستخدم هذا الإعداد على الطرق غير المعروفة بدون حدود للسرعة. هذا هو الحال غالبًا عند التنقل في مسار أو مسار عبر الإنترنت. يجب ضبطه وفقًا لمعلمات مركبتك.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. سيساعدك التكوين الصحيح للإعدادات على تجنب المشاكل عند إنشاء مسار. يمكنك تحديد المسار الأنسب اعتمادًا على نوع المركبة وقيود الطريق، بالإضافة إلى حساب وقت السفر.

> *آخر تحديث: يونيو 2024*