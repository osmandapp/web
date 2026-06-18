---
title:  Routes
sidebar_position: 11
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

OsmAnd has many powerful features for displaying different [routes](./types-of-routes.md) on the map. By default, these routes are part of [vector maps](../../map/vector-maps.md#routes) (OpenStreetMap data), however similar functionality is provided by [tracks](../../map/tracks/index.md) which could be created with [Plan a Route](../../plan-route/create-route.md), imported as [GPX tracks](#save-as-a-track), recorded with the [Trip Recording plugin](../../plugins/trip-recording.md). Routes Map Ledend is [here](../../map-legend/osmand.md#routes).


## Display Routes on the Map {#display-routes-on-the-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) ![Routes Classes](@site/static/img/map/routes_classes_android_new.png)

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- The main route types can also be filtered by classes and subclasses, allowing you to display only specific groups within each type. For example, you can show hiking routes by **OSMC symbols** as classes, and by *international, national, regional*, or *local networks*, as well as *unclassified routes*, as subclasses. These options are currently available when the [OsmAnd Development](../../plugins/development.md) plugin is enabled. When multiple route networks overlap, individual classifications can be enabled or disabled to display only the desired route levels.
- You can create a track on top of the routes using the [Plan a Route](../../plan-route/create-route.md) tool. 
- When several routes run along the same road, each route is displayed as a separate semi-transparent line placed above others. 
- When tapping a location where multiple routes overlap, a context menu with all routes passing through this point is shown. 
- Updated vector maps are required to display all elements of the new route rendering scheme. 

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png)

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- You can create a track on top of the routes using the [Plan a Route](../../plan-route/create-route.md) tool. 
- When several routes run along the same road, each route is displayed as a separate semi-transparent line placed above others.   

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

</TabItem>

</Tabs>


## Actions with Routes {#actions-with-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/routes_osm.png) ![Route info](@site/static/img/map/routes_osm_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/routes_osm_ios_new.png) ![Route info](@site/static/img/map/routes_osm_ios_new_2.png)

</TabItem>

</Tabs>

On the map, you can select routes for [hiking, cycle, ski, MTB, dirt bike, travel, and more](./types-of-routes.md). Where available, hiking routes display their waymarks using [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol); other route types use their own markings.

When you tap a **route symbol** on the map:

- A **list of the nearby routes** at that location is displayed.
- After selecting a route from the list, a [context menu](../../map/tracks/track-context-menu.md) for that route opens, displaying detailed information and available actions.
- The selected route is opened in a track view, allowing you to interact with it in the same way as with a GPX track.

In the **context menu**, you can:

- View [additional information](#route-info-and-elevation) about the selected route.
- [Save the route](#save-as-a-track) as a **GPX track**.
- [Start navigation](#start-navigation) along the route.

### Climbing Area and Crag Details {#climbing-area-and-crag-details}

![Climbing details](@site/static/img/map/climbing_andr.png)

When selecting a [climbing area or crag](./types-of-routes.md#climbing-routes), OsmAnd provides a detailed summary of the climbing location, including: name and location, climbing difficulty rating (UIAA, French, YDS, etc.), rock type, height and route length, climbing quality and surface conditions.

### Route Info and Elevation {#route-info-and-elevation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr_new.png) ![Route info](@site/static/img/map/route_info_2_andr_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios_new.png) ![Route info](@site/static/img/map/route_info_2_ios_new.png)

</TabItem>

</Tabs>

The following information will be visible in the context menu:

- **Route info**: Route name, OSM link (OSM Editing plugin required), Type, Description, Distance, Direction, Uphill/Downhill, Altitude range, Network, Operator, State, Color, Roundtrip, Start/End points, and more.
- **General**: Size, Location, Created on.
- **Additional Info**. Displays type of activity.
- action buttons: [Save as](#save-as-a-track) and [Start Navigation](#start-navigation).
- [Elevation info](../../navigation/setup/route-details.md#elevation-info). Displays information about the elevation data on the route.
- [Analyze Track on Map](../../map/tracks/index.md#analyze-track-on-map). Displays detailed analysis of track data using graphs and maps.

To view graph of the elevation, slope, or altitude details for a selected route, simply tap on any of the following values in the context menu: **Distance**, **Uphill**, **Downhill**, or **Altitude**.

You can also open the *Track tab* and switch to the *Altitude view* to see the full elevation graph of the route.

**Note:** Elevation data is generated automatically and may slightly differ depending on available data.

### Save as a Track {#save-as-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  


To save the route as a *GPX file*, tap the **Save (Download)** button under [Info panel](../../map/tracks/track-context-menu.md#info-panel). This will open the [Quick actions](../../map/tracks/track-context-menu.md#track-actions) button panel where you will have access to track actions such as changing [Appearance](../../map/tracks/appearance.md), [Navigation](../../navigation/setup/route-navigation.md), or editing [Plan a route](../../plan-route/create-route.md). Saved routes behave the same as other tracks and are available in your track collection.

### Start Navigation {#start-navigation}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes_osm_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/routes_osm_ios_3.png)

</TabItem>

</Tabs>  

To start navigation along the selected OSM route, tap the **Start Navigation** button in the [**Info panel**](../../map/tracks/track-context-menu.md#info-panel).

This will launch the [**Navigation by track**](../../navigation/setup/gpx-navigation.md) mode, allowing you to follow the route with voice guidance and navigation features.

### Quick Actions {#quick-actions}

You can customize whether routes are switched on or off using the [Quick Action](../../widgets/quick-action.md#configure-map) widget.


## Routes Search {#routes-search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search.png) ![Routes on the ground](@site/static/img/map/route_search_1_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_ios.png) ![Routes on the ground](@site/static/img/map/route_search_1_ios.png)

</TabItem>

</Tabs>  

Find routes using the [Search function](../../search/index.md) by name or by selecting "Routes" in the [Categories section](../../search/search-poi.md#).

To search, go to the *<Translate android="true" ids="search_button"/>* menu or *<Translate android="true" ids="search_button,search_categories"/>* and enter your activity.

Navigate to *<Translate android="true" ids="search_button,search_categories,poi_routes"/>* to find desired routes. Routes search results display the route name, activity type, length, location, uphill/downhill (on Android), and distance to the nearest point. 

### Routes Filters {#routes-filters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/route_search_2_new.png) ![Routes on the ground](@site/static/img/map/route_search_3_new.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/route_search_2_ios.png) ![Routes on the ground](@site/static/img/map/route_search_3_ios.png)

</TabItem>

</Tabs>

In Routes search results, tap the **Filters** button in the top-right corner to narrow down the list. The Filters screen includes a **Filter by name** field; a **Type** block with *Bureau*, *Post annex*, and *Post partner*; and **extra criteria** that depend on the selected route category or activity, as each category can expose its own characteristics and filter values.

You can enable or disable filters using the switches, and some sections include *Show all* to display additional values.


## Related Articles {#related-articles}

- [Map Context menu](../../map/map-context-menu.md)
- [Configure Map](../../map/configure-map-menu.md)
- [Tracks](../../map/tracks/index.md)
- [Tracks Context menu](../../map/tracks/track-context-menu.md)
- [Public transport](../public-transport.md)
- [Navigation route line appearance](../../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Search POI](../../search/search-poi.md#)
- [Types of Routes](./types-of-routes.md)

