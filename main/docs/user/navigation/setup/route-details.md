---
sidebar_position: 4
title:  Route Details
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

The OsmAnd allows you to find the best route and explore all of its details. The app provides detailed information about the entire route, including distance, travel time, surface type, elevation differences, and turn information. You can also analyze the route on the map, find out information about track segments, print the route plan, save the route, and share it with others. With this functionality, you will always be aware of the route details and can plan your journey more efficiently.  


## Setup

In OsmAnd you have the opportunity to get detailed information about your route. It is not located directly in the main menu.

There are three ways to access the Route Details menu.  

1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the Navigation icon on the map screen, set the route, and tap the Details button.
3. Go to the My Places menu, tap any available track in the list *Menu → My Places → Tracks*, select the Navigation icon in the track context menu in the Overview, and tap Details.  


## Details

Depending on the resolution of certain settings, terrain and road information, and the selected routing type, your route details may or may not be fully displayed.

The display of some details depends on the availability of map section information, GPS data, subscriptions, or a profile setting.


### Main information / Altitude Graph

[Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*.   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_main-info.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png)

</TabItem>

</Tabs>


### Analyse on map

A graph with altitude / slope info on distance, additional track data.

[Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map.  

- *Average altitude*
- *Altitude range*
- *Uphill*
- *Downhill*

This option allows you to interactively review track information using graphs and the map. To get access to this menu shortly tap on the *track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

- **Graph data Y-axis**: Altitude / Slope / Speed (if data is available in the track).
- **Graph dimension X-axis**: Distance / Time / Time of day.
- **Tap/Slide**: tap to Graph for showing info about track point and moving along Graph highlights point location on the map and displays info about point on the bar.
- **Scale**: scale Graph by [two fingers gesture](../map/interact-with-map.md#gestures). 
- **Follow My location**: click button [My Location](../map/interact-with-map.md#my-location--zoom), so map view and graph is synchronized with your location. In that case **graph scale** will stay constant and **bar information** will be fixed to 1/4 from the left. As you move, **graph will slide** from left to right displaying information Ahead of your Track. This functionality is useful for hiking & cycling during navigation, though this screen doesn't have other widgets displayed.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_analiz.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png)

</TabItem>

</Tabs>


### The features with map legend

The features with [map legend](../../map-legend/osmand.md#routes):  

- *Road type*
- *Surface*
- *Steepness*
- *Surface firmness*
- *Slope* 
- *Smoothness* 
- *Winter and ice roads*
- *Difficulty of horse trails*
- *Speed and Altitude* 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png)

</TabItem>

</Tabs>


### Turn-by-turn information

Turn-by-turn information - You can view the details of separate sections of the route by tapping the needed one.

The widget shows information about your next turn with a picture of maneuver and distance to it. There are 2 variants of **next turn** widget (small and big) and **2nd next turn** which is enabled if turn within approaching distance.

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,map_widget_next_turn"/>, <Translate android="true" ids="map_widget_next_turn_small"/>, <Translate android="true" ids="map_widget_next_next_turn"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_left,map_widget_next_turn"/>, <Translate ios="true" ids="map_widget_next_turn_small"/>, <Translate ios="true" ids="map_widget_next_next_turn"/>|
| On  Click | Speaks out next maneuver and distance to it, if voice guidance is turned on |


Trigger display time, color is related to the voice navigation prompts and related to the time left to reach maneuvre. So color indication, distance & turn visualization could be used instead of voice navigation.

| Distance |  Prompt type | Color | ~ Trigger Time | 
|-----|----|-------|------| 
| Close by | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Green | 5 seconds | 
| Approaching| [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Yellow | 20 seconds |
| Distant | [Prepare to turn](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Grey | > 100 seconds |   


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png)

</TabItem>

<TabItem value="ios" label="iOS">



</TabItem>

</Tabs>


### Routing file operation buttons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png)

</TabItem>

</Tabs>


#### Print information

Print button - You can print a turn-by-turn description of the route with the total distance and estimated travel time, or save it as a pdf.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">



</TabItem>

<TabItem value="ios" label="iOS">



</TabItem>

</Tabs>


#### Save information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Share buttons: *Share as GPX file* and *Save to OsmAnd tracks*  

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)   

</TabItem>

<TabItem value="ios" label="iOS">

Export button: *Export as GPX file* or *Share as link*  

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>


#### Share information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Share buttons: *Share as GPX file* and *Save to OsmAnd tracks*  

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)   

</TabItem>

<TabItem value="ios" label="iOS">

Export button: *Export as GPX file* or *Share as link*  

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>

- **Share as file**

in gpx https://www.osmand.net/docs/user/plugins/trip-recording#recorded-gpx-file

OsmAnd records tracks in a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) according to the following structure: *file > track > segments > points*.

- One point has a number of attributes: coordinates, speed, altitude, heading.
- Points are grouped into tracks.
- The next point after the gap makes up a new segment.
- Both segments and tracks are shown with the Start and Finish icons on the map.

OsmAnd GPX
The OsmAnd's GPX file format conforms to the GPX 1.1 specification with additional data written as extensions. There are several sections of such data https://osmand.net/docs/technical/osmand-file-formats/osmand-gpx/

- **Share link**

Each link consists of parts containing specific information. For example:  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.


### Track Appearance

:::tip note

<ProFeature/> Some parameters you can use only with Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::

In the OsmAnd application, you can apply some settings by changing the appearance of the tracks, to better identify them on the map.  

There are three ways to access the Track Appearance menu:
- Go to the My Places menu and tap on any available track in the list (*Menu → My Places → Tracks*), select the Appearance icon in the [Track Context menu](../map/track-context-menu#overview) in the Overview section.
- Tap the needed track on the map and select the Appearance icon in the Overview section.
- Select Appearance from the [track recording context menu](../plugins/trip-recording#сurrent-track-recording).   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Track menu options Android](@site/static/img/map/track-appear-and-1.png)  ![Track menu Appearance Android](@site/static/img/map/track-appear-and-2.png)  

|  |   
|----------|
|**"<Translate android="true" ids="gpx_split_interval"/>"** - <Translate android="true" ids="gpx_split_interval_descr"/> |
|![Track menu Appearance Split interval Android](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval Android](@site/static/img/map/track_appearance_menu_split_interval_android-2.png)| 
|**"<Translate android="true" ids="gpx_direction_arrows"/>"** - Adds direction information (in the form of arrows) on the track. |
|![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)|  
|**"<Translate android="true" ids="track_show_start_finish_icons"/>"** - You can choose whether or not to show icons for the start and finish of track segments. |
|![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)|  
|**"<Translate android="true" ids="shared_string_color"/>"** -  Allows you to display the track line in any color and transparency you prefer, or choose a coloring according to the map legend. If the necessary data on the segments of the track is missing such segments are displayed in gray. |
| 1. *<Translate android="true" ids="shared_string_color"/>:* *<Translate android="true" ids="track_coloring_solid"/>*, *<Translate android="true" ids="shared_string_speed"/>* and *<Translate android="true" ids="altitude"/>* are free color settings. |
| 2. <ProFeature/> &nbsp;*<Translate android="true" ids="shared_string_color"/>:* *<Translate android="true" ids="shared_string_slope"/>*, *<Translate android="true" ids="routeInfo_roadClass_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_smoothness_name"/>*, *<Translate android="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate android="true" ids="routeInfo_surface_name"/>*, *<Translate android="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the article "Configure map screen" in the section [Route line appearance](../navigation/guidance/map-during-navigation#route-line-appearance#colour). |
| ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android-4.png) |
|**"<Translate android="true" ids="select_track_width"/>"** - You can choose the width of the line according to the width of the road or if you want to highlight the route line more on the map, *<Translate android="true" ids="rendering_value_thin_name"/>, <Translate android="true" ids="rendering_value_medium_name"/>* and *<Translate android="true" ids="rendering_value_bold_name"/>*. In *<Translate android="true" ids="shared_string_custom"/>* you can select your preferred line width with the slider. |
|![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)| 
| **"<Translate android="true" ids="reset_to_original"/>"** - Resets all your settings to defaults. |

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu iOS](@site/static/img/map/track-appear-ios-1.png) ![Configure color iOS](@site/static/img/map/track-appear-ios-2.png)  

|  |   
|----------|
|**"<Translate ios="true" ids="gpx_direction_arrows"/>"** - Adds direction information (in the form of arrows) on the track. |
|![Track menu Appearance direction arrows Android](@site/static/img/map/track_appearance_menu_direction_arrows_android.png)|  
|**"<Translate ios="true" ids="track_show_start_finish_icons"/>"** - You can choose whether or not to show icons for the start and finish of track segments. |
|![Track menu Appearance start and finish icons Android](@site/static/img/map/track_appearance_menu_sf_icons_android.png)|  
|**"<Translate ios="true" ids="shared_string_color"/>"** -  Allows you to display the track line in any color and transparency you prefer, or choose a coloring according to the map legend. If the necessary data on the segments of the track is missing such segments are displayed in gray. |
| 1. <Translate ios="true" ids="shared_string_color"/>: *<Translate ios="true" ids="track_coloring_solid"/>*, *<Translate ios="true" ids="altitude"/>* and *<Translate ios="true" ids="shared_string_speed"/>* are free color settings. |
| 2. <ProFeature/> &nbsp;<Translate ios="true" ids="shared_string_color"/>: *<Translate ios="true" ids="shared_string_slope"/>*, *<Translate ios="true" ids="routeInfo_roadClass_name"/>*, *<Translate ios="true" ids="routeInfo_surface_name"/>*, *<Translate ios="true" ids="routeInfo_smoothness_name"/>*, *<Translate ios="true" ids="routeInfo_winter_ice_road_name"/>*, *<Translate ios="true" ids="routeInfo_surface_name"/>*, *<Translate ios="true" ids="routeInfo_horse_scale_name"/>* are paid color settings. A detailed description of these settings can be found in the article "Configure map screen" in the section [Route line appearance](../navigation/guidance/map-during-navigation.md#colour). |
| ![Track menu Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_android.png)  ![Appearance Track color Android](@site/static/img/map/track_appearance_menu_track_color_ios-2.png) |
|**"<Translate ios="true" ids="shared_string_width"/>"** - You can choose the width of the line according to the width of the road or if you want to highlight the route line more on the map, *<Translate ios="true" ids="rendering_value_thin_name"/>, <Translate ios="true" ids="rendering_value_medium_name"/>* and *<Translate ios="true" ids="rendering_value_bold_name"/>*. In *<Translate ios="true" ids="shared_string_custom"/>* you can select your preferred line width with the slider. |
|![Track menu Appearance Track Thickness Android](@site/static/img/map/track_appearance_menu_track_thickness_android.png)| 
|**"<Translate ios="true" ids="gpx_split_interval"/>"** - <Translate ios="true" ids="gpx_split_interval_descr"/> |
|![Track menu Appearance Split interval](@site/static/img/map/track_appearance_menu_split_interval_android.png)  ![Split interval](@site/static/img/map/track_appearance_menu_split_interval_ios.png)| 
| **"<Translate ios="true" ids="gpx_join_gaps"/>"** - <Translate ios="true" ids="gpx_join_gaps_descr"/> |
| **"<Translate ios="true" ids="reset_to_original"/>"** - Resets all your settings to defaults. |

</TabItem>

</Tabs> 


## Elevation info


The details shows a graph with the elevation and slope of your navigation route and your current location on this graph with current altitude and slope. The graph is plotted on two axes. The X-axis is the distance of your route. The Y-axis is the altitude, the value depends on the relief, and the slope displayed as a percentage.  


- The widget can be turned on/off by following this path:
<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>  

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


### Interactions with the graph
* *Zoom in/out*. By default, the graph shows the route from the current location up to 10 km ahead. You can use [two-finger movement](../map/interact-with-map#gestures) to zoom in and out for a more detailed view of altitude changes on your route. You can also move the graph to the right, forward on the route, and backward to the current location.  
* *Place a point on the graph*. If you want to see the altitude and degree value at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with the values will appear.  


### What's in
When you select a route and press the **Start** button, the map opens with your current location, the route on it and the widget at the bottom of the screen. On the widget you can see the graph and information about *Uphill*, *Downhill*, *Grade*, distance, altitude, slope angle. You can select the *optimal scale* and see all possible obstacles on your route.  

All values are indicated either for the whole route or only for the selected interval by scaling the graph.

|  |
|------------|
| ***Location Pin*** |
| The data on the graph of your ***Current location*** contains the location icon, altitude, and percent slope value. The right side of the widget contains data about the highest altitude and slope, the average value for both and the lowest altitude and slope on the selected route section visible on the graph. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Additional information*** |
| The right side of the widget contains data about the highest altitude and slope, the average value for both and the lowest altitude and slope on the selected route section visible on the graph. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|The ***Uphill*** and ***Downhill*** values are the sums of the distances from your location point to the end of the visible graph. If there is no location point on the graph, then it is the sum of the entire visible graph on the screen (this can happen when you change the scale and the location goes outside the graph).|
| *"Uphill"* – shows the sum of the all distances with increasing altitude from your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| *"Downhill"* – shows the sum of the all distances with decreasing altitude ffrom your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Grade*** is is the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope.|
| *"Grade"* – shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)| 



Info for del
-->

## Details

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|  |
|------------|
| [Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_main-info.png) |
| [Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_analiz.png) |
| The features with [map legend](../../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png) |
| Turn-by-turn information - You can view the details of separate sections of the route by tapping the needed one. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png) |
| Print button - You can print a turn-by-turn description of the route with the total distance and estimated travel time, or save it as a pdf. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_print.png) |
| Save as new track button. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_save.png) |
| Share buttons: *Share as GPX file* and *Save to OsmAnd tracks* |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

|  |
|------------|
| [Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png) |
| [Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png) |
| The features with [map legend](../../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png) |
| Save as new track button. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_save.png) |
| Export button: *Export as GPX file* or *Share as link* |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png) |

</TabItem>

</Tabs>

:::info
**Share link**.  
Each link consists of parts containing specific information. For example:  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.
:::

:::note
The display of some details depends on the availability of map section information, GPS data, subscriptions, or a profile setting.
:::  