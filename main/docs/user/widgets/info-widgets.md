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

Information widgets are needed for quick access to information important to the user. This can be data on speed, weather, parking position, data from external sensors, and much more. Widgets can be configured according to the user's specific requirements, enabling their visibility on the application screen or disabling them if necessary.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)


## Altitude widgets  

Altitude widgets display the height above the sea level of the current geolocation and the elevation of the map center.  


### Altitude: current location  
  
:::note  
Altitude may not be displayed correctly on some Android devices. To resolve this problem, download an altitude correction map: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>*.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Altitude widget Android](@site/static/img/widgets/altitude_widget_andr.png)  
  
| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Altitude |  
| By tapping | No changes.|
| Format | Menu → Settings → App profiles → General settings → Units & formats → Units of length |  

</TabItem>

<TabItem value="ios" label="iOS">

![Altitude widget iOS](@site/static/img/widgets/altitude_widget_ios.png)  
  
| | |
|------------|------------|
| Enable | Menu → Configure screen → Right panel → Altitude widget |
| By tapping | No changes.|
| Format | Menu → Settings → App profiles → General settings → Units & formats → Units of length |  

</TabItem>

</Tabs>  

### * Elevation: map center

<InfoAndroidOnly />  

To display Elevation widget among *Altitude widgets*:
- enable the [Development plugin](../plugins/development.md)
- switch on heightmap option in the [Development plugin settings](../plugins/development.md#plugin-settings)
  
![Elevation widget Android](@site/static/img/widgets/elevation_widget_andr.png)  
  
:::caution
Elevation widget will display information only when the hightmaps of the required area are downloaded.  
:::

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Altitude | 
| By tapping | No changes. |
| Format | Menu → Settings → App profiles → General settings → Units & formats → Units of length |  

## Current time

This widget shows current time from your device.

![Current time widget](@site/static/img/widgets/current_time_widget.png)  

| | |
|------------|------------|
| Enable |  *<Translate android="true" ids="android_button_seq"/>:* <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_plain_time"/> |
|  | *<Translate ios="true" ids="ios_button_seq"/>:*  <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_plain_time"/> |
| By tapping | No changes. |
| Format | Time & Format is configured by device settings. |


## Current speed

Speed widget shows your current speed detected by GPS-sensor.

![Speed widget](@site/static/img/widgets/speed_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_speed"/> |
| By tapping  | No changes.|
| Format | *<Translate android="true" ids="android_button_seq"/>:* <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/> |
|        | *<Translate ios="true" ids="ios_button_seq"/>:*  <Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles,general_settings_2,units_and_formats,default_speed_system"/> |


## Average speed widget  

<InfoAndroidOnly />

This widget shows your average speed in the past for a selected time interval and doesn't require any other features such as recording track or navigation. And you can easily use it for validating your average speed against speed limits on highways, for recording last 5-15 min average speed riding a bicycle.  

Click on the **Settings** button of the Average Speed widget to select the time interval and the stop on/off option: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,available_widgets,map_widget_average_speed"/>*   

**Time interval.**  
The average speed is calculated for the set interval of time, according to your choice. Thus, you can set the interval for calculating your average speed from 15 seconds to 60 minutes. In general, the average speed is taken from recorded points by GPS: ```Average Speed = AVERAGE(GPS_LOCATION.speed)```.  


**Take stops into account.**  
***Off*** *setting*: If you stop for a while, zeroes will also be added to the average speed calculation, which can significantly change the overall value. ***On*** *setting*: If your average speed is less than 1 speed unit per hour, this value will not be added to the average speed calculation. This allows your average speed not to change much when you stop, for example, at a traffic light or want to take a break from cycling.  

![Average speed](@site/static/img/widgets/avera_speed_2.png) ![Average speed](@site/static/img/widgets/avera_speed_option.png)

![Average speed widgets](@site/static/img/widgets/aver_widg_1.png)  

| | |
|------------|------------|
| Enable |  Menu → Configure screen → Left / Right panel → Average speed |
| By tapping | No changes. |   


## Battery level

This widget shows the battery level of your device.

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_battery"/> |
| By tapping |No changes.|


## Coordinates widget

This widget is displayed at the top of the screen and shows the current geographic coordinates.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *Coordinates: map center* - shows the geographic coordinates of the current map center.
- *Coordinates: current location* - shows the geographic coordinates of current geolocation.

Icons with a green background show the latitude and longitude of the point in the center of the visible part of the map, and those with a blue background show the coordinates of the user's current location.

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_1.png) ![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_2.png)  

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,top_widgets_panel,coordinates_widget"/>  |
| By tapping | Copies the coordinates to the clipboard. |
| Format | <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,coordinates_format"/> |

</TabItem>

<TabItem value="ios" label="iOS">

The widget shows the geographic coordinates of the current geolocation.

![Coordinates widget iOS](@site/static/img/widgets/coordinates_widget_ios.png)

| | |
|------------|------------|
| Enable | <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_appearance_rem,coordinates_widget"/> |
| By tapping | Copies the coordinates to the clipboard |
| Format | <Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles,general_settings_2,units_and_formats,coords_format"/> |

</TabItem>

</Tabs>


## GPS Info  

<InfoAndroidOnly /> 

:::note
You can reset the current GPS-cache via: 
*<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>*  
:::  

GPS (Global Positioning System) info widget shows a number of satellites that device detects and uses at that moment. It could be used to check GPS-status in case of a bad GPS-signal.   

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → GPS info |  
| By tapping | Opens GPS status menu with 3rd party tools for tuning onboard GPS device. |  


## Sunset and sunrise widgets

<InfoAndroidOnly />

Sunset and sunrise widgets show the time of the next sunrise or sunset for the center of the map. Widgets can also display the remaining time ("time left") until the expected sunset/sunrise (also for the center of the map). In both cases "time" or "time left" is indicated by the device time.  

![Sunset and sunrise widgets](@site/static/img/widgets/sunset_rise_widgets.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,map_widget_group_sunrise_sunset"/> |
| By tapping | Changes between "Time left" and time of next sunrise / sunset and vice versa.|  


## * Trip recording widgets  

:::note  
You can read a more detailed description here: [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md).  
:::  

Trip recording widgets refer to [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md#widgets). You can use them to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill* for the Android version and for **iOS version only *Distance/Start-Stop*.**   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png) 

| | |
|------------|------------|
| Enable | Menu → Configure screen → Widgets → Left / Right panel → Trip recording |
| By tapping | Starts/Stop track recording or View the graph. |

</TabItem>

<TabItem value="ios" label="iOS">  

:::note
**Widgets**: *Duration*, *Uphill*, *Downhill* doesn't exist for iOS version of OsmAnd.  
:::  

![trip_recording_widget](@site/static/img/widgets/widget_trip-recording-rec.png)

| | |
|------------|------------|
| Enable | <Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording"/> |
| By tapping | Starts / Stop track recording |

</TabItem>

</Tabs>  


## * External sensors widgets

<InfoAndroidOnly />

:::note 
External sensors widgets can be added to the map screen only when OsmAnd External sensors plugin is enabled.  
:::  

External sensors widgets refer to [External sensors plugin](../plugins/external-sensors.md#widgets). You can use them to view brief information from your external sensors, such as: *<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>, <Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/> and <Translate android="true" ids="map_widget_ant_bicycle_dist"/>*.  

![External sensor widgets Android](@site/static/img/widgets/external-sensors-widgets.png) 

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>|
| By tapping | No changes.|   


## * Weather widgets

:::note  
Weather widgets can be added to the map screen only when OsmAnd [Weather plugin](../plugins/weather.md) is enabled.  
:::

The Weather widgets display the current weather information for the central point on the map. The Weather widgets are automatically enabled on the [Weather screen](../plugins/weather.md#weather-forecast-screen). They can also be placed on the main screen for everyday use ([see](../plugins/weather#weather-widgets)).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Weather widget Android](@site/static/img/widgets/weather_widgets_andr.png) 

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Weather |  
| By tapping | When the development plugin is enabled, weather forecast information is displayed in a pop-up notification.|
| Format | Menu → Plugins → Weather → Settings or *Menu → Settings → App Profile → Weather* |  

</TabItem>

<TabItem value="ios" label="iOS">

![Weather widget iOS](@site/static/img/widgets/weather_widgets_ios.png)

| | |
|------------|------------|
| Enable | Menu → Configure screen → Right panel → Temperature (Pressure, Wind, Cloud, Precipitation) |
| By tapping | No changes.|
| Format | Main menu → Global Settings → Profile → Weather |

</TabItem>

</Tabs>


## * Parking widget

:::note  
Parking widget can be added to the map screen only when OsmAnd [Parking plugin](../plugins/parking.md) is enabled.  
:::  

This is a Parking plugin widget that shows distance from your screen center to the parking place.  

![Parking widget](@site/static/img/plugins/parking/parking_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_parking"/> |
| By tapping | Moves map view to the parking position |
| Format | *<Translate android="true" ids="android_button_seq"/>:* <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/> |
|        | *<Translate ios="true" ids="ios_button_seq"/>:*  <Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/> |


## * Mapillary widget

:::note  
Mapillary widget can be added to the map screen only when OsmAnd [Mapillary plugin](../plugins/mapillary.md) is enabled.  
:::  

This is a Mapillary plugin widget that provides quick access to Mapillary app to add Street-Level-Imagery.

![Mapillary widget](@site/static/img/widgets/mapillary_widget.png) 

| | |
|------------|------------|
| Enable | *Android*: Menu → Configure screen → Left / Right panel → Mapillary |
|  | *iOS*: Menu → Configure screen → Right panel → Mapillary |
| By tapping | Opens Mapillary application. |


## * Audio/video notes widget

:::note  
Audio/video notes widget can be added to the map screen only when OsmAnd [<Translate android="true" ids="audionotes_plugin_name"/> plugin](../plugins/audio-video-notes.md) is enabled.  
:::  

This is an Audio/video notes plugin widget that provides quick access to start or stop recording (audio/video or photo).

You can configure which action can be selected by default:
- On request – every time dialog to choose aciton is displayed. (default state).
- Record audio – takes an audio note by default.
- Record video – records a video by default.
- Take a photo – takes a photo by default.  

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_av_notes"/>  |
| By tapping | Start / stops taking a note  |


## * Tracker widget

<InfoAndroidOnly />

:::note  
Tracker widget can be added to the map screen only when [OsmAnd Tracker plugin](../plugins/osmand-tracker.md) is enabled.  
:::  

For the plugin and widget to work, you need to install [OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)** from Google Play or other sources.  

This OsmAnd Tracker plugin widget is used to quickly access the OsmAnd Tracker app and share your location information with other users. It shows whether connection is online or offline and if sharing location is enabled, then the time since last successful sending is dispalyed.

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,tracker_item"/> |
| By tapping | Opens OsmAnd Tracker app. |


## * Developer widgets

:::note  
Developer Widgets can be added to the map screen only when OsmAnd [Development plugin](../plugins/development.md) is enabled.  
:::

Developer Widgets are used to get information about map [rendering speed](../plugins/development.md#fps-widget) and virtual camera position: [zoom level](../plugins/development.md#zoom-level), [distance](../plugins/development.md#distance-to-target) to map center, camera [elevation](../plugins/development.md#camera-elevation) and [incline](../plugins/development.md#camera-tilt).  


### FPS widget

The [FPS Widget](../plugins/development.md#fps-widget) shows how fast the map and map elements are displayed and refreshed: the higher the rendering speed, the greater the quantitative values in frames per second.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![FPS widget Android](@site/static/img/widgets/fps_widgets_andr.png)  

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Developer widgets |  
| By tapping | No changes.|

</TabItem>

<TabItem value="ios" label="iOS">

![FPS widget iOS](@site/static/img/widgets/fps_widget_ios.png)

| | |
|------------|------------|
| Enable | Menu → Configure screen → Right panel → FPS widget |
| By tapping | No changes.|

</TabItem>

</Tabs>


### Camera widgets  

<InfoAndroidOnly />

Camera widgets can be used to compare the OsmAnd map and the earth's surface. There are four Camera widgets: [Camera tilt widget](../plugins/development.md#camera-tilt), [Camera Elevation widget](../plugins/development.md#camera-elevation), [Zoom level widget](../plugins/development.md#zoom-level) and [Distance from camera to target widget](../plugins/development.md#distance-to-target).  

![Camera position widgets](@site/static/img/widgets/camera_position_widgets.png)

| | |
|------------|------------|
| Enable | Menu → Configure screen → Left / Right panel → Developer widgets |
| By tapping | No changes.|  
