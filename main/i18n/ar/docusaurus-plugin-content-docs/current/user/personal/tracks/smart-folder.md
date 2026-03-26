---
source-hash: cbed8959bdf8985ec20e474f00773eeda1334dfea7ce3c5a54eb702f18fa6ee2
sidebar_position: 3
title: المجلد الذكي (فلتر)
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

توفر ميزة **المجلد الذكي** أدوات قوية لتنظيم وإدارة مساراتك. إحدى الميزات الرئيسية هي القدرة على فلترة الملفات في علامة تبويب *المسارات* من قائمة *الأماكن الخاصة بي* بناءً على معايير مثل المدة أو الطول أو السرعة.

تتيح لك هذه الميزة العثور بسرعة على مسارات محددة تتوافق مع متطلباتك. يمكن حفظ النتائج المفلترة كـ **مجلد ذكي**، مما يوفر وصولاً سهلاً إلى مجموعات المسارات المحدثة ديناميكيًا.


## فلتر البحث {#search-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> علامة تبويب*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> علامة تبويب*

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_ios.png)

</TabItem>

</Tabs>

***كيفية تطبيق فلتر:***

- انقر على أيقونة *البحث*، ثم انقر على *فلتر* في صف [*الترتيب حسب*](./manage-tracks.md#sort-by).

- **اختر إعدادات الفلتر المطلوبة** لتحسين بحثك عن المسارات.

- انقر على **عرض** في الزاوية اليمنى السفلية لرؤية النتائج المفلترة. يظهر عدد المسارات المطابقة بين قوسين.

- **لمسح** جميع الفلاتر النشطة، انقر على **إعادة تعيين الكل**.

- **لحفظ** مجموعة الفلاتر الحالية كـ **مجلد ذكي** جديد، انقر على أيقونة الحفظ في الزاوية اليمنى العلوية من الشاشة.


### الفلاتر المتاحة {#available-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_ios.png)

</TabItem>

</Tabs>

- **الاسم** — ابحث عن المسارات حسب العنوان. أدخل اسمًا كاملاً أو جزئيًا لعرض المسارات المطابقة.
- **المجلد** — حدد مجلدًا واحدًا أو أكثر لفلترة المسارات حسب موقع تخزينها.
- **المدة** — فلترة المسارات حسب مدتها المسجلة، مع تحديد نطاق بالساعات والدقائق.
- **وقت الحركة** — حدد النطاق الزمني الذي قضيته في الحركة أثناء التسجيل.
- **الطول** — حدد نطاقًا معينًا بالكيلومترات أو الأميال للعثور على مسارات ذات طول معين.
- **متوسط السرعة** — فلترة المسارات حسب [متوسط السرعة](../../widgets/info-widgets.md#average-speed).
- **مجموعة بيانات المستشعر.**  
    طبق الفلاتر بناءً على بيانات المستشعرات الخارجية، بما في ذلك:
    - سرعة المستشعر، المتوسط.
    - سرعة المستشعر، القصوى.
    - معدل ضربات القلب، المتوسط.
    - معدل ضربات القلب، الأقصى.
    - إيقاع الدراجة، المتوسط.
    - إيقاع الدراجة، الأقصى.
    - قوة الدراجة، المتوسط.
    - قوة الدراجة، القصوى.
    - درجة الحرارة، المتوسط.
    - درجة الحرارة، القصوى.
- **السرعة القصوى** — حدد المسارات ذات نطاقات السرعة القصوى المحددة.
- **صعود** و **هبوط** — فلترة المسارات بناءً على التغيرات الإيجابية أو السلبية في الارتفاع.
- **متوسط الارتفاع** و **أقصى ارتفاع** — ابحث عن المسارات التي تحتوي على بيانات متوسط أو أقصى ارتفاع محددة.
- **تاريخ الإنشاء** — فلترة المسارات التي تم إنشاؤها ضمن نطاق زمني معين.
- **أقرب المدن** — عرض المسارات التي تمر بالقرب من مدن أو مناطق محددة.
- **نوع النشاط** — فلترة المسارات بناءً على نوع [الأنشطة](../../map/tracks/track-context-menu.md#ttrack-activity-type) المسجلة في ملف GPX (مثل ركوب الدراجات، والمشي لمسافات طويلة).
- **البلد** — فلترة المسارات حسب البلد أو المنطقة التي تم تسجيلها فيها.
- **اللون** و **العرض** — حدد المسارات حسب اللون أو عرض الخط المخصص لها.
- **أخرى** — فلاتر إضافية للخصائص الخاصة:
    - *مرئي على الخريطة*. يعرض فقط المسارات المعروضة على الخريطة.
    - *مع نقاط الطريق*. يعرض المسارات التي تحتوي على نقاط طريق محددة.


## المجلد الذكي {#smart-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks](@site/static/img/personal/tracks/my_places_smart_folder_ios.png)

</TabItem>

</Tabs>

**المجلد الذكي** هو مجموعة ديناميكية من المسارات يتم تحديثها تلقائيًا بناءً على معايير فلترة محددة. يوفر أدوات متقدمة لتنظيم المسارات والبحث فيها وإدارتها بكفاءة.

***فوائد المجلدات الذكية:***

1. **تنظيم آلي.**  
    تضم تلقائيًا المسارات التي تطابق قواعد محددة مسبقًا، مثل تاريخ الإنشاء أو نطاق المدة.
2. **الفلترة والبحث.**  
    تسمح بالبحث السريع داخل المسارات باستخدام فلاتر متقدمة وكلمات رئيسية.
3. **تحديث ديناميكي.**  
    تحدث المحتوى تلقائيًا لعرض أحدث المسارات التي تطابق المعايير.
4. **تخصيص القواعد.**  
    أنشئ مجموعات مسارات مخصصة عن طريق تحديد قواعد فلترة مخصصة.


### كيفية إنشاء مجلد ذكي {#how-to-create-smart-folder}

لإنشاء **مجلد ذكي**، اتبع الخطوات التالية:

1. انقر على أيقونة ***قائمة الثلاث نقاط*** في علامة تبويب *المسارات* من قائمة *الأماكن الخاصة بي*.

2. حدد **إضافة مجلد ذكي** من القائمة المنسدلة.

3. قم بتهيئة الإعدادات:
   - **تسمية المجلد**. أدخل اسمًا لتعريف المجلد.
   - حدد **معلمات فلتر المسار**. طبق الفلاتر المطلوبة باستخدام خيارات [الفلتر](#available-filters) المتاحة.

4. **احفظ** الإعدادات.
    - انقر على **عرض** لمعاينة المسارات.
    - حدد زر **حفظ** لإنهاء *المجلد الذكي*.

سيقوم **المجلد الذكي** الذي تم إنشاؤه حديثًا بتحديث محتوياته تلقائيًا بالمسارات التي تطابق المعايير المحددة.


### إدارة المجلدات الذكية {#managing-smart-folders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places Managing Smart Folders Android](@site/static/img/personal/tracks/my_places_smart_folder_2-1_andr.png)

![My places Managing Smart Foldersn Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr_new.png)

يتم عرض **المجلد الذكي** بأيقونة فريدة في قائمة المجلدات في علامة تبويب المسارات. لإدارة المجلد، انقر على *قائمة الثلاث نقاط* بجواره للوصول إلى الإجراءات المتاحة:

- **التفاصيل** — عرض القائمة الكاملة للمسارات الموجودة في المجلد.
- **عرض جميع المسارات على الخريطة** — عرض جميع مسارات المجلد على الخريطة.  
    *ملاحظة: قد يؤثر تحميل العديد من المسارات على الأداء.*
- **إعادة تسمية** — تغيير اسم المجلد لتسهيل التعرف عليه.
- **تحديث** — تحديث محتوى المجلد يدويًا للتأكد من أنه يتضمن أحدث المسارات.
- **تعديل الفلتر** — تعديل إعدادات فلتر المسار للمجلد الذكي الحالي. انظر [فلتر البحث](#search-filter) لمزيد من التفاصيل.
- **تصدير** — تصدير جميع المسارات في المجلد الذكي عبر ميزة [الاستيراد/التصدير](../../personal/import-export.md). سيتم إعادة توجيهك إلى *القائمة ← الإعدادات ← علامة تبويب الإجراءات*.
- **حذف المجلد** — إزالة المجلد الذكي دون حذف مساراته.  
    *تحذير: هذا الإجراء لا يمكن التراجع عنه وسيطلب رسالة تأكيد.*

يمكنك أيضًا فتح المجلد وانقر على *قائمة الثلاث نقاط* في *الزاوية العلوية اليمنى* للوصول إلى إجراءات إضافية:

- **تحديد** — استخدم [وضع التحديد](./manage-tracks.md#selection-mode) لإجراءات محددة على المسارات داخل المجلد.
- **تنظيم حسب** — تنظيم المسارات في المجلد الذكي تلقائيًا إلى مجموعات بناءً على معلمة محددة. تشمل أنواع التجميع المتاحة *عام*، *التاريخ والوقت*، *الموقع*، *السرعة*، *الارتفاع والارتفاع*، و*بيانات المستشعر*. 

بعض معلمات التجميع متاحة فقط مع اشتراك OsmAnd Pro. تشمل المعلمات المجانية *النشاط*، *سنة الإنشاء*، و*أقرب مدينة*. جميع المعلمات الأخرى تحمل علامة <ProFeature/>.

بالنسبة للمعلمات الرقمية (مثل المسافة، المدة، السرعة، أو الارتفاع)، يتوفر حوار *تحديد حجم الخطوة*. استخدم الشريط المنزلق لتحديد نطاقات القيم للتجميع.

بالنسبة لمعلمات PRO، يمكنك معاينة إعداد التجميع (على سبيل المثال، فتح محدد حجم الخطوة ومشاهدة كيفية تجميع المسارات)، لكن تطبيق هذه التغييرات يتطلب اشتراكًا نشطًا. إذا حددت معلمة PRO أو نقرت على زر فتح القفل، سيفتح شاشة اختيار الخطة. يظل التجميع المطبق سابقًا مرئيًا حتى لو انتهت الاشتراك، لكن تعديله أو تطبيق تجميع جديد قائم على PRO يتطلب اشتراكًا نشطًا.

</TabItem>

<TabItem value="ios" label="iOS">

![My places Managing Smart Folders iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

![My places Managing Smart Foldersn iOS](@site/static/img/personal/tracks/my_places_smart_folder_2_ios_new.png)

يتم عرض **المجلد الذكي** بأيقونة فريدة في قائمة المجلدات في علامة تبويب المسارات. لإدارة المجلد، *اضغط مطولاً* على اسم المجلد للوصول إلى الإجراءات المتاحة:

- **إعادة تسمية**— تغيير اسم المجلد لتسهيل التعرف عليه.
- **تصدير** — تصدير جميع المسارات في المجلد الذكي عبر ميزة [الاستيراد/التصدير](../../personal/import-export.md). سيتم إعادة توجيهك إلى *القائمة ← الإعدادات ← علامة تبويب الإجراءات*.
- **نقل** — يسمح لك بنقل المجلد إلى مجلد آخر موجود أو إنشاء مجلد جديد.
- **حذف** — إزالة المجلد الذكي دون حذف مساراته.  
    *تحذير: هذا الإجراء لا يمكن التراجع عنه وسيطلب رسالة تأكيد.*

يمكنك أيضًا فتح المجلد وانقر على الأيقونة في *الزاوية العلوية اليمنى* للوصول إلى إجراءات إضافية:

- **تحديد** — استخدم [وضع التحديد](./manage-tracks.md#selection-mode) لإجراءات محددة على المسارات داخل المجلد.
- **تحديث** — تحديث محتوى المجلد يدويًا للتأكد من أنه يتضمن أحدث المسارات.
- **تعديل الفلتر** — تعديل إعدادات فلتر المسار للمجلد الذكي الحالي. انظر [فلتر البحث](#search-filter) لمزيد من التفاصيل.

</TabItem>

</Tabs>

<!--
The **Smart folder** is displayed with a unique icon in the folder list in the Tracks tab. To manage the folder, tap the *three-dot menu* next to it (*Android*) and *long tap* (*iOS*) or open the folder and use the icon in the top-right corner.

***Available Actions:***

- **Details** — View the complete list of tracks contained in the folder.

- **Show all tracks on the map** (*Android only*) — Display all folder tracks on the map.  
    *NOTE: Loading many tracks may affect performance.*

- **Edit name** (*Android*) / **Rename** (*iOS*) — Change the folder name for easier identification.

- **Refresh** — Manually update the folder's content to ensure it includes the latest tracks.

- **Change default appearance** (*Android*) — Changes the display appearance of all tracks in the folder.

- **Edit filter** — Modify the track filter settings for the current Smart Folder. See [Search Filter](#search-filter) for details.

- **Export** — Export all tracks in the Smart Folder via the [Import/Export](../../personal/import-export.md) feature. You will be redirected to *Menu → Settings → Actions tab*.

- **Delete folder** — Remove the Smart Folder without deleting its tracks.  
    *WARNING: This action is irreversible and will prompt a confirmation message.*

- **Move** (*iOS*) — Allows you to move the folder to another existing folder or create a new one.

- **Select** — Use [Selection Mode](./manage-tracks.md#selection-mode) for specific track actions within the folder.
-->

## مقالات ذات صلة {#related-articles}

- [عرض المسار على الخريطة](../../map/tracks/index.md)
- [التحليل على الخريطة](../../map/tracks/index.md#analyze-track-on-map)
- [قائمة سياق المسار](../../map/tracks/track-context-menu.md)
- [الملاحة حسب المسار](../../navigation/setup/gpx-navigation.md)
- [تسجيل الرحلة](../../plugins/trip-recording.md)