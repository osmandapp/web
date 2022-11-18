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

<InfoIncompleteArticle/>

Trip recording (Android) / Track recording (iOS) plugin is a special tool designed to record your routes, movements, and workouts. Thanks to this feature you can reuse, modify, update, and share your tracks with friends.

## Overview

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

1. Enable the [Trip recording plugin](../start-with/first-steps.md#how-to-configure-plugins).  
2. Configure [Trip recording](#recording-parameters) parameters for the required [profile](../personal/profiles.md).  
3. If needed, add [Trip recording widgets](#widgets) to the screen.   

After setup is complete, you can make new records, display and manage tracks on the map, change their appearance, edit the route, add waypoints, etc.   

## Record new track 

There are several options to start a new recording:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Usе the [Distance/Start-Stop widget](#distance-start-stop). 
- Use the Trip recording option in the Main menu: *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> tab*.
- Use the RECORD option in [My Places](../personal/myplaces.md) section of the Main menu: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.  
- Use an [application launcher](#start-as-launcher-android).

</TabItem>

<TabItem value="ios" label="iOS">

- Use the [Distance/Start-Stop widget](#distance-start-stop).
- Use the <Translate ios="true" ids="track_recording_name"/> option in [My Places](../personal/myplaces.md): *<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*.

</TabItem>

</Tabs>

### Start

The [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) is used to create new recordings. The same functionality is provided by the Trip recording tab in the Main menu (Android only).   

![Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and.png) ![Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios.png) 
- To start a new recording, tap the *Distance/Start-Stop widget*, then confirm your choice in the opened [Start dialog](#start-dialog) (if it is enabled). If confirmation is disabled, recording will start automatically.  
- To finish recording, tap the *Distance/Start-Stop widget* again and confirm your choice in the Trip recording dialog. In addition, there are a few other options that can be used. 

:::note
*Distance/Start-Stop widget* is colored red during recording or when online recording is enabled.  
:::
#### START DIALOG 
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Start dialog opens, if the **<Translate android="true" ids="show_start_dialog"/>** option is enabled in the settings section of the Start dialog box.

![Start recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

:::note
- the **Line** icon opens the [Track Appearance options](../map/tracks-on-map.md#track-appearance), which allow you to customize the displaying of the track on the map.
- **Logging interval** is used to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track.
- in the **Settings** menu you can adjust parameters of your recording. For detailed information see [trip recording parameters](#recording-parameters).
:::

</TabItem>

<TabItem value="ios" label="iOS">

Start dialog opens, if the **<Translate ios="true" ids="track_interval_remember"/>** option is not toggled on.

![Start recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png) 

:::note
- **Logging interval** is used to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track.  
- **Remember my choice** - removes the Start dialog, recording starts without confirmation. Once toggled on, the Start dialog box will be disabled, and may appear again only after restarting the trip recording plugin.
:::
 
</TabItem>

</Tabs>

:::info TROUBLESHOOTING

For any troubleshooting details, refer to: [Track recording issues](../troubleshooting/track-recording-issues)  
:::

### Start as launcher (Android)

Another option to start a new recording is to use the *Start Recording icon* on the device screen, as shown in the examples in the figures below. A long press opens the context menu of the icon with the option to Start Recording.

![Icon's context menu](@site/static/img/plugins/trip-recording/and_open_from_icon.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

:::note
Use long press on *Start recording* in the icon context menu to add it as a separate icon to the device screen.
:::  

:::tip Stop / Save / Pause
To stop recording tap on the relevant button in dialog menu of Distance/Start-Stop widget or Trip recording option in the Main menu (Android only).
:::
## Currently recorded track


### Overview recorded information

To view information about currently recorded track tap on the trip recording widget. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![overview](@site/static/img/plugins/trip-recording/overview.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finish recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_2.png) ![whats_in_screen](@site/static/img/widgets/whats_in_screen.png) 

</TabItem>

</Tabs>

The graph shows information about distance, altitude, slope angle. 

:::note  
The graph can be scaled.   
- You can use [two-finger movement](../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. 
- If you want to see information at a specific point, you can tap on the graph and a pointer with the values will appear.  
:::

All values on the graph are indicated either for the whole route or only for the selected interval (while scaling). The right side of the graphs contains data about the highest, average and lowest values. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.
 
| Info |  Picture |
|:-------:|-----------------|
|***Overview*** This tab opens a graph with speed/altitude information on the distance and additional track data. *"Overview"* Information section: Distance, Time span, Start time, End time|  ![data](@site/static/img/widgets/tr_rec_ave.png)| 
|***Altitude*** This tab opens a graph with information about the altitude/grade of current trip recording and additional data about the trip. *"Altitude"* Information section: Average altitude, Altitude range, Uphill, Downhill|  ![data](@site/static/img/widgets/tr_rec_alt.png) |
|***Speed*** This tab opens with speed info on distance and additional track data. *"Speed"* Information section: Average speed, Maximum speed, Time in motion, Distance corrected|  ![data](@site/static/img/widgets/tr_rec_speed.png)|

:::info 
Here you can find more helpful information about [Tracks context menu](../map/track-context-menu.md), about [Appearence](../map/tracks-on-map.md#track-appearance) of the track on map and about adding [track points](../map/track-context-menu.md#waypoints-folder) to the current track.  
:::
### Show on the map

If the track displaying was previously disabled, you can enable it via *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/> tab*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![show_tr_onmap_andr_2](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![show_tr_onmap_ios_2](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_2.png) 

</TabItem>

</Tabs>

### Recorded GPX file

OsmAnd records tracks in a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), according to the following structure: *file > track > segments > points*, where:

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
| `heading` | **Heading** is the direction to where the front panel of the vehicle/device points to. The heading direction is calculated in degrees, and determined with the [angle](https://en.wikipedia.org/wiki/Heading_(navigation)) between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |

## Recording parameters

*Trip recording can be configured for each profile*, as the parameters may be different depending on the character of the movement (a car driver, a cyclist or a Nordic walker). You may need to make some adjustments to the way you capture and record location points in the file: few, a lot, with gaps etc. to make the end result look smooth and usable. All [profiles](../personal/profiles.md) are configured in the global [settings](../personal/global-settings.md) of the entire app. First, you need to select the required profile, and then among other profile settings find the section dedicated to Trip recording. 

Depending on the character of your movement: driving, cycling, horseback riding, skiing, etc., you may need to make some adjustments to the way you capture and record location points in the file: few, a lot, with gaps etc. to make the end result look smooth and usable.


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">


![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/estab_opt_andr.png)

| Parameter | Description |
|---|---|
| **Show start dialog** | If enabled, you need to tap the respective option in the Start dialog to start recording. Otherwise, the recording will start automatically. |
| **Auto-record track during navigation** | If enabled, the track is automatically recorded during navigation and saved to the respective folder in <Translate android="true" ids="shared_string_my_places"/>. Note that Track recording consumes the battery energy and continues to run in the background when the screen is closed. To use the battery efficiently, keep an eye on its status.| 
| **Logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded automatically via the enabled **Auto-record track during navigation** option. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **General logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded **manually via the Distance/Start-Stop widget**. The option is duplicated on the Start recording dialog. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **Minimum displacement** | Given that two points are detected being close to one another, when a minimum displacement option is established, one of the points is removed, if it is detected to be closer than the established interval. It is helpful for none, or little movement, so that not to generate redundant points, regardless of any motion detection. The displacement interval is disabled if the *Not selected* option is set. Otherwise, an interval is considered to be between 2 meters and 50 meters depending on the selected option. For example, 5 meters is used, when there is no need in capturing more precise data than that, and no need in capturing any data at all when not moving. |
| **Minimum accuracy** | Given that your location is identified via the built-in Location module of the device, when the longitude and latitude are calculated, the resulted location point can be detected accurately to a certain extend and expressed in meters/feet. It is possible to establish a minimum threshold between 1 meter and 50 meters for calculating the accuracy of the detected location in relation to the real location. A too small accuracy may cause the existence of blank spots on the track. It is recommended to decrease the accuracy, or disable at all by establishing the *Not selected* option, in case of uncertainty of the quality of the signals used for identifying the location, whether it is the GPS signal, and/or the mobile phone signal, and/or the Internet connection. For example, GPS signal can be weaker in circumstances when the route goes under the bridge, or between large trees, or high buildings, or in unfavorable weather conditions; and better with the growing number of GPS satellites. |
| **Minimum speed** | Given that at low speed the recorded track can be noisy, showing a lots of points on a small segment of the route, when motion is detected and the speed level is calculated to be less than the established threshold, then the points will not be recorded. To disable the minimum speed detection, set the *Not selected* option. To detect only motion to start recording points, set the *>0* option. The other options are recommended to use carefully and to avoid losing too many points, lower the minimum threshold. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Prevent standalone logging** | If enabled, Trip recording will automatically stop, when the OsmAnd app is stopped, and the notification bar of Android shows no indication of OsmAnd's working in the background. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points to. It is determined with the angle between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **Track storage folder** | Given that all tracks are stored in: <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab; it is possible to establish the internal structure of this folder by selecting one of the following two options: either 1. to record all tracks to the *Rec* folder; or 2. to group all tracks by respective month folders, such as: *Rec/yyyy-mm* |
| **Notification** | If enabled, trip recording messages show up in the system notification area of the device. The notification area is opened with a swipe from the top of the screen to the bottom, and closed with a swipe in the opposite direction. The messages are intended to notify about all start/stop actions of the trip recording functionality and especially useful in case of the enabled **Auto-record track during navigation** option, as well as when the Start recording dialog is disabled and the recording starts silently on tap of the Distance/Start-Stop widget. Once a message is sent, it is visible in the notification area. A sent message can be cleared, if not needed. The visibility of a sent uncleared message does not depend on the status of the app: whether it runs in the background, foreground, or closed. | 
| **Online tracking** | It is real-time monitoring of your current location. If the option is enabled and the recording is in progress, the Distance/Start-Stop widget is green, instead of red, and every point is transmitted to the specified URL. The **Web address** field is intended for entering the URL in the following format: *https://example.com?lat={0}&lon={1}&timestamp={2}&hdop={3}&altitude={4}&speed={5}* The **Tracking interval** parameter is used to determine the frequency of how often to send the location points. The options can be selected in the range from 0 second to 5 minutes. The **Time buffer** parameter establishes the period of time during which the points will be accumulated in case if the Internet connection is lost.|
| **Tracks** | This is a quick re-direction to the folder: <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab. |
| **Reset plugin settings to default** | Establishes default values for all of the above settings. |
| **Copy from another profile** | Opens a profile selection dialog from which you can copy the established configuration of Trip record values and then set them for the current profile. |


</TabItem>

<TabItem value="ios" label="iOS">


![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/estab_opt_ios.png)


| Parameter | Description |
|---|---|
| **General logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded **manually via the Distance/Start-Stop widget**. The option is duplicated on the Start recording dialog. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. The *Always ask* option requires the interval to be established anew on every start of the recording. |
| **Minimum displacement** | Given that two points are detected being close to one another, when a minimum displacement option is established, one of the points is removed, if it is detected to be closer than the established interval. It is helpful for none, or little movement, so that not to generate redundant points, regardless of any motion detection. The displacement interval is disabled if the *Not selected* option is set. Otherwise, an interval is considered to be between 2 meters and 50 meters depending on the selected option. For example, 5 meters is used, when there is no need in capturing more precise data than that, and no need in capturing any data at all when not moving. |
| **Minimum accuracy** | Given that your location is identified via the built-in Location module of the device, when the longitude and latitude are calculated, the resulted location point can be detected accurately to a certain extend and expressed in meters/feet. It is possible to establish a minimum threshold between 1 meter and 50 meters for calculating the accuracy of the detected location in relation to the real location. A too small accuracy may cause the existence of blank spots on the track. It is recommended to decrease the accuracy, or disable at all by establishing the *Not selected* option, in case of uncertainty of the quality of the signals used for identifying the location, whether it is the GPS signal, and/or the mobile phone signal, and/or the Internet connection. For example, GPS signal can be weaker in circumstances when the route goes under the bridge, or between large trees, or high buildings, or in unfavorable weather conditions; and better with the growing number of GPS satellites. |
| **Minimum speed** | Given that at low speed the recorded track can be noisy, showing a lots of points on a small segment of the route, when motion is detected and the speed level is calculated to be less than the established threshold, then the points will not be recorded. To disable the minimum speed detection, set the *Not selected* option. To detect only motion to start recording points, set the *>0* option. The other options are recommended to use carefully and to avoid losing too many points, lower the minimum threshold. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points to. It is determined with the angle between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **Auto-record track** | If enabled, whenever navigation is in progress, the track is recorded automatically, and saved to the respective folder in <Translate ios="true" ids="menu_my_places"/>. Please, note that Track recording consumes the battery energy, and continues to run in the background with the screen being closed. For efficient use of the battery life, check out its status. |
| **Logging interval during navigation** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded automatically via the enabled **Auto-record track** option. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Tracks** | This is a quick re-direction to the folder: <Translate ios="true" ids="menu,my_places,tracks"/> tab. |
| **Reset plugin settings to default** | Establishes default values for all of the above settings. |   

</TabItem>

</Tabs>



##  Widgets  

You can use them to view brief information about the track recording on the screen. Such as *Distance*, *Duration*, *Uphill* and *Downhill* for the Android version and for **iOS version only *Distance/Start-Stop*.**  

<!--**What the widget is most useful for.** You can see more detailed information and graphs (Overview, Altitude, Speed) of your trip. You can set needed parameters for recording and start record of your trip with one tap.  -->

To start using *Trip recording widgets*, you need to make all of the following settings:
- [Enable the plugin](../start-with/first-steps.md#how-to-configure-plugins). 
- Configure Trip recording for the required [profile](../personal/profiles.md) or configure a general setting for [all profiles](http://osmand.net/docs/user/plugins/trip-recording.md#establish-options).
- Add the necessary **Trip recording widgets** to the screen. This setting is *individual for each profile*.  


### Add Recording widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

The [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) is needed to quickly check whether the recording is in progress or not, and for quick access to the recording settings and information about it. The widget is added automatically when the Trip recording plugin is enabled. You can delete or add the Distance/Start-Stop widget and [other widgets](../plugins/trip-recording.md#trip-recording-widgets) by following: *<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,map_widget_right,shared_string_trip_recording"/>*.  

![Adding Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

[Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) is needed to quickly check whether the recording is in progress or not, and for quick access to the recording settings and information about it. The widget is added automatically when Trip recording plugin is enabled. You can delete or add Distance/Start-Stop widget, by following: *<Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,track_recording"/>*, toggle on/off.  

![Adding Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/add_widg_ios.png)

</TabItem>

</Tabs>


  
### Distance (Start-Stop)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  
 

To open Trip recording widgets options follow: Menu → Configure screen → Widgets → Left / Right panel → Trip recording  

 
When the selected widgets appear on the map, you can tap any of them and more information about the track and the ability to interact with it will appear. In general, **Trip recording plugin** for *Android* consists of **4 widgets**. *Distance/Start-Stop* is the main widget, when you tap it opens [Trip recording dialog](../plugins/trip-recording.md#create-new-track). The *Duration*, *Uphill* and *Downhill* widgets are more for information.   



![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-1.png) 
![Finish recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_2.png)   



| | 
|------------|
|**Distance/Start-Stop**: shows the distance of the currently recorded trip. It is added automatically with the Trip recording enabled, but you can hide the widget in Configure screen menu. The widget has 3 different views: *Recording*, *Paused*, *Inactive*.  <!--While recording, it displays the distance to the track being recorded.-->| 
|![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png)| 
|If *Show start dialog* is enable in Trip recording Plugin settings, then tapping on the inactive widget opens the [Trip recording dialog](../plugins/trip-recording.md#create-new-track). If it is disabled, it will immediately start recording.|  
|**NOTE**. If *Show start dialog* is disabled in Trip recording Plugin settings and widget is active, then tapping on it opens the Trip recording dialog, anyway.|  
**Details**  
- Name of the dialog box - *Trip recording*  
- Status: *Recording / On pause*    
- Buttons: *Show on map* on/off and [Appearence](https://osmand.net/docs/user/map/tracks-on-map.md#track-appearance).  
- Graph  
- Information box. There is a different list for each of the graphs.  
- Menu: *Close*, *Pause/Resume*, *Finish*, *Options*.  
 
</TabItem>

<TabItem value="ios" label="iOS">  

To open **Distance/Start-Stop** widget options follow: *<Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,track_recording"/>*   

Widget shows the distance of the currently recorded trip. It is added automatically with the Trip recording enabled, but you can hide the widget in Configure screen menu. If *Show start dialog* is disabled in Trip recording Plugin settings and widget is active, then tapping on it opens the Trip recording dialog, anyway.  
>**NOTE**. For detailed information about [Distance/Start-Stop widget](../plugins/trip-recording.md#create-new-track), refer to the respective section of the current documentation.  

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png)

</TabItem>

</Tabs>  

### Duration, uphill, downhill

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

| | 
|------------|
|**Duration**: shows time of track recording the duration in minutes/hours of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Uphill**: shows the sum of all the climbs of the currently recorded trip. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)| 
|**Downhill**: shows the sum of all descents of the current recorded trip.|
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|  
 

If you have several widgets selected, *Duration*, *Uphill*, or *Downhill*, you don't need to switch between them by closing the dialog box that opens. The dialog box is the same for all these widgets.  

</TabItem>

<TabItem value="ios" label="iOS">  

<InfoAndroidOnly />

</TabItem>

</Tabs> 
