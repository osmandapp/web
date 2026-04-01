---
source-hash: cc7b11b19f0261ab3f9cc12de149c6d268cdaa50b3a828cc60f5dd3ebe0ce868
sidebar_position: 2
title:  Пошук адреси
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Огляд {#overview}

*Пошук за адресою в OsmAnd* базується на даних OpenStreetMap і дозволяє знаходити місцезнаходження та напрямки до певної адреси з готового відсортованого списку, а також шукати за поштовим індексом або координатами. Цей інструмент дозволяє знайти потрібні адреси в кілька дотиків, що скорочує час пошуку і допомагає в разі, якщо ви не пам'ятаєте точну адресу.

Пошук за адресою працює в автономному режимі за допомогою завантажених мап. Переконайтеся, що мапа регіону, в якому ви шукаєте, встановлена. Результати залежать від адресних даних, доступних в OpenStreetMap.

OsmAnd надає кілька способів доступу до інструменту *Пошук*, де знаходиться розділ **Пошук адреси**.

- [Кнопка Пошук](../widgets/map-buttons.md#search) завжди відображається на мапі, і натискання на неї переведе вас на [загальний екран](#full-text-search) інструменту, де ви можете знайти вкладку *Адреса*.
- Перейдіть до головного *Меню Android → Пошук → вкладка Адреса*.
- Під час підготовки до початку маршруту торкніться *Навігація → Встановити пункт призначення → Поле пошуку*.  


## Повнотекстовий пошук {#full-text-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук Android](@site/static/img/search/search_address_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук iOS](@site/static/img/search/street_search_ios.png)  

</TabItem>

</Tabs>

<!--
Search by Address simplifies the search and navigation process, ensures accuracy and usability, and reduces the time it takes to find the right address.  

- **To use the Search Address function,** you have to [download a map](../start-with/download-maps.md) of the required area first.
- **The search is based on the data located in the visible area of the map** on the device screen. If you do not find anything, OsmAnd offers to increase the search radius.
- The address information in OsmAnd contains all [OSM tag keys](https://wiki.openstreetmap.org/w/index.php?title=Key:addr).


Search query list:

**1.** The **order** of items in the list:

- **Ordered by name**. Selecting *First specify city/town/locality* (Android) or *Select city* (iOS) will display a list that starts with unnamed items, if any, then numeric names followed by the names by letters.
- **Ascending numerical order**. In the next search list, the house numbers are displayed in ascending order, after entering the city and street.

**2.** Each field in the Address Search list contains **information** such as:

- An icon that identifies the type of locality.
- Part of an address, postal number, or coordinate area.
- Distance from your current location or from the city center.
- Additional information, such as the city's district.
-->
OsmAnd підтримує повнотекстовий пошук адрес. Це означає, що ви можете вводити адресу безпосередньо в поле пошуку, замість того щоб вибирати місто → вулицю → номер будинку крок за кроком. Движок пошуку намагається розпізнати компоненти адреси, такі як:
- місто;
- вулиця;
- номер будинку;
- поштовий індекс;
- назва місця.

Вам не потрібно вводити їх у суворому порядку. **Приклади запитів**:

`221B Baker Street London`  
`Baker Street 221B`  
`London Baker Street 221B`  
`101 Main Street`  
`Main Street 101`

Якщо повна адреса не знайдена, OsmAnd автоматично намагається спрощені запити (наприклад, видаляючи зайві слова), щоб покращити шанси на знаходження місцезнаходження.

**ПРИМІТКА:** Пошук адрес працює лише в межах завантажених мап. Результати пошуку базуються на:
- мапах, встановлених на вашому пристрої;
- видимій області мапи;
- вашому поточному місцезнаходженні. 

Якщо нічого не знайдено, OsmAnd може запропонувати збільшити радіус пошуку.

### Пошук адрес у США та дані TIGER {#us-address-search-and-tiger-data}

OsmAnd підтримує пошук адрес за допомогою даних OpenStreetMap, але в Сполучених Штатах результати пошуку адрес можуть бути неповними через використання [даних TIGER](https://wiki.openstreetmap.org/wiki/TIGER).  

- **Дані TIGER надають діапазони адрес, а не точне місцезнаходження**, це означає, що деякі номери будинків можуть не розпізнаватися.
- **Якщо адресу не знайдено**, спробуйте шукати *за назвою вулиці* замість конкретного номера будинку.
- Використовуйте *альтернативні ідентифікатори місцезнаходження*, такі як найближчі орієнтири або ZIP-коди, щоб уточнити результати пошуку.  

### Підтримувані формати {#supported-formats}

OsmAnd підтримує кілька поширених форматів адрес. Ви можете вводити адреси в різних порядках залежно від того, як ви знаєте адресу.

| Формат адреси | Приклади запитів |
|---|---|
| Номер будинку + вулиця | 221B Baker Street<br />10 Downing Street |
| Вулиця + номер будинку | Baker Street 221B<br />Main Street 101 |
| Місто + вулиця + номер будинку | London Baker Street 221B<br />Paris Rue de Rivoli 10 |
| Перехрестя вулиць | Broadway & Wall Street<br />Main Street and High Street |
| Назва міста | Berlin<br />Vienna<br />San Francisco |
| Поштовий індекс + адреса | 10001 New York<br />75001 Paris Rue de Rivoli 10 |

### Поради щодо пошуку {#search-tips}

Пошук адрес в OsmAnd толерантний до різних форматів введення. Ви можете спробувати:
- змінити порядок слів;
- видалити зайву інформацію;
- шукати лише за назвою вулиці.

Движок пошуку також толерантний до поширених варіацій у форматуванні адрес, таких як різний порядок слів, відмінності в написанні, абревіатури або формати номерів будинків. Таблиця нижче показує типові варіації пошуку, які можуть все ще повертати ту саму адресу.

| Варіація пошуку | Приклади запитів | Пов'язане обговорення |
|---|---|---|
| Варіації назв вулиць | [Weberstraße](https://osmand.net/map?pin=51.853672,12.042003#13/51.8545/12.0386) <br /> Weberstrasse <br /> Weber-straße <br /> Weber-strasse | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/23709) |
| Ігнорування пробілів у назвах | [Goethe Straße](https://osmand.net/map?pin=51.85358,12.064447#13/51.8545/12.0386) <br /> Goethestraße | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/13783) |
| Номери будинків з суфіксами літер | [30B Dragonder, Valkenswaard](https://osmand.net/map?pin=51.339645,5.4682517#19/51.3398/5.4681) <br /> 30b Dragonder, Valkenswaard <br /> 30-B Dragonder, Valkenswaard <br /> 30-b Dragonder, Valkenswaard | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/23320) |
| Абревіатури вулиць | [Straelener Straße](https://osmand.net/map?pin=51.443604,6.343231#19/51.4436/6.3432) <br /> Straelener Str. | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/4923) |
| Повна адреса проти спрощеної адреси | [221B Baker Street London United Kingdom](https://osmand.net/map/poi/?name=221B+Baker+Street&type=Tourist+attraction&pin=51.52339,-0.1582396) <br /> 221B Baker Street <br /> Baker Street 221B | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/19004) |
| Формат адреси США | [1500 North Main Avenue, Springfield](https://osmand.net/map?pin=37.226315,-93.296524#11/37.1799/-93.3522) <br /> [4600 Sugar Maple Lane, Nashville](https://osmand.net/map?pin=36.051846,-86.95705#18/36.0516/-86.9561) | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/6824) |
| Абревіатури штатів США | [Springfield, VA 22150](https://osmand.net/map?pin=36.51995,-86.86385#18/36.5199/-86.8635) <br /> [Manhattan Beach, CA 90266](https://osmand.net/map?pin=33.883938,-118.41048#20/33.8839/-118.4105) | [Обговорення](https://github.com/osmandapp/OsmAnd/issues/6824) |

<!--
**Examples**: Instead of `221B Baker Street London United Kingdom` try `221B Baker Street` or `Baker Street 221B`.

OsmAnd may also ignore additional information such as country or region if the address can already be identified.

Postal addresses copied from websites may include additional information such as company names, ZIP codes, or apartment numbers. If search does not return results, try entering only the street name, house number, and city.

Search is also tolerant to minor differences in spelling, such as spaces, hyphens, or common abbreviations in street names. **For example**:

`Weberstrasse`  
`Weber strasse`  
`Weber-strasse`

House numbers with letter suffixes can also be written in different formats:

`30B`  
`30b`  
`30-B`  
`30-b`

These variations may still return the same address.
-->


## Вибір міста {#select-city}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук вулиці Android](@site/static/img/search/town_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук вулиці iOS](@site/static/img/search/town_search_ios.png)

</TabItem>

</Tabs>

**Найближчі міста**  
    Це **відображає невеликий список міст навколо вашого місцезнаходження** або населеного пункту, який ви вказали для *Вибору вулиці* або *Вибору міста*. Кожне поле містить іконку, що відповідає розміру міста, назву міста, відстань від вас до його центру, а для Android — напрямок за компасом.

Такий спосіб пошуку полегшує пошук конкретних місць у межах вибраного населеного пункту, забезпечуючи зручний спосіб точного та швидкого пошуку адрес. Ви можете почати пошук потрібної адреси, визначивши населений пункт.

- Для цього торкніться **Спочатку вкажіть місто/населений пункт** (Android) або **Вибрати місто** (iOS).
- У списку, що відкриється, виберіть потрібний населений пункт. [Тут](#full-text-search) описано порядок відображення пошукових запитів та інформацію, доступну для кожного елемента.
- На наступному екрані ви можете продовжити уточнення адреси або натиснути кнопку *Показати на мапі* під полем введення пошукового запиту.
- Щоб уточнити пошук, ви можете ввести повну або лише частину назви міста, містечка чи села, де знаходиться потрібна вам адреса. Це дозволить звузити пошук і отримати більш точний список.
- Натискання на останній елемент в адресі, номер будинку або назву перехрестя відкриває [контекстне меню мапи](../map/map-context-menu.md#select-an-object-single-tap) об'єкта.  

<!--
**Searching by city offers the following benefits:**

- *Convenience*. Allows you to quickly select the required city from the list, and specify a certain street, house or intersection in the selected city without having to enter the full address. This saves time and simplifies the process of finding the right place.
- *Precision.* You can select a city and street from the available options, avoiding errors when manually entering an address.
- *Filtering.* The ability to select a specific house from the list makes it easier to accurately navigate to the required location, especially when the exact address is unknown.
--> 

:::note Ключ і значення
*Пошук міста / містечка / села* за [**addr:city/hamlet/town/village/suburb=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Результат*: відображення всіх об'єктів з цією назвою.
:::


## Вибір вулиці {#select-street}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук вулиці Android](@site/static/img/search/street_search.png) ![Пошук вулиці Android](@site/static/img/search/street_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук вулиці iOS](@site/static/img/search/address_street_search_3_ios.png) ![Пошук вулиці Android](@site/static/img/search/address_street_search_4_ios.png)

</TabItem>

</Tabs>

Пошук вулиці виконується в населеному пункті, де ви перебуваєте, або де ви шукали раніше, або який знаходиться в центрі видимої мапи на екрані програми.

- Щоб скористатися цим типом пошуку, торкніться **Пошук вулиці** (*Android*) або **Вибрати вулицю** (*iOS*).
- У полі пошуку поруч із назвою міста ви можете почати вводити назву вулиці, і список буде уточнюватися, надаючи вам найбільш відповідні результати.
- В інших пунктах пошук вулиці такий самий, як і в [Вибір міста](#select-city).

:::note Ключ і значення
*Пошук вулиць* за [**addr:street=**](https://wiki.openstreetmap.org/w/index.php?title=Key:addr)  
*Результат*: відображаються всі вулиці з цією назвою.
:::


## Пошук за поштовим індексом {#postcode-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук за поштовим індексом Android](@site/static/img/search/postcode_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук за поштовим індексом iOS](@site/static/img/search/postcode_ios.png)

</TabItem>

</Tabs>

**Щоб скористатися *пошуком за поштовим індексом*, потрібно просто ввести номер**, який може складатися навіть з однієї цифри, і програма запропонує список доступних відповідних поштових індексів.

- Виберіть потрібний код і торкніться його.
- Ви можете скористатися функцією *Показати *номер поштового індексу* на мапі*. Це відкриє [контекстне меню мапи](../map/map-context-menu.md#select-an-object-single-tap) з вибраним поштовим індексом без будь-якої додаткової інформації про місцезнаходження.
- Ви можете уточнити пошук за цим кодом, спочатку вибравши потрібну вулицю зі списку, а потім номер.

**Пошук за поштовим індексом може бути корисним у наступних випадках:**

- Назва вулиці існує в кількох містах.
- Ви знаєте поштовий індекс, але не точну адресу.

:::note
Для отримання додаткової інформації читайте **[дані поштових індексів Сполученого Королівства](https://github.com/hvdwolf/OsmAnd-UKpostcodes/releases)**.
:::


## Пошук за координатами {#coordinates-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Пошук координат Android](@site/static/img/search/coordinates_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук координат iOS](@site/static/img/search/coordinates_search_ios.png)

</TabItem>

</Tabs>

[**Пошук за координатами**](../search/search-coordinates.md) дозволяє вказати географічні координати, такі як широта та довгота, для пошуку конкретного місцезнаходження. Він надає точні місцезнаходження на карті в різних [форматах координат](../search/search-coordinates.md#coordinate-format) та дозволяє отримати пов'язану інформацію. Ця функція може бути корисною, коли у вас немає адреси або точної назви місцезнаходження, і може полегшити планування подорожей та навігацію в невідомих місцях.  


## Пов'язані статті {#related-articles}

- [Пошук усього](./search-all.md)
- [Історія пошуку](./search-history.md)
- [Пошук POI](./search-poi.md)
- [Пошук за координатами](./search-coordinates.md)