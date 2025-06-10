---
source-hash: 4f96a8e9fe2039b52000ce52f1a94177338192fe1d90ceb5161a41d19e94cfea
sidebar_position: 11
title:  Онлайн-маршрутизація
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

<InfoAndroidOnly />

Онлайн-маршрутизація — це потужний інструмент, який може допомогти користувачам заощадити час і ефективніше пересуватися. Однак важливо зазначити, що онлайн-маршрутизація залежить від підключення до Інтернету і може бути недоступною в районах із поганим покриттям мережі. Крім того, користувачі завжди повинні бути обережними та використовувати власне судження, дотримуючись будь-якого маршруту, запропонованого онлайн-сервісом маршрутизації.

![Онлайн-маршрутизація Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Параметри маршруту - Онлайн-маршрутизація {#route-parameters---online-routing}

*Онлайн-маршрутизацію* можна ввімкнути в розділі [Тип навігації](../guidance/navigation-settings.md#overview) налаштувань навігації вибраного *Профілю*. В OsmAnd є два попередньо визначені *онлайн-рушії маршрутизації* ([ZLZK](https://zlzk.biz/) та [OSM DE](https://routing.openstreetmap.de)), які надають три типи *онлайн-маршрутизації*: *Велосипед, Автомобіль та Пішки*.

:::note
Типи онлайн-маршрутизації призначені для профілів *Водіння, Велосипед та Пішки*, хоча їх також можна використовувати з іншими профілями OsmAnd (Вантажівка, Мотоцикл, Лижі, Верхова їзда). Вони надаються «як є», тому ви не можете налаштувати їх відповідно до своїх потреб за допомогою різних параметрів навігації.
:::

### Спеціальна онлайн-маршрутизація {#custom-online-routing}

На додаток до попередньо встановлених типів онлайн-маршрутизації, ви можете налаштувати інші механізми онлайн-маршрутизації.
Натисніть кнопку **+ Додати онлайн-рушій маршрутизації** та виберіть один із запропонованих типів онлайн-маршрутизації ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Виберіть відповідний транспортний засіб і натисніть *тестувати маршрутизацію* перед збереженням змін.

![Спеціальна онлайн-маршрутизація Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Спеціальна онлайн-маршрутизація Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Ви можете прочитати про відмінності між онлайн-рушіями маршрутизації в [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Спеціальна онлайн-маршрутизація GPX {#custom-online-gpx-routing}

Онлайн-сервер будує маршрут, використовуючи вашу початкову точку та пункт призначення. Після отримання треку від сервера, OsmAnd створює маршрут за допомогою функції *[Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads)*. Таким чином, вся необхідна інформація про маршрутизацію буде взята з наших офлайн-карт, і буде надано більш точне керівництво по маршруту.

![Спеціальна маршрутизація GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Спеціальна маршрутизація GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Налаштування онлайн-маршрутизації {#online-routing-setting}

Коли для навігації вибрано онлайн-маршрутизацію, у налаштуваннях з'являється додаткова опція.

![Налаштування онлайн-маршрутизації Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Дозволяє використовувати офлайн-маршрутизацію OsmAnd, коли в налаштуваннях навігації вибрано онлайн-маршрутизацію. Ця опція може допомогти, якщо маршрут вже був побудований онлайн, але потім сталося відхилення від маршруту і одночасно було втрачено інтернет-з'єднання. У цьому випадку для повернення до маршруту, попередньо розрахованого онлайн, буде використана офлайн-маршрутизація.

> *Останнє оновлення: Червень 2024*