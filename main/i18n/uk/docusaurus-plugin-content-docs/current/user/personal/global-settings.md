---
source-hash: 03882f509a8ca4795f4ea6dfab66cd17c33b043531b8429ccab85994d6199aa2
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

**Глобальні налаштування** — це загальні [налаштування](../personal/profiles.md) для всіх профілів у додатку OsmAnd. Це базові налаштування для системи OsmAnd, і будь-які внесені зміни впливатимуть на весь додаток.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Загальні налаштування профілів Android](@site/static/img/personal/profiles/global_sett_1_andr.png)  ![Загальні налаштування профілів Android](@site/static/img/personal/profiles/global_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings"/>*  

![Загальні налаштування профілів iOS](@site/static/img/personal/profiles/general_settings_1_ios.png)

</TabItem>

</Tabs>


## Загальні {#general}

Цей розділ містить основні налаштування OsmAnd, такі як вибір [профілю](#default-profile) при завантаженні програми, вибір [рушія рендерингу мапи](#map-rendering-engine) та [папки](#data-storage-folder), де будуть зберігатися дані.  


### Профіль за замовчуванням {#default-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/default_profile_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/default_profile_ios.png)

</TabItem>

</Tabs>

OsmAnd використовує профіль за замовчуванням, *Перегляд мапи*, як перший профіль для нових користувачів, і якщо цей профіль був обраний вами, він буде використовуватися кожного разу при перезапуску програми. Ви можете вибрати будь-який профіль зі списку за замовчуванням, включаючи *Останній використаний* та *Перегляд мапи*.

- **<Translate android="true" ids="shared_string_last_used"/>**. Дозволяє вибрати профіль, який використовувався останнім.
- **<Translate android="true" ids="settings_preset"/>**. Ви вибираєте профіль, який буде використовуватися при запуску OsmAnd. Його можна змінити в [налаштуваннях](../personal/profiles.md) програми.  


### Профіль CarPlay {#carplay-profile}

:::caution ТІЛЬКИ для iOS
Ця функція доступна для версії програми OsmAnd для iOS.
:::

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,carplay_profile"/>*  

![Загальні налаштування Профіль за замовчуванням Android](@site/static/img/personal/profiles/CarPlay_ios.png)  

[**<Translate ios="true" ids="carplay_profile"/>**](../navigation/car-play.md) використовується при підключенні до [програмного забезпечення CarPlay](https://support.apple.com/en-gb/HT205634) вашого автомобіля і допомагає вам максимально використовувати оптимізовану версію програми OsmAnd, використовуючи аудіо- та відеосистеми для відображення даних на вашому телефоні.


### Папка для зберігання даних {#data-storage-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,application_dir"/>*

![Налаштування сховища профілів Android](@site/static/img/personal/profiles/settings_data_storage_andr.png)  

1. **Пам'ять пристрою** показує, скільки вільного місця залишилося на вашому пристрої. Торкніться поля, щоб отримати доступ до меню [*Мапи та ресурси*](../personal/maps-resources.md#local-menu), де ви можете переглянути та керувати детальною інформацією про ваші дані OsmAnd.

2. У **<Translate android="true" ids="change_data_storage_folder"/>** ви можете вибрати папку для збереження даних OsmAnd на вашому пристрої.  

    - *Внутрішня пам'ять додатку*. Тільки додаток OsmAnd має доступ до своїх даних, і жоден із зовнішніх додатків.
    - *Спільна пам'ять*. Більше не доступно.
    - *Зовнішнє сховище 1*. Доступ має лише 1 додаток OsmAnd, а також додатки адміністратора та USB.
    - *Сховище для кількох користувачів*. Доступ має лише 1 додаток OsmAnd, але він спільний для кількох користувачів Android.
    - *Вказано вручну*. Залежить від шляху.

:::note Android 12+ (зміна папки для зберігання)
У версіях Android 11-12 були впроваджені нові правила доступу до сховища. Детальніше дивіться у розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *Пристрій iOS → Налаштування → Загальні → Сховище iPhone → OsmAnd Maps*  

![Загальні налаштування сховища iOS](@site/static/img/personal/profiles/general_settings_storage_ios.png)  

Файли OsmAnd видимі в додатку [*Файли*](https://apps.apple.com/us/app/files/id1232058109). Ви можете отримати доступ до всіх файлів OsmAnd: [треків](../personal/tracks/manage-tracks.md), [обраних місць](../personal/favorites.md), [мап](../personal/maps-resources.md), [rendering.xml](../../technical/build-osmand/rendering.md), [routing.xmlustom](../../technical/build-osmand/routing.md). Для цього дотримуйтесь наступного шляху:  

Перейдіть до: *Файли → На моєму iPhone → OsmAnd Maps*

<!-- ![Files app iOS](@site/static/img/personal/storage/files_app_ios.png) ![Files app iOS](@site/static/img/personal/storage/files_app_1_ios.png)  -->

![Загальні налаштування сховища iOS](@site/static/img/personal/profiles/files-1.png) ![Загальні налаштування сховища iOS](@site/static/img/personal/profiles/files-2.png)

</TabItem>

</Tabs>


### Рушій рендерингу мапи {#map-rendering-engine}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,map_rendering_engine"/> (лише для Android)*

![Загальні налаштування рушія рендерингу Android](@site/static/img/personal/global-settings/rendering_engine_andr.png)  

- У версії програми для **Android** ви можете перемикатися між рендерингом мапи версії 1, спочатку реалізованим у додатку OsmAnd, та версією 2, яка використовує програмний інтерфейс OpenGL (Open Graphics Library) для рендерингу дво- та тривимірних графічних об'єктів.

- Версія для **iOS** використовує лише OpenGL для рендерингу мапи.


| Особливості | Версія 1 | Версія 2 (OpenGL) |
|:---|:--- |:--- |
| Кросплатформеність | Не використовується у версії для iOS. | Підходить для обох версій. |
| Залежність від GPU / CPU | Рекомендовано для пристроїв з низькою продуктивністю або застарілих пристроїв. | Потужний рушій рендерингу. <br /> Доступно лише для [OsmAnd 4.3](https://docs.osmand.net/blog/osmand-android-4-3-released) та пізніших версій, а також у тестовому режимі для [OsmAnd 4.2](https://docs.osmand.net/blog/osmand-android-4-2-released). |
| 3D-режим | Можна переглядати мапу в 2D, а також змінювати кут огляду для отримання [3D-вигляду](../widgets/map-buttons.md#3d-mode). | Ви можете переглядати мапу в 2D та [3D](../widgets/map-buttons.md#3d-mode). |
| Відображення мапи | Вся мапа рендериться як набір тайлів, а маркери, лінії та текст вже знаходяться всередині цих тайлів. | Спочатку рендериться весь пакет тайлів, а потім доступні символи наносяться на мапу, [шар за шаром](../../technical/algorithms/map-rendering-layers.md). |
| Накладання/підкладання прозорих символів | Підтримує всі налаштування. | Не підтримує растровий шар поверх векторного тексту. |
| [3D-рельєф](../map/raster-maps.md#3d-relief) | Не підтримується. | Ця функція візуалізує рельєф на мапі, додаючи інформацію про висоту до звичайної 2D-мапи, що створює ефект 3D та глибини. |
| [3D-треки](../map/tracks/appearance.md) | Не підтримується. | Ця функція дозволяє відображати треки за висотою над рівнем моря. |
| [Онлайн-мапа](../plugins/online-map.md) | Не підтримує відображення ліній контуру, якщо джерелом мапи є будь-яка онлайн-тайлова мапа. | Коли джерелом мапи є онлайн-мапа, також використовуються 3D-мапи, і підтримується відображення ліній контуру на мапі. |
| [Плагін "Погода"](../plugins/weather.md) | Ви не можете використовувати цей плагін. | Зручно використовувати з плагіном. |  

Зображення для 3D-вигляду мапи завантажується тайл за тайлом, а потім всі символи. Швидкість рендерингу мапи залежить від кількості 2D та 3D графічних об'єктів на ній, а також безпосередньо від продуктивності вашого обладнання. Тому версія 2 (OpenGL) не може використовуватися на пристроях з низькою продуктивністю.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_1_andr.png').default} alt="рендеринг"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_2_andr.png').default} alt="рендеринг"/></td>
        <td><img src={require('@site/static/img/personal/global-settings/rendering_opengl_3_andr.png').default} alt="рендеринг"/></td>
    </tr>
</table>


## Конфіденційність та безпека {#privacy-and-security}

OsmAnd дозволяє вам вибирати, чи *[ділитися вашою активністю в додатку](#analytics)* та [ідентифікаторами](#identifiers) (*лише для Android*) в додатку, можливість редагувати вашу *[історію](#history)* та використовувати *[проксі](#proxy)* (*лише для Android*) на ваш вибір.  

:::note
Більше інформації можна знайти в [*Політиці конфіденційності та безпеки OsmAnd*](../../legal/privacy-policy.md)
:::

### Аналітика {#analytics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,analytics_pref_title"/>*  

![Загальні налаштування Аналітика Android](@site/static/img/personal/profiles/general_settings_analitics_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,send_anonymous_data"/>*

![Загальні налаштування Надсилати анонімні дані iOS](@site/static/img/personal/profiles/general_settings_send_anonymous_data_ios.png)

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="analytics_pref_title"/>** (*Android*) або **<Translate ios="true" ids="send_anonymous_data"/>** (*iOS*) дозволяє вам вибирати, чи надавати анонімні дані про *Завантажені мапи* та *Відвідані екрани* (*Android*).  

:::note
Дані про ваше місцезнаходження або місця, які ви переглядаєте на мапі, не збираються.
:::  

### Ідентифікатори {#identifiers}

<InfoAndroidOnly />

*Меню → Налаштування → Налаштування OsmAnd → Конфіденційність та безпека → Ідентифікатори*  

![UUID Android](@site/static/img/personal/profiles/uuid_android.png)  

**UUID** (*Унікальний ідентифікатор користувача*) генерується для кожної інсталяції програми OsmAnd і надсилається на сервери під час завантаження мапи.

- Випадковий UUID використовується для завантаження офлайн-мап з серверів OsmAnd для контролю раціонального використання ресурсів сервера, прогнозування використання трафіку та надання загальних щомісячних звітів про завантаження мап.
- UUID змінюється кожні 3 місяці.  
- Починаючи з версії OsmAnd 4.3, ви можете вимкнути збір даних користувача при використанні програми OsmAnd. Тоді UUID не буде надсилатися з жодним запитом на завантаження.  
- Ви можете прочитати більше інформації в [Умовах використання (ToS)](../../legal/terms-of-use.md#6-unique-user-indentifier).


### Історія {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Загальні налаштування Історія Android](@site/static/img/personal/profiles/general_settings_history_android.png) ![Загальні налаштування Історія Android](@site/static/img/personal/profiles/general_settings_history_android_new_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

![Загальні налаштування Історія IOS](@site/static/img/personal/profiles/history_settings_ios.png) ![Загальні налаштування Історія IOS](@site/static/img/personal/profiles/history_settings_ios_4.png)  

</TabItem>

</Tabs>  

Додаток записує історію раніше введених даних (історію) в наступних категоріях: [Пошук](../search/search-history.md), [Навігація](../navigation/setup/route-navigation.md#history-of-previous-routes), [Маркери на мапі](../personal/markers.md#history). За допомогою перемикача на відповідній вкладці ви можете *Увімкнути / Вимкнути* запис для певних категорій записів. Ви також можете [керувати](#history) (переглядати, видаляти та ділитися) раніше записаними даними.  

- ***Резервне копіювання у файл*** (*Android*) або ***Експорт*** (*iOS*) використовується для створення [файлу резервної копії](../personal/import-export.md#export) вашої історії.
- ***Очистити всю історію*** (*Android*) або ***Видалити всю історію*** (*iOS*) використовується для видалення всіх записів історії, зроблених до моменту видалення.

<br/>

**Поділитися та видалити історію.**

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Загальні налаштування Історія Android](@site/static/img/personal/profiles/general_settings_history_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Загальні налаштування Історія IOS](@site/static/img/personal/profiles/history_settings_ios_2.png) ![Загальні налаштування Історія IOS](@site/static/img/personal/profiles/history_settings_ios_3.png)

</TabItem>

</Tabs>

- Ви можете видалити один або кілька елементів зі списку історії або поділитися ними як файлом (для доступу до цих функцій *в iOS*, торкніться кнопки ***Редагувати***).  
- Щоб видалити або експортувати кілька записів одночасно, встановіть прапорці біля потрібних записів і торкніться кнопок **Експорт** або **Видалити**.  


### Проксі {#proxy}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,proxy_pref_title"/>*  

![Загальні налаштування Проксі Android](@site/static/img/personal/profiles/general_settings_proxy_android.png)

Налаштування **<Translate android="true" ids="proxy_pref_title"/>** дозволяє налаштувати [HTTP-проксі](https://en.wikipedia.org/wiki/Proxy_server) для всіх мережевих запитів. Ви можете встановити *Хост проксі* та *Порт проксі*.  


## Інше {#other}

У цьому розділі налаштувань OsmAnd ви можете налаштувати сповіщення, які ви отримуєте, службу визначення місцезнаходження та спосіб збереження налаштувань вашого додатку.

### Діалоги та сповіщення {#dialogs-and-notifications}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Загальні налаштування сповіщень Android](@site/static/img/personal/profiles/general_settings_notifications_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Загальні налаштування Діалоги iOS](@site/static/img/personal/profiles/general_settings_dialogs_2_ios.png)  

</TabItem>

</Tabs>

Налаштування **<Translate android="true" ids="dialogs_and_notifications_title"/>** дозволяє вмикати/вимикати спливаючі вікна, діалоги та сповіщення.  

- *Повідомлення при запуску* включає акції, вікторини, події та інше.
- *<Translate ios="true" ids="do_not_show_discount"/>* (*iOS*) пригнічує відображення знижок на додаток та спеціальних місцевих подій.
- [*Діалог завантаження мапи*](../start-with/download-maps.md#downloading-maps) інформує вас про те, що можна завантажити певні мапи.


### Джерело місцезнаходження {#location-source}

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />* (*лише для Android*)

![Автоматичне резервне копіювання](@site/static/img/personal/profiles/location_source_andr.png)

OsmAnd надає вам вибір сервісів для визначення вашого місцезнаходження. Рекомендується прочитати більше інформації про [Дозвіл на доступ до місцезнаходження](../start-with/first-steps.md#permission-to-access-the-location) та [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services) для цього розділу.

***Android***:

- Ви можете вибрати, які сервіси *Google Play* або *Android API* буде використовувати OsmAnd для визначення вашого місцезнаходження. Це може бути корисно для пристроїв без *Google Play Services* або у випадку неточних даних про місцезнаходження чи висоту при записі треків.
- OsmAnd отримує дані з ресурсів *Google Fused Location Providers* та *Android GPS and Network Providers*. Ви можете перемкнути **<Translate android="true" id="location_source" />** у: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,location_source" />*.

***iOS***:

- Система iOS використовує *iOS API* для визначення місцезнаходження.  
- Усі налаштування для місцезнаходження OsmAnd можна знайти в налаштуваннях пристрою iOS: *Налаштування → OsmAnd maps → Місцезнаходження*  
- Конфіденційність служб геолокації: *Налаштування → Конфіденційність → Служби геолокації*


### Автоматичне резервне копіювання {#auto-backup}

<InfoAndroidOnly />

![Загальні налаштування сповіщень Android](@site/static/img/personal/profiles/auto_backup_2_andr.png)

- Android або OsmAnd Cloud можуть зберігати ваші дані та налаштування додатку.

- За замовчуванням, ваші *налаштування OsmAnd* та маркери мапи [*Обрані*](../personal/favorites.md#automatic-favorites-backup) автоматично резервуються системою Android. Це дозволяє вам відновити їх на нових пристроях або після перевстановлення додатку.

- Зверніть увагу, що розмір резервної копії обмежений *25 МБ*.

- Щоб знайти файли резервних копій, використовуйте сторонній файловий менеджер.  
    *ПРИМІТКА: Ви можете знайти файли резервних копій за допомогою файлового менеджера Android: Android → data → net.osmand → files → backup, але майте на увазі, що в останніх версіях Android доступ до системних каталогів обмежений.*  

**Якщо ви використовуєте [*OsmAnd Cloud*](../personal/osmand-cloud.md), рекомендується деактивувати цю опцію резервного копіювання за замовчуванням, щоб уникнути плутанини під час перевстановлення.**


## Правова інформація {#legal}

OsmAnd може [попереджати вас про камери контролю швидкості](../navigation/guidance/navigation-settings.md#screen-alerts), але тільки якщо це дозволено законодавством вашої країни.


### Видалення камер контролю швидкості {#uninstall-speed-cameras}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Загальні налаштування Камери Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_andr.png)   ![Загальні налаштування Камери Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  

![Загальні налаштування Камери Android](@site/static/img/personal/profiles/uninstall_speed_camera_1_ios.png)   ![Загальні налаштування Камери Android](@site/static/img/personal/profiles/uninstall_speed_camera_2_ios.png)

</TabItem>

</Tabs>

Це налаштування дозволяє активувати або деактивувати POI з камерами контролю швидкості, вам потрібно перезапустити додаток OsmAnd, щоб зміни набули чинності.
  
У деяких країнах або регіонах використання додатків для попередження про камери контролю швидкості є незаконним. Ви повинні зробити вибір залежно від законодавства вашої країни. Виберіть **Залишити активним**, і ви будете отримувати сповіщення та повідомлення про камери контролю швидкості. Виберіть **Видалити**, і всі дані, пов'язані з камерами контролю швидкості, такі як попередження, сповіщення та POI, будуть видалені, доки ви повністю не перевстановите OsmAnd.  

Прочитайте про сповіщення про камери контролю швидкості на вашому маршруті в статті Віджети навігації в розділі *[Віджет сповіщень](../widgets/nav-widgets.md#alert-widget)*.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми колірних палітр](../personal/color-palette-schemes.md)

### Вирішення проблем {#troubleshooting}

- **Android 12+ (зміна папки для зберігання)**. У версіях Android 11-12 були впроваджені нові правила доступу до сховища. Ці зміни особливо впливають на зберігання мап на SD-картах, що призводить до значно повільнішої продуктивності доступу до файлів та суворіших обмежень доступу до папок на SD-карті на Android 11 та 12. Про те, як вирішити цю проблему, дивіться у розділі [**Вирішення проблем**](../troubleshooting/maps-data.md#maps-slowly-loading-on-android-11-12-sd-card).

- **Джерело місцезнаходження для проблем з висотою**. Google Play змінив свою політику, і для відповідності, OsmAnd, починаючи з версії 3.9, повинен використовувати Google Play Services для отримання даних про місцезнаходження під час роботи у фоновому режимі. Більше інформації читайте в розділі [Вирішення проблем](../troubleshooting/track-recording-issues.md#osmand-39-altitude-issues-when-using-google-play-services).