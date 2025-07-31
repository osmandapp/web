---
source-hash: 566a34a786c324ed799dd4550956785a23a8faec4a926d7a4a840c0d7ef44518
sidebar_position: 6
title: Мої Місця
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

**Мої Місця** – це центральний розділ у застосунку OsmAnd для керування та налаштування всіх особистих даних. Цей розділ можна використовувати для організації [Обраних точок](#favorites), позначених як важливі або часто відвідувані. Вкладка [Треки](#tracks) дозволяє переглядати, імпортувати, записувати та створювати файли GPX, щоб вести детальну історію ваших маршрутів та подорожей. Ви також можете керувати своїми [Правками OpenStreetMap](#openstreetmap-edits), що полегшує внесення змін та оновлень на карту. Плагін та віджети [Аудіо/Відео нотатки](#audiovideo-notes) дозволяють користувачам Android створювати та зберігати мультимедійні нотатки, пов'язані з певними місцями, додаючи контекст до їхніх подорожей.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu"/> → Мої Місця*

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate android="true" ids="shared_string_menu"/> → Мої Місця*

![My Places ios](@site/static/img/personal/my_places_ios.png) ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Імпорт та експорт даних***](../personal/import-export.md):

Усі дані, що зберігаються в меню *Мої Місця*, можуть бути переміщені за допомогою спеціального формату `.osf` через застосунки на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями та дозволяє ділитися ними з іншими користувачами OsmAnd.

**Перейдіть до** розділу *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* та виберіть, чи експортувати, чи імпортувати дані. Якщо ви виберете *експорт*, вам потрібно буде розгорнути *групу Мої Місця* та відмітити необхідні дані.

- [***Карти та Ресурси***](../personal/maps-resources.md):

Пункт *Карти та Ресурси* *Головного меню* застосунку OsmAnd надає доступ до керування даними з розділу *Мої Місця*. Вкладка [*Локальні*](../personal/maps-resources.md#local) показує, скільки місця займають усі існуючі дані OsmAnd на вашому пристрої, зокрема розділ *Мої Місця*. Ви можете використовувати його, щоб отримати детальну інформацію про ваші дані та доступ до керування ними. Розділ може містити лише елементи, для яких дані були завантажені.

**Перейдіть до** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Перевіряйте та керуйте своїми даними.


## Обрані {#favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Обрані** дозволяють вам додавати до закладок важливі або часто відвідувані місця. Ці обрані точки організовані в папки та можуть бути налаштовані з різними кольорами, формами та іконками. Ви можете швидко перейти до будь-якого обраного місця через меню **Мої Місця**, не шукаючи його повторно.


1. ***Кнопки дій***. *Кнопки дій* внизу екрана Мої Місця дозволяють керувати списком папок з вашими обраними:

- **Імпорт** (кнопка *Додати*) — Дозволяє імпортувати файли *favorite.gpx* зі сховища вашого пристрою.

- **Експорт** — Збережіть ваші обрані точки як файл *favorites.gpx* для зовнішнього використання або резервного копіювання.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Тільки Android*) — Ви можете додати будь-яку обрану точку або весь список обраних точок у папці до [Списку маркерів карти](../personal/markers.md).

- **Видалити** (*на iOS ця опція знаходиться в меню Редагувати*) — Видаляє обрані точки по одній або вибрані папки обраних та всі точки, що містяться в них.

2. ***Меню з трьома крапками*** (*Android*) та ***довге натискання*** (*iOS*). Використовуйте *меню з трьома крапками* поруч з кожною папкою або *довге натискання* на папку, щоб керувати групами обраних:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_rename"/>** — Використовуйте цю опцію, щоб змінити назву вибраної папки.

- **<Translate android="true" ids="change_default_appearance"/>** — Налаштуйте, як обрані точки в папці відображаються на карті, змінюючи їхні іконки, кольори або мітки.

- **<Translate android="true" ids="shared_string_show_on_map"/>** або **Приховати на карті** — Перемикайте цю опцію, щоб відображати або приховувати обрані точки з папки на карті.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** або **Видалити з маркерів карти** (*Тільки Android*) — Додайте всі обрані точки з папки до *Списку маркерів карти* або видаліть їх за потреби для легкого доступу.

- **<Translate android="true" ids="shared_string_share"/>** — Поділіться обраними точками в папці, експортувавши їх як файл *Favorites.gpx*, що полегшує передачу або резервне копіювання ваших даних.

- **<Translate android="true" ids="shared_string_delete"/>** — Безповоротно видаліть вибрану папку обраних та всі точки в ній.

Для отримання детальніших інструкцій зверніться до статті [Обрані](../personal/favorites.md).


## Треки {#tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> вкладка*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Треки** пропонують потужні інструменти для запису, створення та керування маршрутами в OsmAnd. Їх можна використовувати для [навігації](../navigation/setup/gpx-navigation.md), [запису поїздок](../plugins/trip-recording.md) або [інтеграції](../personal/tracks/manage-tracks.md#import) зовнішніх файлів GPX.

- **Вкладка Треки** — Усі коли-небудь записані, створені або імпортовані треки автоматично відображаються в папці *Мої Місця* на вкладці *Треки*. Вони організовані за папками або відображаються у списку під ними.

- **Створити трек** — Почніть запис за допомогою **Вкладки Треки** або [плагіна Запис поїздки](../plugins/trip-recording.md).

- **Перегляд та Редагування** — Отримайте доступ до списку треків через *Мої Місця* та керуйте ними за допомогою *меню з трьома крапками* для [папок](../personal/tracks/manage-tracks.md#track-folder) або меню [одного треку](../personal/tracks/manage-tracks.md#single-track-menu).

- **Керування** — Використовуйте інструменти [Фільтр](../personal/tracks/smart-folder.md#filter) та [Розумна папка](../personal/tracks/smart-folder.md#smart-folder) для організації треків за певними параметрами.

- **Вигляд та Аналіз** — [Налаштуйте](../map/tracks/appearance.md) візуальний стиль треків та [аналізуйте](../map/tracks/index.md#analyze-track-on-map) їх за допомогою інструменту OsmAnd [Планування маршруту](../plan-route/create-route.md).

Для вичерпних вказівок дивіться статтю [Керування треками](../personal/tracks/manage-tracks.md).


## Правки OpenStreetMap {#openstreetmap-edits}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

Функція **Правки OpenStreetMap** в OsmAnd дозволяє вам робити внесок у глобальну картографічну спільноту, додаючи, змінюючи або коментуючи дані карти.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* на екрані Мої Місця, щоб керувати списком ваших нотаток:

![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

- **Завантажити файли до OSM** — Надсилайте свої нотатки та дані до OpenStreetMap, щоб зробити внесок у спільноту.

- **Експорт** (*Тільки Android*) — Зберігайте свої нотатки та POI як файли для зовнішнього використання або резервного копіювання, з опціями експорту як нотатки OSM, POI або всі дані разом.

- **Видалити** — Безповоротно видаляйте вибрані елементи зі свого списку.


2. ***Меню з трьома крапками***. Ви можете керувати певними POI або нотатками за допомогою *меню з трьома крапками* поруч з кожною нотаткою:

![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

- **Завантажити правку до OSM** — Надішліть свої зміни або правки до OpenStreetMap, щоб їх побачили інші.

- **Показати на карті** — Відобразіть конкретне місце розташування POI або нотатки на карті.

- **Змінити зміну/нотатку OSM** — Внесіть подальші правки до POI або нотатки, які вже були додані до OpenStreetMap.

- **Видалити** — Видаліть вибраний POI або нотатку зі свого списку.

Зверніться до [плагіна Редагування OSM](../plugins/osm-editing.md) для покрокових інструкцій.


## Аудіо/Відео нотатки {#audiovideo-notes}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)

**Плагін Аудіо/Відео нотатки** дозволяє створювати мультимедійні нотатки, пов'язані з певними місцями на карті. Ці нотатки зберігаються в **Моїх Місцях** на вкладці **А/В Нотатки**.

1. ***Кнопки дій***. Ви можете використовувати *кнопки дій* внизу екрана Мої Місця, щоб керувати списком ваших нотаток:

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

- **<Translate android="true" ids="shared_string_sort"/>** — Відкриває вибір методів сортування, *За типом* або *За датою*, і після вибору сортує список відповідно.

- **<Translate android="true" ids="shared_string_share"/>** — Відображає контрольний список усіх нотаток, включаючи ті, що додані до файлів GPX як шляхові точки. Спочатку перевіряються необхідні нотатки, потім значок *Поділитися* у верхньому правому куті екрана пропонує доступні варіанти спільного доступу, і, нарешті, ці нотатки стають доступними відповідно до вибраного варіанта.

- **Поділитися з шляховими точками GPX** — Ви можете поділитися нотатками, вибраними як шляхові точки в меню *Мої Місця*, додавши до них [дані GPX](../plugins/audio-video-notes.md#share-with-gpx-waypoints) за допомогою кнопки **Поділитися** внизу екрана вкладки *А/В нотатки*.

- **<Translate android="true" ids="shared_string_delete"/>** — Відображає контрольний список лише аудіо, фото та відео нотаток. Спочатку перевірте непотрібні нотатки, потім торкніться значка *Видалити* у верхньому правому куті екрана, після підтвердження вибрані нотатки будуть видалені безповоротно.


2. ***Меню з трьома крапками***. Ви можете керувати певними аудіо, відео або фото нотатками за допомогою *меню з трьома крапками* поруч з кожною нотаткою:

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Переглядає або прослуховує вибрану аудіо, відео або фото нотатку безпосередньо.

- **<Translate android="true" ids="shared_string_share"/>** — Ділиться нотаткою з іншими через різні застосунки або платформи.

- **<Translate android="true" ids="shared_string_show_on_map"/>** — Відображає пов'язане місце розташування та [Контекстне меню](../plugins/audio-video-notes#actions-in-map-context-menu) нотатки на карті.

- **<Translate android="true" ids="shared_string_rename"/>** — Змінює назву нотатки на більш описову або релевантну.

- **<Translate android="true" ids="shared_string_delete"/>** — Вибрані нотатки безповоротно видаляються з вашої колекції.

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
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Березень 2025*