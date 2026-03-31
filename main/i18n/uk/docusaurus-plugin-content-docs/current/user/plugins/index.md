---
source-hash: 486ba412add5b9d4b990309d87b8af70a94ef71e579cdfeb3ce640bc57611e55
sidebar_position: 18
title:  Плагіни
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

Плагіни значно розширюють функціональність OsmAnd. Кожен з них призначений для вирішення певного завдання або випадку використання, наприклад, для запису подорожі, доступу до статей Вікіпедії в автономному режимі, візуалізації даних про рельєф або перегляду вулиць.

Плагіни можуть бути внутрішніми, що активуються в додатку OsmAnd, або зовнішніми, що встановлюються окремо. Сторонні плагіни працюють через OsmAnd API і можуть отримувати доступ до даних OsmAnd.


## Налаштування плагіна {#configure-plugin}

Щоб отримати доступ до функціонала плагіна, його спочатку потрібно [увімкнути](#enable--disable), а деякі плагіни перед використанням вимагають [покупки](#purchase). Потім, у деяких випадках, необхідно активувати певний шар карти або [налаштувати](#plugin-settings) профіль користувача.


### Увімкнути / Вимкнути {#enable--disable}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Увімкнути*

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Покупка {#purchase}

Більшість плагінів доступні безкоштовно, лише плагіни зі списку нижче вимагають для використання придбання ліцензії [OsmAnd+ або OsmAnd Pro](../purchases/index.md):  

- [Топографія](../plugins/topography.md)
- [3D-рельєф](../plugins/topography.md#3d-relief) (функція плагіна Топографія)
- [Вікіпедія](../plugins/wikipedia.md)
- [Вигляд морської карти](../plugins/nautical-charts.md)
- [Погода](../plugins/weather.md)

Детальну інформацію про покупку додатка можна знайти в розділі [Покупки](../purchases/).

### Функції плагінів {#plugin-features}

Плагіни OsmAnd можуть доповнювати такі групи функцій: **Шари**, **Віджети**, **Дії контекстного меню**, **Дії в меню**, **Стиль карти**, **Джерело карти**, **Профіль**.

🤖 *- тільки для Android версії OsmAnd.*

| Назва плагіна |Функції |
|:------------|:-------|
| [Вікіпедія](#wikipedia) | [Шар карти](../plugins/wikipedia.md#download-wikipedia-packages), [Контекстне меню](../plugins/wikipedia.md#wikipedia-settings) |
| [Онлайн-карти](#online-maps) |[Шар карти](../plugins/online-map.md#how-to-prepare-raster-maps) |
| [Запис поїздки](#trip-recording) | [Віджет](../plugins/trip-recording.md#widgets), [Профіль](../plugins/trip-recording.md#recording-settings) |
| [Топографія](#topography) | [Шар карти](../plugins/topography.md#hillshade-slope-and-altitude-layers) |
| [3D-рельєф](#topography) 🤖  | [Шар карти](../plugins/topography.md#3d-relief) |
| [Погода](../plugins/weather.md) | [Шар карти](../plugins/weather.md#display-weather-on-the-map), [Віджет](../plugins/weather#weather-widgets), [Екран](../plugins/weather.md#weather-forecast-screen) |
| [Вигляд морської карти](#nautical-map-view) | [Стиль карти](../plugins/nautical-charts.md#nautical-map-style), [Профіль](../plugins/nautical-charts.md#nautical-profile)  |
| [Вигляд лижної карти](#ski-map-view) | [Стиль карти](../plugins/ski-maps.md#set-winter-and-ski-map-style), [Профіль](../plugins/ski-maps.md#skiing-profile) |
|[Аудіо/відео нотатки](#audiovideo-notes) 🤖  | [Шар карти](../plugins/audio-video-notes.md#show-all-on-the-map), [Контекстне меню](../plugins/audio-video-notes.md#create-a-single-note), [Віджет](../plugins/audio-video-notes.md#recording-widget) |
|[Місце паркування](#parking-position) | [Контекстне меню](../plugins/parking.md#set-a-spot), [Віджет](../plugins/parking.md#parking-widget) |
|[Редагування OpenStreetMap](#openstreetmap-editing)| [Шар карти](../plugins/osm-editing.md#authorization) |
|[Mapillary](#mapillary) | [Шар карти](../plugins/mapillary.md#map-layer), [Контекстне меню](../plugins/mapillary.md#map-context-menu) , [Віджет](../plugins/mapillary.md#mapillary-widget)|
|[Зовнішні датчики](#external-sensors) 🤖  | [Віджет](../plugins/external-sensors.md#widgets) |
|[Показники автомобіля](#vehicle-metrics)  | [Користувацькі налаштування](../plugins/vehicle-metrics#scanner-settings), [Віджет](../plugins/vehicle-metrics#widgets) |
|[Астрономія](#astronomy)  | [Екран](../plugins/astronomy.md#star-map-screen), [Контекстне меню](../plugins/astronomy.md#context-menu) |
|[Доступність](#accessibility) 🤖  | [Користувацькі налаштування](../plugins/accessibility.md#plugin-settings) |
|[Розробка OsmAnd](#osmand-development) | [Користувацькі налаштування](../plugins/development.md#plugin-settings) |
|[OsmAnd Tracker](#osmand-tracker) 🤖  | [Шар карти](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Віджет](../plugins/osmand-tracker.md#tracker-widget), [Контекстне меню](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |
|[Трекер суден AIS](#ais-vessel-tracker) 🤖  |  [Користувацькі налаштування](../plugins/ais-tracker.md#plugin-settings) |


### Налаштування плагіна {#plugin-settings}

:::caution ПРИМІТКА
Тільки плагін розробки OsmAnd та плагін редагування OSM змінюють налаштування для всіх профілів. Решта плагінів налаштовуються для кожного профілю окремо.  
:::

Більшість плагінів надають специфічні для профілю або глобальні налаштування, до яких можна отримати доступ через:

- *Головне меню → Плагіни → Назва плагіна → Налаштування (&#x2699 для iOS)* або  
- *Головне меню → Налаштування → Профіль → [Налаштування плагінів](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Settings plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Settings plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Settings plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Settings plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

Наступні плагіни надають власні налаштування:

🤖 *- тільки для Android версії OsmAnd.*

| Назва плагіна | Налаштування |
|:------------|:-------|
| [Запис поїздки](#trip-recording) | Налаштуйте [режими роботи](../plugins/trip-recording.md#required-setup-parameters) запису поїздки |
| [Погода](#weather) | Налаштуйте одиниці вимірювання для відображення погодних явищ |
|[Аудіо/відео нотатки](#audiovideo-notes) 🤖  | Вибір [формату відео, тривалості зберігання тощо](../plugins/audio-video-notes.md#plugin-settings) |
|[Редагування OpenStreetMap](#openstreetmap-editing)| Вкажіть [логін](../plugins/osm-editing.md#settings) користувача  |
|  [Зовнішні датчики](#external-sensors) 🤖  | Підключення до зовнішнього пристрою [Налаштування](../plugins/external-sensors.md#required-setup-parameters) |
|  [Доступність](#accessibility) 🤖  | [Налаштування](../plugins/accessibility.md#plugin-settings) дозволяють використовувати функції [Доступності Android](https://www.android.com/accessibility/) всередині OsmAnd. |
| [Розробка OsmAnd](#osmand-development) | [Налаштування плагіна](../plugins/development.md#plugin-settings) дозволяють увімкнути спеціальні функції для розробників або досвідчених користувачів |
|  [OsmAnd Tracker](#osmand-tracker) 🤖  | Усі налаштування конфігуруються в окремому додатку |
| [Трекер суден AIS](#ais-vessel-tracker) | [Налаштування плагіна](../plugins/ais-tracker.md#plugin-settings) дозволяють увімкнути спеціальні налаштування |

### Дії плагіна {#plugin-actions}

**<Translate android="true" ids="reset_plugin_to_default"/>** - *за допомогою цієї опції налаштування плагіна можна скинути до значень за замовчуванням*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *налаштування плагіна можна скопіювати з іншого профілю*.


## Список плагінів {#plugins-list}

### [Вікіпедія](./wikipedia.md) {#wikipedia}

Наявність Вікіпедії у вашій подорожі допоможе вам дізнатися більше про місця, які ви відвідуєте. Вона доступна в автономному режимі та показує статті Вікіпедії, пов'язані з цікавими місцями, прямо на карті.

### [Онлайн-карти](./online-map.md) {#online-maps}

Онлайн-карти OsmAnd є значним доповненням до бази даних OpenStreetMap, яка вже є в додатку. За допомогою цього плагіна ви можете додавати на карту шари з інформацією з різних джерел.  

### [Запис поїздки](./trip-recording.md) {#trip-recording}

Щоб розповісти історію про те, де ви були, дані GPS, такі як широта і довгота вашого місцезнаходження, можна записати і зберегти у файл, а потім повторно використовувати, покращувати, доповнювати шляховими точками, надавати для навігації, ділитися з друзями тощо.  

### [Топографія](./topography.md) {#topography}

Топографічна інформація, така як контурні лінії, відтінення рельєфу, ухил, 3D-рельєф, допомагає візуально оцінити рельєф місцевості, бачачи висоту, рельєф, екстремуми, крутизну, точки однакової висоти тощо.  

### [Погода](./weather.md) {#weather}

Показує погодинний прогноз на поточний день та на 7 днів вперед. 

### [Вигляд морської карти](./nautical-charts.md) {#nautical-map-view}

Вигляд морської карти надає детальне графічне зображення океанів, морів, прибережних зон та річок, щоб допомогти вам орієнтуватися на воді, бачити популярні маршрути руху, перешкоди на водних шляхах, гавані, якірні стоянки та іншу важливу довідкову інформацію.

### [Вигляд лижної карти](./ski-maps.md) {#ski-map-view}

Вигляд лижної карти показує зимові кольори та траси для гірських або бігових лиж, а також канатні дороги, крісельні підйомники, об'єкти та послуги поблизу, що корисно для навігації в таких місцях, як зони відпочинку, гірськолижні курорти та парки.

### [Аудіо/відео нотатки](./audio-video-notes.md) {#audiovideo-notes}

Створюйте аудіо/відео нотатки для подальшого використання, наприклад, щоб запам'ятати подію, сцену або взаємодію. Створені аудіо/відео нотатки доступні з *Моїх місць*, а також на карті як окремий шар створених користувачем історій та думок, прив'язаних до геолокації. Тільки для Android.  

### [Місце паркування](./parking.md) {#parking-position}

Встановіть на карті точку, де ви залишили автомобіль на вулиці, і отримайте сповіщення у календарі, коли закінчиться час паркування. Це полегшить вам відстеження часу та місця розташування вашого автомобіля.

### [Редагування OpenStreetMap](./osm-editing.md) {#openstreetmap-editing}

Плагін редагування OpenStreetMap дозволяє вам робити внесок в OpenStreetMap, глобальну спільноту, що створює всеосяжну карту світу та надає загальнодоступні, актуальні дані з відкритим кодом.  

### [Mapillary](./mapillary.md) {#mapillary}

Переглядайте панорами вулиць ваших маршрутів або цікавих місць, надані [Mapillary](https://www.mapillary.com/) (потрібне підключення до Інтернету).  

### [Зовнішні датчики](./external-sensors.md) {#external-sensors}

Підключайте зовнішні датчики для відображення їхніх даних в OsmAnd та зберігання інформації в записах треків.  

### [Показники автомобіля](./vehicle-metrics.md) {#vehicle-metrics}

Підключіть сканер OBD-II для відображення даних автомобіля в OsmAnd та зберігання інформації в записах треків.  

### [Астрономія](./astronomy.md) {#astronomy}

Плагін астрономії відображає інтерактивну накладку зоряного неба зі зірками, сузір'ями, Сонцем, Місяцем та планетами. Він допомагає вам ідентифікувати небесні об'єкти над вашим поточним місцезнаходженням, переглядати їхні траєкторії для обраної дати та часу, а також планувати сеанси спостереження за зірками за допомогою вбудованих елементів керування часом та опцій перегляду.

### [Доступність](./accessibility.md) {#accessibility}

Плагін "Доступність" робить функції доступності пристрою безпосередньо доступними в OsmAnd. Тільки для Android.  

### [Розробка OsmAnd](./development.md) {#osmand-development}

Плагін розробки OsmAnd призначений для розробників та досвідчених користувачів. Він дозволяє симулювати навігаційні маршрути, перевіряти продуктивність рендерингу екрана тощо.  

### [OsmAnd Tracker](./osmand-tracker.md) {#osmand-tracker}

OsmAnd Tracker допомагає вам бачити, де знаходяться ваші контакти на карті в OsmAnd. Тільки для Android.  

### [Трекер суден AIS](./ais-tracker.md) {#ais-vessel-tracker}

Відображення позицій AIS та інформації про навколишні судна. Дані AIS отримуються через мережу від зовнішнього приймача AIS.

## [Створення власного плагіна](./custom.md) {#create-a-custom-plugin}

Ви можете створити власний плагін, дотримуючись статті *Custom Package*.


_______