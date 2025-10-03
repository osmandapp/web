---
source-hash: 14cc910311b8184de4592823da11d7e1fc80a1c137f871fb88891d55a65ae840
sidebar_position: 5
title:  Зовнішній вигляд треку
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

Функція **Зовнішній вигляд треку** дозволяє користувачам налаштовувати спосіб відображення треків на мапі. Це включає налаштування кольору, ширини, індикаторів напрямку та інших візуальних елементів. Налаштування зовнішнього вигляду треку допомагає розрізняти кілька треків, виділяти певні маршрути та покращувати читабельність мапи.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Огляд зовнішнього вигляду треку Android](@site/static/img/map/track-appear-and-1.png)  ![Меню треку Вигляд Android](@site/static/img/map/track_appearence_1_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Меню треку Вигляд iOS](@site/static/img/map/track_appearence_1_ios.png) ![Меню треку Вигляд iOS](@site/static/img/map/track_appearence_2_ios.png)  

</TabItem>

</Tabs>


## Доступ до меню {#access-to-the-menu}

Ви можете змінити зовнішній вигляд треку одним із наступних способів:

- **З Моїх місць**. Відкрийте *Меню → Мої місця → Треки*, виберіть трек, торкніться *іконки Вигляд* у [контекстному меню треку](../../map/tracks/track-context-menu.md#overview).
- **З мапи**. Торкніться треку безпосередньо на мапі, а потім торкніться *іконки Вигляд* у розділі *Огляд*.
- **Під час запису треку**. Змініть вигляд поточного записаного треку через [контекстне меню запису треку](../../plugins/trip-recording.md#current-track-recording).  
- **З меню Налаштувати мапу**. Перейдіть до *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* для відображених треків.


## Налаштування зовнішнього вигляду треку {#track-appearance-settings}

### Колір {#color}

:::tip purchases
Деякі налаштування можна використовувати лише з *OsmAnd Pro*. Безкоштовні та платні функції для <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> та <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a>.
:::

![Вигляд](@site/static/img/map/appearance_color_andr.png)

Ви можете встановити колір треку вручну або використовувати **візуалізацію даних на основі кольору** (наприклад, швидкість, висота, нахил). Якщо в треку відсутні певні дані, OsmAnd відображає відсутні ділянки сірим кольором.

**Доступні варіанти кольору:**

- **Безкоштовні налаштування**: *колір <Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* (якщо записано) та *<Translate android="true" ids="altitude"/>* (якщо записано).

    ![Меню треку Вигляд Колір треку Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Вигляд Колір треку Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- [Функція Pro](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.  

Для отримання додаткової інформації про налаштування зовнішнього вигляду лінії маршруту див. [Екран мапи під час навігації](../../navigation/guidance/map-during-navigation.md#color), а про вибір і створення власного кольору див. [Колірні схеми](../../personal/color-palette-schemes.md#routes).


### Ширина {#width}

![Меню треку Вигляд Товщина треку Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Зовнішній вигляд треку](@site/static/img/map/track_appearance_width_andr.png)  

Ви можете налаштувати зовнішній вигляд треку в кількох меню програми:

- [*Трек → Вигляд*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Налаштування навігації → Налаштувати лінію маршруту*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Мої місця → вкладка Треки → будь-яка тека → Вигляд за замовчуванням*](../../personal/tracks/manage-tracks.md#track-folder).

Налаштуйте ширину треку, щоб покращити його видимість на мапі.

- **Попередньо встановлені параметри**: **Тонка, Середня** та **Жирна**.

- **Власна ширина**: регулюється від 1 до 24 пікселів за допомогою повзунка.

- **Ширина на основі профілю**: можна встановити через *Налаштування навігації → [Налаштувати лінію маршруту](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Інтервал поділу {#split-interval}

![Меню треку Вигляд Інтервал поділу](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Інтервал поділу](@site/static/img/map/track_appearance_menu_split_interval_ios.png)  

Виберіть, чи розділяти інтервал на треку **за відстанню чи за часом**.

### Стрілки напрямку {#direction-arrows}

![Меню треку Вигляд стрілки напрямку Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)  

Додає **маркери-стрілки** вздовж треку для позначення напрямку руху.

### Іконки старту та фінішу {#start-and-finish-icons}

![Меню треку Вигляд іконки старту та фінішу Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

Дозволяє вибрати, чи показувати **іконки старту та фінішу** для сегментів треку.

### З'єднати розриви {#join-gaps}

З'єднує **сегменти треку**, які були перервані через втрату сигналу GPS або паузу в записі. Функція **<Translate android="true" ids="join_segments"/>** (*Android*) або **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) дозволяє з'єднати ці розриви у вибраному GPX-треку прямими лініями.

### Скинути до початкових {#reset-to-original}

Відновлює всі **налаштування зовнішнього вигляду треку** до значень за замовчуванням.


## 3D-трек {#3d-track}

:::info Paid feature
**3D-трек** — це платна функція **OsmAnd Pro** для [iOS](../../purchases/ios.md#pro-features) та [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню треку Вигляд 3D-візуалізація](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню треку Вигляд 3D-візуалізація](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Функція **3D-трек** створює тривимірну візуалізацію шляхом інтеграції даних про висоту у стандартні 2D-треки. Ця функціональність створює представлення з покращеною глибиною, що дозволяє проводити точний аналіз треку відносно рельєфу. Завдяки включенню деталей про висоту, 3D-трек пропонує більш повне уявлення про топографію маршруту та географічний контекст.

### Налаштування 3D-треку {#3d-track-settings}

**Висота стіни**  
Ви можете візуалізувати 3D-трек за висотою та іншими доступними даними в межах треку, або за фіксованою висотою.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Висота*, &nbsp;*Швидкість*, &nbsp;*Фіксована висота*. Дані 3D-сенсора: &nbsp;*Частота серцевих скорочень*, &nbsp;*Каденс велосипеда*, &nbsp;*Потужність велосипеда*, &nbsp;*Температура*, &nbsp;*Швидкість велосипеда*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Якщо візуалізація відбувається за *Висотою* або *Швидкістю*, ви можете масштабувати 3D-дані, щоб отримати більш виразну візуалізацію для 3D-треку в діапазоні від *Немає* до *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Якщо візуалізація відбувається за *Фіксованою висотою*, встановіть фіксовану висоту для 3D-треку, визначивши його висоту на мапі в діапазоні від *Немає* до *2000 м*.

- Ви можете поєднати це з [3D-рельєфом](../../plugins/topography.md#3d-relief). Якщо джерелом 3D-даних є не висота, 3D-представлення буде комбінацією висоти рельєфу та вибраних даних, таких як швидкість або частота серцевих скорочень.

**<Translate android="true" ids="wall_color"/>**  
Налаштовує **колір 3D-треку** за допомогою градієнтів або візуалізації на основі даних.  
Варіанти включають: *Немає*, &nbsp;*Суцільний*, &nbsp;*Спадний градієнт*, &nbsp;*Висхідний градієнт*, &nbsp;*Висота*, &nbsp;*Нахил*, &nbsp;*Швидкість*.

**<Translate android="true" ids="track_line"/>**  
Додає [виділену лінію](#color) до верхньої або нижньої частини 3D-треку.  
Варіанти включають: *Зверху*, &nbsp;*Знизу*, &nbsp;*Зверху та знизу*.

> **ПРИМІТКА**: *Для **Android-версії** програми необхідно увімкнути рушій рендерингу мапи [Версія 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine), щоб використовувати 3D-візуалізацію треку.*


### Варіанти використання {#use-cases}

Функція 3D-треку є дуже корисною для таких видів діяльності, як парапланеризм, де візуалізація траєкторії польоту може надати глибше розуміння. Рендеринг треку в 3D дозволяє використовувати такі функції, як **Висота стіни** та **Колір стіни**, для отримання цінної візуальної інформації для аналізу.

1. **Візуалізація за швидкістю в 3D**.  
    Одним із поширених варіантів використання є застосування 3D-треків для візуалізації змін швидкості. Це дозволяє точно визначити ділянки треку, де ви сповільнювалися або прискорювалися.  

    Завдяки кольору стіни, що базується на нахилі, ви можете спостерігати, як рельєф, зокрема пагорби та схили, впливав на вашу швидкість. Таке поєднання візуалізації швидкості та нахилу забезпечує детальне розуміння продуктивності протягом усього заняття.

2. **Візуалізація за допомогою датчика серцевого ритму з 3D-рельєфом**.  
    Іншим корисним застосуванням є поєднання даних датчика серцевого ритму з 3D-картами рельєфу. Це дозволяє накладати коливання частоти серцевих скорочень безпосередньо на рельєф, що дає повне уявлення про те, як зміни висоти могли вплинути на ваші фізичні зусилля.  

    Функція 3D-рельєфу, яка перебільшує висоту, працює незалежно від вигляду 3D-треку. Два параметри вертикального перебільшення можна налаштувати для кращого розуміння кореляції між частотою серцевих скорочень та висотою рельєфу.

3. **Візуалізація висоти треку та кольорової лінії нахилу на плоскому вигляді землі.**  
    При візуалізації даних про висоту рекомендується використовувати плоский вигляд землі, щоб уникнути таких проблем, як помилки GPS, які можуть призвести до того, що ділянки треку з'являться під землею.  

    У цьому сценарії зміни нахилу можна візуалізувати окремо вздовж лінії треку, тоді як колір стіни використовується для представлення висоти. Цей метод гарантує, що навіть за наявності потенційних неточностей у даних ви все одно отримаєте чітку та точну візуалізацію нахилу та висоти.

## Зміна вигляду для кількох треків {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вигляд Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png)  ![Вигляд Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Змінити вигляд](@site/static/img/map/tracks_change_appear_3_ios.png)  ![Змінити вигляд](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>  

Вкладка [Треки](../../personal/tracks/manage-tracks.md) автоматично відображає всі коли-небудь записані, створені або імпортовані треки. Вони організовані за теками або відображаються у вигляді списку під ними.  

Змініть зовнішній вигляд кількох треків у *Мої місця → Треки*:

- **Змінити вигляд за замовчуванням** - застосовує налаштування до всіх треків у [теці](../../personal/tracks/manage-tracks.md#track-folder).
- **Скинути до початкових** - відновлює індивідуальні налаштування треку.

- [Режим вибору](../../personal/tracks/manage-tracks.md#selection-mode) - змінює зовнішній вигляд певних треків у вибраній теці або всього списку на вкладці Треки.
    - Виберіть *меню з трьома крапками* у верхньому правому куті вкладки Треки та торкніться *Вибрати*.
    - Потім торкніться *меню з трьома крапками* у верхній частині екрана та виберіть *Змінити вигляд*.  

Параметри масового налаштування зовнішнього вигляду:

- **Стрілки напрямку** - додає [індикатори руху](#direction-arrows).  
    Стани: *Без змін*, &nbsp;*Оригінал*, &nbsp;*Увімк.*, &nbsp;*