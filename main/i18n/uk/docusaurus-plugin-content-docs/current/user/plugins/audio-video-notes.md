---
source-hash: 494c0f42fb3a14331085fa79522a6bbb96cda5013289fdce88b34a3330403762
sidebar_position: 3
title:  Аудіо/відеонотатки
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

Ваші аудіо- та відеозаписи можуть стати в пригоді в майбутньому, наприклад, як спогади про місця, де ви були. Вони доступні в меню [Мої місця](../personal/myplaces.md) і видимі, коли ввімкнено плагін "Аудіо/відеонотатки".

Плагін "Аудіо/відеонотатки" розширює функціональність OsmAnd, дозволяючи створювати власні нотатки в різних форматах, таких як фото, відео або аудіо, і пов'язувати їх з географічним або поточним місцезнаходженням. Ви можете робити записи лише тоді, коли плагін увімкнено, за допомогою [віджета "Аудіо/відеонотатки"](../widgets/info-widgets.md#audiovideo-notes-widget) та/або [контекстного меню мапи](../map/map-context-menu.md#-audiovideo-note). Отримані дані автоматично зберігаються в [Моїх місцях](../personal/myplaces.md), звідки ними можна зручно керувати та ділитися.  

Усі створені аудіо- та відеонотатки утворюють шар "Записи". Коли він увімкнений на мапі, це змінює вигляд записаних даних і з'являється більше налаштувань для керування записами. У шарі "Записи" аудіо- та відеонотатки розміщуються на мапі як POI, створюючи таким чином розповідь користувача, видиму лише власнику пристрою.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Вступ до аудіо- та відеонотаток](@site/static/img/plugins/audio-video-notes/widgets_view.png)

</TabItem>

</Tabs>


## Необхідні параметри налаштування {#required-setup-parameters}

Аудіо/відеонотатки надаються плагіном "Аудіо/відеонотатки" і вимагають наступних налаштувань:

1. Увімкніть [плагін "Аудіо/відеонотатки"](../plugins/index.md#enable--disable) у розділі "Плагіни" *Головного меню*.  
2. Додайте [віджет](../widgets/info-widgets.md#audiovideo-notes-widget) на екран мапи для найзручнішого використання.
3. За потреби налаштуйте [параметри запису](#plugin-settings) для кожного профілю.  


## Налаштування плагіна {#plugin-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Налаштування плагіна аудіо-відео Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

</TabItem>

</Tabs>

Для кожного профілю ви можете налаштувати *параметри запису аудіо та відео*.  

| Параметр | Опис |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | Ви можете вибрати, чи використовувати системний застосунок, чи камеру OsmAnd для створення <Translate android="true" ids="photo_notes"/>.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Встановлює розмір фотографій, які будуть зроблені. Можливості камери пристрою визначають кількість доступних опцій. Якщо жодна опція не вибрана, застосунок використовує розмір із системних налаштувань камери пристрою. |
| **<Translate android="true" ids="av_camera_focus"/>** | Встановлює метод фокусування камери. Кількість доступних опцій визначається можливостями камери пристрою. В основному, є три наступні опції: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; та *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Автофокус** є найпопулярнішим і встановлює автоматичний режим для камери; **безперервний** змушує камеру виявляти рухи та відповідно перефокусовуватися; а опція **нескінченність** змушує об'єктив фокусуватися на відстані й таким чином тримати об'єкти у фокусі незалежно від того, наскільки далеко вони знаходяться. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | Якщо увімкнено, під час зйомки камерою відтворюється звук. Зверніть увагу, що відповідно до законодавства про конфіденційність, **у деяких країнах пристрої не матимуть перемикача вимкнення звуку затвора камери**. Якщо ви використовуєте системний застосунок, звук слід вимкнути в застосунку камери. |
| **<Translate android="true" ids="av_audio_format"/>** | Надає вибір форматів для аудіофайлу. Кількість доступних опцій, і яка з них використовується за замовчуванням, визначається параметрами конкретного пристрою. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | Ця опція надає вибір бітрейту для створюваного аудіофайлу. Доступні варіанти бітрейту варіюються від 16 кбіт/с до 128 кбіт/с, або опція "За замовчуванням". Параметр "За замовчуванням" визначається "стандартними" налаштуваннями мікрофона вашого пристрою. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | Якщо увімкнено, OsmAnd використовує системний застосунок для запису відео в <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | Надає вибір опцій, що визначають формат вихідного зображення. Діапазон доступних опцій визначається параметрами конкретного пристрою. Опцією за замовчуванням є *Найвища якість*.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | Якщо увімкнено, старі відеозаписи будуть автоматично перезаписані та замінені новими, якщо розмір сховища досягне встановленого ліміту.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | Визначає верхню межу тривалості записаних відеокліпів. Є опції в діапазоні від 1 хвилини до 30 хвилин.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | Встановлює розмір сховища, призначеного для записаного відео. Є опції в діапазоні від 1024 МБ до 62 ГБ. Конкретний діапазон опцій та опція за замовчуванням визначаються параметрами конкретного пристрою. Системне повідомлення нагадає вам про досягнення встановленого ліміту сховища. |
| **<Translate android="true" ids="notes"/>** | Ця опція перенаправляє вас до [Аудіо/відеонотаток у Моїх місцях](../personal/myplaces.md) - центрального сховища всіх аудіо/відеонотаток, коли-небудь зроблених у застосунку. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | Ви можете встановити значення за замовчуванням для всіх налаштувань аудіо/відеонотаток.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Відкриває діалогове вікно для вибору профілю, з якого потрібно скопіювати конфігурацію запису аудіо/відеонотаток, і встановити її для поточного профілю. |


## Створення окремої нотатки {#create-a-single-note}

Ви можете створити фото-, відео- та аудіонотатку будь-яким із наступних способів:

- За допомогою [віджета](../widgets/info-widgets.md#audiovideo-notes-widget). Якщо нотатка має бути прив'язана до вашого поточного географічного положення.
- За допомогою [контекстного меню](../map/map-context-menu.md#overview) точки на мапі. Якщо нотатка має бути прив'язана до вибраної точки на мапі.


### Створити та закріпити поточне місцезнаходження {#create-&-pin-current-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет плагіна аудіо-відео Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

</TabItem>

</Tabs>

Віджет <Translate android="true" ids="map_widget_av_notes"/> використовується для створення нотатки, прив'язаної до вашого поточного місцезнаходження, і, таким чином, уникнення будь-якого пошуку відповідної точки для нотатки на мапі. Просто торкніться віджета і зробіть нотатку.  

Функції, що надаються віджетом <Translate android="true" ids="map_widget_av_notes"/>, залежать від того, як він налаштований в меню [Налаштувати екран](../widgets/info-widgets.md#audiovideo-notes-widget). Віджет або негайно відкриває камеру для створення нотатки, відповідно до встановлених налаштувань, або спочатку запитує, в якому форматі створити нотатку, а потім відкриває відповідне діалогове вікно запису.


### Створити та закріпити вибране місцезнаходження {#create-&-pin-selected-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Плагін аудіо-відео, контекстне меню, зробити нотатку](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

</TabItem>

</Tabs>

Щоб створити нотатку, прив'язану до вибраної точки на мапі, скористайтеся [контекстним меню](../map/map-context-menu.md#-record-av-note) точки:

1. Довго торкніться точки на мапі, і відкриється [контекстне меню](../map/map-context-menu.md).
2. Торкніться **Дії** та виберіть одну з доступних опцій зі списку:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - щоб зробити аудіонотатку та прив'язати її до вибраної точки на мапі;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - щоб зробити відеонотатку та прив'язати її до вибраної точки на мапі;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - щоб зробити фотонотатку та прив'язати її до вибраної точки на мапі.

3. Залежно від вибраного формату нотатки, відкриється відповідне діалогове вікно запису.


### Діалогове вікно запису {#recorder-dialog}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Запис відеонотатки](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

</TabItem>

</Tabs>

Для *аудіо- та відеонотаток* відображається відповідно аудіо- або відеорекордер. Ви можете:

- Зупинити запис за допомогою іконки *Стоп*.
- Переглянути тривалість запису.
- Показати або приховати екран відео.

Можна зупинити запис дотиком до віджета <Translate android="true" ids="map_widget_av_notes"/>, незалежно від того, чи було розпочато запис з контекстного меню, чи з віджета. Для *фотонотатки* з'являється функціонал камери, і ви можете зробити фото, переглянути результат, прийняти та зберегти його, або зробити нове фото.

:::info Примітка
Автоматично всі фото-, аудіо- та відеозаписи зберігаються у: вкладка <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>.
:::


## Керування окремою нотаткою {#manage-a-single-note}

Ви можете керувати своєю інформацією, думками, ідеями тощо, прив'язаними до географічного місця, наступним чином:

- Переглянути всі нотатки у вигляді списку в [Моїх місцях](../personal/myplaces.md).
- Показати конкретну нотатку на мапі.
- Перейменувати нотатку в Моїх місцях.
- Показати всі нотатки [на мапі](../map/configure-map-menu.md#map-data-layers).
- Відтворити нотатку.
- Створити шляхові точки в [треку](../plugins/trip-recording.md#new-track-recording).
- Експортувати в [JOSM](https://josm.openstreetmap.de/).


### Перегляд у Моїх місцях {#view-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

</TabItem>

</Tabs>

[Мої місця](../personal/myplaces.md) — це центральне сховище для всіх ваших нотаток. Воно дозволяє переглядати всі ваші нотатки у відсортованому списку, відображати конкретну нотатку на мапі та керувати всім списком нотаток.


### Показати на мапі {#show-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

</TabItem>

</Tabs>

Щоб показати конкретну нотатку на мапі, скористайтеся списком нотаток у Моїх місцях, знайдіть потрібну та торкніться її. В результаті з'явиться мапа, яка виділить місцезнаходження нотатки та відкриє контекстне меню. Працювати з нотаткою можна, вибираючи опції в контекстному меню.


### Відтворити {#play}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Контекстне меню плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png)  
![Дії в меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб відтворити нотатку, скористайтеся відповідною опцією в [контекстному меню](../map/map-context-menu#overview), відкритому для нотатки:

- на мапі;
- у Моїх місцях.

Розділ [Деталі](../map/map-context-menu#details) надає більше даних про нотатки, таких як широта та довгота, дата та час створення нотатки, а також фотографії.


### Перейменувати, видалити, поділитися {#rename-delete-share}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Дії в меню "Мої місця" плагіна аудіо-відео](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

</TabItem>

</Tabs>

Щоб керувати нотаткою в Моїх місцях, торкніться трьох вертикальних крапок біля нотатки у списку, і з'являться доступні опції:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Відкрити та переглянути вибране відео або відтворити аудіонотатку.
- **<Translate android="true" ids="shared_string_share"/>**. Легко поділитися вибраною нотаткою з іншими через різні платформи.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Показує точне місцезнаходження та контекстне меню нотатки на мапі.
- **<Translate android="true" ids="shared_string_rename"/>**. Змінити назву нотатки для легшої ідентифікації.
- **<Translate android="true" ids="shared_string_delete"/>**. Назавжди видаляє нотатки із застосунку.


## Віджет запису {#recording-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Віджет](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

</TabItem>

</Tabs>

[Віджет "Аудіо/відеонотатки"](../widgets/info-widgets.md#audiovideo-notes-widget) створює нотатки, фотографії, аудіо- та відеофайли та прив'язує їх до вашого поточного місцезнаходження. Віджет має кілька опцій, які можна встановити як дію за замовчуванням, що виконується віджетом при дотику до екрана.  

Додавання віджета на екран необхідно, якщо ви віддаєте перевагу уникненню пошуку геолокації на мапі та прив'язці нотаток до вашого поточного місцезнаходження за замовчуванням. Щоб додати або налаштувати віджет, виконайте наведені нижче кроки:  

1. Перейдіть до:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Виберіть  **<Translate android="true" ids="map_widget_left"/>** або **<Translate android="true" ids="map_widget_right"/>**.

3. Торкніться **<Translate android="true" ids="map_widget_av_notes"/>**, і відкриється контекстне меню віджета.

4. Виберіть опцію, яку ви бажаєте використовувати за замовчуванням, торкнувшись віджета:

    - **<Translate android="true" ids="av_def_action_choose"/>** - відкрити вибір опцій.

    - **<Translate android="true" ids="av_def_action_audio"/>** - почати запис аудіоповідомлення.

    - **<Translate android="true" ids="av_def_action_video"/>** - почати запис відео.

    - **<Translate android="true" ids="av_def_action_picture"/>** - почати фотографувати.

    ![Віджет](@site/static/img/plugins/audio-video-notes/widget.png)  

**Використання зовнішніх пристроїв введення (*Android*)**. Якщо ви використовуєте [зовнішній пристрій введення](https://osmand.net/docs/user/map/interact-with-map#external-input-devices), ви можете почати та зупинити аудіо/відеонотатки без дотику до екрана. Для цього призначте дію «Додати аудіонотатку» або «Додати відеонотатку» клавіші:<br/>
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

Після призначення клавіша працює як перемикач:
- Перше натискання запускає запис аудіо- або відеонотатки (залежно від вибраної дії).
- Друге натискання тієї ж клавіші зупиняє запис.

Коли запис зупинено за допомогою зовнішнього пристрою введення, контекстне меню не відображається, що полегшує використання OsmAnd у повністю безруких сценаріях (наприклад, під час їзди на мотоциклі чи водіння автомобіля).


## Керування кількома нотатками {#manage-multiple-notes}

### Керування в Моїх місцях {#manage-in-my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню "Мої місця" плагіна аудіо-відео, три дії](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)

</TabItem>

</Tabs>

Опції на нижній панелі можна використовувати для керування списком нотаток у меню [Мої місця](../personal/myplaces.md#audiovideo-notes).


### Поділитися з шляховими точками GPX {#share-with-gpx-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Поділитися](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

</TabItem>

</Tabs>

Ви можете поділитися всіма нотатками, включаючи [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes), який містить вибрані нотатки як шляхові точки, на екрані [Мої місця](../personal/myplaces.md#audiovideo-notes), натиснувши кнопку "Поділитися" в нижньому меню. Поруч з кожною нотаткою з'явиться прапорець для вибору конкретних нотаток. Над нотатками є два прапорці: *А/В нотатки за датою* для вибору всіх нотаток і прапорець *Місцезнаходження*. Прапорець *Місцезнаходження* дозволяє додати окремий GPX-файл з координатами та даними.  

Кожна нотатка містить час її створення, обсяг даних, а якщо це запис, то час запису та дані про місцезнаходження, ви можете додати дані GPX.  
Підтримувані формати файлів: аудіо - **3gp**, відео - **mp4**, фото -**jpg**.


### Показати все на мапі {#show-all-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Показати нотатки на мапі](@site/static/img/plugins/audio-video-notes/recording_layer.png)

</TabItem>

</Tabs>

Відображені на мапі нотатки можуть розповісти вашу історію: де ви помітили знаки, які двері потрібно було відчинити, де вихід, оптимальний шлях тощо. Ви можете показувати нотатки [по одній](#show-on-the-map) або всі одразу.

Використовуйте шар мапи [Записи](../map/point-layers-on-map#-audio--video-points-android), щоб показати або приховати всі нотатки. Якщо ви увімкнете його в меню [Налаштувати мапу](../map/configure-map-menu), шар "Записи" покаже всі нотатки на мапі.

![Немає нотаток на мапі](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Нотатки на мапі](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Шляхові точки, створені з нотаток {#waypoints-created-from-notes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Нотатки та шляхові точки на мапі](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png)  
![Шляхові точки на треку](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

</TabItem>

</Tabs>

Шляхова точка створюється, коли до треку додається аудіо-, відео- або фотонотатка. Шляхові точки існують у межах треку. Якщо трек видимий, його шляхові точки також видимі. Таким чином, ці нотатки можуть бути видимі на мапі всі одразу або лише на конкретному видимому треку. В останньому випадку нотатки відображаються як шляхові точки треку.

:::note
Якщо трек експортовано, шляхові точки не можна переглянути або відтворити, оскільки аудіо/відео/фотонотатки зберігаються лише на пристрої та доступні лише вам на цьому пристрої.
:::


### Створення шляхових точок {#create-waypoints}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Ручне додавання шляхової точки до треку](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

</TabItem>

</Tabs>

Існує два способи створення шляхової точки: автоматично та вручну.

1. **Автоматично** шляхова точка створюється, якщо ви робите аудіо/відео/фотонотатку під час [запису поїздки](../plugins/trip-recording), незалежно від геолокації, якщо вона прив'язана до поточного положення або будь-якого місця, і, таким чином, незалежно від засобів, що використовуються для цього: чи то [віджет](../widgets/info-widgets#audiovideo-notes-widget), чи [контекстне меню](../map/map-context-menu#-audiovideo-note).

    Усі шляхові точки, додані автоматично, отримують автоматично призначену назву. Назва створюється відповідно до формату, вказаного нижче для аудіо/відео/фотофайлу, і має [коротке посилання](https://wiki.openstreetmap.org/wiki/Shortlink). Приклад шляхових точок на малюнку вище показує автоматично та вручну створені шляхові точки, де перші чотири були створені автоматично, а остання — вручну.

2. **Вручну** шляхова точка створюється через [контекстне меню](../map/map-context-menu#-audiovideo-note) наступним чином:

    - Виберіть потрібну аудіо/відео/фотонотатку на мапі.
    - Торкніться **Дії**, а потім торкніться **Додати трек**.
    - Виберіть трек, до якого ви хочете додати шляхову точку.
    - Відкриється діалогове вікно *<Translate android="true" ids="quick_action_add_gpx"/>* , яке дозволяє встановити деякі властивості, такі як назва шляхової точки, іконка, колір та інші. Після завершення торкніться **Зберегти**.

:::info Примітка
Ви можете вказати назви для кожної шляхової точки, створеної вручну.
:::


### Перегляд шляхових точок {#view-waypoints}

- Шляхова точка доступна для перегляду як шляхова точка на мапі та у списку [шляхових точок конкретного треку](../map/tracks/track-context-menu.md#points--waypoints). Видалення шляхової точки не видаляє відповідну аудіо/відео/фотонотатку.

- Аудіо-, відео- або фотонотатка доступна для перегляду на мапі та у списку аудіо/відеонотаток у [Моїх місцях](../plugins/audio-video-notes#view-in-my-places). Видалення аудіо-, відео- або фотонотатки не видаляє відповідну шляхову точку.

- На мапі шляхова точка та аудіо-, відео- або фотонотатка можуть бути видимими або невидимими. Це визначається тим, який шар наразі увімкнено для профілю.

- Коли ні шар "Треки", ні шар "Записи" не увімкнені, і шляхові точки, і нотатки можна показати, торкнувшись їх у Моїх місцях. У цьому випадку мапа показує місцезнаходження торкнутої нотатки або, відповідно, місцезнаходження всіх шляхових точок торкнутого треку.

| Видимі | Увімкнений шар |
| --- | --- |
| Лише шляхові точки | Шар "Треки" |
| Шляхові точки та нотатки | Шар "Треки" та "Записи" |
| Лише нотатки | Шар "Записи" |
| Жодного | Ні шар "Треки", ні шар "Записи". |


### GPX-файл зі шляховими точками {#gpx-file-with-waypoints}

![Шляхова точка у GPX-файлі](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)  

При перегляді GPX-файлу треку, до якого додано шляхову точку з аудіо/відео/фотонотатки, шляхова точка виглядатиме як у прикладі нижче, маючи координати, часову мітку, назву відповідної нотатки та коротке посилання.


## Різне {#miscellaneous}

### Деталі назви файлу {#file-name-details}

Плагін <Translate android="true" ids="audionotes_plugin_name"/> генерує аудіо/відео/фотофайли у наступному форматі:

    `{SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}`

де `SHORTLINK_LOCATION` вказує широту та довготу місцезнаходження, до якого прив'язаний файл. `SHORTLINK_LOCATION` кодується відповідно до специфікації [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Експорт до JOSM {#export-to-josm}

![Аудіо-відео нотатки в Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)  

Щоб переглянути все пізніше, ви можете експортувати трек разом з усіма медіафайлами та переглянути їх у [редакторі JOSM](https://josm.openstreetmap.de/). Зверніть увагу, що медіафайли повинні бути розміщені у відповідній папці. Ви можете дізнатися, в якій саме, натиснувши на відео. З'явиться сповіщення про те, що файл недоступний, і потрібно розмістити правильний файл у вказаній папці.  


## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)