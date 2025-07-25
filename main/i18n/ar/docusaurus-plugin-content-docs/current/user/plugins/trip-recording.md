---
source-hash: cbb0cf4d59d01946eeabdc12f73feec5aec68b5a7434c67e7ceb082189d83310
sidebar_position: 15
title:  تسجيل الرحلات
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

**مكوّن تسجيل الرحلات الإضافي** هو أداة أساسية لالتقاط مساراتك، تحركاتك، وتمارينك. لا تمكنك هذه الميزة من تسجيل رحلاتك فحسب، بل تتيح أيضًا إعادة استخدام مساراتك وتعديلها وتحديثها ومشاركتها بسهولة مع الآخرين.

باستخدام *مكوّن تسجيل الرحلات الإضافي*، يمكنك إنشاء مسارات جديدة، وعرض المسارات المسجلة مباشرة على الخريطة، وإدارة السجلات الموجودة. يوفر رؤى قيمة حول رحلاتك، مثل السرعة، وتغيرات الارتفاع، وتفاصيل التضاريس، والبيانات من المستشعرات الخارجية. يسجل المكوّن الإضافي مسارك، مما يتيح تحليلًا مفصلًا ومشاركة بعد رحلتك.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Recorded trip in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recorded trip in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## معلمات الإعداد المطلوبة {#required-setup-parameters}

لبدء تسجيل المسارات، تحتاج إلى إجراء الإعدادات التالية:

1. [تفعيل](../plugins/index.md#enable--disable) **مكوّن تسجيل الرحلات الإضافي**.
2. [تكوين](#recording-settings) **إعدادات التسجيل** لـ [الملف الشخصي](../personal/profiles.md) المطلوب.
3. [إضافة](#widgets) **أدوات تسجيل الرحلات** إلى الشاشة (اختياري).
4. [إدارة](../map/tracks/appearance.md) المسارات على الخريطة (اختياري).


## تسجيل مسار جديد {#new-track-recording}

![Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

باستخدام مكوّن تسجيل الرحلات الإضافي في OsmAnd، يمكنك بسهولة بدء تسجيل مسارك باستخدام مجموعة متنوعة من الخيارات المريحة. إليك كيفية بدء رحلتك:

- [أداة المسافة/بدء-إيقاف](#distance-start-stop) — استخدمها لتفعيل التسجيل.

- [<Translate android="true" ids="start_recording"/>](../personal/myplaces.md#tracks) — اضغط على الزر في علامة التبويب *القائمة الرئيسية <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.

- أزرار [الإجراء السريع](../widgets/quick-action.md#add-and-delete-actions) — لبدء تسجيل رحلة، انتقل إلى *القائمة → تكوين الشاشة → الأزرار المخصصة → الإجراء السريع → إضافة إجراء → أماكني* واختر [بدء / إيقاف مؤقت: تسجيل الرحلات](../widgets/quick-action.md#my-places).

- *أندرويد فقط*:
    - انتقل إلى *القائمة الرئيسية <Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.

    - [إشعار النظام](#notifications) — استخدمه في منطقة الإشعارات بجهازك.

    - [مشغل التطبيقات](#launcher-android) — استخدمه لبدء التسجيل.

**التوصيات:**

- [الموقع الدقيق](../start-with/first-steps.md#permission-to-access-the-location) — لتسجيل المسار بدقة، تأكد من أن OsmAnd لديه هذا الإذن.

- [استكشاف الأخطاء وإصلاحها](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) — قد تقوم **أجهزة iOS** أحيانًا **بتعليق أو إيقاف التطبيقات** مؤقتًا من العمل في الخلفية، مما قد يقطع تسجيل المسار.

- **مصدر الموقع** (*أندرويد فقط*) — اضبط الإعدادات في OsmAnd لاختيار مزود GPS الأنسب للتسجيلات الدقيقة. [تعرف على المزيد هنا](../personal/global-settings.md#location-source).


### بدء حوار {#start-a-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

يفتح مربع حوار البدء، إذا تم تمكين خيار **<Translate android="true" ids="show_start_dialog"/>** في قسم الإعدادات بمربع حوار البدء.

![Start recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

يفتح مربع حوار البدء، إذا لم يتم تشغيل خيار **<Translate ios="true" ids="track_interval_remember"/>**.

![Start recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **فترة التسجيل** (*أندرويد/iOS*). يتحكم هذا الإعداد في عدد مرات طلب التطبيق للبيانات من مستشعر GPS لتحديد نقاط جديدة على مسارك. يتيح لك تعديل الفترة الموازنة بين تفاصيل المسار واستهلاك البطارية. ستؤدي الفترة الأقصر إلى مسارات أكثر تفصيلاً ولكن استهلاكًا أعلى للبطارية، بينما توفر الفترة الأطول البطارية ولكنها تقلل من دقة المسار.

- **أيقونة الخط** (*أندرويد*). اضغط على هذه الأيقونة للوصول إلى [خيارات مظهر المسار](../map/tracks/appearance.md). هنا، يمكنك تخصيص كيفية ظهور مسارك على الخريطة، بما في ذلك لون الخط، وسمكه، ونمطه. بمجرد حفظ مسار بمظهر مخصص، سيتم الاحتفاظ بهذه الإعدادات للتسجيلات المستقبلية، مما يضمن الاتساق في كل مرة تقوم فيها بعرض المسار أو إعادة تمكينه.

- **قائمة الإعدادات** (*أندرويد*). الوصول إلى هذه القائمة لضبط تفضيلات التسجيل الخاصة بك بدقة. للحصول على نظرة عامة مفصلة، ارجع إلى قسم [إعدادات تسجيل الرحلات](#recording-settings).

- **تذكر اختياري** (*iOS*). عند التمكين، يبدأ تسجيل المسار تلقائيًا، دون المطالبة بإعدادات أو تأكيد إضافي. إذا كنت ترغب في تغيير إعدادات التسجيل قبل بدء مسار جديد، أعد تشغيل مكوّن تسجيل الرحلات الإضافي لإعادة ظهور قائمة الإعدادات.


### المشغل (أندرويد) {#launcher-android}

![Icon's context menu](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

يمكنك بدء تسجيل مسار جديد بسرعة مباشرة من شاشة جهاز أندرويد الخاص بك باستخدام قائمة السياق لأيقونة تطبيق OsmAnd.

- **اضغط مطولاً** على أيقونة تطبيق OsmAnd لفتح قائمة السياق، حيث يمكنك العثور على خيار **بدء التسجيل**.

- اضغط على خيار **بدء التسجيل** لتشغيل تطبيق OsmAnd مع عرض [إعدادات تسجيل المسار](#overview-screen) على الشاشة.

- **اضغط مطولاً** على خيار **بدء التسجيل** في قائمة سياق أيقونة التطبيق، لإضافة اختصار للوصول السريع.

أثناء نشاط تسجيل المسار، ستظهر شارة إشعار في زاوية أيقونة تطبيق OsmAnd، تشير إلى أن التسجيل قيد التقدم. لمزيد من التفاصيل حول إدارة هذا الإشعار، راجع قسم [الإشعارات](#notifications).


## تسجيل المسار الحالي {#current-track-recording}

لـ *إيقاف / حفظ / إيقاف مؤقت*:

- لـ **إيقاف** التسجيل، اضغط على الزر المقابل في مربع حوار [أداة المسافة/بدء-إيقاف](#distance-start-stop).

- (*أندرويد فقط*) لـ **إيقاف** التسجيل، اضغط على عنصر قائمة "تسجيل الرحلات" الرئيسية.

- لـ **إيقاف** أو **حفظ** مسار قيد التسجيل، انتقل إلى *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*علامة التبويب <Translate android="true" ids="shared_string_gpx_files"/>*](../personal/myplaces.md#tracks) واضغط على الزر المناسب في حقل *المسار قيد التسجيل حاليًا*.

- لـ **حفظ، إيقاف مؤقت، بدء** جزء جديد، أو **إنهاء** التسجيل، استخدم أزرار [الإجراء السريع](../widgets/quick-action.md#add-and-delete-actions). انتقل إلى *القائمة → تكوين الشاشة → الأزرار المخصصة → الإجراء السريع → إضافة إجراء → [أماكني](../widgets/quick-action.md#my-places)* وأضف زرًا واحدًا أو أكثر من أزرار الإجراء السريع.

- (*أندرويد فقط*) لـ **إيقاف مؤقت** أو **حفظ** مسار قيد التسجيل، استخدم [إشعار النظام](#notifications) في منطقة الإشعارات بجهازك.<br/><br/> ![stop-save-pause](@site/static/img/plugins/trip-recording/stop-save-pause_andr.png)


### شاشة النظرة العامة {#overview-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![overview](@site/static/img/plugins/trip-recording/overview_screen_graphs_andr.png)  ![overview](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finish recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)  ![Finish recording in iOS](@site/static/img/plugins/trip-recording/overview_screen_graphs_1_ios.png)

</TabItem>

</Tabs>

في OsmAnd، تتعامل إصدارات **أندرويد** و**iOS** مع واجهة تسجيل المسار بشكل مختلف قليلاً. في أندرويد، ستجد قائمة مخصصة لسياق *تسجيل المسار*، بينما في iOS، يتم تبسيط ذلك في قائمة سياق *المسار قيد التسجيل حاليًا*.

أثناء تسجيل المسار، يتم إنشاء رسوم بيانية ديناميكية، توفر بيانات مرئية في الوقت الفعلي حول رحلتك. يمكن أن تعكس هذه الرسوم البيانية معلومات للمسار بأكمله أو لجزء محدد فقط، اعتمادًا على مستوى التكبير الخاص بك.
إليك ما يمكنك العثور عليه فيها:

- **قيم البيانات**. على الجانب الأيمن من الرسم البياني توجد القيم ***الأعلى***، و***الأدنى***، و***المتوسطة*** للقسم المرئي من المسار.

- **رسم بياني للمعلومات الرئيسية**:
    - ***أندرويد***. بالنسبة لـ ***المحور Y*** على الرسم البياني، يمكنك تحديد *ما يصل إلى معلمتين* من جميع البيانات المتاحة مثل *الارتفاع*، و*الميل*، و*السرعة*، و[معلومات المستشعر الخارجي](../plugins/external-sensors.md#trip-recording). بالنسبة لـ ***المحور X***، حدد لعرض إما *المسافة*، أو *الوقت*، أو *وقت اليوم*.
    - ***iOS***. يتم تنظيم المعلمات في علامات تبويب *نظرة عامة*، و*الارتفاع*، و*السرعة* مع القيم المناسبة للمحور Y و*المسافة* للمحور X.

- **الإحصائيات**. بالنسبة لأندرويد، يعرض مجموعة ثابتة من بيانات الإحصائيات مستقلة عن إعدادات الرسم البياني: *المسافة*، *المدة الزمنية*، *الصعود*، *النزول*، *متوسط السرعة*. بالنسبة لـ iOS، تحتوي كل علامة تبويب، نظرة عامة، الارتفاع، والسرعة، على مجموعة بيانات مختلفة.

للحصول على عرض أكثر تفصيلاً، يمكنك **تغيير مقياس الرسم البياني**:

- استخدم [إيماءة الإصبعين](../map/interact-with-map.md#gestures) للتكبير أو التصغير والتركيز على فترات محددة.
- اضغط على أي نقطة في الرسم البياني لعرض علامة توضح القيم الدقيقة لذلك الموقع.

| |
| ------------- |
| علامة التبويب **نظرة عامة** في iOS (بالنسبة لأندرويد، معلمات المحور Y هي *الارتفاع*، *السرعة*، ومعلمة المحور X هي *المسافة*). تعرض هذه العلامة التبويب رسمًا بيانيًا يوضح التغيرات في السرعة والارتفاع على طول المسار، وتفاصيل المسار الرئيسية. بيانات المسار لـ iOS: *المسافة*، *المدة الزمنية*، *وقت البدء*، و*وقت الانتهاء*. يمكنك رؤية كيفية عرض ذلك في إصدارات أندرويد وiOS أدناه. |
| ![data](@site/static/img/plugins/trip-recording/graph_overview_andr.png)  ![data](@site/static/img/plugins/trip-recording/graph_overview_ios.png) |
| علامة التبويب **الارتفاع** في iOS (بالنسبة لأندرويد، معلمات المحور Y هي *الارتفاع*، *الميل*، ومعلمة المحور X هي *المسافة*). تركز هذه العلامة التبويب على ملف الارتفاع للمسار المسجل، مما يوفر رؤى حول تغيرات الارتفاع ودرجات التضاريس. المقاييس الرئيسية لـ iOS تشمل: *متوسط الارتفاع*، *نطاق الارتفاع*، *الصعود*، و*النزول*. توضح الرسوم البيانية أدناه الاختلافات بين واجهات أندرويد وiOS. |
| ![data](@site/static/img/plugins/trip-recording/graph_altitude_andr.png)  ![data](@site/static/img/plugins/trip-recording/graph_altitude_ios.png) |
| علامة التبويب **السرعة** في iOS (بالنسبة لأندرويد، معلمة المحور Y هي *السرعة* ومعلمة المحور X هي *المسافة*). تسلط علامة التبويب "السرعة" الضوء على البيانات المتعلقة بالسرعة على طول المسار. بالنسبة لـ iOS، تتضمن معلومات مثل *متوسط السرعة*، *السرعة القصوى*، *وقت الحركة*، و*المسافة المصححة*. تعرض لقطات الشاشة أدناه كيفية عرض هذه البيانات على كلا المنصتين. |
| ![data](@site/static/img/plugins/trip-recording/graph_speed_andr.png)  ![data](@site/static/img/plugins/trip-recording/graph_speed_ios.png) |
| بالنسبة لـ **أندرويد**، يمكنك إنشاء المزيد من التوليفات لبيانات المحور Y المتاحة وقيم المحور X. |
| ![data](@site/static/img/plugins/trip-recording/graph_y-x-combinations_andr.png) |

:::info
لمزيد من التفاصيل، يمكنك استكشاف [**قائمة سياق المسارات**](../map/tracks/track-context-menu.md#options)، حيث يمكنك إدارة خيارات متنوعة متعلقة بالمسار مثل إعادة التسمية، أو الحذف، أو إضافة نقاط طريق. لضبط كيفية ظهور المسارات على الخريطة، قم بزيارة قسم [**المظهر**](../map/tracks/appearance.md). إذا كنت ترغب في إضافة نقاط طريق محددة إلى مسارك الحالي، تحقق من دليل [**نقاط المسار**](../map/tracks/track-context-menu.md#points--waypoints). لأي تعديلات، مثل إعادة تسمية مسار، استخدم علامة التبويب [**الخيارات**](https://osmand.net/docs/user/map/track-context-menu#options) ضمن قائمة سياق المسارات.
:::


### إظهار على الخريطة {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configure map tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

إدارة المسارات المرئية على خريطتك باستخدام أحد الخيارين. انتقل إلى *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>* *→* [*علامة التبويب <Translate ios="true" ids="shared_string_gpx_tracks"/>*](../map/tracks/index.md#my-places) وقم بتمكين خيار *إظهار على الخريطة* لأي مسار تريد عرضه أو إخفائه. بدلاً من ذلك، يمكنك الانتقال إلى *<Translate android="true" ids="shared_string_menu,configure_map"/>* *→* [*<Translate android="true" ids="shared_string_gpx_files"/>*](../map/tracks/index.md#configure-map) لضبط رؤية جميع مساراتك بسرعة في مكان واحد.


### ملف GPX المسجل {#recorded-gpx-file}

يلتقط OsmAnd رحلتك في [ملف GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) منظم، باستخدام تسلسل هرمي من *ملف > مسار > أجزاء > نقاط*. إليك كيفية عمله:

- تمثل **النقاط** لحظات فردية من مسارك المسجل، وكل منها معلمة بسمات مثل الإحداثيات، والسرعة، والارتفاع، والاتجاه.
- يتم تجميع هذه النقاط لتشكيل **مسارات**، والتي تمثل مسارك بالكامل.
- إذا كان هناك فجوة في التسجيل (على سبيل المثال، إذا تم إيقاف التتبع مؤقتًا)، فإن النقطة التالية بعد الفاصل تبدأ **جزءًا** جديدًا، مما يشير إلى الفصل في رحلتك.
- يتم تمثيل كل من **الأجزاء** و**المسارات** بصريًا بأيقونات *البدء* و*الانتهاء* على الخريطة.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| المعلمة | الوصف |
|-----------------|----------------|
| `trkpt` | **نقطة المسار** تمثل موقعًا جغرافيًا محددًا تم اكتشافه أثناء نشاطك. تتضمن كل نقطة مسار إحداثيات خطوط الطول والعرض، وتشكل أساس مسارك المسجل. |
| `trkseg` | **جزء المسار** يجمع نقاط المسار المتتالية معًا، مفصولة بفواصل في النشاط، مثل التوقفات المؤقتة أو التوقفات. يساعد هذا في التمييز بين الحركة المستمرة والفترات الخاملة ضمن تسجيل واحد. |
| `lat` | **خط العرض** يشير إلى الموضع الشمالي-الجنوبي لنقطة على سطح الأرض. وهو نصف زوج الإحداثيات المستخدم لتحديد موقعك بدقة. |
| `lon` | **خط الطول** يحدد الموضع الشرقي-الغربي، مكملًا خط العرض، لتحديد موقع نقطة على الكرة الأرضية بدقة. يحدد خط العرض وخط الطول معًا موقعك الجغرافي الدقيق. |
| `ele` | **الارتفاع** يقيس ارتفاع نقطة المسار فوق مستوى سطح البحر، مسجلاً بالمتر. يمكن أن يكون هذا مفيدًا لتتبع تغيرات الارتفاع أثناء أنشطتك، مثل المشي لمسافات طويلة أو ركوب الدراجات. |
| `time` | **الطابع الزمني** يسجل التاريخ والوقت بالضبط عند تسجيل نقطة المسار. يتيح لك ذلك تتبع مدة وتوقيت نشاطك بدقة. |
| `hdop` | **تخفيف الدقة الأفقي (HDOP)** هو مقياس لدقة نظام تحديد المواقع العالمي (GPS)، ويعكس الخطأ المحتمل في الموقع بسبب مواقع الأقمار الصناعية. على عكس HDOP القياسي، تستخدم مسارات OsmAnd GPX هذه القيمة لتمثيل الدقة الأفقية بالمتر. يرجى ملاحظة أن هذا التنفيذ يختلف عن معايير HDOP النموذجية. [تعرف على المزيد](https://github.com/osmandapp/Osmand/issues/3445). |
| `speed` | **السرعة** تسجل معدل حركتك بالمتر في الثانية. توفر رؤية حول وتيرتك خلال أجزاء مختلفة من نشاطك. |
| `heading` | **الاتجاه** يشير إلى الاتجاه الذي يشير إليه مقدمة مركبتك أو جهازك، ويقاس بالدرجات. وهو يختلف عن المسار، وهو المسار الفعلي للحركة. يمكن أن تحدث اختلافات بسبب عوامل خارجية مثل الرياح، أو التيارات، أو ظروف الطريق. [المزيد عن الاتجاه](https://en.wikipedia.org/wiki/Heading_(navigation)). |
| `speed_sensor` | **السرعة** من [المستشعرات الخارجية](../plugins/external-sensors.md) تلتقط البيانات من المستشعرات المتصلة، مما يوفر معلومات سرعة أكثر دقة، مفيدة بشكل خاص عند ركوب الدراجات. لمزيد من التفاصيل، ارجع إلى [وثائق تنسيق ملف GPX](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `cadence` | **السرعة الإيقاعية** تقيس عدد دورات الدواسة في الدقيقة، مسجلة باستخدام [المستشعرات الخارجية](../plugins/external-sensors.md). وهذا مفيد بشكل خاص لراكبي الدراجات الذين يهدفون إلى مراقبة وتحسين كفاءة دواساتهم. [اقرأ المزيد](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `power` | **قوة الدراجة** تحدد كمية الطاقة المتولدة أثناء الدواسة، الملتقطة من [المستشعرات الخارجية](../plugins/external-sensors.md). وهو مقياس أساسي لراكبي الدراجات الجادين الذين يرغبون في قياس أدائهم. [تعرف على المزيد](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `atemp` | **درجة حرارة الهواء** تسجل درجة حرارة الهواء المحيط أثناء نشاطك، وتقاس باستخدام [المستشعرات الخارجية](../plugins/external-sensors.md). لاحظ أن درجة حرارة الماء غير مدعومة. [التفاصيل هنا](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |
| `hr` | **معدل ضربات القلب** يراقب عدد ضربات قلبك في الدقيقة، باستخدام بيانات من [المستشعرات](../plugins/external-sensors.md) المتصلة. يمكن أن تكون هذه المعلومات حيوية لتتبع أداء القلب والأوعية الدموية أثناء التمارين. [اكتشف المزيد](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data). |


## إعدادات التسجيل {#recording-settings}

قبل البدء في تتبع رحلاتك، تحتاج إلى تكوين **مكوّن تسجيل الرحلات الإضافي** بشكل صحيح للحصول على الأداء الأمثل.

- **إعدادات خاصة بالملف الشخصي**. يمكن أن يكون لكل ملف شخصي في التطبيق إعدادات تسجيل رحلات فريدة خاصة به. يتيح لك هذا تخصيص سلوك التسجيل بدقة بناءً على نشاطك، مثل القيادة، أو ركوب الدراجات، أو حتى المشي الشمالي، والتي قد تتطلب تكوينات مختلفة.

- **تخصيص معلمات التسجيل**. يمكن أن تختلف إعدادات التسجيل اعتمادًا على كيفية تحركك. على سبيل المثال، قد تتطلب القيادة لمسافات طويلة تردد تسجيل أقل، بينما يمكن أن تستفيد المشي لمسافات طويلة أو المشي من تحديثات أكثر تكرارًا.

- **بيانات الموقع الدقيقة**. لضمان أن تكون تسجيلاتك سلسة وقابلة للاستخدام في المستقبل، يمكنك تخصيص طريقة التقاط نقاط الموقع. يمكن أن يشمل ذلك ضبط تردد التسجيل، أو تنسيق بياناتك (مثل عدد النقاط لكل وحدة مسافة)، أو المسافة بين النقاط المسجلة.

- **الإعدادات العامة**. يتم تكوين إعدادات تسجيل الرحلات لكل ملف شخصي، والتي يمكنك إدارتها في [الإعدادات](../personal/global-settings.md) العامة للتطبيق. قبل تخصيص مكوّن تسجيل الرحلات الإضافي، حدد الملف الشخصي الذي تريد تكوينه من قسم [الملفات الشخصية](../personal/profiles.md). من هناك، انتقل إلى إعدادات الملف الشخصي للوصول إلى خيارات تسجيل الرحلات.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/recording_sett_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| المعلمة | الوصف |
|---|---|
| **حوار تحسين البطارية** (*أندرويد*) | يفتح [إعدادات تحسين البطارية في أندرويد](#battery-optimization). اضغط على *لا تسأل مرة أخرى* إذا كنت لا تريد أن يتم سؤالك مرة أخرى. |
| **إظهار حوار البدء** (*أندرويد*) | يُمكّن حوارًا يمكنك من خلاله تكوين الإعدادات قبل بدء التسجيل. إذا تم تعطيله، يبدأ التسجيل تلقائيًا. |
| **تسجيل المسار تلقائيًا أثناء التنقل** | يسجل المسار تلقائيًا أثناء التنقل ويحفظه في علامة التبويب *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.<br />*ملاحظة*: يستهلك تسجيل المسار البطارية ويستمر في العمل في الخلفية، حتى لو كانت الشاشة مطفأة. |
| **فترة التسجيل العامة** | تحدد عدد مرات تسجيل نقاط الموقع. الافتراضي هو 5 ثوانٍ. يتم تمكينه باستخدام *أداة تسجيل الرحلات*. |
| **الحد الأدنى للإزاحة** | مرشح لتجنب تسجيل النقاط عندما تكون هناك حركة قليلة أو لا توجد حركة. يساعد في تقليل ضوضاء البيانات.<ul><li>*آثار جانبية*: قد لا يتم تسجيل فترات الراحة، وقد يتم تجاهل الحركات الصغيرة. يمكن أن يقلل هذا من بيانات ما بعد المعالجة ولكنه قد يمنع أيضًا تسجيل أخطاء GPS.</li><li>*توصية*: اضبط الإزاحة على 5 أمتار إذا كنت تريد تفاصيل ثانوية أقل في تسجيلاتك.</li></ul> |
| **الحد الأدنى للدقة** | يقوم بتصفية نقاط الموقع التي تقل عن حد أدنى للدقة، كما أبلغ عنه الجهاز.<ul><li>*آثار جانبية*: قد تكون النقاط في المناطق ذات الإشارة الضعيفة (تحت الجسور، الأشجار، بين المباني، أو في بعض الظروف الجوية) مفقودة.</li><li>*توصية*: إذا كنت غير متأكد، فقد يكون من الأفضل تعطيل هذا المرشح لتجنب فقدان البيانات.</li></ul><details><summary>*ملاحظة*</summary>افترض أن نظام تحديد المواقع العالمي (GPS) قد تم إيقاف تشغيله قبل التسجيل مباشرة. في هذه الحالة، قد تكون النقطة الأولى المقاسة ذات دقة منخفضة، لذلك من الأفضل الانتظار قليلاً قبل تسجيل النقطة أو تسجيل أفضل 3 نقاط متتالية.</details> |
| **الحد الأدنى للسرعة** | يحدد عتبة لتجاهل النقاط المسجلة تحت سرعة معينة.<ul><li>*آثار جانبية*: الأقسام التي تقل فيها السرعة عن عتبة محددة لن يتم تسجيلها.</li><li>*توصية*: استخدم مرشح *الحد الأدنى للإزاحة* بدلاً من ذلك، حيث يمكن أن يعطي نتائج أفضل دون فقدان بيانات مهمة.</li></ul><details><summary>*ملاحظة*</summary>حاول استخدام اكتشاف الحركة عبر مرشح الحد الأدنى للإزاحة (B) أولاً، فقد ينتج عنه نتائج أفضل، وستفقد بيانات أقل. إذا ظلت مساراتك صاخبة عند السرعات المنخفضة، فحاول استخدام قيم غير صفرية هنا. يرجى ملاحظة أن بعض القياسات قد لا تبلغ عن أي قيمة سرعة على الإطلاق (بعض الطرق القائمة على الشبكة)، وفي هذه الحالة لن تسجل أي شيء.<br/><br/>التحقق من السرعة > 0: معظم شرائح GPS تبلغ عن قيمة سرعة فقط إذا قررت الخوارزمية أنك في حركة، ولا شيء إذا لم تكن كذلك. وبالتالي، فإن استخدام إعداد > 0 في هذا المرشح يستخدم بطريقة ما اكتشاف الحركة لشريحة GPS. ولكن حتى لو لم يتم تصفيتها هنا في وقت التسجيل، فإننا لا نزال نستخدم هذه الميزة في تحليل GPX الخاص بنا لتحديد المسافة المصححة، أي أن القيمة المعروضة في هذا الحقل هي المسافة المسجلة أثناء الحركة.</details> |
| **تقسيم التسجيلات تلقائيًا بعد فجوة** | يقسم المسارات تلقائيًا بناءً على الفجوات الزمنية بين النقاط المسجلة. <ul><li>يبدأ جزء جديد بعد فجوة مدتها 6 دقائق.</li><li>يبدأ مسار جديد بعد فجوة مدتها ساعتان.</li><li>يبدأ ملف جديد عند تغيير التاريخ.</li><li>يمكن أن تنتج الفجوات عن فقدان إشارة GPS، أو السرعة المنخفضة، أو إعدادات التكوين.</li></ul><details><summary>*ملاحظة*</summary>يتم تحديد الفجوة عندما لا يتم تسجيل أي نقاط. قد يحدث هذا إما لأن الموقع لم يتم اكتشافه أو لأنه تم اكتشافه ولكن لم يتم تسجيله. يمكن أن تسبب عدة عوامل هذا، بما في ذلك إشارات GPS الضعيفة بسبب الظروف الجوية السيئة، أو انخفاض سرعة الحركة عن العتبة المحددة. في مثل هذه الحالات، حتى لو كان الجهاز قد يكتشف الموقع، فإنه لا يسجله.<br/><br/>يمكن أن تؤدي هذه الفجوات في البيانات المسجلة إلى إنشاء جزء جديد ضمن نفس المسار، أو مسار جديد في نفس الملف، أو ملف GPX جديد ضمن تسجيل واحد. يتم إدارة ذلك ضمن جلسة تسجيل بدء/إيقاف واحدة.</details> |
| **منع التسجيل المستقل** (*أندرويد*) | يوقف تسجيل المسار مؤقتًا عند إغلاق تطبيق OsmAnd (عبر *التطبيقات الحديثة*). لا يتم عرض مؤشر الخلفية في لوحة إشعارات أندرويد. |
| **تضمين الاتجاه** | يسجل الاتجاه (اتجاه الحركة) لكل نقطة في ملف GPX. الاتجاه هو الاتجاه الذي يواجهه الجهاز، والذي يمكن أن يختلف عن اتجاه الحركة بسبب عوامل خارجية مثل الرياح أو الانزلاق. |
| **النشاط** | يتيح لك الخيار تحديد [نوع نشاط](../map/tracks/track-context-menu.md#track-information-activity) مسبقًا لملف شخصي، والذي يتم تطبيقه تلقائيًا على جميع المسارات المسجلة. |
| **المستشعرات الخارجية** <br/> *يتطلب تمكين المكوّن الإضافي* | يتم تسجيل البيانات من [المستشعرات الخارجية](../plugins/external-sensors.md#trip-recording) مثل *<Translate android="true" ids="map_widget_ant_heart_rate"/>*، أو *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* في ملف GPX. لا يتم تسجيل بيانات *المسافة* على أندرويد أو iOS. يتم عرضها فقط عند تمكين [مكوّن المستشعرات الخارجية الإضافي](../plugins/external-sensors.md). |
| **مقاييس المركبة** (*أندرويد*) <br/> *يتطلب تمكين المكوّن الإضافي* | يتم تسجيل البيانات من [ماسح OBD-II](../plugins/vehicle-metrics.md#trip-recording) في ملف GPX. يتم عرضها فقط عند تمكين [مكوّن مقاييس المركبة الإضافي](../plugins/vehicle-metrics.md).<br />*ملاحظة*: يمكنك إضافة المقاييس التي تريد تسجيلها في ملف GPX من القائمة: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_trip_recording,shared_string_settings"/>* |
| **مجلد تخزين المسار** (*أندرويد*) | يحدد مكان تخزين المسارات المسجلة في علامة التبويب *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. تتضمن الخيارات تخزين جميع المسارات في مجلد Rec أو تنظيمها حسب الشهر، مثل Rec/yyyy-mm. |
| **الإشعار** | يتحكم في عرض [إشعار تسجيل الرحلات](#notifications) في منطقة إشعارات الجهاز الذي يسمح لك ببدء تسجيل الرحلات. |
| **التتبع عبر الإنترنت** (*أندرويد*) | يسمح بالتتبع في الوقت الفعلي لموقعك عن طريق إرسال النقاط المسجلة إلى عنوان URL محدد. تحدد فترة التتبع عدد مرات إرسال النقاط، ويخزن المخزن المؤقت للوقت النقاط عندما لا يكون هناك اتصال بالإنترنت.<details><summary>*ملاحظة*</summary>إذا تم تمكين هذا الخيار، وكان تسجيل المسار قيد التقدم، يتحول لون أداة المسافة/بدء-إيقاف (REC) إلى **الأخضر** بدلاً من **الأحمر**، مما يشير إلى أن كل نقطة مسجلة يتم إرسالها إلى عنوان URL محدد. يتيح لك حقل **عنوان الويب** إدخال عنوان URL باستخدام تنسيق المعلمات التالي:<ul><li>`lat={0}`: خط العرض</li><li>`lon={1}`: خط الطول</li><li>`timestamp={2}`: الطابع الزمني (وقت يونكس)</li><li>`hdop={3}`: تخفيف الدقة الأفقي</li><li>`altitude={4}`: الارتفاع</li><li>`speed={5}`: السرعة</li><li>`bearing={6}`: الاتجاه (اتجاه الحركة)</li><li>`eta={7}`: الوقت المقدر للوصول (وقت يونكس)</li><li>`etfa={8}`: الوقت المقدر لأول نقطة وسيطة أو نقطة النهاية (وقت يونكس)</li><li>`eda={9}`: المسافة المقدرة للوصول أو علامة (بالمتر)</li><li>`edfa={10}`: المسافة المقدرة لأول نقطة وسيطة أو نقطة النهاية (بالمتر)</li></ul>يمكنك تعيين **فترة التتبع** لتحديد عدد مرات إرسال نقاط الموقع، مع خيارات تتراوح من 0 ثانية إلى 5 دقائق. بالإضافة إلى ذلك، يحدد معلمة **المخزن المؤقت للوقت** المدة التي يتم فيها تخزين نقاط الموقع إذا لم يكن هناك اتصال بالإنترنت، مما يضمن حفظ البيانات وإرسالها عند استعادة الاتصال.</details> |
| **المسارات** | مرجع سريع للمجلد الذي يتم فيه حفظ المسارات في علامة التبويب *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*. |
| **إعادة تعيين إعدادات المكوّن الإضافي إلى الافتراضي** | يعيد تعيين جميع إعدادات تسجيل الرحلات للملف الشخصي الحالي إلى إعداداتها الافتراضية. |
| **النسخ من ملف شخصي آخر** (*أندرويد*) | ينسخ إعدادات تسجيل الرحلات من ملف شخصي إلى آخر. |


### تحسين البطارية {#battery-optimization}

<InfoAndroidOnly />

![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

تتيح لك هذه الميزة إدارة إعدادات تحسين البطارية لـ OsmAnd لضمان الوصول المتواصل إلى موقعك، حتى عندما يعمل التطبيق في الخلفية أثناء التنقل أو تسجيل المسار.

- **إعدادات تحسين البطارية**. يفتح إعدادات أندرويد، حيث يمكنك تعديل تفضيلات توفير البطارية لـ OsmAnd. [مزيد من التفاصيل هنا](../troubleshooting/general.md#optimizing-battery-consumption).
- **لا تسأل مرة أخرى**. يغلق مربع الحوار بشكل دائم، لذلك لن يظهر مرة أخرى.
- **إغلاق**. يغلق مربع الحوار مؤقتًا، والذي سيظهر مرة أخرى في المرة القادمة التي يحتاج فيها تحسين البطارية إلى الاهتمام.


### الإشعارات {#notifications}

![Trip Rec Notification](@site/static/img/plugins/trip-recording/trip_rec_notific_1_andr.png)  

إذا تم تمكين [الإشعار](#recording-settings) في إعدادات المكوّن الإضافي، فسيتم عرض إشعارات تسجيل الرحلات دائمًا في منطقة إشعارات النظام عندما يكون التسجيل نشطًا. يضمن هذا الإشعار عدم مقاطعة عملية التسجيل بواسطة النظام، ولا يمكن تعطيله أثناء التسجيل النشط.

- تفتح منطقة الإشعارات عند التمرير لأسفل من أعلى الشاشة وتغلق عند التمرير لأعلى. تخطرك هذه الرسائل بإجراءات مثل بدء/إيقاف تسجيل الرحلات، خاصة عندما يكون التسجيل التلقائي ممكّنًا أثناء التنقل.
- تظل الإشعارات مرئية بغض النظر عما إذا كان التطبيق يعمل في المقدمة، أو الخلفية، أو مغلقًا. يمكنك مسح الإشعار القديم يدويًا إذا لم تعد هناك حاجة إليه، ولكن هذا لن يوقف التسجيل الجاري.

**ملاحظة هامة**.

هذا السلوك مطلوب من قبل أندرويد لأي خدمة في المقدمة، مثل تسجيل الرحلات، لتظل مرئية لك.

- إذا تمت إزالة الإشعار، سيتوقف أندرويد عن التسجيل تلقائيًا. يمكنك استخدام إعداد [منع التسجيل المستقل](#recording-settings).
- يؤثر إعداد **الإشعار** في OsmAnd على ما إذا كان شريط الإشعارات يعرض اختصارًا لبدء التسجيل عندما لا يكون هناك تسجيل نشط. لا يتحكم في رؤية الإشعار أثناء التسجيل النشط.

**خيارات أندرويد إضافية**.

![Trip Rec Notification](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)

- في ***إعدادات أندرويد ← الإشعارات وشريط الحالة ← إشعارات شاشة القفل***، يمكنك إزالة OsmAnd من قائمة التطبيقات لمنع ظهور الإشعارات على شاشة القفل، وتجنب تنشيط الشاشة عن طريق الخطأ. لن يؤثر هذا على تسجيل المسار. ستظل الإشعارات تظهر في منطقة الإشعارات العادية.
- قد يظهر **OsmAnd** أيضًا ضمن ***الخصوصية ← الأذونات الخاصة ← تشغيل الشاشة***. إذا كنت ترغب في منع تشغيل الشاشة عند ظهور إشعار، حاول إزالة OsmAnd من هذه القائمة.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

**إشعار الشارة**.

![Trip Rec Notification](@site/static/img/plugins/trip-recording/trip_rec_notification_badge_andr.png)

تظهر شارة أيقونة التطبيق بجوار أيقونة OsmAnd عندما يكون تسجيل المسار نشطًا.

- تختفي هذه الأيقونة عند اكتمال تسجيل المسار. للتحقق مما إذا كان التسجيل نشطًا، يمكنك الانتقال إلى *القائمة → أماكني → علامة تبويب المسارات* أو النقر على الأداة لإدارة التسجيل.
- إذا لم يكن هناك تسجيل قيد التقدم ولا تزال الشارة معروضة، فقد يعني ذلك أن رسالة من OsmAnd قد تركت في لوحة إشعارات الجهاز.
- لتعطيل الشارات في إعدادات أندرويد، انتقل إلى *إعدادات الجهاز → التطبيقات → OsmAnd → الإشعارات* وقم بتعطيل خيار عرض الشارة لهذا التطبيق.


## الأدوات {#widgets}

تتيح لك الأدوات عرض معلومات رئيسية حول تسجيل المسار مباشرة على الشاشة، مثل *المسافة*، و*المدة*، و*الصعود*، و*النزول*.

لبدء استخدام *أدوات تسجيل الرحلات*، تحتاج إلى إجراء جميع الإعدادات التالية:

1. [تمكين المكوّن الإضافي](../start-with/first-steps.md#how-to-configure-plugins).
2. تكوين إعدادات تسجيل الرحلات لـ [الملف الشخصي](../personal/profiles.md) المطلوب.
3. إضافة **أدوات تسجيل الرحلات** الضرورية إلى الشاشة. لاحظ أن هذا التكوين **خاص بكل ملف شخصي**.


### إضافة أداة تسجيل {#add-recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → اختر لوحة → <Translate android="true" ids="map_widget_monitoring"/>*

![Adding Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → اختر لوحة → <Translate android="true" ids="map_widget_monitoring"/>*

![Adding Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

توفر [أداة تسجيل الرحلات](../widgets/info-widgets.md#trip-recording-widgets) طريقة سهلة لمراقبة حالة التسجيل والوصول السريع إلى إعدادات وتفاصيل التسجيل. يتم إضافة هذه الأداة تلقائيًا إلى شاشتك عند تمكين مكوّن تسجيل الرحلات الإضافي.

لتخصيص واجهتك، يمكنك إضافة أو إزالة أداة تسجيل الرحلات و[الأدوات الأخرى](../plugins/trip-recording#duration-uphill-downhill) من خلال قائمة تكوين الشاشة.


### المسافة (بدء-إيقاف) {#distance-start-stop}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Trip recording widget](@site/static/img/plugins/trip-recording/trip_rec_widgets_andr.png)
![Finish recording in Android](@site/static/img/plugins/trip-recording/distance_start_rec_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)

</TabItem>

</Tabs>

عند عرض الأدوات على الخريطة، يؤدي النقر على أي منها إلى الكشف عن تفاصيل المسار الإضافية ويسمح بالتفاعل مع التسجيل.
تعرض أداة *المسافة* المسافة الإجمالية لرحلتك المسجلة الحالية وتعمل كواجهة رئيسية لإدارة تسجيلاتك. يؤدي النقر عليها إلى الكشف عن [حوار تسجيل الرحلات](#start-a-dialog)، حيث يمكنك بدء التسجيل وإيقافه وعرض معلومات مفصلة حول مسارك.

- يتم إضافة الأداة تلقائيًا عند تمكين *مكوّن تسجيل الرحلات الإضافي*، ولكن يمكن إخفاؤها عبر [قائمة تكوين الشاشة](../widgets/configure-screen.md#configure-screen-menu).
- إذا تم تعطيل خيار *إظهار حوار البدء* في إعدادات مكوّن تسجيل الرحلات الإضافي، فإن النقر على الأداة النشطة سيظل يفتح مربع حوار *تسجيل الرحلات*، مما يتيح لك الوصول إلى خيارات ومعلومات إضافية.

بالإضافة إلى أداة *المسافة/بدء-إيقاف*، يتضمن **مكوّن تسجيل الرحلات الإضافي** ثلاث أدوات أخرى: *المدة*، و*الصعود*، و*النزول*. توفر هذه الأدوات معلومات إضافية حول رحلتك، مما يساعدك على تتبع التقدم في الوقت الفعلي.

| |
|-----------|
| **المسافة/بدء-إيقاف**. تعرض هذه الأداة مسافة تسجيل رحلتك الجارية. يتم إضافتها تلقائيًا عند تمكين مكوّن تسجيل الرحلات الإضافي، ولكن يمكنك إخفائها من خلال قائمة تكوين الشاشة. تتميز الأداة بثلاث حالات مميزة: *تسجيل*، و*متوقف مؤقتًا*، و*غير نشط*، تشير كل منها إلى الحالة الحالية لتسجيل رحلتك. |
| ![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png) |
| لفتح [حوار تسجيل الرحلات](#start-a-dialog) عند النقر على أداة غير نشطة، قم بتمكين خيار *إظهار حوار البدء* في إعدادات مكوّن تسجيل الرحلات الإضافي. إذا تم تعطيل الخيار، سيبدأ التسجيل فورًا بعد النقر على الأداة دون فتح الحوار. |


### المدة، الصعود، النزول {#duration-uphill-downhill}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

| |
|------------|
|**المدة**. تعرض الوقت الإجمالي لتسجيل الرحلة الحالي بالساعات والدقائق. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|
|**الصعود**. تعرض إجمالي الارتفاع التراكمي لتسجيل الرحلة الحالي. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**النزول**. تشير إلى إجمالي الهبوط المتراكم خلال تسجيل الرحلة الحالي. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

إذا كان لديك عدة أدوات مختارة — *المدة*، أو *الصعود*، أو *النزول* — يمكنك الوصول إلى نفس مربع الحوار لكل منها دون الحاجة إلى التبديل أو إغلاقه. تجعل هذه الواجهة الموحدة من السهل عرض وإدارة جميع المعلومات ذات الصلة بسلاسة.


## مقالات ذات صلة {#related-articles}

- [قائمة سياق الخريطة](../map/map-context-menu.md)
- [إظهار المسار على الخريطة](../map/tracks/index.md)
- [تحليل على الخريطة](../map/tracks/index.md#analyze-track-on-map)
- [قائمة سياق المسار](../map/tracks/track-context-menu.md)
- [التنقل حسب المسار](../navigation/setup/gpx-navigation.md)

### المشكلات الشائعة والحلول {#common-issues-and-solutions}

- تسجيل الرحلات لا يبدأ.
    - تأكد من تمكين **مكوّن تسجيل الرحلات الإضافي**: *القائمة → المكوّنات الإضافية → تسجيل الرحلات → تمكين*.
    - تحقق من صحة الإعدادات: *القائمة → تكوين الملف الشخصي → إعدادات المكوّن الإضافي → تسجيل الرحلات*.
    - إذا لم يبدأ التسجيل بعد، أعد تشغيل التطبيق وحاول مرة أخرى.

- تسجيل الرحلات يتوقف بشكل غير متوقع.
    - تحقق مما إذا كانت *إعدادات تحسين البطارية بجهازك* توقف التسجيل. قد توقف بعض الأجهزة نشاط الخلفية لتوفير الطاقة. انتقل إلى *إعدادات الجهاز → البطارية*.

- المسافة المسجلة لا تتطابق مع المسافة الفعلية.
    - تحقق من تمكين GPS ووجود إشارة نشطة.
    - قلل عتبة دقة GPS: *القائمة → تكوين الملف الشخصي → تسجيل الرحلات → الحد الأدنى للدقة*.

- المسارات المسجلة صاخبة. [(تحقق)](../troubleshooting/track-recording-issues.md#recorded-tracks-are-noisy).
- المسارات المسجلة بها فجوات. [(تحقق)](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps)
- كيفية تتبع المسافة المقطوعة. [(تحقق)](../troubleshooting/track-recording-issues.md#how-to-track-traveled-distance)

للحصول على استكشاف أخطاء إضافي، قم بزيارة: [استكشاف أخطاء تسجيل المسار وإصلاحها](https://osmand.net/docs/user/troubleshooting/track-recording-issues).

> *آخر تحديث: يناير 2025*