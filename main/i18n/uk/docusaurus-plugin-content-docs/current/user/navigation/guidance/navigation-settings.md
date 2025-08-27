---
source-hash: 4563eca520c509cd54bc4bafecf024403e9df17f04d14e9f46ab49b1f9b3e483
sidebar_position: 7
title:  Налаштування навігації
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

Для успішної навігації важливо правильно налаштувати відповідні параметри відповідно до ваших потреб та способу подорожі – автомобілем, пішки, верхи чи на лижах. Ця стаття описує основні параметри маршруту, [голосові підказки](#voice-prompts), [екранні сповіщення](#screen-alerts), [поведінку карти під час навігації](#map-during-navigation) та [вигляд ліній маршруту](#customize-route-line). Вона також деталізує налаштування транспортного засобу, такі як [швидкість за замовчуванням](#default-speed) та [максимальна/мінімальна швидкість](#road-speeds), [тип двигуна](#fuel-used-by-motor) для розрахунку викидів CO2, [ємність паливного баку](#fuel-tank-capacity) та [розмір/вага](#size-parameters), що можуть впливати на маршрут. Налаштування цих параметрів допоможе вам максимально ефективно використовувати OsmAnd та досягти своєї мети без зайвих затримок.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Як відкрити {#how-to-open}

Цей розділ представляє налаштування навігації, необхідні для розрахунку та побудови маршруту, які ви можете встановити для обраного профілю. Це меню включає налаштування для [підготовки маршруту](../setup/route-navigation.md), [екрану карти під час навігації](../guidance/map-during-navigation.md), і те, що ви встановлюєте в *Налаштуваннях навігації*, безпосередньо впливає на відображення даних у [Деталях маршруту](../setup/route-details.md).

Існує три способи доступу до меню налаштувань навігації.

- Перейдіть до головного *Меню → Налаштування*, виберіть потрібний *Профіль* та натисніть *Налаштування навігації*.

- Натисніть піктограму *Навігація* на екрані карти, потім виберіть *Піктограму налаштувань → Налаштування навігації*.

- Перейдіть до головного *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
Профіль за замовчуванням *Перегляд карти* не має налаштувань навігації.
:::


## Тип навігації {#navigation-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>

Навігація є важливою частиною подорожі, і вибір *правильного типу* навігації може значно полегшити вашу подорож. Тип навігації, який ви обираєте, може залежати від того, як ви подорожуєте, і чи маєте ви підключення до Інтернету.

- **Онлайн-навігація**
В основному використовує спеціальну систему маршрутизації або веб-сайт, що дозволяє додатку OsmAnd будувати маршрут на основі поточної інформації та інших факторів. Ви можете прочитати про вибір найкращого маршруту онлайн у статті [Онлайн-маршрутизація](../routing/online-routing.md). Цей тип навігації доступний лише для *версії Android* додатка.

- **Офлайн-навігація**
Не потребує доступу до Інтернету та пропонує ширший вибір [типів навігації](../routing/osmand-routing.md#routing-types), які можна використовувати для розрахунку маршруту. Серед них є *велосипед, човен, автомобіль, пішки, лижі* та *пряма лінія*. Наразі існує 13 основних типів маршрутизації, а також зовнішній тип маршрутизації [BRouter](../routing/brouter.md), який надає додаткові можливості маршрутизації.

Тип навігації визначає, які правила використовуються для розрахунку маршрутів. Якщо вам потрібен певний тип навігації, ви можете **імпортувати власний модифікований файл маршрутизації *XML***. Докладніше про правила маршрутизації читайте на нашій [сторінці GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Також є окрема стаття про формат XML та його використання, [Стиль відображення карти](../../../technical/osmand-file-formats/osmand-rendering-style.md), яка може допомогти вам у створенні файлу маршруту.


## Параметри маршруту {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>

**<Translate android="true" ids="route_parameters"/>** — це налаштування, які визначають, як програма розраховуватиме маршрут до пункту призначення, враховуючи такі фактори, як тип транспорту, пріоритети маршрутизації, умови маршруту, складність маршруту та вподобання користувача.

Для кожного [профілю](../../personal/global-settings.md#default-profile), крім *Перегляду карти*, OsmAnd за замовчуванням вибирає оптимальний [тип навігації](#navigation-type) та відповідні [параметри маршруту](../routing/osmand-routing.md#routing-types). Однак ви можете вибрати будь-який тип, який вам подобається, і змінити параметри залежно від ваших уподобань та зовнішніх умов майбутньої поїздки.

Усі параметри маршруту детально описані у відповідних розділах документації:
*[Маршрутизація автомобілем (Вантажівка, Мотоцикл)](../routing/car-based-routing.md), [Маршрутизація велосипедом (MTB)](../routing/bicycle-based-routing.md), [Маршрутизація мопедом](../routing/moped-routing.md), [Маршрутизація пішки](../routing/pedestrian-routing.md), [Маршрутизація громадським транспортом](../routing/public-transport-navigation.md), [Маршрутизація верхи](../routing/horse-routing.md), [Маршрутизація на лижах](../routing/ski-routing.md), [Маршрутизація поїздом](../routing/train-routing.md), [Маршрутизація човном](../routing/boat-navigation.md), [Маршрутизація до точки](../routing/direct-to-point-routing.md), [Маршрутизація прямою лінією](../routing/straight-line-routing.md), [Онлайн-маршрутизація](../routing/online-routing.md), [Маршрутизація BRouter](../routing/brouter.md)*.


### Перерахувати маршрут {#recalculate-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>

Параметр **Перерахунок маршруту** автоматично змінює розрахований маршрут, коли ви відхиляєтеся від нього або рухаєтеся у протилежному напрямку. В обох випадках це налаштування допомагає вам підтримувати напрямок руху та дістатися до пункту призначення, не витрачаючи час на ручний пошук нового маршруту.

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> у разі відхилення* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Якщо [голосові підказки](../guidance/voice-navigation.md#voice-settings) увімкнено, OsmAnd повідомляє, що маршрут перераховується. |
| *Перерахувати маршрут у разі зворотного напрямку* | Ваш маршрут буде перераховано, якщо ви рухаєтеся до початкової точки. | При вимкненому цьому налаштуванні рух до початкової точки не вважається відхиленням від шляху (якщо він слідує розрахованому маршруту). |


### Налаштування розробки {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Меню → Налаштування → профіль програми → Налаштування навігації → Параметри маршруту → Розробка*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Меню → Налаштування → профіль програми → Налаштування навігації → Параметри маршруту → Розробка*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>

Параметри в розділі **Розробка** призначені переважно для досвідчених користувачів і доступні лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md).

| Параметр | Опис |
|:------------|:---------------|
| *Тип маршрутизації* (*Android*) / *Алгоритм маршрутизації* (*iOS*) | <ul><li>**A*** 2-фазний (*Android*) / **A*** (*iOS*) додає додаткову фазу до алгоритму за замовчуванням для покращення якості розрахованого маршруту. Ця опція може бути корисною для пошуку маршрутів у великих та складних дорожніх мережах, але розрахунок маршруту може зайняти більше часу.</li><li>**A* класичний** (*Android*) / **Ієрархії доріг** (*iOS*) оптимізують планування маршруту, віддаючи перевагу основним дорогам та автомагістралям, мінімізуючи кількість поворотів та перехресть на маршруті. Особливо ефективний на великих відстанях.</li><li>**HH (Ієрархії доріг) x Java** (*лише Android*) базується на реалізації ієрархічних структур даних для оптимізації пошуку шляху на карті, враховуючи обмеження часу виконання та споживання ресурсів пристрою, і реалізований на платформі Java.</li><li>**HH (Ієрархії доріг) x C++** (*лише Android*) — це алгоритм, який використовує мову програмування C++ для ефективної обробки даних дорожньої мережі та побудови оптимальних маршрутів за допомогою ієрархічних структур даних. Він оптимізований для швидкої обробки великих обсягів даних і особливо ефективний для навігації по картах з багатьма дорожніми мережами.</li></ul> |
| *Апроксимація GPX* (*лише Android*) | <ul><li>**На основі маршрутизації** апроксимація GPX у **C++ та Java** використовує дані маршруту для апроксимації GPS-треків з існуючими дорожніми маршрутами, що покращує точність треку та зменшує його розмір.</li><li>**На основі геометрії** апроксимації GPX у **C++ та Java** працюють на основі геометричних принципів для швидкої та точної апроксимації GPS-треків, що дозволяє ефективно обробляти великі обсяги даних.</li></ul> |
| *Автоматичне масштабування* | <ul><li>**Дискретне** дозволяє збільшувати карту до певного рівня деталізації, виміряного кількома дискретними кроками.</li><li>**Плавне** забезпечує поступову зміну масштабу карти з плавними анімаційними ефектами без ривків або стрибків.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*лише Android*) | Використовувати [оновлення OsmAnd Live](../../personal/maps-resources.md#osmand-live) під час маршрутизації. Зауважте, що ми рекомендуємо використовувати цю опцію лише для тестування. |

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

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> кнопка* *(або <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Вибрати профіль → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Перша частина статті *[Голосові підказки / Сповіщення](./voice-navigation.md)* детально описує, як налаштувати голосові підказки.

Аудіоінструкції під час навігації допомагають вам як водієві або пішоходу дістатися до пункту призначення під час [навігації за вибраним маршрутом](../setup/route-navigation.md). Вони містять інформацію про повороти, напрямки руху, дорожні знаки, відстані до пункту призначення та інші фактори, які можуть вплинути на вашу навігацію.

Якщо ви вибираєте трек як пункт призначення, вам потрібно використовувати опцію [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads), щоб голосові підказки працювали правильно.

*Голосові підказки* дозволяють зосередитися на дорозі та не відволікатися на карту чи навігаційний пристрій. Вони також підвищують безпеку водіння, скорочують час, необхідний для навігації незнайомою місцевістю, і можуть бути корисними для різних [типів маршрутів](../routing/osmand-routing.md#routing-types).


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>

Налаштування навігації **Екранні сповіщення** вмикає [**Віджет сповіщень**](../../widgets/nav-widgets.md#alert-widget). *Деталі:*

- Коли ви наближаєтеся до однієї з підтримуваних перешкод на дорозі, сповіщення з'являються в нижньому лівому куті карти.
- Якщо ви налаштуєте [*голосові та текстові підказки*](../../navigation/guidance/voice-navigation.md), доступні в додатку OsmAnd, ваша поїздка буде комфортнішою та безпечнішою.
- Вигляд та час підказок залежать від ваших налаштувань швидкості. Ви можете знайти їх [у статті](../../../technical/algorithms/voice-prompt-triggering.md).
- На поведінку *Екранних сповіщень* також впливає налаштування [Показувати точки вздовж маршруту](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Ви можете ***вибрати, які сповіщення*** ви хочете бачити на екрані програми під час навігації:

- **Обмеження швидкості** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). У налаштуваннях екранних сповіщень *Обмеження швидкості* відображається на екрані лише при увімкнених *Попередженнях про дорожній рух*. Якщо ви хочете бачити обмеження швидкості під час навігації без інших попереджень, використовуйте [віджет](../../widgets/nav-widgets.md#speed-limit).
- **Попередження про дорожній рух** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Додаткову інформацію можна знайти в статті [Екран карти під час навігації](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Пішохідні переходи** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Камери контролю швидкості** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Для отримання додаткової інформації про налаштування камери контролю швидкості в OsmAnd, прочитайте [Типи сповіщень](../../widgets/nav-widgets.md#alert-types) та статтю *Глобальні налаштування*, розділ [Юридичні](../../personal/global-settings.md#legal).
- **Тунелі** ([інформація OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Типи попереджень мають різний візуальний вигляд, який залежить від регіону подорожі. OsmAnd не прагне представити 100% ідентичні дорожні знаки, але вказує на деякі подібності.
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

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Карта використовується під час навігації** для визначення вашого місцезнаходження, планування маршруту та орієнтації на місцевості. Під час навігації ви можете переглядати карту з *автоматичним центруванням*, переміщувати її, а також *збільшувати та зменшувати масштаб*, щоб побачити потрібну область. Карта також може відображати маркери, що вказують на цікаві місця, маршрути, погодні умови, дорожні знаки та інші об'єкти, які допоможуть вам орієнтуватися. Карта може оновлюватися в *реальному часі* та відображати *актуальну інформацію*, яка може вплинути на планування маршруту.

Ви можете дізнатися, як змінюється поведінка карти під час навігації, у статті [Екран карти під час навігації](../guidance/map-during-navigation.md).


## Налаштувати лінію маршруту {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>

За допомогою налаштування **Налаштувати лінію маршруту** ви можете вибрати вигляд лінії маршруту, яка буде видима на карті під час навігації. Ви можете вибрати *колір*, *ширину лінії* та відображення *стрілок повороту* на ній. Для кожного профілю ви можете вибрати інший вигляд лінії. Усі ці параметри детально описані в статті *Екран карти під час навігації* в розділі [Вигляд лінії маршруту](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Параметри транспортного засобу {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>

Для оптимального розрахунку маршруту в OsmAnd слід враховувати наступні параметри транспортного засобу:

1. Встановіть [*Швидкість за замовчуванням* або *Швидкість на дорозі*](#default-speed--road-speeds), а також [мінімальну та максимальну швидкість](#road-speeds) транспортного засобу. Це допоможе програмі визначити час, необхідний для проходження маршруту, і дозволить їй вибрати найкращий маршрут, враховуючи обмеження швидкості на різних ділянках дороги.
2. Вкажіть [*тип*](#fuel-used-by-motor) палива, що використовується двигуном. Це дозволить програмі оцінити викиди CO2.
3. Введіть [*ємність вашого баку*](#fuel-tank-capacity), щоб точно відстежувати рівень палива та його споживання.
4. Визначте [*параметри розміру та ваги*](#size-parameters) вашого транспортного засобу, що може допомогти програмі розрахувати оптимальний маршрут та уникнути перешкод на дорозі через обмеження.

Правильне налаштування параметрів у додатку OsmAnd допоможе вам уникнути проблем під час навігації маршрутом, вибрати найбільш підходящий відповідно до типу транспортного засобу та дорожніх обмежень, а також розрахувати час для вашої поїздки.


### Параметри розміру {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Параметри транспортного засобу впливають на навігацію та побудову маршруту, оскільки вони визначають доступність доріг, мостів, поромів, дамб та іншої інфраструктури. Якщо висота, ширина, довжина або вага транспортного засобу перевищує допустимі значення для певних ділянок дороги, навігаційна система OsmAnd знайде альтернативний маршрут, щоб уникнути перешкод на шляху.

- Одиниці вимірювання відповідатимуть налаштуванням, вибраним у *Загальних налаштуваннях → [Одиниці та формати](../../personal/profiles.md#units--formats)*.
- Параметри транспортного засобу можна встановити вручну.
- Якщо ви вручну виберете параметр вимірювання транспортного засобу, програма запропонує вам найближче значення з готового списку. Це необхідно для уникнення помилок та більш правильної побудови маршруту.
- Ви можете вибрати параметри транспортного засобу з готового списку розмірів.
- Не встановлюйте розмір *Немає*, що означає, що жодних обмежень на вибраний параметр не буде застосовано.

#### Обмеження {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> Параметр Вага доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.** [**<Translate android="true" ids="routing_attr_height_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> Параметр Висота доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> Параметр Довжина доступний лише для таких типів навігації, як [*Автомобіль, Вантажівка* та *Мотоцикл*](../../navigation/routing/car-based-routing.md).

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> обмеження**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> Параметр Ширина доступний лише для таких типів навігації, як *[Автомобіль, Вантажівка, Мотоцикл](../../navigation/routing/car-based-routing.md)* та *[Човен](../../navigation/routing/boat-navigation.md)*.

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Обмеження параметрів транспортного засобу можуть бути важливими для навігації та безпеки дорожнього руху. Деякі з цих обмежень можуть включати:

1. Обмеження на рух транспортних засобів у певних міських районах.
2. Обмеження на рух транспортних засобів на певних ділянках дороги, наприклад, де є мости, тунелі з обмеженим простором, низькі естакади, складні повороти або інші споруди.
3. Обмеження ваги на вісь транспортного засобу можуть бути особливо важливими для вантажівок.
4. Обмеження для транспортних засобів, що рухаються в певних умовах, таких як високі температури, мокрі або засніжені дороги, вночі або в погодних умовах з обмеженою видимістю.

Ці обмеження можуть бути важливими для навігації та повинні враховуватися при плануванні маршруту. Якщо транспортний засіб перевищує обмеження, це може призвести до проблем з безпекою дорожнього руху, пошкодження інфраструктури, штрафів за аварії та інших юридичних наслідків. Тому водії повинні ретельно вивчити маршрут і переконатися, що висота їхнього транспортного засобу відповідає обмеженням.


### Параметри палива {#fuel-parameters}

#### Паливо, що використовується двигуном {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

Якщо ви виберете тип двигуна в параметрах транспортного засобу, дані про [***викиди CO2***](../../navigation/setup/route-details.md#elevation-info) будуть відображені над графіком у [Деталях маршруту](../setup/route-details.md).
Доступні шість типів палива: ***Бензин, Дизель, Зріджений газ, Стиснений природний газ, Електрика*** та ***Гібрид***.

**Застосовність:**

Налаштування **Паливо, що використовується двигуном** доступне лише для навігації на основі транспортних засобів, таких як *[Автомобіль, Мотоцикл та Вантажівка](../../navigation/routing/car-based-routing.md)*.


#### Ємність паливного баку {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>

Параметр **Ємність паливного баку** дозволяє точніше відстежувати рівень палива та його споживання вашим транспортним засобом, надаючи загальний об'єм вашого баку. Одиниця вимірювання ємності палива визначається налаштуваннями, встановленими в *Меню → Налаштувати профіль → Загальні налаштування → Одиниці та формати → Одиниця об'єму*. Для детальних вказівок щодо налаштування одиниць та форматів зверніться до статті [Профіль (Налаштування)](https://osmand.net/docs/user/personal/profiles#units--formats).

OsmAnd підтримує наступні одиниці для ємності:

- Галони - **гал**. Це скорочення використовується для позначення як **імперських галонів**, так і **американських галонів**, залежно від вибраних вами одиниць.
- Літри - **л**. Метрична одиниця для ємності.

**Застосовність:**

Налаштування **Ємність паливного баку** доступне лише для навігації на основі транспортних засобів. Для таких типів навігації, як *Велосипед*, *Верхова їзда*, *Пішки* та *Лижі*, цей параметр не відображається в Параметрах транспортного засобу.

Ввівши точну ємність вашого паливного баку, програма може надати більш індивідуальний досвід, включаючи:

- Точне відстеження залишку палива на основі вашого споживання.
- Покращене планування маршруту з зупинками для заправки, оптимізованими відповідно до розміру вашого баку.

Щоб забезпечити точні розрахунки та навігаційні підказки, переконайтеся, що вибрана вами одиниця відповідає стандарту вимірювання вашого баку.


### Швидкість за замовчуванням {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>

**Швидкість за замовчуванням** — це швидкість руху за замовчуванням для цього виду транспорту ([Обмеження швидкості за замовчуванням](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). Для профілів *Пішки*, *Верхова їзда* та *Велосипед* — з невеликими кроками, еквівалентними 0,1 км/год (миль/год) ([Одиниці та формати](https://osmand.net/docs/user/personal/profiles#units--formats)), а для інших профілів — з кроками, еквівалентними 1 км/год (1 миль/год). Вона використовується:
- Для оцінки [часу маршруту](../../widgets/nav-widgets.md#time-to-intermediate), коли швидкість не може бути визначена з доріг, як у [GPX-навігації](../setup/gpx-navigation.md), [Лижних маршрутах](../routing/ski-routing.md), [Човнових маршрутах](../routing/boat-navigation.md), [Пішохідних](../routing/pedestrian-routing.md) та інших подібних профілях.
- Для визначення моменту активації [голосових оголошень](../guidance/voice-navigation.md).
- Для визначення ETA для маркерів карти за навігацією прямою лінією, якщо середня швидкість ще не розрахована.

Вона використовується для розрахунку часу прибуття та визначення оптимального маршруту на основі швидкості руху, яку програма вважає типовою. Наприклад, автомобіль, громадський транспорт, пішохід або швидкість, яку ви встановили вручну.


### Швидкість на дорозі {#road-speeds}


![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

Для деяких типів навігації можна встановити мінімальну та максимальну допустиму швидкість. Якщо вона встановлена, то механізм маршрутизації припускає, що транспортний засіб або режим пересування не буде рухатися швидше за ліміт і не буде рухатися повільніше за мінімальну швидкість.
Наприклад, це дозволяє створити **економічний** маршрут, де споживання палива є оптимальним при встановленій **максимальній швидкості**, а двигун знайде коротший маршрут, уникаючи довших, але швидших доріг.

- **Мінімальна швидкість**
Налаштування встановлює мінімальну швидкість руху для всіх типів доріг на маршруті. Воно збільшує пріоритет для доріг з рекомендованою швидкістю, нижчою за мінімальну.
- **Максимальна швидкість**
Налаштування встановлює максимальну швидкість руху та зменшує пріоритет для доріг з можливою швидкістю, вищою за максимальну.


## Детальне ведення по треку {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Детальне ведення по треку*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Функція **Детальне ведення по треку** покращує точність навігації за маршрутом при використанні **маршрутів на основі треків**. Коли ви вибираєте трек як пункт призначення, ви можете увімкнути налаштування [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads) з меню [Слідувати треку](../setup/gpx-navigation.md#follow-track-options). Це забезпечує вирівнювання треку з існуючими дорогами для більш плавної та точної навігації.

Існує два варіанти використання *Детального ведення по треку*:

- **<Translate android="true" ids="ask_every_time"/>** (*налаштування за замовчуванням*) – Опція *Прив'язати до доріг* з'являтиметься в розділі [Деталі маршруту](../setup/route-details.md) щоразу, коли розраховується маршрут на основі треку. Це дозволяє вам вирішувати, чи застосовувати прив'язку до доріг для кожного сеансу навігації.

- **<Translate android="true" ids="shared_string_always"/>** – Процес прив'язки до доріг буде застосовуватися автоматично для кожного маршруту *навігації за треком* без необхідності ручного підтвердження.

Для отримання додаткової інформації про використання навігації на основі треків відвідайте [Навігація за треком](../setup/gpx-navigation.md).


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](../setup/route-navigation.md)
- [Навігація за треком](../setup/gpx-navigation.md)
- [Навігація за маркерами](../setup/markers-navigation.md)
- [Деталі маршруту](../setup/route-details.md)
- [Екран карти під час навігації](./map-during-navigation.md)
- [Голосові підказки / Сповіщення](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)