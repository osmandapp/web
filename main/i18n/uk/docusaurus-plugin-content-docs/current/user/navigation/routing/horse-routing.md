---
source-hash: f863a18e2c3b8c34a6bbf837cba45b313219a45379aed3eb8ba136511d1c18a4
sidebar_position: 6
title: Маршрути для верхової їзди
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

*Маршрути для верхової їзди* можуть бути корисними для вершників, які хочуть планувати свої поїздки по стежках та маршрутах, які є безпечними та придатними для коней. За допомогою цього типу маршрутизації ви також можете відкрити нові маршрути, про які раніше не знали.

*Маршрути для верхової їзди* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Параметри маршруту - Кінь {#route-parameters---horse}

:::note
За замовчуванням *Профіль верхової їзди* деактивовано. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрути для верхової їзди розроблені для надання вершникам інформації про зручні для коней стежки, кінні доріжки та маршрути для верхової їзди.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Виберіть дороги, яких ви хочете уникнути під час навігації. Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати типи доріг зі списку. </summary> ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, який перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Ви можете вибрати, чи віддавати перевагу маршрутам для коней. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). Шлях, призначений для використання вершниками (переважно) та пішоходами (залежно від правил конкретної країни). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* | <Translate android="true" ids="routing_attr_allow_gate_description"/>. | [Ворота](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) — це різновид [бар'єру](https://wiki.openstreetmap.org/wiki/Key:barrier), який блокує рух. Зазвичай це ділянка в стіні або огорожі, яку можна відкрити або закрити, щоб дозволити або обмежити доступ. |
| *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>* | <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>. | У деяких країнах [кінні екіпажі](https://wiki.openstreetmap.org/wiki/Key:carriage) не допускаються на автомагістралі, вони дозволені лише на дуже невеликій кількості інших доріг. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту. | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних маршрутів, а також будівель, входів, зручностей та об'єктів дозвілля. |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>. | Для маршрутизації будуть використовуватися лише вулиці, спеціально призначені для коней. |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>* | <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>. | Для маршрутизації будуть використовуватися лише шляхи, спеціально призначені для коней. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Прогнозований час подорожі відображатиме вплив висоти. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png) </details> | Ця перевага може допомогти уникнути крутих підйомів. Без даних про висоту буде розраховано найшвидший маршрут, як на рівнинній місцевості. |