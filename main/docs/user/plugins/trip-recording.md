---
sidebar_position: 15
title:  Trip Recording
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

The **Trip Recording plugin** is an essential tool for capturing your routes, movements, and workouts. This feature not only enables you to record your trips but also allows for easy reuse, modification, updating, and sharing of your tracks with others.
With the *Trip Recording plugin*, you can create new tracks, display recorded ones directly on the map, and manage existing records. It offers valuable insights into your trips, such as speed, elevation changes, and terrain details. Whether you are navigating or simply moving through an area, the plugin continuously records your route, enabling detailed post-trip analysis and sharing.

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
3. Add [Trip recording widgets](#widgets) to the screen, if needed.

When setup is complete, you can make new records, display and manage tracks on the map, change their [appearance](../map/tracks/appearance.md), edit the route, add waypoints, and others.


## New Track Recording

![Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/create_new_track_and-1.png) ![Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/create_new_track_ios-1.png)

With the Trip Recording plugin in OsmAnd, you can easily start recording your track using a variety of convenient options. Here’s how you can begin your journey:

- **Distance/Start-Stop Widget**. Activate recording using the [Distance/Start-Stop widget](#distance-start-stop).
- **Trip Recording item in Main menu** (*Android*). Select the **Trip recording** option from the Main menu: *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>*.
- **Record Button**: On *Android*, tap the **<Translate android="true" ids="start_recording"/>** button. On *iOS*, you can start recording by tapping the record button in the **<Translate ios="true" ids="shared_string_currently_recording_track"/>** field, located in [My Places](../personal/myplaces.md) section of the Main menu:: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.  
- **Application Launcher**. For *Android* users, you can also use an [application launcher](#launcher-android) to start recording.  

**Recommendations:**

- **Enable Precise Location**. For accurate track recording, ensure that OsmAnd has permission to access the [precise location](../start-with/first-steps.md#permission-to-access-the-location) of your device.
- **Troubleshooting iOS Background Issues**. iOS devices may sometimes temporarily suspend or stop apps from running in the background, which could interrupt track recording. - For more detailed troubleshooting tips, check out the [Track Recording Issues](../troubleshooting/track-recording-issues.md#recorded-tracks-have-gaps) section of the documentation.


### Start a Dialog

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Start dialog opens, if the **<Translate android="true" ids="show_start_dialog"/>** option is enabled in the settings section of the Start dialog box.

![Start recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_1.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Start dialog opens, if the **<Translate ios="true" ids="track_interval_remember"/>** option is not toggled on.

![Start recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_1.png)

</TabItem>

</Tabs>

- **Logging interval** (*Android/iOS*). This setting controls how often the app requests data from the GPS sensor to mark new points on your track. Adjusting the interval allows you to balance between track detail and battery usage. A shorter interval will result in more detailed tracks but higher battery consumption, while a longer interval conserves battery but reduces track accuracy.
- **Line icon** (*Android*). Tap this icon to access the [Track Appearance options](../map/tracks/appearance.md). Here, you can customize how your track appears on the map, including line color, thickness, and style. Once you save a track with a customized appearance, these settings will be retained for future recordings, ensuring consistency every time you view or re-enable the track.
- **Settings menu** (*Android*). Access this menu to fine-tune your recording preferences. For a detailed overview, refer to the [Trip Recording Settings](#recording-settings) section.
- **Remember my choice** (*iOS*). When enabled, this feature allows track recordings to start automatically without prompting for additional settings or confirmation. However, if you wish to modify your recording options before starting a new track, you'll need to restart the Trip Recording plugin to make the settings menu reappear.


### Launcher (Android)

![Icon's context menu](@site/static/img/plugins/trip-recording/and_open_from_icon.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

To start recording a new track, you can use the Start Recording icon on the screen of your Android device, as shown in the screenshots for an example. Long pressing the icon opens a context menu with the Start Recording option.

Use a long tap on *Start Recording* in the context menu of the OsmAnd icon to add it as a separate icon on your device screen.


## Current Track Recording

For *Stop / Save / Pause*:

- To stop the recording, tap the corresponding button in the [Distance/Start-Stop widget](#distance-start-stop) widget dialog box.
- In the *Android version*, you can stop recording by tapping the *Trip recording* Main menu item.


### Overview Screen

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![overview](@site/static/img/plugins/trip-recording/overview-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Finish recording in iOS](@site/static/img/plugins/trip-recording/start_rec_ios_3.png)

</TabItem>

</Tabs>

In OsmAnd, the **Android** and **iOS** versions handle the track recording interface slightly differently. On Android, you’ll find a dedicated menu for the *Track recording* context, while on iOS, this is streamlined into the *Currently recording track* context menu.

As you record a track, dynamic graphs are generated, providing real-time visual data about your journey. These graphs can reflect information for the entire route or just for a selected segment, depending on your zoom level.  
Here is what you can find on the graphs:

- **Data values**. Located on the right side for *Android* and the left for *iOS*, you will see the **highest, average, and lowest values** displayed clearly for easy reference.
- **Tabs for key information**: *Overview* displays total distance and speed; *Altitude* shows elevation changes and the grade of the terrain; *Speed* provides the current speed at each point.

For a more detailed view, you can **scale the graph**:

- Use the [two-finger gesture](../map/interact-with-map.md#gestures) to zoom in or out and focus on specific intervals.
- Tap on any point in the graph to display a marker that shows the exact values for that location.

| |  
| ------------- |
|***Overview***. This tab presents a comprehensive graph showcasing speed and altitude variations along the track, along with essential track details. The information displayed includes: *Distance*, *Time Span*, *Start Time*, and *End Time*. Below, you can see how this appears on both Android and iOS versions. |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_ave-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_ave-ios.png) |
| ***Altitude***. This tab focuses on the elevation profile of your recorded track, providing insights into altitude changes and terrain grades. Key metrics include: *Average Altitude*, *Altitude Range*, *Uphill*, and *Downhill*. The graphs below illustrate the differences between the Android and iOS interfaces. |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_alt-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_alt-ios.png) |
| ***Speed***. The Speed tab highlights speed-related data throughout the track. It includes information such as *Average Speed*, *Maximum Speed*, *Time in Motion*, and *Distance Corrected*. The screenshots below show how this data is displayed on both platforms. |
| ![data](@site/static/img/plugins/trip-recording/tr_rec_speed-2.png)  ![data](@site/static/img/plugins/trip-recording/tr_rec_speed-ios.png) |

:::info
For more details, you can explore the [**Tracks Context Menu**](../map/tracks/track-context-menu.md#options), where you can manage various track-related options like renaming, deleting, or adding waypoints. To adjust how tracks appear on the map, visit the [**Appearance**](../map/tracks/appearance.md) section. If you want to add specific waypoints to your current track, check out the [**Track Points**](../map/tracks/track-context-menu.md#waypoints-folder) guide. For any modifications, such as renaming a track, use the [**Options**](https://osmand.net/docs/user/map/track-context-menu#options) tab within the Tracks Context Menu.
:::


### Show on the Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![show_tr_onmap_andr_1](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Configure map tracks Android](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![sshow_tr_onmap_ios_1](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Configure map tracks iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)
</TabItem>

</Tabs>

Manage which tracks are visible on your map using one of two options. Head to *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab* and enable the *Show on map* option for any track you want to display or hide. Alternatively, you can go to *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_gpx_files"/>* to quickly adjust the visibility of all your tracks in one place.


### Recorded GPX File

OsmAnd captures your journey in a structured [GPX file](https://en.wikipedia.org/wiki/GPS_Exchange_Format), using a hierarchy of *file > track > segments > points*. Here's how it works:

- **Points** represent individual moments of your recorded path, each marked with attributes like coordinates, speed, altitude, and heading.
- These points are grouped together to form **tracks**, which represent your entire route.
- If there’s a gap in recording (for instance, if tracking was paused), the next point after the break starts a new **segment**, marking the separation in your journey.
- Both **segments** and **tracks** are visually represented with *Start* and *Finish* icons on the map.

```xml
<extensions>
    <gpxtpx:TrackPointExtension>
        <gpxtpx:hr>107</gpxtpx:hr>
        <gpxtpx:atemp>107</gpxtpx:atemp>
        <gpxtpx:cad>107</gpxtpx:cad>
    </gpxtpx:TrackPointExtension>
</extensions>
```

<!-- ![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm4.png)

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)  -->


| Parameter  | Description |
|-----------------|----------------|
| **`trkpt`** | **Track Point** represents a specific geographical location detected during your activity. Each track point includes latitude and longitude coordinates, forming the basis of your recorded path. |
| **`trkseg`**  | **Track Segment** groups together consecutive track points, separated by breaks in activity, such as pauses or stops. This helps distinguish continuous movement from idle periods within a single recording.  |
| **`lat`** | **Latitude** indicates the north-south position of a point on the Earth's surface. It is one-half of the coordinate pair used to pinpoint your exact location.   |
| **`lon`** | **Longitude** specifies the east-west position, complementing latitude to locate a point on the globe accurately. Together, latitude and longitude define your precise geographical position.    |
| **`ele`** | **Elevation** measures the height of a track point above sea level, recorded in meters. This can be useful for tracking altitude changes during your activities, such as hikes or bike rides.    |
| **`time`** | **Timestamp** records the exact date and time when a track point is logged. This allows you to track the duration and timing of your activity with precision.    |
| **`hdop`** | **Horizontal Dilution of Precision (HDOP)** is a measure of GPS accuracy, reflecting the potential error in location due to the positions of the satellites. Unlike the standard HDOP, OsmAnd GPX tracks use this value to represent horizontal accuracy in meters. Please note that this implementation differs from typical HDOP standards. [Learn more](https://github.com/osmandapp/Osmand/issues/3445).   |
| **`speed`** | **Speed** records your rate of movement in meters per second. It provides insight into your pace during various segments of your activity.  |
| **`heading`**  | **Heading** indicates the direction in which your vehicle or device's front is pointed, measured in degrees. It's distinct from the course, which is the actual path of movement. Differences can occur due to external factors like wind, currents, or road conditions. [More on heading](https://en.wikipedia.org/wiki/Heading_(navigation)).  |
| **`speed_sensor`** | **Speed** from [external sensors](../plugins/external-sensors.md) captures data from connected sensors, providing more precise speed information, especially useful when cycling. For more details, refer to the [GPX file format documentation](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| **`cadence`** | **Cadence** measures the number of pedal revolutions per minute, recorded using [external sensors](../plugins/external-sensors.md). This is particularly useful for cyclists aiming to monitor and optimize their pedaling efficiency. [Read more](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |
| **`power`** | **Bicycle Power** quantifies the power generated while pedaling, captured from [external sensors](../plugins/external-sensors.md). It's an essential metric for serious cyclists who want to gauge their performance. [Learn more](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| **`atemp`** | **Air Temperature** records the ambient air temperature during your activity, measured using [external sensors](../plugins/external-sensors.md). Note that water temperature is not supported. [Details here](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).   |
| **`hr`** | **Heart Rate** monitors your heartbeats per minute, using data from connected [sensors](../plugins/external-sensors.md). This information can be vital for tracking your cardiovascular performance during workouts. [Find out more](https://docs.osmand.net/docs/technical/osmand-file-formats/osmand-gpx#tags-name-for-sensor-data).  |


## Recording Settings

Before you start tracking your trips, you need to properly configure the **Trip Recording plugin** for optimal performance.

- **Profile-specific settings**. Each profile in the app can have its own unique Trip Recording settings. This allows you to precisely customize the recording behavior based on your activity, such as driving, cycling, or even Nordic walking, which might require different configurations.
- **Customize recording parameters**. The recording settings can vary depending on how you move. For example, driving long distances might call for a lower recording frequency, while hiking or walking could benefit from more frequent updates.
- **Precise location data**. To make sure your recordings are smooth and usable later, you may tweak how location points are captured. This could include adjusting the recording frequency, the format of your data (like the number of points per distance unit), or spacing between recorded points.
- **Global settings**. Trip Recording settings are configured per profile, which you can manage in the app’s global [settings](../personal/global-settings.md). Before you customize the Trip Recording plugin, first select the profile you want to configure from the [profiles](../personal/profiles.md) section. From there, navigate to the profile’s settings to access the Trip Recording options.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png)  ![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/recording_sett_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png)  ![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/recording_sett_2_ios.png)

</TabItem>

</Tabs>

| Parameter | Description |
|---|---|
| **Battery optimization dialogue** (*Android*) | [Select an optimisation setting](#battery-optimization). To prevent the app from asking you the next time you make a selection, tap the *Don't ask anymore* button. |
| **Show start dialog** (*Android*) | If this feature is enabled, you can select the required settings before starting recording, and then tap the Start button. If this feature is disabled, the recording will start automatically. |
| **Auto-record track during navigation** | When enabled, the track is automatically recorded during navigation and auto-saved in *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/> tab*. **Note**: Trip recording uses the battery energy and continues to run in the background when the screen is closed. |  
| **General logging interval** | This is the frequency of location requests after which location points are recorded in the track. The default value is 5 seconds. Options from 0 seconds to 5 minutes are available. |
| **Minimum displacement** | This filter allows you to avoid additional data recording when there is little or no movement detected. It also improves the appearance of the tracks on the map without additional processing. **Side effects**: Rest periods are not recorded at all or are recorded by one point. Minor movements (e.g., to the side of the road to mark a possible turn in your path) may also be filtered out. **Note**: Your file will contain less information for post-processing, and at the same time can potentially save GPS artifacts caused by bad reception or chipset effects. **Recommendation**: Set 5 meters displacement if you don't want to record minor details of your route and you don't need additional data about your rest period. |
| **Minimum accuracy** | This filter allows you to record only points measured with a minimum "accuracy" indication (in meters/feet, as reported by Android for your chipset). Accuracy is the proximity of measurements to the true position and is not directly related to precision, which is the scatter of repeated measurements. **Side effect**: As a result of accuracy filtering, points may be completely missing, such as under bridges, under trees, between tall buildings, or in certain weather conditions. |
| **Recommendation** | It is hard to predict what will be recorded and what not, it may be best to turn this filter off. **Remark**: If GPS had been off immediately before a recording, the first point measured may have a decreased accuracy, so in our code, we may want to wait a second or so before recording a point (or record the best of 3 consecutive points, etc.), but this is not yet implemented. |
| **Minimum speed** | This is a low-speed cut-off filter to not record points below a certain speed. This may make recorded tracks look smoother when viewed on the map. **Side effect**: Your track will be missing all sections where the minimum speed criterion was not met (e.g. where you push your bike up a steep hill). Also, there will be no information about periods of rest, like breaks. This has effects on any analysis or post-processing, like when trying to determine the total length of your trip, time in motion, or your average speed. **Recommendation**: Try using the motion detection via the logging minimum displacement filter (B) first, it may produce better results, and you will lose less data. If your tracks remain noisy at low speeds, try non-zero values here. Please note that some measurements may not report any speed value at all (some network-based methods), in which case you would not record anything. **Remark**: speed > 0 check: Most GPS chipsets report a speed value only if the algorithm determines you are in motion, and none if you are not. Hence using the > 0 setting in this filter in a sense uses the motion detection of the GPS chipset. But even if not filtered here at recording time, we still use this feature in our GPX analysis to determine the Distance corrected, i.e. the value displayed in that field is the distance recorded while in motion. |
| **Auto-split recordings after gap** | If enabled, a new segment will automatically start after a 6-minute gap; a new track will automatically start after a 2-hour gap; and a new file will automatically start when the date has changed. The gap is determined as the absence of any point being recorded. Points can, or cannot be detected, **and** not recorded. It might happen due to some reasons as well as the current configuration of the Trip recording functionality. For example, the GPS signal is weak because of the current weather conditions and therefore, the location is not detected and not recorded. Or, the speed of the movement gets below the threshold, and thus, the location is actually detected, but not recorded. Such gaps in recorded data can be used to generate a new segment on the same track, a new track in the same file, or a new GPX file within one recording identified as single start/stop actions performed once at a time. |
| **Prevent standalone logging** (*Android*) | If enabled, Trip recording will automatically stop when the OsmAnd app is stopped, and the notification bar of Android shows no indication of OsmAnd's working in the background. |
| **Include heading** | If enabled, the heading is saved into the GPX file for every point. The heading is the direction to where the front panel of the vehicle/device points. It is determined by the angle between the direction where the front panel points and the course towards which the vehicle/device is intended to move. In navigation, the difference may exist due to the drift caused by the air, water, skidding, slipping, etc. |
| **External sensors** | Data from [External sensors](../plugins/external-sensors.md#trip-recording), such as: **<Translate android="true" ids="map_widget_ant_heart_rate"/>, <Translate android="true" ids="map_widget_ant_bicycle_power"/>** (*Android only*), **<Translate android="true" ids="map_widget_ant_bicycle_cadence"/>, <Translate android="true" ids="map_widget_ant_bicycle_speed"/>, and <Translate android="true" ids="external_device_characteristic_temperature"/>** (**Distance** data from sensors is not added to the track in Android and iOS systems)  is written to a GPX file during track recording. Displayed only when the [External Sensors plugin](../plugins/external-sensors.md) is enabled.  |
| **Track storage folder** (*Android*) | All tracks are stored in the *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* tab. You can set the internal structure of this folder by selecting one of the following options: **1**) Record all tracks to the *Rec* folder. **2**) Group all tracks into appropriate folders of the month, such as *Rec/yyyyy-mm*. |
| **Notification** | When enabled, [trip recording messages](#notification) are displayed in the system notification area of the device. |
| **Online tracking** (*Android*) | It is real-time monitoring of your current location. If the option is enabled and the recording is in progress, the Distance/Start-Stop (REC) widget turns green instead of red, and each point is transmitted to a specified URL. The **Web address** field is for entering the URL using the parameter syntax: lat={0}, lon={1}, timestamp={2}, hdop={3}, altitude={4}, speed={5}, bearing={6}, eta={7} (Unix time - to arrival), etfa={8} (Unix time - to first intermediate point or finish point), eda={9} (distance in meters - to arrival or a marker), edfa={10} (distance in meters - to first intermediate point or finish point). The **Tracking Interval** parameter is used to determine the frequency of sending location points. The options can be selected from 0 seconds to 5 minutes. The **Time Buffer** parameter sets the period that location points are saved if there is no Internet connection. |
| **Tracks** | This is a quick re-direction to the folder: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*. |
| **Reset plugin settings to default** | You can reset all profile settings to the default ones that you had when you installed the application. |
| **Copy from another profile** (*Android*) | You can copy the Trip recording plugin settings from another profile. |


### Battery Optimization

<InfoAndroidOnly />

![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

This feature allows you to manage battery optimization settings for OsmAnd to ensure uninterrupted access to your location, even when the app runs in the background during navigation or track recording.

- **Battery optimization settings**. Opens Android settings, where you can modify battery-saving preferences for OsmAnd.
- **Don't ask anymore**. Dismisses the dialog box permanently, so it will not appear again.
- **Close**. Temporarily closes the dialog box, which will appear again the next time battery optimization needs attention.


### Notification

When enabled, trip recording notifications will always be displayed in the system notification area when the recording is active. This notification ensures that the recording process is not interrupted by the system, and it cannot be disabled during an active recording.

- The notification area opens when you swipe down from the top of the screen and closes when swiping up. These messages notify you of actions like starting/stopping trip recording, especially when automatic recording is enabled during navigation.
- Notifications remain visible regardless of whether the app is running in the foreground, background, or is closed. You can manually clear the notification if it is no longer needed, but this won’t stop the ongoing recording.

**Important Note:**  
This behavior is required by Android for any foreground service, like trip recording, to remain visible to the user. If the notification is removed, Android will automatically stop the recording.

- The **Notification** setting in OsmAnd affects whether the notification bar shows a shortcut to start a recording when no recording is active. It does **not** control the visibility of the notification during an active recording.

Additional *Android* options:

- In **Android settings** → **Notifications and status bar** → **Lock screen notifications**, you can remove OsmAnd from the app list to prevent notifications from appearing on the lock screen, avoiding accidental screen activation. This will not affect track recording. Notifications will still appear in the regular notification area.
- **OsmAnd** may also appear under **Privacy** → **Special Permissions** → **Turn on screen**. If you want to prevent the screen from turning on when a notification appears, try removing OsmAnd from this list.
- OsmAnd is not listed under **Privacy** → **Special Permissions** → **Alarms and reminders**.


## Widgets  

Widgets allow you to display key information about track recording directly on the screen, such as *Distance*, *Duration*, *Uphill*, and *Downhill*.

To start using *Trip recording widgets*, you need to make all of the following settings:

1. [Enable the plugin](../start-with/first-steps.md#how-to-configure-plugins).
2. Configure trip recording settings for the required [profile](../personal/profiles.md).
3. Add the necessary **Trip recording widgets** to the screen. Note that this configuration is **specific to each profile**.


### Add Recording Widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_monitoring"/>*

![Adding Distance/Start-Stop widget in Android](@site/static/img/plugins/trip-recording/add_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_widget_monitoring"/>*  

![Adding Distance/Start-Stop widget in iOS](@site/static/img/plugins/trip-recording/add_recording_widgets_ios.png)

</TabItem>

</Tabs>

The [Trip Recording widget](../widgets/info-widgets.md#trip-recording-widgets) provides an easy way to monitor your recording status and quickly access recording settings and details. This widget is automatically added to your screen when the Trip Recording plugin is enabled.

To customize your interface, you can add or remove the Trip Recording widget, along with [other widgets](../plugins/trip-recording#duration-uphill-downhill), through the Configure Screen menu.


### Distance (Start-Stop)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left"/>/<Translate android="true" ids="map_widget_right,shared_string_trip_recording"/>, <Translate android="true" ids="map_widget_trip_recording_distance"/>*  

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_and_1-1.png)
![Finish recording in Android](@site/static/img/plugins/trip-recording/start_rec_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording,map_widget_trip_recording_distance"/>*

![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr.png) ![Trip recording widget](@site/static/img/widgets/tr_rec_wid_conf_scr_2.png)  

</TabItem>

</Tabs>  

When widgets are displayed on the map, tapping any of them reveals additional track details and allows interaction with the recording.
The *Distance* widget displays the total distance of your current recorded trip and acts as the main interface for managing your recordings. Tapping on it reveals the [Trip Recording dialog](../plugins/trip-recording#start-dialog), where you can start, stop, and view detailed information about your track.

- The widget is added automatically when the *Trip recording plugin* is enabled, but it can be hidden via the [Configure screen menu](../widgets/configure-screen.md#configure-screen-menu).
- If the *Show start dialog* option is disabled in the Trip Recording plugin settings, tapping the active widget will still open the *Trip Recording dialog* box, allowing you to access further options and information.  

In addition to the *Distance/Start-Stop* widget, the **Trip Recording plugin** for *Android* includes three other widgets: *Duration*, *Uphill*, and *Downhill*. These provide additional information about your trip, helping you track your real-time progress.

| |
|-----------|
| **Distance/Start-Stop**. This widget displays the distance of your ongoing trip recording. It is automatically added when the Trip Recording plugin is enabled, but you can hide it through the Configure Screen menu. The widget features three distinct states: *Recording*, *Paused*, and *Inactive*, each indicating the current status of your trip recording. |
| ![Trip recording (REC) widget](@site/static/img/widgets/tr_rec_wid_rec.png) |
| If the **Trip Recording Plugin** settings have the *Show Startup Dialog* option enabled, tapping an inactive widget will open the [Trip Recording dialog](../plugins/trip-recording#start-dialog). If the option is disabled, the recording will start immediately when the widget is tapped. |  


### Duration, Uphill, Downhill

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left"/>/<Translate android="true" ids="map_widget_right,shared_string_trip_recording"/>, <Translate android="true" ids="map_widget_trip_recording_duration"/>, <Translate android="true" ids="map_widget_trip_recording_uphill"/>, <Translate android="true" ids="map_widget_trip_recording_downhill"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right,track_recording"/>, <Translate ios="true" ids="map_widget_trip_recording_duration"/>, <Translate ios="true" ids="map_widget_trip_recording_uphill"/>, <Translate ios="true" ids="map_widget_trip_recording_downhill"/>*  

</TabItem>

</Tabs>

| |
|------------|
|**Duration**. Displays the total time of the current trip recording in hours and minutes. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dur.png)|  
|**Uphill**. Shows the cumulative elevation gain for the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_up.png)|
|**Downhill**. Indicates the total descent accumulated during the current trip recording. |
|![widgets](@site/static/img/widgets/tr_rec_wid_dow.png)|

If you have multiple widgets selected — *Duration*, *Uphill*, or *Downhill* — you can access the same dialog box for each without needing to switch or close it. This unified interface makes it easy to view and manage all related information seamlessly.


## Related Articles

- [Map Context menu](../map/map-context-menu.md)
- [Show track on Map](../map/tracks/index.md)
- [Analyze on Map](../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../map/tracks/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)

> *This article was last updated in September 2024*
