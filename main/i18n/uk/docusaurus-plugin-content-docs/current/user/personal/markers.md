---
source-hash: 0353071eeb4cc978c117068bf19a65442825b1d24cf586249b32ac62e28c929f
sidebar_position: 8
title:  Маркери
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

Маркери — це спеціальні точки, позначені на карті як прапорці, які можна швидко створити одним дотиком, не вказуючи назву та іншу інформацію, на відміну від [Обраних точок](./favorites.md). Також маркери надають додаткові функції за допомогою [віджетів](../widgets/markers.md), **стрілок** (<Translate android="true" ids="show_arrows_on_the_map"/>) та **індикації відстані** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Маркери на карті Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маркери на карті iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Маркери {#markers}

### Додати / Редагувати маркери {#add--edit-markers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Коротко або довго натисніть на карту та виберіть потрібну дію з [контекстного меню карти](../map/map-context-menu.md#add--edit-marker).

![Дія Додати/Редагувати маркер Android](@site/static/img/map/add_marker_android.png) ![Дія Позначити пройденим маркер Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Коротко або довго натисніть на карту та виберіть потрібну дію в [контекстному меню карти](../map/map-context-menu.md#add--edit-marker).

![Дія Додати/Редагувати маркер iOS](@site/static/img/map/add_marker_ios.png) ![Дія Відновити маркер Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно натиснути на іконку *прапорця* (*Android*) або *стрілки* (*iOS*) в меню, щоб відобразити напрямок та відстань до вибраної точки від вашого поточного місцезнаходження (або центральної точки карти / початкової точки дотику до карти, коли місцезнаходження вимкнено).

***Дії***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Розміщує новий маркер на вибраній точці.
- **Позначити пройденим** (*Android*) / Відхилити (iOS). Деактивує маркер і переміщує його в Історію.
- **Зробити активним** (*Android*). Переміщує маркер на верхню позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до активного списку.

:::note
Ви не можете видалити маркер негайно, спочатку потрібно його деактивувати (позначити як пройдений), щоб він перемістився в [Історію](#history), а потім ви можете остаточно видалити його з історії. Після деактивації маркер буде видалено з карти та списку маршруту.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Список маршруту {#itinerary-list}

Список маршруту представляє собою впорядкований список маркерів, де перший маркер використовується у віджетах для навігації. Детальніше про це читайте у статті [Навігація за маркерами](../navigation/setup/markers-navigation.md#itinerary-list).

### Групи маркерів {#marker-groups}

<InfoAndroidOnly />

![Групи маркерів на карті Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Маркери можна додавати та видаляти як цілу групу з групи Обраних або файлу GPX з точками маршруту. Це робить їх дуже зручними для використання в спеціальному режимі навігації - [Навігація за маркерами](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Історія {#history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Історія маркерів на карті Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Історія маркерів на карті iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Історія — це список усіх деактивованих (пройдених) маркерів. З цього списку можна остаточно видалити маркер або відновити його.


## Вигляд на карті {#appearance-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-01.png) ![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Вигляд маркерів на карті iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Вигляд маркерів на карті iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Меню *Вигляд на карті* — це загальне налаштування для відображення маркерів та додаткових покажчиків до них.
У версії OsmAnd для iOS *Вигляд на карті* також є налаштуванням для відображення віджетів. Також є додаткові налаштування для [налаштування віджетів з маркерами](../widgets/markers.md#configure-marker-widgets).

- **Активні маркери**. Показує інформацію про перший або два маркери у списку маркерів на карті.
- **Індикація відстані** *(для iOS)*. Дозволяє вибрати, чи відображати віджети та як вони будуть відображатися: над картою (Верхня панель) або з правого боку екрана (Віджети).
- **Стрілки на карті**. Вказує напрямок до відстежуваного маркера (одного або двох) як стрілка на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається.
- **Лінія напрямку**. Показує напрямок, як пунктирна лінія, від певної точки на карті до відстежуваного маркера по прямій лінії.
- ***Один дотик*** активний (*для Android*). Одним дотиком до потрібного маркера на карті цей маркер переміщується на верх списку активних маркерів на карті без відкриття контекстного меню.
- **Залишати пройдені маркери на карті** *(для Android)*. Маркери, додані як група Обраних або точки маршруту GPX, позначені як Пройдені, залишаться на карті. Якщо група не активна, маркери зникнуть з карти.


## Планування маршруту для маркерів {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Планування маршруту для маркерів на карті Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Параметри планування маршруту для маркерів на карті Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Використовуючи функціонал інструменту Планування маршруту в списку Маркерів, ви можете сортувати *Маркери* *Від дверей до дверей*, розміщувати їх у зворотному порядку або створювати *Круговий маршрут*. Якщо ви натиснете опцію *Навігація*, *Маркери* будуть використовуватися як [проміжні пункти призначення](../navigation/setup/route-navigation.md#intermediate-destinations).


## Дії {#actions}

<InfoAndroidOnly />

![Більше маркерів на карті Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Маркери можна сортувати у списку за назвою, близькістю, часом додавання.
- **<Translate android="true" ids="appearance_on_the_map"/>** або **<Translate ios="true" ids="shared_string_appearance"/>**. [Налаштування маркерів на карті](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Додає маркери за [введенням координат](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Будує маршрут [для навігації](../navigation/setup/markers-navigation.md) за допомогою вибраних маркерів.
- **<Translate android="true" ids="marker_save_as_track"/>**. Зберігає активні маркери у файл GPX.
- **<Translate android="true" ids="move_all_to_history"/>**. Деактивує всі маркери та переміщує їх до [Історії](#history).


## Пов'язані статті {#related-articles}

- [Навігація за маркерами](../navigation/setup/markers-navigation.md)
- [Віджети маркерів](../widgets/markers.md)

> *Останнє оновлення: серпень 2024*