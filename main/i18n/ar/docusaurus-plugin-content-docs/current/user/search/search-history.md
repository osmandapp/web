---
source-hash: e750c3ad7de0205a9500f893c56be0ee9d096f570987bbd67c2ad004df8b1816
sidebar_position: 3
title:  استكشاف البحث
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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

يساعدك تبويب **الاستكشاف** في أداة البحث على اكتشاف الأماكن الشائعة من حولك والعودة بسرعة إلى الأماكن التي سبق أن بحثت عنها أو تنقلت إليها. يحتوي على قسمين: [الأماكن الشائعة القريبة](#popular-places-nearby) و[السجل](#history-items).

*السجل* هو سجل لجميع عمليات البحث ووجهات التنقل التي أدخلتها أو بحثت عنها في التطبيق على مدار فترة الاستخدام. تتيح لك هذه الأداة العثور بسهولة على المواقع التي تم البحث عنها مسبقًا والوصول إليها، مما يسهل التنقل ويوفر وقتك.

يوفر OsmAnd عدة طرق لعرض سجلك.

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة، وسيؤدي النقر عليه إلى نقلك إلى [الشاشة العامة](#how-to-use) للأداة.
- اذهب إلى القائمة الرئيسية *Menu → Search → Explore tab*.
- عند التحضير لبدء مسار، انقر على *Navigation → Set destination → Search field*.
- يعرض مربع المعلومات في قائمة التنقل الخاصة بـ [إعداد المسار](../navigation/setup/route-navigation.md#navigation-menu) قائمة بنقاط الوجهة الأخيرة، والتي تعد أيضًا جزءًا من سجل البحث.
- سجل البحث متاح في [Android Auto](../navigation/auto-car.md#search).

</TabItem>

<TabItem value="ios" label="iOS">

*سجل البحث* هو سجل لجميع عمليات البحث والمواقع التي أدخلتها أو بحثت عنها في التطبيق على مدار فترة الاستخدام. تتيح لك هذه الأداة العثور بسهولة على المواقع التي تم البحث عنها مسبقًا والوصول إليها، مما يسهل التنقل ويوفر وقتك.

يوفر OsmAnd عدة طرق لعرض سجل البحث.  

- يتم عرض [زر البحث](../widgets/map-buttons.md#search) دائمًا على الخريطة. انقر عليه لفتح [الشاشة العامة](#how-to-use) للأداة، ثم حدد تبويب *History*.
- عند التحضير لبدء مسار، انقر على *Navigation → Set destination → Search field*.
- يعرض مربع المعلومات في قائمة التنقل الخاصة بـ [إعداد المسار](../navigation/setup/route-navigation.md#navigation-menu) قائمة بنقاط الوجهة الأخيرة، والتي تعد أيضًا جزءًا من سجل البحث.
- سجل البحث متاح في [CarPlay](../navigation/car-play.md#search).

</TabItem>

</Tabs>


## كيفية الاستخدام {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![Explore search](@site/static/img/search/explore_search_android.webp)

يفتح تبويب **الاستكشاف** عند فتح أداة البحث. يعمل تبويب الاستكشاف على توفير معلومات ذات صلة بالأماكن من حولك وإجراءاتك السابقة.

- *اكتشاف الأماكن القريبة*. يعرض قسم [الأماكن الشائعة القريبة](#popular-places-nearby) معالم ومعالم سياحية معروفة من حولك، حتى تتمكن من العثور على أماكن مثيرة للاهتمام دون إدخال استعلام.
- *إعادة البحث*. يمكنك استخدام سجل البحث للبحث مرة أخرى عن الأماكن أو العناوين التي تم البحث عنها مسبقًا دون الحاجة إلى إعادة إدخال الاستعلام.
- *الوصول السريع إلى الأماكن التي تتم زيارتها بشكل متكرر*. إذا كنت تزور أماكن معينة بشكل متكرر، مثل منزلك أو عملك أو أماكنك المفضلة، فإن سجل البحث يحفظ تلك الأماكن، مما يوفر وصولاً سريعًا إليها.
- *تتبع الرحلات السابقة*. يمكن أن يكون سجل البحث مفيدًا لتتبع الرحلات والمسارات السابقة. يمكنك تتبع المسارات التي سلكتها من قبل، أو [تخطيط مسارك التالي](../plan-route/create-route.md) بناءً على المسارات السابقة.
- *البحث عن أماكن خلال فترة زمنية معينة*. في شاشة السجل، يتم تجميع العناصر المصنفة حسب *Recent* حسب الفترة: *Today*، *Yesterday*، *Last week*، ثم حسب الشهر. للعثور على عنصر معين، انقر على عنوان *History* في أعلى الشاشة وأدخل اسمه.
- *حذف الإدخالات*. يوفر سجل البحث القدرة على [حذف](#delete) الإدخالات السابقة، وهو ما يمكن أن يكون مفيدًا للسرية أو للحفاظ على تنظيم سجلك.

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

يعمل سجل البحث على توفير معلومات ذات صلة بإجراءاتك السابقة.

- *إعادة البحث*. يمكنك استخدام سجل البحث للبحث مرة أخرى عن الأماكن أو العناوين التي تم البحث عنها مسبقًا دون الحاجة إلى إعادة إدخال الاستعلام.
- *الوصول السريع إلى الأماكن التي تتم زيارتها بشكل متكرر*. إذا كنت تزور أماكن معينة بشكل متكرر، مثل منزلك أو عملك أو أماكنك المفضلة، فإن سجل البحث يحفظ تلك الأماكن، مما يوفر وصولاً سريعًا إليها.  
- *تتبع الرحلات السابقة*. يمكن أن يكون سجل البحث مفيدًا لتتبع الرحلات والمسارات السابقة. يمكنك تتبع المسارات التي سلكتها من قبل، أو [تخطيط مسارك التالي](../plan-route/create-route.md) بناءً على المسارات السابقة.  
- *البحث عن أماكن خلال فترة زمنية معينة*. قائمة سجل البحث مقسمة بالفعل إلى كتل حسب الشهر.
- *حذف الإدخالات*. يوفر سجل البحث القدرة على [حذف](#delete) الإدخالات السابقة، وهو ما يمكن أن يكون مفيدًا للسرية أو للحفاظ على تنظيم سجلك.

</TabItem>

</Tabs>


## الأماكن الشائعة القريبة {#popular-places-nearby}

<InfoAndroidOnly/>

![Popular Places Nearby](@site/static/img/search/popular_places_nearby.webp)

يعرض قسم **الأماكن الشائعة القريبة** قائمة قابلة للتمرير للمعالم والمعالم السياحية المعروفة بالقرب من موقعك. قد يتضمن كل عنصر اسم المكان وفئته والمسافة والاتجاه وصورة معاينة إن وجدت. انقر على *Show all* لفتح القائمة الكاملة أو *Show on map* لعرض هذه الأماكن على الخريطة.

لمزيد من التفاصيل، راجع مقالة [الأماكن الشائعة](../map/popular_places.md#explore-in-search).


## عناصر السجل {#history-items}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![History section](@site/static/img/search/history_section_list.webp)

يعرض قسم **السجل** في تبويب الاستكشاف حتى 25 عنصرًا من أحدث العناصر. انقر على عنوان القسم لطيه أو توسيعه. انقر على *View all* لفتح شاشة *History* الكاملة.

إذا تم إيقاف تشغيل كل من *Search history* و*Navigation history*، يعرض القسم بطاقة *History is turned off*. انقر على *Open History settings* لتمكينها.

يحتوي كل حقل في قائمة السجل على بعض **المعلومات** المتاحة للتطبيق.

- أيقونة تحدد نوع أو فئة الكائن الذي تم العثور عليه.
- اسم الكائن أو الموقع أو العنوان أو نوع الاستعلام. بالنسبة للمسارات، يتم عرض معلومات حول المسافة وعدد نقاط الطريق والوقت.

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

يحتوي كل حقل في قائمة سجل البحث على بعض **المعلومات** المتاحة للتطبيق.

- أيقونة تحدد نوع أو فئة الكائن الذي تم العثور عليه.
- اسم الكائن أو الموقع أو العنوان أو نوع الاستعلام. بالنسبة للمسارات، يتم عرض معلومات حول المسافة وعدد نقاط الطريق والوقت.
- المسافة من موقعك الحالي إلى النقطة والاتجاه بالبوصلة.

</TabItem>

</Tabs>


### الترتيب والتصفية {#sort-and-filter}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![History section](@site/static/img/search/history_section_android.webp) ![History section](@site/static/img/search/history_section_2_android.webp)

في شاشة *History* الكاملة، يمكنك ترتيب عناصر السجل وتصفيتها باستخدام الخيارات التالية:

1. **Sort by**:
    - *Recent* — يعرض العناصر المضافة مؤخرًا أولاً. عند تحديد هذا الخيار، يتم تجميع العناصر حسب الوقت، مثل Today وYesterday وLast week والفترات السابقة.
    - *Nearest* — يرتب العناصر حسب المسافة من موقعك الحالي.
    - *Nearest to map center* — يرتب العناصر حسب المسافة من مركز الخريطة الحالي. عند تحديد أي من خيارات الترتيب المستندة إلى المسافة، لا يتم عرض المجموعات المستندة إلى الوقت.

2. **Type** — يصفي عناصر السجل حسب:
    - *All* — يعرض جميع عناصر السجل المتاحة.
    - *Search* — يعرض العناصر من سجل البحث.
    - *Navigation* — يعرض العناصر من سجل التنقل.

إذا تم إيقاف تشغيل *Search history* أو *Navigation history* في إعدادات السجل، فلن يكون مرشح *Type* متاحًا.

3. **Category filters** — يصفي عناصر السجل حسب الفئة. تعتمد مرشحات الفئة المتاحة على أنواع العناصر المتوفرة في سجلك. على سبيل المثال، قد ترى فئات مثل POI أو Track أو Location أو Favorite أو Address. يمكنك تحديد عدة فئات في وقت واحد.

4. **Settings** — انقر على أيقونة الترس في الزاوية العلوية اليمنى لفتح إعدادات السجل، حيث يمكنك تمكين أو تعطيل *Search history* و*Navigation history* و*Map markers history*، أو عمل نسخة احتياطية من السجل كملف، أو مسح كل السجل.

</TabItem>

<TabItem value="ios" label="iOS">

- **العناصر الحديثة**. يتم عرض أحدث الطلبات أو المواقع في أعلى القائمة. وهذا يسمح بالوصول السريع إلى العناصر المستخدمة مؤخرًا.
- **الترتيب الزمني**. يتم ترتيب العناصر في قائمة سجل البحث ترتيبًا زمنيًا، بدءًا من أقدم الإدخالات وانتهاءً بأحدثها. تنتقل العناصر القديمة تدريجيًا إلى أسفل القائمة مع إضافة إدخالات جديدة، ما لم يتم استخدام العناصر القديمة في سجل البحث، وفي هذه الحالة سيتم نقلها إلى أعلى القائمة.
- في iOS، يتم فرز القائمة حسب الشهر.

</TabItem>

</Tabs>

### نوع الكائنات {#type-of-objects}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

تدخل **أنواع الكائنات** التالية إلى قائمة سجل البحث:

- **المواقع**. يمكن أن يكون هذا عنوانًا أو اسم عمل أو رقم مسار أو إحداثيات أو علامات أو نقاط اهتمام أو ملاحظات OSM أو أماكن نقرت عليها على الخريطة.
- **المسارات ونقاط الطريق**. تتضمن القائمة المسارات التي أنشأتها أو سجلتها أو نزلتها والتي استخدمتها في المسارات السابقة، ونقاط الطريق إذا انتقلت إليها بشكل منفصل.
- **المفضلة والصور**. نقاط المفضلة وملاحظات الصور التي فتحتها.
- **الوجهات**. النقاط التي تنقلت إليها.

</TabItem>

<TabItem value="ios" label="iOS">

تدخل **أنواع الكائنات** التالية إلى قائمة سجل البحث:

- **المواقع**. يمكن أن يكون هذا عنوانًا أو اسم عمل أو رقم مسار أو إحداثيات أو علامات أو نقاط اهتمام أو ملاحظات OSM أو أماكن نقرت عليها على الخريطة.
- **المسارات ونقاط الطريق**. تتضمن القائمة المسارات التي أنشأتها أو سجلتها أو نزلتها والتي استخدمتها في المسارات السابقة، ونقاط الطريق إذا انتقلت إليها بشكل منفصل.

</TabItem>

</Tabs>


## الإجراءات {#actions}

في أداة سجل البحث، يمكنك [حذف](#delete) الاستعلامات غير الضرورية، كلها مرة واحدة أو حسب العناصر الفردية. يمكنك استخدام [تصدير](#export-and-share) السجل. يوفر تطبيق أندرويد إجراءً إضافيًا لـ [مشاركة](#share-android) عناصر البحث كملف [GPX](../../technical/osmand-file-formats/osmand-gpx.md).  

يمكنك **تعطيل أو تمكين** عرض سجل البحث بأكمله. في هذه الحالة، لا يتم حذف الاستعلامات من الجهاز. في أندرويد، يوجد المفتاح في أعلى شاشة [الحذف](#delete) وفي إعدادات السجل، والتي يمكنك فتحها باستخدام أيقونة الترس في شاشة [السجل](#sort-and-filter). في iOS، يوجد في *Menu → Settings → OsmAnd Settings → History → Search History*.


### حذف {#delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

![History search](@site/static/img/search/history_search_delete_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_delete_ios.png)

</TabItem>

</Tabs>

بعد استخدام OsmAnd لفترة طويلة، يمكن أن تصبح قائمة *سجل البحث* طويلة جدًا، لذا فإن حذف استعلامات البحث يساعد على مسح القائمة. يمكنك حذف الاستعلامات التي لم تعد ذات صلة أو التي لم تعد تنوي استخدامها في المستقبل، مما يسهل البحث في القائمة، خاصة عندما تحتاج إلى العثور على استعلامات بحث محددة بسرعة.

تحتاج إلى **النقر المطول على أي من عناصر الاستعلام في القائمة** لفتح شاشة الحذف.

- *تحديد أو إلغاء تحديد عناصر عشوائية* - انقر على العنصر المطلوب في القائمة.
- *تحديد الفترة المتاحة للحذف*، مثل اليوم أو آخر 7 أيام أو الشهر - حدد المربع الذي يحتوي على العنوان الفرعي في القائمة.
- *يمكنك حذف السجل بأكمله* مرة واحدة عن طريق النقر على زر *تحديد الكل* في أسفل الشاشة.
- *Menu → Settings → OsmAnd settings → History → Actions*. يحتوي هذا القسم على زر **Clear all history** (*Android*)/**Delete all history** (*iOS*).


### التصدير والمشاركة {#export-and-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="أندرويد">

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

اذهب إلى: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png)  

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
    يمكنك استخدام السحابة لعمل نسخة احتياطية من سجل البحث. في قائمة *التغييرات المحلية* أو *Settings → Back up data → My Places → Search History*.

![Settings History](@site/static/img/search/history_search_share_andr.png)  

يمكن أن يكون تصدير العناصر أو سجل البحث بأكمله مفيدًا في الحالات التالية:

- *النسخ الاحتياطي*. يمكنك عمل نسخة احتياطية من سجل البحث لحفظ المعلومات قبل حذفها واستعادتها إذا لزم الأمر.
- *النقل إلى جهاز آخر*. عند تغيير الأجهزة، يمكنك استخدام وظيفة التصدير أو السحابة لنقل سجل البحث إلى جهاز جديد دون الحاجة إلى البحث وإدخال البيانات مرة أخرى.
- *تحليل ومعالجة البيانات*. يمكنك تصدير سجل البحث لتحليل البيانات أو استخدامه في تطبيقات أخرى.
- [مشاركة](#share-android) سجل البحث مع مستخدمي OsmAnd الآخرين.


### المشاركة (أندرويد) {#share-android}

![Settings History](@site/static/img/search/history_search_share_andr.png)

تتشابه خطوات مشاركة عناصر سجل البحث مع [التصدير](#export-and-share)، مع اختلاف أنك تقوم بتصدير السجل بأكمله مرة واحدة كملف [osf](../../technical/osmand-file-formats/osmand-osf.md)، بينما يمكنك مشاركة الملفات المحددة الفردية بتنسيق gpx.

على شاشة [الحذف](#delete)، حدد العناصر المطلوبة من قائمة سجل البحث. في الزاوية العلوية اليمنى من الشاشة، توجد أيقونة تشير إلى المشاركة. حدد تطبيقًا أو إجراءً متاحًا في القائمة للمشاركة.


## مقالات ذات صلة {#related-articles}

- [بحث شامل](./search-all.md)
- [بحث عن عنوان](./search-address.md)
- [بحث عن نقاط الاهتمام](./search-poi.md)
- [بحث بالإحداثيات](./search-coordinates.md)