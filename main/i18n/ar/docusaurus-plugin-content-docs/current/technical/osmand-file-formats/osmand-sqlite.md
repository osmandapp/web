---
source-hash: 777e1b6ae34dee89414b4c08be679e9d019b5045cbf293b733879b6dfb3cd8db
sidebar_position: 9
---

# صيغة بلاطات SQLite - .sqlite {#tiles-sqlite-format---sqlite}



تعتمد صيغة SQLite المستخدمة في OsmAnd على SQLite "BigPlanet" كما يدعمها MOBAC. في OsmAnd، نضيف عددًا من الجداول التي توسع الصيغة:

|الجدول|العمود|المواصفات والغرض|
|:----|:-----|:---------------|
|"info"|"url"|سلسلة نصية. قالب URL لتنزيل البلاطات مع التكبير ≣ `{z}` ≣ `{0}`، `{x}` ≣ `{1}`، `{y}` ≣ `{2}`، اسم الخادم ≣ `{rnd}`|
||"randoms"|سلسلة نصية. أسماء مرايا الخادم. مفصولة بفاصلة. ستحل إحدى هذه القيم عشوائيًا محل العنصر النائب `{rdn}` في حقل "url".|
||"referer"|سلسلة نصية. HTTP Referer. كما يستخدم للتنزيل.|
||"rule"|سلسلة نصية. القالب المدعوم: 1 (نفس القالب الفارغ)، wms_tile، yandex_traffic. يضيف خوارزميات محددة لكيفية تنزيل البلاطات. يستخدم wms_tile خادم وكيل مثل whoots.mapwarper.net للتعامل مع مصادر WMS|
||"useragent"|سلسلة نصية. HTTP User Agent. كما يستخدم للتنزيل.|
||"minzoom"|عدد صحيح. الحد الأدنى لمستوى التكبير. عدد صحيح ذو صلة. (معكوس أيضًا في حالة BigPlanet).|
||"maxzoom"|عدد صحيح. الحد الأقصى لمستوى التكبير. عدد صحيح ذو صلة. (معكوس أيضًا في حالة BigPlanet).|
||"ellipsoid"|عدد صحيح 0 أو 1. 1 لـ Elliptic Mercator (بلاطات Yandex). 0 لـ Spheric Web Mercator العادي (OSM، خرائط Google)|
||"inverted\_y"|عدد صحيح 0 أو 1. 1 لرقم بلاطة Y معكوس (بلاطات Nakarte.me).|
||"timecolumn"|سلسلة نصية "yes" أو "no". يشير جدول البلاطات الذي يحتوي على عمود "time" إلى وقت استرداد كل بلاطة.|
||"expireminutes"|عدد صحيح. يحدد ما إذا كانت البلاطات ستنتهي صلاحيتها بعد عدد الدقائق المحدد. ستظل معروضة، ولكن سيتم إعادة تنزيلها أيضًا.|
||"tilenumbering"|سلسلة نصية "" أو "BigPlanet". إذا كانت "BigPlanet"، فسيتم عكس التكبير وحسابه على النحو التالي: z = 17 - zoom.|
||"tilesize"|عدد صحيح. فارغ أو 256 أو 512، اختياري، يستخدم لوصف حجم البلاطة|
|"tiles"|"x", "y", "z"|عدد صحيح. يشير إلى إحداثيات بلاطة Mercator. لاحظ أن التكبير يمكن أن يكون معكوسًا في حالة BigPlanet.|
||"image"|كائن ثنائي كبير (Blob) من بايتات الصورة.|
||"time"|عدد صحيح. الطابع الزمني عند تنزيل الصورة.|

تُستخدم هذه الصيغة أيضًا بواسطة ملفات Hillshade وSlope الموزعة بواسطة تطبيق OsmAnd.

الفئة التي تدعم هذا هي SQLiteTileSource في أو بالقرب من [https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/resources/SQLiteTileSource.java#L36).