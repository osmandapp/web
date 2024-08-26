---
title:  Tracks
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


## Overview

OsmAnd has many powerful features to display various routes on the map. Routes could be built as part of Navigation, created via Plan Route, imported as GPX tracks, recorded via Trip Recording plugin or browsed and selected from OpenStreetMap data.


## Types of Tracks

OsmAnd can display several different type of routes

[Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:

- Track as a line (**Geometry**)- file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
- Track as a route (**Route**)-  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines.
- Waypoints (**Points**)- file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.

OsmAnd could create tracks with 1-3 combinations. [Plan Route](../../plan-route/create-route.md) creates track with **Geometry** and **Route**, if you save as **Simplified Track** only **Geometry** will be kept. [Recording track](../../plugins/trip-recording.md#new-track-recording) creates only **Geometry** but it's also possible to add **Points** via Context menu to it.



## Display Tracks on the Map

You can choose which tracks to show on the map and which to hide in the [My Places](#my-places) menu, the [Configure map](#configure-map) menu, and in the [Track Context menu](#track-context-menu).  


### Configure map 

Configure map allows you to quickly select all recently visible tracks, so you can easily switch on/off visibility for collection of tracks. Sorting of tracks is the same as configured in My Places - Tracks. Also in this menu you can change appearance for multiple [selected tracks](./appearance.md#change-tracks-appearance-in-my-places).

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


### My Places


In My places - Tracks to show track on the map, you need to: *Android* - tap the three-dot menu in the field with the required track, *iOS* - long-tap the required track in the list.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*](./index.md)   

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

[*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → long-tap the chosen GPX track → Show on map*](./index.md)    

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)
</TabItem>

</Tabs>

### Track Context menu

If you selected track on the map or open [Track context menu](./track-context-menu.md) after track being recorded or imported, you can also use  *Show / hide* buttons allow to anable or disable displaying of a track on the map. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>


## Analyze Track on Map  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../../map/tracks/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_on_map_menu_andr.png) ![Track menu analize on the map distance Android](@site/static/img/personal/tracks/track_analyze_on_map_distance_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../../map/tracks/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_1_ios.png)

</TabItem>

</Tabs>

This tool allows you to view track information using graphs and maps.  

- **Graph data (Y-axis)**: Altitude, Slope, Speed, [External sensors data](../../plugins/external-sensors.md), or a combination of the two (if data is available on the track).
- **Graph dimension (X-axis)**: Distance, Time, Time of day.
- **Tap/Slide**. Tap the Graph to display information about the track point and moving it along the Graph highlights the location of the point on the map and displays information about it in the bar.
- **Scale**. Scale the Graph with a [two-fingers gesture](../../map/interact-with-map.md#gestures).

### Follow My location

Tap the [My Location](../../map/interact-with-map.md#my-location--zoom) buttonto have the map view and graph synchronized with your location. In this case, **graph scale** will remain the same and the **bar information** will be fixed to 1/4 to the left. As you move, the **graph will slide** from left to right, displaying information ahead of your track. This feature is useful for hiking and cycling while navigating, although no other widgets are displayed on this screen.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_2_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_3_ios.png)

</TabItem>

</Tabs>


## Related Articles

- [*Routes on the map* blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../../map/tracks/track-context-menu.md)  
- [Configure map](../../map/configure-map-menu.md)  
- [Navigation by track](../../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../../personal/tracks/create-edit.md)  
- [Plan route](../../plan-route/index.md)  
- [Trip Recording](../../plugins/trip-recording.md)  

### Track Appearance

Read more about changing [Track appearance](./appearance.md)

### Track Context Menu

Read more about [Track Context menu](./track-context-menu.md).


