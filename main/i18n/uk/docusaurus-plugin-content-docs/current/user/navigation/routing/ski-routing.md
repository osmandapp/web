---
source-hash: 2428f76d4d2b174f4096091771998583d1804e3fbc62cf63cf7e6bf40e95cc8c
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
Прокладання лижних маршрутів та лижний профіль доступні лише після активації [плагіна "Лижні карти"](../../plugins/ski-maps.md).
:::

*Прокладання лижних маршрутів* може бути особливо корисним для лижників-позатрасників, гірськолижників та інших любителів зимових видів спорту, які хочуть досліджувати нові території та планувати свої поїздки заздалегідь. Завдяки *прокладанню лижних маршрутів* користувачі OsmAnd можуть планувати маршрути та безпечно пересуватися, насолоджуючись красою зимових пейзажів.

*Прокладання лижних маршрутів* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) налаштувань навігації.

![Карта маршрутів - лижні траси](@site/static/img/navigation/routing/ski_routing_overview.png)


## Параметри маршруту - Лижі {#route-parameters---ski}

:::note
За замовчуванням *Лижний профіль* деактивовано. Щоб використовувати цей профіль для прокладання маршрутів, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Налаштування *прокладання лижних маршрутів* дозволяють користувачам планувати свої маршрути, вибираючи бажаний рівень складності та тип місцевості, яку вони хочуть досліджувати. Існують різні варіанти для безпечного, комфортного та приємного пересування по трасах або під час фрірайду.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування лижного маршруту Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Налаштування лижного маршруту Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування лижного маршруту iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Параметр | Дозволяє використовувати для прокладання маршруту | Примітка |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> | `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type` |
|*<Translate android="true" ids="app_mode_ski_touring"/>* | <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | Рекомендований [лижний маршрут](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) або ділянка, яка зазвичай використовується багатьма лижниками протягом сезону для нордичного підйому та спуску в позатрасовій місцевості. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* | <Translate android="true" ids="routing_attr_allow_advanced_description"/> | Будуть дозволені [складніші маршрути](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) для прокладання маршруту. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* | <details><summary> Виберіть один з варіантів для фрірайду. </summary>![Поза трасою Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* | <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Буде увімкнено використання [лижних підйомників](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) | <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* | <Translate android="true" ids="routing_attr_allow_classic_only_description"/>| |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* | <Translate android="true" ids="routing_attr_allow_expert_description"/>| |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* | <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Сани](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) — це менші транспортні засоби, які тягне людина або які рухаються лише під дією сили тяжіння. Якщо увімкнено, [санні траси](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) будуть використовуватися для прокладання лижних маршрутів |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* | <Translate android="true" ids="routing_attr_allow_intermediate_description"/>| |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* | <details><summary> <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Поза трасою Android](@site/static/img/navigation/routing/offpiste_android.png) </details> | |