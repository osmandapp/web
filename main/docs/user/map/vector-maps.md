---
sidebar_position: 5
title:  Vector Maps 
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


## Overview {#overview}

Vector maps are intended to be used as the default map data source for OsmAnd, so **you need to download them to your device**. Vector maps support a huge number of map styles for different activities such as cycling, hiking, riding by car or snowmobile, and others.  

Each map style can be customized to highlight or hide specific objects, and to switch between day and night modes. Vector map data can be augmented by vector data and displayed in the default Map style, such as *Contour line* information. You can *create your own OsmAnd map style* to demonstrate the required information.

Vector maps represent spatial data, such as roads, buildings, points, and polygons, using mathematical geometry stored in binary format. Each element (node, line, or polygon) is defined by coordinates and rendered dynamically according to the zoom level and map style.

Since vector data is not stored as fixed images, its appearance, including color, line width, transparency, or pattern, can be easily modified. This approach enables efficient rendering, low memory usage, and smooth scaling at any zoom level without quality loss.

:::info note
Very small polygons may be simplified or distorted during map data generation. Objects with an area smaller than approximately one square meter might not be displayed. For correct visualization, small features should be mapped as single nodes instead of polygons.
:::


## Use Cases {#use-cases}

Customizable map styles are one of the main advantages of OsmAnd. You can customize the map display to suit yourself and your hobbies, adjust the display or hiding of certain map objects, the sizes, and colors of these objects, and change the scale of the display of certain objects.


## Map Rendering {#map-rendering}

### Map Styles {#map-styles}

OsmAnd provides several built-in vector map styles optimized for different activities. In addition to the default styles, you can create and install your own custom map style based on rendering rules.

For a detailed description of available styles and instructions on creating custom styles, see the [Map Styles](../map/map-styles.md) article.

### Map Mode {#map-mode}

<Tabs groupId="operating-systems" queryString="current-os">  

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

![Map Mode](@site/static/img/map/map_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

![Map Mode](@site/static/img/map/map_mode_4-9_ios.png)

</TabItem>

</Tabs>

The map can be displayed in a light or dark theme based on the mode selected from a list of options. By default and for all new users, the [map style](#map-styles) aligns with the theme chosen in your device's system settings.

- **<Translate android="true" ids="daynight_mode_day"/>**. Always displays the map in a light theme for optimal daytime visibility.

- **<Translate android="true" ids="daynight_mode_night"/>**. Always shows the map in a dark theme, ideal for nighttime or low-light conditions.

- **Sunrise / Sunset**. Automatically transitions between day and night themes according to local sunrise and sunset times, which are detailed in this tab in the app.

- **<Translate android="true" ids="daynight_mode_sensor"/>** (*Android only*). Utilizes the device's light sensor to automatically switch between light and dark themes according to ambient light levels.

- **<Translate android="true" ids="daynight_mode_app_theme"/>**. The map display adapts to the app's overall theme, showing day mode in the light theme and night mode in the dark theme. 

### Road Style {#road-style}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

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

### Details {#details}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*

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

### Hide {#hide}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>*

</TabItem>

</Tabs>  

To improve map visibility, you might need to hide certain objects. For example, you can hide water when using the [Satellite online maps with the Underlay layer](../map/raster-maps.md#layers).

- **<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>**. Hide regional boundaries inside of countries, but state boundaries are visible.
- **<Translate android="true" ids="rendering_attr_noPolygons_name"/>**. Hide all polygons of natural objects, special function for [Underlay/Overlay layer](../map/raster-maps.md#layers).
- **<Translate android="true" ids="rendering_attr_hideBuildings_name"/>**. Hide all polygons of buildings.
- **<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>**. Hide all polygons of water (seas, lakes, reservoirs, etc.)
- **<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>**. Hide house numbers on the map.
- **<Translate android="true" ids="rendering_attr_showProposed_name"/>**. Hide proposed objects - those objects that are planned for construction but only have a project (projected roads, intersections, buildings, and others).
- **<Translate android="true" ids="rendering_attr_hideIcons_name"/>**. Hide the POI icons from the map. However, the labels of these POIs will still appear on the map.
- **<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>**. Hide the POI labels from the map. However, the POI icons will still appear on the map.
- **<Translate android="true" ids="rendering_attr_hideUnderground_name"/>**. Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing maps on cities from non-useful objects.
- **<Translate android="true" ids="rendering_attr_hideOverground_name"/>**. Hide all overground objects. Special for seeing only underground objects like tunnels, passes, etc.

### Transport {#transport}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*

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


## Text Rendering {#text-rendering}

### Map Magnifier {#map-magnifier}

<Tabs groupId="operating-systems" queryString="current-os">

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

### Text Size {#text-size}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*

</TabItem>

</Tabs>  

- **100%**  
    ![Map text size 100%](@site/static/img/map/map-text-size-100.png)

- **200%**  
    ![Map text size 200%](@site/static/img/map/map-text-size-200.png)

### Map Language {#map-language}

The **Map language** option configures the spelling of names on the OsmAnd map for zoom levels 7-20, inclusive. For zoom levels 2-6, the names are displayed in the language set for OsmAnd in the system settings menu (see section *[How to change the application language](../start-with/first-steps.md#how-to-change-app-language)*).  

If the names on the map are not translated into the required language by the OSM community, you can use [transliterated names](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) or *<Translate ios="true" ids="translit_names"/>* (iOS) switcher.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

- **Local names**   
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Preferred language** (ukrainian)   
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Use latin name if missing**   
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_language,map_locale"/>*

- **Local names**    
    ![Map language local names](@site/static/img/map/map-language-local-names_2.png)

- **Preferred language** (ukrainian)  
    ![Map language ukrainian](@site/static/img/map/map-language-urkanian_2.png)

- **Show local names**  (adds 2nd label if local name is different)  
    ![Map language local](@site/static/img/map/map-language-show-local_2.png)

- **Transliterate names**    
    ![Map language transliterate](@site/static/img/map/map-language-transliterate_2.png)

</TabItem>

</Tabs>  

### Map Fonts (Android) {#map-fonts-android}

*<Translate android="true" ids="shared_string_menu,maps_and_resources,other_menu_group,fonts_header"/>*  

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

For maps in simplified/traditional Chinese, Japanese, and Korean, incorrect characters or symbols (like squares) might appear if your device lacks the necessary fonts. This issue occurs when rendering local names and can be solved by downloading the required fonts via OsmAnd.  

Some related font issues have been documented on GitHub: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862).


## Topography Rendering {#topography-rendering}

### * Contour Lines {#-contour-lines}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>*

</TabItem>

</Tabs>

![Contour lines map style](@site/static/img/map/contour_lines.png)

Contour lines in OsmAnd are displayed as elevation lines on vector maps. To use them, you must first enable the [Topography plugin](../plugins/topography.md), download the necessary regional data, and configure the display. This feature is not enabled by default and requires a [purchase](../purchases/index.md).  

Contour lines are compatible with all map styles and can be customized through the [Contour lines menu](../plugins/topography.md#contour-lines). For further details, visit [Topography plugin](../plugins/topography.md) article.

### * Nautical Depth {#-nautical-depth}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>

Nautical depth contour lines represent areas of equal depth, helping visualize underwater topography changes. This feature is available across all map styles and modes and can be adjusted with or without the Nautical map view plugin enabled.  

For further details about the Nautical map view, visit the [Nautical Map plugin page](../plugins/nautical-charts).

### 3D Buildings {#3d-buildings}

<InfoAndroidOnly/> 

![3D Buildings](@site/static/img/map/3d_buildings_1_new.png) ![3D Buildings](@site/static/img/map/3d_buildings_2.png) 

**3D Buildings** feature displays buildings as volumetric 3D models instead of flat shapes. Buildings are generated from [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Simple_3D_Buildings), using height information from tags such as `height` and `building:levels` when available. 3D buildings are shown only at higher zoom levels (city/street view), where individual buildings can be displayed.  
Go to: *<Translate android="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/> → 3D buildings*  
Use the main toggle to enable or disable 3D rendering of buildings. To view buildings in 3D, tilt the map by placing two fingers on the screen and swiping up.

Currently, this option is available only when the [OsmAnd development plugin](../plugins/development.md) is enabled.  
Go to: *<Translate android="true" ids="shared_string_menu,plugin_settings,debugging_and_development"/>*

**Visibility** adjusts the opacity of 3D buildings. Use the slider to set the transparency level (0–100%). Lower values make buildings more transparent and improve visibility of roads and labels. Higher values make buildings more solid and visually dominant.

**3D buildings detalization** controls the geometric complexity of 3D buildings. Available options:  
- Medium – balanced level of detail (default).
- High – more detailed geometry.

**[Building parts](https://wiki.openstreetmap.org/wiki/Key:building:part)** enables rendering of separate building parts. This is most noticeable for complex buildings where different parts have different heights.

![3D Buildings](@site/static/img/map/3d_buildings_3.png)

<!--
## Map Legend {#map-legend}

The map legend serves as a key to understanding the symbols used in OsmAnd maps. It explains the meaning behind various map symbols, including points, lines, and areas. For example, symbols like blue sinuous lines indicate rivers, while different colors and shapes may represent buildings, paths, and routes.  

The legend helps users interpret what they see on the map. You can access the full OsmAnd map legend [here](../map-legend/index.md).
-->


## Additional Settings {#additional-settings}

### Show Borders {#show-borders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*

![show-borders-ios](@site/static/img/map/show-borders-ios.png)

</TabItem>

</Tabs>

This feature allows you to toggle the visibility of borders for previously downloaded maps from the list of available maps. Its main purpose is to help declutter the main map by hiding the outlines of downloaded maps, which is especially useful if you have many maps installed.  

By default, map borders will appear when you zoom in to level 7 and will disappear at zoom level 3 and below.

:::tip Color Show borders of downloaded maps
When the *Show borders of downloaded maps* feature is enabled, downloaded maps are colored **Green** in both the Android and iOS versions of OsmAnd.  

On Android, archived maps are shown in **Orange**. In iOS, maps that can be updated are also marked in **Orange**.
:::

### Coordinates Grid {#coordinates-grid}

:::tip Purchase
Color Customization of Coordinates Grid is a [paid feature](../purchases/index.md).  
:::

Go to: *Menu → Configure Map → Show → Coordinates Grid*  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Coordinates grid menu](@site/static/img/map/coordinates_grid_settings_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![show-borders-ios](@site/static/img/map/coordinates_grid_settings_ios.png)

</TabItem>

</Tabs>

The **Coordinates Grid** feature overlays a reference grid on the map, allowing you to visualize latitude and longitude lines based on different coordinate systems. This feature is useful for precise location reference and geospatial navigation. 

You can configure the following options:
- **Zoom levels:** set the minimum and maximum zoom levels (2 - 22) at which the grid is visible.
- **Labels position:** choose between *Edges* (default)or *Center* for grid labels.
- **Grid color:** available separately for Day/Night mode. 
- **Coordinate format:** select from several available formats (see list below).

***Available coordinate formats:***

- **WGS84** (EPSG:4326) -  **DD°MM′SS″** (Degrees, Minutes, Seconds)
- **WGS84** (EPSG:4326) - **DD.DDDDD°** (Decimal Degrees - WGS84 default format)
- **WGS84** (EPSG:4326) - **DD°MM.MMM′** (Degrees, Decimal Minutes)
- **UTM** (EPSG:6387, Universal Transverse Mercator - zone-based grid system). The minimum zoom level is 9, only one UTM zone is displayed at a time, as zones are separated by meridians every 6°
- **MGRS** (Military Grid Reference System)

By default, the app uses the coordinate format selected in [General settings](../personal/profiles.md#units--formats), but you can change it directly in this menu.

[Quick action](../widgets/quick-action.md#overview): You can also add a quick toggle *Show/Hide Coordinates Grid* to the [Configure Map](../widgets/quick-action.md#configure-map) group for fast access.

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

## Routes {#routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

</TabItem>

</Tabs>

![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)  ![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)

A route is a path that is predetermined and needs to be followed to reach a specific destination. A route can be optimized for different types of travel, such as cycling, hiking, running, public transport, and others. You can read more about routes and their types in the [Routes article](../map/routes.md).


## Related Articles {#related-articles}

- [Interact with Map](../map/interact-with-map.md)
- [Configure Map](../map/configure-map-menu.md)
- [Map Styles](../map/map-styles.md)
- [Routes](../map/routes.md)
- [Import / Export](../personal/import-export.md)
- [Color Palette Schemes](../personal/color-palette-schemes.md)


