---
source-hash: 40096275a9640e7ef939cbd70def70be0e25fa09131e83c5cdc4728272be0fad
sidebar_position: 16
title:  Показники транспортного засобу
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
Плагін "Показники транспортного засобу" — це [платна функція](../purchases/index.md) застосунку OsmAnd. Інформація про швидкість транспортного засобу та швидкість двигуна доступна в безкоштовній версії OsmAnd.
:::

**Плагін "Показники транспортного засобу"** дозволяє моніторити дані транспортного засобу в режимі реального часу за допомогою [протоколу OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Користувачі можуть відстежувати основні показники, такі як продуктивність двигуна, ефективність використання палива та швидкість, що дозволяє завчасно проводити технічне обслуговування та усувати несправності.

[Сканери OBD-II](https://en.wikipedia.org/wiki/ELM327) є невід'ємною частиною сучасної автомобільної діагностики. Завдяки потоковій передачі даних у режимі реального часу користувачі отримують миттєві відомості про системи транспортного засобу, що сприяє профілактичному обслуговуванню та зменшенню витрат на ремонт. Ці інструменти є життєво важливими як для особистого використання, так і для професійних автомобільних послуг.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OBD settings](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OBD settings](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати дані зі сканера OBD-II:

1. [Придбайте](../purchases/) **підписку OsmAnd Pro**. (*Швидкість транспортного засобу* та *Швидкість двигуна* є безкоштовними.)
2. [Увімкніть](../plugins/index.md#enable--disable) плагін "Показники транспортного засобу" в розділі "Плагіни" *Головного меню*.
3. **Увімкніть** Bluetooth на своєму пристрої.
4. [Підключіть](#pair-odb-ii-scanner) сканер OBD-II до порту вашого транспортного засобу.
5. [Налаштуйте](#scanner-settings) **параметри сканера**.
6. [Додайте](#widgets) **віджети "Показники транспортного засобу"** для відображення даних на екрані (необов'язково).
7. [Використовуйте](#trip-recording) **плагін "Запис поїздки"** для запису даних транспортного засобу.


### Підключення сканера ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios.png)|![OBD connection](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Підключіть сканер до порту вашого транспортного засобу та підключіть його через застосунок:

- Перейдіть до *Меню → Плагіни → Показники транспортного засобу → Налаштування → Підключити* або **+**.
- Якщо "Показники транспортного засобу" знаходяться в *Головному меню*: *Меню → Показники транспортного засобу → Налаштування → Підключити* або **+**.

Виберіть свій пристрій OBD-II зі списку та встановіть з'єднання.


## Налаштування сканера {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Плагіни → Показники транспортного засобу → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Плагіни → Показники транспортного засобу → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Підключити / Відключити**. Встановлює або розриває з'єднання з датчиком OBD-II.
- **Налаштування**. Відкриває екран налаштувань OBD-II, дозволяючи керувати підключенням та отримувати доступ до доступних параметрів транспортного засобу.
- **Перейменувати**. Дозволяє призначити власну назву датчику для легшої ідентифікації.
- **Забути**. Видаляє раніше підключений датчик OBD-II зі списку, вимагаючи повторного підключення, якщо це знадобиться пізніше.


## Список показників {#metrics-list}

Показники класифіковані для зручності. Розширені діагностичні інструменти дозволяють проводити профілактичне обслуговування, інтерпретуючи ці параметри:

*Температура:*

- **Температура на впуску**. Відображає температуру повітря, що надходить у впускний колектор.
- **Температура навколишнього середовища**. Моніторить зовнішні умови.
- **Температура охолоджувальної рідини**. Відстежує ефективність охолодження двигуна.
- **Температура моторного масла**. Відображає стан масла під час роботи.

*Двигун:*

- **Швидкість двигуна**. Моніторить оберти двигуна за хвилину (RPM).
- **Час роботи двигуна**. Відстежує час роботи двигуна.
- **Розраховане навантаження на двигун**. Вказує відсоток навантаження на двигун.

*Паливо:*

- **Тиск палива**. Вказує тиск у паливній системі.
- **Витрата палива**. Розраховує витрату палива транспортним засобом.
- **Залишок палива**. Вказує рівень палива в транспортному засобі.

*Інше:*

- **Рівень заряду акумулятора**. Вказує рівень напруги акумулятора транспортного засобу.
- **Швидкість транспортного засобу**. Відображає дані датчика швидкості транспортного засобу (VSS).
- **Положення дросельної заслінки**. Визначає забір повітря двигуном за кутом дросельної заслінки.
  **VIN**. Відображає 17-значний ідентифікаційний номер транспортного засобу.


## Запис поїздки {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![OBD recording](@site/static/img/plugins/obd/obd_recording_ios.png)| ![OBD recording](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Щоб включити дані OBD-II у файл GPX, вам потрібно вибрати бажані параметри для запису за допомогою [плагіна "Запис поїздки"](../plugins/trip-recording.md#recording-settings). Це дозволяє аналізувати показники транспортного засобу разом з даними вашої поїздки.

#### Теги {#tags}

OsmAnd застосовує власні назви тегів для показників транспортного засобу у [файлі GPX](../plugins/trip-recording.md#recorded-gpx-file). Наприклад:

- `vm_eotemp`: Температура моторного масла.
- `vm_fpress`: Тиск палива.
- `vm_espeed`: Швидкість двигуна.

Ці теги полегшують ідентифікацію та використання конкретних даних транспортного засобу під час перегляду записаного файлу GPX.


## Віджети {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Вибрати панель → Показники транспортного засобу*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Вибрати панель → Показники транспортного засобу*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Віджети "Показники транспортного засобу"](../widgets/info-widgets.md#vehicle-metrics-widgets) автоматично включаються, коли ви вмикаєте плагін. Якщо вони не відображаються, ви можете додати їх вручну через меню [Налаштувати екран](../widgets/configure-screen.md).

### Налаштування віджетів {#widget-settings}

Віджети відображають ключові дані з підключеного пристрою OBD-II в режимі реального часу, такі як швидкість, показники двигуна та витрата палива. Переконайтеся, що вони видимі перед початком поїздки, щоб безперешкодно відстежувати показники.

Деякі віджети пропонують варіанти режиму відображення:

- **Миттєво**. Відображає дані в реальному часі для вибраного показника.
- **Середнє**. Відображає усереднені значення за настроюваний інтервал часу (від 15 секунд до 60 хвилин).


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)