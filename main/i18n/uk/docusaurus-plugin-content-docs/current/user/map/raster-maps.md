---
source-hash: 8656c688a740924ceba6f990dbce2cb596b8d6da1d84627c6aa7082b084dadaf
sidebar_position: 6
title: Растрові мапи (Онлайн / Офлайн)
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

Растрові мапи є значним і корисним доповненням до векторних мап OsmAnd. Вони дозволяють поєднувати різні джерела мап з векторними мапами. Наприклад, інформація про пагорби та схили відображається як растровий шар. Ви можете відображати напівпрозорий базовий векторний шар з накладанням пішохідних стежок, мап дощу, даних про трафік у реальному часі та накладанням супутникових знімків. Ви також можете переключити мапи за замовчуванням на растрові тайли в інтернеті.


## Варіанти використання {#use-cases}

Растрові мапи мають широкий спектр застосувань. Ось деякі з найпопулярніших:

- Супутникові знімки як підкладка.
- Інформація про трафік у реальному часі.
- Прогноз дощу як накладання.
- Топографічні мапи з відтінками пагорбів та схилів.
- Активні велосипедні та бігові маршрути як накладання.
- Інформація про судна в реальному часі.
- Онлайн тайли OpenStreetMap для редагування OSM.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip
Ви також можете змінити основне джерело мап з векторних мап на онлайн тайли.
:::


## Растрові мапи {#raster-maps}

Онлайн мапи в OsmAnd складаються з растрових даних, які складаються з пікселів (також званих комірками сітки) — по суті, набору невеликих зображень, відомих як тайли. На відміну від векторних мап, які представляють дані, такі як дороги, точки та полігони, використовуючи двійкову інформацію, растрові тайли мап розташовані в сітці та можуть виглядати пікселізованими на високих рівнях масштабування, оскільки кожен піксель має фіксоване значення або клас.

#### Порівняння з векторними мапами за замовчуванням {#comparison-to-default-vector-maps}

**Переваги:**

- Оскільки растрові мапи попередньо відрендерені, вони завантажуються швидше, усуваючи необхідність пристрою обробляти та рендерити дані в реальному часі.
- Растрові мапи можуть завантажуватися динамічно під час перегляду.
- Ви можете створити офлайн кеш та завантажувати лише відсутні тайли за потреби.
- Ви можете використовувати необмежену кількість зовнішніх веб-джерел для растрових мап, що робить їх гнучкими для різних типів мап, таких як супутникові знімки або спеціалізовані мапи.
- Растрові дані, такі як інформація про трафік, можуть регулярно оновлюватися після закінчення терміну дії (наприклад, кожні 20-30 хвилин, залежно від конфігурації).

**Недоліки:**

- Растрові мапи займають значно більше місця, ніж векторні мапи. Наприклад, мапа міста може займати 15 МБ як векторна мапа, але збільшитися до 50 МБ на рівні масштабування 15, 200 МБ на рівні масштабування 16 та до 800 МБ на рівні масштабування 17.
- Ви не можете торкатися певних місць або об'єктів на растрових мапах, щоб отримати більше інформації.
- Растрові мапи не можуть бути стилізовані або змінені для виключення певних об'єктів.
- Занадто сильне масштабування може призвести до пікселізації зображення, особливо якщо тайли високої роздільної здатності недоступні.
- Неможливо обертати мапу без обертання тексту, що може ускладнити читання міток.


## Як використовувати растрові мапи {#how-to-use-raster-maps}

**Увімкнути плагін**.

- **iOS**. Для *iOS* ця функція працює за замовчуванням.
- **Android**. Для *Android*, щоб використовувати растрові мапи в OsmAnd, вам потрібно увімкнути [плагін Онлайн мапи](../plugins/online-map.md). Виконайте такі кроки: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Змінити параметри шару**. Щоб покращити видимість та поєднання растрових шарів мапи, ви можете налаштувати прозорість шару за допомогою повзунка на екрані. Крім того, ви можете змінити стиль векторної мапи, приховавши полігони, зробивши нижні шари більш видимими. Це особливо корисно при перегляді супутникових знімків.


## Вибір растрових мап {#select-raster-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)

</TabItem>

</Tabs>

В OsmAnd растрові мапи можуть слугувати додатковим джерелом мап поряд з векторними мапами за замовчуванням, які оптимізовані для офлайн використання.

Ви маєте можливість додати один або два онлайн шари тайлів, щоб доповнити вашу базову мапу. Це дозволяє вам переглядати до трьох шарів мапи одночасно на екрані. Наприклад, ви можете мати офлайн векторну мапу OsmAnd як базову, накласти на неї супутниковий знімок і розмістити мапу велосипедних доріжок як підкладку для додаткової деталізації.

Ви також можете налаштувати прозорість базової мапи, щоб поєднати її з вашими шарами. За потреби ви можете увімкнути повзунок прозорості на головному екрані для швидких налаштувань.


### Основна {#main}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,shared_string_online_maps"/>*

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

Ви можете вибрати стиль мапи зі списку або [додати](#add-new-online-raster-map-source) свій власний.


### Шар накладання {#overlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* мапу підкладки.
2. *Прозорість накладання* (*Android*)/ *Прозорість* мапи накладання (*iOS*).
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на мапі* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело мапи накладання* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати тайлову мапу для встановлення або оновлення.
5. *Показати символи мапи* - такі як текст, дорожні знаки та інші.
6. *Додати онлайн джерело* (*iOS*).
7. *Імпортувати з документів* (*iOS*).


### Шар підкладки {#underlay-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)

</TabItem>

</Tabs>

1. *Увімкнути/вимкнути* мапу підкладки.
2. *Прозорість базової мапи*.
3. *Показати повзунок прозорості* (*Android*) / *Показати повзунок на мапі* (*iOS*). Швидкий доступ до налаштування прозорості.
4. *Джерело мапи підкладки* (*Android*) / *Доступні шари* (*iOS*). Ви можете вибрати тайлову мапу для встановлення або оновлення.
5. *Показати/Приховати полігони*.
6. *Додати онлайн джерело* (*iOS*).
7. *Імпортувати з документів* (*iOS*).


## Затінення пагорбів / Схил {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Затінення пагорбів** та **Схил** — це офлайн растрові мапи, які показують рельєф місцевості. Вони відображаються як спеціальний шар мапи, друге накладання на базову мапу. Мапи містять додаткову інформацію про висоту, щоб допомогти вам точніше зрозуміти схил та тіні ландшафту. Інформація про *Затінення пагорбів* та *Схил* базується на даних з одного джерела, *файлу Global planet*, і розділена на регіони.

Вам не потрібно перемикатися між шарами Затінення пагорбів та Схил, оскільки вони автоматично об'єднуються. Ви можете вибрати лише один з цих шарів для відображення на мапі, але ви також маєте можливість поєднати їх обидва [як підкладку або накладання](#select-raster-maps) на інші шари для більш візуального представлення рельєфу.

Щоб почати використовувати Затінення пагорбів та Схил, вам потрібно:

1. Придбати плагін Топографія:
    - [Покупки Android](../purchases/android.md)
    - [Покупки iOS](../purchases/ios.md)
2. Увімкнути [плагін Топографія](../plugins/topography.md):
    *Меню → Плагіни → ︙ → Увімкнути*
3. Виберіть потрібний регіон та завантажте **Мапу рельєфу (3D)**.
4. Процес завантаження може зайняти деякий час, залежно від розміру вибраного регіону та швидкості вашого інтернет-з'єднання.


### Затінення пагорбів та 3D-рельєф {#hillshade-and-3d-relief}

| Затінення пагорбів | 3D-рельєф |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

Відмінність відображення рельєфу на мапі при застосуванні цих налаштувань описана в статті **Топографія** у відповідному розділі [Затінення пагорбів та 3D-рельєф](../plugins/topography.md#hillshade-and-3d-relief).


### Налаштування параметрів відображення {#configure-display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

Ви можете налаштувати рівень масштабування для відображення та прозорість для Затінення пагорбів та Схилу. Докладніше читайте у статті [Топографія](../plugins/topography.md#hillshade-slope-and-altitude-layers).


## 3D-рельєф {#3d-relief}

:::note
[3D-рельєф](../plugins/topography.md#3d-relief) — це платна функція [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

Функція [**3D-рельєф**](../plugins/topography.md#3d-relief) — це картографічна технологія, яка дозволяє візуалізувати рельєф на мапі за допомогою тривимірних моделей. Ця функція додає інформацію про висоту до звичайної двовимірної мапи, що створює 3D-ефект та ефект глибини і дозволяє краще візуалізувати рельєф.

*Щоб почати використовувати 3D-рельєф*:
Вам потрібно придбати [план підписки OsmAnd Pro](../plugins/index.md#purchase), увімкнути [плагін Топографія](../plugins/topography.md) та увімкнути пункт [3D-рельєф](../plugins/topography.md#3d-relief) у *Меню → Налаштувати мапу*.


*Як працює функція 3D-рельєфу*:
*1.* Щоб створити 3D-рельєф, OsmAnd отримує інформацію про висоту місцевості.
*2.* На основі даних про висоту створюється 3D-модель для відображення гір, пагорбів, долин та інших елементів рельєфу на мапі.
*3.* Потім OsmAnd відображає ці тривимірні моделі на плоскій мапі. Мапу можна збільшувати, зменшувати та обертати, щоб переглядати рельєф з різних кутів та перспектив.
*4.* Відображення контурних ліній на мапі не залежить від того, чи є джерело мапи онлайн чи офлайн.


## Підготовка/копіювання растрових мап на пристрій {#preparecopy-raster-maps-to-device}

Існує кілька способів додати нову растрову мапу, скопіювати її з іншого пристрою, підготувати на ПК та попередньо завантажити тайли для використання в офлайн-режимі. Наприклад, ви можете створити власний пакет мап на ПК за допомогою спеціального програмного забезпечення, такого як [MOBAC, OsmAndMapCreator тощо](../../technical/map-creation/index.md). Зазвичай растрові мапи розповсюджуються як файли з розширенням `.sqlitedb`.

Ось основні методи додавання нового джерела растрових мап, яке ще не визначено в OsmAnd:

- Відкрийте готовий до використання файл `.sqlitedb` за допомогою OsmAnd.
- Імпортуйте пакет з підготовленими онлайн-мапами з іншої програми OsmAnd як спеціальний **пакет** `.osf` за допомогою [функції імпорту/експорту](../personal/import-export.md).
- Створіть нове джерело онлайн-мап на самому мобільному пристрої.
- Підготуйте магічну URL-адресу з параметрами джерела онлайн-мап та відкрийте її за допомогою OsmAnd.


### Додати нове джерело онлайн растрових мап {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

Щоб створити джерело растрової мапи, вам потрібно знати **URL тайлу**, який є специфічною URL-адресою, що розповсюджує тайли мапи в проекції Меркатора. Наприклад, URL тайлу може виглядати так: `https://tile.osmand.net/hd/6/55/25.png`, де `tile.osmand.net/hd/` є базовою URL-адресою.

Ось ключові параметри для налаштування нового джерела онлайн-мап:

| Параметр | Опис |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Вкажіть назву для нового джерела онлайн-мап. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Введіть або вставте URL-адресу для джерела онлайн-тайлів. Переконайтеся, що вона відповідає формату URL тайлів. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | Цей параметр впливає на те, як відображається мапа. <br/><ul><li>Як *тип мапи*, мапа буде обмежена вибраними рівнями масштабування.</li><li>Як *накладання/підкладка*, мапа з'явиться на вибраних рівнях масштабування, з застосуванням збільшення або зменшення за межами цих рівнів.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Встановіть тривалість (у хвилинах), після якої кешовані тайли оновлюватимуться. Ви можете залишити це поле порожнім, якщо не хочете, щоб тайли перезавантажувалися автоматично. <br/><ul><li>1 день = 1440 хвилин</li><li>1 тиждень = 10 080 хвилин</li><li>30 днів = 43 200 хвилин</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Виберіть між *псевдо-меркаторською проекцією* та *еліптичною меркаторською проекцією*, залежно від джерела. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Виберіть, як повинні зберігатися тайли: або у *файлі SQLiteDB*, або як *один файл зображення на тайл*. |


### Магічна URL-адреса для встановлення джерела мапи {#magic-url-to-install-map-source}

Онлайн-мапи можна додати за допомогою спеціального посилання до списку растрових мап OsmAnd. Натисніть на це посилання та виберіть OsmAnd для відкриття:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Параметр посилання|Приклад|
|:--------|:---------------|
| [Постійна частина]| `http://osmand.net/add-tile-source` |
|[Розділювачі]| ?   & |
|[Назва]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Рівні масштабування]|min_zoom=9 / max_zoom=15|

Ви знайдете додану онлайн-мапу у списку меню [Основний / Шар підкладки / Шар накладання](#select-raster-maps).


## Керування растровими мапами {#manage-raster-maps}

Растрові мапи можуть займати значний обсяг дискового простору, тому вам може знадобитися регулярно перевіряти його. Для великих наборів даних рекомендується використовувати *растрове джерело SQLite*, оскільки воно зберігатиме всі тайли в одному великому файлі (базі даних SQLite).

- [**Формат SQLite**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Формат Metainfo**](../../technical/osmand-file-formats/osmand-metainfo.md)

Щоб змінити формат тайлів, ви можете вибрати <Translate android="true" ids="storage_format"/> у меню редагування онлайн-мап:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-мапи →
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Очистити кеш растрових мап {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Тайли зберігаються в кеші при використанні онлайн-растрових мап як основного / накладеного / підкладкового шару. Ви можете побачити розмір вашого файлу SQ Lite під назвою вашої онлайн-мапи у списку. Іноді потрібне регулярне очищення для прискорення відображення тайлів або для оновлення даних.

Щоб очистити кеш тайлів мапи, вам потрібно зробити наступне:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-мапи →
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*


### Завантажити / Оновити тайли {#download--update-tiles}

Якщо ви хочете отримати доступ до растрових мап офлайн, вам може знадобитися попередньо завантажити тайли. Це можна зробити на вашому мобільному пристрої, але майте на увазі, що деякі сервіси можуть блокувати завантаження великих пакетів. Ви також можете використовувати ту ж функцію для оновлення вже завантажених тайлів для вибраних областей, інакше OsmAnd продовжуватиме відображати тайли, які вже зберігаються в кеші.

Щоб мапи автоматично оновлювали тайли через деякий час, ви можете встановити [час закінчення терміну дії](#add-new-online-raster-map-source), тоді OsmAnd перезавантажуватиме тайли, як тільки вони будуть відображені.

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

- Щоб завантажити або оновити растрові тайли, вам потрібно вибрати джерело онлайн-мапи як [основне джерело мапи](#select-raster-maps) (**Android / iOS**). Ви також можете вибрати онлайн-тайли окремо для мапи [Накладання](#overlay-layer) або для [Підкладки](#underlay-layer) (Тільки для **Android**).

- Для версії програми OsmAnd для **Android** вам потрібно вибрати область відповідно до розміру екрана вашого пристрою та довго натиснути на мапу. Потім виберіть [*Дії*](../map/map-context-menu.md#update--download-online-maps) у контекстному меню мапи та опцію *Завантажити мапу* або *Оновити мапу*. На екрані Завантаження мапи внесіть зміни до необхідних налаштувань та натисніть Завантажити.

- У версії програми OsmAnd для **iOS** вам потрібно довго натиснути на мапу, потім вибрати [*Дії*](../map/map-context-menu.md#update--download-online-maps) та опцію *Завантажити мапу* або *Оновити мапу* з контекстного меню мапи. На екрані Завантаження мапи ви можете вибрати потрібну область та змінити необхідні налаштування. Після того, як ви встановите всі параметри, ви можете побачити кількість тайлів та розмір завантаження.


### Змінити параметри растрової мапи {#change-raster-map-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → вибрати онлайн-мапи → &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Растрові мапи можна використовувати в існуючому вигляді, якщо тайли вже відображені. Якщо растрові мапи надаються онлайн, завжди існує базова URL-адреса, яку потрібно налаштувати. Існує ще кілька основних параметрів, які можна змінити для растрових мап, про це ви можете прочитати в [цьому розділі](#add-new-online-raster-map-source) статті. Більш складні параметри закодовані у внутрішніх компонентах [формату SQ Lite](../../technical/osmand-file-formats/osmand-sqlite.md).


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми кольорових палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Жовтень 2024*