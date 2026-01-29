---
source-hash: 4427520649e37a1c6251f034dde8d8f74d204717b078947ad26793d8ccee0640
sidebar_position: 5
sidebar_label: Tracks
title: Tracks
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

Веб-планувальник надає вам простий спосіб працювати з вашими особистими даними безпосередньо в браузері. Після входу в систему ви можете відкривати свої треки, коригувати їх, створювати нові або завантажувати файли з вашого комп'ютера. 

Усі зміни автоматично синхронізуються через [OsmAnd Cloud](../personal/osmand-cloud.md), тому все, що ви оновлюєте в мережі, з'являється на ваших пристроях, а все, що ви створюєте на телефоні, відображається тут. Це полегшує перехід між платформами та збереження ваших даних послідовними скрізь, де ви використовуєте OsmAnd.


## Як використовувати {#how-to-use}

Це платна функція <ProFeature/>. Щоб використовувати її, увійдіть у свій обліковий запис OsmAnd Pro.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

Розділ Треки містить усі інструменти та дії, пов'язані з треками. Доступні такі опції:

- Показати треки з [OsmAnd Cloud](#cloud-tracks).
- Додавання треків на мапу (папка **Visible on map**).
- Looking all tracks info and graph
- Modify tracks and add it to Cloud.
- Download and delete tracks.
- Create new folders or delete it.
- Download folders as OSF or OBF collection.


## Visible on the Map {#visible-on-the-map}

Перегляд **Visible on map** перелічує всі треки, які зараз відображаються на мапі. Будь-який трек можна додати до цього списку з основної панелі Треків за допомогою опції **⋮ → Make track visible**.

Треки, видимі на мапі, виділяються синім кольором, тоді як треки, які зараз приховані, відображаються сірим. Перемикач поруч з кожним треком дозволяє швидко показати або приховати його. Кнопка **Hide all** вимикає всі видимі треки одразу.

Під основним списком розділ **Recently visible** відображає треки, які були показані на мапі раніше. Це полегшує повторне увімкнення треку без повторного пошуку в папках або в OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Track folder menu {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Натисніть кнопку з трьома крапками (⋮), щоб відкрити меню *Track Folder*. Звідси ви можете:

 - Download as OSF.
 - Download as OBF Collection. Export the folder in OsmAnd Binary Format, choosing either an [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) or a [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. You can download an offline OBF map and open it with OsmAnd on your device. It is suitable for displaying a large number of tracks on the map.
      -  **Travel OBF**. You can also import a map of tracks as a travel book, which allows you to select individual tracks on the map and use them like normal GPX files. A travel book also supports features such as displaying tracks as points, filtering tracks by activity type, and filtering waypoints.
 - Rename. Opens a dialog where you can enter a new name for the selected folder. The change is synced to OsmAnd Cloud and will appear on all connected devices.
 - Delete. Opens a confirmation dialog. Deleting a folder removes it permanently along with all tracks it contains. This action is also synced through OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## Cloud Tracks {#cloud-tracks}

GPX-треки, які у вас є в [OsmAnd Cloud](../personal/osmand-cloud.md), будуть доступні для відображення та редагування після входу в систему. Тільки для **Pro users** <ProFeature/> та для користувачів [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (які можуть завантажувати свої дані навіть після закінчення терміну дії підписки Pro).

Наступні функції доступні після вибору хмарного треку:

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Slope* - slope graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.
  - *Turns* - a generated list of approximate turn instructions based on the track geometry.
  - *Road type* - breaks the track into segments by road classification .
  - *Surface* - shows the types of track surfaces along the route.
  - *Smoothness* - displays segment smoothness based on OSM tags .

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details.png)

- Action buttons:
  - *Edit track* - adding cloud track to local for editing (_Edit locality_ button on the panel).
  - *Download GPX* - downloads the track to the PC.
  - *Recalculate* Elevation (Satellite) - recalculates elevation values for the selected track and shows them on the elevation graph.
  - *Delete Track* - deletes the track.
  - *Close track* - close the track.


## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [Tracks Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)