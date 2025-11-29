---
source-hash: c542cbb5952fb2ff6a44defcd1d4f1428cda6f2f08e20fdd5c2611ae081556a3
sidebar_position: 10
title:  Маршрути
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

OsmAnd має багато потужних функцій для відображення різних [маршрутів](#type-of-routes) на карті. За замовчуванням ці маршрути є частиною [векторних карт](./vector-maps.md#routes) (дані OpenStreetMap), однак подібна функціональність забезпечується [треками](./tracks/index.md), які можна створити за допомогою [Планування маршруту](../plan-route/create-route.md), імпортувати як [треки GPX](#save-as-a-track), записати за допомогою плагіна [Запис поїздки](../plugins/trip-recording.md). Легенда карти маршрутів знаходиться [тут](../map-legend/osmand.md#routes).


## Типи маршрутів {#type-of-routes}

Маршрути представляють різні види активного відпочинку, використовуючи дані з [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Натискання на **іконку щита з номером маршруту або прапорцем маршруту** на карті відкриє контекстне меню, яке надає додаткову інформацію про маршрут і дозволяє використовувати його для навігації.

Ви можете налаштувати фільтрацію деяких типів маршрутів у меню [Налаштувати карту](../map/configure-map-menu.md).

### Велосипедні маршрути {#cycle-routes}

[Велосипедні маршрути](https://wiki.openstreetmap.org/wiki/Cycle_routes) представлені трьома типами: *місцеві* (`lcn`), *регіональні* (`rcn`), *національні* (`ncn`), *міжнародні* (`icn`). Також велосипедні маршрути можуть бути частиною [вузлових мереж](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Ви можете вибрати, як призначати колір сегментам маршруту:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

Більше інформації ви можете знайти у статті [Легенда карти](../map-legend/index.md).


### Маршрути для гірських велосипедів {#mountain-bike-routes}

Маршрути для гірських велосипедів (MTB) мають специфічне позначення в [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) і можуть бути обрані окремо від велосипедних маршрутів.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***. Показує траси відповідно до шкали MTB. Більше інформації у статті [Легенда карти](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***. Показує траси для гірських велосипедів відповідно до Міжнародної асоціації гірського велосипеда, [MTB IMBA](https://www.imba.com/). Більше інформації у статті [Легенда карти](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Пішохідні маршрути {#hiking--walking-routes}

[Пішохідні маршрути](https://wiki.openstreetmap.org/wiki/Walking_Routes) представлені трьома типами: *місцеві* (`lwn`), *регіональні* (`rwn`), *національні* (`nwn`), *міжнародні* (`iwn`). Також пішохідні маршрути можуть бути частиною [вузлових мереж](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd не розділяє піші та туристичні маршрути, а об'єднує їх в одну групу. Ви можете вибрати, як призначати колір сегментам маршруту:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***. Забарвлює маршрути відповідно до їх індивідуального [місцевого кольору](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (якщо він доступний в OpenStreetMap) та символу туристичного щита.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***. Забарвлює за [приналежністю до мережі](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***. Забарвлює маршрути відповідно до типу [вузлової мережі](https://wiki.openstreetmap.org/wiki/Node_Networks) (міжнародна, регіональна або місцева).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Маршрути для кросових мотоциклів {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

Функція **Маршрути для кросових мотоциклів** дозволяє відображати на карті спеціальні маршрути для кросових мотоциклів на основі тегу `dirtbike:scale`. Ця шкала виділяє траси, придатні для їзди на кросових мотоциклах, з кольоровим накладенням, що показує рівні складності ([Легенда карти](../map-legend/osmand.md#routes)).  

Ви можете активувати цю функцію в *Меню → Налаштувати карту → Маршрути → Маршрути для кросових мотоциклів*. Система працює аналогічно шкалі MTB, пропонуючи візуальне представлення маршрутів, адаптованих для їзди на кросових мотоциклах — більше про тег [`dirtbike` можна знайти тут](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Альпіністські маршрути {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd підтримує *скелелазні зони* (`climbing=area`) та *скелелазні скелі* (`climbing=crag`), що дозволяє знаходити місця для [скелелазіння](https://wiki.openstreetmap.org/wiki/Climbing) безпосередньо на карті.

- **Скелелазні зони** представляють **більші зони**, де існує кілька скелелазних маршрутів.

- **Скелелазні скелі** відносяться до **конкретних скельних утворень** або стін, придатних для скелелазіння.

- Ці місця включають **детальні атрибути**, такі як:

    - *Категорія складності* (наприклад, UIAA, French, YDS).
    - *Тип породи* (наприклад, вапняк, граніт).
    - *Довжина маршруту* (в метрах).
    - *Якість скелелазіння* (тверда, сипуча, змішана).
    - *Наявність журналу сходжень*.

Щоб увімкнути відображення місць для скелелазіння на карті, перейдіть до: *Меню → Налаштувати карту → Маршрути → Альпіністські маршрути*.


### Рівень складності пішохідних стежок {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Деякі ділянки доріг можуть бути частиною багатьох маршрутів, але їх можна індивідуально розфарбувати, щоб представити складність ділянки в гірських районах. Наразі OsmAnd підтримує італійську та швейцарську класифікації, і кожна з них має специфічний перелік вимог до спорядження для доступу до цієї ділянки.  

1. [Шкала SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Шкала CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Лижні траси та маршрути {#ski-slopes-and-routes}

- _Лижні траси та маршрути_ у стилі карти _Зима та лижі_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

- _Лижні траси та маршрути_ у стилі карти _OsmAnd за замовчуванням_.  
![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes_1.png)

Лижні траси та маршрути є специфічною групою [маршрутів](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) в OpenStreetMap. Зазвичай ці маршрути можна використовувати зі стилем карти [Зима та лижі](../map/vector-maps.md#winter-and-ski) з усіма видимими [трасами](https://wiki.openstreetmap.org/wiki/Pistes). Якщо активний інший стиль карти, відображається банер, що пропонує переключитися на [Зима та лижі](../map/vector-maps.md#winter-and-ski) (*лише Android*) і показуються лише траси. Натисніть ***Перемкнути***, щоб змінити стиль карти, не залишаючи поточного екрана, або ***Пізніше***, щоб приховати банер.


### Маршрути для снігоходів {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_trail.png)

Маршрути для снігоходів позначені в [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) як `route=snowmobile`. Вони використовуються для зимового відпочинку та для з'єднання віддалених районів під час сніжного сезону. В OsmAnd маршрути для снігоходів є клікабельними, див. розділ [Дії з маршрутами](#actions-with-routes).


### Кінні маршрути {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Кінні маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) відображаються як маршрути, позначені кольором, із символами для верхової їзди.  


### Водний туризм {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Маршрути для водного туризму](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) показані разом з іконками доступу, небезпечними зонами для [водного туризму](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Бігові маршрути {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Бігові маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) в OpenStreetMap використовуються для іменованих, нумерованих або іншим чином позначених бігових маршрутів, переважно для легкої атлетики.


### Оздоровчі стежки {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

[Оздоровча стежка](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) — це стежка або доріжка, обладнана перешкодами або станціями вздовж неї для тренування людського тіла з метою покращення здоров'я.  


### Туристичні маршрути {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Туристичні маршрути є частиною спеціальних файлів [Путівників](../plan-route/travel-guides.md) (`travel.obf`), які можуть бути згенеровані з [маршрутів користувача](https://osmand.net/blog/routes#generated-travel-routes) або бути частиною додаткових [плагінів](../plugins/index.md).  

Ви можете налаштувати відображення певних ***Путівників*** та типів ***треків***, відображати треки як точки або ***Групи точок*** (наприклад, для путівників Wikivoyage). Дізнайтеся більше про [Путівники тут](../plan-route/travel-guides.md).


## Відображення маршрутів на карті {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Щоб відобразити потрібні маршрути на карті, увімкніть їх у *Списку маршрутів* меню [Налаштувати карту](../map/configure-map-menu.md).
- OsmAnd може виділяти [маршрути, наявні в OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Їх можна вибрати, торкнувшись [символу на маршруті](#save-as-a-track), і якщо видимий набір маршрутів налаштований правильно, ви можете слідкувати за кольором та іконками.
- Основні типи маршрутів також можна фільтрувати за класами та підкласами, що дозволяє відображати лише конкретні групи в межах кожного типу. Наприклад, ви можете показувати пішохідні маршрути за **символами OSMC** як класи, і за *міжнародними, національними, регіональними* або *місцевими мережами* як підкласи.
- Ви можете створити трек поверх маршрутів за допомогою інструменту [Планування маршруту](../plan-route/create-route.md).  
- Коли кілька маршрутів пролягають вздовж однієї дороги, кожен маршрут відображається як окрема напівпрозора лінія, розміщена над іншими. 
- При натисканні на місце, де перетинаються кілька маршрутів, відображається контекстне меню з усіма маршрутами, що проходять через цю точку. 
- Для відображення всіх елементів нової схеми рендерингу маршрутів потрібні оновлені векторні карти. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Щоб відобразити потрібні маршрути на карті, увімкніть їх у *Списку маршрутів* меню [Налаштувати карту](../map/configure-map-menu.md).
- OsmAnd може виділяти [маршрути, наявні в OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Їх можна вибрати, торкнувшись [символу на маршруті](#save-as-a-track), і якщо видимий набір маршрутів налаштований правильно, ви можете слідкувати за кольором та іконками.
- Ви можете створити трек поверх маршрутів за допомогою інструменту [Планування маршруту](../plan-route/create-route.md). 
- Коли кілька маршрутів пролягають вздовж однієї дороги, кожен маршрут відображається як окрема напівпрозора лінія, розміщена над іншими.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Деталі про скелелазні зони та скелі {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

При виборі [скелелазної зони або скелі](../map/routes.md#climbing-routes), OsmAnd надає детальний огляд місця для скелелазіння, включаючи: назву та місцезнаходження, рейтинг складності скелелазіння (UIAA, French, YDS тощо), тип породи, висоту та довжину маршруту, якість скелелазіння та умови поверхні.



## Дії з маршрутами {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

На карті ви можете вибрати маршрути для [піших прогулянок, велосипедних поїздок, лиж, MTB, кросових мотоциклів, подорожей та іншого](#type-of-routes). Там, де доступно, пішохідні маршрути відображають свої позначки за допомогою [символів OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); інші типи маршрутів використовують власні позначення.

Коли ви торкаєтеся **символу маршруту** на карті:

- Відображається **список найближчих маршрутів** у цьому місці.
- Після вибору маршруту зі списку відкривається [контекстне меню](../map/tracks/track-context-menu.md) для цього маршруту, що відображає детальну інформацію та доступні дії.

У **контекстному меню** ви можете:

- Переглянути [додаткову інформацію](#route-info-and-elevation) про вибраний маршрут.
- [Зберегти маршрут](#save-as-a-track) як **трек GPX**.
- [Почати навігацію](#start-navigation) вздовж маршруту.


### Інформація про маршрут та висоти {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>

У контекстному меню буде видно таку інформацію:

- **Інформація про маршрут**: Назва маршруту, посилання на OSM (потрібен плагін OSM Editing), Тип, Опис, Відстань, Напрямок, Підйом/Спуск, Діапазон висот, Мережа, Оператор, Стан, Колір, Кільцевий, Початкова/Кінцева точки та інше.
- **Загальне**: Розмір, Місцезнаходження, Створено.
- **Додаткова інформація**. Відображає тип активності.
- кнопки дій: [Зберегти як](#save-as-a-track) та [Почати навігацію](#start-navigation).
- [Інформація про висоту](../navigation/setup/route-details.md#elevation-info). Відображає інформацію про дані висот на маршруті.
- [Аналіз треку на карті](../map/tracks/index.md#analyze-track-on-map). Відображає детальний аналіз даних треку за допомогою графіків та карт.

Щоб переглянути графік висоти, нахилу або деталі висот для вибраного маршруту, просто торкніться будь-якого з наступних значень у контекстному меню: **Відстань**, **Підйом**, **Спуск** або **Висота**.

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


Щоб зберегти маршрут як *файл GPX*, натисніть кнопку **Зберегти (Завантажити)** під [інформаційною панеллю](../map/tracks/track-context-menu.md#info-panel). Це відкриє панель кнопок [швидких дій](../map/tracks/track-context-menu.md#track-actions), де ви матимете доступ до дій з треком, таких як зміна [Зовнішнього вигляду](./tracks/appearance.md), [Навігація](../navigation/setup/route-navigation.md) або редагування в [Плануванні маршруту](../plan-route/create-route.md).


### Почати навігацію {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

Щоб розпочати навігацію вздовж вибраного маршруту OSM, натисніть кнопку **Почати навігацію** на [**інформаційній панелі**](../map/tracks/track-context-menu.md#info-panel).

Це запустить режим [**Навігація по треку**](../navigation/setup/gpx-navigation.md), що дозволить вам слідувати маршрутом з голосовими підказками та навігаційними функціями.



### Швидкі дії {#quick-actions}

Ви можете налаштувати, чи вмикати або вимикати маршрути за допомогою віджета [Швидкі дії](../widgets/quick-action.md#configure-map).


## Пошук маршрутів {#routes-search}

Знаходьте маршрути за допомогою функції [Пошук](../search/index.md) за назвою або вибравши "Маршрути" в розділі [Категорії](../search/search-poi.md#).

Для пошуку перейдіть до меню *<Translate android="true" ids="search_button"/>* або *<Translate android="true" ids="search_button,search_categories"/>* і введіть вашу активність.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Перейдіть до *<Translate android="true" ids="search_button,search_categories,poi_routes"/>*, щоб знайти бажані маршрути. Результати пошуку маршрутів відображають назву маршруту, тип активності, довжину, місцезнаходження та відстань до найближчої точки. На Android також відображаються метрики висот, такі як підйом і спуск, де доступно. Невеликі зміни висоти (менше 10 м) приховані, щоб зберегти чіткість списку. Усі значення відповідають вибраним у додатку одиницям відстані та висоти.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Використовуйте кнопку фільтрів (у верхньому правому куті), щоб відобразити лише бажані маршрути.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Контекстне меню карти](./map-context-menu.md)
- [Налаштувати карту](./configure-map-menu.md)
- [Треки](./tracks/index.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)
- [Зовнішній вигляд лінії маршруту навігації](../navigation/guidance/map-during-navigation.md#route-line-appearance)