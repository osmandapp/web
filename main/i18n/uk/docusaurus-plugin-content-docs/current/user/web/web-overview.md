---
source-hash: 5c0ec057fd60df8e67edea1ef3d5a69cce84edf9177789c1998911043f2d9f81
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

## Огляд {#overview}

**Веб-планувальник**, також відомий як [**Портал мап OsmAnd**](https://osmand.net/map), є розширенням на основі браузера для мобільного застосунку OsmAnd. Він дозволяє користувачам переглядати глобальні мапи, планувати маршрути, симулювати навігацію, керувати особистими даними та отримувати доступ до синхронізованого контенту зі своїх пристроїв через хмару.

Розроблений як кросплатформенний супутній додаток до OsmAnd для Android та iOS, Веб-портал допомагає користувачам планувати поїздки, аналізувати треки, переглядати рельєф та керувати файлами за допомогою будь-якого браузера на настільному комп'ютері чи планшеті — без встановлення застосунку.

OsmAnd Web тісно інтегрований із сервісом **OsmAnd Cloud**, який забезпечує синхронізацію улюблених місць, треків та резервних копій між пристроями та платформами. Користувачі з обліковими записами **OsmAnd Start** (безкоштовно) або **OsmAnd Pro** (платно) можуть повною мірою скористатися перевагами цієї екосистеми, синхронізуючи дані між мобільним пристроєм та вебом. Детальне порівняння функцій *Start* та *Pro* ви можете знайти в розділі [Доступ за підпискою](#subscription-accesses) нижче.

> **Примітка:** Навіть без входу в обліковий запис або перевірки акаунта ви все одно можете використовувати кілька основних функцій Веб-порталу мап, включаючи: [Навігаційний маршрут](./web-navigation.md), [Планувальник маршрутів](./planner.md), [Шари погоди](./web-weather.md), та [Налаштування](./web-map.md#settings).


## Ключові особливості {#key-features}

Веб-портал пропонує такі основні можливості для роботи з мапами та особистими даними в браузері: 

- [Мапа](./web-map.md) з глобальним покриттям та високоякісними векторними даними.
- [Планування маршруту](./planner.md) для пішоходів, автомобілів, велосипедів та інших профілів.
- [Навігація](./web-navigation.md) з покроковими інструкціями.
- [Пошук](./web-search.md) та [дослідження](./web-search.md#explore) популярних місць поблизу.
- Відображення [Улюблених місць](./web-map.md#favorites), [Треків](./web-map.md#tracks) та [POI](./web-map.md#poi-overlay) на мапі.
- [Шари погоди](./web-weather.md): вітер, температура та тиск.
- [Шари рельєфу](./web-map.md#terrain): відтінення пагорбів, схили та вигляд висот.
- [Аналізатор треків](./web-tracks-analyzer.md) для профілів висот та швидкості.
- Повний доступ до синхронізованих даних через [OsmAnd Cloud](./web-cloud#cloud-sync).
- Підтримка імпорту/експорту файлів (GPX: треки, улюблені місця).
- Безшовна інтеграція з **OsmAnd Pro** та **OsmAnd Start**.

### Доступ за підпискою {#subscription-accesses}

![Web Account](@site/static/img/web/web_start.png) ![Web Account](@site/static/img/web/web_pro.png)

Веб-портал мап підтримує кілька рівнів доступу: без входу, з OsmAnd Start та з OsmAnd Pro. Таблиця нижче підсумовує, які функції доступні на кожному рівні, щоб ви могли швидко побачити, що у вас вже є, і що стає доступним з обліковим записом або оновленням. Цей огляд призначений для того, щоб допомогти вам вирішити, чи потрібен вам обліковий запис взагалі і, якщо так, то який варіант найкраще відповідає тому, як ви використовуєте OsmAnd.

| Функція | Доступно в |
|--------|--------------|
| [Навігаційний маршрут](./web-navigation.md) | Без входу |
| [Планувальник маршрутів](./planner.md) | Без входу |
| [Шари погоди](./web-weather.md) | Без входу |
| [Налаштування](./web-map.md#settings) | Без входу |
| [Налаштування меню мапи](./web-map.md#configure-map-menu) ([POI](./web-map.md#poi-overlay), [Улюблені місця](./web-map.md#favorites), [Треки](./web-map.md#tracks))| [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Налаштування меню мапи](./web-map.md#configure-map-menu) ([Рельєф](./web-map.md#terrain))| [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Синхронізація OsmAnd Cloud](./web-cloud.md#cloud-sync) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Веб-пошук, популярні місця](./web-search.md) | [OsmAnd Start](https://osmand.net/docs/user/personal/osmand-cloud#osmand-start) or [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |
| [Папки треків та шар](./web-tracks.md) | [OsmAnd Pro](https://osmand.net/docs/user/purchases/) |


## Як почати {#how-to-start}

Щоб отримати доступ до повного набору функцій Веб-порталу OsmAnd, вам потрібно увійти в обліковий запис OsmAnd Cloud.

- Якщо у вас вже є підписка [**OsmAnd Pro**](../personal/osmand-cloud.md#login) або ви хочете створити безкоштовний обліковий запис [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), виконайте такі кроки:

1. Перейдіть до [**Порталу мап OsmAnd**](https://osmand.net/map).
2. Відкрийте меню **Обліковий запис**:
   - **Увійти**: Введіть адресу електронної пошти, пов'язану з вашою підпискою Pro або Start, або
   - **Створити обліковий запис**: Зареєструйтеся для безкоштовного облікового запису OsmAnd Start. Для детального покрокового посібника зі створення нового облікового запису див. статтю [Обліковий запис OsmAnd](./web-cloud).

![Web Account](@site/static/img/web/web_account.png)


## Пов'язані статті {#related-articles}

- [Перші кроки](../start-with/first-steps.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Веб-покупки](../purchases/web.md)
- [Кросплатформенні покупки](../purchases/cross.md)