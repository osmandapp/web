---
source-hash: 4555734ace3e7132cbe343a64b51b8a14b9f7d50262e566f5b87185e156e7f36
sidebar_position: 5
title:  Public Transport routing
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

تتيح لك ميزة التنقل بالمواصلات العامة في تطبيق OsmAnd تحديد المسارات باستخدام وسائل النقل العام، مما سيساعدك بالتأكيد على التنقل في "الغابة الخرسانية" بشكل أسرع.

تُؤخذ بيانات مسارات النقل العام من مشروع [OpenStreetMap](http://openstreetmap.org/). يستخدم OsmAnd [مخطط PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) للتنقل. يدعم OsmAnd مسارات OpenStreetMap التالية للتنقل: *حافلة*، *ترولي باص*، *تاكسي مشترك*، *قطار جبلي مائل*، *مترو أنفاق*، *قطار خفيف*، *قطار أحادي*، *قطار*، *ترام*، *عبّارة*. يتم تكوين السرعة الافتراضية لكل نوع من المركبات في [Routing xml](../../../technical/build-osmand/routing.md) وتستخدم للعثور على أسرع المسارات.

:::note
التنقل بالمواصلات العامة في مرحلة الاختبار. في الوقت الحالي، يمكنك بناء وعرض مسارك بدون وظيفة التنقل الكاملة.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

لبدء التنقل في المدينة بواسطة وسائل النقل العام، استخدم [زر التنقل](../../widgets/map-buttons.md#directions) على شاشة الخريطة أو حدد خيار التنقل في *القائمة الرئيسية*.  

**1.** تحتاج إلى اختيار *ملف تعريف التنقل بالمواصلات العامة*، ونقطتي البداية والوجهة.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** يقدم OsmAnd خيارات مسار مع أوقات المشي ومسارات النقل العام مع معلومات المسار: الوقت، المسافة، التحويل، والمسارات العامة. تحتاج إلى التمرير عبر شاشة التنقل لتحديد الخيار المطلوب.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** يمكنك عرض جميع اقتراحات المسارات الممكنة على الخريطة باستخدام زر *إظهار على الخريطة*. اسحب عبر الشاشات لعرض خيار المسار التالي.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** اضغط على زر "التفاصيل" لفتح وصف المسار المحدد مع جميع المحطات والتحويلات.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## البيانات والإرشادات {#data-and-guideline}

يستخدم OsmAnd مخطط نقل عام جديد، يسمى أيضًا Public Transport Version 2 (PTv2) لخوارزمية التنقل بالمواصلات العامة في OsmAnd.

- يمكنك التحقق من وسائل النقل العام الخاصة بك [هنا](http://tools.geofabrik.de/osmi/).
- يتوفر دليل بناء أو تعديل مسارات النقل العام على [مدونتنا](https://osmand.net/blog/guideline-pt).
- العرض التقديمي [2019: التنقل بالمواصلات العامة باستخدام OpenStreetMap بواسطة OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *آخر تحديث: يونيو 2024.*