---
sidebar_position: 3
title:  Configure Plugins
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

Plugins significantly extend the functionality of OsmAnd. Each is designed to address a specific task or use case, such as recording a trip, accessing Wikipedia articles offline, visualizing terrain data, or providing a street-level view.

Plugins can be internal, activated in the OsmAnd application, or external, separately installed programs. Third-party plugins work through the OsmAnd API and can access OsmAnd data.


## Configure Plugin

In order to access a plugin's functionality, it must first be [enabled](#enable--disable), and some plugins require a [purchase](#purchase) before use. Then, in some cases, a specific map layer must be activated, or a user profile must be [configured](#plugin-settings).


### Enable / Disable

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable*

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plugins_menu_group"/> → &#10003;*

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Purchase

Most plugins are available for free, only the plugins in the list below require the purchase of an [OsmAnd+ or OsmAnd Pro](../purchases/index.md) license to use:  

- [Topography](../plugins/contour-lines.md)
- [3D Relief](../plugins/contour-lines.md#3d-relief) (feature of the Topography plugin)
- [Wikipedia](../plugins/wikipedia.md)
- [Nautical map view](../plugins/nautical-charts.md)
- [Weather](../plugins/weather.md)

Detailed information about the application purchase can be found in the [Purchase](../purchases/) section.

### Plugin Features

OsmAnd Plugins may augment these Feature groups: **Layers**, **Widgets**, **Context Menu actions**, **Drawer actions**, **Map Style**, **Map Source**, **Profile**.

🤖 *- only for Android version of OsmAnd.*

| Plugin name |Features |
|:------------|:-------|
| [Wikipedia](../plugins/wikipedia.md) | [Map layer](../plugins/wikipedia.md#download-wikipedia-packages), [Context menu](../plugins/wikipedia.md#wikipedia-languages) |
| [Online maps](../plugins/online-map.md) |[Map layer](../plugins/online-map.md#configure-map-source) |
| [Trip recording](../plugins/trip-recording.md) | [Widget](../plugins/trip-recording.md#widgets), [Profile](../plugins/trip-recording.md#profile-settings) |
| [Topography](../plugins/contour-lines.md) | [Map layer](../plugins/contour-lines.md#configure-map-view) |
| [3D Relief](../plugins/contour-lines.md#3d-relief) 🤖  | [Map layer](../plugins/contour-lines.md#3d-relief) |
| [Weather](../plugins/weather.md) | [Map layer](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Screen](../plugins/weather.md#configure-screen) |
| [Nautical map view](../plugins/nautical-charts.md) | [Map style](../plugins/nautical-charts.md#nautical-map-style), [Profile](../plugins/nautical-charts.md#nautical-options)  |
| [Ski map view](../plugins/ski-maps.md) | [Map style](../plugins/ski-maps.md#set-winter-style), [Profile](../plugins/ski-maps.md#skiing-profile) |
|[Audio/video notes](../plugins/audio-video-notes.md) 🤖  | [Map layer](../plugins/audio-video-notes.md#show-all-on-the-map), [Context menu](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap editing](../plugins/osm-editing.md)| [Map layer](../plugins/osm-editing.md#how-to-use) |
|[Parking position](../plugins/parking.md) | [Context menu](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](../plugins/mapillary.md) | [Map layer](../plugins/mapillary.md#map-layer), [Context menu](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|[External Sensors](../plugins/external-sensors.md) 🤖  | [Widget](../plugins/external-sensors.md#widgets) |
|[Accessibility](../plugins/accessibility.md) 🤖  | [Custom Settings](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd development](../plugins/development.md) | [Custom Settings](../plugins/development.md#plugin-settings) |
| [OsmAnd Tracker](../plugins/osmand-tracker.md) 🤖  | [Map Layer](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Context Menu](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |


### Plugin Settings

:::caution NOTE
Only the OsmAnd development plugin and the OSM editing plugin change settings for all profiles. The remaining plugins are configured for each profile separately.  
:::

Most plugins provide specific profile or global settings, which can be accessed via:

- *Main menu → Plugins → Plugin name → Settings (&#x2699 for ios)* or  
- *Main menu → Settings → Profile → [Plugin settings](../personal/profiles.md#plugin-settings)*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Settings plugin Android 1](@site/static/img/plugins/development/access_plugin_settings_andr_2.png) ![Settings plugin Android 2](@site/static/img/plugins/development/access_plugin_settings_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Settings plugin iOS 1](@site/static/img/plugins/development/access_plugin_settings_ios_2.png) ![Settings plugin iOS 2](@site/static/img/plugins/development/access_plugin_settings_ios_1.png)

</TabItem>

</Tabs>

The following plugins provide their own settings:

🤖 *- only for Android version of OsmAnd.*

| Plugin name | Settings |
|:------------|:-------|
| [Trip recording](../plugins/trip-recording.md) | Сonfigure the trip recording [operation modes](../plugins/trip-recording.md#recording-parameters) |
| [Weather](../plugins/weather.md) | Configure measurement units for displaying weather events |
|[Audio/video notes](../plugins/audio-video-notes.md) 🤖  | Select [video format, how long to store, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap editing](../plugins/osm-editing.md)| Specify user [login](../plugins/osm-editing.md#plugin-settings)  |
|  [External Sensors](../plugins/external-sensors.md) 🤖  | Connect to external device [Settings](../plugins/external-sensors.md#settings) |
|  [Accessibility](../plugins/accessibility.md) 🤖  | [Settings](../plugins/accessibility.md#plugin-settings) allow you to use Accessibility [Android features](https://www.android.com/accessibility/) inside OsmAnd. |
| [OsmAnd development](../plugins/development.md) | [Plugin settings](../plugins/development.md#plugin-settings) allow you to enable special features for developers or experienced users |
|  [OsmAnd Tracker](../plugins/osmand-tracker.md) 🤖  | All settings are configurable in a separate app |


### Plugin Actions

**<Translate android="true" ids="reset_plugin_to_default"/>** - *using this option plugin settings can be reset to default values*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *plugin settings can be copied from another profile*.

> *This article was last updated in June 2024*
