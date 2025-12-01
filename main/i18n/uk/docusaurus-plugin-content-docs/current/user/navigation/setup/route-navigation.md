---
source-hash: 691bcbb90edd834e73f1ffc6ba4260189199bb0919291ba488372bdec72e2792
sidebar_position: 1
title:  Підготовка маршруту
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

Функція **Підготовка маршруту** в OsmAnd надає покрокові навігаційні вказівки для різних [типів маршрутів](./../routing/osmand-routing.md#routing-types), включаючи [водіння автомобіля](./../routing/car-based-routing.md), [піші прогулянки](./../routing/pedestrian-routing.md), їзду на велосипеді, [верхову їзду](./../routing/horse-routing.md) та [лижі](./../routing/ski-routing.md). Користувачі можуть налаштовувати параметри навігації, додавати пункти призначення та оптимізувати маршрути для підвищення ефективності.

:::tip

- **Офлайн-навігація** увімкнена за замовчуванням. Однак ви також можете використовувати [онлайн-сервіси маршрутизації](./../routing/online-routing.md).

- **OsmAnd потребує дозволу** на доступ до [точного місцезнаходження](../../start-with/first-steps.md#permission-to-access-the-location) для точної навігації. Увімкніть його в налаштуваннях пристрою, якщо це необхідно.

:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Екран навігації Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Екран навігації Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Екран навігації iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Екран навігації iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Встановлення пунктів призначення {#set-destinations}

**Крок 1: Завантажте мапи.**

Перед використанням офлайн-навігації переконайтеся, що необхідні [мапи завантажені](../../start-with/download-maps.md). Перейдіть до *Меню → Мапи та ресурси → Завантажити мапи*, щоб встановити мапи для вашого регіону.

**Крок 2: Налаштуйте профілі навігації.**

[Налаштуйте профілі](../../personal/profiles.md), які ви збираєтеся використовувати:

- Встановіть [параметри транспортного засобу](../guidance/vehicle-parameters.md#size-parameters) (*важливо для водіїв вантажівок*), виберіть [тип двигуна](../guidance/vehicle-parameters.md#fuel-used-by-motor) (*необов'язково*).

- Налаштуйте [вигляд лінії маршруту](../guidance/map-during-navigation#route-line-appearance) (*необов'язково*, доступно для користувачів Pro ([Android](../../purchases/android.md#pro-features) / [iOS](../../purchases/ios.md#pro-features))).

- Налаштуйте [голосові підказки](../guidance/voice-navigation.md).

**Крок 3: Встановіть пункти призначення.**

1. Відкрийте [*меню Навігація*](#navigation-menu):

    - Вкажіть [пункт призначення](#set-target-point).
    - Зачекайте, доки маршрут буде розраховано. Після цього ви зможете отримати додаткову інформацію про ваш маршрут у *[розділі Деталі](./route-details.md#overview)*.
    - Ви можете перемикатися між різними [типами маршрутизації](./../routing/osmand-routing.md#routing-types) (профілями), щоб отримати найкращий результат.
    - Додайте [проміжні пункти призначення](#intermediate-destinations) (необов'язково).
    - Ви також можете змінити точку відправлення з [поточного місцезнаходження](../../map/interact-with-map.md#my-location-and-zoom) на потрібну.

2. Додаткові [*Налаштування навігації*](#settings) можна використовувати залежно від ваших цілей (ви можете налаштувати, яких доріг уникати або яким надавати перевагу, економити пальне або обирати найшвидший маршрут тощо).

3. [Почніть](#start--stop-navigation) навігацію або спочатку [симулюйте навігацію](#simulated-navigation) (за допомогою цієї функції ви можете перевірити свій маршрут перед тим, як фактично ним подорожувати).

4. Під час руху по маршруту ви можете [*Призупинити/Відновити*](#pause--resume-navigation) навігацію та [*Зупинити*](#start--stop-navigation) її.


:::note

**Маршрут не може бути побудований, якщо в якості джерела мапи вибрано *[Онлайн-мапу](../../map/raster-maps.md#select-raster-maps)***.

:::


### Меню Навігація {#navigation-menu}

Існує 3 способи потрапити в меню навігації:

- [*Кнопка навігації*](../../widgets/map-buttons.md#directions) на екрані мапи.  
- *Маршрут до/з* у [*контекстному меню мапи*](../../map/map-context-menu.md#directions-to--from).  
- Розділ Навігація в [*Головному меню*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню навігації Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню навігації iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- **<Translate android="true" ids="shared_string_my_location"/>** – Встановити початкову точку (за замовчуванням: [*Моє поточне місцезнаходження*](../../map/interact-with-map.md#my-location-and-zoom)).
- **<Translate android="true" ids="add_destination_point"/>** - Використовуйте для [встановлення пункту призначення](#set-target-point).
- **Додати** &nbsp;&#43; - Вставити [проміжні точки](../../widgets/nav-widgets.md#distance-to-intermediate) вздовж маршруту.
- **Поміняти місцями** &nbsp;&#8595;&#8593; - Поміняти місцями точки *Старт* та *Фініш*.
- **Кнопка звуку** - Вимкнути [голосові підказки](../guidance/voice-navigation.md).
- **<Translate android="true" ids="shared_string_settings"/>** – [Налаштувати](#settings) параметри маршруту та обмеження на дорогах.

Встановіть пункт призначення в *меню Навігація* за допомогою:

- Спеціальні улюблені точки [Дім / Робота](#use-home-or-work-points).
- Попередній маршрут або [Історія](../../personal/global-settings.md#history).
- Кнопка **Скасувати** повертає на головний екран.
- [Кнопка Старт](#start--stop-navigation) запускає навігацію після завершення розрахунку маршруту.
  
### Вибір початкової точки {#select-start-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вибір на мапі](@site/static/img/navigation/route/select_on_map.png)

Що стосується початкової точки, ви можете вибрати своє поточне місцезнаходження, місцезнаходження [Улюбленої точки](../../map/point-layers-on-map.md#favorites), вибрати точку на мапі або скористатися [Пошуком](../../search/index.md). Коли ви вибираєте точку на мапі, відкривається діалогове вікно. Мапа центрується з маркером, відображаються координати центру мапи, і ви переміщуєте мапу під маркером замість прямого натискання на місце. Для підтвердження натисніть кнопку *Вибрати*. Ви також можете встановити початкову точку в [контекстному меню мапи](../../map/map-context-menu.md), вибравши функцію [Маршрут з](../../map/map-context-menu.md#directions-to--from).  
</TabItem>

<TabItem value="ios" label="iOS">

![Вибір на мапі iOS](@site/static/img/navigation/route/select_on_map_ios.png)

Що стосується початкової точки, ви можете вибрати своє поточне місцезнаходження, місцезнаходження [Улюбленої точки](../../map/point-layers-on-map.md#favorites), вибрати точку на мапі або скористатися [Пошуком](../../search/index.md). При виборі точки на мапі ви можете вільно переміщати та масштабувати мапу, а потім торкнутися бажаного місця. У вибраній точці з'являється прапорець. Ви також можете встановити початкову точку в [контекстному меню мапи](../../map/map-context-menu.md), вибравши функцію [Маршрут з](../../map/map-context-menu.md#directions-to--from). 
</TabItem>

</Tabs>

### Встановлення цільової точки {#set-target-point}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню навігації Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)

Найважливіше для початку навігації - це визначити пункт призначення. Пункт призначення можна знайти за допомогою функції [*Пошук*](../../search/index.md#overview) або просто на мапі. Ви також можете встановити цільову точку в [*меню Навігація*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Відкриває [меню пошуку](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Відкриває [меню пошуку адреси](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Відкриває діалогове вікно, де мапа центрується з маркером. Відображаються координати центру мапи, ви переміщуєте мапу під маркером і підтверджуєте вибір натисканням *Вибрати*.
- **<Translate android="true" ids="shared_string_favorites"/>** - Дозволяє використовувати [Улюблене](../../personal/favorites.md) як пункт призначення.
- **<Translate android="true" ids="shared_string_markers"/>** - Дозволяє вибрати один з [Маркерів на мапі](../../personal/markers.md) як пункт призначення.
- **Поміняти місцями початкову точку та пункт призначення** &nbsp;&#8595;&#8593; - Дозволяє поміняти місцями точки *Старт* та *Фініш*.
</TabItem>

<TabItem value="ios" label="iOS">

![Меню навігації iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

Найважливіше для початку навігації - це визначити пункт призначення. Пункт призначення можна знайти за допомогою функції [*Пошук*](../../search/index.md#overview) або просто на мапі. Ви також можете встановити цільову точку в [*меню Навігація*](#navigation-menu):  

- **<Translate android="true" ids="search_button"/>** - Відкриває [меню пошуку](../../search/index.md).
- **<Translate android="true" ids="shared_string_address"/>** - Відкриває [меню пошуку адреси](../../search/search-address.md).
- **<Translate android="true" ids="shared_string_select_on_map"/>** - Дозволяє переміщати та масштабувати мапу, а потім торкнутися бажаного місця. У вибраній точці з'являється прапорець і позначає пункт призначення.
- **<Translate android="true" ids="shared_string_favorites"/>** - Дозволяє використовувати [Улюблене](../../personal/favorites.md) як пункт призначення.
- **<Translate android="true" ids="shared_string_markers"/>** - Дозволяє вибрати один з [Маркерів на мапі](../../personal/markers.md) як пункт призначення.
- **Поміняти місцями початкову точку та пункт призначення** &nbsp;&#8595;&#8593; - Дозволяє поміняти місцями точки *Старт* та *Фініш*.
</TabItem>

</Tabs>


### Проміжні пункти призначення {#intermediate-destinations}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Проміжні точки навігації Android 1](@site/static/img/navigation/route/navigation_interpoints_1_andr.png) ![Проміжні точки навігації Android 2](@site/static/img/navigation/route/navigation_interpoints_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Проміжні точки навігації iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Проміжні точки навігації iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - дозволяє відкрити список пунктів призначення для внесення змін.
- **&nbsp;&#8592;** - перехід до екрана меню Навігація.
- **&nbsp;&#10005;** - дозволяє видалити пункт призначення зі списку точок.
- **&nbsp;&#61;** - дозволяє змінювати порядок точок у списку.
- *&nbsp;&#43; Додати* - відкриває контекстне меню *Додати проміжну точку*.
- *&nbsp;&#9776; Очистити все* - дозволяє очистити всі проміжні точки.

Якщо ви виберете **Сортувати** (*Android*) або **Опції** (*iOS*) у списку пунктів призначення, ви отримаєте доступ до спеціальних опцій для налаштування порядку навігації до проміжних точок.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Проміжні точки навігації Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Проміжні точки навігації iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

У цьому меню ви можете знайти додаткові опції для керування пунктами призначення:

- **<Translate android="true" ids="intermediate_items_sort_by_distance"/>** - OsmAnd запропонує найкоротший маршрут між усіма вашими пунктами призначення, однак порядок відвідування можна редагувати. Початкова точка та кінцевий пункт призначення не зміняться.

- **<Translate android="true" ids="switch_start_finish"/>** - Початкова точка та кінцевий пункт призначення будуть поміняні місцями.

- **<Translate android="true" ids="reverse_all_points"/>** (*Тільки для Android*) - Усі точки будуть розташовані у зворотному порядку.

- **<Translate android="true" ids="add_intermediate_point"/> / <Translate ios="true" ids="add_waypoint_short"/>**. Ви можете додати проміжні пункти призначення з цього меню. Процес вибору проміжної точки призначення на мапі такий самий, як для початкових і цільових точок.

- **<Translate android="true" ids="clear_all_intermediates"/>**. Усі проміжні пункти призначення будуть видалені з мапи.

### Використання точок Дім або Робота {#use-home-or-work-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Спеціальні улюблені Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Спеціальні улюблені iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

Вкладки **Дім** та **Робота** (або [Спеціальні точки](../../personal/favorites.md#special-favorites-personal) для Улюблених) можна використовувати для швидкого встановлення пунктів призначення в меню навігації. Якщо ви не ввели адреси Спеціальних улюблених, ці поля залишаться порожніми. Якщо ви торкнетеся цього поля, вам буде запропоновано створити ці POI.  


### Історія попередніх маршрутів {#history-of-previous-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Попередній маршрут Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Попередній маршрут iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

Якщо запис [Історії навігації](../../personal/global-settings.md#history) увімкнено, ви можете використовувати попередні маршрути або пункти призначення зі списку історії для навігації. Ця опція може бути корисною для швидкого доступу до часто використовуваних маршрутів. Елементи у списку історії відсортовані за останнім використанням, починаючи з найновіших.  

:::note

- Коли запис даних [Історії](../../personal/global-settings.md#history) вимкнено, вам не буде запропоновано використовувати попередні маршрути для навігації.
- Ви можете видалити деякі або всі записи історії про ваші попередні маршрути. Це можна зробити на вкладці *[Історія навігації](../../personal/global-settings.md#history)* опції Історія (*Меню → Налаштування → Налаштування OsmAnd → Історія*).

:::


## Старт / Зупинка навігації {#start--stop-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Екран запуску навігації Android](@site/static/img/navigation/route/navigation_start_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Екран навігації iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Після вибору початкової та кінцевої точок, застосунок створить маршрут між ними, використовуючи активний профіль. [Профіль застосунку](../../personal/profiles.md) та набір [віджетів](../../widgets/index.md) перемкнуться лише після того, як ви натиснете кнопку *Старт* навігації.

- **Натисніть Старт**, щоб розпочати навігацію.
- [Призупиніть](#pause--resume-navigation) навігацію під час перерви. (*Тільки для Android*)
- **Зупиніть** навігацію, вибравши **Зупинити** (*Android*) або **Скасувати** (*iOS*).

:::note Деталі маршруту
Додаткову інформацію про створений маршрут, таку як висота, покрокові інструкції, інструмент аналізу та інше, можна знайти в розділі [**Деталі**](../setup/route-details.md).
:::

### Перерахунок маршруту {#route-recalculation}

Маршрут може бути автоматично перерахований у разі відхилення від нього. Ви можете змінити параметри перерахунку в [Налаштуваннях навігації](../guidance/navigation-settings.md#recalculate-route). Ви також можете вимкнути сповіщення про перерахунок маршруту в налаштуваннях [Голосових підказок](../guidance/voice-navigation.md#voice-settings).

### Призупинення / Відновлення навігації {#pause--resume-navigation}

<InfoAndroidOnly/>

Якщо ви хочете зупинитися на перерву і ненадовго відхилитися від маршруту, ви можете скористатися функцією *Призупинити/Відновити* навігацію, щоб призупинити голосові підказки та зупинити перерахунок маршруту.  
Ця опція доступна у версії застосунку для Android у *[Списку сповіщень](../guidance/voice-navigation.md#text-notifications)* або з *[меню Швидких дій](../../widgets/quick-action.md)*.

![Екран сповіщень Android](@site/static/img/navigation/route/navigation_pause_android.png)

Щоб відновити навігацію:

- Використовуйте повідомлення від OsmAnd на панелі сповіщень.
- Використовуйте *меню Швидких дій* або діалогове вікно, що з'являється при натисканні на *[кнопку Навігація](../../widgets/map-buttons.md#directions)* (див. скріншот).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Відновлення навігації Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Відновлення навігації iOS](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

:::note
Коли ви **натискаєте кнопку Навігація** під час руху по маршруту, навігація **не зупиняється, а голосові підказки продовжують озвучуватися**, хоча запропоновані варіанти Відновити або Старт можуть збивати з пантелику.
:::


### Поради щодо економії енергії {#power-saving-tips}

Навігація використовує GPS та фонову обробку, що може розряджати акумулятор. Для оптимізації енергоспоживання:

- **Вимкніть екран**, покладаючись на голосові підказки.  
- Увімкніть [Керування екраном](../guidance/voice-navigation.md#screen-control) (*Тільки для Android*) у *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>*.


## Налаштування {#settings}

![Підготовка маршруту Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Налаштування навігації {#navigation-settings}

Щоб отримати доступ до налаштувань навігації, виконайте один з наведених нижче кроків:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Кнопка навігації → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
У профілі *Перегляд мапи* немає налаштувань навігації.  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Налаштування навігації Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації профілів iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** визначає, як розраховуються маршрути. Наприклад, ваш велосипедний профіль має тип навігації "Велосипед", який встановлює правила маршрутизації. Ви можете імпортувати ці правила (у вигляді файлу routing.xml) в OsmAnd. Більше про маршрутизацію ви можете прочитати на нашій сторінці [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing).&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** контролює, які параметри будуть використовуватися під час маршрутизації (це процес вибору маршруту для навігації).

Будь ласка, прочитайте про параметри маршруту для відповідного типу навігації.

Як налаштувати [тип маршрутизації](../routing/osmand-routing.md#routing-types) та [параметри маршруту](../guidance/navigation-settings.md#route-parameters) ви можете прочитати у статті [Налаштування навігації](../guidance/navigation-settings.md) або у статтях про конкретні типи маршрутизації в розділі [Параметри маршруту](../routing/osmand-routing.md#routing-types).  


## Симуляція навігації {#simulated-navigation}

Інструмент **Симуляція навігації** дозволяє переглянути маршрут перед поїздкою. Це допомагає у плануванні, ознайомленні та тестуванні навігаційної системи OsmAnd.

### Старт / Зупинка симуляції {#start--stop-simulation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Симуляція навігації Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Симуляція навігації iOS](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

Коли навігаційний маршрут побудовано, ви можете розпочати симуляцію навігації за допомогою опції **<Translate android="true" ids="simulate_navigation"/>**.  

- У [меню Навігація](#navigation-menu) перейдіть до *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Перемкніть перемикач, щоб увімкнути опцію.
- Натисніть кнопку навігації [Старт](#start--stop-navigation), щоб розпочати симуляцію.
- Щоб [Зупинити](#start--stop-navigation) симуляцію навігації, натисніть **Зупинити** (*Android*) або **Скасувати** (*iOS*).


### Режим швидкості {#speed-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Симуляція навігації Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →*  &#x2699

![Симуляція навігації iOS](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="simulation_preview_mode_title"/>** - Прискорює симуляцію на прямих ділянках, сповільнюючись на перехрестях.

- **<Translate android="true" ids="simulation_constant_mode_title"/>** - Працює з фіксованою швидкістю.
- **<Translate android="true" ids="simulation_real_mode_title"/>**:
    - **На прямих ділянках** дороги швидкість буде близькою до максимально дозволеної.
    - **На перехрестях** симулятор буде знижувати швидкість.
    - **Додаткові штрафи** будуть застосовуватися на світлофорах, знаках "Стоп" та інших подібних перешкодах.


## Відсутні або несинхронізовані мапи {#maps-missing-or-not-synchronized}

Для побудови маршруту всі **необхідні мапи** мають бути завантажені та мати однакову дату випуску. Зверніть увагу, що в деяких ситуаціях повідомлення про відсутність мап може бути приховане в меню підготовки маршруту. Якщо ви потягнете меню навігації вгору, ви побачите можливі причини, чому ваш маршрут не вдалося розрахувати.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Повідомлення про відсутність мап при побудові навігації Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Повідомлення про відсутність мап при побудові навігації iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

### Необхідні мапи {#required-maps}

У діалоговому вікні необхідних мап ви побачите пропозиції щодо завантаження або оновлення мап. Список використовуваних мап може бути неточним, оскільки він розраховує дуже базовий маршрут. Щоб отримати точний список мап, ви можете натиснути **Розрахувати онлайн**. Якщо ви виберете **Використовувати завантажені мапи**, то розрахунок маршруту спробує використати вже завантажені мапи та пропустити попереджувальне повідомлення.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Повідомлення про відсутність мап при побудові навігації Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Повідомлення про відсутність мап при побудові навігації iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Поширені проблеми та їх вирішення {#common-issues-and-solutions}

1. [Можливі причини повільного розрахунку маршруту.](../../troubleshooting/navigation.md#route-calculation-is-slow)
2. [Що робити, якщо довжина маршруту перевищує 250 кілометрів.](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)
3. [Що робити, якщо запропонований маршрут здається неправильним.](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)
4. [Як вирішити ситуацію, коли навігація неможлива через відсутність необхідних мап.](#maps-missing-or-not-synchronized)

Для отримання додаткових кроків з усунення несправностей див. [проблеми з навігацією](../../troubleshooting/navigation.md).


## Схожі статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Деталі маршруту](./route-details.md)
- [Навігація за треком](./gpx-navigation.md)
- [Навігація за маркерами](./markers-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран мапи під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)