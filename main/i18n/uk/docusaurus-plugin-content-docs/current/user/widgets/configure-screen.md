---
source-hash: ecd378030be47cbd78cda02a9ad9227bd3ea55624ac430591012670a140cff42
sidebar_position: 1
title:  Налаштувати екран
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

Меню **Налаштувати екран** в OsmAnd дозволяє налаштувати інтерфейс мапи, додаючи та впорядковуючи віджети, кнопки та швидкі дії на кількох панелях.

Ви можете:

- Додавати [інформаційні](../widgets/info-widgets.md), [навігаційні](../widgets/nav-widgets.md) та [пов'язані з маркерами](../widgets/markers.md) віджети.
- Додавати або редагувати [Швидкі дії](../widgets/quick-action.md), [Користувацькі кнопки](../widgets/quick-action.md#custom-buttons) та [Кнопки за замовчуванням](../widgets/map-buttons.md).
- Організовувати віджети на панелях (верхній, нижній, лівій, правій, центральній).
- Створювати кілька **сторінок** на бічних панелях, обирати розмір віджетів.
- Обирати висоту рядка та вмикати/вимикати іконки віджетів.

Усі віджети [залежать від профілю](../personal/profiles.md) — кожен профіль має власний макет, порядок, видимість і налаштування.


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Панелі віджетів {#widget-panels}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Налаштувати екран](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Налаштувати екран](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd дозволяє організувати інтерфейс мапи за допомогою настроюваних панелей віджетів.  
Ви можете додавати, змінювати порядок, групувати та видаляти віджети на наступних панелях:

- **Верхня панель**
- **Нижня панель**
- **Ліва панель**
- **Права панель**

Кожна панель підтримує різну поведінку макета:

- **Верхня та нижня панелі** відображають віджети в рядках. Ви можете розмістити один або два віджети в рядку та додати кілька рядків за потреби.
- **Ліва та права панелі** підтримують кілька сторінок. Ви можете групувати віджети на окремі сторінки та перемикатися між ними.


### Каталог віджетів {#widgets-catalog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Навігаційні віджети:***  

- [Азимут](../widgets/nav-widgets.md#bearing-widget).  
    Цей набір показує абсолютний або відносний азимут до цілі в кутових одиницях.  
    Включено 3 віджети: *Відносний азимут*, *Магнітний азимут*, *Справжній азимут*.

- [Профіль висот](../widgets/nav-widgets#elevation-widget) (*Лише верхня/нижня панель*, *Лише Android*).  
    Відображає висоту та нахил маршруту.

- [Смуги руху](../widgets/nav-widgets#lanes) (*Лише верхня/нижня панель*).  
    Візуальне ведення по смугах.

- [Панель маркерів карти](../widgets/markers.md#configure-marker-widgets) (*Лише верхня/нижня панель*).  
    Показує відстань/напрямок до збережених маркерів.  
    Налаштовується для 1 або 2 маркерів.

- [Точка навігації](../widgets/nav-widgets.md#navigation-points).  
    Набір показує відстань, що залишилася до пункту призначення, проміжної точки, час прибуття до проміжної точки або час у дорозі для розрахованого маршруту.  
    Включено 4 віджети: [Відстань до пункту призначення](../widgets/nav-widgets.md#distance-to-destination), [Відстань до проміжної точки](../widgets/nav-widgets.md#distance-to-intermediate), [Час до проміжної точки](../widgets/nav-widgets.md#time-to-intermediate), [Час до пункту призначення](../widgets/nav-widgets.md#time-to-destination).

- [Маневри на маршруті](../widgets/nav-widgets.md#next-turn) (*Лише ліва/права панель*).  
    Цей набір активується під час навігації та показує відстань і стрілку до наступного маневру.  
    Включено 3 віджети: *Наступний поворот*, *Наступний поворот (малий)*, *Другий наступний поворот*.

- [Обмеження швидкості](../widgets/nav-widgets.md#speed-limit).  
    Відображає поточне обмеження швидкості на дорозі.

- [Спідометр](../widgets/info-widgets.md#speedometer).  
    Показує поточну швидкість на основі даних GPS та обмежену швидкість на основі [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Назва вулиці](../widgets/nav-widgets#street-name) (*Лише верхня/нижня панель*).  
    Відображає поточну або наступну вулицю.

<br/>

***Інформаційні віджети:***

- [Висота](../widgets/info-widgets.md#altitude-widgets).  
    Набір відображає висоту над рівнем моря для поточного місцезнаходження або для поточного центру мапи.  
    Включено 2 віджети: *Висота: поточне місцезнаходження*, *Висота: центр мапи*.

- [Середня швидкість](../widgets/info-widgets.md#average-speed).  
    Показує середню швидкість поточної поїздки.

- [Рівень заряду батареї](../widgets/info-widgets.md#battery-level).  
    Відображає рівень заряду батареї пристрою.

- [Віджети координат](../widgets/info-widgets#coordinates-widget) (*Лише верхня/нижня панель*).  
    Цей набір відображає географічні координати поточного місцезнаходження.  
    Включено 2 віджети: *Координати: центр мапи*, *Координати: поточне місцезнаходження*.

- [Поточна швидкість](../widgets/info-widgets.md#current-speed).  
    Відображає швидкість з датчика GPS.

- [Поточний час](../widgets/info-widgets.md#current-time).  
    Відображає поточний системний час.

- [Аеродинамічна якість](../widgets/info-widgets.md#glide-ratio).  
    Віджети показують аеродинамічну якість до цілі та середню аеродинамічну якість для поточного польоту.  
    Включено 2 віджети: *Аеродинамічна якість до цілі*, *Середня аеродинамічна якість*.

- [Інформація GPS](../widgets/info-widgets.md#gps-info) (*Лише Android*).  
    Показує кількість виявлених супутників.

- [Маркери карти](../widgets/markers.md).  
    Набір показує відстань або орієнтовний час прибуття (ETA) для перших двох маркерів у [списку](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Включено 2 віджети: *Перший маркер*, *Другий маркер*.

- [Радіусна лінійка](../widgets/info-widgets.md#radius-ruler).  
    Показує відстань між вашим місцезнаходженням і точкою на мапі, обведеною [інструментом Радіусна лінійка](../widgets/radius-ruler.md).

- [Схід, захід сонця](../widgets/info-widgets.md#sun-position).  
    Показує час наступного сходу або заходу сонця для центру мапи.  
    Включено 2 віджети: *Схід сонця*, *Захід сонця*.

<br/>

***Віджети плагінів:***  

- [Аудіо/відео нотатки](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Швидкий доступ до запису медіа.  
    Включено 4 віджети: *За запитом*, *Записати аудіо*, *Записати відео*, *Зробити фото*.

- [Віджети розробника](../widgets/info-widgets.md#developer-widgets).  
    Відображає додаткову інформацію.  
    Включено 5 віджетів: *FPS рендерингу мапи*, *Нахил камери*, *Висота камери*, *Рівень масштабування*, *Відстань від камери до цілі*, *Доступна оперативна пам'ять*.  

- [Віджети зовнішніх датчиків](../widgets/info-widgets.md#external-sensors-widgets).  
    Набір допомагає відстежувати дані з датчиків BLE/ANT+ в реальному часі.  
    Включено 6 віджетів: *Пульс*, *Потужність велосипеда* (*Лише Android*), *Каденс велосипеда*, *Швидкість велосипеда*, *Відстань велосипеда*, *Температура*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Відкриває додаток Mapillary для перегляду зображень на рівні вулиць.

- [Статус OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Швидкий доступ до [додатку OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Віджет паркування](../widgets/info-widgets.md#parking-widget).  
    Відстань від центру екрана до збереженого місця паркування.

- [Запис треку](../widgets/info-widgets.md#trip-recording-widgets).  
    Запускає та зупиняє запис треку, а також відображає дані запису треку.  
    Включено 4 віджети: *Відстань*, *Тривалість*, *Підйом*, *Спуск*.

- [Погода](../widgets/info-widgets.md#weather-widgets).  
    Відображає детальну інформацію про погоду.  
    Включено 5 віджетів: *Температура*, *Атмосферний тиск*, *Вітер*, *Хмарність*, *Опади*.

:::note Віджети, що залежать від панелі

- Доступні лише на **верхній та нижній панелях** і повинні розміщуватися в окремих рядках: *Віджети координат, Віджет профілю висот, Віджет смуг руху, Панель маркерів карти, Віджет назви вулиці*.
- Доступні лише на **лівій та правій панелях**: *Маневри на маршруті*.

:::


### Рядки {#rows}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



Функція **Режим рядків** дозволяє додавати стільки рядків, скільки потрібно, до верхньої та нижньої панелей. Ви можете відображати кілька віджетів у рядку, збільшуючи кількість видимої інформації.

***Як налаштувати рядки:***

- **Додати віджети**: Натисніть кнопку *Плюс* (Android) або *Додати віджет* (iOS), а потім виберіть зі списку доступних віджетів.
- **Змінити порядок віджетів**: Натисніть кнопку *Олівець* (Android) або *Редагувати* (iOS), щоб змінити порядок віджетів.
- **Додати рядки**: Натисніть кнопку *Додати рядок*, щоб створити нові рядки для ваших віджетів.
- **Перемістити віджети**: Перетягуйте віджети між різними рядками.
- **Доступ до налаштувань віджета**: Натисніть іконку *"i"* (Android) або стрілку *">"* (iOS), щоб відкрити налаштування віджета.
- **Зберегти зміни**: Натисніть *Застосувати* (Android) або *Готово* (iOS), щоб зберегти макет.


#### Типи та обмеження віджетів {#widget-types-and-restrictions}

Цей режим дозволяє додавати **більше одного віджета в один рядок** на верхній та нижній панелях, щоб відображати стільки інформації, скільки потрібно.  

- **Складні віджети**. В один рядок можна додати лише один складний віджет. До них належать:
    - [Панель маркерів карти (*Лише Android*)](../widgets/markers.md#configure-marker-widgets)
    - [Назва вулиці](../widgets/nav-widgets#street-name)
    - [Віджети координат](../widgets/info-widgets#coordinates-widget)
    - [Смуги руху](../widgets/nav-widgets#lanes)
    - [Профіль висот (*Лише Android*)](../widgets/nav-widgets#elevation-widget)
    - [Маневри на маршруті](../widgets/nav-widgets.md#next-turn)

- **Прості віджети**. В один рядок можна додати кілька простих віджетів. Ці віджети можуть відображати *Назву*, *Одиниці вимірювання*, *Значення* та *Іконку*.


### Сторінки {#pages}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edit → Add page*  

![Сторінка віджетів](@site/static/img/widgets/widget_page_1_andr.png) ![Сторінка віджетів](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edit → Add page*

![Сторінка віджетів](@site/static/img/widgets/widget_page_1_ios.png) ![Сторінка віджетів](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Віджети на правій та лівій панелях можна групувати в **Сторінки**. Функція **Режим сторінок** дозволяє додати 5 сторінок до лівої та правої панелей.

***Як налаштувати сторінки:***

- **Додати сторінку**. Перейдіть до налаштувань лівої/правої панелі та натисніть *Редагувати → Додати сторінку*.
- **Організувати віджети за сторінками**. Ця функція корисна, коли для різних завдань потрібні різні набори віджетів, наприклад, для навігації та перегляду мапи.
- Сторінки дозволяють створювати **набори віджетів** для конкретних сценаріїв, покращуючи робочий процес і зменшуючи безлад.


## Налаштування віджетів {#widget-settings}

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Параметри розміру віджета** (*для всіх панелей*):  
    Ви можете налаштувати розмір **Простих віджетів** на **Верхній, Нижній, Лівій та Правій панелях**:

    - **Малий**. Ідеально підходить для компактних дисплеїв, заощаджуючи більше місця на екрані для мап.
    - **Середній** (*розмір віджета за замовчуванням*). Балансує видимість та використання простору.
    - **Великий**. Надає більшу, більш видиму інформацію віджета.  

2. **Приховування іконок віджетів** (*для верхньої та нижньої панелей*):

    - Покращує чіткість і максимізує простір для важливих даних.
    - Особливо корисно при відображенні багатьох віджетів в одному **рядку**.

3. **Приховування текстових міток віджетів**:

    - Автоматично приховує текстові мітки, щоб числова інформація залишалася повністю видимою в компактних макетах.
    - Допомагає підтримувати чистий і читабельний розклад віджетів, коли простір обмежений.   

4. **Індивідуальний розмір для різних рядків** (*для всіх панелей*):

    - Розмір віджетів можна індивідуально налаштувати, регулюючи розмір рядка та стовпця.
    - **ПРИМІТКА:** Зміна розміру одного віджета в рядку/стовпці змінить розмір усіх віджетів у цьому рядку/стовпці.

5. **Щоб змінити розмір віджета та видимість іконки:**

    - Виберіть віджет, який ви вже додали на панель.  
    - Натисніть іконку *Налаштування* праворуч від поля віджета.
    - Натисніть налаштування *Розмір* і виберіть один з доступних розмірів.
    - Перемкніть у положення Вимкнено в полі *Показувати іконку*.


## Налаштування панелей {#panels-customization}

### Контекстне меню віджета {#widget-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Контекстне меню віджета](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Контекстне меню віджета](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

**Контекстне меню віджета** надає швидкий спосіб керування та налаштування віджетів безпосередньо з екрана мапи. Ви можете отримати до нього доступ, ***довгим натисканням*** будь-якого віджета, щоб налаштувати макет віджетів, не виходячи з мапи.


- **Додати віджет праворуч/ліворуч** (тільки для *верхньої та нижньої панелей*)
    - Виберіть позицію для нового віджета відносно поточного.
    - Виберіть віджет зі списку [Доступні віджети](#widgets-catalog).

- **Додати віджет вище/нижче** (тільки для *лівої та правої панелей*)
    - Виберіть, чи розмістити новий віджет вище або нижче поточного.
    - Натисніть потрібний віджет у списку, щоб додати його у вказану позицію.

- **Налаштування**
    - Доступ до налаштувань віджета (якщо доступно) для налаштування його зовнішнього вигляду або поведінки.

- **Видалити**
    - Видалити віджет з панелі.
    - Підтвердження гарантує, що дія є навмисною.

- **Скинути середню швидкість** (приклад *дій, специфічних для віджета*)
    - Доступно для віджета [Середня швидкість](../widgets/info-widgets.md#average-speed).
    - Довге натискання для миттєвого скидання значення швидкості під час поїздки.


### Копії віджетів {#copies-of-widgets}

*Меню OsmAnd → Налаштувати екран → Віджети → Панель*  

![Дублікат віджета](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd дозволяє додавати кілька екземплярів одного й того ж віджета на різні панелі або сторінки. Ця функція особливо корисна, коли вам потрібна послідовна інформація в різних переглядах або профілях.  

***Як дублювати віджети:***

- **Додати віджет**. Перейдіть до: *Меню OsmAnd → Налаштувати екран → Віджети → Панель →* **Додати** *віджет*.
- **Дублювати за допомогою контекстного меню**. Натисніть на віджет і виберіть **Дублювати** зі списку дій.
- **Альтернативний метод**. Виберіть той самий віджет зі списку *Доступні віджети* та натисніть *Додати*.


### Перемістити або видалити {#move-or-delete}

*Меню OsmAnd → Налаштувати екран → Віджети → Панель*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



Ви можете перевпорядковувати або видаляти віджети з екрана програми за допомогою режиму **Редагувати**.  

***Як перемістити віджет:***

- Перейдіть до: *Меню OsmAnd → Налаштувати екран → Віджети → Панель → кнопка Редагувати*.
- Довго натисніть **іконку праворуч** від віджета.
- Перетягніть його на потрібну позицію у списку віджетів.

***Як видалити віджет:***  

- Виконайте ті ж кроки, що й вище.
- Натисніть **іконку мінус** ліворуч від назви віджета.
- Підтвердьте видалення, коли з'явиться запит.


## Кнопки {#buttons}

### Користувацькі кнопки {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Швидка дія (Користувацькі кнопки)** дозволяє додати список окремих дій з усіх доступних [Швидких дій](../widgets/quick-action.md#custom-buttons). Ці дії можна призначити одній або кільком кнопкам-віджетам на екрані мапи. Користувацькі кнопки забезпечують швидкий доступ до часто використовуваних дій.

### Кнопки за замовчуванням {#default-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Кнопки за замовчуванням** дозволяють налаштувати, які попередньо встановлені кнопки мапи будуть видимі на екрані мапи. Ви можете приховати або показати наступні кнопки:

    - [3D-режим](../widgets/map-buttons.md#3d-mode). Для iOS кнопка завжди доступна. Для Android вона з'являється у списку та доступна для налаштування, якщо вибрано рушій рендерингу мапи [Версія 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Компас](../widgets/map-buttons.md#display-options). Вказує, як мапа орієнтована на пристрої.  
    3 режими перегляду: *Завжди видимий*, *Завжди прихований*, *Видимий, якщо мапа повернута*.

    - [Налаштувати мапу](../map/configure-map-menu.md). Доступ до опцій для зміни стилю мапи, шарів та додаткових налаштувань.

    - [Меню](../widgets/map-buttons.md#main-menu). Відкриває головне меню програми для доступу до всіх функцій.

    - [Моє місцезнаходження](../widgets/map-buttons.md#my-location-and-zoom). Центрує мапу на вашому поточному положенні.

    - [Навігація](../widgets/map-buttons.md#directions). Важливо для планування маршруту та початку навігації.

    - [Пошук](../widgets/map-buttons.md#search). Відкриває інструмент пошуку для знаходження місць.

    - [Збільшити / зменшити](../widgets/map-buttons.md#my-location-and-zoom). Регулює рівень масштабування мапи, щоб показати більше або менше деталей.

2. **Меню з трьома крапками** на екрані кнопок за замовчуванням містить такі дії, як:

    - *Скинути до стандартних*. Дозволяє повернути налаштування кнопок до їх початкового вигляду.
    - *Копіювати з іншого профілю*. Виберіть, з якого профілю із запропонованого списку ви хочете скопіювати налаштування кнопок.

3. **Зовнішній вигляд кнопки за замовчуванням** (*Лише Android*) пропонує різноманітні варіанти налаштування для цього типу кнопок. Щоб змінити зовнішній вигляд кнопки, натисніть потрібну кнопку зі списку та виберіть опцію [Зовнішній вигляд](#button-appearance).


### Зовнішній вигляд кнопки {#button-appearance}

<InfoAndroidOnly/>

![Зовнішній вигляд кнопки](@site/static/img/widgets/button_appearance_settings_andr.png)

Функція *Зовнішній вигляд кнопки* дозволяє повністю налаштувати вигляд кнопок на вашому інтерфейсі мапи. Ці параметри налаштування доступні як для *Швидкої дії (Користувацькі кнопки)*, так і для *Кнопок за замовчуванням*, забезпечуючи всебічний контроль над зовнішнім виглядом інтерфейсу мапи та дозволяючи точне налаштування дизайну кнопок.

***Параметри налаштування***:

- **Іконка**. Виберіть зі списку іконок, які представляють дії, які ви вже додали, що полегшує ідентифікацію функцій з першого погляду.
- **Радіус кутів**. Налаштуйте цей параметр, щоб змінити форму кнопки, від гострих, квадратних кутів до гладких, закруглених країв.
- **Розмір**. Виберіть розмір кнопки, який найкраще підходить для вашого екрана та виділяється за потреби. Для *Кнопок за замовчуванням* розміри попередньо встановлені та не можуть бути змінені.
- **Прозорість фону**. Контролюйте видимість фону кнопки. Ви можете встановити його повністю видимим або частково прозорим, або відображати лише тінь рамки та іконку.


## Інше {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Other*

![Сторінка віджетів](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Відстань за дотиком](../widgets/radius-ruler.md#distance-by-tap). Дає можливість виміряти відстань від вашого положення до вибраної точки.
- [Спідометр](../widgets/info-widgets.md#speedometer). Показує поточну швидкість на основі даних GPS та обмежену швидкість на основі [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Відображені дані також залежать від налаштування OsmAnd [Допуск обмеження швидкості](../navigation/guidance/voice-navigation.md#speed-limit).


### Позиція на екрані (Положення на екрані) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Сторінка віджетів](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Сторінка віджетів](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Положення на екрані* — це назва цього налаштування у версії OsmAnd для iOS.  

Дозволяє встановити розміщення курсора *[Моє місцезнаходження](../map/interact-with-map.md#my-location-and-zoom)* на мапі OsmAnd. Доступні три варіанти:  

- **<Translate android="true" ids="position_on_map_center"/>**. Курсор завжди розташований у центрі екрана.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Моє місцезнаходження* розміщується трохи нижче центру екрана. Цей режим дозволяє бачити більше інформації на мапі попереду вашого руху, що корисно під час навігації.
- **<Translate android="true" ids="shared_string_automatic"/>**. Розміщує *Моє місцезнаходження* залежно від *[Орієнтації мапи](../map/interact-with-map.md#map-orientation-modes)* (*Внизу* - для напрямку руху, *В центрі* - для всіх інших).


## Дії {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Сторінка віджетів](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Any panel*

![Сторінка віджетів](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Доступ до додаткових дій на екрані Налаштувати екран:

- *Android*. Розташовано на екрані Налаштувати екран внизу екрана в розділі *Дії*: *Меню → Налаштувати екран → Дії*.
- *Android / iOS*. Розташовано на екранах кожної Панелі в *меню з трьома крапками* у верхньому правому куті екрана.

Доступні дії:

- **Скинути до стандартних**. Ця функція дозволяє скинути всі налаштування до значень за замовчуванням, якщо ви хочете почати все спочатку або використовувати лише попередньо встановлені налаштування при запуску OsmAnd.
- **Копіювати з іншого профілю**. Ця функція дозволяє швидко імпортувати налаштування з іншого профілю, вибрати потрібні зі списку та скопіювати.


## Перемкнути профіль {#switch-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Меню Налаштувати екран](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Для пристроїв **Android** ви можете змінювати профілі у верхній частині головного екрана Налаштувати екран за допомогою доступних іконок профілів.  
- Якщо ви використовуєте пристрій **iOS**, натисніть іконку профілю у верхньому куті головного екрана Налаштувати екран і виберіть потрібний профіль зі списку, щоб активувати його.  

**Зверніть увагу**: *Опція перемикання профілю* не відображає всі існуючі профілі, а лише ті, які були *увімкнені* в меню Налаштування.


## Пов'язані статті {#related-articles}

- [Кнопки на мапі](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіусна лінійка та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)