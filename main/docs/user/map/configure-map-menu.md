---
sidebar_position: 3
title:  Configure map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

The 'Configure map' menu is an important item on OsmAnd's main menu where you can customize the map display to suit your needs. You can highlight your favorite points, navigation markers, or special points of interest on the map; display specific routes or third-party GPX files; overlay terrain information, satellite imagery, or any other available bitmap images; display public transportation information; and change the map style.


| Android | iOS |
| :---: | :---: |
| ![Configure map_android](@site/static/img/map/configure-map-android.png) | ![Configure map_ios](@site/static/img/map/configure-map-ios.png) |

The **<Translate android="true" ids="configure_map"/>** menu is divided into two categories:
- [Map style parameters](#map-style-parameters). **<Translate android="true" ids="map_widget_map_rendering"/>** (or **<Translate ios="true" ids="map_widget_renderer"/>**) is a group of settings that allow you to change the way the main map is displayed.  
- [Map layers](#map-layers). These layers allow you to place information on top of (or underneath) the main map layer, but do not change the display of the map itself.  

**Notes:** 
- To change the information on the screen (widgets, icons), you can make settings in the [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md).
- The Configure map settings depend on your [profile](../personal/profiles.md).  

## Map Layers
- [Vector Map Layer](../map/vector-maps.md) - displays all vector map information including OpenStreetMap, Contour lines, Nautical data.
- [Map Raster sources](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer) - select underlay / main source / overlay map with transparency levels.
- [Terrain](../map/raster-maps.md#hillshade--slopeg) - display raster slope or hillshade information.
- [Borders of downloaded maps](../map/vector-maps.md#show-borders) - display all borders of downloaded maps on the main map layer.

## Map Data Layers
   - [Favorites](../map/point-layers-on-map.md) - display favorites points.
   - [POI](../map/point-layers-on-map.md) - display points of interests of selected categories.
   - [Map markers](../map/point-layers-on-map.md) - display map markers.
   - [Overlay labels](../map/point-layers-on-map.md) - show names of points, favorites on the map.
   - [Transport](../map/vector-maps.md#transport) - show public transport stops.
   - [Tracks](../map/tracks-on-map.md) - display imported, planned or recorded tracks over the map.
   - [Street level imagery](../plugins/mapillary.md#viewing-images) - display points with available street-level imagery.
   - [Travel guides](../plan-route/travel-guides.md) - display travel guides on the map.
   - [Wikipedia](../plugins/wikipedia.md) - highlight wikipedia articles linked to the map.
   - [Other plugin layers](../plugins/index.md) - many plugins add own layers with extra information.

## Map style parameters

The map style parameters depend on the main map style displayed on the map. You can read more about this in the [Map Styles article](../map/vector-maps).  
   - [Map style](../map/vector-maps.md#default-map-styles) - OsmAnd (City), Topo, Nautical, and others.
   - [Map mode](../map/vector-maps.md#map-mode) - select to view the map or start navigating.
   - [Map magnifier](../map/vector-maps.md#map-magnifier) - to display the map in more or less detail.
   - [Text size](../map/vector-maps.md#text-size) - allows you to increase or decrease the size of the text on the map.
   - [Map language](../map/vector-maps.md#map-language) - select preferred language displayed on the map.
   - [Details](../map/vector-maps.md#details) - select to highlight specific objects.
   - [Hide](../map/vector-maps.md#hide) - hide specific objects.
   - [Routes](../map/vector-maps.md#routes) - allows you to highlight specific routes and their symbols.  

   
## UI Customization (Android)

For each selected profile in the Android system, you can change the order of the <Translate android="true" ids="configure_map"/> menu items, hide the items, reset the default settings, or copy them from another profile. This will help improve your interaction with the OsmAnd app.  
   
*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>*  

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)


