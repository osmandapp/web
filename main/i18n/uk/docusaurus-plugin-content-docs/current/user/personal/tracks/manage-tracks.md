---
source-hash: 1495578d931a81ec6ea77f837e0a99432aef51b47c2755e42ab50d4ce0a36da2
sidebar_position: 2
title:  Керування треками
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Усі треки в OsmAnd зберігаються на вкладці *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd обробляє файл треку у [форматі GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), але [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) та [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) можна імпортувати та конвертувати в GPX. Докладніше про різні типи треків читайте у статті [Треки на карті](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manage track Overview Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage track Overview iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Створити трек {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Ви можете додавати треки в OsmAnd такими способами:

1. **[Імпортувати](./manage-tracks.md#import--export-track)** трек із зовнішнього джерела.
2. Створити новий трек у програмі за допомогою інструменту **[Планування маршруту](../../plan-route/create-route.md)**.
3. Записати трек у програмі за допомогою плагіна **[Запис поїздки](../../plugins/trip-recording.md)**.
4. Ввести кілька точок за координатами та зберегти їх як трек за допомогою інструменту **[Введення координат](../../plan-route/coordinate-input.md)**.
5. Ви також можете додати **Шляхові точки** до нового треку за допомогою **[Контекстного меню](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint)**.


## Керування треками {#manage-tracks}

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

Усі коли-небудь записані, створені або імпортовані треки автоматично відображаються в папці [Мої місця](../../personal/myplaces.md) на вкладці *Треки*. Вони організовані за папками або відображаються у списку під ними.


### Меню треку {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Кожен трек, як і папки, має меню, що дозволяє ефективно керувати треками. Ось як отримати до нього доступ:

- *Android* - торкніться *меню з трьома крапками* у полі треку.
- *iOS* - довго торкніться потрібного треку у списку.

Меню надає такі дії:

- **Показати/Приховати на карті** — Відображає або приховує вибрані треки на карті, візуально представляючи їхнє розташування.

- [Відкрити](../../map/tracks/index.md#configure-map) (*iOS*) — Цей параметр доступний у меню Налаштувати карту. Розташований у *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, він дозволяє отримати доступ до [контекстного меню вибраного треку](../../map/tracks/track-context-menu.md) при натисканні.

- **Вигляд** (*iOS*) — Налаштуйте [вигляд треків](../../map/tracks/appearance.md) відповідно до ваших уподобань.

- **Навігація** (*iOS*) — Запускає [навігацію](../../navigation/setup/gpx-navigation.md) по вибраному треку.

- **Аналізувати на карті** (*Android*) / **Аналізувати** (*iOS*) — Відкриває інструмент [Аналізувати на карті](../../navigation/setup/route-details.md#analyze-on-map) у розділі Деталі маршруту для подальшого аналізу.

- **Поділитися** — Дозволяє ділитися вибраним треком з іншими.

- **Завантажити зміни в OSM** (*iOS*) — [Завантажте зміни](../../plugins/osm-editing.md#gps-track), які ви внесли до треку, безпосередньо в *OpenStreetMap*.

- **Редагувати** (*iOS*) — Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md#modify-gpx-track) для зміни треків.

- **Дублювати** (*iOS*) — Створює копію вибраного треку.

- **Перейменувати** — Змініть назву вибраного треку для кращої організації.

- **Перемістити** — Дозволяє перемістити вибраний трек до іншої папки.

- **Експорт** (*Android*) — Перейдіть до *Меню → Налаштування → Дії*, щоб експортувати всі треки з папки.

- **Видалити** — Остаточно видалити вибраний трек, який більше не потрібен.


### Пошук {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks seach function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks seach function iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Торкніться кнопки &#x1F50D; у верхній частині екрана пристрою, щоб відкрити меню сортування списку треків.  

Доступно:

- Пошук за назвою треку.
- [Сортувати за](#sort-by) для кращого пошуку, якщо ви не пам'ятаєте назву.
- [Фільтр](./smart-folder.md#search-filter) (*лише Android*), якщо вам потрібні конкретні характеристики треку.


### Режим вибору {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Пункт меню **Вибрати** надає параметри для керування папками та треками. Ця функція дозволяє вибрати кілька треків або папок треків. Ви також можете вибрати всі треки та папки, торкнувшись спеціальної кнопки **Вибрати все**.

Після того, як ви зробили свій вибір, надаються такі кроки:  

- **Показати на карті** — За допомогою цієї функції ви можете відобразити вибрані треки на карті, щоб краще зрозуміти їхнє розташування та взаємозв'язок.

- **Поділитися** (*Android*) / **Експорт** (*iOS*) — Якщо ви хочете поділитися вибраними даними з іншими користувачами або зберегти їх у хмарному сервісі, функція *Поділитися/Експорт* дозволяє надсилати треки та папки за допомогою різних методів обміну.

- **Завантажити в OpenStreetMap** — Ви можете надіслати вибрані треки в OpenStreetMap, сприяючи розвитку та покращенню даних.

- **Перемістити** — Ви можете організувати свої дані, перемістивши вибрані треки та папки до інших папок.

- [Змінити активність](../../map/tracks/track-context-menu.md#track-information-activity) — Ця дія дозволяє змінити тип активності, наприклад, на *Автомобіль*, *Пригодницький мотоспорт*, *Похід* або інші, для вибраного треку.

- [Змінити вигляд](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Ця опція дозволяє налаштувати вигляд вибраних треків, зробивши їх більш помітними та впізнаваними на карті.

- **Видалити** — Якщо вибрані треки або папки більше не потрібні, функція Видалити дозволяє видалити їх, при цьому програма надає параметри підтвердження, щоб уникнути випадкового видалення.


### Сортувати за {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd пропонує простий спосіб сортування ваших треків, допомагаючи вам керувати великою колекцією або швидко знаходити конкретні функції. Щоб отримати доступ до меню сортування, торкніться **Сортувати за** у верхній частині списку треків.

***Параметри сортування:***

- **Найближчі** — Показує треки, найближчі до вашого поточного місцезнаходження.

- **Останні зміни** — Відображає треки, відсортовані за датою їхньої останньої зміни.

- **Назва: А - Я** — Розташовує треки за алфавітом від А до Я.

- **Назва: Я - А** — Розташовує треки за алфавітом від Я до А.

- **Спочатку найновіша дата** — Перераховує треки за датою створення, з найновішими зверху.

- **Спочатку найстаріша дата** — Перераховує треки за датою створення, з найстарішими зверху.

- **Спочатку найдовша відстань** — Відображає треки, відсортовані за довжиною, з найдовшими зверху.

- **Спочатку найкоротша відстань** — Відображає треки, відсортовані за довжиною, з найкоротшими зверху.

- **Спочатку найдовша тривалість** — Сортує треки за тривалістю, розміщуючи найдовші зверху.

- **Спочатку найкоротша тривалість** — Сортує треки за тривалістю, розміщуючи найкоротші зверху.

#### Сортування підпапок {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Якщо ви хочете відсортувати [підпапки](#folder-actions), перейдіть до меню з трьома крапками у вибраній папці та виберіть потрібні [параметри](#sort-by).  

Вибраний параметр сортування застосовується не лише до поточної підпапки, але й до всіх вкладених папок та треків на всіх рівнях. Це забезпечує послідовну структуру ваших збережених даних.


## Папка треків {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Меню папки треків дозволяє переглядати, перейменовувати, експортувати та керувати папками.

Як відкрити меню папки:

- *Android* - торкніться *меню з трьома крапками* у полі папки.
- *iOS* - довго торкніться поля папки.

***Дії з папкою:***

- **Назва** — Відображає назву папки, дату створення та кількість треків, які вона містить.

- **Показати всі треки на карті** (*лише Android*) — Відображає всі треки в папці на карті —  
    *ПРИМІТКА: Якщо треків багато, це може призвести до зависання пристрою.*

- **Редагувати назву** (*Android*) / **Перейменувати** (*iOS*) — Дозволяє перейменувати папку.

- [Змінити вигляд за замовчуванням](../../map/tracks/appearance.md) (*Android*) / **Вигляд** (*iOS*) — Змінює вигляд відображення всіх треків у папці.

- [Експорт](../../personal/import-export.md) — Відкриває вкладку *Меню → Налаштування → Дії* для експорту всіх треків у папці як файл [`.osf`](../../personal/import-export.md#export).

- [Перемістити](#track-folder) — Дозволяє перемістити папку до іншої існуючої папки або створити нову.

- [Видалити папку](#delete-folder) — Видаляє папку після підтвердження.  
    ***ПРИМІТКА: Ця дія є незворотною.***


### Статистика папки {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> вкладка*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![My Places with tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

У нижній частині списку на вкладці *Треки* та під списком треків **у кожній з ваших папок** є інформаційний розділ, який дозволяє переглядати загальну зведену статистику для треків у вибраній папці. Усі значення відображаються в [одиницях](../../personal/profiles.md#units--formats), які ви вибрали.

- *Кількість **треків** у папці* — Відображає кількість треків, що містяться у вибраній папці.

- *Загальна сума* **відстаней** — Відображається загальна довжина всіх треків у вибраній папці, виміряна у вибраних вами одиницях.

- *Сума* **підйомів** — Дані вказують на загальний вертикальний підйом по всіх треках у вибраній папці.

- *Сума* **спусків** — Цей параметр є сумою вертикальних спусків на всіх треках у вибраній папці.

- *Сума* **тривалості** *часу* — Відображає загальний час, витрачений на проходження всіх треків у вибраній папці.

- *Загальний **розмір** завантажених файлів у МБ* — Загальний розмір завантажених файлів у мегабайтах показує, скільки місця займають усі треки у вибраній папці на вашому пристрої.


### Дії з папками {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Дії в папці допомагають організовувати, сортувати та імпортувати треки, щоб структурувати ваші навігаційні дані.  

Як відкрити дії з папками:

- Відкрийте вкладку Треки в Моїх місцях.
- Перейдіть до папки, якою ви хочете керувати.
- Торкніться *меню з трьома крапками* у верхньому правому куті, щоб відкрити меню дій з папками.

***Дії в меню папки:***

- [Вибрати](#selection-mode) — Торкніться потрібних папок та треків, щоб застосувати дії з меню в *режимі вибору*.

- [Сортувати підпапки](#sort-by) — Застосувати порядок сортування (наприклад, за назвою, датою) до всіх підпапок та треків на кожному рівні.

- [Додати розумну папку](../tracks/smart-folder.md#how-to-create-smart-folder) — Автоматично сортувати маршрути та треки на основі встановлених вами критеріїв.

- [Імпорт](#import) — Завантажуйте файли GPX або інші файли треків зі свого пристрою в OsmAnd для використання в автономному режимі.

- **Додати нову папку** — Щоб організувати ваші маршрути та треки за логічними категоріями, помістіть їх у різні папки. Це допомагає структурувати вашу навігаційну інформацію.


### Видалити папку {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> вкладка*

![Context menu of a track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Ви можете видалити папку з усіма треками, які вона містить. Для цього:

- Торкніться *меню з трьома крапками* у полі папки, яку потрібно видалити.
- У нижній частині меню знайдіть опцію **Видалити папку**.
- ***ПРИМІТКА: Ця дія є незворотною.***


## Імпорт / Експорт треку {#import--export-track}

### Імпорт {#import}

Інструмент імпорту дозволяє додавати треки із зовнішніх файлів для автономної навігації та аналізу. Методи імпорту треків:

1. **Прямий імпорт файлів:**

    - Торкніться файлу GPX, KML або KMZ з програм обміну повідомленнями, електронної пошти, Google Диска або файлових менеджерів.
    - Виберіть Відкрити в OsmAnd, коли з'явиться запит.
    - Імпортований трек зберігається в папці **Імпорт** у *Моїх місцях*.
    - Кроки: Торкніться файлу GPX → Відкрити в OsmAnd.

2. **Імпорт за допомогою меню *Мої місця*:**

    - Відкрийте *меню Мої місця → Треки*.
    - Виберіть файл GPX для імпорту.

    *Додаткові опції:*

    - **Однотрекові файли GPX** - імпортуйте весь трек безпосередньо.
    - **Багатотрекові файли GPX** - виберіть імпорт одного файлу GPX або виберіть конкретні треки.

***ПРИМІТКА:*** *Треки, додані вручну до папки OsmAnd на вашому пристрої, імпортуються автоматично без перезапуску програми.*  


### Експорт {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Експорт | Імпорт |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Експорт </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Експорт </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table>

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table>
-->

</TabItem>

</Tabs>

Існує кілька способів експорту одного або кількох файлів треків до будь-якого месенджера, електронної пошти, файлового менеджера або програми.  

1. За допомогою [*Контекстного меню треку → Поділитися*](../../map/tracks/track-context-menu.md#options).

2. За допомогою *Меню Мої місця → Треки → Меню папки / треку*:

    - Щоб [**експортувати один трек**](#track-menu), виберіть меню треку.
    - Щоб [**експортувати кілька треків**](#track-folder), виберіть меню потрібної папки.

3. За допомогою [Локального файлу резервної копії](../../personal/import-export.md#export-to-file). Експорт треків GPX як файлів `.osf`.


## Пов'язані статті {#related-articles}

- [Показати трек на карті](../../map/tracks/index.md)
- [Аналізувати на карті](../../map/tracks/index.md#analyze-track-on-map)
- [Контекстне меню треку](../../map/tracks/track-context-menu.md)
- [Навігація за треком](../../navigation/setup/gpx-navigation.md)
- [Запис поїздки](../../plugins/trip-recording.md)