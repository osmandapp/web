---
sidebar_position: 12
title:  OsmAnd development
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

OsmAnd development plugin is only necessary for developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.


Development plugin allows you to settings OsmAnd for testing: to simulate navigation routes, check screen rendering performance, etc.


## Enable / Disable plugin

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → {% data variables.android-values.developer_plugin %}

![Development plugin Android](@site/static/img/plugins/development/development_plugin_android.png)


### Plugin settings

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.plugins_menu_group: %} → {% data variables.android-values.developer_plugin %} → {% data variables.android-values.shared_string_settings %}

![Development Settings Android](@site/static/img/plugins/development/development_plugin_settings_android.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_plugin_settings_2_android.png)


Settings and info
- {% data variables.android-values.safe_mode %} - {% data variables.android-values.safe_mode_description %}

**Navigation**:

- {% data variables.android-values.simulate_your_location %} - {% data variables.android-values.simulate_your_location_gpx_descr %} 

**OsmAnd development**:

- {% data variables.android-values.trace_rendering %} - {% data variables.android-values.trace_rendering_descr %} 
- {% data variables.android-values.simulate_initial_startup %} - {% data variables.android-values.simulate_initial_startup_descr %}
- {% data variables.android-values.show_free_version_banner %} - {% data variables.android-values.show_free_version_banner_description %} 
- {% data variables.android-values.test_voice_prompts %} - [{% data variables.android-values.play_commands_of_currently_selected_voice %}](/docs/documentation/navigation/voice-navigation#testing-of-voice-prompts-android) 
- {% data variables.android-values.logcat_buffer %} - {% data variables.android-values.logcat_buffer_descr %}

**Info**:

- {% data variables.android-values.global_app_allocated_memory %} - shows operatinal memory for Adnroid and ART (Android Runtime).
- {% data variables.android-values.native_app_allocated_memory %} - shows native memory for Android and ART (Android Runtime).
- {% data variables.android-values.agps_info %} - shows info about A-GPS data
- {% data variables.android-values.day_night_info %} - shows sunrise/sunset time.

## How to use

Click to {% data variables.android-values.simulate_your_location %} in the Settings → Navigation. 
Next, you need to choose route simulation speed and choose GPX track for simulation of device location.
