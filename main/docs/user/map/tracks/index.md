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
