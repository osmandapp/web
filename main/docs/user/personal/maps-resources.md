---
sidebar_position: 2
title:  Maps & Resources
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

In the **Maps and Resources** section, you can manage both *Online* and *Offline* maps, and other resources used in OsmAnd. For example, you can download, delete, rename, clear cache, update and check size, and perform different actions.

OsmAnd operates with two types of maps: [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md). The [Local](#local-menu) tab stores all maps and resources. Available map types can be downloaded from the [Downloads](#downloads-menu) tab. On the [Updates](#updates-menu) tab, you can download maps that are available for updates and use [Live updates](#live-updates). You can also access the [Extra map](#extra-maps) feature to create your map types.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png)

</TabItem>

</Tabs>


## Map Types {#map-types}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Downloading maps into the OsmAnd application is an important step that determines the functionality and efficiency of navigation.

### Free Map Content {#free-map-content}

- **Standard map**. Provides an overview of the area based on the [OpenStreetMap](https://www.openstreetmap.org/) source and contains a map, routes, addresses, POI, and public transportation information. Tapping opens a screen with a list of regions of the selected country and information about how much space these maps will take up on your device.  
- **Roads-only** (*Android only*). The map contains only road grid information to focus on routes and road infrastructure. By removing details such as buildings and points of interest, it is smaller than a standard map. Tapping opens a screen with a list of regions in the selected country and information about how much space these maps will take up on your device.
- **World-overview-map**. Versions of OsmAnd up to 3.8 offer to download a world map so you can view it on a planetary scale. In newer versions of OsmAnd, a lightweight *Mini World Map* is bundled with the application. The app lets you download a larger overview world map with more detailed information. 

:::info monthly map updates
Please note that monthly map updates are considered another map download and are substracted from the available number of free map downloads.
:::

### Paid Map Content {#paid-map-content}

- [Contour lines](../plugins/topography.md#contour-lines). A map containing contour elevation lines to visualize the terrain.
- [Terrain map (Hillshade and Slope)](../plugins/topography.md#hillshade-slope-and-altitude-layers). Maps with shadows or slopes provide additional terrain information.
- [Terrain map (3D)](../plugins/topography.md#3d-relief). Three-dimensional representation of the terrain for a better understanding of your surroundings. [Map rendering engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) must be enabled.
- [Nautical depths and contours](../plugins/nautical-charts.md). Marine charts showing coastlines, depths, navigation aids, harbors, and hazards for safe boating and sailing.
- [Wikipedia](../plugins/wikipedia.md). Vector map with geo-positioned [Wikipedia](https://wikipedia.org/) articles about landmarks or additional information about places.
- [Wikivoyage](../plan-route/travel-guides.md). It provides vector maps with virtual travel guides, offering users valuable information, recommendations, and tips.
- [Weather forecast](../plugins/weather.md). Weather information on a map for easy route planning.


## Downloads Menu {#downloads-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

The **Download** tab lets you download various map types from OsmAnd servers, requiring an active Internet connection.

***To download a map:***

- **Open the Download** tab, locate the required section, and tap the relevant folder to see available maps.

- **Available maps** display download icons, for a single map or for [multiple maps](#multiple-map-loading).

- **Downloaded maps** show a green icon with a menu button:  
    - *Android*: Three-dot menu.  
    - *iOS*: Info (i) icon.

- **Maps in the process of loading** have an icon visualizing this. To cancel the download, tap the icon. To view the list of maps in the download queue and cancel the downloads, tap the Download bar in the Device memory info area of the Downloads and Updates tabs.

- **In the Free version**, maps unavailable for download show a [GET](../purchases/index.md) icon, linking to the purchase page.

***The downloads tab consists of map groups:***

- **Device memory info**. Visualize the amount of occupied and free space on your device.
- **Map counter** (***Free version***). Displays how many maps you have left for download.
- [Extra maps](#extra-maps). Displays the map data for the [Custom package](../plugins/custom.md).
- **Regions**. List by continent and world region: *Africa, Antarctica, Asia, Australia and Oceania, Central America, Europe, North America, Russia, and South America.*
- [World maps](#world-maps). A list of maps of the entire world: *World altitude correction (Android only)*, *World overview map*, *All world (Weather forecast)*
- [Nautical maps](../plugins/nautical-charts.md) ([*paid feature*](../purchases/index.md)). Vector maps with elevations as points or lines.
- [Travel guides (Wikivoyage)](../plan-route/travel-guides.md) ([*paid feature*](../purchases/index.md)). Vector maps with a collection of articles in HTML format and additionally GPX files.
- **Other maps**. Maps that cannot be assigned to the current map hierarchy because they are not supported or will be available in future versions.
- [Voice prompts](../navigation/guidance/voice-navigation.md) (*Android only*). Voice packs for voicing navigation prompts.
- [Map fonts](../map/vector-maps.md#map-fonts-android) (*Android only*). Additional font files display text on the map.
- **Search city or region** (*Android only*). A quick search tool at the top of the downloads tab (magnifying glass icon) to find the needed city or region.

### World Maps {#world-maps}

In the Download Maps menu, there is a **World Maps** section that provides access to download various maps of the world, complementing the functionality of the app.  

- **World Altitude Correction** (*Android only*). This file contains altitude corrections to compensate for planetary curvature.
- **World overview map**. Provides an extensive overview of the earth's surface, useful for long-term route planning and casual exploration.
- **All world (Weather forecast)**. Allows you to download a map with weather information.


### Extra Maps {#extra-maps}

OsmAnd supports the transfer of profile-specific settings and data, including rendering files, fonts, routes, maps, and custom plugins. Create a custom map folder using a `.osf` plugin file (a compressed `.zip` format).

To import a file:

1. Locate the `.osf` file in your device’s storage, messenger, or email.
2. Tap to open it with OsmAnd.
3. The plugin will appear in the **Plugin List** section, where it can be activated.
4. A corresponding folder will then appear in the **Extra Maps** section of the [Downloads](#downloads-menu) tab.

Read more in the [**Custom package**](../plugins/custom) article.


### Multiple Map Loading {#multiple-map-loading}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Download map menu general Android](@site/static/img/personal/maps/multiple_maps_andr.png) ![Deselect menu Android](@site/static/img/personal/maps/multiple_maps_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu general iOS](@site/static/img/personal/maps/multiple_maps_ios.png) ![Deselect menu IOS](@site/static/img/personal/maps/multiple_maps_2_ios.png)

</TabItem>

</Tabs>

For countries consisting of **multiple region maps**, you can use bulk loading of multiple maps. Maps available for this type of download are displayed with a double download arrow icons and a label with the number of regions inside (e.g. Contour lines / All Regions: 10). You get to choose how many maps to download. Bulk loading supports several map types, including Standard, Contour lines, Wikipedia, and Terrain.

When a grouped country item is opened, a bottom sheet is displayed with the full list of maps for that country, allowing individual maps to be selected or all of them to be downloaded at once.


## Local Menu {#local-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

The Local tab provides an overview of the storage usage for for maps and resources data on your device. The memory bar at the top displays three categories:

- ***Green***. Total used device storage.
- ***Orange***. Part of the used storage occupied by OsmAnd downloads.
- ***Grey***. Free storage available on the device.

Below the memory bar, a list of all downloaded OsmAnd maps and resources is shown, including their type and file size. Online maps are not counted in the memory bar, as they are streamed and only cached temporarily.

</TabItem>

</Tabs>


### Viewing Data {#viewing-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- **Sorting option**. Sort items by name, country, date, or size (availability depends on the data type).

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[actions](#actions)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

</TabItem>

<TabItem value="ios" label="iOS">  

![Viewing data](@site/static/img/personal/maps/viewing_data_ios.png)

Tap any offline item in the **Local** tab to open its detailed data, as follows:

- **Type**. The dataitem's type like **Standard map**, **Wikipedia**, **Contour lines**, or so on.
- **Size**. The item’s size is in MB.
- **Created on**. The date the item was added.

For online maps, only the type and size of cached data are displayed.

</TabItem>

</Tabs>


### Actions {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- **Info**. Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions iOS](@site/static/img/personal/maps/local_actions_ios.png)

Available **Actions** depend Available actions depend on the data type:

- For **offline items**, only the **Delete** option is available.
- For **online maps**, actions may include **Clear cache**, **Edit**, and **Delete**.

</TabItem>

</Tabs>

<!--
The Local tab provides an overview of the storage usage for all OsmAnd data on your device. Data is divided into three color-coded sections for clarity, with items sorted by size from largest to smallest. Each section displays only items with downloaded data:

- ***Resources*** (*blue*).  
    Includes maps ([Standard](../map/vector-maps.md), &nbsp;[Nautical](../plugins/nautical-charts.md), &nbsp;[Topography](../plugins/topography.md), &nbsp;[Weather](../plugins/weather.md)), &nbsp;[Wikipedia](../plugins/wikipedia.md) and [Travel guides](../plan-route/travel-guides.md), &nbsp;[Live updates](../personal/maps-resources.md#live-updates), &nbsp;**Road only**,  &nbsp;[Map sources](../map/raster-maps.md), &nbsp;[Rendering styles](../map/vector-maps.md#default-map-styles), &nbsp;**Map fonts, &nbsp;Voice prompts (recorded and TTS), &nbsp;Cache**.  

- ***My Places*** (*yellow*).  
    Includes [Favorites](../personal/favorites.md), &nbsp;[Tracks](../personal/tracks/manage-tracks.md), &nbsp;[OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), &nbsp;[OSM Edits](../plugins/osm-editing.md#osm-editing-layer), &nbsp;[A/V Notes](../plugins/audio-video-notes.md), &nbsp;[Map markers](../personal/markers.md), &nbsp;[History](../personal/global-settings.md#history), &nbsp;*Itinerary*.  

- ***Settings*** (*green*).  
    Includes [Profiles](../personal/profiles.md), &nbsp;[Colors](../personal/color-palette-schemes.md) and **Other** app configurations.


#### Viewing Data {#viewing-data}

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)


Tap any item in the **Local** tab to open its detailed list. At the top of this list, a visual panel displays how much space the selected data type occupies relative to the total OsmAnd storage.

***Available actions:***

- **Search**. Find specific data by name within the selected folder.
- **Three-dot menu**:  
    ***Select***. Choose multiple items for actions like *Delete*, *Deactivate*, or *Activate*.  
    ***Import***. Access the device's storage to import files.
- [Sorting option](#sorting-options). Sort items by name, country, date, or size (availability depends on the data type).


#### Menu for Items from the List {#menu-for-items-from-the-list}

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list offers a *three-dot menu* with options:

- **Info**. View detailed information on the *[data item](#local-data-item-overview)*.
- **Export**. Save data to a file via *Settings → Export to File*.

***Additional options for maps:***

- **Deactivate**. Disable vector maps without deleting them. They remain stored but are not used for navigation, search, or routing. Reduces the load on the device and speeds up OsmAnd.
- **Update**. Download the latest version of the map.
- **Rename**. Customize the map’s name for better identification.
- **Remove**. Delete the map from your device.
- **Edit** (for Online Maps). Modify the online map configuration.

#### Map source items menu {#map-source-items-menu}

![Map Source items menu](@site/static/img/personal/maps/map_source_items_menu_andr.png)

Each item in the [Map source](../map/raster-maps.md) list provides settings for managing online raster map stored on your device. Open the *three-dot menu* to access the available actions:

- [Info](#local-data-item-overview). Displays general details about the selected map source, including format and last update date.  
- **Calculate Size**. Estimates the storage occupied by the cached tiles of this map source. If the cache exceeds *50MB*, the size can be displayed as *≥50MB* instead of an exact number.
- **Clear All Tiles**. Deletes all cached tiles for the selected map source, freeing up storage while keeping the map source available for future use.  
- **Export**. Saves the selected map source configuration for backup or sharing.  
- **Remove**. Deletes the selected map source. This action does not affect downloaded offline maps but clears the associated cache.


#### Local Data Item Overview {#local-data-item-overview}

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

When viewing a local data item, you see:

- **Type**. The data type from the **Local** list.
- **Created**. The date the item was added.
- **Size**. The item’s size is in MB.

Available **Actions** depend on the data type and may include **Deactivate**, **Update**, **Rename**, **Export**, and **Delete**.

#### Sorting Options {#sorting-options}

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

Use sorting options to organize map data:

- **Name (A - Z / Z - A)**. Locate items alphabetically.
- **Country name (A - Z / Z - A)**. Organize maps geographically.
- **Newest date first** / **Oldest date first**. See updates or older versions.
- **Large size first** / **Small size first**. Identify large maps to free storage space.

-->

## Updates Menu {#updates-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png) ![Maps menu Update tab Android](@site/static/img/personal/maps/maps_update_tab_andr.png)

The **Updates** tab allows you to refresh OsmAnd maps and resources. Standard and road-only maps are released once a month, usually between the 2nd and 5th day, and include OpenStreetMap data up to the last day of the previous month (for example, the October release contains data until 30 September). Other data such as Wikipedia, terrain, or nautical maps may follow different, non-regular update schedules. Weather forecast has its own regular update cycle. For details, see the [Download Forecast](../plugins/weather.md#download-forecast). 

If several maps of the same country require updating, OsmAnd groups them into a single item in the Updates list. The grouped item shows the country name and the number of maps included. When you tap it, an *Update maps* bottom sheet opens, showing all maps that need to be updated. 

Use the *Update all* button to update all maps simultaneously, or update individual maps as needed. For hourly updates, check your [Live Updates](#live-updates) subscription status. If enabled, the **Live Updates** section will appear at the top of the tab, under the Device Memory indicator.

You can also manage maps directly from the Updates tab using a long-press gesture on any listed map. This opens a context menu that provides several options:
- **Info** — view details about the selected map
- **Update** — download the latest version available
- **Deactivate** — temporarily disable a map without removing its data
- **Remove** — completely delete the map data from the device

When a map is deactivated, it may temporarily disappear from the Local tab. If an update becomes available for a deactivated map, it will still appear in the Updates list and be shown with a grey icon. Updating such a map will automatically activate it again.

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png) ![Weather forecast Update maps iOS](@site/static/img/personal/maps/maps_update_2_ios.png)

The **Updates** tab allows you to refresh OsmAnd maps and resources. Standard and road-only maps are released once a month, usually between the 2nd and 5th day, and include OpenStreetMap data up to the last day of the previous month (for example, the October release contains data until 30 September). Other data such as Wikipedia, terrain, or nautical maps may follow different, non-regular update schedules. 

Use the *Update all* button to update all maps simultaneously, or update individual maps as needed. For hourly updates, check your [Live Updates](#live-updates) subscription status. If enabled, the **Live Updates** section will appear at the top of the tab, under the Device Memory indicator.

The **Updates** tab also includes a Weather forecast section. It is designed to manage your offline forecasts for selected countries:

- If no forecast has been downloaded yet, you will see a prompt to select countries. Forecast data is available for up to 7 days.
- Once a forecast is downloaded, the ***Offline forecast*** screen displays the list of countries with status information, including the last update time, validity period, and total data size.
- Tapping a country opens detailed information such as last updated time, next update, data size, and accuracy. Options include ***Update now***, enabling or disabling ***Auto-update*** (Weather forecast has its own regular update cycle. For details, see the [Download Forecast](../plugins/weather.md#download-forecast).), and ***Remove forecast***.


</TabItem>

</Tabs>

## Live Updates {#live-updates}

:::tip Purchase
Live updates is a paid feature.  
:::
<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>

**Live Updates** provides frequent, incremental map updates through [subscription](../purchases/index.md) or is free for [OSM contributors](#free-for-osm-mappers). Updates occur every 15 minutes on OsmAnd servers and are downloadable hourly, daily, or weekly. These updates consume minimal storage — about 2-4% of the full map size per month.

<!--
Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.
-->

Key features:

- **<Translate android="true" ids="shared_string_enabled"/> / <Translate android="true" ids="shared_string_disabled"/> Live Updates**. Manage via a toggle in the settings.
- **&#8230; &#124;** button (*Android*) / **&#62;** button (*iOS*). Open *Live updates* settings.
- **Switcher**(*Android*) / **&#43;** button (*iOS*). Add maps for *live updates*.
- **<Translate android="true" ids="update_frequency"/>**. Select the map update frequency (hourly, daily, or weekly).
- **<Translate android="true" ids="update_now"/>**. Start the *live updates* for map.
- **<Translate android="true" ids="updates_size"/>**(*Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*iOS*). Size of *live updates*.
- **Trash button**(*Android*). Delete all received *live updates* for the current map.
- **<Translate android="true" ids="only_download_over_wifi"/>**. Manage the download of *live updates* over a Wi-Fi connection.


### Update Timestamps {#update-timestamps}

- **Latest OSM update.**  
    Indicates the last processed OpenStreetMap changes.
- **Region Updated.**  
    Shows when the specific region’s updates were last processed.
- **Next update.**  
    Displays the scheduled time for the next update check.


### Limitations of Live Updates {#limitations-of-live-updates}

Address changes are supported only via monthly updates.
Updated roads lack elevation details, affecting gradient graphs.
Deleted or altered route references may still appear incorrectly.


### Free for OSM Mappers {#free-for-osm-mappers}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>

Contributors to [OpenStreetMap](https://openstreetmap.org/) are eligible for free unlimited map downloads and live updates. To qualify:
Enable the [OpenStreetMap Editing plugin](../plugins/osm-editing.md).
[Log in](../plugins/osm-editing.md#settings) with your OSM username.
Maintain at least [**30 edits**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) over the last two months.

## Related Articles {#related-articles}

- [Profiles (Settings)](./profiles.md)
- [Import / Export](../personal/import-export.md)

### Common Issues and Solutions {#common-issues-and-solutions}

- Voice Navigation. [(check)](../troubleshooting/navigation.md#voice-navigation)
- How to delete search history. [(check)](../troubleshooting/general.md#how-to-delete-search-history)
- For additional troubleshooting, visit: [Maps & Data](../troubleshooting/maps-data.md)


