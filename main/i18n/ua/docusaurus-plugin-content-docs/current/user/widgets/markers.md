---
source-hash: ddfc3ac037400ba4b7624aa8ca7bc26f488d3c9f1394a2591ffca630f3fb25bf
sidebar_position: 6
title:  Віджети маркерів
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';
## Огляд {#overview}
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';

import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
Маркери — це тимчасові точки, позначені на мапі у вигляді прапорців. Віджети показують *Напрямок*, *Відстань*, *Адресу* та *Орієнтовний час прибуття* до маркера. Вони дозволяють швидко знаходити маркери на мапі, а також змінювати їхнє положення. Детальніше про маркери можна прочитати в цій [статті](../personal/markers).
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';

import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';

import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
## Віджет верхньої панелі {#top-bar-widget}

Віджет **Панель маркерів мапи** (Android) / **Індикація відстані - Верхня панель** (iOS) відображає:

- Відстань від вашого поточного місцезнаходження (або центральної точки мапи / початкової точки дотику до мапи, коли місцезнаходження вимкнено) до вибраної точки, позначеної маркером на мапі ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- Стрілка того ж кольору, що й маркер, вказує напрямок від поточного місцезнаходження (або центральної точки мапи / початкової точки дотику до мапи, коли місцезнаходження вимкнено) та орієнтацію вашого пристрою в просторі (курс) до маркера.
- Адреса місцезнаходження.
- Іконка меню, що веде до [Списку маркерів мапи](../personal/markers/#map-markers-menu).

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте в цій [статті](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим положенням (або центральною точкою мапи / початковою точкою дотику до мапи, коли місцезнаходження вимкнено) та маркером.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Виберіть панель → <Translate android="true" ids="map_markers_bar"/>* |
| Натисканням | Видима частина мапи зміщується до місцезнаходження маркера. |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на мапі до відстежуваного маркера, потрібно зробити довге натискання і відразу трохи перемістити положення мапи (контекстне меню не повинно з'явитися). |
| Наближення до маркера | Якщо ваше місцезнаходження знаходиться в невеликому радіусі від маркера мапи (**< 50 м**), у полі віджета ви можете побачити кнопку з галочкою для швидкого видалення маркера мапи (позначити як пройдений). Пройдений маркер замінюється наступним маркером у списку маркерів. |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → <Translate android="true" ids="map_markers_bar"/>*|
| Натисканням | Видима частина мапи зміщується до місцезнаходження маркера. |
| Натисканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Наближення до маркера | Якщо ваше місцезнаходження знаходиться в невеликому радіусі від маркера мапи (**< 50 м**), у полі віджета ви можете побачити кнопку з галочкою для швидкого видалення маркера мапи (позначити як пройдений). Пройдений маркер замінюється наступним маркером у списку маркерів. |
| Формат відстані | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Віджети панелі {#panel-widgets}

Віджет **Маркери мапи** *(для Android)* та **Індикація відстані - Віджети** *(для iOS)* відображають:

- *Відстань від вашого поточного місцезнаходження* до вибраної точки, позначеної маркером на мапі ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- *Орієнтовний час прибуття або ETA*.
Це час (гг:хх), коли транспортний засіб або особа мають прибути до пункту призначення. Він розраховується як відстань до маркера, поділена на середню швидкість.
Середня швидкість розраховується як середнє значення всіх значень швидкості, отриманих з точок місцезнаходження за вибраний вами часовий інтервал від 15 секунд до 60 хвилин.

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте в цій [статті](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим положенням (або певною точкою на мапі) та маркером.
:::


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Panel widgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Натисканням 1 | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Натисканням 2 | Видима частина мапи зміщується до місцезнаходження маркера (Режим переходу до місцезнаходження маркера) |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на мапі до відстежуваного маркера, потрібно зробити довге натискання і відразу трохи перемістити положення мапи (контекстне меню не повинно з'явитися). |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Виберіть панель → <Translate android="true" ids="map_markers_bar"/>* |
| Натисканням | Видима частина мапи зміщується до місцезнаходження маркера. |
| Натисканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Формат відстані | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Налаштування віджетів маркерів {#configure-marker-widgets}

Загальну інформацію про налаштування віджетів маркерів мапи можна прочитати на цій [сторінці](../personal/markers#map-markers-widgets).

**Панель маркерів мапи**
Віджет верхньої панелі відображає відстань і напрямок до наступного маркера мапи від вашого поточного місцезнаходження. У налаштуваннях можна вибрати, чи буде відображатися один або два маркери у верхній частині екрана.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)

|    |     |
| :------------- | :------------- |
| Показує | Цей режим дозволяє вибрати, яку інформацію буде відображати віджет: *Відстань* або *Орієнтовний час прибуття*. |
| Інтервал | Якщо в 'Показує' вибрано *Орієнтовний час прибуття*, ця опція з'являється з вибором часу (від 15 секунд до 60 хвилин) для розрахунку ETA. |
| Натискання на віджет | Це налаштування дозволяє вибрати, яка дія буде виконана при натисканні на віджет: *Перемикання режиму* або *Перейти до місцезнаходження маркера*. |


## Вигляд на мапі {#appearance-on-the-map}

Налаштування вигляду маркерів мапи доступне як в Android, так і в iOS версіях OsmAnd. Меню "Вигляд на мапі" є загальним налаштуванням для маркерів мапи і застосовується незалежно від того, чи увімкнені віджети. Детальну інформацію можна прочитати на цій [сторінці](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два маркери зі списку маркерів мапи. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на мапі. Якщо маркер знаходиться у видимій частині мапи, стрілка не відображається. |
| <Translate android="true" ids="show_guide_line"/> | Показує напрямок, у вигляді пунктирної лінії, від певної точки на мапі до відстежуваного маркера по прямій лінії. |
| <Translate android="true" ids="one_tap_active"/> |  Одним натисканням на потрібний маркер на мапі, цей маркер переміщується на початок списку активних маркерів мапи без відкриття контекстного меню. |
| <Translate android="true" ids="keep_passed_markers"/> | Маркери, додані як група Обраних або шляхові точки GPX, позначені як Пройдені, залишаться на мапі. Якщо група не активна, маркери зникнуть з мапи. |

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

|    |     |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два маркери зі списку маркерів мапи. |
|  <Translate android="true" ids="show_direction"/> | Дозволяє вибрати, чи відображати віджети та як вони будуть виглядати: над мапою (<Translate android="true" ids="shared_string_topbar"/>) або з правого боку екрана (<Translate android="true" ids="shared_string_widgets"/>). |
|  Стрілки на мапі |  Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на мапі. Якщо маркер знаходиться у видимій частині мапи, стрілка не відображається. |
| Лінія напрямку | Показує напрямок, у вигляді пунктирної лінії, від певної точки на мапі до відстежуваного маркера по прямій лінії. |

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Налаштування екрана](./configure-screen.md)
- [Кнопки мапи](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Швидка дія](./quick-action.md)


> *Цю статтю востаннє оновлено в жовтні 2023 року*