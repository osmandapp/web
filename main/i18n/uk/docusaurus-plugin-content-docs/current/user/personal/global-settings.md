---
source-hash: 51654f0372d25b1e23ebe1fe1f87693cdca3c6347b3cbd054f37d07a1e769578
sidebar_position: 3
title:  Глобальні налаштування
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

**Глобальні налаштування** — це загальні [налаштування](../personal/profiles.md) для всіх профілів у застосунку OsmAnd. Це базові налаштування для системи OsmAnd, і будь-які внесені зміни вплинуть на весь застосунок.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Profiles General Settings Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Profiles General Settings iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Загальні {#general}

Цей розділ містить основні налаштування OsmAnd, такі як вибір [профілю](#default-profile) під час завантаження застосунку, вибір [механізму візуалізації](#map-rendering-engine) та [папки](#data-storage-folder), де зберігатимуться дані.  


### Профіль за замовчуванням {#default-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Default profile Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd використовує профіль за замовчуванням, *Перегляд мапи*, як перший профіль для нових користувачів, і якщо цей профіль був обраний вами, він буде використовуватися щоразу при перезапуску застосунку. Ви можете вибрати будь-який профіль зі списку за замовчуванням, включаючи *Останній використаний* та *Перегляд мапи*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Дозволяє вибрати профіль, який використовувався останнім.
- **<Translate android="true" ids="settings_preset"/>**. Ви обираєте профіль, який буде використовуватися при запуску OsmAnd. Його можна змінити в [налаштуваннях](../personal/profiles.md) застосунку.  


### Профіль CarPlay {#carplay-profile}

:::caution ТІЛЬКИ ДЛЯ iOS
Ця функція доступна для версії застосунку OsmAnd для iOS.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![General Settings Default profile Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) використовується при підключенні до [програмного забезпечення CarPlay](https://support.apple.com/en-gb/HT205634) вашого автомобіля та допомагає максимально використовувати оптимізовану версію застосунку OsmAnd, використовуючи аудіо- та відеосистеми для відображення даних на вашому телефоні.


### Папка для зберігання даних {#data-storage-folder}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Profiles Storage Settings Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

<<<<<<< HEAD:main/i18n/ua/docusaurus-plugin-content-docs/current/user/personal/global-settings.md
1. **Пам'ять пристрою** показує, скільки вільного місця залишилося на вашому пристрої. Натисніть на поле, щоб отримати доступ до меню [*Карти та ресурси*](../personal/maps-resources.md#maps--resources), де ви можете переглядати та керувати детальною інформацією про ваші дані OsmAnd.
=======
1. **Пам'ять пристрою** показує, скільки вільного місця залишилося на вашому пристрої. Натисніть на поле, щоб отримати доступ до меню [*Мапи та ресурси*](../personal/maps-resources.md#maps-and-resources), де ви можете переглядати та керувати детальною інформацією про ваші дані OsmAnd.
>>>>>>> refs/remotes/origin/main:main/i18n/uk/docusaurus-plugin-content-docs/current/user/personal/global-settings.md

2. У **<Translate android="true" ids="change_data_storage_folder"/>** ви можете вибрати папку для збереження даних OsmAnd на вашому пристрої.  

    - *Внутрішня пам'ять застосунку*. Тільки застосунок OsmAnd має доступ до своїх даних, а жоден із зовнішніх застосунків не має.
    - *Спільна пам'ять*. Більше не доступна.
    - *Зовнішнє сховище 1*. Тільки 1 застосунок OsmAnd має доступ, а також застосунки адміністратора та USB.
    - *Багатокористувацьке сховище*. Тільки 1 застосунок OsmAnd має доступ, але він спільно використовується кількома користувачами Android.
    - *Вказано вручну*. Залежить від шляху.

:::note Android 12+ (зміна папки зберігання)
Нові правила доступу до сховища були реалізовані у версіях Android 11-12. Детальніше дивіться в розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Пристрій iOS → Налаштування → Загальні → Сховище iPhone → OsmAnd Maps*  

![General Settings storage iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Файли OsmAnd видно в застосунку [*Файли*](https://apps.apple.com/us/app/files/id1232058109). Ви можете отримати доступ до всіх файлів OsmAnd: [треків](../personal/tracks/manage-tracks.md), [обраних](../personal/favorites.md), [мап](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Для цього перейдіть за наступним шляхом:  

Перейдіть до: *Файли → На моєму iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![General Settings storage iOS](@site/static/img/personal/profiles/files-1.png) ![General Settings storage iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Механізм візуалізації мапи {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (тільки для Android)*

![General Settings engine rendering Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- У версії застосунку для **Android** ви можете перемикатися між візуалізацією мапи Версії 1, спочатку реалізованою в застосунку OsmAnd, та Версією 2, яка використовує програмний інтерфейс OpenGL (Open Graphics Library) для візуалізації дво- та тривимірних графічних об'єктів.

- Версія для **iOS** використовує тільки OpenGL для візуалізації мапи.


| Функції | Версія 1 | Версія 2 (OpenGL) |
|:---|:--- |:--- |
| Кросплатформність | Не використовується у версії для iOS. | Підходить для обох версій. |
| Залежність від GPU / CPU | Рекомендовано для пристроїв з низькою продуктивністю або застарілих пристроїв. | Потужний механізм візуалізації. <br /> Доступно тільки для [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) та пізніших версій, а також у тестовому режимі для [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D режим | Можна переглядати мапу в 2D, і можна змінити кут огляду, щоб отримати [3D вигляд](../widgets/map-buttons.md#3d-mode). | Можна переглядати мапу в 2D та [3D](../widgets/map-buttons.md#3d-mode). |
| Відображення мапи | Вся мапа візуалізується як набір плиток, а маркери, лінії та текст вже знаходяться всередині цих плиток. | Спочатку візуалізується весь пакет плиток, а потім на мапу застосовуються доступні символи, [шар за шаром](../../technical/algorithms/map-rendering-layers.md). |
| Прозоре накладання / підкладання символів | Підтримує всі налаштування. | Не підтримує растровий шар поверх векторного тексту. |
| [3D рельєф](../map/raster-maps.md#3d-relief) | Не підтримується. | Ця функція візуалізує рельєф на мапі, додаючи інформацію про висоту до звичайної 2D мапи, що створює 3D та глибинний ефект. |
| [3D треки](../map/tracks/appearance.md) | Не підтримується. | Ця функція дозволяє відображати треки за висотою над рівнем моря. |
| [Онлайн мапа](../plugins/online-map.md) | Не підтримує відображення контурних ліній, якщо джерелом мапи є будь-яка онлайн плитка мапи. | Коли джерелом мапи є онлайн мапа, також використовуються 3D мапи, і підтримується відображення контурних ліній на мапі. |
| [Плагін погоди](../plugins/weather.md) | Не можна використовувати цей плагін. | Зручно використовувати з плагіном. |  

Зображення для 3D вигляду мапи завантажується плитка за плиткою, потім всі символи. Швидкість візуалізації мапи залежить від кількості 2D та 3D графічних об'єктів на ній, і безпосередньо від продуктивності вашого обладнання. Тому Версія 2 (OpenGL) не може використовуватися на пристроях з низькою продуктивністю.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="rendering"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="rendering"/></td>
    </tr>
</table>


## Конфіденційність та безпека {#privacy-and-security}

OsmAnd дозволяє вам вибрати, чи [ділитися своєю активністю в застосунку](#analytics) та [ідентифікаторами](#identifiers) (*тільки для Android*), можливість редагувати свою [історію](#history) та використовувати [проксі](#proxy) (*тільки для Android*) на ваш вибір.  

:::note
Більше інформації можна знайти в [*Політиці конфіденційності та безпеки OsmAnd*](../../legal/privacy-policy.md)
:::

### Аналітика {#analytics}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![General Settings Analytics Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![General Settings Send anonymous data iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) або **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) дозволяє вам вибрати, чи надавати анонімні дані про *Завантажені мапи* та *Відвідані екрани* (*Android*).  

:::note
Дані про ваше місцезнаходження або місця, які ви переглядаєте на мапі, не збираються.
:::  

### Ідентифікатори {#identifiers}

<InfoAndroidOnly />

*Меню → Налаштування → Налаштування OsmAnd → Конфіденційність та безпека → Ідентифікатори*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

**UUID** (*Унікальний ідентифікатор користувача*) генерується для кожної інсталяції застосунку OsmAnd та надсилається на сервери під час завантаження мапи.

- Випадковий UUID використовується для завантаження офлайн-мап із серверів OsmAnd для контролю раціонального використання ресурсів сервера, прогнозування використання трафіку та надання загальних щомісячних звітів про завантаження мап.
- UUID змінюється кожні 3 місяці.  
- Починаючи з версії OsmAnd 4.3, ви можете вимкнути збір даних користувача під час використання застосунку OsmAnd. Тоді UUID не буде надсилатися з жодним запитом на завантаження.  
- Більше інформації можна прочитати в [Умовах використання (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Історія {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Застосунок записує історію раніше введених даних (історію) за наступними категоріями: [Пошук](../search/search-history.md), [Навігація](../navigation/setup/route-navigation.md#history-of-previous-routes), [Маркери мапи](../personal/markers.md#history). Використовуючи перемикач на відповідній вкладці, ви можете *Увімкнути / Вимкнути* ведення журналу для певних категорій записів. Ви також можете [керувати](#history) (переглядати, видаляти та ділитися) раніше записаними даними.  

- ***Резервна копія як файл*** (*Android*) або ***Експорт*** (*iOS*) використовується для створення [файлу резервної копії](../personal/import-export.md#export) вашої історії.
- ***Очистити всю історію*** (*Android*) або ***Видалити всю історію*** (*iOS*) використовується для видалення всіх записів історії, записаних до моменту видалення.

<br/>

**Поділитися та видалити історію.**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings History Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![General Settings History IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Ви можете видалити один або кілька елементів зі списку історії або поділитися ними як файлом (для доступу до цих функцій *в iOS*, натисніть кнопку ***Редагувати***).  
- Щоб видалити або експортувати кілька записів одночасно, виберіть прапорці поруч із потрібними записами та натисніть кнопки **Експорт** або **Видалити**.  


### Проксі {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![General Settings Proxy Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Налаштування **<Translate android="true" ids="proxy_pref_title"/>** дозволяє налаштувати [HTTP-проксі](https://en.wikipedia.org/wiki/Proxy_server) для всіх мережевих запитів. Ви можете встановити *Хост проксі* та *Порт проксі*.  


## Інше {#other}

У цьому розділі налаштувань OsmAnd ви можете налаштувати сповіщення, які ви отримуєте, службу визначення місцезнаходження та спосіб збереження налаштувань вашого застосунку.

### Діалоги та сповіщення {#dialogs-and-notifications}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![General Settings notifications Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![General Settings Dialogs iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="dialogs_and_notifications_title"/>** дозволяє увімкнути/вимкнути спливаючі вікна, діалоги та сповіщення.  

- *Повідомлення при запуску* включає акції, вікторини, події тощо.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) пригнічує відображення знижок на застосунок та спеціальних повідомлень про місцеві події.
- [*Діалог завантаження мапи*](../start-with/download-maps.md#download) інформує вас про те, що можна завантажити певні мапи.


### Джерело місцезнаходження {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*тільки для Android*)

![Auto-backup](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd надає вам вибір служб для визначення вашого місцезнаходження. Рекомендується прочитати більше інформації про [Дозвіл на доступ до місцезнаходження](../start-with/first-steps.md#permission-to-access-the-location) та [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) для цього розділу.

***Android***:

- Ви можете вибрати, які служби *Google Play* або *Android API* OsmAnd використовуватиме для визначення вашого місцезнаходження. Це може бути корисно для пристроїв без *Google Play Services* або у випадку неточних даних про місцезнаходження чи висоту під час запису треків.
- OsmAnd отримує дані з ресурсів *Google Fused Location Providers* та *Android GPS and Network Providers*. Ви можете перемкнути **<Translate android="true" id="location_source" />** в: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Система iOS використовує *iOS API* для визначення місцезнаходження.  
- Усі налаштування місцезнаходження OsmAnd можна знайти в налаштуваннях пристрою iOS: *Налаштування → OsmAnd maps → Місцезнаходження*  
- Конфіденційність служб місцезнаходження: *Налаштування → Конфіденційність → Служби місцезнаходження*


### Автоматичне резервне копіювання {#auto-backup}

<InfoAndroidOnly />

![General Settings notifications Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android або OsmAnd Cloud можуть зберігати ваші дані та налаштування застосунку.

- За замовчуванням ваші *Налаштування OsmAnd* та маркери мапи [*Обрані*](../personal/favorites.md#automatic-favorites-backup) автоматично резервуються системою Android. Це дозволяє відновити їх на нових пристроях або після перевстановлення застосунку.

- Зверніть увагу, що розмір резервної копії обмежений *25 МБ*.

- Щоб знайти файли резервної копії, використовуйте сторонній застосунок для керування файлами.  
    *ПРИМІТКА: Ви можете знайти файли резервної копії за допомогою файлового менеджера Android: Android → data → net.osmand → files → backup, але майте на увазі, що в останніх версіях Android доступ до системних каталогів обмежений.*  

**Якщо ви використовуєте [*OsmAnd Cloud*](../personal/osmand-cloud.md), рекомендується деактивувати цю опцію резервного копіювання за замовчуванням, щоб уникнути плутанини під час перевстановлення.**


## Правові питання {#legal}

OsmAnd може [попереджати вас про камери контролю швидкості](../navigation/guidance/navigation-settings.md#screen-alerts), але тільки якщо це дозволено законодавством вашої країни.


### Видалити камери контролю швидкості {#uninstall-speed-cameras}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![General Settings Cameras Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Це налаштування дозволяє активувати або деактивувати POI з камерами контролю швидкості, для внесення змін необхідно перезапустити застосунок OsmAnd.
  
У деяких країнах або регіонах використання застосунків для попередження про камери контролю швидкості є незаконним. Ви повинні зробити вибір залежно від законів вашої країни. Виберіть **Залишити активним**, і ви отримуватимете сповіщення та попередження про камери контролю швидкості. Виберіть **Видалити**, і всі дані, пов'язані з камерами контролю швидкості, такі як попередження, сповіщення та POI, будуть видалені до повного перевстановлення OsmAnd.  

Прочитайте про сповіщення про камери контролю швидкості на вашому маршруті в статті Віджети навігації в розділі *[Віджет сповіщень](../widgets/nav-widgets.md#alert-widget)*.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірної палітри](../personal/color-palette-schemes.md)

### Вирішення проблем {#troubleshooting}

- **Android 12+ (зміна папки зберігання)**. Нові правила доступу до сховища були реалізовані у версіях Android 11-12. Ці зміни особливо впливають на зберігання мап на SD-картах, що призводить до значно повільнішої продуктивності доступу до файлів та суворіших обмежень доступу до папок SD-карти на Android 11 та 12. Щоб дізнатися, як вирішити цю проблему, дивіться розділ [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Джерело місцезнаходження для проблем з висотою**. Google Play змінив свою політику, і для відповідності OsmAnd, починаючи з версії 3.9, повинен використовувати Google Play Services для отримання даних про місцезнаходження під час роботи у фоновому режимі. Більше інформації читайте в розділі [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).

> *Останнє оновлення: листопад 2024*