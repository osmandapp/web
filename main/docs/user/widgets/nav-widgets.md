---
sidebar_position: 4
title:  Navigational Widgets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

Navigational widgets are enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lane information, max speed, approaching alerts, POIs, and waypoints.

![Navigational widgets all](@site/static/img/widgets/navigational_widgets_all.png)


## Active and Passive Navigation {#active-and-passive-navigation}

Navigational widgets in OsmAnd are designed to enhance both **active** and **passive** navigation modes. These widgets provide valuable information such as route directions, road details, and speed limits, depending on the selected **navigation profile**.  

#### Active Navigation {#active-navigation}

- **Requirements:**  
  - Set a **destination**.  
  - Calculate the **route** using the *Directions* feature.  
  - **Start** navigation (voice guidance is optional).
  - Available only when moving along the route.

- **Supported widgets:**  
  - All **navigational widgets** are available.  

- **Key Benefits:**  
  - Provides **turn-by-turn instructions**, **lane guidance**, and **ETA**.  
  - Ensures accurate and dynamic updates during the trip.  

#### Passive Navigation {#passive-navigation}

- **How it works:**  
  - No destination is needed.  
  - Works automatically when you select a **navigational profile** (e.g., *Driving*, *Cycling*).  

- **Functionality:**  
  - Attempts to determine the road you are following using GPS data.  
  - Displays **basic road information**, such as [street name](#street-name), [lane information](#lanes), [maximum speed](#speed-limit).

- **Limitations:**  
  - Some advanced features may not function correctly without a set destination.  
  - The information provided may not always be **precise**, especially on complex road networks.

> **NOTE.** *Keep in mind that the **Browse Map** profile does not support navigational widgets in either mode. Switch to a relevant **navigation profile** to enable these features.*


<!--
Navigational widgets are mostly used with **active** or **passive** navigation with navigational profiles, so they are unavailable in the **Browse Map** profile.

**Active** navigation requires setting a destination, calculating the route (Directions), and starting navigation (Go), not necessarily with voice guidance. All navigational widgets support that type of navigation.

**Passive** navigation doesn't require a destination point set and works automatically once you switch to any navigational profile, for example, 'Driving'. In that case, the application will try to determine which road you are following and display extra information about it i.e. name, lane info, max speed available. Please note that this approach is unreliable and doesn't support all features.
-->

## Elevation Widget {#elevation-widget}

<InfoAndroidOnly/>  

:::note
  
<ProFeature/>  This widget you can use only with Pro feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::

The Elevation widget shows a graph with the elevation and slope of your navigation route and your current location on this graph with current altitude and slope. The graph is plotted on two axes. The X-axis is the distance of your route. The Y-axis is the altitude, the value depends on the relief, and the slope is displayed as a percentage.  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,bottom_widgets_panel,available_widgets,elevation_profile"/>*

![Elevation widget](@site/blog/2021-12-10-android-4-1/elevation_widget.png)


#### Interactions With the Graph {#interactions-with-the-graph}

- *Zoom in/out*. By default, the graph shows the route from the current location up to 10 km ahead. You can use [two-finger movement](../map/interact-with-map#gestures) to zoom in and out for a more detailed view of altitude changes on your route. You can also move the graph to the right, forward on the route, and backward to the current location.  
- *Place a point on the graph*. If you want to see the altitude and degree value at a particular point ahead on your route, you can tap anywhere on the graph and a pointer with the values will appear.  


#### What's In {#whats-in}

When you select a route and press the **Start** button, the map opens with your current location, the route, and the widget at the bottom of the screen. Widget has the graph and information about *Uphill*, *Downhill*, *Grade*, distance, altitude, and slope angle. You can select the *optimal scale* and see all possible obstacles on your route.  

- All values are indicated either for the whole route or only for the selected interval by scaling the graph.
- Read about the [license for the DEM data](../plugins/topography.md#license-for-dem-data-used-by-osmand-for-terrain-detection) used by OsmAnd to determine elevation.

|  |
|:------------|
| ***Location Pin*** |
| Your ***Current Location*** on the graph includes a location icon, elevation, and slope percentage value. The right side of the widget contains the highest elevation and gradient, the average value for them, and the lowest value on the selected section of the route visible on the graph. |
| ![point](@site/static/img/widgets/sch_1-1.png)|
| ***Additional information*** |
| The right side of the widget contains data about the highest altitude and slope, the average value for both, and the lowest altitude and slope on the selected route section visible on the graph. |
|  ![data](@site/static/img/widgets/sch_1-2.png)|
|The ***Uphill*** and ***Downhill*** values are the sums of the distances from your location point to the end of the visible graph. If there is no location point on the graph, then it is the sum of the entire visible graph on the screen (this can happen when you change the scale and the location goes outside the graph).|
| **Uphill** – shows the sum of all distances with increasing altitude from your location point to the end of the visible graph or for the selected section of the route without the location point visible on the screen. |
| ![uphill scheme](@site/static/img/widgets/sch_uphill_1.png) ![uphill scheme](@site/static/img/widgets/sch_uphill_2.png)|  
| **Downhill** – shows the sum of all distances with decreasing altitude from your location point to the end of the visible graph or for the selected section of the route without the location point visible on the screen.|
| ![downhill scheme](@site/static/img/widgets/sch_downhill_1.png) ![downhill scheme](@site/static/img/widgets/sch_downhill_2.png)|  
|***Grade*** is the ratio of the path to the horizontal, where zero indicates horizontality and the number of degrees indicates a higher or steeper degree of slope.|
| **Grade** – shows the maximum road slope in percent from your location point to the end of the visible graph or for the selected section of the route without the location point visible on the screen. |
|![grade scheme](@site/static/img/widgets/sch_grade_1.png) ![grade scheme](@site/static/img/widgets/sch_grade_2.png)|


## Bearing Widget   {#bearing-widget--}
  
Bearing is the direction to a target outside your vehicle, such as a destination or point of origin. A bearing can be *Relative* (according to your course) or, *Magnetic* (according to the compass). For example, a magnetic bearing of 180° is the direction to the south, and a relative bearing of 180° is directly behind you. The cardinal points are the four main directions of the compass. They are North (*N* - 0° or 360°), East (*E* - 90°), South (*S* - 180°), and west (*W* - 270°).  

![Trip recording widget](@site/static/img/widgets/bearing.png)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Trip recording widget](@site/static/img/widgets/bearing_widget.png) ![Trip recording widget](@site/static/img/widgets/bearing_widget_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Trip recording widget](@site/static/img/widgets/bearing_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="shared_string_bearing"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>  → Choose a panel → Add widget →  <Translate ios="true" ids="shared_string_bearing"/>* |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | **Android:** You can change the data display format for angular units: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,angular_measeurement"/>* |
|  | **iOS:** You can change the data display format for angular units: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,angular_units"/>* |  


#### How It Works {#how-it-works}

To display the bearing, a **target point** must be selected. If a **destination** point (or the **first intermediate point**, if there is one) is selected for navigation, it will be used as the target point. Otherwise, the **topmost selected marker** will be used.  

- [Relative bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Relative) is the angle between your forward movement direction and the target point. The **forward movement direction** is either the **direction of your movement** obtained from the GPS sensors or if you are standing **where you have pointed your device** (i.e. the orientation of your device according to its magnetic compass). Example: An object with a relative bearing of 0° is directly in front of you and an object with a relative bearing of 180° is directly behind you. The **relative bearing** is the angle between your forward direction and the target point.

- [Magnetic bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Absolute) is the clockwise (horizontal) angle between the magnetic north and the target point observed from your location. You need to follow this magnetic compass value to reach your target. Example: If the **magnetic bearing** is shown as 0° M, you need to move strictly towards the magnetic north to reach the target point.

- [True bearing](https://en.wikipedia.org/wiki/Bearing_(angle)#Usages) is expressed as the horizontal angle between the geographic meridian and a line on Earth. Specifically, **true point bearing** is the angle measured in degrees clockwise from the True North line. OsmAnd software will show you the true bearing and heading in our user-friendly interface, making it easy for you to make the right decision early on.

### Navigation Along the Rhumb Line {#navigation-along-the-rhumb-line}

- **Relative bearing**. If you stick to a relative bearing of 0 degrees and move forward, you will arrive at the destination point, but not by the shortest route ( [Rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) ).
- **Magnetic bearing**. If you align the compass on your boat/vehicle with the widget value and head forward, you will arrive at your destination, but not by the shortest route ( [Rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) ).

<!--![Relative Magnetic bearing widget](@site/static/img/widgets/relative_magnetic_bearing_widget.png)-->

<!-- By tapping: Changes between  Relative bearing or Magnetic bearing (with "M") -->


## Navigation Points {#navigation-points}

<!--
*Navigation point* widgets group is enabled during navigation to display information such as distance, arrival or left time, next turns, bearing, current street name, lanes information, max speed, approaching alerts, POIs, waypoints.
-->

The *Navigation point* widgets group shows the remaining distance to your destination, the intermediate point, the arrival time at the intermediate point or travel time for the calculated route, and the estimated time of arrival.

### Route Information {#route-information}

<InfoAndroidOnly />

![Destination widget](@site/static/img/widgets/route_information_widget.png)  

The *Route Information* widget provides real-time data about the ongoing navigation route and a quick way [to manage an active route](../navigation/setup/route-navigation.md#start--stop-navigation). It helps to keep track of key route details and allows you to stop or resume the current navigation session with minimal interaction.

**Displayed information:**

- **Estimated arrival time (ETA)**. Shows the expected arrival time at the final destination.
- **Remaining travel time**. Displays the estimated time left to reach the destination.
- **Distance to destination**. Indicates the total remaining distance to the final destination and distances to intermediate points.

**Settings menu**:

- Select a **Default View** to prioritize one of the following values: *Estimated arrival time*, *Time to go*, *Distance*.
- In **Display Priority**, select between *Destination first (default)* or *Intermediate first* to prioritize the most relevant route information.

> NOTE: The widget is visible only during navigation.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget →<Translate android="true" ids="map_widget_distance_to_destination"/>* |
| By tapping | Tap the button with arrow to open [Start/Stop Navigation panel](../navigation/setup/route-navigation.md#start--stop-navigation) |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats"/>* |

### Distance to Destination {#distance-to-destination}

![Destination widget](@site/static/img/widgets/destination_widget.png)  

The widget displays the distance remaining to the last destination point when following a calculated route.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_distance_to_destination"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_distance_to_destination"/>* |
| By tapping | Moves the map to the destination point. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |

### Distance to Intermediate {#distance-to-intermediate}

![Intermediate destination widget](@site/static/img/widgets/intermediate_destination_widget.png)

The widget shows the distance to the first intermediate point along the calculated route. After passing intermediate points, the space will be updated to the next intermediate point. If there are no intermediate points, the widget is not displayed.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → *<Translate android="true" ids="map_widget_distance_to_intermediate"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_distance_to_intermediate"/>*|
| By tapping | **One intermediate point** - move the map to the intermediate point. <br /> **Two or more intermediate points** - opens Destinations list menu. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |

### Time to Intermediate {#time-to-intermediate}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_android.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Arrival time Time to go widget](@site/static/img/widgets/arrival_time_widget_ios.png)  ![Arrival time Time to go widget](@site/static/img/widgets/time_to_go_widget_ios.png)  

</TabItem>

</Tabs>  

The widget shows the *Arrival time* or *Time to go* to the first intermediate point. During navigation, the time is constantly updated, and as soon as an intermediate point is passed, the time will be updated to the next waypoint. For example, if you stop navigation, the *Time to go* will remain unchanged and the *Arrival Time* will be equal to the *Time to go* plus the *Current Time*.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget →  <Translate android="true" ids="map_widget_time_to_intermediate"/>* |
| By tapping | Changes between *Arrival time* to *Time to go* and the reverse. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Time to Destination {#time-to-destination}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Intermediate Arrival time Time widget](@site/static/img/widgets/intermediate_arrival_time_and_time_widget.png)

</TabItem>

</Tabs>

The widget displays the *Arrival time* or *Time to go* to the last destination point. The time is constantly updated during navigation and is equal to the route time from your current location.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_time_to_destination"/>* |
| By tapping | Changes between *Arrival time* to *Time to go* and the reverse. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |  


## Speed Limit {#speed-limit}

![Speed limit widget](@site/static/img/widgets/speed_limit_widget_2.png)

The *Speed Limit* widget displays the current speed limit based on the map data for your route.

- Data is taken from [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:maxspeed).
- Widget works in passive and active navigation modes.
- If speed limit data is unavailable for a specific road or area, *the widget will not appear*.

> NOTE: Ensure your [maps are up-to-date](../personal/maps-resources.md#updates) and that you have downloaded all necessary regional data to access the latest speed limit information.

| |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_max_speed"/>* |
|  |  **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_max_speed"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Route Maneuvers {#route-maneuvers}

![Next turns widget](@site/static/img/widgets/next_turns_widget.png)

This set of navigational widgets is activated during navigation and displays information about the distance to the next maneuver.

| | |
|:------------|:------------|
| Enable | **Android:** *Menu → Configure screen → Left / Right panel → Add widget → Route Maneuvers → Next turn, Next turn (small), Second next turn*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Left / Right panel → Add widget → Route Maneuvers → Next turn, Next turn (small), Second next turn* |
| By tapping | If [voice prompts](../navigation/guidance/voice-navigation.md) are enabled, the next maneuver and the distance to it are pronounced. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Next Turn {#next-turn}

![Next turns widget](@site/static/img/widgets/next_turns_widgets_andr.png)

The *Route Maneuvers* widgets contain information about:

- **Next turn** - the next turn with a large arrow representing the maneuver and with data about the distance to it.
- **Next turn (small)** - the next turn with a small arrow representing the maneuver and with distance data next to the arrow.
- **Second next turn** - the next turn after the first turn, which is activated if it is within approach distance.

| | |
|:------------|:------------|
| Enable      | **Android:** *Menu → Configure screen → Left / Right panel → Add widget → Next turn, Next turn (small), Second next turn*  |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Left / Right panel → Add widget → Next turn, Next turn (small), Second next turn* |
| By tapping  | If [voice prompts](../navigation/guidance/voice-navigation.md) are enabled, the next maneuver and the distance to it are pronounced. |
| Long tap    | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Color Prompts for Next Turn {#color-prompts-for-next-turn}

This table shows the approximate time until the prompts are activated and the corresponding color indication of the arrows to perform the maneuver. For more information, refer to the [technical documentation](../../technical/algorithms/voice-prompt-triggering.md#trigger-table) or in the article [Voice prompts](../navigation/guidance/voice-navigation.md).

| Color     | ~ Trigger Time | Distance   | Prompt type     |
| :-------- | :------------- | :--------- | :-------------- |
| 🟢 Green  | 5 seconds      | Close by   | Turn now        |
| 🟡 Yellow | 20 seconds     | Approaching| Turn in `x` m   |
| ⚪ Grey   | > 100 seconds  | Distant    | Prepare to turn |


## Lanes {#lanes}

![Lanes widgets](@site/static/img/widgets/lanes_widget.png)

The **Lanes** widget highlights the current lane when navigation is active and displays the lane layout for the actual road when navigation is passive. The data is taken from [OpenStreetMap project](https://wiki.openstreetmap.org/wiki/Key:turn).

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="route_guidance"/> → Add widget → <Translate android="true" ids="show_lanes"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → <Translate android="true" ids="show_lanes"/>* |
| By tapping | No changes |

### Color Prompts for Lanes {#color-prompts-for-lanes}

Displays a widget by approach time settings. Lane's color is associated with [voice prompts](../navigation/guidance/voice-navigation.md) and time remaining to perform the maneuver.

| Color     | ~ Trigger Time | Distance    | Prompt type |
| :-------- | :------------- | :---------- | :---------- |
| 🟢 Green  | 5 seconds      | Close by    | [Turn now](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |
| 🟡 Yellow | 20 seconds     | Approaching | [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-behavior) |


## Route Guidance {#route-guidance}

<InfoAndroidOnly />

![route guidence widget](@site/static/img/widgets/route_guidence_widgets_andr.png)

Provides real-time route guidance, including distance to the next turn, road name, current street name, and lane information. Widgets are active during navigation.

The *Route Guidance* widgets contain information about:

- [Lanes](#lanes) - shows the current location of road lanes and highlights the ones you should drive on.
- **Next turn** - the next turn with a large arrow representing the maneuver and with data about the distance to it.
- **Second next turn** is the next turn after the first turn, which is activated if it is within approach distance.

| | |
|:------------|:------------|
| Enable      | **Android:** *Menu → Configure screen → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → Lane, Next turn, Second next turn*  |
| By tapping  | **Next turn**: If [voice prompts](../navigation/guidance/voice-navigation.md) are enabled, the next maneuver and the distance to it are pronounced. <br/> **Lane**: No changes. |
| Long tap    | **Next turn**: Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) <br/> **Lane**: No changes. |


## Alert Widget {#alert-widget}

![Alert information widgets](@site/static/img/widgets/alert_information_widget.png)

The **Alert widget** combines several types of alerts that are displayed in the lower left corner while you are navigating.  

- You have the ability to turn alerts such as *<Translate android="true" ids="traffic_warning_speed_limit"/>, <Translate android="true" ids="show_traffic_warnings"/>, <Translate android="true" ids="show_pedestrian_warnings"/>, <Translate android="true" ids="show_cameras"/>,* and *<Translate android="true" ids="show_tunnels"/>* on and off. Other alerts are active by default if the widget is enabled.  

- For the *Speed Limit* alert type, you can adjust the <Translate android="true" ids="speed_limit_exceed"/>](../navigation/guidance/voice-navigation.md#speed-limit) value in the voice prompt settings to better match the vehicle speed and GPS speed.  

- Most alerts are displayed on the screen and announced by voice prompt for 15 seconds, as well as the trigger time for passing a Waypoint, Favorite Point, or POI. Read more [here](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

| | |
|:------------|:------------|
| Enable | **<Translate android="true" ids="android_button_seq"/>** *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,screen_alerts"/>* |
|  | **<Translate ios="true" ids="ios_button_seq"/>** *<Translate ios="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,screen_alerts"/>* |


### Alert Types {#alert-types}

Alert types have a different visual design, which depends on the **<Translate android="true" ids="driving_region"/>**  and can be configured through  *<Translate android="true" ids="shared_string_settings"/> → <Translate android="true" ids="general_settings_2"/>*. OsmAnd does not aim to represent 100% identical road signs but points out some similarities.

| | | |
|:------------|:------------|:------------|
| Name | Description | Icon |
| *<Translate android="true" ids="show_traffic_warnings"/>* | [Traffic calming](https://en.wikipedia.org/wiki/Traffic_calming) uses physical design and other measures to improve safety for motorists, pedestrians and cyclists. | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_traffic_calming.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_traffic_calming_us.png)|
| *<Translate android="true" ids="show_pedestrian_warnings"/>* | [A pedestrian crossing](https://en.wikipedia.org/wiki/Pedestrian_crossing) (primarily British English) or crosswalk is a place designated for pedestrians to cross a road, street, or avenue. OsmAnd shows the alert of the uncontrolled pedestrian crossing.  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_pedestrian.png)  ![Alert traffic calming us widgets](@site/static/img/widgets/warnings_pedestrian_us.png) |
| *<Translate android="true" ids="traffic_warning_speed_limit"/>* | In most countries, the [Road speed limits](https://en.wikipedia.org/wiki/Speed_limit) set the legal maximum, middle, or minimum speed at which road vehicles may travel on a given stretch of road. In OsmAnd, the alert is shown when you exceed the speed. You can set parameters of speed exceeding (0, 5, 10.. km/h). ![Alert ex_speed widgets](@site/static/img/widgets/ex_warning_speed.png)  | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) ![Alert speed_limit_ca widgets](@site/static/img/widgets/warnings_speed_limit_ca.png) ![Alert speed_limit_us widgets](@site/static/img/widgets/warnings_speed_limit_us.png)|
| *<Translate android="true" ids="show_tunnels"/>* | A tunnel is an underground passageway, passing under a mountain, river, or a congested urban area. In OsmAnd, the alert *Tunnels* have information about tunnel length. If you are in a tunnel, it shows the distance to the end of the tunnel.   ![Alert ex_tunnel widgets](@site/static/img/widgets/ex_warning_tunnel.png)  | ![Alert warnings_tunnel widgets](@site/static/img/widgets/warnings_tunnel.png)  ![Alert warnings_tunnel_us widgets](@site/static/img/widgets/warnings_tunnel_us.png) |
| *<Translate android="true" ids="show_cameras"/>* | [Traffic enforcement cameras](https://en.wikipedia.org/wiki/Traffic_enforcement_camera) and [speed cameras](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera) record traffic offenses, including speeding, running red lights, and other types of illegal behavior. <br />**NOTE:** Speed camera alerts are prohibited or illegal in some countries. To completely [remove speed cameras](../personal/global-settings.md#legal) from OsmAnd, go to main *<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_legal,uninstall_speed_cameras"/>*  | ![Alert traffic calming widgets](@site/static/img/widgets/warnings_speed_camera.png)   |
| *<Translate android="true" ids="traffic_warning_stop"/>* | [A stop sign](https://en.wikipedia.org/wiki/Stop_sign) is a traffic sign designed to notify drivers that they must come to a complete stop and make sure the intersection is safely clear of vehicles and pedestrians before continuing past the sign.  | ![Alert stop widgets](@site/static/img/widgets/warnings_stop.png) |
| *<Translate android="true" ids="show_railway_warnings"/>* |This warning means that there is a [railway crossing](https://en.wikipedia.org/wiki/Crossbuck) ahead. | ![Alert warnings_railways widgets](@site/static/img/widgets/warnings_railways.png) ![Alert warnings_railways_ca widgets](@site/static/img/widgets/warnings_railways_ca.png)  ![Alert warnings_railways_us widgets](@site/static/img/widgets/warnings_railways_us.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* |This warning indicates that border control is ahead.| ![Alert border control widgets](@site/static/img/widgets/warnings_border_control.png)  |
| *<Translate android="true" ids="traffic_warning_border_control"/>* | [Hazard symbols or warning symbols](https://en.wikipedia.org/wiki/Hazard_symbol) are recognizable symbols designed to warn about hazardous materials, locations, or objects, including electric currents, poisons, and radioactivity. | ![Alert warnings_hazard widgets](@site/static/img/widgets/warnings_hazard.png)  ![Alert warnings_hazard_us widgets](@site/static/img/widgets/warnings_hazard_us.png) |
| *<Translate android="true" ids="traffic_warning_payment"/>* | This warning indicates that a toll booth for a toll road is ahead.   ![Alert toll_booth widgets](@site/static/img/widgets/ex_toll_booth.png) | ![Alert speed_limit widgets](@site/static/img/widgets/warnings_limit.png) |


## Street Name {#street-name}

The Street name widget shows **the current street name** with a straight arrow, or **the next street name** with the maneuver to be performed. The street name usually consists of a highway shield, a [name](https://wiki.openstreetmap.org/wiki/Key:name), a [ref](https://wiki.openstreetmap.org/wiki/Key:ref), an [internation ref](https://wiki.openstreetmap.org/wiki/Key:int_ref), and a [destination](https://wiki.openstreetmap.org/wiki/Key:destination). Switching between the current street name and the next street name happens when you approach the place where you want to perform the maneuver (~20 seconds), similar to the voice prompt [Turn in X m](../../technical/algorithms/voice-prompt-triggering.md#trigger-table).

- When driving along a street or highway, the widget shows the name or designation of the current street (road) with a blue arrow.

  ![Street name POIs widget_2](@site/static/img/widgets/street_name_widget_2.png)

- When you change direction, the widget shows the scheme of the maneuver and the name (designation) of the street (road) to which you need to turn.  

  ![Street name POIs widget](@site/static/img/widgets/street_name_widget.png)

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → <Translate android="true" ids="map_widget_top_text"/>* |
|   | **iOS:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → Add widget → <Translate android="true" ids="map_widget_top_text"/>* |
| By tapping | No changes |


## Approach POIs/Favorites {#approach-poisfavorites}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Approach POIs/Favorites android](@site/static/img/widgets/street_name_poi_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Approach POIs/Favorites ios](@site/static/img/widgets/street_name_poi_widget_ios.png)

</TabItem>

</Tabs>

**Approach POIs/Favorites/Waypoints** widget is combined with [Street name](#street-name) and displays approaching and passing Points of interest, Waypoints of followed track, and Favorites along the route.  

It displays the **name**, the **icon of the point**, and 2 **distances**:

- **Route distance** (top) displays how much distance needs to be covered by the following route.
- **Deviation distance** is a straight distance from the closest route point to the point itself.

**iOS** - In addition to the distance to the nearest waypoint, the side (left or right) of the route on which the waypoint is located is also displayed.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,get_directions,shared_string_settings,show_along_the_route,points_of_interests"/>, <Translate android="true" ids="shared_string_my_favorites"/>, <Translate android="true" ids="way_alarms"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu"/> → Start navigation → pencil button* |
| By tapping | No changes |


## Related Articles {#related-articles}

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *This article was last updated in April 2025*
