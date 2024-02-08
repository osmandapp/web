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

Downloading maps to the OsmAnd app is a key step to ensure smooth operation and use of offline navigation. Without offline maps, the app cannot function fully. Downloading maps gives you access to maps of different regions, allowing you to navigate without an internet connection.

To download maps, you have two main ways: view the list of regions in the main menu or select the required region directly on the map. This gives you the flexibility to select the regions you want and ensures that the maps are customized according to your plans.

Though OsmAnd supports both [Vector](../map/vector-maps.md) and [Raster](../map/raster-maps.md) maps, it is highly recommended to start working with vector maps offline. This type of map ensures that all key features of the app work reliably, including [Search](../search/index.md), [Navigation](../navigation/index.md), and [Context menu](../map/map-context-menu.md). This is especially important if your travels include trips to remote locations or places with limited Internet access. 


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

If you're using a VPN, OsmAnd can offer you a regional map, giving you the option to choose a map different from your actual geography. 

It's important to note that you can skip the download step if you already have previous settings from the [OsmAnd Cloud](../personal/osmand-cloud.md). This is useful if you have reinstalled the app or want to restore the previous user experience without having to reselect regions and settings.


:::tip Note
**World overview map**. 
Versions of OsmAnd up to 3.8 offer to download a World map so that you can view it on a planetary scale. In newer releases of OsmAnd, a small *Mini world overview map* is supplied with the application. After downloading the app, you can download a larger *World overview map* with more detailed information.
:::


#### Free features for the selected location

- **Standard map**. Provides an overview of the area based on the [OpenStreetMap](https://www.openstreetmap.org/) source and contains a map, routes, addresses, POIs and public transportation information. When you tap opens a screen with a list of regions of the selected country and how much space these maps will take up on your device.
- **Roads-only** (*Android only*). The map contains only road grid information to focus on routes and road infrastructure. The map is smaller than the standard map due to the removal of map details such as buildings and points of interest. A tap opens a screen with a list of regions of the selected country and how much space these maps will occupy on your device.

#### Paid features for the selected location

- [**Contour lines**](../plugins/contour-lines.md#contour-lines). A map containing contour elevation lines to help visualize the terrain.
- [**Terrain map (Hillshade and Slope)**](../plugins/contour-lines.md#hillshade--slope). The maps with shadows or slopes provides additional information about the topography.
- [**Terrain map (3D)**](../plugins/contour-lines.md#3d-relief). A three-dimensional representation of terrain for a deeper understanding of the environment. [Map rendering engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) must be enabled.
- [**Wikipedia**](../plugins/wikipedia.md). Vector map with geo-positioned [Wikipedia](https://wikipedia.org/) articles about Points of Interest or additional information about places.
- [**Weather forecast**](../plugins/weather.md). Weather information on a map for convenient route planning.
- [**Online raster maps**](../map/raster-maps.md). Maps available for download online and can be installed as third party maps or OsmAnd Tiles. 

:::note
For regions, such as Germany, consisting of multiple maps, you can use bulk map downloading, which is displayed as double downloading arrows next to the map type.
:::


## Download 

To start downloading maps, go to the Download maps (Android) / Maps & Resources (iOS) main menu. There you can select the maps you need for offline navigation.  


### Download Maps menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps"/>*

![Download maps regions](@site/static/img/settings/download_maps_regions.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download maps regions](@site/static/img/settings/download_maps_regions_ios.png)

</TabItem>

</Tabs>

**Top screen buttons:**
- *Refresh button* &#10227; - checks for available map updates on OsmAnd servers.
- *Search button* &#x1F50D; - search the region by names or large cities inside it.

**Memory info and map counter:**
- **Map counter** (Free version) - display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- [Device memory](../personal/maps.md#download-maps-maps) - show available memory to be used on the device.

**Map search:**
- &#x1F50D; - search the region by names or large cities inside it.

**Screens:**
- *All downloads / Worldwide* - browse and download maps split by continents / countries / regions / types.
- *Local / Installed* - manage already downloaded maps.
- *Updates* - check and download monthly map updates.
  - *[OsmAnd Live](../personal/maps.md#osmand-live)* - configure hourly map updates for certain regions.


**Memory info and map counter:**  
- *Map counter (Free version)*. Display how many [Free map downloads](../purchases/android.md#free-and-paid-features) left.
- *[Device memory](../personal/maps.md#download-maps-maps)*. Show available memory to be used on the device.

**Maps part:**
- *Downloads (Android)/ Worldwide (iOS)* - browse and download maps split by continents / countries / regions.
- *Local / Installed* - manage already downloaded maps.
- *Updates* - check and download monthly map updates.
  - *[Live updates](../personal/maps.md#osmand-live)* - configure hourly map updates for certain regions.

**Online sources:**
To import online map sources, you can tap the *osf* file of the application profile in storage, messenger, or mail, select the OsmAnd application to open, and select the data to import. More read [here](https://osmand.net/docs/user/personal/import-export#online-sources).


### Select on World Map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Short tap on the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap on the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

One way to download the map is to zoom out the World map and by short tap select the region to download. This area will be highlighted in yellow and on the bottom will appear a panel with the name of the region and an offer to download it or choose other maps.

**Note**
At low zoom levels, a map selected to download will be highlighted in yellow, maps that are already downloaded will be highlighted in green, deactivated maps will be highlighted in orange. **Deactivated** maps are bypassed to speed up the program in case you have many downloaded maps.

#### World maps 

The World maps section provides access to various world maps, complementing the app's functionality.  

- **World Altitude Correction** (*Android only*). Improves navigation accuracy, especially in mountainous terrain.
- **World overview map**. Provides an extensive view of the earth's surface, useful for long-term route planning and casual exploring.
- **All world (Weather forecast)**. Allows you to download a map with weather information.


### Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_2_download_map_android.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_2_download_map_ios.png) 

</TabItem>

</Tabs>

It is possible to find and to download a map from the [search function](../search/index.md).  

Just write a country or region name, and you see a matching map file in the resulting list. Click on a country name and start the downloading process from [Map Context menu](#map-context-menu).


### Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region_ios.png) 

</TabItem>

</Tabs>

One of the options to download a map is via World map and [Map Context menu](../map/map-context-menu.md). You can open Context menu by clicking on the Label, for example city name, or by long tap on the map, or by searching City via Search. Context menu will have a suggestion of the smallest region to download.


### No maps 

<InfoAndroidOnly/>

![Message no maps when building navigation Android 4](@site/static/img/navigation/route/navigation_by_route_no_maps_4.png) 

- If no map is loaded for route planning, the progress line does not appear and the Start button remains inactive.  
- **Note** that at some zoom levels, the reason for the lack of a route may not be clear, even if it appears that maps are present.
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

The Local tab *(<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>)* shows how much space OsmAnd uses in a form of linear diagram and a list with splitting by each data type. All data is grouped into three sections, sorted by largest section on top. The data categories inside the sections are also arranged according to the occupied space.  
The diagram's colors and slice size correspond to the respective section and amount of memory utilized:  

- ***Resources*** (blue): [Standard Maps](../map/vector-maps.md), [Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md), [Nautical maps](../plugins/nautical-charts.md), [Terrain maps](../plugins/contour-lines.md), [Live updates](../personal/maps.md#osmand-live), [Weather maps](../plugins/weather.md),  [Map sources](../map/raster-maps.md), [Rendering styles](../map/vector-maps.md#default-map-styles), Map fonts, Voice prompts (recorded and TTS), Cache.  
- ***My Places*** (yellow): [Favorites](../personal/favorites.md), [Tracks](../personal/tracks.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings*** (green): [Profiles](../personal/profiles.md), Other.


### Data type overview and toolbar 

If you choose a category from the Local tab and tap it, you will see a diagram that shows how much space the chosen category uses from the total amount of section space.

![Local category overview Android 1](@site/static/img/settings/local_category_sorting_options_andr_1.png) ![Local category options Android 2](@site/static/img/settings/local_category_sorting_options_andr_2.png)  

Above the graph, there is a toolbar with options available for this type of data. In most cases (except standard maps) there are only two options available:

- **Search** (magnifying glass) - allows searching by name for a specific data only in selected folder.
- **Three dots menu** (*Android only*)
 
After tapping on the three dots in the right corner of the toolbar, you can access additional actions (*Android only*):
- **Select** - allows you to select items and perform further actions only with them.
- **Import** - redirects to internal storage where you can select a file to import.

You can also perform some actions with an item from the list using the three dots menu, located at the right corner of every single entry.

![Local category item actions 2](@site/static/img/settings/local_category_actions_2.png) ![Local category item actions](@site/static/img/settings/local_category_actions.png)  

For most data categories, only the *Info* option is available. If you tap this option, you will be redirected to the *[Local data item overview](#local-data-item-overview)* screen. For maps, additional actions are provided:
- **Deactivate**/**Activate** - hides/shows the map so it is bypassed/used during computation.
- **Update** - downloads the latest version of the map. 
- **Rename** - map name can be changed in order to make it more identifiable.
- **Remove** - deletes the map from the device's storage.

#### Local data item overview 

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)

On the Local data item overview screen you can find information about:
- **Data type**
- **Size** 
- **Creation date of a single entry stored by OsmAnd**
- **Delete**

#### Standard maps additional option

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

For *Standard maps*, there is an additional option to sort them by:
- **Map name** (ascending or descending) - is useful if you want to find a specific map quickly.  
- **Country name** - allows arranging your maps geographically.
- **Newest or oldest date of modification** - this option may be useful if you would like to see recently updated maps or if you're looking for older versions.
- **Large or small size** - may help to identify large maps if you are concerned about storage space.


### Build your own Map (advanced)

![Build your own Map](@site/static/img/osmandmapcreator/OsmAndMapCreator-download-raster-maps.png)

It is possible to upload a self-created map.
[OsmAndMapCreator]((../../technical/map-creation/create-offline-maps-yourself.md)) can be used to create any maps supported by OsmAnd. To create a vector map you will need an OSM file (*.pbf, *.osm.gz, *.osm.bz2) and to create an online sqlite map you will need the url of the base tile.  

It is possible to upload a self-created map. [OsmAndMapCreator](../../technical/map-creation/create-offline-maps-yourself.md). More info section *My data* article [Maps](../personal/maps.md#build-your-own-map-advanced)