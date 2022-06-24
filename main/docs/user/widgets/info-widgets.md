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


## * Average speed widget  

**General Information**  
The widget shows what your average speed is. The average speed is calculated for the set interval of time, according to your choice. Thus, you can set the interval for calculating your average speed from 15 seconds to 60 minutes (for more information see below). In addition, if you stop for a long time, this is also an option in the widget, the time is no longer displayed.  

It is a simple but very useful widget without any extra features. You can easily use it if, for example, you need to observe speed limits on highways or if you ride a bicycle.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

You can place Average speed widget on the *Left* or *Right* panel as you prefer.

>The widget can be turned on/off by following this path:
<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,available_widgets,map_widget_average_speed"/>  

![Average speed widgets](@site/static/img/widgets/avera_speed_1.png)  ![Average speed widgets](@site/static/img/widgets/avera_speed_1-2.png)   


The widget has some different views:  
*Before the interval limit starts / or Osmand application*, *Started*, *The average value for the path traveled*.   

![Average speed widgets](@site/static/img/widgets/nautical_pl_1-1.png)  


The average speed is calculated for the specified time interval. Click on the **Settings** button of the Average Speed widget to select the time interval for which the average speed will be measured:  
><Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets,available_widgets,map_widget_average_speed"/> → ⚙️  

The Settings menu consists of two parts: the choice of the time limit, to calculate the Average speed, and whether or not to include possible stops.  

![Average speed](@site/static/img/widgets/avera_speed_2.png) ![Average speed](@site/static/img/widgets/avera_speed_option.png)  




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

**General Information**  
Trip recording widgets refer to [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md). You can use them to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill* for the Android version and for the iOS version OsmAnd only *Distance*.  

<!--**What the widget is most useful for.** You can see more detailed information and graphs (Overview, Altitude, Speed) of your trip. You can set needed parameters for recording and start record of your trip with one tap.  -->

### Pre-use Setup 
To start using *Trip recording widgets*, you need to make all of the following settings:
* [Enable the plugin](../start-with/first-steps.md#how-to-configure-plugins). 
* Configure Trip recording for the required [profile](../personal/profiles.md) or configure a general setting for [all profiles](http://osmand.net/docs/user/plugins/trip-recording#establish-options).
* Add the necessary **Trip recording widgets** to the screen, this setting is *individual for each profile*.  

<!--**NOTE**: For any troubleshooting details, refer to: [Track recording issues](https://docs.osmand.net/en/main@latest/osmand/troubleshooting/track-recording-issues)-->
  

### Widgets description   
1. [Enable the plugin](../plugins/trip-recording.md#enable-plugin). 
2. Configure Trip recording for the required [profile](../personal/profiles.md).
3. Add the **Trip recording widgets** to the screen.  

<!--**NOTE**: For any troubleshooting details, refer to: [Track recording issues](../troubleshooting/track-recording-issues.md) -->
  
### Settings and operations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  
 

| | |
|------------|------------|
| Enable | [Menu → Configure screen → Widgets → Left / Right panel → Trip recording](https://osmand.net/docs/user/widgets/info-widgets#-trip-recording-widgets) |
| On Click | Starts / Stop track recording |

<!--![Trip recording widget](@site/static/img/widgets/record_1.png) -->


**What's in**  
The screen with a selection of widgets. When the selected widgets appear on the map, you can tap any of them and more information about the track and the ability to interact with it will appear. In general, [<Translate android="true" ids="record_plugin_name"/> plugin](../plugins/trip-recording.md) for Android consists of 4 widgets. *Distance/Start-Stop* is the main widget, when you tap it opens Trip recording dialog. *Duration*, *Uphill* and *Downhill* are more informational widgets.   


&nbsp;  
![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-1.png) 
![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-2.png)  

**Distance/Start-Stop**  

**Details**  
- Name of the dialog box - *Trip recording*  
- Status: *Recording / On pause*    
- Buttons: *Show on map* on/off and [Appearence](https://osmand.net/docs/user/map/tracks-on-map#track-appearance).  
- Graph  
- Information box. There is a different list for each of the graphs.  
- Menu: *Close*, *Pause/Resume*, *Finish*, *Options*.


| | 
|------------|
|**Distance/Start-Stop**: shows the distance of the currently recorded trip. It is added automatically with the Trip recording enabled, but you can hide the widget in Configure screen menu. The widget has three different views: *Recording*, *Paused*, *Inactive*.  <!--While recording, it displays the distance to the track being recorded.-->| 
|![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png)| 
|If *Show start dialog* is enable in Trip recording Plugin settings, then tapping on the inactive widget opens the Trip recording dialog. If it is disabled, it will immediately start recording.|  
|![Trip recording widget](@site/static/img/widgets/overview.png)|
|**NOTE**. If *Show start dialog* is disabled in Trip recording Plugin settings and widget is activ, then tapping on it opens the Trip recording dialog, anyway.|
 



**Duration, Uphill, Downhill**   

| | 
|------------|
|**Duration**: shows time of track recording the duration in minutes/hours of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  



| | 
|------------|
|**Uphill**: shows the sum of all the climbs of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)| 


| | 
|------------|
|NOTE. If *Show start dialog* is disabled in Trip recording Plugin settings and widget is activ, then tapping on it opens the Trip recording dialog, anyway.|
|**Duration**: shows time of track recording the duration in minutes/hours of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Uphill**: shows the sum of all the climbs of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)| 
|**Downhill**: shows the sum of all descents of the current recorded trip.|
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|  
 

If you have several widgets selected, Duration, Uphill, and Downhill, you don't need to switch between them by closing the dialog box that opens. The dialog box is the same for all these widgets.  
On the graph you can see the information about distance, altitude, slope angle. You can scale the graph and   



### Dialog of Trip Recording

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-2.png)

**Description of trip recording information dialog box**  

**What's in**  
* Track. Currently recording track - general name of the dialog.
* "Track: 1" is the default name of the track if you haven't set it before (you can change it with [Trip settings](https://osmand.net/docs/user/plugins/trip-recording#options-of-context-menu)). ???
* Graphs **Overview**, **Altitude**, **Speed**, info block with *Average altitude*, *Altitude range*, *Uphill*, *Downhill* and two **menus**: *Analyse on map* and *Options*. 
* There are menu items below the graph: *Overview*, *Track*, *Points*, *Options*.  
NOTE. By default, the *Track* menu appears when you tap on the widget.  

![whats_in_screen](@site/static/img/widgets/whats_in_screen.png)  

**Interactions with the graph**
- Zoom in/out. By default, the graph shows the full recorded path at the current time. You can use [two-finger movement](../map/interact-with-map#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right and left from the start of recording to the current moment.  
- Place a point on the graph. If you want to see information at a specific point on your trip recording, you can tap anywhere on the graph and a pointer with the values will appear. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.

**Graph**  

All values are indicated either for the whole route or only for the selected interval by scaling the graph.  

|  |
|------------|
| ***Additional information***. The right side of the graphs contains data about the highest, average and lowest values of the data related to a particular graph. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.  |
|  ![data](@site/static/img/widgets/tr_rec_ave.png) ![data](@site/static/img/widgets/tr_rec_alt.png) ![data](@site/static/img/widgets/tr_rec_speed.png)|
|***Overview*** This tab opens a graph with speed/altitude information on the distance and additional track data. *"Overview"* Information section: Distance, Time span, Start time, End time| 
|***Altitude*** This tab opens a graph with information about the altitude/grade of current trip recording and additional data about the trip. *"Altitude"* Information section: Average altitude, Altitude range, Uphill, Downhill|
|***Speed*** This tab opens with speed info on distance and additional track data.|*"Speed"* Information section: Average speed, Maximum speed, Time in motion, Distance corrected|

**Menu**  
You can read more information [here](https://osmand.net/docs/user/map/track-context-menu/).

1. ***Overview***  
- **Currently recording track** - general name of the dialog.  
- A list of information about currently recording track: *Distance*, *Uphill*, *Downhill*, *Altitude range*, *Average speed*, *Maximum speed*, *Time span*, *Time in motion*. This list is scrollable.   
- Direction and distance to the point on the track  /  Your current location (if you allowed).  
- Buttons: *Show on map* on/off and [Appearence](https://osmand.net/docs/user/map/tracks-on-map#track-appearance).  

&nbsp;
![Overview](@site/static/img/widgets/menu_overview.png)  

2. ***Track*** - described above.   

3. ***Points***  
You can add a point or more to the map or delete all. [Read more here](https://osmand.net/docs/user/map/track-context-menu/#waypoints-folder).  

&nbsp;
![Overview](@site/static/img/widgets/points_1.png) ![Overview](@site/static/img/widgets/points_2.png) ![Overview](@site/static/img/widgets/points_3.png)

4. ***Options***  
This is a separate screen without a map and a track with points:  
- Show on map - on/off.  
- Appearance.  
- [Analyze on the map](https://osmand.net/docs/user/map/tracks-on-map#analyze-track-on-map-android). *fixs rueng*  
- Analyze by intervals - overview of the current track recording segment  
- Share - gpx file  

&nbsp;
![Overview](@site/static/img/widgets/option_for3.png)  
 

</TabItem>

<TabItem value="ios" label="iOS">  

:::note
**Widgets**: *Duration*, *Uphill*, *Downhill* doesn't exist for iOS version of OsmAnd.  

:::  

**Settings and Operations**  

| | |
|------------|------------|
| Enable | <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,track_recording"/> |
| On Click | Starts / Stop track recording |


**What's in**  
Screen with Duration widget. You can tap the widget and more information about the track and the ability to interact with it will appear.

<!--On Click | Starts / Stop track recording-->
  

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png)  ![Trip recording widget](@site/static/img/widgets/tr_rec_wid_ios_tap.png) 

 

| | 
|------------|
|**Distance/Start-Stop**: shows the distance of the currently recorded trip. It is added automatically with the Trip recording enabled, but you can hide the widget in Configure screen menu. The widget has three different views: *Recording*, *Paused*, *Before recording*.| 
|![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_ios_rec.png)| 
|If *Show start dialog* is enable in Trip recording Plugin settings, then tapping on the inactive widget opens the Trip recording dialog. If it is disabled, it will immediately start recording.|  
|![Trip recording widget](@site/static/img/widgets/tr_rec_wid_ios_4.png) |
|**NOTE**. If *Show start dialog* is disabled in Trip recording Plugin settings and widget is activ, then tapping on it opens the Trip recording dialog, anyway.|  

**Interactions with the graph**
- Zoom in/out. By default, the graph shows the full recorded path at the current time. You can use [two-finger movement](../map/interact-with-map#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right and left from the start of recording to the current moment.  
- Place a point on the graph. If you want to see information at a specific point on your trip recording, you can tap anywhere on the graph and a pointer with the values will appear. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.


### Dialog of Trip Recording

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_ios_tap.png) 

</TabItem>

</Tabs>  



<!--**Additional interactions with the dialog box after tapping any of the widgets.**  
- If you want to close the dialog box, press **X** .  
- If you gesture to minimize the dialog box, the general name and menu items remain. If you tap on the menu items, the dialog box will expand as before.  
- You can open the dialog box full screen by swiping up or close it completely by swiping down.-->


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
