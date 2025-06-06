---
source-hash: 7886d20b60129101c75a883dd77c03e78e331f576c204f6a947fc11e7494deff
sidebar_position: 6
title:  Лижний маршрут

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

:::note
Прокладання лижних маршрутів та лижний профіль доступні лише за умови активації [плагіна Перегляд лижних карт](../../plugins/ski-maps.md).
:::

*Прокладання лижних маршрутів* може бути особливо корисним для лижників, які займаються скі-туром, гірськолижників та інших любителів зимових видів спорту, які хочуть дослідити нові території та заздалегідь спланувати свої поїздки. За допомогою *прокладання лижних маршрутів* користувачі OsmAnd можуть планувати маршрути та безпечно орієнтуватися, насолоджуючись красою зимових пейзажів.

*Прокладання лижних маршрутів* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) в Налаштуваннях навігації.

![Map routes - ski slopes](@site/static/img/navigation/routing/ski_routing_overview.png)


## Параметри маршруту - Лижі {#route-parameters---ski}

:::note
За замовчуванням *Лижний профіль* деактивовано. Щоб використовувати цей профіль для прокладання маршрутів, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Налаштування *прокладання лижних маршрутів* дозволяють користувачам планувати свої маршрути, вибираючи бажаний рівень складності та тип місцевості, яку вони хочуть дослідити. Існують різні варіанти для безпечного, комфортного та приємного пересування по трасах або під час фрірайду.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ski routing settings Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ski routing settings Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski routing settings iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Параметр | Дозволяє використовувати для прокладання маршруту | Примітка |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Рекомендований [маршрут для скі-туру](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) або територія, яка зазвичай використовується багатьма лижниками протягом сезону для скандинавського підйому та спуску в беккантрі. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Більш [складні маршрути](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) будуть дозволені для прокладання маршруту. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Виберіть один з варіантів для фрірайду. </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Використання [гірськолижних підйомників](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) буде увімкнено |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Санки](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) - це менші транспортні засоби, які тягне людина або які рухаються лише під дією сили тяжіння. Якщо увімкнено, [санні траси](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) будуть використовуватися для прокладання лижних маршрутів |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |


## Інші налаштування маршрутизації {#other-routing-settings}

- Алгоритм маршрутизації також може враховувати тимчасові обмеження, зазначені в OpenStreetMap. Це можна зробити за допомогою опції *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)*. Зауважте, що в деяких випадках інформація з OSM може бути застарілою.

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* можна увімкнути та налаштувати параметри перерахунку маршруту.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* можна спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише за умови увімкнення [плагіна Розробка OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android* - у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Це налаштування використовується на невідомих дорогах без обмежень швидкості. Найчастіше це відбувається при навігації по треку або онлайн-маршруту. Його необхідно встановити відповідно до параметрів вашого транспортного засобу.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Ця стаття востаннє оновлювалася в червні 2024 року*