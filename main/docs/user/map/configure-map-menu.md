---
sidebar_position: 4
title:  Configure Map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Overview {#overview}

The **Configure map** menu is an important item in the OsmAnd *Main Menu*, where you can customize the map display to suit your needs. You can highlight favorite points, navigation markers, or special points of interest on the map, display specific routes or third-party GPX files, overlay terrain information, satellite images, or any other available raster images, display public transportation information, and change the map style.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Section **Show**:  

![Configure map android](@site/static/img/map/configure_map_show1_andr.png)  ![Configure map android](@site/static/img/map/configure_map_show2_andr.png)  

Section **Topography**:  

![Configure map android](@site/static/img/map/configure_map_topography_andr.png)  

Section **OpenStreetMap**:  

![Configure map android](@site/static/img/map/configure_map_osm_andr.png)  

Sections **Routes and Map rendering**:  

![Configure map android](@site/static/img/map/configure_map_routes&Map_rendering_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Configure map ios](@site/static/img/map/configure-map-ios.png)

</TabItem>

</Tabs>


The **<Translate android="true" ids="configure_map"/>** menu is divided into two categories:

- [Map style parameters](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (or **<Translate ios="true" ids="map_widget_renderer"/>**) is a group of settings that allow you to change the way the main map is displayed.  
- [Map layers](#map-layers). These layers allow you to place information on top of (or underneath) the main map layer but do not change the display of the map itself.  

**Notes:**

- To change the information on the screen (widgets, icons), you can make settings in the [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- The Configure map settings depend on your [profile](../personal/profiles.md).
- Pay attention - the Configure map menu **closes** when you tap the map field.

## Map Layers {#map-layers}

- [Vector Map Layer](../map/vector-maps.md) - displays all vector map information including OpenStreetMap, Contour lines, and Nautical data.
- [Map Raster sources](../map/raster-maps.md#select-raster-maps) - allows selecting underlay / main-source / overlay map with transparency levels.
- [Terrain](../plugins/topography.md#hillshade-slope-and-altitude-layers) - displays slope / hillshade information, 3D Relief.
- [Borders of downloaded maps](../map/vector-maps.md#show-borders) - displays all borders of downloaded maps on the main map layer.
- [Coordinate grid](../map/vector-maps.md#coordinates-grid) - control the visibility of the coordinates grid on the map.

## Map Data Layers {#map-data-layers}

   - [Favorites](../map/point-layers-on-map.md) - displays favorites points.
   - [POI](../map/point-layers-on-map.md) - displays points of interests of selected categories.
   - [Map markers](../map/point-layers-on-map.md) - displays map markers.
   - [Overlay labels](../map/point-layers-on-map.md) - shows names of points, and favorites on the map.
   - [Transport](../map/vector-maps.md#transport) - shows public transport stops.
   - [Tracks](../map/tracks/index.md) - displays imported, planned, or recorded tracks over the map.
   - [Street level imagery](../plugins/mapillary.md#map-layer) - displays points with available street-level imagery.
   - [Travel guides](../plan-route/travel-guides.md) - displays travel guides on the map.
   - [Wikipedia](../plugins/wikipedia.md) - highlights Wikipedia articles linked to the map.
   - [Other plugin layers](../plugins/index.md#configure-plugin) - many plugins add their layers with extra information.

## Map style parameters {#map-style-parameters}

The map style settings depend on the main map style displayed. You can read more about it in the [Map Styles article](../map/vector-maps).

   - [Map style](../map/vector-maps.md#default-map-styles) - includes OsmAnd (City), Topo, Nautical, and others.
   - [Map mode](../map/vector-maps.md#map-mode) - allows you to select the map view and navigation depending on the time of day.
   - [Map magnifier](../map/vector-maps.md#map-magnifier) - allows changing the magnification of the map.
   - [Text size](../map/vector-maps.md#text-size) - allows increasing or decreasing the text size on the map.
   - [Map language](../map/vector-maps.md#map-language) - allows selecting the preferred language displayed on the map.
   - [Details](../map/vector-maps.md#details) - shows specific objects.
   - [Hide](../map/vector-maps.md#hide) - hides specific objects.
   - [Routes](../map/vector-maps.md#routes) - allows highlighting routes and their symbols.  


## UI Customization (Android) {#ui-customization-android}

For each selected profile in the Android system, you can change the order of the <Translate android="true" ids="configure_map"/> menu items, hide the items, reset the default settings, or copy them from another profile. This will help improve your interaction with the OsmAnd app.  

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)


> *Last updated: February 2025*
