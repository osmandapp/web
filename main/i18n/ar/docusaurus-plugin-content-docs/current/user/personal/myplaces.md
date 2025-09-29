---
source-hash: b7a4c8980154722bb0d724edafe0ab0e8ba822222cf5fbe7b64f264c2fb4b1a8
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

**أماكني** هو المركز الرئيسي في تطبيق OsmAnd لإدارة وتخصيص جميع البيانات الشخصية. يمكنك استخدام هذا القسم لتنظيم [النقاط المفضلة](#favorites) التي تم تمييزها على أنها مهمة أو يتم زيارتها بشكل متكرر. تتيح لك علامة التبويب [المسارات](#tracks) عرض ملفات GPX واستيرادها وتسجيلها وإنشائها لمساعدتك في الاحتفاظ بسجل مفصل لمساراتك ورحلاتك. يمكنك أيضًا إدارة [تعديلات OpenStreetMap](#openstreetmap-edits) الخاصة بك، مما يسهل المساهمة في تحسينات الخريطة وتحديثاتها. يتيح ملحق [الملاحظات الصوتية/المرئية](#audiovideo-notes) والأدوات المصغرة لمستخدمي أندرويد إنشاء وحفظ ملاحظات الوسائط المتعددة المتعلقة بمواقع محددة، مما يضيف سياقًا لرحلاتهم.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu"/> ← أماكني*

![أماكني أندرويد](@site/static/img/personal/my_places_android.png) ![قائمة أماكني أندرويد](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate android="true" ids="shared_string_menu"/> ← أماكني*

![أماكني iOS](@site/static/img/personal/my_places_ios.png) ![قائمة أماكني iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***استيراد وتصدير البيانات***](../personal/import-export.md):

    يمكن نقل جميع البيانات المخزنة في قائمة *أماكني* باستخدام تنسيق خاص `.osf` من خلال التطبيقات الموجودة على جهازك. تبسط هذه العملية حفظ البيانات ونقلها بين الأجهزة وتسمح لك بمشاركتها مع مستخدمي OsmAnd الآخرين.

    **اذهب إلى** قسم *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* وحدد ما إذا كنت تريد تصدير البيانات أو استيرادها. إذا اخترت *تصدير*، فستحتاج إلى توسيع مجموعة *أماكني* والتحقق من البيانات المطلوبة.

- [***الخرائط والموارد***](../personal/maps-resources.md):

    يوفر عنصر *القائمة الرئيسية* *الخرائط والموارد* في تطبيق OsmAnd إمكانية الوصول إلى إدارة البيانات من قسم *أماكني*. تعرض لك علامة التبويب [*محلي*](../personal/maps-resources.md#local-menu) مقدار المساحة التي تشغلها جميع بيانات OsmAnd الموجودة على جهازك، وقسم *أماكني* على وجه الخصوص. يمكنك استخدامه للحصول على معلومات مفصلة حول بياناتك والوصول إلى إدارتها. يمكن أن يحتوي القسم فقط على العناصر التي تم تنزيل بياناتها.

    **اذهب إلى** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. تحقق من بياناتك وأدرها.


## المفضلة {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![قائمة المفضلة أندرويد](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة المفضلة iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

تتيح لك **المفضلة** وضع إشارة مرجعية على المواقع المهمة أو التي تتم زيارتها بشكل متكرر. يتم تنظيم هذه النقاط المفضلة في مجلدات ويمكن تخصيصها بألوان وأشكال وأيقونات مختلفة. يمكنك الانتقال بسرعة إلى أي مكان مفضل من خلال قائمة **أماكني** دون الحاجة إلى البحث عنه بشكل متكرر.


١. ***أزرار الإجراءات***. تتيح لك *أزرار الإجراءات* الموجودة أسفل شاشة أماكني إدارة قائمة المجلدات التي تحتوي على مفضلاتك:

    - **استيراد** (زر *إضافة*) — يسمح لك باستيراد ملفات *favorite.gpx* من مساحة تخزين جهازك.

    - **تصدير** — احفظ نقاطك المفضلة كملف *favorites.gpx* للاستخدام الخارجي أو للنسخ الاحتياطي.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*أندرويد فقط*) — يمكنك إضافة أي نقطة مفضلة أو القائمة الكاملة للنقاط المفضلة في مجلد إلى [قائمة علامات الخريطة](../personal/markers.md).

    - **حذف** (*في iOS، يوجد هذا الخيار في قائمة التحرير*) — يحذف النقاط المفضلة واحدة تلو الأخرى أو المجلدات المفضلة المحددة وجميع النقاط الموجودة فيها.

٢. ***قائمة النقاط الثلاث*** (*أندرويد*) و***الضغط المطول*** (*iOS*). استخدم قائمة *النقاط الثلاث* بجوار كل مجلد أو *اضغط مطولاً* على المجلد لإدارة مجموعات المفضلة:

    <Tabs groupId="operating-systems" queryString="current-os">

    <TabItem value="android" label="Android">

    ![قائمة النقاط الثلاث](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![قائمة المفضلة iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — استخدم هذا الخيار لتغيير اسم المجلد المحدد.

    - **<Translate android="true" ids="change_default_appearance"/>** — خصص كيفية ظهور النقاط المفضلة في المجلد على الخريطة عن طريق تغيير أيقوناتها أو ألوانها أو تسمياتها.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** أو **إخفاء من الخريطة** — قم بتبديل هذا الخيار لعرض أو إخفاء النقاط المفضلة من المجلد على الخريطة.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** أو **إزالة من علامات الخريطة** (*أندرويد فقط*) — أضف جميع النقاط المفضلة من المجلد إلى *قائمة علامات الخريطة* أو قم بإزالتها حسب الحاجة لسهولة الرجوع إليها.

    - **<Translate android="true" ids="shared_string_share"/>** — شارك النقاط المفضلة في المجلد عن طريق تصديرها كملف *Favorites.gpx*، مما يسهل نقل بياناتك أو نسخها احتياطيًا.

    - **<Translate android="true" ids="shared_string_delete"/>** — احذف مجلد المفضلة المحدد وجميع النقاط الموجودة فيه بشكل دائم.

للحصول على إرشادات أكثر تفصيلاً، راجع مقالة [المفضلة](../personal/favorites.md).


## المسارات {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *تبويب <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![أماكني مع المسارات في iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

توفر **المسارات** أدوات قوية لتسجيل وإنشاء وإدارة المسارات داخل OsmAnd. يمكن استخدامها في [الملاحة](../navigation/setup/gpx-navigation.md)، أو [تسجيل الرحلة](../plugins/trip-recording.md)، أو [دمج](../personal/tracks/manage-tracks.md#import) ملفات GPX الخارجية.

- **تبويب المسارات** — يتم عرض جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها تلقائيًا في مجلد *أماكني* في تبويب *المسارات*. يتم تنظيمها حسب المجلد أو عرضها في قائمة أسفلها.

- **إنشاء مسار** — ابدأ التسجيل باستخدام **تبويب المسارات** أو [ملحق تسجيل الرحلة](../plugins/trip-recording.md).

- **عرض وتحرير** — يمكنك الوصول إلى قائمة المسارات من خلال *أماكني* وإدارتها باستخدام قائمة *النقاط الثلاث* لـ [المجلدات](../personal/tracks/manage-tracks.md#track-folder) أو قائمة [المسار الفردي](../personal/tracks/manage-tracks.md#search).

- **إدارة** — استخدم أدوات [التصفية](../personal/tracks/smart-folder.md#available-filters) و [المجلد الذكي](../personal/tracks/smart-folder.md#smart-folder) لتنظيم المسارات بناءً على معلمات محددة.

- **المظهر والتحليل** — [خصص](../map/tracks/appearance.md) النمط المرئي للمسارات و [حللها](../map/tracks/index.md#analyze-track-on-map) باستخدام أداة [تخطيط مسار](../plan-route/create-route.md) من OsmAnd.

للحصول على إرشادات شاملة، راجع مقالة [إدارة المسارات](../personal/tracks/manage-tracks.md).


## تعديلات OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![مشاركة](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![مشاركة](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

تتيح لك ميزة **تعديلات OpenStreetMap** في OsmAnd المساهمة في مجتمع رسم الخرائط العالمي عن طريق إضافة بيانات الخريطة أو تعديلها أو التعليق عليها.

١. ***أزرار الإجراءات***. يمكنك استخدام *أزرار الإجراءات* على شاشة أماكني لإدارة قائمة ملاحظاتك:

    ![مشاركة](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **رفع الملفات إلى OSM** — أرسل ملاحظاتك وبياناتك إلى OpenStreetMap للمساهمة في المجتمع.

    - **تصدير** (*أندرويد فقط*) — احفظ ملاحظاتك ونقاط الاهتمام كملفات للاستخدام الخارجي أو للنسخ الاحتياطي، مع خيارات للتصدير كملاحظات OSM أو نقاط اهتمام أو جميع البيانات مجتمعة.

    - **حذف** — قم بإزالة العناصر المحددة من قائمتك بشكل دائم.


٢. ***قائمة النقاط الثلاث***. يمكنك إدارة نقاط اهتمام أو ملاحظات محددة باستخدام قائمة *النقاط الثلاث* بجوار كل ملاحظة:

    ![قائمة النقاط الثلاث](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **رفع التعديل إلى OSM** — أرسل تغييراتك أو تعديلاتك إلى OpenStreetMap ليراها الآخرون.

    - **عرض على الخريطة** — اعرض الموقع المحدد لنقطة الاهتمام أو الملاحظة على الخريطة.

    - **تعديل تغيير/ملاحظة OSM** — قم بإجراء تعديلات إضافية على نقطة الاهتمام أو الملاحظة التي تمت إضافتها بالفعل إلى OpenStreetMap.

    - **حذف** — قم بإزالة نقطة الاهتمام أو الملاحظة المحددة من قائمتك.

راجع [ملحق تحرير OSM](../plugins/osm-editing.md) للحصول على إرشادات خطوة بخطوة.


## الملاحظات الصوتية/المرئية {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![ملحق الصوت والفيديو قائمة أماكني ثلاثة إجراءات](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

يتيح لك **ملحق الملاحظات الصوتية/المرئية** إنشاء ملاحظات وسائط متعددة مرتبطة بمواقع محددة على الخريطة. يتم تخزين هذه الملاحظات في **أماكني** ضمن **تبويب الملاحظات الصوتية/المرئية**.

١. ***أزرار الإجراءات***. يمكنك استخدام *أزرار الإجراءات* الموجودة أسفل شاشة أماكني لإدارة قائمة ملاحظاتك:

    ![مشاركة](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — يفتح مجموعة مختارة من طرق الفرز، *حسب النوع* أو *حسب التاريخ*، وعند تحديده، يقوم بفرز القائمة وفقًا لذلك.

    - **<Translate android="true" ids="shared_string_share"/>** — يعرض قائمة تحقق لجميع الملاحظات، بما في ذلك تلك المضافة إلى ملفات GPX كنقاط طريق. أولاً، يتم تحديد الملاحظات المطلوبة، ثم يقترح رمز *المشاركة* في الزاوية اليمنى العليا من الشاشة خيارات المشاركة المتاحة، وأخيرًا، تصبح هذه الملاحظات متاحة وفقًا للخيار المحدد.

    - **المشاركة مع نقاط طريق GPX** — يمكنك مشاركة الملاحظات المحددة كنقاط طريق في قائمة *أماكني* عن طريق إضافة [بيانات GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) إليها باستخدام زر **المشاركة** أسفل شاشة تبويب *الملاحظات الصوتية/المرئية*.

    - **<Translate android="true" ids="shared_string_delete"/>** — يعرض قائمة تحقق للملاحظات الصوتية والصور والفيديو فقط. أولاً، حدد الملاحظات غير الضرورية، ثم انقر على أيقونة *الحذف* في الزاوية اليمنى العليا من الشاشة، بعد التأكيد، سيتم حذف الملاحظات المحددة بشكل دائم.


٢. ***قائمة النقاط الثلاث***. يمكنك إدارة ملاحظات صوتية أو فيديو أو صور محددة باستخدام قائمة *النقاط الثلاث* بجوار كل ملاحظة:

    ![قائمة النقاط الثلاث](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — يعرض أو يستمع إلى الملاحظة الصوتية أو الفيديو أو الصورة المحددة مباشرة.

    - **<Translate android="true" ids="shared_string_share"/>** — يشارك الملاحظة مع الآخرين من خلال تطبيقات أو منصات مختلفة.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — يعرض الموقع ذي الصلة و [قائمة السياق](../plugins/audio-video-notes#show-on-the-map) للملاحظة على الخريطة.

    - **<Translate android="true" ids="shared_string_rename"/>** — قم بتغيير اسم الملاحظة إلى شيء أكثر وصفًا أو صلة.

    - **<Translate android="true" ids="shared_string_delete"/>** — يتم حذف الملاحظات المحددة بشكل دائم من مجموعتك.

لمزيد من المعلومات، قم بزيارة صفحة [ملحق الملاحظات الصوتية/المرئية](../plugins/audio-video-notes.md).


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