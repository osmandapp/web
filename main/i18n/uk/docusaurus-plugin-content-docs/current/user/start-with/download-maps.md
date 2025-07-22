---
source-hash: b74e034d907048857594823cf149189c003eb875c25da16719cff9a3addc6202
sidebar_position: 2
title:  Завантажити карти
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

Завантаження карт у додаток OsmAnd є ключовим кроком для забезпечення безперебійної роботи та використання офлайн-навігації. Без офлайн-карт додаток не може повноцінно функціонувати. Завантаження карт надає доступ до карт різних регіонів, що дозволяє здійснювати навігацію без підключення до Інтернету.  

Ви маєте два *основні* способи завантаження карт: **1)** [переглянути список регіонів у *Головному меню*](#maps-and-resources), або **2)** [вибрати потрібний регіон безпосередньо на карті](#select-on-the-map). Це дає вам гнучкість у виборі потрібних регіонів і гарантує, що карти відповідатимуть вашим планам.  

Хоча OsmAnd підтримує як [Векторні](../map/vector-maps.md), так і [Растрові](../map/raster-maps.md), рекомендується починати роботу з векторними картами в офлайн-режимі. Цей тип карт (докладніше про [типи карт OsmAnd](../personal/maps-resources.md#map-types) читайте тут) забезпечує надійну роботу всіх ключових функцій програми, включаючи [Пошук](../search/index.md), [Навігацію](../navigation/index.md) та [Контекстне меню](../map/map-context-menu.md). Це особливо важливо, якщо ваші подорожі включають поїздки у віддалені місця або місця з обмеженим доступом до Інтернету.


## Завантажити {#download}

Почніть завантаження карт з [екрана початкового налаштування](#initial-setup-screen), або перейдіть до головного *бічного меню* *→* [Карти та ресурси](#maps-and-resources) та виберіть потрібні карти із загального списку, або [виберіть регіон](#select-on-the-map) безпосередньо на карті, торкнувшись потрібного регіону.


### Екран початкового налаштування {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

При першому запуску програми вам пропонується завантажити карту, адаптовану до вашого поточного місцезнаходження, визначеного за допомогою підключення до Інтернету. Цей крок є необов'язковим, що дозволяє пропустити завантаження та перейти безпосередньо до інтерфейсу локальних карт для вашого регіону.  

Якщо ви використовуєте VPN, OsmAnd може запропонувати карту на основі віртуального місцезнаходження VPN. У таких випадках ви можете вручну вибрати карту, яка краще відповідає вашому фактичному географічному регіону.  


#### Меню з трьома крапками {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Меню місцезнаходження:**

- *Вибрати інший регіон.* Відкриває меню [Завантажити карти](#maps-and-resources).
- *Дозволити нам визначити ваше місцезнаходження.* [Запитує дозвіл](../start-with/first-steps.md#permission-to-access-the-location) на доступ до місцезнаходження та знаходить потрібну карту за цими даними.

**Інше меню:**

- *Відновити з OsmAnd Cloud.* Відкриває головний екран [OsmAnd Cloud](../personal/osmand-cloud.md) або екран входу. Це корисно, якщо ви перевстановили додаток або хочете відновити попередній досвід користувача без повторного вибору регіонів та налаштувань.
- *Відновити з файлу.* Відкриває файловий менеджер пристрою для вибору та імпорту файлу `.osf`.  


### Карти та ресурси {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Екран [Карти та ресурси](../personal/maps-resources.md) надає доступ до наступних розділів:

- [Завантаження](../personal/maps-resources.md#downloads). Пропонує широкий вибір [типів карт OsmAnd](../personal/maps-resources.md#map-types).
- [Локальні](../personal/maps-resources.md#local). Відображає всі дані карт, які наразі зберігаються на вашому пристрої, включаючи власні та імпортовані ресурси.
- [Оновлення](../personal/maps-resources.md#updates). Дозволяє щомісяця оновлювати карти, щоб ваші дані були актуальними.

#### Завантаження карт {#downloading-maps}

Щоб завантажити певний тип карти для країни чи регіону:

- Перейдіть до папки потрібного регіону, наприклад, Африка, Європа або інший континент.
- Виберіть потрібну країну чи регіон зі списку.
- На наступному екрані перегляньте та виберіть із доступних типів карт для цієї області.

Інформацію про інші типи карт можна знайти в розділі [Завантаження](../personal/maps-resources.md#downloads) статті **Карти**.

### Опції карти світу {#world-map-options}

OsmAnd включає дві опції карти світу:  

1. **Міні-карта світу** (попередньо встановлена). Легка карта, яка дозволяє здійснювати базову навігацію та надає огляд світу.  
2. **Детальна карта світу** (доступна для завантаження). Глобальна карта, що містить великі міста, дороги, річки та інші географічні об'єкти.

***Важливі примітки:***

- **Детальна карта світу не замінює окремі карти країн чи регіонів.** Вона корисна для огляду, але не містить такого ж рівня деталізації, як регіональні карти.  
- Якщо вам потрібна детальна навігація, **завантажте конкретні карти країн чи регіонів вручну** через *Меню → Карти та ресурси → Завантажити карти.*
- Користувачі з **OsmAnd Pro або Maps+** можуть завантажувати **необмежену кількість карт**, але все одно повинні завантажувати кожен регіон окремо.  
- **Немає єдиної опції для завантаження всіх карт світу одночасно.**


### Вибрати на карті {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Short tap the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Один із способів завантажити карту — це зменшити масштаб на карті світу та коротко торкнутися, щоб вибрати регіон для завантаження. Ця область буде виділена жовтим кольором, і внизу з'явиться панель з назвою регіону та пропозицією завантажити його або вибрати інші карти.  

:::tip Колір карти  
На маленькому екрані карта, вибрана для завантаження, буде виділена жовтим кольором, карти, які вже завантажені, будуть виділені зеленим кольором, а деактивовані карти будуть виділені помаранчевим кольором. **Деактивовані** карти пропускаються для прискорення роботи програми, якщо у вас завантажено багато карт.
:::

### Пошук {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_3_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Пошук дозволяє легко знайти конкретну карту або регіон, забезпечуючи зручний і швидкий спосіб завантаження потрібних даних. Ви можете знайти та завантажити карту за допомогою [функції пошуку](../search/index.md).

- Розпочніть пошук, ввівши назву країни або регіону в поле пошуку. Потім виберіть потрібну карту зі списку, що з'явиться.
- Карти, доступні для завантаження, відображаються сірим кольором із піктограмою завантаження, завантажені карти мають зелений колір та кнопку меню.
- Торкніться назви потрібного результату, і відкриється список карт для регіону.
- Виберіть [типи карт](../personal/maps-resources.md#map-types): *Стандартна карта, Карта лише доріг, Контурні лінії, Вікіпедія*.

> *Останнє оновлення: січень 2025*