---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
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
لا يتوفر توجيه التزلج وملف تعريف التزلج إلا عند تفعيل [ملحق عرض خريطة التزلج](../../plugins/ski-maps.md).
:::

يمكن أن يكون *توجيه التزلج* مفيدًا بشكل خاص للمتزلجين في المناطق النائية، ومتسلقي الجبال بالزلاجات، وغيرهم من عشاق الرياضات الشتوية الذين يرغبون في استكشاف مناطق جديدة وتخطيط رحلاتهم مسبقًا. مع *توجيه التزلج*، يمكن لمستخدمي OsmAnd تخطيط المسارات والتنقل بأمان أثناء الاستمتاع بجمال المناظر الطبيعية الشتوية.

يمكن تكوين *توجيه التزلج* وفقًا لاحتياجاتك في قسم [معلمات المسار](../guidance/navigation-settings.md#route-parameters) من إعدادات الملاحة.

![مسارات الخريطة - منحدرات التزلج](@site/static/img/navigation/routing/ski_routing_overview.png)


## معلمات المسار - التزلج {#route-parameters---ski}

:::note
بشكل افتراضي، يتم إلغاء تنشيط *ملف تعريف التزلج*. لاستخدام هذا الملف الشخصي للتوجيه، تحتاج إلى تشغيله في *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

تسمح إعدادات *توجيه التزلج* للمستخدمين بتخطيط مساراتهم عن طريق تحديد مستوى الصعوبة المطلوب ونوع التضاريس التي يرغبون في استكشافها. هناك خيارات متنوعة للحركة الآمنة والمريحة والممتعة على المنحدرات أو أثناء التزلج الحر.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![إعدادات توجيه التزلج أندرويد 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![إعدادات توجيه التزلج أندرويد 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إعدادات توجيه التزلج iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| المعلمة | يسمح بالاستخدام للتوجيه | ملاحظة |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | [طريق جولة تزلج](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) موصى به أو منطقة يستخدمها العديد من المتزلجين بشكل عام خلال الموسم لغرض الصعود الشمالي والنزول على المنحدرات في المناطق النائية. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | سيتم السماح [بمسارات أكثر صعوبة](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) للتوجيه. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> اختر أحد الخيارات للتزلج الحر.  </summary>![خارج المنحدر أندرويد](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | سيتم تشغيل استخدام [مصاعد التزلج](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts). |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [الزلاجات](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) هي مركبات أصغر يجرها إنسان أو تدفعها الجاذبية فقط. عند التمكين، سيتم استخدام [منحدرات التزلج بالزلاجات](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) لتوجيه التزلج. |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![خارج المنحدر أندرويد](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |