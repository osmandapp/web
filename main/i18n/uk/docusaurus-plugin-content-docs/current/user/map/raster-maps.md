---
source-hash: bb6a05d4460533bd7c04d0568e125b89b1af1a48db39bacf045ff46a5cce25c6
sidebar_position: 6
title:  Растрові карти (онлайн / офлайн)
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


<InfoIncompleteArticle/>

## Огляд {#overview}

Растрові карти є важливим і корисним доповненням до векторних карт OsmAnd. Вони дозволяють поєднувати різні джерела карт з векторними картами. Наприклад, інформація про пагорби та схили відображається як растровий шар. Ви можете відображати напівпрозорий базовий векторний шар з накладанням туристичних маршрутів, карт дощу, даних про дорожній рух у реальному часі та супутникових знімків. Ви також можете переключити карти за замовчуванням на растрові тайли в Інтернеті.


## Варіанти використання {#use-cases}

Растрові карти мають широкий спектр застосувань. Ось деякі з найпопулярніших:

- Супутникові знімки як підкладка.
- Інформація про дорожній рух у реальному часі.
- Прогноз дощу як накладання.
- Топографічні карти з затіненням пагорбів та схилів.
- Активні велосипедні та бігові маршрути як накладання.
- Інформація про судна в реальному часі.
- Онлайн-тайли OpenStreetMap для редагування OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Ви також можете змінити основне джерело карт з векторних карт на онлайн-тайли.
:::


## Растрові карти {#raster-maps}

Онлайн-карти в OsmAnd складаються з растрових даних, які складаються з пікселів (також званих комірками сітки) — по суті, набору невеликих зображень, відомих як тайли. На відміну від векторних карт, які представляють дані, такі як дороги, точки та полігони, використовуючи двійкову інформацію, растрові тайли карт розташовані в сітці та можуть виглядати пікселізованими на високих рівнях масштабування, оскільки кожен піксель має фіксоване значення або клас.

#### Порівняння з векторними картами за замовчуванням {#comparison-to-default-vector-maps}

**Переваги:**

- Оскільки растрові карти попередньо відрендерені, вони завантажуються швидше, усуваючи необхідність пристрою обробляти та рендерити дані в реальному часі.
- Растрові карти можуть завантажуватися динамічно під час перегляду.
- Ви можете створити офлайн-кеш та завантажувати лише відсутні тайли за потреби.
- Ви можете використовувати необмежену кількість зовнішніх веб-джерел для растрових карт, що робить їх гнучкими для різних типів карт, таких як супутникові знімки або спеціалізовані карти.
- Растрові дані, такі як інформація про дорожній рух, можуть регулярно оновлюватися після закінчення терміну дії (наприклад, кожні 20-30 хвилин, залежно від конфігурації).

**Недоліки:**

- Растрові карти займають значно більше місця, ніж векторні карти. Наприклад, карта міста може займати 15 МБ як векторна карта, але збільшитися до 50 МБ на рівні масштабування 15, 200 МБ на рівні масштабування 16 та до 800 МБ на рівні масштабування 17.
- Ви не можете натискати на певні місця або об'єкти на растрових картах, щоб отримати більше інформації.
- Растрові карти не можуть бути стилізовані або змінені для виключення певних об'єктів.
- Занадто сильне збільшення може призвести до пікселізації зображення, особливо якщо тайли високої роздільної здатності недоступні.
- Неможливо обертати карту без обертання тексту, що може ускладнити читання міток.


## Як використовувати растрові карти {#how-to-use-raster-maps}

**Увімкнути плагін**.

- **iOS**. Для *iOS* ця функція працює за замовчуванням.
- **Android**. Для *Android*, щоб використовувати растрові карти в OsmAnd, вам потрібно увімкнути [плагін Онлайн-карти](../plugins/online-map.md). Виконайте такі кроки: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Змінити параметри шару**. Щоб покращити видимість та поєднання шарів растрових карт, ви можете налаштувати прозорість шару за допомогою повзунка на екрані. Крім того, ви можете змінити стиль векторної карти, приховавши полігони, зробивши нижні шари більш видимими. Це особливо корисно при перегляді супутникових знімків.


## Вибрати растрові карти {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

В OsmAnd растрові карти можуть слугувати додатковим джерелом карт поряд з векторними картами за замовчуванням, які оптимізовані для використання в автономному режимі.  

Ви маєте можливість додати один або два онлайн-шари тайлів, щоб доповнити вашу базову карту. Це дозволяє одночасно переглядати до трьох шарів карти на екрані. Наприклад, ви можете мати офлайн-векторну карту OsmAnd як базову, накласти на неї супутниковий знімок і розмістити карту велосипедних доріжок як нижній шар для додаткової деталізації.  

Ви також можете налаштувати прозорість базової карти, щоб поєднати її з вашими шарами. За потреби ви можете увімкнути повзунок прозорості на головному екрані для швидкого налаштування.


### Основний {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Ви можете вибрати стиль карти зі списку або [додати](#add-new-online-raster-map-source) свій власний.


### Шар накладання {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* карту нижнього шару.
2. *Прозорість накладання* (*Android*)/ *Прозорість* карти накладання (*iOS*).
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на карті* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело карти накладання* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати тайлову карту для встановлення або оновлення.
5. *Показати символи карти* - такі як текст, дорожні знаки та інші.  
6. *Додати онлайн-джерело* (*iOS*).
7. *Імпорт з документів* (*iOS*).


### Нижній шар {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* карту нижнього шару.
2. *Прозорість базової карти*.
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на карті* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело карти нижнього шару* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати тайлову карту для встановлення або оновлення.
5. *Показати/приховати полігони*.
6. *Додати онлайн-джерело* (*iOS*).
7. *Імпорт з документів* (*iOS*).


## Затінення рельєфу / Схил {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Затінення рельєфу** та **Схил** — це офлайн-растрові карти, які показують рельєф місцевості. Вони відображаються як спеціальний шар карти, друге накладання на базову карту. Карти містять додаткову інформацію про висоту, щоб допомогти вам точніше зрозуміти схил та тіні ландшафту. Інформація про *Затінення рельєфу* та *Схил* базується на даних з одного джерела, *файлу Global planet*, і розділена на регіони.  

Вам не потрібно перемикатися між шарами Затінення рельєфу та Схилу, оскільки вони автоматично об'єднуються. Ви можете вибрати лише один з цих шарів для відображення на карті, але ви також маєте можливість поєднати їх обидва [як нижній або верхній шар](#select-raster-maps) на інших шарах для більш візуального представлення місцевості.

Щоб почати роботу з Затіненням рельєфу та Схилом, вам потрібно:

1. Придбати плагін Топографія:
    - [Покупки Android](../purchases/android.md)
    - [Покупки iOS](../purchases/ios.md)
2. Увімкнути [плагін Топографія](../plugins/topography.md):  
    *Меню → Плагіни → ︙ → Увімкнути*
3. Виберіть потрібний регіон та завантажте **Карту рельєфу (3D)**.
4. Процес завантаження може зайняти деякий час, залежно від розміру вибраного регіону та швидкості вашого інтернет-з'єднання.


### Затінення рельєфу та 3D-рельєф {#hillshade-and-3d-relief}

| Затінення рельєфу | 3D-рельєф |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Відмінності відображення рельєфу на карті при застосуванні цих налаштувань описані в статті **Топографія** у відповідному розділі [Затінення рельєфу та 3D-рельєф](../plugins/topography.md#hillshade-and-3d-relief).


### Налаштувати параметри відображення {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

Ви можете налаштувати рівень масштабування для відображення та прозорість для Затінення рельєфу та Схилу. Детальніше читайте у статті [Топографія](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-рельєф {#3d-relief}

:::note
[3D-рельєф](../plugins/topography.md#3d-relief) — це платна функція [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Функція [**3D-рельєф**](../plugins/topography.md#3d-relief) — це технологія картографування, яка дозволяє візуалізувати рельєф на карті за допомогою тривимірних моделей. Ця функція додає інформацію про висоту до звичайної двовимірної карти, що створює 3D-ефект та ефект глибини та дозволяє краще візуалізувати рельєф.  

*Щоб почати використовувати 3D-рельєф*:  
Вам потрібно придбати [план підписки OsmAnd Pro](../plugins/index.md#purchase), увімкнути [плагін Топографія](../plugins/topography.md) та увімкнути пункт [3D-рельєф](../plugins/topography.md#3d-relief) у *Меню → Налаштувати карту*.


*Як працює функція 3D-рельєфу*:  
*1.* Для створення 3D-рельєфу OsmAnd отримує інформацію про висоту місцевості.  
*2.* На основі даних про висоту створюється 3D-модель для відображення гір, пагорбів, долин та інших елементів рельєфу на карті.  
*3.* Потім OsmAnd відображає ці тривимірні моделі на плоскій карті. Карту можна збільшувати, зменшувати та обертати, щоб переглядати рельєф з різних кутів та перспектив.  
*4.* Відображення контурних ліній на карті не залежить від того, чи є джерело карти онлайн чи офлайн.


## Підготовка/копіювання растрових карт на пристрій {#preparecopy-raster-maps-to-device}

Існує кілька способів додати нову растрову карту, скопіювати її з іншого пристрою, підготувати на ПК та попередньо завантажити тайли для використання в автономному режимі. Наприклад, ви можете створити свій пакет карт на ПК за допомогою спеціального програмного забезпечення, такого як [MOBAC, OsmAndMapCreator тощо](../../technical/map-creation/index.md). Зазвичай растрові карти поширюються як файли з розширенням `.sqlitedb`.

Ось основні методи додавання нового джерела растрових карт, яке ще не визначено в OsmAnd:

- Відкрийте готовий файл `.sqlitedb` за допомогою OsmAnd.
- Імпортуйте пакет з підготовленими онлайн-картами з іншої програми OsmAnd як спеціальний `.osf` **пакет** за допомогою [функції імпорту/експорту](../personal/import-export.md).
- Створіть нове джерело онлайн-карт на самому мобільному пристрої.
- Підготуйте магічну URL-адресу з параметрами джерела онлайн-карт та відкрийте її за допомогою OsmAnd.


### Додати нове джерело онлайн-растрових карт {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Щоб створити джерело растрових карт, вам потрібно знати **URL-адресу тайла**, яка є конкретною URL-адресою, що розповсюджує тайли карт у проекції Меркатора. Наприклад, URL-адреса тайла може виглядати так: `https://tile.osmand.net/hd/6/55/25.png`, де `tile.osmand.net/hd/` є базовою URL-адресою.

Ось ключові параметри для налаштування при створенні нового джерела онлайн-карт:

| Параметр | Опис |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Введіть назву для нового джерела онлайн-карт. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Введіть або вставте URL-адресу для онлайн-джерела тайлів. Переконайтеся, що вона відповідає формату URL-адреси тайлів. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Цей параметр впливає на відображення карти. <br/><ul><li>Як *тип карти*, карта буде обмежена вибраними рівнями масштабування.</li><li>Як *накладання/підкладка*, карта з'явиться на вибраних рівнях масштабування, з масштабуванням вгору або вниз, застосованим за межами цих рівнів.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Встановіть тривалість (у хвилинах), після якої кешовані тайли оновляться. Ви можете залишити це поле порожнім, якщо не хочете, щоб тайли автоматично перезавантажувалися. <br/><ul><li>1 день = 1440 хвилин</li><li>1 тиждень = 10 080 хвилин</li><li>30 днів = 43 200 хвилин</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Виберіть між *псевдо-Меркаторською проекцією* та *еліптичною Меркаторською проекцією*, залежно від джерела. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Виберіть, як зберігати тайли: або у *файлі SQLiteDB*, або як *один файл зображення на тайл*. |


### Магічна URL-адреса для встановлення джерела карти {#magic-url-to-install-map-source}

Онлайн-карти можна додати за допомогою спеціального посилання до списку растрових карт OsmAnd. Натисніть на це посилання та виберіть OsmAnd для відкриття:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Параметр посилання|Приклад|
|:--------|:---------------|
| [Постійна частина]| `http://osmand.net/add-tile-source` |
|[Роздільники]| ?   & |
|[Назва]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Рівні масштабування]|min_zoom=9 / max_zoom=15|

Ви знайдете додану онлайн-карту у списку меню [Основний / Нижній / Верхній шар](#select-raster-maps).


## Керування растровими картами {#manage-raster-maps}

Растрові карти можуть займати значний обсяг дискового простору, тому вам може знадобитися регулярно перевіряти його. Для великих наборів даних рекомендується використовувати *растрове джерело SQLite*, оскільки воно зберігатиме всі тайли в одному великому файлі (базі даних SQLite).

- [**Формат SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Формат метаінформації**](../../technical/osmand-file-formats/osmand-metainfo.md)

Щоб змінити формат тайлів, ви можете вибрати <Translate android="true" ids="storage_format"/> у меню редагування онлайн-карт:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Очистити кеш растрових карт {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Тайли зберігаються в кеші при використанні онлайн-растрових карт як основного / верхнього / нижнього шару. Ви можете побачити розмір вашого файлу SQ Lite під назвою вашої онлайн-карти у списку. Іноді потрібне регулярне очищення, щоб прискорити відображення тайлів або оновити дані.  

Щоб очистити кеш тайлів карти, вам потрібно зробити наступне:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Завантажити / Оновити тайли {#download--update-tiles}

Якщо ви хочете отримати доступ до растрових карт в автономному режимі, вам може знадобитися попередньо завантажити тайли. Це можна зробити на вашому мобільному пристрої, але майте на увазі, що деякі служби можуть блокувати завантаження великих пакетів. Ви також можете використовувати ту ж функцію для оновлення вже завантажених тайлів для вибраних областей, інакше OsmAnd продовжуватиме відображати тайли, які вже зберігаються в кеші.  

Щоб карти автоматично оновлювали тайли через деякий час, ви можете встановити [час закінчення терміну дії](#add-new-online-raster-map-source), тоді OsmAnd перезавантажить тайли, як тільки вони будуть відображені.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Щоб завантажити або оновити растрові тайли, вам потрібно вибрати джерело онлайн-карти як [основне джерело карти](#select-raster-maps) (**Android / iOS**). Ви також можете вибрати онлайн-тайли окремо для карти [накладання](#overlay-layer) або для [нижнього шару](#underlay-layer) (тільки для **Android**).

- Для версії програми OsmAnd для **Android** вам потрібно вибрати область відповідно до розміру екрана вашого пристрою та довго натиснути на карту. Потім виберіть [*Дії*](../map/map-context-menu.md#update--download-online-maps) у контекстному меню карти та опцію *Завантажити карту* або *Оновити карту*. На екрані завантаження карти внесіть зміни до необхідних налаштувань та натисніть Завантажити.  

- У версії програми OsmAnd для **iOS** вам потрібно довго натиснути на карту, потім вибрати [*Дії*](../map/map-context-menu.md#update--download-online-maps) та опцію *Завантажити карту* або *Оновити карту* з контекстного меню карти. На екрані завантаження карти ви можете вибрати потрібну область та змінити необхідні налаштування. Після того, як ви встановите всі параметри, ви можете побачити кількість тайлів та розмір завантаження.


### Змінити параметри растрової карти {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Растрові карти можна використовувати в існуючому вигляді, якщо тайли вже відображені. Якщо растрові карти надаються онлайн, завжди є базова URL-адреса, яку потрібно налаштувати. Є ще кілька основних параметрів, які можна змінити для растрових карт, про це ви можете прочитати в [цьому розділі](#add-new-online-raster-map-source) статті. Більш складні параметри закодовані у внутрішніх компонентах [формату SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)