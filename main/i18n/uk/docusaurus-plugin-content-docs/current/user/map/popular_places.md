---
source-hash: 4ef49b31c6e39a6e616ea4ca53be88b94ec417f2fe83e471bd344baaf9664dfe
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

<!--
<InfoIncompleteArticle/>
-->

## Огляд {#overview}

Функція **Популярні місця** в OsmAnd висвітлює визначні пам'ятки та цікаві місця, використовуючи відкриті структуровані дані з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/). Вона допомагає користувачам досліджувати відомі місця з багатомовними описами та фотографіями.

Кожне місце, включене в цю функцію, пов'язане з **ID Wikidata**, що дозволяє OsmAnd відображати перевірені назви, зображення для попереднього перегляду та посилання на статті Вікіпедії. Цей інструмент **не** показує всі точки OpenStreetMap (OSM). Він обмежується POI з посиланнями на Wikidata.

Наразі підібрана база даних включає приблизно **від 50 000 до 150 000 найрейтинговіших місць** у всьому світі, відібраних з понад **1 мільйона** об'єктів Wikidata + OSM.

:::note
*Це перша версія функції "Популярні місця". Відгуки вітаються на [GitHub](https://github.com/osmandapp/OsmAnd)*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Popular places](@site/static/img/map/popular_places/popular_places.png) ![Popular places](@site/static/img/map/popular_places/popular_places_1.png)

</TabItem>

</Tabs>


## Джерела даних {#data-sources}

**Популярні місця** базуються на структурованому контенті з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/).

Відображаються лише POI з пов'язаним **ID Wikidata**. Ці ідентифікатори пов'язують об'єкти на мапі з перевіреними назвами, описами та зображеннями.

Ви можете переглянути посилання на Wikidata безпосередньо в [Контекстному меню мапи](../map/map-context-menu.md). Натискання на тег Wikidata відкриває повну сторінку об'єкта на сайті Wikidata.

Зображення та інший контент на основі Wikidata у Популярних місцях оновлюються за графіком і можуть не з'являтися негайно після змін у Wikidata чи Wikimedia Commons. Поточна частота оновлення: двічі на місяць — **10-го** та **20-го**.

Дізнайтеся, як знайти ID Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Як користуватися {#how-to-use}

<InfoAndroidOnly/>

Функція **Популярні місця** включає як підібраний список визначних пам'яток поблизу, так і шар POI на основі Вікіпедії на мапі.

Існує два основних способи доступу до цієї функції:

- **Безкоштовна версія**  
  Доступ через [Пошук](#explore-in-search) для перегляду найближчих місць у вигляді списку.  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*
  
  Цей список Дослідження показує місця Вікіпедії/Wikidata, ранжовані за популярністю, поблизу вас, і працює онлайн. Він відображає до 50 місць. Оскільки результати Дослідження/Вікіпедії ранжуються за рейтингом, порядок у цих результатах може відрізнятися від звичайного пошуку POI.

- **Платні версії** *(Maps+ and OsmAnd Pro)*  
  Увімкніть візуальний шар у [Налаштуваннях мапи](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  У цьому режимі популярні POI з'являються безпосередньо на мапі з мініатюрами для попереднього перегляду та вмістом з Вікіпедії.

  Ви можете перемикатися між **онлайн** та **офлайн** джерелами Вікіпедії в налаштуваннях шару. Дізнайтеся більше в розділі [Увімкнути шар](#enable-layer).


## Дослідити в Пошуку {#explore-in-search}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

![Explore Mode](@site/static/img/map/popular_places/popular_places_search.png)  
![Explore Mode](@site/static/img/map/popular_places/popular_places_search_2.png)

</TabItem>

</Tabs>

Розділ **<Translate android="true" ids="popular_places_nearby"/>** відображає список найпопулярніших пам'яток поблизу вашого поточного місцезнаходження, який можна прокручувати. Кожен елемент включає:

- Назву місця.
- Короткий опис.
- Тег категорії POI.
- Відстань та напрямок.
- Мініатюру зображення (за наявності).

Натисніть **Показати все**, щоб переглянути повний список, або **Показати на мапі**, щоб відобразити всі перелічені POI на мапі.

Натискання на будь-яке місце відкриває [контекстне меню POI](./map-context-menu.md), де ви можете переглянути фотографії та отримати доступ до пов'язаного [вмісту Вікіпедії](../plugins/wikipedia.md).

:::tip
Режим дослідження на основі пошуку працює **лише онлайн** у безкоштовній версії.  
Щоб використовувати його **офлайн**, вам потрібна підписка [Maps+ or OsmAnd Pro](../purchases/android.md) та завантажені [карти Вікіпедії](../plugins/wikipedia.md).
:::


## Увімкнути шар {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Popular places menu](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

Функція **Popular Places (Wikipedia)** доступна в меню [Налаштування мапи](./configure-map-menu.md). Щоб відображати популярні місця безпосередньо на мапі, увімкніть шар POI з даними з Вікіпедії, використовуючи зображення з Wikidata.

Перед використанням цієї функції:

- Переконайтеся, що [плагін Вікіпедії](../plugins/wikipedia.md) увімкнено.
- Завантажте дані Вікіпедії для вашого регіону, якщо ви хочете використовувати їх в офлайн-режимі.

### Опції шару {#layer-options}

Після ввімкнення стають доступними наступні опції:

- **<Translate android="true" ids="poi_osmwiki"/>** – Перемикання відображення POI Вікіпедії на мапі.

- **Джерело POI** – Перемикання між:
  - *Лише офлайн* режим — використовує завантажені дані карти Вікіпедії для вашого регіону. 
  - *Лише онлайн* режим — завантажує місця та попередні перегляди зображень онлайн. Онлайн-результати можуть залежати від ваших налаштувань мови.

- **<Translate android="true" ids="shared_string_language"/>** – Вибір мови для описів з Вікіпедії.

- **<Translate android="true" ids="show_image_previews"/>** – Показувати мініатюри зображень з Wikidata поруч з POI. Якщо попередні перегляди зображень вимкнено, Популярні місця відображаються з іконками замість мініатюр на мапі. Попередні перегляди зображень використовують зображення, пов'язані з Wikidata/Wikipedia: у *Лише офлайн* режимі попередні перегляди залежать від завантажених даних Вікіпедії, тоді як у *Лише онлайн* режимі попередні перегляди завантажуються онлайн.

Натискання на POI на мапі відкриває [контекстне меню POI](./map-context-menu.md), де ви можете переглянути [онлайн-фотографії](#online-photos) та отримати доступ до пов'язаних [статей Вікіпедії](../plugins/wikipedia.md).


## Онлайн-фотографії {#online-photos}

*<Translate android="true" ids="help_article_map_map_context_menu_name,online_photos"/>*

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/popular_places/online_photos_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/popular_places/online_photos_ios.png)

</TabItem>

</Tabs>

Це розділ у [контекстному меню POI](./map-context-menu.md), який відображає попередній перегляд фотографій обраного Популярного місця (Вікіпедія). Ви можете прокручувати по горизонталі, щоб переглянути доступні фотографії, або торкнутися будь-якого зображення, щоб відкрити його в [повноекранному режимі](#gallery).

Зображення, переглянуті онлайн, автоматично кешуються для офлайн-доступу. Кешовані фотографії відображають маленьку позначку офлайн-режиму в кутку. Сітка попереднього перегляду адаптується до розміру екрана на iPadOS та macOS, забезпечуючи зручне розміщення зображень на більших дисплеях. OsmAnd також уникає повторних мережевих запитів при закритті розділу Онлайн-фотографії та скасовує попередні запити при швидкому перемиканні між різними POI.

<!-- 
Learn more about additional options in the [Actions](#actions) section and [Gallery](#gallery).


When you tap a Popular Place on the map or from the list, the [POI context menu](./map-context-menu.md) includes an **Online Photos** section with a horizontal preview of images.

- Tap any photo to view it in fullscreen.  
- Swipe to browse more images.

For more actions like sharing, viewing metadata, or downloading — see [Gallery](#gallery).


### Actions {#actions}

In the Map Context menu How to access:

- Tap the **Show All** (Android) / **View All** (iOS) button to open the [gallery](#gallery) in full screen mode, where you can swipe through all available photos for the selected location.

- Tap any photo to view it in [full screen](#gallery) and access the available actions:  
  **Share**, **Details**, **Open in browser**, and **Download**.

-->

### Галерея {#gallery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Gallery Menu – Android](@site/static/img/map/gallery_menu_android.png)
![Gallery Menu – Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios.png)
![Gallery Menu – iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>

**Меню галереї** може відображати до **100 зображень**, пов'язаних з обраною точкою інтересу. Щоб переглянути ці зображення, натисніть **Показати все** (Android) / **Переглянути все** (iOS). Ви можете перегортати всі доступні фотографії. Коротке натискання на фотографію відкриває детальний перегляд, що показує: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*. 

На iOS, iPadOS та macOS ви можете переглядати фотографії за допомогою клавіш клавіатури (←/→ для переміщення між зображеннями, Enter/Space для відкриття).

Ви також можете виконати наступні дії з кожною фотографією:

- **Поділитися**  
  Поділіться вибраним зображенням за допомогою будь-якого сумісного додатка, встановленого на вашому пристрої (наприклад, месенджери, електронна пошта або соціальні мережі). Спільний вміст включає зображення та посилання на його джерело (за наявності).

- **Деталі**  
  Відкрийте детальний перегляд, що показує метадані про зображення, включаючи: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Пряме посилання*

- **Відкрити в браузері**  
  Запустіть сторінку джерела зображення (зазвичай на [Wikimedia Commons](https://commons.wikimedia.org/)) у вашому браузері за замовчуванням. Це дозволяє переглянути повне зображення, інформацію про ліцензування та пов'язаний вміст.

- **Завантажити**  
  Збережіть зображення в сховищі пристрою. Завантажене зображення можна знайти в папці "Завантаження" вашого пристрою за замовчуванням і отримати до нього доступ в автономному режимі.


**Примітка:** Завантаження зберігає зображення в сховище пристрою для постійного офлайн-використання, тоді як кешовані фотографії зберігаються автоматично та доступні офлайн лише в межах додатка.

<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

The Android version does not include an additional menu for photo actions.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Context Menu Options](@site/static/img/map/gallery_menu_ios_3.png)

On **iOS**, long-pressing a photo opens a context menu with additional actions:

- **Details**  
- **Open in browser**  
- **Download**

**Buttons**:

- The **Share** button lets you quickly share the selected image.  
- The **three-dot menu** provides access to extra actions, including viewing details, opening the source in a browser, or downloading the image.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Android – Details View](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Details View](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

The **Details** screen provides full metadata for the selected photo, including: *Name*, *Date added*, *Author*, *License*, *Source*, and *Direct link*
-->


## Пов'язані статті {#related-articles}

- [Контекстне меню мапи](./map-context-menu.md)
- [Налаштування мапи](./configure-map-menu.md)
- [Пошук POI](../search/search-poi.md)
- [Плагін Вікіпедії](../plugins/wikipedia.md)





<!--
### Online Photos 2

<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android.png)   ![Street-Level Imagery Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios.png)   ![Street-Level Imagery iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


The gallery can display up to 100 items. You can browse through all the photos, and short tapping on any photo will open it to view additional details (*Name*, *Date*, *Author*, *License*) and perform various actions (*Share*, *Details*, *Open in browser*, and *Download* options).


<Tabs groupId="operating-systems" queryString="current-os">

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

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/gallery_menu_ios_2.png) 

</TabItem>

</Tabs>


The Details screen provides information such as the *Name*, *Added Date*, *Author*, *License*, *Source*, and *Link* of the selected item.

-->