---
source-hash: 1b0248f79fb147341e713ffd4c07381c3d0499e5d9abb1f928f9d17412b75d84
sidebar_position: 8
title:  Прокладання маршруту для човна
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
## Огляд {#overview}
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
Прокладання маршруту для човна може бути цінним інструментом для тих, хто любить кататися на човні або плавати каналами, річками чи фарватерами. Через відсутність більшості фарватерів у даних OpenStreetMap, прокладання маршруту для човна *не рекомендується* для **навігації у відкритій воді**, натомість пропонується використовувати **[Прямо до точки](#direct-to-point-routing-for-boat)**. Завдяки увімкненим лініям контурів глибини, це може допомогти вам залишатися в безпеці на воді, уникаючи небезпек, таких як мілководдя, скелі або інші перешкоди.
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
Навігаційний двигун OsmAnd для човнів також враховує характеристики водних шляхів та самих човнів.
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Екран навігації для човна Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Екран навігації для човна iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)

</TabItem>

</Tabs>

## Параметри маршруту - Човен {#route-parameters---boat}

:::note
За замовчуванням, *Профіль човна* деактивовано. Щоб використовувати цей профіль для прокладання маршруту, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Прокладання маршруту для човна можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

Зазвичай, *Прокладання маршруту для човна* використовується з профілем човна (останній увімкнений разом із [Плагіном морських карт](../../plugins/nautical-charts.md)). Однак, можна використовувати прокладання маршруту для човна також з іншими профілями, і різні [типи прокладання маршруту](#other-routing-types-for-boat) також можуть бути використані в профілі човна.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Налаштування прокладання маршруту для човна Android](@site/static/img/navigation/routing/boat_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування прокладання маршруту для човна iOS](@site/static/img/navigation/routing/boat_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Дозволяє використовувати струмки та дренажні канали для навігації на човні. Увімкнення цієї опції може бути корисним для невеликих човнів, таких як каное, каяки, плоти, гребні човни. | [Струмки](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) — це природні водні шляхи, які занадто вузькі, щоб називатися річкою. [Дренажні канали](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) — це штучні водні шляхи, зазвичай облицьовані бетоном або подібним матеріалом, що використовуються для відведення надлишкової води, такої як дощова вода або сірі стоки. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Увімкнення цієї опції дозволяє використовувати переривчасті водні шляхи для навігації на човні. | Тег [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) використовується для позначення того, що водний шлях не постійно містить воду. |

:::note Водна навігація та обмеження

1. Профіль човна призначений для прокладання маршрутів річками, озерами та іншими водними шляхами. Він підтримує теги OSM, такі як:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, тощо.

2. Профіль човна **не підтримує поромні маршрути (`route=ferry`)**. Це означає, що поромні маршрути, навіть якщо вони присутні на карті, **не будуть використовуватися** при розрахунку маршрутів для човна.

3. Щоб слідувати поромній лінії вручну:

    - Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md) та розміщуйте проміжні точки вручну.
    - Використовуйте профіль автомобіля, який підтримує поромні маршрути.

:::

## Інші типи прокладання маршруту для човна {#other-routing-types-for-boat}

Тип [Прокладання маршруту для човна](#route-parameters---boat) є стандартним алгоритмом прокладання маршруту для профілю човна. Хоча ви можете вибрати інший тип прокладання маршруту, який також підходить для навігації на човні:

 - [Прокладання маршруту прямо до точки для човна](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Прокладання маршруту по прямій лінії для човна](./boat-navigation.md#straight-line-routing-for-boat)

Важливо зазначити, що типи прокладання маршруту *Прямо до точки* та *По прямій лінії* слід використовувати лише у відкритій воді, де немає перешкод або небезпек для навігації. Якщо ви рухаєтеся водним шляхом з певним каналом або маршрутом, вам слід використовувати тип прокладання маршруту для човна в OsmAnd, який проведе вас через правильні навігаційні канали та допоможе уникнути мілководдя або інших небезпек.

Ці типи прокладання маршруту для профілю човна можна активувати за наступним шляхом: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> або інший) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Прокладання маршруту прямо до точки для човна {#direct-to-point-routing-for-boat}

:::note
При використанні типів навігації Прямо до точки та Човен, вам знадобляться [дані контурів глибини](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

[Тип прокладання маршруту прямо до точки](./direct-to-point-routing.md) можна використовувати з профілем човна, коли ви хочете рухатися на човні у відкритій воді, не слідуючи жодному конкретному маршруту чи водному шляху. Цей тип прокладання маршруту дозволяє встановити точку призначення, і OsmAnd розрахує прямий шлях до цієї точки з вашого поточного місцезнаходження. Цей тип прокладання маршруту не враховує характеристики вашого човна, такі як мінімальна та максимальна швидкості, висота та ширина. Ваш маршрут не буде перераховуватися у разі відхилення.

![Тип навігації прямо до точки Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Прокладання маршруту по прямій лінії для човна {#straight-line-routing-for-boat}

[Тип прокладання маршруту по прямій лінії](./straight-line-routing) можна використовувати з профілем човна, коли ви хочете рухатися на човні у відкритій воді, але віддаєте перевагу слідувати прямій лінії, а не криволінійному маршруту до точки призначення. Це може бути корисно при навігації до віддаленої точки, яка видно на горизонті, наприклад.

![Тип навігації по прямій лінії Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

## Інші налаштування прокладання маршруту {#other-routing-settings}

- Алгоритм прокладання маршруту також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зверніть увагу, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції прокладання маршруту, які наразі перебувають на стадії тестування. Зверніть увагу, що ці налаштування доступні лише тоді, коли увімкнено [Плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android*, в *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації по треку або онлайн-маршруту. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Ця стаття востаннє оновлювалася у травні 2025 року*