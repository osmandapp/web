---
sidebar_position: 5
title:  Vector Maps (Map Styles)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

Vector maps are intended to be used as the default map data source for OsmAnd, so **you need to download them to your device**. Vector maps support a huge number of map styles for different activities such as cycling, hiking, riding by car or snowmobile, and others.  

Each map style can be customized to highlight or hide specific objects, and to switch between day and night modes. Vector map data can be augmented by vector data and displayed in the default Map style, such as *Contour line* information. You can *create your own OsmAnd map style* to demonstrate the required information.


## Use Cases

Customizable map styles are one of the main advantages of OsmAnd. You can customize the map display to suit yourself and your hobbies, adjust the display or hiding of certain map objects, the sizes, and colors of these objects, and change the scale of the display of certain objects.


## Default Map Styles  

OsmAnd offers you many map styles and data layers that fit by default. This section describes the main ones for day and night modes.

1. **Android**. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*

2. **iOS**. *<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*


### OsmAnd

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)  

OsmAnd's standard map rendering style balances detail and simplicity, making it ideal for urban and outdoor exploration. It details city features such as streets, buildings, and transportation stops while simplifying visual clutter by making maps clearer.  

Key benefits include route mapping, surface quality, access restrictions, road signage, SAC-scale path renderings, sports facilities, and topographic details such as contour lines.


### Touring View

![Touring view map style](@site/static/img/map/map-style-touring.png)

Touring style with high contrast and maximum detail. Includes all the options of the default OsmAnd style while displaying as much detail as possible, in particular roads, paths, and other ways of traveling. Clear distinction of road types in a *touring atlas*. Suitable for day, night, and outdoor use.

### UniRS and LightRS

<Translate android="true" ids="unirs_render_descr"/>

UniRS and LightRS styles are author styles that render the basic map information but in different color schemes.  

- **UniRS style**. This style is a modified version of the default to enhance the contrast for pedestrian and bicycle paths. It retains the classic Mapnik color scheme.  

    ![LightRS map style](@site/static/img/map/map-style-lightrs.png)

- **LightRS style**. This is a simple driving style that features a gentle night mode. It highlights roads in a contrasting orange color, dims secondary map objects, and displays topographical features like contour lines.

    ![UniRS map style](@site/static/img/map/map-style-unirs.png)

### Nautical

![Nautical map style](@site/static/img/map/map-style-nautical.png)

This is a style of nautical navigation featuring buoys, lighthouses, river routes, sea lanes, marks, harbors, nautical marks, and depth contours. Read more in the article [Nautical Map View](../plugins/nautical-charts.md).

### Winter and Ski

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

This is a style for ski sports that describes the pistes, elevators, and cross-country trails, as well as obscuring secondary map objects. **Winter and Ski style** is designed to help you with winter sports navigation.  

You can see the ski slopes and other details such as the difficulty of the slopes and elevator markers. Key benefits include the convenient display of slopes, elevators, and other skiing features. Less of the distracting secondary objects of the map. Read more in the article [Ski Maps](../plugins/ski-maps.md).

### Topo

![Topo map style](@site/static/img/map/map-style-topo.png)

This style is designed for hiking, camping, and bicycling in nature. It features contrasting roads and natural features, different types of trails, extended contour line options, and additional details. It is readable in the outdoors. The *Surface Integrity* setting allows you to distinguish the quality of the road.

### OSM-carto

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

This style imitates the default [OpenStreetMap web style](https://www.openstreetmap.org/). The source code of the web version is available on [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd code is available on [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

### Desert

![Desert map style](@site/static/img/map/map-style-desert.png)

Designed for deserts and other sparsely populated regions, offering more detailed map information.

### Offroad

![Offroad map style](@site/static/img/map/map-style-offroad.png)

Designed for off-road navigation, this style is based on the [Topo](#topo) map layout and works well with satellite images as an underlay. It features thinner main roads to highlight paths, tracks, bike routes, and other off-road trails, making it ideal for exploring unpaved routes in rural or remote areas.

### Snowmobile

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

Tailored for snowmobile navigation, this style highlights snowmobile-friendly paths, roads, and tracks. It highlights specialized paths in snowy regions, offering clear navigation across snow-covered terrains where standard roads may not be available.


## Map Legend

The map legend serves as a key to understanding the symbols used in OsmAnd maps. It explains the meaning behind various map symbols, including points, lines, and areas. For example, symbols like blue sinuous lines indicate rivers, while different colors and shapes may represent buildings, paths, and routes.  

The legend helps users interpret what they see on the map. You can access the full OsmAnd map legend [here](../map-legend/index.md).


## Map Fonts (Android)

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

For maps in simplified/traditional Chinese, Japanese, and Korean, incorrect characters or symbols (like squares) might appear if your device lacks the necessary fonts. This issue occurs when rendering local names and can be solved by downloading the required fonts via OsmAnd.  

Some related font issues have been documented on GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## * Contour Lines

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Contour lines in OsmAnd are displayed as elevation lines on vector maps. To use them, you must first enable the [Topography plugin](../plugins/topography.md), download the necessary regional data, and configure the display. This feature is not enabled by default and requires a [purchase](../purchases/index.md).  

Contour lines are compatible with all map styles and can be customized through the [Contour lines menu](../plugins/topography.md#contour-lines). For further details, visit [Topography plugin](../plugins/topography.md) article.


## * Nautical Depth

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautical depth contour lines represent areas of equal depth, helping visualize underwater topography changes. This feature is available across all map styles and modes and can be adjusted with or without the Nautical map view plugin enabled. For further details about the Nautical map view, visit the [Nautical Map plugin page](../plugins/nautical-charts).


## Show Borders

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

This feature allows you to toggle the visibility of borders for previously downloaded maps from the list of available maps. Its main purpose is to help declutter the main map by hiding the outlines of downloaded maps, which is especially useful if you have many maps installed.  

By default, map borders will appear when you zoom in to level 7 and will disappear at zoom level 3 and below.

:::tip
When the *Show borders of downloaded maps* feature is enabled, downloaded maps are colored *Green* in both the Android and iOS versions of OsmAnd. On Android, archived maps are shown in *Orange*. In iOS, maps that can be updated are also marked in *Orange*.
:::


## Coordinates Grid

<InfoAndroidOnly />

Go to: *Android* *Menu → Configure Map → Show → Coordinates Grid*  

![Coordinates grid menu](@site/static/img/map/coordinates_grid_menu_andr.png)

The **Coordinates Grid** feature allows you to overlay a grid on the map, displaying coordinate lines in a selected format. This feature is useful for precise location reference and geospatial navigation.

Available coordinate formats:

- **DD°MM′SS″** (Degrees, Minutes, Seconds)
- **DD.DDDDD°** (Decimal Degrees)
- **DD°MM.MMM′** (Degrees, Decimal Minutes)
- **UTM** (Universal Transverse Mercator)

Zoom level settings:

- The grid lines appear based on the zoom level, between **4 – 19**.
- The lines dynamically adjust coordinate divisions based on the zoom level.

By default, the app uses the coordinate format selected in [General settings](../personal/profiles.md#units--formats).


## Configure Map Style

### Map Mode

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

The map can be displayed in a light or dark theme based on the mode selected from a list of options. By default and for all new users, the [map style](#default-map-styles) aligns with the theme chosen in your device's system settings.

- **<Translate android="true" ids="daynight_mode_day"/>**. Always displays the map in a light theme for optimal daytime visibility.

- **<Translate android="true" ids="daynight_mode_night"/>**. Always shows the map in a dark theme, ideal for nighttime or low-light conditions.

- **Sunrise / Sunset**. Automatically transitions between day and night themes according to local sunrise and sunset times, which are detailed in this tab in the app.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android only*). Utilizes the device's light sensor to automatically switch between light and dark themes according to ambient light levels.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. The map display adapts to the app's overall theme, showing day mode in the light theme and night mode in the dark theme.


### Details  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

</TabItem>

<TabItem value="ios" label="iOS">

  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details"/>*  

</TabItem>

</Tabs>

- **<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.  
    ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).  
    ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)

- **<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.  
    ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)

- **<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads.  
    ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)

- **<Translate ios="true" ids="rendering_attr_showLez_name"/>**. The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.  

    ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)

- **<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details.  
    ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)

- **<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics.  
    ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)

- **<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Designed for mappers, this feature shows references, remarks, and comments from other users on the map.  
    ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)

- **<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.  
    ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)

- **<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.  

    &nbsp;&nbsp;&nbsp;![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)


<!--
| | | |
|--------|--------|--------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Shows polygons, trails, points, and signs on the map at low zoom. This means that you can see more details on the map at low magnification. Note that rendering on your device may not be fast.| ![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Shows the type of road surface. The color of the road helps you understand what the road surface is, such as asphalt, grass, or sand. See the [Map legend](../map-legend/index.md).| ![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map Legend](../map-legend/index.md) to determine the smoothness of your road.| ![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  Shows the accessibility of the road: private or permitted, emergency only, or toll road. View the [Map Legend](../map-legend/index.md) to find available roads. | ![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | The [Low Emission Zones (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) feature displays green borders and "LEZ" labels on maps for areas in cities where access is restricted for certain polluting vehicles. LEZs aim to improve air quality by limiting entry to vehicles that meet specific emissions standards. Using this feature helps users avoid penalties by identifying and navigating around these green zones, ensuring compliance with local environmental regulations while traveling through city centers.| ![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. | Different building categories, such as residential, industrial, and commercial, are color-coded. Refer to the [Map legend](../map-legend/index.md) for details. | ![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. | Displays illuminated and non-illuminated streets, as well as underground and temporarily illuminated ways. Check the [Map legend](../map-legend/index.md) for specifics. | ![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. | Designed for mappers, this feature shows references, remarks, and comments from other users on the map. | ![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. | Shows sea depth contours. You need to install the [Nautical plugin](../plugins/nautical-charts) and download Nautical maps.| ![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. | Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). Highlights protected areas with a green border and "NR" label for wildlife conservation zones.| ![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  
-->

### Routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)  ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

A route is a path that is predetermined and needs to be followed to reach a specific destination. A route can be optimized for different types of travel, such as cycling, hiking, running, public transport, and others. You can read more about routes and their types in the [Routes article](../map/routes.md).


### Transport

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

</TabItem>

</Tabs>  

When navigating through cities, you need a more contrasting view of public transportation and stops. You can tap a public transportation stop and select one of the routes or stops from the list. Train routes are also displayed in this setting.

- **<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Shows public transport stops.  
    ![Map transport stops](@site/static/img/map/map-transport-stops.png)

- **<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Shows bus, trolleybus, and shuttle routes.  
    ![Map transport bus](@site/static/img/map/map-transport-bus.png)

- **<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Shows tram and train routes.  
    ![Map transport tram](@site/static/img/map/map-transport-tram.png)

- **<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Shows underground routes.  
    ![Map transport subway](@site/static/img/map/map-transport-subway.png)

### Hide

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

To improve map visibility, you might need to hide certain objects. For example, you can hide water when using the [Satellite online maps with the Underlay layer](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Hide regional boundaries inside of countries, but state boundaries are visible.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Hide all polygons of natural objects, special function for [Underlay/Overlay layer](../map/raster-maps.md#change-layer-parameters-transparency).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Hide all polygons of buildings.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Hide all polygons of water (seas, lakes, reservoirs, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Hide house numbers on the map.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Hide proposed objects - those objects that are planned for construction but only have a project (projected roads, intersections, buildings, and others).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Hide the POI icons from the map. However, the labels of these POIs will still appear on the map.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Hide the POI labels from the map. However, the POI icons will still appear on the map.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing maps on cities from non-useful objects.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Hide all overground objects. Special for seeing only underground objects like tunnels, passes, etc.

### Road Style

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs>

Special settings for roads, where you can change the colors to match the road atlas or add high-contrast roads or bold outlines for roads.

- **<Translate android="true" ids="rendering_value_default_name"/>**. Default style for highways. Look at [Map legend](../map-legend/index.md).  
![Map road style default](@site/static/img/map/map-road-style-default.png)

- **<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Style of German road atlas.  
![Map road style german](@site/static/img/map/map-road-style-german.png)

- **<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Style of American road atlas.  
![Map road style american](@site/static/img/map/map-road-style-american.png)

- **<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. The high contrast of roads.  
![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)
- **Pale**. Less contrasting colors of roads.  
![Map road style bold outline](@site/static/img/map/map-road-style-pale.png)

- **<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Bold outline for roads.  
![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)


### Text Size

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)


### Map Magnifier

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

You can choose this setting by long tap to "+" or "-" button on the screen or:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

You can choose this setting by long tap to "+" or "-" button on the screen or:  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>*

</TabItem>

</Tabs>

This setting helps to change the magnification of the map. It is applicable for raster and vector maps. For raster maps it applies a magnification effect, so text labels look bigger or smaller. For vector maps it makes the map look more or less detailed, if you set it to a low value, the map will look noisy/slow.  

- **75%**  
    ![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)

- **200%**  
    ![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)


### Map Language

The **Map language** option configures the spelling of names on the OsmAnd map for zoom levels 7-20, inclusive. For zoom levels 2-6, the names are displayed in the language set for OsmAnd in the system settings menu (see section *[How to change the application language](../start-with/first-steps.md#how-to-change-app-language)*).  

If the names on the map are not translated into the required language by the OSM community, you can use [transliterated names](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) or *<Translate ios="true" ids="translit_names"/>* (iOS) switcher.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

</TabItem>

</Tabs>  

- **Local names**  
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Ukrainian names**  
    ![Map language ukranian](@site/static/img/map/map-language-urkanian_2.png)

- **Show local names**  
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterate names**  
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)


## Custom Map Style

If you have a personal or third-party custom map style created according to the [Specification](../../technical/osmand-file-formats/osmand-rendering-style.md), you can install it on your device in these ways:

- Copy the `.render.xml` file to your device and open it with OsmAnd.
- Use the [standard import/export dialogs](../personal/import-export.md) to export or import rendering styles. If you create an `.osf` package, it works as a plugin that you can share with others.
- After installation, you can select the map style from the menu.


## Related Articles

- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in October 2024*

