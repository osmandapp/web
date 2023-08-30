---
sidebar_position: 4
title:  Vector maps (Map styles)
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

## Overview

Vector maps are designed to be the default map data source for OsmAnd, so you need to download them to your device. Vector maps support a huge range of map styles for many activities like cycling, hiking, riding by car or snowmobile, etc. Each map style can be tuned to highlight or hide specific objects and switch between day and night mode. Map vector data could be augmented by vector data and displayed with default Map style, for example, Contour line information. You can create your own OsmAnd map style to demonstrate the necessary information.


## Use cases

Configurable and custom map styles are one of the main advantages of OsmAnd. Each user can customize the map display to suit himself and his hobbies, configure it to display or hide certain map objects, the sizes and colors of these objects, and change the scale at which certain objects are displayed.


## Default Map styles  

OsmAnd offers you many map styles and data layers that fit by default. Let's take a look at the main ones for day and night modes.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,map_settings_type,configure_map,map_settings_offline"/>*   

</TabItem>

</Tabs>  


### OsmAnd

OsmAnd style is the default style of map rendering, general-purpose style. It offers details about the city such as streets, buildings, transport stops, etc. Simplified rendering to have cleaner maps in the populated cities. Key features: routes, surface quality, access restrictions, road shields, paths rendering according to SAC scale, whitewater sports features, topography features like contour lines.

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

### Touring view

<Translate android="true" ids="touring_view_render_descr"/>

![Touring view map style](@site/static/img/map/map-style-touring.png)

### UniRS and LightRS

<Translate android="true" ids="unirs_render_descr"/>

UniRS and LightRS styles are author styles that render the basic map information but in different colour schemes.

UniRS style: <Translate android="true" ids="unirs_render_descr"/>

![UniRS map style](@site/static/img/map/map-style-unirs.png)

LightRS style: <Translate android="true" ids="light_rs_render_descr"/>

![LightRS map style](@site/static/img/map/map-style-lightrs.png)

### Nautical 

For nautical navigation. Features buoys, lighthouses, riverways, sea lanes and marks, harbors, seamark services, and depth contours. Read more about [Nautical maps](../plugins/nautical-charts.md).

![Nautical map style](@site/static/img/map/map-style-nautical.png)

### Winter and ski  

For skiing sports. Describes the pistes, elevators, cross-country trails, and obscures secondary map objects. **Winter and ski style** is designed to help you with winter sports navigation: you can see the ski slopes and other details such as the difficulty of the slopes and elevator markers. Key features: the convenient display of slopes, elevators, and other skiing features. Less of the distracting secondary objects of the map. Read more about [Ski maps](../plugins/ski-maps.md).

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

### Topo

For hiking, trekking, and nature cycling. Readable outdoors. Contrasting roads and natural objects, different route types, advanced contour line options, extra details. Adjusting "Surface integrity" distinguishes road quality.

![Topo map style](@site/static/img/map/map-style-topo.png)

### OSM-carto

This style simulates default web [OpenStreetMap style](https://www.openstreetmap.org/). Web source code is available at [Github](https://github.com/gravitystorm/openstreetmap-carto), OsmAnd code at [Github](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/osm-carto.render.xml).

![OSM-carto map style](@site/static/img/map/map-style-osm-carto.png)

### Desert

<Translate android="true" ids="desert_render_descr"/>

![Desert map style](@site/static/img/map/map-style-desert.png)

### Offroad

<Translate android="true" ids="off_road_render_descr"/>

![Offroad map style](@site/static/img/map/map-style-offroad.png)

### Snowmobile

<Translate android="true" ids="snowmobile_render_descr"/>

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

## Map Legend

Map legend is a visual explanation of the symbols used on the map. It typically includes a sample of each symbol (point, line, or area), and a short description of what the symbol means. For example, a short segment of a blue sinuous line may be labeled 'rivers'.
Map legend of OsmAnd maps you can find [here](../map-legend/index.md).

## Map Fonts (Android)

When writing local names in simplified/traditional Chinese, Japanese, and Korean ([Map language](../map/vector-maps#map-language)), incorrect hieroglyphs or even squares may appear. This happens when the device does not support the required fonts. Some issues with these incorrect fonts are described on our GitHub page: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862). To solve this problem, the Android version of OsmAnd has the option to download the required fonts.

Download map fonts for simplified/traditional Chinese, Japanese and Korean maps:  
*<Translate android="true" ids="shared_string_menu,welmode_download_maps,other_menu_group,fonts_header"/>*  

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)


## * Contour Lines

Contour lines are represented as vector maps that are displayed as elevation lines. You need to enable the [Topography plugin](../plugins/contour-lines.md), download the data for your region and configure the display. Feature is not enabled by default and needs to be [purchased first](../purchases/index.md).

Contour lines are available for all map styles and modes and could be configured via the [Contour lines menu](../plugins/contour-lines.md#contour-lines-map).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,index_srtm_ele"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,srtm_plugin_name"/>* 

</TabItem>

</Tabs>  

![Contour lines map style](@site/static/img/map/contour_lines.png)  

More information about [Contour lines](../plugins/contour-lines.md). 


## * Nautical depth

Nautical depth contour lines allow you to define areas of equal depth. They are designed to visualize changes in topography below the water surface. Nautical depth is available for all map styles and modes and can be adjusted whether or not the Nautical map view plugin is enabled.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*   

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_and.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,nautical_depth"/>*  

![nautical_depth_width_and](@site/static/img/map/nautical_depth_width_ios.png)  ![nautical_depth_color_and](@site/static/img/map/nautical_depth_color_ios.png)

</TabItem>

</Tabs>  

More information about [Nautical map view](../plugins/nautical-charts). 


## Show borders

This feature gives you the ability to switch on or off the display of the vector layer of previously downloaded maps from the list of available ones. Its general purpose is to hide areas and borders of downloaded maps when viewing the main map, especially if you have a lot of them.  

The borders of the downloaded maps start displaying at zoom level 7 and are no longer displayed at zoom level 3.

:::tip
Downloaded maps are displayed in *Green* in the Android and iOS versions of OsmAnd when the "Show borders of downloaded maps" feature is switched on. Archived maps in the Android system and those maps that can be updated in iOS are displayed in *Orange*.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*   

![show-borders-andr](@site/static/img/map/show-borders-andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,show_borders_of_downloaded_maps"/>*  

![show-borders-ios](@site/static/img/map/show-borders-ios.png) 

</TabItem>

</Tabs>  


## Configure Map Style

### Map mode

The map is displayed according to the day or night mode selected from the list. And by default and for all new users, the [map style](#default-map-styles) corresponds to the light or dark theme selected in the system settings of your device.

<Tabs groupId="operating-systems">  

<TabItem value="android" label="Android">   

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_mode"/>*

</TabItem>

</Tabs>   

|Parameter          |Description        
|:------------|:---------------|
|**<Translate android="true" ids="daynight_mode_auto"/>**| Switches between day and night modes based on sunset and sunrise data at your location.  |
|**<Translate android="true" ids="daynight_mode_day"/>**| The map view is always displayed in daytime mode. Light theme. |
|**<Translate android="true" ids="daynight_mode_night"/>**| The map view is always displayed in night mode. Dark theme. |
|**<Translate android="true" ids="daynight_mode_sensor"/>**| The light sensor is used for day and night modes. |

### Details  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>*   

</TabItem>

<TabItem value="ios" label="iOS">   
  
*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,nautical_depth"/>*  

</TabItem>

</Tabs>  

|Parameter and Description|
|------------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>**. Showing polygons, trails, points, signs at low zooms on the map. It means you can see more details on your map at low zooms. _Note_: rendering on your device may be not fast.|
|![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>**. Showing type of surface of roads. Colour of the road helps you to understand what is the surface of the road is: asphalt, grass or sand etc. Look at [Map legend](../map-legend/index.md).|
|![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>**. Indicates the quality of the road. Indicates the smoothness (slope) of the road. How smooth your roads are: good, bad, possibly terrible, etc. Look at the [Map legend](../map-legend/index.md) to determine the smoothness of your road.|
|![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>**.  Showing access of roads: private or permissive, or only for emergency, or maybe toll road. Look at [Map legend](../map-legend/index.md) to find your road access. |
|![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>**. Showing green board and labels "LEZ" for [Low Emission Zones](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) in cities. A [Low-Emission Zone (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) is a geographically defined area which seeks to restrict or deter access by certain polluting vehicles with the aim of improving the air quality. It will help you not receive penalties in the green city center.|
|![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>**. Coloring buildings and places have special colours for each category: regular buildings, industrial, commercial, etc. Look at [Map legend](../map-legend/index.md) to find your colour for the building. |
|![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>**. Showing street lighting on the map. On the map, you can see illuminated and not illuminated streets, underground illuminated ways and temporarily illuminated streets. Look at [Map legend](../map-legend/index.md).|
|![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>**. Special setting for mappers. Showed refs, remarks, comments on the map from other mappers. |
|![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>**. Showing nautical depth contours on seas. You need to have a [nautical plugin](../plugins/nautical-charts) and download Nautical maps.|
|![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate android="true" ids="rendering_attr_natureReserves_name"/>**. Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). A nature reserve is a protected area of importance for wildlife, flora, fauna or features of geological or other special interest.|
|![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|  


### Routes

In OsmAnd you can highlight official routes (present on OpenStreetMap) and hiking symbol overlay for your activities. It is very useful for your cycling, hiking, etc. You can select multiple routes at once though they will be displayed as layers and if the road has multiple routes over it only top colour will be visible. If you have some specific rendering styles enabled, you could have a bigger routes variety i.e. for ***Snowmobile style*** you could select ***Snowmobile routes***.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>* 

![Configure Map Routes section](@site/static/img/map/settings_routes_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>*

![Configure Map Routes section](@site/static/img/map/settings_routes_ios_1.png)

</TabItem>

</Tabs> 

|Parameter and Description|   
|------------|
|**<Translate android="true" ids="rendering_attr_showCycleRoutes_name"/>**|
|*<Translate android="true" ids="layer_route"/>*. <Translate android="true" ids="rendering_value_walkingRoutesOSMC_description"/> Look at [Map legend](../map-legend/index.md).|
|![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)|
|*<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>*. <Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_description"/>|
|![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)|
|**<Translate android="true" ids="rendering_attr_showMtbRoutes_name"/>**|
| *<Translate android="true" ids="mtb_scale"/>*. Show trails according to MTB scale. Look at [Map legend](../map-legend/index.md).|
|![Map routes - mtb trails](@site/static/img/map/map-routes-mtb-trails.png)|
| *<Translate android="true" ids="mtb_imba"/>*. Show MTB trails accorgind International Mountain Bicycling Association [MTB IMBA](https://www.imba.com/). Look at [Map legend](../map-legend/index.md).|
|![Map routes - mtb trails](@site/static/img/map/map-routes-mtb_imba-trails.png)|
|**<Translate android="true" ids="rendering_attr_hikingRoutesOSMC_name"/>**|
|*<Translate android="true" ids="rendering_value_walkingRoutesOSMC_name"/>*. [<Translate android="true" ids="rendering_value_walkingRoutesOSMC_description"/>](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).|
|![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)|
|*<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_name"/>*. [<Translate android="true" ids="rendering_value_walkingRoutesScopeOSMC_description"/>](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol) |
|![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)|
|*<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_name"/>*. [<Translate android="true" ids="rendering_value_walkingRoutesOSMCNodes_description"/>](https://wiki.openstreetmap.org/wiki/Node_Networks) |
|![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)|
|**<Translate android="true" ids="rendering_attr_alpineHiking_name"/>**. Showing  classified hiking trails ([SAC scale](https://wiki.openstreetmap.org/wiki/Key:sac_scale) or [CAI scale](https://wiki.openstreetmap.org/wiki/Proposal:Cai_scale)) in mountainous areas with regard to the difficulties to be expected by colour.|
|![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)|
|**<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>**. Showing colored routes of ski slopes. This setting is provided by map style ["Winter and ski"](../map/vector-maps.md#winter-and-ski). |
|![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)|
|**<Translate android="true" ids="rendering_attr_horseRoutes_name"/>**. Showing colored routes and symbols for riding horses.|
|![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)|
|**<Translate android="true" ids="rendering_attr_whiteWaterSports_name"/>**. Showing [icons of access, dangerous areas, tourism of whitewater sports](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). |
|![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)|
|**<Translate android="true" ids="rendering_attr_showRunningRoutes_name"/>**. Used for named, numbered, or otherwise designated running routes used primarily for athletics. Data for these routes are taken from [OpenStreetMap project](https://openstreetmap.org/): The tag [route=running](https://wiki.openstreetmap.org/wiki/Tag:route%3Drunning)|
|![Fitness routes](@site/static/img/map/fitness_1.png)|
|**<Translate android="true" ids="rendering_attr_showFitnessTrails_name"/>**. A fitness trail is a trail or path equipped with obstacles or stations along its length to exercise the human body for the purpose of improving health. Data for these routes are taken from [OpenStreetMap project](https://openstreetmap.org/): The tag [route=fitness_trail](https://wiki.openstreetmap.org/wiki/Tag:route%3Dfitness_trail)|
|![Fitness routes](@site/static/img/map/fitness_route.png) |
| **<Translate android="true" ids="travel_routes"/>** Shows previously uploaded specially configured [user routes](https://osmand.net/blog/routes#generated-travel-routes) taken from OpenStreetMap categories. *Android only*. |
| ![Travel routes](@site/static/img/map/travel_route_2.png) ![Travel routes](@site/static/img/map/travel_routes.png) |


### Transport

When navigating in cities, you need to see public transport in more contrast, as well as stops. You can tap a public transport stop and select one of the public transport routes or stops from the list. Train routes are also displayed in this setting.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,icon_group_transport"/>*   

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_transport"/>*    

</TabItem>

</Tabs>  

|Parameter and Description|   
|------------|
|**<Translate android="true" ids="rendering_attr_transportStops_name"/>**. Showing public transport stops.|
|![Map transport stops](@site/static/img/map/map-transport-stops.png)|
|**<Translate android="true" ids="rendering_attr_publicTransportMode_name"/>**. Showing bus, trolleybus, shuttle routes.|
|![Map transport bus](@site/static/img/map/map-transport-bus.png)|
|**<Translate android="true" ids="rendering_attr_tramTrainRoutes_name"/>**. Showing tram and train routes. |
|![Map transport tram](@site/static/img/map/map-transport-tram.png)|
|**<Translate android="true" ids="rendering_attr_subwayMode_name"/>**. Showing underground routes.|
|![Map transport subway](@site/static/img/map/map-transport-subway.png)|

### Hide

Sometimes we need to hide objects on the map for better vision. For example to hide water while using the [Underlay layer of Satellite online maps](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_hide"/>* 

</TabItem>

</Tabs>  

|Parameter          |Description        
|:------------|:---------------|
|<Translate android="true" ids="rendering_attr_noAdminboundaries_name"/>| Hide regional boundaries inside of countries, but state boundaries are visible. |
|<Translate android="true" ids="rendering_attr_noPolygons_name"/>|Hide all polygons of natural objects, special function for [Underlay/Overlay layer](../map/raster-maps.md#change-layer-parameters-transparency).  |
|<Translate android="true" ids="rendering_attr_hideBuildings_name"/>|Hide all polygons of buildings. |
|<Translate android="true" ids="rendering_attr_hideWaterPolygons_name"/>|Hide all polygons of water (seas, lakes, reservoirs etc.)  |
|<Translate android="true" ids="rendering_attr_hideHouseNumbers_name"/>|Hide house numbers on the map.  |
|<Translate android="true" ids="rendering_attr_showProposed_name"/>|Hide proposed objects, those objects which are planned for a building, but only have a project (projected roads, crossroads, buildings etc.)  |
|<Translate android="true" ids="rendering_attr_hideIcons_name"/>|Hide POI icons from the map. But labels of these POI will be on the map. |
|<Translate android="true" ids="rendering_attr_hidePOILabels_name"/>|Hide POI labels from the map. But icons of these POI will be on the map.  |
|<Translate android="true" ids="rendering_attr_hideUnderground_name"/>| Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing maps on cities from non useful objects.  |
|<Translate android="true" ids="rendering_attr_hideOverground_name"/>|Hide all overground objects. Special for seeing only underground objects like tunnels, passes, etc.|

### Road style

Special settings for roads, where you can change the colors to match the road atlas or add high-contrast roads or bold outlines for roads.    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_roadStyle_name"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_attr_roadStyle_name"/>*

</TabItem>

</Tabs> 

|Parameter and Description|   
|------------|
|**<Translate android="true" ids="rendering_value_default_name"/>**. Default style for highways. Look at [Map legend](../map-legend/index.md).|
|![Map road style default](@site/static/img/map/map-road-style-default.png)|
|**<Translate android="true" ids="rendering_value_germanRoadAtlas_name"/>**. Style of German road atlas.|
|![Map road style german](@site/static/img/map/map-road-style-german.png)|
|**<Translate android="true" ids="rendering_value_americanRoadAtlas_name"/>**. Style of American road atlas.|
|![Map road style american](@site/static/img/map/map-road-style-american.png)|
|**<Translate android="true" ids="rendering_value_highContrastRoads_name"/>**. The high contrast of roads.|
|![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)|
|**<Translate android="true" ids="rendering_value_boldOutline_name"/>**. Bold outline for roads.|
|![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)|

### Text size

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>*     

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,text_size"/>*   

</TabItem>

</Tabs>  

|Example|  
|------------|
|**100%**|
|![Map text size 100%](@site/static/img/map/map-text-size-100.png)|
|**200%**|
|![Map text size 200%](@site/static/img/map/map-text-size-200.png)|

### Map magnifier

This setting helps to change the magnifier of the map. It is applicable for raster & vector maps. For raster maps it applies a magnifying effect, so text labels look bigger or smaller. For vector maps it provides a more or less detailed map, if you put it to a low value it will produce a noisy / slow map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

You can choose this setting by long-click to "+" or "-" button on the screen or:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>*  

</TabItem>

<TabItem value="ios" label="iOS">  

You can choose this setting by long-click to "+" or "-" button on the screen or:  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_magnifier"/>* 

</TabItem>

</Tabs> 

|Example|  
|------------|
|**75%**|
|![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)|
|**200%**|
|![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)|

### Map Language

The Map language option is used to configure the spelling of names on the OsmAnd map for zoom levels 7-20, inclusive. For zoom levels 2-6, the names are displayed in the language set for OsmAnd in the system settings menu (see *[Display language](../personal/global-settings.md#display-language)* article).  

If the names on the map are not translated into the desired language by the OSM community, you can use [transliterated names](https://en.wikipedia.org/wiki/Transliteration): *<Translate android="true" ids="use_latin_name_if_missing"/>* (Android) or *<Translate ios="true" ids="translit_names"/>* (iOS) switcher.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>*

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,map_locale"/>*

</TabItem>

</Tabs>  

|Example|  
|------------|
|**Local names**|
|![Map language local names](@site/static/img/map/map-language-local-names.png)|
|**Ukranian names**|
|![Map language ukranian](@site/static/img/map/map-language-urkanian.png)|
|**Show local names**|
|![Map language local](@site/static/img/map/map-language-show-local.png)|
|**Transliterate names**|
|![Map language transliterate](@site/static/img/map/map-language-transliterate.png)|

## Custom Map style (own map style)
If you have your own or 3rd party custom map style created according to [Specification](../../technical/osmand-file-formats/osmand-rendering-style.md), you can install it on a device in the following ways.
- Copy *.render.xml file on devices & Open with OsmAnd. 
- Rendering styles could be exported & imported via [Standard import / export dialogs](../personal/import-export.md). So if you create an example '*.osf' package which will work as a plugin that could be shared with other people.
- If you have access directly to the External Storage of OsmAnd (Android), you can simply copy it to the **rendering-styles** folder. Read more about it in [Storage specification](../personal/storage.md).

After that, you could select your own map style in the menu.
