---
source-hash: 2e0e202dc914399cfc04af97a092ae9d40cd89a34b4ce41472d2869d9810d626
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
- Перегляд інформації про всі треки та графіків
- Редагування треків та додавання їх до Cloud.
- Завантаження та видалення треків.
- Створення нових папок або видалення їх.
- Завантаження папок як OSF або OBF колекції.


## Visible on the Map {#visible-on-the-map}

Перегляд **Visible on map** перелічує всі треки, які зараз відображаються на мапі. Будь-який трек можна додати до цього списку з основної панелі Треків за допомогою опції **⋮ → Make track visible**.

Треки, видимі на мапі, виділяються синім кольором, тоді як треки, які зараз приховані, відображаються сірим. Перемикач поруч з кожним треком дозволяє швидко показати або приховати його. Кнопка **Hide all** вимикає всі видимі треки одразу.

Під основним списком розділ **Recently visible** відображає треки, які були показані на мапі раніше. Це полегшує повторне увімкнення треку без повторного пошуку в папках або в OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Track folder menu {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Натисніть кнопку з трьома крапками (⋮), щоб відкрити меню *Track Folder*. Звідси ви можете:

 - Download as OSF.
 - Download as OBF Collection. Експорт папки в бінарному форматі OsmAnd, обравши або [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) чи [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. Ви можете завантажити офлайн-мапу OBF та відкрити її в OsmAnd на вашому пристрої. Вона підходить для відображення великої кількості треків на мапі.
      -  **Travel OBF**. Ви також можете імпортувати мапу треків як travel book, що дозволяє вибирати окремі треки на мапі та використовувати їх як звичайні GPX-файли. Travel book також підтримує функції, такі як відображення треків як точок, фільтрація треків за типом активності та фільтрація waypoints.
 - Rename. Відкриває діалог, де ви можете ввести нову назву для вибраної папки. Зміна синхронізується з OsmAnd Cloud і з'явиться на всіх підключених пристроях.
 - Delete. Відкриває діалог підтвердження. Видалення папки безповоротно видаляє її разом з усіма треками, які вона містить. Ця дія також синхронізується через OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## Cloud Tracks {#cloud-tracks}

GPX-треки, які у вас є в [OsmAnd Cloud](../personal/osmand-cloud.md), будуть доступні для відображення та редагування після входу в систему. Тільки для **Pro users** <ProFeature/> та для користувачів [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (які можуть завантажувати свої дані навіть після закінчення терміну дії підписки Pro).

Наступні функції доступні після вибору хмарного треку:
- *Information* - відображення даних треку.
- *Elevation* - графік висоти.
- *Speed* - графік швидкості.
- *Slope* - графік нахилу.
- *Recalculate Elevation (Satellite)* - перераховує значення висоти для вибраного треку та показує їх на графіку висоти.
- *Road type* - розбиває трек на сегменти за класифікацією доріг.
- *Surface* - показує типи поверхонь треку вздовж маршруту.
- *Smoothness* - відображає гладкість сегментів на основі тегів OSM.

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_new.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details_new.png)


## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [Tracks Analyzer](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)