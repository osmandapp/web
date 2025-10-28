--- 
sidebar_position: 3
title:  Informational Widgets
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

Informational widgets provide you with quick access to important data. This can be data on speed, weather, parking position, data from external sensors, and much more. Widgets can be configured according to your specific requirements, enabling their visibility on the application screen or disabling them if necessary.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## Altitude Widgets   {#altitude-widgets}

Altitude widgets display the height above the sea level of the current geolocation and the elevation of the map center.  


### Altitude: Current Location   {#altitude-current-location}
  
:::note  Download World altitude correction
On some Android devices, the altitude can display inaccurately. To solve this problem, download a map with altitude correction.

- Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.
- For more details, visit [Maps & Resources](../personal/maps-resources.md#downloads-menu).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Altitude widget Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Altitude widget iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |  


### Elevation: Map Center {#elevation-map-center}

:::info Paid feature
&nbsp;<ProFeature/> To get access to use the *Elevation: map center* widget, subscribe to OsmAnd Pro for [Android](../purchases/android.md#pro-features) or [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Elevation widget iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

You can use the widget to find out the elevation of the current map center above sea level. A [Terrain map (Hillshade and Slope)](../plugins/topography.md#download-maps) of the required area is needed to display information in the **Elevation: map center widget**.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |


## Current Time {#current-time}

![Current time widget](@site/static/img/widgets/current_time_widget.png)

This widget displays the current time taken from your device.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_plain_time"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | Device settings configure Time & Format. |


## Current Speed {#current-speed}

![Speed widget](@site/static/img/widgets/current_speed_widget.png)  

The widget shows the current speed detected by the GPS sensor.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_current_speed"/>* |
| By tapping  | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Average Speed {#average-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Average speed widget Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

The **Average Speed** widget calculates and displays your average speed over a selected time interval without requiring navigation or track recording. It is useful for monitoring speed compliance on highways or tracking average speed over the last few minutes of cycling.

1. ***Configuring the widget.***  
   To adjust settings, tap the **Settings** button (*Android*) or the **widget field** (*iOS*). Available options include:

2. ***Time interval.***

   - The average speed is calculated based on the selected time interval, which can range from **15 seconds to 60 minutes**.  

   - The calculation is based on GPS data using the formula:  
   `Average Speed = AVERAGE(GPS_LOCATION.speed)`.

3. ***Take stops into account.***

   **Enabled** — If the recorded speed is below 1 unit per hour, it is ignored, preventing unnecessary drops in average speed when stopping at traffic lights or taking short breaks.  

   **Disabled** — Stops are included in the calculation, meaning long pauses will reduce the overall average speed.

4. ***Reset average speed.***
   You can reset the average speed calculation in two ways:

   - Long tap the widget to open the [Context menu](../widgets/configure-screen.md#widget-context-menu), and select *Reset average speed*.
   - Open the *widget settings* via the [Configure Screen menu](../widgets/configure-screen.md#widget-settings) and select the reset option.

After reset, the average speed is recalculated from the new GPS data. This feature is useful for real-time speed monitoring, such as tracking speed in areas with **average speed enforcement cameras**.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Average speed](@site/static/img/widgets/average_speed_widget_4.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_average_speed"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). <br/> Can be used to reset average speed. |


## Glide Ratio {#glide-ratio}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/static/img/widgets/glide_ratio_3.png)|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Glide ratio](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

The [simple](../widgets/configure-screen.md#widget-panels) *Glide Ratio* widgets provides valuable glide ratio information to help make informed decisions when planning air routes. The *Glide Ratio* widget in OsmAnd helps you evaluate the efficiency of your descent or ascent when navigating to a specific location ([marker](../personal/markers.md) position on the map). It calculates the glide ratio as the ratio of distance to the difference in altitude between your current position and your intended destination. You can read more about this [here](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Widgets use:**

- *Planning soaring flights.* For soaring pilots, the *Glide ratio to the target* widget becomes an indispensable tool when planning and executing soaring flights. Pilots can estimate how far they can fly to their target given the current conditions and the required glide ratio.
- *Optimize climbs and descents.* The average glide ratio allows pilots to optimize climbs and descents based on current conditions. Pilots can choose the optimal timing for climbs to maximize flight time, or for descents to reach a target point.
- *Reacting to changing conditions.* The widget provides continuous glide ratio updates, allowing pilots to react instantly to changes in atmospheric conditions or routes. They can adjust their flight plan to ensure safety and efficiency.
- *Maximum use of horizontal distance.* Knowing the glide ratio allows pilots to maximize the use of horizontal distance to move to the target, which is especially important when planning long flights.
- *Risk reduction*. The *Glide ratio to the target* widget helps pilots avoid situations where reaching the target becomes impossible due to insufficient glide ratio. This helps to reduce risks and improve flight safety.


**Positive and Negative Values:**

- **Positive values** indicate that your destination is at a lower altitude than your current position, requiring descent.
- **Negative values** indicate that your destination is at a higher altitude, necessitating ascent. For example, "-90:1" means that after covering a distance of 90 kilometers, you need to ascend by 1 kilometer to reach your destination.


**Rounding/Formatting:**

- Value **≤ 0.1**:  
  - "0.05" is displayed as "0".
- Value **> 0.1 and < 100**:  
  - for example, "50.7643" is displayed as "50.8:1".
- Value **> 100:**  
  - "102.35" is displayed as "102:1."


### Glide Ratio to Target {#glide-ratio-to-target}

- **Glide ratio to target** shows the exact glide ratio required to reach the target point.
- **Target elevation** shows the target point elevation. The [Map marker](../personal/markers.md) should be used as the target point.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → Glide ratio* |
| By tapping | Changes *Glide ratio to target* or *Target elevation*  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Average Glide Ratio {#average-glide-ratio}

- **Average glide ratio** shows the average glide ratio for a specified time interval.
- **Average vertical speed** indicates the rate at which an object ascends or descends over a while. Only the first and last points of the time interval are considered for evaluation. You can set the time interval for this widget from 15 seconds to 60 minutes. You should use the [Map marker](../personal/markers.md) as the target point.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → Glide ratio* |
| By tapping | Changes *Average glide ratio* or *Average vertical speed*  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Battery Level {#battery-level}

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)  

The **Battery Level** widget displays your device's battery percentage right on the map screen and updates automatically at least once a minute.

- **iOS 17 and later** — Due to **privacy restrictions**, battery level data is only available in 5% increments (e.g., 35%, 60%, or 85%). This is a system limitation imposed by Apple.

- **Android** devices — The widget displays the exact battery percentage as reported by the system, without rounding.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_battery"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Coordinates Widget {#coordinates-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

OsmAnd offers two types of coordinate widgets:

- **Coordinates: map center** - shows the geographic coordinates of the current map center.
- **Coordinates: current location** - shows the geographic coordinates of current geolocation.

Coordinates widgets are displayed at the top of the screen. Icons with a green background show the latitude and longitude of the point in the center of the visible part of the map, and those with a blue background show the coordinates of your current location. Information about supported *Coordinates formats* can be found in the *[Search coordinates article](../search/search-coordinates.md#coordinate-format)*.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| By tapping | Copies the coordinates to the clipboard. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) or <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## GPS Info   {#gps-info}

<InfoAndroidOnly />

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

The GPS (Global Positioning System) information widget shows the number of satellites that the device is currently detecting and using. You can use it to check the GPS status in case of a poor signal.  

You can reset the current GPS cache through:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_gps_info"/>* |  
| By tapping | Opens the GPS status menu with third-party tools to configure the onboard GPS device. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Sun Position {#sun-position}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Sunset and sunrise widgets](@site/static/img/widgets/sun_position.png) ![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_4_ios.png) ![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_3_ios.png)

</TabItem>

</Tabs>  

Sun position widgets show the next sunrise and sunset times for the center of the map. When tapped, they display the time remaining until the expected sunset or sunrise. In both cases, the time is based on the configured time of your device.

- **<Translate ios="true" ids="map_widget_sun_position"/>**. <Translate ios="true" ids="map_widget_sun_position_desc"/>
- **<Translate ios="true" ids="map_widget_sunrise"/>**. <Translate ios="true" ids="map_widget_sunrise_desc"/>
- **<Translate ios="true" ids="map_widget_sunset"/>**. <Translate ios="true" ids="map_widget_sunset_desc"/>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| By tapping | Switch between the remaining time and the time of the next sunrise/sunset. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Radius Ruler {#radius-ruler}

:::note  
You can read a more detailed description here: **[Radius ruler and Ruler](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Radius-ruler screen](@site/static/img/widgets/radius_ruler_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_1.png').default} alt="Radius-ruler"/></td>
        <td><img src={require('@site/static/img/widgets/radius_ruler_widget_ios_2.png').default} alt="Radius-ruler"/></td>
    </tr>
</table>

</TabItem>

</Tabs>

The Radius Ruler widget shows the distance between your location and the center point of the Radius Ruler. The radius of the first circle is equal to [the map scale](../widgets/radius-ruler.md#ruler).

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| By tapping | Changes the state of the widget between black scale, grayscale, and invisible modes. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Speedometer {#speedometer}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Speedometer](@site/static/img/widgets/speedometer_1_andr.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Speedometer](@site/static/img/widgets/speedometer_1_ios.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Speedometer widget** is a graphical display of the current vehicle speed based on *data received from the GPS*. It allows you to monitor in real-time the compliance between your speed and the allowable speed limit. The allowable speed limit is provided by [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed) for a particular road section and OsmAnd [Speed Limit Tolerance](../navigation/guidance/voice-navigation.md#speed-limit) setting.  

- In the *Speedometer settings*, you can select the size (**Height**) of the widget on the application screen as, *Small*, *Medium* or *Large*.
- You can specify when to receive a **Speed limit warning,** selecting *Always* or *When exceeded*.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/widgets/speedometer_4_andr.png').default} alt="Speedometer"/></td>
        <td><img src={require('@site/static/img/widgets/speedometer_4_ios.png').default} alt="Speedometer"/></td>
    </tr>
</table>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_other,shared_string_speedometer"/>* |
|        | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,other_location"/>* *→ Speedometer* |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,default_speed_system"/>*  |


## Plugin Widgets {#plugin-widgets}

These widgets are enabled and work in combination with their corresponding plugins.


### Trip Recording Widgets   {#trip-recording-widgets}

:::note  
You can read a more detailed description here: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/widget_trip_recording-_rec_ios.png)

</TabItem>

</Tabs>

Trip recording widgets refer to [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md#widgets). You can use widgets to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill*.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_monitoring"/>* |
| By tapping | Starts/Stop track recording or View the graph. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### External Sensors Widgets {#external-sensors-widgets}

:::note
To add External Sensors widgets to the map screen, enable the OsmAnd [External Sensors plugin](../plugins/external-sensors.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![External sensor widgets Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widgets refer to [External sensors plugin](../plugins/external-sensors.md#widgets). You can use them to view brief information from your external sensors, such as: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android only*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** and **<Translate android="true" ids="external_device_characteristic_temperature"/>**. You can also select the **battery level** of connected BLE sensors to be displayed directly in the widget.  

- To add widget — [enable](../plugins/index.md#enable--disable) OsmAnd External Sensors plugin.

- To add sensors, select one of the options:
  - Go to *Menu → Plugins → External Sensors → Settings → Pair new sensor*.
  - Go to *Menu → Configure screen → Choose a panel → Add widget → External Sensors → Choose sensor → Settings → Pair new sensor*.

- Add widgets even if there is no external sensor connected.

- **All added widgets are visible** even if no external sensor is connected.

- Use the [Trip recording plugin](../plugins/trip-recording.md#recording-settings) to record sensor data.

- Read about how to choose which sensor (of the same type) to show in the widget [here](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| By tapping | No changes (*Android*) / Switches the mode between Sensor data and Battery level (*iOS*). |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Vehicle Metrics Widgets {#vehicle-metrics-widgets}


:::note
To add Vehicle Metrics Widgets to the map screen, enable the OsmAnd [Vehicle Metrics plugin](../plugins/vehicle-metrics.md).
:::


<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Vehicle metrics widgets Android](@site/static/img/widgets/vehicle_metrics_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Vehicle metrics widgets Android](@site/static/img/widgets/vehicle_metrics_ios.png)

</TabItem>

</Tabs>


The widgets belong to the [Vehicle Metrics plugin](../plugins/vehicle-metrics.md#widgets). You can use them to view information from a connected OBD-II scanner, such as (*14 metrics*): **Intake Temperature**,&nbsp; **Ambient Temperature**,&nbsp; **Coolant Temperature**,&nbsp; **Engine Oil Temperature**,&nbsp; **Engine Speed** (*free*),&nbsp; **Engine Runtime**,&nbsp; **Calculated Engine Load**,&nbsp; **Fuel Pressure**,&nbsp; **Fuel Consumption**,&nbsp; **Remaining Fuel**,&nbsp; **Battery Level**,&nbsp; **Adapter Voltage**,&nbsp; **Vehicle Speed** (*free*), and **Throttle Position**.  

- To add vehicle metrics widgets to the map screen, [enable](../plugins/index.md#enable--disable) **Vehicle Metrics plugin**.
- You can add widgets even if no OBD-II scanner is connected.
- All added widgets are visible whether an OBD-II scanner is connected or not.
- To edit a widget, tap the widget added to the panel, then tap *Settings*, or directly tap the *Settings icon* in the widget field.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget →  <Translate android="true" ids="obd_widget_group"/>* |
|  | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget →  <Translate ios="true" ids="obd_plugin_name"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Weather Widgets {#weather-widgets}

:::note
To add Weather widgets to the map screen, enable the OsmAnd [Weather plugin](../plugins/weather.md).
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Weather widget Android](@site/static/img/widgets/weather_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Weather widget iOS](@site/static/img/widgets/weather_widgets_ios.png)

</TabItem>

</Tabs>  

Weather widgets display current weather information for a central point on the map. They are automatically enabled on the screen when viewed with the plugin (*Menu → Weather*), and you can choose which ones to put on the home screen for everyday use (*Menu → Customize Screen*). You can read more about this in the article [Weather plugin](../plugins/weather.md).

- **Temperature**. <Translate android="true" ids="temperature_widget_desc"/>
- **Air Pressure**. <Translate android="true" ids="air_pressure_widget_desc"/>
- **Wind**. <Translate android="true" ids="wind_widget_desc"/>
- **Cloud**. <Translate android="true" ids="clouds_widget_desc"/>
- **Precipitation**. <Translate android="true" ids="precipitation_widget_desc"/>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="shared_string_weather"/>* |  
| By tapping | Shows in a pop-up dialog box the date and time when the weather information is relevant. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *Menu → Plugins → Weather → Settings* or *Menu → Settings → App Profile → Weather* |  


### Parking Widget {#parking-widget}

:::note
To add Parking widgets to the map screen, enable the OsmAnd [Parking position plugin](../plugins/parking.md).
:::  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)  

The Parking plugin widget shows the distance from the center of the screen to the parking location. To set a parking spot on the map, zoom in to the required level, then long tap on the place on the map to open the context menu. Follow [these settings](../plugins/parking.md#set-a-spot).  

**Note:** The Parking Widget will only appear if a parking position has been added to the map. Without a saved parking position, the widget will not be visible.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="parking_place"/>* |
| By tapping | Moves map view to the parking position. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary Widget {#mapillary-widget}

:::note  
To add the Mapillary widget to the map screen, enable the OsmAnd [Mapillary plugin](../plugins/mapillary.md).  
:::  

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png)

This is a Mapillary plugin widget that provides quick access to the Mapillary application, which enables you to add [*street-level imagery*](../plugins/mapillary.md#enable-layer). The widget is added to the map automatically when the plugin is enabled.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="mapillary"/>* |
| By tapping | Opens [Mapillary](https://www.mapillary.com/) application. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Audio/Video Notes Widget {#audiovideo-notes-widget}

<InfoAndroidOnly />

:::note
To add Audio/Video Notes widgets to the map screen, enable the OsmAnd [Audio/Video Notes plugin](../plugins/audio-video-notes.md).
:::

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

These are Audio/video notes plugin widgets that provide quick access to start/stop taking audio, video, or photo notes.  

You can configure which action is selected by default:

- *On request*. Default state. Every time the action selection dialog is displayed.
- *Record audio* - records an audio note.
- *Record video* - allows you to record a video.
- *Take a photo* - allows you to take a photo.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_av_notes"/>*  |
| By tapping | Start / stops taking a note  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


### Tracker Widget {#tracker-widget}

<InfoAndroidOnly />

:::note
To add the Tracker widget to the map screen, enable the OsmAnd [Tracker plugin](../plugins/osmand-tracker.md).
:::  

For the plugin and widget to work, you need to install [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram) from Google Play or other sources.  

This OsmAnd Tracker plugin widget is used to quickly access the OsmAnd Tracker app and share your location information with other users. The app sends *Live Location* messages to selected chats within a certain time, displays a list of contacts and groups, and checks chats for messages with your location, which are then displayed on a map in OsmAnd.  

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="tracker_item"/>* |
| By tapping | Opens OsmAnd Online GPS Tracker app. |


### Developer Widgets {#developer-widgets}

:::note
To add Developer widgets to the map screen, enable the OsmAnd [OsmAnd development plugin](../plugins/development.md).
:::

**Developer widgets** provide information about map [rendering speed](../plugins/development.md#map-rendering-fps-widget) and virtual camera position parameters, including [zoom level](../plugins/development.md#zoom-level), [distance](../plugins/development.md#distance-to-target) to map center, [camera elevation](../plugins/development.md#camera-elevation) and [tilt angle](../plugins/development.md#camera-tilt).  

#### Map Rendering FPS {#map-rendering-fps}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

The [Map rendering FPS widget](../plugins/development.md#map-rendering-fps-widget) displays the rendering speed of the map and its elements, measured in frames per second (FPS). A higher FPS value indicates faster rendering and smoother visual performance.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


#### Camera Widgets {#camera-widgets}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Camera position widgets](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera position Widgets 2](@site/static/img/widgets/camera_position_widgets_2_ios.png)

</TabItem>

</Tabs>

The **Camera widgets** allow you to monitor the alignment between the OsmAnd map and the earth's surface.

- [Camera tilt](../plugins/development.md#camera-tilt). Displays the camera's tilt angle in perspective mode. The default value is 90° (no tilt).
- [Camera Elevation](../plugins/development.md#camera-elevation). Indicates the camera's elevation above the surface level.
- [Zoom level](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distance from camera to target](../plugins/development.md#distance-to-target). Measures the distance between the camera and the target location on the map.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Choose a panel → Add widget → <Translate ios="true" ids="developer_widgets"/>* |
| By tapping | Switch between modes (*Zoom Level*)  / No changes (*Others*) |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


#### Available RAM {#available-ram}

<InfoAndroidOnly />

![Average speed widgets](@site/static/img/widgets/available_RAM_2_andr.png)

The **Available RAM** widget is a tool for monitoring your device's memory usage in relation to OsmAnd. It provides detailed data to help optimize application performance.

- **Application RAM Available.** Displays the amount of RAM available for OsmAnd to use without causing performance issues.

- **Application RAM Usage** — Shows the current RAM consumption by OsmAnd.

- **Total Application RAM** — Indicates the total memory allocated to OsmAnd, including both used and available memory.

> **NOTE**. *The *total available RAM* may vary depending on background processes and other applications running on your device. These values are dynamic and offer a way to track and manage memory usage for consistent and efficient OsmAnd performance.*

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config"/> → Choose a panel → Add widget → <Translate android="true" ids="developer_widgets"/> → *Available RAM* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu) |


## Related Articles {#related-articles}

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)



