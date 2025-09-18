---
source-hash: 2e10650d0eee32138985228898ac7ac712a0a70a1f315f227a751d0c2f14ae10
sidebar_position: 6
title:  Віджети маркерів
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

Маркери — це тимчасові точки, позначені на карті у вигляді прапорців. Віджети показують *напрямок*, *відстань*, *адресу* та *орієнтовний час прибуття* до маркера. Вони дозволяють швидко знаходити маркери на карті, а також змінювати їхнє положення. Детальніше про маркери можна прочитати в цій [статті](../personal/markers).  


## Віджет верхньої панелі {#top-bar-widget}

Віджет **Панель маркерів карти** (Android) / **Індикація відстані - Верхня панель** (iOS) відображає:

- Відстань від вашого поточного місцезнаходження (або центральної точки карти / початкової точки дотику до карти, коли місцезнаходження вимкнено) до вибраної точки, позначеної маркером на карті ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- Стрілка того ж кольору, що й маркер, вказує напрямок від поточного місцезнаходження (або центральної точки карти / початкової точки дотику до карти, коли місцезнаходження вимкнено) та орієнтацію вашого пристрою в просторі (курс) до маркера.
- Адреса місцезнаходження.
- Іконка меню, що веде до [Списку маркерів карти](../navigation/setup/markers-navigation.md#itinerary-list).

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте в цій [статті](https://osmand.net/docs/user/personal/markers#appearance-on-the-map).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим положенням (або центральною точкою карти / початковою точкою дотику до карти, коли місцезнаходження вимкнено) та маркером.
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Маркери карти на віджеті верхньої панелі](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Оберіть панель → <Translate android="true" ids="map_markers_bar"/>* |
| Торканням | Видима частина карти зміщується до місця розташування маркера. |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на карті до відстежуваного маркера, потрібно зробити довге натискання і відразу трохи змістити положення карти (контекстне меню не повинно з'являтися). |
| Наближення до маркера | Якщо ваше місцезнаходження знаходиться в невеликому радіусі від маркера на карті (**< 50 м**), у полі віджета ви побачите кнопку з галочкою для швидкого видалення маркера (позначити як пройдений). Позначений маркер замінюється наступним маркером у списку маркерів.  |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Маркери карти на віджеті верхньої панелі](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Оберіть панель → <Translate android="true" ids="map_markers_bar"/>*|
| Торканням | Видима частина карти зміщується до місця розташування маркера. |
| Торканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (режим перемикання). |
| Наближення до маркера | Якщо ваше місцезнаходження знаходиться в невеликому радіусі від маркера на карті (**< 50 м**), у полі віджета ви побачите кнопку з галочкою для швидкого видалення маркера (позначити як пройдений). Позначений маркер замінюється наступним маркером у списку маркерів.  |
| Формат відстані  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs>


## Віджети панелі {#panel-widgets}

Віджет **Маркери карти** *(для Android)* та **Індикація відстані - Віджети** *(для iOS)* відображає:

- *Відстань від вашого поточного місцезнаходження* до вибраної точки, позначеної маркером на карті ([Одиниці довжини](../personal/profiles/#general-settings) можна вибрати в налаштуваннях профілю).
- *Орієнтовний час прибуття або ETA*.  
Це час (гг:хв), коли транспортний засіб або людина має прибути до місця призначення. Він розраховується як відстань до маркера, поділена на середню швидкість.
Середня швидкість розраховується як середнє значення всіх значень швидкості, отриманих з точок місцезнаходження за вибраний вами проміжок часу від 15 секунд до 60 хвилин.

Ви також можете вибрати відображення одного або двох маркерів. Детальніше про налаштування віджетів читайте в цій [статті](https://osmand.net/docs/user/personal/markers#map-markers-widgets).
:::info
*Відстань до маркера* — це довжина прямої лінії між вашим положенням (або певною точкою на карті) та маркером.
:::  


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Віджети панелі](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Увімкнути | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| Торканням 1 | Перемикання між "Відстань" / "Орієнтовний час прибуття" (режим перемикання). |
| Торканням 2 | Видима частина карти зміщується до місця розташування маркера (режим переходу до місця розташування маркера) |
| Довге натискання + переміщення | Щоб виміряти відстань і побачити напрямок від певної точки на карті до відстежуваного маркера, потрібно зробити довге натискання і відразу трохи змістити положення карти (контекстне меню не повинно з'являтися). |
| Формат відстані | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Віджети панелі](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Увімкнути | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Оберіть панель → <Translate android="true" ids="map_markers_bar"/>*  |
| Торканням | Видима частина карти зміщується до місця розташування маркера. |
| Торканням | Перемикання між "Відстань" / "Орієнтовний час прибуття" (режим перемикання). |
| Формат відстані  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs>


## Налаштування віджетів маркерів {#configure-marker-widgets}

Загальну інформацію про налаштування віджета "Маркери карти" можна прочитати на цій [сторінці](../personal/markers#appearance-on-the-map).  

### Панель маркерів карти {#map-markers-bar}
Віджет верхньої панелі відображає відстань і напрямок до наступного маркера карти від вашого поточного місцезнаходження. У налаштуваннях ви можете вибрати, чи буде відображатися один або два маркери у верхній частині екрана.

![вигляд_на_карті](@site/static/img/widgets/configure-marker-wid-02.png)  

### Маркери карти {#map-markers} 
Віджет показує відстань або орієнтовний час прибуття (ETA) для першого або другого маркера у списку маркерів карти. Ви можете вибрати: один маркер, перший або другий, що буде відображатися на екрані, або обидва.

![вигляд_на_карті](@site/static/img/widgets/configure-marker-wid-01.png)  ![вигляд_на_карті](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- |
| Показує | Цей режим дозволяє вибрати, яку інформацію буде відображати віджет: *Відстань* або *Орієнтовний час прибуття*. |
| Інтервал | Якщо в полі "Показувати" вибрано *Орієнтовний час прибуття*, з'являється ця опція з вибором часу (від 15 секунд до 60 хвилин) для розрахунку ETA. |
| Натискання на віджет |  Це налаштування дозволяє вибрати, яка дія буде виконуватися при натисканні на віджет: *Перемкнути режим* або *Перейти до місця розташування маркера*. |


## Вигляд на карті {#appearance-on-the-map}

Налаштування вигляду маркерів карти доступне як в Android, так і в iOS версіях OsmAnd. Меню "Вигляд на карті" є загальним налаштуванням для маркерів карти і застосовується незалежно від того, увімкнені віджети чи ні. Детальну інформацію можна прочитати на цій [сторінці](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Перейдіть до: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![вигляд_на_карті](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два перших маркери у списку маркерів карти. |
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається. |
| <Translate android="true" ids="show_guide_line"/> | Показує напрямок у вигляді пунктирної лінії від певної точки на карті до відстежуваного маркера по прямій.  |
| <Translate android="true" ids="one_tap_active"/> |  Одним дотиком до потрібного маркера на карті цей маркер переміщується на початок списку активних маркерів карти без відкриття контекстного меню. |  
| <Translate android="true" ids="keep_passed_markers"/> | Маркери, додані як група Обраних або шляхових точок GPX, позначені як "Пройдені", залишаться на карті. Якщо група не активна, маркери зникнуть з карти. |

</TabItem>

<TabItem value="ios" label="iOS">  

Перейдіть до: *<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>*

![Вигляд маркерів карти iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Показує інформацію про перший або два перших маркери у списку маркерів карти. |
|  <Translate android="true" ids="show_direction"/> | Дозволяє вибрати, чи відображати віджети та як вони будуть виглядати: над картою (<Translate android="true" ids="shared_string_topbar"/>) або з правого боку екрана (<Translate android="true" ids="shared_string_widgets"/>). |
|  Стрілки на карті |  Вказує напрямок до відстежуваного маркера (одного або двох) у вигляді стрілки на карті. Якщо маркер знаходиться у видимій частині карти, стрілка не відображається. |
| Лінія напрямку | Показує напрямок у вигляді пунктирної лінії від певної точки на карті до відстежуваного маркера по прямій.  |

</TabItem>

</Tabs>


## Пов'язані статті {#related-articles}

- [Налаштування екрану](./configure-screen.md)
- [Кнопки на карті](./map-buttons.md)
- [Інформаційні віджети](./info-widgets.md)
- [Навігаційні віджети](./nav-widgets.md)
- [Радіус-лінійка та Лінійка](./radius-ruler.md)
- [Швидка дія](./quick-action.md)