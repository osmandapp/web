---
sidebar_position: 2
title:  Download Maps
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

Uploading maps to the OsmAnd app is a key step to ensure smooth operation and use of offline navigation. Without offline maps, the app cannot function fully. Downloading maps gives you access to maps of different regions, allowing you to navigate without an Internet connection.  

You have two *main* ways to download maps: **1)** [view the list of regions in the *Main Menu*](#maps-and-resources), or **2)** [select the required region directly on the map](#select-on-the-map). This gives you the flexibility to select the regions you want and ensures that the maps will fit your plans.  

Although OsmAnd supports both [Vector](../map/vector-maps.md) and [Raster](../map/raster-maps.md), it is recommended to start working with vector maps offline. This type of map (read more about [Map OsmAnd types](../personal/maps-resources.md#map-types) here) ensures reliable operation of all key functions of the application, including [Search](../search/index.md), [Navigation](../navigation/index.md), and [Context menu](../map/map-context-menu.md). This is especially important if your travels include trips to remote locations or places with limited internet access.


## Download {#download}

Start loading maps from the [initial setup screen](#initial-setup-screen), or go to the main *side menu* *→* [Maps & Resources](#maps-and-resources) and select the required maps from the general list, or [select a region](#select-on-the-map) directly on the map by tapping the region you need.


### Initial Setup Screen {#initial-setup-screen}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map iOS](@site/static/img/steps/start_screen_first_screen_ios.png)

</TabItem>

</Tabs>

Upon launching the application for the first time, you are prompted to download a map tailored to your current location, determined by your Internet connection. This step is optional, allowing you to skip the download and proceed directly to the local maps interface for your region.  

If you are using a VPN, OsmAnd may suggest a map based on the VPN’s virtual location. In such cases, you can manually select a map that better aligns with your actual geographic region.  


#### Three-dot menu {#three-dot-menu}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_andr.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map Android](@site/static/img/steps/start_screen_first_screen_location_ios.png)   ![Download map iOS](@site/static/img/steps/start_screen_first_screen_other_ios.png)

</TabItem>

</Tabs>

**Location menu:**

- *Select a different region.* Opens the [Download Maps](#maps-and-resources) menu.
- *Allow us to determine your location.* [Requests permission](../start-with/first-steps.md#permission-to-access-the-location) to access the location, and find the required map using this data.

**Other menu:**

- *Restore from OsmAnd Cloud.* Opens the [OsmAnd Cloud](../personal/osmand-cloud.md) main screen or login screen. This is useful if you have reinstalled the app or want to restore the previous user experience without re-selecting regions and settings.
- *Restore from file.* Opens the device's file manager to select and import an `.osf` file.  


### Maps and Resources {#maps-and-resources}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png)

</TabItem>

</Tabs>

The [Maps & Resources](../personal/maps-resources.md) screen provides access to the following sections:

- [Downloads](../personal/maps-resources.md#downloads). Offers a comprehensive selection of [OsmAnd map types](../personal/maps-resources.md#map-types).
- [Local](../personal/maps-resources.md#local). Displays all map data currently stored on your device, including custom and imported resources.
- [Updates](../personal/maps-resources.md#updates). Enables you to refresh maps monthly to keep your data current.

#### Downloading Maps {#downloading-maps}

To download a specific map type for a country or region:

- Navigate to the folder for the required region, such as Africa, Europe, or another continent.
- Select your preferred country or region from the list.
- On the next screen, review and choose from the available map types for that area.

You can find information about other types of maps in the [Downloads](../personal/maps-resources.md#downloads) section of the **Maps** article.

### World Map Options {#world-map-options}

OsmAnd includes two world map options:  

1. **Mini World Map** (pre-installed). A lightweight map that enables basic navigation and provides an overview of the world.  
2. **Detailed World Map** (downloadable). A global map featuring major cities, roads, rivers, and other geographical features.

***Important notes:***

- The **Detailed World Map does not replace individual country or region maps.** It is useful for an overview but does not contain the same level of detail as regional maps.  
- If you need detailed navigation, **download specific country or region maps manually** via *Menu → Maps & Resources → Download Maps.*
- Users with **OsmAnd Pro or Maps+** can download an **unlimited number of maps** but must still download each region separately.  
- **There is no single option to download all world maps at once.**


### Select on the map {#select-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Short tap the World map allows to download region map](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Short tap the World map allows to download region map](@site/static/img/settings/download_region_map_via_worldmap_ios.png)

</TabItem>

</Tabs>

One way to download a map is to zoom out on the world map and briefly tap to select a region to download. This area will be highlighted in yellow, and a panel will appear at the bottom with the name of the region and a suggestion to download it or select other maps.  

:::tip Map color  
On the small screen, the map selected for downloading will be highlighted in yellow, maps that have already been downloaded will be highlighted in green, and deactivated maps will be highlighted in orange. **Deactivated** maps are bypassed to speed up the program in case you have a lot of loaded maps.
:::

### Search {#search}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Search function to download map Android](@site/static/img/settings/search_download_map_3_andr.png) ![Search function to download map Android](@site/static/img/settings/search_download_map_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Search function to download map iOS](@site/static/img/settings/search_download_map_1_ios.png) ![Search function to download map iOS](@site/static/img/settings/search_download_map_2_ios.png)

</TabItem>

</Tabs>

Search makes it easy to find a specific map or region, providing a convenient and quick way to download the data you need. You can find and download the map using the [search function](../search/index.md).

- Start a search by entering the name of a country or region in the search field. Then select the required map from the list that appears.
- Maps available for download are displayed in gray with a download icon, downloaded maps have a green color and a menu button.
- Tap the name of the required result and the Regionwide map list will open.
- Select [map types](../personal/maps-resources.md#map-types): *Standard map, Road-only map, Contour lines, Wikipedia*.

> *Last updated: January 2025*
