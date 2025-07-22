---
source-hash: 11f96851fe0f021db695918bd99476a396fc4a1e4d35dc2c02f19b4d9f965751
sidebar_position: 8
title:  Маршрутизація для човнів
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

Маршрутизація для човнів може бути цінним інструментом для тих, хто любить кататися на човнах або вітрильниках по каналах, річках або фарватерах. Через відсутність більшості фарватерів у даних OpenStreetMap, маршрутизація для човнів *не рекомендується* для **навігації у відкритій воді**, замість цього пропонується використовувати **[Прямо до точки](#direct-to-point-routing-for-boat)**. З увімкненими лініями контурів глибин, це може допомогти вам залишатися в безпеці на воді, уникаючи небезпек, таких як мілководдя, скелі або інші перешкоди.
Двигун маршрутизації OsmAnd для човнів також враховує характеристики водних шляхів та самих човнів.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Параметри маршруту - Човен {#route-parameters---boat}

:::note
За замовчуванням, *Профіль човна* деактивовано. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрутизація для човнів може бути налаштована відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

Зазвичай, *Маршрутизація для човнів* використовується з профілем човна (останній увімкнений разом з [Плагіном морських карт](../../plugins/nautical-charts.md)). Однак, можна використовувати маршрутизацію для човнів і з іншими профілями, а також різні [типи маршрутизації](#other-routing-types-for-boat) можуть бути використані в профілі човна.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Boat routing settings Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Boat routing settings iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Дозволяє використовувати струмки та дренажі для навігації на човні. Увімкнення цієї опції може бути корисним для невеликих човнів, таких як каное, каяки, плоти, гребні човни. | [Струмки](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) - це природні водні шляхи, які занадто вузькі, щоб називатися річкою. [Дренажі](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) - це штучні водні шляхи, зазвичай облицьовані бетоном або подібним матеріалом, що використовуються для відведення надлишкової води, такої як дощова вода або сірі стоки. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Увімкнення цієї опції дозволяє використовувати переривчасті водні шляхи для навігації на човні. | Тег [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) використовується для позначення того, що водний шлях не постійно містить воду. |


:::note Навігація по воді та обмеження

1. Профіль човна призначений для маршрутизації по річках, озерах та інших водних шляхах. Він підтримує такі теги OSM:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, тощо.

2. Профіль човна **не підтримує поромні маршрути (`route=ferry`)**. Це означає, що поромні маршрути, навіть якщо вони присутні на карті, **не будуть використовуватися** при розрахунку маршрутів для човнів.

3. Щоб слідувати поромній лінії вручну:

    - Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md) та розміщуйте проміжні точки вручну.
    - Використовуйте профіль автомобіля, який підтримує поромні маршрути.

:::

## Інші типи маршрутизації для човнів {#other-routing-types-for-boat}

Тип [Маршрутизація для човнів](#route-parameters---boat) є алгоритмом маршрутизації за замовчуванням для профілю човна. Хоча ви можете вибрати інший тип маршрутизації, який також підходить для навігації на човні:

 - [Маршрутизація прямо до точки для човнів](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Маршрутизація по прямій лінії для човнів](./boat-navigation.md#straight-line-routing-for-boat)

Важливо зазначити, що типи маршрутизації *Прямо до точки* та *По прямій лінії* слід використовувати лише у відкритій воді, де немає перешкод або небезпек для навігації. Якщо ви рухаєтеся по водному шляху з певним каналом або маршрутом, вам слід використовувати тип маршрутизації для човнів в OsmAnd, який проведе вас через правильні навігаційні канали та допоможе уникнути мілководдя або інших небезпек.

Ці типи маршрутизації для профілю човна можна активувати за наступним шляхом: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> або інший) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Маршрутизація прямо до точки для човнів {#direct-to-point-routing-for-boat}

:::note
При використанні типів навігації Прямо до точки та Човен, вам знадобляться [Дані контурів глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

[Тип маршрутизації Прямо до точки](./direct-to-point-routing.md) можна використовувати з профілем човна, коли ви хочете рухатися на човні у відкритій воді, не слідуючи жодному конкретному маршруту чи водному шляху. Цей тип маршрутизації дозволяє встановити точку призначення, і OsmAnd розрахує прямий шлях до цієї точки від вашого поточного місцезнаходження. Цей тип маршрутизації не враховує характеристики вашого човна, такі як мінімальна та максимальна швидкості, висота та ширина. Ваш маршрут не буде перераховано у разі відхилення.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Маршрутизація по прямій лінії для човнів {#straight-line-routing-for-boat}

[Тип маршрутизації По прямій лінії](./straight-line-routing) можна використовувати з профілем човна, коли ви хочете рухатися на човні у відкритій воді, але віддаєте перевагу слідувати прямій лінії, а не криволінійному маршруту до точки призначення. Це може бути корисно при навігації до віддаленої точки, яка видно на горизонті, наприклад.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [Плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android*, в *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації по треку або онлайн-маршруту. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш підходящий маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: Травень 2025*