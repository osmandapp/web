---
source-hash: 13fd1af76a8741fd09464e167ec356fac8a95838f37bb43f0fc4715f11186d0d
sidebar_position: 9
title:  Пряме маршрутування (Човен)
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

Пряме маршрутування в OsmAnd — це корисна функція, яка дозволяє вам переміщатися безпосередньо до певної точки на карті без необхідності дотримуватися заздалегідь визначеного маршруту або дорожньої мережі. Цю функцію можуть використовувати капітани човнів,
любителі активного відпочинку або аварійні служби під час рятувальних операцій. Загалом, пряме маршрутування — це гнучка та універсальна функція, яку можна використовувати в різних ситуаціях, коли традиційні методи маршрутизації можуть бути недоречними або неефективними.

![Тип прямої навігації Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

Точка на лінії — це віртуальна точка, відстань від якої до пункту призначення така ж, як відстань від вашого поточного місцезнаходження, але це не проєкція вашого поточного місцезнаходження на лінію. Це дозволяє легко вимірювати прогрес, і ви можете використовувати інструмент вимірювання, щоб отримати правильну відстань.


## Параметри маршруту - Пряме маршрутування {#route-parameters---direct-to-point}

Тип маршрутизації *Пряме маршрутування* не прив'язаний до жодного профілю і може використовуватися з різними.
Цей тип маршрутизації не враховує жодних перешкод або бар'єрів, які можуть бути присутніми на місцевості, таких як гори, річки або густі ліси. Він також не надає жодної інформації про якість місцевості, рівень складності маршруту або будь-які інші відповідні фактори, які можуть вплинути на безпеку або доцільність маршруту (розділ [Деталі маршруту](../setup/route-details.md) порожній).

:::note
При використанні типів навігації "Пряме маршрутування" та "Човен" вам знадобляться [Дані контурів глибин](../../plugins/nautical-charts.md#nautical-map-style), які можна увімкнути та налаштувати в *Налаштувати карту*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → будь-який профіль → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Налаштування прямого маршрутування](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → будь-який профіль → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Налаштування прямого маршрутування iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)

</TabItem>

</Tabs>