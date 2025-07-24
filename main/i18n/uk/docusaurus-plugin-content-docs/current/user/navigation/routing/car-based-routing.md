---
source-hash: 918e5cde7ffddb7a99046ea161570b0112d11c17a7525a60f27a26db3726b779
sidebar_position: 2
title: Маршрутизація автомобілем (Вантажівка, Мотоцикл)
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

Маршрутизація автомобілем розроблена, щоб допомогти водіям ефективно, безпечно та комфортно пересуватися дорогами, надаючи індивідуальні вказівки, адаптовані до унікальних потреб та вподобань кожного водія. Правильні налаштування маршрутизації можуть допомогти водіям заощадити час та паливо, а також уникнути небезпек на дорозі. За замовчуванням пропонується найшвидша маршрутизація.

:::info
Механізм маршрутизації для моторизованих наземних транспортних засобів відрізняється лише кількома налаштуваннями. Загальні параметри описані в розділі [Автомобіль](#route-parameters---car) цієї статті. [Вантажівка](#route-parameters---truck) та [Мотоцикл](#route-parameters---motorcycle) мають свої особливості.
:::

Маршрутизацію можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) налаштувань навігації відповідного профілю (*Водіння, Вантажівка, Мотоцикл*).

## Параметри маршруту - Автомобіль {#route-parameters---car}

Маршрутизація автомобілем розроблена, щоб допомогти водіям знайти найефективніші та найпряміші маршрути до місця призначення. Вона враховує поширені обмеження руху, такі як вулиці з одностороннім рухом, заборона поворотів, пішохідні зони, а також допомагає уникнути доріг, які не підходять для автомобілів, таких як вузькі дороги або дороги з обмеженнями ваги.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації автомобілем Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації автомобілем iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* | <details><summary> Виберіть дороги, які ви хочете уникнути під час навігації. Ви можете або [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road), або вибрати типи доріг зі списку. </summary>![Уникнення доріг Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details> | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Уникнути перетину кордону в іншу країну).</li><li>Уникайте [льодяних доріг](https://wiki.openstreetmap.org/wiki/Key:ice_road) (сезонні дороги в холодних регіонах, які прокладаються по замерзлій воді) та [бродів](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (ділянки шосе, де через нього протікає водний потік). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (вид водного транспорту, який перевозить транспортні засоби через водойми).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (поїзди, що перевозять автомобілі, які з'єднують два місця, нелегко доступні одне для одного дорогою).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (підходить лише для повнопривідних автомобілів).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Для автомобільної маршрутизації передбачається, що поверхня доріг [асфальтована](https://wiki.openstreetmap.org/wiki/Key:surface), якщо не вказано інше. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* | При розрахунку маршруту приватні обмеження доступу ігноруватимуться. | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних шляхів, а також будівель, входів, зручностей та об'єктів дозвілля. |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (тільки&nbsp;автомобіль) | <details><summary> Дороги, закриті для доставки товарів, будуть уникнені. </summary>![Доставка товарів Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Ця опція застосовується лише до транспортних засобів, що перевозять товари, вагою не більше 3,5 тонн. Якщо вага вашого транспортного засобу перевищує 3,5 тонни, вам слід використовувати [профіль Вантажівка](#route-parameters---truck). |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Для розрахунку паливно-ефективної маршрутизації двигун внутрішньо обмежує швидкість до 60 км/год, хоча це не змінює розрахунковий час прибуття. Отже, у випадку 2 однакових маршрутів від початку до кінця: автомагістраль (120 км/год) та другорядна дорога (60 км/год) — буде обрано коротший маршрут. Для службових доріг, що мають обмеження швидкості <60 км/год, буде обрано швидший маршрут. |

## Параметри маршруту - Вантажівка {#route-parameters---truck}

:::note
За замовчуванням *Профіль вантажівки* деактивовано. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрутизація вантажівками схожа на маршрутизацію автомобілями, але розроблена спеціально для водіїв великих комерційних транспортних засобів. Вона враховує додаткові фактори, такі як [обмеження висоти, ваги та ширини транспортного засобу](../guidance/navigation-settings.md#size-parameters) та можливість перевезення небезпечних матеріалів (див. таблицю нижче). Усі інші налаштування маршрутизації ідентичні [маршрутизації автомобілями](#route-parameters---car).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації вантажівкою Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації вантажівкою iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (для **регіону ЄС**) | <details><summary> Місцеві органи влади можуть заборонити перевезення небезпечних матеріалів на деяких дорогах або в тунелях. </summary> ![Перевезення небезпечних матеріалів Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | При увімкненні механізм маршрутизації вантажівками враховує тег OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Ви можете вибрати одну з п'яти категорій (*A, B, C, D, E*) небезпечних матеріалів відповідно до **обмежень ЄС**. |
| *<Translate android="true" ids="dangerous_goods"/>* (тільки якщо вибрано **регіон США**) | <details><summary> Правила перевезення небезпечних матеріалів у США відрізняються від ЄС. Відображається лише якщо регіон водіння встановлено на США. Ви можете вибрати кілька класів. </summary> ![Перевезення небезпечних матеріалів Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Виберіть один з типів (від 1 до 9) небезпечних матеріалів відповідно до [**обмежень США**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Перевезення небезпечних матеріалів заборонено на деяких дорогах та в тунелях. <ul><li>1. *Вибухові речовини* </li><li> 2. *Гази* </li><li> 3. *Легкозаймисті рідини* </li><li> 4. *Легкозаймисті тверді речовини* </li><li> 5. *Окислювачі та органічні пероксиди* </li><li> 6. *Токсичні та інфекційні речовини* </li><li> 7. *Радіоактивні речовини* </li><li> 8. *Корозійні речовини* </li><li> 9. *Різне* </li></ul> |

## Параметри маршруту - Мотоцикл {#route-parameters---motorcycle}

:::note
За замовчуванням *Профіль мотоцикла* деактивовано. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрутизація мотоциклом — це процес створення маршруту, спеціально оптимізованого для подорожей на мотоциклі. Цей тип маршрутизації враховує унікальні потреби та вподобання мотоциклістів, забезпечуючи найкращі можливі умови для їзди. Маршрути прокладаються з урахуванням ряду параметрів, таких як вибір дорожнього покриття (наприклад, погані дорожні умови можна віддати перевагу або уникнути), уникнення заторів, доступність інфраструктури або безпека.

## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зверніть увагу, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зверніть увагу, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android* — у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації по треку або онлайн-маршруту. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш підходящий маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: липень 2024*