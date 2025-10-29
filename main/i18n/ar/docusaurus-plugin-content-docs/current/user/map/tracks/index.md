---
source-hash: 8451603f460c01b41bc40f56cd232e1cc6efc049123d01d861d14574636fb31b
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
يحتوي OsmAnd على العديد من الميزات القوية لعرض مسارات متنوعة على الخريطة. يمكن إنشاء المسارات كجزء من الملاحة، أو إنشاؤها عبر تخطيط مسار، أو استيرادها كمسارات GPX، أو تسجيلها عبر إضافة تسجيل الرحلات، أو تصفحها واختيارها من بيانات OpenStreetMap.


## أنواع المسارات {#types-of-tracks}

[المسارات (GPX)](#display-tracks-on-the-map) - رحلة مسجلة أو مخططة محفوظة [بتنسيق GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). يمكن استيراد هذا النوع من المسار من مصدر خارجي، أو إنشاؤه في التطبيق، أو تسجيله بواسطتك. يمكن أن يحتوي GPX على واحد من 3 أنواع مختلفة من البيانات، أو جميعها:

- مسار كخط (***هندسي***). يحتوي الملف على مصفوفة نقاط ```<trkpt>```، كل نقطة لها موقع ووقت وسرعة وارتفاع وسمات أخرى اختيارية. تُعرض هذه المسارات على الخريطة كخطوط متصلة.
- مسار كطريق (***مسار***). يحتوي الملف على مصفوفة نقاط ```<rtept>```، كل نقطة موصوفة كنقطة وسيطة في المسار. يعتمد كيفية توصيل النقاط داخل المسار على ما إذا كان يجب توصيلها كأجزاء صغيرة من المسار أو عبر خط مستقيم. تُعرض هذه المسارات على الخريطة كخطوط متقطعة.
- نقاط الطريق (***نقاط***). يحتوي الملف على نقاط ```<wpt>``` مع سماتها. تُعرض نقاط الطريق كنقاط دائرية على الخريطة. يمكنك النقر عليها للحصول على معلومات إضافية.

يمكن لـ OsmAnd إنشاء مسارات بـ1-3 تركيبات. ينشئ [تخطيط مسار](../../plan-route/create-route.md) مسارًا يحتوي على ***هندسي*** و***مسار***، وإذا قمت بحفظه كـ***مسار مبسط***، فسيتم الاحتفاظ بـ***الهندسي*** فقط. ينشئ [تسجيل المسار](../../plugins/trip-recording.md#new-track-recording) ***هندسي*** فقط، ولكن يمكنك أيضًا إضافة ***نقاط*** إليه عبر قائمة السياق.


## عرض المسارات على الخريطة {#display-tracks-on-the-map}

يمكنك إدارة رؤية المسارات عن طريق اختيار أي منها لعرضه أو إخفائه من عدة قوائم: [قائمة "أماكني"](#my-places)، و[قائمة "تخصيص الخريطة"](#configure-map)، و[قائمة سياق المسار](#track-context-menu). تتيح لك هذه المرونة التبديل بسرعة بين المسارات المختلفة، مما يضمن أن المسارات ذات الصلة فقط هي التي تظهر على خريطتك في أي وقت.

### تخصيص الخريطة {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![تخصيص مسارات الخريطة أندرويد](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![تخصيص مسارات الخريطة أندرويد](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![تخصيص مسارات الخريطة iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![تخصيص مسارات الخريطة iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

يمكّنك خيار *تخصيص الخريطة* من إدارة عرض جميع المسارات التي تم عرضها مؤخرًا بسرعة، مما يسمح لك بتبديل الرؤية لمجموعة من المسارات. يتبع فرز المسارات الترتيب الذي تم تكوينه في علامة التبويب *أماكني → المسارات*. يمكنك الوصول إلى [قائمة المسار](../../personal/tracks/manage-tracks.md#track-menu) عن طريق النقر المطول على عنصر المسار. بالإضافة إلى ذلك، في هذه القائمة، يمكنك تعديل مظهر عدة مسارات محددة في وقت واحد.

### أماكني {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

!["أماكني" مع المسارات في أندرويد](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → انقر نقرة طويلة على مسار GPX المختار → إظهار على الخريطة*

![قائمة السياق لمسار في iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

في [علامة تبويب أماكني *→* المسارات](../../personal/tracks/manage-tracks.md#manage-tracks) لعرض المسار على الخريطة، تحتاج إلى:

- *أندرويد* - انقر على *قائمة النقاط الثلاث* في الحقل الذي يحتوي على المسار المطلوب.
- *iOS* - انقر نقرة طويلة على المسار المطلوب في القائمة.


### قائمة سياق المسار {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نظرة عامة على قائمة سياق المسار أندرويد 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على قائمة سياق المسار iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

عند تحديد مسار على الخريطة أو فتح [قائمة سياق المسار](./track-context-menu.md) بعد تسجيل أو استيراد مسار، يمكنك التحكم في رؤيته على الخريطة. ما عليك سوى استخدام زري *إظهار* أو *إخفاء* لعرض المسار أو إزالته من عرض الخريطة.


## تحليل المسار على الخريطة {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *انقر على المسار → علامة تبويب المسار → <Translate android="true" ids="analyze_on_map"/>*  

![قائمة المسار تحليل على الخريطة أندرويد](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![قائمة المسار تحليل على الخريطة مسافة أندرويد](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *انقر على المسار → علامة تبويب المسار → <Translate ios="true" ids="analyze_on_map"/>*  

![قائمة المسار تحليل على الخريطة](@site/static/img/personal/tracks/track_analyze_ios.png)  ![قائمة المسار تحليل على الخريطة ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

توفر هذه الأداة تحليلاً مفصلاً لبيانات [المسار](../../map/tracks/track-context-menu.md#options) باستخدام الرسوم البيانية والخرائط.

- **بيانات الرسم البياني (المحور الصادي)** تعرض: *الارتفاع*، *الميل*، *السرعة*، [*بيانات المستشعرات الخارجية*](../../plugins/external-sensors.md)، ومجموعات تصل إلى خيارين إذا كانت موجودة في بيانات المسار.
- **بعد الرسم البياني (المحور السيني)** يمثل: *المسافة*، *الوقت*، و*الوقت من اليوم*.
- **تفاعل النقر/التمرير**. انقر على الرسم البياني لعرض معلومات حول نقطة معينة على المسار. يؤدي التمرير على الرسم البياني إلى إبراز الموقع المناسب على الخريطة وعرض التفاصيل في شريط المعلومات.
- **تسمية المسافة**. عند النقر أو التمرير على طول الرسم البياني، يعرض تلميح الأداة أيضًا المسافة الدقيقة على طول المسار. يتبع القيمة إعدادات وحدة الملف الشخصي الحالية (<Translate android="true" ids="km"/> أو <Translate android="true" ids="mile"/>). استخدمها لتقدير سريع لمدى بعيد نقطة عن بداية المسار، أو لحساب المسافة بين موضعين اثنين بمقارنة قيمهما.
- **التحجيم**. استخدم [إيماءة إصبعين](../../map/interact-with-map.md#gestures) لتكبير الرسم البياني لعرض أكثر تفصيلاً.


### تتبع موقعي {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة المسار تحليل على الخريطة 3 أندرويد](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![قائمة المسار تحليل على الخريطة 5 أندرويد](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المسار تحليل على الخريطة](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![قائمة المسار تحليل على الخريطة ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

انقر على زر [موقعي](../../map/interact-with-map.md#my-location-and-zoom) لمزامنة عرض الخريطة والرسم البياني مع موقعك.

- يظل **مقياس الرسم البياني** كما هو، وتكون **معلومات الشريط** ثابتة عند 1/4 إلى الجانب الأيسر.
- أثناء تحركك، **سينزلق الرسم البياني** من اليسار إلى اليمين، ويعرض المعلومات أمام مسارك.
- لا يتم عرض أي أدوات أخرى على هذه الشاشة.
- هذه الميزة مفيدة للمشي وركوب الدراجات أثناء التنقل على المسار.  


## مقالات ذات صلة {#related-articles}

- [مظهر المسار](./appearance.md)
- [قائمة سياق المسار](./track-context-menu.md)
- [الملاحة حسب المسار](../../navigation/setup/gpx-navigation.md)
- [المسارات على الخريطة](https://docs.osmand.net/blog/routes) مقالة مدونة
- [تخصيص الخريطة](../../map/configure-map-menu.md)  
- [مسارات GPX](../../personal/tracks/index.md)  
- [تخطيط مسار](../../plan-route/index.md)  
- [تسجيل الرحلات](../../plugins/trip-recording.md)