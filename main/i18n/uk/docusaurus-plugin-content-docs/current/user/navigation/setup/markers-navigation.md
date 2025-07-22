---
source-hash: 840895be86a2bc170c5cc62b0abac17afda6a3dcd33c15c2d2b335a1a52fa27e
sidebar_position: 3
title:  Навігація за маркерами
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

[Маркери на карті](../../personal/markers.md) — це точки на карті, позначені прапорцями. Їх можна використовувати для різних цілей, наприклад, для позначення місця, яке ви хочете відвідати, визначної пам'ятки, яку ви хочете запам'ятати, або для створення власного маршруту.

Вони можуть бути особливо корисними для туристів, велосипедистів або тих, хто досліджує нову місцевість і хоче позначити цікаві місця або орієнтири на карті. Основна відмінність від [Обраних точок](../../personal/favorites.md) полягає в тому, що маркери створюються швидше, оскільки не вимагають назви.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Навігаційний маркер Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Навігаційний маркер iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>


## Використання маркерів у навігації {#use-markers-in-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Відмінність навігації за маркерами Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Відмінність навігації за маркерами Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Відмінність навігації за маркерами iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Відмінність навігації за маркерами iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png)

</TabItem>

</Tabs>

*Маркери на карті* можуть слугувати [пунктами призначення](./route-navigation#set-destinations) під час побудови маршруту. Вони особливо зручні, коли потрібно прокласти маршрут з проміжними точками.

Однак *Маркери на карті* також надають різноманітну функціональність, таку як [віджети](../../widgets/markers.md), напрямок руху, лінії на карті, тож ви можете використовувати ці інструменти для навігації без побудови лінії маршруту та повного голосового супроводу.

Якщо вам потрібна проста навігація від точки до точки, що відображається прямими лініями, ви можете створити та відсортувати ***Список маршруту***, що складається з маркерів як проміжних точок, і використовувати віджети для простої навігації.


#### Рекомендації {#recommendations}

Ось прості рекомендаційні кроки для *Навігації за маркерами*:

1. Створіть маркери. Знайдіть потрібний об'єкт(и) на карті, торкніться його та виберіть кнопку *[Маркер](../../personal/markers.md#add--edit-markers)* у *[контекстному меню карти](../../map/map-context-menu.md#add--edit-marker)*. Ви також можете створити маркери з [обраних точок](#add-group-of-favorite) або [треків GPX](#add-group-of-track-waypoints).
2. [*Відсортуйте маркери*](#sort-markers) у бажаному порядку, в якому ви хочете їх пройти.
3. Налаштуйте *Вигляд маркерів на карті*, якщо ви хочете використовувати маркери без запуску навігації. Увімкніть опції **Стрілки на карті** та **Лінія напрямку** в розділі *[Вигляд](../../personal/markers.md#appearance-on-the-map)* *[Меню маркерів на карті](../../personal/markers.md#actions)*.
4. Додайте *[Віджети маркерів](../../personal/markers.md#markers)* у *[Меню налаштування екрана](../../widgets/configure-screen.md)* (необов'язково).
5. [*Позначте як пройдені*](#pass-markers) вже відвідані маркери або відновіть їх з історії, якщо хочете пройти їх знову.

:::note
Коли опції **Стрілки на карті** та **Лінія напрямку** увімкнені в розділі *Вигляд* [Меню маркерів на карті](../../personal/markers.md#appearance-on-the-map), ви побачите стрілку або пунктирну лінію на карті. Стрілка показує напрямок до активного маркера, коли він знаходиться за межами поточного екрана карти. Лінія напрямку малюється, коли ваше місцезнаходження та маркер знаходяться на одному екрані.
:::


## Список маршруту {#itinerary-list}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Список маркерів Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Список маркерів iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>


Список маршруту представляє впорядкований перелік *прохідних* маркерів, які видно на карті. Ви можете додавати та видаляти точки по одній або робити це пакетно, використовуючи заздалегідь підготовлений [файл GPX](#add-group-of-track-waypoints) або [групу обраних](#add-group-of-favorite). Для місцевих змагань або пригод може бути корисно створити список точок за координатами, використовуючи [Інструмент введення координат](../../plan-route/coordinate-input.md).


### Додати окремі маркери {#add-single-markers}

*Маркери* можна додавати або видаляти з карти одним дотиком до екрана в потрібному місці. Потім потрібно дотримуватися інструкцій зі статті *[Контекстне меню карти](../../map/map-context-menu.md#add--edit-marker)*.


### Додати групу обраних {#add-group-of-favorite}

<InfoAndroidOnly />

![Обрані до маркерів 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Обрані до маркерів 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)

Ви можете створити *Маркери на карті* з *[Обраних](../../personal/favorites.md)*, використовуючи:

- *[Меню груп обраних](../../personal/favorites.md#favorite-group-actions)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Мої обрані)*.
- Значок &#128681; у меню "Обрані" на сторінці *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→Мої обрані→&#128681;)*.
- Опцію **'+'** (додати) у *[вкладці Групи](../../personal/markers.md#marker-groups)* в меню Маркери на карті *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.


### Додати групу точок треку {#add-group-of-track-waypoints}

<InfoAndroidOnly />

![GPX до маркерів 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

Треки GPX з точками маршруту можна використовувати як *Маркери на карті* та швидко вимикати:

- Використовуйте опцію **'+'** (додати) у *[вкладці Групи](../../personal/markers.md#marker-groups)* в меню Маркери на карті *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.
- Увімкніть перемикач біля треку у *[вкладці Групи](../../personal/markers.md#marker-groups)* в меню Маркери на карті *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

:::note
До *Списку маркерів на карті* можна додавати лише треки з точками маршруту. Трек, який ви маєте намір додати, також має бути видимим (активним) на карті.
:::

![GPX до маркерів 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX до маркерів 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

- Ви також можете створити *Маркери* з треку з точками маршруту, використовуючи *[контекстне меню треку](../../map/tracks/track-context-menu.md#points--waypoints)*: *Торкніться видимого треку на карті → у контекстному меню треку виберіть Точки → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*


## Сортування маркерів {#sort-markers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Сортування маркерів у списку Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Сортування маркерів у списку iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

Натискаючи на лівий кут (*Android*) або правий кут (*iOS*) вкладки *Маркера на карті* у *[Списку маркерів на карті](../../personal/markers.md#itinerary-list)* та переміщуючи її вгору або вниз, ви можете змінити її порядок у *Списку навігації* (під час переміщення картки маркера ви побачите лінію, що вказує, куди буде розміщено маркер).

В Android-версії додатка OsmAnd є інші опції сортування для *Маркерів на карті* (*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/> →* *Сортувати за* або *Планувати маршрут*).


### Сортування за атрибутами {#sort-by-attributes}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Альтернативне сортування маркерів Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Альтернативне сортування маркерів Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

Ви можете сортувати *Маркери* за:

- **Назвою** (*за алфавітом*) — Якщо маркери мають описові назви, це може бути корисним способом швидко знайти потрібний маркер.
- **Відстанню** (*найближчі або найдальші першими*) - Ця опція відсортує маркери за їх відстанню від вашого поточного місцезнаходження.
- **Датою** (*нещодавно або давно*) - Це відсортує маркери за датою їх додавання. Якщо ви додали багато маркерів з часом, це може бути корисним способом побачити, які з них є найновішими.


### Зміна порядку за допомогою інструменту Планування маршруту {#reorder-with-a-plan-route-tool}

<InfoAndroidOnly />

![Альтернативне сортування маркерів Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Альтернативне сортування маркерів Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

Використовуючи функціональність інструменту Планування маршруту в Списку маркерів, ви можете сортувати *Маркери* *Від дверей до дверей*, розмістити їх у зворотному порядку або створити *Круговий маршрут*. Якщо ви торкнетеся опції *Навігація*, *Маркери* будуть використані як [проміжні пункти призначення](../setup/route-navigation.md#intermediate-destinations).


## Проходження маркерів {#pass-markers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Проходження маркера Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Проходження маркера Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Проходження маркера iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Проходження маркера iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png)

</TabItem>

</Tabs>

*Маркер* можна позначити як пройдений (*Android*) або відхилений (*iOS*).

- Через *[контекстне меню карти](../../map/map-context-menu.md#add--edit-marker)*.
- Коли ви наближаєтеся до *Маркера* на відстань ближче 40 метрів (*Android*) або 50 метрів (*iOS*), перемикач у панелі *[Віджетів маркерів](../../widgets/markers.md#top-bar-widget)* стає активним.

Після проходження *Маркера*, він переміщується до папки [Історія](../../personal/markers.md#history), звідки його можна відновити за потреби. Наступний маркер у [списку](#itinerary-list) стає активним. Залежно від ваших [налаштувань](#use-markers-in-navigation), вас можуть спрямовувати до нього стрілкою або пунктирною лінією.


## Пов'язані статті {#related-articles}

- [Про маркери на карті](../../personal/markers.md).
- [Віджет маркерів](../../widgets/markers.md).
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

> *Останнє оновлення: Червень 2025*