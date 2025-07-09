---
source-hash: 872ff87a35bc61fbd415cf02fa9593a1f01ab711832783bd8413d76746b5e729
sidebar_position: 5
title: Векторні карти (Стилі мапи)
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

Векторні карти призначені для використання як стандартне джерело даних мапи для OsmAnd, тому **вам потрібно завантажити їх на свій пристрій**. Векторні карти підтримують величезну кількість стилів мапи для різних видів діяльності, таких як їзда на велосипеді, піші прогулянки, поїздки на автомобілі або снігоході та інші.

Кожен стиль мапи можна налаштувати, щоб виділити або приховати певні об'єкти, а також перемикатися між денним та нічним режимами. Дані векторних карт можуть бути доповнені векторними даними та відображені у стандартному стилі мапи, наприклад, інформація про *горизонталі*. Ви можете *створити свій власний стиль мапи OsmAnd*, щоб відобразити необхідну інформацію.


## Варіанти використання {#use-cases}

Настроювані стилі мапи є однією з головних переваг OsmAnd. Ви можете налаштувати відображення мапи відповідно до своїх потреб та захоплень, налаштувати відображення або приховування певних об'єктів мапи, розміри та кольори цих об'єктів, а також змінити масштаб відображення певних об'єктів.


## Стандартні стилі мапи {#default-map-styles}

OsmAnd пропонує вам багато стилів мапи та шарів даних, які підходять за замовчуванням. У цьому розділі описані основні з них для денного та нічного режимів.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd {#osmand}

![Стиль мапи OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)

Стандартний стиль відображення мапи OsmAnd балансує між деталізацією та простотою, що робить його ідеальним для міських та польових досліджень. Він деталізує міські об'єкти, такі як вулиці, будівлі та транспортні зупинки, одночасно спрощуючи візуальний безлад, роблячи карти чіткішими.

Основні переваги включають картографування маршрутів, якість покриття, обмеження доступу, дорожні знаки, відображення стежок за шкалою SAC, спортивні споруди та топографічні деталі, такі як горизонталі.


### Туристичний вигляд {#touring-view}

![Стиль мапи Туристичний вигляд](@site/static/img/map/map-style-touring.png)

Туристичний стиль з високим контрастом та максимальною деталізацією. Включає всі опції стандартного стилю OsmAnd, відображаючи якомога більше деталей, зокрема дороги, стежки та інші шляхи пересування. Чітке розрізнення типів доріг у *туристичному атласі*. Підходить для денного, нічного та польового використання.

### UniRS та LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Стилі UniRS та LightRS є авторськими стилями, які відображають основну інформацію мапи, але в різних колірних схемах.

- **Стиль UniRS**. Цей стиль є модифікованою версією стандартного для підвищення контрасту для пішохідних та велосипедних доріжок. Він зберігає класичну колірну схему Mapnik.

    ![Стиль мапи LightRS](@site/static/img/map/map-style-lightrs.png)

- **Стиль LightRS**. Це простий стиль для водіння, який має м'який нічний режим. Він виділяє дороги контрастним помаранчевим кольором, затемнює вторинні об'єкти мапи та відображає топографічні об'єкти, такі як горизонталі.

    ![Стиль мапи UniRS](@site/static/img/map/map-style-unirs.png)

### Морський {#nautical}

![Морський стиль мапи](@site/static/img/map/map-style-nautical.png)

Це стиль морської навігації, що включає буї, маяки, річкові маршрути, морські шляхи, знаки, гавані, морські знаки та контури глибин. Докладніше читайте у статті [Морський вигляд мапи](../plugins/nautical-charts.md).

### Зима та Лижі {#winter-and-ski}

![Зимовий та лижний стиль мапи](@site/static/img/map/map-style-winter-ski.png)

Це стиль для лижних видів спорту, що описує траси, підйомники та бігові доріжки, а також приховує вторинні об'єкти мапи. **Зимовий та лижний стиль** розроблений, щоб допомогти вам у навігації під час зимових видів спорту.

Ви можете бачити лижні траси та інші деталі, такі як складність трас та маркери підйомників. Основні переваги включають зручне відображення схилів, підйомників та інших лижних об'єктів. Менше відволікаючих вторинних об'єктів мапи. Докладніше читайте у статті [Лижні карти](../plugins/ski-maps.md).

### Топо {#topo}

![Топо стиль мапи](@site/static/img/map/map-style-topo.png)

Цей стиль розроблений для піших прогулянок, кемпінгу та їзди на велосипеді на природі. Він має контрастні дороги та природні об'єкти, різні типи стежок, розширені опції горизонталей та додаткові деталі. Його легко читати на відкритому повітрі. Налаштування *Цілісність поверхні* дозволяє розрізняти якість дороги.

### OSM-carto {#osm-carto}

![Стиль мапи OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Цей стиль імітує стандартний [веб-стиль OpenStreetMap](https://www.openstreetmap.org/). Вихідний код веб-версії доступний на [Github](https://github.com/gravitystorm/openstreetmap-carto), код OsmAnd доступний на [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Пустеля {#desert}

![Стиль мапи Пустеля](@site/static/img/map/map-style-desert.png)

Розроблений для пустель та інших малонаселених регіонів, пропонуючи більш детальну інформацію про мапу.

### Бездоріжжя {#offroad}

![Стиль мапи Бездоріжжя](@site/static/img/map/map-style-offroad.png)

Розроблений для навігації по бездоріжжю, цей стиль базується на макеті мапи [Топо](#topo) та добре працює з супутниковими зображеннями як підкладкою. Він має тонші основні дороги, щоб виділити стежки, колії, велосипедні маршрути та інші позашляхові маршрути, що робить його ідеальним для дослідження неасфальтованих маршрутів у сільській або віддаленій місцевості.

### Снігохід {#snowmobile}

![Стиль мапи Снігохід](@site/static/img/map/map-style-snowmobile.png)

Створений для навігації на снігоходах, цей стиль виділяє шляхи, дороги та траси, придатні для снігоходів. Він виділяє спеціалізовані шляхи в засніжених регіонах, пропонуючи чітку навігацію по засніжених місцевостях, де стандартні дороги можуть бути недоступні.


## Легенда мапи {#map-legend}

Легенда мапи слугує ключем до розуміння символів, що використовуються на мапах OsmAnd. Вона пояснює значення різних символів мапи, включаючи точки, лінії та області. Наприклад, символи, такі як сині звивисті лінії, позначають річки, тоді як різні кольори та форми можуть представляти будівлі, шляхи та маршрути.

Легенда допомагає користувачам інтерпретувати те, що вони бачать на мапі. Ви можете отримати доступ до повної легенди мапи OsmAnd [тут](../map-legend/index.md).


## Шрифти мапи (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*

![Шрифти мапи версія Android](@site/static/img/map/map_fonts.png) ![Шрифти мапи версія](@site/static/img/map/map_fonts_1.png)

Для мап спрощеною/традиційною китайською, японською та корейською мовами можуть з'являтися неправильні символи (наприклад, квадрати), якщо на вашому пристрої відсутні необхідні шрифти. Ця проблема виникає при відображенні місцевих назв і може бути вирішена шляхом завантаження необхідних шрифтів через OsmAnd.

Деякі пов'язані проблеми зі шрифтами були задокументовані на GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Горизонталі {#-contour-lines}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Стиль мапи горизонталей](@site/static/img/map/contour_lines.png)

Горизонталі в OsmAnd відображаються як лінії висот на векторних мапах. Щоб їх використовувати, спочатку потрібно увімкнути [плагін Топографія](../plugins/topography.md), завантажити необхідні регіональні дані та налаштувати відображення. Ця функція не увімкнена за замовчуванням і вимагає [придбання](../purchases/index.md).

Горизонталі сумісні з усіма стилями мапи та можуть бути налаштовані через [меню Горизонталі](../plugins/topography.md#contour-lines). Для отримання додаткової інформації відвідайте статтю [плагін Топографія](../plugins/topography.md).


## * Морська глибина {#-nautical-depth}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png) ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Контурні лінії морської глибини представляють області однакової глибини, допомагаючи візуалізувати зміни підводного рельєфу. Ця функція доступна для всіх стилів мапи та режимів і може бути налаштована з увімкненим або вимкненим плагіном морського вигляду мапи.

Для отримання додаткової інформації про морський вигляд мапи відвідайте [сторінку плагіна Морські карти](../plugins/nautical-charts).


## Показати межі {#show-borders}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Ця функція дозволяє перемикати видимість меж для раніше завантажених мап зі списку доступних мап. Її основна мета — допомогти розвантажити основну мапу, приховуючи контури завантажених мап, що особливо корисно, якщо у вас встановлено багато мап.

За замовчуванням межі мапи з'являться при збільшенні до рівня 7 і зникнуть при рівні збільшення 3 і нижче.

:::tip Колір Показати межі завантажених мап
Коли функція *Показати межі завантажених мап* увімкнена, завантажені мапи забарвлюються **зеленим** як у версії OsmAnd для Android, так і для iOS.

На Android архівні мапи відображаються **помаранчевим**. На iOS мапи, які можна оновити, також позначаються **помаранчевим**.
:::


## Сітка координат {#coordinates-grid}


Перейдіть до: *Меню → Налаштувати мапу → Показати → Сітка координат*


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню сітки координат](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>


Функція **Сітка координат** накладає на мапу опорну сітку, дозволяючи візуалізувати лінії широти та довготи на основі різних систем координат. Ця функція корисна для точного визначення місця розташування та геопросторової навігації.

***1. Доступні формати координат:***

- **DD°MM′SS″** (Градуси, хвилини, секунди)
- **DD.DDDDD°** (Десяткові градуси - стандартний формат WGS84)
- **DD°MM.MMM′** (Градуси, десяткові хвилини)
- **MGRS** (Військова сітка координат)
- **UTM** (Універсальна поперечна проекція Меркатора - зональна сіткова система)

:::note

1. *Обмеження сітки UTM:*
    - Мінімальний рівень масштабування для відображення сітки UTM — 9.
    - Одночасно відображається лише одна зона UTM, оскільки зони розділені меридіанами кожні 6°.

2. *Сітка WGS84 підтримує три різні режими:* десяткові градуси, градуси+хвилини та градуси+хвилини+секунди.

:::

***Підтримувані системи координат:***

OsmAnd підтримує кілька **базових проекцій** для відображення географічних сіткових ліній:

| **Проекція** | **Код EPSG** | **Опис** |
|---|---|---|
| **WGS84** | EPSG:4326 | Стандартна система відліку широти/довготи, що використовується в усьому світі. |
| **Меркатор** | EPSG:3857 | Використовується для веб-картографування (Google Maps, OpenStreetMap тощо). |
| **UTM** | EPSG:6387 | Ділить світ на **60 зон** для точного локального позиціонування. |
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

## Налаштувати стиль мапи {#configure-map-style}

### Режим мапи {#map-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*

![Режим мапи](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Режим мапи](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Мапа може відображатися у світлій або темній темі залежно від режиму, вибраного зі списку опцій. За замовчуванням і для всіх нових користувачів [стиль мапи](#default-map-styles) відповідає темі, вибраній у системних налаштуваннях вашого пристрою.

- **<Translate android="true" ids="daynight_mode_day"/>**. Завжди відображає мапу у світлій темі для оптимальної видимості вдень.

- **<Translate android="true" ids="daynight_mode_night"/>**. Завжди відображає мапу в темній темі, ідеально підходить для нічного часу або умов низького освітлення.

- **Схід / Захід сонця**. Автоматично перемикається між денною та нічною темами відповідно до місцевого часу сходу та заходу сонця, які детально описані на цій вкладці в програмі.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Тільки Android*). Використовує датчик освітлення пристрою для автоматичного перемикання між світлою та темною темами відповідно до рівня навколишнього освітлення.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Відображення мапи адаптується до загальної теми програми, показуючи денний режим у світлій темі та нічний режим у темній темі.


### Деталі {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">


*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Показує полігони, стежки, точки та знаки на мапі при низькому масштабуванні. Це означає, що ви можете бачити більше деталей на мапі при низькому збільшенні. Зауважте, що відображення на вашому пристрої може бути нешвидким.
    ![Параметр мапи - Детальніше](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Показує тип дорожнього покриття. Колір дороги допомагає зрозуміти, яке дорожнє покриття, наприклад, асфальт, трава або пісок. Дивіться [Легенду мапи](../map-legend/index.md).
    ![Параметр мапи - Дорожнє покриття](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Вказує якість дороги. Вказує рівність (ухил) дороги. Наскільки рівні ваші дороги: хороші, погані, можливо, жахливі тощо. Подивіться [Легенду мапи](../map-legend/index.md), щоб визначити рівність вашої дороги.
    ![Параметр мапи - Рівність дороги](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. Показує доступність дороги: приватна або дозволена, тільки для екстрених випадків або платна дорога. Перегляньте [Легенду мапи](../map-legend/index.md), щоб знайти доступні дороги.
    ![Параметр мапи - Доступ до дороги](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Функція [Зони низьких викидів (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) відображає зелені межі та мітки "LEZ" на мапах для районів у містах, де доступ обмежений для певних забруднюючих транспортних засобів. LEZ спрямовані на покращення якості повітря шляхом обмеження в'їзду транспортних засобів, які відповідають певним стандартам викидів. Використання цієї функції допомагає користувачам уникнути штрафів, ідентифікуючи та об'їжджаючи ці зелені зони, забезпечуючи відповідність місцевим екологічним нормам під час подорожей через центри міст.

    ![Параметр мапи - Зони низьких викидів](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Різні категорії будівель, такі як житлові, промислові та комерційні, мають колірне кодування. Докладніше дивіться у [Легенді мапи](../map-legend/index.md).
    ![Параметр мапи - Кольорові будівлі](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Відображає освітлені та неосвітлені вулиці, а також підземні та тимчасово освітлені шляхи. Докладніше дивіться у [Легенді мапи](../map-legend/index.md).
    ![Параметр мапи - Вуличне освітлення](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Розроблена для картографів, ця функція показує посилання, зауваження та коментарі інших користувачів на мапі.
    ![Параметр мапи - Помічник картографа](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Показує контури морських глибин. Вам потрібно встановити [плагін Nautical](../plugins/nautical-charts) та завантажити морські мапи.
    ![Параметр мапи - Контури глибин](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Показує зелену дошку та мітки "NR" для [території природного заповідника](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Виділяє охоронювані території зеленою межею та міткою "NR" для зон збереження дикої природи.

    &nbsp;&nbsp;&nbsp;![Параметр мапи - Природний заповідник](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZ aims to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|
-->

### Маршрути {#routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Маршрути мапи - велосипедні маршрути](@site/static/img/map/map-routes-cycle-routes.png) ![Маршрути мапи - туристична мережа](@site/static/img/map/map-routes-hiking-network.png)

Маршрут — це заздалегідь визначений шлях, яким потрібно слідувати, щоб дістатися до певного пункту призначення. Маршрут може бути оптимізований для різних видів подорожей, таких як їзда на велосипеді, піші прогулянки, біг, громадський транспорт та інші. Докладніше про маршрути та їх типи можна прочитати у статті [Маршрути](../map/routes.md).


### Транспорт {#transport}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>

Під час навігації містами вам потрібен більш контрастний вигляд громадського транспорту та зупинок. Ви можете натиснути на зупинку громадського транспорту та вибрати один з маршрутів або зупинок зі списку. Маршрути поїздів також відображаються в цьому налаштуванні.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Показує зупинки громадського транспорту.
    ![Зупинки транспорту на мапі](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Показує маршрути автобусів, тролейбусів та маршрутних таксі.
    ![Автобус на мапі](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Показує маршрути трамваїв та поїздів.
    ![Трамвай на мапі](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Показує маршрути метро.
    ![Метро на мапі](@site/static/img/map/map-transport-subway.png)

### Приховати {#hide}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>

Щоб покращити видимість мапи, вам може знадобитися приховати певні об'єкти. Наприклад, ви можете приховати воду під час використання [онлайн-мап Satellite з шаром Underlay](../map/raster-maps.md#select-raster-maps).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Приховати регіональні межі всередині країн, але межі штатів залишаються видимими.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Приховати всі полігони природних об'єктів, спеціальна функція для [шару Underlay/Overlay](../map/raster-maps.md#select-raster-maps).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Приховати всі полігони будівель.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Приховати всі полігони води (моря, озера, водосховища тощо).
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Приховати номери будинків на мапі.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Приховати запропоновані об'єкти — ті об'єкти, які заплановані до будівництва, але мають лише проєкт (проєктовані дороги, перехрестя, будівлі та інші).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Приховати значки POI з мапи. Однак мітки цих POI все ще відображатимуться на мапі.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Приховати мітки POI з мапи. Однак значки POI все ще відображатимуться на мапі.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Приховати всі підземні об'єкти, такі як тунелі, переходи, поверхи тощо. Спеціально для очищення мап міст від непотрібних об'єктів.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Приховати всі надземні об'єкти. Спеціально для перегляду лише підземних об'єктів, таких як тунелі, переходи тощо.

### Стиль дороги {#road-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Спеціальні налаштування для доріг, де ви можете змінити кольори, щоб вони відповідали дорожньому атласу, або додати висококонтрастні дороги чи жирні контури для доріг.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Стандартний стиль для автомагістралей. Дивіться [Легенду мапи](../map-legend/index.md).
![Стандартний стиль дороги на мапі](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Стиль німецького дорожнього атласу.
![Стиль дороги на мапі німецький](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Стиль американського дорожнього атласу.
![Стиль дороги на мапі американський](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Високий контраст доріг.
![Стиль дороги на мапі високий контраст](@site/static/img/map/map-road-style-high-contrast.png)
- **Блідий**. Менш контрастні кольори доріг.
![Стиль дороги на мапі блідий](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Жирний контур для доріг.
![Стиль дороги на мапі жирний контур](@site/static/img/map/map-road-style-bold-outline.png)


### Розмір тексту {#text-size}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>

- **100%**
    ![Розмір тексту мапи 100%](@site/static/img/map/map-text-size-100.png)

- **200%**
    ![Розмір тексту мапи 200%](@site/static/img/map/map-text-size-200.png)


### Збільшувач мапи {#map-magnifier}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Ви можете вибрати це налаштування довгим натисканням на кнопку "+" або "-" на екрані або:
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Ви можете вибрати це налаштування довгим натисканням на кнопку "+" або "-" на екрані або:
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Це налаштування допомагає змінити збільшення мапи. Воно застосовується до растрових та векторних мап. Для растрових мап воно застосовує ефект збільшення, тому текстові мітки виглядають більшими або меншими. Для векторних мап воно робить мапу більш або менш деталізованою, якщо ви встановите низьке значення, мапа виглядатиме шумно/повільно.

- **75%**
    ![Збільшувач мапи 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**
    ![Збільшувач мапи 200%](@site/static/img/map/map-magnifier-200.png)


### Мова мапи {#map-language}

Опція **Мова мапи** налаштовує написання назв на мапі OsmAnd для рівнів масштабування 7-20 включно. Для рівнів масштабування 2-6 назви відображаються мовою, встановленою для OsmAnd у системному меню налаштувань (див. розділ *[Як змінити мову програми](../start-with/first-steps.md#how-to-change-app-language)*).

Якщо назви на мапі не перекладені на потрібну мову спільнотою OSM, ви можете використовувати [транслітеровані назви](https://uk.wikipedia.org/wiki/Транслітерація): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) або *<Translate ios="true" ids="translit_names"/>* (iOS) перемикач.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>

- **Місцеві назви**
    ![Місцеві назви мови мапи](@site/static/img/map/map-language-local-names_2.png)

- **Українські назви**
    ![Українська мова мапи](@site/static/img/map/map-language-urkanian_2.png)

- **Показати місцеві назви**
    ![Місцева мова мапи](@site/static/img/map/map-language-show-local_2.png)

- **Транслітерувати назви**
    ![Транслітерована мова мапи](@site/static/img/map/map-language-transliterate_2.png)


## Користувацький стиль мапи {#custom-map-style}

Якщо у вас є особистий або сторонній користувацький стиль мапи, створений відповідно до [Специфікації](../../technical/osmand-file-formats/osmand-rendering-style.md), ви можете встановити його на свій пристрій такими способами:

- Скопіюйте файл `.render.xml` на свій пристрій та відкрийте його за допомогою OsmAnd.
- Використовуйте [стандартні діалоги імпорту/експорту](../personal/import-export.md) для експорту або імпорту стилів відображення. Якщо ви створюєте пакет `.osf`, він працює як плагін, яким ви можете поділитися з іншими.
- Після встановлення ви можете вибрати стиль мапи з меню.


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Березень 2025*