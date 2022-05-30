---
sidebar_position: 4
title:  Navigational widgets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';


Navigational widgets are enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)

## Active and passive navigation

Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are not available in **Browse Map** profile. 

**Active** navigation requires to set a destination, calculate the route (Directions) and start navigation (Go), not necessary with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require to have å destination point set and works automatically once you switch to any navigational profile, for example 'Driving'. In that case application will try to determine which road you are following and display extra information about it i.e. name, lanes info, max speed available. Please note that this approach is quite unreliable and doesn't support all features.


## Elevation widget

:::note
  
<ProFeature/>  This widget you can use only with Pro feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::



**General information.** The Elevation widget shows a graph with the elevation and slope of your navigation route and your current location on this graph with current altitude and slope. The graph is plotted on two axes. The X-axis is the distance of your route. The Y-axis is the altitude, the value depends on the relief, and the slope displayed as a percentage.  

**What the widget is most useful for.** This widget will best help you with a hiking or biking route. You can see all the obstacles associated with descents and ascents on your route with it. And also, making an analysis of the upcoming route for its passing.    


&nbsp;  
>The widget can be turned on/off by following this path:
<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>  

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


&nbsp;  
**Available interactions with the graph:**  
* *Zoom in/out*. By default, the graph shows the route from the current location up to 10 km ahead. You can use [two-finger movement](../map/interact-with-map#gestures) to zoom in and out for a more detailed view of altitude changes on your route. You can also move the graph to the right, forward on the route, and backward to the current location.  
* *Place a point on the graph*. If you want to see the altitude and degree value at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with the values will appear.  


&nbsp;  
![point](@site/static/img/widgets/sch_1-1.png)  ![data](@site/static/img/widgets/sch_1-2.png)  


**What's in.**
When you select a route and press the start button, the map opens with your current location, the route on it, and the widget at the bottom of the screen. On the widget you can see the graph and information about *Uphill*, *Downhill*, *Grade*, distance, altitude, slope angle. You select the optimal scale and see all possible obstacles on your route.  
The data on the graph of your **current location** contains the location icon, altitude, and percent slope value. The right side of the widget contains data about the highest altitude and slope, the average value for both and the lowest altitude and slope on the selected route section visible on the graph.     
All values are indicated either for the whole route or only for the selected interval by scaling the graph.

|  |
|------------|
|The ***Uphill*** and ***Downhill*** values are the sums of the distances from your location point to the end of the visible graph. If there is no location point on the graph, then it is the sum of the entire visible graph on the screen (this can happen when you change the scale and the location goes outside the graph).|
| *"Uphill"* – shows the sum of the all distances with increasing altitude from your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| *"Downhill"* – shows the sum of the all distances with decreasing altitude ffrom your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Grade*** is is the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope.|
| *"Grade"* – shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without location point visible on the screen. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)| 


&nbsp;  
## Bearing

The bearing widget shows the absolute or relative bearing to a target in angular units (<Translate android="true" ids="shared_string_degrees"/> 180, <Translate android="true" ids="shared_string_degrees"/> 360, <Translate android="true" ids="shared_string_milliradians"/>).

To show a bearing requires to have a **target point** selected. In case you have a **destination** (or a **first intermediate point**, if present) selected for navigation, this will be used as the target point. Otherwise, the **topmost selected marker** will be used.

[Magnetic bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) is the clockwise (horizontal) angle between magnetic north and the target point observed from your location. This is the compass value of a magnetic compass you have to follow to reach this target. Example: If the Magnetic bearing is shown as _0° M_, you need move strictly towards magnetic north to reach the target point.

[Relative bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) refers to the angle between your forward direction and the target point. Your **forward direction** is either your **direction of your motion** as taken from the GPS-sensors, or in case you stand still **where you point your device** (i.e. your device orientation as per its magnetic compass). Example: An object with relative bearing of _0°_ is straight ahead of you, an object with relative bearing _180°_ is straight behind you.


![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)

| | |
|------------|------------|
| Enable | Magnetic or relative bearing: <br /> <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,map_widget_bearing"/> or <Translate android="true" ids="map_widget_magnetic_bearing"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_magnetic_bearing"/> or <Translate ios="true" ids="map_widget_bearing"/> |
| Format | Supports different angular units: <br /> <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,angular_units"/>|
| On Click | Changes between  Relative bearing or Magnetic bearing (with "M") |

## Navigation points
### Destination

Destination widget shows the distance left to the last destination point by following the calculated route. 

![Destination widget](@site/static/img/widgets/destination_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,route_descr_destination"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_distance"/>|
| On Click | Moves the map to a destination point. |    

### Intermediate destination

Intermediate Destination widget shows the distance left to the first intermediate point by following the calculated route. Once intermediate points is passed, the distance will be updated to the next intermediate point. If there is no intermediate points, widget is not displayed.

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,map_widget_intermediate_distance"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_intermediate_distance"/>|
| On Click | 1 intermediate point - move the map to the intermediate point, <br /> 2 or more intermediate points - opens Destinations list menu. |

### Arrival time or Time to go

The widget shows <Translate android="true" ids="access_arrival_time"/> or <Translate android="true" ids="map_widget_time"/> to complete navigation. Time is constantly updated during navigation and it is equal to the route time from the current location. For example, if you stop moving, "Time to go" will stay constant and "Arrival time" = "Time to go" + "Current time".

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_time_to_go_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,access_arrival_time"/> or <Translate android="true" ids="map_widget_time"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,access_arrival_time"/> or <Translate ios="true" ids="map_widget_time"/>|
| On Click | Changes between "Arrival time" to "Time to go" and vice versa. |  

### Intermediate arrival time

Intermediate arrival time or Intermediate time widget shows <Translate android="true" ids="access_intermediate_arrival_time"/> or <Translate android="true" ids="map_widget_intermediate_time"/> of navigation to the first intermediate point. Once intermediate points is passed, the time will be updated to the next intermediate point. If there is no intermediate points, widget is not displayed.

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

| | |
|------------|------------|
| Enable |  <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,access_intermediate_arrival_time"/> or <Translate android="true" ids="map_widget_intermediate_time"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,access_intermediate_arrival_time"/> or <Translate ios="true" ids="map_widget_intermediate_time"/>|
| On  Click | Changes between "Intermediate arrival time" to "Intermediate time" and vice versa. |  

## Speed limit

Speed limit widget shows a speed limit for a current driving road. It works in passive and active navigation mode. The data is taken from [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

![Speed limit widget](@site/static/img/widgets/speed_limit_widget.png)

| |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,map_widget_max_speed"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_max_speed"/> or <Translate ios="true" ids="map_widget_intermediate_time"/>|
| On  Click | - |

## Next turns

The widget shows information about your next turn with a picture of maneuver and distance to it. There are 2 variants of **next turn** widget (small and big) and **2nd next turn** which is enabled if turn within approaching distance.

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,map_widget_next_turn"/>, <Translate android="true" ids="map_widget_next_turn_small"/>, <Translate android="true" ids="map_widget_next_next_turn"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_left,map_widget_next_turn"/>, <Translate ios="true" ids="map_widget_next_turn_small"/>, <Translate ios="true" ids="map_widget_next_next_turn"/>|
| On  Click | Speaks out next maneuver and distance to it, if voice guidance is turned on |


Trigger display time, color is related to the voice navigation prompts and related to the time left to reach maneuvre. So color indication, distance & turn visualization could be used instead of voice navigation.

| Distance |  Prompt type | Color | ~ Trigger Time | 
|-----|----|-------|------| 
| Close by | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Green | 5 seconds | 
| Approaching| [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Yellow | 20 seconds |
| Distant | [Prepare to turn](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Grey | > 100 seconds | 


## Lanes

Lanes widget shows the current road lanes layout and highlights lanes to drive with active navigation. With passive navigation, the widget displays lanes layout for current driving road. The data is taken from [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:turn).

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_appearance_rem,show_lanes"/> |
|  | <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,show_lanes"/> |
| On  Click | - |

Display time, color is related to the voice navigation prompts and related to the time left to reach maneuvre.

|  Name |  Prompt type | Color | ~ Trigger Time | 
|-----|----|-------|------| 
| Close by | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Green | 5 seconds | 
| Approaching | [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) | Yellow | 20 seconds |


## Alert widget

Alert widget combines multiple type of alerts that are displayed in the lower left corner during navigation.

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

There are options to turn on and off specific alerts such as: <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>, <Translate android="true" ids="show_tunnels"/>. Other alerts are active by default, if alert widget is enabled. For speed limit alert, you could configure *<Translate android="true" ids="speed_limit_exceed"/>* within voice prompts to relate vehicle speed with GPS-speed more precisely.

Most of alerts are displayed and announced within 15 seconds, same as [Passing waypoint / favorite / POI](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior).

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>|
|  | <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2,screen_alerts"/>|

### Alert types 

Alert types have different visuals that depends on **<Translate android="true" ids="driving_region"/> **  which could be configured via  <Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>. OsmAnd doesn't have a goal to represent 100% identical road signs but to indicate some similarities.

| | | |
|------------|------------|------------|
|Name|Description|Icon|
|<Translate android="true" ids="show_traffic_warnings"/>| [Traffic calming](https://en.wikipedia.org/wiki/Traffic_calming) uses physical design and other measures to improve safety for motorists, pedestrians and cyclists. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
|<Translate android="true" ids="show_pedestrian_warnings"/>| [A pedestrian crossing](https://en.wikipedia.org/wiki/Pedestrian_crossing) (primarily British English) or crosswalk is a place designated for pedestrians to cross a road, street, or avenue. OsmAnd shows the alert of uncontrolled pedestrian crossing.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
|<Translate android="true" ids="traffic_warning_speed_limit"/>| In most countries the [Road speed limits](https://en.wikipedia.org/wiki/Speed_limit) are used to set the legal maximum, middle or minimum speed at which road vehicles may travel on a given stretch of road. In OsmAnd the alert is shown when you exceed the speed. You can set parameters of speed exceeding (0, 5, 10.. km/h). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
|<Translate android="true" ids="show_tunnels"/>| A tunnel is an underground passageway, esp cars that pass under a mountain, river, or a congested urban area. In OsmAnd the alert "Tunnels" has information about tunnel length. If you are in a tunnel it shows distance to the end of the tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
|<Translate android="true" ids="show_cameras"/>| [A traffic enforcement camera](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) and [speed camera](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) are cameras to detect motoring offenses, including speeding, going through a red traffic light and others. <br />**NOTE:** <Translate android="true" ids="speed_cameras_alert"/> To uninstal speed cameras from OsmAnd (Android only): [<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="osmand_settings"/> → <Translate android="true" ids="uninstall_speed_cameras"/>](../personal/global-settings.md)   | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
|<Translate android="true" ids="traffic_warning_stop"/>| [A stop sign](https://en.wikipedia.org/wiki/Stop_sign) is a traffic sign designed to notify drivers that they must come to a complete stop and make sure the intersection is safely clear of vehicles and pedestrians before continuing past the sign.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
|<Translate android="true" ids="show_railway_warnings"/>|This warning means that there is a [railway crossing](https://en.wikipedia.org/wiki/Crossbuck) ahead. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
|<Translate android="true" ids="traffic_warning_border_control"/>|This warning indicates that border control is ahead.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
|<Translate android="true" ids="traffic_warning_border_control"/>| [Hazard symbols or warning symbols](https://en.wikipedia.org/wiki/Hazard_symbol) are recognisable symbols designed to warn about hazardous or dangerous materials, locations, or objects, including electric currents, poisons, and radioactivity. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
|<Translate android="true" ids="traffic_warning_payment"/>| This warning indicates that a toll booth for a toll road is ahead.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Street name

Street name widget shows **current street name** with straight location arrow or **next street name** with the maneuver has to be completed. Street name typically consists of highway shield, [name](https://wiki.openstreetmap.org/wiki/Key:name), [ref](https://wiki.openstreetmap.org/wiki/Key:ref), [internation ref](https://wiki.openstreetmap.org/wiki/Key:int_ref), [destination](https://wiki.openstreetmap.org/wiki/Key:destination). Switch between the current street name and the next street name happens when you approach the maneuver location (~20 seconds), same as '[Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior)' voice prompt.

When driving along a street or highway, the widget shows the name or designation of the current street (road) with a blue arrow.

![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

When maneuvering, the widget shows the scheme of the maneuver and the name (designation) of the street (road) where to turn.

![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_appearance_rem,map_widget_top_text"/> <br /> <Translate ios="true" ids="ios_button_seq"/> always active |
| On Click | - | 

## Approach POIs/Favorites

Approach POIs/Favorites/Waypoints  widget is combined with [Street name](#street-name) and displays approaching and passing Points of interest, Waypoints of followed track, Favorites along the route. It displays name, icon of the point and 2 distances: route distance and deviation distance. **Route distance** (top) displayes how much distance needs to be covered by following route, **deviation distance** is a straight distance from the closest route point to the point itself.

**Android**:

![Street name POIs widget_android](@site/static/img/widgets/street_name_poi_widget_android.png)

**iOS**: in addition to the distance from the nearest route point, the side (left or right) of the route where point is located is also shown. 

![Street name POIs widget_ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

| |
|------------|------------|
| Enable  | <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/> <br /> <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu"/> → Start navigation → pencil button |

## Read Next

[Map markers widget](../widgets/markers.md)
