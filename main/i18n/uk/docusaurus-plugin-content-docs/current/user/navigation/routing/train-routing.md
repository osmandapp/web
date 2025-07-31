---
source-hash: 5622b3c06a619b7597895ee507b9910943c93a7d5ec31ddecd00215481e51e29
sidebar_position: 7
title:  Маршрутизація для поїздів
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

:::note
За замовчуванням *Профіль поїзда* деактивовано. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Маршрутизація для поїздів* в OsmAnd надає користувачам можливість використовувати залізничні лінії для навігації, ніби вони керують поїздом, як автомобілем. Ця опція може бути корисною, наприклад, для піших прогулянок, коли інші дороги недоступні. В інших випадках краще використовувати *[Маршрутизацію громадського транспорту](./public-transport-navigation.md)*.

![Map transport tram](@site/static/img/navigation/routing/train_routing_overview.png)


## Параметри маршруту - Поїзд {#route-parameters---train}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Train routing settings Android](@site/static/img/navigation/routing/train_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Train routing settings iOS](@site/static/img/navigation/routing/train_routing_ios.png)

</TabItem>

</Tabs>

*Маршрутизацію для поїздів* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) налаштувань навігації.


## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* можна увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* можна спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштування навігації → Параметри маршруту* (для *Android* — у *Параметри транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ці налаштування також можна встановити для маршрутизації *Прямо до точки*. Воно використовується для розрахунку очікуваного часу прибуття.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш підходящий маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: червень 2024*