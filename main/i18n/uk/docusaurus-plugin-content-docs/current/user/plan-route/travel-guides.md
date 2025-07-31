---
source-hash: 0890149ad782b462cb3c62cceac41b86ca265c6bf722b509b91f1be130761689
sidebar_position: 2
title: Путівники
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
Путівники – це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

Віртуальні путівники в OsmAnd пропонують користувачам цінну інформацію, рекомендації та поради. Вони також дозволяють мандрівникам отримати доступ до вичерпної навігаційної інформації про пам'ятки в застосунку.

Путівники OsmAnd базуються на даних з [Wikivoyage](https://www.wikivoyage.org/) — спільнотного проєкту, схожого на Вікіпедію, де автори-волонтери створюють актуальні статті.
Інформація Wikivoyage включає основні факти про місце, транспорт, пам'ятки, покупки тощо.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>

## Як користуватися {#how-to-use}

- [Завантажте](#download-articles) *Путівники*.
- Переглядайте [статті](#browse-articles) про країну, регіон, місто, пам'ятку.
    - Альтернативно, [відображайте статті путівників та/або точки на карті](#travel-routes) за допомогою меню Налаштувати карту.
    - Переглядайте пам'ятки на карті, додавайте їх до *[Маркерів карти](../personal/markers.md#add--edit-markers)* або *[Вибраного](../personal/favorites.md#favorite-group-actions)*.
    - За допомогою кнопки *[Читати повністю](#manage-as-gpx-track)* перейдіть до *[статті](#travel-article) у *Путівниках*.
- [Додавайте до закладок](#explore-and-bookmark) статті, щоб прочитати їх пізніше.
- Вибирайте [точки](#points) зі статей для відвідування та додавайте їх на карту OsmAnd.
- Отримайте більше інформації про місця для відвідування з офлайн [статей Вікіпедії](#combine-with-wikipedia).
- [Побудуйте маршрут](../navigation/setup/route-navigation.md#set-destinations) до обраних туристичних пам'яток або вільну прогулянку між точками.

:::note
Статті *Путівників* зберігаються в OsmAnd як GPX-треки з точками. Після додавання цих треків на карту (див. розділи *[Точки](#points)* або *[Туристичні маршрути](#travel-routes)* цієї статті), ви можете керувати ними через меню *[Мої місця](../personal/myplaces.md)*.
:::

### Завантажити статті {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Maps menu iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Перш ніж почати користуватися путівниками, вам потрібно завантажити їх через [меню завантаження карт](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Статті згруповані за регіонами: *Африка, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка*, тому вам не потрібно завантажувати путівники для окремого міста чи країни.
Зберігаючи потрібні регіони на своєму пристрої, ви можете переглядати статті за допомогою OsmAnd, навіть коли ви за кордоном або поза зоною дії мобільної мережі.

:::note
Крім путівників по країнах, регіонах або містах, ви можете знайти путівники по місцях з фільмів, книг, комп'ютерних ігор, місцях пам'яті великих людей тощо.
Також є спеціалізовані путівники, такі як список Глобальної мережі геопарків ЮНЕСКО або найбільші та найскладніші міжнародні аеропорти світу.
:::

## Перегляд статей {#browse-articles}

Екран *Путівники* складається з двох загальних частин: *[поля пошуку](#search)* та списку *путівників* з двома вкладками: *[<Translate android="true" ids="shared_string_explore"/> та <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Ви можете перемикатися між ними одним дотиком до вкладки.
Коли ви відкриваєте *Путівники* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd покаже вам статті про цікаві місця, розташовані поблизу географічних координат поточного центру карти. Коли ви торкаєтеся елемента зі списку, відкривається [стаття Путівника](#travel-article). У нижній частині екрана знаходиться перемикач на вкладку *Закладки*.

### Досліджуйте та додавайте до закладок {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Досліджуйте** або **<Translate android="true" ids="popular_destinations"/>** перелічено 30 найпопулярніших статей про напрямки, що знаходяться поруч із центром екрана (поза розташуванням). Торкнувшись елемента зі списку із заголовком та коротким описом статті, ви можете переглянути повний текст цієї статті.
Якщо ви торкнетеся кнопки *Закладка*, стаття буде збережена для подальшого читання та буде доступна на вкладці Закладки. На вкладці *Статті із закладок* статті розташовані в порядку їх збереження, причому найновіші статті знаходяться зверху.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Відкриває [статтю про подорожі](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Переміщує вибрану статтю до <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Видаляє вибрану статтю з <Translate android="true" ids="saved_articles"/>.

### Пошук {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Поле пошуку розташоване у верхній частині екрана <Translate android="true" ids="shared_string_travel_guides"/>. Якщо ви почнете вводити перші літери країни, міста або відомого місця, під полем пошуку з'явиться список статей. Торкнувшись потрібної, ви можете почати читати.
Поруч з кожним результатом пошуку перелічено 3 найпоширеніші мови, якими можна прочитати вибрану статтю. Однак популярні статті доступні більшою кількістю мов, ніж 3 перелічені.

**Додаткові можливості:**

- Ви можете шукати особливі культурні пам'ятки, такі як *Гаррі Поттер туризм*, *Міста-привиди*, *Монархії* та інші.
- Щоб видалити історію пошуку, потрібно скористатися кнопкою [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Параметри {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

У цьому меню ви можете налаштувати вигляд статей під час роботи офлайн. ЗВЕРНІТЬ УВАГУ, що *[завантажені](#download-articles)* путівники не містять зображень. Вони з'являються лише тоді, коли ви переглядаєте статті з активним підключенням до Інтернету.
У меню Параметри ви можете вибрати, чи зберігати зображення у переглянутих статтях, щоб використовувати їх, коли ви офлайн. Ви також можете очистити існуючий кеш зображень або видалити історію пошуку (працює лише під час пошуку в *Путівниках*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Зображення в статтях можна завантажити для використання офлайн.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Очищає кеш зображень, щоб звільнити пам'ять.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Очищає [історію пошуку](#search).

## Стаття про подорожі {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides article](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Ви можете відкрити статтю із запропонованих варіантів на вкладці *[Досліджуйте](#explore-and-bookmark)* або за допомогою опції *[Пошук](#search)*. Коли ви додаєте туристичні пам'ятки, які називаються *[Точки](#points)* зі *Статті путівника* на карту OsmAnd, ви також можете відкрити статтю за допомогою кнопки *Читати повністю* у [розділі опису](../map/tracks/track-context-menu.md#description-and-info) точки маршруту.

У верхній частині екрана розташовані такі елементи керування:

- Перемикач для зміни мови статті. Мову можна вибрати з доступних варіантів. За замовчуванням використовується системна мова.
- За допомогою кнопки &#8942; ви можете поділитися статтею з друзями. Посилання відкривається в застосунку OsmAnd, відповідний файл путівника має бути завантажений на пристрій одержувача або на сайт [Wikivoyage](https://www.wikivoyage.org/), якщо одержувач не має застосунку OsmAnd або для пристроїв iOS.
- Торкання панелі навігації відкриває *[Меню навігації путівників](#navigation-menu)*.

У нижній частині екрана розташовані такі кнопки:

- [Зміст](#table-of-contents). Відкриває зміст статті.
- [Точки](#points). Показує туристичні пам'ятки, пов'язані зі статтею, на карті.
- [Закладка](#explore-and-bookmark). Дозволяє додати статтю до закладок для подальшого читання.

### Меню навігації {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Щоб переміщатися між статтями в *Путівниках*, використовуйте **Меню навігації**. Ви можете отримати доступ до нього, торкнувшись адресного поля над зображенням. ЗВЕРНІТЬ УВАГУ, що статті в Путівниках згруповані таким чином: *Континент → Регіон → Країна → Провінція (регіон) → Місто*.
Якщо ви торкнетеся стрілки у верхньому лівому куті екрана, ви перейдете безпосередньо на вкладку *Досліджуйте* або *Статті із закладок* (залежно від того, яку вкладку ви відкрили раніше).

### Зміст {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Більшість *статей путівників* мають однакову структуру змісту: *вступ* (зображення та опис туристичного об'єкта) та *наступні розділи*.

- &nbsp;*Зрозуміти*. Деталі про місцеву культуру та звичаї.
- &nbsp;*Дістатися*. Деталі про те, як дістатися до деяких місць і скільки коштуватиме цей маршрут.
- &nbsp;*Побачити*. Список пам'яток (музеї, історичні місця тощо) з повними описами: ціни на квитки, години роботи, корисні посилання та номери телефонів.
- &nbsp;*Зробити*. Місця для проведення часу.
- &nbsp;*Купити*. Місця для покупок.
- &nbsp;*Поїсти*. Заклади харчування (розділені за бюджетом: бюджетні, середнього класу, розкішні).
- &nbsp;*Випити*. Бари та кафе.
- &nbsp;*Спати*. Житло розділене за бюджетом (бюджетне, середнього класу, розкішне).
- &nbsp;*Далі*. Найближчі місця з Wikivoyage.

### Точки {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Статті путівників* часто містять туристичні пам'ятки, згруповані за темами. Одним дотиком до кнопки *Точки* внизу *[Статті](#travel-article)* усі пам'ятки, пов'язані з темою (заклади харчування, варіанти розміщення, аеропорти, магазини, історичні пам'ятки тощо), будуть додані на карту та можуть бути *[керовані як трек](#manage-as-gpx-track)*.

За замовчуванням групи пам'яток позначаються певними піктограмами: категорії *Їсти та пити* — ножем і виделкою в червоному колі, *Робити та бачити* — камерою в зеленому колі та інші. Ви можете керувати групами точок за допомогою &#8942; як *[папкою точок маршруту](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Точки в *статтях про подорожі* посилаються на точки маршруту на GPX-треку.
Ви також можете *[додати точки на карту](#travel-routes)* в меню *Налаштувати карту*. Ви можете відобразити їх усі або вибрати певну категорію.
:::

## Туристичні маршрути {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Альтернативний спосіб перегляду *Путівників* – відображення їх на карті за допомогою меню *Налаштувати карту*. Ця функція не стосується можливості, яку надає OsmAnd для використання Wikivoyage, вона стосується лише треків. Ви можете прочитати більше в нашому [блозі](https://osmand.net/blog/routes#generated-travel-routes).

![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_view.png)

### Туристичні маршрути та статті на карті {#travel-routes-and-articles-on-the-map}

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Після того, як ви ввімкнете відображення *Туристичних маршрутів* у меню *Налаштувати карту*, на карті з'являться кола різних кольорів. Помаранчеві позначають треки маршрутів, статті маршрутів та деякі точки маршруту. Торкніться певного маршруту, статті або точки, а потім торкніться кнопки *Завантажити* (&#9047;), і ви зможете [керувати ними як треком](#manage-as-gpx-track).

### Спеціальні путівники {#custom-travel-guides}

Ми рекомендуємо додавати нові статті або редагування до [Wikivoyage](https://en.wikivoyage.org/). Ми оновлюємо Путівники приблизно кожні 6 місяців, і ви можете завантажувати нові статті. Ви також можете створити свій власний *Путівник*. Як це зробити, описано в технічній документації (див. статтю *[Створення власного путівника](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->

## Керування як GPX-трек {#manage-as-gpx-track}

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Після додавання *Путівників* на карту, *Статті про подорожі* можна зберегти як GPX-трек та керувати ними через меню *[Мої місця](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Їх можна відображати на карті, ділитися ними, перейменовувати, розміщувати в іншій папці, експортувати або видаляти.

- &nbsp;В *[Огляді](../map/tracks/track-context-menu.md#overview)* ви можете прочитати короткий опис або відкрити [статтю Путівника](#travel-article), торкнувшись кнопки *Читати повністю*. *Редагувати* дозволяє виправити статтю.
- &nbsp;У розділі *[Трек](../map/tracks/track-context-menu.md#altitude--speed-graphs)* інформація відсутня, GPX-файли *Путівників* містять лише точки маршруту.
- &nbsp;У розділі *[Точки](../map/tracks/track-context-menu.md#points--waypoints)* ви бачите папки з точками, згрупованими за назвою (Купити, Зробити, Випити тощо).
- &nbsp;Кнопка *[Параметри](../map/tracks/track-context-menu.md#options)* виконує ті ж функції, що й у звичайному треку.

:::info
*Точки* зберігаються у [GPX-файлі](../../technical/osmand-file-formats/osmand-gpx.md) (поширений формат для треків) як [Точки маршруту](../map/point-layers-on-map.md#track-waypoints). Кількість точок (точок маршруту) у треку позначена поруч із піктограмою &#128681; у полі треку.
У *[контекстному меню треку](../map/tracks/track-context-menu.md)* GPX-файлу ви можете знайти загальну інформацію про статтю, до якої належить цей трек.
:::

## Поєднання з Вікіпедією {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

У *Статтях путівників* ви можете знайти корисну інформацію про туристичні пам'ятки (контактну інформацію, веб-посилання, ціни тощо). Багато статей мають кнопку *Wikipedia*, яка дозволяє відкрити *[статтю Вікіпедії](../plugins/wikipedia.md)* (онлайн або офлайн) про цікаве місце.

У деяких випадках вкладка *[Закладки](#explore-and-bookmark)* OsmAnd запропонує вам завантажити [шар карти Wikipedia](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) для перегляду пов'язаних статей офлайн.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info NOTE
[Плагін Wikipedia](../plugins/wikipedia.md) є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Останнє оновлення: січень 2025*