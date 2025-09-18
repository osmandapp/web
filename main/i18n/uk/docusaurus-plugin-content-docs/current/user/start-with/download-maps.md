---
source-hash: 6cae344524caaf33fb94aa4a15419e9183e99c9b4fa757ffe87fe4fa9acb30b3
sidebar_position: 2
title:  Завантаження мап
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

Завантаження мап у застосунок OsmAnd — це ключовий крок для забезпечення безперебійної роботи та використання офлайн-навігації. Без офлайн-мап застосунок не може повноцінно функціонувати. Завантаження мап надає доступ до мап різних регіонів, дозволяючи вам орієнтуватися без підключення до Інтернету.  

Існує два *основних* способи завантаження мап: **1)** почати з [екрана початкового налаштування](#initial-setup-screen) або [переглянути список регіонів у *Головному меню*](#maps-and-resources), або **2)** [вибрати потрібний регіон безпосередньо на мапі](#select-on-the-map). Це дає вам гнучкість у виборі потрібних регіонів і гарантує, що мапи відповідатимуть вашим планам.  

Хоча OsmAnd підтримує як [Векторні](../map/vector-maps.md), так і [Растрові](../map/raster-maps.md) мапи, рекомендується починати роботу з векторними мапами в офлайн-режимі. Цей тип мап (детальніше про [типи мап OsmAnd](../personal/maps-resources.md#map-types) читайте тут) забезпечує надійну роботу всіх ключових функцій застосунку, включаючи [Пошук](../search/index.md), [Навігацію](../navigation/index.md) та [Контекстне меню](../map/map-context-menu.md). Це особливо важливо, якщо ваші подорожі включають поїздки у віддалені місця або місця з обмеженим доступом до Інтернету.


## Екран початкового налаштування {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Завантаження мапи Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Завантаження мапи iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Під час першого запуску застосунку вам буде запропоновано завантажити мапу, що відповідає вашому поточному місцезнаходженню, визначеному за допомогою інтернет-з'єднання. Цей крок є необов'язковим, що дозволяє пропустити завантаження і перейти безпосередньо до інтерфейсу локальних мап для вашого регіону.  

Якщо ви використовуєте VPN, OsmAnd може запропонувати мапу на основі віртуального місцезнаходження VPN. У таких випадках ви можете вручну вибрати мапу, яка краще відповідає вашому реальному географічному регіону.  


### Меню з трьома крапками {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Завантаження мапи Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Завантаження мапи iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Завантаження мапи Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Завантаження мапи iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Меню місцезнаходження:**

- *Вибрати інший регіон.* Відкриває меню [Завантаження мап](#maps-and-resources).
- *Дозволити визначити ваше місцезнаходження.* [Запитує дозвіл](../start-with/first-steps.md#permission-to-access-the-location) на доступ до місцезнаходження та знаходить потрібну мапу за цими даними.

**Інше меню:**

- *Відновити з OsmAnd Cloud.* Відкриває головний екран [OsmAnd Cloud](../personal/osmand-cloud.md) або екран входу. Це корисно, якщо ви перевстановили застосунок або хочете відновити попередній досвід користувача без повторного вибору регіонів та налаштувань.
- *Відновити з файлу.* Відкриває файловий менеджер пристрою для вибору та імпорту файлу `.osf`.  


## Мапи та ресурси {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Загальне меню завантаження мап Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Загальне меню завантаження мап iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Екран [Мапи та ресурси](../personal/maps-resources.md) надає доступ до наступних розділів:

- [Завантаження](../personal/maps-resources.md#downloads). Пропонує широкий вибір [типів мап OsmAnd](../personal/maps-resources.md#map-types).
- [Локальні](../personal/maps-resources.md#local). Відображає всі дані мап, що зберігаються на вашому пристрої, включаючи власні та імпортовані ресурси.
- [Оновлення](../personal/maps-resources.md#updates). Дозволяє оновлювати мапи щомісяця, щоб підтримувати актуальність даних.

### Завантаження мап {#downloading-maps}

Щоб завантажити певний тип мапи для країни або регіону:

- Перейдіть до папки потрібного регіону, наприклад, Африки, Європи чи іншого континенту.
- Виберіть потрібну країну або регіон зі списку.
- На наступному екрані перегляньте та виберіть доступні типи мап для цієї місцевості.

Інформацію про інші типи ма