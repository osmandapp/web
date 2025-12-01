---
source-hash: 76bfae8b6346115687fd1268df49ae83691792da2e5ef2e1b6a05d4692239228
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

## Огляд {#overview}

:::info Платна функція
Плагін "Показники автомобіля" — це [платна функція](../purchases/index.md) застосунку OsmAnd. Інформація про швидкість автомобіля та швидкість двигуна доступна у безплатній версії OsmAnd.
:::

Плагін **"Показники автомобіля"** дозволяє відстежувати дані автомобіля в реальному часі за допомогою [протоколу OBD-II](https://en.wikipedia.org/wiki/OBD-II_PIDs). Користувачі можуть відстежувати основні показники, такі як продуктивність двигуна, ефективність пального та швидкість, що дозволяє завчасно проводити технічне обслуговування та діагностику несправностей.  

[Сканери OBD-II](https://en.wikipedia.org/wiki/ELM327) є невід'ємною частиною сучасної автомобільної діагностики. Завдяки потоковій передачі даних у реальному часі користувачі отримують миттєве уявлення про системи автомобіля, що полегшує профілактичне обслуговування та знижує витрати на ремонт. Ці інструменти є життєво важливими як для особистого використання, так і для професійних автосервісів.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування OBD](@site/static/img/plugins/obd/obd_overview_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування OBD](@site/static/img/plugins/obd/obd_overview_ios.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати дані зі сканера OBD-II:

1. [Придбайте](../purchases/) **підписку OsmAnd Pro**. (*Швидкість автомобіля* та *Швидкість двигуна* доступні безплатно.)  
2. [Увімкніть](../plugins/index.md#enable--disable) плагін "Показники автомобіля" у розділі "Плагіни" *Головного меню*.
3. **Увімкніть** Bluetooth на вашому пристрої.
4. [Підключіть](#pair-odb-ii-scanner) сканер OBD-II до порту вашого автомобіля.
5. [Налаштуйте](#scanner-settings) **параметри сканера**.
6. [Додайте](#widgets) **віджети "Показники автомобіля"** для відображення даних на екрані (необов'язково).
7. [Використовуйте](#trip-recording)плагін **"Запис поїздки"** для запису даних автомобіля.


### Створення пари зі сканером ODB-II {#pair-odb-ii-scanner}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|  |  |
|--|--|
|![Підключення OBD](@site/static/img/plugins/obd/obd_connect.png)|![Підключення OBD](@site/static/img/plugins/obd/obd_connect_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|  |  |
|--|--|
|![Підключення OBD](@site/static/img/plugins/obd/obd_connect_ios.png)|![Підключення OBD](@site/static/img/plugins/obd/obd_connect_ios_2.png)|

</TabItem>

</Tabs>

Підключіть сканер до порту вашого автомобіля та створіть пару з ним через застосунок:

- Перейдіть до *Меню → Плагіни → Показники автомобіля → Налаштування → Підключити* або **+**.
- Якщо "Показники автомобіля" є в *Головному меню*:  *Меню → Показники автомобіля → Налаштування → Підключити* або **+**.

Виберіть свій пристрій OBD-II зі списку та встановіть з'єднання.


## Налаштування сканера {#scanner-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Плагіни → Показники автомобіля → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![Налаштування OBD](@site/static/img/plugins/obd/obd_settings.png)|![Налаштування OBD](@site/static/img/plugins/obd/obd_settings_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Плагіни → Показники автомобіля → OBD → меню з трьома крапками*

|  |  |
|--|--|
|![Налаштування OBD](@site/static/img/plugins/obd/obd_settings_ios.png)|![Налаштування OBD](@site/static/img/plugins/obd/obd_settings_ios_1.png)|

</TabItem>

</Tabs>

- **Підключити / Відключити**. Встановлює або розриває з'єднання з датчиком OBD-II.
- **Налаштування**. Відкриває екран налаштувань OBD-II, що дозволяє керувати з'єднанням та отримувати доступ до доступних параметрів автомобіля.
- **Перейменувати**. Дозволяє призначити власну назву датчику для легшої ідентифікації.
- **Забути**. Видаляє раніше спарений датчик OBD-II зі списку, що вимагає повторного створення пари, якщо це знадобиться пізніше.

**Поведінка повторного підключення** *(лише Android)***:** OsmAnd автоматично намагається повторно підключитися до адаптера OBD-II під час запуску застосунку, початку навігації або запуску Android Auto. Якщо з'єднання недоступне, віджети "Показники автомобіля" відображають «–». Одне натискання на будь-який віджет "Показники автомобіля" спробує повторно підключитися до датчика. Якщо датчик уже підключено, натискання перемикає режими відображення віджета як зазвичай.


## Список показників {#metrics-list}

Для ясності показники згруповані за категоріями. Розширені діагностичні інструменти дозволяють проводити профілактичне обслуговування шляхом інтерпретації цих параметрів:

*Температура:*

- **Температура на впуску**. Показує температуру повітря, що надходить у впускний колектор.
- **Температура навколишнього середовища**. Відстежує зовнішні умови.
- **Температура охолоджувальної рідини**. Відстежує ефективність охолодження двигуна.
- **Температура мастила двигуна**. Показує стан мастила під час роботи.

*Двигун:*

- **Швидкість двигуна**. Відстежує оберти двигуна за хвилину (RPM).
- **Час роботи двигуна**. Відстежує час роботи двигуна.
- **Розрахункове навантаження на двигун**. Показує відсоток навантаження на двигун.

*Пальне:*

- **Тиск пального**. Показує тиск у паливній системі.
- **Споживання пального**. Розраховує споживання пального автомобілем.
- **Залишок пального**. Показує рівень пального в автомобілі.

*Інше:*

- **Рівень заряду акумулятора**. Показує рівень напруги акумулятора автомобіля.
- **Напруга адаптера**. Відображає напругу, що подається на адаптер OBD-II (команда AT RV).
- **Швидкість автомобіля**. Показує дані датчика швидкості автомобіля (VSS).
- **Положення дросельної заслінки**. Визначає забір повітря двигуном за кутом дросельної заслінки.  
  **VIN**. Показує 17-значний ідентифікаційний номер автомобіля.


## Запис поїздки {#trip-recording}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,record_obd_data"/>*

| | |
|--|--|
|![Запис OBD](@site/static/img/plugins/obd/obd_recording.png)| ![Запис OBD](@site/static/img/plugins/obd/obd_recording_1.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS**. Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,record_plugin_name,shared_string_settings,data_settings,obd_plugin_name"/>*

| | |
|--|--|
|![Запис OBD](@site/static/img/plugins/obd/obd_recording_ios.png)| ![Запис OBD](@site/static/img/plugins/obd/obd_recording_ios_1.png)|

</TabItem>

</Tabs>



Щоб включити дані OBD-II у файл GPX, вам потрібно вибрати бажані параметри для запису за допомогою [плагіна "Запис поїздки"](../plugins/trip-recording.md#recording-settings). Це дозволить вам аналізувати показники автомобіля разом з даними вашої поїздки.

### Теги {#tags}

OsmAnd застосовує власні назви тегів для показників автомобіля у [файлі GPX](../plugins/trip-recording.md#recorded-gpx-file). Наприклад:

- `vm_eotemp`: Температура мастила двигуна.
- `vm_fpress`: Тиск пального.
- `vm_espeed`: Швидкість двигуна.

Ці теги полегшують ідентифікацію та використання конкретних даних автомобіля під час перегляду записаного файлу GPX.


## Віджети {#widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**Android.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Виберіть панель → Показники автомобіля*

| | |
|--|--|
|![Налаштування OBD](@site/static/img/plugins/obd/obd_widget_1.png)| ![Налаштування OBD](@site/static/img/plugins/obd/obd_widget.png)|


</TabItem>

<TabItem value="ios" label="iOS">

**iOS.** Перейдіть до: *Меню → Налаштувати екран → Віджети → Виберіть панель → Показники автомобіля*

| | |
|--|--|
|![Налаштування OBD](@site/static/img/plugins/obd/obd_widget_ios_1.png)| ![Налаштування OBD](@site/static/img/plugins/obd/obd_widget_ios.png)|

</TabItem>

</Tabs>



[Віджети "Показники автомобіля"](../widgets/info-widgets.md#vehicle-metrics-widgets) автоматично додаються при увімкненні плагіна. Якщо вони не відображаються, ви можете додати їх вручну через меню [Налаштувати екран](../widgets/configure-screen.md).

### Налаштування віджетів {#widget-settings}

Віджети відображають ключові дані з підключеного пристрою OBD-II в реальному часі, такі як швидкість, показники двигуна та споживання пального. Переконайтеся, що вони видимі перед початком поїздки, щоб безперешкодно відстежувати показники.

Деякі віджети пропонують опції режиму відображення:

- **Миттєве**. Відображає дані в реальному часі для вибраного показника.
- **Середнє**. Відображає усереднені значення за налаштований проміжок часу (від 15 секунд до 60 хвилин).

Деякі віджети, включно з *Споживання пального*, адаптують свої одиниці відображення та регіональні формати метрик на основі [Налаштувань профілю](https://osmand.net/docs/user/personal/profiles#units--formats). При використанні одиниць об'єму, відмінних від літрів, Споживання пального підтримує відображення значень як милі на галон (MPG). Точний тип MPG залежить від вибраної одиниці об'єму:

- Галлони США → MPG (США)
- Імперські галлони → MPG (Велика Британія)

Віджет автоматично вибирає відповідний формат відповідно до вибраних <Translate android="true" ids="routing_attr_length_name"/> та <Translate android="true" ids="shared_string_volume"/> одиниць в активному профілі, і ваш вибраний режим відображення зберігається при експорті та імпорті профілів.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)