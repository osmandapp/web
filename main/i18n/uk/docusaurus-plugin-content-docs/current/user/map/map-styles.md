---
source-hash: 887e37d512e29933bbd3ee7af217024887ffcc5ac636c9ddc52e7480299a8d1b
sidebar_position: 6
title:  Map Styles (Vector Maps)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Огляд {#overview}

Стилі карти визначають, як дані векторної карти відображаються в OsmAnd. Стиль контролює візуальний вигляд об’єктів карти, таких як дороги, будівлі, використання землі, водойми та точки інтересу, включаючи кольори, шаблони ліній та мітки.

OsmAnd надає кілька вбудованих стилів, оптимізованих для різних видів діяльності. Ви можете перемикати стилі в меню [Налаштування карти](./configure-map-menu.md) та коригувати параметри стилю. Стилі векторних карт підтримують перемикання між денним і нічним режимами.

Крім вбудованих стилів, OsmAnd підтримує користувацькі стилі карти. Користувацькі стилі базуються на правилах рендерингу та можуть бути імпортовані, поширені та модифіковані для виділення потрібної інформації.


## Вбудовані стилі карти {#default-map-styles}

OsmAnd пропонує вам багато стилів карти та шарів даних, які підходять за замовчуванням. Цей розділ описує основні для денного та нічного режимів.

**Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

**iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*

### OsmAnd {#osmand}

![Стиль карти OsmAnd](@site/static/img/map/map-style-osmand-with-routes.png)  

Стандартний стиль рендерингу карти OsmAnd балансує деталізацію та простоту, роблячи його ідеальним для міських та outdoor-експлорацій. Він деталізує міські особливості, такі як вулиці, будівлі та зупинки транспорту, водночас спрощуючи візуальний безлад, роблячи карти чіткішими.  

Ключові переваги включають картографування маршрутів, якість поверхні, обмеження доступу, дорожні знаки, рендеринг шляхів за шкалою SAC, спортивні споруди та топографічні деталі, такі як лінії контуру.

### Touring View {#touring-view}

![Стиль карти Touring view](@site/static/img/map/map-style-touring.png)

Стиль Touring з високим контрастом і максимальною деталізацією. Включає всі опції стандартного стилю OsmAnd, водночас відображаючи якомога більше деталей, зокрема дороги, стежки та інші шляхи пересування. Чітке розрізнення типів доріг у *туристичному атласі*. Підходить для дня, ночі та використання на відкритому повітрі.

### UniRS and LightRS {#unirs-and-lightrs}

<Translate android="true" ids="unirs_render_descr"/>

Стилі UniRS та LightRS — це авторські стилі, які відображають базову інформацію карти, але в різних колірних схемах.  

- **Стиль UniRS**. Цей стиль є модифікованою версією стандартного для посилення контрасту пішохідних та велосипедних шляхів. Він зберігає класичну колірну схему Mapnik.  

    ![Стиль карти LightRS](@site/static/img/map/map-style-lightrs.png)

- **Стиль LightRS**. Це простий стиль для водіння з м’яким нічним режимом. Він виділяє дороги контрастним помаранчевим кольором, приглушує вторинні об’єкти карти та відображає топографічні особливості, такі як лінії контуру.

    ![Стиль карти UniRS](@site/static/img/map/map-style-unirs.png)

### Nautical {#nautical}

![Стиль карти Nautical](@site/static/img/map/map-style-nautical.png)

Це стиль морської навігації з буями, маяками, річковими маршрутами, морськими шляхами, знаками, гаванями та морськими мітками. Докладніше в розділі [Стиль карти Nautical](../plugins/nautical-charts.md#nautical-map-style).

### Marine {#marine}

![Стиль карти Marine](@site/static/img/map/map-style-marine.png)

Це просунутий стиль морської карти з секторами світла, повними характеристиками маяків та іншими детальними морськими особливостями для реалістичної та точної морської навігації. Докладніше в розділі [Стиль карти Marine](../plugins/nautical-charts.md#marine-map-style).

### Winter and Ski {#winter-and-ski}

![Стиль карти Winter & Ski](@site/static/img/map/map-style-winter-ski.png)

Це стиль для лижних видів спорту, який описує траси, підйомники та лижні стежки, а також приховує вторинні об’єкти карти. **Стиль Winter and Ski** призначений для допомоги в навігації під час зимових видів спорту.  

Ви можете бачити лижні траси та інші деталі, такі як складність трас і мітки підйомників. Ключові переваги включають зручне відображення трас, підйомників та інших лижних особливостей. Менше відволікаючих вторинних об’єктів карти. Докладніше в статті [Лижні карти](../plugins/ski-maps.md).

### Topo {#topo}

![Стиль карти Topo](@site/static/img/map/map-style-topo.png)

Цей стиль призначений для походів, кемпінгу та велосипедних прогулянок у природі. Він має контрастні дороги та природні особливості, різні типи стежок, розширені опції ліній контуру та додаткові деталі. Він читабельний на відкритому повітрі. Налаштування *Surface Integrity* дозволяє розрізняти якість дороги.

### OSM-carto {#osm-carto}

![Стиль карти OSM-carto](@site/static/img/map/map-style-osm-carto.png)

Цей стиль імітує стандартний [веб-стиль OpenStreetMap](https://www.openstreetmap.org/). Джерельний код веб-версії доступний на [Github](https://github.com/gravitystorm/openstreetmap-carto), код OsmAnd доступний на [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desert {#desert}

![Стиль карти Desert](@site/static/img/map/map-style-desert.png)

Призначений для пустель та інших малонаселених регіонів, пропонує детальнішу інформацію карти.

### Offroad {#offroad}

![Стиль карти Offroad](@site/static/img/map/map-style-offroad.png)

Призначений для офроуд-навігації, цей стиль базується на макеті карти [Topo](#topo) і добре працює з супутниковими зображеннями як підкладкою. Він має тонші основні дороги для виділення стежок, шляхів, велосипедних маршрутів та інших офроуд-стежок, роблячи його ідеальним для дослідження неасфальтованих маршрутів у сільських або віддалених районах.

### Snowmobile {#snowmobile}

![Стиль карти Snowmobile](@site/static/img/map/map-style-snowmobile.png)

Спеціально для снігоходної навігації, цей стиль виділяє стежки, дороги та шляхи, дружні до снігоходів. Він виділяє спеціалізовані стежки в засніжених регіонах, пропонуючи чітку навігацію по засніжених теренах, де стандартні дороги можуть бути недоступними. 


## Користувацький стиль карти {#custom-map-style}

Якщо у вас є особистий або сторонній користувацький стиль карти, створений відповідно до [Специфікації](../../technical/osmand-file-formats/osmand-rendering-style.md), ви можете встановити його на свій пристрій цими способами:

- Скопіюйте файл `.render.xml` на свій пристрій і відкрийте його в OsmAnd.
- Використовуйте [стандартні діалоги імпорту/експорту](../personal/import-export.md) для експорту або імпорту стилів рендерингу. Якщо ви створите пакет `.osf`, він працюватиме як плагін, яким ви можете поділитися з іншими.
- Після встановлення ви можете вибрати стиль карти з меню.

Ви також можете переглядати приклади користувацьких стилів карти, створених іншими користувачами. Список публічно доступних стилів спільноти надано [тут](../troubleshooting/resources.md#map-styles).


## Пов’язані статті {#related-articles}

- [Налаштування карти](../map/configure-map-menu.md)
- [Векторні карти](../map/vector-maps.md)
- [Ресурси та налаштування](../troubleshooting/resources.md)