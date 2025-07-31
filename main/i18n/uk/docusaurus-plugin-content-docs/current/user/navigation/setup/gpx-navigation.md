---
source-hash: ae9687e6f1f23d70428677a5ebd5a73f6a67a71286137aec6ff175aad5589758
sidebar_position: 2
title: Навігація за треком
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



## Огляд {#overview}

Опція *Навігація за треком* (GPX) дозволяє вам слідувати заздалегідь визначеному маршруту або треку на карті. Це може бути особливо корисним для активного відпочинку, такого як піші прогулянки, їзда на велосипеді або бездоріжжя, де наявність запланованого маршруту підвищує безпеку та ефективність. Якщо ви подорожуєте в організованій групі, ця функція допомагає вам і кожному члену групи мати однакову інформацію про маршрут.

Опцію *Навігація за треком* також можна використовувати в повсякденному житті. Ви можете використовувати раніше [записаний трек](../../plugins/trip-recording.md) або [створити трек](../../personal/tracks/manage-tracks.md#create-a-track) та поділитися ним зі своєю родиною чи друзями, замість того, щоб пояснювати їм маршрут. Ви також можете використовувати [маршрути на карті OsmAnd](../../../../blog/routes/) для навігації. Як їх виділити на карті та що означають їхні кольори, описано в розділі [Маршрути](../../map/vector-maps.md#routes) статті *Векторні карти*.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Вибір треку {#select-the-track}

Перш ніж використовувати опцію *Навігація за треком*, вам потрібно [відобразити трек на карті](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd підтримує трек як лінію (**Геометрія**) та трек як маршрут (**Маршрут**) або їх комбінацію (**OsmAnd** за допомогою [Планування маршруту](../../plan-route/create-route.md)). Якщо у вас є трек як колекція **Точок**, ви можете використовувати [Навігацію за маркерами](./markers-navigation.md).


- Трек **Геометрія** матиме дуже базову навігацію за замовчуванням і не надаватиме точних поворотів, назв вулиць та смуг руху. Щоб отримати відсутню інформацію, вам потрібно використовувати інструмент [Прив'язати до доріг](#attach-to-the-roads).

- Трек **Маршрут** розрахує маршрут між точками маршруту за обраним профілем. В основному, всі точки маршруту будуть розглядатися як проміжні точки. Якщо ваш маршрут складається з понад 50 точок, дуже ймовірно, що це неправильно налаштований трек **Геометрія**.

- Трек **OsmAnd** складається як з геометрії, так і з частин маршруту, і він підходить для надання точно таких же вказівок, як і навігація за замовчуванням. Ці треки створюються за допомогою [Планування маршруту](../../plan-route/create-route.md) або [Веб-версії](../../web/index.md). Можна зберегти цей трек як трек лише **Геометрія** як [**Спрощений**](../../plan-route/create-route.md#save-route) для використання в сторонніх програмах.


### Почати GPX-навігацію {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Навігацію по треку можна розпочати за допомогою кнопки швидкої дії в [контекстному меню треку](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (відкривається вибором одного з [виділених треків](./route-navigation.md#history-of-previous-routes) на карті або натисканням на файл треку в розділі [Мої місця](../../personal/myplaces.md) *Головного меню*) або з меню навігації, яке відкривається натисканням:

- [*Кнопка навігації*](../../widgets/map-buttons.md#directions) на екрані карти.
- *Розділ навігації* в *Головному меню* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- У [*Меню навігації*](./route-navigation.md#navigation-menu) перейдіть до *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Вибрати сегменти {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Для навігації, якщо вибраний трек складається з кількох сегментів або треків, ви можете вибрати або конкретний сегмент, або весь файл треку GPX. Під час **[імпорту](../../personal/tracks/manage-tracks.md#import)** ви можете вибрати, чи зберігати його в одному файлі, чи в кількох файлах.


### Параметри відстеження {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Редагувати** (*піктограма олівця* поруч із назвою треку) — Відкриває трек в інструменті [*Планування маршруту*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Вибрати інший файл GPX для навігації.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Якщо цей параметр увімкнено, напрямок руху по треку змінюється на протилежний.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Налаштовує [прив'язку треку до доріг](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Ви можете вибрати, як навігувати від мого місцезнаходження до треку:
до *<Translate android="true" ids="start_of_the_track"/>* або до *<Translate android="true" ids="nearest_point"/>* на треку.
- Виберіть **Тип навігації** для першого та останнього сегмента: або побудувати [*пряму лінію*](../routing/straight-line-routing.md), або використовувати [*тип маршрутизації*](../routing/osmand-routing.md#routing-types) з поточного профілю.


### Прив'язати до доріг {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Функція **Прив'язати до доріг** вирівнює ваш трек з найближчою дорогою для більш точної навігації. Доступна в меню [Слідувати за треком](#follow-track-options), ця функція гарантує, що ваш маршрут слідує відповідній дорожній мережі на основі вибраного *профілю навігації* та **порогової відстані**. Це покращує як [деталі маршруту](../setup/route-details.md), так і [голосові інструкції](#guidance) під час навігації.

***Як це працює:***

- OsmAnd зіставляє кожну точку треку з **найближчою дорогою** в межах встановленої **порогової відстані** (за замовчуванням: **50 метрів**).
- **Порогова відстань** визначає максимально допустиму відстань між точкою GPS-треку та дорогою для прив'язки.
- **Автоматичне переприв'язування** — При зміні **профілів навігації** OsmAnd автоматично переприв'язує трек до доріг, які підходять для нового профілю.
- Для великих треків з багатьма точками процес прив'язки може зайняти трохи більше часу. Ви побачите **індикатор прогресу** (*помаранчева смуга стану*), що показує статус прив'язки.
- Після завершення прив'язки натисніть **Застосувати**, щоб використовувати змінений трек для навігації.

#### Автоматичне прив'язування до доріг {#automatic-attachment-to-the-roads}

OsmAnd автоматично прив'язує маршрути до доріг при використанні інструменту **Планування маршруту**:

- **Маршрутні точки** автоматично вирівнюються з найближчою доступною дорогою (за винятком [Маршрутизації по прямій лінії](../../navigation/routing/straight-line-routing.md) та [Маршрутизації до точки](../../navigation/routing/direct-to-point-routing.md)).
- Якщо дороги не виявлено (наприклад, у бездоріжжі), маршрут буде слідувати **прямим сегментам**.
- Ви можете **вручну налаштувати** маршрут, перетягуючи маршрутні точки в різні місця.

За замовчуванням функція **Прив'язати до доріг** запускається **автоматично** при виборі треку для навігації. Ви можете змінити цей параметр за потреби. Для отримання додаткової інформації зверніться до розділу [Детальні вказівки по треку](../guidance/navigation-settings.md#detailed-track-guidance) у статті *Налаштування навігації*.


## Точки {#points}

### Початкова / Кінцева точка {#start--finish-point}

Ви можете вказати початкову та кінцеву точки для маршруту, відмінні від початкової/кінцевої, вказаних у файлі GPX. Просто змініть їх так само, як ви це робите для [Навігації](../setup/route-navigation.md#select-starting-point).

У меню [Слідувати за треком](#follow-track-options) ви можете вибрати, чи хочете ви навігувати від вашого поточного місцезнаходження до початкової точки треку або до найближчої точки на треку GPX. Також ви можете вибрати [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types), який буде використовуватися для початкового та кінцевого сегментів вашого маршруту.

### Маршрутні точки {#waypoints}

Якщо трек має маршрутні точки, ви можете використовувати [Показати вздовж маршруту](../guidance/map-during-navigation.md#show-points-along-the-route) та [Голосові підказки](../guidance/voice-navigation.md#voice-settings), щоб отримувати сповіщення про цікаві місця. Ви можете додати **Маршрутні точки** до існуючого треку через [Контекстне меню](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), трек має бути видимим на карті.

### Проміжні точки {#intermediate-points}

При підготовці або навігації за GPX-треком ви не можете додавати проміжні місця, через які ви плануєте проїхати в межах цього треку. Ви можете призначити лише початкову та кінцеву точки на додаток до треку або сегмента, за яким ви плануєте слідувати.

## Керівництво {#guidance}

*Навігація за GPX-треком* містить ті ж [голосові інструкції](../guidance/voice-navigation.md), що й навігація за маршрутом. Однак деякі повороти або кругові перехрестя можуть бути інтерпретовані неправильно, оскільки в GPX немає інформації про перехрестя доріг, за винятком файлів GPX, створених OsmAnd. Щоб усунути ці проблеми, слід використовувати функцію [Прив'язати до доріг](#attach-to-the-roads).

Під час навігації ви можете використовувати різні опції, такі як збільшення або зменшення масштабу, панорамування карти або перемикання на інший стиль карти. Якщо ви відхиляєтеся від треку, OsmAnd автоматично перерахує маршрут, щоб повернути вас на трек. Ви також можете регулювати швидкість треку та встановлювати звукові сповіщення про наближення до точок або відхилення від маршруту.


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](./route-navigation.md)
- [Деталі маршруту](./route-details.md)
- [Навігація за маркерами](./markers-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран карти під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Останнє оновлення: квітень 2025*