---
sidebar_position: 1
title:  Types
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


## Types of routes on the map

OsmAnd can display several different types of routes:

1.  [Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:
    - Track as a line - file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
    - Track as a route -  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines. 
    - Waypoints - file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.
2. [Navigation Route](#navigation-route) - a route line displayed during [navigation](../navigation/setup/route-navigation.md). By default this is a solid transparent blue line, though default appearance depends on [vector map style](../map/vector-maps.md#default-map-styles), [day & night mode](../map/vector-maps.md#map-mode). It's also possible to fully customize it on Android.
3. [Routes and route networks on the map](#routes-on-the-map) - special [objects](../map/vector-maps.md#routes) on the map from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) data and provided with standard vector maps. They typically represent popular local routes and could be displayed in many ways (shields, color, thickness, pattern). To use these types of routes you will need to enable them on the map.


## Tracks 

OsmAnd provides the ability to record and display tracks. This allows you to get location, movement, distance, altitude and travel time data and analyze track data.


### Display tracks on the map

OsmAnd allows you [to view tracks on a map](../personal/tracks/manage-tracks.md#show-tracks-on-map). Each point on the track corresponds to a specific location and contains information about time, speed and altitude. This allows you to visually assess the route, learn about the places you have visited and estimate the difficulty of the route by changes in altitude.  

You can choose which tracks to show on the map and which to hide. You can do this in the [My Places](#tracks-in-my-places-menu) menu, the [Configure map](#tracks-in-configure-map-menu) menu, and in the [Track Context menu](../map/track-context-menu.md#quick-actions) when saving a track in the [Plan a route](../plan-route/create-route.md#save-as-new-track) tool, or with [Route Details](../navigation/setup/route-details.md#save-as-a-new-track).  

![Tracks on the map Android](@site/static/img/map/tracks_layer_android.png) ![Tracks on the map iOS](@site/static/img/map/tracks_layer_ios.png) 


#### Tracks in Configure map menu

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

You can read additional information in the [Tracks](../personal/tracks/manage-tracks.md#configure-map) article.


#### Tracks in My Places menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*](../personal/tracks/manage-tracks.md#single-track-menu)    

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

[*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → long-tap the chosen GPX track → Show on map*](../personal/tracks/manage-tracks.md#single-track-menu)    

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)
</TabItem>

</Tabs>

To show track on the map, you need to:
- *Android* - tap the three-dots menu in the field with the required track.
- *iOS* - long-tap the required track in the list.

#### Tracks in Track Context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

*Show / hide* buttons allow to anable or disable displaying of a track on the map.


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


## Navigation Route


Navigation route is a solid line prepared by [Route Preparation process](../navigation/setup/route-navigation.md). It is displayed during Navigation or during Route preparation step.

![Route on the map Android](@site/static/img/map/route_layer_android.png) ![Route on the map iOS](@site/static/img/map/route_layer_ios.png)  


## Routes on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png) 

</TabItem>

</Tabs>

OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They can be selected by tapping [the symbol on the route](#save-as-a-track), and if the visible set of routes is configured correctly, you can follow the color and icons. You can create a track on top of the routes using the [Plan a Route](../plan-route/create-route.md) tool.  

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Save as a Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)   ![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)   ![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>  

[*Hiking, Cycle, Travel, and other routes*](../map/vector-maps.md#routes) are available for selection on the map, and marked with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol). If you tap a *route symbol*, a list of the routes nearest to it is offered. Selecting one of them opens the [context menu](../map/track-context-menu.md) of the route.  

To get full route information, tap on the *route symbol* or the line of the selected route, if you have already used the download button in the *Track context menu*.    

- **Route info** in *Overview*. You can view detailed information about the selected route such as *Distance, Direction, Ascent/Descent, Altitude range, Route name, Network, Operator, State, Type, Description, Color, Roundtrip, Start/End points, and more*. 
- **Graph** in *Tracks*. Displays *Altitude information, Distanse, Time*, provides access to [*Analyze on map*](#analyze-track-on-map) feature.
- **Download** (*Android*) / **Save** (*iOS*) button. After saving a GPX file, you will have access to track actions such as changing [*Appearance*](#track-appearance), [*Navigation*](#navigation-route), editing in [*Plan a route*](../plan-route/create-route.md), and more.


## Read more

- [*Routes on the map* blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../map/track-context-menu.md)  
- [Configure map](../map/configure-map-menu.md)  
- [Navigation by track](../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../personal/tracks/index.md)  
- [Tracks on the map](../map/tracks-on-map.md)  
- [Plan route](../plan-route/index.md)  
- [Trip Recording](../plugins/trip-recording.md)  
- [Analyze on Map](../map/tracks-on-map.md)  

