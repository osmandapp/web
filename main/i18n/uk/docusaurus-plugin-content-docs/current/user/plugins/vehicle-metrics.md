---
source-hash: 7cce24b2cd87bfae38687f74d452a20648b7bb08c58e4e9a6b8489cb8398e2a2
sidebar_position: 16
title:  Показники автомобіля
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


<InfoIncompleteArticle/>


## Огляд {#overview}

:::info Платна функція
Плагін "Показники автомобіля" — це [платна функція](../purchases/index.md) застосунку OsmAnd. Інформація про швидкість автомобіля та швидкість двигуна доступна в безкоштовній версії OsmAnd.
:::

**Плагін "Показники автомобіля"** дозволяє відстежувати дані автомобіля в режимі реального часу за допомогою [протоколу OBD-II](https://uk.wikipedia.org/wiki/OBD-II_PIDs). Користувачі можуть відстежувати основні показники, такі як продуктивність двигуна, ефективність використання палива та швидкість, що дозволяє завчасно обслуговувати та усувати несправності автомобіля.

[Сканери OBD-II](https://uk.wikipedia.org/wiki/ELM327) є невід'ємною частиною сучасної автомобільної діагностики. Завдяки потоковій передачі даних у реальному часі користувачі отримують миттєве уявлення про системи автомобіля, що сприяє профілактичному обслуговуванню та зменшенню витрат на ремонт. Ці інструменти є життєво важливими як для особистого використання, так і для професійних автомобільних послуг.

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

1. [Придбайте](../purchases/) **підписку OsmAnd Pro**. (*Швидкість автомобіля* та *Швидкість двигуна* є безкоштовними.)
2. [Увімкніть](../plugins/index.md#enable--disable) плагін "Показники автомобіля" у розділі "Плагіни" *Головного меню*.
3. **Увімкніть** Bluetooth на своєму пристрої.
4. [Під'єднайте](#pair-odb-ii-scanner) сканер OBD-II до порту вашого автомобіля.
5. [Налаштуйте](#scanner-settings) **налаштування сканера**.
6. [Додайте](#widgets) **віджети "Показники автомобіля"** для відображення даних на екрані (необов'язково).
7. [Використовуйте](#trip-recording) **плагін "Запис поїздки"** для запису даних автомобіля.


### Під'єднання сканера ODB-II {#pair-odb-ii-scanner}


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

Під'єднайте сканер до порту вашого автомобіля та під'єднайте його через застосунок:

- Перейдіть до *Меню → Плагіни → Показники автомобіля → Налаштування → Під'єднати* або **+**.
- Якщо "Показники автомобіля" знаходиться в *Головному меню*: *Меню → Показники автомобіля → Налаштування → Під'єднати* або **+**.

Виберіть свій пристрій OBD-II зі списку та встановіть з'єднання.


## Налаштування сканера {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Плагіни → Показники автомобіля → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Плагіни → Показники автомобіля → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios.png)|![OBD settings](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Під'єднати / Від'єднати**. Встановлює або розриває з'єднання з датчиком OBD-II.
- **Налаштування**. Відкриває екран налаштувань OBD-II, дозволяючи керувати з'єднанням та отримувати доступ до доступних параметрів автомобіля.
- **Перейменувати**. Дозволяє призначити власну назву датчику для легшої ідентифікації.
- **Забути**. Видаляє раніше під'єднаний датчик OBD-II зі списку, вимагаючи повторного під'єднання, якщо знадобиться пізніше.


## Список показників {#metrics-list}

Показники класифіковані для ясності. Розширені діагностичні інструменти дозволяють здійснювати профілактичне обслуговування, інтерпретуючи ці параметри:

*Температура:*

- **Температура на впуску**. Відображає температуру повітря, що надходить у впускний колектор.
- **Температура навколишнього середовища**. Моніторинг зовнішніх умов.
- **Температура охолоджувальної рідини**. Відстежує ефективність охолодження двигуна.
- **Температура моторного масла**. Відображає стан масла під час роботи.

*Двигун:*

- **Швидкість двигуна**. Моніторинг обертів двигуна за хвилину (RPM).
- **Час роботи двигуна**. Відстежує час роботи двигуна.
- **Розраховане навантаження на двигун**. Вказує відсоток навантаження на двигун.

*Паливо:*

- **Тиск палива**. Вказує тиск у паливній системі.
- **Витрата палива**. Розраховує витрату палива автомобілем.
- **Залишок палива**. Вказує рівень палива в автомобілі.

*Інше:*

- **Рівень заряду акумулятора**. Вказує рівень напруги акумулятора автомобіля.
- **Швидкість автомобіля**. Відображає дані датчика швидкості автомобіля (VSS).
- **Положення дросельної заслінки**. Визначає надходження повітря в двигун за кутом дросельної заслінки.
  **VIN**. Відображає 17-значний ідентифікаційний номер автомобіля.


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



Щоб включити дані OBD-II у файл GPX, вам потрібно вибрати бажані параметри для запису за допомогою [плагіна "Запис поїздки"](../plugins/trip-recording.md#recording-settings). Це дозволяє аналізувати показники автомобіля разом з даними вашої поїздки.

#### Теги {#tags}

OsmAnd застосовує власні назви тегів для показників автомобіля у [файлі GPX](../plugins/trip-recording.md#recorded-gpx-file). Наприклад:

- `vm_eotemp`: Температура моторного масла.
- `vm_fpress`: Тиск палива.
- `vm_espeed`: Швидкість двигуна.

Ці теги полегшують ідентифікацію та використання конкретних даних автомобіля під час перегляду записаного файлу GPX.


## Віджети {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Виберіть панель → Показники автомобіля*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Виберіть панель → Показники автомобіля*

| | |
|--|--|
|![OBD settings](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![OBD settings](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Віджети "Показники автомобіля"](../widgets/info-widgets.md#vehicle-metrics-widgets) автоматично додаються, коли ви вмикаєте плагін. Якщо вони не відображаються, ви можете додати їх вручну через меню [Налаштувати екран](../widgets/configure-screen.md).

### Налаштування віджетів {#widget-settings}

Віджети відображають ключові дані з під'єднаного пристрою OBD-II в режимі реального часу, такі як швидкість, показники двигуна та витрата палива. Переконайтеся, що вони видимі перед початком поїздки, щоб безперешкодно відстежувати показники.

Деякі віджети пропонують варіанти режиму відображення:

- **Миттєво**. Відображає дані в реальному часі для вибраного показника.
- **Середнє**. Відображає усереднені значення за настроюваний інтервал часу (від 15 секунд до 60 хвилин).


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: серпень 2025*