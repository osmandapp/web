---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  الملاحظات الصوتية / المرئية
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

يمكن أن تكون تسجيلاتك الصوتية والمرئية مفيدة في المستقبل، كذكريات للأماكن التي زرتها. وهي متاحة في قائمة [أماكني](../personal/myplaces.md) وتكون مرئية عند تمكين إضافة الملاحظات الصوتية/المرئية.

توسع إضافة الملاحظات الصوتية/المرئية من وظائف OsmAnd من خلال السماح لك بإنشاء ملاحظاتك الخاصة بتنسيقات مختلفة، مثل الصور أو الفيديو أو الصوت، وربطها بموقعها الجغرافي أو موقعك الحالي. يمكنك إجراء التسجيلات فقط عند تشغيل الإضافة، باستخدام [ويدجت الملاحظات الصوتية/المرئية](../widgets/info-widgets.md#audiovideo-notes-widget) و/أو [قائمة سياق الخريطة](../map/map-context-menu.md#-audiovideo-note). يتم حفظ البيانات المستلمة تلقائيًا في [أماكني](../personal/myplaces.md)، حيث يمكن إدارتها ومشاركتها بسهولة.

تشكل جميع الملاحظات الصوتية والمرئية التي تم إنشاؤها طبقة التسجيل. عند تمكينها على الخريطة، فإنها تغير عرض البيانات المسجلة وهناك المزيد من الإعدادات لإدارة التسجيلات. في طبقة التسجيل، يتم وضع الملاحظات الصوتية والمرئية كنقاط اهتمام (POIs) على الخريطة، مما ينشئ سردًا للمستخدم لا يراه إلا مالك الجهاز.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مقدمة الملاحظات الصوتية والمرئية](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

يتم توفير الملاحظات الصوتية/المرئية مع إضافة الملاحظات الصوتية/المرئية، وتتطلب الإعداد التالي:

1. تمكين [إضافة الملاحظات الصوتية/المرئية](../plugins/index.md#enable--disable) في قسم الإضافات من *القائمة الرئيسية*.
2. إضافة [ويدجت](../widgets/info-widgets.md#audiovideo-notes-widget) إلى شاشة الخريطة للاستخدام الأكثر ملاءمة.
3. تخصيص [إعدادات التسجيل](#plugin-settings) لكل ملف شخصي، إذا لزم الأمر.


## إعدادات الإضافة {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![إعدادات إضافة الصوت والفيديو صورة أندرويد](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

لكل ملف شخصي، يمكنك تكوين *خيارات تسجيل الصوت والفيديو*.

| المَعلمة | الوصف |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | يمكنك اختيار ما إذا كنت تريد استخدام تطبيق النظام أو كاميرا OsmAnd لالتقاط <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | يحدد حجم الصور التي سيتم التقاطها. تحدد إمكانيات كاميرا الجهاز عدد الخيارات المتاحة. إذا لم يتم تحديد أي خيار، يستخدم التطبيق الحجم من إعدادات النظام لكاميرا الجهاز. |
| **<Translate android="true" ids="av_camera_focus"/>** | يحدد طريقة ضبط تركيز الكاميرا. يتم تحديد عدد الخيارات المتاحة من خلال إمكانيات كاميرا الجهاز. بشكل أساسي، هناك ثلاثة خيارات تالية: *<Translate android="true" ids="av_camera_focus_auto"/>*؛ *<Translate android="true" ids="av_camera_focus_continuous"/>*؛ و *<Translate android="true" ids="av_camera_focus_infinity"/>*. **التركيز التلقائي (Autofocus)** هو الأكثر شيوعًا ويضبط الوضع التلقائي للكاميرا؛ **المستمر (continuous)** يجعل الكاميرا تكتشف الحركات وتعيد التركيز وفقًا لذلك؛ وخيار **اللانهاية (infinity)** يجعل العدسة تركز على مسافة وبالتالي تبقي الأشياء في نطاق التركيز بغض النظر عن بعدها. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | إذا تم تمكينه، يتم إصدار صوت عندما تلتقط الكاميرا لقطة. يرجى ملاحظة أنه، كما هو مطلوب بموجب قانون الخصوصية، **في بعض البلدان لن تحتوي الأجهزة على مفتاح كتم صوت غالق الكاميرا**. إذا كنت تستخدم تطبيق النظام، فيجب تعطيل الصوت في تطبيق الكاميرا. |
| **<Translate android="true" ids="av_audio_format"/>** | يوفر خيارًا من التنسيقات لملف صوتي. يتم تحديد عدد الخيارات المتاحة، وأيها يُستخدم افتراضيًا، بواسطة معلمات جهاز معين. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | يوفر هذا الخيار مجموعة من خيارات معدل البت لملف صوتي سيتم إنشاؤه. تتراوح خيارات معدل البت المتاحة من ١٦ كيلوبت في الثانية إلى ١٢٨ كيلوبت في الثانية، أو الخيار الافتراضي. يتم تحديد المعلمة الافتراضية من خلال إعدادات الميكروفون "الافتراضية" لجهازك. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | إذا تم تمكينه، يستخدم OsmAnd تطبيق النظام لتسجيل الفيديو في <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | يوفر هذا خيارًا من الخيارات التي تحدد تنسيق الصورة الناتجة. يتم تحديد نطاق الخيارات المتاحة بواسطة معلمات جهاز معين. الخيار الافتراضي هو خيار *أعلى جودة*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | إذا تم تمكينه، سيتم إعادة كتابة تسجيلات الفيديو القديمة تلقائيًا واستبدالها بتسجيلات فيديو جديدة إذا وصل حجم التخزين إلى الحد الأقصى للحجم. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | يحدد هذا الحد الزمني الأعلى لمقاطع الفيديو المسجلة. هناك خيارات بنطاق من دقيقة واحدة إلى ٣٠ دقيقة. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | يحدد هذا حجم التخزين المخصص للفيديو المسجل. هناك خيارات بنطاق من ١٠٢٤ ميجابايت إلى ٦٢ جيجابايت. يتم تحديد نطاق معين من الخيارات، والخيار الافتراضي، بواسطة معلمات جهاز معين. ستذكرك رسالة نظام بوصول حجم التخزين إلى الحد المحدد. |
| **<Translate android="true" ids="notes"/>** | يعيد هذا الخيار توجيهك إلى [الملاحظات الصوتية/المرئية في أماكني](../personal/myplaces.md) - التخزين المركزي لجميع الملاحظات الصوتية/المرئية التي تم إنشاؤها في التطبيق. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | يمكنك تعيين القيم الافتراضية لجميع إعدادات الملاحظات الصوتية/المرئية. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | يفتح مربع حوار لتحديد ملف شخصي لنسخ تكوين تسجيل الملاحظات الصوتية/المرئية منه، وتعيينه للملف الشخصي الحالي. |


## إنشاء ملاحظة واحدة {#create-a-single-note}

يمكنك إنشاء ملاحظة صورة أو فيديو أو صوت بأي من الطرق التالية:

- باستخدام [الويدجت](../widgets/info-widgets.md#audiovideo-notes-widget). إذا كان يجب ربط الملاحظة بموقعك الجغرافي الحالي.
- باستخدام [قائمة السياق](../map/map-context-menu.md#overview) لنقطة على الخريطة. إذا كان يجب ربط الملاحظة بالنقطة المحددة على الخريطة.


### إنشاء وتثبيت الموقع الحالي {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ويدجت إضافة الصوت والفيديو أندرويد](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

يُستخدم ويدجت <Translate android="true" ids="map_widget_av_notes"/> لإنشاء ملاحظة مرتبطة بموقعك الحالي، وبالتالي، تجنب أي بحث عن نقطة مناسبة للملاحظة على الخريطة. ما عليك سوى النقر على الويدجت وإنشاء الملاحظة.

تعتمد الوظائف التي يوفرها ويدجت <Translate android="true" ids="map_widget_av_notes"/> على كيفية تكوينه في قائمة [شاشة التكوين](../widgets/info-widgets.md#audiovideo-notes-widget). يفتح الويدجت إما الكاميرا على الفور لإنشاء ملاحظة، وفقًا للإعدادات المحددة، أو يسأل أولاً عن التنسيق الذي سيتم إنشاء الملاحظة به ثم يفتح مربع حوار المسجل المعني.


### إنشاء وتثبيت الموقع المحدد {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق إضافة الصوت والفيديو تدوين ملاحظة](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

لإنشاء ملاحظة مرتبطة بنقطة محددة على الخريطة، استخدم [قائمة السياق](../map/map-context-menu.md#-record-av-note) للنقطة:

1. انقر نقرًا طويلاً على نقطة على الخريطة، وستفتح [قائمة السياق](../map/map-context-menu.md).
2. انقر على **إجراءات**، واختر أحد الخيارات المتاحة من القائمة:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - لإنشاء ملاحظة صوتية وربطها بالنقطة المحددة على الخريطة؛
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - لإنشاء ملاحظة فيديو وربطها بالنقطة المحددة على الخريطة؛
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - لإنشاء ملاحظة صورة وربطها بالنقطة المحددة على الخريطة.

3. بناءً على التنسيق المحدد للملاحظة، يفتح مربع حوار المسجل المعني.


### مربع حوار المسجل {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مسجل ملاحظات الفيديو](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

بالنسبة *للملاحظات الصوتية والمرئية*، يتم عرض مسجل الصوت أو الفيديو على التوالي. يمكنك:

- إيقاف التسجيل برمز *الإيقاف*.
- عرض مدة التسجيل.
- إظهار أو إخفاء شاشة الفيديو.

من الممكن إيقاف التسجيل بنقرة على ويدجت <Translate android="true" ids="map_widget_av_notes"/>، بغض النظر عما إذا كانت قائمة السياق أو الويدجت هي التي بدأت التسجيل. بالنسبة *لملاحظة الصورة*، تظهر وظيفة الكاميرا، ويمكنك التقاط صورة، وعرض النتيجة، وقبولها وحفظها، أو التقاط صورة جديدة.

:::info ملاحظة
تلقائيًا، يتم حفظ جميع سجلات الصور والصوت والفيديو في: علامة تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


## إدارة ملاحظة واحدة {#manage-a-single-note}

يمكنك إدارة معلوماتك وأفكارك وما إلى ذلك المرتبطة بمكان جغرافي، على النحو التالي:

- عرض جميع الملاحظات كقائمة في [أماكني](../personal/myplaces.md).
- إظهار الملاحظة المحددة على الخريطة.
- إعادة تسمية ملاحظة في أماكني.
- إظهار جميع الملاحظات [على الخريطة](../map/configure-map-menu.md#map-data-layers).
- تشغيل الملاحظة.
- إنشاء نقاط طريق في [مسار](../plugins/trip-recording.md#new-track-recording).
- تصدير إلى [JOSM](https://josm.openstreetmap.de/).


### العرض في أماكني {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![قائمة أماكني لإضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[أماكني](../personal/myplaces.md) هو مستودع مركزي لجميع ملاحظاتك. يسمح لك بعرض جميع ملاحظاتك في قائمة مرتبة، وعرض ملاحظة معينة على الخريطة، وإدارة قائمة ملاحظاتك بأكملها.


### الإظهار على الخريطة {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![سياق قائمة أماكني لإضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

لإظهار ملاحظة معينة على الخريطة، استخدم قائمة الملاحظات في أماكني، وابحث عن الملاحظة المطلوبة، وانقر عليها. نتيجة لذلك، تظهر الخريطة، وتبرز موقع الملاحظة، وتفتح قائمة السياق. من الممكن التعامل مع الملاحظة عن طريق تحديد الخيارات في قائمة السياق.


### تشغيل {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![قائمة سياق إضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![إجراءات قائمة أماكني لإضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

لتشغيل ملاحظة، استخدم الخيار المعني في [قائمة السياق](../map/map-context-menu#overview) المفتوحة للملاحظة:

- على الخريطة؛
- في أماكني.

يوفر قسم [التفاصيل](../map/map-context-menu#details) المزيد من البيانات حول الملاحظات، مثل خطوط الطول والعرض، وتاريخ ووقت الملاحظة، والصور.


### إعادة التسمية، الحذف، المشاركة {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراءات قائمة أماكني لإضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

لإدارة ملاحظة في أماكني، انقر على النقاط الثلاث الرأسية للملاحظة في القائمة، وستظهر الخيارات المتاحة، على النحو التالي:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. افتح واعرض الفيديو المحدد أو قم بتشغيل الملاحظة الصوتية.
- **<Translate android="true" ids="shared_string_share"/>**. شارك الملاحظة المحددة بسهولة مع الآخرين عبر منصات مختلفة.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. يعرض الموقع الدقيق وقائمة السياق للملاحظة على الخريطة.
- **<Translate android="true" ids="shared_string_rename"/>**. غير اسم الملاحظة لتسهيل التعرف عليها.
- **<Translate android="true" ids="shared_string_delete"/>**. يزيل الملاحظات بشكل دائم من التطبيق.


## ويدجت التسجيل {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الويدجت](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

يقوم [ويدجت الملاحظات الصوتية/المرئية](../widgets/info-widgets.md#audiovideo-notes-widget) بإنشاء الملاحظات والصور وملفات الصوت والفيديو وربطها بموقعك الحالي. يحتوي الويدجت على عدة خيارات يمكن تعيينها كإجراء افتراضي يقوم به الويدجت عند لمس الشاشة.

إضافة ويدجت إلى الشاشة ضروري إذا كنت تفضل تجنب البحث عن الموقع الجغرافي على الخريطة وربط الملاحظات بموقعك الافتراضي الحالي. لإضافة أو تخصيص ويدجت، اتبع الخطوات أدناه:

1. اذهب إلى:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. حدد **<Translate android="true" ids="map_widget_left"/>** أو **<Translate android="true" ids="map_widget_right"/>**.

3. انقر على **<Translate android="true" ids="map_widget_av_notes"/>**، وستفتح قائمة سياق الويدجت.

4. حدد الخيار الذي تفضل استخدامه افتراضيًا عن طريق النقر على الويدجت:

    - **<Translate android="true" ids="av_def_action_choose"/>** - فتح مجموعة من الخيارات.

    - **<Translate android="true" ids="av_def_action_audio"/>** - بدء تسجيل رسالة صوتية.

    - **<Translate android="true" ids="av_def_action_video"/>** - بدء تسجيل الفيديو.

    - **<Translate android="true" ids="av_def_action_picture"/>** - بدء التقاط الصور.

    ![الويدجت](@site/static/img/plugins/audio-video-notes/widget.png)

**استخدام أجهزة الإدخال الخارجية (*أندرويد*)**. إذا كنت تستخدم [جهاز إدخال خارجي](https://osmand.net/docs/user/map/interact-with-map#external-input-devices)، يمكنك بدء وإيقاف الملاحظات الصوتية/المرئية دون لمس الشاشة. للقيام بذلك، قم بتعيين إجراء "إضافة ملاحظة صوتية" أو "إضافة ملاحظة فيديو" إلى مفتاح:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

بمجرد التعيين، يعمل المفتاح كمفتاح تبديل:
- الضغطة الأولى تبدأ تسجيل ملاحظة صوتية أو فيديو (حسب الإجراء المحدد).
- الضغطة الثانية لنفس المفتاح توقف التسجيل.

عند إيقاف التسجيل عبر جهاز إدخال خارجي، لا يتم عرض قائمة السياق، مما يجعل استخدام OsmAnd في سيناريوهات خالية تمامًا من اليدين أسهل (على سبيل المثال، أثناء ركوب دراجة نارية أو القيادة).


## إدارة ملاحظات متعددة {#manage-multiple-notes}

### الإدارة في أماكني {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![ثلاثة إجراءات في قائمة أماكني لإضافة الصوت والفيديو](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

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

يمكنك مشاركة جميع الملاحظات بما في ذلك [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) الذي يحتوي على ملاحظات محددة كنقاط طريق على شاشة [أماكني](../personal/myplaces.md#audiovideo-notes) عن طريق النقر على زر المشاركة في القائمة السفلية. سيظهر مربع اختيار بجوار كل ملاحظة لتحديد ملاحظات معينة. يوجد مربعا اختيار فوق الملاحظات: *ملاحظات صوتية/مرئية حسب التاريخ* لتحديد جميع الملاحظات ومربع اختيار *المواقع*. يسمح لك مربع اختيار *المواقع* بإضافة ملف GPX منفصل مع الإحداثيات والبيانات.

تحتوي كل ملاحظة على وقت إنشائها، وكمية البيانات، وإذا كانت تسجيلاً، فوقت التسجيل، وبيانات الموقع، ويمكنك إضافة بيانات GPX.
تنسيقات الملفات المدعومة: صوت - **3gp**، فيديو - **mp4**، صورة - **jpg**.


### إظهار الكل على الخريطة {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![إظهار الملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

يمكن للملاحظات المعروضة على الخريطة أن تحكي قصتك، أين رأيت علامات، أي باب كنت بحاجة لفتحه، أين المخرج، المسار الأمثل، والمزيد. يمكنك إظهار الملاحظات [واحدة تلو الأخرى](#show-on-the-map) أو كلها مرة واحدة.

استخدم طبقة خريطة [التسجيل](../map/point-layers-on-map#-audio--video-points-android) لإظهار أو إخفاء جميع الملاحظات. إذا قمت بتشغيلها في قائمة [تكوين الخريطة](../map/configure-map-menu)، فإن طبقة التسجيل تعرض جميع الملاحظات على الخريطة.

![لا توجد ملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![الملاحظات على الخريطة](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## نقاط الطريق المنشأة من الملاحظات {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![الملاحظات ونقاط الطريق على الخريطة](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![نقاط الطريق على المسار](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

يتم إنشاء نقطة طريق عند إضافة ملاحظة صوتية أو فيديو أو صورة إلى مسار. توجد نقاط الطريق داخل المسار. إذا كان المسار مرئيًا، فإن نقاط طريقه تكون مرئية أيضًا. وبالتالي، يمكن أن تكون هذه الملاحظات مرئية على الخريطة كلها مرة واحدة أو فقط على مسار مرئي معين. في الحالة الأخيرة، يتم عرض الملاحظات كنقاط طريق للمسار.

:::note
إذا تم تصدير المسار، فلا يمكن عرض نقاط الطريق أو تشغيلها، لأن الملاحظات الصوتية/المرئية/الصور يتم تخزينها على الجهاز فقط، ومتاحة لك فقط على هذا الجهاز.
:::


### إنشاء نقاط الطريق {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة نقطة طريق إلى المسار يدويًا](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

هناك طريقتان لإنشاء نقطة طريق: تلقائيًا ويدويًا.

1. **تلقائيًا**، يتم إنشاء نقطة طريق، في حال قمت بتدوين ملاحظة صوتية/مرئية/صورة أثناء تقدم [تسجيل الرحلة](../plugins/trip-recording)، بغض النظر عن الموقع الجغرافي إذا كانت مرتبطة بالموقع الحالي أو أي مكان، وبالتالي، بغض النظر عن الوسيلة المستخدمة لذلك: سواء كانت [الويدجت](../widgets/info-widgets#audiovideo-notes-widget)، أو [قائمة السياق](../map/map-context-menu#-audiovideo-note).

    تحصل جميع نقاط الطريق المضافة تلقائيًا على اسم معين تلقائيًا. يتم إنشاء الاسم، وفقًا للتنسيق المحدد أدناه لملف صوت/فيديو/صورة، وله [رابط قصير](https://wiki.openstreetmap.org/wiki/Shortlink). يوضح مثال نقاط الطريق في الشكل أعلاه نقاط طريق تم إنشاؤها تلقائيًا ويدويًا، حيث تم إنشاء الأربعة الأولى تلقائيًا، والأخيرة - يدويًا.

2. **يدويًا**، يتم إنشاء نقطة طريق عبر [قائمة السياق](../map/map-context-menu#-audiovideo-note)، على النحو التالي:

    - حدد الملاحظة الصوتية/المرئية/الصورة المطلوبة على الخريطة.
    - انقر على **إجراءات**، ثم انقر على **إضافة مسار**.
    - حدد المسار الذي تنوي إضافة نقطة طريق إليه.
    - يفتح مربع حوار *<Translate android="true" ids="quick_action_add_gpx"/>*، ويسمح لك بتعيين بعض الخصائص، مثل اسم نقطة الطريق، وأيقونة، ولون، وغيرها. بمجرد الانتهاء، انقر على **حفظ**.

:::info ملاحظة
يمكنك تحديد أسماء لكل نقطة طريق تم إنشاؤها يدويًا.
:::


### عرض نقاط الطريق {#view-waypoints}

- تتوفر نقطة الطريق للعرض كنقطة طريق على الخريطة وفي قائمة [نقاط الطريق لمسار معين](../map/tracks/track-context-menu.md#points--waypoints). لا يؤدي حذف نقطة الطريق إلى حذف الملاحظة الصوتية/المرئية/الصورة المقابلة.

- تتوفر ملاحظة صوتية أو فيديو أو صورة للعرض على الخريطة وفي قائمة الملاحظات الصوتية/المرئية في [أماكني](../plugins/audio-video-notes#view-in-my-places). لا يؤدي حذف الملاحظة الصوتية أو الفيديو أو الصورة إلى حذف نقطة الطريق المقابلة.

- على الخريطة، قد تكون نقطة الطريق والملاحظة الصوتية أو الفيديو أو الصورة مرئية أو غير مرئية على الخريطة. يتم تحديد ذلك من خلال الطبقة التي يتم تبديلها حاليًا للملف الشخصي.

- عندما لا يتم تبديل طبقة المسارات ولا طبقة التسجيل، يمكن عرض كل من نقاط الطريق والملاحظات عن طريق النقر عليها في أماكني. في هذه الحالة، تعرض الخريطة مواقع الملاحظة التي تم النقر عليها، أو على التوالي، مواقع جميع نقاط الطريق للمسار الذي تم النقر عليه.

| مرئي | الطبقة المفعلة |
| --- | --- |
| نقاط الطريق فقط | طبقة المسارات |
| نقاط الطريق والملاحظات | طبقة المسارات والتسجيل |
| الملاحظات فقط | طبقة التسجيل |
| لا شيء | لا طبقة المسارات ولا طبقة التسجيل. |


### ملف GPX مع نقاط الطريق {#gpx-file-with-waypoints}

![نقطة طريق في ملف GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

إذا كنت تعرض ملف GPX للمسار المضاف مع نقطة طريق من ملاحظة صوتية/مرئية/صورة، فستكون نقطة الطريق كما في المثال أدناه، مع الإحداثيات، والطابع الزمني، واسم الملاحظة المقابلة، والرابط القصير.


## متفرقات {#miscellaneous}

### تفاصيل اسم الملف {#file-name-details}

تنشئ إضافة <Translate android="true" ids="audionotes_plugin_name"/> ملفات صوت/فيديو/صورة بالتنسيق التالي:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

حيث يحدد `SHORTLINK_LOCATION` خط العرض وخط الطول للموقع الذي يرتبط به الملف. يتم ترميز `SHORTLINK_LOCATION`، وفقًا لمواصفات [الرابط القصير](https://wiki.openstreetmap.org/wiki/Shortlink).


### التصدير إلى JOSM {#export-to-josm}

![الملاحظات الصوتية والمرئية في Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

لعرض كل شيء لاحقًا، يمكنك تصدير المسار مع جميع ملفات الوسائط وعرضها في [محرر JOSM](https://josm.openstreetmap.de/). لاحظ أنه يجب وضع ملفات الوسائط في المجلد المناسب. يمكنك معرفة أي واحد بالنقر على الفيديو. سيظهر إشعار يوضح أنه لا يوجد ملف متاح، ضع الملف الصحيح في المجلد المحدد.


## مقالات ذات صلة {#related-articles}

- [التفاعل مع الخريطة](../../user/map/interact-with-map.md)
- [الإعدادات العامة](../../user/personal/global-settings.md)
- [الخرائط المتجهية (أنماط الخرائط)](../../user/map/vector-maps.md)