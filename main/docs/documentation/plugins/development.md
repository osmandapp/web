---
sidebar_position: 12
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

<InfoIncompleteArticle/>

OsmAnd development plugin is only necessary for developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.


Development plugin allows you to settings OsmAnd for testing: to simulate navigation routes, check screen rendering performance, etc.


## Enable / Disable plugin

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,developer_plugin"/>

![Development plugin Android](@site/static/img/plugins/development/development_plugin_android.png)


### Plugin settings

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,developer_plugin,shared_string_settings"/>

![Development Settings Android](@site/static/img/plugins/development/development_plugin_settings_android.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_plugin_settings_2_android.png)


Settings and info
- <Translate android="true" ids="safe_mode"/> - <Translate android="true" ids="safe_mode_description"/>

**Navigation**:

- <Translate android="true" ids="simulate_your_location"/> - <Translate android="true" ids="simulate_your_location_gpx_descr"/>

**OsmAnd development**:

- <Translate android="true" ids="trace_rendering"/> - <Translate android="true" ids="trace_rendering_descr"/> 
- <Translate android="true" ids="simulate_initial_startup"/> - <Translate android="true" ids="simulate_initial_startup_descr"/>
- <Translate android="true" ids="show_free_version_banner"/> - <Translate android="true" ids="show_free_version_banner_description"/>
-&nbsp;<Translate android="true" ids="test_voice_prompts"/> - [<Translate android="true" ids="play_commands_of_currently_selected_voice"/>](/docs/documentation/navigation/voice-navigation#testing-of-voice-prompts-android) 
- <Translate android="true" ids="logcat_buffer"/> - <Translate android="true" ids="logcat_buffer_descr"/>

**Info**:

- <Translate android="true" ids="global_app_allocated_memory"/> - shows operatinal memory for Adnroid and ART (Android Runtime).
- <Translate android="true" ids="native_app_allocated_memory"/> - shows native memory for Android and ART (Android Runtime).
- <Translate android="true" ids="agps_info"/> - shows info about A-GPS data
- <Translate android="true" ids="day_night_info"/> - shows sunrise/sunset time.

## How to use

Click to <Translate android="true" ids="simulate_your_location"/> in the Settings → Navigation. 
Next, you need to choose route simulation speed and choose GPX track for simulation of device location.
