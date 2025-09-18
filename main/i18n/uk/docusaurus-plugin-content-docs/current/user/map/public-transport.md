---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title:  Громадський транспорт
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

Громадський транспорт — це додатковий шар, який дозволяє відображати на мапі транспортні маршрути та зупинки, перевіряти детальну інформацію про них та здійснювати навігацію.

## Зупинки громадського транспорту (шар) {#transport-stops-layer}

Увімкнути/вимкнути шар громадського транспорту:

**<Translate android="true" ids="android_button_seq"/>:** *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_transport"/> →* &#8230;

<p> </p>

![Шар громадського транспорту Android](@site/static/img/map/pt_layer_android.png) ![Шар громадського транспорту iOS](@site/static/img/map/pt_layer_ios.png)

Виберіть одну або кілька категорій транспорту для відображення:

- <Translate android="true" ids="rendering_attr_transportStops_name"/>
- <Translate android="true" ids="rendering_attr_publicTransportMode_name"/>
- <Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>
- <Translate android="true" ids="rendering_attr_subwayMode_name"/>

[Дізнайтеся більше](../map/vector-maps.md#transport) про те, як транспорт відображається на мапі.


## Транспортні маршрути (Контекстне меню) {#transport-routes-context-menu}

![Меню маршруту громадського транспорту Android](@site/static/img/map/pt_routemenu_android.png) ![Меню маршруту громадського транспорту iOS](@site/static/img/map/pt_routemenu_ios.png)

Щоб відкрити меню "Транспорт", ви можете торкнутися значка транспорту. Воно відображає:

- Кольорові значки громадського транспорту (**клікабельні**)
- [Список маршрутів](#routes), що зупиняються на цій зупинці або поблизу (в межах 150 м)
- Назва зупинки та інші [деталі](#transport-stop-details)

### Деталі зупинки громадського транспорту {#transport-stop-details}

![Деталі меню маршруту громадського транспорту Android](@site/static/img/map/pt_routemenu_details_android.png) ![Деталі меню маршруту громадського транспорту iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Зупинка громадського транспорту надає додаткові відомості порівняно зі стандартним [меню](../map/map-context-menu.md#details) об'єкта OpenStreetMap:

- Наявність лавки
- Наявність накриття
- Доступність для інвалідних візків
- Назва оператора

**Примітка**: ви можете фільтрувати зупинки за певними критеріями. Наприклад, розгорніть і торкніться "Лавка" / "Так", і ви побачите список зупинок з лавками. Також їх можна [показати на мапі](../map/point-layers-on-map.md#points-of-interest-pois).


### Маршрути {#routes}

![Маршрути громадського транспорту Android](@site/static/img/map/pt_routes_android.png) ![Маршрути громадського транспорту iOS](@site/static/img/map/pt_routes_ios.png)

Транспортні маршрути — це всі маршрути громадського транспорту, які проходять через обрану зупинку, а також найближчі маршрути (в межах 150 м). Інформація про маршрути береться з [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport), наприклад, номер, назва, колір та тип.

**Колір значка**:

- Метро - власний колір лінії
- Залізниця - коричневий
- Автобус та інші - червоний
- Трамвай - синій
- Тролейбус - фіолетовий

### Перегляд маршруту {#browse-route}

![Список маршрутів громадського транспорту Android](@site/static/img/map/pt_route_list_android.png)  ![Список маршрутів громадського транспорту iOS](@site/static/img/map/pt_route_list_ios.png)

Ви можете увійти в меню "Перегляд маршруту", **натиснувши на значок** або **вибравши маршрут** зі списку маршрутів. Після цього ви можете переглядати зупинки, натискаючи '<Translate android="true" ids="shared_string_previous"/>' та '<Translate android="true" ids="shared_string_next"/>'. Інформація про зупинку буде оновлена в меню, а сама зупинка буде показана на мапі.

Ви можете побачити повний список зупинок, натиснувши <Translate android="true" ids="rendering_category_details"/>. Поточна обрана зупинка позначена значком "місцезнаходження" у списку маршрутів.

> **ПРИМІТКА**: *Якщо ви натиснете кнопку <Translate android="true" ids="get_directions"/>, ви отримаєте маршрут від вашого поточного місцезнаходження до обраної станції громадського транспорту.*


## Пов'язані статті {#related-articles}

- [Векторні мапи](../map/vector-maps.md)
- [Навігація громадським транспортом](../navigation/routing/public-transport-navigation.md)