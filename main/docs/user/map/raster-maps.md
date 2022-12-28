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


Raster maps is an extensive addition to the offline OpenStreetMap Vector maps the application uses by default. Raster maps allow to combine different map sources with Vector Maps. For example, useful Hillshade / Slope information could be displayed as a raster layer. You can display an overlay of hiking routes, live rain maps, live traffic data and an underlay of satellite imagery mixing with semi-transparent base vector map. You can also switch default maps to online web raster tiles.

## Use cases
There is a big variety of possible use cases cause they vary on infinite external map source possibilities. Here are some popular:
- Satellite imagery as underlay
- Live traffic information
- Rain forecast as overlay
- Rich topographic maps with hillshades / slopes
- Active cycling / running trails as overlay
- Live vessel information
- Online OpenStreetMap tiles for OSM editing purposes

![Online maps overview](@site/static/img/plugins/online-maps/online-maps-overview.png)

**Note**: You can also change the main source of the map from vector maps to online tiles.

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
In order to use raster maps in OsmAnd you need to enable [Online maps plugin](../plugins/index.md):

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_ <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/> _


</TabItem>

<TabItem value="ios" label="iOS">  

For **iOS** OsmAnd this feature works by default.

</TabItem>

</Tabs>





### Select map as Main / Underlay / Overlay layer
Raster maps can be used as Map source in OsmAnd (by default, offline vector maps are enabled). Map sources are configurable in:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_ <Translate android="true" ids="android_button_seq"/>  <Translate android="true" ids="shared_string_menu,configure_map,layer_map"/> _


</TabItem>

<TabItem value="ios" label="iOS">  


_ <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_settings_map,map_settings_type,map_settings_online"/> _


</TabItem>

</Tabs>

You can choose one of them in the list or add yours.

Not only can you use one map, but you can also add up to two of the online tiles to the basic layer maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put a cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>_

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)



</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_settings_map,map_settings_overunder"/> _

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>




### Change layer parameters (transparency)
In order to mix raster map layers better, you can change layer transparency (by using a screen slider) and also you can change vector map style (hide polygons), so the underlay layers will 
be more visible, especially useful for satellite imagery.

## Hillshade / Slope

Hillshade / Slope are raster offline maps that are displayed as a special map layer - Terrain (2nd overlay). These maps are created from 1 source (global planet file) and divided into regions, but it is not needed to switch between maps cause it's been merged automatically. You can exclusively select Hillshade and Terrain layer, though you could be combined if you use [as underlay or overlay](#select-map-as-main--underlay--overlay-layer).

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

To download and install Hillshade / Slope Maps, you need to [purchase](../purchases/index.md) / enable [Contour lines plugin](../plugins/contour-lines.md). 

_**Configure display options**_:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_ <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/> _


</TabItem>

<TabItem value="ios" label="iOS">  

_ <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_settings_map,shared_string_terrain"/> _

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

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>_

</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_settings_map,map_settings_overunder,map_settings_add_online_source"/>_

</TabItem>

</Tabs>

At this screen you need to add the next parameters:

![Add online source](@site/static/img/plugins/online-maps/add-online-source.png)

| Parameter | Description |
|:------------|:---------------|
|[<Translate ios="true" ids="fav_name"/>]|<Translate ios="true" ids="res_online_name_descr"/>|
|[<Translate ios="true" ids="res_url"/>]|<Translate ios="true" ids="res_online_url_descr"/>|
|[<Translate ios="true" ids="res_zoom_levels"/>]|<Translate ios="true" ids="res_zoom_levels_desc"/>|
|[<Translate ios="true" ids="res_expire_time"/>]|<Translate ios="true" ids="res_expire_time_desc"/>|
|[<Translate ios="true" ids="res_mercator"/>]|<Translate ios="true" ids="res_pseudo_mercator"/> or <Translate ios="true" ids="res_elliptic_mercator"/>|
|[<Translate ios="true" ids="res_source_format"/>/<Translate android="true" ids="storage_format"/>]|<Translate ios="true" ids="res_source_sqlite"/> or <Translate ios="true" ids="res_source_one_per_tile"/>|

Click to "<Translate android="true" ids="shared_string_save"/>" button for adding a new online raster map to the list.

### Magic URL to install map source

Online maps can be added with a special link to OsmAnd Raster map list. Click to this link and choose OsmAnd for opening:

http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png

|Parameter of link|Example|
|:--------|:---------------|
|[Constant part]|http://osmand.net/add-tile-source|
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

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>_

</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,res_source_sqlite"/> / <Translate ios="true" ids="res_source_one_per_tile"/>_

</TabItem>

</Tabs>


### Clear raster map cache

Tiles are saved in the cache during usage of Online Raster maps as Main / Overlay / Underlay layer, you can see only the size of your SQ Lite file under name of your Online map in the list. Sometimes a regular cleanup is needed to speedup tiles display or to refresh data.

In order to clear map tiles cache you need to do next:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>_

</TabItem>

<TabItem value="ios" label="iOS">  

_ <Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/> _

</TabItem>

</Tabs>



![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)


### Download / update tiles

If you want to access raster maps offline, you might need to predownload tiles. It's possible to do on a mobile device though be aware that some services might block a large batch download. Same feature can be used to update already downloaded tiles for selected areas, otherwise OsmAnd will continue display tiles that are already stored in the cache. 

**Hint**: if you want maps to automitically update tiles after some time, you can configure *expiration time*, so OsmAnd will redownload tiles once the tile is going to be displayed.



> **First of all, you need to choose your online source as [Main Map source](#select-map-as-main--underlay--overlay-layer).**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

**<Translate android="true" ids="android_button_seq"/>** you need to select the area by the size of your screen device and to do a long click on the map - <Translate android="true" ids="shared_string_menu,shared_string_actions,shared_string_download_map"/> / <Translate android="true" ids="update_tile"/> → 
At this screen you need to choose zoom levels → screen of downloading progress → <Translate android="true" ids="shared_string_download"/>

![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-1.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-2.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-3.png) ![Download tiles Android](@site/static/img/plugins/online-maps/download-online-maps-4.png)


</TabItem>


<TabItem value="ios" label="iOS">  
    

**<Translate ios="true" ids="ios_button_seq"/>** you need to do a long click on the map - <Translate ios="true" ids="actions,download_map"/> / <Translate ios="true" ids="update_map"/> → 
At this screen you can select the needed area, choose zoom levels. When you set all parameters you can see a number of tiles and download size. Next, click to <Translate ios="true" ids="shared_string_continue"/> → screen of downloading progress.

![Download tiles iOS](@site/static/img/plugins/online-maps/online-maps-download-tiles-ios.png)


</TabItem>

</Tabs>




### Change raster map parameters
Raster maps can be used as is if tiles are already packaged inside the maps. In case raster maps are provided online, there is always a base url to be configured. There are some other basic parameters that can be modified for raster maps - [see here](#add-new-online-raster-map-source). More sophisticated parameters are encoded in the internals of [SQ Lite format](../../technical/osmand-file-formats/osmand-sqlite.md).

You can change some raster map parameters inside OsmAnd itself.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  &#8942; → <Translate android="true" ids="shared_string_edit"/>_

</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>_

</TabItem>

</Tabs>







