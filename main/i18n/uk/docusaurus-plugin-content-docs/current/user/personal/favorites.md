---
source-hash: 46bbbfa9f2a4b9ae84b958f8aebabc44cba85df4d97589ff741b36e31fd6fb82
source-hash: c674aa26de62610f142ef441eaa008b20c3b4a69dd7617b13ccd27ccf7f2234
sidebar_position: 7
title:  Обране
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

**Обране** — це функція OsmAnd, яка дозволяє створювати закладки (нотатки) на мапі. За замовчуванням ці точки відображаються у вигляді жовтих зірочок, але ви можете повністю налаштувати їх, змінюючи кольори, форми та іконки. Обрані точки згруповані в окремий шар на мапі, який стає видимим з *6-го рівня масштабування*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вступ до Обраного android](@site/static/img/personal/favorites_intro_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Вступ до Обраного ios](@site/static/img/personal/favorites_intro_ios.png)

</TabItem>

</Tabs>


## Точка "Обране" {#favorite-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Шар Обране Android](@site/static/img/map/favorites_layer.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Шар Обране iOS](@site/static/img/map/favorites_layer_ios.png)

</TabItem>

</Tabs>

Обрані точки є частиною спеціального шару мапи, і ви можете [показувати або приховувати](../map/point-layers-on-map.md#favorites) їх разом з їхніми [назвами](../map/point-layers-on-map.md#favorite-and-poi-names) на мапі. Натискання на обрану точку відкриває [Контекстне меню](../map/map-context-menu.md#favorites--track-points-from-the-group), що дозволяє переглянути деталі та [редагувати або видалити](../map/map-context-menu.md#add--edit-favorite) точку.


### Створення {#create}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Додавання опису до Обраного Android](@site/static/img/personal/favorite_add_descr_android.png)  ![Група Обраного Android](@site/static/img/personal/favorite_group_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Додавання опису до Обраного iOS](@site/static/img/personal/favorite_add_descr_ios.png)  ![Група Обраного iOS](@site/static/img/personal/favorite_group_ios.png)

</TabItem>

</Tabs>

Щоб додати обрану точку:

1. Виберіть [POI (цікавий об'єкт)](../map/point-layers-on-map.md#points-of-interest-pois) або об'єкт на мапі.  
    Короткий дотик для POI або довгий дотик для будь-якої точки на мапі.
2. Виберіть [Додати (☆)](../map/map-context-menu.md#add--edit-favorite) у контекстному меню мапи.

При додаванні точки з даних OSM відповідна інформація про POI додається автоматично. Ви також можете створити обрану точку [довгим дотиком](../map/map-context-menu.md#select-any-point-long-tap) до будь-якого місця на мапі.

***Поля для точки "Обране":***

- **Назва** — Унікальна назва в межах групи (*Обов'язково*).
- **Адреса** та **Опис** (*Необов'язково*).
- **Група** — Виберіть з наявної [групи Обраного](#manage-favorites) або створіть нову.
- **Візуальне налаштування** — Іконка, колір, форма можуть відповідати стандартному [вигляду групи](#change-group-appearance) або бути налаштовані індивідуально.


### Редагувати / Замінити / Видалити {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Редагування Обраного Android](@site/static/img/personal/favorite_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Редагування Обраного iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Щоб змінити обрану точку:

1. [Торкніться](../map/map-context-menu.md#select-an-object-single-tap) обраної точки на мапі або перейдіть до [Мої обрані місця](#manage-favorites).
2. Виберіть **Редагувати обране** у [*контекстному меню мапи*](../map/map-context-menu.md#add--edit-favorite).

***Доступні опції:***

- **Редагувати деталі** — Назва, іконка, група, адреса та опис.
- **Замінити місце** — Замінити іншу точку цією. Корисно для оновлення певної точки (наприклад, *Моя припаркована машина*) або створення нової.
- **Видалити** — Видалити обрану точку за допомогою опції видалення, доступної через меню "Редагувати" або через кнопку видалення на Android.


### Іконки Обраного {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Мої місця Обране android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![мої_місця_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

В OsmAnd доступний широкий вибір іконок для POI та шляхових точок. Ви можете:

- Вибрати іконку зі списку [категорій POI](../search/search-poi.md#categories-and-their-filters).
- Знайти відповідну іконку за допомогою [опції пошуку](../search/search-all.md#how-to-use).


### Спеціальні точки "Обране" (Особисті) {#special-favorites-personal}

Папка *Особисті* містить спеціальні точки, такі як **<Translate android="true" ids="favorite_home_category"/>** та **<Translate android="true" ids="work_button"/>**, які часто використовуються в [навігації](../navigation/setup/route-navigation.md#select-starting-point). Ця папка не має *меню з трьома крапками*, і її параметри не можна змінити.


## Керування Обраним {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Мої місця Обране android](@site/static/img/personal/my_places_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![мої_місця_ios](@site/static/img/personal/my_places_ios.png)

</TabItem>

</Tabs>

Розділ **Мої обрані місця** дозволяє:

- [Шукати](#order--sorting--search) конкретні обрані точки або групи.
- [Групові операції](#bulk-edit--delete) — перейменовувати, переміщувати або видаляти кілька обраних точок одночасно.

### Порядок / Сортування / Пошук {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Папки Обраного android](@site/static/img/personal/favorites_folders_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Папки Обраного ios](@site/static/img/personal/favorites_folders_ios.png)

</TabItem>

</Tabs>

- **Сортування** — Папки та точки "Обране" сортуються за алфавітом, причому [особиста папка](../personal/favorites.md#special-favorites-personal) знаходиться вгорі.
- **Пошук** — Використовуйте [Глобальний пошук](../search/search-all.md), щоб знайти обрані точки за назвою. Обрані точки сортуються за відстанню від центру мапи.


### Групове редагування / видалення {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії з Обраним android](@site/static/img/personal/favorites_actions_android.png) ![Дія видалення Обраного android](@site/static/img/personal/favorites_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorites_actions_ios.png)

</TabItem>

</Tabs>

1. Щоб керувати кількома обраними точками, торкніться іконки **Видалити** (*іконка кошика на Android*) або кнопки **Редагувати** (*іконка олівця на iOS*).
2. Виберіть окремі обрані точки або цілі папки для групових операцій.
3. **Доступні опції** — *Видалити* для Android та iOS, *Перемістити до групи Обраного*, *Поділитися* та *Змінити колір* для iOS.

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


### Дії з групою Обраного {#favorite-group-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Меню з трьома крапками → Змінити вигляд за замовчуванням*

![Функції папки Обраного android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Довгий дотик до папки → Вигляд за замовчуванням*

![Дії з Обраним ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

Використовуйте ***меню з трьома крапками*** (*Android*) поруч з кожною папкою та ***довгий дотик*** (*iOS*) до папки, щоб керувати групами обраних точок:

- **<Translate android="true" ids="shared_string_rename"/>** — Використовуйте цю опцію, щоб змінити назву вибраної папки.

- **<Translate android="true" ids="change_default_appearance"/>** — Налаштуйте вигляд обраних точок у папці на мапі, змінивши їхні іконки, кольори або мітки.

- **<Translate android="true" ids="shared_string_show_on_map"/>** або **Приховати на мапі** — Перемикайте цю опцію, щоб відобразити або приховати обрані точки з папки на мапі.

- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** або **Видалити з маркерів на мапі** (*лише для Android*) — Додайте всі обрані точки з папки до *Списку маркерів на мапі* або видаліть їх за потреби для зручності.

- **<Translate android="true" ids="shared_string_share"/>** — Поділіться обраними точками в папці, експортувавши їх у файл *Favorites.gpx*, що полегшує передачу або резервне копіювання ваших даних.

- **<Translate android="true" ids="shared_string_delete"/>** — Назавжди видалити вибрану папку обраних точок та всі точки в ній.

Більше деталей у статті [Мої місця](../personal/myplaces.md#favorites).



### Змінити вигляд групи {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функції папки Обраного android](@site/static/img/personal/favorite_change_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorite_add_new_group_3_ios.png)

</TabItem>

</Tabs>

Налаштування *Змінити вигляд групи*:

- **Іконка, колір, форма** — Встановіть стиль за замовчуванням для всіх обраних точок у групі.
- **Узгодженість** — Нові обрані точки, додані до групи, автоматично успадковують вигляд за замовчуванням.
- **Налаштування** — Замінити налаштування за замовчуванням для наявних точок у папці, лише для нових обраних точок або застосувати до всіх.


## Експорт / Імпорт {#export--import}

OsmAnd надає кілька методів для [резервного копіювання](./import-export.md) та [відновлення](./import-export.md#import) обраних точок:

- **Місця для резервного копіювання** — Локальне сховище, [OsmAnd Cloud](../personal/osmand-cloud.md) (лише з [підпискою OsmAnd Pro або OsmAnd Start](../purchases/index.md)), або месенджери.

- **Формат файлу** — Обрані точки зберігаються у файлах `.gpx` (favorites.gpx).


### Безкоштовне хмарне резервне копіювання {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Функції папки Обраного android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Дії з Обраним ios](@site/static/img/personal/favorites_free_backup_2_ios.png)

</TabItem>

</Tabs>

[Безкоштовне резервне копіювання Обраного](../personal/osmand-cloud.md#osmand-start) — це спеціальний план, який дозволяє створювати резервні копії ваших обраних точок (місць) для версій **Android, iOS** або **Web** у додатку OsmAnd та відновлювати їх з OsmAnd Cloud. Цей план доступний для користувачів [OsmAnd Free або Maps+](../purchases/index.md).  

*Безкоштовне резервне копіювання Обраного* пропонує такі переваги:

- **Оплата не потрібна**. Використовуйте функцію резервного копіювання без придбання платних підписок.
- **Зберігайте обрані точки**. Регулярно зберігайте свої обрані точки в OsmAnd, щоб не втратити їх у разі збою пристрою або видалення програми.
- **Переносьте обрані точки**. Імпортуйте свої обрані точки на новий пристрій за допомогою функції *Безкоштовне резервне копіювання Обраного*, якщо ви використовуєте OsmAnd на кількох пристроях.  


### Як створити резервну копію {#how-to-create-a-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Функції папки Обраного android](@site/static/img/personal/favorites_free_backup_purch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,my_favorites"/>*

![Дії з Обраним ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Для використання функції *Безкоштовне резервне копіювання налаштувань* вам потрібен обліковий запис OsmAnd Cloud. Якщо у вас є обліковий запис в *OsmAnd Pro* або активний обліковий запис в *OsmAnd Cloud*, ви не побачите рекламний банер.  

- *Банер безкоштовного резервного копіювання Обраного*. Торкніться цього банера, щоб розпочати процес резервного копіювання.
- *Завершіть крок реєстрації*, якщо у вас немає облікового запису OsmAnd Cloud, дотримуючись інструкцій у [посібнику з реєстрації](../personal/osmand-cloud.md#login).
- *Перейдіть до меню Покупки OsmAnd* (*Меню → Налаштування → Покупки*).
- *[Пакет OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Виберіть цю опцію, щоб отримати доступ до функції безкоштовного резервного копіювання налаштувань.
- *Створіть резервну копію* ваших налаштувань.


### Усі обрані точки {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії з Обраним android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Експорт імпорт Обраного ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

Ви можете експортувати та імпортувати свої обрані точки за допомогою спеціальних кнопок внизу екрана "Обране". Файл [.gpx](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) можна надіслати в Dropbox, електронною поштою, через месенджери та інші програми, встановлені на вашому пристрої, які підтримують цю функцію.

- Кнопка **Імпорт** (*Android*) / **Імпортувати обране** (*iOS*). Дозволяє імпортувати обрані точки (*favorites.gpx*) як шляхові точки з файлу *GPX* (поширений формат даних GPS) зі сховища вашого пристрою.
- Кнопка **Поділитися** (*Android*) / **Експортувати обране** (*iOS*). Дозволяє експортувати (поділитися) всіма вашими обраними точками у вигляді файлу *favorites.gpx*.


### Група Обраного {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функції папки Обраного android](@site/static/img/personal/favorites_folder_functions_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorites_actions_1_ios.png)   ![Дії з Обраним ios](@site/static/img/personal/favorite_add_new_group_2_ios.png)

</TabItem>

</Tabs>

- Торкніться **меню з трьома крапками** (*Android*), кнопки **Редагувати** (*іконка олівця на iOS*) або **довго торкніться** папки (*iOS*) вибраної папки обраних точок.
- Натисніть кнопку **Поділитися**, щоб надіслати файл *Favorites.gpx* у пам'ять пристрою або поділитися ним через месенджери.  


### Автоматичне резервне копіювання Обраного {#automatic-favorites-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Android → data → net.osmand → files → backup*

![Експорт резервної копії Обраного Android](@site/static/img/personal/favorites_backup_export_andr.png)  ![Автоматичне резервне копіювання Обраного android](@site/static/img/personal/favorites_autobackup_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Files → On my iPhone → OsmAnd Maps → favourites_backup*

![Автоматичне резервне копіювання Обраного ios](@site/static/img/personal/favorites_autobackup.png)  

</TabItem>

</Tabs>

OsmAnd створює **файл резервної копії** щоразу, коли редагуються обрані точки.

- **Android**: Резервні копії зберігаються в *Android → data → net.osmand → files → backup*. Використовуйте сторонній файловий менеджер для доступу до них.

- **iOS**: Файли знаходяться в *Files → On my iPhone → OsmAnd Maps → favourites_backup*.

**Експорт резервної копії вручну**  

- Перейдіть до *<Translate android="true" ids="shared_string_menu,shared_string_settings,export_to_file,shared_string_resources,favorites_backup"/>*.
- Експортуйте файл `.osf` у локальне сховище, хмарні сервіси або поділіться ним безпосередньо.

:::caution
В останніх версіях ***Android*** доступ до системних каталогів обмежений. Однак, після вилучення файлу обраних точок з архіву, його все ще можна переслати в месенджери, хмарні сервіси тощо.  
:::


### Обрані точки у файлі GPX {#favorites-in-gpx-file}

Вся інформація про Обрану точку зберігається та описується за допомогою тегів. Створюючи Обрану точку, ви можете написати власний [опис](#favorite-point) або використати інформацію з даних [цікавого об'єкта (POI)](../map/point-layers-on-map.md#points-of-interest-pois) OSM, з яких була створена ваша точка. Обрані точки, POI та шляхові точки використовують однакові **теги** для зберігання інформації та зберігаються у **форматі файлу GPX**.  


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
- [Схеми палітри кольорів](../personal/color-palette-schemes.md)