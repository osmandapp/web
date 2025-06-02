---
sidebar_position: 8
title:  Boat routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview

Boat routing can be a valuable tool for anyone who enjoys boating or sailing by channels, rivers or fairways. Due to lack of most Fairways in OpenStreeetMap data,  the boat routing is *not recommended* for **open water navigation**, it is suggested to use **[Direct to point](#direct-to-point-routing-for-boat)** instead. With Depth contour lines enabled, it can help you stay safe on the water by avoiding hazards such as shallow waters, rocks, or other obstacles.  
The OsmAnd Boat routing engine also takes into account the characteristics of the waterways and the boat themselves.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Route Parameters - Boat

:::note
By default, *Boat profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Boat routing can be configured according to your needs in the [Route parameters section](../../navigation/guidance/navigation-settings.md#route-parameters) of the Navigation settings.  

Typically, *Boat routing* is used with boat profile (the last one enabled together with the [Nautical plugin](../../plugins/nautical-charts.md)).  However, it is possible to use boat routing with other profiles as well, and different [routing types](#other-routing-types-for-boat) can also be employed in the boat profile.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Boat routing settings Android](@site/static/img/navigation/routing/boat_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Boat routing settings iOS](@site/static/img/navigation/routing/boat_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Allows you to use streams and drains for boat navigation. Enabling this option may be useful for small boats such as canoes, kayaks, rafts, rowboats. |  [Streams](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) are naturally-forming waterways that are too narrow to be called a river. [Drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) are artificial waterways, typically lined with concrete or similar, used to carry superfluous water like storm water or grey-discharge.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Turning this option on allows you to use intermittent waterways to navigate by boat.   | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) is used to indicate that a waterway does not permanently contain water.  |


:::note Water Navigation and Limitation

1. The Boat profile is designed for routing along rivers, lakes, and other waterways. It supports OSM tags such as:
    - `waterway=river`
    - `waterway=canal`
    - `natural=water`, etc.

2. The Boat profile **does not support ferry routes (`route=ferry`)**. This means ferry routes, even if present on the map, will **not be used** when calculating boat routes.

3. To follow a ferry line manually:

    - Use the [Plan a Route](../../plan-route/create-route.md) tool and place waypoints manually.
    - Use the Car profile, which supports ferry routes

:::

## Other Routing Types for Boat

[Boat routing](#route-parameters---boat) type is a default routing algorithm for Boat profile. Although you can choose another routing type, which is also suitable for boat navigation:  

 - [Direct-to-point routing for Boat](./boat-navigation.md#direct-to-point-routing-for-boat)
 - [Straight line routing for Boat](./boat-navigation.md#straight-line-routing-for-boat)

It's important to note, that the *Direct-to-point* and *Straight line* routings types should only be used in open water where there are no obstacles or hazards to navigation. If you are navigating in a waterway with a specific channel or route, you should use the boat routing type in OsmAnd, which will guide you through the correct navigational channels and avoid shallow areas or other hazards.  

These routing types for the boat profile can be activated using the following path: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> or another one) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


### Direct-to-Point Routing for Boat

:::note
When using Direct-to-point and Boat navigation types, you will need [Depth contours data](../../plugins/nautical-charts.md#nautical-map-style), which can be enabled and set in *Configure map*.
:::

The [Direct-to-point routing type](./direct-to-point-routing.md) can be used with the boat profile when you want to navigate your boat in open water without following any specific route or waterway. This routing type allows you to set a destination point and OsmAnd will calculate a direct path to that point from your current location. This type of routing doesn't consider the characteristics of your boat such as minimum and maximum speeds, height and width. Your route will not be recalculated in case of deviation.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)


### Straight Line Routing for Boat

The [Straight line routing type](./straight-line-routing) can be used with the boat profile when you want to navigate your boat in open water but prefer to follow a straight line rather than a curved route to your destination point. This can be useful when navigating to a distant point, that is visible on the horizon, for example.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## Other Routing Settings

- The routing algorithm can also consider temporary limitations specified in OpenStreetMap. This can be done using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, information from OSM can be outdated.  

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, you can enable and adjust route recalculation options.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

- *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* setting in the *iOS* version of OsmAnd is located in *Navigation settings → Route parameters* (for *Android*, in *Vehicle parameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). This setting is used on unknown roads without speed limits. This is most often the case when navigating a track or online route. It must be set according to the parameters of your vehicle.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Properly configuring the settings will help you avoid problems when creating a route. You can select the most appropriate route depending on the type of vehicle and road restrictions, as well as calculate the travel time.

> *This article was last updated in May 2025*
