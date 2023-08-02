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



Topography information like **Contour lines**, **Terrain** (**Hillshade** and **Slope**) and **3D Relief** helps to make a visual assessment of the lay of the land by seeing elevation, relief, extremes, steepness, points of equal height, etc.  

## Overview

Each feature provided by this plugin is an independent map layer which when enabled appears above or below the main map source, depending on the settings.

:::tip NOTE
The Topography plugin is a paid feature of the OsmAnd app.  
:::

The Topography plugin provides access to the following map types:  

- **Contour lines**  - [vector](../map/vector-maps.md) map represented in **feet** or **meters** (Android and iOS).
- **Hillshade** - [raster](../map/raster-maps.md) map layer (Android and iOS).
- **Slope** - [raster](../map/raster-maps.md) map layer (Android and iOS).
- **Terrain map (3D)** - special relief [vector](../map/vector-maps.md) map (Android only).

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
For full information see [License](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L146):

<details><summary>DEM (DSM) data</summary> 
    - <a href="https://www.eorc.jaxa.jp/ALOS/en/index_e.htm">ALOS DEM</a>: The original data used for this product have been supplied by JAXA’s AW3D.<br/>
	- <a href="http://hydro.iis.u-tokyo.ac.jp/~yamadai/MERIT_DEM">MERIT DEM</a><br/>
	- <a href="https://doi.org/10.7910/DVN/OHHUKH">ArcticDEM</a>: Porter, Claire; Morin, Paul; Howat, Ian; Noh, Myoung-Jon; Bates, Brian; Peterman, Kenneth; Keesey, Scott; Schlenk, Matthew; Gardiner, Judith; Tomko, Karen; Willis, Michael; Kelleher, Cole; Cloutier, Michael; Husby, Eric; Foga, Steven; Nakamura, Hitomi; Platson, Melisa; Wethington, Michael, Jr.; Williamson, Cathleen; Bauer, Gregory; Enos, Jeremy; Arnold, Galen; Kramer, William; Becker, Peter; Doshi, Abhijit; D’Souza, Cristelle; Cummens, Pat; Laurier, Fabien; Bojesen, Mikkel, 2018, “ArcticDEM”, Harvard Dataverse, V1<br/>
	- <a href="https://sonny.4lima.de">SONNY's LiDAR DIGITAL TERRAIN MODELS</a> (DTM) OF EUROPEAN COUNTRIES</details>

:::

## Setup 

To display **Contour lines** and **Terrain (Hillshade, Slope)** data on the map:

1. Purchase: [OsmAnd+, OsmAnd Maps+, OsmAnd Pro purchases plans](../plugins/index.md#purchase) and [Enable](../plugins/index.md#enable--disable) the Topography plugin in the Plugins section of the Main menu.
2. [Download](#download-maps) Contour lines, Hillshade, Slope, or Terrain map (3D) maps.
3. [Enable and adjust](#configure-map-view) Contour lines and/or Hillshade or Slope for the map view.

You can also watch [Youtube Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

To display **3D Relief** (Android only):

1. Purchase: [OsmAnd Pro purchases plan](../purchases/android.md#free-and-paid-features) and [Enable](../plugins/index.md#enable--disable) the Topography plugin in the Plugins section of the Main menu: [OsmAnd+, OsmAnd Maps+, OsmAnd Pro purchases plans](../plugins/index.md#purchase).
2. [Download](#download-maps) Terrain map (3D) maps.
3. [Enable and adjust](#configure-map-view) 3D Relief for the map view.

## Download Maps

### How to download  
Download **Contour lines**, **Hillshade**, **Slope**, **Terrain map (3D)** (Android only) for a specific area as follows:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

  
- Go to: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>*     
- Choose a country.
- Download packages from sections:  
    - The *<Translate android="true" ids="region_maps"/>* section provides available maps for the entire country.
    - The *<Translate android="true" ids="regions"/>* section lists the regions of a country. Tapping a region will show maps available for that region.  

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_1.png)  ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

- Go to: *<Translate ios="true" ids="shared_string_menu,res_mapsres,res_worldwide"/>*  
- Choose a country.
- Download packages from sections:  
    - The *<Translate ios="true" ids="res_region_map"/>*  section provides available map packages for the entire country. Download them if necessary.  
    - The *<Translate ios="true" ids="res_mapsres"/>* section lists the regions of the country. If you tap on a region, the map packs available for download for that region will appear.  

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png) ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>

:::caution NOTE
The download size of the **Contour lines** maps of mountainous regions can be rather large, and on older devices maps bigger than 2 GB might not be properly supported. We provide regional portions, so download the smallest area you need. 
:::

:::tip NOTE
For the **Hillshade** or **Slope** functionality,
- if you are using Map rendering engine v1, you need to use the conventional Hillshade or Slope raster downloads,
- if you are using Map rendering engine v2,
   - you can continue to use the old Hillshade or Slope raster downloads, but need activate the Development and enable its setting "_Use raster sqlite for Hillshade / slope_.
   - Alternatively, you can use the new "Terrain map (3D)" downloads (saving a bit of storage space), and the Hillshade/Slope/3D Relief effects can be produced from that on the device.
:::

### Meters or Feet

Decide in which unit (meters or feet) you want to see the [**Contour lines**](../map/vector-maps.md#contour-lines) and download the corresponding version of the Contour lines map. 


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

</Tabs>  

:::caution
The unit variants are not interchangeable, if you need to switch from meters to feet, or vice versa, the previous version of the Contour lines map must be removed in order to download the other version.
:::


## Configure map view

After you have downloaded the required maps, you can display **Contour lines** and/or **Terrain** (Hillshade/Slope) via the [Configure map](../map/configure-map-menu.md) section of the Main menu.

 
### Contour lines

Contour lines allow you to explore in which direction and how much a surface is sloped. You can customize displaying the [contour lines](../map/vector-maps.md#contour-lines) in terms of color, line widths, density and zoom levels at which contour lines are visible.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable the Contour lines layer, go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="download_srtm_maps"/>*, and toggle on.   

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png)

#### APPEARANCE SETTINGS

- *<Translate android="true" ids="download_srtm_maps"/>* - toggle on/off to show or hide Contour lines on the map.
- *<Translate android="true" ids="show_from_zoom_level"/>* - minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines are visible on the map.
- *<Translate android="true" ids="srtm_color_scheme"/>* - choice of color options in which Contour lines are shown on the map. 
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>* - choice of width options to display Contour lines on the map. 
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>* - choice of density options to display Contour lines on the map: Low, Medium, High. (The map loads slower for higher density).
- *<Translate android="true" ids="welmode_download_maps"/>* - shows Contour line maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.

</TabItem>

<TabItem value="ios" label="iOS">


To enable the Contour lines layer go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_widget_renderer"/>* section, scroll to **<Translate ios="true" ids="srtm_plugin_name"/>** and toggle on.   

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/cont_lin_menu_ios_2.png) 

#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_contour_lines"/>* - toggle on/off to show or hide Contour lines on the map.
- *Display starting at zoom level* - minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines are visible on the map.
- *<Translate ios="true" ids="srtm_color_scheme"/>* - choice of color options in which Contour lines are shown on the map. 
- *<Translate ios="true" ids="rendering_attr_depthContourWidth_name"/>* - choice of width options to display Contour lines on the map.
- *<Translate ios="true" ids="map_settings_line_density"/>* - choice of density options to display Contour lines on the map: Low, Medium, High. (The map loads slower for higher density).
- *<Translate ios="true" ids="available_maps"/>* - shows Contour line maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.



</TabItem>

</Tabs>  


### Hillshade

Hillshade allows you to explore the topography by illuminating it with hypothetical lighting which simulates shading, thus revealing relief. You can [configure hillshade visibility](../map/raster-maps.md#hillshade--slope) in terms of the transparency of the shading and the zoom level at which the Hillshade will be visible.  


<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">

To enable the Hillshade layer, go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="srtm_plugin_name"/>* → <Translate android="true" ids="shared_string_terrain"/>*. Tap it to open the context menu and select the option **Hillshade**.  

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/hillshade_and.png)


#### APPEARANCE SETTINGS

- *<Translate android="true" ids="shared_string_terrain"/>* - toggle on/off to display or hide terrain data on the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - percentage scale to specify the degree of transparency Hillshade uses (default is 39%).
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - slider options to specify the minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map.
- *<Translate android="true" ids="welmode_download_maps"/>* - shows Hillshade maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.

</TabItem>

<TabItem value="ios" label="iOS">


To enable the Hillshade layer go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_settings_overunder"/>* section, find *<Translate ios="true" ids="map_settings_overunder"/>* and toggle on the **Terrain** option. Tap it to open the context menu and select the option **Hillshade**.  


![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/hillshade_ios.png) 


#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off to display or hide terrain data on the map.
- *<Translate ios="true" ids="shared_string_hillshade"/>* / *<Translate ios="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - percentage scale to specify the degree of transparency the Hillshade uses.
- *<Translate ios="true" ids="shared_string_zoom_levels"/>* - specify the minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map.
- *<Translate ios="true" ids="available_maps"/>* - shows Hillshade maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.


</TabItem>

</Tabs>  

:::caution

- For the **Terrain** feature, only 1 option **Hillshade** or **Slope** can be enabled at a time.
- If after loading and enabling the corresponding map you do not see the changes, restart the application.

:::

### Slope

The Slope feature allows you to explore the steepness (incline) of slopes expressed in degrees of deviation from the horizontal. You can [configure the Slope visibility](../map/raster-maps.md#hillshade--slope) in terms of transparency of the colors used to display the angle and the zoom level at which the Slope layer should be visible.  


<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">  

To enable the Slope layer, go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="srtm_plugin_name"/>* → <Translate android="true" ids="shared_string_terrain"/>*. Tap it to open the context menu and select the option **Slope**.  

![Terrain menu slopes Android](@site/static/img/plugins/contour-lines/slope_and.png)

#### APPEARANCE SETTINGS

- *<Translate android="true" ids="shared_string_terrain"/>* - toggle on/off to display or hide terrain data on the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - percentage scale to specify the degree of transparency Slope uses (default is 31%).
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - slider options to specify the minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope will be visible on the map.
- *<Translate android="true" ids="shared_string_legend"/>* - the color scale used to depict the steepness angle. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope)).
- *<Translate android="true" ids="welmode_download_maps"/>* - shows Slope maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.


</TabItem>

<TabItem value="ios" label="iOS">

To enable the Slope layer, go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_settings_overunder"/>* section, find *<Translate ios="true" ids="map_settings_overunder"/>* and toggle on the **Terrain** option. Tap it to open the context menu and select the option **Slope**.      

![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/slope_ios.png) 
    
#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off to display or hide terrain data on the map. 
- *<Translate ios="true" ids="shared_string_hillshade"/>* / *<Translate ios="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - percentage scale to specify the degree of transparency Slope uses.
- *<Translate ios="true" ids="shared_string_zoom_levels"/>* - specify the minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope will be visible on the map.
- *<Translate ios="true" ids="shared_string_legend"/>* - the color scale used to depict the steepness angle. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope)).
- *<Translate ios="true" ids="available_maps"/>* - shows Slope maps for the selected area or the nearest areas relative to the current map center which would require to be downloaded.


</TabItem>

</Tabs>


:::info LEGEND

Each color corresponds to an angle of deviation from the horizontal. 

![Slope color legend](@site/static/img/plugins/contour-lines/Slope_legend.png)

:::


### 3D Relief

The 3D Relief feature produces a raised relief and provides an impressive three-dimensional representation of the landscape. It works offline, and you can use the 3D Relief with [OsmAnd vector maps](../map/vector-maps.md) or any  [raster maps](../map/raster-maps.md#select-raster-maps) as [Map Source](../map/raster-maps.md#main) or as [Underlay/Overlay](../map/raster-maps.md#overlay-layer). 3D Relief is an [OsmAnd Pro](../purchases/android.md#pro-features) paid feature <ProFeature />.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable 3D Relief, go to [*<Translate Android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="srtm_plugin_name"/> → <Translate android="true" ids="relief_3d"/>*, and toggle on.

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android.png) 

Then download the [Terrain map (3D)](../plugins/contour-lines.md#how-to-download) of the regions as needed. The feature will produce map visualizations like these:

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

### Combine layer types

You can combine the *Contour lines* and the *Hillshade* or *Slope* layers as needed. To e.g. estimate the curvature of a mountain slope, an obvious choice is a combination of Contour lines and Hillshade. To estimate the steepness of a slope or to find points of equal height, you can display Contour lines and Slope layers together.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>
