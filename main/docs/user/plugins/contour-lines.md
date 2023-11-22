---
sidebar_position: 4
title: Topography
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

:::tip NOTE
 <ProFeature/> The Topography plugin is a paid feature of the OsmAnd app.  
:::

Topography is an important feature of cartography that provides information to visually assess the terrain's relief. 
Topography information like **Contour lines**, **Terrain** (**Hillshade** and **Slope**) and **3D Relief** helps to make a visual assessment of the lay of the land by seeing elevation, relief, extremes, steepness, or points of equal height. 

Each feature provided by this plugin is an independent map layer that, when enabled, is displayed above or below the main map source depending on the settings.  


The Topography plugin provides access to the following map types:  

- [**Contour lines**](#contour-lines). This is a [vector map](../map/vector-maps.md) represented in **feet** or **meters**. Contour lines show elevation levels and help visualize the terrain.
- [**Hillshade**](#hillshade). [Raster map](../map/raster-maps.md) with shading of hills and slopes, which makes the relief more visible and helps to visually interpret the terrain. 
- [**Slope**](#slope). Another [raster](../map/raster-maps.md) layer that provides information about the steepness of slopes, which can be important for route planning and safety. 
- [**Terrain map (3D)**](#3d-relief). It is a [vector map](../map/vector-maps.md) that provides a three-dimensional representation of the terrain, available only for Android users. 
- [**Combine layer types**](#combine-layer-types)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour_lines_android](@site/static/img/plugins/contour-lines/Contour_lines_android.png) ![Hillshade_android](@site/static/img/plugins/contour-lines/Hillshade_android.png) ![Slopes_android](@site/static/img/plugins/contour-lines/Slopes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Contour_lines_ios](@site/static/img/plugins/contour-lines/Contour_lines_ios.png) ![Hillshades_ios](@site/static/img/plugins/contour-lines/Hillshades_ios.png) ![Slopes_ios](@site/static/img/plugins/contour-lines/Slopes_ios.png) 


</TabItem>

</Tabs>

:::info
The altitude data on the map - between 70 degrees north latitude and 70 degrees south latitude - was obtained as a result of measurements carried out by the Shuttle Radar Topography Mission (*SRTM*). It used the Advanced Spaceborne Thermal Emission and Reflection Radiometer (*ASTER*), the primary imaging tool in NASA's Earth Observation System.  
For full information see [License](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146).


<details><summary>DEM (DSM) data</summary> 
    - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>: The original data used for this product have been supplied by JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1<br/>
	- <a href="https://sonny.4lima.de">SONNY's LiDAR DIGITAL TERRAIN MODELS</a> (DTM) OF EUROPEAN COUNTRIES</details>

:::


## Setup 

To display **Contour lines** and **Terrain (Hillshade, Slope)** data on the map:

1. Purchase: [OsmAnd+, OsmAnd Maps+, or OsmAnd Pro purchase plan](../plugins/index.md#purchase) and [Enable](../plugins/index.md#enable--disable) the Topography plugin in the Plugins section of the Main menu.
2. [Download](#download-maps) Contour lines, Hillshade, Slope, or Terrain map (3D) maps.
3. [Enable and adjust](#configure-map-view) Contour lines and/or Hillshade or Slope for the map view.
4. You can also watch [Youtube Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

To display **3D Relief** (Android only):

1. Purchase an [OsmAnd Pro plan](../purchases/android.md#free-and-paid-features) that includes the Topography plugin. After purchase, the plugin will appear in the Plugins list in the main Menu. Plans such as [OsmAnd+, OsmAnd Maps+, OsmAnd Pro purchases plans](../plugins/index.md#purchase) are suitable.
2. [Download](#download-maps) Terrain map (3D) maps.
3. [Enable and adjust](#configure-map-view) 3D Relief for the map view.


## Download Maps

### How to download  

Download **Contour lines**, **Hillshade**, **Slope**, **Terrain map (3D)** (Android only) for a specific area as follows:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_1.png)  ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

- Go to:
    - **Android**: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>*
    - **iOS**: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*
- Choose a country.
- Download packages from sections:
    - The *<Translate android="true" ids="region_maps"/>*(Android) or *<Translate ios="true" ids="res_region_map"/>*(iOS) section provides available maps for the entire country. Download them if necessary.
    - The *<Translate android="true" ids="regions"/>*(Android) or *<Translate ios="true" ids="res_mapsres"/>*(iOS) section lists the regions of a country. Tap on the required region to open the map packs available for download. 
- After you have downloaded the required maps, you can display **Contour lines** and/or **Terrain** (Hillshade/Slope) using the [Configure map](../map/configure-map-menu.md) section of the Main menu.


**Contour Lines** mountain maps may be large in size, over 2 GB, and may not be supported properly on older devices. You have the option to download individual areas of the region rather than the entire region. The size of all maps is indicated under their name.  


### Interaction with Rendering version

For the **Hillshade** or **Slope** functionality

- If you are using Map rendering engine v1, you need to use the conventional Hillshade or Slope raster downloads,
- If you are using Map rendering engine v2,
   - you can continue to use the old Hillshade or Slope raster downloads, but need activate the Development and enable its setting "_Use raster sqlite for Hillshade / slope_.
   - Alternatively, you can use the new "Terrain map (3D)" downloads (saving a bit of storage space), and the Hillshade/Slope/3D Relief effects can be produced from that on the device.


 
## Contour lines

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,download_srtm_maps"/>* 

![Contour lines menu Android](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → Contour lines*

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_contour_lines_1_ios.png) 

</TabItem>

</Tabs>  


Contour lines allow you to explore in which direction and how much a surface is sloped. You can customize displaying the [contour lines](../map/vector-maps.md#contour-lines) in terms of color, line widths, density and zoom levels at which contour lines are visible.  

When using Version 1 of the map rendering engine, if the map source is any tiled map from the Internet, the display of contour lines is not supported. In version 2 of the map rendering engine, contour maps are also displayed in 3D view and 3D Relief.  

**Appearance settings**:  
- *<Translate android="true" ids="download_srtm_maps"/>* - toggle on/off to show or hide Contour lines on the map.
- *<Translate android="true" ids="show_from_zoom_level"/>* - minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines are visible on the map.
- *<Translate android="true" ids="srtm_color_scheme"/>* - selection of color options in which Contour lines are shown on the map. 
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>* - selection of width options for displaying  Contour lines on the map. 
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>* - selection of options for the density of Contour lines displayed on the map: Low, Medium, High. At higher densities, the map is loaded slower.
- *<Translate android="true" ids="welmode_download_maps"/>* - shows Contour line maps for the selected area or the nearest areas relative to the current map center to be downloaded.  


### Meters or Feet

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

</Tabs>  

Decide in which unit (meters or feet) you want to see the [**Contour lines**](../map/vector-maps.md#contour-lines) and download the corresponding version of the Contour lines map.  

**The unit variants are not interchangeable**, if you need to switch from meters to feet, or vice versa, the previous version of the Contour lines map must be removed in order to download the other version.


## Terrain

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_andr.png)  ![Terrain menu Android](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_1_ios.png)   ![Terrain menu iOS](@site/static/img/plugins/contour-lines/topography_plugin_terrain_menu_2_ios.png) 

</TabItem>

</Tabs>  

- Color scheme:  
    - *Hillshade* uses dark shades to show slopes, peaks, and lowlands.  
    - *Slope* uses color to visualize the steepness of the terrain. You can read more about it here. 
- Visibility
- Zoom levels 
- Cache size

:::info LEGEND

Each color corresponds to an angle of deviation from the horizontal. 

![Slope color legend](@site/static/img/plugins/contour-lines/Slope_legend.png)

:::

:::caution

- For the **Terrain** feature, only 1 option **Hillshade** or **Slope** can be enabled at a time.
- If after loading and enabling the corresponding map you do not see the changes, restart the application.

:::

### Hillshade / Slope

**Hillshade** is based on simulating surface lighting using terrain data. This method involves creating shadows and highlights based on the angle of the surface relative to the light source. As a result, you see natural hills, valleys, and other terrain details on the map.  

**Slope** determines the surface slope angle based on the elevation data of points on the map. Slope angle calculations are performed considering changes in elevation and distances between points, and representing this change as a slope angle.  

**Hillshade** and **Slope** raster maps are created based on raster terrain data such as Digital Elevation Models (DEM). 

**Usage:**  
- *Navigation.* Makes identifying steep slopes, downhill, or uphill easier, which can be important for safe navigation.
- *Plan routes.* Helps to choose the most suitable routes, considering the terrain.
- *Terrain estimation.* It's convenient for visualizing the landscape, especially if you're walking or biking.


## 3D Relief

The 3D Relief feature produces a raised relief and provides a three-dimensional representation of the landscape. 3D Relief works offline and can be used with [OsmAnd vector maps](../map/vector-maps.md) or any  [raster maps](../map/raster-maps.md#select-raster-maps) as a [Map Source](../map/raster-maps.md#main) or as an [Underlay/Overlay](../map/raster-maps.md#overlay-layer). 3D Relief is an [OsmAnd Pro](../purchases/android.md#pro-features) paid feature <ProFeature />.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable 3D Relief, go to [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*, and toggle on.

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android.png) 

Then download the [Terrain map (3D)](../plugins/contour-lines.md#how-to-download) of the regions as needed. The feature will produce map visualizations like these:

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

To enable 3D Relief, go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate ios="true" ids="srtm_plugin_name"/> → <Translate ios="true" ids="shared_string_terrain,shared_string_relief_3d"/>*, and toggle on.

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios.png) 

Then download the [Terrain map (3D)](../plugins/contour-lines.md#how-to-download) of the regions as needed. The feature will produce map visualizations like these:

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_1.png) ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_ios_2.png)

</TabItem>
 
</Tabs>

### Hillshade and 3D Relief

| Hillshade | 3D Relief |
|--------|---------|
| ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_1.png) | ![Terrain layers](@site/static/img/plugins/online-maps/hillshade_3d_relief_2.png) |

**Hillshade** is a type of map that displays terrain using shadows, creating a visual representation of the slope and shape of the earth's surface.  
**3D Relief** is a feature that adds three-dimensional effects to the map.  

If you **disable** *Hillshade* and **enable** *3D Relief*, relief shadows will still be visible because *Hillshade* and *3D Relief* are two different ways of visualizing a map. *Hillshade* creates shadows based on the terrain and adds them to the map, while *3D Relief* models 3D elements to show the depth and shape of the terrain, and the shadows are part of the visualization. These features can work in parallel, and disabling *Hillshade* does not affect how 3D effects are displayed.  

When **Hillshade** is **enabled**, an image with relief shadows appears more detailed, darker, and more stepped than a *3D Relief* image. The explanation is that *Hillshade* emphasizes the gradients and contrasts of the terrain, creating a sharper and more detailed image. Whereas *3D Relief* gives the map a more plastic and smooth look, which can soften the terrain and remove some detail.  


## Combine layer types

If necessary, you can combine contour lines and Hillshade or Slope layers. For example, to estimate the curvature of a mountain slope, a combination of Contour lines and Hillshade is an obvious choice. To estimate slope steepness or to find points with the same height, you can display Contour lines and Slope layers.  

It is best to use a combination of [3D Relief](#3d-relief) and [Hillshade](#hillshade). This allows you to get a more realistic and clear view of the terrain, its relief and landscape features on the map, which makes navigation and orienteering more convenient and reliable. For example, the combination of 3D Relief and Hillshade is best used in mountainous terrain, hilly areas, hiking and biking trails.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>
