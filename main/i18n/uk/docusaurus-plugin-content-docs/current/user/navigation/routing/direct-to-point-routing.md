---
source-hash: 7bb36bac225a4637bd0fd319dba2e8fd27253ed4e7e1a35a1b7cda4be6a24614
sidebar_position: 9
title:  Навігація за прямою (Човен)
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

Навігація за прямою в OsmAnd — це корисна функція, яка дозволяє вам переміщатися безпосередньо до певної точки на карті без необхідності слідувати заздалегідь визначеним маршрутом або дорожньою мережею. Цю функцію можуть використовувати капітани човнів,
любителі активного відпочинку або аварійно-рятувальні служби під час рятувальних операцій. Загалом, навігація за прямою є гнучкою та універсальною функцією, яку можна використовувати в різних ситуаціях, коли традиційні методи навігації можуть бути недоречними або неефективними.

![Тип навігації за прямою Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Точка на лінії — це віртуальна точка, відстань від якої до пункту призначення така ж, як і відстань від вашого поточного місцезнаходження, але це не проєкція вашого поточного місцезнаходження на лінію. Це полегшує вимірювання прогресу, і ви можете використовувати інструмент вимірювання, щоб отримати правильну відстань.


## Параметри маршруту - Навігація за прямою {#route-parameters---direct-to-point}

Тип маршрутизації *Навігація за прямою* не прив'язаний до жодного профілю і може використовуватися з різними профілями.
Цей тип маршрутизації не враховує жодних перешкод або бар'єрів, які можуть бути присутніми на місцевості, таких як гори, річки або густі ліси. Він також не надає жодної інформації про якість місцевості, рівень складності маршруту або будь-які інші відповідні фактори, які можуть вплинути на безпеку або доцільність маршруту (розділ [Деталі маршруту](../setup/route-details.md) порожній).

:::note
При використанні типів навігації Навігація за прямою та Човен вам знадобляться [Дані контурів глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → будь-який профіль → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Налаштування маршрутизації за прямою](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → будь-який профіль → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Налаштування маршрутизації за прямою iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>


## Інші налаштування маршрутизації {#other-routing-settings}

- У розділі [*Перерахувати маршрут*](../../navigation/guidance/navigation-settings.md#recalculate-route) *Параметрів маршруту* ви можете увімкнути та налаштувати параметри перерахунку маршруту. Значення за замовчуванням становить 0 метрів відхилення, що означає, що маршрут не перераховується.

- У розділі [*Розробка*](../guidance/navigation-settings.md#development-settings) *Параметрів маршруту* ви можете спробувати нові функції маршрутизації, які наразі перебувають на стадії тестування. Зауважте, що ці налаштування доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

- Налаштування *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* у версії OsmAnd для *iOS* знаходиться в *Налаштування навігації → Параметри маршруту* (для *Android* — у *Параметри транспортного засобу → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). Ці налаштування також можна встановити для маршрутизації *Навігація за прямою*. Вони використовуються для розрахунку очікуваного часу прибуття.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Правильне налаштування параметрів допоможе вам уникнути проблем при створенні маршруту. Ви можете вибрати найбільш відповідний маршрут залежно від типу транспортного засобу та дорожніх обмежень, а також розрахувати час у дорозі.

> *Останнє оновлення: Червень 2024*