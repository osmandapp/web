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

![Icon's context menu](@site/static/img/plugins/trip-recording/launcher_icon_andr.png) ![Start Recording icon](@site/static/img/plugins/trip-recording/and_trip_rec_icon.png)

You can quickly start a new track recording directly from your Android device's screen using the context menu of the OsmAnd app icon.

- Perform a **long tap** on the OsmAnd app icon to open the context menu, where you can find the option to **Start Recording**.
- Tapping the **Start Recording** option will launch the OsmAnd app with the [track recording settings](#overview-screen) displayed on the screen.
- To add a shortcut for quicker access, **long tap** the **Start Recording** option in the app icon context menu, and it will create a dedicated icon on your home screen.

While track recording is active, a notification badge will appear on the corner of the OsmAnd app icon, indicating that the recording is in progress. For further details on managing this notification, see the [Notification](#notifications) section.


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

In OsmAnd, the **Android** and **iOS** versions handle the track recording interface slightly differently. On Android, you will find a dedicated menu for the *Track recording* context, while on iOS, this is streamlined into the *Currently recording track* context menu.

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
| **Battery optimization dialogue** (*Android*) | Opens the [Android battery optimization settings](#battery-optimization). Tap *Don't ask anymore* if you do not want to be prompted again. |
| **Show start dialog** (*Android*) | Enables a dialog where you can configure settings before starting recording. If disabled, the recording starts automatically. |
| **Auto-record track during navigation** | Automatically records the track during navigation and saves it in the *<Translate android="true" ids="shared_string_menu,shared_string_trip_recording"/>* tab.<br />*Note*: Track recording consumes battery and continues running in the background, even if the screen is off. |
| **General logging interval** | Defines how often location points are recorded. The default is 5 seconds. It is enabled with the *Trip recording widget*. |
| **Minimum displacement** | A filter to avoid recording points when there is little or no movement. It helps reduce data noise.<ul><li>*Side effects*: Rest periods may not be recorded, and small movements may be ignored. This can reduce post-processing data but may also prevent GPS errors from being logged.</li><li>*Recommendation*: Set displacement to 5 meters if you want fewer minor details in your recordings.</li></ul> |
| **Minimum accuracy** | Filters out location points below a minimum accuracy indication threshold, as reported by the device.<ul><li>*Side effects*: Points in areas with poor signal (under bridges, trees, between buildings, or in some weather conditions) may be missing.</li><li>*Recommendation*: If unsure, it may be better to disable this filter to avoid missing data.</li></ul><details><summary>*Remark*</summary>Suppose the GPS was turned off just before recording. In that case, the first measured point may have reduced accuracy, so it is better to wait a while before recording the point or record the best of 3 consecutive points.</details> |
| **Minimum speed** | Sets a threshold to ignore points recorded below a certain speed.<ul><li>*Side effects*: Sections where speed falls below a specified threshold will not be recorded.</li><li>*Recommendation*: Use the *Minimum displacement* filter instead, as it can give better results without losing important data.</li></ul><details><summary>*Remark*</summary>Try using the motion detection via the logging minimum displacement filter (B) first, it may produce better results, and you will lose less data. If your tracks remain noisy at low speeds, try non-zero values here. Please note that some measurements may not report any speed value at all (some network-based methods), in which case you would not record anything.<br/><br/>Speed > 0 check: Most GPS chipsets report a speed value only if the algorithm determines you are in motion, and none if you are not. Hence using the > 0 setting in this filter in a sense uses the motion detection of the GPS chipset. But even if not filtered here at recording time, we still use this feature in our GPX analysis to determine the Distance corrected, i.e. the value displayed in that field is the distance recorded while in motion.</details> |
| **Auto-split recordings after gap** | Automatically splits tracks based on time gaps between recorded points. <ul><li>A new segment starts after a 6-minute gap.</li><li>A new track starts after a 2-hour gap.</li><li>A new file starts when the date changes.</li><li>Gaps can result from GPS signal loss, low speed, or configuration settings.</li></ul><details><summary>*Remark*</summary>A gap is identified when no points are recorded. This may happen either because the location is not detected or because it is detected but not recorded. Several factors can cause this, including weak GPS signals due to poor weather conditions, or the speed of movement falling below the configured threshold. In such cases, even though the device may detect the location, it does not record it.<br/><br/>These gaps in recorded data can trigger the creation of a new segment within the same track, a new track in the same file, or a new GPX file within one recording. This is managed within a single start/stop recording session.</details> |
| **Prevent standalone logging** (*Android*) | Pauses track recording when the OsmAnd app is killed (via *recent apps*). The background indication is not displayed in the Android notification panel. |
| **Include heading** | Records the heading (direction of movement) for each point in the GPX file. The heading is the direction the device is facing, which can differ from the movement direction due to external factors like wind or skidding. |
| **External sensors** | Data from [external sensors](../plugins/external-sensors.md#trip-recording) such as *<Translate android="true" ids="map_widget_ant_heart_rate"/>*, or *<Translate android="true" ids="map_widget_ant_bicycle_speed"/>* is logged to the GPX file. *Distance* data is not recorded on Android or iOS. Displayed only when the [External Sensors plugin](../plugins/external-sensors.md) is enabled. |
| **Track storage folder** (*Android*) | Defines where in *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* tab recorded tracks are stored. Options include storing all tracks in the Rec folder or organizing them by month, such as Rec/yyyyy-mm. |
| **Notification** | Controls the display of [trip recording messages](#notifications) in the device’s notification area. |
| **Online tracking** (*Android*) | Allows real-time tracking of your location by sending recorded points to a specified URL. The tracking interval determines how often points are sent, and the time buffer stores points when there’s no Internet connection.<details><summary>*Remark*</summary>If this option is enabled, and track recording is in progress, the Distance/Start-Stop (REC) widget turns **green** instead of **red**, indicating that each recorded point is being transmitted to a specified URL. The **Web address** field allows you to input the URL using the following parameter format:<ul><li>`lat={0}`: Latitude</li><li>`lon={1}`: Longitude</li><li>`timestamp={2}`: Timestamp (Unix time)</li><li>`hdop={3}`: Horizontal dilution of precision</li><li>`altitude={4}`: Altitude</li><li>`speed={5}`: Speed</li><li>`bearing={6}`: Bearing (direction of movement)</li><li>`eta={7}`: Estimated time of arrival (Unix time)</li><li>`etfa={8}`: Estimated time to the first intermediate point or finish point (Unix time)</li><li>`eda={9}`: Estimated distance to arrival or a marker (in meters)</li><li>`edfa={10}`: Estimated distance to the first intermediate point or finish point (in meters)</li></ul>You can set the **Tracking Interval** to specify how often location points are sent, with options ranging from 0 seconds to 5 minutes. Additionally, the **Time Buffer** parameter determines how long location points are stored if there is no Internet connection, ensuring data is saved and transmitted when the connection is restored.</details> |
| **Tracks** | A quick reference to the folder where tracks are saved *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>* tab. |
| **Reset plugin settings to default** | Resets all trip recording settings for the current profile to their defaults. |
| **Copy from another profile** (*Android*) | Copies the trip recording settings from one profile to another. |


### Battery Optimization

<InfoAndroidOnly />

![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_2_andr.png)  ![Track on the map iOS](@site/static/img/plugins/trip-recording/battery_1_andr.png)  

This feature allows you to manage battery optimization settings for OsmAnd to ensure uninterrupted access to your location, even when the app runs in the background during navigation or track recording.

- **Battery optimization settings**. Opens Android settings, where you can modify battery-saving preferences for OsmAnd.
- **Don't ask anymore**. Dismisses the dialog box permanently, so it will not appear again.
- **Close**. Temporarily closes the dialog box, which will appear again the next time battery optimization needs attention.


### Notifications

![Trip Rec Notification](@site/static/img/plugins/trip-recording/trip_rec_notification_andr.png)  

If [Notification](#recording-settings) is enabled in the plugin settings, trip recording notifications will always be displayed in the system notification area when the recording is active. This notification ensures that the recording process is not interrupted by the system, and it cannot be disabled during an active recording.

- The notification area opens when you swipe down from the top of the screen and closes when swiping up. These messages notify you of actions like starting/stopping trip recording, especially when automatic recording is enabled during navigation.
- Notifications remain visible regardless of whether the app is running in the foreground, background, or is closed. You can manually clear the old notification if it is no longer needed, but this will not stop the ongoing recording.

**Important note**.  
This behavior is required by Android for any foreground service, like trip recording, to remain visible to the user.

- If the notification is removed, Android will automatically stop the recording. You can use the [*Prevent standalone logging*](#recording-settings) setting.
- The **Notification** setting in OsmAnd affects whether the notification bar shows a shortcut to start a recording when no recording is active. It does **not** control the visibility of the notification during an active recording.

Additional *Android* options:

- In **Android settings** *→* **Notifications and status bar** *→* **Lock screen notifications**, you can remove OsmAnd from the app list to prevent notifications from appearing on the lock screen, avoiding accidental screen activation. This will not affect track recording. Notifications will still appear in the regular notification area.
- **OsmAnd** may also appear under **Privacy** *→* **Special Permissions** *→* **Turn on screen**. If you want to prevent the screen from turning on when a notification appears, try removing OsmAnd from this list.

<!--
- OsmAnd is not listed under **Privacy** *→* **Special Permissions** → **Alarms and reminders**.
-->

[Badge notification](#launcher-android).  
App icon badge appears next to the OsmAnd icon when track recording is active.

- This icon disappears when track recording is complete. To check if a recording is active, you can go to *Menu → My Places → Tracks tab* or tap the widget to manage the recording.  
- If there is no recording in progress and the badge is still displayed, it may mean that a message from OsmAnd has been left in the device notification panel.  
- To disable badges in Android settings, go to device *Settings → Apps → OsmAnd → Notifications* and disable the badge display option for this app.



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
