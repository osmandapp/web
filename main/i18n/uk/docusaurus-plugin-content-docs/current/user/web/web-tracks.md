---
source-hash: ece3e6010ee14839c5fe53b38593cda3c765a31a9395566df04b16ce2b73c3b4
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
- Додавання треків на мапу (папка **Видимі на мапі**).
- Перегляд інформації про всі треки та графіку
- Модифікація треків та додавання їх до Cloud.
- Завантаження та видалення треків.
- Створення нових папок або видалення їх.
- Завантаження папок як колекції OSF або OBF.


## Видимі на мапі {#visible-on-the-map}

Перегляд **Видимі на мапі** перелічує всі треки, які зараз відображаються на мапі. Будь-який трек можна додати до цього списку з основної панелі Треків за допомогою опції **⋮ → Зробити трек видимим**.

Треки, видимі на мапі, виділяються синім кольором, тоді як треки, які зараз приховані, відображаються сірим. Перемикач поруч з кожним треком дозволяє швидко показати або приховати його. Кнопка **Приховати всі** вимикає всі видимі треки одразу.

Під основним списком розділ **Нещодавно видимі** відображає треки, які були показані на мапі раніше. Це полегшує повторне увімкнення треку без повторного пошуку в папках або в OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Меню папки треків {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Натисніть кнопку з трьома крапками (⋮), щоб відкрити меню *Папка треків*. Звідси ви можете:

 - Завантажити як OSF.
 - Завантажити як колекцію OBF. Експортувати папку в форматі OsmAnd Binary, обравши або [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) або [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. Ви можете завантажити офлайн-мапу OBF і відкрити її в OsmAnd на вашому пристрої. Вона підходить для відображення великої кількості треків на мапі.
      -  **Travel OBF**. Ви також можете імпортувати мапу треків як туристичний буклет, який дозволяє вибирати окремі треки на мапі та використовувати їх як звичайні файли GPX. Туристичний буклет також підтримує функції, такі як відображення треків як точок, фільтрацію треків за типом активності та фільтрацію контрольних точок.
 - Перейменувати. Відкриває діалог, де ви можете ввести нову назву для вибраної папки. Зміна синхронізується з OsmAnd Cloud і з'явиться на всіх підключених пристроях.
 - Видалити. Відкриває діалог підтвердження. Видалення папки безповоротно видаляє її разом з усіма треками, які вона містить. Ця дія також синхронізується через OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## Хмарні треки {#cloud-tracks}

GPX-треки, які у вас є в [OsmAnd Cloud](../personal/osmand-cloud.md), будуть доступні для відображення та редагування після входу в систему. Тільки для **користувачів Pro** <ProFeature/> та для користувачів [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) (які можуть завантажувати свої дані навіть після закінчення терміну дії підписки Pro).

Наступні функції доступні після вибору хмарного треку:

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)

- Екрани інформації:
  - *Інформація* - відображення даних треку.
  - *Висота* - графік висоти.
  - *Швидкість* - графік швидкості.
  - *Нахил* - графік нахилу.
  - *Налаштування* - список профілів навігації для інструменту *Створити маршрут*.
  - *Повороти* - згенерований список приблизних інструкцій поворотів на основі геометрії треку.
  - *Тип дороги* - розбиває трек на сегменти за класифікацією доріг .
  - *Покриття* - показує типи поверхонь треку вздовж маршруту.
  - *Плавність* - відображає плавність сегментів на основі тегів OSM .

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details.png)

- Кнопки дій:
  - *Редагувати трек* - додавання хмарного треку до локального для редагування (кнопка _Edit locality_ на панелі).
  - *Завантажити GPX* - завантажує трек на ПК.
  - *Перерахувати* Висоту (Супутник) - відображає графік висоти вибраного треку.
  - *Видалити трек* - видаляє трек.
  - *Закрити трек* - закрити трек.


## Пов'язані статті {#related-articles}

- [Керування треками](../personal/tracks/manage-tracks.md)
- [Аналізатор треків](../web/web-tracks-analyzer.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)