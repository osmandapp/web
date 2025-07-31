---
source-hash: 0ece8e7a1a25127672614cdf13cd0688a67a4cbb64515cc18d60c278f7999862
title: إنشاء خرائط نقطية ومتجهية دون اتصال بالإنترنت
versions: '*'
intro: باستخدام OsmAndMapCreator، هناك العديد من الطرق لإنشاء وتخصيص الخرائط النقطية والمتجهية لتلبية احتياجاتك.
---

## OsmAndMapCreator {#osmandmapcreator}

يمكن استخدام [**OsmAndMapCreator**](https://wiki.openstreetmap.org/wiki/OsmAndMapCreator) لإنشاء أي خرائط يدعمها OsmAnd بنفسك. يمكنك تنزيل أحدث إصدار من [الموقع الإلكتروني](https://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip). يتمتع OsmAndMapCreator بقدرات واجهة المستخدم لإنشاء خرائط نقطية ومتجهية. *لإنشاء خريطة متجهية، ستحتاج إلى ملف OSM (`*.pbf, *.osm.gz, *.osm.bz2`)*، و*لإنشاء ملف خريطة sqlite عبر الإنترنت، ستحتاج إلى `عنوان URL للبلاط الأساسي`*.

### الخرائط النقطية (بسيطة) {#raster-maps-simple}

بمجرد تحديد البلاط الذي تريد إنشاء خريطة منه في قائمة **مصدر البلاط** وتم تحميله بنجاح إلى OsmAndMapCreator، يمكنك النقر بزر الماوس الأيمن على المنطقة التي تريد تحميلها مسبقًا. بعد ذلك، يمكنك إنشاء ملف `.sqlitedb` في **مصدر البلاط** ← **إنشاء قاعدة بيانات sqlite**.

لإنشاء خريطة متجهية، ستحتاج إلى ملف OSM (*.pbf, *.osm.gz, *.osm.bz2)، ولإنشاء خريطة sqlite عبر الإنترنت، ستحتاج إلى عنوان URL للبلاط الأساسي.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png').default} alt="تنزيل الخرائط النقطية" />

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-raster-maps.png').default} alt="إنشاء خرائط sqlitedb" />

### الخرائط المتجهية (بسيطة) {#vector-maps-simple}

خطوات إنشاء خريطة متجهية عبر واجهة مستخدم OsmAndMapCreator:

1. ملف OSM
    - قم بتنزيله من [Geofabrik](https://www.geofabrik.de/data/download.html) أو تصدير صغير من [OpenStreetMap](https://www.openstreetmap.org/export#map=19/48.80672/2.13187)
    - تحويل [Shapefile إلى OSM](https://wiki.openstreetmap.org/wiki/OGR)
    - قم بإنشاء [OSM XML](https://wiki.openstreetmap.org/wiki/OSM_XML) بنفسك باستخدام أي أدوات برمجية، يمكنك المتابعة بتحويله إلى [تنسيق OBF](../osmand-file-formats/osmand-obf.md) الذي يمكن لـ OsmAnd فهمه
2. حدد مربعات الاختيار سواء كنت تريد إنتاج خرائط تتضمن معلومات العنوان / التوجيه / النقل / بيانات الخريطة
3. حدد في **ملف** ← **إنشاء .obf من ملف**.
4. بمجرد اكتمال العملية، سيكون لديك ملف `.obf` في دليل العمل.

<img src={require('@site/static/img/osmandmapcreator/OsmAndMapCreator-create-vector-maps.png').default} alt="إنشاء خرائط متجهية" />

يمكن تحديد المزيد من المعلمات حول كيفية إنشاء الخرائط المتجهية في shell `utilities.sh`.

## الخرائط المتجهية (برنامج نصي shell) {#vector-maps-shell-script}

الطريقة الأكثر شيوعًا والأكثر قوة لإنشاء الخرائط التي يستخدمها المطورون هي عبر برنامج shell النصي `utilities.sh` المضمن في OsmAndMapCreator. كما يحتوي على العديد من طرق الأدوات المساعدة الأخرى لإنشاء بعض الخرائط المخصصة مثل الخريطة الأساسية أو الخريطة بأسماء المناطق وحدودها (regions.ocbf).

مثال على البرنامج النصي:
```
wget -N http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip
wget  https://creator.osmand.net/osm-extract/albania_europe/albania_europe.pbf
unzip OsmAndMapCreator-main.zip -d OsmAndMapCreator
OsmAndMapCreator/utilities.sh generate-poi albania_europe.pbf --chars-build-poi-nameindex=3
```

يستغرق برنامج الإنشاء النصي ملف OSM واحدًا فقط للمعالجة في كل مرة (.pbf, .osm.gz, osm.bz2, .osm) والعديد من المعلمات الاختيارية المحددة كـ `--xxxxxx`.

| الأمر الرئيسي | الوصف |
|--------------|---------------|
| `generate-obf` | ينشئ ملف obf كاملًا بمعلومات الخريطة والعنوان ونقاط الاهتمام والنقل والتوجيه |
| `generate-obf-no-address` | ينشئ ملف obf كاملًا ولكن بدون معلومات العنوان |
| `generate-address` | ينشئ خريطة بمعلومات العنوان فقط |
| `generate-poi` | ينشئ خريطة بمعلومات نقاط الاهتمام فقط |
| `generate-map` | ينشئ خريطة بمعلومات عرض الخريطة فقط |
| `generate-roads` | ينشئ خريطة بمعلومات التوجيه فقط |

يمكن العثور على جميع المعلمات الإضافية في الكود في حال عدم توثيقها بشكل صحيح [الأدوات الرئيسية](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/MainUtilities.java#L219). جميع المعلمات اختيارية!

| المعلمات | الوصف |
|--------------|---------------|
| `--add-region-tags` | يبطئ عملية إنشاء الخريطة عن طريق إضافة علامة اسم المنطقة إلى كل طريق حيث تمت معالجته. هذا مطلوب فقط للخريطة الأساسية العالمية أو عند معالجة مناطق متعددة الجنسيات، في جميع الحالات الأخرى من الأسهل أن يكون لديك اسم مناسب لملفك، أي germany_...، us_.... إذا لم يكن لديك هذه المعلمة ولم تحدد هذه المعلمة، فمن المحتمل أن ترى شارات طرق / نقل عام غير مترجمة في OsmAnd. |
| `--keep-only-sea-objects` | يزيل الكائنات التي ليست جزءًا من المحيط / البحر، ويستخدم لإنتاج خريطة بحرية |
| `--ram-process` | يحدد أن الإنشاء سيستخدم قاعدة بيانات RAM SQlite بدلاً من القرص - [مزيد من المعلومات](#ram-to-process-maps). |
| `--srtm=<FOLDER>` | يحدد المجلد الذي يحتوي على صور TIF-DEM، بحيث يتم ترميز معلومات الارتفاع والانحدار في الطرق |
| `--rendering-types=<FILE>` | موقع rendering_types.xml مع القواعد وعلامات OSM التي تحتاج إلى ترميزها في OBF - [مزيد من المعلومات](#custom-vector-map-tags). |
| `--poi-types=<FILE>` | موقع poi_types.xml مع القواعد وعلامات OSM التي تحتاج إلى ترميزها في OBF لنقاط الاهتمام - [مزيد من المعلومات](#custom-vector-map-tags). |
| `--extra-relations=<FILE>` | ملف OSM يحتوي على مضلعات مثل مناطق الانبعاثات المنخفضة التي يجب نشر علاماتها على الطرق. |

**ملاحظة**: إنشاء الخرائط باستخدام batch.xml قديم، يرجى استخدام طرق shell المذكورة أعلاه والجمع مع التنزيلات / دورات for باستخدام قدرات برنامج shell النصي القياسي.

### ذاكرة الوصول العشوائي لمعالجة الخرائط {#ram-to-process-maps}

يتطلب إنشاء الخرائط الكثير من الذاكرة وكثافة في الإدخال/الإخراج. بعبارة أخرى: يستغرق وقتًا طويلاً جدًا وقد ينفد من الذاكرة! يرجى التحقق من الإنشاء على الخرائط الصغيرة أولاً.
لإعطاء المزيد من الذاكرة لـ JVM، يمكنك الإعلان عن متغير البيئة JAVA_OPTS.
```
export JAVA_OPTS="-Xms256M -Xmx6400M"
OsmAndMapCreator/utilities.sh generate-obf ....
```

ما الذي يمكنك فعله لتحسين الأداء:

- استخدم أقراص SSD.
- استخدم أقراص متعددة.
- استخدم المعالجة "في الذاكرة".
إذا كنت ترغب في تجنب استخدام مساحة القرص واستخدام ذاكرة الوصول العشوائي فقط لتسريع العملية - حدد معلمة `--ram-process`. ستسرع هذه المعالجة "في الذاكرة" من إنشاء الخريطة بنسبة 10-50%، ولكنها تتطلب الكثير من الذاكرة. تعتمد نسبة 10% إلى 50% على حجم الخريطة. تستفيد الخرائط الأصغر حجمًا بشكل أقل من المعالجة في الذاكرة مقارنة بالخرائط الأكبر حجمًا، حيث يلعب الوصول إلى القرص للقراءة الأولية وكتابة الخريطة النهائية دورًا أكبر، بينما تتطلب الخرائط الأكبر حجمًا "حسابات" أكثر.

في المعالجة العادية "على القرص"، يتم إنشاء ملف *nodes.tmp.odb* من ملف *.osm* أو *.osm.pbf*. ملف *nodes.tmp.odb* هذا هو ملف قاعدة بيانات sqlite وهو أكبر بحوالي 15 إلى 25 مرة من ملف *.osm.pbf* الأصلي الذي قمت بتنزيله من [geofabrik.de](http://download.geofabrik.de/). لذا إذا كان ملف *.osm.pbf* الأصلي الخاص بك 300 ميجابايت، فسيكون ملف *nodes.tmp.odb* الخاص بك من 5 جيجابايت إلى 6 جيجابايت! لاحظ أن الخرائط الأصغر ستكون حوالي 15 ضعفًا بينما ستنتهي الخرائط الكبيرة (>350 ميجابايت) بزيادة مساحة تتراوح من 20 ضعفًا إلى 25 ضعفًا.

مع المعالجة "في الذاكرة"، سيتم إنشاء ملف *nodes.tmp.odb* هذا في ذاكرة العمل الخاصة بك. ستحتاج إلى "حجم nodes.tmp.odb" + 20-25%. يرجى ملاحظة أنك لا تحتاج إلى زيادة معلمة `-Xmx` لأن SQLite في الذاكرة لن يشغل ذاكرة JVM وسيستخدم ذاكرة التشغيل الأصلية فقط.

مثال: لملف *.osm.pbf* بحجم 250 ميجابايت، سيتم إنشاء ملف *nodes.tmp.odb* بحجم ~4.5 جيجابايت.

### خريطة متجهية مخصصة (علامات) {#custom-vector-map-tags}

يعتمد عرض OsmAnd والبحث عن نقاط الاهتمام على المعلومات المكتوبة في [OBF](../osmand-file-formats/osmand-obf.md). لها بنية مختلفة عن تنسيقات OSM الأخرى ومُحسّنة للاستخدام على الأجهزة المحمولة. يمكنك فحص المحتويات باستخدام [مفتش ثنائي](../map-creation/how-to-inspect-an-obf.md). أهم 3 أجزاء من ملف OBF هي:

- **قسم الخريطة** المستخدم لعرض الخريطة والمحدد بواسطة [أنواع العرض](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml)
- **قسم نقاط الاهتمام** المستخدم للبحث عن نقاط الاهتمام ومعلومات الكائن والمحدد بواسطة [أنواع نقاط الاهتمام](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml)
- **قسم التوجيه** المستخدم للتوجيه والمحدد بواسطة [أنواع التوجيه](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml) - نفس الملف مثل أنواع العرض ولكن له قسم خاص به `<category name="routing"> - routing_type`.

يمكن تجاوز `rendering_types.xml` و `poi_types.xml` أثناء عملية إنشاء الخريطة في إعدادات واجهة مستخدم OsmAndMapCreator أو كمعلمات سطر الأوامر `--rendering-types=<path>`، `--poi-types==<path>` إلى `utilities.sh generate-obf` (المضمنة مع OsmAndMapCreator).

- يتم تسجيل نوع كائن الخريطة الرئيسي (`<type tag="abandoned:highway" value="track" minzoom="13"/>`) لكل كيان OSM (عقدة أو طريق أو مضلع متعدد). يمكن أن يكون هناك العديد من الأنواع الرئيسية المسجلة لكل كيان واحد (مثل الطريق + الترام + مسار الحافلة)، وستقوم علامة `order` بفرز الأنواع داخل الكيان.
- نوع كائن الخريطة الإضافي (`<type tag="service" value="driveway" minzoom="13" additional="true"/>`) هو معلومات إضافية مرفقة لكيان OSM، لذلك في حالة عدم تسجيل كيان OSM بنوع رئيسي، فلن يتم تخزينه داخل OBF. عادةً ما يخزن معلومات لعرض ميزات إضافية مثل اللون والنعومة.
- نوع كائن خريطة النص (`<type tag="int_ref" additional="text" minzoom="1" order="32"/>`)، يخزن معلومات نصية حول الكائن بحيث يمكن عرضها لاحقًا على الخريطة.
- تمثل `entity_convert` نصوص تحويل علامات بسيطة (`<entity_convert pattern="tag_transform" from_tag="bridge" if_tag1="highway" if_value1="proposed" routing="no"/>`). غالبًا ما تستخدم لدمج العلامات في أنواع محددة، بحيث يكون من الأسهل عرضها بنمط عرض مخصص. كما يسمح بإجراء تحويل علامات خاص بالمنطقة ويسمح بعرض ميزات مختلفة لكل بلد.
- نشر علامة العلاقة. لا يقوم OsmAnd بفهرسة كائنات العلاقة (باستثناء المضلعات المتعددة - المخزنة ككائنات منطقة) ولكنه يسمح بنشر العلامات من العلاقة إلى الأعضاء. من الواضح أن عضوًا واحدًا يمكن أن يكون له علاقات أصل متعددة وقد تحدث تعارضات في العلامات. يدعم OsmAnd 3 طرق للتعامل مع التعارضات:
  - دمج جميع العلامات كسطر طويل مفصول بفاصلات (جيد لعرض أسماء مسارات الحافلات كسلسلة طويلة على الطريق - `nameTags`، `namePrefix`).
  - فرز القيم والاحتفاظ بأعلى قيمة (جيد لعرض المسارات المحلية مقابل الدولية - `relationGroupSort`، `additionalTags`، `additionalNamePrefix`).
  - ينشئ علامات فريدة لكل علاقة (غير مستخدمة حاليًا ولكنها تخزن المعلومات دون فقدان - `relationGroupNameTags`، `relationGroupAdditionalTags`، `relationGroupPrefix`). **مزيد من المعلومات** يمكنك العثور عليها في [أنواع العرض](https://github.com/osmandapp/OsmAnd-resources/blob/master/obf_creation/rendering_types.xml).

**اقرأ المزيد**: عادةً ما يتم دمج الخرائط المتجهية المخصصة مع [نمط عرض مخصص](../osmand-file-formats/osmand-rendering-style.md).

## الخرائط النقطية (متقدمة) {#raster-maps-advanced}

OSM هي قاعدة بيانات كبيرة للخرائط، ولكنها لا تحتوي دائمًا على المعلومات التي تحتاجها (على سبيل المثال، حول الصحاري). أحيانًا يمكنك الحصول على المعلومات التي تحتاجها من مصادر أخرى، مثل الخرائط الورقية أو صور الأقمار الصناعية.

هناك برامج خاصة لإعداد وتحويل ومعايرة أي خرائط مصدر (خرائط بتنسيق صور، تنسيق pdf، خرائط نقطية عبر الإنترنت) إلى خرائط OsmAnd عبر الإنترنت.

حول بعضها أدناه.

### موباك {#mobac}

Mobile Atlas Creator (MOBAC) هو برنامج مفتوح المصدر (GPL) لإنشاء أطالس غير متصلة بالإنترنت. يمكن لـ Mobile Atlas Creator استخدام عدد كبير من الخرائط المختلفة عبر الإنترنت، مثل OpenStreetMap ومقدمي الخرائط الآخرين، كمصدر لإنشاء أطلس غير متصل بالإنترنت.

ما عليك سوى [تنزيل](https://mobac.sourceforge.io/) البرنامج، ثم تشغيله.

في مربع حوار اختيار التنسيق، اختر *OsmAnd SQLite* أو *OsmAnd tile storage*. SQLite هو ملف واحد يحتوي على المنطقة المحددة بينما البلاط هو قطع منفصلة من الخريطة مجمعة على جهازك. غالبًا ما يكون SQLite أكثر ملاءمة لأنه يتم تخزينه في مكان واحد ويشغل مساحة تخزين أقل.

اختر مصدر الخريطة ومستويات التكبير/التصغير والميزات الأخرى. حدد منطقة، ثم اختر القائمة *تحديد* -> *إضافة تحديد*.

بعد ذلك، يمكنك إنشاء ملف SQLite الخاص بك: "أطلس" -> "إنشاء أطلس".

### MAPC2MAPC {#mapc2mapc}

[MAPC2MAPC](https://www.the-thorns.org.uk/mapping/) هو برنامج يعمل بنظام Windows لمعالجة الخرائط الرقمية وتحويلها بين المنصات والبرامج المختلفة.

على سبيل المثال، يمكنك تحويل ومعايرة أي تنسيق صورة وخرائط PDF إلى خريطة OsmAnd عبر الإنترنت.

[فيديو تعليمي](https://www.youtube.com/watch?v=Y_fekLfcUOc) لاستخدام البرنامج.

### SASPlanet {#sasplanet}

SASPlanet هو برنامج مجاني ومفتوح المصدر للملاحة مع القدرة على عرض وتنزيل الخرائط وصور الأقمار الصناعية للأرض من خدمات متنوعة عبر الإنترنت إلى خريطة OsmAnd عبر الإنترنت.

[تنزيل](http://www.sasgis.org/download/) البرنامج، [دليل باللغة الإنجليزية](https://www.evernote.com/shard/s100/client/snv?noteGuid=e659886a-096c-46b4-8280-b57b77373847&noteKey=dac8148d9a74ed77&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs100%2Fsh%2Fe659886a-096c-46b4-8280-b57b77373847%2Fdac8148d9a74ed77&title=How%2Bto%2Buse%2BSAS.Planet.%2BEnglish%2Bguideline).

### ملفات PDF أو TIFF ذات الموقع الجغرافي {#geolocated-pdf-or-tiff}

كيفية تحويل ملفات pdf/tif/tiff ذات الموقع الجغرافي إلى [OsmAnd SQLitedb](../osmand-file-formats/osmand-sqlite.md) في Windows.
يمكن إجراء تحديد الموقع الجغرافي لملفات tif/tiff و pdf بسهولة تامة في QGIS.

1. **تثبيت وتشغيل OSGeo4W**

[OSGeo4W](https://trac.osgeo.org/osgeo4w/) هو توزيع ثنائي لمجموعة واسعة من برامج نظم المعلومات الجغرافية مفتوحة المصدر لنظام Windows. يتضمن QGIS و GDAL/OGR و GRASS بالإضافة إلى العديد من الحزم الأخرى (أكثر من 150). قم بتنزيل وتشغيل [OSGeo4W](https://trac.osgeo.org/osgeo4w/) مثبت الشبكة.

الآن، من قائمة ابدأ، قم بتشغيل OSGeo4W Shell. يجب أن يبدأ في الدليل الافتراضي _C:\OSGeo4W_. إما انتقل إلى مجلد العمل الخاص بك (أو يمكنك فقط استخدام _C:\OSGeo4W_ لهذا الغرض).

2. **تحويل tif/pdf إلى mbtiles**

لتحويل _tif/pdf_ إلى _mbtiles_ قم بتشغيل (استبدال أسماء ملفات _tif/pdf_ و _mbtiles_ عند الضرورة):

&nbsp;<i>gdal_translate -co "ZLEVEL=9" -of mbtiles map_1.tif map_1.mbtiles --config gdal_pdf_dpi 600</i>&nbsp;

&nbsp;<i>gdaladdo -r nearest map_1.mbtiles</i>&nbsp;

يسمح الأمر الأول لـ _GDAL_ بتحديد أقصى تكبير يمكنه إنشاؤه بناءً على دقة الصورة. ويقوم بتحويل ملف _tif/pdf_ إلى _mbtiles_ بدقة DPI محددة. لا تتردد في اللعب بهذا الإعداد، ولكن كن حذرًا لأن قيم DPI العالية ستجعل عملية التحويل طويلة جدًا وحجم الملف الناتج كبيرًا جدًا.

يسمح الأمر الثاني لـ _GDAL_ بتحديد وإنشاء مستويات التكبير الأقل بناءً على مستوى التكبير الأقصى الموجود بالفعل. ليس من غير المألوف أن تستغرق هذه الأوامر بعض الوقت لإكمالها.

3. **تثبيت بايثون من متجر مايكروسوفت**

ربما أسهل طريقة هي التوجه إلى [متجر مايكروسوفت](https://apps.microsoft.com/detail/9nj46sx7x90p).

إذا حدث هذا الخطأ أثناء محاولة تنفيذ برنامج بايثون النصي في الخطوة التالية:

_Traceback (most recent call last):_

_File ```<console>```, line 1, in ```<module>```_

_ImportError: No module named PIL_

ثم في PowerShell، قم بتشغيل الأمر التالي:

_pip install Pillow_

4. **تحويل تنسيق mbtiles إلى sqlitedb (مناسب لـ OsmAnd و RMaps)**

ستجد برنامج Python النصي _mbtiles2osmand.py_ على [GitHub](https://github.com/tarwirdur/mbtiles2osmand). قم بتنزيله إلى مجلد العمل الخاص بك وقم بتشغيل موجه الأوامر أو PowerShell.

**الاستخدام:**

&nbsp;<i>python3_ mbtiles2osmand.py [-h] [-f] [--jpg JPEG_QUALITY] input output</i>&nbsp;

&nbsp;<u>الوسائط الموضعية:</u>&nbsp;

**input**&nbsp;&nbsp;&nbsp;&nbsp; ملف الإدخال

**output**&nbsp;&nbsp;&nbsp;&nbsp; ملف الإخراج

&nbsp;<u>الوسائط الاختيارية:</u>&nbsp;

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;إظهار رسالة المساعدة هذه والخروج

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;تجاوز ملف الإخراج إذا كان موجودًا

**--jpg JPEG_QUALITY** &nbsp;&nbsp;&nbsp;&nbsp;تحويل البلاط إلى JPEG بجودة محددة

**أمثلة:**

بسيط:

&nbsp;<i>python3 mbtiles2osmand.py _input.mbtiles output.sqlitedb_</i>&nbsp;

تحويل البلاط إلى jpeg مع الضغط:

&nbsp;<i>python3 mbtiles2osmand.py _--jpg 75 input.mbtiles output.sqlitedb_</i>&nbsp;

5. **انسخ ملف .sqlitedb إلى OsmAnd**

الآن يجب أن يكون لديك ملف .sqlitedb جاهزًا في مجلد العمل الخاص بك. انسخه إلى مجلد OsmAnd المناسب واستخدمه كخريطة رئيسية أو خريطة تحتية أو خريطة متراكبة. راجع [دليل المستخدم](../../user/map/raster-maps.md) لمزيد من التفاصيل. انتهى!

6. **(اختياري) دمج ملفات osmand متعددة في ملف واحد**

إذا كنت بحاجة إلى ذلك، يمكنك العثور على ملف البرنامج النصي unite_osmand.py على [GitHub](https://github.com/tarwirdur/mbtiles2osmand). مرة أخرى - قم بتنزيله إلى مجلد العمل الخاص بك وقم بتشغيل موجه الأوامر أو PowerShell.

**الاستخدام:**

&nbsp;<i>python3 unite_osmand.py [-h] [-f] input [input ...] output</i>&nbsp;

<u>الوسائط الموضعية:</u>

**input** &nbsp;&nbsp;&nbsp;&nbsp; ملفات الإدخال. إذا كانت ملفات متعددة تحتوي على بلاط بنفس الإحداثيات، فسيتم استخدام البلاط من الملف الأول (من قائمة الوسائط)

**output** &nbsp;&nbsp;&nbsp;&nbsp;ملف الإخراج

<u>الوسائط الاختيارية:</u>

**-h, --help** &nbsp;&nbsp;&nbsp;&nbsp;إظهار رسالة المساعدة هذه والخروج

**-f, -force** &nbsp;&nbsp;&nbsp;&nbsp;تجاوز ملف الإخراج إذا كان موجودًا

7. **إضافي: تحويل ملف GeoPDF واحد إلى GeoTIFF**

إذا كنت ترغب، لأي سبب من الأسباب، في تحويل ملف _geopdf_ واحد إلى _geotiff_، فاستخدم أمر _gdal_translate_ وأدخل معلماتك الخاصة حيثما يشار إليها بـ < >. يمكنك استخدام _gdal_translate_ بمعلمات اختيارية أو بدونها. قد يستغرق الأمر وقتًا طويلاً للمعالجة وقد يكون ملف tiff الناتج كبيرًا جدًا خاصة عند تضمين الصور الجوية والتضاريس المظللة. لذلك، قد يكون من الجيد استبعاد بعض طبقات PDF (انظر المثال الثاني).

**الاستخدام:**

&nbsp;<i>gdal_translate ```<GeoPDF filename> <Output Geotiff Filename>``` -of gtiff --config
gdal_pdf_layers_off “```<pdf layername 1>,<pdf layername 2>,<pdf layername 3>```” --config gdal_pdf_dpi ```<output dpi>``` </i>&nbsp;

**أمثلة:**

تحويل ملف pdf بجميع طبقاته إلى geotiff بدقة DPI الافتراضية:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff</i>&nbsp;

استبعاد عدة طبقات من التحويل بواسطة معلمة _gdal_pdf_layers_off_ متبوعة بقائمة من أسماء الطبقات المفصولة بفاصلات. ملف الإخراج هو geotiff، بدقة 600 DPI محددة:

&nbsp;<i>gdal_translate geo_sample_map.pdf output_sample_map.tif -of gtiff --config gdal_pdf_layers_off “Map_Collar, Map_Frame.Projections_and_Grids, Map_Frame.Terrain.Shaded_Relief, Images.Orthoimage” --config gdal_pdf_dpi 600</i>&nbsp;

8. **المصادر:**

- [Gdal2mbtiles](https://github.com/tarwirdur/mbtiles2osmandhttps://gist.github.com/jbaranski/0073f7b98bdf1f64f49988853daed67bhttps://github.com/ecometrica/gdal2mbtiles) (للمرجع فقط)،
- [كيفية تحويل geopdf إلى geotiff باستخدام GDAL](https://opengislab.com/blog/2016/4/2/usgs-geopdf-to-geotif-with-gdal)،
- انظر أيضًا [إنشاء خرائط متراكبة لـ OsmAnd على Linux](https://shallowsky.com/blog/mapping/osmand-making-overlay-maps.html).

## المشكلات الشائعة {#common-issues}

### مشكلة OutOfMemoryError {#outofmemoryerror-issue}

**المشكلة**: يفشل OsmAndMapCreator برسالة - OutOfMemoryError.

الملف الذي تحاول معالجته باستخدام OsmAndMapCreator كبير جدًا. حاول إما معالجة ملف أصغر، أو زيادة الذاكرة لـ OsmAndMapCreator في ملف .sh أو .bat. تحدد معلمة `-Xmx` مقدار الذاكرة التي يمكن للبرنامج استهلاكها. يمكن أن تختلف الإعدادات لأجهزة 64 بت (أكثر من 1.5 جيجابايت) و 32 بت (بحد أقصى حوالي 1.5 جيجابايت).

### مشكلة الملف الفارغ {#empty-file-issue}

**المشكلة**: بعد تحويل ملف .osm إلى .obf مع فهرس POI فقط، يكون ملف .obf فارغًا، على الرغم من أن ملف .osm الأصلي يحتوي على POI.

قد يكون هناك علامة حاسمة مفقودة لـ OsmAndMapCreator للتعرف على POI عند تحويل ملف osm من مصدر آخر، مثل Garmin. إذا كانت النقطة في ملف OSM تبدو كالتالي:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
  </node>
```
قم بتغييرها لتتضمن علامة "amenity" إضافية، مثل:
```
  <node id='-24' visible='true' lat='1.3094000' lon='103.7784000'>
    <tag k='created_by' v='GPSBabel-1.4.2'/>
    <tag k='name' v='Street-Soccer Court'/>
    <tag k='amenity' v='point' />
  </node>
```

ثم قم بتحويل الملف باستخدام OsmAndMapCreator. يمكنك التحقق من موقع OSM لمعرفة العلامات الجيدة للاستخدام ويمكنك أيضًا التحقق من العلامات المدعومة بواسطة [OsmAnd](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/poi_types.xml).