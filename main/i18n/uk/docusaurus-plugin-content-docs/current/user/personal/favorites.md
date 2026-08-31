---
source-hash: 0000cb42245d9871184d8009b30a97fd6f15555a6510bbbd8d52edde2e10f458
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

**Обране** — функція OsmAnd, яка дозволяє створювати закладки (нотатки) на мапі. За замовчуванням ці точки відображаються у вигляді жовтих зірочок, але ви можете повністю налаштувати їх, змінюючи кольори, форми та іконки. Обрані точки згруповані в окремий шар на мапі, який стає видимим з *6-го рівня масштабування*.  

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

1. Виберіть [POI](../map/point-layers-on-map.md#points-of-interest-pois) або споруду на мапі.  
    Короткий дотик для POI або довгий дотик для будь-якої точки на мапі.
2. Виберіть [Додати (☆)](../map/map-context-menu.md#add--edit-favorite) у контекстному меню мапи.

При додаванні точки з даних OSM відповідна інформація про POI додається автоматично. Ви також можете створити обрану точку [довгим дотиком](../map/map-context-menu.md#select-any-point-long-tap) до будь-якого місця на мапі.

***Поля для точки "Обране":***

- **Назва** — Унікальна назва в межах групи (*Обов'язково*).
- **Адреса** та **Опис** (*Необов'язково*).
- **Група** — Виберіть з наявної [групи Обраного](#manage-favorites) або створіть нову. На Android ви також можете вибрати вкладену папку в межах групи або створити нову. Вкладені папки відображаються з повним шляхом (наприклад, *Подорожі* / *Італія* / *Рим*).
- **Візуальне налаштування** — Іконка, колір, форма можуть відповідати стандартному [вигляду групи](#change-group-appearance) або бути налаштовані індивідуально.
- **Медіа** (*лише Android*) — Додайте фото, відео, аудіозаписи або зображення з Галереї чи Файлів.

**ПРИМІТКА:** Якщо шар Обране вимкнено в [Налаштувати мапу](../map/configure-map-menu), додавання нової обраної точки автоматично вмикає шар, щоб нова обрана точка стала видимою на мапі.


### Редагувати / Замінити / Видалити {#edit--replace--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Редагування Обраного Android](@site/static/img/personal/favorite_edit_android.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Редагування Обраного iOS](@site/static/img/personal/favorite_edit_ios.png)

</TabItem>

</Tabs>

Щоб змінити обрану точку:

1. [Торкніться](../map/map-context-menu.md#select-an-object-single-tap) обраної точки на мапі або перейдіть до [Мої обрані місця](#manage-favorites).
2. Виберіть **Редагувати обране** у [*контекстному меню мапи*](../map/map-context-menu.md#add--edit-favorite).

***Доступні опції:***

- **Редагувати деталі** — Назва, іконка, група, адреса, опис і прикріплені медіа.
- **Замінити місце** — Замінити іншу точку цією. Корисно для оновлення певної точки (наприклад, *Моя припаркована машина*) або створення нової.
- **Видалити** — Видалити обрану точку за допомогою опції видалення, доступної через меню "Редагувати" або через кнопку видалення на Android.


### Іконки Обраного {#favorite-icons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Мої місця Обране android](@site/static/img/personal/favorite_icon_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![мої_місця_ios](@site/static/img/personal/favorite_icon_3_ios.png)

</TabItem>

</Tabs>

В OsmAnd доступний широкий вибір іконок для POI та шляхових точок. Ви можете:

- Вибрати іконку зі списку [категорій POI](../search/search-poi.md#categories-and-their-filters).
- Знайти відповідну іконку за допомогою [опції пошуку](../search/search-all.md#how-to-use).


### Спеціальні точки "Обране" (Особисті) {#special-favorites-personal}

Папка *Особисті* містить спеціальні точки, такі як **<Translate android="true" ids="favorite_home_category"/>** та **<Translate android="true" ids="work_button"/>**, які часто використовуються в [навігації](../navigation/setup/route-navigation.md#select-start-point). Ця папка не має *меню з трьома крапками*, і її параметри не можна змінити.


### Медіа (лише Android) {#media}

![Медіа](@site/static/img/personal/media_actions.webp) ![Медіа](@site/static/img/personal/media_menu.webp)

Розділ **Медіа** дозволяє прикріплювати до обраної точки фото, відео, аудіозаписи та зображення. Медіа можна додати під час створення обраного або пізніше на екрані редагування. Щоб прикріпити медіа, торкніться *Додати* в розділі Медіа та виберіть один із доступних варіантів:
- **Зробити фото** — Зробіть нове фото за допомогою камери пристрою.
- **Записати відеопримітку** — Запишіть нове відео.
- **Записати аудіопримітку** — Запишіть аудіопримітку.
- **Вибрати з Галереї** — Виберіть наявне зображення з пристрою.
- **Вибрати з Файлів** — Виберіть зображення з файлової системи.

Після прикріплення медіа з’являється в картці Медіа в контекстному меню обраного. Така сама картка Медіа доступна для [Шляхових точок](../map/tracks/track-context-menu.md#points--waypoints).

Картка Медіа показує попередній перегляд прикріплених елементів. Відображення елементів відповідає вибраному порядку сортування. Торкніться *Показати все*, щоб відкрити повну галерею. У галереї відображаються всі медіа, прикріплені до вибраного обраного.

Торкніться будь-якого елемента, щоб відкрити його на весь екран. Фото та відео можна переглядати безпосередньо, а аудіозаписи містять елементи керування відтворенням.


## Керування Обраним {#manage-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Мої місця Обране android](@site/static/img/personal/my_places_android_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![мої_місця_ios](@site/static/img/personal/my_places_ios_new.png)

</TabItem>

</Tabs>

Розділ **Обране** дозволяє:

- [Шукати](#order--sorting--search) конкретні обрані точки або групи. На iOS групи обраного (папки) організовані в три розділи: **Закріплені**, **Видимі** та **Приховані**. Порожні розділи не відображаються.
- [Групові операції](#bulk-edit--delete) — Поділитися, перемістити або видалити кілька обраних точок одночасно.

### Порядок / Сортування / Пошук {#order--sorting--search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Обране android](@site/static/img/personal/favorites_points_sorting.webp) ![Обране android](@site/static/img/personal/favorites_folders_sorting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Обране iOS](@site/static/img/personal/favorites_points_sorting_ios.webp) ![Обране iOS](@site/static/img/personal/favorites_folders_sorting.webp)
</TabItem>

</Tabs>

- **Сортування** — Папки та точки "Обране" можна сортувати за допомогою доступних опцій сортування в меню списку. Для точок обраного доступні такі опції: *Назва A – Z*, *Назва Z – A*, *Останні зміни*, *Найближчі до поточного розташування*, *Найближчі до центру мапи*, *Спочатку новіша дата* та *Спочатку старіша дата*. Для папок обраного доступні такі опції: *Назва A – Z*, *Назва Z – A*, *Останні зміни*, *Спочатку новіша дата* та *Спочатку старіша дата*. За замовчуванням елементи сортуються за Назва A – Z. Закріплені папки завжди відображаються вгорі списку. Вони візуально відокремлені від решти папок роздільником. 
- **Пошук** — Використовуйте [Глобальний пошук](../search/search-all.md), щоб знайти обрані точки за назвою. Обрані точки сортуються за відстанню від центру мапи. Щоб знайти обрані точки зі списку Обране на вкладці Мої місця, торкніться піктограми *Пошук* (лупа).

### Групове редагування / видалення {#bulk-edit--delete}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії з Обраним android](@site/static/img/personal/favorites_group_actions.png) ![Дія видалення Обраного android](@site/static/img/personal/favorites_actions.png)

Щоб керувати кількома обраними точками або папками, увійдіть у *Режим вибору*. Режим вибору можна відкрити двома способами:
- Торкніться *меню з трьома крапками* у правому верхньому куті та виберіть *Вибрати*.
- Довго торкніться обраної точки або папки.

Коли режим вибору активовано, поруч з елементами списку з'являються прапорці. Виберіть необхідні обрані точки або папки, торкнувшись прапорців. Щоб вибрати всі елементи в списку, торкніться іконки "Вибрати все" у правому верхньому куті.

Доступні дії залежать від типу вибраного елемента. Коли вибрано папки, доступні такі дії:
- **Поділитися** — Експортувати вибрані папки як файл GPX Обраного.
- **Видалити** — Видалити вибрані папки.

Коли вибрано точки "Обране", доступні такі дії:
- **Перемістити** — Перемістити вибрані обрані точки до іншої папки.
- **Додати до маркерів на мапі** — Додати вибрані точки до списку маркерів на мапі.
- **Додати до треку** — Додати вибрані точки до треку.
- **Додати до навігації** — Почати навігацію до вибраної точки.
- **Видалити** — Видалити вибрані обрані точки.

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorites_actions_folders.webp) ![Дії з Обраним ios](@site/static/img/personal/favorites_actions_points.webp)

Щоб керувати кількома обраними точками або папками, увійдіть у *Режим вибору*, торкнувшись *меню з трьома крапками* у правому верхньому куті та вибравши *Вибрати*. Коли режим вибору активовано, поруч з елементами списку з'являються прапорці. Виберіть необхідні обрані точки або папки, торкнувшись прапорців. Щоб вибрати всі елементи в списку, торкніться іконки "Вибрати все" у правому верхньому куті.

Доступні дії для вибраних точок обраного:
- **Поділитися** — Експортувати вибрані точки як файл Favorites.gpx.
- **Перемістити** — Перемістити вибрані обрані точки до іншої папки.
- **Змінити вигляд** — Змінити вигляд вибраних обраних точок.
- **Додати до маркерів на мапі** — Додати вибрані точки до списку маркерів на мапі.
- **Додати до треку** — Додати вибрані точки до треку.
- **Додати до навігації** — Додати вибрані точки до навігації.
- **Видалити** — Видалити вибрані обрані точки.

Для вибраних папок доступні ті самі дії, а також додаткові опції:
- **Показати на мапі** / **Приховати на мапі** — Показати або приховати обрані точки з вибраних папок на мапі.
- **Закріпити** / **Відкріпити папку** — Закріпити або відкріпити вибрані папки.

</TabItem>

</Tabs>

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

![Функції папки Обраного android](@site/static/img/personal/favorites_folder_functions.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorite_add_new_group_2_ios.webp)

</TabItem>

</Tabs>

На Android використовуйте ***меню з трьома крапками*** поруч з кожною папкою, щоб керувати групами обраних точок. На iOS використовуйте ***довгий дотик*** до папки, щоб керувати групами обраних точок: 

- **<Translate android="true" ids="shared_string_show_on_map"/>** / **Приховати на мапі** — Перемикайте цю опцію, щоб відобразити або приховати обрані точки з папки на мапі.
- **<Translate android="true" ids="pin_folder"/>** — Закріпіть вибрану папку, щоб вона залишалася вгорі списку обраного для швидшого доступу.
- **<Translate android="true" ids="shared_string_rename"/>** — Використовуйте цю опцію, щоб змінити назву вибраної папки.
- [<Translate android="true" ids="change_default_appearance"/>](#change-group-appearance) — Налаштуйте вигляд обраних точок у папці на мапі, змінивши їхні іконки, кольори або мітки.
- **<Translate android="true" ids="shared_string_share"/>** — Поділіться обраними точками в папці, експортувавши їх у файл *Favorites.gpx*, що полегшує передачу або резервне копіювання ваших даних.
- **<Translate android="true" ids="shared_string_move"/>** — Перемістіть вибрану папку, включно з усіма обраними точками та вкладеними підпапками, до іншої папки. Поточну папку та її підпапки не можна вибрати як пункт призначення.
- **<Translate android="true" ids="shared_string_add_to_map_markers"/>** / **Видалити з маркерів на мапі** — Додайте всі обрані точки з папки до *Списку маркерів на мапі* або видаліть їх за потреби для зручності.
- **<Translate android="true" ids="add_to_a_track"/>** — Додайте всі обрані точки з вибраної папки до треку. Це відкриває екран вибору треку, де ви можете вибрати або створити трек.
- **Додати до навігації** (*лише iOS*) — Додайте всі обрані точки з вибраної папки до навігації.
- **<Translate android="true" ids="shared_string_delete"/>** — Назавжди видалити вибрану папку обраних точок та всі точки в ній.

### Змінити вигляд групи {#change-group-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Меню з трьома крапками → Змінити вигляд за замовчуванням*

![Функції папки Обраного android](@site/static/img/personal/favorite_change_appearance_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Довгий дотик до папки → Вигляд за замовчуванням*

![Дії з Обраним ios](@site/static/img/personal/favorite_add_new_group_3_ios.webp)

</TabItem>

</Tabs>

Опція **Змінити вигляд групи** дозволяє встановити стиль за замовчуванням для всіх обраних точок у папці. Ви можете налаштувати такі параметри:

- **Іконка** — Виберіть іконку з доступних категорій.
- **Колір** — Виберіть суцільний колір для виділення обраних точок.
- **Форма** — Виберіть форму маркера (коло, квадрат, октагон).

Якщо обрані точки в папці вже мають різні іконки, кольори або форми, відображається *Оригінальний стан*. Це означає, що кожна обрана точка зберігає свій поточний стиль, доки ви не виберете новий. Під час збереження вас також попросять вибрати, як застосовувати зміни:

- **Застосувати лише до нових точок** — Існуючі обрані точки залишаються незмінними; нові обрані точки успадковуватимуть вигляд за замовчуванням.
- **Застосувати до наявних точок** — Оновити лише обрані точки, які вже є в папці.
- **Застосувати до всіх точок** — Застосувати новий стиль як до наявних, так і до майбутніх обраних точок.

Ця гнучкість дозволяє стандартизувати вигляд папки або зберегти унікальні налаштування, одночасно встановлюючи значення за замовчуванням для нових точок.


## Експорт / Імпорт {#export--import}

OsmAnd надає кілька методів для [резервного копіювання](./import-export.md) та [відновлення](./import-export.md#import) обраних точок:

- **Місця для резервного копіювання** — Локальне сховище, [OsmAnd Cloud](../personal/osmand-cloud.md) (лише з [підпискою OsmAnd Pro або OsmAnd Start](../purchases/index.md)), або месенджери.

- **Формат файлу** — Обрані точки зберігаються у файлах `.gpx` (favorites.gpx). Використовуйте формат `.osf`, щоб створити резервну копію обраних точок разом із прикріпленими медіа. Імпорт резервної копії відновлює як обрані точки, так і пов’язані з ними медіа.


### Безкоштовне хмарне резервне копіювання {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,favourites"/>*

![Функції папки Обраного android](@site/static/img/personal/favorites_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Дії з Обраним ios](@site/static/img/personal/favorites_free_backup_2_ios.webp)

</TabItem>

</Tabs>

[Безкоштовне резервне копіювання Обраного](../personal/osmand-cloud.md#osmand-start) — це спеціальний план покупки, який дозволяє створювати резервні копії ваших обраних точок (місць) для версій **Android, iOS** або **Web** у додатку OsmAnd та відновлювати їх з OsmAnd Cloud. Цей план доступний для користувачів [OsmAnd Free або Maps+](../purchases/index.md).  

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

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_favorites"/>*

![Дії з Обраним ios](@site/static/img/personal/favorites_free_backup_purch_ios.png)

</TabItem>

</Tabs>

Для використання функції *Безкоштовне резервне копіювання налаштувань* вам потрібен обліковий запис OsmAnd Cloud. Якщо у вас є обліковий запис в *OsmAnd Pro* або активний обліковий запис в *OsmAnd Cloud acount*, ви не побачите рекламний банер.  

- *Банер безкоштовного резервного копіювання Обраного*. Торкніться цього банера, щоб розпочати процес резервного копіювання.
- *Завершіть крок реєстрації*, якщо у вас немає облікового запису OsmAnd Cloud, дотримуючись інструкцій у [посібнику з реєстрації](../personal/osmand-cloud.md#login).
- *Перейдіть до меню Покупки OsmAnd* (*Меню → Налаштування → Покупи*).
- *[Пакет OsmAnd Start](../personal/osmand-cloud.md#osmand-start)*. Виберіть цю опцію, щоб отримати доступ до функції безкоштовного резервного копіювання налаштувань.
- *Створіть резервну копію* ваших налаштувань.

<!--
### All Favorites {#all-favorites}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Favorites actions android](@site/static/img/personal/favorites_export_import_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites export import ios](@site/static/img/personal/favorites_export_import_3_ios.png)  

</TabItem>

</Tabs>

You can export and import your favorites using the special buttons at the bottom of the Favorites screen. A [.gpx file](../../technical/osmand-file-formats/osmand-gpx.md) (*favorites.gpx*) can be sent to Dropbox, email, messengers, and other applications installed on your device that support this feature.

- **Import** button (*Android*) / **Import favorite** (*iOS*). Allows you to import favorite points (*favorites.gpx*) as waypoints from a *GPX* file (a common GPS data format) from your device's storage.
- **Share** button (*Android*) / **Export favorite** (*iOS*). Allows you to export (share) all your favorites as a *favorites.gpx* file.
-->

### Група Обраного {#favorite-group}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Функції папки Обраного android](@site/static/img/personal/favorites_folder_functions_2_andr.webp)

</TabItem>

<TabItem value="ios" label="iOS">

![Дії з Обраним ios](@site/static/img/personal/favorites_actions_1_ios.webp) 
</TabItem>

</Tabs>

- Щоб поділитися кількома папками обраного, увійдіть у [Режим вибору](#bulk-edit--delete), виберіть потрібні папки та торкніться *Поділитися*.
- Щоб поділитися однією папкою обраного, торкніться меню з трьома крапками (*Android*) або довго торкніться папки (*iOS*), виберіть *Поділитися*, щоб надіслати файл Favorites.gpx у пам’ять пристрою або поділитися ним через месенджери. На Android, якщо папка містить прикріплені медіа, з’явиться нижній аркуш «Поділитися». Ви можете вибрати:
    - *Лише точки* — Поділитися обраними точками з папки як файлом GPX.
    - *Точки та медіа* — Поділитися обраними точками та прикріпленими медіа як архівом OSF.


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

Обрані точки також можуть містити посилання на прикріплені медіа за допомогою стандартних елементів GPX `<link>`. 


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