---
source-hash: 94231a8fd81fa09d325089e6ae9856a005d0499e88dfdb116c344f1e11f2e397
sidebar_position: 1
title:  Планування маршруту
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

Інструмент **Планування маршруту** (*Меню → Планування маршруту*) є потужною функцією застосунку OsmAnd, яка дозволяє [створювати нові маршрути](#create-new-route) як GPX-треки, [редагувати та додавати нові сегменти](#segments) до вже збережених треків, [вимірювати відстані](#distance-measurement) на карті та [прив'язувати сегменти треку](#attach-track-to-roads) до найближчої доступної дороги за допомогою різних навігаційних профілів. Функція розроблена для роботи в *автономному режимі*.

Маршрут складається з набору сегментів між вказаними точками. Сегменти можуть бути прямими лініями або маршрутами, адаптованими до вибраного профілю. Маршрут можна зберегти як GPX для подальшого імпорту, редагування та [навігації](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Основні випадки використання {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Створення нового маршруту {#create-new-route}

Щоб створити новий трек у форматі GPX, скористайтеся основною функцією інструменту *Планування маршруту*. Попереднє створення маршруту має багато переваг, на відміну від запису поточного треку за допомогою *[Плагіна запису поїздок](../plugins/trip-recording.md)*. Ви можете [додати](#adding-points) стільки точок, скільки забажаєте, [видалити та перемістити їх](#point-context-menu), змінити типи маршрутів за [сегментами](#route-between-points) та отримати [детальну інформацію про маршрут](#graph).  

За замовчуванням тип маршрутизації відповідатиме раніше вибраному профілю, торкніться піктограми маршрутизації, щоб вибрати, як застосунок має розрахувати сегмент для з'єднання точок. Доступний профіль слід налаштувати [окремо](../navigation/routing/osmand-routing.md#routing-types).  

Ви можете **збільшувати та зменшувати масштаб** для зручного розміщення точок під час створення або редагування треку. Коли ви **зменшуєте масштаб**, точки на треку стають невидимими для кращого огляду всієї довжини треку та карти в цілому. Залишаються видимими лише остання додана точка та покажчик для додавання наступної точки.


### Змінення наявного GPX-треку {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Інструмент *Планування маршруту* дозволяє змінювати наявний GPX-трек, а також [імпортований трек](../personal/tracks/manage-tracks.md#import). Однак, якщо вам потрібно виключити велику кількість точок на основі загальних критеріїв, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) може бути більш підходящим інструментом.


### Вимірювання відстані {#distance-measurement}

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Планування маршруту* — це швидкий і простий спосіб виміряти відстань між точками.

- Виберіть метод планування маршруту *Пряма лінія*. Між точками буде проведена пунктирна лінія.
- [Додайте](#adding-points) першу точку на карті, з якої буде проведена лінія.
- Перемістіть карту, щоб визначити відстань та азимут. Інформація буде відображена в полі зі списком точок під картою.

:::note
*Пряма лінія* потрібна і буде використовуватися для ділянок, не охоплених даними маршрутизації, таких як бездоріжжя та бездоріжжя.
:::


### Отримання даних про висоту {#get-elevation-data}

<InfoAndroidOnly />

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Якщо в наявному треку відсутні [дані про висоту](../map/tracks/track-context-menu.md#calculating-missing-elevation), їх можна додати за допомогою таких інструментів:

- [Використовувати найближчі дороги](#attach-track-to-roads). Цей режим використовує офлайн-карти для пошуку найближчих доріг для побудови треку, тому дані про висоту будуть отримані з приєднаних доріг. Геометрію треку можна налаштувати.  
- [Використовувати карти рельєфу](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Режим розраховує висоту на основі даних карти рельєфу (3D). Різниця між висотами, записаними вашим пристроєм, може бути використана для корекції висоти. Геометрія треку залишається незмінною.


### Прив'язати трек до доріг {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

Налаштування **Прив'язати до доріг** дозволяє прив'язати записаний або імпортований трек до доріг з офлайн-карт OsmAnd, щоб отримати додаткову інформацію:

- Правильна інформація про повороти для [Навігації за треком](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (особливо на кільцевих розв'язках).
- Назви вулиць та інформація про смуги руху.
- Дані про висоту.
- [Атрибути дороги](../navigation/setup/route-details.md#road-attributes).

Ви можете вибрати [порогове значення](../navigation/setup/gpx-navigation.md#attach-to-the-roads) для відстані, на якій спрощені точки треку можуть знаходитися від початкових точок треку.

:::note Невизначена піктограма профілю
Якщо ви вибираєте трек і поруч із піктограмою *Налаштування* відображається піктограма ***невизначеного*** профілю ("?"), торкніться її, щоб вибрати, чи прив'язати трек до доріг, чи просто з'єднати точки прямою лінією та розглядати його як записаний трек.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Точки та сегменти {#points--segments}

### Додавання точок {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Щоб виміряти відстань або спланувати поїздку, додайте точки в місці *Покажчика* одну за одною та торкніться кнопки *Додати точку*. Отримавши доступ до **списку точок** нижче, ви можете змінити порядок точок, видалити або отримати доступ до певного [контекстного меню точки](#point-context-menu).

:::note
Ви також можете **Скасувати**/**Повторити** кожну дію, яку ви зробили в плануванні маршруту.
:::
  
### Маршрут між точками {#route-between-points}

Додані точки в редакторі можуть бути з'єднані як пряма лінія або як маршрут між точками вибраного профілю. До *Маршруту між точками* можна отримати доступ кількома способами:

1. З меню *Параметри* *→* *Маршрут між точками*.
2. Торкніться *піктограми профілю* в нижньому лівому куті екрана карти. Не верхня піктограма, відкриє меню Налаштування карти.
3. У *[Контекстному меню точки](#point-context-menu) → Змінити тип маршруту до/після*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Ви можете змінити маршрут між 2 конкретними точками або між кількома точками:

- *Весь трек*. Весь трек буде перераховано за допомогою вибраного профілю.
- *Наступний сегмент*. Лише наступний сегмент буде перераховано за допомогою вибраного профілю.  
- *Змінити тип маршруту до/після точки*. У *контекстному меню точки* ви можете змінити спосіб розрахунку маршруту для ділянки від цієї точки до найближчої або до крайньої точки. Налаштування надає інформацію про відстань від цієї точки до початку або кінця маршруту, або до наступної/попередньої точки.
- *Перерахувати маршрути*. Ви можете використовувати перерахунок маршруту без зміни типу профілю. Піктограма профілю, показана на запланованому маршруті в інструменті, не зміниться, але тип маршруту відповідатиме вибраному. Це може знадобитися для пошуку альтернативних маршрутів.  

### Сегменти {#segments}

Сегмент треку — це сукупність точок, з'єднаних без **розривів**. В інструменті планування маршруту можливо:

- Об'єднати сегменти: опція [Об'єднати сегменти](#point-context-menu) видаляє розрив до раніше розділених сегментів.
- Розділити або створити нові, нез'єднані ділянки треку. Щоб створити таку, скористайтеся опцією [Почати новий сегмент](#point-context-menu) або виберіть функцію [Розділити](#point-context-menu) з контекстного меню точки.

### Контекстне меню точки {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Кожна точка на вашому маршруті має своє контекстне меню. Воно показує *порядковий номер* точки, *відстань від початку маршруту*, функцію для її переміщення на карті та видалення, а також набір дій з ділянками маршруту до та після цієї точки. Щоб редагувати, торкніться потрібної точки у [списку точок](#adding-points) або безпосередньо на карті.

- ***Інформація про точку***. Кількість точок у списку. Відстань до першої точки базується на встановленому типі маршрутизації, відстань може змінитися при перерахунку на новий тип, якщо змінено параметр *Маршрут між точками*.  

- ***<Translate ios="true" ids="move_point"/>***. Дозволяє змінити положення точки на карті. Переміщуйте карту за допомогою жестів, щоб змінити розташування точки. Індикатор точки буде в центрі видимої частини карти.  

- ***<Translate ios="true" ids="add_point_after"/>***. Перемістіть карту, щоб додати точку після вибраної точки. Ви можете додати стільки точок, скільки вам потрібно, доки не торкнетеся скасувати або застосувати.  

- ***<Translate ios="true" ids="add_point_before"/>***. Перемістіть карту, щоб додати стільки точок, скільки необхідно, після вибраної точки на сегменті між цією точкою та наступною.  

- ***<Translate ios="true" ids="trim_before"/>***. Ви можете обрізати всю ділянку маршруту, точки та сегменти, від її початку до вибраної точки. Відстань для обрізки вказана під назвою опції.  

- ***<Translate ios="true" ids="trim_after"/>***. Ви можете обрізати маршрут, точки та сегменти, від останньої доданої точки до вибраної точки. Відстань для обрізки вказана під назвою опції.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Дозволяє розділити маршрут перед вибраною точкою на окремі, нез'єднані сегменти.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Дозволяє розділити маршрут після вибраної точки на окремі, нез'єднані сегменти.  

- ***<Translate ios="true" ids="join_segments"/>***. Остання точка на одному з розділених сегментів і наступна в списку точок на іншому сегменті мають це налаштування з'єднання.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Ви можете змінити тип маршрутизації, налаштований для доступного профілю, між точками на попередньому сегменті або для всіх сегментів від початку маршруту до вибраної точки.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Ви можете змінити тип маршрутизації між точками на наступному сегменті або для всіх сегментів від вибраної точки до останньої доданої точки.  

- ***<Translate ios="true" ids="delete_point"/>***. Видалити вибрану точку з маршруту. Аналогічно видаленню точки зі списку.

### Мультимодальні маршрути {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

Використовуючи інструмент *Планування маршруту* та опцію [Маршрут між точками](#route-between-points), ви можете створювати мультимодальні маршрути, де, наприклад, перша частина може бути *велосипедним* маршрутом, друга частина — *прямою лінією*, а потім *пішохідним*. Зверніть увагу, що навігація по мультимодальних маршрутах недоступна, тому вам потрібно вибрати один з найбільш підходящих профілів, щоб мати можливість слідувати покроковим інструкціям.


## Редактор {#editor}

### Зберегти маршрут {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Після того, як ви [додали](#adding-points) принаймні одну точку на карту, ви можете скористатися опцією збереження. Усі треки, збережені в *Плануванні маршруту*, можна знайти в головному *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Існує чотири способи збереження:

- ***Швидке збереження***. Кнопка ***Готово*** / ***Зберегти*** (для наявних треків) у верхньому правому куті дозволяє швидко зберегти зміни та вийти з інструменту *Планування маршруту*. Назва генерується на основі поточної дати.
- ***Зберегти зміни*** в [меню Параметри](#options) дозволяє зберегти зміни у файл і продовжити планування маршруту.
- ***Зберегти як новий трек*** у [меню Параметри](#options) відкриває діалогове вікно, де ви вказуєте назву треку та папку, куди буде збережено маршрут.
- ***Додати зміни до треку***. Приєднує створений трек як [окремий сегмент](#segments) до іншого наявного треку. Зміни до вибраного треку *не можна скасувати*.

:::note Опція спрощеного треку
При збереженні нового треку ви можете вибрати опцію ***Спрощений*** трек, щоб зробити трек сумісним з іншими сторонніми застосунками. Технічно трек буде збережено без інструкцій маршруту як чисто геометричний трек.
:::

### Параметри {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Показує вибраний профіль застосунку (за замовчуванням — пряма лінія). Натискання цієї дії те саме, що й натискання кнопки *Профіль*, яка відкриває [меню профілів](../personal/profiles.md) застосунку.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) або **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Малює нові сегменти маршруту, які не з'єднуються з попереднім сегментом.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Якщо це новий трек без прив'язки до наявного, відкривається меню *Зберегти як новий трек*. Коли ви додаєте нові сегменти до відкритого або імпортованого треку, з'являється сповіщення про збереження файлу GPS у сховищі, після чого ви можете продовжити створення наступного сегмента.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Зберігає ваш маршрут як GPX-трек.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Додайте свій маршрут до треку з папки треків і збережіть новий трек.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Починає навігацію з вашої позиції до кінцевої точки за допомогою намальованого маршруту.
- **<Translate android="true" ids="reverse_route"/>**. Ви міняєте місцями початкову точку маршруту та останню додану точку. Налаштування сегментів маршруту не змінюються при застосуванні Зворотної дії.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Створює приблизний маршрут. Кожна точка на треку зіставляється з найближчою дозволеною дорогою на карті відповідно до вибраного профілю та порогової відстані.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (лише Android). Ви можете відфільтрувати точки маршруту, які не відповідають вибраному типу маршрутизації, видалити непотрібні дані або виправити неточні дані. Фільтр GPS працюватиме лише в тому випадку, якщо тип маршрутизації вказано як *Пряма лінія*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*лише Android*). Ця опція відображається в меню лише в тому випадку, якщо дані про висоту недоступні. За допомогою цієї [опції](#get-elevation-data) ви можете розрахувати висоту за допомогою *даних карти рельєфу* або використовувати дані з завантажених карт для пошуку *найближчих доріг*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Він повністю архівує всі ваші дії. На карті залишається "артефакт" — пунктирні лінії щойно очищеного маршруту. Він зникає при наступному додаванні нових точок. Ви можете скасувати функцію "Очистити все" за допомогою кнопки "Повернути дію". Ця функція не впливає на незмінені частини маршрутів, відкритих в інструменті.

### Графік {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Під час планування маршруту [графік](../navigation/setup/route-details.md#elevation-graph) відображає інформацію про висоту маршруту та відсоток нахилу, крім того, ви можете торкнутися будь-де на графіку, щоб відобразити покажчик з конкретними даними.  

- Для **Android** графік відображається на вкладці *Графік* під час створення або відкриття треку, а також під час [Навігації](../navigation/setup/gpx-navigation.md) за допомогою *Планування маршруту*.
- Для **iOS** графік доступний лише через меню *[Параметри](#options) → Навігація*.

При розрахунку маршруту для навігації в *Плануванні маршруту* ви можете знайти додаткову інформацію про трек, таку як [Інформація про висоту](../navigation/setup/route-details.md#elevation-info) та [Атрибути дороги](../navigation/setup/route-details.md#road-attributes), а також використовувати інструмент [Аналіз на карті](../navigation/setup/route-details.md#analyse-on-map). Торкніться кнопки *Деталі* під графіком.  


## Пов'язані статті {#related-articles}

- [Показати трек на карті](../map/tracks/index.md)
- [Аналіз на карті](../map/tracks/index.md#analyze-track-on-map)
- [Контекстне меню треку](../map/tracks/track-context-menu.md)
- [Навігація за треком](../navigation/setup/gpx-navigation.md)
- [Запис поїздки](../plugins/trip-recording.md)