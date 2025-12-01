---
source-hash: 74a5b610d6f4eeafabe0fe3369b3c7c103d064d346a88aacce7696290df5bb64
sidebar_position: 2
title:  Автомобільна маршрутизація (Вантажівка, Мотоцикл)
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

Автомобільна маршрутизація розроблена, щоб допомогти водіям ефективно, безпечно та комфортно пересуватися дорогами, надаючи індивідуальні маршрути, пристосовані до унікальних потреб та уподобань кожного водія. Правильні налаштування маршрутизації можуть допомогти водіям заощадити час і пальне, а також уникнути небезпек на дорозі. За замовчуванням пропонується найшвидша маршрутизація.

:::info
Механізм маршрутизації для моторизованих наземних транспортних засобів відрізняється лише кількома налаштуваннями. Загальні параметри описані в розділі [Автомобіль](#route-parameters---car) цієї статті. [Вантажівка](#route-parameters---truck) та [Мотоцикл](#route-parameters---motorcycle) мають свої особливості.  
:::

Маршрутизацію можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) в налаштуваннях навігації відповідного профілю (*Водіння, Вантажівка, Мотоцикл*).  


## Параметри маршруту - Автомобіль {#route-parameters---car}

Автомобільна маршрутизація призначена для того, щоб допомогти водіям знайти найефективніші та найпряміші маршрути до місця призначення. Вона враховує загальні обмеження руху, такі як вулиці з одностороннім рухом, заборона поворотів, пішохідні зони, а також допомагає уникати доріг, які не підходять для легкових автомобілів, наприклад, вузьких доріг або доріг з обмеженням ваги.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування автомобільної маршрутизації Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування автомобільної маршрутизації iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникати під час навігації. Ви можете [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road) або вибрати типи доріг зі списку.  </summary>![Уникати доріг Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Уникати перетину кордону в іншу країну).</li><li>Уникати [льодових доріг](https://wiki.openstreetmap.org/wiki/Key:ice_road) (сезонні дороги в холодних регіонах, прокладені по замерзлій воді) та [бродів](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (ділянки шосе, де водний потік перетинає його). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (вид водного транспорту, що перевозить транспортні засоби через водойми).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (потяги, що перевозять автомобілі та з'єднують два місця, до яких важко дістатися дорогою).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (підходить лише для повнопривідних автомобілів).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | Для автомобільної маршрутизації передбачається, що поверхня доріг є [з твердим покриттям](https://wiki.openstreetmap.org/wiki/Key:surface), якщо не вказано інше. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання автомагістралей та інших транспортних шляхів, а також будівель, входів, об'єктів благоустрою та відпочинку.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (тільки&nbsp;авто) |  <details><summary> Доріг, закритих для доставки товарів, буде уникати. </summary>![Доставка товарів Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| Ця опція застосовується лише до транспортних засобів, що перевозять вантажі вагою не більше 3,5 тонн. Якщо вага вашого транспортного засобу перевищує 3,5 тонни, вам слід використовувати [профіль Вантажівка](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | Для розрахунку паливно-ефективного маршруту, механізм маршрутизації внутрішньо обмежує швидкість до 60 км/год, однак це не змінює орієнтовний час прибуття. Таким чином, у випадку двох однакових маршрутів від точки старту до фінішу: автомагістраль (120 км/год) та другорядна дорога (60 км/год) - буде обрано коротший маршрут. Для службових доріг з обмеженням швидкості < 60 км/год буде обрано швидший маршрут. |


## Параметри маршруту - Вантажівка {#route-parameters---truck}

:::note
За замовчуванням, профіль *Вантажівка* деактивовано. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрутизація для вантажівок схожа на автомобільну, але розроблена спеціально для водіїв великих комерційних транспортних засобів. Вона враховує додаткові фактори, такі як [обмеження висоти, ширини, ваги, максимального навантаження на вісь та максимальної ваги при повному завантаженні](../guidance/vehicle-parameters.md#size-parameters) транспортного засобу та можливість перевезення небезпечних матеріалів (див. таблицю нижче). Всі інші налаштування маршрутизації ідентичні [автомобільній маршрутизації](#route-parameters---car).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації для вантажівок Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Налаштування маршрутизації для вантажівок iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (для **регіону ЄС**) | <details><summary> Місцеві органи влади можуть забороняти перевезення небезпечних матеріалів на деяких дорогах або в тунелях. </summary> ![Перевезення небезпечних матеріалів Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | Коли увімкнено, механізм маршрутизації для вантажівок враховує тег OSM *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. Ви можете вибрати одну з п'яти категорій (*A, B, C, D, E*) небезпечних матеріалів відповідно до **обмежень ЄС**. |
| *<Translate android="true" ids="dangerous_goods"/>* (тільки якщо вибрано **регіон США**) | <details><summary> Правила перевезення небезпечних матеріалів у США відрізняються від правил ЄС. Відображається, лише якщо регіон водіння встановлено на США. Ви можете вибрати кілька класів. </summary> ![Перевезення небезпечних матеріалів Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Виберіть один з типів (від 1 до 9) небезпечних матеріалів відповідно до [**обмежень США**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Перевезення небезпечних матеріалів заборонено на деяких дорогах та в тунелях. <ul><li>1. *Вибухові речовини* </li><li> 2. *Гази* </li><li> 3. *Легкозаймисті рідини* </li><li> 4. *Легкозаймисті тверді речовини* </li><li> 5. *Окислювачі та органічні пероксиди* </li><li> 6. *Токсичні та інфекційні речовини* </li><li> 7. *Радіоактивні речовини* </li><li> 8. *Корозійні речовини* </li><li> 9. *Різне* </li></ul> |


## Параметри маршруту - Мотоцикл {#route-parameters---motorcycle}

:::note
За замовчуванням, профіль *Мотоцикл* деактивовано. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Мотоциклетна маршрутизація - це процес створення маршруту, спеціально оптимізованого для подорожей на мотоциклі. Цей тип маршрутизації враховує унікальні потреби та вподобання мотоциклістів, забезпечуючи найкращі можливі умови для їзди. Маршрути прокладаються з урахуванням низки параметрів, таких як вибір дорожнього покриття (наприклад, можна надавати перевагу або уникати доріг з поганим станом), уникнення заторів, доступність інфраструктури або безпека.