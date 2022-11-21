---
sidebar_position: 8
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

## Overview
Plugins greatly enhance OsmAnd functionality. Each of them is designed to solve a separate problem, such as trip recording, getting Wikipedia articles offline, putting additional terrain data or street-level views on the map etc.
Plugins can be internal (you can turn them on inside the OsmAnd app) or external (separately installed programs). 3rd party plugins work via OsmAnd API and can get access to OsmAnd data. 

## Configure plugin
In order to get access to the specific functions, provided by a plugin, it must be [enabled first](#enable--disable). You need to [purchase](#purchase) some plugins before use. In some cases special map layer should be activated or user profile should be [configured](#plugin-settings).

### Enable / disable

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable / disable plugins go to:
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings"/> →  &#65049; → Enable

![Enable plugins Android](@site/static/img/settings/plugins_enable_android.png) ![Plugin example Android](@site/static/img/settings/plugin_example_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

To enable / disable plugins go to:
<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plugins"/> → &#10003;

![Enable plugins iOS](@site/static/img/settings/plugins_enable_ios.png) ![Plugin example iOS](@site/static/img/settings/plugin_example_ios.png)

</TabItem>

</Tabs>

### Purchase

Most plugins are available for free, only three of them require purchase of OsmAnd+ or OsmAnd Pro license before use:  

- [Contour lines and Terrain](../plugins/contour-lines.md)  
- [Wikipedia](../plugins/wikipedia.md)  
- [Nautical map view](../plugins/nautical-charts.md)  
- [Weather](../plugins/weather.md)  

Detailed information about the purchase of the application can be found in the section [Purchase](../purchases/).

### Plugin Features

OsmAnd Plugins could countribute to these Feature groups: **Layer**, **Widgets**, **Context Menu actions**, **Drawer actions**, **Map Style**, **Map Source**, **Profile**.

🤖 - only for Android version of OsmAnd.

| Plugin name |Features |
|:------------|:-------|
| [Wikipedia](#wikipedia) | [Map layer](../plugins/wikipedia.md#download-wikipedia-packages), [Context menu](../plugins/wikipedia.md#wikipedia-languages) |
| [Online maps](#online-maps) |[Map layer](../plugins/online-map.md#configure-map-source) |
| [Trip recording](#trip-recording) | [Widget](../plugins/trip-recording.md#widgets), [Profile](../plugins/trip-recording.md#profile-settings) |
| [Contour lines and Terrain](#contour-lines-and-terrain) | [Map layer](../plugins/contour-lines.md#configure-map-view) |
| [Weather](../plugins/weather.md) | [Map layer](../plugins/weather.md#display-weather-on-the-map), [Widget](../plugins/weather#weather-widgets), [Screen](../plugins/weather.md#configure-screen) |
| [Nautical map view](#nautical-map-view) | [Map style](../plugins/nautical-charts.md#nautical-map-style), [Profile](../plugins/nautical-charts.md#nautical-options)  |
| [Ski map view](#ski-map-view) | [Map style](../plugins/ski-maps.md#set-winter-style), [Profile](../plugins/ski-maps.md#skiing-profile) |
|🤖 [Audio/video notes](#audiovideo-notes) | [Map layer](../plugins/audio-video-notes.md#show-all-on-the-map), [Context menu](../plugins/audio-video-notes.md#create), [Widget](../plugins/audio-video-notes.md#recording-widget) |
|[OpenStreetMap editing](#openstreetmap-editing)| [Map layer](../plugins/osm-editing.md#how-to-use) |
|[Parking position](#parking-position) | [Context menu](../plugins/parking.md#set-a-point), [Widget](../plugins/parking.md#parking-widget) |
|🤖 [OpenPlaceReviews](#openplacereviews) | [Context menu](../plugins/openplacereviews.md#how-to-add) |
|[Mapillary](#mapillary) | [Map layer](../plugins/mapillary.md#map-layer), [Context menu](../plugins/mapillary.md#map-context-menu) , [Widget](../plugins/mapillary.md#mapillary-widget)|
|🤖 [External Sensors](#external-sensors) | [Widget](../plugins/external-sensors.md#widgets) |
|🤖 [Accessibility](#accessibility) | [Custom Settings](../plugins/accessibility.md#plugin-settings) |
| [OsmAnd development](#osmand-development) | [Custom Settings](../plugins/development.md#plugin-settings) |
|🤖 [OsmAnd Tracker](#osmand-tracker) | [Map Layer](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map), [Widget](../plugins/osmand-tracker.md#osmand-tracker-widget), [Context Menu](../plugins/osmand-tracker.md#active-marker-on-the-osmand-map) |


### Plugin Settings

:::caution NOTE
Only the development plugin changes the settings for all profiles. The remaining plugins are configured for each profile separately.  
:::

Almost each plugin have specific profile or global settings, which can be accessed via:  

- **Android**: *Main menu → Plugins → Plugin name → Settings*  or  
- **Android**, **iOS**: *Main menu → [Global Settings](../personal/global-settings.md) → Profile → Plugin settings*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Settings plugin Android 1](@site/static/img/plugins/development/plugin_settings_android_1.png) ![Settings plugin Android 2](@site/static/img/plugins/development/plugin_settings_android_2.png) ![Settings plugin Android 1](@site/static/img/plugins/development/plugin_settings_android_3.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Settings plugin iOS 1](@site/static/img/plugins/development/plugin_settings_ios_1.png) ![Settings plugin iOS 2](@site/static/img/plugins/development/plugin_settings_ios_2.png) ![Settings plugin iOS 1](@site/static/img/plugins/development/plugin_settings_ios_3.png)  

</TabItem>

</Tabs>

Below you can find the list of plugins, that have their own settings.

🤖 - only for Android version of OsmAnd.

| Plugin name | Settings |
|:------------|:-------|
| [Trip recording](#trip-recording) | Сonfigure the trip recording [operation modes](../plugins/trip-recording.md#recording-parameters) |
| [Weather](#weather) | Configure measurement units for displaying weather events |
|🤖 [Audio/video notes](#audiovideo-notes) | Select video format, how long to store [etc.](../plugins/audio-video-notes.md#plugin-settings) |
|[OpenStreetMap editing](#openstreetmap-editing)| Specify user [login](../plugins/osm-editing.md#plugin-settings)  |
|🤖 [OpenPlaceReviews](#openplacereviews) | Specify user [login](../plugins/openplacereviews.md#plugin-settings) or use test registration|
|🤖 [External Sensors](#external-sensors) | Connect to external device [Settings](../plugins/external-sensors.md#settings) |
|🤖 [Accessibility](#accessibility) | [Settings](../plugins/accessibility.md#plugin-settings) allow you to use Accessibility [Android features](https://www.android.com/accessibility/) inside OsmAnd. |
| [OsmAnd development](#osmand-development) | [Plugin settings](../plugins/development.md#plugin-settings) allow you to enable special features for developers or experienced users |
|🤖 [OsmAnd Tracker](#osmand-tracker) | All settings are configurable in a separate app |

## List

### [Wikipedia](./wikipedia.md)

Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Wikipedia articles in relation to the points of interest right on the map.

### [Online maps](./online-map.md)

OsmAnd Online maps are an extensive addition to the OpenStreetMap database already present in the application. With this plugin, you can add layers to your map with information from a different source.  

### [Trip recording](./trip-recording.md)

To tell a story of where you have been, GPS data, as latitude and longitude of your location, can be recorded and stored in a file, and then re-used, improved, added with waypoints, provided for navigation, shared with friends, etc.

### [Contour lines and Terrain](./contour-lines.md)

Terrain information, such as Contour lines, Hillshades, Slopes - helps to make a visual assessment of the shape of the land surface by considering the curvature, extremes, steepness, points of equal height, and other.

### [Nautical map view](./nautical-charts.md)

Nautical map provides detailed graphical representation of oceans, seas, coastal areas and rivers to help you navigate on the water, and be aware of popular traffic routes, obstacles in your waterway, the nearest harbors, anchorages, and other essential reference.

### [Ski map view](./ski-maps.md)

Ski Map View shows winter colors and pistes downhill or cross-country, as well as cable cars, chairlifts, facilities and services nearby, which is useful for navigating destinations such as recreation areas, ski resorts and terrain parks.

### [Audio/video notes](./audio-video-notes.md)

Audio/video notes for future reference in case of need, or just to remember the moment, scene, or interaction, once made, are available from the central storage as well as on the map as an individual layer of user-made stories and thoughts tied to a geolocation. For Android only.

### [Parking position](./parking.md)

Set a point on the map where your car is left on the street and notify your calendar when parking time starts. This will make it easier for you to track the time and location of your car.

### [OpenStreetMap editing](./osm-editing.md)

<Translate android="true" ids="osm_editing"/> plugin allows you to contribute to OpenStreetMap, a global community that aims to create a comprehensive map of the world and provide up-to-date, open-source data to every user. 

### [OpenPlaceReviews](./openplacereviews.md)

The plugin lets you add and view photos of restaurants, cafes and other points of interest in the context menu of the place.  

### [Mapillary](./mapillary.md)

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).  

### [Accessibility](./accessibility.md)

Accessibility plugin makes the device's accessibility features directly available in OsmAnd.  

### [External sensors](./external-sensors.md)

Connect external sensors to display data on OsmAndand screen and to store needed information in track recordings.  

### [Weather](./weather.md)

24h hourly forecast 7 days ahead on the map.

### [OsmAnd development](./development.md)

OsmAnd development plugin is only necessary for developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.

### [OsmAnd Tracker](./osmand-tracker.md)

OsmAnd Tracker helps you see where your contacts are on the map in OsmAnd.  
