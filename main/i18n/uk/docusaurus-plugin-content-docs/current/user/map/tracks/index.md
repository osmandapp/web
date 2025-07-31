---
source-hash: 6aec601164666a3a81eb5d95bdecc9963a7c4f7ddbac1cea35f42845786713b8
title: Треки
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

OsmAnd має багато потужних функцій для відображення різних маршрутів на карті. Маршрути можуть бути побудовані як частина Навігації, створені за допомогою функції Планування маршруту, імпортовані як GPX-треки, записані за допомогою плагіна Запис поїздки або переглянуті та вибрані з даних OpenStreetMap.

## Типи треків {#types-of-tracks}

[Треки (GPX)](./#display-tracks-on-the-map) — записана або запланована поїздка, збережена у [GPX-форматі](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Цей тип маршруту може бути імпортований із зовнішнього джерела, створений у застосунку або записаний вами. GPX може містити один із 3 різних типів даних або всі з них:

- Трек як лінія (***Геометрія***). Файл містить масив точок ```<trkpt>```, кожна точка має розташування та додаткові атрибути: час, швидкість, висоту та інші. Ці треки відображаються на карті суцільними лініями.
- Трек як маршрут (***Маршрут***). Файл містить масив точок ```<rtept>```, кожна точка описується як проміжна точка маршруту. Залежить від того, як точки в маршруті повинні бути з'єднані: як невеликі сегменти маршруту або прямою лінією. Ці треки відображаються на карті пунктирними лініями.
- Маршрутні точки (***Точки***). Файл містить точки ```<wpt>``` з атрибутами. Маршрутні точки відображаються на карті як круглі точки. Ви можете натиснути на них, щоб отримати додаткову інформацію.

OsmAnd може створювати треки з 1–3 комбінаціями. [Планування маршруту](../../plan-route/create-route.md) створює трек з ***Геометрією*** та ***Маршрутом***, якщо ви збережете його як ***Спрощений трек***, залишиться лише ***Геометрія***. [Запис треку](../../plugins/trip-recording.md#new-track-recording) створює лише ***Геометрію***, але ви також можете додати до нього ***Точки*** через контекстне меню.

## Відображення треків на карті {#display-tracks-on-the-map}

Ви можете керувати видимістю треків, вибираючи, які з них відображати або приховувати, з кількох меню: меню [Мої місця](#my-places), меню [Налаштувати карту](#configure-map) та [Контекстне меню треку](#track-context-menu). Ця гнучкість дозволяє швидко перемикатися між різними треками, забезпечуючи, що на карті завжди відображаються лише відповідні треки.

### Налаштувати карту {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Налаштувати карту треків Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png) ![Налаштувати карту треків Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Налаштувати карту треків iOS](@site/static/img/personal/tracks/follow_track_1_ios.png) ![Налаштувати карту треків iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

Опція *Налаштувати карту* дозволяє швидко керувати відображенням усіх нещодавно відображених треків, дозволяючи перемикати видимість для групи треків. Сортування треків відбувається відповідно до порядку, налаштованого на вкладці *Мої місця → Треки*. Ви можете отримати доступ до [Меню треку](../../personal/tracks/manage-tracks.md#track-menu), довго натиснувши на елемент треку. Крім того, в цьому меню ви можете одночасно змінити вигляд кількох вибраних треків.

### Мої місця {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → довге натискання на обраний GPX-трек → Показати на карті*

![Контекстне меню треку в iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

У [Мої місця *→* вкладка Треки](../../personal/tracks/manage-tracks.md#manage-tracks) для відображення треку на карті потрібно:

- *Android* — натиснути *меню з трьома крапками* у полі з потрібним треком.
- *iOS* — довго натиснути на потрібний трек у списку.

### Контекстне меню треку {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд контекстного меню треку Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд контекстного меню треку iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

Коли ви вибираєте трек на карті або відкриваєте [контекстне меню треку](./track-context-menu.md) після запису або імпорту треку, ви можете керувати його видимістю на карті. Просто використовуйте кнопки *Показати* або *Приховати*, щоб відобразити або видалити трек з вигляду карти.

## Аналіз треку на карті {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Натисніть трек → Вкладка Трек → <Translate android="true" ids="analyze_on_map"/>*

![Меню треку аналізувати на карті Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png) ![Меню треку аналізувати на карті відстань Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Натисніть трек → Вкладка Трек → <Translate ios="true" ids="analyze_on_map"/>*

![Меню треку аналізувати на карті](@site/static/img/personal/tracks/track_analyze_ios.png) ![Меню треку аналізувати на карті](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

Цей інструмент надає детальний аналіз даних [треку](../../map/tracks/track-context-menu.md#options) за допомогою графіків та карт.

- **Дані графіка (вісь Y)** відображають: *Висоту*, *Нахил*, *Швидкість*, [Дані зовнішнього датчика](../../plugins/external-sensors.md) та комбінації до двох опцій, якщо вони містяться в даних треку.
- **Вимір графіка (вісь X)** представляє: *Відстань*, *Час* та *Час доби*.
- **Взаємодія натискання/проведення**. Натисніть на графік, щоб відобразити інформацію про певну точку на треку. Проведення по графіку виділяє відповідне місце на карті та показує деталі в інформаційній панелі.
- **Масштабування**. Використовуйте [жест двома пальцями](../../map/interact-with-map.md#gestures) для масштабування графіка для більш детального перегляду.

### Слідувати за моїм розташуванням {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню треку аналізувати на карті 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Меню треку аналізувати на карті 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню треку аналізувати на карті](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png) ![Меню треку аналізувати на карті](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Натисніть кнопку [Моє місцезнаходження](../../map/interact-with-map.md#my-location-and-zoom), щоб синхронізувати вигляд карти та графік з вашим місцезнаходженням.

- **Масштаб графіка** залишається незмінним, а **інформаційна панель** фіксована на 1/4 ліворуч.
- Під час руху **графік буде ковзати** зліва направо, відображаючи інформацію попереду вашого треку.
- На цьому екрані не відображаються інші віджети.
- Ця функція корисна для піших та велосипедних прогулянок під час навігації по треку.

## Пов'язані статті {#related-articles}

- [Вигляд треку](./appearance.md)
- [Контекстне меню треку](./track-context-menu.md)
- [Навігація за треком](../../navigation/setup/gpx-navigation.md)
- [Маршрути на карті](https://docs.osmand.net/blog/routes) стаття в блозі
- [Налаштувати карту](../../map/configure-map-menu.md)
- [GPX-треки](../../personal/tracks/index.md)
- [Планування маршруту](../../plan-route/index.md)
- [Запис поїздки](../../plugins/trip-recording.md)

> *Останнє оновлення: листопад 2024*