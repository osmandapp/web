---
sidebar_position: 3
title:  Bicycle routing (MTB)
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

Bicycle routing take into account factors such as the availability of bike paths, trails, and roads that are safe and legal for bicyclists, as well as other factors such as elevation differences and, for example, pedestrian crosswalks. Bicycle routing can also be useful for [mountain biking](#mtb-routing-settings).

You can configure *Bicycle routing* in the [Route parameters section](../../navigation/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings of the *Cycling profile*.

## Route parameters - Bicycle

OsmAnd's bicycle routing features allows cyclists to input a start and end point, and then generate a route that takes into account their preferences and local geography.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Bicycle routing settings](@site/static/img/navigation/routing/Bicycle-based_bicycle_andr-4.png)    

</TabItem>

<TabItem value="ios" label="iOS">

![Bicycle routing settings iOS](@site/static/img/navigation/routing/Bicycle-based_bicycle__ios_1.png)  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  The routing mechanism will choose more direct and, accordingly, faster roads.  | Despite the increase in the speed of movement, the distance traveled also increases at the same time. This leads to an increase in muscle effort. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Driving&nbsp;style* (iOS) | <details><summary> You can choose your riding style for a better routing. </summary> ![Riding style cycling Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> [<Translate android="true" ids="routing_attr_driving_style_safety_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dcycleway#Examples) </li><li> [<Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved) </li><li>  <Translate android="true" ids="routing_attr_driving_style_balance_name"/> </li><li>  <Translate android="true" ids="routing_attr_driving_style_speed_name"/> </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road type(s) from the list:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Avoid crossing a border into another country)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parts of a highway where a waterway runs over it) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[No cobblestone](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone) or [sett](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Ignore private access restrictions for routing.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferred&nbsp;terrain* (iOS) | <details><summary> Elevation data will be used in route calculation: penalties for roads with another elevation profile will be set. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | This preference can help avoid steep hills or vice versa, prefer them. Using this option may be very helpful in pedestrian routing. |

Other routing settings:  
- The routing algorithm can take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](./index.md#avoid-temporary-closures)* option. Note that in some cases, information from OSM can be outdated.  
- In the [Recalculate route section](../route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) should be set according to your vehicle parameters. They are used to determine whether the road can be used for routing.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

## MTB routing particularities

The MTB (mountain biking) routing mechanism is the same as bicycle routing. Note, that there are some penalties for using [MTB routes](../../map/vector-maps.md#routes), and therefore they are less likely to be offeredfor for cycling to home or to work.  