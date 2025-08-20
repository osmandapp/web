---
source-hash: 500ba2b5b26271c7c71fe60664983abc42fa4483e3831b67196c41ebe60e8fd4
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

Плагін **Місце паркування** допомагає зберігати та керувати місцем, де ви припаркували свій автомобіль. Він дозволяє розмістити маркер на карті, відстежувати тривалість паркування та, за бажанням, встановити нагадування в календарі про закінчення часу паркування.

Цей плагін є безкоштовним і працює офлайн із завантаженими картами OsmAnd. Ви можете швидко знайти свій припаркований транспортний засіб, оцінити відстань пішки до нього та поділитися місцем паркування, якщо це необхідно.

- Ви можете додати місце паркування вручну через контекстне меню.
- Якщо час обмежений, плагін записує як час початку, так і час закінчення.
- Час закінчення може викликати нагадування в календарі вашого пристрою.
- Деталі паркування можна переглянути пізніше або використати для навігації.

Маркер є тимчасовим і легко видаляється, коли він більше не потрібен.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати місце паркування на карті, необхідно зробити наступні налаштування:

1. Увімкніть [плагін "Місце паркування"](../plugins/index.md#enable--disable) з *Головного меню → Плагіни*.
2. Встановіть [місце паркування](#set-a-spot) на карті за допомогою контекстного меню.
3. (Необов'язково) Додайте [віджет "Паркування"](#parking-widget) на екран для швидшого доступу.


## Місце паркування на карті {#parking-spot-on-the-map}

Коли ви позначаєте місце паркування, OsmAnd зберігає його географічні координати разом із позначкою часу. За потреби також можна додати обмеження часу та нагадування в календарі.


### Встановити місце {#set-a-spot}

Щоб встановити місце паркування на карті, збільште масштаб до потрібного рівня, потім довго натисніть на місце на карті та в [Контекстному меню](../map/map-context-menu.md), що відкриється, зробіть налаштування.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Set Parking spot in Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Set time limits in Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select Parking in Actions in iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Set Parking point in iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Щоб розмістити маркер паркування, збільште масштаб карти, довго натисніть на потрібне місце та відкрийте [контекстне меню](../map/map-context-menu.md). Потім:

1. Натисніть [Дії](../map/map-context-menu#actions).
2. Виберіть **Позначити як місце паркування** (*Android*) або **Додати місце паркування** (*iOS*).
3. Виберіть один з доступних варіантів:
   - **Без обмеження часу** – додає базовий маркер без зворотного відліку.
   - **Паркування з обмеженням часу** – дозволяє встановити час закінчення та, за бажанням, створити нагадування в календарі вашого пристрою.
4. Підтвердіть розміщення маркера. Час початку зберігається автоматично.

:::info Час початку
Час початку завжди встановлюється автоматично. Якщо вам потрібно змінити час закінчення, ви повинні видалити та повторно створити місце паркування. Нагадування додаються до вашого календаря лише в тому випадку, якщо ви вибрали цю опцію під час налаштування.
:::


### Будьте в курсі {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Parking widget Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Time left in Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Parking widget iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Parking info in iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Після збереження місця паркування OsmAnd допомагає вам відстежувати його розташування та час через контекстне меню або додатковий [віджет "Паркування"](#parking-widget).

Ви можете переглянути маркер паркування, зменшивши масштаб карти або натиснувши на **віджет "Паркування"**, який центрує карту на збереженому місці. Віджет також показує відстань від вашого поточного положення (або центру карти) до місця паркування.

Додаткові деталі відображаються при натисканні на маркер паркування:

- **Час початку** – момент розміщення маркера.
- **Залишилося часу** або **Час прострочено** – якщо було встановлено обмеження часу, це показує, скільки часу залишилося або скільки часу минуло з моменту закінчення.
- Якщо ви ввімкнули нагадування в календарі, воно з'явиться у вашому календарному додатку.


### Навігація до проміжної точки {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Heading to Parking point in Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Heading to Parking point in iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Ви можете використовувати місце паркування як ціль навігації, щоб легко повернутися до свого транспортного засобу. OsmAnd пропонує два основні способи розпочати навігацію до збереженого місця паркування:

**Через меню навігації**:

  1. Натисніть кнопку **Навігація**.
  2. Виберіть профіль.
  3. Натисніть **Встановити пункт призначення** та виберіть **Паркування** зі списку збережених точок.

**Через віджет "Паркування"**:

  1. Натисніть **віджет "Паркування"**.
  2. Натисніть маркер місця паркування.
  3. Виберіть **Навігація** та виберіть профіль, який ви хочете використовувати.


### Видалити місце {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->

![Action Delete Parking in iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Щоб видалити маркер паркування:

1. Знайдіть місце паркування на карті або натисніть **віджет "Паркування"**.
2. Натисніть маркер, щоб відкрити контекстне меню.
3. Виберіть **Видалити** або **Відхилити**.

Якщо було встановлено нагадування в календарі, воно також буде видалено автоматично.


## Віджет "Паркування" {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_parking"/>*

![Adding Parking widget in Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="parking_place"/>*

![Adding Parking widget in iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Віджет "Паркування"](../widgets/info-widgets.md#parking-widget) показує відстань від центру екрана до збереженого місця паркування та дозволяє швидко центрувати карту на цьому місці.

- Віджет відображається лише після встановлення місця паркування.
- Якщо його ще немає на екрані, ви можете додати його через меню [Налаштування екрана](../widgets/configure-screen.md).

Щоб дізнатися більше, дивіться: [Інформаційні віджети – Віджет "Паркування"](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: травень 2025*