---
source-hash: 775bf966f48a4b8cd9f307c8eaf529edb3d58a0239efed54d53cad90c3c1bca4
sidebar_position: 6
sidebar_label: Favorites
title: Favorites
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

Улюблені місця в веб-планувальнику дозволяють зберігати та керувати важливими місцями безпосередньо на карті. Їх можна використовувати для позначення локацій, до яких ви хочете швидкий доступ, організації їх у папки та повторного використання для навігації чи планування маршрутів. Веб-інтерфейс надає зручні інструменти для перегляду, редагування та роботи з улюбленими місцями під час дослідження карти, з усіма оновленнями, що безшовно синхронізуються через ваш [OsmAnd Cloud](../personal/osmand-cloud.md).


## Керування улюбленими місцями {#manage-favorites}

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_1_new.png)

Після входу в обліковий запис [**OsmAnd Pro**](../personal/osmand-cloud.md#login) або [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) ваші Улюблені місця в веб-планувальнику організовані в папки. Кожна папка групує збережені місця та надає набір дій, доступних з меню Улюблених місць. 
Доступні такі дії:

- *Show on map* - show favorites points from the chosen folder on the map.
- *Pin folder* - pin a folder to the top of the Favorites list for quick access. Pinned folders are separated from other folders. To remove a folder from the top section, select *Unpin folder*. The Personal folder is pinned by default.
- *Rename* - name and description of favorite folder.
- *Share* - opens sharing options. You can choose who can access this folder.
- *Download* - download the chosen favorite folder.
- *Delete* - delete the chosen favorite folder.

Коли ви вибираєте папку улюблених місць, карта автоматично центрується та регулює рівень масштабування, щоб показати всі точки улюблених місць із цієї папки у видимій області карти.

Ви також можете скористатися кнопкою **Focus**, щоб приховати всі інші улюблені місця та треки на карті, що полегшує перегляд вибраної папки. Вимкніть режим Focus, щоб відновити видимість інших об’єктів карти.

### Поділитися {#share}

Вибір **Share** відкриває екран поширення, де можна налаштувати доступ до папки Улюблених місць. Можна обрати один з таких режимів доступу:
- *Private*. Тільки ви можете переглядати папку. Перехід до Private скасовує доступ для всіх раніше схвалених користувачів. Перед застосуванням зміни показується діалог підтвердження.
- *Request only*. Будь-хто з посиланням може запитати доступ. Запити з'являються в списку Pending, де їх можна схвалити, відхилити або заблокувати.
- *Anyone*. Будь-хто з посиланням може переглядати папку негайно, без схвалення.  
Залежно від вибраного режиму доступу, кнопка **Copy link** стає доступною. Посилання можна поширити для перегляду або запиту доступу.

Екран поширення включає три списки користувачів:
- Approved — користувачі, які наразі мають доступ до папки.
- Pending — користувачі, які запитали доступ і очікують схвалення або відхилення.
- Blocked — користувачі, яким не дозволено доступ або запит доступу.  
Кожен запис користувача включає меню, яке дозволяє змінювати їхній статус або видаляти доступ.

Під час налаштування доступу можуть з'являтися такі діалоги:
- *Change access*. Відображається при перемиканні папки на Private. Діалог попереджає, що весь існуючий доступ користувачів буде скасовано перед підтвердженням зміни.
- *Access requests*. Відображається при керуванні користувами в списку Pending, дозволяючи схвалювати або відхиляти запити доступу.

![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share.png) ![OsmAnd Web cloud Favorites edit](@site/static/img/web/favorites_share_2.png)


## Деталі улюблених місць {#favorites-details} 

Вибір улюбленого місця відкриває панель **Details**. Ця панель з'являється, коли ви клікаєте на улюблене місце безпосередньо на карті або вибираєте його з папки улюблених місць.

Перегляд Details надає інформацію, пов'язану з вибраним місцем, і залежить від доступних даних для цього конкретного улюбленого місця. Мінімум, це включає локацію на карті та її географічні координати. Для місць, пов'язаних з об'єктами OpenStreetMap або збагаченими джерелами, можуть відображатися додаткові метадані, такі як назви, категорії, ідентифікатори або посилання (наприклад, на Wikipedia або Wikidata). 

![Web Favorites Details](@site/static/img/web/favorites_details.png)


## Дії з улюбленими місцями {#favorites-actions}

[Щоб додати](../personal/favorites.md#manage-favorites) нову точку улюбленого місця, клацніть правою кнопкою миші на екрані. 

Щоб редагувати існуюче улюблене місце, клацніть на точку улюбленого місця безпосередньо на карті або виберіть її з папки улюблених місць. Це відкриває панель Details, де доступна дія Edit. Редагування також можна розпочати з меню з трьома крапками (⋮) поруч з улюбленим місцем у списку Улюблених.

Панель редагування улюбленого місця дозволяє змінювати основні властивості улюбленого місця, включаючи його назву, адресу, опис, папку, іконку, колір та форму. Вибраний вигляд попередньо переглядається як у панелі редагування, так і безпосередньо на карті.

### Редагувати улюблені місця {#edit-favorites}

Поле **Address** підтримує автоматичне визначення адреси на основі вибраного розташування на карті. Поле може відображатися в кількох станах:

- Searching... — відображається під час автоматичного визначення адреси.
- Empty field — відображається після очищення адреси. У цьому стані можна скористатися кнопкою розташування, щоб знову автоматично визначити адресу.
- Filled field — відображає або автоматично визначену адресу, або введений вручну текст.

Поле адреси також містить швидкі дії для очищення або відновлення визначеної адреси.

Розділ **Description** дозволяє додавати примітки або додаткову інформацію до улюбленого місця. Вибір Add notes відкриває редактор опису в другорядній панелі. Якщо опис уже додано, у головній панелі відображається короткий попередній перегляд, обмежений двома рядками тексту. Редактор опису підтримує форматування розширеного тексту та автоматично зберігає зміни під час повернення до попередньої панелі.

Улюблені місця можна організовувати в папки для зручнішого керування та швидкого доступу. Вибір пункту **Folder** відкриває другорядну панель, де можна вибрати доступні папки. Раніше використана папка вибирається автоматично за замовчуванням. Кожна папка також показує кількість точок улюблених місць, що в ній зберігаються.

Нові папки можна створювати безпосередньо з панелі вибору папок. Вибір кнопки Add folder відкриває діалог, де можна ввести назву папки та вибрати її розташування в списку Улюблених.

Діалог також містить розділ Advanced, де можна налаштувати параметри вигляду папки за замовчуванням. Ці параметри включають колір, іконку та форму за замовчуванням, які автоматично застосовуватимуться до точок улюблених місць, доданих до цієї папки.

![Web Edit Folder](@site/static/img/web/edit_folder.png)

### Вигляд {#appearance}

Розділ **Appearance** дозволяє налаштувати відображення улюбленого місця на карті. Доступні такі властивості: icon, color, and shape. 

Вибір **Icon** відкриває другорядну панель із згрупованими категоріями іконок.

- Icons are grouped by categories.
- Recently used icons are displayed first.
- The currently selected icon is highlighted.
- The preview uses the selected shape and color.

Вибір **Color** відкриває панель палітри кольорів.

- The palette contains predefined and user-defined colors.
- Custom colors can be added using the color picker.
- Colors can be edited, duplicated, or removed through the context menu.
- Newly added colors are saved in the user palette and remain available later.

Параметр **Shape** визначає фонову форму, що використовується для маркера улюбленого місця.  Доступні такі форми: circle, square, and octagon.

Попередній перегляд вигляду оновлюється негайно як у панелі редагування, так і на карті під час зміни іконки, кольору чи форми.

![Web Edit Appearance](@site/static/img/web/edit_icon.png)

### Інші дії {#other-actions}

Окрім редагування, кожне улюблене місце надає кілька інших дій, які можна отримати з панелі Details або з меню з трьома крапками (⋮) у списку Улюблених:
- *Delete* - removes the selected favorite permanently. This action is available both from the Details panel and from the three-dot menu. Deletion affects the favorite across all devices after synchronization.
- *Share* - this action allows you to share a direct link to the place.
- *Directions from* - sets the selected favorite as the start point for route planning. The Route panel opens automatically, allowing you to choose a destination and navigation profile.
- *Navigation* - sets the selected favorite as the destination point. 


## Пов'язані статті {#related-articles}

- [Favorites](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)
- [Map Context Menu](../map/map-context-menu.md)
- [Wikipedia](../plugins/wikipedia.md)