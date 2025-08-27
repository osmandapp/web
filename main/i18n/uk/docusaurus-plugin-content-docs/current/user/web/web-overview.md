---
source-hash: 468554af76614d225c0a6d533461ed0e21450d49977ff9641eba44e245d32a09
sidebar_position: 1
sidebar_label: Introduction
title: Вступ на веб-сайті
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

## Що таке OsmAnd Web Map Viewer?

[**Портал карт OsmAnd**](https://osmand.net/map) — також відомий як **Веб-переглядач карт** — це розширення мобільного застосунку OsmAnd на основі браузера. Він дозволяє користувачам переглядати глобальні карти, планувати маршрути, симулювати навігацію, керувати особистими даними та отримувати доступ до синхронізованого вмісту зі своїх пристроїв через хмару.

Розроблений як кросплатформний компаньйон для OsmAnd для Android та iOS, Веб-переглядач карт допомагає користувачам планувати поїздки, аналізувати треки, переглядати рельєф та керувати файлами за допомогою будь-якого настільного або планшетного браузера — без встановлення застосунку.

OsmAnd Web тісно інтегрується зі службою **OsmAnd Cloud**, яка дозволяє синхронізувати вибране, треки та резервні копії між пристроями та платформами. Користувачі з обліковими записами **OsmAnd Start** (безкоштовно) або **OsmAnd Pro** (платно) можуть повною мірою скористатися цією екосистемою, синхронізуючи дані між мобільним пристроєм та вебом.



## Ключові особливості

- Карта з глобальним покриттям та високоякісними векторними даними
- Планування маршрутів за допомогою пішохідних, автомобільних, велосипедних та інших профілів
- Попередній перегляд навігації з покроковими інструкціями
- Пошук та дослідження популярних місць поблизу
- Відображення вибраного, треків та POI на карті
- Погодні накладки: вітер, температура та тиск
- Шари рельєфу: затінення пагорбів, схили та вигляд висот
- Аналізатор треків для профілів висоти та швидкості
- Повний доступ до синхронізованих даних через OsmAnd Cloud
- Підтримка імпорту/експорту файлів (GPX: треки, вибране)
- Безшовна інтеграція з **OsmAnd Pro** та **OsmAnd Start**



### Доступ за підпискою {#subscription-accesses}

Багато функцій є безкоштовними, але деякі вимагають зареєстрованого облікового запису.
У таблиці нижче наведено, що доступно в кожній версії:

| Функція | Доступно в |
|--------|--------------|
| [Навігаційний маршрут](./planner.md) | Безкоштовно |
| [Планувальник маршрутів](./planner.md) | Безкоштовно |
| [Погодні накладки](./web-map.md) | Безкоштовно |
| [Вибране](./web-map.md) | [OsmAnd Start](https://osmand.net/blog/start) або <ProFeature/> |
| [Синхронізація OsmAnd Cloud](./web-cloud.md) | [OsmAnd Start](https://osmand.net/blog/start) або <ProFeature/> |
| [Веб-пошук, Популярні місця](./web-search.md) | [OsmAnd Start](https://osmand.net/blog/start) або <ProFeature/> |
| [Папки та шар треків](./web-map.md) | <ProFeature/> |


## Як почати {#how-to-start}

Щоб отримати доступ до повних функцій OsmAnd Web Map Viewer, вам потрібно увійти за допомогою облікового запису OsmAnd Cloud.

- Якщо у вас вже є підписка [**OsmAnd Pro**](../personal/osmand-cloud.md#login) або ви хочете створити безкоштовний обліковий запис [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start), виконайте такі дії:

1. Перейдіть на [**Портал карт OsmAnd**](https://osmand.net/map).
2. Відкрийте меню **Обліковий запис**:
   - **Увійти**: Введіть адресу електронної пошти, пов'язану з вашою підпискою Pro або Start.
   - **Створити обліковий запис**: Зареєструйтеся для отримання безкоштовного облікового запису OsmAnd Start.

![Web Account](@site/static/img/web/web_account.png)



### Як змінити мову {#how-to-change-language}

Щоб змінити мову інтерфейсу:

- Перейдіть до **Меню → ⚙ Налаштування → Мова відображення**

![Web Language](@site/static/img/web/web_language.png)