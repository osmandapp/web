---
source-hash: 89f0bd9a9dfbfdb2158d837c90031efd8ceeca297a50647bb295c32585e91830
sidebar_position: 8
title: Прокладання маршруту для човна
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

Прокладання маршруту для човна може бути цінним інструментом для тих, хто полюбляє плавати каналами, річками чи фарватерами. Через відсутність більшості фарватерів у даних OpenStreetMap, прокладання маршруту для човна *не рекомендується* для **навігації у відкритій воді**, натомість пропонується використовувати **[прямо до точки](#direct-to-point-routing-for-boat)**. Завдяки увімкненим лініям глибин, це може допомогти вам залишатися в безпеці на воді, уникаючи небезпек, таких як мілководдя, скелі або інші перешкоди.
Навігаційний рушій OsmAnd для човнів також враховує характеристики водних шляхів та самих човнів.

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
За замовчуванням *Профіль човна* деактивований. Щоб використовувати цей профіль для прокладання маршруту, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Прокладання маршруту для човна можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) налаштувань навігації.

Зазвичай *прокладання маршруту для човна* використовується з профілем човна (останній увімкнений разом з [плагіном морської навігації](../../plugins/nautical-charts.md)). Однак, можна використовувати прокладання маршруту для човна і з іншими профілями, а також різні [типи прокладання маршруту](#other-routing-types-for-boat) можуть бути використані в профілі човна.

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
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Дозволяє використовувати струмки та дренажні канали для навігації човном. Увімкнення цієї опції може бути корисним для невеликих човнів, таких як каное, каяки, плоти, гребні човни. | [Струмки](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) — це природні водні шляхи, які занадто вузькі, щоб називатися річкою. [Дренажні канали](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) — це штучні водні шляхи, зазвичай облицьовані бетоном або подібним матеріалом, що використовуються для відведення зайвої води, такої як дощова вода або стічні води. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Увімкнення цієї опції дозволяє використовувати переривчасті водні шляхи для навігації човном. | Тег [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) використовується для позначення того, що водний шлях не постійно містить воду. |

:::note Водна навігація та обмеження

1. Профіль човна призначений для прокладання маршрутів уздовж річок, озер та інших водних шляхів. Він підтримує теги OSM, такі як:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, тощо.

2. Профіль човна **не підтримує поромні маршрути (`route=ferry`)**. Це означає, що поромні маршрути, навіть якщо вони присутні на карті, **не будуть використовуватися** при розрахунку маршрутів для човна.

3. Щоб вручну прокласти маршрут поромної лінії:

    - Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md) та вручну розміщуйте проміжні точки.
    - Використовуйте профіль автомобіля, який підтримує поромні маршрути.

:::

## Інші типи прокладання маршруту для човна {#other-routing-types-for-boat}

Тип [прокладання маршруту для човна](#route-parameters---boat) є алгоритмом прокладання маршруту за замовчуванням для профілю човна. Хоча ви можете вибрати інший тип прокладання маршруту, який також підходить для навігації човном:

- [Прокладання маршруту прямо до точки для човна](./boat-navigation.md#direct-to-point-routing-for-boat)
- [Прокладання маршруту по прямій лінії для човна](./boat-navigation.md#straight-line-routing-for-boat)

Важливо зазначити, що типи прокладання маршруту *прямо до точки* та *по прямій лінії* слід використовувати лише у відкритій воді, де немає перешкод або небезпек для навігації. Якщо ви рухаєтеся водним шляхом з певним каналом або маршрутом, вам слід використовувати тип прокладання маршруту для човна в OsmAnd, який проведе вас через правильні навігаційні канали та допоможе уникнути мілководдя або інших небезпек.

Ці типи прокладання маршруту для профілю човна можна активувати за таким шляхом: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> або інший) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

### Прокладання маршруту прямо до точки для човна {#direct-to-point-routing-for-boat}

:::note
При використанні типів навігації "Прямо до точки" та "Човен", вам знадобляться [дані контурів глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

Тип [прокладання маршруту прямо до точки](./direct-to-point-routing.md) можна використовувати з профілем човна, коли ви хочете керувати своїм човном у відкритій воді, не дотримуючись певного маршруту чи водного шляху. Цей тип прокладання маршруту дозволяє встановити точку призначення, і OsmAnd розрахує прямий шлях до цієї точки від вашого поточного місцезнаходження. Цей тип прокладання маршруту не враховує характеристики вашого човна, такі як мінімальна та максимальна швидкості, висота та ширина. Ваш маршрут не буде перерахований у разі відхилення.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android_ua.png)

### Прокладання маршруту по прямій лінії для човна {#straight-line-routing-for-boat}

Тип [прокладання маршруту по прямій лінії](./straight-line-routing) можна використовувати з профілем човна, коли ви хочете керувати своїм човном у відкритій воді, але віддаєте перевагу прямій лінії, а не вигнутому маршруту до точки призначення. Це може бути корисно при навігації до віддаленої точки, яка, наприклад, видно на горизонті.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android_ua.png)

## Інші налаштування прокладання маршруту {#other-routing-settings}

- Алгоритм прокладання маршруту також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції прокладання маршруту, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android* — у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації по треку або онлайн-маршруту. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: травень 2025*