---
source-hash: 2df261c9180b4551af320e1c543ad9f218568286c2606e5a64d23089fbff8bdd
sidebar_position: 1
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

Для успішної навігації важливо правильно налаштувати відповідні параметри відповідно до ваших потреб і способу пересування - автомобілем, пішки, верхи на коні чи на лижах. У цій статті описано основні параметри маршруту, [Голосові підказки](#voice-prompts), [Екранні сповіщення](#screen-alerts), [Поведінка карти під час навігації](#map-during-navigation) та [Вигляд лінії маршруту](#customize-route-line). Також детально описано [Параметри транспортного засобу](#vehicle-parameters), такі як швидкість за замовчуванням, тип двигуна для розрахунку CO2, місткість паливного бака та обмеження за розміром/вагою. Налаштування цих параметрів допоможе вам отримати максимальну користь від використання OsmAnd і досягти мети без зайвих затримок.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### Як відкрити {#how-to-open}

У цьому розділі представлені налаштування навігації, необхідні для розрахунку та побудови маршруту, які ви можете встановити для обраного профілю. Це меню містить налаштування для [Підготовки маршруту](../setup/route-navigation.md), [Екрана карти під час навігації](../guidance/map-during-navigation.md), а те, що ви встановите в *Налаштуваннях навігації*, безпосередньо впливає на відображення даних у [Деталях маршруту](../setup/route-details.md).

Існує три способи доступу до меню налаштувань навігації.

- Перейдіть до головного *Меню → Налаштування*, виберіть потрібний *Профіль* і торкніться *Налаштування навігації*.

- Торкніться іконки *Навігація* на екрані карти, потім виберіть *іконку Налаштування → Налаштування навігації*.

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

Навігація є важливою частиною подорожі, і вибір *правильного типу* навігації може значно полегшити вашу поїздку. Тип навігації, який ви обираєте, може залежати від того, як ви подорожуєте, і чи є у вас підключення до Інтернету.  

- **Онлайн-навігація**
    В основному використовує спеціальну систему маршрутизації або вебсайт, що дозволяє додатку OsmAnd прокладати маршрут на основі поточної інформації та інших факторів. Про вибір найкращого маршруту онлайн ви можете прочитати у статті [Онлайн-маршрутизація](../routing/online-routing.md). Цей тип навігації доступний лише для *Android-версії* додатка.  

- **Офлайн-навігація**
Не вимагає доступу до Інтернету і пропонує ширший вибір [типів навігації](../routing/osmand-routing.md#routing-types), які можна використовувати для розрахунку маршруту. Серед них *велосипед, човен, автомобіль, пішки, лижі* та *пряма лінія*. Наразі існує 13 основних типів маршрутизації, а також зовнішній тип маршрутизації [BRouter](../routing/brouter.md), що надає додаткові можливості для маршрутизації.  

Тип навігації визначає, які правила використовуються для розрахунку маршрутів. Якщо вам потрібен певний тип навігації, ви можете **імпортувати власний змінений файл маршрутизації у форматі *XML***. Детальніше про правила маршрутизації читайте на нашій [сторінці GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). Також є окрема стаття про формат XML та його використання, [Стиль рендерингу карти](../../../technical/osmand-file-formats/osmand-rendering-style.md), яка може допомогти вам у створенні файлу маршруту.  


## Параметри маршруту {#route-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** — це налаштування, які визначають, як додаток розраховуватиме маршрут до пункту призначення, враховуючи такі фактори, як тип транспорту, пріоритети маршрутизації, умови маршруту, його складність та вподобання користувача.  

Для кожного [профілю](../../personal/global-settings.md#default-profile), окрім *Перегляд карти*, OsmAnd за замовчуванням обирає оптимальний [Тип навігації](#navigation-type) та відповідні [параметри маршруту](../routing/osmand-routing.md#routing-types). Однак ви можете вибрати будь-який тип, який вам подобається, і змінити параметри залежно від ваших уподобань та зовнішніх умов майбутньої поїздки.  

Усі параметри маршруту детально описані у відповідних розділах документації:  
*[Автомобільна маршрутизація (Вантажівка, Мотоцикл)](../routing/car-based-routing.md), [Велосипедна маршрутизація (MTB)](../routing/bicycle-based-routing.md), [Маршрутизація для мопедів](../routing/moped-routing.md), [Пішохідна маршрутизація](../routing/pedestrian-routing.md), [Маршрутизація громадським транспортом](../routing/public-transport-navigation.md), [Кінна маршрутизація](../routing/horse-routing.md), [Лижна маршрутизація](../routing/ski-routing.md), [Залізнична маршрутизація](../routing/train-routing.md), [Човнова маршрутизація](../routing/boat-navigation.md), [Маршрутизація по прямій до точки](../routing/direct-to-point-routing.md), [Маршрутизація по прямій лінії](../routing/straight-line-routing.md), [Онлайн-маршрутизація](../routing/online-routing.md), [Маршрутизація BRouter](../routing/brouter.md)*.  


### Перерахунок маршруту {#recalculate-route}

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

Параметр **Перерахунок маршруту** автоматично змінює розрахований маршрут, коли ви відхиляєтеся від нього або їдете у зворотному напрямку. В обох випадках це налаштування допомагає вам підтримувати напрямок руху та дістатися до місця призначення, не витрачаючи час на ручний пошук нового маршруту.  

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> у разі відхилення* | <Translate android="true" ids="recalculate_route_distance_promo"/> | Якщо [Голосові підказки](../guidance/voice-navigation.md#voice-settings) увімкнені, OsmAnd оголошує, що маршрут перераховується. |
|  *Перераховувати маршрут у разі руху у зворотному напрямку*  | Ваш маршрут буде перераховано, якщо ви рухатиметеся до початкової точки.  |  Якщо це налаштування вимкнено, рух до початкової точки не вважається відхиленням від шляху (доки він слідує розрахованому маршруту).  |


### Налаштування для розробників {#development-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Меню → Налаштування → профіль додатку → Налаштування навігації → Параметри маршруту → Для розробників*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Меню → Налаштування → профіль додатку → Налаштування навігації → Параметри маршруту → Для розробників*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

Параметри в розділі **Для розробників** призначені переважно для досвідчених користувачів і доступні лише за умови увімкнення [плагіна для розробників OsmAnd](../../plugins/development.md).  

| Параметр | Опис |
|:------------|:---------------|
| *Тип маршрутизації* (*Android*) / *Алгоритм маршрутизації* (*iOS*) | <ul><li>**A*** 2-фазний (*Android*) / **A*** (*iOS*) додає додаткову фазу до алгоритму за замовчуванням для покращення якості розрахованого маршруту. Цей варіант може бути корисним для пошуку маршрутів у великих і складних дорожніх мережах, але розрахунок маршруту може зайняти більше часу.</li><li>**A* класичний** (*Android*) / **Ієрархії автомагістралей** (*iOS*) оптимізує планування маршруту, віддаючи перевагу головним дорогам та автомагістралям, мінімізуючи кількість поворотів та розв'язок на маршруті. Особливо ефективний на великих відстанях.</li><li>**HH (Ієрархії автомагістралей) x Java** (*лише для Android*) базується на реалізації ієрархічних структур даних для оптимізації пошуку шляху на карті, враховуючи обмеження часу виконання та споживання ресурсів пристрою, і реалізований на платформі Java.</li><li>**HH (Ієрархії автомагістралей) x C++** (*лише для Android*) — це алгоритм, який використовує мову програмування C++ для ефективної обробки даних дорожньої мережі та побудови оптимальних маршрутів за допомогою ієрархічних структур даних. Він оптимізований для швидкої обробки великих обсягів даних і особливо ефективний для навігації по картах з великою кількістю дорожніх мереж.</li></ul> |  
| *Апроксимація GPX* (*лише для Android*)  | <ul><li>Апроксимація GPX **на основі маршрутизації** на **C++ та Java** використовує дані маршруту для апроксимації GPS-треків існуючими дорожніми маршрутами, що покращує точність треку та зменшує його розмір.</li><li>Апроксимація GPX **на основі геометрії** на **C++ та Java** працює на основі геометричних принципів для швидкої та точної апроксимації GPS-треків, що дозволяє ефективно обробляти великі обсяги даних.</li></ul> |
| *Автоматичне масштабування* | <ul><li>**Дискретне** дозволяє масштабувати карту до певного рівня деталізації, що вимірюється кількома дискретними кроками.</li><li>**Плавне** забезпечує поступову зміну масштабу карти з плавними анімаційними ефектами без ривків та стрибків.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*лише для Android*)  | Використовуйте [Live-оновлення](../../personal/maps-resources.md#live-updates) під час маршрутизації. Зверніть увагу, що ми рекомендуємо використовувати цю опцію лише для тестування.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [Live updates](../../personal/maps-resources.md#live-updates) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Голосові підказки {#voice-prompts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *кнопка <Translate ios="true" ids="routing_settings"/>* *(або <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Виберіть профіль → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

Перша частина статті *[Голосові підказки / Сповіщення](./voice-navigation.md)* детально описує, як налаштувати голосові підказки.  

Звукові інструкції під час навігації допомагають вам як водієві або пішоходу дістатися до місця призначення під час [навігації за обраним маршрутом](../setup/route-navigation.md). Вони містять інформацію про повороти, напрямки руху, дорожні знаки, відстані до пункту призначення та інші фактори, які можуть вплинути на вашу навігацію.  

Якщо ви обираєте трек як пункт призначення, для коректної роботи голосових підказок необхідно використовувати опцію [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads).

*Голосові підказки* дозволяють зосередитися на дорозі і не відволікатися на карту або навігаційний пристрій. Вони також підвищують безпеку водіння, скорочують час, необхідний для навігації по незнайомій місцевості, і можуть бути корисними для різних [типів маршрутів](../routing/osmand-routing.md#routing-types).

У розділі **Оголошувати** ви можете вибрати, які типи сповіщень повинні відтворюватися або відображатися під час навігації:

- **Поворот-за-поворотом напрямки** (лише для Android) – дозволяє увімкнути або вимкнути стандартні інструкції навігації, такі як *«Поверніть ліворуч»*, *«Поверніть праворуч»* або *«Через 200 метрів…»*. Коли опція вимкнена, оголошення поворотів і назв вулиць не надаються, тоді як сповіщення для контрольних точок, користувацьких точок і подій маршруту залишаються активними. Цей режим призначений для таких занять, як рафтинг, піші прогулянки чи велосипедні прогулянки вздовж заздалегідь записаних треків, коли потрібні лише сповіщення для вручну доданих контрольних точок.
- **Назви вулиць (TTS)** – оголошує назви вулиць уздовж вашого маршруту.
- **Номер виїзду** – оголошує номер виїзду під час руху автомагістралями.
- **Попередження про дорожній рух** – надає сповіщення про важливі дорожні події, такі як затори чи обмеження.
- **Пішохідні переходи** – попереджає вас при наближенні до пішохідних переходів.
- **[Камери контролю швидкості](https://osmand.net/docs/user/navigation/guidance/voice-navigation#speed-cameras)**  – сповіщає про розташування камер контролю швидкості (де це дозволено законом).
- **Тунелі** – повідомляє вас при в'їзді в тунель.


## Екранні сповіщення {#screen-alerts}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

Налаштування навігації **Екранні сповіщення** вмикає [**Віджет сповіщень**](../../widgets/nav-widgets.md#alert-widget). *Деталі:*

- Коли ви наближаєтеся до однієї з підтримуваних перешкод на дорозі, у нижньому лівому куті карти з'являються сповіщення.
- Якщо ви налаштуєте [*голосові та текстові підказки*](../../navigation/guidance/voice-navigation.md), доступні в додатку OsmAnd, ваша поїздка буде більш комфортною та безпечною.
- Зовнішній вигляд і час появи підказок залежать від налаштувань швидкості. Ви можете знайти їх [у статті](../../../technical/algorithms/voice-prompt-triggering.md).  
- На поведінку *Екранних сповіщень* також впливає налаштування [Показувати точки вздовж маршруту](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route).

Ви можете ***вибрати, які сповіщення*** ви хочете бачити на екрані додатка під час навігації:

- **Обмеження швидкості** ([інформація з OSM Wiki](https://wiki.openstreetmap.org/wiki/Speed_limits)). У налаштуваннях екранних сповіщень *Обмеження швидкості* відображається на екрані лише при увімкнених *Попередженнях про дорожній рух*. Якщо ви хочете бачити обмеження швидкості під час навігації без інших попереджень, використовуйте [віджет](../../widgets/nav-widgets.md#speed-limit).
- **Попередження про дорожній рух** ([інформація з OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Додаткову інформацію можна знайти у статті [Екран карти під час навігації](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Пішохідні переходи** ([інформація з OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Камери контролю швидкості** ([інформація з OSM Wiki](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). Для отримання додаткової інформації про налаштування камер контролю швидкості в OsmAnd, прочитайте [Типи сповіщень](../../widgets/nav-widgets.md#alert-types) та статтю *Загальні налаштування*, розділ [Правова інформація](../../personal/global-settings.md#legal).
- **Тунелі** ([інформація з OSM Wiki](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
Типи попереджень мають різний візуальний вигляд, що залежить від регіону подорожі. OsmAnd не має на меті представити 100% ідентичні дорожні знаки, але вказує на деякі подібності.  
:::


## Карта під час навігації {#map-during-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

**Карта використовується під час навігації** для визначення вашого місцезнаходження, планування маршруту та орієнтування на місцевості. Під час навігації ви можете переглядати карту з *автоматичним центруванням*, переміщати її та *збільшувати та зменшувати масштаб*, щоб побачити потрібну область. Карта також може відображати маркери, що вказують на цікаві місця, маршрути, погодні умови, дорожні знаки та інші об'єкти, які допоможуть вам орієнтуватися. Карта може оновлюватися в *реальному часі* та відображати *актуальну інформацію*, яка може вплинути на планування маршруту.

Ви можете дізнатися, як змінюється поведінка карти під час навігації, у статті [Екран карти під час навігації](../guidance/map-during-navigation.md).  

## Налаштування лінії маршруту {#customize-route-line}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

За допомогою налаштування **Налаштування лінії маршруту** ви можете вибрати вигляд лінії маршруту, яка буде відображатися на карті під час навігації. Ви можете вибрати *колір*, *ширину лінії* та відображення на ній *стрілок повороту*. Для кожного профілю можна вибрати різний вигляд лінії. Всі ці параметри детально описані в статті *Екран карти під час навігації* в розділі [Вигляд лінії маршруту](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Параметри транспортного засобу {#vehicle-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

Щоб OsmAnd розраховував найоптимальніший маршрут, дуже важливо налаштувати параметри вашого транспортного засобу, включаючи його швидкість, розміри, вагу та тип палива, що дозволяє додатку точно оцінювати час поїздки, уникати дорожніх обмежень та відстежувати споживання палива, як пояснено в нашому повному посібнику з [Параметрів транспортного засобу](./vehicle-parameters.md).


## Детальні вказівки по треку {#detailed-track-guidance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Детальні вказівки по треку*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

Функція **Детальні вказівки по треку** підвищує точність навігації по маршруту при використанні **маршрутів на основі треків**. Коли ви обираєте трек як пункт призначення, ви можете увімкнути налаштування [Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads) з меню [Слідувати треком](../setup/gpx-navigation.md#follow-track-options). Це гарантує, що трек буде вирівняно з існуючими дорогами, тому навігація надаватиме точні інструкції на кільцевих розв'язках, поворотах, надаватиме обмеження швидкості, смуги для повороту та назви вулиць.

Існує два варіанти використання *Детальних вказівок по треку*:

- **<Translate android="true" ids="ask_every_time"/>** (*налаштування за замовчуванням*) – Опція *Прив'язати до доріг* з'являтиметься в розділі [Деталі маршруту](../setup/route-details.md) кожного разу, коли розраховується маршрут на основі треку. Це дозволяє вам вирішувати, чи застосовувати прив'язку до доріг для кожної сесії навігації.

- **<Translate android="true" ids="shared_string_always"/>** – Процес прив'язки до доріг буде застосовуватися автоматично для кожного маршруту *навігації по треку* без необхідності ручного підтвердження.

Для отримання додаткової інформації про використання навігації на основі треків відвідайте [Навігація по треку](../setup/gpx-navigation.md).


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](../setup/route-navigation.md)
- [Навігація по треку](../setup/gpx-navigation.md)
- [Навігація за маркерами](../setup/markers-navigation.md)
- [Деталі маршруту](../setup/route-details.md)
- [Екран карти під час навігації](./map-during-navigation.md)
- [Голосові підказки / Сповіщення](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)