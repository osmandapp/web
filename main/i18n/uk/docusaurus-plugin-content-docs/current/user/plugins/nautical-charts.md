---
source-hash: b955b527f4a6288fa803d731df2f410db4fb91c6a6b0ec46ae14193d525bf995
sidebar_position: 7
title: Перегляд морської мапи
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
Плагін «Перегляд морської мапи» є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

Перегляд морської мапи — це детальне графічне представлення океанів, морів, прибережних районів і річок, яке допомагає орієнтуватися на воді та знати популярні маршрути, перешкоди на водному шляху, найближчі гавані, якірні стоянки та інші важливі орієнтири.

Морська мапа — це дуже детальна топографічна мапа, яка допомагає шкіперам керувати судном за обраним курсом на воді. Вона схожа на дорожню мапу для тих, хто подорожує автомобілем. Часто її називають «Навігаційною картою» з історичних причин, це детальне графічне представлення океанів, морів, прибережних районів і річок.

Морські мапи важливі для професійних моряків та аматорів, які орендують човен для круїзу каналами міста. Мапи надають їм різноманітну інформацію, таку як маршрути плавання, навігаційні вогні, небезпечні зони, зони, де дозволено або заборонено плавати або швартуватися тощо.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські мапи](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські мапи](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>


### Чому морська тема має значення {#why-the-nautical-theme-matters}

Усі професійні моряки зобов'язані мати офіційні морські мапи на своїх суднах. Ці мапи публікуються уповноваженими агентствами та є досить дорогими. Агентства вкладають значні кошти в оновлення мап. Вони регулярно випускають оновлення мап, але оскільки перевірка інформації та обробка оновлень займає час, морські мапи ніколи не є повністю актуальними.

Базуючись на даних [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), морські мапи OsmAnd створюються людьми, які ними користуються. Кожен користувач мапи може зробити свій внесок у мапу, додавши інформацію, яку він вважає важливою та корисною для себе, тим самим роблячи мапу більш детальною та точною, ідеальною для орієнтування або планування маршруту.


## Необхідні параметри налаштування {#required-setup-parameters}

Наступні налаштування дозволяють відобразити морську мапу на екрані:

1. [Придбайте](../plugins/index.md#purchase) та [увімкніть](../plugins/index.md#enable--disable) плагін «Перегляд морської мапи».
2. [Завантажте](#download-nautical-maps) морські мапи.
3. Встановіть [морський](#set-nautical-map-style) стиль мапи для потрібного [профілю](../personal/profiles.md).


### Встановити стиль морської мапи {#set-nautical-map-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*

![Тип морської мапи в Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*

![Тип морської мапи в iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>

Використовуйте [Легенду мапи](../../user/map-legend/nautical-map.md) для будь-яких посилань на те, що відображається на морській мапі. Вона пояснює символічні елементи на морській мапі та слугує довідником, щоб допомогти вам орієнтуватися у разі сумнівів. Встановивши стиль морської мапи, ви можете отримати найкращий вигляд завантажених та відображених морських даних.

Щоб змінити поточний стиль мапи на морський, вам потрібно зробити наступні налаштування:

1. Виберіть потрібний [профіль](../personal/profiles.md).
2. Відкрийте [Налаштувати мапу](../map/configure-map-menu.md).
3. Прокрутіть вниз до «Стиль мапи», відкрийте його та позначте **Морська**.


### Завантажити морські мапи {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Вигляд мап плагіна «Морська» в Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Вигляд мап плагіна «Морська» в iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Для оптимального представлення мапи можуть бути адаптовані до поточних потреб: можуть бути додані позначки та символи з точками глибини та, за потреби, контурами. З іншого боку, стандартні мапи з інформацією про внутрішні, прибережні та прибережні води для певного регіону можуть бути хорошим доповненням до інформації про водні шляхи на морській мапі.

Коли ви [завантажуєте](../start-with/download-maps.md) морську мапу, на мапі з'являються додаткові деталі, пов'язані з навігацією *Човном*. Деякі типи [морських мап](../start-with/download-maps.md#type-of-maps) містять такі деталі, як:

- **Морські позначки та символи.**
    Позначки та символи містять усі морські навігаційні позначки як для внутрішньої, так і для прибережної навігації. Знання цих позначок допоможе вам передбачити розташування скель, перешкод, якірних стоянок, буїв, течій, глибоких і мілководних ділянок, а також боків каналу, незалежно від напрямку тощо. Позначки та символи завантажуються один раз для всього світу.

- **Точки глибини.**
    Морські дані з пакетів точок глибини представлені числами, що відображаються на воді, які вказують на найменшу глибину в певному місці. Точки глибини доступні для кожної півкулі та деяких регіонів.

- **Контури глибини.**
    Пакети контурів глибини дозволяють визначати ділянки однакової глибини. Вони призначені для візуалізації змін рельєфу під поверхнею води. Контури глибини можна завантажити для певних областей, а потім вимкнути, якщо вони вам не потрібні.

:::info Номери глибин
Усі номери глибин на морських мапах вказані в метрах.
:::


### Вимкнути стиль морської мапи {#disable-nautical-map-style}

Щоб видалити морську мапу та відобразити одну зі звичайних мап OsmAnd, виконайте будь-яке з наступних дій:

- Вимкніть плагін «Морська».
- Змініть стиль мапи на будь-який інший, окрім *Морська*.

:::info ПРИМІТКА
Вимкнення плагіна «Морська» не видаляє завантажені морські дані, тому навіть якщо ви зміните метод візуалізації з морського на будь-який інший метод, коли морські дані завантажені, вони залишаються видимими на мапі.
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

Морська мапа може бути включена в будь-який профіль. Однак, вона найбільш цінна в [профілі «Човен»](../personal/profiles.md) і особливо в [навігації «Човном»](../navigation/routing/boat-navigation.md).


## Стиль морської мапи {#nautical-map-style}

Плагін «Морська» в OsmAnd розширює стилі векторних мап стилем «Морська». Він дозволяє відображати дані мапи відповідно до правил морських мап, наприклад: жовті ділянки для суші та мілин, світло-блакитні ділянки для мілководдя тощо. Для отримання додаткової інформації дивіться [Легенду мапи](../../user/map-legend/nautical-map.md).


### Точки глибини {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські мапи](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські мапи](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Пакети точок глибини [доступні](../start-with/download-maps.md#type-of-maps) для Європи, Північної та Південної півкуль і є інформаційними. Точки глибини вказують на зміни топографії під поверхнею води, вказуючи на найменшу глибину. Це необхідно для навігації *Човном*. Після завантаження вам потрібно увімкнути [Контури глибини](#depth-contours), щоб відобразити їх на мапі.


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

Коли морська мапа відображається на екрані, ви можете налаштувати те, що бачите:

- Показати або приховати *Контури глибини*.
- Встановити рівень деталізації інформації про морське дно: [*Ширина лінії* та *Кольорова схема лінії*](../map/vector-maps.md#-nautical-depth).

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

Дані про морське дно містять інформацію про рослинність та загальний матеріал поверхні, такий як скелясті породи, мушлі, гравій, корали, мул тощо. Завдяки міжнародній класифікації даних про морське дно існують варіанти відображення таких деталей на мапі: *простий*, *категорія*, *усі* або *опустити*. Використовуйте [Легенду мапи морської ділянки](../map-legend/nautical-map.md#seabed-area) для отримання додаткової інформації.

- **Простий** (*для версії Android*) — показує символи морських знаків відповідно до INT-1 Ref, що вказують на характер поверхні морського дна.
- **Категорія** — крім символу морського знака, також показує відповідний тег морського знака, що вказує на природний матеріал або категорію водоростей та морської трави.
- **Усі** — крім символу морського знака, тега або категорії, також показує кваліфікації, такі як дрібний, липкий, грубий тощо. Для морської трави та водоростей показує дані, позначені тегами *taxon* та *genus*.
- **Опустити** — не показує деталі морського дна.

:::info ПРИМІТКА
Для отримання додаткової інформації про класифікацію деталей поверхні та параметри візуалізації зверніться до [вікі-сторінки Seamarks на OSM](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::


## Пов'язані статті {#related-articles}

- [Імпорт/Експорт](../personal/import-export.md)
- [Схеми кольорових палітр](../personal/color-palette-schemes.md)

> *Останнє оновлення: Червень 2023*