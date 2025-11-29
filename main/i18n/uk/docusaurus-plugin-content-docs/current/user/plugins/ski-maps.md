---
source-hash: f47abfa20a1e2094476033fa2ea73c6c94bc39f2fc7f0a5024cacdd02d47d391
sidebar_position: 13
title:  Вигляд карти лижних трас
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

Плагін "Вигляд карти лижних трас" в OsmAnd показує відомі та популярні схили, офіційно затверджені гірськолижні зони та карти трас більшості гірськолижних курортів. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) piste maps are the data source for OsmAnd ski maps. Поєднуючи векторні карти з растровими, лижна карта OsmAnd є дуже точною і буде корисною для інструкторів, альпіністів та любителів зимових видів спорту.

Лижна карта OsmAnd є частиною векторних карт і не потребує додаткових завантажень. За замовчуванням вона вимкнена. Лижна карта OsmAnd — це один зі [стилів карти](../map/vector-maps.md), який надає додаткові можливості, виділяючи одні об'єкти та роблячи інші менш помітними.  

Нижче показано два профілі: ліворуч — для катання на лижах, праворуч — для водіння автомобіля. Профіль "Лижі" виділяє траси, підйомники, зимові кольори та всі об'єкти карти, корисні для навігації в гірськолижній зоні.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Лижні карти в Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![Немає лижних карт в Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Лижні карти в iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![Немає лижних карт в iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Наступні налаштування дозволяють відобразити лижну карту OsmAnd на екрані:

1. Увімкніть [плагін "Вигляд карти лижних трас"](../plugins/index.md#enable--disable).  
2. Встановіть стиль карти [Зима та лижі](#set-winter-and-ski-map-style) для потрібного [профілю](../personal/profiles.md).  
3. За потреби [поєднайте карти](#combine-maps).  
  

### Встановити стиль карти "Зима та лижі" {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Увімкнути зимовий стиль в Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Стиль карти плагіна лижних карт Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Увімкнути зимовий стиль в iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Стиль карти плагіна лижних карт iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Стиль карти "Зима та лижі" виділяє траси, маршрути для скі-туру, санні траси та інформацію, пов'язану із зимою та лижами. Щоб відобразити стиль на карті, потрібно виконати наступні налаштування:

1. Виберіть потрібний [профіль](../personal/profiles.md).  
2. Відкрийте [Налаштувати карту](../map/configure-map-menu.md).  
3. Прокрутіть вниз до "Стиль карти/Тип карти", відкрийте його та виберіть **Зима та лижі**.

:::tip конфігурації
Профіль "Лижі" розроблений для використання в поєднанні зі стилями "Зима та лижі". Однак тип навігації для кожного конкретного профілю можна змінювати та встановлювати індивідуально, тому остаточна конфігурація профілю, стилю карти та навігації повністю залежить від ваших налаштувань.
:::


### Поєднання карт {#combine-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Без поєднання карт в Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![З поєднанням карт в Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Без поєднання карт в iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![З поєднанням карт в iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

[Векторна карта](../map/vector-maps.md) зі стилем [Зима та лижі](../map/vector-maps.md#winter-and-ski), включеним, може бути доповнена [лініями контуру](../plugins/topography.md#contour-lines) та [тіньовим рельєфом](../plugins/topography.md#hillshade-slope-and-altitude-layers). Нижче наведено два приклади. Траси на векторній карті за замовчуванням показані ліворуч, а траси на векторній карті, поєднаній з растровими картами *ліній контуру* та *тіньового рельєфу*, — праворуч. У другому випадку карта показує більше даних про висоту, що допомагає оцінити складність, ризик та відстань.  


### Вимкнути стиль лижної карти {#disable-ski-map-style}

Якщо ви бажаєте прибрати з карти траси та зимові кольори, або лижний сезон закінчився, виконайте одну з наступних дій:

- Зніміть прапорець зі стилю карти [Зима та лижі](#set-winter-and-ski-map-style) для потрібного профілю.  
- Змініть [профіль "Лижі"](../personal/profiles.md) на будь-який інший.
- Вимкніть [плагін "Вигляд карти лижних трас"](../plugins/index.md#enable--disable).


:::info видалення плагіна
Плагін "Вигляд карти лижних трас" є окремим додатком, і вимкнення його відображення не видаляє його. Якщо вам потрібно видалити його, перейдіть до налаштувань Android, використовуючи *Відкрити налаштування* в меню плагіна.  
:::


## Профіль "Лижі" {#skiing-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Профіль лиж в Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Профіль лиж в iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Стилі карти "Зима та лижі" можна увімкнути в будь-якому профілі. Але найціннішим він є в [профілі "Лижі"](../personal/profiles.md), де він встановлений за замовчуванням. Профіль "Лижі" дуже зручний для [навігації для лижників](../navigation/routing/ski-routing.md).


## Стиль лижної карти {#ski-map-style}

Для довідки використовуйте [легенду лижної карти](../../user/map-legend/ski-map.md). Вона допомагає визначити типи трас на карті, а також типи підйомників та інші характеристики, які можна прочитати з карти.

Читаючи карту, ви можете дізнатися важливі для вас деталі, такі як складність конкретної траси, її тип, чи проводиться підготовка траси та чи освітлюється вона вночі.

Описані тут опції доступні в [навігації для лижників](../navigation/setup/route-navigation.md). **Навігація для лижників** встановлює індивідуальні параметри маршруту, які застосовуються лише для катання на лижах.


:::info стиль візуалізації
Лижна карта OsmAnd побудована як один зі стилів візуалізації, який визначає, які об'єкти показувати на карті та їхній вигляд. Усі стилі візуалізації описані у файлі [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml). Правила, що визначають внутрішню структуру XML-файлу, дивіться в [документації з візуалізації](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Траси за складністю {#pistes-by-difficulty}

| Колір | Опис |
| --- | --- |
| ![Траса для початківців](@site/static/img/plugins/ski-maps/1c_green_1.png) | Зелений - Траса для початківців |
| ![Легкі схили](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Синій - Легкі схили |
| ![Схили середньої складності](@site/static/img/plugins/ski-maps/3c_red_1.png) | Червоний - Схили середньої складності |
| ![Підвищена складність](@site/static/img/plugins/ski-maps/4c_black_1.png) | Сірий - Схили підвищеної складності |
| ![Експертна складність](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Жовтий - Схили експертної складності |

Складність трас зазвичай позначається певними кольорами. Кольори можуть відрізнятися в різних країнах та на різних курортах. Нижче наведено деякі практичні рекомендації.

:::tip порада
Для отримання більш конкретних вказівок щодо кожного типу складності трас дивіться [довідник складності трас OSM](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) або будь-яке інше джерело, яке також враховує схили, перешкоди та небезпеки. У стилі карти "Зима та лижі" певні нанесені небезпеки (наприклад, зони, схильні до лавин, позначені як hazard=avalanche) можуть відображатися як POI небезпеки на карті та повинні враховуватися разом зі складністю траси. 
:::


### Траси за типами {#piste-by-types}

Траси розрізняються за типом. Тип представляє різні характеристики траси для задоволення вимог різних видів зимової активності: гірські лижі, класичне ковзання, сноубординг, катання на санях, беккантрі, скі-тур, могул, нічне катання тощо. Розуміння [типу траси](https://wiki.openstreetmap.org/wiki/Key:piste:type) на карті допомагає побудувати оптимальний маршрут навігації.

- **Траса для гірських лиж/альпійських лиж.**  
Використовується для навігації для лижників. Цей [тип траси](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) має напрямок і складність, і найчастіше він оточений межами гірськолижного курорту. Коли для навігації для лижників обирається гірськолижна траса, враховується її напрямок. Якщо точки відправлення та призначення встановлені протилежно до напрямку траси, навігація прокладається вздовж найближчого підйомника.

- **Траса для бігових лиж/беккантрі.**  
Також використовується для навігації для лижників. Цей [тип траси](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) не має складності, може мати або не мати напрямку, і найчастіше виходить за межі гірськолижного курорту. При навігації по трасах цього типу точки відправлення та призначення часто можна міняти місцями.

- **Траса для скі-туру.**  
Часто використовується лижниками для підйому на бігових лижах та спуску на гірських. Складність траси для скі-туру часто позначається відповідним кольором. Навігація для лижників може побудувати маршрут по трасі цього типу, що дозволяє комбінувати типи трас.

- **Інші лижні траси.**  
Типи трас, такі як *пішохідні стежки* або *санні траси*, можуть використовуватися для профілів "Лижі" або "Пішохід".


### Підготовка трас {#grooming-trails}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Увімкнути підготовку трас в Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Відображення підготовки трас в Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Увімкнути підготовку трас в iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Відображення підготовки трас в iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

Щоб перевірити на карті, чи підготовлена певна траса, потрібно увімкнути опцію **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** у списку **<Translate android="true" ids="rendering_category_details"/>**, що відкривається з меню [Налаштувати карту](../map/configure-map-menu.md).  
Спеціальні машини (ратраки) готують траси для відповідних видів діяльності, таких як класичне ковзання, ковзанярський спорт та інші. Одна і та ж траса може бути підготовлена по-різному на різних ділянках.

### Маршрути лижних схилів {#ski-slope-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Лижні схили та маршрути*

![Маршрути вимкнені в Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Маршрути увімкнені в Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)


</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/> → Лижні схили та маршрути*

![Маршрути вимкнені в iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Маршрути увімкнені в iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

Щоб дізнатися, по яких трасах за межами гірськолижного курорту можна прокладати маршрут, потрібно увімкнути опцію **Лижні схили та маршрути** у списку [**<Translate android="true" ids="rendering_category_routes"/>**](../map/routes.md), що відкривається з меню [Налаштувати карту](../map/configure-map-menu.md).  

З увімкненим профілем "Лижі", навігацією для лижників та стилем карти [Зима та лижі](../map/vector-maps.md#wister-and-ski) увімкненим, [лижні схили та маршрути](../map/vector-maps.md#ski-slopes-and-routes) показують усі типи трас, які навігація для лижників може використовувати для побудови маршрутів. Такі маршрути лижних схилів, якщо вони увімкнені, виділяються фіолетовим кольором переважно за межами гірськолижних курортів.  
При увімкненні опції [лижні схили та маршрути](../map/vector-maps.md#ski-slopes-and-routes) для стилю карти, відмінного від "Зима та лижі", відображаються лише схили. Інші функції, пов'язані з лижами, можуть не відображатися в цьому шарі стилізації.  
_Лижні схили та маршрути_ [є клікабельними](../map/routes.md#actions-with-routes).


### Нічний режим та освітлення {#night-and-lighting}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Увімкнути нічний режим та освітлення в Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Нічний режим та освітлення в Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Увімкнення нічного режиму та освітлення в iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Нічний режим та освітлення в iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

Стиль **Зима та лижі** можна використовувати з [нічним режимом або режимом сходу/заходу сонця](../map/vector-maps.md#map-mode). Зручний вибір для тих, хто віддає перевагу темним кольорам, або затемненню екрана вночі, а також для тих, хто практикує нічне катання. Разом з нічним режимом, лижні карти OsmAnd також можуть показувати, які траси мають освітлення, за допомогою опції [Вуличне освітлення](../map/vector-maps.md#details).  

Обидві опції знаходяться в меню [Налаштувати карту](../map/configure-map-menu.md).  

- Щоб увімкнути опцію ***Нічний режим***, прокрутіть список вниз:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- Щоб увімкнути опцію ***Вуличне освітлення***, відкрийте список **<Translate android="true" ids="rendering_category_details"/>** та увімкніть опцію:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)