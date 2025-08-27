---
source-hash: e0b9c6c498f2c53828251f254bb330363192ffddb65ff4939e882c99b223b771
sidebar_position: 3
title: Глобальні налаштування
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

**Глобальні налаштування** — це загальні [налаштування](../personal/profiles.md) для всіх профілів у застосунку OsmAnd. Це базові налаштування для системи OsmAnd, і будь-які внесені зміни впливатимуть на весь застосунок.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Загальні {#general}

Цей розділ містить основні налаштування OsmAnd, такі як вибір [профілю](#default-profile) під час завантаження застосунку, вибір [механізму візуалізації](#map-rendering-engine) та [папки](#data-storage-folder), куди будуть збережені дані.  


### Профіль за замовчуванням {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd використовує профіль за замовчуванням, *Перегляд карти*, як перший профіль для нових користувачів, і якщо цей профіль був обраний вами, він буде використовуватися щоразу при перезапуску застосунку. Ви можете вибрати будь-який профіль зі списку за замовчуванням, включаючи *Останній використаний* та *Перегляд карти*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Дозволяє вибрати профіль, який використовувався останнім.
- **<Translate android="true" ids="settings_preset"/>**. Ви вибираєте профіль, який буде використовуватися при запуску OsmAnd. Його можна змінити в [налаштуваннях](../personal/profiles.md) застосунку.  


### Профіль CarPlay {#carplay-profile}

:::caution ТІЛЬКИ iOS
Ця функція доступна для версії застосунку OsmAnd для iOS.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) використовується при підключенні до програмного забезпечення [CarPlay](https://support.apple.com/en-gb/HT205634) вашого автомобіля та допомагає максимально використовувати оптимізовану версію застосунку OsmAnd, використовуючи аудіо- та відеосистеми для відображення даних на вашому телефоні.


### Папка для зберігання даних {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Storage Settings Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Пам'ять пристрою** показує, скільки вільного місця залишилося на вашому пристрої. Торкніться поля, щоб отримати доступ до меню [*Карти та ресурси*](../personal/maps-resources.md#maps--resources), де ви можете переглядати та керувати детальною інформацією про ваші дані OsmAnd.

2. У **<Translate android="true" ids="change_data_storage_folder"/>** ви можете вибрати папку для збереження даних OsmAnd на вашому пристрої.  

    - *Внутрішня пам'ять застосунку*. Тільки застосунок OsmAnd має доступ до своїх даних, і жоден із зовнішніх застосунків.
    - *Спільна пам'ять*. Більше не доступна.
    - *Зовнішнє сховище 1*. Тільки 1 застосунок OsmAnd має доступ, а також застосунки адміністратора та USB.
    - *Багатокористувацьке сховище*. Тільки 1 застосунок OsmAnd має доступ, але він спільно використовується кількома користувачами Android.
    - *Вказано вручну*. Залежить від шляху.

:::note Android 12+ (змінити папку зберігання)
Нові рекомендації щодо доступу до сховища були реалізовані у версіях Android 11-12. Детальніше дивіться у розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *Пристрій iOS → Налаштування → Загальні → Сховище iPhone → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Файли OsmAnd видно в застосунку [*Файли*](https://apps.apple.com/us/app/files/id1232058109). Ви можете отримати доступ до всіх файлів OsmAnd: [треків](../personal/tracks/manage-tracks.md), [вибраного](../personal/favorites.md), [карт](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Для цього дотримуйтесь наступного шляху:  

Перейти до: *Файли → На моєму телефоні → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Механізм візуалізації карти {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (Тільки Android)*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- У версії застосунку для **Android** ви можете перемикатися між візуалізацією карти Версії 1, спочатку реалізованою в застосунку OsmAnd, та Версією 2, яка використовує програмний інтерфейс OpenGL (Open Graphics Library) для візуалізації дво- та тривимірних графічних об'єктів.

- Версія для **iOS** використовує лише OpenGL для візуалізації карти.


| Функції | Версія 1 | Версія 2 (OpenGL) |
|:---|:--- |:--- |
| Кросплатформність | Не використовується у версії iOS. | Підходить для обох версій. |
| Залежність від GPU / CPU | Рекомендовано для пристроїв з низькою продуктивністю або застарілих. | Потужний механізм візуалізації. <br /> Доступно лише для [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) та пізніших версій, а також у тестовому режимі для [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D режим | Можна переглядати карту в 2D, і можна змінити кут огляду, щоб отримати [3D вигляд](../widgets/map-buttons.md#3d-mode). | Можна переглядати карту в 2D та [3D](../widgets/map-buttons.md#3d-mode). |
| Відображення карти | Вся карта візуалізується як набір плиток, а маркери, лінії та текст вже знаходяться всередині цих плиток. | Спочатку візуалізується весь пакет плиток, а потім доступні символи застосовуються до карти, [шар за шаром](../../technical/algorithms/map-rendering-layers.md). |
| Прозоре накладання / підкладання символів | Підтримує всі налаштування. | Не підтримує растровий шар поверх векторного тексту. |
| [3D Рельєф](../map/raster-maps.md#3d-relief) | Не підтримується. | Ця функція візуалізує рельєф на карті, додаючи інформацію про висоту до звичайної 2D карти, що створює 3D та ефект глибини. |
| [3D Треки](../map/tracks/appearance.md) | Не підтримується. | Ця функція дозволяє відображати треки за висотою над рівнем моря. |
| [Онлайн-карта](../plugins/online-map.md) | Не підтримує відображення горизонталей, якщо джерелом карти є будь-яка онлайн-плиткова карта. | Коли джерелом карти є онлайн-карта, також використовуються 3D карти, і підтримується відображення горизонталей на карті. |
| [Плагін Погода](../plugins/weather.md) | Ви не можете використовувати цей плагін. | Зручно використовувати з плагіном. |  

Зображення для 3D-перегляду карти завантажується плитка за плиткою, потім усі символи. Швидкість візуалізації карти залежить від кількості 2D та 3D графічних об'єктів на ній, і безпосередньо від продуктивності вашого обладнання. Тому Версія 2 (OpenGL) не може використовуватися на пристроях з низькою продуктивністю.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Конфіденційність та безпека {#privacy-and-security}

OsmAnd дозволяє вам вибирати, чи [ділитися своєю активністю в застосунку](#analytics) та [ідентифікаторами](#identifiers) (*тільки Android*) у застосунку, можливість редагувати свою [історію](#history) та використовувати [проксі](#proxy) (*тільки Android*) на ваш вибір.  

:::note
Більше інформації можна знайти в [*Політиці конфіденційності та безпеки OsmAnd*](../../legal/privacy-policy.md)
:::

### Аналітика {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Analytics Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![General Settings Send anonymous data iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) або **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) дозволяє вам вибирати, чи надавати анонімні дані про *Завантажені карти* та *Відвідані екрани* (*Android*).  

:::note
Дані про ваше місцезнаходження або місця, які ви переглядаєте на карті, не збираються.
:::  

### Ідентифікатори {#identifiers}

<InfoAndroidOnly />

*Меню → Налаштування → Налаштування OsmAnd → Конфіденційність та безпека → Ідентифікатори*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

**UUID** (*Унікальний ідентифікатор користувача*) генерується для кожної інсталяції застосунку OsmAnd та надсилається на сервери під час завантаження карти.

- Випадковий UUID використовується для завантаження офлайн-карт із серверів OsmAnd для контролю раціонального використання серверних ресурсів, прогнозування використання трафіку та надання загальних щомісячних звітів про завантаження карт.
- UUID змінюється кожні 3 місяці.  
- Починаючи з OsmAnd версії 4.3, ви можете вимкнути збір даних користувача під час використання застосунку OsmAnd. Тоді UUID не буде надсилатися з жодним запитом на завантаження.  
- Більше інформації можна прочитати в [Умовах використання (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Історія {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Застосунок записує історію раніше введених даних (історію) у наступних категоріях: [Пошук](../search/search-history.md), [Навігація](../navigation/setup/route-navigation.md#history-of-previous-routes), [Маркери карти](../personal/markers.md#history). За допомогою перемикача на відповідній вкладці ви можете *Увімкнути / Вимкнути* ведення журналу для певних категорій записів. Ви також можете [керувати](#history) (переглядати, видаляти та ділитися) раніше записаними даними.  

- ***Резервне копіювання як файл*** (*Android*) або ***Експорт*** (*iOS*) використовується для створення [файлу резервної копії](../personal/import-export.md#export) вашої історії.
- ***Очистити всю історію*** (*Android*) або ***Видалити всю історію*** (*iOS*) використовується для видалення всіх записів історії, записаних до моменту видалення.

<br/>

**Поділитися та видалити історію.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Ви можете видалити один або кілька елементів зі списку історії або поділитися ними як файлом (для доступу до цих функцій *в iOS* торкніться кнопки ***Редагувати***).  
- Щоб видалити або експортувати кілька записів одночасно, виберіть прапорці поруч із потрібними записами та торкніться кнопок **Експорт** або **Видалити**.  


### Проксі {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Налаштування **<Translate android="true" ids="proxy_pref_title"/>** дозволяє налаштувати [HTTP-проксі](https://en.wikipedia.org/wiki/Proxy_server) для всіх мережевих запитів. Ви можете встановити *Хост проксі* та *Порт проксі*.  


## Інше {#other}

У цьому розділі налаштувань OsmAnd ви можете налаштувати сповіщення, які ви отримуєте, службу визначення місцезнаходження та спосіб збереження налаштувань вашого застосунку.

### Діалоги та сповіщення {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="dialogs_and_notifications_title"/>** дозволяє вмикати/вимикати спливаючі вікна, діалоги та сповіщення.  

- *Повідомлення при запуску* включає акції, вікторини, події тощо.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) пригнічує відображення знижок на застосунки та повідомлень про спеціальні місцеві події.
- [*Діалог завантаження карти*](../start-with/download-maps.md#download) інформує вас про те, що можна завантажити певні карти.


### Джерело місцезнаходження {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*Тільки Android*)

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd надає вам вибір служб для визначення вашого місцезнаходження. Рекомендується прочитати більше інформації про [Дозвіл на місцезнаходження](../start-with/first-steps.md#permission-to-access-the-location) та [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) для цього розділу.

***Android***:

- Ви можете вибрати, які служби *Google Play* або *Android API* OsmAnd використовуватиме для визначення вашого місцезнаходження. Це може бути корисно для пристроїв без *Google Play Services* або у випадку неточного місцезнаходження чи даних про висоту під час запису треків.
- OsmAnd отримує дані з ресурсів *Google Fused Location Providers* та *Android GPS and Network Providers*. Ви можете перемкнути **<Translate android="true" id="location_source" />** в: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Система iOS використовує *iOS API* для визначення місцезнаходження.  
- Усі налаштування місцезнаходження OsmAnd можна знайти в налаштуваннях пристрою iOS: *Налаштування → OsmAnd maps → Місцезнаходження*  
- Конфіденційність служб місцезнаходження: *Налаштування → Конфіденційність → Служби місцезнаходження*


### Автоматичне резервне копіювання {#auto-backup}

<InfoAndroidOnly />

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android або OsmAnd Cloud можуть зберігати ваші дані та налаштування застосунку.

- За замовчуванням ваші *налаштування OsmAnd* та маркери карти [*Вибране*](../personal/favorites.md#automatic-favorites-backup) автоматично резервуються системою Android. Це дозволяє відновлювати їх на нових пристроях або після перевстановлення застосунку.

- Зверніть увагу, що розмір резервної копії обмежений *25 МБ*.

- Щоб знайти файли резервних копій, використовуйте сторонній застосунок для керування файлами.  
    *ПРИМІТКА: Ви можете знайти файли резервних копій за допомогою файлового менеджера Android: Android → data → net.osmand → files → backup, але майте на увазі, що в останніх версіях Android доступ до системних каталогів обмежений.*  

**Якщо ви використовуєте [*OsmAnd Cloud*](../personal/osmand-cloud.md), рекомендується деактивувати цю опцію резервного копіювання за замовчуванням, щоб запобігти будь-якій плутанині під час перевстановлення.**


## Юридична інформація {#legal}

OsmAnd може [попереджати вас про камери контролю швидкості](../navigation/guidance/navigation-settings.md#screen-alerts), але лише якщо це дозволено законами вашої країни.


### Видалити камери контролю швидкості {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Це налаштування дозволяє активувати або деактивувати POI з камерами контролю швидкості, для внесення змін необхідно перезапустити застосунок OsmAnd.
  
У деяких країнах або регіонах використання застосунків для попередження про камери контролю швидкості є незаконним. Ви повинні зробити вибір залежно від законів вашої країни. Виберіть **Залишити активним**, і ви отримуватимете сповіщення та повідомлення про камери контролю швидкості. Виберіть **Видалити**, і всі дані, пов'язані з камерами контролю швидкості, такі як попередження, сповіщення та POI, будуть видалені, доки ви повністю не перевстановите OsmAnd.  

Прочитайте про сповіщення про камери контролю швидкості на вашому маршруті в статті Віджети навігації в розділі *[Віджет сповіщень](../widgets/nav-widgets.md#alert-widget)*.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

### Вирішення проблем {#troubleshooting}

- **Android 12+ (змінити папку зберігання)**. Нові рекомендації щодо доступу до сховища були реалізовані у версіях Android 11-12. Ці зміни особливо впливають на зберігання карт на SD-картах, що призводить до значно повільнішої продуктивності доступу до файлів та суворіших обмежень доступу до папок SD-карти на Android 11 та 12. Щоб дізнатися, як вирішити цю проблему, дивіться розділ [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Джерело місцезнаходження для проблем з висотою**. Google Play змінив свою політику, і для відповідності OsmAnd, починаючи з версії 3.9, повинен використовувати Google Play Services для отримання виправлень місцезнаходження під час роботи у фоновому режимі. Докладніше дивіться в розділі [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).