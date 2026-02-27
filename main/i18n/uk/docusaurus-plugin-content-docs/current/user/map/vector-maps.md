---
source-hash: 26ecc10e593a10b425e7d1bc880124a223b29d77fca08040a2c47952e03d4203
sidebar_position: 5
title:  Векторні карти 
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

Векторні карти призначені для використання як джерело даних карти за замовчуванням для OsmAnd, тому **вам потрібно завантажити їх на свій пристрій**. Векторні карти підтримують величезну кількість стилів карт для різних видів діяльності, таких як їзда на велосипеді, піші прогулянки, поїздки на автомобілі чи снігоході та інші.  

Кожен стиль карти можна налаштувати, щоб виділити або приховати певні об'єкти, а також перемикатися між денним і нічним режимами. Дані векторної карти можна доповнити векторними даними та відобразити у стилі карти за замовчуванням, наприклад, інформацією про *лінії контуру*. Ви можете *створити власний стиль карти OsmAnd*, щоб відобразити необхідну інформацію.

Векторні карти представляють просторові дані, такі як дороги, будівлі, точки та полігони, за допомогою математичної геометрії, збереженої у бінарному форматі. Кожен елемент (вузол, лінія чи полігон) визначається координатами та динамічно відображається відповідно до рівня масштабу та стилю карти.

Оскільки векторні дані не зберігаються як фіксовані зображення, їхній вигляд, включаючи колір, ширину лінії, прозорість чи візерунок, можна легко модифікувати. Цей підхід забезпечує ефективне відображення, низьке використання пам'яті та плавне масштабування на будь-якому рівні без втрати якості.

:::info note
Дуже малі полігони можуть бути спрощені або спотворені під час генерації даних карти. Об'єкти з площею менше приблизно одного квадратного метра можуть не відображатися. Для правильної візуалізації малі особливості слід картографувати як окремі вузли, а не як полігони.
:::


## Варіанти використання {#use-cases}

Настроювані стилі карт є однією з головних переваг OsmAnd. Ви можете налаштувати відображення карти під себе та свої хобі, налаштувати відображення або приховування певних об'єктів карти, розміри та кольори цих об'єктів, а також змінити масштаб відображення певних об'єктів.


## Відображення карти {#map-rendering}

### Стилі карти {#map-styles}

OsmAnd надає кілька вбудованих стилів векторних карт, оптимізованих для різних видів діяльності. Крім стилів за замовчуванням, ви можете створювати та встановлювати власні настроювані стилі карти на основі правил відображення.

Для детального опису доступних стилів та інструкцій щодо створення настроюваних стилів дивіться статтю [Стилі карт](../map/map-styles.md).

### Режим карти {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Режим карти](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Режим карти](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

Карта може відображатися у світлій або темній темі залежно від вибраного режиму зі списку опцій. За замовчуванням і для всіх нових користувачів [стиль карти](#map-styles) відповідає темі, обраній у системних налаштуваннях вашого пристрою.

- **<Translate android="true" ids="daynight_mode_day"/>**. Завжди відображає карту у світлій темі для оптимальної видимості вдень.

- **<Translate android="true" ids="daynight_mode_night"/>**. Завжди показує карту в темній темі, що ідеально підходить для нічного часу або умов слабкого освітлення.

- **Схід / Захід сонця**. Автоматично перемикається між денною та нічною темами відповідно до місцевого часу сходу та заходу сонця, які детально описані в цій вкладці в додатку.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*лише для Android*). Використовує датчик освітлення пристрою для автоматичного перемикання між світлою та темною темами відповідно до рівня навколишнього освітлення.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. Відображення карти адаптується до загальної теми програми, показуючи денний режим у світлій темі та нічний режим у темній темі. 

### Стиль доріг {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Спеціальні налаштування для доріг, де ви можете змінити кольори, щоб вони відповідали дорожньому атласу, або додати висококонтрастні дороги чи жирні контури для доріг.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Стандартний стиль для автомагістралей. Дивіться [Легенду карти](../map-legend/index.md).  
![Стандартний стиль доріг на карті](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Стиль німецького дорожнього атласу.  
![Німецький стиль доріг на карті](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Стиль американського дорожнього атласу.  
![Американський стиль доріг на карті](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. Високий контраст доріг.  
![Висококонтрастний стиль доріг на карті](@site/static/img/map/map-road-style-high-contrast.png)
- **Блідий**. Менш контрастні кольори доріг.  
![Стиль доріг з жирним контуром на карті](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Жирний контур для доріг.  
![Стиль доріг з жирним контуром на карті](@site/static/img/map/map-road-style-bold-outline.png)


### Деталі {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Показує полігони, стежки, точки та знаки на карті при низькому масштабі. Це означає, що ви можете бачити більше деталей на карті при малому збільшенні. Зауважте, що візуалізація на вашому пристрої може бути нешвидкою.  
    ![Параметр карти - Більше деталей](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Показує тип дорожнього покриття. Колір дороги допомагає зрозуміти, яке покриття має дорога, наприклад, асфальт, трава або пісок. Дивіться [Легенду карти](../map-legend/index.md).  
    ![Параметр карти - Покриття дороги](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Вказує на якість дороги. Вказує на гладкість (ухил) дороги. Наскільки гладкі ваші дороги: хороші, погані, можливо, жахливі тощо. Подивіться на [Легенду карти](../map-legend/index.md), щоб визначити гладкість вашої дороги.  
    ![Параметр карти - Гладкість дороги](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Показує доступність дороги: приватна або дозволена, тільки для екстрених служб або платна дорога. Перегляньте [Легенду карти](../map-legend/index.md), щоб знайти доступні дороги.  
    ![Параметр карти - Доступ до дороги](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Функція [Зони з низьким рівнем викидів (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) відображає зелені межі та мітки "LEZ" на картах для районів у містах, де доступ обмежений для певних забруднюючих транспортних засобів. LEZ спрямовані на покращення якості повітря шляхом обмеження в'їзду для транспортних засобів, які відповідають певним стандартам викидів. Використання цієї функції допомагає користувачам уникнути штрафів, ідентифікуючи та об'їжджаючи ці зелені зони, забезпечуючи дотримання місцевих екологічних норм під час подорожей через центри міст.  

    ![Параметр карти - Зони з низьким рівнем викидів](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Різні категорії будівель, такі як житлові, промислові та комерційні, позначені кольором. Детальніше дивіться в [Легенді карти](../map-legend/index.md).  
    ![Параметр карти - Кольорові будівлі](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Відображає освітлені та неосвітлені вулиці, а також підземні та тимчасово освітлені шляхи. Детальніше дивіться в [Легенді карти](../map-legend/index.md).  
    ![Параметр карти - Вуличне освітлення](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Розроблена для картографів, ця функція показує посилання, зауваження та коментарі інших користувачів на карті.  
    ![Параметр карти - Помічник картографа](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Показує контури морських глибин. Вам потрібно встановити [плагін Морська карта](../plugins/nautical-charts) та завантажити морські карти.  
    ![Параметр карти - Контури глибин](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Показує зелену рамку та мітки "NR" для [території природного заповідника](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Виділяє заповідні зони зеленою межею та міткою "NR" для зон збереження дикої природи.  

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

### Приховати {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

Щоб покращити видимість карти, вам може знадобитися приховати певні об'єкти. Наприклад, ви можете приховати воду під час використання [супутникових онлайн-карт з шаром підкладки](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Приховати регіональні межі всередині країн, але межі штатів/областей залишаються видимими.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Приховати всі полігони природних об'єктів, спеціальна функція для [шару підкладки/накладення](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Приховати всі полігони будівель.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Приховати всі полігони води (моря, озера, водосховища тощо).
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Приховати номери будинків на карті.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Приховати запропоновані об'єкти - ті об'єкти, які плануються до будівництва, але мають лише проєкт (проєктовані дороги, перехрестя, будівлі та інше).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Приховати іконки POI з карти. Однак, назви цих POI все одно будуть з'являтися на карті.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Приховати назви POI з карти. Однак, іконки POI все одно будуть з'являтися на карті.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Приховати всі підземні об'єкти, такі як тунелі, переходи, поверхи тощо. Спеціально для очищення карт міст від непотрібних об'єктів.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Приховати всі надземні об'єкти. Спеціально для перегляду лише підземних об'єктів, таких як тунелі, переходи тощо.

### Транспорт {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

Під час навігації містами вам потрібен більш контрастний вигляд громадського транспорту та зупинок. Ви можете торкнутися зупинки громадського транспорту та вибрати один із маршрутів або зупинок зі списку. У цьому налаштуванні також відображаються маршрути поїздів.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Показує зупинки громадського транспорту.  
    ![Зупинки громадського транспорту на карті](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Показує маршрути автобусів, тролейбусів та маршрутних таксі.  
    ![Транспорт на карті - автобус](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Показує маршрути трамваїв та поїздів.  
    ![Транспорт на карті - трамвай](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Показує маршрути метро.  
    ![Транспорт на карті - метро](@site/static/img/map/map-transport-subway.png)


## Відображення тексту {#text-rendering}

### Збільшувач карти {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Ви можете вибрати це налаштування довгим натисканням на кнопку "+" або "-" на екрані або:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Ви можете вибрати це налаштування довгим натисканням на кнопку "+" або "-" на екрані або:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

Це налаштування допомагає змінити збільшення карти. Воно застосовується до растрових та векторних карт. Для растрових карт воно застосовує ефект збільшення, тому текстові мітки виглядають більшими або меншими. Для векторних карт воно робить карту більш або менш деталізованою; якщо ви встановите низьке значення, карта виглядатиме зашумленою/повільною.  

- **75%**  
    ![Збільшувач карти 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Збільшувач карти 200%](@site/static/img/map/map-magnifier-200.png)

### Розмір тексту {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Розмір тексту на карті 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Розмір тексту на карті 200%](@site/static/img/map/map-text-size-200.png)

### Мова карти {#map-language}

Опція **Мова карти** налаштовує написання назв на карті OsmAnd для рівнів масштабування від 7 до 20 включно. Для рівнів масштабування 2-6 назви відображаються мовою, встановленою для OsmAnd у меню системних налаштувань (див. розділ *[Як змінити мову програми](../start-with/first-steps.md#how-to-change-app-language)*).  

Якщо назви на карті не перекладені на потрібну мову спільнотою OSM, ви можете використовувати [транслітеровані назви](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) або *<Translate ios="true" ids="translit_names"/>* (iOS) перемикач.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Місцеві назви**   
    ![Мова карти - місцеві назви](@site/static/img/map/map-language-local-names_2.png)

- **Бажана мова** (українська)   
    ![Мова карти - українська](@site/static/img/map/map-language-urkanian_2.png)

- **Використовувати латинську назву, якщо відсутня**   
    ![Мова карти - транслітерація](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Місцеві назви**    
    ![Мова карти - місцеві назви](@site/static/img/map/map-language-local-names_2.png)

- **Бажана мова** (українська)  
    ![Мова карти - українська](@site/static/img/map/map-language-urkanian_2.png)

- **Показувати місцеві назви**  (додає 2-гу мітку, якщо місцева назва відрізняється)  
    ![Мова карти - місцева](@site/static/img/map/map-language-show-local_2.png)

- **Транслітерувати назви**    
    ![Мова карти - транслітерація](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Шрифти карти (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Шрифти карти версія для Android](@site/static/img/map/map_fonts.png) ![Версія шрифтів карти](@site/static/img/map/map_fonts_1.png)

Для карт спрощеною/традиційною китайською, японською та корейською мовами можуть з'являтися неправильні символи (наприклад, квадрати), якщо на вашому пристрої відсутні необхідні шрифти. Ця проблема виникає при відображенні місцевих назв і може бути вирішена завантаженням необхідних шрифтів через OsmAnd.  

Деякі пов'язані проблеми зі шрифтами були задокументовані на GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Відображення топографії {#topography-rendering}

### * Лінії контуру {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Стиль карти з лініями контуру](@site/static/img/map/contour_lines.png)

Лінії контуру в OsmAnd відображаються як лінії висот на векторних картах. Щоб їх використовувати, ви повинні спочатку увімкнути [плагін Топографія](../plugins/topography.md), завантажити необхідні регіональні дані та налаштувати відображення. Ця функція не ввімкнена за замовчуванням і вимагає [покупки](../purchases/index.md).  

Лінії контуру сумісні з усіма стилями карт і можуть бути налаштовані через [меню Лінії контуру](../plugins/topography.md#contour-lines). Для отримання додаткової інформації відвідайте статтю [плагін Топографія](../plugins/topography.md).

### * Морська глибина {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Лінії контуру морської глибини представляють області однакової глибини, допомагаючи візуалізувати зміни підводної топографії. Ця функція доступна у всіх стилях та режимах карти і може бути налаштована з увімкненим або вимкненим плагіном "Вигляд морської карти".  

Для отримання додаткової інформації про вигляд морської карти відвідайте [сторінку плагіна Морська карта](../plugins/nautical-charts).

### 3D Будівлі {#3d-buildings}

<InfoAndroidOnly/> 

![3D Будівлі](@site/static/img/map/3d_buildings_1_new.png) ![3D Будівлі](@site/static/img/map/3d_buildings_2.png) 

Функція **3D Будівлі** відображає будівлі як об'ємні 3D-моделі замість плоских фігур. Будівлі генеруються з [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), використовуючи інформацію про висоту з тегів, таких як `height` та `building:levels`, коли вони доступні. 3D будівлі показуються лише на вищих рівнях масштабу (вигляд міста/вулиці), де окремі будівлі можна відобразити.  
Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D buildings*  
Використовуйте основний перемикач, щоб увімкнути або вимкнути 3D-відображення будівель. Щоб переглядати будівлі в 3D, нахиліть карту, розмістивши два пальці на екрані та провівши вгору.

Наразі ця опція доступна лише коли увімкнено [плагін розробки OsmAnd](../plugins/development.md).  
Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

Налаштування 3D будівель поділено на дві групи: **Вигляд** та **Продуктивність**.

**Вигляд: Колір**. Він контролює колір 3D будівель. Коли ви торкаєтеся Кольору, OsmAnd відкриває окреме екран попереднього перегляду, де ви можете бачити карту під час налаштування.  
- **Стиль карти** — використовує стандартний колір будівель з поточного вибраного стилю карти.  
- **Настроюваний** — дозволяє встановити настроюваний колір будівель окремо для денного / нічного режиму.

:::tip Purchase
Настроювання кольору 3D будівель — це [платна функція](../purchases/index.md).  
:::

Якщо настроювані кольори не придбані, ви побачите порожній стан з коротким описом та кнопкою Отримати. Якщо Настроюваний доступний, ви можете перемикатися між Днем і Ночами, вибирати колір з палітри (або відкривати Всі кольори), а потім торкнутися Застосувати.

**Вигляд: Видимість**. Він контролює непрозорість (прозорість) 3D будівель. Використовуйте слайдер, щоб встановити видимість у відсотках. Нижчі значення роблять будівлі більш прозорими та допомагають дорогам/міткам залишатися читабельними. Вищі значення роблять будівлі більш суцільними та візуально домінуючими. Торкання Видимості також відкриває окреме екран попереднього перегляду зі слайдером.

На екранах попереднього перегляду (Колір / Видимість) ви можете використовувати Скинути за замовчуванням з панелі додатку, щоб відновити стандартне значення.

**Продуктивність: Рівень деталізації**. Він контролює, наскільки деталізованою є геометрія 3D будівель:  
- Низький (за замовчуванням) — простіша геометрія.  
- Високий — більш деталізована геометрія.

**Продуктивність: Відстань огляду**. Він контролює, наскільки далеко від камери відображаються 3D будівлі:  
- Близько (за замовчуванням) — відображає будівлі ближче до вас.  
- Далеко — відображає будівлі з більшої відстані.

Обидві опції продуктивності використовують двопозиційний перемикач безпосередньо на екрані налаштувань 3D будівель.

<!--
## Map Legend {#map-legend}

The map legend serves as a key to understanding the symbols used in OsmAnd maps. It explains the meaning behind various map symbols, including points, lines, and areas. For example, symbols like blue sinuous lines indicate rivers, while different colors and shapes may represent buildings, paths, and routes.  

The legend helps users interpret what they see on the map. You can access the full OsmAnd map legend [here](../map-legend/index.md).
-->


## Додаткові налаштування {#additional-settings}

### Показати межі {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

Ця функція дозволяє вмикати або вимикати видимість меж для раніше завантажених карт зі списку доступних карт. Її основна мета — допомогти розвантажити головну карту, приховавши контури завантажених карт, що особливо корисно, якщо у вас встановлено багато карт.  

За замовчуванням межі карт з'являться, коли ви збільшите масштаб до рівня 7, і зникнуть на рівні масштабування 3 і нижче.

:::tip Color Show borders of downloaded maps
Коли функція *Показати межі завантажених карт* увімкнена, завантажені карти забарвлюються в **зелений** колір як у версіях OsmAnd для Android, так і для iOS.  

На Android архівовані карти відображаються **помаранчевим** кольором. В iOS карти, які можна оновити, також позначаються **помаранчевим** кольором.
:::

### Сітка координат {#coordinates-grid}

:::tip Purchase
Настроювання кольору сітки координат — це [платна функція](../purchases/index.md).  
:::

Перейдіть до: *Меню → Налаштувати карту → Показати → Сітка координат*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню сітки координат](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

Функція **Сітка координат** накладає на карту опорну сітку, що дозволяє візуалізувати лінії широти та довготи на основі різних систем координат. Ця функція корисна для точного визначення місцезнаходження та геопросторової навігації. 

Ви можете налаштувати такі опції:
- **Рівні масштабування:** встановіть мінімальний і максимальний рівні масштабу (2 - 22), на яких сітка видима.
- **Позиція міток:** оберіть між *Краї* (за замовчуванням) або *Центр* для міток сітки.
- **Колір сітки:** доступний окремо для денного/нічного режиму. 
- **Формат координат:** оберіть з кількох доступних форматів (див. список нижче).


***Доступні формати координат:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Градуси, хвилини, секунди)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Десяткові градуси - формат WGS84 за замовчуванням)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Градуси, десяткові хвилини)
- **UTM** (EPSG:6387, Універсальна поперечна проекція Меркатора - система сітки на основі зон). Мінімальний рівень масштабування - 9, одночасно відображається лише одна зона UTM, оскільки зони розділені меридіанами кожні 6°
- **MGRS** (Військова система координат)

За замовчуванням програма використовує формат координат, вибраний у [Загальних налаштуваннях](../personal/profiles.md#units--formats), але ви можете змінити його безпосередньо в цьому меню.

[Швидка дія](../widgets/quick-action.md#overview): Ви також можете додати швидке перемикання *Показати/Приховати сітку координат* до групи [Налаштувати карту](../widgets/quick-action.md#configure-map) для швидкого доступу.

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

## Маршрути {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Маршрути на карті - велосипедні маршрути](@site/static/img/map/map-routes-cycle-routes.png)  ![Маршрути на карті - мережа пішохідних маршрутів](@site/static/img/map/map-routes-hiking-network.png)

Маршрут — це заздалегідь визначений шлях, якого потрібно дотримуватися, щоб дістатися до певного пункту призначення. Маршрут може бути оптимізований для різних видів подорожей, таких як їзда на велосипеді, піші прогулянки, біг, громадський транспорт та інші. Детальніше про маршрути та їх типи ви можете прочитати у статті [Маршрути](../map/routes.md).


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../map/interact-with-map.md)
- [Налаштувати карту](../map/configure-map-menu.md)
- [Стилі карт](../map/map-styles.md)
- [Маршрути](../map/routes.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)