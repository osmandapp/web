---
source-hash: 08f85c80ce1f7f45e7a1319d717948bc026e5f62b9066e7b74515e1fe9d5e9fc
sidebar_position: 4
title:  Навігаційні віджети
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Навігаційні віджети вмикаються під час навігації для відображення такої інформації, як відстань, час прибуття або час, що залишився, наступні повороти, азимут, назва поточної вулиці, інформація про смуги руху, максимальна швидкість, попередження про наближення, POI та проміжні точки.

![Навігаційні віджети всі](@site/static/img/widgets/navigational_widgets_all.png)


## Активна та пасивна навігація {#active-and-passive-navigation}

Навігаційні віджети в OsmAnd розроблені для покращення як **активного**, так і **пасивного** режимів навігації. Ці віджети надають цінну інформацію, таку як напрямки маршруту, деталі дороги та обмеження швидкості, залежно від обраного **навігаційного профілю**.

#### Активна навігація {#active-navigation}

- **Вимоги:**
  - Встановити **пункт призначення**.
  - Розрахувати **маршрут** за допомогою функції *Напрямки*.
  - **Розпочати** навігацію (голосове супроводження є необов'язковим).
  - Доступно лише під час руху за маршрутом.

- **Підтримувані віджети:**
  - Доступні всі **навігаційні віджети**.

- **Основні переваги:**
  - Надає **покрокові інструкції**, **підказки щодо смуг руху** та **розрахунковий час прибуття**.
  - Забезпечує точні та динамічні оновлення під час поїздки.

#### Пасивна навігація {#passive-navigation}

- **Як це працює:**
  - Пункт призначення не потрібен.
  - Працює автоматично, коли ви обираєте **навігаційний профіль** (наприклад, *Автомобіль*, *Велосипед*).

- **Функціональність:**
  - Намагається визначити дорогу, якою ви рухаєтеся, використовуючи дані GPS.
  - Відображає **основну інформацію про дорогу**, таку як [назва вулиці](#street-name), [інформація про смуги руху](#lanes), [максимальна швидкість](#speed-limit).

- **Обмеження:**
  - Деякі розширені функції можуть працювати некоректно без встановленого пункту призначення.
  - Надана інформація не завжди може бути **точною**, особливо на складних дорожніх мережах.

> **ПРИМІТКА.** *Майте на увазі, що профіль **Перегляд карти** не підтримує навігаційні віджети в жодному режимі. Перейдіть до відповідного **навігаційного профілю**, щоб увімкнути ці функції.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Віджет висоти {#elevation-widget}

<InfoAndroidOnly/>

:::note

<ProFeature/> Цей віджет можна використовувати лише з функцією Pro для <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">передплатників OsmAnd Pro</a>.

:::

Віджет висоти показує графік з висотою та нахилом вашого навігаційного маршруту та ваше поточне місцезнаходження на цьому графіку з поточною висотою та нахилом. Графік будується на двох осях. Вісь X — це відстань вашого маршруту. Вісь Y — це висота, значення залежить від рельєфу, а нахил відображається у відсотках.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Віджет висоти](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Взаємодія з графіком {#interactions-with-the-graph}

- *Збільшення/зменшення масштабу*. За замовчуванням графік показує маршрут від поточного місцезнаходження до 10 км вперед. Ви можете використовувати [рух двома пальцями](../map/interact-with-map#gestures) для збільшення та зменшення масштабу, щоб отримати більш детальний вигляд змін висоти на вашому маршруті. Ви також можете переміщати графік праворуч, вперед по маршруту та назад до поточного місцезнаходження.
- *Розмістити точку на графіку*. Якщо ви хочете побачити значення висоти та градуса в певній точці попереду на вашому маршруті, ви можете торкнутися будь-де на графіку, і з'явиться покажчик зі значеннями.


#### Що всередині {#whats-in}

Коли ви обираєте маршрут і натискаєте кнопку **Почати**, відкривається карта з вашим поточним місцезнаходженням, маршрутом та віджетом внизу екрана. Віджет має графік та інформацію про *Підйом*, *Спуск*, *Ухил*, відстань, висоту та кут нахилу. Ви можете вибрати *оптимальний масштаб* і побачити всі можливі перешкоди на вашому маршруті.

- Усі значення вказуються або для всього маршруту, або лише для вибраного інтервалу шляхом масштабування графіка.
- Прочитайте про [ліцензію на дані DEM](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection), що використовуються OsmAnd для визначення висоти.

|  |
|:------------|
| ***Шпилька місцезнаходження*** |
| Ваше ***Поточне місцезнаходження*** на графіку включає піктограму місцезнаходження, висоту та значення відсотка нахилу. Права сторона віджета містить найвищу висоту та градієнт, середнє значення для них та найнижче значення на вибраній ділянці маршруту, видимій на графіку. |
| ![точка](@site/static/img/widgets/sch_1-1.png)|
| ***Додаткова інформація*** |
| Права сторона віджета містить дані про найвищу висоту та нахил, середнє значення для обох, а також найнижчу висоту та нахил на вибраній ділянці маршруту, видимій на графіку. |
|  ![дані](@site/static/img/widgets/sch_1-2.png)|
|Значення ***Підйом*** та ***Спуск*** є сумами відстаней від вашої точки місцезнаходження до кінця видимого графіка. Якщо на графіку немає точки місцезнаходження, то це сума всього видимого графіка на екрані (це може статися, коли ви змінюєте масштаб, і місцезнаходження виходить за межі графіка).|
| **Підйом** – показує суму всіх відстаней зі зростанням висоти від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані. |
| ![схема підйому](@site/static/img/widgets/sch_uphill_1.png) ![схема підйому](@site/static/img/widgets/sch_uphill_2.png)|
| **Спуск** – показує суму всіх відстаней зі зменшенням висоти від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані.|
| ![схема спуску](@site/static/img/widgets/sch_downhill_1.png) ![схема спуску](@site/static/img/widgets/sch_downhill_2.png)|
|***Ухил*** — це відношення шляху до горизонталі, де нуль вказує на горизонтальність, а число градусів вказує на вищий або крутіший ступінь нахилу.|
| **Ухил** – показує максимальний ухил дороги у відсотках від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані. |
|![схема ухилу](@site/static/img/widgets/sch_grade_1.png) ![схема ухилу](@site/static/img/widgets/sch_grade_2.png)|


## Віджет азимута {#bearing-widget}

Азимут — це напрямок до цілі за межами вашого транспортного засобу, наприклад, до пункту призначення або точки відправлення. Азимут може бути *відносним* (відповідно до вашого курсу) або *магнітним* (відповідно до компаса). Наприклад, магнітний азимут 180° — це напрямок на південь, а відносний азимут 180° — це прямо за вами. Кардинальні точки — це чотири основні напрямки компаса. Це Північ (*N* - 0° або 360°), Схід (*E* - 90°), Південь (*S* - 180°) та Захід (*W* - 270°).

![Віджет запису поїздки](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Віджет запису поїздки](@site/static/img/widgets/bearing_widget.png) ![Віджет запису поїздки](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет запису поїздки](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Виберіть панель → Додати віджет →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | **Android:** Ви можете змінити формат відображення даних для кутових одиниць: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Ви можете змінити формат відображення даних для кутових одиниць: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |


#### Як це працює {#how-it-works}

Для відображення азимута необхідно вибрати **цільову точку**. Якщо для навігації вибрано **пункт призначення** (або **першу проміжну точку**, якщо така є), вона буде використовуватися як цільова точка. В іншому випадку буде використовуватися **найвищий вибраний маркер**.

- [Відносний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) — це кут між напрямком вашого руху вперед і цільовою точкою. **Напрямок руху вперед** — це або **напрямок вашого руху**, отриманий від датчиків GPS, або якщо ви стоїте **там, куди ви направили свій пристрій** (тобто орієнтація вашого пристрою відповідно до його магнітного компаса). Приклад: Об'єкт з відносним азимутом 0° знаходиться прямо перед вами, а об'єкт з відносним азимутом 180° знаходиться прямо за вами. **Відносний азимут** — це кут між вашим напрямком вперед і цільовою точкою.

- [Магнітний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) — це кут за годинниковою стрілкою (горизонтальний) між магнітною північчю та цільовою точкою, що спостерігається з вашого місцезнаходження. Вам потрібно слідувати цьому значенню магнітного компаса, щоб досягти своєї цілі. Приклад: Якщо **магнітний азимут** показано як 0° M, вам потрібно рухатися строго на магнітну північ, щоб досягти цільової точки.

- [Істинний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) виражається як горизонтальний кут між географічним меридіаном і лінією на Землі. Зокрема, **істинний азимут точки** — це кут, виміряний у градусах за годинниковою стрілкою від лінії Істинної Півночі. Програмне забезпечення OsmAnd покаже вам істинний азимут та курс у нашому зручному інтерфейсі, що полегшить вам прийняття правильного рішення на ранній стадії.

### Навігація по локсодромі {#navigation-along-the-rhumb-line}

- **Відносний азимут**. Якщо ви дотримуєтеся відносного азимута 0 градусів і рухаєтеся вперед, ви прибудете до пункту призначення, але не найкоротшим шляхом ([Локсодрома](https://en.wikipedia.org/wiki/Rhumb_line)).
- **Магнітний азимут**. Якщо ви вирівняєте компас на своєму човні/транспортному засобі зі значенням віджета і рухатиметеся вперед, ви прибудете до пункту призначення, але не найкоротшим шляхом ([Локсодрома](https://en.wikipedia.org/wiki/Rhumb_line)).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Навігаційні точки {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Група віджетів *Навігаційна точка* показує відстань, що залишилася до пункту призначення, проміжної точки, час прибуття до проміжної точки або час у дорозі для розрахованого маршруту, а також розрахунковий час прибуття.

### Інформація про маршрут {#route-information}

<InfoAndroidOnly />

![Віджет пункту призначення](@site/static/img/widgets/route_information_widget.png)

Віджет *Інформація про маршрут* надає дані в реальному часі про поточний навігаційний маршрут та швидкий спосіб [керувати активним маршрутом](../navigation/setup/route-navigation.md#start--stop-navigation). Він допомагає відстежувати ключові деталі маршруту та дозволяє зупиняти або відновлювати поточну навігаційну сесію з мінімальною взаємодією.

**Відображена інформація:**

- **Розрахунковий час прибуття (ETA)**. Показує очікуваний час прибуття до кінцевого пункту призначення.
- **Час у дорозі, що залишився**. Відображає розрахунковий час, що залишився до досягнення пункту призначення.
- **Відстань до пункту призначення**. Вказує загальну відстань, що залишилася до кінцевого пункту призначення, та відстані до проміжних точок.

**Меню налаштувань**:

- Виберіть **Вигляд за замовчуванням**, щоб пріоритезувати одне з наступних значень: *Розрахунковий час прибуття*, *Час у дорозі*, *Відстань*.
- У **Пріоритет відображення** виберіть між *Пункт призначення першим (за замовчуванням)* або *Проміжний першим*, щоб пріоритезувати найбільш релевантну інформацію про маршрут.

> ПРИМІТКА: Віджет видно лише під час навігації.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет →<Translate android="true" ids="map_widget_distance_to_destination"/>* |
| Натисканням | Натисніть кнопку зі стрілкою, щоб відкрити панель [Почати/Зупинити навігацію](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Відстань до пункту призначення {#distance-to-destination}

![Віджет пункту призначення](@site/static/img/widgets/destination_widget.png)

Віджет відображає відстань, що залишилася до останнього пункту призначення при русі за розрахованим маршрутом.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| Натисканням | Переміщує карту до пункту призначення. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |

### Відстань до проміжної точки {#distance-to-intermediate}

![Віджет проміжного пункту призначення](@site/static/img/widgets/intermediate_destination_widget.png)

Віджет показує відстань до першої проміжної точки вздовж розрахованого маршруту. Після проходження проміжних точок простір буде оновлено до наступної проміжної точки. Якщо проміжних точок немає, віджет не відображається.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| Натисканням | **Одна проміжна точка** - перемістити карту до проміжної точки. <br /> **Дві або більше проміжних точок** - відкриває меню списку пунктів призначення. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |

### Час до проміжної точки {#time-to-intermediate}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Віджет часу прибуття Час у дорозі](@site/static/img/widgets/arrival_time_widget_android.png) ![Віджет часу прибуття Час у дорозі](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет часу прибуття Час у дорозі](@site/static/img/widgets/arrival_time_widget_ios.png) ![Віджет часу прибуття Час у дорозі](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>

Віджет показує *Час прибуття* або *Час у дорозі* до першої проміжної точки. Під час навігації час постійно оновлюється, і як тільки проміжна точка пройдена, час буде оновлено до наступної проміжної точки. Наприклад, якщо ви зупините навігацію, *Час у дорозі* залишиться незмінним, а *Час прибуття* буде дорівнювати *Часу у дорозі* плюс *Поточний час*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| Натисканням | Змінюється між *Часом прибуття* та *Часом у дорозі* і навпаки. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Час до пункту призначення {#time-to-destination}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Віджет проміжного часу прибуття та часу](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет проміжного часу прибуття та часу](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Віджет відображає *Час прибуття* або *Час у дорозі* до останнього пункту призначення. Час постійно оновлюється під час навігації та дорівнює часу маршруту від вашого поточного місцезнаходження.

| | |
|:------------|:------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| Натисканням | Змінюється між *Часом прибуття* та *Часом у дорозі* і навпаки. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Обмеження швидкості {#speed-limit}

![Віджет обмеження швидкості](@site/static/img/widgets/speed_limit_widget_2.png)

Віджет *Обмеження швидкості* відображає поточне обмеження швидкості на основі даних карти для вашого маршруту.

- Дані беруться з [проєкту OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Віджет працює в пасивному та активному режимах навігації.
- Якщо дані про обмеження швидкості недоступні для певної дороги чи ділянки, *віджет не з'явиться*.

> ПРИМІТКА: Переконайтеся, що ваші [карти оновлені](../personal/maps-resources.md#updates) і що ви завантажили всі необхідні регіональні дані для доступу до останньої інформації про обмеження швидкості.

| |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_max_speed"/>* |
| Натисканням | Без змін |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Маневри маршруту {#route-maneuvers}

![Віджет наступних поворотів](@site/static/img/widgets/next_turns_widget.png)

Цей набір навігаційних віджетів активується під час навігації та відображає інформацію про відстань до наступного маневру.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *Меню → Налаштувати екран → Ліва / Права панель → Додати віджет → Маневри маршруту → Наступний поворот, Наступний поворот (малий), Другий наступний поворот*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ліва / Права панель → Додати віджет → Маневри маршруту → Наступний поворот, Наступний поворот (малий), Другий наступний поворот* |
| Натисканням | Якщо [голосові підказки](../navigation/guidance/voice-navigation.md) увімкнено, вимовляється наступний маневр та відстань до нього. |
| Довге натискання | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Наступний поворот {#next-turn}

![Віджет наступних поворотів](@site/static/img/widgets/next_turns_widgets_andr.png)

Віджети *Маневри маршруту* містять інформацію про:

- **Наступний поворот** - наступний поворот з великою стрілкою, що представляє маневр, та з даними про відстань до нього.
- **Наступний поворот (малий)** - наступний поворот з маленькою стрілкою, що представляє маневр, та з даними про відстань поруч зі стрілкою.
- **Другий наступний поворот** - наступний поворот після першого повороту, який активується, якщо він знаходиться в межах відстані наближення.

| | |
|:------------|:------------|
| Увімкнути      | **Android:** *Меню → Налаштувати екран → Ліва / Права панель → Додати віджет → Наступний поворот, Наступний поворот (малий), Другий наступний поворот*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Ліва / Права панель → Додати віджет → Наступний поворот, Наступний поворот (малий), Другий наступний поворот* |
| Натисканням  | Якщо [голосові підказки](../navigation/guidance/voice-navigation.md) увімкнено, вимовляється наступний маневр та відстань до нього. |
| Довге натискання    | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Кольорові підказки для наступного повороту {#color-prompts-for-next-turn}

У цій таблиці показано приблизний час до активації підказок та відповідне кольорове позначення стрілок для виконання маневру. Для отримання додаткової інформації зверніться до [технічної документації](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) або до статті [Голосові підказки](../navigation/guidance/voice-navigation.md).

| Колір     | ~ Час спрацьовування | Відстань   | Тип підказки     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Зелений  | 5 секунд      | Близько   | Поверніть зараз        |
| 🟡 Жовтий | 20 секунд     | Наближення| Поверніть через `x` м   |
| ⚪ Сірий   | > 100 секунд  | Далеко    | Готуйтеся до повороту |


## Смуги руху {#lanes}

![Віджети смуг руху](@site/static/img/widgets/lanes_widget.png)

Віджет **Смуги руху** підсвічує поточну смугу руху, коли навігація активна, та відображає схему смуг руху для фактичної дороги, коли навігація пасивна. Дані беруться з [проєкту OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Додати віджет → <Translate android="true" ids="show_lanes"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → <Translate android="true" ids="show_lanes"/>* |
| Натисканням | Без змін |

### Кольорові підказки для смуг руху {#color-prompts-for-lanes}

Відображає віджет за налаштуваннями часу наближення. Колір смуги пов'язаний з [голосовими підказками](../navigation/guidance/voice-navigation.md) та часом, що залишився для виконання маневру.

| Колір     | ~ Час спрацьовування | Відстань    | Тип підказки |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Зелений  | 5 секунд      | Близько    | [Поверніть зараз](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Жовтий | 20 секунд     | Наближення | [Поверніть через X м](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Навігація за маршрутом {#route-guidance}

<InfoAndroidOnly />

![віджет навігації за маршрутом](@site/static/img/widgets/route_guidence_widgets_andr.png)

Надає навігаційні підказки в реальному часі, включаючи відстань до наступного повороту, назву дороги, назву поточної вулиці та інформацію про смуги руху. Віджети активні під час навігації.

Віджети *Навігація за маршрутом* містять інформацію про:

- [Смуги руху](#lanes) - показує поточне розташування смуг руху та підсвічує ті, по яких ви повинні рухатися.
- **Наступний поворот** - наступний поворот з великою стрілкою, що представляє маневр, та з даними про відстань до нього.
- **Другий наступний поворот** - наступний поворот після першого повороту, який активується, якщо він знаходиться в межах відстані наближення.

| | |
|:------------|:------------|
| Увімкнути      | **Android:** *Меню → Налаштувати екран → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → Смуга руху, Наступний поворот, Другий наступний поворот*  |
| Натисканням  | **Наступний поворот**: Якщо [голосові підказки](../navigation/guidance/voice-navigation.md) увімкнено, вимовляється наступний маневр та відстань до нього. <br/> **Смуга руху**: Без змін. |
| Довге натискання    | **Наступний поворот**: Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) <br/> **Смуга руху**: Без змін. |


## Віджет попереджень {#alert-widget}

![Віджети інформації про попередження](@site/static/img/widgets/alert_information_widget.png)

**Віджет попереджень** об'єднує кілька типів попереджень, які відображаються в нижньому лівому куті під час навігації.

- Ви можете вмикати та вимикати такі попередження, як *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* та *<Translate android="true" ids="show_tunnels"/>*. Інші попередження активні за замовчуванням, якщо віджет увімкнено.

- Для типу попередження *Обмеження швидкості* ви можете налаштувати значення <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) у налаштуваннях голосових підказок, щоб краще відповідати швидкості транспортного засобу та швидкості GPS.

- Більшість попереджень відображаються на екрані та оголошуються голосовою підказкою протягом 15 секунд, а також час спрацьовування для проходження проміжної точки, улюбленої точки або POI. Докладніше читайте [тут](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Увімкнути | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Типи попереджень {#alert-types}

Типи попереджень мають різний візуальний дизайн, який залежить від **<Translate android="true" ids="driving_region"/>** і може бути налаштований через *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd не прагне відображати дорожні знаки на 100% ідентично, але вказує на деякі схожості.

| | | |
|:------------|:------------|:------------|
| Назва | Опис | Піктограма |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Заспокоєння руху](https://en.wikipedia.org/wiki/Traffic_calming) використовує фізичний дизайн та інші заходи для підвищення безпеки для автомобілістів, пішоходів та велосипедистів. | ![Віджети заспокоєння руху](@site/static/img/widgets/warnings_traffic_calming.png)  ![Віджети заспокоєння руху в США](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Пішохідний перехід](https://en.wikipedia.org/wiki/Pedestrian_crossing) (переважно британська англійська) або перехрестя — це місце, призначене для переходу пішоходів через дорогу, вулицю або проспект. OsmAnd показує попередження про нерегульований пішохідний перехід.  | ![Віджети заспокоєння руху](@site/static/img/widgets/warnings_pedestrian.png)  ![Віджети заспокоєння руху в США](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | У більшості країн [Обмеження швидкості на дорогах](https://en.wikipedia.org/wiki/Speed_limit) встановлюють законну максимальну, середню або мінімальну швидкість, з якою дорожні транспортні засоби можуть рухатися на певній ділянці дороги. В OsmAnd попередження відображається, коли ви перевищуєте швидкість. Ви можете встановити параметри перевищення швидкості (0, 5, 10.. км/год). ![Віджети попередження про перевищення швидкості](@site/static/img/widgets/ex_warning_speed.png)  | ![Віджети обмеження швидкості](@site/static/img/widgets/warnings_limit.png) ![Віджети обмеження швидкості в Канаді](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Віджети обмеження швидкості в США](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Тунель — це підземний прохід, що проходить під горою, річкою або перевантаженою міською територією. В OsmAnd попередження *Тунелі* містить інформацію про довжину тунелю. Якщо ви перебуваєте в тунелі, воно показує відстань до кінця тунелю.   ![Віджети попередження про тунель](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Віджети попередження про тунель](@site/static/img/widgets/warnings_tunnel.png)  ![Віджети попередження про тунель в США](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Камери контролю дорожнього руху](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) та [камери контролю швидкості](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) фіксують порушення правил дорожнього руху, включаючи перевищення швидкості, проїзд на червоне світло та інші види незаконної поведінки. <br />**ПРИМІТКА:** Попередження про камери контролю швидкості заборонені або незаконні в деяких країнах. Щоб повністю [видалити камери контролю швидкості](../personal/global-settings.md#legal) з OsmAnd, перейдіть до головного *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Віджети заспокоєння руху](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Знак "Стоп"](https://en.wikipedia.org/wiki/Stop_sign) — це дорожній знак, призначений для повідомлення водіїв про те, що вони повинні повністю зупинитися та переконатися, що перехрестя безпечно вільне від транспортних засобів та пішоходів, перш ніж продовжити рух повз знак.  | ![Віджети знаку "Стоп"](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Це попередження означає, що попереду [залізничний переїзд](https://en.wikipedia.org/wiki/Crossbuck). | ![Віджети попередження про залізничний переїзд](@site/static/img/widgets/warnings_railways.png) ![Віджети попередження про залізничний переїзд в Канаді](@site/static/img/widgets/warnings_railways_ca.png)  ![Віджети попередження про залізничний переїзд в США](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Це попередження вказує на те, що попереду прикордонний контроль.| ![Віджети прикордонного контролю](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Символи небезпеки або попереджувальні символи](https://en.wikipedia.org/wiki/Hazard_symbol) — це розпізнавані символи, призначені для попередження про небезпечні матеріали, місця або об'єкти, включаючи електричний струм, отрути та радіоактивність. | ![Віджети попередження про небезпеку](@site/static/img/widgets/warnings_hazard.png)  ![Віджети попередження про небезпеку в США](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Це попередження вказує на те, що попереду пункт оплати проїзду по платній дорозі.   ![Віджети пункту оплати проїзду](@site/static/img/widgets/ex_toll_booth.png) | ![Віджети обмеження швидкості](@site/static/img/widgets/warnings_limit.png) |


## Назва вулиці {#street-name}

Віджет Назва вулиці показує **назву поточної вулиці** з прямою стрілкою або **назву наступної вулиці** з маневром, який потрібно виконати. Назва вулиці зазвичай складається з щита шосе, [назви](https://wiki.openstreetmap.org/wiki/Key:name), [ref](https://wiki.openstreetmap.org/wiki/Key:ref), [міжнародного ref](https://wiki.openstreetmap.org/wiki/Key:int_ref) та [пункту призначення](https://wiki.openstreetmap.org/wiki/Key:destination). Перемикання між назвою поточної вулиці та назвою наступної вулиці відбувається, коли ви наближаєтеся до місця, де потрібно виконати маневр (~20 секунд), подібно до голосової підказки [Поверніть через X м](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Під час руху по вулиці або шосе віджет показує назву або позначення поточної вулиці (дороги) синьою стрілкою.

  ![Віджет POI назви вулиці_2](@site/static/img/widgets/street_name_widget_2.png)

- Коли ви змінюєте напрямок, віджет показує схему маневру та назву (позначення) вулиці (дороги), на яку потрібно повернути.

  ![Віджет POI назви вулиці](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → <Translate android="true" ids="map_widget_top_text"/>* |
| Натисканням | Без змін |


## Наближення до POI / Улюблених {#approach-pois--favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Наближення до POI/Улюблених Android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Наближення до POI/Улюблених iOS](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Віджет **Наближення до POI/Улюблених/Проміжних точок** об'єднано з [Назвою вулиці](#street-name) та відображає наближення та проходження точок інтересу, проміжних точок пройденого треку та улюблених точок вздовж маршруту.

Він відображає **назву**, **піктограму точки** та 2 **відстані**:

- **Відстань за маршрутом** (зверху) відображає, яку відстань потрібно подолати за маршрутом.
- **Відстань відхилення** — це пряма відстань від найближчої точки маршруту до самої точки.

**iOS** - Крім відстані до найближчої проміжної точки, також відображається сторона (ліва чи права) маршруту, на якій розташована проміжна точка.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Почати навігацію → кнопка олівця* |
| Натисканням | Без змін |


## Пов'язані статті {#related-articles}

- [Налаштувати екран](./configure-screen.md)
- [Кнопки карти](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)

> *Цю статтю востаннє оновлено у квітні 2025 року*