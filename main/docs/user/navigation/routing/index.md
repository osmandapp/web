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

### [Car-based (Truck, Motorcycle, Car) routing](#car-based-routing)

OsmAnd provides driving instructions for Car, Truck, Motorcycle drivers.  
### [Bicycle-based (MTB, Moped) routing](#bicycle-based-routing)

Bicycle routing provides navigation prompts specifically for bicycle riders.  

### [Pedestrian routing](#pedestrian-routing)

Pedestrian routing can be used not only for walking in the city, but also during hiking trips.
### [Public Transport routing](./public-transport-navigation.md)

Public Transport navigation is your help during trips in cities.

### [Horse / ski routing](#horse-ski-routing)

Ski routing in OsmAnd is a feature that allows users to plan and navigate ski tours, backcountry skiing routes, and other winter sports activities using the OsmAnd mobile app.  
Horse routing in OsmAnd is a valuable tool that provides equestrians with the information and tools they need to plan and enjoy their horseback riding activities.  
### [Boat routing](#boat-navigation)

Boat routing can be used when navigating rivers, lakes and in the open sea.
### [Straight line](#straight-line-routing) 

Straight line routing (or "point-to-point" navigation) is a feature that allows users to navigate between two points on a map using a straight line path.  
### [Online routing](#online-routing)

Online routing is an OsmAnd feature that allows users to plan and navigate routes using online services.  

### [BRouter routing](./thirdparty-routing.md)

BRouter routing for offline navigation.

### Custom routing

You can modify _routing.xml file_ for your own needs. It means that you can update the routing algorithm according to your preferences.  
More info about this possibility you may find in [Technical documentation](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  

- To change the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file, you first need to copy it. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. [OsmAnd user's routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file for an example.
- To add a new *routing.xml* file to OsmAnd, just tap on the file and choose to open it in the OsmAnd app.
- Select the [Navigation type](../../navigation/route-navigation.md#type-of-navigation) for your profile.
