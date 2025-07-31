---
source-hash: 0cd7fc222e201abda3ee41c3278fe75817181ab14d975d85f25fdb51e7498eae
sidebar_position: 1
title: Перші кроки
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';




## Огляд {#overview}

Ласкаво просимо до OsmAnd (Автоматичні навігаційні вказівки OpenStreetMap)!

Дізнайтеся, як завантажувати карти, як налаштовувати програму, як користуватися картою та будувати маршрут, як розпочинати навігацію та як шукати об'єкти інтересу. Ознайомтеся з ключовими моментами політики конфіденційності OsmAnd та необхідними дозволами.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Офлайн навігація Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Офлайн навігація iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Встановити OsmAnd {#install-osmand}

OsmAnd — це мобільний застосунок для карт і навігації, доступний для **Android** та **iOS**. Ви можете завантажити його з найпопулярніших маркетів.

**Маркети Android**: [Google Play Store](https://play.google.com/store/apps/details?id=net.osmand) та [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App Store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Докладніше](../purchases/index.md) про версії OsmAnd та покупки.


## Ласкаво просимо до OsmAnd {#welcome-to-osmand}

Ми прагнемо створити повнофункціональний картографічний застосунок, який можна використовувати для різних цілей офлайн та онлайн. Застосунок має багато функцій, тому вам не доведеться перемикатися між різними застосунками, і все буде у вас під рукою.

- Переглядайте карту світу з великою деталізацією, що відображається в [різних стилях карт](../map/vector-maps.md).
- Відображайте, [шукайте](../search/search-poi.md) та зберігайте різні [об'єкти інтересу](../map/point-layers-on-map.md).
- [Плануйте маршрут](../plan-route/create-route.md) на автомобілі, велосипеді, пішки та поєднуйте в мультимодальні маршрути.
- Розпочніть [голосову навігацію](../navigation/guidance/voice-navigation.md), коли ви вмикаєте та вимикаєте екран.
- Зробіть свою туристичну подорож насиченою за допомогою офлайн [Вікіпедії](../plugins/wikipedia.md) та [Вікімандрів](../plan-route/travel-guides.md).
- Повністю налаштуйте, як [відображається карта](../map/configure-map-menu.md) та які [віджети](../widgets/index.md) відображаються на ній.
- Навігація [за маршрутом](../navigation/setup/route-navigation.md), [за заданим треком](../navigation/setup/gpx-navigation.md), [громадським транспортом](../navigation/routing/public-transport-navigation.md) та [позашляхова](../navigation/setup/markers-navigation.md).
- Все працює **офлайн**.
- І не забудьте зробити свій внесок у [OpenStreetMap](https://www.openstreetmap.org/) за допомогою [плагіна редагування OSM](../plugins/osm-editing.md).


## Посібник з дій {#actions-guide}

### Дозвіл на доступ до місцезнаходження {#permission-to-access-the-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Точне місцезнаходження Android](@site/static/img/steps/first_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Точне місцезнаходження iOS](@site/static/img/steps/first_start_ios.png) ![Точне місцезнаходження iOS](@site/static/img/steps/first_start_ios_1.png)

</TabItem>

</Tabs>

Ми рекомендуємо надати OsmAnd дозвіл на отримання інформації про точне місцезнаходження вашого пристрою. Ми не збираємо, не використовуємо та не передаємо вашу приватну інформацію, тому доступ до точної геолокації потрібен для коректної офлайн-роботи пошуку, навігації та інших функцій OsmAnd.


### Як завантажити карти {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Показати на карті](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Показати на карті](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Застосунок OsmAnd працює з різними типами карт, але він може повноцінно функціонувати лише із завантаженими офлайн-картами, тому після екрана *<Translate android="true" ids="get_started"/>* вам пропонується [*завантажити карту*](../start-with/download-maps.md#initial-setup-screen) вашого регіону. Ви можете вибрати інший регіон, відновити з [OsmAnd Cloud](../personal/osmand-cloud.md) або пропустити цей крок і завантажити карти пізніше.
Інші доступні варіанти завантаження карт дивіться в [статті Завантаження карт](../start-with/download-maps.md).

:::note Почніть працювати з офлайн-картами
OsmAnd не може коректно працювати без завантажених офлайн-карт. Хоча застосунок підтримує [векторні](../map/vector-maps.md) та [растрові](../map/raster-maps.md) карти, настійно рекомендується почати працювати з векторними офлайн-картами, щоб усі функції, такі як [Пошук](../search/index.md), [Навігація](../navigation/index.md) та [Контекстне меню](../map/map-context-menu.md), працювали належним чином.
:::


### Як завантажити карти для всього світу {#how-download-maps-for-the-whole-world}

Хоча OsmAnd дозволяє завантажувати карти для всіх доступних регіонів, немає єдиного пакета для завантаження всього світу одразу. Натомість ви можете завантажувати карти окремих країн або регіонів відповідно до ваших потреб.

***Ключові моменти:***

- **OsmAnd Pro** та **Maps+** надають **необмежену кількість завантажень карт**, але вам все одно потрібно завантажувати карти по одному регіону за раз.
- **Обмеження сховища.** Переконайтеся, що на вашому пристрої достатньо місця, перш ніж завантажувати кілька регіонів.
- **Автоматичні оновлення.** Після завантаження карти можна оновити через *Меню → Карти та ресурси → Оновлення.*


### Як змінити мову застосунку {#how-to-change-app-language}

Опція *Мова відображення* використовується для зміни мови всього застосунку, включаючи спливаючі підказки, внутрішній текст, повідомлення тощо. До Android 12 OsmAnd дозволяє налаштовувати мову відображення відповідно до ваших уподобань безпосередньо в застосунку. Починаючи з Android 13 та на пристроях iOS, мову відображення можна змінити лише в системних налаштуваннях (дивіться, як змінити мовні налаштування для окремих застосунків в [Android](https://developer.android.com/guide/topics/resources/app-languages) та [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Налаштування → Застосунки → OsmAnd → Мова*

![Мова загальних налаштувань Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Налаштування → Карти OsmAnd → Мова*

![Мова загальних налаштувань iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Немає опції для встановлення мов застосунків
На деяких пристроях Android (Xiaomi з Muiu 14) немає опції для індивідуального встановлення мов застосунків у системних налаштуваннях, тому мову OsmAnd можна змінити лише разом з мовою всієї системи. Ви можете ознайомитися з обговоренням на [GitHub](https://github.com/osmandapp/OsmAnd/issues/16990) для отримання додаткової інформації.
:::


### Як керувати налаштуваннями {#how-to-manage-your-settings}

Ви можете керувати налаштуваннями застосунку як [глобальними налаштуваннями](../personal/global-settings.md) або як [конфігурацією профілю](../personal/profiles.md) через [Головне меню](../start-with/main-menu.md). Застосунок постачається з попередньо визначеним списком профілів, які можна змінити пізніше. Кожен профіль можна розглядати як налаштований картографічний застосунок для конкретних цілей. За замовчуванням профілі слугують лише різними режимами навігації.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Керування профілем Android](@site/static/img/settings/manage_profile_android.png) ![Налаштування профілю Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Керування профілем iOS](@site/static/img/settings/manage_profile_ios.png) ![Налаштування профілю iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Докладніше](../personal/global-settings.md) про глобальні налаштування.
[Докладніше](../personal/profiles.md) про налаштування профілю.


### Як налаштувати плагіни {#how-to-configure-plugins}

[Плагіни](../plugins/index.md#configure-plugin) значно розширюють функціональність застосунку. Майже всі плагіни мають власні [дії на карті](../map/map-context-menu.md), [шари карти](../map/configure-map-menu.md), [завантаження карт](../start-with/download-maps.md) та [налаштування](../plugins/#plugin-settings).

Ви можете вмикати/вимикати плагіни через [Головне меню](../start-with/main-menu.md) → [Плагіни](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Увімкнути плагіни Android](@site/static/img/settings/plugins_enable_android.png) ![Приклад плагіна Android](@site/static/img/settings/plugin_example_android.png)

Щоб увімкнути/вимкнути плагіни, перейдіть до:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> → &#65049; → Увімкнути

</TabItem>

<TabItem value="ios" label="iOS">

![Увімкнути плагіни iOS](@site/static/img/settings/plugins_enable_ios.png) ![Приклад плагіна iOS](@site/static/img/settings/plugin_example_ios.png)

Щоб увімкнути/вимкнути плагіни, перейдіть до:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Докладніше](../plugins/index.md#configure-plugin) про плагіни OsmAnd.


### Як користуватися картою {#how-to-use-a-map}

Карта є основним елементом OsmAnd, і важливо знати, [як нею користуватися](../map/interact-with-map.md) (жести, кнопки тощо). Ви можете [налаштувати карту](../map/configure-map-menu.md) відповідно до своїх потреб: [змінити стиль карти](../map/configure-map-menu.md#map-style-parameters), налаштувати різні [шари карти](../map/configure-map-menu.md#map-layers), такі як вибране, POI, громадський транспорт, треки, горизонталі, тіні рельєфу та інші.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування карти Android](@site/static/img/settings/configure_map_menu_android.png) ![Приклад налаштування карти Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування карти iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Приклад налаштування карти iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Докладніше](../map/configure-map-menu.md) про налаштування карти.


### Як налаштувати екран {#how-to-configure-screen}

[Налаштування екрана](../widgets/configure-screen.md) дозволяє вмикати [інформаційні](../widgets/info-widgets.md) (висота, швидкість, поточний час тощо) та [навігаційні](../widgets/nav-widgets.md) (пункт призначення, азимут, час прибуття тощо) віджети, [швидкі дії](../widgets/quick-action.md) та інші елементи, які відображатимуться над картою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування екрана Android](@site/static/img/widgets/configure_screen_android.png) ![Приклад налаштування екрана Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування екрана iOS](@site/static/img/settings/configure_screen_ios.png) ![Приклад налаштування екрана iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Докладніше](../widgets/configure-screen.md) про налаштування екрана.


### Як додати особисті дані до карт {#how-to-add-personal-data-to-maps}

OsmAnd дозволяє робити різні позначки на карті для ваших особистих потреб. Наприклад, [улюблені точки](../personal/favorites.md) – особисті точки з назвою, іконкою та категорією, [маркери](../personal/markers.md) – швидко додані точки як ціль, [аудіо/відео нотатки](../plugins/audio-video-notes.md) – медіа-нотатки, записані в певній точці, [треки](../personal/tracks/manage-tracks.md) – записані та імпортовані треки та маршрути.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Додати особисті дані Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Додати особисті дані iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Докладніше](../map/point-layers-on-map.md) про точки на карті.


### Як переглядати та знаходити об'єкти інтересу {#how-to-browse--find-point-of-interest}

[Об'єкти інтересу (POI)](../map/point-layers-on-map.md#points-of-interest-pois) — це об'єкти, які можна шукати або виділяти на карті. Вони представляють цікаві або корисні місця та поширюються як частина [векторних карт](../map/vector-maps.md). Ви можете використовувати їх для [відображення на карті](../map/point-layers-on-map.md#points-of-interest-pois), [навігації](../navigation/index.md) та [пошуку](../search/search-poi.md) об'єктів інтересу на карті.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вибір кількох POI](@site/static/img/map/multiple_selection_android.png) ![Пошук та відображення POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Вибір кількох POI](@site/static/img/settings/multiple_selection_iOS.png) ![Пошук та відображення POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Докладніше](../search/search-poi.md) про пошук POI.


### Як спланувати маршрут {#how-to-plan-a-route}

[Планування маршруту](../plan-route/create-route.md) — це потужний інструмент, який дозволяє створювати подорожі, редагувати наявні треки та вимірювати відстань на місці. Ви можете швидко додавати проміжні точки та з'єднувати їх різними навігаційними лініями (велосипед, пішохід, пряма лінія тощо). Результати можна зберегти у файл GPX, щоб його можна було [поділитися](../personal/tracks/index.md) або [використовувати для навігації](../navigation/setup/gpx-navigation.md) пізніше.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/settings/plan_route_android.png) ![Графік планування маршруту Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Докладніше](../plan-route/create-route.md) про функцію планування маршруту.


### Як шукати за адресою {#how-to-search-by-address}

OsmAnd надає багато можливостей пошуку, включаючи пошук за адресою. За замовчуванням він використовує [дані OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) і повинен мати можливість знаходити всі адреси за допомогою швидкого пошуку. Також ви можете [шукати](../search/search-address.md) за містом, вулицею, поштовим індексом та координатами.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук адреси Android](@site/static/img/settings/address_search_android.png) ![Результат пошуку Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук адреси iOS](@site/static/img/settings/address_search_ios.png) ![Результат пошуку iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Вам потрібно завантажити карту, перш ніж шукати там адресу. Також, якщо ваше поточне місцезнаходження занадто далеко від адреси, яку ви шукаєте, вам може знадобитися збільшити радіус пошуку.
:::

[Докладніше](../search/search-address.md) про пошук за адресою.


### Як розпочати навігацію {#how-to-start-navigation}

[Навігація](../navigation/index.md) надає вам покрокові вказівки до пункту призначення, відображаючи маршрут, пропонуючи покрокові інструкції, додаткову інформацію про дорогу щодо покриття, гладкості тощо, а також опціональні голосові підказки.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Почати навігацію Android](@site/static/img/settings/start_navigation_android.png) ![Графік маршруту Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Почати навігацію iOS](@site/static/img/settings/start_navigation_ios.png) ![Графік маршруту iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Докладніше](../navigation/index.md) про навігацію.


### Як записати свою подорож {#how-to-record-your-trip}

[Запис поїздки](../plugins/trip-recording.md) — це спеціальний інструмент, упакований як плагін OsmAnd, який дозволяє записувати всі рухи на треку за допомогою GPS пристрою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Запис поїздки Android](@site/static/img/settings/trip_recording_android.png) ![Огляд запису поїздки Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Почати запис поїздки iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Меню запису поїздки iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Докладніше](../plugins/trip-recording.md) про запис поїздки.


### Як редагувати карти {#how-to-edit-maps}

OsmAnd працює на основі даних [OpenStreetMap](https://www.openstreetmap.org/). Карти створюються волонтерами, тому вони можуть мати більше або менше деталей залежно від того, скільки роботи було виконано в певній частині карти. Будь-хто може зареєструватися як учасник і додавати або редагувати карти OSM. OsmAnd надає плагін для редагування, який допомагає покращити OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Примітка OSM Android](@site/static/img/settings/osm_note_android.png) ![Створити POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Примітка OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Створити POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Докладніше](../plugins/osm-editing.md) про редагування OSM.


### Як закрити застосунок {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Існує два доступні варіанти закриття OsmAnd.

1. Закрийте застосунок, провівши пальцем вгору та за межі екрана. Для вертикального списку застосунків проведіть пальцем вліво або вправо.

2. Можливо, вам доведеться виконати наступні кроки, перш ніж це зробити, інакше OsmAnd працюватиме у фоновому режимі:
    - [Відхилити навігацію](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Зупинити завантаження та оновлення карт](../start-with/download-maps.md)
    - [Зупинити запис поїздки](../plugins/trip-recording.md#create-new-track)
    - [Зупинити запис аудіо/відео нотаток](../plugins/audio-video-notes.md)

3. Функція *Примусове зупинення*:
    - Довго натисніть *іконку OsmAnd → кнопка **i** → Примусове зупинення*.
    - Відкрийте налаштування та натисніть *Застосунки та сповіщення → OsmAnd → Примусове зупинення*.

</TabItem>

<TabItem value="ios" label="iOS">

Закрийте застосунок, провівши пальцем вгору та за межі екрана. Для вертикального списку застосунків проведіть пальцем вліво або вправо.

Можливо, вам доведеться виконати наступні кроки, перш ніж це зробити, інакше OsmAnd працюватиме у фоновому режимі:

- [Скасувати навігацію](../navigation/setup/route-navigation.md)
- [Зупинити завантаження та оновлення карт](../start-with/download-maps.md)
- [Зупинити запис поїздки](../plugins/trip-recording.md#create-new-track)
- [Зупинити запис аудіо/відео нотаток](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Ярлики застосунків {#app-shortcuts}

<InfoAndroidOnly/>

[Ярлики застосунків](https://support.google.com/android/answer/9450271) доступні для іконки OsmAnd. Просто довго натисніть іконку OsmAnd на екрані вашого пристрою, щоб відкрити меню ярликів застосунків. Тут ви можете коротко натиснути, щоб вибрати наступні дії: *Навігація до дому*, *Навігація до роботи*, *Почати запис*, *Пошук*, *Мої місця*, *Навігація до*. Довге натискання на дію дозволяє додати нову іконку дії на екран вашого пристрою.

Натисніть на іконку дії, щоб негайно запустити застосунок з вибраною дією.

![Ярлики](@site/static/img/steps/shortcuts_3_andr.png) ![Ярлики](@site/static/img/steps/shortcuts_4_andr.png)


## Офлайн-довідка {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

У *Меню довідки* ви можете знайти статті з нашого сайту [www.osmand.net/docs](https://osmand.net/docs/intro/). Після початкового завантаження (потрібне підключення до Інтернету) статті довідки доступні офлайн.
Перший підрозділ, *Офлайн-довідка*, містить **найпопулярніші** (або популярні) статті серед наших користувачів. Розділи **Посібник користувача** та **Вирішення проблем** мають таку ж структуру, як і на вебсайті.
У *Меню довідки* ви також можете знайти корисні посилання на соціальні мережі OsmAnd, інформацію про версію вашого застосунку, примітки до випуску та контакти підтримки. Через Довідку ви також можете надсилати [журнали logcat та збоїв](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Меню {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>

- **Надіслати журнал збоїв** (*для Android*). Дозволяє користувачам надсилати розробникам звіти про збої застосунку, допомагаючи виявляти та усувати проблеми.
- **Надіслати журнал logcat** (*для Android*). Надає користувачам можливість надсилати розробникам детальні журнали збоїв застосунку, сприяючи глибшому аналізу та усуненню несправностей.
- **Надіслати журнал** (*для iOS*). Виконує подібну функцію до функції *Надіслати журнал збоїв* для Android, дозволяючи користувачам на пристроях iOS повідомляти розробникам про збої застосунку для налагодження.
- **Копіювати версію збірки**. Дозволяє користувачам швидко та точно повідомляти поточну версію застосунку розробникам при повідомленні про проблеми, спрощуючи процес діагностики та вирішення.


### Найпопулярніше {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Найпопулярніші статті серед наших користувачів стосуються статей у застосунку або на сайті, які набрали найбільше переглядів або взаємодій з користувачами. Цей показник допомагає визначити вміст, який особливо цікавий або корисний для ваших користувачів. Він може надати цінну інформацію про вподобання та інтереси користувачів, дозволяючи розробникам та творцям контенту адаптувати майбутній вміст, щоб краще відповідати потребам аудиторії. Крім того, виділення популярних статей може допомогти новим користувачам знайти цінні ресурси в застосунку.


### Посібник користувача {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Розділ **Посібник користувача** в меню Довідки — це повний посібник, який відповідає структурі вебсайту OsmAnd, забезпечуючи узгодженість інформації та легкість навігації між платформами. За допомогою Довідки ви можете легко переходити з застосунку на вебсайт, знаходячи той самий вміст, організований звично. Ця узгодженість покращує зручність використання, надаючи єдиний ресурс підтримки для швидкого пошуку відповідей на запитання та усунення несправностей.


### Вирішення проблем {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Рішення та поради щодо вирішення поширених проблем. Якщо у вас є конкретне запитання, будь ласка, перевірте [Вирішення проблем](../troubleshooting/index.md), щоб отримати відповідь.

- [Налаштування](../troubleshooting/setup.md). При налаштуванні застосунку найчастіше виникають ці проблеми.
- [Карти та дані](../troubleshooting/maps-data.md). Проблеми, пов'язані з картами, пошуком та іншими даними.
- [Навігація](../troubleshooting/navigation.md). Найпоширеніші проблеми, що виникають у режимі навігації.
- [Запис треку](../troubleshooting/track-recording-issues.md). Поширені проблеми, пов'язані із записом треку, такі як шуми, прогалини та неточності.
- [Загальне](../troubleshooting/general.md). Поширені проблеми, пов'язані з різними функціями OsmAnd.
- [Журнали збоїв](../troubleshooting/crash-logs.md). Як надіслати журнали збоїв команді OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*тільки для Android*). Проблеми з автонавігацією.

### Зв'яжіться з нами {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Дозволяє задавати питання або вносити пропозиції.

### Повідомити про проблеми {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Відкрити проблему на GitHub**. [GitHub версії Android](https://github.com/osmandapp/OsmAnd-Issues/issues), [GitHub версії iOS](https://github.com/osmandapp/OsmAnd-iOS/issues): задавайте питання, пишіть про помилки та пропонуйте функції.
- **Надіслати журнал збоїв** (*для Android*). Містить лише інформацію про збої.
- [Надіслати журнал logcat](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Надіслати журнал](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Детальний файл журналу.

### Про OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню карт iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Ви можете дізнатися про нашу команду, переглянути поточну версію застосунку та що нового, а також завантажити бета-версію застосунку.


## Конфіденційність {#privacy}

Це [застосунок з відкритим вихідним кодом](https://github.com/osmandapp/osmand), без реклами/трекерів, орієнтований на конфіденційність. Щоб забезпечити максимальну конфіденційність, OsmAnd пропонує офлайн-карти як першочерговий варіант, тому жодна взаємодія чи геоінформація не витікає з вашого пристрою. Ми дуже уважно ставимося до того, які дані збираються та які дані передаються мережею, ви можете дізнатися більше в нашій [Політиці конфіденційності](https://osmand.net/help-online/privacy-policy).


## Дозволи {#permissions}

OsmAnd не має жодних обов'язкових дозволів на версіях iOS / Android.

**Основні**:

- **Інтернет**. Початкове завантаження / оновлення офлайн-карт. Також може знадобитися для доступу до онлайн-функцій, таких як [Зображення з рівня вулиці](../map/point-layers-on-map.md#-street-level-imagery), [Онлайн-фотографії](../map/map-context-menu.md#online-photos) або [Онлайн-карти](../map/raster-maps.md).
- **GPS** / **Мережа GSM**. Визначення вашого місцезнаходження, відстеження в режимі навігації та запис вашої поїздки (за бажанням). Цей дозвіл запитується, коли ви натискаєте [кнопку "Моє місцезнаходження"](../widgets/map-buttons.md#my-location-and-zoom) або коли ви [починаєте навігацію](../navigation/setup/route-navigation.md#start--stop-navigation).

**Додаткові**:

- **Камера/запис голосу** (*Android*). Використовується лише [аудіо/відео нотатками](../plugins/audio-video-notes.md). Ця функція упакована як плагін і за замовчуванням вимкнена. Вона дозволяє швидко створювати аудіо/відео нотатки, пов'язані з місцезнаходженням, під час поїздки.


> *Останнє оновлення: січень 2025*