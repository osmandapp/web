---
source-hash: f1463e5247276fe2417941ca7975d7b70a0240ef66c485028007195a68b96e5f
sidebar_position: 3
title: Аудіо/відео нотатки
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


<InfoAndroidOnly />

## Огляд {#overview}

Ваші аудіо- та відеозаписи можуть бути корисними в майбутньому, наприклад, як спогади про місця, де ви були. Вони доступні в меню [Мої місця](../personal/myplaces.md) та відображаються, коли увімкнено плагін "Аудіо/відео нотатки".

Плагін "Аудіо/відео нотатки" розширює функціональність OsmAnd, дозволяючи створювати власні нотатки в різних форматах, таких як фото, відео або аудіо, та пов'язувати їх з їхнім географічним розташуванням або поточним місцезнаходженням. Ви можете робити записи лише тоді, коли плагін увімкнено, використовуючи [віджет "Аудіо/відео нотатки"](../widgets/info-widgets.md#-audio-video-notes-widget) та/або [контекстне меню карти](../map/map-context-menu.md#-audiovideo-note). Отримані дані автоматично зберігаються в [Моїх місцях](../personal/myplaces.md), звідки їх можна зручно керувати та ділитися ними.

Усі створені аудіо- та відеонотатки утворюють шар записів. Коли він увімкнений на карті, він змінює вигляд записаних даних, і з'являється більше налаштувань для керування записами. У шарі записів аудіо- та відеонотатки розміщуються як POI на карті, створюючи таким чином розповідь користувача, видиму лише власнику пристрою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вступ до аудіо-відео нотаток](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Аудіо/відео нотатки надаються за допомогою плагіна "Аудіо/відео нотатки" та вимагають наступних налаштувань:

1. Увімкніть [плагін "Аудіо/відео нотатки"](../plugins/index.md#enable--disable) у розділі "Плагіни" *Головного меню*.
2. Додайте [віджет](../widgets/info-widgets.md#-audio-video-notes-widget) на екран карти для найзручнішого використання.
3. За потреби налаштуйте [параметри запису](#plugin-settings) для кожного профілю.


## Налаштування плагіна {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Налаштування плагіна аудіо-відео Фото Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Для кожного профілю можна налаштувати *параметри запису аудіо та відео*.

| Параметр | Опис |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Ви можете вибрати, чи використовувати системну програму, чи камеру OsmAnd для створення <Translate android="true" ids="photo_notes"/>.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Встановлює розмір фотографій, які будуть зроблені. Можливості камери пристрою визначають кількість доступних опцій. Якщо жодна опція не вибрана, програма використовує розмір із системних налаштувань камери пристрою. |
| **<Translate android="true" ids="av_camera_focus"/>** | Встановлює метод налаштування фокусу камери. Кількість доступних опцій визначається можливостями камери пристрою. В основному, є три наступні опції: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; та *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Автофокус** є найпопулярнішим і встановлює автоматичний режим для камери; **безперервний** змушує камеру виявляти рухи та відповідно перефокусовуватися; а опція **нескінченність** змушує об'єктив фокусуватися на відстані і таким чином тримати об'єкти у фокусі незалежно від того, наскільки далеко вони знаходяться. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Якщо увімкнено, під час зйомки камерою відтворюється звук. Зверніть увагу, що відповідно до закону про конфіденційність, **у деяких країнах пристрої не матимуть перемикача вимкнення звуку затвора камери**. Якщо ви використовуєте системну програму, звук слід вимкнути в програмі камери. |
| **<Translate android="true" ids="av_audio_format"/>** | Надає вибір форматів для аудіофайлу. Кількість доступних опцій та та, яка використовується за замовчуванням, визначається параметрами конкретного пристрою. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ця опція надає вибір варіантів бітрейту для аудіофайлу, який буде створено. Доступні варіанти бітрейту варіюються від 16 кбіт/с до 128 кбіт/с або опція "За замовчуванням". Параметр "За замовчуванням" визначається "стандартними" налаштуваннями мікрофона вашого пристрою. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Якщо увімкнено, OsmAnd використовує системну програму для запису відео в <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Це надає вибір опцій, які визначають формат вихідного зображення. Діапазон доступних опцій визначається параметрами конкретного пристрою. Опція за замовчуванням — *Найвища якість*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Якщо увімкнено, старі відеозаписи будуть автоматично перезаписуватися та замінюватися новими відеозаписами, якщо розмір сховища досягне ліміту. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Це визначає верхній часовий ліміт для записаних відеокліпів. Доступні варіанти з діапазоном від 1 хвилини до 30 хвилин.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Це встановлює розмір сховища, призначеного для записаного відео. Доступні варіанти з діапазоном від 1024 МБ до 62 ГБ. Конкретний діапазон опцій та опція за замовчуванням визначаються параметрами конкретного пристрою. Системне повідомлення нагадає вам про досягнення встановленого ліміту розміру сховища. |
| **<Translate android="true" ids="notes"/>** | Ця опція перенаправляє вас до [Аудіо/відео нотаток у Моїх місцях](../personal/myplaces.md) - центрального сховища всіх аудіо/відео нотаток, коли-небудь зроблених у програмі. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Ви можете встановити значення за замовчуванням для всіх налаштувань аудіо/відео нотаток. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Відкриває діалогове вікно для вибору профілю, з якого потрібно скопіювати конфігурацію запису аудіо/відео нотаток, та встановити її для поточного профілю. |


## Керування однією нотаткою {#manage-a-single-note}

Ви можете керувати своєю інформацією, думками, ідеями тощо, прив'язаними до географічного місця, наступним чином:

- Створити нотатку.
- Переглянути всі нотатки у вигляді списку в [Моїх місцях](../personal/myplaces.md).
- Показати конкретну нотатку на карті.
- Перейменувати нотатку в Моїх місцях.
- Показати всі нотатки [на карті](../map/configure-map-menu.md#map-data-layers).
- Відтворити нотатку.
- Створити маршрутні точки в [треку](../plugins/trip-recording.md#gpx-file-details).
- Експортувати до [JOSM](https://josm.openstreetmap.de/).


### Створити {#create}

Ви можете створити фото-, відео- та аудіонотатку будь-яким із наступних способів:

- За допомогою [Віджета](../widgets/info-widgets.md#-audio-video-notes-widget-android). Якщо нотатка має бути прив'язана до вашого поточного географічного положення.
- За допомогою [Контекстного меню](../map/map-context-menu.md#-record-av-note-android) точки на карті. Якщо нотатка має бути прив'язана до вибраної точки на карті.


#### 1. Створити та прив'язати до поточного положення {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет плагіна аудіо-відео Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Віджет <Translate android="true" ids="map_widget_av_notes"/> використовується для створення нотатки, прив'язаної до вашого поточного положення, і таким чином, уникнення будь-якого пошуку відповідної точки для нотатки на карті. Просто торкніться віджета та зробіть нотатку.

Функції, що надаються віджетом <Translate android="true" ids="map_widget_av_notes"/>, залежать від того, як він налаштований у меню [Налаштувати екран](../widgets/info-widgets.md#-audio-video-notes-widget-android). Віджет або негайно відкриває камеру для створення нотатки відповідно до встановлених налаштувань, або спочатку запитує, в якому форматі створити нотатку, а потім відкриває відповідне діалогове вікно запису.


#### 2. Створити та прив'язати до вибраної геолокації {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Плагін аудіо-відео Контекстне меню зробити нотатку](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Щоб створити нотатку, прив'язану до вибраної точки на карті, скористайтеся [Контекстним меню](../map/map-context-menu.md#-record-av-note-android) точки:

1. Довго натисніть на точку на карті, і відкриється [Контекстне меню](../map/map-context-menu.md).
2. Натисніть **Дії** та виберіть одну з доступних опцій зі списку:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - для створення аудіонотатки та прив'язки її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - для створення відеонотатки та прив'язки її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - для створення фотонотатки та прив'язки її до вибраної точки на карті.

3. Залежно від вибраного формату нотатки відкривається відповідне діалогове вікно запису.


#### Діалогове вікно запису {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Запис відеонотатки](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Для *аудіо- та відеонотаток* відображається відповідно аудіо- або відеорекордер. Ви можете:

- Зупинити запис за допомогою значка *Зупинити*.
- Переглянути тривалість запису.
- Показати або приховати відеоекран.

Можна зупинити запис, торкнувшись віджета <Translate android="true" ids="map_widget_av_notes"/>, незалежно від того, чи було запис розпочато контекстним меню чи віджетом. Для *фотонотатки* з'являється функціонал камери, і ви можете зробити фото, переглянути результат, прийняти та зберегти його, або зробити нове фото.

:::info note
Автоматично всі фото-, аудіо- та відеозаписи зберігаються в: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> вкладка.
:::


### Перегляд у Моїх місцях {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Мої місця](../personal/myplaces.md) — це центральне сховище для всіх ваших нотаток. Воно дозволяє переглядати всі ваші нотатки у відсортованому списку, відображати конкретну нотатку на карті та керувати всім списком нотаток.


### Показати на карті {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню плагіна аудіо-відео "Мої місця"](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Щоб показати конкретну нотатку на карті, скористайтеся списком нотаток у Моїх місцях, знайдіть потрібну та торкніться її. В результаті з'явиться карта, яка виділить місце розташування нотатки та відкриє [Контекстне меню](../plugins/audio-video-notes.md#actions-in-map-context-menu). З нотаткою можна працювати, вибираючи опції в контекстному меню.


### Відтворити {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Дії меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб відтворити нотатку, скористайтеся відповідною опцією в [Контекстному меню](../map/map-context-menu#-audiovideo-note-android), відкритому для нотатки:

- на карті;
- у Моїх місцях.

Розділ [Деталі](../map/map-context-menu#-audiovideo-note-android) надає більше даних про нотатки, таких як широта та довгота, дата та час нотатки, а також фотографії.


### Перейменувати, видалити, поділитися {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб керувати нотаткою в Моїх місцях, торкніться вертикальних трьох крапок нотатки у списку, і з'являться доступні опції, а саме:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Відкрити та переглянути вибране відео або відтворити аудіонотатку.
- **<Translate android="true" ids="shared_string_share"/>**. Легко діліться вибраною нотаткою з іншими через різні платформи.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Показує точне місце розташування та [Контекстне меню](../plugins/audio-video-notes#actions-in-map-context-menu) нотатки на карті.
- **<Translate android="true" ids="shared_string_rename"/>**. Змінити назву нотатки для легшої ідентифікації.
- **<Translate android="true" ids="shared_string_delete"/>**. Назавжди видаляє нотатки з програми.


## Віджет запису {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Віджет "Аудіо/відео нотатки"](../widgets/info-widgets.md#audiovideo-notes-widget) створює нотатки, фотографії, аудіо- та відеофайли та пов'язує їх з вашим поточним місцезнаходженням. Віджет має кілька опцій, які можна встановити як дію за замовчуванням, що виконується віджетом при торканні екрана.

Додавання віджета на екран необхідне, якщо ви віддаєте перевагу уникненню пошуку геолокації на карті та прив'язці нотаток до вашого поточного місцезнаходження за замовчуванням. Щоб додати або налаштувати віджет, виконайте наступні кроки:

1. Перейдіть до:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Виберіть **<Translate android="true" ids="map_widget_left"/>** або **<Translate android="true" ids="map_widget_right"/>**.

3. Торкніться **<Translate android="true" ids="map_widget_av_notes"/>**, і відкриється контекстне меню віджета.

4. Виберіть опцію, яку ви віддаєте перевагу використовувати за замовчуванням, торкнувшись віджета:

    - **<Translate android="true" ids="av_def_action_choose"/>** - відкрити вибір опцій.

    - **<Translate android="true" ids="av_def_action_audio"/>** - почати запис аудіоповідомлення.

    - **<Translate android="true" ids="av_def_action_video"/>** - почати запис відео.

    - **<Translate android="true" ids="av_def_action_picture"/>** - почати фотографувати.

    ![Віджет](@site/static/img/plugins/audio-video-notes/widget.png)


## Керування кількома нотатками {#manage-multiple-notes}

### Керування в Моїх місцях {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Три дії меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Опції на нижній панелі можна використовувати для керування списком нотаток у меню [Мої місця](../personal/myplaces.md#audiovideo-notes).


### Поділитися з GPX маршрутними точками {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Поділитися](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Ви можете поділитися всіма нотатками, включаючи [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), який має вибрані нотатки як маршрутні точки на екрані [Мої місця](../personal/myplaces.md#audiovideo-notes), натиснувши кнопку "Поділитися" в нижньому меню. Поруч з кожною нотаткою з'явиться прапорець для вибору конкретних нотаток. Над нотатками є два прапорці: *A/V нотатки за датою* для вибору всіх нотаток та прапорець *Місцезнаходження*. Прапорець *Місцезнаходження* дозволяє додати окремий файл GPX з координатами та даними.

Кожна нотатка містить час її створення, обсяг даних, і якщо це запис, час запису та дані про місцезнаходження, ви можете додати дані GPX.
Підтримувані формати файлів: аудіо - **3gp**, відео - **mp4**, фото -**jpg**.


### Показати все на карті {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Показати нотатки на карті](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Відображені на карті нотатки можуть розповісти вашу історію, де ви помітили знаки, які двері потрібно було відкрити, де знаходиться вихід, оптимальний шлях тощо. Ви можете показувати нотатки [по одній](#show-on-the-map) або всі одразу.

Використовуйте шар карти [Записи](../map/point-layers-on-map#-audio--video-points-android), щоб показати або приховати всі нотатки. Якщо ви увімкнете його в меню [Налаштувати карту](../map/configure-map-menu), шар Записи покаже всі нотатки на карті.

![Немає нотаток на карті](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Нотатки на карті](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Маршрутні точки, створені з нотаток {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Нотатки та маршрутні точки на карті](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Маршрутні точки на треку](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Маршрутна точка створюється, коли аудіо-, відео- або фотонотатка додається до треку. Маршрутні точки існують у межах треку. Якщо трек видимий, його маршрутні точки також видимі. Таким чином, ці нотатки можуть бути видимі на карті всі одразу або лише на конкретному видимому треку. В останньому випадку нотатки відображаються як маршрутні точки треку.

:::note
Якщо трек експортується, маршрутні точки не можуть бути переглянуті або відтворені, оскільки аудіо/відео/фотонотатки зберігаються лише на пристрої та доступні лише вам на цьому пристрої.
:::


### Створити маршрутні точки {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Створення маршрутної точки вручну до треку](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Існує два способи створення маршрутної точки: автоматично та вручну.

1. **Автоматично** маршрутна точка створюється, якщо ви робите аудіо/відео/фотонотатку під час [запису поїздки](../plugins/trip-recording), незалежно від геолокації, якщо вона прив'язана до поточного положення або будь-якого місця, і, таким чином, незалежно від використаних для цього засобів: чи це [Віджет](../widgets/info-widgets#-audio-video-notes-widget-android), чи [Контекстне меню](../map/map-context-menu#-audiovideo-note-android).

    Усі автоматично додані маршрутні точки отримують автоматично призначене ім'я. Ім'я створюється відповідно до формату, зазначеного нижче для аудіо/відео/фотофайлу, і має [коротке посилання](https://wiki.openstreetmap.org/wiki/Shortlink). Приклад маршрутних точок на малюнку вище показує автоматично та вручну створені маршрутні точки, де перші чотири були створені автоматично, а остання — вручну.

2. **Вручну** маршрутна точка створюється за допомогою [Контекстного меню](../map/map-context-menu#-audiovideo-note-android) наступним чином:

    - Виберіть потрібну аудіо/відео/фотонотатку на карті.
    - Натисніть **Дії**, а потім **Додати трек**.
    - Виберіть трек, до якого ви збираєтеся додати маршрутну точку.
    - Відкриється діалогове вікно *<Translate android="true" ids="quick_action_add_gpx"/>*, яке дозволяє встановити деякі властивості, такі як назва маршрутної точки, значок, колір та інші. Після цього натисніть **Зберегти**.

:::info note
Ви можете вказати назви для кожної маршрутної точки, створеної вручну.
:::


### Перегляд маршрутних точок {#view-waypoints}

- Маршрутна точка доступна для перегляду як маршрутна точка на карті та у списку [маршрутних точок певного треку](../map/tracks/track-context-menu.md#points--waypoints). Видалення маршрутної точки не видаляє відповідну аудіо/відео/фотонотатку.

- Аудіо-, відео- або фотонотатка доступна для перегляду на карті та у списку A/V нотаток у [Моїх місцях](../plugins/audio-video-notes#view-in-my-places). Видалення аудіо-, відео- або фотонотатки не видаляє відповідну маршрутну точку.

- На карті маршрутна точка та аудіо-, відео- або фотонотатка можуть бути видимими або невидимими. Це визначається тим, який шар наразі увімкнено для профілю.

- Якщо не увімкнено ні шар "Треки", ні шар "Записи", обидві маршрутні точки та нотатки можна показати, торкнувшись їх у "Моїх місцях". У цьому випадку карта показує розташування торкнутої нотатки або, відповідно, розташування всіх маршрутних точок торкнутого треку.

| Видимий | Шар увімкнено |
| --- | --- |
| Лише маршрутні точки | Шар "Треки" |
| Маршрутні точки та нотатки | Шари "Треки" та "Записи" |
| Лише нотатки | Шар "Записи" |
| Жодного | Ні шар "Треки", ні шар "Записи". |


### GPX-файл з маршрутними точками {#gpx-file-with-waypoints}

![Маршрутна точка у файлі GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Якщо переглядати GPX-файл треку, доданого з маршрутною точкою з аудіо/відео/фотонотатки, маршрутна точка буде виглядати як у прикладі нижче, маючи координати, мітку часу, назву відповідної нотатки та коротке посилання.


## Різне {#miscellaneous}

### Деталі назви файлу {#file-name-details}

Плагін <Translate android="true" ids="audionotes_plugin_name"/> генерує аудіо/відео/фотофайли у наступному форматі:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

де `SHORTLINK_LOCATION` вказує широту та довготу місця, до якого прив'язаний файл. `SHORTLINK_LOCATION` кодується відповідно до специфікації [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Експорт до JOSM {#export-to-josm}

![Аудіо-відео нотатки в Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Щоб переглянути все пізніше, ви можете експортувати трек разом з усіма медіафайлами та переглянути їх у [редакторі JOSM](https://josm.openstreetmap.de/). Зверніть увагу, що медіафайли повинні бути розміщені у відповідній папці. Ви можете дізнатися, яка саме, натиснувши на відео. З'явиться повідомлення про те, що файл недоступний, помістіть правильний файл у вказану папку.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)