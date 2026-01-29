---
source-hash: efbd8cb409a1e8ef85e36e19d96eeb7a90fa212c810385f1ad6562e2e09d6d40
sidebar_position: 9
sidebar_label:  Планування маршруту
title: Планування маршруту на вебсайті
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

<!--
<InfoIncompleteArticle/>
-->


## Огляд {#overview}

Веб-планувальник маршрутів OsmAnd дозволяє створювати навігаційні маршрути, планувати треки та керувати локальними файлами безпосередньо з вашого браузера. Цей веб-інструмент корисний для створення детальних маршрутів подорожей, які ви можете синхронізувати з вашим додатком або ділитися з іншими.


<!--
## Navigation Route {#navigation-route}

To create a navigation route, follow these steps:

- **Right-click** on the map to add waypoints:

  - *Navigate from*. Set the starting point.
  - *Navigate to*. Set the destination.
  - *Navigate via*. Add intermediate points if needed.

- After setting the start and end points, the route will be displayed on the map.

- In the **Route** block:

  - Move the start and end points if needed.
  - Edit the waypoints and choose the desired route type (e.g., car, bicycle, walking).

  ![OsmAnd Web Create Route](@site/static/img/web/navigation.png)

- Select the appropriate **Route Profile** for different navigation options.

  ![OsmAnd Web Create Route](@site/static/img/web/profile_type.png)

- Click on the orange circles along the route to view detailed navigation instructions.

  ![OsmAnd Web Create Route](@site/static/img/web/nav_instr.png)

- To share the route, copy the URL. Example: [https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352](https://osmand.net/map/?start=43.792163,11.215324&finish=43.852850,11.121941&via=43.812605,11.134644&type=osmand&profile=bicycle#13/43.8200/11.1352)

-->


## Створення нового маршруту {#create-new-route}

Існує два способи розпочати новий маршрут у Плануванні маршруту. Перший варіант — безпосередньо з карти: клацніть правою кнопкою миші в будь-якому місці карти та виберіть **Створити новий маршрут**. Другий варіант — з лівої панелі: клацніть кнопку **Створити трек**.

Після створення маршруту додавайте точки безпосередньо на карті. Кожен клік розміщує наступну точку, і планувальник будує маршрут між точками.

![OsmAnd Web Create New Route](@site/static/img/web/create_new_route.png)

### Імпорт треку {#import-track}

Якщо у вас вже є файл треку, ви можете імпортувати його в Планування маршруту та продовжити роботу з ним у Веб-планувальнику. Клацніть кнопку **Імпортувати трек** і виберіть GPX-файл з вашого комп'ютера. Після завантаження трек з'являється у вашому локальному списку та відкривається в планувальнику, щоб ви могли переглянути його на карті та продовжити редагування та керування в панелях треку.

### Локальні файли {#local-files}

Усі маршрути та треки, які ви створюєте або імпортуєте в Плануванні маршруту, додаються до списку Локальні в лівій панелі. Це полегшує зберігання кількох GPX-файлів в одному місці та перемикання між ними під час планування.

Кожен елемент у списку має перемикач, який дозволяє швидко показати або приховати трек на карті. Виберіть трек зі списку, щоб відкрити його в планувальнику та продовжити роботу з ним. 

![OsmAnd Web Create New Route](@site/static/img/web/local_files.png)


## Керування треком {#manage-track}

Коли ви створюєте або імпортуєте маршрут у Плануванні маршруту, відкривається вертикальна панель треку. Використовуйте цю панель, щоб змінити профіль маршрутизації та керувати маршрутом. Клацніть елемент керування профілю, щоб відкрити діалог **Змінити профіль**, виберіть потрібний профіль (наприклад, Автомобіль, Велосипед або Піший) і виберіть, як його застосувати: *Наступні сегменти* застосовує профіль лише до нових частин, доданих від цієї точки вперед, тоді як *Всі сегменти* перераховує весь маршрут з вибраним профілем.

З панелі треку ви також можете виконувати поширені дії з файлами. Ви можете **Зберегти в хмару**, щоб зберегти маршрут для подальшого використання, **Завантажити GPX**, щоб експортувати його як файл, **Закрити трек**, щоб припинити редагування, або **Видалити трек**, щоб видалити його з вашого локального списку. Ці дії також доступні з відповідних елементів керування в [панелі Інфо](#info-panel).

![OsmAnd Web Manage Track](@site/static/img/web/manage_track_new.png) ![OsmAnd Web Manage Track](@site/static/img/web/change_profile.png)


## Панелі деталей треку {#track-details-panels}

Меню локального треку включає три панелі: **Інфо**, **Трек** та **Шляхові точки**. Використовуйте їх для перегляду інформації про трек та керування точками маршруту та шляховими точками.

### Панель Інфо {#info-panel}

Панель Інфо підсумовує вибраний трек і показує ключові дані маршруту та висоти. Вона включає швидкий огляд статистики маршруту, плюс графіки та додатковий аналіз треку на основі доступних даних карти.

Розділ підсумку показує:

- Points — the number of route points used to build the route.
- Distance — the total route length.
- Uphill / downhill — total ascent and total descent along the route.
- Elevation (min/avg/max) — elevation statistics for the route.
- If elevation data is missing or needs to be updated, use Elevation (Satellite) → recalculate to rebuild elevation using satellite data (when available).

Нижче підсумку панель надає графіки:

- Elevation — an elevation profile of the route.
- Slope — a slope graph showing gradient changes along the track.

Для додаткових деталей треку відкрийте розділи аналізу:

- Surface — shows surface types along the route based on OSM data.
- Smoothness — shows segment smoothness based on OSM tags.

Поширені дії з треком, такі як збереження, завантаження, закриття та видалення, також доступні в цій панелі.

![OsmAnd Web Info Panel](@site/static/img/web/info_panel.png) ![OsmAnd Web Manage Track](@site/static/img/web/info_panel_2.png)

### Панель Трек {#track-panel}

Панель Трек показує список точок маршруту, використаних для побудови треку. Використовуйте її для перегляду та редагування структури маршруту: перетягуйте точки, щоб переставити їх, видаляйте точки за допомогою іконки видалення або використовуйте Clear points, щоб видалити всі точки та почати заново.

![OsmAnd Web Track Panel](@site/static/img/web/track_panel.png)

### Панель Шляхові точки {#waypoints-panel}

Панель Шляхові точки використовується для перегляду та керування шляховими точками для вибраного треку. Шляхові точки можна додавати з контекстного меню карти — клацніть правою кнопкою миші на карті та виберіть опцію **Add waypoint**, потім заповніть деталі шляхоположення (такі як назва, іконка та колір) і збережіть його.

У списку Шляхові точки ви можете контролювати, чи показуються шляхоположення на карті, та видаляти окремі шляхоположення за потреби. Щоб видалити всі шляхоположення з треку одразу, використовуйте *Clear all waypoints*.

![OsmAnd Web Waypoints Panel](@site/static/img/web/waypoints_panel.png)


## Пов'язані статті {#related-articles}

- [Plan a Route](../plan-route/create-route.md)
- [Travel Guides](../plan-route/travel-guides.md)
- [Navigation](../web/web-navigation.md)