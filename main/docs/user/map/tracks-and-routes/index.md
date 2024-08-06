---
title:  Tracks and Routes
sidebar_position: 2
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


1. You can **[select one or more layers of routes at a time](../map/tracks-on-map.md#routes-on-the-map)**. It is important to note that if different routes intersect at the same point, only the color of the top layer will be visible. Route designations for OsmAnd Map Style can be found in the [Map Legend](../map-legend/osmand.md#routes) article.
   <!-- - Read about the color scheme of routes in the [Color Palette Schemes](../personal/color-palette-schemes.md) article.  -->

2. You can **use Custom buttons** to customize [Quick Actions](../map/tracks-on-map.md#quick-actions-for-routes) to switch between enabling or disabling the display of selected route types.

3. Tapping **the shield icon with a route number or route flag** on the map will open a context menu with a list of available options.  
    - In some cases, you may find several routes intersecting at a certain location. When you select one of the routes, the *[Track context menu](../map/track-context-menu.md)* appears. In this menu, you can [save the selected route](../map/tracks-on-map.md#routes-on-the-map) to the device memory in GPX format, which will allow you to use it for [GPX navigation](../navigation/setup/gpx-navigation.md) in the future.


OsmAnd can highlight routes provided by OpenStreetMap. Some routes have **additional settings**. By default, if you have not selected anything in the [Configure Map](../map/configure-map-menu.md) menu, the first route type from the list will be assigned, otherwise a type of your choice will be assigned. You can read more in the [Tracks and Routes](../map/tracks-on-map.md#coloring-routes-by-type) article.  

1. **<Translate android="true" ids="rendering_attr_showCycleRoutes_name"/>**.

    - ***<Translate android="true" ids="layer_route"/>***.  
    Colors routes according to their individual local color (if available in OpenStreetMap) and the tourist shield symbol. You can find more information in the [Map Legend](../map-legend/index.md) article.  
    ![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)

    - ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
    Colors routes according to the type of node network (international, regional, or local).    
    ![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)

2. **<Translate android="true" ids="rendering_attr_showMtbRoutes_name"/>**.

    - ***<Translate android="true" ids="mtb_scale"/>***.  
    Shows trails according to MTB scale. You can find more information in the [Map Legend](../map-legend/index.md) article.    
    ![Map routes - mtb trails](@site/static/img/map/map-routes-mtb-trails.png)

    - ***<Translate android="true" ids="mtb_imba"/>***.  
    Show MTB trails accorgind International Mountain Bicycling Association [MTB IMBA](https://www.imba.com/). More information in the article [Map legend](../map-legend/index.md).  
    ![Map routes - mtb trails](@site/static/img/map/map-routes-mtb_imba-trails.png)

3. **<Translate android="true" ids="rendering_attr_hikingRoutesOSMC_name"/>**.

    - ***<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>***.  
    Colors routes according to their individual [local color](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) (if available in OpenStreetMap) and the tourist shield symbol.    
    ![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)

    - ***<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>***.  
    Colors by [network affiliation](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).  
    ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

    - ***<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>***.  
    Colors routes according to the type of [node network](https://wiki.openstreetmap.org/wiki/Node_Networks) (international, regional, or local).  
    ![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)

4. **<Translate android="true" ids="rendering_attr_alpineHiking_name"/>**.  
    Shows classified hiking trails in mountainous areas based on the difficulty that can be expected for color.    

    - [*SAC scale*](https://wiki.openstreetmap.org/wiki/Key:sac_scale)
    - [*CAI scale*](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)  
    ![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)

5. **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>**.  
Shows ski trail routes highlighted in specific colors. This setting is provided by the [*Winter and Ski*](../map/vector-maps.md#winter-and-ski) map style.   
    ![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)

6. **<Translate android="true" ids="rendering_attr_horseRoutes_name"/>**.  
Shows color-indicated routes and symbols for horseback riding.  
    ![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)

7. **<Translate android="true" ids="rendering_attr_whiteWaterSports_name"/>**.  
Shows access icons, danger zones, and [whitewater tourism](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map).  
    ![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)

8. **<Translate android="true" ids="rendering_attr_showRunningRoutes_name"/>**.  
Used for named, numbered, or otherwise marked running routes used primarily for athletics. The data for these routes is taken from the [OpenStreetMap project](https://openstreetmap.org/) (tag [route=running](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning)).   
    ![Fitness routes](@site/static/img/map/fitness_1.png)

9. **<Translate android="true" ids="rendering_attr_showFitnessTrails_name"/>**.  
A fitness trail is a trail or path equipped with obstacles or stations along its length to exercise the human body for the purpose of improving health. The data for these routes is taken from the [OpenStreetMap project](https://openstreetmap.org/) (tag [route=fitness_trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail)).  
    ![Fitness routes](@site/static/img/map/fitness_route.png) 

10. **<Translate android="true" ids="travel_routes"/>** (*Android only*).  

    - Shows previously uploaded specially configured [user routes](https://osmand.net/blog/routes#generated-travel-routes) taken from OpenStreetMap categories.  
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

<!--
OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons. You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  -->

- To display the required routes on the map, enable them in the *Routes list* of the [Configure Map](../map/configure-map-menu.md) menu.
- OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-track), and if the visible set of routes is configured correctly, you can follow the color and icons.
- You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Route Info

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route info](@site/static/img/map/route_info_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Route info](@site/static/img/map/route_info_1_ios.png)

</TabItem>

</Tabs>  

- To get full route information, tap the *route symbol*.
- If you have already used the *download button* in the [Track context menu](../map/track-context-menu.md), tap the line of the required route on the map.    

**Route info** in *Overview tab* allows you to view detailed information about the selected route such as:
- *Track details*: Route name, OSM link (OSM Editing plugin required), Type, Description, Distance, Direction, Ascent/Descent, Altitude range, Network, Operator, State, Color, Roundtrip, Start/End points, and more.
- *General*: Size, Location, Created on.
- *Additional Info*: Type of activity.

### Save as a Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  

[*Hiking, Cycle, Travel, and other routes*](../map/vector-maps.md#routes) are available for selection on the map, and marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol). If you tap a *route symbol*, a list of the routes nearest to it is offered. Selecting one of them opens the [Track context menu](../map/track-context-menu.md) of the route.  

To save the route as a *GPX file*, tap the **Save (Download)** button under [Info panel](../map/track-context-menu.md#info-panel). This will open the [Quick actions](../map/track-context-menu.md#quick-actions) button panel where you will have access to track actions such as changing [*Appearance*](#track-appearance), [*Navigation*](#route-navigation), or editing [*Plan a route*](../plan-route/create-route.md).


### Quick Actions 

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action,quick_action_new_action,quick_action_add_configure_map"/>*  

![Route info](@site/static/img/map/qa_routes_andr.png)

Using the *Quick Actions* map buttons, you can switch the visibility of different types of routes.  
The main settings for *Show or Hide routes* can be found in the Configure Map menu. Some routes have an [additional setting](#coloring-routes-by-type) for selecting types. When assigning an action to a button, either the default type or the type selected in the Configure map will be displayed.  

In the [Vector Maps article](../map/vector-maps.md#routes), you can find a description and the entire list of routes available for display. If you want quick access to this map configuration, use the *Custom Button* tool.  

- Go to [Add action](../widgets/quick-action.md#custom-buttons): *Menu → Configure screen → Custom buttons → Quick action → Add action → Configure map*.
- Add one or more QA buttons to change the visibility of particular routes.


## Types of Tracks

OsmAnd can display several different type of routes

[Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:
    - Track as a line - file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
    - Track as a route -  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines. 
    - Waypoints - file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.

## Tracks 

OsmAnd provides the ability to record and display tracks. This allows you to get location, movement, distance, altitude and travel time data and analyze track data.


### Display Tracks on the Map

OsmAnd allows you [to view tracks on a map](../map/tracks-on-map.md). Each point on the track corresponds to a specific location and contains information about time, speed and altitude. This allows you to visually assess the route, learn about the places you have visited and estimate the difficulty of the route by changes in altitude.  

You can choose which tracks to show on the map and which to hide. You can do this in the [My Places](#tracks-in-my-places-menu) menu, the [Configure map](#tracks-in-configure-map-menu) menu, and in the [Track Context menu](../map/track-context-menu.md#quick-actions) when saving a track in the [Plan a route](../plan-route/create-route.md#save-as-new-track) tool, or with [Route Details](../navigation/setup/route-details.md#save-as-a-new-track).  

![Tracks on the map Android](@site/static/img/map/tracks_layer_android.png) ![Tracks on the map iOS](@site/static/img/map/tracks_layer_ios.png) 


- **Tracks in Configure map menu**. You can read additional information in the [Tracks](../map/tracks-on-map.md) article.  
(*The information is in the writing process.*)

<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*   

![Tracks and Routes](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Tracks and Routes](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Context menu of a track in iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Context menu of a track in iOS](@site/static/img/personal/tracks/follow_track_2_ios.png)

</TabItem>

</Tabs>
-->

- **Tracks in My Places menu**. To show track on the map, you need to: *Android* - tap the three-dot menu in the field with the required track, *iOS* - long-tap the required track in the list.  
(*The information is in the writing process.*)

<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*](../map/tracks-on-map.md)   

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

[*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → long-tap the chosen GPX track → Show on map*](../map/tracks-on-map.md)    

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)
</TabItem>

</Tabs>
-->

- **Tracks in Track Context menu**. *Show / hide* buttons allow to anable or disable displaying of a track on the map.  
(*The information is in the writing process.*)

<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>
-->


### Track appearance

Link

### Track context menu

Link


### Analyze Track on Map  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_on_map_menu_andr.png) ![Track menu analize on the map distance Android](@site/static/img/personal/tracks/track_analyze_on_map_distance_android.png)   

</TabItem>

<TabItem value="ios" label="iOS">

*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*     

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_1_ios.png)

</TabItem>

</Tabs>

This tool allows you to view track information using graphs and maps.  

- **Graph data (Y-axis)**: Altitude, Slope, Speed, [External sensors data](../plugins/external-sensors.md), or a combination of the two (if data is available on the track).
- **Graph dimension (X-axis)**: Distance, Time, Time of day.
- **Tap/Slide**. Tap the Graph to display information about the track point and moving it along the Graph highlights the location of the point on the map and displays information about it in the bar.
- **Scale**. Scale the Graph with a [two-fingers gesture](../map/interact-with-map.md#gestures). 
- **Follow My location**. Tap the [My Location](../map/interact-with-map.md#my-location--zoom) buttonto have the map view and graph synchronized with your location. In this case, **graph scale** will remain the same and the **bar information** will be fixed to 1/4 to the left. As you move, the **graph will slide** from left to right, displaying information ahead of your track. This feature is useful for hiking and cycling while navigating, although no other widgets are displayed on this screen.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_2_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_3_ios.png)

</TabItem>

</Tabs>


## Read more

- [*Routes on the map* blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../map/track-context-menu.md)  
- [Configure map](../map/configure-map-menu.md)  
- [Navigation by track](../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../personal/tracks/create-edit.md)  
- [Plan route](../plan-route/index.md)  
- [Trip Recording](../plugins/trip-recording.md)  
