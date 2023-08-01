---
sidebar_position: 4
title: Topography: Contour lines and Terrain (Hillshade, Slope, 3D Relief)
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



Topography information, such as **Contour lines**, **Hillshade** and **Slope**, helps you visually assess the shape of the land surface, considering curvature, extremes, steepness, points of equal height, and more. Topographic information on a map can be represented by contour lines for the uphill and downhill, relief shading, and the color-coded slope angle.

## Overview

Each provided by this plugin map is an independent layer that appears above or below the main map source when enabled, depending on the settings.

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

1. Purchase: [OsmAnd+, OsmAnd Maps+, OsmAnd Pro purchases plans](../plugins/index.md#purchase) and [Enable](../plugins/index.md#enable--disable) the Contour lines plugin in the Plugins section of the Main menu.
2. [Download](#download-maps) Contour lines, Hillshade, Slope, or Terrain map (3D) maps.
3. [Enable and adjust](#configure-map-view) Contour lines and/or Hillshade or Slope for the map view.

You can also watch [Youtube Tutorial](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg).  

To display **3D Relief** (Android only):

1. Purchase: [OsmAnd Pro purchases plan](../purchases/android.md#free-and-paid-features) and [Enable](../plugins/index.md#enable--disable) the Topography plugin in the Plugins section of the Main menu: [OsmAnd+, OsmAnd Maps+, OsmAnd Pro purchases plans](../plugins/index.md#purchase).
2. [Download](#download-maps) Terrain maps.
3. [Enable and adjust](#configure-map-view) 3D Relief for the map view.

## Download Maps

### How to download  

To download **Contour lines**, **Hillshade**, **Slope**, **Terrain map (3D)**(Android only) for a specific area, do the following:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

  
- Go to: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>*     
- Choose a country.
- Download packages from sections:  
    - The *<Translate android="true" ids="region_maps"/>* section provides available packages with maps for the entire country. If needed, download ones.  
    - The *<Translate android="true" ids="regions"/>* section lists the regions of the country. If to tap a region, there will be map packages available to download for the region.  

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
The download size of the contour lines maps of mountainous regions can be very large. That is why in our app maps of some countries and regions are divided into smaller parts.  
On older devices maps bigger than 2 GB might not be properly supported, so download the smallest area you need. 
:::


### Meters or Feet

It is important to decide in what units of length measurement (meters or feet) it is convenient for you to see [**Contour lines**](../map/vector-maps.md#contour-lines) to download the appropriate version of the Contour lines map. 


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">   

![Contour lines download dialog Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Contour lines download dialog iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

</Tabs>  

:::caution
Units of length measurement are not interchangeable, and if feet need to be switched into meters, or vice versa, the previous version of the Contour lines map must be removed in order to download another version.
:::


## Configure map view

After you have downloaded the required maps, you can display **Contour lines** / **Terrain** via the [Configure map](../map/configure-map-menu.md) section of the Main menu.

 
### Contour lines map

Contour lines allow you to explore in which direction and how much the surface is sloped. You can customize displaying of [contour lines](../map/vector-maps.md#contour-lines): colour, line widths, density and minimum zoom level at which contour lines are visible.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable contour lines layer go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), scroll to *<Translate android="true" ids="index_srtm_ele"/> → <Translate android="true" ids="download_srtm_maps"/>*, and toggle on the **Contour lines** option.   

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png)

#### APPEARANCE SETTINGS

- *<Translate android="true" ids="shared_string_on"/>*/*<Translate android="true" ids="shared_string_off"/>* - show or hide Contour lines on the map.
- *<Translate android="true" ids="show_from_zoom_level"/>* - minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map.
- *<Translate android="true" ids="srtm_color_scheme"/>* - choice of colour options in which Contour lines will be displayed on the map. 
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>* - choice of width options for displaying Contour lines on the map. 
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>* - choice of density options for displaying Contour lines on the map: Low, Medium, High (the map loads slower if the density is High).
- *<Translate android="true" ids="welmode_download_maps"/>* - shows previously unloaded contour line maps either for the selected area on the map or for the nearest areas relative to the current center of the map displayed on the screen.

</TabItem>

<TabItem value="ios" label="iOS">


To enable Contour lines layer go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_widget_renderer"/>* section and scroll to **<Translate ios="true" ids="srtm_plugin_name"/>** and toggle on.   

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/cont_lin_menu_ios_2.png) 

#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_contour_lines"/>* - toggle on/off Contour lines on the map.
- *Display starting at zoom level* - minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map.
- *<Translate ios="true" ids="srtm_color_scheme"/>* - choice of colour options in which Contour lines will be displayed on the map.
- *<Translate ios="true" ids="rendering_attr_depthContourWidth_name"/>* - choice of width options for displaying Contour lines on the map.
- *<Translate ios="true" ids="map_settings_line_density"/>* - choice of density options for displaying Contour lines on the map: Low, Medium, High (the map loads slower if the density is High).
- *<Translate ios="true" ids="available_maps"/>* - shows previously unloaded contour line maps either for the selected area on the map or for the nearest areas relative to the current center of the map displayed on the screen.



</TabItem>

</Tabs>  


### Hillshade map

Hillshade allows you to explore topography by illuminating it with hypothetical lighting that simulates shadow casting, thus revealing curvature that would normally be hidden or obscured by, for example, large amounts of vegetation. You can [configure hillshade visibility](../map/raster-maps.md#hillshade--slope): the transparency of the shadow, and the zoom level at which the Hillshade map will be visible.  


<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">

To enable Hillshade layer go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate android="true" ids="shared_string_show"/>* section, find *<Translate android="true" ids="shared_string_terrain"/>*, toggle on the **Terrain** option. Tap it, to open the context menu and select one of the options: either **Hillshade**, or **Slope**.  

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/hillshade_and.png)


#### APPEARANCE SETTINGS

- *<Translate android="true" ids="shared_string_terrain"/>* - switch to display or hide terrain elevation data to/from the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - percentage scale to determine the degree of transparency the shadow used to display hills.
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - 2 slider options to move to the left, or right, to determine:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate android="true" ids="welmode_download_maps"/>* - shows previously unloaded Hillshade maps either for the selected area on the map or for geographical location relative to the current center of the map displayed on the screen.  

</TabItem>

<TabItem value="ios" label="iOS">


To enable Hillshade layer go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_settings_overunder"/>* section, find *<Translate ios="true" ids="map_settings_overunder"/>* and toggle on the **Terrain** option. Tap it, to open the context menu and select one of the options: either **Hillshade**, or **Slope**.  


![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/hillshade_ios.png) 


#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off Terrain on the map.
- *<Translate ios="true" ids="shared_string_hillshade"/>* / *<Translate ios="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - percentage scale to determine the degree of transparency the shadow used to display hills.
- *<Translate ios="true" ids="shared_string_zoom_levels"/>* - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate ios="true" ids="available_maps"/>* - shows previously unloaded Hillshade maps either for the selected area on the map or for geographical location relative to the current center of the map displayed on the screen.  


</TabItem>

</Tabs>  

:::caution

- Only 1 option, **Hillshade** or **Slope**, for the **Terrain** can be enabled at a time.
- If after loading and enabling the corresponding map you do not see the changes, restart the application.

:::

### Slope map

The slope map allows you to explore the steepness, or incline of a slope expressed in degrees of deviation from the plane.  You can [configure slope visibility](../map/raster-maps.md#hillshade--slope): the transparency of the colours used to display the angle, and the zoom level at which the Slope map should be visible.  


<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">  

To enable slope layer go to [*<Translate android="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate android="true" ids="shared_string_show"/>* section, find *<Translate android="true" ids="shared_string_terrain"/>*, toggle on the **Terrain** option. Tap it, to open the context menu and select one of the options: either **Hillshade**, or **Slope**.  

![Terrain menu slopes Android](@site/static/img/plugins/contour-lines/slope_and.png)

#### APPEARANCE SETTINGS

- *<Translate android="true" ids="shared_string_terrain"/>* - toggle on/off Terrain on the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - choice to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - percentage scale to determine the degree of transparency the colours used to display slope.   
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - minimum and maximum parameters to be tapped, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which the colours of the Slopes will be visible on the map.
    - the maximum zoom level at which it should disappear.
- *<Translate android="true" ids="shared_string_legend"/>* - the legend of colours to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope)).
- *<Translate android="true" ids="welmode_download_maps"/>* - shows previously unloaded Slope maps either for the selected area on the map or for geographical location relative to the current center of the map displayed on the screen.  


</TabItem>

<TabItem value="ios" label="iOS">

To enable slope layer go to [*<Translate ios="true" ids="shared_string_menu,configure_map"/>*](../map/configure-map-menu.md), find the *<Translate ios="true" ids="map_settings_overunder"/>* section, find *<Translate ios="true" ids="map_settings_overunder"/>* and toggle on the **Terrain** option. Tap it, to open the context menu and select one of the options: either **Hillshade**, or **Slope**.      

![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/slope_ios.png) 
    
#### APPEARANCE SETTINGS

- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off Terrain on the map.  
- *<Translate ios="true" ids="shared_string_hillshade"/>* / *<Translate ios="true" ids="shared_string_slope"/>* - choice to display one of the terrain data types: either Hillshade, or Slope.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - percentage scale to determine the degree of transparency the colours used to display slope. 
- *<Translate ios="true" ids="shared_string_zoom_levels"/>* - minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope angle colours are expected to be viewable on the map. 
    - the maximum zoom level at which the colours are expected to disappear.
- *<Translate ios="true" ids="shared_string_legend"/>* - the legend of colours to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope)).
- *<Translate ios="true" ids="available_maps"/>* - shows previously unloaded Slope maps either for the selected area on the map or for geographical location relative to the current center of the map displayed on the screen.  


</TabItem>

</Tabs>


:::info LEGEND

Each colour corresponds to an angle of deviation from the plane. 

![Slope colour legend](@site/static/img/plugins/contour-lines/Slope_legend.png)

:::


### 3D Relief

3D raised relief maps are a beautiful three-dimensional representation of the world on your device screen. It works offline and you can image relief 3D on [OsmAnd vector maps](../map/vector-maps.md), any [raster maps](../map/raster-maps.md#select-raster-maps) as [Map Source](../map/raster-maps.md#main) or [Underlay/Overlay](../map/raster-maps.md#overlay-layer). It's [OsmAnd Pro](../purchases/android.md#pro-features) paid feature <ProFeature />.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable _3D Relief_ go to [*<Translate Android="true" ids="shared_string_menu,configure_map,shared_string_terrain"/>*](../map/configure-map-menu.md), find the *"3D Relief"* button. Tap it and make enabled it.  

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android.png) 

Next, to download [Terrain map](../plugins/contour-lines.md#how-to-download) of needed regions. After that you can see the next map visualisation:

![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_1.png) ![3D Relief](@site/static/img/plugins/contour-lines/3drelief_button_android_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

### Combine layer types

You can combine *Contour lines*, *Hillshade*, *Slope* layers if necessary. For example, to estimate curvature of a mountain range, the obvious choice would be a combination of Contour lines and Hillshade. To estimate the steepness of a slope or to find points of equal height, you can display Contour lines and Slope layers together.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>
