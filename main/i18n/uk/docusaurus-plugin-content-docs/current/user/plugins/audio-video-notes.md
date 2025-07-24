---
source-hash: 60b188c51e17690f3a3d5d8e4970eb6bd2391e27d4fafaddb68b30a36313f979
sidebar_position: 3
title: Аудіо/Відео нотатки
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

Ваші аудіо- та відеозаписи можуть бути корисними в майбутньому, наприклад, як спогади про місця, де ви були. Вони доступні в меню [Мої місця](../personal/myplaces.md) та відображаються, коли увімкнено плагін Аудіо/Відео нотатки.

Плагін Аудіо/Відео нотатки розширює функціональність OsmAnd, дозволяючи створювати власні нотатки в різних форматах, таких як фотографії, відео або аудіо, та пов'язувати їх з географічним розташуванням або поточним місцезнаходженням. Ви можете робити записи лише тоді, коли плагін увімкнено, використовуючи [віджет Аудіо/Відео нотатки](../widgets/info-widgets.md#-audio-video-notes-widget) та/або [контекстне меню карти](../map/map-context-menu.md#-audiovideo-note). Отримані дані автоматично зберігаються в [Моїх місцях](../personal/myplaces.md), звідки їх можна зручно керувати та ділитися ними.

Усі створені аудіо- та відеонотатки утворюють шар Запис. Коли його увімкнено на карті, він змінює вигляд записаних даних, і з'являється більше налаштувань для керування записами. У шарі Запис аудіо- та відеонотатки розміщуються як POI на карті, створюючи таким чином користувацький наратив, видимий лише власнику пристрою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вступ до аудіо- та відеонотаток](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Аудіо/відео нотатки надаються плагіном Аудіо/відео нотатки та вимагають наступних налаштувань:

1. Увімкніть [плагін Аудіо/відео нотатки](../plugins/index.md#enable--disable) у розділі Плагіни *Головного меню*.
2. Додайте [віджет](../widgets/info-widgets.md#-audio-video-notes-widget) на екран карти для найзручнішого використання.
3. За потреби налаштуйте [параметри запису](#plugin-settings) для кожного профілю.


## Налаштування плагіна {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*

![Налаштування плагіна аудіо- та відеонотаток Фото Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Для кожного профілю можна налаштувати *параметри запису аудіо та відео*.

| Параметр | Опис |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>** | Ви можете вибрати, чи використовувати системний додаток, чи камеру OsmAnd для зйомки <Translate android="true" ids="photo_notes"/>. |
| **<Translate android="true" ids="av_camera_pic_size"/>** | Встановлює розмір фотографій, які будуть зроблені. Можливості камери пристрою визначають кількість доступних варіантів. Якщо жоден варіант не вибрано, програма використовує розмір із системних налаштувань камери пристрою. |
| **<Translate android="true" ids="av_camera_focus"/>** | Встановлює метод налаштування фокусу камери. Кількість доступних варіантів визначається можливостями камери пристрою. В основному, є три наступні варіанти: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; та *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Автофокус** є найпопулярнішим і встановлює автоматичний режим для камери; **безперервний** змушує камеру виявляти рухи та відповідно перефокусовуватися; а опція **нескінченність** змушує об'єктив фокусуватися на відстані, таким чином зберігаючи об'єкти у фокусі незалежно від того, наскільки далеко вони знаходяться. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Якщо увімкнено, під час зйомки камерою відтворюється звук. Зверніть увагу, що відповідно до закону про конфіденційність, **у деяких країнах пристрої не матимуть перемикача вимкнення звуку затвора камери**. Якщо ви використовуєте системний додаток, звук слід вимкнути в додатку камери. |
| **<Translate android="true" ids="av_audio_format"/>** | Надає вибір форматів для аудіофайлу. Кількість доступних варіантів та той, який використовується за замовчуванням, визначається параметрами конкретного пристрою. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ця опція надає вибір варіантів бітрейту для аудіофайлу, який буде створено. Доступні варіанти бітрейту варіюються від 16 кбіт/с до 128 кбіт/с або опція За замовчуванням. Параметр За замовчуванням визначається налаштуваннями мікрофона вашого пристрою за замовчуванням. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Якщо увімкнено, OsmAnd використовує системний додаток для запису відео в <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Це надає вибір опцій, які визначають формат вихідного зображення. Діапазон доступних опцій визначається параметрами конкретного пристрою. Опція за замовчуванням – це опція *Найвища якість*. |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Якщо увімкнено, старі відеозаписи будуть автоматично перезаписуватися та замінюватися новими відеозаписами, якщо розмір сховища досягне встановленого ліміту. |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Це визначає верхню межу часу для записаних відеокліпів. Доступні варіанти з діапазоном від 1 хвилини до 30 хвилин. |
| **<Translate android="true" ids="rec_split_storage_size"/>** | Це встановлює розмір сховища, призначеного для записаного відео. Доступні варіанти з діапазоном від 1024 МБ до 62 ГБ. Конкретний діапазон варіантів та варіант за замовчуванням визначаються параметрами конкретного пристрою. Системне повідомлення нагадає вам про те, що розмір сховища досягає встановленого ліміту. |
| **<Translate android="true" ids="notes"/>** | Ця опція перенаправляє вас до [Аудіо/відео нотаток у Моїх місцях](../personal/myplaces.md) – центрального сховища всіх аудіо/відео нотаток, коли-небудь зроблених у програмі. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Ви можете встановити значення за замовчуванням для всіх налаштувань A/V нотаток. |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Відкриває діалогове вікно для вибору профілю, з якого можна скопіювати конфігурацію запису аудіо/відео нотаток, і встановити її для поточного профілю. |


## Керування однією нотаткою {#manage-a-single-note}

Ви можете керувати своєю інформацією, думками, ідеями тощо, прив'язаними до географічного місця, наступним чином:

- Створити нотатку.
- Переглянути всі нотатки у вигляді списку в [Моїх місцях](../personal/myplaces.md).
- Показати конкретну нотатку на карті.
- Перейменувати нотатку в Моїх місцях.
- Показати всі нотатки [на карті](../map/configure-map-menu.md#map-data-layers).
- Відтворити нотатку.
- Створити шляхові точки в [треку](../plugins/trip-recording.md#gpx-file-details).
- Експортувати до [JOSM](https://josm.openstreetmap.de/).


### Створити {#create}

Ви можете створити фото-, відео- та аудіонотатку будь-яким із наступних способів:

- За допомогою [Віджета](../widgets/info-widgets.md#-audio-video-notes-widget-android). Якщо нотатка має бути прив'язана до вашого поточного географічного положення.
- За допомогою [Контекстного меню](../map/map-context-menu.md#-record-av-note-android) точки на карті. Якщо нотатка має бути прив'язана до вибраної точки на карті.


#### 1. Створити та прив'язати до поточного положення {#1-create-and-tie-to-your-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет плагіна аудіо- та відеонотаток Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Віджет <Translate android="true" ids="map_widget_av_notes"/> використовується для створення нотатки, прив'язаної до вашого поточного положення, і таким чином, уникнення будь-якого пошуку відповідної точки для нотатки на карті. Просто торкніться віджета та зробіть нотатку.

Функції, що надаються віджетом <Translate android="true" ids="map_widget_av_notes"/>, залежать від того, як він налаштований у меню [Налаштувати екран](../widgets/info-widgets.md#-audio-video-notes-widget-android). Віджет або негайно відкриває камеру для створення нотатки, відповідно до встановлених налаштувань, або спочатку запитує, у якому форматі створити нотатку, а потім відкриває відповідне діалогове вікно запису.


#### 2. Створити та прив'язати до вибраної геолокації {#2-create-and-tie-to-selected-geolocation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Плагін аудіо- та відеонотаток Контекстне меню зробити нотатку](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Щоб створити нотатку, прив'язану до вибраної точки на карті, скористайтеся [Контекстним меню](../map/map-context-menu.md#-record-av-note-android) точки:

1. Довго торкніться точки на карті, і відкриється [Контекстне меню](../map/map-context-menu.md).
2. Торкніться **Дії** та виберіть один із доступних варіантів зі списку:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - щоб зробити аудіонотатку та прив'язати її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - щоб зробити відеонотатку та прив'язати її до вибраної точки на карті;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - щоб зробити фотонотатку та прив'язати її до вибраної точки на карті.

3. Залежно від вибраного формату нотатки відкриється відповідне діалогове вікно запису.


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

![Меню плагіна аудіо- та відеонотаток Мої місця](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Мої місця](../personal/myplaces.md) — це центральне сховище для всіх ваших нотаток. Воно дозволяє переглядати всі ваші нотатки у відсортованому списку, відображати конкретну нотатку на карті та керувати всім списком нотаток.


### Показати на карті {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекст меню плагіна аудіо- та відеонотаток Мої місця](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Щоб показати конкретну нотатку на карті, скористайтеся списком нотаток у Моїх місцях, знайдіть потрібну та торкніться її. В результаті з'явиться карта, яка виділить місце розташування нотатки та відкриє [Контекстне меню](../plugins/audio-video-notes.md#actions-in-map-context-menu). З нотаткою можна працювати, вибираючи опції в контекстному меню.


### Відтворити {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню плагіна аудіо- та відеонотаток](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)
![Дії меню плагіна аудіо- та відеонотаток Мої місця](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб відтворити нотатку, скористайтеся відповідною опцією в [Контекстному меню](../map/map-context-menu#-audiovideo-note-android), відкритому для нотатки:

- на карті;
- у Моїх місцях.

Розділ [Деталі](../map/map-context-menu#-audiovideo-note-android) надає більше даних про нотатки, таких як широта та довгота, дата та час нотатки, а також фотографії.


### Перейменувати, видалити, поділитися {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії меню плагіна аудіо- та відеонотаток Мої місця](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб керувати нотаткою в Моїх місцях, торкніться вертикальних трьох крапок нотатки у списку, і з'являться доступні опції, а саме:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Відкрити та переглянути вибране відео або відтворити аудіонотатку.
- **<Translate android="true" ids="shared_string_share"/>**. Легко ділитися вибраною нотаткою з іншими через різні платформи.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Показує точне місце розташування та [Контекстне меню](../plugins/audio-video-notes#actions-in-map-context-menu) нотатки на карті.
- **<Translate android="true" ids="shared_string_rename"/>**. Змінити назву нотатки для легшої ідентифікації.
- **<Translate android="true" ids="shared_string_delete"/>**. Назавжди видаляє нотатки з програми.


## Віджет запису {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

</TabItem>

</Tabs>

[Віджет аудіо/відео нотаток](../widgets/info-widgets.md#audiovideo-notes-widget) створює нотатки, фотографії, аудіо- та відеофайли та пов'язує їх з вашим поточним положенням. Віджет має кілька опцій, які можна встановити як дію за замовчуванням, що виконується віджетом при дотику до екрана.

Додавання віджета на екран необхідне, якщо ви віддаєте перевагу уникненню пошуку геолокації на карті та прив'язуєте нотатки до вашого поточного місцезнаходження за замовчуванням. Щоб додати або налаштувати віджет, виконайте наступні кроки:

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

![Меню плагіна аудіо- та відеонотаток Мої місця Три дії](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Опції в нижній панелі можна використовувати для керування списком нотаток у меню [Мої місця](../personal/myplaces.md#audiovideo-notes).


### Поділитися з GPX шляховими точками {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Поділитися](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Ви можете поділитися всіма нотатками, включаючи [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), що містить вибрані нотатки як шляхові точки на екрані [Мої місця](../personal/myplaces.md#audiovideo-notes), натиснувши кнопку "Поділитися" в нижньому меню. Поруч з кожною нотаткою з'явиться прапорець для вибору конкретних нотаток. Над нотатками є два прапорці: *А/В нотатки за датою* для вибору всіх нотаток та прапорець *Місцезнаходження*. Прапорець *Місцезнаходження* дозволяє додати окремий файл GPX з координатами та даними.

Кожна нотатка містить час її створення, обсяг даних, і якщо це запис, час запису та дані про місцезнаходження, ви можете додати дані GPX.
Підтримувані формати файлів: аудіо - **3gp**, відео - **mp4**, фото - **jpg**.


### Показати все на карті {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Показати нотатки на карті](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Відображені на карті нотатки можуть розповісти вашу історію, де ви помітили знаки, які двері вам потрібно було відчинити, де знаходиться вихід, оптимальний шлях тощо. Ви можете показувати нотатки [по одній](#show-on-the-map) або всі одразу.

Використовуйте шар карти [Запис](../map/point-layers-on-map#-audio--video-points-android), щоб показати або приховати всі нотатки. Якщо ви увімкнете його в меню [Налаштувати карту](../map/configure-map-menu), шар Запис покаже всі нотатки на карті.

![Немає нотаток на карті](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Нотатки на карті](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Шляхові точки, створені з нотаток {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Нотатки та шляхові точки на карті](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)
![Шляхові точки на треку](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Шляхова точка створюється, коли аудіо-, відео- або фотонотатка додається до треку. Шляхові точки існують у межах треку. Якщо трек видимий, його шляхові точки також видимі. Таким чином, ці нотатки можуть бути видимими на карті всі одразу або лише на конкретному видимому треку. В останньому випадку нотатки відображаються як шляхові точки треку.

:::note
Якщо трек експортується, шляхові точки не можна переглядати або відтворювати, оскільки аудіо/відео/фотонотатки зберігаються лише на пристрої та доступні лише вам на цьому пристрої.
:::


### Створити шляхові точки {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Додавання шляхової точки до треку вручну](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Існує два способи створення шляхової точки: автоматично та вручну.

1. **Автоматично** шляхова точка створюється, якщо ви робите аудіо/відео/фото нотатку під час запису [Подорожі](../plugins/trip-recording), незалежно від геолокації, якщо вона прив'язана до поточного положення або будь-якого місця, і, таким чином, незалежно від засобів, використаних для цього: чи це [Віджет](../widgets/info-widgets#-audio-video-notes-widget-android), чи [Контекстне меню](../map/map-context-menu#-audiovideo-note-android).

    Усі шляхові точки, додані автоматично, отримують автоматично призначену назву. Назва створюється відповідно до формату, зазначеного нижче для аудіо/відео/фото файлу, і має [коротке посилання](https://wiki.openstreetmap.org/wiki/Shortlink). Приклад шляхових точок на рисунку вище показує автоматично та вручну створені шляхові точки, де перші чотири були створені автоматично, а остання – вручну.

2. **Вручну** шляхова точка створюється за допомогою [Контекстного меню](../map/map-context-menu#-audiovideo-note-android) наступним чином:

    - Виберіть потрібну аудіо/відео/фото нотатку на карті.
    - Торкніться **Дії**, а потім торкніться **Додати трек**.
    - Виберіть трек, до якого ви збираєтеся додати шляхову точку.
    - Відкриється діалогове вікно *<Translate android="true" ids="quick_action_add_gpx"/>*, яке дозволяє встановити деякі властивості, такі як назва шляхової точки, піктограма, колір та інші. Після завершення торкніться **Зберегти**.

:::info note
Ви можете вказати назви для кожної шляхової точки, створеної вручну.
:::


### Перегляд шляхових точок {#view-waypoints}

- Шляхова точка доступна для перегляду як шляхова точка на карті та у списку [шляхових точок конкретного треку](../map/tracks/track-context-menu.md#points--waypoints). Видалення шляхової точки не видаляє відповідну аудіо/відео/фото нотатку.

- Аудіо-, відео- або фотонотатка доступна для перегляду на карті та у списку A/V нотаток у [Моїх місцях](../plugins/audio-video-notes#view-in-my-places). Видалення аудіо-, відео- або фотонотатки не видаляє відповідну шляхову точку.

- На карті шляхова точка та аудіо-, відео- або фотонотатка можуть бути або не бути видимими на карті. Це визначається тим, який шар наразі увімкнено для профілю.

- Коли ні шар Треки, ні шар Запис не увімкнено, обидві шляхові точки та нотатки можна показати, торкнувшись їх у Моїх місцях. У цьому випадку карта показує розташування торкнутої нотатки або, відповідно, розташування всіх шляхових точок торкнутого треку.

| Видимий | Шар увімкнено |
| --- | --- |
| Лише шляхові точки | Шар Треки |
| Шляхові точки та нотатки | Шари Треки та Запис |
| Лише нотатки | Шар Запис |
| Жодного | Ні шар Треки, ні шар Запис. |


### GPX-файл зі шляховими точками {#gpx-file-with-waypoints}

![Шляхова точка у файлі GPX](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

Якщо переглядати GPX-файл треку, доданого зі шляховою точкою з аудіо/відео/фото нотатки, шляхова точка буде виглядати як у прикладі нижче, маючи координати, мітку часу, назву відповідної нотатки та коротке посилання.


## Різне {#miscellaneous}

### Деталі назви файлу {#file-name-details}

Плагін <Translate android="true" ids="audionotes_plugin_name"/> генерує аудіо/відео/фото файли в наступному форматі:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

де `SHORTLINK_LOCATION` вказує широту та довготу місця, до якого прив'язаний файл. `SHORTLINK_LOCATION` кодується відповідно до специфікації [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Експорт до JOSM {#export-to-josm}

![Аудіо- та відеонотатки в Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

Щоб переглянути все пізніше, ви можете експортувати трек разом з усіма медіафайлами та переглянути їх у [редакторі JOSM](https://josm.openstreetmap.de/). Зверніть увагу, що медіафайли повинні бути розміщені у відповідній папці. Ви можете дізнатися, яка саме, натиснувши на відео. З'явиться сповіщення про те, що файл недоступний, помістіть правильний файл у вказану папку.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: травень 2023*