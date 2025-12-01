---
source-hash: c31f972d3a691c26a3a583de116eb13a83d2589b7e5d44d3162198717f9b326f
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

Плагін **Місце паркування** допомагає зберігати та керувати місцем, де ви припаркували свій автомобіль. Він дозволяє розмістити маркер на мапі, відстежувати тривалість паркування та, за бажанням, встановити нагадування в календарі про закінчення часу паркування.

Цей плагін є безкоштовним і працює в автономному режимі із завантаженими мапами OsmAnd. Ви можете швидко знайти свій припаркований автомобіль, оцінити відстань пішки до нього та за потреби поділитися місцем паркування.

- Ви можете додати місце для паркування вручну через контекстне меню.
- Якщо паркування обмежене в часі, плагін записує час початку та закінчення.
- Час закінчення може викликати нагадування в календарі вашого пристрою.
- Деталі паркування можна переглянути пізніше або використати для навігації.

Маркер є тимчасовим, і його легко видалити, коли він більше не потрібен.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет паркування Android](@site/static/img/plugins/parking/parking_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет паркування iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати місце для паркування на мапі, вам потрібно виконати наступні налаштування:

1. Увімкніть [плагін Місце паркування](../plugins/index.md#enable--disable) в *Головному меню → Плагіни*.  
2. Встановіть [місце для паркування](#set-a-spot) на мапі через контекстне меню.
3. (За бажанням) Додайте [віджет Паркування](#parking-widget) на екран для швидшого доступу.  


## Місце паркування на мапі {#parking-spot-on-the-map}

Коли ви позначаєте місце для паркування, OsmAnd зберігає його географічні координати разом із часовою міткою. За потреби можна також додати обмеження за часом і нагадування в календарі. Місця для паркування зберігаються як **Улюблені точки**. Щоб переконатися, що маркер паркування видимий на мапі, [Улюблені](../personal/favorites.md) потрібно увімкнути.


### Встановити місце {#set-a-spot}

Щоб встановити місце для паркування на мапі, збільште масштаб до потрібного рівня, потім довгим дотиком торкніться місця на мапі та у [Контекстному меню](../map/map-context-menu.md), що відкриється, виконайте налаштування.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Встановлення місця паркування в Android](@site/static/img/plugins/parking/and_set_p_point_limit.png) ![Встановлення часових обмежень в Android](@site/static/img/plugins/parking/and_set_p_point4_.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Вибір паркування в діях на iOS](@site/static/img/plugins/parking/ios_set_p_point2.png)  ![Встановлення точки паркування на iOS](@site/static/img/plugins/parking/ios_set_p_point3_-2.png)

</TabItem>

</Tabs>

Щоб розмістити маркер паркування, збільште масштаб мапи, довгим дотиком торкніться потрібного місця та відкрийте [контекстне меню](../map/map-context-menu.md). Потім:

1. Натисніть [Дії](../map/map-context-menu#actions).
2. Виберіть **Позначити як місце паркування** (*Android*) або **Додати місце паркування** (*iOS*).
3. Виберіть один із доступних варіантів:
   - **Без обмеження часу** – додає базовий маркер без зворотного відліку.
   - **Паркування з обмеженням часу** – дозволяє встановити час закінчення та за бажанням створити нагадування в календарі вашого пристрою.
4. Підтвердьте розміщення маркера. Час початку зберігається автоматично.

:::info Час початку
Час початку завжди встановлюється автоматично. Якщо вам потрібно змінити час закінчення, ви повинні видалити та створити місце для паркування заново. Нагадування додаються до вашого календаря, лише якщо ви вибрали цю опцію під час налаштування.
:::


### Будьте в курсі {#stay-informed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет паркування Android](@site/static/img/plugins/parking/parking_widget_android.png)

![Залишилося часу в Android](@site/static/img/plugins/parking/and_parking_info_left.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Віджет паркування iOS](@site/static/img/plugins/parking/parking_widget_ios.png)

![Інформація про паркування на iOS](@site/static/img/plugins/parking/ios_parking_info.png)


</TabItem>

</Tabs>

Після збереження місця паркування OsmAnd допомагає вам відстежувати його місцезнаходження та час через контекстне меню або додатковий [віджет Паркування](#parking-widget).

Ви можете переглянути маркер паркування, зменшивши масштаб мапи або торкнувшись **віджета Паркування**, який центрує мапу на збереженому місці. Віджет також показує відстань від вашого поточного положення (або центру мапи) до місця паркування.

Додаткові деталі відображаються при натисканні на маркер паркування:

- **Час початку** – момент, коли було встановлено маркер.
- **Залишилося часу** або **Час минув** – якщо було встановлено обмеження за часом, це показує, скільки часу залишилося або минуло з моменту закінчення.
- Якщо ви увімкнули нагадування в календарі, воно з'явиться в додатку календаря вашого пристрою.


### Навігація до точки маршруту {#navigating-to-a-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Напрямок до точки паркування в Android](@site/static/img/plugins/parking/and_navigating_to_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Напрямок до точки паркування на iOS](@site/static/img/plugins/parking/ios_going_to_parking.png)

</TabItem>

</Tabs>

Ви можете використовувати місце для паркування як ціль навігації, щоб легко повернутися до свого автомобіля. OsmAnd пропонує два основні способи розпочати навігацію до збереженого місця паркування:

**Через меню Навігація**:

  1. Натисніть кнопку **Навігація**.  
  2. Виберіть профіль.  
  3. Натисніть **Встановити пункт призначення** та виберіть **Паркування** зі списку збережених точок.

**Через віджет Паркування**:

  1. Натисніть **віджет Паркування**.  
  2. Натисніть на маркер місця паркування.  
  3. Виберіть **Навігація** та профіль, який ви хочете використовувати.


### Видалити місце {#remove-a-spot}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дія Видалити паркування в Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!-- ![Action Delete Parking in Android](@site/static/img/map/context_menu_limited_parking.png) -->
  
![Дія Видалити паркування на iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Щоб видалити маркер паркування:

1. Знайдіть місце для паркування на мапі або торкніться **віджета Паркування**.
2. Торкніться маркера, щоб відкрити контекстне меню.
3. Виберіть **Видалити** або **Відхилити**.

Якщо було встановлено нагадування в календарі, воно також буде видалено автоматично.


## Віджет Паркування {#parking-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="map_widget_parking"/>*  

![Додавання віджета Паркування в Android](@site/static/img/plugins/parking/and_adding_parking_widget_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="parking_place"/>*  

![Додавання віджета Паркування на iOS](@site/static/img/plugins/parking/ios_adding_parking_widget-2.png)

</TabItem>

</Tabs>

[Віджет Паркування](../widgets/info-widgets.md#parking-widget) показує відстань від центру екрана до збереженого місця паркування та дозволяє швидко центрувати мапу на цьому місці.

- Віджет видимий лише після встановлення місця паркування.
- Якщо віджет ще не на екрані, ви можете додати його через меню [Налаштувати екран](../widgets/configure-screen.md).

Щоб дізнатися більше, дивіться: [Інформаційні віджети – Віджет паркування](https://osmand.net/docs/user/widgets/info-widgets#parking-widget)


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)