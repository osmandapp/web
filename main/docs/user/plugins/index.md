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
 - [Contour lines and Terrain](../plugins/contour-lines.md#overview) 
 - [Wikipedia](../plugins/wikipedia.md#overview)
 - [Nautical map view](../plugins/nautical-charts.md#overview)
   
Detailed information about the purchase of the application can be found in the section [Purchase](../purchases/).
### Plugin Features

OsmAnd Plugins could countribute to these Feature groups: **Layer**, **Widgets**, **Context Menu actions**, **Drawer actions**, **Map Style**, **Map Source**, **Profile**.

| Feature Group | Plugin  | How to configure |
|---------------|---------|------------------|
| Widgets | Recording ...     | Configure Screen |
| Layer | ...     | Configure Map |
| Context menu Actions | .... |   |

🤖 - only for Android version.

| Plugin name |[Map layer](../map) |Context menu|[Widget](../widgets)|[Profile](../personal/profiles.md) |
|:--------|:-------|:-------|:-------|:-------|
|[Online maps](#online-maps)| ✔ | ✔ | - |  ✔ |
|[Contour lines and Terrain](#contour-lines-and-terrain) | ✔ | - | - |  ✔ |
|[Wikipedia](#wikipedia) | ✔ | ✔ | - |  ✔ |
|[Trip recording](#trip-recording) | ✔ | ✔ | ✔ |  ✔ |
|[Parking position](#parking-position)| ✔ | ✔ | ✔ |  ✔ |
|[Audio/video notes](#audiovideo-notes)| ✔ | ✔ | ✔ |  ✔ |
|[Ski map view](#ski-map-view)| ✔ | - | - |  ✔ |
|[Nautical map view](#nautical-map-view)| ✔ | - | - |  ✔ |
|[OpenStreetMap editing](#openstreetmap-editing)| ✔ | ✔ | - |  ✔ |
|[Mapillary](#mapillary)| ✔ | ✔ | ✔ | - |  ✔ |
|[OpenPlaceReviews](#openplacereviews)| ✔ | ✔ | - |  ✔ |
|[Weather](../plugins/weather.md)| ✔ | ✔ | ✔ |  ✔ |
|🤖 External Sensors| - | - | ✔ |  ✔ |
|🤖 [OsmAnd Tracker](#osmand-tracker)| ✔ | - | ✔ | ✔ |
|[OsmAnd development](#osmand-development)| - | - | ✔ | ✔ |
|🤖 [Accessibility](#accessibility)| - | - | - | - |


### Plugin Settings

Here will be description of specific plugin settings. 

## List

### [Wikipedia](./wikipedia.md)

Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Wikipedia articles in relation to the points of interest right on the map.

#### Enable plugin

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable the Wikipedia plugin, select it from the list of plugins opened by the following path:  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_wikipedia"/>*

![Enable plugins Android](@site/static/img/plugins/plugin-wiki-enable.png)

</TabItem>

<TabItem value="ios" label="iOS">

To enable the Wikipedia plugin, select it from the list of plugins opened by the following path:  
*<Translate ios="true" ids="menu,plugins,res_wiki"/>*

![Enable plugins iOS](@site/static/img/plugins/plugin-wiki-enable-ios.png)

</TabItem>

</Tabs>

### [Online maps](./online-map.md)

OsmAnd Online maps are an extensive addition to the OpenStreetMap database already present in the application. With this plugin, you can add layers to your map with information from a different source.  

#### Enable plugin

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable the Wikipedia plugin, select it from the list of plugins opened by the following path:  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,shared_string_online_maps"/>*

![Enable plugins Android](@site/static/img/plugins/plugin-onlinemaps-enable.png)

</TabItem>

<TabItem value="ios" label="iOS">

Plugin needs to be enabled only for Android and it's automatically enabled for iOS.

</TabItem>

</Tabs>

### [Trip recording](./trip-recording.md)

To tell a story of where you have been, GPS data, as latitude and longitude of your location, can be recorded and stored in a file, and then re-used, improved, added with waypoints, provided for navigation, shared with friends, etc.

### [Contour lines and Terrain](./contour-lines.md)

Terrain information, such as Contour lines, Hillshades, Slopes - helps to make a visual assessment of the shape of the land surface by considering the curvature, extremes, steepness, points of equal height, and other.

### [Nautical map view](./nautical-charts.md)

Nautical map provides detailed graphical representation of oceans, seas, coastal areas and rivers to help you navigate on the water, and be aware of popular traffic routes, obstacles in your waterway, the nearest harbors, anchorages, and other essential reference.

### [Ski map view](./ski-maps.md)

Ski Map View shows winter colors and pistes downhill or cross-country, as well as cable cars, chairlifts, facilities and services nearby, which is useful for navigating destinations such as recreation areas, ski resorts and terrain parks.

#### Enable plugin

The plugin can add a default Skiing profile. If it hasn't already been used, the default Skiing profile has Ski navigation, [Winter and ski map style](../map/vector-maps.md#winter-and-ski) already configured for it. Otherwise, the profile will remember the settings from the last use.  

To enable the **Ski Map view plugin**, do the following:

1. Open the list of plugins in the menu.  
2. Find the Ski map view plugin, and tap it.  
3. You can enable or disable the Skiing profile in the pop-up window that opens. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

The **<Translate android="true" ids="plugin_ski_name"/>** plugin can  be enabled together with the **<Translate android="true" ids="app_mode_skiing"/>** profile, which on the first use, has the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) established for it.  

To enable the **<Translate android="true" ids="plugin_ski_name"/>** plugin, select it from the list of plugins opened by the following path:  
*<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ski_name"/>*

![Ski maps plugin Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_android.png) 

If the **<Translate android="true" ids="app_mode_skiing"/>** is required, leave the option enabled in the pop-up window and click **OK**. Tap **Turn off** if you don't want to add the plugin to this profile.  

![Enabling Ski profile with plugin in Android](@site/static/img/plugins/ski-maps/and_profile_in_ski_plugin.png)

</TabItem>

<TabItem value="ios" label="iOS">

The **<Translate ios="true" ids="product_title_skimap"/>** plugin can be enabled together with the **<Translate ios="true" ids="app_mode_skiing"/>** profile, which on the first use, has the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) established for it. 

To enable the **<Translate ios="true" ids="product_title_skimap"/>** plugin, select it from the list of plugins opened by the following path:  
*<Translate ios="true" ids="menu,plugins,product_title_skimap"/>*

![Ski maps plugin iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_ios.png)

If the **<Translate ios="true" ids="app_mode_skiing"/>** profile is needed, leave the respective option toggled on in the opened popup window and tap **OK**. Otherwise, tap Turn off, and the plugin will be enabled without adding the profile. 

![Enabling Ski profile with plugin in iOS](@site/static/img/plugins/ski-maps/ios_profile_in_ski_plugin.png)

</TabItem>

</Tabs>



### [Audio/video notes](./audio-video-notes.md)

Audio/video notes for future reference in case of need, or just to remember the moment, scene, or interaction, once made, are available from the central storage as well as on the map as an individual layer of user-made stories and thoughts tied to a geolocation. For Android only.

### [Parking position](./parking.md)

Set a point on the map where your car is left on the street and notify your calendar when parking time starts. This will make it easier for you to track the time and location of your car.

#### Enable plugin



### [OpenStreetMap editing](./osm-editing.md)

<Translate android="true" ids="osm_editing"/> plugin allows you to contribute to OpenStreetMap, a global community that aims to create a comprehensive map of the world and provide up-to-date, open-source data to every user. 

#### Enable plugin

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,osm_editing_plugin_name"/> *

![OpenStretMap editing Android](@site/static/img/plugins/osm-editing/osm_plugin_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,plugins,product_title_osm_editing"/>*

![OpenStretMap editing](@site/static/img/plugins/osm-editing/osm_plugin_ios.png)

</TabItem>

</Tabs>


### [OpenPlaceReviews](./openplacereviews.md)

OpenPlaceReviews

### [Mapillary](./mapillary.md)

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).


### [Accessibility](./accessibility.md)

Accessibility plugin makes the device's accessibility features directly available in OsmAnd.


### [External sensors](./external-sensors.md)

Connect external sensors to display data in OsmAnd.

### [Weather](./weather.md)

24h hourly forecast 7 days ahead on the map.

#### Purchase and enable plugin

Weather plugin is available for [Pro users](../purchases/). Weather Offline is included in the Plugins menu, you can display and download Weather data for selected geographical regions. To enable the plugin, turn on the **Weather** option in the following application menu:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_weather"/>* 

![Weather plugin in Android](@site/static/img/plugins/weather-and.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,plugins,product_title_weather"/>* 

![Weather plugin in iOS](@site/static/img/plugins/weather/weather_plugin_ios.png)

</TabItem>

</Tabs>

### [OsmAnd development](./development.md)

OsmAnd development plugin is only necessary for developers and experienced users. It allows you to simulate navigation routes, check screen rendering performance, etc.


### [OsmAnd Tracker](./osmand-tracker.md)

OsmAnd Tracker




