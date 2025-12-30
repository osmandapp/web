---
source-hash: a52737232a71758590dfdb7cfbb68622999fbec373babd2b56b429093731d394
sidebar_position: 1
sidebar_label: Вступ
title: Вступ до веб-планувальника
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

<!--
<InfoIncompleteArticle/>
-->

## Огляд {#overview}

**Веб-планувальник**, також відомий як [**Портал мап OsmAnd**](https://osmand.net/map), є розширенням на основі браузера для мобільного застосунку OsmAnd. Він дозволяє користувачам переглядати глобальні мапи, планувати маршрути, симулювати навігацію, керувати особистими даними та отримувати доступ до синхронізованого контенту зі своїх пристроїв через хмару.

Розроблений як кросплатформенний супутній додаток до OsmAnd для Android та iOS, Веб-портал допомагає користувачам планувати поїздки, аналізувати треки, переглядати рельєф та керувати файлами за допомогою будь-якого браузера на настільному комп'ютері чи планшеті — без встановлення застосунку.

OsmAnd Web тісно інтегрований із сервісом **OsmAnd Cloud**, який забезпечує синхронізацію улюблених місць, треків та резервних копій між пристроями та платформами. Користувачі з обліковими записами **OsmAnd Start** (безкоштовно) або **OsmAnd Pro** (платно) можуть повною мірою скористатися перевагами цієї екосистеми, синхронізуючи дані між мобільним пристроєм та вебом. Детальне порівняння функцій *Start* та *Pro* ви можете знайти в розділі [Доступ за підпискою](#subscription-access) нижче.

> **Примітка:** Навіть без входу в обліковий запис або перевірки акаунта ви все одно можете використовувати кілька основних функцій Веб-порталу мап, включаючи: [Навігаційний маршрут](./planner.md), [Планувальник маршрутів](./planner.md), [Шари погоди](./web-map.md#weather-on-the-web) та [Налаштування](#settings).

<!--
After the structure of this section is approved, some links should be updated.
-->

## Ключові особливості {#key-features}

Веб-портал пропонує такі основні можливості для роботи з мапами та особистими даними в браузері: 

- [Мапа](./web-map.md) з глобальним покриттям та високоякісними векторними даними.
- [Планування маршруту](./planner.md) для пішоходів, автомобілів, велосипедів та інших профілів.
- [Попередній перегляд навігації](./planner.md) з покроковими інструкціями.
- [Пошук](./web-search.md) та [дослідження](./web-search.md#explore) популярних місць поблизу.
- Відображення [Улюблених місць](./web-map.md#favorites), [Треків](./web-map.md#tracks) та [POI](./web-map.md#poi-overlay) на мапі.
- [Шари погоди](./web-weather.md): вітер, температура та тиск.
- [Шари рельєфу](./web-map.md#terrain): відтінення пагорбів, схили та вигляд висот.
- [Аналізатор треків](./web-tracks-analyzer.md) для профілів висот та швидкості.
- Повний доступ до синхронізованих даних через [OsmAnd Cloud](./web-cloud#cloud-sync).
- Підтримка імпорту/експорту файлів (GPX: треки, улюблені місця).
- Безшовна інтеграція з **OsmAnd Pro** та **OsmAnd Start**.

<!--
After the structure of this section is approved, some links should be updated.
-->


### Доступ за підпискою {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Веб-портал мап підтримує кілька рівнів доступу: без входу, з OsmAnd Start та з OsmAnd Pro. Таблиця нижче підсумовує, які функції доступні на кожному рівні, щоб ви могли швидко побачити, що у вас вже є, і що стає доступним з обліковим записом або оновленням. Цей огляд призначений для того, щоб допомогти вам вирішити, чи потрібен вам обліковий запис взагалі і, якщо так, то який варіант найкраще відповідає тому, як ви використовуєте OsmAnd.

| Функція | Доступно в |
|--------|--------------|
| [Навігаційний маршрут](./planner.md) | Без входу |
| [Планувальник маршрутів](./planner.md) | Без входу |
| [Шари погоди](./web-weather.md) | Без входу |
| [Налаштування](./web-map.md#settings) | Без входу |
| [Налаштування меню мапи](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Улюблені місця](./web-map.md#favorites), [Треки](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Налаштування меню мапи](./web-map.md#configure-map-menu) ([Рельєф](./web-map.md#terrain))| <ProFeature/> |
| [Синхронізація OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Веб-пошук, популярні місця](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) or <ProFeature/> |
| [Папки треків та шар](./web-tracks.md) | <ProFeature/> |

<!--
After the structure of this section is approved, some links should be updated.
-->


## Як почати {#how-to-start}

Щоб отримати доступ до повного набору функцій Веб-порталу OsmAnd, вам потрібно увійти в обліковий запис OsmAnd Cloud.

- Якщо у вас вже є підписка [**OsmAnd Pro**](../personal/osmand-cloud.md#login) або ви хочете створити безкоштовний обліковий запис [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), виконайте такі кроки:

1. Перейдіть до [**Порталу мап OsmAnd**](https://osmand.net/map).
2. Відкрийте меню **Обліковий запис**:
   - **Увійти**: Введіть адресу електронної пошти, пов'язану з вашою підпискою Pro або Start, або
   - **Створити обліковий запис**: Зареєструйтеся для безкоштовного облікового запису OsmAnd Start. Для детального покрокового посібника зі створення нового облікового запису див. статтю [Обліковий запис OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)

<!--

## Settings {#settings}

### Language {#language}

To switch the interface language:

*Go to: Menu → ⚙ Settings → Display language*

![Web Language](@site/static/img/web/web_language.png)

### Units {#units}

*Go to: Menu → ⚙ Settings → Units of length*  
*Go to: Menu → ⚙ Settings → Unit of speed*

You can choose which units are used to display distance, elevation and speed on the map, in route details and in measurement tools. This helps you keep OsmAnd consistent with your usual habits or regional standards.

The **Units of length** option defines how horizontal distance and elevation are shown:
- Kilometers/meters.
- Miles/feet.
- Miles/meters.
- Miles/yards.
- Nautical miles/meters.
- Nautical miles/feet. 

For example, a distance of 10 km will be shown as about 6.21 mi if you choose one of the Miles/... options, or as about 5.40 nmi when Nautical miles/... is selected.

The **Unit of speed** option controls how current speed and speed limits are displayed:
- Kilometers per hour.
- Miles per hour.
- Meters per second.
- Minutes per mile.
- Minutes per kilometer.
- Nautical miles per hour (knots). 

For example, a speed of 90 km/h corresponds to 25 m/s or about 55.92 mph.

![Web Units](@site/static/img/web/web_units_len.png) ![Web Units](@site/static/img/web/web_units_spe.png)

### OsmAnd Cloud {#osmand-cloud}

![Web Cloud](@site/static/img/web/web_without_acc.png) ![Web Cloud](@site/static/img/web/web_with_acc.png)

In the Web Map Portal, the *General settings* (Display language, Units of length, Unit of speed) are available for all users, whether you are signed in or not. Once you log in with your OsmAnd account, an additional OsmAnd Cloud section appears in the Settings panel. [OsmAnd Cloud](./web-cloud) connects the web map with your cloud backups so that you can manage data synchronized from your Android or iOS devices directly in the browser.

**Changes** option shows a chronological list of files stored in your OsmAnd Cloud account. Items are grouped by month and include the file name, the type of change (for example, added, modified or deleted), the time of the last update and the device that created it. For each entry, you can open the three-dot menu and choose *Download* to save the selected file to your computer, or *Delete*.

**Trash** option contains files that were deleted from OsmAnd Cloud. The list is also grouped by month and shows when each file was removed and from which device. Use the three-dot menu next to a file to *Download* a copy, *Restore from trash* (return the file to OsmAnd Cloud so it becomes available again in your data), or *Delete immediately* to remove it permanently. This helps prevent accidental data loss while still letting you free up cloud storage when you are sure a file is no longer needed. You can also clear all deleted items at once by clicking the Trash icon in the Trash panel header. This opens the **Empty trash** dialog, where you confirm deletion to permanently remove all files from Trash.

![Web Cloud](@site/static/img/web/web_changes.png) ![Web Cloud](@site/static/img/web/web_trash.png)

-->


## Пов'язані статті {#related-articles}

- [Перші кроки](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Веб-покупки](../purchases/web.md)
- [Кросплатформенні покупки](../purchases/cross.md)