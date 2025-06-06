---
source-hash: 6fa7422b06e6718a3df899beccedf3a8140e366d8d20c981e996cc2109415a71
sidebar_position: 4
title:  Налаштувати мапу
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

Меню **Налаштувати мапу** є важливим пунктом у *Головному меню* OsmAnd, де ви можете налаштувати відображення мапи відповідно до ваших потреб. Ви можете виділити на мапі улюблені точки, навігаційні маркери або спеціальні точки інтересу, відобразити певні маршрути або сторонні файли GPX, накласти інформацію про рельєф, супутникові знімки або будь-які інші доступні растрові зображення, відобразити інформацію про громадський транспорт та змінити стиль мапи.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Розділ **Показати**:

![Налаштувати мапу android](@site/static/img/map/configure_map_show1_andr.png) ![Налаштувати мапу android](@site/static/img/map/configure_map_show2_andr.png)

Розділ **Топографія**:

![Налаштувати мапу android](@site/static/img/map/configure_map_topography_andr.png)

Розділ **OpenStreetMap**:

![Налаштувати мапу android](@site/static/img/map/configure_map_osm_andr.png)

Розділи **Маршрути та Відображення мапи**:

![Налаштувати мапу android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштувати мапу ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


Меню **<Translate android="true" ids="configure_map"/>** поділяється на дві категорії:

- [Параметри стилю мапи](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (або **<Translate ios="true" ids="map_widget_renderer"/>**) — це група налаштувань, які дозволяють змінити спосіб відображення основної мапи.
- [Шари мапи](#map-layers). Ці шари дозволяють розміщувати інформацію поверх (або під) основним шаром мапи, але не змінюють відображення самої мапи.

**Примітки:**

- Щоб змінити інформацію на екрані (віджети, іконки), ви можете зробити налаштування в [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- Налаштування Налаштувати мапу залежать від вашого [профілю](../personal/profiles.md).
- Зверніть увагу — меню Налаштувати мапу **закривається**, коли ви торкаєтеся поля мапи.

## Шари мапи {#map-layers}

- [Шар векторної мапи](../map/vector-maps.md) - відображає всю інформацію векторної мапи, включаючи OpenStreetMap, контурні лінії та морські дані.
- [Растрові джерела мапи](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer) - дозволяє вибирати підкладку / основне джерело / накладену мапу з рівнями прозорості.
- [Рельєф](../plugins/topography.md#configure-map-view) - відображає інформацію про схили / тіні пагорбів, 3D рельєф.
- [Межі завантажених мап](../map/vector-maps.md#show-borders) - відображає всі межі завантажених мап на основному шарі мапи.
- [Сітка координат](../map/vector-maps.md#coordinates-grid) - керує видимістю сітки координат на мапі.

## Шари даних мапи {#map-data-layers}

   - [Вибране](../map/point-layers-on-map.md) - відображає вибрані точки.
   - [POI](../map/point-layers-on-map.md) - відображає точки інтересу вибраних категорій.
   - [Маркери мапи](../map/point-layers-on-map.md) - відображає маркери мапи.
   - [Накладені мітки](../map/point-layers-on-map.md) - показує назви точок та вибраного на мапі.
   - [Транспорт](../map/vector-maps.md#transport) - показує зупинки громадського транспорту.
   - [Треки](../map/tracks/index.md) - відображає імпортовані, заплановані або записані треки поверх мапи.
   - [Зображення рівня вулиць](../plugins/mapillary.md#viewing-images) - відображає точки з доступними зображеннями рівня вулиць.
   - [Путівники](../plan-route/travel-guides.md) - відображає путівники на мапі.
   - [Вікіпедія](../plugins/wikipedia.md) - виділяє статті Вікіпедії, пов'язані з мапою.
   - [Інші шари плагінів](../plugins/index.md#configure-a-plugin) - багато плагінів додають свої шари з додатковою інформацією.

## Параметри стилю мапи {#map-style-parameters}

Налаштування стилю мапи залежать від основного стилю мапи, що відображається. Ви можете прочитати більше про це в статті [Стилі мапи](../map/vector-maps).

   - [Стиль мапи](../map/vector-maps.md#default-map-styles) - включає OsmAnd (Місто), Топо, Морський та інші.
   - [Режим мапи](../map/vector-maps.md#map-mode) - дозволяє вибрати вигляд мапи та навігацію залежно від часу доби.
   - [Збільшення мапи](../map/vector-maps.md#map-magnifier) - дозволяє змінювати збільшення мапи.
   - [Розмір тексту](../map/vector-maps.md#text-size) - дозволяє збільшувати або зменшувати розмір тексту на мапі.
   - [Мова мапи](../map/vector-maps.md#map-language) - дозволяє вибрати бажану мову, що відображається на мапі.
   - [Деталі](../map/vector-maps.md#details) - показує конкретні об'єкти.
   - [Приховати](../map/vector-maps.md#hide) - приховує конкретні об'єкти.
   - [Маршрути](../map/vector-maps.md#routes) - дозволяє виділяти маршрути та їх символи.


## Налаштування інтерфейсу користувача (Android) {#ui-customization-android}

Для кожного вибраного профілю в системі Android ви можете змінити порядок пунктів меню <Translate android="true" ids="configure_map"/>, приховати пункти, скинути налаштування за замовчуванням або скопіювати їх з іншого профілю. Це допоможе покращити вашу взаємодію з додатком OsmAnd.

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*

![Пункти налаштування мапи](@site/static/img/settings/configure-screen-ui-customization.png)


> *Цю статтю востаннє оновлено в лютому 2025 року*