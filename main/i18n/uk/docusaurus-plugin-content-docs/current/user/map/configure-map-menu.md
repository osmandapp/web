---
source-hash: 37751eb7faea59cec520cd8d8ca456b80fef44964424340366c4b1999e2835d6
sidebar_position: 4
title:  Налаштувати карту
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Огляд {#overview}

Меню **Налаштувати карту** є важливим елементом *Головного меню* OsmAnd, де ви можете налаштувати відображення карти відповідно до ваших потреб. Ви можете виділити на карті улюблені точки, навігаційні маркери або спеціальні точки інтересу, відобразити певні маршрути або сторонні GPX-файли, накласти інформацію про рельєф, супутникові знімки або будь-які інші доступні растрові зображення, відобразити інформацію про громадський транспорт та змінити стиль карти.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Розділ **Показати**:  

![Налаштувати карту android](@site/static/img/map/configure_map_show1_andr.png)  ![Налаштувати карту android](@site/static/img/map/configure_map_show2_andr.png)  

Розділ **Топографія**:  

![Налаштувати карту android](@site/static/img/map/configure_map_topography_andr.png)  

Розділ **OpenStreetMap**:  

![Налаштувати карту android](@site/static/img/map/configure_map_osm_andr.png)  

Розділи **Маршрути та Відображення карти**:  

![Налаштувати карту android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Розділ **Показати на карті**:  

![Налаштувати карту android](@site/static/img/map/configure_map_show1_ios.png)  

Розділ **Топографія**:  

![Налаштувати карту android](@site/static/img/map/configure_map_topography_ios.png)  

Розділ **OpenStreetMap**:  

![Налаштувати карту android](@site/static/img/map/configure_map_osm_ios.png)  

Розділ **Маршрути**:  

![Налаштувати карту android](@site/static/img/map/configure_map_routes_new_ios.png)

Розділи **Тип карти та Стиль карти**:  

![Налаштувати карту android](@site/static/img/map/configure_map_style_ios.png)

Розділи **Накладення/Підкладка та Мова**:  

![Налаштувати карту android](@site/static/img/map/configure_map_overlay_ios.png)

</TabItem>

</Tabs>


Меню **<Translate android="true" ids="configure_map"/>** поділено на дві категорії:

- [Параметри стилю карти](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (або **<Translate ios="true" ids="map_widget_renderer"/>**) — це група налаштувань, які дозволяють змінювати спосіб відображення основної карти.  
- [Шари карти](#map-layers). Ці шари дозволяють розміщувати інформацію поверх (або під) основним шаром карти, але не змінюють відображення самої карти.  

**Примітки:**

- Щоб змінити інформацію на екрані (віджети, іконки), ви можете зробити налаштування в меню [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Налаштування меню "Налаштувати карту" залежать від вашого [профілю](../personal/profiles.md).
- Зверніть увагу - меню "Налаштувати карту" **закривається**, коли ви торкаєтеся поля карти.

## Шари карти {#map-layers}

- [Шар векторної карти](../map/vector-maps.md) - відображає всю інформацію векторної карти, включаючи OpenStreetMap, лінії контуру та морські дані.
- [Джерела растрових карт](../map/raster-maps.md#select-raster-maps) - дозволяє вибирати підкладку / основне джерело / накладення карти з рівнями прозорості.
- [Рельєф](../plugins/topography.md#hillshade-slope-and-altitude-layers) - відображає інформацію про схил / відтінення рельєфу, 3D-рельєф.
- [Межі завантажених карт](../map/vector-maps.md#show-borders) - відображає всі межі завантажених карт на основному шарі карти.
- [Координатна сітка](../map/vector-maps.md#coordinates-grid) - керування видимістю координатної сітки на карті.

## Шари даних карти {#map-data-layers}

   - [Обране](../map/point-layers-on-map.md) - відображає точки з обраного.
   - [POI](../map/point-layers-on-map.md) - відображає точки інтересу вибраних категорій.
   - [Маркери на карті](../map/point-layers-on-map.md) - відображає маркери на карті.
   - [Мітки накладення](../map/point-layers-on-map.md) - показує назви точок та обраного на карті.
   - [Транспорт](../map/vector-maps.md#transport) - показує зупинки громадського транспорту.
   - [Треки](../map/tracks/index.md) - відображає імпортовані, заплановані або записані треки поверх карти.
   - [Зображення з рівня вулиць](../plugins/mapillary.md#map-layer) - відображає точки з доступними зображеннями з рівня вулиць.
   - [Путівники](../plan-route/travel-guides.md) - відображає путівники на карті.
   - [Вікіпедія](../plugins/wikipedia.md) - виділяє статті з Вікіпедії, пов'язані з картою.
   - [Редагування OSM](../plugins/osm-editing.md#osm-editing-layer) - відображає редагування OpenStreetMap, нотатки та допоміжні шари, пов'язані з картографуванням.
   - [Шари інших плагінів](../plugins/index.md#configure-plugin) - багато плагінів додають свої шари з додатковою інформацією.

## Параметри стилю карти {#map-style-parameters}

Налаштування стилю карти залежать від основного стилю карти, що відображається. Детальніше про це можна прочитати в статті [Стилі карти](../map/vector-maps).

   - [Стиль карти](../map/vector-maps.md#default-map-styles) - включає OsmAnd (Міський), Топо, Морський та інші.
   - [Режим карти](../map/vector-maps.md#map-mode) - дозволяє вибрати вигляд карти та навігацію залежно від часу доби.
   - [Масштаб карти](../map/vector-maps.md#map-magnifier) - дозволяє змінювати збільшення карти.
   - [Розмір тексту](../map/vector-maps.md#text-size) - дозволяє збільшувати або зменшувати розмір тексту на карті.
   - [Мова карти](../map/vector-maps.md#map-language) - дозволяє вибрати бажану мову, що відображається на карті.
   - [Деталі](../map/vector-maps.md#details) - показує певні об'єкти.
   - [Приховати](../map/vector-maps.md#hide) - приховує певні об'єкти.
   - [Маршрути](../map/vector-maps.md#routes) - дозволяє виділяти маршрути та їхні символи.  


## Налаштування інтерфейсу (Android) {#ui-customization-android}

Для кожного вибраного профілю в системі Android ви можете змінити порядок пунктів меню <Translate android="true" ids="configure_map"/>, приховати пункти, скинути налаштування за замовчуванням або скопіювати їх з іншого профілю. Це допоможе покращити вашу взаємодію з додатком OsmAnd.  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Пункти меню Налаштувати карту ](@site/static/img/settings/configure-screen-ui-customization.png)