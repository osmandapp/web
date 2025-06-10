---
source-hash: 3f3b85046b389da6c840d6ec98c139f32b2f5116b6d2eb8c376445af5e4cf4bf
sidebar_position: 3
title: Контекстне меню карти
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

Контекстне меню карти надає інформацію про вибраний об'єкт на карті. Ви також можете використовувати його для створення маршруту до вибраного місця. Щоб відкрити контекстне меню, спочатку знайдіть потрібне місце на карті, потім виберіть об'єкт коротким натисканням або довгим натисканням, вибираючи будь-яку точну точку на карті.


### Виберіть об'єкт (одне натискання) {#select-an-object-single-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Контекстне меню** з'являється, коли ви **один раз натискаєте** на позначений об'єкт на карті. Це контекстне меню відображає важливу інформацію про вибраний об'єкт, включаючи його *назву, іконку* (як вона представлена на карті), *адресу, відстань* та *напрямок* від вашого поточного положення.  

Ви можете вибирати різні типи об'єктів карти, такі як *POI*, *улюблені місця*, *зупинки громадського транспорту*, *маркери*, *гірські вершини* або інші *об'єкти карти*.

:::note
Вибрані об'єкти карти відповідають [**вузлам**](https://wiki.openstreetmap.org/wiki/Node) або [**шляхам**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
:::

> *Висота гірських вершин відображається в метрах або футах залежно від [одиниць довжини](../personal/profiles.md#units--formats), вибраних у налаштуваннях профілю.*


### Виберіть будь-яку точку (довге натискання) {#select-any-point-long-tap}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Коли ви **довго натискаєте** будь-де на карті, з'являється **контекстне меню**, що надає інформацію про вибране місце. Це включає адресу, відстань та напрямок від вашого поточного положення.

> **ПРИМІТКА**. *Довге натискання на **номер будинку** виділяє його контур і відкриває контекстне меню карти.*


### Виберіть маршрут {#select-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Натискання на [GPX-трек](../map/tracks/index.md) на карті відкриває [контекстне меню треку](../map/tracks/track-context-menu.md), де ви можете отримати доступ до додаткових опцій, пов'язаних з треком.


### Приховати контекстне меню {#hide-context-menu}

Щоб закрити **контекстне меню**:

- Натисніть будь-яку *порожню область* на карті, щоб уникнути повторного відкриття меню.
- Перетягніть меню *вниз* згори.


## Деталі {#details}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Для отримання більш детальної інформації про об'єкт натисніть кнопку **Деталі** в контекстному меню або проведіть панель вгору, щоб розгорнути її.


### Інформація про об'єкт {#object-info}

Панель **Інформація про об'єкт** надає додаткові деталі про вибраний об'єкт. Ви можете натиснути на будь-який запис, щоб скопіювати інформацію в буфер обміну.  

Доступні деталі включають:

- [Альтернативні назви](#alternative-names)
- [Координати](../map/map-context-menu.md#coordinates)
- [Найближчі POI / Вікіпедія](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Маршрути громадського транспорту](../map/map-context-menu.md#public-transport-routes) (для зупинок транспорту)
- [Улюблені місця / Точки треку з тієї ж групи](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Посилання на OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Зображення / опис статті](../map/map-context-menu.md#article-description-article-description)
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

![Alternative names Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative names Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternative names Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative names Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd відображає **додаткові назви POI** у *контекстному меню карти*, надаючи пріоритет назві мовою відображення або мовою зі списку бажаних мов системи. Якщо доступно кілька перекладів, вони групуються за категоріями, такими як *назва, бренд, оператор* або *найближчі POI*.  

Особливості відображення альтернативних назв:

- Додаткові переклади доступні через *випадаючий список*.

- Назви класифікуються за різними групами, такими як *список назв іншими мовами*, *Регіональні*, *Місцеві*, *Національні*, *Міжнародні*, *Короткі*, *Старі*, *Офіційні* та *Альтернативні* назви.

- Інші категорії включають *регіонально-специфічний переклад* або *налаштування за замовчуванням*.

- Якщо певний переклад *недоступний*, OsmAnd за замовчуванням використовує **місцеву** назву для забезпечення точності та послідовності в багатомовних регіонах.


### Інформація про полігон {#polygon-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Polygon Information Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon Information Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Функція **Інформація про полігон** надає детальні дані про найближчі **полігони**, відображені на карті. Це включає географічні об'єкти, адміністративні межі та інші картографовані області.  

**Розділ "В межах"**:

- Відображає *список навколишніх полігонів*, відсортованих *від найменшого до найбільшого* за площею.

- Кожен запис показує *тип і назву полігону*, що дозволяє легко ідентифікувати регіони та межі.

**Додаткові деталі**:

- При виборі точки на карті або POI, панель **інформації про полігон** відображає список усіх полігонів, що містять вибране місце.

- Записи в списку включають **адміністративні поділи, зони землекористування, природні об'єкти та інші класифіковані регіони**.

- Панель дозволяє користувачам **копіювати назву та деталі полігону** для довідки.

- Щоб переглянути цю інформацію, перейдіть до *Контекстне меню карти → Деталі → В межах*.

Ця функція допомагає зрозуміти ваше *поточне місцезнаходження* відносно картографованих адміністративних поділів, природних територій або інших важливих географічних об'єктів.


### Координати {#coordinates}

|Формат координат| |
|:------|:------|
| <ul><li>DDD.DDDDD (Прості десяткові градуси)</li><li>DDD.DDDDD (N/S, E/W кома)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Стандарт UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Швейцарська сітка CH1903 та CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Веб-посилання OsmAnd](https://osmand.net/map)</li><li>[Веб-посилання OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png) |

У контекстному меню ви можете знайти [географічні координати](../search/search-coordinates.md#coordinate-format) точки в різних форматах, а також посилання OsmAnd та [OpenStreetMap Links](../map/map-context-menu.md#openstreetmap-link), якими можна поділитися (остання опція доступна лише тоді, коли увімкнено [плагін редагування OpenStreetMap](../plugins/osm-editing.md)). Якщо ви розгорнете розділ координат і довго натиснете будь-який рядок зі списку, його значення будуть автоматично скопійовані в буфер обміну (**Android**) або опція *Копіювати* стане доступною у спливаючому повідомленні (**iOS**).  

Веб-посилання OsmAnd може бути автоматично розпізнане OsmAnd (приклад: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Як OsmAnd, так і [посилання OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) відкриваються на відповідних сайтах з позначкою до місця інтересу.  


### Найближчі POI / Вікіпедія {#nearby-pois--wikipedia}

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Ці розділи відображають найближчі [статті Вікіпедії](../plugins/wikipedia.md) або [Точки інтересу (POI)](../map/point-layers-on-map.md#points-of-interest-pois) з *<Translate android="true" ids="shared_string_show_on_map"/>* та *<Translate android="true" ids="search_more"/>* для відображення та [пошуку](../search/search-poi.md) всіх інших POI та статей Вікіпедії.

Натискання на *Найближчі POI / статті Вікіпедії* відкриває список точок (POI або Вікіпедія). Натискання на одну з цих точок зі списку точок переміщує карту до цієї точки (POI або Вікіпедія) з відкриттям контекстного меню карти точки.

> **ПРИМІТКА**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) з'явиться лише якщо ви попередньо завантажили спеціальні карти зі [статтями Вікіпедії для цієї області](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### Маршрути громадського транспорту {#public-transport-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Відображається інформація про маршрути громадського транспорту для обраної зупинки. Інформацію про контекстне меню громадського транспорту та дії з ним читайте в [статті](../map/public-transport.md#transport-routes-context-menu).


### Улюблені місця / Точки треку з групи {#favorites--track-points-from-the-group}

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png)

Це список усіх точок в одній групі для Улюбленого місця або Точки маршруту. При натисканні розгортається весь список точок однієї групи, при натисканні на точку зі списку карта переміщується до вибраної точки.


### Лінійний об'єкт {#linear-object}

![Favorite list](@site/static/img/map/linear_object_andr.png)

Для **лінійних об'єктів**, таких як *бар'єри, сходи, ворота, лавки, спуски, греблі, стовпчики або прорізи*, контекстне меню відображає додаткові деталі. Це включає тип POI та пов'язану з ними адресу, або тип об'єкта, якщо назва не призначена.


### Деталі зони скелелазіння та скелі {#climbing-area-and-crag-details}

![Favorite list](@site/static/img/map/climbing_andr.png)

При виборі [зони скелелазіння або скелі](../map/routes.md#climbing-routes), OsmAnd надає детальний опис місця скелелазіння, включаючи: назву та місцезнаходження, рейтинг складності скелелазіння (UIAA, Французька, YDS тощо), тип скелі, висоту та довжину маршруту, якість скелелазіння та стан поверхні.


### Гірськолижні схили, маршрути для гірських велосипедів та траси для кросових мотоциклів {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb.png)  ![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb_2.png)

Ви можете натискати на елементи карти, такі як **гірськолижні схили**, **маршрути для гірських велосипедів (MTB)** та **траси для кросових мотоциклів**, щоб відкрити їх контекстне меню з детальною інформацією. Доступна інформація включає: назву маршруту або схилу (якщо доступно в даних OSM), ідентифікатор об'єкта OSM або ідентифікатор зв'язку, рівень складності, довжину траси, тип місцевості та інше.

**Підтримувані теги:** `piste:type=*` (гірськолижні схили), `route=mtb`, `route=atv` або `route=dirt_bike` (позашляхові траси для мотоциклів)

:::note
Використовуйте стилі карти [Зима та лижі](../map/vector-maps.md#winter-and-ski) або [Позашляховий](../map/vector-maps.md#offroad) для кращої видимості.
:::


### Опис статті {#article-description}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Description list](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Ця частина містить частину опису зі [статті Вікіпедії](../plugins/wikipedia.md), опису [Улюбленого місця](../personal/favorites.md) або Точки маршруту, натиснувши на яку, ви можете відкрити повний опис.


### Посилання на OpenStreetMap {#openstreetmap-link}

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

Посилання на OpenStreetMap надає пряме посилання на об'єкт OpenStreetMap, де ви можете знайти повну інформацію про нього:  
[вузол](https://wiki.openstreetmap.org/wiki/Node) або [шлях](https://wiki.openstreetmap.org/wiki/Way).


### Онлайн фотографії {#online-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)
![Online Photos context menu Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)
![Online Photos context menu iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Коли ви натискаєте на Популярне місце на карті, розділ **Онлайн фотографії** в *контекстному меню POI* відображає попередній перегляд зображень, отриманих з [Wikipedia](https://www.wikipedia.org/) та [Wikimedia Commons](https://www.wikimedia.org/).

Натискання на фотографію відкриває вікно **Галерея**, де ви можете:

- Переглядати до 100 зображень для кожного місця
- Переглядати метадані зображення (*автор*, *ліцензія*, *джерело*)
- Виконувати дії: **Поділитися**, **Відкрити в браузері**, **Завантажити**

> *На iOS, довге натискання на зображення відкриває контекстне меню зі швидкими діями.*

Докладніше див.: [Онлайн фотографії](https://osmand.net/docs/user/map/popular_places#online-photos) та [Перегляд галереї](https://osmand.net/docs/user/map/popular_places#gallery)


### Зображення на рівні вулиці {#street-level-imagery}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd підтримує інтеграцію з [Mapillary](https://www.mapillary.com/), глобальною платформою для краудсорсингових зображень на рівні вулиці. Ця функція дозволяє переглядати та досліджувати послідовності фотографій реального світу безпосередньо на карті.

Зображення Mapillary відображаються як іконки фотографій з напрямком, вирівняні з дорогою або шляхом, де вони були зроблені. Це може допомогти вам краще зрозуміти своє оточення, особливо в незнайомих районах.

Ви можете:

- Використовувати кнопку **Дослідити**, щоб відкрити переглядач Mapillary та переглядати найближчі зображення на рівні вулиці.
- Натиснути кнопку **Додати фотографії**, щоб додати власні фотографії на платформу Mapillary.

> *Дізнайтеся більше про те, як активувати та використовувати цю функцію, у [посібнику з плагіна Mapillary](../plugins/mapillary.md).*


### * Аудіо/Відео нотатка {#-audiovideo-note}

<InfoAndroidOnly />

![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)

Інформація про [аудіо/відео нотатки](../plugins/audio-video-notes.md), така як дата, координати, попередній перегляд та інше, доступна в меню **Деталі**. Ви можете відкрити нотатки у вторинному програмному забезпеченні, натиснувши кнопку **Відтворити / Показати** в контекстному меню нотатки.


## Дії {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Це набір специфічних маніпуляцій, які можна виконати над точкою або об'єктом. Це меню розділене на дві частини: видима частина складається максимум з 3 дій, а інші дії доступні за допомогою кнопки *Дії*. Ви можете налаштувати (*Android*) порядок дій у [Загальних налаштуваннях](#customize).


### Додати / Редагувати улюблене місце {#add--edit-favorite}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

У контекстному меню є опції **додати** або **редагувати** вибрану точку / об'єкт до [списку улюблених місць](../personal/myplaces.md).

- Щоб **Додати**, потрібно вибрати точку / об'єкт, натиснути іконку *Зірка* (з підписом Додати) та ввести всю необхідну інформацію.  

- Щоб **Редагувати** інформацію про улюблену точку, потрібно увімкнути *Показати на карті* (*Меню → Мої місця → Улюблені місця*), потім натиснути на неї, і в контекстному меню замість іконки *Зірка* з'явиться іконка *Олівець* (з підписом Редагувати).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - додає вибрану точку до списку улюблених місць.


### Додати / Редагувати маркер {#add--edit-marker}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно натиснути іконку **прапорця** в меню (*Android*), **стрілки** (*iOS*) - відображає напрямок та відстань до вибраної точки від вашого поточного місцезнаходження.

Дії:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Ставить новий маркер на вибрану точку.
- **Позначити пройденим** (*Android*) / *Відхилити* (*iOS*). Деактивує маркер і переміщує його в Історію.
- **Зробити активним** (*Android*). Переміщує маркер на верхню позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до активного списку.

Докладніше про [маркери тут](../personal/markers.md).


### Поділитися {#share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

| Версії до Android 14 | 14+ Android |
|:------------|:---------------|
| ![Share action Android](@site/static/img/map/action_share_1_andr.png) | ![Share action Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Share action iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Додаток OsmAnd дозволяє **<Translate android="true" ids="shared_string_share"/>** *Моє місцезнаходження* або будь-яке вибране місце на карті за допомогою месенджера, електронної пошти або соціальних мереж.  

Доступні опції для обміну місцезнаходженням:

- ***Надіслати***. Надсилає текст через доступні на вашому пристрої додатки. Включає всю інформацію про місцезнаходження: назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію у вигляді посилання.
- ***Копіювати***. Копіює всю інформацію про місцезнаходження (назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію у вигляді посилання) в буфер обміну.  
- ***Копіювати адресу***. Копіює лише інформацію про адресу в буфер обміну.
- ***Копіювати назву POI***. Копіює лише назву POI або адресу, якщо назви немає, в буфер обміну.
- ***Копіювати координати***. Копіює лише інформацію про координати в буфер обміну.
- ***geo***. Відкриває список доступних додатків, що підтримують геолокацію. <!-- (інформація про [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-код*** (*Android*). Генерує посилання на вибране місце у вигляді QR-коду.

<!--
- ***Зберегти зображення*** (*iOS*) - зберігає скріншот з картою та вибраною точкою в галереї зображень.
- ***Призначити контакту*** (*iOS*) - створює іконку для вибраного контакту зі скріншота карти.
- ***Друк*** (*iOS*) - відкриває параметри принтера для друку скріншота карти.
- ***Зберегти у файли*** (*iOS*) - зберігає скріншот карти в iCloud Drive або сховищі вашого пристрою. -->


### Маршрути до / від {#directions-to--from}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Щоб розпочати навігацію або планування маршруту, спочатку потрібно вибрати пункт призначення за допомогою [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Якщо у вас вже є пункт призначення, меню запропонує вам замінити пункт призначення або вставити його як іншу проміжну або початкову точку.

Також можна спочатку вибрати *Від* пункту призначення через контекстне меню карти (<Translate android="true" ids="context_menu_item_directions_from"/>).

Докладніше про [навігацію тут](../navigation/setup/route-navigation.md).

:::note Натисніть Почати навігацію
Якщо ви натиснете **Почати навігацію** - точка *Від* буде відкинута, оскільки додаток переходить у режим навігації. Щоб зберегти маршрут, не натискайте *Почати навігацію* і [**проведіть вниз**](#hide-context-menu) меню *Підготовка маршруту*.
:::


### Пошук поблизу {#search-nearby}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

За допомогою цієї дії контекстного меню можна шукати навколо певного місця на карті.  

Докладніше про функціональність [пошуку](../search/index.md).


### Уникати дороги {#avoid-road}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map Android](@site/static/img/map/action_avoid_android.png) ![Dismiss avoided road Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map iOS](@site/static/img/map/avoid_route_ios_1.png) ![Dismiss avoided road iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Використовуючи контекстне меню карти, ви можете додати певну дорогу до списку доріг, які не використовуються для маршрутизації. Це вплине на [підготовку маршруту](../navigation/setup/route-navigation.md).  
Щоб видалити раніше вибрані дороги зі списку *[Уникати доріг](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, натисніть на знак, виберіть *Видалити* (**Android**) або *Відхилити* (**iOS**).

:::note
Функція "Уникати доріг" є глобальною і впливає на всі *[типи маршрутизації](../navigation/routing/osmand-routing.md#routing-types)* (крім *[Онлайн маршрутизації](../navigation/routing/online-routing.md)*).  
:::


### Змінити положення об'єкта {#change-object-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Change position Android](@site/static/img/map/action_change_position_android.png)

![Action Change position UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Change position iOS](@site/static/img/map/action_change_position_ios.png)

![Action Change position UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Майже кожен створений користувачем об'єкт є переміщуваним, наприклад, Маркер, Улюблене місце, Створений POI, Аудіо/Відео нотатка або Точка маршруту. Спочатку виберіть об'єкт на карті, а потім використовуйте *<Translate android="true" ids="change_markers_position"/>* меню, щоб перемістити його в нове місце.


### Планувати маршрут {#plan-a-route}

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

Ви можете розпочати планування маршруту з вибраної точки через контекстне меню об'єкта.

Докладніше про інструмент [Планувати маршрут](../plan-route/create-route.md).


### Оновити / Завантажити онлайн карти {#update--download-online-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Щоб оновити або завантажити онлайн карти (тайли) в певному місці, ви можете використовувати контекстне меню об'єкта:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* та для *Оновлення*, перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* та *<Translate ios="true" ids="update_tile"/>*.  

Будь ласка, прочитайте [повну інструкцію](../map/raster-maps.md#download--update-tiles).  


### Оновити / Завантажити векторні карти {#update--download-vector-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Download vector map Android](@site/static/img/map/action_download_vector_map_android.png)

![Select vector map worldwide on Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download vector map iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Select vector map on iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Якщо в вибраному місці немає офлайн-карти, наприклад, меню об'єкта карти було відкрито через Пошук або через певне Улюблене місце, тоді буде запропоновано [завантажити](../start-with/download-maps.md#select-on-the-map) найменшу можливу офлайн-карту.  

**iOS**. Якщо у вас вже [завантажені](../map/map-context-menu.md) карти OsmAnd (векторні або рельєфні), їх можна оновити через контекстне меню. Спочатку потрібно вибрати регіон на карті - натисніть будь-яке місце на світовому масштабі 3-7.  

> **ПРИМІТКА**. *Якщо ви відкрили контекстне меню для регіону карти (регіон виділено), ви зможете побачити ***<Translate android="true" ids="rendering_category_details"/>*** про нього: тип та розмір доступної карти, посилання на сторінку Вікіпедії, мову, населення та інше.*


### * Додати / Видалити точку паркування {#-add--delete-parking-point}

:::note
Щоб додати/видалити точки паркування, увімкніть [**плагін Позиція паркування**](../plugins/parking.md) OsmAnd.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Parking Android](@site/static/img/map/action_parking_android.png)

![Action Delete Parking Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Parking iOS](@site/static/img/map/action_parking_ios.png)

![Action Delete Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Будь-яке вибране місце на карті може бути позначене як [позиція паркування](../plugins/parking.md). Щоб видалити позицію паркування, ви можете відкрити контекстне меню, пов'язане з місцем паркування.


### * Додати / Редагувати точку маршруту {#-add--edit-track-waypoint}

:::note
Щоб додати/редагувати точки маршруту, увімкніть [**плагін Запис поїздки**](../plugins/trip-recording.md) OsmAnd.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Select Track to add Waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Select Track to add Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Ви можете додавати точки маршруту до записаного треку або до поточного запису треку за допомогою контекстного меню карти.  

- Виберіть місце на карті [довгим натисканням](../map/map-context-menu.md#select-any-point-long-tap).
- У *контекстному меню карти*, що відкриється, виберіть *Дії → Додати точку маршруту*.
- У списку відображаються [треки](../map/tracks/index.md#display-tracks-on-the-map), записані та показані на карті, а також [поточний запис треку](../plugins/trip-recording.md), до якого ви можете додати вибрану точку маршруту.
- Ви можете додавати точки маршруту до треку, який ще не активний для запису, в цьому випадку неактивний трек переходить зі стану *Старт* у стан *Продовжити*.
- [Заповніть](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) необхідні дані та збережіть точку маршруту.
- Ви можете налаштувати [Швидкі дії](../widgets/quick-action.md), додавши точку маршруту до *Додати точку маршруту*.


### * Створити / Змінити POI {#-create--modify-poi}

:::note
Щоб додати створити/змінити POI, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

За допомогою плагіна Редагування OSM ви можете створювати та змінювати більшість POI, присутніх на [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [створює новий POI](../plugins/osm-editing.md#create--modify-poi) у вибраному місці.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [змінює вибраний POI](../plugins/osm-editing.md#create--modify-poi).


### * Відкрити нотатку OSM {#-open-osm-note}

:::note
Щоб додати відкрити нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Add Note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Add Note iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Ви можете **повідомити** про помилки даних карти в певному місці [спільноті OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Будь ласка, дотримуйтесь [рекомендацій](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) та додайте відповідні коментарі до проблеми.


### * Коментувати / Закрити нотатку OSM {#-comment--close-osm-note}

:::note
Щоб коментувати/закрити нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

Ви можете [коментувати](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [вирішувати](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) та повторно відкривати
Нотатки OpenStreetMap через контекстне меню об'єкта.


### * Завантажити POI / нотатку OSM {#-upload-poi--osm-note}

:::note
Щоб завантажити POI / нотатку OSM, увімкніть [**плагін Редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

Якщо ви використовуєте *Офлайн-режим* для додавання / редагування POI або нотатки OSM, вам потрібно буде завантажити зміни в OpenStreetMap. За замовчуванням *Офлайн-режим* увімкнено, щоб уникнути випадкових змін публічної бази даних. Ви можете завантажити або видалити зміни через контекстне меню створеного об'єкта.


### * Записати AV нотатку {#-record-av-note}

<InfoAndroidOnly />

:::note
Щоб записати аудіо/відео нотатки, увімкніть [**плагін Аудіо/Відео нотатки**](../plugins/audio-video-notes.md) OsmAnd.
:::

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Записує або робить медіа-нотатку в вибраній точці на карті.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - робить [аудіо нотатку](../map/point-layers-on-map.md#-audio--video-points-android) в вибраній точці (створює нову точку на накладенні з іконкою аудіо).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - робить [відео нотатку](../map/point-layers-on-map.md#-audio--video-points-android) в вибраній точці (створює нову точку на накладенні з іконкою відео).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - робить [фото точку](../map/point-layers-on-map.md#-audio--video-points-android) на карті.


## Налаштувати {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Map context menu Customize](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_3.png)

Ви можете змінити порядок або приховати елементи з меню *Дії* в *контекстному меню карти*. Пропонується всього 16 дій.  

- Ви можете перемістити три найкорисніші дії вгору списку *Основні дії*.
- Решту меню можна налаштувати для кожного профілю окремо в розділах *Додаткові дії* та *Приховані*.  

Доступні типи дій:

- **<Translate android="true" ids="main_actions"/>**. Розділ має лише 4 кнопки, три з яких можна налаштувати, і Дії, яка залишається незмінною.  
- **<Translate android="true" ids="additional_actions"/>**. Ви можете отримати доступ до цих дій, натиснувши кнопку *Дії*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Переміщення дій до цього розділу не припиняє їх роботу. Вони просто не з'являються в меню Дії.  


## Пов'язані статті {#related-articles}

- [Векторні карти (Стилі карти)](./vector-maps.md)
- [Растрові карти (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на карті](./point-layers-on-map.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірної палітри](../personal/color-palette-schemes.md)

> *Останнє оновлення: Червень 2025*