---
source-hash: c1c2b8d83cab8d2f732eb320c263676b4a31cbd2f25d8694a78e1b92f5393c9d
sidebar_position: 2
title:  Завантажити мапи
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

Завантаження мап у застосунок OsmAnd є ключовим кроком для забезпечення безперебійної роботи та використання офлайн-навігації. Без офлайн-мап застосунок не може повноцінно функціонувати. Завантаження мап надає доступ до мап різних регіонів, дозволяючи навігацію без підключення до Інтернету.

Ви маєте два *основні* способи завантаження мап: **1)** [переглянути список регіонів у *Головному меню*](#maps-and-resources), або **2)** [вибрати потрібний регіон безпосередньо на мапі](#select-on-the-map). Це дає вам гнучкість у виборі потрібних регіонів і гарантує, що мапи відповідатимуть вашим планам.

Хоча OsmAnd підтримує як [Векторні](../map/vector-maps.md), так і [Растрові](../map/raster-maps.md) мапи, рекомендується починати роботу з векторними офлайн-мапами. Цей тип мап (докладніше про [типи мап OsmAnd](../personal/maps-resources.md#map-types) читайте тут) забезпечує надійну роботу всіх ключових функцій застосунку, включаючи [Пошук](../search/index.md), [Навігацію](../navigation/index.md) та [Контекстне меню](../map/map-context-menu.md). Це особливо важливо, якщо ваші подорожі включають поїздки у віддалені місця або місця з обмеженим доступом до Інтернету.


## Завантаження {#download}

Почніть завантаження мап з [екрана початкового налаштування](#initial-setup-screen), або перейдіть до головного *бічного меню* *→* [Мапи та Ресурси](#maps-and-resources) та виберіть потрібні мапи із загального списку, або [виберіть регіон](#select-on-the-map) безпосередньо на мапі, торкнувшись потрібного регіону.


### Екран початкового налаштування {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

При першому запуску застосунку вам буде запропоновано завантажити мапу, адаптовану до вашого поточного місцезнаходження, визначеного за вашим інтернет-з'єднанням. Цей крок є необов'язковим, що дозволяє пропустити завантаження та перейти безпосередньо до інтерфейсу локальних мап для вашого регіону.

Якщо ви використовуєте VPN, OsmAnd може запропонувати мапу на основі віртуального місцезнаходження VPN. У таких випадках ви можете вручну вибрати мапу, яка краще відповідає вашому фактичному географічному регіону.


#### Меню з трьома крапками {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Меню місцезнаходження:**

- *Вибрати інший регіон.* Відкриває меню [Завантажити мапи](#maps-and-resources).
- *Дозволити нам визначити ваше місцезнаходження.* [Запитує дозвіл](../start-with/first-steps.md#permission-to-access-the-location) на доступ до місцезнаходження та знаходить потрібну мапу за допомогою цих даних.

**Інше меню:**

- *Відновити з OsmAnd Cloud.* Відкриває головний екран [OsmAnd Cloud](../personal/osmand-cloud.md) або екран входу. Це корисно, якщо ви перевстановили застосунок або хочете відновити попередній досвід користувача без повторного вибору регіонів та налаштувань.
- *Відновити з файлу.* Відкриває файловий менеджер пристрою для вибору та імпорту файлу `.osf`.


### Мапи та Ресурси {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Екран [Мапи та Ресурси](../personal/maps-resources.md) надає доступ до наступних розділів:

- [Завантаження](../personal/maps-resources.md#downloads). Пропонує повний вибір [типів мап OsmAnd](../personal/maps-resources.md#map-types).
- [Локальні](../personal/maps-resources.md#local). Відображає всі дані мап, що зберігаються на вашому пристрої, включаючи власні та імпортовані ресурси.
- [Оновлення](../personal/maps-resources.md#updates). Дозволяє щомісяця оновлювати мапи, щоб ваші дані були актуальними.

#### Завантаження мап {#downloading-maps}

Щоб завантажити певний тип мапи для країни або регіону:

- Перейдіть до папки потрібного регіону, наприклад, Африка, Європа або інший континент.
- Виберіть бажану країну або регіон зі списку.
- На наступному екрані перегляньте та виберіть з доступних типів мап для цієї області.

Інформацію про інші типи мап можна знайти в розділі [Завантаження](../personal/maps-resources.md#downloads) статті **Мапи**.

### Опції світової мапи {#world-map-options}

OsmAnd включає дві опції світової мапи:

1. **Міні-світова мапа** (попередньо встановлена). Легка мапа, яка забезпечує базову навігацію та огляд світу.
2. **Детальна світова мапа** (доступна для завантаження). Глобальна мапа, що містить великі міста, дороги, річки та інші географічні об'єкти.

***Важливі примітки:***

- **Детальна світова мапа не замінює окремі мапи країн або регіонів.** Вона корисна для загального огляду, але не містить такого ж рівня деталізації, як регіональні мапи.
- Якщо вам потрібна детальна навігація, **завантажуйте конкретні мапи країн або регіонів вручну** через *Меню → Мапи та Ресурси → Завантажити мапи.*
- Користувачі з **OsmAnd Pro або Maps+** можуть завантажувати **необмежену кількість мап**, але все одно повинні завантажувати кожен регіон окремо.
- **Немає єдиної опції для завантаження всіх світових мап одночасно.**


### Вибрати на мапі {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Short tap the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

Один із способів завантажити мапу — це зменшити масштаб на світовій мапі та коротко торкнутися, щоб вибрати регіон для завантаження. Ця область буде виділена жовтим кольором, а внизу з'явиться панель з назвою регіону та пропозицією завантажити його або вибрати інші мапи.

:::tip Колір мапи
На невеликому екрані мапа, вибрана для завантаження, буде виділена жовтим кольором, вже завантажені мапи будуть виділені зеленим, а деактивовані мапи — помаранчевим. **Деактивовані** мапи пропускаються для прискорення роботи програми, якщо у вас завантажено багато мап.
:::

### Пошук {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_3_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Пошук дозволяє легко знайти певну мапу або регіон, забезпечуючи зручний та швидкий спосіб завантаження потрібних даних. Ви можете знайти та завантажити мапу за допомогою [функції пошуку](../search/index.md).

- Почніть пошук, ввівши назву країни або регіону в поле пошуку. Потім виберіть потрібну мапу зі списку, що з'явиться.
- Мапи, доступні для завантаження, відображаються сірим кольором із піктограмою завантаження, завантажені мапи мають зелений колір та кнопку меню.
- Торкніться назви потрібного результату, і відкриється список мап для всього регіону.
- Виберіть [типи мап](../personal/maps-resources.md#map-types): *Стандартна мапа, Мапа лише доріг, Горизонталі, Вікіпедія*.