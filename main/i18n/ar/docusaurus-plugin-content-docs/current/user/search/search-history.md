---
source-hash: 7a908eb0d049f610343ddbeb81ac84c7f787f549729ffd82f824c9c2f9bd25d6
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

*سجل البحث* هو سجل لجميع عمليات البحث والمواقع التي أدخلتها أو بحثت عنها في التطبيق خلال فترة الاستخدام. تتيح لك هذه الأداة العثور بسهولة على المواقع التي تم البحث عنها مسبقًا والوصول إليها، مما يسهل التنقل ويوفر وقتك.

يوفر OsmAnd عدة طرق لعرض سجل البحث الخاص بك.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#how-to-use) للأداة.
- انتقل إلى *القائمة الرئيسية لنظام Android ← بحث ← علامة تبويب السجل*.
- عند التحضير لبدء مسار، انقر على *الملاحة ← تعيين الوجهة ← حقل البحث*.
- تعرض كتلة المعلومات في قائمة الملاحة [لإعداد المسار](../navigation/setup/route-navigation.md#navigation-menu) قائمة بنقاط الوجهة الأخيرة، والتي تعد أيضًا جزءًا من سجل البحث.
- سجل البحث متاح في [Android Auto](../navigation/auto-car.md#search) و [CarPlay](../navigation/car-play.md#search).


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يخدم سجل البحث لتقديم معلومات ذات صلة حول إجراءاتك السابقة.

- *إعادة البحث*. يمكنك استخدام سجل البحث للبحث مرة أخرى عن الأماكن أو العناوين التي تم البحث عنها مسبقًا دون الحاجة إلى إعادة إدخال الاستعلام.

- *الوصول السريع إلى الأماكن التي يتم زيارتها بشكل متكرر*. إذا كنت تزور أماكن معينة بشكل متكرر، مثل منزلك أو عملك أو أماكنك المفضلة، فإن سجل البحث يحفظ تلك الأماكن، مما يوفر وصولاً سريعًا إليها.

- *تتبع الرحلات السابقة*. يمكن أن يكون سجل البحث مفيدًا لتتبع الرحلات والمسارات السابقة. يمكنك تتبع المسارات التي سلكتها من قبل، أو [تخطيط مسارك التالي](../plan-route/create-route.md) بناءً على المسارات السابقة.

- *البحث عن الأماكن خلال فترة زمنية معينة*. بالنسبة لتطبيق Android، تحتاج إلى استخدام نقرة طويلة، ثم العثور على الشهر الذي قمت فيه بالرحلة، والخروج من قائمة الحذف وتعيين الاسم في حقل البحث. بالنسبة لتطبيق iOS، يتم تقسيم قائمة سجل البحث بالفعل إلى كتل حسب الشهر.

- *حذف الإدخالات*. يوفر سجل البحث القدرة على [حذف](#delete) الإدخالات السابقة، والتي يمكن أن تكون مفيدة للسرية أو للحفاظ على تنظيم سجلاتك.


## عناصر السجل {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

يحتوي كل حقل في قائمة سجل البحث على بعض **المعلومات** المتاحة للتطبيق.

- أيقونة تحدد نوع أو فئة الكائن الذي تم العثور عليه.
- اسم الكائن أو موقعه أو عنوانه أو استعلام النوع. بالنسبة للمسارات، يتم عرض معلومات حول المسافة وعدد نقاط الطريق والوقت.
- المسافة من موقعك الحالي إلى النقطة والاتجاه بالبوصلة.


### ترتيب العناصر {#order-of-items}

- **العناصر الأخيرة**. يتم عرض الطلبات أو المواقع الأحدث في الجزء العلوي من القائمة. يتيح ذلك الوصول السريع إلى العناصر المستخدمة مؤخرًا.
- **الترتيب الزمني**. يتم ترتيب العناصر في قائمة سجل البحث بترتيب زمني، بدءًا من الإدخالات الأقدم أو الأسبق وانتهاءً بالإدخالات الأحدث أو الأخيرة. تنتقل العناصر القديمة تدريجيًا إلى أسفل القائمة مع إضافة إدخالات جديدة، ما لم يتم استخدام العناصر القديمة في سجل البحث، وفي هذه الحالة سيتم نقلها إلى أعلى القائمة.
- في iOS، يتم فرز القائمة حسب الشهر.

### نوع الكائنات {#type-of-objects}

تصل **أنواع الكائنات** التالية إلى قائمة سجل البحث:

- **المواقع**. يمكن أن يكون هذا عنوانًا أو اسم عمل أو رقم مسار أو إحداثيات أو علامات أو نقاط اهتمام أو ملاحظات OSM أو أماكن نقرت عليها على الخريطة.
- **المسارات ونقاط الطريق**. تتضمن القائمة المسارات التي أنشأتها أو سجلتها أو قمت بتنزيلها والتي استخدمتها في المسارات السابقة، ونقاط الطريق إذا انتقلت إليها بشكل منفصل.


## الإجراءات {#actions}

في أداة سجل البحث، يمكنك [حذف](#delete) الاستعلامات غير الضرورية، كلها مرة واحدة أو حسب العناصر الفردية. يمكنك استخدام سجل [التصدير](#export-and-share). يوفر تطبيق Android إجراءً إضافيًا [لمشاركة](#share-android) عناصر البحث كملف [GPX](../../technical/osmand-file-formats/osmand-gpx.md).

يمكنك **تعطيل أو تمكين** عرض سجل البحث بالكامل. في هذه الحالة، لا يتم حذف الاستعلامات من الجهاز. في Android، يوجد المفتاح في الشاشة الرئيسية للأداة في [علامة تبويب السجل](#overview). في iOS، يوجد في *القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل ← سجل البحث*.


### حذف {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

بعد استخدام OsmAnd لفترة طويلة، يمكن أن تصبح قائمة *سجل البحث* طويلة جدًا، لذا فإن حذف استعلامات البحث يساعد على مسح القائمة. يمكنك حذف الاستعلامات التي لم تعد ذات صلة أو التي لم تعد تنوي استخدامها في المستقبل، مما يسهل البحث في القائمة، خاصة عندما تحتاج إلى العثور على استعلامات بحث محددة بسرعة.

تحتاج إلى **الضغط لفترة طويلة على أي من عناصر الاستعلام في القائمة** لفتح شاشة الحذف.

- *تحديد أو إلغاء تحديد العناصر العشوائية* - انقر على العنصر المطلوب في القائمة.
- *تحديد الفترة المتاحة للحذف*، مثل اليوم، أو آخر 7 أيام، أو الشهر - حدد المربع الذي يحتوي على العنوان الفرعي في القائمة.
- *يمكنك حذف السجل بالكامل* دفعة واحدة بالنقر على زر *تحديد الكل* في أسفل الشاشة.
- *القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل ← الإجراءات*. يحتوي هذا القسم على زر **حذف كل السجل**.


### التصدير والمشاركة {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

انتقل إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png)

</TabItem>

</Tabs>

تتوفر عدة خيارات لتصدير سجل البحث. يتم تصدير جميع الملفات بتنسيق `.osf` (ملف إعدادات OsmAnd).

1. *القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل ← سجل البحث*.
    التصدير متاح باستخدام قائمة إعدادات OsmAnd. بالنسبة لنظام Android، يؤدي اتباع هذا المسار إلى شاشة الحذف، حيث تتوفر [مشاركة السجل](#share-android). في حالة iOS، يمكنك تحديد عناصر فردية أو السجل بالكامل على الشاشة، وبعد النقر على زر *تصدير*، انتقل إلى قائمة *النسخ الاحتياطي المحلي*.

2. *القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل ← الإجراءات ← النسخ الاحتياطي كملف* (Android).
    *القائمة ← الإعدادات ← إعدادات OsmAnd ← السجل ← الإجراءات ← تصدير* (iOS).
    يؤدي النقر على هذه العناصر إلى قائمة *الاستيراد/التصدير* (Android) أو *النسخ الاحتياطي المحلي* (iOS). قم بتوسيع قائمة *أماكني* وابحث عن *سجل البحث*. يتم تصدير جميع الاستعلامات في ملف واحد دفعة واحدة.

3. *القائمة ← الإعدادات ← استيراد/تصدير ← تصدير إلى ملف* (Android).
    *القائمة ← الإعدادات ← النسخ الاحتياطي المحلي ← النسخ الاحتياطي كملف* (iOS).
    يمكنك قراءة المزيد من التفاصيل في مقالة [الاستيراد/التصدير](../personal/import-export.md#export).

4. [OsmAnd Cloud](../personal/osmand-cloud.md#select-data-to-back-up)
    يمكنك استخدام السحابة لعمل نسخة احتياطية من سجل البحث الخاص بك. في قائمة *التغييرات المحلية* أو *الإعدادات ← النسخ الاحتياطي للبيانات ← أماكني ← سجل البحث*.

![Settings History](@site/static/img/search/history_search_share_andr.png)

يمكن أن يكون تصدير العناصر أو سجل البحث بالكامل مفيدًا في الحالات التالية:

- *النسخ الاحتياطي*. يمكنك عمل نسخة احتياطية من سجل البحث الخاص بك لحفظ المعلومات قبل حذفها واستعادتها إذا لزم الأمر.
- *النقل إلى جهاز آخر*. عند تغيير الأجهزة، يمكنك استخدام وظيفة التصدير أو السحابة لنقل سجل البحث الخاص بك إلى جهاز جديد دون الحاجة إلى البحث وإدخال البيانات مرة أخرى.
- *تحليل ومعالجة البيانات*. يمكنك تصدير سجل البحث الخاص بك لتحليل البيانات أو استخدامه في تطبيقات أخرى.
- [مشاركة](#share-android) سجل البحث مع مستخدمي OsmAnd الآخرين.


#### مشاركة (Android) {#share-android}

![Settings History](@site/static/img/search/history_search_share_andr.png)

خطوات مشاركة عناصر سجل البحث مماثلة [للتصدير](#export-and-share)، مع اختلاف أنك تصدر السجل بالكامل دفعة واحدة كملف [osf](../../technical/osmand-file-formats/osmand-osf.md)، بينما يمكنك مشاركة الملفات المحددة بشكل فردي بتنسيق gpx.

على شاشة [الحذف](#delete)، حدد العناصر المطلوبة من قائمة سجل البحث. في الزاوية العلوية اليمنى من الشاشة، توجد أيقونة تشير إلى المشاركة. حدد تطبيقًا أو إجراءً متاحًا في القائمة للمشاركة.


## مقالات ذات صلة {#related-articles}

- [البحث عن الكل](./search-all.md)
- [البحث عن عنوان](./search-address.md)
- [البحث عن نقطة اهتمام](./search-poi.md)
- [البحث عن إحداثيات](./search-coordinates.md)


> *آخر تحديث: يوليو 2024*