---
source-hash: a2c574750d2fad3f5b86fe34399e253d3561dee9bc81b7ec97490f6574b7c609
title:  Треки
sidebar_position: 2
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
OsmAnd має багато потужних функцій для відображення різноманітних маршрутів на мапі. Маршрути можна створювати в рамках Навігації, створювати за допомогою Планування маршруту, імпортувати як треки GPX, записувати за допомогою плагіна Запис поїздки або переглядати та вибирати з даних OpenStreetMap.


## Типи треків {#types-of-tracks}

[Треки (GPX)](#display-tracks-on-the-map) - записана або запланована поїздка, збережена у [форматі GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Цей тип маршруту можна імпортувати із зовнішнього джерела, створити в додатку або записати самостійно. GPX може містити один з 3 різних типів даних або всі з них:

- Трек у вигляді лінії (***Геометрія***). Файл містить масив точок ```<trkpt>```, кожна точка має місцезнаходження та, опціонально, час, швидкість, висоту та інші атрибути. Ці треки відображаються на мапі суцільними лініями.
- Трек у вигляді маршруту (***Маршрут***). Файл містить масив точок ```<rtept>```, кожна точка описана як проміжна точка маршруту. Спосіб з'єднання точок у маршруті залежить від налаштувань: це можуть бути невеликі сегменти маршруту або прямі лінії. Ці треки відображаються на мапі пунктирними лініями.
- Шляхові точки (***Точки***). Файл містить точки ```<wpt>``` з атрибутами. Шляхові точки відображаються на мапі у вигляді круглих точок. Ви можете натиснути на них, щоб отримати додаткову інформацію.

OsmAnd може створювати треки з 1–3 комбінаціями. [Планування маршруту](../../plan-route/create-route.md) створює трек з ***Геометрією*** та ***Маршрутом***, якщо ви збережете його як ***Спрощений трек***, залишиться лише ***Геометрія***. [Запис треку](../../plugins/trip-recording.md#new-track-recording) створює лише ***Геометрію***, але ви також можете додати до нього ***Точки*** через контекстне меню.


## Відображення треків на мапі {#display-tracks-on-the-map}

Ви можете керувати видимістю треків, обираючи, які з них відображати чи приховувати, з кількох меню: [меню Мої місця](#my-places), [меню Налаштувати мапу](#configure-map) та [Контекстного меню треку](#track-context-menu). Ця гнучкість дозволяє швидко перемикатися між різними треками, гарантуючи, що на мапі в будь-який момент часу будуть видимі лише потрібні треки.

### Налаштувати мапу {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Налаштування мапи треків Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Налаштування мапи треків Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Налаштування мапи треків iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Налаштування мапи треків iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Опція *Налаштувати мапу* дозволяє швидко керувати відображенням усіх нещодавно показаних треків, дозволяючи вмикати або вимикати видимість для групи треків. Сортування треків відповідає порядку, налаштованому у вкладці *Мої місця → Треки*. Ви можете отримати доступ до [Меню треку](../../personal/tracks/manage-tracks.md#track-menu), довготривало натиснувши на елемент треку. Крім того, в цьому меню ви можете одночасно змінювати вигляд кількох вибраних треків.

### Мої місця {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → довге натискання на обраний GPX трек → Показати на мапі*

![Контекстне меню треку в iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

У [Мої місця *→* вкладка Треки](../../personal/tracks/manage-tracks.md#manage-tracks), щоб відобразити трек на мапі, вам потрібно:

- *Android* - натисніть *меню з трьома крапками* у полі з потрібним треком.
- *iOS* - довготривало натисніть на потрібний трек у списку.


### Контекстне меню треку {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд контекстного меню треку Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд контекстного меню треку iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Коли ви вибираєте трек на мапі або відкриваєте [контекстне меню треку](./track-context-menu.md) після запису або імпорту треку, ви можете керувати його видимістю на мапі. Просто використовуйте кнопки *Показати* або *Сховати*, щоб відобразити або прибрати трек з мапи.


## Аналіз треку на мапі {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Натисніть на трек → вкладка Трек → <Translate android="true" ids="analyze_on_map"/>*  

![Меню треку аналіз на мапі Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Меню треку аналіз на мапі відстань Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Натисніть на трек → вкладка Трек → <Translate ios="true" ids="analyze_on_map"/>*  

![Меню треку аналіз на мапі](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Меню треку аналіз на мапі ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Цей інструмент надає детальний аналіз даних [треку](../../map/tracks/track-context-menu.md#options) за допомогою графіків та мап.

- **Дані графіка (вісь Y)** відображають: *Висоту*, *Нахил*, *Швидкість*, [*Дані зовнішніх датчиків*](../../plugins/external-sensors.md) та комбінації до двох опцій, якщо вони містяться в даних треку.
- **Вимір графіка (вісь X)** представляє: *Відстань*, *Час* та *Час доби*.
- **Взаємодія натисканням/ковзанням**. Натисніть на графік, щоб відобразити інформацію про конкретну точку на треку. Ковзання по графіку виділяє відповідне місце на мапі та показує деталі в інформаційній панелі.
- **Масштабування**. Використовуйте [жест двома пальцями](../../map/interact-with-map.md#gestures), щоб масштабувати графік для більш детального перегляду.


### Слідувати за моїм місцезнаходженням {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню треку аналіз на мапі 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Меню треку аналіз на мапі 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню треку аналіз на мапі](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Меню треку аналіз на мапі ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Натисніть кнопку [Моє місцезнаходження](../../map/interact-with-map.md#my-location-and-zoom), щоб синхронізувати вигляд мапи та графік з вашим місцезнаходженням.

- **Масштаб графіка** залишається незмінним, а **інформаційна панель** фіксується на 1/4 зліва.
- Під час руху **графік буде ковзати** зліва направо, відображаючи інформацію попереду вашого треку.
- На цьому екрані не відображаються інші віджети.
- Ця функція корисна для піших прогулянок та їзди на велосипеді під час навігації по треку.  


## Пов'язані статті {#related-articles}

- [Вигляд треку](./appearance.md)
- [Контекстне меню треку](./track-context-menu.md)
- [Навігація по треку](../../navigation/setup/gpx-navigation.md)
- [Маршрути на мапі](https://docs.osmand.net/blog/routes) (стаття в блозі)
- [Налаштувати мапу](../../map/configure-map-menu.md)  
- [GPX-треки](../../personal/tracks/index.md)  
- [Планування маршруту](../../plan-route/index.md)  
- [Запис поїздки](../../plugins/trip-recording.md)