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

The OsmAnd development plugin is designed for *developers and experienced users*. It allows you to configure OsmAnd for testing: simulate navigation routes, check the screen rendering performance, etc. Plugin is not required for normal application use.

## Setup 

To activate special features for developers and testers:

1. [Enable](../plugins/index.md#enable--disable) OsmAnd development plugin in the Plugins section of the Main menu.
2. Make the necessary settings in the plugin's [Settings menu](#plugin-settings).

## Plugin settings


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

To find OsmAnd development plugin, follow these steps: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,debugging_and_development,shared_string_settings"/>*

![Development Settings Android](@site/static/img/plugins/development/development_plugin_settings_1_andr.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_plugin_settings_2_andr.png)


### Settings and info

These plugin settings are global and apply to all profiles.  


- <Translate android="true" ids="use_opengl_render"/> - <Translate android="true" ids="use_opengl_render_descr"/>  


#### Safe:

- <Translate android="true" ids="safe_mode"/> - <Translate android="true" ids="safe_mode_description"/>
- <Translate android="true" ids="approx_safe_mode"/> - <Translate android="true" ids="approx_safe_mode_description"/>

#### Navigation:

- <Translate android="true" ids="simulate_your_location"/> - <Translate android="true" ids="simulate_your_location_gpx_descr"/>

#### OsmAnd development:

- <Translate android="true" ids="trace_rendering"/> - <Translate android="true" ids="trace_rendering_descr"/> 
- <Translate android="true" ids="transparent_status_bar"/> - <Translate android="true" ids="transparent_status_bar_descr"/>. 
- <Translate android="true" ids="simulate_initial_startup"/> - <Translate android="true" ids="simulate_initial_startup_descr"/>
- <Translate android="true" ids="show_free_version_banner"/> - <Translate android="true" ids="show_free_version_banner_description"/>
- <Translate android="true" ids="test_voice_prompts"/> - Select a voice and test by playing announcements.
- <Translate android="true" ids="logcat_buffer"/> - <Translate android="true" ids="logcat_buffer_descr"/>.

#### Info:

- <Translate android="true" ids="memory_allocated_for_routing"/> - see below in this article.
- <Translate android="true" ids="global_app_allocated_memory"/> - shows operatinal memory for Adnroid and ART (Android Runtime).
- <Translate android="true" ids="native_app_allocated_memory"/> - shows native memory for Android and ART (Android Runtime).
- <Translate android="true" ids="agps_info"/> - shows info about A-GPS data.
- <Translate android="true" ids="day_night_info"/> - shows sunrise/sunset time.  


### Memory allocated for routing  

<Translate android="true" ids="memory_allocated_for_routing"/> - <Translate android="true" ids="memory_allocated_for_routing_ds"/>  

- Minimum value = 64 MB.
- Maximum value = 50% of Phone memory.
- Default value = 256 MB.  


![Development Settings Android](@site/static/img/plugins/development/development_plugin_memory_alloc_android.png)


</TabItem>

<TabItem value="ios" label="iOS">  

To find settings of OsmAnd development plugin, follow these steps: *<Translate ios="true" ids="menu,sett_settings"/> → choosing a profile → <Translate ios="true" ids="plugins,product_title_development"/>*. 

Here you can simulate your position by GPX-track. [Read here](../plugins/development.md#how-to-use) about GPX-track simulation.

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_gpx_simulation_1_ios.png)

</TabItem>

</Tabs> 


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- Tap to **<Translate android="true" ids="simulate_your_location"/>** in the <Translate android="true" ids="shared_string_menu,plugins_menu_group,debugging_and_development,shared_string_settings"/> → Navigation. 
- Select a route simulation speed.
- Select a GPX track to simulate the location of the device.  

![Development Settings Android](@site/static/img/plugins/development/start_simulation_1.png)
![Development Settings Android](@site/static/img/plugins/development/start_simulation_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

You can simulate location moving by using GPX track:
- _<Translate ios="true" ids="menu,sett_settings"/> → choosing a profile → <Translate ios="true" ids="plugins,product_title_development,simulate_routing"/>_:

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_gpx_simulation_ios.png)

- Select a GPX track to simulate the location of the device _<Translate ios="true" ids="menu,sett_settings"/> → choosing a profile → <Translate ios="true" ids="plugins,product_title_development,simulate_routing,shared_string_gpx_track"/>_

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_track_1_ios.png)

- Select a route simulation speed: _<Translate ios="true" ids="menu,sett_settings"/> → choosing a profile → <Translate ios="true" ids="plugins,product_title_development,simulate_routing,simulate_location_movement_speed"/>_  
  - _Original_ (the location movement speed during the simulation will be equal to the speed in the selected file).
  - _x2_ (the location movement speed during the simulation will be x2 bigger to the speed in the selected file).
  - _x3_ (the location movement speed during the simulation will be x3 bigger to the speed in the selected file).
  - _x4_ (the location movement speed during the simulation will be x4 bigger to the speed in the selected file).

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_speed_ios.png)

- Star-stop of the location movement: _<Translate ios="true" ids="menu,sett_settings"/> → choosing a profile → <Translate ios="true" ids="plugins,product_title_development,simulate_routing,shared_string_start"/> / <Translate ios="true" ids="shared_string_stop"/>_ 

![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_start_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_stop_ios.png) ![Development Settings iOS](@site/static/img/plugins/development/development_plugin_choose_simulation_ios.png)

</TabItem>

</Tabs> 
