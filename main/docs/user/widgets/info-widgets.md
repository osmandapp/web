--- 
sidebar_position: 3
title:  Informational widgets
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


## Altitude widgets  

Altitude widgets display the height above the sea level of the current geolocation and the elevation of the map center.  


### Altitude: current location  
  
:::note  
Altitude can not be displayed correctly on some Android devices. To resolve this problem, download an altitude correction map: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.  
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
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_altitude_current_location"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_altitude_current_location"/>* |
| By tapping | No changes |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* |  


### Elevation: map center

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Elevation widget iOS](@site/static/img/widgets/elevation_widget_ios.png) 

</TabItem>

</Tabs>   

You can use the widget to find out the elevation of the current map center above sea level.
[Terrain map (Hillshade and Slope)](../plugins/contour-lines.md#download-maps) of the required area to display information in the *Elevation: map center widget*.  

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_altitude_map_center"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_altitude_map_center"/>* | 
| By tapping | No changes |
| Format | *Menu → Settings → App profiles → General settings → Units & formats → Units of length* | 


## Current time

![Current time widget](@site/static/img/widgets/current_time_widget.png)    

This widget displays the current time taken from your device.  

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_plain_time"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_plain_time"/>* |
| By tapping | No changes |
| Format | Time & Format is configured by device settings. |


## Current speed

![Speed widget](@site/static/img/widgets/current_speed_widget.png)  

The widget shows the current speed detected by the GPS sensor.  

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_current_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_current_speed"/>* |
| By tapping  | No changes |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/>* |


## Average speed 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Average speed widget Android](@site/static/img/widgets/average_speed_widget.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widget iOS](@site/static/img/widgets/average_speed_widget_ios_2.png) 

</TabItem>

</Tabs>   
  

This widget shows your average speed for a selected time interval and does not require any other features such as track recording or navigation. You can easily use it to check if your average speed is in line with highway speed limits, or record your average speed for the last 5-15 minutes of cycling.    

Tap the Average Speed widget *Settings* button (Android) or tap the added widget field (iOS) to select the time interval and the stop on/off option.   

**Time interval**  
The average speed is calculated for a given time interval according to your selection. Thus, you can set the average speed calculation interval from 15 seconds to 60 minutes. In general, the average speed is taken from the recorded GPS points: ```Average Speed = AVERAGE(GPS_LOCATION.speed)```.  


**Take stops into account**  
***Off*** *setting*. A long stop will also add zeros to the average speed calculation, which can significantly change the overall value.   
***On*** *setting*. If your average speed is less than 1 speed unit per hour, this value will not be added to the average speed calculation. This allows your average speed to not change much when you stop, for example at a traffic light or want to take a break from cycling.    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Average speed](@site/static/img/widgets/average_speed_widget_2.png) ![Average speed](@site/static/img/widgets/average_speed_widget_3.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_1.png)  ![Average speed widgets](@site/static/img/widgets/average_speed_widget_ios_3.png)

</TabItem>

</Tabs>  

| | |
|------------|------------|
| Enable |  **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_average_speed"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_average_speed"/>* |
| By tapping | No changes |   


## Glide ratio

<InfoAndroidOnly />  

|Widgets| Widgets on the screen|
|--------|---------|
|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_1.png)|![Glide ratio](@site/blog/2023-12-22-android-4-6/img/glide_ratio_2.png)|

Glide ratio [simple widgets](../widgets/configure-screen.md#widgets-for-all-panels) provides valuable glide ratio information to help make informed decisions when planning air routes. The *Glide Ratio* widget in OsmAnd helps you assess the efficiency of your descent or ascent when navigating to a specific location ([Map marker](../personal/markers.md) position). It calculates the glide ratio as the ratio of the distance to the difference in altitude between your current position and your intended destination. You can read more about this [here](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio).

- **Glide ratio to target** shows the glide ratio required to reach the target point. The [Map marker](../personal/markers.md) should be used as the target point. 

- **Average glide ratio** shows the average glide ratio for a specified time interval. You can set the time interval for this widget from 15 seconds to 60 minutes.

**Widgets use:**
- *Planning soaring flights.* For soaring pilots, the *Glide ratio to the target* widget becomes an indispensable tool when planning and executing soaring flights. Pilots can estimate how far they can fly to their target given the current conditions and the required glide ratio.
- *Optimize climbs and descents.* The average glide ratio allows pilots to optimize climbs and descents based on current conditions. Pilots can choose the optimal timing for climbs to maximize flight time or for descents to reach a target point.
- *Reacting to changing conditions.* The widget provides continuous glide ratio updates, allowing pilots to react instantly to changes in atmospheric conditions or route. They can adjust their flight plan to ensure safety and efficiency.
- *Maximum use of horizontal distance.* Knowing the glide ratio allows pilots to maximize the use of horizontal distance to move to the target, which is especially important when planning long flights.
- *Risk reduction*. The *Glide ratio to the target* widget helps pilots avoid situations where reaching the target becomes impossible due to insufficient glide ratio. This helps to reduce risks and improve flight safety.


**Positive and Negative Values:**
  - *Positive values* indicate that your destination is at a lower altitude than your current position, requiring descent.
  - *Negative values* indicate that your destination is at a higher altitude, necessitating ascent. For example, "-90:1" means that after covering a distance of 90 kilometers, you need to ascend by 1 kilometer to reach your destination.


**Rounding/Formatting:**  
  - Value **<= 0.1**:  
    - "0.05" is displayed as "0".
  - Value **> 0.1 and < 100**:  
    - for exampl, "50.7643" is displayed as "50.8:1.".
  - Value **> 100:**  
    - "102.35" is displayed as "102:1."


| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Glide ratio* |
| By tapping | Displays the target altitude. |


## Battery level

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)  

This widget shows the battery level of your device.

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_battery"/>* |
|   | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_battery"/>* |
| By tapping | No changes |


## Coordinates widget

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
|------------|------------|
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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_gps_info"/>* |  
| By tapping | Opens the GPS status menu with third-party tools to configure the on-board GPS device. |  


## Sun position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Sunset and sunrise widgets](@site/static/img/widgets/sun_position.png) ![Sunset and sunrise widgets](@site/static/img/widgets/sun_position_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sunset and sunrise widgets](@site/static/img/widgets/sunset_rise_widgets_ios.png)
 
</TabItem>

</Tabs>  

The Sun position widgets show the time of the next sunrise, sunset for the center of the map. When tapped, they can also display the time remaining until the expected sunset or sunrise. In both cases, the time is based on the configured time of your device.      

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_sun_position"/> → <Translate android="true" ids="map_widget_sun_position"/>, <Translate android="true" ids="shared_string_sunrise"/>, <Translate android="true" ids="shared_string_sunset"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_sun_position"/>* |
| By tapping | Switch between the remaining time and the time of the next sunrise/sunset. |  


## Radius ruler

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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="radius_ruler_item"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="map_widget_ruler_control"/>* |
| By tapping | Changes the state of the widget between black scale, gray scale, and invisible modes. |
| Format | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


## Plugins widgets

These widgets are enabled and work in combination with their corresponding plugins.

### Trip recording widgets  

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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_monitoring"/>* |
|   |  **iOS**: *Menu → Configure screen → Widgets → Left/Right/Top/Bottom panels → Track recording* |
| By tapping | Starts/Stop track recording or View the graph. |


### External sensors widgets

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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="external_sensor_widgets"/>* |
| | **iOS:** *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="external_sensors_plugin_name"/>* |
| By tapping | No changes |   


### Weather widgets

:::note  
Weather widgets can only be added to the map screen when the OsmAnd [**Weather plugin**](../plugins/weather.md) is enabled.  
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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="shared_string_weather"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Left/Right/Top/Bottom panels → <Translate ios="true" ids="shared_string_weather"/>* |  
| By tapping | Shows in a pop-up dialog box the date and time when the weather information is relevant. |
| Format | *Menu → Plugins → Weather → Settings* or *Menu → Settings → App Profile → Weather* |  


### Parking widget

:::note  
Parking widget can be added to the map screen only when OsmAnd [**Parking position plugin**](../plugins/parking.md) is enabled.  
:::  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)  

This is a Parking plugin widget that shows the distance from the center of the screen to the parking location.    

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_parking"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,map_widget_parking"/>* |
| By tapping | Moves map view to the parking position. |
| Format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>* |


### Mapillary widget

:::note  
Mapillary widget can be added to the map screen only when OsmAnd [**Mapillary plugin**](../plugins/mapillary.md) is enabled.  
:::  

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png)   

This is a Mapillary plugin widget that provides quick access to Mapillary app to add [*Street-Level imagery*](../plugins/mapillary.md#enable-layer).  

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="mapillary"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,mapillary"/>* |
| By tapping | Opens [Mapillary](https://www.mapillary.com/) application. |


### Audio/video notes widget

:::note  
Widgets can only be added to the map screen when the OsmAnd [**Audio/video notes plugin**](../plugins/audio-video-notes.md) is enabled. 
:::   

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

These are Audio/video notes plugin widgets that provide quick access to start/stop taking audio, video, or photo notes.  

You can configure which action is selected by default:    

- *On request*. Default state. Every time the action selection dialog is displayed. 
- *Record audio* - records an audio note.
- *Record video* - allows you to record a video.
- *Take a photo* - allows you to take a photo.  

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_av_notes"/>*  |
| By tapping | Start / stops taking a note  |


### Tracker widget

<InfoAndroidOnly />

:::note  
Tracker widget can be added to the map screen only when [**OsmAnd Tracker plugin**](../plugins/osmand-tracker.md) is enabled.  
:::  

For the plugin and widget to work, you need to install [**OsmAnd Online GPS Tracker**](https://play.google.com/store/apps/details?id=net.osmand.telegram) from Google Play or other sources.  

This OsmAnd Tracker plugin widget is used to quickly access the OsmAnd Tracker app and share your location information with other users. The app sends *Live Location* messages to selected chats within a certain time, displays a list of contacts and groups, and checks chats for messages with your location, which are then displayed on a map in OsmAnd.  

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="tracker_item"/>* |
| By tapping | Opens OsmAnd Online GPS Tracker app. |


### Developer widgets

:::note  
Developer widgets can be added to the map screen only when OsmAnd [**Development plugin**](../plugins/development.md) is enabled.  
:::

Developer widgets are used to get information about map [rendering speed](../plugins/development.md#fps-widget) and virtual camera position: [zoom level](../plugins/development.md#zoom-level), [distance](../plugins/development.md#distance-to-target) to map center, camera [elevation](../plugins/development.md#camera-elevation) and [incline](../plugins/development.md#camera-tilt).  


#### FPS widget

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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_rendering_fps"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>* |
| By tapping | No changes |


#### Camera widgets  

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
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="developer_widgets"/>* |
|   |  **iOS**: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>* |
| By tapping | No changes | 


#### Available RAM

![Average speed widgets](@site/static/img/widgets/available_RAM_2_andr.png)

This widget is a useful tool for you to monitor the amount of available RAM on your device. It provides information about how much RAM is available to run OsmAnd, which allows you to manage the application performance more accurately.  

1. **Application RAM Available:** This value displays how much RAM is available for use by your OsmAnd application at the moment. It shows how much memory the application can use without problems or lag.

2. **Application RAM Usage:** This value displays how much RAM is currently being used by your OsmAnd application. It shows the current RAM usage by the application.

3. **Total Application RAM:** This value indicates the total amount of RAM allocated to your OsmAnd application. This includes used and available memory.

**Total available* can be caused by various factors, such as background device processes or other applications that may be temporarily using RAM. It's important to remember that RAM is dynamic and can change depending on what apps and tasks are running on your device. These values are useful for tracking and optimizing the memory usage of your OsmAnd application to ensure it runs more consistently and efficiently.

To use this widget, make sure you have the OsmAnd **Development plugin** enabled.

| | |
|------------|------------|
| Enable | **Android:** *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → Available RAM* |
| By tapping | No changes |
