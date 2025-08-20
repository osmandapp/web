---
source-hash: 24073bbbba8108ac4befa02adbada3ce95bc6b6c5197b214d7ffa297c6ee56c5
sidebar_position: 10
title: Маршрути
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

OsmAnd має багато потужних функцій для відображення різних [маршрутів](#type-of-routes) на карті. За замовчуванням ці маршрути є частиною [векторних карт](./vector-maps.md#routes) (дані OpenStreetMap), однак подібна функціональність надається [треками](./tracks/index.md), які можна створити за допомогою функції [Планування маршруту](../plan-route/create-route.md), імпортувати як [GPX-треки](#save-as-a-track), записати за допомогою [плагіна Запис поїздки](../plugins/trip-recording.md).


## Типи маршрутів {#type-of-routes}

Маршрути представляють різні види активного відпочинку з використанням даних з [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Натискання **піктограми щита з номером маршруту або прапорцем маршруту** на карті відкриє контекстне меню, яке надає додаткову інформацію про маршрут та дозволяє використовувати його як частину навігації.

Ви можете налаштувати фільтрацію деяких типів маршрутів у меню [Налаштувати карту](../map/configure-map-menu.md).

### Велосипедні маршрути {#cycle-routes}

[Велосипедні маршрути](https://wiki.openstreetmap.org/wiki/Cycle_routes) представлені трьома типами: *місцеві* (`lcn`), *регіональні* (`rcn`), *національні* (`ncn`), *міжнародні* (`icn`). Також велосипедні маршрути можуть бути частиною [вузлових мереж](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Ви можете вибрати, як призначити колір сегментам маршруту:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Більше інформації можна знайти в статті [Легенда карти](../map-legend/index.md).


### Маршрути для гірських велосипедів {#mountain-bike-routes}

Маршрути для гірських велосипедів (MTB) мають специфічне відображення в [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) і можуть бути обрані окремо від велосипедних маршрутів.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Показує стежки відповідно до шкали MTB. Більше інформації можна знайти в статті [Легенда карти](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Показує MTB-стежки відповідно до Міжнародної асоціації гірських велосипедистів, [MTB IMBA](https://www.imba.com/). Більше інформації можна знайти в статті [Легенда карти](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Пішохідні маршрути {#hiking--walking-routes}

[Пішохідні маршрути](https://wiki.openstreetmap.org/wiki/Walking_Routes) представлені трьома типами: *місцеві* (`lwn`), *регіональні* (`rwn`), *національні* (`nwn`), *міжнародні* (`iwn`). Також пішохідні маршрути можуть бути частиною [вузлових мереж](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd не розділяє пішохідні та туристичні маршрути, а об'єднує їх в одну групу. Ви можете вибрати, як призначити колір сегментам маршруту:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Кольори маршрутів відповідно до їх індивідуального [місцевого кольору](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (якщо доступно в OpenStreetMap) та символу туристичного щита.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Кольори за [приналежністю до мережі](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Кольори маршрутів відповідно до типу [вузлової мережі](https://wiki.openstreetmap.org/wiki/Node_Networks) (міжнародна, регіональна або місцева).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Маршрути для кросових мотоциклів {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Функція **Маршрути для кросових мотоциклів** дозволяє відображати на карті маршрути, призначені для кросових мотоциклів, на основі тегу `dirtbike:scale`. Ця шкала виділяє стежки, придатні для кросових мотоциклів, з кольоровим накладанням, що показує рівні складності.

Ви можете активувати цю функцію в *Меню → Налаштувати карту → Маршрути → Маршрути для кросових мотоциклів*. Система функціонує аналогічно шкалі MTB, пропонуючи візуальне представлення маршрутів, пристосованих для кросових мотоциклів — більше про тег [`dirtbike` можна знайти тут](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Альпіністські маршрути {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd підтримує *альпіністські райони* (`climbing=area`) та *альпіністські скелі* (`climbing=crag`), що дозволяє знаходити місця для [скелелазіння](https://wiki.openstreetmap.org/wiki/Climbing) безпосередньо на карті.

- **Альпіністські райони** представляють **більші зони**, де існує кілька альпіністських маршрутів.

- **Альпіністські скелі** відносяться до **конкретних скельних утворень** або стін, придатних для скелелазіння.

- Ці місця включають **детальні атрибути**, такі як:

    - *Категорія складності* (наприклад, UIAA, французька, YDS).
    - *Тип породи* (наприклад, вапняк, граніт).
    - *Довжина маршруту* (у метрах).
    - *Якість лазіння* (міцна, сипуча, змішана).
    - *Наявність журналу сходжень*.

Щоб увімкнути відображення альпіністських місць на карті, перейдіть до: *Меню → Налаштувати карту → Маршрути → Альпіністські маршрути*.


### Ступінь складності пішохідних маршрутів {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Деякі ділянки доріг можуть бути частиною багатьох маршрутів, але їх можна індивідуально розфарбувати, щоб відобразити складність ділянки в гірських районах. Наразі OsmAnd підтримує італійську та швейцарську класифікації, і кожна з них має певний перелік вимог до спорядження для доступу до цієї ділянки.

1. [Шкала SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Шкала CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)


### Лижні маршрути {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Лижні маршрути є окремою групою [маршрутів](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) в OpenStreetMap. Зазвичай ці маршрути можуть використовуватися зі стилем карти [Зима та лижі](../map/vector-maps.md#winter-and-ski) з усіма видимими [трасами](https://wiki.openstreetmap.org/wiki/Pistes).


### Кінні маршрути {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Кінні маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) відображаються як кольорові маршрути з символами для верхової їзди.


### Водні види спорту {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Маршрути для водного туризму](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) відображаються разом із піктограмами доступу, небезпечними зонами для [водного туризму](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).


### Бігові маршрути {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Бігові маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) в OpenStreetMap використовуються для іменованих, нумерованих або іншим чином позначених бігових маршрутів, переважно для легкої атлетики.


### Фітнес-маршрути {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[Фітнес-маршрут](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) — це стежка або шлях, обладнаний перешкодами або станціями по всій його довжині для тренування людського тіла з метою покращення здоров'я.


### Туристичні маршрути {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Туристичні маршрути є частиною користувацьких файлів [Путівника](../plan-route/travel-guides.md) (`travel.obf`), які можуть бути згенеровані з [маршрутів користувача](https://osmand.net/blog/routes#generated-travel-routes) або бути частиною додаткових [плагінів](../plugins/index.md).

Ви можете налаштувати відображення певних ***Путівників*** та типів ***треків***, відображати треки як точки або ***групи точок*** (наприклад, для путівників Wikivoyage). Дізнайтеся більше про [Путівники тут](../plan-route/travel-guides.md).


## Відображення маршрутів на карті {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- Щоб відобразити потрібні маршрути на карті, увімкніть їх у *списку маршрутів* меню [Налаштувати карту](../map/configure-map-menu.md).
- OsmAnd може виділяти [маршрути, присутні на OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Їх можна вибрати, натиснувши [символ на маршруті](#save-as-a-track), і якщо видимий набір маршрутів налаштований правильно, ви можете слідувати кольору та значкам.
- Ви можете створити трек поверх маршрутів за допомогою інструменту [Планування маршруту](../plan-route/create-route.md).

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)



## Дії з маршрутами {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

На карті можна вибрати маршрути для [піших прогулянок, велосипедних прогулянок, подорожей тощо](#type-of-routes), які позначені [символами OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol), де це можливо.

Коли ви натискаєте **символ маршруту** на карті:

- Відображається **список найближчих маршрутів** у цьому місці.
- Після вибору маршруту зі списку відкривається [контекстне меню](../map/tracks/track-context-menu.md) для цього маршруту, що відображає детальну інформацію та доступні дії.

У **контекстному меню** ви можете:

- Переглянути [додаткову інформацію](#route-info-and-elevation) про вибраний маршрут.
- [Зберегти маршрут](#save-as-a-track) як **GPX-трек**.
- [Розпочати навігацію](#start-navigation) по маршруту.


### Інформація про маршрут та висота {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

Наступна інформація буде видима в контекстному меню:

- **Інформація про маршрут**: Назва маршруту, посилання OSM (потрібен плагін редагування OSM), Тип, Опис, Відстань, Напрямок, Підйом/Спуск, Діапазон висот, Мережа, Оператор, Стан, Колір, Круговий маршрут, Початкові/Кінцеві точки та інше.
- **Загальне**: Розмір, Розташування, Створено.
- **Додаткова інформація**. Відображає тип активності.
- Кнопки дій: [Зберегти як](#save-as-a-track) та [Почати навігацію](#start-navigation).
- [Інформація про висоту](../navigation/setup/route-details.md#elevation-info). Відображає інформацію про дані висоти на маршруті.
- [Аналіз треку на карті](../map/tracks/index.md#analyze-track-on-map). Відображає детальний аналіз даних треку за допомогою графіків та карт.

Щоб переглянути графік висоти, нахилу або деталі висоти для вибраного маршруту, просто натисніть будь-яке з наступних значень у контекстному меню: **Відстань**, **Підйом**, **Спуск** або **Висота**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>

### Зберегти як трек {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>


Щоб зберегти маршрут як *GPX-файл*, натисніть кнопку **Зберегти (Завантажити)** під [інформаційною панеллю](../map/tracks/track-context-menu.md#info-panel). Це відкриє панель кнопок [Швидкі дії](../map/tracks/track-context-menu.md#track-actions), де ви матимете доступ до дій з треком, таких як зміна [Вигляду](./tracks/appearance.md), [Навігації](../navigation/setup/route-navigation.md) або редагування [Планування маршруту](../plan-route/create-route.md).


### Почати навігацію {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Щоб розпочати навігацію по вибраному маршруту OSM, натисніть кнопку **Почати навігацію** на [**інформаційній панелі**](../map/tracks/track-context-menu.md#info-panel).

Це запустить режим [**Навігація по треку**](../navigation/setup/gpx-navigation.md), що дозволить вам слідувати маршруту з голосовими підказками та навігаційними функціями.


### Швидкі дії {#quick-actions}

Ви можете налаштувати, чи ввімкнені або вимкнені маршрути, за допомогою віджета [Швидкі дії](../widgets/quick-action.md#configure-map).


## Пошук маршрутів {#routes-search}

Знайдіть маршрути за допомогою [функції пошуку](../search/index.md) за назвою або вибравши "Маршрути" у розділі [Категорії](../search/search-poi.md#).

Для пошуку перейдіть до меню *<Translate android="true" ids="search_button"/>* або *<Translate android="true" ids="search_button,search_categories"/>* та введіть свою активність.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>

Перейдіть до *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, щоб знайти потрібні маршрути. Маршрути включають назву, тип активності, довжину, місцезнаходження та відстань до найближчої точки.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Використовуйте кнопку фільтрів (у верхньому правому куті), щоб відобразити лише потрібні маршрути.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Контекстне меню карти](./map-context-menu.md)
- [Налаштування карти](./configure-map-menu.md)
- [Треки](./tracks/index.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Вигляд лінії маршруту навігації](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *Останнє оновлення: травень 2025*