---
source-hash: 07cb6e5d9285e61a1ab559af18a7232b0ed1b71599b33d53ff8950d689bcc8b4
sidebar_position: 10
title:  Прямолінійне прокладання маршруту (Літак)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


<InfoIncompleteArticle/>


## Огляд {#overview}

На відміну від традиційних алгоритмів прокладання маршрутів, які використовують дороги, стежки або заздалегідь визначені маршрути, прямолінійне прокладання маршруту розраховує найкоротшу відстань між двома точками на карті як пряму лінію. Ця функція може бути корисною для активних туристів, які хочуть прокласти маршрут подалі від стежок або дослідити віддалені райони, де традиційні маршрути можуть бути недоступні. Для пілотів легкомоторних літаків та капітанів суден використання *типу прокладання маршруту "Пряма лінія"* може бути дуже корисним для навігації.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- *Прямолінійне* прокладання маршруту не враховує жодних перешкод або бар'єрів, які можуть бути присутніми на місцевості, таких як гори, річки або густі ліси.
- Воно не надає жодної інформації про якість місцевості, рівень складності маршруту або будь-які інші відповідні фактори, які можуть вплинути на безпеку або здійсненність маршруту (розділ [Деталі маршруту](../setup/route-details.md) порожній).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Параметри маршруту - Пряма лінія {#route-parameters---straight-line}

:::note
Прямолінійне прокладання маршруту пов'язане з *профілем Літак*. За замовчуванням цей профіль деактивовано. Щоб використовувати цей профіль для прокладання маршруту, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Прямолінійне* прокладання маршруту можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) налаштувань навігації.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | Коли кут між розрахованим маршрутом та фактичним геоположенням перевищує встановлений вами, буде побудовано найкоротший шлях від вашого поточного положення до розрахованого маршруту. Іншими словами, OsmAnd розрахує додатковий сегмент маршруту до попередньо розрахованого маршруту. |


## Інші налаштування маршрутизації {#other-routing-settings}

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* відстань, на якій маршрут буде перераховано для *Прямолінійного прокладання маршруту*, за замовчуванням встановлена на 500 метрів.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштуваннях навігації → Параметри маршруту* (для *Android* — у *Параметрах транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ці налаштування також можна встановити для маршрутизації *Прямо до точки*. Вони використовуються для розрахунку очікуваного часу прибуття.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Цю статтю востаннє оновлено в червні 2024 року*