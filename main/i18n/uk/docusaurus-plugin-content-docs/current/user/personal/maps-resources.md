---
source-hash: 7709beb792400753a1f976b6fb02017857a5da0e9d06e235ddb18b6b45b4fb49
sidebar_position: 2
title: Карти та ресурси
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

У розділі **Карти та ресурси** ви можете керувати *онлайн* та *офлайн* картами, а також іншими ресурсами, що використовуються в OsmAnd. Наприклад, ви можете завантажувати, видаляти, перейменовувати, очищати кеш, оновлювати та перевіряти розмір, а також виконувати різні дії.

OsmAnd працює з двома типами карт: [Векторні карти](../map/vector-maps.md) та [Растрові карти](../map/raster-maps.md). На вкладці [Локальні](#local) зберігаються всі карти та ресурси. Доступні типи карт можна завантажити на вкладці [Завантаження](#downloads). На вкладці [Оновлення](#updates) ви можете завантажити карти, які доступні для оновлення, та використовувати [Live-оновлення](#osmand-live). Ви також можете отримати доступ до функції [Додаткові карти](#extra-maps), щоб створити власні типи карт.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Типи карт {#map-types}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Завантаження карт у додаток OsmAnd є важливим кроком, який визначає функціональність та ефективність навігації.

#### Безкоштовні функції для обраного місця {#free-features-for-the-selected-location}

- **Стандартна карта**. Надає огляд місцевості на основі джерела [OpenStreetMap](https://www.openstreetmap.org/) та містить карту, маршрути, адреси, POI та інформацію про громадський транспорт. Натискання відкриває екран зі списком регіонів обраної країни та інформацією про те, скільки місця ці карти займуть на вашому пристрої.  
- **Тільки дороги** (*лише Android*). Карта містить лише інформацію про дорожню мережу, щоб зосередитися на маршрутах та дорожній інфраструктурі. Видаляючи деталі, такі як будівлі та точки інтересу, вона менша за стандартну карту. Натискання відкриває екран зі списком регіонів обраної країни та інформацією про те, скільки місця ці карти займуть на вашому пристрої.

#### Платні функції для обраного місця {#paid-features-for-the-selected-location}

- [Горизонталі](../plugins/topography.md#contour-lines). Карта, що містить горизонталі висот для візуалізації рельєфу.
- [Карта рельєфу (Затінення та схил)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Карти з тінями або схилами надають додаткову інформацію про рельєф.
- [Карта рельєфу (3D)](../plugins/topography.md#3d-relief). Тривимірне представлення рельєфу для кращого розуміння вашого оточення. Має бути увімкнено [Двигун рендерингу карт Версія 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).
- [Вікіпедія](../plugins/wikipedia.md). Векторна карта з геопозиційованими статтями [Вікіпедії](https://wikipedia.org/) про визначні пам'ятки або додатковою інформацією про місця.
- [Прогноз погоди](../plugins/weather.md). Інформація про погоду на карті для легкого планування маршруту.
- [Онлайн растрові карти](../map/raster-maps.md). Карти доступні для завантаження онлайн і можуть бути встановлені як сторонні карти або OsmAnd Tiles.

#### Оглядова карта світу {#world-overview-map}

Версії OsmAnd до 3.8 пропонують завантажити карту світу, щоб ви могли переглядати її в планетарному масштабі. У новіших версіях OsmAnd легка *Міні-карта світу* постачається разом із додатком. Додаток дозволяє завантажити більшу оглядову карту світу з більш детальною інформацією.


## Карти та ресурси {#maps--resources}

Розділ **Карти та ресурси** *Головного меню* додатка OsmAnd надає доступ до керування картами та іншими важливими даними.

- Вкладка [Завантаження](#downloads) карт дозволяє завантажувати карти для офлайн використання, забезпечуючи їх доступність без інтернету.  
- На вкладці [Локальні](#local) карти ви можете знайти та керувати детальною інформацією про карти та місця, включаючи вибране, треки, нотатки OSM та інші елементи, які є на вашому пристрої.  
- Вкладка [Оновлення](#updates) дозволяє користувачам отримувати інформацію про доступні оновлення карт та інших ресурсів, забезпечуючи актуальність та точність даних.

***Загальні дії, які ви можете виконувати в Картах та ресурсах***:

- **Оновити**. Перезавантажує список доступних карт з сервера OsmAnd.  
- **Пошук**. Шукати карти за **країною**, **областю** або великим **містом**.  
- **Пам'ять пристрою**. Показує на індикаторі, скільки пам'яті доступно для завантаження та скільки карт можна завантажити безкоштовно. Залежно від вкладки, іноді відображаються дещо інші дані.  
- **Лічильник карт** (*Безкоштовна версія* видно лише, якщо у вас немає [підписки](../purchases/index.md)). Індикатор з роздільниками показує, скільки карт вам залишилося завантажити з *7 доступних*.

:::info щомісячні оновлення карт
Зверніть увагу, що щомісячні оновлення карт вважаються ще одним завантаженням карти і віднімаються від доступної кількості безкоштовних завантажень карт.
:::


### Завантаження {#downloads}

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

Вкладка **Завантаження** дозволяє завантажувати різні типи карт із серверів OsmAnd, що вимагає активного підключення до Інтернету.

***Щоб завантажити карту:***

- **Відкрийте вкладку Завантаження**, знайдіть потрібний розділ і натисніть відповідну папку, щоб побачити доступні карти.

- **Доступні карти** відображають значки завантаження, для однієї карти або для [кількох карт](#multiple-map-loading).

- **Завантажені карти** відображають зелений значок з кнопкою меню:  
    - *Android*: Меню з трьома крапками.  
    - *iOS*: Значок інформації (I).

- **Карти в процесі завантаження** мають значок, що візуалізує це. Щоб скасувати завантаження, натисніть значок. Щоб переглянути список карт у черзі завантаження та скасувати завантаження, натисніть панель Завантаження в області інформації про пам'ять пристрою на вкладках Завантаження та Оновлення.

- **У безкоштовній версії** карти, недоступні для завантаження, відображають значок [ОТРИМАТИ](../purchases/index.md), що посилається на сторінку покупки.

***Вкладка завантажень складається з груп карт:***

- **Інформація про пам'ять пристрою**. Візуалізує обсяг зайнятого та вільного місця на вашому пристрої.
- **Лічильник карт** (***Безкоштовна версія***). Відображає, скільки карт вам залишилося завантажити.
- [Додаткові карти](#extra-maps). Відображає дані карти для [Користувацького пакету](../plugins/custom.md).
- **Регіони**. Список за континентами та регіонами світу: *Африка, Антарктида, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка.*
- [Карти світу](#world-maps). Список карт усього світу: *Корекція висот світу (лише Android)*, *Оглядова карта світу*, *Увесь світ (Прогноз погоди)*
- [Морські карти](../plugins/nautical-charts.md) ([*платна функція*](../purchases/index.md)). Векторні карти з висотами у вигляді точок або ліній.
- [Путівники (Wikivoyage)](../plan-route/travel-guides.md) ([*платна функція*](../purchases/index.md)). Векторні карти з колекцією статей у форматі HTML та додатково файлами GPX.
- **Інші карти**. Карти, які не можуть бути віднесені до поточної ієрархії карт, оскільки вони не підтримуються або будуть доступні в майбутніх версіях.
- [Голосові підказки](../navigation/guidance/voice-navigation.md) (*лише Android*). Голосові пакети для озвучення навігаційних підказок.
- [Шрифти карт](../map/vector-maps.md#map-fonts-android) (*лише Android*). Додаткові файли шрифтів для відображення тексту на карті.

#### Карти світу {#world-maps}

У меню Завантаження карт є розділ **Карти світу**, який надає доступ до завантаження різних карт світу, доповнюючи функціональність додатка.  

- **Корекція висот світу** (*лише Android*). Покращує точність навігації, особливо в гірській місцевості.
- **Оглядова карта світу**. Надає широкий огляд поверхні землі, корисний для довгострокового планування маршрутів та випадкового дослідження.
- **Увесь світ (Прогноз погоди)**. Дозволяє завантажити карту з інформацією про погоду.

Інформацію про *меню карт* та *дії* можна знайти в статті [Завантаження карт](../start-with/download-maps.md).


#### Завантаження кількох карт {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png)

</TabItem>

</Tabs>

Для країн, що складаються з **кількох регіональних карт**, ви можете використовувати масове завантаження кількох карт. Карти, доступні для цього типу завантаження, відображаються зі значками подвійної стрілки завантаження та міткою з кількістю регіонів всередині (наприклад, Горизонталі / Усі регіони: 10). Ви можете вибрати, скільки карт завантажити.


### Локальні {#local}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs>

Вкладка Локальні надає огляд використання сховища для всіх даних OsmAnd на вашому пристрої. Дані розділені на три кольорові секції для ясності, з елементами, відсортованими за розміром від найбільшого до найменшого. Кожна секція відображає лише елементи із завантаженими даними:

- ***Ресурси*** (*синій*).  
    Включає карти ([Стандартна](../map/vector-maps.md), &nbsp;[Морська](../plugins/nautical-charts.md), &nbsp;[Топографія](../plugins/topography.md), &nbsp;[Погода](../plugins/weather.md)), &nbsp;[Вікіпедія](../plugins/wikipedia.md) та [Путівники](../plan-route/travel-guides.md), &nbsp;[Live-оновлення](../personal/maps-resources.md#osmand-live), &nbsp;**Тільки дороги**,  &nbsp;[Джерела карт](../map/raster-maps.md), &nbsp;[Стилі рендерингу](../map/vector-maps.md#default-map-styles), &nbsp;**Шрифти карт, &nbsp;Голосові підказки (записані та TTS), &nbsp;Кеш**.  

- ***Мої місця*** (*жовтий*).  
    Включає [Вибране](../personal/favorites.md), &nbsp;[Треки](../personal/tracks/manage-tracks.md), &nbsp;[Нотатки OSM](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[Редагування OSM](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[Аудіо/відео нотатки](../plugins/audio-video-notes.md), &nbsp;[Маркери на карті](../personal/markers.md), &nbsp;[Історія](../personal/global-settings.md#history), &nbsp;*Маршрут*.  

- ***Налаштування*** (*зелений*).  
    Включає [Профілі](../personal/profiles.md), &nbsp;[Кольори](../personal/color-palette-schemes.md) та **Інші** конфігурації додатка.


#### Перегляд даних {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Натисніть будь-який елемент на вкладці **Локальні**, щоб відкрити його детальний список. У верхній частині цього списку візуальна панель відображає, скільки місця займає вибраний тип даних відносно загального сховища OsmAnd.

***Доступні дії:***

- **Пошук**. Знайти конкретні дані за назвою в обраній папці.
- **Меню з трьома крапками**:  
    ***Вибрати***. Виберіть кілька елементів для таких дій, як *Видалити*, *Деактивувати* або *Активувати*.  
    ***Імпорт***. Отримайте доступ до сховища пристрою для імпорту файлів.
- [Параметри сортування](#sorting-options). Сортуйте елементи за назвою, країною, датою або розміром (доступність залежить від типу даних).


#### Меню для елементів зі списку {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Кожен елемент у списку пропонує *меню з трьома крапками* з опціями:

- **Інформація**. Переглянути детальну інформацію про *[елемент даних](#local-data-item-overview)*.
- **Експорт**. Зберегти дані у файл через *Налаштування → Експорт у файл*.

***Додаткові опції для карт:***

- **Деактивувати**. Вимкнути векторні карти без їх видалення. Вони залишаються збереженими, але не використовуються для навігації, пошуку чи маршрутизації. Зменшує навантаження на пристрій та прискорює роботу OsmAnd.
- **Оновити**. Завантажити останню версію карти.
- **Перейменувати**. Налаштувати назву карти для кращої ідентифікації.
- **Видалити**. Видалити карту з вашого пристрою.
- **Редагувати** (для онлайн-карт). Змінити конфігурацію онлайн-карти.

#### Меню елементів джерела карти {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Кожен елемент у списку [Джерело карти](../map/raster-maps.md) надає налаштування для керування онлайн-растровою картою, що зберігається на вашому пристрої. Відкрийте *меню з трьома крапками*, щоб отримати доступ до доступних дій:

- [Інформація](#local-data-item-overview). Відображає загальні відомості про вибране джерело карти, включаючи формат та дату останнього оновлення.  
- **Обчислити розмір**. Оцінює обсяг сховища, зайнятий кешованими тайлами цього джерела карти. Якщо кеш перевищує *50 МБ*, розмір може відображатися як *≥50 МБ* замість точного числа.
- **Очистити всі тайли**. Видаляє всі кешовані тайли для вибраного джерела карти, звільняючи сховище, зберігаючи при цьому джерело карти доступним для подальшого використання.  
- **Експорт**. Зберігає конфігурацію вибраного джерела карти для резервного копіювання або спільного використання.  
- **Видалити**. Видаляє вибране джерело карти. Ця дія не впливає на завантажені офлайн-карти, але очищає пов'язаний кеш.


#### Огляд елемента локальних даних {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

Під час перегляду елемента локальних даних ви бачите:

- **Тип**. Тип даних зі списку **Локальні**.
- **Створено**. Дата додавання елемента.
- **Розмір**. Розмір елемента в МБ.

Доступні **Дії** залежать від типу даних і можуть включати **Деактивувати**, **Оновити**, **Перейменувати**, **Експорт** та **Видалити**.

#### Параметри сортування {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Використовуйте параметри сортування для організації даних карти:

- **Назва (А - Я / Я - А)**. Знайти елементи за алфавітом.
- **Назва країни (А - Я / Я - А)**. Організувати карти географічно.
- **Спочатку найновіші** / **Спочатку найстаріші**. Переглянути оновлення або старіші версії.
- **Спочатку великі** / **Спочатку маленькі**. Визначити великі карти, щоб звільнити місце для зберігання.


### Оновлення {#updates}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

Вкладка **Оновлення** дозволяє щомісячно оновлювати карти OsmAnd. Використовуйте кнопку *Оновити все*, щоб оновити всі карти одночасно, або оновлюйте окремі карти за потреби. Стандартні карти та карти тільки доріг зазвичай випускаються через два тижні після початку кожного місяця. Щоб отримувати щогодинні оновлення, перевірте статус вашої підписки [OsmAnd Live](#osmand-live). Якщо вона увімкнена, розділ **Live-оновлення** з'явиться у верхній частині вкладки, під індикатором пам'яті пристрою.


### Додаткові карти {#extra-maps}

OsmAnd підтримує передачу налаштувань та даних, специфічних для профілю, включаючи файли рендерингу, шрифти, маршрути, карти та користувацькі плагіни. Створіть користувацьку папку карт за допомогою файлу плагіна `.osf` (стиснутий формат `.zip`).

Щоб імпортувати файл:

1. Знайдіть файл `.osf` у сховищі вашого пристрою, месенджері або електронній пошті.
2. Натисніть, щоб відкрити його за допомогою OsmAnd.
3. Плагін з'явиться в розділі **Список плагінів**, де його можна активувати.
4. Відповідна папка з'явиться в розділі **Додаткові карти** на вкладці [Завантаження](#downloads).

Докладніше читайте в статті [**Користувацький пакет**](../plugins/custom).


## OsmAnd Live {#osmand-live}

:::tip Придбання
OsmAnd Live — платна функція.  
:::
<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**OsmAnd Live** надає часті, інкрементальні оновлення карт через [підписку](../purchases/index.md) або є безкоштовним для [учасників OSM](#free-for-osm-mappers). Оновлення відбуваються кожні 15 хвилин на серверах OsmAnd і доступні для завантаження щогодини, щодня або щотижня. Ці оновлення споживають мінімальний обсяг сховища — близько 2-4% від повного розміру карти на місяць.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Ключові функції:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live-оновлення**. Керуйте за допомогою перемикача в налаштуваннях.
- Кнопка **&#8230; &#124;** (*Android*) / Кнопка **&#62;** (*iOS*). Відкрити налаштування *OsmAnd live*.
- **Перемикач**(*Android*) / Кнопка **&#43;** (*iOS*). Додати карти для *live-оновлень*.
- **<Translate android="true" ids="update_frequency"/>**. Виберіть частоту оновлення карти (щогодини, щодня або щотижня).
- **<Translate android="true" ids="update_now"/>**. Розпочати оновлення карти *OsmAnd live*.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Розмір *live-оновлень*.
- **Кнопка кошика**(*Android*). Видалити всі отримані *live-оновлення* для поточної карти.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Керуйте завантаженням *live-оновлень* через Wi-Fi з'єднання.


### Часові мітки оновлень {#update-timestamps}

- **Останнє оновлення OSM.**  
    Вказує на останні оброблені зміни OpenStreetMap.
- **Регіон оновлено.**  
    Показує, коли востаннє були оброблені оновлення для конкретного регіону.
- **Наступне оновлення.**  
    Відображає запланований час наступної перевірки оновлень.


### Обмеження OsmAnd Live {#limitations-of-osmand-live}

Зміни адрес підтримуються лише через щомісячні оновлення.
Оновлені дороги не мають деталей висот, що впливає на графіки градієнтів.
Видалені або змінені посилання на маршрути можуть все ще відображатися некоректно.


### Безкоштовно для картографів OSM {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Учасники [OpenStreetMap](https://openstreetmap.org/) мають право на безкоштовне необмежене завантаження карт та live-оновлення. Щоб отримати право:
Увімкніть [плагін редагування OpenStreetMap](../plugins/osm-editing.md).
[Увійдіть](../plugins/osm-editing.md#settings) за допомогою свого імені користувача OSM.
Підтримуйте щонайменше [**30 редагувань**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) за останні два місяці.

## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

- Голосова навігація. [(перевірити)](../troubleshooting/navigation.md#voice-navigation)
- Як видалити історію пошуку. [(перевірити)](../troubleshooting/general.md#how-to-delete-search-history)
- Для додаткового усунення несправностей відвідайте: [Карти та дані](../troubleshooting/maps-data.md)

> *Останнє оновлення: Лютий 2025*