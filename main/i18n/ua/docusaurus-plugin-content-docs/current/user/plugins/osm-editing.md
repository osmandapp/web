---
source-hash: b2fce03e6d9da01bd74250791681c9c19239d595e605a569ddc8593a5ea7a4a0
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

[OpenStreetMap](https://www.openstreetmap.org/about) (OSM) — це глобальна спільнота, яка має на меті створити детальну безкоштовну географічну карту світу та надати актуальні дані з відкритим кодом кожному користувачеві. Плагін для редагування OpenStreetMap дозволяє вам зробити свій внесок у спільноту.

За допомогою OsmAnd та плагіна для редагування OSM ви можете легко додавати власну інформацію на OpenStreetMap.org, наприклад, створювати або змінювати [POI](#create--modify-poi), додавати або коментувати [нотатки](#create--modify-osm-note), а також завантажувати записані GPX [треки](#upload-gps-track).

## Необхідні параметри налаштування {#required-setup-parameters}

Щоб використовувати плагін *Редагування OpenStreetMap*, необхідно зробити наступні налаштування:

1. Увімкнути [Плагін](../plugins/index.md#enable--disable).
2. Налаштувати редагування OpenStreetMap у будь-якому [профілі](../personal/profiles.md).
3. Увімкнути відображення *Нотаток OSM (онлайн)* або *Редагувань OSM* на карті в [Меню налаштування карти](../map/configure-map-menu).


## Налаштування {#settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name,shared_string_settings"/>*
- *<Translate android="true" ids="shared_string_menu,configure_profile,plugins_settings,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/>*
- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,osm_editing_plugin_name"/>*

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

:::note
Налаштування плагіна є глобальними та застосовуються до всіх профілів.
:::

- [Увійти в OpenStreetMap](#authorization). Увійдіть, щоб завантажити нові або змінені дані. Використовуйте безпечний метод *OAuth 2.0* або [увійдіть на сайті OSM](https://www.openstreetmap.org/login). Для iOS кнопка для методу OAuth доступна лише для користувачів з підтримуваною версією iOS, 16.4
- **<Translate android="true" ids="offline_edition"/>**. Якщо це налаштування увімкнено, зміни спочатку зберігаються локально (кнопка *Зберегти*) і завантажуються за запитом. Якщо налаштування вимкнено, зміни завантажуються негайно (кнопка *Завантажити*).
- **<Translate android="true" ids="use_dev_url"/>** *(лише Android)*. Дозволяє увімкнути [dev.openstreetmap.org](https://dev.openstreetmap.org/) замість [openstreetmap.org](http://openstreetmap.org/) для тестування завантаження нотаток OSM, POI або GPS-треків. При увімкненні ви автоматично виходите з OpenStreetMap.org. Це налаштування доступне в списку лише тоді, коли увімкнено *Плагін розробки OsmAnd*.
- [<Translate android="true" ids="map_updates_for_mappers"/>](#free-map-updates-for-mappers).
- **<Translate android="true" ids="layer_osm_edits"/>**. Натисніть, щоб відкрити [*Меню → Мої місця → Редагування OSM*](../personal/myplaces.md). На цій вкладці перераховані ваші невідредаговані нотатки OSM. З нотаткою доступні наступні дії: *Завантажити*, *Показати на карті*, *Змінити нотатку OSM*, *Видалити*. Завантажені або видалені нотатки більше не відображаються в списку.

:::note
Якщо у вас є підписка [OsmAnd Pro](../purchases/android.md#pro-features), зміни, внесені в OSM, з'являться на вашій карті OsmAnd протягом однієї години. Переконайтеся, що увімкнено [Живі оновлення](../personal/maps-resources.md#osmand-live).
:::


### Авторизація {#authorization}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

</TabItem>

</Tabs>

Увійдіть, щоб додавати зміни та GPX-файли.

- Перейдіть на [openstreetmap.org](https://www.openstreetmap.org/login?referer=%2F#map=16/51.5110/0.0550) та *увійдіть* або *зареєструйтесь*.
- Натисніть поле *Увійти в OpenStreetMap* у застосунку OsmAnd, потім натисніть кнопку *Увійти за допомогою OpenStreetMap*.


### Безкоштовні оновлення карти для картографів {#free-map-updates-for-mappers}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_andr.png)   ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_login_ios.png)    ![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_2_ios.png)

</TabItem>

</Tabs>

Налаштування <Translate android="true" ids="map_updates_for_mappers"/> дозволяє увімкнути **[OsmAnd live](../personal/maps-resources.md#free-for-osm-mappers)**, якщо ви є активним учасником OpenStreetMap. Таким чином ви можете користуватися безкоштовними щогодинними оновленнями карти, на відміну від стандартних щомісячних оновлень. Активні учасники OpenStreetMap.org можуть мати право на необмежені щомісячні та щогодинні оновлення карти. Увійдіть в OpenStreetMap, щоб перевірити свою придатність до необмежених щомісячних та щогодинних оновлень карти.


### Шар редагування OSM {#osm-editing-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*

![OSM editing layer Android](@site/static/img/plugins/osm-editing/osm_editing_layer_andr.png) ![OSM editing layer Android 2](@site/static/img/plugins/osm-editing/osm_editing_layer_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_edits_offline_layer"/>*

![OSM editing layer iOS](@site/static/img/plugins/osm-editing/osm_editing_layer_ios.png)

</TabItem>

</Tabs>

Ви можете увімкнути або вимкнути як окремий шар відображення змін OSM, таких як *Нотатки OSM* (онлайн), *Редагування OSM*, *Теги Fixme*, *Теги Note*, *Іконки при низьких масштабах*, у розділі [Налаштування карти](../map/configure-map-menu.md) *Головного меню*.


## Створити / Змінити POI {#create--modify-poi}

Плагін для редагування OpenStreetMap дозволяє створювати нові об'єкти на карті, які називаються [точки інтересу або POI](../map/point-layers-on-map.md#points-of-interest-poi). Ви можете нанести на карту новий магазин, улюблену пам'ятку, лавку або притулок, щоб люди могли їх знайти.

1. Натисніть на карту, щоб розмістити новий POI, або натисніть на POI, який ще не завантажено.2. Натисніть [<Translate android="true" ids="shared_string_actions"/>](../map/map-context-menu.md#actions).
2. Виберіть [<Translate android="true" ids="context_menu_item_create_poi"/>](../map/map-context-menu.md#-create--modify-poi) та додайте його назву та іншу інформацію, таку як години роботи, вебсайт тощо. Коли ви вибираєте незавантажений POI, *Створити POI* змінюється на *Змінити POI*.
3. Залежно від налаштування [Офлайн-редагування](#settings), ви можете зберегти дані локально або [завантажити їх](../map/map-context-menu#-upload-poi--osm-note).


### Додати теги {#add-tags}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_3_andr.png) ![Add POI tag Android](@site/static/img/plugins/osm-editing/add_poi_tag_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add POI tag ios](@site/static/img/plugins/osm-editing/add_poi_tags_ios.png)

</TabItem>

</Tabs>

Ви можете легко додати OSM [теги](https://wiki.openstreetmap.org/wiki/Tags) до POI. Коли ви вводите кілька символів у рядок пошуку, програма пропонує можливі теги.

**Офлайн-зміни.**
Ви можете переглядати, завантажувати в OSM або видаляти POI в *Мої місця → Редагування OSM*. Ви також можете експортувати свої зміни POI OSM у [файл OSC](https://wiki.openstreetmap.org/wiki/OsmChange) та імпортувати його в [JOSM](https://wiki.openstreetmap.org/wiki/JOSM).

### Додати непідтримувані типи POI {#add-unsupported-poi-types}

На вкладці *Додатково* ви можете додати непідтримувані типи POI, які можуть бути корисними для вашого конкретного завдання. Ця опція дозволяє вручну вводити дані POI, таким чином розширюючи функціональність програми.

Одним із прикладів непідтримуваних типів POI, які ви можете додати, є *amenity=freeshops*. Цей тип може бути корисним, якщо ви хочете позначити безкоштовні магазини або місця, які надають безкоштовні продукти.

Щоб додати непідтримувані типи POI, виконайте наступні кроки:

1. Відкрийте вкладку *Додатково*.
2. Натисніть *Тип POI*.
3. Введіть ключ *amenity* та значення *freeshops* у відповідні поля.
4. Заповніть решту необхідних даних для цього POI.
5. Натисніть *Додати тег*, щоб додати новий POI до вашої бази даних.

Пам'ятайте, що при додаванні непідтримуваних типів POI важливо переконатися, що дані введені правильно, щоб забезпечити коректну роботу програми та подальшу обробку інформації.


## Створити / Змінити нотатку OSM {#create--modify-osm-note}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*

![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_android.png)   ![Open OSM Note Android](@site/static/img/plugins/osm-editing/osm_notes_online_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,configure_map,osm_notes_online_layer"/>*

![Open OSM Note iOS](@site/static/img/plugins/osm-editing/osm_notes_online_ios.png)

</TabItem>

</Tabs>

Щоб редагувати, коментувати або закривати нотатки OSM, увімкніть їх відображення на карті в [Меню налаштування карти](../map/configure-map-menu.md).

- Функція нотаток OSM дозволяє додавати нотатки на карту. У цих нотатках ви можете описувати помилки або писати про відсутню інформацію в даних OpenStreetMap. Ви та інші користувачі можете залишати коментарі до ваших нотаток.
- Ви можете допомогти іншим користувачам, перевіряючи їхні запитання або проблеми, залишаючи коментарі, а потім закриваючи вирішені нотатки.
- Докладніше про нотатки OpenStreetMap читайте [тут](https://wiki.openstreetmap.org/wiki/Notes).

Щоб створити нотатку, вам не потрібно входити на OpenStreetMap.org, ви можете надіслати її анонімно.

- Натисніть на карту, де має бути розміщена нова нотатка OSM (або натисніть на незавантажену нотатку), і виберіть [Дії](../map/map-context-menu.md#actions).
- Якщо ви хочете додати інформацію до існуючої нотатки або незавантаженої нотатки, відредагувати коментар або закрити нотатку, натисніть на нотатку OSM на карті та виберіть [необхідну дію](../map/map-context-menu.md#-comment--close-osm-note).
- Ви можете завантажити зміни, як тільки будете доступні онлайн. Ви також можете скасувати зміни до їх завантаження.

:::info
Завантажені нотатки OSM не відображаються на картах OsmAnd в офлайн-режимі.
:::


## GPS-трек {#gps-track}

Записані вами GPS-треки корисні для:

- **Картографів**. Треки можуть використовуватися для нанесення на карту всіх видів шляхів.
- **Навігації**. На основі завантажених вами даних GPX-файлу навігаційні програми та спеціальні пристрої можуть розраховувати треки.
- **Обміну інформацією** про записані вами треки та маршрути на [картах на основі OpenStreetMap](https://wiki.openstreetmap.org/wiki/Track_drawing_websites).

:::info NOTE
Ваші треки будуть додані до [OSM traces](https://www.openstreetmap.org/traces) протягом години, де вони будуть доступні для вас та інших для перегляду, пошуку та використання.
:::


### Завантажити GPS-трек {#upload-gps-track}


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OpenStretMap editing plugin GPX to OSM Android](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OpenStretMap editing plugin GPX to OSM iOS](@site/static/img/plugins/osm-editing/osm_plugin_gpx_to_osm_ios.png)

</TabItem>

</Tabs>

Щоб [завантажити GPS-трек](https://wiki.openstreetmap.org/wiki/Upload_GPS_tracks), виконайте наступні кроки:

- Знайдіть потрібний трек на вкладці [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*](../personal/tracks/manage-tracks.md).
- Натисніть *меню з трьома крапками* поруч з назвою треку та виберіть *Експорт*.

**Налаштування:**

- **<Translate android="true" ids="shared_string_description"/>**. Дозволяє додати опис до треку. Опис застосовується до всіх вибраних треків. Якщо ви нічого не введете в поле, як описи використовуються назви кожного окремого треку.
- **<Translate android="true" ids="gpx_tags_txt"/>**. Цей пункт у розділі налаштувань дозволяє додати теги для ідентифікації треку. Тег за замовчуванням — "osmand", ви можете ввести додаткові теги, розділені комами.
- **<Translate android="true" ids="gpx_visibility_txt"/>**. Видимість треку для користувачів OSM:
   - *Публічний* означає, що трек є загальнодоступним і відображається в необробленому вигляді у ваших GPS-треках, списках GPS-треків та списках треків з часовими мітками. Дані, передані через API, не посилаються на вашу сторінку треку. Часові мітки точок трасування недоступні через публічний GPS API, а точки треку не впорядковані хронологічно.
   - *Ідентифікований* означає, що трек буде публічно відображатися у ваших точках GPS-треку та публічних списках GPS-треків, що означає, що інші користувачі зможуть завантажити необроблений трек та пов'язати його з вашим ім'ям користувача. Публічні дані точок треку з часовими мітками з GPS API, передані через API точок треку, будуть посилатися на вашу оригінальну сторінку треку.
   - *Відстежуваний* означає, що трек не відображається в публічних списках, але оброблені точки треку з часовими мітками з нього (які не можуть бути пов'язані з вами безпосередньо) завантажуються з публічного GPS API.
   - *Приватний* означає, що трек не відображається в публічних списках, але точки треку з нього в нехронологічному порядку доступні через публічний GPS API без часових міток.
- **<Translate android="true" ids="login_account"/>** - [Обліковий запис OSM](https://www.openstreetmap.org/login).

:::info
Ви можете вибрати більше одного треку для завантаження в OSM. Для цього натисніть значок *Завантажити в OpenStreetMap* внизу екрана, виберіть треки за допомогою прапорця, натисніть *Завантажити*, а потім *Продовжити*.
:::

### Створити файл OBF {#generate-obf-file}

Ви можете створити файл OBF за допомогою [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md#osmandmapcreator), якщо у вас є велика база даних GPX-треків. Це колекція треків з osmand.net з тегом 'gpsies', колекція завантажених треків з OpenStreetMap або ваша власна колекція.


## Пов'язані статті {#related-articles}

- [Взаємодія з картою](../../user/map/interact-with-map.md)
- [Глобальні налаштування](../../user/personal/global-settings.md)
- [Векторні карти (стилі карт)](../../user/map/vector-maps.md)

> *Цю статтю востаннє оновлено в травні 2024 року*