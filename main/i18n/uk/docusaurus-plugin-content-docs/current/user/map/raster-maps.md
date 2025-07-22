---
source-hash: 6440fdee359258c90a307e6a849f0a56cb8aff804825ed546cc7fe715c717ae7
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

Растрові карти є значним і корисним доповненням до векторних карт OsmAnd. Вони дозволяють поєднувати різні джерела карт з векторними картами. Наприклад, інформація про пагорби та схили відображається як растровий шар. Ви можете відображати напівпрозорий базовий векторний шар з накладанням туристичних маршрутів, карт дощів, даних про трафік у реальному часі та накладанням супутникових знімків. Ви також можете перемикати карти за замовчуванням на растрові плитки в Інтернеті.


## Варіанти використання {#use-cases}

Растрові карти мають широкий спектр застосувань. Ось деякі з найпопулярніших:

- Супутникові знімки як підкладка.
- Інформація про трафік у реальному часі.
- Прогноз дощу як накладання.
- Топографічні карти з затіненням пагорбів та схилів.
- Активні велосипедні та бігові маршрути як накладання.
- Інформація про судна в реальному часі.
- Онлайн-плитки OpenStreetMap для редагування OSM.

![Огляд онлайн-карт](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Ви також можете змінити основне джерело карт з векторних карт на онлайн-плитки.
:::


## Растрові карти {#raster-maps}

Онлайн-карти в OsmAnd складаються з растрових даних, які складаються з пікселів (також званих елементами сітки) - по суті, набору невеликих зображень, відомих як плитки. На відміну від векторних карт, які представляють дані, такі як дороги, точки та полігони, використовуючи двійкову інформацію, растрові плитки карт розташовані в сітці і можуть виглядати пікселізованими на високих рівнях масштабування, оскільки кожен піксель має фіксоване значення або клас.

#### Порівняння з векторними картами за замовчуванням {#comparison-to-default-vector-maps}

**Переваги:**

- Оскільки растрові карти попередньо відрендерені, вони завантажуються швидше, усуваючи необхідність пристрою обробляти та рендерити дані в реальному часі.
- Растрові карти можуть завантажуватися динамічно під час перегляду.
- Ви можете створити офлайн-кеш і завантажувати лише відсутні плитки за потреби.
- Ви можете використовувати необмежену кількість зовнішніх веб-джерел для растрових карт, що робить їх гнучкими для різних типів карт, таких як супутникові знімки або спеціалізовані карти.
- Растрові дані, такі як інформація про трафік, можуть регулярно оновлюватися після закінчення терміну дії (наприклад, кожні 20-30 хвилин, залежно від конфігурації).

**Недоліки:**

- Растрові карти займають значно більше місця, ніж векторні карти. Наприклад, карта міста може займати 15 МБ як векторна карта, але збільшитися до 50 МБ на рівні масштабування 15, 200 МБ на рівні масштабування 16 і до 800 МБ на рівні масштабування 17.
- Ви не можете натискати на певні місця або об'єкти на растрових картах, щоб отримати більше інформації.
- Растрові карти не можуть бути стилізовані або змінені для виключення певних об'єктів.
- Занадто сильне масштабування може призвести до пікселізації зображення, особливо якщо недоступні плитки високої роздільної здатності.
- Неможливо обертати карту без обертання тексту, що може ускладнити читання міток.


## Як використовувати растрові карти {#how-to-use-raster-maps}

**Увімкнути плагін**.

- **iOS**. Для *iOS* ця функція працює за замовчуванням.
- **Android**. Для *Android*, щоб використовувати растрові карти в OsmAnd, вам потрібно увімкнути [плагін Онлайн-карти](../plugins/online-map.md). Виконайте такі дії: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Змінити параметри шару**. Щоб покращити видимість та змішування шарів растрових карт, ви можете налаштувати прозорість шару за допомогою повзунка на екрані. Крім того, ви можете змінити стиль векторної карти, приховавши полігони, щоб зробити шари підкладки більш видимими. Це особливо корисно при перегляді супутникових знімків.


## Вибрати растрові карти {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

![Показати карти](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Показати карти](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

В OsmAnd растрові карти можуть слугувати додатковим джерелом карт поряд з векторними картами за замовчуванням, які оптимізовані для використання в автономному режимі.  

Ви маєте можливість додати один або два шари онлайн-плиток, щоб доповнити вашу базову карту. Це дозволяє одночасно переглядати до трьох шарів карт на екрані. Наприклад, ви можете мати офлайн-векторну карту OsmAnd як базову, накласти на неї супутниковий вигляд і розмістити карту велосипедних доріжок як підкладку для додаткової деталізації.  

Ви також можете налаштувати прозорість базової карти, щоб змішати її з вашими шарами. За потреби ви можете увімкнути повзунок прозорості на головному екрані для швидкого налаштування.


### Основна {#main}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Показати карти](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Показати карти](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Ви можете вибрати стиль карти зі списку або [додати](#add-new-online-raster-map-source) свій власний.


### Шар накладання {#overlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Налаштувати підкладку / накладання Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Налаштувати підкладку / накладання iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* карту підкладки.
2. *Прозорість накладання* (*Android*)/ *Прозорість* карти накладання (*iOS*).
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на карті* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело карти накладання* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати плиткову карту для встановлення або оновлення.
5. *Показати символи карти* - такі як текст, дорожні знаки та інші.  
6. *Додати онлайн-джерело* (*iOS*).
7. *Імпортувати з документів* (*iOS*).


### Шар підкладки {#underlay-layer}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Налаштувати підкладку / накладання Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Налаштувати підкладку / накладання iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* карту підкладки.
2. *Прозорість базової карти*.
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на карті* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело карти підкладки* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати плиткову карту для встановлення або оновлення.
5. *Показати/приховати полігони*.
6. *Додати онлайн-джерело* (*iOS*).
7. *Імпортувати з документів* (*iOS*).


## Затінення пагорбів / Схил {#hillshade--slope}

![Шари рельєфу](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Затінення пагорбів** та **Схил** — це офлайн-растрові карти, які показують рельєф місцевості. Вони відображаються як спеціальний шар карти, друге накладання на базову карту. Карти містять додаткову інформацію про висоту, щоб допомогти вам точніше зрозуміти схил та тіні ландшафту. Інформація про *Затінення пагорбів* та *Схил* базується на даних з одного джерела, файлу *Global planet*, і розділена на регіони.  

Вам не потрібно перемикатися між шарами Затінення пагорбів та Схил, оскільки вони автоматично об'єднуються. Ви можете вибрати лише один з цих шарів для відображення на карті, але ви також маєте можливість об'єднати їх обидва [як підкладку або накладання](#select-raster-maps) на інші шари для більш візуального представлення рельєфу.

Щоб почати використовувати Затінення пагорбів та Схил, вам потрібно:

1. Придбати плагін Топографія:
    - [Покупки Android](../purchases/android.md)
    - [Покупки iOS](../purchases/ios.md)
2. Увімкнути [плагін Топографія](../plugins/topography.md):  
    *Меню → Плагіни → ︙ → Увімкнути*
3. Виберіть потрібний регіон і завантажте **Карту рельєфу (3D)**.
4. Процес завантаження може зайняти деякий час, залежно від розміру вибраного регіону та швидкості вашого Інтернет-з'єднання.


### Затінення пагорбів та 3D рельєф {#hillshade-and-3d-relief}

| Затінення пагорбів | 3D рельєф |
|--------|---------|
| ![Шари рельєфу](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Шари рельєфу](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Різниця відображення рельєфу на карті при застосуванні цих налаштувань описана в статті **Топографія** у відповідному розділі [Затінення пагорбів та 3D рельєф](../plugins/topography.md#hillshade-and-3d-relief).


### Налаштувати параметри відображення {#configure-display-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Шари рельєфу](@site/static/img/plugins/online-maps/terrain_layers.png)

Ви можете налаштувати рівень масштабування для відображення та прозорість для Затінення пагорбів та Схилу. Детальніше можна прочитати в статті [Топографія](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D рельєф {#3d-relief}

:::note
[3D рельєф](../plugins/topography.md#3d-relief) є платною функцією [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Шари рельєфу](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Функція [**3D рельєф**](../plugins/topography.md#3d-relief) — це картографічна технологія, яка дозволяє візуалізувати рельєф на карті за допомогою тривимірних моделей. Ця функція додає інформацію про висоту до звичайної двовимірної карти, що створює 3D-ефект та ефект глибини і дозволяє краще візуалізувати рельєф.  

*Щоб почати використовувати 3D рельєф*:  
Вам потрібно придбати [план підписки OsmAnd Pro](../plugins/index.md#purchase), увімкнути [плагін Топографія](../plugins/topography.md) та увімкнути пункт [3D рельєф](../plugins/topography.md#3d-relief) у *Меню → Налаштувати карту*.


*Як працює функція 3D рельєф*:  
*1.* Щоб створити 3D рельєф, OsmAnd отримує інформацію про висоту місцевості.  
*2.* На основі даних про висоту створюється 3D-модель для відображення гір, пагорбів, долин та інших елементів рельєфу на карті.  
*3.* Потім OsmAnd відображає ці тривимірні моделі на плоскій карті. Карту можна збільшувати, зменшувати та обертати, щоб переглядати рельєф з різних кутів та перспектив.  
*4.* Відображення контурних ліній на карті не залежить від того, чи є джерело карти онлайн чи офлайн.


## Підготувати/скопіювати растрові карти на пристрій {#preparecopy-raster-maps-to-device}

Існує кілька способів додати нову растрову карту, скопіювати її з іншого пристрою, підготувати на ПК та попередньо завантажити плитки для використання в автономному режимі. Наприклад, ви можете створити свій пакет карт на ПК за допомогою спеціального програмного забезпечення, такого як [MOBAC, OsmAndMapCreator тощо](../../technical/map-creation/index.md). Зазвичай растрові карти поширюються як файли з розширенням `.sqlitedb`.

Ось основні методи додавання нового джерела растрових карт, яке ще не визначено в OsmAnd:

- Відкрити готовий до використання файл `.sqlitedb` за допомогою OsmAnd.
- Імпортувати пакет з підготовленими онлайн-картами з іншої програми OsmAnd як спеціальний **пакет** `.osf` за допомогою [функції імпорту/експорту](../personal/import-export.md).
- Створити нове джерело онлайн-карт на самому мобільному пристрої.
- Підготувати магічну URL-адресу з параметрами джерела онлайн-карт та відкрити її за допомогою OsmAnd.


### Додати нове джерело онлайн-растрових карт {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Додати онлайн-джерело](@site/static/img/plugins/online-maps/add-online-source-2.png)

Щоб створити джерело растрових карт, вам потрібно знати **URL-адресу плитки**, яка є специфічною URL-адресою, що розповсюджує плитки карт у проекції Меркатора. Наприклад, URL-адреса плитки може виглядати так: `https://tile.osmand.net/hd/6/55/25.png`, де `tile.osmand.net/hd/` є базовою URL-адресою.

Ось ключові параметри для налаштування при створенні нового джерела онлайн-карт:

| Параметр | Опис |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Вкажіть назву для нового джерела онлайн-карт. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Введіть або вставте URL-адресу для джерела онлайн-плиток. Переконайтеся, що вона відповідає формату URL-адреси плитки. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Цей параметр впливає на відображення карти. <br/><ul><li>Як *тип карти*, карта буде обмежена вибраними рівнями масштабування.</li><li>Як *накладання/підкладка*, карта з'явиться на вибраних рівнях масштабування, з застосуванням збільшення або зменшення за межами цих рівнів.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Встановіть тривалість (у хвилинах), після якої кешовані плитки будуть оновлюватися. Ви можете залишити це поле порожнім, якщо не хочете, щоб плитки автоматично перезавантажувалися. <br/><ul><li>1 день = 1440 хвилин</li><li>1 тиждень = 10 080 хвилин</li><li>30 днів = 43 200 хвилин</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Виберіть між *Псевдо-Меркаторською проекцією* та *Еліптичною Меркаторською проекцією*, залежно від джерела. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Виберіть, як зберігати плитки: або у *файлі SQLiteDB*, або як *один файл зображення на плитку*. |


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

Ви знайдете додану онлайн-карту у списку меню [Основний / Шар підкладки / Шар накладання](#select-raster-maps).


## Керування растровими картами {#manage-raster-maps}

Растрові карти можуть займати значний обсяг дискового простору, тому вам може знадобитися регулярно перевіряти його. Для великих наборів даних рекомендується використовувати *растрове джерело SQLite*, оскільки воно зберігатиме всі плитки в 1 великому файлі (база даних SQLite).

- [**Формат SQ Lite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Формат Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Щоб змінити формат плитки, ви можете вибрати <Translate android="true" ids="storage_format"/> у меню редагування онлайн-карт:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Очистити кеш растрових карт {#clear-raster-map-cache}

![Список онлайн-джерел](@site/static/img/plugins/online-maps/online-sources-list.png)

Плитки зберігаються в кеші при використанні онлайн-растрових карт як основного / шару накладання / шару підкладки. Ви можете побачити розмір вашого файлу SQ Lite під назвою вашої онлайн-карти у списку. Іноді потрібне регулярне очищення, щоб прискорити відображення плиток або оновити дані.  

Щоб очистити кеш плиток карти, вам потрібно зробити наступне:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Завантажити / оновити плитки {#download--update-tiles}

Якщо ви хочете отримати доступ до растрових карт в автономному режимі, вам може знадобитися попередньо завантажити плитки. Це можна зробити на вашому мобільному пристрої, але майте на увазі, що деякі служби можуть блокувати завантаження великих пакетів. Ви також можете використовувати ту саму функцію для оновлення вже завантажених плиток для вибраних областей, інакше OsmAnd продовжуватиме відображати плитки, які вже зберігаються в кеші.  

Щоб карти автоматично оновлювали плитки через деякий час, ви можете встановити [Час закінчення терміну дії](#add-new-online-raster-map-source), тоді OsmAnd перезавантажить плитки, як тільки вони будуть відображені.  

<Tabs groupId="operating-systems" queryString="operating-systems">

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

![Завантажити плитки Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Завантажити плитки Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Завантажити плитки Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Завантажити плитки Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Завантажити плитки iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>

- Щоб завантажити або оновити растрові плитки, вам потрібно вибрати джерело онлайн-карти як [Основне джерело карти](#select-raster-maps). Ви також можете вибрати онлайн-плитки окремо для карти [Накладання](#overlay-layer) або для карти [Підкладки](#underlay-layer).

- Для версії OsmAnd для **Android** вам потрібно вибрати область відповідно до розміру екрана вашого пристрою та зробити довге натискання на карту. Потім виберіть [Дії](../map/map-context-menu.md#customize) у контекстному меню карти та опцію *Завантажити карту* або *Оновити карту*. На екрані Завантажити карту внесіть зміни до необхідних налаштувань та натисніть Завантажити.  

- У версії OsmAnd для iOS вам потрібно довго натиснути на карту, потім вибрати *Дії* та опцію *Завантажити карту* або *Оновити карту* з контекстного меню карти. На екрані Завантажити карту ви можете вибрати потрібну область та змінити необхідні налаштування. Після того, як ви встановите всі параметри, ви можете побачити кількість плиток та розмір завантаження.


### Змінити параметри растрових карт {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-карти →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Растрові карти можна використовувати такими, якими вони вже існують, якщо плитки вже відображені. Якщо растрові карти надаються онлайн, завжди є базова URL-адреса, яку потрібно налаштувати. Є ще кілька основних параметрів, які можна змінити для растрових карт, про це можна прочитати в [цьому розділі](#add-new-online-raster-map-source) статті. Більш складні параметри закодовані у внутрішніх компонентах [формату SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми кольорових палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Жовтень 2024*