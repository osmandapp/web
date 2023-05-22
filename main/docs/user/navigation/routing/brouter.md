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

:::caution ANDROID ONLY
The third-party routing algorithm BRouter is only available for the Android version of the OsmAnd app.
:::   


## Overview

*BRouter* is a third-party routing algorithm that can be used in the OsmAnd app for [offline navigation mode](../guidance/navigation-settings.md#navigation-type). It is designed to optimize a route based on different parameters, such as time, distance, or vehicle type. 

[BRouter](http://brouter.de/) uses OpenStreetMap data to create a route and then adjusts it based on specified parameters. It uses pre-calculated routes to quickly build a route offline. It also allows the user to customize routing profiles, which are defined by a set of parameters to account for various factors in route selection. The [BRouter readme.txt](http://brouter.de/brouter/readme.txt) file explains in more detail how to install and use the program.

OsmAnd provides the user with the ability to select routes with BRouter and configure routing profiles to better define the route according to the user's needs.  

For more information you can visit official [Brouter website](http://www.brouter.de/brouter/algorithm.html).  

:::note
The third-party routing algorithm BRouter is only available for the Android version of the OsmAnd app.
:::  


<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/BRouter_overview2.png').default} alt="BRouter"/></td>
    </tr>
</table> 


## How to configure

Follow this guide to installing and configuring the third-party *BRouter Offline Navigation* application for use in OsmAnd.  

**1.** To get started, you need to install [BRouter](https://play.google.com/store/apps/details?id=btools.routingapp) on your device.  
**2.** Then, to navigate using the OsmAnd app along pre-calculated routes with the BRouter, you need to:  
   
  - Open BRouter application and tap *Download Manager*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof19.png').default} alt="BRouter"/></td>
    </tr>
</table> 

  - Touch the region to zoom in. Select the required segments of the map and "Start Download" them to your device.  

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

**3.** Choose a routing profile depending on your mode of travel. It could be biking, moped, hiking, or trekking. A list of available profiles for download in *brf* format can be found [here](http://brouter.de/brouter/profiles2/). Or you can try using the routing profile in [BRouter-online](http://brouter.de/brouter-web/).  

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof18.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof18a.png').default} alt="BRouter"/></td>
    </tr>
</table>  

**4.** If you have already loaded any segments previously, they will be displayed on the BRouter map. The segments have four states:  
- *"Green"* square - Selected new segment to download.
- *"Blue"* square - The segment with updated data.
- *"Grey"* square - The segment is already downloaded but requires updating.
- *"Yellow"* square - The segment is being updated.

<table class="blogimage">
    <tr>
    <img src={require('@site/static/img/navigation/third/brouter-downl2.png').default} alt="BRouter"/>
    </tr>
</table> 

**5.** When you have loaded the required map segments with BRouter and selected a routing profile in it, all the next settings of this type of navigation are made in the OsmAnd application.   

**6.** Use the *BRouter (offline)* routing type with any [profile](../../personal/profiles.md) in the OsmAnd app. To do this, go to the main *<Translate android="true" ids="shared_string_menu,configure_profile,navigation_profile,nav_type_hint,shared_string_offline,shared_string_external,routing_profile_broutrer"/>*  

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/brouter-2.png').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/brouter-3.png').default} alt="BRouter"/></td>
    </tr>
</table> 


## How to use

This section describes a comparison of BRouter with the internal routing of the OsmAnd application.  

When BRouter is configured, we can compare the pre-calculation speed of the BRouter routing data with the internal OsmAnd routing. Let's choose two random points in the Netherlands and start calculating the trip. For this, we set a balanced driving style without using altitude data for the base profile. The calculation time for this trip is 14.5 sec for our internal OsmAnd route. The route calculation time when using BRouter routing is less than 1 second.  

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/navigation/third/prof21.jpg').default} alt="BRouter"/></td>
        <td><img src={require('@site/static/img/navigation/third/prof21a.jpg').default} alt="BRouter"/></td>
    </tr>
</table> 


## Route parameters

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*  

![BRouter](@site/static/img/navigation/routing/BRouter_route_param.png)   

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* | <Translate android="true" ids="routing_attr_short_way_description"/>  <Translate android="true" ids="fast_route_mode_descr"/> | In most cases, the shortest route will be suggested. Often this route can take longer than if the setting was disabled |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  Read about Consider temporary limitations option in this [article](./index.md#avoid-temporary-closures).   | The routing algorithm can take into account the time constraints specified in the OpenStreetMap. Note that in some cases the information from the OSM may be out of date.   |

Other routing settings:  
- In the [Recalculate route section](../setup/route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.
