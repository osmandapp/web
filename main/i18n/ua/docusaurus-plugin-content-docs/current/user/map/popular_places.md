---
source-hash: d75ad3804eeca9eb61868dea2e5fba36805d1995c588baa7b55339706bc38355
sidebar_position: 8
title: Популярні місця
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';
<InfoIncompleteArticle/>
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';

import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
## Огляд {#overview}
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

import Translate from '@site/src/components/Translate.js';
Функція **Популярні місця** в OsmAnd виділяє визначні пам'ятки та атракціони, використовуючи відкриті структуровані дані з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/). Вона допомагає користувачам досліджувати відомі місця з багатомовними описами та фотографіями.
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

Кожне місце, включене до цієї функції, пов'язане з **ID Wikidata**, що дозволяє OsmAnd відображати перевірені назви, зображення для попереднього перегляду та посилання на статті у Вікіпедії. Цей інструмент **не** показує всі точки OpenStreetMap (OSM). Він обмежений POI з посиланнями на Wikidata.

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

Відображаються лише POI з пов'язаним **ID Wikidata**. Ці ID пов'язують об'єкти на карті з перевіреними назвами, описами та зображеннями.

Ви можете переглянути посилання на Wikidata безпосередньо в [Контекстному меню карти](../map/map-context-menu.md). Натискання на тег Wikidata відкриває повну сторінку об'єкта на вебсайті Wikidata.

Дізнайтеся, як знайти ID Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


### Джерела даних {#data-sources}

**Популярні місця** базуються на структурованому вмісті з [Wikidata](https://www.wikidata.org) та [Wikipedia](https://www.wikipedia.org/).

Відображаються лише POI з пов'язаним **ID Wikidata**. Ці ID пов'язують об'єкти на карті з перевіреними назвами, описами та зображеннями.

Ви можете переглянути посилання на Wikidata безпосередньо в [Контекстному меню карти](../map/map-context-menu.md). Натискання на тег Wikidata відкриває повну сторінку об'єкта на вебсайті Wikidata.

Дізнайтеся, як знайти ID Wikidata: [Wikipedia: Finding a Wikidata ID](https://en.wikipedia.org/wiki/Wikipedia:Finding_a_Wikidata_ID)


## Як використовувати {#how-to-use}

<InfoAndroidOnly/>

Функція **Популярні місця** включає як курований список визначних пам'яток поблизу, так і шар POI на карті на основі Вікіпедії.

Існує два основних способи доступу до цієї функції:

- **Безкоштовна версія**  
  Доступ через [Пошук](#explore-in-search) для дослідження місць поблизу у вигляді списку.  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="map_widget_search,shared_string_explore,popular_places_nearby"/>*

- **Платні версії** *(Maps+ та OsmAnd Pro)*  
  Увімкніть візуальне накладання в [Налаштувати карту](#enable-layer).  
  *<Translate android="true" ids="android_button_seq"/>*. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*  

  У цьому режимі популярні POI з'являються безпосередньо на карті з мініатюрними попередніми переглядами та вмістом Вікіпедії.

Ви можете перемикатися між **онлайн** та **офлайн** джерелами Вікіпедії в налаштуваннях накладання. Дізнайтеся більше в [Увімкнути шар](#enable-layer).


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

Натискання на будь-яке місце відкриває [Контекстне меню POI](./map-context-menu.md), де ви можете переглянути фотографії та отримати доступ до пов'язаного [вмісту Вікіпедії](../plugins/wikipedia.md).

:::tip
Режим дослідження на основі пошуку працює **лише онлайн** у безкоштовній версії.  
Щоб використовувати його **офлайн**, вам потрібна підписка [Maps+ або OsmAnd Pro](../purchases/android.md) та завантажені [карти Вікіпедії](../plugins/wikipedia.md).
:::


## Увімкнути шар {#enable-layer}

<InfoAndroidOnly/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>**. Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,poi_osmwiki"/>*

![Меню популярних місць](@site/static/img/map/popular_places/popular_places_menu.png)

</TabItem>

</Tabs>

Функція **Популярні місця (Wikipedia)** доступна в меню [Налаштувати карту](./configure-map-menu.md). Щоб відобразити популярні місця безпосередньо на карті, увімкніть шар POI з даними з Вікіпедії, використовуючи зображення з Wikidata.

Перед використанням цієї функції:

- Переконайтеся, що [Плагін Wikipedia](../plugins/wikipedia.md) увімкнено.
- Завантажте дані Вікіпедії для вашого регіону, якщо ви хочете використовувати їх офлайн.

### Опції шару

Після увімкнення стають доступними наступні опції:

- **<Translate android="true" ids="poi_osmwiki"/>** – Перемикання POI Вікіпедії на карті.

- **Джерело POI** – Перемикання між:
  - *Офлайн-режим* (статті Вікіпедії мають бути завантажені).
  - *Лише онлайн* режим (використовує живі дані та зображення).

- **<Translate android="true" ids="shared_string_language"/>** – Виберіть мову для описів Вікіпедії.

- **<Translate android="true" ids="show_image_previews"/>** – Показувати мініатюри зображень з Wikidata поруч з POI.

Натискання на POI на карті відкриває [Контекстне меню POI](./map-context-menu.md), де ви можете переглянути [онлайн-фотографії](#online-photos) та отримати доступ до пов'язаних [статей Вікіпедії](../plugins/wikipedia.md).


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

Це розділ у [Контекстному меню POI](./map-context-menu.md), який відображає попередній перегляд фотографії вибраного Популярного місця (Wikipedia). Ви можете прокручувати горизонтально, щоб переглядати доступні фотографії, або натиснути на будь-яке зображення, щоб відкрити його в [повноекранному режимі](#gallery).

Дізнайтеся більше про додаткові опції в розділі [Дії](#actions) та [Галерея](#gallery).


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


**Меню галереї** може відображати до **100 зображень**, пов'язаних з вибраною точкою інтересу. Ви можете прокручувати всі доступні фотографії. Натискання на фотографію коротко відкриває детальний перегляд, що показує: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*  

Ви також можете виконати наступні дії з кожною фотографією:

- **Поділитися**  
  Поділіться вибраним зображенням за допомогою будь-якої сумісної програми, встановленої на вашому пристрої (наприклад, месенджери, електронна пошта або соціальні мережі). Спільний вміст включає зображення та посилання на його джерело (якщо доступне).

- **Деталі**  
  Відкрийте детальний перегляд, що показує метадані про зображення, включаючи: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Пряме посилання*

- **Відкрити в браузері**  
  Запустіть сторінку джерела зображення (зазвичай на [Wikimedia Commons](https://commons.wikimedia.wikimedia.org/)) у вашому браузері за замовчуванням. Це дозволяє переглядати повне зображення, інформацію про ліцензування та пов'язаний вміст.

- **Завантажити**  
  Збережіть зображення на сховище вашого пристрою. Завантажене зображення можна знайти в папці Завантаження за замовчуванням вашого пристрою та отримати до нього доступ офлайн.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Версія для Android не включає додаткове меню для дій з фотографіями.

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS - Опції контекстного меню](@site/static/img/map/gallery_menu_ios_3.png)

На **iOS** тривале натискання на фотографію відкриває контекстне меню з додатковими діями:

- **Деталі**  
- **Відкрити в браузері**  
- **Завантажити**

**Кнопки**:

- Кнопка **Поділитися** дозволяє швидко поділитися вибраним зображенням.  
- Меню **три крапки** надає доступ до додаткових дій, включаючи перегляд деталей, відкриття джерела в браузері або завантаження зображення.

</TabItem>

</Tabs>


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Android – Перегляд деталей](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![iOS – Перегляд деталей](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>

Екран **Деталі** надає повні метадані для вибраної фотографії, включаючи: *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Пряме посилання*


## Пов'язані статті

- [Контекстне меню карти](./map-context-menu.md)
- [Налаштувати карту](./configure-map-menu.md)
- [Пошук POI](../search/search-poi.md)
- [Плагін Wikipedia](../plugins/wikipedia.md)


> *Цю статтю востаннє оновлено в червні 2025 року*