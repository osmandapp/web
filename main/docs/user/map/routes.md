---
sidebar_position: 9
title:  Routes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

OsmAnd has many powerful features for displaying different [routes](#type-of-routes) on the map. By default, these routes are part of [vector maps](./vector-maps.md#routes) (OpenStreetMap data), however similar functionality is provided by [tracks](./tracks/index.md) which could be created with [Plan a Route](../plan-route/create-route.md), imported as [GPX tracks](#save-as-a-track), recorded with the [Trip Recording plugin](../plugins/trip-recording.md).


## Type of Routes

Routes represent different outdoor activities using data from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tapping **the shield icon with a route number or route flag** on the map will open a context menu that provides additional information about the route and allows using it as part of navigation.

You can configure the filtering of some route types in the [Configure Map](../map/configure-map-menu.md) menu.

### Cycle routes

[Cycle routes](https://wiki.openstreetmap.org/wiki/Cycle_routes) are present in three types: *local* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Also, cycle routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

You can find more information in the [Map Legend](../map-legend/index.md) article.


### Mountain bike routes

MTB routes have a specific mapping in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) and could be selected separately from cycling routes.

- ***<Translate android="true" ids="mtb_scale"/>***.  Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article.  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Hiking / Walking routes

[Hiking routes](https://wiki.openstreetmap.org/wiki/Walking_Routes) are present in three types: *local* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Also, walking routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd doesn't separate walking and hiking routes and combines them into 1 group. You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colors routes according to their individual [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (if available in OpenStreetMap) and the tourist shield symbol.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colors by [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colors routes according to the type of [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional, or local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Dirt Bike Trails

The **Dirt Bike Trails** feature allows you to display dirt bike-specific routes on the map based on the `dirtbike:scale` tag. This scale highlights trails suitable for dirt biking, with a colored overlay showing difficulty levels.  

You can activate this feature in *Menu → Configure map → Routes → Dirt bike routes*. The system functions similarly to the MTB scale, offering a visual representation of routes tailored to dirt biking — more about the [‘dirtbike’ tag can be found here](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)


### Climbing Routes

OsmAnd supports *climbing areas* (`climbing=area`) and *climbing crags* (`climbing=crag`), allowing you to find [rock climbing](https://wiki.openstreetmap.org/wiki/Climbing) locations directly on the map.

- **Climbing areas** represent **larger zones** where multiple climbing routes exist.

- **Climbing crags** refer to **specific rock formations** or walls suitable for climbing.

- These locations include **detailed attributes** such as:

    - *Climbing grade* (e.g., UIAA, French, YDS).
    - *Rock type* (e.g., limestone, granite).
    - *Route length* (in meters).
    - *Climbing quality* (solid, loose, mixed).
    - *Summit log availability*.

To enable climbing locations on the map, go to: *Menu → Configure Map → Routes → Climbing Routes*.

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)


### Hiking Trails Difficulty Grade

Some road segments could be part of many routes, but they could be individually colored to represent the difficulty of the segment in mountainous areas. Currently, OsmAnd supports Italian and Swiss classifications, and each has a specific list of equipment requirements to access this segment.  

1. [SAC scale](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI scale](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

### Ski routes

Ski routes are a specific group of [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typically, these routes could be used with [Winter and Ski](../map/vector-maps.md#winter-and-ski) map style with all visible [Pistes](https://wiki.openstreetmap.org/wiki/Pistes).  

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

### Horse routes

[Horse routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) are displayed as color-indicated routes with symbols for horseback riding.  

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

### Whitewater sports

[Whitewater routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) are shown together with access icons, danger zones for [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

### Running routes

[Running routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap are used for named, numbered, or otherwise marked running routes, primarily for athletics.

![Fitness routes](@site/static/img/map/fitness_1.png)

### Fitness trails

A [fitness trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is a trail or path equipped with obstacles or stations along its length to exercise the human body to improve health.  

![Fitness routes](@site/static/img/map/fitness_route.png)

### Travel routes

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Travel routes are part of custom [Travel book](../plan-route/travel-guides.md) (`travel.obf`) files, which can be generated from the [user's routes](https://osmand.net/blog/routes#generated-travel-routes) or be part of additional [plugins](../plugins/index.md).  

You can customize the display of certain ***Travelbooks*** and types of ***tracks***, display tracks as points, or ***Point groups*** (for example for Wikivoyage travel books). Learn more about [Travel guides here](../plan-route/travel-guides.md).


## Display Routes on the Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Route Info and Elevation

Tap the *route icon (shield)* on the map to get full route information and elevation data. If you have already used the *Download button* in the [track context menu](../map/tracks/track-context-menu.md), tap the line of the required route on the map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>  

The following information will be visible in the context menu:

- **Route info**: Route name, OSM link (OSM Editing plugin required), Type, Description, Distance, Direction, Ascent/Descent, Altitude range, Network, Operator, State, Color, Roundtrip, Start/End points, and more.
- **General**: Size, Location, Created on.
- **Additional Info**. Displays type of activity.
- [Elevation info](../navigation/setup/route-details.md#elevation-info). Displays information about the elevation data on the route.
- [Analyze Track on Map](../map/tracks/index.md#analyze-track-on-map). Displays detailed analysis of track data using graphs and maps.

### Save as a Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  

[Hiking, Cycle, Travel, and other routes](#type-of-routes) are available for selection on the map, and marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol). If you tap a *route symbol*, a list of the routes nearest to it is offered. Selecting one of them opens the [track context menu](../map/tracks/track-context-menu.md) of the route.  

To save the route as a *GPX file*, tap the **Save (Download)** button under [Info panel](../map/tracks/track-context-menu.md#info-panel). This will open the [Quick actions](../map/tracks/track-context-menu.md#track-actions) button panel where you will have access to track actions such as changing [Appearance](./tracks/appearance.md), [Navigation](../navigation/setup/route-navigation.md), or editing [Plan a route](../plan-route/create-route.md).


<!--

### Start Navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  

[Hiking, Cycle, Travel, and other routes](#type-of-routes) are available for selection on the map, and marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol). If you tap a *route symbol*, a list of the routes nearest to it is offered. Selecting one of them opens the [track context menu](../map/tracks/track-context-menu.md) of the route.  

-->

### Quick Actions

You can configure to switch on and off routes via [Quick action](../widgets/quick-action.md#configure-map) widget.


## Search Routes

You can find routes by using [Search function](../search/index.md). Just write name or choose "Routes" in [Categories section](../search/search-poi.md#)

## Related Articles

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)
- [Navigation route line appearance](../navigation/guidance/map-during-navigation.md#route-line-appearance)

> *This article was last updated in February 2025*
