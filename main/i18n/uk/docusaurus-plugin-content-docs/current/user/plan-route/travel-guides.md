---
source-hash: 4d1fd6f77d3485a33ced776546c65769d6a354be721ca6e2b421c4ef414bb7e8
sidebar_position: 2
title:  Туристичні путівники
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
Туристичні путівники — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

Віртуальні туристичні путівники в OsmAnd пропонують користувачам цінну інформацію, рекомендації та поради. Вони також дозволяють мандрівникам отримувати доступ до вичерпної навігаційної інформації про визначні пам'ятки в застосунку.

Туристичні путівники OsmAnd базуються на даних з [Wikivoyage](https://www.wikivoyage.org/), спільнотного проєкту, подібного до Вікіпедії, де автори-волонтери створюють актуальні статті.  
Інформація з Wikivoyage містить основні факти про місце, транспорт, пам'ятки, магазини та багато іншого.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Загальний вигляд туристичних путівників](@site/static/img/guides/travel_guides_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню мап iOS](@site/static/img/personal/maps/travel_guides_overview_ios.png)

</TabItem>

</Tabs>


## Як користуватися {#how-to-use}

- [Завантажте](#download-articles) *туристичні путівники*.
- Переглядайте [статті](#browse-articles) про країну, регіон, місто, пам'ятку.
    - Або [відобразіть статті та/або точки туристичних путівників на мапі](#travel-routes) за допомогою меню "Налаштувати мапу".
    - Переглядайте пам'ятки на мапі, додавайте їх до *[маркерів на мапі](../personal/markers.md#add--edit-markers)* або *[Обраного](../personal/favorites.md#favorite-group-actions)*.
    - За допомогою кнопки *[Читати повністю](#manage-as-gpx-track)* перейдіть до *[статті](#travel-article)* у *туристичних путівниках*.
- [Додавайте статті в закладки](#explore-and-bookmark), щоб прочитати їх пізніше.
- Вибирайте [точки](#points) зі статей для відвідування та додавайте їх на мапу OsmAnd.
- Отримуйте більше інформації про місця для відвідування з офлайн-[статей Вікіпедії](#combine-with-wikipedia).
- [Побудуйте маршрут](../navigation/setup/route-navigation.md#set-destinations) до обраних туристичних пам'яток або вільну прогулянку між точками.

:::note
Статті *туристичних путівників* зберігаються в OsmAnd як GPX-треки з шляховими точками. Після додавання цих треків на мапу (див. розділи *[Точки](#points)* або *[Туристичні маршрути](#travel-routes)* цієї статті), ви можете керувати ними через меню *[Мої місця](../personal/myplaces.md)*.
:::

### Завантаження статей {#download-articles}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*

![Меню завантаження туристичних путівників](@site/static/img/guides/travel_guides_download.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,travel_guides_beta"/>*

![Меню мап iOS](@site/static/img/guides/travel_guides_download_1_ios.png)

</TabItem>

</Tabs>

Перш ніж почати користуватися туристичними путівниками, їх потрібно завантажити через [меню завантаження мап](../start-with/download-maps.md#maps-and-resources) (*<Translate android="true" ids="shared_string_menu,maps_and_resources,shared_string_travel_guides"/>*). Статті згруповані за регіонами: *Африка, Азія, Австралія та Океанія, Центральна Америка, Європа, Північна Америка, Росія та Південна Америка*, тому вам не потрібно завантажувати путівники для окремого міста чи країни.  
Зберігаючи потрібні регіони на своєму пристрої, ви можете переглядати статті в OsmAnd, навіть перебуваючи за кордоном або поза зоною дії мобільної мережі.

:::note
Окрім путівників по країнах, регіонах чи містах, ви можете знайти путівники по місцях з фільмів, книг, комп'ютерних ігор, пам'ятних місцях великих людей тощо. Існують також спеціалізовані путівники, наприклад, список Глобальної мережі геопарків ЮНЕСКО або найбільших та найскладніших міжнародних аеропортів світу.
:::

## Перегляд статей {#browse-articles}

Екран *туристичних путівників* складається з двох основних частин: [*поля пошуку*](#search) та списку *туристичних путівників* з двома вкладками: *[<Translate android="true" ids="shared_string_explore"/> та <Translate android="true" ids="saved_articles"/>](#explore-and-bookmark)*. Перемикатися між ними можна одним дотиком до вкладки.
Коли ви відкриваєте *туристичні путівники* (*<Translate android="true" ids="shared_string_menu,shared_string_travel_guides"/>*), OsmAnd покаже вам статті про цікаві місця, розташовані поблизу географічних координат поточного центру мапи. Коли ви торкаєтеся елемента зі списку, відкривається [туристична стаття](#travel-article). Внизу екрана є перемикач на *вкладку "Закладки"*.  

### Огляд та закладки {#explore-and-bookmark}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Головний екран туристичних путівників](@site/static/img/guides/travel_guides_main_screen_1.png) ![Головний екран туристичних путівників 2](@site/static/img/guides/travel_guides_main_screen_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Головний екран туристичних путівників](@site/static/img/guides/travel_guides_main_screen_1_ios.png) ![Головний екран туристичних путівників 2](@site/static/img/guides/travel_guides_main_screen_2_ios.png)

</TabItem>

</Tabs>

На вкладці **Огляд** або **<Translate android="true" ids="popular_destinations"/>** перераховано 30 найкращих статей про напрямки, що знаходяться поруч із центром екрана (незалежно від місцезнаходження). Торкнувшись елемента зі списку з назвою та коротким описом статті, ви можете переглянути повний текст цієї статті.  
Якщо ви торкнетеся *кнопки "Закладка"*, стаття буде збережена для подальшого читання і буде доступна на вкладці "Закладки". На вкладці *"Статті в закладках"* статті розташовані в порядку їх збереження, найновіші — вгорі.

- &nbsp;**<Translate android="true" ids="shared_string_read"/>**. Відкриває [туристичну статтю](#travel-article).
- &nbsp;**<Translate android="true" ids="shared_string_bookmark"/>**. Переміщує вибрану статтю до <Translate android="true" ids="saved_articles"/>.
- &nbsp;**<Translate android="true" ids="shared_string_remove"/>**. Видаляє вибрану статтю з <Translate android="true" ids="saved_articles"/>.

### Пошук {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_search_1_ios.png)

</TabItem>

</Tabs>

Поле пошуку розташоване у верхній частині екрана <Translate android="true" ids="shared_string_travel_guides"/>. Якщо ви почнете вводити перші літери країни, міста чи відомого місця, під полем пошуку з'явиться список статей. Торкнувшись потрібної, ви можете почати читати.  
Поруч з кожним результатом пошуку вказано 3 найпоширеніші мови, якими можна прочитати вибрану статтю. Однак популярні статті доступні більшою кількістю мов, ніж 3 перераховані.

**Додаткові можливості:**  

- Ви можете шукати спеціальні культурні пам'ятки, такі як *туризм Гаррі Поттера*, *міста-привиди*, *монархії* та інші.
- Щоб видалити історію пошуку, потрібно скористатися [кнопкою <Translate android="true" ids="shared_string_options"/>](#options).

<!-- 
- Search is complete only when you hit &#128269; or space at the end of the word. - doesn't work as it should be
-->

### Опції {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню опцій туристичних путівників](@site/static/img/guides/travel_guides_options_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_options_ios.png)

</TabItem>

</Tabs>

У цьому меню ви можете налаштувати вигляд статей під час роботи в автономному режимі. ЗВЕРНІТЬ УВАГУ, що *[завантажені](#download-articles)* туристичні путівники не містять зображень. Вони з'являються лише при перегляді статей з активним інтернет-з'єднанням.  
У меню "Опції" ви можете вибрати, чи зберігати зображення в переглянутих статтях для використання в автономному режимі. Ви також можете очистити наявний кеш зображень або видалити історію пошуку (працює лише при пошуку в *туристичних путівниках*).

- &nbsp;**<Translate android="true" ids="wikivoyage_download_pics"/>**. Зображення в статтях можна завантажувати для використання в автономному режимі.  
- &nbsp;**<Translate android="true" ids="images_cache"/>**. Очищує кеш зображень для звільнення пам'яті.
- &nbsp;**<Translate android="true" ids="delete_search_history"/>**. Очищує [історію пошуку](#search).

## Туристична стаття {#travel-article}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Стаття туристичного путівника](@site/static/img/guides/travel_guides_article.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_article_ios.png)

</TabItem>

</Tabs>

Ви можете відкрити статтю із запропонованих варіантів на *[вкладці "Огляд"](#explore-and-bookmark)* або за допомогою опції *[Пошук](#search)*. Коли ви додаєте туристичні пам'ятки, що називаються *[Точки](#points)*, зі *статті туристичного путівника* на мапу OsmAnd, ви також можете відкрити статтю за допомогою кнопки *Читати повністю* в [розділі опису](../map/tracks/track-context-menu.md#description-and-info) шляхової точки.

У верхній частині екрана розташовані такі елементи керування:

- Перемикач для зміни мови статті. Мову можна вибрати з доступних варіантів. За замовчуванням використовується системна мова.
- За допомогою кнопки &#8942; ви можете поділитися статтею з друзями. Посилання відкривається в застосунку OsmAnd, відповідний файл туристичних путівників має бути завантажений на пристрої одержувача, або на сайті [Wikivoyage](https://www.wikivoyage.org/), якщо одержувач не має застосунку OsmAnd або для пристроїв iOS.
- Натискання на панель навігації відкриває *[навігаційне меню туристичних путівників](#navigation-menu)*.

Внизу екрана розташовані такі кнопки:

- [Зміст](#table-of-contents). Відкриває зміст статті.
- [Точки](#points). Показує туристичні пам'ятки, пов'язані зі статтею, на мапі.
- [Закладка](#explore-and-bookmark). Дозволяє додати статтю в закладки для подальшого читання.  


### Навігаційне меню {#navigation-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню змісту туристичних путівників](@site/static/img/guides/travel_guides_navigation_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_navigation_menu_ios.png)

</TabItem>

</Tabs>

Щоб переходити від однієї статті до іншої в *статтях туристичних путівників*, використовуйте **Навігаційне меню**. Ви можете отримати до нього доступ, торкнувшись адресного рядка над зображенням. ЗВЕРНІТЬ УВАГУ, що статті в туристичних путівниках згруповані таким чином: *Континент → Регіон → Країна → Область (регіон) → Місто*.
Якщо ви торкнетеся стрілки у верхньому лівому куті екрана, ви перейдете безпосередньо на вкладку *Огляд* або *Статті в закладках* (залежно від того, яку вкладку ви відкривали раніше).


### Зміст {#table-of-contents}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню змісту туристичних путівників](@site/static/img/guides/travel_guides_contents_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_contents_menu_ios.png)

</TabItem>

</Tabs>

Більшість *статей туристичних путівників* мають однакову структуру змісту: *вступ* (зображення та опис туристичного об'єкта) та *наступні розділи*.

- &nbsp;*Зрозуміти*. Деталі про місцеву культуру та звичаї.
- &nbsp;*Як дістатися*. Деталі про те, як дістатися до деяких місць і скільки коштуватиме цей маршрут.
- &nbsp;*Побачити*. Список пам'яток (музеї, історичні місця тощо) з повним описом: ціни на квитки, години роботи, корисні посилання та номери телефонів.
- &nbsp;*Розваги*. Місця для проведення часу.
- &nbsp;*Купити*. Місця для покупок.
- &nbsp;*Їжа*. Заклади громадського харчування (розділені за бюджетом: бюджетні, середнього класу, дорогі).
- &nbsp;*Напої*. Бари та кафе.
- &nbsp;*Ночівля*. Житло розділене за бюджетом (бюджетне, середнього класу, дороге).
- &nbsp;*Далі*. Найближчі місця з Wikivoyage.

### Точки {#points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_points_on_the_map_2.png) ![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_articles_three_dots_point.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_points_on_the_map_1_ios.png) ![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_points_on_the_map_2_ios.png)

</TabItem>

</Tabs>

*Статті туристичних путівників* часто містять туристичні пам'ятки, згруповані за темами. Одноразове натискання кнопки *Точки* внизу *[статті](#travel-article)* додасть на мапу всі пам'ятки, пов'язані з темою (місця харчування, варіанти розміщення, аеропорти, магазини, історичні пам'ятники тощо), і ними можна буде *[керувати як треком](#manage-as-gpx-track)*.  

За замовчуванням групи пам'яток позначені певними іконками: категорії *Їжа та напої* — ножем і виделкою в червоному колі, *Розваги та пам'ятки* — камерою в зеленому колі та інші. Ви можете керувати групами точок за допомогою &#8942; як *[папкою точок маршруту](../map/tracks/track-context-menu.md#points--waypoints)*.  

:::note
Точки в *туристичних статтях* відповідають шляховим точкам на GPX-треку.  
Ви також можете *[додати точки на мапу](#travel-routes)* в меню *Налаштувати мапу*. Ви можете відобразити їх усі або вибрати певну категорію.  
:::


## Туристичні маршрути {#travel-routes}

*<Translate android="true" ids="shared_string_menu,configure_map,travel_routes"/>*

Альтернативний спосіб перегляду *туристичних путівників* — відобразити їх на мапі за допомогою меню *Налаштувати мапу*. Ця функція не стосується можливості, яку надає OsmAnd для використання Wikivoyage, вона стосується лише треків. Детальніше ви можете прочитати в нашому [блозі](https://osmand.net/blog/routes#generated-travel-routes).

![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_travel_routes_path.png) ![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_travel_routes_view.png)


### Туристичні маршрути та статті на мапі {#travel-routes-and-articles-on-the-map}

![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_articles_routes_on_the_map.png) ![Меню точок туристичних путівників](@site/static/img/guides/travel_guides_articles_routes_context_menu.png)  

Після того, як ви увімкнете відображення *туристичних маршрутів* у меню *Налаштувати мапу*, на мапі з'являться кола різних кольорів. Помаранчеві позначають треки маршрутів, статті про маршрути та деякі шляхові точки. Торкніться певного маршруту, статті або точки, а потім натисніть кнопку *Завантажити* (&#9047;), і ви зможете [керувати ними як треком](#manage-as-gpx-track).

### Власні туристичні путівники {#custom-travel-guides}

Ми рекомендуємо вам додавати нові статті або правки до [Wikivoyage](https://en.wikivoyage.org/). Ми оновлюємо туристичні путівники приблизно кожні 6 місяців, і ви можете завантажувати нові статті. Ви також можете створити власний *туристичний путівник*. Як це зробити, описано в технічній документації (див. статтю *[Створення власного туристичного путівника](../../technical/map-creation/create_travel_guide.md)*).

<!--
### Collections of tracks {#collections-of-tracks}

https://osmand.net/blog/routes/#generated-travel-routes
-->


## Керування як GPX-треком {#manage-as-gpx-track}

![Меню точок туристичних путівників 2](@site/static/img/guides/travel_guides_points_on_the_map.png) ![Меню точок туристичних путівників 2](@site/static/img/guides/travel_guides_articles_my_places.png)  

Після додавання *туристичних путівників* на мапу, *туристичні статті* можна зберегти як GPX-трек і керувати ними через меню *[Мої місця](../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks,icon_group_travel"/>*). Їх можна відображати на мапі, ділитися ними, перейменовувати, переміщувати в іншу папку, експортувати або видаляти.  

- &nbsp;У *[Огляді](../map/tracks/track-context-menu.md#overview)* ви можете прочитати короткий опис або відкрити [туристичну статтю](#travel-article), натиснувши кнопку *Читати повністю*. *Редагувати* дозволяє виправити статтю.
- &nbsp;У розділі *[Трек](../map/tracks/track-context-menu.md#altitude--speed-graphs)* немає інформації, оскільки GPX-файли *туристичних путівників* містять лише шляхові точки.  
- &nbsp;У розділі *[Точки](../map/tracks/track-context-menu.md#points--waypoints)* ви побачите папки з точками, згрупованими за назвою (Купити, Розваги, Напої тощо).
- &nbsp;Кнопка *[Опції](../map/tracks/track-context-menu.md#options)* виконує ті ж функції, що і для звичайного треку.

:::info
*Точки* зберігаються у [GPX-файлі](../../technical/osmand-file-formats/osmand-gpx.md) (поширений формат для треків) як [шляхові точки](../map/point-layers-on-map.md#track-waypoints). Кількість точок (шляхових точок) у треку позначається поруч з іконкою &#128681; у полі треку.  
У *[контекстному меню треку](../map/tracks/track-context-menu.md)* GPX-файлу ви можете знайти загальну інформацію про статтю, до якої належить цей трек.  
:::

## Поєднання з Вікіпедією {#combine-with-wikipedia}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Поєднання туристичних путівників з Вікіпедією 1](@site/static/img/guides/travel_guides_wikipedia_1.png) ![Поєднання туристичних путівників з Вікіпедією 2](@site/static/img/guides/travel_guides_wikipedia_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_wikipedia_1_ios.png)  ![Меню пошуку туристичних путівників](@site/static/img/guides/travel_guides_wikipedia_2_ios.png)

</TabItem>

</Tabs>

У *статтях туристичних путівників* ви можете знайти корисну інформацію про туристичні пам'ятки (контактна інформація, веб-посилання, ціни тощо). Багато статей мають кнопку *Вікіпедія*, яка дозволяє відкрити *[статтю з Вікіпедії](../plugins/wikipedia.md)* (онлайн або офлайн) про цікаве місце.  

У деяких випадках *[вкладка "Закладки"](#explore-and-bookmark)* OsmAnd запропонує вам завантажити [шар мапи з Вікіпедії](../plugins/wikipedia.md#download-wikipedia-packages) для перегляду пов'язаних статей в автономному режимі.

![Завантаження Вікіпедії для туристичних путівників](@site/static/img/guides/travel_guides_wikipedia_download.png)

:::info ПРИМІТКА
[Плагін "Вікіпедія"](../plugins/wikipedia.md) — це [платна функція](../purchases/index.md) застосунку OsmAnd.
:::

## Пов'язані статті {#related-articles}

- [Взаємодія з мапою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні мапи (Стилі мапи)](../../user/map/vector-maps.md)