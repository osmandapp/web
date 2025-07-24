---
source-hash: 666034567fd284a4497490ffa9885eebc102c1d37823e71a52d03c189944eb25
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

يتيح لك التنقل عبر وسائل النقل العام في تطبيق OsmAnd تحديد المسارات باستخدام وسائل النقل العام، مما سيساعدك بالتأكيد على التنقل في "الغابة الخرسانية" بشكل أسرع.

تُؤخذ بيانات مسارات النقل العام من مشروع [OpenStreetMap](http://openstreetmap.org/). يستخدم OsmAnd [مخطط PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) للتنقل. يدعم OsmAnd مسارات OpenStreetMap التالية للتنقل: *حافلة*، *ترولي باص*، *تاكسي مشترك*، *قطار جبلي مائل*، *مترو أنفاق*، *قطار خفيف*، *قطار أحادي*، *قطار*، *ترام*، *عبّارة*. يتم تكوين السرعة الافتراضية لكل نوع من المركبات في [توجيه xml](../../../technical/build-osmand/routing.md) وتُستخدم للعثور على أسرع المسارات.

:::note
توجيه النقل العام في مرحلة الاختبار. في الوقت الحالي، يمكنك بناء وعرض مسارك دون وظيفة التنقل الكاملة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![توجيه النقل العام أندرويد](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![توجيه النقل العام iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

لبدء التنقل في المدينة بواسطة وسائل النقل العام، استخدم [زر التنقل](../../widgets/map-buttons.md#directions) على شاشة الخريطة أو حدد خيار التنقل في *القائمة الرئيسية*.  

**1.** تحتاج إلى اختيار *ملف تعريف توجيه النقل العام*، ونقطتي البداية والوجهة.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسارات توجيه النقل العام أندرويد](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![مسارات توجيه النقل العام iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** يقدم OsmAnd خيارات مسار مع أوقات المشي ومسارات النقل العام مع معلومات المسار: الوقت، المسافة، التحويل، والمسارات العامة. تحتاج إلى التمرير عبر شاشة التنقل لتحديد الخيار المطلوب.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![طريقة توجيه النقل العام أندرويد](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![طريقة توجيه النقل العام iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** يمكنك عرض جميع اقتراحات المسارات الممكنة على الخريطة باستخدام زر *إظهار على الخريطة*. اسحب عبر الشاشات لعرض خيار المسار التالي.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تفاصيل توجيه النقل العام أندرويد](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![تفاصيل توجيه النقل العام iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** انقر على زر "التفاصيل" لفتح وصف المسار المحدد مع جميع المحطات والتحويلات.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة محطات توجيه النقل العام أندرويد](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![قائمة محطات توجيه النقل العام iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## البيانات والإرشادات {#data-and-guideline}

يستخدم OsmAnd مخططًا جديدًا للنقل العام، يُسمى أيضًا الإصدار الثاني من النقل العام (PTv2) لخوارزمية توجيه النقل العام في OsmAnd.

- يمكنك التحقق من وسائل النقل العام الخاصة بك [هنا](http://tools.geofabrik.de/osmi/).
- يتوفر دليل لبناء أو تعديل مسارات النقل العام على [مدونتنا](https://osmand.net/blog/guideline-pt).
- العرض التقديمي [2019: التنقل عبر النقل العام باستخدام OpenStreetMap بواسطة OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *آخر تحديث: يونيو 2024.*