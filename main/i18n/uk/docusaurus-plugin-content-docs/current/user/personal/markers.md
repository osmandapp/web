---
source-hash: 4a76625c2bb84dea3475d937395b2dcabeed514e2bbf68736a1f6e8649b066f9
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

Маркери — це спеціальні точки, позначені на карті як прапорці, які можна швидко створити одним дотиком, не вказуючи назву та іншу інформацію, на відміну від [Улюблених точок](./favorites.md). Також маркери надають додаткові функціональні можливості за допомогою [віджетів](../widgets/markers.md), **стрілок** (<Translate android="true" ids="show_arrows_on_the_map"/>) та **відображення відстані** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Маркери на карті Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Маркери на карті iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Маркери {#markers}

### Додати / Редагувати маркери {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Короткий або довгий дотик до карти та вибір потрібної дії в [контекстному меню карти](../map/map-context-menu.md#add--edit-marker).

![Дія додавання/редагування маркера Android](@site/static/img/map/add_marker_android.png) ![Дія проходження маркера Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Короткий або довгий дотик до карти та вибір потрібної дії в [контекстному меню карти](../map/map-context-menu.md#add--edit-marker).

![Дія додавання/редагування маркера iOS](@site/static/img/map/add_marker_ios.png) ![Дія відновлення маркера Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

Можна позначити точку або об'єкт, щоб полегшити планування навігації. Вам просто потрібно торкнутися іконки *прапорця* (*Android*) або *стрілки* (*iOS*) в меню, щоб відобразити напрямок і відстань до вибраної точки від вашого поточного місцезнаходження (або центру карти / початкової точки дотику до карти, коли місцезнаходження вимкнено).

***Дії***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Встановлює новий маркер на вибрану точку.
- **Позначити як пройдений** (*Android*) / Відхилити (iOS). Деактивує маркер і переміщує його в Історію.
- **Зробити активним** (*Android*). Переміщує маркер на першу позицію (на верхній панелі).
- **Відновити маркер** (*Android*). Переміщує маркер з Історії до списку активних.

:::note
Ви не можете видалити маркер негайно, спочатку потрібно його деактивувати (позначити як пройдений), щоб він перемістився в [Історію](#history), а потім ви зможете назавжди видалити його з історії. Після деактивації маркер буде видалено з карти та списку маршруту.
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

Список маршруту — це впорядкований список маркерів, де перший маркер використовується у віджетах для навігації. Детальніше про це читайте у статті [Навігація за маркерами](../navigation/setup/markers-navigation.md#itinerary-list).

### Групи маркерів {#marker-groups}

<InfoAndroidOnly />

![Групи маркерів на карті Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Маркери можна додавати та видаляти цілою групою з групи Улюблених або з GPX-файлу з дорожніми точками. Це робить їх дуже зручними для використання в спеціальному режимі навігації - [Навігація за маркерами](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### Історія {#history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Історія маркерів на карті Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Історія маркерів на карті iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

Історія — це список усіх деактивованих (пройдених) маркерів. З цього списку можна назавжди видалити маркер або відновити його.


## Вигляд на карті {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![вигляд_на_карті](@site/static/img/widgets/appearence_on_the_map-01.png) ![вигляд_на_карті](@site/static/img/widgets/appearence_on_the_map-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Вигляд маркерів на карті iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png) ![Вигляд маркерів на карті iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

</TabItem>

</Tabs>

Меню *Вигляд на карті* — це загальне налаштування для відображення маркерів та додаткових вказівників до них.
У версії OsmAnd для iOS *Вигляд на карті* також є налаштуванням для відображення віджетів. Існують також додаткові налаштування для [конфігурації віджетів з маркерами](../widgets/markers.md#configure-marker-widgets).

- **Активні маркери**. Показує інформацію про перший або два перші маркери у списку маркерів на карті.
- **Відображення відстані** *(для iOS)*. Дозволяє вибрати, чи відображати віджети та як вони будуть виглядати: над картою (Верхня панель) або праворуч на екрані (Віджети).
- **Стрілки на карті**. Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається.
- **Лінія напрямку**. Показує напрямок у вигляді пунктирної лінії від певної точки на карті до відстежуваного маркера по прямій.
- ***Один дотик*** активний (*для Android*). Одним дотиком до потрібного маркера на карті цей маркер переміщується на перше місце у списку активних маркерів на карті без відкриття контекстного меню.
- **Зберігати пройдені маркери на карті** *(для Android)*. Маркери, додані як група Улюблених або дорожні точки GPX, позначені як Пройдені, залишаться на карті. Якщо група не активна, маркери зникнуть з карти.


## Планування маршруту за маркерами {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Маркери на карті, точки планування маршруту Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Маркери на карті, опції планування маршруту Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Використовуючи функціонал інструменту "Планувати маршрут" у списку маркерів, ви можете сортувати *Маркери* *Від дверей до дверей*, розміщувати їх у зворотному порядку або створювати *Круговий маршрут*. Якщо ви торкнетеся опції *Навігація*, *Маркери* будуть використані як [проміжні точки](../navigation/setup/route-navigation.md#intermediate-destinations).


## Дії {#actions}

<InfoAndroidOnly />

![Маркери на карті, більше опцій Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Маркери можна сортувати у списку за назвою, близькістю, часом додавання.
- **<Translate android="true" ids="appearance_on_the_map"/>** або **<Translate ios="true" ids="shared_string_appearance"/>**. [Налаштування для маркерів на карті](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Додає маркери за допомогою [введення координат](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Створює маршрут [для навігації](../navigation/setup/markers-navigation.md) з використанням вибраних маркерів.
- **<Translate android="true" ids="marker_save_as_track"/>**. Зберігає активні маркери у GPX-файл.
- **<Translate android="true" ids="move_all_to_history"/>**. Деактивує всі маркери та переміщує їх до [Історії](#history).


## Пов'язані статті {#related-articles}

- [Навігація за маркерами](../navigation/setup/markers-navigation.md)
- [Віджети маркерів](../widgets/markers.md)