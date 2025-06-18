---
source-hash: bd839a5ee6ccc19abd4bedd194ba51bd5ed2b39816629811284b6f76740aeab1
sidebar_position: 2
title:  Путівники
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

:::info Платна функція
Путівники — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

Віртуальні путівники в OsmAnd пропонують користувачам цінну інформацію, рекомендації та поради. Вони також дозволяють мандрівникам отримувати доступ до вичерпної навігаційної інформації про визначні місця в застосунку.

Путівники OsmAnd базуються на даних з [Wikivoyage](https://www.wikivoyage.org/), спільнотного проєкту, схожого на Вікіпедію, де автори-волонтери створюють актуальні статті.
Інформація Wikivoyage містить основні факти про місце, транспорт, визначні місця, шопінг тощо.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Вигляд Путівників Загальний](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню Карт iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Як користуватися {#how-to-use}

- [Завантажте](#download-articles) *Путівники*.
- Переглядайте [статті](#browse-articles) про країну, регіон, місто, визначне місце.
    - Альтернативно, [відображайте статті путівників та/або точки на мапі](#travel-routes) за допомогою меню Налаштувати мапу.
    - Переглядайте визначні місця на мапі, додавайте їх до *[Маркерів мапи](../personal/markers.md#add--edit-markers)* або *[Вибраного](../personal/favorites.md#favorite-group-actions)*.
    - Використовуючи кнопку *[Читати повністю](#manage-as-gpx-track)*, перейдіть до *[статті](#travel-article)* в *Путівниках*.
- [Додайте до закладок](#explore-and-bookmark) статті, щоб прочитати їх пізніше.
- Оберіть [точки](#points) зі статей для відвідування та додайте їх на мапу OsmAnd.
- Отримайте більше інформації про місця для відвідування з офлайн [статей Вікіпедії](#combine-with-wikipedia).
- [Побудуйте маршрут](../navigation/setup/route-navigation.md#set-destinations) до обраних туристичних визначних місць або вільну прогулянку між точками.

:::note
Статті *Путівників* зберігаються в OsmAnd як GPX-треки з маршрутними точками. Після додавання цих треків на мапу (див. розділи *[Точки](#points)* або *[Туристичні маршрути](#travel-routes)* цієї статті), ви можете керувати ними через меню *[Мої місця](../personal/myplaces.md)*.
:::

### Завантажити статті {#download-articles}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Меню завантаження Путівників](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Меню Карт iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Перш ніж почати користуватися путівниками, вам потрібно завантажити їх через меню [Завантажити мапу](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Статті згруповані за регіонами: *Африка, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка*, тому вам не потрібно завантажувати путівники для окремого міста чи країни.
Зберігаючи необхідні регіони на своєму пристрої, ви можете переглядати статті за допомогою OsmAnd, навіть коли ви за кордоном або поза зоною дії мобільної мережі.

:::note
Крім путівників по країнах, регіонах чи містах, ви можете знайти путівники по місцях з фільмів, книг, комп'ютерних ігор, місцях пам'яті великих людей тощо.
Також існують спеціалізовані путівники, такі як список глобальної мережі геопарків ЮНЕСКО або найбільші та найскладніші міжнародні аеропорти світу.
:::

## Перегляд статей {#browse-articles}

Екран *Путівників* складається з двох основних частин: *[поля пошуку](#search)* та списку *путівників* з двома вкладками: *[<Translate android="true" ids="shared_string_explore"/> та <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Ви можете перемикатися між ними одним дотиком до вкладки.
Коли ви відкриваєте *Путівники* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd покаже вам статті про цікаві місця, розташовані поблизу географічних координат поточного центру мапи. Коли ви торкаєтеся елемента зі списку, відкривається [стаття Путівника](#travel-article). Внизу екрана знаходиться перемикач на вкладку *Закладки*.

### Дослідження та закладки {#explore-and-bookmark}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Головний екран Путівників](@site/static/img/guides/travel_guides_main_screen_1.png) ![Головний екран Путівників 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Головний екран Путівників](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Головний екран Путівників 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Дослідити** або **<Translate android="true" ids="popular_destinations"/>** перераховано 30 найкращих статей про місця призначення, розташовані поблизу центру екрана (поза розташуванням). Торкнувшись елемента зі списку із заголовком та коротким описом статті, ви можете переглянути повний текст цієї статті.
Якщо ви торкнетеся кнопки *Закладка*, стаття буде збережена для подальшого читання та буде доступна на вкладці Закладки. На вкладці *Статті в закладках* статті розташовані в порядку їх збереження, причому найновіші статті знаходяться вгорі.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Відкриває [статтю Путівника](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Переміщує обрану статтю до <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Видаляє обрану статтю з <Translate android="true" ids="saved_articles"/>.

### Пошук {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Поле пошуку розташоване у верхній частині екрана <Translate android="true" ids="shared_string_travel_guides"/>. Якщо ви почнете вводити перші літери назви країни, міста чи відомого місця, під полем пошуку з'явиться список статей. Торкнувшись потрібної, ви можете почати читати.
Поруч з кожним результатом пошуку перераховані 3 найбільш вживані мови, якими можна прочитати обрану статтю. Однак популярні статті доступні більшою кількістю мов, ніж 3 перераховані.

**Додаткові можливості:**

- Ви можете шукати спеціальні культурні пам'ятки, такі як *Гаррі Поттер туризм*, *Міста-привиди*, *Монархії* та інші.
- Щоб видалити історію пошуку, потрібно скористатися кнопкою [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Параметри {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню параметрів Путівників](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

У цьому меню ви можете налаштувати вигляд статей під час роботи в офлайн-режимі. ЗВЕРНІТЬ УВАГУ, що *[завантажені](#download-articles)* путівники не містять зображень. Вони з'являються лише тоді, коли ви переглядаєте статті з активним підключенням до Інтернету.
У меню Параметри ви можете вибрати, чи зберігати зображення з переглянутих статей, щоб використовувати їх, коли ви офлайн. Ви також можете очистити існуючий кеш зображень або видалити історію пошуку (працює лише при пошуку в *Путівниках*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Зображення в статтях можна завантажити для використання в офлайн-режимі.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Очищає кеш зображень, щоб звільнити пам'ять.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Очищає [історію пошуку](#search).

## Стаття Путівника {#travel-article}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Стаття Путівника](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Ви можете відкрити статтю із запропонованих варіантів на вкладці *[Дослідити](#explore-and-bookmark)* або за допомогою опції *[Пошук](#search)*. Коли ви додаєте туристичні визначні місця, які називаються *[Точками](#points)*, зі *статті Путівника* на мапу OsmAnd, ви також можете відкрити статтю за допомогою кнопки *Читати повністю* в [розділі опису](../map/tracks/track-context-menu.md#description-and-info) маршрутної точки.

Наступні елементи керування розташовані у верхній частині екрана:

- Перемикач для зміни мови статті. Мову можна вибрати з доступних варіантів. За замовчуванням використовується системна мова.
- За допомогою кнопки &#8942; ви можете поділитися статтею з друзями. Посилання відкривається в застосунку OsmAnd, відповідний файл путівників має бути завантажений на пристрої отримувача, або на сайті [Wikivoyage](https://www.wikivoyage.org/), якщо отримувач не має застосунку OsmAnd або для пристроїв iOS.
- Торкання панелі навігації відкриває *[Меню навігації Путівників](#navigation-menu)*.

Внизу екрана розташовані кнопки, такі як:

- [Зміст](#table-of-contents). Відкриває зміст статті.
- [Точки](#points). Показує туристичні визначні місця, пов'язані зі статтею, на мапі.
- [Закладка](#explore-and-bookmark). Дозволяє додати статтю до закладок для подальшого читання.


### Меню навігації {#navigation-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню змісту Путівників](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Щоб перейти від однієї статті до іншої в *статтях Путівника*, використовуйте **Меню навігації**. Ви можете отримати доступ до нього, торкнувшись адресного поля над зображенням. ЗВЕРНІТЬ УВАГУ, що статті в Путівниках згруповані наступним чином: *Континент → Регіон → Країна → Провінція (регіон) → Місто*.
Якщо ви торкнетеся стрілки у верхньому лівому куті екрана, ви перейдете безпосередньо на вкладку *Дослідити* або *Статті в закладках* (залежно від того, яку вкладку ви відкрили раніше).


### Зміст {#table-of-contents}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню змісту Путівників](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Більшість *статей Путівника* мають однакову структуру змісту: *вступ* (зображення та опис туристичного об'єкта) та *наступні розділи*.

- &nbsp;*Зрозуміти*. Деталі про місцеву культуру та звичаї.
- &nbsp;*Дістатися*. Деталі про те, як дістатися до деяких місць та скільки коштуватиме цей маршрут.
- &nbsp;*Побачити*. Список визначних місць (музеї, історичні об'єкти тощо) з повним описом: ціни на квитки, години роботи, корисні посилання та номери телефонів.
- &nbsp;*Зробити*. Місця для проведення часу.
- &nbsp;*Купити*. Місця для шопінгу.
- &nbsp;*Поїсти*. Заклади харчування (розділені за бюджетом: бюджетні, середнього класу, дорогі).
- &nbsp;*Випити*. Бари та кафе.
- &nbsp;*Спати*. Місця проживання розділені за бюджетом (бюджетні, середнього класу, дорогі).
- &nbsp;*Їхати далі*. Найближчі місця з Wikivoyage.

### Точки {#points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Меню точок Путівників](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Меню точок Путівників](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Меню пошуку Путівників](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Статті Путівника* часто містять туристичні визначні місця, згруповані за темами. Одним дотиком до кнопки *Точки* внизу *[Статті](#travel-article)*, всі визначні місця, пов'язані з темою (заклади харчування, варіанти проживання, аеропорти, магазини, історичні пам'ятки тощо), будуть додані на мапу та можуть *[керуватися як Трек](#manage-as-gpx-track)*.

За замовчуванням групи визначних місць позначені певними іконками: категорії *Їсти та Пити* — ножем і виделкою в червоному колі, *Робити та Бачити* — камерою в зеленому колі, та інші. Ви можете керувати групами точок за допомогою &#8942; як *[Папкою маршрутних точок](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Точки в *статтях Путівника* відносяться до маршрутних точок на GPX-треку.
Ви також можете *[додати точки на мапу](#travel-routes)* в меню Налаштувати мапу. Ви можете відобразити їх усі або вибрати певну категорію.
:::


## Туристичні маршрути {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Альтернативний спосіб перегляду *Путівників* — відобразити їх на мапі за допомогою меню Налаштувати мапу. Ця функція не стосується можливості, наданої OsmAnd, використовувати Wikivoyage, вона стосується лише треків. Ви можете прочитати більше в нашому [блозі](https://osmand.net/blog/routes#generated-travel-routes).

![Меню точок Путівників](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Меню точок Путівників](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Туристичні маршрути та статті на мапі {#travel-routes-and-articles-on-the-map}

![Меню точок Путівників](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Меню точок Путівників](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Після того, як ви увімкнете відображення *Туристичних маршрутів* у меню Налаштувати мапу, на мапі з'являться кола різних кольорів. Помаранчеві позначають треки маршрутів, статті маршрутів та деякі маршрутні точки. Торкніться певного маршруту, статті чи точки, а потім торкніться кнопки *Завантажити* (&#9047;), і ви зможете [керувати ними як треком](#manage-as-gpx-track).

### Користувацькі Путівники {#custom-travel-guides}

Ми рекомендуємо вам додавати нові статті або редагування до [Wikivoyage](https://en.wikivoyage.org/). Ми оновлюємо Путівники приблизно кожні 6 місяців, і ви можете завантажувати нові статті. Ви також можете створити власну *Туристичну книгу*. Як це зробити, описано в технічній документації (див. статтю *[Створити користувацький Путівник](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Керувати як GPX-треком {#manage-as-gpx-track}

![Меню точок Путівників 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Меню точок Путівників 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Після додавання *Путівників* на мапу, *статті Путівників* можуть бути збережені як GPX-трек та керовані через меню *[Мої місця](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Їх можна відображати на мапі, ділитися ними, перейменовувати, переміщувати в іншу папку, експортувати або видаляти.

- &nbsp;В *[Огляді](../map/tracks/track-context-menu.md#overview)* ви можете прочитати короткий опис або відкрити [статтю Путівника](#travel-article), торкнувшись кнопки *Читати повністю*. *Редагувати* дозволяє виправити статтю.
- &nbsp;У розділі *[Трек](../map/tracks/track-context-menu.md#altitude--speed-graphs)* немає інформації, оскільки GPX-файли *Путівників* містять лише маршрутні точки.
- &nbsp;Під *[Точками](../map/tracks/track-context-menu.md#points--waypoints)* ви бачите папки з точками, згрупованими за назвою (Купити, Зробити, Випити тощо).
- &nbsp;Кнопка *[Параметри](../map/tracks/track-context-menu.md#options)* виконує ті ж функції, що й у звичайному треку.

:::info
*Точки* зберігаються у [GPX-файлі](../../technical/osmand-file-formats/osmand-gpx.md) (поширений формат для треків) як [Маршрутні точки](../map/point-layers-on-map.md#track-waypoints). Кількість точок (маршрутних точок) у треку позначена поруч з іконкою &#128681; у полі треку.
У *[контекстному меню треку](../map/tracks/track-context-menu.md)* GPX-файлу ви можете знайти загальну інформацію про статтю, до якої належить цей трек.
:::

## Поєднати з Вікіпедією {#combine-with-wikipedia}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Путівники поєднати з Вікіпедією 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Путівники поєднати з Вікіпедією 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку Путівників](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Меню пошуку Путівників](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

У *статтях Путівника* ви можете знайти корисну інформацію про туристичні визначні місця (контактна інформація, веб-посилання, ціни тощо). Багато статей мають кнопку *Вікіпедія*, яка дозволяє відкрити *[статтю Вікіпедії](../plugins/wikipedia.md)* (онлайн або офлайн) про місце інтересу.

У деяких випадках вкладка *[Закладки](#explore-and-bookmark)* OsmAnd запропонує вам завантажити [шар мапи Вікіпедія](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) для перегляду пов'язаних статей офлайн.

![Путівники завантажити Вікіпедію](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info ПРИМІТКА
[Плагін Вікіпедія](../plugins/wikipedia.md) — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (стилі мапи)](../../user/map/vector-maps.md)

> *Останнє оновлення: січень 2025*