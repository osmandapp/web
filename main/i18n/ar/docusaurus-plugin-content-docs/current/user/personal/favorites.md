---
source-hash: fab52fe27db8016862c2644efc7d09e8fefedd93296efd1eab5de77e1864309c
sidebar_position: 7
title:  المفضلة
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

**المفضلة** ميزة في OsmAnd تسمح لك بإنشاء إشارات مرجعية (ملاحظات) على الخريطة. يتم عرض هذه النقاط المفضلة كنجوم صفراء بشكل افتراضي، ولكن يمكنك تخصيصها بالكامل بألوان وأشكال وأيقونات مختلفة. يتم تجميع المفضلة في طبقة خريطة مخصصة، والتي تصبح مرئية من *مستوى التقريب السادس*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مقدمة المفضلة أندرويد](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![مقدمة المفضلة iOS](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## نقطة المفضلة {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![طبقة المفضلة أندرويد](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![طبقة المفضلة iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

المفضلة هي جزء من طبقة خريطة خاصة، ويمكنك [إظهارها أو إخفاؤها](../map/point-layers-on-map.md#favorites) مع [أسمائها](../map/point-layers-on-map.md#favorite-and-poi-names) على الخريطة. يؤدي النقر على نقطة مفضلة إلى فتح [قائمة السياق](../map/map-context-menu.md#favorites--track-points-from-the-group)، مما يسمح لك بعرض التفاصيل و[تحرير أو حذف](../map/map-context-menu.md#add--edit-favorite) النقطة.


### إنشاء {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إضافة وصف للمفضلة أندرويد](@site/static/img/personal/favorite_add_descr_android.png)  ![مجموعة المفضلة أندرويد](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إضافة وصف للمفضلة iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![مجموعة المفضلة iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

لإضافة نقطة مفضلة:

1. حدد [نقطة اهتمام (POI)](../map/point-layers-on-map.md#points-of-interest-pois) أو هيكل على الخريطة.  
    نقر قصير لنقطة اهتمام أو نقر طويل لنقطة عامة على الخريطة.
2. حدد [إضافة (☆)](../map/map-context-menu.md#add--edit-favorite) من قائمة سياق الخريطة.

عند إضافة نقطة من بيانات OSM، يتم تضمين معلومات نقطة الاهتمام ذات الصلة تلقائيًا. يمكنك أيضًا إنشاء مفضلة عن طريق [النقر الطويل](../map/map-context-menu.md#select-any-point-long-tap) على أي موقع على الخريطة.

***حقول نقطة المفضلة:***

- **الاسم** — اسم فريد داخل المجموعة (*مطلوب*).
- **العنوان** و **الوصف** (*اختياري*).
- **المجموعة** — حدد من [مجموعة مفضلة](#manage-favorites) موجودة أو أنشئ مجموعة جديدة.
- **التخصيص المرئي** — يمكن أن تتطابق الأيقونة واللون والشكل مع [مظهر المجموعة](#change-group-appearance) الافتراضي أو يتم تخصيصها بشكل فردي.


### تحرير / استبدال / حذف {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![تحرير المفضلة أندرويد](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تحرير المفضلة iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

لتعديل نقطة مفضلة:

1. [انقر](../map/map-context-menu.md#select-an-object-single-tap) على المفضلة على الخريطة أو اذهب إلى [مفضلتي](#manage-favorites).
2. اختر **تحرير المفضلة** من [*قائمة سياق الخريطة*](../map/map-context-menu.md#add--edit-favorite).

***الخيارات المتاحة:***

- **تحرير التفاصيل** — الاسم، الأيقونة، المجموعة، العنوان، والوصف.
- **استبدال الموقع** — استبدل نقطة أخرى بهذه النقطة. مفيد لتحديث نقطة معينة (على سبيل المثال *سيارتي المركونة*) أو إنشاء نقطة جديدة.
- **حذف** — أزل المفضلة باستخدام خيار الحذف، الذي يمكن الوصول إليه من خلال قائمة التحرير أو عبر زر الحذف على أندرويد.


### أيقونات المفضلة {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![أماكني المفضلة أندرويد](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![أماكني iOS](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

تتوفر مجموعة واسعة من الأيقونات لنقاط الاهتمام ونقاط الطريق في OsmAnd. يمكنك:

- تحديد أيقونة من قائمة [فئات نقاط الاهتمام](../search/search-poi.md#categories-and-their-filters).
- العثور على أيقونة مناسبة باستخدام [خيار البحث](../search/search-all.md#how-to-use).


### المفضلة الخاصة (شخصي) {#special-favorites-personal}

يحتوي *المجلد الشخصي* على نقاط خاصة مثل **<Translate android="true" ids="favorite_home_category"/>** و **<Translate android="true" ids="work_button"/>**، والتي غالبًا ما تستخدم في [الملاحة](../navigation/setup/route-navigation.md#select-start-point). لا يحتوي هذا المجلد على *قائمة النقاط الثلاث*، ولا يمكن تغيير معلماته.


## إدارة المفضلة {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![أماكني المفضلة أندرويد](@site/static/img/personal/my_places_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![أماكني iOS](@site/static/img/personal/my_places_ios_new.png)

</TabItem>

</Tabs>

يتيح لك قسم **مفضلتي**:

- [البحث](#order--sorting--search) عن مفضلات أو مجموعات معينة.
- [عمليات جماعية](#bulk-edit--delete) — مشاركة أو نقل أو حذف عدة مفضلات دفعة واحدة.

### الترتيب / الفرز / البحث {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![مجلدات المفضلة أندرويد](@site/static/img/personal/favorites_folders_sorting.png)

- **الفرز** — يمكن فرز مجلدات ونقاط المفضلة باستخدام خيارات الفرز المتاحة في قائمة القائمة. الخيارات التالية متاحة: *الاسم أ – و*، *الاسم و – أ*، *آخر تعديل*، *أحدث تاريخ أولاً*، *أقدم تاريخ أولاً*. بشكل افتراضي، يتم فرز العناصر حسب الاسم أ – و. تُعرض المجلدات المثبتة دائمًا في أعلى قائمة المفضلة. وهي مفصولة بصريًا عن باقي المجلدات بواسطة فاصل. [المجلد الشخصي](../personal/favorites.md#special-favorites-personal) مثبت بشكل افتراضي. 
- **البحث** — استخدم [البحث العام](../search/search-all.md) للعثور على المفضلة بالاسم. يتم فرز المفضلة حسب المسافة من مركز الخريطة.

</TabItem>

<TabItem value="ios" label="iOS">

![مجلدات المفضلة iOS](@site/static/img/personal/favorites_folders_ios.png)

- **الفرز** — يتم فرز مجلدات ونقاط المفضلة أبجديًا، مع وجود [المجلد الشخصي](../personal/favorites.md#special-favorites-personal) في الأعلى.
- **البحث** — استخدم [البحث العام](../search/search-all.md) للعثور على المفضلة بالاسم. يتم فرز المفضلة حسب المسافة من مركز الخريطة.

</TabItem>

</Tabs>

### تحرير / حذف جماعي {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراءات المفضلة أندرويد](@site/static/img/personal/favorites_group_actions.png) ![إجراء حذف المفضلة أندرويد](@site/static/img/personal/favorites_actions.png)

لإدارة عدة مفضلات أو مجلدات، أدخل *وضع التحديد*. يمكنك فتح وضع التحديد بطريقتين:
- انقر على *قائمة النقاط الثلاث* في الزاوية العلوية اليمنى واختر *تحديد*.
- نقر طويل على نقطة مفضلة أو مجلد.

عند تمكين وضع التحديد، تظهر مربعات الاختيار بجوار العناصر في القائمة. حدد المفضلات أو المجلدات المطلوبة بالنقر على مربعات الاختيار. لتحديد جميع العناصر في القائمة، انقر على أيقونة تحديد الكل في الزاوية العلوية اليمنى.

تعتمد الإجراءات المتاحة على نوع العنصر المحدد. عند تحديد المجلدات، تكون الإجراءات التالية متاحة:
- **مشاركة** — تصدير المجلدات المحددة كملف GPX للمفضلة.
- **حذف** — إزالة المجلدات المحددة.

عند تحديد نقاط المفضلة، تكون الإجراءات التالية متاحة:
- **نقل** — نقل المفضلات المحددة إلى مجلد آخر.
- **إضافة إلى علامات الخريطة** — إضافة النقاط المحددة إلى قائمة علامات الخريطة.
- **إضافة إلى مسار** — إضافة النقاط المحددة إلى مسار.
- **إضافة إلى الملاحة** — بدء الملاحة إلى النقطة المحددة.
- **حذف** — إزالة المفضلات المحددة.

</TabItem>

<TabItem value="ios" label="iOS">

![إجراءات المفضلة iOS](@site/static/img/personal/favorites_actions_ios.png)

- لإدارة عدة مفضلات، انقر على زر **التحرير** (*أيقونة القلم*).
- حدد مفضلات فردية أو مجلدات كاملة للعمليات الجماعية.
- **الخيارات المتاحة** — *مشاركة*، *نقل إلى مجموعة مفضلة*، *تغيير اللون*، و *حذف*.

</TabItem>

</Tabs>

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### إجراءات مجموعة المفضلة {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظائف مجلد المفضلة أندرويد](@site/static/img/personal/favorites_folder_functions_new_andr.png)

استخدم ***قائمة النقاط الثلاث*** بجوار كل مجلد لإدارة مجموعات المفضلة:

- **<Translate android="true" ids="shared_string_show_on_map"/>** / **إخفاء من الخريطة** — قم بتبديل هذا الخيار لعرض أو إخفاء نقاط المفضلة من المجلد على الخريطة.
- **تثبيت المجلد** — ثبت المجلد المحدد للحفاظ عليه في أعلى قائمة المفضلة للوصول إليه بشكل أسرع.
- **<Translate android="true" ids="shared_string_rename"/>** — استخدم هذا الخيار لتغيير اسم المجلد المحدد.
- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — خصص كيفية ظهور نقاط المفضلة في المجلد على الخريطة عن طريق تغيير أيقوناتها أو ألوانها أو تسمياتها.
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** / **إزالة من علامات الخريطة** — أضف جميع نقاط المفضلة من المجلد إلى *قائمة علامات الخريطة* أو أزلها حسب الحاجة لسهولة الرجوع إليها.
- **<Translate android="true" ids="add_to_a_track"/>** — أضف جميع نقاط المفضلة من المجلد المحدد إلى مسار. يفتح هذا شاشة اختيار المسار حيث يمكنك اختيار أو إنشاء مسار.
- **<Translate android="true" ids="shared_string_share"/>** — شارك نقاط المفضلة في المجلد عن طريق تصديرها كملف *Favorites.gpx*، مما يسهل نقل بياناتك أو نسخها احتياطيًا.
- **<Translate android="true" ids="shared_string_delete"/>** — احذف مجلد المفضلة المحدد وجميع النقاط الموجودة بداخله بشكل دائم.

</TabItem>

<TabItem value="ios" label="iOS">

![إجراءات المفضلة iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

استخدم ***النقر الطويل*** على المجلد لإدارة مجموعات المفضلة:

- **<Translate ios="true" ids="shared_string_show_on_map"/>** / **إخفاء من الخريطة** — قم بتبديل هذا الخيار لعرض أو إخفاء نقاط المفضلة من المجلد على الخريطة.
- **<Translate ios="true" ids="shared_string_rename"/>** — استخدم هذا الخيار لتغيير اسم المجلد المحدد.
- [<Translate ios="true" ids="default_appearance"/>](#change-group-appearance) — خصص كيفية ظهور نقاط المفضلة في المجلد على الخريطة عن طريق تغيير أيقوناتها أو ألوانها أو تسمياتها.
- **<Translate ios="true" ids="shared_string_share"/>** — شارك نقاط المفضلة في المجلد عن طريق تصديرها كملف *Favorites.gpx*، مما يسهل نقل بياناتك أو نسخها احتياطيًا.
- **<Translate ios="true" ids="shared_string_delete"/>** — احذف مجلد المفضلة المحدد وجميع النقاط الموجودة بداخله بشكل دائم.

</TabItem>

</Tabs>

### تغيير مظهر المجموعة {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *قائمة النقاط الثلاث → تغيير المظهر الافتراضي*

![وظائف مجلد المفضلة أندرويد](@site/static/img/personal/favorite_change_appearance_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *نقر طويل على المجلد → المظهر الافتراضي*

![إجراءات المفضلة iOS](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

يسمح خيار **تغيير مظهر المجموعة** بتعيين نمط افتراضي لجميع المفضلة في مجلد. يمكنك تعديل المعلمات التالية:

- **الأيقونة** — اختر أيقونة من الفئات المتاحة.
- **اللون** — حدد لونًا صلبًا لإبراز المفضلة.
- **الشكل** — اختر شكل علامة (دائرة، مربع، ثماني).

إذا كانت المفضلة في مجلد لديها بالفعل أيقونات أو ألوان أو أشكال مختلفة، يتم عرض *الحالة الأصلية*. هذا يعني أن كل مفضلة تحتفظ بنمطها الحالي ما لم تختار واحدًا جديدًا. عند الحفظ، سيتم أيضًا طلب منك اختيار كيفية تطبيق التغييرات:

- **تطبيق على النقاط الجديدة فقط** — تظل المفضلة الموجودة دون تغيير؛ ستحصل المفضلة الجديدة على المظهر الافتراضي.
- **تطبيق على النقاط الموجودة** — تحديث المفضلة الموجودة في المجلد فقط.
- **تطبيق على جميع النقاط** — تطبيق النمط الجديد على المفضلة الموجودة والمستقبلية.

توفر هذه المرونة إمكانية توحيد مظهر مجلد أو الاحتفاظ بتخصيصات فريدة مع تعيين الافتراضيات للنقاط الجديدة.


## تصدير / استيراد {#export--import}

يوفر OsmAnd عدة طرق [للنسخ الاحتياطي](./import-export.md) و[الاستعادة](./import-export.md#import) للمفضلة:

- **مواقع النسخ الاحتياطي** — التخزين المحلي، [سحابة OsmAnd](../personal/osmand-cloud.md) (فقط مع [اشتراك OsmAnd Pro أو OsmAnd Start](../purchases/index.md))، أو تطبيقات المراسلة الفورية.

- **تنسيق الملف** — يتم حفظ المفضلة كملفات `.gpx` (favorites.gpx).


### النسخ الاحتياطي السحابي المجاني {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![وظائف مجلد المفضلة أندرويد](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![إجراءات المفضلة iOS](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[النسخ الاحتياطي المجاني للمفضلة](../personal/osmand-cloud.md#osmand-start) هو خطة شراء خاصة تسمح لك بنسخ نقاطك المفضلة (المواقع) احتياطيًا لإصدارات **أندرويد، iOS**، أو **الويب** في تطبيق OsmAnd واستعادتها من سحابة OsmAnd. هذه الخطة متاحة لمستخدمي [OsmAnd Free أو Maps+](../purchases/index.md).  

يقدم *النسخ الاحتياطي المجاني للمفضلة* هذه المزايا:

- **لا يلزم الدفع**. استخدم ميزة النسخ الاحتياطي دون شراء اشتراكات مدفوعة.
- **حفظ نقاط المفضلة**. احفظ نقاطك المفضلة بانتظام في OsmAnd لتجنب فقدانها في حالة تعطل جهازك أو حذف التطبيق.
- **نقل نقاط المفضلة**. استورد نقاطك المفضلة إلى جهاز جديد باستخدام ميزة *النسخ الاحتياطي المجاني للمفضلة* إذا كنت تستخدم OsmAnd عبر أجهزة متعددة.  


### كيفية إنشاء نسخة احتياطية {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![وظائف مجلد المفضلة أندرويد](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![إجراءات المفضلة iOS](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

تحتاج إلى حساب سحابة OsmAnd لاستخدام ميزة *النسخ الاحتياطي المجاني للإعدادات*. إذا كان لديك حساب في *OsmAnd Pro* أو حساب نشط في *حساب سحابة OsmAnd*، فلن ترى اللافتة الترويجية.  

- *لافتة النسخ الاحتياطي المجاني للمفضلة*. انقر على هذه اللافتة لبدء عملية النسخ الاحتياطي.
- *أكمل خطوة التسجيل* إذا لم يكن لديك حساب سحابة OsmAnd باتباع الإرشادات في [دليل التسجيل](../personal/osmand-cloud.md#login).
- *انتقل إلى قائمة مشتريات OsmAnd* (*القائمة ← الإعدادات ← المشتريات*).
- *[حزمة OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. حدد هذا الخيار للوصول إلى ميزة النسخ الاحتياطي المجاني للإعدادات.
- *أنشئ نسخة احتياطية* من إعداداتك.


### كل المفضلة {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![إجراءات المفضلة أندرويد](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![تصدير واستيراد المفضلة iOS](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

يمكنك تصدير واستيراد مفضلاتك باستخدام الأزرار الخاصة في أسفل شاشة المفضلة. يمكن إرسال ملف [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) إلى Dropbox والبريد الإلكتروني وتطبيقات المراسلة والتطبيقات الأخرى المثبتة على جهازك والتي تدعم هذه الميزة.

- زر **استيراد** (*أندرويد*) / **استيراد المفضلة** (*iOS*). يسمح لك باستيراد نقاط المفضلة (*favorites.gpx*) كنقاط طريق من ملف *GPX* (تنسيق بيانات GPS شائع) من مساحة تخزين جهازك.
- زر **مشاركة** (*أندرويد*) / **تصدير المفضلة** (*iOS*). يسمح لك بتصدير (مشاركة) جميع مفضلاتك كملف *favorites.gpx*.


### مجموعة المفضلة {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![وظائف مجلد المفضلة أندرويد](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![إجراءات المفضلة iOS](@site/static/img/personal/favorites_actions_1_ios.png)   ![إجراءات المفضلة iOS](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- انقر على **قائمة النقاط الثلاث** (*أندرويد*) أو زر **التحرير** (*أيقونة القلم على iOS*) أو **انقر نقرًا طويلاً** على المجلد (*iOS*) لمجلد المفضلة المحدد.
- اختر زر **المشاركة** لإرسال ملف *Favorites.gpx* إلى ذاكرة جهازك أو مشاركته عبر تطبيقات المراسلة.  


### النسخ الاحتياطي التلقائي للمفضلة {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *Android → data → net.osmand → files → backup*

![تصدير النسخ الاحتياطي للمفضلة أندرويد](@site/static/img/personal/favorites_backup_export_andr.png)  ![النسخ الاحتياطي التلقائي للمفضلة أندرويد](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

اذهب إلى: *الملفات ← على iPhone الخاص بي ← خرائط OsmAnd ← favourites_backup*

![النسخ الاحتياطي التلقائي للمفضلة iOS](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

ينشئ OsmAnd **ملف نسخ احتياطي** في كل مرة يتم فيها تحرير المفضلة.

- **أندرويد**: يتم تخزين النسخ الاحتياطية في *Android → data → net.osmand → files → backup*. استخدم مدير ملفات تابع لجهة خارجية للوصول إليها.

- **iOS**: توجد الملفات في *الملفات ← على iPhone الخاص بي ← خرائط OsmAnd ← favourites_backup*.

**تصدير النسخ الاحتياطي اليدوي**  

- اذهب إلى *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- قم بتصدير ملف `.osf` إلى التخزين المحلي أو الخدمات السحابية أو شاركه مباشرة.

:::caution
في أحدث إصدارات ***أندرويد***، يكون الوصول إلى أدلة النظام محدودًا. ومع ذلك، بعد استخراج ملف المفضلة من الأرشيف، يظل من الممكن إرساله إلى تطبيقات المراسلة أو الخدمات السحابية، إلخ.  
:::


### المفضلة في ملف GPX {#favorites-in-gpx-file}

يتم تخزين جميع المعلومات حول المفضلة ووصفها باستخدام العلامات. عند إنشاء نقطة مفضلة، يمكنك كتابة [وصفك](#favorite-point) الخاص أو استخدام معلومات من بيانات [نقطة الاهتمام (POI)](../map/point-layers-on-map.md#points-of-interest-pois) الخاصة بـ OSM التي تم إنشاء نقطتك منها. تستخدم نقاط المفضلة ونقاط الاهتمام ونقاط الطريق نفس **العلامات** لتخزين المعلومات ويتم حفظها في **تنسيق ملف GPX**.  


```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  


## مقالات ذات صلة {#related-articles}

- [إدارة المسارات](../personal/tracks/manage-tracks.md#import--export-track)
- [سجل البحث](../search/search-history.md#export-and-share)
- [مخططات لوحة الألوان](../personal/color-palette-schemes.md)