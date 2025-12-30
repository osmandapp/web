---
source-hash: f973f145e5f4519df92ee087ead534986bb074b9e858cae169c3d3c6b00b1839
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

<InfoIncompleteArticle/>


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


## Створення треку та локальні файли {#create-track-and-local-files}

Інструмент [**Планування маршруту**](../plan-route/create-route.md) в OsmAnd Web дозволяє створювати та редагувати треки аналогічно до мобільного додатку. Ось як ви можете створювати та керувати треками:


***Створення нового маршруту:***

- *Клацніть правою кнопкою миші* на карті та виберіть **Створити новий маршрут**.
- Або скористайтеся кнопкою **Створити трек** у меню *Локальні* (розташоване праворуч з кнопками *Олівець* та *Завантажити*).


***Керування треками:***

- **Виберіть профіль навігації**. Виберіть профіль (наприклад, піший, автомобільний) для певних ділянок маршруту (*Нові сегменти*) або для всього маршруту (*Всі сегменти*).
- **Додати шляхові точки**. Натискайте на карту, щоб додати нові точки.
- **Зберегти маршрут**. Збережіть ваш маршрут для подальшого використання.
- **Переглянути деталі маршруту**. Отримайте доступ до детальної інформації про трек, включаючи довжину, тривалість та рельєф.
  ![Створення треку в OsmAnd Web](@site/static/img/web/create_route.png)


***Імпорт та створення треків:***

- **Імпортувати трек**. Ви можете завантажити будь-який GPX-файл у розділ **Локальні**, відвідавши [osmand.net/map](https://osmand.net/map).
- **Створити трек**. Створіть новий трек вручну, вибираючи шляхові точки.
  ![Створення треку в OsmAnd Web](@site/static/img/web/create_route_2.png)


***Дії та інформація для локальних треків:***

Меню **Локальний трек** надає три панелі для редагування: **Інфо**, **Трек** та **Шляхові точки**.

**Панель Інфо**:

- *Зберегти в хмару*. Збережіть ваш трек в OsmAnd Cloud для доступу з різних пристроїв.
- *Додати опис*. Додайте нотатки про трек.
- *Перейменувати*. Змініть назву треку.
- *Перерахувати*. Додайте або оновіть дані про висоту.
- *Висота*. Перегляньте профіль висоти.
- *Графік швидкості*. Відобразіть дані про швидкість уздовж треку.
- *Графік нахилу*. Покажіть зміни нахилу вздовж маршруту.  
- *Деталі дороги*. Перегляньте детальну інформацію, таку як тип дороги, поверхня та крутизна.
- *Завантажити GPX*. Експортуйте трек як GPX-файл ([Pro-функція](../purchases/index.md)).
- *Закрити трек*. Закрийте режим редагування треку.
- *Видалити трек*. Безповоротно видаліть трек.
  ![Створення треку в OsmAnd Web](@site/static/img/web/create_route_3.png)

**Панель Трек**:

- Переглядайте та редагуйте точки треку.
- Переставляйте або видаляйте точки за потреби.

**Панель Шляхові точки**:

- Переглядайте та керувати шляховими точками треку.
- Перемикайте видимість шляхів точок на карті.
- Видаляйте шляхові точки індивідуально за потреби.

**Панель Повороти**:

- Переглядайте детальну інформацію про повороти вздовж треку.

  ![Створення треку в OsmAnd Web](@site/static/img/web/create_route_1.png)


***Додаткові функції:***

- **Синхронізація з додатком**. Збережіть маршрути в OsmAnd Cloud та отримайте доступ до них у вашому мобільному додатку.
- **Користувацькі профілі маршрутів**. Налаштуйте профілі для різних активностей, таких як велосипедна їзда чи піші прогулянки.
- **Маршрути, які можна ділитися**. Копіюйте та діліться URL-адресами маршрутів для спільного планування.