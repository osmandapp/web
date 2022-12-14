---
sidebar_position: 15
title:  OsmAnd development
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

## Overview

The OsmAnd development plugin is designed for *developers and experienced users*. It allows you to try new features of the app or to configure OsmAnd for testing: simulate navigation routes, check the screen rendering performance, etc. Plugin is not required for daily use of the application.

## Setup  

To activate special features for developers and testers:

1. [Enable](../plugins/index.md#enable--disable) OsmAnd development plugin in the Plugins section of the Main menu.
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).

## Plugin settings

:::info info  
Development plugin settings are global and apply to all profiles.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Plugin development settings can be reached via two options:  

- *Main menu → Plugins → OsmAnd development → Settings*. 
- *Main menu → [Global Settings](../personal/global-settings.md) → Profile → OsmAnd development plugin settings*.  

![Development Settings Android](@site/static/img/plugins/development/development_android_settings_1.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_android_settings_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Plugin development settings can be reached via:  

- *Main menu → [Global Settings](../personal/global-settings.md) → Profile → OsmAnd development plugin settings*.  

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>  

:::caution NOTE
The options listed below are only available in the Android version of OsmAnd
:::

### Pre-beta features

- **Transparent status bar** - The map becomes visible under the status bar.  
- **Heightmap** option adds the ability to load Heightmaps and Altitude widgets (they display the altitude of the current geolocation or the elevation of the current map center).

:::note
Heightmaps available for testing only for some regions.
:::

### Troubleshotting

- **Simulate your position** - [Simulate](#gpx-track-simulation) your position using a recorded GPX track.  
- **Rendering debug info** - Display the rendering performance.  
- **Logcat buffer** - Check and share detailed logs of the app.  

### Application Testing

- **Simulate first app start** - Sets the flag indicating first app startup, keeps all other settings unchanged. 
- **Test voice prompts** - Select a voice and test by playing announcements.
- **Show free version banner** - Display the free version banner even in the paid version.  

### Internal Algorithms

- **Safe mode** - Run the app in (slower) safe mode.  
- **Safe GPX approximation** - Perform the GPX approximation using slower Android instead of native code.    

### Memory settings

- **Memory allocated for routing** option allows you to determine the amount of memory allocated for calculating long routes.  

:::note
Higher memory allocation may impact the performance of other apps.
:::

## Widgets  

You can use OsmAnd development Widgets to get additional information about zoom level, map rendering speed, elevation of the map center above sea level, distance to map center, camera elevation and incline.  

:::info  Important
OsmAnd development Widgets can be added to the screen only when OsmAnd development plugin is enabled.  
:::

### FPS Widget

FPS Widget shows how fast the map and map elements are displayed and refreshed. The numeric value of this parameter displays the number of frames per second (FPS).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Use the following path to display the widget on the map screen:  
*Menu → Configure screen → Left / Right panel → Developer Widgets → FPS Widget*  

![Development widget fps 1](@site/static/img/plugins/development/ldev_widgets_fps_1.png) ![Development widget fps 2](@site/static/img/plugins/development/dev_widgets_fps_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Use the following path to display the widget on the map screen:  
*Menu → Configure screen → FPS Widget*  

![Development widget iOS](@site/static/img/plugins/development/dev_widgets_ios_fps.png) ![Development widget iOS 2](@site/static/img/plugins/development/dev_widgets_ios_fps_2.png)

</TabItem>

</Tabs>  

### Elevation Widget  

With Elevation Widget you can find out the elevation above sea level of the current map center.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*Menu → Configure screen → Left / Right panel → Altitude → Elevation: map center* 

![Elevation Widget 1](@site/static/img/plugins/development/dev_widgets_altitude_1.png) ![Elevation Widget 2](@site/static/img/plugins/development/dev_widgets_altitude_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

<!-- TODO use component & Review -->
:::caution Android only
Altitude Widget is currently not available for the iOS version of the OsmAnd app.  
:::

</TabItem>

</Tabs>  

:::caution  
The widget will display the information only after the heightmaps of the desired area are [downloaded](../start-with/download-maps.md). Please note that these maps are only available for some regions.  
:::

## Camera position Widgets (Android) 

In order to make sure that the OsmAnd map is realistic and corresponds to photos of the Earth made from a height (as well as from space), you can use Camera position Widgets.

*Menu → Configure screen → Left / Right panel → Developer Widgets*    

![Camera position Widgets 21](@site/static/img/plugins/development/dev_widgets_camera.png) ![Camera position Widgets 2](@site/static/img/plugins/development/dev_widgets_camera_2.png)

### Camera tilt

The widget displays the incline between the central view vector of the camera (viewer) and an imaginary flat ground of the earth. The default value is 90 degrees (no tilt).  

:::note  
The camera tilt is changed by moving the camera (viewer) while the center point on the map surface (we are looking at) remains the same. The distance to it (in fact, zoom) does not change.
At the same time, due to the imaginary movement of the viewer, the distance from the camera to the surface changes.
:::

### Camera Elevation

The widget shows the camera elevation above the surface level.  

### Zoom level

The widget represents the current map zoom level.  

:::note
The initial zoom level (0) is the level at which the entire surface of the earth (the full map) is displayed on the screen, and its size is 256 by 256 pixels.  
Each next zoom level reduces the imaginary distance to the ground by about 2 times.  
:::

### Distance to target

Distance from camera to target widget shows the distance between camera (viewer) and center of the map.  

### Comparison with a satellite imagery

A comparison of the map and the earth's surface reveals the following patterns:  

- Maximum distortion is observed at large zooms (6-7 zoom for camera incline 90 degrees).  
- As the camera tilt decreases (from 90 to 10 degrees), the distortion of the map increases.  
- Distortions begin to be observed earlier in high latitudes.

The table below contains information about possible distortions of the OsmAnd map depending on the camera (viewer) tilt.

Incline |Latitude |Max Zoom |Height, km |Distortion  
|-----|-----|-----|-----|-----|
|90| 26|	6|	5500|	5%|
|90| 50|	6|	2500|	5%|
|90| 66|	7|	1300|	5%|
|	|	|	|	|  |
|65	|26	|8	|1100|	6.5%|
|65	|50	|8	|800|	6.5%|
|65	|66	|9	|630|	6.5%|
|	|	|	|	|  |
|45|	26|	9|	350|	7.5%|
|45|	50|	9|	320|	7.5%|
|45|	66|	8|	210|	7.5%|
|	|	|	|	| |
|20| 26|	12|	30|	10%|
|20| 50|	11|	30|	10%|
|20| 66|	11|	30|	10%|


## GPX-track simulation

The development plugin provides an opportunity to simulate movement using a GPX track. For these purposes, do the following:  

- Tap **<Translate android="true" ids="simulate_your_location"/>**. 
- Select a route simulation speed.
- Select a GPX track to simulate the location of the device.  

:::note
The location movement speed during the simulation can be equal to the speed in the file (1), or bigger (x2, x3, x4)
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/start_simulation_1.png) ![Development Settings Android](@site/static/img/plugins/development/start_simulation_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png) 

</TabItem>

</Tabs>  
