---
sidebar_position: 9
title:  Straight line routing (Aircraft)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

## Overview

Unlike traditional routing algorithms, which use roads, trails, or predefined routes, straight line routing calculates the shortest distance between two points on the map as a straight line. This feature can be useful for hikers, backpackers, and other outdoor enthusiasts who want to navigate off-trail or explore remote areas where traditional routes may not be available. Light aircraft pilots or ship skippers can also use this type of routing in their daily routine.  

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

:::note
Straight line routing does not take into account any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests. It also does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route ([Route Details](../route-navigation.md#route-details) section is empty).  
:::

## Route parameters - Straight line

*Straight line* routing can be configured according to your needs in the [Route parameters section](../../navigation/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Straight line routing settings Android 1](@site/static/img/navigation/routing/aircraft_routing_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Straight line routing settings iOS 1](@site/static/img/navigation/routing/straight_line_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="recalc_angle_dialog_title"/>* |  <details><summary> <Translate android="true" ids="recalc_angle_dialog_descr"/>  </summary>![Straight line recalculation Android](@site/static/img/navigation/routing/straight_line_recalculation_andr.png) </details>  | When the angle between the calculated route and actual geolocation is higher than the one set by the user, the shortest path from your current position to the calculated route will be built. In other words, OsmAnd will calculate an additional route segment to the previously calculated route. |  

Other routing settings:  
- In the [Recalculate route](../route-navigation.md#route-recalculation) options, the distance at which the route will be recalculated for the Straight line routing is set to 500 meters by default.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) can also be set for *Straight line* routing. Default value is 720 km/h.
- In the [Development section](../routing/index.md#development-settings) of Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.