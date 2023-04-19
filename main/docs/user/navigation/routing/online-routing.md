---
sidebar_position: 10
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


<InfoIncompleteArticle/>

<InfoAndroidOnly />

## Overview

Online routing is a powerful tool that can help users save time and navigate more efficiently. However, it is important to note that online routing relies on internet connectivity, and may not be available in areas with poor network coverage. Additionally, users should always exercise caution and use their judgment when following any route suggested by an online routing service.  

![Online routing Android](@site/static/img/navigation/routing/online_routing_andr.png)
## Route parameters - Online routing

*Online routing* can be enabled in [Navigation type](../guidance/navigation-settings.md#overview) section of the Navigation settings of the selected *Profile*. In OsmAnd there are two predefined *online routing engines* ([ZLZK](https://zlzk.biz/) and [OSM DE](https://routing.openstreetmap.de)), that provide three *Online routing* types : *Bicycle, Car, and On foot*.  

:::note
Online routing types are designed for *Driving, Cycling, and Walking* profiles, although they can also be used with other OsmAnd profiles (Truck, Motorcycle, Skiing, Horseback riding). They are provided “as is", so you can't customize them according to your needs using different navigation options.  
:::

### Custom Online routing

In addition to the preset online routing types, you can configure other online routing mechanisms.  
Tap on the **+ Add online routing engine** button and choose one of the proposed online routing types ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Openrouteservice](https://openrouteservice.org)). Select the appropriate vehicle and tap *test routing* before saving your changes.  

![Custom online routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_1.png) ![Custom online routing Android](@site/static/img/navigation/routing/custom_online_routing_andr_2.png)  

:::info
You can read about the differences between online routing engines in [OSMwiki](https://wiki.openstreetmap.org/wiki/Routing/online_routers).
:::

#### Custom Online GPX routing

at the request of the start of the finish, a track arrives back from the server, osmand quickly builds a route along it and this is tied to the roads on our maps so that lanes, turns and restrictions are taken from our maps