---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# ملف OsmAnd GPX {#osmand-gpx}

## مقدمة {#introduction}

GPX (تنسيق تبادل GPS) هو معيار شائع قائم على XML لتخزين بيانات GPS، بما في ذلك المسارات والطرق ونقاط الطريق. يدعم OsmAnd تنسيق GPX لاستيراد وتصدير وتخصيص بيانات GPS للملاحة، مما يمكّن المستخدمين المبتدئين والمتقدمين من تحسين تجربتهم.

#### ما الذي يجعل ملف OsmAnd GPX فريدًا؟ {#what-makes-osmand-gpx-unique}

يوسع OsmAnd تنسيق GPX 1.1 القياسي من خلال تقديم مساحة اسم XML المخصصة الخاصة به `osmand:`. تتيح مساحة الاسم هذه تخزين بيانات إضافية مثل:

- إعدادات العرض المرئي للمسار (اللون، العرض، الأسهم).
- تجميع نقاط الطريق وأيقوناتها.
- سمات المسار التفصيلية، بما في ذلك المسارات المحسوبة وأنواع الأنشطة.

#### ماذا ستتعلم في هذا الدليل؟ {#what-will-you-learn-in-this-guide}

يقدم هذا المقال نظرة شاملة على بنية ملف GPX وميزاته في OsmAnd. سوف تتعلم:

١. كيفية تخصيص المسارات ونقاط الطريق باستخدام وسوم GPX.
٢. الميزات المتقدمة مثل الأوصاف بتنسيق HTML وبيانات المستشعرات وأنواع الأنشطة.
٣. كيفية تصدير المسارات المحسوبة والحفاظ على وظائفها الكاملة.
٤. تحويل ملفات GPX إلى تنسيق OBF للتخزين المحسن وإمكانيات البحث المتقدمة.

#### نظرة عامة على بنية GPX {#gpx-structure-overview}

تنظم ملفات GPX في OsmAnd البيانات بشكل هرمي في العناصر التالية:

- `<gpx>` - العنصر الجذر للملف.
- `<trk>` - يمثل المسارات، والتي تحتوي على:
  - `<trkseg>` - مقاطع المسار، والتي تنقسم بدورها إلى `<trkpt>` (نقاط المسار).
- `<rte>` - يمثل الطرق، بما في ذلك نقاط الطريق والنقاط الرئيسية.
- `<wpt>` - يمثل نقاط الطريق الفردية.


## تخصيص المسار {#track-customization}

### معلمات مظهر المسار {#track-appearance-parameters}

يصف هذا القسم كيفية عرض OsmAnd للمسارات على الخريطة وخيارات التخصيص المتاحة لضبط مظهرها. يتم تطبيق المعلمات الموضحة أدناه داخل وسم `<gpx>` وتؤثر على جميع المسارات المضمنة في ملف GPX.

| اسم الوسم | الوصف / القيم |
|:----------------------------------------|:---------|
| `<color>` | - يحدد لون خط المسار على الخريطة. <br/> - *نص:* رمز لون HEX `#RRGGBB` أو `#AARRGGBB` |
| `<width>` | - يحدد عرض خط المسار. <br/> - *نص:* `“thin”`، `“medium"`، `“bold”` (يتم تعريفه بواسطة السمة `“currentTrackWidth”`)، أو عدد صحيح (١-٢٤) |
| `<show_arrows>` | - يمكّن أو يعطّل أسهم الاتجاه على طول المسار. <br/> - *منطقي:* `"true"` / `"false"` |
| `<show_start_finish>` | - يظهر أو يخفي علامات بداية ونهاية المسار. <br/> - *منطقي:* `"true"` / `"false"` |
| `<split_type>` | - يحدد نوع تقسيم المسار. <br/> - *نص:* `"no_split"`، `"distance"`، `"time"` |
| `<split_interval>` | - يضبط الفاصل الزمني لتقسيم المسار بناءً على النوع المحدد. <br/> - *عشري:* عدد صحيح (أمتار لـ `"distance"`، ثوانٍ لـ `"time"`) |
| `<line_3d_visualization_by_type>` | - يحدد نوع التصور ثلاثي الأبعاد للمسار. <br/> - *نص:* `"none"`، `"altitude"`، `"shared_string_speed"`، `"map_widget_ant_heart_rate"`، `"map_widget_ant_bicycle_cadence"`، `"map_widget_ant_bicycle_power"`، `"shared_string_temperature"`، `"shared_string_speed"`، `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - يحدد نوع لون الجدار للتصور ثلاثي الأبعاد. <br/> - *نص:* `"none"`، `"solid"`، `"downward_gradient"`، `"upward_gradient"`، `"altitude"`، `"slope"`، `"speed"` |
| `<line_3d_visualization_position_type>` | - يضبط موضع التصور ثلاثي الأبعاد بالنسبة للمسار. <br/> - *نص:* `"top"`، `"bottom"`، `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - مضاعف لتغيير حجم قيمة السمة `line_3d_visualization_by_type`. <br/> - *عشري:* الافتراضي: 1.0 |
| `<elevation_meters>` | - يحدد ارتفاعًا ثابتًا بالأمتار لـ `"fixed_height"` في `<line_3d_visualization_by_type>`. <br/> - *عشري:* الافتراضي: `1000` |
| `<coloring_type>` | - يحدد طريقة تلوين المسار. <br/> - *نص:* `"solid"`، `"speed"`، `"altitude"`، `"slope"`، `"routeInfo_roadClass`، `"routeInfo_surface"`، `"routeInfo_smoothness"` |
| `<color_palette>` | - يحدد نظام الألوان للمسار. <br/> - *نص:* `"default"` / [مخططات الألوان المعرفة من قبل المستخدم](/docs/user/personal/color-palette-schemes) |

***مثال:***

```xml
<gpx version="1.1" creator="OsmAnd~ 5.0.0" xmlns="https://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx" xmlns:gpxtpx="https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd" xmlns:xsi="https://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://www.topografix.com/GPX/1/1 https://www.topografix.com/GPX/1/1/gpx.xsd">
...
  <extensions>
    <osmand:color>#4e4eff</osmand:color>
    <osmand:width>bold</osmand:width>
    <osmand:show_arrows>true</osmand:show_arrows>
    <osmand:split_type>distance</osmand:split_type>
    <osmand:split_interval>2000.0</osmand:split_interval>
  </extensions>
</gpx>
```

### وسم 'coloring_type' {#tag-coloringtype}

يسمح وسم `<coloring_type>` في OsmAnd للمستخدمين بتخصيص تلوين المسار بناءً على سمات بيانات محددة، مما يوفر طريقة مرئية لتفسير المعلومات الرئيسية على طول المسار.

| النوع | الوصف | حالة الاستخدام |
|:-----------------------|:--------|:--------|
| `<solid>` | يتم عرض المسار بأكمله بلون واحد ثابت يحدده وسم `color`. | يُستخدم عند الحاجة إلى لون موحد لرؤية واضحة. |
| `<speed>` | يتم تلوين المسار بتدرج لوني بناءً على قيم السرعة عند كل نقطة مسار (`<trkpt>`). يتم تمثيل السرعات الأعلى بألوان مميزة. | مثالي لأنشطة مثل ركوب الدراجات أو القيادة لتصور التغيرات في السرعة. |
| `<altitude>` | يتم تلوين المسار وفقًا لبيانات الارتفاع عند كل `<trkpt>`. يتم تطبيق تدرج لوني، مما يشير إلى نطاقات ارتفاع مختلفة. | مفيد للمشي لمسافات طويلة أو الطرق الجبلية لتسليط الضوء على تغيرات الارتفاع. |
| `<slope>` | يتم تلوين المسار بناءً على الانحدار/الصعود بين نقاط المسار المتتالية. تشير التدرجات الإيجابية إلى المنحدرات الصاعدة، بينما تشير التدرجات السلبية إلى المنحدرات الهابطة. | مناسب لراكبي الدراجات أو المتنزهين الذين يحللون صعوبة المسار. |
| `<routeInfo_roadClass>` | يلون مقاطع المسار بناءً على تصنيف الطرق في OpenStreetMap (OSM) (على سبيل المثال، طريق سريع، شارع سكني). | يساعد على التمييز بين أنواع الطرق المختلفة عند اتباع مسار. |
| `<routeInfo_surface>` | يلون مقاطع المسار بناءً على نوع السطح في OSM (على سبيل المثال، مرصوف، حصى، تراب). | مفيد لتحديد ظروف المسار أثناء أنشطة مثل القيادة على الطرق الوعرة. |
| `<routeInfo_smoothness>` | يلون المسار وفقًا لتقييمات النعومة في OSM، مما يشير إلى خشونة أو نعومة المسار (على سبيل المثال، ممتاز، سيئ). | مفيد لتقييم قابلية الملاحة في المسار لمركبات معينة. |

### وسوم GPX في واجهة المستخدم {#gpx-tags-in-ui}

تُعرض وسوم ملحقات GPX في أسفل قائمة سياق المسار.
يتم إدراج كل من `<metadata>` و `<gpx>` `<extensions>`.
يتم استبعاد وسوم المظهر من القائمة.
مدعوم منذ إصدار OsmAnd Android 5.0.

## تخصيص نقاط الطريق {#waypoints-customization}

يشرح هذا القسم كيف يسمح OsmAnd بتخصيص نقاط الطريق في ملفات GPX باستخدام الأيقونات والألوان والتجميع.

### أيقونات نقاط الطريق {#waypoint-icons}

تتحكم الوسوم التالية في مظهر أيقونات نقاط الطريق في OsmAnd:

| وسم GPX | الافتراضي | الغرض |
|:-------------|:----------|:-----------|
| `<icon>` | *(لا شيء)* | يحدد أيقونة نقطة الطريق (على سبيل المثال، `historic_castle`). |
| `<color>` | `"red"` | يضبط لون الأيقونة باستخدام رمز HEX (على سبيل المثال، `#FF0000`) أو اسم لون (على سبيل المثال، `"blue"`). |
| `<background>` | `"circle"` | يحدد شكل خلفية الأيقونة. القيم الممكنة: `"circle"`، `"square"`، `"octagon"`. |

***مثال:***

```xml
<wpt lat="52.5163" lon="13.3779">
  <name>Brandenburg Gate</name>
  <extensions>
    <osmand:color>#FF5020</osmand:color>
    <osmand:icon>city_gate</osmand:icon>
    <osmand:background>square</osmand:background>
  </extensions>
</wpt>
```

### مجموعات نقاط الطريق {#waypoint-groups}

يمكن فرز نقاط الطريق في OsmAnd إلى مجموعات بناءً على نوعها. يسمح هذا التجميع للمستخدم بتنظيم نقاط طريق متعددة ضمن فئات محددة، مما يحسن الوضوح وقابلية قراءة الخريطة.

- **تعريف مجموعة النقاط.** يحدد وسم `<type>` داخل عنصر `<wpt>` مجموعة النقطة (على سبيل المثال، `"castle"`، `"aqueduct"`).
- **تكوين المجموعة.** يحدد ملحق `<osmand:points_groups>` في عنصر `<gpx>` إعدادات كل مجموعة، بما في ذلك `name` و `color` و `icon` و `background` لجميع نقاط الطريق في تلك المجموعة.

***مثال:***

```xml
<gpx>
  <wpt lat="1.234" lon="5.678">
    <name>Look up to see the water</name>
    <type>aqueduct</type>
  </wpt>
  <wpt lat="5.678" lon="1.234">
    <name>Beware of ghosts</name>
    <type>castle</type>
  </wpt>
  <wpt lat="66.666" lon="66.666">
    <name>The house of Beetlejuice</name>
    <type>castle</type>
  </wpt>
  <extensions>
    <osmand:points_groups>
      <group name="castle" color="#FF0000" icon="historic_castle" background="circle"/>
      <group name="aqueduct" color="#0000FF" icon="bridge_structure_arch" background="circle"/>
    </osmand:points_groups>
  </extensions>
</gpx>
```


## ميزات GPX المتقدمة {#advanced-gpx-features}

### نوع النشاط {#activity-type}

بدءًا من [الإصدار 4.9](/blog/osmand-android-4-9-released/#gpx-track-activities) من OsmAnd، يمكنك تصنيف مساراتك حسب نوع النشاط لمزيد من التحليل والتنظيم في مجلدات.

قائمة أنواع الأنشطة المدعومة متاحة في ملف [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). يتم تحديد كل نشاط بمعرّفه الفريد `ID` ويتم تخزينه ضمن ملحقات `<metadata>` لملف GPX.


***مثال:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### استخدام HTML في الأوصاف {#html-in-descriptions}

يمكن استخدام وسوم HTML داخل وسوم `<desc>` في عناصر `<metadata>` أو `<wpt>` لتوفير أوصاف منسقة للمسارات أو نقاط الطريق.

لتجنب التعارض مع بنية XML، استبدل الأحرف الخاصة كما يلي:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***مثال:***

```xml
<metadata>
  <desc>
    &lt;p&gt;
        The first paragraph will be displayed as &lt;b&gt;brief&lt;/b&gt; description.
        HTML tags are stripped in brief descriptions.
    &lt;/p&gt;
    &lt;p&gt;
      &lt;h3&gt;Second paragraph&lt;/h3&gt;
        &lt;b&gt;Hello, world!&lt;/b&gt;&lt;br/&gt;
        &lt;img src="..."/&gt;&lt;br/&gt;
        &lt;a href="..."&gt;url&lt;/a&gt;&lt;br/&gt;
        &lt;table&gt; ... &lt;/table&gt;
    &lt;/p&gt;
  </desc>
</metadata>
```

***ملاحظات هامة:***

- يزيل OsmAnd جميع وسوم HTML عند إنشاء أوصاف موجزة، تاركًا نصًا عاديًا.
- يمكنك استخدام وسوم مثل `<b>`، `<i>`، `<p>`، `<br/>`، `<a>`، `<img>`، وغيرها للتخصيص.


### وسم الرابط {#link-tag}

استخدم وسم `<link>` لربط عناوين URL بالبيانات الوصفية أو معلومات المؤلف أو نقاط الطريق في ملفات OsmAnd GPX. يمكن لهذا الوسم أيضًا عرض صورة عندما يشير عنوان URL إلى ملف صورة.

***أمثلة (رابط بيانات وصفية مع صورة):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***أمثلة (رابط نقطة طريق مع صورة):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### وسوم بيانات المستشعرات {#sensor-data-tags}

يمكنك إثراء مساراتك ببيانات من مستشعرات اللياقة البدنية، مثل أجهزة مراقبة معدل ضربات القلب أو مستشعرات درجة الحرارة. يستخدم OsmAnd مخطط [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) من Garmin لتخزين هذه البيانات، مما يجعلها متوافقة مع منصات مثل **Strava** و **Garmin Basecamp**.

*وسوم بيانات المستشعرات المدعومة:*

- **hr** - معدل ضربات القلب (بالنبضة في الدقيقة).
- **cad** - إيقاع الدراجة (بالدورة في الدقيقة).
- **atemp** - درجة الحرارة المحيطة (بالدرجة المئوية).
- **power** - خرج طاقة الدراجة (بالواط).

***مثال:***

```xml
<extensions>
  <gpxtpx:TrackPointExtension>
    <gpxtpx:hr>145</gpxtpx:hr>
    <gpxtpx:cad>80</gpxtpx:cad>
    <gpxtpx:atemp>22</gpxtpx:atemp>
    <gpxtpx:power>250</gpxtpx:power>
  </gpxtpx:TrackPointExtension>
</extensions>
```

### تفاصيل نقطة المسار {#track-point-details}

يمكن أن تتضمن كل `<trkpt>` (نقطة مسار) في ملف GPX سمات إضافية لالتقاط بيانات مثل السرعة والاتجاه والارتفاع.

*السمات المدعومة:*

- **speed** - السرعة عند نقطة المسار (بالمتر في الثانية).
- **heading** - اتجاه الحركة (٠-٣٥٩ درجة).
- **ele** - الارتفاع فوق مستوى سطح البحر (بالأمتار).
- **time** - الطابع الزمني لنقطة المسار.

***مثال:***

```xml
  <trkpt lat="52.397799" lon="4.575998">
    <ele>203</ele>
    <time>2019-05-08T10:36:43Z</time>
    <hdop>3</hdop>
    <extensions>
      <heading>273</heading>
      <speed>5.02</speed>
    </extensions>
  </trkpt>
```



## المسار(ات) المحسوبة {#calculated-routes}

في **OsmAnd** يمكنك حساب المسار وحفظ جميع البيانات في ملف GPX، بحيث تكون جميع ميزات الملاحة متاحة لاحقًا عند تشغيل الملاحة باستخدام GPX، لذلك سيحتوي ملف GPX الخاص بـ **OsmAnd** على مقاطع المسار، والمنعطفات، وأسماء الطرق، وأنواع الطرق، والقيود، وما إلى ذلك. يمكن استعادة المسار بالكامل كما لو تم إنشاؤه للتو، حتى في غياب خرائط الأوفلاين المعنية.

قد يحتوي ملف gpx على عدة مسارات. كل منها موجود في مقطع محدد تحت **trkseg** / **extensions**. يتم حفظ ملف gpx بهذا الشكل عند تصدير مسار تم إنشاؤه أو عند حفظ مسار يتكون من عدة مقاطع منفصلة عبر وظيفة [**تخطيط مسار**](../../user/plan-route/create-route.md).

تضيف وظيفة [**تخطيط مسار**](../../user/plan-route/create-route.md) أيضًا كتلة **rte** واحدة (أو عدة كتل، وفقًا لعدد المقاطع / المسارات المنفصلة المضمنة) إلى ملف gpx، تحتوي على نقاط المسار الرئيسية (**rtept**).

#### بنية Gpx: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // List of segment points. The order of the points corresponds to the order and length of the route segments (<route><segment length="x" ... />).
    // The value of the "length" attribute corresponds to the number of points in this segment of the route.
    <trkpt ... ></trkpt>
    <extensions>
      // List of route segments
      <route>
        <segment ... />
      </route>
      // Properties of segments included in the route.
      // This data is taken from offline maps during the initial construction of a route.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// List of intermediate route points. If there are multiple routes, the order of the rte list matches the order of the route segments.
<rte>
  <rtept ... />
    // For routes built with the "Plan route", the parameters of key points are saved.
    // If rtept is not first and last, before it (with the same idx) trkpt will be with the same data.
    <extensions>
      // Route profile type for next segment (car, bicycle, pedestrian, etc.).
      <profile>...</profile>
      // The index of the point in the gpx segment that corresponds to the first point of the calculated route for this segment.
      // If rtept is not first and last, before it (with the same idx) trkpt will be with the same data.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### الخصائص الهامة: {#important-properties}

* **trkpt_idx** لأول **rtept** في **trkseg** هو 0. لذا، إذا كان هناك اثنان من **trkseg**، فسيكون هناك اثنان من **rtept** مع **trkpt_idx** = 0
* **trkpt_idx** لآخر **rtept** في **trkseg** يساوي عدد **trkpt** في **trkseg** ناقص 1. على سبيل المثال، إذا كان **trkseg** يحتوي على 12 **trkpt**، يجب أن يكون **trkpt_idx** لآخر **rtept** هو 11
* **مقاطع** المسار المجاورة متداخلة: نهاية **المقطع** السابق وبداية **المقطع** التالي هي نفس **trkpt**.
* هناك استثناء عندما لا تتداخل **مقاطع** المسار المجاورة (لا تشترك في نفس **trkpt**). يحدث هذا عندما يكون هناك **rtept** "بين" **مقاطع** المسار. نهاية **مقطع** المسار السابق هي **trkpt** واحدة، وبداية **مقطع** المسار التالي هي **rtept** أخرى. لكن هاتين **trkpt** متساويتان تمامًا من حيث خطوط الطول والعرض والمعلمات الأخرى.
* يمكن اكتشاف تداخل **مقاطع** المسار عبر **length** و **startTrkptIdx** (يستخدم الأخير فقط لسهولة القراءة البشرية):
  - إذا كان مجموع **startTrkptIdx** و **length** لـ **مقطع** المسار السابق يساوي **startTrkptIdx** لـ **مقطع** المسار التالي، فإن **مقاطع** المسار لا تتداخل
  - إذا كان المجموع أقل بواحد، فإن **مقاطع** المسار تتداخل
* يمكن أن تكون هناك **مقاطع** مسار مستقيمة. يتم تمييزها بـ **id="-1"**. يمكن أن تظهر في حالتين:
  - إنه مسار متعدد الأنماط، واختار المستخدم خطًا مستقيمًا
  - وضع المستخدم **rtept** بعيدًا جدًا عن أقرب طريق، لذلك قام osmand بإنشاء خط مستقيم بين **rtept** والطريق
* trkpts = length - (segments - 1) + (rtepts - 2)، حيث:
  - trkpts - عدد **trkpt** داخل **trkseg**
  - length - مجموع كل **length** لـ **مقاطع** المسار داخل **trkseg**
  - segments - عدد **مقاطع** المسار داخل **trkseg**
  - rtepts - عدد **rtept** التي يملكها **trkseg**

#### مثال: {#example}

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>Fri 06 Nov 2020</name>
  </metadata>
  <trk>
    <name>Fri 06 Nov 2020</name>
    <trkseg>
      <trkpt lat="52.3639849" lon="4.8900533">
        <ele>0.801</ele>
      </trkpt>
      <trkpt lat="52.3636917" lon="4.8922849">
        <ele>0.998</ele>
      </trkpt>
      <trkpt lat="52.3636885" lon="4.892309">
        <ele>1</ele>
      </trkpt>
      <trkpt lat="52.3636426" lon="4.8922902">
        <ele>0.963</ele>
      </trkpt>
      <trkpt lat="52.363564" lon="4.8922607">
        <ele>0.899</ele>
      </trkpt>

      ....

      <extensions>
        <route>
          <segment id="7372058" length="3" segmentTime="178.44" speed="1.11" turnType="C" types="0,1,2,3,4,5,6" names="57" />
          <segment id="334164679" length="5" segmentTime="86.11" speed="1.11" turnType="TR" turnAngle="91.88" types="7,8,0,9,10,11,12,13,6" pointTypes=";;14,15;16,17,18;" names="58" />
          <segment id="334603581" length="6" segmentTime="75.5" speed="1.11" types="19,20,21,7,8,0,22,9,10,11,12,13,23,6" pointTypes=";14;16,24;16,24;14;" names="58" />
          <segment id="446707354" length="3" segmentTime="8.32" speed="1.11" turnType="TSLL" turnAngle="-25.44" types="19,25,21,7,8,22,9,1,11,12,13,6" names="58" />
          ...
        </route>
        <types>
          <type t="lit" v="yes" />
          <type t="oneway" v="yes" />
          <type t="highway" v="unclassified" />
          <type t="surface" v="paving_stones" />
          <type t="maxspeed" v="30" />
          ...
        </types>
      </extensions>
    </trkseg>
  </trk>

  <rte>
    <rtept lat="52.3639945" lon="4.8900532">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>0</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3612797" lon="4.8911677">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>24</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.356996" lon="4.8912071">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>89</trkpt_idx>
      </extensions>
    </rtept>
    <rtept lat="52.3542374" lon="4.8947024">
      <extensions>
        <profile>pedestrian</profile>
        <trkpt_idx>121</trkpt_idx>
      </extensions>
    </rtept>
  </rte>
</gpx>
```

## مجموعات GPX في OBF {#gpx-collections-in-obf}

يسمح لك OsmAnd بتحويل عدة ملفات GPX إلى ملف OBF واحد. يتيح ذلك تخزين آلاف مسارات GPX في تنسيق مضغوط ومحسّن مع الحفاظ على ميزات مثل أيقونات الخرائط الخاصة، وتخصيص مظهر المسار، ووظيفة البحث. هذا يتجنب حد ملفات GPX المحلية الكبيرة التي لا يمكنها عادةً التعامل مع أكثر من ٥٠٠ ألف نقطة في المجموع، ومع ذلك قد تكون بعض ميزات مسارات GPX مفقودة مقارنة بعرض ملف OBF.

خطوات تحويل GPX إلى OBF:

- سجل الدخول إلى [خريطة OsmAnd على الويب](https://osmand.net/map) ← المسارات ← حدد مجلدًا ← *القائمة* (⋮) ← *تنزيل كمجموعة OBF*

- يمكن استيراد ملف `<.obf>` الناتج إلى OsmAnd (يتطلب OsmAnd Android 5.0+).


### نمط خط المسار {#track-line-style}

خصص خطوط المسار بالوسوم التالية:

| وسم GPX | الافتراضي | الغرض |
|:--------------------------|:--------|:---------|
| `<name>` | *(لا شيء)* | الاسم المعروض فوق خط المسار. |
| `color` | `red` | اللون الأساسي (HEX أو نص). |
| `colour`, `displaycolor` | *(لا شيء)* | طرق بديلة لتجاوز `color`. |
| `shield_waycolor` | *(لا شيء)* | تجاوز لون خط مسار الدرع `color`. |
| `translucent_line_colors` | `no` | اضبط على `yes` للألوان شبه الشفافة. |
| `width` | `thin` | عرض الخط: `"thin"`، `"medium"`، `"bold"`، `"1-24"`، أو `"roadstyle"` |

**الألوان المدعومة:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***مثال:***

```xml
<gpx>
  <metadata>
    <name>
      Track name located in Metadata
    </name>
  </metadata>
  <trk>
    ...
  </trk>
  <extensions>
    <osmand:color>yellow</osmand:color>
    <osmand:width>roadstyle</osmand:width>
    <osmand:translucent_line_colors>yes</osmand:translucent_line_colors>
  </extensions>
</gpx>
```

### دروع خط المسار {#track-line-shields}

الدروع هي أيقونات أو رموز معروضة على طول خط المسار. يدعم OsmAnd دروع [نمط-رموز-OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)، والتي قد تشمل:

- أيقونة الخلفية - الشكل الرئيسي (على سبيل المثال، دائرة أو مربع).
- أيقونات المقدمة - ما يصل إلى رمزين أصغر فوق الخلفية.
- نص - أوصاف قصيرة أو معرفات، مشتقة من وسوم `shield_text` أو `ref`.

إذا لم يتم تحديد خصائص الدرع، يستخدم OsmAnd درعًا أصفر بحجم تلقائي للمسار.

***وسوم الدروع:***

| وسم GPX | الغرض |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | يحدد أيقونة الخلفية للدرع. |
| `shield_fg` | يحدد أيقونة المقدمة الأولى (على سبيل المثال، سهم أو نقطة). |
| `shield_fg_2` | يحدد أيقونة المقدمة الثانية (اختياري). |
| `shield_text` | يضبط النص القصير الذي سيتم عرضه فوق الدرع (على سبيل المثال، مرجع المسار). |
| `shield_textcolor` | يحدد لون نص الدرع (اختياري). |
| `shield_waycolor` | يتجاوز لون المسار القياسي لخط الدرع (اختياري). |
| `ref` | يستخدم كنص احتياطي إذا لم يتم توفير `shield_text`. |

***مثال:***

```xml
<gpx>
  <trk>
    <name>Sample Route</name>
  </trk>
  <extensions>
    <osmand:shield_text>ABC</osmand:shield_text>
    <osmand:shield_fg>osmc_red_dot</osmand:shield_fg>
    <osmand:shield_bg>osmc_white_bg</osmand:shield_bg>
    <osmand:shield_waycolor>red</osmand:shield_waycolor>
    <osmand:shield_textcolor>black</osmand:shield_textcolor>
  </extensions>
</gpx>
```

### عرض نقاط الطريق {#waypoints-display}

يمكن تخصيص أيقونات نقاط الطريق بالوسوم التالية:

| وسم GPX | الافتراضي | الغرض |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(لا شيء)* | يحدد أيقونة نقطة الطريق (يستخدم أيقونات محرر نقاط الطريق القياسية في OsmAnd). |
| `color` | `red` | يضبط لون الأيقونة باستخدام رمز HEX (على سبيل المثال، `#ffaa00`) أو اسم لون مدعوم (خيارات محدودة). |
| `background` | `circle` | يحدد شكل الأيقونة. القيم المدعومة: `circle`، `square`، `octagon`. |

***سلوك أشكال `background`:***

- `circle` - يعرض الأيقونة بخلفية دائرية.
- `square` - يعرض الأيقونة بخلفية مربعة، ويتحول إلى اللون الأحمر افتراضيًا إذا لم يتم تحديد لون.
- `octagon` - يعامل كخلفية دائرية في OsmAnd.

**الألوان المدعومة لـ** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***تحسينات مع عناصر إضافية:***

- يمكنك إضافة أوصاف منسقة إلى نقاط الطريق باستخدام [كود-HTML](#html-in-descriptions). يتيح لك ذلك تضمين نص منسق أو روابط أو حتى صور.
- يمكن لنقاط الطريق عرض صور مرتبطة باستخدام [الرابط-كصورة](#link-tag).

***مثال:***

```xml
<wpt lat="3.1415926" lon="42">
  <name>PI</name>
  <extensions>
    <osmand:icon>historic_archaeological_site</osmand:icon>
    <osmand:background>circle</osmand:background>
    <osmand:color>#ffaa00</osmand:color>
  </extensions>
</wpt>
```


### البحث بالاسم والمراجع {#search-by-name-and-refs}

يمكن تحديد مواقع المسارات ونقاط الطريق باستخدام مجموعة متنوعة من وسوم GPX.

| وسم GPX | الموقع | الغرض |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | الاسم الأساسي لمسار GPX. |
| `ref` | GPX `<extensions>` | معرف قصير، غالبًا ما يكون مشتقًا من وسم `ref` في OSM. |
| `shield_text` | GPX `<extensions>` | نص معروض على الدروع (يمكن استخدامه أيضًا مع `ref`). |
| `name_-_lang` | GPX/WPT `<extensions>` | `name:lang` مترجم (على سبيل المثال، `name_-_en` للإنجليزية، استبدل `:` -> `_-_`) |
| `<name>` | `<wpt>` | اسم نقطة الطريق. |

***مثال:***

```xml
<gpx>
  <metadata>
    <name>Xemxija Heritage Trail</name>
  </metadata>
  <extensions>
    <osmand:ref>XHT</osmand:ref>
  </extensions>
  <wpt lat="35.948477" lon="14.3806796">
    <name>Il-Mighba Rumana</name>
    <extensions>
      <osmand:name_-_en>The Roman Apiary</osmand:name_-_en>
    </extensions>
  </wpt>
</gpx>
```

### البحث حسب نوع النشاط {#search-by-activity-type}

ينظم OsmAnd المسارات في ملفات OBF في **مجموعات الأنشطة** و **أنواع الأنشطة**. تساعدك هذه التصنيفات على تصفية المسارات كنقاط اهتمام أو إنشاء فلاتر بحث قائمة على النشاط.

كيف تعمل أنواع الأنشطة:

- يتم تحديد أنواع ومجموعات الأنشطة باستخدام `"id"` و `"tags"` من ملف [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- يستخدم OsmAnd وسوم `osmand:activity` أو `osmand:route` لتصنيف الأنشطة في ملفات GPX.


| وسم GPX | الموقع | الغرض |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | وسم OsmAnd الرئيسي لتخزين نوع النشاط (ID). |
| `osmand:route` | GPX `<extensions>` | طريقة بديلة قائمة على OSM لتعريف نوع النشاط. |


***أمثلة على تنظيم المسارات حسب نوع النشاط:***

١. سيصنف هذا المسار ضمن مجموعة **ركوب الدراجات النارية** بنوع **ركوب الدراجات النارية على الطرق الوعرة (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

٢. سينظم هذا المسار ضمن مجموعة **ركوب الدراجات** بنوع **ركوب الدراجات الجبلية**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### وسوم معلومات البحث {#search-information-tags}

تقوم ملفات OBF تلقائيًا بإنشاء وتخزين إحصائيات وتحليلات المسار الهامة.

| وسم OBF | الغرض |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | المسافة الإجمالية التي تغطيها جميع مقاطع المسار. |
| `start_ele`, `ele_graph` | بيانات الارتفاع من GPX، مغلفة في مصفوفة ثنائية مدمجة. |
| `min_ele`, `avg_ele`, `max_ele` | تحليلات الحد الأدنى والمتوسط والأقصى للارتفاع. |
| `diff_ele_up`, `diff_ele_down` | إجمالي الكسب والخسارة في الارتفاع عبر المسار. |
| `max_speed`, `avg_speed`, `min_speed` | تحليلات سرعة المسار، بما في ذلك السرعة القصوى والمتوسطة والدنيا. |
| `time_span`, `time_span_no_gaps` | الوقت الإجمالي للمسار، مع وبدون حساب الفجوات. |
| `time_moving`, `time_moving_no_gaps` | إجمالي وقت الحركة، مع وبدون حساب الفجوات. |

### الوسوم الداخلية {#internal-tags}

تُستخدم بعض وسوم GPX أو تُخزن بشكل غير مباشر في ملفات OBF. ارجع إلى [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) للحصول على تفاصيل حول التنفيذ.

| وسم OBF | الغرض |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | معرف فريد لملف GPX، يربط بيانات الخريطة ونقاط الاهتمام (التنسيق: `/[A-Z]+[0-9]+/` على سبيل المثال `OSM12345`). |
| `route_type` | معرف مجموعة النشاط (`id`) مشتق من `poi/activities.json` |
| `route_activity_type` | معرف نوع النشاط (داخل المجموعة) (`id`) مشتق من `poi/activities.json` |
| `name`, `ref`, `description` | سمات قابلة للترجمة والبحث (`lang="true"` في أنواع نقاط الاهتمام) |
| `filename` | اسم ملف GPX الأصلي المستخدم لإنشاء هذا المسار. |
| `track_color` | لون مسار قسم الخريطة مشتق من `shield_waycolor`، `color`، `colour`، أو `displaycolor` |
| `extensions_extra_tags` | وسوم إضافية عشوائية لـ `<gpx><extensions>` بتنسيق JSON. |
| `metadata_extra_tags` | وسوم إضافية عشوائية لـ `<metadata><extensions>` بتنسيق JSON. |
| `wpt_extra_tags` | وسوم إضافية عشوائية لنقاط الطريق `<wpt><extensions>` بتنسيق JSON. |
| `route_track_point` | تستخدم نقاط الطريق من ملف GPX هذا النوع في بيانات نقاط الاهتمام. |
| `route_bbox_radius` | يحدد نصف القطر الافتراضي للبحث عن أجزاء من المسار داخل قسم نقاط الاهتمام |
| `route_shortlink_tiles` | يحدد قائمة مفصولة بفواصل من مربعات OSM Shortlink لتسريع قراءة بيانات الهندسة (اختياري) |
| `route_segment_index` | يحدد رقمًا ترتيبيًا لمقطع الهندسة المرتبط بهذه النقطة (اختياري) |
| `route_name` | اسم المسار، المستخدم بواسطة `searchPoiByName` الداخلي (مهمل) |