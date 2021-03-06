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


'Configure map' menu is a central place where you could configure map display for your needs, i.e. highlight Favorite points, Navigation markers or special Points of Interests on the map; display specific routes or 3rd party GPX files; overlay the map with relief information, satellite imagery or any other available raster map; display public transport information and change the map style.


| Android | iOS |
| :---: | :---: |
| ![Configure map_android](@site/static/img/map/configure-map-android.png) | ![Configure map_ios](@site/static/img/map/configure-map-ios.png) |

**<Translate android="true" ids="configure_map"/>** menu divides into 2 categories:
- [Map style parameters](#map-style-parameters) - **<Translate android="true" ids="map_widget_map_rendering"/>** or **<Translate ios="true" ids="map_settings_style"/>** groups all parameters that allow to change how the main map is displayed.
- [Map layers](#map-layers). These layers allow to put information on top (or under) of the main map layer but it doesn't change the display of the map itself.


**Notes:** 
- In order to change screen information (widgets, icons) you can set parametres in [<Translate android="true" ids="layer_map_appearance"/>](../widgets/index.md)
- Configure map settings are [profile dependent](../personal/profiles.md)

## Map Layers
   - [Vector Map Layer](../map/vector-maps.md) - displays all vector map information including OpenStreetMap, Contour lines, Nautical data.
   - [Map Raster sources](../map/raster-maps.md#select-map-as-main--underlay--overlay-layer) - select underlay / main source / overlay map with transparency levels.
   - [Terrain](../map/raster-maps.md#hillshade--slopeg) - display raster slope or hillshade information.

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
Map style parameters are dependent on the main map style be displayed on the map. You can read more about it in [Map Styles article](../map/vector-maps).
   - [Map style](../map/vector-maps.md#default-map-styles) - OsmAnd (City), Topo, Nautical and others.
   - [Map mode](../map/vector-maps.md#map-mode) - select to browse map or to run a navigation.
   - [Map magnifier](../map/vector-maps.md#map-magnifier) - more or less detailed map display.
   - [Text size](../map/vector-maps.md#text-size) - increase or decrease text size on the map.
   - [Map language](../map/vector-maps.md#map-language) - select preferred language displayed on the map.
   - [Details](../map/vector-maps.md#details) - highlight specific objects.
   - [Hide](../map/vector-maps.md#hide) - hide specific objects.
   - [Routes](../map/vector-maps.md#routes) - highlight specific routes and their symbols.
   
## UI Customization (Android)
   
You can reorder or hide items from the <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="configure_map"/> per selected profile, reset to default or copy from another profile.
   
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>

<p> </p>

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)


