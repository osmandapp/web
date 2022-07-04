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

Topographic information on a map can be represented by shading of slopes, contour lines for uphill and downhill, and colour deviation of slope angle from flat. Use contour lines, shading, and colours to show slopes, peaks, rugged terrain, and other altitudes on the map. Each map in Contour Lines plugin is an independent option that appears above or below the map source when enabled, depending on the settings.  


## Setup 

To display Contour line and Terrain data on the map, you must make the following settings:

1. [Purchases](../purchases/index.md) any of the maps of the Coutour lines.
2. Enable the Coutour lines plugin in the Plugins section of the main menu.
3. Download Contour lines and/or Terrain maps for the required regions.
4. Include Contour lines and/or relief maps for each profile.
5. Adjust the map view if necessary.  


## Purchase and enable plugin

First, to enable the plugin and start downloading contour lines, and/or Hillshade, and/or Slopes for each region, you must purchase Contour Lines package [Purchases](../purchases/index.md).   

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">

For purchases on **Android**, you can select the subscriptions: "In-app purchases", "Subscription" or "Full version" of the app. [Free and Paid features](../purchases/android.md#free-and-paid-features). To view the already made purchases, go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>* 

**Enable** Coutour lines plugin:
- Tap **Contour lines** in the list of plugins in: *<Translate android="true" ids="shared_string_menu,plugin_settings,srtm_plugin_name"/>*  
- Tap the button.
- Confirm your choice in **Add new plugin** screen.

![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_android.png)  ![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/enable_pl_2.png)  ![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/enable_pl_3.png)


</TabItem>

<TabItem value="ios" label="iOS">

For purchases on **iOS**, you can select the subscriptions: "In-app purchases", "Subscription" of the app. [Free and Paid features](../purchases/ios.md#in-app-purchases). To view the already made purchases, go to: *<Translate ios="true" ids="menu,sett_settings,purchases"/>*

**Enable** Coutour lines plugin:
- Tap **Contour lines** in the list of plugins in: *<Translate ios="true" ids="menu,plugins,product_title_srtm"/>*
- Tap the "off" button, and it will change to "on".
- Confirm your choice in **New plugin added** screen.

![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/enable_pl_ios_1.png)  ![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/enable_pl_ios_2.png)  ![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/enable_pl_ios_3.png) 

</TabItem>

</Tabs>



## Download Contour lines/Terrain 

Three types of elevation data packages can be loaded for each region: Contour Lines, Hillshade and Slope. Most often, they can all be downloaded at the country level. In addition, maps at a lower region level are available.  

### Download maps

Contour Lines plugin is a separate function that can be enabled/disabled as needed. The plugin provides for [downloading](../personal/maps.md#download-maps-maps) the following maps:  

- the **Contour lines** map in [vector](../map/vector-maps.md) points
- 2 Terrain maps in [raster](../map/raster-maps.md) pixels:  
    - **Hillshade** map.  
    - **Slopes** map. 

![Contour lines and Terrain](@site/static/img/plugins/contour-lines/first_screen_1.png)  

### Download packages

To download Contour lines, Hillshade, and/or Slope for a specific area, do the following:

- Go to  [Download maps menu](../start-with/download-maps.md#download---main-menu).
- Find your country or region.
- Choose any of the packages: 
    - Contour lines. 
    - Hillshade.
    - Slope.
- For Contour lines, [Choose Meters or Feet](../plugins/contour-lines#choose-meters-or-feet).
- Download the files.  


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:  
- Go to: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/>*     
- Choose a country.
- Download packages from sections:  
    - The *<Translate android="true" ids="region_maps"/>* section provides available packages with maps for the entire country. If needed, download ones.  
    - The *<Translate android="true" ids="regions"/>* section lists the regions of the country. If to tap a region, there will be map packages available to download for the region.  

![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_1.png)  ![Contour lines download Android](@site/static/img/plugins/contour-lines/downl_pack_and_2.png)

</TabItem>  

<TabItem value="ios" label="iOS">

In the **iOS** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:
- Go to: *<Translate ios="true" ids="menu,res_mapsres,res_worldwide"/>*  
- Choose a country.
- Download packages from sections:  
    - The *<Translate ios="true" ids="res_region_map"/>*  section provides available map packages for the entire country. Download them if necessary.  
    - The *<Translate ios="true" ids="res_mapsres"/>* section lists the regions of the country. If you tap on a region, the map packs available for download for that region will appear.  

![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_1.png)  ![Contour lines download iOS](@site/static/img/plugins/contour-lines/downl_pack_ios_2.png)

</TabItem>

</Tabs>


## Appearance Settings


### Country/region levels 

By combining both levels and types of maps, you can achieve the optimal configuration of terrain data to fit your current needs. 

For example, you can combine Contour Lines region map of the island of Sicily and the Slope map of Italy as one at the country level. Another example is Canada maps, where all three map types are available at the region level. And to display Slope and Contour lines data for Alberta, all you need to do is load two maps at the region level.    

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Hillshade over Sicily in Android](@site/static/img/plugins/contour-lines/2_hillshade_only.png) ![Slope over Sicily in Androis](@site/static/img/plugins/contour-lines/3_slope_only.png)

</TabItem>  

<TabItem value="ios" label="iOS">

![Hillshade over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_hillshade1.png) ![Slope over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_slope1.png)

</TabItem>

</Tabs>


> **NOTE**: Contour line colours,  Hillshade, and Slope angle are available for viewing at a certain zoom level, which is set in the settings for a particular map type.


### Combine map types

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


>**NOTE**: There is a colour legend that shows how each color corresponds to an angle of deviation from the plane. The legend is available in the [Slope map settings](../plugins/contour-lines#slope-map).    
![Slope color legend](@site/static/img/plugins/contour-lines/Slope_legend.png)



### Choose Meters or Feet

The contour interval can be displayed in feet, or meters. It is important to decide what units it is convenient for you to see Contour lines in, so that to download the respective version of Contour lines map. The units are not interchangeable, and in case if feet are needed to be switched into meters, or vice versa, the previous version of Contour lines map has to be removed, so that anew to download the other version. 

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



## Configure map view

Each of the maps: Contour lines, Hillshade, Slope can be adjusted to a different appearance depending on: personal preferences, the context of a particular region, other conditions. To make the necessary changes to the appearance, use the context menu of the corresponding map option in Configure Map menu.

Usually, as many packages of Contour lines, Hillshade and/or Slopes as needed for specific areas are loaded. After all the downloads are completed, you can determine which [map types](../personal/maps.md#map-types) should be shown for a particular profile. There are two options for each profile - Contour lines and/or Terrain to enable per [profile](../personal/profiles.md):  

- only Contour lines
- only Terrain
- both Contour lines and Terrain together. 

>For the **Terrain** option, only one map can be enabled at a time: either **Hillshade** or **Slope**. You can determine which of the two maps is currently enabled by opening the Terrain settings, where the switched option will be the one that is currently enabled.  



## Contour lines

Contour lines allow you to determine in which direction and how much the surface slopes. They are close to steep areas and become more curved as you climb. Available [configuration](../map/configure-map-menu.md): the minimum zoom level at which contour lines become visible, color scheme, line width and density.  

The **Contour lines** settings are available in the context menu of the **Contour lines** option in the [Configure map](../map/vector-maps.md#contour-lines) of a specific [profile](../personal/profiles.md).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


In the **Android** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:
- Go to: *<Translate android="true" ids="shared_string_menu,configure_map"/>*.  
- Select a Profile, and find the *<Translate android="true" ids="shared_string_show"/>* section in the same menu.  
- In the section, scroll to *<Translate android="true" ids="index_srtm_ele"/>* and toggle on.

![Terrain and Contour lines enable Android](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_android.png)  


**Settings** for the appearance of Contour lines.  
- *<Translate android="true" ids="shared_string_on"/>*/*<Translate android="true" ids="shared_string_off"/>* - show or hide Contour lines on the map.
- *<Translate android="true" ids="show_from_zoom_level"/>* - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map;
- *<Translate android="true" ids="srtm_color_scheme"/>* - a choice of color options in which to view Contour lines on the map; 
- *<Translate android="true" ids="rendering_attr_contourWidth_name"/>* - a choice of the width options to establish for Contour lines; 
- *<Translate android="true" ids="rendering_attr_contourDensity_name"/>* - a choice of the density options to establish for Contour lines. The higher the density, the slower the map might be rendered;
- *<Translate android="true" ids="welmode_download_maps"/>* - shows previously unloaded Сontour line packages, either for the selected area on the map or for the current center of the map displayed on the screen.

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png)



</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:  
- Go to: *<Translate ios="true" ids="menu,configure_map"/>*. 
- Select a Profile, and find the *<Translate ios="true" ids="map_settings_style"/>* section in the same menu. 
- In the section, scroll to *<Translate ios="true" ids="product_title_srtm"/>* and toggle on.   

![Terrain and Contour lines enable iOS](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_ios.png)  

**Settings** for the appearance of Contour lines. 
- *<Translate ios="true" ids="toggle_contour_lines"/>* - toggle on/off Contour lines on the map.
- *<Translate ios="true" ids="display_starting_at_zoom_level"/>* - minimum and maximum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines will be visible on the map.
- *<Translate ios="true" ids="map_settings_color_scheme"/>* - select the color of Contour lines on the map.
- *<Translate ios="true" ids="map_settings_line_width"/>* - the width of Contour lines displayed on the map;
- *<Translate ios="true" ids="map_settings_line_density"/>* - the density of Contour lines displayed on the map: Low, Medium, High (the map loads slower if the density is High).
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - shows previously unloaded Сontour line packages, either for the selected area on the map or for the current center of the map displayed on the screen.

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/cont_lin_menu_ios_2.png) 

</TabItem>

</Tabs>

## Terrain

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

In the **Android** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:
- Go to: *<Translate android="true" ids="shared_string_menu,configure_map"/>*.  
- Select a Profile, and look for the *<Translate android="true" ids="shared_string_show"/>* section in the menu.  
- Within the section, scroll down up to *<Translate android="true" ids="shared_string_terrain"/>*, toggle on the **Terrain** option, and tap it, to open the context menu, see the figure below.  
- Select one of the options: either **Hillshade**, or **Slope**.  

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_android_selected.png) 

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:
- Go to: *<Translate ios="true" ids="menu,configure_map"/>*.  
- Select a Profile, and find the *<Translate ios="true" ids="map_settings_overunder"/>* section in the same menu.
- In the section, find **Terrain** and toggle on.   

![Terrain and Contour lines enable iOS](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_ios.png)
 

</TabItem>

</Tabs>


### Hillshade

Hillshade allows you to explore topography by illuminating it with hypothetical lighting that simulates shadow casting, thus revealing curvature that would normally be hidden or obscured by, for example, large amounts of vegetation. Available [configuration](../map/configure-map-menu.md): the transparency of the shadow and the zoom level at which the Hillshade map will be visible.  

The **Hillshade** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Settings** for the appearance of Hillshade.  
- *<Translate android="true" ids="shared_string_terrain"/>* - switch to display or hide terrain elevation data to/from the map.
- *<Translate android="true" ids="shared_string_hillshade"/>* / *<Translate android="true" ids="shared_string_slope"/>* - select to display one of the relief data types: either Hillshade or Slope.
- *<Translate android="true" ids="shared_string_transparency"/>* - a percentage scale for determining the preferred level of transparency for the displayed shadow.   
- *<Translate android="true" ids="shared_string_zoom_levels"/>* - 2 slider options to move to the left, or right, to determine:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate android="true" ids="welmode_download_maps"/>* - suggests downloading the Hillshade package if it has not already been downloaded for the current geographic location shown on the screen.  


![Terrain menu Android](@site/static/img/plugins/contour-lines/terrain_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

**Settings** for the appearance of Hillshade.  
- Tap **Terrain** in *<Translate ios="true" ids="map_settings_overunder"/>* section, to open the context menu.
- Select **Hillshade**.
- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off Hillshade on the map.
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - percentage scale for determining the preferred level of transparency for the displayed shadow.
- *<Translate ios="true" ids="res_zoom_levels"/>* - minimum and maximum options, for tap:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade will be visible on the map. 
    - the maximum zoom level at which it should disappear.
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - shows previously unloaded Hillshade packages, either for the selected area on the map or for the current center of the map displayed on the screen.  

![Terrain menu iOS](@site/static/img/plugins/contour-lines/terrain_menu_ios.png) ![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_ios_selected.png)

</TabItem>

</Tabs>

>**NOTE**: If you do not see Hillshade enabled after loading the appropriate map, restart the application.

### Slope

The slope allows you to explore the steepness, or incline of a slope expressed as an angle in the number of degrees of deviation from the plane, which corresponds to the vertical distance divided by the horizontal distance. Available [configuration](../map/configure-map-menu.md): the transparency of the colours used to display the angle, and the zoom level at which the Slope map should be visible.  


The **Slope** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**Settings** for the appearance of Slope.  
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


**Settings** for the appearance of Slope. 
- Tap **Terrain** in *<Translate ios="true" ids="map_settings_overunder"/>* section, to open the context menu.
- Select **Slope**. 
- *<Translate ios="true" ids="toggle_hillshade"/>* - toggle on/off Slope on the map.  
- *<Translate ios="true" ids="map_settings_hillshade"/>* / *<Translate ios="true" ids="gpx_slope"/>* - a choice to display one of the terrain data types: either Hillshade, or Slope;
- *<Translate ios="true" ids="map_settings_layer_transparency"/>* - a percentage scale for determining the preferred level of transparency for the displayed shadow for the colours used to display the angle. 
- *<Translate ios="true" ids="res_zoom_levels"/>* - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope angle colors are expected to be viewable on the map; and 
    - the maximum zoom level at which the colors are expected to disappear;
- *<Translate ios="true" ids="map_settings_legend"/>* - the legend of colors to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope))
- *<Translate ios="true" ids="osmand_live_available_maps"/>* - an offer to download a Slope package if none is still downloaded for the current geographical location displayed on the screen. 

![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/terrain_menu_slopes_ios.png) 

</TabItem>

</Tabs>

>**NOTE**: If you do not see Slope enabled after loading the appropriate map, restart the application.


## Osmand Guide on YouTube

Please watch the full video tutorial at: [Link to Youtube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg)  

## Data source

The altitude data on the map - between 70 degrees north latitude and 70 degrees south latitude - are from measurements made by the Shuttle Radar Topography Mission (abbreviated *SRTM*). It used the Advanced Spaceborne Thermal Emission and Reflection Radiometer (abbreviated *ASTER*), which is a sensor onboard the Terra satellite and the primary imaging tool in NASA's Earth Observation System. ASTER is a joint effort between NASA, the Japanese Ministry of Economy, Trade, and Industry (abbreviated *METI*), and Japan Space Systems (also known as *J-spacesystems*).

Link to the [License](https://github.com/osmandapp/OsmAnd/blob/master/LICENSE#L148).
