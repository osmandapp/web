---
source-hash: 5ea4f39511656fdb1c0f82a7a7dd625d84541afc04cd5b239076bb4ba1bdd62c
sidebar_position: 2
title: Екран карти під час навігації
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

У цій статті описано, як налаштувати вигляд карти під час навігації. Це включає такі функції, як відображення [POI вздовж маршруту](#show-points-along-the-route), використання [екранних сповіщень](#screen-alerts), [вигляд лінії маршруту](#route-line-appearance), включаючи колір, ширину та стрілки поворотів. Ці функції тісно пов'язані з [налаштуваннями навігації маршрутом](../setup/route-navigation.md#settings).


## Карта під час навігації {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Екран карти під час навігації](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Екран карти під час навігації](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Під час навігації карта є візуальним інструментом для визначення вашого місцезнаходження, пункту призначення, планування маршруту та перегляду навігаційних вказівок. Для цього ви можете використовувати масштабування, а також перетягувати та повертати карту за потреби. Карта також може відображати інформацію про дороги, назви вулиць, будівлі та інші об'єкти, щоб допомогти вам легко визначити свій маршрут.  

Під час навігації вигляд карти налаштовується відповідно до обраного профілю навігації. Перед початком навігації переконайтеся, що вигляд карти відповідає вашим уподобанням щодо того, як вона повинна функціонувати під час руху.

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Час, протягом якого вигляд карти синхронізується з поточним положенням після переміщення. | *Значення:* <br /> Ніколи, 5 сек, 10 сек, 15 сек, 20 сек, 25 сек, 30 сек, 45 сек, 60 сек, 50 сек.|
| *<Translate android="true" ids="auto_zoom_map"/>*  | Автоматично масштабувати карту відповідно до вашої швидкості, доки карта синхронізована з вашим поточним положенням. | *Значення:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - масштабування вручну. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - масштаб 200 м.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - масштаб 100 м. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - масштаб 5 м. |
| *<Translate android="true" ids="snap_to_road"/>*  | Іконка поточного місцезнаходження буде прив'язана до поточного навігаційного маршруту. | Ви можете вимкнути цю опцію, але всі пов'язані з дорогою опції, такі як відображення смуг руху, також не будуть видимі під час навігації. |
| *<Translate android="true" ids="approximate_bearing"/>* | Визначає напрямок на основі навігаційного маршруту, яким ви рухаєтесь. | Налаштування видно лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md). <br /> Ці налаштування слід увімкнути, якщо орієнтація карти напрямку перевертається або тремтить під час використання [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Точки вздовж маршруту {#show-points-along-the-route}

Налаштування *Показувати вздовж маршруту* дозволяє налаштувати додаткові параметри маршруту і є обов'язковим для роботи таких віджетів, як [Назва вулиці](../../widgets/nav-widgets#street-name) та [Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget). Опції включають відображення [**POI**](#points-of-interest-pois) та [**Моїх улюблених місць**](#my-favorites) вздовж маршруту або їх використання як доповнення до вже налаштованих для профілю, а також відображення повного списку [**Дорожніх попереджень**](#traffic-warnings) вздовж маршруту.  

- Можливість встановлювати різні відстані (до 5 км, або 3,11 милі, залежно від встановлених вами [одиниць вимірювання довжини](../../personal/profiles.md#units--formats)) від маршруту до найближчих точок є корисною при використанні таких типів маршрутизації, як [Пряма лінія](../routing/straight-line-routing.md) або [Напряму до точки](../routing/direct-to-point-routing.md).
- Для налаштування *Показувати вздовж маршруту* рекомендується використовувати [Голосові підказки](../guidance/voice-navigation.md) для навігації.
- *POI, Улюблені місця та Дорожні попередження* не відображаються у списку для вже пройденого маршруту.


### Перегляд та вибір точок {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![точки вздовж маршруту](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Показувати вздовж маршруту*

![точки вздовж маршруту](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Коли ви створюєте маршрут, ви можете встановити типи точок, які будуть відображатися вздовж маршруту в розділі *Навігація*.


### Цікаві місця (POI) {#points-of-interest-pois}

![Шар POI Android](@site/static/img/map/poi_overlay_android.png) ![Шар POI iOS](@site/static/img/map/poi_overlay_ios.png)

Налаштування POI в [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) пов'язані з налаштуванням **Показувати вздовж маршруту**. По суті, це додаткове налаштування для відображення POI на карті, безпосередньо пов'язане зі створеним маршрутом.  

Коли ви вказуєте відображення певних POI в *Налаштуваннях карти*, всі вони відображаються на завантажених вами картах, незалежно від того, чи вибрали ви категорії, чи, якщо вам не важлива категорія, вибрали найближчі POI.  

- Кількість та ідентифікація POI *залежить від масштабу*.

- Налаштування *Показувати вздовж маршруту* відображає ту ж категорію, що і в *шарі POI*, але ви бачите *весь список* вибраних POI одразу, починаючи з точки поточного місцезнаходження на заданій відстані в межах вашого маршруту.  

- Ви можете видалити непотрібні POI зі списку або відредагувати їх у [Контекстному меню](../../map/map-context-menu.md), торкнувшись одного з них.

- Список містить вибрані [типи POI](../../map/point-layers-on-map.md#poi-types) та коротку інформацію про кожен з них, таку як *іконка типу, назва, відстань від поточної точки місцезнаходження до POI вздовж маршруту*, а також *вказівки, з якого боку маршруту по прямій лінії і на якій відстані знаходиться POI*.  


### Мої улюблені місця {#my-favorites}

Список містить усі раніше додані [Улюблені](../../personal/favorites.md#favorite-point) точки поблизу створеного вами маршруту. Як і у випадку з POI, ви можете вибрати відстань, на якій знаходяться ці точки.  

- Якщо ви [вимкнете відображення Улюблених місць на карті](../../map/configure-map-menu.md), вони не зникнуть зі списку і продовжуватимуть відображатися у [віджеті](../../widgets/nav-widgets.md#street-name) та озвучуватися при наближенні до них.

- Ви можете додавати свої *Улюблені точки* на карту не тільки заздалегідь, але й під час руху по маршруту.

- *Щоб оновити список*, вимкніть і знову увімкніть "Мої улюблені місця".

- Кожна точка містить назву або координати, групу, відстань від поточної точки місцезнаходження до *Улюбленого місця* безпосередньо на лінії маршруту, інформацію про те, наскільки далеко праворуч або ліворуч від лінії знаходиться точка, і напрямок маршруту.


### Дорожні попередження {#traffic-warnings}

*Дорожні попередження* не відображаються безпосередньо на карті, як *POI* або *Мої улюблені місця*.

- **Щоб увімкнути** цю опцію та бачити попередження, ви повинні спочатку увімкнути та налаштувати [Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget).

- Вибір відображення *Дорожніх попереджень* вздовж маршруту дозволяє побачити весь список безпосередньо перед початком руху, що корисно при плануванні поїздки.

- Ви можете видалити непотрібні сповіщення зі списку або торкнутися назви сповіщення, щоб [відредагувати місцезнаходження](../../map/map-context-menu.md#avoid-road).


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Сповіщення, такі як дорожні попередження або обмеження швидкості, з'являтимуться на екрані у вигляді віджета. Вони з'являються в лівому нижньому куті під час навігації. | [Типи віджетів сповіщень](../../widgets/nav-widgets.md#alert-widget) |


## Вигляд лінії маршруту {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Навігаційний маршрут Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Навігаційний маршрут iOS](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Ви можете вибрати вигляд лінії маршруту за стилем або вручну вибрати колір, ширину та прозорість лінії. Крім того, ви можете вибрати, чи показувати на лінії стрілки поворотів та стрілки напрямку.

**Додатково**: налаштування "Налаштувати лінію маршруту" дозволяє налаштувати вигляд лінії маршруту для відображення перепадів висот, значних підйомів або спусків, ожеледиці на дорозі, ґрунтових доріг, автомагістралей та інших можливих перешкод. Ви також можете вибрати або створити власні [колірні схеми](../../personal/color-palette-schemes.md#routes) для застосування до лінії маршруту.


:::note
 <ProFeature/> Деякі параметри можна використовувати лише з <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">підпискою OsmAnd Pro</a>.
:::


### Колір {#color}

Налаштування **Колір** змінює колірні тони ліній маршруту. Їх загальний колір змінюється залежно від обраного типу з колекції OsmAnd та відповідно до **Легенди карти**. Крім того, їх колір стає таким, який ви встановите вручну, включаючи прозорість.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується з кольорами за замовчуванням. Повний опис кольорів дивіться у статті [Стилі карти за замовчуванням](../../map/vector-maps.md#default-map-styles).  
    ![стиль карти](@site/static/img/navigation/route/map_st_2.png)

- ***Користувацький***. Дозволяє вибрати лінію будь-якого бажаного кольору та прозорості. Ви можете вибрати різні налаштування для денної та нічної карти окремо.  
    ![користувацький](@site/static/img/navigation/route/custom.png)   ![користувацький](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Показує висоту точки маршруту у вигляді **зелено-жовто-червоного** градієнта. **Зелений** колір позначає найнижчу точку маршруту, **жовтий** - середню висоту точки, а **червоний** - найвищу. Якщо різниця висот на маршруті менше 100 метрів, градієнт застосовується частково або не застосовується, наприклад, для простого підйому з 100 до 150 метрів - градієнт буде **зелено-жовтим**. Зауважте, що колір не відображає абсолютне значення висоти.  
    ![Висота](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Лінія маршруту забарвлюється в різні кольори залежно від профілю висот маршруту. Детальний опис наведено у статті *Плагін "Топографія"*, розділ [Ухил](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Ухил](@site/static/img/navigation/route/Slope.png)   ![Ухил](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Забарвлює лінію маршруту або треку відповідно до *класифікації доріг*. Детальний опис наведено в розділі *Векторні карти - [Стиль доріг](../../map/vector-maps.md#road-style)*.  
    ![Тип дороги](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Надає інформацію про фізичне покриття дороги або стежки. Детальний опис можна знайти у статті *Стиль карти OsmAnd - [Поверхня](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда карти*.  
    ![Поверхня](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Класифікація прохідності доріг або стежок для колісних транспортних засобів, особливо щодо рівності та гладкості поверхні. Детальний опис можна знайти у статті *Стиль карти OsmAnd - [Гладкість](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда карти*.  
    ![Гладкість](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Забарвлює лінію маршруту або треку відповідно до *класифікації зимових доріг*. Детальний опис можна знайти у статті *Векторні карти*, розділ [Зимові та льодові дороги](../../map/vector-maps.md#winter-and-ski).  
    ![Зима](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Забарвлення лінії маршруту або стежки за складом покриття. Зазвичай використовується, коли дорожня мережа переважно не асфальтована. Детальний опис можна знайти у статті *Стиль карти OsmAnd - [Твердість поверхні](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда карти*.  
    ![Твердість](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Складність кінних стежок***. Відображення стежок відповідно до складності кінних маршрутів.  
    ![Складність](@site/static/img/navigation/route/firmness.png)


### Ширина {#width}

Ви можете налаштувати ширину лінії маршруту, щоб вона відповідала дорозі або стежці, що відображається на карті. Для більш чіткої візуальної ідентифікації ви можете вручну збільшити або зменшити ширину лінії за потреби. Для отримання додаткової інформації зверніться до статті *Треки та маршрути — [Зовнішній вигляд](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується з шириною за замовчуванням, встановленою OsmAnd. Повний опис можна знайти у статті *Векторні карти*, розділ [Стиль карти](../../map/vector-maps.md#default-map-styles).  
    ![стиль карти](@site/static/img/navigation/route/map_st_2.png)

- ***Тонка, середня та жирна ширина***. Ви можете вибрати ширину лінії, щоб вона відповідала ширині дороги, або сильніше виділити лінію маршруту на карті.  
    ![ширина](@site/static/img/navigation/route/width_med.png)

- ***Користувацька***. Дозволяє відображати лінію потрібної вам ширини. Використовуйте повзунок для вибору ширини.  
    ![користувацька](@site/static/img/navigation/route/custom_2.png)  


### Стрілки поворотів {#turn-arrows}

Налаштування "Стрілки поворотів" дозволяє вибрати, чи відображатимуться стрілки поворотів на лінії маршруту.  

- ***На карті***  
    ![Стрілки на карті Android](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![Стрілки на карті iOS](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***У додатку***  
    ![Стрілки в додатку Android](@site/static/img/navigation/route/turn_arr.png)   ![Стрілки в додатку iOS](@site/static/img/navigation/route/turn_arr_ios.png)


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](../setup/route-navigation.md)
- [Навігація за треком](../setup/gpx-navigation.md)
- [Навігація за маркерами](../setup/markers-navigation.md)
- [Деталі маршруту](../setup/route-details.md)
- [Налаштування навігації](./navigation-settings.md)
- [Голосові підказки / Сповіщення](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)