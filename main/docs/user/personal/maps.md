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

The Maps screen allows you to perform basic operations with online and offline maps used in OsmAnd. These are loading, deleting, renaming, clearing the cache for online maps, updating, and checking the map size.

OsmAnd deals with 2 type of maps: [Vector maps](../map/vector-maps.md) and  [Raster maps](../map/raster-maps.md). All maps are stored in one place of the [Storage](../personal/storage.md) and it is accessible with external tools. 

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

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)


Read more in the article [Download maps](../start-with/download-maps.md#map-types).


## Download maps (Maps)

Download maps screen allows you to download maps from OsmAnd servers, you will need an active internet connection to do that.

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

**Actions**:
- Refresh &#10227; - redownloads list of available maps from OsmAnd Server.
- Search -  allows you to search maps by **Country**, **Province** or by a large **City**. 
- Toolbar indicates how much memory is available to download and how much maps is available to download for free.

:::tip Hint
There is a small world map built into OsmAnd. You don't need to download large maps of any region if you don't intend to use them. If you want a map that covers the entire planet, including major cities, roads, and rivers, you can download a **Detailed worldwide map**.
:::

## Local maps

Local maps represents all downloaded maps on device grouped by [Types](#map-types)

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

**Multifile Actions**.
- &nbsp;&#10227; button - scans & refreshes list of available maps on storage.
- &nbsp;Delete button  - Multiselection to delete maps.
- &nbsp;&#8285; - <Translate android="true" ids="local_index_mi_backup"/> or <Translate android="true" ids="local_index_mi_restore"/> - multiselection to deactivate and activate [maps](#deactivate-maps-android).

Each map displays its name, size, creation date  within a certain category and highligted by a **color**.
- &nbsp;Green - map is up to date.
- &nbsp;Orange - there is an update available for the map.
- &nbsp;Grey / Italic - map is deactivated 

For each **map specific actions** are available by clicking 3 dots or long tap on the row.
- &nbsp;Rename - changes name of the file and map
- &nbsp;Update - updates map to the latest available version
- &nbsp;Delete - deletes map
- &nbsp;Edit (Online maps) - edits online map configuration
- &nbsp;Clear all tiles cache (Online maps) - clear all the tiles cached by online map.

### Deactivate Maps (Android)

It's possible to deactivate vector maps, so they will be present on the device but will not be used for map display, search and routing. It's optimal to have large storage of maps and use them when they are needed without slowing down OsmAnd functionality.

![Maps menu Local Deactivate Android](@site/static/img/personal/maps/maps_menu_local_deactivate_android.png) ![Maps menu Local Deactivate Android](@site/static/img/personal/maps/maps_menu_local_deactivate_1_android.png)

Local action available for the map: **<Translate android="true" ids="local_index_mi_restore"/>** / **<Translate android="true" ids="local_index_mi_backup"/>**.


## Update maps

Every month you will be able to update OsmAnd Maps on Updates screen. Here it's possible to update all maps with one click. Standard and road-only maps are avalaible every month typically with 2 weeks delay. In case you would like to get access to Hourly updates, please check [OsmAnd Live](#osmand-live).

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


## OsmAnd Live

:::note
  
You can use live updates only with [OsmAnd Pro (Android)](../purchases/android.md#free-and-paid-features) and [OsmAnd Live (iOS)](../purchases/ios.md#free-and-paid-features) subscription.

:::

OsmAnd Live is a special feature  ([available by subscription](../purchases/index.md) or [free for OSM Mappers](#free-for-osm-mappers))  that provides additional small map updates on top of the large complete monthly maps. It is roughly estimated that map updates for 1 month takes only 2-4% of complete map size. These updates are generated approximately every 15 minutes on OsmAnd Servers and could be downloaded hourly / daily or weekly. On Android they could be downloaded in the background though it doesn't work correctly on all devices. The app restart always checks if there are pending updates and downloads them. 

Each map has an independent collection  of tiny map updates, please be careful if you have overlapping map regions. If you want to go back to the original state, you can switch off updates and 'Clear cache'.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates,live_updates"/>*  

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

- &nbsp; _<Translate android="true" ids="shared_string_enabled"/>_ / _<Translate android="true" ids="shared_string_disabled"/>_ - switches on/off the "OsmAnd live" update function.
- &nbsp; "&#8230; &#124;" - opens the "OsmAnd live" settings of the selected map.
- &nbsp; _<Translate android="true" ids="update_frequency"/>_ - chooses the frequency of the map update:  <Translate android="true" ids="hourly"/>, <Translate android="true" ids="daily"/>, or <Translate android="true" ids="weekly"/>.
- &nbsp; _<Translate android="true" ids="update_now"/>_ - allows to start the "OsmAnd live" map update.
- &nbsp; _<Translate android="true" ids="updates_size"/>_ - shows "the live updates" size.
- &nbsp; &#x1F5D1; button - allows to delete "the live updates" map.
- &nbsp; _<Translate android="true" ids="only_download_over_wifi"/>_ - enables/disables downloading "live updates" by Wi-Fi connection.  

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

- ```Latest OpenStreetMap update available``` XXXX-XX-XX XX:XX - represents the latest timestamp of OpenStreetMap changes processed on OsmAnd Servers and available to be downloaded.
- ```'Region name' Updated```: Today 13:21 - represents the timestamp of the latest changes available in the downloaded map. It's always earlier or equal to the ```Latest OpenStreetMap update available```. If ```Updated timestamp``` is not changed after _<Translate android="true" ids="update_now"/>_ then it is the latest timestamp when ```'Region name'``` region was modified and processed by OsmAnd servers: there is the next timestamp - ```Incluldes OSM changes made until 2022-08-12, 12:05```.
- ```'Next update```: Today 14:21 - represents the next timestamp when a local device will check if new updates are available.

### OsmAnd Live limitations

- Address changes on the map and in the search are not supported yet. Address information can be updated with regular monthly updates.
- Updated roads don't have altitude information, which may affect the slope graphs.
- Modified and deleted route relations are not handled correctly, which may lead to displaying public transport lanes and pedestrian routes that no longer exist.  

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
