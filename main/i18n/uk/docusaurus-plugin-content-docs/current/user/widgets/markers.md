---
source-hash: 9e178d46c34474107d426605f944341538b486f2bc4997dab4e5643b50cb3990
sidebar_position: 6
title: Віджети маркерів
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

Маркери — це тимчасові точки, позначені на карті у вигляді прапорців. Віджети показують *напрямок*, *відстань*, *адресу* та *орієнтовний час прибуття* до маркера. Вони дозволяють швидко знаходити маркери на карті, а також змінювати їхнє положення. Детальніше про маркери можна прочитати у цій [статті](../personal/markers).


## Віджет верхньої панелі {#top-bar-widget}

Віджет **Панель маркерів карти** (Android) / **Показник відстані - Верхня панель** (iOS) відображає:

- Відстань від вашого поточного місцеперебування (або центральної точки карти / початкової точки дотику карти, коли місцеперебування вимкнено) до вибраної точки, позначеної маркером на карті ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- Стрілка того ж кольору, що й маркер, вказує напрямок від поточного місцеперебування (або центральної точки карти / початкової точки дотику карти, коли місцеперебування вимкнено) та орієнтацію пристрою в просторі (напрямок) до маркера.
- Адреса місцеперебування.
- Значок меню, що веде до [Списку маркерів карти](../personal/markers/#map-markers-menu).

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте у цій [статті](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим місцеперебуванням (або центральною точкою карти / початковою точкою дотику карти, коли місцеперебування вимкнено) та маркером.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Вибрати панель → <Translate android="true" ids="map_markers_bar"/>* |
| Натисканням | Видима частина карти зміщується до місцеперебування маркера. |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на карті до відстежуваного маркера, потрібно довго натиснути і відразу трохи перемістити положення карти (контекстне меню не повинно з'являтися). |
| Наближення до маркера | Якщо ваше місцеперебування знаходиться в невеликому радіусі від маркера карти (**< 50 м**), у полі віджета ви можете побачити кнопку з галочкою, щоб швидко видалити маркер карти (позначити як пройдений). Перевірений маркер замінюється наступним маркером у списку маркерів. |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Вибрати панель → <Translate android="true" ids="map_markers_bar"/>*|
| Натисканням | Видима частина карти зміщується до місцеперебування маркера. |
| Натисканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Наближення до маркера | Якщо ваше місцеперебування знаходиться в невеликому радіусі від маркера карти (**< 50 м**), у полі віджета ви можете побачити кнопку з галочкою, щоб швидко видалити маркер карти (позначити як пройдений). Перевірений маркер замінюється наступним маркером у списку маркерів. |
| Формат відстані | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Віджети панелі {#panel-widgets}

Віджет **Маркери карти** *(для Android)* та **Показник відстані - Віджети** *(для iOS)* відображає:

- *Відстань від вашого поточного місцеперебування* до вибраної точки, позначеної маркером на карті ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- *Орієнтовний час прибуття або ETA*.
Це час (гг:хх), коли транспортний засіб або особа має прибути до пункту призначення. Він розраховується як відстань до маркера, поділена на середню швидкість.
Середня швидкість розраховується як середнє значення всіх значень швидкості, отриманих з точок місцеперебування за вибраний вами інтервал часу від 15 секунд до 60 хвилин.

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте у цій [статті](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим місцеперебуванням (або певною точкою на карті) та маркером.
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Panel widgets](@site/static/img/widgets/map_markers_widget-02.png)

| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>* |
| Натисканням 1 | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Натисканням 2 | Видима частина карти зміщується до місцеперебування маркера (Режим переходу до місцеперебування маркера) |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на карті до відстежуваного маркера, потрібно довго натиснути і відразу трохи перемістити положення карти (контекстне меню не повинно з'являтися). |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


</TabItem>

<TabItem value="ios" label="iOS">

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Вибрати панель → <Translate android="true" ids="map_markers_bar"/>* |
| Натисканням | Видима частина карти зміщується до місцеперебування маркера. |
| Натисканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (Режим перемикання). |
| Формат відстані | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>* |

</TabItem>

</Tabs>


## Налаштування віджетів маркерів {#configure-marker-widgets}

Загальну інформацію про налаштування віджетів маркерів карти можна прочитати на цій [сторінці](../personal/markers#map-markers-widgets).

**Панель маркерів карти**
Віджет верхньої панелі відображає відстань і напрямок до наступного маркера карти від вашого поточного місцеперебування. У налаштуваннях можна вибрати, чи буде відображатися один або два маркери у верхній частині екрана.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)

**Маркери карти**
Віджет показує відстань або орієнтовний час прибуття (ETA) для першого або другого маркера у списку маркерів карти. Ви можете вибрати: один маркер, перший або другий, який буде відображатися на екрані, або обидва.

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png) ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)

| | |
| :------------- | :------------- |
| Показує | Цей режим дозволяє вибрати, яку інформацію відображатиме віджет: *Відстань* або *Орієнтовний час прибуття*. |
| Інтервал | Якщо в 'Показати' вибрано *Орієнтовний час прибуття*, ця опція з'являється з вибором часу (від 15 секунд до 60 хвилин) для розрахунку ETA. |
| Натискання на віджет | Це налаштування дозволяє вибрати, яка дія буде виконана при натисканні на віджет: *Переключити режим* або *Перейти до місцеперебування маркера*. |


## Вигляд на карті {#appearance-on-the-map}

Налаштування вигляду маркерів карти доступне як в Android, так і в iOS версіях OsmAnd. Меню "Вигляд на карті" є загальним налаштуванням для маркерів карти та застосовується незалежно від того, чи увімкнені віджети. Детальну інформацію можна прочитати на цій [сторінці](../personal/markers.md#appearance-on-the-map).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Перейти до: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два маркери у списку маркерів карти. |
| <Translate android="true" ids="show_arrows_on_the_map"/> | Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається. |
| <Translate android="true" ids="show_guide_line"/> | Показує напрямок, у вигляді пунктирної лінії, від певної точки на карті до відстежуваного маркера по прямій лінії. |
| <Translate android="true" ids="one_tap_active"/> | Одним дотиком до потрібного маркера на карті, цей маркер переміщується на початок списку активних маркерів карти без відкриття контекстного меню. |
| <Translate android="true" ids="keep_passed_markers"/> | Маркери, додані як група Вибраних або шляхових точок GPX, позначені як "Пройдені", залишаться на карті. Якщо група неактивна, маркери зникнуть з карти. |

</TabItem>

<TabItem value="ios" label="iOS">

Перейти до: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)

| | |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два маркери у списку маркерів карти. |
| <Translate android="true" ids="show_direction"/> | Дозволяє вибрати, чи відображати віджети та як вони виглядатимуть: над картою (<Translate android="true" ids="shared_string_topbar"/>) або з правого боку екрана (<Translate android="true" ids="shared_string_widgets"/>). |
| Стрілки на карті | Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається. |
| Лінія напрямку | Показує напрямок, у вигляді пунктирної лінії, від певної точки на карті до відстежуваного маркера по прямій лінії. |

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Налаштування екрана](./configure-screen.md)
- [Кнопки карти](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Швидка дія](./quick-action.md)


> *Останнє оновлення: Жовтень 2023*