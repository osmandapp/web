---
source-hash: 4555734ace3e7132cbe343a64b51b8a14b9f7d50262e566f5b87185e156e7f36
sidebar_position: 5
title:  Маршрутизація громадським транспортом
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

Навігація громадським транспортом у застосунку OsmAnd дозволяє прокладати маршрути громадським транспортом, що, безумовно, допоможе вам швидше пересуватися "бетонними джунглями".

Дані про маршрути громадського транспорту беруться з проєкту [OpenStreetMap](http://openstreetmap.org/). OsmAnd використовує [схему PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) для навігації. OsmAnd підтримує навігацію за маршрутами OpenStreetMap для *автобусів*, *тролейбусів*, *маршрутних таксі*, *фунікулерів*, *метро*, *легкорейкового транспорту*, *монорейки*, *поїздів*, *трамваїв*, *поромів*. Швидкість за замовчуванням для кожного типу транспортного засобу налаштовується в [Routing xml](../../../technical/build-osmand/routing.md) і використовується для пошуку найшвидших маршрутів.

:::note
Маршрутизація громадським транспортом знаходиться на стадії тестування. Наразі ви можете будувати та переглядати свій маршрут без повної функції навігації.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![avigation public transport iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Як користуватися {#how-to-use}

Щоб розпочати навігацію містом громадським транспортом, скористайтеся [кнопкою навігації](../../widgets/map-buttons.md#directions) на екрані мапи або виберіть опцію навігації в *Головному меню*.  

**1.** Вам потрібно вибрати *Профіль навігації громадським транспортом*, початкову та кінцеву точки.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport routes Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport routes iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd пропонує варіанти маршрутів з часом пішої ходи та маршрути громадського транспорту з інформацією про маршрут: час, відстань, пересадки та маршрути громадського транспорту. Вам потрібно прокрутити екран навігації, щоб вибрати потрібний варіант.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport way Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport way iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Ви можете переглянути всі можливі варіанти маршрутів на мапі за допомогою кнопки *Показати на мапі*. Проведіть пальцем по екранах, щоб переглянути наступний варіант маршруту.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport Details Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport Details iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Натисніть кнопку "Деталі", щоб відкрити опис вибраного маршруту з усіма зупинками та пересадками.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation public transport stops list Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Navigation public transport stops list iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Дані та інструкції {#data-and-guideline}

OsmAnd використовує нову схему громадського транспорту, також відому як Public Transport Version 2 (PTv2), для алгоритму навігації громадським транспортом OsmAnd.

- Ви можете перевірити свій громадський транспорт [тут](http://tools.geofabrik.de/osmi/).
- Інструкція з побудови або коригування маршрутів громадського транспорту доступна в нашому [блозі](https://osmand.net/blog/guideline-pt).
- Презентація [2019: Навігація громадським транспортом за допомогою OpenStreetMap від OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Останнє оновлення: Червень 2024.*