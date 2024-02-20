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


## Download 

To start downloading maps, go to the main menu **Download maps** (*Android*) / **Maps & Resources** (*iOS*). There you can select the maps you need for offline navigation.

### First Screen

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

**NOTE**  
For regions, such as Germany, consisting of multiple maps, you can use bulk map loading, which is displayed as double loading arrows next to the map type.


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

:::tip NOTE
OsmAnd has a small world map built in. You do not need to download large maps of any region if you are not going to use them. If you need a map covering the whole planet, including major cities, roads and rivers, you can download the **Detailed World Map**.
:::


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

