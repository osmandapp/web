---
source-hash: abb657dd46f7e9879d3bf8eaed648f3328413fc5ed9238a0657f03a9093e4ebf
sidebar_position: 5
title:  Радіусна лінійка та Лінійка
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

Інструменти **лінійки** в OsmAnd призначені для того, щоб допомогти вам точно вимірювати відстані та розуміти [масштаб карти](https://en.wikipedia.org/wiki/Scale_(map)).

- Інструмент **Лінійка** відображає динамічний масштаб карти в таких одиницях, як метри або фути, допомагаючи вам візуально оцінювати відстані між об'єктами на екрані.
- **Радіусна лінійка** дозволяє встановити радіус від будь-якої точки на карті, показуючи концентричні кола, що представляють інтервали відстані.
- Інструмент **Відстань за дотиком** дозволяє вимірювати відстані, торкаючись карти — або від вашого поточного місцезнаходження, або між будь-якими двома точками.

Ці інструменти корисні для планування маршрутів, оцінки близькості до визначних пам'яток та аналізу місцевості — як для активного відпочинку, так і для точної навігації.

![Екран радіусної лінійки](@site/static/img/widgets/radius_ruler_screen.png)


## Лінійка {#ruler}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Інструмент Лінійка](@site/static/img/widgets/ruler_tool_map_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Інструмент Лінійка](@site/static/img/widgets/ruler_tool_map_ios.png)

</TabItem>

</Tabs>

**Лінійка** відображає поточний масштаб карти у вигляді відрізка лінії з позначенням його реальної довжини (наприклад, 100 м або 500 футів) внизу екрана. Характеристики:

- Масштаб динамічно змінюється при наближенні або віддаленні.
- Вона дає візуальне уявлення для оцінки реальних відстаней між об'єктами на карті.
- Довжина відрізка заокруглюється до зручних одиниць (наприклад, 100 м), що приблизно відповідає ширині великого пальця для інтуїтивного використання.

Цей інструмент корисний, коли вам потрібно швидко зрозуміти розміри об'єктів або відстані, не встановлюючи маркери чи маршрути.

| | |
|------------|------------|
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


## Віджет Радіусна лінійка {#radius-ruler-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>*

Доступний на всіх панелях: <Translate android="true" ids="top"/>, <Translate android="true" ids="position_on_map_bottom"/>, <Translate android="true" ids="shared_string_left"/>, and <Translate android="true" ids="shared_string_right"/>.

![Позиція відображення Android](@site/static/img/widgets/radius_ruler_height_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>*

Доступний на всіх панелях: <Translate ios="true" ids="shared_string_top"/>, <Translate ios="true" ids="position_on_map_bottom"/>, Ліворуч, та Праворуч.

![Позиція відображення iOS](@site/static/img/widgets/radius_ruler_height_ios.png)

</TabItem>

</Tabs>

[Віджет Радіусна лінійка](../widgets/info-widgets.md#radius-ruler) показує відстань між вашим поточним місцезнаходженням (*Моє місцезнаходження*) та центром карти. Ви також можете переміщати карту, щоб встановити будь-яку власну центральну точку. Характеристики:

- Відображення концентричних кіл з центром у вибраній точці.
- Перше коло відображає поточний [масштаб карти](#ruler) для швидкого візуального орієнтування.
- Автоматично налаштовується при масштабуванні для збереження точних значень радіуса.
- Торкніться віджета, щоб переключитися між трьома режимами відображення: <Translate android="true" ids="shared_string_hide"/>, <Translate android="true" ids="light_theme"/>, and <Translate android="true" ids="dark_theme"/>.
- Тривале торкання відкриває контекстне меню віджета з додатковими опціями.
- Налаштування віджета включають два регульовані параметри: *<Translate android="true" ids="shared_string_height"/>* — контролює візуальну висоту віджета на екрані; *<Translate android="true" ids="shared_string_show_icon"/>* — перемикає видимість іконки віджета.

Використовуйте цей віджет для оцінки близькості до цікавих місць або планування навколо визначеної області.

<!--
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
-->


### Компас {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Компас лінійки](@site/static/img/widgets/compass_ruler_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Компас лінійки](@site/static/img/widgets/compass_ruler_ios.png)

</TabItem>

</Tabs>

Коли **Радіусна лінійка** активна, на карті відображається накладення компаса, щоб допомогти вам орієнтуватися в просторі. Накладення показує, як карта вирівняна відносно істинної півночі, і може містити синій трикутник, що вказує поточний напрямок пристрою.

- Кільце компаса показує орієнтацію карти — чи північ вгорі, чи повернута.
- **Синій трикутник** вказує напрямок, в якому спрямований ваш пристрій.
- Щоб використовувати цю функцію, пристрій повинен підтримувати та вмикати **датчик компаса** (GPS-компас, магнітометр).
- Тримання пристрою горизонтально покращує точність та візуалізацію.
- Якщо **синій трикутник** і **червона стрілка** (Північ) обидва вказують вгору, пристрій вирівняний за істинною північчю.

Це накладення корисне для навігації на відкритому повітрі, дозволяючи вам узгодити [орієнтацію карти](../map/interact-with-map.md#map-orientation-modes) з реальним оточенням.  

| | |
|------------|------------|
| Увімкнути | **Android**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → Додати віджет → <Translate android="true" ids="radius_ruler_item"/>* |
| Формат | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> (Android)* → *<Translate ios="true" ids="angular_units"/> (iOS)* |  


### Позиція по центру / знизу {#center--bottom-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,display_position"/>*

![Позиція відображення Android](@site/static/img/widgets/radius_ruler_display_position_2_andr.png) ![Радіусна лінійка вниз](@site/static/img/widgets/radius_ruler_view_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Інше → Позиція місцезнаходження на екрані*

![Позиція відображення iOS](@site/static/img/widgets/radius_ruler_display_position_3_ios.png) ![Радіусна лінійка вниз](@site/static/img/widgets/radius_ruler_downward_ios.png)

</TabItem>

</Tabs>

Щоб збільшити видимий радіус навколо вашого місцезнаходження, ви можете змінити положення Радіусної лінійки, вибравши опцію *По центру* або *Знизу*.  

Для отримання додаткової інформації про *позицію на екрані*, дивіться статтю [Налаштування екрана](../widgets/configure-screen.md#display-position-location-position-on-screen).


### 3D-вигляд {#3d-view}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Радіусна лінійка у 3D-форматі](@site/static/img/widgets/radius_ruler_2_5D_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Радіусна лінійка у 3D-форматі](@site/static/img/widgets/radius_ruler_2_5D_ios.png)

</TabItem>

</Tabs>

Ви можете переключитися на **3D-вигляд**, щоб краще візуалізувати відстані та навколишній рельєф при використанні Радіусної лінійки. Цей вигляд нахиляє карту і створює ефект перспективи, що розширює видимий радіус.

- Торкніться [кнопки місцезнаходження](../map/interact-with-map.md#my-position-and-zoom), щоб сфокусуватися на вашій позиції.
- Використовуйте жест [проведення двома пальцями вгору](../map/interact-with-map.md#gestures), щоб нахилити карту в режим 3D.

Кола радіуса з'являться з глибиною, що особливо корисно для планування маршруту в горбистій місцевості або міському середовищі, де важливий вертикальний контекст.


<!--
## Distance by Tap {#distance-by-tap}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Distance by Tap Android](@site/static/img/widgets/distance_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Distance by Tap IOS](@site/static/img/widgets/distance_tap_ios.png)

</TabItem>

</Tabs>

The **Distance by Tap** tool allows you to measure distances between points on the map without using the Radius Ruler or creating a route.

There are two use cases:

- **Distance from your location to a point**  
  Tap anywhere on the map and a straight line will appear from your current location to the tapped point, along with a distance label. The line remains on screen even if you tap elsewhere.

- **Distance between any two points**  
  Tap two points on the map simultaneously (multi-touch). A line connects the two points, and the measured distance is displayed.

You can also adjust the text size of the distance label. Choose between *<Translate android="true" ids="shared_string_normal"/>* (default) and *<Translate android="true" ids="shared_string_large"/>* (1.5× bigger). When the Large option is selected, extra spacing is automatically added between the line and the label for better readability. Changes apply instantly without restarting the app.

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap"/>* |
|   |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location,map_widget_distance_by_tap"/>* |
| Text size | *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other,map_widget_distance_by_tap,text_size"/>* |
| Units Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |
-->


## Відеоінструкції {#video-guides}

Перегляньте ці короткі навчальні відео, щоб дізнатися, як використовувати Радіусну лінійку та пов'язані з нею інструменти в OsmAnd:

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
- [Кнопки на карті](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Швидка дія](./quick-action.md)
- [Віджети маркерів](./markers.md)