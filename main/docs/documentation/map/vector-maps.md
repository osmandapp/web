---
sidebar_position: 4
title:  Vector maps (Map styles)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Vector maps are designed to be a default source of map data for OsmAnd, so they need to be downloaded to the device. Vector maps support a huge range of map styles for many activities like cycling, hiking, riding by car or snowmobile, etc. Each map style could be tuned to highlight or hide specific objects and switch between day and night mode. Map vector data could be augmented by vector data and displayed with default Map style, for example, Contour Lines information. You can create your own map style OsmAnd to display required information.

## Use cases

Configurable & Custom Map styles are one of the main advantages of OsmAnd. Each user can customize the display of the map for himself and his hobbies, configure to show or hide certain map objects, sizes, and colors of these objects and change the scale on which to display certain objects.

## Default Map styles

OsmAnd offers you numerous map styles and data layers to fit the purpose by default. Let's take a glance at the main ones for day and night modes:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_offline"/>

### OsmAnd

OsmAnd style is the default style of map rendering, general-purpose style. It offers details about the city such as streets, buildings, transport stops, etc. Simplified rendering to have cleaner maps in the populated cities. Key features: contour lines, routes, surface quality, access restrictions, road shields, paths rendering according to SAC scale, whitewater sports features.

![OsmAnd map style](@site/static/img/map/map-style-osmand-with-routes.png)

### Touring view

{% data variables.android-values.touring_view_render_descr %}

![Touring view map style](@site/static/img/map/map-style-touring.png)

### UniRS and LightRS

{% data variables.android-values.unirs_render_descr %}
UniRS and LightRS styles are author styles that render the basic map information but in different color schemes.

UniRS style: {% data variables.android-values.unirs_render_descr %}

![UniRS map style](@site/static/img/map/map-style-unirs.png)

LightRS style: {% data variables.android-values.light_rs_render_descr %}

![LightRS map style](@site/static/img/map/map-style-lightrs.png)

### Nautical 

{% data variables.android-values.nautical_render_descr %} Read more about [Nautical maps](/osmand/plugins/nautical-charts).

![Nautical map style](@site/static/img/map/map-style-nautical.png)

### Winter and ski

{% data variables.android-values.ski_map_render_descr %}
Winter and ski style is designed to help you navigate winter sports locations: you'll be able to see ski pistes and other details such as the complexity of skiing tracks and ski lift markers. Key features: renders pistes, aerial ways, and other ski features in a convenient way. Less distracting secondary map objects. Read more about [Ski maps](/osmand/plugins/ski-maps).

![Winter & Ski map style](@site/static/img/map/map-style-winter-ski.png)

### Topo

For hiking, trekking, and nature cycling. Readable outdoors. Contrasting roads and natural objects, different route types, advanced contour line options, extra details. Adjusting "Surface integrity" distinguishes road quality.

![Topo map style](@site/static/img/map/map-style-topo.png)

### Mapnik

{% data variables.android-values.mapnik_render_descr %}

![Mapnik map style](@site/static/img/map/map-style-mapnik.png)

### Desert

{% data variables.android-values.desert_render_descr %}

![Desert map style](@site/static/img/map/map-style-desert.png)

### Offroad

{% data variables.android-values.off_road_render_descr %}

![Offroad map style](@site/static/img/map/map-style-offroad.png)

### Snowmobile

{% data variables.android-values.snowmobile_render_descr %}

![Snowmobile map style](@site/static/img/map/map-style-snowmobile.png)

## Map Legend

Map legend is a visual explanation of the symbols used on the map. It typically includes a sample of each symbol (point, line, or area), and a short description of what the symbol means. For example, a short segment of a blue sinuous line may be labeled 'rivers'.
Map legend of OsmAnd maps you can find [here](https://osmand.net/help-online/map-legend/).

## Map Fonts (Android)

The spelling of local names in simplified / traditional chinese, japanese, korean languages ([Map language](https://docs.osmand.net/en/main@latest/osmand/map/vector-maps#map-language)) could be shown in erroneous hieroglyphs or even in squares. This happens when the device does not support the required fonts. Some issues with these incorrect fonts on our Github page: [3911](https://github.com/osmandapp/OsmAnd/issues/3911), [8187](https://github.com/osmandapp/OsmAnd/issues/8187), [9400](https://github.com/osmandapp/OsmAnd/issues/9400), [10862](https://github.com/osmandapp/OsmAnd/issues/10862). To do this, OsmAnd for Android has the ability to download the necessary fonts for download.

Download map fonts for simplified / traditional Chinese, Japanese, Korean maps:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,welmode_download_maps,other_menu_group,fonts_header"/>

<p>  </p>

![Map fonts Android version](@site/static/img/map/map_fonts.png) ![Map fonts version](@site/static/img/map/map_fonts_1.png)

## Contour Lines

Contour lines are represented as vector maps that are displayed as elevation lines. You need to enable [Contour lines Plugin](/osmand/plugins/contour-lines), download the data for your region and configure the display. Feature is not enabled by default and needs to be [purchased first](/osmand/purchases).

Contour lines are available for all map styles and modes and could be configured via [Contour lines Menu](/osmand/plugins/contour-lines#contour-lines-settings).

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,index_srtm_ele"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,product_title_srtm"/>

<p> </p>

![Contour lines map style](@site/static/img/map/contour_lines.png)


More information about [Contour lines](/osmand/plugins/contour-lines). 

## Configure Map Style

### Map mode

During day and night, you need to use mode for the map. [Map styles](#default-map-styles) have night and day mode styles. In this menu, you find the time of sunrise and sunset.

In order to change {% data variables.android-values.daynight%}:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_mode"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,map_mode"/>

<p> </p>

Here you can choose:

|Parameter          |Description        
|:------------|:---------------|
|**{% data variables.android-values.daynight_mode_auto %}**|Automated day/night view switching. |
|**{% data variables.android-values.daynight_mode_day %}**|Switching on day mode only.|
|**{% data variables.android-values.daynight_mode_night %}**|Switching on night mode only.|
|**{% data variables.android-values.daynight_mode_sensor %}**|Using a light sensor for day/night mode.|

### Details

In {% data variables.android-values.rendering_category_details %} menu you can show or hide the next additional map details:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,res_details"/>

<p> </p>

|Parameter and Description|
|------------|
|**<Translate ios="true" ids="rendering_attr_moreDetailed_name"/>: Showing polygons, trails, points, signs at low zooms on the map. It means you can see more details on your map at low zooms. _Note_: rendering on your device may be not fast.|
|![Map parameter - More detailed](@site/static/img/map/map-parameter-more-details.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaces_name"/>: Showing type of surface of roads. Color of the road helps you to understand what is the surface of the road is: asphalt, grass or sand etc. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map parameter - Road surface](@site/static/img/map/map-parameter-road-surface.png)|
|**<Translate ios="true" ids="rendering_attr_showSurfaceGrade_name"/>: Showing smoothness (grade) of the road. What smoothness is of your roads: good, bad or maybe horrible and etc: good, bad or maybe horrible and etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road smoothness.|
|![Map parameter - Road smoothness](@site/static/img/map/map-parameter-road-smoothness.png)|
|**<Translate ios="true" ids="rendering_attr_showAccess_name"/>:  Showing access of roads: private or permissive, or only for emergency, or maybe toll road. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your road access. |
|![Map parameter - Road access](@site/static/img/map/map-parameter-road-access.png)|
|**<Translate ios="true" ids="rendering_attr_showLez_name"/>: Showing green board and labels "LEZ" for [Low Emission Zones](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) in cities. A [Low-Emission Zone (LEZ)](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone) is a geographically defined area which seeks to restrict or deter access by certain polluting vehicles with the aim of improving the air quality. It will help you not receive penalties in the green city center.|
|![Map parameter - Low emission zones](@site/static/img/map/map-parameter-low-emission-zones.png)|
|**<Translate ios="true" ids="rendering_attr_coloredBuildings_name"/>: Coloring buildings and places have special colors for each category: regular buildings, industrial, commercial, etc. Look at [Map legend](https://osmand.net/help-online/map-legend/) to find your color for the building. |
|![Map parameter - Coloured buildings](@site/static/img/map/map-parameter-coloured-buildings.png)|
|**<Translate ios="true" ids="rendering_attr_streetLighting_name"/>: Showing street lighting on the map. On the map, you can see illuminated and not illuminated streets, underground illuminated ways and temporarily illuminated streets. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map parameter - Street lightning](@site/static/img/map/map-parameter-street-lighting.png)|
|**<Translate ios="true" ids="rendering_attr_OSMMapperAssistant_name"/>:Special setting for mappers. Showed refs, remarks, comments on the map from other mappers. |
|![Map parameter - Map assistant](@site/static/img/map/map-parameter-map-assistant.png)|
|**<Translate ios="true" ids="rendering_attr_depthContours_name"/>: Showing nautical depth contours on seas. You need to have a [nautical plugin](/osmand/plugins/nautical-charts) and download Nautical maps.|
|![Map parameter - Depth contours](@site/static/img/map/map-parameter-depth-contours.png)|
|**<Translate ios="true" ids="rendering_attr_natureReserves_name"/>: Showing green board and labels "NR" for [Nature reserve territory](https://wiki.openstreetmap.org/wiki/Tag:leisure%3Dnature_reserve). A nature reserve is a protected area of importance for wildlife, flora, fauna or features of geological or other special interest.|
|![Map parameter - Nature reserve](@site/static/img/map/nature-reserve.png)|

### Routes

In OsmAnd you can highlight official routes (present on OpenStreetMap) and hiking symbol overlay for your activities. It is very useful for your cycling, hiking, etc. You can select multiple routes at once though they will be displayed as layers and if the road has multiple routes over it only top color will be visible. If you have some specific rendering styles enabled, you could have a bigger routes variety i.e. for **_Snowmobile style_** you could select **_Snowmobile routes_**.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,rendering_category_routes"/>

<p> </p>

![Configure Map Routes section](@site/static/img/map/configure_map_routes_android.png) 

|Parameter and Description|   
|------------|
|**_{% data variables.android-values.rendering_attr_showCycleRoutes_name %}_**|
|{% data variables.android-values.layer_route %}: {% data variables.android-values.rendering_value_walkingRoutesOSMC_description %}. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map routes - cycle routes](@site/static/img/map/map-routes-cycle-routes.png)|
|{% data variables.android-values.rendering_value_walkingRoutesOSMCNodes_name %}: {% data variables.android-values.rendering_value_walkingRoutesOSMCNodes_description %}.|
|![Map routes - cycle-node-networks](@site/static/img/map/map-routes-cycle-node-networks.png)|
|**{% data variables.android-values.rendering_attr_showMtbRoutes_name %}**: Showing colored MTB trails. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map routes - mtb trails](@site/static/img/map/map-routes-mtb-trails.png)|
|**_{% data variables.android-values.rendering_attr_hikingRoutesOSMC_name %}_**|
|{% data variables.android-values.rendering_value_walkingRoutesOSMC_name %}: [{% data variables.android-values.rendering_value_walkingRoutesOSMC_description %}](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol).|
|![Map routes - hiking osmc](@site/static/img/map/map-routes-hiking-osmc.png)|
|{% data variables.android-values.rendering_value_walkingRoutesScopeOSMC_name %}: [{% data variables.android-values.rendering_value_walkingRoutesScopeOSMC_description %}](https://wiki.openstreetmap.org/wiki/Key:osmc:symbol#Maps_that_show_osmc:symbol). |
|![Map routes - hiking network](@site/static/img/map/map-routes-hiking-network.png)|
|{% data variables.android-values.rendering_value_walkingRoutesOSMCNodes_name %}: [{% data variables.android-values.rendering_value_walkingRoutesOSMCNodes_description %}](https://wiki.openstreetmap.org/wiki/Node_Networks). |
|![Map routes - hiking node networks](@site/static/img/map/map-routes-hiking-node-networks.png)|
|**{% data variables.android-values.rendering_attr_alpineHiking_name %}**: Showing  [classified hiking trails](https://wiki.openstreetmap.org/wiki/Key:sac_scale) in mountainous areas with regard to the difficulties to be expected by color.|
|![Map routes - alpine hiking](@site/static/img/map/map-routes-alpine-hiking.png)|
|**{% data variables.android-values.rendering_attr_pisteRoutes_name %}**: Showing colored routes of ski slopes. This setting is supported by [map style "Winter and ski"](/osmand/map/vector-maps#winter-and-ski).|
|![Map routes - ski slopes](@site/static/img/map/map-routes-ski-slopes.png)|
|**{% data variables.android-values.rendering_attr_horseRoutes_name %}**: Showing colored routes and symbols for riding horses.|
|![Map routes - horse routes](@site/static/img/map/map-routes-horse.png)|
|**{% data variables.android-values.rendering_attr_whiteWaterSports_name %}**: Showing [icons of access, dangerous areas, tourism of whitewater sports](https://wiki.openstreetmap.org/wiki/Whitewater_sports#Whitewater_Map). |
|![Map routes - whitewater sport](@site/static/img/map/map-routes-whitewater-sport.png)|


### Transport

In navigation in cities, you need to see public transport in more contrast and stops. Of course, this setting shows train routes too.

You can click to a public transport stop and choose one of the public transport routes. You see all routes with stops.

In OsmAnd  we can choose special rendering for these needed:

{% data variables.product.android_button_seq %} {% data variables.android-values.shared_string_menu %} → {% data variables.android-values.configure_map %} → {% data variables.android-values.shared_string_show %} → {% data variables.android-values.icon_group_transport %} 

{% data variables.product.ios_button_seq %} {% data variables.ios-values.menu %} → {% data variables.ios-values.configure_map %} → {% data variables.ios-values.map_settings_style %} → {% data variables.ios-values.rendering_category_transport %}

|Parameter and Description|   
|------------|
|**{% data variables.android-values.rendering_attr_transportStops_name %}**: Showing public transport stops.|
|![Map transport stops](@site/static/img/map/map-transport-stops.png)|
|**{% data variables.android-values.rendering_attr_publicTransportMode_name %}**: Showing bus, trolleybus, shuttle routes.|
|![Map transport bus](@site/static/img/map/map-transport-bus.png)|
|**{% data variables.android-values.rendering_attr_tramTrainRoutes_name %}**: Showing tram and train routes. |
|![Map transport tram](@site/static/img/map/map-transport-tram.png)|
|**{% data variables.android-values.rendering_attr_subwayMode_name %}**: Showing underground routes.|
|![Map transport subway](@site/static/img/map/map-transport-subway.png)|

### Hide

Sometimes we need to hide objects on the map for better vision. For example to hide water while using the [Underlay layer of Satellite online maps](/osmand/map/raster-maps#select-map-as-main--underlay--overlay-layer).
In order to hide some objects on the map you can choose them in this menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,rendering_category_hide"/>

<p> </p>

|Parameter          |Description        
|:------------|:---------------|
|{% data variables.android-values.rendering_attr_noAdminboundaries_name %}| Hide regional boundaries inside of countries, but state boundaries are visible. |
|{% data variables.android-values.rendering_attr_noNatureReserveBoundaries_name %}| Hide nature boundaries (national parks etc.) |
|{% data variables.android-values.rendering_attr_noPolygons_name %}|Hide all polygons of natural objects, special function for [Underlay/Overlay layer](/osmand/map/raster-maps#change-layer-parameters-transparency).  |
|{% data variables.android-values.rendering_attr_hideBuildings_name %}|Hide all polygons of buildings. |
|{% data variables.android-values.rendering_attr_hideWaterPolygons_name %}|Hide all polygons of water (seas, lakes, reservoirs etc.)  |
|{% data variables.android-values.rendering_attr_hideHouseNumbers_name %}|Hide house numbers on the map.  |
|{% data variables.android-values.rendering_attr_hideProposed_name %}|Hide proposed objects, those objects which are planned for a building, but only have a project (projected roads, crossroads, buildings etc.)  |
|{% data variables.android-values.rendering_attr_hideIcons_name %}|Hide POI icons from the map. But labels of these POI will be on the map. |
|{% data variables.android-values.rendering_attr_hidePOILabels_name %}|Hide POI labels from the map. But icons of these POI will be on the map.  |
|{% data variables.android-values.rendering_attr_hideUnderground_name %}| Hide all underground objects, like tunnels, passes, floors, etc. Special for clearing maps on cities from non useful objects.  |
|{% data variables.android-values.rendering_attr_hideOverground_name %}|Hide all overground objects. Special for seeing only underground objects like tunnels, passes, etc.|

### Road style

Special settings for roads. When we change colors according to road Atlas or add high contrast of roads or bold outline for roads.

|Parameter and Description|   
|------------|
|**{% data variables.android-values.rendering_value_default_name %}**: Default style for highways. Look at [Map legend](https://osmand.net/help-online/map-legend/).|
|![Map road style default](@site/static/img/map/map-road-style-default.png)|
|**{% data variables.android-values.rendering_value_germanRoadAtlas_name %}**: Style of German road atlas.|
|![Map road style german](@site/static/img/map/map-road-style-german.png)|
|**{% data variables.android-values.rendering_value_americanRoadAtlas_name %}**: Style of American road atlas.|
|![Map road style american](@site/static/img/map/map-road-style-american.png)|
|**{% data variables.android-values.rendering_value_highContrastRoads_name %}**: The high contrast of roads.|
|![Map road style high contrast](@site/static/img/map/map-road-style-high-contrast.png)|
|**{% data variables.android-values.rendering_value_boldOutline_name %}**: Bold outline for roads.|
|![Map road style bold outline](@site/static/img/map/map-road-style-bold-outline.png)|

### Text size

This setting helps to change the text size for names on the map:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,text_size"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,map_settings_text_size"/>

<p> </p>

|Example|  
|------------|
|**100%**|
|![Map text size 100%](@site/static/img/map/map-text-size-100.png)|
|**200%**|
|![Map text size 200%](@site/static/img/map/map-text-size-200.png)|

### Map magnifier

This setting helps to change the magnifier of the map. It is applicable for raster & vector maps. For raster maps it applies a magnifying effect, so text labels look bigger or smaller. For vector maps it provides a more or less detailed map, if you put it to a low value it will produce a noisy / slow map. You can choose this setting by long-click to "+" or "-" button on the screen or:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_magnifier"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,map_settings_map_magnifier"/>

<p> </p>

|Example|  
|------------|
|**75%**|
|![Map magnifier 75%](@site/static/img/map/map-magnifier-75.png)|
|**200%**|
|![Map magnifier 200%](@site/static/img/map/map-magnifier-200.png)|

### Map Language

This setting allows using of any language for names on the map. If names don't have translation we can choose transliteration:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_locale"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,configure_map,map_settings_style,sett_lang"/>

<p> </p>

|Example|  
|------------|
|**Local names**|
|![Map language local names](@site/static/img/map/map-language-local-names.png)|
|**Russian**|
|![Map language russian](@site/static/img/map/map-language-russian.png)|

## Custom Map style (own map style)
If you have your own or 3rd party custom map style created according to [Specification](/docs/technical-documentation/osmand-file-formats/osmand-rendering-style), you can install it on a device in the following ways.
- Copy *.render.xml file on devices & Open with OsmAnd. 
- Rendering styles could be exported & imported via [Standard import / export dialogs](/osmand/personal/import-export). So if you create an example '*.osf' package which will work as a plugin that could be shared with other people.
- If you have access directly to the External Storage of OsmAnd (Android), you can simply copy it to the **rendering-styles** folder. Read more about it in [Storage specification](/osmand/personal/storage).

After that, you could select your own map style in the menu.
