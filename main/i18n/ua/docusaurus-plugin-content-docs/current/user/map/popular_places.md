---
source-hash: bf7cd90ca8366333a9c3f68cad51bd9bd86dd6ed8b14a48fdd6c58dac62dff86
sidebar_position: 8
title: Популярні місця
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

Функція **Популярні місця** в OsmAnd виділяє визначні пам'ятки та атракціони, використовуючи відкриті структуровані дані з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/). Вона допомагає користувачам досліджувати відомі місця з багатомовними описами та фотографіями.

Кожне місце, включене до цієї функції, пов'язане з **ідентифікатором Wikidata**, що дозволяє OsmAnd відображати перевірені назви, зображення для попереднього перегляду та посилання на статті Wikipedia. Цей інструмент **не** показує всі точки OpenStreetMap (OSM). Він обмежений POI з посиланнями на Wikidata.

Наразі курована база даних містить приблизно **50 000 - 150 000 найкращих місць** у всьому світі, відібраних з понад **1 мільйона** об'єктів Wikidata + OSM.

:::note
*Це перша версія функції Популярні місця. Відгуки вітаються на [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Популярні місця](@site/static/img/map/popular_places/popular_places.png) ![Популярні місця](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


### Джерела даних

**Популярні місця** базуються на структурованому вмісті з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/).

Відображаються лише POI з пов'язаним **ідентифікатором Wikidata**. Ці ідентифікатори пов'язують об'єкти карти з перевіреними назвами, описами та зображеннями.

Ви можете переглянути посилання на Wikidata безпосередньо в [Контекстному меню карти](../map/map-context-menu.md). Натискання на тег Wikidata відкриває повну сторінку об'єкта на вебсайті Wikidata.

Дізнайтеся, як знайти ідентифікатор Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Як використовувати {#how-to-use}

<InfoAndroidOnly/>

Функція **Популярні місця** включає як курований список визначних пам'яток поблизу, так і шар POI на основі Wikipedia на карті.

Існує два основних способи доступу до цієї функції:

- **Безкоштовна версія**  
  Доступ через [Пошук](#explore-in-search) для дослідження місць поблизу у вигляді списку.  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Платні версії** *(Maps+ та OsmAnd Pro)*  
  Увімкніть візуальне накладання в [Налаштувати карту](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  У цьому режимі популярні POI з'являються безпосередньо на карті з мініатюрними попередніми переглядами та вмістом Wikipedia.

Ви можете перемикатися між **онлайн** та **офлайн** джерелами Wikipedia в налаштуваннях накладання. Дізнайтеся більше в [Увімкнути шар](#enable-layer).


## Дослідити в Пошуку {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Режим дослідження](@site/static/img/map/popular_places/popular_places_search.png)  
![Режим дослідження](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

Розділ **<Translate android="true" ids="popular_places_nearby"/>** відображає список визначних пам'яток з високим рейтингом поблизу вашого поточного місцезнаходження, який можна прокручувати. Кожен елемент включає:

- Назва місця.
- Короткий опис.
- Тег категорії POI.
- Відстань та напрямок.
- Мініатюрне зображення (якщо доступне).

Натисніть **Показати все**, щоб переглянути повний список, або **Показати на карті**, щоб відобразити всі перелічені POI на карті.

Натискання на будь-яке місце відкриває [Контекстне меню POI](./map-context-menu.md), де ви можете переглянути фотографії та отримати доступ до пов'язаного [вмісту Wikipedia](../plugins/wikipedia.md).

:::tip
Режим дослідження на основі пошуку працює **лише онлайн** у безкоштовній версії.  
Щоб використовувати його **офлайн**, вам потрібна підписка [Maps+ або OsmAnd Pro](../purchases/android.md) та завантажені [карти Wikipedia](../plugins/wikipedia.md).
:::


## Увімкнути шар {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Меню популярних місць](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

Функція **Популярні місця (Wikipedia)** доступна в [меню Налаштувати карту](./configure-map-menu.md). Щоб відобразити популярні місця безпосередньо на карті, увімкніть шар POI з даними з Wikipedia, використовуючи зображення Wikidata.

Перед використанням цієї функції:

- Переконайтеся, що [Плагін Wikipedia](../plugins/wikipedia.md) увімкнено.
- Завантажте дані Wikipedia для вашого регіону, якщо ви хочете використовувати їх офлайн.

### Параметри шару

Після увімкнення стають доступними наступні параметри:

- **<Translate android="true" ids="poi_osmwiki"/>** – Перемикання POI Wikipedia на карті.

- **Джерело POI** – Перемикання між:
  - *Офлайн-режим* (статті Wikipedia мають бути завантажені).
  - *Лише онлайн* режим (використовує живі дані та зображення).

- **<Translate android="true" ids="shared_string_language"/>** – Виберіть мову для описів Wikipedia.

- **<Translate android="true" ids="show_image_previews"/>** – Показувати мініатюри зображень з Wikidata поруч з POI.

Натискання на POI на карті відкриває [Контекстне меню POI](./map-context-menu.md), де ви можете переглянути [онлайн-фотографії](#online-photos) та отримати доступ до пов'язаних [статей Wikipedia](../plugins/wikipedia.md).


## Онлайн-фотографії {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Контекстне меню онлайн-фотографій Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню онлайн-фотографій iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

Це розділ у [Контекстному меню POI](./map-context-menu.md), який відображає попередній перегляд фотографій вибраного Популярного місця (Wikipedia). Ви можете прокручувати горизонтально, щоб переглядати доступні фотографії, або натиснути на будь-яке зображення, щоб відкрити його в [повноекранному режимі](#gallery).

Дізнайтеся більше про додаткові параметри в розділі [Дії](#actions) та [Галерея](#gallery).


<!-- 

When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).

-->

### Дії {#actions}

У контекстному меню карти Як отримати доступ:

- Натисніть кнопку **Показати все** (Android) / **Переглянути все** (iOS), щоб відкрити [галерею](#gallery) у повноекранному режимі, де ви можете прокручувати всі доступні фотографії для вибраного місця.

- Натисніть на будь-яку фотографію, щоб переглянути її в [повноекранному режимі](#gallery) та отримати доступ до доступних дій:  
  **Поділитися**, **Деталі**, **Відкрити в браузері** та **Завантажити**.


### Галерея {#gallery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Меню галереї – Android](@site/static/img/map/gallery_menu_android.png)
![Меню галереї – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню галереї – iOS](@site/static/img/map/gallery_menu_ios.png)
![Меню галереї – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


**Меню галереї** може відображати до **100 зображень**, пов'язаних з вибраною точкою інтересу. Ви можете прокручувати всі доступні фотографії. Коротке натискання на будь-яку фотографію відкриває детальний перегляд, що показує: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*  

Ви також можете виконати наступні дії з кожною фотографією:

- **Поділитися**  
  Поділіться вибраним зображенням за допомогою будь-якої сумісної програми, встановленої на вашому пристрої (наприклад, месенджера, електронної пошти або соціальних мереж). Спільний вміст включає зображення та посилання на його джерело (якщо доступне).

- **Деталі**  
  Відкрийте детальний перегляд, що показує метадані про зображення, включаючи: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Пряме посилання*

- **Відкрити в браузері**  
  Запустіть сторінку джерела зображення (зазвичай на [Wikimedia Commons](https://commons.wikimedia.org/)) у вашому браузері за замовчуванням. Це дозволяє переглядати повне зображення, інформацію про ліцензування та пов'язаний вміст.

- **Завантажити**  
  Збережіть зображення на сховище вашого пристрою. Завантажене зображення можна знайти в папці завантажень за замовчуванням вашого пристрою та отримати доступ до нього офлайн.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Версія для Android не включає додаткове меню для дій з фотографіями.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Параметри контекстного меню](@site/static/img/map/gallery_menu_ios_3.png)

На **iOS**, тривале натискання на фотографію відкриває контекстне меню з додатковими діями:

- **Деталі**  
- **Відкрити в браузері**  
- **Завантажити**

**Кнопки**:

- Кнопка **Поділитися** дозволяє швидко поділитися вибраним зображенням.  
- Кнопка **три крапки** надає доступ до додаткових дій, включаючи перегляд деталей, відкриття джерела в браузері або завантаження зображення.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Android – Детальний перегляд](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Детальний перегляд](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

Екран **Деталі** надає повні метадані для вибраної фотографії, включаючи: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Пряме посилання*


## Пов'язані статті

- [Контекстне меню карти](./map-context-menu.md)
- [Налаштувати карту](./configure-map-menu.md)
- [Пошук POI](../search/search-poi.md)
- [Плагін Wikipedia](../plugins/wikipedia.md)


> *Останнє оновлення: Червень 2025*


<!--
### Online Photos 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)   ![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Actions With Photos

How to access:

- Tap the **Show All**(Android) / **View All**(iOS) button to open [the gallery](#gallery-menu) in full screen mode. There you can swipe through all the images related to the selected location.

- Tap a photo to access actions such as *Share*, *Details*, *Open in browser*, and *Download*.

- You can also [browse](../map/point-layers-on-map.md#-street-level-imagery) street-level images on the map.  

In the **Online photos** section of the map context menu, you can access photos of objects from the [Wikimedia](https://www.wikimedia.org/), which offers media files tagged with `image` or `wikimedia` from OpenStreetMap.

#### Gallery Menu 2

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_3.png) 

</TabItem>

</Tabs>



On iOS, long tapping on any photo opens an additional menu with actions such as *Details*, *Open in browser*, and *Download*.

Buttons:

- The **Share** button allows you to share the selected item.  
- The **Three dots** button opens a menu with options like *Details*, *Open in browser*, and *Download*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->