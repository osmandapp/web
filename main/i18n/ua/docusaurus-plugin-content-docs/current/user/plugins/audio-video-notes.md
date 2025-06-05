---
source-hash: f355b46d163b900349f3d42c0dbe2b200a45bdbd34749cac699671889463740b
sidebar_position: 3
title:  Аудіо/відео нотатки
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';
<InfoAndroidOnly />
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';

import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
## Огляд {#overview}
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';

import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
Ваші аудіо- та відеозаписи можуть бути корисними в майбутньому, наприклад, як спогади про місця, де ви побували. Вони доступні в меню [Мої місця](../personal/myplaces.md) і відображаються, коли увімкнено плагін Аудіо/відео нотатки.
import Translate from '@site/src/components/Translate.js';

import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';
Плагін Аудіо/відео нотатки розширює функціональність OsmAnd, дозволяючи створювати власні нотатки в різних форматах, таких як фото, відео або аудіо, та пов'язувати їх з їхнім географічним розташуванням або поточним місцезнаходженням. Ви можете робити записи лише тоді, коли плагін увімкнено, використовуючи [віджет Аудіо/відео нотатки](../widgets/info-widgets.md#-audio-video-notes-widget) та/або [контекстне меню карти](../map/map-context-menu.md#-audiovideo-note). Отримані дані автоматично зберігаються в [Моїх місцях](../personal/myplaces.md), звідки ними можна зручно керувати та ділитися.

Усі створені аудіо- та відеонотатки складають шар записів. Коли він увімкнений на карті, він змінює вигляд записаних даних, і з'являється більше налаштувань для керування записами. У шарі записів аудіо- та відеонотатки розміщуються на карті як POI, створюючи таким чином розповідь користувача, видиму лише власнику пристрою.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Аудіо/відео нотатки надаються за допомогою плагіна Аудіо/відео нотатки та вимагають наступного налаштування:

1. Увімкніть [плагін Аудіо/відео нотатки](../plugins/index.md#enable--disable) у розділі Плагіни *Головного меню*.
2. Додайте [віджет](../widgets/info-widgets.md#-audio-video-notes-widget) на екран карти для найзручнішого використання.
3. Налаштуйте [параметри запису](#plugin-settings) для кожного профілю, якщо необхідно.


## Налаштування плагіна {#plugin-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Для кожного профілю можна налаштувати *параметри запису аудіо та відео*.

| Параметр | Опис |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Ви можете вибрати, чи використовувати системний додаток або камеру OsmAnd для створення <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Встановлює розмір фотографій, які будуть зроблені. Можливості камери пристрою визначають кількість доступних опцій. Якщо жодна опція не вибрана, додаток використовує розмір із системних налаштувань камери пристрою. |
| **<Translate android="true" ids="av_camera_focus"/>** | Встановлює метод налаштування фокусу камери. Кількість доступних опцій визначається можливостями камери пристрою. В основному, є три наступні опції: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; та *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Автофокус** є найпопулярнішим і встановлює автоматичний режим для камери; **безперервний** змушує камеру виявляти рухи та відповідно перефокусовуватися; а опція **нескінченність** змушує об'єктив фокусуватися на відстані і таким чином тримати об'єкти у фокусі незалежно від того, наскільки далеко вони знаходяться. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Якщо увімкнено, при зйомці камерою відтворюється звук. Зверніть увагу, що відповідно до закону про конфіденційність, **у деяких країнах пристрої не матимуть перемикача вимкнення звуку затвора камери**. Якщо ви використовуєте системний додаток, звук слід вимкнути в додатку камери. |
| **<Translate android="true" ids="av_audio_format"/>** | Надає вибір форматів для аудіофайлу. Кількість доступних опцій та яка з них використовується за замовчуванням, визначається параметрами конкретного пристрою. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ця опція надає вибір опцій бітрейту для аудіофайлу, який буде створено. Доступні опції бітрейту варіюються від 16 кбіт/с до 128 кбіт/с, або опція За замовчуванням. Параметр За замовчуванням визначається "стандартними" налаштуваннями мікрофона вашого пристрою. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Якщо увімкнено, OsmAnd використовує системний додаток для запису відео в <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Це надає вибір опцій, які визначають формат вихідного зображення. Діапазон доступних опцій визначається параметрами конкретного пристрою. Опція за замовчуванням — це опція *Найвища якість*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Якщо увімкнено, старі відеозаписи будуть автоматично перезаписані та замінені новими відеозаписами, якщо розмір сховища досягне ліміту розміру. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Це визначає верхній часовий ліміт для записаних відеокліпів. Є опції з діапазоном від 1 хвилини до 30 хвилин. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Це встановлює розмір сховища, призначеного для записаного відео. Є опції з діапазоном від 1024 МБ до 62 ГБ. Конкретний діапазон опцій та опція за замовчуванням визначається параметрами конкретного пристрою. Системне повідомлення нагадає вам про досягнення встановленого ліміту розміру сховища. |
| **<Translate android="true" ids="notes"/>** | Ця опція перенаправляє вас до [Аудіо/відео нотаток у Моїх місцях](../personal/myplaces.md) - центрального сховища всіх аудіо/відео нотаток, коли-небудь зроблених у додатку. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Ви можете встановити значення за замовчуванням для всіх налаштувань A/V нотаток. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Відкриває діалогове вікно для вибору профілю, з якого можна скопіювати конфігурацію запису аудіо/відео нотаток, та встановити її для поточного профілю. |


## Керування однією нотаткою {#manage-a-single-note}

Ви можете керувати своєю інформацією, думками, ідеями тощо, прив'язаними до географічного місця, наступним чином:

- Створити нотатку.
- Переглянути всі нотатки у вигляді списку в [Моїх місцях](../personal/myplaces.md).
- Показати конкретну нотатку на карті.
- Перейменувати нотатку в Моїх місцях.
- Показати всі нотатки [на карті](../map/configure-map-menu.md#map-data-layers).
- Відтворити нотатку.
- Створити точки маршруту в [треку](../plugins/trip-recording.md#gpx-file-details).
- Експортувати до [JOSM](https://josm.openstreetmap.de/).


### Створити {#create}

Ви можете створити фото-, відео- та аудіонотатку будь-яким із наступних способів:

- За допомогою [Віджета](../widgets/info-widgets.md#-audio-video-notes-widget-android). Якщо нотатка має бути прив'язана до вашого поточного географічного положення.
- За допомогою [Контекстного меню](../map/map-context-menu.md#-record-av-note-android) точки на карті. Якщо нотатка має бути прив'язана до вибраної точки на карті.


#### 1. Створити та прив'язати до вашого поточного положення {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Віджет <Translate android="true" ids="map_widget_av_notes"/> використовується для створення нотатки, прив'язаної до вашого поточного положення, і таким чином, уникнути будь-якого пошуку відповідної точки для нотатки на карті. Просто торкніться віджета та зробіть нотатку.

Функції, що надаються віджетом <Translate android="true" ids="map_widget_av_notes"/>, залежать від того, як він налаштований у меню [Налаштування екрана](../widgets/info-widgets.md#-audio-video-notes-widget-android). Віджет або одразу відкриває камеру для створення нотатки відповідно до встановлених налаштувань, або спочатку запитує, в якому форматі створити нотатку, а потім відкриває відповідне діалогове вікно запису.


#### 2. Створити та прив'язати до вибраного географічного розташування {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin  Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Щоб створити нотатку, прив'язану до вибраної точки на карті, скористайтеся [Контекстним меню](../map/map-context-menu.md#-record-av-note-android) точки:

1. Довго торкніться точки на карті, і відкриється [Контекстне меню](../map/map-context-menu.md).
2. Торкніться **Дії** та виберіть одну з доступних опцій зі списку:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - для створення аудіонотатки та прив'язки її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - для створення відеонотатки та прив'язки її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - для створення фотонотатки та прив'язки її до вибраної точки на карті.

3. Залежно від вибраного формату нотатки, відкриється відповідне діалогове вікно запису.


#### Діалогове вікно запису {#recorder-dialog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Для *аудіо- та відеонотаток* відображається відповідно аудіо- або відеозаписувач. Ви можете:

- Зупинити запис за допомогою значка *Зупинити*.
- Переглянути тривалість запису.
- Показати або приховати екран відео.

Можна зупинити запис, торкнувшись віджета <Translate android="true" ids="map_widget_av_notes"/>, незалежно від того, чи було запис розпочато за допомогою контекстного меню чи віджета. Для *фотонотатки* з'являється функціональність камери, і ви можете зробити фото, переглянути результат, прийняти та зберегти його, або зробити нове фото.

:::info примітка
Автоматично всі фото-, аудіо- та відеозаписи зберігаються в: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> вкладка.
:::


### Перегляд у Моїх місцях {#view-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Мої місця](../personal/myplaces.md) — це центральне сховище для всіх ваших нотаток. Воно дозволяє переглядати всі ваші нотатки у відсортованому списку, відображати конкретну нотатку на карті та керувати всім списком нотаток.


### Показати на карті {#show-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Щоб показати конкретну нотатку на карті, скористайтеся списком нотаток у Моїх місцях, знайдіть потрібну та торкніться її. В результаті з'явиться карта, яка виділить місцезнаходження нотатки та відкриє [Контекстне меню](../plugins/audio-video-notes.md#actions-in-map-context-menu). Можна працювати з нотаткою, вибираючи опції в контекстному меню.


### Відтворити {#play}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб відтворити нотатку, скористайтеся відповідною опцією в [Контекстному меню](../map/map-context-menu#-audiovideo-note-android), відкритому для нотатки:

- на карті;
- у Моїх місцях.

Розділ [Деталі](../map/map-context-menu#-audiovideo-note-android) надає більше даних про нотатки, таких як широта та довгота, дата та час нотатки, а також фотографії.


### Перейменувати, Видалити, Поділитися {#rename-delete-share}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб керувати нотаткою в Моїх місцях, торкніться вертикальних трьох точок нотатки у списку, і з'являться доступні опції, такі як:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Відкрити та переглянути вибране відео або відтворити аудіонотатку.
- **<Translate android="true" ids="shared_string_share"/>**. Легко поділитися вибраною нотаткою з іншими через різні платформи.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Показує точне місцезнаходження та [Контекстне меню](../plugins/audio-video-notes#actions-in-map-context-menu) нотатки на карті.
- **<Translate android="true" ids="shared_string_rename"/>**. Змінити назву нотатки для легшої ідентифікації.
- **<Translate android="true" ids="shared_string_delete"/>**. Назавжди видаляє нотатки з програми.


## Віджет запису {#recording-widget}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Віджет Аудіо/відео нотатки](../widgets/info-widgets.md#audiovideo-notes-widget) створює нотатки, фотографії, аудіо- та відеофайли та пов'язує їх з вашим поточним положенням. Віджет має кілька опцій, які можна встановити як дію за замовчуванням, що виконується віджетом при торканні екрана.

Додавання віджета на екран необхідне, якщо ви віддаєте перевагу уникненню пошуку геолокації на карті та прив'язці нотаток до вашого поточного стандартного місцезнаходження. Щоб додати або налаштувати віджет, виконайте наступні кроки:

1. Перейдіть до:
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Виберіть **<Translate android="true" ids="map_widget_left"/>** або **<Translate android="true" ids="map_widget_right"/>**.

3. Торкніться **<Translate android="true" ids="map_widget_av_notes"/>**, і відкриється контекстне меню віджета.

4. Виберіть опцію, яку ви віддаєте перевагу використовувати за замовчуванням, торкнувшись віджета:

    - **<Translate android="true" ids="av_def_action_choose"/>** - відкрити вибір опцій.

    - **<Translate android="true" ids="av_def_action_audio"/>** - розпочати запис аудіоповідомлення.

    - **<Translate android="true" ids="av_def_action_video"/>** - розпочати запис відео.

    - **<Translate android="true" ids="av_def_action_picture"/>** - розпочати фотографування.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)


## Керування кількома нотатками {#manage-multiple-notes}

### Керування в Моїх місцях {#manage-in-my-places}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Опції на нижній панелі можна використовувати для керування списком нотаток у меню [Мої місця](../personal/myplaces.md#audiovideo-notes).


### Поділитися з точками маршруту GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Ви можете поділитися всіма нотатками, включаючи [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), який містить вибрані нотатки як точки маршруту на екрані [Мої місця](../personal/myplaces.md#audiovideo-notes), натиснувши кнопку "Поділитися" в нижньому меню. Поруч з кожною нотаткою з'явиться прапорець для вибору конкретних нотаток. Над нотатками є два прапорці: *A/V нотатки за датою* для вибору всіх нотаток та прапорець *Місцезнаходження*. Прапорець *Місцезнаходження* дозволяє додати окремий файл GPX з координатами та даними.

Кожна нотатка містить час її створення, обсяг даних, а якщо це запис, то час запису та дані про місцезнаходження, ви можете додати дані GPX.
Підтримувані формати файлів: аудіо - **3gp**, відео - **mp4**, фото - **jpg**.


### Показати все на карті {#show-all-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Відображені на карті нотатки можуть розповісти вашу історію, де ви помітили знаки, які двері вам потрібно було відкрити, де вихід, оптимальний шлях тощо. Ви можете показувати нотатки [по одній](#show-on-the-map) або всі одразу.

Використовуйте шар карти [Записи](../map/point-layers-on-map#-audio--video-points-android), щоб показати або приховати всі нотатки. Якщо ви увімкнете його в меню [Налаштувати карту](../map/configure-map-menu), шар Записи покаже всі нотатки на карті.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Точки маршруту, створені з нотаток {#waypoints-created-from-notes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Точка маршруту створюється, коли аудіо-, відео- або фотонотатка додається до треку. Точки маршруту існують у межах треку. Якщо трек видимий, його точки маршруту також видимі. Таким чином, ці нотатки можуть бути видимі на карті всі одразу або лише на конкретному видимому треку. В останньому випадку нотатки відображаються як точки маршруту треку.

:::note
Якщо трек експортується, точки маршруту не можна переглядати або відтворювати, оскільки аудіо/відео/фотонотатки зберігаються лише на пристрої та доступні лише вам на цьому пристрої.
:::


### Створити точки маршруту {#create-waypoints}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Існує два способи створення точки маршруту: автоматично та вручну.

1. **Автоматично** точка маршруту створюється, якщо ви робите аудіо/відео/фотонотатку під час запису [Подорожі](../plugins/trip-recording), незалежно від геолокації, якщо вона прив'язана до поточного положення або будь-якого місця, і, таким чином, незалежно від використаних для цього засобів: чи це [Віджет](../widgets/info-widgets#-audio-video-notes-widget-android), чи [Контекстне меню](../map/map-context-menu#-audiovideo-note-android).

    Усі точки маршруту, додані автоматично, отримують автоматично призначену назву. Назва створюється відповідно до формату, зазначеного нижче для аудіо/відео/фотофайлу, і має [коротке посилання](https://wiki.openstreetmap.org/wiki/Shortlink). Приклад точок маршруту на малюнку вище показує автоматично та вручну створені точки маршруту, де перші чотири були створені автоматично, а остання - вручну.

2. **Вручну** точка маршруту створюється за допомогою [Контекстного меню](../map/map-context-menu#-audiovideo-note-android), наступним чином:

    - Виберіть потрібну аудіо/відео/фотонотатку на карті.
    - Торкніться **Дії**, а потім торкніться **Додати до треку**.
    - Виберіть трек, до якого ви маєте намір додати точку маршруту.
    - Відкриється діалогове вікно *<Translate android="true" ids="quick_action_add_gpx"/>*, яке дозволяє встановити деякі властивості, такі як назва точки маршруту, значок, колір та інші. Після завершення торкніться **Зберегти**.

:::info примітка
Ви можете вказати назви для кожної точки маршруту, створеної вручну.
:::


### Перегляд точок маршруту {#view-waypoints}

- Точка маршруту доступна для перегляду як точка маршруту на карті та у списку [точок маршруту конкретного треку](../map/tracks/track-context-menu.md#points--waypoints). Видалення точки маршруту не видаляє відповідну аудіо/відео/фотонотатку.

- Аудіо-, відео- або фотонотатка доступна для перегляду на карті та у списку A/V нотаток у [Моїх місцях](../plugins/audio-video-notes#view-in-my-places). Видалення аудіо-, відео- або фотонотатки не видаляє відповідну точку маршруту.

- На карті точка маршруту та аудіо-, відео- або фотонотатка можуть бути або не бути видимими на карті. Це визначається тим, який шар наразі увімкнено для профілю.

- Коли ні шар Треки, ні шар Записи не увімкнено, як точки маршруту, так і нотатки можна показати, торкнувшись їх у Моїх місцях. У цьому випадку карта показує місцезнаходження торкнутої нотатки або, відповідно, місцезнаходження всіх точок маршруту торкнутого треку.

| Видимий | Шар увімкнено |
| --- | --- |
| Лише точки маршруту | Шар Треки |
| Точки маршруту та нотатки | Шари Треки та Записи |
| Лише нотатки | Шар Записи |
| Нічого | Ні шар Треки, ні шар Записи. |


### Файл GPX з точками маршруту {#gpx-file-with-waypoints}

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Якщо переглядати файл GPX треку, доданого з точкою маршруту з аудіо/відео/фотонотатки, точка маршруту буде виглядати як у прикладі нижче, маючи координати, часову мітку, назву відповідної нотатки та коротке посилання.


## Різне {#miscellaneous}

### Деталі назви файлу {#file-name-details}

Плагін <Translate android="true" ids="audionotes_plugin_name"/> генерує аудіо/відео/фотофайли у наступному форматі:

    `{SHORTLINK_LOCATION}_Опис.{avi,mp3,jpg}`

де `SHORTLINK_LOCATION` вказує широту та довготу місцезнаходження, до якого прив'язаний файл. `SHORTLINK_LOCATION` закодовано відповідно до специфікації [Короткого посилання](https://wiki.openstreetmap.org/wiki/Shortlink).


### Експорт до JOSM {#export-to-josm}

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Щоб переглянути все пізніше, ви можете експортувати трек разом з усіма медіафайлами та переглянути їх у [редакторі JOSM](https://josm.openstreetmap.de/). Зверніть увагу, що медіафайли мають бути розміщені у відповідній папці. Ви можете дізнатися, яка саме, натиснувши на відео. З'явиться повідомлення про відсутність файлу, розмістіть правильний файл у вказаній папці.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Ця стаття востаннє оновлювалася у травні 2023 року*