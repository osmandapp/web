---
source-hash: f9fda369841f870ed0f7bff2008618ae04b8b11b5d9458b488f463164740e1e7
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

*Контекстне меню треку* надає інформацію про *[Трек](../../personal/tracks/index.md)* як у текстовому, так і в [графічному](#altitude--speed-graphs) вигляді. Воно дозволяє додавати інформацію, вносити зміни, редагувати та виконувати різноманітні інші дії з треком. Ви можете отримати доступ до *контекстного меню треку*, просто торкнувшись потрібного треку на мапі або скориставшись меню *[Мої місця](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). Можливо, вам доведеться відкрити папку з треками та вибрати потрібний трек, торкнувшись його.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд контекстного меню треку Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд контекстного меню треку iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Огляд треку {#track-overview}

Коли ви торкаєтеся треку, відкривається перший екран *Контекстного меню треку* - вкладка *Огляд*. На цій вкладці ви можете знайти зведену інформацію про обраний трек (*[Інформаційна панель](#info-panel)*) та виконати найпоширеніші дії з треком за допомогою *[меню дій з треком](#track-actions)*. Ви можете побачити [опис та службову інформацію](#description-and-info) про ваш трек, якщо потягнете вкладку "Огляд" вгору.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Інформаційна панель {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд інформаційної панелі Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд інформаційної панелі iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

У верхній частині інформаційної панелі ви можете побачити назву треку та символ, що використовується для його позначення (*лише для Android*). Назву треку можна змінити за допомогою функції перейменування в [меню "Опції"](#options). Деякі треки (переважно *[Путівники](../../plan-route/travel-guides.md#manage-as-gpx-track)*) можуть мати короткий *[опис](#description-and-info)* та/або зображення під *назвою треку*. Стрілка показує *напрямок до найближчої точки треку* від [Моєї позиції](../../map/interact-with-map.md#my-location-and-zoom).  

Інформаційна панель також надає інформацію про наступне:

- *<Translate android="true" ids="distance"/>*. Показує довжину треку.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Відображає загальну суму підйомів та спусків під час поїздки.
- *<Translate android="true" ids="altitude_range"/>*. Вказує мінімальну та максимальну висоту на треку.  

:::note
Якщо ваш трек був створений в OsmAnd або будь-якому іншому додатку для відстеження (тобто його точки мають теги [`time` та `speed`](../../plugins/trip-recording#recorded-gpx-file)), інформаційна панель також міститиме інформацію про *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) або *<Translate ios="true" ids="total_time"/>* (*iOS*) (проміжок часу між початковою та кінцевою точками треку), *<Translate android="true" ids="shared_string_time_moving"/>* (сума часу під час руху).
:::  

### Дії з треком {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд контекстного меню треку Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд контекстного меню треку iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- Кнопки **Показати / Сховати**. Змінює видимість треку на мапі.
- [Вигляд](./appearance.md). Налаштуйте вигляд вашого треку.
- **Редагувати трек** (*Android*). Відкриває трек в інструменті [Планування маршруту](../../plan-route/create-route.md).
- **Експорт** (*iOS*). Дозволяє [експортувати трек](../../personal/tracks/manage-tracks.md#export).
- **Напрямки**. Відкриває трек у режимі *[Навігації](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)*.


### Опції {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Опції меню треку Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Опції меню треку iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Меню **Опції** дозволяє керувати та змінювати вибраний трек за допомогою різних інструментів та налаштувань.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Керує видимістю треку на мапі.
- **<Translate android="true" ids="shared_string_appearance"/>** – Відкриває [меню Вигляд](../tracks/appearance.md) для налаштування кольору, ширини та прозорості треку.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Запускає [навігацію по треку](../../navigation/setup/gpx-navigation.md), вирівнюючи ваш маршрут з вибраним треком.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Лише для Android*) – Об'єднує сегменти треку для заповнення прогалин.
- **<Translate android="true" ids="analyze_on_map"/>**. Відкриває інструмент [Аналіз на мапі](../tracks/index.md#analyze-track-on-map) для перевірки висоти, швидкості та відстані треку.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Лише для Android*) - Аналізує трек за [інтервалами](./track-context-menu.md#analyze-by-intervals) часу або відстані.

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Експортує вибраний трек у форматі GPX.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Завантажує](../../plugins/osm-editing.md#upload-gps-track) вибраний трек до OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Відкриває інструмент [Планування маршруту](../../plan-route/create-route.md) для зміни треку.
- **Дублювати трек** (*Лише для iOS*) – Створює та зберігає копію треку.
- **<Translate android="true" ids="rename_track"/>** – Дозволяє змінити назву треку.
- **<Translate android="true" ids="change_folder"/>** – Переміщує трек до іншої папки або створює нову.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Лише для Android*) - Дозволяє [фільтрувати точки треку](#gps-filter) для підвищення точності.
- **<Translate android="true" ids="altitude_correction"/>** (*Лише для Android*) - Щоб [отримати дані про висоту](#calculate-missing-elevation), [прив'яжіть свій трек до доріг](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) або розрахуйте її офлайн (потрібні [Карти рельєфу](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Лише для Android*) - [Симулює вашу позицію](../../plugins/development.md#gpx-track-simulation) за допомогою GPX-треку.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Видаляє трек.


### Опис та інформація {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Опис та інформація Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Опис та інформація Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Опис треку iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

</TabItem>

</Tabs>

Цей розділ вкладки *Огляд* відображає ***дані тегів*** та ***всю загальну інформацію***.

- **Опис**. Кнопка *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) використовується для редагування опису треку. Тег `desc`.

- **Загальне**. Містить інформацію про *розмір файлу GPX*, *папку файлу* та *дату створення* з тегом `time`.

- **Інформація**. Теги: *Ключові слова* - `keywords`, &nbsp;*Посилання* - `link`, &nbsp;*Діяльність* - `activities`.

- **Автор**. Теги: *Автор* - `author`, &nbsp;*Ім'я* - `name`, &nbsp;*Адреса електронної пошти* - `email`, &nbsp;*Посилання* - `link`.

- **Авторське право**. Теги: *Авторське право* - `copyright`, &nbsp;*Автор* - `author`, &nbsp;*Рік* - `year`, &nbsp;*Ліцензія* - `license`.

- **Додатково**. Усі теги з розділу ***розширень***:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

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


### Тип активності треку {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Тип активності треку](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Тип активності треку](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


Функція *Активність* в OsmAnd дозволяє позначати записані GPX-треки певними видами діяльності для подальшого аналізу та організації в папках.

- [Теги активності для GPX-треків](../../plugins/trip-recording.md#recording-settings). Під час запису GPX-треку ви можете призначити тип активності. Це тегування активності допомагає вам спочатку класифікувати треки.
- [Фільтр активності](../../personal/tracks/smart-folder.md#search-filter). Ви можете фільтрувати записані GPX-треки за активністю, що дозволяє зосередитися на пошуку певних типів записів, наприклад, усіх треків для велосипеда або піших прогулянок.
- [Керування типами активності](../../personal/tracks/manage-tracks.md#selection-mode). Ви можете змінити тип активності для вибраних папок або треків, використовуючи режим вибору на вкладці "Треки" меню "Мої місця".
- **Список активностей**. Категорії та групи активностей визначені в ресурсах OsmAnd. Для розробників та учасників список активностей підтримується у структурованому форматі за адресою [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), де детально описані доступні групи та типи активностей.


## Графіки висоти / швидкості {#altitude--speed-graphs}

На вкладці *<Translate android="true" ids="shared_string_gpx_track"/>* ви можете знайти інформацію про трек у графічному вигляді. За допомогою перемикача ви можете вибрати, які дані відображати на графіку: окремі дані про *[<Translate android="true" ids="altitude"/>](#altitude)*, про *[Швидкість](#speed)* (ця опція доступна лише для записаних треків) або відображати все разом (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Взаємодія з графіком:

- ***Поставити точку на графіку***. Якщо ви хочете побачити інформацію в певній точці треку, ви можете торкнутися будь-де на графіку, і з'явиться вказівник зі значеннями. Водночас на мапі з'явиться синій маркер, що вказує на це місце на треку.
- ***Збільшення/зменшення масштабу***. Ви можете використовувати [рухи двома пальцями](../../map/interact-with-map.md#gestures) для збільшення та зменшення масштабу для більш детального перегляду. Після збільшення масштабу ви можете переміщати графік вправо та вліво, що відповідає руху вперед та назад по маршруту.
- ***Додаткова інформація***. Права частина графіка містить дані про найнижчу, найвищу та середню висоту, нахил та швидкість. Внизу графіка ви можете побачити позначки відстані.


### Оглядова інформація {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Графіки контекстного меню треку Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Графіки контекстного меню треку iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Огляд** ви можете побачити такі параметри, як:

- *<Translate android="true" ids="distance"/>*. Сума загальної пройденої відстані на треку або довжина самого треку.
- *<Translate android="true" ids="shared_string_time_span"/>*. Проміжок часу між початковою та кінцевою точками треку.
- *<Translate android="true" ids="shared_string_start_time"/>* Точний час початку запису треку.
- *<Translate android="true" ids="shared_string_end_time"/>*. Час закінчення запису треку.

Активні **кнопки** надають доступ до таких дій, як:

- Кнопка **<Translate android="true" ids="analyze_on_map"/>** відкриває [меню Аналіз на мапі](../tracks/index.md#analyze-track-on-map) для треку.
- Кнопка **<Translate android="true" ids="shared_string_options"/>** відкриває меню з:

  - *Редагувати* відкриває трек в інструменті [Планування маршруту](../../plan-route/index.md).
  - *Видалити* дозволяє видалити вибраний елемент треку.
  - *Розділити інтервал* відкриває [функцію Розділити інтервал](#analyze-by-intervals) для треку.


### Швидкість {#speed}

:::note Лише записані треки
Ця вкладка може бути видимою лише на записаних треках. Точки на цьому типі треку мають теги **[`speed`](../../plugins/trip-recording#recorded-gpx-file)**.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Графік швидкості треку Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Графік швидкості треку iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

Графік **Швидкість** відображає такі показники, як:

- *<Translate android="true" ids="average_speed"/>*. Вказує середню швидкість під час поїздки.
- *<Translate android="true" ids="max_speed"/>*. Показує максимальну швидкість під час поїздки.
- *<Translate android="true" ids="moving_time"/>*. Показує загальний час під час поїздки лише в русі.
- *<Translate android="true" ids="distance_moving"/>*. Вказує скориговану відстань поїздки.


### Висота {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Графік висоти треку Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Графік висоти треку iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

Графік **Висота** відображає такі показники, як:

- *<Translate android="true" ids="average_altitude"/>*. Вказує середню висоту над рівнем моря на маршруті.
- *<Translate android="true" ids="altitude_range"/>*. Найвища та найнижча висота, зафіксована на маршруті.
- *<Translate android="true" ids="altitude_ascent"/>*. Сукупний набір висоти над рівнем моря вздовж маршруту.
- *<Translate android="true" ids="altitude_descent"/>*. Сукупна втрата висоти вздовж маршруту.

**Отримати дані про висоту.**  
Якщо на маршруті *немає інформації про висоту*, ви можете додати її наступними способами:

- *Кнопка "Розрахувати висоту" → [Використовувати прилеглі дороги](../../plan-route/create-route.md#get-elevation-data)*. Використовує офлайн-мапу для пошуку прилеглих доріг та даних про висоту. Це дозволяє налаштувати геометрію треку.
- [Використовувати Карти рельєфу](#calculate-missing-elevation). Використовує карти рельєфу для отримання даних про висоту. Геометрія треку залишається незмінною.


### Розрахунок відсутньої висоти {#calculate-missing-elevation}

:::note Підписка OsmAnd Pro
Функція розрахунку висоти офлайн доступна лише для [**передплатників OsmAnd Pro**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

Ця функція дозволяє розрахувати профіль висот для GPX-треку в автономному режимі для будь-якої місцевості між 70 градусами північної широти та 70 градусами південної широти на основі [даних Карти рельєфу](../../plugins/topography.md#download-maps). *Карти рельєфу (3D) повинні бути попередньо завантажені*.

1. Завантажте [Карти рельєфу (3D)](../../plugins/topography.md#download-maps) для потрібного регіону.
2. Якщо трек не містить даних про висоту, перейдіть до контекстного меню треку (*Контекстне меню треку → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), виберіть *Використовувати Карти рельєфу*, і після розрахунку ви отримаєте графік треку на основі даних рельєфу.  

    ![Графік висоти треку Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Графік висоти треку Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. Якщо ви створюєте маршрут за допомогою інструмента [Планування маршруту](../../plan-route/create-route.md#graph) методом *Пряма лінія* і на графіку немає даних про висоту, вам потрібно:
    - Натиснути *Отримати дані про висоту*, потім вибрати *Використовувати Карти рельєфу*.
    - Після розрахунку ви отримаєте повний графік висоти/нахилу вашого маршруту на основі даних рельєфу.  

  ![Графік висоти треку Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Графік висоти треку Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Точки / Шляхові точки {#points--waypoints}

Шляхові точки є одним з типів точок, доступних на мапі. Загалом, це можуть бути точки треку, які є частиною GPX-файлів. Детальний опис доступний у статті [точки на мапі](../../map/point-layers-on-map.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню треку Точки Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню треку Точки iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

У цій вкладці *Точки*:

- [Показувати дані точок треку](#display-custom-gpx-tags) та змінювати точки вашого треку (шляхові точки та точки маршруту), [видаляти їх та додавати](#points--waypoints) шляхові точки до треку.
- Створювати та змінювати [Групу (папку) точок](#waypoint-groups).


### Додати шляхову точку до треку {#add-waypoint-to-a-track}

Шляхові точки можна додати до поточного записуваного треку або до будь-якого треку зі списку [*Мої місця → Треки*](../../personal/tracks/manage-tracks.md):

- Використовуйте [контекстне меню мапи](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Шляхові точки автоматично відображаються, якщо вибраний трек увімкнено на мапі.
  - [Довгий дотик](../../map/map-context-menu.md#select-any-point-long-tap) до мапи в будь-якому обраному місці для створення шляхової точки.
  - Ви можете встановити інформацію про шляхову точку у відкритому [контекстному меню мапи](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Використовуйте кнопку [Додати шляхову точку](#points--waypoints) контекстного меню треку.

- Додайте шляхову точку як кнопку [Швидкої дії](../../widgets/quick-action.md#my-places).

### Створити шляхову точку {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Додати шляхову точку](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Додати шляхову точку](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Додати шляхову точку](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Додати шляхову точку](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Натисніть кнопку *Додати шляхову точку*, щоб відкрити екран створення шляхової точки (цей екран схожий на [Контекстне меню Улюбленого](../../personal/favorites.md#create)).

1. **Додайте** *Назву* шляхової точки, *Адресу* вибраного місця та *Опис* для неї (необов'язково).
2. **Виберіть** Групу.

    - Виберіть раніше створені категорії груп або створіть нову.
    - Створіть назву та вигляд для нової групи шляхових точок. Це також називається *новою категорією* в додатку.
    - **Іконка**, **колір іконки** та **форма** будуть використовуватися для всіх нових шляхових точок, доданих до групи.

3. Налаштування **вигляду**:

    - Виберіть [**іконку**](../../personal/favorites.md#favorite-icons) зі списку всіх іконок категорій POI.
    - Виберіть **Колір** іконки.
    - Потім виберіть **Форму** іконки: *Коло, Восьмикутник, Квадрат*.

4. **Замініть** іншу точку цією, якщо потрібно.  


### Дії з групами {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню групи треку Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню групи треку iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

*Меню з трьома крапками* ( &#8285; ) відкриває *Меню групи* шляхових точок.

**Дії:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Дозволяє відображати або не відображати шляхові точки групи на мапі. Або ви можете використовувати [кнопку на екрані](#points--waypoints) для відображення або приховування шляхових точок групи на мапі.
- **<Translate android="true" ids="shared_string_rename"/>** - Змінити назву групи.
- **<Translate android="true" ids="change_default_appearance"/>** - Змінити параметри відображення для групи шляхових точок.
- **<Translate android="true" ids="add_group_to_markers"/>** або **Видалити** (*Лише для Android*) - Перемістити шляхові точки групи до списку [Маркерів на мапі](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Лише для Android*) - Перемістити шляхові точки групи до [Улюблених](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>** (*Лише для Android*) - Створює маршрут між шляховими точками. Перша та остання точки стають початком та кінцем маршруту, а решта перетворюються на проміжні точки.
- **<Translate android="true" ids="shared_string_delete"/>** - Видалити групу шляхових точок.


### Групи шляхових точок {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Мапа групи треку Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Мапа групи треку Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Мапа групи треку iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Мапа групи треку iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Керуйте видимістю груп на мапі: якщо ви сховаєте один трек, вся група також буде схована.  

Ви можете вмикати або вимикати шляхові точки групи на мапі за допомогою кнопки у верхньому правому куті контекстного меню треку на мапі. Натисніть її та виберіть потрібну дію.

### Відображення користувацьких тегів GPX {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Точки](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Точки](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Приклад XML-коду тегів шляхової точки</summary>

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

<summary>Приклад XML-коду тегів точки маршруту</summary>

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
| `lat` | **Широта** - одна з географічних координат, за якою можна визначити місцезнаходження. |
| `lon` | **Довгота** - інша з географічних координат, за якою можна визначити місцезнаходження. |
| `time` | **Часова мітка** - дата та час, коли точка була записана. |
| `name` | **Назва** - назва точки. Дозволені будь-які символи.  |
| `desc` | **Опис** - містить додаткову інформацію про точку. |
| `type` | **Вибрати групу** - назва папки OsmAnd, в якій збережена ця шляхова точка. |
| `cmt` | **Коментар** - короткий коментар до точки. |
| `link` | **Посилання** - посилання на будь-які джерела. |
| `ele` | **Висота** - висота точки. |


**Розширення:**  

| Розширення | Опис |
| --- | --- |
| `osmand:icon` | **Іконка** - назва вибраної вами іконки. |
| `osmand:color` | **Колір** - колір у форматі HEX.  |
| `osmand:background` | **Фон** - форма іконки, наприклад, коло, восьмикутник або квадрат. |
| `osmand:country` | **Країна** - назва країни.  |
| `osmand:address` | **Адреса** - адреса.  |
| `osmand:postcode` | **Поштовий індекс** - поштовий індекс.  |
| `osmand:telephone` | **Телефон** - номер телефону.  |
| `osmand:state` | **Штат** - назва штату.  |
| `osmand:start_date` | **Дата початку** - дані розкладу точки.  |

Шляхові точки записуються разом з треком у [файл GPX](../../../technical/osmand-file-formats/osmand-gpx.md). Кожна з цих шляхових точок має свій набір тегів для опису. Усі теги, безпосередньо пов'язані з описом шляхових точок, які можна редагувати безпосередньо в додатку OsmAnd, перераховані в цьому розділі.  
Щоб змінити опис шляхової точки, ви можете піти одним з наступних шляхів:
  
1. Знайдіть потрібний трек у списку вкладки *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*.
2. Торкніться треку на мапі, якщо він включений до [списку видимих](../tracks/index.md#display-tracks-on-the-map).
3. Торкніться потрібної шляхової точки, якщо вона [видима](../../personal/tracks/manage-tracks.md#track-menu) на мапі.  

    Потім у [Контекстному меню треків](./track-context-menu.md) торкніться *точки*, поля потрібної папки з доступними шляховими точками та шляхової точки, яку ви шукаєте. Виберіть меню *Дії →* **Редагувати шляхову точку GPX** та внесіть зміни. Ви не можете змінити дату створення точки, *часову мітку*, в додатку.  

**Теги зручностей**, які описують додаткову інформацію, таку як години роботи або номер телефону, специфічні для POI, беруть цю інформацію з даних OpenStreetMap або даних, які ви ввели при створенні POI. Ви можете редагувати такі теги та [користувацькі теги](#display-custom-gpx-tags) лише в коді файлу GPX, який ви можете відкрити будь-яким текстовим редактором на вашому пристрої.


## Розділити інтервал {#analyze-by-intervals}

<InfoAndroidOnly />

![Track split by Android](@site/static/img/personal/tracks/split_by_1.png) 

Опція **Аналізувати за інтервалами** дозволяє розділити трек на ділянки та переглянути детальну статистику для кожної частини маршруту. Треки можна розділити за параметрами ***відстані***, ***часу*** або ***підйому/спуску***. 

Щоб відкрити цю опцію:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → виберіть потрібний режим розділення 


### Розділити за відстанню {#split-by-distance}

![Track split by distance tab](@site/static/img/personal/tracks/split_by_2_tab.png) ![Track split by distance map](@site/static/img/personal/tracks/split_by_2_map.png)  

Ця опція дозволяє розділити трек на фіксовані інтервали відстані та проаналізувати детальну статистику для кожного сегмента. Доступні інтервали відстані: ***20 м***, ***50 м***, ***100 м***, ***200 м***, ***500 м***, ***1 км***, ***2 км***, ***5 км*** та ***10 км***. Після вибору інтервалу відстані трек відображається як список сегментів. 

Для кожного сегмента ви можете переглянути:
- пройдену відстань.
- проміжок часу.
- середню, мінімальну та максимальну висоту.
- підйом та спуск.
- час у русі.
- середню та максимальну швидкість.

Коли ви торкаєтеся будь-якого сегмента у списку, на мапі відображається повний трек з його інтервалами та відкривається контекстне меню для треку внизу екрана.


### Розділити за часом {#split-by-time}

![Track split by time tab](@site/static/img/personal/tracks/split_by_3_tab.png) ![Track split by time map](@site/static/img/personal/tracks/split_by_3_map.png) 

Опція **Розділити за часом** ділить трек на інтервали однакової тривалості. Ви можете вибрати між ***1 хв***, ***2 хв***, ***2.5 хв***, ***5 хв***, ***10 хв***, ***15 хв***, ***30 хв*** та ***60 хв***. Спосіб відображення інтервалів, надана статистика для кожного сегмента та їх вигляд на мапі такі ж, як у розділі [Розділити за відстанню](#split-by-distance).


### Розділити за підйомом/спуском {#split-by-uphill-downhill}

![Track split by uphill/downhill tab](@site/static/img/personal/tracks/split_by_4_tab.png) ![Track split by uphill/downhill map](@site/static/img/personal/tracks/split_by_4_map.png) 

Ця опція ділить трек на сегменти на основі змін висоти. Кожен інтервал класифікується як ***підйом***, ***спуск*** або ***рівнина***. Спосіб відображення інтервалів, надана статистика для кожного сегмента та їх вигляд на мапі також такі ж, як у розділі [Розділити за відстанню](#split-by-distance).


## GPS-фільтр {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![Екран GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

Цей фільтр дозволяє покращити статистику вашого треку, виключаючи непотрібні або невірні дані. Ви можете відфільтрувати точки треку, які не відповідають параметрам вашого треку, і в результаті отримати більш точний графік та візуальну лінію маршруту без спотворень або шуму запису. Ви можете вносити зміни за допомогою таких фільтрів, як *Згладжування*, *Швидкість*, *Висота* та *Точність GPS*, які приховують відфільтровані точки з поточного треку. Крім того, в меню *Статистика* ви можете перевірити, як ваші зміни відображаються на графіку, перш ніж зберігати їх. Ви також можете *Скинути до оригіналу* та *Зберегти як копію* вашого треку в цьому фільтрі, не зберігаючи оригінал.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

Сторінка додатка GPS-фільтр для Android включає наступне:  

- Мапа зі збереженим треком та додатковою кнопкою *Моє місцезнаходження треку* (вона вирівнює трек по центру мапи).
- Кнопки *Оновити* та *Меню* вгорі (*Меню* відкриває поле *Дія* внизу сторінки).
- Блоки *Фільтр*, *Статистика*, *Дія*.  


### Меню фільтра {#filter-menu}

У цьому меню ви можете змінити деякі параметри вашого треку, такі як *Згладжування*, *Швидкість*, *Висота* або *Точність GPS* за допомогою фільтрів. Меню розділене на *частину Точки* та *частину Дії*.

| ***Точки*** |
|:------------|
|Ця частина показує кількість точок після фільтрації та загальну кількість точок на вибраному треку до застосування фільтрів.|
|![Номери точок екрану GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Дії*** |
|*Згладжування*. Встановлює порогову відстань між точками. Точки треку, що знаходяться на відстані, меншій за цю, від останньої видимої точки, приховуються. Усі точки на треку, що знаходяться на відстані одна від одної меншій за відстань, вибрану фільтром, будуть приховані. Точки треку відраховуються від останньої видимої точки. Зверніть увагу, що високі пороги можуть надмірно спростити геометрію треку.|
|![Номери згладжування GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Швидкість*. На графіку та мапі відображаються лише точки треку, що відповідають вибраному інтервалу швидкості, інші приховуються.|
|![Номери швидкості GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Висота*. На графіку та мапі відображаються лише точки треку, що відповідають вибраному інтервалу висоти, інші приховуються.|
|![Номери висоти GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*Точність GPS*. Встановлює максимально допустиме значення для HDOP. Точки з вищим значенням приховуються.|
|![Номери точності GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Статистика {#statistics}

![Графік GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

Вкладка "Статистика" відображає інформацію про **змінений** трек, тобто трек без відфільтрованих значень. Вона відображається в блоках статистики та даних графіка.
  
- Частина *Дані* показує статистику, подібну до [меню Фільтр](#filter-menu).  
- Частина *Графік* відображає три типи графіків за параметрами: Огляд, Висота та Швидкість. Цей функціонал є копією [Графіка треку](#altitude--speed-graphs).

### Дії {#actions}

![Дія GPS-фільтра Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

Список дій доступний внизу вкладки **Фільтр** або **Статистика**. OsmAnd застосовує всі зміни, внесені до треку, без оновлення файлу, але ви можете зберегти зміни вручну.

- *<Translate android="true" ids="reset_to_original"/>*. Дозволяє повернути параметри до початкового стану.  
- *<Translate android="true" ids="save_as_copy"/>*. Дозволяє зберегти трек як новий.
- *<Translate android="true" ids="save_changes_into_file"/>*. Дозволяє перезаписати трек з новими параметрами.  


## Пов'язані статті {#related-articles}

- [GPX-треки](../../personal/tracks/manage-tracks.md)
- [Треки на мапі](./track-context-menu.md)
- [Навігація по треку](../../navigation/setup/gpx-navigation.md)
- [Планування маршруту](../../plan-route/index.md)
- [Плагін "Запис поїздки"](../../plugins/trip-recording.md)
- [Аналіз на мапі](../tracks/index.md#analyze-track-on-map)