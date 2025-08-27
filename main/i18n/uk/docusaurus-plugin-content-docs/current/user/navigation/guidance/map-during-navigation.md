---
source-hash: f13015504ea6398be0821e91d28e733f4b859524a2e651ed78c5b0245e5cd0f9
sidebar_position: 1
title: Екран мапи під час навігації
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

У цій статті описано, як налаштувати вигляд мапи під час навігації. Це включає такі функції, як відображення [POI вздовж маршруту](#show-points-along-the-route), використання [екранних сповіщень](#screen-alerts), [вигляд лінії маршруту](#route-line-appearance), включаючи колір, ширину та стрілки повороту. Ці функції тісно пов'язані з [налаштуваннями навігації за маршрутом](../setup/route-navigation.md#settings).


## Мапа під час навігації {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Екран мапи під час навігації](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Екран мапи під час навігації](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

Під час навігації мапа є візуальним інструментом для визначення вашого положення, ідентифікації пункту призначення, планування маршруту та перегляду навігаційних вказівок. Ви можете використовувати масштабування для цього та перетягувати та обертати мапу за потреби. Мапа також може відображати інформацію про дороги, назви вулиць, будівлі та інші об'єкти, щоб допомогти вам легко визначити свій маршрут.  

Під час навігації вигляд мапи налаштовується відповідно до обраного навігаційного профілю. Перед початком навігації переконайтеся, що вигляд мапи відповідає вашим уподобанням щодо її функціонування під час руху.

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* | Час, протягом якого вигляд мапи синхронізується з поточною позицією після переміщення. | *Значення:* <br /> Ніколи, 5 сек, 10 сек, 15 сек, 20 сек, 25 сек, 30 сек, 45 сек, 60 сек, 50 сек. |
| *<Translate android="true" ids="auto_zoom_map"/>* | Автоматично масштабувати мапу відповідно до вашої швидкості, доки мапа синхронізована з вашою поточною позицією. | *Значення:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - масштабування вручну. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - масштабування 200 м.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - масштабування 100 м. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - масштабування 5 м. |
| *<Translate android="true" ids="snap_to_road"/>* | Піктограма поточної позиції буде пов'язана з поточним навігаційним маршрутом. | Ви можете вимкнути цю опцію, але всі опції, пов'язані з дорогою, такі як відображення смуг, також не будуть видимі під час навігації. |
| *<Translate android="true" ids="approximate_bearing"/>* | Визначає напрямок на основі навігаційного маршруту, яким ви рухаєтеся. | Налаштування видно лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md). <br /> Ці налаштування слід увімкнути, якщо орієнтація напрямної мапи перевернута або тремтить під час використання [Android Auto](../auto-car.md#common-issues-and-solutions). |


## Показати точки вздовж маршруту {#show-points-along-the-route}

Налаштування *Показати вздовж маршруту* дозволяє налаштувати додаткові параметри маршруту та необхідне для роботи таких віджетів, як [Назва вулиці](../../widgets/nav-widgets#street-name) та [Віджет сповіщень](../../widgets/nav-widgets.md#alert-widget). Опції включають відображення [**POI**](#points-of-interest-pois) та [**Моїх улюблених**](#my-favorites) вздовж маршруту або використання їх як доповнення до тих, що вже налаштовані для профілю, а також відображення повного списку [**Попереджень про дорожній рух**](#traffic-warnings) вздовж маршруту.  

- Можливість встановлювати різні відстані (до 5 км, або 3.11 миль, залежно від [одиниці довжини](../../personal/profiles.md#units--formats), яку ви встановили) від маршруту до найближчих точок корисна при використанні таких типів маршрутизації, як [Пряма лінія](../routing/straight-line-routing.md) або [Прямо до точки](../routing/direct-to-point-routing.md).
- Для налаштування *Показати вздовж маршруту* рекомендується використовувати [Голосові підказки](../guidance/voice-navigation.md) для навігації.
- *POI, Улюблені та Попередження про дорожній рух* не відображаються у списку для маршруту, який ви вже проїхали.


### Перегляд та вибір точок {#view-and-select-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*

![точки вздовж маршруту](@site/static/img/navigation/show-points-along-4-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>* *→ Показати вздовж маршруту*

![точки вздовж маршруту](@site/static/img/navigation/show-points-along-4-ios.png)  

</TabItem>

</Tabs>

Коли ви створюєте маршрут, ви можете встановити типи точок, які будуть відображатися вздовж маршруту в розділі *Навігація*.


### Точки інтересу (POI) {#points-of-interest-pois}

![Накладання POI Android](@site/static/img/map/poi_overlay_android.png) ![Накладання POI iOS](@site/static/img/map/poi_overlay_ios.png)

Налаштування POI в [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-pois) пов'язані з налаштуванням **Показати вздовж маршруту**. Це, по суті, додаткове налаштування для відображення POI на мапі, безпосередньо пов'язане зі створеним маршрутом.  

Коли ви вказуєте відображення певних POI на *Налаштувати мапу*, вони всі відображаються на завантажених вами мапах, незалежно від того, чи вибрали ви категорії, чи, якщо вам байдуже, яка категорія, вибрали найближчі POI.  

- Кількість та ідентифікація POI *залежить від масштабу*.

- Налаштування *Показати вздовж маршруту* відображає ту саму категорію, що й у *Накладанні POI*, але ви бачите *весь список* вибраних POI одразу, починаючи з точки поточного розташування на заданій відстані в межах вашого маршруту.  

- Ви можете видалити непотрібні POI зі списку або відредагувати їх у [Контекстному меню](../../map/map-context-menu.md), торкнувшись одного з них.

- Список містить вибрані [типи POI](../../map/point-layers-on-map.md#poi-types) та коротку інформацію про кожен з них, таку як *піктограма типу, назва, відстань від поточної точки розташування до POI вздовж маршруту*, та *індикація, з якого боку маршруту по прямій лінії та наскільки далеко знаходиться POI*.  


### Мої улюблені {#my-favorites}

Список містить усі раніше додані [Улюблені](../../personal/favorites.md#favorite-point) точки поблизу створеного вами маршруту. Як і у випадку з POI, ви можете вибрати відстань, на якій розташовані ці точки.  

- Якщо ви [вимкнете відображення Улюблених на мапі](../../map/configure-map-menu.md), вони не зникнуть зі списку та продовжуватимуть відображатися у [віджеті](../../widgets/nav-widgets.md#street-name) та оголошуватися при наближенні до них.

- Ви можете додавати свої *Улюблені точки* на мапу не тільки заздалегідь, але й під час навігації за маршрутом.

- *Щоб оновити список*, вимкніть, а потім знову увімкніть Мої улюблені.

- Кожна точка містить назву або координати, групу, відстань від поточної точки розташування до *Улюбленої* безпосередньо на лінії маршруту, інформацію про те, наскільки далеко праворуч або ліворуч знаходиться точка від лінії, та напрямок маршруту.


### Попередження про дорожній рух {#traffic-warnings}

*Попередження про дорожній рух* не відображаються безпосередньо на мапі, як *POI* або *Мої улюблені*.

- **Щоб увімкнути** цю опцію та побачити попередження, ви повинні спочатку увімкнути та налаштувати [віджет сповіщень](../../widgets/nav-widgets.md#alert-widget).

- Вибір відображення *Попереджень про дорожній рух* вздовж вашого маршруту дозволяє вам побачити весь список безпосередньо перед початком вашого маршруту, що корисно при плануванні поїздки.

- Ви можете видалити непотрібні сповіщення зі списку або торкнутися назви сповіщення, щоб [відредагувати місцезнаходження](../../map/map-context-menu.md#avoid-road).


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Сповіщення, такі як попередження про дорожній рух або обмеження швидкості, з'являтимуться на екрані як віджет. Вони з'являються в нижньому лівому куті під час навігації. | [Типи віджетів сповіщень](../../widgets/nav-widgets.md#alert-widget) |


## Вигляд лінії маршруту {#route-line-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Навігаційний маршрут Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Навігаційний маршрут Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

Ви можете вибрати вигляд лінії маршруту за стилем або вручну вибрати колір, ширину та прозорість лінії. Крім того, ви можете вибрати, чи відображати стрілки повороту та стрілки напрямку на лінії.

**Додатково**: налаштування "Налаштувати лінію маршруту" дозволяє налаштувати вигляд лінії маршруту для відображення змін висоти, значних підйомів або спусків, льоду на дорозі, ґрунтових доріг, автомагістралей та інших можливих перешкод. Ви також можете вибрати або створити власні [кольорові схеми](../../personal/color-palette-schemes.md#routes) для застосування до лінії маршруту.


:::note
 <ProFeature/> Деякі параметри можна використовувати лише з [підпискою OsmAnd Pro](https://osmand.net/docs/user/purchases/android#free-and-paid-features).
:::


### Колір {#color}

Налаштування **Колір** змінює колірні тони ліній маршруту. Їх загальний колір змінюється залежно від вибраного типу з колекції OsmAnd та відповідно до **Легенди мапи**. Крім того, їх колір стає будь-яким кольором та прозорістю, які ви встановили вручну.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується зі стандартними кольорами. Для повного опису кольорів перейдіть до [Стилів мапи за замовчуванням](../../map/vector-maps.md#default-map-styles).  
    ![стиль мапи](@site/static/img/navigation/route/map_st_2.png)

- ***Користувацький***. Дозволяє вибрати лінію будь-якого бажаного кольору та прозорості. Ви можете вибрати різні налаштування для денної мапи та окремо для нічної мапи.  
    ![користувацький](@site/static/img/navigation/route/custom.png)   ![користувацький](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. Показує висоту точки маршруту як **зелено-жовто-червоний** градієнт. **Зелений** вказує на найнижчу точку маршруту, **жовтий** вказує на середню висоту точки, а **червоний** — на найвищу. Якщо різниця висот маршруту < 100 метрів, градієнт застосовується частково або не застосовується, наприклад, для простого підйому від 100 метрів до 150 метрів — градієнт буде **зелено-жовтим**. Зверніть увагу, що колір не відображає абсолютне значення висоти.  
    ![Висота](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. Лінія маршруту забарвлюється в різні кольори залежно від профілю висот маршруту. Детальний опис знаходиться в статті *Плагін Топографія*, розділ [Ухил](../../plugins/topography.md#hillshade-slope-and-altitude-layers).  
    ![Висота](@site/static/img/navigation/route/Slope.png)   ![Висота](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Забарвлює лінію маршруту або треку відповідно до *класифікації доріг*. Детальний опис знаходиться в статті *Векторні мапи - [Стиль дороги](../../map/vector-maps.md#road-style)*.  
    ![Висота](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Надає інформацію про фізичну поверхню дороги або стежки. Детальний опис можна знайти в статті *Стиль мапи OsmAnd - [Поверхня](../../map-legend/osmand.md#surface-smoothness)* в розділі *Легенда мапи*.  
    ![Висота](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Класифікація маневреності доріг або стежок для колісних транспортних засобів, особливо щодо рівномірності та гладкості поверхні. Детальний опис можна знайти в статті *Стиль мапи OsmAnd - [Гладкість](../../map-legend/osmand.md#surface-smoothness)* в розділі *Легенда мапи*.  
    ![Висота](@site/static/img/navigation/route/Smoothness.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Забарвлює лінію маршруту або треку відповідно до *класифікації зимових доріг*. Детальний опис можна знайти в статті *Векторні мапи*, розділ [Зимові та лижні дороги](../../map/vector-maps.md#winter-and-ski).  
    ![Висота](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Забарвлення лінії маршруту або стежки за складом покриття. Зазвичай використовується, коли дорожня мережа значною мірою не має твердого покриття. Детальний опис можна знайти в статті *Стиль мапи OsmAnd - [Твердість поверхні](../../map-legend/osmand.md#surface-smoothness)* в розділі *Легенда мапи*.  
    ![Висота](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Складність кінних стежок***. Відображати стежки відповідно до складності кінних стежок.  
    ![Висота](@site/static/img/navigation/route/firmness.png)


### Ширина {#width}

Ви можете налаштувати ширину лінії маршруту, щоб вона відповідала дорозі або шляху, відображеному на мапі. Для чіткішої візуальної ідентифікації ви можете вручну збільшити або зменшити ширину лінії за потреби. Для отримання додаткової інформації зверніться до статті *Треки та маршрути — [Вигляд](../../map/tracks/appearance.md)*.

- ***<Translate android="true" id="map_widget_renderer"/>***. Використовується зі стандартною шириною, встановленою OsmAnd. Повний опис можна знайти в статті *Векторні мапи*, розділ [Стиль мапи](../../map/vector-maps.md#default-map-styles).  
    ![стиль мапи](@site/static/img/navigation/route/map_st_2.png)

- ***Тонка, Середня та Жирна ширина***. Ви можете вибрати ширину лінії, щоб вона відповідала ширині дороги, або сильніше виділити лінію маршруту на мапі.  
    ![ширина](@site/static/img/navigation/route/width_med.png)

- ***Користувацька***. Дозволяє відображати лінію потрібної вам ширини. Використовуйте повзунок, щоб вибрати ширину.  
    ![користувацька](@site/static/img/navigation/route/custom_2.png)  


### Стрілки повороту {#turn-arrows}

Налаштування "Стрілки повороту" дозволяє вибрати, чи відображати стрілки повороту на лінії маршруту.  

- ***На мапі***  
    ![Висота](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![стрілки повороту iOS на мапі](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***У застосунку***  
    ![Висота](@site/static/img/navigation/route/turn_arr.png)   ![стрілки повороту iOS](@site/static/img/navigation/route/turn_arr_ios.png)


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