---
source-hash: 4d9f5039ab11085fb01ba9a87295b0709bf9134ac4123b410ba74a735353f314
sidebar_position: 5
title:  Маршрути громадського транспорту
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Огляд {#overview}

Навігація громадським транспортом у додатку OsmAnd дозволяє розробляти маршрути з використанням громадського транспорту, що, безумовно, допоможе вам швидше пересуватися "бетонними джунглями".

Дані про маршрути громадського транспорту взяті з проєкту [OpenStreetMap](http://openstreetmap.org/). OsmAnd використовує схему [PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) для навігації. OsmAnd підтримує навігацію за маршрутами OpenStreetMap для *bus*, *trolleybus*, *share_taxi*, *funicular*, *subway*, *light_rail*, *monorail*, *train*, *tram*, *ferry*. Швидкість за замовчуванням для кожного типу транспортного засобу налаштовується в [Routing xml](../../../technical/build-osmand/routing.md) і використовується для пошуку найшвидших маршрутів.

:::note
Маршрутизація громадського транспорту знаходиться на етапі тестування. Наразі ви можете побудувати та переглянути свій маршрут без повноцінної функції навігації.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Навігація громадським транспортом Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Навігація громадським транспортом iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Як користуватися {#how-to-use}

Щоб розпочати навігацію містом громадським транспортом, скористайтеся [кнопкою навігації](../../widgets/map-buttons.md#directions) на екрані мапи або виберіть опцію навігації в *Головному меню*.  

**1.** Вам потрібно вибрати *профіль навігації Громадський транспорт*, початкову та кінцеву точки.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Навігація маршрутами громадського транспорту Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Навігація маршрутами громадського транспорту iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd пропонує варіанти маршрутів з часом пішого ходу та маршрути громадського транспорту з інформацією про маршрут: час, відстань, пересадки та громадські маршрути. Вам потрібно прокрутити екран навігації, щоб вибрати потрібний варіант.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Шлях громадського транспорту Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Шлях громадського транспорту iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Ви можете переглянути всі можливі варіанти маршрутів на мапі за допомогою кнопки *Показати на мапі*. Проведіть пальцем по екранах, щоб переглянути наступний варіант маршруту.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Деталі громадського транспорту Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Деталі громадського транспорту iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Натисніть кнопку "Деталі", щоб відкрити опис вибраного маршруту з усіма зупинками та пересадками.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Список зупинок громадського транспорту Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Список зупинок громадського транспорту iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>

## Типи громадського транспорту {#public-transport-types}

Ви можете шукати добре відредаговані маршрути громадського транспорту відповідно до ваших уподобань і вибрати:

- Уникати автобусів (та тролейбусів)
- Уникати метро
- Уникати поїздів
- Уникати трамваїв
- Уникати поромів
- Уникати маршрутних таксі

За замовчуванням OsmAnd шукає маршрути, які включають усі підтримувані типи громадського транспорту.

## Альтернативні маршрути {#alternative-routes}

Альтернативні маршрути — це ділянки маршруту, які обслуговуються різними транспортними послугами та мають спільний шлях і зупинки.

Різні транспортні послуги можуть використовувати різні номери маршрутів (refs) або навіть різні типи транспорту.

Користувацький інтерфейс відображає альтернативні маршрути як кольорові бейджі з їх refs.

## Продуктивність та результати {#performance-and-results}

**Профіль громадського транспорту -> Налаштування -> Налаштування навігації -> Параметри маршруту**

1. **Максимальна кількість змін транспорту**.

Продуктивність і споживання пам'яті маршрутизатора громадського транспорту залежать від глибини пошуку.

Найважливіший параметр, який впливає на цю глибину, — це **Максимальна кількість змін транспорту**.

Ми використовуємо **2** як значення за замовчуванням, яке здається оптимальним для сучасних мереж громадського транспорту.

Якщо ви стикаєтеся з низькою продуктивністю або помилками нестачі пам'яті, спробуйте зменшити це значення.

Якщо ви в невеликому місті або подорожуєте короткими маршрутами, значення **1** може працювати краще.
<!--
There are two more parameters that help you choose the best routes.

2. **Display N best routes** (specify the number of best routes to display)

By default, OsmAnd displays the **10** best routes (including alternative routes).

You can decrease or increase this limit, or even display all routes.

Note: displaying unlimited routes might slow down your device.

Possible values: 0 (show all), 5, 10 (default), 15, 100
-->

## Дані та інструкції {#data-and-guideline}

OsmAnd використовує нову схему громадського транспорту, також відому як Public Transport Version 2 (PTv2), для алгоритму навігації громадським транспортом OsmAnd.

- Ви можете перевірити свій громадський транспорт [тут](http://tools.geofabrik.de/osmi/).
- Посібник зі створення або коригування маршрутів громадського транспорту доступний у нашому [блозі](https://osmand.net/blog/guideline-pt).
- Презентація [2019: Навігація громадським транспортом за допомогою OpenStreetMap від OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).