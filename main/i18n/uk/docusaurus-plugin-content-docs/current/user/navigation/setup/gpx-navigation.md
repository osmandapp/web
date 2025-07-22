---
source-hash: 5b1f516001588d13044bc97b434ef0d12f0f32e20295902b3d61ccfb9d49d0f5
sidebar_position: 2
title: Навігація за треком
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

Опція *Навігація за треком* (GPX) дозволяє вам слідувати заздалегідь визначеним маршрутом або треком на карті. Це може бути особливо корисно для активного відпочинку, такого як піші прогулянки, їзда на велосипеді або позашляхове водіння, де наявність запланованого маршруту підвищує безпеку та ефективність. Якщо ви подорожуєте організованою групою, ця функція допоможе вам і кожному члену групи мати однакову інформацію про маршрут.

Опцію *Навігація за треком* також можна використовувати в повсякденному житті. Ви можете використовувати раніше [записаний трек](../../plugins/trip-recording.md) або [створити трек](../../personal/tracks/manage-tracks.md#create-a-track) та поділитися ним зі своєю родиною чи друзями замість того, щоб пояснювати їм маршрут. Ви також можете використовувати [маршрути на карті OsmAnd](../../../../blog/routes/) для навігації. Як їх виділити на карті та що означають їхні кольори, описано в розділі [Маршрути](../../map/vector-maps.md#routes) статті *Векторні карти*.

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Navigation by track screen Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation by track screen iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Виберіть трек {#select-the-track}

Перш ніж використовувати опцію *Навігація за треком*, вам потрібно [відобразити трек на карті](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd підтримує трек як лінію (**Geometry**) та трек як маршрут (**Route**) або їх комбінацію (**OsmAnd** за допомогою [Планування маршруту](../../plan-route/create-route.md)). Якщо у вас є трек як набір **Waypoints**, ви можете використовувати [Навігацію за маркерами](./markers-navigation.md).


- Трек **Geometry** за замовчуванням матиме дуже просту навігацію і не надаватиме точних поворотів, назв вулиць та смуг руху. Щоб отримати відсутню інформацію, вам потрібно використовувати інструмент [Прив'язати до доріг](#attach-to-the-roads).

- Трек **Route** розрахує маршрут між точками маршруту за вибраним профілем. По суті, всі точки маршруту будуть вважатися проміжними точками. Якщо ваш маршрут складається з > 50 точок, дуже ймовірно, що це неправильно налаштований трек **Geometry**.

- Трек **OsmAnd** складається як з геометричної, так і з маршрутної частин, і він підходить для надання точних вказівок, як і навігація за замовчуванням. Ці треки створюються за допомогою [Планування маршруту](../../plan-route/create-route.md) або [Веб-версії](../../web/index.md). Можна перезберегти цей трек у трек лише **Geometry** як [**Спрощений**](../../plan-route/create-route.md#save-route) для використання в сторонніх програмах.


### Розпочати GPX навігацію {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Select track to navigate Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Select track to navigate Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Select track to navigate iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Select track to navigate iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Навігацію за треком можна розпочати за допомогою кнопки швидкої дії в [контекстному меню треку](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (відкривається вибором одного з [виділених треків](./route-navigation.md#history-of-previous-routes) на карті або натисканням на файл треку в розділі [Мої місця](../../personal/myplaces.md) *Головного меню*) або з меню навігації, яке відкривається натисканням:

- [*Кнопки навігації*](../../widgets/map-buttons.md#directions) на екрані карти.
- *Розділу навігації* в *Головному меню* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- У [*меню навігації*](./route-navigation.md#navigation-menu) перейдіть до *<Translate android="true" ids="shared_string_settings,follow_track"/>*.

### Виберіть сегменти {#choose-segments}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Segments Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Segments iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Для навігації, якщо вибраний трек складається з кількох сегментів або треків, ви можете вибрати конкретний сегмент або весь файл треку GPX. Під час **[імпорту](../../personal/tracks/manage-tracks.md#import)** ви можете вибрати, чи зберігати його в одному файлі, чи в кількох файлах.


### Опції слідування за треком {#follow-track-options}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Navigation by track screen Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Navigation by track screen iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Редагувати** (*іконка олівця* поруч з назвою треку) — Відкриває трек в інструменті [*Планування маршруту*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Виберіть інший файл GPX для навігації.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Якщо цей параметр увімкнено, напрямок руху по треку змінюється на протилежний.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Налаштовує [прив'язку треку до доріг](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Ви можете вибрати, як навігувати від мого місцезнаходження до треку:
до *<Translate android="true" ids="start_of_the_track"/>* або до *<Translate android="true" ids="nearest_point"/>* на треку.
- Виберіть **Тип навігації** для першого та останнього сегмента: побудувати [*пряму лінію*](../routing/straight-line-routing.md) або використовувати [*тип маршрутизації*](../routing/osmand-routing.md#routing-types) з поточного профілю.


### Прив'язати до доріг {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Attach to the roads 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Attach to the roads 1 ios](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Функція **Прив'язати до доріг** вирівнює ваш трек з найближчою дорогою для більш точної навігації. Доступна в меню [Слідування за треком](#follow-track-options), ця функція гарантує, що ваш маршрут слідує відповідній дорожній мережі на основі вибраного *профілю навігації* та **порогової відстані**. Це покращує як [деталі маршруту](../setup/route-details.md), так і [голосові інструкції](#guidance) під час навігації.

***Як це працює:***

- OsmAnd зіставляє кожну точку треку з **найближчою дорогою** в межах встановленої **порогової відстані** (за замовчуванням: **50 метрів**).
- **Порогова відстань** визначає максимально допустиму відстань між точкою треку GPS та дорогою для прив'язки.
- **Автоматична повторна прив'язка** — При зміні **профілів навігації** OsmAnd автоматично повторно прив'язує трек до доріг, які підходять для нового профілю.
- Для великих треків з багатьма точками процес прив'язки може зайняти трохи більше часу. Ви побачите **індикатор прогресу** (*помаранчева смуга стану*), що показує статус прив'язки.
- Після завершення прив'язки натисніть **Застосувати**, щоб використовувати змінений трек для навігації.

#### Автоматична прив'язка до доріг {#automatic-attachment-to-the-roads}

OsmAnd автоматично прив'язує маршрути до доріг при використанні інструменту **Планування маршруту**:

- **Точки маршруту** автоматично вирівнюються з найближчою доступною дорогою (*за винятком [Маршрутизації по прямій лінії](../../navigation/routing/straight-line-routing.md) та [Маршрутизації прямо до точки](../../navigation/routing/direct-to-point-routing.md)*).
- Якщо дороги не виявлено (наприклад, в умовах бездоріжжя), маршрут буде слідувати **сегментам прямої лінії**.
- Ви можете **вручну налаштувати** маршрут, перетягуючи точки маршруту в інші місця.

За замовчуванням функція **Прив'язати до доріг** запускається **автоматично** при виборі треку для навігації. Ви можете змінити цей параметр за необхідності. Для отримання додаткової інформації див. [Детальні вказівки за треком](../guidance/navigation-settings.md#detailed-track-guidance) у статті *Налаштування навігації*.


## Точки {#points}

### Точка старту / фінішу {#start--finish-point}

Ви можете вказати точку старту та фінішу для маршруту, відмінну від старту/фінішу, вказаних у файлі GPX. Просто змініть її так само, як ви робите для [Навігації](../setup/route-navigation.md#select-starting-point).

У [меню Слідування за треком](#follow-track-options) ви можете вибрати, чи хочете ви навігувати від вашого поточного місцезнаходження до точки старту треку, чи до найближчої точки на треку GPX. Також ви можете вибрати [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types), який буде використовуватися для початкового та кінцевого сегмента вашого маршруту.

### Точки маршруту {#waypoints}

Якщо трек має точки маршруту, ви можете використовувати [Показати вздовж маршруту](../guidance/map-during-navigation.md#show-points-along-the-route) та [Голосові вказівки](../guidance/voice-navigation.md#voice-settings), щоб отримувати сповіщення про цікаві місця. Ви можете додати **Точки маршруту** до існуючого треку через [Контекстне меню](../../map/map-context-menu.md#-add--edit-track-waypoint--add--edit-track-waypoint), трек має бути видимим на карті.

### Проміжні точки {#intermediate-points}

Під час підготовки або навігації за треком GPX ви не можете додати проміжні місця, через які плануєте проїхати в межах цього треку. Ви можете лише призначити точки старту та фінішу на додаток до треку або сегмента, за яким ви плануєте слідувати.

## Вказівки {#guidance}

*Навігація за треком GPX* містить ті самі [голосові інструкції](../guidance/voice-navigation.md), що й навігація за маршрутом. Однак деякі повороти або кільцеві розв'язки можуть бути інтерпретовані неправильно, оскільки в GPX немає інформації про перехрестя доріг, за винятком файлів GPX, створених OsmAnd. Щоб усунути ці проблеми, слід використовувати функцію [Прив'язати до доріг](#attach-to-the-roads).

Під час навігації ви можете використовувати різні опції, такі як збільшення або зменшення масштабу, панорамування карти або перемикання на інший стиль карти. Якщо ви відхилитеся від треку, OsmAnd автоматично перерахує маршрут, щоб повернути вас на трек. Ви також можете налаштувати швидкість треку та встановити звукові сповіщення про наближення до точок або відхилення від маршруту.


## Пов'язані статті {#related-articles}

- [Параметри маршруту](../routing/osmand-routing.md#routing-types)
- [Підготовка маршруту](./route-navigation.md)
- [Деталі маршруту](./route-details.md)
- [Навігація за маркерами](./markers-navigation.md)
- [Налаштування навігації](../guidance/navigation-settings.md)
- [Екран карти під час навігації](../guidance/map-during-navigation.md)
- [Голосові підказки / Сповіщення](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *Останнє оновлення: квітень 2025*