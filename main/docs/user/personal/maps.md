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

Maps screen allows you to do basic operations over online and offline maps used in OsmAnd such as downloading, removing, renaming, clearing the cache for online maps, updating and checking maps size.

OsmAnd deals with 2 type of maps: [Vector maps](../map/vector-maps.md) and  [Raster maps](../map/raster-maps.md). All maps are stored in one place of the [Storage](../personal/storage.md) and it is accessible with external tools. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps"/>_

![Maps menu Android](@site/static/img/personal/maps/maps_menu_android.png) ![Download maps menu Android](@site/static/img/personal/maps/download_map_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>_

![Maps menu iOS](@site/static/img/personal/maps/maps_menu_ios.png) ![Download maps menu iOS](@site/static/img/personal/maps/download_map_ios.png)

</TabItem>

</Tabs>

## Map types

There are several map types available to download and manage:
- Standard - a fully packaged OsmAnd map based on [OpenStreetMap](https://www.openstreetmap.org/) source, they provide map, routing, address, POI, public transport information, . 
- Roads-only (Android) - a smaller by size map comparing to Standard due to removed map details such as buildings & points on the map.
- [Coutour lines](../map/vector-maps.md#contour-lines) - a map that contains the elevation contour lines.
- [Hillshades](../map/raster-maps.md#hillshade--slope) - a raster map with hillshade information.
- [Slopes](../map/raster-maps.md#hillshade--slope) - a raster map with slopes information. 
- [Online and cached tile maps](../map/raster-maps.md) - a custom map source for online maps, could be installed as 3rd party map or as OsmAnd Tiles. 
- [Wikipedia](../plugins/wikipedia.md) - a vector map that provides Geo located Articles as POIs from [Wikipedia](https://wikipedia.org/).
- [Travel guides / Wikivoyage](../plan-route/travel-guides.md) - a vector map that has a collection of Articles (Text as HTML + GPX file) for example [Wikivoyage](https://www.wikivoyage.org/).
- [Nautical maps](../plugins/nautical-charts.md) - a vector map that provide sea depth elevation as points or as lines.
- [Voice packages](../navigation/voice-navigation.md) - a voice package that provides sounds and configuration how to guide you in the navigation mode.
- [Map fonts (Android)](../map/vector-maps.md#map-fonts-android) - additional fonts files used to render text on the map.
- [Altitude correction (Android)](../widgets/info-widgets.md#altitude) - a special map file that provides correction for geoid on Android devices (optional).
- Other maps - maps that couldn't be attached to current maps hierarchy, typically represents deprecated and not supported maps or maps that will be available next release.

**Note**: For regions like Germany consisted of many maps, you can use bulk map downloads, it is depicted as double download arrows next to the map type.

![Download map menu Android](@site/static/img/settings/download_map_menu_android.png) ![Regionwide maps Android](@site/static/img/settings/regionwide_maps_menu.png)


## Download maps (Maps)

Download maps screen allows you to download maps from OsmAnd servers, you will need an active internet connection to do that.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_downloads"/>_

![Download map menu general Android](@site/static/img/personal/maps/download_map_menu_android.png) ![Download map menu general Android](@site/static/img/personal/maps/download_map_menu_1_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres"/>_

![Download map menu general iOS](@site/static/img/personal/maps/download_map_menu_ios.png) ![Download map menu general iOS](@site/static/img/personal/maps/download_map_menu_1_ios.png)

</TabItem>

</Tabs>

**Actions**:
- Refresh &#10227; - redownloads list of available maps from OsmAnd Server.
- Search -  allows you to search maps by **Country**, **Province** or by a large **City**. 
- Toolbar indicates how much memory is available to download and how much maps is available to download for free.

**Hint**: a small Worldwide map is builtin inside OsmAnd, you don't need to download a large Worldwide map if you plan to have detailed maps for region. In case you want to have map that covers full planet including major cities, roads & rivers, you can download **_Detailed worldwide map_**.

## Local maps

Local maps represents all downloaded maps on device grouped by [Types](#map-types)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local"/>_

![Maps menu Local vector Android](@site/static/img/personal/maps/maps_menu_local_vector_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres,download_tab_local"/>_

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

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates"/>_


![Maps menu Update maps Android](@site/static/img/personal/maps/maps_menu_update_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres,res_updates"/>_

![Maps menu Update maps iOS](@site/static/img/personal/maps/maps_menu_update_ios.png)

 </TabItem>

</Tabs>

## OsmAnd Live

:::note
  
<ProFeature/> You can use live updates only with <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro (Android)</a> and <a href="https://docs.osmand.net/docs/user/purchases/ios#free-and-paid-features">OsmAnd Live (iOS)</a> subscription.

:::

OsmAnd Live is a special feature  ([available by subscription](../purchases/index.md) or [free OSM Mappers](#free-for-osm-mappers))  that provides additional small map updates on top of the large complete monthly maps. It is roughly estimated that map updates for 1 month takes only 2-4% of complete map size. These updates are generated approximately every 15 minutes on OsmAnd Servers and could be downloaded hourly / daily or weekly. On Android they could be downloaded in the background though it doesn't work correctly on all devices. The app restart always checks if there are pending updates and downloads them. 

Each map has independent collection  of tiny map updates, please be aware if you have overlapping map regions. In case you want to revert to initial state you can switch off updates and 'Clear cache'.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates,live_updates"/>

![Maps menu OsmAnd live Android](@site/static/img/personal/maps/maps_menu_osmand_live_android.png) ![Maps menu OsmAnd live edit Android](@site/static/img/personal/maps/maps_menu_osmand_live_edit_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="menu,res_mapsres,res_updates,osmand_live_updates"/>

![Maps menu OsmAnd live  iOS](@site/static/img/personal/maps/maps_menu_osmand_live_ios.png) ![Maps menu OsmAnd live edit iOS](@site/static/img/personal/maps/maps_menu_osmand_live_edit_ios.png)

</TabItem>

</Tabs>



### Update timestamps 
- ```Latest OpenStreetMap update available``` XX-XX-XXXX XX:XX - represents the latest timestamp of OpenStreetMap changes processed on OsmAnd Servers and available to be downloaded.
- ```Andorra Updated```: Today 14:10 - represents the timestamp of the latest changes available in the downloaded map. It's always earlier or equal to the ```Latest OpenStreetMap update available```. If ```Updated timestamp``` is not changed after _<Translate android="true" ids="update_now"/>_ then it is the latest timestamp when ```Andorra``` region was modified and processed by OsmAnd servers.
- ```Andorra Last time checked```: Today 14:10 - represents the latest timestamp that local device checked if new updates are available. It's always ahead of updated timestamps and displays both successful and unsuccessful attempts to download maps.

### OsmAnd Live limitations
- Address changes on the map & in the search are not supported yet. Address information could be updated with regular monthly updates.
- Updated roads don't have altitude information thus the slope graphics could be affected.
- Modified and deleted route relations are not handled correctly which could lead to display of no longer existing public transport lanes and hiking routes.

### Free for OSM Mappers

<InfoAndroidOnly />

OsmAnd Live" is available for OpenStreetMap mappers which [contribute OSM](https://learnosm.org/).

1. Switch on [OpenStreetMap editing plugin](../plugins/osm-editing.md) in OsmAnd.
2. [Log in by your OpenStreetMap username](../plugins/osm-editing.md#plugin-settings).
3. OpenStreetMap users need to have a minimum of **15 changes** over the last two-month period for accessing unlimited hourly map updates.

![OsmAnd live for mappers](@site/static/img/personal/maps/map_updates_mappers.png)

