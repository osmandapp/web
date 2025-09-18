---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title:  Кінний маршрут
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Огляд {#overview}

*Кінний маршрут* може бути корисним для вершників, які хочуть планувати свої поїздки стежками та доріжками, безпечними та придатними для коней. За допомогою цього типу маршрутизації ви також можете відкрити для себе нові маршрути, про які раніше не було відомо.

*Кінний маршрут* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) налаштувань навігації.

![Кінний маршрут](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Параметри маршруту - Кінь {#route-parameters---horse}

:::note
За замовчуванням *профіль "Верхова їзда"* вимкнено. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Кінний маршрут призначений для надання вершникам інформації про зручні для коней стежки, доріжки для верхової їзди та маршрути для верхової їзди.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Налаштування кінного маршруту Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування кінного маршруту iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникати під час навігації. Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати типи доріг зі списку.  </summary>  ![Уникати доріг Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, що перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Ви можете вибрати, чи надавати перевагу маршрутам для коней. </summary> ![Надавати перевагу кінним маршрутам Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Доріжка, призначена для використання вершниками (переважно) та пішоходами (залежно від правил конкретної країни). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [Ворота](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) — це різновид [бар'єра](https://wiki.openstreetmap.org/wiki/Key:barrier), що блокує рух. Зазвичай це секція в стіні або огорожі, яку можна відкривати або закривати, щоб дозволити або обмежити доступ. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | У деяких країнах [кінні екіпажі](https://wiki.openstreetmap.org/wiki/Key:carriage) не допускаються на автомагістралі, вони дозволені лише на дуже невеликій кількості інших доріг.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання автомобільних доріг та інших транспортних шляхів, а також будівель, входів, об'єктів благоустрою та відпочинку.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Для прокладання маршруту будуть використовуватися тільки спеціально відведені для коней вулиці.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Для прокладання маршруту будуть використовуватися тільки спеціально відведені для коней шляхи.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Прогнозований час у дорозі буде враховувати вплив висоти. </summary> ![Використовувати дані про висоту Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | Цей параметр може допомогти уникнути крутих підйомів. Без даних про висоту буде розраховано найшвидший маршрут, як по рівнинній місцевості. |