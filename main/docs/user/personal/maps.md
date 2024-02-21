---
sidebar_position: 5
title:  Maps
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

The Maps screen allows you to perform basic operations with *Online* and *Offline* maps used in OsmAnd. These are downloading, deleting, renaming, clearing the cache for [Online maps](#local-maps), updating and checking the map size.

OsmAnd operates with 2 type of maps: [Vector maps](../map/vector-maps.md) and [Raster maps](../map/raster-maps.md). All maps are stored in one place of the [Local](#local). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_overview_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_overview_ios.png) 

</TabItem>

</Tabs>


## Map types 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Download map menu Android](@site/static/img/personal/maps/map_type_1_andr.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Download map menu iOS](@site/static/img/personal/maps/map_type_1_ios.png) ![Regionwide maps Android](@site/static/img/personal/maps/map_type_2_ios.png)  

</TabItem>

</Tabs>

Loading maps into the OsmAnd application is an important step that determines the functionality and efficiency of navigation. 

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

## Maps and Resources

The *Maps & Resources* main menu section of the OsmAnd app provides access to manage maps and other important data.  
1. The [*Download*](#downloads) maps tab allows you to download maps for offline use, ensuring accessibility in the absence of internet.  
2. In the [*Local*](#local) maps tab, you can find and manage detailed information about maps and places, including favorites, tracks, OSM notes, and other items that you have on your device.  
3. The [*Updates*](#updates) tab allows users to get information about available updates to maps and other resources, ensuring that the data is up-to-date and accurate. 

*General actions you can do in Maps & Resources*:  
**Refresh** &#10227;. Reloads the list of available maps from the OsmAnd server.  
**Search**. Allows you to search for maps by **country**, **province** or major **city**.  
**Toolbar**. Allows you to see on the indicator how much memory is available for download and how many maps can be downloaded for free. Depending on the tab, sometimes slightly different data is displayed.  
**Map counter**(*Free version* only visible if you don't have a [subscription](../purchases/index.md)). The indicator with dividers shows how many maps you have left to download out of the *7 available*. <u>**NOTE**</u> that monthly map updates count as one more map download and are subtracted from the available number of free map downloads. 


### Downloads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_menu_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_menu_ios.png) 

</TabItem>

</Tabs>

Download maps screen allows you to download maps from OsmAnd servers, you will need an active internet connection to do that. The Download tab allows you to download all presented map types from OsmAnd servers, and an active Internet connection is required.  

To download the required map, on the Download tab, find the section you are interested in and then the folder in it. Tap the folder to open a list of available maps. 
1. **Maps that can be downloaded** will have a download icon. 
2. **Downloaded maps** will have a green icon and either a three-dot menu for Android or an *I* icon for iOS, in both cases located to the right of the map name field. 
3. If you have the **free version of OsmAnd**, there will be a [GET](../purchases/index.md) icon next to the name of maps that are not available to you, which will take you to the purchase screen.  

*Downloads tab consists of map groups:*

- **Memory info and map counter**. Visualize the amount of occupied and free space on your device, and shows how many maps you have left for download.
- [**Extra maps**](#extra-maps) Shows [Custom package](../plugins/custom.md), if you downloaded the plugins.
- **Regions**. List by continent and region of the world: *Africa, Antarctica, Asia, Australia and Oceania, Central America, Europe, North America, Russia, South America.*
- [**World maps**](../start-with/download-maps.md#select-on-world-map). A list of maps of the entire world: *World altitude correction.(Android only)*, *World overview map*, *All world.(Weather forecast)*
- [**Nautical maps**](../plugins/nautical-charts.md) ([*paid feature*](../purchases/index.md)). Vector maps with elevations as points or lines.
- [**Travel guides (Wikivoyage)**](../plan-route/travel-guides.md) ([*paid feature*](../purchases/index.md)). These are vector maps containing a selection of articles in HTML format and additionally GPX files.
- **Other maps**. Additional maps that cannot be assigned to the current map hierarchy are usually obsolete and unsupported maps or maps that will be available in future versions.
- [**Voice prompts**](../navigation/guidance/voice-navigation.md) (*only for Android*). Voice packs for voicing navigation prompts.
- [**Map fonts**](../map/vector-maps.md#map-fonts-android) (*only for Android*). Additional font files used to display text on the map.





Basic information can be found in the article [**Download maps**](../start-with/download-maps.md).

### Local maps

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>*

![Maps menu Local vector Android](@site/static/img/personal/maps/maps_menu_local_vector_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local"/>*

![Maps menu Local vector iOS](@site/static/img/personal/maps/maps_menu_local_vector_ios.png)

</TabItem>

</Tabs>

Local maps represents all downloaded maps on device grouped by [Types](#map-types).  

**Multifile Actions**.
- **&nbsp;&#10227; button**. Scans & refreshes list of available maps on storage.
- **&nbsp;. Delete button**. Multiselection to delete maps.
- **&nbsp;&#8285;. <Translate android="true" ids="local_index_mi_backup"/> or <Translate android="true" ids="local_index_mi_restore"/>**. Multiselect to deactivate and activate [maps](#deactivate-maps-android).  

Each map displays its name, size, and creation date in a specific category and is highlighted with **color**.
- **&nbsp;Green**. The map has been updated.
- **&nbsp;Orange**. An update is available for the map.
- **&nbsp;Grey / Italic**. The map has been deactivated.

Certain actions are available for each **map specific actions** when you tap 3 dots or long tap on the row.
- **&nbsp;Rename**. Changes the file name and the name of the map.
- **&nbsp;Update**. Updates the map to the latest available version.
- **&nbsp;Delete**. Deletes the map.
- **&nbsp;Edit (Online maps)**. Editing the configuration of online maps.
- **&nbsp;Clear all tiles cache (Online maps)**. Clear all tiles cached by the online map.

#### Deactivate Maps (Android)

You can disable vector maps, then they will be present on the device, but will not be used for map display, search and routing. It is optimal to have a large storage of maps and use them as needed without slowing down OsmAnd.

![Maps menu Local Deactivate Android](@site/static/img/personal/maps/maps_menu_local_deactivate_android.png) ![Maps menu Local Deactivate Android](@site/static/img/personal/maps/maps_menu_local_deactivate_1_android.png)

Local action available for the map: **<Translate android="true" ids="local_index_mi_restore"/>** and **<Translate android="true" ids="local_index_mi_backup"/>**.

### Local

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
- **Three dots menu** (*Android only*).
 
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


### Updates

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates"/>*

![Maps menu Update maps Android](@site/static/img/personal/maps/maps_menu_update_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,res_mapsres,res_updates"/>*

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_menu_update_ios.png)

</TabItem>

</Tabs>

Every month you will be able to update OsmAnd maps on the update screen. Here you can update all maps with one tap. Standard and road-only maps are available every month, usually with a delay of 2 weeks. If you want to access hourly updates, check [OsmAnd Live](#osmand-live).   


### Extra maps

If you want to transfer both profile-dependent settings and rendering files, fonts, routes, maps and other data, OsmAnd has added such a feature. To do this, you can create your own map folder with custom plugins. The plugin file is a custom *zip file* in *.osf format*.  
To import files, you can tap the OSF file of the application profile in storage, messenger or mail, select the OsmAnd application to open. The name of the plugin will appear in the Plugin List section, enable it, and a folder with maps with the same name will appear in the **Extra maps** section of the [*Downloads*](#downloads) tab.  
Read more in the **Custom package** article.


## Map Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Tap on the map download region](@site/static/img/settings/tap_on_the_map_download_region_ios.png) 

</TabItem>

</Tabs>

One way to load a map is through the world map and the [Map Context menu](../map/map-context-menu.md). You can get to the context menu by tapping a label, such as the name of a city, or by long pressing on the map, or by searching by city. The context menu suggests the smallest region to download. Read more in the artcle [Download maps](../start-with/download-maps.md).


## OsmAnd Live

:::tip NOTE
The OsmAnd Live is a paid feature of the OsmAnd app.  
:::

OsmAnd Live is a special feature [available by subscription](../purchases/index.md) or [free for OSM Mappers](#free-for-osm-mappers). It provides additional small map updates on top of larger full monthly maps. It is estimated that 1 month's map updates take up only 2-4% of the full map size. These updates are generated approximately every 15 minutes on OsmAnd's servers and can be downloaded hourly, daily, or weekly. On Android, they can be downloaded in the background, although this does not work correctly on all devices. When you restart the app checks and downloads for expected updates.  

Each card has an independent collection of tiny updates, so **be careful** if you have overlapping areas. If you want to revert to the original state, you can *disable updates and clear the cache*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates,live_updates"/>*  

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


### Update timestamps 

- **Latest OpenStreetMap update available** XXXX-XX-XX XX:XX.  
    Represents the latest timestamp of OpenStreetMap changes processed on OsmAnd Servers and available for download.
- **Region name Updated**: Today 13:21.  
    Represents a timestamp of the latest changes available in the uploaded map. It is always earlier than or equal to the **last available OpenStreetMap update**. If the **Updated timestamp** has not changed since *<Translate android="true" ids="update_now"/>*, this is the last timestamp when a region named Region was changed and processed by the OsmAnd servers: the following timestamp exists - **Incluldes OSM changes made until 2022-08-12, 12:05**.
- **Next update**: Today 14:21.  
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



