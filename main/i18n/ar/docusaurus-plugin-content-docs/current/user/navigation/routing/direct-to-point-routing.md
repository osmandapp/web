---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  التوجيه المباشر إلى نقطة (قارب)
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

يُعد التوجيه المباشر إلى نقطة في OsmAnd ميزة مفيدة تتيح لك الانتقال مباشرة إلى نقطة معينة على الخريطة دون الحاجة إلى اتباع مسار محدد مسبقًا أو شبكة طرق. يمكن استخدام هذه الميزة من قبل ربابنة القوارب، وعشاق الأنشطة الخارجية، أو خدمات الطوارئ أثناء عمليات الإنقاذ. بشكل عام، يعد التوجيه المباشر إلى نقطة ميزة مرنة ومتعددة الاستخدامات يمكن استخدامها في مجموعة متنوعة من المواقف التي قد لا تكون فيها طرق التوجيه التقليدية مناسبة أو فعالة.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

النقطة على الخط هي نقطة افتراضية تكون المسافة منها إلى الوجهة هي نفس المسافة من موقعك الحالي، ولكنها ليست إسقاطًا لموقعك الحالي على الخط. هذا يسهل قياس التقدم، ويمكنك استخدام أداة القياس للحصول على المسافة الصحيحة.

## معلمات المسار - التوجيه المباشر إلى نقطة {#route-parameters---direct-to-point}

نوع التوجيه *المباشر إلى نقطة* غير مرتبط بأي ملف تعريف ويمكن استخدامه مع ملفات تعريف مختلفة.
لا يأخذ هذا النوع من التوجيه في الاعتبار أي عقبات أو حواجز قد تكون موجودة في التضاريس، مثل الجبال أو الأنهار أو الغابات الكثيفة. كما أنه لا يوفر أي معلومات حول جودة التضاريس أو مستوى صعوبة المسار أو أي عوامل أخرى ذات صلة قد تؤثر على سلامة أو جدوى المسار (قسم [تفاصيل المسار](../setup/route-details.md) فارغ).

:::note
عند استخدام أنواع الملاحة "التوجيه المباشر إلى نقطة" و"القارب"، ستحتاج إلى [بيانات خطوط تساوي العمق](../../plugins/nautical-charts.md#nautical-map-style)، والتي يمكن تمكينها وتعيينها في *تكوين الخريطة*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> ← أي ملف تعريف ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-to-point routing settings](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> ← أي ملف تعريف ← <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-to-point routing settings iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>