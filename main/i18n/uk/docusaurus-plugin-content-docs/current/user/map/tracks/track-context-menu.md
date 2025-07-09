---
source-hash: 8897fb3aebb172bbef2674a2dea9f5e516873f9949d5d72db7b3e2032bea15b3
sidebar_position: 4
title:  Контекстне меню треку
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

*Контекстне меню треку* надає інформацію про *[трек](../../personal/tracks/index.md)* як у текстовому, так і в [графічному](#altitude--speed-graphs) вигляді. Воно дозволяє додавати інформацію, вносити зміни, редагувати та виконувати різні інші дії з треком. Доступ до *контекстного меню треку* можна отримати, просто торкнувшись потрібного треку на карті або скориставшись меню *[Мої місця](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Можливо, вам знадобиться відкрити папку треків і вибрати потрібний трек, торкнувшись його.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Огляд треку {#track-overview}

Коли ви торкаєтеся треку, відкривається перший екран *Контекстного меню треку* — вкладка *Огляд*. На цій вкладці ви можете знайти підсумок про обраний трек (*[Інформаційна панель](#info-panel)*) та виконати найпоширеніші дії з треком за допомогою *[Меню дій з треком](#track-actions)*. Ви можете переглянути [опис та службову інформацію](#description-and-info) про ваш трек, якщо потягнете вкладку Огляд вгору.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.
-->

### Інформаційна панель {#info-panel}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

У верхній частині інформаційної панелі ви можете побачити назву треку та символ, що використовується для його позначення (*лише для Android*). Назву треку можна змінити за допомогою функції перейменування в [меню Параметри](#options). Деякі треки (переважно *[Путівники](../../plan-route/travel-guides.md#manage-as-gpx-track)*) можуть мати короткий *[опис](#description-and-info)* та (або) зображення під *Назвою треку*. Стрілка показує *Напрямок до найближчої точки треку* від [Моє місцезнаходження](../../map/interact-with-map#my-location-and-zoom).

Інформаційна панель також надає інформацію про наступне:

- *<Translate android="true" ids="distance"/>*. Показує довжину треку.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Відображає загальну суму підйомів та спусків під час подорожі.
- *<Translate android="true" ids="altitude_range"/>*. Вказує мінімальну та максимальну висоту на треку.

:::note
Якщо ваш трек був створений в OsmAnd або будь-якому іншому додатку для відстеження (тому його точки мають теги [`time` та `speed`](../../plugins/trip-recording#recorded-gpx-file)), інформаційна панель також міститиме інформацію про *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) або *<Translate ios="true" ids="total_time"/>* (*iOS*) (тривалість часу між початковою та кінцевою точками треку), *<Translate android="true" ids="shared_string_time_moving"/>* (сума часу в русі).
:::

### Дії з треком {#track-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Кнопки **Показати / приховати**. Змінює видимість треку на карті.
- [Вигляд](./appearance.md). Налаштуйте вигляд вашого треку.
- **Редагувати трек** (*Android*). Відкриває трек у [інструменті Планування маршруту](../../plan-route/create-route.md).
- **Експорт** (*iOS*). Дозволяє [експортувати трек](../../personal/tracks/manage-tracks.md#export).
- **Напрямки**. Відкриває трек у режимі *[Навігації](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Параметри {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)

</TabItem>

</Tabs>

Меню **Параметри** дозволяє керувати та змінювати обраний трек за допомогою різних інструментів та налаштувань.

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Керує видимістю треку на карті.
- **<Translate android="true" ids="shared_string_appearance"/>** – Відкриває [меню Вигляд](../tracks/appearance.md) для налаштування кольору, ширини та прозорості треку.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Запускає [навігацію за треком](../../navigation/setup/gpx-navigation.md), вирівнюючи ваш маршрут з обраним треком.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*лише для Android*) – Об'єднує сегменти треку для заповнення прогалин.
- **<Translate android="true" ids="analyze_on_map"/>**. Відкриває інструмент [Аналізувати на карті](../tracks/index.md#analyze-track-on-map-analyze-track-on-map) для перевірки висоти, швидкості та відстані треку.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*лише для Android*) - Аналізує трек за часовими або дистанційними [інтервалами](./track-context-menu.md#split-interval).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Експортує обраний трек у форматі GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Завантажує](../../plugins/osm-editing.md#upload-gps-track) обраний трек до OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Відкриває інструмент [Планування маршруту](../../plan-route/create-route.md) для модифікації треку.
- **Дублювати трек** (*лише для iOS*) – Створює та зберігає копію треку.
- **<Translate android="true" ids="rename_track"/>** – Дозволяє змінити назву треку.
- **<Translate android="true" ids="change_folder"/>** – Переміщує трек до іншої папки або створює нову.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*лише для Android*) - Дозволяє [фільтрувати точки треку](#gps-filter) для підвищення точності.
- **<Translate android="true" ids="altitude_correction"/>** (*лише для Android*) - Для [отримання даних про висоту](#calculate-missing-elevation), [прив'язки треку до доріг](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) або обчислення в автономному режимі (потрібні [карти рельєфу](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*лише для Android*) - [Симулює ваше місцезнаходження](../../plugins/development.md#gpx-track-simulation) за допомогою GPX-треку.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Видаляє трек.


### Опис та інформація {#description-and-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Цей розділ вкладки *Огляд* відображає ***дані тегів*** та ***всю загальну інформацію***.

- **Опис**. Кнопка *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) використовується для редагування опису треку. Тег `desc`.

- **Загальні**. Містить інформацію про *розмір файлу GPX*, *папку файлу* та *дату створення* з тегом `time`.

- **Інформація**. Теги: *Ключові слова* - `keywords`, &nbsp;*Посилання* - `link`, &nbsp;*Діяльність* - `activities`.

- **Автор**. Теги: *Автор* - `author`, &nbsp;*Ім'я* - `name`, &nbsp;*Адреса електронної пошти* - `email`, &nbsp;*Посилання* - `link`.

- **Авторське право**. Теги: *Авторське право* - `copyright`, &nbsp;*Автор* - `author`, &nbsp;*Рік* - `year`, &nbsp;*Ліцензія* - `license`.

- **Додатково**. Усі теги з розділу ***розширення***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.


<details>

<summary>Приклад XML-коду файлу GPX</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Діяльність інформації про трек {#track-information-activity}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


Функція *Діяльність* в OsmAnd дозволяє позначати записані GPX-треки певними видами діяльності для подальшого аналізу та організації в папках.

- [Теги діяльності для GPX-треків](../../plugins/trip-recording.md#recording-settings). Під час запису GPX-треку ви можете призначити тип діяльності. Це тегування діяльності допомагає вам спочатку класифікувати треки.
- [Фільтр діяльності](../../personal/tracks/smart-folder.md#search-filter). Ви можете фільтрувати записані GPX-треки за діяльністю, що дозволяє зосередитися на пошуку конкретних типів записів, таких як усі велосипедні або пішохідні треки.
- [Керування типами діяльності](../../personal/tracks/manage-tracks.md#selection-mode). Ви можете змінити тип діяльності для вибраних папок або треків за допомогою режиму вибору на вкладці "Треки" в меню "Мої місця".
- **Список діяльності**. Категорії та групи діяльності визначені в ресурсах OsmAnd. Для розробників та учасників список діяльності підтримується в структурованому форматі за адресою [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), де детально описані доступні групи та типи діяльності.


## Графіки висоти / швидкості {#altitude--speed-graphs}

На вкладці *<Translate android="true" ids="shared_string_gpx_track"/>* ви можете знайти інформацію про трек у графічному вигляді. За допомогою перемикача ви можете вибрати, які дані відображати на графіку: окремі дані про *[<Translate android="true" ids="altitude"/>](#altitude)*, про *[Швидкість](#speed)* (ця опція доступна лише для записаних треків) або відображати все разом (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Взаємодія з графіком:

- ***Розмістити точку на графіку***. Якщо ви хочете побачити інформацію в певній точці треку, ви можете торкнутися будь-де на графіку, і з'явиться вказівник зі значеннями. Одночасно на карті з'явиться синій маркер, що вказує на це місце на треку.
- ***Збільшити/зменшити***. Ви можете використовувати [рухи двома пальцями](../../map/interact-with-map.md#gestures) для збільшення та зменшення масштабу для більш детального перегляду. Після збільшення масштабу ви можете переміщати графік вправо та вліво, що відповідає переміщенню вперед та назад по маршруту.
- ***Додаткова інформація***. Права сторона графіка містить дані про найнижчу, найвищу та середню висоту, нахил та швидкість. Внизу графіка ви можете побачити позначки відстані.


### Оглядова інформація {#overview-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Огляд** ви можете побачити такі параметри, як:

- *<Translate android="true" ids="distance"/>*. Сума загальної пройденої відстані на треку, або довжина самого треку.
- *<Translate android="true" ids="shared_string_time_span"/>*. Часовий інтервал між початковою та кінцевою точками треку.
- *<Translate android="true" ids="shared_string_start_time"/>* Точний час початку запису треку.
- *<Translate android="true" ids="shared_string_end_time"/>*. Час закінчення запису треку.

Активні **кнопки** надають доступ до таких дій:

- Кнопка **<Translate android="true" ids="analyze_on_map"/>** відкриває [меню Аналізувати трек](../tracks/index.md#analyze-track-on-map) для треку.
- Кнопка **<Translate android="true" ids="shared_string_options"/>** відкриває меню з:

  - *Редагувати* відкриває трек у [інструменті Планування маршруту](../../plan-route/index.md).
  - *Видалити* дозволяє видалити вибраний елемент треку.
  - *Розділити інтервал* відкриває [функцію Розділити інтервал](#split-interval) для треку.


### Швидкість {#speed}

:::note Тільки записані треки
Ця вкладка може бути видимою лише на записаних треках. Точки на цьому типі треку мають теги **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Графік **Швидкість** відображає такі показники:

- *<Translate android="true" ids="average_speed"/>*. Вказує середню швидкість під час подорожі.
- *<Translate android="true" ids="max_speed"/>*. Показує максимальну швидкість під час подорожі.
- *<Translate android="true" ids="moving_time"/>*. Показує загальний час під час подорожі лише в русі.
- *<Translate android="true" ids="distance_moving"/>*. Вказує скориговану відстань подорожі.


### Висота {#altitude}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Графік **Висота** відображає такі показники:

- *<Translate android="true" ids="average_altitude"/>*. Вказує середню висоту над рівнем моря на маршруті.
- *<Translate android="true" ids="altitude_range"/>*. Найвища та найнижча висота, зафіксована на маршруті.
- *<Translate android="true" ids="altitude_ascent"/>*. Сукупний набір висоти над рівнем моря вздовж маршруту.
- *<Translate android="true" ids="altitude_descent"/>*. Сукупна втрата висоти вздовж маршруту.

**Отримати дані про висоту.**
Якщо на маршруті *немає інформації про висоту*, ви можете додати її наступними способами:

- *Кнопка "Обчислити висоту" → [Використовувати найближчі дороги](../../plan-route/create-route.md#get-elevation-data)*. Використовує офлайн-карту для пошуку найближчих доріг та даних про висоту. Дозволяє налаштувати геометрію треку.
- [Використовувати карти рельєфу](#calculate-missing-elevation). Використовує карти рельєфу для отримання даних про висоту. Геометрія треку залишається незмінною.


### Обчислити відсутню висоту {#calculate-missing-elevation}

:::note Підписка OsmAnd Pro
Функція обчислення висоти в автономному режимі доступна лише для [**передплатників OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Ця функція дозволяє обчислювати профіль висот для GPX-треку в автономному режимі для будь-якої місцевості між 70 градусами північної широти та 70 градусами південної широти, на основі [даних карт рельєфу](../../plugins/topography.md#download-maps). *Карти рельєфу (3D) повинні бути попередньо завантажені*.

1. Завантажте [карти рельєфу (3D)](../../plugins/topography.md#download-maps) для потрібного регіону.
2. Якщо трек не містить даних про висоту, перейдіть до контекстного меню треку (*Контекстне меню треку → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), виберіть *Використовувати карти рельєфу*, і після обчислення ви отримаєте графік треку на основі даних рельєфу.

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->

3. Якщо ви створюєте маршрут за допомогою інструмента [Планування маршруту](../../plan-route/create-route.md#graph) методом *Пряма лінія* і на графіку немає даних про висоту, вам потрібно:
    - Натисніть *Отримати дані про висоту*, потім виберіть *Використовувати карти рельєфу*.
    - Після обчислення ви отримаєте повний графік висоти/нахилу вашого маршруту на основі даних рельєфу.

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)


## Точки / Маршрутні точки {#points--waypoints}

Маршрутні точки — це один із типів точок, доступних на карті. Загалом, це можуть бути точки треку, які є частиною файлів GPX. Детальний опис доступний у статті [точки на карті](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

На цій вкладці *Точки*:

- [Показати дані точок треку](#display-custom-gpx-tags) та змінити точки треку (маршрутні точки та точки маршруту), [видалити їх та додати](#points--waypoints) маршрутні точки до треку.
- Створити та змінити [Групу (папку) точок](#waypoint-groups).


### Додати маршрутну точку до треку {#add-waypoint-to-a-track}

Маршрутні точки можна додавати до поточного записаного треку або до будь-якого треку зі списку [*Мої місця → Треки*](../../personal/tracks/manage-tracks.md):

- Використовуйте [контекстне меню карти](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint).
  - Маршрутні точки автоматично відображаються, якщо вибраний трек увімкнено на карті.
  - [Довге натискання](../../map/map-context-menu.md#select-any-point-long-tap) на карті в будь-якому вибраному місці для створення маршрутної точки.
  - Ви можете встановити інформацію про маршрутну точку у відкритому [контекстному меню карти](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Використовуйте кнопку [Додати маршрутну точку](#points--waypoints) контекстного меню треку.

- Додайте маршрутну точку як кнопку [Швидка дія](../../widgets/quick-action.md#my-places).

#### Створити маршрутну точку {#create-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Торкніться кнопки *Додати маршрутну точку*, щоб відкрити екран створення маршрутної точки (цей екран схожий на [контекстне меню Обраних](../../personal/favorites.md#create)).

1. **Додайте** *Назву* маршрутної точки, *Адресу* вибраного місця та *Опис* для неї (необов'язково).
2. **Виберіть** Групу.

    - Виберіть раніше створені категорії груп або створіть нову.
    - Створіть назву та вигляд для нової групи маршрутних точок. Це також називається *новою категорією* в застосунку.
    - **Піктограма**, **колір піктограми** та **форма** будуть використовуватися для всіх нових маршрутних точок, доданих до групи.

3. **Налаштування вигляду**:

    - Виберіть [**піктограму**](../../personal/favorites.md#favorite-icons) зі списку всіх піктограм категорій POI.
    - Виберіть **Колір** піктограми.
    - Потім виберіть **Форму** піктограми: *Коло, Восьмикутник, Квадрат*.

4. **Замініть** іншу точку цією, якщо потрібно.


### Дії з групами {#actions-with-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Меню з трьома крапками* ( &#8285; ) відкриває *Меню групи* маршрутних точок.

**Дії:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Дозволяє відображати або не відображати групові маршрутні точки на карті. Або ви можете використовувати [екранну кнопку](#points--waypoints) для відображення або приховування групових маршрутних точок на карті.
- **<Translate android="true" ids="shared_string_rename"/>** - Змінити назву групи.
- **<Translate android="true" ids="change_default_appearance"/>** - Змінити параметри відображення для групи маршрутних точок.
- **<Translate android="true" ids="add_group_to_markers"/>** або **Видалити** (*лише для Android*) - Перемістити групові маршрутні точки до списку [Маркерів карти](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*лише для Android*) - Перемістити групові маршрутні точки до [Обраних](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*лише для Android*) - Створює маршрут між маршрутними точками. Перша та остання точки стають початком та кінцем маршруту, а решта перетворюються на проміжні точки.
- **<Translate android="true" ids="shared_string_delete"/>** - Видалити групу маршрутних точок.


### Групи маршрутних точок {#waypoint-groups}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Керуйте видимістю груп на карті: якщо ви приховаєте один трек, вся група також буде прихована.

Ви можете вмикати або вимикати групові маршрутні точки на карті за допомогою кнопки у верхньому правому куті контекстного меню треку на карті. Торкніться її та виберіть потрібну дію.

### Відображення користувацьких GPX-тегів {#display-custom-gpx-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>


<details>

<summary>Приклад XML-коду тегів маршрутних точок</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Приклад XML-коду тегів точок маршруту</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Теги:**

| Параметр | Опис |
| --- | --- |
| `lat` | **Широта** — одна з географічних координат, за якою можна визначити місцезнаходження. |
| `lon` | **Довгота** — ще одна з географічних координат, за якою можна визначити місцезнаходження. |
| `time` | **Мітка часу** — дата та час запису точки. |
| `name` | **Назва** — назва точки. Дозволені будь-які символи. |
| `desc` | **Опис** містить додаткову інформацію про точку. |
| `type` | **Вибрати групу** — назва папки OsmAnd, в якій збережено цю маршрутну точку. |
| `cmt` | **Коментар** — короткий коментар до точки. |
| `link` | **Посилання** — посилання на будь-які джерела. |
| `ele` | **Висота** — висота точки. |


**Розширення:**

| Розширення | Опис |
| --- | --- |
| `osmand:icon` | **Піктограма** — назва вибраної піктограми. |
| `osmand:color` | **Колір** — колір у форматі HEX. |
| `osmand:background` | **Фон** — форма піктограми, наприклад, коло, восьмикутник або квадрат. |
| `osmand:country` | **Країна** — назва країни. |
| `osmand:address` | **Адреса** — адреса. |
| `osmand:postcode` | **Поштовий індекс** — поштовий індекс. |
| `osmand:telephone` | **Телефон** — номер телефону. |
| `osmand:state` | **Штат** — назва штату. |
| `osmand:start_date` | **Дата початку** — дані розкладу точки. |

Маршрутні точки записуються разом з треком у [файл GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Кожна з цих маршрутних точок має свій набір тегів для опису. Усі теги, що безпосередньо стосуються опису маршрутних точок, які можна редагувати безпосередньо в застосунку OsmAnd, перераховані в цьому розділі.
Щоб змінити опис маршрутної точки, ви можете скористатися одним із наступних способів:

1. Знайдіть потрібний трек у списку вкладки *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Торкніться треку на карті, якщо він включений до [списку видимих](../tracks/index.md#display-tracks-on-the-map).
3. Торкніться потрібної маршрутної точки, якщо вона [видима](../../personal/tracks/manage-tracks.md#track-menu) на карті.

    Потім у [Контекстному меню треків](./track-context-menu.md) торкніться *точки*, поля потрібної папки з доступними маршрутними точками та маршрутної точки, яку ви шукаєте. Виберіть меню *Дії →* **Редагувати маршрутну точку GPX** та внесіть зміни. Ви не можете змінити дату створення точки, *мітку часу*, у застосунку.

**Теги зручностей**, що описують додаткову інформацію, таку як години роботи або номер телефону, специфічні для POI, беруть цю інформацію з даних OpenStreetMap або даних, які ви ввели під час створення POI. Ви можете редагувати такі теги та [користувацькі теги](#display-custom-gpx-tags) лише в коді файлу GPX, який можна відкрити будь-яким текстовим редактором на вашому пристрої.


## Розділити інтервал {#split-interval}

<InfoAndroidOnly />

Ви можете розділити трек на інтервали, такі як відстань і час, і проаналізувати його.

Розділити трек за відстанню або часовим інтервалом.
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)


## GPS-фільтр {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Цей фільтр дозволяє покращити статистику вашого треку, виключаючи непотрібні або некоректні дані. Ви можете відфільтрувати точки треку, які не відповідають вашим параметрам треку, і в результаті отримати більш точний графік та візуальну лінію маршруту без спотворень або шуму запису. Ви можете вносити зміни за допомогою таких фільтрів, як *Згладжування*, *Швидкість*, *Висота* та *Точність GPS*, які приховують відфільтровані точки з поточного треку. Крім того, в меню *Статистика* ви можете перевірити, як ваші зміни відображаються на графіку, перш ніж їх зберегти. Ви також можете *Скинути до оригіналу* та *Зберегти як копію* свого треку в цьому фільтрі, не зберігаючи оригінал.

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Сторінка додатка Android GPS Filter включає наступне:

- Карта зі збереженим треком та додатковою кнопкою *Моє місцезнаходження треку* (вона вирівнює трек по центру карти).
- Кнопки *Оновити* та *Меню* вгорі (*Меню* відкриває поле *Дія* внизу сторінки).
- Блоки *Фільтр*, *Статистика*, *Дія*.


### Меню фільтра {#filter-menu}

У цьому меню ви можете змінити деякі параметри вашого треку, такі як *Згладжування*, *Швидкість*, *Висота* або *Точність GPS* за допомогою фільтрів. Меню розділене на *частину Точки* та *частину Дії*.

| ***Точки*** |
|:------------|
|Ця частина показує кількість точок після фільтрації та загальну кількість точок на вибраному треку до застосування фільтрів.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Дії*** |
|*Згладжування*. Встановлює порогову відстань між точками. Точки треку, які знаходяться принаймні на цій відстані від останньої видимої точки, приховуються. Усі точки на треку, які знаходяться на відстані одна від одної меншій, ніж відстань, вибрана фільтром, будуть приховані. Точки треку відраховуються від останньої видимої точки. Зверніть увагу, що високі пороги можуть надмірно спростити геометрію треку.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Швидкість*. На графіку та карті відображаються лише точки треку, що відповідають вибраному інтервалу швидкості, інші приховуються.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Висота*. На графіку та карті відображаються лише точки треку, що відповідають вибраному інтервалу висоти, інші приховуються.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Точність GPS*. Встановлює максимально допустиме значення для HDOP. Точки з вищим значенням приховуються.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |


### Статистика {#statistics}

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

Вкладка "Статистика" відображає інформацію про **змінений** трек, тобто трек без відфільтрованих значень. Вона відображається в блоках статистики та даних графіка.

- Частина *Дані* показує статистику, подібну до [меню Фільтр](#filter-menu).
- Частина *Графік* відображає три типи графіків за параметрами: Огляд, Висота та Швидкість. Ця функція є копією [графіка треку](#altitude--speed-graphs).

### Дії {#actions}

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Список дій доступний внизу вкладок **Фільтр** або **Статистика**. OsmAnd застосовує всі зміни, внесені до треку, без оновлення файлу, але ви можете зберегти зміни вручну.

- *<Translate android="true" ids="reset_to_original"/>*. Дозволяє повернути параметри до початкового стану.
- *<Translate android="true" ids="save_as_copy"/>*. Дозволяє зберегти трек як новий.
- *<Translate android="true" ids="save_changes_into_file"/>*. Дозволяє перезаписати трек з новими параметрами.


## Пов'язані статті {#related-articles}

- [GPX-треки](../../personal/tracks/manage-tracks.md)
- [Треки на карті](./track-context-menu.md)
- [Навігація за треком](../../navigation/setup/gpx-navigation.md)
- [Планування маршруту](../../plan-route/index.md)
- [Плагін запису поїздок](../../plugins/trip-recording.md)
- [Аналіз на карті](../index.md#analyze-track-on-map)

> *Останнє оновлення: листопад 2024*