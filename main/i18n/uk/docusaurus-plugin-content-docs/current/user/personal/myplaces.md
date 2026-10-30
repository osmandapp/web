---
source-hash: d5de9c3084442f355b9b6536f2e73e330ece35ee360363e944195eaf5ddfe9fb
sidebar_position: 6
title:  My Places
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Огляд {#overview}

**Мої місця** — це центральний вузол у застосунку OsmAnd для керування та налаштування всіх особистих даних. Ви можете використовувати цей розділ для впорядкування [Улюблених точок](#favorites), позначених як важливі або часто відвідувані. Вкладка [Треки](#tracks) дозволяє переглядати, імпортувати, записувати та створювати файли GPX, що допомагає вести детальну історію ваших маршрутів і подорожей. Ви також можете керувати своїми [редагуваннями OpenStreetMap](#openstreetmap-edits), що полегшує внесення змін до мапи та її оновлення. Плагін [Аудіо / Відео нотатки](#audiovideo-notes) та віджети дозволяють користувачам Android створювати та зберігати мультимедійні нотатки, пов'язані з певними місцями, додаючи контекст до своїх подорожей. На iOS «Мої місця» також надають доступ до збережених [Дорожніх путівників](#travel-guides), що дозволяє впорядковувати та швидко відкривати збережений туристичний контент.

## Меню Мої місця {#my-places-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places android](@site/static/img/personal/my_places_android_new.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places"/>*  

![My Places ios](@site/static/img/personal/my_places_ios_2.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.webp)

</TabItem>

</Tabs>

Мої місця впорядковано за категоріями. Виберіть вкладку, щоб керувати відповідними даними.

**Примітка:** Усі дані, що зберігаються в меню *Мої місця*, можна переміщувати за допомогою спеціального формату `.osf` через програми на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями та дозволяє ділитися ними з іншими користувачами OsmAnd. 

### Улюблені {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,favorites_item"/>*

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.webp)

</TabItem>

</Tabs>

**Улюблені** дозволяють додавати в закладки важливі або часто відвідувані місця. Ці улюблені точки впорядковані в теках і можуть бути налаштовані за допомогою різних кольорів, форм та іконок. Ви можете швидко перейти до будь-якого улюбленого місця через меню **Мої місця** без необхідності шукати його повторно.

Щоб отримати повні інструкції, зверніться до статті [Улюблені](../personal/favorites.md).

### Треки {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.webp)

</TabItem>

</Tabs>

**Треки** пропонують потужні інструменти для запису, створення та керування маршрутами в OsmAnd. Їх можна використовувати для [навігації](../navigation/setup/gpx-navigation.md), [запису поїздок](../plugins/trip-recording.md) або [інтеграції](../personal/tracks/manage-tracks.md#import) зовнішніх файлів GPX.

Щоб отримати вичерпні вказівки, дивіться статтю [Керування треками](../personal/tracks/manage-tracks.md).

### Редагування OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm_ios.webp)

</TabItem>

</Tabs>

Функція **Редагування OpenStreetMap** в OsmAnd дозволяє вам робити внесок у світову спільноту картографів, додаючи, змінюючи або коментуючи дані мапи.

Покрокові інструкції дивіться у статті про [плагін "Редагування OSM"](../plugins/osm-editing.md).

### Аудіо/Відео нотатки {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

**Плагін "Аудіо/Відео нотатки"** дозволяє створювати мультимедійні нотатки, пов'язані з певними місцями на мапі. Ці нотатки зберігаються в **Моїх місцях** на вкладці **А/В нотатки**.

Для отримання додаткової інформації відвідайте сторінку [плагіна "Аудіо/Відео нотатки"](../plugins/audio-video-notes.md).

### Дорожні путівники (iOS) {#travel-guides}

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_travel_guides"/>*

![Travel Guides iOS](@site/static/img/plan-route/travel_guides_ios.webp)

Розділ **Подорожі** містить збережені дорожні путівники та статті, збережені для офлайн-доступу. Ви можете швидко відкривати, впорядковувати та керувати збереженим туристичним контентом у «Моїх місцях». Розділ «Подорожі» відображається лише тоді, коли збережено більше одного путівника.

Для детальної інформації зверніться до статті [Дорожні путівники](../plan-route/travel-guides.md).

## Пов'язані статті {#related-articles}

- [Керування треками](../personal/tracks/manage-tracks.md#import--export-track)
- [Улюблені](../personal/favorites.md)
- [Редагування OpenStreetMap](../plugins/osm-editing.md)
- [Аудіо/Відео нотатки](../plugins/audio-video-notes.md)
- [Дорожні путівники](../plan-route/travel-guides.md)
- [Історія пошуку](../search/search-history.md#export-and-share)
- [Схеми палітри кольорів](../personal/color-palette-schemes.md)