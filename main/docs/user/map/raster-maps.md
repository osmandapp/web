---
sidebar_position: 6
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

<InfoIncompleteArticle/>

## Overview {#overview}

Raster maps are significant and useful additions to OsmAnd vector maps. They allow you to combine various map sources with vector maps. For example, information about hills and slopes is displayed as a raster layer. You can display an overlay of hiking trails, rain maps, real-time traffic data, and an overlay of satellite imagery on a translucent base vector map. You can also switch the default maps to raster tiles on the web.


## Use Cases {#use-cases}

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


## Raster Maps {#raster-maps}

Online maps in OsmAnd are composed of raster data, which consists of pixels (also referred to as grid cells) - essentially a set of small images known as tiles. Unlike vector maps, which represent data like roads, points, and polygons using binary information, raster map tiles are arranged in a grid and can appear pixelated at high zoom levels because each pixel has a fixed value or class.

#### Comparison to default vector maps {#comparison-to-default-vector-maps}

**Advantages:**

- Since raster maps are pre-rendered, they load faster, eliminating the need for the device to process and render data in real-time.
- Raster maps can be loaded dynamically while browsing.
- You can create an offline cache and download only missing tiles as needed.
- You can use an unlimited number of external web sources for raster maps, making it flexible for different map types, like satellite views or specialized maps.
- Raster data, such as traffic information, can be updated regularly after expiration (e.g., every 20-30 minutes, depending on the configuration).

**Disadvantages:**

- Raster maps take up significantly more space than vector maps. For example, a city map might be 15 MB as a vector map, but increase to 50 MB at zoom level 15, 200 MB at zoom level 16, and up to 800 MB at zoom level 17.
- You cannot tap specific places or objects on raster maps to get more information.
- Raster maps cannot be styled or modified to exclude specific objects.
- Zooming in too far can cause the image to appear pixelated, especially if high-resolution tiles are unavailable.
- It’s not possible to rotate the map without rotating the text, which can make reading labels difficult.


## How to Use Raster Maps {#how-to-use-raster-maps}

**Enable plugin**.

- **iOS**. For *iOS*, this feature works by default.
- **Android**. For *Android*, to use raster maps in OsmAnd you need to enable [Online maps plugin](../plugins/online-map.md). Follow these steps: *<Translate android="true" ids="shared_string_menu,plugin_settings,shared_string_online_maps"/> → &#8942; → <Translate android="true" ids="shared_string_enable"/>*

**Change layer parameters**. To improve the visibility and mix of raster map layers, you can adjust the layer transparency using the screen slider. Additionally, you can modify the vector map style by hiding polygons, making the underlay layers more visible. This is especially useful when viewing satellite imagery.


## Select Raster Maps {#select-raster-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Show maps](@site/static/img/plugins/online-maps/show-maps-ios.png)  

</TabItem>

</Tabs>

In OsmAnd, raster maps can serve as an additional map source alongside the default vector maps, which are optimized for offline use.  

You have the flexibility to add one or two online tile layers to complement your base map. This allows you to view up to three map layers simultaneously on your screen. For instance, you can have OsmAnd's offline vector map as the base, overlay it with a satellite view, and place a bike path map as the underlay for added detail.  

You can also adjust the transparency of the base map to blend it with your layers. If needed, you can enable a transparency slider on the main screen for quick adjustments.


### Main   {#main--}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_source.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type"/>*  

![Show maps](@site/static/img/plugins/online-maps/map_type.png)

</TabItem>

</Tabs>

You can choose a map style from the list or [add](#add-new-online-raster-map-source) your own.


### Overlay Layer {#overlay-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/overlay-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_over"/>*  

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/overlay-ios.png)  

</TabItem>

</Tabs>

1. *Switch on/off* the Underlay map.
2. *Overlay transparency* (*Android*)/ *Transparency* of the Overlay map (*iOS*).
3. *Show transparency slider* (*Android*) / *Show slider on the map* (*iOS*). Quick access to the transparency setting.
4. *Overlay map source* (*Android*) / *Available layers* (*iOS*). You can choose a tile map to install or update.
5. *Show map symbols* - such as text, road signs, and others.  
6. *Add online source* (*iOS*).
7. *Import from documents* (*iOS*).


### Underlay Layer {#underlay-layer}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_underlay"/>*  

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/underlay-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,map_settings_under"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/underlay-ios.png)  

</TabItem>

</Tabs>

1. *Switch on/off* the Underlay map.
2. *Base map transparency*.
3. *Show transparency slider* (*Android*) / *Show slider on the map* (*iOS*). Quick access to the transparency setting.
4. *Underlay map source* (*Android*) / *Available layers* (*iOS*). You can choose a tile map to install or update.
5. *Show/Hide polygons*.
6. *Add online source* (*iOS*).
7. *Import from documents* (*iOS*).


## Hillshade / Slope {#hillshade--slope}

![Terrain layers](@site/static/img/plugins/online-maps/terrain_two_layers.png)

**Hillshade** and **Slope** are offline raster maps that show terrain relief. They are displayed as a special map layer, a second overlay on the base map. The maps contain additional elevation information to help you more accurately understand the slope and shadows of the landscape. *Hillshade* and *Slope* information is based on data from a single source, the *Global planet file*, and is divided into regions.  

You don't need to switch between Hillshade and Slope layers, as they are merged automatically. You can select only one of these layers to display on the map, but you also have the option to combine them both [as an underlay or overlay](#select-raster-maps) on other layers for a more visual representation of the terrain.

To get started with Hillshade and Slope you need to:

1. Purchase the Topography plugin:
    - [Android purchases](../purchases/android.md)
    - [iOS purchases](../purchases/ios.md)
2. Enable the [Topography plugin](../plugins/topography.md):  
    *Menu → Plugins → ︙ → Enable*
3. Select your required region, and download **Terrain map (3D)**.
4. The download process may take some time, depending on the size of the selected region and the speed of your Internet connection.


### Hillshade and 3D Relief {#hillshade-and-3d-relief}

| Hillshade | 3D Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

The difference of relief display on the map when applying these settings is described in the **Topography** article in the corresponding section [Hillshade and 3D Relief](../plugins/topography.md#hillshade-and-3d-relief).


### Configure Display Options {#configure-display-options}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*

</TabItem>

</Tabs>

![Terrain layers](@site/static/img/plugins/online-maps/terrain_layers.png)

You can customize the zoom level to display and the transparency for Hillshade and Slope. You can read more in the [Topography article](../plugins/topography.md#configure-map-view).


## 3D Relief {#3d-relief}

:::note
[3D Relief](../plugins/topography.md#3d-relief) is an [**OsmAnd Pro**](../purchases/index.md) paid feature <ProFeature />.
:::

![Terrain layers](@site/static/img/plugins/online-maps/raster_maps_3d.png)

The [**3D Relief** feature](../plugins/topography.md#3d-relief) is a mapping technology that allows the visualization of terrain on a map using three-dimensional models. This feature adds elevation information to a normal two-dimensional map, which creates a 3D and depth effect and allows you to better visualize the terrain.  

*To start using 3D Relief*:  
You need to purchase [OsmAnd Pro purchase plan](../plugins/index.md#purchase), enable the [Topography plugin](../plugins/topography.md), and switch on the [3D Relief](../plugins/topography.md#3d-relief) item in *Menu →  Configure map*.


*How the 3D Relief feature works*:  
*1.* To create a 3D relief, OsmAnd receives information about the terrain elevation.  
*2.* Based on the elevation data, a 3D model is created to display mountains, hills, valleys, and other terrain elements on the map.  
*3.* OsmAnd then displays these three-dimensional models on a flat map. The map can be zoomed in, zoomed out, and rotated to view the terrain from different angles and perspectives.  
*4.* The display of contour lines on the map does not depend on whether the map source is online or offline.


## Prepare/Copy Raster Maps to Device {#preparecopy-raster-maps-to-device}

There are multiple ways how to add a new raster map, copy it from another device, prepare it on a PC, and pre-download tiles to be used offline. For example, you can create your map package on a PC using special software such as [MOBAC, OsmAndMapCreator, etc](../../technical/map-creation/index.md). Typically raster maps are distributed as files with `.sqlitedb` extension.

Here are the main methods how for adding a new raster map source which is not defined in OsmAnd yet:

- Open ready to use `.sqlitedb` file with OsmAnd.
- Import package with prepared online maps from another OsmAnd application as a special `.osf` **package** via [Import / export functionality](../personal/import-export.md).
- Create a new online map source on a mobile device itself.
- Prepare a magic URL with online map source parameters and open it with OsmAnd.


### Add New Online Raster Map Source {#add-new-online-raster-map-source}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_map,shared_string_add"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder,add_online_source"/>*

</TabItem>

</Tabs>

![Add online source](@site/static/img/plugins/online-maps/add-online-source-2.png)

To create a raster map source you need to know the **URL of a tile**, which is a specific URL that distributes map tiles in the Mercator Projection. For example, a tile URL might look like this: `https://tile.osmand.net/hd/6/55/25.png`, where `tile.osmand.net/hd/` is the base URL.

Here are the key parameters to configure when setting up a new online map source:

| Parameter | Description |
|:------------|:---------------|
| *<Translate ios="true" ids="shared_string_name"/>* | Provide a name for the new online map source. |
| *<Translate ios="true" ids="edit_tilesource_url_to_load"/>* | Enter or paste the URL for the online tile source. Make sure it follows the tile URL format. |
| *<Translate ios="true" ids="shared_string_zoom_levels"/>* | This parameter affects how the map is displayed. <br/><ul><li>As a *map type*, the map will be limited to the selected zoom levels.</li><li>As an *overlay/underlay*, the map will appear at the selected zoom levels, with upscaling or downscaling applied outside those levels.</li></ul> |
| *<Translate ios="true" ids="res_expire_time"/>* | Set the duration (in minutes) after which cached tiles will refresh. You can leave this field blank if you don’t want tiles to reload automatically. <br/><ul><li>1 day = 1440 minutes</li><li>1 week = 10,080 minutes</li><li>30 days = 43,200 minutes</li></ul> |
| *<Translate ios="true" ids="res_mercator"/>* | Choose between *Pseudo-Mercator projection* and *Elliptic Mercator projection*, depending on the source. |
| *<Translate ios="true" ids="res_source_format"/> / <Translate android="true" ids="storage_format"/>* | Select how tiles should be stored: either in an *SQLiteDB file* or as *one image file per tile*. |


### Magic URL to Install Map Source {#magic-url-to-install-map-source}

Online maps can be added with a special link to the OsmAnd Raster map list. Click on this link and choose OsmAnd for opening:

`http://osmand.net/add-tile-source?name=TEST&min_zoom=9&max_zoom=15&url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png`

|Parameter of link|Example|
|:--------|:---------------|
| [Constant part]| `http://osmand.net/add-tile-source` |
|[Separators]| ?   & |
|[Name]|name=TEST|
|[URL]|url_template=https://a.tile.opentopomap.org/{0}/{1}/{2}.png|
|[Zoom levels]|min_zoom=9 / max_zoom=15|

You find an added Online map in the list of the [Main / Underlay / Overlay layer](#select-raster-maps) menu.


## Manage Raster Maps {#manage-raster-maps}

Raster maps can take up a significant amount of disk space, so you might need to regularly check it. For large datasets, it's recommended to use *SQLite raster source* cause it will store all tiles in 1 large file (SQLite database).

- [**SQ Lite format**](../../technical/osmand-file-formats/osmand-sqlite.md)
- [**Metainfo format**](../../technical/osmand-file-formats/osmand-metainfo.md)

To change tile format, you can choose <Translate android="true" ids="storage_format"/> in the edit menu of online maps:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="shared_string_edit,storage_format,sqlite_db_file"/> / <Translate android="true" ids="one_image_per_tile"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit,res_source_format,sqlite_db_file"/> / <Translate ios="true" ids="one_image_per_tile"/>*


### Clear Raster Map Cache {#clear-raster-map-cache}

![Online sources list](@site/static/img/plugins/online-maps/online-sources-list.png)

Tiles are stored in the cache when using Online raster maps as a Main / Overlay / Underlay layer. You can see the size of your SQ Lite file under your Online map name in the list. Sometimes regular cleansing is required to speed up the display of the tiles or to update the data.  

To clear the map tile cache, you need to do the following:

- **Android**: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  
&#8942; → <Translate android="true" ids="clear_tile_data"/>*
- **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_clear_cache"/>*



### Download / Update Tiles {#download--update-tiles}

If you want to access raster maps offline, you may need to preload tiles. This can be done on your mobile device, but be aware that some services may block large packet downloads. You can also use the same feature to update already downloaded tiles for selected areas, otherwise, OsmAnd will continue to display tiles that are already stored in the cache.  

For the maps to automatically update the tiles after a while, you can set an [Expiry time](#add-new-online-raster-map-source), then OsmAnd will reload the tiles as soon as they are displayed.  

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

- To download or update raster tiles, you need to select the source of the online map as the [Main map source](#select-raster-maps). You can also select online tiles separately for the [Overlay](#overlay-layer) map or for the [Underlay](#underlay-layer).

- For the **Android** version of the OsmAnd app, you need to select an area according to the screen size of your device and make a long tap the map. Then select [Actions](../map/map-context-menu.md#customize) in the map context menu and the *Download map* or *Update map* option. On the Download Map screen, make changes to the necessary settings and tap Download.  

- In the iOS version of the OsmAnd app, you need to long tap the map, then select *Actions* and the *Download map* or *Update map* option from the map context menu. On the Download Map screen, you can select the required area and modify the necessary settings. After you set all the parameters, you can see the number of tiles and the download size.


### Change Raster Map Parameters {#change-raster-map-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local,local_indexes_cat_tile"/> → choose online maps →  &#8942; → <Translate android="true" ids="shared_string_edit"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,download_tab_local,online_raster_maps"/> → i → <Translate ios="true" ids="shared_string_edit"/>*

</TabItem>

</Tabs>

Raster maps can be used as they already exist if the tiles are already mapped. If the raster maps are provided online, there is always a base URL that needs to be configured. There are a few more basic parameters that can be changed for raster maps, you can read about that in [this section](#add-new-online-raster-map-source) of the article. More complex parameters are encoded in the internal components of the [SQ Lite format](../../technical/osmand-file-formats/osmand-sqlite.md).


## Related Articles {#related-articles}

- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in October 2024*
