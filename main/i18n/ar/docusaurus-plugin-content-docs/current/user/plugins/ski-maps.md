---
source-hash: 75b343dc56914a3acab72cd3b0a8c476b5b8c888a2b3d0ebf1e06e1edbfdfd2f
sidebar_position: 13
title:  عرض خريطة التزلج
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

تُظهر إضافة عرض خريطة التزلج في OsmAnd المنحدرات الشهيرة والشعبية، ومناطق التزلج المعتمدة رسميًا، وخرائط مسارات معظم منتجعات التزلج. خرائط مسارات [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) هي مصدر البيانات لخرائط التزلج في OsmAnd. بفضل الجمع بين الخرائط المتجهة والخرائط النقطية، فإن خريطة التزلج في OsmAnd دقيقة للغاية وستكون مفيدة للمدربين والمتسلقين وعشاق الرياضات الشتوية.

خريطة التزلج في OsmAnd هي جزء من الخرائط المتجهة ولا تتطلب تنزيلات إضافية. يتم تعطيلها افتراضيًا. خريطة التزلج في OsmAnd هي إحدى [أنماط الخرائط](../map/vector-maps.md) التي توفر ميزات إضافية عن طريق إبراز بعض الكائنات وجعل البعض الآخر أقل وضوحًا.

يظهر أدناه ملفان شخصيان: أحدهما على اليسار للتزلج والآخر على اليمين للقيادة. يُبرز ملف التزلج المسارات والممرات الهوائية وألوان الشتاء وجميع كائنات الخريطة المفيدة للتنقل في منطقة التزلج.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![خرائط التزلج في أندرويد](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![لا توجد خرائط تزلج في أندرويد](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![خرائط التزلج في iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![لا توجد خرائط تزلج في iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يؤدي الإعداد التالي إلى ظهور خريطة التزلج في OsmAnd على الشاشة:

1. تمكين [إضافة عرض خريطة التزلج](../plugins/index.md#enable--disable).
2. تعيين نمط خريطة [الشتاء والتزلج](#set-winter-and-ski-map-style) للملف الشخصي المطلوب [profile](../personal/profiles.md).
3. إذا لزم الأمر، [اجمع الخرائط](#combine-maps).


### تعيين نمط خريطة الشتاء والتزلج {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_