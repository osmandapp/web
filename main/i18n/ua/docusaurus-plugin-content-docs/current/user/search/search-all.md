---
source-hash: 6ba76946147c1491bba77d16f2fafd3e08513708a041924bd0e66ea61c50ee9c
sidebar_position: 1
title:  Пошук
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
<InfoIncompleteArticle/>
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';

import LinksTelegram from '@site/src/components/_linksTelegram.mdx';

import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
## Огляд {#overview}
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

**Пошук** — це корисний інструмент для швидкого пошуку місць. Ви можете використовувати Пошук, щоб знайти місце за адресою, координатами, об'єктами інтересу (POI) або попередніми пошуками. [Пошук за адресою](#search-address) дозволяє ввести адресу, щоб отримати точне місцезнаходження. Пошук за [координатами](#search-coordinates) працює з географічними координатами, такими як широта та довгота. За допомогою пошуку [POI](#search-poi) ви можете шукати найближчі місця в певних категоріях, таких як кафе, готелі або заправки. [Історія пошуку](#search-history) зберігає минулі пошуки для швидкого доступу до раніше знайдених місць. Функція пошуку полегшує планування поїздок, навігацію по незнайомій місцевості та пошук найближчих POI.


## Як використовувати {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI list Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI list iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Щоб розпочати пошук, потрібно виконати один із кроків:

- Натисніть кнопку [Пошук](../widgets/map-buttons.md#search) на екрані програми карти та введіть свій запит.

- Перейдіть до головного *Меню → Пошук → введіть пошуковий запит*.

- Під час підготовки до початку маршруту натисніть [*Навігація → Встановити пункт призначення → Поле пошуку*](../navigation/setup/route-navigation.md#set-target-point) *→ пошуковий запит*.  


Важлива інформація:

- ***Для пошуку за допомогою OsmAnd потрібні завантажені офлайн векторні карти***.

- Спочатку **пошук базується на даних, розташованих на карті у видимій області екрана пристрою**, але якщо там нічого не знайдено, OsmAnd пропонує збільшити радіус пошуку.  

### Основні запити {#basic-queries}

***Список запитів*:**

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
- Пошук за Обраними та Точками маршруту.
- Пошук іконок за назвами підкатегорій POI.
- Пошук за треками.
- Пошук за бізнес-об'єктами та назвами брендів.
- Онлайн-пошук (Nominatim).
- Пошук за URL (Google та OsmAnd).
- Історія пошуку.

<!--
***Supported formats*:**  

***Tags*** can be used as a search query. They consist of ***a key and a value***, for example:
*addr:street=StreetName*.  
To avoid confusion, sometimes the key or value is surrounded by quotation marks: **key="value" or "key"="value"**. The quotation marks and equal sign are not part of the tag content.
-->

### Сортування результатів пошуку {#sorting-search-results}

OsmAnd автоматично сортує результати пошуку за трьома основними критеріями:

1. **Відповідність запитам** — Результати, що містять точні або часткові збіги зі словами, які ви ввели, відображаються вище.

2. **Тип об'єкта** - При сортуванні за назвою міста та вулиці мають пріоритет над POI при відображенні результатів.

3. **Відстань** - Коли результати мають схожі критерії відповідності та типи об'єктів, першими відображаються результати, найближчі до поточного місцезнаходження користувача.

***Наприклад***, пошуковий запит *поштове відділення* спочатку покаже найближчі поштові відділення, навіть якщо є інші об'єкти з подібними назвами на більшій відстані.  

***Поточні обмеження:***

- Немає ручного налаштування для зміни порядку сортування результатів пошуку.
- Процес сортування **автоматично керується** OsmAnd на основі перерахованих вище критеріїв.
- У випадках, коли результати пошуку занадто широкі, OsmAnd може **обмежити відображені результати** тими, що мають найвищу точність відповідності слів.


### Повнотекстовий пошук {#full-text-search}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorite search Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorite search iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Ви можете знайти потрібне місце на карті зі списку точок, що з'являються під час введення запиту.

1. Почніть вводити назву або адресу в рядок пошуку.

2. Під час введення список відображає точки, найближчі до запиту, приблизно в такому порядку:
    - Категорії POI
    - Обрані, POI, Маршрути та Точки маршруту
    - Треки
    - Адреси
    - Карти для завантаження

3. Якщо ви введете [назву бренду](../search/search-poi.md#how-to-use), список почнеться з результатів за цією назвою, відсортованих за найближчою відстанню.

:::note Обмеження даних TIGER у пошуку адрес
OsmAnd інтегрував [**дані TIGER**](../../technical/algorithms/trace-address-search-issues.md#trace-address-search-issues#us-address-search-and-tiger-data) у карти США, щоб надати інформацію про адреси США. Набір даних TIGER **базується на діапазонах** і не містить точних номерів будинків, тому деякі адреси можуть бути відсутніми або неточними.
:::


### Пошук на карті {#search-on-the-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd дозволяє шукати точки, що відображаються на карті на екрані вашого пристрою. Для цього:

- Використовуйте [один із способів](#how-to-use), щоб перейти до інструменту Пошук.
- Почніть вводити назву або адресу в поле пошуку.
- Під полем введення пошуку з'явиться вікно з кнопкою *Показати на карті*.
- Натисніть цю кнопку, щоб перейти на карту.
- Ви можете продовжити вводити свій запит у верхній частині екрана.


### Пошук поблизу {#search-nearby}

![Search Android](@site/static/img/search/search_all_near_location_andr.png)

Ви можете використовувати пошук поблизу певного місця. Для цього виберіть потрібну точку [зі списку в меню пошуку](#full-text-search) або виберіть її безпосередньо на карті. У [контекстному меню карти](../map/map-context-menu.md#actions) виберіть *Дії → Пошук поблизу*.


## Пошук за адресою {#search-address}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Пошук за адресою** використовує дані OpenStreetMap. Цей тип пошуку дозволяє знайти місцезнаходження та напрямок до певної адреси з готового відсортованого списку. Детальніше читайте у статті [Пошук за адресою](./search-address.md).


## Історія пошуку {#search-history}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![History search](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![History search](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати **Історію пошуку**, щоб знову шукати раніше знайдені місця, адреси або часто відвідувані місця, не вводячи запит знову. Детальніше можна знайти у статті [Історія пошуку](./search-history.md).


## Пошук POI {#search-poi}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Пошук POI** — це список, відсортований за категоріями, за допомогою якого ви можете легко знайти місця та послуги поблизу вашого поточного місцезнаходження або вибраної області на карті.

- [Користувацький пошук POI](./search-poi.md#custom-poi-search) дозволяє комбінувати різні категорії POI для спрощення та персоналізації пошуку.  
Наприклад, якщо вам потрібно знайти кілька типів послуг у певній області або на певній ділянці маршруту.

- OsmAnd надає [Онлайн-пошук](./search-poi.md#online-search), який працює в режимі реального часу, надаючи вам швидкий доступ до результатів пошуку.  
Його зручно використовувати, коли карти регіону недоступні, але потрібне постійне та стабільне підключення до Інтернету.

- Докладніше читайте у статті [Пошук POI](./search-poi.md).


## Пошук за координатами {#search-coordinates}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search Coordinates Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search Coordinates iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Пошук за координатами надає точне місцезнаходження. Ви можете ввести точні координати, отримані, наприклад, з інших джерел, таких як карта, GPS-пристрій або онлайн-сервіси, що особливо корисно, коли йдеться про місця, які не мають точної адреси. Докладніше дивіться у статті [Пошук за координатами](./search-coordinates.md).


## Пов'язані статті {#related-articles}

- [Пошук за адресою](./search-address.md)
- [Історія пошуку](./search-history.md)
- [Пошук POI](./search-poi.md)
- [Пошук за координатами](./search-coordinates.md)

> *Цю статтю востаннє оновлено у квітні 2025 року*