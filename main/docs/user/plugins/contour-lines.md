---
sidebar_position: 1
title:  Contour lines and Terrain
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

Terrain information such as Contour lines, Hillshades, and Slopes - helps you visually assess the shape of the land surface, considering curvature, extremes, steepness, points of equal height, and more.  

## Overview

The Contour Lines plugin is a separate function that can be enabled/disabled as needed. The plugin provides for [downloading](../personal/maps.md#download-maps-maps) the following maps:  


- the **Contour lines** map in [vector](../map/vector-maps.md) points, and
- two Terrain maps in [raster](../map/raster-maps.md) pixels:  
    - **Hillshade** map.  
    - **Slopes** map. 

![Contour lines and Terrain](@site/static/img/plugins/contour-lines/contour_lines_terrain.png)

Each map in the Contour Lines plugin is an independent option that appears above or below the map source when enabled, depending on the settings.

Topographic information on a map can be represented by slope shading, contour lines for the uphill and downhill, and the colour of the slope angle deviation from flat. Use contour lines, shading, and colours to show slopes, peaks, rugged terrain, and other altitudes on a map. 

The altitude data on the map - between 70 degrees north latitude and 70 degrees south latitude - are from measurements made by the Shuttle Radar Topography Mission (abbreviated *SRTM*). It used the Advanced Spaceborne Thermal Emission and Reflection Radiometer (abbreviated *ASTER*), which is a sensor onboard the Terra satellite and the primary imaging tool in NASA's Earth Observation System. ASTER is a joint effort between NASA, the Japanese Ministry of Economy, Trade, and Industry (abbreviated *METI*), and Japan Space Systems (also known as *J-spacesystems*).


## Setup 

To display Contour line and Terrain data on the map, you must make the following settings:

1. Purchase any of the maps of the Coutour lines.
2. Enable the Coutour lines plugin in the Plugins section of the main menu.
3. Download Contour lines and/or Terrain maps for the required regions.
4. Include Contour lines and/or relief maps for each profile.
5. Adjust the map view if necessary.  



### Purchase and enable plugin

To enable the plugin and start downloading contour lines, and/or Hillshade, and/or Slopes for each region, you must purchase the Contour Lines package.  

Contour lines plug-in cards are distributed through In-App Purchases, subscriptions, and Android app purchases. For more information about available purchase options, visit [Purchases](../purchases/index.md).  

After purchasing Contour lines, the plugin can be enabled as shown in the pictures below.  


<Tabs groupId="operating-systems">  


<TabItem value="android" label="Android">

For purchases on **Android**, refer to [in-app purchases, a subscription, or the full version of the app](../purchases/android.md#free-and-paid-features).  
To view the already made purchases, go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>* 

In the **Android** version, to enable the plugin, tap Enable for **Contour lines** in:  <Translate android="true" ids="shared_string_menu,plugin_settings,srtm_plugin_name"/>

![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

For purchases on **iOS**, refer to [in-app purchases, or a subscription](../purchases/ios.md#in-app-purchases). To view the already made purchases, go to: *<Translate ios="true" ids="menu,sett_settings,purchases"/>*

In the **iOS** version, to enable the plugin, check **Contour lines** in: <Translate ios="true" ids="menu,plugins,product_title_srtm"/>

![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_ios.png) 

</TabItem>

</Tabs>



### Download Contour lines/Terrain 

**General Information**  
Three types of elevation data packages can be loaded for each region: Contour Lines, Hillshade and Slope. Most often, they can all be downloaded at the country level. In addition, maps at a lower region level are available. 

#### Consider country/region levels 

By combining both levels and types of maps, you can achieve the optimal configuration of terrain data to meet your current needs. 

For example, you can combine the Contour Lines region map of the island of Sicily and the slope map of Italy as one at the country level. Another example is Canada maps, where all three map types are available at the region level. And to display Slope and Contour lines data for Alberta, all you need to do is load two maps at the region level, respectively.    

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Hillshade over Sicily in Android](@site/static/img/plugins/contour-lines/2_hillshade_only.png) ![Slope over Sicily in Androis](@site/static/img/plugins/contour-lines/3_slope_only.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Hillshade over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_hillshade1.png) ![Slope over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_slope1.png)

</TabItem>

</Tabs>


> **NOTE**: Contour line colours,  Hillshade, and Slope angle are available for viewing at a certain zoom level, which is set in the settings for a particular map type.


#### Combine map types

When loading different types of maps: Contour lines, Hillshade and/or Slope, consider combining them further.

For example, to estimate curvature, especially for a mountain range, the obvious choice to load would be a combination of Contour lines and Hillshade. And to estimate the steepness of a slope, points of equal height, you can display Slope and Contour lines maps together.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>  

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

</Tabs>


>**NOTE**: There is a colour legend that shows how each color corresponds to an angle of deviation from the plane. The legend is available in the Slope map settings.    
![Slope color legend](@site/static/img/plugins/contour-lines/Slope_legend.png)



#### Choose Meters or Feet

The contour interval can be displayed in feet, or meters. It is important to decide what units it is convenient for you to see Contour lines in, so that to download the respective version of the Contour lines map. The units are not interchangeable, and in case if feet are needed to be switched into meters, or vice versa, the previous version of the Contour lines map has to be removed, so that anew to download the other version. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

The contour interval can be displayed in feet or meters. It is important to decide which units you are comfortable seeing [**Contour lines**](../map/vector-maps.md#contour-lines) to load the appropriate version of the Contour line map. Units are not interchangeable, and if feet need to be converted to meters or vice versa, the previous version of the contour line map must be deleted to reload another version.  

![Contour lines download dialogue Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

The contour interval can be displayed in feet or meters. It is important to decide which units you are comfortable seeing [**Contour lines**](../map/vector-maps.md#contour-lines) to load the appropriate version of the Contour line map. Units are not interchangeable, and if feet need to be converted to meters or vice versa, the previous version of the contour line map must be deleted to reload another version.

![Contour lines download dialogue iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

</Tabs>


#### How to download  

To download Contour lines, Hillshade, and/or Slope for a specific area, do the following:

1. Go to  [Download maps menu](../start-with/download-maps.md#download---main-menu).
2. Find your country or region.
3. Choose any of the packages: 
    - Contour lines, 
    - Hillshade, and/or 
    - Slope.
4. For Contour lines, select Meters, or Feet.
5. Download the files.  


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:  
1. Go to: <Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>     
2. Choose a country and pay attention to any of the following sections:  
    2.1. The *<Translate android="true" ids="region_maps"/>* section provides available packages with maps for the entire country. If needed, download ones.  
    2.2. The *<Translate android="true" ids="regions"/>* section lists the regions of the country. If to tap a region, there will be map packages available to download for the region.  

![Contour lines download Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_android.png)

</TabItem>  

<TabItem value="ios" label="iOS">

In the **iOS** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:
1. Go to: <Translate ios="true" ids="menu,res_mapsres,res_worldwide"/>  
2. Choose a country and pay attention to any of the following sections:  
    2.1. The *<Translate ios="true" ids="res_region_map"/>*  section provides available map packages for the entire country. Download them if necessary.  
    2.2. The *<Translate ios="true" ids="res_mapsres"/>* section lists the regions of the country. If you tap on a region, the map packs available for download for that region will appear.  

![Contour lines download iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_ios.png)

</TabItem>

</Tabs>




### Show Contour lines/Terrain 

Usually, as many packages of Contour lines, Hillshade and/or Slopes as needed for specific areas are loaded. After all the downloads are completed, you can determine which [map types](../personal/maps.md#map-types) should be shown for a particular profile. There are two options for each profile - Contour lines and/or Terrain to enable per [profile](../personal/profiles.md):  

- only Contour lines
- only Terrain
- both Contour lines and Terrain together. 

For the **Terrain** option, only one map can be enabled at a time: either **Hillshade** or **Slope**. You can determine which of the two maps is currently enabled by opening the Terrain settings, where the switched option will be the one that is currently enabled.  


<Tabs groupId="operating-systems">




<TabItem value="android" label="Android">

#### CONTOUR LINES 

In the **Android** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:
1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>.  
2. Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>* section of settings in the menu.  
3. Within the section, scroll down up to *<Translate android="true" ids="index_srtm_ele"/>*, and toggle on the **Contour lines** option.   

![Terrain and Contour lines enable Android](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_android.png)


#### TERRAIN

In the **Android** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:
1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>.  
2. Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>* section in the menu.  
3. Within the section, scroll down up to *<Translate android="true" ids="shared_string_terrain"/>*, toggle on the **Terrain** option, and tap it, to open the context menu, see the figure below.  
4. Select one of the options: either **Hillshade**, or **Slope**.  

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_android_selected.png) 


</TabItem>

<TabItem value="ios" label="iOS">

#### CONTOUR LINES

In the **iOS** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:  
1. Go to: <Translate ios="true" ids="menu,configure_map"/>.  
2. Scroll down up to *<Translate ios="true" ids="map_settings_style"/>*, and toggle on the **Contour lines** option.   

![Terrain and Contour lines enable iOS](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_ios.png)

#### TERRAIN

In the **iOS** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:
1. Go to: <Translate ios="true" ids="menu,configure_map"/>.  
2. Scroll down up to *<Translate ios="true" ids="map_settings_overunder"/>*, toggle on the **Terrain** option, and tap it, to open the context menu, see the figure below.  
3. Select one of the options: either **Hillshade**, or **Slope**.   

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_ios_selected.png) 


</TabItem>

</Tabs>


>**NOTE**: If after loading the corresponding map you do not see that Hillshade or Slope are enabled, restart the application.



## Configure map view

Each of the maps: Hillshade, Slope, Contour lines can be configured to look visually different depending on personal preferences, and/or the context of a particular region, and/or other conditions. Use the context menu of the corresponding map option in the Configure Map menu to make the necessary changes in appearance.  


### Hillshade map

Hillshade allows you to explore topography by illuminating it with hypothetical lighting that simulates shadow casting, thus revealing curvature that would normally be hidden or obscured by, for example, large amounts of vegetation. Some aspects of the Hillshade map are available for [configuration](../map/configure-map-menu.md): the transparency of the shadow, and the zoom level at which the Hillshade map will be visible.  

The **Hillshade** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_terrain"/>* - switch to display or hide terrain elevation data to/from the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - select to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - a percentage scale for determining the preferred level of transparency for the displayed shadow.   
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - two slider options to move to the left, or right, to determine:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate android="true" ids="welmode_download_maps"/>* - suggests downloading the Hillshade package if it has not already been downloaded for the current geographic location shown on the screen.  


![Terrain menu Android](@site/static/img/plugins/contour-lines/terrain_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_enabled"/>* - switch to display or hide terrain elevation data to/from the map.
- *<Translate ios="true" ids="map_settings_hillshade"/>* / *<Translate ios="true" ids="gpx_slope"/>* - select to display one of the relief data types: either Hillshade or Slope.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - a percentage scale for determining the preferred level of transparency for the displayed shadow.    
- *<Translate ios="true" ids="res_zoom_levels"/>* - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - suggests downloading the Hillshade package if it has not already been downloaded for the current geographic location shown on the screen.  

![Terrain menu iOS](@site/static/img/plugins/contour-lines/terrain_menu_ios.png) 

</TabItem>

</Tabs>



### Slope map

The slope allows you to explore the steepness, or incline of a slope expressed as an angle in the number of degrees of deviation from the plane, which corresponds to the vertical distance divided by the horizontal distance. There are some aspects of the Slope map available for [configuration](../map/configure-map-menu.md): the transparency of the colours used to display the angle, and the zoom level at which the Slope map should be visible.  


The **Slope** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">



<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_terrain"/>* -  switch to display or hide terrain elevation data to/from the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - select to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - a percentage scale for determining the preferred level of transparency for the displayed shadow.   
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - minimum and maximum parameters to be tapped to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which the colours of the Slopes will be visible on the map.
    - the maximum zoom level at which it should disappear.
- *<Translate android="true" ids="shared_string_legend"/>* - the legend of colours to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope))
- *<Translate android="true" ids="welmode_download_maps"/>* - an offer to download a Slope package if none is still downloaded for the current geographical location displayed on the screen.

![Terrain menu slopes Android](@site/static/img/plugins/contour-lines/terrain_menu_slopes_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_enabled"/>* - switch to display or hide terrain elevation data to/from the map.  
- *<Translate ios="true" ids="map_settings_hillshade"/>* / *<Translate ios="true" ids="gpx_slope"/>* - a choice to display one of the terrain data types: either Hillshade, or Slope;
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - the percentage bar to determine the preferable level of the transparency for the colors used to show the angle; 
- *<Translate ios="true" ids="res_zoom_levels"/>* - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope angle colors are expected to be viewable on the map; and 
    - the maximum zoom level at which the colors are expected to disappear;
- *<Translate ios="true" ids="map_settings_legend"/>* - the legend of colors to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope))
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - an offer to download a Slope package if none is still downloaded for the current geographical location displayed on the screen. 

![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/terrain_menu_slopes_ios.png) 

</TabItem>

</Tabs>




### Contour lines map

Contour lines allow you to explore in which direction and how much the surface is sloped by analyzing Contour lines that are close for steep areas and more curved as you climb up. Several aspects of the contour line map are available for [configuration](../map/configure-map-menu.md): the minimum zoom level at which contour lines become visible, the color scheme, line width, and line density.  



The **Contour lines** settings are available in the context menu of the **Contour lines** option in the [Configure map](../map/vector-maps.md#contour-lines) of a specific [profile](../personal/profiles.md). 


<Tabs groupId="operating-systems">



<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_on"/>* -  a toggle to show, or hide the Contour lines on/from the map;
- *<Translate android="true" ids="show_from_zoom_level"/>* - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map;
- *<Translate android="true" ids="srtm_color_scheme"/>* - a choice of color options in which to view the Contour lines on the map; 
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>* - a choice of the width options to establish for the Contour lines; 
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>* - a choice of the density options to establish for the Contour lines. The higher the density, the slower the map might be rendered;
- *<Translate android="true" ids="welmode_download_maps"/>* - an offer to download a Contour lines package if none is still downloaded for the current geographical location displayed on the screen.

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_enabled"/>* - a toggle to show, or hide the Contour lines on/from the map;
- *<Translate ios="true" ids="display_starting_at_zoom_level"/>* - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map;
- *<Translate ios="true" ids="map_settings_color_scheme"/>* - a choice of color options in which to view the Contour lines on the map;
- *<Translate ios="true" ids="map_settings_line_width"/>* - the width of the Contour lines displayed on the map;
- *<Translate ios="true" ids="map_settings_line_density"/>* - the density of the Contour lines displayed on the map. The higher the density, the slower the map might be rendered;
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - an offer to download a Contour lines package if none is still downloaded for the current geographical location displayed on the screen.

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/contour_lines_menu_ios.png) 

</TabItem>

</Tabs>


Please see full video guide below:
[Link to Youtube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg)