---
source-hash: afe72063425498b71bb1dd721322f8785efd87d15a05cdd773b5036abe42e09b
sidebar_position: 0
title: Прокладання маршрутів в OsmAnd
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

Офлайн-маршрутизація OsmAnd базується на даних OpenStreetMap і надає різноманітні маршрути для різних цілей. Це список попередньо визначених типів маршрутизації, які можуть бути розширені. Правила навігації містяться у файлі [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) і використовуються для офлайн-маршрутизації. Тип маршруту змінюється автоматично при зміні профілю.

## Типи маршрутизації {#routing-types}

У OsmAnd попередньо встановлені наступні профілі з їхніми типами маршрутизації: *Автомобіль, Велосипед, Пішохід, Вантажівка, Мотоцикл, Мопед, Громадський транспорт, Човен, Літак, Лижі, Потяг, Верхова їзда*. Крім них, ви можете створювати власні профілі з конкретними правилами маршрутизації або [змінювати алгоритм маршрутизації OsmAnd](../routing/osmand-routing.md#customize-offline-routing).

:::note

- Профілі [**Вантажівка, Мотоцикл, Мопед, Потяг, Літак, Човен та Верхова їзда**](./osmand-routing.md) вимкнені за замовчуванням. Щоб використовувати ці профілі, їх потрібно активувати в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.

- Тип навігації [**Прямо до точки**](./direct-to-point-routing.md) не має власного профілю і може використовуватися з будь-яким увімкненим профілем.

- Офлайн-маршрутизацію OsmAnd можна **налаштувати, змінивши [.xml файл](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. Додаткову інформацію дивіться у статті [*Налаштування офлайн-маршрутизації*](../routing/osmand-routing.md#customize-offline-routing).

:::

| Категорія | Опис | Примітка |
|:------------|:---------------|:---------------|
| *Офлайн-маршрутизація OsmAnd* | Механізм офлайн-маршрутизації OsmAnd використовує попередньо завантажені мапи як джерело даних для розрахунку маршруту. | Типи навігації: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md), [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Мопед](./moped-routing.md), [Мотоцикл](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Вантажівка](car-based-routing#route-parameters---truck), [Потяг](./train-routing.md). |
| *Маршрутизація прямо до точки* | Також використовує офлайн-мапи та забезпечує маршрутизацію по прямій лінії (або *навігацію від точки до точки*). | Типи навігації: *[Пряма лінія](./straight-line-routing.md)*, *[Прямо до точки](./direct-to-point-routing.md)*. |
| [*BRouter* *(офлайн)*](./brouter.md) | Офлайн-маршрутизація, що надається [додатком BRouter](https://brouter.de/). | Доступно **тільки для Android**. Повний опис читайте [тут](./brouter.md). |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) | Онлайн-маршрутизація будує маршрут, використовуючи ресурси серверів онлайн через Інтернет-з'єднання. | Доступно **тільки для Android**. Ви можете налаштувати [онлайн-маршрутизацію](./online-routing.md) для побудови маршруту з різних онлайн-рушіїв маршрутизації, таких як [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX. |

- *[Автомобільна маршрутизація (Вантажівка, Мотоцикл)](./car-based-routing.md)* - OsmAnd надає інструкції з водіння для водіїв легкових автомобілів, вантажівок та мотоциклів.
- *[Велосипедна маршрутизація (MTB)](./bicycle-based-routing.md)* - Велосипедна маршрутизація надає навігаційні підказки спеціально для велосипедистів та любителів гірських велосипедів. Її також можуть використовувати водії мопедів (скутерів).
- *[Пішохідна маршрутизація](./pedestrian-routing.md)* - може використовуватися не тільки для прогулянок містом, а й під час туристичних походів.
- *[Маршрутизація для мопедів](./moped-routing.md)* - базується на велосипедній маршрутизації, хоча має свої особливості.
- *[Маршрутизація громадським транспортом](./public-transport-navigation.md)* - може допомогти вам під час подорожей містом.
- *[Маршрутизація для верхової їзди](./horse-routing.md)* - надає вершникам інструменти, необхідні для планування та насолоди від їхніх кінних прогулянок.
- *[Лижна маршрутизація](./ski-routing.md)* - дозволяє користувачам планувати та навігувати лижними турами та іншими зимовими видами спорту за допомогою мобільного додатку OsmAnd.
- *[Маршрутизація потягом](./train-routing.md)* - надає можливість використовувати залізничні колії для навігації.
- *[Маршрутизація човном](./boat-navigation.md)* - може використовуватися для побудови маршруту по річках, каналах, невеликих озерах та у відкритому морі, але тільки якщо фарватери позначені в OpenStreetMap.
- *[Маршрутизація по прямій лінії](./straight-line-routing.md)* - забезпечує маршрутизацію по прямій лінії (або "від точки до точки"), яка перераховується при зміні вашого місцезнаходження.
- *[Маршрутизація прямо до точки](./direct-to-point-routing.md)* - забезпечує маршрутизацію по прямій лінії (або "від точки до точки"), яка залишається стабільною протягом всієї навігації, на відміну від маршрутизації **по прямій лінії** (перерахунок маршруту вимкнено).

## Налаштування офлайн-маршрутизації {#customize-offline-routing}

Ви також можете створити свій **власний файл routing.xml** або змінити стандартний **routing.xml** та використовувати його для навігації (тільки для досвідчених користувачів OsmAnd).

- Скопіюйте файл [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) на свій пристрій. Уважно прочитайте [Довідкову інформацію](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Як приклад, перегляньте файл [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) користувача OsmAnd.
- Після внесення змін новий файл *routing.xml* можна додати до OsmAnd, натиснувши на нього та вибравши відкрити його в додатку OsmAnd.
- Виберіть змінений [Тип навігації](../../navigation/guidance/navigation-settings.md#navigation-type) для вашого профілю.

Більше інформації про цю функцію можна знайти в [*Технічній документації*](../../../technical/osmand-file-formats/osmand-routing-xml.md) та на [*сторінці OsmAnd на GitHub*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

## Уникнення певних доріг {#avoid-specific-roads}

:::caution
Функція уникнення доріг є глобальною та впливає на всі **[Типи маршрутизації](#routing-types)**, крім *[Онлайн-маршрутизації](../routing/online-routing.md)* та *[BRouter](../routing/brouter.md)*.
:::

Існує два можливих способи вибору доріг, яких слід уникати при розрахунку маршруту:

- Виберіть тип дороги в розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) [Налаштувань навігації](../guidance/navigation-settings.md). Опис цього налаштування надано в статтях про налаштування [Типів маршрутизації](#routing-types). Як приклад, дивіться опис типу маршрутизації [Автомобіль / Вантажівка / Мотоцикл](../routing/car-based-routing.md#route-parameters---car).
- Ви також можете вибрати конкретні дороги, які не будуть використовуватися для маршрутизації, за допомогою опції *[Уникнути доріг](../../map/map-context-menu.md#avoid-road)* через *контекстне меню мапи* або за допомогою *[Меню уникнення доріг](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- Дорога повинна бути позначена при максимальному масштабуванні, оскільки OsmAnd може неправильно інтерпретувати дотик і заблокувати, наприклад, неправильну сторону двосмугової дороги або тротуар.
- Функція "Уникнути певних доріг" неправильно працює з опцією [Навігація по треку](../setup/gpx-navigation.md) і не впливає на спрощену [Навігацію по маркерах](../setup/markers-navigation.md#use-markers-in-navigation).

:::

### Меню уникнення доріг {#avoid-roads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *Кнопка навігації → Налаштування → Уникнути доріг...*

![Меню уникнення доріг Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Кнопка навігації → Налаштування → Уникнути доріг*

![Меню уникнення доріг iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png)

</TabItem>

</Tabs>

У цьому меню ви можете скасувати попередній вибір дороги, яку слід уникати. Для цього натисніть хрестик (Android) або червоний **"-"** навпроти дороги, яку ви збираєтеся використовувати для розрахунку маршруту.

Використовуючи опцію *Вибрати на мапі*, ви можете продовжувати позначати дороги як непридатні для маршрутизації на мапі OsmAnd.

Коли ви вибираєте дорогу для уникнення за допомогою *контекстного меню мапи* або *меню уникнення доріг*, список доріг буде показано над екраном мапи.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Список доріг для уникнення на мапі Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Список доріг для уникнення на мапі iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>

## Експорт / Імпорт {#export--import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Експорт доріг для уникнення на мапі Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Експорт доріг для уникнення на мапі Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*

![Експорт доріг для уникнення на мапі iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Експорт доріг для уникнення на мапі iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Залежно від налаштувань вашого пристрою та доступних програм, весь список доріг, яких слід уникати, або лише одна з них може бути [експортована](../../personal/import-export.md#export) у файл `.osf` до різних місць. Виберіть дороги, які ви хочете експортувати, у запропонованому списку.

Ви можете [імпортувати](../../personal/import-export.md#import) дороги, яких слід уникати під час розрахунку маршруту, з інших джерел у форматі файлу `.osf`. Також це можна зробити за допомогою опції *Імпорт* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). Ви можете вибрати імпорт всіх даних або лише кількох доріг, яких слід уникати (позначивши дорогу галочкою у списку).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Імпорт доріг для уникнення на мапі Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Імпорт доріг для уникнення на мапі iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
Найзручніший спосіб синхронізації доріг, яких слід уникати, між вашими пристроями — це використання [OsmAnd Cloud](../../personal/osmand-cloud.md) (потрібна підписка Pro).
:::

## Врахування тимчасових обмежень {#consider-temporary-limitations}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

Опція *Врахувати тимчасові обмеження* дозволяє враховувати тимчасові обмеження на дорогах при розрахунку маршрутів. Це можуть бути, наприклад, дорожні роботи або закриття доріг з певних причин (аварія, ремонт доріг, стихійні лиха). Увімкнення цієї опції може допомогти уникнути несподіваних об'їздів або затримок. Зверніть увагу, що іноді ця інформація може бути застарілою.
У OpenStreetMap ця інформація зазвичай позначається тегом [`temporary`](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions).

## Розділ розробки {#development-section}

**Розділ розробки** в налаштуваннях *Параметри маршруту* (*Меню → Налаштування → профіль програми → Налаштування навігації → Параметри маршруту → Розробка*) видно лише тоді, коли увімкнено [плагін розробки OsmAnd](../../plugins/development.md). Він включає такі налаштування, як *Тип маршрутизації (Android) / Алгоритм маршрутизації (iOS), Апроксимація GPX (тільки Android), Автомасштабування та дані OsmAnd Live (тільки Android)*. Детальний опис читайте у статті [Налаштування навігації](../../navigation/guidance/navigation-settings.md#development-settings).

> *Останнє оновлення: липень 2024*