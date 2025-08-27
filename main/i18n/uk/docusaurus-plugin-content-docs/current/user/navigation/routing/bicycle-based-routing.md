---
source-hash: 61b0680b73157560322c9e1f518e6754f7621729463a0d13adc86d23430d9851
sidebar_position: 3
title: Велосипедна навігація (MTB)
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

Велосипедна навігація враховує такі фактори, як наявність велосипедних доріжок, стежок та доріг, які є безпечними та дозволеними для велосипедистів. OsmAnd завжди використовує дані про висоту при розрахунку орієнтовного часу прибуття (час для подолання відстані) відповідно до [правила Нейсміта](https://uk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE_%D0%9D%D0%B5%D0%B9%D1%81%D0%BC%D1%96%D1%82%D0%B0). За замовчуванням надається найшвидший маршрут.
Велосипедна навігація також може бути корисною для [гірського велосипеда](#mtb-routing-particularities).

Ви можете налаштувати *Велосипедну навігацію* в розділі [Параметри маршруту](../guidance/navigation-settings#route-parameters) Налаштувань навігації.


## Параметри маршруту - Велосипед {#route-parameters---bicycle}

Функції велосипедної навігації OsmAnd дозволяють велосипедистам вводити початкову та кінцеву точки, а потім генерувати маршрут, який враховує їхні вподобання та місцеву географію.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування велосипедної навігації](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування велосипедної навігації iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>* | Механізм маршрутизації вибере більш прямі та, відповідно, швидші дороги. | Незважаючи на збільшення швидкості руху, відстань також збільшується одночасно. Це призводить до збільшення м'язових зусиль. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Стиль&nbsp;їзди* (iOS) | <details><summary> Ви можете вибрати свій стиль їзди для кращої навігації. </summary> ![Стиль їзди на велосипеді Android](@site/static/img/navigation/routing/style_cycling_andr.png) </details> | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (будуть віддаватися перевага менш завантаженим дорогам з тегами [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) та [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Віддавати перевагу [ґрунтовим дорогам](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (цей варіант є чимось середнім між *віддавати перевагу другорядним дорогам* та *найкоротший маршрут*) </li><li> *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (для маршрутизації будуть віддаватися перевага ширшим і зазвичай більш завантаженим дорогам, що забезпечує швидші маршрути) </li></ul> |
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Виберіть дороги, яких ви хочете уникнути під час навігації. </summary>![Уникнути доріг Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details> | Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати тип(и) дороги зі списку: <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Уникнути перетину кордону в іншу країну)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, що перевозить транспортні засоби через водойми)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Уникнути бруківки](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (ділянки дороги, де через неї протікає водотік) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [Без бруківки](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту. | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних шляхів, а також будівель, входів, зручностей та об'єктів дозвілля. |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Бажаний&nbsp;рельєф* (iOS) | <details><summary> Дані про висоту будуть використовуватися при розрахунку маршруту: [штрафи за дороги](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) з іншим профілем висот будуть встановлені. </summary> ![Використовувати дані про висоту Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png) </details> | Ця перевага може допомогти уникнути крутих пагорбів або, навпаки, віддати їм перевагу. Якщо ви виберете *горбистий* маршрут, перевага буде надана пагорбам та горам. Якщо *рівнинний* - рівнинам, пагорби будуть уникатися. Менш горбиста перевага є чимось середнім між цими двома варіантами. Без даних про висоту буде розраховано найшвидший маршрут, як на рівнинній місцевості. |


## Особливості MTB навігації {#mtb-routing-particularities}

Механізм MTB (гірський велосипед) навігації такий же, як і велосипедна навігація. Зауважте, що існують деякі штрафи за використання [MTB маршрутів](../../map/vector-maps.md#routes), і тому вони рідше пропонуються для поїздок на велосипеді додому або на роботу.