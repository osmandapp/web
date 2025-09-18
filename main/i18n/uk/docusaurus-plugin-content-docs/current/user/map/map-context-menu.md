---
source-hash: 3e1b165cea4cde57aec3170e4074d5cdef9d0ee2790e533d93987ac6b523addc
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

Контекстне меню карти надає інформацію про вибраний об'єкт на карті. Ви також можете використовувати його для створення маршруту до вибраного місця. Щоб відкрити контекстне меню, спочатку знайдіть потрібне місце на карті, а потім виберіть об'єкт коротким або довгим дотиком, якщо потрібно вибрати будь-яку точну точку на карті.


### Вибір об'єкта (один дотик) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Контекстне меню Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Контекстне меню** з'являється, коли ви **один раз торкаєтеся** позначеного об'єкта на карті. Це контекстне меню відображає важливу інформацію про вибраний об'єкт, включаючи його *назву*, *іконку* (як вона представлена на карті), *адресу, відстань*, *межі* та *напрямок* від вашого поточного місцезнаходження.  

Ви можете вибирати різні типи об'єктів на карті, такі як *POI*, *Улюблені*, *зупинки транспорту*, *маркери*, *гірські вершини* або інші *об'єкти карти*.

:::note
- Вибрані об'єкти карти та їхні межі відповідають [**вузлам (nodes)**](https://wiki.openstreetmap.org/wiki/Node) або [**шляхам (ways)**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
- *Висота гірських вершин відображається в метрах або футах залежно від [одиниць довжини](../personal/profiles.md#units--formats), вибраних у налаштуваннях профілю.*
:::



### Вибір будь-якої точки (довгий дотик) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню довгий дотик Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню довгий дотик iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Коли ви робите **довгий дотик** будь-де на карті, з'являється **контекстне меню**, що надає інформацію про вибране місце. Це включає адресу, відстань та напрямок від вашого поточного місцезнаходження.


### Вибір GPX-треку {#select-gpx-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Контекстне меню треку Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Екран статистики треку iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Дотик до [GPX-треку](../map/tracks/index.md) на карті відкриває [контекстне меню треку](../map/tracks/track-context-menu.md), де ви можете отримати доступ до додаткових опцій, пов'язаних з треком.



### Маршрути, гірськолижні схили та стежки {#routes-and-trails}

![Гірськолижні схили та MTB-маршрути](@site/static/img/map/ski_mtb.png)  ![Гірськолижні схили та MTB-маршрути](@site/static/img/map/ski_mtb_2.png)

Ви можете торкатися елементів карти, таких як **гірськолижні схили**, **маршрути для гірських велосипедів (MTB)** та **траси для мотоциклів**, щоб відкрити їхнє контекстне меню з детальною інформацією. Перегляньте статтю [Маршрути](../map/routes.md#actions-with-routes) для отримання додаткової інформації.



### Сховати контекстне меню {#hide-context-menu}

Щоб закрити **контекстне меню**:

- Торкніться будь-якої *порожньої області* на карті, щоб уникнути повторного відкриття меню.
- Перетягніть меню *вниз* згори.


## Деталі {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Контекстне меню Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Для отримання більш детальної інформації про об'єкт, торкніться кнопки **Деталі** в контекстному меню або проведіть пальцем по панелі вгору, щоб розгорнути її.


### Інформація про об'єкт {#object-info}

Панель **Інформація про об'єкт** надає додаткові відомості про вибраний об'єкт. Ви можете торкнутися будь-якого запису, щоб скопіювати інформацію в буфер обміну.  

Доступні деталі включають:

- [Альтернативні назви](#alternative-names)
- [Координати](#coordinates)
- [В межах областей](#polygon-information)
- [Найближчі POI / Wikipedia](#nearby-pois--wikipedia)
- [Маршрути громадського транспорту для зупинок](#public-transport-routes)
- [Улюблені / Шляхові точки з тієї ж групи](#favorites--track-points-from-the-group)
- [Посилання на OpenStreetMap](#openstreetmap-link)
- [Онлайн-фотографії](#online-photos)

Крім того, панель може містити [деталі OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), такі як:

- [Вебсайт](https://wiki.openstreetmap.org/wiki/Key:website)
- [Номер телефону](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Години роботи](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Плата](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Доступність](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Ширина](https://wiki.openstreetmap.org/wiki/Key:width) / [Висота](https://wiki.openstreetmap.org/wiki/Key:height)


### Альтернативні назви {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Альтернативні назви Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Альтернативні назви Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Альтернативні назви iOS 1](@site/static/img/map/alternative_names_1_ios.png) ![Альтернативні назви iOS](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd відображає **додаткові назви POI** у *контекстному меню карти*, надаючи пріоритет назві *мовою відображення* або мовою з переліку бажаних мов системи. Якщо доступно кілька перекладів, вони групуються за категоріями, такими як *назва, бренд, оператор* або *найближчі POI*.  

Особливості відображення альтернативних назв:

- Додаткові переклади доступні через *спадний список*.

- Назви поділяються на різні групи, такі як *список назв іншими мовами*, *Регіональні*, *Місцеві*, *Національні*, *Міжнародні*, *Короткі*, *Старі*, *Офіційні* та *Альтернативні* назви.

- Інші категорії включають *переклад для конкретного регіону* або *налаштування за замовчуванням*.

- Якщо певний переклад *недоступний*, OsmAnd за замовчуванням використовує **місцеву** назву для забезпечення точності та узгодженості в багатомовних регіонах.


### В межах області {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Інформація про полігон Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Інформація про полігон iOS](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Функція **В межах області** перелічує **області**, в яких знаходиться об'єкт. Це включає географічні об'єкти, адміністративні межі, зони землекористування, природні об'єкти та інші категоризовані області. *Список навколишніх полігонів* відсортований *від найменшого до найбільшого* за розміром площі.

### Координати {#coordinates}

|Формат координат| |
|:------|:------|
| <ul><li>DDD.DDDDD (Прості десяткові градуси)</li><li>DDD.DDDDD (N/S, E/W через кому)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[Стандарт UTM](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Швейцарська сітка CH1903 та CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[Веб-посилання OsmAnd](https://osmand.net/map)</li><li>[Веб-посилання OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Координати](@site/static/img/map/map_context_menu_Coordinates.png) |

У контекстному меню ви можете знайти [географічні координати](../search/search-coordinates.md#coordinate-format) точки в різних форматах, а також посилання OsmAnd та [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link), якими можна поділитися (остання опція доступна лише при увімкненому [плагіні редагування OpenStreetMap](../plugins/osm-editing.md)). Якщо ви розгорнете розділ координат і зробите довгий дотик на будь-якому рядку зі списку, його значення будуть автоматично скопійовані в буфер обміну (**Android**) або опція *Копіювати* стане доступною у спливаючому повідомленні (**iOS**).  

Веб-посилання OsmAnd може бути автоматично розпізнане OsmAnd (приклад: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Посилання OsmAnd та [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker) відкриваються на відповідних сайтах з позначкою на місці інтересу.  


### Найближчі POI / Wikipedia {#nearby-pois--wikipedia}

![Найближчі статті Wikipedia](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Найближчі статті Wikipedia](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Ці розділи відображають найближчі [статті Wikipedia](../plugins/wikipedia.md) або [Об'єкти інтересу (POI)](../map/point-layers-on-map.md#points-of-interest-pois) з кнопками *<Translate android="true" ids="shared_string_show_on_map"/>* та *<Translate android="true" ids="search_more"/>* для відображення та [пошуку](../search/search-poi.md) всіх інших POI та статей Wikipedia.

Дотик до *Найближчі POI / статті Wikipedia* відкриває список точок (POI або Wikipedia). Дотик до однієї з цих точок зі списку переміщує карту до цієї точки (POI або Wikipedia) з відкриттям контекстного меню точки на карті.

> **ПРИМІТКА**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) з'явиться лише якщо ви попередньо завантажили спеціальні карти зі [статтями Wikipedia для цієї області](../plugins/wikipedia.md#download-wikipedia-packages)*.


### Маршрути громадського транспорту {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Маршрути громадського транспорту Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маршрути громадського транспорту iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Відображається інформація про маршрути громадського транспорту для обраної зупинки. Інформацію про контекстне меню громадського транспорту та дії з ним читайте у [статті](../map/public-transport.md#transport-routes-context-menu).


### Улюблені / Шляхові точки з групи {#favorites--track-points-from-the-group}

![Список улюблених](@site/static/img/map/favorite_list_android.png) ![Повний список улюблених](@site/static/img/map/favorite_list_full_android.png)

Це список усіх точок в одній групі для Улюбленого або Шляхової точки. При дотику розгортається весь список точок однієї групи, при дотику до точки зі списку карта переміщується до вибраної точки.




### Опис статті {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Список описів](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Список описів](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Ця частина містить частину опису зі [статті Wikipedia](../plugins/wikipedia.md), опису [Улюбленого](../personal/favorites.md) або Шляхової точки. Торкнувшись, ви можете відкрити повний опис.


### Посилання на OpenStreetMap {#openstreetmap-link}

![Посилання OSM](@site/static/img/map/context_menu_osm_link.png) ![Посилання OSM](@site/static/img/map/context_menu_osm_link_1.png)

Посилання на OpenStreetMap надає пряме посилання на об'єкт OpenStreetMap, де ви можете знайти повну інформацію про нього:  
[вузол (node)](https://wiki.openstreetmap.org/wiki/Node) або [шлях (way)](https://wiki.openstreetmap.org/wiki/Way).


### Онлайн-фотографії {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Контекстне меню онлайн-фотографій Android](@site/static/img/map/images_nearby_1_andr.png)
![Контекстне меню онлайн-фотографій Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню онлайн-фотографій iOS](@site/static/img/map/online_photo_ios.png)
![Контекстне меню онлайн-фотографій iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Коли ви торкаєтеся популярного місця на карті, розділ **Онлайн-фотографії** в *контекстному меню POI* відображає попередній перегляд зображень, отриманих з [Wikipedia](https://www.wikipedia.org/) та [Wikimedia Commons](https://www.wikimedia.org/).

Дотик до фотографії відкриває перегляд **Галереї**, де ви можете:

- Переглядати до 100 зображень для кожного місця
- Переглядати метадані зображення (*автор*, *ліцензія*, *джерело*)
- Виконувати дії: **Поділитися**, **Відкрити в браузері**, **Завантажити**

> *На iOS довгий дотик до зображення відкриває контекстне меню зі швидкими діями.*

Для отримання додаткової інформації див.: [Онлайн-фотографії](https://osmand.net/docs/user/map/popular_places#online-photos) та [Перегляд галереї](https://osmand.net/docs/user/map/popular_places#gallery)


### Зображення на рівні вулиць {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Зображення на рівні вулиць Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Зображення на рівні вулиць iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd підтримує інтеграцію з [Mapillary](https://www.mapillary.com/), глобальною платформою для краудсорсингових зображень на рівні вулиць. Ця функція дозволяє переглядати та досліджувати послідовності фотографій реального світу безпосередньо на карті.

Зображення Mapillary з'являються у вигляді іконок фотографій з напрямком, вирівняних з дорогою або стежкою, де вони були зроблені. Це може допомогти вам краще зрозуміти оточення, особливо в незнайомих місцях.

Ви можете:

- Використовувати кнопку **Дослідити**, щоб відкрити переглядач Mapillary та переглядати найближчі зображення на рівні вулиць.
- Торкнутися кнопки **Додати фотографії**, щоб додати власні фотографії на платформу Mapillary.

> *Дізнайтеся більше про те, як активувати та використовувати цю функцію, у [посібнику з плагіна Mapillary](../plugins/mapillary.md).*


### * Аудіо/відео нотатка {#-audiovideo-note}

<InfoAndroidOnly />

![Список зображень](@site/static/img/map/image_list_android.png) ![Список відео](@site/static/img/map/video_list_android.png)

Інформація про [Аудіо/відео нотатки](../plugins/audio-video-notes.md), така як дата, координати, попередній перегляд та інше, доступна в меню **Деталі**. Ви можете відкрити нотатки у сторонньому програмному забезпеченні, торкнувшись кнопки **Відтворити / Показати** в контекстному меню нотатки.


## Дії {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню дій Android](@site/static/img/map/actions_menu_android.png) ![Додаткове меню дій Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню дій iOS](@site/static/img/map/actions_menu_ios.png)  ![Додаткове меню дій iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Це набір специфічних маніпуляцій, які можна виконати з точкою або об'єктом. Це меню розділене на дві частини: видима секція складається максимум з 3 дій, а інші дії доступні за кнопкою *Дії*. Ви можете налаштувати (*Android*) порядок дій у [Загальних налаштуваннях](#customize).


### Додати / Редагувати Улюблене {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Додати/Редагувати улюблене Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Додати/Редагувати улюблене iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

У контекстному меню є опції **додати** або **редагувати** вибрану точку / об'єкт до [списку улюблених](../personal/myplaces.md).

- Щоб **Додати**, вам потрібно вибрати точку / об'єкт, торкнутися іконки *Зірочка* (з підписом Додати) та ввести всю необхідну інформацію.  

- Щоб **Редагувати** інформацію про улюблену точку, вам потрібно увімкнути *Показати на карті* (*Меню → Мої місця → Улюблені*), потім натиснути на неї, і в контекстному меню замість іконки *Зірочка* з'явиться іконка *Олівець* (з підписом Редагувати).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md) - додає вибрану точку до списку улюблених.


### Додати / Редагувати маркер {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Додати/Редагувати маркер Android](@site/static/img/map/add_marker_android.png) ![Дія Пропустити маркер Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Додати/Редагувати маркер iOS](@site/static/img/map/add_marker_ios.png)  ![Дія Відновити маркер Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно торкнутися іконки **прапорця** в меню (*Android*), **стрілки** (*iOS*) - відображає напрямок і відстань до вибраної точки від вашого поточного місцезнаходження.

Дії:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Встановлює новий маркер на вибрану точку.
- **Позначити як пройдений** (*Android*) / *Відхилити* (*iOS*). Деактивує маркер і переміщує його в Історію.
- **Зробити активним** (*Android*). Переміщує маркер на верхню позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до активного списку.

Детальніше про [маркери читайте тут](../personal/markers.md).


### Поділитися {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Версії до Android 14 | 14+ Android |
|:------------|:---------------|
| ![Дія Поділитися Android](@site/static/img/map/action_share_1_andr.png) | ![Дія Поділитися Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Поділитися iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Додаток OsmAnd дозволяє **<Translate android="true" ids="shared_string_share"/>** *Моє місцезнаходження* або будь-яке вибране місце на карті через месенджери, електронну пошту або соціальні мережі.  

Доступні опції для поширення місцезнаходження:

- ***Надіслати***. Надсилає текст через додатки, доступні на вашому пристрої. Включає всю інформацію про місцезнаходження: назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію у вигляді посилання.
- ***Копіювати***. Копіює всю інформацію про місцезнаходження (назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію у вигляді посилання) в буфер обміну.  
- ***Копіювати адресу***. Копіює лише інформацію про адресу в буфер обміну.
- ***Копіювати назву POI***. Копіює лише назву POI або адресу, якщо назви немає, в буфер обміну.
- ***Копіювати координати***. Копіює лише інформацію про координати в буфер обміну.
- ***geo***. Відкриває список доступних додатків, які підтримують геолокації. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-код*** (*Android*). Генерує посилання на вибране місцезнаходження у вигляді QR-коду.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Маршрут до / з {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Маршрути Android](@site/static/img/map/action_directions_android.png)

![Кілька маршрутів Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Маршрути iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Щоб розпочати навігацію або планування маршруту, вам потрібно спочатку вибрати пункт призначення за допомогою [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Якщо у вас вже є пункт призначення, меню запропонує вам замінити пункт призначення або вставити його як іншу проміжну або початкову точку.

Також можна спочатку вибрати пункт призначення *З* через контекстне меню карти (<Translate android="true" ids="context_menu_item_directions_from"/>).

Детальніше про [навігацію читайте тут](../navigation/setup/route-navigation.md).

:::note Дотик до "Почати навігацію"
Якщо ви торкнетеся **Почати навігацію** - точка *З* буде відкинута, оскільки додаток перейде в режим навігації. Щоб зберегти маршрут, не торкайтеся *Почати навігацію* і [**проведіть вниз**](#hide-context-menu) меню *Підготовка маршруту*.
:::


### Пошук поруч {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Пошук Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Пошук iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

За допомогою цієї дії контекстного меню можна шукати навколо певного місця на карті.  

Детальніше про функціональність [пошуку](../search/index.md).


### Уникати дороги {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Уникати дороги на карті Android](@site/static/img/map/action_avoid_android.png) ![Скасувати уникнення дороги Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Уникати дороги на карті iOS](@site/static/img/map/avoid_route_ios_1.png) ![Скасувати уникнення дороги iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Використовуючи контекстне меню карти, ви можете додати певну дорогу до списку доріг, які не використовуються для маршрутизації. Це вплине на [підготовку маршруту](../navigation/setup/route-navigation.md).  
Щоб видалити раніше вибрані дороги зі *[списку доріг, яких слід уникати](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, торкніться знака, виберіть *Видалити* (**Android**) або *Відхилити* (**iOS**).

:::note
Функція уникнення доріг є глобальною і впливає на всі *[типи маршрутизації](../navigation/routing/osmand-routing.md#routing-types)* (крім *[Онлайн-маршрутизації](../navigation/routing/online-routing.md)*).  
:::


### Змінити положення об'єкта {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Змінити положення Android](@site/static/img/map/action_change_position_android.png)

![Інтерфейс зміни положення Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Змінити положення iOS](@site/static/img/map/action_change_position_ios.png)

![Інтерфейс зміни положення iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Майже кожен створений користувачем об'єкт можна переміщувати, тобто Маркер, Улюблене, Створений POI, Аудіо/Відео нотатка або Шляхова точка треку. Спочатку виберіть об'єкт на карті, а потім скористайтеся меню *<Translate android="true" ids="change_markers_position"/>*, щоб перемістити його в нове місце.


### Планувати маршрут {#plan-a-route}

![Дія Планувати маршрут Android](@site/static/img/map/action_plan_route_android.png)

Ви можете розпочати планування маршруту з вибраної точки через контекстне меню об'єкта.

Детальніше про інструмент [Планувати маршрут](../plan-route/create-route.md).


### Оновити / Завантажити онлайн-карти {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Завантажити онлайн-карту Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Завантажити онлайн-карту iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Щоб оновити або завантажити онлайн-карти (тайли) в певному місці, ви можете використовувати контекстне меню об'єкта:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* і для *Оновлення*, перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* та *<Translate ios="true" ids="update_tile"/>*.  

Будь ласка, прочитайте [повну інструкцію](../map/raster-maps.md#download--update-tiles).  


### Оновити / Завантажити векторні карти {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Завантажити векторну карту Android](@site/static/img/map/action_download_vector_map_android.png)

![Вибір векторної карти світу на Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Завантажити векторну карту iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Вибір векторної карти на iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Якщо в обраному місці немає офлайн-карти, наприклад, меню об'єкта карти було відкрито через Пошук або через певне Улюблене, то буде запропоновано [завантажити](../start-with/download-maps.md#select-on-the-map) найменшу можливу офлайн-карту.  

**iOS**. Якщо у вас вже є [завантажені](../map/map-context-menu.md) карти OsmAnd (векторні або рельєфні), їх можна оновити через контекстне меню. Вам потрібно буде спочатку вибрати регіон на карті - торкніться будь-якого місця на світовому масштабі 3-7.  

> **ПРИМІТКА**. *Якщо ви відкрили контекстне меню для регіону карти (регіон виділено), ви зможете побачити ***<Translate android="true" ids="rendering_category_details"/>*** про нього: тип і розмір доступної карти, посилання на сторінку Wikipedia, мову, населення та інше.*


### * Додати / Видалити місце паркування {#-add--delete-parking-point}

:::note
Щоб додати/видалити місця паркування, увімкніть [**плагін "Місце паркування"**](../plugins/parking.md).
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Паркування Android](@site/static/img/map/action_parking_android.png)

![Дія Видалити паркування Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Паркування iOS](@site/static/img/map/action_parking_ios.png)

![Дія Видалити паркування iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Будь-яке вибране місце на карті може бути позначене як [місце паркування](../plugins/parking.md). Щоб видалити місце паркування, ви можете відкрити контекстне меню, пов'язане з місцем паркування.


### * Додати / Редагувати шляхову точку треку {#-add--edit-track-waypoint}

:::note
Щоб додати/редагувати точки треку, увімкніть [**плагін "Запис поїздки"**](../plugins/trip-recording.md).
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Шляхова точка Android](@site/static/img/map/action_waypoint_android.png)

![Вибір треку для додавання шляхової точки Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Шляхова точка iOS](@site/static/img/map/action_waypoint_ios.png)

![Вибір треку для додавання шляхової точки iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Ви можете додавати шляхові точки до записаного треку або до поточного запису треку за допомогою контекстного меню карти.  

- Виберіть місце на карті [довгим дотиком](../map/map-context-menu.md#select-any-point-long-tap).
- У *контекстному меню карти*, що відкриється, виберіть *Дії → Додати шляхову точку треку*.
- У списку відображаються [треки](../map/tracks/index.md#display-tracks-on-the-map), записані та показані на карті, а також [поточний запис треку](../plugins/trip-recording.md), до якого ви можете додати вибрану шляхову точку.
- Ви можете додавати шляхові точки до треку, який ще не активний для запису, у цьому випадку неактивний трек переходить зі стану *Старт* у стан *Продовжити*.
- [Заповніть](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) необхідні дані та збережіть шляхову точку.
- Ви можете налаштувати [Швидкі дії](../widgets/quick-action.md), додавши шляхову точку до *Додати шляхову точку треку*.


### * Створити / Змінити POI {#-create--modify-poi}

:::note
Щоб створювати/змінювати POI, увімкніть [**плагін "Редагування OSM"**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

З плагіном редагування OSM ви можете створювати та змінювати більшість POI, присутніх на [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [створює новий POI](../plugins/osm-editing.md#create--modify-poi) у вибраному місці.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [змінює вибраний POI](../plugins/osm-editing.md#create--modify-poi).


### * Відкрити примітку OSM {#-open-osm-note}

:::note
Щоб відкрити примітку OSM, увімкніть [**плагін "Редагування OSM"**](../plugins/osm-editing.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Дія Примітка Android](@site/static/img/map/action_note_android.png)

![Дія Додати примітку Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Дія Примітка iOS](@site/static/img/map/action_note_ios.png)

![Дія Додати примітку iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Ви можете **повідомляти** про помилки в даних карти в певному місці [спільноті OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Будь ласка, дотримуйтесь [рекомендацій](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) та додавайте відповідні коментарі до проблеми.


### * Коментувати / Закрити примітку OSM {#-comment--close-osm-note}

:::note
Щоб коментувати/закривати примітки OSM, увімкніть [**плагін "Редагування OSM"**](../plugins/osm-editing.md).
:::

![Коментувати примітку OSM Android](@site/static/img/map/action_comment_note_android.png) ![Повторно відкрити примітку OSM Android](@site/static/img/map/action_reopen_note_android.png)

Ви можете [коментувати](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [вирішувати](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) та повторно відкривати
примітки OpenStreetMap через контекстне меню об'єкта.


### * Завантажити POI / Примітку OSM {#-upload-poi--osm-note}

:::note
Щоб завантажити POI / примітку OSM, увімкніть [**плагін "Редагування OSM"**](../plugins/osm-editing.md).
:::

![Завантажити POI Android](@site/static/img/map/action_poi_upload_android.png) ![Завантажити примітку OSM Android](@site/static/img/map/action_note_upload_android.png)

Якщо ви використовуєте *Офлайн-режим* для додавання / редагування POI або примітки OSM, вам потрібно буде завантажити зміни до OpenStreetMap. За замовчуванням *Офлайн-режим* увімкнено, щоб уникнути випадкових змін у публічній базі даних. Ви можете завантажити або видалити зміни через контекстне меню створеного об'єкта.


### * Записати аудіо/відео нотатку {#-record-av-note}

<InfoAndroidOnly />

:::note
Щоб записувати аудіо/відео нотатки, увімкніть [**плагін "Аудіо/відео нотатки"**](../plugins/audio-video-notes.md).
:::

![Дія Аудіо-Відео Android](@site/static/img/map/action_av_note_android.png)

Записує або робить медіа-нотатку у вибраній точці на карті.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - робить [аудіонотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на шарі з іконкою аудіо).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - робить [відеонотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на шарі з іконкою відео).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - робить [фототочку](../map/point-layers-on-map.md#-audio--video-points-android) на карті.


## Налаштувати {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Налаштування контекстного меню карти](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Налаштування контекстного меню карти](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Налаштування контекстного меню карти](@site/static/img/map/map_context_menu_customize_3.png)

Ви можете змінити порядок або приховати елементи з меню *Дії* в *контекстному меню карти*. Загалом пропонується 16 дій.  

- Ви можете перемістити три найкорисніші дії на початок списку *Основні дії*.
- Решту меню можна налаштувати для кожного профілю окремо в розділах *Додаткові дії* та *Приховані*.  

Доступні типи дій:

- **<Translate android="true" ids="main_actions"/>**. Розділ має лише 4 кнопки, три з яких можна налаштувати, а кнопка "Дії" залишається незмінною.  
- **<Translate android="true" ids="additional_actions"/>**. Ви можете отримати доступ до цих дій, торкнувшись кнопки *Дії*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Переміщення дій до цього розділу не зупиняє їх роботу. Вони просто не з'являються в меню "Дії".  


## Пов'язані статті {#related-articles}

- [Векторні карти (Стилі карти)](./vector-maps.md)
- [Растрові карти (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на карті](./point-layers-on-map.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)