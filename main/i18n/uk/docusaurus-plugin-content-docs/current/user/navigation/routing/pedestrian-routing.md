---
source-hash: 627c2c21830d1233dba44cacd666d91b7c9653f1681b66a17ad59c7b8df6029b
sidebar_position: 4
title: Пішохідна навігація
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

Пішохідна навігація — це процес пошуку найкращого маршруту для пішохода, щоб дістатися з одного місця в інше, враховуючи такі фактори, як зони лише для пішоходів, тротуари, пішохідні переходи та зручні для пішоходів перехрестя. Він також може враховувати інші фактори, такі як *сходи*, які можуть бути корисними для доступності інвалідних візків. OsmAnd завжди використовує дані про висоту під час розрахунку орієнтовного часу прибуття (час подолання відстані) відповідно до [правила Нейсміта](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

Щоб налаштувати *Пішохідну навігацію*, перейдіть до розділу [Параметри маршруту](../guidance/navigation-settings#route-parameters) у Налаштуваннях навігації.
  
### Параметри маршруту - Пішохідний {#route-parameters---walking}

Пішохідна навігація може бути корисною не тільки в міських районах, де пішоходи можуть зіткнутися з різними перешкодами, намагаючись дістатися з одного місця в інше. Ви також можете використовувати цей тип навігації під час пробіжок, походів та скандинавської ходьби за містом або в горах. Просто налаштуйте параметри навігації відповідно до ваших потреб.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникнути під час навігації. Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати типи доріг зі списку.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, що перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> Ви можете вибрати тип поверхні, якому надавати перевагу при побудові маршруту. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | Ви можете вибрати між двома варіантами:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). Ці маршрути зазвичай зустрічаються в природних середовищах, таких як ліси, гори та парки. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). Ця система індикаторів текстурованої поверхні землі може бути встановлена на пішохідних доріжках, сходах та платформах громадського транспорту, щоб допомогти сліпим або слабозорим пішоходам у пересуванні. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних маршрутів, а також будівель, входів, зручностей та об'єктів дозвілля.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Дані про висоту будуть використовуватися при розрахунку маршруту: [штрафи](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) будуть встановлені для доріг, що відрізняються від обраного типу. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Ця перевага може допомогти уникнути крутих пагорбів або, навпаки, віддати їм перевагу. Використання цієї опції може бути дуже корисним у пішохідній навігації. Без даних про висоту буде розраховано найшвидший маршрут, як на рівнинній місцевості. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| Маршрути *Via ferrata* будуть використовуватися для навігації, якщо ця опція разом з *Використовувати дані про висоту* увімкнена.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) — це гірський маршрут, обладнаний фіксованими тросами, скобами, драбинами та мостами. |