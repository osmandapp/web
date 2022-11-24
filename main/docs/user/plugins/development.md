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

:::caution NOTE  
Development plugin settings are global and apply to all profiles.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Plugin development settings can be reached via:  

- *Main menu → Plugins → OsmAnd development → Settings*  or  
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

- Widgets FPS
- Widgets Camera position
- Center screen
- Zoom number (Android)

## GPX-track simulation

The development plugin provides an opportunity to simulate movement using a GPX track. For these purposes, do the following:  

- Tap on **<Translate android="true" ids="simulate_your_location"/>**. 
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
