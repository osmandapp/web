---
source-hash: 9dfdc23272c2395a2fe157264de05cb42ea6de2b1b0d9d756c1c1bf66f78f6d3
sidebar_position: 7
title: Налаштування навігації
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

Для успішної навігації важливо правильно налаштувати відповідні параметри відповідно до ваших потреб та способу подорожі — автомобілем, пішки, верхи чи на лижах. Ця стаття описує основні параметри маршруту, [Голосові підказки](#voice-prompts), [Екранні сповіщення](#screen-alerts), [Поведінку карти під час навігації](#map-during-navigation) та [Вигляд ліній маршруту](#customize-route-line). Вона також детально описує налаштування транспортного засобу, такі як [Швидкість за замовчуванням](#default-speed) та [Максимальна/мінімальна швидкість](#road-speeds), [Тип двигуна](#fuel-used-by-motor) для розрахунку CO2, [Ємність паливного бака](#fuel-tank-capacity) та [Розмір/вага](#size-parameters), які можуть впливати на маршрут. Налаштування цих параметрів допоможе вам максимально ефективно використовувати OsmAnd та досягти своєї мети без зайвих затримок.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Як відкрити {#how-to-open}

Цей розділ представляє налаштування навігації, необхідні для розрахунку та побудови маршруту, які ви можете встановити для обраного профілю. Це меню включає налаштування для [Підготовки маршруту](../setup/route-navigation.md), [Екрану карти під час навігації](../guidance/map-during-navigation.md), а те, що ви встановлюєте в *Налаштуваннях навігації*, безпосередньо впливає на відображення даних у [Деталях маршруту](../setup/route-details.md).

Існує три способи доступу до меню налаштувань навігації.

- Перейдіть до головного *Меню → Налаштування*, виберіть потрібний *Профіль* та натисніть *Налаштування навігації*.

- Натисніть піктограму *Навігація* на екрані карти, потім виберіть *Піктограму налаштувань → Налаштування навігації*.

- Перейдіть до головного *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
Профіль *Перегляд карти* за замовчуванням не має налаштувань навігації.  
:::


## Тип навігації {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Навігація є важливою частиною подорожі, і вибір *правильного типу* навігації може значно полегшити вашу подорож. Тип навігації, який ви обираєте, може залежати від того, як ви подорожуєте, і чи маєте ви підключення до Інтернету.  

- **Онлайн-навігація**
    Вона в основному використовує спеціальну систему маршрутизації або вебсайт, що дозволяє додатку OsmAnd будувати маршрут на основі поточної інформації та інших факторів. Про вибір найкращого маршруту онлайн ви можете прочитати у статті [Онлайн-маршрутизація](../routing/online-routing.md). Цей тип навігації доступний лише для *версії Android* додатку.  

- **Офлайн-навігація**
Вона не потребує доступу до Інтернету та пропонує ширший вибір [типів навігації](../routing/osmand-routing.md#routing-types), які можна використовувати для розрахунку маршруту. Серед них є *велосипед, човен, автомобіль, пішки, лижі* та *пряма лінія*. Наразі існує 13 основних типів маршрутизації, а також зовнішній тип маршрутизації [BRouter](../routing/brouter.md), який надає додаткові можливості маршрутизації.  

Тип навігації визначає, які правила використовуються для розрахунку маршрутів. Якщо вам потрібен конкретний тип навігації, ви можете **імпортувати власний модифікований файл маршрутизації *XML***. Детальніше про правила маршрутизації читайте на нашій [сторінці GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Також є окрема стаття про формат XML та його використання, [Стиль відображення карти](../../../technical/osmand-file-formats/osmand-rendering-style.md), яка може допомогти вам у створенні файлу маршруту.  


## Параметри маршруту {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** — це налаштування, які визначають, як програма розраховуватиме маршрут до пункту призначення, враховуючи такі фактори, як тип транспорту, пріоритети маршрутизації, умови маршруту, складність маршруту та вподобання користувача.  

Для кожного [профілю](../../personal/global-settings.md#default-profile), крім *Перегляд карти*, OsmAnd за замовчуванням вибирає оптимальний [Тип навігації](#navigation-type) та відповідні [параметри маршруту](../routing/osmand-routing.md#routing-types). Однак ви можете вибрати будь-який тип, який вам подобається, та змінити параметри залежно від ваших уподобань та зовнішніх умов майбутньої подорожі.  

Усі параметри маршруту детально описані у відповідних розділах документації:  
*[Маршрутизація автомобілем (Вантажівка, Мотоцикл)](../routing/car-based-routing.md), [Маршрутизація велосипедом (MTB)](../routing/bicycle-based-routing.md), [Маршрутизація мопедом](../routing/moped-routing.md), [Маршрутизація пішоходом](../routing/pedestrian-routing.md), [Маршрутизація громадським транспортом](../routing/public-transport-navigation.md), [Маршрутизація верхи](../routing/horse-routing.md), [Маршрутизація на лижах](../routing/ski-routing.md), [Маршрутизація потягом](../routing/train-routing.md), [Маршрутизація човном](../routing/boat-navigation.md), [Маршрутизація від точки до точки](../routing/direct-to-point-routing.md), [Маршрутизація по прямій лінії](../routing/straight-line-routing.md), [Онлайн-маршрутизація](../routing/online-routing.md), [Маршрутизація BRouter](../routing/brouter.md)*.  


### Перерахувати маршрут {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

Параметр **Перерахунок маршруту** автоматично змінює розрахований маршрут, коли ви відхиляєтеся від нього або рухаєтеся у зворотному напрямку. В обох випадках це налаштування допомагає вам підтримувати напрямок руху та дістатися до пункту призначення, не витрачаючи час на ручний пошук нового маршруту.  

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> у разі відхилення*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | Якщо [Голосові підказки](../guidance/voice-navigation.md#voice-settings) увімкнені, OsmAnd повідомляє, що маршрут перераховується. |
|  *Перерахувати маршрут у разі зворотного напрямку*  | Ваш маршрут буде перераховано, якщо ви рухаєтеся до початкової точки.  |  Якщо це налаштування вимкнено, рух до початкової точки не вважається відхиленням від шляху (якщо він слідує розрахованому маршруту).  |


### Налаштування розробки {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Меню → Налаштування → Профіль програми → Налаштування навігації → Параметри маршруту → Розробка*

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Меню → Налаштування → Профіль програми → Налаштування навігації → Параметри маршруту → Розробка*

![Налаштування навігації iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Параметри в розділі **Розробка** призначені переважно для досвідчених користувачів і доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).  

| Параметр | Опис |
|:------------|:---------------|
| *Тип маршрутизації* (*Android*) / *Алгоритм маршрутизації* (*iOS*) | <ul><li>**A*** 2-фазний (*Android*) / **A*** (*iOS*) додає додаткову фазу до стандартного алгоритму для покращення якості розрахованого маршруту. Ця опція може бути корисною для пошуку маршрутів у великих та складних дорожніх мережах, але розрахунок маршруту може зайняти більше часу.</li><li>**A* classic** (*Android*) / **Highway hierarchies** (*iOS*) оптимізують планування маршруту, віддаючи перевагу основним дорогам та автомагістралям, мінімізуючи кількість поворотів та перехресть на маршруті. Особливо ефективно на великих відстанях.</li><li>**HH (Highway Hierarchies) x Java** (*Android only*) базується на реалізації ієрархічних структур даних для оптимізації пошуку шляху на карті, враховуючи обмеження часу виконання та споживання ресурсів пристрою, і реалізований на платформі Java.</li><li>**HH (Highway Hierarchies) x C++** (*Android only*) — це алгоритм, який використовує мову програмування C++ для ефективної обробки даних дорожньої мережі та побудови оптимальних маршрутів за допомогою ієрархічних структур даних. Він оптимізований для швидкої обробки великих обсягів даних і особливо ефективний для навігації по картах з багатьма дорожніми мережами.</li></ul> |  
| *GPX апроксимація* (*Android only*)  | <ul><li>**Маршрутна** GPX апроксимація в **C++ та Java** використовує дані маршруту для апроксимації GPS-треків з існуючими дорожніми маршрутами, що покращує точність треку та зменшує його розмір.</li><li>**Геометрична** GPX апроксимація в **C++ та Java** працює на основі геометричних принципів для швидкої та точної апроксимації GPS-треків, що дозволяє ефективно обробляти великі обсяги даних.</li></ul> |
| *Автомасштабування* | <ul><li>**Дискретне** дозволяє збільшувати карту до певного рівня деталізації, виміряного кількома дискретними кроками.</li><li>**Плавне** забезпечує поступову зміну масштабу карти з плавними анімаційними ефектами без ривків або стрибків.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Android only*)  | Використовувати [оновлення OsmAnd Live](../../personal/maps-resources.md#osmand-live) під час маршрутизації. Зверніть увагу, що ми рекомендуємо використовувати цю опцію лише для тестування.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Голосові підказки {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Налаштування голосової навігації Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> кнопка* *(або <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Виберіть профіль → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Налаштування голосової навігації iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Перша частина статті *[Голосові підказки / Сповіщення](./voice-navigation.md)* детально описує, як налаштувати голосові підказки.  

Звукові інструкції під час навігації допомагають вам як водієві або пішоходу дістатися до пункту призначення під час [навігації за вибраним маршрутом](../setup/route-navigation.md). Вони містять інформацію про повороти, напрямки руху, дорожні знаки, відстані до пункту призначення та інші фактори, які можуть вплинути на вашу навігацію.  

Якщо ви виберете трек як пункт призначення, вам потрібно використовувати опцію [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads), щоб голосові підказки працювали коректно.

*Голосові підказки* дозволяють зосередитися на дорозі та не відволікатися на карту чи навігаційний пристрій. Вони також підвищують безпеку водіння, скорочують час, необхідний для навігації по незнайомій місцевості, і можуть бути корисними для різних [типів маршрутів](../routing/osmand-routing.md#routing-types).


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Налаштування навігації](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Налаштування навігації](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Налаштування навігації **Екранні сповіщення** вмикає [**Віджет сповіщень**](../../widgets/nav-widgets.md#alert-widget). *Деталі:*

- Коли ви наближаєтеся до однієї з підтримуваних перешкод на дорозі, сповіщення з'являються в нижньому лівому куті карти.
- Якщо ви налаштуєте [*голосові та текстові підказки*](../../navigation/guidance/voice-navigation.md), доступні в додатку OsmAnd, ваша подорож буде комфортнішою та безпечнішою.
- Вигляд та час підказок залежать від ваших налаштувань швидкості. Ви можете знайти їх [у статті](../../../technical/algorithms/voice-prompt-triggering.md).  
- На поведінку *Екранних сповіщень* також впливає налаштування [Показувати точки вздовж маршруту](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Ви можете ***вибрати, які сповіщення*** ви хочете бачити на екрані програми під час навігації:

- **Обмеження швидкості** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). У налаштуваннях екранних сповіщень *Обмеження швидкості* відображається на екрані лише з увімкненими *Попередженнями про рух*. Якщо ви хочете бачити обмеження швидкості під час навігації без інших попереджень, використовуйте [віджет](../../widgets/nav-widgets.md#speed-limit).
- **Попередження про рух** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Додаткову інформацію можна знайти в статті [Екран карти під час навігації](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Пішохідні переходи** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Камери контролю швидкості** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Докладніше про налаштування камери контролю швидкості в OsmAnd читайте в розділі [Типи сповіщень](../../widgets/nav-widgets.md#alert-types) та в статті *Глобальні налаштування*, розділ [Юридичні](../../personal/global-settings.md#legal).
- **Тунелі** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Типи попереджень мають різний візуальний вигляд, який залежить від регіону подорожі. OsmAnd не прагне представити 100% ідентичні дорожні знаки, але вказує на деякі схожості.  
:::


## Карта під час навігації {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Карта використовується під час навігації** для визначення вашого місцезнаходження, планування маршруту та орієнтації на місцевості. Під час навігації ви можете переглядати карту з *автоцентруванням*, переміщувати її та *збільшувати й зменшувати масштаб*, щоб побачити потрібну область. Карта також може відображати маркери, що вказують на цікаві місця, маршрути, погодні умови, дорожні знаки та інші об'єкти, які допоможуть вам орієнтуватися. Карта може оновлюватися в *реальному часі* та відображати *актуальну інформацію*, яка може вплинути на планування маршруту.

Ви можете дізнатися, як змінюється поведінка карти під час навігації, у статті [Екран карти під час навігації](../guidance/map-during-navigation.md).  

## Налаштувати лінію маршруту {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Налаштування навігації](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Налаштування навігації](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

За допомогою налаштування **Налаштувати лінію маршруту** ви можете вибрати вигляд лінії маршруту, яка буде видима на карті під час навігації. Ви можете вибрати *колір*, *ширину лінії* та відображення *стрілок повороту* на ній. Для кожного профілю ви можете вибрати інший вигляд лінії. Усі ці параметри детально описані в статті *Екран карти під час навігації* в розділі [Вигляд лінії маршруту](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Параметри транспортного засобу {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Для оптимального розрахунку маршруту в OsmAnd слід враховувати наступні параметри транспортного засобу:

1. Встановіть [*Швидкість за замовчуванням* або *Швидкість на дорозі*](#default-speed--road-speeds), як [мінімальну та максимальну швидкість](#road-speeds) транспортного засобу. Це допоможе програмі визначити час, необхідний для завершення маршруту, та дозволить їй вибрати найкращий маршрут, враховуючи обмеження швидкості на різних ділянках дороги.
2. Вкажіть [*тип*](#fuel-used-by-motor) палива, що використовується двигуном. Це дозволить програмі оцінити викиди CO2.
3. Введіть [*ємність вашого бака*](#fuel-tank-capacity), щоб точно відстежувати рівень палива та його споживання.
4. Визначте [*параметри розміру та ваги*](#size-parameters) вашого транспортного засобу, що може допомогти програмі розрахувати оптимальний маршрут та уникнути перешкод на дорозі через обмеження.

Правильне налаштування параметрів у додатку OsmAnd допоможе вам уникнути проблем під час навігації маршрутом, вибрати найбільш підходящий відповідно до типу транспортного засобу та дорожніх обмежень, а також розрахувати час для вашої подорожі.


### Параметри розміру {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Параметри транспортного засобу впливають на навігацію та побудову маршруту, оскільки вони визначають доступність доріг, мостів, поромів, дамб та іншої інфраструктури. Якщо висота, ширина, довжина або вага транспортного засобу перевищує допустимі значення для певних ділянок дороги, навігаційна система OsmAnd знайде альтернативний маршрут, щоб уникнути перешкод на шляху.  

- Одиниці вимірювання відповідатимуть налаштуванням, вибраним у *Загальних налаштуваннях → [Одиниці та формати](../../personal/profiles.md#units--formats)*.
- Параметри транспортного засобу можна встановити вручну.
- Якщо ви вручну виберете параметр вимірювання транспортного засобу, програма запропонує вам найближче значення з готового списку. Це необхідно для уникнення помилок та більш правильної побудови маршруту.
- Ви можете вибрати параметри транспортного засобу з готового списку розмірів.
- Не встановлюйте розмір *Немає*, що означає, що до вибраного параметра не застосовуватимуться жодні обмеження.  

#### Обмеження {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Параметр Вага доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Параметр Висота доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Параметр Довжина доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Параметр Ширина доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.  

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Обмеження параметрів транспортного засобу можуть бути важливими для навігації та безпеки дорожнього руху. Деякі з цих обмежень можуть включати:  

1. Обмеження на рух транспортних засобів у певних міських районах.  
2. Обмеження на рух транспортних засобів на певних ділянках дороги, наприклад, де є мости, тунелі з обмеженим простором, низькі естакади, складні повороти або інші споруди.  
3. Обмеження ваги на вісь транспортного засобу можуть бути особливо важливими для вантажівок.
4. Обмеження для транспортних засобів, що рухаються в певних умовах, таких як високі температури, мокрі або засніжені дороги, вночі або в погодних умовах з обмеженою видимістю.

Ці обмеження можуть бути важливими для навігації і повинні враховуватися при плануванні маршруту. Якщо транспортний засіб перевищує обмеження, це може призвести до проблем з безпекою дорожнього руху, пошкодження інфраструктури, штрафів за аварії та інших юридичних наслідків. Тому водії повинні ретельно вивчити маршрут і переконатися, що висота їхнього транспортного засобу відповідає обмеженням.


### Параметри палива {#fuel-parameters}

#### Паливо, що використовується двигуном {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Маршрут навігації Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маршрут навігації iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Якщо ви виберете тип двигуна в параметрах транспортного засобу, дані про [***викиди CO2***](../../navigation/setup/route-details.md#elevation-info) будуть відображатися над графіком у [Деталях маршруту](../setup/route-details.md).
Доступно шість типів палива: ***Бензин, Дизель, ЗВГ, КПГ, Електричний*** та ***Гібридний***.  

**Застосовність:**

Налаштування **Паливо, що використовується двигуном**, доступне лише для навігації на основі транспортних засобів, таких як *[Автомобіль, Мотоцикл та Вантажівка](../../navigation/routing/car-based-routing.md)*.


#### Ємність паливного бака {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>




Параметр **Ємність паливного бака** дозволяє точніше відстежувати рівень палива та його споживання вашим транспортним засобом, вказуючи загальний об'єм вашого бака. Одиниця вимірювання ємності палива визначається налаштуваннями, встановленими в *Меню → Налаштувати профіль → Загальні налаштування → Одиниці та формати → Одиниця об'єму*. Для детального керівництва щодо налаштування одиниць та форматів зверніться до статті [Профіль (Налаштування)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd підтримує наступні одиниці для ємності:

- Галони - **гал**. Це скорочення використовується для позначення як **імперських галонів**, так і **американських галонів**, залежно від вибраних вами одиниць.
- Літри - **л**. Метрична одиниця для ємності.

**Застосовність:**

Налаштування **Ємність паливного бака** доступне лише для навігації на основі транспортних засобів. Для таких типів навігації, як *Велосипед*, *Верхова їзда*, *Пішки* та *Лижі*, цей параметр не відображається в параметрах транспортного засобу.

Ввівши точну ємність вашого паливного бака, програма може надати більш індивідуальний досвід, включаючи:

- Точне відстеження залишку палива на основі вашого споживання.
- Розширене планування маршруту з зупинками для заправки, оптимізованими відповідно до розміру вашого бака.

Щоб забезпечити точні розрахунки та навігаційні підказки, переконайтеся, що вибрана вами одиниця відповідає стандарту вимірювання вашого бака.


### Швидкість за замовчуванням / Швидкість на дорозі {#default-speed--road-speeds}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

Для всіх типів навігації мінімальна та максимальна допустима швидкість, як за замовчуванням, так і по дорозі, можуть бути різними, відповідно до певних значень ([Обмеження швидкості за замовчуванням](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) та обмежень для транспортних засобів. Швидкість також встановлюється з певними кроками, щоб зробити налаштування програми максимально зручними. Для профілів *Пішки*, *Верхова їзда* та *Велосипед* — з невеликими кроками, еквівалентними 0,1 км/год ([Одиниці та формати](https://osmand.net/docs/user/personal/profiles#units--formats)), а для інших профілів — з кроками, еквівалентними 1 км/год.  
Налаштування швидкості визначають, коли активуються [голосові оголошення](../guidance/voice-navigation.md).

Ці параметри використовуються як швидкість для оцінки [часу прибуття](../../widgets/nav-widgets.md#time-to-intermediate), коли швидкість не може бути визначена з даних карти:

- для вибраного профілю;
- якщо використовувані дороги не мають обмежень швидкості, що також може вплинути на маршрутизацію;
- якщо вибрано треки, створені користувачем або імпортовані.


#### Швидкість за замовчуванням {#default-speed}

**Швидкість за замовчуванням** — це встановлена швидкість руху. Вона використовується для розрахунку часу прибуття та визначення оптимального маршруту на основі швидкості руху, яку програма вважає типовою для цього виду транспорту. Наприклад, автомобіль, громадський транспорт, пішохід або швидкість, яку ви встановили вручну.


#### Швидкість на дорозі {#road-speeds}

<InfoAndroidOnly />

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>  

:::note
These settings in iOS are available in *Menu → Settings → app profile → Navigation settings → Route parameters → Road speeds*.
:::

-->

- **Мінімальна швидкість**  
    Налаштування встановлює мінімальну швидкість руху для всіх типів доріг на маршруті. Воно збільшує пріоритет для доріг з рекомендованою швидкістю, нижчою за мінімальну.  
- **Максимальна швидкість**  
    Налаштування встановлює максимальну швидкість руху та зменшує пріоритет для доріг з можливою швидкістю, вищою за максимальну.


## Детальна навігація по треку {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Прив'язати до доріг 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Налаштування навігації Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Детальна навігація по треку*

![Налаштування навігації](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Налаштування навігації](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Функція **Детальна навігація по треку** покращує точність навігації за маршрутом при використанні **маршрутів на основі треків**. Коли ви вибираєте трек як пункт призначення, ви можете увімкнути налаштування [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads) з меню [Слідувати треку](../setup/gpx-navigation.md#follow-track-options). Це гарантує, що трек буде вирівняний з існуючими дорогами для більш плавної та точної навігації.

Існує два варіанти використання *Детальної навігації по треку*:

- **<Translate android="true" ids="ask_every_time"/>** (*налаштування за замовчуванням*) – Опція *Прив'язати до доріг* з'являтиметься в розділі [Деталі маршруту](../setup/route-details.md) кожного разу, коли розраховується маршрут на основі треку. Це дозволяє вам вирішувати, чи застосовувати прив'язку до доріг для кожного сеансу навігації.

- **<Translate android="true" ids="shared_string_always"/>** – Процес прив'язки до доріг буде застосовуватися автоматично для кожного маршруту *навігації по треку* без необхідності ручного підтвердження.

Для отримання додаткової інформації про використання навігації на основі треків відвідайте [Навігація по треку](../setup/gpx-navigation.md).


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](../setup/route-navigation.md)
- [Навігація по треку](../setup/gpx-navigation.md)
- [Навігація по маркерах](../setup/markers-navigation.md)
- [Деталі маршруту](../setup/route-details.md)
- [Екран карти під час навігації](./map-during-navigation.md)
- [Голосові підказки / Сповіщення](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Останнє оновлення: квітень 2025*