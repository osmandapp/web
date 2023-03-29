---
sidebar_position: 7
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

<InfoIncompleteArticle/>

## Overview

Boat routing can be a valuable tool for anyone who enjoys boating or sailing, regardless of whether you are a water sports enthusiast or a professional sailor. It can help you stay safe on the water by avoiding hazards such as shallow waters, rocks, or other obstacles.  
The OsmAnd Boat routing engine also takes into account the characteristics of the waterways and the boat themselves.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs>  

## Route parameters - Boat

Boat routing can be configured according to your needs in the [Route parameters section](../../navigation/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings of the Boat profile.  

:::note
Typically, *Boat routing* is used with boat profile (the last one enabled together with the [Nautical plugin](../../plugins/nautical-charts.md)).  However, it is possible to use boat routing with other profiles as well, and different [rooting types](#other-routing-types-for-boat) can also be employed within the boat profile.  
:::

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
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Allows to use streams and drains for boat navigation. This option may be useful for smaller boats such as canoes, kayaks, rafts, rowboats. |  [Streams](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) are naturally-forming waterways that is too narrow to be called a river. [Drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) are artificial waterways, typically lined with concrete or similar, used to carry superfluous water like storm water or grey-discharge.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Allows to use intermittent waterways for boat navigation.  | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) is used to indicate that a waterway does not permanently contain water.  |

Other routing settings:  
- The routing algorithm can take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](./index.md#avoid-temporary-closures)* option. Note that in some cases, information from OSM can be outdated.  
- In the [Recalculate route section](../route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) should be set according to your boat parameters. They are used to determine whether the waterway can be used for routing.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

## Other routing types for Boat

[Boat routing](#route-parameters---boat) type is a default routing engine for Boat profile. Though you can choose another one navigation type, which are also suitable for boat navigation:  
- [Direct-to-point](#direct-to-point)
- [Straight-line](#straight-line)  

Other routing types for the boat profile can be activated using the following path:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> or another one) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*


:::note
It's important to note, that the *Direct-to-point* routing and *Straight line* routings types should only be used in open water where there are no obstacles or hazards to navigation. If you are navigating in a waterway with a specific channel or route, you should use the boat routing type in OsmAnd, which will guide you through the correct navigational channels and avoid shallow areas or other hazards.
:::

#### Direct-to point routing for Boat

The [Direct-to-point routing type](./direct-to-point-routing.md) can be used with the boat profile when you want to navigate your boat in open water without following any specific route or waterway. This routing type allows you to set a destination point and OsmAnd will calculate a direct path to that point from your current location. This type of routing doesn't take into account the characteristics of your boat such as minimum and maximum speeds, heght and width. Your route will not be recalculated in case of deviation.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

#### Straight line routing for Boat

The [Straight line routing type](./straight-line-routing) can be used with the boat profile when you want to navigate your boat in open water, but prefer to follow a straight line to your destination point, rather than a curved route. This can be useful when navigating to a distant point, that is visible on the horizon, for example.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

