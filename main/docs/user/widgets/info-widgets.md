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


Informational widgets provide information about current location, speed, time, battery level on the map display.

Most of informational widgets stack together in the right column.

![Informational widgets](@site/static/img/widgets/informational_widgets_all.png)

## Altitude

Altitude widget shows the height above sea level of current geolocation. **Android:** on some devices altitude is not displayed correctly due to missing correction of Earth-geoid, you can download it via: <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads,world_maps,index_item_world_altitude_correction"/>.

![Altitude widget](@site/static/img/widgets/altitude_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_altitude"/> |
| On Click | - |
| Format | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/> |
|        | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/> |

## Current time

This widget shows current time from your device.

![Current time widget](@site/static/img/widgets/current_time_widget.png)

| | |
|------------|------------|
| Enable |  **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_plain_time"/> |
|  | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,map_widget_plain_time"/> |
| On Click | - |
| Format | Time & Format is configured by device settings |

## Speed

Speed widget shows your current speed detected by GPS-sensor.

![Speed widget](@site/static/img/widgets/speed_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_speed"/> |
| On Click  | - |
| Format | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,default_speed_system"/> |
|        | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,default_speed_system"/> |


## Average speed widget  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

This widget shows yoru average speed in the past for a selected time interval and doesn't require any other features such as recording track or navigation. And you can easily use it for validating your average speed against speed limits on highways, for recording last 5-15 min average speed riding a bicycle.  

Click on the **Settings** button of the Average Speed widget to select the time interval and the stop on/off option: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,available_widgets,map_widget_average_speed"/>*  

**Time interval.**  
The average speed is calculated for the set interval of time, according to your choice. Thus, you can set the interval for calculating your average speed from 15 seconds to 60 minutes. In general, the average speed is taken from recorded points by GPS: ```Average Speed = AVERAGE(GPS_LOCATION.speed)```.


**Take stops to your account.**   
***Off*** *setting*: If you stop for a while, zeroes will also be added to the average speed calculation, which can significantly change the overall value. ***On*** *setting*: If your average speed is less than 1 speed unit per hour, this value will not be added to the average speed calculation. This allows your average speed not to change much when you stop, for example, at a traffic light or want to take a break from cycling.   

![Average speed](@site/static/img/widgets/avera_speed_2.png) ![Average speed](@site/static/img/widgets/avera_speed_option.png)

![Average speed widgets](@site/static/img/widgets/aver_widg_1.png)  

| | |
|------------|------------|
| Enable |  <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left,map_widget_average_speed"/> |
| | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_average_speed"/> |
| On Click | – |  
  
 
</TabItem>

<TabItem value="ios" label="iOS">  

:::note
**This feature doesn't exist for iOS version of OsmAnd.**
:::  


</TabItem>

</Tabs>  


## Battery level

This widget shows battery level of your device.

![Battery level widget](@site/static/img/widgets/battery_level_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_battery"/> |
| On Click | - |

## Coordinates widget

The widget is shown at the top of the screen. It shows the geographic coordinates of current geo-location.

![Coordinates widget Android](@site/static/img/widgets/coordinates_widget_android.png) ![Coordinates widget iOS](@site/static/img/widgets/coordinates_widget_ios.png)

| | |
|------------|------------|
| Enable | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_appearance_rem,coordinates"/> |
|  | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,coordinates_widget"/> |
| On Click | Copies the coordinates to the clipboard |
| Format | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,coordinates_format"/> |
|        | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,coords_format"/> |

## GPS Info (Android)  

:::note

You can reset the current GPS-cache via: 
<Translate android="true" ids="shared_string_menu,open_settings,rendering_value_browse_map_name,configure_profile,debugging_and_development,agps_info"/>

:::  

GPS (Global Positioning System) info widget shows a number of satellites that device detects and uses at that moment. It could be used to check GPS-status in case of a bad GPS-signal.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

![GPS Info Android widget](@site/static/img/widgets/gps_info_widget.png)

| | |
|------------|------------|
| Enable | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,gps_provider"/> |
| On Click | Opens GPS status menu with 3rd party tools for tuning onboard GPS device. |  

</TabItem>

<TabItem value="ios" label="iOS">  

:::note
**This feature doesn't exist for iOS version of OsmAnd.**
:::  


</TabItem>

</Tabs>  



## * Trip recording widgets  

:::note
  
You can read a more detailed description here: [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md).  

:::  

Trip recording widgets refer to [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording#trip-recording-widgets.md). You can use them to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill* for the Android version and for **iOS version only *Distance/Start-Stop*.**   



<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![trip_recording_widget](@site/static/img/widgets/wid_trip_rec.png) 

| | |
|------------|------------|
| Enable | [Menu → Configure screen → Widgets → Left / Right panel → Trip recording](https://osmand.net/docs/user/widgets/info-widgets#-trip-recording-widgets) |
| On Click | Starts/Stop track recording or View the graph|



</TabItem>

<TabItem value="ios" label="iOS">  

:::note
**Widgets**: *Duration*, *Uphill*, *Downhill* doesn't exist for iOS version of OsmAnd.  

:::  

![trip_recording_widget](@site/static/img/widgets/widget_trip-recording-rec.png)

| | |
|------------|------------|
| Enable | <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,track_recording"/> |
| On Click | Starts / Stop track recording |


</TabItem>

</Tabs>  


## * Parking widget

>Enable **[<Translate android="true" ids="osmand_parking_plugin_name"/> plugin](../plugins/parking)**: <Translate android="true" ids="shared_string_menu,plugins_screen"/> (Android) / <Translate ios="true" ids="res_mapsres"/> (iOS) → <Translate android="true" ids="osmand_parking_plugin_name"/>.


This is a [<Translate android="true" ids="osmand_parking_plugin_name"/> plugin](../plugins/parking.md) widget that shows distance from your screen center to the parking place.


![Parking widget](@site/static/img/plugins/parking/parking_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_parking"/> |
| On Click | Moves map view to the parking position |
| Format | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/> |
|        | **<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/> |

## * Mapillary widget

>Enable **[Mapillary plugin](../plugins/mapillary)**: <Translate android="true" ids="shared_string_menu,plugins_screen"/> (Android) /<Translate ios="true" ids="res_mapsres"/> (iOS) →  Mapillary.


This is a [Mapillary plugin](../plugins/mapillary) widget that provides quick access to Mapillary app to add Street-Level-Imagery.

<!-- ! ![Mapillary widget](@site/static/img/plugins/mapillary/mapillary_widget.png) -->

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,mapillary_widget"/> |
| On Click | Opens Mapillary application |

**Note**: Mapillary application should be installed separately.
  


 
## * Audio-video notes widget

>Enable **[<Translate android="true" ids="audionotes_plugin_name"/> plugin](../plugins/audio-video-notes.md)**: <Translate android="true" ids="shared_string_menu,plugins_screen,audionotes_plugin_name"/>.


This is a [<Translate android="true" ids="audionotes_plugin_name"/> plugin](../plugins/audio-video-notes.md) widget that provides quick access to start / stop taking a recording (audio / video or photo).

![Audio-video notes widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Configure what default action should be taken (<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_av_notes"/>):
- On request – every time dialog to choose aciton is displayed. (default state).
- Record audio – takes an audio note by default.
- Record video – records a video by default.
- Take a photo – takes a photo by default.

<!-- ![Audio-video widget on request](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget_on_request.png) -->
<!-- ![Audio-video widget configure](@site/static/img/plugins/audio-video-notes/av-widget-configure.png) -->


| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_av_notes"/>  |
| On Click | Start / stops taking a note  |

## * Tracker widget (Android)

>Install **[OsmAnd Online GPS Tracker](https://play.google.com/store/apps/details?id=net.osmand.telegram)** from Google Play or other source.

>Enable **[OsmAnd Tracker plugin](../plugins/osmand-tracker.md)**: <Translate android="true" ids="shared_string_menu,plugins_screen"/> →  OsmAnd Online GPS Tracker.

This is [OsmAnd Tracker plugin](../plugins/osmand-tracker.md) widget is used to get quick access to OsmAnd Tracker app and share your location with other people. It shows whether connection is online or offline and if sharing location is enabled, then the time since last successful sending is dispalyed.

![Tracker widget](@site/static/img/plugins/online-tracker/tracker_widget.png)

| | |
|------------|------------|
| Enable | <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,tracker_item"/> |
| On Click | Opens OsmAnd Tracker app |

## * FPS-info (Android)

>Enable **[Developer plugin](../plugins/development.md)**: <Translate android="true" ids="shared_string_menu,plugins_screen,debugging_and_development"/>.


This is a [Developer plugin](../plugins/development.md) widget to investigate how fast map & map elements are showed & refreshed. It displays:
- UI interaction FPS - panning & dragging map (higher number).
- Map refresh FPS - refreshing points, routes on the map (smaller number).

![FPS info Android widget](@site/static/img/widgets/fps_info_widget.png)

| | |
|------------|------------|
| Enable | **<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,map_widget_fps_info"/> |
| On Click | - |

**Note**: FPS doesn't reflect how quickly full offline map screen is rendered, there is another **Developer plugin** setting for it - ***<Translate android="true" ids="trace_rendering"/>***.

## Read next

[Map buttons](../widgets/map-buttons.md)
