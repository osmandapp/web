---
source-hash: 666034567fd284a4497490ffa9885eebc102c1d37823e71a52d03c189944eb25
sidebar_position: 5
title: Маршрутизація громадського транспорту
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

Навігація громадським транспортом у застосунку OsmAnd дозволяє прокладати маршрути за допомогою громадського транспорту, що, безумовно, допоможе вам швидше пересуватися "бетонними джунглями".

Дані про маршрути громадського транспорту беруться з проєкту [OpenStreetMap](http://openstreetmap.org/). OsmAnd використовує [схему PTv2](https://wiki.openstreetmap.org/wiki/Public_transport) для навігації. OsmAnd підтримує наступні маршрути OpenStreetMap для навігації: *автобус*, *тролейбус*, *маршрутне таксі*, *фунікулер*, *метро*, *легке метро*, *монорейка*, *потяг*, *трамвай*, *пором*. Швидкість за замовчуванням для кожного типу транспортного засобу налаштовується в [Routing xml](../../../technical/build-osmand/routing.md) і використовується для пошуку найшвидших маршрутів.

:::note
Маршрутизація громадського транспорту знаходиться на стадії тестування. Наразі ви можете будувати та переглядати свій маршрут без повної функції навігації.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Навігація громадським транспортом Android](@site/static/img/navigation/public/navigation_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Навігація громадським транспортом iOS](@site/static/img/navigation/public/navigation_ios.png)

</TabItem>

</Tabs>


## Як використовувати {#how-to-use}

Щоб розпочати навігацію містом громадським транспортом, скористайтеся [кнопкою навігації](../../widgets/map-buttons.md#directions) на екрані мапи або виберіть опцію навігації в *Головному меню*.  

**1.** Вам потрібно вибрати *профіль навігації громадським транспортом*, початкову та кінцеву точки.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Маршрути навігації громадським транспортом Android](@site/static/img/navigation/public/navigation_public_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Маршрути навігації громадським транспортом iOS](@site/static/img/navigation/public/navigation_public_ios.png)

</TabItem>

</Tabs>

**2.** OsmAnd пропонує варіанти маршрутів з часом пішої ходьби та маршрути громадського транспорту з інформацією про маршрут: час, відстань, пересадки та громадські маршрути. Вам потрібно прокрутити екран навігації, щоб вибрати потрібний варіант.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Шлях навігації громадським транспортом Android](@site/static/img/navigation/public/navigation_way_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Шлях навігації громадським транспортом iOS](@site/static/img/navigation/public/navigation_way_ios.png)

</TabItem>

</Tabs>

**3.** Ви можете переглянути всі можливі пропозиції маршрутів на мапі за допомогою кнопки *Показати на мапі*. Проведіть пальцем по екранах, щоб переглянути наступний варіант маршруту.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Деталі навігації громадським транспортом Android](@site/static/img/navigation/public/navigation_details_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Деталі навігації громадським транспортом iOS](@site/static/img/navigation/public/navigation_details_ios.png)

</TabItem>

</Tabs>


**4.** Натисніть кнопку "Деталі", щоб відкрити опис вибраного маршруту з усіма зупинками та пересадками.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Список зупинок навігації громадським транспортом Android](@site/static/img/navigation/public/navigation_stops_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Список зупинок навігації громадським транспортом iOS](@site/static/img/navigation/public/navigation_stops_list_ios.png)

</TabItem>

</Tabs>


## Дані та посібник {#data-and-guideline}

OsmAnd використовує нову схему громадського транспорту, також відому як Public Transport Version 2 (PTv2), для алгоритму навігації громадським транспортом OsmAnd.

- Ви можете перевірити свій громадський транспорт [тут](http://tools.geofabrik.de/osmi/).
- Посібник зі створення або налаштування маршрутів громадського транспорту доступний у нашому [блозі](https://osmand.net/blog/guideline-pt).
- Презентація [2019: Навігація громадським транспортом за допомогою OpenStreetMap від OsmAnd](https://www.youtube.com/watch?v=SPab09kaWPc&ab_channel=StateoftheMap).

> *Останнє оновлення: Червень 2024.*