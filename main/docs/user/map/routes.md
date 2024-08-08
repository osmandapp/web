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

<InfoIncompleteArticle/>

## Overview

OsmAnd has many powerful features to display various routes on the map. Routes could be built as part of Navigation, created via Plan Route, imported as GPX tracks, recorded via Trip Recording plugin or browsed and selected from OpenStreetMap data.


## Type of Routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>* 

![Configure Map Routes section](@site/static/img/map/settings_routes_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/settings_routes_ios_1.png)

</TabItem>

</Tabs> 

A route is a predefined path, which is a sequence of roads and turns to be followed to reach a certain destination point. In the OsmAnd app, you can mark routes on the map related to different outdoor activities using data from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They typically represent popular local routes and could be displayed in many ways (shields, color, thickness, pattern). To use these types of routes you will need to enable them on the map.


1. You can **[select one or more layers of routes at a time](../map/tracks/index.md#routes-on-the-map)**. It is important to note that if different routes intersect at the same point, only the color of the top layer will be visible. Route designations for OsmAnd Map Style can be found in the [Map Legend](../map-legend/osmand.md#routes) article.
   <!-- - Read about the color scheme of routes in the [Color Palette Schemes](../personal/color-palette-schemes.md) article.  -->

2. You can **use Custom buttons** to customize [Quick Actions](../map/tracks/index.md#quick-actions-for-routes) to switch between enabling or disabling the display of selected route types.

3. Tapping **the shield icon with a route number or route flag** on the map will open a context menu with a list of available options.  
    - In some cases, you may find several routes intersecting at a certain location. When you select one of the routes, the *[Track context menu](../map/tracks/track-context-menu.md)* appears. In this menu, you can [save the selected route](../map/tracks/)  .md#routes-on-the-map) to the device memory in GPX format, which will allow you to use it for [GPX navigation](../navigation/setup/gpx-navigation.md) in the future.


OsmAnd can highlight routes provided by OpenStreetMap. Some routes have [**additional settings**](#coloring-routes-by-type). By default, if you have not selected anything in the [Configure Map](../map/configure-map-menu.md) menu, the first route type from the list will be assigned, otherwise a type of your choice will be assigned. You can read more in the [Tracks and Routes](#coloring-routes-by-type) article.  

### Cycle routes

1. ***<Translate android="true" ids="layer_route"/>***.  
Colors routes according to their individual local color (if available in OpenStreetMap) and the tourist shield symbol. You can find more information in the [Map Legend](../map-legend/index.md) article.  
![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

2. ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
Colors routes according to the type of node network (international, regional, or local).    
![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

### Mountain bike routes

1. ***<Translate android="true" ids="mtb_scale"/>***.  
Shows trails according to MTB scale. You can find more information in the [Map Legend](../map-legend/index.md) article.    
![Map routes - mtb trails](@site/static/img/map/map-routes-mtb-trails.png)

2. ***<Translate android="true" ids="mtb_imba"/>***.  
Show MTB trails accorgind International Mountain Bicycling Association [MTB IMBA](https://www.imba.com/). More information in the article [Map legend](../map-legend/index.md).  
![Map routes - mtb trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

### Hiking routes

1. ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  
Colors routes according to their individual [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (if available in OpenStreetMap) and the tourist shield symbol.    
![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

2. ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  
Colors by [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

3. ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
Colors routes according to the type of [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional, or local).  
![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)

### Hiking segments (Difficulty classification)

Determines the difficulty of hiking trails. Italian and Swiss classifications. Has a list of equipment requirements.  

Shows classified hiking trails in mountainous areas based on the difficulty that can be expected for color.    

1. [*SAC scale*](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
2. [*CAI scale*](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  

![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

### Ski slopes

Shows ski trail routes highlighted in specific colors. This setting is provided by the [*Winter and Ski*](../map/vector-maps.md#winter-and-ski) map style.   

![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

### Horse routes

Shows color-indicated routes and symbols for horseback riding.  

![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

### Whitewater sports

Shows access icons, danger zones, and [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  

![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

### Running routes

Used for named, numbered, or otherwise marked running routes used primarily for athletics. The data for these routes is taken from the [OpenStreetMap project](https://openstreetmap.org/) (tag [route=running](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning)).   

![Fitness routes](@site/static/img/map/fitness_1.png)

### Fitness trails

A fitness trail is a trail or path equipped with obstacles or stations along its length to exercise the human body for the purpose of improving health. The data for these routes is taken from the [OpenStreetMap project](https://openstreetmap.org/) (tag [route=fitness_trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail)).  

![Fitness routes](@site/static/img/map/fitness_route.png) 

### Travel routes

<InfoAndroidOnly />

Shows previously uploaded specially configured [user routes](https://osmand.net/blog/routes#generated-travel-routes) taken from OpenStreetMap categories.  

![Travel routes](@site/static/img/map/travel_route_2.png)   

- ***Tracks***, ***Travelbooks***, and ***Points***.  

![Travel routes](@site/static/img/map/travel_routes.png) 


## Configure Routes on the Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png) 

</TabItem>

</Tabs>

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Route Info (Route details)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>  

- To get full route information, tap the *route symbol*.
- If you have already used the *download button* in the [Track context menu](../map/tracks/track-context-menu.md), tap the line of the required route on the map.    

**Route info** in *Overview tab* allows you to view detailed information about the selected route such as:
- *Track details*: Route name, OSM link (OSM Editing plugin required), Type, Description, Distance, Direction, Ascent/Descent, Altitude range, Network, Operator, State, Color, Roundtrip, Start/End points, and more.
- *General*: Size, Location, Created on.
- *Additional Info*: Type of activity.

### Graph (Elevation info)

- [Elevation info](../navigation/setup/route-details.md#elevation-info)
- [Analyze Track on Map](../map/tracks/index.md#analyze-track-on-map)

### Save as a Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  

[*Hiking, Cycle, Travel, and other routes*](#type-of-routes) are available for selection on the map, and marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol). If you tap a *route symbol*, a list of the routes nearest to it is offered. Selecting one of them opens the [Track context menu](../map/tracks/track-context-menu.md) of the route.  

To save the route as a *GPX file*, tap the **Save (Download)** button under [Info panel](../map/tracks/track-context-menu.md#info-panel). This will open the [Quick actions](../map/tracks/track-context-menu.md#quick-actions) button panel where you will have access to track actions such as changing [*Appearance*](./tracks/appearance.md), [*Navigation*](#route-navigation), or editing [*Plan a route*](../plan-route/create-route.md).




### Quick Actions 

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action,quick_action_new_action,quick_action_add_configure_map"/>*  

![Route info](@site/static/img/map/qa_routes_andr.png)

Using the *Quick Actions* map buttons, you can switch the visibility of different types of routes.  
The main settings for *Show or Hide routes* can be found in the Configure Map menu. Some routes have an [additional setting](#coloring-routes-by-type) for selecting types. When assigning an action to a button, either the default type or the type selected in the Configure map will be displayed.  

In the [Vector Maps article](../map/vector-maps.md#routes), you can find a description and the entire list of routes available for display. If you want quick access to this map configuration, use the *Custom Button* tool.  

- Go to [Add action](../widgets/quick-action.md#custom-buttons): *Menu → Configure screen → Custom buttons → Quick action → Add action → Configure map*.
- Add one or more QA buttons to change the visibility of particular routes.


## Related Articles

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)


> *This article was last updated in August 2024*
