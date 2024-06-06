---
sidebar_position: 17
title:  Plugins
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

Plugins significantly enhance OsmAnd's functionality. Each is designed to solve a problem or use case, such as trip recording, accessing Wikipedia articles offline, visualizing terrain data, providing street-level views, etc.

Plugins can be internal (you can activate them inside the OsmAnd app) or external (separately installed programs). Third-party plugins work via the OsmAnd API and can get access to OsmAnd data.  


## Configure a plugin

In order to access a plugin's functionality, it must first be [enabled](#enable--disable), and some plugins require a [purchase](#purchase) before use. Then, in some cases, a specific map layer must be activated, or a user profile must be [configured](#plugin-settings).


### Enable / disable

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable / disable plugins go to:  
*<Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable*

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To enable / disable plugins go to:  
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

🤖 - only for Android version of OsmAnd.

| Plugin name |Features |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Map layer](../plugins/wikipedia.md#download-wikipedia-packages), [Context menu](../plugins/wikipedia.md#wikipedia-languages) |
| [Online maps](#online-maps) |[Map layer](../plugins/online-map.md#configure-map-source) |
| [Trip recording](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profile](../plugins/trip-recording.md#profile-settings) |
| [Topography](#topography) | [Map layer](../plugins/contour-lines.md#configure-map-view) |
| 🤖 [3D Relief](#topography) | [Map layer](../plugins/contour-lines.md#3d-relief) |
| [Weather](../plugins/weather.md) | [Map layer](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Screen](../plugins/weather.md#configure-screen) |
| [Nautical map view](#nautical-map-view) | [Map style](../plugins/nautical-charts.md#nautical-map-style), [Profile](../plugins/nautical-charts.md#nautical-options)  |
| [Ski map view](#ski-map-view) | [Map style](../plugins/ski-maps.md#set-winter-style), [Profile](../plugins/ski-maps.md#skiing-profile) |
|🤖 [Audio/video notes](#audiovideo-notes) | [Map layer](../plugins/audio-video-notes.md#show-all-on-the-map), [Context menu](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap editing](#openstreetmap-editing)| [Map layer](../plugins/osm-editing.md#how-to-use) |
|[Parking position](#parking-position) | [Context menu](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|[Mapillary](#mapillary) | [Map layer](../plugins/mapillary.md#map-layer), [Context menu](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|🤖 [External Sensors](#external-sensors) | [Widget](../plugins/external-sensors.md#widgets) |
|🤖 [Accessibility](#accessibility) | [Custom Settings](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd development](#osmand-development) | [Custom Settings](../plugins/development.md#plugin-settings) |
|🤖 [OsmAnd Tracker](#osmand-tracker) | [Map Layer](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Context Menu](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |


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

🤖 - only for Android version of OsmAnd.

| Plugin name | Settings |
|:------------|:-------|
| [Trip recording](#trip-recording) | Сonfigure the trip recording [operation modes](../plugins/trip-recording.md#recording-parameters) |
| [Weather](#weather) | Configure measurement units for displaying weather events |
|🤖 [Audio/video notes](#audiovideo-notes) | Select [video format, how long to store, etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap editing](#openstreetmap-editing)| Specify user [login](../plugins/osm-editing.md#plugin-settings)  |
|🤖 [External Sensors](#external-sensors) | Connect to external device [Settings](../plugins/external-sensors.md#settings) |
|🤖 [Accessibility](#accessibility) | [Settings](../plugins/accessibility.md#plugin-settings) allow you to use Accessibility [Android features](https://www.android.com/accessibility/) inside OsmAnd. |
| [OsmAnd development](#osmand-development) | [Plugin settings](../plugins/development.md#plugin-settings) allow you to enable special features for developers or experienced users |
|🤖 [OsmAnd Tracker](#osmand-tracker) | All settings are configurable in a separate app |

#### Plugin settings - actions

<InfoAndroidOnly/>

**<Translate android="true" ids="reset_plugin_to_default"/>** - *using this option plugin settings can be reset to default values*.  
**<Translate android="true" ids="copy_from_other_profile"/>** - *plugin settings can be copied from another profile*.

## List

### [Wikipedia](./wikipedia.md)

Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Wikipedia articles in relation to the points of interest right on the map.

### [Online maps](./online-map.md)

OsmAnd Online maps are an extensive addition to the OpenStreetMap database already present in the application. With this plugin, you can add layers to your map with information from various sources.  

### [Trip recording](./trip-recording.md)

To tell a story of where you have been, GPS data, as latitude and longitude of your location, can be recorded and stored in a file, and then re-used, improved, enhanced with waypoints, provided for navigation, shared with friends, etc.  

### [Topography](./contour-lines.md)

Topography information, such as Contour lines, Hillshade, Slope, 3D Relief, helps to make a visual assessment of the lay of the land by seeing elevation, relief, extremes, steepness, points of equal height, etc.  

### [Nautical map view](./nautical-charts.md)

Nautical map view provides detailed graphical representation of oceans, seas, coastal areas and rivers to help you navigate on the water, see popular traffic routes, obstacles in the waterway, harbors, anchorages, and other essential reference.

### [Ski map view](./ski-maps.md)

Ski map view uses winter colors, shows downhill or cross-country pistes, cable cars, chairlifts, and other facilities and services, which can be used to navigate recreation areas, ski resorts and terrain parks.

### [Audio/video notes](./audio-video-notes.md)

Create audio/video notes for future reference, e.g. to remember a event, scene, or interaction. Created audio/video notes are available from *My places* as well as on the map as an individual layer of user-made stories and thoughts tied to a geolocation. For Android only.  

### [Parking position](./parking.md)

Set a point on the map where your car is left on the street and notify your calendar when the parking time ends. This will make it easier for you to track the time and location of your car.

### [OpenStreetMap editing](./osm-editing.md)

The OpenStreetMap editing plugin allows you to contribute to OpenStreetMap, a global community creating a comprehensive map of the world and providing publicly available up-to-date, open-source data.  

### [Mapillary](./mapillary.md)

See street-level views of your routes or places of interest, provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).  

### [Accessibility](./accessibility.md)

The Accessibility plugin makes the device's accessibility features directly available in OsmAnd. For Android only.  

### [External sensors](./external-sensors.md)

Connect external sensors to display their data in OsmAnd and to store the information in track recordings. For Android only.  

### [Weather](./weather.md)

Shows the hourly forecast for the current day and for 7 days ahead.  

### [OsmAnd development](./development.md)

The OsmAnd development plugin targets developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.  

### [OsmAnd Tracker](./osmand-tracker.md)

OsmAnd Tracker helps you see where your contacts are on the map in OsmAnd. For Android only.  
