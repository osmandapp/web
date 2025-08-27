---
source-hash: 1cb08bcd8ee7ef526cb41a67a59668e7c8cf614ee888f222e7e39337a0e136c1
sidebar_position: 8
title:  Прокладання маршруту для човна
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

Прокладання маршруту для човна може бути цінним інструментом для тих, хто любить кататися на човні або плавати каналами, річками чи фарватерами. Через відсутність більшості фарватерів у даних OpenStreetMap, прокладання маршруту для човна *не рекомендується* для **навігації у відкритій воді**, замість цього пропонується використовувати **[Прямо до точки](#direct-to-point-routing-for-boat)**. Завдяки увімкненим лініям контуру глибини, це може допомогти вам залишатися в безпеці на воді, уникаючи таких небезпек, як мілководдя, скелі або інші перешкоди.
Двигун прокладання маршруту для човна OsmAnd також враховує характеристики водних шляхів та самих човнів.

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
За замовчуванням *Профіль човна* деактивовано. Щоб використовувати цей профіль для прокладання маршруту, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Прокладання маршруту для човна можна налаштувати відповідно до ваших потреб у [розділі Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

Зазвичай *Прокладання маршруту для човна* використовується з профілем човна (останній увімкнений разом із [Плагіном морських карт](../../plugins/nautical-charts.md)). Однак, можна використовувати прокладання маршруту для човна також з іншими профілями, а також можуть бути використані різні [типи прокладання маршруту](#other-routing-types-for-boat) у профілі човна.


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
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Дозволяє використовувати струмки та дренажі для навігації човном. Увімкнення цієї опції може бути корисним для невеликих човнів, таких як каное, каяки, плоти, гребні човни. | [Струмки](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) — це природні водні шляхи, які занадто вузькі, щоб їх можна було назвати річкою. [Дренажі](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) — це штучні водні шляхи, зазвичай облицьовані бетоном або подібним матеріалом, що використовуються для відведення зайвої води, такої як дощова вода або сірі стоки.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Увімкнення цієї опції дозволяє використовувати переривчасті водні шляхи для навігації човном. | Тег [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) використовується для позначення того, що водний шлях не містить води постійно. |


:::note Водна навігація та обмеження

1. Профіль човна призначений для прокладання маршрутів річками, озерами та іншими водними шляхами. Він підтримує такі теги OSM, як:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, тощо.

2. Профіль човна **не підтримує поромні маршрути (`route=ferry`)**. Це означає, що поромні маршрути, навіть якщо вони присутні на карті, **не будуть використовуватися** при розрахунку маршрутів для човнів.

3. Щоб вручну слідувати поромній лінії:

    - Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md) та вручну розміщуйте проміжні точки.
    - Використовуйте профіль автомобіля, який підтримує поромні маршрути

:::

## Інші типи прокладання маршруту для човна {#other-routing-types-for-boat}

Тип [прокладання маршруту для човна](#route-parameters---boat) є алгоритмом прокладання маршруту за замовчуванням для профілю човна. Хоча ви можете вибрати інший тип прокладання маршруту, який також підходить для навігації човном:

 - [Прокладання маршруту прямо до точки для човна](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Прокладання маршруту по прямій лінії для човна](./boat-navigation.md#straight-line-routing-for-boat)

Важливо зазначити, що типи прокладання маршруту *Прямо до точки* та *Пряма лінія* слід використовувати лише у відкритій воді, де немає перешкод або небезпек для навігації. Якщо ви здійснюєте навігацію водним шляхом з певним каналом або маршрутом, вам слід використовувати тип прокладання маршруту для човна в OsmAnd, який проведе вас правильними навігаційними каналами та допоможе уникнути мілководдя або інших небезпек.

Ці типи прокладання маршруту для профілю човна можна активувати за таким шляхом: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> або інший) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Прокладання маршруту прямо до точки для човна {#direct-to-point-routing-for-boat}

:::note
При використанні типів навігації "Прямо до точки" та "Човен" вам знадобляться [дані контурів глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

Тип [прокладання маршруту прямо до точки](./direct-to-point-routing.md) можна використовувати з профілем човна, коли ви хочете керувати своїм човном у відкритій воді, не дотримуючись певного маршруту чи водного шляху. Цей тип прокладання маршруту дозволяє встановити точку призначення, і OsmAnd розрахує прямий шлях до цієї точки від вашого поточного місцезнаходження. Цей тип прокладання маршруту не враховує характеристики вашого човна, такі як мінімальна та максимальна швидкість, висота та ширина. Ваш маршрут не буде перерахований у разі відхилення.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Прокладання маршруту по прямій лінії для човна {#straight-line-routing-for-boat}

Тип [прокладання маршруту по прямій лінії](./straight-line-routing) можна використовувати з профілем човна, коли ви хочете керувати своїм човном у відкритій воді, але віддаєте перевагу прямій лінії, а не вигнутому маршруту до точки призначення. Це може бути корисним при навігації до віддаленої точки, яка видно на горизонті, наприклад.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)