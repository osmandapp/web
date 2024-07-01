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

> *This article was last updated in June 2024*

## Overview

Unlike traditional routing algorithms that use roads, trails, or predefined routes, straight line routing calculates the shortest distance between two points on the map as a straight line. This feature can be useful for active hikers who want to route away from trails or explore remote areas where traditional routes may not be available. For light aircraft pilots and ship skippers, using the *Straight line routing type* can be very useful in navigation.  

<!-- ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_1.png) ![Straight line Navigation example Android 1](@site/static/img/navigation/routing/straight_line_routing_andr_2.png)  -->

- *Straight line* routing does not take into account any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests.
- It does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route ([Route Details](../setup/route-details.md) section is empty).   

![Straight-line Navigation type Android](@site/static/img/navigation/routing/straight_line_routing_andr.png)


## Route parameters - Straight line

:::note
Straight line routing is linked to *Aircraft profile*. By default, this profile is deactivated. In order to use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Straight line* routing can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#route-parameters) of the Navigation settings.  

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


## Other routing settings

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, the distance at which the route will be recalculated for *Straight line routing* is set to 500 meters by default.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

- *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* setting in the *iOS* version of OsmAnd is located in *Navigation settings → Route parameters* (for *Android*, in *Vehicle parameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). These settings can also be set for *Direct-to-point* routing. It is used to calculate Estimated Time of Arrival. 

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Properly configuring the settings will help you avoid problems when creating a route. You can select the most appropriate route depending on the type of vehicle and road restrictions, as well as calculate the travel time.