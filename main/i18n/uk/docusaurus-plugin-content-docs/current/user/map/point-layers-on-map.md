---
source-hash: a299ff4aecadfdc9bf18081279073760b514c798b579cc75e3642a2a8f646195
sidebar_position: 7
title:  Точки на карті
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

На карті можуть відображатися такі точки, як [Вибране](#favorites), [Цікаві місця (POI)](#points-of-interest-pois), [Маркери](#markers), [Вікіпедія](#-wikipedia--wikipedia), [Результати пошуку](#search-results-poi), [Аудіо- та відеонотатки](#-audio--video-points-android--audio--video-points-android) та [Редагування OSM](#-osm-edit-points--osm-edit-points).


## Вибране {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Вибране](../personal/favorites.md) — це спеціальні точки, позначені користувачами. За замовчуванням вони відображаються на карті як жовті зірочки, хоча їх можна налаштувати за допомогою будь-якого кольору, форми та значка. Вони стають видимими на карті, починаючи з рівня масштабування 6.

:::info
У версії OsmAnd для Android ви можете відображати на карті та під час пошуку лише вибрані точки певних груп. Перейдіть до *Меню → Мої місця → Вибране*, торкніться &#8942; та виберіть *Показати на карті* або ні.
:::


## Назви вибраного та POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

За замовчуванням Вибране та цікаві місця (POI) відображаються без назв, щоб не захаращувати карту текстом. Ви можете увімкнути назви в меню Налаштувати карту.  


## Цікаві місця (POI) {#points-of-interest-pois}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*

![POI overlay Android](@site/static/img/map/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*

![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

</TabItem>

</Tabs>

[Цікаві місця (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) — це певні місця, позначені символом на карті. Вони вказують на цікаві або корисні місця та об'єкти і є частиною [Векторних карт](../map/vector-maps.md).  

Найбільш помітні POI відображаються на карті автоматично. Однак ви можете вибрати певний тип POI (наприклад, *Ресторани*), і всі вони будуть виділені на карті **помаранчевим колом** (починаючи з рівня масштабування 9).  

Детальну інформацію про цікаве місце можна знайти в [Контекстному меню](../map/map-context-menu.md), яке з'являється, коли ви [торкаєтеся](../map/map-context-menu.md#select-an-object-single-tap) точки.  


### Типи POI {#poi-types}

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

Ви можете вибрати один або кілька стандартних типів POI OsmAnd, або створити власний [фільтр POI](../search/search-poi.md) та вибрати його для відображення POI на карті.

**Android**. Торкніться нижньої лівої кнопки, щоб перемикатися між вибором однієї або кількох цікавих точок.


### Стиль карти POI {#map-style-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)  

</TabItem>

</Tabs>

Кожному типу POI в OsmAnd призначено певний значок і колір. [Рівень масштабування](../map/vector-maps.md#details) та дизайн POI можуть відрізнятися в деяких [стилях карти](../map/vector-maps.md#default-map-styles).  

[Докладніше](../map/vector-maps.md#hide).


## Маркери {#markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers iOS](@site/static/img/map/map_markers_ios.png)  

</TabItem>

</Tabs>

[Маркери карти](../personal/markers.md) — це тимчасові точки, позначені на карті як прапорці. Їхній вигляд можна налаштувати за допомогою **стрілок** (Стрілки на карті) та **індикації відстані** (Лінії напрямку).  

Докладніше про вигляд маркерів можна прочитати в цій [статті](../personal/markers#appearance-on-the-map).


## Точки треку {#track-waypoints}

![Track on map](@site/static/img/map/track_point_on_map.png)

Точки треку (шляхові точки) є частиною файлів треків (GPX). Ці точки відображаються автоматично, якщо трек знаходиться на карті. Вони виглядають і можуть бути налаштовані подібно до [Вибраного](#favorites) - значок, назви, колір, форма. Як створити та додати шляхову точку, читайте в [статті](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Докладніше](../map/tracks/index.md) про треки на карті.


## Результати пошуку (POI) {#search-results-poi}

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Результати пошуку можуть відображатися на карті як спеціальний шар POI. Під час пошуку торкніться спеціального рядка (**<Translate android="true" ids="shared_string_show_on_map"/>**), щоб відобразити POI на карті.  

Щоб вимкнути POI, натисніть **X** у верхньому правому куті.  

Докладніше про [пошук](../search/index.md).


## * Зображення на рівні вулиць {#-street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary street view](@site/static/img/map/mapillary_street-view.png)

</TabItem>

</Tabs>

[Зображення на рівні вулиць (Mapillary)](../plugins/mapillary.md) відображаються на карті як зелені точки. До цих точок прикріплені фотографії з виглядом вулиць. Ви можете створити [фільтр](../plugins/mapillary.md#data-filtering) та вибрати фотографії, які ви хочете відобразити на карті. Щоб відкрити фотографію з виглядом вулиці, торкніться зеленої точки.  

Потрібен [плагін Mapillary](../plugins/mapillary.md).


## * Точка паркування {#-parking-point}

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

[Точка паркування](../plugins/parking.md) — це точка, позначена користувачами на карті для зберігання інформації про точне місцезнаходження транспортного засобу. Її можна розділити на зони необмеженого та обмеженого паркування.  

Потрібен [плагін Позиція паркування](../plugins/parking.md).


## * Вікіпедія {#-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*

![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)

</TabItem>

</Tabs>

OsmAnd має спеціальні цікаві місця, позначені логотипом «W» та пов'язані зі статтями Вікіпедії. Ці точки можуть відображатися так само, як і будь-який інший тип POI, за допомогою пошуку або перейшовши до <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Однак існує спеціальний спосіб фільтрувати статті Вікіпедії за **доступними мовами**.  

[Докладніше](../plugins/wikipedia.md) про те, як завантажити та використовувати функцію Вікіпедії в OsmAnd.


## * Аудіо / Відео точки (Android) {#-audio--video-points-android}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

</TabItem>

</Tabs>

Аудіо / Відео нотатки — це точки з аудіо-, фото- та відеоданими на карті, створені користувачами.  

Потрібен [плагін Аудіо / Відео нотатки](../plugins/audio-video-notes.md).


## * Точки редагування OSM {#-osm-edit-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

</TabItem>

</Tabs>

Точки редагування OSM — це POI, створені користувачами для додавання до [проєкту OpenStreetMap](https://www.openstreetmap.org/).  

Потрібен [плагін Редагування OSM](../plugins/osm-editing.md).


## * Нотатки OSM {#-osm-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

</TabItem>

</Tabs>

Нотатки OSM — це POI, створені користувачами для повідомлення про проблеми з даними карти в [OpenStreetMap](https://www.openstreetmap.org/). Нові нотатки (ще не завантажені в OpenStreetMap) позначені зеленим кольором зі знаком **+**, закриті нотатки позначені зеленим кольором зі знаком «V», а відкриті нотатки позначені червоним кольором. Ви можете налаштувати рівень масштабування для відображення нотаток та вибрати, чи показувати або приховувати закриті нотатки.  

Потрібен [плагін Редагування OSM](../plugins/osm-editing.md).


## Точки вздовж маршруту {#points-along-the-route}

Шляхові точки, POI, Вибрані точки та Аудіо/відео нотатки — усі вони стосуються концепції збереження місць та маршрутів у форматі [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Ви можете використовувати [ті самі теги](../map/tracks/track-context-menu.md#display-custom-gpx-tags) для їх опису та редагування.  

[Шляхові точки](#track-waypoints) — це окремі точки на карті або маршруті. Їх можна використовувати для позначення певних місць, які можуть бути важливими для навігації або запису ваших подорожей. Наприклад, ви можете створити шляхову точку на карті, щоб позначити важливе перехрестя або зміну напрямку.  

[Цікаві місця (POI)](#points-of-interest-pois) — це місця, що становлять особливий інтерес для користувачів. Це можуть бути визначні пам'ятки, ресторани, готелі, заправки та інші цікаві місця, які ви можете захотіти відзначити або відвідати.  

[Вибрані точки](#favorites) — це місця, які користувачі вважають особливо важливими або цікавими та зберігають у своєму списку улюблених місць. Місця можуть включати будь-яке місце, яке ви можете захотіти знайти та повернутися до нього пізніше.

[Аудіо/відео нотатки](#-audio--video-points-android--audio--video-points-android). У форматі GPX ви можете зберігати аудіо- та відеозаписи як шляхові точки. Це дозволяє пов'язувати медіафайли з певними місцями на карті або маршруті.  

Усі ці типи точок можуть бути збережені у форматі GPX, щоб надати вам інформацію про місцезнаходження та допомогти з навігацією та плануванням маршруту. Вони служать різним цілям, але загальна ідея полягає в зберіганні та передачі географічної інформації, щоб ви могли використовувати її у своїх навігаційних завданнях.


## Пов'язані статті {#related-articles}

- [Меню Налаштувати карту](../map/configure-map-menu.md)
- [Векторні карти (Стилі карти)](./vector-maps.md)
- [Растрові карти (Онлайн / Офлайн)](./raster-maps.md)

> *Останнє оновлення: Червень 2025*