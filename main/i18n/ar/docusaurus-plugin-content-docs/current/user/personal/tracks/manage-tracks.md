---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
sidebar_position: 2
title:  إدارة المسارات
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

تُخزن جميع المسارات في OsmAnd في تبويب في *<Translate android="true" ids="shared_string_menu"/> ← <Translate android="true" ids="shared_string_my_places"/> ← <Translate android="true" ids="shared_string_gpx_tracks"/>*. يعالج OsmAnd ملف المسار بتنسيق [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format)، ولكن يمكن استيراد [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) و [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) وتحويلهما إلى GPX. اقرأ المزيد عن أنواع المسارات المختلفة في مقال [المسارات على الخريطة](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![نظرة عامة على إدارة المسارات في أندرويد](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على إدارة المسارات في iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## إنشاء مسار {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![تخطيط مسار تعديل-المسار-أندرويد](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار تعديل-المسار-iOS](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

يمكنك إضافة مسارات في OsmAnd بالطرق التالية:

١. **[استيراد](./manage-tracks.md#import--export-track)** مسار من مصدر خارجي.
٢. إنشاء مسار جديد في التطبيق باستخدام أداة **[تخطيط مسار](../../plan-route/create-route.md)**.
٣. تسجيل مسار في التطبيق باستخدام إضافة **[تسجيل الرحلة](../../plugins/trip-recording.md)**.
٤. إدخال نقاط متعددة بالإحداثيات وحفظها كمسار باستخدام أداة **[إدخال الإحداثيات](../../plan-route/coordinate-input.md)**.
٥. يمكنك أيضًا إضافة **نقاط الطريق** إلى مسار جديد عبر **[القائمة السياقية](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## إدارة المسارات {#manage-tracks}

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

تُعرض جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها تلقائيًا في مجلد [أماكني](../../personal/myplaces.md) في تبويب *المسارات*. وهي منظمة حسب المجلد أو معروضة في قائمة أسفلها.


### قائمة المسار {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *تبويب <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![القائمة السياقية لمسار في iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

لكل مسار، مثل المجلدات، قائمة تسمح لك بإدارة المسارات بكفاءة. إليك كيفية الوصول إليها:

- *أندرويد* - انقر على *قائمة الثلاث نقاط* في حقل المسار.
- *iOS* - انقر مطولاً على المسار المطلوب في القائمة.

توفر القائمة الإجراءات التالية:

- **إظهار/إخفاء على الخريطة** — يعرض أو يخفي المسارات المحددة على الخريطة، مما يمثل موقعها بصريًا.

- [فتح](../../map/tracks/index.md#configure-map) (*iOS*) — هذا الإعداد متاح في قائمة "تكوين الخريطة". يقع في *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*، ويسمح لك بالوصول إلى [القائمة السياقية للمسار المحدد](../../map/tracks/track-context-menu.md) عند النقر عليه.

- **المظهر** (*iOS*) — تخصيص [مظهر المسارات](../../map/tracks/appearance.md) ليناسب تفضيلاتك.

- **الملاحة** (*iOS*) — يبدأ [الملاحة](../../navigation/setup/gpx-navigation.md) على طول المسار المحدد.

- **تحليل على الخريطة** (*أندرويد*) / **تحليل** (*iOS*) — يفتح أداة [تحليل على الخريطة](../../navigation/setup/route-details.md#analyze-on-map) ضمن تفاصيل المسار لمزيد من التحليل.

- **مشاركة** — يتيح مشاركة المسار المحدد مع الآخرين.

- **رفع التعديلات إلى OSM** (*iOS*) — [رفع التغييرات](../../plugins/osm-editing.md#gps-track) التي أجريتها على المسار مباشرة إلى *OpenStreetMap*.

- **تعديل** (*iOS*) — استخدم أداة [تخطيط مسار](../../plan-route/create-route.md#modify-existing-gpx-track) لتعديل المسارات.

- **تكرار** (*iOS*) — ينشئ نسخة من المسار المحدد.

- **إعادة تسمية** — تغيير اسم المسار المحدد لتنظيم أفضل.

- **نقل** — يسمح لك بنقل المسار المحدد إلى مجلد مختلف.

- **تصدير** (*أندرويد*) — انتقل إلى تبويب *القائمة ← الإعدادات ← الإجراءات* لتصدير جميع المسارات من مجلد.

- **حذف** — إزالة المسار المحدد الذي لم تعد بحاجة إليه بشكل دائم.


### بحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة البحث عن المسارات في أماكني بأندرويد](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة البحث عن المسارات في أماكني بـ iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

انقر على زر &#x1F50D; في أعلى شاشة الجهاز لفتح قائمة فرز قائمة المسارات.  

متاح:

- البحث حسب اسم المسار.
- [الفرز حسب](#sort-by) لبحث أفضل إذا كنت لا تتذكر العنوان.
- [تصفية](./smart-folder.md#search-filter) (*أندرويد فقط*) إذا كنت بحاجة إلى خصائص محددة للمسار.


### وضع التحديد {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة فرز المسارات في أماكني بأندرويد](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسارات أماكني في iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

يوفر عنصر قائمة **تحديد** خيارات لإدارة المجلدات والمسارات. تتيح لك هذه الميزة تحديد مسارات أو مجلدات مسارات متعددة. يمكنك أيضًا تحديد جميع المسارات والمجلدات عن طريق النقر على زر **تحديد الكل** الخاص.

بمجرد تحديد اختيارك، يتم توفير الخطوات التالية:  

- **إظهار على الخريطة** — باستخدام هذه الميزة، يمكنك عرض المسارات المحددة على الخريطة لفهم موقعها وعلاقتها ببعضها البعض بشكل أفضل.

- **مشاركة** (*أندرويد*) / **تصدير** (*iOS*) — إذا كنت ترغب في مشاركة البيانات المحددة مع مستخدمين آخرين أو حفظها في خدمة سحابية، فإن ميزة *المشاركة/التصدير* تتيح لك إرسال المسارات والمجلدات باستخدام طرق مشاركة مختلفة.

- **الرفع إلى OpenStreetMap** — يمكنك إرسال المسارات المحددة إلى OpenStreetMap، مما يساهم في تطوير وتحسين البيانات.

- **نقل** — يمكنك تنظيم بياناتك عن طريق نقل المسارات والمجلدات المحددة إلى مجلدات أخرى.

- [تغيير النشاط](../../map/tracks/track-context-menu.md#ttrack-activity-type) — يسمح لك هذا الإجراء بتغيير نوع النشاط، على سبيل المثال إلى *سيارة*، *رياضة المغامرات بالدراجات النارية*، *رحلات الظهر* أو غيرها، للمسار المحدد.

- [تغيير المظهر](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — يتيح لك هذا الخيار تخصيص مظهر المسارات المحددة، مما يجعلها أكثر وضوحًا وتمييزًا على الخريطة.

- **حذف** — إذا لم تعد المسارات أو المجلدات المحددة مطلوبة، فإن وظيفة الحذف تسمح لك بحذفها، مع توفير التطبيق خيارات تأكيد لتجنب الحذف العرضي.


### فرز المسارات {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة فرز المسارات في أماكني بأندرويد](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة فرز المسارات في أماكني بـ iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

يقدم OsmAnd طريقة سهلة لفرز مساراتك، مما يساعدك على إدارة مجموعة كبيرة أو العثور بسرعة على ميزات محددة. للوصول إلى قائمة الفرز، انقر على **فرز حسب** في أعلى قائمة المسارات.

***خيارات الفرز:***

- **الأقرب** — يعرض المسارات الأقرب إلى موقعك الحالي.
- **آخر تعديل** — يعرض المسارات مرتبة حسب تاريخ آخر تعديل لها.
- **الاسم: أ - ي** — يرتب المسارات أبجديًا من أ إلى ي.
- **الاسم: ي - أ** — يرتب المسارات أبجديًا من ي إلى أ.
- **التاريخ الأحدث أولاً** — يسرد المسارات حسب تاريخ الإنشاء، مع الأحدث في الأعلى.
- **التاريخ الأقدم أولاً** — يسرد المسارات حسب تاريخ الإنشاء، مع الأقدم في الأعلى.
- **المسافة الأطول أولاً** — يعرض المسارات مرتبة حسب الطول، مع الأطول في الأعلى.
- **المسافة الأقصر أولاً** — يعرض المسارات مرتبة حسب الطول، مع الأقصر في الأعلى.
- **المدة الأطول أولاً** — يفرز المسارات حسب المدة، ويضع الأطول في الأعلى.
- **المدة الأقصر أولاً** — يفرز المسارات حسب المدة، ويضع الأقصر في الأعلى.

### فرز المجلدات الفرعية {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![وظيفة فرز المسارات في أماكني بأندرويد](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة فرز المسارات في أماكني بـ iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

إذا كنت ترغب في فرز [المجلدات الفرعية](#folder-actions)، فانتقل إلى قائمة الثلاث نقاط داخل المجلد المحدد وحدد [الخيارات](#sort-by) المطلوبة.  

يتم تطبيق خيار الفرز المحدد ليس فقط على المجلد الفرعي الحالي ولكن أيضًا على جميع المجلدات والمسارات المتداخلة على جميع المستويات. وهذا يضمن بنية متسقة عبر بياناتك المحفوظة.


## مجلد المسار {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انقر على *قائمة الثلاث نقاط* في حقل المجلد **لفتح** قائمة المجلد.

![استيراد مسارات متعددة](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> انقر مطولاً على حقل المجلد **لفتح** قائمة المجلد.

![القائمة السياقية لمسار في iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

تتيح لك قائمة مجلد المسار عرض المجلدات وإعادة تسميتها وتصديرها وإدارتها.


***الإجراءات مع المجلد:***

- **الاسم** — يعرض اسم المجلد وتاريخ الإنشاء وعدد المسارات التي يحتوي عليها.
- **إظهار جميع المسارات على الخريطة** (*أندرويد فقط*) — يعرض جميع المسارات في المجلد على الخريطة. إذا كان هناك العديد من المسارات، فقد يتسبب ذلك في تجميد الجهاز.
- **تعديل الاسم** (*أندرويد*) / **إعادة تسمية** (*iOS*) — يسمح لك بإعادة تسمية المجلد.
- [تغيير المظهر الافتراضي](../../map/tracks/appearance.md) (*أندرويد*) / **المظهر** (*iOS*) — يغير مظهر عرض جميع المسارات في المجلد.
- [تصدير](../../personal/import-export.md) — يفتح تبويب *القائمة ← الإعدادات ← الإجراءات* لتصدير جميع المسارات في المجلد كملف [`.osf`](../../personal/import-export.md#export).
- [نقل](#track-folder) — يسمح لك بنقل المجلد إلى مجلد آخر موجود أو إنشاء مجلد جديد.
- [حذف المجلد](#delete-folder) — يحذف المجلد بعد التأكيد. ***هذا الإجراء لا يمكن التراجع عنه.***


### إحصائيات المجلد {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *تبويب <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![أماكني مع المسارات في iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

في أسفل القائمة في تبويب *المسارات*، وأسفل قائمة المسارات **في كل مجلد من مجلداتك**، يوجد قسم معلومات يتيح لك عرض الإحصائيات الموجزة الإجمالية للمسارات في المجلد المحدد. يتم عرض جميع القيم بـ [الوحدات](../../personal/profiles.md#units--formats) التي حددتها.

- *عدد **المسارات** في المجلد* — يعرض عدد المسارات الموجودة في المجلد المحدد.
- *المجموع الكلي لـ **المسافات*** — يتم عرض الطول الإجمالي لجميع المسارات في المجلد المحدد، مقاسًا بالوحدات التي حددتها.
- *مجموع **الصعود*** — تشير البيانات إلى إجمالي الارتفاع الرأسي عبر جميع المسارات في المجلد المحدد.
- *مجموع **النزول*** — هذا المعامل هو مجموع الانخفاضات الرأسية على جميع المسارات في المجلد المحدد.
- *مجموع وقت **المدة*** — يعرض هذا إجمالي الوقت المستغرق لإكمال جميع المسارات في المجلد المحدد.
- *إجمالي **حجم** الملفات التي تم تنزيلها بالميجابايت* — يوضح إجمالي حجم الملفات التي تم تنزيلها بالميجابايت مقدار المساحة التي تشغلها جميع المسارات في المجلد المحدد على جهازك.


### إجراءات المجلد {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![وظيفة فرز المسارات في أماكني بأندرويد](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![مسارات أماكني في iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

تساعدك الإجراءات في المجلد على تنظيم وفرز واستيراد المسارات، لهيكلة بيانات الملاحة الخاصة بك.  

كيفية فتح إجراءات المجلد:

- افتح تبويب المسارات في أماكني.
- انتقل إلى المجلد الذي تريد إدارته.
- انقر على *قائمة الثلاث نقاط* في الزاوية اليمنى العليا لفتح قائمة إجراءات المجلد.

***الإجراءات في قائمة المجلد:***

- [تحديد](#selection-mode) — انقر على المجلدات والمسارات المطلوبة لتطبيق الإجراءات من القائمة في *وضع التحديد*.
- [فرز المجلدات الفرعية](#sort-by) — تطبيق ترتيب فرز (على سبيل المثال، حسب الاسم، التاريخ) على جميع المجلدات الفرعية والمسارات في كل مستوى.
- [إضافة مجلد ذكي](../tracks/smart-folder.md#how-to-create-smart-folder) — فرز المسارات والمسارات تلقائيًا بناءً على المعايير التي تحددها.
- [استيراد](#import) — تحميل ملفات GPX أو ملفات مسارات أخرى من جهازك إلى OsmAnd للاستخدام دون اتصال بالإنترنت.
- **إضافة مجلد جديد** — لتنظيم مساراتك ومساراتك في فئات منطقية، ضعها في مجلدات مختلفة. يساعد هذا في هيكلة معلومات الملاحة الخاصة بك.


### حذف المجلد {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *تبويب <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *تبويب <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![القائمة السياقية لمسار في iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

يمكنك حذف مجلد مع جميع المسارات التي يحتوي عليها. للقيام بذلك:

- انقر على *قائمة الثلاث نقاط* في حقل المجلد المراد حذفه.
- في أسفل القائمة، ابحث عن خيار **حذف المجلد**.
- ***ملاحظة: هذا الإجراء لا يمكن التراجع عنه.***


## استيراد / تصدير المسار {#import--export-track}

### استيراد {#import}

تتيح لك أداة الاستيراد إضافة مسارات من ملفات خارجية للملاحة والتحليل دون اتصال بالإنترنت. طرق استيراد المسارات:

١. **استيراد مباشر للملف:**

    - انقر على ملف GPX أو KML أو KMZ من تطبيقات المراسلة أو البريد الإلكتروني أو Google Drive أو مديري الملفات.
    - حدد فتح في OsmAnd عند المطالبة.
    - يتم حفظ المسار المستورد في مجلد **الاستيراد** في *أماكني*.
    - الخطوات: انقر على ملف GPX ← فتح في OsmAnd.

٢. **الاستيراد باستخدام قائمة *أماكني*:**

    - افتح *قائمة أماكني ← المسارات*.
    - حدد ملف GPX المراد استيراده.

    *خيارات إضافية:*

    - **ملفات GPX ذات المسار الواحد** - استيراد المسار بأكمله مباشرة.
    - **ملفات GPX متعددة المسارات** - اختر استيراد ملف GPX واحد أو تحديد مسارات معينة.

***ملاحظة:*** *يتم استيراد المسارات المضافة يدويًا إلى مجلد OsmAnd على جهازك تلقائيًا دون إعادة تشغيل التطبيق.*  


### تصدير {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_multitrack.png) ![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| تصدير | استيراد |
|:------------|:---------------|
| ![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> تصدير </summary> ![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> تصدير </summary> ![استيراد مسارات متعددة](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

هناك عدة طرق لتصدير ملف مسار واحد أو أكثر إلى أي برنامج مراسلة أو بريد إلكتروني أو مدير ملفات أو تطبيق.  

١. عن طريق [*القائمة السياقية للمسار ← مشاركة*](../../map/tracks/track-context-menu.md#options).

٢. عن طريق *قائمة أماكني ← المسارات ← قائمة المجلد / المسار*:

    - لـ [**تصدير مسار واحد**](#track-menu)، حدد قائمة المسار.
    - لـ [**تصدير مسارات متعددة**](#track-folder)، حدد قائمة المجلد المطلوب.

٣. عن طريق [ملف النسخ الاحتياطي المحلي](../../personal/import-export.md#export). تصدير مسارات GPX كملفات `.osf`.


## مقالات ذات صلة {#related-articles}

- [إظهار المسار على الخريطة](../../map/tracks/index.md)
- [التحليل على الخريطة](../../map/tracks/index.md#analyze-track-on-map)
- [القائمة السياقية للمسار](../../map/tracks/track-context-menu.md)
- [الملاحة حسب المسار](../../navigation/setup/gpx-navigation.md)
- [تسجيل الرحلة](../../plugins/trip-recording.md)