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


## Types of Tracks and Routes

OsmAnd can display several different type of routes:

1.  [Tracks (GPX)](#tracks) - recorded or planned trip saved in [GPX-format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). This kind of route could be imported from the external source, created in the application or recorded by user. GPX could contain one of 3 different types of data or all of them:
    - Track as a line - file has ```<trkpt>``` points array, each point has location and optionally time, speed, altitude and other attributes. These tracks are displayed on the map as solid lines.
    - Track as a route -  file has ```<rtept>``` points array, each point described as an intermediate point of the route. It depends on how points within a route should be connected either as small route segments or via straight line. These tracks are displayed on the map as dashed lines. 
    - Waypoints - file has ```<wpt>``` points with attributes. Waypoints are displayed as circular points on the map. You could click on them to get additional information.
2. [Routes and route networks on the map](#routes-on-the-map) - special [objects](../map/vector-maps.md#routes) on the map from [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Relation:route) data and provided with standard vector maps. They typically represent popular local routes and could be displayed in many ways (shields, color, thickness, pattern). To use these types of routes you will need to enable them on the map.


## Routes on the Map

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


### Coloring routes by type

![Route info](@site/static/img/map/route_coloring_type_andr.png)

Some routes have additional settings with which you can select the relevant coloring type for displaying them on the map.  

Additional settings are available next to the route name in the&nbsp;  "**...|**"  &nbsp;menu. By default, if you do not select anything in the menu, the routes of the first type in the list will be displayed. But if you have made a selection, it is saved by the application and will be used for the current profile every time you enable the routes.  

A list of all routes with descriptions can be found in the [Vector Maps (Map Styles)](../map/vector-maps.md#routes) article.

- **Cycle routes**: *Route* and *Node networks*.
- **Mountain bike routes**: *MTB scale* and *IMBA*.
- **Hiking routes**: *OSMC*, *Network affiliation*, and *Node networks*.
- **Difficulty classification**: *SAC scale* and *CAI scale*.
- **Travel routes**: *Tracks*, *Travelbooks*, and *Points*.



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


## Track Appearance

:::tip note

<ProFeature/> Some parameters you can use only with Maps+ or Pro feature: <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">free and paid features</a>.

:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:
- Go to the *My Places* menu and tap any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../map/track-context-menu.md#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../plugins/trip-recording.md#сurrent-track-recording).  
- Go to *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> → &#8942; → <Translate android="true" ids="change_appearance"/>* for the tracks you have selected to be displayed on the map. 


### Split Interval

![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)

select the interval at which distance or time stamps are displayed on the track.  

### Direction Arrows

![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png) 

select the interval at which distance or time stamps are displayed on the track.  

### Show Start and Finish Icons

![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)  

allows you to select whether or not to show the start and end icons of track segments.  

### Color

![Appearance](@site/static/img/map/appearance_color_andr.png) 

allows to display the track line in any color and transparency, or select coloring according to the map legend. If necessary data on the track sections are missing, such sections are displayed in gray color. 

- *<Translate ios="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. If *Speed* and *Altitude* are not active, it means that the track does not contain this data.  

    ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png)  

- *<Translate android="true" ids="shared_string_color"/>: ([Maps+ / Pro feature](../purchases/index.md))* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the [*Map screen during navigation*](../navigation/guidance/map-during-navigation.md#color) page, specifically in the [Route line appearance](../navigation/guidance/map-during-navigation.md#route-line-appearance) section.  


### Width

![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)   ![Track Appearance](@site/static/img/map/track_appearance_width_andr.png)  

You can customize the appearance of the track in several menus of the application:
- [*Track → Appearance*](../personal/tracks/manage-tracks.md#folder-menu).
- [*Navigation settings → Customize route line*](../navigation/guidance/navigation-settings.md#customize-route-line).
- [*My Places → Tracks tab → any folder → Default appearance*](../personal/tracks/manage-tracks.md#folder-menu).

With the *Width setting* you can choose the thickness of the track line based on the width of the road or intersection with other tracks, or for example, if you want to highlight a track on the map by importance.  

- **Thin, Medium,** and **Bold** are lines whose width is fixed and preset by the OsmAnd application.
- In the **Custom** setting you can set the required line width with a slider, from 1 to 24.
- In the [*Tracks tab*](../personal/tracks/manage-tracks.md#folder-menu) with the **Original** setting, different original width parameters can be retained for each track of the selected folder.
- In the [*Configure Profile*](../navigation/guidance/navigation-settings.md#customize-route-line) the route line can be set to the **Map Style** width, this is the default width for map specified by the OsmAnd application.


<!-- Width  
You can adjust the width of the displayed line of your route to match the width of the road or path on the map. For better visual identification, you can make the line width wider or narrower by adjusting it manually.
- ***<Translate android="true" id="map_widget_renderer"/>*** – It's used with default width. You can see a full description of the map style by clicking there [Map style](../map/vector-maps.md#default-map-styles)  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)  ![map stule](@site/static/img/navigation/route/map_st.png)  ![map stule](@site/static/img/navigation/route/width_ms_ios.png)
- ***Thin width / Medium width / Bold width*** – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly.  
    ![width](@site/static/img/navigation/route/width.png)  ![width](@site/static/img/navigation/route/width_ios.png)  ![width](@site/static/img/navigation/route/width_med.png)
- ***Custom*** – It allows you to show the line in some preferred width. Select the width using the slider.  
    ![custom](@site/static/img/navigation/route/custom_1.png)  ![custom](@site/static/img/navigation/route/width_cus_ios.png)  ![custom](@site/static/img/navigation/route/custom_2.png)  
-->


### 3D Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_android.png)

This [Paid feature](../purchases/index.md) allows you to display tracks by elevation. 

You have the option to use 3D track visualization if the map rendering engine [Version 2 (OpenGl)](../personal/global-settings.md#map-rendering-engine) is enabled.

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Appearance 3D visualisation](@site/static/img/map/3d_track_appearance_ios.png)

This [Paid feature](../purchases/index.md) allows you to display tracks by elevation. 

</TabItem>

</Tabs>

3D track's settings:
- *<Translate android="true" ids="visualized_by"/>*: None , Altitude, Speed, Fixed height (for Android additional: Heart Rate, Bicycle Cadence, Bicycle Power, Temperature, Bicycle Speed) - Choose to display the 3D track by altitude ([altitude data](../plugins/trip-recording.md#recorded-gpx-file) from GPX track file), at a fixed height, or not at all. 
- *<Translate android="true" ids="wall_color"/>*: None, Solid, Downward gradient, Upward gradient (for Android additional: Altitude, Slope, Speed) - Select whether to color the 3D track and choose the type of coloration. 
- *<Translate android="true" ids="track_line"/>*: Top, Bottom, Top and bottom - Decide where to add a line to the 3D track for better visibility. 
- *<Translate android="true" ids="vertical_exaggeration"/>* : None to x3.0 - Adjust the level of vertical exaggeration for the 3D track.  
- *<Translate android="true" ids="wall_height"/>* (if you choose <Translate android="true" ids="visualized_by,fixed_height"/>) : None to 2000 m - by changing the scale value, you can change 3D track height.

### Join Gaps

the gaps between segments will be connected. 

### Reset to Original

resets all settings to default values. 


## Analyze Track on Map  

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
