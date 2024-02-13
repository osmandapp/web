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

The Maps screen allows you to perform basic operations with online and offline maps used in OsmAnd. These are downloading, deleting, renaming, clearing the cache for online maps, updating and checking the map size.

OsmAnd deals with 2 type of maps: [Vector maps](../map/vector-maps.md) and  [Raster maps](../map/raster-maps.md). All maps are stored in one place of the [Local](#local-maps). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps"/>*

![Maps menu Android](@site/static/img/personal/maps/maps_menu_android.png) ![Download maps menu Android](@site/static/img/personal/maps/download_map_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Maps menu iOS](@site/static/img/personal/maps/maps_menu_ios.png) ![Download maps menu iOS](@site/static/img/personal/maps/download_map_ios.png)

</TabItem>

</Tabs>


## Map types 

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
- [**World maps**](../start-with/download-maps.md#select-on-world-map). A list of maps of the entire world.
- [**Nautical maps**](../plugins/nautical-charts.md) (paid feature). Vector maps with elevations as points or lines.
- [**Travel guides (Wikivoyage)**](../plan-route/travel-guides.md) (**paid feature**). These are vector maps containing a selection of articles in HTML format and additionally GPX files.
- **Other maps**. Additional maps that cannot be assigned to the current map hierarchy are usually obsolete and unsupported maps or maps that will be available in future versions.
- [**Voice prompts**](../navigation/guidance/voice-navigation.md) (*only for Android*). Voice packs for voicing navigation prompts.
- [**Map fonts**](../map/vector-maps.md#map-fonts-android) (*only for Android*). Additional font files used to display text on the map.


## Maps and Resources

### Downloads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads"/>*

![Download map menu general Android](@site/static/img/personal/maps/download_map_menu_android.png) ![Download map menu general Android](@site/static/img/personal/maps/download_map_menu_1_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres"/>*

![Download map menu general iOS](@site/static/img/personal/maps/download_map_menu_ios.png) ![Download map menu general iOS](@site/static/img/personal/maps/download_map_menu_1_ios.png)

</TabItem>

</Tabs>

Download maps screen allows you to download maps from OsmAnd servers, you will need an active internet connection to do that.  

**Actions**:
- **Refresh** &#10227;. Reloads the list of available maps from the OsmAnd server.
- **Search**. Allows you to search for maps by **country**, **province** or major **city**.
- **Toolbar**. Indicates how much memory is available for download and how many maps can be downloaded for free.   

OsmAnd has a small world map built in. You do not need to download large maps of any region if you are not going to use them. If you need a map covering the whole planet, including major cities, roads and rivers, you can download the **Detailed World Map**.
:::

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


### Update maps

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


## OsmAnd Live

:::note
You can use live updates only with [OsmAnd Pro (Android)](../purchases/android.md#free-and-paid-features) and [OsmAnd Live (iOS)](../purchases/ios.md#free-and-paid-features) subscription.
:::


OsmAnd Live is a special feature ([available by subscription](../purchases/index.md) or [free for OSM Mappers](#free-for-osm-mappers)) that provides additional small map updates on top of larger full monthly maps. It is estimated that 1-month map updates take up only 2-4% of the full map size. These updates are generated approximately every 15 minutes on OsmAnd's servers and can be downloaded hourly, daily or weekly. On Android, they can be downloaded in the background, although this does not work correctly on all devices. Restarting the app always checks for expected updates and downloads them.

Each map has an independent collection of tiny map updates, so be careful if you have overlapping areas of the map. If you want to revert to the original state, you can disable updates and *Clear cache*. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

- &nbsp; **<Translate android="true" ids="shared_string_enabled"/>** / **<Translate android="true" ids="shared_string_disabled"/>**. Switches on/off the *OsmAnd live* update function.
- &nbsp; **"&#8230; &#124;"**. Opens the *OsmAnd live* settings of the selected map.
- &nbsp; **<Translate android="true" ids="update_frequency"/>** Shooses the frequency of the map update:  <Translate android="true" ids="hourly"/>, <Translate android="true" ids="daily"/>, or <Translate android="true" ids="weekly"/>.
- &nbsp; **<Translate android="true" ids="update_now"/>**. Allows to start the *OsmAnd live* map update.
- &nbsp; **<Translate android="true" ids="updates_size"/>**. Shows "the live updates" size.
- &nbsp;**&#x1F5D1; button**. Allows to delete *the live updates* map.
- &nbsp; **<Translate android="true" ids="only_download_over_wifi"/>**. Enables/disables downloading *live updates* by Wi-Fi connection.  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,res_mapsres,res_updates,osmand_live_updates"/>*   

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

- &nbsp; _<Translate ios="true" ids="osmand_live_updates"/>_ (<Translate ios="true" ids="shared_string_enable"/>/<Translate ios="true" ids="shared_string_disable"/>) - switches on/off the "OsmAnd live" updates function.
- &nbsp; "&#43;" - adds available maps for "live updates".
- &nbsp; "&#62;" - opens the "OsmAnd live" settings of the selected map.
- &nbsp; _<Translate ios="true" ids="osmand_live_updates"/>_ - enables/disables "live updates" for the map.
- &nbsp; _<Translate ios="true" ids="osmand_live_wifi_only"/>_ - enables/disables downloading "live updates" by Wi-Fi connection.
- &nbsp; _<Translate ios="true" ids="osmand_live_upd_frequency"/>_ - chooses the frequency of the map update: Hourly, Daily, or Weekly.
- &nbsp; _<Translate ios="true" ids="osmand_live_updates_size"/>_ - shows "the live updates" size.
- &nbsp; _<Translate ios="true" ids="osmand_live_update_now"/>_ - allows to start the "OsmAnd live" map update.

</TabItem>

</Tabs>

### Update timestamps 

- ```Latest OpenStreetMap update available``` XXXX-XX-XX XX:XX. Represents the latest timestamp of OpenStreetMap changes processed on OsmAnd Servers and available to be downloaded.
- ```Region name' Updated```: Today 13:21. Represents a timestamp of the latest changes available in the uploaded map. It is always earlier than or equal to the ```last available OpenStreetMap update```. If the ```Updated timestamp``` has not changed since *<Translate android="true" ids="update_now"/>*, then this is the last timestamp when the Region name' region was changed and processed by the OsmAnd servers: the following timestamp exists - ```Incluldes OSM changes made until 2022-08-12, 12:05```.
- ```Next update```: Today 14:21. Represents the next timestamp when the local device will check for new updates.

### OsmAnd Live limitations

- Changing addresses on the map and in the search is not yet supported. Address information can be updated with regular monthly updates.
- Updated roads do not contain elevation information, which may affect gradient graphs.
- Modified and deleted route links are not handled correctly, which may result in the display of public transportation lanes and pedestrian routes that no longer exist. 

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

