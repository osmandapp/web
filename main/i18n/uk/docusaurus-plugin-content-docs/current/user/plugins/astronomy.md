---
source-hash: 97e9a342bf78770a793c6914a8b243b2d5b515ca46e61160b3da4e3e167ed8cb
sidebar_position: 3
title: Астрономія
unlistead: true
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

<InfoAndroidOnly/>

:::info
**Астрономія** наразі перебуває в **беті**.
:::

## Overview {#overview}

:::tip Purchase
Плагін Астрономія є [платною функцією](../purchases/index.md).  
:::

Плагін Астрономія відображає накладку неба зі зірками, сузір’ями, Сонцем, Місяцем та планетами безпосередньо на карті. Він використовує офлайн-каталог небесних тіл для обчислення та відображення поточних і майбутніх позицій небесних об’єктів. Плагін також дозволяє користувачам досліджувати нічне небо, ідентифікувати об’єкти та планувати спостереження, переглядаючи їхні траєкторії по небу.

Плагін працює повністю офлайн за допомогою вбудованих зоряних каталогів, що дозволяє досліджувати небо навіть без підключення до інтернету.


## Required Setup Parameters {#required-setup-parameters}
  
Наступні налаштування необхідні для відображення накладки Астрономії:

1. Увімкніть плагін [**Астрономія**](../plugins/index.md#enable--disable) у розділі *Плагіни* *Головного меню*
2. Використовуйте **Меню → Зоряна карта**, щоб відкрити спеціальний екран із зоряним небом, налаштуваннями та елементами керування часом.
3. Виберіть **час і дату** за допомогою елементів керування на екрані Зоряної карти.
4. Налаштуйте, що відображається на Зоряній карті, за допомогою [**Налаштувати вигляд**](#configure-view) — наприклад, увімкніть/вимкніть видимі об’єкти та засоби рендерингу.
5. Натисніть кнопку **Закрити (X)** у верхній частині екрана Зоряної карти, щоб вийти з Зоряної карти та повернутися до карти Землі.

Плагін працює з обома двигунами рендерингу карти, але найкраще функціонує в режимі OpenGL.

## Star Map Screen {#star-map-screen}

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/>* 

![Star map screen](@site/static/img/plugins/starwatcher/view_new_1.png)

Спеціальний екран **Зоряної карти** відображає інтерактивний небесний купол із зірками, сузір’ями, планетами, траєкторіями Сонця та Місяця. У нижній частині екрана доступні такі елементи керування: 
- [**Пошук**](#search) — відкриває екран Пошуку, де ви можете шукати небесні об’єкти та переглядати каталоги неба та категорії. 
- **Час і дата** — дозволяє змінити дату та час для спостереження неба в різні моменти в минулому чи майбутньому. Це корисно для планування спостережень, відстеження руху об’єктів або вивчення того, як змінюється небо з часом. Якщо ви встановите власну дату/час, чіп відобразить повну дату та час, а поруч з’явиться кнопка скидання, щоб повернутися до поточного системного часу.
- **<Translate android="true" ids="magnitude_filter"/>** — дозволяє обмежити, які зірки відображаються, на основі їхньої яскравості. Використовуйте повзунок, щоб встановити максимальне значення магнітуди. Нижчі значення показують лише найяскравіші зірки, тоді як вищі значення розкривають тьмяніші зірки та об’єкти глибокого неба. Це допомагає зменшити візуальний безлад або симулювати те, що видно неозброєним оком.
- [**<Translate android="true" ids="astro_configure_view"/>**](#configure-view) — відкриває налаштування відображення, які контролюють, як показуються об’єкти, траєкторії та референсні лінії на Зоряній карті.

Екран рендерить повну півсферу неба над вашим розташуванням, узгоджену з напрямком компаса. Зоряну карту можна обертати вручну, перетягуючи екран. Ручне обертання Зоряної карти не впливає на орієнтацію карти Землі. Карта Землі завжди слідує [режиму орієнтації карти](../map/interact-with-map.md#map-orientation-modes), вибраному в ваших налаштуваннях. Натисніть на небесні об’єкти, щоб переглянути деталі, такі як магнітуда, час сходу/заходу або траєкторії.

Зоряну карту також можна узгоджувати з орієнтацією пристрою, коли увімкнено компасний режим. У цьому режимі небо обертається відповідно до акселерометра та датчиків компаса пристрою, дозволяючи досліджувати небо, фізично рухаючи телефоном.


## Context Menu {#context-menu}

![Context Menu](@site/static/img/plugins/starwatcher/context_menu_view.png)

**Контекстне меню** надає детальну інформацію про небесні об’єкти та інструменти для їхнього спостереження. Воно відкривається, коли ви торкаєтеся небесного об’єкта на Зоряній карті.

Коли об’єкт вибрано, він виділяється на Зоряній карті червоним круговим маркером. Його добовий рух також візуалізується годинним кільцем (00–23), що показує, де об’єкт з’явиться на небі в кожну годину місцевого дня та напрямок його руху.

Контекстне меню з’являється в нижній частині екрана та містить інформацію про об’єкт, швидкі дії та вкладки для дослідження видимості об’єкта та розкладу спостережень.

### Object Information {#object-information}

![Object Information](@site/static/img/plugins/starwatcher/object_view_new.png) ![Object Information](@site/static/img/plugins/starwatcher/object_view_2.png)

Верхня секція Контекстного меню відображає назву об’єкта та його класифікацію. Під назвою показується тип об’єкта та його батьківське сузір’я або група. Наприклад:  
- **Beta Ursae Minoris** — Зірка • Мала Ведмедиця
- **<Translate android="true" ids="astro_name_moon"/>** — Супутник • Земля
- **<Translate android="true" ids="astro_name_jupiter"/>** — Планета • Сонячна система

Блоки швидкої інформації відображають ключові параметри спостереження:  
- <Translate android="true" ids="astro_rise"/> – час, коли об’єкт сходить над горизонтом.
- <Translate android="true" ids="astro_set"/> – час, коли об’єкт заходить під горизонт.
- <Translate android="true" ids="shared_string_azimuth"/> – напрямок об’єкта відносно півночі (0°–360°).
- <Translate android="true" ids="altitude"/> – висота об’єкта над горизонтом.
- <Translate android="true" ids="shared_string_magnitude"/> – яскравість об’єкта, як видно з Землі. 

Ці значення динамічно оновлюються на основі вибраного часу та розташування користувача.

Під блоками швидкої інформації меню може також містити додаткову інформацію та ресурси про об’єкт:  
- <Translate android="true" ids="astro_offline_knowledge_base_title"/> – Дозволяє завантажити розширену базу даних із статтями Вікіпедії та каталогами глибокого неба для офлайн-використання. Після завантаження детальну інформацію про небесні об’єкти можна переглядати безпосередньо в додатку без підключення до інтернету.
- <Translate android="true" ids="read_on_wiki"/> – Відкриває статтю об’єкта у Вікіпедії в браузері.
- <Translate android="true" ids="astro_designations"/> – Показує альтернативні назви та ідентифікатори каталогів для об’єкта (наприклад, HD, HIP, NGC). Цей розділ доступний для об’єктів, які мають записи в каталогах, таких як зірки та об’єкти глибокого неба. Якщо об’єкт не має загальної назви, одне з цих позначень використовується як основна назва.
- <Translate android="true" ids="online_photos"/> – Відображає доступні фото, пов’язані з вибраним небесним об’єктом.

### Actions {#actions}

Під інформацією про об’єкт Контекстне меню надає кілька дій для взаємодії з вибраним небесним об’єктом:
- **<Translate android="true" ids="shared_string_save"/>** – Додає об’єкт до вашого списку Улюблених для швидкого доступу.
- **<Translate android="true" ids="astro_locate"/>** – Центрує вибраний об’єкт на Зоряній карті.
- **<Translate android="true" ids="astro_direction"/>** – Показує напрямок до об’єкта на карті, допомагаючи орієнтуватися під час спостереження неба.
- **<Translate android="true" ids="astro_path"/>** – Відображає добову траєкторію об’єкта по небу, дозволяючи побачити, як він рухається протягом дня.

### Visibility Graph {#visibility-graph}

![Visibility Graph](@site/static/img/plugins/starwatcher/visibility_new.png)

Вкладка **Видимість** показує, як вибраний об’єкт рухається по небу протягом 24-годинного періоду.

Графік відображає висоту об’єкта над горизонтом з часом.

- Горизонтальна вісь представляє час від 12:00 до 12:00 наступного дня.
- Вертикальна вісь представляє висоту від −30° до +90°.

Кольорова крива показує висоту об’єкта протягом дня.

Фон графіка представляє стан неба та змінюється залежно від позиції Сонця. Це допомагає визначити, коли можливі спостереження.

Кольори представляють різні умови неба:  
- світло-блакитний — денний час
- темніший блакитний — сутінки
- темно-синій / чорний — ніч

Колір траєкторії об’єкта також відображає його висоту:  
- жовтий – високо на небі (найкраща видимість)
- помаранчевий – середня висота
- червоний – близько до горизонту
- фіолетовий – нижче горизонту (невидимий)

Рухливий індикатор дозволяє досліджувати позицію об’єкта в різні часи. Коли індикатор рухається, оновлюються значення поточного часу, висоти та азимута. Значення азимута також включає відповідний напрямок компаса (наприклад, 354° Аз (Пн)).

Під графіком відображаються важливі події спостереження: 
- **<Translate android="true" ids="astro_rise"/>** – коли об’єкт сходить над горизонтом.
- **<Translate android="true" ids="astro_culmination"/>** – коли об’єкт досягає своєї найвищої висоти.
- **<Translate android="true" ids="astro_set"/>** – коли об’єкт заходить під горизонт. Якщо об’єкт ніколи не сходить або не заходить, відповідні значення приховуються.

Графік відкривається з індикатором, позиціонованим на поточний системний час. Розташування, використане для обчислень, показано під графіком у вигляді назви міста.

### Observation Schedule {#observation-schedule}

![Observation Schedule](@site/static/img/plugins/starwatcher/schedule_new.png)

Вкладка **Розклад** відображає видимість вибраного об’єкта на поточний тиждень. Кожен рядок представляє один день і включає:  
- день тижня
- дату
- час сходу
- час заходу. Якщо час заходу відбувається наступного дня, він позначається знаком ⁺¹
- маленький графік видимості на той день

Міні-графік показує, коли об’єкт видимий протягом дня та як змінюється його висота. Кольорова секція смуги представляє період, коли об’єкт над горизонтом. Міні-графік представляє діапазон часу від 00:00 до 23:59 для вибраного дня.

Ви можете перемикатися між тижнями за допомогою стрілкових кнопок у заголовку Розкладу. Кнопка календаря дозволяє повернутися до поточного тижня.

<!--
## Celestial Object Info {#celestial-object-info}

![Object info popup](@site/static/img/plugins/starwatcher/object-info_new.png)

Tap any **star, planet, constellation, or Sun/Moon** on the **Star map screen** or **map overlay** to view detailed information. Selected object  is highlighted on the Star map by a red circle marker, and its daily motion is visualized by an hour ring (00–23) showing where the object will be at each hour local time and the direction of movement.

**Displayed data:**
- **Azimuth**: Direction from North (0°-360°) where the object appears in the sky
- **Altitude**: Height above horizon (0° at horizon, 90° at zenith)
- **Magnitude**: Brightness scale (-26 for Sun to +6 for faint stars; lower = brighter)
- **Rise/Set times**: When the object rises above/sets below horizon
- **Distance** (planets): Average distance from Earth in AU/km

**Wikipedia integration**: Tap **"Wikipedia"** in the info popup to open the object's page in your browser (e.g. Sirius, Orion, Venus). Works offline for cached data, online for full articles.

**Long-press** celestial objects to **pin** them as map markers with live position updates, or **share** coordinates for group stargazing.

This feature helps identify objects in real sky, plan observations, and learn astronomy facts directly from OsmAnd.
-->

## AR Star Finding (Camera Mode) {#ar-star-finding}

**Go to:** *Enabled plugin → <Translate android="true" ids="shared_string_menu,star_map"/> → Camera button* 

Шар **Астрономії** працює з **камерою пристрою**, щоб увімкнути **доповнену реальність (AR) для спостереження зірок**. Спрямуйте камеру телефону на реальне нічне небо та побачте зірки, планети, сузір’я, накладені на Сонце/Місяць у реальному часі.

**How AR Star Finding works:**
- **Живий вид камери** показує реальне небо з прозорими астрономічними накладками, узгодженими з горизонтом/компасом.
- **Рухайте камеру**, щоб сканувати небо — об’єкти виділяються, коли з’являються у вашому полі зору.
- **Натисніть на виділені об’єкти**, щоб побачити азимут, висоту, магнітуду, час сходу/заходу та посилання на Вікіпедію.
- **Калібрування компаса** необхідне для точного вирівнювання (помахайте телефоном у формі вісімки, якщо потрібно).

Режим AR використовує датчики пристрою (гіроскоп, акселерометр і компас), щоб узгоджувати небесні об’єкти з реальним небом.

**Perfect for:**
- Identifying faint stars/planets invisible to naked eye.
- Locating constellations by moving phone across sky.
- Real-time sky navigation during hikes or camping.


## Configure View {#configure-view}

![Configure View](@site/static/img/plugins/starwatcher/half_state_new.png) ![Configure View](@site/static/img/plugins/starwatcher/full_state.png)

**<Translate android="true" ids="astro_configure_view"/>** дозволяє контролювати, як відображається Зоряна карта, увімкненням або вимкненням візуальних режимів, об’єктів та засобів рендерингу.

Щоб відкрити Налаштувати вигляд, натисніть кнопку Налаштувати вигляд у правому нижньому куті екрана Зоряної карти. Кнопка представлена іконкою стилю шару (накладені форми), що вказує на налаштування відображення та шарів. Налаштувати вигляд відкривається в *Стан половинному*, показуючи основні опції відображення. Проведіть панеллю вгору, щоб розширити її до *Повного стану* та отримати доступ до всіх доступних налаштувань. Щоб закрити Налаштувати вигляд, проведіть панеллю вниз один раз, щоб повернутися до Стану половинному, проведіть вниз ще раз, щоб повністю закрити її, або натисніть у будь-якому місці карти поза панеллю. Також ви можете натиснути кнопку Закрити (X) у правому верхньому куті панелі.

### Modes and Actions {#modes-and-actions}

![Configure View](@site/static/img/plugins/starwatcher/view_with_map_new.png) ![Configure View](@site/static/img/plugins/starwatcher/red_filter_new.png)

Цей розділ контролює основні режими відображення Зоряної карти.

- **<Translate android="true" ids="map_2d"/> / <Translate android="true" ids="map_3d"/>**. Перемикає між видом небесної траєкторії (2D), який показує небо як спроектований купол з траєкторіями об’єктів, та видом неба в стилі глобуса (3D), що представляє небесну сферу.
- **<Translate android="true" ids="shared_string_map"/>**. Увімкнює додатковий вид карти Землі, відображений під Зоряною картою, що допомагає пов’язати небесні об’єкти з вашим географічним розташуванням.
- **<Translate android="true" ids="red_filter"/>**. Застосовує червоний кольоровий фільтр до всього екрана, щоб зменшити світлове забруднення та зберегти нічний зір під час спостережень у темному небі.

### Visible Objects {#visible-objects}

![Configure View](@site/static/img/plugins/starwatcher/solar_system.png) ![Configure View](@site/static/img/plugins/starwatcher/constellations.png)

Цей розділ дозволяє вибрати, які типи небесних об’єктів відображаються на Зоряній карті.

| Object | Description |
|-------|-------------|
| <Translate android="true" ids="astro_solar_system"/> | Відображає Сонце, Місяць і видимі планети. |
| <Translate android="true" ids="astro_constellations"/> | Показує лінії сузір’їв та візерунки, утворені зірками. |
| <Translate android="true" ids="astro_stars"/> | Відображає окремі зірки, видимі на Зоряній карті. |
| <Translate android="true" ids="astro_nebulas"/> | Показує об’єкти туманностей, де доступні. |
| <Translate android="true" ids="astro_star_clusters"/> | Відображає зоряні скупчення як окремі небесні об’єкти. |
| <Translate android="true" ids="astro_deep_sky"/> | Увімкнює/вимикає об’єкти глибокого неба, такі як галактики, скупчення галактик і чорні діри. |

### Personal Display Options {#personal-display-options}

**Особисті опції відображення** контролюють додаткові візуальні засоби, пов’язані з фокусом користувача та спостереженнями.

| Option | Description |
|-------|-------------|
| <Translate android="true" ids="astro_direction"/> | Показує індикатор напрямку, щоб допомогти орієнтуватися у вашому вигляді. |
| <Translate android="true" ids="astro_daily_path"/> | Відображає добовий шлях вибраних небесних об’єктів по небу. |
| <Translate android="true" ids="shared_string_favorites"/> | Виділяє або відображає об’єкти, позначені як улюблені. |

### Rendering Aids {#rendering-aids}

**Засоби рендерингу** додають референсні лінії та сітки, щоб допомогти орієнтуватися на Зоряній карті.

| Aid | Description |
|-------|-------------|
| <Translate android="true" ids="azimuthal_grid"/> | Додає сітку на основі азимута для горизонтальної орієнтації неба. |
| <Translate android="true" ids="meridian_line"/> | Відображає меридіанну лінію, що перетинає небо з півночі на південь. |
| <Translate android="true" ids="equatorial_grid"/> | Показує небесну екваторіальну координатну сітку. |
| <Translate android="true" ids="ecliptic_line"/> | Відображає екліптичну лінію, що представляє видиму траєкторію Сонця. |
| <Translate android="true" ids="equator_line"/> | Відображає проекцію екватора Землі на небесну сферу, допомагаючи візуалізувати обертання Землі відносно неба. |
| <Translate android="true" ids="galactic_line"/> | Показує площину галактики Чумацький Шлях по небу, вказуючи основний напрямок галактичного диска. |

<!-- 
## Astronomy Settings

*Main Menu → Plugins → Star map → ⚙️ button*

Choose visible layers and objects

### Star Layers

All astronomical data appears as map overlays, visible at zoom scales 5-15. Layers project the celestial sphere onto the flat map.

| Layer | Description |
|-------|-------------|
| Stars | Bright stars (up to magnitude 4-6) with labels and constellation lines |
| Constellations | Connects stars into familiar patterns like Orion or Big Dipper |
| Planets | Positions and daily paths for Mercury-Venus-Mars-Jupiter-Saturn (colored icons) |
| Sun & Moon | Arcs showing rise/set times and illumination phase |
| Horizon | Line separating visible sky from ground, with cardinal directions |

-->

## Search {#search}

![Search](@site/static/img/plugins/starwatcher/explore_screen.png)

Функція **Пошуку** у плагіні Астрономія дозволяє знаходити небесні об’єкти, досліджувати категорії неба та отримувати дані спостережень. Щоб відкрити Пошук, натисніть кнопку Пошуку на Зоряній карті. Це відкриває екран Пошуку, який надає кілька секцій для відкриття та організації небесних об’єктів. Екран Пошуку включає такі секції:

**1. Watch now**

Секція Watch now виділяє небесні об’єкти, які видимі саме зараз або цієї ночі. Ця секція діє як інструмент рекомендацій, показуючи об’єкти, які найкраще підходять для спостереження на основі вашого поточного розташування та часу.

**2. Categories**

Секція Categories дозволяє переглядати об’єкти за типом: Сонячна система, Сузір’я, Зірки, Туманності, Зоряні скупчення та Глибоке небо. Кожна категорія відкриває список об’єктів з ключовою інформацією: назва об’єкта, тип або сузір’я, магнітуда (яскравість) та час сходу чи заходу (якщо застосовується).

### Sorting and Filters {#sorting-and-filters}

![Sorting](@site/static/img/plugins/starwatcher/sorting.png) ![Filters](@site/static/img/plugins/starwatcher/filters.png)

Натисніть на рядок пошуку, щоб відкрити повний інтерфейс пошуку. Ви можете уточнювати результати за допомогою опцій сортування та фільтрації.

Ви можете сортувати об’єкти за:  
- Назвою (A–Z або Z–A)
- <Translate android="true" ids="astro_sort_brightest_first"/>
- <Translate android="true" ids="astro_sort_faintest_first"/>
- <Translate android="true" ids="astro_sort_rises_soonest"/>
- <Translate android="true" ids="astro_sort_sets_soonest"/>

Фільтри допомагають звузити видимі об’єкти.

**Visibility**  
- <Translate android="true" ids="astro_filter_show_all"/> — відображає всі об’єкти
- <Translate android="true" ids="astro_filter_visible_now"/> — об’єкти, які зараз над горизонтом
- <Translate android="true" ids="astro_filter_visible_tonight"/> — об’єкти, видимі між заходом і сходом сонця

**Additional filters**  
- <Translate android="true" ids="astro_filter_naked_eye"/> — показує лише об’єкти з магнітудою ≤ 6

**Categories**  
Ви можете фільтрувати результати за типом об’єкта. Вибір конкретних категорій автоматично вимикає опцію All.

### My Data {#my-data}

![My Data](@site/static/img/plugins/starwatcher/my_data_new.png)

Секція My Data містить об’єкти, з якими взаємодіяв користувач. Ця секція включає три списки:

- <Translate android="true" ids="shared_string_favorites"/> — об’єкти, збережені з контекстного меню.
- <Translate android="true" ids="astro_daily_path"/> — об’єкти, для яких увімкнено шлях добового руху.
- <Translate android="true" ids="astro_directions"/> — об’єкти з активним індикатором напрямку на Зоряній карті.

Вибір елемента відкриває контекстне меню об’єкта.

### Catalogs {#catalogs}

![Catalogs](@site/static/img/plugins/starwatcher/catalogs_new.png)

Секція Catalogs надає доступ до астрономічних каталогів, доступних у плагіні Астрономія.

Каталоги містять великі колекції небесних об’єктів, таких як зірки, галактики, туманності та зоряні скупчення. Відкриття каталогу відображає список об’єктів, включених до цього каталогу.

## Related Articles {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти](../../user/map/vector-maps.md)