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

You have two *main* ways to download maps: **1)** [view the list of regions in the main menu](#download-maps-menu), or **2)** [select the required region directly on the map](#select-on-the-map). This gives you the flexibility to select the regions you want and ensures that the maps will fit your plans.  

Although OsmAnd supports both [Vector](../map/vector-maps.md) and [Raster](../map/raster-maps.md), it is recommended to start working with vector maps offline. This type of maps (read more about [Map OsmAnd types](../personal/maps.md#map-types) here) ensures reliable operation of all key functions of the application, including [Search](../search/index.md), [Navigation](../navigation/index.md), and [Context menu](../map/map-context-menu.md). This is especially important if your travels include trips to remote locations or places with limited internet access.


## Download 

To start downloading maps, go to the main menu [*Maps & Resources*](../personal/maps.md). There you can select the maps you need for offline navigation.

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

It is important to note that you can skip this download step, and if you already have previous [OsmAnd Cloud](../personal/osmand-cloud.md) settings this step can also be skipped. This is convenient if you have reinstalled the application or want to restore the previous user experience without having to re-select regions and settings.


### Maps and Resources

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png) 

</TabItem>

</Tabs>

The **Maps & Resources menu** displays:
- Downloads section with [all existing OsmAnd map types](../personal/maps.md#map-types).
- [Local section](../personal/maps.md#local) with all your map data.
- [Updates section](../personal/maps.md#updates).

To download a specific type of map of the country or region you need:
- First tap the folder with the region, such as Africa, Europe, or other.
- Tap the one you need in the list of regions that opens.
- The next screen shows a list of all map types that can be downloaded.

You can find information about other types of maps in the [Downloads](../personal/maps.md#downloads) section of the **Maps** article.

:::tip NOTE
OsmAnd has a small world map built in. You do not need to download large maps of any region if you are not going to use them. If you need a map covering the whole planet, including major cities, roads and rivers, you can download the **Detailed World Map**.
:::

### Select on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Short tapthe World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

One way to download a map is to zoom out on the world map and briefly tap to select a region to download. This area will be highlighted in yellow and a panel will appear at the bottom with the name of the region and a suggestion to download it or select other maps.  

**Note**  
On the small screen, the map selected for downloading will be highlighted in yellow, maps that have already been downloaded will be highlighted in green, and deactivated maps will be highlighted in orange. **Deactivated** maps are bypassed to speed up the program in case you have a lot of loaded maps.  


### Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_3_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_4_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_download_map_2_ios.png) 

</TabItem>

</Tabs>

Search makes it easy to find a specific map or region, providing a convenient and quick way to download the data you need. You can find and download the map using the [search function](../search/index.md).

- To start a search, begin typing the name of a country or region in the search field. A list of map files will start to appear. 
- In case you don't have the Standard map of some region, there will be a Download icon next to it, if the map is downloaded it will be green, and with a menu, the others will be gray.
- Tap the name of the required result and the Regionwide map list will open.
- Select [map types](../personal/maps.md#map-types): *Standart map, Road-only map, Contour lines, Wikipedia*.

