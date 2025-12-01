---
source-hash: 210874cd215f873716ff02e4a6ce9879fc7e3299b5e0bb94a5f569c0274b575a
sidebar_position: 2
title:  Взаємодія з мапою
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

У цій статті пояснюється, як налаштовувати мапу та взаємодіяти з нею за допомогою різних кнопок і жестів. Вона охоплює обертання, масштабування, регулювання кута огляду, а також зміну кута огляду мапи, її обертання вручну або автоматично за допомогою компаса чи за азимутом.


## Жести {#gestures}

Жести необхідні для легкої та інтуїтивно зрозумілої навігації по мапі.

| Дія на мапі | Жест |
|:------------|:-------------|
| **Переміщення** | Торкніться та утримуйте мапу **одним** пальцем, а потім перетягніть для переміщення. |
| **Проведення** | Проведіть по мапі **одним** пальцем. |
| **Збільшення** | Двічі торкніться мапи **одним** пальцем. <br/> Двічі торкніться **одним** пальцем і проведіть вниз. <br/> Розведіть **два** пальці, щоб збільшити масштаб. |
| **Зменшення**| Двічі торкніться **двома** пальцями. <br/> Двічі торкніться **одним** пальцем і проведіть вгору. <br/> Зведіть **два** пальці, щоб зменшити масштаб. |
| **Обертання** | Торкніться мапи **двома** пальцями, а потім обертайте їх по колу. |
| **Нахил (3D)** | Торкніться **двома** пальцями та рухайте ними вгору або вниз. <br/> Доступно лише з [Рушієм візуалізації мапи](../personal/global-settings.md#map-rendering-engine) версії 2 (OpenGL). |

Анімацію ковзання можна вимкнути в налаштуваннях за допомогою [спеціальної опції](#remove-animations).


## Моє місцезнаходження та Масштаб {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**Моє місцезнаходження**.  
Кнопка *Моє місцезнаходження* — це кругла іконка, яка вказує, чи синхронізований центр мапи з поточним географічним розташуванням вашого пристрою. Часто її називають кнопкою "Де я?", вона допомагає швидко знайти своє місцезнаходження на мапі. Під час навігації мапа зазвичай залишається синхронізованою з місцезнаходженням пристрою, тому кнопка залишається прихованою. Однак вона стає видимою, якщо мапа та ваше місцезнаходження розсинхронізуються через взаємодію з користувачем. Натискання кнопки перецентрує мапу на вашому поточному місцезнаходженні, а подвійне натискання перемкне вигляд у 3D-режим.

- Кнопка *Моє місцезнаходження* має такі стани:
  - *Повністю синя іконка*. Місцезнаходження знайдено, але не синхронізовано з мапою.
  - *Біла іконка*. Місцезнаходження знайдено та синхронізовано з мапою.
  - *Сіра іконка*. Місцезнаходження ще не знайдено.
  - *Іконка зі стрілкою*. Активовано 3D-режим.

- **Довге натискання** (*Android*) на кнопку *Моє місцезнаходження* відкриває [контекстне меню мапи](../map/map-context-menu.md), що дозволяє поділитися своїм місцезнаходженням.

<br/>

**Кнопки масштабування**.  
*Кнопки масштабування* завжди видимі поруч із кнопкою *Моє місцезнаходження* і дозволяють керувати рівнем масштабування мапи.

- Зміна рівня масштабування не впливає на синхронізацію мапи з вашим місцезнаходженням.
- **Довге натискання** на *Кнопки масштабування* відкриває діалогове вікно *Лупа мапи*, що дозволяє налаштувати рівні деталізації мапи.
- Майте на увазі, що під час навігації масштабом можна керувати автоматично за допомогою налаштування **Автомасштаб**:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### Вигляд "Моє місцезнаходження" {#my-location-appearance}

Ви можете налаштувати іконки кнопки **Моє місцезнаходження** за допомогою налаштувань вигляду профілю. Детальніше про те, як це зробити, читайте [тут](../personal/profiles.md#profile-appearance).


## Лупа мапи {#map-magnifier}

*Лупа мапи* — це інструмент, який покращує видимість мапи, подібно до збільшувального скла, що використовується з паперовими мапами. Вона дозволяє збільшувати мапу для чіткішого перегляду тексту та деталей або регулювати рівень деталізації, зберігаючи той самий масштаб. Для отримання додаткової інформації перейдіть до статті [Векторні мапи](../map/vector-maps.md#map-magnifier).


## Режими орієнтації мапи {#map-orientation-modes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Режими орієнтації мапи* дозволяють вибрати, як мапа відображатиметься на екрані пристрою. OsmAnd пропонує такі режими, як **Обертання вручну**, **Напрямок руху**, **Напрямок за компасом** та **Північ вгорі**. Увімкнення кожного режиму змінює спосіб орієнтації мапи відповідно до обраної опції. Для отримання повної інформації дивіться статтю [Кнопки мапи](../widgets/map-buttons.md#compass).


## Компас {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

Кнопка компаса показує, як [орієнтована мапа](#map-orientation-modes). *Червона стрілка* на іконках або напрямок стрілки в режимі *Напрямок руху* вказує на Північ. [Іконка на кнопці компаса](../widgets/map-buttons.md#compass) вказує на поточний режим орієнтації мапи. Віджет кнопки компаса пропонує три [варіанти взаємодії](../widgets/map-buttons.md#compass-tapping-behavior): *Один дотик* повертає мапу на Північ, *Подвійний дотик* перемикає між усіма режимами орієнтації мапи, а *Довгий дотик* відкриває список режимів.


## Обертання мапи за азимутом {#rotate-map-by-bearing}

У режимі **обертання мапи за азимутом** ([Напрямок руху](../widgets/map-buttons.md#compass)) мапа автоматично вирівнюється за напрямком вашого руху, тому область попереду вас відображається у верхній частині екрана. Цей режим покращує навігацію, трохи зміщуючи центр мапи вниз, показуючи більше маршруту попереду. Якщо ви стоїте на місці, мапа залишається нерухомою.  

Ви можете активувати цю функцію через *Меню → Налаштування → Профілі → Загальні налаштування → Вигляд → Орієнтація мапи* або подвійним натисканням на [кнопку Компас](../widgets/map-buttons.md#compass-tapping-behavior). Детальніше про азимут дивіться [тут](../widgets/nav-widgets.md#bearing-widget).


## Нахил мапи та горизонт {#map-tilt-and-horizon}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

З новим [рушієм візуалізації](../personal/global-settings.md#map-rendering-engine) мапи ви можете змінювати [нахил камери](../plugins/development.md#camera-tilt) від 90 (без нахилу) до 10 градусів. Приблизно при нахилі мапи менше 20-22 градусів (цей параметр залежить від рівня масштабування) стає видимою уявна лінія горизонту. На відміну від реального, горизонт у програмі завжди прямий.  

Під горизонтом можна побачити так звану *імлу* або *туман*. Ця область мапи заповнена сірим кольором, і в ній можна розгледіти лише кілька деталей мапи.  
Використання туману необхідне, оскільки відображення віддалених об'єктів на мапі вимагає значних обчислювальних ресурсів і не завжди виправдане через [спотворення](../plugins/development.md#comparison-with-a-satellite-imagery) мапи при малих кутах огляду. Тому видима відстань на мапі OsmAnd наразі обмежена 35 тайлами.  

:::info
Нахил мапи можна змінити довгим натисканням на екран двома пальцями та рухом ними вгору/вниз. Ви також можете змінити нахил, натиснувши на іконку [Моє місцезнаходження](#my-location-and-zoom) у нижньому правому куті екрана (доступні лише положення 45 та 90 градусів).  
Ви не можете змінити нахил камери, коли увімкнено старий [рушій візуалізації мапи](../personal/global-settings.md#map-rendering-engine) (версія 1).
:::


## Блокування екрана {#touch-screen-lock}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Використовуйте функцію **Блокування екрана**, щоб уникнути випадкових натискань під час навігації. Це особливо корисно для таких видів діяльності, як їзда на велосипеді або піші прогулянки, де ненавмисні дотики можуть перервати ваш маршрут.

**Розблокування**.  
Натисніть кнопку на екрані, або, якщо блокування активовано через зовнішню кнопку (наприклад, зменшення гучності), натисніть зовнішню кнопку, а потім кнопку на екрані.  

**Налаштування**.

- Перейдіть до *Меню → Налаштувати екран → Користувацькі кнопки*.
- Виберіть *+ → Додати дію → Інтерфейс → Блокування екрана*.

Чіткі повідомлення на екрані будуть направляти вас під час блокування або розблокування екрана.


## Налаштування {#settings}

### Додаткові налаштування компаса {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Згладжує обертання мапи за допомогою повільнішої анімації обертання, хоча це вносить невелику затримку, не більше 1 секунди.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Згладжує обертання мапи за допомогою повільнішої анімації обертання, хоча це вносить невелику затримку, не більше 1 секунди.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Видалення анімацій {#remove-animations}

<InfoAndroidOnly/>  

Ви можете вимкнути всі анімації мапи під час взаємодії з нею, включаючи жести та кнопки.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Анімація власної позиції {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Створює ефект плавного панорамування мапи на відміну від іконки *[Моя позиція](../personal/profiles/#profile-appearance)* під час руху. Ефект вносить невелику затримку порівняно з реальним положенням приблизно на 1 секунду. Повідомлялося, що ввімкнення цієї опції за деяких обставин може спричинити помітні проблеми із затримкою; вимкніть її, якщо такі проблеми виникають.


## Зовнішні пристрої введення {#external-input-devices}

Кнопки зовнішніх пристроїв введення забезпечують зручний та ефективний спосіб взаємодії з мапою та інтерфейсом програми OsmAnd. Вони розташовані на зовнішніх пристроях, таких як **Bluetooth або інші типи клавіатур**, **спеціалізовані кнопки на навігаційних пристроях транспортних засобів**, або контролери [WunderLINQ](https://blackboxembedded.com/) та [Parrot](https://www.parrot.com/en) (*лише Android*).  

Однією з основних функцій кнопок на зовнішніх пристроях введення є збільшення та зменшення масштабу мапи. Вони також дозволяють переміщатися по мапі та змінювати її орієнтацію без необхідності торкатися екрана та використовувати жести. Кнопки на зовнішніх пристроях введення підтримують багато інших функцій, таких як відкриття *Головного меню* та активація *Швидких дій*. Користувачі також можуть налаштовувати призначення кнопок для підтримуваних пристроїв (Клавіатура, WunderLINQ та власні зовнішні контролери).

:::note
Клавіатура залишається функціональною, навіть якщо опція *Зовнішні пристрої введення* вимкнена, і вибрано *Нічого*. Однак власні призначення клавіш працюють лише тоді, коли *Зовнішні пристрої введення* увімкнено.
:::

### Попередньо налаштований пристрій введення {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_2_ios.png)

</TabItem>

</Tabs>  

Щоб отримати доступ до налаштувань зовнішнього пристрою введення, вам потрібно увімкнути цю функцію.

- Перейдіть до головного *Меню → Налаштування →* виберіть *Профіль → Загальні налаштування → Інше → Зовнішні пристрої введення* та перемкніть на *Увімкнено*.

- Виберіть пристрій із тих, що підтримуються OsmAnd, натиснувши на пункт *Тип* у списку:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*лише Android*), або створіть [**власний тип**](#custom-input-device-type).

- Для кожного типу зовнішнього пристрою введення існує різний **набір призначень дій-клавіш**. Натисніть *<Translate android="true" ids="key_assignments"/>*, щоб побачити список дій та клавіш. Таблиця клавіш наведена нижче. Це призначення за замовчуванням — їх можна змінювати або розширювати відповідно до уподобань користувача.

- Ви можете прочитати більше про дії зовнішніх пристроїв введення на GitHub у пакеті [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).

| Клавіша | Пристрій | Дія |
|:---------|:---------------|:---------------|
|**C**| *Клавіатура*   | Перемістити - [До мого місцезнаходження](#my-location-and-zoom) |
|**D**| *Клавіатура*   | Змінити - [Орієнтацію мапи](#map-orientation-modes) |
|**N**| *Клавіатура*   | Показати / Сховати - Вигляд навігації |
|**S**| *Клавіатура*   | Показати / Сховати - [Вигляд пошуку](../search/index.md) |
|**P**| *Клавіатура*   | Змінити - Профіль застосунку на наступний |
|**O**| *Клавіатура*   | Змінити - Профіль застосунку на попередній |
|**&#8593;**| *Клавіатура*   | Перемістити - Мапу вгору  |
|**&#8595;**| *Клавіатура*   | Перемістити - Мапу вниз  |
|**&#8592;**| *Клавіатура*   | Перемістити - Мапу вліво  |
|**&#8594;**| *Клавіатура*   | Перемістити - Мапу вправо  |
|**&#43;** **=**| *Клавіатура*  | Мапа - [Збільшити](#my-location-and-zoom) |
|**&#8722;**| *Клавіатура*  | Мапа - [Зменшити](#my-location-and-zoom) |
|**Press back**| *Клавіатура*   | Навігація – Попередній екран  |
|**&#8595;**| *Wunderlinq*  | Мапа - [Зменшити](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Мапа - [Збільшити](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Відкрити WunderLINQ Datagrid |
| **M** | *Клавіатура*  | Показати / Сховати - [Бічне меню](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick press** <br/> (*legacy Android*) | *Клавіатура*  | Перемістити - [До мого місцезнаходження](#my-location-and-zoom) |
| **Media button** <br/> (*Android only*)| *Клавіатура*  | Показати / Сховати - [AV-нотатки](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*Android only*)| *Parrot*  | Мапа - [Зменшити](#my-location-and-zoom) |
| **&#8594;** <br/> (*Android only*) | *Parrot*  | Мапа - [Збільшити](#my-location-and-zoom) |


### Власний тип пристрою введення {#custom-input-device-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

Якщо ви хочете призначити клавіші для зовнішнього пристрою введення (наприклад, клавіатури, джойстика або контролера), вам потрібно створити тип пристрою: перейдіть до налаштування [Зовнішній пристрій введення](#external-input-devices), виберіть **Тип** зі списку, натисніть  "**＋**"  і введіть назву. Кожен тип має меню з такими опціями: ***Перейменувати, Дублювати*** та ***Видалити***.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/> → Device → Add*

![External devices](@site/static/img/map/external_mypilot_ios.png)  ![External devices](@site/static/img/map/external_mypilot2_ios.png)

Якщо ви хочете призначити клавіші для зовнішнього пристрою введення (наприклад, клавіатури, джойстика або контролера), вам потрібно створити тип пристрою: перейдіть до налаштування [Зовнішній пристрій введення](#external-input-devices), виберіть **Device** зі списку, натисніть  "**Add**"  і введіть назву. Кожен тип має меню з такими опціями: ***Перейменувати, Дублювати*** та ***Видалити***.

</TabItem>

</Tabs>  

### Додавання дії та призначення клавіш {#add-action--key-asssigments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External devices](@site/static/img/map/external_custom_4_ios.png)  ![External devices](@site/static/img/map/external_custom_3_ios.png) 

</TabItem>

</Tabs>  

Після створення власного типу введення ви можете призначити необхідні дії клавішам. Доступний широкий спектр [типів дій](../widgets/quick-action.md#action-types) з віджета Швидка дія.

- Виберіть тип пристрою, потім натисніть пункт **Призначення клавіш**.
- Натисніть кнопку ***Додати*** (&nbsp;"**＋**"&nbsp;).
- Виберіть потрібну дію, потім натисніть поле ***Додати клавішу*** і натисніть кнопку на вашому пристрої, щоб призначити її для дії.  

:::note

- Одній дії можна призначити кілька клавіш.
- Якщо кнопка, яку ви призначаєте, вже використовується для іншої дії, ви отримаєте сповіщення з можливістю перепризначити кнопку або скасувати призначення.
- Пізніше ви можете змінити дії та призначення клавіш або додати інші для вже створених дій, просто виберіть пункт у списку Призначення клавіш.

:::

### Видалення призначення клавіші {#delete-key-assignment}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![External devices](@site/static/img/map/external_custom_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![External devices](@site/static/img/map/external_custom_1_ios.png)

</TabItem>

</Tabs> 

Ви можете видалити кілька непотрібних дій одночасно за допомогою кнопки **Редагувати** (*у формі олівця* на Android):

- ***Видалити одну дію*** для кожної дії, за допомогою кнопки  "**−**"  у полі пункту. Призначення клавіші також можна видалити через контекстне меню (довге натискання на пункт), натиснувши **Видалити**.
- ***Видалити всі призначення клавіш*** для вибраного типу, натиснувши кнопку у верхньому правому куті екрана поруч із *Редагувати назву* на Android; натиснувши кнопку **Clear all** на iOS.


## Пов'язані статті {#related-articles}

- [Контекстне меню мапи](./map-context-menu.md)
- [Налаштувати мапу](./configure-map-menu.md)
- [Векторні мапи (Стилі мапи)](./vector-maps.md)
- [Растрові мапи (Онлайн / Офлайн)](./raster-maps.md)
- [Точки на мапі](./point-layers-on-map.md)
- [Треки та маршрути](./tracks/index.md)
- [Контекстне меню треків](./tracks/track-context-menu.md)
- [Громадський транспорт](./public-transport.md)