---
source-hash: f1188d09955bc3e6f60dd73a49f429e588c513aea0cfc5bf7e9e38efe46e0dc9
sidebar_position: 3
title:  Інформаційні віджети
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




## Огляд {#overview}

Інформаційні віджети надають швидкий доступ до важливих даних. Це можуть бути дані про швидкість, погоду, місце паркування, дані із зовнішніх датчиків та багато іншого. Віджети можна налаштувати відповідно до ваших конкретних вимог, увімкнувши їх видимість на екрані програми або вимкнувши їх за необхідності.

![Інформаційні віджети](@site/static/img/widgets/informational_widgets_all.png)


## Віджети висоти {#altitude-widgets}

Віджети висоти відображають висоту над рівнем моря поточного місцезнаходження та висоту центру карти.


### Висота: Поточне місцезнаходження {#altitude-current-location}

:::note Завантажити Світову корекцію висоти
На деяких пристроях Android висота може відображатися неточно. Щоб вирішити цю проблему, завантажте карту з корекцією висоти.

- Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Для отримання додаткової інформації відвідайте [Карти та ресурси](../personal/maps-resources.md#downloads).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет висоти Android](@site/static/img/widgets/altitude_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет висоти iOS](@site/static/img/widgets/altitude_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Налаштування → Профілі програми → Загальні налаштування → Одиниці та формати → Одиниці довжини* |


### Висота: Центр карти {#elevation-map-center}

:::info Платна функція
&nbsp;<ProFeature/> Щоб отримати доступ до використання віджета *Висота: центр карти*, підпишіться на OsmAnd Pro для [Android](../purchases/android.md#pro-features) або [iOS](../purchases/ios.md#pro-features).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет висоти Android](@site/static/img/widgets/elevation_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет висоти iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати віджет, щоб дізнатися висоту поточного центру карти над рівнем моря. Для відображення інформації у віджеті **Висота: центр карти** потрібна [Карта рельєфу (Затінення та схил)](../plugins/topography.md#download-maps) потрібної області.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Налаштування → Профілі програми → Загальні налаштування → Одиниці та формати → Одиниці довжини* |


## Поточний час {#current-time}

![Віджет поточного часу](@site/static/img/widgets/current_time_widget.png)

Цей віджет відображає поточний час, взятий з вашого пристрою.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_plain_time"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | Налаштування пристрою налаштовують Час та Формат. |


## Поточна швидкість {#current-speed}

![Віджет швидкості](@site/static/img/widgets/current_speed_widget.png)

Віджет показує поточну швидкість, визначену датчиком GPS.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_current_speed"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Середня швидкість {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет середньої швидкості Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет середньої швидкості iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>

Віджет **Середня швидкість** розраховує та відображає вашу середню швидкість за вибраний проміжок часу без необхідності навігації або запису треку. Він корисний для моніторингу дотримання швидкості на автомагістралях або відстеження середньої швидкості за останні кілька хвилин їзди на велосипеді.

1. ***Налаштування віджета.***
   Щоб налаштувати параметри, торкніться кнопки **Налаштування** (*Android*) або **поля віджета** (*iOS*). Доступні опції включають:

2. ***Часовий інтервал.***

   - Середня швидкість розраховується на основі вибраного часового інтервалу, який може варіюватися від **15 секунд до 60 хвилин**.

   - Розрахунок базується на даних GPS за формулою:
   `Середня швидкість = СЕРЕДНЄ(GPS_LOCATION.speed)`.

3. ***Враховувати зупинки.***

   **Увімкнено** — Якщо записана швидкість нижче 1 одиниці на годину, вона ігнорується, що запобігає непотрібному падінню середньої швидкості при зупинках на світлофорах або коротких перервах.

   **Вимкнено** — Зупинки включаються в розрахунок, що означає, що тривалі паузи зменшать загальну середню швидкість.

4. ***Скинути середню швидкість.***
   Ви можете скинути розрахунок середньої швидкості двома способами:

   - Довго натисніть на віджет, щоб відкрити [Контекстне меню](../widgets/configure-screen.md#widget-context-menu), і виберіть *Скинути середню швидкість*.
   - Відкрийте *налаштування віджета* через [Меню налаштування екрана](../widgets/configure-screen.md#settings) і виберіть опцію скидання.

Після скидання середня швидкість перераховується з нових даних GPS. Ця функція корисна для моніторингу швидкості в реальному часі, наприклад, для відстеження швидкості в зонах з **камерами контролю середньої швидкості**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Середня швидкість](@site/static/img/widgets/average_speed_widget_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети середньої швидкості](@site/static/img/widgets/average_speed_widget_ios_1.png) ![Віджети середньої швидкості](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_average_speed"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu). <br/> Може використовуватися для скидання середньої швидкості. |


## Коефіцієнт ковзання {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Віджети| Віджети на екрані|
|:--------|:---------|
|![Коефіцієнт ковзання](@site/static/img/widgets/glide_ratio_3.png)|![Коефіцієнт ковзання](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Віджети| Віджети на екрані|
|:--------|:---------|
|![Коефіцієнт ковзання](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Коефіцієнт ковзання](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>

[Простий](../widgets/configure-screen.md#widgets-for-all-panels) віджет *Коефіцієнт ковзання* надає цінну інформацію про коефіцієнт ковзання, щоб допомогти прийняти обґрунтовані рішення при плануванні повітряних маршрутів. Віджет *Коефіцієнт ковзання* в OsmAnd допомагає оцінити ефективність вашого спуску або підйому при навігації до певного місця (позиції [маркера](../personal/markers.md) на карті). Він розраховує коефіцієнт ковзання як відношення відстані до різниці висот між вашим поточним положенням та запланованим пунктом призначення. Ви можете прочитати більше про це [тут](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Використання віджетів:**

- *Планування польотів на планері.* Для пілотів планерів віджет *Коефіцієнт ковзання до цілі* стає незамінним інструментом при плануванні та виконанні польотів на планері. Пілоти можуть оцінити, наскільки далеко вони можуть летіти до своєї цілі за поточних умов та необхідного коефіцієнта ковзання.
- *Оптимізація підйомів та спусків.* Середній коефіцієнт ковзання дозволяє пілотам оптимізувати підйоми та спуски на основі поточних умов. Пілоти можуть вибрати оптимальний час для підйомів, щоб максимізувати час польоту, або для спусків, щоб досягти цільової точки.
- *Реагування на зміну умов.* Віджет надає безперервні оновлення коефіцієнта ковзання, дозволяючи пілотам миттєво реагувати на зміни атмосферних умов або маршрутів. Вони можуть коригувати свій план польоту для забезпечення безпеки та ефективності.
- *Максимальне використання горизонтальної відстані.* Знання коефіцієнта ковзання дозволяє пілотам максимально використовувати горизонтальну відстань для переміщення до цілі, що особливо важливо при плануванні тривалих польотів.
- *Зменшення ризику*. Віджет *Коефіцієнт ковзання до цілі* допомагає пілотам уникати ситуацій, коли досягнення цілі стає неможливим через недостатній коефіцієнт ковзання. Це допомагає зменшити ризики та покращити безпеку польотів.


**Позитивні та негативні значення:**

- **Позитивні значення** вказують на те, що ваш пункт призначення знаходиться на нижчій висоті, ніж ваше поточне положення, що вимагає спуску.
- **Негативні значення** вказують на те, що ваш пункт призначення знаходиться на вищій висоті, що вимагає підйому. Наприклад, "-90:1" означає, що після подолання відстані 90 кілометрів вам потрібно піднятися на 1 кілометр, щоб досягти пункту призначення.


**Округлення/Форматування:**

- Значення **≤ 0.1**:
  - "0.05" відображається як "0".
- Значення **> 0.1 та < 100**:
  - наприклад, "50.7643" відображається як "50.8:1".
- Значення **> 100:**
  - "102.35" відображається як "102:1."


### Коефіцієнт ковзання до цілі {#glide-ratio-to-target}

- **Коефіцієнт ковзання до цілі** показує точний коефіцієнт ковзання, необхідний для досягнення цільової точки.
- **Висота цілі** показує висоту цільової точки. Як цільова точка має використовуватися [Маркер карти](../personal/markers.md).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → Коефіцієнт ковзання* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → Коефіцієнт ковзання* |
| Натисканням | Змінює *Коефіцієнт ковзання до цілі* або *Висоту цілі* |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Середній коефіцієнт ковзання {#average-glide-ratio}

- **Середній коефіцієнт ковзання** показує середній коефіцієнт ковзання за вказаний проміжок часу.
- **Середня вертикальна швидкість** вказує швидкість, з якою об'єкт піднімається або опускається протягом певного часу. Для оцінки враховуються лише перша та остання точки часового інтервалу. Ви можете встановити часовий інтервал для цього віджета від 15 секунд до 60 хвилин. Як цільова точка слід використовувати [Маркер карти](../personal/markers.md).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → Коефіцієнт ковзання* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → Коефіцієнт ковзання* |
| Натисканням | Змінює *Середній коефіцієнт ковзання* або *Середню вертикальну швидкість* |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Рівень заряду батареї {#battery-level}

![Віджет рівня заряду батареї](@site/static/img/widgets/battery_level_widget.png)

Віджет **Рівень заряду батареї** відображає відсоток заряду батареї вашого пристрою прямо на екрані карти та автоматично оновлюється щонайменше раз на хвилину.

- **iOS 17 та новіші версії** — Через **обмеження конфіденційності** дані про рівень заряду батареї доступні лише з кроком 5% (наприклад, 35%, 60% або 85%). Це системне обмеження, встановлене Apple.

- Пристрої **Android** — Віджет відображає точний відсоток заряду батареї, як повідомляє система, без округлення.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_battery"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Віджет координат {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет координат Android](@site/static/img/widgets/coordinates_widget_1.png) ![Віджет координат Android](@site/static/img/widgets/coordinates_widget_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет координат Android](@site/static/img/widgets/coordinates_widget_ios_2.png)

</TabItem>

</Tabs>

OsmAnd пропонує два типи віджетів координат:

- **Координати: центр карти** - показує географічні координати поточного центру карти.
- **Координати: поточне місцезнаходження** - показує географічні координати поточного географічного місцезнаходження.

Віджети координат відображаються у верхній частині екрана. Іконки із зеленим фоном показують широту та довготу точки в центрі видимої частини карти, а ті, що мають синій фон, показують координати вашого поточного місцезнаходження. Інформацію про підтримувані *Формати координат* можна знайти в статті *[Пошук координат](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| Натисканням | Копіює координати в буфер обміну. |
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) або <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Інформація GPS {#gps-info}

<InfoAndroidOnly />

![Віджет інформації GPS Android](@site/static/img/widgets/gps_info_widget.png)

Віджет інформації GPS (Global Positioning System) показує кількість супутників, які пристрій наразі виявляє та використовує. Ви можете використовувати його для перевірки стану GPS у разі слабкого сигналу.

Ви можете скинути поточний кеш GPS через:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_gps_info"/>* |
| Натисканням | Відкриває меню стану GPS зі сторонніми інструментами для налаштування вбудованого пристрою GPS. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Положення Сонця {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position.png) ![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_4_ios.png) ![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>

Віджети положення Сонця показують час наступного сходу та заходу сонця для центру карти. При натисканні вони відображають час, що залишився до очікуваного заходу або сходу сонця. В обох випадках час базується на налаштованому часі вашого пристрою.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| Натисканням | Перемикання між часом, що залишився, та часом наступного сходу/заходу сонця. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Лінійка радіуса {#radius-ruler}

:::note
Більш детальний опис можна прочитати тут: **[Лінійка радіуса та Лінійка](../widgets/radius-ruler)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Екран лінійки радіуса](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Лінійка радіуса"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Лінійка радіуса"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Лінійка радіуса"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Віджет Лінійка радіуса показує відстань між вашим місцезнаходженням та центральною точкою Лінійки радіуса. Радіус першого кола дорівнює [масштабу карти](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| Натисканням | Змінює стан віджета між режимами чорної шкали, відтінків сірого та невидимим. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |


## Спідометр {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Спідометр](@site/static/img/widgets/speedometer_1_andr.png) ![Спідометр](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Спідометр](@site/static/img/widgets/speedometer_1_ios.png) ![Спідометр](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Віджет спідометра** — це графічне відображення поточної швидкості транспортного засобу на основі *даних, отриманих від GPS*. Він дозволяє в реальному часі контролювати відповідність вашої швидкості дозволеній межі швидкості. Дозволена межа швидкості надається [даними OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) для конкретної ділянки дороги та налаштуванням OsmAnd [Допустима межа швидкості](../navigation/guidance/voice-navigation.md#speed-limit).

- У *налаштуваннях спідометра* ви можете вибрати розмір (**Висота**) віджета на екрані програми як *Малий*, *Середній* або *Великий*.
- Ви можете вказати, коли отримувати **Попередження про перевищення швидкості**, вибравши *Завжди* або *При перевищенні*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Спідометр"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Спідометр"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Спідометр* |
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>* |


## Віджети плагінів {#plugin-widgets}

Ці віджети вмикаються та працюють у поєднанні з відповідними плагінами.


### Віджети запису поїздки {#trip-recording-widgets}

:::note
Більш детальний опис можна прочитати тут: **[Плагін <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет запису поїздки](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет запису поїздки](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Віджети запису поїздки відносяться до [плагіна <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Ви можете використовувати віджети для перегляду короткої інформації про запис треку на екрані. Наприклад, *Відстань*, *Тривалість*, *Підйом* та *Спуск*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_monitoring"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_monitoring"/>* |
| Натисканням | Почати/Зупинити запис треку або Переглянути графік. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджети зовнішніх датчиків {#external-sensors-widgets}

:::note
Щоб додати віджети зовнішніх датчиків на екран карти, увімкніть плагін OsmAnd [Зовнішні датчики](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджети зовнішніх датчиків Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет запису поїздки](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Віджети відносяться до [плагіна Зовнішні датчики](../plugins/external-sensors.md#widgets). Ви можете використовувати їх для перегляду короткої інформації з ваших зовнішніх датчиків, таких як: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*лише Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** та **<Translate android="true" ids="external_device_characteristic_temperature"/>**. *На iOS* ви також можете вибрати **рівень заряду батареї** підключених датчиків BLE для відображення безпосередньо у віджеті.

- Щоб додати віджет — [увімкніть](../plugins/index.md#enable--disable) плагін OsmAnd Зовнішні датчики.

- Щоб додати датчики, виберіть один з варіантів:
  - Перейдіть до *Меню → Плагіни → Зовнішні датчики → Налаштування → Підключити новий датчик*.
  - Перейдіть до *Меню → Налаштувати екран → Виберіть панель → Додати віджет → Зовнішні датчики → Виберіть датчик → Налаштування → Підключити новий датчик*.

- Додайте віджети, навіть якщо зовнішній датчик не підключено.

- **Усі додані віджети видимі**, навіть якщо зовнішній датчик не підключено.

- Використовуйте [плагін Запис поїздки](../plugins/trip-recording.md#recording-settings) для запису даних датчиків.

- Прочитайте про те, як вибрати, який датчик (того ж типу) відображати у віджеті [тут](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| Натисканням | Без змін (*Android*) / Перемикає режим між даними датчика та рівнем заряду батареї (*iOS*). |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджети показників транспортного засобу {#vehicle-metrics-widgets}

<InfoAndroidOnly />

:::note
Щоб додати віджети показників транспортного засобу на екран карти, увімкніть плагін OsmAnd [Показники транспортного засобу](../plugins/vehicle-metrics.md).
:::

![Віджети показників транспортного засобу Android](@site/static/img/widgets/vehicle_metrics_1.png)

Віджети належать до [плагіна Показники транспортного засобу](../plugins/vehicle-metrics.md#widgets). Ви можете використовувати їх для перегляду інформації з підключеного сканера OBD-II, такої як (*13 показників*): **Температура впуску**, &nbsp; **Температура навколишнього середовища**, &nbsp; **Температура охолоджуючої рідини**, &nbsp; **Температура моторного масла**, &nbsp; **Швидкість двигуна** (*безкоштовно*), &nbsp; **Час роботи двигуна**, &nbsp; **Розраховане навантаження на двигун**, &nbsp; **Тиск палива**, &nbsp; **Витрата палива**, &nbsp; **Залишок палива**, &nbsp; **Рівень заряду батареї**, &nbsp; **Швидкість транспортного засобу** (*безкоштовно*), та **Положення дросельної заслінки**.

- Щоб додати віджети показників транспортного засобу на екран карти, [увімкніть](../plugins/index.md#enable--disable) **плагін Показники транспортного засобу**.
- Ви можете додати віджети, навіть якщо сканер OBD-II не підключено.
- Усі додані віджети видимі незалежно від того, підключено сканер OBD-II чи ні.
- Щоб відредагувати віджет, торкніться віджета, доданого до панелі, потім торкніться *Налаштування*, або безпосередньо торкніться *іконки Налаштування* в полі віджета.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="obd_widget_group"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджети погоди {#weather-widgets}

:::note
Щоб додати віджети погоди на екран карти, увімкніть плагін OsmAnd [Погода](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет погоди Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет погоди iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>

Віджети погоди відображають поточну інформацію про погоду для центральної точки на карті. Вони автоматично вмикаються на екрані при перегляді з плагіном (*Меню → Погода*), і ви можете вибрати, які з них розмістити на головному екрані для щоденного використання (*Меню → Налаштувати екран*). Більше про це можна прочитати в статті [Плагін Погода](../plugins/weather.md).

- **Температура**. <Translate android="true" ids="temperature_widget_desc"/>
- **Атмосферний тиск**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Вітер**. <Translate android="true" ids="wind_widget_desc"/>
- **Хмарність**. <Translate android="true" ids="clouds_widget_desc"/>
- **Опади**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="shared_string_weather"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="shared_string_weather"/>* |
| Натисканням | Показує у спливаючому діалоговому вікні дату та час, коли інформація про погоду є актуальною. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Плагіни → Погода → Налаштування* або *Меню → Налаштування → Профіль програми → Погода* |


### Віджет паркування {#parking-widget}

:::note
Щоб додати віджети паркування на екран карти, увімкніть плагін OsmAnd [Місце паркування](../plugins/parking.md).
:::

![Віджет паркування](@site/static/img/plugins/parking/parking_widget.png)

Віджет плагіна Паркування показує відстань від центру екрана до місця паркування. Щоб встановити місце паркування на карті, збільште масштаб до потрібного рівня, потім довго натисніть на місце на карті, щоб відкрити контекстне меню. Дотримуйтесь [цих налаштувань](../plugins/parking.md#set-a-spot).

**Примітка:** Віджет паркування з'явиться лише якщо на карту додано місце паркування. Без збереженого місця паркування віджет не буде видимим.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_parking"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="parking_place"/>* |
| Натисканням | Переміщує вигляд карти до місця паркування. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Віджет Mapillary {#mapillary-widget}

:::note
Щоб додати віджет Mapillary на екран карти, увімкніть плагін OsmAnd [Mapillary](../plugins/mapillary.md).
:::

![Віджет Mapillary](@site/static/img/widgets/mapillary_widget.png)

Це віджет плагіна Mapillary, який надає швидкий доступ до програми Mapillary, що дозволяє додавати [*зображення рівня вулиць*](../plugins/mapillary.md#enable-layer). Віджет автоматично додається на карту при увімкненні плагіна.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="mapillary"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="mapillary"/>* |
| Натисканням | Відкриває програму [Mapillary](https://www.mapillary.com/). |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджет аудіо/відео нотаток {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Щоб додати віджети аудіо/відео нотаток на екран карти, увімкніть плагін OsmAnd [Аудіо/відео нотатки](../plugins/audio-video-notes.md).
:::

![Віджет аудіо-відео нотаток](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Це віджети плагіна аудіо/відео нотаток, які надають швидкий доступ до початку/зупинки запису аудіо, відео або фото нотаток.

Ви можете налаштувати, яка дія вибрана за замовчуванням:

- *За запитом*. Стан за замовчуванням. Щоразу відображається діалогове вікно вибору дії.
- *Записати аудіо* - записує аудіо нотатку.
- *Записати відео* - дозволяє записати відео.
- *Зробити фото* - дозволяє зробити фото.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_av_notes"/>* |
| Натисканням | Почати / зупинити запис нотатки |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджет трекера {#tracker-widget}

<InfoAndroidOnly />

:::note
Щоб додати віджет трекера на екран карти, увімкніть плагін OsmAnd [Трекер](../plugins/osmand-tracker.md).
:::

Для роботи плагіна та віджета потрібно встановити [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) з Google Play або інших джерел.

Цей віджет плагіна OsmAnd Tracker використовується для швидкого доступу до програми OsmAnd Tracker та обміну інформацією про ваше місцезнаходження з іншими користувачами. Програма надсилає повідомлення *Live Location* до вибраних чатів протягом певного часу, відображає список контактів та груп, а також перевіряє чати на наявність повідомлень з вашим місцезнаходженням, які потім відображаються на карті в OsmAnd.

![Віджет трекера](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="tracker_item"/>* |
| Натисканням | Відкриває програму OsmAnd Online GPS Tracker. |


### Віджети розробника {#developer-widgets}

:::note
Щоб додати віджети розробника на екран карти, увімкніть плагін OsmAnd [Розробка OsmAnd](../plugins/development.md).
:::

**Віджети розробника** надають інформацію про [швидкість рендерингу](../plugins/development.md#map-rendering-fps-widget) карти та параметри віртуальної позиції камери, включаючи [рівень масштабування](../plugins/development.md#zoom-level), [відстань](../plugins/development.md#distance-to-target) до центру карти, [висоту камери](../plugins/development.md#camera-elevation) та [кут нахилу](../plugins/development.md#camera-tilt).

#### FPS рендерингу карти {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет FPS Android](@site/static/img/widgets/fps_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

[Віджет FPS рендерингу карти](../plugins/development.md#map-rendering-fps-widget) відображає швидкість рендерингу карти та її елементів, виміряну в кадрах на секунду (FPS). Вище значення FPS вказує на швидший рендеринг та більш плавне візуальне виконання.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


#### Віджети камери {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджети положення камери](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети положення камери 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

**Віджети камери** дозволяють контролювати вирівнювання карти OsmAnd з поверхнею землі.

- [Нахил камери](../plugins/development.md#camera-tilt). Відображає кут нахилу камери в режимі перспективи. Значення за замовчуванням — 90° (без нахилу).
- [Висота камери](../plugins/development.md#camera-elevation). Вказує висоту камери над рівнем поверхні.
- [Рівень масштабування](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Відстань від камери до цілі](../plugins/development.md#distance-to-target). Вимірює відстань між камерою та цільовим місцезнаходженням на карті.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="developer_widgets"/>* |
|   | **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="developer_widgets"/>* |
| Натисканням | Перемикання між режимами (*Рівень масштабування*) / Без змін (*Інші*) |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


#### Доступна ОЗП {#available-ram}

<InfoAndroidOnly />

![Віджети середньої швидкості](@site/static/img/widgets/available_RAM_2_andr.png)

Віджет **Доступна ОЗП** — це інструмент для моніторингу використання пам'яті вашого пристрою у зв'язку з OsmAnd. Він надає детальні дані, які допомагають оптимізувати продуктивність програми.

- **Доступна ОЗП програми.** Відображає обсяг ОЗП, доступний для використання OsmAnd без спричинення проблем з продуктивністю.

- **Використання ОЗП програми** — Показує поточне споживання ОЗП OsmAnd.

- **Загальна ОЗП програми** — Вказує загальний обсяг пам'яті, виділений для OsmAnd, включаючи як використану, так і доступну пам'ять.

> **ПРИМІТКА**. *Загальна доступна ОЗП* може змінюватися залежно від фонових процесів та інших програм, що працюють на вашому пристрої. Ці значення є динамічними та пропонують спосіб відстеження та керування використанням пам'яті для стабільної та ефективної роботи OsmAnd.*

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="developer_widgets"/> → *Доступна ОЗП* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Пов'язані статті {#related-articles}

- [Налаштування екрана](./configure-screen.md)
- [Кнопки карти](./map-buttons.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Лінійка радіуса та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)

> *Останнє оновлення: квітень 2025*