---
source-hash: 005488c9f361f5a285ec76782eb6ca1d318aa0d0018f16a37bafee38f5d9b2ca
sidebar_position: 4
title:  Деталі маршруту
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

OsmAnd дозволяє знайти найкращий маршрут та дослідити його деталі. Додаток надає детальну інформацію про маршрут, таку як відстань, [час у дорозі](#distance--time--co2), [тип покриття](#road-attributes), [різниця висот](#elevation-info), [дані про викиди CO2](#distance--time--co2) та [інформацію про повороти](#turn-by-turn-information). Ви також можете [аналізувати](#analyze-on-map) маршрут на карті, дізнаватися інформацію про сегменти треку, [друкувати](#print) план маршруту, [зберігати](#share--export-actions) маршрут та ділитися ним з іншими. Завдяки цій функціональності ви завжди знатимете деталі маршруту та зможете ефективніше планувати свою подорож.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/route_detail_overview_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/route_detail_overview_4_ios.png)

</TabItem>

</Tabs>


### Як отримати доступ {#how-to-access}

Після розрахунку маршруту в [меню Навігація](./route-navigation.md#start--stop-navigation), ви маєте доступ до "Деталей" цього маршруту. Ця інформація корисна для використання перед початком поїздки для покращення планування маршруту або для перевірки інформації про дорогу попереду під час руху.
Існує три способи доступу до *меню Деталі маршруту*.

1. Перейдіть до головного *Меню → Навігація*, встановіть маршрут і натисніть кнопку *Деталі*.
2. Натисніть піктограму *Навігація* на екрані карти, встановіть маршрут і натисніть кнопку *Деталі*.
3. Перейдіть до меню *Мої місця*, натисніть будь-який доступний трек у списку *Меню → Мої місця → Треки*, виберіть піктограму *Навігація* в контекстному меню треку в *Огляді* та натисніть *Деталі*.

Залежно від вибраних [налаштувань профілю](../../personal/profiles.md) та вибраного [типу маршрутизації](../../navigation/routing/osmand-routing.md#routing-types), деякі деталі маршруту можуть не відображатися. Крім того, деталі маршруту значною мірою залежать від *покриття даних OpenStreetMap*.


## Відстань / Час / CO2 {#distance--time--co2}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_distance-time-CO2_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_distance-time-CO2_2_ios.png)

</TabItem>

</Tabs>

- ***Загальна відстань*** розраховується між усіма сегментами маршруту, включаючи проміжні точки у вибраних [одиницях](../../personal/profiles.md#units--formats).

- ***Орієнтовний час у дорозі*** розраховується як сума часу на кожному сегменті та штрафів за час у певних точках. Кожен профіль навігації має різні правила для розрахунку швидкості на сегменті та які штрафи слід включити (налаштовується в [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md)). Наприклад, профілі автомобіля та велосипеда беруть середню швидкість на сегменті з даних OpenStreetMap, але профілі пішохода, човна та літака використовують *стандартну* швидкість з [Налаштувань навігації](../guidance/navigation-settings.md#default-speed--road-speeds).

- ***Орієнтовний час прибуття*** розраховується як час від поточного моменту в місцевому часі походження з використанням *Орієнтовного часу в дорозі*.

- ***Дані про викиди CO2*** приблизно оцінюють, скільки CO2 буде вироблено під час руху за маршрутом. Щоб отримати більш точне наближення, потрібно налаштувати [Тип паливного двигуна](../guidance/navigation-settings.md#fuel-used-by-motor) у параметрах транспортного засобу.


## Інформація про висоту {#elevation-info}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_info-block_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_info-block_ios.png)

</TabItem>

</Tabs>

**Інформація про висоту** надається у всіх офлайн-профілях маршрутів OsmAnd, за винятком профілів, які використовують [Навігацію по прямій](../routing/straight-line-routing.md). Дані про висоту є частиною офлайн-карт OsmAnd і розраховуються на основі [публічних джерел SRTM](https://en.wikipedia.org/wiki/Shuttle_Radar_Topography_Mission).

- *Діапазон висот*. Відображає мінімальну / максимальну висоту на маршруті.
- *Середня висота*. Відображає зважену середню висоту на маршруті.
- *Підйом / спуск*. Відображає співвідношення шляху до горизонталі, де нуль вказує на горизонтальність, а число градусів вказує на вищий або крутіший ступінь нахилу. Ухил показує максимальний нахил дороги у відсотках від вашого місця розташування до кінця видимого графіка, або для вибраної ділянки маршруту без видимого на екрані місця розташування.


***Ліцензія на дані DEM, що використовуються OsmAnd для визначення рельєфу***
Дані про висоту на карті (між 70 градусами північної широти та 70 градусами південної широти) були отримані з вимірювань, зроблених у рамках *Місії топографії шатла (SRTM)*. Вона використовувала *Удосконалений космічний тепловий емісійний та відбивний радіометр (ASTER)*, основний інструмент зображення в *Системі спостереження Землі NASA*. Для повної інформації дивіться [Ліцензію](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details>
<summary>Дані DEM (DSM)</summary>
 - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>. Оригінальні дані, використані для цього продукту, були надані JAXA AW3D.<br/>
 - <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM.</a><br/>
 - <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1.<br/>
 - <a href="https://sonny.4lima.de">Цифрові моделі рельєфу Європи (DTM) LiDAR від Sonny</a>.

</details>


### Графік висот {#elevation-graph}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details](@site/static/img/navigation/route/route_details_el_graph_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/route_details_el_graph_ios.png)

</TabItem>

</Tabs>

[Графіки](../../map/tracks/track-context-menu.md#altitude--speed-graphs) візуально відображають інформацію про висоту та нахил вашого навігаційного маршруту та ваше поточне положення на цьому графіку з поточною висотою та нахилом. Графік будується на двох осях. Вісь X — це відстань на вашому маршруті. Перша вісь Y — це висота над рівнем моря, значення якої залежить від рельєфу, а друга вісь Y — це приблизний [нахил](https://en.wikipedia.org/wiki/Grade_(slope)). Ви можете переглядати графік висот для всього маршруту або лише для вибраного інтервалу, масштабуючи графік.

- ***Збільшення/зменшення***. За замовчуванням графік показує маршрут від поточного місця розташування до пункту призначення. Ви можете використовувати [рухи двома пальцями](../../map/interact-with-map.md#gestures) для збільшення та зменшення масштабу для більш детального перегляду. Ви також можете переміщати графік праворуч, вперед по маршруту та назад до поточного місця розташування. *Такі маніпуляції також стосуються візуального блоку інформації в блоці [Атрибути дороги](#road-attributes).*

- ***Шпилька розташування***. Якщо ви хочете побачити інформацію в певній точці попереду на вашому маршруті, ви можете торкнутися будь-де на графіку, і з'явиться покажчик з висотою та відсотком нахилу.


## Аналіз на карті {#analyze-on-map}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_analiz_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_analiz_ios.png)

</TabItem>

</Tabs>

Інструмент **Аналіз на карті** схожий на інструмент для перегляду [деталей треку](../../map/tracks/index.md#analyze-track-on-map) на карті. Він дозволяє переглядати та візуально взаємодіяти з різними графіками та бачити вибрану точку на карті.

Якщо дані присутні, ви можете вибрати один з наступних типів:

- *Вісь Y*:
   - [*Висота*](../../map/tracks/track-context-menu.md#altitude). Це [процес](https://wiki.openstreetmap.org/wiki/Altitude) отримання висоти над фіксованим рівнем.
   - [*Нахил*](https://wiki.openstreetmap.org/wiki/Key:incline). [Нахил рельєфу](https://en.wikipedia.org/wiki/Grade_(slope)) означає тангенс кута нахилу поверхні до горизонталі.
   - [*Швидкість*](../../map/tracks/track-context-menu.md#speed). Значення швидкості під час руху по треку.
   - Графіки з двома типами даних: &nbsp;*Висота/Нахил*, &nbsp;*Висота/Швидкість*, &nbsp;*Нахил/Швидкість*, &nbsp;*Анімоване масштабування/Швидкість*.
- *Вісь X*:
   - *Відстань*. Ви можете переглядати дані маршруту, що стосуються довжини маршруту.
   - *Час*. Ви можете переглядати дані маршруту, що стосуються часу, розрахованого для цього маршруту.
   - *Час доби*. Ви можете переглядати дані маршруту в певний час доби.


### Тип взаємодії {#type-of-interactions}

- *Натисніть і перетягніть*. Натисніть на графік, щоб відобразити інформацію про точку треку та рух по ньому. Графік виділяє місцезнаходження точки на карті та відображає інформацію про неї на лінійці.
- *Масштабування*. Масштабуйте графік за допомогою [жесту двома пальцями](../../map/interact-with-map.md#gestures).
- *Слідувати за моїм місцезнаходженням* (*лише Android*). Ви можете натиснути [Моє місцезнаходження](../../map/interact-with-map.md#my-location-and-zoom), щоб синхронізувати вигляд карти та графік з вашим місцезнаходженням. Під час руху графік буде зміщуватися зліва направо, відображаючи інформацію попереду вашого шляху.


## Атрибути дороги {#road-attributes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_details"/>*

![Navigation route Android](@site/static/img/navigation/route/route_details_attributes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_details,shared_string_analysis"/> tab*

![Navigation route iOS](@site/static/img/navigation/route/route_details_attributes_ios.png)

</TabItem>

</Tabs>

Атрибути дороги доступні в [Деталях маршруту](#how-to-access) та відображають інформацію, пов'язану з сегментами, з даних OpenStreetMap та даних про висоту. Кольорова індикація пов'язана з тим, як певні атрибути відображаються на карті (див. [Легенда карти](../../map-legend/osmand.md#surface-smoothness)). Гістограми також інтерактивні, і можна побачити інформацію в певному місці, натиснувши на графік.

- [**Тип дороги**](https://wiki.openstreetmap.org/wiki/Key:highway#Roads). Тип дороги визначається на основі її функціонального призначення та характеристик, таких як кількість смуг, обмеження швидкості, вантажопідйомність, наявність пішохідних та велосипедних доріжок, узбіч та інших параметрів. Різні типи доріг можуть мати різні обмеження та правила дорожнього руху.

   Наприклад, головні [автомагістралі](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway) зазвичай мають високе обмеження швидкості та можуть бути розділені на смуги, а [місцеві дороги](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential) можуть мати низьке обмеження швидкості та одну смугу в кожному напрямку.

- [**Покриття**](https://wiki.openstreetmap.org/wiki/Key:surface). Дорожнє покриття — це верхній шар дорожнього одягу, який контактує з колесами транспортних засобів. Воно може бути різних типів залежно від його властивостей та функціонального призначення.

   Наприклад, [асфальтове](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dasphalt) покриття забезпечує хороше зчеплення та шумоізоляцію, а [бетонне](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dconcrete) покриття більш довговічне та має більшу вантажопідйомність. Для створення дорожнього покриття також можуть використовуватися інші матеріали, такі як гравій, щебінь, дерев'яні дошки тощо.

- [**Крутизна**](https://wiki.openstreetmap.org/wiki/Key:incline#Common_&_extreme_inclines). Це вимірювання кута нахилу дороги, виражене у відсотках. Воно вказує, наскільки круто дорога нахилена вгору або вниз відносно горизонту, і розраховується шляхом вимірювання вертикальної зміни висоти дороги на горизонтальній відстані та множення отриманого значення на 100%.

   Наприклад, якщо крутизна дороги становить 10%, це означає, що на кожні 100 метрів горизонтальної відстані по дорозі ви піднімаєтеся або спускаєтеся на 10 метрів. Крутизна дороги може впливати на швидкість вашого транспортного засобу, гальмування, витрату палива та безпеку руху, особливо на слизьких дорогах взимку.

- [**Твердість поверхні**](https://wiki.openstreetmap.org/wiki/Key:tracktype). Дорожнє покриття може відновлюватися після деформації або навантаження. Чим вища твердість поверхні, тим менша ймовірність пошкодження транспортного засобу та тим комфортнішою буде дорога. Твердість поверхні також може впливати на швидкість транспортного засобу та витрату палива.

- [**Нахил**](https://wiki.openstreetmap.org/wiki/Key:incline). Вказує, який відсоток нахилів є на вашому маршруті.

- [**Гладкість**](https://wiki.openstreetmap.org/wiki/Key:smoothness). Застосовується до всіх типів шляхів та територій, таких як автомагістралі, парковки, пляжі та стежки, та вказує на придатність маршруту для використання. Вона надає вам інформацію про те, що ви можете їхати без значного ризику пошкодження, наприклад, ходової частини транспортного засобу, або травми, наприклад, падіння.

- [**Зимові та льодові дороги**](https://wiki.openstreetmap.org/wiki/Proposed_features/Winter_roads). Показує колірну схему маршруту відповідно до класифікації [зимових доріг](../../map/vector-maps.md#winter-and-ski).

- [**Складність кінних стежок**](https://wiki.openstreetmap.org/wiki/Riding). Цей атрибут дороги вказує на складність маршруту під час їзди верхи. Підходить для [кінної маршрутизації](../../navigation/routing/horse-routing.md).


## Покрокова інформація {#turn-by-turn-information}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_turn_2_ios.png)

</TabItem>

</Tabs>

Покрокова інформація надає детальні [інструкції](#instructions) щодо навігації за маршрутом. Крім меню *Деталі*, вона також відображається у віджетах [*Маневри маршруту*](../../widgets/nav-widgets.md#route-maneuvers) та [*Смуги*](../../widgets/nav-widgets.md#lanes). Ця інформація допомагає краще орієнтуватися на маршруті та дозволяє планувати заздалегідь.

Натисніть на певну ділянку маршруту у списку, щоб переглянути детальну інформацію або внести необхідні зміни. Карта збільшується, і відкривається [Контекстне меню](../../map/map-context-menu.md).


### Інструкції {#instructions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_ios.png)

</TabItem>

</Tabs>

Інструкції включають інформацію про рух по маршруту, таку як:

- [*Стрілка наступного повороту*](../../widgets/nav-widgets.md#next-turn) та *її напрямок*.
- *Відстань до маневру*.
- Опис *що робити*, який включає *назву вулиці або стежки*.
- *Загальна відстань* та *час маршруту*.
- [*Розташування смуг*](../../widgets/nav-widgets.md#lanes) для поточної дороги.
- [*Індикатор узбіччя*](#roadside-indicator) (*лише iOS*).


### Індикатор узбіччя {#roadside-indicator}

:::caution лише iOS
Цей тип інструкції наразі *недоступний для версії OsmAnd для Android*.
:::

![Side indication](@site/static/img/navigation/route/side_indication.png)

У списку інструкцій **індикатор узбіччя** показує, в якому напрямку від вашого поточного місцезнаходження та напрямку руху до кінцевої точки знаходиться ваше призначення, це може бути ліворуч, праворуч та прямо.

Вимірюється кут між вашим призначенням (*[Пеленг](https://en.wikipedia.org/w/index.php?title=Bearing_(navigation)&oldformat=true) від останньої точки*) та останнім сегментом (*Пеленг до останніх 2 точок маршруту*), ділиться на 3 сектори по 120 градусів, і в результаті ви можете побачити, в якому напрямку знаходиться ваше призначення.

- `-60 °`&nbsp; &nbsp; &nbsp; до &nbsp; &nbsp;`60 °`&nbsp; &nbsp; &nbsp; - позначено як **прямо**.
- `-180 °`&nbsp; &nbsp; до &nbsp; &nbsp;`-60 °`&nbsp; &nbsp; - позначено як **ліворуч**.
- `60 °`&nbsp; &nbsp; &nbsp; &nbsp; до &nbsp; &nbsp;`180 °`&nbsp; &nbsp; - позначено як **праворуч**.


### Друк {#print}

<InfoAndroidOnly/>

![route details](@site/static/img/navigation/route/route_details_print-2.png)

Функція **Друк** покрокового опису маршруту може бути корисною, якщо ви віддаєте перевагу мати фізичну копію опису маршруту замість використання електронних пристроїв, або якщо у вас немає доступу до навігаційних додатків чи GPS-навігаторів, немає доступу до Інтернету, або якщо вам потрібна інформація для інших людей, які подорожують з вами.

Друкований опис маршруту надає детальні *покрокові інструкції* щодо навігації за маршрутом, включаючи відстань до наступного повороту, напрямок руху та назви вулиць або стежок, а також інформацію про відстань та час у дорозі.

Ця інформація може бути корисною, коли ви плануєте поїздку та хочете оцінити час та відстань між різними точками на маршруті та визначити очікуваний час прибуття.

Можливість **друкувати** або **зберігати** покрокову інформацію **у форматі PDF** особливо корисна під час подорожей на великі відстані або в незнайомих місцях, коли вам потрібно мати більш детальне уявлення про маршрут та час, необхідний для його проходження.


## Поділитися / Експорт (Дії) {#share--export-actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_share_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_share_ios.png)

</TabItem>

</Tabs>

Розділ навігації Деталі маршруту має опції, які дозволяють виконувати певні дії з інформацією про маршрут.

- [**Друк**](#print). Дозволяє друкувати або зберігати покрокову інформацію про маршрут.
- **Експорт/Збереження**. Дозволяє зберегти інформацію про маршрут **як новий трек** для подальшого використання в автономному режимі. Експортований трек містить всю інформацію про атрибути дороги та інструкції щодо поворотів. Таким чином, [навігація за цим треком](./gpx-navigation.md) повинна надавати всі функції, як і навігація за маршрутом.
- **Поділитися**. Ділиться експортованим треком або посиланням на маршрут, яке можна відкрити на іншому пристрої з OsmAnd.


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](./route-navigation.md)
- [Навігація за треком](./gpx-navigation.md)
- [Навігація за маркерами](./markers-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран карти під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Ця стаття востаннє оновлювалася в листопаді 2024 року*