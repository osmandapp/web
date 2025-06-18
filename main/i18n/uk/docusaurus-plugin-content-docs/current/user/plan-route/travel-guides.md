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

Віртуальні путівники в OsmAnd пропонують користувачам цінну інформацію, рекомендації та поради. Вони також дозволяють мандрівникам отримувати вичерпну навігаційну інформацію про визначні місця в застосунку.

Путівники OsmAnd базуються на даних з [Wikivoyage](https://www.wikivoyage.org/), спільнотного проєкту, схожого на Вікіпедію, де автори-волонтери створюють актуальні статті.
Інформація Wikivoyage включає основні факти про місце, транспорт, визначні місця, магазини тощо.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides view General](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Maps menu iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Як користуватися {#how-to-use}

- [Завантажте](#download-articles) *Путівники*.
- Переглядайте [статті](#browse-articles) про країну, регіон, місто, визначне місце.
    - Як альтернатива, [відображайте статті путівників та/або точки на мапі](#travel-routes) за допомогою меню Налаштувати мапу.
    - Переглядайте визначні місця на мапі, додавайте їх до *[Маркерів мапи](../personal/markers.md#add--edit-markers)* або *[Вибраного](../personal/favorites.md#favorite-group-actions)*.
    - Використовуючи кнопку *[Читати повністю](#manage-as-gpx-track)*, перейдіть до *[статті](#travel-article)* всередині *Путівників*.
- [Додавайте статті до закладок](#explore-and-bookmark), щоб прочитати їх пізніше.
- Обирайте [точки](#points) зі статей для відвідування та додавайте їх на мапу OsmAnd.
- Отримуйте більше інформації про місця для відвідування з офлайн [статей Вікіпедії](#combine-with-wikipedia).
- [Будуйте маршрут](../navigation/setup/route-navigation.md#set-destinations) до обраних туристичних визначних місць або вільну прогулянку між точками.

:::note
Статті *Путівників* зберігаються всередині OsmAnd як GPX-треки з маршрутними точками. Після додавання цих треків на мапу (див. розділи *[Точки](#points)* або *[Туристичні маршрути](#travel-routes)* цієї статті), ви можете керувати ними через меню *[Мої місця](../personal/myplaces.md)*.
:::

### Завантажити статті {#download-articles}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Travel guides download menu](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Maps menu iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Перш ніж почати користуватися путівниками, вам потрібно завантажити їх через меню [Завантажити мапу](../start-with/download-maps.md#main-menu) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Статті згруповані за регіонами: *Африка, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка*, тож вам не потрібно завантажувати путівники для окремого міста чи країни.
Зберігаючи необхідні регіони на своєму пристрої, ви можете переглядати статті за допомогою OsmAnd, навіть коли ви за кордоном або поза зоною дії мобільної мережі.

:::note
Окрім путівників по країнах, регіонах чи містах, ви можете знайти путівники по місцях з фільмів, книг, комп'ютерних ігор, місцях пам'яті видатних людей тощо.
Також є спеціалізовані путівники, такі як список глобальної мережі геопарків ЮНЕСКО або найбільші та найскладніші міжнародні аеропорти світу.
:::

## Переглядати статті {#browse-articles}

Екран *Путівники* складається з двох основних частин: *[поля пошуку](#search)* та списку *путівників* з двома вкладками: *[<Translate android="true" ids="shared_string_explore"/> та <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Ви можете перемикатися між ними одним дотиком вкладки.
Коли ви відкриваєте *Путівники* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd покаже вам статті про цікаві місця, розташовані поблизу географічних координат поточного центру мапи. Коли ви торкаєтеся елемента зі списку, відкривається [стаття Путівника](#travel-article). Внизу екрана знаходиться перемикач на вкладку *Закладки*.

### Досліджувати та додавати до закладок {#explore-and-bookmark}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides main screen](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Travel guides main screen 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Досліджувати** або **<Translate android="true" ids="popular_destinations"/>** перелічено 30 найкращих статей про напрямки, що знаходяться поблизу центру екрана (поза місцезнаходженням). Торкнувшись елемента зі списку із заголовком та коротким описом статті, ви можете переглянути повний текст цієї статті.
Якщо ви торкнетеся кнопки *Додати до закладок*, стаття буде збережена для подальшого читання та буде доступна на вкладці Закладки. На вкладці *Статті в закладках* статті розташовані в порядку їх збереження, з найновішими статтями вгорі.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Відкриває [Статтю Путівника](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Переміщує обрану статтю до <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Видаляє обрану статтю з <Translate android="true" ids="saved_articles"/>.

### Пошук {#search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Поле пошуку розташоване у верхній частині екрана <Translate android="true" ids="shared_string_travel_guides"/>. Якщо ви почнете вводити перші літери назви країни, міста чи відомого місця, під полем пошуку з'явиться список статей. Торкнувшись потрібної, ви можете почати читати.
Поруч із кожним результатом пошуку перелічено 3 найпоширеніші мови, якими можна прочитати обрану статтю. Однак популярні статті доступні більшою кількістю мов, ніж 3 перелічені.

**Додаткові функції:**

- Ви можете шукати спеціальні культурні пам'ятки, такі як *Гаррі Поттер туризм*, *Міста-привиди*, *Монархії* та інші.
- Щоб видалити історію пошуку, вам потрібно скористатися кнопкою [<Translate android="true" ids="shared_string_options"/>](#options).

<!--
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Опції {#options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides options menu](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

У цьому меню ви можете налаштувати вигляд статей під час роботи офлайн. ЗВЕРНІТЬ УВАГУ, що *[завантажені](#download-articles)* путівники не містять зображень. Вони з'являються лише тоді, коли ви переглядаєте статті з активним підключенням до Інтернету.
У меню Опції ви можете вибрати, чи зберігати зображення з переглянутих статей для використання в режимі офлайн. Ви також можете очистити наявний кеш зображень або видалити історію пошуку (працює лише під час пошуку в *Путівниках*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Зображення зі статей можна завантажити для використання в режимі офлайн.
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Очищає кеш зображень, щоб звільнити пам'ять.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Очищає [історію пошуку](#search).

## Стаття Путівника {#travel-article}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides article](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Ви можете відкрити статтю із запропонованих варіантів на вкладці *[Досліджувати](#explore-and-bookmark)* або за допомогою опції *[Пошук](#search)*. Коли ви додаєте туристичні визначні місця, які називаються *[Точками](#points)*, зі *Статті Путівника* на мапу OsmAnd, ви також можете відкрити статтю за допомогою кнопки *Читати повністю* в [розділі опису](../map/tracks/track-context-menu.md#description-and-info) маршрутної точки.

У верхній частині екрана розташовані такі елементи керування:

- Перемикач для зміни мови статті. Мову можна вибрати з доступних варіантів. За замовчуванням використовується системна мова.
- За допомогою кнопки &#8942; ви можете поділитися статтею зі своїми друзями. Посилання відкривається в застосунку OsmAnd, відповідний файл путівника має бути завантажений на пристрої отримувача, або на сайті [Wikivoyage](https://www.wikivoyage.org/), якщо отримувач не має застосунку OsmAnd або для пристроїв iOS.
- Торкання панелі навігації відкриває *[Меню навігації Путівників](#navigation-menu)*.

Внизу екрана розташовані такі кнопки:

- [Зміст](#table-of-contents). Відкриває зміст статті.
- [Точки](#points). Показує на мапі туристичні визначні місця, пов'язані зі статтею.
- [Додати до закладок](#explore-and-bookmark). Дозволяє додати статтю до закладок для подальшого читання.


### Меню навігації {#navigation-menu}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Щоб переходити від однієї статті до іншої в *Статтях Путівника*, використовуйте **Меню навігації**. Ви можете отримати до нього доступ, торкнувшись поля адреси над зображенням. ЗВЕРНІТЬ УВАГУ, що статті в Путівниках згруповані наступним чином: *Континент → Регіон → Країна → Провінція (регіон) → Місто*.
Якщо ви торкнетеся стрілки у верхньому лівому куті екрана, ви перейдете безпосередньо на вкладку *Досліджувати* або *Статті в закладках* (залежно від того, яку вкладку ви відкрили раніше).


### Зміст {#table-of-contents}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides contents menu](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Більшість *Статей Путівника* мають однакову структуру змісту: *вступ* (зображення та опис туристичного об'єкта) та *наступні розділи*.

- &nbsp;*Зрозуміти*. Деталі про місцеву культуру та звичаї.
- &nbsp;*Дістатися*. Деталі про те, як дістатися до деяких місць та скільки коштуватиме цей маршрут.
- &nbsp;*Побачити*. Список визначних місць (музеї, історичні об'єкти тощо) з повними описами: ціни на квитки, години роботи, корисні посилання та номери телефонів.
- &nbsp;*Зробити*. Місця для проведення часу.
- &nbsp;*Купити*. Місця для покупок.
- &nbsp;*Поїсти*. Заклади харчування (поділені за бюджетом: бюджетні, середнього рівня, дорогі).
- &nbsp;*Випити*. Бари та кафе.
- &nbsp;*Спати*. Місця проживання поділені за бюджетом (бюджетні, середнього рівня, дорогі).
- &nbsp;*Далі*. Найближчі місця з Wikivoyage.

### Точки {#points}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides points  menu](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_articles_three_dots_point.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Статті Путівника* часто містять туристичні визначні місця, згруповані за темами. Торкнувшись один раз кнопки *Точки* внизу *[Статті](#travel-article)*, усі визначні місця, пов'язані з темою (заклади харчування, варіанти проживання, аеропорти, магазини, історичні пам'ятки тощо), будуть додані на мапу і можуть *[керуватися як Трек](#manage-as-gpx-track)*.

За замовчуванням групи визначних місць позначені певними значками: категорії *Поїсти та Випити* ножем і виделкою в червоному колі, *Зробити та Побачити* камерою в зеленому колі та інші. Ви можете керувати групами точок за допомогою &#8942; як *[Папкою маршрутних точок](../map/tracks/track-context-menu.md#points--waypoints)*.

:::note
Точки в *Статтях Путівника* посилаються на маршрутні точки на GPX-треку.
Ви також можете *[додати точки на мапу](#travel-routes)* в меню *Налаштувати мапу*. Ви можете відобразити їх усі або вибрати певну категорію.
:::


## Туристичні маршрути {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Альтернативний спосіб перегляду *Путівників* — відобразити їх на мапі за допомогою меню *Налаштувати мапу*. Ця функція не стосується можливості, наданої OsmAnd для використання Wikivoyage, вона стосується лише треків. Детальніше можна прочитати в нашому [блозі](https://osmand.net/blog/routes#generated-travel-routes).

![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Travel guides points menu](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Туристичні маршрути та статті на мапі {#travel-routes-and-articles-on-the-map}

![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Travel guides points  menu](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)

Після того, як ви увімкнете відображення *Туристичних маршрутів* у меню *Налаштувати мапу*, на мапі з'являться кола різних кольорів. Помаранчеві позначають треки маршрутів, статті маршрутів та деякі маршрутні точки. Торкніться певного маршруту, статті чи точки, а потім торкніться кнопки *Завантажити* (&#9047;), і ви зможете [керувати ними як треком](#manage-as-gpx-track).

### Спеціальні Путівники {#custom-travel-guides}

Ми рекомендуємо додавати нові статті або редагувати їх на [Wikivoyage](https://en.wikivoyage.org/). Ми оновлюємо Путівники приблизно кожні 6 місяців, і ви можете завантажувати нові статті. Ви також можете створити свою власну *Туристичну книгу*. Як це зробити, описано в технічній документації (див. статтю *[Створити власний Путівник](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Керувати як GPX-треком {#manage-as-gpx-track}

![Travel guides points menu 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Travel guides points menu 2](@site/static/img/guides/travel_guides_articles_my_places.png)

Після додавання *Путівників* на мапу, *Статті Путівника* можуть бути збережені як GPX-трек і керуватися через меню *[Мої місця](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Їх можна відображати на мапі, ділитися ними, перейменовувати, переміщувати в іншу папку, експортувати або видаляти.

- &nbsp;У *[Огляді](../map/tracks/track-context-menu.md#overview)* ви можете прочитати короткий опис або відкрити [Статтю Путівника](#travel-article), торкнувшись кнопки *Читати повністю*. *Редагувати* дозволяє виправити статтю.
- &nbsp;У розділі *[Трек](../map/tracks/track-context-menu.md#altitude--speed-graphs)* немає інформації, GPX-файли *Путівників* містять лише маршрутні точки.
- &nbsp;Під *[Точками](../map/tracks/track-context-menu.md#points--waypoints)* ви бачите папки з точками, згрупованими за назвою (Купити, Зробити, Випити тощо).
- &nbsp;Кнопка *[Опції](../map/tracks/track-context-menu.md#options)* виконує ті ж функції, що й у звичайному треку.

:::info ПРИМІТКА
*Точки* зберігаються у [GPX-файлі](../../technical/osmand-file-formats/osmand-gpx.md) (поширений формат для треків) як [Маршрутні точки](../map/point-layers-on-map.md#track-waypoints). Кількість точок (маршрутних точок) у треку позначена поруч зі значком &#128681; у полі треку.
У *[контекстному меню треку](../map/tracks/track-context-menu.md)* GPX-файлу ви можете знайти загальну інформацію про статтю, до якої належить цей трек.
:::

## Поєднати з Вікіпедією {#combine-with-wikipedia}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Travel guides combine with Wikipedia 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Travel guides combine with Wikipedia 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_1_ios.png) ![Travel guides search menu](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

У *Статтях Путівника* ви можете знайти корисну інформацію про туристичні визначні місця (контактна інформація, веб-посилання, ціни тощо). Багато статей мають кнопку *Вікіпедія*, яка дозволяє відкрити *[статтю Вікіпедії](../plugins/wikipedia.md)* (онлайн або офлайн) про цікаве місце.

У деяких випадках вкладка *[Закладки](#explore-and-bookmark)* OsmAnd запропонує вам завантажити [шар мапи Вікіпедії](../plugins/wikipedia.md#download-wikipedia-packages-download-wikipedia-packages) для перегляду пов'язаних статей офлайн.

![Travel guides download Wikipedia](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info ПРИМІТКА
[Плагін Вікіпедія](../plugins/wikipedia.md) — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)

> *Останнє оновлення: Січень 2025*