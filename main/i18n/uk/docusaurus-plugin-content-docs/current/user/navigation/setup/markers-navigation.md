---
source-hash: 9c6bf23510b0f7324afa8fd2b1104ff764ea65980e9d94067175a57812e4b7bc
sidebar_position: 3
title: Навігація за маркерами
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

[Маркери на карті](../../personal/markers.md) — це точки на карті, позначені прапорцями. Їх можна використовувати для різних цілей, наприклад, для позначення місця, яке ви хочете відвідати, цікавого місця, яке ви хочете запам'ятати, або для створення власного маршруту.

Вони можуть бути особливо корисними для туристів, велосипедистів або будь-кого, хто досліджує нову місцевість і хоче позначити цікаві місця або орієнтири на карті. Основна відмінність від [Обраних точок](../../personal/favorites.md) полягає в тому, що маркери створюються швидше, оскільки не вимагають назви.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Використання маркерів у навігації {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

 ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Маркери на карті* можуть слугувати [пунктами призначення](./route-navigation#set-destinations) під час побудови маршруту. Вони особливо зручні, коли потрібно прокласти маршрут з проміжними точками.

Однак *Маркери на карті* також надають різні функції, такі як [віджети](../../widgets/markers.md), напрямок руху, лінії на карті, тому ви можете використовувати ці інструменти для навігації без побудови лінії маршруту та повного голосового супроводу.

Якщо вам потрібна проста навігація від точки до точки, що відображається прямими лініями, ви можете створити та відсортувати ***Список маршрутів***, що складається з маркерів як проміжних точок, і використовувати віджети для простої навігації.


#### Рекомендації {#recommendations}

Ось прості рекомендовані кроки для *Навігації за маркерами*:

1. Створіть маркери. Знайдіть потрібний об'єкт(и) на карті, торкніться його та виберіть *[Кнопку маркера](../../personal/markers.md#add--edit-markers)* в *[контекстному меню карти](../../map/map-context-menu.md#add--edit-marker)*. Ви також можете створити маркери з [обраних](#add-group-of-favorite) або [GPX-треків](#add-group-of-track-waypoints).
2. [*Відсортуйте маркери*](#sort-markers) у бажаному порядку, в якому ви хочете їх пройти.
3. Налаштуйте *Вигляд маркерів на карті*, якщо ви хочете використовувати маркери без запуску навігації. Увімкніть опції **Стрілки на карті** та **Лінія напрямку** в розділі *[Вигляд](../../personal/markers.md#appearance-on-the-map)* *[Меню маркерів на карті](../../personal/markers.md#actions)*.
4. Додайте *[Віджети маркерів](../../personal/markers.md#markers)* у *[Меню налаштування екрана](../../widgets/configure-screen.md)* (необов'язково).
5. [*Позначте як пройдені*](#pass-markers) вже відвідані маркери або відновіть їх з історії, якщо ви хочете пройти їх знову.

:::note
Коли опції **Стрілки на карті** та **Лінія напрямку** увімкнені в розділі *Вигляд* [Меню маркерів на карті](../../personal/markers.md#appearance-on-the-map), ви побачите стрілку або пунктирну лінію на карті. Стрілка показує напрямок до активного маркера, коли він знаходиться за межами поточного екрана карти. Лінія напрямку малюється, коли ваше місцезнаходження та маркер знаходяться на одному екрані.
:::


## Список маршрутів {#itinerary-list}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Список маршрутів представляє впорядкований список *прохідних* маркерів, які видно на карті. Ви можете додавати та видаляти точки по одній або робити це пакетом, використовуючи заздалегідь підготовлений [GPX-файл](#add-group-of-track-waypoints) або [Групу обраних](#add-group-of-favorite). Для місцевих змагань або пригод може бути корисно створити список точок за координатами за допомогою [інструменту введення координат](../../plan-route/coordinate-input.md).


### Додати окремі маркери {#add-single-markers}

*Маркери* можна додавати або видаляти з карти одним дотиком до екрана в потрібному місці. Потім вам потрібно дотримуватися інструкцій зі статті *[контекстного меню карти](../../map/map-context-menu.md#add--edit-marker)*.


### Додати групу обраних {#add-group-of-favorite}

<InfoAndroidOnly />

![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Ви можете створити *Маркери на карті* з *[Обраних](../../personal/favorites.md)* за допомогою:

- *[Меню груп обраних](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Мої обрані)*.
- &#128681; значка в меню "Обрані" на сторінці *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Мої обрані→&#128681;)*.
- Опції **'+'** (додати) у *[вкладці "Групи"](../../personal/markers.md#marker-groups)* в меню "Маркери на карті" *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Додати групу точок треку {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

GPX-треки з точками можуть бути використані як *Маркери на карті* та швидко вимкнені:

- Використовуйте опцію **'+'** (додати) у *[вкладці "Групи"](../../personal/markers.md#marker-groups)* в меню "Маркери на карті" *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Увімкніть перемикач біля треку у *[вкладці "Групи"](../../personal/markers.md#marker-groups)* в меню "Маркери на карті" *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
До *Списку маркерів на карті* можна додавати лише треки з точками. Трек, який ви збираєтеся додати, також має бути видимим (активним) на карті.
:::

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Ви також можете створити *Маркери* з треку з точками за допомогою *[контекстного меню треку](../../map/tracks/track-context-menu.md#points--waypoints)*: *Торкніться видимого треку на карті → у контекстному меню треку виберіть Точки → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Сортування маркерів {#sort-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Натискаючи на лівий кут (*Android*) або правий кут (*iOS*) вкладки *Маркер на карті* у *[Списку маркерів на карті](../../personal/markers.md#itinerary-list)* та переміщуючи її вгору або вниз, ви можете змінити її порядок у *Списку навігації* (під час переміщення картки маркера ви побачите лінію, що вказує, куди буде розміщено маркер).

В Android-версії програми OsmAnd є інші параметри сортування для *Маркерів на карті* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Сортувати за* або *Спланувати маршрут*).


### Сортування за атрибутами {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Alternative Markers sorting Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markers sorting Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Ви можете сортувати *Маркери* за:

- **Назвою** (*за алфавітом*) — Якщо маркери мають описові назви, це може бути корисним способом швидко знайти потрібний маркер.
- **Відстанню** (*найближчі або найдальші спочатку*) — Ця опція сортуватиме маркери за їхньою відстанню від вашого поточного місцезнаходження.
- **Датою** (*нещодавно або давно*) — Це сортуватиме маркери за датою їх додавання. Якщо ви додали багато маркерів з часом, це може бути корисним способом побачити, які з них є найновішими.


### Змінити порядок за допомогою інструменту планування маршруту {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Використовуючи функціонал інструменту "Планування маршруту" у списку маркерів, ви можете сортувати *Маркери* *від дверей до дверей*, розміщувати їх у зворотному порядку або створювати *Круговий маршрут*. Якщо ви виберете опцію *Навігація*, *Маркери* будуть використовуватися як [проміжні пункти призначення](../setup/route-navigation.md#intermediate-destinations).


## Проходження маркерів {#pass-markers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

*Маркер* можна позначити як пройдений (*Android*) або відхилений (*iOS*).

- Через *[контекстне меню карти](../../map/map-context-menu.md#add--edit-marker)*.
- Коли ви наближаєтеся до *Маркера* на відстань менше 40 метрів (*Android*) або 50 метрів (*iOS*), перемикач у панелі *[Віджетів маркерів](../../widgets/markers.md#top-bar-widget)* стає активним.

Після проходження *Маркера* він переміщується до папки [Історія](../../personal/markers.md#history), звідки його можна відновити за потреби. Наступний маркер у [списку](#itinerary-list) стає активним. Залежно від ваших [налаштувань](#use-markers-in-navigation), вас можуть направляти до нього стрілкою або пунктирною лінією.


## Пов'язані статті {#related-articles}

- [Про маркери на карті](../../personal/markers.md).
- [Віджет маркера](../../widgets/markers.md).
__
- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](./route-navigation.md)
- [Деталі маршруту](./route-details.md)
- [Навігація за треком](./gpx-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран карти під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)