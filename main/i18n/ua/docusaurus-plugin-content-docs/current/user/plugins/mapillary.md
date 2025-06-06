---
source-hash: 7748bf41551911fdb4490129f03e9db2f977da99530c4fa2b102a563988d8db8
sidebar_position: 6
title:  Mapillary
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

Щоб швидше орієнтуватися, в OsmAnd ви можете використовувати перегляд вулиць ваших маршрутів або цікавих місць, наданий [Mapillary](https://www.mapillary.com/) (потрібне підключення до Інтернету).

[Шар Mapillary](https://www.mapillary.com/) переносить зображення з рівня вулиць прямо в додаток OsmAnd, щоб ви могли легко оглядати околиці будь-якого цікавого місця або вздовж запланованого маршруту. Якщо зображення відсутні, ви можете додати їх самостійно, і інші зможуть їх використовувати. Ця функція з'явилася в результаті нашої співпраці з [командою Mapillary](https://www.mapillary.com/about), об'єднавши переваги обох додатків.


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб відобразити зображення з рівня вулиць на карті OsmAnd, потрібно зробити наступні налаштування:

1. Увімкніть [плагін Mapillary](../plugins/#enable--disable) у розділі *Плагіни* *Головного меню*.
2. Відобразіть [Зображення з рівня вулиць](#enable-layer) на карті для потрібного профілю в меню Налаштувати карту.


## Шар карти {#map-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Шар карти з вуличними зображеннями відображається на карті OsmAnd у вигляді рядів з'єднаних зелених точок.

- Фотографії користувачів Mapillary прикріплені до цих зелених точок.
- Натисніть на зелену точку на карті, щоб відкрити фотографію з видом вулиці. Фотографії також можна вибрати зі списку в [контекстному меню карти](#map-context-menu), якщо вони доступні.
- Після вибору екран програми розділяється на карту OsmAnd та вуличні зображення Mapillary.
- Ви можете застосувати [фільтри](#data-filtering), щоб вибрати фотографії, які ви хочете відобразити на карті.


### Увімкнути шар {#enable-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Щоб відобразити зображення з рівня вулиць Mapillary на карті, потрібно увімкнути цей шар у меню [Налаштувати карту](../map/configure-map-menu.md) у розділі *Показати*.

*Щоб отримати доступ: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.

:::note Переглядач фотографій Mapillary

- Натисніть кнопку *меню з трьома крапками* (&#8285;), щоб відкрити вибране зображення в додатку [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Натисніть стрілку, щоб переходити від зображення до зображення.
:::


### Фільтрація даних {#data-filtering}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Ви можете створити фільтр і вибрати, які фотографії відображати на карті. Наприклад, вибрати перегляд лише нещодавніх зображень або лише 360-градусних зображень.

*Щоб отримати доступ: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Кеш плиток
Якщо вибрані зображення не відображаються, скористайтеся **Перезавантажити** для **Кешу плиток**.
:::


## Контекстне меню карти {#map-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Якщо плагін Mapillary увімкнено, ви можете переглядати фотографії вулиць, доступні в радіусі 40 метрів від вибраної точки на карті. Фотографії відкриваються в [контекстному меню карти](../map/map-context-menu.md#online-photos).


## Додати фотографії {#add-photos}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Щоб додати фотографії, потрібно зареєструватися в [додатку Mapillary](https://www.mapillary.com/mobile-apps). Ви також можете додати фотографії до контекстного меню карти, натиснувши кнопку *Додати фотографії* в розділі [Онлайн фотографії](../map/map-context-menu.md#online-photos) контекстного меню карти. Потім відкриється додаток Mapillary.


## Віджет Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Виберіть панель → <Translate android="true" ids="mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → <Translate ios="true" ids="mapillary"/>*

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

[Віджет Mapillary](../widgets/info-widgets.md#mapillary-widget) використовується для швидкого доступу до додатка Mapillary. Віджет автоматично додається на головний екран, коли увімкнено плагін Mapillary. Ви можете увімкнути або вимкнути віджет Mapillary та інші віджети в меню [Налаштувати екран](../widgets/configure-screen.md).


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Цю статтю востаннє оновлено в жовтні 2024 року*