---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# تنسيق بلاطات SQLite - .sqlite {#tiles-sqlite-format---sqlite}

يعتمد تنسيق SQLite المستخدم في OsmAnd على تنسيق "BigPlanet" SQLite كما هو مدعوم من قبل MOBAC. في OsmAnd، نضيف عددًا من الجداول التي توسع التنسيق:

|الجدول|العمود|المواصفات والغرض|
|:----|:-----|:---------------|
|"info"|"url"|سلسلة. قالب URL لتنزيل البلاطات مع التكبير ≣ `{z}` ≣ `{0}`، `{x}` ≣ `{1}`، `{y}` ≣ `{2}`، اسم الخادم ≣ `{rnd}`|
||"randoms"|سلسلة. أسماء خوادم المرآة. مفصولة بفاصلة. سيحل أحد هذه القيم محل العنصر النائب `{rdn}` في حقل "url" بشكل عشوائي.|
||"referer"|سلسلة. HTTP Referer. كما هو مستخدم للتنزيل.|
||"rule"|سلسلة. القالب المدعوم: 1 (نفس القالب الفارغ)، wms_tile، yandex_traffic. يضيف خوارزميات محددة لكيفية تنزيل البلاطات. يستخدم wms_tile خادم وكيل مثل whoots.mapwarper.net للتعامل مع مصادر WMS|
||"useragent"|سلسلة. HTTP User Agent. كما هو مستخدم للتنزيل.|
||"minzoom"|عدد صحيح. الحد الأدنى لمستوى التكبير. عدد صحيح ذو صلة. (معكوس أيضًا في حالة BigPlanet).|
||"maxzoom"|عدد صحيح. الحد الأقصى لمستوى التكبير. عدد صحيح ذو صلة. (معكوس أيضًا في حالة BigPlanet).|
||"ellipsoid"|عدد صحيح 0 أو 1. 1 لـ Elliptic Mercator (بلاطات Yandex). 0 لـ Spheric Web Mercator العادي (OSM، خرائط Google)|
||"inverted\_y"|عدد صحيح 0 أو 1. 1 لرقم بلاطة Y معكوس (بلاطات Nakarte.me).|
||"timecolumn"|سلسلة "yes" أو "no". يشير جدول البلاطات الذي يحتوي على عمود "time" إلى وقت استرداد كل بلاطة.|
||"expireminutes"|عدد صحيح. يحدد ما إذا كانت البلاطات ستنتهي صلاحيتها بعد عدد الدقائق المحدد. ستظل معروضة، ولكن سيتم إعادة تنزيلها أيضًا.|
||"tilenumbering"|سلسلة "" أو "BigPlanet". إذا كانت "BigPlanet"، سيتم عكس التكبير وحسابه كـ z = 17 - zoom.|
||"tilesize"|عدد صحيح. فارغ أو 256 أو 512، اختياري، يستخدم لوصف حجم البلاطة|
|"tiles"|"x", "y", "z"|عدد صحيح. يشير إلى إحداثيات بلاطة Mercator. لاحظ أن التكبير يمكن أن يكون معكوسًا لحالة BigPlanet.|
||"image"|كائن ثنائي كبير من بايتات الصورة.|
||"time"|عدد صحيح. الطابع الزمني عند تنزيل الصورة.|

يستخدم هذا التنسيق أيضًا في ملفات Hillshade وSlope الموزعة بواسطة تطبيق OsmAnd.

الفئة التي تدعم هذا هي SQLiteTileSource في أو بالقرب من [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).