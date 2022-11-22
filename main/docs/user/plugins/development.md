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

Plugin development settings can be reached via:  

- **Android**: *Main menu → Plugins → OsmAnd development → Settings*  or  
- **Android**, **iOS**: *Main menu → [Global Settings](../personal/global-settings.md) → Profile → OsmAnd development plugin settings*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/development_android_settings_1.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_android_settings_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>  

- <Translate android="true" ids="safe_mode"/> - <Translate android="true" ids="safe_mode_description"/>
- <Translate android="true" ids="approx_safe_mode"/> - <Translate android="true" ids="approx_safe_mode_description"/>
- <Translate android="true" ids="simulate_your_location"/> - <Translate android="true" ids="simulate_your_location_gpx_descr"/>
- <Translate android="true" ids="trace_rendering"/> - <Translate android="true" ids="trace_rendering_descr"/> 
- <Translate android="true" ids="transparent_status_bar"/> - <Translate android="true" ids="transparent_status_bar_descr"/>. 
- <Translate android="true" ids="simulate_initial_startup"/> - <Translate android="true" ids="simulate_initial_startup_descr"/>
- <Translate android="true" ids="show_free_version_banner"/> - <Translate android="true" ids="show_free_version_banner_description"/>
- <Translate android="true" ids="test_voice_prompts"/> - Select a voice and test by playing announcements.
- <Translate android="true" ids="logcat_buffer"/> - <Translate android="true" ids="logcat_buffer_descr"/>.  

**Memory allocated for routing** option allows you to determine the amount of memory allocated for calculating long routes.  

:::caution NOTE
Higher memory allocation may impact the performance of other apps.
:::

## GPX-track simulation

The development plugin provides an opportunity to simulate movement on a GPX track. For these purposes, make the following settings:  

- Tap on **<Translate android="true" ids="simulate_your_location"/>**. 
- Select a route simulation speed.
- Select a GPX track to simulate the location of the device.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Development Settings Android](@site/static/img/plugins/development/start_simulation_1.png) ![Development Settings Android](@site/static/img/plugins/development/start_simulation_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png) 

</TabItem>

</Tabs>  
