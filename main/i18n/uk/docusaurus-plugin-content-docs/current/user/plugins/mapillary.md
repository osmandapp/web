---
source-hash: c1e40198b8d078b7e3678c0105a5dc91442a1ca2f47b65d03facbd7ca77df64a
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

Щоб швидше орієнтуватися, в OsmAnd ви можете використовувати перегляд вулиць на ваших маршрутах або для цікавих місць, що надається [Mapillary](https://www.mapillary.com/) (потрібне підключення до Інтернету).  

[Шар Mapillary](https://www.mapillary.com/) додає зображення вулиць безпосередньо в додаток OsmAnd, тож ви можете легко оглядати околиці будь-якого цікавого місця або вздовж запланованого маршруту. Якщо зображення відсутні, ви можете додати їх самостійно, і ними зможуть користуватися інші. Ця функція з'явилася завдяки нашій співпраці з [командою Mapillary](https://www.mapillary.com/about), об'єднавши переваги обох додатків.


## Необхідні параметри налаштування {#required-setup-parameters}

Щоб відобразити зображення вулиць на мапі OsmAnd, вам потрібно зробити наступні налаштування:

1. Увімкніть [плагін Mapillary](../plugins/#enable--disable) у розділі *Плагіни* *Головного меню*.
2. Відобразіть [Зображення вулиць](#enable-layer) на мапі для потрібного профілю в меню Налаштувати мапу.


## Шар мапи {#map-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Точки плагіна Mapillary на мапі Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Точки плагіна Mapillary на мапі iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Шар мапи із зображеннями вулиць відображається на мапі OsmAnd у вигляді рядів з'єднаних зелених крапок.

- Фотографії користувачів Mapillary прикріплені до цих зелених крапок.
- Торкніться зеленої крапки на мапі, щоб відкрити фотографію з видом на вулицю. Фотографії також можна вибрати зі списку в [контекстному меню мапи](#map-context-menu), якщо вони доступні.
- Після вибору екран програми розділяється на мапу OsmAnd та зображення вулиць Mapillary.
- Ви можете застосувати [фільтри](#data-filtering), щоб вибрати фотографії, які ви хочете відображати на мапі.


### Увімкнути шар {#enable-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Плагін Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Зображення плагіна Mapillary Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Плагін Mapillary iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Зображення плагіна Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Щоб відобразити зображення вулиць Mapillary на мапі, вам потрібно увімкнути цей шар в меню [Налаштувати мапу](../map/configure-map-menu.md) у розділі *Показати*.  

*Доступ: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

:::note Переглядач фотографій Mapillary

- Натисніть кнопку *меню з трьома крапками* (&#8285;), щоб відкрити вибране зображення в додатку [**Mapillary**](https://www.mapillary.com/mobile-apps).
- Натискайте стрілку для переходу від зображення до зображення.
:::


### Фільтрація даних {#data-filtering}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Фільтр плагіна Mapillary Android](@site/static/img/plugins/mapillary/mapillary_config_map_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Фільтр плагіна Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Ви можете створити фільтр і вибрати, які фотографії відображати на мапі. Наприклад, вибрати для перегляду лише останні зображення або лише 360-градусні зображення.  

*Доступ: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*

:::note Кеш тайлів
Якщо вибрані зображення не відображаються, скористайтеся функцією **Перезавантажити** для **Кешу тайлів**.
:::


## Контекстне меню мапи {#map-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню мапи плагіна Mapillary Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню мапи плагіна Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Якщо плагін Mapillary увімкнено, ви можете переглядати фотографії вулиць, доступні в радіусі 40 метрів від вибраної точки на мапі. Фотографії відкриваються в [контекстному меню мапи](../map/map-context-menu.md#online-photos).


## Додати фотографії {#add-photos}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню мапи плагіна Mapillary Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Контекстне меню мапи плагіна Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

Щоб додати фотографії, вам потрібно зареєструватися в [додатку Mapillary](https://www.mapillary.com/mobile-apps). Ви також можете додати фотографії в контекстне меню мапи, натиснувши кнопку *Додати фотографії* в розділі [Онлайн фото](../map/map-context-menu.md#online-photos) контекстного меню мапи. Після цього відкриється додаток Mapillary.


## Віджет Mapillary {#mapillary-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → <Translate android="true" ids="mapillary"/>*

![Плагін Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Контекстне меню мапи плагіна Mapillary Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Оберіть панель → <Translate ios="true" ids="mapillary"/>*

![Контекстне меню мапи плагіна Mapillary iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

[Віджет Mapillary](../widgets/info-widgets.md#mapillary-widget) використовується для швидкого доступу до програми Mapillary. Віджет додається на головний екран автоматично, коли ввімкнено плагін Mapillary. Ви можете ввімкнути або вимкнути віджет Mapillary та інші віджети в меню [Налаштувати екран](../widgets/configure-screen.md).


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)