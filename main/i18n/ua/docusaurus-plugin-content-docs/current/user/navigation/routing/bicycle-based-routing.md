---
source-hash: 62958161a92688643653ef05335adc88ebd99659a7f095e14db47e44f722a525
sidebar_position: 3
title: Велосипедний маршрут (MTB)
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
## Огляд {#overview}
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
Велосипедний маршрут враховує такі фактори, як наявність велосипедних доріжок, стежок і доріг, які є безпечними та законними для велосипедистів. OsmAnd завжди використовує дані про висоту під час розрахунку орієнтовного часу прибуття (час подолання відстані) відповідно до [правила Нейсміта](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). За замовчуванням надається найшвидший маршрут.
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
Велосипедний маршрут також може бути корисним для [гірського велосипеда](#mtb-routing-particularities).
import Translate from '@site/src/components/Translate.js';

import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';
Ви можете налаштувати *Велосипедний маршрут* у розділі [Параметри маршруту](../guidance/navigation-settings#route-parameters) Налаштувань навігації.


## Параметри маршруту - Велосипед {#route-parameters---bicycle}

Функції велосипедного маршруту OsmAnd дозволяють велосипедистам вводити початкову та кінцеву точки, а потім генерувати маршрут, який враховує їхні переваги та місцеву географію.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Налаштування велосипедного маршруту](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування велосипедного маршруту iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Механізм маршрутизації вибиратиме більш прямі та, відповідно, швидші дороги. | Незважаючи на збільшення швидкості руху, одночасно збільшується і пройдена відстань. Це призводить до збільшення м'язових зусиль. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Стиль&nbsp;їзди* (iOS) | <details><summary> Ви можете вибрати свій стиль їзди для кращого маршруту. </summary> ![Стиль їзди на велосипеді Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (будуть переважно менш завантажені дороги з тегами [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) та [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Переважно [неасфальтовані дороги](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (цей варіант є чимось середнім між *переважно другорядні дороги* та *найкоротший маршрут*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (для маршрутизації будуть переважно ширші та зазвичай більш завантажені дороги, що забезпечують швидші маршрути) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Виберіть дороги, які ви хочете уникнути під час навігації. </summary>![Уникнути доріг Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати тип(и) дороги зі списку: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Уникнути перетину кордону в іншу країну)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, який перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Уникнути бруківки](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (ділянки дороги, де через неї протікає водойма) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Без бруківки](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту. | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних шляхів, а також будівель, входів, зручностей та об'єктів відпочинку. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Переважний&nbsp;рельєф* (iOS) | <details><summary> Дані про висоту будуть використовуватися при розрахунку маршруту: будуть встановлені [штрафи для доріг](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) з іншим профілем висоти. </summary> ![Використовувати дані про висоту Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Ця перевага може допомогти уникнути крутих пагорбів або навпаки, віддати їм перевагу. Якщо ви виберете *горбистий* маршрут, перевага буде надана пагорбам і горам. Якщо *рівнинний* - рівнинам, пагорби будуть уникатися. Менш горбиста перевага є чимось середнім між цими двома варіантами. Без даних про висоту буде розраховано найшвидший маршрут, як на рівнинній місцевості. |


## Особливості маршрутизації MTB {#mtb-routing-particularities}

Механізм маршрутизації MTB (гірський велосипед) такий самий, як і велосипедний маршрут. Зауважте, що існують деякі штрафи за використання [маршрутів MTB](../../map/vector-maps.md#routes), і тому вони менш імовірно будуть запропоновані для поїздок на велосипеді додому або на роботу.


## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android*, у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації за треком або онлайн-маршрутом. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Ця стаття востаннє оновлювалася в червні 2024 року*