---
sidebar_position: 2
title: Routing types
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

The routing type determines how the route will be calculated. The OsmAnd app uses different routing types for hiking, cycling, skiing or boating routes. 

The following profiles (with their own routing types) are available by default: *Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding*.  

:::note  
*Truck, Motorcycle, Moped, Aircraft and Horseback* riding profiles are switched off by default. You need to activate these profiles.
:::

| Category | Description | Note |
|:------------|:---------------|:---------------|
| OsmAnd <Translate android="true" ids="shared_string_offline"/> |  Offline routing uses sources of the device and calculation the route by using data of OsmAnd offline maps.  |  Navigation types ([OsmAnd routing](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)) by default: <!-- Add links!!! --> <Translate android="true" ids="app_mode_boat"/>, <Translate android="true" ids="rendering_value_bicycle_name"/>, <Translate android="true" ids="routing_profile_direct_to"/>, <Translate android="true" ids="rendering_value_car_name"/>, <Translate android="true" ids="rendering_value_pedestrian_name"/>, <Translate android="true" ids="app_mode_public_transport"/>, <Translate android="true" ids="routing_profile_ski"/>, <Translate android="true" ids="routing_profile_straightline"/>, <Translate android="true" ids="horseback_riding"/>.            |
| <Translate android="true" ids="shared_string_online"/> (Android) |  Online routing builds the route servers' resources online by the Internet connection. | Available only on **Android**. You can configure [online routing](./online-routing.md) provider to build a route from various online routing engines such as [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |
| <Translate android="true" ids="routing_profile_broutrer"/>  |  Offline routing provided by [BRouter app](https://brouter.de/)  | Available only on **Android**. The full description read [here](./brouter.md).   |

## Offline OsmAnd Routing

Offline OsmAnd routing is based on OpenStreetMap data and provides variety of routes for different purposes. This is a list of predefined routing types which could be extended. The navigation rules are contained in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) file and are used for offline routing. The route type changes automatically, when you change your profile.  
**You can also create your [own routing.xml file](#custom-routing) and use it for navigation (only for advanced OsmAnd users).**  

- [Car routing (Truck, Motorcycle)](./car-based-routing.md) - OsmAnd provides driving instructions for  drivers of Cars, Trucks and Motorcycles.  
- [Bicycle  routing (MTB)](./bicycle-based-routing.md) - Bicycle routing provides navigation prompts specifically for cyclists and mtb enthusiasts. It can also be used by moped (scooter) drivers.  
- [Pedestrian routing](./pedestrian-routing.md) - Pedestrian routing can be used not only for walking around the city, but also during hiking trips.
- [Moped routing](./moped-routing.md) - Moped routing is based on the bicycle routing, though it has it's own features.
- [Public Transport routing](./public-transport-navigation.md) - Public Transport navigation can help you while traveling around the city.
- [Horseback routing](./horse-routing.md) - Horse routing provides equestrians with tools they need to plan and enjoy their horseback riding activities.  
- [Skiing routing](./ski-routing.md) - Ski routing allows users to plan and navigate ski tours and other winter sports activities using the OsmAnd mobile app.  
- [Boat routing](./boat-navigation.md) - Boat routing can be used to build a route on rivers, channels, small lakes and in the open sea but only when fairways are marked in OpenStreetMap.

### Avoid specific roads

[Select roads](../../map/map-context-menu.md#avoid-road) on map to avoid


### Avoid temporary closures

Consider temporary limitations

### Customize offline routing

You can modify _routing.xml file_ for your own needs. It means that you can update the routing algorithm according to your preferences.  
More info about this possibility you may find in [Technical documentation](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  

- To change the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file, you first need to copy it. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. [OsmAnd user's routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file for an example.
- To add a new *routing.xml* file to OsmAnd, just tap on the file and choose to open it in the OsmAnd app.
- Select the [Navigation type](../../navigation/route-navigation.md#type-of-navigation) for your profile.

### Development settings

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | You can use OsmAnd Live updates for navigation.  |  Enable / disable for testing purpose use of Live updates for routing |
| *<Translate android="true" ids="use_two_phase_routing"/>  | You can use <Translate android="true" ids="complex_routing_descr"/> |   |
| *<Translate android="true" ids="use_fast_recalculation"/> | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   |

## Direct to point 

- *[Straight line routing](./straight-line-routing.md)* - Provides a straight line routing (or "point-to-point" navigation) which is recalculated if location is far away from straight line.  
- *[Direct-to-point routing](./direct-to-point-routing.md)* - Provides a straight line routing (or "point-to-point" navigation) which stays stable for whole navigation in contrast to **Straight line** routing.

## Other Routing types 

- *[Online routing](./online-routing.md)* - Online routing is an OsmAnd feature that allows users to plan and navigate routes using online services.  
- *[BRouter routing](./brouter.md)* - BRouter app can be used for offline routing.
