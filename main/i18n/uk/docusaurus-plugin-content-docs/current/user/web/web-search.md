---
source-hash: e8f044473acdc81152b6ac5081df28b86a07fd654cf5ea4de38da7f569d022b7
sidebar_position: 10
sidebar_label:  Пошук
title: Пошук на веб-сайті
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

<!--
<InfoIncompleteArticle/>
-->


## Огляд {#overview}

**Меню пошуку** можна відкрити з бічної панелі або з іконки пошуку 🔍 на карті. Воно містить:

- [Рядок пошуку](#search-bar). Введіть ключові слова для пошуку конкретних місць або точок інтересу.  
- [Розділ Категорії](#categories). Переглядайте категоризовані опції для спрощення пошуку POI.  
- [Розділ Дослідити](#explore). Переглядайте популярні POI для поточного центру карти та досліджуйте місця з фотографіями на карті.

![Search menu](@site/static/img/web/search.png)

## Опції пошуку {#search-options}

### Рядок пошуку {#search-bar}

Використовуйте **Рядок пошуку**, щоб знайти конкретні місця або точки інтересу за назвою. Натисніть іконку пошуку, введіть запит і виберіть результат зі списку. Вибір POI відкриває [Контекстне меню POI](#poi-context-menu), де ви можете переглянути деталі та використовувати швидкі дії.

Якщо ви шукаєте за назвою категорії, перший результат може показати відповідну категорію POI. Натисніть на категорію, щоб відкрити представлення [Пошуку за категоріями](#categories).

![Опції пошуку](@site/static/img/web/search_bar.png)

### Категорії {#categories}

Використовуйте **Категорії**, щоб переглядати POI за типом і відображати їх на карті. Меню показує шість популярних категорій для швидкого доступу. Якщо потрібно більше опцій, натисніть Показати всі, щоб відкрити повний список із 18 доступних категорій. Вибір категорії відображає відповідні POI на карті; вибір POI відкриває [Контекстне меню POI](#poi-context-menu).

![Опції пошуку](@site/static/img/web/search_categories.png)

### Дослідити {#explore}

Розділ **Дослідити** показує [популярні місця](https://osmand.net/docs/user/map/popular_places) з фотографіями безпосередньо на карті. Він створює список POI для поточного центру карти (сортований за популярністю) і відображає ті самі місця як маркери з фото на карті. Попередні зображення та інформація POI базуються на Wikidata/Wikimedia та пов'язаних джерелах, коли вони доступні.

Відкрийте вкладку Пошуку, щоб отримати доступ до Дослідити — результати Дослідити відображаються на карті автоматично. Використовуйте Показати всі, щоб відкрити повний список категорій Дослідити. Ви можете уточнити те, що з'являється в списку та на карті, використовуючи Фільтр, який відкриває меню категорій Дослідити. Вибір POI зі списку або на карті відкриває [Контекстне меню POI](#poi-context-menu).

![Опції пошуку](@site/static/img/web/search_explore.png) ![Опції пошуку](@site/static/img/web/explore_filters.png)

## Контекстне меню POI {#poi-context-menu}

Незалежно від того, яку опцію пошуку ви використовуєте (Рядок пошуку, Категорії чи Дослідити), вибір POI на карті або в списку результатів відкриває Контекстне меню POI. Контекстне меню є основним місцем для перегляду інформації POI та виконання поширених дій. Воно поєднує деталі POI (такі як місцезнаходження та пов'язані дані) з швидкими діями (наприклад, збереження, поширення або початок навігації).

### Деталі POI {#poi-details}

**Контекстне меню POI** відображає ключову інформацію про вибране місце та надає посилання на основі доступних даних OSM та Wikimedia/Wikidata:
- **Назва та іконка** — показує назву POI та її іконку.
- **Відстань та напрямок** — показує відстань і напрямок до POI.
- **Місцезнаходження** — відображає координати POI.
- **Години роботи** — показує розібрані години роботи з [даних OSM](https://wiki.openstreetmap.org/wiki/Key:opening_hours). Поточний статус відображається динамічно залежно від поточного часу (наприклад, *Відкрито зараз*, *Закрито* або *Відкривається о 10:00*), а повний розклад показано нижче.
- **Опис** — надає додаткову інформацію про POI, коли доступна (наприклад, з Вікіпедії).
- **Онлайн фото** — показує фото Wikimedia, пов'язані з POI, коли доступні. Виберіть Показати всі, щоб відкрити Галерею фото. Виберіть фото, щоб відкрити його в галереї (Режим відкритого фото).
- **Дані об'єкта** — додаткова інформація POI, включаючи теги OSM та інші деталі, такі як контакти, соціальні посилання, посилання на Вікіпедію та Wikivoyage, описи та написи (коли доступні).
- **OSM ID** — ідентифікатор OpenStreetMap POI.
- **Координати** — виберіть координати, щоб скопіювати їх.

![Контекстне меню POI](@site/static/img/web/poi_context_menu_new.png)

### Дії POI {#poi-actions}

**Контекстне меню POI** включає кнопки дій для поширених завдань. Використовуйте ці швидкі дії, щоб зберегти місце, поширити його або почати планування маршруту та навігації:
- **Додати до обраного** — зберігає POI у ваших [Обраних](../web/web-favorites.md#favorites-actions).
- **Поділитися** — генерує посилання для поширення, яке відкриває POI безпосередньо в OsmAnd Web. Посилання включає назву POI, тип та координати (закріпка).
- **Напрямки з** — встановлює вибраний POI як початкову точку та відкриває панель маршруту, щоб ви могли обрати пункт призначення та профіль.
- **Навігація** — встановлює вибраний POI як пункт призначення для [навігації](../web/web-navigation.md#start-a-route).

<!--
Click the **🔍 button** to start the search. Enter a query in the **Search Line** and click on POI to open the [**POI Context Menu**](#explore-poi-data), where you can view the tags information.

If you search by **Category name**, the first result will display the category of that POI.  If you click on a POI category, the [**Categories Search**](#categories) window opens.

![Context Menu POI](@site/static/img/web/context_menu_poi.png)


Click the chosen POI on the map or in the result list opens the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/context_menu_poi_1.png)

## Categories {#categories}

You can choose and display one POI category on the map in the **Categories Menu**:

- Select from the **6 most popular categories**.  
- Or click **Show All** to open the full list of POI categories.

![Categories POI](@site/static/img/web/categories_poi.png)

Click the selected  POI on the map or in the results list to open the **POI Context Menu**. This menu provides the following data and links:

- **Name and Icon**. Displays the name and icon of the POI.  
- **★ Button (*Add to Favorites*)**. Allows you to save the chosen POI as a [favorite](../web/web-favorites.md#favorites-actions).  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Online Photos**. Provides Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, descriptions, inscriptions, etc.  
- **OSM ID**. The OpenStreetMap ID of the POI.  
- **Coordinates**. Clicking the coordinates allows you to copy them.

![Context Menu POI](@site/static/img/web/categories_poi_1.png)


## Explore {#explore}

The **Explore** section in the Search menu makes it easier to find places and view points of interest (POIs) with their photos ([Wikidata source](https://www.wikidata.org/)) directly on the map.


To get started:

1. Click the **🔍 icon** to open the search tab, which displays popular POI categories and the **Explore** menu below.  
2. The **Explore** data will automatically be displayed on the map.  
3. Select **"Show All"** in the Explore section to open the full categories list with the ***Filter*** button at the top.  

   ![Explore menu](@site/static/img/web/explore.png)

4. Pressing the ***Filter* button** opens the Categories menu for "Explore." To refine your search, open the Categories menu and select the items you are interested in.  

   ![Explore menu](@site/static/img/web/explore_cat.png)

### Explore POI data {#explore-poi-data}

Clicking on an image POI opens a new context menu that includes:

- **Name and POI Tag**. Displays the name and general tag of the POI.  
- **🔍 Button**. Moves the map to the POI's location.  
- **Distance and Direction**. Shows the distance and direction from your location to the chosen POI.  
- **Location**. Displays the coordinates of the POI.  
- **Description**. Provides additional information about the POI.  
- **Online Photos**. Displays Wikimedia data related to the POI, if available. Click the *Show All* to open the [Photo Gallery](#photo-gallery).  
- **Object Data**. Includes details such as contacts, social media links, Wikipedia links, etc.  
- **OSM ID**. Displays the OpenStreetMap ID of the POI.  
- **Coordinates**. By clicking on the coordinates, you can copy them.

![Explore menu](@site/static/img/web/poi_context.png)
-->

### Галерея фото {#photo-gallery}

Натисніть ***Показати всі*** у розділі **Онлайн фото** Контекстного меню POI, щоб відкрити *Галерею фото* для вибраного POI. Галерея дозволяє переглядати всі доступні фото. Натисніть на фото, щоб відкрити його у збільшеному вигляді (Режим відкритого фото). Використовуйте Назад, щоб повернутися до Контекстного меню POI.

Деталі фото включають:
- **Дата**. Дата, коли фото було зроблено або завантажено.  
- **Автор**. Ім'я автора фото.  
- **Інформація про ліцензію**. Деталі про права на використання фото.  
- **Опис**. Додаткова інформація про фото.

![Галерея фото](@site/static/img/web/poi_photo.png)


## Пов'язані статті {#related-articles}

- [Пошук усього](../search/search-all.md)
- [Пошук POI](../search/search-poi.md)
- [Карта](../web/web-map.md)