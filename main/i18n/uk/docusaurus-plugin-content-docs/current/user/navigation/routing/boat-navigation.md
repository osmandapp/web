---
source-hash: 69c9152b46bd602e4e14ecd9e4b32486e697cb14ccb9d69f550affbb8ed29cd6
sidebar_position: 8
title:  Маршрути для човнів
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

Маршрути для човнів можуть бути цінним інструментом для всіх, хто любить плавати на човнах або яхтах по каналах, річках або фарватерах. Через відсутність більшості фарватерів у даних OpenStreeetMap, маршрути для човнів *не рекомендуються* для **навігації у відкритій воді**, натомість пропонується використовувати **[Прямо до точки](#direct-to-point-routing-for-boat)**. З увімкненими лініями глибин це може допомогти вам залишатися в безпеці на воді, уникаючи таких небезпек, як мілководдя, скелі або інші перешкоди.
Механізм маршрутизації для човнів OsmAnd також враховує характеристики водних шляхів та самих човнів.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Екран навігації для човна Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Екран навігації для човна iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Параметри маршруту - Човен {#route-parameters---boat}

:::note
За замовчуванням *профіль Човен* вимкнено. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрути для човнів можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../../navigation/guidance/navigation-settings.md#route-parameters) налаштувань навігації.  

Зазвичай *маршрутизація для човнів* використовується з профілем "Човен" (останній вмикається разом із [плагіном "Морські карти"](../../plugins/nautical-charts.md)). Однак, можна використовувати маршрутизацію для човнів і з іншими профілями, а також застосовувати різні [типи маршрутизації](#other-routing-types-for-boat) у профілі "Човен".


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">


![Налаштування маршрутизації для човна Android](@site/static/img/navigation/routing/boat_route_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування маршрутизації для човна iOS](@site/static/img/navigation/routing/boat_route_ios.png)  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Дозволяє використовувати струмки та дренажні канали для навігації човнів. Увімкнення цієї опції може бути корисним для невеликих човнів, таких як каное, каяки, плоти, гребні човни. | [Струмки](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) - це природні водні шляхи, занадто вузькі, щоб називатися річкою. [Дренажні канали](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) - це штучні водні шляхи, зазвичай облицьовані бетоном або подібним матеріалом, що використовуються для відведення зайвої води, наприклад, зливової або стічної. |
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* | Увімкнення цієї опції дозволяє використовувати пересихаючі водні шляхи для навігації човном. | Тег [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) використовується для позначення водного шляху, який не постійно містить воду. |
| *Дозволити пороми* | Дозволяє маршрутизацію по поромних маршрутах. | Використовує `route=ferry`, якщо є в OSM. Нові карти не потрібні. |

:::note Навігація по воді та обмеження

1. Профіль "Човен" призначений для прокладання маршрутів по річках, озерах та інших водних шляхах. Він підтримує такі теги OSM, як:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water` і т.д.

2. Профіль "Човен" також підтримує **поромні маршрути (`route=ferry`)**, якщо увімкнено опцію **Дозволити пороми**. Це означає, що якщо поромні маршрути присутні на карті, вони будуть використовуватися при розрахунку маршрутів для човнів.

3. Якщо в OSM не нанесено відповідних водних шляхів або поромних маршрутів, механізм маршрутизації може не змогти побудувати правильний маршрут. У таких випадках ви можете використовувати інструмент [Планування маршруту](../../plan-route/create-route.md) та розставляти проміжні точки вручну.

:::

## Інші типи маршрутизації для човна {#other-routing-types-for-boat}

Тип [маршрутизації для човнів](#route-parameters---boat) є алгоритмом маршрутизації за замовчуванням для профілю "Човен". Однак ви можете вибрати інший тип маршрутизації, який також підходить для навігації на човні:  

 - [Маршрутизація "Прямо до точки" для човна](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Маршрутизація по прямій лінії для човна](./boat-navigation.md#straight-line-routing-for-boat)

Важливо зазначити, що типи маршрутизації *Прямо до точки* та *По прямій лінії* слід використовувати лише у відкритій воді, де немає перешкод або небезпек для навігації. Якщо ви рухаєтеся водним шляхом з певним каналом або маршрутом, вам слід використовувати тип маршрутизації для човнів в OsmAnd, який проведе вас правильними навігаційними каналами та допоможе уникнути мілководдя чи інших небезпек.  

Ці типи маршрутизації для профілю "Човен" можна активувати за таким шляхом: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> або інший) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Маршрутизація "Прямо до точки" для човна {#direct-to-point-routing-for-boat}

:::note
При використанні типів навігації "Прямо до точки" та "Човен" вам знадобляться [дані про контури глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

Тип [маршрутизації "Прямо до точки"](./direct-to-point-routing.md) можна використовувати з профілем "Човен", коли ви хочете вести свій човен у відкритій воді, не дотримуючись якогось конкретного маршруту чи водного шляху. Цей тип маршрутизації дозволяє встановити пункт призначення, і OsmAnd розрахує прямий шлях до цієї точки з вашого поточного місцезнаходження. Цей тип маршрутизації не враховує характеристики вашого човна, такі як мінімальна та максимальна швидкість, висота та ширина. Ваш маршрут не буде перераховуватися у разі відхилення.

![Тип навігації "Прямо до точки" Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Маршрутизація по прямій лінії для човна {#straight-line-routing-for-boat}

Тип [маршрутизації по прямій лінії](./straight-line-routing) можна використовувати з профілем "Човен", коли ви хочете вести свій човен у відкритій воді, але віддаєте перевагу прямій лінії, а не криволінійному маршруту до пункту призначення. Це може бути корисно, наприклад, при навігації до віддаленої точки, яку видно на горизонті.

![Тип навігації по прямій лінії Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)