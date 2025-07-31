---
source-hash: 191954c813f34f798ce26abb0d68f5443817e0370f9497817d385e2fbd80105e
sidebar_position: 14
title: Топографія
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

:::info Платна функція
Плагін "Топографія" є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

Топографія — це важлива функція картографії, яка надає інформацію для візуальної оцінки рельєфу місцевості.
Топографічна інформація, така як [Горизонталі](#contour-lines), [Рельєф](#terrain) (*Відтінення пагорбів* та *Ухил*), а також [3D-рельєф](#3d-relief), допомагає візуально оцінити місцевість, бачачи висоту, рельєф, екстремуми, крутизну або точки однакової висоти.

Кожна функція, що надається цим плагіном, є незалежним шаром карти, який, якщо його увімкнути, може відображатися над або під основним джерелом карти залежно від [налаштувань](../map/raster-maps.md#overlay-layer).

Плагін "Топографія" надає доступ до наступних типів карт:

- [Горизонталі](#contour-lines). Це [векторна карта](../map/vector-maps.md), представлена в [**метрах** або **футах**](#contour-lines-meters-or-feet). Горизонталі показують рівні висот і допомагають візуалізувати рельєф.
- [Відтінення пагорбів](#hillshade-slope-and-altitude-layers). Типи карт з відтіненням пагорбів та схилів роблять рельєф більш помітним та допомагають візуально інтерпретувати місцевість.
- [Ухил](#hillshade-slope-and-altitude-layers). [Растровий](../map/raster-maps.md) шар, що надає інформацію про крутизну схилів, що може бути важливим для планування маршруту та безпеки.
- [3D-рельєф](#3d-relief). Це [векторна карта](../map/vector-maps.md), що надає тривимірне представлення рельєфу, доступна лише за [підпискою OsmAnd Pro](../purchases/index.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Горизонталі | Відтінення пагорбів | Ухил |
|:---|:---|:---|
| ![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) | ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) | ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Горизонталі | Відтінення пагорбів | Ухил |
|:---|:---|:---|
| ![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) | ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) | ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) |

</TabItem>

</Tabs>

#### Ліцензія на дані DEM, що використовуються OsmAnd для визначення рельєфу {#license-for-dem-data-used-by-osmand-for-terrain-detection}

Дані про висоти на карті (між 70 градусами північної широти та 70 градусами південної широти) були отримані з вимірювань, зроблених у рамках *Місії топографії шатлівського радара (SRTM)*. У ній використовувався *Удосконалений космічний тепловий емісійний та відбивний радіометр (ASTER)*, основний інструмент зображення в *Системі спостереження Землі НАСА*.
Для отримання повної інформації дивіться [Ліцензію](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).

<details>
<summary>Дані DEM (DSM)</summary>
   - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Оригінальні дані, використані для цього продукту, були надані JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummins, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
	- <a href="https://sonny.4lima.de">Sonny's LiDAR Digital Terrain Models of Europe</a> (DTM).

</details>

## Необхідні параметри налаштування {#required-setup-parameters}

Для відображення даних **Горизонталей** та **Рельєфу (Відтінення пагорбів, Ухил)** на карті:

1. **Придбання**: [План придбання OsmAnd+, OsmAnd Maps+ або OsmAnd Pro](../plugins/index.md#purchase)
2. [Увімкніть](../plugins/index.md#enable--disable) плагін "Топографія" у розділі "Плагіни" *Головного меню*.
3. [Завантажте](#download-maps): Горизонталі, Відтінення пагорбів, Ухил або 3D-карти рельєфу.
4. **Увімкніть та налаштуйте**: Горизонталі, Відтінення пагорбів або Ухил для перегляду карти.
5. Ви також можете переглянути [відеоурок на YouTube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).

Щоб відобразити [**3D-рельєф**](#3d-relief), вам потрібно придбати план *OsmAnd Pro*, що включає доступ до плагіна "Топографія".

## Завантажити карти {#download-maps}

Щоб почати працювати з функціоналом плагіна, необхідно завантажити потрібні карти. Деякі карти, наприклад, Горизонталі для гірських регіонів, можуть бути досить великими, перевищуючи 2 ГБ, і можуть не підтримуватися на застарілих пристроях.

Для стабільної роботи та економії ресурсів можна завантажити карту не всієї країни, а її окремих регіонів, якщо такі регіони пропонуються в застосунку. Інформація про розмір кожного типу карти вказана під їхньою назвою.

### 3D-карти рельєфу {#3d-relief-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,regions"/>*

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_5.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

Для відображення Відтінення пагорбів, Ухилу та 3D-рельєфу необхідно завантажити карти **Рельєфу (3D)**. Після завантаження карт ви можете відобразити **Горизонталі** та **Рельєф** за допомогою розділу [Налаштувати карту](../map/configure-map-menu.md) *Головного меню*.

Якщо карта, що відображається на екрані, не завантажена, то в *Меню → Налаштувати карту → Розділ Топографія → Рельєф* внизу списку функцій буде відображено розділ *Завантажити карти* із запропонованими додатковими картами.

### Горизонталі (метри або фути) {#contour-lines-meters-or-feet}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_download_dialogue_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png)

</TabItem>

</Tabs>

Для [**Горизонталей**](#contour-lines) необхідно визначити, в яких [одиницях](../personal/profiles.md#units--formats) (метрах або футах) вони будуть відображатися на карті, та завантажити відповідну версію карти на ваш пристрій.

**Параметри одиниць вимірювання не взаємозамінні**, тому якщо вам потрібно переключитися з метрів на фути або навпаки, вам потрібно видалити попередню версію карти Горизонталей, щоб завантажити нову версію.

## Горизонталі {#contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>*

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Горизонталі*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png)

</TabItem>

</Tabs>

[Горизонталі](../map/vector-maps.md#-contour-lines) — це графічне представлення висот на карті, доступне у вигляді векторних карт. Вони утворюють лінії, що відповідають точкам з однаковою висотою, які формують контури, що дозволяють визначити, в якому напрямку і наскільки нахилена поверхня.

При використанні [Механізму відображення карт](../personal/global-settings.md#map-rendering-engine):

- **Версія 2 (OpenGL)**. Горизонталі підтримуються як у 3D-перегляді, так і в режимі 3D-рельєфу.
- **Версія 1**. Горизонталі не підтримуються при використанні тайлових карт, отриманих з Інтернету.

**Налаштування вигляду**:

- *<Translate android="true" ids="download_srtm_maps"/>*. Увімкнення або вимкнення горизонталей.
- *<Translate android="true" ids="show_from_zoom_level"/>*. Визначення [рівнів масштабування](../map/interact-with-map.md#my-location-and-zoom), на яких горизонталі видимі.
- *<Translate android="true" ids="srtm_color_scheme"/>*. Вибір кольору для відображення горизонталей.
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>*. Налаштування ширини горизонталей.
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>*. Вибір щільності горизонталей (Низька, Середня, Висока). Вища щільність може вплинути на швидкість завантаження.
- *<Translate android="true" ids="maps_and_resources"/>*. Перегляд та завантаження карт горизонталей для поточного регіону та прилеглих територій.

## Рельєф {#terrain}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png) ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain"/>*

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png)

</TabItem>

</Tabs>

Опція **Рельєф** дозволяє увімкнути та налаштувати три функції, такі як *Відтінення пагорбів*, *Ухил* та *Висота*.
Особливості:

- Одночасно можна увімкнути лише одну опцію: Відтінення пагорбів, Ухил або Висота.
- Якщо ви не бачите жодних змін після завантаження та увімкнення відповідної карти, рекомендується перезапустити застосунок.

Меню **Рельєф** включає вибір [колірної схеми](#default-color-scheme) з можливістю її [зміни](#modify-color-scheme) (для [передплатників Pro](../../user/purchases/index.md)), можливість змінювати прозорість шару на карті ([видимість](#visibility)), а також вибирати [рівень масштабування](#zoom-levels) для його відображення, інформацію про розмір [кешованих даних](#cache-size) та список [карт](../../user/personal/maps-resources.md), необхідних для відображення шару.

## Відтінення пагорбів, Ухил та Шари висот {#hillshade-slope-and-altitude-layers}

| Відтінення пагорбів | Ухил | Висота |
| ------ | ------- | ------- |
| ![Hillshade](../../../blog/2023-08-28-terrain/img/hillshade.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) | ![Slope](../../../blog/2023-08-28-terrain/img/slope.png) |

**Відтінення пагорбів** базується на імітації освітлення поверхні за допомогою даних рельєфу. Цей метод передбачає створення тіней та відблисків на основі кута поверхні відносно джерела світла. В результаті ви бачите природні пагорби, долини та інші деталі рельєфу на карті.

**Ухил** визначає кут нахилу поверхні на основі даних про висоту точок на карті. Розрахунки кута нахилу виконуються з урахуванням змін висоти та відстаней між точками, і ця зміна представляється як кут нахилу.

**Висота** представляє висоту точок на карті відносно рівня моря. Вона допомагає зрозуміти, як змінюється рельєф по висоті. Ця функція особливо корисна для таких видів діяльності, як піші прогулянки або гірський велосипед, де знання висоти може допомогти в плануванні маршрутів та керуванні фізичним навантаженням. Дані про висоту отримуються з моделей рельєфу та надають чітке уявлення про високі та низькі точки, що полегшує оцінку складності маршруту або ідентифікацію вершин та долин на вашому шляху.

Растрові карти **Відтінення пагорбів**, **Ухилу** та **Висоти** створюються на основі растрових даних рельєфу, таких як Цифрові моделі рельєфу (DEM).

**Використання:**

- *Навігація.* Допомагає ідентифікувати круті схили, як вниз, так і вгору, що може бути вирішальним для безпечної навігації.
- *Планування маршрутів.* Допомагає вибрати найбільш підходящі маршрути, враховуючи рельєф.
- *Оцінка рельєфу.* Зручно для візуалізації ландшафту, особливо якщо ви йдете пішки або їдете на велосипеді.

### Колірна схема за замовчуванням {#default-color-scheme}

| Відтінення пагорбів | Ухил | Висота |
| ------ | ------- | ------- |
|![Hillshade](@site/static/img/plugins/contour-lines/color_scheme_hillshade_menu_2.png)|![Slope](@site/static/img/plugins/contour-lines/color_scheme_slope_menu_2.png)| ![Menu](@site/static/img/plugins/contour-lines/color_scheme_altitude_menu.png) |

- *Відтінення пагорбів* використовує темні відтінки для відображення схилів, вершин та низин. Віртуальне Сонце має фіксований азимут (напрямок) 315 градусів.

- *Ухил* використовує колір для візуалізації крутизни рельєфу. Ви можете прочитати більше про це [тут](https://en.wikipedia.org/wiki/Grade_(slope)). Кожен колір відповідає куту відхилення від горизонталі. Додаткова колірна схема *Ухилу*, ***Лавина***, доступна в меню **Змінити**.

- *Висота*. Карта висот забарвлює кожен піксель відповідно до розрахованої висоти карти, використовуючи градієнт з визначеної колірної схеми. Зазвичай схеми висот дуже залежать від місцевості. У гірських районах ви б віддали перевагу розподілу кольорів у ширшому діапазоні висот, а на рівнинних ділянках ви б вибрали колірну схему з невеликим діапазоном між мінімальною/максимальною висотою.

> *Будь ласка, прочитайте статтю [Колірна схема](../personal/color-palette-schemes.md) для отримання додаткової інформації.*

### Змінити колірну схему {#modify-color-scheme}

:::info Платна функція
*Змінити колірну схему* — це платна функція **OsmAnd Pro** для [iOS](../purchases/ios.md#pro-features) та [Android](../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_andr.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_1_ios.png) ![Modify Color Scheme](@site/static/img/plugins/contour-lines/modify_color_scheme_2_ios.png)

</TabItem>

</Tabs>

Функція *Змінити колірну схему* дозволяє вибрати колірну схему:

- З [попередньо визначеного списку](#default-color-scheme).
- З файлів колірних палітр, які ви створили на своєму комп'ютері. Користувацькі файли можна додати до OsmAnd за допомогою [інструменту імпорту/експорту](../personal/import-export.md).

Ви можете [редагувати ці палітри](../personal/color-palette-schemes.md#edit-palette-file), щоб персоналізувати вигляд карт та маршрутів.

### Видимість {#visibility}

| Видимість 31% | Видимість 74% |
| ------ | ------- |
| ![Visibility ](../../../blog/2023-08-28-terrain/img/31.png) | ![Visibility ](../../../blog/2023-08-28-terrain/img/74.png) |

Функція *Видимість* використовується для налаштування прозорості тіней для Відтінення пагорбів та кольорів, що використовуються для представлення кута в параметрі Ухил.

### Рівні масштабування {#zoom-levels}

![Zoom](../../../blog/2023-08-28-terrain/img/zoom.png)

Функція *Рівні масштабування* дозволяє встановити мінімальні та максимальні значення рівнів масштабування карти, від 4 до 19, на яких будуть відображатися шари карти Відтінення пагорбів або Ухил.

### Розмір кешу {#cache-size}

**Розмір кешу** — це інформаційний розділ, який відображає обсяг пам'яті на вашому пристрої, що наразі використовується для даних *Рельєфу*. Щоразу, коли ви переглядаєте інформацію *Відтінення пагорбів* або *Ухилу* на карті, всі ці дані тимчасово зберігаються в кеші для швидкого доступу та подальшого використання, уникаючи додаткового навантаження на процесор вашого пристрою.

**Очищення кешу** іноді необхідне для звільнення місця на вашому пристрої або для вирішення потенційних проблем з продуктивністю. Щоб очистити кеш, вам потрібно перейти до *Системних налаштувань* пристрою, потім шлях може бути таким: *Застосунки → OsmAnd → Сховище → Очистити кеш*.

### Механізм відображення (Android) {#rendering-engine-android}

**Відтінення пагорбів** та **Ухил** відображаються та налаштовуються в будь-якому вибраному [Механізмі відображення карт](../personal/global-settings.md#map-rendering-engine).

1. Якщо ви використовуєте **Механізм відображення карт Версія 1**, вам потрібно використовувати звичайне [завантаження](../start-with/download-maps.md) растрових карт Відтінення пагорбів та Ухилу.

2. Якщо ви використовуєте **Механізм відображення карт Версія 2 (OpenGL)**:
    - Ви можете продовжувати використовувати звичайний тип завантаження растрових карт Відтінення пагорбів та Ухилу. Однак для цього вам потрібно буде активувати [плагін розробки OsmAnd](../plugins/development.md) та увімкнути налаштування [Використовувати растровий формат SQLite для відтінення пагорбів та ухилу](../plugins/development.md#terrain).

    - Альтернативно, ви можете використовувати [Завантаження карти рельєфу (3D)](../personal/maps-resources.md#paid-features-for-the-selected-location). Це економить місце в пам'яті вашого пристрою, а ефекти Відтінення пагорбів, Ухилу та 3D-рельєфу будуть генеруватися з них за допомогою вашого пристрою.

### Швидкі дії {#quick-actions}

![QA for Terrain](@site/static/img/plugins/contour-lines/QA_for_terrain.png)

Ви можете використовувати кнопки *Швидкі дії* на екрані карти, щоб перемикати видимість шарів [Горизонталей](#contour-lines), [Рельєфу](#terrain) та [Колірної схеми рельєфу](#default-color-scheme). Залежно від шару, вибраного в меню "Налаштувати карту", призначення дії *Рельєф* кнопці відображатиме *Відтінення пагорбів*, *Ухил* або *Висоту*.

Основні налаштування *Показати або приховати типи карт* знаходяться в розділі "Топографія" меню "Налаштувати карту". У статті [Швидкі дії](../widgets/quick-action.md#configure-map) ви можете знайти список шарів, доступних для відображення. Якщо вам потрібен швидкий доступ до цієї конфігурації карти, використовуйте інструмент *Користувацька кнопка*.

- Перейдіть до [Додати дію](../widgets/quick-action.md#custom-buttons): *Меню → Налаштувати екран → Користувацькі кнопки → Швидкі дії → Додати дію → Налаштувати карту*.
- Додайте одну або кілька кнопок швидких дій, щоб змінити видимість певного топографічного шару.

## 3D-рельєф {#3d-relief}

:::info Pro feature
3D-рельєф — це платна функція [**OsmAnd Pro**](../purchases/index.md) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/>*

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_switch_ios.png)

</TabItem>

</Tabs>

Функція 3D-рельєфу створює піднятий рельєф і забезпечує тривимірне представлення ландшафту. 3D-рельєф працює офлайн і може використовуватися з [векторними картами OsmAnd](../map/vector-maps.md) або будь-якими [растровими картами](../map/raster-maps.md#select-raster-maps) як [Джерело карти](../map/raster-maps.md#main) або як [Підкладка/Накладка](../map/raster-maps.md#overlay-layer).

***Як відобразити 3D-рельєф на карті.***

- Придбайте підписку **OsmAnd Pro** для [iOS](../purchases/ios.md#pro-features) або [Android](../purchases/android.md#pro-features).

- Перейдіть до [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md):
    - **Android**: прокрутіть до розділу *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*.
    - **iOS**: прокрутіть до розділу *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*.

- Завантажте [карту рельєфу (3D)](#3d-relief-maps) регіонів, якщо необхідно.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

| Векторний шар карти | Растровий шар карти |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

| Векторний шар карти | Растровий шар карти |
| ------ | ------- |
| ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) | ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png) |

</TabItem>

</Tabs>

### Вертикальне перебільшення {#vertical-exaggeration}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,relief_3d"/> → Вертикальне перебільшення*

![Vertical exaggeration Android](@site/static/img/plugins/contour-lines/vertical_exag_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,shared_string_terrain,shared_string_relief_3d"/> → Вертикальне перебільшення*

![Vertical exaggeration iOS](@site/static/img/plugins/contour-lines/vertical_exag.png)

</TabItem>

</Tabs>

*Вертикальне перебільшення* — це спеціальний коефіцієнт для *3D-рельєфу*. Ви можете змінити масштаб (*Вертикальне перебільшення*) від x1 до x3. Ця функція дозволяє переглядати більш плавні контури рельєфу з підвищеною деталізацією.

### Відтінення пагорбів та 3D-рельєф {#hillshade-and-3d-relief}

| Відтінення пагорбів | 3D-рельєф |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Відтінення пагорбів** — це тип карти, що відображає рельєф за допомогою тіней, створюючи візуальне представлення схилу та форми земної поверхні.
**3D-рельєф** — це функція, яка додає тривимірні ефекти до карти.

Якщо ви **вимкнете** *Відтінення пагорбів* та **увімкнете** *3D-рельєф*, тіні рельєфу все одно будуть видимі, оскільки *Відтінення пагорбів* та *3D-рельєф* — це два різні способи візуалізації карти. *Відтінення пагорбів* створює тіні на основі рельєфу та додає їх до карти, тоді як *3D-рельєф* моделює 3D-елементи для відображення глибини та форми рельєфу, а тіні є частиною візуалізації. Ці функції можуть працювати паралельно, і вимкнення *Відтінення пагорбів* не впливає на те, як відображаються 3D-ефекти.

Коли **Відтінення пагорбів** **увімкнено**, зображення з тінями рельєфу виглядає більш детальним, темнішим та ступінчастим, ніж зображення *3D-рельєфу*. Пояснення полягає в тому, що *Відтінення пагорбів* підкреслює градієнти та контрасти рельєфу, створюючи більш чітке та детальне зображення. Функція *3D-рельєфу* надає карті більш плавний та згладжений вигляд, пом'якшуючи рельєф та потенційно зменшуючи видимість деяких дрібних деталей.

## Комбінування типів шарів {#combine-layer-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>

OsmAnd дозволяє комбінувати кілька типів шарів карти для більш наочного відображення.

- Поєднання **Горизонталей** та **Відтінення пагорбів** є оптимальним для візуальної та числової оцінки крутизни гірського схилу.
- Поєднання шарів **Горизонталей** та **Ухилу** найкраще підходить для оцінки крутизни схилу та пошуку точок з однаковою висотою.
- Поєднання шарів **3D-рельєфу** та **Відтінення пагорбів** дозволяє отримати більш реалістичне та візуальне представлення рельєфу, ландшафту та його деталей. Ця комбінація особливо підходить для гірської та горбистої місцевості.

## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карт)](../../user/map/vector-maps.md)

### Поширені проблеми та їх вирішення {#common-issues-and-solutions}

<!-- Troubleshooting Steps-->

1. Як відновити покупку плагіна "Топографія" (раніше "Горизонталі"). [(перевірити)](../troubleshooting/purchases_payments.md#how-to-restore-the-topography-formerly-contour-lines-plugin-purchase).
2. Горизонталі, дані висот або 3D-рельєф не відображаються. [(перевірити)](../troubleshooting/setup.md#contour-lines-elevation-data-or-3d-relief-are-not-displayed)
3. Карта автоматично перемикається в 3D-режим під час навігації:
    - Переконайтеся, що кнопка **3D-режим** вимкнена в **Меню → Налаштувати екран → Кнопки → Кнопки за замовчуванням**.
    - Перевірте, чи увімкнені будь-які функції рельєфу в **Меню → Налаштувати карту → Топографія**, які можуть викликати 3D-ефект.

> *Останнє оновлення: січень 2025*