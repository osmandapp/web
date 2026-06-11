---
source-hash: f16263db8d987d5d802140c2f60261308cc6e1eb3b436559f0926217fa039b11
title: Маршрути
sidebar_position: 11
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

OsmAnd має багато потужних функцій для відображення різних [маршрутів](./types-of-routes.md) на мапі. За замовчуванням ці маршрути є частиною [векторних мап](../../map/vector-maps.md#routes) (дані OpenStreetMap), однак подібну функціональність забезпечують [треки](../../map/tracks/index.md), які можна створити за допомогою [Планування маршруту](../../plan-route/create-route.md), імпортувати як [GPX-треки](#save-as-a-track), записати за допомогою [плагіна Запис подорожі](../../plugins/trip-recording.md). Легенда мапи маршрутів [тут](../../map-legend/osmand.md#routes).

## Відображення маршрутів на мапі {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android.png)

- Щоб відобразити потрібні маршрути на мапі, увімкніть їх у *списку Маршрути* меню [Налаштувати мапу](../../map/configure-map-menu.md).
- OsmAnd може виділяти [маршрути, наявні в OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Їх можна вибрати, натиснувши [символ на маршруті](#save-as-a-track), і якщо видимий набір маршрутів налаштовано правильно, ви можете орієнтуватися за кольором і піктограмами.
- Основні типи маршрутів також можна фільтрувати за класами та підкласами, що дозволяє відображати лише певні групи в межах кожного типу. Наприклад, ви можете показувати туристичні маршрути за **символами OSMC** як класами, а за *міжнародними, національними, регіональними* або *місцевими мережами* як підкласами, які наразі доступні, коли ввімкнено плагін [Розробка OsmAnd](../../plugins/development.md).
- Ви можете створити трек поверх маршрутів за допомогою інструмента [Планування маршруту](../../plan-route/create-route.md).
- Коли кілька маршрутів проходять однією дорогою, кожен маршрут відображається окремою напівпрозорою лінією, розміщеною над іншими.
- При натисканні на місце, де перетинається кілька маршрутів, з’являється контекстне меню з усіма маршрутами, що проходять через цю точку.
- Для відображення всіх елементів нової схеми рендерингу маршрутів потрібні оновлені векторні мапи.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- Щоб відобразити потрібні маршрути на мапі, увімкніть їх у *списку Маршрути* меню [Налаштувати мапу](../../map/configure-map-menu.md).
- OsmAnd може виділяти [маршрути, наявні в OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Їх можна вибрати, натиснувши [символ на маршруті](#save-as-a-track), і якщо видимий набір маршрутів налаштовано правильно, ви можете орієнтуватися за кольором і піктограмами.
- Ви можете створити трек поверх маршрутів за допомогою інструмента [Планування маршруту](../../plan-route/create-route.md).
- Коли кілька маршрутів проходять однією дорогою, кожен маршрут відображається окремою напівпрозорою лінією, розміщеною над іншими.

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>

## Дії з маршрутами {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

На мапі ви можете вибирати маршрути для [туризму, велоспорту, лижного спорту, MTB, мотокросу, мандрівок тощо](./types-of-routes.md). За наявності туристичні маршрути показують свої позначки за допомогою [символів OSMC](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); інші типи маршрутів використовують власні позначки.

Коли ви натискаєте **символ маршруту** на мапі:

- Відображається **список найближчих маршрутів** у цій точці.
- Після вибору маршруту зі списку відкривається [контекстне меню](../../map/tracks/track-context-menu.md) для цього маршруту з детальною інформацією та доступними діями.
- Вибраний маршрут відкривається у вікні перегляду треку, дозволяючи взаємодіяти з ним так само, як із GPX-треком.

У **контекстному меню** ви можете:

- Переглянути [додаткову інформацію](#route-info-and-elevation) про вибраний маршрут.
- [Зберегти маршрут](#save-as-a-track) як **GPX-трек**.
- [Почати навігацію](#start-navigation) за маршрутом.

### Деталі скелелазних зон і скель {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

При виборі [скелелазної зони або скелі](./types-of-routes.md#climbing-routes) OsmAnd надає детальний опис місця для скелелазіння, включаючи: назву та розташування, категорію складності (UIAA, French, YDS тощо), тип породи, висоту та довжину маршруту, якість скелелазіння та стан поверхні.

### Інформація про маршрут і перевищення висот {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

У контекстному меню буде видно таку інформацію:

- **Інформація про маршрут**: назва маршруту, посилання OSM (потрібен плагін OSM Editing), тип, опис, відстань, напрямок, підйом/спуск, діапазон висот, мережа, оператор, стан, колір, кільцевий маршрут, початкова/кінцева точки тощо.
- **Загальне**: розмір, розташування, дата створення.
- **Додаткова інформація**. Відображає тип активності.
- кнопки дій: [Зберегти як](#save-as-a-track) і [Почати навігацію](#start-navigation).
- [Інформація про висоту](../../navigation/setup/route-details.md#elevation-info). Відображає інформацію про дані висоти на маршруті.
- [Аналіз треку на мапі](../../map/tracks/index.md#analyze-track-on-map). Відображає детальний аналіз даних треку за допомогою графіків і мап.

Щоб переглянути графік висоти, схилу або деталей висоти для вибраного маршруту, просто натисніть будь-яке з таких значень у контекстному меню: **Відстань**, **Підйом**, **Спуск** або **Висота**.

Ви також можете відкрити вкладку *Трек* і переключитися на перегляд *Висота*, щоб побачити повний графік висоти маршруту.

**Примітка:** Дані про висоту генеруються автоматично і можуть дещо відрізнятися залежно від доступних даних.

### Зберегти як трек {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>

Щоб зберегти маршрут як *файл GPX*, натисніть кнопку **Зберегти (Завантажити)** під [панеллю інформації](../../map/tracks/track-context-menu.md#info-panel). Це відкриє панель кнопок [Швидкі дії](../../map/tracks/track-context-menu.md#track-actions), де ви матимете доступ до дій з треком, таких як зміна [Зовнішнього вигляду](../../map/tracks/appearance.md), [Навігації](../../navigation/setup/route-navigation.md) або редагування [Планування маршруту](../../plan-route/create-route.md). Збережені маршрути поводяться так само, як інші треки, і доступні у вашій колекції треків.

### Почати навігацію {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>

Щоб почати навігацію за вибраним маршрутом OSM, натисніть кнопку **Почати навігацію** у [**панелі інформації**](../../map/tracks/track-context-menu.md#info-panel).

Це запустить режим [**Навігація за треком**](../../navigation/setup/gpx-navigation.md), дозволяючи слідувати маршрутом з голосовими підказками та функціями навігації.

### Швидкі дії {#quick-actions}

Ви можете налаштувати, чи вмикати чи вимикати маршрути, за допомогою віджета [Швидка дія](../../widgets/quick-action.md#configure-map).

## Пошук маршрутів {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Знаходьте маршрути за допомогою [функції Пошук](../../search/index.md) за назвою або вибравши «Маршрути» в [розділі Категорії](../../search/search-poi.md#).

Щоб виконати пошук, перейдіть до меню *<Translate android="true" ids="search_button"/>* або *<Translate android="true" ids="search_button,search_categories"/>* і введіть вашу активність.

Перейдіть до *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* , щоб знайти потрібні маршрути. Результати пошуку маршрутів відображають назву маршруту, тип активності, довжину, розташування, підйом/спуск (на Android) і відстань до найближчої точки.

### Фільтри маршрутів {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

У результатах пошуку маршрутів натисніть кнопку **Фільтри** у верхньому правому куті, щоб звузити список. На екрані Фільтри є поле **Фільтрувати за назвою**; блок **Тип** з *Бюро*, *Поштове відділення* та *Поштовий партнер*; і **додаткові критерії**, які залежать від вибраної категорії маршруту або активності, оскільки кожна категорія може мати власні характеристики та значення фільтрів.

Ви можете вмикати або вимикати фільтри за допомогою перемикачів, а деякі розділи містять *Показати все*, щоб відобразити додаткові значення.

## Пов’язані статті {#related-articles}

- [Контекстне меню мапи](../../map/map-context-menu.md)
- [Налаштувати мапу](../../map/configure-map-menu.md)
- [Треки](../../map/tracks/index.md)
- [Контекстне меню треків](../../map/tracks/track-context-menu.md)
- [Громадський транспорт](../public-transport.md)
- [Вигляд лінії маршруту навігації](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Пошук POI](../../search/search-poi.md#)
- [Типи маршрутів](./types-of-routes.md)