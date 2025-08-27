---
source-hash: cc4a39deaa5305aa029009f3f9baff5a545f3a163336fd6ca3c80b085166c351
sidebar_position: 4
title: Налаштувати карту
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

Меню **Налаштувати карту** є важливим елементом у *Головному меню* OsmAnd, де ви можете налаштувати відображення карти відповідно до ваших потреб. Ви можете виділити улюблені точки, навігаційні маркери або спеціальні точки інтересу на карті, відобразити певні маршрути або сторонні файли GPX, накласти інформацію про рельєф, супутникові зображення або будь-які інші доступні растрові зображення, відобразити інформацію про громадський транспорт та змінити стиль карти.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Розділ **Показати**:

![Configure map android](@site/static/img/map/configure_map_show1_andr.png) ![Configure map android](@site/static/img/map/configure_map_show2_andr.png)

Розділ **Топографія**:

![Configure map android](@site/static/img/map/configure_map_topography_andr.png)

Розділ **OpenStreetMap**:

![Configure map android](@site/static/img/map/configure_map_osm_andr.png)

Розділи **Маршрути та Рендеринг карти**:

![Configure map android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Меню **<Translate android="true" ids="configure_map"/>** розділене на дві категорії:

- [Параметри стилю карти](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (або **<Translate ios="true" ids="map_widget_renderer"/>**) — це група налаштувань, які дозволяють змінити спосіб відображення основної карти.
- [Шари карти](#map-layers). Ці шари дозволяють розміщувати інформацію поверх (або під) основним шаром карти, але не змінюють відображення самої карти.

**Примітки:**

- Щоб змінити інформацію на екрані (віджети, іконки), ви можете зробити налаштування в [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Налаштування карти залежать від вашого [профілю](../personal/profiles.md).
- Зверніть увагу – меню Налаштувати карту **закривається**, коли ви торкаєтеся поля карти.

## Шари карти {#map-layers}

- [Шар векторної карти](../map/vector-maps.md) - відображає всю інформацію векторної карти, включаючи OpenStreetMap, контурні лінії та морські дані.
- [Растрові джерела карти](../map/raster-maps.md#select-raster-maps) - дозволяє вибирати підкладку / основне джерело / накладену карту з рівнями прозорості.
- [Рельєф](../plugins/topography.md#hillshade-slope-and-altitude-layers) - відображає інформацію про схили / тіні, 3D-рельєф.
- [Межі завантажених карт](../map/vector-maps.md#show-borders) - відображає всі межі завантажених карт на основному шарі карти.
- [Координатна сітка](../map/vector-maps.md#coordinates-grid) - керує видимістю координатної сітки на карті.

## Шари даних карти {#map-data-layers}

- [Вибране](../map/point-layers-on-map.md) - відображає вибрані точки.
- [POI](../map/point-layers-on-map.md) - відображає точки інтересу вибраних категорій.
- [Маркери карти](../map/point-layers-on-map.md) - відображає маркери карти.
- [Накладені мітки](../map/point-layers-on-map.md) - показує назви точок та вибраного на карті.
- [Транспорт](../map/vector-maps.md#transport) - показує зупинки громадського транспорту.
- [Треки](../map/tracks/index.md) - відображає імпортовані, заплановані або записані треки поверх карти.
- [Зображення рівня вулиць](../plugins/mapillary.md#map-layer) - відображає точки з доступними зображеннями рівня вулиць.
- [Путівники](../plan-route/travel-guides.md) - відображає путівники на карті.
- [Вікіпедія](../plugins/wikipedia.md) - виділяє статті Вікіпедії, пов'язані з картою.
- [Інші шари плагінів](../plugins/index.md#configure-plugin) - багато плагінів додають свої шари з додатковою інформацією.

## Параметри стилю карти {#map-style-parameters}

Налаштування стилю карти залежать від основного відображеного стилю карти. Детальніше про це можна прочитати у статті [Стилі карти](../map/vector-maps).

- [Стиль карти](../map/vector-maps.md#default-map-styles) - включає OsmAnd (Місто), Топо, Морський та інші.
- [Режим карти](../map/vector-maps.md#map-mode) - дозволяє вибрати вигляд карти та навігацію залежно від часу доби.
- [Збільшувач карти](../map/vector-maps.md#map-magnifier) - дозволяє змінювати збільшення карти.
- [Розмір тексту](../map/vector-maps.md#text-size) - дозволяє збільшувати або зменшувати розмір тексту на карті.
- [Мова карти](../map/vector-maps.md#map-language) - дозволяє вибрати бажану мову, що відображається на карті.
- [Деталі](../map/vector-maps.md#details) - показує конкретні об'єкти.
- [Приховати](../map/vector-maps.md#hide) - приховує конкретні об'єкти.
- [Маршрути](../map/vector-maps.md#routes) - дозволяє виділяти маршрути та їхні символи.

## Налаштування інтерфейсу користувача (Android) {#ui-customization-android}

Для кожного вибраного профілю в системі Android ви можете змінити порядок елементів меню <Translate android="true" ids="configure_map"/>, приховати елементи, скинути налаштування за замовчуванням або скопіювати їх з іншого профілю. Це допоможе покращити вашу взаємодію з програмою OsmAnd.

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)