---
source-hash: 7021923c986f2cd60c51183c1396e4c59265f7a68edc042e4249ee005d069bf9
sidebar_position: 0
title:  Про маршрутизацію в OsmAnd
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Офлайн-маршрутизація в OsmAnd базується на даних OpenStreetMap та надає різноманітні маршрути для різних цілей. Це список попередньо визначених типів маршрутизації, який можна розширити. Правила навігації містяться у файлі [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) і використовуються для офлайн-маршрутизації. Тип маршруту змінюється автоматично, коли ви змінюєте свій профіль.


## Типи маршрутизації {#routing-types}

У OsmAnd попередньо встановлені наступні профілі з їхніми типами маршрутизації: *Автомобіль, Велосипед, Пішки, Вантажівка, Мотоцикл, Мопед, Громадський транспорт, Човен, Літак, Лижі, Потяг, Верхова їзда*. Крім них, ви можете створити власні профілі зі специфічними правилами маршрутизації або [змінити алгоритм маршрутизації OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Профілі [**Вантажівка, Мотоцикл, Мопед, Потяг, Літак, Човен та Верхова їзда**](./osmand-routing.md) за замовчуванням вимкнені. Щоб використовувати ці профілі, їх потрібно активувати в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Тип навігації [**Прямо до точки**](./direct-to-point-routing.md) не має власного профілю і може використовуватися з будь-яким увімкненим профілем.

- Офлайн-маршрутизацію OsmAnd можна **налаштувати, змінивши файл [.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Додаткову інформацію дивіться у статті [*Налаштувати офлайн-маршрутизацію*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Категорія | Опис | Примітка |
|:------------|:---------------|:---------------|
| *Офлайн-маршрутизація OsmAnd*  | Механізм офлайн-маршрутизації OsmAnd використовує попередньо завантажені карти як джерело даних для розрахунку маршруту. | Типи навігації: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Мопед](./moped-routing.md), [Мотоцикл](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Вантажівка](car-based-routing#route-parameters---truck), [Потяг](./train-routing.md).            |
| *Маршрутизація прямо до точки* | Також використовує офлайн-карти та надає маршрутизацію по прямій лінії (або навігацію *з точки в точку*).  | Типи навігації: *[Пряма лінія](./straight-line-routing.md)*,  *[Прямо до точки](./direct-to-point-routing.md)*.  |
| [*BRouter* *(офлайн)*](./brouter.md)  | Офлайн-маршрутизація, що надається [додатком BRouter](https://brouter.de/).  | Доступно **лише для Android**. Повний опис читайте [тут](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Онлайн-маршрутизація будує маршрут, використовуючи ресурси серверів онлайн через підключення до Інтернету. | Доступно **лише для Android**. Ви можете налаштувати [онлайн-маршрутизацію](./online-routing.md) для побудови маршруту з різних онлайн-двигунів маршрутизації, таких як [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |

- *[Автомобільна маршрутизація (Вантажівка, Мотоцикл)](./car-based-routing.md)* - OsmAnd надає інструкції з водіння для водіїв легкових автомобілів, вантажівок та мотоциклів.
- *[Велосипедна маршрутизація (MTB)](./bicycle-based-routing.md)* - Велосипедна маршрутизація надає навігаційні підказки спеціально для велосипедистів та любителів MTB. Вона також може використовуватися водіями мопедів (скутерів).
- *[Пішохідна маршрутизація](./pedestrian-routing.md)* - може використовуватися не тільки для прогулянок містом, але й під час піших походів.
- *[Маршрутизація для мопедів](./moped-routing.md)* - базується на велосипедній маршрутизації, хоча має свої особливості.
- *[Маршрутизація для громадського транспорту](./public-transport-navigation.md)* - може допомогти вам під час подорожей містом.
- *[Маршрутизація для верхової їзди](./horse-routing.md)* - надає вершникам інструменти, необхідні для планування та насолоди їхніми заняттями верховою їздою.
- *[Маршрутизація для лиж](./ski-routing.md)* - дозволяє користувачам планувати та навігувати лижними турами та іншими зимовими видами спорту за допомогою мобільного додатку OsmAnd.
- *[Маршрутизація для потягів](./train-routing.md)* - надає можливість використовувати залізничні колії для навігації.
- *[Маршрутизація для човнів](./boat-navigation.md)* - може використовуватися для побудови маршруту по річках, каналах, невеликих озерах та у відкритому морі, але тільки якщо фарватери позначені в OpenStreetMap.
- *[Маршрутизація по прямій лінії](./straight-line-routing.md)* - надає маршрутизацію по прямій лінії (або навігацію "з точки в точку"), яка перераховується при зміні вашого місцезнаходження.
- *[Маршрутизація прямо до точки](./direct-to-point-routing.md)* - надає маршрутизацію по прямій лінії (або навігацію "з точки в точку"), яка залишається стабільною протягом усієї навігації, на відміну від маршрутизації **По прямій лінії** (перерахунок маршруту вимкнено).


## Налаштувати офлайн-маршрутизацію {#customize-offline-routing}

Ви також можете створити свій **власний файл routing.xml** або змінити стандартний **routing.xml** та використовувати його для навігації (тільки для досвідчених користувачів OsmAnd).

- Скопіюйте файл [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) на свій пристрій. Уважно прочитайте [Довідкову інформацію](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Як приклад, перегляньте файл [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) користувача OsmAnd.
- Після внесення змін новий файл *routing.xml* можна додати до OsmAnd, торкнувшись його та вибравши відкрити його в додатку OsmAnd.
- Виберіть змінений [Тип навігації](../../navigation/guidance/navigation-settings.md#navigation-type) для свого профілю.

Більше інформації про цю функцію можна знайти в [*Технічній документації*](../../../technical/osmand-file-formats/osmand-routing-xml.md) та на [*сторінці OsmAnd на GitHub*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).


## Уникати певних доріг {#avoid-specific-roads}

:::caution
Функція "Уникати доріг" є глобальною і впливає на всі **[Типи маршрутизації](#routing-types)**, крім *[Онлайн-маршрутизації](../routing/online-routing.md)* та *[BRouter](../routing/brouter.md)*.
:::

Існує два можливих способи вибрати, які дороги уникати при розрахунку маршруту:

- Виберіть тип дороги в розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) в [Налаштуваннях навігації](../guidance/navigation-settings.md). Опис цього налаштування надано у статтях про налаштування [Типів маршрутизації](#routing-types). Як приклад, дивіться опис типу маршрутизації [Автомобіль / Вантажівка / Мотоцикл](../routing/car-based-routing.md#route-parameters---car).
- Ви також можете вибрати конкретні дороги, які не будуть використовуватися для маршрутизації, за допомогою опції *[Уникати доріг](../../map/map-context-menu.md#avoid-road)* через *контекстне меню карти* або за допомогою *[Меню "Уникати доріг"](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- Дорога повинна бути позначена на максимальному масштабі, оскільки OsmAnd може неправильно інтерпретувати дотик і заблокувати, наприклад, неправильну сторону дороги з двома проїжджими частинами або тротуар.
- Функція "Уникати певних доріг" некоректно працює з опцією [Навігація за треком](../setup/gpx-navigation.md) і не впливає на спрощену [Навігацію за маркерами](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Меню "Уникати доріг" {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *Кнопка навігації → Налаштування → Уникати доріг...*

![Меню "Уникати доріг" Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Кнопка навігації → Налаштування → Уникати доріг*

![Меню "Уникати доріг" iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

У цьому меню ви можете скасувати попередній вибір дороги, яку слід уникати. Для цього торкніться хрестика (Android) або червоного **"-"** навпроти дороги, яку ви маєте намір використовувати для розрахунку маршруту.

Використовуючи опцію *Вибрати на карті*, ви можете продовжувати позначати дороги як непридатні для маршрутизації на карті OsmAnd.

Коли ви вибираєте дорогу, яку слід уникати, за допомогою *контекстного меню карти* або *меню "Уникати доріг"*, список доріг буде показано над екраном карти.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Список доріг, які слід уникати на карті Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Список доріг, які слід уникати на карті iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>


## Експорт / Імпорт {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Експорт доріг, які слід уникати на карті Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Експорт доріг, які слід уникати на карті Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Експорт доріг, які слід уникати на карті iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Експорт доріг, які слід уникати на карті iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Залежно від налаштувань вашого пристрою та доступних додатків, весь ваш список доріг, які слід уникати, або лише одна з них можуть бути [експортовані](../../personal/import-export.md#export) як файл `.osf` до різних місць. Виберіть дороги, які ви хочете експортувати, у запропонованому списку.

Ви можете [імпортувати](../../personal/import-export.md#import) дороги, які слід уникати під час розрахунку маршруту, з інших джерел у форматі файлу `.osf`. Також це можна зробити за допомогою опції *Імпорт* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Ви можете вибрати імпорт усіх даних або лише кількох доріг, які слід уникати (позначивши дорогу галочкою у списку).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Імпорт доріг, які слід уникати на карті Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Імпорт доріг, які слід уникати на карті iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Найзручніший спосіб синхронізувати дороги, які слід уникати, між вашими пристроями — це використовувати [OsmAnd Cloud](../../personal/osmand-cloud.md) (потрібна підписка Pro).
:::


## Враховувати тимчасові обмеження {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Опція *Враховувати тимчасові обмеження* дозволяє враховувати тимчасові обмеження руху на дорогах при розрахунку маршрутів. Вони можуть включати такі речі, як дорожні роботи або закриття доріг з певних причин (аварія, ремонт доріг, стихійні лиха). Увімкнення цієї опції може допомогти вам уникнути несподіваних об'їздів або затримок. Зверніть увагу, що іноді ця інформація може бути застарілою.
У OpenStreetMap ця інформація зазвичай позначається тегом [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).


## Розділ розробки {#development-section}

**Розділ розробки** в налаштуваннях *Параметри маршруту* (*Меню → Налаштування → профіль додатка → Налаштування навігації → Параметри маршруту → Розробка*) видно лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md). Він включає такі налаштування, як *Тип маршрутизації (Android) / Алгоритм маршрутизації (iOS), Апроксимація GPX (лише Android), Автомасштабування та Дані OsmAnd Live (лише Android)*. Детальний опис читайте у статті [Налаштування навігації](../../navigation/guidance/navigation-settings.md#development-settings).


> *Останнє оновлення: Липень 2024*