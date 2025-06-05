---
source-hash: 0d69e9a2accb19cbab926b804013488fe55ad5c0f34a7d4defe77c15e0651bc0
sidebar_position: 10
title:  Імпорт / Експорт
---
import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
## Огляд {#overview}
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
Інструменти **Імпорт** та **Експорт** в OsmAnd дозволяють керувати вашими даними. Ви можете переміщувати свої профілі, обране, треки та інші налаштування за допомогою спеціального формату через додатки на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями, а також дозволяє ділитися ними з іншими користувачами OsmAnd.
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
:::note Великий розмір
*Якщо розмір вибраних даних значний, додатку знадобиться час для підготовки файлу `.osf`.*
:::


## Експорт / Імпорт даних {#export--import-data}

*Імпорт* та *Експорт* дозволяють зберігати дані зі згенерованих **файлів** `.osf` або використовувати [онлайн-джерела](../map/raster-maps.md), що дає можливість відновити інформацію після перевстановлення.

**Типи даних**, доступні для імпорту/експорту:

- **Налаштування:**  
        [Профілі](../personal/profiles.md#actions), &nbsp;[OsmAnd/Загальні налаштування](../personal/global-settings.md), &nbsp;[Кольори](../personal/color-palette-schemes.md), &nbsp;[Швидка дія](../widgets/quick-action.md), &nbsp;[Тип POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Уникнути дороги](../map/map-context-menu.md#avoid-road).
- **Мої місця:**  
        [Обране](../personal/favorites.md#export--import), &nbsp;[Треки](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Нотатки OSM*, *Редагування OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Аудіо/Відео нотатки](../plugins/audio-video-notes.md), &nbsp;[Маркери на карті](../personal/markers.md), &nbsp;[Історія маркерів*, *Історія пошуку*, *Історія навігації](../personal/global-settings.md#history), &nbsp;*Маршрут*.
- **Ресурси:**  
        [Стиль відображення](../map/vector-maps.md#custom-map-style), &nbsp;[Маршрутизація](../navigation/routing/osmand-routing.md), &nbsp;[Онлайн-двигуни маршрутизації](../navigation/routing/online-routing.md), &nbsp;[Джерела карт*, *Стандартні/Офлайн-карти](../map/raster-maps.md), &nbsp;[Карти Wikipedia та Travel](../plan-route/travel-guides.md), &nbsp;[Морські карти](../plugins/nautical-charts.md), &nbsp;[Дорожні карти](../map/vector-maps.md#road-style), &nbsp;[Топографічні карти](../plugins/topography.md), &nbsp;[Голосові підказки (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Голосові підказки (записані)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Резервна копія обраного](../personal/favorites.md#automatic-favorites-backup).


### Експорт {#export}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Profiles Actions Export Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Backup local Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Profiles Actions Export iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Усі налаштовані та створені вами дані можна експортувати за допомогою ***меню Експорт***. Меню складається з трьох груп: **Налаштування**, **Мої місця** та **Ресурси**, які містять усі доступні папки файлів. У кожній папці можна вибрати файли для експорту, по одному або всі одразу. **Усі експортовані файли зберігаються у форматі `.osf`**.  


### Імпорт {#import}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import Android](@site/static/img/personal/profiles/profile_actions_import_android.png) | ![Profiles Actions Import 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) | ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) |

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  

| |
| --- | --- | --- |
| ![Profiles Actions Import iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) | ![Profiles Actions Import 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) | ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) |

</TabItem>

</Tabs>

Відкриває та відновлює файли `.osf`. Торкніться файлу у файловому менеджері пристрою або скористайтеся кнопкою дії.

- *Деякі елементи вже існують*. Ви можете скористатися цією функцією, щоб зберегти обидва файли або замінити всі.
- *Перезапуск*. Після імпорту файлів додаток необхідно перезапустити.


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) — це альтернативний ресурс, який потрібен для збереження ваших особистих налаштувань та даних додатку. Ви можете використовувати ці дані на будь-якому пристрої, де можна встановити додаток OsmAnd, або під час використання настільного додатку. Будь-які внесені вами зміни можна синхронізувати.


## Запобігання втраті даних {#preventing-data-loss}

У версіях OsmAnd для *Android* та *iOS*, якщо ви повністю **видалите** додаток або виберете **Очистити дані** на своєму пристрої в меню Налаштування, інформація про додаток, папка з даними також буде видалена з файлового менеджера пристрою. Якщо ви не вживете запобіжних заходів, це призведе до **втрати всіх завантажених карт для даних OsmAnd, усіх збережених Обраних, треків GPX, голосових підказок (TTS) та [інших даних](#export--import-data).**

Є два способи зберегти ваші дані перед перевстановленням додатка OsmAnd:

- Використовуйте [OsmAnd Cloud](#osmand-cloud). Ви можете створити резервну копію своїх даних за допомогою функцій OsmAnd, таких як [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), як безкоштовна версія, або [OsmAnd Pro](../purchases/index.md), платна підписка з більшою кількістю функцій.
- [Експортуйте файл OSF](#export) зі своїми даними. Скопіюйте файл `.osf` до папки на своєму пристрої або в OsmAnd Cloud. Після перевстановлення OsmAnd [імпортуйте цей файл `.osf`](#import) до додатка OsmAnd.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Керування треками](../personal/tracks/manage-tracks.md#import--export-track)
- [Історія пошуку](../search/search-history.md#export-and-share)
- [Схеми колірної палітри](../personal/color-palette-schemes.md)

### Поширені проблеми та рішення {#common-issues-and-solutions}

1. Як перенести Обране та Треки на новий пристрій. [(перевірити)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. У мене є файл GPX, як його імпортувати в OsmAnd? [(перевірити)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Видалення даних карти після оновлення додатка (якщо вибрано «Багатокористувацьке сховище 1»). [(перевірити)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)

> *Цю статтю востаннє оновлено в січні 2025 року*