---
sidebar_position: 7
title:  Points on the Map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


## Overview

The map can display points such as [Favorites](#favorites), [Points of Interest](#points-of-interest-pois), [Markers](#markers), [Wikipedia](#-wikipedia), [Search results](#search-results-poi), [Audio and Video notes](#-audio--video-points-android), and [OSM editing](#-osm-edit-points).


## Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_favorites"/>*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

[Favorites](../personal/favorites.md) are special points marked by users. By default, they appear as yellow stars on the map, although they can be customized with any color, shape, and icon. They become visible on the map starting at zoom level 6.

:::info
In the Android version of OsmAnd, you can display only certain group favorites on the map and during the search. Go to *Menu → My Places → Favorites*, tap &#8942; and choose either *Show it on the map* or not.
:::


## Favorite and POI Names

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,configure_map,layer_amenity_label"/>*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>

By default, Favorites and points of interest (POI) are displayed without names, so as not to clutter up the map with text. You can enable names in the Configure map menu.  


## Points of Interest (POIs)

Enable or disable points of interest of **selected** type on the map:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

[Points of interest (POIs)](https://wiki.openstreetmap.org/wiki/Points_of_interest) are specific points highlighted with an icon on the map. They represent interesting or useful places and objects and are a part of [Vector Maps](../map/vector-maps.md). The most notable POIs are displayed on the map automatically. However, you can select a specific type of POIs (i.e. Restaurants) and they all will be highlighted on the map within an **orange circle** (from Zoom level 9). You can find detailed information about the point of interest in the [Context menu](../map/map-context-menu.md) that appears on a [short tap](../map/map-context-menu.md#select-an-object-short-tap) on the point.  


### POI Types

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

You can select one or many from standard OsmAnd POI types, or make your own [POI filter](../search/search-poi.md) and select it to display POI on the map.

**Android**. Tap the lower left button to switch between selecting one or more points of interest.


### Map Style POI

Hide POI from map style:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*

![POI on map style](@site/static/img/map/poi_layer.png) ![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)

Each POI type in OsmAnd assigned a specific icon and color. POI's [zoom level](../map/vector-maps.md#details) and design could be different in some [map styles](../map/vector-maps.md#default-map-styles).  

[Read more](../map/vector-maps.md#hide).


## Markers

Follow the path to the available markers and their settings:

- **Android**: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*  
- **iOS**: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*

![Map markers Android](@site/static/img/map/map_markers_android.png) ![Map markers iOS](@site/static/img/map/map_markers_ios.png)

[Map markers](../personal/markers.md) are temporary points indicated on the map in the form of flags. Their appearance can be configured with **arrows** (Arrows on the map) and **distance indication** (Direction lines).  

You can read more about markers appearance in this [article](../personal/markers#appearance-on-the-map).


## Track Waypoints

![Track on map](@site/static/img/map/track_point_on_map.png)

Track points (waypoints) are part of Track (GPX) files. These points are displayed automatically if the track is on the map. They look & could be configured similar to [Favorites](#favorites) - icon, names, color, shape. How to create and add Waypoint, read [here](../map/tracks/track-context-menu.md#add-waypoint-to-a-track).  

[Read more](../map/tracks/index.md) about tracks on the map.


## Search Results (POI)

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)

Search results could be displayed on the map as a special POIs layer. During the search, tap a special row (**<Translate android="true" ids="shared_string_show_on_map"/>**) to display POIs on the map.  

To switch off POIs, hit **X** in the top right corner.  

Read more about [search](../search/index.md).


## * Street-Level Imagery

Enable or disable Street-level imagery on the map:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*  
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*

![Mapillary filter](@site/static/img/map/mapillary_filter.png) ![Mapillary street view](@site/static/img/map/mapillary_street-view.png)  

[Street-level imagery (Mapillary)](../plugins/mapillary.md) are displayed as green dots on the map. Attached to these dots are photos with a view of the street. You can create a [filter](../plugins/mapillary.md#filtering-the-data) and select the photos you want to display on the map. To open a street-view photo, you need to tap the green dot.  

Requires [Mapillary plugin](../plugins/mapillary.md).


## * Parking Point

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)

A [Parking point](../plugins/parking.md) is a point marked by users on the map to store information about the exact location of the vehicle. It can be divided into unrestricted and restricted parking zones.  

Requires [Parking position plugin](../plugins/parking.md).


## * Wikipedia

Enable or disable Wikipedia articles on the map and filter by language:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,local_indexes_cat_wiki"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,local_indexes_cat_wiki"/>*  

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png) ![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)  

OsmAnd has special Points of Interest indicated with the “W” logo and Wikipedia articles attached to points. These points could be displayed exactly as any other POIs type via Search or <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>. However, there is a special way to filter Wikipedia articles by **available languages**.  

[Read more](../plugins/wikipedia.md) how to download and use the Wikipedia feature in OsmAnd.


## * Audio / Video Points (Android)

Enable or disable recording points on the map:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![AV POI](@site/static/img/map/av_poi.png)

Audio / Video notes are points with audio, photo, and video data on the map created by users.  

Requires [Audio / Video note plugin](../plugins/audio-video-notes.md).


## * OSM Edit Points

Enable or disable OSM edits on the map:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

OSM edit points are users' made POI for adding it for [OpenStreetMap project](https://www.openstreetmap.org/).  

Requires [OSM Editing plugin](../plugins/osm-editing.md).


## * OSM Notes

Enable or disable OSM notes on the map:

- **<Translate android="true" ids="android_button_seq"/>**: *<Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*
- **<Translate ios="true" ids="ios_button_seq"/>**: *<Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*

![OSM notes](@site/static/img/map/osm_note.png)

OSM note points are users' made POI for reporting issues about map data in [OpenStreetMap](https://www.openstreetmap.org/). A new note (not uploaded to OpenStreetMap) is marked as green with **+**, the closed note is marked as green with “V”, and the open note is marked as red.  You can customize the zoom level to display notes and select show or hide closed notes.  

Requires [OSM Editing plugin](../plugins/osm-editing.md#how-to-report-a-mistake).


## Points Along the Route

Waypoints, POIs, Favorite points, and Audio/video notes all refer to the concept of saving locations and routes in [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). You can use [the same tags](../map/tracks/track-context-menu.md#display-custom-gpx-tags) to describe and edit them.  

[Waypoints](#track-waypoints) are individual points on a map or route. They can be used to mark certain places that may be important for navigating or recording your travels. For example, you can create a waypoint on the map to indicate an important intersection or change of direction.  

[Points of interest(POIs)](#points-of-interest-pois) are places of special interest to users. These can be landmarks, restaurants, hotels, gas stations, and other places of interest that you may want to note or visit.  

[Favorite points](#favorites) are places users find particularly important or interesting and save to their list of favorite places. Places can include any location you may want to find and return to later.

[Audio/video notes](#-audio--video-points-android). In GPX format, you can save audio and video recordings as waypoints. This allows you to associate media files to specific locations on the map or route.  

All of these point types can be saved in GPX format to provide you with location information and help with navigation and route planning. They serve different purposes, but the general idea is to store and transmit geographic information so you can use it in their navigation tasks.


## Related Articles

- [Configure map menu](../map/configure-map-menu.md)
- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)

> *This article was last updated in November 2024*
