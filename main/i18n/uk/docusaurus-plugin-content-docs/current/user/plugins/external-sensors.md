---
source-hash: 9d1531d9555eb2840386ca7a59c86b6aaea01e503c8115d6bb52a5af5ac3dfed
sidebar_position: 5
title:  Зовнішні датчики
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
Плагін "Зовнішні датчики" — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

**Плагін "Зовнішні датчики"** дозволяє зчитувати та записувати дані з [бездротових зовнішніх датчиків](https://en.wikipedia.org/wiki/Wireless_sensor_network), що працюють за технологіями [ANT+](https://en.wikipedia.org/wiki/ANT_(network)) та [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy), та відображати ці дані за допомогою [віджетів](#widgets) у застосунку OsmAnd. Ця керована мережа здатна збирати, передавати та зберігати дані датчиків.

> *ПРИМІТКА: iPhone та iPad не підтримують ANT+ через апаратні обмеження.*

**Плагін "Зовнішні датчики"** отримує доступ до зовнішніх датчиків та може зчитувати такі дані:

- *Частота серцевих скорочень*
- *Потужність велосипеда*
- *Каденс велосипеда*
- *Швидкість велосипеда*
- *Відстань велосипеда*
- *Температура*

Щоб використовувати плагін, переконайтеся, що ваш пристрій [сумісний](#pair-new-sensor), плагін [увімкнено](../plugins/#enable--disable), а зовнішні датчики підключено через Bluetooth (BLE).


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб почати використовувати дані із зовнішніх датчиків, виконайте такі дії:

1. [Придбайте](../purchases/) **підписку OsmAnd Pro**, щоб розблокувати плагін "Зовнішні датчики".
2. [Увімкніть](../plugins/#enable--disable) плагін у *Меню → Плагіни*.
3. **Увімкніть Bluetooth** на своєму пристрої, щоб дозволити підключення до **датчиків BLE**.
4. [Підключіть та налаштуйте](#pair-new-sensor) зовнішні датчики через меню плагіна.
5. (Необов'язково) [Додайте](#widgets) **віджети "Зовнішні датчики"** на екран мапи, щоб відображати дані в реальному часі, такі як частота серцевих скорочень, каденс або рівень заряду батареї.
6. (Необов'язково) Використовуйте [плагін "Запис поїздки"](../plugins/trip-recording.md) для запису даних датчиків у треки GPX.
7. (Необов'язково, тільки для Android) Дотримуйтесь [цих порад](https://www.thisisant.com/consumer/ant-101/ant-in-phones) для підключення датчиків ANT+, якщо ваш пристрій їх підтримує.


### Підключити новий датчик {#pair-new-sensor}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_1.png) | ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| | |
| --- | --- |
| ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_first_start_ios.png) |  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_bluetooth_turned_off_ios.png) |

</TabItem>

</Tabs>

Щоб підключити новий датчик, виконайте такі дії:

1. Переконайтеся, що на вашому пристрої **увімкнено Bluetooth**.
2. Перейдіть до *Меню → Плагіни → Зовнішні датчики → Налаштування*.
3. Натисніть **Підключити новий датчик**.
4. OsmAnd скануватиме на наявність доступних датчиків **Bluetooth LE** або **ANT+** (залежно від вашої платформи).
5. Натисніть кнопку **+** поруч із датчиком, який ви хочете підключити.
6. Після підключення датчик з'явиться у списку **Підключені пристрої**.

***Примітки:***

- На **iOS** підтримуються лише датчики **Bluetooth Low Energy (BLE)** через апаратні обмеження. Датчики ANT+ недоступні.
- На **Android** можуть підтримуватися як датчики BLE, так і ANT+ залежно від вашого пристрою. Докладніше див. у [посібнику з сумісності ANT+](https://www.thisisant.com/consumer/ant-101/ant-in-phones).
- **Спливаюче повідомлення** з'являтиметься щоразу, коли датчик підключається або відключається.
- **Датчики потужності велосипеда** доступні лише на Android через ANT+.


## Налаштування датчика {#sensor-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

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
- **Перейменувати** – призначити датчику власну назву.
- **Забути датчик** – видалити датчик зі списку (можна повторно підключити пізніше).
- **Налаштування** – відкрити екран деталей датчика (тип датчика, значення, рівень заряду батареї, налаштування окружності колеса).

***Примітки:***

- На **iOS** ви можете відображати **рівень заряду батареї** підключених датчиків BLE безпосередньо у [віджеті](#widgets) мапи. Щоб увімкнути це, перейдіть до: *Меню → Налаштувати екран → Вибрати панель → Додати віджет → Зовнішній датчик → Налаштування → Показати → Рівень заряду батареї*
- Спливаюче повідомлення з'являється, коли **рівень заряду батареї підключеного датчика падає нижче 15%**.


## Запис поїздки {#trip-recording}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*

![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_1.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_trip_recording_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,shared_string_external"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_5_ios.png)  ![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_pair_sensors_6_ios.png)

</TabItem>

</Tabs>

Щоб записувати дані датчиків за допомогою [плагіна "Запис поїздки"](../plugins/trip-recording.md#recording-settings) під час вашої поїздки:

1. Переконайтеся, що **плагін "Зовнішні датчики"** увімкнено.
2. Перейдіть до *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,external_sensor_widgets"/>*.
3. Виберіть типи датчиків, які ви хочете записувати (наприклад, каденс, частота серцевих скорочень, швидкість).
4. Почніть запис поїздки. OsmAnd збереже вибрані дані датчиків у трек GPX.

***Примітки:***

- Список доступних типів датчиків відображається, навіть якщо датчики не підключені.
- Якщо датчики ще не підключено, скористайтеся кнопкою [Підключити новий датчик](#pair-new-sensor) у налаштуваннях плагінів.
- Дані про рівень заряду батареї **не** записуються у файли GPX і недоступні для аналізу на мапі.

:::note Сумісність форматів
OsmAnd використовує [запис треку](../plugins/trip-recording.md#recorded-gpx-file) для вбудовування даних датчиків у файли GPX. Цей формат сумісний з багатьма спортивними та тренувальними застосунками (наприклад, Strava, Runkeeper).
:::


### Аналіз даних {#data-analyze}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_andr.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_1_ios.png)  ![External sensors](@site/static/img/plugins/sensors/external_sensors_plugin_analyze_3_ios.png)

</TabItem>

</Tabs>

Після запису поїздки за допомогою [плагіна "Запис поїздки"](../plugins/trip-recording.md#recording-settings), ви можете переглянути дані датчиків в інтерфейсі аналізу треку.

Щоб проаналізувати дані:

1. Завершіть запис поїздки.
2. Відкрийте записаний трек з *Мої місця → Треки* або натисніть на трек на мапі.
3. Виберіть *Опції → Аналізувати на мапі* з контекстного меню треку.

Це відобразить графіки для ваших записаних даних: *Частота серцевих скорочень*, *Швидкість*, *Каденс*, *Потужність велосипеда* та *Температура*.

> *Рівень заряду батареї та Відстань недоступні у функції [Аналізувати трек на мапі](../map/tracks/index.md#analyze-track-on-map).*


## Віджети {#widgets}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/>*

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1_andr.png)  ![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate ios="true" ids="external_sensors_plugin_name"/>*

![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_1_ios.png)  ![External sensors widgets iOS](@site/static/img/plugins/sensors/external_sens_widg_3_ios.png)

</TabItem>

</Tabs>

[Віджет "Зовнішні датчики"](../widgets/info-widgets.md#external-sensors-widgets) дозволяє відображати дані в реальному часі з підключених датчиків безпосередньо на екрані мапи.

Перед початком поїздки:

- Переконайтеся, що плагін "Зовнішні датчики" увімкнено.
- Відкрийте *Налаштувати екран* та додайте необхідні віджети до відповідної панелі.

Підтримувані типи віджетів:

1. **<Translate android="true" ids="map_widget_ant_heart_rate"/>** – відображає частоту серцевих скорочень у реальному часі з підключеного монітора.
2. **<Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*тільки для Android*) – показує поточну потужність педалювання у ватах.
3. **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>** – показує кількість обертів педалей за хвилину.
4. **<Translate android="true" ids="map_widget_ant_bicycle_speed"/>** – поточна швидкість руху на велосипеді.
5. **<Translate android="true" ids="map_widget_ant_bicycle_dist"/>** – загальна відстань, виміряна датчиком.
6. **<Translate android="true" ids="external_device_characteristic_temperature"/>** – поточна температура навколишнього середовища.
7. **Рівень заряду батареї** (*тільки для iOS*) – відсоток заряду батареї, що залишився в підключеному датчику BLE.


### Налаштування віджета {#widget-settings}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="external_sensor_widgets"/> → Вибрати віджет → <Translate android="true" ids="shared_string_settings"/>*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Вибрати панель → Додати віджет → Зовнішній датчик → Вибрати віджет → Налаштування*

![External sensors widgets Settings Android](@site/static/img/plugins/sensors/external-sensors-widget-settings-ios.png)

</TabItem>

</Tabs>

За замовчуванням віджет показує перший підключений датчик цього типу. Якщо ви хочете використовувати конкретний датчик, натисніть **Джерело даних** та виберіть зі списку підключених датчиків.

На **iOS** ви можете вибрати, яке значення відображати у віджеті:

- **Дані датчика** (наприклад, каденс, швидкість).
- **Рівень заряду батареї** – відсоток заряду батареї вибраного датчика в реальному часі.

> *Це корисно, коли ви хочете контролювати заряд батареї під час тривалих поїздок, щоб уникнути відключень.*


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)

> *Останнє оновлення: Травень 2025*