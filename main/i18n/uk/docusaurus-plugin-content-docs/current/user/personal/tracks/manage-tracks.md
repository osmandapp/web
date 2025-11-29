---
source-hash: df7c8f53eee21b0eb4dfeaecf53d0c5ae26f02cec322c124641bc379e421196b
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

Усі треки в OsmAnd зберігаються у вкладці *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd обробляє файли треків у [форматі GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), але файли [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) та [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) можна імпортувати та конвертувати у GPX. Детальніше про різні типи треків читайте у статті [Треки на карті](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Огляд керування треками Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Огляд керування треками iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Створення треку {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту зміна-треку-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту зміна-треку-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

Ви можете додати треки в OsmAnd наступними способами:

1. **[Імпортувати](./manage-tracks.md#import--export-track)** трек із зовнішнього джерела.
2. Створити новий трек у застосунку за допомогою інструмента **[Планування маршруту](../../plan-route/create-route.md)**.
3. Записати трек у застосунку за допомогою плагіна **[Запис поїздки](../../plugins/trip-recording.md)**.
4. Ввести кілька точок за координатами та зберегти їх як трек за допомогою інструмента **[Введення координат](../../plan-route/coordinate-input.md)**.
5. Ви також можете додати **шляхові точки** до нового треку через **[Контекстне меню](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Керування треками {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *вкладка <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *вкладка <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Мої місця з треками в iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

Усі коли-небудь записані, створені або імпортовані треки автоматично відображаються в теці [Мої місця](../../personal/myplaces.md) на вкладці *Треки*. Вони впорядковані за теками або відображаються у списку під ними.


### Меню треку {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *вкладка <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *вкладка <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Контекстне меню треку в iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Кожен трек, як і теки, має меню, що дозволяє ефективно керувати треками. Ось як до нього отримати доступ:

- *Android* - торкніться *меню з трьома крапками* у полі треку.
- *iOS* - довгий дотик до потрібного треку у списку.

Меню надає наступні дії:

- **Показати/Сховати на карті** — Відображає або приховує вибрані треки на карті, візуально представляючи їхнє розташування.

- **[Відкрити](../../map/tracks/index.md#configure-map)** (*iOS*) — Цей параметр доступний у меню Налаштувати карту. Розташований у *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, він дозволяє отримати доступ до [контекстного меню вибраного треку](../../map/tracks/track-context-menu.md) при натисканні.

- **Вигляд** (*iOS*) — Налаштуйте [вигляд треків](../../map/tracks/appearance.md) відповідно до ваших уподобань.

- **Навігація** (*iOS*) — Запускає [навігацію](../../navigation/setup/gpx-navigation.md) по вибраному треку.

- **Аналізувати на карті** (*Android*) / **Аналізувати** (*iOS*) — Відкриває інструмент [Аналізувати на карті](../../navigation/setup/route-details.md#analyze-on-map) в Деталях маршруту для подальшого аналізу.

- **Поділитися** — Дозволяє поділитися вибраним треком з іншими.

- **Завантажити зміни в OSM** (*iOS*) — [Завантажте зміни](../../plugins/osm-editing.md#gps-track), які ви внесли до треку, безпосередньо в *OpenStreetMap*.

- **Редагувати** (*iOS*) — Використовуйте інструмент [Планування маршруту](../../plan-route/create-route.md#modify-existing-gpx-track) для зміни треків.

- **Дублювати** (*iOS*) — Створює копію вибраного треку.

- **Перейменувати** — Змінити назву вибраного треку для кращої організації.

- **Перемістити** — Дозволяє перемістити вибраний трек в іншу теку.

- **Експорт** (*Android*) — Перейдіть до вкладки *Меню → Налаштування → Дії*, щоб експортувати всі треки з теки.

- **Видалити** — Назавжди видалити вибраний трек, який більше не потрібен.


### Пошук {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функція пошуку треків у Моїх місцях Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Функція пошуку треків у Моїх місцях iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Натисніть кнопку &#x1F50D; у верхній частині екрана пристрою, щоб відкрити меню сортування списку треків.  

Доступно:

- Пошук за назвою треку.
- [Сортувати за](#sort-by) для кращого пошуку, якщо ви не пам'ятаєте назву.
- [Фільтр](./smart-folder.md#search-filter) (*лише для Android*), якщо вам потрібні певні характеристики треку.


### Режим вибору {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функція сортування треків у Моїх місцях Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Треки в Моїх місцях iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

Пункт меню **Вибрати** надає опції для керування теками та треками. Ця функція дозволяє вибрати кілька треків або тек з треками. Ви також можете вибрати всі треки та теки, натиснувши спеціальну кнопку **Вибрати все**.

Після того, як ви зробили свій вибір, надаються наступні кроки:  

- **Показати на карті** — За допомогою цієї функції ви можете відобразити вибрані треки на карті, щоб краще зрозуміти їхнє розташування та взаємозв'язок.

- **Поділитися** (*Android*) / **Експорт** (*iOS*) — Якщо ви хочете поділитися вибраними даними з іншими користувачами або зберегти їх у хмарному сервісі, функція *Поділитися/Експорт* дозволяє надсилати треки та теки різними способами.

- **Завантажити в OpenStreetMap** — Ви можете надіслати вибрані треки в OpenStreetMap, сприяючи розвитку та покращенню даних.

- **Перемістити** — Ви можете впорядкувати свої дані, перемістивши вибрані треки та теки в інші теки.

- [Змінити вид активності](../../map/tracks/track-context-menu.md#ttrack-activity-type) — Ця дія дозволяє змінити тип активності, наприклад, на *Автомобіль*, *Екстремальний мотоспорт*, *Піший туризм* або інші, для вибраного треку.

- [Змінити вигляд](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — Ця опція дозволяє налаштувати вигляд вибраних треків, роблячи їх більш помітними та впізнаваними на карті.

- **Видалити** — Якщо вибрані треки або теки більше не потрібні, функція Видалити дозволяє їх видалити, при цьому застосунок надає опції підтвердження, щоб уникнути випадкового видалення.


### Сортування треків {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функція сортування треків у Моїх місцях Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Функція сортування треків у Моїх місцях iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd пропонує простий спосіб сортування ваших треків, що допомагає керувати великою колекцією або швидко знаходити певні елементи. Щоб отримати доступ до меню сортування, натисніть **Сортувати за** у верхній частині списку треків.

***Параметри сортування:***

- **Найближчі** — Показує треки, найближчі до вашого поточного місцезнаходження.
- **Останні змінені** — Відображає треки, відсортовані за датою останньої зміни.
- **Назва: А - Я** — Впорядковує треки за алфавітом від А до Я.
- **Назва: Я - А** — Впорядковує треки за алфавітом від Я до А.
- **Спочатку новіші** — Сортує треки за датою створення, найновіші вгорі.
- **Спочатку старіші** — Сортує треки за датою створення, найстаріші вгорі.
- **Спочатку найдовші** — Відображає треки, відсортовані за довжиною, найдовші вгорі.
- **Спочатку найкоротші** — Відображає треки, відсортовані за довжиною, найкоротші вгорі.
- **Спочатку найтриваліші** — Сортує треки за тривалістю, найдовші вгорі.
- **Спочатку найкоротші за тривалістю** — Сортує треки за тривалістю, найкоротші вгорі.

### Сортування підтек {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функція сортування треків у Моїх місцях Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Функція сортування треків у Моїх місцях iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

Якщо ви хочете відсортувати [підтеки](#folder-actions), перейдіть до меню з трьома крапками у вибраній теці та виберіть потрібні [параметри](#sort-by).  

Вибраний параметр сортування застосовується не тільки до поточної підтеки, але й до всіх вкладених тек і треків на всіх рівнях. Це забезпечує узгоджену структуру ваших збережених даних.


## Тека треків {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Торкніться *меню з трьома крапками* у полі теки, щоб **відкрити** меню теки.

![імпорт мультитреку](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Довгий дотик до поля теки, щоб **відкрити** меню теки.

![Контекстне меню треку в iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Меню теки треків дозволяє переглядати, перейменовувати, експортувати та керувати теками.


***Дії з текою:***

- **Назва** — Відображає назву теки, дату створення та кількість треків, які вона містить.
- **Показати всі треки на карті** (*лише для Android*) — Відображає всі треки з теки на карті. Якщо треків багато, це може призвести до зависання пристрою.
- **Редагувати назву** (*Android*) / **Перейменувати** (*iOS*) — Дозволяє перейменувати теку.
- [Змінити вигляд за замовчуванням](../../map/tracks/appearance.md) (*Android*) / **Вигляд** (*iOS*) — Змінює вигляд відображення всіх треків у теці.
- [Експорт](../../personal/import-export.md) — Відкриває вкладку *Меню → Налаштування → Дії* для експорту всіх треків у теці як [файл `.osf`](../../personal/import-export.md#export).
- [Перемістити](#track-folder) — Дозволяє перемістити теку в іншу існуючу теку або створити нову.
- [Видалити теку](#delete-folder) — Видаляє теку після підтвердження. ***Ця дія є незворотною.***


### Статистика теки {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *вкладка <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *вкладка <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Мої місця з треками в iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

У нижній частині списку на вкладці *Треки* та під списком треків **у кожній з ваших тек** є інформаційний розділ, який дозволяє переглянути загальну зведену статистику для треків у вибраній теці. Усі значення відображаються у вибраних вами [одиницях вимірювання](../../personal/profiles.md#units--formats).

- *Кількість **треків** у теці* — Відображає кількість треків, що містяться у вибраній теці.
- *Загальна сума* **відстаней** — Відображається загальна довжина всіх треків у вибраній теці, виміряна у вибраних вами одиницях.
- *Сума* **підйомів** — Дані вказують на загальний вертикальний набір висоти на всіх треках у вибраній теці.
- *Сума* **спусків** — Цей параметр є сумою вертикальних спусків на всіх треках у вибраній теці.
- *Сума* **тривалості** — Відображає загальний час, витрачений на проходження всіх треків у вибраній теці.
- *Загальний **розмір** завантажених файлів у МБ* — Загальний розмір завантажених файлів у мегабайтах показує, скільки місця займають усі треки у вибраній теці на вашому пристрої.


### Дії з текою {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Функція сортування треків у Моїх місцях Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Треки в Моїх місцях iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

Дії в теці допомагають організовувати, сортувати та імпортувати треки, щоб структурувати ваші навігаційні дані.  

Як відкрити дії з текою:

- Відкрийте вкладку Треки в Моїх місцях.
- Перейдіть до теки, якою ви хочете керувати.
- Торкніться *меню з трьома крапками* у верхньому правому куті, щоб відкрити меню дій з текою.

***Дії в меню теки:***

- [Вибрати](#selection-mode) — Торкніться потрібних тек і треків, щоб застосувати дії з меню в *режимі вибору*.
- [Сортувати підтеки](#sort-by) — Застосуйте порядок сортування (наприклад, за назвою, датою) до всіх підтек і треків на кожному рівні.
- [Додати розумну теку](../tracks/smart-folder.md#how-to-create-smart-folder) — Автоматично сортуйте маршрути та треки на основі встановлених вами критеріїв.
- [Імпорт](#import) — Завантажуйте GPX або інші файли треків з вашого пристрою в OsmAnd для офлайн-використання.
- **Додати нову теку** — Щоб організувати ваші маршрути та треки в логічні категорії, розмістіть їх у різних теках. Це допомагає структурувати вашу навігаційну інформацію.


### Видалення теки {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *вкладка <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Мої місця з треками в Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *вкладка <Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![Контекстне меню треку в iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

Ви можете видалити теку з усіма треками, які вона містить. Для цього:

- Торкніться *меню з трьома крапками* у полі теки, яку потрібно видалити.
- У нижній частині меню знайдіть опцію **Видалити теку**.
- ***ПРИМІТКА: Ця дія є незворотною.***


## Імпорт / Експорт треку {#import--export-track}

### Імпорт {#import}

Інструмент імпорту дозволяє додавати треки із зовнішніх файлів для офлайн-навігації та аналізу. Способи імпорту треків:

1. **Прямий імпорт файлу:**

    - Торкніться файлу GPX, KML або KMZ у месенджерах, електронній пошті, Google Drive або файлових менеджерах.
    - Виберіть "Відкрити в OsmAnd", коли з'явиться запит.
    - Імпортований трек зберігається в теці **Імпорт** у *Моїх місцях*.
    - Кроки: Торкніться файлу GPX → Відкрити в OsmAnd.

2. **Імпорт за допомогою меню *Мої місця*:**

    - Відкрийте *меню Мої місця → Треки*.
    - Виберіть файл GPX для імпорту.

    *Додаткові опції:*

    - **Файли GPX з одним треком** - імпортуйте весь трек безпосередньо.
    - **Файли GPX з кількома треками** - виберіть імпорт одного файлу GPX або виберіть конкретні треки.

***ПРИМІТКА:*** *Треки, додані вручну до теки OsmAnd на вашому пристрої, імпортуються автоматично без перезапуску застосунку.*  


### Експорт {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![імпорт мультитреку](@site/static/img/personal/tracks/import_multitrack.png) ![імпорт мультитреку](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Експорт | Імпорт |
|:------------|:---------------|
| ![імпорт мультитреку](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Експорт </summary> ![імпорт мультитреку](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![імпорт мультитреку](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Експорт </summary> ![імпорт мультитреку](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

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

Існує кілька способів експорту одного або кількох файлів треків у будь-який месенджер, електронну пошту, файловий менеджер або застосунок.  

1. Через [*Контекстне меню треку → Поділитися*](../../map/tracks/track-context-menu.md#options).

2. Через *меню Мої місця → Треки → Меню теки / треку*:

    - Щоб [**експортувати один трек**](#track-menu), виберіть меню треку.
    - Для [**експорту кількох треків**](#track-folder), виберіть меню потрібної теки.

3. За допомогою [файлу локальної резервної копії](../../personal/import-export.md#export). Експорт треків GPX як файлів `.osf`.


## Пов'язані статті {#related-articles}

- [Показати трек на карті](../../map/tracks/index.md)
- [Аналіз на карті](../../map/tracks/index.md#analyze-track-on-map)
- [Контекстне меню треку](../../map/tracks/track-context-menu.md)
- [Навігація за треком](../../navigation/setup/gpx-navigation.md)
- [Запис поїздки](../../plugins/trip-recording.md)