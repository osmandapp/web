---
source-hash: e574b157e1460483991973a8f0aa82032a697bf0c8250d5dbada1a787ff155e0
sidebar_position: 4
title:  Віджети навігації
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

Віджети навігації вмикаються під час навігації для відображення такої інформації, як відстань, час прибуття або час, що залишився, наступні повороти, азимут, назва поточної вулиці, інформація про смугу руху, максимальна швидкість, сповіщення про наближення, POI та проміжні точки.

![Усі віджети навігації](@site/static/img/widgets/navigational_widgets_all.png)


## Активна та пасивна навігація {#active-and-passive-navigation}

Віджети навігації в OsmAnd призначені для покращення як **активного**, так і **пасивного** режимів навігації. Ці віджети надають цінну інформацію, таку як напрямки маршруту, деталі дороги та обмеження швидкості, залежно від обраного **профілю навігації**.

#### Активна навігація {#active-navigation}

- **Вимоги:**
  - Встановіть **пункт призначення**.
  - Розрахуйте **маршрут** за допомогою функції *Маршрут*.
  - **Почніть** навігацію (голосові підказки не є обов'язковими).
  - Доступно лише під час руху по маршруту.

- **Підтримувані віджети:**
  - Доступні всі **віджети навігації**.

- **Основні переваги:**
  - Надає **покрокові інструкції**, **вказівки по смугах** та **орієнтовний час прибуття**.
  - Забезпечує точні та динамічні оновлення під час поїздки.

#### Пасивна навігація {#passive-navigation}

- **Як це працює:**
  - Пункт призначення не потрібен.
  - Працює автоматично, коли ви обираєте **профіль навігації** (наприклад, *Керування*, *Велосипед*).

- **Функціональність:**
  - Намагається визначити дорогу, по якій ви рухаєтеся, за допомогою даних GPS.
  - Відображає **основну інформацію про дорогу**, таку як [назва вулиці](#street-name), [інформація про смуги](#lanes), [максимальна швидкість](#speed-limit).

- **Обмеження:**
  - Деякі розширені функції можуть працювати некоректно без встановленого пункту призначення.
  - Надана інформація не завжди може бути **точною**, особливо на складних дорожніх мережах.

> **ПРИМІТКА.** *Майте на увазі, що профіль **Перегляд карти** не підтримує віджети навігації в жодному з режимів. Переключіться на відповідний **профіль навігації**, щоб увімкнути ці функції.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Віджет "Висота" {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/> Цей віджет можна використовувати лише з функцією Pro для <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">передплатників OsmAnd Pro</a>.

:::

Віджет "Висота" показує графік з висотою та нахилом вашого маршруту навігації та ваше поточне місцезнаходження на цьому графіку з поточною висотою та нахилом. Графік будується на двох осях. Вісь X - це відстань вашого маршруту. Вісь Y - це висота, значення якої залежить від рельєфу, а нахил відображається у відсотках.

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Віджет Висота](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Взаємодія з графіком {#interactions-with-the-graph}

- *Збільшення/зменшення*. За замовчуванням графік показує маршрут від поточного місцезнаходження до 10 км вперед. Ви можете використовувати [рух двома пальцями](../map/interact-with-map.md#gestures) для збільшення та зменшення масштабу для більш детального перегляду змін висоти на вашому маршруті. Ви також можете переміщати графік вправо, вперед по маршруту, і назад до поточного місцезнаходження.
- *Розмістіть точку на графіку*. Якщо ви хочете побачити значення висоти та градуса в певній точці попереду на вашому маршруті, ви можете торкнутися будь-якого місця на графіку, і з'явиться вказівник зі значеннями.


#### Що всередині {#whats-in}

Коли ви обираєте маршрут і натискаєте кнопку **Старт**, відкривається карта з вашим поточним місцезнаходженням, маршрутом і віджетом внизу екрана. Віджет містить графік та інформацію про *Підйом*, *Спуск*, *Ухил*, відстань, висоту та кут нахилу. Ви можете вибрати *оптимальний масштаб* і побачити всі можливі перешкоди на вашому маршруті.

- Усі значення вказуються або для всього маршруту, або лише для вибраного інтервалу шляхом масштабування графіка.
- Прочитайте про [ліцензію на дані ЦМР](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection), що використовуються OsmAnd для визначення висоти.

|  |
|:------------|
| ***Позначка місцезнаходження*** |
| Ваше ***Поточне місцезнаходження*** на графіку включає іконку місцезнаходження, висоту та значення нахилу у відсотках. Права частина віджета містить найвищу висоту та градієнт, їх середнє значення та найнижче значення на вибраній ділянці маршруту, видимій на графіку. |
| ![точка](@site/static/img/widgets/sch_1-1.png)|
| ***Додаткова інформація*** |
| Права частина віджета містить дані про найвищу висоту та нахил, середнє значення для обох, а також найнижчу висоту та нахил на вибраній ділянці маршруту, видимій на графіку. |
|  ![дані](@site/static/img/widgets/sch_1-2.png)|
|Значення ***Підйом*** та ***Спуск*** є сумою відстаней від вашої точки місцезнаходження до кінця видимого графіка. Якщо на графіку немає точки місцезнаходження, то це сума всього видимого графіка на екрані (це може статися, коли ви змінюєте масштаб і місцезнаходження виходить за межі графіка).|
| **Підйом** – показує суму всіх відстаней зі збільшенням висоти від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані. |
| ![схема підйому](@site/static/img/widgets/sch_uphill_1.png) ![схема підйому](@site/static/img/widgets/sch_uphill_2.png)|  
| **Спуск** – показує суму всіх відстаней зі зменшенням висоти від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані.|
| ![схема спуску](@site/static/img/widgets/sch_downhill_1.png) ![схема спуску](@site/static/img/widgets/sch_downhill_2.png)|  
|***Ухил*** - це відношення шляху до горизонталі, де нуль вказує на горизонтальність, а кількість градусів вказує на більший або крутіший ступінь нахилу.|
| **Ухил** – показує максимальний ухил дороги у відсотках від вашої точки місцезнаходження до кінця видимого графіка або для вибраної ділянки маршруту без точки місцезнаходження, видимої на екрані. |
|![схема ухилу](@site/static/img/widgets/sch_grade_1.png) ![схема ухилу](@site/static/img/widgets/sch_grade_2.png)|


## Віджет "Азимут" {#bearing-widget}
  
Азимут - це напрямок до цілі поза вашим транспортним засобом, наприклад, до пункту призначення або початкової точки. Азимут може бути *Відносним* (відповідно до вашого курсу) або *Магнітним* (відповідно до компаса). Наприклад, магнітний азимут 180° - це напрямок на південь, а відносний азимут 180° - прямо позаду вас. Сторони світу - це чотири основні напрямки компаса. Це Північ (*N* - 0° або 360°), Схід (*E* - 90°), Південь (*S* - 180°) і Захід (*W* - 270°).

![Віджет запису поїздки](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет запису поїздки](@site/static/img/widgets/bearing_widget.png) ![Віджет запису поїздки](@site/static/img/widgets/bearing_widget_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Віджет запису поїздки](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Оберіть панель → Додати віджет →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | **Android:** Ви можете змінити формат відображення даних для кутових одиниць: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** Ви можете змінити формат відображення даних для кутових одиниць: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### Як це працює {#how-it-works}

Для відображення азимута необхідно вибрати **цільову точку**. Якщо для навігації вибрано **пункт призначення** (або **першу проміжну точку**, якщо вона є), він буде використовуватися як цільова точка. В іншому випадку буде використовуватися **найвищий вибраний маркер**.

- [Відносний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) - це кут між напрямком вашого руху вперед і цільовою точкою. **Напрямок руху вперед** - це або **напрямок вашого руху**, отриманий від датчиків GPS, або, якщо ви стоїте, **напрямок, в якому ви направили свій пристрій** (тобто орієнтація вашого пристрою відповідно до його магнітного компаса). Приклад: об'єкт з відносним азимутом 0° знаходиться прямо перед вами, а об'єкт з відносним азимутом 180° - прямо позаду вас. **Відносний азимут** - це кут між напрямком вашого руху вперед і цільовою точкою.

- [Магнітний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) - це кут за годинниковою стрілкою (горизонтальний) між магнітною північчю та цільовою точкою, що спостерігається з вашого місцезнаходження. Вам потрібно слідувати цьому значенню магнітного компаса, щоб досягти вашої цілі. Приклад: якщо **магнітний азимут** показаний як 0° M, вам потрібно рухатися строго на магнітну північ, щоб досягти цільової точки.

- [Істинний азимут](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) виражається як горизонтальний кут між географічним меридіаном і лінією на Землі. Зокрема, **істинний азимут точки** - це кут, виміряний у градусах за годинниковою стрілкою від лінії Істинної Півночі. Програмне забезпечення OsmAnd покаже вам істинний азимут і курс у нашому зручному інтерфейсі, що дозволить вам легко прийняти правильне рішення на ранньому етапі.

### Навігація по локсодромії {#navigation-along-the-rhumb-line}

- **Відносний азимут**. Якщо ви будете дотримуватися відносного азимута 0 градусів і рухатися вперед, ви прибудете до пункту призначення, але не найкоротшим шляхом ( [Локсодромія](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Магнітний азимут**. Якщо ви вирівняєте компас на вашому човні/транспортному засобі зі значенням віджета і попрямуєте вперед, ви прибудете до пункту призначення, але не найкоротшим шляхом ( [Локсодромія](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Точки навігації {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

Група віджетів *Точки навігації* показує відстань, що залишилася до пункту призначення, проміжної точки, час прибуття до проміжної точки або час у дорозі для розрахованого маршруту, а також орієнтовний час прибуття.

### Інформація про маршрут {#route-information}


![Віджет пункту призначення](@site/static/img/widgets/route_information_widget.png)

Віджет *Інформація про маршрут* надає дані в реальному часі про поточний маршрут навігації та швидкий спосіб [керувати активним маршрутом](../navigation/setup/route-navigation.md#start--stop-navigation). Він допомагає відстежувати ключові деталі маршруту та дозволяє зупиняти або відновлювати поточну сесію навігації з мінімальною взаємодією.

**Інформація, що відображається:**

- **Орієнтовний час прибуття (ETA)**. Показує очікуваний час прибуття в кінцевий пункт призначення.
- **Час у дорозі, що залишився**. Відображає орієнтовний час, що залишився до досягнення пункту призначення.
- **Відстань до пункту призначення**. Вказує загальну відстань, що залишилася до кінцевого пункту призначення, та відстані до проміжних точок.

**Меню налаштувань**:

- Виберіть **Вигляд за замовчуванням**, щоб надати пріоритет одному з наступних значень: *Орієнтовний час прибуття*, *Час у дорозі*, *Відстань*.
- У **Пріоритеті відображення** виберіть між *Спочатку пункт призначення (за замовчуванням)* або *Спочатку проміжна точка*, щоб надати пріоритет найбільш релевантній інформації про маршрут.

> ПРИМІТКА: Віджет видимий лише під час навігації.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет →<Translate android="true" ids="map_widget_route_information"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → Додати віджет  →Інформація про маршрут* |
| При дотику | Натисніть кнопку зі стрілкою, щоб відкрити [панель Старт/Стоп навігації](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Відстань до пункту призначення {#distance-to-destination}

![Віджет пункту призначення](@site/static/img/widgets/destination_widget.png)

Віджет відображає відстань, що залишилася до останнього пункту призначення при русі за розрахованим маршрутом.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Оберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| При дотику | Переміщує карту до пункту призначення. |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |

### Відстань до проміжної точки {#distance-to-intermediate}

![Віджет проміжного пункту призначення](@site/static/img/widgets/intermediate_destination_widget.png)

Віджет показує відстань до першої проміжної точки по розрахованому маршруту. Після проходження проміжних точок, простір буде оновлено до наступної проміжної точки. Якщо проміжних точок немає, віджет не відображається.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Оберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| При дотику | **Одна проміжна точка** - перемістити карту до проміжної точки. <br /> **Дві або більше проміжних точок** - відкриває меню списку пунктів призначення. |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |

### Час до проміжної точки {#time-to-intermediate}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Віджет Час прибуття Час у дорозі](@site/static/img/widgets/arrival_time_widget_android.png)  ![Віджет Час прибуття Час у дорозі](@site/static/img/widgets/time_to_go_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Віджет Час прибуття Час у дорозі](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Віджет Час прибуття Час у дорозі](@site/static/img/widgets/time_to_go_widget_ios.png)

</TabItem>

</Tabs>  

Віджет показує *Час прибуття* або *Час у дорозі* до першої проміжної точки. Під час навігації час постійно оновлюється, і як тільки проміжна точка пройдена, час буде оновлено до наступної точки маршруту. Наприклад, якщо ви зупините навігацію, *Час у дорозі* залишиться незмінним, а *Час прибуття* буде дорівнювати *Часу у дорозі* плюс *Поточний час*.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Оберіть панель → Додати віджет →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| При дотику | Перемикає між *Часом прибуття* та *Часом у дорозі* і навпаки. |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


### Час до пункту призначення {#time-to-destination}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Віджет проміжного часу прибуття та часу](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Віджет проміжного часу прибуття та часу](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

Віджет відображає *Час прибуття* або *Час у дорозі* до останнього пункту призначення. Час постійно оновлюється під час навігації і дорівнює часу маршруту від вашого поточного місцезнаходження.

| | |
|:------------|:------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| При дотику | Перемикає між *Часом прибуття* та *Часом у дорозі* і навпаки. |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |  


## Обмеження швидкості {#speed-limit}

![Віджет обмеження швидкості](@site/static/img/widgets/speed_limit_widget_2.png)

Віджет *Обмеження швидкості* відображає поточне обмеження швидкості на основі даних карти для вашого маршруту.

- Дані взяті з [проєкту OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Віджет працює в пасивному та активному режимах навігації.
- Якщо дані про обмеження швидкості недоступні для певної дороги або ділянки, *віджет не з'явиться*.

> ПРИМІТКА: Переконайтеся, що ваші [карти оновлені](../personal/maps-resources.md#updates) і що ви завантажили всі необхідні регіональні дані для доступу до найновішої інформації про обмеження швидкості.

| |  |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Оберіть панель → Додати віджет → <Translate ios="true" ids="map_widget_max_speed"/>* |
| При дотику | Без змін |
| Довгий дотик | Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) |


## Вказівки по маршруту {#route-guidance}


![Віджет наступних поворотів](@site/static/img/widgets/next_turns_widget.png)

Надає вказівки по маршруту в реальному часі, включаючи відстань до наступного повороту, назву дороги, назву поточної вулиці та інформацію про смуги руху. Віджети активні під час навігації.

Віджети *Вказівки по маршруту* містять інформацію про:

- [Смуги](#lanes) - показує поточне розташування смуг руху та виділяє ті, по яких ви повинні рухатися. (тільки для _Верхньої / Нижньої панелей_)
- [Наступний поворот](#next-turn) - наступний поворот з великою стрілкою, що представляє маневр, та з даними про відстань до нього.
- [Наступний поворот (малий)](#next-turn) - наступний поворот з маленькою стрілкою, що представляє маневр, та з даними про відстань поруч зі стрілкою. (тільки для _Лівої / Правої панелей_)
- [Другий наступний поворот](#next-turn) - це наступний поворот після першого, який активується, якщо він знаходиться на відстані наближення.

| | |
|:------------|:------------|
| Увімкнути      | **Android:** *Меню → Налаштувати екран →  Ліва / Права / Верхня / Нижня панель → Вказівки по маршруту → Додати віджет → Смуга, Наступний поворот, Другий наступний поворот*  |
|      | **iOS:** *Меню → Налаштувати екран →  Ліва / Права / Верхня / Нижня панель → Вказівки по маршруту → Додати віджет → Смуга, Наступний поворот, Другий наступний поворот*   |
| При дотику  | **Наступний поворот**: Якщо [голосові підказки](../navigation/guidance/voice-navigation.md) увімкнені, вимовляється наступний маневр та відстань до нього. <br/> **Смуга**: Без змін. |
| Довгий дотик    | **Наступний поворот**: Відкриває [Контекстне меню віджета](../widgets/configure-screen.md#widget-context-menu) <br/> **Смуги**: Без змін. |


### Наступний поворот {#next-turn}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![віджет вказівок по маршруту](@site/static/img/widgets/route_guidence_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Наближення до POI/Обраного ios](@site/static/img/widgets/route_guidence_widgets_ios.png)

</TabItem>

</Tabs>

- **Наступний поворот** - наступний поворот з великою стрілкою, що представляє маневр, та з даними про відстань до нього.
- **Наступний поворот (малий)** - наступний поворот з маленькою стрілкою, що представляє маневр, та з даними про відстань поруч зі стрілкою. (тільки для _Лівої / Правої панелі_)
- **Другий наступний поворот** - це наступний поворот після першого, який активується, якщо він знаходиться на відстані наближення.

### Кольорові підказки для наступного повороту {#color-prompts-for-next-turn}

Ця таблиця показує приблизний час до активації підказок та відповідну кольорову індикацію стрілок для виконання маневру. Для отримання додаткової інформації зверніться до [технічної документації](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) або до статті [Голосові підказки](../navigation/guidance/voice-navigation.md).

| Колір     | ~ Час спрацювання | Відстань   | Тип підказки     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Зелений  | 5 секунд      | Близько   | Повертайте зараз        |
| 🟡 Жовтий | 20 секунд     | Наближення| Поворот через `x` м   |
| ⚪ Сірий   | > 100 секунд  | Віддалено    | Приготуйтеся до повороту |


### Смуги {#lanes}

![Віджети смуг руху](@site/static/img/widgets/lanes_widget.png)

Віджет **Смуги** виділяє поточну смугу, коли навігація активна, і відображає схему смуг для фактичної дороги, коли навігація пасивна. Цей віджет доступний лише для верхньої та нижньої панелей. Дані взяті з [проєкту OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:turn).

### Кольорові підказки для смуг {#color-prompts-for-lanes}

Відображає віджет за налаштуваннями часу наближення. Колір смуги пов'язаний з [голосовими підказками](../navigation/guidance/voice-navigation.md) та часом, що залишився для виконання маневру.

| Колір     | ~ Час спрацювання | Відстань    | Тип підказки |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Зелений  | 5 секунд      | Близько    | [Повертайте зараз](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |
| 🟡 Жовтий | 20 секунд     | Наближення | [Поворот через X м](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) |



## Віджет сповіщень {#alert-widget}

![Віджети інформації про сповіщення](@site/static/img/widgets/alert_information_widget.png)

**Віджет сповіщень** поєднує кілька типів сповіщень, які відображаються в нижньому лівому куті під час навігації.

- Ви можете вмикати та вимикати такі сповіщення, як *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* та *<Translate android="true" ids="show_tunnels"/>*. Інші сповіщення активні за замовчуванням, якщо віджет увімкнено.

- Для типу сповіщення *Обмеження швидкості* ви можете налаштувати значення <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) в налаштуваннях голосових підказок, щоб краще відповідати швидкості автомобіля та швидкості GPS.

- Більшість сповіщень відображаються на екрані та оголошуються голосовою підказкою протягом 15 секунд, а також час спрацьовування для проходження проміжної точки, улюбленої точки або POI. Детальніше читайте [тут](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Увімкнути | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Типи сповіщень {#alert-types}

Типи сповіщень мають різний візуальний дизайн, який залежить від **<Translate android="true" ids="driving_region"/>** і може бути налаштований через *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd не прагне представляти 100% ідентичні дорожні знаки, але вказує на деякі подібності.

| | | |
|:------------|:------------|:------------|
| Назва | Опис | Іконка |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Заспокоєння дорожнього руху](https://en.wikipedia.org/wiki/Traffic_calming) використовує фізичний дизайн та інші заходи для підвищення безпеки автомобілістів, пішоходів та велосипедистів. | ![Віджети сповіщення про заспокоєння руху](@site/static/img/widgets/warnings_traffic_calming.png)  ![Віджети сповіщення про заспокоєння руху в США](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [Пішохідний перехід](https://en.wikipedia.org/wiki/Pedestrian_crossing) (переважно британська англійська) або зебра - це місце, призначене для переходу пішоходами дороги, вулиці або проспекту. OsmAnd показує сповіщення про нерегульований пішохідний перехід.  | ![Віджети сповіщення про заспокоєння руху](@site/static/img/widgets/warnings_pedestrian.png)  ![Віджети сповіщення про заспокоєння руху в США](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | У більшості країн [обмеження швидкості на дорогах](https://en.wikipedia.org/wiki/Speed_limit) встановлюють легальну максимальну, середню або мінімальну швидкість, з якою дорожні транспортні засоби можуть рухатися на певній ділянці дороги. В OsmAnd сповіщення відображається, коли ви перевищуєте швидкість. Ви можете встановити параметри перевищення швидкості (0, 5, 10.. км/год). ![Віджети сповіщення про перевищення швидкості](@site/static/img/widgets/ex_warning_speed.png)  | ![Віджети сповіщення про обмеження швидкості](@site/static/img/widgets/warnings_limit.png) ![Віджети сповіщення про обмеження швидкості в Канаді](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Віджети сповіщення про обмеження швидкості в США](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | Тунель - це підземний прохід, що проходить під горою, річкою або перевантаженою міською територією. В OsmAnd сповіщення *Тунелі* містить інформацію про довжину тунелю. Якщо ви перебуваєте в тунелі, воно показує відстань до кінця тунелю.   ![Віджети сповіщення про тунель](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Віджети сповіщення про тунель](@site/static/img/widgets/warnings_tunnel.png)  ![Віджети сповіщення про тунель в США](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Камери контролю дорожнього руху](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) та [камери контролю швидкості](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) фіксують порушення правил дорожнього руху, включаючи перевищення швидкості, проїзд на червоне світло та інші види незаконної поведінки. <br />**ПРИМІТКА:** Сповіщення про камери контролю швидкості заборонені або є незаконними в деяких країнах. Щоб повністю [видалити камери контролю швидкості](../personal/global-settings.md#legal) з OsmAnd, перейдіть до головного *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Віджети сповіщення про заспокоєння руху](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [Знак "Стоп"](https://en.wikipedia.org/wiki/Stop_sign) - це дорожній знак, призначений для сповіщення водіїв про те, що вони повинні повністю зупинитися і переконатися, що перехрестя безпечно вільне від транспортних засобів і пішоходів, перш ніж продовжити рух повз знак.  | ![Віджети сповіщення про зупинку](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |Це попередження означає, що попереду [залізничний переїзд](https://en.wikipedia.org/wiki/Crossbuck). | ![Віджети сповіщення про залізничний переїзд](@site/static/img/widgets/warnings_railways.png) ![Віджети сповіщення про залізничний переїзд в Канаді](@site/static/img/widgets/warnings_railways_ca.png)  ![Віджети сповіщення про залізничний переїзд в США](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |Це попередження вказує на те, що попереду прикордонний контроль.| ![Віджети сповіщення про прикордонний контроль](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Символи небезпеки або попереджувальні символи](https://en.wikipedia.org/wiki/Hazard_symbol) - це впізнавані символи, призначені для попередження про небезпечні матеріали, місця або об'єкти, включаючи електричний струм, отрути та радіоактивність. | ![Віджети сповіщення про небезпеку](@site/static/img/widgets/warnings_hazard.png)  ![Віджети сповіщення про небезпеку в США](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | Це попередження вказує на те, що попереду пункт оплати за проїзд по платній дорозі.   ![Віджети пункту оплати](@site/static/img/widgets/ex_toll_booth.png) | ![Віджети сповіщення про обмеження швидкості](@site/static/img/widgets/warnings_limit.png) |


## Назва вулиці {#street-name}

Віджет "Назва вулиці" показує **назву поточної вулиці** з прямою стрілкою або **назву наступної вулиці** з маневром, який потрібно виконати. Назва вулиці зазвичай складається з щита автомагістралі, [назви](https://wiki.openstreetmap.org/wiki/Key:name), [посилання](https://wiki.openstreetmap.org/wiki/Key:ref), [міжнародного посилання](https://wiki.openstreetmap.org/wiki/Key:int_ref) та [пункту призначення](https://wiki.openstreetmap.org/wiki/Key:destination).

У **Налаштуваннях** віджета ви можете вибрати завжди відображати **назву поточної вулиці** та використовувати її з віджетом [**Наступний поворот**](#next-turn). Якщо ви увімкнете **Інформацію про наступний поворот**, то перемикання між назвою поточної вулиці та назвою наступної вулиці відбувається при наближенні до місця, де ви хочете виконати маневр (~20 секунд), аналогічно голосовій підказці [Поворот через X м](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- Під час руху по вулиці або шосе віджет показує назву або позначення поточної вулиці (дороги) синьою стрілкою.

  ![Віджет назви вулиці POI_2](@site/static/img/widgets/street_name_widget_2.png)

- При зміні напрямку віджет показує схему маневру та назву (позначення) вулиці (дороги), на яку потрібно повернути.

  ![Віджет назви вулиці POI](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Додати віджет → <Translate android="true" ids="map_widget_top_text"/>* |
| При дотику | Без змін |


## Наближення до POI / Обраного {#approach-pois--favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Наближення до POI/Обраного android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Наближення до POI/Обраного ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

Віджет **Наближення до POI/Обраного/Проміжних точок** поєднується з [Назвою вулиці](#street-name) і відображає наближення та проходження Точок інтересу, Проміжних точок відстежуваного треку та Обраного вздовж маршруту.

Він відображає **назву**, **іконку точки** та 2 **відстані**:

- **Відстань по маршруту** (вгорі) показує, яку відстань потрібно подолати за наступним маршрутом.
- **Відстань відхилення** - це пряма відстань від найближчої точки маршруту до самої точки.

**iOS** - На додаток до відстані до найближчої проміжної точки, також відображається сторона (ліва або права) маршруту, на якій знаходиться проміжна точка.

| | |
|:------------|:------------|
| Увімкнути | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Почати навігацію → кнопка-олівець* |
| При дотику | Без змін |


## Пов'язані статті {#related-articles}

- [Налаштувати екран](./configure-screen.md)
- [Кнопки на карті](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Віджети навігації](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)