---
source-hash: 1fd80d1d09f7e680cc085a34c5ed9d3971e1a94467831c5729ef1f0952117344
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
- Додавати [Швидкі дії](../widgets/quick-action.md) та [кнопки мапи](../widgets/map-buttons.md).
- Організовувати віджети на панелях (зверху, знизу, ліворуч, праворуч, по центру).
- Створювати кілька **сторінок** на бічних панелях.
- Вибирати висоту рядка та перемикати іконки віджетів.

Усі віджети [залежать від профілю](../personal/profiles.md) — кожен профіль має власне розташування, порядок, видимість та налаштування.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Панелі віджетів {#widget-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd дозволяє організувати інтерфейс мапи за допомогою настроюваних панелей віджетів.  
Ви можете додавати, змінювати порядок, групувати та видаляти віджети на наступних панелях:

- **Верхня панель**
- **Нижня панель**
- **Ліва панель**
- **Права панель**

Кожна панель підтримує різні типи розташування:

- **Верхня та Нижня панелі** відображають віджети в рядках. Ви можете розмістити один або два віджети в рядку та додати кілька рядків за потреби.
- **Ліва та Права панелі** підтримують кілька сторінок. Ви можете групувати віджети на окремі сторінки та перемикатися між ними.


### Каталог віджетів {#widgets-catalog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Навігаційні віджети:***  

- [Пеленг](../widgets/nav-widgets.md#bearing).  
    Цей набір показує абсолютний або відносний пеленг до цілі в кутових одиницях.  
    Включає 3 віджети: *Відносний пеленг*, *Магнітний пеленг*, *Істинний пеленг*.

- [Профіль висот](../widgets/nav-widgets#elevation-widget) (*Тільки зверху/знизу*, *Тільки Android*).  
    Відображає висоту та нахил маршруту.

- [Смуги руху](../widgets/nav-widgets#lanes) (*Тільки зверху/знизу*).  
    Візуальні підказки щодо смуг руху.

- [Панель маркерів мапи](../widgets/markers.md#configure-marker-widgets-android) (*Тільки зверху/знизу*).  
    Показує відстань/напрямок до збережених маркерів.  
    Налаштовується для 1 або 2 маркерів.

- [Точка навігації](../widgets/nav-widgets.md#navigation-points).  
    Набір показує відстань, що залишилася до пункту призначення, проміжної точки, час прибуття до проміжної точки або час у дорозі для розрахованого маршруту.  
    Включає 4 віджети: [Відстань до пункту призначення](../widgets/nav-widgets.md#distance-to-destination), [Відстань до проміжної точки](../widgets/nav-widgets.md#distance-to-intermediate), [Час до проміжної точки](../widgets/nav-widgets.md#time-to-intermediate), [Час до пункту призначення](../widgets/nav-widgets.md#time-to-destination).

- [Маневри маршруту](../widgets/nav-widgets.md#next-turn) (*Тільки ліва/права панель*).  
    Цей набір активується під час навігації та показує відстань та стрілку до наступного маневру.  
    Включає 3 віджети: *Наступний поворот*, *Наступний поворот (малий)*, *Другий наступний поворот*.

- [Обмеження швидкості](../widgets/nav-widgets.md#speed-limit).  
    Відображає поточне обмеження швидкості для дороги.

- [Спідометр](../widgets/info-widgets.md#speedometer).  
    Показує поточну швидкість на основі даних GPS та обмежену швидкість на основі [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Назва вулиці](../widgets/nav-widgets#street-name) (*Тільки зверху/знизу*).  
    Відображає поточну або майбутню вулицю.

<br/>

***Інформаційні віджети:***

- [Висота](../widgets/info-widgets.md#altitude-widgets).  
    Набір відображає висоту над рівнем моря для поточного місцезнаходження або для поточного центру мапи.  
    Включає 2 віджети: *Висота: поточне місцезнаходження*, *Висота: центр мапи*.

- [Середня швидкість](../widgets/info-widgets.md#average-speed-widget).  
    Показує середню швидкість поточної поїздки.

- [Рівень заряду батареї](../widgets/info-widgets.md#battery-level).  
    Відображає рівень заряду батареї пристрою.

- [Віджети координат](../widgets/info-widgets#coordinates-widget) (*Тільки зверху/знизу*).  
    Цей набір відображає географічні координати поточного місцезнаходження.  
    Включає 2 віджети: *Координати: центр мапи*, *Координати: поточне місцезнаходження*.

- [Поточна швидкість](../widgets/info-widgets.md#speed).  
    Відображає швидкість з датчика GPS.

- [Поточний час](../widgets/info-widgets.md#current-time).  
    Відображає поточний системний час.

- [Коефіцієнт ковзання](../widgets/info-widgets.md#glide-ratio).  
    Віджети показують коефіцієнт ковзання до цілі та середній коефіцієнт ковзання для поточного польоту.  
    Включає 2 віджети: *Коефіцієнт ковзання до цілі*, *Середній коефіцієнт ковзання*.

- [Інформація GPS](../widgets/info-widgets.md#gps-info) (*Тільки Android*).  
    Показує кількість виявлених супутників.

- [Маркери мапи](../widgets/markers.md).  
    Набір показує відстань або орієнтовний час прибуття (ETA) для перших двох маркерів у [списку](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    Включає 2 віджети: *Перший маркер*, *Другий маркер*.

- [Лінійка радіуса](../widgets/info-widgets.md#radius-ruler).  
    Показує відстань між вашим місцезнаходженням та точкою на мапі, обведеною [інструментом Лінійка радіуса](../widgets/radius-ruler.md).

- [Схід, захід сонця](../widgets/info-widgets.md#sunset-and-sunrise).  
    Показує час наступного сходу або заходу сонця для центру мапи.  
    Включає 2 віджети: *Схід сонця*, *Захід сонця*.

<br/>

***Віджети на основі плагінів:***  

- [Аудіо/відео нотатки](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Швидкий доступ до захоплення медіа.  
    Включає 4 віджети: *За запитом*, *Записати аудіо*, *Записати відео*, *Зробити фото*.

- [Віджети розробника](../widgets/info-widgets.md#developer-widgets).  
    Відображає додаткову інформацію.  
    Включає 5 віджетів: *FPS рендерингу мапи*, *Нахил камери*, *Висота камери*, *Рівень масштабування*, *Відстань від камери до цілі*, *Доступна ОЗП*.  

- [Віджети зовнішніх датчиків](../widgets/info-widgets.md#external-sensors-widgets).  
    Набір допомагає відстежувати дані з датчиків BLE/ANT+ у реальному часі.  
    Включає 6 віджетів: *Пульс*, *Потужність велосипеда* (*Тільки Android*), *Каденс велосипеда*, *Швидкість велосипеда*, *Відстань велосипеда*, *Температура*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Відкриває додаток Mapillary для перегляду зображень на рівні вулиць.

- [Статус OsmAnd Tracker](../widgets/info-widgets.md#tracker-widget).  
    Швидкий доступ до [додатку OsmAnd Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Віджет паркування](../widgets/info-widgets.md#parking-widget).  
    Відстань від центру екрана до збереженого місця паркування.

- [Запис поїздки](../widgets/info-widgets.md#trip-recording-widgets).  
    Запускає та зупиняє запис треку, а також відображає дані запису треку.  
    Включає 4 віджети: *Відстань*, *Тривалість*, *Підйом*, *Спуск*.

- [Погода](../widgets/info-widgets.md#weather-widgets).  
    Відображає детальну інформацію про погоду.  
    Включає 5 віджетів: *Температура*, *Тиск повітря*, *Вітер*, *Хмарність*, *Опади*.

:::note Віджети, залежні від панелі

- Доступні лише на **Верхній та Нижній панелях** і повинні бути розміщені в окремих рядках: *Віджети координат, Віджет профілю висот, Віджет смуг руху, Панель маркерів мапи, Віджет назви вулиці*.
- Доступні лише на **Лівій та Правій панелях**: *Маневри маршруту*.

:::


### Рядки {#rows}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

Функція **Режим рядків** дозволяє додавати стільки рядків, скільки потрібно, до верхньої та нижньої панелей. Ви можете відображати кілька віджетів в одному рядку, збільшуючи кількість видимої інформації.

***Як налаштувати рядки:***

- **Додати віджети**. Виберіть зі списку *Доступні віджети*.
- **Змінити порядок.** Натисніть кнопку *Змінити порядок*, щоб впорядкувати віджети.
- **Додати рядки.** Використовуйте кнопку *Додати рядок*, щоб створити нові рядки для віджетів.
- **Перемістити віджети**. Переміщуйте віджети між рядками.
- **Застосувати зміни.** Натисніть кнопку *Застосувати*, щоб зберегти конфігурацію.

#### Типи віджетів та обмеження {#widget-types-and-restrictions}

Режим дозволяє додавати **більше одного віджета в одному рядку** на верхній та нижній панелях, щоб відображати стільки інформації, скільки потрібно.  

- **Складні віджети**. В одному рядку можна додати лише один складний віджет. До них належать:
    - [Панель маркерів мапи (*Тільки Android*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Назва вулиці](../widgets/nav-widgets#street-name)
    - [Віджети координат](../widgets/info-widgets#coordinates-widget)
    - [Смуги руху](../widgets/nav-widgets#lanes)
    - [Профіль висот (*Тільки Android*)](../widgets/nav-widgets#elevation-widget)
    - [Маневри маршруту](../widgets/nav-widgets.md#next-turn)

- **Прості віджети**. В один рядок можна додати кілька простих віджетів. Ці віджети можуть відображати *Назву*, *Одиниці вимірювання*, *Значення* та *Іконку*.


### Сторінки {#pages}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Редагувати → Додати сторінку*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Редагувати → Додати сторінку*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Віджети на правій та лівій панелях можна групувати в **Сторінки**. Функція **Режим сторінок** дозволяє додати 5 сторінок до лівої та правої панелей.

***Як налаштувати рядки:***

- **Додати сторінку**. Перейдіть до налаштувань Лівої/Правої панелі та натисніть *Редагувати → Додати сторінку*.
- **Організувати віджети за сторінками**. Ця функція корисна, коли для різних завдань потрібні різні набори віджетів, наприклад, для навігації або перегляду мапи.
- Сторінки дозволяють створювати **набори віджетів** для конкретних сценаріїв, покращуючи робочий процес та зменшуючи безлад.


## Налаштування віджетів {#widget-settings}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Параметри розміру віджетів** (*для всіх панелей*):  
    Ви можете налаштувати розмір **Простих віджетів** на **Верхній, Нижній, Лівій та Правій панелях**:

    - **Малий**. Ідеально підходить для компактних дисплеїв, залишаючи більше місця на екрані для мап.
    - **Середній** (*розмір віджета за замовчуванням*). Збалансовує видимість та використання простору.
    - **Великий**. Надає більшу, більш видиму інформацію віджета.  

2. **Приховування іконок віджетів** (*для верхньої та нижньої панелей*):

    - Покращує чіткість та максимально використовує простір для важливих даних.
    - Особливо корисно при відображенні багатьох віджетів в одному **рядку**.

3. **Індивідуальний розмір для різних рядків** (*для верхньої та нижньої панелей*):

    - Розмір віджетів можна індивідуально налаштувати, змінюючи розмір рядка.
    - **ПРИМІТКА:** Зміна розміру одного віджета в рядку змінить розмір усіх віджетів у цьому рядку.

4. **Щоб змінити розмір віджета та видимість іконки:**

    - Виберіть віджет, який ви вже додали на панель.  
    - Натисніть іконку *Налаштування* праворуч від поля віджета.
    - Натисніть налаштування *Розмір* та виберіть один з доступних розмірів.
    - Перемкніть у положення Вимкнено в полі *Показати іконку*.


## Налаштування панелей {#panels-customization}

### Контекстне меню віджета {#widget-context-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

**Контекстне меню віджета** надає швидкий спосіб керування та налаштування віджетів безпосередньо з екрана мапи. Ви можете отримати доступ до нього, ***довго натиснувши*** будь-який віджет, щоб налаштувати розташування віджетів, не виходячи з мапи.

**Для Верхньої та Нижньої панелей**  

- *Додати віджет праворуч/ліворуч:*

    - Виберіть положення для нового віджета відносно поточного.
    - Виберіть віджет зі списку [Доступні віджети](#widgets-for-all-panels).

**Для Лівої та Правої панелей**  

- *Додати віджет вище/нижче:*

    - Виберіть, чи розмістити новий віджет вище чи нижче поточного віджета.
    - Натисніть потрібний віджет у списку, щоб додати його до вказаного положення.

**Загальні дії для всіх панелей**  

- *Налаштування*.
    - Доступ до налаштувань віджета (якщо доступно) для налаштування його вигляду або поведінки.

- *Скинути середню швидкість*.
    - Доступно для віджета [Середня швидкість](../widgets/info-widgets.md#average-speed).
    - Довго натисніть, щоб миттєво скинути значення швидкості під час поїздки.

- *Видалити*.
    - Видалити віджет з панелі.
    - Запит на підтвердження гарантує, що дія є навмисною.

### Копії віджетів {#copies-of-widgets}

*Меню OsmAnd → Налаштувати екран → Віджети → Панель*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd дозволяє додавати кілька екземплярів одного віджета на різні панелі або сторінки. Ця функція особливо корисна, коли вам потрібна послідовна інформація в різних переглядах або профілях.  

***Як дублювати віджети:***

- **Додати віджет**. Перейдіть до: *Меню OsmAnd → Налаштувати екран → Віджети → Панель →* **Додати** *віджет*.
- **Дублювати за допомогою контекстного меню**. Натисніть віджет та виберіть **Дублювати** зі списку дій.
- **Альтернативний метод**. Виберіть той самий віджет зі списку *Доступні віджети* та натисніть *Додати*.


### Перемістити або видалити {#move-or-delete}

*Меню OsmAnd → Налаштувати екран → Віджети → Панель*  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

Ви можете перевпорядкувати або видалити віджети з екрана програми за допомогою режиму **Редагувати**.  

***Як перемістити віджет:***

- Перейдіть до: *Меню OsmAnd → Налаштувати екран → Віджети → Панель → Кнопка Редагувати*.
- Довго натисніть **іконку праворуч** від віджета.
- Перетягніть його до потрібного положення у списку віджетів.

***Як видалити віджет:***  

- Виконайте ті самі кроки, що й вище.
- Натисніть **іконку мінус** ліворуч від назви віджета.
- Підтвердьте видалення, коли з'явиться запит.


## Кнопки {#buttons}

### Користувацькі кнопки {#custom-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Швидка дія (Користувацькі кнопки)** дозволяє додати список окремих дій з усіх доступних [Швидких дій](../widgets/quick-action.md#custom-buttons). Ці дії можна призначити одній або кільком кнопкам віджетів на екрані мапи. Користувацькі кнопки надають швидкий доступ до часто використовуваних дій.

### Кнопки за замовчуванням {#default-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Кнопки за замовчуванням** дозволяють налаштувати, які попередньо встановлені кнопки мапи видно на екрані мапи. Ви можете приховати або показати наступні кнопки:

    - [Режим 3D](../widgets/map-buttons.md#3d-mode). Для iOS кнопка завжди доступна. Для Android вона з'являється у списку та доступна для налаштування, якщо вибрано механізм рендерингу мапи [Версія 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

    - [Компас](../widgets/map-buttons.md#display-options). Вказує, як орієнтована мапа на пристрої.  
    3 режими перегляду: *Завжди видно*, *Завжди приховано*, *Видно, якщо мапа повернута*.

    - [Налаштувати мапу](../map/configure-map-menu.md). Доступ до параметрів для зміни стилю мапи, шарів та додаткових налаштувань.

    - [Меню](../widgets/map-buttons.md#main-menu). Відкриває головне меню програми для доступу до всіх функцій.

    - [Моє місцезнаходження](../widgets/map-buttons.md#my-location-and-zoom). Центрує мапу на вашому поточному положенні.

    - [Навігація](../widgets/map-buttons.md#directions). Необхідно для планування маршруту та початку навігації.

    - [Пошук](../widgets/map-buttons.md#search). Відкриває інструмент пошуку місць.

    - [Збільшити / зменшити](../widgets/map-buttons.md#my-location-and-zoom). Налаштовує рівень масштабування мапи, щоб показати більше або менше деталей.

2. **Меню з трьома крапками** на екрані Кнопок за замовчуванням містить такі дії:

    - *Скинути до замовчування*. Дозволяє повернути налаштування кнопок до їх початкового вигляду.
    - *Копіювати з іншого профілю*. Виберіть, з якого профілю з запропонованого списку ви хочете скопіювати налаштування кнопок.

3. **Вигляд кнопки за замовчуванням** (*Тільки Android*) пропонує різноманітні параметри налаштування для цього типу кнопок. Щоб змінити вигляд кнопки, натисніть потрібну кнопку зі списку та виберіть опцію [Вигляд](#button-appearance).


### Вигляд кнопки {#button-appearance}

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

Функція *Вигляд кнопки* дозволяє повністю налаштувати вигляд кнопок на інтерфейсі мапи. Ці параметри налаштування доступні як для *Швидкої дії (Користувацькі кнопки)*, так і для *Кнопок за замовчуванням*, забезпечуючи повний контроль над виглядом інтерфейсу мапи та дозволяючи точне налаштування дизайну кнопок.

***Параметри налаштування***:

- **Іконка**. Виберіть зі списку іконок, що представляють дії, які ви вже додали, що полегшує ідентифікацію функцій з першого погляду.
- **Радіус кутів**. Налаштуйте цей параметр, щоб змінити форму кнопки, від гострих, квадратних кутів до гладких, заокруглених країв.
- **Розмір**. Виберіть розмір кнопки, який найкраще підходить для вашого екрана та виділяється за потреби. Для *Кнопок за замовчуванням* розміри попередньо встановлені та не можуть бути змінені.
- **Непрозорість фону**. Керуйте видимістю фону кнопки. Ви можете встановити його повністю видимим або частково прозорим, або відображати лише тінь рамки та іконку.


## Інше {#other}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Інше*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Відстань за дотиком](../widgets/radius-ruler.md#distance-by-tap). Надає можливість виміряти відстань від вашого положення до вибраної точки.
- [Спідометр](../widgets/info-widgets.md#speedometer). Показує поточну швидкість на основі даних GPS та обмежену швидкість на основі [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Key:maxspeed). Відображені дані також залежать від налаштування OsmAnd [Допустиме відхилення швидкості](../navigation/guidance/voice-navigation.md#speed-limit).


### Відображення положення (Положення місцезнаходження на екрані) {#display-position-location-position-on-screen}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Положення місцезнаходження на екрані* — це назва цього налаштування у версії OsmAnd для iOS.  

Дозволяє встановити розміщення курсора на *[Моє місцезнаходження](../map/interact-with-map.md#my-location-and-zoom)* на мапі OsmAnd. Доступні три варіанти:  

- **<Translate android="true" ids="position_on_map_center"/>**. Курсор завжди розташований по центру екрана.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *Моє місцезнаходження* розташоване трохи нижче центру екрана. Цей режим дозволяє бачити більше інформації на мапі попереду вашого руху, що корисно під час навігації.
- **<Translate android="true" ids="shared_string_automatic"/>**. Розміщує *Моє місцезнаходження* залежно від *[Орієнтації мапи](../map/interact-with-map.md#map-orientation-modes)* (*Знизу* - для напрямку руху, *По центру* - для всіх інших).


## Дії {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Будь-яка панель*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Доступ до додаткових дій на екрані Налаштувати екран:

- *Android*. Розташовані на екрані Налаштувати екран внизу екрана в розділі *Дії*: *Меню → Налаштувати екран → Дії*.
- *Android / iOS*. Розташовані на екранах кожної Панелі в *меню з трьома крапками* у верхньому правому куті екрана.

Доступні дії:

- **Скинути до замовчування**. Ця функція дозволяє скинути всі налаштування до значень за замовчуванням, якщо ви хочете почати спочатку або використовувати лише попередньо встановлені під час запуску OsmAnd.
- **Копіювати з іншого профілю**. Ця функція дозволяє швидко імпортувати налаштування з іншого профілю, вибрати потрібні зі списку та скопіювати.


## Переключити профіль {#switch-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)

</TabItem>

</Tabs>

- Для пристроїв **Android** ви можете змінити профілі у верхній частині головного екрана Налаштувати екран за допомогою доступних іконок профілів.  
- Якщо ви використовуєте пристрій **iOS**, натисніть іконку профілю у верхньому куті головного екрана Налаштувати екран та виберіть потрібний профіль зі списку, щоб активувати його.  

**Зверніть увагу**. Опція *Переключити профіль* не відображає всі існуючі профілі, а лише ті, які були *увімкнені* в меню Налаштування.


## Пов'язані статті {#related-articles}

- [Кнопки мапи](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Лінійка радіуса та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)

> *Останнє оновлення: Травень 2025*