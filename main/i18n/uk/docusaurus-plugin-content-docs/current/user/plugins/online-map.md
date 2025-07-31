---
source-hash: e0f816c2ee06112779d7dbcf8e23176de7256a523ebca82309dd4e8a0dd894d4
sidebar_position: 8
title:  Онлайн-мапи
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

Онлайн-мапи OsmAnd є значним доповненням до бази даних OpenStreetMap, яка вже присутня в застосунку. За допомогою цього плагіна ви можете додавати шари до своєї мапи з інформацією з іншого джерела, починаючи з супутникового вигляду або туристичних маршрутів і закінчуючи дуже специфічними даними, такими як розташування пожежних гідрантів. Ви також можете змінити основне джерело мапи з векторних мап на онлайн-тайли.


## Необхідні параметри налаштування {#required-setup-parameters}

Можливість використання онлайн-мап автоматично вмикається у версії OsmAnd для iOS. Щоб відобразити онлайн-мапи в Android, потрібно зробити такі налаштування:

1. [Увімкнути](../plugins/index.md#enable--disable) плагін **Онлайн-мапи** у *Головному меню → Плагіни → Онлайн-мапи*.
2. Зробити необхідні налаштування в розділі [Джерело мапи](../map/raster-maps.md#select-raster-maps) меню Налаштувати мапу.
3. Встановити *Джерело мапи*, *Накладання* та *Підкладку* мапи. Вибрати бажаного постачальника супутникових мап.
4. Завантажити вибрану [Онлайн-мапу](#how-to-prepare-raster-maps) за потреби.


## Використання растрових мап на пристрої {#use-raster-maps-on-device}

Детальну інформацію про візуалізацію та налаштування растрових мап можна знайти в статті [Растрові мапи](../map/raster-maps.md). Як використовувати:

1. [Вибрати](../map/raster-maps.md#select-raster-maps) растрову мапу як *Основний*, *Підкладковий* або *Накладний* шар.
    - [Змінити](../map/raster-maps.md#how-to-use-raster-maps) параметри шару (прозорість).

2. [Підготувати / скопіювати](../map/raster-maps.md#prepare--copy-raster-maps-to-device) растрові мапи на пристрій.
    - [Додати нове джерело онлайн-растрових мап](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Додати Magic URL](../map/raster-maps.md#magic-url-to-install-map-source) для встановлення джерела мапи.

3. [Керувати](../map/raster-maps.md#manage-raster-maps) растровими мапами.
    - [Завантажити / оновити тайли](../map/raster-maps.md#download--update-tiles).
    - [Змінити](../map/raster-maps.md#change-raster-map-parameters) параметри растрової мапи.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Налаштувати підкладку / накладання Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Налаштувати підкладку / накладання iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## Як підготувати растрові мапи {#how-to-prepare-raster-maps}

:::info
Основна стаття для підготовки мап [читайте тут](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Незважаючи на те, що плагін називається *Онлайн-мапи*, ви можете використовувати мапи без підключення до інтернету. Вам просто потрібно зберегти частини мап (часто звані тайлами), щоб використовувати їх пізніше. Для цього завантажте спеціальний [інструмент Map Creator](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip), розроблений командою OsmAnd.

Виберіть область, яку потрібно завантажити, натисніть на Preload area, потім встановіть найменший і найбільший рівні масштабу, які ви хочете відобразити, і завантажте тайли.
Для <b>версії Android</b> ви можете скопіювати їх у папку <i>osmand/tiles/*тип тайлів*</i> на вашому телефоні. Вам також потрібно буде відкрити <i>Налаштувати мапу –. Накладання мапи</i> та вибрати онлайн-тайли OsmAnd.

Для <b>версії iOS</b> ви можете вибрати файл SQ Lite на своєму телефоні (будь-який месенджер або Dropbox), OsmAnd запропонує його додати. Вам також потрібно буде відкрити <i>Мапа → Накладання / Підкладка або Тип мапи</i> та вибрати нове джерело мапи.

Як додати файл SQ Lite у версіях OsmAnd для Android та iOS, ви можете прочитати в <a href="https://anygis.ru/Web/Html/Osmand_en"><b>проєкті Anygis</b></a>.


Онлайн-тайли можуть бути корисними, коли вам потрібна лише невелика ділянка мапи або її певний тип для використання в обмеженій області, але ви не хочете завантажувати весь регіон. Вони можуть стати в нагоді в безлічі ситуацій.

![Онлайн-мапи](@site/static/img/plugins/online-maps/map_creator.jpg)

![Онлайн-мапи](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мап)](../../user/map/vector-maps.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

1. Онлайн-мапи не відображаються в меню Джерело мапи:  
  
    - Перевірте, чи увімкнено плагін Онлайн-мапи: *Меню → Плагіни → Онлайн-мапи*.  
    - Переконайтеся, що у вас є активне підключення до Інтернету для доступу до супутникових знімків.  
    - Перевірте, чи завантажено вибрану Онлайн-мапу або чи потрібні [додаткові налаштування](../map/raster-maps.md#select-raster-maps).

> *Останнє оновлення: січень 2025*