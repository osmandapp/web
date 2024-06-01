---
sidebar_position: 10
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

![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)


![Straight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

Straight line routing does not take into account any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests. It also does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route ([Route Details](../setup/route-details.md) section is empty).  

## Route parameters - Straight line

:::note
Straight line routing is linked to *Aircraft profile*. By default, this profile is deactivated. In order to use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Straight line* routing can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings.  

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
- In the [Recalculate route](../setup/route-navigation.md#route-recalculation) options, the distance at which the route will be recalculated for the Straight line routing is set to 500 meters by default.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (iOS) can also be set for *Straight line* routing. It is used to calculate Estimated Time of Arrival.
- In the [Development section](../guidance/navigation-settings.md#development-settings) of the Route parameters, you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.