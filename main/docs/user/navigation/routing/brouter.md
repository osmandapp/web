---
sidebar_position: 11
title:  BRouter
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';


<InfoIncompleteArticle/>


## Overview

:::note
The third-party routing algorithm BRouter is only available for the Android version of the OsmAnd app.
:::  

<!-- OsmAnd uses its own routing algorithm and resources (see the [Online routing](./online-routing.md) article for details), as well as the third-party routing engine BRouter.  -->
[BRouter](http://brouter.de/) uses pre-calculated routes, which allows you to build a route very quickly in offline mode. You can read how to install and use it in the BRouter [readme.txt](http://brouter.de/brouter/readme.txt).


## How to configure

A guide to installing BRouter and including it in OsmAnd routing.

**1.** [Install BRouter.app](https://play.google.com/store/apps/details?id=btools.routingapp) in your device.  
**2.** Open BRouter and select a routing profile. You can choose a routing profile for your method of travelling (bicycle, moped,car, etc.). To give you more info about choosing the best routing profile for you, you can find more info about each profile  [here](http://brouter.de/brouter/profiles2/). Or you can try to use a routing profile in [BRouter-online](http://brouter.de/brouter-web/).


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

**3.** When you select and tap the desired routing profile (in our example it is a fast bike), OsmAnd will be able to download the data needed for routing.
   
  - Open BRouter application and click _Download Manager_.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 

  - Choose your area and start downloading.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-start-1.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-start.png').default} alt="BRouter"/></td>
    </tr>
</table> 

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-downl.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-update.png').default} alt="BRouter"/></td>
    </tr>
</table> 

   - You have installed and downloaded all the necessary data for third-party routing. All of the following steps will be performed in the OsmAnd application.  

**4.** You can choose or create a navigation profile in OsmAnd application. In *[Navigation type](../../personal/profiles.md#navigation-settings)*, you choose _BRouter (offline)_: *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>*


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table> 


## How to use

Comparison of BRouter with the internal routing of the Osmand application.

After configuring the BRouter we can compare the speed of the pre-calculation of the BRouter routing data with the internal OsmAnd routing.

We choose two random points in the Netherlands and start the calculation of the trip. To do this, we set a balanced driving style without using altitude data for the base profile. The calculation time for this trip is 14.5 sec for our internal OsmAnd route. The time for the BRouter navigation routing profile is less than 1 second.

:::note Note 1
You should be aware that *BRouter* routing is very fast, but cannot be changed and/or configured. For OsmAnd offline routing, you can select any parameters and restrictions offline with fresh OpenStreetMap data.
:::

:::note Note 2
For more information you can visit official [Brouter website](http://www.brouter.de/brouter/algorithm.html).  
:::

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 


## Route parameters

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)   

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | In most cases, the shortest route will be suggested. Often this route can take longer than if the setting was disabled |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Read about Consider temporary limitations option in this [article](./index.md#avoid-temporary-closures).   | The routing algorithm can take into account the time constraints specified in the OpenStreetMap. Note that in some cases the information from the OSM may be out of date.   |

Other routing settings:  
- In the [Recalculate route section](../setup/route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.
