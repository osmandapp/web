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

<InfoIncompleteArticle/>

Trip Recorder plugin is a special tool designed to record your routes, movements, and workouts. You can reuse, modify, update, and share your recordings with friends.

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
2. Configure [Trip recording](#profile-settings) settings for each [profile](./index.md#plugin-settings).  
3. If needed, add [Trip recording widgets](#widgets) to the screen.   

After setup is complete, you can make new records, display and manage tracks on the map by changing their appearance, editing the route, adding waypoints, etc.   

## Record new track 

The [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) is used to create new records.  

- To start recording, tap the *Distance/Start-Stop widget*, and confirm in the opened Start dialog, if it is enabled. Otherwise, confirmation is not needed, and the recording will start automatically.  
- When in progress, the *Distance/Start-Stop widget* is colored in red.  
- *Distance/Start-Stop widget* is colored green during in progress and when online recording is enabled.  
- To finish recording, tap the *Distance/Start-Stop widget* again and confirm the respective option in the Trip recording dialog. In addition, there are a few other options that you can use. All options are described in detail for iOS and Android versions.

### Start


![Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and.png) ![Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios.png)


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

There are four options for starting a recording: 

- Using the [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets). 
- Use the Trip recording option in the menu.
- Use the RECORD option in [My Places](../personal/myplaces.md): *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.  
- As an application launcher

</TabItem>

<TabItem value="ios" label="iOS">

There are two options for starting a recording:

- Using the [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets).
- Using the <Translate ios="true" ids="track_recording_name"/> option in [My Places](../personal/myplaces.md): *<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*.

</TabItem>

</Tabs>

#### START DIALOG 
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Start recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

In the opened Start dialog, it is possible adjust the following recording settings before confirming the start of the recording by tapping **Start**:

- **Show on map** - if enabled, shows the detected points on the map.
- **Appearance** - the *Line* icon - opens the [Track Appearance options](../map/tracks-on-map.md#track-appearance) to adjust visual representation of how the track looks like when it is displayed on the map.
- **Logging interval** - to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track.
- **Settings** - opens the Trip recording settings for the currently opened profile.  
 
</TabItem>

<TabItem value="ios" label="iOS">

![Start recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png) ![Finish recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_2.png)  

In any case, the Start dialog opens, unless the **<Translate ios="true" ids="track_interval_remember"/>** option is toggled on, in which you can adjust the following recording settings before confirming the start of the recording by tapping **OK**:

- **Logging interval** - to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track.
- **Remember my choice** - removes the Start dialog, so that recording to start without confirmation. Once toggled on, the Start dialog will be disabled, and can only reappear after restarting Trip recording plugin.
- **Show on map** - if enabled, shows detected points on the map. 

 
</TabItem>

</Tabs>

:::info TROUBLESHOOTING

For any troubleshooting details, refer to: [Track recording issues](../troubleshooting/track-recording-issues)  
:::


### Start as launcher (Android)

Aanother one, use the *Start Recording icon* on the device screen as shown in the examples in the figures below. Long-tap to open the icon's context menu with an option to Start Recording. Long-tap an option from the icon's context menu, to add it as an individual icon to the screen of the device. 

![Icon's context menu](@site/static/img/plugins/trip-recording/and_open_from_icon.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

### Stop / Save / Pause

Actions like stop, pause, erase, 



#### STOP RECORDING ANDROID

Tap the [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets), or the Trip recording option in the menu again, to stop recording, and/or to do any of the following extra options in the Trip recording dialog:

- **Show on map** - if enabled, to show the detected points on the map.
- **Appearance** - the *Line* icon - to open and work with the [Track Appearance options](../map/tracks-on-map.md#track-appearance) to adjust visual representation of how the track looks like when it is displayed on the map.
- **Start time** / **End Time** - the timestamps of the first detected point and the last detected point.
- **Close** - to close the Trip recording dialog and continue recording. 
- **Pause** - to take a break, and resume recording after a while.
- **Finish** - to stop the recording. The track will automatically be put for storing in: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*. 
- **Options** - to reach out for the following options in the context menu: 
    - **Clear recorded data** - to delete, if any accumulated unsaved data.
    - **Stop without saving** - to stop recording without saving a track.
    - **Stop online tracking** - to stop sending recorded points to the specified online resource.
    - **Save and continue** - to save the track for storing and continue recording further. 
    - **Start new segment** - to start a new segment of the current track. The number of segments are available for analysis with the [context menu of the track](../map/track-context-menu.md).

#### STOP RECORDING IOS

To stop recording, or to do any of the following options, tap the [Distance/Start-Stop widget](../widgets/info-widgets.md#-trip-recording-widgets) again, and in the opened Track recording dialog, select:

- **Stop recording** - to stop the recording. The track will automatically be put for storing in: *<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*. 
- **Show Info** - opens the *Current recording track* [context menu](../map/track-context-menu.md) with options to manage the track and change its [appearance](../map/tracks-on-map.md#track-appearance), i.e. how it looks on the map.   
- **Start new segment** - starts a new segment of the current track. The number of segments are available for analysis with the [context menu of the track](../map/track-context-menu.md).
- **Save current track** - saves the track for storing and asks if to continue to record, or stop. 



## Currently recorded track

### Overview recorded information

To view information about  currently recorded track access a dialog with graphs via widget.

On the graph you can see the information about distance, altitude, slope angle. The graph can be scaled.   


**Description of trip recording information dialog box**   
  
* Track. Currently recording track - general name of the dialog.
* "Track: 1" is the default name of the track if you haven't set it before (you can change it with [Trip settings](https://osmand.net/docs/user/plugins/trip-recording.md#options-of-context-menu)). ???
* Graphs **Overview**, **Altitude**, **Speed**, info block with *Average altitude*, *Altitude range*, *Uphill*, *Downhill* and two **menus**: *Analyse on map* and *Options*. 
* There are menu items below the graph: *Overview*, *Track*, *Points*, *Options*.  
NOTE. By default, the *Track* menu appears when you tap on the widget.  

![whats_in_screen](@site/static/img/widgets/whats_in_screen.png)  

**Interactions with the graph**
- Zoom in/out. By default, the graph shows the full recorded path at the current time. You can use [two-finger movement](../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. You can also move the graph to the right and left from the start of recording to the current moment.  
- Place a point on the graph. If you want to see information at a specific point on your trip recording, you can tap anywhere on the graph and a pointer with the values will appear. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.  


**Graph**  
All values are indicated either for the whole route or only for the selected interval by scaling the graph.  

|  |
|------------|
| ***Additional information***. The right side of the graphs contains data about the highest, average and lowest values of the data related to a particular graph. *Overview* - distance and speed, *Altitude* - elevation and grade, *Speed* - speed in current moment.  |
|***Overview*** This tab opens a graph with speed/altitude information on the distance and additional track data. *"Overview"* Information section: Distance, Time span, Start time, End time| 
|    ![data](@site/static/img/widgets/tr_rec_ave.png)|
|***Altitude*** This tab opens a graph with information about the altitude/grade of current trip recording and additional data about the trip. *"Altitude"* Information section: Average altitude, Altitude range, Uphill, Downhill| 
| ![data](@site/static/img/widgets/tr_rec_alt.png) |
|***Speed*** This tab opens with speed info on distance and additional track data.|*"Speed"* Information section: Average speed, Maximum speed, Time in motion, Distance corrected|
| ![data](@site/static/img/widgets/tr_rec_speed.png) |

**Menu**  
You can read more information [here](../map/track-context-menu.md).

- ***Overview***  
  - **Currently recording track** - general name of the dialog.  
  - A list of information about currently recording track: *Distance*, *Uphill*, *Downhill*, *Altitude range*, *Average speed*, *Maximum speed*, *Time span*, *Time in motion*. This list is scrollable.   
  - Direction and distance to the point on the track  /  Your current location (if you allowed).  
  - Buttons: *Show on map* on/off and [Appearence](../map/tracks-on-map.md#track-appearance).  


![Overview](@site/static/img/widgets/menu_overview.png)  

- ***Track*** - described above.   
- ***Points***  
You can add one or more track points to the current track map or delete them all. [Read more here](../map/track-context-menu.md#waypoints-folder).  

![Overview](@site/static/img/widgets/points_1.png) ![Overview](@site/static/img/widgets/points_2.png) ![Overview](@site/static/img/widgets/points_3.png)

- ***Options***  
This is a separate screen without a map and a track with points:  
  - Show on map - on/off.  
  - Appearance.  
  - [Analyze on the map](../map/tracks-on-map.md#analyze-track-on-map-android).
  - Analyze by intervals - overview of the current track recording segment.  
  - Share - gpx file.    


![Overview](@site/static/img/widgets/option_for3.png)


 

### Show on the map

Access context menu Tracks to display currently recorded track.


### Recorded GPX file

GPS data consists of the latitude and longitude of your location at a specific point in time. If they are recorded in a file as a set of location points arranged in a specific order, the file stores the progress of your journey. Each point in the file also stores coordinates, speed, bearing and elevation. When you place points from the file on the map, your journey is visualized as a track with a fixed start and destination.  
The location points are recorded into a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), according to the following structure: *file > track > segments > points*, where:

- One point has a number of attributes: coordinates, speed, altitude, heading.
- Points are grouped into tracks.
- One track is generated by one recording, i.e. one start and one stop actions.
- With auto-split after gaps, the next point after the gap makes up a new segment.
- Both segments and tracks are identified with the Start and Finish icons on the map. 
- Both tracks and segments are recorded into a file.

Below is an example of a point and a segment in the track.

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

*Trip recording can be configured for each specific profile*, as the parameters may be different depending on the character of the movement, for example, to determine the location of a car driver, a cyclist or a Nordic walker. All [profiles](../personal/profiles.md) are configured in the general [settings](../start-with/first-steps.md#how-to-manage-your-settings) of the entire app. First, you need to select the required profile, and then among other profile settings find the section dedicated to Trip recording. 

Depending on the character of your movement: driving, cycling, horseback riding, skiing, etc., you may need to make some adjustments to the way you capture and record location points in the file: few, too many, spacing, and others to make the end result look smooth and usable.

There are recording parameters that you can adjust depending on the context. For example, the time interval, how often the Location module should detect your location; whether to record points or wait for the next detection result if the detection results are almost the same; if it is acceptable to generate separate segments within the same track in case of gaps, and so on. Use the descriptions of the available parameters specified for the corresponding Android or iOS version of the application.  

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
 

To open Trip recording widgets options follow:  [Menu → Configure screen → Widgets → Left / Right panel → Trip recording](https://osmand.net/docs/user/widgets/info-widgets.md#-trip-recording-widgets)  

 
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


:::note
**Widgets**: *Duration*, *Uphill*, *Downhill* doesn't exist for iOS version of OsmAnd.  

:::  

</TabItem>

</Tabs> 


