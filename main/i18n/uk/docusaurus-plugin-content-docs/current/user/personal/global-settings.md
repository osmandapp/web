---
source-hash: 6d1b3b96d03eeb0a709cb35252dd6e33692ccafc93d1375f5cfba33926b39f5a
sidebar_position: 3
title:  Загальні налаштування
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

**Загальні налаштування** — це загальні [налаштування](../personal/profiles.md) для всіх профілів у застосунку OsmAnd. Це базові налаштування системи OsmAnd, і будь-які внесені зміни вплинуть на весь застосунок.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Загальні налаштування профілів Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Загальні налаштування профілів Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Загальні налаштування профілів iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Загальне {#general}

Цей розділ містить основні налаштування OsmAnd, такі як вибір [профілю](#default-profile) під час завантаження застосунку, вибір [механізму візуалізації](#map-rendering-engine) та [папки](#data-storage-folder), де зберігатимуться дані.  


### Профіль за замовчуванням {#default-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd використовує профіль за замовчуванням *Перегляд карти* як перший профіль для нових користувачів, і якщо цей профіль був обраний вами, він використовуватиметься щоразу при перезапуску застосунку. Ви можете вибрати будь-який профіль зі списку за замовчуванням, включаючи *Останній використаний* та *Перегляд карти*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Дозволяє вибрати профіль, який використовувався останнім.
- **<Translate android="true" ids="settings_preset"/>**. Ви вибираєте профіль, який використовуватиметься при запуску OsmAnd. Його можна змінити в [налаштуваннях](../personal/profiles.md) застосунку.  


### Профіль CarPlay {#carplay-profile}

:::caution ТІЛЬКИ ДЛЯ iOS
Ця функція доступна для версії застосунку OsmAnd для iOS.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) використовується при підключенні до програмного забезпечення [CarPlay](https://support.apple.com/en-gb/HT205634) вашого автомобіля та допомагає максимально використовувати оптимізовану версію застосунку OsmAnd, використовуючи аудіо- та відеосистеми для відображення даних з вашого телефону.


### Папка для зберігання даних {#data-storage-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Налаштування сховища профілів Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Пам'ять пристрою** показує, скільки вільного місця залишилося на вашому пристрої. Натисніть на поле, щоб отримати доступ до меню [*Карти та ресурси*](../personal/maps-resources.md#maps--resources), де ви можете переглядати та керувати детальною інформацією про ваші дані OsmAnd.

2. У полі **<Translate android="true" ids="change_data_storage_folder"/>** ви можете вибрати папку для збереження даних OsmAnd на вашому пристрої.  

    - *Внутрішня пам'ять застосунку*. Лише застосунок OsmAnd має доступ до своїх даних, жоден зовнішній застосунок не має доступу.
    - *Спільна пам'ять*. Більше недоступно.
    - *Зовнішнє сховище 1*. Лише 1 застосунок OsmAnd має доступ, а також застосунки адміністратора та USB.
    - *Багатокористувацьке сховище*. Лише 1 застосунок OsmAnd має доступ, але він спільний для кількох користувачів Android.
    - *Вказано вручну*. Залежить від шляху.

:::note Android 12+ (зміна папки сховища)
Нові правила доступу до сховища були впроваджені у версіях Android 11-12. Детальніше дивіться у розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Пристрій iOS → Налаштування → Загальні → Сховище iPhone → OsmAnd Maps*  

![Налаштування сховища Загальні iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Файли OsmAnd видно у застосунку [*Файли*](https://apps.apple.com/us/app/files/id1232058109). Ви можете отримати доступ до всіх файлів OsmAnd: [треків](../personal/tracks/manage-tracks.md), [обраного](../personal/favorites.md), [карт](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Для цього перейдіть за наступним шляхом:  

Перейти до: *Файли → На моєму iPhone → OsmAnd Maps*

<!-- ![Застосунок Файли iOS](@site/static/img/personal/storage/files_app_ios.png) ![Застосунок Файли iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Налаштування сховища Загальні iOS](@site/static/img/personal/profiles/files-1.png) ![Налаштування сховища Загальні iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Механізм візуалізації карти {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (тільки Android)*

![Налаштування загального механізму візуалізації Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- У версії застосунку для **Android** ви можете перемикатися між візуалізацією карти Версії 1, спочатку реалізованою в застосунку OsmAnd, та Версією 2, яка використовує програмний інтерфейс OpenGL (Open Graphics Library) для візуалізації дво- та тривимірних графічних об'єктів.

- Версія для **iOS** використовує лише OpenGL для візуалізації карти.


| Функції | Версія 1 | Версія 2 (OpenGL) |
|:---|:--- |:--- |
| Кросплатформність | Не використовується у версії для iOS. | Підходить для обох версій. |
| Залежність від GPU / CPU | Рекомендовано для малопродуктивних або застарілих пристроїв. | Потужний механізм візуалізації. <br /> Доступно лише для [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) та пізніших версій, а також у тестовому режимі для [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D режим | Можна переглядати карту у 2D, і можна змінити кут огляду, щоб отримати [3D вигляд](../widgets/map-buttons.md#3d-mode). | Можна переглядати карту у 2D та [3D](../widgets/map-buttons.md#3d-mode). |
| Відображення карти | Вся карта візуалізується як набір тайлів, а маркери, лінії та текст вже знаходяться всередині цих тайлів. | Спочатку візуалізується весь пакет тайлів, а потім доступні символи застосовуються до карти [шар за шаром](../../technical/algorithms/map-rendering-layers.md). |
| Прозоре накладання / підкладання символів | Підтримує всі налаштування. | Не підтримує растровий шар поверх векторного тексту. |
| [3D рельєф](../map/raster-maps.md#3d-relief) | Не підтримується. | Ця функція візуалізує рельєф на карті, додаючи інформацію про висоту до звичайної 2D карти, що створює 3D та ефект глибини. |
| [3D треки](../map/tracks/appearance.md) | Не підтримується. | Ця функція дозволяє відображати треки за висотою над рівнем моря. |
| [Онлайн-карта](../plugins/online-map.md) | Не підтримує відображення контурних ліній, якщо джерелом карти є будь-яка онлайн-тайлова карта. | Коли джерелом карти є онлайн-карта, також використовуються 3D карти, і підтримується відображення контурних ліній на карті. |
| [Плагін погоди](../plugins/weather.md) | Ви не можете використовувати цей плагін. | Зручно використовувати з плагіном. |  

Зображення для 3D вигляду карти завантажується тайл за тайлом, потім всі символи. Швидкість візуалізації карти залежить від кількості 2D та 3D графічних об'єктів на ній, і безпосередньо від продуктивності вашого обладнання. Тому Версія 2 (OpenGL) не може використовуватися на малопродуктивних пристроях.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="візуалізація"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="візуалізація"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="візуалізація"/></td>
    </tr>
</table>


## Приватність та безпека {#privacy-and-security}

OsmAnd дозволяє вам вибрати, чи *[ділитися своєю активністю в застосунку](#analytics)* та [ідентифікаторами](#identifiers) (*тільки Android*), можливість редагувати свою *[історію](#history)* та використовувати *[проксі](#proxy)* (*тільки Android*) на ваш вибір.  

:::note
Більше інформації можна знайти в [*Політиці конфіденційності та безпеки OsmAnd*](../../legal/privacy-policy.md)
:::

### Аналітика {#analytics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Налаштування загальної аналітики Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Налаштування загальної надсилання анонімних даних iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) або **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) дозволяє вам вибрати, чи надавати анонімні дані про *Завантажені карти* та *Відвідані екрани* (*Android*).  

:::note
Дані про ваше місцезнаходження або місця, які ви переглядаєте на карті, не збираються.
:::  

### Ідентифікатори {#identifiers}

<InfoAndroidOnly />

*Меню → Налаштування → Налаштування OsmAnd → Приватність та безпека → Ідентифікатори*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

**UUID** (*Unique User Identifier*) генерується для кожної інсталяції застосунку OsmAnd та надсилається на сервери під час завантаження карти.

- Випадковий UUID використовується для завантаження офлайн-карт із серверів OsmAnd для контролю раціонального використання ресурсів сервера, прогнозування використання трафіку та надання загальних щомісячних звітів про завантаження карт.
- UUID змінюється кожні 3 місяці.  
- Починаючи з версії OsmAnd 4.3, ви можете вимкнути збір даних користувача під час використання застосунку OsmAnd. Тоді UUID не надсилатиметься з жодним запитом на завантаження.  
- Ви можете прочитати більше інформації в [Умовах використання (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Історія {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Налаштування загальної історії Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Налаштування загальної історії Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Налаштування загальної історії IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Налаштування загальної історії IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Застосунок записує історію раніше введених даних (історія) за наступними категоріями: [Пошук](../search/search-history.md), [Навігація](../navigation/setup/route-navigation.md#history-of-previous-routes), [Маркери на карті](../personal/markers.md#history). Використовуючи перемикач на відповідній вкладці, ви можете *Увімкнути / Вимкнути* ведення журналу для певних категорій записів. Ви також можете [керувати](#history) (переглядати, видаляти та ділитися) раніше записаними даними.  

- ***Резервне копіювання як файл*** (*Android*) або ***Експорт*** (*iOS*) використовується для створення [файлу резервної копії](../personal/import-export.md#export) вашої історії.
- ***Очистити всю історію*** (*Android*) або ***Видалити всю історію*** (*iOS*) використовується для видалення всіх записів історії, записаних до моменту видалення.

<br/>

**Поділитися та видалити історію.**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Налаштування загальної історії Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Налаштування загальної історії IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Налаштування загальної історії IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Ви можете видалити один або кілька елементів зі списку історії або поділитися ними як файлом (для доступу до цих функцій *в iOS* натисніть кнопку ***Редагувати***).  
- Щоб видалити або експортувати кілька записів одночасно, встановіть прапорці біля потрібних записів і натисніть кнопки **Експорт** або **Видалити**.  


### Проксі {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Налаштування загального проксі Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Налаштування **<Translate android="true" ids="proxy_pref_title"/>** дозволяє налаштувати [HTTP проксі](https://en.wikipedia.org/wiki/Proxy_server) для всіх мережевих запитів. Ви можете встановити *Хост проксі* та *Порт проксі*.  


## Інше {#other}

У цьому розділі налаштувань OsmAnd ви можете налаштувати сповіщення, які ви отримуєте, службу визначення місцезнаходження та спосіб збереження налаштувань вашого застосунку.

### Діалоги та сповіщення {#dialogs-and-notifications}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Налаштування загальних сповіщень Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування загальних діалогів iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="dialogs_and_notifications_title"/>** дозволяє увімкнути/вимкнути спливаючі вікна, діалоги та сповіщення.  

- *Повідомлення при запуску* включає акції, вікторини, події тощо.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) пригнічує відображення знижок на застосунок та повідомлень про спеціальні місцеві події.
- [*Діалог завантаження карти*](../start-with/download-maps.md#download) інформує вас про те, що можна завантажити певні карти.


### Джерело місцезнаходження {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*тільки Android*)

![Автоматичне резервне копіювання](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd надає вам вибір служб для визначення вашого місцезнаходження. Рекомендується прочитати більше інформації про [Дозвіл на доступ до місцезнаходження](../start-with/first-steps.md#permission-to-access-the-location) та [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) для цього розділу.

***Android***:

- Ви можете вибрати, які служби *Google Play* або *Android API* OsmAnd використовуватиме для визначення вашого місцезнаходження. Це може бути корисно для пристроїв без *Google Play Services* або у випадку неточних даних про місцезнаходження чи висоту під час запису треків.
- OsmAnd отримує дані з ресурсів *Google Fused Location Providers* та *Android GPS and Network Providers*. Ви можете перемкнути **<Translate android="true" id="location_source" />** у: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Система iOS використовує *iOS API* для визначення місцезнаходження.  
- Всі налаштування місцезнаходження OsmAnd можна знайти в налаштуваннях пристрою iOS: *Налаштування → OsmAnd maps → Location*  
- Конфіденційність служб визначення місцезнаходження: *Налаштування → Конфіденційність → Служби визначення місцезнаходження*


### Автоматичне резервне копіювання {#auto-backup}

<InfoAndroidOnly />

![Налаштування загальних сповіщень Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android або OsmAnd Cloud можуть зберігати ваші дані та налаштування застосунку.

- За замовчуванням, ваші *Налаштування OsmAnd* та маркери карти [*Обране*](../personal/favorites.md#automatic-favorites-backup) автоматично резервуються системою Android. Це дозволяє відновити їх на нових пристроях або після перевстановлення застосунку.

- Зверніть увагу, що розмір резервної копії обмежений *25 МБ*.

- Щоб знайти файли резервної копії, використовуйте сторонній файловий менеджер.  
    *ПРИМІТКА: Ви можете знайти файли резервної копії за допомогою файлового менеджера Android: Android → data → net.osmand → files → backup, але майте на увазі, що в останніх версіях Android доступ до системних каталогів обмежений.*  

**Якщо ви використовуєте [*OsmAnd Cloud*](../personal/osmand-cloud.md), рекомендується деактивувати цю опцію резервного копіювання за замовчуванням, щоб уникнути плутанини під час перевстановлення.**


## Юридичні {#legal}

OsmAnd може [попереджати вас про камери контролю швидкості](../navigation/guidance/navigation-settings.md#screen-alerts), але тільки якщо це дозволено законами вашої країни.


### Видалити камери контролю швидкості {#uninstall-speed-cameras}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Налаштування загальних камер Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Налаштування загальних камер Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Налаштування загальних камер Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Налаштування загальних камер Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Це налаштування дозволяє активувати або деактивувати POI з камерами контролю швидкості, для внесення змін необхідно перезапустити застосунок OsmAnd.
  
У деяких країнах або регіонах використання застосунків для попередження про камери контролю швидкості є незаконним. Ви повинні зробити вибір залежно від законів вашої країни. Виберіть **Залишити активним**, і ви отримуватимете сповіщення та попередження про камери контролю швидкості. Виберіть **Видалити**, і всі дані, пов'язані з камерами контролю швидкості, такі як попередження, сповіщення та POI, будуть видалені, доки ви повністю не перевстановите OsmAnd.  

Прочитайте про сповіщення про камери контролю швидкості на вашому маршруті у статті Віджети навігації в розділі *[Віджет сповіщень](../widgets/nav-widgets.md#alert-widget)*.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

### Вирішення проблем {#troubleshooting}

- **Android 12+ (зміна папки сховища)**. Нові правила доступу до сховища були впроваджені у версіях Android 11-12. Ці зміни особливо впливають на зберігання карт на SD-картах, що призводить до значно повільнішої продуктивності доступу до файлів та більш суворих обмежень доступу до папок SD-карти на Android 11 та 12. Як вирішити цю проблему, дивіться у розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Джерело місцезнаходження для проблем з висотою**. Google Play змінив свою політику, і для відповідності, OsmAnd, починаючи з версії 3.9, повинен використовувати Google Play Services для отримання даних про місцезнаходження під час роботи у фоновому режимі. Детальніше читайте у розділі [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Останнє оновлення: листопад 2024*