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


OsmAnd has many powerful features to display various routes on the map. Routes could be built as part of Navigation, created via Plan Route, imported as GPX tracks, recorded via Trip Recording plugin or browsed and selected from OpenStreetMap data.


## Type of routes on the map

OsmAnd can display several different type of routes:

1.  [Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:
    - Track as a line - file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
    - Track as a route -  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines. 
    - Waypoints - file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.
2. [Navigation Route](#navigation-route) - a route line displayed during [navigation](../navigation/route-navigation.md). By default this is a solid transparent blue line, though default appearance depends on [vector map style](../map/vector-maps.md#default-map-styles), [day & night mode](../map/vector-maps.md#map-mode). It's also possible to fully customize it on Android.
3. [Routes and route networks on the map](#routes-on-the-map) - special [objects](../map/vector-maps.md#routes) on the map from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) data and provided with standard vector maps. They typically represent popular local routes and could be displayed in many ways (shields, color, thickness, pattern). To use these types of routes you will need to enable them on the map.

Read more about [GPX Tracks](../personal/tracks.md#track).


## Tracks 

There are two options to display [Tracks](../personal/tracks.md) on the map: via [<Translate android="true" ids="configure_map"/>](../map/tracks-on-map.md#display-via-configure-map-menu) menu or [<Translate android="true" ids="shared_string_my_places"/>](../map/tracks-on-map.md#display-via-my-places-menu) menu

![Tracks on the map Android](@site/static/img/map/tracks_layer_android.png) ![Tracks on the map iOS](@site/static/img/map/tracks_layer_ios.png) 


### Display via Configure map menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> → &#8230; → Choosing tracks for display from the list and setting track appearance.*    

![Tracks menu Android](@site/static/img/map/tracks_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,configure_map,tracks"/> → Choosing tracks for displayed from the list.*  

![Tracks menu iOS](@site/static/img/map/tracks_menu_ios.png) 

</TabItem>

</Tabs>


### Display via My Places menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → &#8942; → <Translate android="true" ids="shared_string_show_on_map"/> or ["Map" button](../personal/tracks.md#my-places-android) for choosing multiple tracks.  

![Tracks my places Android](@site/static/img/map/tracks_myplaces_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

&nbsp;<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks"/> → &#8250; → <Translate ios="true" ids="map_settings_show"/> or ["Layer" button](../personal/tracks.md#my-places-ios) for choosing multiple tracks.  

![Tracks menu iOS](@site/static/img/map/tracks_myplaces_ios.png)

</TabItem>

</Tabs>


### Track Appearance

:::tip note
  
<ProFeature/> Some parameters you can use only with Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::

In OsmAnd you can change the color, the thickness of the track, display arrows and icons of the starting and ending points.

To get to the track Appearance menu, you need to display track on the map, then in the [Track Context menu](../map/track-context-menu#overview) in the <Translate android="true" ids="shared_string_overview"/> section, [shortcut](../map/map-context-menu.md#select-route-short-tap-for-android) is to click on the "palette" icon.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/map/track-appear-and-1.png) ![Track menu Appearance Android](@site/static/img/map/track-appear-and-2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu iOS](@site/static/img/map/track-appear-ios-1.png) ![Configure color iOS](@site/static/img/map/track-appear-ios-2.png) 

</TabItem>

</Tabs>

|**Parameter and Description**|   
|------------|
|**<Translate android="true" ids="gpx_split_interval"/>** - splits track into intervals by **_Distance_** or **_Time_** and displays shields on the map.|
|![Track menu Appearance Split interval Android](@site/static/img/map/track_appearance_menu_split_interval_android.png)| 
|**<Translate android="true" ids="gpx_direction_arrows"/>** - adds direction info on the track.|
|![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)|  
|**<Translate android="true" ids="track_show_start_finish_icons"/>** - shows or hides start/finish icons of the track segments.|
|![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)|  
|**<Translate android="true" ids="shared_string_color"/>** -  changes the color (solid or gradient) of the track using internal data: **_Solid Color_**, **_Height_**, **_Speed_**, **_Slope_** (PRO feature), **_Smoothness_** (OsmAnd plan route), **_Surface_** (OsmAnd plan route). If necessary data is not available grey color is displayed. |
|![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)|
|**<Translate android="true" ids="select_track_width"/>** - changes the thickness for the track between **_<Translate android="true" ids="rendering_value_thin_name"/>_**, **_<Translate android="true" ids="rendering_value_medium_name"/>_**, **_<Translate android="true" ids="rendering_value_bold_name"/>, <Translate android="true" ids="shared_string_custom"/>_**.|
|![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)|  


### Analyze Track on Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

This option allows you to interactively review track information using graphs and the map. To get access to this menu shortly tap on the track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>

![Track menu analyze on map Android](@site/static/img/personal/tracks/track_analyze_on_map_android.png) ![Track menu analize on the map distance Android](@site/static/img/personal/tracks/track_analyze_on_map_distance_android.png) 

- **Graph data**: Altitude / Slope / Speed (if data is available in the track).
- **Graph dimension**: Distance / Time.
- **Tap/Slide**: tap to Graph for showing info about track point and moving along Graph highlights point location on the map and displays info about point on the bar.
- **Scale**: scale Graph by [two fingers gesture](../map/interact-with-map.md#gestures). 
- **Follow My location**: click button [My Location](../map/interact-with-map.md#my-location--zoom), so map view and graph is synchronized with your location. In that case **graph scale** will stay constant and **bar information** will be fixed to 1/4 from the left. As you move, **graph will slide** from left to right displaying information Ahead of your Track. This functionality is useful for hiking & cycling during navigation, though this screen doesn't have other widgets displayed.  

![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

<!-- 
![Track menu analyze on map 3 Android](@site/static/img/personal/tracks/track_analyze_on_map_3_android.png) ![Track menu analyze on map 4 Android](@site/static/img/personal/tracks/track_analyze_on_map_4_android.png)
![Track menu analyze on map 1 Android](@site/static/img/personal/tracks/track_analyze_on_map_1_android.png) ![Track menu analyze on map 1.1 Android](@site/static/img/personal/tracks/track_analyze_on_map_1.1_android.png)
![Track menu analyze on map 2 Android](@site/static/img/personal/tracks/track_analyze_on_map_2_android.png) ![Track menu analyze on map 2.1 Android](@site/static/img/personal/tracks/track_analyze_on_map_2.1_android.png)
![Track menu analyze on map 5 Android](@site/static/img/personal/tracks/track_analyze_on_map_5_android.png)
-->


## Navigation Route

Navigation route is a solid line prepared by [Route Preparation process](../navigation/route-navigation.md). It is displayed during Navigation or during Route preparation step.

![Route on the map Android](@site/static/img/map/route_layer_android.png) ![Route on the map iOS](@site/static/img/map/route_layer_ios.png)  


## Routes on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They are selectable by [clicking on the route shield](./tracks-on-map.md#save-as-a-track) or with the right configuration of a visible set of routes, it's possible to follow the route by color & shields.  You can create a track on top of the routes using [Plan Route](../plan-route/create-route.md) functionality.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_routes"/>

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

OsmAnd can highlight [routes present on OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route). They are not selectable but with the right configuration of visible set of routes, it's possible to follow the route by color & shields, you can create a track on top of the routes using [Plan Route](../plan-route/create-route.md) functionality.

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,rendering_category_routes"/>

![Track menu iOS](@site/static/img/map/configure_map_routes_ios.png) 

</TabItem>

</Tabs>

![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)


### Save as a Track

<InfoAndroidOnly />  

[Hiking / Cycling / Travel routes](../map/vector-maps.md#routes) are clickable. Just tap **the route symbol**, get full route information and download the GPX file for the selected route. (Routes are marked on the map with [OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol).)

Clicking on a shield ([OSMC symbols](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol)) proposes to choose the nearest routes.

![Routes on the ground](@site/static/img/map/routes-4.png)

Choosing the route opens [Track Context menu](../map/track-context-menu.md):

![Routes on the ground](@site/static/img/map/routes-5.png)

You can view the route, and its relief, download it as a GPX-file, edit it with "Plan route" tool and even start navigation along it:
- look at Route info (Distance, Uphill, Downhill, Altitude range, Route name, Network, Operator, etc.). 

![Routes on the ground](@site/static/img/map/routes-6.png)

- looking at Altitude Graph, Analyze on map, Share like GPX-file and etc.

![Routes on the ground](@site/static/img/map/routes-7.png)

- download the route like GPX-file by clicking to "Download" button. After that, you can do any actions with this GPX-file (navigation, change viewing, modifying by "Route plan" tool and etc).

![Routes on the ground](@site/static/img/map/routes-8.png) ![Routes on the ground](@site/static/img/map/routes-9.png)  


## Read more

- ["Routes on the map" blog article](https://docs.osmand.net/blog/routes)  
- [Track Context menu](../map/track-context-menu.md)  
- [Configure map](../map/configure-map-menu.md)  
- [Navigation by track](../navigation/gpx-navigation.md)  
- [GPX tracks](../personal/tracks.md)  
- [Tracks on the map](../map/tracks-on-map.md)  
- [Plan route](../plan-route/index.md)  
- [Trip Recording](../plugins/trip-recording.md)  
- [Analyze on Map](../map/tracks-on-map.md)  

