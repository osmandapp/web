---
sidebar_position: 3
title:  Bicycle-based (MTB, Moped) routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

## Overview

Bicycle routing take into account factors such as the availability of bike paths, trails, and roads that are safe and legal for bicyclists, as well as other factors such as elevation differences and pedestrian traffic. The features of riding a city bike are also good for navigate routes for riding a [moped](#moped-routing-settings) and can be useful for [mountain biking](#mtb-routing-settings).


## Bicycle routing settings

Bicycle routing is especially important because it is designed to help cyclists plan and navigate routes that are optimal for their needs. For example, cyclists may want to avoid busy roads or steep climbs, and instead, choose quieter routes with less traffic and gentler slopes. OsmAnd's bicycle routing feature allows cyclists to input a start and end point, and then generates a route that takes into account their preferences and local geography.  

Bicycle routing can be configured according to your needs in [Navigation settings](../../navigation/#navigation-settings) of the Bicycle profile.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*Menu → Configure profile → Navigation settings → Route parameters*

![Bicycle routing settings](@site/static/img/navigation/routing/Bicycle-based_bicycle_andr-4.png)  


| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="fast_route_mode"/>* |  <Translate android="true" ids="fast_route_mode_descr"/>    |              |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>*   |  Select a driving target to get a shorter, faster, safer, or unpaved route. | *<Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>*: prefer unpaved over paved roads for routing. <br />  *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>*: prefer safer roads for routing. <br /> *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>*: prefer faster way for routing. <br />  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>*: prefer shorter way for routing. <br />     |
| *<Translate android="true" ids="impassable_road"/>* |  Avoid certain routes and road types for routing:    |  Each navigation type has its own set of avoiding.  |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  <Translate android="true" ids="routing_attr_allow_private_description"/>  |    |
| *<Translate android="true" ids="routing_attr_allow_motorway_name"/>* |  <Translate android="true" ids="routing_attr_allow_motorway_description"/>  | Cycling |
| *<Translate android="true" ids="routing_attr_height_obstacles_name"/>* |  Allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  <Translate android="true" ids="temporary_conditional_routing_descr"/>. Data from OpenStreetMap. |    |  

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Settings → App profiles → Navigation settings → Route parameters*

![Bicycle routing settings iOS](@site/static/img/navigation/routing/Bicycle-based_bicycle__ios_1.png)  


| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate ios="true" ids="recalculate_route"/>* |  <Translate ios="true" ids="route_recalculation_descr"/>    |              |
| *<Translate ios="true" ids="recalculate_wrong_dir"/>*  |  The route will be recalculated if you are moving to the start point.   |              |
| *<Translate android="true" ids="fast_route_mode"/>* |  <Translate android="true" ids="fast_route_mode_descr"/>    |              |
| *<Translate ios="true" ids="routing_attr_driving_style_name"/>*   |  Select driving puprose to get shorter, faster, safer or unpaved route. | *<Translate ios="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>*: prefer unpaved over paved roads for routing. <br />  *<Translate ios="true" ids="routing_attr_driving_style_safety_name"/>*: prefer safer roads for routing. <br /> *<Translate ios="true" ids="routing_attr_driving_style_balance_name"/>*: prefer faster way for routing. <br />  *<Translate ios="true" ids="routing_attr_driving_style_speed_name"/>*: prefer shorter way for routing. <br />     |
| *<Translate ios="true" ids="impassable_road"/>* |  Avoid certain routes and road types for routing:    |   Navigation types and notes           |
| *<Translate ios="true" ids="preferred_terrain"/>* |  allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |  
| *<Translate ios="true" ids="routing_attr_allow_motorway_name"/>* |  using Motorways for routing  |   Cycling routing |
| *<Translate ios="true" ids="routing_attr_allow_private_name"/>* |  Ignore the Private Access restriction for routing  |    |
| *<Translate ios="true" ids="consider_limitations_param"/>* |  Using temporaty limitations for routing from OpenStreetMap data  |    |
| *<Translate ios="true" ids="road_speeds"/>* |  Setting the minimum and the maximum travel speed for all roads in the route.  |    |

</TabItem>

</Tabs>


## Moped routing settings

<InfoAndroidOnly/>

Moped routing allows drivers to build an optimal route, taking into account the specifics of driving a vehicle such as a moped or scooter. The routing process considers various factors for safe, comfortable, and legal movement on roads or bicycle paths.

![Moped routing settings](@site/static/img/navigation/routing/Bicycle-based_Moped_andr-1.png)  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  Avoid certain routes and road types for routing:    |  Each navigation type has its own set of avoiding.  |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  <Translate android="true" ids="routing_attr_allow_private_description"/>  |    | 
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  <Translate android="true" ids="temporary_conditional_routing_descr"/>. Data from OpenStreetMap. |    |


## MTB routing settings

The MTB (mountain biking) routing feature in the OsmAnd app is similar to bicycle routing, but specifically designed for off-road riding on rough terrain. It takes into account factors such as unpaved roads, gravel paths, and steep slopes, and helps riders find the safest and most enjoyable routes for their mountain biking adventures.

