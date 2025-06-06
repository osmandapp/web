---
source-hash: 233a4f242e18610a3a2cb1c046d14118d980144c24a70cdd73cda0a085f1935d
sidebar_position: 12
title:  Місце паркування
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

Плагін **Місце паркування** допоможе вам зберегти та керувати місцем, де ви припаркували свій автомобіль. Він дозволяє розмістити маркер на мапі, відстежувати тривалість паркування та, за бажанням, встановити нагадування в календарі про закінчення часу паркування.

Цей плагін безкоштовний і працює офлайн із завантаженими мапами OsmAnd. Ви можете швидко знайти свій припаркований автомобіль, оцінити відстань пішки до нього та поділитися місцем паркування, якщо це необхідно.

- Ви можете додати місце паркування вручну через контекстне меню.
- Якщо час обмежений, плагін записує час початку та закінчення.
- Час закінчення може викликати нагадування в календарі вашого пристрою.
- Деталі паркування можна переглянути пізніше або використовувати для навігації.

Маркер тимчасовий і його легко видалити, коли він більше не потрібен.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати місце паркування на мапі, вам потрібно зробити наступні налаштування:

1. Увімкніть [плагін Місце паркування](../plugins/index.md#enable--disable) з *Головного меню → Плагіни*.
2. Встановіть [місце паркування](#set-a-spot) на мапі через контекстне меню.
3. (Необов'язково) Додайте [віджет Паркування](#parking-widget) на екран для швидшого доступу.


## Місце паркування на мапі {#parking-spot-on-the-map}

Коли ви позначаєте місце паркування, OsmAnd зберігає його географічні координати разом із часовою міткою. За необхідності також можна додати обмеження часу та нагадування в календарі.


### Встановити місце {#set-a-spot}

Щоб встановити місце паркування на мапі, збільште масштаб до потрібного рівня, потім довго натисніть на місце на мапі та в [Контекстному меню](../map/map-context-menu.md), що відкриється, зробіть налаштування.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Щоб розмістити маркер паркування, збільште масштаб мапи, довго натисніть на потрібне місце та відкрийте [контекстне меню](../map/map-context-menu.md). Потім:

1. Натисніть [Дії](../map/map-context-menu#actions).
2. Виберіть **Позначити як місце паркування** (*Android*) або **Додати місце паркування** (*iOS*).
3. Виберіть один із доступних варіантів:
   - **Без обмеження часу** – додає базовий маркер без зворотного відліку.
   - **Паркування з обмеженням часу** – дозволяє встановити час закінчення та, за бажанням, створити нагадування в календарі вашого пристрою.
4. Підтвердьте, щоб розмістити маркер. Час початку зберігається автоматично.

:::info Час початку
Час початку завжди встановлюється автоматично. Якщо вам потрібно змінити час закінчення, ви повинні видалити та створити місце паркування заново. Нагадування додаються до вашого календаря лише якщо ви вибрали цю опцію під час налаштування.
:::


### Будьте в курсі {#stay-informed}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Після збереження місця паркування OsmAnd допомагає вам відстежувати його місцезнаходження та час через контекстне меню або додатковий [віджет Паркування](#parking-widget).

Ви можете переглянути маркер паркування, зменшивши масштаб мапи або натиснувши на **віджет Паркування**, який центрує мапу на збереженому місці. Віджет також показує відстань від вашого поточного положення (або центру мапи) до місця паркування.

Додаткові деталі відображаються при натисканні на маркер паркування:

- **Час початку** – момент, коли маркер був розміщений.
- **Залишилося часу** або **Час прострочено** – якщо було встановлено обмеження часу, це показує, скільки часу залишилося або скільки часу минуло з моменту закінчення.
- Якщо ви увімкнули нагадування в календарі, воно з'явиться в додатку календаря вашого пристрою.


### Навігація до точки {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Ви можете використовувати місце паркування як ціль навігації, щоб легко повернутися до свого автомобіля. OsmAnd пропонує два основні способи розпочати навігацію до збереженого місця паркування:

**Через меню Навігація**:

  1. Натисніть кнопку **Навігація**.
  2. Виберіть профіль.
  3. Натисніть **Встановити пункт призначення** та виберіть **Паркування** зі списку збережених точок.

**Через віджет Паркування**:

  1. Натисніть на **віджет Паркування**.
  2. Натисніть на маркер місця паркування.
  3. Виберіть **Навігація** та виберіть профіль, який ви хочете використовувати.


### Видалити місце {#remove-a-spot}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Щоб видалити маркер паркування:

1. Знайдіть місце паркування на мапі або натисніть на **віджет Паркування**.
2. Натисніть на маркер, щоб відкрити контекстне меню.
3. Виберіть **Видалити** або **Відхилити**.

Якщо було встановлено нагадування в календарі, воно також буде видалено автоматично.


## Віджет Паркування {#parking-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_parking"/>*

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="parking_place"/>*

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Віджет Паркування](../widgets/info-widgets.md#parking-widget) показує відстань від центру екрана до збереженого місця паркування та дозволяє швидко центрувати мапу на цьому місці.

- Віджет видно лише після встановлення місця паркування.
- Якщо його ще немає на екрані, ви можете додати його через меню [Налаштувати екран](../widgets/configure-screen.md).

Щоб дізнатися більше, дивіться: [Інформаційні віджети – Віджет Паркування](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)

> *Цю статтю востаннє оновлено у травні 2025 року*