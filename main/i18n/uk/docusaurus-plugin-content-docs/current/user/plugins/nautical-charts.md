---
source-hash: a02d9cb4bcf03eac754135bc30cffd2a4ebb273a07ccc896020923e70705842f
sidebar_position: 7
title:  Морський вигляд карти
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';



## Огляд {#overview}

:::info Платна функція
Плагін "Морський вигляд карти" є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

Морський вигляд карти — це детальне графічне представлення океанів, морів, прибережних зон та річок, яке допомагає орієнтуватися на воді та знати популярні маршрути, перешкоди на водному шляху, найближчі гавані, місця для стоянки на якорі та інші важливі орієнтири.

Морська карта — це дуже детальна топографічна карта, яка допомагає шкіперам орієнтуватися на судні за обраним курсом на воді. Вона схожа на дорожню карту для тих, хто подорожує автомобілем. Часто її називають *'Навігаційною картою'* з історичних причин, це детальне графічне представлення океанів, морів, прибережних зон та річок.

Морські карти важливі для професійних моряків та аматорів, які орендують човен для круїзу по міських каналах. Карти надають їм різноманітну інформацію, таку як маршрути плавання, навігаційні вогні, небезпечні зони, зони, де дозволено або заборонено плавати або швартуватися тощо.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські карти](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські карти](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Чому морська тема важлива {#why-the-nautical-theme-matters}

Усі професійні моряки зобов'язані мати офіційні морські карти на своїх суднах. Ці карти публікуються уповноваженими агентствами та є досить дорогими. Агентства вкладають значні кошти в оновлення карт. Вони регулярно випускають оновлення до карт, але оскільки перевірка інформації та обробка оновлень займає час, морські карти ніколи не є повністю актуальними.

На основі даних [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) морські карти OsmAnd створюються людьми, які їх використовують. Кожен користувач карти може зробити свій внесок у карту, додаючи інформацію, яку він вважає важливою та корисною для себе, тим самим роблячи карту більш детальною та точною, ідеальною для орієнтування або планування маршруту.


## Необхідні параметри налаштування {#required-setup-parameters}

Наступні налаштування дозволяють відобразити морську карту на екрані:

1. [Придбайте](../plugins/index.md#purchase) та [увімкніть](../plugins/index.md#enable--disable) плагін "Морський вигляд карти".
2. [Завантажте](#download-nautical-maps) морські карти.
3. Встановіть [морський](#set-nautical-map-style) стиль карти для потрібного [профілю](../personal/profiles.md).


### Встановіть морський стиль карти {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Тип морської карти в Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Тип морської карти в iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Використовуйте [Легенду карти](../../user/map-legend/nautical-map.md) для будь-яких посилань на те, що відображається на морській карті. Вона пояснює символічні елементи на морській карті та слугує довідником, який допоможе вам орієнтуватися, якщо ви сумніваєтеся. Встановивши морський стиль карти, ви можете отримати найкращий вигляд завантажених та відображених морських даних.

Щоб змінити поточний стиль карти на морський, потрібно зробити наступні налаштування:

1. Виберіть потрібний [профіль](../personal/profiles.md).
2. Відкрийте [Налаштувати карту](../map/configure-map-menu.md).
3. Прокрутіть до "Стиль карти", відкрийте його та встановіть прапорець **Морський**.


### Завантажити морські карти {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Перегляд карт плагіна "Морський" для Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Перегляд карт плагіна "Морський" для iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Для оптимального представлення карти можуть бути адаптовані до поточних потреб: можуть бути додані позначки та символи з точками глибини та, за потреби, контурами. З іншого боку, стандартні карти з інформацією про внутрішні, прибережні та прибережні води для певного регіону можуть бути хорошим доповненням до інформації про водні шляхи на морській карті.

Коли ви [завантажуєте](../start-with/download-maps.md) морську карту, на карті з'являються додаткові деталі, пов'язані з навігацією *човном*. Деякі типи [морських карт](../start-with/download-maps.md#type-of-maps) містять такі деталі, як:

- **Морські позначки та символи.**
    Позначки та символи містять усі морські навігаційні позначки як для внутрішньої, так і для прибережної навігації. Знання цих позначок допоможе вам передбачити розташування скель, перешкод, місць для стоянки на якорі, буїв, течій, глибоких та мілководних ділянок, а також сторін каналу, незалежно від напрямку тощо. Позначки та символи завантажуються один раз для всього світу.

- **Точки глибини.**
    Морські дані з пакетів точок глибини представлені числами, що відображаються на воді, які вказують на найменшу глибину в певному місці. Точки глибини доступні для кожної півкулі та деяких регіонів.

- **Контури глибини.**
    Пакети контурів глибини дозволяють визначати ділянки однакової глибини. Вони призначені для візуалізації змін рельєфу під поверхнею води. Контури глибини можна завантажити для певних ділянок, а потім вимкнути, якщо вони вам не потрібні.

:::info Номери глибин
Усі номери глибин на морських картах вказані в метрах.
:::


### Вимкнути морський стиль карти {#disable-nautical-map-style}

Щоб видалити морський стиль та відобразити одну зі звичайних карт OsmAnd, виконайте будь-яку з наступних дій:

- Вимкніть плагін "Морський".
- Змініть стиль карти на будь-який інший, крім *Морський*.

:::info ПРИМІТКА
Вимкнення плагіна "Морський" не видаляє завантажені морські дані, тому навіть якщо ви зміните метод відображення з морського на будь-який інший метод, коли морські дані завантажені, вони залишаються видимими на карті.
:::


## Морський профіль {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Контури морської глибини в Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Контури глибини в iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Морська карта може бути включена в будь-який профіль. Однак, вона найбільш цінна в [профілі "Човен"](../personal/profiles.md) і особливо в [навігації човном](../navigation/routing/boat-navigation.md).


## Морський стиль карти {#nautical-map-style}

Плагін "Морський" в OsmAnd розширює стилі векторних шарів карти морським стилем. Він дозволяє відображати дані карти відповідно до правил морської карти, наприклад: жовті ділянки для суші та мілин, світло-блакитні ділянки для мілководдя тощо. Для отримання додаткової інформації дивіться [Легенду карти](../../user/map-legend/nautical-map.md).


### Точки глибини {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські карти](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські карти](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

[Пакети](../start-with/download-maps.md#type-of-maps) точок глибини доступні для Європи, Північної та Південної півкуль і є інформативними. Точки глибини вказують на зміни топографії під поверхнею води, показуючи найменшу глибину. Це необхідно для навігації *човном*. Після завантаження вам потрібно увімкнути [Контури глибини](#depth-contours), щоб відобразити їх на карті.


### Контури глибини {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Контури морської глибини в Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Контури глибини в iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Коли морська карта відображається на екрані, ви можете налаштувати те, що бачите:

- Показати або приховати *Контури глибини*.
- Встановлення рівня деталізації інформації про морське дно: [*Ширина лінії* та *Кольорова схема лінії*](../map/vector-maps.md#-nautical-depth).

:::info ПРИМІТКА
Ви можете допомогти застосунку OsmAnd збільшити базу даних контурів глибини, додавши свою інформацію за допомогою [OpenSeaMap](https://map.openseamap.org/)
:::


### Деталі морського дна {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Деталі морського дна](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Деталі морського дна](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Дані про морське дно містять інформацію про рослинність та загальний матеріал поверхні, такий як скелясті породи, мушлі, гравій, корали, мул тощо. Завдяки міжнародній класифікації даних про морське дно існують варіанти відображення таких деталей на карті: *простий*, *категорія*, *усі* або *опустити*. Для отримання додаткової інформації дивіться [Легенду карти морського дна](../map-legend/nautical-map.md#seabed-area).

- **Простий** (*для версії Android*) - показує символи морських знаків відповідно до INT-1 Ref, що вказують на характер поверхні морського дна.
- **Категорія** - крім символу морського знака, також показує відповідний тег морського знака, що вказує на природний матеріал, або категорію водоростей та морської трави.
- **Усі** - крім символу морського знака, тега або категорії, також показує кваліфікації, такі як дрібний, липкий, грубий тощо. Для морської трави та водоростей показує дані, позначені тегами *taxon* та *genus*.
- **Опустити** - не показує деталі морського дна.

:::info ПРИМІТКА
Для отримання додаткової інформації про класифікацію деталей поверхні та параметри відображення зверніться до [вікі Seamark OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Схеми кольорових палітр](../personal/color-palette-schemes.md)