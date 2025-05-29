---
sidebar_position: 10
title:  OsmAnd Development
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



## Overview {#overview}

Test functions of the app are collected in the OsmAnd development plugin. Use them at your own risk.

The OsmAnd development plugin allows you to try new features of the app or to configure OsmAnd for testing: simulate navigation routes, check the screen rendering performance, etc. Plugin is designed for *developers and experienced users* and not required for daily use of the application.  


## Required Setup Parameters {#required-setup-parameters}

To activate special features for developers and testers:

1. [Enable](../plugins/index.md#enable--disable) OsmAnd development plugin in the Plugins section of the *Main Menu*.
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).  
3. Enable **developer widgets** if necessary.  


## Plugin Settings {#plugin-settings}

:::info info  
OsmAnd development plugin settings are global and apply to all profiles.  
:::  

Use one of the following paths to open the plugin settings:  

- *Main Menu → Plugins → OsmAnd development → Settings*.
- *Main Menu → [Global Settings](../personal/global-settings.md) → Profile → OsmAnd development plugin settings*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/development_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_settings_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>  


### Terrain {#terrain}

- **Use raster [SQLIte format](../../technical/osmand-file-formats/osmand-sqlite.md/) for hillshade and slope** (*Android*). Load old format raster maps.


### Troubleshotting {#troubleshotting}

- **Simulate your position** (*Android* / *iOS*). [Simulate](#gpx-track-simulation) the location and movement using a GPX track.
- **Battery saving mode** (*Android* / *iOS*). This setting reduces [the screen refresh rate](#map-rendering-fps-widget) by 20 frames per second to help save battery power while using applications.
- **Use 3D location position icons** (*iOS*). Allows you to select a 3D icon for the [My Location icon](../personal/profiles.md#my-location-appearance).
- **Simulate obd data** (*Android*). Allows simulation of [OBD scanner](./vehicle-metrics.md) usage.
- **Performance debug info** (*Android*). Displays rendering and navigation performance.
- **Disable map layers** (*Android*). Disables all map layers over the vector map (restart required).
- **Logcat buffer** (*Android*). Check and share detailed logs of the app.  
- **Show toast about pressed key** (*Android*). Display a message about the key.
- **<Translate android="true" ids="write_bearing"/>** (*Android*). <Translate android="true" ids="write_bearing_description"/>. Bearing is the compass direction from your current position to your intended destination. Affects *[track recording](../plugins/trip-recording.md)*.  
- **<Translate android="true" ids="write_heading"/>** (*Android*). <Translate android="true" ids="write_heading_description"/>. Heading is the compass direction from your current position towards true north. This option is enabled by default. Affects *[track recording](../plugins/trip-recording.md)*.


### Application Testing {#application-testing}

:::caution Android only
:::

- **Simulate first app start**. Sets the flag indicating first app startup, keeps all other settings unchanged.  
- **Test voice prompts**. Select a voice and test by playing announcements.  
- **Transparent status bar**. The map becomes visible under the status bar.  
- **Show free version banner**. Display the free version banner even in the paid version.  
- **Show debug information**. Display graphical information about the placement of each text on the map.
- **Allow display on top**. Allows map texts to be displayed on top of each other.


### Internal Algorithms {#internal-algorithms}

:::caution Android only
:::

- **Safe mode**. Run the app in (slower) safe mode.  


### Memory Settings {#memory-settings}

:::caution Android only
:::  

- **Memory allocated for routing** option allows you to determine the amount of memory allocated for calculating long routes. You can use this option if the [Standard routing A*](../navigation/guidance/navigation-settings.md#development-settings) is selected in the *Navigation settings*.

***Calculation of extra-long routes:***

- Higher memory allocation may impact the performance of other apps.
- [Calculation of 50 km routes for pedestrians](../troubleshooting/navigation.md#calculation-of-50-km-routes-for-pedestrians)


### Info and Statistics {#info-and-statistics}

:::caution Android only
:::  

- **Allocated memory**. Displays the allocated system memory for the OsmAnd application.  
- **Total native memory**. Displays the total amount of native memory allocated to the application, including proportional memory.  
- **A-GPS info**. Indicates when A-GPS data was last downloaded.  
- **Day/night info**.  Indicates today's sunrise and sunset times.  
- **Energy statistics (average 1 / 5 / 15 minutes)**. Displays battery level per minute (%) and average energy consumption (mAh) over 1, 5, and 15-minute intervals.  
- **Rendering statistics (average 1 / 5 / 15 minutes)**. Shows rendering statistics, including FPS over the last 1k frames, CPU (tiles), CPU (idle time), and CPU (standby) averages over 1, 5, and 15-minute intervals.  

**Button:**

- **Reset plugin settings to default**. Resets all plugin settings to their default values.

    ![Development Settings Android](@site/static/img/plugins/development/devplugin_stat_and.png)


## Map Rendering FPS Widget {#map-rendering-fps-widget}

:::info  Important
OsmAnd developer Widgets can be added to the screen only when OsmAnd development plugin is enabled.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*

![Development widget fps 1](@site/static/img/plugins/development/dev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets,map_widget_rendering_fps"/>*  

![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>  

The [FPS Widget](../widgets/info-widgets.md#map-rendering-fps) shows how fast the map and map elements are displayed and refreshed. The numeric value is indicated in frames per second (FPS).


## Camera Position Widgets {#camera-position-widgets}

:::info  Important
OsmAnd developer Widgets can be added to the screen only when OsmAnd development plugin is enabled.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,developer_widgets"/>*  

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,developer_widgets"/>*

![Camera position Widgets 1](@site/static/img/plugins/development/dev_widgets_camera_ios.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2_ios.png)

</TabItem>

</Tabs>  

You can use [Camera position widgets](../widgets/info-widgets.md#camera-widgets) to give the OsmAnd map a realistic look and match photos of the Earth taken both from above and from space.  


### Camera tilt {#camera-tilt}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Camera tilt widget Android 1](@site/static/img/plugins/development/developer_widg_cam_tilt_1.png) ![Camera tilt widget Android 2](@site/static/img/plugins/development/developer_widg_cam_tilt_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Camera tilt widget ios 1](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_1.png) ![Camera tilt widget ios 2](@site/static/img/plugins/development/developer_widg_cam_tilt_ios_2.png)  

</TabItem>

</Tabs>  

The Camera tilt widget displays the incline between the central view vector of the camera (viewer) and an imaginary flat ground of the earth. The default value is 90 degrees (no tilt).  

:::note  
The camera tilt is changed by moving the camera (viewer) while the center point on the map (we are looking at) remains the same. The distance to it (in fact, zoom) does not change.
At the same time, due to the imaginary movement of the viewer, the distance from the camera to the surface changes.
:::


### Camera Elevation {#camera-elevation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Camera elevation widget Android 1](@site/static/img/plugins/development/developer_widg_cam_elevation_1.png) ![Camera elevation widget Android 2](@site/static/img/plugins/development/developer_widg_cam_elevation_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Camera elevation widget ios 1](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_1.png) ![Camera elevation widget ios 2](@site/static/img/plugins/development/developer_widg_cam_elevation_ios_2.png)  

</TabItem>

</Tabs>  

The Camera Elevation widget shows the camera elevation above the surface level. Camera elevation is indicated in meters / kilometers.  


### Zoom Level {#zoom-level}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Zoom level widget Android 1](@site/static/img/plugins/development/developer_widget_zoom_2_andr.png) ![Zoom level widget Android 2](@site/static/img/plugins/development/developer_widg_zoom_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Zoom level widget ios 1](@site/static/img/plugins/development/developer_widget_zoom_ios_1_ios.png) ![Zoom level widget ios 2](@site/static/img/plugins/development/developer_widget_zoom_ios_2_ios.png)  

</TabItem>

</Tabs>  

The widget has two views that are switched by tapping it:  

- **<Translate android="true" ids="map_widget_zoom_level"/>**. Shows the current map zoom level.
- **<Translate android="true" ids="map_widget_map_scale"/>**. Shows the current ratio between a distance on a map and the corresponding distance on the earth. Examples: "1 : 3 000", "1 : 3,3 M" "1: 340 K".  

:::note

- The initial zoom level (0) is the level at which the entire surface of the earth (the full map) is displayed on the screen, and its size is 256 by 256 pixels.  
- Each next zoom level reduces the imaginary distance to the ground by about 2 times.

:::

### Distance to Target {#distance-to-target}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Distance to target widget 1 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_1.png) ![Distance to target widget 2 Android](@site/static/img/plugins/development/developer_widg_distance_to_target_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Distance to target widget 1 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_1.png) ![Distance to target widget 2 iOS](@site/static/img/plugins/development/developer_widg_distance_to_target_ios_2.png)  
</TabItem>

</Tabs>  

The Distance from camera to target widget shows the distance between the camera (viewer) and the center of the map. This distance is displayed in meters / kilometers.  


### Comparison with a Satellite Imagery {#comparison-with-a-satellite-imagery}

![Comparison](@site/static/img/plugins/development/comparison.png)

A comparison of the OsmAnd map and the earth's surface reveals the following patterns:  

- Maximum distortion is observed at large zooms (6-7 zoom for camera incline 90 degrees).  
- As the camera tilt decreases (from 90 to 10 degrees), the distortion of the map increases.  
- Distortions begin to be observed earlier in high latitudes.

The table below contains information about the tilt of the camera and the distance to the target and zoom level at which the OsmAnd map distortions become visible. If the camera continues to move away from the target, the observed distortion of the OsmAnd map will increase.  

|Incline (90) |Latitude |Max Zoom |Height, km |Distortion|  
|-----|-----|-----|-----|-----|
|90|26|6|5500|5%|
|90|50|6|2500|5%|
|90|66|7|1300|5%|
|**Incline (60)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|65|26|8|1100|6.5%|
|65|50|8|800|6.5%|
|65|66|9|630|6.5%|
|**Incline (45)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|45|26|9|350|7.5%|
|45|50|9|320|7.5%|
|45|66|8|210|7.5%|
|**Incline (20)** |**Latitude** |**Max Zoom** |**Height, km** |**Distortion**|
|20| 26|12|30|10%|
|20| 50|11|30|10%|
|20| 66|11|30|10%|


## Available RAM Widget {#available-ram-widget}

This widget is designed specifically for you when using OsmAnd to provide a more convenient and informative interaction with the available RAM on your device. It allows you to easily and quickly monitor the available RAM, which is especially useful when using OsmAnd for navigation. Read more about the widget in the [Information widgets](../widgets/info-widgets.md#available-ram) article.


## GPX-Track Simulation {#gpx-track-simulation}

OsmAnd provides an opportunity to simulate the location and movement of your device using a GPX track. For these purposes, use *<Translate android="true" ids="simulate_location_by_gpx"/>* option in the OsmAnd development plugin [settings](#plugin-settings):  

- Tap *<Translate android="true" ids="simulate_location_by_gpx"/>*.  
- Select a track to simulate the location and movement of the device.
- Select movement simulation speed.
- Tap Start buton.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_1.png) ![Development Settings Android](@site/static/img/plugins/development/simulate_position_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png)  

</TabItem>

</Tabs>  

After running the simulation, you will see on the main screen of the app that navigation mark is moving according to GPX track. Tap [my location button](../map/interact-with-map#my-location-and-zoom) to synchronize *My Location* (simulated geolocation of the device) with the center of the map.  
To stop simulation of the movement of your device, go back to the OsmAnd development [settings](#plugin-settings) and tap **stop** in the **simulate your position** option.

- *<Translate android="true" ids="simulate_location_by_gpx"/>* can be also accessed through **[Quick action menu](../widgets/quick-action.md#navigation)**.
- The location movement speed during the simulation can be set equal to the recorded speed (1), or faster (x2, x3, x4).
- You can also simulate movement along a GPX-track from the [navigation menu](../navigation/setup/route-navigation.md#simulated-navigation) without enabling the OsmAnd development plugin. In that case, your location will not be synchronized with the track.


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in May 2023*
