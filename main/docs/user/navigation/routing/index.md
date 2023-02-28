---
sidebar_position: 2
title: Navigation types
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

### Types of routing  

Routing type determines how the route will be calculated. The OsmAnd app uses different routing types for hiking, cycling and, for example, boat trips. The navigation rules are contained in [routing.xml](../docs/technical/osmand-file-formats/osmand-routing-xml.md) file and used for offline routing. Routing type change automaticly, when you change profile. You can also create your [own routing.xml file](#custom-routing) and use it for navigation (only for advanced OsmAnd users!).  

The following profiles are available by default: *Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding*.  

:::note  
Truck, Motorcycle, Aircraft and Horseback riding profiles are switched off by default. You need to activate these profiles.
:::

### [Car-based (v) routing](#car-based-routing)

OsmAnd provides driving instructions for Car, Truck, Motorcycle drivers.  
### [Bicycle-based (MTB, Moped) routing](#bicycle-based-routing)

Bicycle routing provides navigation directions specifically for bicycle riders.  

### [Pedestrian routing](#pedestrian-routing)

Pedestrian routing can be used not only for walking in the city, but also during hiking trips.
### [Public Transport routing](./public-transport-navigation.md)

Public Transport navigation is your help during trips in cities

### [Horse / ski routing](#horse-ski-routing)

Ski routing in OsmAnd is a feature that allows users to plan and navigate ski tours, backcountry skiing routes, and other winter sports activities using the OsmAnd mobile app.  
Horse routing in OsmAnd is a valuable feature that provides equestrians with the information and tools they need to plan and enjoy their horseback riding activities.  
### [Boat routing](#boat-navigation)

### [Straight line](#straight-line-routing) 

Straight line routing in OsmAnd is a feature that allows users to navigate between two points on a map using a straight line path. This feature is sometimes also referred to as "point-to-point" routing.  
### [Online routing](#online-routing)

Online routing is an OsmAnd feature that allows users to plan and navigate routes using an online services.  

### [BRouter routing](./thirdparty-routing.md)

BRouter routing for offline

### Custom routing

OsmAnd allows modification _routing.xml file_ for routing. It means that you can update the routing algorithm for your needs. More info about it you may find in [Technical documentation](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  

- To change the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file, you first need to copy it. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. [OsmAnd user's routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file for an example.
- To add a new *routing.xml* file to OsmAnd, just tap on the file and open it in OsmAnd.
- Select the [Navigation type](../../navigation/route-navigation.md#type-of-navigation) for your profile.
