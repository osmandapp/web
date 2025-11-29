---
source-hash: 621169852e7cf1c482de73c1a7a6f8f94e0ec6854fd637bd85cfb1e349897ca0
sidebar_position: 1
title:  Перші кроки
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

Ласкаво просимо до OsmAnd (OpenStreetMap Automated Navigation Directions)!

Дізнайтеся, як завантажувати мапи, налаштовувати застосунок, користуватися мапою та будувати маршрут, як розпочати навігацію та шукати цікаві місця. Ознайомтеся з ключовими положеннями Політики конфіденційності OsmAnd та необхідними Дозволами.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Офлайн-навігація Android](@site/static/img/settings/google_play_screen1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Офлайн-навігація iOS](@site/static/img/settings/itunes_screen_ios.png)

</TabItem>

</Tabs>


## Встановлення OsmAnd {#install-osmand}

OsmAnd — це мобільний застосунок для мап та навігації, доступний для **Android** та **iOS**. Ви можете завантажити його з найпопулярніших маркетів.

**Маркети для Android**: [Google play store](https://play.google.com/store/apps/details?id=net.osmand) та [Huawei AppGallery](https://appgallery.huawei.com/#/app/C101486545).

<AndroidStore/>

**iOS**: [App store](https://apps.apple.com/us/app/osmand-maps-travel-navigate/id934850257).

<AppleStore/>

[Дізнайтеся більше](../purchases/index.md) про версії OsmAnd та Покупки.


## Ласкаво просимо до OsmAnd {#welcome-to-osmand}

Ми прагнемо створити повнофункціональний застосунок, орієнтований на мапи, який можна використовувати для різних цілей в режимі офлайн та онлайн. Застосунок має багато функцій, тому вам не доведеться перемикатися між різними програмами, і все буде у вас під рукою.

- Переглядайте мапу світу з великою кількістю деталей, що відображаються в [різних стилях мапи](../map/vector-maps.md).
- Відображайте, [шукайте](../search/search-poi.md) та зберігайте різноманітні [Цікаві місця (POI)](../map/point-layers-on-map.md).
- [Плануйте маршрут](../plan-route/create-route.md) автомобілем, велосипедом, пішки та комбінуйте їх у мультимодальні маршрути.
- Запускайте [голосову навігацію](../navigation/guidance/voice-navigation.md), коли ви вмикаєте та вимикаєте екран.
- Зробіть свою туристичну подорож насиченою завдяки офлайн-доступу до [Wikipedia](../plugins/wikipedia.md) та [Wikivoyage](../plan-route/travel-guides.md).
- Повністю налаштуйте [відображення мапи](../map/configure-map-menu.md) та [віджети](../widgets/index.md), що на ній показуються.
- Здійснюйте навігацію [за маршрутом](../navigation/setup/route-navigation.md), [за заданим треком](../navigation/setup/gpx-navigation.md), [громадським транспортом](../navigation/routing/public-transport-navigation.md) та [позашляховиками](../navigation/setup/markers-navigation.md).
- Все працює **Офлайн**.
- І не забувайте робити свій внесок у [OpenStreetMap](https://www.openstreetmap.org/) за допомогою [плагіну Редагування OSM](../plugins/osm-editing.md).


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

Ми рекомендуємо надати OsmAnd дозвіл на отримання інформації про точне місцезнаходження вашого пристрою. Ми не збираємо, не використовуємо та не передаємо вашу особисту інформацію, тому доступ до точної геолокації необхідний для коректної роботи пошуку, навігації та інших функцій OsmAnd в автономному режимі.


### Як завантажити мапи {#how-to-download-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Показати на мапі](@site/static/img/steps/start_screen_download_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Показати на мапі](@site/static/img/steps/start_screen_download_ios.png)

</TabItem>

</Tabs>

Застосунок OsmAnd працює з різними типами мап, але повноцінно функціонувати він може лише із завантаженими офлайн-мапами, тому після екрана *<Translate android="true" ids="get_started"/>* вам буде запропоновано [*завантажити мапу*](../start-with/download-maps.md#initial-setup-screen) вашого регіону. Ви можете вибрати інший регіон, відновити дані з [OsmAnd Cloud](../personal/osmand-cloud.md) або пропустити цей крок і завантажити мапи пізніше.
Інші доступні варіанти завантаження мап дивіться у статті [Завантаження мап](../start-with/download-maps.md).

:::note Початок роботи з офлайн-мапами
OsmAnd не може коректно працювати без завантажених офлайн-мап. Хоча застосунок підтримує [Векторні](../map/vector-maps.md) та [Растрові](../map/raster-maps.md) мапи, настійно рекомендується починати роботу з векторними офлайн-мапами, щоб усі функції, такі як [Пошук](../search/index.md), [Навігація](../navigation/index.md) та [Контекстне меню](../map/map-context-menu.md), працювали належним чином.
:::


### Як завантажити мапи для всього світу {#how-download-maps-for-the-whole-world}

Хоча OsmAnd дозволяє завантажувати мапи для всіх доступних регіонів, не існує єдиного пакета для завантаження всього світу одразу. Натомість ви можете завантажувати мапи окремих країн або регіонів відповідно до ваших потреб.

***Ключові моменти:***

- **OsmAnd Pro** та **Maps+** надають **необмежену кількість завантажень мап**, але вам все одно потрібно завантажувати мапи по одному регіону за раз.
- **Обмеження сховища.** Перед завантаженням кількох регіонів переконайтеся, що на вашому пристрої достатньо місця.
- **Автоматичні оновлення.** Після завантаження мапи можна оновити через *Меню → Мапи та ресурси → Оновлення.*


### Як змінити мову застосунку {#how-to-change-app-language}

Опція *Мова відображення* використовується для зміни мови всього застосунку, включаючи спливаючі підказки, внутрішній текст, повідомлення тощо. До Android 12 OsmAnd дозволяв налаштовувати мову відображення відповідно до ваших уподобань безпосередньо в застосунку. Починаючи з Android 13 та на пристроях iOS, мову відображення можна змінити лише в системних налаштуваннях (дивіться, як змінити мовні налаштування для окремих застосунків в [Android](https://developer.android.com/guide/topics/resources/app-languages) та [iOS](https://developer.apple.com/news/?id=u2cfuj88)).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Налаштування → Програми → OsmAnd → Мова*

![Загальні налаштування мови Android](@site/static/img/personal/profiles/general_settings_language_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Налаштування → OsmAnd Maps → Мова*

![Загальні налаштування мови iOS](@site/static/img/personal/profiles/general_settings_language_ios.png)

</TabItem>

</Tabs>

:::note Немає опції для встановлення мови застосунку
На деяких пристроях Android (Xiaomi з Muiu 14) немає можливості встановлювати мови для застосунків окремо в системних налаштуваннях, тому мову OsmAnd можна змінити лише разом з мовою всієї системи. Ви можете переглянути обговорення на [GitHub discussion](https://github.com/osmandapp/OsmAnd/issues/16990) для отримання додаткової інформації.
:::


### Як керувати налаштуваннями {#how-to-manage-your-settings}

Ви можете керувати налаштуваннями застосунку як [Загальними налаштуваннями](../personal/global-settings.md) або як [Конфігурацією профілю](../personal/profiles.md) через [Головне меню](../start-with/main-menu.md). Застосунок постачається з попередньо визначеним списком профілів, які можна змінити пізніше. Кожен профіль можна розглядати як налаштований застосунок мапи для конкретних цілей. За замовчуванням профілі слугують лише як різні режими навігації.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Керування профілем Android](@site/static/img/settings/manage_profile_android.png) ![Налаштування профілю Android](@site/static/img/settings/configure_profile_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Керування профілем iOS](@site/static/img/settings/manage_profile_ios.png) ![Налаштування профілю iOS](@site/static/img/settings/configure_profile_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../personal/global-settings.md) про Загальні налаштування.
[Дізнайтеся більше](../personal/profiles.md) про налаштування Профілю.


### Як налаштувати плагіни {#how-to-configure-plugins}

[Плагіни](../plugins/index.md#configure-plugin) значно розширюють функціональність застосунку. Майже всі плагіни мають власні [Дії на мапі](../map/map-context-menu.md), [Шари мапи](../map/configure-map-menu.md), [Завантаження мап](../start-with/download-maps.md) та [Налаштування](../plugins/#plugin-settings).

Ви можете вмикати/вимикати плагіни через [Головне меню](../start-with/main-menu.md) → [Плагіни](../plugins/index.md#configure-plugin).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Увімкнення плагінів Android](@site/static/img/settings/plugins_enable_android.png) ![Приклад плагіну Android](@site/static/img/settings/plugin_example_android.png)

Щоб увімкнути/вимкнути плагіни, перейдіть до:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Увімкнути

</TabItem>

<TabItem value="ios" label="iOS">

![Увімкнення плагінів iOS](@site/static/img/settings/plugins_enable_ios.png) ![Приклад плагіну iOS](@site/static/img/settings/plugin_example_ios.png)

Щоб увімкнути/вимкнути плагіни, перейдіть до:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;

</TabItem>

</Tabs>

[Дізнайтеся більше](../plugins/index.md#configure-plugin) про плагіни OsmAnd.


### Як користуватися мапою {#how-to-use-a-map}

Мапа є основним елементом OsmAnd, і важливо знати, [як нею користуватися](../map/interact-with-map.md) (жести, кнопки тощо). Ви можете [налаштувати мапу](../map/configure-map-menu.md) відповідно до своїх потреб: [змінити стиль мапи](../map/configure-map-menu.md#map-style-parameters), налаштувати різні [шари мапи](../map/configure-map-menu.md#map-layers), такі як обрані місця, POI, громадський транспорт, треки, лінії контуру, затінення рельєфу та інші.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування мапи Android](@site/static/img/settings/configure_map_menu_android.png) ![Приклад налаштування мапи Android](@site/static/img/settings/configure_map_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування мапи iOS](@site/static/img/settings/configure_map_menu_ios.png) ![Приклад налаштування мапи iOS](@site/static/img/settings/configure_map_example_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../map/configure-map-menu.md) про налаштування мапи.


### Як налаштувати екран {#how-to-configure-screen}

[Налаштування екрана](../widgets/configure-screen.md) дозволяє вмикати [Інформаційні](../widgets/info-widgets.md) (висота, швидкість, поточний час тощо) та [Навігаційні](../widgets/nav-widgets.md) (пункт призначення, азимут, час прибуття тощо) віджети, [Швидкі дії](../widgets/quick-action.md) та інші елементи, які будуть відображатися поверх мапи.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування екрана Android](@site/static/img/widgets/configure_screen_android.png) ![Приклад налаштування екрана Android](@site/static/img/settings/configure_screen_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування екрана iOS](@site/static/img/settings/configure_screen_ios.png) ![Приклад налаштування екрана iOS](@site/static/img/settings/configure_screen_example_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../widgets/configure-screen.md) про налаштування екрана.


### Як додати особисті дані на мапи {#how-to-add-personal-data-to-maps}

OsmAnd дозволяє робити різні позначки на мапі для ваших особистих потреб. Наприклад, [Обрані точки](../personal/favorites.md) - особисті точки з назвою, іконкою та категорією, [Маркери](../personal/markers.md) - швидко додані точки як ціль, [Аудіо/відео нотатки](../plugins/audio-video-notes.md) - медіа-нотатки, записані в певній точці, [Треки](../personal/tracks/manage-tracks.md) - записані та імпортовані треки та тури.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Додавання особистих даних Android](@site/static/img/settings/personal_data_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Додавання особистих даних iOS](@site/static/img/settings/personal_data_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../map/point-layers-on-map.md) про точки на мапі.


### Як переглядати та знаходити цікаві місця {#how-to-browse--find-point-of-interest}

[Цікаві місця (POI)](../map/point-layers-on-map.md#points-of-interest-pois) - це об'єкти, які можна шукати або виділяти на мапі. Вони представляють цікаві або корисні місця і поширюються як частина [Векторних мап](../map/vector-maps.md). Ви можете використовувати їх для [відображення на мапі](../map/point-layers-on-map.md#points-of-interest-pois), [навігації](../navigation/index.md) та [пошуку](../search/search-poi.md) цікавих місць на мапі.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Множинний вибір POI](@site/static/img/map/multiple_selection_android.png) ![Пошук та відображення POI Android](@site/static/img/map/search_display_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Множинний вибір POI](@site/static/img/settings/multiple_selection_iOS.png) ![Пошук та відображення POI iOS](@site/static/img/settings/search_display_poi_iOS.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../search/search-poi.md) про пошук POI.


### Як спланувати маршрут {#how-to-plan-a-route}

[Планування маршруту](../plan-route/create-route.md) - це потужний інструмент, який дозволяє створювати поїздку, редагувати існуючий трек та вимірювати відстань на місці. Ви можете швидко розставляти проміжні точки та з'єднувати їх різними навігаційними лініями (велосипедною, пішохідною, прямою лінією тощо). Результати можна зберегти у файл GPX, щоб потім [поділитися](../personal/tracks/index.md) ним або [використовувати для навігації](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/settings/plan_route_android.png) ![Графік маршруту Android](@site/static/img/settings/plan_route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/settings/plan_route_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../plan-route/create-route.md) про функцію планування маршруту.


### Як шукати за адресою {#how-to-search-by-address}

OsmAnd надає багато можливостей для пошуку, включаючи пошук за адресою. За замовчуванням він використовує дані [OpenStreetMap](https://nominatim.openstreetmap.org/ui/search.html) і повинен знаходити всі адреси за допомогою швидкого пошуку. Також ви можете [шукати](../search/search-address.md) за містом, вулицею, поштовим індексом та координатами.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук адреси Android](@site/static/img/settings/address_search_android.png) ![Результат пошуку Android](@site/static/img/settings/address_search_result_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук адреси iOS](@site/static/img/settings/address_search_ios.png) ![Результат пошуку iOS](@site/static/img/settings/address_search_result_ios.png)

</TabItem>

</Tabs>

:::note
Вам потрібно завантажити мапу, перш ніж шукати на ній адресу. Також, якщо ваше поточне місцезнаходження занадто далеко від адреси, яку ви шукаєте, вам може знадобитися збільшити радіус пошуку.
:::

[Дізнайтеся більше](../search/search-address.md) про пошук за адресою.


### Як розпочати навігацію {#how-to-start-navigation}

[Навігація](../navigation/index.md) надає вам покрокові вказівки до пункту призначення, відображаючи маршрут, пропонуючи інструкції щодо поворотів, додаткову інформацію про дорожнє покриття, гладкість тощо, а також опціональні голосові підказки.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Початок навігації Android](@site/static/img/settings/start_navigation_android.png) ![Графік маршруту Android](@site/static/img/settings/route_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Початок навігації iOS](@site/static/img/settings/start_navigation_ios.png) ![Графік маршруту iOS](@site/static/img/settings/route_graph_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../navigation/index.md) про навігацію.


### Як записати свою поїздку {#how-to-record-your-trip}

[Запис поїздки](../plugins/trip-recording.md) - це спеціальний інструмент, що постачається як плагін OsmAnd, який дозволяє записувати всі переміщення на трек за допомогою GPS пристрою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Запис поїздки Android](@site/static/img/settings/trip_recording_android.png) ![Огляд запису поїздки Android](@site/static/img/settings/trip_recording_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Початок запису поїздки iOS](@site/static/img/settings/trip_recording_start_ios.png) ![Меню запису поїздки iOS](@site/static/img/settings/trip_recording_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../plugins/trip-recording.md) про запис поїздки.


### Як редагувати мапи {#how-to-edit-maps}

OsmAnd працює на даних [OpenStreetMap](https://www.openstreetmap.org/). Мапи створюються волонтерами, тому вони можуть мати більше або менше деталей залежно від того, скільки роботи було виконано на певній ділянці мапи. Будь-хто може зареєструватися як учасник і додавати або редагувати мапи OSM. OsmAnd надає плагін для редагування, який допомагає покращувати OpenStreetMap.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Нотатка OSM Android](@site/static/img/settings/osm_note_android.png) ![Створення POI Android](@site/static/img/settings/create_poi_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Нотатка OSM iOS](@site/static/img/settings/osm_note_ios.png) ![Створення POI iOS](@site/static/img/settings/create_poi_ios.png)

</TabItem>

</Tabs>

[Дізнайтеся більше](../plugins/osm-editing.md) про редагування OSM.


### Як закрити застосунок {#how-to-close-the-app}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Існує два варіанти закриття OsmAnd.

1. Закрийте застосунок, провівши пальцем вгору та з екрана. Для вертикального списку застосунків проведіть пальцем вліво або вправо.

2. Можливо, вам доведеться виконати наступні кроки перед цим, інакше OsmAnd працюватиме у фоновому режимі:
    - [Скасувати навігацію](../navigation/setup/route-navigation.md#start--stop-navigation)
    - [Зупинити завантаження та оновлення мап](../start-with/download-maps.md)
    - [Зупинити запис поїздки](../plugins/trip-recording.md#new-track-recording)
    - [Зупинити запис аудіо/відео нотаток](../plugins/audio-video-notes.md)

3. Функція *Примусово зупинити*:
    - Довгий дотик до *іконки OsmAnd → кнопка **i** → Примусово зупинити*.
    - Відкрийте налаштування та торкніться *Програми та сповіщення → OsmAnd → Примусово зупинити*.

</TabItem>

<TabItem value="ios" label="iOS">

Закрийте застосунок, провівши пальцем вгору та з екрана. Для вертикального списку застосунків проведіть пальцем вліво або вправо.

Можливо, вам доведеться виконати наступні кроки перед цим, інакше OsmAnd працюватиме у фоновому режимі:

- [Скасувати навігацію](../navigation/setup/route-navigation.md)
- [Зупинити завантаження та оновлення мап](../start-with/download-maps.md)
- [Зупинити запис поїздки](../plugins/trip-recording.md#new-track-recording)
- [Зупинити запис аудіо/відео нотаток](../plugins/audio-video-notes.md)

</TabItem>

</Tabs>


## Ярлики застосунку {#app-shortcuts}

<InfoAndroidOnly/>

[Ярлики застосунку](https://support.google.com/android/answer/9450271) доступні для іконки OsmAnd. Просто довго торкніться іконки OsmAnd на екрані вашого пристрою, щоб відкрити меню ярликів застосунку. Тут ви можете коротким натисканням вибрати наступні дії: *Навігація додому*, *Навігація на роботу*, *Почати запис*, *Пошук*, *Мої місця*, *Навігація до*. Довгий дотик до дії дозволяє додати нову іконку дії на екран вашого пристрою.

Торкніться іконки дії, щоб негайно запустити застосунок з вибраною дією.

![Ярлики](@site/static/img/steps/shortcuts_3_andr.png) ![Ярлики](@site/static/img/steps/shortcuts_4_andr.png)


## Офлайн-довідка {#offline-help}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_screen_ios.png)

</TabItem>

</Tabs>

У *меню Довідка* ви можете знайти статті з нашого сайту [www.osmand.net/docs](https://osmand.net/docs/intro/). Після початкового завантаження (потрібне підключення до Інтернету) статті довідки доступні в автономному режимі.
Перший підрозділ, *Офлайн-довідка*, містить **Найбільш переглядані** (або популярні) статті серед наших користувачів. Розділи **Посібник користувача** та **Вирішення проблем** мають таку ж структуру, як і на веб-сайті.
У *меню Довідка* ви також можете знайти корисні посилання на соціальні мережі OsmAnd, інформацію про версію вашого застосунку, примітки до випуску та контакти служби підтримки. Через Довідку ви також можете надсилати [logcat та звіти про збої](../troubleshooting/crash-logs.md#crash-and-logcat-logs).

### Меню {#menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_menu_ios.png)

</TabItem>

</Tabs>  

- **Надіслати звіт про збій** (*для Android*). Дозволяє користувачам надсилати звіти про збої застосунку розробникам, що допомагає у виявленні та вирішенні проблем.
- **Надіслати logcat лог** (*для Android*). Надає користувачам можливість надсилати детальні журнали збоїв застосунку розробникам, що полегшує глибший аналіз та усунення несправностей.
- **Надіслати лог** (*для iOS*). Виконує функцію, подібну до функції *Надіслати звіт про збій* для Android, дозволяючи користувачам на пристроях iOS повідомляти розробникам про збої застосунку для налагодження.
- **Копіювати версію збірки**. Дозволяє користувачам швидко та точно повідомляти поточну версію застосунку розробникам при звітуванні про проблеми, спрощуючи процес діагностики та вирішення.


### Найбільш переглядані {#most-viewed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_most_viewed_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_most_viewed_ios.png)

</TabItem>

</Tabs>

Найбільш переглядані статті серед наших користувачів - це статті в застосунку або на сайті, які зібрали найбільше переглядів або взаємодій з користувачами. Цей показник допомагає визначити контент, який є особливо цікавим або корисним для ваших користувачів. Він може надати цінні відомості про вподобання та інтереси користувачів, дозволяючи розробникам та творцям контенту адаптувати майбутній контент для кращого задоволення потреб аудиторії. Крім того, виділення популярних статей може допомогти новим користувачам знайти цінні ресурси в застосунку.


### Посібник користувача {#user-guide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/guide_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/guide_ios.png)

</TabItem>

</Tabs>

Розділ **Посібник користувача** в меню Довідка - це повний посібник, який відповідає структурі веб-сайту OsmAnd, забезпечуючи узгодженість інформації та легкість навігації між платформами. За допомогою Довідки ви можете легко переходити від застосунку до веб-сайту, знаходячи той самий контент, організований у звичний спосіб. Ця узгодженість підвищує зручність використання, надаючи єдиний ресурс підтримки для швидкого пошуку відповідей на запитання та вирішення проблем.


### Вирішення проблем {#troubleshooting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_troubleshooting_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_troubleshooting_ios.png)

</TabItem>

</Tabs>

Рішення та поради для вирішення поширених проблем. Якщо у вас є конкретне запитання, будь ласка, перевірте розділ [Вирішення проблем](../troubleshooting/index.md), щоб отримати на нього відповідь.

- [Налаштування](../troubleshooting/setup.md). При налаштуванні застосунку найчастіше виникають саме ці проблеми.
- [Мапи та дані](../troubleshooting/maps-data.md). Проблеми, пов'язані з мапами, пошуком та іншими даними.
- [Навігація](../troubleshooting/navigation.md). Найпоширеніші проблеми, що виникають у режимі навігації.
- [Запис треку](../troubleshooting/track-recording-issues.md). Поширені проблеми, пов'язані із записом треку, такі як шуми, пропуски та неточності.
- [Загальні](../troubleshooting/general.md). Поширені проблеми, пов'язані з різними функціями OsmAnd.
- [Звіти про збої](../troubleshooting/crash-logs.md). Як надіслати звіти про збої команді OsmAnd.
- [Android Auto](../troubleshooting/android_auto.md) (*тільки для Android*). Проблеми з автонавігацією.

### Зв'яжіться з нами {#contact-us}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_contact_us_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_contact_us_ios.png)

</TabItem>

</Tabs>

Дозволяє ставити запитання або робити пропозиції.

### Повідомити про проблеми {#report-issues}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_help_report_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_help_report_ios.png)

</TabItem>

</Tabs>

- **Відкрити проблему на GitHub**. [GitHub версії для Android](https://github.com/osmandapp/OsmAnd-Issues/issues), [GitHub версії для iOS](https://github.com/osmandapp/OsmAnd-iOS/issues): ставте запитання, пишіть про помилки та пропонуйте функції.
- **Надіслати звіт про збій** (*для Android*). Містить лише інформацію про збої.
- [Надіслати logcat лог](../../user/troubleshooting/crash-logs.md#send-logs-from-osmand-app-android) (*Android*) / [Надіслати лог](../../user/troubleshooting/crash-logs.md#send-logs-from-ios-devices) (*iOS*). Детальний файл журналу.

### Про OsmAnd {#about-osmand}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Знімок екрана офлайн-довідки Android](@site/static/img/steps/offline_about_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/steps/offline_about_ios.png)

</TabItem>

</Tabs>

Ви можете дізнатися про нашу команду, побачити поточну версію застосунку та що нового, а також завантажити бета-версію застосунку.


## Конфіденційність {#privacy}

Це застосунок з [відкритим вихідним кодом](https://github.com/osmandapp/osmand), без реклами та трекерів, орієнтований на конфіденційність. Для збереження максимальної конфіденційності OsmAnd в першу чергу пропонує офлайн-мапи, тому жодна взаємодія або геоінформація не витікає з вашого пристрою. Ми дуже уважно ставимося до того, які дані збираються і які дані передаються мережею, ви можете прочитати більше в нашій [Політиці конфіденційності](https://osmand.net/help-online/privacy-policy).


## Дозволи {#permissions}

OsmAnd не має жодних обов'язкових дозволів у версіях для iOS / Android.

**Основні**:

- **Інтернет**. Початкове завантаження / оновлення офлайн-мап. Також може знадобитися для доступу до онлайн-функцій, таких як [Зображення на рівні вулиць](../map/point-layers-on-map.md#-street-level-imagery), [Онлайн-фотографії](../map/map-context-menu.md#online-photos) або [Онлайн-мапи](../map/raster-maps.md).
- **GPS** / **Мережа GSM**. Визначення вашого місцезнаходження, супровід у режимі навігації та запис вашої поїздки (опціонально). Цей дозвіл запитується, коли ви натискаєте [кнопку мого місцезнаходження](../widgets/map-buttons.md#my-location-and-zoom) або коли ви [починаєте навігацію](../navigation/setup/route-navigation.md#start--stop-navigation).

**Опціональні**:

- **Камера/запис голосу** (*Android*). Використовується лише [Аудіо/відео нотатками](../plugins/audio-video-notes.md). Ця функція постачається як плагін і за замовчуванням вимкнена. Вона дозволяє швидко створювати аудіо/відео нотатки, пов'язані з місцезнаходженням, під час поїздки.