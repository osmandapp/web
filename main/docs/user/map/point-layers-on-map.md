---
sidebar_position: 6
title:  Points on the Map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

> *This article was last updated in April 2022*

## Overview

On map you could display points such as Favorites, POI, Markers, Wikipedia, Search results, Audio Video Notes, OSM Edits and other.


## Favorites

[Favorites](../personal/favorites.md) are special points on the map marked by user and by default displayed as yellow stars. Though it could be customized with any color, shape and icon. They become visible on the map from the zoom level 6.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Configure map → Favorites*

![Favotires layer Android](@site/static/img/map/favorites_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Configure map → Favorites*

![Favotires layer iOS](@site/static/img/map/favorites_layer_ios.png)  

</TabItem>

</Tabs>

:::info
In Android version of OsmAnd you can display only certain groups of favorites on the map and during search. Go to *Menu → My Places → Favorites*, tap &#8942; and choose  either *Show it on the map* or not.
:::


## Favorite / POI names

By default, Favorites and point of interests (POIs) are displayed without names, so as not to clutter up the map with text. You can enable names in Configure map menu.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Configure map → Point Labels (POI, Favorites)*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Configure map → Point Labels (POI, Favorites)*

![Favotire labels layer](@site/static/img/map/favorite_labels_layer.png)  

</TabItem>

</Tabs>


## Points of interest (POI)

[Points of interest (POI)](https://wiki.openstreetmap.org/wiki/Points_of_interest) are specific points highlighted with an icon on the map. They represent interesting or useful places & objects and they are part of [Vector Maps](../map/vector-maps.md). Most prominent points of interest are displayed on the map automatically, though you could select specific type of POI (i.e. Restaurants) and they will be all highlighted on the map within an **orange circle** (from zoom level 9). You can find detailed information about point of interest in the [Context menu](../map/map-context-menu.md) that appears on a [short tap](../map/map-context-menu.md#select-an-object-short-tap) on the point.  

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)  

Enable / disable points of interest of **selected** type on the map:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_poi"/>*  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,poi_overlay"/>*  


### POI Types

You can select one or many from standard OsmAnd POI types or make your own [POI filter](../search/search-poi.md) and select it to display POI on the map.

![Single POI Selection](@site/static/img/map/single_selection_android.png) ![Multiple POI Selection](@site/static/img/map/multiple_selection_android.png)

**Android**: to switch between single and multiple POI selection click the lower left button.


### Map style POI

Each POI type in OsmAnd assigned a specific icon and color. POIs' [zoom level](../map/vector-maps.md#details) and design could be different in some [map styles](../map/vector-maps.md#default-map-styles).

![POI on map style](@site/static/img/map/poi_layer.png) ![POI on topo style](@site/static/img/map/poi_layer_topo_style.png)

Hide POIs from map style:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,shared_string_hide"/>*   
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,configure_map,rendering_category_hide"/>*    

[Read more](../map/vector-maps.md#hide).


## Markers

[Map markers](../personal/markers.md) are temporary points indicated on the map in the form of flags. Their appearance can be configured with **arrows** (Arrows on the map) and **distance indication** (Direction lines).  

Follow the path to the available markers and their settings:  
Android: *<Translate android="true" ids="shared_string_menu,map_markers_item"/>*  
iOS: *<Translate ios="true" ids="shared_string_menu,map_markers"/>*    

![Map markers Android](@site/static/img/map/map_markers_android.png) ![Map markers iOS](@site/static/img/map/map_markers_ios.png)   
You can read more about markers appearance in this [article](../personal/markers#appearance-on-the-map).


## Track Waypoints

Track points (waypoints) are points that are part of Track (GPX) files. These points displayed automatically if track is displayed on the map. They look & could be configured similar to [Favorites](#favorites) - icon, names, color, shape. How to create and add Waypoint read [here](../map/track-context-menu.md#add-waypoint-to-a-track).

![Track on map](@site/static/img/map/track_point_on_map.png)  

[Read more](../map/tracks-on-map/tracks-types.md) about tracks on the map.


## Search results (POI)

Search results could be displayed on the map as a special POI layer. During search click on a special row (**<Translate android="true" ids="shared_string_show_on_map"/>**) to display POIs on the map.  

![POI search](@site/static/img/map/poi_search.png) ![POI search result](@site/static/img/map/poi_search_result.png)  

To switch off POIs, hit "X" on the top right corner.  

Read more about [search](../search/index.md).


## * Street-level imagery

[Street-level imagery (Mapillary)](https://docs.osmand.net/en/main@latest../plugins/mapillary) are green points on the map. Street-view photos attached to these points. You can create a filter and select what photos you would like to display on the map. In order to open street-view photo you need to press on the green point.

![Mapillary filter](@site/static/img/map/mapillary_filter.png) ![Mapillary street view](@site/static/img/map/mapillary_street-view.png)  

Enable / disable Street-level imagery on the map:   
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/>*  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,configure_map,street_level_imagery"/>*  

Requires [Mapillary plugin](../plugins/mapillary.md).


## * Parking point

[Parking point](../plugins/parking.md) is a point marked by user on the map for keeps information about the exact location of the car. Parking points could be marked as place that allowed for unlimited parking and limited parking.  

![Limited parking](@site/static/img/map/context_menu_limited_parking.png) ![Unlimited parking](@site/static/img/map/context_menu_unlimited_parking.png)  

Requires [Parking position plugin](../plugins/parking.md).


## * Wikipedia

OsmAnd has special Point of Interests indicated with 'W' logo and Wikipedia articles attacheted to it. These points could be displayed exactly as any other POI type via Search or <Translate android="true" ids="configure_map"/> → <Translate android="true" ids="layer_poi"/>, though there is a special way to filter Wikipedia articles by **available languages**.

![Wikipedia on map](@site/static/img/map/map-wikipedia-on-map.png) ![Wikipedia language - iOS](@site/static/img/map/map-wikipedia-language-ios.png)  

Enable / disable wikipedia articles on the map and filter by language:   
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,local_indexes_cat_wiki"/>*  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,configure_map,ownload_wikipedia_maps"/>*  

[Read more](../plugins/wikipedia.md) how to download and use the Wikipedia feature in OsmAnd.


## * Audio / Video points (Android)

Audio / Video notes are user's made points with audio/photo/video data on the map. 

![AV POI](@site/static/img/map/av_poi.png)

Enable / disable recording points on the map:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*   

Requires [Audio / Video note plugin](../plugins/audio-video-notes.md).


## * OSM edit points 

OSM edit points are user's made POIs for adding its for [OpenStreetMap project](https://www.openstreetmap.org/).

![OSM edit POI](@site/static/img/map/osm_edit_poi.png)

Enable / disable OSM edits on the map:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_osm_edits"/>*  
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_edits_title"/>*   

Requires [OSM Editing plugin](../plugins/osm-editing.md).


## * OSM notes 

OSM note points are user's made POIs for reporting issue about map data in [OpenStreetMap](https://www.openstreetmap.org/). New note (not uploaded to OpenStreetMap) is marked as green with '+', closed note is marked as green with 'v', open note is marked as red.  You can customise zoom level to display note and select show or hide closed note.

![OSM notes](@site/static/img/map/osm_note.png)  

Enable / disable OSM notes on the map:  
*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_map,layer_osm_bugs"/>*    
*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,configure_map,configure_map,osm_notes_online_layer"/>*    

Requires [OSM Editing plugin](../plugins/osm-editing.md#how-to-report-a-mistake).


## Points along the route

Waypoints, points of interest (POIs), Favorite points and Audio/video notes all refer to the concept of saving locations and routes in [GPX (GPS Exchange Format)](https://en.wikipedia.org/wiki/GPS_Exchange_Format). You can use [the same tags](../map/track-context-menu.md#display-custom-gpx-tags) to describe and edit them.  

[*Waypoints*](#track-waypoints) are individual points on a map or route. They are used to mark certain places that may be important for navigating or recording your travels. For example, you can create a waypoint on the map to indicate an important intersection or change of direction.  

[*Points of interest(POI)*](#points-of-interest-poi) are places of special interest to the user. These can be landmarks, restaurants, hotels, gas stations, and other places of interest that the user wants to note or visit.  

[*Favorite points*](#favorites) are places that the user finds particularly important or interesting and saves to their list of favorite places. They can include any location that the user wants to easily find and return to later. 

[*Audio/video notes*](#-audio--video-points-android). In GPX format, you can save audio and video recordings as waypoints. This allows you to associate media files to specific locations on the map or route.  

All of these point types can be saved in GPX format to provide the user with location information and help with navigation and route planning. They serve different purposes, but the general idea is to store and transmit geographic information so that the user can use it in their navigation tasks.


## Related Articles

[Configure map menu](../map/configure-map-menu.md).


## Related Articles
