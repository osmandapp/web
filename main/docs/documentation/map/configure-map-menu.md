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
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

'Configure map' menu is a central place where you could configure map display for your needs, i.e. highlight Favorite points, Navigation markers or special Points of Interests on the map; display specific routes or 3rd party GPX files; overlay the map with relief information, satellite imagery or any other available raster map; display public transport information and change the map style.


| Android | iOS |
| :---: | :---: |
| ![Configure map_android](@site/static/img/map/configure-map-android.png) | ![Configure map_ios](@site/static/img/map/configure-map-ios.png) |

**<Translate android="true" ids="configure_map"/>** menu divides into 2 categories:
- [Map style parameters](#map-style-parameters) - **<Translate android="true" ids="map_widget_map_rendering"/>** or **<Translate android="true" ids="map_settings_style"/>** groups all parameters that allow to change how the main map is displayed.
- [Map layers](#map-layers). These layers allow to put information on top (or under) of the main map layer but it doesn't change the display of the map itself.


**Notes:** 
- In order to change screen information (widgets, icons) you can set parametres in [<Translate android="true" ids="layer_map_appearance"/>](/docs/documentation/widgets)
- Configure map settings are [profile dependent](/docs/documentation/personal/profiles)

## Map Layers
   - [Vector Map Layer](//docs/documentation/map/vector-maps) - displays all vector map information including OpenStreetMap, Contour lines, Nautical data.
   - [Map Raster sources](/docs/documentation/map/raster-maps#select-map-as-main--underlay--overlay-layer) - select underlay / main source / overlay map with transparency levels.
   - [Terrain](/docs/documentation/map/raster-maps#hillshade--slopeg) - display raster slope or hillshade information.

## Map Data Layers
   - [Favorites](/docs/documentation/map/point-layers-on-map) - display favorites points.
   - [POI](/docs/documentation/map/point-layers-on-map) - display points of interests of selected categories.
   - [Map markers](/docs/documentation/map/point-layers-on-map) - display map markers.
   - [Overlay labels](/docs/documentation/map/point-layers-on-map) - show names of points, favorites on the map.
   - [Transport](/docs/documentation/map/vector-maps#transport) - show public transport stops.
   - [Tracks](/docs/documentation/map/tracks-on-map) - display imported, planned or recorded tracks over the map.
   - [Street level imagery](/docs/documentation/plugins/mapillary#viewing-images) - display points with available street-level imagery.
   - [Travel guides](/docs/documentation/plan-route/travel-guides) - display travel guides on the map.
   - [Wikipedia](/docs/documentation/plugins/wikipedia) - highlight wikipedia articles linked to the map.
   - [Other plugin layers](/docs/documentation/plugins) - many plugins add own layers with extra information.

## Map style parameters
Map style parameters are dependent on the main map style be displayed on the map. You can read more about it in [Map Styles article](/docs/documentation/map/vector-maps).
   - [Map style](/docs/documentation/map/vector-maps#default-map-styles) - OsmAnd (City), Topo, Nautical and others.
   - [Map mode](/docs/documentation/map/vector-maps#map-mode) - select to browse map or to run a navigation.
   - [Map magnifier](/docs/documentation/map/vector-maps#map-magnifier) - more or less detailed map display.
   - [Text size](/docs/documentation/map/vector-maps#text-size) - increase or decrease text size on the map.
   - [Map language](/docs/documentation/map/vector-maps#map-language) - select preferred language displayed on the map.
   - [Details](/docs/documentation/map/vector-maps#details) - highlight specific objects.
   - [Hide](/docs/documentation/map/vector-maps#hide) - hide specific objects.
   - [Routes](/docs/documentation/map/vector-maps#routes) - highlight specific routes and their symbols.
   
## UI Customization (Android)
   
You can reorder or hide items from the <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="configure_map"/> per selected profile, reset to default or copy from another profile.
   
<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,configure_map"/>

<p> </p>

![Configure map items ](@site/static/img/settings/configure-screen-ui-customization.png)


