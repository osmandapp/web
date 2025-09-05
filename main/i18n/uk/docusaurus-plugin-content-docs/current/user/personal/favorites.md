---
source-hash: 0b4ccedbab00f7e1bbfb641e2f35ec9e1e8bfde4a863b05a99381d9223043012
sidebar_position: 7
title: Обрані
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

Функція **Обрані** в OsmAnd дозволяє створювати закладки (нотатки) на мапі. Ці обрані точки за замовчуванням відображаються як жовті зірочки, але ви можете повністю налаштувати їх за допомогою різних кольорів, форм та іконок. Обрані точки групуються в окремий шар мапи, який стає видимим з *6-го рівня масштабування*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites introduction android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites introduction ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>

## Обрана точка {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favotires layer Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Обрані точки є частиною спеціального шару мапи, і ви можете [показувати або приховувати](../map/point-layers-on-map.md#favorites) їх разом з їхніми [назвами](../map/point-layers-on-map.md#favorite-and-poi-names) на мапі. Натискання на обрану точку відкриває [Контекстне меню](../map/map-context-menu.md#favorites--track-points-from-the-group), що дозволяє переглядати деталі та [редагувати або видаляти](../map/map-context-menu.md#add--edit-favorite) точку.

### Створити {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite add description Android](@site/static/img/personal/favorite_add_descr_android.png) ![Favorite group Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite add description iOS](@site/static/img/personal/favorite_add_descr_ios.png) ![Favorite group iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Щоб додати обрану точку:

1. Виберіть [POI](../map/point-layers-on-map.md#points-of-interest-pois) або структуру на мапі.
   Коротке натискання для POI або довге натискання для загальної точки на мапі.
2. Виберіть [Додати (☆)](../map/map-context-menu.md#add--edit-favorite) з контекстного меню мапи.

При додаванні точки з даних OSM відповідна інформація POI автоматично включається. Ви також можете створити обрану точку, [довго натиснувши](../map/map-context-menu.md#select-any-point-long-tap) будь-яке місце на мапі.

***Поля для обраної точки:***

- **Назва** — Унікальна назва в групі (*Обов'язково*).
- **Адреса** та **Опис** (*Необов'язково*).
- **Група** — Виберіть з існуючої [групи обраних](#manage-favorites) або створіть нову.
- **Візуальне налаштування** — Іконка, колір, форма можуть відповідати стандартному [вигляду групи](#change-group-appearance) або бути налаштовані індивідуально.

### Редагувати / Замінити / Видалити {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorite edit Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite edit iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Щоб змінити обрану точку:

1. [Натисніть](../map/map-context-menu.md#select-an-object-single-tap) обрану точку на мапі або перейдіть до [Мої обрані](#manage-favorites).
2. Виберіть **Редагувати обране** з [*контекстного меню мапи*](../map/map-context-menu.md#add--edit-favorite).

***Доступні опції:***

- **Редагувати деталі** — Назва, іконка, група, адреса та опис.
- **Замінити місцезнаходження** — Замінити іншу точку цією. Корисно для оновлення конкретної точки (наприклад, *Моя припаркована машина*) або створення нової.
- **Видалити** — Видалити обране за допомогою опції видалення, доступної через меню редагування або через кнопку видалення на Android.

### Іконки обраних {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

Широкий вибір іконок для POI та маршрутних точок доступний в OsmAnd. Ви можете:

- Вибрати іконку зі списку [категорій POI](../search/search-poi.md#categories-and-their-filters).
- Знайти відповідну іконку за допомогою [опції пошуку](../search/search-all.md#how-to-use).

### Спеціальні обрані (Особисті) {#special-favorites-personal}

*Особиста папка* містить спеціальні точки, такі як **<Translate android="true" ids="favorite_home_category"/>** та **<Translate android="true" ids="work_button"/>**, які часто використовуються в [навігації](../navigation/setup/route-navigation.md#select-starting-point). Ця папка не має *меню з трьома крапками*, і її параметри не можуть бути змінені.

## Керування обраними {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![My places favorites android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![my_places_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Розділ **Мої обрані** дозволяє:

- [Шукати](#order--sorting--search) конкретні обрані точки або групи.
- [Масові операції](#bulk-edit--delete) — Перейменовувати, переміщувати або видаляти кілька обраних точок одночасно.

### Порядок / Сортування / Пошук {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folders android](@site/static/img/personal/favorites_folders_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites folders ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Сортування** — Папки та точки обраних сортуються за алфавітом, при цьому [особиста папка](../personal/favorites.md#special-favorites-personal) знаходиться вгорі.
- **Пошук** — Використовуйте [Глобальний пошук](../search/search-all.md) для пошуку обраних за назвою. Обрані сортуються за відстанню від центру мапи.

### Масове редагування / Видалення {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_actions_android.png) ![Favorites action delete android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Щоб керувати кількома обраними, натисніть іконку **Видалити** (*іконка кошика на Android*) або кнопку **Редагувати** (*іконка олівця на iOS*).
2. Виберіть окремі обрані або цілі папки для масових операцій.
3. **Доступні опції** — *Видалити* для Android та iOS, *Перемістити до групи обраних*, *Поділитися* та *Змінити колір* для iOS.

<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>**  or **<Translate android="true" ids="remove_from_map_markers"/>**.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->

### Дії з групою обраних {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Меню з трьома крапками → Змінити стандартний вигляд*

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Довге натискання папки → Стандартний вигляд*

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Використовуйте ***Меню з трьома крапками*** (*Android*) поруч з кожною папкою та ***довге натискання*** (*iOS*) на папку для керування групами обраних:

- **<Translate android="true" ids="shared_string_rename"/>** — Використовуйте цю опцію, щоб змінити назву вибраної папки.

- **<Translate android="true" ids="change_default_appearance"/>** — Налаштуйте, як обрані точки в папці відображаються на мапі, змінюючи їхні іконки, кольори або мітки.

- **<Translate android="true" ids="shared_string_show_on_map"/>** або **Приховати на мапі** — Перемикайте цю опцію, щоб відображати або приховувати обрані точки з папки на мапі.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** або **Видалити з маркерів мапи** (*лише Android*) — Додайте всі обрані точки з папки до *Списку маркерів мапи* або видаліть їх за потреби для легкого доступу.

- **<Translate android="true" ids="shared_string_share"/>** — Поділіться обраними точками в папці, експортувавши їх як файл *Favorites.gpx*, що полегшує передачу або резервне копіювання ваших даних.

- **<Translate android="true" ids="shared_string_delete"/>** — Безповоротно видалити вибрану папку обраних та всі точки в ній.

Більше деталей у статті [Мої місця](../personal/myplaces.md#favorites).

### Змінити вигляд групи {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Налаштування *Змінити вигляд групи*:

- **Іконка, колір, форма** — Встановіть стандартний стиль для всіх обраних у групі.
- **Послідовність** — Нові обрані, додані до групи, автоматично успадковують стандартний вигляд.
- **Налаштування** — Перевизначити стандартні налаштування для існуючих точок у папці, лише для нових обраних або застосувати до всіх.

## Експорт / Імпорт {#export--import}

OsmAnd надає кілька методів для [резервного копіювання](./import-export.md) та [відновлення](./import-export.md#import) обраних:

- **Місця резервного копіювання** — Локальне сховище, [OsmAnd Cloud](../personal/osmand-cloud.md) (лише з підпискою [OsmAnd Pro або OsmAnd Start](../purchases/index.md)) або програми для обміну миттєвими повідомленнями.

- **Формат файлу** — Обрані зберігаються як файли `.gpx` (favorites.gpx).

### Безкоштовне хмарне резервне копіювання {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Безкоштовне резервне копіювання обраних](../personal/osmand-cloud.md#osmand-start) — це спеціальний план покупки, який дозволяє створювати резервні копії ваших обраних точок (місць) для версій **Android, iOS** або **Web** у програмі OsmAnd та відновлювати їх з OsmAnd Cloud. Цей план доступний для користувачів [OsmAnd Free або Maps+](../purchases/index.md).

*Безкоштовне резервне копіювання обраних* пропонує такі переваги:

- **Оплата не потрібна**. Використовуйте функцію резервного копіювання без придбання платних підписок.
- **Збереження обраних точок**. Регулярно зберігайте свої обрані точки в OsmAnd, щоб уникнути їх втрати, якщо ваш пристрій вийде з ладу або програма буде видалена.
- **Передача обраних точок**. Імпортуйте свої обрані точки на новий пристрій за допомогою функції *Безкоштовне резервне копіювання обраних*, якщо ви використовуєте OsmAnd на кількох пристроях.

#### Як створити резервну копію {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Favorites folder functions android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Favorites actions ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Для використання функції *Безкоштовне резервне копіювання налаштувань* вам потрібен обліковий запис OsmAnd Cloud. Якщо у вас є обліковий запис в *OsmAnd Pro* або активний обліковий запис в *OsmAnd Cloud*, ви не побачите рекламний банер.

- *Банер безкоштовного резервного копіювання обраних*. Натисніть цей банер, щоб розпочати процес резервного копіювання.
- *Завершіть крок реєстрації*, якщо у вас немає облікового запису OsmAnd Cloud, дотримуючись інструкцій у [посібнику з реєстрації](../personal/osmand-cloud.md#login).
- *Перейдіть до меню покупок OsmAnd* (*Меню → Налаштування → Покупки*).
- *[Пакет OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Виберіть цю опцію, щоб отримати доступ до функції безкоштовного резервного копіювання налаштувань.
- *Створіть резервну копію* ваших налаштувань.

### Усі обрані {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)

</TabItem>

</Tabs>

Ви можете експортувати та імпортувати свої обрані за допомогою спеціальних кнопок внизу екрана "Обрані". Файл [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) можна надіслати в Dropbox, електронну пошту, месенджери та інші програми, встановлені на вашому пристрої, які підтримують цю функцію.

- Кнопка **Імпорт** (*Android*) / **Імпорт обраного** (*iOS*). Дозволяє імпортувати обрані точки (*favorites.gpx*) як маршрутні точки з файлу *GPX* (поширений формат даних GPS) зі сховища вашого пристрою.
- Кнопка **Поділитися** (*Android*) / **Експорт обраного** (*iOS*). Дозволяє експортувати (ділитися) усіма вашими обраними як файл *favorites.gpx*.

### Група обраних {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites actions ios](@site/static/img/personal/favorites_actions_1_ios.png) ![Favorites actions ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Натисніть **Меню з трьома крапками** (*Android*) або кнопку **Редагувати** (*іконка олівця на iOS*) або **довго натисніть** папку (*iOS*) вибраної папки обраних.
- Виберіть кнопку **Поділитися**, щоб надіслати файл *Favorites.gpx* у пам'ять вашого пристрою або поділитися ним через програми обміну повідомленнями.

### Автоматичне резервне копіювання обраних {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Android → data → net.osmand → files → backup*

![Favorites backup export Android](@site/static/img/personal/favorites_backup_export_andr.png) ![Favorites autobackup android](@site/static/img/personal/favorites_autobackup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Файли → На моєму iPhone → OsmAnd Maps → favourites_backup*

![Favorites autobackup ios](@site/static/img/personal/favorites_autobackup.png)

</TabItem>

</Tabs>

OsmAnd створює **файл резервної копії** кожного разу, коли редагуються обрані.

- **Android**: Резервні копії зберігаються в *Android → data → net.osmand → files → backup*. Для доступу до них використовуйте сторонній файловий менеджер.

- **iOS**: Файли розташовані в *Файли → На моєму iPhone → OsmAnd Maps → favourites_backup*.

**Ручний експорт резервної копії**

- Перейдіть до *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Експортуйте файл `.osf` до локального сховища, хмарних сервісів або поділіться ним безпосередньо.

:::caution
В останніх версіях ***Android*** доступ до системних каталогів обмежений. Однак, після вилучення файлу обраних з архіву, все ще можливо переслати його в месенджери або хмарні сервіси тощо.
:::

### Обрані у файлі GPX {#favorites-in-gpx-file}

Вся інформація про Обране зберігається та описується за допомогою тегів. При створенні Обраної точки ви можете написати власний [опис](#favorite-point) або використовувати інформацію з даних OSM [точки інтересу (POI)](../map/point-layers-on-map.md#points-of-interest-pois), з якої була створена ваша точка. Обрані точки, POI та маршрутні точки використовують одні й ті ж **теги** для зберігання інформації та зберігаються у **форматі файлу GPX**.

```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```

## Пов'язані статті {#related-articles}

- [Керування треками](../personal/tracks/manage-tracks.md#import--export-track)
- [Історія пошуку](../search/search-history.md#export-and-share)
- [Схеми кольорової палітри](../personal/color-palette-schemes.md)

> *Останнє оновлення: квітень 2025*