---
source-hash: b599907cba592e6dde8690dfdb094cf96c72ea97884117fcc673480f01e0c657
sidebar_position: 2
title:  Кнопки карти
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

Кнопки карти, включаючи *Масштаб*, *Пошук*, *Напрямки*, *Компас*, *Моє місцезнаходження*, *3D-режим* та *Меню*, є основними елементами керування для взаємодії з картою. Кожна кнопка пропонує певні функції для покращення навігації та використання карти.


## Моє місцезнаходження та Масштаб {#my-location-and-zoom}

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

Використовуйте ці кнопки для керування відображенням карти на екрані вашого пристрою:

- **Моє місцезнаходження**. Показує, чи синхронізовано центр карти з поточним географічним розташуванням вашого пристрою.
- **Масштаб**. Дозволяє налаштувати рівень масштабування карти, щоб надати більше або менше деталей.
Якщо ви бажаєте отримати більше інформації про використання цих кнопок, ви можете переглянути статтю [Взаємодія з картою](../map/interact-with-map.md#my-location-and-zoom).


## Напрямки {#directions}

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

Кнопка **Напрямки** є важливою для планування маршруту та навігації:

- [Побудувати маршрут](../navigation/index.md). Використовуйте цю кнопку для створення маршруту.
- [Почати навігацію](../navigation/index.md). Розпочати покрокову навігацію.
- У режимі навігації кнопка *Напрямки* за замовчуванням не відображається, але з'являється після короткого натискання на карту.

Орієнтовні стани кнопки *Напрямки*:

- *Сіра іконка за замовчуванням* вказує на те, що маршрут ще не створено. Натискання цієї іконки відкриває функцію [налаштування маршруту](../navigation/setup/route-navigation.md).
- *Синя іконка за замовчуванням* вказує на те, що маршрут побудовано, але навігація ще не розпочалася. Натискання цієї іконки відкриває функцію [налаштування маршруту](../navigation/setup/route-navigation.md#start--stop-navigation).
- *Синя іконка зі стрілкою* вказує на те, що навігація активна. Натискання цієї іконки відкриває [деталі поточного маршруту](../navigation/setup/route-details.md).


## Налаштувати карту {#configure-map}

![Configure Map](@site/static/img/widgets/configure_map.png)

Кнопка **Налаштувати карту** надає доступ до [меню Налаштувати карту](../map/configure-map-menu.md). Іконка також відображає [Поточний профіль застосунку](../personal/profiles.md), що дозволяє ідентифікувати та перемикатися між різними профілями.


## Головне меню {#main-menu}

![Main menu button](@site/static/img/widgets/main_menu_button.png)

Кнопка [**Головне меню**](../start-with/main-menu.md) відкриває загальне меню, надаючи доступ до [всіх функцій застосунку](../start-with/main-menu.md). У режимі навігації ця кнопка за замовчуванням прихована і стає видимою після короткого натискання на карту.


## Пошук {#search}

![Search button](@site/static/img/widgets/search_button.png)

Кнопка Пошук пропонує швидкий доступ до [функцій пошуку](../search/index.md), дозволяючи знаходити місця, об'єкти інтересу та іншу інформацію безпосередньо з карти.


## Компас {#compass}

Кнопка Компас вказує орієнтацію карти на екрані вашого пристрою. Для отримання додаткової інформації зверніться до статті [Взаємодія з картою](../map/interact-with-map.md#map-orientation--compass).


### Режими орієнтації карти {#map-orientation-modes}

- ![Compass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Повернуто вручну**. У цьому режимі ви можете вручну повертати карту за допомогою [жесту двома пальцями (дотик двома пальцями та обертання)](../map/interact-with-map.md#gestures) відповідно до ваших уподобань. Орієнтація карти не залежить від напрямку руху або компаса пристрою, а визначається вами. Режим ручного обертання встановлено за замовчуванням.

- ![Compass](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Напрямок руху**. У цьому режимі карта орієнтується відповідно до напрямку вашого руху, відомого з даних GPS. Наприклад, якщо ви повертаєте праворуч, карта також повертається так, щоб права сторона екрана відповідала напрямку руху. Для отримання детальної інформації перейдіть до розділу [Повернути карту за напрямком](../map/interact-with-map#rotate-map-by-bearing).

- ![Compass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Напрямок компаса**. Іконка на кнопці вказує на справжню Північ, а карта рухається відповідно до орієнтації компаса вашого пристрою. Таким чином, північ карти відповідає справжній півночі, і ви можете бачити орієнтацію карти відносно навколишньої місцевості. Ваш пристрій повинен бути в максимально горизонтальному положенні. Якщо ваш пристрій не має датчика компаса, орієнтація карти залишається незмінною.

- ![Compass](@site/static/img/widgets/map_butt_north_up_ios.png)  
**Північ вгорі**. У цьому режимі карта зафіксована (з жорстким блокуванням) у напрямку Півночі, яка є верхнім краєм вашого пристрою. Незалежно від напрямку руху пристрою, карта залишається статичною, і ви можете бачити своє положення відносно навколишнього середовища. Карта не має автоматичного або ручного обертання.

### Поведінка натискання компаса {#compass-tapping-behavior}

Кнопка компаса надає кілька дій для керування орієнтацією карти:

- **Одне натискання**. *Одне натискання* [кнопки Компас](../widgets/map-buttons.md#compass) (розташованої у верхньому лівому куті екрана, коли [видима](../widgets/map-buttons.md#display-options)) миттєво переорієнтує карту *на Північ* у всіх режимах орієнтації карти. Навіть якщо карта знаходиться в режимі *Напрямок компаса*, вона все одно на мить повертається, а потім повертається до динамічної орієнтації цього режиму.

- **Подвійне натискання**. Щоб швидко перемикатися між режимами орієнтації карти, наприклад, слідувати напрямку GPS або обертатися разом з пристроєм, *двічі натисніть* [кнопку Компас](../widgets/map-buttons.md#compass) (коли [видима](../widgets/map-buttons.md#display-options)).

- **Довге натискання**. *Довгим натисканням* [кнопки Компас](../widgets/map-buttons.md#compass) (коли [видима](../widgets/map-buttons.md#display-options)) ви можете відкрити список усіх режимів орієнтації карти та вибрати потрібний. Цей список також можна відкрити в [Налаштуваннях профілю](../personal/profiles.md#appearance).


### Параметри відображення {#display-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

Іконка компаса на кнопці завжди вказує на Північ. Ви можете вибрати, як кнопка компаса відображається на екрані.

- **Завжди видима**. Кнопка не зникає з екрана.
- **Завжди прихована**. У цьому випадку ви не можете швидко змінити орієнтацію карти, але кнопка не займатиме місце на екрані.
- **Видима, якщо карта повернута**. Кнопка не відображається, поки компас вказує на Північ у верхньому краї вашого пристрою.  


## 3D-режим {#3d-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Перейти до: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. Якщо для кнопки вибрано цей режим, вам потрібно використовувати жест, щоб змінити вигляд карти. Торкніться карти двома пальцями та перемістіть їх вгору та вниз, щоб налаштувати нахил карти.  
- *<Translate android="true" ids="shared_string_visible"/>*. Кнопка завжди відображається на екрані карти.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. Кнопка відображається на екрані карти, коли ви змінюєте вигляд карти за допомогою жесту [*двома пальцями та переміщенням*](../map/interact-with-map.md#gestures).  

### Додаткові налаштування {#additional-settings}

1. **Відобразити кнопку**. (*Для Android*) Налаштування для кнопки *3D-режим* з'являється у списку екрана налаштування лише в тому випадку, якщо вибрано механізм рендерингу карти [Версія 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine).

2. **Зберігає кут**. Після переходу в 3D-режим та ручної зміни кута за допомогою жесту, кут зберігається та використовується наступного разу, коли активується 3D-режим. Ця опція зберігається лише для профілю, вибраного на той момент.

3. **Переміщення**. Ви можете розмістити кнопку в будь-якому місці на екрані вашого пристрою. Для цього утримуйте кнопку і, не відриваючи пальця, перетягніть її в потрібне місце.

4. **Положення кнопки**. Положення кнопки на карті на екрані застосунку зберігається окремо для кожного профілю.

5. **Рекомендація**. Рекомендується завантажити та увімкнути [карту рельєфу](../plugins/topography.md#hillshade-slope-and-altitude-layers) для вибраного регіону.


## Користувацькі кнопки {#custom-buttons}

[Віджет швидкої дії](./quick-action.md) — це настроювана кнопка з різними типами дій, які можна призначити. Також можна мати кілька [Користувацьких кнопок](./quick-action.md#custom-buttons).


## Вигляд кнопок карти {#map-button-appearance}

<InfoAndroidOnly/>

| Кнопки за замовчуванням | Користувацькі кнопки |
| :--- | :--- |
| ![Map Button Appearance](@site/static/img/widgets/map_butt_appearance_default_andr.png) | ![Map Button Appearance](@site/static/img/widgets/map_butt_appearance_custom_andr.png) |

Налаштування вигляду кнопок карти доступні через наступні меню:

- *Меню → Налаштувати екран → Кнопки → Кнопки за замовчуванням*
- *Меню → Налаштувати екран → Користувацькі кнопки → Швидка дія → меню з трьома крапками → Вигляд*

Налаштування вигляду кнопок дозволяє налаштувати розмір, форму, іконку та прозорість фону як для [Швидкої дії (Користувацькі кнопки)](../widgets/quick-action.md#button-appearance), так і для [Кнопок за замовчуванням](../widgets/configure-screen.md#button-appearance). Ця гнучкість дозволяє персоналізувати інтерфейс відповідно до ваших уподобань та покращити зручність використання.


## Пов'язані статті {#related-articles}

- [Налаштувати екран](./configure-screen.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Віджети маркерів](./markers.md)
- [Швидка дія](./quick-action.md)