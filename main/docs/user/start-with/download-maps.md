---
sidebar_position: 2
title:  Download maps
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


## Overview

Uploading maps to the OsmAnd app is a key step to ensure smooth operation and use of offline navigation. Without offline maps, the app cannot function fully. Downloading maps gives you access to maps of different regions, allowing you to navigate without an Internet connection.  

You have two main ways to download maps: 1) view the list of regions in the main menu or 2) select the desired region directly on the map. This gives you the flexibility to select the regions you want and ensures that the maps will fit your plans.  

Although OsmAnd supports both [Vector](../map/vector-maps.md) and [Raster](../map/raster-maps.md), it is strongly recommended to start working with vector maps offline. This type of maps ensures reliable operation of all key functions of the application, including [Search](../search/index.md), [Navigation](../navigation/index.md), and [Context menu](../map/map-context-menu.md). This is especially important if your travels include trips to remote locations or places with limited internet access.


## First Screen

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/settings/start_screen_white_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map iOS](@site/static/img/settings/start_screen_white_ios.png)

</TabItem>

</Tabs>

When you first launch the app, you will be prompted to download a map based on your current online location, or you can skip this step. This is convenient, as you immediately get access to local maps corresponding to your location.  

If you are using a VPN, OsmAnd can offer you a regional map, giving you the option to choose a different map than your actual geography.  

It is important to note that you can skip the download step if you already have previous [OsmAnd Cloud](../personal/osmand-cloud.md) settings. This is convenient if you have reinstalled the application or want to restore the previous user experience without having to re-select regions and settings.

:::tip Note
**World overview map**. 
Versions of OsmAnd up to 3.8 offer to download a world map so that you can view it on a planetary scale. In newer versions of OsmAnd, a small *Mini World Map* is bundled with the application. Once you have downloaded the app, you can download a larger *Overview World Map* with more detailed information.
:::


#### Free features for the selected location

- **Standard map**. Provides an overview of the area based on the [OpenStreetMap](https://www.openstreetmap.org/) source and contains a map, routes, addresses, POIs and public transportation information. When you tap opens a screen with a list of regions of the selected country and information about how much space these maps will take up on your device.  
- **Roads-only** (*Android only*). The map contains only road grid information to focus on routes and road infrastructure. The map is smaller than a standard map by removing map details such as buildings and points of interest. When you tap opens a screen with a list of regions in the selected country and information about how much space these maps will take up on your device.

#### Paid features for the selected location

- [**Contour lines**](../plugins/contour-lines.md#contour-lines). A map containing contour elevation lines to visualize the terrain.
- [**Terrain map (Hillshade and Slope)**](../plugins/contour-lines.md#hillshade--slope). Maps with shadows or slopes provide additional terrain information.
- [**Terrain map (3D)**](../plugins/contour-lines.md#3d-relief). Three-dimensional representation of the terrain for a better understanding of your surroundings. [Map rendering engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) must be enabled.
- [**Wikipedia**](../plugins/wikipedia.md). Vector map with geo-positioned [Wikipedia](https://wikipedia.org/) articles about landmarks or additional information about places.
- [**Weather forecast**](../plugins/weather.md). Weather information on a map for easy route planning.
- [**Online raster maps**](../map/raster-maps.md). The maps are available for download online and can be installed as third-party maps or OsmAnd Tiles. 

:::note
For regions, such as Germany, consisting of multiple maps, you can use bulk map loading, which is displayed as double loading arrows next to the map type.
:::


## Download 

To start downloading maps, go to the main menu **Download maps** (*Android*) / **Maps & Resources** (*iOS*). There you can select the maps you need for offline navigation.

### Type of Maps (world) 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/settings/download_map_menu_ios.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu_ios.png)  

</TabItem>

</Tabs>

Loading maps into the OsmAnd application is an important step that determines the functionality and efficiency of navigation.  

#### Downloads tab

- **Device memory**.  Visualize the amount of occupied and free space on your device.
- **Regions**. List by continent and region of the world.
- [**World maps**](#world-maps). A list of maps of the entire world.
- [**Nautical maps**](../plugins/nautical-charts.md) (paid feature). Vector maps with elevations as points or lines.
- [**Travel guides (Wikivoyage)**](../plan-route/travel-guides.md) (**paid feature**). These are vector maps containing a selection of articles in HTML format and additionally GPX files.
- **Other maps**. Additional maps that cannot be assigned to the current map hierarchy are usually obsolete and unsupported maps or maps that will be available in future versions.
- [**Voice prompts**](../navigation/guidance/voice-navigation.md) (*only for Android*). Voice packs for voicing navigation prompts.
- [**Map fonts**](../map/vector-maps.md#map-fonts-android) (*only for Android*). Additional font files used to display text on the map.


### Download Maps

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps"/>*

![Download maps regions](@site/static/img/settings/download_maps_regions.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download maps regions](@site/static/img/settings/download_maps_regions_ios.png)

</TabItem>

</Tabs>

**Top screen buttons**
- *Refresh button* &#10227;. Checks for available map updates on OsmAnd servers.
- *Search button* &#x1F50D;. Find a region by name or the major cities in it.

**Memory info and map counter**
- **Map counter** (*Free version*). Display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- [Device memory](../personal/maps.md#download-maps-maps) - show available memory to be used on the device.

**Map search**
- &#x1F50D;. Search the region by names or large cities inside it.

**Screens**
- *All downloads / Worldwide*. Browse and download maps split by continents / countries / regions / types.
- *Local / Installed*. Manage already downloaded maps.
- *Updates*. Check and download monthly map updates.
  - *[OsmAnd Live](../personal/maps.md#osmand-live)*. Configure hourly map updates for certain regions.


**Memory info and map counter**  
- *Map counter (Free version)*. Display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- *[Device memory](../personal/maps.md#download-maps-maps)*. Show available memory to be used on the device.

**Maps part**
- *Downloads (Android)/ Worldwide (iOS)*. Browse and download maps categorized by continent / country / region.
- *Local / Installed*.  Manage maps that have already been downloaded.
- *Updates*. Check and download monthly map updates.
  - *[Live updates](../personal/maps.md#osmand-live)*. Set up hourly map updates for specific regions.

**Online sources**  
To import online map sources, you can tap the *OSF file* of an app profile in storage, messenger, or mail, select the OsmAnd app to open, and select the data to import. Read more [here](../personal/import-export.md#online-sources).


### Select on World Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Short tap on the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap on the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

One way to download a map is to zoom out on the world map and briefly tap to select a region to download. This area will be highlighted in yellow and a panel will appear at the bottom with the name of the region and a suggestion to download it or select other maps.  

**Note**  
On the small screen, the map selected for downloading will be highlighted in yellow, maps that have already been downloaded will be highlighted in green, and deactivated maps will be highlighted in orange. **Deactivated** maps are bypassed to speed up the program in case you have a lot of loaded maps.  

#### World maps 

The World Maps section provides access to various world maps that complement the functionality of the app.    

- **World Altitude Correction** (*Android only*). Improves navigation accuracy, especially in mountainous terrain.
- **World overview map**. Provides an extensive overview of the earth's surface, useful for long-term route planning and casual exploration.
- **All world (Weather forecast)**. Allows you to download a map with weather information.


### Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_1_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_2_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_2_download_map_ios.png) 

</TabItem>

</Tabs>

You can find and download a map using the [search function](../search/index.md).

Simply enter the name of the country or region and you will see the corresponding map file in the list that appears. Click on the country name and start the download process from the [Map Context menu](#context-menu).


### Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region_ios.png) 

</TabItem>

</Tabs>

One way to load a map is through the world map and the [Map Context menu](../map/map-context-menu.md). The context menu can be accessed by clicking on a label, such as the name of a city, or by long pressing on the map, or by searching by city. The context menu will suggest the smallest region to download.

### No maps 

<InfoAndroidOnly/>

![Message no maps when building navigation Android 4](@site/static/img/navigation/route/navigation_by_route_no_maps_4.png) 

- If no map is loaded for route planning, the progress bar is not displayed and the Start button remains inactive.
- **Note** that at some *zoom levels*, the reason for the missing route may not be clear, even if the maps appear to be present.  -
- More information in [Route Preparation article](../navigation/setup/route-navigation/#additional-information-in-navigation-menu).


## Manage

### Local Resources

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Local tab menu iOS](@site/static/img/settings/Local_tab_ios_1.png)

</TabItem>

</Tabs> 

The Local tab *(<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>)*  shows how much space OsmAnd takes up, in the form of a line chart and a list with a breakdown of each data type. All data is grouped into three sections, sorted by the largest section at the top. The data categories within the sections are also arranged according to the space available.
The colors and size of the chart fragments correspond to the corresponding partition and the amount of memory used.

- ***Resources*** (*blue*). [Standard Maps](../map/vector-maps.md), [Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Terrain maps](../plugins/contour-lines.md), [Live updates](../personal/maps.md#osmand-live), [Weather maps](../plugins/weather.md),  [Map sources](../map/raster-maps.md), [Rendering styles](../map/vector-maps.md#default-map-styles), Map fonts, Voice prompts (recorded and TTS), Cache.  
- ***My Places*** (*yellow*). [Favorites](../personal/favorites.md), [Tracks](../personal/tracks.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings*** (*green*). [Profiles](../personal/profiles.md), Other.


#### Data type overview and toolbar 

If you select a category on the Local tab and tap it, a graph appears showing how much space the selected category occupies in the total space of the partition.

![Local category overview Android 1](@site/static/img/settings/local_category_sorting_options_andr_1.png) ![Local category options Android 2](@site/static/img/settings/local_category_sorting_options_andr_2.png)  

Above the graph is a toolbar with the options available for that data type. In most cases (except for standard graphs), only two options are available.

- **Search** (*magnifying glass*). Allows you to search for specific data by name only in the selected folder.
- **Three dots menu** (*Android only*)
 
After tapping on the three dots in the right corner of the toolbar, you can access additional actions (*Android only*):
- **Select**. Allows you to select items and perform further actions only on them.
- **Import**. Redirects to internal storage where you can select a file to import.

You can also perform some actions on list items using the three-dot menu located in the right corner of each entry.  

![Local category item actions 2](@site/static/img/settings/local_category_actions_2.png) ![Local category item actions](@site/static/img/settings/local_category_actions.png)  

For most data categories, only the *Information* option is available. If you click this option, you will be redirected to the *[Local data item overview](#local-data-item-overview)* screen. Additional actions are available for maps.

- **Deactivate**/**Activate**. Hides/shows the map for traversal/use in settlements.
- **Update**. Loads the latest version of the map. 
- **Rename**. The name of the card can be changed to make it more recognizable.
- **Remove**. Deleting a card from the device memory.

#### Local data item overview 

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

The Local Data item overview screen provides information about:
- **Data type**
- **Size** 
- **Creation date of a single entry stored by OsmAnd**
- **Delete**

#### Standard maps additional option

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

For *Standard maps*, there is an additional option to sort them.
- **Map name** (ascending or descending) - is useful if you want to find a specific map quickly.  
- **Country name** - allows arranging your maps geographically.
- **Newest or oldest date of modification** - this option may be useful if you would like to see recently updated maps or if you're looking for older versions.
- **Large or small size** - may help to identify large maps if you are concerned about storage space.


### Build own Map (advanced)

![Build your own Map](@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png)

It is possible to upload a self-created map.
[OsmAndMapCreator]((../../technical/map-creation/create-offline-maps-yourself.md)) can be used to create any maps supported by OsmAnd. To create a vector map you will need an OSM file (*.pbf, *.osm.gz, *.osm.bz2) and to create an online sqlite map you will need the url of the base tile.  

It is possible to upload a self-created map. [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md). More info section *My data* article [Maps](../personal/maps.md#build-your-own-map-advanced)