---
source-hash: 88e4f7fd45f03ba362eef617efece8cbb32eac46a5e30d86a6db12675354fa56
sidebar_position: 1
title:  Налаштування
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
## Початкове налаштування {#initial-setup}
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
### Як відновити дані {#how-to-recover-data}
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
Щоб запобігти втраті даних, переконайтеся, що ваші особисті дані, маршрути та карти резервуються. OsmAnd пропонує варіанти експорту ваших даних у різні формати. У разі втрати даних або зміни пристрою, виконайте [ці кроки](https://osmand.net/docs/user/personal/import-export/#preventing-data-loss), щоб відновити дані з резервної копії.


### Як перенести Вибране та Треки на новий пристрій {#how-to-transfer-favorites-and-tracks-to-a-new-device}

- Найпростіший спосіб — експортувати профіль з необхідними даними: *Меню → Налаштування → Експорт →* виберіть дані, які ви хочете експортувати.
- Альтернативно, ви можете створити резервну копію всіх ваших даних з попереднього пристрою, скопіювавши папку, розташовану в *Налаштування → Налаштування OsmAnd → Папка для зберігання даних* (шлях за замовчуванням: `Android/data/net.osmand.plus`). Потім вставте вміст цієї папки в папку для зберігання даних на вашому новому пристрої.


## Імпорт файлів {#import-files}

### У мене є файл GPX, як його імпортувати в OsmAnd? {#i-have-a-gpx-file-how-do-i-import-it-into-osmand}

- **Android**
    - Ви можете [завантажити та відкрити файл](../navigation/setup/gpx-navigation.md) за допомогою файлового менеджера або хмарного сервісу, такого як Dropbox, і вибрати OsmAnd як цільову програму.
    - Альтернативно, помістіть файл у домашню папку OsmAnd: `osmand/tracks/(необов'язкова_підпапка)/ваш_файл.gpx`.

- **iOS**
    - Щоб відкрити [файл GPX в OsmAnd](../navigation/setup/gpx-navigation.md), просто завантажте його та виберіть OsmAnd як програму для відкриття. Потім файл буде доступний для використання в програмі.

### Контурні лінії або тіні рельєфу не відображаються {#contour-lines-or-hillshades-do-not-show-up}

Докладніше про [плагін Топографія](../plugins/topography.md).


## Як увімкнути системні шрифти (Android) {#how-to-enable-system-fonts-android}

Починаючи з версії Android 4.9, OsmAnd інтегрує системний шрифт вашого пристрою в інтерфейс програми, оптимізуючи його дизайн шляхом усунення використання змішаних шрифтів. Системний шрифт автоматично застосовується до всіх елементів інтерфейсу користувача.

- OsmAnd використовує системний шрифт за замовчуванням вашого пристрою у всіх елементах інтерфейсу користувача.
- Перехід на системний шрифт відбувається автоматично. Вам не потрібно налаштовувати будь-які параметри в програмі для цієї функції.
- Ця функція не впливає на шрифти, що відображаються на карті.


## OsmAnd 4.4 (iOS) {#osmand-44-ios}

OsmAnd 4.4 для пристроїв iOS недоступний для версій iOS, старіших за iOS 15.

Це означає, що для встановлення OsmAnd 4.4 вам потрібно оновити вашу ОС щонайменше до iOS 15 або новішої.


<!--
## Storage on an SD card (Android) {#storage-on-an-sd-card-android}

:::note
When you *turn on a USB drive to share files* with a computer or disconnect the SD card through system settings, the external drive is disconnected from the device and all applications running on the external drive are **immediately terminated**. You can [read more here](https://developer.android.com/guide/topics/data/install-location).
:::

### To move the OsmAnd home (maps) folder to an external SD card: {#to-move-the-osmand-home-maps-folder-to-an-external-sd-card}

-   Go to *Settings (on the start screen) →  OsmAnd Settings → Data storage folder*
-   Change the value to a path pointing to the external SD card, on many
    Android systems may contain `/storage/extSdCard` or similar.
    Please note that some versions of Android strictly limit your choice
    of which path will be write-accessible for apps.
-   You are then asked if the contents of the OsmAnd data folder should be moved from
    internal memory to the external SD card.
    You may also perform this manually using a built-in file manager app on the device or via
    connecting the device to a computer as external storage and performing the move from there.


### How do I use my SD card with OsmAnd under Android 4.4+ and 5 {#how-do-i-use-my-sd-card-with-osmand-under-android-44-and-5}

If you update your Android to version 4.4.x, you will experience a known
Android issue with the `WRITE_EXTERNAL_STORAGE` permission: Android has
changed the rules so that from now on no application can write to the
external SD card anywhere outside its new standard folder
`Android/data/[PACKAGE-NAME]`. If OsmAnd was installed before updating
your device to Android 4.4.x, it will continue to work (read-only) with
the old, non-standard osmand folder, but won't be able to update any map
and other files there.

Solutions:

-   Move OsmAnd's data folder osmand to the internal storage. \
     **Drawback:** Internal storage can be rather small.
-   Move OsmAnd's data folder osmand into its standard SD folder, \
    for OsmAnd+ : `(extSdCard)/Android/data/net.osmand.plus/files` \
    for OsmAnd : `(extSdCard)/Android/data/net.osmand/files` \
     **Caution:** Whenever you uninstall OsmAnd now, all your data will
    be erased as well! (Unless you unmount your SD card, or rename the
    net.osmand(.plus) folder before de-installation.)

If you manually want to perform the necessary copies/moves, either use a
PC to perform this action on the SD card, or on the device itself use
the file manager tool **which came pre-installed with your Android**
(only these methods will have the necessary write permission). All copy operations
may also be invoked in OsmAnd itself via `Menu/Settings/General/Data
storage folder` but the copy operations may take a long time or result in
errors (e.g. if the SD card is too full).
-->


## Копіювання пакету растрових карт, створеного на ПК {#copy-raster-map-package-created-on-pc}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Імпорт sqlitedb Android](@site/static/img/plugins/online-maps/import-sqlitedb-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Імпорт sqlitedb iOS](@site/static/img/plugins/online-maps/import-sqlitedb-ios.png)  

</TabItem>

</Tabs>

Пакети карт можуть бути збережені у двох форматах: [SQLite та Metainfo](https://osmand.net/docs/user/map/raster-maps). Після створення пакету карт виконайте наступні кроки, щоб перемістити його в OsmAnd:

- **Для Android**. Отримайте доступ до сховища на своєму пристрої та скопіюйте файл(и) з ПК до папки `BASE_OSMAND_STORAGE/tiles_`. Альтернативно, ви можете завантажити файл з електронної пошти, хмари або месенджера та відкрити його за допомогою програми OsmAnd. Пакет карт буде автоматично додано до списку ваших онлайн-карт.

- **Для iOS**. Завантажте файл з iTunes або месенджера, потім відкрийте його за допомогою програми OsmAnd. Пакет карт буде автоматично додано до списку ваших онлайн-карт.