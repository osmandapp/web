---
source-hash: cd85b9f943b1bca0b2953a02a698885ade5850557c59dcce8a6611b292a2962a
sidebar_position: 2
---

# OsmAnd GPX {#osmand-gpx}

## Вступ {#introduction}

GPX (GPS Exchange Format) — це широко використовуваний стандарт на основі XML для зберігання даних GPS, включаючи треки, маршрути та шляхові точки. OsmAnd підтримує формат GPX для імпорту, експорту та налаштування даних GPS для навігації, що дозволяє як початківцям, так і досвідченим користувачам оптимізувати свій досвід.

#### Що робить OsmAnd GPX унікальним? {#what-makes-osmand-gpx-unique}

OsmAnd розширює стандартний формат GPX 1.1, вводячи власний простір імен XML `osmand:`. Цей простір імен дозволяє зберігати додаткові дані, такі як:

- Візуальні налаштування треку (колір, ширина, стрілки).
- Групування шляхових точок та іконки.
- Детальні атрибути маршруту, включаючи прораховані маршрути та типи активності.

#### Що ви дізнаєтеся з цього посібника? {#what-will-you-learn-in-this-guide}

Ця стаття надає вичерпний огляд структури та функцій файлів GPX в OsmAnd. Ви дізнаєтеся:

1. Як налаштовувати треки та шляхові точки за допомогою тегів GPX.
2. Розширені функції, такі як HTML-описи, дані сенсорів та типи активності.
3. Як експортувати прораховані маршрути та зберігати їх повну функціональність.
4. Перетворення файлів GPX у формат OBF для оптимізованого зберігання та розширених можливостей пошуку.

#### Огляд структури GPX {#gpx-structure-overview}

Файли GPX в OsmAnd організовують дані ієрархічно в наступні елементи:

- `<gpx>` - кореневий елемент файлу.
- `<trk>` - представляє треки, які містять:
  - `<trkseg>` - сегменти треку, які далі поділяються на `<trkpt>` (точки треку).
- `<rte>` - представляє маршрути, включаючи шляхові та ключові точки.
- `<wpt>` - представляє окремі шляхові точки.


## Налаштування треку {#track-customization}

### Параметри вигляду треку {#track-appearance-parameters}

У цьому розділі описано, як OsmAnd відображає треки на мапі та які доступні опції для налаштування їхнього вигляду. Параметри, описані нижче, застосовуються в межах тегу `<gpx>` і впливають на всі треки, що містяться у файлі GPX.

| Назва тегу | Опис / Значення |
|:----------------------------------------|:---------|
| `<color>` | - Визначає колір лінії треку на мапі. <br/> - *Рядок:* HEX-код кольору `#RRGGBB` або `#AARRGGBB` |
| `<width>` | - Вказує ширину лінії треку. <br/> - *Рядок:* `“thin”`, `“medium"`, `“bold”` (визначається атрибутом `“currentTrackWidth”`), або ціле число (1-24) |
| `<show_arrows>` | - Вмикає або вимикає стрілки напрямку вздовж треку. <br/> - *Логічний:* `"true"` / `"false"` |
| `<show_start_finish>` | - Показує або приховує маркери початку та кінця треку. <br/> - *Логічний:* `"true"` / `"false"` |
| `<split_type>` | - Вказує тип сегментації для треку. <br/> - *Рядок:* `"no_split"`, `"distance"`, `"time"` |
| `<split_interval>` | - Встановлює інтервал для сегментації треку на основі обраного типу. <br/> - *Дійсне:* Ціле число (метри для `"distance"`, секунди для `"time"`) |
| `<line_3d_visualization_by_type>` | - Вказує тип 3D-візуалізації для треку. <br/> - *Рядок:* `"none"`, `"altitude"`, `"shared_string_speed"`, `"map_widget_ant_heart_rate"`, `"map_widget_ant_bicycle_cadence"`, `"map_widget_ant_bicycle_power"`, `"shared_string_temperature"`, `"shared_string_speed"`, `"fixed_height"` |
| `<line_3d_visualization_wall_color_type>` | - Визначає тип кольору стіни для 3D-візуалізації. <br/> - *Рядок:* `"none"`, `"solid"`, `"downward_gradient"`, `"upward_gradient"`, `"altitude"`, `"slope"`, `"speed"` |
| `<line_3d_visualization_position_type>` | - Встановлює положення 3D-візуалізації відносно треку. <br/> - *Рядок:* `"top"`, `"bottom"`, `"top_bottom"`|
| `<vertical_exaggeration_scale>` | - Множник для масштабування значення атрибута `line_3d_visualization_by_type`. <br/> - *Дійсне:* За замовчуванням: 1.0 |
| `<elevation_meters>` | - Вказує фіксовану висоту в метрах для `"fixed_height"` у `<line_3d_visualization_by_type>`. <br/> - *Дійсне:* За замовчуванням: `1000` |
| `<coloring_type>` | - Визначає метод розфарбовування треку. <br/> - *Рядок:* `"solid"`, `"speed"`, `"altitude"`, `"slope"`, `"routeInfo_roadClass`, `"routeInfo_surface"`, `"routeInfo_smoothness"` |
| `<color_palette>` | - Вказує колірну схему для треку. <br/> - *Рядок:* `"default"` / [визначені користувачем схеми](/docs/user/personal/color-palette-schemes) |

***Приклад:***

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

### Тег 'coloring_type' {#tag-coloringtype}

Тег `<coloring_type>` в OsmAnd дозволяє користувачам налаштовувати розфарбовування треку на основі конкретних атрибутів даних, забезпечуючи візуальний спосіб інтерпретації ключової інформації вздовж треку.

| Тип | Опис | Сценарій використання |
|:-----------------------|:--------|:--------|
| `<solid>` | Весь трек відображається одним суцільним кольором, заданим тегом `color`. | Використовуйте, коли потрібен однорідний колір для чіткої видимості. |
| `<speed>` | Трек розфарбовується градієнтом на основі значень швидкості в кожній точці треку (`<trkpt>`). Вищі швидкості позначаються окремими кольорами. | Ідеально для таких видів діяльності, як їзда на велосипеді або водіння, для візуалізації змін швидкості. |
| `<altitude>` | Трек розфарбовується відповідно до даних про висоту в кожній точці `<trkpt>`. Застосовується градієнт, що вказує на різні діапазони висот. | Корисно для піших або гірських маршрутів для виділення змін висоти. |
| `<slope>` | Трек розфарбовується на основі підйому/спуску між послідовними точками треку. Позитивні градієнти вказують на підйоми, а негативні — на спуски. | Підходить для велосипедистів або туристів, які аналізують складність треку. |
| `<routeInfo_roadClass>` | Розфарбовує сегменти треку на основі класифікації доріг OpenStreetMap (OSM) (наприклад, шосе, житлова вулиця). | Допомагає розрізняти різні типи доріг під час руху за маршрутом. |
| `<routeInfo_surface>` | Розфарбовує сегменти треку на основі типу покриття OSM (наприклад, асфальт, гравій, ґрунт). | Корисно для визначення стану треку під час таких видів діяльності, як бездоріжжя. |
| `<routeInfo_smoothness>` | Розфарбовує трек відповідно до рейтингів гладкості OSM, що вказують на шорсткість або гладкість шляху (наприклад, відмінно, погано). | Допомагає оцінити прохідність треку для конкретних транспортних засобів. |

### Теги GPX в інтерфейсі користувача {#gpx-tags-in-ui}

Теги розширень GPX відображаються внизу контекстного меню треку.
Перераховуються як `<metadata>`, так і `<gpx>` `<extensions>`.
Теги вигляду виключені з переліку.
Підтримується з OsmAnd Android 5.0.

## Налаштування шляхових точок {#waypoints-customization}

У цьому розділі пояснюється, як OsmAnd дозволяє налаштовувати шляхові точки у файлах GPX за допомогою іконок, кольорів та групування.

### Іконки шляхових точок {#waypoint-icons}

Наступні теги керують виглядом іконок шляхових точок в OsmAnd:

| Тег GPX | За замовчуванням | Призначення |
|:-------------|:----------|:-----------|
| `<icon>` | *(немає)* | Вказує іконку для шляхової точки (наприклад, `historic_castle`). |
| `<color>` | `"red"` | Встановлює колір іконки за допомогою HEX-коду (наприклад, `#FF0000`) або назви кольору (наприклад, `"blue"`). |
| `<background>` | `"circle"` | Визначає форму фону іконки. Можливі значення: `"circle"`, `"square"`, `"octagon"`. |

***Приклад:***

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

### Групи шляхових точок {#waypoint-groups}

Шляхові точки в OsmAnd можна сортувати в групи за їхнім типом. Це групування дозволяє користувачеві організовувати кілька шляхових точок за певними категоріями, покращуючи чіткість та читабельність мапи.

- **Визначення групи точок.** Тег `<type>` всередині елемента `<wpt>` вказує групу точки (наприклад, `"castle"`, `"aqueduct"`).
- **Конфігурація групи.** Розширення `<osmand:points_groups>` в елементі `<gpx>` визначає налаштування для кожної групи, включаючи `name`, `color`, `icon` та `background` для всіх шляхових точок у цій групі.

***Приклад:***

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


## Розширені можливості GPX {#advanced-gpx-features}

### Тип активності {#activity-type}

Починаючи з версії OsmAnd [4.9](/blog/osmand-android-4-9-released/#gpx-track-activities), ви можете класифікувати свої треки за типом активності для подальшого аналізу та організації в папках.

Список підтримуваних типів активності доступний у файлі [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json). Кожна активність ідентифікується своїм унікальним `ID` і зберігається в розширеннях `<metadata>` файлу GPX.


***Приклад:***

```xml
  <metadata>
    <extensions>
      <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
    </extensions>
  </metadata>
```

### HTML в описах {#html-in-descriptions}

HTML-теги можна використовувати в тегах `<desc>` в елементах `<metadata>` або `<wpt>` для надання форматованих описів для треків або шляхових точок.

Щоб уникнути конфліктів із синтаксисом XML, замініть спеціальні символи наступним чином:

- `<` *→* `&lt;`
- `>` *→* `&gt;`
- `&` *→* `&amp;`

***Приклад:***

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

***Важливі примітки:***

- OsmAnd видаляє всі HTML-теги при генерації коротких описів, залишаючи звичайний текст.
- Ви можете використовувати такі теги, як `<b>`, `<i>`, `<p>`, `<br/>`, `<a>`, `<img>` та інші для налаштування.


### Тег Link {#link-tag}

Використовуйте тег `<link>` для зв'язування URL-адрес з метаданими, інформацією про автора або шляховими точками у файлах OsmAnd GPX. Цей тег також може відображати зображення, якщо URL-адреса вказує на файл зображення.

***Приклади (Посилання в метаданих з зображенням):***

```xml
<metadata>
  <link href="https://osmand.net/img/logo.png">
    <text>OsmAnd Logo</text>
  </link>
</metadata>
```

***Приклади (Посилання в шляховій точці з зображенням):***

```xml
<wpt lat="52.5163" lon="13.3779">
  <link href="https://osmand.net/img/logo.png" />
</wpt>
```

### Теги даних сенсорів {#sensor-data-tags}

Ви можете збагатити свої треки даними з фітнес-сенсорів, таких як монітори серцевого ритму або датчики температури. OsmAnd використовує схему Garmin [TrackPointExtension](https://www8.garmin.com/xmlschemas/TrackPointExtensionv1.xsd) для зберігання цих даних, що робить їх сумісними з такими платформами, як **Strava** та **Garmin Basecamp**.

*Підтримувані теги даних сенсорів:*

- **hr** - частота серцевих скорочень (в ударах за хвилину).
- **cad** - каденс велосипеда (в обертах за хвилину).
- **atemp** - температура навколишнього середовища (в градусах Цельсія).
- **power** - вихідна потужність велосипеда (у ватах).

***Приклад:***

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

### Деталі точок треку {#track-point-details}

Кожна `<trkpt>` (точка треку) у файлі GPX може містити додаткові атрибути для запису таких даних, як швидкість, напрямок руху та висота.

*Підтримувані атрибути:*

- **speed** - швидкість у точці треку (в метрах за секунду).
- **heading** - напрямок руху (0-359 градусів).
- **ele** - висота над рівнем моря (в метрах).
- **time** - часова мітка для точки треку.

***Приклад:***

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



## Прораховані маршрути {#calculated-routes}

В **OsmAnd** ви можете прорахувати маршрут і зберегти всі дані в GPX, так що пізніше всі функції навігації будуть доступні як при запуску навігації по GPX. Таким чином, GPX-файл **OsmAnd** буде містити сегменти маршруту, повороти, назви доріг, типи доріг, обмеження тощо. Маршрут можна повністю відновити, ніби він щойно був побудований, навіть за відсутності відповідних офлайн-мап.

Файл GPX може містити кілька маршрутів. Кожен з них міститься в окремому сегменті під **trkseg** / **extensions**. Файл GPX зберігається в такому вигляді при експорті побудованого маршруту або при збереженні треку, що складається з кількох окремих сегментів, за допомогою функціоналу [**Планування маршруту**](../../user/plan-route/create-route.md).

[**Планування маршруту**](../../user/plan-route/create-route.md) також додає один (або кілька, відповідно до кількості окремих сегментів/треків) блок **rte** до файлу GPX, що містить ключові точки маршруту (**rtept**).

#### Структура GPX: {#gpx-structure}

```xml
<trk>
  <trkseg>
    // Список точок сегмента. Порядок точок відповідає порядку та довжині сегментів маршруту (<route><segment length="x" ... />).
    // Значення атрибута "length" відповідає кількості точок у цьому сегменті маршруту.
    <trkpt ... ></trkpt>
    <extensions>
      // Список сегментів маршруту
      <route>
        <segment ... />
      </route>
      // Властивості сегментів, що входять до маршруту.
      // Ці дані беруться з офлайн-мап під час початкової побудови маршруту.
      <types>
        <type ... />
      </types>
    </extensions>
  </trkseg>
</trk>

// Список проміжних точок маршруту. Якщо є кілька маршрутів, порядок списку rte відповідає порядку сегментів маршруту.
<rte>
  <rtept ... />
    // Для маршрутів, побудованих за допомогою "Планування маршруту", зберігаються параметри ключових точок.
    // Якщо rtept не є першою і останньою, перед нею (з тим же idx) буде trkpt з тими ж даними.
    <extensions>
      // Тип профілю маршруту для наступного сегмента (автомобіль, велосипед, пішохід тощо).
      <profile>...</profile>
      // Індекс точки в сегменті gpx, що відповідає першій точці прорахованого маршруту для цього сегмента.
      // Якщо rtept не є першою і останньою, перед нею (з тим же idx) буде trkpt з тими ж даними.
      <trkpt_idx>...</trkpt_idx>
    </extensions>
  </rtept>
</rte>
```

#### Важливі властивості: {#important-properties}

* **trkpt_idx** першої **rtept** у **trkseg** дорівнює 0. Отже, якщо є два **trkseg**, буде дві **rtept** з **trkpt_idx** = 0.
* **trkpt_idx** останньої **rtept** у **trkseg** дорівнює кількості **trkpt** у **trkseg** мінус 1. Наприклад, якщо **trkseg** має 12 **trkpt**, **trkpt_idx** останньої **rtept** має бути 11.
* Сусідні **сегменти** маршруту перекриваються: кінець попереднього **сегмента** і початок наступного **сегмента** є однією і тією ж **trkpt**.
* Існує виняток, коли сусідні **сегменти** маршруту не перекриваються (не мають спільної **trkpt**). Це трапляється, коли між **сегментами** маршруту є **rtept**. Кінець попереднього **сегмента** маршруту — це одна **trkpt**, а початок наступного **сегмента** маршруту — інша **rtept**. Але ці дві **trkpt** абсолютно однакові за широтою, довготою та іншими параметрами.
* Перекриття **сегментів** маршруту можна виявити за допомогою **length** та **startTrkptIdx** (останній використовується лише для зручності читання людиною):
  - Якщо сума **startTrkptIdx** та **length** попереднього **сегмента** маршруту дорівнює **startTrkptIdx** наступного **сегмента** маршруту, **сегменти** маршруту не перекриваються.
  - Якщо сума менша на одиницю, то **сегменти** маршруту перекриваються.
* Можуть бути прямі **сегменти** маршруту. Вони позначені **id="-1"**. Вони можуть з'явитися у двох випадках:
  - Це мультипрофільний маршрут, і користувач вибрав пряму лінію.
  - Користувач розмістив **rtept** занадто далеко від найближчої дороги, тому OsmAnd проклав пряму лінію між **rtept** та дорогою.
* trkpts = length - (segments - 1) + (rtepts - 2), де:
  - trkpts - кількість **trkpt** всередині **trkseg**
  - length - сума всіх **length** **сегментів** маршруту всередині **trkseg**
  - segments - кількість **сегментів** маршруту всередині **trkseg**
  - rtepts - кількість **rtept**, що належать **trkseg**

#### Приклад: {#example}

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

## Колекції GPX у форматі OBF {#gpx-collections-in-obf}

OsmAnd дозволяє конвертувати кілька файлів GPX в один файл OBF. Це дає змогу зберігати тисячі треків GPX у компактному, оптимізованому форматі, зберігаючи при цьому такі функції, як спеціальні іконки на мапі, налаштування вигляду треку та функціональність пошуку. Це дозволяє уникнути обмежень великих локальних файлів GPX, які зазвичай не можуть обробляти більше 500 тисяч точок загалом, однак деякі функції треків GPX можуть бути відсутніми порівняно з відображенням файлу OBF.

Кроки для конвертації GPX в OBF:

- Увійдіть до [веб-мапи OsmAnd](https://osmand.net/map) *→ Треки → Виберіть папку → *Меню* (⋮) *→ Завантажити як колекцію OBF*

- Отриманий файл `<.obf>` можна імпортувати в OsmAnd (потрібен OsmAnd Android 5.0+).


### Стиль лінії треку {#track-line-style}

Налаштуйте лінії треку за допомогою наступних тегів:

| Тег GPX | За замовчуванням | Призначення |
|:--------------------------|:--------|:---------|
| `<name>` | *(немає)* | Назва, що відображається над лінією треку. |
| `color` | `red` | Основний колір (HEX або текст). |
| `colour`, `displaycolor` | *(немає)* | Альтернативні способи перевизначення `color`. |
| `shield_waycolor` | *(немає)* | Перевизначення для `color` лінії треку щита. |
| `translucent_line_colors` | `no` | Встановіть `yes` для напівпрозорих кольорів. |
| `width` | `thin` | Ширина лінії: `"thin"`, `"medium"`, `"bold"`, `"1-24"`, або `"roadstyle"` |

**Підтримувані кольори:** black, blue, brown, darkyellow, gray, green, lightblue, lightgreen, orange, purple, red, white, yellow.

***Приклад:***

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

### Щити лінії треку {#track-line-shields}

Щити — це іконки або символи, що відображаються вздовж лінії треку. OsmAnd підтримує щити у стилі [OSMC-symbol-style](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), які можуть включати:

- Фонова іконка - основна форма (наприклад, коло або квадрат).
- Іконки переднього плану - до двох менших символів, накладених на фон.
- Текст - короткі описи або ідентифікатори, що походять з тегів `shield_text` або `ref`.

Якщо властивості щита не визначені, OsmAnd використовує жовтий щит автоматичного розміру для треку.

***Теги для щитів:***

| Тег GPX | Призначення |
|:-------------------|:-----------------------------------------------------------------------|
| `shield_bg` | Визначає фонову іконку для щита. |
| `shield_fg` | Вказує першу іконку переднього плану (наприклад, стрілку або крапку). |
| `shield_fg_2` | Вказує другу іконку переднього плану (необов'язково). |
| `shield_text` | Встановлює короткий текст, що відображатиметься на щиті (наприклад, посилання на маршрут). |
| `shield_textcolor` | Визначає колір тексту щита (необов'язково). |
| `shield_waycolor` | Перевизначає стандартний колір треку для лінії щита (необов'язково). |
| `ref` | Використовується як резервний текст, якщо `shield_text` не надано. |

***Приклад:***

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

### Відображення шляхових точок {#waypoints-display}

Іконки шляхових точок можна налаштувати за допомогою наступних тегів:

| Тег GPX | За замовчуванням | Призначення |
|:-------------|:---------|:---------------------------------------------------|
| `icon` | *(немає)* | Вказує іконку для шляхової точки (використовує стандартні іконки редактора шляхових точок OsmAnd). |
| `color` | `red` | Встановлює колір іконки за допомогою HEX-коду (наприклад, `#ffaa00`) або підтримуваної назви кольору (обмежені опції). |
| `background` | `circle` | Визначає форму іконки. Підтримувані значення: `circle`, `square`, `octagon`. |

***Поведінка форм `background`:***

- `circle` - відображає іконку з круглим фоном.
- `square` - відображає іконку з квадратним фоном, за замовчуванням червоним, якщо колір не вказано.
- `octagon` - в OsmAnd розглядається як круглий фон.

**Підтримувані кольори для** `background=circle`: blue, gray, green, lightblue, lightgreen, orange, purple, yellow.

***Покращення за допомогою додаткових елементів:***

- Ви можете додавати форматовані описи до шляхових точок за допомогою [HTML-коду](#html-in-descriptions). Це дозволяє включати стилізований текст, посилання або навіть зображення.
- Шляхові точки можуть відображати пов'язані зображення за допомогою [Посилання-як-Зображення](#link-tag).

***Приклад:***

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


### Пошук за назвою та посиланнями {#search-by-name-and-refs}

Треки та шляхові точки можна знаходити за допомогою різноманітних тегів GPX.

| Тег GPX | Розташування | Призначення |
|:--------------|:-----------------------|:----------------------------------------------------------------------------|
| `<name>` | `<metadata>` | Основна назва треку GPX. |
| `ref` | GPX `<extensions>` | Короткий ідентифікатор, часто отриманий з тегу OSM `ref`. |
| `shield_text` | GPX `<extensions>` | Текст, що відображається на щитах (може також використовуватися з `ref`). |
| `name_-_lang` | GPX/WPT `<extensions>` | Локалізована `name:lang` (наприклад, `name_-_en` для англійської, замініть `:` -> `_-_`) |
| `<name>` | `<wpt>` | Назва шляхової точки. |

***Приклад:***

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

### Пошук за типом активності {#search-by-activity-type}

OsmAnd організовує треки у файлах OBF у **Групи активностей** та **Типи активностей**. Ці класифікації допомагають вам фільтрувати треки як POI або створювати фільтри пошуку на основі активності.

Як працюють типи активностей:

- Типи та групи активностей визначаються за допомогою `"id"` та `"tags"` з файлу [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json).
- OsmAnd використовує теги `osmand:activity` або `osmand:route` для класифікації активностей у файлах GPX.


| Тег GPX | Розташування | Призначення |
|:------------------|:---------|:-------------------------------------------------|
| `osmand:activity` | `<metadata>` | Основний тег OsmAnd для зберігання типу активності (ID). |
| `osmand:route` | GPX `<extensions>` | Альтернативний спосіб OSM для визначення типу активності. |


***Приклади організації треків за типом активності:***

1. Це класифікує трек у групу **Мотоциклізм** з типом **Позашляховий мотоциклізм (Dirt Biking)**.

    ```xml
    <metadata>
      <extensions>
        <osmand:activity>off_road_motorcycling_dirt_biking</osmand:activity>
      </extensions>
    </metadata>
    ```

2. Це організує трек у групу **Велоспорт** з типом **Гірський велосипед**.

    ```xml
    <gpx>
      <extensions>
        <osmand:route>mtb</osmand:route>
      </extensions>
    </gpx>
    ```

### Теги для пошуку інформації {#search-information-tags}

Файли OBF автоматично генерують та зберігають критичну статистику та аналітику треку.

| Тег OBF | Призначення |
|:--------------------------------------|:----------------------------------------------------------------------|
| `distance` | Загальна відстань, пройдена всіма сегментами треку. |
| `start_ele`, `ele_graph` | Дані про висоту з GPX, запаковані в компактний бінарний масив. |
| `min_ele`, `avg_ele`, `max_ele` | Аналітика мінімальної, середньої та максимальної висоти. |
| `diff_ele_up`, `diff_ele_down` | Загальний набір та втрата висоти по всьому треку. |
| `max_speed`, `avg_speed`, `min_speed` | Аналітика швидкості треку, включаючи максимальну, середню та мінімальну швидкість. |
| `time_span`, `time_span_no_gaps` | Загальний час для треку, з урахуванням та без урахування проміжків. |
| `time_moving`, `time_moving_no_gaps` | Загальний час руху, з урахуванням та без урахування проміжків. |

### Внутрішні теги {#internal-tags}

Деякі теги GPX використовуються або зберігаються опосередковано у файлах OBF. Зверніться до [OsmGpxWriteContext.java](https://github.com/osmandapp/OsmAnd-tools/blob/master/java-tools/OsmAndMapCreatorUtilities/src/main/java/net/osmand/obf/OsmGpxWriteContext.java) для отримання деталей щодо реалізації.

| Тег OBF | Призначення |
|:-----------------------------|:-----------------------------------------------------------------------------------------------------------|
| `route_id` | Унікальний ідентифікатор для файлу GPX, що пов'язує дані мапи та POI (формат: `/[A-Z]+[0-9]+/` наприклад, `OSM12345`). |
| `route_type` | Ідентифікатор групи активності (`id`), отриманий з `poi/activities.json` |
| `route_activity_type` | Ідентифікатор типу активності (в межах групи) (`id`), отриманий з `poi/activities.json` |
| `name`, `ref`, `description` | Локалізовані та доступні для пошуку атрибути (`lang="true"` у типах POI) |
| `filename` | Назва оригінального файлу GPX, використаного для генерації цього треку. |
| `track_color` | Колір треку на мапі, отриманий з `shield_waycolor`, `color`, `colour`, або `displaycolor` |
| `extensions_extra_tags` | Довільні додаткові теги для `<gpx><extensions>` у форматі JSON. |
| `metadata_extra_tags` | Довільні додаткові теги для `<metadata><extensions>` у форматі JSON. |
| `wpt_extra_tags` | Довільні додаткові теги для шляхових точок `<wpt><extensions>` у форматі JSON. |
| `route_track_point` | Шляхові точки з файлу GPX використовують цей тип у даних POI. |
| `route_bbox_radius` | Вказує стандартний радіус для пошуку частин треку в розділі POI |
| `route_shortlink_tiles` | Вказує список плиток OSM Shortlink, розділених комами, для прискорення читання даних геометрії (необов'язково) |
| `route_segment_index` | Вказує порядковий номер сегмента геометрії, який пов'язаний з цією точкою (необов'язково) |
| `route_name` | Назва маршруту, що використовується внутрішнім `searchPoiByName` (застаріло) |