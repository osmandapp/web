---
source-hash: 1264be6e6be9454f79c4a32068fe302a887c77a45efaf5d4d524eeb622886e9c
sidebar_position: 5
title: Лінійка радіусу та Лінійка
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

**Інструменти Лінійки** в OsmAnd розроблені, щоб допомогти вам точно вимірювати відстані та розуміти [масштаб карти](https://en.wikipedia.org/wiki/Scale_(map)).

- Інструмент **Лінійка** відображає динамічний масштаб карти в одиницях, таких як метри або фути, допомагаючи візуально оцінювати відстані між об'єктами на екрані.
- **Лінійка радіусу** дозволяє встановити радіус від будь-якої точки на карті, показуючи концентричні кола, що представляють інтервали відстані.
- Інструмент **Відстань за дотиком** дозволяє вимірювати відстані, торкаючись карти — або від вашого поточного місцезнаходження, або між будь-якими двома місцями.

Ці інструменти корисні для планування маршрутів, оцінки близькості до орієнтирів та аналізу територій — як для активного відпочинку, так і для точної навігації.

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_screen.png)


## Лінійка {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ruler tool](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Лінійка** відображає поточний масштаб карти у вигляді відрізка, позначеного його реальною довжиною (наприклад, 100 м або 500 футів), внизу екрана. Характеристики:

- Масштаб динамічно адаптується при збільшенні або зменшенні.
- Він дає візуальну довідку для оцінки реальних відстаней між об'єктами на карті.
- Довжина відрізка округлюється до зручних одиниць (наприклад, 100 м), приблизно відповідаючи ширині великого пальця для інтуїтивного використання.

Цей інструмент корисний, коли вам потрібно швидко зрозуміти розміри об'єктів або відстані без розміщення маркерів або маршрутів.

| | |
|------------|------------|
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Віджет Лінійки радіусу {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_andr.png)
</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_widget_new_ios.png)

</TabItem>

</Tabs>

[Віджет Лінійки радіусу](../widgets/info-widgets.md#radius-ruler) показує відстань між вашим поточним місцезнаходженням (*Моє місцезнаходження*) та центром карти. Ви також можете перемістити карту, щоб встановити будь-яку довільну центральну точку. Характеристики:

- Відображає концентричні кола, центровані на вибраній точці.
- Перше коло відображає поточний [масштаб карти](#ruler) для швидкого візуального довідника.
- Автоматично налаштовується при масштабуванні для підтримки точних значень радіусу.

Використовуйте цей віджет для оцінки близькості до цікавих місць або планування навколо визначеної області.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>


## Компас для Лінійки радіусу {#compass-for-radius-ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Compass ruler](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Compass ruler](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Коли **Лінійка радіусу** активна, на карті відображається накладання компаса, щоб допомогти вам орієнтуватися в просторі. Накладання показує, як карта вирівняна відносно істинної Півночі, і може включати синій трикутник, що вказує поточний напрямок пристрою.

- Кільце компаса показує орієнтацію карти — чи Північ вгорі, чи повернута.
- **Синій трикутник** вказує напрямок, в якому дивиться ваш пристрій.
- Щоб використовувати цю функцію, пристрій повинен підтримувати та вмикати **датчик компаса** (GPS-компас, магнітометр).
- Тримання пристрою горизонтально покращує точність та візуалізацію.
- Якщо **синій трикутник** і **червона стрілка** (Північ) обидва вказують вгору, пристрій вирівняний за істинною Північчю.

Це накладання корисне для навігації на відкритому повітрі, дозволяючи вам зіставляти [орієнтацію карти](../map/interact-with-map.md#map-orientation--compass) з реальним середовищем.  

| | |
|------------|------------|
| Увімкнути | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


## Центральне / Нижнє положення {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Інше → Положення на екрані*

![Display position Android](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Radius ruler downward](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Щоб збільшити видимий радіус навколо вашого місцезнаходження, ви можете змінити положення Лінійки радіусу, вибравши опцію *Центр* або *Низ*.  

Для отримання додаткової інформації про *положення на екрані* дивіться статтю [Налаштування екрана](../widgets/configure-screen.md#display-position-location-position-on-screen).


## 3D-вигляд {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Radius ruler 3D format](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Ви можете переключитися на **3D-вигляд**, щоб краще візуалізувати відстані та навколишній рельєф при використанні Лінійки радіусу. Цей вигляд нахиляє карту та забезпечує ефект перспективи, що розширює видимий радіус.

- Торкніться [кнопки місцезнаходження](../map/interact-with-map.md#my-location-and-zoom), щоб сфокусуватися на вашому положенні.
- Використовуйте жест [проведення двома пальцями вгору](../map/interact-with-map.md#gestures), щоб нахилити карту в 3D-режим.

Кола радіусу з'являться з глибиною, що особливо корисно для планування маршрутів у горбистих районах або міських середовищах, де важливий вертикальний контекст.


## Відстань за дотиком {#distance-by-tap}

![Distance between two random points on the map](@site/static/img/widgets/distance_between_two_random_points.png)

Інструмент **Відстань за дотиком** дозволяє вимірювати відстані між точками на карті без використання Лінійки радіусу або створення маршруту.

Існує два варіанти використання:

- **Відстань від вашого місцезнаходження до точки**  
  Торкніться будь-де на карті, і з'явиться пряма лінія від вашого поточного місцезнаходження до точки дотику, разом з позначкою відстані. Лінія залишається на екрані, навіть якщо ви торкнетеся в іншому місці.

- **Відстань між будь-якими двома точками**  
  Торкніться двох точок на карті одночасно (мультитач). Лінія з'єднує дві точки, і відображається виміряна відстань.

| | |
|------------|------------|
| Увімкнути |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Розмір тексту (Android) | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Формат одиниць | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Відеоінструкції {#video-guides}

Перегляньте ці короткі навчальні посібники, щоб дізнатися, як використовувати Лінійку радіусу та пов'язані інструменти в OsmAnd:

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/MWT20dVtkDc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

<iframe  width="900" height="506" src="https://www.youtube.com/embed/C9QLQ52ndiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Налаштування екрана](./configure-screen.md)
- [Кнопки карти](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Швидка дія](./quick-action.md)
- [Віджети маркерів](./markers.md)