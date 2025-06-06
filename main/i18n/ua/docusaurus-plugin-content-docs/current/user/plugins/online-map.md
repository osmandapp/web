---
source-hash: dc77f9a13bc0de823e328ba99cb54a84d78b64884307f9b98ccfcad5f6c1e73e
sidebar_position: 8
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

Онлайн-карти OsmAnd є значним доповненням до бази даних OpenStreetMap, яка вже присутня в застосунку. За допомогою цього плагіна ви можете додавати шари до своєї карти з інформацією з іншого джерела, починаючи з супутникового зображення або туристичних маршрутів і закінчуючи дуже специфічними даними, такими як розташування пожежних гідрантів. Ви також можете змінити основне джерело карти з векторних карт на онлайн-тайли.


## Необхідні параметри налаштування {#required-setup-parameters}

Можливість використання онлайн-карт автоматично ввімкнена у версії OsmAnd для iOS. Щоб відображати онлайн-карти в Android, потрібно зробити наступні налаштування:

1. [Увімкніть](../plugins/index.md#enable--disable) плагін **Онлайн-карти** в *Головному меню → Плагіни → Онлайн-карти*.
2. Зробіть необхідні налаштування в розділі [Джерело карти](../map/raster-maps.md#select-raster-maps) меню Налаштувати карту.
3. Встановіть *Джерело карти*, *Накладення* та *Підкладку*. Виберіть бажаного постачальника супутникових карт.
4. Завантажте вибрану [Онлайн-карту](#how-to-prepare-raster-maps), якщо потрібно.


## Використання растрових карт на пристрої {#use-raster-maps-on-device}

Детальну інформацію про візуалізацію та налаштування растрових карт можна знайти в статті [Растрові карти](../map/raster-maps.md). Як використовувати:

1. [Виберіть](../map/raster-maps.md#select-raster-maps) растрову карту як *Основний*, *Підкладковий* або *Накладений* шар.
    - [Змініть](../map/raster-maps.md#how-to-use-raster-maps) параметри шару (прозорість).

2. [Підготуйте / скопіюйте](../map/raster-maps.md#prepare--copy-raster-maps-to-device) растрові карти на пристрій.
    - [Додайте нове джерело онлайн-растрових карт](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Додайте Magic URL](../map/raster-maps.md#magic-url-to-install-map-source) для встановлення джерела карти.

3. [Керуйте](../map/raster-maps.md#manage-raster-maps) растровими картами.
    - [Завантажте / оновіть тайли](../map/raster-maps.md#download--update-tiles).
    - [Змініть](../map/raster-maps.md#change-raster-map-parameters) параметри растрової карти.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Налаштування підкладки / накладення Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Налаштування підкладки / накладення iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Як підготувати растрові карти {#how-to-prepare-raster-maps}

:::info
Основна стаття про підготовку карт [читайте тут](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Незважаючи на те, що плагін називається *Онлайн-карти*, ви також можете використовувати карти без підключення до Інтернету. Вам просто потрібно зберегти частини карт (часто звані тайлами), щоб використовувати їх пізніше. Для цього завантажте спеціальний [інструмент Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip), розроблений командою OsmAnd.

Виберіть область, яку потрібно завантажити, натисніть на Preload area, потім встановіть найменший і найбільший рівні масштабу, які ви хочете відобразити, і завантажте тайли.
Для <b>версії Android</b> ви можете скопіювати їх до папки <i>osmand/tiles/*тип тайлів*</i> на вашому телефоні. Вам також потрібно буде відкрити <i>Налаштувати карту - Накладена карта</i> та вибрати онлайн-тайли OsmAnd.

Для <b>версії iOS</b> ви можете вибрати файл SQ Lite на своєму телефоні (будь-який месенджер або dropbox), OsmAnd запропонує його додати. Вам також потрібно буде відкрити <i>Карта → Накладення / Підкладка або Тип карти</i> та вибрати нове джерело карти.

Як додати файл SQ Lite у версіях OsmAnd для Android та iOS, ви можете прочитати в <a href="https://anygis.ru/Web/Html/Osmand_en"><b>проєкті Anygis</b></a>.


Онлайн-тайли можуть бути корисними, коли вам потрібен лише невеликий розділ карти або її специфічний тип для використання в обмеженій області, але ви не хочете завантажувати весь регіон. Вони можуть стати в нагоді в нескінченних ситуаціях.

![Онлайн-карти](@site/static/img/plugins/online-maps/map_creator.jpg)

![Онлайн-карти](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

1. Онлайн-карти не відображаються в меню Джерело карти:  
  
    - Переконайтеся, що плагін Онлайн-карти ввімкнено: *Меню → Плагіни → Онлайн-карти*.  
    - Переконайтеся, що у вас є активне підключення до Інтернету для доступу до супутникових зображень.  
    - Перевірте, чи завантажено вибрану Онлайн-карту або чи потрібні [додаткові налаштування](../map/raster-maps.md#select-raster-maps).

> *Цю статтю востаннє оновлено в січні 2025 року*