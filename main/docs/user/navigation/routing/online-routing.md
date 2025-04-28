---
sidebar_position: 11
title:  Online routing
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


## Overview

<InfoAndroidOnly />

Online routing is a powerful tool that can help users save time and navigate more efficiently. However, it is important to note that online routing relies on internet connectivity, and may not be available in areas with poor network coverage. Additionally, users should always exercise caution and use their judgment when following any route suggested by an online routing service.  

![Online routing Android](@site/static/img/navigation/routing/online_routing_andr.png)


## Route Parameters - Online Routing

*Online routing* can be enabled in [Navigation type](../guidance/navigation-settings.md#overview) section of the Navigation settings of the selected *Profile*. In OsmAnd there are two predefined *online routing engines* ([ZLZK](https://zlzk.biz/) and [OSM DE](https://routing.openstreetmap.de)), that provide three *Online routing* types : *Bicycle, Car, and On foot*.  

:::note
Online routing types are designed for *Driving, Cycling, and Walking* profiles, although they can also be used with other OsmAnd profiles (Truck, Motorcycle, Skiing, Horseback riding). They are provided “as is", so you can't customize them according to your needs using different navigation options.  
:::

### Custom Online Routing

In addition to the preset online routing types, you can configure other online routing mechanisms.  
Tap the **+ Add online routing engine** button and choose one of the proposed online routing types ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Select the appropriate vehicle and tap *test routing* before saving your changes.  

![Custom online routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Custom online routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)  

:::info
You can read about the differences between online routing engines in [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

### Custom Online GPX Routing

Online server builds a route using your starting point and destination. After receiving the track from the server, OsmAnd creates a route using *[Attach to the roads](../setup/gpx-navigation.md#attach-to-roads)* feature. So all needed routing information will be taken from our offline maps, and more precise guidance along the route will be provided.  

![Custom GPX routing Android 1](@site/static/img/navigation/routing/online_routing_gpx_1.png) ![Custom GPX routing Android 1](@site/static/img/navigation/routing/online_routing_gpx_2.png)


## Online Routing Setting

When online routing is selected for navigation, an additional option appears in the settings.

![Settings Online routing Android](@site/static/img/navigation/routing/settings_online_routing_1.png)

- *<Translate android="true" ids="calculate_osmand_route_without_internet"/>*  - Allows to use OsmAnd offline routing, when online routing is selected in the navigation settings. This option may help if a route has already been built online, but then there was a deviation from the route and at the same time the internet connection was lost. In this case, offline routing will be used to return to the route, previousely calculated online.

> *This article was last updated in June 2024*
