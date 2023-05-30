---
sidebar_position: 3
title:  Trip recording
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

Trip recording (Android) / Track recording (iOS) plugin is a special tool designed to record your routes, movements, and workouts. This feature allows you to reuse, modify, update, and share your tracks with friends.  

Trip recording plugin is used to create new tracks, display recorded tracks on the map and work with existing records. It helps you analyze data such as speed, ascents, descents, or terrain features during your trip. The route can be recorded while navigating or simply on the go.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Recorded trip in Android](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recorded trip in iOS](@site/static/img/plugins/trip-recording/trip_rec_pl_setup_ios_2.png)

</TabItem>

</Tabs>


## Setup 

To start recording tracks, you need to make the following settings:  
1. [Enable](../plugins/index.md#enable--disable) the **Trip recording plugin**.  
2. Configure [Trip recording](#recording-settings) settings for the required [profile](../personal/profiles.md).  
3. If needed, add [Trip recording widgets](#widgets) to the screen.   

After setup is complete, you can make new records, display and manage tracks on the map, change their appearance, edit the route, add waypoints, etc.   


## New track recording 

![Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png) 

In the OsmAnd app with the Trip recording plugin, you can start recording your track using several suggested options.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Usе the [Distance/Start-Stop widget](#distance-start-stop). 
- Use the **Trip recording** item in the Main menu of the OsmAnd app: *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.
- Use the **RECORD** option in [My Places](../personal/tracks.md#my-places-menu) section of the Main menu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.  
- Use an [application launcher](#launcher-android).

</TabItem>

<TabItem value="ios" label="iOS">

- Use the [Distance/Start-Stop widget](#distance-start-stop).
- Use the **<Translate ios="true" ids="shared_string_currently_recording_track"/>** option in [My Places](../personal/tracks.md#my-places-menu) section of the Main menu: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*.

</TabItem>

</Tabs>

:::tip Note
For this options to work properly, we recommend that you allow OsmAnd to get the [precise location](../start-with/first-steps.md#permission-to-access-the-location) of your device.  
:::


### Start a Dialog

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Start dialog opens, if the **<Translate android="true" ids="show_start_dialog"/>** option is enabled in the settings section of the Start dialog box.

![Start recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

:::note
- The **Line** icon opens the [Track Appearance options](../map/tracks-on-map.md#track-appearance), which allow you to customize the display of the track on the map. When a track is saved, the selected appearance is saved with the track, and the next time it is turned on, it will start displaying the same way it did the previous time.  
- **Logging interval** is used to set the frequency of the requests sent to the GPS sensor to detect and place a new point on the track route.
- The **Settings** menu allows you to adjust the recording parameters. See [Trip recording](#recording-settings) settings for more information.
:::

</TabItem>

<TabItem value="ios" label="iOS">

Start dialog opens, if the **<Translate ios="true" ids="track_interval_remember"/>** option is not toggled on.

![Start recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png) 

:::note
- **Logging interval** is used to set the frequency of the requests sent to the GPS sensor to detect and place a new point on the track route.  
- If **Remember my choice** is toggled on, all following track recordings automatically start, without additional settings or the OK button. Before you record a new track, you need to restart the Trip recording plugin for the settings to start displaying again.
:::
 
</TabItem>

</Tabs>

:::warning TROUBLESHOOTING  
Your *iOS device* may temporarily **suspend or stop apps** from running in the background.  
For more information about all troubleshooting, read the [*Track recording*](../troubleshooting/track-recording-issues) in the appropriate documentation section. 
:::


### Launcher (Android)

To start a new track recording you can use the Start Recording icon on the screen of your Android device, as shown in the screenshots below, for example. A long press on the icon opens a context menu with the Start Recording option.

![Icon's context menu](@site/static/img/plugins/trip-recording/and_open_from_icon.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

:::note
Use long press on *Start recording* in the icon context menu to add it as a separate icon to the device screen.
:::  


## Сurrent track recording

:::tip Stop / Save / Pause
To stop the recording, tap on the relevant button in the [Distance/Start-Stop widget](#distance-start-stop) widget dialog box, for the Android version you can also stop the recording by tapping the Main menu item *Trip recording*.
:::

### Overview screen

The Android version of the OsmAnd app has a separate menu for the *Track recording* context menu, the iOS version has a track context menu *Currently recording track*.   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![overview](@site/static/img/plugins/trip-recording/overview-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finish recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)   

</TabItem>

</Tabs>

The graphs which are built while recording the current track, show visually the information about the track. All values on the graph are indicated either for the whole route or only for the selected interval (when scaling). The right(Android)/left(iOS) side of the graphs contains data about the highest, average and lowest values. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.  

:::note  
The graph can be scaled.   
- You can use [two-finger movement](../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. 
- If you want to see information at a specific point, you can tap on the graph and a pointer with the values will appear.  
:::

| |  
| ------------- |   
|***Overview***. This tab opens a graph with speed/altitude information on the distance and additional track data.  The information section *"Overview"* contains the values: Distance, Time span, Start time, End time. (Android / iOS versions below) |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_ave-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_ave-ios.png) |
| ***Altitude***. This tab opens a graph with information about the altitude/grade of current trip recording and additional data about the trip. The information section *"Altitude"* contains the values: Average altitude, Altitude range, Uphill, Downhill. (Android / iOS versions below) |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_alt-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_alt-ios.png) |
| ***Speed***. This tab opens with speed info on distance and additional track data. The information section *"Speed"* contains the values: Average speed, Maximum speed, Time in motion, Distance corrected. (Android / iOS versions below) |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_speed-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_speed-ios.png) |

:::info 
Here you can find more helpful information about [Tracks context menu](../map/track-context-menu.md#options), about [Appearence](../map/tracks-on-map.md#track-appearance) of the track on map and about adding [track points](../map/track-context-menu.md#waypoints-folder) to the current track. To make the necessary changes to the track, such as *Rename track*, use the [Options](https://osmand.net/docs/user/map/track-context-menu#options) tab of the Tracks Context menu.  
:::


### Show on the map

You can choose which tracks are displayed on the map and which are not. To do this, you can use the option *Show on map* or *Visible on map* in *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*, or use *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_gpx_files"/>*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![show_tr_onmap_andr_2](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![show_tr_onmap_ios_2](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_2.png) 

</TabItem>

</Tabs>


### Recorded GPX file

OsmAnd records tracks in a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) according to the following structure: *file > track > segments > points*.

- One point has a number of attributes: coordinates, speed, altitude, heading.
- Points are grouped into tracks.
- The next point after the gap makes up a new segment.
- Both segments and tracks are shown with the Start and Finish icons on the map.

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)

| Parameter | Description | 
| --- | --- |
| `trkpt` | **Point** shows the detected geographical location of the user. Every point is provided with the latitude and the longitude as base attributes of the detected location. | 
| `trkseg` | **Segment** groups points between gaps detected as absence of any movement within one recording. |
| `lat` | **Latitude** is one of the geographical coordinates to identify the location with. | 
| `lon` | **Longitude** is one of the geographical coordinates to identify the location with. |
| `ele` | **Elevation** is the hight of the point above the sea, calculated in meters. |
| `time` | **Timestamp** is the date and time of when the point was recorded. |
| `hdop` | **HDOP** is one of the terms of GPS accuracy, horizontal accuracy, calculated in meters, abbrev. from *Horizontal Dilution of Precision*, determined as the error caused by the relative position of the GPS satellites. |
| `speed` | **Speed** is the rate, in meters per second, at which the user is detected to be moving. |
| `heading` | **Heading** is the direction to where the front panel of the vehicle/device is pointing. The heading direction is calculated in degrees and determined with the [angle](https://en.wikipedia.org/wiki/Heading_(navigation)) between the direction the front panel is pointing and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |


## Recording settings

*The Trip recording plugin is configured for each profile separately*, as parameters may vary depending on the nature of your movement ( for example, driving a car, cycling, Nordic walking activities). To make the final result look smooth and usable, you may need to make some adjustments to the way you capture and record location points to the file: few, a lot, with gaps, etc. All [profiles](../personal/profiles.md) are configured in the global [settings](../personal/global-settings.md) of the entire app. First, you need to select the required profile, and then among other profile settings find the section dedicated to Trip recording.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/estab_opt_andr.png)

| Parameter | Description |
|---|---|
| **Show start dialog** | If enabled, you can select the necessary settings before you start recording, and then click Start. If disabled, the recording starts automatically. |
| **Auto-record track during navigation** | If enabled, the track is automatically recorded during navigation and auto-saved in *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> tab*. *Note: Trip recording uses the battery energy and continues to run in the background when the screen is closed.* |  
| **General logging interval** | This is the frequency of location requests after which location points are recorded in the track. The default value is 5 seconds. Options from 0 seconds to 5 minutes are available. |
| **Minimum displacement** | This filter allows you to avoid additional data recording when there is little or no movement detected. It also improves the appearance of the tracks on the map without additional processing. *Side effects*: Rest periods are not recorded at all or are recorded by one point. Minor movements (e.g., to the side of the road to mark a possible turn in your path) may also be filtered out. NOTE: Your file will contain less information for post-processing, and at the same time can potentially save GPS artifacts caused by bad reception or chipset effects. *Recommendation*: Set 5 meters displacement if you don't want to record minor details of your route and you don't need additional data about your rest period. |
| **Minimum accuracy** | This filter allows you to record only points measured with a minimum \"accuracy\" indication (in meters/feet, as reported by Android for your chipset). Accuracy is the proximity of measurements to the true position, and is not directly related to precision, which is the scatter of repeated measurements. *Side effect*: As a result of filtering by accuracy, points may be entirely missing for e.g. below bridges, under trees, between high buildings, or with certain weather conditions. *Recommendation*: It is hard to predict what will be recorded and what not, it may be best to turn this filter off. *Remark*: If GPS had been off immediately before a recording, the first point measured may have a decreased accuracy,so in our code we may want to wait a second or so before recording a point (or record the best of 3 consecutive points, etc.), but this is not yet implemented. |
| **Minimum speed** | This is a low-speed cut-off filter to not record points below a certain speed. This may make recorded tracks look smoother when viewed on the map. *Side effect*: Your track will be missing all sections where the minimum speed criterion was not met (e.g. where you push your bike up a steep hill). Also, there will be no information about periods at rest, like breaks. This has effects on any analysis or post-processing, like when trying to determine the total length of your trip, time in motion, or your average speed. *Recommendation*: Try using the motion detection via the logging minimum displacement filter (B) first, it may produce better results, and you will lose less data. If your tracks remain noisy at low speeds, try non-zero values here. Please note that some measurements may not report any speed value at all (some network-based methods), in which case you would not record anything. *Remark*: speed > 0 check: Most GPS chipsets report a speed value only if the algorithm determines you are in motion, and none if you are not. Hence using the > 0 setting in this filter in a sense uses the motion detection of the GPS chipset. But even if not filtered here at recording time, we still use this feature in our GPX analysis to determine the Distance corrected, i.e. the value displayed in that field is the distance recorded while in motion. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Prevent standalone logging** | If enabled, Trip recording will automatically stop, when the OsmAnd app is stopped, and the notification bar of Android shows no indication of OsmAnd's working in the background. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points to. It is determined with the angle between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **Track storage folder** | All tracks are stored in the <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab. You can set the internal structure of this folder by selecting one of the following options: 1) Record all tracks to the *Rec* folder; 2) Group all tracks into appropriate folders of the month, such as *Rec/yyyyy-mm*. |
| **Notification** | If enabled, trip recording messages show up in the system notification area of the device. The notification area is opened with a swipe from the top of the screen to the bottom, and closed with a swipe in the opposite direction. The messages are intended to notify about all start/stop actions of the trip recording functionality and especially useful in case of the enabled **Auto-record track during navigation** option, as well as when the Start recording dialog is disabled and the recording starts silently on tap of the Distance/Start-Stop widget. Once a message is sent, it is visible in the notification area. A sent message can be cleared, if not needed. The visibility of a sent uncleared message does not depend on the status of the app: whether it runs in the background, foreground, or closed. | 
| **Online tracking** | It is real-time monitoring of your current location. If the option is enabled and the recording is in progress, the Distance/Start-Stop (REC) widget turns green instead of red, and each point is transmitted to a specified URL. The **Web address** field is for entering the URL using the parameter syntax: lat={0}, lon={1}, timestamp={2}, hdop={3}, altitude={4}, speed={5}, bearing={6}. The **Tracking Interval** parameter is used to determine the frequency of sending location points. The options can be selected from 0 seconds to 5 minutes. The **Time Buffer** parameter sets the period of time that location points are saved if there is no Internet connection. |
| **Tracks** | This is a quick re-direction to the folder: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*. |
| **Reset plugin settings to default** | You can reset all profile settings to the default ones that you had when you installed the application. |
| **Copy from another profile** | You can copy the Trip recording plugin settings from another profile. |  


</TabItem>

<TabItem value="ios" label="iOS">


![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/estab_opt_ios.png)


| Parameter | Description |
|---|---|
| **General logging interval** | This is the frequency of location requests after which location points are recorded in the track. The default value is 5 seconds. Options from 0 seconds to 5 minutes are available. The *Always ask* option requires that the interval be set anew each time you start recording. |
| **Minimum displacement** | This filter allows you to avoid additional data recording when there is little or no movement detected. It also improves the appearance of the tracks on the map without additional processing. *Side effects*: Rest periods are not recorded at all or are recorded by one point. Minor movements (e.g., to the side of the road to mark a possible turn in your path) may also be filtered out. NOTE: Your file will contain less information for post-processing, and at the same time can potentially save GPS artifacts caused by bad reception or chipset effects. *Recommendation*: Set 5 meters displacement if you don't want to record minor details of your route and you don't need additional data about your rest period. |
| **Minimum accuracy** | This filter allows you to record only points measured with a minimum \"accuracy\" indication (in meters/feet, as reported by Android for your chipset). Accuracy is the proximity of measurements to the true position, and is not directly related to precision, which is the scatter of repeated measurements. *Side effect*: As a result of filtering by accuracy, points may be entirely missing for e.g. below bridges, under trees, between high buildings, or with certain weather conditions. *Recommendation*: It is hard to predict what will be recorded and what not, it may be best to turn this filter off. *Remark*: If GPS had been off immediately before a recording, the first point measured may have a decreased accuracy,so in our code we may want to wait a second or so before recording a point (or record the best of 3 consecutive points, etc.), but this is not yet implemented. |
| **Minimum speed** | This is a low-speed cut-off filter to not record points below a certain speed. This may make recorded tracks look smoother when viewed on the map. *Side effect*: Your track will be missing all sections where the minimum speed criterion was not met (e.g. where you push your bike up a steep hill). Also, there will be no information about periods at rest, like breaks. This has effects on any analysis or post-processing, like when trying to determine the total length of your trip, time in motion, or your average speed. *Recommendation*: Try using the motion detection via the logging minimum displacement filter (B) first, it may produce better results, and you will lose less data. If your tracks remain noisy at low speeds, try non-zero values here. Please note that some measurements may not report any speed value at all (some network-based methods), in which case you would not record anything. *Remark*: speed > 0 check: Most GPS chipsets report a speed value only if the algorithm determines you are in motion, and none if you are not. Hence using the > 0 setting in this filter in a sense uses the motion detection of the GPS chipset. But even if not filtered here at recording time, we still use this feature in our GPX analysis to determine the Distance corrected, i.e. the value displayed in that field is the distance recorded while in motion. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points to. It is determined with the angle between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **Auto-record track** | If enabled, the track is automatically recorded during navigation and auto-saved in *<Translate ios="true" ids="shared_string_menu,menu_my_places,shared_string_gpx_tracks"/> tab*. *Note: Trip recording uses the battery energy and continues to run in the background when the screen is closed.* |
| **Logging interval during navigation** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded automatically via the enabled **Auto-record track** option. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Tracks** | This is a quick re-direction to the folder: <Translate ios="true" ids="shared_string_menu,my_places,shared_string_gpx_tracks"/> tab. |
| **Reset plugin settings to default** | You can reset all profile settings to the default ones that you had when you installed the application. |   

</TabItem>

</Tabs>


##  Widgets  

You can use widgets to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill* for the Android version and for **iOS version only *Distance/Start-Stop*.**   

To start using *Trip recording widgets*, you need to make all of the following settings:
- [Enable the plugin](../start-with/first-steps.md#how-to-configure-plugins). 
- Configure Trip recording for the required [profile](../personal/profiles.md).
- Add the necessary **Trip recording widgets** to the screen. This setting is **individual for each profile**.  


### Add Recording widget

The [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) is used to quickly check if you are recording or not, and for quick access to the recording settings and information about it. The widget is added automatically when the Trip recording plugin is enabled.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can delete or add the Distance/Start-Stop widget and [other widgets](../plugins/trip-recording#duration-uphill-downhill) by following:  
*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left"/>/<Translate android="true" ids="map_widget_right,shared_string_trip_recording"/>*.  

![Adding Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

You can delete or add widgets (Track recording - Distance, Track recording - Duration, Track recording - Uphill, Track recording - Downhill), by following:  
*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording"/>*, toggle on/off.  

![Adding Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/add_widg_ios.png)

</TabItem>

</Tabs>


  
### Distance (Start-Stop)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  
 

To open **Trip recording widgets** options follow: 

*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left"/>/<Translate android="true" ids="map_widget_right,shared_string_trip_recording"/>, <Translate android="true" ids="map_widget_trip_recording_distance"/>*  

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-1.png) 
![Finish recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_2.png)    

When the selected widgets appear on the map, you can tap any of them and more information about the track and the ability to interact with it will appear. In general, the **Trip recording plugin** for *Android* consists of **4 widgets**. *Distance/Start-Stop* is the main widget, when you tap it opens the [Trip recording dialog](../plugins/trip-recording#start-dialog). The *Duration*, *Uphill* and *Downhill* widgets are more for information.   

| | 
|------------|
|**Distance/Start-Stop**: shows the distance of the current trip recording. It is added automatically with the Trip recording plugin enabled, but you can hide the widget in Configure screen menu. The widget has 3 different views: *Recording*, *Paused*, *Inactive*. | 
|![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png)| 
|If the Trip Recording Plugin settings have the *Show Startup Dialog* option enabled, tapping on the inactive widget will open the [Trip recording dialog](../plugins/trip-recording#start-dialog). If it is disabled, the recording will start immediately.|  

:::note
If the option *Show Startup Dialog* is disabled in the Trip Recording Plugin settings and the widget is active, tapping on it will open the Trip Recording Dialog anyway.
:::

 
</TabItem>

<TabItem value="ios" label="iOS">  

To open **Distance/Start-Stop** widget options follow:  
*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording,map_widget_trip_recording_distance"/>*    

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png) 

The widget shows the distance of the currently recorded trip. It is added automatically with the Trip recording enabled, but you can hide the widget in Configure screen menu. If the *Show start dialog* is disabled in the Trip recording Plugin settings and the widget is active, then tapping on it opens the Trip recording dialog, anyway.  

</TabItem>

</Tabs>  


### Duration, Uphill, Downhill

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left"/>/<Translate android="true" ids="map_widget_right,shared_string_trip_recording"/>, <Translate android="true" ids="map_widget_trip_recording_duration"/>, <Translate android="true" ids="map_widget_trip_recording_uphill"/>, <Translate android="true" ids="map_widget_trip_recording_downhill"/>*

| | 
|------------|
|**Duration**: shows the time, in hours and minutes, of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Uphill**: shows the sum of all the climbs of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)| 
|**Downhill**: shows the sum of all descents of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|   
 
:::note
If you have several widgets selected, *Duration*, *Uphill*, or *Downhill*, you don't need to switch between them by closing the dialog box that opens. The dialog box is the same for all these widgets.
:::

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording"/>, <Translate ios="true" ids="map_widget_trip_recording_duration"/>, <Translate ios="true" ids="map_widget_trip_recording_uphill"/>, <Translate ios="true" ids="map_widget_trip_recording_downhill"/>*  

| | 
|------------|
|**Duration**: shows the time, in hours and minutes, of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Uphill**: shows the sum of all the climbs of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)| 
|**Downhill**: shows the sum of all descents of the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|   
 
:::note
If you have several widgets selected, *Duration*, *Uphill*, or *Downhill*, you don't need to switch between them by closing the dialog box that opens. The dialog box is the same for all these widgets.
:::

</TabItem>

</Tabs> 
