---
source-hash: b0e4660605b0cdfdfcfc653e1f8929974cb654b66c0c55fbc588b89e37d05091
sidebar_position: 3
title:  سجل البحث
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## نظرة عامة {#overview}

*سجل البحث* هو سجل لجميع عمليات البحث والمواقع التي أدخلتها أو بحثت عنها في التطبيق على مدار فترة الاستخدام. تتيح لك هذه الأداة العثور بسهولة على المواقع التي تم البحث عنها مسبقًا والوصول إليها، مما يسهل التنقل ويوفر وقتك.

يوفر OsmAnd عدة طرق لعرض سجل البحث الخاص بك.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#how-to-use) للأداة.
- اذهب إلى قائمة أندرويد الرئيسية *Menu → Search → History tab*.
- عند التحضير لبدء مسار، انقر على *Navigation → Set destination → Search field*.
- يعرض مربع المعلومات في قائمة التنقل الخاصة بـ [إعداد المسار](../navigation/setup/route-navigation.md#navigation-menu) قائمة بنقاط الوجهة الأخيرة، والتي تعد أيضًا جزءًا من سجل البحث.
- سجل البحث متاح في [Android Auto](../navigation/auto-car.md#search) و [CarPlay](../navigation/car-play.md#search).


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![سجل البحث](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![سجل البحث](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يعمل سجل البحث على توفير معلومات ذات صلة بإجراءاتك السابقة.

- *إعادة البحث*. يمكنك استخدام سجل البحث للبحث مرة أخرى عن الأماكن أو العناوين التي تم البحث عنها مسبقًا دون الحاجة إلى إعادة إدخال الاستعلام.

- *الوصول السريع إلى الأماكن التي تتم زيارتها بشكل متكرر*. إذا كنت تزور أماكن معينة بشكل متكرر، مثل منزلك أو عملك أو أماكنك المفضلة، فإن سجل البحث يحفظ تلك الأماكن، مما يوفر وصولاً سريعًا إليها.

- *تتبع الرحلات السابقة*. يمكن أن يكون سجل البحث مفيدًا لتتبع الرحلات والمسارات السابقة. يمكنك تتبع المسارات التي سلكتها من قبل، أو [تخطيط مسارك التالي](../plan-route/create-route.md) بناءً على المسارات السابقة.

- *البحث عن أماكن خلال فترة زمنية معينة*. بالنسبة لتطبيق أندرويد، تحتاج إلى استخدام النقر المطول، ثم العثور على الشهر الذي قمت فيه بالرحلة، والخروج من قائمة الحذف وتعيين الاسم في حقل البحث. بالنسبة لتطبيق iOS، فإن قائمة سجل البحث مقسمة بالفعل إلى كتل حسب الشهر.

- *حذف الإدخالات*. يوفر سجل البحث القدرة على [حذف](#delete) الإدخالات السابقة، وهو ما يمكن أن يكون مفيدًا للسرية أو للحفاظ على تنظيم سجلك.


## عناصر السجل {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![سجل البحث](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![سجل البحث](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يحتوي كل حقل في قائمة سجل البحث على بعض **المعلومات** المتاحة للتطبيق.

- أيقونة تحدد نوع أو فئة الكائن الذي تم العثور عليه.
- اسم الكائن أو الموقع أو العنوان أو نوع الاستعلام. بالنسبة للمسارات، يتم عرض معلومات حول المسافة وعدد نقاط الطريق والوقت.
- المسافة من موقعك الحالي إلى النقطة والاتجاه بالبوصلة.


### ترتيب العناصر {#order-of-items}

- **العناصر الحديثة**. يتم عرض أحدث الطلبات أو المواقع في أعلى القائمة. وهذا يسمح بالوصول السريع إلى العناصر المستخدمة مؤخرًا.
- **الترتيب الزمني**. يتم ترتيب العناصر في قائمة سجل البحث ترتيبًا زمنيًا، بدءًا من أقدم الإدخالات وانتهاءً بأحدثها. تنتقل العناصر القديمة تدريجيًا إلى أسفل القائمة مع إضافة إدخالات جديدة، ما لم يتم استخدام العناصر القديمة في سجل البحث، وفي هذه الحالة سيتم نقلها إلى أعلى القائمة.
- في iOS، يتم فرز القائمة حسب الشهر.

### نوع الكائنات {#type-of-objects}

تدخل **أنواع الكائنات** التالية إلى قائمة سجل البحث:

- **المواقع**. يمكن أن يكون هذا عنوانًا أو اسم عمل أو رقم مسار أو إحداثيات أو علامات أو نقاط اهتمام أو ملاحظات OSM أو أماكن نقرت عليها على الخريطة.
- **المسارات ونقاط الطريق**. تتضمن القائمة المسارات التي أنشأتها أو سجلتها أو نزلتها والتي استخدمتها في المسارات السابقة، ونقاط الطريق إذا انتقلت إليها بشكل منفصل.


## الإجراءات {#actions}

في أداة سجل البحث، يمكنك [حذف](#delete) الاستعلامات غير الضرورية، كلها مرة واحدة أو حسب العناصر الفردية. يمكنك استخدام [تصدير](#export-and-share) السجل. يوفر تطبيق أندرويد إجراءً إضافيًا لـ [مشاركة](#share-android) عناصر البحث كملف [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

يمكنك **تعطيل أو تمكين** عرض سجل البحث بأكمله. في هذه الحالة، لا يتم حذف الاستعلامات من الجهاز. في أندرويد، يوجد المفتاح في الشاشة الرئيسية للأداة في [علامة تبويب السجل](#overview). في iOS، يوجد في *Menu → Settings → OsmAnd Settings → History → Search History*.


### حذف {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![حذف سجل البحث](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![حذف سجل البحث](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

بعد استخدام OsmAnd لفترة طويلة، يمكن أن تصبح قائمة *سجل البحث* طويلة جدًا، لذا فإن حذف استعلامات البحث يساعد على مسح القائمة. يمكنك حذف الاستعلامات التي لم تعد ذات صلة أو التي لم تعد تنوي استخدامها في المستقبل، مما يسهل البحث في القائمة، خاصة عندما تحتاج إلى العثور على استعلامات بحث محددة بسرعة.

تحتاج إلى **النقر المطول على أي من عناصر الاستعلام في القائمة** لفتح شاشة الحذف.

- *تحديد أو إلغاء تحديد عناصر عشوائية* - انقر على العنصر المطلوب في القائمة.
- *تحديد الفترة المتاحة للحذف*، مثل اليوم أو آخر 7 أيام أو الشهر - حدد المربع الذي يحتوي على العنوان الفرعي في القائمة.
- *يمكنك حذف السجل بأكمله* مرة واحدة عن طريق النقر على زر *تحديد الكل* في أسفل الشاشة.
- *Menu → Settings → OsmAnd settings → History → Actions*. يحتوي هذا القسم على زر **حذف كل السجل**.


### التصدير والمشاركة {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![إعدادات السجل العامة في أندرويد](@site/static/img/personal/profiles/general_settings_history_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![إعدادات السجل العامة في iOS](@site/static/img/personal/profiles/history_settings_ios.png)  

</TabItem>

</Tabs>

هناك العديد من الخيارات المتاحة لتصدير سجل البحث. يتم تصدير جميع الملفات بتنسيق `.osf` (ملف إعدادات OsmAnd).

1. *Menu → Settings → OsmAnd settings → History → Search history*.  
    التصدير متاح باستخدام قائمة إعدادات OsmAnd. بالنسبة لنظام أندرويد، يؤدي اتباع هذا المسار إلى شاشة الحذف، حيث تتوفر [مشاركة السجل](#share-android). في حالة iOS، يمكنك تحديد عناصر فردية أو السجل بأكمله على الشاشة، وبعد النقر على زر *تصدير*، انتقل إلى قائمة *النسخ الاحتياطي المحلي*.

2. *Menu → Settings → OsmAnd settings → History → Actions → Back up as file* (أندرويد).  
    *Menu → Settings → OsmAnd settings → History → Actions → Export* (iOS).  
    يؤدي النقر على هذه العناصر إلى نقلك إلى قائمة *استيراد/تصدير* (أندرويد) أو *النسخ الاحتياطي المحلي* (iOS). قم بتوسيع قائمة *أماكني* وابحث عن *سجل البحث*. يتم تصدير جميع الاستعلامات في ملف واحد مرة واحدة.

3. *Menu → Settings → Import/Export → Export to file* (أندرويد).  
    *Menu → Settings → Local Backup → Back up as file* (iOS).  
    يمكنك قراءة المزيد من التفاصيل في مقالة [الاستيراد/التصدير](../personal/import-export.md#export).

4. [سحابة OsmAnd](../personal/osmand-cloud.md#select-data-to-back-up)  
    يمكنك استخدام السحابة لعمل نسخة احتياطية من سجل البحث الخاص بك. في قائمة *التغييرات المحلية* أو *Settings → Back up data → My Places → Search History*.

![إعدادات السجل](@site/static/img/search/history_search_share_andr.png)  

يمكن أن يكون تصدير العناصر أو سجل البحث بأكمله مفيدًا في الحالات التالية:

- *النسخ الاحتياطي*. يمكنك عمل نسخة احتياطية من سجل البحث الخاص بك لحفظ المعلومات قبل حذفها واستعادتها إذا لزم الأمر.
- *النقل إلى جهاز آخر*. عند تغيير الأجهزة، يمكنك استخدام وظيفة التصدير أو السحابة لنقل سجل البحث الخاص بك إلى جهاز جديد دون الحاجة إلى البحث وإدخال البيانات مرة أخرى.
- *تحليل ومعالجة البيانات*. يمكنك تصدير سجل البحث الخاص بك لتحليل البيانات أو استخدامه في تطبيقات أخرى.
- [مشاركة](#share-android) سجل البحث مع مستخدمي OsmAnd الآخرين.


### المشاركة (أندرويد) {#share-android}

![إعدادات السجل](@site/static/img/search/history_search_share_andr.png)

تتشابه خطوات مشاركة عناصر سجل البحث مع [التصدير](#export-and-share)، مع اختلاف أنك تقوم بتصدير السجل بأكمله مرة واحدة كملف [osf](../../technical/osmand-file-formats/osmand-osf.md)، بينما يمكنك مشاركة الملفات المحددة الفردية بتنسيق gpx.

على شاشة [الحذف](#delete)، حدد العناصر المطلوبة من قائمة سجل البحث. في الزاوية العلوية اليمنى من الشاشة، توجد أيقونة تشير إلى المشاركة. حدد تطبيقًا أو إجراءً متاحًا في القائمة للمشاركة.


## مقالات ذات صلة {#related-articles}

- [بحث شامل](./search-all.md)
- [بحث عن عنوان](./search-address.md)
- [بحث عن نقاط الاهتمام](./search-poi.md)
- [بحث بالإحداثيات](./search-coordinates.md)