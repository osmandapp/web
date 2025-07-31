---
source-hash: e01063d9fc36bf4b74ae42e7ffe9e8041b28514fb02d5f5070fe0dae8604ff4b
sidebar_position: 2
title: Взаємодія з картою
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

У цій статті пояснюється, як налаштувати карту та взаємодіяти з нею за допомогою різних кнопок і жестів. Вона охоплює, як обертати, масштабувати, налаштовувати кут огляду та змінювати кут огляду карти, обертати її вручну або автоматично за допомогою компаса, або відповідно до азимута.


## Жести {#gestures}

Жести необхідні для легкої та інтуїтивно зрозумілої навігації по карті.

| Дія на карті | Жест |
|:------------|:-------------|
| **Переміщення** | Торкніться та утримуйте карту **одним** пальцем, потім перетягніть, щоб переміститися. |
| **Ковзання** | Проведіть по карті **одним** пальцем. |
| **Збільшити** | Двічі торкніться карти **одним** пальцем. <br/> Двічі торкніться **одним** пальцем і проведіть вниз. <br/> Зведіть **два** пальці, щоб збільшити. |
| **Зменшити** | Двічі торкніться **двома** пальцями. <br/> Двічі торкніться **одним** пальцем і проведіть вгору. <br/> Розведіть **два** пальці, щоб зменшити. |
| **Обертання** | Торкніться карти **двома** пальцями, потім обертайте пальці круговими рухами. |
| **Нахил (3D)** | Торкніться **двома** пальцями та перемістіть їх вгору або вниз. <br/> Доступно лише з [Механізмом візуалізації карти](../personal/global-settings.md#map-rendering-engine) версії 2 (OpenGL). |

Анімацію ковзання можна вимкнути в налаштуваннях за допомогою [спеціальної опції](#no-animations).


## Моє місцезнаходження та масштабування {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Моє місцезнаходження**.
Кнопка *Моє місцезнаходження* — це кругла іконка, яка вказує, чи синхронізовано центр карти з поточним географічним положенням вашого пристрою. Часто її називають кнопкою "Де я?", вона допомагає швидко знайти ваше місцезнаходження на карті. Під час навігації карта зазвичай залишається синхронізованою з місцезнаходженням пристрою, тому кнопка залишається прихованою. Однак вона стає видимою, якщо карта та ваше місцезнаходження розсинхронізуються через взаємодію користувача. Натискання кнопки повторно центрує карту на вашому поточному місцезнаходженні, а подвійне натискання переключить вигляд на 3D-режим.

- Кнопка *Моє місцезнаходження* має такі стани:
  - *Повністю синя іконка*. Місцезнаходження знайдено, але не синхронізовано з картою.
  - *Біла іконка*. Місцезнаходження знайдено та синхронізовано з картою.
  - *Сіра іконка*. Місцезнаходження ще не знайдено.
  - *Іконка зі стрілкою*. Активовано 3D-режим.

- **Довге натискання** (*Android*) кнопки *Моє місцезнаходження* відкриває [контекстне меню карти](../map/map-context-menu.md), що дозволяє вам поділитися своїм місцезнаходженням.

<br/>

**Кнопки масштабування**.
*Кнопки масштабування* завжди видимі поруч із *Моїм місцезнаходженням* і дозволяють керувати рівнем масштабування карти.

- Зміна рівня масштабування не впливає на синхронізацію карти з вашим місцезнаходженням.
- **Довге натискання** *Кнопок масштабування* відкриває діалогове вікно *Лупа карти*, що дозволяє налаштувати рівні деталізації карти.
- Майте на увазі, що під час навігації масштабування може автоматично контролюватися налаштуванням **Автоматичне масштабування**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*

### Вигляд Мого місцезнаходження {#my-location-appearance}

Ви можете налаштувати іконки кнопки **Моє місцезнаходження** за допомогою налаштувань вигляду профілю. Докладніше про те, як це зробити, читайте [тут](../personal/profiles.md#profile-appearance).


## Лупа карти {#map-magnifier}

*Лупа карти* — це інструмент, який покращує видимість карти, подібно до збільшувального скла, що використовується з паперовими картами. Він дозволяє збільшувати карту, щоб чіткіше бачити текст і деталі, або налаштовувати рівень деталізації, зберігаючи той самий масштаб. Для отримання додаткової інформації перейдіть до статті [Векторні карти](../map/vector-maps.md#map-magnifier).


## Режими орієнтації карти {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)

</TabItem>

</Tabs>

*Режими орієнтації карти* дозволяють вибрати, як карта відображається на екрані пристрою. OsmAnd пропонує такі режими, як **Обертання вручну**, **Напрямок руху**, **Напрямок компаса** та **Північ вгорі**. Увімкнення кожного режиму змінює спосіб орієнтації карти відповідно до вибраної опції. Для отримання повної інформації дивіться статтю [Кнопки карти](../widgets/map-buttons.md#compass).


## Компас {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Кнопка компаса показує, як [орієнтована карта](#map-orientation-modes). *Червона стрілка* на іконках або напрямок стрілки в режимі *Напрямок руху* вказує на Північ. [Іконка на кнопці компаса](../widgets/map-buttons.md#compass) вказує поточний режим орієнтації карти. Віджет кнопки компаса пропонує три [варіанти взаємодії](../widgets/map-buttons.md#compass-tapping-behavior): *Одне натискання* обертає карту на Північ, *Подвійне натискання* перемикає між усіма режимами орієнтації карти, а *Довге натискання* відкриває список режимів.


## Обертання карти за азимутом {#rotate-map-by-bearing}

У режимі **обертання карти за азимутом** ([Напрямок руху](../widgets/map-buttons.md#compass)) карта автоматично вирівнюється з вашим напрямком руху, тому область перед вами відображається у верхній частині екрана. Цей режим покращує навігацію, злегка зміщуючи центр карти вниз, показуючи більшу частину маршруту попереду. Якщо ви нерухомі, карта залишається нерухомою.

Ви можете активувати цю функцію через *Меню → Налаштування → Профілі → Загальні налаштування → Вигляд → Орієнтація карти* або подвійним натисканням [Кнопки компаса](../widgets/map-buttons.md#compass-tapping-behavior). Докладніше про азимут дивіться [тут](../widgets/nav-widgets.md#bearing-widget).


## Нахил карти та горизонт {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png) ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)
</TabItem>

</Tabs>

Завдяки новому [механізму візуалізації карти](../personal/global-settings.md#map-rendering-engine) ви можете змінювати [нахил камери](../plugins/development.md#camera-tilt) від 90 (без нахилу) до 10 градусів. Приблизно при нахилі карти менше 20-22 градусів (цей параметр залежить від рівня масштабування) стає видимою уявна лінія горизонту. На відміну від реального, програмний горизонт завжди прямий.

Під горизонтом можна побачити так звану *димку* або *туман*. Ця область карти заповнена сірим кольором, можна спостерігати лише кілька деталей карти.
Використання туману необхідне, оскільки відображення віддалених об'єктів на карті вимагає значних обчислювальних ресурсів і не завжди виправдане через [спотворення](../plugins/development.md#comparison-with-a-satellite-imagery) карти при малих кутах огляду. Тому видима відстань на карті OsmAnd наразі обмежена 35 тайлами.

:::info
Нахил карти можна змінити довгим натисканням на екран двома пальцями та переміщенням їх вгору/вниз. Ви також можете змінити нахил, натиснувши на іконку [Моє місцезнаходження](#my-location-and-zoom) у нижньому правому куті екрана (доступні лише положення 45 і 90 градусів).
Ви не можете змінити нахил камери, коли увімкнено старий [механізм візуалізації карти](../personal/global-settings.md#map-rendering-engine) (версія 1).
:::


## Блокування сенсорного екрана {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Використовуйте функцію **Блокування сенсорного екрана**, щоб уникнути випадкових натискань під час навігації. Це особливо корисно для таких видів діяльності, як їзда на велосипеді або піші прогулянки, де ненавмисні дотики можуть порушити ваш маршрут.

**Розблокування**.
Натисніть екранну кнопку, або, якщо блокування активовано, за допомогою зовнішньої кнопки (наприклад, зменшення гучності), натисніть зовнішню кнопку та натисніть екранну кнопку.

**Налаштування**.

- Перейдіть до *Меню → Налаштувати екран → Користувацькі кнопки*.
- Виберіть *+ → Додати дію → Інтерфейс → Блокування сенсорного екрана*.

Чіткі екранні повідомлення направлятимуть вас під час блокування або розблокування екрана.


## Налаштування {#settings}

### Додаткові налаштування компаса {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Згладжує обертання карти з повільнішою анімацією обертання, хоча це вносить невелику затримку, не більше 1 секунди.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Згладжує обертання карти з повільнішою анімацією обертання, хоча це вносить невелику затримку, не більше 1 секунди.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Без анімації {#no-animations}

<InfoAndroidOnly/>

Ви можете вимкнути всі анімації карти під час взаємодії з картою, включаючи жести та кнопки.
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Анімувати власну позицію {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*

Створює плавний ефект панорамування карти відносно іконки *[Моя позиція](../personal/profiles/#profile-appearance)* під час руху. Ефект вносить невелику затримку відносно фактичного положення приблизно в 1 секунду. Повідомлялося, що увімкнення цієї функції може спричинити помітні проблеми із затримкою за певних обставин, вимкніть її, якщо такі проблеми виникнуть.


## Зовнішні пристрої введення {#external-input-devices}

Кнопки зовнішніх пристроїв введення забезпечують зручний та ефективний спосіб взаємодії з картою та інтерфейсом програми OsmAnd. Вони розташовані на зовнішніх пристроях, таких як **Bluetooth або інші типи клавіатур**, **спеціалізовані кнопки на навігаційних пристроях транспортних засобів**, або контролери [WunderLINQ](https://blackboxembedded.com/) та [Parrot](https://www.parrot.com/en).

Однією з основних функцій кнопок на зовнішніх пристроях введення є збільшення та зменшення масштабу карти. Вони також дозволяють переміщатися по карті та змінювати її орієнтацію без необхідності торкатися та жестикулювати на екрані. Кнопки на зовнішніх пристроях введення підтримують багато інших функцій, таких як відкриття *Головного меню*.

:::note
Клавіатура залишається функціональною, навіть якщо опція *Зовнішні пристрої введення* вимкнена, а вибрано *Жоден*.
:::

### Попередньо налаштований пристрій введення {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>

Щоб отримати доступ до налаштувань зовнішнього пристрою введення, потрібно увімкнути цю функцію.

- Перейдіть до головного *Меню → Налаштування →* виберіть *Профіль → Загальні налаштування → Інше → Зовнішні пристрої введення*, і переключіть на *Увімкнено*.

- Виберіть пристрій із підтримуваних OsmAnd, торкнувшись пункту *Тип* у списку:
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*лише Android*), або створіть [**власний тип**](#custom-input-device-type) (*лише Android*).

- Для кожного типу зовнішнього пристрою введення існує різне **визначене призначення пакету дія-клавіша**. Торкніться *<Translate android="true" ids="key_assignments"/>*, щоб переглянути список дій та клавіш. Таблиця клавіш наведена нижче.

- Ви можете дізнатися більше про дії зовнішніх пристроїв введення на GitHub у пакеті [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Клавіша | Пристрій | Дія |
|:---------|:---------------|:---------------|
|**C**| *Клавіатура* | Перемістити - [До Мого місцезнаходження](#my-location-and-zoom) |
|**D**| *Клавіатура* | Змінити - [Орієнтація карти](#map-orientation-modes) |
|**N**| *Клавіатура* | Показати / Приховати - Вигляд навігації |
|**S**| *Клавіатура* | Показати / Приховати - [Вигляд пошуку](../search/index.md) |
|**P**| *Клавіатура* | Змінити - Профіль програми на наступний |
|**O**| *Клавіатура* | Змінити - Профіль програми на попередній |
|**&#8593;**| *Клавіатура* | Перемістити - Карта вгору |
|**&#8595;**| *Клавіатура* | Перемістити - Карта вниз |
|**&#8592;**| *Клавіатура* | Перемістити - Карта вліво |
|**&#8594;**| *Клавіатура* | Перемістити - Карта вправо |
|**&#43;** **=**| *Клавіатура* | Карта - [Збільшити](#my-location-and-zoom) |
|**&#8722;**| *Клавіатура* | Карта - [Зменшити](#my-location-and-zoom) |
|**Натиснути назад**| *Клавіатура* | Навігація – Попередній екран |
|**&#8595;**| *Wunderlinq* | Карта - [Зменшити](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq* | Карта - [Збільшити](#my-location-and-zoom) |
| **ESC** | *Wunderlinq* | Відкрити WunderLINQ Datagrid |
| **M** <br/> (*старий Android*) | *Клавіатура* | Показати / Приховати - [Бічне меню](../start-with/main-menu.md#main-menu-side-menu) |
| **Натискання джойстика** <br/> (*старий Android*) | *Клавіатура* | Перемістити - [До Мого місцезнаходження](#my-location-and-zoom) |
| **Кнопка медіа** <br/> (*лише Android*)| *Клавіатура* | Показати / Приховати - [Аудіо/відео нотатки](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*лише Android*)| *Parrot* | Карта - [Зменшити](#my-location-and-zoom) |
| **&#8594;** <br/> (*лише Android*) | *Parrot* | Карта - [Збільшити](#my-location-and-zoom) |


### Користувацький тип пристрою введення {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png) ![External devices](@site/static/img/map/external_mypilot2_android.png)

Якщо ви хочете призначити клавіші для зовнішнього пристрою введення (такого як клавіатура, джойстик або контролер), вам потрібно створити тип пристрою: перейдіть до налаштування [Зовнішні пристрої введення](#external-input-devices), виберіть **Тип** зі списку, торкніться &nbsp;"**＋**"&nbsp; і введіть назву. Кожен тип має меню з такими опціями: ***Перейменувати, Дублювати*** та ***Видалити***.

### Додати дію та призначення клавіш {#add-action--key-asssigments}

![External devices](@site/static/img/map/external_custom_4_andr.png) ![External devices](@site/static/img/map/external_custom_3_andr.png)

Після створення користувацького типу введення ви можете призначити необхідні дії клавішам. Доступний широкий спектр [типів дій](../widgets/quick-action.md#action-types) з віджета швидких дій.

- Виберіть тип пристрою, потім торкніться пункту **Призначення клавіш**.
- Торкніться кнопки ***Додати*** (&nbsp;"**＋**"&nbsp;) у нижньому правому куті екрана.
- Виберіть необхідну дію, потім торкніться поля ***Додати клавішу*** та натисніть кнопку на вашому пристрої, щоб призначити її дії.

:::note

- Якщо кнопка, яку ви призначаєте, вже використовується для іншої дії, ви отримаєте сповіщення з опцією перепризначити кнопку або скасувати призначення.
- Пізніше ви можете змінити дії та призначення клавіш або додати інші для вже створених дій, просто виберіть елемент у списку Призначення клавіш.

:::

### Видалити призначення клавіш {#delete-key-assignment}

![External devices](@site/static/img/map/external_custom_1_andr.png)

Ви можете видалити кілька непотрібних дій за допомогою кнопки **Редагувати** (*у формі олівця*) у верхньому правому куті екрана одразу:

- ***Видалити одну дію*** за дією, за допомогою кнопки &nbsp;"**−**"&nbsp; у полі елемента.
- ***Видалити всі призначення клавіш*** для вибраного типу, натиснувши кнопку у верхньому правому куті екрана поруч із *Редагувати назву*.


## Пов'язані статті {#related-articles}

- [Контекстне меню карти](./map-context-menu.md)
- [Налаштування карти](./configure-map-menu.md)
- [Векторні карти (Стилі карти)](./vector-maps.md)
- [Растрові карти (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на карті](./point-layers-on-map.md)
- [Треки та маршрути](./tracks/index.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)


> *Останнє оновлення: грудень 2024*