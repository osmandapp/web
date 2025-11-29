---
source-hash: f302135b5464569dccff1ff6830993eddf7ac34c3c389eaa1f26348d90713c54
sidebar_position: 1
title:  Пошук усього
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

**Пошук** — це корисний інструмент для швидкого знаходження місць. Ви можете використовувати Пошук, щоб знайти місце за адресою, координатами, точками інтересу (POI) або попередніми пошуковими запитами. Пошук за [Адресою](#search-address) дозволяє ввести адресу, щоб отримати точне місцезнаходження. Пошук за [Координатами](#search-coordinates) працює з географічними координатами, такими як широта та довгота. За допомогою пошуку [POI](#search-poi) ви можете шукати найближчі місця у певних категоріях, таких як кафе, готелі або заправні станції. Пошук в [Історії](#search-history) зберігає минулі пошукові запити для швидкого доступу до раніше знайдених місць. Функція пошуку полегшує планування поїздок, навігацію по невідомій місцевості та пошук POI поблизу.


## Як користуватися {#how-to-use}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Список POI у пошуку Android](@site/static/img/search/poi_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Список POI у пошуку iOS](@site/static/img/search/poi_list_1_ios.png)  

</TabItem>

</Tabs>

Щоб розпочати пошук, виконайте один із наведених нижче кроків:

- Торкніться [кнопки Пошук](../widgets/map-buttons.md#search) на екрані мапи та введіть свій запит.

- Перейдіть до головного *Меню → Пошук → введіть свій пошуковий запит*.

- Готуючись до початку маршруту, торкніться [*Навігація → Встановити пункт призначення → Поле пошуку*](../navigation/setup/route-navigation.md#set-target-point) *→ пошуковий запит*.  


Важлива інформація:

- ***Для пошуку в OsmAnd потрібні завантажені офлайн-векторні мапи***.

- Спочатку **пошук здійснюється на основі даних, розташованих на мапі у видимій області екрана пристрою**, але якщо там нічого не знайдено, OsmAnd пропонує збільшити радіус пошуку.  

### Основні запити {#basic-queries}

***Список запитів*:**

- Координати у всіх доступних форматах.
- Адреса:
    - Вулиця, номер будинку;
    - Місто, вулиця;
    - Перехрестя вулиць;
    - Місто;
    - Дані Tiger;
    - Поштовий індекс, номер будинку;
    - Поштовий індекс, вулиця, номер будинку.
- Пошук POI за назвою та категорією з додатковими фільтрами.
- Пошук маршрутів OSM за назвою та категорією з додатковими фільтрами.
- Пошук за найвидатнішими вершинами та вулканами.
- Пошук за Обраними та Шляховими точками.
- Пошук іконок за назвами підкатегорій POI.
- Пошук за треками.
- Пошук за комерційними об'єктами та назвами брендів.
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

1. **Відповідність запитам** — результати, що містять точні або часткові збіги з введеними вами словами, відображаються вище.

2. **Тип об'єкта** — при сортуванні за назвою міста та вулиці мають пріоритет над POI при відображенні результатів.

3. **Відстань** — якщо результати мають схожі критерії відповідності та типи об'єктів, першими відображаються результати, найближчі до поточного місцезнаходження користувача.

***Наприклад***, пошуковий запит *post office* спочатку покаже найближчі поштові відділення, навіть якщо є інші об'єкти зі схожими назвами на більшій відстані.  

***Поточні обмеження:***

- Немає ручного налаштування для зміни порядку сортування результатів пошуку.
- Процес сортування **автоматично керується** OsmAnd на основі перерахованих вище критеріїв.
- У випадках, коли результати пошуку занадто широкі, OsmAnd може **обмежити відображувані результати** тими, що мають найвищу точність збігу слів.


### Повнотекстовий пошук {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук в Обраному Android](@site/static/img/search/favorite_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук в Обраному iOS](@site/static/img/search/favorite_search_ios.png)  

</TabItem>

</Tabs>

Ви можете знайти потрібне місце на мапі зі списку точок, які з'являються під час введення запиту.

1. Почніть вводити назву або адресу в рядку пошуку.

2. Під час введення тексту у списку відображаються точки, найближчі до запиту, приблизно в такому порядку:
    - Категорії POI
    - Обране, POI, Маршрути та Шляхові точки
    - Треки
    - Адреси
    - Мапи для завантаження

3. Якщо ви введете [назву бренду](../search/search-poi.md#how-to-use), список почнеться з результатів за цією назвою, відсортованих за найближчою відстанню.

:::note Обмеження даних TIGER при пошуку адрес
OsmAnd інтегрував [**дані TIGER**](../../technical/algorithms/trace-address-search-issues.md#us-address-search-and-tiger-data) в мапи США для надання інформації про адреси в США. Набір даних TIGER **базується на діапазонах** і не містить точних номерів будинків, тому деякі адреси можуть бути відсутніми або неточними.
:::


### Пошук на мапі {#search-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Пошук POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

OsmAnd дозволяє шукати точки, що відображаються на мапі на екрані вашого пристрою. Для цього:

- Скористайтеся [одним зі способів](#how-to-use), щоб перейти до інструмента Пошук.
- Почніть вводити назву або адресу в поле пошуку.
- Під полем введення пошукового запиту з'явиться поле з кнопкою *Показати на мапі*.
- Натисніть цю кнопку, щоб перейти до мапи.
- Ви можете продовжити вводити свій запит у верхній частині екрана.


### Пошук поруч {#search-nearby}

![Пошук Android](@site/static/img/search/search_all_near_location_andr.png)

Ви можете використовувати пошук поблизу певного місця. Для цього виберіть потрібну точку [зі списку в меню пошуку](#full-text-search) або виберіть її безпосередньо на мапі. У [контекстному меню мапи](../map/map-context-menu.md#actions) виберіть *Дії → Шукати поруч*.


## Пошук адреси {#search-address}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

**Пошук адреси** використовує дані OpenStreetMap. Цей тип пошуку дозволяє знайти місцезнаходження та напрямок до конкретної адреси з готового відсортованого списку. Детальніше читайте у статті [Пошук адреси](./search-address.md).


## Історія пошуку {#search-history}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Історія пошуку](@site/static/img/search/history_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Історія пошуку](@site/static/img/search/history_search_ios.png)

</TabItem>

</Tabs>

Ви можете використовувати **Історію пошуку**, щоб повторно шукати раніше знайдені місця, адреси або часто відвідувані місця, не вводячи запит знову. Більш детальну інформацію можна знайти у статті [Історія пошуку](./search-history.md).


## Пошук POI {#search-poi}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

**Пошук POI** — це список, відсортований за категоріями, за допомогою якого можна легко знайти місця та послуги поблизу вашого поточного місцезнаходження або у вибраній області на мапі.

- [Користувацький пошук POI](./search-poi.md#customize-poi-search) дозволяє комбінувати різні категорії POI для спрощення та персоналізації пошуку.  
Наприклад, якщо вам потрібно знайти кілька типів послуг у певній місцевості або на певній ділянці маршруту.

- OsmAnd надає [Онлайн-пошук](./search-poi.md#online-search), який працює в режимі реального часу, надаючи вам швидкий доступ до результатів пошуку.  
Його зручно використовувати, коли мапи регіону недоступні, але потрібне постійне та стабільне підключення до Інтернету.

- Для отримання додаткової інформації прочитайте статтю [Пошук POI](./search-poi.md).


## Пошук за координатами {#search-coordinates}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук за координатами Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук за координатами iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

Пошук за координатами забезпечує точне визначення місцезнаходження. Ви можете ввести точні координати, отримані, наприклад, з інших джерел, таких як мапа, GPS-пристрій або онлайн-сервіси, що особливо корисно, коли йдеться про місця, які не мають точної адреси. Для отримання додаткової інформації дивіться статтю [Пошук за координатами](./search-coordinates.md).


## Пов'язані статті {#related-articles}

- [Пошук адреси](./search-address.md)
- [Історія пошуку](./search-history.md)
- [Пошук POI](./search-poi.md)
- [Пошук за координатами](./search-coordinates.md)