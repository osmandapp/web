---
source-hash: 97cbadd50fbc4e3456c25be84373804b63617bf768394b167c130bfa44b414f0
sidebar_position: 12
title: Типи маршрутів
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

Маршрути представляють різні види активностей на свіжому повітрі з використанням даних з [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Натискання **на щит з номером або прапорцем маршруту** на карті відкриє контекстне меню, яке надає додаткову інформацію про маршрут і дозволяє використовувати його як частину навігації.

Ви можете налаштувати фільтрацію деяких типів маршрутів у меню [Налаштувати карту](../../map/configure-map-menu.md).

## Велосипедні {#cycle}

[Велосипедні маршрути](https://wiki.openstreetmap.org/wiki/Cycle_routes) представлені трьома типами: *локальні* (`lcn`), *регіональні* (`rcn`), *національні* (`ncn`), *міжнародні* (`icn`). Також велосипедні маршрути можуть бути частиною [мережевих вузлів](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). Ви можете вибрати, як призначати колір сегментам маршруту:

- ***<Translate android="true" ids="layer_route"/>***.  
![Маршрути на карті - велосипедні маршрути](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Маршрути на карті - велосипедні мережеві вузли](@site/static/img/map/map-routes-cycle-node-networks.png)

Більше інформації можна знайти у статті [Легенда карти](../../map-legend/index.md).


## Велосипедні стежки {#mountain-bike}

Маршрути MTB мають специфічне відображення в [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) і можуть бути вибрані окремо від велосипедних маршрутів.

- ***<Translate android="true" ids="mtb_scale"/>***.  Показує стежки відповідно до шкали MTB. Більше інформації у статті [Легенда карти](../../map-legend/index.md).  
![Маршрути на карті - стежки MTB](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Показує стежки MTB відповідно до International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). Більше інформації у статті [Легенда карти](../../map-legend/index.md).  
![Маршрути на карті - стежки MTB](@site/static/img/map/map-routes-mtb_imba-trails.png)

## Пішохідні / Прогулянкові {#hiking--walking}

[Пішохідні маршрути](https://wiki.openstreetmap.org/wiki/Walking_Routes) представлені трьома типами: *локальні* (`lwn`), *регіональні* (`rwn`), *національні* (`nwn`), *міжнародні* (`iwn`). Також пішохідні маршрути можуть бути частиною [мережевих вузлів](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd не розділяє прогулянкові та пішохідні маршрути й об’єднує їх в одну групу. Ви можете вибрати, як призначати колір сегментам маршруту:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Кольори маршрутів відповідно до їхнього індивідуального [локального кольору](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (якщо доступний у OpenStreetMap) та туристичного щита.  
![Маршрути на карті - пішохідні osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Кольори за [мережевою приналежністю](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Маршрути на карті - пішохідна мережа](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Кольори маршрутів відповідно до типу [мережевого вузла](https://wiki.openstreetmap.org/wiki/Node_Networks) (міжнародний, регіональний чи локальний).  
![Маршрути на карті - пішохідні мережеві вузли](@site/static/img/map/map-routes-hiking-node-networks.png)


## Стежки для мотокросу {#dirt-bike-trails}

![Маршрути на карті - Стежки для мотокросу](@site/static/img/map/map-routes-dirt-bike-trails.png)

Функція **Стежки для мотокросу** дозволяє відображати на карті маршрути, специфічні для мотокросу, на основі тегу `dirtbike:scale`. Ця шкала виділяє стежки, придатні для мотокросу, з кольоровим накладенням, що показує рівні складності ([Легенда карта](../../map-legend/osmand.md#routes)).  

Ви можете активувати цю функцію в *Меню → Налаштувати карту → Маршрути → Маршрути для мотокросу*. Система функціонує подібно до шкали MTB, пропонуючи візуальне представлення маршрутів, адаптованих для мотокросу — більше про тег [`dirtbike` можна знайти тут](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


## Маршрути для скелелазіння {#climbing-routes}

![Маршрути на карті - Маршрути для скелелазіння](@site/static/img/map/map-routes-climbing-routes.png)

OsmAnd підтримує *зони для скелелазіння* (`climbing=area`) та *скельні ділянки* (`climbing=crag`), дозволяючи знаходити місця для [скелелазіння](https://wiki.openstreetmap.org/wiki/Climbing) безпосередньо на карті.

- **Зони для скелелазіння** представляють **більші території**, де існує кілька маршрутів для скелелазіння.

- **Скельні ділянки** стосуються **конкретних скельних утворень** або стін, придатних для скелелазіння.

- Ці місця включають **детальні атрибути**, такі як:

    - *Категорія складності* (наприклад, UIAA, French, YDS).
    - *Тип породи* (наприклад, вапняк, граніт).
    - *Довжина маршруту* (у метрах).
    - *Якість скелелазіння* (тверда, крихка, змішана).
    - *Наявність журналу на вершині*.

Щоб увімкнути місця для скелелазіння на карті, перейдіть до: *Меню → Налаштувати карту → Маршрути → Маршрути для скелелазіння*.


## Категорія складності пішохідних стежок {#hiking-trails-difficulty-grade}

![Маршрути на карті - альпійський похід](@site/static/img/map/map-routes-alpine-hiking.png)

Деякі сегменти доріг можуть бути частиною багатьох маршрутів, але їх можна окремо забарвити, щоб показати складність сегмента в гірській місцевості. Наразі OsmAnd підтримує італійську та швейцарську класифікації, і кожна має конкретний список вимог до спорядження для доступу до цього сегмента.  

1. [Шкала SAC](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [Шкала CAI](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


## Лижні схили та маршрути {#ski-slopes-and-routes}

- _Лижні схили та маршрути_ у стилі карти _Зимовий та лижний_.  
![Маршрути на карті - лижні схили](@site/static/img/map/map-routes-ski-slopes.png)

- _Лижні схили та маршрути_ у стилі карти _OsmAnd за замовчуванням_.  
![Маршрути на карті - лижні схили](@site/static/img/map/map-routes-ski-slopes_1.png)

Лижні схили та маршрути — це специфічна група [маршрутів](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) в OpenStreetMap. Зазвичай ці маршрути можна використовувати зі стилем карти [Зимовий та лижний](../../map/map-styles.md#winter-and-ski) з усіма видимими [трасами](https://wiki.openstreetmap.org/wiki/Pistes). Якщо активний інший стиль карти, з’являється банер із пропозицією перемикнутися на [Зимовий та лижний](../../map/map-styles.md#winter-and-ski) (*лише Android*) і відображаються лише схили. Натисніть ***Перемкнути***, щоб змінити стиль карти, не виходячи з поточного екрана, або ***Пізніше***, щоб приховати банер.


## Стежки для снігоходів {#snowmobile-trails}

![Маршрути на карті - снігоходи](@site/static/img/map/snowmobile_trail_new.png)

Стежки для снігоходів позначені в [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) як `route=snowmobile`. Вони використовуються для зимового відпочинку та сполучення віддалених районів у сніжний сезон. В OsmAnd стежки для снігоходів можна натискати, див. розділ [Дії з маршрутами](./index.md#actions-with-routes).


## Кінні маршрути {#horse-routes}

![Маршрути на карті - кінні маршрути](@site/static/img/map/map-routes-horse.png)

[Кінні маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) відображаються як кольорові маршрути із символами для верхової їзди.  


## Водний спорт {#whitewater-sports}

![Маршрути на карті - водний спорт](@site/static/img/map/map-routes-whitewater-sport.png)

[Маршрути для водного спорту](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) відображаються разом із піктограмами доступу, зонами небезпеки та найближчими порогами для [водного туризму](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). Див. [Особливості водного спорту](../../map-legend/osmand.md#whitewater-features) у Легенді карти для категорій порогів, категорій ділянок річки та пов’язаних символів.


## Біг {#running}

![Фітнес-маршрути](@site/static/img/map/fitness_1.png)

[Бігові маршрути](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) в OpenStreetMap використовуються для позначених, нумерованих або інакше маркованих бігових маршрутів, переважно для легкої атлетики.


## Фітнес-стежки {#fitness-trails}

![Фітнес-маршрути](@site/static/img/map/fitness_route.png)

[Фітнес-стежка](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) — це стежка або доріжка, обладнана перешкодами або станціями вздовж її довжини для тренування тіла та покращення здоров’я.  


## Подорожі {#travel}

<InfoAndroidOnly />

![Маршрути для подорожей](@site/static/img/map/travel_route_2.png)  ![Маршрути для подорожей](@site/static/img/map/travel_routes.png)

Маршрути для подорожей є частиною користувацьких файлів [Дорожнього довідника](../../plan-route/travel-guides.md) (`travel.obf`), які можна згенерувати з [маршрутів користувача](https://osmand.net/blog/routes#generated-travel-routes) або які є частиною додаткових [плагінів](../../plugins/index.md).  

Ви можете налаштувати відображення певних ***Дорожніх довідників*** та типів ***треків***, відображати треки як точки або ***Групи точок*** (наприклад, для довідників Wikivoyage). Дізнайтеся більше про [Дорожні довідники тут](../../plan-route/travel-guides.md).


## Пов’язані статті {#related-articles}

- [Налаштувати карту](../../map/configure-map-menu.md)
- [Легенда карта](../../map-legend/osmand.md)
- [Маршрути](./index.md)