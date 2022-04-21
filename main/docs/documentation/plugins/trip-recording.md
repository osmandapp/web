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

To tell a story of where you have been, GPS data, as latitude and longitude of your location, can be recorded and stored in a file, and then re-used, improved, added with waypoints, provided for navigation, shared with friends, etc.


## Overview

GPS data consists of the latitude and longitude of your location at a specific moment in time. If it is recorded into a file as a set of location points in a particular order, the file stores the course of your trip. Among the location data, every point in the file also stores the coordinates, speed, and the altitude as the elevation level above the sea. By placing the points from the file onto the map, the trip is visualized as a track with exact start and destination, as well as the route along which it is possible to go again, share with somebody, analyze, and/or improve, etc. 

There are three base capabilities in regard to Trip recording: creating new tracks, showing the existing tracks on the map, and working with the ready records. The plugin is required to be enabled only for making new records. Using already created tracks is possible whenever needed. 



## Setup 

To start making new records, the following setup is required: 

1. [Enable the plugin](/docs/documentation/start-with/first-steps#how-to-configure-plugins). 

2. Configure Trip recording for the required [profile](/docs/documentation/personal/profiles).

3. If needed, add the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) to the screen. 

Once the setup is completed, it is possible to make new records, as well as to display tracks on the map, and manage them by changing the appearance, editing the route, adding waypoints, etc. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Recorded trip in iOS](@site/static/img/plugins/trip-recording/ios_recorded_trip1.png) ![Recorded trip in Android](@site/static/img/plugins/trip-recording/and_recorded_trip1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Recorded trip in iOS](@site/static/img/plugins/trip-recording/ios_recorded_trip1.png)

</TabItem>

<TabItem value="android" label="Android">

![Recorded trip in Android](@site/static/img/plugins/trip-recording/and_recorded_trip1.png)

</TabItem>

</Tabs>

&nbsp;&nbsp;&nbsp;&nbsp;

### Enable plugin

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The Trip recording plugin is needed for recording new tracks. It is possible to do with the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget), added to the app by the Trip recording plugin. To enable the Trip recording plugin, open the [Plugins](/docs/documentation/start-with/first-steps#how-to-configure-plugins) list and toggle the respective option. 

![Enable / Disable Plugin iOS](@site/static/img/plugins/enable_disable_plugin_ios.png) ![Enable / Disable Plugin Android](@site/static/img/plugins/enable_disable_plugin_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, the Trip recording plugin is enabled by tapping the respective option in:

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,plugins,track_recording"/>

![Enable / Disable Plugin iOS](@site/static/img/plugins/enable_disable_plugin_ios.png)

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to enable the Trip recording plugin, tap the triple dots at the right side of the option and select **Enable**: 

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,map_widget_monitoring"/> 

![Enable / Disable Plugin Android](@site/static/img/plugins/enable_disable_plugin_android.png) 

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;


### Add REC widget

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is needed to make new records. It is added automatically with the Trip recording enabled. However, if anything, to add the REC widget, open the Configure screen menu and toggle on the Trip recording widget. 

![Adding REC widget in iOS](@site/static/img/plugins/trip-recording/ios_configure_screen_TrRec_widget.png) ![Adding REC widget in Android](@site/static/img/plugins/trip-recording/and_configure_screen_TrRec_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

The [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is needed to make new records. It is added automatically with the Trip recording enabled. However, if anything, to add the REC widget, select a profile and toggle on <Translate ios="true" ids="track_recording"/>** in the following [Configure screen](/docs/documentation/widgets/configure-screen) menu:

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,layer_map_appearance,map_widget_right,track_recording"/>

![Adding REC widget in iOS](@site/static/img/plugins/trip-recording/ios_configure_screen_TrRec_widget.png)

</TabItem>

<TabItem value="android" label="Android">

The [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is needed to make new records. It is added automatically with the Trip recording enabled. However, if anything, to add the REC widget, select a profile and toggle on **<Translate android="true" ids="shared_string_trip_recording"/>** in the following [Configure screen](/docs/documentation/widgets/configure-screen) menu:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,shared_string_trip_recording"/>

![Adding REC widget in Android](@site/static/img/plugins/trip-recording/and_configure_screen_TrRec_widget.png)

</TabItem>

</Tabs>




&nbsp;&nbsp;&nbsp;&nbsp;


### Open settings 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

For each specific profile, Trip recording can be configured individually, as the parameters could differ depending on the character of the movement, for example, whether it is the location of a car driver, a cyclist, or a nordic walker that is detected. All [profiles](/docs/documentation/personal/profiles) are configured in the general [settings](/docs/documentation/start-with/first-steps#how-to-manage-your-settings) of the entire app. First, it is needed to select the required profile, and then among other settings of the profile, to find the section dedicated to Trip recording. 

![Trip recording settings per profile in iOS](@site/static/img/plugins/trip-recording/ios_profile_trip_rec2.png) ![Trip recording settings per profile in Android](@site/static/img/plugins/trip-recording/and_profile_trip_rec2.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to open [settings](/docs/documentation/start-with/first-steps#how-to-manage-your-settings) for configuring Trip recording, do the following:

1. Open <Translate ios="true" ids="menu,sett_settings"/>.

2. Select a [profile](/docs/documentation/personal/profiles). 

3. Tap **<Translate ios="true" ids="track_recording"/>**.

![Trip recording settings per profile in iOS](@site/static/img/plugins/trip-recording/ios_profile_trip_rec2.png) 

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to open [settings](/docs/documentation/start-with/first-steps#how-to-manage-your-settings) for configuring Trip recording, it is possible to use any of the two options: app [settings](/docs/documentation/start-with/first-steps#how-to-manage-your-settings), or [plugin](/docs/documentation/start-with/first-steps#how-to-configure-plugins) settings. 

#### APP SETTINGS 

The [settings](/docs/documentation/start-with/first-steps#how-to-manage-your-settings) of the app allow you to establish the Trip recording settings individually for a specific profile, and can be reached out, as follows:

1. Open <Translate android="true" ids="shared_string_menu,shared_string_settings"/>.

2. Select a [profile](/docs/documentation/personal/profiles).

3. Tap **<Translate android="true" ids="record_plugin_name"/>**.


![Trip recording settings per profile in Android](@site/static/img/plugins/trip-recording/and_profile_trip_rec2.png)

&nbsp;&nbsp;&nbsp;&nbsp;

#### PLUGIN SETTINGS

The settings opened from the [plugin](/docs/documentation/start-with/first-steps#how-to-configure-plugins) allow you to establish the Trip recording settings only for one default profile, and can be reached out, as follows: 

1. Open <Translate android="true" ids="shared_string_menu,plugins_menu_group"/>.

2. Tap the triple point at the right side of **<Translate android="true" ids="map_widget_monitoring"/>**, or tap the **<Translate android="true" ids="map_widget_monitoring"/>** option.

3. Select **Settings**. 

![Settings opened from the plugin](@site/static/img/plugins/trip-recording/and_open_settings_from_profile.png) ![Settings opened from the plugin](@site/static/img/plugins/trip-recording/rec_settings_plugin.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;


### Establish options

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

With the Trip recording settings opened for a profile, establish the required options as needed. In general, depending on the character of the movement: driving a car, a bicycle, riding a horse, skiing, etc. - it might be needed to make some adjustments in the manner of how the location points are captured and recorded into a file: scarcely, too much, in intervals, and other, to make the final output look smooth and/or digestible. 

There are such parameters of recording that can be tweaked to fit the context: for example, the time interval of how often the Location module should detect your location; or if detection results are almost similar, whether to log the points or wait for the next detection result; whether it is acceptable to generate individual segments inside one track in case of gaps, and so forth. Use the description of available parameters specified for the respective version of the application: iOS or Android. 

![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/ios_trip_rec_settings1.png) ![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/and_trip_rec_settings1.png)


</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, the available parameters are specified below. Establish them as needed. 

![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/ios_trip_rec_settings1.png)


| Parameter | Description |
|---|---|
| **General logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded **manually via the REC widget**. The option is duplicated on the Start recording dialog. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. The *Always ask* option requires the interval to be established anew on every start of the recording. |
| **Minimum displacement** | Given that two points are detected being close to one another, when a minimum displacement option is established, one of the points is removed, if it is detected to be closer than the established interval. It is helpful for none, or little movement, so that not to generate redundant points, regardless of any motion detection. The displacement interval is disabled if the *Not selected* option is set. Otherwise, an interval is considered to be between 2 meters and 50 meters depending on the selected option. For example, 5 meters is used, when there is no need in capturing more precise data than that, and no need in capturing any data at all when not moving. |
| **Minimum accuracy** | Given that your location is identified via the built-in Location module of the device, when the longitude and latitude are calculated, the resulted location point can be detected accurately to a certain extend and expressed in meters/feet. It is possible to establish a minimum threshold between 1 meter and 50 meters for calculating the accuracy of the detected location in relation to the real location. A too small accuracy may cause the existence of blank spots on the track. It is recommended to decrease the accuracy, or disable at all by establishing the *Not selected* option, in case of uncertainty of the quality of the signals used for identifying the location, whether it is the GPS signal, and/or the mobile phone signal, and/or the Internet connection. For example, GPS signal can be weaker in circumstances when the route goes under the bridge, or between large trees, or high buildings, or in unfavorable weather conditions; and better with the growing number of GPS satellites. |
| **Minimum speed** | Given that at a low speed the recorded track can be noisy by showing lots of points on a small segment of the route, when the motion is detected and the speed level is calculated to be less than the established threshold, then the points will not be recorded. To disable the minimum speed detection, set the *Not selected* option. To detect only motion to start recording points, set the *>0* option. The rest of options are recommended to be used carefully, and to avoid losing too many points, decrease the minimum threshold. |
| **Auto-record track** | If enabled, whenever navigation is in progress, the track is recorded automatically, and saved to the respective folder in <Translate ios="true" ids="menu_my_places"/>. Please, note that Track recording consumes the battery energy, and continues to run in the background with the screen being closed. For efficient use of the battery life, check out its status. |
| **Logging interval during navigation** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded automatically via the enabled **Auto-record track** option. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Tracks** | This is a quick re-direction to the folder: <Translate ios="true" ids="menu,my_places,tracks"/> tab. |
| **Reset plugin settings to default** | This establishes the default values for all of the above settings. |   



</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, the available parameters are specified below. Establish them as needed. 

![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/and_trip_rec_settings1.png)

| Parameter | Description |
|---|---|
| **Show start dialog** | If enabled, to start the recording, it is needed to tap the respective option in the Start dialog. Otherwise, the recording will start automatically. |
| **Auto-record track during navigation** | If enabled, whenever navigation is in progress, the track is recorded automatically, and saved to the respective folder in <Translate android="true" ids="shared_string_my_places"/>. Please, note that Track recording consumes the battery energy, and continues to run in the background with the screen being closed. For efficient use of the battery life, check out its status.| 
| **Logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded automatically via the enabled **Auto-record track during navigation** option. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **General logging interval** | It is the frequency of the requests to detect the location with subsequent logging of location points into the track, which is started to be recorded **manually via the REC widget**. The option is duplicated on the Start recording dialog. 5 seconds is the default option. Available are the options in the range from 0 seconds to 5 minutes. |
| **Minimum displacement** | Given that two points are detected being close to one another, when a minimum displacement option is established, one of the points is removed, if it is detected to be closer than the established interval. It is helpful for none, or little movement, so that not to generate redundant points, regardless of any motion detection. The displacement interval is disabled if the *Not selected* option is set. Otherwise, an interval is considered to be between 2 meters and 50 meters depending on the selected option. For example, 5 meters is used, when there is no need in capturing more precise data than that, and no need in capturing any data at all when not moving. |
| **Minimum accuracy** | Given that your location is identified via the built-in Location module of the device, when the longitude and latitude are calculated, the resulted location point can be detected accurately to a certain extend and expressed in meters/feet. It is possible to establish a minimum threshold between 1 meter and 50 meters for calculating the accuracy of the detected location in relation to the real location. A too small accuracy may cause the existence of blank spots on the track. It is recommended to decrease the accuracy, or disable at all by establishing the *Not selected* option, in case of uncertainty of the quality of the signals used for identifying the location, whether it is the GPS signal, and/or the mobile phone signal, and/or the Internet connection. For example, GPS signal can be weaker in circumstances when the route goes under the bridge, or between large trees, or high buildings, or in unfavorable weather conditions; and better with the growing number of GPS satellites. |
| **Minimum speed** | Given that at a low speed the recorded track can be noisy by showing lots of points on a small segment of the route, when the motion is detected and the speed level is calculated to be less than the established threshold, then the points will not be recorded. To disable the minimum speed detection, set the *Not selected* option. To detect only motion to start recording points, set the *>0* option. The rest of options are recommended to be used carefully, and to avoid losing too many points, decrease the minimum threshold. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to a number of reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, or a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Prevent standalone logging** | If enabled, Trip recording will automatically stop, when the OsmAnd app is stopped, and the notification bar of Android shows no indication of OsmAnd's working in the background. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points to. It is determined with the angle between the direction where the front panel points to and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **Track storage folder** | Given that all tracks are stored in: <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab; it is possible to establish the internal structure of this folder by selecting one of the following two options: either 1. to record all tracks to the *Rec* folder; or 2. to group all tracks by respective month folders, such as: *Rec/yyyy-mm* |
| **Notification** | If enabled, trip recording messages show up in the system notification area of the device. The notification area is opened with a swipe from the top of the screen to the bottom, and closed with a swipe in the opposite direction. The messages are intended to notify about all start/stop actions of the trip recording functionality and especially useful in case of the enabled **Auto-record track during navigation** option, as well as when the Start recording dialog is disabled and the recording starts silently on tap of the REC widget. Once a message is sent, it is visible in the notification area. A sent message can be cleared, if not needed. The visibility of a sent uncleared message does not depend on the status of the app: whether it runs in the background, foreground, or closed. | 
| **Online tracking** | It is real-time monitoring of your current location. If the option is enabled and the recording is in progress, the REC widget is green, instead of red, and every point is transmitted to the specified URL. The **Web address** field is intended for entering the URL in the following format: *https://example.com?lat={0}&lon={1}&timestamp={2}&hdop={3}&altitude={4}&speed={5}* The **Tracking interval** parameter is used to determine the frequency of how often to send the location points. The options can be selected in the range from 0 second to 5 minutes. The **Time buffer** parameter establishes the period of time during which the points will be accumulated in case if the Internet connection is lost.|
| **Tracks** | This is a quick re-direction to the folder: <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab. |
| **Reset plugin settings to default** | This establishes the default values for all of the above settings. |
| **Copy from another profile** | This opens a dialog to select a profile to copy the established Trip recording configuration of values from, and further to establish them for the current profile. |


</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;


## Create new track 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is used to create new records.  

- To start recording, tap the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget), and confirm in the opened Start dialog, if it is enabled. Otherwise, confirmation is not needed, and the recording will start automatically. 

- When in progress, the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is colored in red.

- When in progress and with enabled online recording, the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) is colored in green.

- To finish recording, tap the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) again, and confirm in the Trip recording dialog with the respective option. Additionally, there are a few other options that can be used. All options are detailed for the iOS and Android versions.

![REC widget in iOS](@site/static/img/plugins/trip-recording/ios_REC_widget.png) ![REC widget in Android](@site/static/img/plugins/trip-recording/and_REC_widget.png)

</TabItem>

<TabItem value="ios" label="iOS">

#### START RECORDING 

In the **iOS** version, there are two options to start recording:

- using the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget),
- using the <Translate ios="true" ids="track_recording_name"/> option in [My Places](/docs/documentation/personal/myplaces): 
    <Translate ios="true" ids="menu,menu_my_places,tracks"/> tab

In any case, the Start dialog opens, unless the **<Translate ios="true" ids="track_interval_remember"/>** option is toggled on, and provides the following recording settings to adjust before confirming the start of the recording by tapping **OK**:

- **Logging interval** - to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track;

- **Remember my choice** - removes the Start dialog, so that recording to start without confirmation. Once toggled on, the Start dialog will be disabled, and can show up again only after re-start of the Trip recording plugin;

- **Show on map** - if enabled, shows detected points on the map. 

![Start recording in iOS](@site/static/img/plugins/trip-recording/ios_widget_start2.png) ![Finish recording in iOS](@site/static/img/plugins/trip-recording/ios_widget_finish1.png)

>**NOTE**: When in progress, the REC widget is colored in red. 


#### STOP RECORDING

In the **iOS** version, to stop recording, or to do any of the following options, tap the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget) again, and in the opened Track recording dialog, select:

- **Stop recording** - to stop the recording. The track will automatically be put for storing in: 

    <Translate ios="true" ids="menu,menu_my_places,tracks"/> tab. 

- **Show Info** - opens the *Current recording track* [context menu](/docs/documentation/map/track-context-menu) with options for managing the track and changing the [appearance of the track](/docs/documentation/map/tracks-on-map#track-appearance), i.e. the manner it looks like on the map. 

- **Start new segment** - starts a new segment of the current track. The number of segments are available for analysis with the [context menu of the track](/docs/documentation/map/track-context-menu).

- **Save current track** - saves the track for storing and asks if to continue to record, or stop. 


</TabItem>

<TabItem value="android" label="Android">

#### START RECORDING 

In the **Android** version, there are four options to start recording: 

- using the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget), 
- with the Trip recording option in the menu,
- with the RECORD option in [My Places](/docs/documentation/personal/myplaces):
    <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab;
- with the Start Recording icon on the screen of the device, as the examples on the figures below show. 

&nbsp;&nbsp;&nbsp;&nbsp;

![Icon's context menu](@site/static/img/plugins/trip-recording/and_open_from_icon.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

> **NOTE**: Short-tap to open the icon's context menu with an option to Start Recording. Long-tap an option from the icon's context menu, to add it as an individual icon to the screen of the device. 

&nbsp;&nbsp;&nbsp;&nbsp;

In any case, the Start dialog opens, if it is enabled in the Trip recording settings described above. Otherwise, the recording starts automatically without providing the extra options to configure.

In the opened Start dialog, it is possible adjust the following recording settings before confirming the start of the recording by tapping **Start**:

- **Show on map** - if enabled, shows the detected points on the map;

- **Appearance** - the *Line* icon - opens the [Track Appearance options](/docs/documentation/map/tracks-on-map#track-appearance) to adjust visual representation of how the track looks like when it is displayed on the map;

- **Logging interval** - to set the frequency of the requests sent to the GPS sensor to detect and post a new point onto the route of the track;

- **Settings** - opens the Trip recording settings for the currently opened profile, described above. 


![Start recording in Android](@site/static/img/plugins/trip-recording/and_recording_start1.png)
![Finish recording in Android](@site/static/img/plugins/trip-recording/and_recording_finish1.png)

>**NOTE**: When in progress, the REC widget is colored in red. When in progress and with enabled online recording, the REC widget is colored in green.


#### STOP RECORDING 

In the **Android** version, tap the [REC widget](/docs/documentation/widgets/info-widgets#-trip-recording-widget), or the Trip recording option in the menu again, to stop recording, and/or to do any of the following extra options in the Trip recording dialog:

- **Show on map** - if enabled, to show the detected points on the map;

- **Appearance** - the *Line* icon - to open and work with the [Track Appearance options](/docs/documentation/map/tracks-on-map#track-appearance) to adjust visual representation of how the track looks like when it is displayed on the map;

- **Start time** / **End Time** - the timestamps of the first detected point and the last detected point;

- **Close** - to close the Trip recording dialog and continue recording; 

- **Pause** - to take a break, and resume recording after a while;

- **Finish** - to stop the recording. The track will automatically be put for storing in: 

    <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab. 

- **Options** - to reach out for the following options in the context menu: 

    - **Clear recorded data** - to delete, if any accumulated unsaved data;
    
    - **Stop without saving** - to stop recording without saving a track;
    
    - **Stop online tracking** - to stop sending recorded points to the specified online resource;
    
    - **Save and continue** - to save the track for storing and continue recording further; 
    
    - **Start new segment** - to start a new segment of the current track. The number of segments are available for analysis with the [context menu of the track](/docs/documentation/map/track-context-menu).


</TabItem>

</Tabs>

>**NOTE**: For any troubleshooting details, refer to: [Track recording issues](https://docs.osmand.net/en/main@latest/osmand/troubleshooting/track-recording-issues) 



&nbsp;&nbsp;&nbsp;&nbsp;



## Manage tracks

Once recorded and saved, tracks can be managed, as follows:

- in [**My Places**](/docs/documentation/personal/myplaces), so that to view all ever recorded pieces of data as a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format); 

- in [**Configure map**](/docs/documentation/map/configure-map-menu), so that to select a specific track and display it on the map;

- with the [**Context menu**](/docs/documentation/map/track-context-menu) of the track on the map, so that to adjust the appearance, to update points on the route, to view segments, to start navigation along the track/segment, and/or other options. 




### View all tracks 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

All tracks ever recorded automatically show up in the [**My Places**](/docs/documentation/personal/myplaces). It is the central storage of all user-generated information organized into tabs by the essence criterion of the saved data. There are favourites, notes, and also tracks. Look at the [**Tracks**](/docs/documentation/personal/tracks) tab for any trip recordings. 

For any details about [My Places](/docs/documentation/personal/myplaces), and/or [Tracks](/docs/documentation/personal/tracks) stored there, refer to the respective sections of the current documentation. However, here it makes sense to underscore, that:

- the internal organization of the Tracks tab in My Places can be managed with the Trip recording plugin settings described above;

- it is a useful place to consult with in case of doubts, for example, on what/if anything is recorded, what/if anything is visible right now on the map, and so forth;

- My Places is perfect for any inventory work: tap the triple points/arrow at the right side of a track to manage it with any of the options, such as Move, Rename, Share, etc. 


![My Places with tracks in iOS](@site/static/img/plugins/trip-recording/ios_my_places_viewing_tracks.png) ![My Places with tracks in Android](@site/static/img/plugins/trip-recording/and_my_places_viewing_tracks.png)



</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to view all ever-recorded tracks, and/or manage them, go to:

<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab

![My Places with tracks in iOS](@site/static/img/plugins/trip-recording/ios_my_places_viewing_tracks.png)

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to view all ever-recorded tracks, and/or manage them, go to: 

<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab

![My Places with tracks in Android](@site/static/img/plugins/trip-recording/and_my_places_viewing_tracks.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;



### Show tracks on map

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

Tracks make up an individual data layer that can be shown, or hidden with the respective option in the [**Configure map**](/docs/documentation/map/configure-map-menu#map-data-layers) menu. Moreover, by tapping Tracks, the dialog with a choice of tracks shows up, and allows you to select what track, or some tracks to display on the map.

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/ios_show_tracks2.png) ![Show tracks on the map in Android](@site/static/img/plugins/trip-recording/and_show_tracks2.png)


</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, for a specific profile, to display a track on the map, open [**Configure map**](/docs/documentation/map/configure-map-menu) and tap [**Tracks**](/docs/documentation/map/tracks-on-map#display-via-configure-map-menu). Then from the opened dialog, check the needed track. To hide a track, uncheck it from the list of Tracks in the **Configure map** menu:

<Translate ios="true" ids="menu,configure_map,tracks"/>

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/ios_show_tracks2.png) ![Select a track to display in iOS](@site/static/img/plugins/trip-recording/ios_select_track_to_display1.png)

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, for a specific profile, to display a track on the map, open [**Configure map**](/docs/documentation/map/configure-map-menu) and tap [**Tracks**](/docs/documentation/map/tracks-on-map#display-via-configure-map-menu). Then from the opened dialog, check the needed track. To hide a track, either uncheck it from the list of tracks, or toggle off the Tracks option in the [**Configure map**](/docs/documentation/map/configure-map-menu) menu: 

<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/>

![Show tracks on the map in Android](@site/static/img/plugins/trip-recording/and_show_tracks2.png) ![Select a track to display in Android](@site/static/img/plugins/trip-recording/and_select_track_to_display1.png)

</TabItem>

</Tabs>



&nbsp;&nbsp;&nbsp;&nbsp;


### Options of context menu


<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

When a track is displayed on the map, on tapping it, the [context menu of the track](/docs/documentation/map/track-context-menu) shows up. For the details of every available option, refer to the respective section of the current documentation. Here is an overview of options:

- basic info to show the distance, ascending and descending areas, description and quick action buttons, such as whether to show the track on the map, its appearance, points and if to place the track for navigation;

- graphs for analysis of altitude and speed;

- a tab for any overview, and/or updates of points and waypoints;

- and other [options](/docs/documentation/map/track-context-menu#options): appearance, analysis of split intervals, sharing, editing, renaming, etc.  

![Context menu of a track in iOS](@site/static/img/plugins/trip-recording/ios_tracks_context_menu1.png)  ![Context menu of a track in Android](@site/static/img/plugins/trip-recording/and_tracks_context_menu1.png)


</TabItem>

<TabItem value="ios" label="iOS">

By tapping a track directly on the map in the **iOS** version, the [context menu of the track](/docs/documentation/map/track-context-menu) shows up and provides a quick [basic overview about the track](/docs/documentation/map/track-context-menu#overview) as well as more [analytical data](/docs/documentation/map/track-context-menu#altitude--speed-graphs) to investigate the route and make any corrections of [points and waypoints](/docs/documentation/map/track-context-menu#points--waypoints), if needed. For more details, refer to [Track Context Menu](/docs/documentation/map/track-context-menu).

![Context menu of a track in iOS](@site/static/img/plugins/trip-recording/ios_tracks_context_menu1.png)

</TabItem>

<TabItem value="android" label="Android">

By tapping a track directly on the map in the **iOS** version, the [context menu of the track](/docs/documentation/map/track-context-menu) shows up and provides a quick [basic overview about the track](/docs/documentation/map/track-context-menu#overview) as well as more [analytical data](/docs/documentation/map/track-context-menu#altitude--speed-graphs) to investigate the route and make any corrections of [points and waypoints](/docs/documentation/map/track-context-menu#points--waypoints), if needed. For more details, refer to [Track Context Menu](/docs/documentation/map/track-context-menu).

![Context menu of a track in Android](@site/static/img/plugins/trip-recording/and_tracks_context_menu1.png)

</TabItem>

</Tabs>



&nbsp;&nbsp;&nbsp;&nbsp;



### Change folder

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

All recorded tracks are stored [**My Places**](/docs/documentation/personal/myplaces). It is the only storage for tracks. Even if moved, tracks are moved between folders in My Places. However, as soon as a new track is created, it is automatically saved to the default folder in My Places. The default folder is one and the same for all new tracks. After showing up in the default folder, tracks can be moved to any other preferred folder, as follows:

1. Select more options from the [Context menu](/docs/documentation/map/track-context-menu) of a track on the map. 
2. Tap **Change folder** and select another folder in My Places to store the track in. 

![More options in iOS](@site/static/img/plugins/trip-recording/ios_context_menu_options1.png) ![More options in Android](@site/static/img/plugins/trip-recording/and_context_menu_options1.png)


</TabItem>

<TabItem value="ios" label="iOS">

All new tracks are automatically saved to the default folder in My Places:

<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab

Later on, it is possible to move the track to any other preferable folder within My Places, and/or export the GPX file to an external storage. 

#### MOVE TRACK WITHIN MY PLACES

To move a track from the default folder to another folder within My Places, do the following:

1. Open the [Context menu](/docs/documentation/map/track-context-menu) of a track on the map in one of the following ways:

    - by tapping a track in My Places, the map shows up with the context menu opened for the track;
    - by tapping a track directly on the map. 
    In any case, make certain the track is visible on the map. 

2. Tap the triple points on the extreme right of the bottom panel.
3. Tap **<Translate ios="true" ids="plan_route_change_folder"/>** from the opened <Translate ios="true" ids="actions"/> list.
4. Select a folder to move the track to.   

![More options in iOS](@site/static/img/plugins/trip-recording/ios_context_menu_options1.png) ![Change folder in iOS](@site/static/img/plugins/trip-recording/ios_context_menu_option2.png)


#### EXPORT GPX FILE TO EXTERNAL STORAGE

To export a GPX file to an external storage, do the following: 

1. Open the [Context menu](/docs/documentation/map/track-context-menu) of a track on the map in one of the following ways:

    - by tapping a track in My Places, the map shows up with the context menu opened for the track;
    - by tapping a track directly on the map. 
    In any case, make certain the track is visible on the map. 

2. Tap **<Translate ios="true" ids="shared_string_export"/>**.
3. Select the required storage to export the GPX file to. 


![Export with Context menu in iOS](@site/static/img/plugins/trip-recording/ios_context_menu_export.png) 

</TabItem>

<TabItem value="android" label="Android">

All new tracks are automatically saved to the default folder in My Places:

<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab

For the **Android** version of the app, the default folder can be established in [Trip recording settings](/docs/documentation/plugins/trip-recording#establish-options) as one of the following options:

- the `Rec` folder, which is one folder for all tracks; or as 
- the `Rec/yyyy-mm` folder, which is created individually anew for every month and contain tracks recorded during the given month.

Later on, it is possible to move the track to any other preferable folder within My Places by using:

- the [Context menu of a track on the map](/docs/documentation/map/track-context-menu);
- the [Context menu of a track in My Places](/docs/documentation/personal/tracks#manage-tracks).

#### CONTEXT MENU ON THE MAP

To move a track to another folder within My Places, it is possible to use [Context menu of a track on the map](/docs/documentation/map/track-context-menu), as follows: 

1. Open the [Context menu](/docs/documentation/map/track-context-menu) of a track on the map in one of the following ways:

    - by tapping a track in My Places, the map shows up with the context menu opened for the track;
    - by tapping a track directly on the map. 
    In any case, make certain the track is visible on the map. 

2. Tap **<Translate android="true" ids="shared_string_options"/>**.
3. Tap **<Translate android="true" ids="change_folder"/>** from the opened <Translate android="true" ids="shared_string_options"/> list.
4. Select a folder to move the track to. 

![More options in Android](@site/static/img/plugins/trip-recording/and_context_menu_options1.png) ![Change folder in Android](@site/static/img/plugins/trip-recording/and_context_menu_option2.png)

#### CONTEXT MENU IN MY PLACES

To move a track to another folder within My Places, it is possible to use the [Context menu of a track in My Places](/docs/documentation/personal/tracks#manage-tracks), as follows: 

1. Open <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab.
2. Tap the triple points on the right of the required track.
3. Tap **<Translate android="true" ids="shared_string_move"/>** from the opened context menu.
4. Select a folder to move the track to. 

![Move with My Places in Android](@site/static/img/plugins/trip-recording/and_my_places_viewing_tracks.png)

</TabItem>

</Tabs>



&nbsp;&nbsp;&nbsp;&nbsp;

## GPX file details  

The location points are recorded into a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), according to the following structure: *file > track > segments > points*, where:

- one point has a number of attributes: coordinates, speed, altitude, heading;
- points are grouped into tracks;
- one track is generated by one recording, i.e. one start and one stop actions;
- with auto-split after gaps, the next point after the gap makes up a new segment;
- both segments and tracks are identified with the Start and Finish icons on the map; 
- both tracks and segments are recorded into a file.

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
