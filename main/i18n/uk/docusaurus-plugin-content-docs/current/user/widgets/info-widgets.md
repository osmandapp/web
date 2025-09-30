---
source-hash: f3cf0ead71b0f41a189bc744f46669b62911117c225598bf57a98dd7d9c20d89
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

Інформаційні віджети надають швидкий доступ до важливих даних. Це можуть бути дані про швидкість, погоду, місце паркування, дані із зовнішніх датчиків та багато іншого. Віджети можна налаштувати відповідно до ваших конкретних вимог, увімкнувши їх видимість на екрані програми або вимкнувши за потреби.

![Інформаційні віджети](@site/static/img/widgets/informational_widgets_all.png)


## Віджети висоти   {#altitude-widgets}

Віджети висоти відображають висоту над рівнем моря поточного географічного розташування та висоту центру карти.  


### Висота: Поточне місцезнаходження   {#altitude-current-location}
  
:::note  Завантажте корекцію висот світу
На деяких пристроях Android висота може відображатися неточно. Щоб вирішити цю проблему, завантажте карту з корекцією висот.

- Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- Для отримання додаткової інформації відвідайте [Карти та ресурси](../personal/maps-resources.md#downloads-menu).
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
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| При натисканні | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Налаштування → Профілі додатку → Загальні налаштування → Одиниці виміру та формат → Одиниці довжини* |  


### Висота: Центр карти {#elevation-map-center}

:::info Платна функція
&nbsp;<ProFeature/> Щоб отримати доступ до віджета *Висота: центр карти*, підпишіться на OsmAnd Pro для [Android](../purchases/android.md#pro-features) або [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет висоти Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет висоти iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати віджет, щоб дізнатися висоту поточного центру карти над рівнем моря. Для відображення інформації у віджеті **Висота: центр карти** потрібна [Карта рельєфу (Відтінення рельєфу та Ухил)](../plugins/topography.md#download-maps) необхідної області.  

| | |
|:------------|:------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| При натисканні | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Налаштування → Профілі додатку → Загальні налаштування → Одиниці виміру та формат → Одиниці довжини* |


## Поточний час {#current-time}

![Віджет поточного часу](@site/static/img/widgets/current_time_widget.png)

Цей віджет відображає поточний час, отриманий з вашого пристрою.  

| | |
|:------------|:------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_plain_time"/>* |
| При натисканні | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | Налаштування пристрою визначають час та формат. |


## Поточна швидкість {#current-speed}

![Віджет швидкості](@site/static/img/widgets/current_speed_widget.png)  

Віджет показує поточну швидкість, визначену датчиком GPS.  

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_current_speed"/>* |
| При натисканні  | Без змін |
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

Віджет **Середня швидкість** обчислює та відображає вашу середню швидкість за обраний проміжок часу, не вимагаючи навігації чи запису треку. Він корисний для контролю дотримання швидкості на автомагістралях або відстеження середньої швидкості за останні кілька хвилин їзди на велосипеді.

1. ***Налаштування віджета.***  
   Щоб налаштувати параметри, натисніть кнопку **Налаштування** (*Android*) або **поле віджета** (*iOS*). Доступні опції:

2. ***Проміжок часу.***

   - Середня швидкість розраховується на основі обраного проміжку часу, який може становити від **15 секунд до 60 хвилин**.  

   - Розрахунок базується на даних GPS за формулою:  
   `Середня швидкість = СЕРЕДНЄ(GPS_LOCATION.speed)`.

3. ***Враховувати зупинки.***

   **Увімкнено** — якщо зафіксована швидкість нижче 1 одиниці на годину, вона ігнорується, що запобігає непотрібному зниженню середньої швидкості під час зупинок на світлофорах або коротких перерв.  

   **Вимкнено** — зупинки враховуються в розрахунку, тобто тривалі паузи зменшать загальну середню швидкість.

4. ***Скинути середню швидкість.***
   Ви можете скинути розрахунок середньої швидкості двома способами:

   - Довго натисніть на віджет, щоб відкрити [Контекстне меню](../widgets/configure-screen.md#widget-context-menu), і виберіть *Скинути середню швидкість*.
   - Відкрийте *налаштування віджета* через [меню Налаштувати екран](../widgets/configure-screen.md#widget-settings) і виберіть опцію скидання.

Після скидання середня швидкість перераховується з нових даних GPS. Ця функція корисна для моніторингу швидкості в реальному часі, наприклад, для відстеження швидкості в зонах з **камерами контролю середньої швидкості**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Середня швидкість](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети середньої швидкості](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Віджети середньої швидкості](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_average_speed"/>* |
| При натисканні | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu). <br/> Можна використовувати для скидання середньої швидкості. |


## Аеродинамічна якість {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Віджети| Віджети на екрані|
|:--------|:---------|
|![Аеродинамічна якість](@site/static/img/widgets/glide_ratio_3.png)|![Аеродинамічна якість](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Віджети| Віджети на екрані|
|:--------|:---------|
|![Аеродинамічна якість](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Аеродинамічна якість](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

[Прості](../widgets/configure-screen.md#widget-panels) віджети *Аеродинамічна якість* надають цінну інформацію про аеродинамічну якість, що допомагає приймати обґрунтовані рішення при плануванні повітряних маршрутів. Віджет *Аеродинамічна якість* в OsmAnd допомагає оцінити ефективність вашого зниження або набору висоти під час навігації до певного місця (положення [маркера](../personal/markers.md) на карті). Він розраховує аеродинамічну якість як відношення відстані до різниці висот між вашим поточним положенням і запланованим пунктом призначення. Детальніше про це можна прочитати [тут](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Використання віджетів:**

- *Планування польотів у режимі ширяння.* Для пілотів, що ширяють, віджет *Аеродинамічна якість до цілі* стає незамінним інструментом при плануванні та виконанні польотів. Пілоти можуть оцінити, як далеко вони можуть пролетіти до своєї цілі за поточних умов і необхідної аеродинамічної якості.
- *Оптимізація наборів висоти та знижень.* Середня аеродинамічна якість дозволяє пілотам оптимізувати набори висоти та зниження на основі поточних умов. Пілоти можуть вибрати оптимальний час для набору висоти, щоб максимізувати час польоту, або для зниження, щоб досягти цільової точки.
- *Реагування на зміну умов.* Віджет надає безперервні оновлення аеродинамічної якості, дозволяючи пілотам миттєво реагувати на зміни атмосферних умов або маршрутів. Вони можуть коригувати свій план польоту для забезпечення безпеки та ефективності.
- *Максимальне використання горизонтальної відстані.* Знання аеродинамічної якості дозволяє пілотам максимально використовувати горизонтальну відстань для переміщення до цілі, що особливо важливо при плануванні тривалих польотів.
- *Зменшення ризиків*. Віджет *Аеродинамічна якість до цілі* допомагає пілотам уникати ситуацій, коли досягнення цілі стає неможливим через недостатню аеродинамічну якість. Це допомагає зменшити ризики та підвищити безпеку польотів.


**Позитивні та негативні значення:**

- **Позитивні значення** вказують на те, що ваш пункт призначення знаходиться на меншій висоті, ніж ваше поточне положення, що вимагає зниження.
- **Негативні значення** вказують на те, що ваш пункт призначення знаходиться на більшій висоті, що вимагає набору висоти. Наприклад, "-90:1" означає, що після подолання відстані 90 кілометрів вам потрібно набрати 1 кілометр висоти, щоб досягти пункту призначення.


**Округлення/Форматування:**

- Значення **≤ 0.1**:  
  - "0.05" відображається як "0".
- Значення **> 0.1 and < 100**:  
  - наприклад, "50.7643" відображається як "50.8:1".
- Значення **> 100:**  
  - "102.35" відображається як "102:1."


### Аеродинамічна якість до цілі {#glide-ratio-to-target}

- **Аеродинамічна якість до цілі** показує точну аеродинамічну якість, необхідну для досягнення цільової точки.
- **Висота цілі** показує висоту цільової точки. В якості цільової точки слід використовувати [Маркер на карті](../personal/markers.md).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → Аеродинамічна якість* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → Аеродинамічна якість* |
| При натисканні | Змінює *Аеродинамічна якість до цілі* або *Висота цілі*  |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Середня аеродинамічна якість {#average-glide-ratio}

- **Середня аеродинамічна якість** показує середню аеродинамічну якість за вказаний проміжок часу.
- **Середня вертикальна швидкість** вказує на швидкість, з якою об'єкт піднімається або опускається протягом певного часу. Для оцінки враховуються лише перша та остання точки часового інтервалу. Ви можете встановити часовий інтервал для цього віджета від 15 секунд до 60 хвилин. В якості цільової точки слід використовувати [Маркер на карті](../personal/markers.md).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → Аеродинамічна якість* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → Аеродинамічна якість* |
| При натисканні | Змінює *Середня аеродинамічна якість* або *Середня вертикальна швидкість*  |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Рівень заряду батареї {#battery-level}

![Віджет рівня заряду батареї](@site/static/img/widgets/battery_level_widget.png)  

Віджет **Рівень заряду батареї** відображає відсоток заряду батареї вашого пристрою прямо на екрані карти та оновлюється автоматично щонайменше раз на хвилину.

- **iOS 17 і новіші версії** — через **обмеження конфіденційності**, дані про рівень заряду батареї доступні лише з кроком 5% (наприклад, 35%, 60% або 85%). Це системне обмеження, встановлене Apple.

- **Пристрої Android** — віджет відображає точний відсоток заряду батареї, як повідомляє система, без округлення.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_battery"/>* |
| При натисканні | Без змін |
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
- **Координати: поточне місцезнаходження** - показує географічні координати поточного географічного розташування.

Віджети координат відображаються у верхній частині екрана. Іконки із зеленим фоном показують широту та довготу точки в центрі видимої частини карти, а іконки з синім фоном — координати вашого поточного місцезнаходження. Інформацію про підтримувані *Формати координат* можна знайти у статті *[Пошук за координатами](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| При натисканні | Копіює координати в буфер обміну. |
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) or <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## Інформація GPS   {#gps-info}

<InfoAndroidOnly />

![Віджет інформації GPS Android](@site/static/img/widgets/gps_info_widget.png)

Віджет інформації GPS (Глобальна система позиціонування) показує кількість супутників, які пристрій зараз виявляє та використовує. Ви можете використовувати його для перевірки стану GPS у разі поганого сигналу.  

Ви можете скинути поточний кеш GPS через:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_gps_info"/>* |  
| При натисканні | Відкриває меню стану GPS зі сторонніми інструментами для налаштування вбудованого пристрою GPS. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Положення сонця {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position.png) ![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_4_ios.png) ![Віджети заходу та сходу сонця](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

Віджети положення сонця показують час наступного сходу та заходу сонця для центру карти. При натисканні вони відображають час, що залишився до очікуваного заходу або сходу сонця. В обох випадках час базується на налаштованому часі вашого пристрою.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| При натисканні | Перемикання між часом, що залишився, та часом наступного сходу/заходу сонця. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Радіусна лінійка {#radius-ruler}

:::note  
Ви можете прочитати більш детальний опис тут: **[Радіусна лінійка та Лінійка](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Екран радіусної лінійки](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Радіусна лінійка"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Радіусна лінійка"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Радіусна лінійка"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

Віджет Радіусна лінійка показує відстань між вашим місцезнаходженням та центральною точкою Радіусної лінійки. Радіус першого кола дорівнює [масштабу карти](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| При натисканні | Змінює стан віджета між чорною шкалою, відтінками сірого та невидимим режимами. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Спідометр {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Спідометр](@site/static/img/widgets/speedometer_1_andr.png)   ![Спідометр](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Спідометр](@site/static/img/widgets/speedometer_1_ios.png)   ![Спідометр](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Віджет Спідометр** — це графічне відображення поточної швидкості транспортного засобу на основі *даних, отриманих з GPS*. Він дозволяє в реальному часі контролювати відповідність вашої швидкості дозволеному обмеженню. Дозволене обмеження швидкості надається [даними OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed) для певної ділянки дороги та налаштуванням OsmAnd [Допуск обмеження швидкості](../navigation/guidance/voice-navigation.md#speed-limit).  

- У *Налаштуваннях спідометра* ви можете вибрати розмір (**Висота**) віджета на екрані програми як *Малий*, *Середній* або *Великий*.
- Ви можете вказати, коли отримувати **Попередження про обмеження швидкості,** вибравши *Завжди* або *При перевищенні*.

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
| Формат | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Віджети плагінів {#plugin-widgets}

Ці віджети вмикаються та працюють у поєднанні з відповідними плагінами.


### Віджети запису поїздки   {#trip-recording-widgets}

:::note  
Ви можете прочитати більш детальний опис тут: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![віджет_запису_поїздки](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![віджет_запису_поїздки](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Віджети запису поїздки відносяться до [плагіна <Translate android="true" ids="record_plugin_name"/>](../plugins/trip-recording.md#widgets). Ви можете використовувати віджети для перегляду короткої інформації про запис треку на екрані. Наприклад, *Відстань*, *Тривалість*, *Підйом* та *Спуск*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_monitoring"/>* |
| При натисканні | Почати/Зупинити запис треку або Переглянути графік. |
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

![віджет_запису_поїздки](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Віджети відносяться до [плагіна Зовнішні датчики](../plugins/external-sensors.md#widgets). Ви можете використовувати їх для перегляду короткої інформації з ваших зовнішніх датчиків, таких як: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*лише Android*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** та **<Translate android="true" ids="external_device_characteristic_temperature"/>**. Ви також можете вибрати відображення **рівня заряду батареї** підключених датчиків BLE безпосередньо у віджеті.  

- Щоб додати віджет — [увімкніть](../plugins/index.md#enable--disable) плагін Зовнішні датчики OsmAnd.

- Щоб додати датчики, виберіть один з варіантів:
  - Перейдіть до *Меню → Плагіни → Зовнішні датчики → Налаштування → Підключити новий датчик*.
  - Перейдіть до *Меню → Налаштувати екран → Обрати панель → Додати віджет → Зовнішні датчики → Обрати датчик → Налаштування → Підключити новий датчик*.

- Додавайте віджети, навіть якщо зовнішній датчик не підключений.

- **Усі додані віджети видимі**, навіть якщо зовнішній датчик не підключений.

- Використовуйте [плагін Запис поїздки](../plugins/trip-recording.md#recording-settings) для запису даних з датчиків.

- Прочитайте про те, як вибрати, який датчик (одного типу) показувати у віджеті, [тут](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| При натисканні | Без змін (*Android*) / Перемикає режим між даними датчика та рівнем заряду батареї (*iOS*). |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджети показників транспортного засобу {#vehicle-metrics-widgets}


:::note
Щоб додати віджети показників транспортного засобу на екран карти, увімкніть плагін OsmAnd [Показники транспортного засобу](../plugins/vehicle-metrics.md).
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Віджети показників транспортного засобу Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджети показників транспортного засобу Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


Віджети належать до [плагіна Показники транспортного засобу](../plugins/vehicle-metrics.md#widgets). Ви можете використовувати їх для перегляду інформації з підключеного сканера OBD-II, наприклад (*13 показників*): **Температура на впуску**,&nbsp; **Температура навколишнього середовища**,&nbsp; **Температура охолоджувальної рідини**,&nbsp; **Температура мастила**,&nbsp; **Оберти двигуна** (*безкоштовно*),&nbsp; **Час роботи двигуна**,&nbsp; **Розрахункове навантаження на двигун**,&nbsp; **Тиск пального**,&nbsp; **Споживання пального**,&nbsp; **Залишок пального**,&nbsp; **Рівень заряду акумулятора**,&nbsp; **Швидкість транспортного засобу** (*безкоштовно*), та **Положення дросельної заслінки**.  

- Щоб додати віджети показників транспортного засобу на екран карти, [увімкніть](../plugins/index.md#enable--disable) **плагін Показники транспортного засобу**.
- Ви можете додавати віджети, навіть якщо сканер OBD-II не підключений.
- Усі додані віджети видимі незалежно від того, підключений сканер OBD-II чи ні.
- Щоб відредагувати віджет, натисніть на віджет, доданий на панель, потім натисніть *Налаштування*, або безпосередньо натисніть *іконку Налаштування* в полі віджета.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет →  <Translate ios="true" ids="obd_plugin_name"/>* |
| При натисканні | Без змін |
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

Віджети погоди відображають поточну інформацію про погоду для центральної точки на карті. Вони автоматично вмикаються на екрані при перегляді з плагіном (*Меню → Погода*), і ви можете вибрати, які з них розмістити на головному екрані для щоденного використання (*Меню → Налаштувати екран*). Детальніше про це можна прочитати у статті [Плагін Погода](../plugins/weather.md).

- **Температура**. <Translate android="true" ids="temperature_widget_desc"/>
- **Атмосферний тиск**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Вітер**. <Translate android="true" ids="wind_widget_desc"/>
- **Хмарність**. <Translate android="true" ids="clouds_widget_desc"/>
- **Опади**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="shared_string_weather"/>* |  
| При натисканні | Показує у спливаючому діалоговому вікні дату та час, коли інформація про погоду є актуальною. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *Меню → Плагіни → Погода → Налаштування* або *Меню → Налаштування → Профіль додатку → Погода* |  


### Віджет паркування {#parking-widget}

:::note
Щоб додати віджети паркування на екран карти, увімкніть плагін OsmAnd [Місце паркування](../plugins/parking.md).
:::  

![Віджет паркування](@site/static/img/plugins/parking/parking_widget.png)  

Віджет плагіна Паркування показує відстань від центру екрана до місця паркування. Щоб встановити місце паркування на карті, збільште масштаб до необхідного рівня, потім довго натисніть на місце на карті, щоб відкрити контекстне меню. Дотримуйтесь [цих налаштувань](../plugins/parking.md#set-a-spot).  

**Примітка:** Віджет паркування з'явиться лише в тому випадку, якщо на карті було додано місце паркування. Без збереженого місця паркування віджет не буде видимим.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="parking_place"/>* |
| При натисканні | Переміщує вигляд карти до місця паркування. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Віджет Mapillary {#mapillary-widget}

:::note  
Щоб додати віджет Mapillary на екран карти, увімкніть плагін OsmAnd [Mapillary](../plugins/mapillary.md).  
:::  

![Віджет Mapillary](@site/static/img/widgets/mapillary_widget.png)

Це віджет плагіна Mapillary, який надає швидкий доступ до програми Mapillary, що дозволяє додавати [*зображення на рівні вулиць*](../plugins/mapillary.md#enable-layer). Віджет додається на карту автоматично, коли плагін увімкнено.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="mapillary"/>* |
| При натисканні | Відкриває програму [Mapillary](https://www.mapillary.com/). |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджет аудіо/відео нотаток {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
Щоб додати віджети аудіо/відео нотаток на екран карти, увімкніть плагін OsmAnd [Аудіо/відео нотатки](../plugins/audio-video-notes.md).
:::

![Віджет аудіо-відео нотаток](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

Це віджети плагіна Аудіо/відео нотатки, які надають швидкий доступ до початку/зупинки запису аудіо, відео або фото нотаток.  

Ви можете налаштувати, яка дія буде обрана за замовчуванням:

- *За запитом*. Стан за замовчуванням. Кожного разу відображається діалогове вікно вибору дії.
- *Записати аудіо* - записує аудіо нотатку.
- *Записати відео* - дозволяє записати відео.
- *Зробити фото* - дозволяє зробити фото.  

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_av_notes"/>*  |
| При натисканні | Почати / зупинити запис нотатки  |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Віджет трекера {#tracker-widget}

<InfoAndroidOnly />

:::note
Щоб додати віджет трекера на екран карти, увімкніть плагін OsmAnd [Трекер](../plugins/osmand-tracker.md).
:::  

Для роботи плагіна та віджета необхідно встановити [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) з Google Play або інших джерел.  

Цей віджет плагіна OsmAnd Tracker використовується для швидкого доступу до програми OsmAnd Tracker та обміну інформацією про ваше місцезнаходження з іншими користувачами. Програма надсилає повідомлення *Live Location* до вибраних чатів протягом певного часу, відображає список контактів та груп, а також перевіряє чати на наявність повідомлень з вашим місцезнаходженням, які потім відображаються на карті в OsmAnd.  

![Віджет трекера](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="tracker_item"/>* |
| При натисканні | Відкриває програму OsmAnd Online GPS Tracker. |


### Віджети розробника {#developer-widgets}

:::note
Щоб додати віджети розробника на екран карти, увімкніть плагін OsmAnd [Розробка OsmAnd](../plugins/development.md).
:::

**Віджети розробника** надають інформацію про [швидкість рендерингу карти](../plugins/development.md#map-rendering-fps-widget) та параметри положення віртуальної камери, включаючи [рівень масштабування](../plugins/development.md#zoom-level), [відстань](../plugins/development.md#distance-to-target) до центру карти, [висоту камери](../plugins/development.md#camera-elevation) та [кут нахилу](../plugins/development.md#camera-tilt).  

#### FPS рендерингу карти {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджети FPS Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет FPS iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

[Віджет FPS рендерингу карти](../plugins/development.md#map-rendering-fps-widget) відображає швидкість рендерингу карти та її елементів, виміряну в кадрах за секунду (FPS). Вище значення FPS вказує на швидший рендеринг та більш плавну візуальну продуктивність.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| При натисканні | Без змін |
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

**Віджети камери** дозволяють контролювати вирівнювання між картою OsmAnd та поверхнею землі.

- [Нахил камери](../plugins/development.md#camera-tilt). Відображає кут нахилу камери в режимі перспективи. Значення за замовчуванням — 90° (без нахилу).
- [Висота камери](../plugins/development.md#camera-elevation). Вказує висоту камери над рівнем поверхні.
- [Рівень масштабування](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Відстань від камери до цілі](../plugins/development.md#distance-to-target). Вимірює відстань між камерою та цільовим місцезнаходженням на карті.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Обрати панель → Додати віджет → <Translate ios="true" ids="developer_widgets"/>* |
| При натисканні | Перемикання між режимами (*Рівень масштабування*)  / Без змін (*Інші*) |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


#### Доступна оперативна пам'ять {#available-ram}

<InfoAndroidOnly />

![Віджети середньої швидкості](@site/static/img/widgets/available_RAM_2_andr.png)

Віджет **Доступна оперативна пам'ять** — це інструмент для моніторингу використання пам'яті вашого пристрою у зв'язку з OsmAnd. Він надає детальні дані для оптимізації продуктивності програми.

- **Доступна оперативна пам'ять для програми.** Відображає обсяг оперативної пам'яті, доступний для використання OsmAnd без спричинення проблем з продуктивністю.

- **Використання оперативної пам'яті програмою** — показує поточне споживання оперативної пам'яті програмою OsmAnd.

- **Загальна оперативна пам'ять програми** — вказує на загальний обсяг пам'яті, виділений для OsmAnd, включаючи як використану, так і доступну пам'ять.

> **ПРИМІТКА**. *Загальний обсяг доступної оперативної пам'яті* може змінюватися залежно від фонових процесів та інших програм, що працюють на вашому пристрої. Ці значення є динамічними та пропонують спосіб відстежувати та керувати використанням пам'яті для стабільної та ефективної роботи OsmAnd.*

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Обрати панель → Додати віджет → <Translate android="true" ids="developer_widgets"/> → *Доступна оперативна пам'ять* |
| При натисканні | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Пов'язані статті {#related-articles}

- [Налаштувати екран](./configure-screen.md)
- [Кнопки на карті](./map-buttons.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіусна лінійка та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)