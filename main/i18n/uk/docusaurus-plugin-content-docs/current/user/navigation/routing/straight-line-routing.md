---
source-hash: 1ca5ebf392132069b1b5beabb8bfe492c629807a3258b756d15d406a2613de59
sidebar_position: 10
title: Маршрутизація по прямій (Літак)
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

На відміну від традиційних алгоритмів маршрутизації, які використовують дороги, стежки або заздалегідь визначені маршрути, маршрутизація по прямій лінії розраховує найкоротшу відстань між двома точками на карті як пряму лінію. Ця функція може бути корисною для активних туристів, які хочуть прокласти маршрут подалі від стежок або дослідити віддалені райони, де традиційні маршрути можуть бути недоступні. Для пілотів легкомоторних літаків та капітанів суден використання *типу маршрутизації по прямій лінії* може бути дуже корисним у навігації.

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- *Маршрутизація по прямій лінії* не враховує жодних перешкод, які можуть бути присутні на місцевості, таких як гори, річки або густі ліси.
- Вона не надає жодної інформації про якість місцевості, рівень складності маршруту або будь-які інші відповідні фактори, які можуть вплинути на безпеку або доцільність маршруту (розділ [Деталі маршруту](../setup/route-details.md) порожній).

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Параметри маршруту - Пряма лінія {#route-parameters---straight-line}

:::note
Маршрутизація по прямій лінії пов'язана з *профілем Літак*. За замовчуванням цей профіль деактивований. Щоб використовувати цей профіль для маршрутизації, його потрібно увімкнути в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Маршрутизацію *по прямій лінії* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) Налаштувань навігації.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* | <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/> </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details> | Коли кут між розрахованим маршрутом та фактичним географічним розташуванням перевищує встановлений вами, буде побудовано найкоротший шлях від вашого поточного положення до розрахованого маршруту. Іншими словами, OsmAnd розрахує додатковий сегмент маршруту до раніше розрахованого маршруту. |