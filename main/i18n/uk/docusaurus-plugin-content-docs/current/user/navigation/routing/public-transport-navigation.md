---
source-hash: 80dc4983a69b5c41013a01014add8bf4ae3e59f35fc0c079bd4e47887e3e4bea
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

Дані про маршрути громадського транспорту взяті з проєкту [OpenStreetMap](http://openstreetmap.org/). OsmAnd використовує схему [PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) для навігації. OsmAnd підтримує навігацію за маршрутами OpenStreetMap для *автобусів*, *тролейбусів*, *маршрутних таксі*, *фунікулерів*, *метро*, *легкорейкового транспорту*, *монорейки*, *поїздів*, *трамваїв*, *поромів*. Швидкість за замовчуванням для кожного типу транспортного засобу налаштовується в [Routing xml](../../../technical/build-osmand/routing.md) і використовується для пошуку найшвидших маршрутів.

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

![Маршрути громадського транспорту Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маршрути громадського транспорту iOS](@site/static/img/navigation/public/navigation_public_ios.png)

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

**3.** Ви можете переглянути всі можливі варіанти маршрутів на мапі за допомогою кнопки *Показати на мапі*. Проведіть пальцем по екрану, щоб переглянути наступний варіант маршруту.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Деталі маршруту громадського транспорту Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Деталі маршруту громадського транспорту iOS](@site/static/img/navigation/public/navigation_details_ios.png)

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


## Дані та інструкції {#data-and-guideline}

OsmAnd використовує нову схему громадського транспорту, також відому як Public Transport Version 2 (PTv2), для алгоритму навігації громадським транспортом OsmAnd.

- Ви можете перевірити свій громадський транспорт [тут](http://tools.geofabrik.de/osmi/).
- Посібник зі створення або коригування маршрутів громадського транспорту доступний у нашому [блозі](https://osmand.net/blog/guideline-pt).
- Презентація [2019: Навігація громадським транспортом за допомогою OpenStreetMap від OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).