---
source-hash: f14066ee1c93315ba000b7389de0d0c6a42230c90308779a1b3a10e9a16d1fc7
sidebar_position: 13
title:  Перегляд лижної мапи
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

Плагін OsmAnd Ski Map view показує відомі та популярні схили, офіційно затверджені гірськолижні зони та мапи трас більшості гірськолижних курортів. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) є джерелом даних для лижних мап OsmAnd. Поєднуючи векторні мапи з растровими, лижна мапа OsmAnd є дуже точною і буде корисною для інструкторів, альпіністів та любителів зимових видів спорту.

Лижна мапа OsmAnd є частиною векторних мап і не потребує додаткового завантаження. За замовчуванням вона вимкнена. Лижна мапа OsmAnd є одним зі [Стилів мапи](../map/vector-maps.md), що надає додаткові можливості, виділяючи одні об'єкти та роблячи інші менш помітними.

Нижче показано два профілі: ліворуч — для катання на лижах, праворуч — для водіння. Профіль "Лижі" виділяє траси, повітряні шляхи, зимові кольори та всі об'єкти мапи, корисні для навігації в гірськолижній зоні.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Лижні мапи в Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Без лижних мап в Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Лижні мапи в iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Без лижних мап в iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Наступні налаштування дозволяють відобразити лижну мапу OsmAnd на екрані:

1. Увімкніть [плагін "Перегляд лижної мапи"](../plugins/index.md#enable--disable).
2. Встановіть стиль мапи [Зима та лижі](#set-winter-and-ski-map-style) для потрібного [профілю](../personal/profiles.md).
3. За необхідності [об'єднайте мапи](#combine-maps).


### Встановіть стиль мапи Зима та лижі {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*

![Увімкнути зимовий стиль в Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Стиль мапи плагіна лижних мап Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*

![Увімкнути зимовий стиль в iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Стиль мапи плагіна лижних мап iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Стиль мапи "Зима та лижі" виділяє траси, маршрути для скітуру, санні траси та інформацію, пов'язану із зимою та катанням на лижах. Щоб відобразити стиль на мапі, потрібно зробити наступні налаштування:

1. Виберіть потрібний [профіль](../personal/profiles.md).
2. Відкрийте [Налаштувати мапу](../map/configure-map-menu.md).
3. Прокрутіть вниз до Стиль мапи/Тип мапи, відкрийте його та встановіть прапорець **Зима та лижі**.

:::tip конфігурації
Профіль "Лижі" призначений для використання в поєднанні зі стилями "Зима та лижі". Однак тип навігації для кожного конкретного профілю можна змінити та встановити індивідуально, тому остаточна конфігурація профілю, стилю мапи та навігації повністю залежить від ваших налаштувань.
:::


### Об'єднати мапи {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Без комбінації мап в Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![З комбінацією мап в Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Без комбінації мап в iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![З комбінацією мап в iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

[Векторну мапу](../map/vector-maps.md) зі стилем мапи [Зима та лижі](../map/vector-maps.md#winter-and-ski) можна доповнити [Контурними лініями](../plugins/topography.md#show-contour-linesterrain) та [Затіненням рельєфу](../plugins/topography.md#hillshade-map). Нижче наведено два приклади. Ліворуч показано траси на стандартній векторній мапі, а праворуч — траси на векторній мапі в поєднанні з растровою мапою *Контурні лінії* та *Затінення рельєфу*. У другому випадку мапа показує більше даних про висоту, що допомагає оцінити складність, ризик та відстань.


### Вимкнути стиль лижної мапи {#disable-ski-map-style}

Якщо ви віддаєте перевагу видаленню трас та зимових кольорів з мапи, або лижний сезон закінчився, зробіть одне з наступного:

- Зніміть прапорець зі стилю мапи [Зима та лижі](#set-winter-and-ski-map-style) для потрібного профілю.
- Змініть [профіль Лижі](../personal/profiles.md) на будь-який інший профіль.
- Вимкніть [плагін Перегляд лижної мапи](../plugins/index.md#enable--disable).


:::info видалити плагін
Плагін "Перегляд лижної мапи" є окремою програмою, і вимкнення його відображення не видаляє його. Якщо вам потрібно його видалити, перейдіть до налаштувань Android за допомогою пункту *Відкрити налаштування* в меню плагіна.
:::


## Профіль Лижі {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Контури морських глибин в Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Контури глибин в iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Стилі мапи "Зима та лижі" можна увімкнути в будь-якому профілі. Але найбільшу цінність вони мають у [профілі Лижі](../personal/profiles.md), де вони встановлені за замовчуванням. Профіль "Лижі" дуже зручний для [лижної навігації](../navigation/routing/ski-routing.md).


## Стиль лижної мапи {#ski-map-style}

Використовуйте [Легенду лижної мапи](../../user/map-legend/ski-map.md) для будь-якої довідки. Вона допомагає визначити типи трас на мапі, а також типи повітряних шляхів та інші характеристики, які можна прочитати з мапи.

Читаючи мапу, ви можете дізнатися важливі для вас деталі, такі як складність конкретної траси, тип траси, чи проводиться підготовка, та чи освітлена траса вночі.

Описані тут опції доступні в [лижній навігації](../navigation/setup/route-navigation.md). **Лижна навігація** встановлює індивідуальні опції маршруту, які застосовуються лише до катання на лижах.


:::info стиль відображення
Лижна мапа OsmAnd побудована як один зі стилів відображення, який визначає, які об'єкти показувати на мапі та їхній вигляд. Усі стилі відображення описані у файлі [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Правила, що визначають внутрішню структуру XML-файлу, дивіться в [документації з відображення](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Траси за складністю {#pistes-by-difficulty}

| Колір | Опис |
| --- | --- |
| ![Траса для початківців](@site/static/img/plugins/ski-maps/1c_green_1.png) | Зелений - Траса для початківців |
| ![Легкі схили](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Синій - Легкі схили |
| ![Схили середньої складності](@site/static/img/plugins/ski-maps/3c_red_1.png) | Червоний - Схили середньої складності |
| ![Підвищена складність](@site/static/img/plugins/ski-maps/4c_black_1.png) | Сірий - Схили підвищеної складності |
| ![Експертна складність](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Жовтий - Схили експертної складності |

Складність трас зазвичай позначається певними кольорами. Кольори можуть відрізнятися в різних країнах та на курортах. Нижче наведено деякі практичні рекомендації.

:::tip керівництво
Для більш конкретних рекомендацій щодо кожного типу складності траси дивіться [довідник OSM щодо складності трас](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) або будь-яке інше джерело, яке також враховує схили, перешкоди та небезпеки.
:::


### Траси за типами {#piste-by-types}

Траси відрізняються за типом. Тип представляє різні характеристики траси для задоволення вимог різних зимових видів діяльності: гірськолижний спорт, класичний ковзанярський спорт, сноубординг, катання на санках, беккантрі, скітур, могул, нічне катання на лижах тощо. Розуміння [типу траси](https://wiki.openstreetmap.org/wiki/Key:piste:type) на мапі допомагає побудувати оптимальний навігаційний маршрут.

- **Траса для спуску/гірськолижного спорту.**
Використовується для лижної навігації. Цей [тип траси](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) має напрямок та складність, і найчастіше він оточений межами гірськолижного курорту. При виборі траси для спуску для лижної навігації враховується напрямок траси. Якщо точки відправлення та призначення встановлені протилежно напрямку траси, навігація здійснюється найближчим повітряним шляхом.

- **Траса для нордичного/беккантрі катання на лижах.**
Також використовується для лижної навігації. Цей [тип траси](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) не має складності, може мати або не мати напрямок, і найчастіше виходить за межі гірськолижного курорту. При навігації цим типом трас точки відправлення та призначення часто можна міняти місцями.

- **Траса для скітуру.**
Часто використовується лижниками для нордичного підйому та спуску. Складність траси для скітуру часто позначається відповідним кольором. Лижна навігація може побудувати маршрут цим типом траси, що дозволяє поєднувати типи трас.

- **Інші лижні траси.**
Типи трас, такі як *Пішохідні стежки* або *Санні траси*, можуть використовуватися для лижних або пішохідних профілів.


### Підготовка трас {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Увімкнути підготовку в Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Підготовка відображається в Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Увімкнути підготовку в iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Підготовка відображається в iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Щоб перевірити на мапі, чи підготовлена конкретна траса, потрібно увімкнути опцію **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** у списку **<Translate android="true" ids="rendering_category_details"/>**, який відкривається з меню [Налаштувати мапу](../map/configure-map-menu.md).
Спеціальні машини готують траси для відповідної діяльності, такої як класичний ковзанярський спорт, ковзанярський спорт на льоду та інші. Одна й та сама траса може бути підготовлена по-різному в різних районах.

### Маршрути лижних схилів {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Маршрути вимкнено в Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Маршрути увімкнено в Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Маршрути вимкнено в iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Маршрути увімкнено в iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Щоб дізнатися, якими трасами за межами гірськолижного курорту можна здійснювати навігацію, потрібно увімкнути опцію **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** у списку **<Translate android="true" ids="rendering_category_routes"/>**, який відкривається з меню [Налаштувати мапу](../map/configure-map-menu.md).

При увімкненому профілі "Лижі", лижній навігації та стилі мапи [Зима та лижі](../map/vector-maps.md#winter-and-ski), маршрути [лижних схилів](../map/vector-maps.md#routes) показують усі типи трас, які лижна навігація може використовувати для побудови навігаційних маршрутів. Такі маршрути лижних схилів, якщо увімкнені, окреслені фіолетовим кольором переважно за межами гірськолижного курорту.


### Ніч та освітлення {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Увімкнути нічний режим та освітлення в Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Ніч та освітлення в Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Увімкнення нічного режиму та освітлення в iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Ніч та освітлення в iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Стиль **Зима та лижі** можна використовувати з [нічним режимом або режимом сходу/заходу сонця](../map/vector-maps.md#map-mode). Зручний вибір для тих, хто віддає перевагу темним кольорам або затемненню екрана вночі, а також для тих, хто займається нічним катанням на лижах. Разом з нічним режимом, лижні мапи OsmAnd також можуть показувати, які траси мають освітлення, за допомогою опції [Вуличне освітлення](../map/vector-maps.md#details).

Обидві опції знаходяться в меню [Налаштувати мапу](../map/configure-map-menu.md).

- Щоб увімкнути опцію ***Нічний режим***, прокрутіть список вниз:
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*

- Щоб увімкнути опцію ***Вуличне освітлення***, відкрийте список **<Translate android="true" ids="rendering_category_details"/>** та увімкніть опцію:
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)

> *Останнє оновлення: грудень 2024*