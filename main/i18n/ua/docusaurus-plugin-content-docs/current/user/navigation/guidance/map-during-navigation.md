---
source-hash: fd5bcd702244f06b6dcda0375fdef2aba27fb94fa81bb7fc1ef7d80191482605
sidebar_position: 1
title: Екран мапи під час навігації
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
## Огляд {#overview}
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
У цій статті описано, як налаштувати вигляд мапи під час навігації. Це включає такі функції, як відображення [POI вздовж маршруту](#show-points-along-the-route), використання [екранних сповіщень](#screen-alerts), [вигляд лінії маршруту](#route-line-appearance), включаючи колір, ширину та стрілки повороту. Ці функції тісно пов'язані з [налаштуваннями навігації за маршрутом](../setup/route-navigation.md#settings).
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

import Translate from '@site/src/components/Translate.js';

import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
## Мапа під час навігації {#map-during-navigation}
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Map screen during navigation](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Map screen during navigation](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Під час навігації мапа є візуальним інструментом для визначення вашого положення, ідентифікації пункту призначення, планування маршруту та перегляду навігаційних вказівок. Ви можете використовувати масштабування для цього та перетягувати й обертати мапу за потреби. Мапа також може відображати інформацію про дороги, назви вулиць, будівлі та інші об'єкти, щоб допомогти вам легко визначити свій маршрут.  

Під час навігації вигляд мапи налаштовується відповідно до вибраного профілю навігації. Перед початком навігації переконайтеся, що вигляд мапи відповідає вашим уподобанням щодо того, як вона має функціонувати під час руху.

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Час, протягом якого вигляд мапи синхронізується з поточною позицією після руху. | *Значення:* <br /> Ніколи, 5 сек, 10 сек, 15 сек, 20 сек, 25 сек, 30 сек, 45 сек, 60 сек, 50 сек. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Автоматично масштабувати мапу відповідно до вашої швидкості, доки мапа синхронізована з вашою поточною позицією. | *Значення:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - масштабування вручну. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - масштабування 200 м. <br /> *<Translate android="true" ids="auto_zoom_far"/>* - масштабування 100 м. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - масштабування 5 м. |
| *<Translate android="true" ids="snap_to_road"/>* | Іконка поточної позиції буде асоціюватися з поточним навігаційним маршрутом. | Ви можете вимкнути цю опцію, але всі опції, пов'язані з дорогою, такі як відображення смуг, також не будуть видимі під час навігації. |
| *<Translate android="true" ids="approximate_bearing"/>* | Визначає напрямок на основі навігаційного маршруту, яким ви рухаєтеся. | Налаштування видно лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md). <br /> Ці налаштування слід увімкнути, якщо орієнтація мапи напрямку перевернута або тремтить під час використання [Android Auto](../auto-car.md#issues). |


## Показати точки вздовж маршруту {#show-points-along-the-route}

Налаштування *Показати вздовж маршруту* дозволяє налаштувати додаткові параметри маршруту та необхідне для роботи таких віджетів, як [Назва вулиці](../../widgets/nav-widgets#street-name) та [Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget). Опції включають відображення [**POI**](#points-of-interest-pois) та [**Моїх улюблених**](#my-favorites) вздовж маршруту або використання їх як доповнення до тих, що вже налаштовані для профілю, а також відображення повного списку [**Попереджень про дорожній рух**](#traffic-warnings) вздовж маршруту.  

- Можливість встановлення різних відстаней (до 5 км, або 3,11 миль, залежно від встановленої вами [одиниці довжини](../../personal/profiles.md#units--formats)) від маршруту до найближчих точок корисна при використанні таких типів маршрутизації, як [Пряма лінія](../routing/straight-line-routing.md) або [Прямо до точки](../routing/direct-to-point-routing.md).
- Для налаштування *Показати вздовж маршруту* рекомендується використовувати [Голосові підказки](../guidance/voice-navigation.md) для навігації.
- *POI, Улюблені та Попередження про дорожній рух* не відображаються у списку для маршруту, який ви вже проїхали.


### Перегляд та вибір точок {#view-and-select-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![points along the route](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Показати вздовж маршруту*

![points along the route](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

При створенні маршруту в розділі *Навігація* можна встановити типи точок, які будуть відображатися вздовж маршруту.


### Точки інтересу (POI) {#points-of-interest-pois}

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)

Налаштування POI в [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-poi) пов'язані з налаштуванням **Показати вздовж маршруту**. Це, по суті, додаткове налаштування для відображення POI на мапі, безпосередньо пов'язане зі створеним маршрутом.  

Коли ви вказуєте відображення певних POI на *Налаштувати мапу*, вони всі відображаються на завантажених вами мапах, незалежно від того, чи вибрали ви категорії, чи, якщо вам байдуже, яку категорію, вибрали найближчі POI.  

- Кількість та ідентифікація POI *залежить від масштабу*.

- Налаштування *Показати вздовж маршруту* відображає ту саму категорію, що й у *Накладанні POI*, але ви бачите *весь список* вибраних POI одразу, починаючи з точки поточного розташування на заданій відстані в межах вашого маршруту.  

- Ви можете видалити непотрібні POI зі списку або відредагувати їх у [Контекстному меню](../../map/map-context-menu.md), натиснувши на один з них.

- Список містить вибрані [типи POI](../../map/point-layers-on-map.md#poi-types) та коротку інформацію про кожен з них, таку як *іконка типу, назва, відстань від точки поточного розташування до POI вздовж маршруту*, та *позначки, з якого боку маршруту по прямій лінії та наскільки далеко знаходиться POI*.  


### Мої улюблені {#my-favorites}

Список містить усі раніше додані [Улюблені](../../personal/favorites.md#favorite-point) точки поблизу створеного вами маршруту. Як і у випадку з POI, ви можете вибрати відстань, на якій розташовані ці точки.  

- Якщо ви [вимкнете відображення Улюблених на мапі](../../map/configure-map-menu.md), вони не зникнуть зі списку і продовжуватимуть відображатися у [віджеті](../../widgets/nav-widgets.md#street-name) та оголошуватися при наближенні до них.

- Ви можете додавати свої *Улюблені точки* на мапу не тільки заздалегідь, але й під час навігації за маршрутом.

- *Щоб оновити список*, вимкніть, а потім знову увімкніть Мої улюблені.

- Кожна точка містить назву або координати, групу, відстань від точки поточного розташування до *Улюбленого* безпосередньо на лінії маршруту, інформацію про те, наскільки далеко праворуч або ліворуч знаходиться точка від лінії, та напрямок маршруту.


### Попередження про дорожній рух {#traffic-warnings}

*Попередження про дорожній рух* не відображаються безпосередньо на мапі, як *POI* або *Мої улюблені*.

- **Щоб увімкнути** цю опцію та побачити попередження, ви повинні спочатку увімкнути та налаштувати [Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget).

- Вибір відображення *Попереджень про дорожній рух* вздовж вашого маршруту дозволяє побачити весь список безпосередньо перед початком маршруту, що корисно при плануванні поїздки.

- Ви можете видалити непотрібні сповіщення зі списку або натиснути на назву сповіщення, щоб [відредагувати місцезнаходження](../../map/map-context-menu.md#avoid-road).


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Сповіщення, такі як попередження про дорожній рух або обмеження швидкості, з'являтимуться на екрані як віджет. Вони з'являються в нижньому лівому куті під час навігації. | [Типи віджетів сповіщень](../../widgets/nav-widgets.md#alert-widget) |


## Вигляд лінії маршруту {#route-line-appearance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation route Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation route Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Ви можете вибрати вигляд лінії маршруту за стилем або вручну вибрати колір, ширину та прозорість лінії. Крім того, ви можете вибрати, чи відображати стрілки повороту та стрілки напрямку на лінії.

**Розширені**: налаштування Налаштувати лінію маршруту дозволяє налаштувати вигляд лінії маршруту для відображення змін висоти, значних підйомів або спусків, льоду на дорозі, ґрунтових доріг, автомагістралей та інших можливих перешкод. Ви також можете вибрати або створити власні [кольорові схеми](../../personal/color-palette-schemes.md#routes) для застосування до лінії маршруту.


:::note
 <ProFeature/> Деякі параметри ви можете використовувати лише з <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">підпискою OsmAnd Pro</a>.
:::


### Колір {#color}

Налаштування **Колір** змінює колірні тони ліній маршруту. Їх загальний колір змінюється залежно від вибраного типу з колекції OsmAnd та відповідно до **Легенди мапи**. Крім того, їх колір стає будь-яким кольором та прозорістю, які ви встановили вручну.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується з кольорами за замовчуванням. Повний опис кольорів див. у [Стилі мапи за замовчуванням](../../map/vector-maps.md#default-map-styles).  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)

- ***Власний***. Дозволяє вибрати лінію будь-якого бажаного кольору та прозорості. Ви можете вибрати різні налаштування для денної мапи та окремо для нічної мапи.  
    ![custom](@site/static/img/navigation/route/custom.png)   ![custom](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Показує висоту точки маршруту як **зелено-жовто-червоний** градієнт. **Зелений** вказує на найнижчу точку маршруту, **жовтий** вказує на середню висоту точки, а **червоний** - на найвищу. Якщо різниця висот маршруту < 100 метрів, градієнт застосовується частково або не застосовується, наприклад, для простого підйому від 100 метрів до 150 метрів - градієнт буде **зелено-жовтим**. Зверніть увагу, що колір не представляє абсолютне значення висоти.  
    ![Altitude](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Лінія маршруту забарвлюється в різні кольори залежно від профілю висот маршруту. Детальний опис див. у статті *Плагін Топографія*, розділ [Нахил](../../plugins/topography.md#slope).  
    ![Altitude](@site/static/img/navigation/route/Slope.png)   ![Altitude](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Забарвлює лінію маршруту або треку відповідно до *класифікації доріг*. Детальний опис див. у статті *Векторні мапи - [Стиль доріг](../../map/vector-maps.md#road-style)*.  
    ![Altitude](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Надає інформацію про фізичну поверхню дороги або стежки. Детальний опис див. у статті *Стиль мапи OsmAnd - [Поверхня](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда мапи*.  
    ![Altitude](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Класифікація маневреності доріг або стежок для колісних транспортних засобів, особливо щодо регулярності та гладкості поверхні. Детальний опис див. у статті *Стиль мапи OsmAnd - [Гладкість](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда мапи*.  
    ![Altitude](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Забарвлює лінію маршруту або треку відповідно до *класифікації зимових доріг*. Детальний опис див. у статті *Векторні мапи*, розділ [Зимові та лижні дороги](../../map/vector-maps.md#winter-and-ski).  
    ![Altitude](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Забарвлення лінії маршруту або стежки за складом покриття. Зазвичай використовується, коли дорожня мережа переважно ґрунтова. Детальний опис див. у статті *Стиль мапи OsmAnd - [Твердість поверхні](../../map-legend/osmand.md#surface-smoothness)* у розділі *Легенда мапи*.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Складність кінних стежок***. Відображення стежок відповідно до складності кінних стежок.  
    ![Altitude](@site/static/img/navigation/route/firmness.png)


### Ширина {#width}

Ви можете налаштувати ширину лінії маршруту, щоб вона відповідала дорозі або стежці, що відображається на мапі. Для більш чіткої візуальної ідентифікації ви можете вручну збільшити або зменшити ширину лінії за потреби. Докладніше див. у статті *Треки та маршрути — [Вигляд](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується з шириною за замовчуванням, встановленою OsmAnd. Повний опис див. у статті *Векторні мапи*, розділ [Стиль мапи](../../map/vector-maps.md#default-map-styles).  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)

- ***Тонка, Середня та Жирна ширина***. Ви можете вибрати ширину лінії, щоб вона відповідала ширині дороги, або сильніше виділити лінію маршруту на мапі.  
    ![width](@site/static/img/navigation/route/width_med.png)

- ***Власний***. Дозволяє відобразити лінію потрібної вам ширини. Використовуйте повзунок, щоб вибрати ширину.  
    ![custom](@site/static/img/navigation/route/custom_2.png)  


### Стрілки повороту {#turn-arrows}

Налаштування Стрілки повороту дозволяє вибрати, чи відображати стрілки повороту на лінії маршруту.  

- ***На мапі***  
    ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***У застосунку***  
    ![Altitude](@site/static/img/navigation/route/turn_arr.png)   ![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png)


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

> *Цю статтю востаннє оновлено в грудні 2024 року*