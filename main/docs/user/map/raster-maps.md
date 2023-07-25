---
sidebar_position: 5
title:  Raster Maps (Online / Offline)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview

Raster maps are significant and useful additions to OsmAnd vector maps. They allow you to combine various map sources with vector maps. For example, information about hills and slopes is displayed as a raster layer. You can display an overlay of hiking trails, rain maps, real-time traffic data, and an overlay of satellite imagery on a translucent base vector map. You can also switch the default maps to raster tiles on the web.


## Use cases

Raster maps have a wide range of uses. Here are some of the most popular:
- Satellite images as an underlay.
- Real-time traffic information.
- Rain forecast as an overlay.
- Topographic maps with the shading of hills and slopes.
- Active cycling and running routes as an overlay.
- Real-time vessel information.
- Online OpenStreetMap tiles for OSM editing.

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

:::tip 
You can also change the main source of maps from vector maps to online tiles.
:::


## Raster Maps

Online maps in OsmAnd are raster data. Raster data is made up of pixels (also referred to as grid cells) - set of small images (tiles). In contrast to vector maps which consists of binary data like roads, points, polygons. Raster map tiles are usually regularly-spaced and square. They often look pixelated because each pixel has its own value or class.

Comparison to default vector maps.

**Advantages:**
- Display time is reasonably faster because maps are not rendered by the device.
- Raster maps could be loaded on the fly during map browse.
- Possibility to preload data partially i.e. create offline cache and be able to download missing tiles on the fly.
- Indefinite variety of external web-sources. Basically, each website with maps could be used as a source data.
- The data could be updated after expiration like traffic tiles are updated every 20-30 minutes (configurable).

**Disadvantages:**
- Significantly bigger comparing to Vector maps. City example: Vector Map - 15 MB, Online 15th Zoom - 50 MB, 16th - 200 MB, 17th - 800 MB, ...
- Places on raster maps are not clickable.
- Not possible to change map style or exclude certain objects.
- Pixelized on zoom (if no high-density tiles are not available).
- It is not possible to rotate a map with readable text (text will be rotated with the map itself, thus will not be easily readable).


## How to use Raster maps 

### Enable plugin

:::note
For **iOS** OsmAnd this feature works by default.
:::

In order to use raster maps in OsmAnd you need to enable [Online maps plugin](../plugins/online-map.md):  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*  


### Change layer parameters
In order to mix raster map layers better, you can change layer transparency (by using a screen slider) and also you can change vector map style (hide polygons), so the underlay layers will 
be more visible, especially useful for satellite imagery.


## Select Raster maps

Raster maps can be used as map sources in OsmAnd (vector maps that work offline are enabled by default).  
You can add one or two online tiles to the base layer maps, and all three will appear on the screen. For example, you can open OsmAnd's base vector maps offline, then add a satellite view as an overlay, and place a map of bike paths below the base map as an underlay. You can set the transparency of the base map for your layer, and you can choose whether or not to display the transparency slider on the main screen.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>


### Main  

You can choose a map style from the list or [add](#add-new-online-raster-map-source) your own.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

### Overlay layer 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

1. *Switch on/off* the Overlay map.
2. *Overlay map source* - you can choose a tile map to install or update.
3. *Overlay transparency*.
4. *Show transparency slider* - quick access to the setting.
5. *Show map symbols* - such as text, road signs, and others.  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

1. *Switch enable/disable* the Overlay map.
2. *Transparency* of the Overlay map.
3. *Show slider on the map* - quick access to the transparency setting.
4. *Available layers* - you can choose a tile map to install or update.
5. *Show map symbols* - such as text, road signs, and others.
6. *Add online source*.
7. *Import from documents*.  

</TabItem>

</Tabs>

### Underlay layer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)   

1. *Switch on/off* the Underlay map.
2. *Underlay map source* - you can select a tile map to install or update.
3. *Base map transparency*.
4. *Show polygons*.
5. *Show transparency slider* - quick access to the setting.

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

1. *Switch enable/disable* the Underlay map.
2. *Base map transparency*.
3. *Show slider on the map* - quick access to the transparency setting.
4. *Available layers* - you can choose a tile map to install or update.
5. *Hide polygons*.
6. *Add online source*.
7. *Import from documents*.

</TabItem>

</Tabs>


## Hillshade / Slope

Hillshade / Slope are raster offline maps that are displayed as a special (terrain) map layer (2nd overlay). These maps are created from 1 source (global planet file) and divided into regions, but it is not needed to switch between maps they are merged automatically. You can only select the Hillshade or the Slope layer (though you could combine them both if you use [as underlay or overlay](#select-map-as-main--underlay--overlay-layer)).

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

To download and install Hillshade / Slope Maps, you need to [purchase](../purchases/index.md) / enable the [Contour lines plugin](../plugins/contour-lines.md).  

### Configure display options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)


## Prepare / copy raster maps to device 

There are multiple ways how to add new raster map, copy it from another device, prepare it on PC and predownloaded tiles to be used offline. For example, you can create your own map package on PC by using special software as [MOBAC, OsmAndMapCreator and etc](../../technical/map-creation/index.md). Typically raster maps are distributed as files with *.sqlitedb* extension. 

Here are the main methods how to add new raster map source which is not defined in OsmAnd yet:
- Copy a raster map to a **tiles** subfolder of [base osmand storage](../personal/storage.md) (Android).
- Open ready to use *.sqlitedb* file with OsmAnd.
- Import package with prepared online maps from another OsmAnd application as a special **osf package** via [Import / export functionality](../personal/import-export.md).
- Create new online map source on a mobile device itself.
- Prepare a magic URL with online map source parameters and open it with OsmAnd.


### Add new online raster map source

To create a raster map source you need to know **the tile URL**. This is URL that can distribute tiles in Mercator Projection. Here is a tile example URL https://tile.osmand.net/hd/6/55/25.png, where is the base part https://tile.osmand.net/hd/.

In order to add a new online raster map source go to:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

| Parameter | Description |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* |<Translate ios="true" ids="res_online_name_descr"/>|
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* |<Translate ios="true" ids="res_online_url_descr"/>|
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* |<Translate ios="true" ids="res_zoom_levels_desc"/>|
| *<Translate ios="true" ids="res_expire_time"/>* |<Translate ios="true" ids="res_expire_time_desc"/>|
| *<Translate ios="true" ids="res_mercator"/>* |<Translate ios="true" ids="pseudo_mercator_projection"/> or <Translate ios="true" ids="edit_tilesource_elliptic_tile"/>|
| *<Translate ios="true" ids="res_source_format"/>/<Translate android="true" ids="storage_format"/>* |<Translate ios="true" ids="sqlite_db_file"/> or <Translate ios="true" ids="one_image_per_tile"/>|
| *<Translate android="true" ids="shared_string_save"/>* button | Tap it to add a new online raster map to the list. |


### Magic URL to install map source

Online maps can be added with a special link to OsmAnd Raster map list. Click to this link and choose OsmAnd for opening:

http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png

|Parameter of link|Example|
|:--------|:---------------|
| [Constant part]|http://osmand.net/add-tile-source|
|[Separators]| ?   & |
|[Name]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoom levels]|min_zoom=9 / max_zoom=15|

You find added Online map in the list of [Main / Underlay / Overlay layer](#select-map-as-main--underlay--overlay-layer) menu.

## Manage raster maps

Raster maps can take a significant amount of disk space, so you might need to regularly check it. For large datasets, it's recommended to use 'SQLite raster source' cause it will store all tiles in 1 large file (sqlite database). 
- [**SQ Lite format**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo format**](../../technical/osmand-file-formats/osmand-metainfo.md)

In order to change tile format you can choose <Translate android="true" ids="storage_format"/> in the edit menu of online maps:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*

</TabItem>

</Tabs>


### Clear raster map cache

Tiles are saved in the cache during usage of Online Raster maps as Main / Overlay / Underlay layer, you can see only the size of your SQ Lite file under name of your Online map in the list. Sometimes a regular cleanup is needed to speedup tiles display or to refresh data.

In order to clear map tiles cache you need to do next:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*

</TabItem>

</Tabs>

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)


### Download / Update tiles

If you want to access raster maps offline, you may need to preload tiles. This can be done on your mobile device, but be aware that some services may block large packet downloads. You can also use the same feature to update already downloaded tiles for selected areas, otherwise, OsmAnd will continue to display tiles that are already stored in the cache.  

In order for the maps to automatically update the tiles after a period of time, you can set an [*Expiry time*](#add-new-online-raster-map-source), then OsmAnd will reload the tiles as soon as they are displayed.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

<table class="images">
    <tr>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-1.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-2.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-3.png').default} alt="raster-maps"/></td>
        <td><img src={require('@site/static/img/plugins/online-maps/download-online-maps-4.png').default} alt="raster-maps"/></td>
    </tr>
</table>  

<!--

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)

-->


</TabItem>

<TabItem value="ios" label="iOS">  

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)

</TabItem>

</Tabs>


- To download or update raster tiles, you need to select the source of the online map as the [Main map source](#select-raster-maps). You can also select online tiles separately for the [*Overlay*](#overlay-layer) map or for the [*Underlay*](#underlay-layer).   

- For the **Android** version of the OsmAnd app, you need to select an area according to the screen size of your device and make a long tap on the map. Then select [*Actions*](../map/map-context-menu.md#customize) in the map context menu and the *Download map* or *Update map* option. On the Download Map screen, make changes to the necessary settings and tap Download.  

- In the iOS version of the OsmAnd app, you need to long tap on the map, then select Actions and the Download map or Update map option from the map context menu. On the Download Map screen, you can select the required area and make changes to the necessary settings. After you set all the parameters you will be able to see the number of tiles and the download size.   


### Change raster map parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Raster maps can be used as they already exist if the tiles are already mapped. If the raster maps are provided online, there is always a base URL that needs to be configured. There are a few more basic parameters that can be changed for raster maps, you can read about that in [this section](#add-new-online-raster-map-source) of the article. More complex parameters are encoded in the internal components of the [SQ Lite format](../../technical/osmand-file-formats/osmand-sqlite.md).


