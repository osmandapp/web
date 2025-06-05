---
source-hash: d233eb77ecfd69d56460233fec14e03db65e064bc86c70d632d57a3af7572d04
sidebar_position: 1
title:  Підготовка маршруту
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';
## Огляд {#overview}
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';

import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
Функція **Підготовка маршруту** в OsmAnd надає покрокові навігаційні вказівки для різних [типів маршрутизації](./../routing/osmand-routing.md#routing-types), включаючи [автомобіль](./../routing/car-based-routing.md), [пішохід](./../routing/pedestrian-routing.md), велосипед, [верхову їзду](./../routing/horse-routing.md) та [лижі](./../routing/ski-routing.md). Користувачі можуть налаштовувати параметри навігації, додавати пункти призначення та оптимізувати маршрути для ефективності.
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';

import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
:::tip
import Translate from '@site/src/components/Translate.js';

import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
- **Офлайн-навігація** увімкнена за замовчуванням. Однак ви також можете використовувати [онлайн-рушії маршрутизації](./../routing/online-routing.md).
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

- **OsmAnd вимагає дозволу** на доступ до [точного місцезнаходження](../../start-with/first-steps.md#permission-to-access-the-location) для точної навігації. Увімкніть це в налаштуваннях пристрою, якщо потрібно.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigation screen Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigation screen iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Встановити пункти призначення {#set-destinations}

**Крок 1: Завантажте мапи.**

Перед використанням офлайн-навігації переконайтеся, що необхідні [мапи завантажено](../../start-with/download-maps.md). Перейдіть до *Меню → Мапи та ресурси → Завантажити мапи*, щоб встановити мапи для вашого регіону.

**Крок 2: Налаштуйте профілі навігації.**

[Налаштуйте профілі](../../personal/profiles.md), які ви збираєтеся використовувати:

- Встановіть [параметри транспортного засобу](../guidance/navigation-settings.md#size-parameters) (*важливо для водіїв вантажівок*), виберіть [тип двигуна](../guidance/navigation-settings.md#fuel-used-by-motor) (*необов'язково*).

- Налаштуйте [вигляд лінії маршруту](../guidance/map-during-navigation#route-line-appearance) (*необов'язково*, доступно для [користувачів Pro](../../purchases/index.md#purchases)).

- Налаштуйте [голосові підказки](../guidance/voice-navigation.md).

**Крок 3: Встановіть пункти призначення.**

1. Відкрийте [*Меню навігації*](#navigation-menu):

    - Вкажіть [пункт призначення](#set-target-point).
    - Зачекайте, поки маршрут буде розраховано. Після цього ви зможете отримати додаткову інформацію про ваш маршрут у розділі *[Деталі](./route-details.md#overview)*.
    - Ви можете перемикатися між різними [типами маршрутизації](./../routing/osmand-routing.md#routing-types) (профілями), щоб отримати найкращий результат.
    - Додайте [проміжні пункти призначення](#intermediate-destinations) (необов'язково).
    - Ви також можете змінити пункт відправлення з [поточного місцезнаходження](../../map/interact-with-map#my-location-and-zoom) на потрібний.

2. Додаткові [*Налаштування навігації*](#settings) можуть бути використані залежно від ваших цілей (ви можете налаштувати, яких доріг уникати або віддавати перевагу, економити паливо або вибрати найшвидший маршрут тощо).

3. [Почніть](#start--stop-navigation) навігацію або спочатку [симулюйте навігацію](#simulated-navigation) (за допомогою цієї функції ви можете протестувати свій маршрут перед фактичною подорожжю по ньому).

4. Під час руху по маршруту ви можете [*Призупинити/Відновити*](#pause--resume-navigation) навігацію та [*Зупинити*](#start--stop-navigation) її.


:::note

**Маршрут не може бути побудований, коли як джерело мапи вибрано *[Онлайн-мапу](../../map/raster-maps.md#select-raster-maps)*.**

:::


### Меню навігації {#navigation-menu}

Існує 3 способи потрапити до меню навігації:

- [*Кнопка навігації*](../../widgets/map-buttons.md#directions) на екрані мапи.
- *Напрямок до/від* у [*контекстному меню мапи*](../../map/map-context-menu.md#directions-to--from).
- Розділ навігації в [*Головному меню*](../../start-with/main-menu.md) (*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Встановити початкове місцезнаходження (за замовчуванням: [*Моє поточне місцезнаходження*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Використовується для [встановлення пункту призначення](#set-target-point).
- **Додати** &nbsp;&#43; - Вставити [проміжні точки](../../widgets/nav-widgets.md#intermediate-destination) вздовж маршруту.
- **Поміняти** &nbsp;&#8595;&#8593; - Змінити місцями точки *Початок* та *Кінець*.
- **Кнопка звуку** - Вимкнути [голосові підказки](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Налаштувати](#settings) параметри маршруту та обмеження доріг.

Встановіть пункт призначення в *Меню навігації* за допомогою:

- Спеціальних улюблених точок [Дім / Робота](#use-home-or-work-points).
- Попереднього маршруту або [Історії](../../personal/global-settings.md#history).
- Кнопка **Скасувати** повертає на головний екран.
- [Кнопка Почати](#start--stop-navigation) запускає навігацію після завершення розрахунку маршруту.

### Виберіть початкову точку {#select-starting-point}

Щодо початкової точки, ви можете вибрати своє поточне місцезнаходження, місцезнаходження [Улюбленої точки](../../map/point-layers-on-map.md#favorites), вибрати точку на мапі або скористатися [Пошуком](../../search/index.md). Ви також можете встановити початкову точку в [контекстному меню мапи](../../map/map-context-menu.md), вибравши функцію [Напрямок від](../../map/map-context-menu.md#directions-to--from).


### Встановити цільову точку {#set-target-point}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

Найважливіше для початку навігації — визначити пункт призначення. Пункт призначення можна знайти за допомогою функції [*Пошук*](../../search/index.md#overview) або просто на мапі. Ви також можете встановити цільову точку в [*Меню навігації*](#navigation-menu):

- **<Translate android="true" ids="search_button"/>** - Відкриває [меню пошуку](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Відкриває [меню пошуку адреси](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Відкриває мапу для вибору пункту призначення, торкнувшись мапи.
- **<Translate android="true" ids="shared_string_favorites"/>** - Дозволяє використовувати [Улюблене](../../personal/favorites.md) як пункт призначення.
- **<Translate android="true" ids="shared_string_markers"/>** - Дозволяє вибрати один з [Маркерів мапи](../../personal/markers.md) як пункт призначення.
- **Поміняти місцями початкову точку та пункт призначення** &nbsp;&#8595;&#8593; - Дозволяє поміняти місцями точки *Початок* та *Кінець*.


### Проміжні пункти призначення {#intermediate-destinations}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Navigation intermediate Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - дозволяє відкрити список пунктів призначення для внесення змін.
- **&nbsp;&#8592;** - переходить до екрана меню навігації.
- **&nbsp;&#10005;** - дозволяє видалити пункт призначення зі списку точок.
- **&nbsp;&#61;** - дозволяє змінити порядок точок у списку точок.
- *&nbsp;&#43; Додати* - відкриває контекстне меню *Додати проміжний*.
- *&nbsp;&#9776; Очистити все* - дозволяє очистити всі проміжні точки.

Якщо ви виберете **Сортувати** (*Android*) або **Опції** (*iOS*) у списку пунктів призначення, ви потрапите до спеціальних опцій для налаштування порядку навігації до проміжних точок.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

У цьому меню ви можете знайти додаткові опції для керування пунктами призначення:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd запропонує найкоротший маршрут між усіма вашими пунктами призначення, однак порядок відвідування можна редагувати. Початкова точка та кінцевий пункт призначення не будуть змінені.

- **<Translate android="true" ids="switch_start_finish"/>** - Початкова точка та кінцевий пункт призначення будуть поміняні місцями.

- **<Translate android="true" ids="reverse_all_points"/>** (*лише Android*) - Усі точки будуть розташовані у зворотному напрямку.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Ви можете додати проміжні пункти призначення з цього меню.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Усі проміжні пункти призначення будуть видалені з мапи.

### Використання точок Дім або Робота {#use-home-or-work-points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Special favorites Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Special favorites iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Вкладки **Дім** та **Робота** (або [Спеціальні точки](../../personal/favorites.md#special-favorites-personal) для Улюблених) можуть бути використані для швидкого встановлення пунктів призначення в меню навігації. Якщо ви не ввели адреси Спеціальних улюблених, ці поля залишаться порожніми. Якщо ви торкнетеся цього поля, вам буде запропоновано створити ці POI.


### Історія попередніх маршрутів {#history-of-previous-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Previous route Android](@site/static/img/navigation/route/previous_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Previous route  iOS](@site/static/img/navigation/route/previous_ios.png)

</TabItem>

</Tabs>

Якщо увімкнено запис [Історії навігації](../../personal/global-settings.md#history), ви можете використовувати попередні маршрути або пункти призначення зі списку історії для навігації. Ця опція може бути корисною для швидкого доступу до часто використовуваних маршрутів. Елементи в списку історії сортуються за останнім використанням, починаючи з найновішого.

:::note

- Коли [журнал даних Історії](../../personal/global-settings.md#history-options) вимкнено, вам не буде запропоновано використовувати попередні маршрути для навігації.
- Ви можете видалити деякі або всі записи історії про ваші попередні маршрути. Це можна зробити на вкладці *[Історія навігації](../../personal/global-settings.md#history-options)* опції Історія (*Меню → Налаштування → Налаштування OsmAnd → Історія*).

:::


## Почати / Зупинити навігацію {#start--stop-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Після вибору початкової та кінцевої точок програма створить маршрут між ними, використовуючи активний профіль. [Профіль програми](../../personal/profiles.md) та набір [віджетів](../../widgets/index.md) переключаться лише після того, як ви торкнетеся кнопки *Почати* навігації.

- **Торкніться Почати**, щоб розпочати навігацію.
- [Призупинити](#pause--resume-navigation) навігацію під час перерви. (*лише Android*)
- **Зупинити** навігацію, вибравши **Зупинити** (*Android*) або **Скасувати** (*iOS*).

:::note Деталі маршруту
Додаткову інформацію про створений маршрут, таку як висота, покрокові інструкції, інструмент аналізу та інші, можна знайти в розділі [**Деталі**](../setup/route-details.md).
:::

### Перерахунок маршруту {#route-recalculation}

Маршрут може бути автоматично перерахований у разі відхилення від нього. Ви можете змінити параметри перерахунку в [Налаштуваннях навігації](../guidance/navigation-settings.md#recalculate-route). Ви також можете вимкнути сповіщення про перерахунок маршруту в налаштуваннях [Голосових підказок](../guidance/voice-navigation.md#voice-settings).

### Призупинити / Відновити навігацію {#pause--resume-navigation}

<InfoAndroidOnly/>

Якщо ви хочете зупинитися на перерву та ненадовго відхилитися від маршруту, ви можете скористатися функцією *Призупинити/Відновити* навігацію, щоб призупинити голосові підказки та зупинити перерахунок маршруту.
Ця опція доступна в Android-версії програми в *[Списку сповіщень](../guidance/voice-navigation.md#text-notifications)* або з *[Меню швидких дій](../../widgets/quick-action.md)*.

![Notification screen Android](@site/static/img/navigation/route/navigation_pause_android.png)

Щоб відновити навігацію:

- Використовуйте повідомлення від OsmAnd у панелі сповіщень.
- Використовуйте *Меню швидких дій* або діалогове вікно, яке з'являється, коли ви торкаєтеся *[Кнопки навігації](../../widgets/map-buttons.md#directions)* (див. скріншот).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Resume navigation Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Resume navigation ios](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Коли ви **торкаєтеся кнопки Навігація** під час руху по маршруту, навігація **не зупиняється, і голосові підказки продовжують озвучуватися**, хоча запропоновані опції Відновити або Почати можуть бути заплутаними.
:::


### Поради щодо енергозбереження {#power-saving-tips}

Навігація використовує GPS та фонову обробку, що може розряджати батарею. Щоб оптимізувати використання енергії:

- **Вимкніть екран**, покладаючись на голосові підказки.
- Увімкніть [Керування екраном](../guidance/voice-navigation.md#screen-control) (*лише Android*) у *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Налаштування {#settings}

![Route preparation Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Налаштування навігації {#navigation-settings}

Щоб отримати доступ до налаштувань навігації, виконайте один із наведених нижче кроків:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.
- *Кнопка навігації → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
У профілі *Перегляд мапи* немає налаштувань навігації.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** визначає, як розраховуються маршрути. Наприклад, ваш велосипедний профіль має тип навігації Велосипед, який встановлює правила маршрутизації. Ви можете імпортувати ці правила (як файл routing.xml) в OsmAnd. Більше про маршрутизацію ви можете прочитати на нашій сторінці [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;

- &nbsp;**<Translate android="true" ids="route_parameters"/>** контролює, які параметри будуть використовуватися під час маршрутизації (це процес вибору маршруту для навігації).

Будь ласка, прочитайте про параметри маршруту для відповідного типу навігації.

Як налаштувати [тип маршрутизації](../routing/osmand-routing.md#routing-types) та [параметри маршруту](../guidance/navigation-settings.md#route-parameters) ви можете прочитати в [статті про налаштування навігації](../guidance/navigation-settings.md) або в статтях про конкретні типи маршрутизації в розділі [Параметри маршруту](../routing/osmand-routing.md#routing-types).


### Симульована навігація {#simulated-navigation}

Інструмент **Симульована навігація** дозволяє попередньо переглянути маршрут перед подорожжю. Це допомагає з плануванням, ознайомленням та тестуванням навігаційної системи OsmAnd.

#### Почати / Зупинити симуляцію {#start--stop-simulation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Коли маршрут навігації побудовано, ви можете розпочати симуляцію навігації за допомогою опції **<Translate android="true" ids="simulate_navigation"/>**.

- У [Меню навігації](#navigation-menu) перейдіть до *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Перемкніть перемикач, щоб увімкнути опцію.
- Торкніться кнопки [Почати](#start--stop-navigation) навігацію, щоб розпочати симуляцію.
- Щоб [Зупинити](#start--stop-navigation) симуляцію навігації, торкніться **Зупинити** (*Android*) або **Скасувати** (*iOS*).


#### Режим швидкості {#speed-mode}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/> →* &#x2699

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Прискорює симуляцію на прямих ділянках, сповільнюючи на перехрестях.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Працює з фіксованою швидкістю.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **На прямих ділянках** дороги швидкість буде близькою до максимально дозволеної.
    - **На перехрестях** симулятор зменшить швидкість.
    - **Додаткові штрафи** будуть застосовані на світлофорах, знаках "Стоп" та інших подібних перешкодах.


## Відсутні або несинхронізовані мапи {#maps-missing-or-not-synchronized}

Для побудови маршруту всі **необхідні мапи** мають бути завантажені та мати однакову дату випуску. Зверніть увагу, що в деяких ситуаціях повідомлення про відсутні мапи може бути приховано в меню підготовки маршруту. Якщо ви піднімете меню навігації вгору, ви побачите можливі причини, чому ваш маршрут не вдалося розрахувати.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message no maps when building navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Message no maps when building navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Необхідні мапи {#required-maps}

У діалоговому вікні необхідних мап ви побачите пропозиції мап для завантаження або оновлення. Список використаних мап може бути неточним, оскільки він розраховує дуже простий маршрут, щоб отримати точний список мап, ви можете натиснути **Розрахувати онлайн**. Якщо ви виберете **Використовувати завантажені мапи**, то розрахунок маршруту спробує використовувати вже завантажені мапи та пропустити попереджувальне повідомлення.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message no maps when building navigation Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Message no maps when building navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Поширені проблеми та рішення {#common-issues-and-solutions}

1. [Можливі причини повільного розрахунку маршруту.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Що робити, якщо довжина маршруту перевищує 250 кілометрів.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Що робити, якщо запропонований маршрут здається неправильним.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Як вирішити ситуацію, коли навігація неможлива через відсутність необхідних мап.](#maps-missing-or-not-synchronized)

Для отримання додаткових кроків з усунення несправностей див. [проблеми з навігацією](../../troubleshooting/navigation.md).


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Деталі маршруту](./route-details.md)
- [Навігація за треком](./gpx-navigation.md)
- [Навігація за маркерами](./markers-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран мапи під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Цю статтю востаннє оновлено в лютому 2025 року*