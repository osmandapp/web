---
sidebar_position: 10
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


## Overview {#overview}

OsmAnd has many powerful features for displaying different [routes](#type-of-routes) on the map. By default, these routes are part of [vector maps](./vector-maps.md#routes) (OpenStreetMap data), however similar functionality is provided by [tracks](./tracks/index.md) which could be created with [Plan a Route](../plan-route/create-route.md), imported as [GPX tracks](#save-as-a-track), recorded with the [Trip Recording plugin](../plugins/trip-recording.md). Routes Map Ledend is [here](../map-legend/osmand.md#routes).


## Type of Routes {#type-of-routes}

Routes represent different outdoor activities using data from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). Tapping **the shield icon with a route number or route flag** on the map will open a context menu that provides additional information about the route and allows using it as part of navigation.

You can configure the filtering of some route types in the [Configure Map](../map/configure-map-menu.md) menu.

### Cycle routes {#cycle-routes}

[Cycle routes](https://wiki.openstreetmap.org/wiki/Cycle_routes) are present in three types: *local* (`lcn`), *regional* (`rcn`), *national* (`ncn`), *international* (`icn`). Also, cycle routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="layer_route"/>***.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

You can find more information in the [Map Legend](../map-legend/index.md) article.


### Mountain bike routes {#mountain-bike-routes}

MTB routes have a specific mapping in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dmtb) and could be selected separately from cycling routes.

<!--
| | | |
|------------|------------|------------|
| ***<Translate android="true" ids="mtb_scale"/>*** | Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article. | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png) |
| ***<Translate android="true" ids="mtb_imba"/>*** | Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md). | ![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png) |
-->

- ***<Translate android="true" ids="mtb_scale"/>***.  Shows trails according to the MTB scale. More information is in the [Map Legend](../map-legend/index.md) article.  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb-trails.png)  

- ***<Translate android="true" ids="mtb_imba"/>***.  Show MTB trails according to the International Mountain Bicycling Association, [MTB IMBA](https://www.imba.com/). More information is in the article [Map legend](../map-legend/index.md).  
![Map routes - MTB trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Hiking / Walking routes {#hiking--walking-routes}

[Hiking routes](https://wiki.openstreetmap.org/wiki/Walking_Routes) are present in three types: *local* (`lwn`), *regional* (`rwn`), *national* (`nwn`), *international* (`iwn`). Also, walking routes could be part of [Node networks](https://wiki.openstreetmap.org/wiki/Tag:network:type%3Dnode_network). OsmAnd doesn't separate walking and hiking routes and combines them into 1 group. You can choose how to assign color to the route segments:

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  Colors routes according to their individual [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (if available in OpenStreetMap) and the tourist shield symbol.  
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  Colors by [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

- ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  Colors routes according to the type of [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional, or local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)


### Dirt Bike Trails {#dirt-bike-trails}

![Map routes - Dirt Bike Trails](@site/static/img/map/map-routes-dirt-bike-trails.png)

The **Dirt Bike Trails** feature allows you to display dirt bike-specific routes on the map based on the `dirtbike:scale` tag. This scale highlights trails suitable for dirt biking, with a colored overlay showing difficulty levels ([Map Legend](../map-legend/osmand.md#routes)).  

You can activate this feature in *Menu → Configure map → Routes → Dirt bike routes*. The system functions similarly to the MTB scale, offering a visual representation of routes tailored to dirt biking — more about the [`dirtbike` tag can be found here](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).


### Climbing Routes {#climbing-routes}

![Map routes - Climbing Routes](@site/static/img/map/map-routes-climbing-routes.png)

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


### Hiking Trails Difficulty Grade {#hiking-trails-difficulty-grade}

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

Some road segments could be part of many routes, but they could be individually colored to represent the difficulty of the segment in mountainous areas. Currently, OsmAnd supports Italian and Swiss classifications, and each has a specific list of equipment requirements to access this segment.  

1. [SAC scale](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [CAI scale](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  


### Ski routes {#ski-routes}

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

Ski routes are a specific group of [routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dski) in OpenStreetMap. Typically, these routes could be used with [Winter and Ski](../map/vector-maps.md#winter-and-ski) map style with all visible [Pistes](https://wiki.openstreetmap.org/wiki/Pistes).  


### Snowmobile trails {#snowmobile-trails}

![Map routes - snowmobile](@site/static/img/map/snowmobile_route.png)

Snowmobile routes are mapped in [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tag:route%3Dsnowmobile) as `route=snowmobile`. They are used for winter recreation and to connect remote areas during the snow season. In OsmAnd, snowmobile trails are clickable: you can tap on a trail and view its information in the context menu.

Steps to use:
- Enable the Snowmobile map style *Menu* → *Configure map* → *Map style* → *Snowmobile*
- Tap a snowmobile trail on the map.
- View its information in the context menu such as name, distance, uphill/downhill, altitude.


### Horse routes {#horse-routes}

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

[Horse routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dhorse) are displayed as color-indicated routes with symbols for horseback riding.  


### Whitewater sports {#whitewater-sports}

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

[Whitewater routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Dcanoe) are shown together with access icons, danger zones for [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  


### Running routes {#running-routes}

![Fitness routes](@site/static/img/map/fitness_1.png)

[Running routes](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning) in OpenStreetMap are used for named, numbered, or otherwise marked running routes, primarily for athletics.


### Fitness trails {#fitness-trails}

![Fitness routes](@site/static/img/map/fitness_route.png)

A [fitness trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail) is a trail or path equipped with obstacles or stations along its length to exercise the human body to improve health.  


### Travel routes {#travel-routes}

<InfoAndroidOnly />

![Travel routes](@site/static/img/map/travel_route_2.png)  ![Travel routes](@site/static/img/map/travel_routes.png)

Travel routes are part of custom [Travel book](../plan-route/travel-guides.md) (`travel.obf`) files, which can be generated from the [user's routes](https://osmand.net/blog/routes#generated-travel-routes) or be part of additional [plugins](../plugins/index.md).  

You can customize the display of certain ***Travelbooks*** and types of ***tracks***, display tracks as points, or ***Point groups*** (for example for Wikivoyage travel books). Learn more about [Travel guides here](../plan-route/travel-guides.md).


## Display Routes on the Map {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

</TabItem>

</Tabs>

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

## Climbing Area and Crag Details {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

When selecting a [climbing area or crag](../map/routes.md#climbing-routes), OsmAnd provides a detailed summary of the climbing location, including: name and location, climbing difficulty rating (UIAA, French, YDS, etc.), rock type, height and route length, climbing quality and surface conditions.



## Actions with Routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios.png) ![Route info](@site/static/img/map/routes_osm_ios_1.png)

</TabItem>

</Tabs>

On the map, you can select routes for [hiking, cycle, travel, and more](#type-of-routes), which are marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol) where applicable.

When you tap a **route symbol** on the map:

- A **list of the nearby routes** at that location is displayed.
- After selecting a route from the list, a [context menu](../map/tracks/track-context-menu.md) for that route opens, displaying detailed information and available actions.

In the **context menu**, you can:

- View [additional information](#route-info-and-elevation) about the selected route.
- [Save the route](#save-as-a-track) as a **GPX track**.
- [Start navigation](#start-navigation) along the route.


### Route Info and Elevation {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

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
- action buttons: [Save as](#save-as-a-track) and [Start Navigation](#start-navigation).
- [Elevation info](../navigation/setup/route-details.md#elevation-info). Displays information about the elevation data on the route.
- [Analyze Track on Map](../map/tracks/index.md#analyze-track-on-map). Displays detailed analysis of track data using graphs and maps.

To view graph of the elevation, slope, or altitude details for a selected route, simply tap on any of the following values in the context menu: **Distance**, **Uphill**, **Downhill**, or **Altitude**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_2.png)

</TabItem>

</Tabs>  

### Save as a Track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


To save the route as a *GPX file*, tap the **Save (Download)** button under [Info panel](../map/tracks/track-context-menu.md#info-panel). This will open the [Quick actions](../map/tracks/track-context-menu.md#track-actions) button panel where you will have access to track actions such as changing [Appearance](./tracks/appearance.md), [Navigation](../navigation/setup/route-navigation.md), or editing [Plan a route](../plan-route/create-route.md).


### Start Navigation {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

To start navigation along the selected OSM route, tap the **Start Navigation** button in the [**Info panel**](../map/tracks/track-context-menu.md#info-panel).

This will launch the [**Navigation by track**](../navigation/setup/gpx-navigation.md) mode, allowing you to follow the route with voice guidance and navigation features.



### Quick Actions {#quick-actions}

You can customize whether routes are switched on or off using the [Quick Action](../widgets/quick-action.md#configure-map) widget.


## Routes Search {#routes-search}

Find routes using the [Search function](../search/index.md) by name or by selecting "Routes" in the [Categories section](../search/search-poi.md#).

To search, go to the *<Translate android="true" ids="search_button"/>* menu or *<Translate android="true" ids="search_button,search_categories"/>* and enter your activity.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png)

</TabItem>

</Tabs>  

Navigate to *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* to find desired routes. Routes include name, activity type, length, location, and distance to the nearest point.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>

Use filters button (top right corner) to display only the desired routes.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2.png) ![Routes on the ground](@site/static/img/map/route_search_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>


## Related Articles {#related-articles}

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Tracks](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)
- [Navigation route line appearance](../navigation/guidance/map-during-navigation.md#route-line-appearance)


