---
source-hash: 7b47f4d236356fcbfc3f51d3043e6df666ad45f0eb6899631849946623cc0007
sidebar_position: 3
title: Контекстне меню мапи
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

Контекстне меню мапи надає інформацію про вибраний об'єкт на мапі. Ви також можете використовувати його для створення маршруту до вибраного місця. Щоб відкрити контекстне меню, спочатку знайдіть потрібне місце на мапі, потім виберіть об'єкт коротким натисканням або довгим натисканням, вибираючи будь-яку точну точку на мапі.


### Виберіть об'єкт (один дотик) {#select-an-object-single-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Контекстне меню** з'являється, коли ви **один раз торкаєтеся** позначеного об'єкта на мапі. Це контекстне меню відображає основну інформацію про вибраний об'єкт, включаючи його *назву, іконку* (як вона представлена на мапі), *адресу, відстань* та *напрямок* від вашого поточного положення.

Ви можете вибирати різні типи об'єктів мапи, такі як *POI*, *улюблені місця*, *зупинки громадського транспорту*, *маркери*, *гірські вершини* або інші *об'єкти мапи*.

:::note
Вибрані об'єкти мапи відповідають [**вузлам**](https://wiki.openstreetmap.org/wiki/Node) або [**шляхам**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
:::

> *Висота гірських вершин відображається в метрах або футах залежно від [одиниць довжини](../personal/profiles.md#units--formats), вибраних у налаштуваннях профілю.*


### Виберіть будь-яку точку (довгий дотик) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню довгий дотик Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню довгий дотик iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Коли ви **довго торкаєтеся** будь-де на мапі, з'являється **контекстне меню**, що надає інформацію про вибране місце. Це включає адресу, відстань та напрямок від вашого поточного положення.

> **ПРИМІТКА**. *Довге натискання на **номер будинку** виділяє його контур і відкриває контекстне меню мапи.*


### Виберіть маршрут {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню треку Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Екран статистики треку iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Натискання на [GPX-трек](../map/tracks/index.md) на мапі відкриває [контекстне меню треку](../map/tracks/track-context-menu.md), де ви можете отримати доступ до додаткових опцій, пов'язаних з треком.


### Приховати контекстне меню {#hide-context-menu}

Щоб закрити **контекстне меню**:

- Торкніться будь-якої *порожньої області* на мапі, щоб уникнути повторного відкриття меню.
- Перетягніть меню *вниз* згори.


## Деталі {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Для отримання більш детальної інформації про об'єкт, натисніть кнопку **Деталі** в контекстному меню або проведіть панель вгору, щоб розгорнути її.


### Інформація про об'єкт {#object-info}

Панель **Інформація про об'єкт** надає додаткові деталі про вибраний об'єкт. Ви можете натиснути на будь-який запис, щоб скопіювати інформацію в буфер обміну.

Доступні деталі включають:

- [Альтернативні назви](#alternative-names)
- [Координати](../map/map-context-menu.md#coordinates)
- [POI / Вікіпедія поблизу](../map/map-context-menu.md#poi-поблизу--wikipedia-nearby-pois--wikipedia)
- [Маршрути громадського транспорту](../map/map-context-menu.md#public-transport-routes) (для зупинок транспорту)
- [Улюблені місця / Точки треку з тієї ж групи](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Посилання на OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Зображення / опис статті](../map/map-context-menu.md#опис-статті-article-description)
- [Онлайн фотографії](../map/map-context-menu.md#online-photos)

Крім того, панель може включати [Деталі OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), такі як:

- [Вебсайт](https://wiki.openstreetmap.org/wiki/Key:website)
- [Номер телефону](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Години роботи](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Плата](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Доступність](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Ширина](https://wiki.openstreetmap.org/wiki/Key:width) / [Висота](https://wiki.openstreetmap.org/wiki/Key:height)


### Альтернативні назви {#alternative-names}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Альтернативні назви Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Альтернативні назви Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Альтернативні назви Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Альтернативні назви Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd відображає **додаткові назви POI** у *контекстному меню мапи*, надаючи пріоритет назві *мовою відображення* або мові зі списку бажаних мов системи. Якщо доступно кілька перекладів, вони групуються в категорії тегів, такі як *назва, бренд, оператор* або *POI поблизу*.

Особливості відображення альтернативних назв:

- Додаткові переклади доступні через *випадаючий список*.

- Назви класифікуються за різними групами, такими як *список назв іншими мовами*, *Регіональні*, *Місцеві*, *Національні*, *Міжнародні*, *Короткі*, *Старі*, *Офіційні* та *Альтернативні* назви.

- Інші категорії включають *переклад для конкретного регіону* або *налаштування за замовчуванням*.

- Якщо певний переклад *недоступний*, OsmAnd за замовчуванням використовує **місцеву** назву для забезпечення точності та послідовності в багатомовних регіонах.


### Інформація про полігон {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Інформація про полігон Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Інформація про полігон Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Функція **Інформація про полігон** надає детальні дані про найближчі **полігони**, відображені на мапі. Це включає географічні об'єкти, адміністративні межі та інші відображені області.

**У розділі**:

- Відображає *список навколишніх полігонів*, відсортованих *від найменшого до найбільшого* за розміром площі.

- Кожен запис показує *тип і назву полігону*, що дозволяє легко ідентифікувати регіони та межі.

**Додаткові деталі**:

- При виборі точки на мапі або POI, панель **інформації про полігон** відображає список усіх полігонів, що містять вибране місце.

- Записи у списку включають **адміністративні поділи, зони землекористування, природні об'єкти та інші класифіковані регіони**.

- Панель дозволяє користувачам **копіювати назву та деталі полігону** для довідки.

- Щоб переглянути цю інформацію, перейдіть до *Контекстне меню мапи → Деталі → У межах*.

Ця функція допомагає зрозуміти ваше *поточне місцезнаходження* відносно відображених адміністративних поділів, природних територій або інших важливих географічних об'єктів.


### Координати {#coordinates}

|Формат координат| |
|:------|:------|
| <ul><li>DDD.DDDDD (Прості десяткові градуси)</li><li>DDD.DDDDD (N/S, E/W кома)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Стандарт UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Швейцарська сітка CH1903 та CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Веб-посилання OsmAnd](https://osmand.net/map)</li><li>[Веб-посилання OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Координати](@site/static/img/map/map_context_menu_Coordinates.png) |

У контекстному меню ви можете знайти [географічні координати](../search/search-coordinates.md#coordinate-format) точки в різних форматах, а також посилання OsmAnd та [OpenStreetMap Links](../map/map-context-menu.md#openstreetmap-link), якими можна поділитися (остання опція доступна лише при увімкненому [плагіні редагування OpenStreetMap](../plugins/osm-editing.md)). Якщо ви розгорнете розділ координат і довго натиснете будь-який рядок зі списку, його значення будуть автоматично скопійовані в буфер обміну (**Android**) або опція *Копіювати* стане доступною у спливаючому повідомленні (**iOS**).

Веб-посилання OsmAnd може бути автоматично розпізнано OsmAnd (приклад: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Обидва посилання OsmAnd та [OpenStreetMap links](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) відкриваються на відповідних сайтах з позначкою місця інтересу.


### POI поблизу / Wikipedia {#nearby-pois--wikipedia}

![Статті Вікіпедії поблизу](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Статті Вікіпедії поблизу](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Ці розділи відображають найближчі [статті Вікіпедії](../plugins/wikipedia.md) або [Точки інтересу](../map/point-layers-on-map.md#points-of-interest-pois) з кнопками *<Translate android="true" ids="shared_string_show_on_map"/>* та *<Translate android="true" ids="search_more"/>* для відображення та [пошуку](../search/search-poi.md) всіх інших POI та статей Вікіпедії.

Натискання на *POI поблизу / статті Вікіпедії* відкриває список точок (POI або Wikipedia). Натискання на одну з цих точок зі списку точок переміщує мапу до цієї точки (POI або Wikipedia) з відкриттям контекстного меню мапи точки.

> **ПРИМІТКА**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) з'явиться лише якщо ви попередньо завантажили спеціальні мапи зі [статтями Вікіпедії для цієї області](../plugins/wikipedia.md#download-wikipedia-packages)*.


### Маршрути громадського транспорту {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Маршрути громадського транспорту Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маршрути громадського транспорту iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Відображається інформація про маршрути громадського транспорту для вибраної зупинки. Інформацію про контекстне меню громадського транспорту та дії з ним читайте [тут](../map/public-transport.md#transport-routes-context-menu).


### Улюблені місця / Точки треку з групи {#favorites--track-points-from-the-group}

![Список улюблених](@site/static/img/map/favorite_list_android.png) ![Повний список улюблених](@site/static/img/map/favorite_list_full_android.png)

Це список усіх точок в одній групі для Улюбленого місця або Точки маршруту. При натисканні розгортається весь список точок однієї групи, при натисканні на точку зі списку мапа переміщується до вибраної точки.


### Лінійний об'єкт {#linear-object}

![Список улюблених](@site/static/img/map/linear_object_andr.png)

Для **лінійних об'єктів**, таких як *бар'єри, сходи, ворота, лавки, спуски, греблі, стовпчики або прорізи*, контекстне меню відображає додаткові деталі. Це включає тип POI та пов'язану з ним адресу, або тип об'єкта, якщо назва не присвоєна.


### Деталі зони скелелазіння та скелі {#climbing-area-and-crag-details}

![Список улюблених](@site/static/img/map/climbing_andr.png)

При виборі [зони скелелазіння або скелі](../map/routes.md#climbing-routes), OsmAnd надає детальний опис місця скелелазіння, включаючи: назву та місцезнаходження, рейтинг складності скелелазіння (UIAA, French, YDS тощо), тип скелі, висоту та довжину маршруту, якість скелелазіння та стан поверхні.


### Гірськолижні схили, маршрути для гірських велосипедів та траси для брудових мотоциклів {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Гірськолижні схили та маршрути для гірських велосипедів](@site/static/img/map/ski_mtb.png) ![Гірськолижні схили та маршрути для гірських велосипедів](@site/static/img/map/ski_mtb_2.png)

Ви можете натиснути на елементи мапи, такі як **гірськолижні схили**, **маршрути для гірських велосипедів (MTB)** та **траси для брудових мотоциклів**, щоб відкрити їх контекстне меню з детальною інформацією. Доступна інформація включає: назву маршруту або схилу (якщо доступно в даних OSM), ID об'єкта OSM або ID зв'язку, рівень складності, довжину траси, тип місцевості тощо.

**Підтримувані теги:** `piste:type=*` (гірськолижні схили), `route=mtb`, `route=atv` або `route=dirt_bike` (позашляхові траси для мотоциклів)

:::note
Використовуйте стилі мапи [Зима та лижі](../map/vector-maps.md#winter-and-ski) або [Позашляховик](../map/vector-maps.md#offroad) для кращої видимості.
:::


### Опис статті {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Список описів](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Список описів](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Ця частина містить частину опису зі [статті Вікіпедії](../plugins/wikipedia.md), опису [Улюбленого місця](../personal/favorites.md) або Точки маршруту, при натисканні ви можете відкрити повний опис.


### Посилання на OpenStreetMap {#openstreetmap-link}

![Посилання OSM](@site/static/img/map/context_menu_osm_link.png) ![Посилання OSM](@site/static/img/map/context_menu_osm_link_1.png)

Посилання на OpenStreetMap надає пряме посилання на об'єкт OpenStreetMap, де ви можете знайти повну інформацію про нього:
[вузол](https://wiki.openstreetmap.org/wiki/Node) або [шлях](https://wiki.openstreetmap.org/wiki/Way).


### Онлайн фотографії {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню онлайн фотографій Android](@site/static/img/map/images_nearby_1_andr.png) ![Зображення рівня вулиці Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню онлайн фотографій iOS](@site/static/img/map/online_photo_ios.png) ![Зображення рівня вулиці iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

#### Дії з фотографіями {#actions-with-photos}

Як отримати доступ:

- Натисніть кнопку **Показати все**(Android) / **Переглянути все**(iOS), щоб відкрити [галерею](#gallery-menu) у повноекранному режимі. Там ви можете переглядати всі зображення, пов'язані з вибраним місцем.

- Натисніть на фотографію, щоб отримати доступ до дій, таких як *Поділитися*, *Деталі*, *Відкрити в браузері* та *Завантажити*.

- Ви також можете [переглядати](../map/point-layers-on-map.md#-street-level-imagery) зображення рівня вулиці на мапі.

У розділі **Онлайн фотографії** контекстного меню мапи ви можете отримати доступ до фотографій об'єктів з [Wikimedia](https://www.wikimedia.org/), яка пропонує медіафайли, позначені тегами `image` або `wikimedia` з OpenStreetMap. <!-- Here we need to write about Popula places (WIkipedia) -->

<!--
Images nearby

Details:

- Mapillary offers nearby street-level images, while Wikimedia provides media tagged with `image` or `wikimedia`from OpenStreetMap.

- You can contribute your photos using the *Add Photos* button.

*Images nearby* (*iOS*) section provides access to photos of points of interest from sources such as [Wikimedia](https://www.wikimedia.org/) and [Mapillary](../plugins/mapillary.md).
-->

#### Меню галереї {#gallery-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню онлайн фотографій Android](@site/static/img/map/gallery_menu_android.png) ![Зображення рівня вулиці Android](@site/static/img/map/gallery_menu_android_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню онлайн фотографій iOS](@site/static/img/map/gallery_menu_ios.png) ![Зображення рівня вулиці iOS](@site/static/img/map/gallery_menu_ios_1.png)

</TabItem>

</Tabs>


Галерея може відображати до 100 елементів. Ви можете переглядати всі фотографії, а коротке натискання на будь-яку фотографію відкриє її для перегляду додаткових деталей (*Назва*, *Дата*, *Автор*, *Ліцензія*) та виконання різних дій (*Поділитися*, *Деталі*, *Відкрити в браузері* та *Завантажити*).


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню онлайн фотографій iOS](@site/static/img/map/gallery_menu_ios_3.png)

</TabItem>

</Tabs>



На iOS довге натискання на будь-яку фотографію відкриває додаткове меню з діями, такими як *Деталі*, *Відкрити в браузері* та *Завантажити*.

Кнопки:
- Кнопка **Поділитися** дозволяє поділитися вибраним елементом.
- Кнопка **Три крапки** відкриває меню з опціями, такими як *Деталі*, *Відкрити в браузері* та *Завантажити*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Контекстне меню онлайн фотографій Android](@site/static/img/map/gallery_menu_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню онлайн фотографій iOS](@site/static/img/map/gallery_menu_ios_2.png)

</TabItem>

</Tabs>


Екран деталей надає інформацію, таку як *Назва*, *Дата додавання*, *Автор*, *Ліцензія*, *Джерело* та *Посилання* вибраного елемента.

#### Зображення рівня вулиці {#street-level-imagery}

Деталі:

- За допомогою кнопки *Додати фотографії* ви можете поділитися власними зображеннями рівня вулиці через Mapillary.

- Використовуйте кнопку *Дослідити*, щоб відкрити перегляд Mapillary з фотографіями.

*Зображення рівня вулиці* інтегрує велику колекцію реальних видів вулиць Mapillary. Ви можете отримати доступ до найближчих, послідовно знятих зображень вулиць та доріжок. Також Mapillary надає зображення рівня вулиці безпосередньо на мапі. Ви можете прочитати більше в статті [Плагін Mapillary](../plugins/mapillary.md).




### * Аудіо/Відео нотатка {#-audiovideo-note}

<InfoAndroidOnly />

![Список зображень](@site/static/img/map/image_list_android.png) ![Список відео](@site/static/img/map/video_list_android.png)

Інформація про [аудіо/відео нотатки](../plugins/audio-video-notes.md), така як дата, координати, попередній перегляд та інше, доступна в меню **Деталі**. Ви можете відкрити нотатки у вторинному програмному забезпеченні, натиснувши кнопку **Відтворити / Показати** в контекстному меню нотатки.


## Дії {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню дій Android](@site/static/img/map/actions_menu_android.png) ![Додаткове меню дій Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню дій iOS](@site/static/img/map/actions_menu_ios.png) ![Додаткове меню дій iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Це набір специфічних маніпуляцій, які можна виконати над точкою або об'єктом. Це меню розділене на дві частини: видима секція складається максимум з 3 дій, а інші дії доступні за допомогою кнопки *Дії*. Ви можете налаштувати (*Android*) порядок дій у [Загальних налаштуваннях](#customize).


### Додати / Редагувати улюблене {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Додати Редагувати улюблене Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Додати Редагувати улюблене iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

У контекстному меню є опції **додати** або **редагувати** вибрану точку / об'єкт до [списку улюблених](../personal/myplaces.md).

- Щоб **Додати**, потрібно вибрати точку / об'єкт, натиснути іконку *Зірка* (з підписом Додати) та ввести всю необхідну інформацію.

- Щоб **Редагувати** інформацію про улюблену точку, потрібно увімкнути *Показати на мапі* (*Меню → Мої місця → Улюблені*) потім натиснути на неї, і в контекстному меню замість іконки *Зірка* з'явиться іконка *Олівець* (з підписом Редагувати).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - додає вибрану точку до списку улюблених.


### Додати / Редагувати маркер {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Додати Редагувати маркер Android](@site/static/img/map/add_marker_android.png) ![Дія Пройти маркер Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Дія Додати Редагувати маркер iOS](@site/static/img/map/add_marker_ios.png) ![Дія Відновити маркер Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно натиснути іконку **прапорця** в меню (*Android*), **стрілки** (*iOS*) - відображає напрямок та відстань до вибраної точки від вашого поточного місцезнаходження.

Дії:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Ставить новий маркер на вибрану точку.
- **Позначити пройденим** (*Android*) / *Відхилити* (*iOS*). Деактивує маркер і переміщує його в Історію.
- **Зробити активним** (*Android*). Переміщує маркер на верхню позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до активного списку.

Детальніше про [маркери тут](../personal/markers.md).


### Поділитися {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Версії до Android 14 | 14+ Android |
|:------------|:---------------|
| ![Дія Поділитися Android](@site/static/img/map/action_share_1_andr.png) | ![Дія Поділитися Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Поділитися iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Додаток OsmAnd дозволяє **<Translate android="true" ids="shared_string_share"/>** *Моє місцезнаходження* або будь-яке вибране місце на мапі за допомогою месенджера, електронної пошти або соціальних мереж.

Доступні опції для обміну місцезнаходженням:

- ***Надіслати***. Надсилає текст через доступні на вашому пристрої додатки. Включає всю інформацію про місцезнаходження: назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію як посилання.
- ***Копіювати***. Копіює всю інформацію про місцезнаходження (назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію як посилання) до буфера обміну.
- ***Копіювати адресу***. Копіює лише інформацію про адресу до буфера обміну.
- ***Копіювати назву POI***. Копіює лише назву POI або адресу, якщо назви немає, до буфера обміну.
- ***Копіювати координати***. Копіює лише інформацію про координати до буфера обміну.
- ***geo***. Відкриває список доступних додатків, що підтримують геолокацію. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-код*** (*Android*). Генерує посилання на вибране місцезнаходження у вигляді QR-коду.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Напрямки до / від {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Напрямки Android](@site/static/img/map/action_directions_android.png)

![Кілька напрямків Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Напрямки iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Щоб розпочати навігацію або планування маршруту, спочатку потрібно вибрати пункт призначення за допомогою [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Якщо у вас вже є пункт призначення, меню запропонує замінити пункт призначення або вставити його як іншу проміжну або початкову точку.

Також можна спочатку вибрати *Від* пункту призначення через контекстне меню мапи (<Translate android="true" ids="context_menu_item_directions_from"/>).

Детальніше про [навігацію тут](../navigation/setup/route-navigation.md).

:::note Натисніть Почати навігацію
Якщо ви натиснете **Почати навігацію** - точка *Від* буде відкинута, оскільки додаток переходить у режим навігації. Щоб зберегти маршрут, не натискайте *Почати навігацію* та [**проведіть вниз**](#hide-context-menu) меню *Підготовка маршруту*.
:::


### Пошук поблизу {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Пошук Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Пошук iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

За допомогою цієї дії контекстного меню можна шукати навколо певного місця на мапі.

Детальніше про функціональність [пошуку](../search/index.md).


### Уникати дороги {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Уникати дороги на мапі Android](@site/static/img/map/action_avoid_android.png) ![Відхилити уникнену дорогу Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Уникати дороги на мапі iOS](@site/static/img/map/avoid_route_ios_1.png) ![Відхилити уникнену дорогу iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Використовуючи контекстне меню мапи, ви можете додати певну дорогу до списку доріг, які не використовуються для маршрутизації. Це вплине на [підготовку маршруту](../navigation/setup/route-navigation.md).
Щоб видалити раніше вибрані дороги зі списку *[Уникати доріг](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, натисніть на знак, виберіть *Видалити* (**Android**) або *Відхилити* (**iOS**).

:::note
Функція "Уникати доріг" є глобальною і впливає на всі *[типи маршрутизації](../navigation/routing/osmand-routing.md#routing-types)* (крім *[Онлайн маршрутизації](../navigation/routing/online-routing.md)*).
:::


### Змінити положення об'єкта {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Змінити положення Android](@site/static/img/map/action_change_position_android.png)

![Дія Змінити положення UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Змінити положення iOS](@site/static/img/map/action_change_position_ios.png)

![Дія Змінити положення UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>

Майже кожен створений користувачем об'єкт є рухомим, тобто Маркер, Улюблене, Створений POI, Аудіо/Відео нотатка або Точка маршруту. Спочатку виберіть об'єкт на мапі, а потім використовуйте *<Translate android="true" ids="change_markers_position"/>* меню, щоб перемістити його в нове місце.


### Планувати маршрут {#plan-a-route}

![Дія Планувати маршрут Android](@site/static/img/map/action_plan_route_android.png)

Ви можете розпочати планування маршруту з вибраної точки через контекстне меню об'єкта.

Детальніше про інструмент [Планувати маршрут](../plan-route/create-route.md).


### Оновити / Завантажити онлайн мапи {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Завантажити онлайн мапу Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Завантажити онлайн мапу iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Щоб оновити або завантажити онлайн мапи (тайли) у певному місці, ви можете скористатися контекстним меню об'єкта:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* та для *Оновлення*, перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* та *<Translate ios="true" ids="update_tile"/>*.

Будь ласка, прочитайте [повну інструкцію](../map/raster-maps.md#download--update-tiles).


### Оновити / Завантажити векторні мапи {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Завантажити векторну мапу Android](@site/static/img/map/action_download_vector_map_android.png)

![Виберіть векторну мапу світу на Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Завантажити векторну мапу iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Виберіть векторну мапу на iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Якщо в вибраному місці немає офлайн-мапи, наприклад, меню об'єкта мапи було відкрито через Пошук або через певне Улюблене місце, тоді буде запропоновано [завантажити](../start-with/download-maps.md#select-on-the-map) найменшу можливу офлайн-мапу.

**iOS**. Якщо ви вже [завантажили](../map/map-context-menu.md) мапи OsmAnd (векторні або рельєфні), їх можна оновити через контекстне меню. Спочатку потрібно вибрати регіон на мапі - торкніться будь-якого місця на мапі світу з масштабом 3-7.

> **ПРИМІТКА**. *Якщо ви відкрили контекстне меню для регіону мапи (регіон виділено), ви зможете побачити ***<Translate android="true" ids="rendering_category_details"/>*** про нього: тип та розмір доступної мапи, посилання на сторінку Вікіпедії, мову, населення та інше.*


### * Додати / Видалити точку паркування {#-add--delete-parking-point}

:::note
Щоб додати/видалити точки паркування, увімкніть [**плагін Позиція паркування**](../plugins/parking.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Паркування Android](@site/static/img/map/action_parking_android.png)

![Дія Видалити паркування Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Паркування iOS](@site/static/img/map/action_parking_ios.png)

![Дія Видалити паркування iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Будь-яке вибране місце на мапі може бути позначене як [позиція паркування](../plugins/parking.md). Щоб видалити позицію паркування, ви можете відкрити контекстне меню, пов'язане з місцем паркування.


### * Додати / Редагувати точку маршруту {#-add--edit-track-waypoint}

:::note
Щоб додати/редагувати точки маршруту, увімкніть [**плагін Запис поїздки**](../plugins/trip-recording.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Точка маршруту Android](@site/static/img/map/action_waypoint_android.png)

![Виберіть маршрут для додавання точки маршруту Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Точка маршруту iOS](@site/static/img/map/action_waypoint_ios.png)

![Виберіть маршрут для додавання точки маршруту iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Ви можете додавати точки маршруту до записаного треку або до поточного запису треку за допомогою контекстного меню мапи.

- Виберіть місце на мапі [довгим натисканням](../map/map-context-menu.md#select-any-point-long-tap).
- У *контекстному меню мапи*, що відкриється, виберіть *Дії → Додати точку маршруту*.
- У списку відображаються [треки](../map/tracks/index.md#display-tracks-on-the-map), записані та показані на мапі, а також [поточний запис треку](../plugins/trip-recording.md), до якого можна додати вибрану точку маршруту.
- Ви можете додавати точки маршруту до треку, який ще не активний для запису, в цьому випадку неактивний трек переходить зі стану *Старт* у стан *Відновити*.
- [Заповніть](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) необхідні дані та збережіть точку маршруту.
- Ви можете налаштувати [Швидкі дії](../widgets/quick-action.md), додавши точку маршруту до *Додати точку маршруту*.


### * Створити / Змінити POI {#-create--modify-poi}

:::note
Щоб додати створити/змінити POI, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

За допомогою плагіна OSM Editing ви можете створювати та змінювати більшість POI, присутніх на [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [створює новий POI](../plugins/osm-editing.md#create--modify-poi) у вибраному місці.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [змінює вибраний POI](../plugins/osm-editing.md#create--modify-poi).


### * Відкрити нотатку OSM {#-open-osm-note}

:::note
Щоб додати відкрити нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Дія Нотатка Android](@site/static/img/map/action_note_android.png)

![Дія Додати нотатку UI Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Дія Нотатка iOS](@site/static/img/map/action_note_ios.png)

![Дія Додати нотатку UI iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Ви можете **повідомити** про помилки даних мапи в певному місці [спільноті OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Будь ласка, дотримуйтесь [рекомендацій](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) та додавайте відповідні коментарі до проблеми.


### * Коментувати / Закрити нотатку OSM {#-comment--close-osm-note}

:::note
Щоб коментувати/закрити нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Коментувати нотатку OSM Android](@site/static/img/map/action_comment_note_android.png) ![Відкрити нотатку OSM Android](@site/static/img/map/action_reopen_note_android.png)

Ви можете [коментувати](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [вирішувати](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) та знову відкривати
Нотатки OpenStreetMap через контекстне меню об'єкта.


### * Завантажити POI / нотатку OSM {#-upload-poi--osm-note}

:::note
Щоб завантажити POI / нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Завантажити POI Android](@site/static/img/map/action_poi_upload_android.png) ![Завантажити нотатку OSM Android](@site/static/img/map/action_note_upload_android.png)

Якщо ви використовуєте *Офлайн-режим* для додавання / редагування POI або нотатки OSM, вам потрібно буде завантажити зміни до OpenStreetMap. За замовчуванням *Офлайн-режим* увімкнено, щоб уникнути випадкових змін публічної бази даних. Ви можете завантажити або видалити зміни через контекстне меню створеного об'єкта.


### * Записати AV нотатку {#-record-av-note}

<InfoAndroidOnly />

:::note
Щоб записати аудіо/відео нотатки, увімкніть [**плагін Аудіо/Відео нотатки**](../plugins/audio-video-notes.md) OsmAnd.
:::

![Дія Аудіо-Відео Android](@site/static/img/map/action_av_note_android.png)

Записує або робить медіа-нотатку в вибраній точці на мапі.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - робить [аудіо нотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на накладенні з іконкою аудіо).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - робить [відео нотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на накладенні з іконкою відео).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - робить [фото точку](../map/point-layers-on-map.md#-audio--video-points-android) на мапі.


## Налаштувати {#customize}

<InfoAndroidOnly/>

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Налаштування контекстного меню мапи](@site/static/img/map/map_context_menu_customize_1.png) <!-- ![Налаштування контекстного меню мапи](@site/static/img/map/map_context_menu_customize_2.png) --> ![Налаштування контекстного меню мапи](@site/static/img/map/map_context_menu_customize_3.png)

Ви можете змінити порядок або приховати елементи з меню *Дії* в *контекстному меню мапи*. Пропонується всього 16 дій.

- Ви можете перемістити три найкорисніші дії вгору списку *Основні дії*.
- Решту меню можна налаштувати для кожного профілю окремо в розділах *Додаткові дії* та *Приховані*.

Доступні типи дій:

- **<Translate android="true" ids="main_actions"/>**. Розділ має лише 4 кнопки, три з яких можна налаштувати, і Дії, яка залишається незмінною.
- **<Translate android="true" ids="additional_actions"/>**. Ви можете отримати доступ до цих дій, натиснувши кнопку *Дії*.
- **<Translate android="true" ids="shared_string_hidden"/>**. Переміщення дій до цього розділу не припиняє їх роботу. Вони просто не з'являються в меню Дії.


## Пов'язані статті {#related-articles}

- [Векторні мапи (Стилі мапи)](./vector-maps.md)
- [Растрові мапи (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на мапі](./point-layers-on-map.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірної палітри](../personal/color-palette-schemes.md)

> *Цю статтю востаннє оновлено у квітні 2025 року*