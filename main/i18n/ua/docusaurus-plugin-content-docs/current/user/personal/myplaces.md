---
source-hash: 64996ddc1052758bb9889879c497788210af5f7224546ab145dac947d8626f5f
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

**Мої місця** — це центральний вузол у застосунку OsmAnd для керування та налаштування всіх особистих даних. Ви можете використовувати цей розділ для організації [Улюблених точок](#favorites), позначених як важливі або часто відвідувані. Вкладка [Треки](#tracks) дозволяє переглядати, імпортувати, записувати та створювати файли GPX, щоб допомогти вам вести детальну історію ваших маршрутів та подорожей. Ви також можете керувати своїми [Редагуваннями OpenStreetMap](#openstreetmap-edits), що полегшує внесення змін та оновлень до мапи. Плагін та віджети [Аудіо/Відео нотатки](#audiovideo-notes) дозволяють користувачам Android створювати та зберігати мультимедійні нотатки, пов'язані з певними місцями, додаючи контекст до їхніх подорожей.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu"/> → Мої місця*  

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu"/> → Мої місця*  

![My Places ios](@site/static/img/personal/my_places_ios.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Імпорт та експорт даних***](../personal/import-export.md):  

    Усі дані, що зберігаються в меню *Мої місця*, можна переміщувати за допомогою спеціального формату `.osf` через застосунки на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями та дозволяє ділитися ними з іншими користувачами OsmAnd.  

    **Перейдіть до** розділу *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* та виберіть, чи експортувати, чи імпортувати дані. Якщо ви виберете *експорт*, вам потрібно буде розгорнути *групу Мої місця* та відзначити необхідні дані.

- [***Мапи та ресурси***](../personal/maps-resources.md):  

    Пункт *Мапи та ресурси* *Головного меню* застосунку OsmAnd надає доступ до керування даними з розділу *Мої місця*. Вкладка [*Локальні*](../personal/maps-resources.md#local) показує, скільки місця займають усі наявні дані OsmAnd на вашому пристрої, зокрема розділ *Мої місця*. Ви можете використовувати його, щоб отримати детальну інформацію про ваші дані та доступ до керування ними. Розділ може містити лише елементи, для яких були завантажені дані.  

    **Перейдіть до** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Перевірте та керуйте своїми даними.


## Улюблені {#favorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Улюблені** дозволяють вам додавати важливі або часто відвідувані місця до закладок. Ці улюблені точки організовані в папки та можуть бути налаштовані за допомогою різних кольорів, форм та іконок. Ви можете швидко перейти до будь-якого улюбленого місця через меню **Мої місця**, не шукаючи його повторно.


1. ***Кнопки дій***. *Кнопки дій* внизу екрана Мої місця дозволяють керувати списком папок з вашими улюбленими:  

    - **Імпорт** (кнопка *Додати*) — Дозволяє імпортувати файли *favorite.gpx* зі сховища вашого пристрою.

    - **Експорт** — Збережіть ваші улюблені точки як файл *favorites.gpx* для зовнішнього використання або резервного копіювання.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*лише Android*) — Ви можете додати будь-яку улюблену точку або весь список улюблених точок у папці до [списку Маркерів мапи](../personal/markers.md).

    - **Видалити** (*на iOS ця опція знаходиться в меню Редагувати*) — Видаляє улюблені точки по одній або вибрані папки улюблених та всі точки, що містяться в них.

2. ***Меню з трьома крапками*** (*Android*) та ***довге натискання*** (*iOS*). Використовуйте меню *з трьома крапками* поруч з кожною папкою або *довго натисніть* на папку, щоб керувати групами улюблених:  

    <Tabs groupId="operating-systems">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Використовуйте цю опцію, щоб змінити назву вибраної папки.

    - **<Translate android="true" ids="change_default_appearance"/>** — Налаштуйте, як улюблені точки в папці відображаються на мапі, змінюючи їхні іконки, кольори або мітки.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** або **Приховати на мапі** — Перемикайте цю опцію, щоб відображати або приховувати улюблені точки з папки на мапі.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** або **Видалити з маркерів мапи** (*лише Android*) — Додайте всі улюблені точки з папки до *списку Маркерів мапи* або видаліть їх за потреби для зручного посилання.

    - **<Translate android="true" ids="shared_string_share"/>** — Поділіться улюбленими точками в папці, експортувавши їх як файл *Favorites.gpx*, що полегшує передачу або резервне копіювання ваших даних.

    - **<Translate android="true" ids="shared_string_delete"/>** — Назавжди видаліть вибрану папку улюблених та всі точки в ній.

Для більш детальних інструкцій зверніться до статті [Улюблені](../personal/favorites.md).


## Треки {#tracks}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> вкладка*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Треки** пропонують потужні інструменти для запису, створення та керування маршрутами в OsmAnd. Їх можна використовувати для [навігації](../navigation/setup/gpx-navigation.md), [запису поїздок](../plugins/trip-recording.md) або [інтеграції](../personal/tracks/manage-tracks.md#import) зовнішніх файлів GPX.

- **Вкладка Треки** — Усі треки, які коли-небудь були записані, створені або імпортовані, автоматично відображаються в папці *Мої місця* на вкладці *Треки*. Вони організовані за папками або відображаються у списку під ними.

- **Створити трек** — Почніть запис за допомогою **Вкладки Треки** або [плагіна Запис поїздки](../plugins/trip-recording.md).

- **Перегляд та редагування** — Отримайте доступ до списку треків через *Мої місця* та керуйте ними за допомогою *меню з трьома крапками* для [папок](../personal/tracks/manage-tracks.md#track-folder) або меню [одного треку](../personal/tracks/manage-tracks.md#single-track-menu).

- **Керування** — Використовуйте інструменти [Фільтр](../personal/tracks/smart-folder.md#filter) та [Розумна папка](../personal/tracks/smart-folder.md#smart-folder) для організації треків за певними параметрами.

- **Вигляд та аналіз** — [Налаштуйте](../map/tracks/appearance.md) візуальний стиль треків та [аналізуйте](../map/tracks/index.md#analyze-track-on-map) їх за допомогою інструмента OsmAnd [Планувати маршрут](../plan-route/create-route.md).

Для вичерпних вказівок дивіться статтю [Керування треками](../personal/tracks/manage-tracks.md).


## Редагування OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Функція **Редагування OpenStreetMap** в OsmAnd дозволяє вам робити внесок у світову картографічну спільноту, додаючи, змінюючи або коментуючи дані мапи.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* на екрані Мої місця, щоб керувати списком ваших нотаток:  

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Завантажити файли в OSM** — Надішліть свої нотатки та дані до OpenStreetMap, щоб зробити внесок у спільноту.

    - **Експорт** (*лише Android*) — Збережіть свої нотатки та POI як файли для зовнішнього використання або резервного копіювання, з опціями експорту як нотатки OSM, POI або всі дані разом.

    - **Видалити** — Назавжди видаліть вибрані елементи зі свого списку.


2. ***Меню з трьома крапками***. Ви можете керувати певними POI або нотатками за допомогою *меню з трьома крапками* поруч з кожною нотаткою:  

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Завантажити редагування в OSM** — Надішліть свої зміни або редагування до OpenStreetMap, щоб їх побачили інші.

    - **Показати на мапі** — Відобразіть конкретне місце розташування POI або нотатки на мапі.

    - **Змінити зміну/нотатку OSM** — Внесіть подальші зміни до POI або нотатки, які вже були додані до OpenStreetMap.

    - **Видалити** — Видаліть вибраний POI або нотатку зі свого списку.

Зверніться до [плагіна Редагування OSM](../plugins/osm-editing.md) для покрокових інструкцій.


## Аудіо/Відео нотатки {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

**Плагін Аудіо/Відео нотатки** дозволяє створювати мультимедійні нотатки, пов'язані з певними місцями на мапі. Ці нотатки зберігаються в **Моїх місцях** на вкладці **А/В нотатки**.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* внизу екрана Мої місця, щоб керувати списком ваших нотаток:  

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Відкриває вибір методів сортування, *За типом* або *За датою*, і при виборі сортує список відповідно.

    - **<Translate android="true" ids="shared_string_share"/>** — Відображає контрольний список усіх нотаток, включаючи ті, що додані до файлів GPX як маршрутні точки. Спочатку відзначаються необхідні нотатки, потім іконка *Поділитися* у верхньому правому куті екрана пропонує доступні варіанти спільного доступу, і, нарешті, ці нотатки стають доступними відповідно до вибраного варіанта.

    - **Поділитися з маршрутними точками GPX** — Ви можете поділитися нотатками, вибраними як маршрутні точки в меню *Мої місця*, додавши до них [дані GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) за допомогою кнопки **Поділитися** внизу екрана вкладки *А/В нотатки*.

    - **<Translate android="true" ids="shared_string_delete"/>** — Відображає контрольний список лише аудіо, фото та відео нотаток. Спочатку відзначте непотрібні нотатки, потім натисніть іконку *Видалити* у верхньому правому куті екрана, після підтвердження вибрані нотатки будуть видалені назавжди.


2. ***Меню з трьома крапками***. Ви можете керувати певними аудіо, відео або фото нотатками за допомогою *меню з трьома крапками* поруч з кожною нотаткою:  

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Переглядає або прослуховує вибрану аудіо, відео або фото нотатку безпосередньо.

    - **<Translate android="true" ids="shared_string_share"/>** — Ділиться нотаткою з іншими через різні застосунки або платформи.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Відображає пов'язане місце розташування та [Контекстне меню](../plugins/audio-video-notes#actions-in-map-context-menu) нотатки на мапі.

    - **<Translate android="true" ids="shared_string_rename"/>** — Змінює назву нотатки на більш описову або релевантну.

    - **<Translate android="true" ids="shared_string_delete"/>** — Вибрані нотатки назавжди видаляються з вашої колекції.

Для отримання додаткової інформації відвідайте сторінку [плагіна Аудіо/Відео нотатки](../plugins/audio-video-notes.md).


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
- [Схеми кольорової палітри](../personal/color-palette-schemes.md)

> *Цю статтю востаннє оновлено в березні 2025 року*