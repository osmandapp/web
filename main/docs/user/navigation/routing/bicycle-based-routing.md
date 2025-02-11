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


## Overview

Bicycle routing considers factors such as the availability of bike paths, trails, and roads that are safe and legal for bicyclists. OsmAnd always uses elevation data when calculating the estimated time of arrival (time to cover the distance) according to [Naismith's rule](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb). By default the fastest route is provided.  
Bicycle routing can also be useful for [mountain biking](#mtb-routing-particularities).  

You can configure *Bicycle routing* in the [Route parameters section](../guidance/navigation-settings.md/#route-parameters) of the Navigation settings.


## Route Parameters - Bicycle

OsmAnd's bicycle routing features allows cyclists to input a start and end point, and then generate a route that takes into account their preferences and local geography.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Bicycle routing settings](@site/static/img/navigation/routing/cycling_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Bicycle routing settings iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="fast_route_mode"/>*  |  The routing mechanism will choose more direct and, accordingly, faster roads.  | Despite the increase in the speed of movement, the distance traveled also increases at the same time. This leads to an increase in muscle effort. |
| *<Translate android="true" ids="routing_attr_driving_style_name"/>* (Android) *Driving&nbsp;style* (iOS) | <details><summary> You can choose your riding style for a better routing. </summary> ![Riding style cycling Android](@site/static/img/navigation/routing/style_cycling_andr.png)  </details>  | <ul><li> *<Translate android="true" ids="routing_attr_driving_style_safety_name"/>* (will be preferred less busy roads with tags [secondary](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsecondary) and [residential](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dresidential)) </li><li> *Prefer [unpaved roads](https://wiki.openstreetmap.org/wiki/Key:surface#Unpaved)* </li><li>  *<Translate android="true" ids="routing_attr_driving_style_balance_name"/>* (this option is something in between *prefer byways* and *shortest route*) </li><li>  *<Translate android="true" ids="routing_attr_driving_style_speed_name"/>* (for routing will be preferred wider and usually busier roads, providing faster routes) </li></ul>  |
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_cycling_andr.png) </details>  | You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road type(s) from the list:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Avoid crossing a border into another country)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[Avoid cobblestone](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dcobblestone)</li><li> [<Translate android="true" ids="routing_attr_avoid_fords_name"/>](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parts of a highway where a waterway runs over&nbsp;it) </li><li> [<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel) </li><li> [No sett](https://wiki.openstreetmap.org/wiki/Tag:surface%3Dsett)</li><li> [<Translate android="true" ids="routing_attr_avoid_footways_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dfootway) </li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* (Android) *Preferred&nbsp;terrain* (iOS) | <details><summary> Elevation data will be used in route calculation: [penalties for roads](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) with another elevation profile will be set. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | This preference can help avoid steep hills or vice versa, prefer them. If you choose *hilly* route, preference will be given to hills and mountains. If *flat* - to flats, hills will be avoided. Less hilly preference is something in between these two options. Without elevation data the fastest route as on plain terrain will be calculated. |


## MTB routing particularities

The MTB (mountain biking) routing mechanism is the same as bicycle routing. Note, that there are some penalties for using [MTB routes](../../map/vector-maps.md#routes), and therefore they are less likely to be offered for cycling to home or to work.


## Other Routing Settings

- The routing algorithm can also consider temporary limitations specified in OpenStreetMap. This can be done using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, information from OSM can be outdated.  

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, you can enable and adjust route recalculation options.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

- *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* setting in the *iOS* version of OsmAnd is located in *Navigation settings → Route parameters* (for *Android*, in *Vehicle parameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). This setting is used on unknown roads without speed limits. This is most often the case when navigating a track or online route. It must be set according to the parameters of your vehicle.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Properly configuring the settings will help you avoid problems when creating a route. You can select the most appropriate route depending on the type of vehicle and road restrictions, as well as calculate the travel time.

> *This article was last updated in June 2024*
