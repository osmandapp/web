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



## Overview

Information widgets are needed for quick access to information important to the user. This can be data on speed, weather, parking position, data from external sensors, and much more. Widgets can be configured according to the user's specific requirements, enabling their visibility on the application screen or disabling them if necessary.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## Altitude Widgets  

Altitude widgets display the height above the sea level of the current geolocation and the elevation of the map center.  


### Altitude: Current Location  
  
:::note  
Altitude can not be displayed correctly on some Android devices. To resolve this problem, download an altitude correction map: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Altitude widget Android](@site/static/img/widgets/altitude_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Altitude widget iOS](@site/static/img/widgets/altitude_widget_ios.png)  

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |  


### Elevation: Map Center

:::tip subscribe
&nbsp;<ProFeature/> To get access to use the *Elevation: map center* widget, subscribe to OsmAnd Pro for [Android](../purchases/android.md#pro-features) or [iOS](../purchases/ios.md#pro-features).  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Elevation widget iOS](@site/static/img/widgets/elevation_widget_2_ios.png)

</TabItem>

</Tabs>

You can use the widget to find out the elevation of the current map center above sea level.
[Terrain map (Hillshade and Slope)](../plugins/topography.md#download-maps) of the required area is needed to display information in the **Elevation: map center widget**.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_altitude_map_center"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |


## Current Time

![Current time widget](@site/static/img/widgets/current_time_widget.png)

This widget displays the current time taken from your device.  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_plain_time"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | Time & Format is configured by device settings. |


## Current Speed

![Speed widget](@site/static/img/widgets/current_speed_widget.png)  

The widget shows the current speed detected by the GPS sensor.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_current_speed"/>* |
| By tapping  | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Average Speed

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Average speed widget Android](@site/static/img/widgets/average_speed_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png)

</TabItem>

</Tabs>  

This widget shows your average speed for a selected time interval and does not require any other features such as track recording or navigation. You can easily use it to check if your average speed is in line with highway speed limits or record your average speed for the last 5-15 minutes of cycling.  

Tap the Average Speed widget *Settings* button (*Android*) or tap the added widget field (*iOS*) to select the time interval and the stop on/off option.  

**Time interval**  
The average speed is calculated for a given time interval according to your selection. Thus, you can set the average speed calculation interval from 15 seconds to 60 minutes. In general, the average speed is taken from the recorded GPS points: ```Average Speed = AVERAGE(GPS_LOCATION.speed)```.  

**Take stops into account**  
***Off*** *setting*. A long stop will also add zeros to the average speed calculation, which can significantly change the overall value.
***On*** *setting*. If your average speed is less than 1 speed unit per hour, this value will not be added to the average speed calculation. This allows your average speed to not change much when you stop, for example at a traffic light or want to take a break from cycling.

**Reset average speed (*Android*)**  
You can reset the current average speed value using two methods:

1. Long tap on the widget, which opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu), and select *Reset average speed*.
2. Access the reset option from the widget **Settings** within the [Configure Screen menu](../widgets/configure-screen.md#settings).

After resetting, the average speed will be calculated from the beginning, starting with the new GPS data. This feature is particularly useful for short-term measurements, such as monitoring speed in areas with an average speed enforcement camera, ensuring accurate real-time metrics from the moment of reset.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Average speed](@site/static/img/widgets/average_speed_widget_2.png) ![Average speed](@site/static/img/widgets/average_speed_widget_3.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|:------------|:------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_average_speed"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). Can be used to reset average speed (*Android*). |


## Glide Ratio

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_1.png)|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

</TabItem>

<TabItem value="ios" label="iOS">

|Widgets| Widgets on the screen|
|:--------|:---------|
|![Glide ratio](@site/static/img/widgets/glide_ratio_1_widget_ios.png)|![Glide ratio](@site/static/img/widgets/glide_ratio_widget_ios.png)|


</TabItem>

</Tabs>  

Glide ratio [simple widgets](../widgets/configure-screen.md#widgets-for-all-panels) provides valuable glide ratio information to help make informed decisions when planning air routes. The *Glide Ratio* widget in OsmAnd helps you assess the efficiency of your descent or ascent when navigating to a specific location ([Map marker](../personal/markers.md) position). It calculates the glide ratio as the ratio of the distance to the difference in altitude between your current position and your intended destination. You can read more about this [here](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).


**Widgets use:**

- *Planning soaring flights.* For soaring pilots, the *Glide ratio to the target* widget becomes an indispensable tool when planning and executing soaring flights. Pilots can estimate how far they can fly to their target given the current conditions and the required glide ratio.
- *Optimize climbs and descents.* The average glide ratio allows pilots to optimize climbs and descents based on current conditions. Pilots can choose the optimal timing for climbs to maximize flight time or for descents to reach a target point.
- *Reacting to changing conditions.* The widget provides continuous glide ratio updates, allowing pilots to react instantly to changes in atmospheric conditions or routes. They can adjust their flight plan to ensure safety and efficiency.
- *Maximum use of horizontal distance.* Knowing the glide ratio allows pilots to maximize the use of horizontal distance to move to the target, which is especially important when planning long flights.
- *Risk reduction*. The *Glide ratio to the target* widget helps pilots avoid situations where reaching the target becomes impossible due to insufficient glide ratio. This helps to reduce risks and improve flight safety.


**Positive and Negative Values:**

- **Positive values** indicate that your destination is at a lower altitude than your current position, requiring descent.
- **Negative values** indicate that your destination is at a higher altitude, necessitating ascent. For example, "-90:1" means that after covering a distance of 90 kilometers, you need to ascend by 1 kilometer to reach your destination.


**Rounding/Formatting:**

- Value **<= 0.1**:  
  - "0.05" is displayed as "0".
- Value **> 0.1 and < 100**:  
  - for example, "50.7643" is displayed as "50.8:1.".
- Value **> 100:**  
  - "102.35" is displayed as "102:1."


### Glide Ratio to Target

- **Glide ratio to target** shows the exact glide ratio required to reach the target point.
- **Target elevation** shows the target point elevation. The [Map marker](../personal/markers.md) should be used as the target point.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Glide ratio* |
| By tapping | Changes *Glide ratio to target* or *Target elevation*  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### Average Glide Ratio

- **Average glide ratio** shows the average glide ratio for a specified time interval.
- **Average vertical speed** indicates the rate at which an object ascends or descends over some time. For evaluation take into account only the first and last point in time interval. You can set the time interval for this widget from 15 seconds to 60 minutes. The [Map marker](../personal/markers.md) should be used as the target point.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Glide ratio* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Glide ratio* |
| By tapping | Changes *Average glide ratio* or *Average vertical speed*  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


## Battery Level

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)  

This widget shows the battery level of your device.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_battery"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


## Coordinates Widget

OsmAnd offers two types of coordinate widgets:

- **Coordinates: map center** - shows the geographic coordinates of the current map center.
- **Coordinates: current location** - shows the geographic coordinates of current geolocation.

Coordinates widgets are displayed at the top of the screen. Icons with a green background show the latitude and longitude of the point in the center of the visible part of the map, and those with a blue background show the coordinates of your current location. Information about supported *Сoordinates formats* can be found in the *[Search coordinates article](../search/search-coordinates.md#coordinate-format)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_ios_2.png)  

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="top_widgets_panel"/>/<Translate android="true" ids="bottom_widgets_panel"/> → <Translate android="true" ids="coordinates_widget"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → <Translate ios="true" ids="top_widgets_panel"/>/<Translate ios="true" ids="bottom_widgets_panel"/> → <Translate ios="true" ids="coordinates"/>* |
| By tapping | Copies the coordinates to the clipboard. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/> (iOS) or <Translate android="true" ids="configure_profile"/> (Android) → <br/> <Translate ios="true" ids="general_settings_2,units_and_formats,coords_format"/>* |


## GPS Info  

<InfoAndroidOnly />

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

The GPS (Global Positioning System) information widget shows the number of satellites that the device is currently detecting and using. You can use it to check the GPS status in case of a poor signal.  

You can reset the current GPS cache through:
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*.  

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_gps_info"/>* |  
| By tapping | Opens the GPS status menu with third-party tools to configure the onboard GPS device. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


## Sun Position

<Tabs groupId="operating-systems">

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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_sun_position"/> → <Translate ios="true" ids="map_widget_sun_position"/>, <Translate ios="true" ids="map_widget_sunrise"/>, <Translate ios="true" ids="map_widget_sunset"/>* |
| By tapping | Switch between the remaining time and the time of the next sunrise/sunset. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


## Radius Ruler

:::note  
You can read a more detailed description here: **[Radius ruler and Ruler](../widgets/radius-ruler)**.  
:::  

<Tabs groupId="operating-systems">

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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| By tapping | Changes the state of the widget between black scale, grayscale, and invisible modes. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Speedometer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Speedometer](@site/static/img/widgets/speedometer_1_andr.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Speedometer](@site/static/img/widgets/speedometer_1_ios.png)   ![Speedometer](@site/static/img/widgets/speedometer_2_ios.png)

</TabItem>

</Tabs>

**Speedometer widget** is a graphical display of the current vehicle speed based on *data received from the GPS*. It allows you to monitor in real-time the compliance between your speed and the allowable speed limit. The allowable speed limit is provided by [*OpenStreetMap data*](https://wiki.openstreetmap.org/wiki/Key:maxspeed) for a particular road section and OsmAnd [*Speed Limit Tolerance*](../navigation/guidance/voice-navigation.md#speed-limit) setting.  

- In the *Speedometer settings*, you can select the size (**Height**) of the widget on the application screen as, *Small*, *Medium* or *Large*.
- You can specify when to receive a **Speed limit warning** selecting *Always* or *When exceeded*.

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


## Plugin Widgets

These widgets are enabled and work in combination with their corresponding plugins.


### Trip Recording Widgets  

:::note  
You can read a more detailed description here: **[<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md)**.  
:::  

<Tabs groupId="operating-systems">

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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_monitoring"/>* |
| By tapping | Starts/Stop track recording or View the graph. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### External Sensors Widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![External sensor widgets Android](@site/static/img/widgets/external-sensors-widgets_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![trip_recording_widget](@site/static/img/widgets/external-sensors-widgets_ios.png)

</TabItem>

</Tabs>

Widgets refer to [External sensors plugin](../plugins/external-sensors.md#widgets). You can use them to view brief information from your external sensors, such as: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android only*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, <Translate android="true" ids="map_widget_ant_bicycle_dist"/>** and **<Translate android="true" ids="external_device_characteristic_temperature"/>**.  

- To add External sensor widgets to the map screen, [enable](../plugins/index.md#enable--disable) **OsmAnd External sensors plugin**.
- Widgets can be added even if there is no external sensor connected.
- All added widgets are visible even if no external sensor is connected.
- If a sensor has not been added or you need to edit the widget, tap the required widget field in the list and then on *Settings*, or directly on the *Settings icon* in the list.
- The data displayed in widgets can be recorded using the [Trip recording plugin](../plugins/trip-recording.md#recording-settings).  
- How to choose which sensor (of the same type) to show in the widget, read [here](../plugins/external-sensors.md#widget-settings).

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### Vehicle Metrics Widgets

<InfoAndroidOnly />

:::note
To add Vehicle Metrics Widgets to the map screen, enable the OsmAnd [**Vehicle Metrics plugin**](../plugins/vehicle-metrics.md).
:::

![Vehicle metrics widgets Android](@site/static/img/widgets/vehicle_metrics_1.png)

The widgets belong to the [Vehicle Metrics plugin](../plugins/vehicle-metrics.md#widgets). You can use them to view information from a connected OBD-II scanner, such as (*13 metrics*): **Intake Temperature**,&nbsp; **Ambient Temperature**,&nbsp; **Coolant Temperature**,&nbsp; **Engine Oil Temperature**,&nbsp; **Engine Speed** (*free*),&nbsp; **Engine Runtime**,&nbsp; **Calculated Engine Load**,&nbsp; **Fuel Pressure**,&nbsp; **Fuel Consumption**,&nbsp; **Remaining Fuel**,&nbsp; **Battery Level**,&nbsp; **Vehicle Speed** (*free*), and **Throttle Position**.  

- To add vehicle metrics widgets to the map screen, [enable](../plugins/index.md#enable--disable) **Vehicle Metrics plugin**.
- You can add widgets even if no OBD-II scanner is connected.
- All added widgets are visible whether an OBD-II scanner is connected or not.
- To edit a widget, tap the widget added to the panel, then tap *Settings*, or directly tap the *Settings icon* in the widget field.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels →  <Translate android="true" ids="obd_widget_group"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### Weather Widgets

:::note
To add Weather widgets to the map screen, enable the OsmAnd [**Weather plugin**](../plugins/weather.md).
:::

<Tabs groupId="operating-systems">

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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="shared_string_weather"/>* |  
| By tapping | Shows in a pop-up dialog box the date and time when the weather information is relevant. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *Menu → Plugins → Weather → Settings* or *Menu → Settings → App Profile → Weather* |  


### Parking Widget

:::note
To add Parking widgets to the map screen, enable the OsmAnd [**Parking position plugin**](../plugins/parking.md).
:::  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)  

This is a Parking plugin widget that shows the distance from the center of the screen to the parking location.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="parking_place"/>* |
| By tapping | Moves map view to the parking position. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary Widget

:::note  
To add the Mapillary widget to the map screen, enable the OsmAnd [**Mapillary plugin**](../plugins/mapillary.md).  
:::  

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png)

This is a Mapillary plugin widget that provides quick access to the Mapillary application, which enables you to add [*street-level imagery*](../plugins/mapillary.md#enable-layer). The widget is added to the map automatically when the plugin is enabled.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="mapillary"/>* |
| By tapping | Opens [Mapillary](https://www.mapillary.com/) application. |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### Audio/Video Notes Widget

<InfoAndroidOnly />

:::note
To add Audio/Video Notes widgets to the map screen, enable the OsmAnd [**Audio/Video Notes plugin**](../plugins/audio-video-notes.md).
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
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_av_notes"/>*  |
| By tapping | Start / stops taking a note  |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


### Tracker Widget

<InfoAndroidOnly />

:::note
To add the Tracker widget to the map screen, enable the OsmAnd [Tracker plugin**](../plugins/osmand-tracker.md).
:::  

For the plugin and widget to work, you need to install [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram) from Google Play or other sources.  

This OsmAnd Tracker plugin widget is used to quickly access the OsmAnd Tracker app and share your location information with other users. The app sends *Live Location* messages to selected chats within a certain time, displays a list of contacts and groups, and checks chats for messages with your location, which are then displayed on a map in OsmAnd.  

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="tracker_item"/>* |
| By tapping | Opens OsmAnd Online GPS Tracker app. |


### Developer Widgets

:::note
To add Developer widgets to the map screen, enable the OsmAnd [**OsmAnd development plugin**](../plugins/development.md).
:::

Developer widgets are used to get map information [rendering speed](../plugins/development.md#fps-widget) and virtual camera position: [zoom level](../plugins/development.md#zoom-level), [distance](../plugins/development.md#distance-to-target) to map center, camera [elevation](../plugins/development.md#camera-elevation) and [incline](../plugins/development.md#camera-tilt).  


#### FPS Widget

The [Map rendering FPS](../plugins/development.md#fps-widget) shows how fast the map and its elements are rendered and updated. The higher the rendering speed, the higher the quantitative values in frames per second.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="developer_widgets,map_widget_rendering_fps"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


#### Camera Widgets  

Camera widgets can be used to compare the OsmAnd map and the earth's surface.  
There are four Camera widgets:

- [Camera tilt](../plugins/development.md#camera-tilt). <Translate android="true" ids="map_widget_camera_tilt_desc"/>
- [Camera Elevation](../plugins/development.md#camera-elevation). <Translate android="true" ids="map_widget_camera_distance_desc"/>
- [Zoom level](../plugins/development.md#zoom-level). <Translate android="true" ids="map_widget_zoom_level_desc"/>
- [Distance from camera to target](../plugins/development.md#distance-to-target). <Translate android="true" ids="map_widget_target_distance_desc"/>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Camera position widgets](@site/static/img/widgets/camera_position_widgets_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Camera position Widgets 2](@site/static/img/widgets/camera_position_widgets_ios.png)

</TabItem>

</Tabs>

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="developer_widgets"/>* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


#### Available RAM

![Average speed widgets](@site/static/img/widgets/available_RAM_2_andr.png)

This widget is a useful tool for you to monitor the amount of available RAM on your device. It provides information about how much RAM is available to run OsmAnd, which allows you to manage the application performance more accurately.  

1. **Application RAM Available:** This value displays how much RAM is available for use by your OsmAnd application at the moment. It shows how much memory the application can use without problems or lag.

2. **Application RAM Usage:** This value displays how much RAM is currently being used by your OsmAnd application. It shows the current RAM usage by the application.

3. **Total Application RAM:** This value indicates the total amount of RAM allocated to your OsmAnd application. This includes used and available memory.

**Total available* can be caused by various factors, such as background device processes or other applications that may be temporarily using RAM. It's important to remember that RAM is dynamic and can change depending on what apps and tasks are running on your device. These values are useful for tracking and optimizing the memory usage of your OsmAnd application to ensure it runs more consistently and efficiently.

To use this widget, make sure you have the **OsmAnd development plugin** enabled.

| | |
|:------------|:------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Available RAM* |
| By tapping | No changes |
| Long tap | Opens the [Context menu of the widget](../widgets/configure-screen.md#widget-context-menu). |


## Related Articles

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *This article was last updated in August 2024*
