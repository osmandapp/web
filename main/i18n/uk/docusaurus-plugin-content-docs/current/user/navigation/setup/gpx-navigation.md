---
source-hash: a712a44f73377cd525fd51b44694dfb5b3a2ded809dfa1224660e6d06215701e
sidebar_position: 2
title:  Навігація за треком
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

Опція *Навігація за треком* (GPX) дозволяє слідувати заздалегідь визначеним маршрутом або треком на карті. Це може бути особливо корисно для активного відпочинку на природі, наприклад, для піших прогулянок, їзди на велосипеді або бездоріжжям, де наявність спланованого маршруту підвищує безпеку та ефективність. Якщо ви подорожуєте в організованій групі, ця функція допоможе вам і кожному члену групи мати ту ж інформацію про маршрут, що й інші.  

Опцію *Навігація за треком* можна використовувати і в повсякденному житті. Ви можете використати раніше [записаний трек](../../plugins/trip-recording.md) або [створити трек](../../personal/tracks/manage-tracks.md#create-a-track) і поділитися ним з родиною чи друзями, замість того, щоб пояснювати їм маршрут. Ви також можете використовувати [маршрути на карті OsmAnd](../../../../blog/routes/) для навігації. Як виділити їх на карті та що означають їхні кольори, описано в розділі [Маршрути](../../map/vector-maps.md#routes) статті *Векторні карти*.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Екран навігації за треком Android](@site/static/img/navigation/gpx/navigation_gpx_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Екран навігації за треком iOS](@site/static/img/navigation/gpx/navigation_gpx_ios.png)

</TabItem>

</Tabs>


## Вибір треку {#select-the-track}

Перш ніж використовувати опцію *Навігація за треком*, вам потрібно [відобразити трек на карті](../../map/tracks/index.md#display-tracks-on-the-map). OsmAnd підтримує трек у вигляді лінії (**Геометрія**) і трек у вигляді маршруту (**Маршрут**) або їх комбінації (**OsmAnd** через [Планування маршруту](../../plan-route/create-route.md)). Якщо у вас є трек у вигляді колекції **Шляхових точок**, ви можете використовувати [Навігацію за маркерами](./markers-navigation.md).


- **Геометричний** трек за замовчуванням матиме дуже просту навігацію і не надаватиме точних поворотів, назв вулиць та смуг руху. Щоб отримати відсутню інформацію, потрібно скористатися інструментом [Прив'язка до доріг](#attach-to-the-roads).

- **Маршрутний** трек розрахує маршрут між точками маршруту за обраним профілем. В основному, всі точки маршруту будуть розглядатися як проміжні. Якщо ваш маршрут складається з > 50 точок, дуже ймовірно, що це неправильно налаштований **Геометричний** трек.

- **OsmAnd** трек складається як з геометричної, так і з маршрутної частини, і він підходить для надання точно таких же вказівок, як і навігація за замовчуванням. Ці треки створюються за допомогою [Планування маршруту](../../plan-route/create-route.md) або [Веб-версії](../../web/index.md). Цей трек можна перезберегти лише як **Геометричний** трек у [**Спрощеному**](../../plan-route/create-route.md#save-route) вигляді для використання у сторонніх програмах.


### Запуск навігації за GPX {#start-gpx-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Вибір треку для навігації Android 1](@site/static/img/navigation/gpx/follow_track_andr_1.png) ![Вибір треку для навігації Android 2](@site/static/img/navigation/gpx/follow_track_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Вибір треку для навігації iOS 1](@site/static/img/navigation/gpx/follow_track_ios_1.png) ![Вибір треку для навігації iOS 2](@site/static/img/navigation/gpx/follow_track_ios_2.png)

</TabItem>

</Tabs>

Навігацію по треку можна розпочати за допомогою кнопки швидкого доступу в [контекстному меню треку](../../map/tracks/track-context-menu.md#add-waypoint-to-a-track) (відкривається при виборі одного з [виділених треків](./route-navigation.md#history-of-previous-routes) на карті, або при натисканні на файл треку в розділі [Мої місця](../../personal/myplaces.md) *Головного меню*) або з меню навігації, яке відкривається натисканням:

- [*Кнопка Навігація*](../../widgets/map-buttons.md#directions) на екрані карти.  
- *Розділ Навігація* в *Головному меню* *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.
- У [*меню Навігація*](./route-navigation.md#navigation-menu) перейдіть до *<Translate android="true" ids="shared_string_settings,follow_track"/>*.  

### Вибір сегментів {#choose-segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Сегменти Android](@site/static/img/navigation/gpx/segments_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Сегменти iOS](@site/static/img/navigation/gpx/segments_ios.png)

</TabItem>

</Tabs>

Для навігації, якщо обраний трек складається з кількох сегментів або треків, ви можете вибрати або конкретний сегмент, або весь файл GPX-треку. При **[імпортуванні](../../personal/tracks/manage-tracks.md#import)** ви можете вибрати, чи зберігати його в одному файлі, чи в кількох.


### Опції слідування за треком {#follow-track-options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*
- *<Translate android="true" ids="help_article_map_track_context_menu_name,shared_string_options,follow_track"/>*

![Екран навігації за треком Android](@site/static/img/navigation/gpx/follow_the_track_5-1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Перейдіть до: *<Translate ios="true" ids="shared_string_navigation,shared_string_settings,follow_track"/>*


![Екран навігації за треком iOS](@site/static/img/navigation/gpx/follow_the_track_4-1_ios.png)

</TabItem>

</Tabs>

- **Редагувати** (*іконка олівця* біля назви треку) — відкриває трек в інструменті [*Планування маршруту*](../../plan-route/create-route.md).
- **<Translate android="true" ids="select_another_track"/>** — Вибрати інший GPX-файл для навігації.
- **<Translate android="true" ids="gpx_option_reverse_route"/>** — Якщо цей параметр увімкнено, напрямок руху по треку змінюється на протилежний.
- **<Translate android="true" ids="attach_to_the_roads"/>** — Налаштовує [прив'язку треку до доріг](#attach-to-the-roads).
- **<Translate android="true" ids="pass_whole_track_descr"/>** (*Android*) / **<Translate ios="true" ids="point_to_navigate"/>** (*iOS*) — Ви можете вибрати, як здійснювати навігацію від мого місцезнаходження до треку:
до *<Translate android="true" ids="start_of_the_track"/>* або до *<Translate android="true" ids="nearest_point"/>* на треку.
- Виберіть **Тип навігації** для першого та останнього сегмента: або побудувати [*пряму лінію*](../routing/straight-line-routing.md), або використати [*тип маршруту*](../routing/osmand-routing.md#routing-types) з поточного профілю.


### Зміна напрямку треку {#reverse-track-direction}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Режим зворотного руху](@site/static/img/navigation/gpx/reverse_mode_android.png) ![Навігація до](@site/static/img/navigation/gpx/navigate_to_android.png)

Опція **Зміна напрямку треку** дозволяє навігуватися збереженому GPX-треку в протилежному напрямку — від кінцевої точки назад до початкової. Коли цей параметр увімкнено, алгоритм навігації автоматично змінює геометрію GPX на зворотну та перераховує напрямки відповідно. Після увімкнення стає доступним параметр **Режим зворотного руху**:

- **Розрахунок маршруту**. Рекомендовано для автомобільних та велосипедних профілів. Новий оптимізований маршрут перераховується вздовж зворотного GPX-треку відповідно до вибраного профілю навігації. Правила дорожнього руху, такі як односторонні вулиці та обмеження поворотів, враховуються для забезпечення безпечної навігації.
- **Оригінальний трек**. GPX-лінія суворо слідується у зворотному напрямку без перерахунку маршруту. Цей режим корисний для ходьби, піших прогулянок або навігації бездоріжжям, де правила дорожнього руху не застосовуються.

Коли увімкнено зворотний напрямок, початкова та кінцева точки треку автоматично міняються місцями, а навігація будується від поточного або найближчого положення на зворотному треку. Опція *Точка треку для навігації = Найближча точка* стосується найближчої точки на зворотній GPX-лінії, а голосові підказки та функція Прив'язка до доріг працюють так само, як під час навігації вперед.

</TabItem>

<TabItem value="ios" label="iOS">

![Навігація до iOS](@site/static/img/navigation/gpx/navigate_to_ios.png)

Опція **Зміна напрямку треку** дозволяє навігуватися збереженому GPX-треку в протилежному напрямку — від його кінцевої точки назад до початкової. Коли цей параметр увімкнено, геометрія треку автоматично змінюється на зворотну, а маршрут перераховується відповідно до вибраного профілю навігації.

Початкова та кінцева точки треку міняються місцями, а навігація будується від поточного або найближчого положення на зворотній лінії. Опція *Навігація до = Найближча точка* стосується найближчої точки на зворотному GPX-треку.

Новий оптимізований маршрут перераховується вздовж зворотного треку з повним урахуванням правил дорожнього руху, таких як односторонні вулиці та обмеження поворотів. Голосові підказки, візуальні інструкції та функція Прив'язка до доріг працюють як у стандартній навігації вперед, забезпечуючи точне та безпечне маршрутизування.

</TabItem>

</Tabs>


### Прив'язка до доріг {#attach-to-the-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Прив'язка до доріг 2](@site/static/img/navigation/gpx/attach_roads_gpx_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Прив'язка до доріг 1 iOS](@site/static/img/navigation/gpx/attach_to_the_roads_ios.png)

</TabItem>

</Tabs>

Функція **Прив'язка до доріг** вирівнює ваш трек з найближчою дорогою для більш точної навігації. Доступна в меню [Слідувати за треком](#follow-track-options), ця функція гарантує, що ваш маршрут буде слідувати відповідній дорожній мережі на основі обраного *профілю навігації* та **порогової відстані**. Це покращує як [деталі маршруту](../setup/route-details.md), так і [голосові інструкції](#guidance) під час навігації.

***Як це працює:***

- OsmAnd зіставляє кожну точку треку з **найближчою дорогою** в межах встановленої **порогової відстані** (за замовчуванням: **50 метрів**).  
- **Порогова відстань** визначає максимальну допустиму відстань між точкою GPS-треку та дорогою для прив'язки.
- **Автоматична переприв'язка** — при зміні **профілів навігації** OsmAnd автоматично переприв'язує трек до доріг, які підходять для нового профілю.
- Для великих треків з великою кількістю точок процес прив'язки може зайняти трохи більше часу. Ви побачите **індикатор прогресу** (*помаранчева смуга стану*), що показує статус прив'язки.
- Після завершення прив'язки натисніть **Застосувати**, щоб використовувати змінений трек для навігації.

### Автоматична прив'язка до доріг {#automatic-attachment-to-the-roads}

OsmAnd автоматично прив'язує маршрути до доріг при використанні інструменту **Планування маршруту**:

- **Шляхові точки** автоматично вирівнюються з найближчою доступною дорогою (*за винятком [Маршруту по прямій](../../navigation/routing/straight-line-routing.md) та [Маршруту від точки до точки](../../navigation/routing/direct-to-point-routing.md)*).
- Якщо дороги не виявлені (наприклад, в умовах бездоріжжя), маршрут буде слідувати **прямими відрізками**.
- Ви можете **вручну коригувати** маршрут, перетягуючи шляхові точки в інші місця.

За замовчуванням функція **Прив'язка до доріг** запускається **автоматично**, коли трек обрано для навігації. Ви можете змінити це налаштування за потреби. Для отримання додаткової інформації зверніться до розділу [Детальні вказівки по треку](../guidance/navigation-settings.md#detailed-track-guidance) у статті *Налаштування навігації*.


## Точки {#points}

### Початкова / Кінцева точка {#start--finish-point}

Ви можете вказати початкову та кінцеву точки маршруту, відмінні від початкової/кінцевої, зазначених у файлі GPX. Просто змініть їх так само, як ви це робите для [Навігації](../setup/route-navigation.md#select-start-point).

У [меню Слідувати за треком](#follow-track-options) ви можете вибрати, чи хочете ви здійснювати навігацію з вашого поточного місцезнаходження до початкової точки треку, чи до найближчої точки на треку GPX.  Також ви можете вибрати [<Translate android="true" ids="nav_type_hint"/>](../routing/osmand-routing.md#routing-types), який буде використовуватися для початкового та кінцевого сегментів вашого маршруту.  

### Шляхові точки {#waypoints}

Якщо трек має шляхові точки, ви можете використовувати [Показувати вздовж маршруту](../guidance/map-during-navigation.md#show-points-along-the-route) та [Голосові підказки](../guidance/voice-navigation.md#voice-settings), щоб отримувати сповіщення про цікаві місця. Ви можете додати **Шляхові точки** до існуючого треку через [Контекстне меню](../../map/map-context-menu.md#-add--edit-track-waypoint), трек має бути видимим на карті.

### Проміжні точки {#intermediate-points}

При підготовці або навігації за GPX-треком ви не можете додавати проміжні місця, через які плануєте проїхати в межах цього треку. Ви можете призначити лише початкову та кінцеву точки на додаток до треку або сегмента, за яким ви плануєте слідувати.

## Ведення по маршруту {#guidance}

*Навігація за GPX-треком* містить ті ж [голосові інструкції](../guidance/voice-navigation.md), що й навігація по маршруту. Однак деякі повороти або кільцеві розв'язки можуть бути інтерпретовані неправильно, оскільки в GPX немає інформації про перехрестя доріг, за винятком файлів GPX, створених OsmAnd. Щоб усунути ці проблеми, слід використовувати функцію [Прив'язка до доріг](#attach-to-the-roads).  

Під час навігації ви можете використовувати різні опції, такі як збільшення або зменшення масштабу, панорамування карти або перемикання на інший стиль карти. Якщо ви відхилитеся від треку, OsmAnd автоматично перерахує маршрут, щоб повернути вас на трек. Ви також можете налаштувати швидкість руху по треку та встановити звукові сповіщення про наближення до точок або відхилення від маршруту.  


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