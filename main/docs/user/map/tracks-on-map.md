---
sidebar_position: 7
title:  Tracks and Routes
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


## Type of routes on the map

OsmAnd can display several different type of routes:

1.  [Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:
    - Track as a line - file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
    - Track as a route -  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines. 
    - Waypoints - file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.
2. [Navigation Route](#navigation-route) - a route line displayed during [navigation](../navigation/setup/route-navigation.md). By default this is a solid transparent blue line, though default appearance depends on [vector map style](../map/vector-maps.md#default-map-styles), [day & night mode](../map/vector-maps.md#map-mode). It's also possible to fully customize it on Android.
3. [Routes and route networks on the map](#routes-on-the-map) - special [objects](../map/vector-maps.md#routes) on the map from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) data and provided with standard vector maps. They typically represent popular local routes and could be displayed in many ways (shields, color, thickness, pattern). To use these types of routes you will need to enable them on the map.

Read more about [GPX Tracks](../personal/tracks.md#track).


## Tracks 

OsmAnd provides the ability to record and display tracks. This allows you to get location, movement, distance, altitude and travel time data and analyze track data.


### Display tracks on the map

OsmAnd allows you [to view tracks on a map](../personal/tracks.md#show-tracks-on-map). Each point on the track corresponds to a specific location and contains information about time, speed and altitude. This allows you to visually assess the route, learn about the places you have visited and estimate the difficulty of the route by changes in altitude.  

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

You can read additional information in the [Tracks](../personal/tracks.md#configure-map) article.


#### Tracks in My Places menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/>*](../personal/tracks.md#single-track-menu)   

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

[*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → long tap on the chosen GPX track → Show on map*](../personal/tracks.md#single-track-menu)    

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)
</TabItem>

</Tabs>

To show track on the map, you need to:
- *Android* - tap on the three-dots menu in the field with the required track.
- *iOS* - long-press on the required track in the list.

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

### Track Appearance

:::tip note

<ProFeature/> Some parameters you can use only with Maps+ or Pro feature: <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">free and paid features</a>.

:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:
- Go to the *My Places* menu and tap on any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../map/track-context-menu#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../plugins/trip-recording#сurrent-track-recording).  
- Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> → &#8942; → <Translate android="true" ids="change_appearance"/>* for the tracks you have selected to be displayed on the map. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Track menu options Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track-appear-and-2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu iOS](@site/static/img/map/track-appear-ios-1.png) ![Configure color iOS](@site/static/img/map/track-appear-ios-2.png)  

</TabItem>

</Tabs> 

|  |   
|----------|
|**<Translate ios="true" ids="gpx_direction_arrows"/>** - select the interval at which distance or time stamps are displayed on the track. |
|![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)|  
|**<Translate ios="true" ids="track_show_start_finish_icons"/>** - allows you to select whether or not to show the start and end icons of track segments. |
|![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)|  
| 3D visualization - you have the ability to use 3d visualization if the Map rendering engine Version 2 (OpenGl) is enabled. | |
|**<Translate ios="true" ids="shared_string_color"/>** - allows to display the track line in any color and transparency, or select coloring according to the map legend. If necessary data on the track sections are missing, such sections are displayed in gray color. |
| 1. *<Translate ios="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. If *Speed* and *Altitude* are not active, it means that the track does not contain this data. |
| 2. <ProFeature/> &nbsp;*<Translate android="true" ids="shared_string_color"/>:* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the [*Map screen during navigation*](../navigation/guidance/map-during-navigation#color) page, specifically in the [Route line appearance](../navigation/guidance/map-during-navigation.md#route-line-appearance) section. |
| ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png) |
|**3D Track** - This feature enables the display of tracks by altitude. [Paid feature](../../user/purchases/index.md).  |
| 1. *Visualized by*: None , Altitude, Fixed Height - Choose to display the 3D track by altitude, at a fixed height, or not at all. |
| 2. *Wall color*: None, Solid, Downward gradient, Upward gradient - Select whether to color the 3D track and choose the type of coloration. |
| 3. *Track line*: Top, Bottom, Top and bottom - Decide where to add a line to the 3D track for better visibility. |
| 4. *Vertical exaggeration* (iOS only): None to x3.0 - Adjust the level of vertical exaggeration for the 3D track. |
|![Track menu Appearance 3D visualisation](@site/static/img/map/track_appearance_menu_3d_android.png)|
|**<Translate ios="true" ids="shared_string_width"/>** - allows you to select the line width depending on the width of the road or if you want to strongly emphasize the route line on the map, *<Translate android="true" ids="rendering_value_thin_name"/>, <Translate android="true" ids="rendering_value_medium_name"/>* and *<Translate android="true" ids="rendering_value_bold_name"/>*. In *<Translate android="true" ids="shared_string_custom"/>*, you can select the preferred line width using the slider. |
|![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)| 
|**<Translate ios="true" ids="gpx_split_interval"/>** - select the interval at which distance or time stamps are displayed on the track. |
|![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)| 
| **<Translate ios="true" ids="gpx_join_gaps"/>** - the gaps between segments will be connected. |
| **<Translate ios="true" ids="reset_to_original"/>** - resets all settings to default values. |


### Analyze Track on Map

This tool allows you to view track information with graphs and a map. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

![Track menu analyze on map Android](@site/static/img/personal/tracks/analyze_on_map_menu_andr.png) ![Track menu analize on the map distance Android](@site/static/img/personal/tracks/track_analyze_on_map_distance_android.png)   


![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">


*Tap the track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*     


![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_1_ios.png)

![Track menu analyze on map](@site/static/img/personal/tracks/track_analyze_2_ios.png)  ![Track menu analyze on map ](@site/static/img/personal/tracks/track_analyze_3_ios.png)


</TabItem>

</Tabs>

- **Graph data (Y-axis)**: Altitude, Slope, Speed, [External sensors data](../plugins/external-sensors.md) or their combinations (if data is available in the track).
- **Graph dimension (X-axis)**: Distance / Time / Time of day.
- **Tap/Slide**: tap to Graph for showing info about track point and moving along Graph highlights point location on the map and displays info about point on the bar.
- **Scale**: scale Graph by [two fingers gesture](../map/interact-with-map.md#gestures). 
- **Follow My location**: click button [My Location](../map/interact-with-map.md#my-location--zoom), so map view and graph is synchronized with your location. In that case **graph scale** will stay constant and **bar information** will be fixed to 1/4 from the left. As you move, **graph will slide** from left to right displaying information Ahead of your Track. This functionality is useful for hiking & cycling during navigation, though this screen doesn't have other widgets displayed. 


## Navigation Route


Navigation route is a solid line prepared by [Route Preparation process](../navigation/setup/route-navigation.md). It is displayed during Navigation or during Route preparation step.

![Route on the map Android](@site/static/img/map/route_layer_android.png) ![Route on the map iOS](@site/static/img/map/route_layer_ios.png)  


## Routes on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They are selectable by [clicking on the route shield](#save-as-a-track) or with the right configuration of a visible set of routes, it's possible to follow the route by color & shields.  You can create a track on top of the routes using [Plan Route](../plan-route/create-route.md) functionality.

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_routes"/>_

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They are not selectable but with the right configuration of visible set of routes, it's possible to follow the route by color & shields, you can create a track on top of the routes using [Plan Route](../plan-route/create-route.md) functionality.

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>_

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png) 

</TabItem>

</Tabs>

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Save as a Track

[Hiking / Cycling / Travel routes](../map/vector-maps.md#routes) are clickable. Just tap **the route symbol**, get full route information and download the GPX file for the selected route. (Routes are marked on the map with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol).)

Clicking on a shield ([OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)) proposes to choose the nearest routes.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-4.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking.png)

</TabItem>

</Tabs>  

Choosing the route opens [Track Context menu](../map/track-context-menu.md):

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-5.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking_1.png)

</TabItem>

</Tabs>


You can view the route, and its relief, download it as a GPX-file, edit it with "Plan route" tool and even start navigation along it:
- look at **Route info** (_Distance, Direction, Ascent/Descent, Altitude range, Route name, Network, Operator, State, Colo, Type, Description, Color, Roundtrip, start/end points and etc._). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-6.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking_5.png)

</TabItem>

</Tabs>

- looking at _Altitude Graph, Analyze on map, Share like GPX-file_ and etc.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Routes on the ground](@site/static/img/map/routes-7.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Routes on the ground](@site/static/img/map/hiking_2.png)

</TabItem>

</Tabs>

- download the route like _GPX-file_: 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

By taping to **Download** button. After that, you can do any actions with this GPX-file (navigation, change viewing, modifying by "Route plan" tool and etc).

![Routes on the ground](@site/static/img/map/routes-8.png) ![Routes on the ground](@site/static/img/map/routes-9.png)  

</TabItem>

<TabItem value="ios" label="iOS">

by clicking to "Save" button. After that, you can do any actions with this GPX-file (navigation, change viewing, modifying by "Route plan" tool and etc).

![Routes on the ground](@site/static/img/map/hiking_1.png) ![Routes on the ground](@site/static/img/map/hiking_3.png)

</TabItem>

</Tabs>


## Read more

- ["Routes on the map" blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../map/track-context-menu.md)  
- [Configure map](../map/configure-map-menu.md)  
- [Navigation by track](../navigation/setup/gpx-navigation.md)  
- [GPX tracks](../personal/tracks.md)  
- [Tracks on the map](../map/tracks-on-map.md)  
- [Plan route](../plan-route/index.md)  
- [Trip Recording](../plugins/trip-recording.md)  
- [Analyze on Map](../map/tracks-on-map.md)  

