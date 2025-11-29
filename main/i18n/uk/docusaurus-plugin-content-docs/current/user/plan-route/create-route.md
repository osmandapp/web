---
source-hash: c35887f39fe22b467071b197cd38e3d121d7a79da3a78f76da7f0093e1edc604
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

Інструмент **Планування маршруту** (*Меню → Планування маршруту*) — це потужна функція програми OsmAnd, яка дозволяє [створювати нові маршрути](#create-new-route) у вигляді треків GPX, [редагувати та додавати нові сегменти](#segments) до вже збережених треків, [вимірювати відстані](#distance-measurement) на карті та [прив'язувати сегменти треку](#attach-track-to-roads) до найближчої доступної дороги, використовуючи різні профілі навігації. Ця функція розроблена для роботи в *автономному режимі*.

Маршрут складається з набору сегментів між вказаними точками. Сегменти можуть бути прямими лініями або маршрутами, адаптованими до вибраного профілю. Маршрут можна зберегти у форматі GPX для подальшого імпорту, редагування та [навігації](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Основні випадки використання {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Планування маршруту Android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Планування маршруту iOS](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Створення нового маршруту {#create-new-route}

Щоб створити новий трек у форматі GPX, використовуйте основну функцію інструмента *Планування маршруту*. Попереднє створення маршруту має багато переваг, на відміну від запису поточного треку за допомогою *[плагіна Запис поїздки](../plugins/trip-recording.md)*. Ви можете [додавати](#adding-points) скільки завгодно точок до маршруту, [видаляти та переміщувати їх](#point-context-menu), змінювати типи маршрутів за [сегментами](#route-between-points) та отримувати [детальну інформацію про маршрут](#graph).  

За замовчуванням тип маршрутизації відповідатиме раніше вибраному профілю. Торкніться значка маршрутизації, щоб вибрати, як програма має розраховувати сегмент для з'єднання точок. Доступний профіль слід налаштувати [окремо](../navigation/routing/osmand-routing.md#routing-types).  

Ви можете **збільшувати та зменшувати масштаб** для зручного розміщення точок під час створення або редагування треку. При **зменшенні масштабу** точки на треку стають невидимими для кращого огляду всієї довжини треку та карти в цілому. Видимими залишаються лише остання додана точка та вказівник для додавання наступної точки.


### Зміна існуючого GPX треку {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

Інструмент *Планування маршруту* дозволяє змінювати існуючий трек GPX, а також [імпортований трек](../personal/tracks/manage-tracks.md#import). Однак, якщо вам потрібно виключити велику кількість точок за загальними критеріями, більш підходящим інструментом може бути [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter).


### Вимірювання відстані {#distance-measurement}

![Планування маршруту Android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Планування маршруту* — це швидкий і простий спосіб виміряти відстань між точками.

- Виберіть метод планування маршруту *Пряма лінія*. Між точками буде проведено пунктирну лінію.
- [Додайте](#adding-points) першу точку на карті, з якої буде проведено лінію.
- Переміщуйте карту, щоб визначити відстань та азимут. Інформація буде відображатися в полі зі списком точок під картою.

:::note
*Пряма лінія* потрібна і буде використовуватися для ділянок, не охоплених даними маршрутизації, таких як бездоріжжя та позашляхові зони.
:::


### Отримання даних про висоту {#get-elevation-data}

<InfoAndroidOnly />

![Планування маршруту Android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

Якщо в існуючому треку відсутні [дані про висоту](../map/tracks/track-context-menu.md#calculate-missing-elevation), їх можна додати за допомогою наступних інструментів:

- [Використовувати прилеглі дороги](#attach-track-to-roads). Цей режим використовує офлайн-карти для пошуку найближчих доріг для побудови треку, тому дані про висоту будуть отримані з прив'язаних доріг. Геометрію треку можна коригувати.  
- [Використовувати карти рельєфу](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Режим розраховує висоту на основі даних карти рельєфу (3D). Різниця між висотами, записаними вашим пристроєм, може бути використана для корекції висоти. Геометрія треку залишається незмінною.


### Прив'язка треку до доріг {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту прив'язка до дороги iOS](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту прив'язка до дороги iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

Налаштування **Прив'язати до доріг** дозволяє прив'язати записаний або імпортований трек до доріг з офлайн-карт OsmAnd для отримання додаткової інформації:

- Правильна інформація про повороти для [навігації по треку](../navigation/setup/gpx-navigation.md#follow-track-options) (особливо на кільцевих розв'язках).
- Назви вулиць та інформація про смуги руху.
- Дані про висоту.
- [Атрибути доріг](../navigation/setup/route-details.md#road-attributes).

Ви можете вибрати [порогове значення](../navigation/setup/gpx-navigation.md#attach-to-the-roads) відстані, на якій спрощені точки треку можуть знаходитися від початкових точок треку.

:::note Значок невизначеного профілю
Якщо ви виберете трек і поруч зі значком *Налаштування* відобразиться значок ***невизначеного*** профілю ("?"), торкніться його, щоб вибрати, чи прив'язувати трек до доріг, чи просто з'єднати точки прямою лінією і розглядати його як записаний трек.
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

![Планування маршруту Android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

Щоб виміряти відстань або спланувати поїздку, додавайте точки в місці розташування *Вказівника* одну за одною і натискайте кнопку *Додати точку*. Перейшовши до **списку точок** нижче, ви можете змінювати порядок точок, видаляти їх або отримати доступ до контекстного меню конкретної [точки](#point-context-menu).

:::note
Ви також можете **Скасувати**/**Повторити** кожну дію, зроблену під час планування маршруту.
:::
  
### Маршрут між точками {#route-between-points}

Додані в редакторі точки можна з'єднати прямою лінією або маршрутом між точками вибраного профілю. Доступ до *Маршруту між точками* можна отримати кількома способами:

1. З меню *Опції* *→* *Маршрут між точками*.
2. Торкніться *значка профілю* в лівому нижньому куті екрана карти. Не верхнього значка, який відкриває меню Налаштувати карту.
3. У *[Контекстному меню точки](#point-context-menu) → Змінити тип маршруту до/після*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Планування маршруту Android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Планування маршруту iOS](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

Ви можете змінити маршрут між 2 конкретними точками або між кількома точками:

- *Весь трек*. Весь трек буде перераховано з використанням вибраного профілю.
- *Наступний сегмент*. Буде перераховано лише наступний сегмент з використанням вибраного профілю.  
- *Змінити тип маршруту до/після точки*. У *контекстному меню точки* ви можете змінити спосіб розрахунку маршруту для ділянки від цієї точки до найближчої або до крайньої точки. Налаштування надає інформацію про відстань від цієї точки до початку або кінця маршруту, або до наступної/попередньої точки.
- *Перерахувати маршрути*. Ви можете використовувати перерахунок маршруту без зміни типу профілю. Значок профілю, що відображається на запланованому маршруті в інструменті, не зміниться, але тип маршруту буде відповідати вибраному. Це може знадобитися для пошуку альтернативних маршрутів.  

### Сегменти {#segments}

Сегмент треку — це набір точок, з'єднаних без **розривів**. В інструменті планування маршруту можливо:

- Об'єднувати сегменти: опція [Об'єднати сегменти](#point-context-menu) усуває розрив до раніше розділених сегментів.
- Розділяти або створювати нові, нез'єднані ділянки треку. Щоб створити таку ділянку, використовуйте опцію [Почати новий сегмент](#point-context-menu) або виберіть функцію [Розділити](#point-context-menu) з контекстного меню точки.

### Контекстне меню точки {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Кожна точка на вашому маршруті має своє контекстне меню. Воно показує *порядковий номер* точки, *відстань від початку маршруту*, функцію для її переміщення на карті та видалення, а також набір дій з ділянками маршруту до і після цієї точки. Для редагування торкніться потрібної точки в [списку точок](#adding-points) або безпосередньо на карті.

- ***Інформація про точку***. Номер точки у списку. Відстань до першої точки залежить від встановленого типу маршрутизації, відстань може змінитися при перерахунку на новий тип, якщо змінено параметр *Маршрут між точками*.  

- ***<Translate ios="true" ids="move_point"/>***. Дозволяє змінити положення точки на карті. Переміщуйте карту за допомогою жестів, щоб змінити місцезнаходження точки. Індикатор точки буде в центрі видимої частини карти.  

- ***<Translate ios="true" ids="add_point_after"/>***. Перемістіть карту, щоб додати точку після вибраної. Ви можете додавати скільки завгодно точок, доки не натиснете "Скасувати" або "Застосувати".  

- ***<Translate ios="true" ids="add_point_before"/>***. Перемістіть карту, щоб додати стільки точок, скільки необхідно, після вибраної точки на сегменті між цією точкою та наступною.  

- ***<Translate ios="true" ids="trim_before"/>***. Ви можете обрізати всю ділянку маршруту, точки та сегменти, від її початку до вибраної точки. Відстань, яку потрібно обрізати, вказана під назвою опції.  

- ***<Translate ios="true" ids="trim_after"/>***. Ви можете обрізати маршрут, точки та сегменти, від останньої доданої точки до вибраної. Відстань, яку потрібно обрізати, вказана під назвою опції.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Дозволяє розділити маршрут перед вибраною точкою на окремі, нез'єднані сегменти.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Дозволяє розділити маршрут після вибраної точки на окремі, нез'єднані сегменти.  

- ***<Translate ios="true" ids="join_segments"/>***. Остання точка на одному з розділених сегментів і наступна в списку точок на іншому сегменті мають це налаштування з'єднання.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. Ви можете змінити тип маршрутизації, налаштований для доступного профілю, між точками на попередньому сегменті або для всіх сегментів від початку маршруту до вибраної точки.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. Ви можете змінити тип маршрутизації між точками на наступному сегменті або для всіх сегментів від вибраної точки до останньої доданої.  

- ***<Translate ios="true" ids="delete_point"/>***. Видалити вибрану точку з маршруту. Аналогічно видаленню точки у списку.

### Мультимодальні маршрути {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Лінія маршруту Android](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Екран iOS](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>

За допомогою інструмента *Планування маршруту* та опції [Маршрут між точками](#route-between-points) ви можете створювати мультимодальні маршрути, де, наприклад, перша частина може бути *велосипедним* маршрутом, друга — маршрутом по *прямій лінії*, а потім — *пішохідним*. Зауважте, що навігація по мультимодальних маршрутах недоступна, тому вам потрібно вибрати один з найбільш підходящих профілів, щоб мати можливість слідувати покроковим інструкціям.


## Редактор {#editor}

### Зберегти маршрут {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту iOS](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


Після того, як ви [додали](#adding-points) принаймні одну точку на карту, ви можете скористатися опцією збереження. Усі треки, збережені в *Плануванні маршруту*, можна знайти в головному *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

Існує чотири способи збереження:

- ***Швидке збереження***. Кнопка ***Готово*** / ***Зберегти*** (для існуючих треків) у верхньому правому куті дозволяє швидко зберегти зміни та вийти з інструмента *Планування маршруту*. Назва генерується на основі поточної дати.
- ***Зберегти зміни*** в [меню Опції](#options) дозволяє зберегти зміни у файл і продовжити планування маршруту.
- ***Зберегти як новий трек*** в [меню Опції](#options) відкриває діалогове вікно, де ви вказуєте назву треку та папку, в яку буде збережено маршрут.
- ***Додати зміни до треку***. Приєднує створений трек як [окремий сегмент](#segments) до іншого існуючого треку. Зміни до вибраного треку *не можна скасувати*.

:::note Опція спрощеного треку
При збереженні нового треку ви можете вибрати опцію ***Спрощений*** трек, щоб зробити його сумісним з іншими сторонніми програмами. Технічно трек буде збережено без інструкцій маршруту як суто геометричний трек.
:::

### Опції {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Опції меню планування маршруту Android](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Опції меню планування маршруту iOS](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Показує вибраний профіль програми (за замовчуванням — пряма лінія). Натискання цієї дії аналогічне натисканню кнопки *Профіль*, що відкриває [меню профілів](../personal/profiles.md) програми.
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) або **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Малює нові сегменти маршруту, які не з'єднуються з попереднім сегментом.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). Якщо це новий трек без прив'язки до існуючого, відкриється меню *Зберегти як новий трек*. Коли ви додаєте нові сегменти до відкритого або імпортованого треку, з'являється сповіщення про збереження файлу GPS у сховище, після чого ви можете продовжити створення наступного сегмента.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Зберігає ваш маршрут як трек GPX.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Додайте свій маршрут до треку з папки треків і збережіть новий трек.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Починає навігацію з вашого поточного місцезнаходження до кінцевої точки, використовуючи намальований маршрут.
- **<Translate android="true" ids="reverse_route"/>**. Ви міняєте місцями точку *Старт* маршруту та останню додану точку. Налаштування сегментів маршруту не змінюються при застосуванні реверсу.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Створює приблизний маршрут. Кожна точка на треку зіставляється з найближчою дозволеною дорогою на карті відповідно до вибраного профілю та порогової відстані.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (лише для Android). Ви можете відфільтрувати точки маршруту, які не відповідають вибраному типу маршрутизації, видалити непотрібні дані або виправити неточні. GPS-фільтр працюватиме лише в тому випадку, якщо тип маршрутизації вказано як *Пряма лінія*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*лише для Android*). Ця опція відображається в меню, лише якщо дані про висоту недоступні. За допомогою цієї [опції](#get-elevation-data) ви можете розрахувати висоту, використовуючи *дані карти рельєфу*, або використовувати дані із завантажених карт для пошуку *прилеглих доріг*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. Ця дія повністю архівує всі ваші дії. На карті залишається "артефакт" - пунктирні лінії щойно очищеного маршруту. Він зникає при наступному додаванні нових точок. Ви можете скасувати функцію "Очистити все" за допомогою кнопки "Повернути дію". Ця функція не впливає на незмінені частини маршрутів, відкритих в інструменті.

### Графік {#graph}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Планування маршруту Android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Планування маршруту прив'язка до дороги iOS](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

Під час планування маршруту [графік](../navigation/setup/route-details.md#elevation-graph) відображає інформацію про висоту маршруту та відсоток нахилу, крім того, ви можете торкнутися будь-де на графіку, щоб відобразити вказівник з конкретними даними.  

- Для **Android** графік відображається на вкладці *Графік* під час створення або відкриття треку, а також під час [навігації](../navigation/setup/gpx-navigation.md) за допомогою *Планування маршруту*.
- Для **iOS** графік доступний лише через меню *[Опції](#options) → Навігація*.

При розрахунку маршруту для навігації в *Плануванні маршруту* ви можете дізнатися додаткову інформацію про трек, таку як [інформація про висоту](../navigation/setup/route-details.md#elevation-info) та [атрибути доріг](../navigation/setup/route-details.md#road-attributes), а також використовувати інструмент [Аналіз на карті](../navigation/setup/route-details.md#analyze-on-map). Натисніть кнопку *Деталі* під графіком.  


## Пов'язані статті {#related-articles}

- [Показати трек на карті](../map/tracks/index.md)
- [Аналіз на карті](../map/tracks/index.md#analyze-track-on-map)
- [Контекстне меню треку](../map/tracks/track-context-menu.md)
- [Навігація по треку](../navigation/setup/gpx-navigation.md)
- [Запис поїздки](../plugins/trip-recording.md)