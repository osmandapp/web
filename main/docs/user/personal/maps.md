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


<InfoIncompleteArticle/>

## Overview

The **Maps & Resources** allows you to perform basic actions with *Online* and *Offline* maps, and remaining resources used in OsmAnd. For example, such as downloading, deleting, renaming, clearing the cache, updating and checking the size, as well as other actions.

OsmAnd operates with 2 type of maps: [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md). All maps and resources are stored in the [Local](#local) tab. Available map types can be downloaded from the [Downloads](#downloads) tab. On the [Updates](#updates) tab, you can download maps that are available for update and if you want to use [Live updates](#osmand-live). You can use the [Extra map](#extra-maps) feature to create your map types.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,maps_and_resources"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_1_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png) 

</TabItem>

</Tabs>


## Map Types 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Downloading maps into the OsmAnd application is an important step that determines the functionality and efficiency of navigation. 

:::tip Note
**World overview map**. 
Versions of OsmAnd up to 3.8 offer to download a world map so that you can view it on a planetary scale. In newer versions of OsmAnd, a small *Mini World Map* is bundled with the application. By downloading the app, you will be able to download a larger overview world map with more detailed information.
:::


#### Free Features for the Selected Location

- **Standard map**. Provides an overview of the area based on the [OpenStreetMap](https://www.openstreetmap.org/) source and contains a map, routes, addresses, POIs and public transportation information. When you tap opens a screen with a list of regions of the selected country and information about how much space these maps will take up on your device.  
- **Roads-only** (*Android only*). The map contains only road grid information to focus on routes and road infrastructure. The map is smaller than a standard map by removing map details such as buildings and points of interest. When you tap opens a screen with a list of regions in the selected country and information about how much space these maps will take up on your device.

#### Paid Features for the Selected Location

- [**Contour lines**](../plugins/contour-lines.md#contour-lines). A map containing contour elevation lines to visualize the terrain.
- [**Terrain map (Hillshade and Slope)**](../plugins/contour-lines.md#hillshade-slope-and-altitude-layers). Maps with shadows or slopes provide additional terrain information.
- [**Terrain map (3D)**](../plugins/contour-lines.md#3d-relief). Three-dimensional representation of the terrain for a better understanding of your surroundings. [Map rendering engine Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) must be enabled.
- [**Wikipedia**](../plugins/wikipedia.md). Vector map with geo-positioned [Wikipedia](https://wikipedia.org/) articles about landmarks or additional information about places.
- [**Weather forecast**](../plugins/weather.md). Weather information on a map for easy route planning.
- [**Online raster maps**](../map/raster-maps.md). The maps are available for download online and can be installed as third-party maps or OsmAnd Tiles. 

:::note  
For regions, such as Germany, consisting of multiple maps, you can use bulk map loading, which is displayed as double loading arrows next to the map type.
:::

## Maps & Resources

The *Maps & Resources* main menu section of the OsmAnd app provides access to manage maps and other important data.  
- The [*Download*](#downloads) maps tab allows you to download maps for offline use, ensuring accessibility in the absence of internet.  
- In the [*Local*](#local) maps tab, you can find and manage detailed information about maps and places, including favorites, tracks, OSM notes, and other items that you have on your device.  
- The [*Updates*](#updates) tab allows users to get information about available updates to maps and other resources, ensuring that the data is up-to-date and accurate. 

*General actions you can do in Maps & Resources*:  
- **Refresh** &#10227;. Reloads the list of available maps from the OsmAnd server.  
- **Search** &#x1F50D;. Allows you to search for maps by **country**, **province** or major **city**.  
- **Device memory**. Allows you to see on the indicator how much memory is available for download and how many maps can be downloaded for free. Depending on the tab, sometimes slightly different data is displayed.  
- **Map counter**(*Free version* only visible if you don't have a [subscription](../purchases/index.md)). The indicator with dividers shows how many maps you have left to download out of the *7 available*. <u>**NOTE**</u> *that monthly map updates count as one more map download and are subtracted from the available number of free map downloads.* 


### Downloads

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

The Download tab allows you to download all presented map types from OsmAnd servers, and an active Internet connection is required.  

To download the required map, on the Download tab, find the section you are interested in and then the folder in it. Tap the folder to open a list of available maps. 
1. **Maps that can be downloaded** will have a download icon. 
2. **Downloaded maps** will have a green icon and either a 3-dot menu menu for Android or an *I* icon for iOS, in both cases located to the right of the map name field. 
3. If you have the **free version of OsmAnd**, there will be a [GET](../purchases/index.md) icon next to the name of maps that are not available to you, which will take you to the purchase screen.  

*Downloads tab consists of map groups:*

- **Memory info**. Visualize the amount of occupied and free space on your device. 
- **Map counter** (*Free version*). Shows how many maps you have left for download.
- [**Extra maps**](#extra-maps). Displays the map data for the [Custom package](../plugins/custom.md).
- **Regions**. List by continent and region of the world: *Africa, Antarctica, Asia, Australia and Oceania, Central America, Europe, North America, Russia, South America.*
- [**World maps**](#world-maps). A list of maps of the entire world: *World altitude correction.(Android only)*, *World overview map*, *All world.(Weather forecast)*
- [**Nautical maps**](../plugins/nautical-charts.md) ([*paid feature*](../purchases/index.md)). Vector maps with elevations as points or lines.
- [**Travel guides (Wikivoyage)**](../plan-route/travel-guides.md) ([*paid feature*](../purchases/index.md)). These are vector maps containing a selection of articles in HTML format and additionally GPX files.
- **Other maps**. Additional maps that cannot be assigned to the current map hierarchy are usually obsolete and unsupported maps or maps that will be available in future versions.
- [**Voice prompts**](../navigation/guidance/voice-navigation.md) (*only for Android*). Voice packs for voicing navigation prompts.
- [**Map fonts**](../map/vector-maps.md#map-fonts-android) (*only for Android*). Additional font files used to display text on the map.

#### World Maps 

In the Download Maps menu, there is a **World Maps** section that provides access to download various maps of the world, complementing the functionality of the app.  

- **World Altitude Correction** (*Android only*). Improves navigation accuracy, especially in mountainous terrain.
- **World overview map**. Provides an extensive overview of the earth's surface, useful for long-term route planning and casual exploration.
- **All world (Weather forecast)**. Allows you to download a map with weather information.

Information about *maps menu and actions* can be found in the article [**Download maps**](../start-with/download-maps.md).


### Local

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*

![Local tab Android 1](@site/static/img/settings/new_map_and_resourses_andr_1.png) ![Local tab Android 2](@site/static/img/settings/new_map_and_resourses_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Local tab menu iOS](@site/static/img/personal/maps/local_tab_ios.png)

</TabItem>

</Tabs> 

The Local tab shows how much space all existing OsmAnd data occupies on your device. It includes three sections, and for better clarity each section has a different color, and all items in and within the sections are sorted from the largest space occupied on the device to the smallest. Each section can only include items for which data has been downloaded. Below is a sample list of possible items:

- ***Resources*** (*blue*). [*Standard Maps*](../map/vector-maps.md), *[Wikipedia](../plugins/wikipedia.md) and [Travel maps](../plan-route/travel-guides.md)*, [*Nautical maps*](../plugins/nautical-charts.md), [*Topography maps*](../plugins/contour-lines.md), [*Live updates*](../personal/maps.md#osmand-live), *Road only*, [*Weather maps*](../plugins/weather.md),  [*Map sources*](../map/raster-maps.md), [*Rendering styles*](../map/vector-maps.md#default-map-styles), *Map fonts, Voice prompts (recorded and TTS), Cache*.  
- ***My Places*** (*yellow*). [Favorites](../personal/favorites.md), [Tracks](../personal/tracks/create-edit.md), [OSM Notes](../plugins/osm-editing.md#create--modify-osm-note), [OSM Edits](../plugins/osm-editing.md#osm-editing-layer), [A/V Notes](../plugins/audio-video-notes.md), [Map markers](../personal/markers.md), [History](../personal/global-settings.md#history), Itinerary.
- ***Settings*** (*green*). [Profiles](../personal/profiles.md), Other.


#### Data Type Overview

![Local category overview Android 1](@site/static/img/personal/maps/local_category_options_1_andr.png) ![Local category options Android 2](@site/static/img/personal/maps/local_category_options_2_andr.png)   

When you tap any element of the Local tab, the list of elements of this data category will be opened, and above the list, there is an information panel that visually displays how much space the selected element occupies compared to the total amount of OsmAnd data.  

**Actions:**

- **Search** &#x1F50D;. Allows you to search for specific data by name only in the selected folder.
- **3-dot menu**:
    - **Select**. Allows you to select one or more items, after which you can choose from a 3-dot menu: *Delete*, *Deactivate* or *Activate*.
    - **Import**. Redirects to the device's internal storage where you can select a file to import.
- [**Sorting option**](#additional-action-sorting-option). This action is not available in all items.


**Menu items from the list**

![Local category item actions 2](@site/static/img/personal/maps/local_menu_items_1_andr.png) ![Local category item actions](@site/static/img/personal/maps/local_menu_items_2_andr.png)  

Each item in the list has its 3-dot menu. For most data categories, only two actions are available:
- **Info**. Redirects to the *[Local data item overview](#local-data-item-overview)* screen.
- **Export**. Redirects to the *Settings → Export to File* screen.  

Additional actions are available for the maps:
- **Deactivate**. Allows you to disable vector maps, but they remain on your device, just not used for map display, search and routing. This allows you to store the required number of maps and activate them as needed without slowing down OsmAnd.
- **Update**. Downloading the latest available version of the map.
- **Rename**. You can change the name of the map to make it more recognizable.
- **Remove**. Deletes the map from the device's memory.
- **Edit** (Online Cards only). Edit the online maps configuration.

#### Local Data Item Overview 

![Local data item overview](@site/static/img/settings/local_category_overview_2.png) ![Local data item overview 2](@site/static/img/settings/local_category_overview_1.png)  

The overview screen of the Local Data items provides this information:
- **Type**. Which data type from the Local list the item belongs to.
- **Created**. The date when the selected item was saved in the OsmAnd application.
- **Size**. The size of the selected item in MB.

The number of **Actions** depends on the selected data type: **Deactivate**, **Update**, **Rename**, **Export**, **Delete**.

#### Additional Action Sorting Option

![Local data sorting options](@site/static/img/settings/local_sorting_options_andr_1.png)

There is an additional option to sort items for maps.
- **Name: A - Z** / **Name: Z - A**. Useful if you want to find a specific map quickly.
- **Country name: A - Z** / **Country name: Z - A**. Allows you to organize maps geographically.
- **Newest date first** / **Oldest date first**. This option can be useful if you want to see recently updated maps or are looking for older versions.
- **Large size first** / **Small size first**. Can help you identify large cards if you are worried about storage space.


### Updates

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_update_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_update_ios.png)

</TabItem>

</Tabs>

Every month you can update OsmAnd maps on the **Updates** tab. You can update all maps with one tap of the *Update all* button or update only the maps you require one by one. Standard and road-only maps are available every month, usually with a delay of 2 weeks. If you want to access hourly updates, check your [OsmAnd Live](#osmand-live), if you have it added, there will be the **Live Updates** field at the top under the *Device memory* indicator.  


### Extra Maps

If you want to transfer both profile-dependent settings and rendering files, fonts, routes, maps and other data, OsmAnd has added such a feature. To do this, you can create your own map folder with custom plugins. The plugin file is a custom *zip file* in *.osf format*.  
To import files, you can tap the OSF file of the application profile in storage, messenger or mail, select the OsmAnd application to open. The name of the plugin will appear in the Plugin List section, enable it, and a folder with maps with the same name will appear in the **Extra maps** section of the [*Downloads*](#downloads) tab.  
Read more in the [**Custom package**](../plugins/custom.md/) article.


## OsmAnd Live

:::tip NOTE
The OsmAnd Live is a paid feature of the OsmAnd app.  
:::

OsmAnd Live is a special feature [available by subscription](../purchases/index.md) or [free for OSM Mappers](#free-for-osm-mappers). It provides additional small map updates on top of larger full monthly maps. It is estimated that 1 month's map updates take up only 2-4% of the full map size. These updates are generated approximately every 15 minutes on OsmAnd's servers and can be downloaded hourly, daily, or weekly. On Android, they can be downloaded in the background, although this does not work correctly on all devices. When you restart the app checks and downloads for expected updates.  

Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_updates,live_updates"/>*   

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)


</TabItem>

</Tabs>

- &nbsp; **<Translate android="true" ids="shared_string_enabled"/>** / **<Translate android="true" ids="shared_string_disabled"/>**. Switches on/off the *OsmAnd live* update function.
- &nbsp; **"&#8230; &#124;"**(*for Android*) / **"&#62;"**(*for iOS*). Opens the *OsmAnd live* settings of the selected map.
- &nbsp; **Switch**(*for Android*) / **"&#43;"**(*for iOS*). Adds available maps for "live updates".
- &nbsp; **<Translate android="true" ids="update_frequency"/>** Chooses the frequency of the map update:  <Translate android="true" ids="hourly"/>, <Translate android="true" ids="daily"/>, or <Translate android="true" ids="weekly"/>.
- &nbsp; **<Translate android="true" ids="update_now"/>**. Allows to start the *OsmAnd live* map update.
- &nbsp; **<Translate android="true" ids="updates_size"/>**(*for Android*) / **<Translate ios="true" ids="osmand_live_updates_size"/>**(*for iOS*). Shows *the live updates* size.
- &nbsp;**&#x1F5D1; button**(*for Android*). Allows to delete *the live updates* map.
- &nbsp; **<Translate android="true" ids="only_download_over_wifi"/>**. Enables/disables downloading *live updates* by Wi-Fi connection.   


### Update Timestamps 

- **Latest OpenStreetMap update available XXXX-XX-XX XX:XX.**  
    Represents the latest timestamp of OpenStreetMap changes processed on OsmAnd Servers and available for download.
- **Region name Updated: Today 13:21.**  
    Represents a timestamp of the latest changes available in the uploaded map. It is always earlier than or equal to the **last available OpenStreetMap update**. If the **Updated timestamp** has not changed since *<Translate android="true" ids="update_now"/>*, this is the last timestamp when a region named Region was changed and processed by the OsmAnd servers: the following timestamp exists - **Incluldes OSM changes made until 2022-08-12, 12:05**.
- **Next update: Today 14:21.**  
    Represents the next timestamp when the local device will check for new updates.

### Limitations of OsmAnd Live

- Changing addresses on the map and in search is not supported yet. Address information can be updated with regular monthly updates.
- Updated roads do not contain elevation information, which may affect gradient graphs.
- Changed and deleted route references are not handled correctly, which may result in the display of public transportation lanes and pedestrian routes that no longer exist.

### Free for OSM Mappers

Live updates and unlimited map downloads are available for [OpenStreetMap](https://openstreetmap.org/) contributors.

1. Switch on [OpenStreetMap editing plugin](../plugins/osm-editing.md) in OsmAnd.
2. [Log in](../plugins/osm-editing.md#settings) by your OpenStreetMap username.
3. OpenStreetMap users need to have a minimum of [**30 changes**](https://github.com/osmandapp/OsmAnd/blob/master/OsmAnd/src/net/osmand/plus/plugins/osmedit/fragments/MappersFragment.java#L65) over the last two-month period for accessing unlimited hourly map updates.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

</TabItem>

<TabItem value="ios" label="iOS">

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers_ios.png)

</TabItem>

</Tabs>


## Related Articles

- 
- 

> *This article was last updated in June 2024*
