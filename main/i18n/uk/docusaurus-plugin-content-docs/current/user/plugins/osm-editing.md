---
source-hash: fb4dfa3af12638db8d07636ca58d9e23de9542afc7c2cd66d965f36e2bc93826
sidebar_position: 9
title:  Редагування OpenStreetMap
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) — це глобальна спільнота, яка має на меті створити детальну вільну географічну карту світу та надавати актуальні дані з відкритим кодом кожному користувачеві. Плагін редагування OpenStreetMap дозволяє вам робити свій внесок у спільноту.  

За допомогою OsmAnd та плагіна редагування OSM ви можете легко додавати власну інформацію на OpenStreetMap.org, наприклад, створювати або змінювати [POI](#create--modify-poi), додавати або коментувати [нотатки](#create--modify-osm-note), а також завантажувати записані GPX [треки](#upload-gps-track).

## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати плагін *Редагування OpenStreetMap*, необхідно виконати наступні налаштування:

1. Увімкнути [плагін](../plugins/index.md#enable--disable).  
2. Налаштувати редагування OpenStreetMap у будь-якому [профілі](../personal/profiles.md).
3. Увімкнути відображення *Нотаток OSM (онлайн)* або *Редагувань OSM* на карті в меню [Налаштувати карту](../map/configure-map-menu).


## Налаштування {#settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*  
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![Налаштування плагіна редагування OpenStreetMap Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![Налаштування плагіна редагування OpenStreetMap iOS](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>  

:::note
Налаштування плагіна є глобальними та застосовуються до всіх профілів.
:::

- [Увійти в OpenStreetMap](#authorization). Увійдіть, щоб завантажувати нові або змінені дані. Використовуйте безпечний *метод OAuth 2.0* або [увійдіть на сайт OSM](https://www.openstreetmap.org/login). Для iOS кнопка методу OAuth доступна лише для користувачів з підтримуваною версією iOS 16.4
- **<Translate android="true" ids="offline_edition"/>**. Якщо цей параметр увімкнено, зміни спочатку зберігаються локально (кнопка *Зберегти*) і завантажуються за запитом. Якщо параметр вимкнено, зміни завантажуються негайно (кнопка *Завантажити*).
- **<Translate android="true" ids="use_dev_url"/>** *(лише для Android)*. Дозволяє увімкнути [dev.openstreetmap.org](https://dev.openstreetmap.org/) замість [openstreetmap.org](http://openstreetmap.org/) для тестування завантаження нотаток OSM, POI або GPS-треків. Коли увімкнено, ви автоматично виходите з OpenStreetMap.org. Цей параметр доступний у списку, лише якщо увімкнено *плагін розробки OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Торкніться, щоб відкрити [*Меню → Мої місця → Редагування OSM*](../personal/myplaces.md). На цій вкладці перелічені ваші невідредаговані нотатки OSM. З нотаткою доступні такі дії: *Завантажити*, *Показати на карті*, *Змінити нотатку OSM*, *Видалити*. Завантажені або видалені нотатки більше не відображаються у списку.  

:::note
Якщо у вас є підписка [OsmAnd Pro](../purchases/android.md#pro-features), зміни, внесені в OSM, з'являться на вашій карті OsmAnd протягом однієї години. Переконайтеся, що [Живі оновлення](../personal/maps-resources.md#live-updates) увімкнені.
:::  


### Авторизація {#authorization}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live для маперів](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live для маперів](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Увійдіть, щоб додавати зміни та GPX-файли.  

- Перейдіть на [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) та *увійдіть* або *зареєструйтеся*.
- Торкніться поля *Увійти в OpenStreetMap* у додатку OsmAnd, а потім натисніть кнопку *Увійти через OpenStreetMap*.  


### Безкоштовні оновлення карт для маперів {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd Live для маперів](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd Live для маперів](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd Live для маперів](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd Live для маперів](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Налаштування <Translate android="true" ids="map_updates_for_mappers"/> дозволяє увімкнути **[живі оновлення](../personal/maps-resources.md#free-for-osm-mappers)**, якщо ви є активним дописувачем OpenStreetMap. Таким чином, ви можете користуватися безкоштовними щогодинними оновленнями карт, на відміну від стандартних щомісячних оновлень. Активні дописувачі OpenStreetMap.org можуть мати право на необмежену кількість щогодинних оновлень карт. Увійдіть в OpenStreetMap, щоб перевірити своє право на необмежені щомісячні та щогодинні оновлення карт.


### Шар редагувань OSM {#osm-editing-layer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Шар редагувань OSM Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![Шар редагувань OSM Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_open_street_map"/>*

![Шар редагувань OSM iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Ви можете увімкнути або вимкнути як окремий шар відображення модифікацій OSM у розділі [Налаштувати карту](../map/configure-map-menu.md) *Головного меню*.  Модифікації OSM включають наступне:  
- **Нотатки OSM (онлайн)**. Відображає публічні нотатки OpenStreetMap, створені користувачами для виділення проблем мапінгу або запиту оновлень. Нотатки показуються як інтерактивні маркери, які можна переглянути, відкрити та вирішити маперам.  
![Шар редагувань OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_note.png)  
- **Редагування OSM**. Показує ваші локальні редагування OSM, збережені на пристрої перед їх завантаженням на сервер OpenStreetMap. Цей шар допомагає переглянути геометрію та атрибути об'єктів, які ви змінили або додали.  
![Шар редагувань OSM](@site/static/img/plugins/osm-editing/osm_editing_osm_edits.png)  
- **Теги Fixme**. Виділяє об'єкти, позначені тегом fixme=* в OSM. Ці елементи містять коментарі маперів, що вказують на неповну, невизначену інформацію або потребу в перевірці на місцевості.  
![Шар редагувань OSM](@site/static/img/plugins/osm-editing/osm_editing_fixme_tags.png)  
- **Теги Note**. Відображає об'єкти, що містять теги note=* — коментарі маперів, вбудовані безпосередньо в дані OSM. Ці теги зазвичай описують тимчасові умови або додатковий контекст для майбутнього редагування.  
![Шар редагувань OSM](@site/static/img/plugins/osm-editing/osm_editing_note_tags.png)  
- **Іконки при низьких масштабах**. Увімкнює спрощені іконкоподібні представлення об'єктів OSM за допомогою коротких абревіатур, отриманих з їх основних ключів тегів. Їх значення описані [тут](https://osmand.net/docs/user/map-legend/osmand#icons-for-low-zooms-option-simplified-icons-). Ця функція робить більше об'єктів видимими при низьких масштабах без перевантаження карти або накладання іконок.  
![Шар редагувань OSM](@site/static/img/plugins/osm-editing/osm_editing_icons_zoom.png)  


## Створення / Зміна POI {#create--modify-poi}

Плагін редагування OpenStreetMap дозволяє створювати на карті нові об'єкти, що називаються [цікавими місцями або POI](../map/point-layers-on-map.md#points-of-interest-pois). Ви можете нанести на карту новий магазин, улюблену пам'ятку, лавку або укриття, щоб люди могли їх знайти.  

1. Торкніться карти, щоб розмістити новий POI, або торкніться ще не завантаженого POI.2. Торкніться [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Виберіть [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) та додайте його назву та іншу інформацію, таку як години роботи, веб-сайт тощо. Коли ви вибираєте ще не завантажений POI, *Створити POI* змінюється на *Змінити POI*.
3. Залежно від налаштування [Офлайн редагування](#settings), ви можете зберегти дані локально або [завантажити їх](../map/map-context-menu#-upload-poi--osm-note).


### Додавання тегів {#add-tags}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Додати тег POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Додати тег POI Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Додати тег POI iOS](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Ви можете легко додавати [теги](https://wiki.openstreetmap.org/wiki/Tags) OSM до POI. Коли ви вводите кілька символів у рядок пошуку, програма пропонує можливі теги.  

**Офлайн-зміни.**  
Ви можете переглядати, завантажувати в OSM або видаляти POI в *Мої місця → Редагування OSM*. Ви також можете експортувати зміни ваших POI в OSM у [файл OSC](https://wiki.openstreetmap.org/wiki/OsmChange) та імпортувати його в [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).  

### Додавання непідтримуваних типів POI {#add-unsupported-poi-types}

На вкладці *Додатково* ви можете додавати непідтримувані типи POI, які можуть бути корисними для вашого конкретного завдання. Ця опція дозволяє вводити дані POI вручну, розширюючи таким чином функціональність програми.  

Одним із прикладів непідтримуваних типів POI, які ви можете додати, є *amenity=freeshops*. Цей тип може бути корисним, якщо ви хочете позначити безкоштовні магазини або місця, що надають безкоштовні товари.

Щоб додати непідтримуваних типів POI, виконайте наступні кроки:

1. Відкрийте вкладку *Додатково*.
2. Торкніться *Тип POI*.
3. Введіть ключ *amenity* та значення *freeshops* у відповідні поля.
4. Заповніть решту необхідних даних для цього POI.
5. Натисніть *Додати тег*, щоб додати новий POI до вашої бази даних.

Пам'ятайте, що при додаванні непідтримуваних типів POI важливо переконатися, що дані введені правильно, щоб забезпечити коректну роботу програми та подальшу обробку інформації.


## Створення / Зміна нотатки OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*  

![Відкрити нотатку OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Відкрити нотатку OSM Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*  

![Відкрити нотатку OSM iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Щоб редагувати, коментувати або закривати нотатки OSM, увімкніть їх відображення на карті в меню [Налаштувати карту](../map/configure-map-menu.md).

- Функція нотаток OSM дозволяє додавати нотатки на карту. У цих нотатках ви можете описати помилки або написати про відсутню інформацію в даних OpenStreetMap. Ви та інші користувачі можете залишати коментарі до ваших нотаток.
- Ви можете допомогти іншим користувачам, перевіряючи їхні запитання чи проблеми, залишаючи коментарі, а потім закриваючи вирішені нотатки.
- Дізнайтеся більше про нотатки OpenStreetMap [тут](https://wiki.openstreetmap.org/wiki/Notes).

Щоб створити нотатку, вам не потрібно входити в OpenStreetMap.org, ви можете надіслати її анонімно.

- Торкніться карти, де потрібно розмістити нову нотатку OSM (або торкніться ще не завантаженої нотатки), і виберіть [Дії](../map/map-context-menu.md#actions).
- Якщо ви хочете додати інформацію до існуючої або ще не завантаженої нотатки, відредагувати коментар або закрити нотатку, торкніться нотатки OSM на карті та виберіть [потрібну дію](../map/map-context-menu.md#-comment--close-osm-note).
- Ви можете завантажити зміни, як тільки з'явиться доступ до Інтернету. Ви також можете скасувати зміни до їх завантаження.

:::info
Завантажені нотатки OSM не відображаються на картах OsmAnd в офлайн-режимі.
:::


## GPS-трек {#gps-track}

Записані вами GPS-треки корисні для:

- **Маперів**. Треки можна використовувати для нанесення на карту різноманітних шляхів.
- **Навігації**. На основі завантажених вами даних GPX-файлу навігаційні програми та спеціальні пристрої можуть розраховувати треки.
- **Для обміну інформацією** про записані вами треки та маршрути на [картах на основі OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).  

:::info NOTE
Ваші треки будуть додані до [слідів OSM](https://www.openstreetmap.org/traces) протягом години, де вони будуть доступні для перегляду, пошуку та використання вами та іншими.
:::  


### Завантаження GPS-треку {#upload-gps-track}


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Плагін редагування OpenStreetMap GPX в OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Плагін редагування OpenStreetMap GPX в OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)  

</TabItem>

</Tabs>

Щоб [завантажити GPS-трек](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), виконайте наведені нижче кроки:  

- Знайдіть потрібний трек на вкладці [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).  
- Торкніться *меню з трьома крапками* поруч з назвою треку та виберіть *Експорт*.

**Налаштування:**

- **<Translate android="true" ids="shared_string_description"/>**. Дозволяє додати опис до треку. Опис застосовується до всіх вибраних треків. Якщо ви нічого не введете в поле, назви треків для кожного окремого треку будуть використовуватися як описи.  
- **<Translate android="true" ids="gpx_tags_txt"/>**. Цей пункт у розділі налаштувань дозволяє додавати теги для ідентифікації треку. Тег за замовчуванням — "osmand". Якщо трек був записаний з певною активністю на основі вибраного профілю, ця активність також автоматично додається як тег під час завантаження. Для завантажуваних груп треків кожен трек отримує свій тег активності. Для деяких профілів (наприклад, Загальний транспорт) тег активності не додається. Ви можете вводити додаткові теги вручну, розділені комами.  
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Видимість треку для користувачів OSM:  
   - *Публічний* означає, що трек є загальнодоступним і відображається в необробленому вигляді у ваших GPS-треках, списках GPS-треків та списках треків з часовими мітками. Дані, що передаються через API, не пов'язані зі сторінкою вашого треку. Часові мітки точок треку недоступні через публічний GPS API, а точки треку не впорядковані хронологічно.
   - *Ідентифікований* означає, що трек буде публічно відображатися у ваших точках GPS-треків та публічних списках GPS-треків, що означає, що інші користувачі зможуть завантажити необроблений трек та пов'язати його з вашим іменем користувача. Публічні дані точок треку з часовими мітками з GPS API, передані через API точок треку, будуть посилатися на вашу оригінальну сторінку треку.
   - *Відстежуваний* означає, що трек не відображається в публічних списках, але оброблені точки треку з часовими мітками з нього (які не можуть бути безпосередньо пов'язані з вами) завантажуються з публічного GPS API.
   - *Приватний* означає, що трек не відображається в публічних списках, але точки треку з нього в нехронологічному порядку доступні через публічний GPS API без часових міток.
- **<Translate android="true" ids="login_account"/>** - [Обліковий запис OSM](https://www.openstreetmap.org/login).

:::info
Ви можете вибрати більше одного треку для завантаження в OSM. Для цього торкніться іконки *Завантажити в OpenStreetMap* внизу екрана, виберіть треки за допомогою прапорця, торкніться *Завантажити*, а потім *Продовжити*.
:::

### Створення OBF-файлу {#generate-obf-file}

Ви можете створити OBF-файл за допомогою [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator), якщо у вас є велика база даних GPX-треків. Це колекція треків з osmand.net з тегом 'gpsies', колекція завантажених треків з OpenStreetMap або ваша власна колекція.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Загальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (Стилі карти)](../../user/map/vector-maps.md)