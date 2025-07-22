---
source-hash: 6b2c4fa700522da26fcad9168c57a7b9f010154747f3253c53cdd3c3067262a8
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

تتيح لك ميزة **المفضلة** في OsmAnd إنشاء إشارات مرجعية (ملاحظات) على الخريطة. تظهر نقاط المفضلة هذه كنجوم صفراء افتراضيًا، ولكن يمكنك تخصيصها بالكامل بألوان وأشكال وأيقونات مختلفة. يتم تجميع المفضلة في طبقة خريطة مخصصة، والتي تصبح مرئية من *مستوى التكبير/التصغير السادس*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## نقطة مفضلة {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

تعد المفضلة جزءًا من طبقة خريطة خاصة، ويمكنك [إظهارها أو إخفائها](../map/point-layers-on-map.md#favorites) مع [أسمائها](../map/point-layers-on-map.md#favorite-and-poi-names) على الخريطة. يؤدي النقر على نقطة مفضلة إلى فتح [قائمة السياق](../map/map-context-menu.md#favorites--track-points-from-the-group)، مما يتيح لك عرض التفاصيل و[تعديل أو حذف](../map/map-context-menu.md#add--edit-favorite) النقطة.


### إنشاء {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

لإضافة نقطة مفضلة:

1. حدد [نقطة اهتمام (POI)](../map/point-layers-on-map.md#points-of-interest-pois) أو هيكل على الخريطة.
    نقر قصير لنقطة اهتمام أو نقر طويل لنقطة خريطة عامة.
2. حدد [إضافة (☆)](../map/map-context-menu.md#add--edit-favorite) من قائمة سياق الخريطة.

عند إضافة نقطة من بيانات OSM، يتم تضمين معلومات نقطة الاهتمام ذات الصلة تلقائيًا. يمكنك أيضًا إنشاء مفضلة عن طريق [النقر لفترة طويلة](../map/map-context-menu.md#select-any-point-long-tap) على أي موقع على الخريطة.

***حقول نقطة مفضلة:***

- **الاسم** — اسم فريد داخل المجموعة (*مطلوب*).
- **العنوان** و **الوصف** (*اختياري*).
- **المجموعة** — اختر من [مجموعة مفضلة](#manage-favorites) موجودة أو أنشئ مجموعة جديدة.
- **التخصيص البصري** — يمكن أن تتطابق الأيقونة واللون والشكل مع [مظهر المجموعة الافتراضي](#change-group-appearance) أو يتم تخصيصها بشكل فردي.


### تعديل / استبدال / حذف {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

لتعديل نقطة مفضلة:

1. [انقر](../map/map-context-menu.md#select-an-object-single-tap) على المفضلة على الخريطة أو انتقل إلى [مفضلاتي](#manage-favorites).
2. اختر **تعديل المفضلة** من [*قائمة سياق الخريطة*](../map/map-context-menu.md#add--edit-favorite).

***الخيارات المتاحة:***

- **تعديل التفاصيل** — الاسم، الأيقونة، المجموعة، العنوان، والوصف.
- **استبدال الموقع** — استبدال نقطة أخرى بهذه النقطة. مفيد لتحديث نقطة معينة (مثل *سيارتي المتوقفة*) أو إنشاء نقطة جديدة.
- **حذف** — إزالة المفضلة باستخدام خيار الحذف، والذي يمكن الوصول إليه من خلال قائمة التعديل أو عبر زر الحذف على أندرويد.


### أيقونات المفضلة {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

تتوفر مجموعة واسعة من الأيقونات لنقاط الاهتمام ونقاط الطريق في OsmAnd. يمكنك:

- تحديد أيقونة من قائمة [فئات نقاط الاهتمام](../search/search-poi.md#categories-and-their-filters).
- العثور على أيقونة مناسبة باستخدام [خيار البحث](../search/search-all.md#how-to-use).


### المفضلة الخاصة (الشخصية) {#special-favorites-personal}

يحتوي *المجلد الشخصي* على نقاط خاصة مثل **<Translate android="true" ids="favorite_home_category"/>** و **<Translate android="true" ids="work_button"/>**، والتي تستخدم غالبًا في [التنقل](../navigation/setup/route-navigation.md#select-starting-point). لا يحتوي هذا المجلد على *قائمة بثلاث نقاط*، ولا يمكن تغيير معلماته.


## إدارة المفضلة {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

يتيح لك قسم **مفضلاتي** ما يلي:

- [البحث](#order--sorting--search) عن مفضلات أو مجموعات محددة.
- [العمليات الجماعية](#bulk-edit--delete) — إعادة تسمية، نقل، أو حذف مفضلات متعددة في وقت واحد.

### الترتيب / الفرز / البحث {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **الفرز** — يتم فرز مجلدات ونقاط المفضلة أبجديًا، مع وجود [المجلد الشخصي](../personal/favorites.md#special-favorites-personal) في الأعلى.
- **البحث** — استخدم [البحث العام](../search/search-all.md) للعثور على المفضلة بالاسم. يتم فرز المفضلة حسب المسافة من مركز الخريطة.


### التعديل / الحذف بالجملة {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. لإدارة مفضلات متعددة، انقر على أيقونة **حذف** (*أيقونة سلة المهملات على أندرويد*) أو زر **تعديل** (*أيقونة القلم على iOS*).
2. حدد مفضلات فردية أو مجلدات كاملة للعمليات الجماعية.
3. **الخيارات المتاحة** — *حذف* لأندرويد و iOS، *نقل إلى مجموعة مفضلة*، *مشاركة*، و *تغيير اللون* لـ iOS.

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

انتقل إلى: *قائمة بثلاث نقاط ← تغيير المظهر الافتراضي*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *نقر طويل على المجلد ← المظهر الافتراضي*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

استخدم ***قائمة الثلاث نقاط*** (*أندرويد*) بجانب كل مجلد و***النقر الطويل*** (*iOS*) على المجلد لإدارة مجموعات المفضلة:

- **<Translate android="true" ids="shared_string_rename"/>** — استخدم هذا الخيار لتغيير اسم المجلد المحدد.

- **<Translate android="true" ids="change_default_appearance"/>** — خصص كيفية ظهور نقاط المفضلة في المجلد على الخريطة عن طريق تغيير أيقوناتها أو ألوانها أو تسمياتها.

- **<Translate android="true" ids="shared_string_show_on_map"/>** أو **إخفاء على الخريطة** — قم بتبديل هذا الخيار لعرض أو إخفاء نقاط المفضلة من المجلد على الخريطة.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** أو **إزالة من علامات الخريطة** (*أندرويد فقط*) — أضف جميع نقاط المفضلة من المجلد إلى *قائمة علامات الخريطة* أو أزلها حسب الحاجة للرجوع إليها بسهولة.

- **<Translate android="true" ids="shared_string_share"/>** — شارك نقاط المفضلة في المجلد عن طريق تصديرها كملف *Favorites.gpx*، مما يسهل نقل بياناتك أو نسخها احتياطيًا.

- **<Translate android="true" ids="shared_string_delete"/>** — احذف مجلد المفضلة المحدد وجميع النقاط الموجودة بداخله بشكل دائم.

مزيد من التفاصيل في مقال [أماكني](../personal/myplaces.md#favorites).



### تغيير مظهر المجموعة {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

إعدادات *تغيير مظهر المجموعة*:

- **أيقونة، لون، شكل** — تعيين نمط افتراضي لجميع المفضلة في مجموعة.
- **التناسق** — ترث المفضلة الجديدة المضافة إلى المجموعة المظهر الافتراضي تلقائيًا.
- **التخصيص** — تجاوز الإعدادات الافتراضية للنقاط الموجودة في المجلد، أو المفضلة الجديدة فقط، أو تطبيقها على الجميع.


## تصدير / استيراد {#export--import}

يوفر OsmAnd عدة طرق [لعمل نسخة احتياطية](./import-export.md) و [استعادة](./import-export.md#import) المفضلة:

- **مواقع النسخ الاحتياطي** — التخزين المحلي، [سحابة OsmAnd](../personal/osmand-cloud.md) (فقط مع [اشتراك OsmAnd Pro أو OsmAnd Start](../purchases/index.md))، أو تطبيقات المراسلة الفورية.

- **تنسيق الملف** — يتم حفظ المفضلة كملفات `.gpx` (favorites.gpx).


### النسخ الاحتياطي السحابي المجاني {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[النسخ الاحتياطي المجاني للمفضلة](../personal/osmand-cloud.md#osmand-start) هو خطة شراء خاصة تتيح لك عمل نسخة احتياطية من نقاطك المفضلة (المواقع) لإصدارات **أندرويد، iOS**، أو **الويب** في تطبيق OsmAnd واستعادتها من سحابة OsmAnd. هذه الخطة متاحة لمستخدمي [OsmAnd Free أو Maps+](../purchases/index.md).

يقدم *النسخ الاحتياطي المجاني للمفضلة* هذه الفوائد:

- **لا يلزم الدفع**. استخدم ميزة النسخ الاحتياطي دون شراء اشتراكات مدفوعة.
- **حفظ نقاط المفضلة**. احفظ نقاطك المفضلة بانتظام في OsmAnd لتجنب فقدانها في حالة تعطل جهازك أو حذف التطبيق.
- **نقل نقاط المفضلة**. استورد نقاطك المفضلة إلى جهاز جديد باستخدام ميزة *النسخ الاحتياطي المجاني للمفضلة* إذا كنت تستخدم OsmAnd عبر أجهزة متعددة.


#### كيفية إنشاء نسخة احتياطية {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

تحتاج إلى حساب OsmAnd Cloud لاستخدام ميزة *النسخ الاحتياطي المجاني للإعدادات*. إذا كان لديك حساب في *OsmAnd Pro* أو حساب نشط في *OsmAnd Cloud*، فلن ترى لافتة الترويج.

- *لافتة النسخ الاحتياطي المجاني للمفضلة*. انقر على هذه اللافتة لبدء عملية النسخ الاحتياطي.
- *أكمل خطوة التسجيل* إذا لم يكن لديك حساب OsmAnd Cloud باتباع الإرشادات في [دليل التسجيل](../personal/osmand-cloud.md#login).
- *انتقل إلى قائمة مشتريات OsmAnd* (*القائمة ← الإعدادات ← المشتريات*).
- *[حزمة OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. حدد هذا الخيار للوصول إلى ميزة النسخ الاحتياطي المجاني للإعدادات.
- *إنشاء نسخة احتياطية* من إعداداتك.


### جميع المفضلة {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

يمكنك تصدير واستيراد مفضلاتك باستخدام الأزرار الخاصة في أسفل شاشة المفضلة. يمكن إرسال ملف [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) إلى Dropbox، البريد الإلكتروني، تطبيقات المراسلة، والتطبيقات الأخرى المثبتة على جهازك التي تدعم هذه الميزة.

- زر **استيراد** (*أندرويد*) / **استيراد مفضلة** (*iOS*). يتيح لك استيراد نقاط المفضلة (*favorites.gpx*) كنقاط طريق من ملف *GPX* (تنسيق بيانات GPS شائع) من تخزين جهازك.
- زر **مشاركة** (*أندرويد*) / **تصدير مفضلة** (*iOS*). يتيح لك تصدير (مشاركة) جميع مفضلاتك كملف *favorites.gpx*.


### مجموعة المفضلة {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- انقر على **قائمة الثلاث نقاط** (*أندرويد*) أو زر **تعديل** (*أيقونة القلم على iOS*) أو **النقر الطويل** على المجلد (*iOS*) لمجلد المفضلة المحدد.
- اختر زر **مشاركة** لإرسال ملف *Favorites.gpx* إلى ذاكرة جهازك أو مشاركته عبر تطبيقات المراسلة.


### النسخ الاحتياطي التلقائي للمفضلة {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

انتقل إلى: *أندرويد ← بيانات ← net.osmand ← ملفات ← نسخ احتياطي*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *ملفات ← على جهاز iPhone الخاص بي ← خرائط OsmAnd ← favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

ينشئ OsmAnd **ملف نسخ احتياطي** في كل مرة يتم فيها تعديل المفضلة.

- **أندرويد**: يتم تخزين النسخ الاحتياطية في *أندرويد ← بيانات ← net.osmand ← ملفات ← نسخ احتياطي*. استخدم مدير ملفات تابع لجهة خارجية للوصول إليها.

- **iOS**: توجد الملفات في *ملفات ← على جهاز iPhone الخاص بي ← خرائط OsmAnd ← favourites_backup*.

**تصدير النسخ الاحتياطي اليدوي**

- انتقل إلى *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- قم بتصدير ملف `.osf` إلى التخزين المحلي، أو الخدمات السحابية، أو شاركه مباشرة.

:::caution
في أحدث إصدارات ***أندرويد***، الوصول إلى أدلة النظام محدود. ومع ذلك، بعد استخراج ملف المفضلة من الأرشيف، لا يزال من الممكن إعادة توجيهه إلى تطبيقات المراسلة أو الخدمات السحابية، إلخ.
:::


### المفضلة في ملف GPX {#favorites-in-gpx-file}

يتم تخزين جميع المعلومات حول المفضلة ووصفها باستخدام العلامات. عند إنشاء نقطة مفضلة، يمكنك كتابة [وصفك](#favorite-point) الخاص أو استخدام المعلومات من بيانات [نقطة الاهتمام (POI)](../map/point-layers-on-map.md#points-of-interest-pois) في OSM التي تم إنشاء نقطتك منها. تستخدم نقاط المفضلة ونقاط الاهتمام ونقاط الطريق نفس **العلامات** لتخزين المعلومات ويتم حفظها بتنسيق **ملف GPX**.


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

> *آخر تحديث: أبريل 2025*