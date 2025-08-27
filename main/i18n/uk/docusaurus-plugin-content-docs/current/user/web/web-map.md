---
source-hash: bb8e4e2c75672dd295546920006b2dea676a089f909e84413e2fdce6b73b5d03
sidebar_position: 3
sidebar_label: Map
title: Глобальна карта на вебсайті
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


<InfoIncompleteArticle/>

:::info
Сайт *[osmand.net/map](https://osmand.net/map/)* наразі розробляється та тестується.
**Тому макет та робота деяких функцій на сайті можуть відрізнятися від описаних у цій статті.**

Ми створили [тему для обговорення](https://github.com/osmandapp/OsmAnd/discussions/16567) на нашому GitHub, щоб ви могли залишити там відгук.
:::


## Огляд {#overview}

Веб-карта OsmAnd — це глобальна карта, заснована на даних [OpenStreetMap (OSM)](https://www.openstreetmap.org/). Вона дозволяє користувачам переглядати власні дані, такі як треки та вибрані об'єкти, створювати навігаційні маршрути для будь-якого профілю та отримувати доступ до додаткових функцій, таких як погода, публічні GPX-треки, POI та зображення Wikimedia. Досліджуйте та налаштовуйте свої дані безпосередньо у браузері.

![OsmAnd Web all](@site/static/img/web/web_map_all.png)


## Контекстне меню карти {#map-context-menu}

Щоб відкрити його, клацніть правою кнопкою миші будь-де на карті. Це меню включає наступні дії:

- **Де я** – Швидко знайдіть своє поточне місцезнаходження на карті. Ця функція відображає найближчі адреси до вибраної точки на карті.
- **Відкрити погоду** – Доступ до [меню Погода](#weather-on-the-web) для перегляду деталей погоди.
- **Створити новий маршрут** – Відкриває інструмент [*Планування маршруту*](../web/planner.md#create-track-and-local) з вибраним місцем як початковою або кінцевою точкою.
- **Додати вибране** – Дозволяє створити та зберегти [вибране](../web/web-userdata.mdx#add--edit-favorite) у будь-якій точці на карті для легкого доступу.
- **Напрямки від** – Встановлює вибрану точку як [початкове місце](../web/planner.md#navigation-route) для навігації.
- **Напрямки до** – Встановлює вибрану точку як [пункт призначення для навігації](../web/planner.md#navigation-route).
- **Копіювати координати** – Копіює координати вибраної точки для зовнішнього використання.
- **Додати шпильку** – Розміщує шпильку для позначення місця на карті. ([Приклад](https://osmand.net/map/?pin=37.546483,-77.446446#15/37.5458/-77.4470))
- **Показати регіони** – Відображає регіони, пов'язані з вибраним місцем.

![Map Context menu](@site/static/img/web/map_context_menu.png)


## Погода в Інтернеті {#weather-on-the-web}

OsmAnd Web надає інформацію про погоду з двох джерел прогнозу:

- **GFS (за замовчуванням)**
- **ECMWF**

Щоб переключитися між цими джерелами прогнозу, натисніть **кнопку парасольки** в меню Погода.

***Особливості меню погоди:***

- **Поточні дані про погоду**: Відображає ваші координати разом з наступними даними:

  - Температура.
  - Опади.
  - Вітер.
  - Атмосферний тиск.
  - Хмарність.

- **Налаштування часу**: Змініть дату та час за допомогою **інструменту часу** в меню Погода, щоб переглянути погоду на певний момент.

***Погодні шари на карті:***

- Використовуйте **кнопку шарів**, щоб вибрати та увімкнути погодні шари, такі як:

  - Температура.
  - Тиск.
  - Вітер.
  - Хмарність.
  - Опади.

***Перегляд прогнозів:***

- Прогнози погоди доступні на **7 днів**.
- Оновлення прогнозів надаються з **3-годинним кроком** для детального аналізу.

Щоб отримати доступ до цих функцій або налаштувати їх, використовуйте меню зліва або справа в інтерфейсі.

  ![OsmAnd Web Weather](@site/static/img/web/web_weather.png)

***7-денний прогноз***:

Натисніть на дані прогнозу в меню, щоб переглянути **7-денний прогноз** для вашого місцезнаходження. Прогноз доступний у:

- **Графічному форматі**
- **Списковому форматі**

  ![OsmAnd Web Weather](@site/static/img/web/web_7day.png)


## Налаштувати меню карти {#configure-map-menu}

Меню «Налаштувати карту» дозволяє керувати параметрами відображення даних карти, таких як шари POI, Вибране, треки та рельєф. Будь ласка, увійдіть до свого облікового запису OsmAnd, щоб використовувати цей розділ меню.

Щоб відкрити це меню, натисніть кнопку у **верхньому лівому куті** або отримайте доступ до нього через **Меню**.

- [Накладання POI...](#poi-overlay-section). Дозволяє вибрати та показати потрібні категорії POI на карті.
- [Вибране](#favorites-section). Перемикає відображення вибраних об'єктів на карті.
- [Треки](#tracks-section). Містить GPX-треки, видимі на карті.
- [Рельєф](#terrain-section). Увімкнути або вимкнути колірну схему рельєфу на карті.

![POIs menu](@site/static/img/web/configure_map_web.png)


### Розділ накладання POI {#poi-overlay-section}

Щоб показати POI на карті:

*Меню налаштування карти → Накладання POI...*. Тут ви можете вибрати категорії для відображення на карті.

Крім того, ви можете використовувати [**розділ Пошук**](web-search.md), щоб знайти потрібне місце.

![POIs menu](@site/static/img/web/poi_menu.png)


### Розділ "Вибране" {#favorites-section}

Одним клацанням миші ви можете вмикати або вимикати вибрані об'єкти на карті. Однак відображатимуться лише вибрані об'єкти з увімкненою опцією [**Показати на карті**](../web/web-userdata.mdx##favorites-on-the-web).


### Розділ "Треки" {#tracks-section}

Цей розділ містить список ваших [**GPX-треків, видимих на карті**](../web/web-userdata.mdx#visible-on-the-map) та **Нещодавно видимих** треків.

- Ви можете вмикати або вимикати треки безпосередньо.
- Вмикати або вимикати треки зі списку **Нещодавно видимих**.

Кожен трек має **Контекстне меню** (доступне за допомогою кнопки ⋮) з такими командами:

- **Приховати трек**: Приховує поточний видимий трек з карти.
- **Зробити трек видимим**: Відображає трек зі списку "Нещодавно видимі" на карті.
- **Перейменувати**: Дозволяє перейменувати трек для легшої ідентифікації.
- **Дублювати**: Створює копію треку.
- **Завантажити**: Зберігає трек на ваш локальний пристрій.
- **Видалити**: Видаляє трек назавжди зі списку.

![Configure map menu Tracks](@site/static/img/web/configure_map_track.png)


### Розділ "Рельєф" {#terrain-section}

Розділ **Рельєф** є платною функцією <ProFeature/>. Щоб використовувати цю функцію, ви повинні спочатку увійти до свого облікового запису OsmAnd Pro.

У цьому розділі ви можете:

- Вибрати **колірну схему** для рельєфу:
  - **Затінення пагорбів**
  - **Нахил**
  - **Висота**
- Налаштувати видимість вибраного шару рельєфу від **0% до 100%**.

![Configure map menu Terrain](@site/static/img/web/configure_map_terrain.png)


<!--
## Map style {#map-style}

In this section of the menu, you can change the map style. You can read more about how to do this in the article [Vector Maps (Map Styles)](../map/vector-maps.md) for the OsmAnd app. The settings in the web version are no different.
**Some examples:**

- Nautical map style

![OsmAnd Web Map Style](@site/static/img/web/web_map_style_nautical.png)

- Topo map style

![OsmAnd Web Favorites add](@site/static/img/web/web_map_style_topo.png)
-->


## URL-схеми {#url-schemes}

Для зручного використання веб-сервісу (та програми) OsmAnd ви можете скористатися прямими посиланнями. Це спеціальні URL-адреси, які дозволяють передавати дані про місцезнаходження та включати деталі про шпильки, треки, погоду тощо.

Ці URL-адреси можна копіювати та ділитися ними за допомогою будь-якого носія, що підтримується вашим пристроєм, і вони сумісні як з версіями OsmAnd для Android, так і для iOS.

1. **URL зі шпилькою на карті:**

  https://osmand.net/map/?pin=52.491143,7.116394#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_pin.png)

2. **URL без шпильки на карті:**

  https://osmand.net/map/#9/52.3924/6.3116

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_without.png)

3. **URL з навігацією:** `osmand.net/map/navigate`

  https://osmand.net/map/navigate/?start=52.236210,5.119629&finish=52.412472,4.855957&type=osmand&profile=car&pin=52.491143,7.116394#9/52.3873/5.2570

  ![OsmAnd Web Create Track](@site/static/img/plan-route/web_url_track.png)

Залежно від зазначених параметрів, рядки URL можуть містити:

- **latitude**: значення широти як число.
- **longitude**: значення довготи як число.
- **start-finish**: координати для навігації.
- **profile**: профіль навігації (наприклад, автомобіль, велосипед).
- **zoom**: рівень масштабування.

4. **Погода**&nbsp; – &nbsp;`osmand.net/map/weather`

***Наприклад***, ви можете безпосередньо отримати доступ до сторінки погоди з вказаними координатами:
    [`https://osmand.net/map/weather/#9/52.2394/21.0362`](https://osmand.net/map/weather/#9/52.2394/21.0362)

5. **Обліковий запис**&nbsp; – &nbsp;`osmand.net/map/account`

6. **Налаштувати карту**&nbsp; – &nbsp;`osmand.net/map/configure/`

7. **Треки**&nbsp; – &nbsp;`osmand.net/map/mydata/tracks`

8. **Вибране**&nbsp; – &nbsp;`osmand.net/map/mydata/favorites`

9. **Налаштування**&nbsp; – &nbsp;`osmand.net/map/settings`

10. **Планування маршруту**&nbsp; - &nbsp;`osmand.net/map/plan`

11. Пряме посилання на поточну [**сторінку "Огляд"**](https://osmand.net/docs/user/web/web-search#explore)&nbsp; - &nbsp;`osmand.net/map/search`