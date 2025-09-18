---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title:  Велосипедна маршрутизація (MTB)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Велосипедна маршрутизація враховує такі фактори, як наявність велосипедних доріжок, стежок та доріг, які є безпечними та дозволеними для велосипедистів. OsmAnd завжди використовує дані про висоту при розрахунку орієнтовного часу прибуття (часу на подолання відстані) відповідно до [правила Нейсміта](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). За замовчуванням пропонується найшвидший маршрут.  
Велосипедна маршрутизація також може бути корисною для [гірського велосипеда](#mtb-routing-particularities).  

Ви можете налаштувати *Велосипедну маршрутизацію* в розділі [Параметри маршруту](../guidance/navigation-settings#route-parameters) налаштувань навігації.


## Параметри маршруту - Велосипед {#route-parameters---bicycle}

Функції велосипедної маршрутизації OsmAnd дозволяють велосипедистам вводити початкову та кінцеву точки, а потім генерувати маршрут, який враховує їхні вподобання та місцеву географію.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Налаштування велосипедної маршрутизації](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування велосипедної маршрутизації iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  Механізм маршрутизації обиратиме більш прямі та, відповідно, швидші дороги.  | Незважаючи на збільшення швидкості руху, одночасно збільшується і пройдена відстань. Це призводить до збільшення м'язових зусиль. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Driving&nbsp;style* (iOS) | <details><summary> Ви можете обрати свій стиль їзди для кращої маршрутизації. </summary> ![Стиль їзди на велосипеді Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (перевага надаватиметься менш завантаженим дорогам з тегами [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) та [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Надавати перевагу [ґрунтовим дорогам](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (цей варіант є чимось середнім між *надавати перевагу другорядним дорогам* та *найкоротшим маршрутом*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (для маршрутизації перевага надаватиметься ширшим і зазвичай більш завантаженим дорогам, що забезпечує швидші маршрути) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникати під час навігації.  </summary>![Уникати доріг Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | Ви можете або [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road), або вибрати тип(и) доріг зі списку:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Уникати перетину кордону з іншою країною)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, що перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Уникати бруківки](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (ділянки шосе, де через нього протікає водний потік) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Без бруківки (sett)](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання шосе та інших транспортних шляхів, а також будівель, входів, об'єктів благоустрою та відпочинку.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferred&nbsp;terrain* (iOS) | <details><summary> Дані про висоту будуть використовуватися при розрахунку маршруту: будуть встановлені [штрафи для доріг](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) з іншим профілем висот. </summary> ![Використання даних про висоту Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | Ця опція може допомогти уникнути крутих пагорбів або, навпаки, надати їм перевагу. Якщо ви оберете *горбистий* маршрут, перевага буде надаватися пагорбам і горам. Якщо *рівнинний* - рівнинам, пагорби будуть уникатися. Опція "менш горбистий" є чимось середнім між цими двома варіантами. Без даних про висоту буде розраховано найшвидший маршрут, як по рівнинній місцевості. |


## Особливості маршрутизації MTB {#mtb-routing-particularities}

Механізм маршрутизації MTB (гірський велосипед) такий самий, як і для звичайного велосипеда. Зауважте, що існують певні штрафи за використання [маршрутів MTB](../../map/vector-maps.md#routes), і тому вони з меншою ймовірністю будуть пропонуватися для поїздок на велосипеді додому або на роботу.