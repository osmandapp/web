---
source-hash: f48138cc59c4ee27ce642e063d856f276b2f56ba4cb068db2cb6e337b797c4c1
title:  المسارات
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## نظرة عامة {#overview}

يحتوي تطبيق OsmAnd على العديد من الميزات القوية لعرض المسارات المختلفة على الخريطة. يمكن إنشاء المسارات كجزء من التنقل، أو إنشاؤها عبر "تخطيط مسار"، أو استيرادها كمسارات GPX، أو تسجيلها عبر إضافة "تسجيل الرحلة"، أو تصفحها واختيارها من بيانات OpenStreetMap.


## أنواع المسارات {#types-of-tracks}

[المسارات (GPX)](#display-tracks-on-the-map) - رحلة مسجلة أو مخططة محفوظة بتنسيق [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). يمكن استيراد هذا النوع من المسارات من مصدر خارجي، أو إنشاؤه في التطبيق، أو تسجيله بواسطتك. يمكن أن يحتوي GPX على واحد من 3 أنواع مختلفة من البيانات، أو جميعها:

- المسار كخط (***هندسة***). يحتوي الملف على مصفوفة نقاط ```<trkpt>```، تحتوي كل نقطة على الموقع والوقت الاختياري والسرعة والارتفاع والسمات الأخرى. يتم عرض هذه المسارات على الخريطة كخطوط صلبة.
- المسار كطريق (***طريق***). يحتوي الملف على مصفوفة نقاط ```<rtept>```، توصف كل نقطة كنقطة وسيطة في الطريق. يعتمد ذلك على كيفية ربط النقاط داخل الطريق، إما كقطاعات طريق صغيرة أو عبر خط مستقيم. يتم عرض هذه المسارات على الخريطة كخطوط متقطعة.
- نقاط الطريق (***نقاط***). يحتوي الملف على نقاط ```<wpt>``` مع سمات. يتم عرض نقاط الطريق كنقاط دائرية على الخريطة. يمكنك النقر عليها للحصول على معلومات إضافية.

يمكن لتطبيق OsmAnd إنشاء مسارات بتركيبات 1-3. [تخطيط مسار](../../plan-route/create-route.md) ينشئ مسارًا بـ ***هندسة*** و***طريق***، إذا قمت بحفظه كـ ***مسار مبسط***، فسيتم الاحتفاظ بـ ***الهندسة*** فقط. [تسجيل مسار](../../plugins/trip-recording.md#new-track-recording) ينشئ ***هندسة*** فقط، ولكن يمكنك أيضًا إضافة ***نقاط*** إليه عبر قائمة السياق.


## عرض المسارات على الخريطة {#display-tracks-on-the-map}

يمكنك إدارة رؤية المسار عن طريق اختيار أي منها لعرضه أو إخفائه من عدة قوائم: [قائمة "أماكني"](#my-places)، و[قائمة "تكوين الخريطة"](#configure-map)، و[قائمة سياق المسار](#track-context-menu). تتيح لك هذه المرونة التبديل بسرعة بين المسارات المختلفة، مما يضمن أن المسارات ذات الصلة فقط هي المرئية على خريطتك في أي وقت.

### تكوين الخريطة {#configure-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![تكوين مسارات الخريطة أندرويد](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![تكوين مسارات الخريطة أندرويد](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![تكوين مسارات الخريطة iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![تكوين مسارات الخريطة iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

يتيح لك خيار *تكوين الخريطة* إدارة عرض جميع المسارات المعروضة مؤخرًا بسرعة، مما يتيح لك تبديل الرؤية لمجموعة من المسارات. يتبع ترتيب المسارات الترتيب الذي تم تكوينه في علامة التبويب *أماكني ← المسارات*. يمكنك الوصول إلى [قائمة المسار](../../personal/tracks/manage-tracks.md#track-menu) عن طريق النقر المطول على عنصر المسار. بالإضافة إلى ذلك، في هذه القائمة، يمكنك تعديل مظهر العديد من المسارات المحددة في وقت واحد.

### أماكني {#my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> ← &#8942; ← <Translate android="true" ids="shared_string_show_on_map"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> ← انقر مطولاً على مسار GPX المختار ← إظهار على الخريطة*

![قائمة السياق للمسار في iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

في [علامة التبويب "أماكني" *←* "المسارات"](../../personal/tracks/manage-tracks.md#manage-tracks) لعرض المسار على الخريطة، تحتاج إلى:

- *أندرويد* - انقر على *قائمة النقاط الثلاث* في الحقل مع المسار المطلوب.
- *iOS* - انقر مطولاً على المسار المطلوب في القائمة.


### قائمة سياق المسار {#track-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![نظرة عامة على قائمة سياق المسار أندرويد 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على قائمة سياق المسار iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

عند تحديد مسار على الخريطة أو فتح [قائمة سياق المسار](./track-context-menu.md) بعد تسجيل أو استيراد مسار، يمكنك التحكم في رؤيته على الخريطة. ما عليك سوى استخدام زري *إظهار* أو *إخفاء* لعرض المسار أو إزالته من عرض الخريطة.


## تحليل المسار على الخريطة {#analyze-track-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

انتقل إلى: *انقر على المسار ← علامة تبويب المسار ← <Translate android="true" ids="analyze_on_map"/>*  

![تحليل قائمة المسار على الخريطة أندرويد](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![تحليل قائمة المسار على الخريطة المسافة أندرويد](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *انقر على المسار ← علامة تبويب المسار ← <Translate ios="true" ids="analyze_on_map"/>*  

![تحليل قائمة المسار على الخريطة](@site/static/img/personal/tracks/track_analyze_ios.png)  ![تحليل قائمة المسار على الخريطة ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

توفر هذه الأداة تحليلاً مفصلاً لبيانات [المسار](../../map/tracks/track-context-menu.md#options) باستخدام الرسوم البيانية والخرائط.

- تعرض **بيانات الرسم البياني (المحور Y)**: *الارتفاع*، *الميل*، *السرعة*، [*بيانات المستشعر الخارجي*](../../plugins/external-sensors.md)، ومجموعات تصل إلى خيارين إذا كانت موجودة في بيانات المسار.
- يمثل **بعد الرسم البياني (المحور X)**: *المسافة*، *الوقت*، و*وقت اليوم*.
- **التفاعل بالنقر/التمرير**. انقر على رسم بياني لعرض معلومات حول نقطة معينة على المسار. يؤدي التمرير على الرسم البياني إلى تمييز الموقع المناسب على الخريطة وعرض التفاصيل في شريط المعلومات.
- **التحجيم**. استخدم [إيماءة الإصبعين](../../map/interact-with-map.md#gestures) لتغيير حجم الرسم البياني لعرض أكثر تفصيلاً.


### اتبع موقعي {#follow-my-location}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![تحليل قائمة المسار على الخريطة 3 أندرويد](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![تحليل قائمة المسار على الخريطة 5 أندرويد](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحليل قائمة المسار على الخريطة](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![تحليل قائمة المسار على الخريطة ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

انقر على زر [موقعي](../../map/interact-with-map.md#my-location-and-zoom) لمزامنة عرض الخريطة والرسم البياني مع موقعك.

- يظل **مقياس الرسم البياني** كما هو، ويتم تثبيت **معلومات الشريط** 1/4 إلى الجانب الأيسر.
- أثناء تحركك، **سينزلق الرسم البياني** من اليسار إلى اليمين، ويعرض معلومات تسبق مسارك.
- لا يتم عرض أي أدوات أخرى على هذه الشاشة.
- هذه الميزة مفيدة للمشي لمسافات طويلة وركوب الدراجات أثناء التنقل في المسار.  


## مقالات ذات صلة {#related-articles}

- [مظهر المسار](./appearance.md)
- [قائمة سياق المسار](./track-context-menu.md)
- [التنقل بالمسار](../../navigation/setup/gpx-navigation.md)
- [مقالة مدونة المسارات على الخريطة](https://docs.osmand.net/blog/routes)
- [تكوين الخريطة](../../map/configure-map-menu.md)  
- [مسارات GPX](../../personal/tracks/index.md)  
- [تخطيط المسار](../../plan-route/index.md)  
- [تسجيل الرحلة](../../plugins/trip-recording.md)

> *آخر تحديث: نوفمبر 2024*