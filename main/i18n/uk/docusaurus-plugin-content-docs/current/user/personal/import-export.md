---
source-hash: 30d9f4266ee23c8fe8ca807b128433f5d3f472e346e8671246ace43ed3c0c128
sidebar_position: 10
title:  Імпорт / Експорт
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Огляд {#overview}

Інструменти **Імпорт** та **Експорт** в OsmAnd дозволяють керувати вашими даними. Ви можете переміщувати свої профілі, обране, треки та інші налаштування за допомогою спеціального формату через програми на вашому пристрої. Цей процес спрощує збереження та передачу даних між пристроями, а також дозволяє ділитися ними з іншими користувачами OsmAnd.

:::note Large size
*If the size of your selected data is significant, it will take time for the application to prepare the `.osf` file.*
:::


## Експорт / Імпорт даних {#export--import-data}

*Імпорт* та *Експорт* дозволяють зберігати дані з генерованих `.osf` **файлів** або використовувати [онлайн-джерела](../map/raster-maps.md), що дає змогу відновити інформацію після перевстановлення.

**Типи даних**, доступні для імпорту/експорту:

- **Налаштування:**  
        [Профілі](../personal/profiles.md#actions), &nbsp;[OsmAnd/Загальні налаштування](../personal/global-settings.md), &nbsp;[Кольори](../personal/color-palette-schemes.md), &nbsp;[Швидка дія](../widgets/quick-action.md), &nbsp;[Тип POI](../map/point-layers-on-map.md#poi-types), &nbsp;[Уникати дорогу](../map/map-context-menu.md#avoid-road).
- **Мої місця:**  
        [Обране](../personal/favorites.md#export--import), &nbsp;[Треки](../personal/tracks/manage-tracks.md#import--export-track), &nbsp;[Нотатки OSM*, *Редагування OSM](../plugins/osm-editing.md#create--modify-poi), &nbsp;[Аудіо/відео нотатки](../plugins/audio-video-notes.md), &nbsp;[Маркери на карті](../personal/markers.md), &nbsp;[Історія маркерів*, *Історія пошуку*, *Історія навігації](../personal/global-settings.md#history), &nbsp;*Ітінерер*.
- **Ресурси:**  
        [Стиль візуалізації](../map/vector-maps.md#custom-map-style), &nbsp;[Маршрутизація](../navigation/routing/osmand-routing.md), &nbsp;[Онлайн-движки маршрутизації](../navigation/routing/online-routing.md), &nbsp;[Джерела карт*, *Стандартні/Офлайн карти](../map/raster-maps.md), &nbsp;[Карти Вікіпедії та Подорожей](../plan-route/travel-guides.md), &nbsp;[Морські карти](../plugins/nautical-charts.md), &nbsp;[Карти доріг](../map/vector-maps.md#road-style), &nbsp;[Топографічні карти](../plugins/topography.md), &nbsp;[Голосові підказки (TTS)](../navigation/guidance/voice-navigation.md#tts-text-to-speech), [Голосові підказки (записані)](../navigation/guidance/voice-navigation.md#recorded-voice-prompts), &nbsp;[Резервне копіювання Обраного](../personal/favorites.md#automatic-favorites-backup).


### Експорт {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,export_to_file"/>*  

![Дії з профілями Експорт Android](@site/static/img/personal/profiles/profile_actions_export_1_andr.png) ![Локальне резервне копіювання Android](@site/static/img/personal/profiles/profile_actions_export_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,backup_into_file"/>*

![Дії з профілями Експорт iOS](@site/static/img/personal/profiles/profile_actions_export_1_ios.png)   ![Дії з профілями Експорт iOS](@site/static/img/personal/profiles/profile_actions_export_2_ios.png)

</TabItem>

</Tabs>

Усі налаштовані та створені вами дані можна експортувати за допомогою ***меню Експорт***. Меню складається з трьох груп: **Налаштування**, **Мої місця** та **Ресурси**, які містять усі доступні папки з файлами. Наприклад, у розділі Ресурси карти згруповані за типом у *<Translate android="true" ids="standard_maps"/>, <Translate android="true" ids="wikipedia_and_travel_maps"/>, <Translate android="true" ids="nautical_maps"/>*, та *<Translate android="true" ids="topography_maps"/>* для полегшення навігації та вибіркового експорту. Ви можете вибрати файли для експорту в кожній папці, по одному або всі одразу. **Усі експортовані файли зберігаються у форматі `.osf`**.  


### Імпорт {#import}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,import_export,shared_string_import"/>*  

![Дії з профілями Імпорт Android](@site/static/img/personal/profiles/profile_actions_import_android.png) ![Дії з профілями Імпорт 1 Android](@site/static/img/personal/profiles/profile_actions_import_1_android.png) 

<!-- ![Profiles Actions Import 2 Android](@site/static/img/personal/profiles/profile_actions_import_2_android.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,local_backup,restore_from_file"/>*  


![Дії з профілями Імпорт iOS](@site/static/img/personal/profiles/profile_actions_import_ios.png) ![Дії з профілями Імпорт 1 iOS](@site/static/img/personal/profiles/profile_actions_import_1_ios.png) 
<!--  ![Profiles Actions Import 2 iOS](@site/static/img/personal/profiles/profile_actions_import_2_ios.png) -->

</TabItem>

</Tabs>

Відкриває та відновлює файли `.osf`. Торкніться файлу у файловому менеджері пристрою або скористайтеся кнопкою дії.

- *Деякі елементи вже існують*. Ви можете скористатися цією функцією, щоб зберегти обидва файли або замінити всі.
- *Перезапуск*. Після імпорту файлів програму необхідно перезапустити.

Підтримувані типи файлів для імпорту:
- [Треки, маршрути](https://www.osmand.net/docs/user/personal/tracks/manage-tracks/) та [обране](https://osmand.net/docs/user/personal/favorites/): `.gpx`, `.kml`, `.kmz`. Файли KML та KMZ імпортуються з конвертацією у формат GPX.
- [Векторні карти OsmAnd](https://osmand.net/docs/user/map/vector-maps): `.obf`.
- [Тайли онлайн-карт](https://www.osmand.net/docs/user/map/raster-maps/): `.sqlitedb`. 
- [Резервні копії та профілі](#export): `.osf`.
- [Висотні карти / 3D дані](https://www.osmand.net/docs/user/plugins/topography/): `.geotif`.
- [Інше](color-palette-schemes.md): `.txt`.

Для технічного огляду всіх підтримуваних форматів див. [Формати файлів OsmAnd](https://www.osmand.net/docs/technical/osmand-file-formats/).


### OsmAnd Cloud {#osmand-cloud}

[OsmAnd Cloud](../personal/osmand-cloud.md) — це альтернативний ресурс, необхідний для збереження ваших особистих налаштувань і даних програми. Ви можете використовувати ці дані на будь-якому пристрої, доступному для встановлення програми OsmAnd, або при використанні десктопної версії. Будь-які внесені вами зміни можуть бути синхронізовані.


## Запобігання втраті даних {#preventing-data-loss}

У версіях OsmAnd для *Android* та *iOS*, якщо ви повністю **видалите** програму або виберете **Очистити дані** на своєму пристрої в меню налаштувань інформації про програму, папка з даними також буде видалена з файлового менеджера пристрою. Якщо не вжити запобіжних заходів, це призведе до **втрати всіх завантажених карт для даних OsmAnd, усіх збережених Обраних місць, треків GPX, голосових підказок (TTS) та [інших даних](#export--import-data).**

Існує два способи зберегти ваші дані перед перевстановленням програми OsmAnd:

- Використовуйте [OsmAnd Cloud](#osmand-cloud). Ви можете створити резервну копію своїх даних за допомогою функцій OsmAnd, таких як [OsmAnd Start](../personal/osmand-cloud.md#osmand-start), у безкоштовній версії, або [OsmAnd Pro](../purchases/index.md), платної підписки з більшою кількістю функцій.
- [Експортуйте OSF-файл](#export) з вашими даними. Скопіюйте файл `.osf` у папку на вашому пристрої або в OsmAnd Cloud. Після перевстановлення OsmAnd [імпортуйте цей файл `.osf`](#import) до програми OsmAnd.


## Пов'язані статті {#related-articles}

- [Профілі (Налаштування)](./profiles.md)
- [Керування треками](../personal/tracks/manage-tracks.md#import--export-track)
- [Історія пошуку](../search/search-history.md#export-and-share)
- [Схеми палітри кольорів](../personal/color-palette-schemes.md)

### Поширені проблеми та їх вирішення {#common-issues-and-solutions}

1. Як перенести Обране та Треки на новий пристрій. [(перевірити)](../troubleshooting/setup.md#how-to-transfer-favorites-and-tracks-to-a-new-device)
2. У мене є файл GPX, як його імпортувати в OsmAnd? [(перевірити)](../troubleshooting/setup.md#i-have-a-gpx-file-how-do-i-import-it-into-osmand)
3. Видалення даних карти після оновлення програми (якщо вибрано “Сховище для кількох користувачів 1”). [(перевірити)](../troubleshooting/maps-data#deleting-map-data-after-the-app-update-if-multiuser-storage-1-is-selected)