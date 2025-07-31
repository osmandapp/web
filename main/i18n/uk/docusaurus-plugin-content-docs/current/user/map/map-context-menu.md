---
source-hash: c406b4c0fcaa397722ffd39164023525d4248abb42fb6a6add45bac6f360f5b8
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

Контекстне меню мапи надає інформацію про вибраний об'єкт на мапі. Ви також можете використовувати його для створення маршруту до вибраного місця. Щоб відкрити контекстне меню, спочатку знайдіть потрібне місце на мапі, потім виберіть об'єкт коротким дотиком або довгим дотиком при виборі будь-якої точної точки на мапі.


### Виберіть об'єкт (один дотик) {#select-an-object-single-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs>

**Контекстне меню** з'являється, коли ви **один раз торкаєтеся** позначеного об'єкта на мапі. Це контекстне меню відображає важливу інформацію про вибраний об'єкт, включаючи його *назву, піктограму* (як вона представлена на мапі), *адресу, відстань* та *напрямок* від вашого поточного положення.  

Ви можете вибирати різні типи об'єктів мапи, такі як *POI*, *вибрані*, *зупинки транспорту*, *маркери*, *гірські вершини* або інші *об'єкти мапи*.

:::note
Вибрані об'єкти мапи відповідають [**вузлам**](https://wiki.openstreetmap.org/wiki/Node) або [**шляхам**](https://wiki.openstreetmap.org/wiki/Way) OpenStreetMap.
:::

> *Висота гірських вершин відображається в метрах або футах залежно від [одиниць довжини](../personal/profiles.md#units--formats), вибраних у налаштуваннях профілю.*


### Виберіть будь-яку точку (довгий дотик) {#select-any-point-long-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs>

Коли ви **довго торкаєтеся** будь-де на мапі, з'являється **контекстне меню**, що надає інформацію про вибране місце. Це включає адресу, відстань та напрямок від вашого поточного положення.

> **ПРИМІТКА**. *Довгий дотик до **номера будинку** виділяє його контур та відкриває контекстне меню мапи.*


### Виберіть маршрут {#select-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

Дотик до [GPX-треку](../map/tracks/index.md) на мапі відкриває [контекстне меню треку](../map/tracks/track-context-menu.md), де ви можете отримати доступ до додаткових опцій, пов'язаних з треком.


### Приховати контекстне меню {#hide-context-menu}

Щоб закрити **контекстне меню**:

- Торкніться будь-якої *порожньої області* на мапі, щоб уникнути повторного відкриття меню.
- Перетягніть меню *вниз* згори.


## Деталі {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>

Для отримання більш детальної інформації про об'єкт торкніться кнопки **Деталі** в контекстному меню або проведіть панель вгору, щоб розгорнути її.


### Інформація про об'єкт {#object-info}

Панель **Інформація про об'єкт** надає додаткові відомості про вибраний об'єкт. Ви можете торкнутися будь-якого запису, щоб скопіювати інформацію до буфера обміну.  

Доступні деталі включають:

- [Альтернативні назви](#alternative-names)
- [Координати](../map/map-context-menu.md#coordinates)
- [Найближчі POI / Вікіпедія](../map/map-context-menu.md#nearby-pois--wikipedia-nearby-pois--wikipedia)
- [Маршрути громадського транспорту](../map/map-context-menu.md#public-transport-routes) (для зупинок транспорту)
- [Вибрані / Точки треку з тієї ж групи](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [Посилання на OpenStreetMap](../map/map-context-menu.md#openstreetmap-link)
- [Зображення / опис статті](../map/map-context-menu.md#article-description-article-description)
- [Онлайн-фотографії](../map/map-context-menu.md#online-photos)

Крім того, панель може містити [Деталі OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_features), такі як:

- [Вебсайт](https://wiki.openstreetmap.org/wiki/Key:website)
- [Номер телефону](https://wiki.openstreetmap.org/wiki/Key:contact)
- [Години роботи](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
- [Плата](https://wiki.openstreetmap.org/wiki/Key:fee)
- [Доступність](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
- [Ширина](https://wiki.openstreetmap.org/wiki/Key:width) / [Висота](https://wiki.openstreetmap.org/wiki/Key:height)


### Альтернативні назви {#alternative-names}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Alternative names Android 1](@site/static/img/map/alternative_names_andr_1.png) ![Alternative names Android](@site/static/img/map/alternative_names_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Alternative names Android 1](@site/static/img/map/alternative_names_1_ios.png) ![Alternative names Android](@site/static/img/map/alternative_names_2_ios.png)

</TabItem>

</Tabs>

OsmAnd відображає **додаткові назви POI** у *контекстному меню мапи*, надаючи пріоритет назві мовою відображення або мові, що є в списку системних мов. Якщо доступно кілька перекладів, вони групуються в категорії, такі як *назва, бренд, оператор* або *найближчі POI*.  

Особливості відображення альтернативних назв:

- Додаткові переклади доступні через *випадаючий список*.

- Назви категоризовані за різними групами, такими як *список назв іншими мовами*, *Регіональні*, *Місцеві*, *Національні*, *Міжнародні*, *Короткі*, *Старі*, *Офіційні* та *Альтернативні* назви.

- Інші категорії включають *регіональний переклад* або *налаштування за замовчуванням*.

- Якщо конкретний переклад *недоступний*, OsmAnd за замовчуванням використовує **місцеву** назву для забезпечення точності та послідовності в багатомовних регіонах.


### Інформація про полігон {#polygon-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Polygon Information Android](@site/static/img/map/polygon_information_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Polygon Information Android](@site/static/img/map/polygon_information_ios.png)

</TabItem>

</Tabs>

Функція **Інформація про полігон** надає детальні дані про найближчі **полігони**, відображені на мапі. Це включає географічні об'єкти, адміністративні межі та інші позначені на мапі області.  

**Розділ "В межах"**:

- Відображає *список навколишніх полігонів*, відсортованих *від найменшого до найбільшого* за площею.

- Кожен запис показує *тип полігону та назву*, що дозволяє легко ідентифікувати регіони та межі.

**Додаткові деталі**:

- При виборі точки на мапі або POI, панель **інформації про полігон** відображає список усіх полігонів, що містять вибране місце.

- Записи у списку включають **адміністративні одиниці, зони землекористування, природні об'єкти та інші категоризовані регіони**.

- Панель дозволяє користувачам **копіювати назву та деталі полігону** для довідки.

- Щоб переглянути цю інформацію, перейдіть до *Контекстне меню мапи → Деталі → В межах*.

Ця функція допомагає вам зрозуміти ваше *поточне місцезнаходження* відносно позначених на мапі адміністративних одиниць, природних зон або інших важливих географічних об'єктів.


### Координати {#coordinates}

|Формат координат| |
|:------|:------|
| <ul><li>DDD.DDDDD (Десяткові градуси)</li><li>DDD.DDDDD (Пн/Пд, Сх/Зх кома)</li><li>DDD MM.MMM</li><li> DDD MM SS.S</li><li>[UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)</li><li>[Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)</li><li>[MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)</li><li>[Swiss Grid CH1903 and CH1903+](https://en.wikipedia.org/wiki/Swiss_coordinate_system)</li><li>[OsmAnd Web Link](https://osmand.net/map)</li><li>[OpenStreetMap Web Link](../map/map-context-menu.md#openstreetmap-link)</li></ul> | ![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png) |

У контекстному меню ви можете знайти [географічні координати](../search/search-coordinates.md#coordinate-format) точки в різних форматах, а також посилання на OsmAnd та [OpenStreetMap](../map/map-context-menu.md#openstreetmap-link), якими можна поділитися (остання опція доступна лише тоді, коли увімкнено [плагін редагування OpenStreetMap](../plugins/osm-editing.md)). Якщо ви розгорнете розділ координат і довго торкнетеся будь-якого рядка зі списку, його значення будуть автоматично скопійовані до буфера обміну (**Android**) або з'явиться опція *Копіювати* у спливаючому повідомленні (**iOS**).  

Веб-посилання OsmAnd може бути автоматично розпізнане OsmAnd (приклад: `https://osmand.net/map?pin=52.51628,13.37771#15/52.51628/13.37771`). Обидва посилання, OsmAnd та [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker), відкриваються на відповідних сайтах з позначкою місця інтересу.  


### Найближчі POI / Вікіпедія {#nearby-pois--wikipedia}

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

Ці розділи відображають найближчі [статті Вікіпедії](../plugins/wikipedia.md) або [точки інтересу (POI)](../map/point-layers-on-map.md#points-of-interest-pois) з *<Translate android="true" ids="shared_string_show_on_map"/>* та *<Translate android="true" ids="search_more"/>* для відображення та [пошуку](../search/search-poi.md) всіх інших POI та статей Вікіпедії.

Торкніться *Найближчі POI / статті Вікіпедії*, щоб відкрити список точок (POI або Вікіпедія). Дотик до однієї з цих точок зі списку переміщує мапу до цієї точки (POI або Вікіпедія) з відкриттям контекстного меню мапи точки.

> **ПРИМІТКА**. *[<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) з'явиться лише, якщо ви попередньо завантажили спеціальні мапи зі [статтями Вікіпедії для цієї області](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages)*.


### Маршрути громадського транспорту {#public-transport-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs>

Відображена інформація про маршрути громадського транспорту для обраної зупинки. Інформацію про контекстне меню громадського транспорту та дії з ним читайте в [статті](../map/public-transport.md#transport-routes-context-menu).


### Вибрані / Точки треку з групи {#favorites--track-points-from-the-group}

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png)

Це список усіх точок в одній групі для Обраного або Точки маршруту. При натисканні розгортається весь список точок однієї групи, при натисканні на точку зі списку мапа переміщується до вибраної точки.


### Лінійний об'єкт {#linear-object}

![Favorite list](@site/static/img/map/linear_object_andr.png)

Для **лінійних об'єктів**, таких як *бар'єри, сходи, ворота, лавки, спуски, греблі, стовпчики або проїзди*, контекстне меню відображає додаткові деталі. Це включає тип POI та пов'язану з ним адресу, або тип об'єкта, якщо назва не призначена.


### Деталі зони скелелазіння та скелі {#climbing-area-and-crag-details}

![Favorite list](@site/static/img/map/climbing_andr.png)

При виборі [зони скелелазіння або скелі](../map/routes.md#climbing-routes), OsmAnd надає детальний опис місця для скелелазіння, включаючи: назву та місцезнаходження, рейтинг складності скелелазіння (UIAA, французька, YDS тощо), тип породи, висоту та довжину маршруту, якість скелелазіння та стан поверхні.


### Лижні траси, маршрути для гірських велосипедів та траси для кросових мотоциклів {#ski-slopes-mtb-routes-and-dirt-bike-trails}

![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb.png)  ![Ski Slopes and MTB Trails](@site/static/img/map/ski_mtb_2.png)

Ви можете торкнутися елементів мапи, таких як **лижні траси**, **маршрути для гірських велосипедів (MTB)** та **траси для кросових мотоциклів**, щоб відкрити їх контекстне меню з детальною інформацією. Доступна інформація включає: назву маршруту або траси (якщо доступно в даних OSM), ідентифікатор об'єкта OSM або ідентифікатор зв'язку, рівень складності, довжину траси, тип місцевості тощо.

**Підтримувані теги:** `piste:type=*` (лижні траси), `route=mtb`, `route=atv` або `route=dirt_bike` (позашляхові траси для мотоциклів)

:::note
Використовуйте стилі мапи [Зима та лижі](../map/vector-maps.md#winter-and-ski) або [Позашляхові](../map/vector-maps.md#offroad) для кращої видимості.
:::


### Опис статті {#article-description}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Description list](@site/static/img/map/description_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs>

Ця частина містить частину опису зі [статті Вікіпедії](../plugins/wikipedia.md), опису [Вибраного](../personal/favorites.md) або Точки маршруту, натиснувши на яку можна відкрити повний опис.


### Посилання на OpenStreetMap {#openstreetmap-link}

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

Посилання на OpenStreetMap надає пряме посилання на об'єкт OpenStreetMap, де ви можете знайти повну інформацію про нього:  
[вузол](https://wiki.openstreetmap.org/wiki/Node) або [шлях](https://wiki.openstreetmap.org/wiki/Way).


### Онлайн-фотографії {#online-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Online Photos context menu Android](@site/static/img/map/images_nearby_1_andr.png)
![Online Photos context menu Android](@site/static/img/map/gallery_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Online Photos context menu iOS](@site/static/img/map/online_photo_ios.png)
![Online Photos context menu iOS](@site/static/img/map/gallery_menu_2_ios.png)

</TabItem>

</Tabs>

Коли ви торкаєтеся Популярного місця на мапі, розділ **Онлайн-фотографії** в *контекстному меню POI* відображає попередній перегляд зображень, отриманих з [Wikipedia](https://www.wikipedia.org/) та [Wikimedia Commons](https://www.wikimedia.org/).

Торкніться фотографії, щоб відкрити режим **Галереї**, де ви можете:

- Переглядати до 100 зображень на місце
- Переглядати метадані зображення (*автор*, *ліцензія*, *джерело*)
- Виконувати дії: **Поділитися**, **Відкрити в браузері**, **Завантажити**

> *На iOS, довгий дотик до зображення відкриває контекстне меню зі швидкими діями.*

Детальніше див.: [Онлайн-фотографії](https://osmand.net/docs/user/map/popular_places#online-photos) та [Перегляд галереї](https://osmand.net/docs/user/map/popular_places#gallery)


### Зображення на рівні вулиці {#street-level-imagery}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Street-Level Imagery Android](@site/static/img/map/street_level_imagery_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Street-Level Imagery iOS](@site/static/img/map/street_level_imagery_ios.png)

</TabItem>

</Tabs>

OsmAnd підтримує інтеграцію з [Mapillary](https://www.mapillary.com/), глобальною платформою для зображень рівня вулиці, отриманих за допомогою краудсорсингу. Ця функція дозволяє переглядати та досліджувати послідовності фотографій реального світу безпосередньо на мапі.

Зображення Mapillary відображаються як піктограми фотографій з напрямком, вирівняні з дорогою або шляхом, де вони були зроблені. Це може допомогти вам краще зрозуміти своє оточення, особливо в незнайомих місцях.

Ви можете:

- Використовуйте кнопку **Дослідити**, щоб відкрити переглядач Mapillary та переглянути найближчі зображення рівня вулиці.
- Торкніться кнопки **Додати фотографії**, щоб додати власні фотографії на платформу Mapillary.

> *Дізнайтеся більше про те, як активувати та використовувати цю функцію в [посібнику з плагіна Mapillary](../plugins/mapillary.md).*


### * Аудіо/Відео нотатка {#-audiovideo-note}

<InfoAndroidOnly />

![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)

Інформація про [аудіо/відео нотатки](../plugins/audio-video-notes.md), така як дата, координати, попередній перегляд та інше, доступна в меню **Деталі**. Ви можете відкрити нотатки у вторинному програмному забезпеченні, торкнувшись кнопки **Відтворити / Показати** в контекстному меню нотатки.


## Дії {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs>

Це набір специфічних маніпуляцій, які можна виконати над точкою або об'єктом. Це меню розділене на дві частини: видима секція складається максимум з 3 дій, а інші дії доступні за допомогою кнопки *Дії*. Ви можете налаштувати (*Android*) порядок дій у [Загальних налаштуваннях](#customize).


### Додати / Редагувати Вибране {#add--edit-favorite}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs>

У контекстному меню є опції **додати** або **редагувати** вибрану точку / об'єкт до [списку вибраних](../personal/myplaces.md).

- Щоб **додати**, вам потрібно вибрати точку / об'єкт, торкнутися піктограми *зірочки* (з підписом Додати) та ввести всю необхідну інформацію.  

- Щоб **редагувати** інформацію про вибрану точку, вам потрібно увімкнути *Показати на мапі* (*Меню → Мої місця → Вибране*), потім натиснути на неї, і в контекстному меню замість піктограми *зірочки* з'явиться піктограма *олівця* (з підписом Редагувати).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - додає вибрану точку до списку вибраних.


### Додати / Редагувати Маркер {#add--edit-marker}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно торкнутися піктограми **прапорця** в меню (*Android*), **стрілки** (*iOS*) - відображає напрямок та відстань до вибраної точки від вашого поточного місцезнаходження.

Дії:

- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md). Встановлює новий маркер на вибраній точці.
- **Позначити пройденим** (*Android*) / *Відхилити* (*iOS*). Деактивує маркер та переміщує його до Історії.
- **Зробити активним** (*Android*). Переміщує маркер на верхню позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до активного списку.

Детальніше про [маркери тут](../personal/markers.md).


### Поділитися {#share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

| Версії до Android 14 | 14+ Android |
|:------------|:---------------|
| ![Share action Android](@site/static/img/map/action_share_1_andr.png) | ![Share action Android](@site/static/img/map/action_share_2_andr.png) |

</TabItem>

<TabItem value="ios" label="iOS">  

![Share action iOS](@site/static/img/map/action_share_1_ios.png)

</TabItem>

</Tabs>

Додаток OsmAnd дозволяє **<Translate android="true" ids="shared_string_share"/>** *Моє місцезнаходження* або будь-яке вибране місце на мапі за допомогою месенджерів, електронної пошти або соціальних мереж.  

Доступні опції для обміну місцезнаходженням:

- ***Надіслати***. Надсилає текст через доступні на вашому пристрої програми. Включає всю інформацію про місцезнаходження: назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію як посилання.
- ***Копіювати***. Копіює всю інформацію про місцезнаходження (назву Мого місцезнаходження або назву вибраного POI, адресу, координати та геолокацію як посилання) до буфера обміну.  
- ***Копіювати адресу***. Копіює лише інформацію про адресу до буфера обміну.
- ***Копіювати назву POI***. Копіює лише назву POI або адресу, якщо назви немає, до буфера обміну.
- ***Копіювати координати***. Копіює лише інформацію про координати до буфера обміну.
- ***geo***. Відкриває список доступних програм, які підтримують геолокацію. <!-- (info about [geo urls Android](https://developers.google.com/maps/documentation/urls/android-intents)). -->
- ***QR-код*** (*Android*). Генерує посилання на вибране місце у вигляді QR-коду.

<!--
- ***Save Image*** (*iOS*) - saves a screenshot with map and selected point in the image gallery.
- ***Assign to Contact*** (*iOS*) - makes an icon for chosen contact from the map screenshot.
- ***Print*** (*iOS*) - opens Printer Options for printing the map screenshot.
- ***Save to files*** (*iOS*) - saves the map screenshot in iCloud Drive or storage of your device. -->


### Напрямки до / від {#directions-to--from}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs>

Щоб розпочати навігацію або планування маршруту, спочатку потрібно вибрати пункт призначення за допомогою [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). Якщо у вас вже є пункт призначення, меню запропонує вам замінити пункт призначення або вставити його як іншу проміжну або початкову точку.

Також можна спочатку вибрати *Від* пункту призначення через контекстне меню мапи (<Translate android="true" ids="context_menu_item_directions_from"/>).

Докладніше про [навігацію тут](../navigation/setup/route-navigation.md).

:::note Торкніться Почати навігацію
Якщо ви торкнетеся **Почати навігацію** - точка *Від* буде відхилена, оскільки програма перейде в режим навігації. Щоб зберегти маршрут, не торкайтеся *Почати навігацію* та [**проведіть вниз**](#hide-context-menu) меню *Підготовка маршруту*.
:::


### Пошук поблизу {#search-nearby}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs>

За допомогою цієї дії контекстного меню можна шукати об'єкти навколо певного місця на мапі.  

Докладніше про функціонал [пошуку](../search/index.md).


### Уникати дороги {#avoid-road}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Avoid road on the map Android](@site/static/img/map/action_avoid_android.png) ![Dismiss avoided road Android](@site/static/img/map/action_avoid_delete_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map iOS](@site/static/img/map/avoid_route_ios_1.png) ![Dismiss avoided road iOS](@site/static/img/map/dismiss_avoid_ios_1.png)

</TabItem>

</Tabs>

Використовуючи контекстне меню мапи, ви можете додати певну дорогу до списку доріг, які не використовуються для маршрутизації. Це вплине на [підготовку маршруту](../navigation/setup/route-navigation.md).  
Щоб видалити раніше вибрані дороги зі списку *[Уникати доріг](../navigation/routing/osmand-routing.md#avoid-roads-menu)*, торкніться знака, виберіть *Видалити* (**Android**) або *Відхилити* (**iOS**).

:::note
Функція "Уникати доріг" є глобальною та впливає на всі *[типи маршрутизації](../navigation/routing/osmand-routing.md#routing-types)* (крім *[Онлайн-маршрутизації](../navigation/routing/online-routing.md)*).  
:::


### Змінити положення об'єкта {#change-object-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Change position Android](@site/static/img/map/action_change_position_android.png)

![Action Change position UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Change position iOS](@site/static/img/map/action_change_position_ios.png)

![Action Change position UI iOS](@site/static/img/map/action_change_position_ui_iOS.png)

</TabItem>

</Tabs>  

Майже кожен створений користувачем об'єкт можна переміщувати, наприклад, Маркер, Вибране, Створений POI, Аудіо/Відео нотатка або Точка маршруту. Спочатку виберіть об'єкт на мапі, а потім скористайтеся меню *<Translate android="true" ids="change_markers_position"/>*, щоб перемістити його в нове місце.


### Спланувати маршрут {#plan-a-route}

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

Ви можете розпочати планування маршруту з вибраної точки через контекстне меню об'єкта.

Докладніше про інструмент [Планування маршруту](../plan-route/create-route.md).


### Оновити / Завантажити онлайн-мапи {#update--download-online-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs>

Щоб оновити або завантажити онлайн-мапи (тайли) у певному місці, ви можете використовувати контекстне меню об'єкта:

- **Android**: *<Translate android="true" ids="shared_string_download_map"/>* і для *Оновлення*, перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*.  
- **iOS**: *<Translate ios="true" ids="shared_string_download_map"/>* та *<Translate ios="true" ids="update_tile"/>*.  

Будь ласка, прочитайте [повну інструкцію](../map/raster-maps.md#download--update-tiles).  


### Оновити / Завантажити векторні мапи {#update--download-vector-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Download vector map Android](@site/static/img/map/action_download_vector_map_android.png)

![Select vector map worldwide on Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download vector map iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Select vector map on iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs>

Якщо в обраному місці немає офлайн-мапи, наприклад, меню об'єкта мапи було відкрито через Пошук або через певне Вибране, тоді буде запропоновано завантажити найменшу можливу офлайн-мапу [завантажити](../start-with/download-maps.md#select-on-the-map).  

**iOS**. Якщо у вас вже є [завантажені](../map/map-context-menu.md) мапи OsmAnd (векторні або рельєфні), їх можна оновити через контекстне меню. Вам потрібно буде спочатку вибрати регіон на мапі - торкніться будь-якого місця на світовому масштабі 3-7.  

> **ПРИМІТКА**. *Якщо ви відкрили контекстне меню для регіону мапи (регіон виділено), ви зможете побачити ***<Translate android="true" ids="rendering_category_details"/>*** про нього: тип та розмір доступної мапи, посилання на сторінку Вікіпедії, мову, населення та інше.*


### * Додати / Видалити точку паркування {#-add--delete-parking-point}

:::note
Щоб додати/видалити точки паркування, увімкніть [**плагін "Позиція паркування"**](../plugins/parking.md) OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Parking Android](@site/static/img/map/action_parking_android.png)

![Action Delete Parking Android](@site/static/img/map/context_menu_limited_parking.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Parking iOS](@site/static/img/map/action_parking_ios.png)

![Action Delete Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png)

</TabItem>

</Tabs>

Будь-яке вибране місце на мапі може бути позначене як [місце паркування](../plugins/parking.md). Щоб видалити місце паркування, ви можете відкрити контекстне меню, пов'язане з місцем паркування.


### * Додати / Редагувати точку маршруту {#-add--edit-track-waypoint}

:::note
Щоб додати/редагувати точки треку, увімкніть [**плагін "Запис поїздки"**](../plugins/trip-recording.md) OsmAnd.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Select Track to add Waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Select Track to add Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png)

</TabItem>

</Tabs>

Ви можете додавати точки маршруту до записаного треку або до поточного запису треку за допомогою контекстного меню мапи.  

- Виберіть місце на мапі [довгим дотиком](../map/map-context-menu.md#select-any-point-long-tap).
- У *контекстному меню мапи*, що відкриється, виберіть *Дії → Додати точку маршруту*.
- У списку відображаються [треки](../map/tracks/index.md#display-tracks-on-the-map), записані та показані на мапі, а також [поточний запис треку](../plugins/trip-recording.md), до якого можна додати вибрану точку маршруту.
- Ви можете додавати точки маршруту до треку, який ще не активний для запису, в цьому випадку неактивний трек переходить зі *Стану запуску* до *Стану відновлення*.
- [Заповніть](../map/tracks/track-context-menu.md#add-waypoint-to-a-track) необхідні дані та збережіть точку маршруту.
- Ви можете налаштувати [Швидкі дії](../widgets/quick-action.md), додавши точку маршруту до *Додати точку маршруту*.


### * Створити / Змінити POI {#-create--modify-poi}

:::note
Щоб додати/створити/змінити POI, увімкніть [**плагін редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs>

За допомогою плагіна редагування OSM ви можете створювати та змінювати більшість POI, присутніх на [OpenStreetMap](https://www.openstreetmap.org/).

- &nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [створює новий POI](../plugins/osm-editing.md#create--modify-poi) у вибраному місці.
- &nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [змінює вибраний POI](../plugins/osm-editing.md#create--modify-poi).


### * Відкрити примітку OSM {#-open-osm-note}

:::note
Щоб відкрити примітку OSM, увімкніть [**плагін редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Add Note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Add Note iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs>

Ви можете **повідомити** про помилки в даних мапи в певному місці спільноті [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Join_the_community). Будь ласка, дотримуйтесь [вказівок](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) і додавайте відповідні коментарі до проблеми.


### * Коментувати / Закрити примітку OSM {#-comment--close-osm-note}

:::note
Щоб коментувати/закрити примітку OSM, увімкніть [**плагін редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

Ви можете [коментувати](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [вирішувати](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) та повторно відкривати
Примітки OpenStreetMap через контекстне меню об'єкта.


### * Завантажити POI / примітку OSM {#-upload-poi--osm-note}

:::note
Щоб завантажити POI / примітку OSM, увімкніть [**плагін редагування OSM**](../plugins/osm-editing.md) OsmAnd.
:::

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

Якщо ви використовуєте *Офлайн-режим* для додавання/редагування POI або примітки OSM, вам потрібно буде завантажити зміни до OpenStreetMap. За замовчуванням *Офлайн-режим* увімкнено, щоб уникнути випадкових змін публічної бази даних. Ви можете завантажити або видалити зміни через контекстне меню створеного об'єкта.


### * Записати AV-нотатку {#-record-av-note}

<InfoAndroidOnly />

:::note
Щоб записати аудіо/відео нотатки, увімкніть [**плагін "Аудіо/Відео нотатки"**](../plugins/audio-video-notes.md) OsmAnd.
:::

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Записує або робить медіа-нотатку в вибраній точці на мапі.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - робить [аудіо-нотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на накладанні з піктограмою аудіо).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - робить [відео-нотатку](../map/point-layers-on-map.md#-audio--video-points-android) у вибраній точці (створює нову точку на накладанні з піктограмою відео).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - робить [фото-точку](../map/point-layers-on-map.md#-audio--video-points-android) на мапі.


## Налаштувати {#customize}

<InfoAndroidOnly/>  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>*

![Map context menu Customize](@site/static/img/map/map_context_menu_customize_1.png)  <!-- ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_2.png) -->  ![Map context menu Customize](@site/static/img/map/map_context_menu_customize_3.png)

Ви можете змінити порядок або приховати елементи з меню *Дії* в *контекстному меню мапи*. Запропоновано загалом 16 дій.  

- Ви можете перемістити три найкорисніші дії вгору списку *Основні дії*.
- Решта меню може бути налаштована для кожного профілю окремо в розділах *Додаткові дії* та *Приховані*.  

Доступні типи дій:

- **<Translate android="true" ids="main_actions"/>**. Розділ має лише 4 кнопки, три з яких можна налаштувати, а Дії, які залишаються без змін.  
- **<Translate android="true" ids="additional_actions"/>**. Ви можете отримати доступ до цих дій, торкнувшись кнопки *Дії*.  
- **<Translate android="true" ids="shared_string_hidden"/>**. Переміщення дій до цього розділу не припиняє їх роботу. Вони просто не з'являються в меню Дії.  


## Пов'язані статті {#related-articles}

- [Векторні мапи (Стилі мап)](./vector-maps.md)
- [Растрові мапи (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на мапі](./point-layers-on-map.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми кольорових палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Червень 2025*