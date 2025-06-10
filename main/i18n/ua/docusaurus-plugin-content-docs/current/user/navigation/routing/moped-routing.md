---
source-hash: f3ae7502efc866393db44fa06909a99ed7ca0f9aec1864d654e84235132cb2f5
sidebar_position: 4
title:  Маршрути для мопедів
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

*Маршрути для мопедів* дозволяють водіям будувати оптимальний (найшвидший) маршрут, враховуючи специфіку керування таким транспортним засобом, як мопед чи скутер. Процес маршрутизації враховує різні фактори для безпечного, комфортного та легального пересування дорогами чи велосипедними доріжками.

:::note
За замовчуванням *Профіль мопеда* деактивовано. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Параметри маршруту - Мопед {#route-parameters---moped}

*Маршрути для мопедів* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

Налаштування маршрутизації для мопеда дуже прості і складаються лише з кількох опцій.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Налаштування маршрутизації для мопеда Android](@site/static/img/navigation/routing/moped_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування маршрутизації для мопеда iOS](@site/static/img/navigation/routing/moped_routing_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникнути під час навігації.  </summary>![Уникнути доріг Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Ви можете або [вибрати дорогу на карті](../../map/map-context-menu/#avoid-road), або вибрати тип(и) дороги зі списку:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, який перевозить транспортні засоби через водойми)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання доріг та інших транспортних шляхів, а також будівель, входів, зручностей та об'єктів відпочинку.   |


## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android* — у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Це найчастіше трапляється при навігації по треку або онлайн-маршруту. Його потрібно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: Червень 2024*