---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title:  أماكني
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## نظرة عامة {#overview}

**أماكني** هو المركز الرئيسي في تطبيق OsmAnd لإدارة وتخصيص جميع البيانات الشخصية. يمكنك استخدام هذا القسم لتنظيم [النقاط المفضلة](#favorites) التي تم تمييزها على أنها مهمة أو يتم زيارتها بشكل متكرر. تتيح علامة التبويب [المسارات](#tracks) عرض ملفات GPX واستيرادها وتسجيلها وإنشائها لمساعدتك في الاحتفاظ بسجل مفصل لمساراتك ورحلاتك. يمكنك أيضًا إدارة [تعديلات OpenStreetMap](#openstreetmap-edits) الخاصة بك، مما يسهل المساهمة في تحسينات الخريطة وتحديثاتها. يتيح ملحق [الملاحظات الصوتية/المرئية](#audiovideo-notes) والأدوات المصغرة لمستخدمي أندرويد إنشاء وحفظ ملاحظات الوسائط المتعددة المتعلقة بمواقع محددة، مما يضيف سياقًا لرحلاتهم. على iOS، يوفر أماكني أيضًا إمكانية الوصول إلى [أدلة السفر](#travel-guides) المحفوظة، مما يتيح لك تنظيم محتوى السفر المحفوظ وفتحه بسرعة.

## قائمة أماكني {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![أماكني أندرويد](@site/static/img/personal/my_places_android_new.png) ![قائمة أماكني أندرويد](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![أماكني iOS](@site/static/img/personal/my_places_ios_2.png)  ![قائمة أماكني iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

يتم تنظيم أماكني حسب الفئات. حدد علامة تبويب لإدارة البيانات المقابلة.

**ملاحظة:** يمكن نقل جميع البيانات المخزنة في قائمة *أماكني* باستخدام تنسيق خاص `.osf` من خلال التطبيقات الموجودة على جهازك. تبسط هذه العملية حفظ البيانات ونقلها بين الأجهزة وتسمح لك بمشاركتها مع مستخدمي OsmAnd الآخرين. 

### المفضلة {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![قائمة المفضلة أندرويد](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![قائمة المفضلة iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

تتيح لك **المفضلة** وضع إشارة مرجعية على المواقع المهمة أو التي تتم زيارتها بشكل متكرر. يتم تنظيم هذه النقاط المفضلة في مجلدات ويمكن تخصيصها بألوان وأشكال وأيقونات مختلفة. يمكنك الانتقال بسرعة إلى أي مكان مفضل من خلال قائمة **أماكني** دون الحاجة إلى البحث عنه بشكل متكرر.

للحصول على إرشادات كاملة، راجع مقالة [المفضلة](../personal/favorites.md).

### المسارات {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![أماكني مع المسارات في iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

توفر **المسارات** أدوات قوية لتسجيل وإنشاء وإدارة المسارات داخل OsmAnd. يمكن استخدامها في [الملاحة](../navigation/setup/gpx-navigation.md)، أو [تسجيل الرحلة](../plugins/trip-recording.md)، أو [دمج](../personal/tracks/manage-tracks.md#import) ملفات GPX الخارجية.

للحصول على إرشادات شاملة، راجع مقالة [إدارة المسارات](../personal/tracks/manage-tracks.md).

### تعديلات OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![مشاركة](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![مشاركة](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

تتيح لك ميزة **تعديلات OpenStreetMap** في OsmAnd المساهمة في مجتمع رسم الخرائط العالمي عن طريق إضافة بيانات الخريطة أو تعديلها أو التعليق عليها.

راجع [ملحق تحرير OSM](../plugins/osm-editing.md) للحصول على إرشادات خطوة بخطوة.

### الملاحظات الصوتية/المرئية {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![قائمة أماكني لملحق الصوت/الفيديو ثلاثة إجراءات](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

يتيح لك **ملحق الملاحظات الصوتية/المرئية** إنشاء ملاحظات وسائط متعددة مرتبطة بمواقع محددة على الخريطة. يتم تخزين هذه الملاحظات في **أماكني** ضمن **تبويب الملاحظات الصوتية/المرئية**.

لمزيد من المعلومات، قم بزيارة صفحة [ملحق الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md).

### أدلة السفر (iOS) {#travel-guides}

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![أدلة السفر iOS](@site/static/img/plan-route/travel_guides_ios.webp)

يحتوي قسم **السفر** على أدلة السفر ومقالاتها المحفوظة للوصول دون اتصال بالإنترنت. يمكنك فتح محتوى السفر المحفوظ وتنظيمه وإدارته بسرعة من أماكني. يظهر قسم السفر فقط عند حفظ أكثر من دليل سفر واحد.

لمزيد من المعلومات التفصيلية، راجع مقالة [أدلة السفر](../plan-route/travel-guides.md).

## مقالات ذات صلة {#related-articles}

- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [المفضلة](../personal/favorites.md)
- [تحرير OpenStreetMap](../plugins/osm-editing.md)
- [الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md)
- [أدلة السفر](../plan-route/travel-guides.md)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)