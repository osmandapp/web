---
source-hash: 60b188c51e17690f3a3d5d8e4970eb6bd2391e27d4fafaddb68b30a36313f979
sidebar_position: 3
title: ملاحظات الصوت / الفيديو
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

<InfoAndroidOnly />

## نظرة عامة {#overview}

يمكن أن تكون تسجيلات الصوت والفيديو مفيدة في المستقبل، مثل ذكريات الأماكن التي زرتها. وهي متوفرة في قائمة [أماكني](../personal/myplaces.md) وتكون مرئية عند تمكين إضافة ملاحظات الصوت/الفيديو.

توسع إضافة ملاحظات الصوت/الفيديو وظائف OsmAnd من خلال السماح لك بإنشاء ملاحظاتك الخاصة بتنسيقات مختلفة، مثل الصور أو الفيديو أو الصوت، وربطها بموقعها الجغرافي أو موقعها الحالي. يمكنك إجراء التسجيلات فقط عندما تكون الإضافة قيد التشغيل، باستخدام [أداة ملاحظات الصوت/الفيديو](../widgets/info-widgets.md#-audio-video-notes-widget) و/أو [قائمة سياق الخريطة](../map/map-context-menu.md#-audiovideo-note). يتم حفظ البيانات المستلمة تلقائيًا في [أماكني](../personal/myplaces.md)، حيث يمكن إدارتها ومشاركتها بسهولة.

تشكل جميع ملاحظات الصوت والفيديو التي تم إنشاؤها طبقة التسجيل. عند تمكينها على الخريطة، فإنها تغير عرض البيانات المسجلة وهناك المزيد من الإعدادات لإدارة التسجيلات. في طبقة التسجيل، يتم وضع ملاحظات الصوت والفيديو كنقاط اهتمام على الخريطة، وبالتالي إنشاء سرد للمستخدم مرئي فقط لمالك الجهاز.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مقدمة ملاحظات الصوت والفيديو](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>

## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم توفير ملاحظات الصوت/الفيديو مع إضافة ملاحظات الصوت/الفيديو، وتتطلب الإعداد التالي:

1. قم بتمكين [إضافة ملاحظات الصوت/الفيديو](../plugins/index.md#enable--disable) في قسم الإضافات من *القائمة الرئيسية*.
2. أضف [أداة](../widgets/info-widgets.md#-audio-video-notes-widget) إلى شاشة الخريطة للاستخدام الأكثر ملاءمة.
3. قم بتخصيص [إعدادات التسجيل](#plugin-settings) لكل ملف تعريف، إذا لزم الأمر.

## إعدادات الإضافة {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![إعدادات إضافة الصوت والفيديو صورة أندرويد](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

لكل ملف تعريف، يمكنك تكوين *خيارات تسجيل الصوت والفيديو*.

| المعلمة | الوصف |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | يمكنك اختيار ما إذا كنت تريد استخدام تطبيق النظام أو كاميرا OsmAnd لالتقاط <Translate android="true" ids="photo_notes"/>.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | يحدد حجم الصور المراد التقاطها. تحدد إمكانيات الكاميرا بالجهاز عدد الخيارات المتاحة. إذا لم يتم تحديد أي خيار، يستخدم التطبيق الحجم من إعدادات نظام كاميرا الجهاز. |
| **<Translate android="true" ids="av_camera_focus"/>** | يحدد طريقة ضبط تركيز الكاميرا. يتم تحديد عدد الخيارات المتاحة من خلال إمكانيات كاميرا الجهاز. بشكل أساسي، هناك ثلاثة خيارات تالية: *<Translate android="true" ids="av_camera_focus_auto"/>*؛ *<Translate android="true" ids="av_camera_focus_continuous"/>*؛ و *<Translate android="true" ids="av_camera_focus_infinity"/>*. **التركيز التلقائي** هو الأكثر شيوعًا ويحدد الوضع التلقائي للكاميرا؛ **المستمر** يجعل الكاميرا تكتشف الحركات وتعيد التركيز وفقًا لذلك؛ وخيار **اللانهاية** يجعل العدسة تركز على مسافة وبالتالي تحافظ على وضوح الكائنات بغض النظر عن مدى بعدها. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | إذا تم تمكينه، يتم إصدار صوت عند التقاط الكاميرا لقطة. يرجى ملاحظة أنه، كما هو مطلوب بموجب قانون الخصوصية، **في بعض البلدان لن تحتوي الأجهزة على مفتاح كتم صوت غالق الكاميرا**. إذا كنت تستخدم تطبيق النظام، فيجب تعطيل الصوت في تطبيق الكاميرا. |
| **<Translate android="true" ids="av_audio_format"/>** | يوفر اختيارًا للتنسيقات لملف صوتي. يتم تحديد عدد الخيارات المتاحة، وأيها يستخدم افتراضيًا، من خلال معلمات جهاز معين. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | يوفر هذا الخيار اختيارًا لخيارات معدل البت لملف صوتي ليتم إنشاؤه. تتراوح خيارات معدل البت المتاحة من 16 كيلوبت في الثانية إلى 128 كيلوبت في الثانية، أو خيار الافتراضي. يتم تحديد معلمة الافتراضي من خلال إعدادات الميكروفون "الافتراضية" لجهازك. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | إذا تم تمكينه، يستخدم OsmAnd تطبيق النظام لتسجيل الفيديو في <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | يوفر هذا اختيارًا للخيارات التي تحدد تنسيق الصورة الناتجة. يتم تحديد نطاق الخيارات المتاحة من خلال معلمات جهاز معين. الخيار الافتراضي هو خيار *أعلى جودة*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | إذا تم تمكينه، سيتم إعادة كتابة تسجيلات الفيديو القديمة تلقائيًا واستبدالها بتسجيلات فيديو جديدة إذا وصل حجم التخزين إلى حد الحجم. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | يحدد هذا الحد الزمني الأعلى لمقاطع الفيديو المسجلة. هناك خيارات تتراوح من دقيقة واحدة إلى 30 دقيقة. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | يحدد هذا حجم التخزين المخصص للفيديو المسجل. هناك خيارات تتراوح من 1024 ميجابايت إلى 62 جيجابايت. يتم تحديد نطاق معين من الخيارات، والخيار الافتراضي، من خلال معلمات جهاز معين. ستذكرك رسالة نظام بأن حجم التخزين يقترب من الحد المحدد. |
| **<Translate android="true" ids="notes"/>** | يعيد هذا الخيار توجيهك إلى [ملاحظات الصوت/الفيديو في أماكني](../personal/myplaces.md) - التخزين المركزي لجميع ملاحظات الصوت/الفيديو التي تم إنشاؤها في التطبيق. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | يمكنك تعيين القيم الافتراضية لجميع إعدادات ملاحظات الصوت/الفيديو. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | يفتح مربع حوار لتحديد ملف تعريف لنسخ تكوين تسجيل ملاحظات الصوت/الفيديو منه، وتعيينه للملف الشخصي الحالي. |

## إدارة ملاحظة واحدة {#manage-a-single-note}

يمكنك إدارة معلوماتك وأفكارك وما إلى ذلك المرتبطة بمكان جغرافي، على النحو التالي:

- إنشاء ملاحظة.
- عرض جميع الملاحظات كقائمة في [أماكني](../personal/myplaces.md).
- إظهار الملاحظة المحددة على الخريطة.
- إعادة تسمية ملاحظة في أماكني.
- إظهار جميع الملاحظات [على الخريطة](../map/configure-map-menu.md#map-data-layers).
- تشغيل الملاحظة.
- إنشاء نقاط طريق في [مسار](../plugins/trip-recording.md#gpx-file-details).
- التصدير إلى [JOSM](https://josm.openstreetmap.de/).

### إنشاء {#create}

يمكنك إنشاء ملاحظة صورية أو فيديو أو صوتية بأي من الطرق التالية:

- باستخدام [الأداة](../widgets/info-widgets.md#-audio-video-notes-widget-android). إذا كان يجب ربط الملاحظة بموقعك الجغرافي الحالي.
- باستخدام [قائمة السياق](../map/map-context-menu.md#-record-av-note-android) لنقطة على الخريطة. إذا كان يجب ربط الملاحظة بالنقطة المحددة على الخريطة.

#### 1. الإنشاء والربط بموقعك الحالي {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![أداة إضافة الصوت والفيديو أندرويد](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

تُستخدم أداة <Translate android="true" ids="map_widget_av_notes"/> لإنشاء ملاحظة مرتبطة بموقعك الحالي، وبالتالي تجنب أي بحث عن نقطة مناسبة للملاحظة على الخريطة. ما عليك سوى النقر على الأداة وإنشاء الملاحظة.

تعتمد الوظائف التي توفرها أداة <Translate android="true" ids="map_widget_av_notes"/> على كيفية تكوينها في قائمة [شاشة التكوين](../widgets/info-widgets.md#-audio-video-notes-widget-android). تفتح الأداة إما الكاميرا على الفور لإنشاء ملاحظة، وفقًا للإعدادات المحددة، أو تطلب أولاً التنسيق الذي تريد إنشاء الملاحظة به ثم تفتح مربع حوار المسجل المناسب.

#### 2. الإنشاء والربط بموقع جغرافي محدد {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة الصوت والفيديو قائمة السياق التقاط ملاحظة](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

لإنشاء ملاحظة مرتبطة بنقطة محددة على الخريطة، استخدم [قائمة السياق](../map/map-context-menu.md#-record-av-note-android) للنقطة:

1. اضغط مطولاً على نقطة على الخريطة، وستفتح [قائمة السياق](../map/map-context-menu.md).
2. انقر على **إجراءات**، وحدد أحد الخيارات المتاحة من القائمة:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - لإنشاء ملاحظة صوتية وربطها بالنقطة المحددة على الخريطة؛
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - لإنشاء ملاحظة فيديو وربطها بالنقطة المحددة على الخريطة؛
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - لإنشاء ملاحظة صورية وربطها بالنقطة المحددة على الخريطة.

3. اعتمادًا على التنسيق المحدد للملاحظة، يفتح مربع حوار المسجل المناسب.

#### مربع حوار المسجل {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسجل ملاحظات الفيديو](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

بالنسبة *لملاحظات الصوت والفيديو*، يتم عرض مسجل الصوت أو الفيديو على التوالي. يمكنك:

- إيقاف التسجيل باستخدام أيقونة *إيقاف*.
- عرض مدة التسجيل.
- إظهار أو إخفاء شاشة الفيديو.

من الممكن إيقاف التسجيل بنقرة على أداة <Translate android="true" ids="map_widget_av_notes"/>، بغض النظر عما إذا كانت قائمة السياق أو الأداة قد بدأت التسجيل. بالنسبة *لملاحظة صورية*، تظهر وظيفة الكاميرا، ويمكنك التقاط صورة، وعرض النتيجة، وقبولها وحفظها، أو التقاط صورة جديدة.

:::info ملاحظة
تُحفظ جميع سجلات الصور والصوت والفيديو تلقائيًا في: علامة تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::

### العرض في أماكني {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![قائمة إضافة الصوت والفيديو أماكني](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[أماكني](../personal/myplaces.md) هو مستودع مركزي لجميع ملاحظاتك. يسمح لك بعرض جميع ملاحظاتك في قائمة مرتبة، وعرض ملاحظة محددة على الخريطة، وإدارة قائمة ملاحظاتك بالكامل.

### العرض على الخريطة {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة إضافة الصوت والفيديو أماكني السياق](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

لعرض ملاحظة محددة على الخريطة، استخدم قائمة الملاحظات في أماكني، وابحث عن الملاحظة المطلوبة، وانقر عليها. ونتيجة لذلك، تظهر الخريطة، وتبرز موقع الملاحظة، وتفتح [قائمة السياق](../plugins/audio-video-notes.md#actions-in-map-context-menu). من الممكن العمل مع الملاحظة عن طريق تحديد الخيارات في قائمة السياق.

### تشغيل {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق إضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![إجراءات قائمة إضافة الصوت والفيديو أماكني](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

لتشغيل ملاحظة، استخدم الخيار المناسب في [قائمة السياق](../map/map-context-menu#-audiovideo-note-android) المفتوحة للملاحظة:

- على الخريطة؛
- في أماكني.

يوفر قسم [التفاصيل](../map/map-context-menu#-audiovideo-note-android) المزيد من البيانات حول الملاحظات، مثل خط العرض وخط الطول، وتاريخ ووقت الملاحظة، والصور.

### إعادة التسمية، الحذف، المشاركة {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراءات قائمة إضافة الصوت والفيديو أماكني](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

لإدارة ملاحظة في أماكني، انقر على النقاط الثلاث العمودية للملاحظة في القائمة، وستظهر الخيارات المتاحة، على النحو التالي:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. فتح وعرض الفيديو المحدد أو تشغيل الملاحظة الصوتية.
- **<Translate android="true" ids="shared_string_share"/>**. مشاركة الملاحظة المحددة بسهولة مع الآخرين عبر منصات مختلفة.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. يعرض الموقع الدقيق و[قائمة السياق](../plugins/audio-video-notes#actions-in-map-context-menu) للملاحظة على الخريطة.
- **<Translate android="true" ids="shared_string_rename"/>**. تغيير اسم الملاحظة لتسهيل التعرف عليها.
- **<Translate android="true" ids="shared_string_delete"/>**. يزيل الملاحظات بشكل دائم من التطبيق.

## أداة التسجيل {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الأداة](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

تنشئ [أداة ملاحظات الصوت/الفيديو](../widgets/info-widgets.md#audiovideo-notes-widget) ملاحظات وصورًا وملفات صوت وفيديو وتربطها بموقعك الحالي. تحتوي الأداة على عدة خيارات يمكن تعيينها كإجراء افتراضي يتم تنفيذه بواسطة الأداة عند لمس الشاشة.

إضافة أداة إلى الشاشة ضرورية إذا كنت تفضل تجنب البحث عن موقع جغرافي على الخريطة وربط الملاحظات بموقعك الافتراضي الحالي. لإضافة أو تخصيص أداة، اتبع الخطوات أدناه:

1. اذهب إلى:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. حدد **<Translate android="true" ids="map_widget_left"/>** أو **<Translate android="true" ids="map_widget_right"/>**.

3. انقر على **<Translate android="true" ids="map_widget_av_notes"/>**، وستفتح قائمة سياق الأداة.

4. حدد الخيار الذي تفضل استخدامه افتراضيًا عن طريق النقر على الأداة:

    - **<Translate android="true" ids="av_def_action_choose"/>** - فتح مجموعة من الخيارات.

    - **<Translate android="true" ids="av_def_action_audio"/>** - بدء تسجيل رسالة صوتية.

    - **<Translate android="true" ids="av_def_action_video"/>** - بدء تسجيل الفيديو.

    - **<Translate android="true" ids="av_def_action_picture"/>** - بدء التقاط الصور.

    ![الأداة](@site/static/img/plugins/audio-video-notes/widget.png)

## إدارة ملاحظات متعددة {#manage-multiple-notes}

### الإدارة في أماكني {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة إضافة الصوت والفيديو أماكني ثلاثة إجراءات](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

يمكن استخدام الخيارات الموجودة في الشريط السفلي لإدارة قائمة الملاحظات في قائمة [أماكني](../personal/myplaces.md#audiovideo-notes).

### المشاركة مع نقاط طريق GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![مشاركة](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

يمكنك مشاركة جميع الملاحظات بما في ذلك [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) الذي يحتوي على الملاحظات المحددة كنقاط طريق على شاشة [أماكني](../personal/myplaces.md#audiovideo-notes) بالنقر على زر قائمة المشاركة السفلي. سيظهر مربع اختيار بجانب كل ملاحظة لتحديد ملاحظات معينة. يوجد مربعا اختيار فوق الملاحظات: *ملاحظات الصوت/الفيديو حسب التاريخ* لتحديد جميع الملاحظات ومربع اختيار *المواقع*. يسمح لك مربع اختيار *المواقع* بإضافة ملف GPX منفصل يحتوي على الإحداثيات والبيانات.

تحتوي كل ملاحظة على وقت إنشائها، وكمية البيانات، وإذا كانت تسجيلًا، وقت التسجيل، وبيانات الموقع، يمكنك إضافة بيانات GPX.
تنسيقات الملفات المدعومة: الصوت - **3gp**، الفيديو - **mp4**، الصورة - **jpg**.

### إظهار الكل على الخريطة {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![إظهار الملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

يمكن للملاحظات المعروضة على الخريطة أن تروي قصتك، أين رأيت اللافتات، أي باب تحتاج إلى فتحه، أين المخرج، المسار الأمثل، والمزيد. يمكنك إظهار الملاحظات [واحدة تلو الأخرى](#show-on-the-map) أو كلها مرة واحدة.

استخدم طبقة خريطة [التسجيل](../map/point-layers-on-map#-audio--video-points-android) لإظهار أو إخفاء جميع الملاحظات. إذا قمت بتشغيلها في قائمة [تكوين الخريطة](../map/configure-map-menu)، فإن طبقة التسجيل تعرض جميع الملاحظات على الخريطة.

![لا توجد ملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![الملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/notes_on_map.png)

## نقاط الطريق التي تم إنشاؤها من الملاحظات {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الملاحظات ونقاط الطريق على الخريطة](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![نقاط الطريق على المسار](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

يتم إنشاء نقطة طريق عند إضافة ملاحظة صوتية أو فيديو أو صورية إلى مسار. توجد نقاط الطريق داخل المسار. إذا كان المسار مرئيًا، فإن نقاط طريقه تكون مرئية أيضًا. وبالتالي، يمكن أن تكون هذه الملاحظات مرئية على الخريطة كلها مرة واحدة أو فقط على مسار مرئي محدد. في الحالة الأخيرة، يتم عرض الملاحظات كنقاط طريق للمسار.

:::note
إذا تم تصدير مسار، فلا يمكن عرض نقاط الطريق أو تشغيلها، لأن ملاحظات الصوت/الفيديو/الصور تُخزن على الجهاز فقط، وهي متاحة لك فقط على هذا الجهاز.
:::

### إنشاء نقاط طريق {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة نقطة طريق يدويًا إلى المسار](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

هناك طريقتان لإنشاء نقطة طريق: تلقائيًا ويدويًا.

1. **تلقائيًا**، يتم إنشاء نقطة طريق، في حال أخذت ملاحظة صوتية/فيديو/صورية عندما يكون [تسجيل الرحلة](../plugins/trip-recording) قيد التقدم، بغض النظر عن الموقع الجغرافي إذا كان مرتبطًا بالموقع الحالي أو أي مكان، وبالتالي، بغض النظر عن الوسيلة المستخدمة لذلك: سواء كانت [الأداة](../widgets/info-widgets#-audio-video-notes-widget-android)، أو [قائمة السياق](../map/map-context-menu#-audiovideo-note-android).

    تحصل جميع نقاط الطريق المضافة تلقائيًا على اسم يتم تعيينه تلقائيًا. يتم إنشاء الاسم، وفقًا للتنسيق المحدد أدناه لملف صوتي/فيديو/صوري، ويحتوي على [رابط قصير](https://wiki.openstreetmap.org/wiki/Shortlink). يوضح مثال نقاط الطريق في الشكل أعلاه نقاط الطريق التي تم إنشاؤها تلقائيًا ويدويًا، حيث تم إنشاء الأربعة الأولى تلقائيًا، والأخيرة - يدويًا.

2. **يدويًا**، يتم إنشاء نقطة طريق عبر [قائمة السياق](../map/map-context-menu#-audiovideo-note-android)، على النحو التالي:

    - حدد ملاحظة الصوت/الفيديو/الصورة المطلوبة على الخريطة.
    - انقر على **إجراءات**، ثم انقر على **إضافة مسار**.
    - حدد المسار الذي تنوي إضافة نقطة طريق إليه.
    - يفتح مربع حوار *<Translate android="true" ids="quick_action_add_gpx"/>*، ويسمح لك بتعيين بعض الخصائص، مثل اسم نقطة الطريق، وأيقونة، ولون، وغيرها. بمجرد الانتهاء، انقر على **حفظ**.

:::info ملاحظة
يمكنك تحديد أسماء لكل نقطة طريق تم إنشاؤها يدويًا.
:::

### عرض نقاط الطريق {#view-waypoints}

- تتوفر نقطة الطريق للعرض كنقطة طريق على الخريطة وفي قائمة [نقاط طريق مسار محدد](../map/tracks/track-context-menu.md#points--waypoints). حذف نقطة الطريق لا يحذف ملاحظة الصوت/الفيديو/الصورة ذات الصلة.

- تتوفر ملاحظة الصوت أو الفيديو أو الصورة للعرض على الخريطة وفي قائمة ملاحظات الصوت/الفيديو في [أماكني](../plugins/audio-video-notes#view-in-my-places). حذف ملاحظة الصوت أو الفيديو أو الصورة لا يحذف نقطة الطريق ذات الصلة.

- على الخريطة، قد تكون نقطة الطريق وملاحظة الصوت أو الفيديو أو الصورة مرئية أو غير مرئية على الخريطة. يتم تحديد ذلك من خلال الطبقة التي تم تبديلها حاليًا للملف الشخصي.

- عندما لا يتم تبديل طبقة المسارات ولا طبقة التسجيل، يمكن عرض كل من نقاط الطريق والملاحظات بالنقر عليها في أماكني. في هذه الحالة، تعرض الخريطة مواقع الملاحظة التي تم النقر عليها، أو على التوالي، مواقع جميع نقاط طريق المسار الذي تم النقر عليه.

| مرئي | الطبقة التي تم تبديلها |
| --- | --- |
| نقاط طريق فقط | طبقة المسارات |
| نقاط طريق وملاحظات | طبقة المسارات وطبقة التسجيل |
| ملاحظات فقط | طبقة التسجيل |
| لا شيء | لا طبقة المسارات ولا طبقة التسجيل. |

### ملف GPX مع نقاط طريق {#gpx-file-with-waypoints}

![نقطة طريق في ملف GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

إذا كنت تعرض ملف GPX للمسار المضاف بنقطة طريق من ملاحظة صوتية/فيديو/صورية، فستكون نقطة الطريق كما في المثال أدناه، تحتوي على الإحداثيات، والطابع الزمني، واسم الملاحظة ذات الصلة، والرابط القصير.

## متنوع {#miscellaneous}

### تفاصيل اسم الملف {#file-name-details}

تنشئ إضافة <Translate android="true" ids="audionotes_plugin_name"/> ملفات صوت/فيديو/صور بالتنسيق التالي:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

حيث تحدد `SHORTLINK_LOCATION` خط العرض وخط الطول للموقع الذي يرتبط به الملف. يتم ترميز `SHORTLINK_LOCATION`، وفقًا لمواصفات [الرابط القصير](https://wiki.openstreetmap.org/wiki/Shortlink).

### التصدير إلى JOSM {#export-to-josm}

![ملاحظات الصوت والفيديو في JOSM](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

لعرض كل شيء لاحقًا، يمكنك تصدير المسار مع جميع ملفات الوسائط وعرضها في [محرر JOSM](https://josm.openstreetmap.de/). لاحظ أنه يجب وضع ملفات الوسائط في المجلد المناسب. يمكنك معرفة أي مجلد بالنقر على الفيديو. سيظهر إشعار يوضح عدم توفر الملف، ضع الملف الصحيح في المجلد المحدد.

## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [خرائط المتجهات (أنماط الخرائط)](../../user/map/vector-maps.md)

> *آخر تحديث: مايو 2023*