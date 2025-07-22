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


## Overview {#overview}

OsmAnd has many powerful features to display various routes on the map. Routes could be built as part of Navigation, created via Plan Route, imported as GPX tracks, recorded via Trip Recording plugin, or browsed and selected from OpenStreetMap data.


## Types of Tracks {#types-of-tracks}

[Tracks (GPX)](#display-tracks-on-the-map) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application, or recorded by you. GPX could contain one of 3 different types of data, or all of them:

- Track as a line (***Geometry***). The file has a ```<trkpt>``` points array, each point has the location and optional time, speed, altitude, and other attributes. These tracks are displayed on the map as solid lines.
- Track as a route (***Route***). The file has a ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected, either as small route segments or via a straight line. These tracks are displayed on the map as dashed lines.
- Waypoints (***Points***). The file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You can tap them to get additional information.

OsmAnd could create tracks with 1–3 combinations. [Plan Route](../../plan-route/create-route.md) creates a track with ***Geometry*** and ***Route***, if you save it as ***Simplified Track***, only the ***Geometry*** will be kept. [Recording track](../../plugins/trip-recording.md#new-track-recording) creates only ***Geometry***, but you can also add ***Points*** to it via the context menu.


## Display Tracks on the Map {#display-tracks-on-the-map}

You can manage track visibility by choosing which ones to display or hide from several menus: the [My Places menu](#my-places), the [Configure Map menu](#configure-map), and the [Track Context menu](#track-context-menu). This flexibility allows you to quickly switch between different tracks, ensuring that only the relevant tracks are visible on your map at any given time.

### Configure Map {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>*

![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*

![Configure map tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Configure map tracks iOS](@site/static/img/personal/tracks/configure_map_track_menu_ios.png)

</TabItem>

</Tabs>

The *Configure Map* option enables you to quickly manage the display of all recently displayed tracks, allowing you to toggle visibility for a group of tracks. The track sorting follows the order configured in the *My Places → Tracks* tab. You can access the [Track Menu](../../personal/tracks/manage-tracks.md#track-menu) by long-tapping a track item. Additionally, in this menu, you can modify the appearance of multiple selected tracks simultaneously.

### My Places {#my-places}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → long tap the chosen GPX track → Show on map*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>

In [My Places *→* Tracks tab](../../personal/tracks/manage-tracks.md#manage-tracks) to display the track on the map, you need to:

- *Android* - tap the *three-dot menu* in the field with the required track.
- *iOS* - long tap the required track in the list.


### Track Context Menu {#track-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

When you select a track on the map or open the [track context menu](./track-context-menu.md) after recording or importing a track, you can control its visibility on the map. Simply use the *Show* or *Hide* buttons to display or remove the track from the map view.


## Analyze Track on Map {#analyze-track-on-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *Tap the track → Track tab → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_track_on_map_andr.png)    ![Track menu analyze on the map distance Android](@site/static/img/personal/tracks/analyze_track_on_map_distance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Tap the track → Track tab → <Translate ios="true" ids="analyze_on_map"/>*  

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_on_map_ios.png)

</TabItem>

</Tabs>

This tool provides a detailed analysis of [track](../../map/tracks/track-context-menu.md#options) data using graphs and maps.

- **Graph data (Y-axis)** displays: *Altitude*, *Slope*, *Speed*, [*External sensor data*](../../plugins/external-sensors.md), and combinations of up to two options if contained in the track data.
- **Graph dimension (X-axis)** represents: *Distance*, *Time*, and *Time of day*.
- **Tap/slide interaction**. Tap a graph to display information about a specific point on the track. Sliding on the graph highlights the appropriate location on the map and shows details in the information bar.
- **Scaling**. Use a [two-finger gesture](../../map/interact-with-map.md#gestures) to scale the graph for more detailed viewing.


### Follow My Location {#follow-my-location}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu analyze on map](@site/static/img/personal/tracks/track_follow_my_location_3_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_follow_my_location_4_ios.png)

</TabItem>

</Tabs>

Tap the [My Location](../../map/interact-with-map.md#my-location-and-zoom) button to synchronize the map view and graph with your location.

- The **scale of the graph** remains the same, and the **bar information** is fixed 1/4 to the left side.
- As you move, the **graph will slide** from left to right, displaying information ahead of your track.
- No other widgets are displayed on this screen.
- This feature is useful for hiking and cycling as you navigate the track.  


## Related Articles {#related-articles}

- [Track appearance](./appearance.md)
- [Track Context menu](./track-context-menu.md)
- [Navigate by track](../../navigation/setup/gpx-navigation.md)
- [Routes on the map](https://docs.osmand.net/blog/routes) blog article
- [Configure map](../../map/configure-map-menu.md)  
- [GPX tracks](../../personal/tracks/index.md)  
- [Plan route](../../plan-route/index.md)  
- [Trip Recording](../../plugins/trip-recording.md)

> *Last updated: November 2024*
