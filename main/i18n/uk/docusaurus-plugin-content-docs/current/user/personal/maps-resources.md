---
source-hash: 96c19eed244ae8e23b225b79e192f6ab15334e38a9e882b113d53dea103f93b7
sidebar_position: 2
title:  Карти та ресурси
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

У розділі **Карти та ресурси** ви можете керувати як *онлайн*, так і *офлайн* картами та іншими ресурсами, що використовуються в OsmAnd. Наприклад, ви можете завантажувати, видаляти, перейменовувати, очищувати кеш, оновлювати, перевіряти розмір та виконувати різні дії.

OsmAnd працює з двома типами карт: [векторними](../map/vector-maps.md) та [растровими](../map/raster-maps.md). Вкладка [Локальні](#local-menu) зберігає всі карти та ресурси. Доступні типи карт можна завантажити на вкладці [Завантаження](#downloads-menu). На вкладці [Оновлення](#updates-menu) ви можете завантажити карти, доступні для оновлення, та використовувати [Live-оновлення](#live-updates). Ви також можете отримати доступ до функції [Додаткові карти](#extra-maps), щоб створювати власні типи карт.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Меню Карти Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Меню Карти iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Типи карт {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню завантаження карт Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Карти регіонів Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню завантаження карт iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Карти регіонів iOS](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Завантаження карт у застосунок OsmAnd є важливим кроком, який визначає функціональність та ефективність навігації.

### Безкоштовний контент карт {#free-map-content}

- **Стандартна карта**. Надає огляд місцевості на основі джерела [OpenStreetMap](https://www.openstreetmap.org/) і містить карту, маршрути, адреси, POI та інформацію про громадський транспорт. Натискання відкриває екран зі списком регіонів обраної країни та інформацією про те, скільки місця ці карти займуть на вашому пристрої.  
- **Лише дороги** (*тільки для Android*). Карта містить лише інформацію про дорожню мережу, щоб зосередитися на маршрутах та дорожній інфраструктурі. Завдяки видаленню таких деталей, як будівлі та визначні місця, вона менша за стандартну карту. Натискання відкриває екран зі списком регіонів обраної країни та інформацією про те, скільки місця ці карти займуть на вашому пристрої.
- **Оглядова карта світу**. Версії OsmAnd до 3.8 пропонують завантажити карту світу, щоб ви могли переглядати її в планетарному масштабі. У новіших версіях OsmAnd полегшена *Міні-карта світу* входить до складу застосунку. Застосунок дозволяє завантажити більшу оглядову карту світу з більш детальною інформацією. 

:::info щомісячні оновлення карт
Зверніть увагу, що щомісячні оновлення карт вважаються ще одним завантаженням карти та віднімаються від доступної кількості безкоштовних завантажень карт.
:::

### Платний контент карт {#paid-map-content}

- [Лінії висот](../plugins/topography.md#contour-lines). Карта, що містить контурні лінії висот для візуалізації рельєфу.
- [Карта рельєфу (Відтінення рельєфу та Ухил)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Карти з тінями або ухилами надають додаткову інформацію про рельєф.
- [Карта рельєфу (3D)](../plugins/topography.md#3d-relief). Тривимірне представлення рельєфу для кращого розуміння вашого оточення. Повинен бути увімкнений [рушій візуалізації карт версії 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [Wikipedia](../plugins/wikipedia.md). Векторна карта з геопозиціонованими статтями [Wikipedia](https://wikipedia.org/) про пам'ятки або додатковою інформацією про місця.
- [Wikivoyage](../plan-route/travel-guides.md). Надає векторні карти з віртуальними путівниками, пропонуючи користувачам цінну інформацію, рекомендації та поради.
- [Прогноз погоди](../plugins/weather.md). Інформація про погоду на карті для легкого планування маршруту.


## Меню завантажень {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Загальне меню завантаження карт Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Загальне меню завантаження карт iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

Вкладка **Завантаження** дозволяє завантажувати різні типи карт з серверів OsmAnd, що вимагає активного інтернет-з'єднання.

***Щоб завантажити карту:***

- **Відкрийте вкладку Завантаження**, знайдіть потрібний розділ і торкніться відповідної папки, щоб переглянути доступні карти.

- **Доступні карти** відображають іконки завантаження для однієї карти або для [завантаження кількох карт](#multiple-map-loading).

- **Завантажені карти** показують зелену іконку з кнопкою меню:  
    - *Android*: Меню з трьома крапками.  
    - *iOS*: Іконка інформації (i).

- **Карти в процесі завантаження** мають іконку, що візуалізує цей процес. Щоб скасувати завантаження, торкніться іконки. Щоб переглянути список карт у черзі завантаження та скасувати завантаження, торкніться панелі завантаження в області інформації про пам'ять пристрою на вкладках "Завантаження" та "Оновлення".

- **У безкоштовній версії** карти, недоступні для завантаження, показують іконку [ОТРИМАТИ](../purchases/index.md), що веде на сторінку покупки.

***Вкладка завантажень складається з груп карт:***

- **Інформація про пам'ять пристрою**. Візуалізує обсяг зайнятого та вільного місця на вашому пристрої.
- **Лічильник карт** (***Безкоштовна версія***). Показує, скільки карт у вас залишилося для завантаження.
- [Додаткові карти](#extra-maps). Відображає дані карт для [Користувацького пакету](../plugins/custom.md).
- **Регіони**. Список за континентами та регіонами світу: *Африка, Антарктида, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка.*
- [Карти світу](#world-maps). Список карт усього світу: *Корекція висот світу (тільки для Android)*, *Оглядова карта світу*, *Весь світ (Прогноз погоди)*
- [Морські карти](../plugins/nautical-charts.md) ([*платна функція*](../purchases/index.md)). Векторні карти з висотами у вигляді точок або ліній.
- [Путівники (Wikivoyage)](../plan-route/travel-guides.md) ([*платна функція*](../purchases/index.md)). Векторні карти з колекцією статей у форматі HTML та додатково файлами GPX.
- **Інші карти**. Карти, які не можуть бути віднесені до поточної ієрархії карт, оскільки вони не підтримуються або будуть доступні в майбутніх версіях.
- [Голосові підказки](../navigation/guidance/voice-navigation.md) (*тільки для Android*). Голосові пакети для озвучування навігаційних підказок.
- [Шрифти карт](../map/vector-maps.md#map-fonts-android) (*тільки для Android*). Додаткові файли шрифтів для відображення тексту на карті.
- **Пошук міста або регіону** (*тільки для Android*). Інструмент швидкого пошуку у верхній частині вкладки завантажень (іконка лупи) для пошуку потрібного міста або регіону.

### Карти світу {#world-maps}

У меню "Завантажити карти" є розділ **Карти світу**, який надає доступ до завантаження різних карт світу, доповнюючи функціональність застосунку.  

- **Корекція висот світу** (*тільки для Android*). Цей файл містить корекції висот для компенсації кривизни планети.
- **Оглядова карта світу**. Надає розширений огляд поверхні Землі, корисний для довгострокового планування маршрутів та звичайного дослідження.
- **Весь світ (Прогноз погоди)**. Дозволяє завантажити карту з інформацією про погоду.


### Додаткові карти {#extra-maps}

OsmAnd підтримує передачу налаштувань та даних, специфічних для профілю, включаючи файли візуалізації, шрифти, маршрути, карти та користувацькі плагіни. Створіть власну папку з картами за допомогою файлу плагіна `.osf` (стиснутий формат `.zip`).

Щоб імпортувати файл:

1. Знайдіть файл `.osf` у сховищі вашого пристрою, месенджері або електронній пошті.
2. Торкніться, щоб відкрити його за допомогою OsmAnd.
3. Плагін з'явиться в розділі **Список плагінів**, де його можна активувати.
4. Відповідна папка з'явиться в розділі **Додаткові карти** на вкладці [Завантаження](#downloads-menu).

Детальніше читайте у статті [**Користувацький пакет**](../plugins/custom).


### Завантаження кількох карт {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Загальне меню завантаження карт Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Меню скасування вибору Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Загальне меню завантаження карт iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Меню скасування вибору iOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

Для країн, що складаються з **кількох регіональних карт**, ви можете використовувати пакетне завантаження кількох карт. Карти, доступні для цього типу завантаження, відображаються з іконками подвійної стрілки завантаження та міткою з кількістю регіонів всередині (наприклад, Лінії висот / Всі регіони: 10). Ви можете вибрати, скільки карт завантажити.


## Меню Локальні {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Вкладка Локальні Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Вкладка Локальні Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

Вкладка "Локальні" надає огляд використання сховища для всіх даних OsmAnd на вашому пристрої. Для наочності дані розділені на три секції з кольоровим кодуванням, а елементи відсортовані за розміром від найбільшого до найменшого. Кожна секція відображає лише елементи із завантаженими даними:

- ***Ресурси*** (*синій*).  
    Включає карти ([Стандартні](../map/vector-maps.md), &nbsp;[Морські](../plugins/nautical-charts.md), &nbsp;[Топографічні](../plugins/topography.md), &nbsp;[Погода](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) та [Путівники](../plan-route/travel-guides.md), &nbsp;[Live-оновлення](../personal/maps-resources.md#live-updates), &nbsp;**Лише дороги**,  &nbsp;[Джерела карт](../map/raster-maps.md), &nbsp;[Стилі відображення](../map/vector-maps.md#default-map-styles), &nbsp;**Шрифти карт, &nbsp;Голосові підказки (записані та TTS), &nbsp;Кеш**.  

- ***Мої місця*** (*жовтий*).  
    Включає [Обране](../personal/favorites.md), &nbsp;[Треки](../personal/tracks/manage-tracks.md), &nbsp;[Нотатки OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Правки OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Аудіо/відео нотатки](../plugins/audio-video-notes.md), &nbsp;[Маркери на карті](../personal/markers.md), &nbsp;[Історія](../personal/global-settings.md#history), &nbsp;*Маршрутний лист*.  

- ***Налаштування*** (*зелений*).  
    Включає [Профілі](../personal/profiles.md), &nbsp;[Кольори](../personal/color-palette-schemes.md) та **Інші** конфігурації застосунку.

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Меню вкладки Локальні iOS](@site/static/img/personal/maps/local_tab_ios.png)

Вкладка "Локальні" надає огляд використання сховища для карт та ресурсів на вашому пристрої. Панель пам'яті вгорі відображає три категорії:

- ***Зелений***. Загальний обсяг використаного сховища пристрою.
- ***Помаранчевий***. Частина використаного сховища, зайнята завантаженнями OsmAnd.
- ***Сірий***. Вільне сховище, доступне на пристрої.

Під панеллю пам'яті відображається список усіх завантажених карт та ресурсів OsmAnd, включаючи їх тип та розмір файлу. Онлайн-карти не враховуються на панелі пам'яті, оскільки вони транслюються і кешуються лише тимчасово.

</TabItem>

</Tabs>


### Перегляд даних {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Огляд локальної категорії Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Опції локальної категорії Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Торкніться будь-якого елемента на вкладці **Локальні**, щоб відкрити його детальний список. У верхній частині цього списку візуальна панель показує, скільки місця займає вибраний тип даних відносно загального сховища OsmAnd.

***Доступні дії:***

- **Пошук**. Знайти конкретні дані за назвою у вибраній папці.
- **Меню з трьома крапками**:  
    ***Вибрати***. Виберіть кілька елементів для таких дій, як *Видалити*, *Деактивувати* або *Активувати*.  
    ***Імпортувати***. Доступ до сховища пристрою для імпорту файлів.
- **Опція сортування**. Сортувати елементи за назвою, країною, датою або розміром (доступність залежить від типу даних).

Кожен елемент у списку пропонує *меню з трьома крапками* з опціями:

- **Інформація**. Переглянути детальну інформацію про *[дії](#actions)*.
- **Експорт**. Зберегти дані у файл через *Налаштування → Експортувати у файл*.

***Додаткові опції для карт:***

- **Деактивувати**. Вимкнути векторні карти без їх видалення. Вони залишаються збереженими, але не використовуються для навігації, пошуку чи маршрутизації. Зменшує навантаження на пристрій та прискорює роботу OsmAnd.
- **Оновити**. Завантажити останню версію карти.
- **Перейменувати**. Налаштувати назву карти для кращої ідентифікації.
- **Видалити**. Видалити карту з вашого пристрою.
- **Редагувати** (для онлайн-карт). Змінити конфігурацію онлайн-карти.

</TabItem>

<TabItem value="ios" label="iOS">  

![Перегляд даних](@site/static/img/personal/maps/viewing_data_ios.png)

Торкніться будь-якого офлайн-елемента на вкладці **Локальні**, щоб відкрити його детальні дані, а саме:

- **Тип**. Тип елемента даних, наприклад **Стандартна карта**, **Wikipedia**, **Лінії висот** тощо.
- **Розмір**. Розмір елемента в МБ.
- **Створено**. Дата додавання елемента.

Для онлайн-карт відображається лише тип та розмір кешованих даних.

</TabItem>

</Tabs>


### Дії {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню елементів джерела карти](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Кожен елемент у списку [Джерело карти](../map/raster-maps.md) надає налаштування для керування онлайн-растровою картою, що зберігається на вашому пристрої. Відкрийте *меню з трьома крапками*, щоб отримати доступ до доступних дій:

- **Інформація**. Відображає загальні відомості про вибране джерело карти, включаючи формат та дату останнього оновлення.  
- **Обчислити розмір**. Оцінює обсяг сховища, зайнятий кешованими тайлами цього джерела карти. Якщо кеш перевищує *50 МБ*, розмір може відображатися як *≥50 МБ* замість точного числа.
- **Очистити всі тайли**. Видаляє всі кешовані тайли для вибраного джерела карти, звільняючи місце в сховищі, але залишаючи джерело карти доступним для майбутнього використання.  
- **Експорт**. Зберігає конфігурацію вибраного джерела карти для резервного копіювання або спільного використання.  
- **Видалити**. Видаляє вибране джерело карти. Ця дія не впливає на завантажені офлайн-карти, але очищає пов'язаний кеш.

При перегляді локального елемента даних ви бачите:

- **Тип**. Тип даних зі списку **Локальні**.
- **Створено**. Дата додавання елемента.
- **Розмір**. Розмір елемента в МБ.

Доступні **Дії** залежать від типу даних і можуть включати **Деактивувати**, **Оновити**, **Перейменувати**, **Експортувати** та **Видалити**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Дії iOS](@site/static/img/personal/maps/local_actions_ios.png)

Доступні **Дії** залежать від типу даних:

- Для **офлайн-елементів** доступна лише опція **Видалити**.
- Для **онлайн-карт** дії можуть включати **Очистити кеш**, **Редагувати** та **Видалити**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Меню Оновлення {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Меню Карти Оновлення карт Android](@site/static/img/personal/maps/maps_update_andr.png)

Вкладка **Оновлення** дозволяє оновлювати карти та ресурси OsmAnd. Стандартні карти та карти лише з дорогами випускаються раз на місяць, зазвичай між 2-м і 5-м числом, і містять дані OpenStreetMap до останнього дня попереднього місяця (наприклад, жовтневий випуск містить дані до 30 вересня). Інші дані, такі як Wikipedia, рельєф або морські карти, можуть мати інші, нерегулярні графіки оновлення. Прогноз погоди має власний регулярний цикл оновлення. Для отримання детальної інформації див. [Завантаження прогнозу](../plugins/weather.md#download-forecast). 

Використовуйте кнопку *Оновити все*, щоб оновити всі карти одночасно, або оновлюйте окремі карти за потреби. Для щогодинних оновлень перевірте статус вашої підписки на [Live-оновлення](#live-updates). Якщо увімкнено, розділ **Live-оновлення** з'явиться у верхній частині вкладки, під індикатором пам'яті пристрою.

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Меню Карти Оновлення карт iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Прогноз погоди Оновлення карт iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

Вкладка **Оновлення** дозволяє оновлювати карти та ресурси OsmAnd. Стандартні карти та карти лише з дорогами випускаються раз на місяць, зазвичай між 2-м і 5-м числом, і містять дані OpenStreetMap до останнього дня попереднього місяця (наприклад, жовтневий випуск містить дані до 30 вересня). Інші дані, такі як Wikipedia, рельєф або морські карти, можуть мати інші, нерегулярні графіки оновлення. 

Використовуйте кнопку *Оновити все*, щоб оновити всі карти одночасно, або оновлюйте окремі карти за потреби. Для щогодинних оновлень перевірте статус вашої підписки на [Live-оновлення](#live-updates). Якщо увімкнено, розділ **Live-оновлення** з'явиться у верхній частині вкладки, під індикатором пам'яті пристрою.

Вкладка **Оновлення** також містить розділ "Прогноз погоди". Він призначений для керування вашими офлайн-прогнозами для вибраних країн:

- Якщо прогноз ще не завантажено, ви побачите підказку вибрати країни. Дані прогнозу доступні до 7 днів.
- Після завантаження прогнозу на екрані ***Офлайн-прогноз*** відображається список країн з інформацією про статус, включаючи час останнього оновлення, період дії та загальний розмір даних.
- Натискання на країну відкриває детальну інформацію, таку як час останнього оновлення, наступне оновлення, розмір даних та точність. Опції включають ***Оновити зараз***, увімкнення або вимкнення ***Автоматичного оновлення*** (Прогноз погоди має власний регулярний цикл оновлення. Для отримання детальної інформації див. [Завантаження прогнозу](../plugins/weather.md#download-forecast).) та ***Видалити прогноз***.


</TabItem>

</Tabs>

## Live-оновлення {#live-updates}

:::tip Покупка
Live-оновлення — це платна функція.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Меню Карти OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Меню Карти OsmAnd live редагування Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Меню Карти OsmAnd live iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Меню Карти OsmAnd live редагування iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Live-оновлення** забезпечують часті, інкрементні оновлення карт через [підписку](../purchases/index.md) або безкоштовно для [учасників OSM](#free-for-osm-mappers). Оновлення відбуваються кожні 15 хвилин на серверах OsmAnd і доступні для завантаження щогодини, щодня або щотижня. Ці оновлення споживають мінімальний обсяг пам'яті — близько 2-4% від повного розміру карти на місяць.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Ключові особливості:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live-оновлення**. Керуйте за допомогою перемикача в налаштуваннях.
- **&#8230; &#124;** кнопка (*Android*) / **&#62;** кнопка (*iOS*). Відкрити налаштування *Live-оновлень*.
- **Перемикач**(*Android*) / **&#43;** кнопка (*iOS*). Додати карти для *live-оновлень*.
- **<Translate android="true" ids="update_frequency"/>**. Виберіть частоту оновлення карти (щогодини, щодня або щотижня).
- **<Translate android="true" ids="update_now"/>**. Запустити *live-оновлення* для карти.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Розмір *live-оновлень*.
- **Кнопка кошика**(*Android*). Видалити всі отримані *live-оновлення* для поточної карти.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Керуйте завантаженням *live-оновлень* через з'єднання Wi-Fi.


### Мітки часу оновлення {#update-timestamps}

- **Останнє оновлення OSM.**  
    Вказує на останні оброблені зміни OpenStreetMap.
- **Регіон оновлено.**  
    Показує, коли востаннє були оброблені оновлення для конкретного регіону.
- **Наступне оновлення.**  
    Відображає запланований час наступної перевірки оновлень.


### Обмеження Live-оновлень {#limitations-of-live-updates}

Зміни адрес підтримуються лише через щомісячні оновлення.
Оновлені дороги не мають деталей про висоту, що впливає на графіки градієнтів.
Видалені або змінені посилання на маршрути можуть все ще відображатися неправильно.


### Безкоштовно для маперів OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live для маперів](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live для маперів](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Учасники [OpenStreetMap](https://openstreetmap.org/) мають право на безкоштовне необмежене завантаження карт та live-оновлення. Щоб отримати право:
Увімкніть [плагін редагування OpenStreetMap](../plugins/osm-editing.md).
[Увійдіть](../plugins/osm-editing.md#settings) під своїм ім'ям користувача OSM.
Зробіть щонайменше [**30 правок**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) за останні два місяці.

## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)

### Поширені проблеми та їх вирішення {#common-issues-and-solutions}

- Голосова навігація. [(перевірити)](../troubleshooting/navigation.md#voice-navigation)
- Як видалити історію пошуку. [(перевірити)](../troubleshooting/general.md#how-to-delete-search-history)
- Для додаткового усунення несправностей відвідайте: [Карти та дані](../troubleshooting/maps-data.md)