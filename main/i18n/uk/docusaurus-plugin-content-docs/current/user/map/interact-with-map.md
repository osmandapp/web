---
source-hash: f36e3e01ca52cfcf09244a5fdf758f11e6dc72be472882c610eecdadd2be4998
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
- **Довге натискання** на *Кнопки масштабування* відкриває діалогове вікно *Лупа мапи*,allowing you to adjust map detail levels.
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

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Режими орієнтації мапи* дозволяють вибрати, як мапа відображатиметься на екрані пристрою. OsmAnd пропонує такі режими, як **Обертання вручну**, **Напрямок руху**, **Напрямок за компасом** та **Північ вгорі**. Увімкнення кожного режиму змінює спосіб орієнтації мапи відповідно до обраної опції. Для отримання повної інформації дивіться статтю [Кнопки мапи](../widgets/map-buttons.md#compass).


## Компас {#compass}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

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
You can not change the Camera tilt when the old [map rendering engine](../personal/global-settings.md#map-rendering-engine) (version 1) is on.
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

- Navigate to *Menu → Configure screen → Custom buttons*.
- Select *+ → Add action → Interface → Touch Screen Lock*.

Чіткі повідомлення на екрані будуть направляти вас під час блокування або розблокування екрана.


## Налаштування {#settings}

### Додаткові налаштування компаса {#extra-compass-settings}

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Smoothes the rotation of the map with a slower rotation animation, although this introduces a slight delay, not more than 1 second.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Smoothes the rotation of the map with a slower rotation animation, although this introduces a slight delay, not more than 1 second.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### Видалення анімацій {#remove-animations}

<InfoAndroidOnly/>  

Ви можете вимкнути всі анімації мапи під час взаємодії з нею, включаючи жести та кнопки.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Анімація власної позиції {#animate-own-position}

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Створює ефект плавного панорамування мапи на відміну від іконки *[My Position](../personal/profiles/#profile-appearance)* під час руху. Ефект вносить невелику затримку порівняно з реальним положенням приблизно на 1 секунду. Повідомлялося, що ввімкнення цієї опції за деяких обставин може спричинити помітні проблеми із затримкою; вимкніть її, якщо такі проблеми виникають.


## Зовнішні пристрої введення {#external-input-devices}

Кнопки зовнішніх пристроїв введення забезпечують зручний та ефективний спосіб взаємодії з мапою та інтерфейсом програми OsmAnd.  Вони розташовані на зовнішніх пристроях, таких як **Bluetooth або інші типи клавіатур**, **спеціалізовані кнопки на навігаційних пристроях транспортних засобів**, або контролери [WunderLINQ](https://blackboxembedded.com/) та [Parrot](https://www.parrot.com/en).  

Однією з основних функцій кнопок на зовнішніх пристроях введення є збільшення та зменшення масштабу мапи. Вони також дозволяють переміщатися по мапі та змінювати її орієнтацію без необхідності торкатися екрана та використовувати жести. Кнопки на зовнішніх пристроях введення підтримують багато інших функцій, таких як відкриття *Головного меню*.

:::note
Клавіатура залишається функціональною, навіть якщо опція *Зовнішні пристрої введення* вимкнена, і вибрано *Нічого*.
:::

### Попередньо налаштований пристрій введення {#preconfigured-input-device}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

Щоб отримати доступ до налаштувань зовнішнього пристрою введення, вам потрібно увімкнути цю функцію.

- Go to the main *Menu → Settings →* select the *Profile → General settings → Other → External input devices*, and switch to *Enabled*.

- Select a device from those supported by OsmAnd by tapping the *Type* item in the list:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*Android only*), or create [**your own type**](#custom-input-device-type) (*Android only*).

- There is a different **defined action-key bundle** assignment for each type of external input device. Tap the *<Translate android="true" ids="key_assignments"/>* to see a list of actions and keys. The table of keys is shown below.

- You can read more about external input device actions on GitHub in the [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) package.

| Клавіша | Пристрій | Дія |
|:---------|:---------------|:---------------|
|**C**| *Keyboard*   | Move - [To My location](#my-location-and-zoom) |
|**D**| *Keyboard*   | Change - [Map orientation](#map-orientation-modes) |
|**N**| *Keyboard*   | Show / Hide - Navigation view |
|**S**| *Keyboard*   | Show / Hide - [Search view](../search/index.md) |
|**P**| *Keyboard*   | Change - App profile to next |
|**O**| *Keyboard*   | Change - App profile to previous |
|**&#8593;**| *Keyboard*   | Move - Map up  |
|**&#8595;**| *Keyboard*   | Move - Map down  |
|**&#8592;**| *Keyboard*   | Move - Map to the left  |
|**&#8594;**| *Keyboard*   | Move - Map to the right  |
|**&#43;** **=**| *Keyboard*  | Map - [Zoom in](#my-location-and-zoom) |
|**&#8722;**| *Keyboard*  | Map - [Zoom out](#my-location-and-zoom) |
|**Press back**| *Keyboard*   | Navigate – Previous screen  |
|**&#8595;**| *Wunderlinq*  | Map - [Zoom out](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Map - [Zoom in](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Open WunderLINQ Datagrid |
| **M** <br/> (*legacy Android*) | *Keyboard*  | Show / Hide - [Side menu](../start-with/main-menu.md#main-menu-side-menu) |
| **Joystick press** <br/> (*legacy Android*) | *Keyboard*  | Move - [To My location](#my-location-and-zoom) |
| **Media button** <br/> (*Android only*)| *Keyboard*  | Show / Hide - [AV notes](../plugins/audio-video-notes.md#manage-a-single-note) |
| **&#8592;** <br/> (*Android only*)| *Parrot*  | Map - [Zoom out](#my-location-and-zoom) |
| **&#8594;** <br/> (*Android only*) | *Parrot*  | Map - [Zoom in](#my-location-and-zoom) |


### Власний тип пристрою введення {#custom-input-device-type}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

If you want to assign keys for an external input device (such as a keyboard, joystick, or controller), you need to create a device type: go to the [External Input Device](#external-input-devices) setting, select **Type** from the list, tap the&nbsp;  "**＋**"  &nbsp; and enter a name. Each type has a menu with the following options: ***Rename, Duplicate***, and ***Remove***.

### Додавання дії та призначення клавіш {#add-action--key-asssigments}

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

After you have created a custom input type, you can assign the required actions to the keys. A wide range of [action types](../widgets/quick-action.md#action-types) from the Quick Action widget is available.

- Select a device type, then tap the **Key assignments** item.
- Tap the ***Add*** button (&nbsp;"**＋**"&nbsp;) in the bottom right corner of the screen.
- Select the required action then tap the ***Add key*** field and tap the button on your device to assign it to the action.  

:::note

- If the button you assign is already being used for another action, you will receive a notification with the option to reassign the button or cancel the assignment.
- Later you can change actions and key assignments or add other ones for already created actions, just select an item in the Key assignments list.

:::

### Видалення призначення клавіші {#delete-key-assignment}

![External devices](@site/static/img/map/external_custom_1_andr.png)

You can delete multiple unnecessary actions using the **Edit button** (*pencil-shaped*) in the upper right corner of the screen at once:

- ***Remove one action*** per action, with the&nbsp;  "**−**"  &nbsp;button in the item field.
- ***Remove all key assignments*** for the selected type by tapping the button in the upper right corner of the screen next to the *Edit name*.


## Пов'язані статті {#related-articles}

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks and Routes](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)