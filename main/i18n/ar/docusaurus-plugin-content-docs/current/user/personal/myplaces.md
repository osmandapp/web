---
source-hash: 988210732638f1fe31705172188e1b0f353988d14be005a73c33e3c309a5021a
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


<InfoIncompleteArticle/>

## نظرة عامة {#overview}

**أماكني** هو المحور المركزي في تطبيق OsmAnd لإدارة وتخصيص جميع البيانات الشخصية. يمكنك استخدام هذا القسم لتنظيم [النقاط المفضلة](#favorites) التي تم وضع علامة عليها كمهمة أو يتم زيارتها بشكل متكرر. تتيح لك علامة التبويب [المسارات](#tracks) عرض ملفات GPX واستيرادها وتسجيلها وإنشائها لمساعدتك في الاحتفاظ بسجل مفصل لمساراتك ورحلاتك. يمكنك أيضًا إدارة [تعديلات OpenStreetMap](#openstreetmap-edits)، مما يسهل المساهمة في تحسينات وتحديثات الخريطة. تتيح المكونات الإضافية والأدوات المصغرة [ملاحظات الصوت / الفيديو](#audiovideo-notes) لمستخدمي Android إنشاء وحفظ ملاحظات الوسائط المتعددة المتعلقة بمواقع محددة، مما يضيف سياقًا لرحلاتهم.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu"/> ← أماكني*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu"/> ← أماكني*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***استيراد وتصدير البيانات***](../personal/import-export.md):

    يمكن نقل جميع البيانات المخزنة في قائمة *أماكني* باستخدام تنسيق `.osf` خاص عبر التطبيقات على جهازك. تبسط هذه العملية حفظ ونقل البيانات بين الأجهزة وتتيح لك مشاركتها مع مستخدمي OsmAnd الآخرين.

    **انتقل إلى** قسم *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* وحدد ما إذا كنت تريد تصدير البيانات أو استيرادها. إذا حددت *تصدير*، فستحتاج إلى توسيع *مجموعة أماكني* وتحديد البيانات المطلوبة.

- [***الخرائط والموارد***](../personal/maps-resources.md):

    يوفر عنصر قائمة *الخرائط والموارد* *القائمة الرئيسية* لتطبيق OsmAnd الوصول إلى إدارة البيانات من قسم *أماكني*. تعرض علامة التبويب [*المحلية*](../personal/maps-resources.md#local) مقدار المساحة التي تشغلها جميع بيانات OsmAnd الموجودة على جهازك، وقسم *أماكني* على وجه الخصوص. يمكنك استخدامه للحصول على معلومات مفصلة حول بياناتك والوصول إلى إدارتها. يمكن أن يحتوي القسم فقط على عناصر تم تنزيل البيانات لها.

    **انتقل إلى** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. تحقق من بياناتك وقم بإدارتها.


## المفضلة {#favorites}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

تتيح لك **المفضلة** وضع إشارة مرجعية على المواقع المهمة أو التي يتم زيارتها بشكل متكرر. يتم تنظيم هذه النقاط المفضلة في مجلدات ويمكن تخصيصها بألوان وأشكال وأيقونات مختلفة. يمكنك التنقل بسرعة إلى أي مكان مفضل من خلال قائمة **أماكني** دون الحاجة إلى البحث عنه بشكل متكرر.


1. ***أزرار الإجراءات***. تتيح لك *أزرار الإجراءات* في أسفل شاشة أماكني إدارة قائمة المجلدات التي تحتوي على مفضلاتك:

    - **استيراد** (زر *إضافة*) — يتيح لك استيراد ملفات *favorite.gpx* من تخزين جهازك.

    - **تصدير** — احفظ نقاطك المفضلة كملف *favorites.gpx* للاستخدام الخارجي أو النسخ الاحتياطي.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android فقط*) — يمكنك إضافة أي نقطة مفضلة أو القائمة الكاملة للنقاط المفضلة في مجلد إلى [قائمة علامات الخريطة](../personal/markers.md).

    - **حذف** (*على iOS، يوجد هذا الخيار في قائمة التعديل*) — يحذف النقاط المفضلة واحدة تلو الأخرى أو المجلدات المفضلة المحددة وجميع النقاط الموجودة فيها.

2. ***قائمة ثلاث نقاط*** (*Android*) و***الضغط المطول*** (*iOS*). استخدم قائمة *ثلاث نقاط* بجانب كل مجلد أو *الضغط المطول* على المجلد لإدارة مجموعات المفضلة:

    <Tabs groupId="operating-systems" queryString="operating-systems">

    <TabItem value="android" label="أندرويد">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — استخدم هذا الخيار لتغيير اسم المجلد المحدد.

    - **<Translate android="true" ids="change_default_appearance"/>** — خصص كيفية ظهور النقاط المفضلة في المجلد على الخريطة عن طريق تغيير أيقوناتها أو ألوانها أو تسمياتها.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** أو **إخفاء على الخريطة** — قم بتبديل هذا الخيار لعرض أو إخفاء النقاط المفضلة من المجلد على الخريطة.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** أو **إزالة من علامات الخريطة** (*Android فقط*) — أضف جميع النقاط المفضلة من المجلد إلى *قائمة علامات الخريطة* أو أزلها حسب الحاجة للرجوع إليها بسهولة.

    - **<Translate android="true" ids="shared_string_share"/>** — شارك النقاط المفضلة في المجلد عن طريق تصديرها كملف *Favorites.gpx*، مما يسهل نقل بياناتك أو نسخها احتياطيًا.

    - **<Translate android="true" ids="shared_string_delete"/>** — احذف مجلد المفضلة المحدد وجميع النقاط الموجودة فيه بشكل دائم.

للحصول على تعليمات أكثر تفصيلاً، ارجع إلى مقالة [المفضلة](../personal/favorites.md).


## المسارات {#tracks}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> علامة التبويب*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة التبويب*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

توفر **المسارات** أدوات قوية لتسجيل وإنشاء وإدارة المسارات داخل OsmAnd. يمكن استخدامها [للتنقل](../navigation/setup/gpx-navigation.md)، [تسجيل الرحلات](../plugins/trip-recording.md)، أو [دمج](../personal/tracks/manage-tracks.md#import) ملفات GPX الخارجية.

- **علامة تبويب المسارات** — يتم عرض جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها تلقائيًا في مجلد *أماكني* في علامة تبويب *المسارات*. يتم تنظيمها حسب المجلد أو عرضها في قائمة أسفلها.

- **إنشاء مسار** — ابدأ التسجيل باستخدام **علامة تبويب المسارات** أو [المكون الإضافي لتسجيل الرحلات](../plugins/trip-recording.md).

- **عرض وتعديل** — الوصول إلى قائمة المسارات من خلال *أماكني* وإدارتها باستخدام *قائمة ثلاث نقاط* [للمجلدات](../personal/tracks/manage-tracks.md#track-folder) أو قائمة [المسار الواحد](../personal/tracks/manage-tracks.md#single-track-menu).

- **إدارة** — استخدم أدوات [التصفية](../personal/tracks/smart-folder.md#filter) و[المجلد الذكي](../personal/tracks/smart-folder.md#smart-folder) لتنظيم المسارات بناءً على معلمات محددة.

- **المظهر والتحليل** — [تخصيص](../map/tracks/appearance.md) النمط المرئي للمسارات و[تحليلها](../map/tracks/index.md#analyze-track-on-map) باستخدام أداة [تخطيط مسار](../plan-route/create-route.md) في OsmAnd.

للحصول على إرشادات شاملة، راجع مقالة [إدارة المسارات](../personal/tracks/manage-tracks.md).


## تعديلات OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

تتيح لك ميزة **تعديلات OpenStreetMap** في OsmAnd المساهمة في مجتمع رسم الخرائط العالمي عن طريق إضافة بيانات الخريطة أو تعديلها أو التعليق عليها.

1. ***أزرار الإجراءات***. يمكنك استخدام *أزرار الإجراءات* على شاشة أماكني لإدارة قائمة ملاحظاتك:

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **تحميل الملفات إلى OSM** — أرسل ملاحظاتك وبياناتك إلى OpenStreetMap للمساهمة في المجتمع.

    - **تصدير** (*Android فقط*) — احفظ ملاحظاتك ونقاط الاهتمام كملفات للاستخدام الخارجي أو النسخ الاحتياطي، مع خيارات التصدير كملاحظات OSM أو نقاط اهتمام أو جميع البيانات مجتمعة.

    - **حذف** — إزالة العناصر المحددة من قائمتك بشكل دائم.


2. ***قائمة ثلاث نقاط***. يمكنك إدارة نقاط اهتمام أو ملاحظات محددة باستخدام *قائمة ثلاث نقاط* بجانب كل ملاحظة:

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **تحميل التعديل إلى OSM** — أرسل تغييراتك أو تعديلاتك إلى OpenStreetMap ليراها الآخرون.

    - **إظهار على الخريطة** — عرض الموقع المحدد لنقطة الاهتمام أو الملاحظة على الخريطة.

    - **تعديل تغيير/ملاحظة OSM** — إجراء المزيد من التعديلات على نقطة الاهتمام أو الملاحظة التي تم إضافتها بالفعل إلى OpenStreetMap.

    - **حذف** — إزالة نقطة الاهتمام أو الملاحظة المحددة من قائمتك.

راجع [المكون الإضافي لتحرير OSM](../plugins/osm-editing.md) للحصول على تعليمات خطوة بخطوة.


## ملاحظات الصوت/الفيديو {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

يتيح لك **المكون الإضافي لملاحظات الصوت/الفيديو** إنشاء ملاحظات وسائط متعددة مرتبطة بمواقع خرائط محددة. يتم تخزين هذه الملاحظات في **أماكني** ضمن **علامة تبويب ملاحظات الصوت/الفيديو**.

1. ***أزرار الإجراءات***. يمكنك استخدام *أزرار الإجراءات* في أسفل شاشة أماكني لإدارة قائمة ملاحظاتك:

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — يفتح مجموعة مختارة من طرق الفرز، *حسب النوع* أو *حسب التاريخ*، وعند التحديد، يتم فرز القائمة وفقًا لذلك.

    - **<Translate android="true" ids="shared_string_share"/>** — يعرض قائمة تحقق بجميع الملاحظات، بما في ذلك تلك المضافة إلى ملفات GPX كنقاط طريق. أولاً، يتم تحديد الملاحظات المطلوبة، ثم يقترح رمز *المشاركة* في الزاوية اليمنى العليا من الشاشة خيارات المشاركة المتاحة، وأخيرًا، تصبح هذه الملاحظات متاحة وفقًا للخيار المحدد.

    - **مشاركة مع نقاط طريق GPX** — يمكنك مشاركة الملاحظات المحددة كنقاط طريق في قائمة *أماكني* عن طريق إضافة [بيانات GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) إليها باستخدام زر **المشاركة** في أسفل شاشة علامة تبويب *ملاحظات الصوت/الفيديو*.

    - **<Translate android="true" ids="shared_string_delete"/>** — يعرض قائمة تحقق من ملاحظات الصوت والصور والفيديو فقط. أولاً، تحقق من الملاحظات غير الضرورية، ثم انقر فوق رمز *الحذف* في الزاوية اليمنى العليا من الشاشة، وبعد التأكيد، سيتم حذف الملاحظات المحددة بشكل دائم.


2. ***قائمة ثلاث نقاط***. يمكنك إدارة ملاحظات صوت أو فيديو أو صور محددة باستخدام *قائمة ثلاث نقاط* بجانب كل ملاحظة:

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — يعرض أو يستمع إلى ملاحظة الصوت أو الفيديو أو الصورة المحددة مباشرة.

    - **<Translate android="true" ids="shared_string_share"/>** — يشارك الملاحظة مع الآخرين من خلال تطبيقات أو منصات مختلفة.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — يعرض الموقع المرتبط و[قائمة السياق](../plugins/audio-video-notes#actions-in-map-context-menu) للملاحظة على الخريطة.

    - **<Translate android="true" ids="shared_string_rename"/>** — تغيير اسم الملاحظة إلى شيء أكثر وصفًا أو صلة.

    - **<Translate android="true" ids="shared_string_delete"/>** — يتم حذف الملاحظات المحددة بشكل دائم من مجموعتك.

لمزيد من المعلومات، تفضل بزيارة صفحة [المكون الإضافي لملاحظات الصوت/الفيديو](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## مقالات ذات صلة {#related-articles}

- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)

> *آخر تحديث: مارس 2025*