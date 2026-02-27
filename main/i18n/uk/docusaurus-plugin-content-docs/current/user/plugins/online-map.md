---
source-hash: a5f171a6ac74a9d1a66cb38144cd58900587299bb8ac163d65951bdc9a1ca8f4
sidebar_position: 9
title:  Онлайн-карти
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

Онлайн-карти OsmAnd є значним доповненням до бази даних OpenStreetMap, яка вже є в додатку. За допомогою цього плагіна ви можете додавати на карту шари з інформацією з різних джерел, починаючи від супутникових знімків або туристичних маршрутів і закінчуючи дуже специфічними даними, такими як розташування пожежних гідрантів. Ви також можете змінити основне джерело карти з векторних карт на онлайн-тайли.


## Необхідні параметри налаштування {#required-setup-parameters}

Можливість використання онлайн-карт автоматично ввімкнена у версії OsmAnd для iOS. Щоб відображати онлайн-карти в Android, потрібно виконати наступні налаштування:

1. [Увімкніть](../plugins/index.md#enable--disable) плагін **Онлайн-карти** в *Головне меню → Плагіни → Онлайн-карти*.
2. Виконайте необхідні налаштування в розділі [Джерело карти](../map/raster-maps.md#layers) меню Налаштувати карту.
3. Встановіть *Джерело карти*, *Накладку* та *Підкладку* карти. Виберіть бажаного постачальника супутникових карт.
4. Завантажте вибрану [онлайн-карту](#how-to-prepare-raster-maps), якщо потрібно.


## Використання растрових карт на пристрої {#use-raster-maps-on-device}

Детальну інформацію про візуалізацію та налаштування растрових карт ви можете знайти в статті [Растрові карти](../map/raster-maps.md). Як використовувати:

1. [Виберіть](../map/raster-maps.md#layers) растрову карту як шар *Основний*, *Підкладки* або *Накладки*.
    - [Змініть](../map/raster-maps.md#overlay) параметри шару (прозорість).

2. [Підготуйте / скопіюйте](../map/raster-maps.md#preparecopy-maps) растрові карти на пристрій.
    - [Додайте нове онлайн-джерело растрової карти](../map/raster-maps.md#add-new-online-source)
    - [Додайте Magic URL](../map/raster-maps.md#magic-url-to-install-map-source) для встановлення джерела карти.

3. [Керуйте](../map/raster-maps.md#manage-map-data) растровими картами.
    - [Завантажте / оновіть тайли](../map/raster-maps.md#download--update-tiles).
    - [Змініть](../map/raster-maps.md#change-parameters) параметри растрової карти.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Як підготувати растрові карти {#how-to-prepare-raster-maps}

:::info
Основну статтю про підготовку карт читайте [тут](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Незважаючи на те, що плагін називається *Онлайн-карти*, ви також можете використовувати карти без підключення до інтернету. Вам просто потрібно зберегти частини карт (часто називаються тайлами), щоб використовувати їх пізніше. Для цього завантажте спеціальний [інструмент Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip), розроблений командою OsmAnd.

Виберіть область, яку потрібно завантажити, натисніть Preload area, потім встановіть найменший і найбільший рівні наближення, які ви хочете відображати, і завантажте тайли.
Для <b>версії Android</b> ви можете скопіювати їх у папку <i>osmand/tiles/*тип тайлу*</i> на вашому телефоні. Вам також потрібно відкрити <i>Налаштувати карту → Накладна карта</i> і вибрати онлайн-тайли OsmAnd.

Для <b>версії iOS</b> ви можете вибрати файл SQ Lite на вашому телефоні (будь-який месенджер або Dropbox), OsmAnd запропонує додати його. Вам також потрібно відкрити <i>Карта → Накладка / Підкладка або Тип карти</i> і вибрати нове джерело карти.

Як додати файл SQ Lite у версіях OsmAnd для Android та iOS, ви можете прочитати в <a href="https://anygis.ru/Web/Html/Osmand_en"><b>проєкті Anygis</b></a>.


Онлайн-тайли можуть бути корисними, коли вам потрібна лише невелика секція карти або конкретний її тип для використання в обмеженій області, але ви не хочете завантажувати всю регіон. Вони можуть стати в пригоді в нескінченних ситуаціях.

![Online Maps](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Maps](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Пов’язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

1. Онлайн-карти не з’являються в меню Джерело карти:  
  
    - Перевірте, чи увімкнено плагін Онлайн-карти: *Меню → Плагіни → Онлайн-карти*.  
    - Переконайтеся, що у вас є активне підключення до інтернету для доступу до супутникових знімків.  
    - Перевірте, чи завантажено вибрану онлайн-карту або чи потрібні [додаткові налаштування](../map/raster-maps.md#layers).