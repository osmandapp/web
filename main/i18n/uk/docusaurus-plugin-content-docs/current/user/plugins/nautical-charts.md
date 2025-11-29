---
source-hash: 9ea8dcdea560c84f7300f1fcf64736d6b3483b4296ea97397a60522ba65d2423
sidebar_position: 7
title:  Морські карти
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
Плагін "Морські карти" є [платною функцією](../purchases/index.md) застосунку OsmAnd.
:::

Морські карти — це детальне графічне зображення океанів, морів, прибережних районів та річок, яке допомагає орієнтуватися на воді та знати популярні маршрути, перешкоди на водному шляху, найближчі гавані, якірні стоянки та інші важливі орієнтири.

Морська карта — це дуже детальна топографічна карта, яка допомагає шкіперам вести судно обраним курсом на воді. Вона схожа на дорожню карту для тих, хто подорожує автомобілем. Часто її називають *"Chart"* (Карта) з історичних причин, це детальне графічне зображення океанів, морів, прибережних районів та річок.

Морські карти важливі для професійних моряків та аматорów, які орендують човен для прогулянок міськими каналами. Карти надають їм різноманітну інформацію, таку як маршрути плавання, навігаційні вогні, небезпечні зони, зони, де дозволено або заборонено плавати чи швартуватися тощо.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські карти](@site/static/img/plugins/nautical-charts/nautical_pl_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські карти](@site/static/img/plugins/nautical-charts/nautical_pl_4.png)

</TabItem>

</Tabs>

### Чому морська тема важлива {#why-the-nautical-theme-matters}

Усі професійні моряки зобов'язані мати на своїх суднах офіційні морські карти. Ці карти видаються уповноваженими агентствами і є досить дорогими. Агентства вкладають значні кошти в оновлення карт. Вони регулярно випускають оновлення до карт, але оскільки перевірка інформації та обробка оновлень потребує часу, морські карти ніколи не бувають повністю актуальними.

На основі даних [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap), морські карти OsmAnd створюються людьми, які ними користуються. Кожен користувач карти може зробити свій внесок у карту, додаючи інформацію, яку він вважає важливою та корисною для себе, тим самим роблячи карту більш детальною та точною, ідеальною для орієнтування або планування маршруту.

## Необхідні параметри налаштування {#required-setup-parameters}

Наступні налаштування дозволяють відобразити морську карту на екрані:

1. [Придбайте](../plugins/index.md#purchase) та [Увімкніть](../plugins/index.md#enable--disable) плагін "Морські карти".
2. [Завантажте](#download-nautical-maps) морські карти.
3. Встановіть [морський](#set-nautical-map-style) стиль карти для потрібного [профілю](../personal/profiles.md).

### Встановити морський стиль карти {#set-nautical-map-style}

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

Використовуйте [Легенду карти](../../user/map-legend/nautical-map.md) для будь-яких посилань на те, що показано на морській карті. Вона пояснює символічні елементи на морській карті та слугує довідником, який допоможе вам орієнтуватися в разі сумнівів. Встановивши морський стиль карти, ви можете отримати найкращий вигляд завантажених та відображених морських даних.

Щоб змінити поточний стиль карти на морський, вам потрібно виконати наступні налаштування:

1. Виберіть потрібний [профіль](../personal/profiles.md).
2. Відкрийте [Налаштувати карту](../map/configure-map-menu.md).
3. Прокрутіть вниз до "Стиль карти", відкрийте його та виберіть **Морський**.

### Завантажити морські карти {#download-nautical-maps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*

![Вигляд карт плагіна "Морські карти" в Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*

![Вигляд карт плагіна "Морські карти" в iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

Для оптимального представлення карти можна адаптувати до поточних потреб: можна додати знаки та символи з точками глибин і, за потреби, контурами. З іншого боку, стандартні карти з інформацією про внутрішні, прибережні та прибережні води для певного регіону можуть бути хорошим доповненням до інформації про водні шляхи на морській карті.

Коли ви [завантажуєте](../start-with/download-maps.md) морську карту, на карті з'являється більше деталей, пов'язаних з навігацією *Човном*. Деякі типи [морських карт](../plugins/nautical-charts/#nautical-map-style) містять такі деталі, як:

- **Морські знаки та символи.**  
    Знаки та символи містять усі морські навігаційні знаки як для внутрішньої, так і для прибережної навігації. Знання цих знаків допоможе вам передбачити розташування скель, перешкод, якірних стоянок, буїв, течій, глибоких і мілководних ділянок, а також сторін каналу, незалежно від напрямку тощо. Знаки та символи завантажуються один раз для всього світу.

- **Точки глибин.**  
    Морські дані з пакетів точок глибин представлені цифрами, що відображаються на воді, які вказують на найменшу глибину в певному місці. Точки глибин доступні для кожної півкулі та деяких регіонів.

- **Контури глибин.**  
    Пакети контурів глибин дозволяють визначати ділянки однакової глибини. Вони призначені для візуалізації змін рельєфу під поверхнею води. Контури глибин можна завантажити для певних областей, а потім вимкнути, якщо вони вам не потрібні.

:::info Числа глибин
Усі числа глибин на морських картах вказані в метрах.
:::

### Вимкнути морський стиль карти {#disable-nautical-map-style}

Щоб видалити морський стиль і відобразити одну зі звичайних карт OsmAnd, виконайте одну з наступних дій:

- Вимкніть плагін "Морські карти".
- Змініть стиль карти на будь-який інший, крім *Морського*.

:::info ПРИМІТКА
Вимкнення плагіна "Морські карти" не видаляє завантажені морські дані, тому, навіть якщо ви зміните метод рендерингу з морського на будь-який інший, коли морські дані завантажені, вони залишаються видимими на карті.
:::

## Морський профіль {#nautical-profile}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Морські контури глибин в Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Контури глибин в iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>

Морську карту можна включити в будь-який профіль. Однак, вона є найціннішою в [профілі "Човен"](../personal/profiles.md) і особливо в [навігації для човнів](../navigation/routing/boat-navigation.md).

## Морський стиль карти {#nautical-map-style}

Плагін "Морські карти" в OsmAnd розширює стилі векторних шарів карти морським стилем. Це дозволяє відображати дані карти відповідно до правил морських карт, наприклад: жовті зони для суші та мілин, світло-блакитні зони для мілководдя тощо. Для отримання додаткової інформації див. [Легенду карти](../../user/map-legend/nautical-map.md).

### Точки глибин {#depth-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Морські карти](@site/static/img/plugins/nautical-charts/and_depth_points.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Морські карти](@site/static/img/plugins/nautical-charts/ios_depth_points.png)

</TabItem>

</Tabs>

Пакети [точок глибин](../start-with/download-maps.md#overview) доступні для Європи, Північної та Південної півкуль і є інформаційними. Точки глибин вказують на зміни рельєфу під поверхнею води, позначаючи найменшу глибину. Це необхідно для навігації *Човном*. Після завантаження вам потрібно увімкнути [Контури глибин](#depth-contours), щоб відобразити їх на карті.

### Контури глибин {#depth-contours}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*

![Морські контури глибин в Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Контури глибин в iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>

Коли на екрані відображається морська карта, ви можете налаштувати те, що ви бачите:

- Показати або приховати *Контури глибин*.
- Налаштування рівня деталізації інформації про морське дно: [*Ширина лінії* та *Колірна схема лінії*](../map/vector-maps.md#-nautical-depth).

:::info ПРИМІТКА
Ви можете допомогти застосунку OsmAnd збільшити базу даних контурів глибин, додавши свою інформацію за допомогою [OpenSeaMap](https://map.openseamap.org/)
:::

### Деталі морського дна {#seabed-details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*

![Деталі морського дna](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*

![Деталі морського дna](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>

Дані про морське дно містять інформацію про рослинність та загальний матеріал поверхні, такий як скелясті породи, черепашки, гравій, корали, мул тощо. Через міжнародну класифікацію даних про морське дно, існують опції для відображення таких деталей на карті: *простий*, *категорія*, *всі* або *пропустити*. Використовуйте [Легенду карти морського дна](../map-legend/nautical-map.md#seabed-area) для отримання додаткової інформації.

- **Простий** (*для версії Android*) - показує морські знаки відповідно до INT-1 Ref, вказуючи на характер поверхні морського дна.
- **Категорія** - на додаток до морського знака, також показує відповідний тег морського знака, що вказує на природний матеріал, або категорію водоростей та морської трави.
- **Всі** - на додаток до морського знака, тегу або категорії, також показує уточнення, такі як дрібний, липкий, грубий тощо. Для морської трави та водоростей показує дані, позначені тегами *taxon* та *genus*.
- **Пропустити** - не показує деталі морського дna.

:::info ПРИМІТКА
Для отримання більш детальної інформації про класифікацію деталей поверхні та опції рендерингу, зверніться до [вікі OSM про морські знаки](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::

## Пов'язані статті {#related-articles}

- [Імпорт / Експорт](../personal/import-export.md)
- [Колірні схеми](../personal/color-palette-schemes.md)