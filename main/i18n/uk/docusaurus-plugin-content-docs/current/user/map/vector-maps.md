---
source-hash: 99c48be6477aad0311de511c5ccd59a56edd267cf8d507a31c6f2b1a3a1921bd
sidebar_position: 5
title: Векторні карти (Стилі карт)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Векторні карти призначені для використання як стандартне джерело даних карт для OsmAnd, тому **їх потрібно завантажити на ваш пристрій**. Векторні карти підтримують величезну кількість стилів карт для різних видів діяльності, таких як їзда на велосипеді, піші прогулянки, поїздки на автомобілі або снігоході та інші.

Кожен стиль карти можна налаштувати для виділення або приховування певних об'єктів, а також для перемикання між денним та нічним режимами. Дані векторних карт можуть бути доповнені векторними даними та відображені у стандартному стилі карти, наприклад, інформація про *горизонталі*. Ви можете *створити власний стиль карти OsmAnd*, щоб відобразити необхідну інформацію.


## Варіанти використання {#use-cases}

Настроювані стилі карт є однією з головних переваг OsmAnd. Ви можете налаштувати відображення карти відповідно до своїх потреб та захоплень, відрегулювати відображення або приховування певних об'єктів карти, розміри та кольори цих об'єктів, а також змінити масштаб відображення певних об'єктів.


## Стандартні стилі карт {#default-map-styles}

OsmAnd пропонує вам багато стилів карт та шарів даних, які підходять за замовчуванням. У цьому розділі описано основні з них для денного та нічного режимів.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Стиль карти OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

Стандартний стиль відображення карти OsmAnd збалансовує деталізацію та простоту, що робить його ідеальним для міських та позаміських досліджень. Він деталізує міські об'єкти, такі як вулиці, будівлі та зупинки транспорту, одночасно спрощуючи візуальний безлад, роблячи карти чіткішими.

Ключові переваги включають картографування маршрутів, якість покриття, обмеження доступу, дорожні знаки, відображення маршрутів SAC-шкали, спортивні споруди та топографічні деталі, такі як горизонталі.


### Туристичний вигляд {#touring-view}

![Стиль карти "Туристичний вигляд"](@site/static/img/map/map-style-touring.png)

Туристичний стиль з високим контрастом та максимальною деталізацією. Включає всі опції стандартного стилю OsmAnd, відображаючи якомога більше деталей, зокрема дороги, стежки та інші шляхи пересування. Чітке розрізнення типів доріг у *туристичному атласі*. Підходить для денного, нічного та зовнішнього використання.

### UniRS та LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Стилі UniRS та LightRS є авторськими стилями, які відображають основну інформацію карти, але в різних колірних схемах.

- **Стиль UniRS**. Цей стиль є модифікованою версією стандартного для підвищення контрасту для пішохідних та велосипедних доріжок. Він зберігає класичну колірну схему Mapnik.

    ![Стиль карти LightRS](@site/static/img/map/map-style-lightrs.png)

- **Стиль LightRS**. Це простий стиль водіння, який має м'який нічний режим. Він виділяє дороги контрастним помаранчевим кольором, затемнює другорядні об'єкти карти та відображає топографічні особливості, такі як горизонталі.

    ![Стиль карти UniRS](@site/static/img/map/map-style-unirs.png)

### Морський {#nautical}

![Морський стиль карти](@site/static/img/map/map-style-nautical.png)

Це стиль морської навігації, що відображає буї, маяки, річкові маршрути, морські шляхи, знаки, гавані, морські знаки та ізобати. Докладніше читайте у статті [Морський вигляд карти](../plugins/nautical-charts.md).

### Зима та лижі {#winter-and-ski}

![Зимовий та лижний стиль карти](@site/static/img/map/map-style-winter-ski.png)

Це стиль для лижних видів спорту, який описує траси, підйомники та бігові доріжки, а також приховує другорядні об'єкти карти. **Зимовий та лижний стиль** розроблений, щоб допомогти вам у навігації під час зимових видів спорту.

Ви можете бачити лижні траси та інші деталі, такі як складність трас та маркери підйомників. Ключові переваги включають зручне відображення трас, підйомників та інших лижних об'єктів. Менше відволікаючих другорядних об'єктів карти. Докладніше читайте у статті [Лижні карти](../plugins/ski-maps.md).

### Топо {#topo}

![Топографічний стиль карти](@site/static/img/map/map-style-topo.png)

Цей стиль призначений для піших прогулянок, кемпінгу та велосипедних поїздок на природі. Він має контрастні дороги та природні об'єкти, різні типи стежок, розширені опції горизонталей та додаткові деталі. Він добре читається на відкритому повітрі. Налаштування *Цілісність поверхні* дозволяє розрізняти якість дороги.

### OSM-carto {#osm-carto}

![Стиль карти OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Цей стиль імітує стандартний [веб-стиль OpenStreetMap](https://www.openstreetmap.org/). Вихідний код веб-версії доступний на [Github](https://github.com/gravitystorm/openstreetmap-carto), код OsmAnd доступний на [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Пустеля {#desert}

![Стиль карти "Пустеля"](@site/static/img/map/map-style-desert.png)

Розроблений для пустель та інших малонаселених регіонів, пропонуючи більш детальну інформацію на карті.

### Бездоріжжя {#offroad}

![Стиль карти "Бездоріжжя"](@site/static/img/map/map-style-offroad.png)

Цей стиль, розроблений для навігації по бездоріжжю, базується на макеті карти [Топо](#topo) і добре працює із супутниковими зображеннями як підкладкою. Він має тонші основні дороги для виділення стежок, доріжок, велосипедних маршрутів та інших позашляхових маршрутів, що робить його ідеальним для дослідження неасфальтованих маршрутів у сільській або віддаленій місцевості.

### Снігохід {#snowmobile}

![Стиль карти "Снігохід"](@site/static/img/map/map-style-snowmobile.png)

Цей стиль, розроблений для навігації на снігоходах, виділяє шляхи, дороги та доріжки, придатні для снігоходів. Він виділяє спеціалізовані шляхи в снігових регіонах, пропонуючи чітку навігацію по засніжених місцевостях, де стандартні дороги можуть бути недоступні.


## Легенда карти {#map-legend}

Легенда карти слугує ключем до розуміння символів, що використовуються на картах OsmAnd. Вона пояснює значення різних символів карти, включаючи точки, лінії та області. Наприклад, такі символи, як сині звивисті лінії, позначають річки, тоді як різні кольори та форми можуть представляти будівлі, шляхи та маршрути.

Легенда допомагає користувачам інтерпретувати те, що вони бачать на карті. Ви можете отримати доступ до повної легенди карти OsmAnd [тут](../map-legend/index.md).


## Шрифти карти (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Шрифти карти версія Android](@site/static/img/map/map_fonts.png) ![Шрифти карти версія](@site/static/img/map/map_fonts_1.png)

Для карт спрощеною/традиційною китайською, японською та корейською мовами можуть з'являтися неправильні символи (наприклад, квадрати), якщо на вашому пристрої відсутні необхідні шрифти. Ця проблема виникає при відображенні місцевих назв і може бути вирішена шляхом завантаження необхідних шрифтів через OsmAnd.

Деякі пов'язані проблеми зі шрифтами були задокументовані на GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Горизонталі {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Стиль карти "Горизонталі"](@site/static/img/map/contour_lines.png)

Горизонталі в OsmAnd відображаються як лінії висот на векторних картах. Щоб їх використовувати, необхідно спочатку увімкнути [плагін "Топографія"](../plugins/topography.md), завантажити необхідні регіональні дані та налаштувати відображення. Ця функція не увімкнена за замовчуванням і вимагає [придбання](../purchases/index.md).

Горизонталі сумісні з усіма стилями карт і можуть бути налаштовані через [меню "Горизонталі"](../plugins/topography.md#contour-lines). Для отримання додаткової інформації відвідайте статтю [Плагін "Топографія"](../plugins/topography.md).


## * Морська глибина {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Ізобати морської глибини представляють області рівної глибини, допомагаючи візуалізувати зміни підводного рельєфу. Ця функція доступна для всіх стилів та режимів карт і може бути налаштована з увімкненим або вимкненим плагіном "Морський вигляд карти".

Для отримання додаткової інформації про морський вигляд карти відвідайте сторінку [плагіна "Морська карта"](../plugins/nautical-charts).


## Показати межі {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![показати-межі-андр](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![показати-межі-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Ця функція дозволяє перемикати видимість меж для раніше завантажених карт зі списку доступних карт. Її основне призначення — допомогти розвантажити основну карту, приховавши контури завантажених карт, що особливо корисно, якщо у вас встановлено багато карт.

За замовчуванням межі карти з'являтимуться при збільшенні до рівня 7 і зникатимуть при рівні збільшення 3 і нижче.

:::tip Колір "Показати межі завантажених карт"
Коли увімкнена функція *Показати межі завантажених карт*, завантажені карти позначаються **зеленим** кольором як у версії OsmAnd для Android, так і для iOS.

На Android архівні карти відображаються **помаранчевим**. В iOS карти, які можна оновити, також позначені **помаранчевим**.
:::


## Сітка координат {#coordinates-grid}


Перейти до: *Меню → Налаштувати карту → Показати → Сітка координат*


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню сітки координат](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![показати-межі-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


Функція **Сітка координат** накладає на карту опорну сітку, що дозволяє візуалізувати лінії широти та довготи на основі різних систем координат. Ця функція корисна для точного визначення місцезнаходження та геопросторової навігації.

***1. Доступні формати координат:***

- **DD°MM′SS″** (Градуси, хвилини, секунди)
- **DD.DDDDD°** (Десяткові градуси - стандартний формат WGS84)
- **DD°MM.MMM′** (Градуси, десяткові хвилини)
- **MGRS** (Військова сітка координат)
- **UTM** (Універсальна поперечна проекція Меркатора - зональна сіткова система)

:::note

1. *Обмеження сітки UTM:*
    - Мінімальний рівень масштабування для відображення сітки UTM – 9.
    - Одночасно відображається лише одна зона UTM, оскільки зони розділені меридіанами кожні 6°.

2. *Сітка WGS84 підтримує три різні режими:* десяткові градуси, градуси+хвилини та градуси+хвилини+секунди.

:::

***Підтримувані системи координат:***

OsmAnd підтримує кілька **базових проекцій** для відображення географічних сіткових ліній:

| **Проекція** | **Код EPSG** | **Опис** |
|---|---|---|
| **WGS84** | EPSG:4326 | Стандартна система відліку широти/довготи, що використовується в усьому світі. |
| **Меркатор** | EPSG:3857 | Використовується для веб-картографування (Google Maps, OpenStreetMap тощо). |
| **UTM** | EPSG:6387 | Розділяє світ на **60 зон** для точного локального позиціонування. |
| **MGRS** | - | Військова сітка координат (розширення UTM). |



***2. Налаштування рівня масштабування:***

- Лінії сітки з'являються залежно від рівня масштабування, між **2 – 22**.
- Лінії динамічно регулюють поділ координат залежно від рівня масштабування.

**За замовчуванням програма використовує формат координат, вибраний у** [Загальних налаштуваннях](../personal/profiles.md#units--formats).


***3. Розташування міток:***
- Краї
- Центр

***4. Колір сітки:***
- Виберіть колір сітки для денного/нічного режиму.

## Налаштувати стиль карти {#configure-map-style}

### Режим карти {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Режим карти](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Режим карти](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Карта може відображатися у світлій або темній темі залежно від режиму, вибраного зі списку опцій. За замовчуванням та для всіх нових користувачів [стиль карти](#default-map-styles) відповідає темі, вибраній у системних налаштуваннях вашого пристрою.

- **<Translate android="true" ids="daynight_mode_day"/>**. Завжди відображає карту у світлій темі для оптимальної видимості вдень.

- **<Translate android="true" ids="daynight_mode_night"/>**. Завжди відображає карту в темній темі, ідеально підходить для нічного часу або умов низького освітлення.

- **Схід / Захід сонця**. Автоматично переходить між денною та нічною темами відповідно до місцевого часу сходу та заходу сонця, які детально описані на цій вкладці в додатку.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*лише Android*). Використовує датчик освітлення пристрою для автоматичного перемикання між світлою та темною темами відповідно до рівня навколишнього освітлення.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Відображення карти адаптується до загальної теми програми, показуючи денний режим у світлій темі та нічний режим у темній темі.


### Деталі {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Показує полігони, стежки, точки та знаки на карті при низькому масштабуванні. Це означає, що ви можете бачити більше деталей на карті при низькому збільшенні. Зверніть увагу, що відображення на вашому пристрої може бути нешвидким.
    ![Параметр карти - Більш детально](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Показує тип дорожнього покриття. Колір дороги допомагає зрозуміти, яке дорожнє покриття, наприклад, асфальт, трава або пісок. Дивіться [Легенду карти](../map-legend/index.md).
    ![Параметр карти - Дорожнє покриття](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Вказує якість дороги. Вказує гладкість (ухил) дороги. Наскільки гладкі ваші дороги: хороші, погані, можливо, жахливі тощо. Подивіться [Легенду карти](../map-legend/index.md), щоб визначити гладкість вашої дороги.
    ![Параметр карти - Гладкість дороги](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Показує доступність дороги: приватна або дозволена, лише для екстрених випадків або платна дорога. Перегляньте [Легенду карти](../map-legend/index.md), щоб знайти доступні дороги.
    ![Параметр карти - Доступ до дороги](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Функція [Зони з низьким рівнем викидів (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) відображає зелені межі та мітки "LEZ" на картах для районів у містах, де доступ обмежений для певних забруднюючих транспортних засобів. LEZ спрямовані на покращення якості повітря шляхом обмеження в'їзду транспортних засобів, які відповідають певним стандартам викидів. Використання цієї функції допомагає користувачам уникнути штрафів, ідентифікуючи та об'їжджаючи ці зелені зони, забезпечуючи дотримання місцевих екологічних норм під час подорожей центрами міст.

    ![Параметр карти - Зони з низьким рівнем викидів](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Різні категорії будівель, такі як житлові, промислові та комерційні, мають кольорове кодування. Деталі дивіться в [Легенді карти](../map-legend/index.md).
    ![Параметр карти - Кольорові будівлі](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Відображає освітлені та неосвітлені вулиці, а також підземні та тимчасово освітлені шляхи. Деталі дивіться в [Легенді карти](../map-legend/index.md).
    ![Параметр карти - Вуличне освітлення](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Розроблена для картографів, ця функція показує посилання, примітки та коментарі інших користувачів на карті.
    ![Параметр карти - Помічник картографа](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Показує ізобати морської глибини. Вам потрібно встановити [плагін "Морський"](../plugins/nautical-charts) та завантажити морські карти.
    ![Параметр карти - Ізобати глибини](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Показує зелену дошку та мітки "NR" для [території природного заповідника](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Виділяє охоронювані території зеленою межею та міткою "NR" для зон збереження дикої природи.

    &nbsp;&nbsp;&nbsp;![Параметр карти - Природний заповідник](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Маршрути {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Маршрути на карті - велосипедні маршрути](@site/static/img/map/map-routes-cycle-routes.png) ![Маршрути на карті - пішохідна мережа](@site/static/img/map/map-routes-hiking-network.png)

Маршрут — це заздалегідь визначений шлях, яким потрібно слідувати, щоб дістатися до певного пункту призначення. Маршрут може бути оптимізований для різних видів подорожей, таких як велосипедні, піші, бігові, громадський транспорт та інші. Докладніше про маршрути та їх типи можна прочитати у статті [Маршрути](../map/routes.md).


### Транспорт {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Під час навігації містами вам потрібен більш контрастний вигляд громадського транспорту та зупинок. Ви можете торкнутися зупинки громадського транспорту та вибрати один із маршрутів або зупинок зі списку. Маршрути поїздів також відображаються в цьому налаштуванні.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Показує зупинки громадського транспорту.
    ![Зупинки громадського транспорту на карті](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Показує маршрути автобусів, тролейбусів та маршруток.
    ![Автобус на карті](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Показує маршрути трамваїв та поїздів.
    ![Трамвай на карті](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Показує маршрути метро.
    ![Метро на карті](@site/static/img/map/map-transport-subway.png)

### Приховати {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Щоб покращити видимість карти, вам може знадобитися приховати певні об'єкти. Наприклад, ви можете приховати воду при використанні [онлайн-карт супутника з шаром підкладки](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Приховати регіональні межі всередині країн, але межі штатів залишаються видимими.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Приховати всі полігони природних об'єктів, спеціальна функція для [шару підкладки/накладки](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Приховати всі полігони будівель.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Приховати всі полігони води (моря, озера, водосховища тощо)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Приховати номери будинків на карті.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Приховати пропоновані об'єкти - ті об'єкти, які заплановані до будівництва, але мають лише проєкт (проєктовані дороги, перехрестя, будівлі та інші).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Приховати піктограми POI з карти. Однак мітки цих POI все ще відображатимуться на карті.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Приховати мітки POI з карти. Однак піктограми POI все ще відображатимуться на карті.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Приховати всі підземні об'єкти, такі як тунелі, переходи, поверхи тощо. Спеціально для очищення карт міст від непотрібних об'єктів.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Приховати всі надземні об'єкти. Спеціально для перегляду лише підземних об'єктів, таких як тунелі, переходи тощо.

### Стиль доріг {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Спеціальні налаштування для доріг, де можна змінити кольори відповідно до дорожнього атласу або додати висококонтрастні дороги чи жирні контури для доріг.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Стандартний стиль для автомагістралей. Дивіться [Легенду карти](../map-legend/index.md).
![Стиль доріг за замовчуванням](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Стиль німецького дорожнього атласу.
![Стиль доріг німецький](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Стиль американського дорожнього атласу.
![Стиль доріг американський](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Високий контраст доріг.
![Стиль доріг високий контраст](@site/static/img/map/map-road-style-high-contrast.png)
- **Блідий**. Менш контрастні кольори доріг.
![Стиль доріг блідий](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Жирний контур для доріг.
![Стиль доріг жирний контур](@site/static/img/map/map-road-style-bold-outline.png)


### Розмір тексту {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Розмір тексту карти 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Розмір тексту карти 200%](@site/static/img/map/map-text-size-200.png)


### Збільшувач карти {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Ви можете вибрати це налаштування, довго натиснувши кнопку "+" або "-" на екрані або:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ви можете вибрати це налаштування, довго натиснувши кнопку "+" або "-" на екрані або:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Це налаштування допомагає змінити збільшення карти. Застосовується для растрових та векторних карт. Для растрових карт воно застосовує ефект збільшення, тому текстові мітки виглядають більшими або меншими. Для векторних карт воно робить карту більш або менш деталізованою; якщо встановити низьке значення, карта виглядатиме шумною/повільною.

- **75%**
    ![Збільшувач карти 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Збільшувач карти 200%](@site/static/img/map/map-magnifier-200.png)


### Мова карти {#map-language}

Опція **Мова карти** налаштовує написання назв на карті OsmAnd для рівнів масштабування 7-20 включно. Для рівнів масштабування 2-6 назви відображаються мовою, встановленою для OsmAnd у меню системних налаштувань (див. розділ *[Як змінити мову програми](../start-with/first-steps.md#how-to-change-app-language)*).

Якщо назви на карті не перекладені на потрібну мову спільнотою OSM, ви можете використовувати [транслітеровані назви](https://uk.wikipedia.org/wiki/Транслітерація): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) або *<Translate ios="true" ids="translit_names"/>* (iOS).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Місцеві назви**
    ![Мова карти місцеві назви](@site/static/img/map/map-language-local-names_2.png)

- **Українські назви**
    ![Мова карти українська](@site/static/img/map/map-language-urkanian_2.png)

- **Показати місцеві назви**
    ![Мова карти місцева](@site/static/img/map/map-language-show-local_2.png)

- **Транслітерувати назви**
    ![Мова карти транслітерувати](@site/static/img/map/map-language-transliterate_2.png)


## Власний стиль карти {#custom-map-style}

Якщо у вас є особистий або сторонній власний стиль карти, створений відповідно до [Специфікації](../../technical/osmand-file-formats/osmand-rendering-style.md), ви можете встановити його на свій пристрій такими способами:

- Скопіюйте файл `.render.xml` на свій пристрій та відкрийте його за допомогою OsmAnd.
- Використовуйте [стандартні діалоги імпорту/експорту](../personal/import-export.md) для експорту або імпорту стилів відображення. Якщо ви створюєте пакет `.osf`, він працює як плагін, яким ви можете ділитися з іншими.
- Після встановлення ви можете вибрати стиль карти з меню.


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: березень 2025*