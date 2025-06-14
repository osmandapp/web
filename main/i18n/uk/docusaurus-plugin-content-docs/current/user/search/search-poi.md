---
source-hash: b8ecea2035993ff0e016d749492d1333c847eecc1d0377fec540b313e0961c99
sidebar_position: 4
title:  Пошук POI
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


<InfoIncompleteArticle/>


## Огляд {#overview}

Функціональність [Точок інтересу OsmAnd](https://wiki.openstreetmap.org/wiki/Points_of_interest) (POI) в OsmAnd забезпечує точність, видимість та зручність у пошуку цікавих місць, маршрутів та послуг поблизу вашого поточного місцезнаходження або вибраної області на карті.

Рядок пошуку дозволяє вводити ключові слова, пов'язані з місцями, які вас цікавлять. Пошук POI також надає зручний список, відсортований за [категоріями](#poi-search-by-categories), щоб допомогти вам швидко знайти те, що ви шукаєте, а [фільтр](#save-new-custom-filters) дозволяє вибрати конкретні характеристики POI для відображення лише відповідних результатів.

[Користувацький пошук](#custom-poi-search) розширює функціональність пошуку, дозволяючи вибирати кілька категорій та підкатегорій. Ви можете зберігати створені фільтри для подальшого використання, що полегшує швидке знаходження POI, які відповідають певним критеріям або уподобанням. Для отримання додаткової інформації дивіться розділ про збереження користувацьких фільтрів [тут](#save-new-custom-filters).

OsmAnd надає кілька способів перейти до інструменту Пошук, де розташований розділ **Пошук за категоріями**.

- [Кнопка пошуку](../widgets/map-buttons.md#search) завжди відображається на карті, і натискання на неї переведе вас до [загального екрана](#how-to-use) інструменту, де ви знайдете вкладку *Категорії*.
- *Android*: Перейдіть до головного *Меню → Пошук → вкладка Категорії*.
- Під час підготовки до початку маршруту натисніть [*Навігація → Встановити пункт призначення → Поле пошуку → вкладка Категорії*](../navigation/setup/route-navigation.md#set-target-point).
- *Android*: Перейдіть до головного [*Меню → Налаштувати карту → Накладення POI → Пошук*](../map/point-layers-on-map.md#points-of-interest-pois).


## Як використовувати {#how-to-use}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/poi_overlay_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/poi_overlay_ios.png)

</TabItem>

</Tabs>

*Усі типи POI в OsmAnd ви можете знайти тут:* [посилання на gitHub](https://github.com/osmandapp/OsmAnd-resources/blob/dd575efb5aa4ec7e359bb50e8dc6de7c358ff258/poi/poi_types.xml).

- **Пошук точок інтересу (POI):**
    - Дозволяє шукати:
       - найближчі або конкретні категорії точок інтересу (POI).
       - [маршрути OSM](../map/routes.md).
       - [Популярні місця (Wikipedia)](../map/map-context-menu.md#details).

    - Можливі фільтри та сортування результатів за категорією, відстанню або рейтингом.

    - Результати пошуку показують місцезнаходження POI, його контактну інформацію, рейтинги та відгуки.

- **Пошук POI за категоріями безпосередньо на карті**:
    - Вам потрібно вибрати необхідні категорії зі [**списку**](../map/point-layers-on-map.md#points-of-interest-pois) у *Налаштувати карту → Показати накладення POI...* та шукати за іконками в очікуваному місці.

    - *Android*: Ви можете почати пошук POI у *Меню → Пошук → Категорії*.

- **Пошук за брендом:**
    - При введенні назви бізнес-закладу або бренду (наприклад, Audi, Starbucks або Aldi) список результатів пошуку впорядковується з пріоритетом за назвою POI та сортується за відстанню від відповідного місцезнаходження.

    - Назва населеного пункту відображається поруч з кожним результатом пошуку, щоб допомогти вам визначити правильне місцезнаходження серед інших на подібній відстані від вас.

    - Цей тип пошуку зручно використовувати, якщо торгова точка спеціалізується на продажу товарів або послуг одного бренду, або якщо сам бренд більш відомий і впізнаваний, ніж назва або категорія POI.

    - Для виконання пошуку тег `brand` та назви брендів повинні бути додані до опису POI.

    - Приклад автомагазину: *Тип POI* - Автодилер, *назва* - Octo Automobile, [***назва бренду***](https://wiki.openstreetmap.org/wiki/Key:brand) - Audi, BMW, Fiat, Jaguar, Land Rover.

    ![Пошук POI Android](@site/static/img/search/brand_search_andr.png)


:::note
Для виконання деяких з цих завдань (знайти адреси, POI) вам знадобиться файл офлайн-векторної карти. Спочатку пошук базується на даних, розташованих на карті у видимій області екрана пристрою. Якщо ви нічого не знайдете, OsmAnd пропонує збільшити радіус пошуку.
:::


## Пошук POI за категоріями {#poi-search-by-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/search_poi_categoties_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/search_poi_categoties_1_ios.png)

</TabItem>

</Tabs>

Інструмент **Пошук за категоріями** дозволяє швидко знаходити об'єкти, місця та маршрути, класифіковані за різними категоріями. Кожна категорія має унікальний набір характеристик, і цей інструмент має фільтри, які дозволяють уточнити результати пошуку, вибираючи різні значення для додаткових характеристик.

Як це працює:

- *Вибір категорії* - Ви вибираєте категорію, яка вас цікавить, наприклад, ресторани, готелі, магазини, маршрути OSM, популярні місця Wikipedia та інші, зі запропонованого списку категорій.
- *Фільтри характеристик* - Після вибору категорії додаток показує додаткові характеристики, які можна використовувати для уточнення пошуку. Наприклад, для категорії Ресторани можна вибрати фільтри, такі як тип кухні (італійська, китайська тощо), ціновий діапазон, рейтинг та наявність парковки.
- *Застосування фільтрів* - Ви вибираєте необхідні значення у фільтрах, а потім додаток застосовує ці фільтри до результатів пошуку, щоб показати лише ті властивості, які відповідають заданим характеристикам.
- *Відображення результатів* - Після застосування фільтрів OsmAnd відображає список з короткою інформацією, що відповідає встановленій категорії та характеристикам.

Переваги:

- *Налаштування користувачем* - Фільтри функцій дозволяють налаштовувати пошук відповідно до їхніх конкретних потреб та уподобань.
- *Уточнені результати* - Фільтри допомагають уточнити результати пошуку, роблячи їх більш релевантними та точними.
- *Кілька категорій* - База даних OpenStreetMap має розширений набір категорій POI, що дозволяє знаходити об'єкти різних типів та категорій.

<!--
Пошук за категоріями POI дозволяє швидко знаходити та вибирати місця інтересу відповідно до ваших потреб. Це зручний інструмент для подорожей, пошуку найближчих послуг або місць інтересу, а також планування маршрутів на основі вибраних категорій POI.

OsmAnd починає знаходити назви та категорії POI за введеними словами. Першими результатами будуть категорії, другими результатами будуть POI з додатковою інформацією, повною назвою, назвою категорії, напрямком та відстанню до POI, часом роботи. Натискання на потрібну категорію відкриває список POI цієї категорії.

Натискання на вибраний POI у списку відкриває [Контекстне меню карти](../map/map-context-menu.md#select-an-object-single-tap) POI.
-->

### Типи фільтрів {#types-of-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/search_poi_filter_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/search_poi_filter_ios.png)

</TabItem>

</Tabs>

За допомогою функції **Фільтр** ви можете вибрати необхідні характеристики та в результаті отримати список, що містить лише відповідні об'єкти. Щоб скористатися фільтром:

- Виберіть категорію, яка вас цікавить, зі списку категорій.
- На екрані, що відкриється, натисніть на іконку, що відображає фільтр. Вона розташована під полем введення, поруч з *Показати на карті*.
- У фільтрі виберіть тип характеристик.

![Пошук POI Android](@site/static/img/search/search_poi_filter_icon_andr.png)

Фільтр може складатися з досить великої кількості елементів, наявність яких залежить від обраної категорії. Кожна категорія має ряд специфічних для неї фільтрів, організованих у папки за типом. Всього існує *22 стандартні категорії*. Деякі з них перераховані тут:

 1. **<Translate android="true" ids="poi_filter_accomodation"/>**. [Проживання](https://wiki.openstreetmap.org/wiki/Key:building#Accommodation) включає заклади, що надають тимчасове житло, такі як готелі, мотелі, хостели, гостьові будинки та кемпінги. Ці місця надають зручності та послуги для комфортного перебування під час подорожі.
        Включає *9* типів фільтрів: **Холодильник** (має *2* значення), **Опалення** (має *7* значень), **Тип доступу до Інтернету** (має *3* значення), **Матрац** (має *2* значення), **Тип оплати** (більше *10* значень), **Душ** (має *1* значення), **Куріння** (має *6* значень), **Зірковий рейтинг** (має *10* значень), **Доступність для інвалідних візків** (має *4* значення), Відкрито зараз / Відкрито 24/7.

 2. **Кафе та ресторан**. [Кафе](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcafe) та [ресторани](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Drestaurant) представляють місця громадського харчування.
        Включає *16* типів фільтрів: **Пеленальний столик** (має *3* значення), **Кава** (має *2* значення), **Кухня** (більше *10* значень), **Доставка** (має *1* значення), **Дієта** (має *8* значень), **Страва** (більше *10* значень), **Поповнення питної води** (має *1* значення), **Автомобільний проїзд** (має *1* значення), **Тип доступу до Інтернету** (має *3* значення), **Міні-пивоварня** (має *1* значення), **Органічні продукти** (має *2* значення), **Сидіння на відкритому повітрі** (має *1* значення), **Тип оплати** (більше *10* значень), **Куріння** (має *6* значень), **На винос** (має *1* значення), **Доступність для інвалідних візків** (має *4* значення), Відкрито зараз / Відкрито 24/7.

 3. **Зарядна станція**. [Зарядна станція](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcharging_station) - це інфраструктурний об'єкт, де власники електромобілів можуть заряджати свої автомобілі, мотоцикли або інші електромобілі. Ці точки надають зарядні пристрої та відповідні підключення для забезпечення енергією акумуляторів транспортних засобів.
        Включає *35* типів фільтрів: **Доступ для велосипедів** (має *1* значення), **Доступ для автобусів** (має *1* значення), **Доступ для вантажних автомобілів** (має *5* значень), **Доступ для легкових автомобілів** (має *1* значення), **Доступ для скутерів** (має *1* значення), **Авторизація за допомогою додатка** (має *1* значення), **Авторизація за допомогою чіп-карти** (має *1* значення), **Безконтактна авторизація** (має *1* значення), **Авторизація за допомогою ключа** (має *1* значення), **Авторизація за допомогою обов'язкового** (має *1* значення), **Авторизація за допомогою телефонного дзвінка** (має *1* значення), **Авторизація за допомогою короткого повідомлення** (має *1* значення), **Плата** (має *2* значення), **Тип доступу до Інтернету** (має *3* значення), **Тип доступу до Інтернету** (має *3* значення), **Доступність для інвалідних візків** (має *4* значення), Відкрито зараз / Відкрито 24/7 та інші.

 4. **Магазин зручності та супермаркет**. [Магазин зручності](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dconvenience) та [супермаркет](https://wiki.openstreetmap.org/wiki/Tag:shop%3Dsupermarket) представляють роздрібні торгові заклади.
        Включає *13* типів фільтрів: **Оптова закупівля** (має *2* значення), **Зняття готівки** (має *5* значень), **Пеленальний столик** (має *3* значення), **Кава** (має *2* значення), **Доставка** (має *1* значення), **Дієта** (має *8* значень), **Морозиво** (має *1* значення), **Органічні продукти** (має *2* значення), **Тип оплати** (більше *10* значень), **Фільтр секонд-хенду** (має *2* значення), **Самообслуговування** (має *2* значення), **Доступність для інвалідних візків** (має *4* значення), Відкрито зараз / Відкрито 24/7.

 5. **<Translate android="true" ids="poi_filter_emergency"/>**. [Екстрені служби](https://wiki.openstreetmap.org/wiki/Key:emergency) включають заклади та місця, пов'язані з екстреними службами, такі як лікарні, поліцейські відділки, пожежні станції та медичні центри першої допомоги.
        Не містить жодних фільтрів.

 6. **Заправна станція**. [Паливна станція](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dfuel), також відома як заправна станція, бензоколонка, газова станція та бензиновий гараж. Це роздрібний заклад, де можна заправити автомобілі.
        Включає *13* типів фільтрів: **Автомийка** (має *2* значення), **Зняття готівки** (має *5* значень), **Стиснене повітря** (має *1* значення), **Тип палива (авіа)** (має більше *20* значень), **Паливні картки** (має *5* значень), **Тип оплати** (має більше *20* значень), **Самообслуговування** (має *2* значення), **Доступ для снігоходів** (має *3* значення), **Кімната відпочинку** (більше *1* значення), **Пилосос** (має *1* значення), **Автоматичний паливний дозатор** (має *1* значення), **Доступність для інвалідних візків** (має *4* значення), Відкрито зараз / Відкрито 24/7.

 7. **Фінанси**. [Фінанси](https://wiki.openstreetmap.org/wiki/Tag:office%3Dfinancial) використовуються для офісів компаній у фінансовому секторі.
        Включає *5* типів фільтрів.

 8. **Їжа**. [Їжа](https://wiki.openstreetmap.org/wiki/Category:Food_and_beverages) включає всі місця, що доставляють їжу та напої.
        Включає *24* типи фільтрів.

 9. **Охорона здоров'я**. [Охорона здоров'я](https://wiki.openstreetmap.org/wiki/Healthcare) включає послуги, що надаються різними фахівцями в різних типах закладів.
        Включає *13* типів фільтрів.

 10. **Дозвілля**. [Дозвілля](https://wiki.openstreetmap.org/wiki/Category:Leisure) включає різні типи місць та закладів для розваг.
        Включає *15* типів фільтрів.

 11. **Морський**. Включає POI, пов'язані з морськими типами.
        Не містить жодних фільтрів.

 12. **<Translate android="true" ids="poi_filter_closest_poi"/>**. Включає POI, які знаходяться поблизу вас.
        Включає *216* типів фільтрів.

 13. **<Translate android="true" ids="poi_filter_parking"/>**. [Парковка](https://wiki.openstreetmap.org/wiki/Tag:amenity%3Dparking) включає заклади, що використовуються громадськістю, клієнтами або іншими уповноваженими користувачами для паркування транспортних засобів, таких як легкові та вантажні автомобілі, широко відомі як автостоянка (британська англійська) або паркувальний майданчик (американська англійська).
        Включає *34* типи фільтрів.

 14. **Особистий транспорт**. Усі [типи транспортних засобів](https://wiki.openstreetmap.org/wiki/Pl:Key:amenity#Transport) можуть бути у вашому володінні.
        Включає *38* типів фільтрів.

 15. **Популярні місця (Wikipedia)**. Для пошуку в цій категорії вам потрібно завантажити [карту Wikipedia](../plugins/wikipedia.md#overview) регіону, який вас цікавить.
        Не містить жодних фільтрів.

 16. **Приватний доступ**.
        Включає *6* типів фільтрів.

 17. **<Translate android="true" ids="poi_filter_public_transport"/>**. Це транспортна система, призначена для перевезення людей з громадською метою, доступна для всіх мешканців та відвідувачів міста чи регіону.
        Включає *9* типів фільтрів.

 18. **Маршрути**. Включає [маршрути OSM](../map/routes.md) для різних видів діяльності.
        Включає *14* типів фільтрів: **Контрольна точка**, **Вузол велосипедної мережі**, **Вузол пішохідної мережі**, **Мережа маршрутів (велосипед)**, **Мережа маршрутів (пішохід)**, **Категорія точки маршруту**, **Повітряні види спорту**, **Велоспорт**, **Водіння**, **Пішки**, **Мотоспорт**, **Інші маршрути**, **Водні види спорту**, **Зимові види спорту**.

 19. **Пам'ятки**. Це діяльність, під час якої люди відвідують цікаві місця або об'єкти, щоб ознайомитися з ними та насолодитися їхньою красою, історією чи значенням.
        Включає *8* типів фільтрів.

 20. **Спорт**. Включає зони для спортивних занять.
        Включає *11* типів фільтрів.

 21. **Магазин**. [Магазин](https://wiki.openstreetmap.org/wiki/Key:shop) відноситься до різноманітних закладів та підприємств, що пропонують різні товари чи послуги на продаж, такі як продуктові магазини, магазини одягу, магазини електроніки та інші.
        Включає *36* типів фільтрів.

 22. **Туризм**. [Туризм](https://wiki.openstreetmap.org/wiki/Key:tourism) включає місця та речі, що становлять особливий інтерес для туристів, включаючи місця для відвідування, місця для проживання, а також речі та місця, що надають інформацію та підтримку туристам.
        Включає *32* типи фільтрів.

 23. **Вода**. Джерела [питної води](https://wiki.openstreetmap.org/wiki/Key:drinking_water), створені або облаштовані людиною.
        Не містить жодних фільтрів.


### Перевпорядкувати категорії {#rearrange-categories}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Пошук POI Android](@site/static/img/search/search_poi_rearrange_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Пошук POI iOS](@site/static/img/search/search_poi_rearrange_ios.png)

</TabItem>

</Tabs>

Функція Перевпорядкувати категорії дозволяє перерахувати лише потрібні вам категорії та розташувати їх у порядку, який вам найзручніше використовувати.

Опис та як використовувати:

- Спочатку *список відсортовано за алфавітом.* Створені категорії також додаються в алфавітному порядку.
- Зміни у списку категорій здійснюються для кожного профілю окремо.
- Переміщуйте категорії, перетягуючи їх у потрібне місце у списку.
- *Щоб приховати* непотрібні категорії, натисніть на іконку **мінус**.
- **Доступні**. Раніше *Приховані* категорії можна повернути до відображуваного списку, натиснувши на іконку **плюс**.
- Використовуйте кнопку **Скинути** до стандартних, щоб повернути список до попередньо встановленого стану.
- Категорії, створені за допомогою [Користувацького пошуку](#custom-poi-search) або [Фільтрів](#save-new-custom-filters), можна видалити за допомогою іконки **Видалити**.

![Пошук POI Android](@site/static/img/search/search_poi_rearrange_del_andr.png)


### Онлайн-пошук {#online-search}

<InfoAndroidOnly />

![Пошук POI Android](@site/static/img/search/search_online_2_andr.png)

**Онлайн-пошук** дозволяє знаходити місцезнаходження, адреси та точки інтересу в режимі реального часу. OsmAnd використовує [Nominatim](https://nominatim.openstreetmap.org/ui/search.html), онлайн-геокодер, розроблений OpenStreetMap, який перетворює текстові запити користувачів на географічні координати та навпаки ([*приклад*](#example-of-online-search-query)).

Онлайн-пошук включає такі функції:

1. **Пошук за місцезнаходженням** - Ви можете ввести назву міста, вулиці, району або іншого місцезнаходження, і OsmAnd надасть результати, що відповідають запиту.
2. **Геокодування** - Онлайн-пошук перетворює ваші текстові запити на географічні координати, що дозволяє точне визначення місцезнаходження.
3. **Зворотне геокодування** - Ви можете ввести географічні координати, і Пошук поверне відповідне місцезнаходження як назву міста, назву вулиці або місце на карті.
4. **Пошук за точками інтересу** - Дозволяє шукати різні точки за назвою або категорією.

Використання Онлайн-пошуку:

- Онлайн-пошук забезпечує актуальність даних та доступність оновлень, оскільки сервіс постійно оновлюється та використовує відкриті джерела даних.
- Він забезпечує широке покриття місць та об'єктів, дозволяючи знаходити місця інтересу в різних регіонах світу.
- Онлайн-пошук здійснюється в режимі реального часу, забезпечуючи швидкий доступ до результатів пошуку.
- Корисно в містах та на автомагістралях з хорошим покриттям Інтернету.
- Онлайн-пошук зручно використовувати, якщо немає карт регіону і якщо їх неможливо завантажити.
- *Потребує постійного та стабільного підключення до Інтернету.*

![Пошук POI Android](@site/static/img/search/search_poi_online_increase2_andr.png)

Щоб покращити результати, перед використанням інструменту Пошук збільште масштаб карти, щоб наблизитися до місця, де вам потрібно знайти конкретне місцезнаходження. І під час пошуку ви можете **збільшити радіус пошуку**, щоб знайти місця, які знаходяться далі від вашого місцезнаходження. Під час пошуку офлайн, якщо необхідні результати недоступні, OsmAnd пропонує скористатися онлайн-пошуком.

Ви можете дізнатися інформацію про Онлайн-навігацію в статті [Онлайн-маршрутизація](../navigation/routing/online-routing.md).

#### Приклад запиту онлайн-пошуку {#example-of-online-search-query}

*Nominatim* в OsmAnd використовується як пошукова система для даних OpenStreetMap, за допомогою якої можна шукати за назвою (пошук за адресою наразі вимкнено). Кожен результат має посилання на сторінку з деталями, щоб побачити, які дані про об'єкт зберігаються в базі даних.

**Приклад XML-файлу.** Цей XML-файл не містить жодної інформації про стиль, пов'язаної з ним. Дерево документа показано за [посиланням](https://nominatim.openstreetmap.org/search?format=xml&addressdetails=0&accept-language=en&q=%D0%9C%D1%96%D0%BD%D1%81%D0%BA+%D0%BD%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96+72+&addressdetails=1&limit=300).


## Користувацький пошук POI {#custom-poi-search}

Користувацький пошук POI - це розширена функція пошуку, яка дозволяє знаходити POI з різних категорій та комбінувати їх для більш точного та персоналізованого пошуку. На відміну від стандартного пошуку POI, який обмежений деякими попередньо визначеними категоріями, Користувацький пошук POI надає гнучкість у виборі та комбінуванні різних типів POI.

Наприклад, ви можете шукати ресторани та аптеки одночасно, щоб знайти найближче місце для обіду, а потім прийняти ліки. Або шукати найближчу заправку та автосервіс, коли у вас виникла проблема з автомобілем.

Ця функціональність особливо корисна в різних випадках:

- *Подорожі*. Під час подорожей, використовуючи користувацький пошук, ви можете швидко знайти різні місця інтересу та комбінувати їх для створення оптимального маршруту.
- *Надзвичайні ситуації*. Якщо вам потрібно швидко знайти кілька типів послуг, ви можете скористатися користувацьким пошуком POI, щоб отримати всю необхідну інформацію.
- *Пошук найближчих послуг*. Користувацький пошук дозволяє комбінувати різні категорії POI для зручного пошуку, якщо вам потрібно знайти кілька типів послуг у певному районі або на певній ділянці маршруту.

### Користувацький фільтр POI {#custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Користувацький пошук Android](@site/static/img/search/search_custom_filter_andr.png) ![Користувацький пошук Android](@site/static/img/search/search_custom_filter_second_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

<!--
![Користувацький POI iOS](@site/static/img/search/custom_poi_ios.png) ![Користувацькі типи POI iOS](@site/static/img/search/custom_poi_types_ios.png)
-->

![Користувацький POI iOS](@site/static/img/search/custom_poi_filter_1_ios.png) ![Користувацькі типи POI iOS](@site/static/img/search/custom_poi_filter_2_ios.png)

</TabItem>

</Tabs>

*Користувацький фільтр POI* включає набори категорій зручностей, що складаються з відповідних значень. OsmAnd дозволяє збирати та комбінувати необхідні типи POI з однієї або кількох запропонованих категорій.

Щоб створити користувацькі фільтри для пошуку місць на карті, виберіть відповідні категорії та підкатегорії, які вас цікавлять. Ви можете [зберегти](#save-new-custom-filters) ці фільтри для подальшого використання або [редагувати](#edit-an-existing-filter) їх за потреби. Крім того, ви можете переглянути відфільтровані дані без збереження, натиснувши кнопку *Показати*. Однак зауважте, що якщо ви не збережете фільтри, усі вибори будуть скасовані, як тільки ви переключите пошук або вийдете з інструменту пошуку.

- Кожна категорія зручностей містить список доступних загальних значень для типів POI.
- Ви маєте можливість вибирати або скасовувати їх окремо, натискаючи на поле типу, який вас цікавить.
- *Вибрати все* - Для цього виберіть перемикач.
- Уточніть список, виключивши непотрібні - Почніть вводити запропоновану назву в поле *Пошук типів POI*.

#### Категорії та їх фільтри {#categories-and-their-filters}

1. **<Translate android="true" ids="amenity_type_administrative"/>**. Включає 25 типів: *Наділи, Атол, Район, Місто, Квартал, Країна, Суд, Митниця, Дипломатичне представництво, Ферма, Уряд, Хутір, Острів, Острівець, Окреме житло, Місцевість, Район, Поліція, В'язниця, Квартал, Житловий район, Передмістя, Містечко, Ратуша, Село*.

2. **Різдво**. Включає 5 типів фільтрів:
    *Різдвяна подія, Різдвяний ярмарок, Різдвяна піраміда, Різдвяний магазин, Різдвяна ялинка*.

3. **<Translate android="true" ids="amenity_type_education"/>**. Включає 16 типів: *Наділи, Атол, Район, Місто, Квартал, Країна, Суд, Митниця, Дипломатичне представництво, Ферма, Уряд, Хутір, Острів, Острівець, Окреме житло, Місцевість, Район, Поліція, В'язниця, Квартал, Житловий район, Передмістя, Містечко, Ратуша, Село*.

4. **<Translate android="true" ids="amenity_type_emergency"/>**. Включає 14 типів фільтрів.

5. **Інфраструктура екстрених служб**. Включає 12 типів фільтрів.

6. **<Translate android="true" ids="amenity_type_finance"/>**. Включає 12 типів фільтрів.

7. **Їжа**. Включає 12 типів фільтрів.

8. **Небезпека**. Включає 5 типів: *Лавинна небезпека, Ерозійна небезпека, Небезпека повені, Ядерна небезпека, Слизька дорога*.

9. **<Translate android="true" ids="amenity_type_healthcare"/>**. Включає 31 тип фільтрів.

10. **<Translate android="true" ids="amenity_type_leisure"/>**. Включає 148 типів фільтрів.

11. **<Translate android="true" ids="amenity_type_man_made"/>**. Включає 121 тип фільтрів.

12. **<Translate android="true" ids="amenity_type_military"/>**. Включає 7 типів: *Небезпечна зона, Військовий бункер, Військово-морська база, Військовий офіс, Військовий полігон, Військова зона, Місце ядерного вибуху*.

13. **<Translate android="true" ids="amenity_type_natural"/>**. Включає 50 типів фільтрів.

14. **Морський**. Включає 41 тип фільтрів.

15. **<Translate android="true" ids="amenity_type_office"/>**. Включає 39 типів фільтрів.

16. **Популярні місця (Wikipedia)**. Включає 1 тип: *Wikipedia*.

17. **Приватний доступ**. Не включає жодних фільтрів.

18. **Маршрути**. Включає 15 типів фільтрів.

19. **Сервіс**. Включає 111 типів фільтрів.

20. **<Translate android="true" ids="amenity_type_sport"/>**. Включає 119 типів фільтрів.

21. **Магазин**. Включає 156 типів фільтрів.

22. **<Translate android="true" ids="amenity_type_tourism"/>**. Включає 103 типи фільтрів.

23. **Транспорт**. Включає 97 типів фільтрів.

24. **Визначено користувачем**. Включає 1 тип: *Визначено користувачем Інший поштовий індекс*.

<!--
:::note since OsmAnd 5.0 for Android
Доступно для пошуку:

- Релігійні POI на основі тегу `amenity=place_of_worship` розділені на релігійно-специфічні місця, такі як церкви, мечеті або синагоги.
- Незначні зручності, такі як "лавка", "молодіжна лавка" (`amenity=bench`) доступні у списку категорій.
:::
-->

### Зберегти нові користувацькі фільтри {#save-new-custom-filters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Збереження користувацького POI Android](@site/static/img/search/custom_poi_save_android.png) ![Збереження користувацького POI Android](@site/static/img/search/custom_poi_save_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Збереження користувацького POI iOS](@site/static/img/search/custom_poi_save_2_ios.png)

</TabItem>

</Tabs>

Щоб **зберегти** користувацький фільтр, виберіть типи фільтрів, а потім:

- Натисніть кнопку *Показати* та виберіть кнопку *Зберегти* для iOS або кнопку з *іконкою, що вказує на дію збереження* для Android.
- Введіть назву для нової категорії.
- Ваш фільтр з'явиться у списку вкладки *Категорії* в інструменті Пошук.

Інший спосіб **зберегти**:

- Виберіть *[категорію](#poi-search-by-categories) → [іконка фільтра](#types-of-filters) →* виберіть *типи* характеристик *→ меню з трьома крапками → Зберегти фільтр*.


### Редагувати існуючий фільтр {#edit-an-existing-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Видалення користувацького POI Android](@site/static/img/search/custom_poi_delete_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Видалення користувацького POI iOS](@site/static/img/search/custom_poi_delete_4_ios.png)

</TabItem>

</Tabs>

З головного екрана:

- Натисніть кнопку *Лупа* у верхньому лівому куті екрана пристрою, щоб відкрити меню *Пошук*.
- Виберіть вкладку *Категорії*.
- Виберіть збережену користувацьку категорію, і з'явиться екран результатів пошуку.
- Натисніть іконку *Фільтр* поруч з *Показати на карті*, щоб відкрити екран *Фільтри*.
- Натисніть *меню з трьома крапками*.
- У випадаючому меню виберіть **Редагувати фільтр**.
- Щоб зберегти користувацький пошук POI після редагування:
    - Виберіть категорії POI та типи фільтрів для них *→* натисніть *Показати → меню з трьома крапками → Зберегти як →* введіть нову назву фільтра або *збережіть* зміни до поточного.


### Видалити користувацький фільтр POI {#delete-custom-poi-filter}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Видалення користувацького POI Android](@site/static/img/search/custom_poi_delete_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Видалення користувацького POI iOS](@site/static/img/search/custom_poi_delete_2_ios.png)

</TabItem>

</Tabs>

Ви можете видалити лише категорії, які були створені за допомогою фільтрів або користувацького пошуку.

- Перейдіть на вкладку [Категорії](#poi-search-by-categories) та виберіть потрібну.
- У полі поруч з *Показати на карті* натисніть на іконку, що представляє *фільтр*.
- У меню *Фільтри* натисніть на *меню з трьома крапками* ( &#8285; ), розташоване у верхньому правому куті екрана.
- Виберіть **Видалити фільтр**.
- ***Ви не можете скасувати видалення.***


#### Видалити користувацькі категорії (iOS) {#delete-custom-categories-ios}

![Видалення користувацького POI iOS](@site/static/img/search/custom_poi_delete_3_ios.png)

Додаткова опція лише для програми iOS - **Видалити користувацькі категорії**.

- Цей пункт знаходиться в кінці списку вкладки *Категорії*.
- Виберіть непотрібні категорії по одному пункту або *Вибрати все*.
- Натисніть кнопку **Видалити**.


## Пов'язані статті {#related-articles}

- [Пошук усіх](./search-all.md)
- [Пошук адреси](./search-address.md)
- [Історія пошуку](./search-history.md)
- [Пошук координат](./search-coordinates.md)


> *Останнє оновлення: Травень 2025*