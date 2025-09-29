---
source-hash: 3969b9e7c1d8cd95ffd81346c80a2ec879cb86431f1db86cbdc923f556504f94
sidebar_position: 6
title:  Мої місця
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


<InfoIncompleteArticle/>

## Огляд {#overview}

**Мої місця** — це центральний вузол у застосунку OsmAnd для керування та налаштування всіх особистих даних. Ви можете використовувати цей розділ для впорядкування [Улюблених точок](#favorites), позначених як важливі або часто відвідувані. Вкладка [Треки](#tracks) дозволяє переглядати, імпортувати, записувати та створювати файли GPX, що допомагає вести детальну історію ваших маршрутів і подорожей. Ви також можете керувати своїми [редагуваннями OpenStreetMap](#openstreetmap-edits), що полегшує внесення змін до мапи та її оновлення. Плагін [Аудіо/відео нотатки](#audiovideo-notes) та віджети дозволяють користувачам Android створювати та зберігати мультимедійні нотатки, пов'язані з певними місцями, додаючи контекст до своїх подорожей.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu"/> → Мої місця*  

![Мої місця Android](@site/static/img/personal/my_places_android.png) ![Меню Мої місця Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu"/> → Мої місця*  

![Мої місця iOS](@site/static/img/personal/my_places_ios.png)  ![Меню Мої місця iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Імпорт та експорт даних***](../personal/import-export.md):  

    Усі дані, що зберігаються в меню *Мої місця*, можна переміщувати за допомогою спеціального формату `.osf` через програми на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями та дозволяє ділитися ними з іншими користувачами OsmAnd.  

    **Перейдіть до** розділу *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* та виберіть, експортувати чи імпортувати дані. Якщо ви виберете *експорт*, вам потрібно буде розгорнути групу *Мої місця* та позначити потрібні дані.

- [***Карти та ресурси***](../personal/maps-resources.md):  

    Пункт *Головного меню* застосунку OsmAnd *Карти та ресурси* надає доступ до керування даними з розділу *Мої місця*. Вкладка [*Локальні*](../personal/maps-resources.md#local-menu) показує, скільки місця займають усі наявні дані OsmAnd на вашому пристрої, зокрема розділ *Мої місця*. Ви можете використовувати його для отримання детальної інформації про ваші дані та доступу до керування ними. Розділ може містити лише ті елементи, для яких були завантажені дані.  

    **Перейдіть до** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Перевірте та керуйте своїми даними.


## Улюблені {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню Улюблені Android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню Улюблені iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Улюблені** дозволяють додавати в закладки важливі або часто відвідувані місця. Ці улюблені точки впорядковані в теках і можуть бути налаштовані за допомогою різних кольорів, форм та іконок. Ви можете швидко перейти до будь-якого улюбленого місця через меню **Мої місця** без необхідності шукати його повторно.


1. ***Кнопки дій***. *Кнопки дій* внизу екрана "Мої місця" дозволяють керувати списком тек з вашими улюбленими місцями:  

    - **Імпорт** (кнопка *Додати*) — дозволяє імпортувати файли *favorite.gpx* зі сховища вашого пристрою.

    - **Експорт** — збережіть ваші улюблені точки як файл *favorites.gpx* для зовнішнього використання або резервного копіювання.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*лише для Android*) — ви можете додати будь-яку улюблену точку або весь список улюблених точок у теці до [списку маркерів на мапі](../personal/markers.md).

    - **Видалити** (*на iOS ця опція знаходиться в меню "Редагувати"*) — видаляє улюблені точки по одній або вибрані теки з улюбленими та всі точки, що в них містяться.

2. ***Меню з трьома крапками*** (*Android*) та ***довге натискання*** (*iOS*). Використовуйте меню з *трьома крапками* біля кожної теки або *довге натискання* на теку для керування групами улюблених. Детальніше дивіться у розділі [Дії з групами улюблених](../personal/favorites.md#favorite-group-actions).  


Щоб отримати детальніші інструкції, зверніться до статті [Улюблені](../personal/favorites.md).


## Треки {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> вкладка*

![Мої місця з треками в Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![Мої місця з треками в iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Треки** пропонують потужні інструменти для запису, створення та керування маршрутами в OsmAnd. Їх можна використовувати для [навігації](../navigation/setup/gpx-navigation.md), [запису поїздок](../plugins/trip-recording.md) або [інтеграції](../personal/tracks/manage-tracks.md#import) зовнішніх файлів GPX.

- **Вкладка "Треки"** — усі треки, які коли-небудь були записані, створені або імпортовані, автоматично відображаються в теці *Мої місця* на вкладці *Треки*. Вони впорядковані за теками або відображаються у списку під ними.

- **Створити трек** — почніть запис за допомогою **вкладки "Треки"** або [плагіна "Запис поїздки"](../plugins/trip-recording.md).

- **Перегляд та редагування** — отримайте доступ до списку треків через *Мої місця* та керуйте ними за допомогою *меню з трьома крапками* для [тек](../personal/tracks/manage-tracks.md#track-folder) або меню [окремого треку](../personal/tracks/manage-tracks.md#search).

- **Керування** — використовуйте інструменти [Фільтр](../personal/tracks/smart-folder.md#available-filters) та [Розумна тека](../personal/tracks/smart-folder.md#smart-folder) для впорядкування треків за певними параметрами.

- **Вигляд та аналіз** — [налаштуйте](../map/tracks/appearance.md) візуальний стиль треків та [аналізуйте](../map/tracks/index.md#analyze-track-on-map) їх за допомогою інструмента OsmAnd [Планування маршруту](../plan-route/create-route.md).

Для вичерпних вказівок, дивіться статтю [Керування треками](../personal/tracks/manage-tracks.md).


## Редагування OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Поділитися](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Поділитися](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Функція **Редагування OpenStreetMap** в OsmAnd дозволяє вам робити внесок у світову спільноту картографів, додаючи, змінюючи або коментуючи дані мапи.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* на екрані "Мої місця" для керування списком нотаток:  

    ![Поділитися](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Завантажити файли в OSM** — надсилайте свої нотатки та дані в OpenStreetMap, щоб зробити внесок у спільноту.

    - **Експорт** (*лише для Android*) — зберігайте свої нотатки та POI як файли для зовнішнього використання або резервного копіювання, з можливістю експорту як нотаток OSM, POI або всіх даних разом.

    - **Видалити** — назавжди видаліть вибрані елементи зі списку.


2. ***Меню з трьома крапками***. Ви можете керувати певними POI або нотатками за допомогою *меню з трьома крапками* біля кожної нотатки:  

    ![Меню з трьома крапками](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Завантажити редагування в OSM** — надішліть свої зміни або редагування в OpenStreetMap, щоб їх побачили інші.

    - **Показати на мапі** — відобразіть конкретне місцезнаходження POI або нотатки на мапі.

    - **Змінити зміну/нотатку OSM** — внесіть подальші зміни до POI або нотатки, які вже були додані до OpenStreetMap.

    - **Видалити** — видаліть вибраний POI або нотатку зі списку.

Покрокові інструкції дивіться у статті про [плагін "Редагування OSM"](../plugins/osm-editing.md).


## Аудіо/відео нотатки {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Плагін аудіо/відео нотаток Меню Мої місця Три дії](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

**Плагін "Аудіо/відео нотатки"** дозволяє створювати мультимедійні нотатки, пов'язані з певними місцями на мапі. Ці нотатки зберігаються в **Моїх місцях** на вкладці **А/В нотатки**.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* внизу екрана "Мої місця" для керування списком нотаток:  

    ![Поділитися](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — відкриває вибір методів сортування, *За типом* або *За датою*, і при виборі сортує список відповідно.

    - **<Translate android="true" ids="shared_string_share"/>** — відображає список усіх нотаток, включаючи ті, що додані до файлів GPX як шляхові точки. Спочатку позначаються потрібні нотатки, потім іконка *Поділитися* у верхньому правому куті екрана пропонує доступні варіанти поширення, і, нарешті, ці нотатки стають доступними відповідно до вибраного варіанту.

    - **Поділитися з шляховими точками GPX** — ви можете поділитися нотатками, вибраними як шляхові точки в меню *Мої місця*, додавши до них [дані GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) за допомогою кнопки **Поділитися** внизу екрана вкладки *А/В нотатки*.

    - **<Translate android="true" ids="shared_string_delete"/>** — відображає список лише аудіо-, фото- та відеонотаток. Спочатку позначте непотрібні нотатки, потім торкніться іконки *Видалити* у верхньому правому куті екрана, після підтвердження вибрані нотатки будуть видалені назавжди.


2. ***Меню з трьома крапками***. Ви можете керувати певними аудіо-, відео- або фотонотатками за допомогою *меню з трьома крапками* біля кожної нотатки:  

    ![Меню з трьома крапками](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — переглядає або прослуховує вибрану аудіо-, відео- або фотонотатку безпосередньо.

    - **<Translate android="true" ids="shared_string_share"/>** — ділиться нотаткою з іншими через різні програми або платформи.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — відображає відповідне місцезнаходження та [контекстне меню](../plugins/audio-video-notes#show-on-the-map) нотатки на мапі.

    - **<Translate android="true" ids="shared_string_rename"/>** — змініть назву нотатки на більш описову або релевантну.

    - **<Translate android="true" ids="shared_string_delete"/>** — вибрані нотатки назавжди видаляються з вашої колекції.

Для отримання додаткової інформації відвідайте сторінку [плагіна "Аудіо/відео нотатки"](../plugins/audio-video-notes.md).


<!--
### Share with GPX Waypoints {#share-with-gpx-waypoints}

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note {#manage-single-note}

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Пов'язані статті {#related-articles}

- [Керування треками](../personal/tracks/manage-tracks.md#import--export-track)
- [Історія пошуку](../search/search-history.md#export-and-share)
- [Схеми палітри кольорів](../personal/color-palette-schemes.md)