---
source-hash: 82311f61fc7e617e22d754968f02e6ec8009c51ecb4943a18c23ef0a9d897cfd
sidebar_position: 5
title: Зовнішні датчики
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

:::info Платна функція
Плагін «Зовнішні датчики» — це [платна функція](../purchases/index.md) програми OsmAnd.
:::

**Плагін «Зовнішні датчики»** дозволяє зчитувати та записувати дані з [бездротових зовнішніх датчиків](https://en.wikipedia.org/wiki/Wireless_sensor_network), що працюють за технологіями [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) та [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy), а також відображати ці дані за допомогою [віджетів](#widgets) у програмі OsmAnd. Ця керована мережа здатна збирати, передавати та зберігати дані датчиків.

> *ПРИМІТКА: iPhone та iPad не підтримують ANT+ через апаратні обмеження.*

**Плагін «Зовнішні датчики»** отримує доступ до зовнішніх датчиків і може зчитувати такі дані, як:

- *Частота серцевих скорочень*
- *Потужність велосипеда*
- *Каденс велосипеда*
- *Швидкість велосипеда*
- *Відстань велосипеда*
- *Температура*

Щоб використовувати плагін, переконайтеся, що ваш пристрій [сумісний](#pair-new-sensor), плагін [увімкнено](../plugins/#enable--disable), а зовнішні датчики підключено через Bluetooth (BLE).


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб почати використовувати дані із зовнішніх датчиків, виконайте такі дії:

1. [Придбайте](../purchases/) **підписку OsmAnd Pro**, щоб розблокувати плагін «Зовнішні датчики».
2. [Увімкніть](../plugins/#enable--disable) плагін у *Меню → Плагіни*.
3. **Увімкніть Bluetooth** на своєму пристрої, щоб дозволити підключення до **датчиків BLE**.
4. [Підключіть та налаштуйте](#pair-new-sensor) зовнішні датчики через меню плагіна.
5. (Необов'язково) [Додайте](#widgets) **віджети зовнішніх датчиків** на екран карти, щоб відображати дані в реальному часі, такі як частота серцевих скорочень, каденс або рівень заряду батареї.
6. (Необов'язково) Використовуйте [плагін «Запис поїздки»](../plugins/trip-recording.md) для запису даних датчиків у GPX-треки.
7. (Необов'язково, лише Android) Дотримуйтесь [цих порад](https://www.thisisant.com/consumer/ant-101/ant-in-phones), щоб підключити датчики ANT+, якщо ваш пристрій їх підтримує.


### Підключити новий датчик {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Щоб підключити новий датчик, виконайте такі дії:

1. Переконайтеся, що **Bluetooth увімкнено** на вашому пристрої.
2. Перейдіть до *Меню → Плагіни → Зовнішні датчики → Налаштування*.
3. Торкніться **Підключити новий датчик**.
4. OsmAnd шукатиме доступні датчики **Bluetooth LE** або **ANT+** (залежно від вашої платформи).
5. Торкніться кнопки **+** поруч із датчиком, який потрібно підключити.
6. Після підключення датчик з'явиться у списку **Підключених пристроїв**.

***Примітки:***

- На **iOS** підтримуються лише датчики **Bluetooth Low Energy (BLE)** через апаратні обмеження. Датчики ANT+ недоступні.
- На **Android** можуть підтримуватися як датчики BLE, так і ANT+ залежно від вашого пристрою. Дивіться [посібник із сумісності ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones) для отримання додаткової інформації.
- **Спливаюче сповіщення** з'являтиметься щоразу, коли датчик підключається або відключається.
- **Датчики потужності велосипеда** доступні лише на Android через ANT+.


## Налаштування датчика {#sensor-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Використовуйте один із наступних шляхів, щоб відкрити налаштування датчика:

- *<Translate android="true" ids="shared_string_menu,plugin_settings,external_sensors_plugin_name"/> → Доступний пристрій → Налаштування*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,external_sensors_plugin_name"/> → Доступний пристрій → Налаштування*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Використовуйте один із наступних шляхів, щоб відкрити налаштування датчика:

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,external_sensors_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,selected_profile,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)

</TabItem>

</Tabs>

Кожен підключений зовнішній датчик, перелічений в OsmAnd, має власний екран конфігурації з такими опціями:

- **Підключити / Відключити** – перемикання стану підключення.
- **Перейменувати** – призначити власну назву датчику.
- **Забути датчик** – видалити датчик зі списку (можна повторно підключити пізніше).
- **Налаштування** – відкрити екран деталей датчика (тип датчика, значення, рівень заряду батареї, налаштування довжини кола колеса).

***Примітки:***

- На **iOS** ви можете відображати **рівень заряду батареї** підключених датчиків BLE безпосередньо у віджеті карти [віджеті](#widgets). Щоб увімкнути це, перейдіть до: *Меню → Налаштувати екран → Вибрати панель → Додати віджет → Зовнішній датчик → Налаштування → Показати → Рівень заряду батареї*
- З'являється спливаюче сповіщення, коли рівень заряду батареї підключеного датчика **опускається нижче 15%**.


## Запис поїздки {#trip-recording}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png) ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Щоб записати дані датчиків за допомогою [плагіна «Запис поїздки»](../plugins/trip-recording.md#recording-settings) під час вашої поїздки:

1. Переконайтеся, що **плагін «Зовнішні датчики»** увімкнено.
2. Перейдіть до *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Виберіть типи датчиків, які ви хочете записати (наприклад, каденс, частота серцевих скорочень, швидкість).
4. Почніть запис поїздки. OsmAnd збереже вибрані дані датчиків у GPX-трек.

***Примітки:***

- Список доступних типів датчиків відображається, навіть якщо датчики не підключені.
- Якщо датчики ще не підключені, скористайтеся кнопкою [Підключити новий датчик](#pair-new-sensor) у налаштуваннях плагінів.
- Дані про рівень заряду батареї **не** записуються у файли GPX і недоступні для аналізу на карті.

:::note Сумісність форматів
OsmAnd використовує [запис треку](../plugins/trip-recording.md#recorded-gpx-file) для вбудовування даних датчиків у файли GPX. Цей формат сумісний з багатьма спортивними та тренувальними програмами (наприклад, Strava, Runkeeper).
:::


### Аналіз даних {#data-analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png) ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Після запису поїздки за допомогою [плагіна «Запис поїздки»](../plugins/trip-recording.md#recording-settings) ви можете переглядати дані датчиків в інтерфейсі аналізу треку.

Щоб проаналізувати дані:

1. Завершіть запис поїздки.
2. Відкрийте записаний трек з *Мої місця → Треки* або торкніться треку на карті.
3. Виберіть *Опції → Аналізувати на карті* з контекстного меню треку.

Це відобразить графіки для ваших записаних даних: *Частота серцевих скорочень*, *Швидкість*, *Каденс*, *Потужність велосипеда* та *Температура*

> *Рівень заряду батареї та Відстань недоступні у функції [Аналізувати на карті](../map/tracks/index.md#analyze-track-on-map).*


## Віджети {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png) ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → Додати віджет → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png) ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

[Віджет «Зовнішні датчики»](../widgets/info-widgets.md#external-sensors-widgets) дозволяє відображати дані в реальному часі з підключених датчиків безпосередньо на екрані карти.

Перед початком поїздки:

- Переконайтеся, що плагін «Зовнішні датчики» увімкнено.
- Відкрийте *Налаштувати екран* та додайте необхідні віджети до відповідної панелі.

Підтримувані типи віджетів:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – відображає частоту серцевих скорочень у реальному часі з підключеного монітора.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*лише Android*) – показує поточну потужність педалювання у ватах.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – показує кількість обертів педалей за хвилину.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – поточна швидкість їзди на велосипеді.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – загальна відстань, виміряна датчиком.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – поточна температура навколишнього середовища.
7. **Рівень заряду батареї** (*лише iOS*) – відсоток заряду батареї, що залишився в підключеному датчику BLE.


### Налаштування віджетів {#widget-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Виберіть панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/> → Виберіть віджет → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → Додати віджет → Зовнішній датчик → Виберіть віджет → Налаштування*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

За замовчуванням віджет показує перший підключений датчик цього типу. Якщо ви хочете використовувати певний датчик, торкніться **Джерело даних** і виберіть зі списку підключених датчиків.

На **iOS** ви можете вибрати, яке значення відображати у віджеті:

- **Дані датчика** (наприклад, каденс, швидкість).
- **Рівень заряду батареї** – відсоток заряду батареї вибраного датчика в реальному часі.

> *Це корисно, коли ви хочете контролювати заряд батареї під час тривалих поїздок, щоб уникнути відключень.*


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: травень 2025*