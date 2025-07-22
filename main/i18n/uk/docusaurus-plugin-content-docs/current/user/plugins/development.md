---
source-hash: 580c8fbd0c79564b0976cee07d1bc9d431e8f4533df5daa052bc1202ccd84564
sidebar_position: 10
title:  Розробка OsmAnd
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




## Огляд {#overview}

Тестові функції програми зібрані в плагіні розробки OsmAnd. Використовуйте їх на свій страх і ризик.

Плагін розробки OsmAnd дозволяє спробувати нові функції програми або налаштувати OsmAnd для тестування: імітувати навігаційні маршрути, перевіряти продуктивність рендерингу екрана тощо. Плагін призначений для *розробників та досвідчених користувачів* і не потрібен для щоденного використання програми.


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб активувати спеціальні функції для розробників і тестувальників:

1. [Увімкніть](../plugins/index.md#enable--disable) плагін розробки OsmAnd у розділі Плагіни *Головного меню*.
2. Зробіть необхідні налаштування в [меню налаштувань плагіна](#plugin-settings).
3. Увімкніть **віджети розробника**, якщо необхідно.


## Налаштування плагіна {#plugin-settings}

:::info info
Налаштування плагіна розробки OsmAnd є глобальними та застосовуються до всіх профілів.
:::

Використовуйте один із наступних шляхів, щоб відкрити налаштування плагіна:

- *Головне меню → Плагіни → Розробка OsmAnd → Налаштування*.
- *Головне меню → [Глобальні налаштування](../personal/global-settings.md) → Профіль → Налаштування плагіна розробки OsmAnd*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>


### Рельєф {#terrain}

- **Використовувати растровий [формат SQLIte](../../technical/osmand-file-formats/osmand-sqlite) для затінення пагорбів та схилів** (*Android*). Завантажувати растрові карти старого формату.


### Вирішення проблем {#troubleshotting}

- **Імітувати ваше місцезнаходження** (*Android* / *iOS*). [Імітувати](#gpx-track-simulation) місцезнаходження та рух за допомогою треку GPX.
- **Режим енергозбереження** (*Android* / *iOS*). Це налаштування зменшує [частоту оновлення екрана](#map-rendering-fps-widget) на 20 кадрів на секунду, щоб допомогти заощадити заряд батареї під час використання програм.
- **Використовувати 3D-іконки позиції місцезнаходження** (*iOS*). Дозволяє вибрати 3D-іконку для [іконки Моє місцезнаходження](../personal/profiles.md#my-location-appearance).
- **Імітувати дані OBD** (*Android*). Дозволяє імітувати використання [сканера OBD](./vehicle-metrics.md).
- **Інформація про налагодження продуктивності** (*Android*). Відображає продуктивність рендерингу та навігації.
- **Вимкнути шари карти** (*Android*). Вимикає всі шари карти над векторною картою (потрібен перезапуск).
- **Буфер Logcat** (*Android*). Перевіряти та ділитися детальними журналами програми.
- **Показувати повідомлення про натиснуту клавішу** (*Android*). Відображати повідомлення про клавішу.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Пеленг — це напрямок компаса від вашого поточного місцезнаходження до запланованого пункту призначення. Впливає на *[запис треку](../plugins/trip-recording.md)*.
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Курс — це напрямок компаса від вашого поточного місцезнаходження до істинного півночі. Ця опція увімкнена за замовчуванням. Впливає на *[запис треку](../plugins/trip-recording.md)*.


### Тестування програми {#application-testing}

:::caution Тільки Android
:::

- **Імітувати перший запуск програми**. Встановлює прапорець, що вказує на перший запуск програми, зберігає всі інші налаштування без змін.
- **Тестувати голосові підказки**. Виберіть голос і протестуйте, відтворюючи оголошення.
- **Прозорий рядок стану**. Карта стає видимою під рядком стану.
- **Показувати банер безкоштовної версії**. Відображати банер безкоштовної версії навіть у платній версії.
- **Показувати налагоджувальну інформацію**. Відображати графічну інформацію про розміщення кожного тексту на карті.
- **Дозволити відображення зверху**. Дозволяє текстам карти відображатися один над одним.


### Внутрішні алгоритми {#internal-algorithms}

:::caution Тільки Android
:::

- **Безпечний режим**. Запускати програму в (повільнішому) безпечному режимі.


### Налаштування пам'яті {#memory-settings}

:::caution Тільки Android
:::

- Опція **Пам'ять, виділена для маршрутизації** дозволяє визначити обсяг пам'яті, виділеної для розрахунку довгих маршрутів. Ви можете використовувати цю опцію, якщо в *Налаштуваннях навігації* вибрано [Стандартна маршрутизація A*](../navigation/guidance/navigation-settings.md#development-settings).

***Розрахунок наддовгих маршрутів:***

- Більший обсяг виділеної пам'яті може вплинути на продуктивність інших програм.
- [Розрахунок 50-кілометрових маршрутів для пішоходів](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Інформація та статистика {#info-and-statistics}

:::caution Тільки Android
:::

- **Виділена пам'ять**. Відображає виділену системну пам'ять для програми OsmAnd.
- **Загальна нативна пам'ять**. Відображає загальний обсяг нативної пам'яті, виділеної програмі, включаючи пропорційну пам'ять.
- **Інформація A-GPS**. Вказує, коли востаннє завантажувалися дані A-GPS.
- **Інформація день/ніч**. Вказує час сходу та заходу сонця сьогодні.
- **Статистика енергоспоживання (середнє за 1 / 5 / 15 хвилин)**. Відображає рівень заряду батареї за хвилину (%) та середнє споживання енергії (мАг) за інтервали 1, 5 та 15 хвилин.
- **Статистика рендерингу (середнє за 1 / 5 / 15 хвилин)**. Показує статистику рендерингу, включаючи FPS за останні 1 тис. кадрів, CPU (тайли), CPU (час простою) та CPU (режим очікування) в середньому за інтервали 1, 5 та 15 хвилин.

**Кнопка:**

- **Скинути налаштування плагіна до стандартних**. Скидає всі налаштування плагіна до їх стандартних значень.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Віджет FPS рендерингу карти {#map-rendering-fps-widget}

:::info Важливо
Віджети розробника OsmAnd можна додати на екран лише тоді, коли увімкнено плагін розробки OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>

[Віджет FPS](../widgets/info-widgets.md#map-rendering-fps) показує, наскільки швидко відображаються та оновлюються карта та елементи карти. Числове значення вказується в кадрах на секунду (FPS).


## Віджети положення камери {#camera-position-widgets}

:::info Важливо
Віджети розробника OsmAnd можна додати на екран лише тоді, коли увімкнено плагін розробки OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати [віджети положення камери](../widgets/info-widgets.md#camera-widgets), щоб надати карті OsmAnd реалістичного вигляду та відповідати фотографіям Землі, зробленим як зверху, так і з космосу.


### Нахил камери {#camera-tilt}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)

</TabItem>

</Tabs>

Віджет нахилу камери відображає нахил між центральним вектором огляду камери (глядача) та уявною плоскою поверхнею землі. Значення за замовчуванням — 90 градусів (без нахилу).

:::note
Нахил камери змінюється шляхом переміщення камери (глядача), тоді як центральна точка на карті (на яку ми дивимося) залишається незмінною. Відстань до неї (фактично, масштаб) не змінюється.
Водночас, через уявний рух глядача, відстань від камери до поверхні змінюється.
:::


### Висота камери {#camera-elevation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)

</TabItem>

</Tabs>

Віджет висоти камери показує висоту камери над рівнем поверхні. Висота камери вказується в метрах / кілометрах.


### Рівень масштабування {#zoom-level}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)

</TabItem>

</Tabs>

Віджет має два режими відображення, які перемикаються натисканням:

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Показує поточний рівень масштабування карти.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Показує поточне співвідношення між відстанню на карті та відповідною відстанню на землі. Приклади: "1 : 3 000", "1 : 3,3 M", "1: 340 K".

:::note

- Початковий рівень масштабування (0) — це рівень, на якому вся поверхня землі (повна карта) відображається на екрані, а її розмір становить 256 на 256 пікселів.
- Кожен наступний рівень масштабування зменшує уявну відстань до землі приблизно в 2 рази.

:::

### Відстань до цілі {#distance-to-target}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)
</TabItem>

</Tabs>

Віджет відстані від камери до цілі показує відстань між камерою (глядачем) та центром карти. Ця відстань відображається в метрах / кілометрах.


### Порівняння із супутниковими знімками {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

Порівняння карти OsmAnd та поверхні землі виявляє наступні закономірності:

- Максимальне спотворення спостерігається при великих масштабах (6-7 масштаб при нахилі камери 90 градусів).
- Зі зменшенням нахилу камери (від 90 до 10 градусів) спотворення карти збільшується.
- Спотворення починають спостерігатися раніше на високих широтах.

У таблиці нижче наведено інформацію про нахил камери, відстань до цілі та рівень масштабування, при якому стають видимими спотворення карти OsmAnd. Якщо камера продовжує віддалятися від цілі, спостережуване спотворення карти OsmAnd буде збільшуватися.

|Нахил (90) |Широта |Макс. масштаб |Висота, км |Спотворення|
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Нахил (60)** |**Широта** |**Макс. масштаб** |**Висота, км** |**Спотворення**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Нахил (45)** |**Широта** |**Макс. масштаб** |**Висота, км** |**Спотворення**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Нахил (20)** |**Широта** |**Макс. масштаб** |**Висота, км** |**Спотворення**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Віджет доступної оперативної пам'яті {#available-ram-widget}

Цей віджет розроблено спеціально для вас під час використання OsmAnd, щоб забезпечити більш зручну та інформативну взаємодію з доступною оперативною пам'яттю на вашому пристрої. Він дозволяє легко та швидко контролювати доступну оперативну пам'ять, що особливо корисно під час використання OsmAnd для навігації. Детальніше про віджет читайте в статті [Інформаційні віджети](../widgets/info-widgets.md#available-ram).


## Імітація треку GPX {#gpx-track-simulation}

OsmAnd надає можливість імітувати місцезнаходження та рух вашого пристрою за допомогою треку GPX. Для цих цілей використовуйте опцію *<Translate android="true" ids="simulate_location_by_gpx"/>* у [налаштуваннях](#plugin-settings) плагіна розробки OsmAnd:

- Натисніть *<Translate android="true" ids="simulate_location_by_gpx"/>*.
- Виберіть трек для імітації місцезнаходження та руху пристрою.
- Виберіть швидкість імітації руху.
- Натисніть кнопку "Старт".

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)

</TabItem>

</Tabs>

Після запуску імітації ви побачите на головному екрані програми, що навігаційна позначка рухається відповідно до треку GPX. Натисніть [кнопку мого місцезнаходження](../map/interact-with-map#my-location-and-zoom), щоб синхронізувати *Моє місцезнаходження* (імітована геолокація пристрою) з центром карти.
Щоб зупинити імітацію руху вашого пристрою, поверніться до [налаштувань](#plugin-settings) розробки OsmAnd і натисніть **зупинити** в опції **імітувати ваше місцезнаходження**.

- До *<Translate android="true" ids="simulate_location_by_gpx"/>* також можна отримати доступ через **[Меню швидких дій](../widgets/quick-action.md#navigation)**.
- Швидкість руху місцезнаходження під час імітації можна встановити рівною записаній швидкості (1) або швидшою (x2, x3, x4).
- Ви також можете імітувати рух по треку GPX з [меню навігації](../navigation/setup/route-navigation.md#simulated-navigation) без увімкнення плагіна розробки OsmAnd. У цьому випадку ваше місцезнаходження не буде синхронізовано з треком.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: травень 2023*