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

Terrain information, such as Contour lines, Hillshades, Slopes - helps to make a visual assessment of the shape of the land surface by considering the curvature, extremes, steepness, points of equal height, and other.

## Overview

The Contour lines plugin is an autonomous functionality that can be enabled/disabled as needed. The plugin provides for [downloading](../personal/maps.md#download-maps-maps) the following maps: 

- the **Contour lines** map in [vector](../map/vector-maps.md) points, and

- two Terrain maps in [raster](../map/raster-maps.md) pixels: 

    - the **Hillshade** map, and 

    - the **Slopes** map. 

![Contour lines and Terrain](@site/static/img/plugins/contour-lines/contour_lines_terrain.png)

Each map of the Contour lines plugin is an independent option, which if toggled on, is displayed above, or underneath the Map Source, depending on the established settings.

The terrain information on the map can be represented by hill shading, with the contour lines of the uphill and downhill, with the color of the slope angle of diviation from flat. By means of contour lines, shades and colors, the map shows slopes, peaks, rugged terrain, and other elevation above the sea level. 

The elevation data on the map - between 70 degrees north and 70 degrees south - is produced on the basis of the measurements made by the Shuttle Radar Topography Mission (abbrev.as *SRTM*). It used the Advanced Spaceborne Thermal Emission and Reflection Radiometer (abbrev. as *ASTER*), which is a sensor onboard the Terra satellite and the flagship imaging instrument of NASA's Earth Observing System. ASTER represents a cooperative effort between NASA, Japan's Ministry of Economy, Trade and Industry (abbrev. as *METI*), and Japan Space Systems (also known as *J-spacesystems*).


## Setup 

For the Contour lines and Terrain data to show up on the map, the following setup is needed:

1. Purchase any of the Contour lines maps.  
2. Enable the Coutour lines plugin in the Plugins section of the main menu.
3. Download the Contour lines and/or Terrain maps for the required regions. 
4. Toggle on the Contour lines and/or Terrain maps per profile.
5. If needed, configure the map view. 



### Purchase and enable plugin

Purchase of the Contour lines package is required to enable the plugin and start downloading Contour lines, and/or Hillshade, and/or Slope maps per region. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The maps of the Contour lines plugin are distributed through In-App Purchases, subsciptions, and an Android app purchase. For more details on available purchase options, visit [Purchases](../purchases/index.md).  

Having purchased Contour lines, the plugin can be enabled, as displayed on the figures below. 

![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_ios.png) ![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

For purchases on **iOS**, refer to [in-app purchases, or a subscription](../purchases/ios.md#in-app-purchases). To view the already made purchases, go to: <Translate ios="true" ids="menu,sett_settings,purchases"/>

In the **iOS** version, to enable the plugin, check **Contour lines** in: <Translate ios="true" ids="menu,plugins,product_title_srtm"/>

![Contour lines plugin on iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

For purchases on **Android**, refer to [in-app purchases, a subscription, or the full version of the app](../purchases/android.md#free-and-paid-features). To view the already made purchases, go to: <Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/> 

In the **Android** version, to enable the plugin, tap Enable for **Contour lines** in:  <Translate android="true" ids="shared_string_menu,plugin_settings,srtm_plugin_name"/>

![Contour lines plugin on Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_android.png) 

</TabItem>

</Tabs>

&nbsp;&nbsp;&nbsp;&nbsp;

### Download Contour lines/Terrain 

There are three types of the elevation data packages for [download per region](../start-with/download-maps.md): Contour lines, Hillshade and Slope. Most often all of them can be downloaded at the country level. And also, there are maps available per lower region level. 

#### Consider country/region levels 

By combining the maps of both levels and different types, you can achieve an optimal configuration of the elevation data that suites your current needs. 

For example, you can combine the Contour lines region map of the Sicily island with the Slope map of Italy as one at the country level. Another example is the maps of Canada, where all three types of maps are available at the region level. And to display both the Slope and Contour lines data for Alberta, it is enough to download respectively two maps at the region level.  

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Hillshade over Sicily](@site/static/img/plugins/contour-lines/2_hillshade_only.png) ![Slope over Sicily](@site/static/img/plugins/contour-lines/3_slope_only.png)


</TabItem>

<TabItem value="ios" label="iOS">

![Hillshade over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_hillshade1.png) ![Slope over Sicily in iOS](@site/static/img/plugins/contour-lines/ios_slope1.png)

</TabItem>

<TabItem value="android" label="Android">

![Hillshade over Sicily in Android](@site/static/img/plugins/contour-lines/2_hillshade_only.png) ![Slope over Sicily in Androis](@site/static/img/plugins/contour-lines/3_slope_only.png)

</TabItem>

</Tabs>


> **NOTE**: The Contour lines, Hillshade and Slope angle colors become viewable at a certain zoom level, which is established in the settings for the specific map type.


&nbsp;&nbsp;&nbsp;&nbsp;

#### Combine map types

When downloading different types of the maps: Contour lines, Hillshade, and/or Slope, consider the possiblity further to combine them.

For example, to make an assessment of curvature, especially for a mountain ridge, the combination of Contour lines with Hillshade will be an obvious choice for download. And to assess the steepness of the slope, points of equal height, you can display the Slope and Contour lines maps together.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Contour lines combined with Hillshade in iOS](@site/static/img/plugins/contour-lines/ios_hillshade_n_cont_lines1.png) ![Contour lines combined with Slope in iOS](@site/static/img/plugins/contour-lines/ios_slope_n_cont_lines1.png)

</TabItem>

<TabItem value="android" label="Android">

![Contour lines combined with Hillshade](@site/static/img/plugins/contour-lines/4_hillshade_n_contour.png) ![Contour lines combined with Slope](@site/static/img/plugins/contour-lines/5_slope_n_contour.png) 

</TabItem>

</Tabs>


>**NOTE**: There is a legend of colors that shows how each color aligns with the angle of deviation from flat. The legend is available in the settings of the Slope map. ![Slope color legend](@site/static/img/plugins/contour-lines/Slope_legend.png)

&nbsp;&nbsp;&nbsp;&nbsp;

#### Choose Meters or Feet

The contour interval can be displayed in feet, or meters. It is important to decide what units it is convenient for you to see Contour lines in, so that to download the respective version of the Contour lines map. The units are not interchangeable, and in case if feet are needed to be switched into meters, or vice versa, the previous version of the Contour lines map has to be removed, so that anew to download the other version. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The versions - in feet, or meters - are displayed on the download popup, when the [**Contour lines**](../map/vector-maps.md#contour-lines) option is clicked in the country, or region map list. It allows you to choose what Contour lines file is needed: in meters, or in feet. 

![Contour lines download dialogue Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png) ![Contour lines download dialogue iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

The versions - in feet, or meters - are displayed on the download popup, when the [**Contour lines**](../map/vector-maps.md#contour-lines) option is clicked in the country, or region map list. It allows you to choose what Contour lines file is needed: in meters, or in feet. 

![Contour lines download dialogue iOS](@site/static/img/plugins/contour-lines/ios_cont_lines_meters_feet1.png) 

</TabItem>

<TabItem value="android" label="Android">

The versions - in feet, or meters - are displayed on the download popup, when the [**Contour lines**](../map/vector-maps.md#contour-lines) option is clicked in the country, or region map list. It allows you to choose what Contour lines file is needed: in meters, or in feet. 

![Contour lines download dialogue Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_dialogue_android.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

#### How to download

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

To download Contour lines, Hillshade, and/or Slope for a specific area, do the following:

1. Go to  [Download maps menu](../start-with/download-maps.md#download---main-menu).

2. Find your country or region.

3. Choose any of the packages: 
    - Contour lines, 
    - Hillshade, and/or 
    - Slope.

4. For Contour lines, select Meters, or Feet.

5. Download the files. 

![Contour lines download iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_ios.png) ![Contour lines download Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:

1. Go to: <Translate ios="true" ids="menu,res_mapsres,res_worldwide"/>

2. Select a country, and observe any of the following sections:

    2.1. The **<Translate ios="true" ids="res_region_map"/>** section provides available packages with maps for the entire country. If needed, download ones. 

    2.2.  The **<Translate ios="true" ids="res_mapsres"/>** section lists the regions of the country. If to tap a region, there will be map packages available to download for the region. 

![Contour lines download iOS](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_ios.png)

</TabItem>

<TabItem value="android" label="Android">

In the **Android** version, to download any of the available packages of Contour lines, Hillshade, and/or Slope, do the following:

1. Go to: <Translate android="true" ids="shared_string_menu,welmode_download_maps,regions"/> 

2. Select a country, and observe any of the following sections:

    2.1. The **<Translate android="true" ids="region_maps"/>** section provides available packages with maps for the entire country. If needed, download ones.

    2.2. The **<Translate android="true" ids="regions"/>** section lists the regions of the country. If to tap a region, there will be map packages available to download for the region.

![Contour lines download Android](@site/static/img/plugins/contour-lines/contour_lines_plugin_download_android.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Show Contour lines/Terrain 

Usually as many packages of Contour lines, Hillshade, and/or Slope are downloaded for as many specific areas as needed. Once all downloads are done, it is possible to determine what [map types](../personal/maps.md#map-types) to show for what profile. There are two options - Contour lines and/or Terrain - to enable per [profile](../personal/profiles.md):

- only Contour lines
- only Terrain
- both Contour lines and Terrain together. 

For the **Terrain** option, it is possible to enable only one map at a time: either **Hillshade**, or **Slope**. You can determine which one of the two is currently on by opening the Terrain settings, where the toggled option will be the one which is currently on. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Terrain and Contour lines enable Android](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_android.png) ![Terrain and Contour lines enable iOS](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_ios.png)


</TabItem>

<TabItem value="ios" label="iOS">

#### CONTOUR LINES

In the **iOS** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:

1. Go to: <Translate ios="true" ids="menu,configure_map"/>.

2. Scroll down up to **<Translate ios="true" ids="map_settings_style"/>**, and toggle on the **Contour lines** option. 

![Terrain and Contour lines enable iOS](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_ios.png)

#### TERRAIN

In the **iOS** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:

1. Go to: <Translate ios="true" ids="menu,configure_map"/>.

2. Scroll down up to **<Translate ios="true" ids="map_settings_overunder"/>**, toggle on the **Terrain** option, and tap it, to open the context menu, see the figure below.

3. Select one of the options: either **Hillshade**, or **Slope**. 

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_ios_selected.png) 


</TabItem>

<TabItem value="android" label="Android">

#### CONTOUR LINES 

In the **Android** version, to show the **Contour lines** map for the selected profile and all downloaded areas, do the following:

1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>.

2. Select a Profile, and look for the **<Translate android="true" ids="shared_string_show"/>** section of settings in the menu.

3. Within the section, scroll down up to **<Translate android="true" ids="index_srtm_ele"/>**, and toggle on the **Contour lines** option. 

![Terrain and Contour lines enable Android](@site/static/img/plugins/contour-lines/contour_lines_terrain_enable_android.png)


#### TERRAIN

In the **Android** version, to show one of the **Terrain** maps for the selected profile and all downloaded areas, do the following:

1. Go to: <Translate android="true" ids="shared_string_menu,configure_map"/>.

2. Select a Profile, and look for the **<Translate android="true" ids="shared_string_show"/>** section in the menu.

3. Within the section, scroll down up to **<Translate android="true" ids="shared_string_terrain"/>**, toggle on the **Terrain** option, and tap it, to open the context menu, see the figure below.

4. Select one of the options: either **Hillshade**, or **Slope**. 

![Hillshade, or Slope options](@site/static/img/plugins/contour-lines/Terrain_menu_android_selected.png) 


</TabItem>

</Tabs>


>**NOTE**: If you cannot see the enabled Hillshade, or Slope after downloading the respective map, please restart the application.

&nbsp;&nbsp;&nbsp;&nbsp;

## Configure map view

Each of the maps: Hillshade, Slope, Contour lines can be configured to visually look differently depending on personal preferences, and/or the context of a specific region, and/or other conditions. Use the context menu of the respective map option in the Configure map menu to make the needed appearance adjustments. 


### Hillshade map

Hillshade allows you to research the relief by highlighting it with the hypothetical  illumination to simulate the cast of shadow, and thus to reveal the curvature, which is normally hidden, or unclear, for example, due to lots of vegetation. There are some aspects of the Hillshade map available for [configuration](../map/configure-map-menu.md): transparency of the shadow, the zoom level at which the Hillshade map is expected to be visible. 

The **Hillshade** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Terrain menu Android](@site/static/img/plugins/contour-lines/terrain_menu_android.png) ![Terrain menu iOS](@site/static/img/plugins/contour-lines/terrain_menu_ios.png) 

</TabItem>

<TabItem value="ios" label="iOS">

- **<Translate ios="true" ids="shared_string_enabled"/>** - a toggle to show, or hide the terrain data on/from the map;
- **<Translate ios="true" ids="map_settings_hillshade"/>** / **<Translate ios="true" ids="gpx_slope"/>** - a choice to display one of the terrain data types: either Hillshade, or Slope;
- **<Translate ios="true" ids="map_settings_layer_transparency"/>** - the percentage bar to determine the preferable level of the transparency for the displayed shadow; 
- **<Translate ios="true" ids="res_zoom_levels"/>** - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade is expected to be viewable on the map; and 
    - the maximum zoom level at which it is expected to disappear;
- **<Translate ios="true" ids="osmand_live_available_maps"/>** - an offer to download a Hillshade package if none is still downloaded for the current geographical location displayed on the screen. 

![Terrain menu iOS](@site/static/img/plugins/contour-lines/terrain_menu_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

- **<Translate android="true" ids="shared_string_terrain"/>** -  a toggle to show, or hide the terrain data on/from the map;
- **<Translate android="true" ids="shared_string_hillshade"/>** / **<Translate android="true" ids="shared_string_slope"/>** - a choice to display one of the terrain data types: either Hillshade, or Slope;
- **<Translate android="true" ids="shared_string_transparency"/>** - the percentage bar to determine the preferable level of the transparency for the displayed shadow; 
- **<Translate android="true" ids="shared_string_zoom_levels"/>** - two slider options to move to the left, or right, to determine:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Hillshade is expected to be viewable on the map; and 
    - the maximum zoom level at which it is expected to disappear;
- **<Translate android="true" ids="welmode_download_maps"/>** - an offer to download a Hillshade package if none is still downloaded for the current geographical location displayed on the screen.

![Terrain menu Android](@site/static/img/plugins/contour-lines/terrain_menu_android.png) 

</TabItem>

</Tabs>

&nbsp;&nbsp;&nbsp;&nbsp;

### Slope map

Slope allows you to research the steepness, or incline of the slope expressed as an angle in the number of degrees of deviation from flat, which corresponds to the vertical distance divided by the horizontal distance. There are some aspects of the Slope map available for [configuration](../map/configure-map-menu.md): transparency of the colors used to show the angle, the zoom level at which the Slope map is expected to be visible.

The **Slope** settings are available in the context menu of the **Terrain** option in the **Configure map** of a specific [profile](../personal/profiles.md). 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Terrain menu slopes Android](@site/static/img/plugins/contour-lines/terrain_menu_slopes_android.png) ![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/terrain_menu_slopes_ios.png) 

</TabItem>

<TabItem value="ios" label="iOS">

- **<Translate ios="true" ids="shared_string_enabled"/>** - a toggle to show, or hide the terrain data on/from the map;
- **<Translate ios="true" ids="map_settings_hillshade"/>** / **<Translate ios="true" ids="gpx_slope"/>** - a choice to display one of the terrain data types: either Hillshade, or Slope;
- **<Translate ios="true" ids="map_settings_layer_transparency"/>** - the percentage bar to determine the preferable level of the transparency for the colors used to show the angle; 
- **<Translate ios="true" ids="res_zoom_levels"/>** - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope angle colors are expected to be viewable on the map; and 
    - the maximum zoom level at which the colors are expected to disappear;
- **<Translate ios="true" ids="map_settings_legend"/>** - the legend of colors to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope))
- **<Translate ios="true" ids="osmand_live_available_maps"/>** - an offer to download a Slope package if none is still downloaded for the current geographical location displayed on the screen. 

![Terrain menu slopes iOS](@site/static/img/plugins/contour-lines/terrain_menu_slopes_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

- **<Translate android="true" ids="shared_string_terrain"/>** -  a toggle to show, or hide the terrain data on/from the map;
- **<Translate android="true" ids="shared_string_hillshade"/>** / **<Translate android="true" ids="shared_string_slope"/>** - a choice to display one of the terrain data types: either Hillshade, or Slope;
- **<Translate android="true" ids="shared_string_transparency"/>** - the percentage bar to determine the preferable level of the transparency for the colors used to show the angle; 
- **<Translate android="true" ids="shared_string_zoom_levels"/>** - the minimum and maximum options to tap, to select:
    - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Slope angle colors are expected to be viewable on the map; and 
    - the maximum zoom level at which the colors are expected to disappear;
- **<Translate android="true" ids="shared_string_legend"/>** - the legend of colors to show the angle range at which the steepness of the slope can differ. For more details, refer to [Wikipedia](https://en.m.wikipedia.org/wiki/Grade_(slope))
- **<Translate android="true" ids="welmode_download_maps"/>** - an offer to download a Slope package if none is still downloaded for the current geographical location displayed on the screen.

![Terrain menu slopes Android](@site/static/img/plugins/contour-lines/terrain_menu_slopes_android.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Contour lines map

Contour lines allows you to research in which direction and how much the surface inclines by analyzing the contour lines, which are placed closely for steep ground and more curved when going upward. There are some aspects of the Contour lines map available for [configuration](../map/configure-map-menu.md): the minimal zoom level where the contour lines will become visible, color scheme, width and density of lines. 

The **Contour lines** settings are available in the context menu of the **Contour lines** option in the [Configure map](../map/vector-maps.md#contour-lines) of a specific [profile](../personal/profiles.md). 


<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png) ![Contour lines menu iOS](@site/static/img/plugins/contour-lines/contour_lines_menu_ios.png) 

</TabItem>

<TabItem value="ios" label="iOS">

- **<Translate ios="true" ids="shared_string_enabled"/>** - a toggle to show, or hide the Contour lines on/from the map;
- **<Translate ios="true" ids="display_starting_at_zoom_level"/>** - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map;
- **<Translate ios="true" ids="map_settings_color_scheme"/>** - a choice of color options in which to view the Contour lines on the map;
- **<Translate ios="true" ids="map_settings_line_width"/>** - the width of the Contour lines displayed on the map;
- **<Translate ios="true" ids="map_settings_line_density"/>** - the density of the Contour lines displayed on the map. The higher the density, the slower the map might be rendered;
- **<Translate ios="true" ids="osmand_live_available_maps"/>** - an offer to download a Contour lines package if none is still downloaded for the current geographical location displayed on the screen.

![Contour lines menu iOS](@site/static/img/plugins/contour-lines/contour_lines_menu_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

- **<Translate android="true" ids="shared_string_on"/>** -  a toggle to show, or hide the Contour lines on/from the map;
- **<Translate android="true" ids="show_from_zoom_level"/>** - the minimum [zoom level](../map/interact-with-map.md#my-location--zoom) at which Contour lines is expected to be viewable on the map;
- **<Translate android="true" ids="srtm_color_scheme"/>** - a choice of color options in which to view the Contour lines on the map; 
- **<Translate android="true" ids="rendering_attr_contourWidth_name"/>** - a choice of the width options to establish for the Contour lines; 
- **<Translate android="true" ids="rendering_attr_contourDensity_name"/>** - a choice of the density options to establish for the Contour lines. The higher the density, the slower the map might be rendered;
- **<Translate android="true" ids="welmode_download_maps"/>** - an offer to download a Contour lines package if none is still downloaded for the current geographical location displayed on the screen.

![Contour lines menu Android](@site/static/img/plugins/contour-lines/contour_lines_menu_android.png)

</TabItem>

</Tabs>


Please see full video guide below:
[Link to Youtube](https://www.youtube.com/watch?v=z8kp_M3FKoc&feature=emb_logo&ab_channel=BartEisenberg)