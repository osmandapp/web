---
source-hash: c08c6419ce4eb37eaeeedc1186f95e9b81ac6219dcfadc6455d0a16f81b7bdd4
sidebar_position: 10
title: Громадський транспорт
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';



## Огляд {#overview}

Громадський транспорт — це додатковий шар, який дозволяє відображати маршрути та зупинки транспорту на карті, перевіряти детальну інформацію про них та здійснювати навігацію.

## Зупинки громадського транспорту (Шар) {#transport-stops-layer}

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

[Докладніше](../map/vector-maps.md#transport) про те, як транспорт відображається на карті.


## Маршрути громадського транспорту (Контекстне меню) {#transport-routes-context-menu}

![Меню маршрутів громадського транспорту Android](@site/static/img/map/pt_routemenu_android.png) ![Меню маршрутів громадського транспорту iOS](@site/static/img/map/pt_routemenu_ios.png)

Щоб відкрити меню транспорту, ви можете торкнутися піктограми транспорту. Воно відображає:

- Кольорові щити громадського транспорту (**клікабельні**)
- [Список маршрутів](#routes), що зупиняються на цій зупинці або поблизу (в межах 150 м)
- Назва зупинки та інші [деталі](#transport-stop-details)

### Деталі зупинки громадського транспорту {#transport-stop-details}

![Деталі меню маршрутів громадського транспорту Android](@site/static/img/map/pt_routemenu_details_android.png) ![Деталі меню маршрутів громадського транспорту iOS](@site/static/img/map/pt_routemenu_details_ios.png)

Зупинка громадського транспорту надає додаткові деталі порівняно зі стандартним [меню](../map/map-context-menu.md#details) об'єкта OpenStreetMap:

- Наявність лавки
- Наявність укриття
- Доступність для інвалідних візків
- Назва оператора

**Примітка**: ви можете фільтрувати зупинки за певними критеріями. Наприклад, розгорніть та торкніться "Лавка" / "Так", і ви побачите список зупинок з лавками. Також їх можна [показати на карті](../map/point-layers-on-map.md#points-of-interest-pois).


### Маршрути {#routes}

![Маршрути громадського транспорту Android](@site/static/img/map/pt_routes_android.png) ![Маршрути громадського транспорту iOS](@site/static/img/map/pt_routes_ios.png)

Маршрути громадського транспорту — це всі маршрути громадського транспорту, які проходять через вибрану зупинку та прилеглі маршрути (в межах 150 м). Інформація про маршрути береться з [даних OpenStreetMap](https://wiki.openstreetmap.org/wiki/Public_transport), таких як посилання, назва, колір та тип.

**Колір щита**:

- Метро - власний колір лінії
- Залізниця - коричневий
- Автобус та інші - червоний
- Трамвай - синій
- Тролейбус - фіолетовий

### Перегляд маршруту {#browse-route}

![Список маршрутів громадського транспорту Android](@site/static/img/map/pt_route_list_android.png) ![Список маршрутів громадського транспорту Android](@site/static/img/map/pt_route_list_ios.png)

Ви можете увійти в меню перегляду маршруту, **натиснувши на щит** або **вибравши маршрут** зі списку маршрутів. Після цього ви можете переміщатися між зупинками, натискаючи '<Translate android="true" ids="shared_string_previous"/>' та '<Translate android="true" ids="shared_string_next"/>'. Інформація про зупинку буде оновлена в меню, а зупинка буде розташована на карті.

Ви можете переглянути повний список зупинок, натиснувши <Translate android="true" ids="rendering_category_details"/>. Поточна вибрана зупинка позначена піктограмою "місцезнаходження" у списку маршрутів.

> **ПРИМІТКА**: *Якщо ви натиснете кнопку <Translate android="true" ids="get_directions"/>, ви отримаєте маршрут від вашого поточного місцезнаходження до вибраної станції громадського транспорту.*


## Пов'язані статті {#related-articles}

- [Векторні карти](../map/vector-maps.md)
- [Навігація громадським транспортом](../navigation/routing/public-transport-navigation.md)