---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  توجيه النقل العام
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

تتيح لك ميزة الملاحة عبر وسائل النقل العام في تطبيق OsmAnd تحديد المسارات باستخدام وسائل النقل العام، مما سيساعدك بالتأكيد على التنقل في "الغابة الخرسانية" بشكل أسرع.

تُؤخذ البيانات المتعلقة بمسارات النقل العام من مشروع [خريطة الشارع المفتوحة](http://openstreetmap.org/). يستخدم OsmAnd [مخطط PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) للملاحة. يدعم OsmAnd مسارات خريطة الشارع المفتوحة التالية للملاحة: *bus*، *trolleybus*، *share_taxi*، *funicular*، *subway*، *light_rail*، *monorail*، *train*، *tram*، *ferry*. يتم تكوين السرعة الافتراضية لكل نوع من المركبات في [ملف Routing xml](../../../technical/build-osmand/routing.md) ويُستخدم للعثور على أسرع المسارات.

:::note
توجيه النقل العام في مرحلة الاختبار. في الوقت الحالي، يمكنك إنشاء مسارك وعرضه بدون وظيفة الملاحة الكاملة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ملاحة النقل العام على أندرويد](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![ملاحة النقل العام على iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

لبدء الملاحة في جميع أنحاء المدينة بواسطة وسائل النقل العام، استخدم [زر الملاحة](../../widgets/map-buttons.md#directions) على شاشة الخريطة أو حدد خيار الملاحة في *القائمة الرئيسية*.  

**١.** تحتاج إلى اختيار *ملف تعريف ملاحة النقل العام*، ونقاط البداية والوجهة.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسارات ملاحة النقل العام على أندرويد](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![مسارات ملاحة النقل العام على iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**٢.** يقدم OsmAnd خيارات للمسارات مع أوقات المشي ومسارات النقل العام مع معلومات المسار: الوقت، والمسافة، والتغيير، والمسارات العامة. تحتاج إلى التمرير عبر شاشة الملاحة لتحديد الخيار المطلوب.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![طريق ملاحة النقل العام على أندرويد](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![طريق ملاحة النقل العام على iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**٣.** يمكنك عرض جميع اقتراحات المسارات الممكنة على الخريطة باستخدام زر *عرض على الخريطة*. اسحب عبر الشاشات لعرض خيار المسار التالي.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل ملاحة النقل العام على أندرويد](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![تفاصيل ملاحة النقل العام على iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**٤.** انقر على زر "التفاصيل" لفتح وصف للمسار المحدد مع جميع المحطات والتغييرات.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محطات ملاحة النقل العام على أندرويد](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة محطات ملاحة النقل العام على iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## أنواع النقل العام {#public-transport-types}

يمكنك البحث عن مسارات النقل العام المُرتبة جيدًا وفقًا لتفضيلاتك واختيار:

- تجنب الحافلات (وحافلات الكهرباء)
- تجنب المترو
- تجنب القطارات
- تجنب الترام
- تجنب العبارات
- تجنب سيارات الأجرة المشتركة

افتراضيًا، يبحث OsmAnd عن مسارات تشمل جميع أنواع النقل العام المدعومة.

## مسارات بديلة {#alternative-routes}

المسارات البديلة هي أقسام من مسار تخدمها خدمات نقل مختلفة وتشترك في نفس المسار والمحطات.

قد تستخدم خدمات النقل المختلفة أرقام مسارات (refs) مختلفة أو حتى أنواع نقل مختلفة.

يعرض واجهة المستخدم المسارات البديلة كشارات ملونة مع refs الخاصة بها.

## الأداء والنتائج {#performance-and-results}

**ملف تعريف النقل العام -> الإعدادات -> إعدادات الملاحة -> معلمات المسار**

١. **الحد الأقصى لعدد تغييرات النقل**.

يعتمد الأداء واستهلاك الذاكرة لراوتر النقل العام على عمق البحث.

المعلمة الأكثر أهمية التي تؤثر على هذا العمق هي **الحد الأقصى لعدد تغييرات النقل**.

نستخدم **٢** كقيمة افتراضية، والتي تبدو مثالية لشبكات النقل العام الحديثة.

إذا واجهت أداءً منخفضًا أو أخطاء نفاد الذاكرة، جرب تقليل هذه القيمة.

إذا كنت في مدينة صغيرة أو تسافر مسارات قصيرة، قد تعمل قيمة **١** بشكل أفضل.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## البيانات والإرشادات {#data-and-guideline}

يستخدم OsmAnd مخططًا جديدًا للنقل العام، يُطلق عليه أيضًا اسم Public Transport Version 2 (PTv2) لخوارزمية ملاحة النقل العام في OsmAnd.

- يمكنك التحقق من وسائل النقل العام الخاصة بك [هنا](http://tools.geofabrik.de/osmi/).
- يتوفر دليل لبناء أو تعديل مسارات النقل العام على [مدونتنا](https://osmand.net/blog/guideline-pt).
- العرض التقديمي [٢٠١٩: ملاحة النقل العام باستخدام خريطة الشارع المفتوحة بواسطة OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).