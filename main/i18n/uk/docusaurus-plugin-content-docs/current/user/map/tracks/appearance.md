---
source-hash: 90a0b74b4490473745395b99a2752c49185e30cca6fc93a62ca20659393e7eed
sidebar_position: 5
title:  Вигляд треку
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

Функція **Вигляд треку** дозволяє користувачам налаштовувати відображення треків на мапі. Це включає налаштування кольору, ширини, індикаторів напрямку та інших візуальних елементів. Налаштування вигляду треку допомагає розрізняти кілька треків, виділяти певні маршрути та покращувати читабельність мапи.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Track Appearance overview Android](@site/static/img/map/track-appear-and-1.png) ![Track menu Appearance Android](@site/static/img/map/track_appearence_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance iOS](@site/static/img/map/track_appearence_1_ios.png) ![Track menu Appearance iOS](@site/static/img/map/track_appearence_2_ios.png)

</TabItem>

</Tabs>


## Доступ до меню {#access-to-the-menu}

Ви можете змінити вигляд треку одним із наступних способів:

- **З Моїх місць**. Відкрийте *Меню → Мої місця → Треки*, виберіть трек, торкніться *іконки Вигляд* у [контекстному меню треку](../../map/tracks/track-context-menu.md#overview).
- **З мапи**. Торкніться треку безпосередньо на мапі, потім торкніться *іконки Вигляд* у розділі *Огляд*.
- **З запису треку**. Змініть вигляд поточного записаного треку через [контекстне меню запису треку](../../plugins/trip-recording.md#сurrent-track-recording).
- **З меню Налаштувати мапу**. Перейдіть до *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> →* **&#8942;** *→ <Translate android="true" ids="change_appearance"/>* для відображених треків.


## Налаштування вигляду треку {#track-appearance-settings}

### Колір {#color}

:::tip purchases
Деякі налаштування доступні лише з *OsmAnd Pro*. <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">Android</a> та <a href="https://osmand.net/docs/user/purchases/ios#free-and-paid-features">iOS</a> Безкоштовні та платні функції.
:::

![Appearance](@site/static/img/map/appearance_color_andr.png)

Ви можете встановити колір треку вручну або використовувати **візуалізацію даних на основі кольору** (наприклад, швидкість, висота, нахил). Якщо трек не має певних даних, OsmAnd відображає відсутні ділянки сірим кольором.

**Доступні параметри кольору:**

- **Безкоштовні налаштування**: *<Translate android="true" ids="track_coloring_solid"/> колір*, *<Translate android="true" ids="shared_string_speed"/>* (якщо записано) та *<Translate android="true" ids="altitude"/>* (якщо записано).

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png) ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)

- [Pro функція](../../purchases/index.md)): *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>*.

Для отримання додаткової інформації про налаштування вигляду лінії маршруту дивіться [Екран мапи під час навігації](../../navigation/guidance/map-during-navigation.md#color) та про вибір і створення власного кольору дивіться [Кольорові схеми](../../personal/color-palette-schemes.md#routes).


### Ширина {#width}

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png) ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)

Ви можете налаштувати вигляд треку в декількох меню програми:

- [*Трек → Вигляд*](../../personal/tracks/manage-tracks.md#track-folder).
- [*Налаштування навігації → Налаштувати лінію маршруту*](../../navigation/guidance/navigation-settings.md#customize-route-line).
- [*Мої місця → Вкладка Треки → будь-яка папка → Вигляд за замовчуванням*](../../personal/tracks/manage-tracks.md#track-folder).

Налаштуйте ширину треку, щоб покращити видимість на мапі.

- **Попередньо встановлені параметри**: **Тонкий, Середній** та **Жирний**.

- **Власна ширина**: Регулюється від 1 до 24 пікселів за допомогою повзунка.

- **Ширина на основі профілю**: Може бути встановлена через *Налаштування навігації → [Налаштувати лінію маршруту](../../navigation/guidance/navigation-settings.md#customize-route-line)*.


### Інтервал розділення {#split-interval}

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png) ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

Виберіть, чи розділяти інтервал на треку **за відстанню чи за часом**.

### Стрілки напрямку {#direction-arrows}

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)

Додає **маркери-стрілки** вздовж треку для позначення напрямку руху.

### Іконки початку та кінця {#start-and-finish-icons}

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)

Дозволяє вибрати, чи показувати **іконки початку та кінця** для сегментів треку.

### З'єднати прогалини {#join-gaps}

З'єднує **сегменти треку**, які були перервані через втрату GPS або паузу в записі. Функція **<Translate android="true" ids="join_segments"/>** (*Android*) або **<Translate ios="true" ids="gpx_join_gaps"/>** (*iOS*) дозволяє з'єднати ці прогалини у вибраному GPX треку прямими лініями.

### Скинути до оригіналу {#reset-to-original}

Відновлює всі **налаштування вигляду треку** до їх значень за замовчуванням.


## 3D Трек {#3d-track}

:::info Paid feature
**3D Трек** — це платна функція **OsmAnd Pro** для [iOS](../../purchases/ios.md#pro-features) та [Android](../../purchases/android.md#pro-features) <ProFeature />.
:::

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

</TabItem>

</Tabs>

Функція **3D Трек** генерує тривимірну візуалізацію шляхом інтеграції даних про висоту в стандартні 2D треки. Ця функція створює представлення з покращеною глибиною, що дозволяє точно аналізувати трек відносно рельєфу. Включення деталей висоти дозволяє 3D треку запропонувати більш повний огляд топографії та географічного контексту маршруту.

### Налаштування 3D Треку {#3d-track-settings}

**Висота стіни**
Ви можете візуалізувати 3D трек за висотою та іншими доступними даними в межах треку, або за фіксованою висотою.

- **<Translate android="true" ids="visualized_by"/>**: &nbsp;*Висота*, &nbsp;*Швидкість*, &nbsp;*Фіксована висота*. Дані 3D-сенсорів: &nbsp;*Пульс*, &nbsp;*Каденс велосипеда*, &nbsp;*Потужність велосипеда*, &nbsp;*Температура*, &nbsp;*Швидкість велосипеда*.

- **<Translate android="true" ids="vertical_exaggeration"/>**. Якщо візуалізується за *Висотою* або *Швидкістю*, ви можете масштабувати 3D-дані, щоб отримати більш помітну візуалізацію для 3D-треку в діапазоні від *Немає* до *x3.0*.

- **<Translate android="true" ids="wall_height"/>**. Якщо візуалізується за *Фіксованою висотою*, встановіть фіксовану висоту для 3D-треку, визначивши його висоту на мапі в діапазоні від *Немає* до *2000 м*.

- Ви можете поєднати це з [3D Рельєфом](../../plugins/topography.md#3d-relief). Якщо джерелом 3D-даних не є висота, 3D-представлення буде комбінацією висоти рельєфу та вибраних даних, таких як швидкість або пульс.

**<Translate android="true" ids="wall_color"/>**
Налаштовує **колір 3D-треку** за допомогою градієнтів або візуалізації на основі даних.
Параметри включають: *Немає*, &nbsp;*Суцільний*, &nbsp;*Низхідний градієнт*, &nbsp;*Висхідний градієнт*, &nbsp;*Висота*, &nbsp;*Нахил*, &nbsp;*Швидкість*.

**<Translate android="true" ids="track_line"/>**
Додає [виділену лінію](#color) до верхньої або нижньої частини 3D-треку.
Параметри включають: *Верх*, &nbsp;*Низ*, &nbsp;*Верх і низ*.

> **ПРИМІТКА**: *Для використання візуалізації 3D-треку в **версії програми для Android** потрібен увімкнений механізм рендерингу мапи [Версія 2 (OpenGL)](../../personal/global-settings.md#map-rendering-engine).*


### Варіанти використання {#use-cases}

Функція 3D-треку дуже корисна для таких видів діяльності, як парапланеризм, де візуалізація траєкторії польоту може надати глибше розуміння. Відображаючи трек у 3D, ви можете використовувати такі функції, як **Висота стіни** та **Колір стіни**, щоб отримати цінну візуальну інформацію для аналізу.

1. **Візуалізація за швидкістю в 3D**.
    Одним із поширених варіантів використання є використання 3D-треків для візуалізації змін швидкості. Це дозволяє точно визначити конкретні ділянки треку, де ви сповільнювалися або прискорювалися.

    За допомогою Кольору стіни на основі Нахилу ви можете спостерігати, як рельєф, зокрема пагорби та схили, впливали на вашу швидкість. Ця комбінація візуалізації швидкості та нахилу забезпечує детальне розуміння продуктивності протягом активності.

2. **Візуалізація за датчиком серця з 3D-рельєфом**.
    Ще одним корисним застосуванням є поєднання даних датчика пульсу з 3D-картами рельєфу. Це дозволяє відображати коливання пульсу безпосередньо на рельєфі, надаючи вам повне уявлення про те, як зміни висоти могли вплинути на ваші фізичні зусилля.

    Функція 3D-рельєфу, яка перебільшує висоту, працює незалежно від вигляду 3D-треку. Можна налаштувати два параметри вертикального перебільшення, щоб краще зрозуміти кореляцію між пульсом та висотою рельєфу.

3. **Візуалізація висоти треку та кольорової лінії нахилу на плоскому вигляді землі.**
    При візуалізації даних про висоту рекомендується використовувати плоский вигляд землі, щоб уникнути проблем, таких як помилки GPS, які можуть призвести до того, що ділянки треку з'являться під землею.

    У цьому сценарії зміни нахилу можна візуалізувати окремо вздовж лінії треку, тоді як Колір стіни використовується для представлення висоти. Цей метод гарантує, що навіть за потенційних неточностей даних ви все одно отримаєте чітку та точну візуалізацію нахилу та висоти.

## Змінити вигляд для кількох треків {#change-appearance-for-multiple-tracks}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_1_andr.png) ![Appearance Android](@site/static/img/personal/tracks/my_places_tracks_change_appear_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Change Appearance](@site/static/img/map/tracks_change_appear_3_ios.png) ![Change Appearance](@site/static/img/map/tracks_change_appear_2_ios.png)

</TabItem>

</Tabs>

Вкладка [Треки](../../personal/tracks/manage-tracks.md) автоматично відображає всі треки, які коли-небудь були записані, створені або імпортовані. Вони організовані за папками або відображаються списком під ними.

Змініть вигляд кількох треків у *Мої місця → Треки*:

- **Змінити вигляд за замовчуванням** - Застосовує налаштування до всіх треків у [папці](../../personal/tracks/manage-tracks.md#track-folder).
- **Скинути до оригіналу** - Відновлює індивідуальні налаштування треку.

- [Режим вибору](../../personal/tracks/manage-tracks.md#selection-mode) - Змінює вигляд певних треків у вибраній папці або в усьому списку на вкладці Треки.
    - Виберіть *меню з трьома крапками* у верхньому правому куті вкладки Треки та торкніться *Вибрати*.
    - Потім торкніться *меню з трьома крапками* у верхній частині екрана та виберіть *Змінити вигляд*.

Параметри масового налаштування вигляду:

- **Стрілки напрямку** - Додає [індикатори руху](#direction-arrows).
    Стани: *Без змін*, &nbsp;*Оригінал*, &nbsp;*Увімкнено*, &nbsp;*Вимкнено*.

- **Показати іконки початку та кінця** - [Відображає маркери](#start-and-finish-icons) для початкової та кінцевої точок треку.
    Стани: *Без змін*, &nbsp;*Оригінал*, &nbsp;*Увімкнено*, &nbsp;*Вимкнено*.

- **Колір** – Застосувати ручне або [кольорове відображення](#color) на основі даних.

- **Ширина** – Налаштуйте [ширину лінії треку](#width) за допомогою попередньо встановлених значень або вручну.

- **Інтервал розділення** – [Встановіть інтервал](#split-interval) для маркерів відстані / часу.
    Стани: *Без змін*, &nbsp;*Оригінал*, &nbsp;*Вибрати*: *Час* або *Відстань*.

Оригінал та без змін:

- **Оригінал** - Відновлює оригінальні параметри з файлу треку.

- **Без змін** - Зберігає поточні налаштування під час сеансу редагування.


## Кольори треків у файлах GPX {#track-colors-in-gpx-files}

OsmAnd підтримує **власні кольори треків** у файлах GPX за допомогою тегу `<osmand:color>` у розділі `<extensions>` елемента `<trk>`. Це дозволяє користувачам визначати кольори для окремих треків, покращуючи візуальне розрізнення, коли на мапі відображається кілька треків.

Щоб вказати колір для треку, використовуйте наступний формат:

```xml
<trk>
  <name>Приклад треку</name>
  <extensions>
    <osmand:color>#FF0000</osmand:color>
  </extensions>
</trk>
```

- Тег `<osmand:color>` приймає **шістнадцяткові коди кольорів** (наприклад, `#FF0000` для червоного).
- Якщо у файлі GPX існує кілька треків, кожен трек може мати свій власний тег `<osmand:color>`.


**Поведінка в OsmAnd:**

1. **Призначення кольору за замовчуванням**:

    - Коли **трек GPX імпортується як один трек** (опція ***Імпортувати як один трек***), всьому треку призначається **колір GPX за замовчуванням** (червоний).
    - У OsmAnd **4.9.10 та пізніших версіях** цю проблему вирішено — індивідуальні кольори треків тепер зберігаються при імпорті.

2. **Одноколірне відображення для об'єднаних треків:**

    - Якщо треки **об'єднані** за допомогою ***З'єднати сегменти***, отриманий трек розглядається як **один безперервний трек з одним сегментом**.
    - Багатоколірне представлення **не підтримується** для об'єднаних треків.
    - Об'єднаний трек буде відображатися за допомогою **основного кольору GPX** (за замовчуванням: червоний), навіть якщо окремі сегменти треку спочатку мали різні кольори.

3. **Пріоритет налаштувань вигляду:**

    - OsmAnd наразі підтримує **налаштування кольору та ширини лише для всього треку**.
    - Ці налаштування вигляду зберігаються у **розширеннях GPX верхнього рівня**.
    - Якщо колір або ширина **встановлені на верхньому рівні** (або у файлі GPX, або вручну в OsmAnd), це налаштування матиме пріоритет над кольорами, призначеними окремим сегментам треку.

**Обхідний шлях для багатоколірних треків:**

- Щоб зберегти **індивідуальні кольори для кількох треків**, **імпортуйте треки окремо** замість їх об'єднання.

- Налаштуйте кольори треків вручну в **Налаштуваннях вигляду треку**:

  - Відкрийте трек в OsmAnd.
  - Торкніться треку, щоб відкрити **Контекстне меню**.
  - Виберіть **Вигляд**.
  - Виберіть бажаний колір.

- Це гарантує, що кожен трек збереже своє **заплановане кольорове представлення**, навіть якщо файл GPX спочатку містив кілька сегментів з різними кольорами.


## Пов'язані статті {#related-articles}

- [Контекстне меню мапи](../map-context-menu.md)
- [Налаштувати мапу](../configure-map-menu.md)
- [Точки на мапі](../point-layers-on-map.md)
- [Треки](../tracks/index.md)
- [Контекстне меню треків](../tracks/track-context-menu.md)
- [Запис поїздки](../../plugins/trip-recording.md)

> *Останнє оновлення: Лютий 2025*