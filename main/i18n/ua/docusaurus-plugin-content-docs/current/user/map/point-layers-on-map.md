---
source-hash: 47ae00a1c7b1b67ccb2c7470aa241ca87a81811deceb1221a40d3b952ca9b775
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

На карті можуть відображатися такі точки, як [Вибране](#favorites), [Об'єкти інтересу (POI)](#points-of-interest-pois), [Маркери](#markers), [Вікіпедія](#-wikipedia), [Результати пошуку](#search-results-poi), [Аудіо- та відеонотатки](#-audio--video-points-android) та [Редагування OSM](#-osm-edit-points).


## Вибране {#favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Вибране](../personal/favorites.md) — це спеціальні точки, позначені користувачами. За замовчуванням вони відображаються на карті як жовті зірочки, хоча їх можна налаштувати за допомогою будь-якого кольору, форми та значка. Вони стають видимими на карті, починаючи з рівня масштабування 6.

:::info
У версії OsmAnd для Android ви можете відображати на карті та під час пошуку лише вибрані групи вибраного. Перейдіть до *Меню → Мої місця → Вибране*, торкніться &#8942; та виберіть *Показати на карті* або ні.
:::


## Назви вибраного та POI {#favorite-and-poi-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

За замовчуванням Вибране та об'єкти інтересу (POI) відображаються без назв, щоб не захаращувати карту текстом. Ви можете увімкнути назви в меню Налаштувати карту.  


## Об'єкти інтересу (POI) {#points-of-interest-pois}

Увімкніть або вимкніть об'єкти інтересу **вибраного** типу на карті:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

[Об'єкти інтересу (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) — це конкретні точки, виділені значком на карті. Вони представляють цікаві або корисні місця та об'єкти і є частиною [Векторних карт](../map/vector-maps.md). Найбільш помітні POI відображаються на карті автоматично. Однак ви можете вибрати певний тип POI (наприклад, Ресторани), і всі вони будуть виділені на карті **помаранчевим колом** (починаючи з рівня масштабування 9). Детальну інформацію про об'єкт інтересу можна знайти в [Контекстному меню](../map/map-context-menu.md), яке з'являється при [короткому натисканні](../map/map-context-menu.md#select-an-object-single-tap) на точку.  


### Типи POI {#poi-types}

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

Ви можете вибрати один або кілька стандартних типів POI OsmAnd, або створити власний [фільтр POI](../search/search-poi.md) та вибрати його для відображення POI на карті.

**Android**. Натисніть нижню ліву кнопку, щоб перемикатися між вибором одного або кількох об'єктів інтересу.


### Стиль карти POI {#map-style-poi}

Приховати POI зі стилю карти:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png) ![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)

Кожному типу POI в OsmAnd призначено певний значок і колір. [Рівень масштабування](../map/vector-maps.md#details) та дизайн POI можуть відрізнятися в деяких [стилях карти](../map/vector-maps.md#default-map-styles).  

[Докладніше](../map/vector-maps.md#hide).


## Маркери {#markers}

Перейдіть за шляхом до доступних маркерів та їх налаштувань:

- **Android**: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*  
- **iOS**: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png) ![Map markers iOS](@site/static/img/map/map_markers_ios.png)

[Маркери карти](../personal/markers.md) — це тимчасові точки, позначені на карті у вигляді прапорців. Їх зовнішній вигляд можна налаштувати за допомогою **стрілок** (Стрілки на карті) та **індикації відстані** (Лінії напрямку).  

Докладніше про зовнішній вигляд маркерів можна прочитати в цій [статті](../personal/markers#appearance-on-the-map).


## Точки треку {#track-waypoints}

![Track on map](@site/static/img/map/track_point_on_map.png)

Точки треку (шляхові точки) є частиною файлів треків (GPX). Ці точки відображаються автоматично, якщо трек знаходиться на карті. Вони виглядають і можуть бути налаштовані подібно до [Вибраного](#favorites) — значок, назви, колір, форма. Як створити та додати шляхову точку, читайте [тут](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Докладніше](../map/tracks/index.md) про треки на карті.


## Результати пошуку (POI) {#search-results-poi}

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Результати пошуку можуть відображатися на карті як спеціальний шар POI. Під час пошуку торкніться спеціального рядка (**<Translate android="true" ids="shared_string_show_on_map"/>**), щоб відобразити POI на карті.  

Щоб вимкнути POI, натисніть **X** у верхньому правому куті.  

Докладніше про [пошук](../search/index.md).


## * Зображення на рівні вулиць {#-street-level-imagery}

Увімкніть або вимкніть зображення на рівні вулиць на карті:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*  
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png) ![Mapillary street view](@site/static/img/map/mapillary_street-view.png)  

[Зображення на рівні вулиць (Mapillary)](../plugins/mapillary.md) відображаються на карті як зелені точки. До цих точок прикріплені фотографії з видом на вулицю. Ви можете створити [фільтр](../plugins/mapillary.md#data-filtering) та вибрати фотографії, які ви хочете відобразити на карті. Щоб відкрити фотографію з видом на вулицю, потрібно торкнутися зеленої точки.  

Потрібен [плагін Mapillary](../plugins/mapillary.md).


## * Точка паркування {#-parking-point}

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

[Точка паркування](../plugins/parking.md) — це точка, позначена користувачами на карті для зберігання інформації про точне місцезнаходження транспортного засобу. Її можна розділити на зони необмеженого та обмеженого паркування.  

Потрібен [плагін Позиція паркування](../plugins/parking.md).


## * Вікіпедія {#-wikipedia}

Увімкніть або вимкніть статті Вікіпедії на карті та фільтруйте за мовою:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,download_wikipedia_maps"/>*  

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png) ![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)  

OsmAnd має спеціальні об'єкти інтересу, позначені логотипом "W" та статті Вікіпедії, прикріплені до точок. Ці точки можуть відображатися точно так само, як і будь-які інші типи POI, через Пошук або <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. Однак існує спеціальний спосіб фільтрувати статті Вікіпедії за **доступними мовами**.  

[Докладніше](../plugins/wikipedia.md) про те, як завантажити та використовувати функцію Вікіпедії в OsmAnd.


## * Аудіо / Відео точки (Android) {#-audio--video-points-android}

Увімкніть або вимкніть точки запису на карті:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

Аудіо / Відео нотатки — це точки з аудіо-, фото- та відеоданими на карті, створені користувачами.  

Потрібен [плагін Аудіо / Відео нотатки](../plugins/audio-video-notes.md).


## * Точки редагування OSM {#-osm-edit-points}

Увімкніть або вимкніть редагування OSM на карті:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

Точки редагування OSM — це POI, створені користувачами для додавання їх до [проєкту OpenStreetMap](https://www.openstreetmap.org/).  

Потрібен [плагін Редагування OSM](../plugins/osm-editing.md).


## * Нотатки OSM {#-osm-notes}

Увімкніть або вимкніть нотатки OSM на карті:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

Точки нотаток OSM — це POI, створені користувачами для повідомлення про проблеми з даними карти в [OpenStreetMap](https://www.openstreetmap.org/). Нова нотатка (не завантажена в OpenStreetMap) позначена зеленим кольором з **+**, закрита нотатка позначена зеленим кольором з "V", а відкрита нотатка позначена червоним кольором. Ви можете налаштувати рівень масштабування для відображення нотаток та вибрати показ або приховування закритих нотаток.  

Потрібен [плагін Редагування OSM](../plugins/osm-editing.md).


## Точки вздовж маршруту {#points-along-the-route}

Шляхові точки, POI, точки вибраного та аудіо/відео нотатки — все це стосується концепції збереження місць та маршрутів у форматі [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). Ви можете використовувати [ті самі теги](../map/tracks/track-context-menu.md#display-custom-gpx-tags) для їх опису та редагування.  

[Шляхові точки](#track-waypoints) — це окремі точки на карті або маршруті. Їх можна використовувати для позначення певних місць, які можуть бути важливими для навігації або запису ваших подорожей. Наприклад, ви можете створити шляхову точку на карті, щоб позначити важливе перехрестя або зміну напрямку.  

[Об'єкти інтересу (POI)](#points-of-interest-pois) — це місця, що становлять особливий інтерес для користувачів. Це можуть бути визначні пам'ятки, ресторани, готелі, заправки та інші цікаві місця, які ви можете захотіти відзначити або відвідати.  

[Точки вибраного](#favorites) — це місця, які користувачі вважають особливо важливими або цікавими та зберігають у своєму списку улюблених місць. Місця можуть включати будь-яке місце, яке ви можете захотіти знайти та повернутися до нього пізніше.

[Аудіо/відео нотатки](#-audio--video-points-android). У форматі GPX ви можете зберігати аудіо- та відеозаписи як шляхові точки. Це дозволяє пов'язувати медіафайли з певними місцями на карті або маршруті.  

Усі ці типи точок можуть бути збережені у форматі GPX, щоб надати вам інформацію про місцезнаходження та допомогти з навігацією та плануванням маршруту. Вони служать різним цілям, але загальна ідея полягає в зберіганні та передачі географічної інформації, щоб ви могли використовувати її у своїх навігаційних завданнях.


## Пов'язані статті {#related-articles}

- [Меню Налаштувати карту](../map/configure-map-menu.md)
- [Векторні карти (Стилі карти)](./vector-maps.md)
- [Растрові карти (Онлайн / Офлайн)](./raster-maps.md)

> *Цю статтю востаннє оновлено в листопаді 2024 року*