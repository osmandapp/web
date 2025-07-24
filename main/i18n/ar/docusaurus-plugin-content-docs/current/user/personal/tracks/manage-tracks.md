---
source-hash: ccc92258ad1865c820ecfed771b07e1d48a441845c435a996fe12367c3ecf9df
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

تُخزن جميع المسارات في OsmAnd في علامة تبويب ضمن *<Translate android="true" ids="shared_string_menu"/> ← <Translate android="true" ids="shared_string_my_places"/> ← <Translate android="true" ids="shared_string_gpx_tracks"/>*. يعالج OsmAnd ملف المسار بتنسيق [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format)، ولكن يمكن استيراد [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) و [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) وتحويلهما إلى GPX. اقرأ المزيد عن الأنواع المختلفة للمسارات في المقالة [المسارات على الخريطة](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![نظرة عامة على إدارة المسار أندرويد](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![نظرة عامة على إدارة المسار iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## إنشاء مسار {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تخطيط مسار تعديل مسار أندرويد](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تخطيط مسار تعديل مسار iOS](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

يمكنك إضافة مسارات في OsmAnd بالطرق التالية:

1. **[استيراد](./manage-tracks.md#import--export-track)** مسار من مصدر خارجي.
2. إنشاء مسار جديد في التطبيق باستخدام أداة **[تخطيط مسار](../../plan-route/create-route.md)**.
3. تسجيل مسار في التطبيق باستخدام مكون **[تسجيل الرحلة](../../plugins/trip-recording.md)** الإضافي.
4. إدخال نقاط متعددة بالإحداثيات وحفظها كمسار باستخدام أداة **[إدخال الإحداثيات](../../plan-route/coordinate-input.md)**.
5. يمكنك أيضًا إضافة **نقاط طريق** إلى مسار جديد عبر **[قائمة السياق](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## إدارة المسارات {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> علامة تبويب*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![أماكني مع المسارات في iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

تُعرض جميع المسارات التي تم تسجيلها أو إنشاؤها أو استيرادها تلقائيًا في مجلد [أماكني](../../personal/myplaces.md) في علامة تبويب *المسارات*. وهي منظمة حسب المجلد أو معروضة في قائمة أسفلها.


### قائمة المسار {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![قائمة سياق المسار في iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

لكل مسار، مثل المجلدات، قائمة تسمح لك بإدارة المسارات بكفاءة. إليك كيفية الوصول إليها:

- *أندرويد* - اضغط على *قائمة النقاط الثلاث* في حقل المسار.
- *iOS* - اضغط مطولاً على المسار المطلوب في القائمة.

توفر القائمة الإجراءات التالية:

- **إظهار/إخفاء على الخريطة** — يعرض أو يخفي المسارات المحددة على الخريطة، مما يمثل موقعها بصريًا.

- [فتح](../../map/tracks/index.md#configure-map) (*iOS*) — يتوفر هذا الإعداد في قائمة تكوين الخريطة. يقع في *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*، ويسمح لك بالوصول إلى [قائمة سياق المسار المحدد](../../map/tracks/track-context-menu.md) عند النقر عليه.

- **المظهر** (*iOS*) — خصص [مظهر المسارات](../../map/tracks/appearance.md) ليناسب تفضيلاتك.

- **التنقل** (*iOS*) — يبدأ [التنقل](../../navigation/setup/gpx-navigation.md) على طول المسار المحدد.

- **تحليل على الخريطة** (*أندرويد*) / **تحليل** (*iOS*) — يفتح أداة [تحليل على الخريطة](../../navigation/setup/route-details.md#analyze-on-map) ضمن تفاصيل المسار لمزيد من التحليل.

- **مشاركة** — يتيح مشاركة المسار المحدد مع الآخرين.

- **تحميل التعديلات إلى OSM** (*iOS*) — [تحميل التغييرات](../../plugins/osm-editing.md#gps-track) التي أجريتها على المسار مباشرة إلى *OpenStreetMap*.

- **تعديل** (*iOS*) — استخدم أداة [تخطيط مسار](../../plan-route/create-route.md#modify-gpx-track) لتعديل المسارات.

- **تكرار** (*iOS*) — ينشئ نسخة من المسار المحدد.

- **إعادة تسمية** — تغيير اسم المسار المحدد لتنظيم أفضل.

- **نقل** — يسمح لك بنقل المسار المحدد إلى مجلد مختلف.

- **تصدير** (*أندرويد*) — انتقل إلى *القائمة ← الإعدادات ← علامة تبويب الإجراءات* لتصدير جميع المسارات من مجلد.

- **حذف** — إزالة المسار المحدد الذي لم يعد مطلوبًا بشكل دائم.


### بحث {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظيفة بحث المسارات في أماكني أندرويد](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة بحث المسارات في أماكني iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

اضغط على زر &#x1F50D; في الجزء العلوي من شاشة الجهاز لفتح قائمة فرز قائمة المسارات.  

متاح:

- البحث بالاسم المسار.
- [فرز حسب](#sort-by) لتحسين البحث إذا لم تتذكر العنوان.
- [تصفية](./smart-folder.md#search-filter) (*أندرويد فقط*) إذا كنت بحاجة إلى خصائص محددة للمسار.


### وضع التحديد {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظيفة فرز المسارات في أماكني أندرويد](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مسارات أماكني iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

يوفر عنصر القائمة **تحديد** خيارات لإدارة المجلدات والمسارات. تتيح لك هذه الميزة تحديد مسارات متعددة أو مجلدات مسارات. يمكنك أيضًا تحديد جميع المسارات والمجلدات بالنقر على زر **تحديد الكل** الخاص.

بمجرد اتخاذ قرارك، يتم توفير الخطوات التالية:  

- **إظهار على الخريطة** — باستخدام هذه الميزة، يمكنك عرض المسارات المحددة على الخريطة لفهم أفضل لموقعها وعلاقتها ببعضها البعض.

- **مشاركة** (*أندرويد*) / **تصدير** (*iOS*) — إذا كنت ترغب في مشاركة البيانات المحددة مع مستخدمين آخرين أو حفظها في خدمة سحابية، تتيح لك ميزة *مشاركة/تصدير* إرسال المسارات والمجلدات باستخدام طرق مشاركة مختلفة.

- **تحميل إلى OpenStreetMap** — يمكنك إرسال المسارات المحددة إلى OpenStreetMap، مما يساهم في تطوير وتحسين البيانات.

- **نقل** — يمكنك تنظيم بياناتك عن طريق نقل المسارات والمجلدات المحددة إلى مجلدات أخرى.

- [تغيير النشاط](../../map/tracks/track-context-menu.md#track-information-activity) — يتيح لك هذا الإجراء تغيير نوع النشاط، على سبيل المثال إلى *سيارة*، *رياضات المغامرات الآلية*، *التخييم* أو غيرها، للمسار المحدد.

- [تغيير المظهر](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — يتيح لك هذا الخيار تخصيص مظهر المسارات المحددة، مما يجعلها أكثر وضوحًا وقابلية للتعرف عليها على الخريطة.

- **حذف** — إذا لم تعد المسارات أو المجلدات المحددة مطلوبة، تتيح لك وظيفة الحذف حذفها، مع توفير التطبيق لخيارات التأكيد لتجنب الحذف العرضي.


### فرز حسب {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظيفة فرز المسارات في أماكني أندرويد](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة فرز المسارات في أماكني iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

يوفر OsmAnd طريقة سهلة لفرز مساراتك، مما يساعدك على إدارة مجموعة كبيرة أو العثور بسرعة على ميزات محددة. للوصول إلى قائمة الفرز، اضغط على **فرز حسب** في الجزء العلوي من قائمة المسارات.

***خيارات الفرز:***

- **الأقرب** — يعرض المسارات الأقرب إلى موقعك الحالي.

- **آخر تعديل** — يعرض المسارات مرتبة حسب تاريخ آخر تعديل لها.

- **الاسم: أ - ي** — يرتب المسارات أبجديًا من أ إلى ي.

- **الاسم: ي - أ** — يرتب المسارات أبجديًا من ي إلى أ.

- **أحدث تاريخ أولاً** — يسرد المسارات حسب تاريخ الإنشاء، مع الأحدث في الأعلى.

- **أقدم تاريخ أولاً** — يسرد المسارات حسب تاريخ الإنشاء، مع الأقدم في الأعلى.

- **أطول مسافة أولاً** — يعرض المسارات مرتبة حسب الطول، مع الأطول في الأعلى.

- **أقصر مسافة أولاً** — يعرض المسارات مرتبة حسب الطول، مع الأقصر في الأعلى.

- **أطول مدة أولاً** — يفرز المسارات حسب المدة، مع وضع الأطول في الأعلى.

- **أقصر مدة أولاً** — يفرز المسارات حسب المدة، مع وضع الأقصر في الأعلى.

#### فرز المجلدات الفرعية {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظيفة فرز المسارات في أماكني أندرويد](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![وظيفة فرز المسارات في أماكني iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

إذا كنت ترغب في فرز [المجلدات الفرعية](#folder-actions)، فانتقل إلى قائمة النقاط الثلاث داخل المجلد المحدد وحدد [الخيارات](#sort-by) المطلوبة.  

يتم تطبيق خيار الفرز المحدد ليس فقط على المجلد الفرعي الحالي ولكن أيضًا على جميع المجلدات المتداخلة والمسارات على جميع المستويات. وهذا يضمن بنية متسقة عبر بياناتك المحفوظة.


## مجلد المسار {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![استيراد مسارات متعددة](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![قائمة سياق المسار في iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

تتيح لك قائمة مجلد المسار عرض المجلدات وإعادة تسميتها وتصديرها وإدارتها.

كيفية فتح قائمة المجلد:

- *أندرويد* - اضغط على *قائمة النقاط الثلاث* في حقل المجلد.
- *iOS* - اضغط مطولاً على حقل المجلد.

***الإجراءات مع المجلد:***

- **الاسم** — يعرض اسم المجلد وتاريخ الإنشاء وعدد المسارات التي يحتوي عليها.

- **إظهار جميع المسارات على الخريطة** (*أندرويد فقط*) — يعرض جميع المسارات في المجلد على الخريطة —  
    *ملاحظة: إذا كان هناك العديد من المسارات، فقد يتسبب ذلك في تجميد الجهاز.*

- **تعديل الاسم** (*أندرويد*) / **إعادة تسمية** (*iOS*) — يسمح لك بإعادة تسمية المجلد.

- [تغيير المظهر الافتراضي](../../map/tracks/appearance.md) (*أندرويد*) / **المظهر** (*iOS*) — يغير مظهر عرض جميع المسارات في المجلد.

- [تصدير](../../personal/import-export.md) — يفتح علامة تبويب *القائمة ← الإعدادات ← الإجراءات* لتصدير جميع المسارات في المجلد كملف [`.osf`](../../personal/import-export.md#export).

- [نقل](#track-folder) — يسمح لك بنقل المجلد إلى مجلد آخر موجود أو إنشاء مجلد جديد.

- [حذف المجلد](#delete-folder) — يحذف المجلد بعد التأكيد.  
    ***ملاحظة: هذا الإجراء لا رجعة فيه.***


### إحصائيات المجلد {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> علامة تبويب*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![أماكني مع المسارات في iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

في أسفل القائمة في علامة تبويب *المسارات*، وأسفل قائمة المسارات **في كل من مجلداتك**، يوجد قسم معلومات يسمح لك بعرض إحصائيات الملخص الكلية للمسارات في المجلد المحدد. تُعرض جميع القيم بالوحدات [التي اخترتها](../../personal/profiles.md#units--formats).

- *عدد **المسارات** في المجلد* — يعرض عدد المسارات الموجودة في المجلد المحدد.

- *إجمالي مجموع* **المسافات** — يُعرض الطول الإجمالي لجميع المسارات في المجلد المحدد، مقاسًا بالوحدات التي اخترتها.

- *مجموع* **المرتفعات** — تشير البيانات إلى إجمالي الارتفاع الرأسي عبر جميع المسارات في المجلد المحدد.

- *مجموع* **المنحدرات** — هذه المعلمة هي مجموع الانحدارات الرأسية على جميع المسارات في المجلد المحدد.

- *مجموع* **مدة** *الوقت* — يعرض هذا الوقت الإجمالي المستغرق لإكمال جميع المسارات في المجلد المحدد.

- *إجمالي **حجم** الملفات التي تم تنزيلها بالميغابايت* — يُظهر الحجم الإجمالي للملفات التي تم تنزيلها بالميغابايت مقدار المساحة التي تشغلها جميع المسارات في المجلد المحدد على جهازك.


### إجراءات المجلد {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![وظيفة فرز المسارات في أماكني أندرويد](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![مسارات أماكني iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

تساعدك الإجراءات في المجلد على تنظيم وفرز واستيراد المسارات، لهيكلة بيانات التنقل الخاصة بك.  

كيفية فتح إجراءات المجلد:

- افتح علامة تبويب المسارات في أماكني.
- انتقل إلى المجلد الذي تريد إدارته.
- اضغط على *قائمة النقاط الثلاث* في الزاوية العلوية اليمنى لفتح قائمة إجراءات المجلد.

***الإجراءات في قائمة المجلد:***

- [تحديد](#selection-mode) — اضغط على المجلدات والمسارات المطلوبة لتطبيق الإجراءات من القائمة في *وضع التحديد*.

- [فرز المجلدات الفرعية](#sort-by) — تطبيق ترتيب فرز (على سبيل المثال، حسب الاسم، التاريخ) على جميع المجلدات الفرعية والمسارات على كل مستوى.

- [إضافة مجلد ذكي](../tracks/smart-folder.md#how-to-create-smart-folder) — فرز المسارات تلقائيًا بناءً على المعايير التي تحددها.

- [استيراد](#import) — تحميل ملفات GPX أو ملفات المسارات الأخرى من جهازك إلى OsmAnd للاستخدام دون اتصال بالإنترنت.

- **إضافة مجلد جديد** — لتنظيم مساراتك في فئات منطقية، ضعها في مجلدات مختلفة. يساعد هذا في هيكلة معلومات التنقل الخاصة بك.


### حذف المجلد {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![أماكني مع المسارات في أندرويد](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![قائمة سياق المسار في iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

يمكنك حذف مجلد بكل المسارات التي يحتوي عليها. للقيام بذلك:

- اضغط على *قائمة النقاط الثلاث* في حقل المجلد المراد حذفه.
- في أسفل القائمة، ابحث عن خيار **حذف المجلد**.
- ***ملاحظة: هذا الإجراء لا رجعة فيه.***


## استيراد / تصدير المسار {#import--export-track}

### استيراد {#import}

تتيح لك أداة الاستيراد إضافة مسارات من ملفات خارجية للتنقل والتحليل دون اتصال بالإنترنت. طرق استيراد المسارات:

1. **استيراد الملف المباشر:**

    - اضغط على ملف GPX أو KML أو KMZ من تطبيقات المراسلة أو البريد الإلكتروني أو Google Drive أو مديري الملفات.
    - حدد فتح في OsmAnd عند المطالبة.
    - يتم حفظ المسار المستورد في مجلد **الاستيراد** في *أماكني*.
    - الخطوات: اضغط على ملف GPX ← فتح في OsmAnd.

2. **الاستيراد باستخدام قائمة *أماكني*:**

    - افتح *قائمة أماكني ← المسارات*.
    - حدد ملف GPX للاستيراد.

    *خيارات إضافية:*

    - **ملفات GPX ذات المسار الواحد** - استيراد المسار بأكمله مباشرة.
    - **ملفات GPX متعددة المسارات** - اختر استيراد ملف GPX واحد أو تحديد مسارات محددة.

***ملاحظة:*** *يتم استيراد المسارات التي تمت إضافتها يدويًا إلى مجلد OsmAnd على جهازك تلقائيًا دون إعادة تشغيل التطبيق.*  


### تصدير {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

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

هناك عدة طرق لتصدير ملف أو أكثر من ملفات المسارات إلى أي تطبيق مراسلة أو بريد إلكتروني أو مدير ملفات أو تطبيق.  

1. من خلال [*قائمة سياق المسار ← مشاركة*](../../map/tracks/track-context-menu.md#options).

2. من خلال *قائمة أماكني ← المسارات ← قائمة المجلد / المسار*:

    - لـ [**تصدير مسار واحد**](#track-menu)، حدد قائمة المسار.
    - لـ [**تصدير مسارات متعددة**](#track-folder)، حدد قائمة المجلد المطلوب.

3. من خلال [ملف النسخ الاحتياطي المحلي](../../personal/import-export.md#export-to-file). تصدير مسارات GPX كملفات `.osf`.


## مقالات ذات صلة {#related-articles}

- [إظهار المسار على الخريطة](../../map/tracks/index.md)
- [تحليل على الخريطة](../../map/tracks/index.md#analyze-track-on-map)
- [قائمة سياق المسار](../../map/tracks/track-context-menu.md)
- [التنقل بالمسار](../../navigation/setup/gpx-navigation.md)
- [تسجيل الرحلة](../../plugins/trip-recording.md)

> *آخر تحديث: أبريل 2025*