---
source-hash: ad9c1155352c7c8fc6705861acfb7f006ba101d59528a256c0205ba34b62fd80
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

Онлайн-маршрутизація — це потужний інструмент, який може допомогти користувачам заощадити час та ефективніше орієнтуватися. Однак важливо зазначити, що онлайн-маршрутизація залежить від підключення до Інтернету і може бути недоступною в районах з поганим покриттям мережі. Крім того, користувачі завжди повинні бути обережними та використовувати власне судження, дотримуючись будь-якого маршруту, запропонованого онлайн-сервісом маршрутизації.

![Онлайн-маршрутизація Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Параметри маршруту - Онлайн-маршрутизація {#route-parameters---online-routing}

*Онлайн-маршрутизацію* можна увімкнути в розділі [Тип навігації](../guidance/navigation-settings.md#overview) налаштувань навігації вибраного *Профілю*. В OsmAnd є два попередньо визначені *онлайн-механізми маршрутизації* ([ZLZK](https://zlzk.biz/) та [OSM DE](https://routing.openstreetmap.de)), які надають три типи *онлайн-маршрутизації*: *Велосипед, Автомобіль та Пішки*.

:::note
Типи онлайн-маршрутизації розроблені для профілів *Водіння, Велосипед та Пішки*, хоча їх також можна використовувати з іншими профілями OsmAnd (Вантажівка, Мотоцикл, Лижі, Верхова їзда). Вони надаються «як є», тому ви не можете налаштувати їх відповідно до своїх потреб, використовуючи різні параметри навігації.
:::

### Спеціальна онлайн-маршрутизація {#custom-online-routing}

На додаток до попередньо встановлених типів онлайн-маршрутизації, ви можете налаштувати інші механізми онлайн-маршрутизації.
Натисніть кнопку **+ Додати механізм онлайн-маршрутизації** та виберіть один із запропонованих типів онлайн-маршрутизації ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Виберіть відповідний транспортний засіб та натисніть *тестова маршрутизація* перед збереженням змін.

![Спеціальна онлайн-маршрутизація Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Спеціальна онлайн-маршрутизація Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)

:::info
Ви можете прочитати про відмінності між механізмами онлайн-маршрутизації в [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Спеціальна онлайн-маршрутизація GPX {#custom-online-gpx-routing}

Онлайн-сервер будує маршрут, використовуючи вашу початкову точку та пункт призначення. Після отримання треку від сервера OsmAnd створює маршрут, використовуючи функцію *[Прив'язати до доріг](../setup/gpx-navigation.md#attach-to-the-roads)*. Таким чином, вся необхідна інформація про маршрутизацію буде взята з наших офлайн-карт, і буде надано більш точне керівництво по маршруту.

![Спеціальна маршрутизація GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Спеціальна маршрутизація GPX Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Налаштування онлайн-маршрутизації {#online-routing-setting}

Коли для навігації вибрано онлайн-маршрутизацію, у налаштуваннях з'являється додаткова опція.

![Налаштування онлайн-маршрутизації Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>* - Дозволяє використовувати офлайн-маршрутизацію OsmAnd, коли в налаштуваннях навігації вибрано онлайн-маршрутизацію. Ця опція може допомогти, якщо маршрут вже був побудований онлайн, але потім відбулося відхилення від маршруту і водночас було втрачено інтернет-з'єднання. У цьому випадку офлайн-маршрутизація буде використана для повернення до маршруту, попередньо розрахованого онлайн.