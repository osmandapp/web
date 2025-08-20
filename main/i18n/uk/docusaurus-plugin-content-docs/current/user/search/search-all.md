---
source-hash: a37206b0786e0c2a77928c36df15a5b99385e8522ae259e744dfd7222696eb76
sidebar_position: 1
title:  Пошук
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Огляд {#overview}

**Пошук** — це корисний інструмент для швидкого пошуку місць. Ви можете використовувати Пошук, щоб знайти місце за адресою, координатами, об'єктами інтересу (POI) або попередніми пошуками. Пошук [Адреси](#search-address) дозволяє ввести адресу, щоб отримати точне місцезнаходження. Пошук за [Координатами](#search-coordinates) працює з географічними координатами, такими як широта та довгота. За допомогою пошуку [POI](#search-poi) ви можете шукати найближчі місця в певних категоріях, таких як кафе, готелі або заправки. [Історія](#search-history) пошуку зберігає минулі пошуки для швидкого доступу до раніше знайдених місць. Функція пошуку дозволяє легко планувати поїздки, орієнтуватися на незнайомій місцевості та знаходити POI поблизу.

## Як користуватися {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук POI список Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI список iOS](@site/static/img/search/poi_list_1_ios.png)

</TabItem>

</Tabs>

Щоб розпочати пошук, потрібно виконати один із кроків:

- Натисніть кнопку [Пошук](../widgets/map-buttons.md#search) на екрані програми карти та введіть свій запит.

- Перейдіть до головного *Меню → Пошук → введіть свій пошуковий запит*.

- Під час підготовки до початку маршруту натисніть [*Навігація → Встановити пункт призначення → Поле пошуку*](../navigation/setup/route-navigation.md#set-target-point) *→ пошуковий запит*.

Важлива інформація:

- ***Для пошуку за допомогою OsmAnd потрібні завантажені офлайн-векторні карти***.

- Спочатку **пошук базується на даних, розташованих на карті у видимій області екрана пристрою**, але якщо там нічого не знайдено, OsmAnd пропонує збільшити радіус пошуку.

### Основні запити {#basic-queries}

***Список запитів***:

- Координати всіх доступних форматів.
- Адреса:
    - Вулиця, номер будинку;
    - Місто, вулиця;
    - Перехрестя вулиць;
    - Місто;
    - Дані TIGER;
    - Поштовий індекс, номер будинку;
    - Поштовий індекс, вулиця, номер будинку.
- Пошук POI за назвою та категорією з додатковими фільтрами.
- Пошук маршрутів OSM за назвою та категорією з додатковими фільтрами.
- Пошук за найвидатнішими вершинами та вулканами.
- Пошук за Обраним та Точками.
- Пошук іконок за назвами підкатегорій POI.
- Пошук за треками.
- Пошук за комерційними закладами та назвами брендів.
- Онлайн-пошук (Nominatim).
- Пошук URL (Google та OsmAnd).
- Історія пошуку.

<!--
***Підтримувані формати*:**

***Теги*** можуть використовуватися як пошуковий запит. Вони складаються з ***ключа та значення***, наприклад:
*addr:street=StreetName*.
Щоб уникнути плутанини, іноді ключ або значення беруться в лапки: **key="value" або "key"="value"**. Лапки та знак рівності не є частиною вмісту тегу.
-->

### Сортування результатів пошуку {#sorting-search-results}

OsmAnd автоматично сортує результати пошуку за трьома основними критеріями:

1. **Відповідність запитам** — Результати, що містять точні або часткові збіги зі словами, які ви ввели, відображаються вище.

2. **Тип об'єкта** - При сортуванні за назвою міста та вулиці мають пріоритет над POI при відображенні результатів.

3. **Відстань** - Коли результати мають схожі критерії відповідності та типи об'єктів, першими відображаються результати, найближчі до поточного місцезнаходження користувача.

***Наприклад***, пошуковий запит *поштове відділення* спочатку покаже найближчі поштові відділення, навіть якщо є інші об'єкти зі схожими назвами на більшій відстані.

***Поточні обмеження:***

- Немає ручного налаштування для зміни порядку сортування результатів пошуку.
- Процес сортування **автоматично керується** OsmAnd, на основі перелічених вище критеріїв.
- У випадках, коли результати пошуку занадто широкі, OsmAnd може **обмежити відображувані результати** до тих, що мають найвищу точність збігу слів.

### Повнотекстовий пошук {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук обраного Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук обраного iOS](@site/static/img/search/favorite_search_ios.png)

</TabItem>

</Tabs>

Ви можете знайти потрібне місце на карті зі списку точок, які з'являються під час введення запиту.

1. Почніть вводити назву або адресу в рядок пошуку.

2. Під час введення список відображає точки, найближчі до запиту, приблизно в такому порядку:
    - Категорії POI
    - Обрані, POI, Маршрути та Точки
    - Треки
    - Адреси
    - Карти для завантаження

3. Якщо ви введете [назву бренду](../search/search-poi.md#how-to-use), список почнеться з результатів за цією назвою, відсортованих за найближчою відстанню.

:::note Обмеження даних TIGER у пошуку адрес
OsmAnd інтегрував [**дані TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) у карти США, щоб надавати інформацію про адреси США. Набір даних TIGER є **діапазонним** і не містить точних номерів будинків, тому деякі адреси можуть бути відсутніми або неточними.
:::

### Пошук на карті {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd дозволяє шукати точки, відображені на карті на екрані вашого пристрою. Для цього:

- Використайте [один із способів](#how-to-use), щоб перейти до інструменту Пошук.
- Почніть вводити назву або адресу в поле пошуку.
- Під полем введення пошуку з'явиться вікно з кнопкою *Показати на карті*.
- Натисніть цю кнопку, щоб перейти до карти.
- Ви можете продовжувати вводити свій запит у верхній частині екрана.

### Пошук поблизу {#search-nearby}

![Пошук Android](@site/static/img/search/search_all_near_location_andr.png)

Ви можете використовувати пошук у околицях певного місця. Для цього виберіть потрібну точку [зі списку в меню пошуку](#full-text-search) або виберіть її безпосередньо на карті. У [контекстному меню карти](../map/map-context-menu.md#actions) виберіть *Дії → Шукати поблизу*.

## Пошук адреси {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук адреси Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук вулиці iOS](@site/static/img/search/street_search_ios.png)

</TabItem>

</Tabs>

**Пошук адреси** використовує дані OpenStreetMap. Цей тип пошуку дозволяє знайти місцезнаходження та напрямок до певної адреси з готового відсортованого списку. Докладніше читайте у статті [Пошук адреси](./search-address.md).

## Історія пошуку {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Історія пошуку](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Історія пошуку](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати **Історію пошуку**, щоб знову шукати раніше знайдені місця, адреси або часто відвідувані місця, не вводячи запит знову. Докладніше можна знайти у статті [Історія пошуку](./search-history.md).

## Пошук POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук категорій POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук категорій POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Пошук POI** — це список, відсортований за категоріями, за допомогою якого ви можете легко знаходити місця та послуги поблизу вашого поточного місцезнаходження або вибраної області на карті.

- [Користувацький пошук POI](./search-poi.md#custom-poi-search) дозволяє комбінувати різні категорії POI для спрощення та персоналізації пошуку.
Наприклад, якщо вам потрібно знайти кілька типів послуг у певній області або на певній ділянці маршруту.

- OsmAnd надає [Онлайн-пошук](./search-poi.md#online-search), який працює в режимі реального часу, надаючи вам швидкий доступ до результатів пошуку.
Його зручно використовувати, коли карти регіону недоступні, але потрібне постійне та стабільне підключення до Інтернету.

- Докладніше читайте у статті [Пошук POI](./search-poi.md).

## Пошук координат {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук координат Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук координат iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Пошук координат забезпечує точне місцезнаходження. Ви можете ввести точні координати, отримані, наприклад, з інших джерел, таких як карта, GPS-пристрій або онлайн-сервіси, що особливо корисно, коли йдеться про місця, які не мають точної адреси. Докладніше дивіться у статті [Пошук координат](./search-coordinates.md).

## Пов'язані статті {#related-articles}

- [Пошук адреси](./search-address.md)
- [Історія пошуку](./search-history.md)
- [Пошук POI](./search-poi.md)
- [Пошук координат](./search-coordinates.md)

> *Останнє оновлення: квітень 2025*