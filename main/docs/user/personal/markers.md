---
sidebar_position: 4
title:  Markers
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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

## Overview

Markers interface is a tool that helps you save temporary points on the map for later use. Markers are special points marked on the map as flags. You can customize their appearance by adding **arrows** (<Translate android="true" ids="show_arrows_on_the_map"/> ) and **distance indication** (<Translate android="true" ids="show_direction"/> ). All marker flags have different colours for better visibility.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## How to add

A long tap on the map visible on the screen opens a point menu where you can select *Markers* to add a marker to the map. You can add markers even for unloaded areas.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Map markers](@site/static/img/personal/markers/map_markers_andr.png)  ![Map markers](@site/static/img/personal/markers//map_markers_andr_2.png)


</TabItem>

<TabItem value="ios" label="iOS">  

![Map markers](@site/static/img/personal/markers/map_markers_ios_1.png)


</TabItem>

</Tabs> 



## Map markers menu  

In this menu you can customize the markers you have added. Sort, group, view history, and more.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers"/>

![Map markers menu Android](@site/static/img/personal/markers/map_markers_menu_android_2.png)

- &nbsp;<Translate android="true" ids="shared_string_list"/>  - keeps all your Map markers in the one place. Here you can move Map marker to the History part or replace it.
- &nbsp;<Translate android="true" ids="shared_string_groups"/>  - contains groups of your Map markers. 
- &nbsp;<Translate android="true" ids="shared_string_history"/>  - keeps all Map markers which were deleted yearlier.
- &nbsp;<Translate android="true" ids="shared_string_more_without_dots"/>  - keeps Options of Map markers (Appearance) and etc.


</TabItem>

<TabItem value="ios" label="iOS">

Tapping the menu item (<Translate ios="true" ids="map_markers"/>) opens a list of all markers on the map and the history of previously added markers.

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_markers"/>

![Map markers menu iOS](@site/static/img/personal/markers/map_markers_menu_ios.png)

</TabItem>

</Tabs>

### List

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location, data of creation of this marker.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_list"/>

![Map markers List Android](@site/static/img/personal/markers/map_markers_list_android.png) 

Info:

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location, data of creation of this marker.
Non active map markers: map marker color, showing the small arrow to the location, distance to it from your location, data of creation of this marker.

Actions:

- &nbsp;Changing the order of Map markers - just click to "&equals;" button and swip up/down the map marker line.
- &nbsp;Delete the Map marker - click to "&#10003;" button.

> ``` The first one or two Map markers are active Map markers. Changing order one of the Map markers to the top list is made it active. ```

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

### Groups
                      
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers Groups Android](@site/static/img/personal/markers/map_markers_groups_android.png) ![Map markers Groups Android](@site/static/img/personal/markers/map_markers_groups_add_android.png) 

You can import groups from favorites or track waypoints.

Click to '&#43;' Button.  <Translate android="true" ids="favourites_group"/> :
- &nbsp;<Translate android="true" ids="favourites_group"/>  - from Favorites.
- &nbsp;<Translate android="true" ids="shared_string_gpx_waypoints"/>  - from track waypoints.

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

### History

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers History Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers History iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

### More / Appearance 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers More Android](@site/static/img/personal/markers/map_markers_more_android.png) 

- &nbsp;<Translate android="true" ids="appearance_on_the_map"/>  or <Translate ios="true" ids="map_settings_appearance"/>   - [settings for Map markers](../personal/markers.md#appearance-on-the-map).
- &nbsp;<Translate android="true" ids="sort_by"/> - sort Makrers in [List](../personal/markers.md#list-android).
- &nbsp;<Translate android="true" ids="coordinate_input"/> - add Markers by [input coorditanes (like for Tracks)](../personal/tracks.md#coordinate-input-android)
- &nbsp;<Translate android="true" ids="plan_route"/> - build route [for navigation using chosen markers](../navigation/markers-navigation.md).
- &nbsp;<Translate android="true" ids="marker_save_as_track"/> - save active markers like file GPX.
- &nbsp;<Translate android="true" ids="move_all_to_history"/> - deactivate all markers and move its to [History](../personal/markers.md#history).

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers Appearance iOS](@site/static/img/personal/markers/map_markers_appearance_ios.png) 

- &nbsp;<Translate android="true" ids="appearance_on_the_map"/>  or <Translate ios="true" ids="map_settings_appearance"/>   - [settings for Map markers](../personal/markers.md#appearance-on-the-map).

</TabItem>

</Tabs>

## Add Marker on the map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Short or long tap on the map and choose neede action in [Map Context menu](../map/map-context-menu.md#add--edit-marker).

</TabItem>

<TabItem value="ios" label="iOS">

Short or long tap on the map and choose neede action in [Map Context menu](../map/map-context-menu.md#add--edit-marker).

</TabItem>

</Tabs>

### Actions in Map Context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Link to the article](../map/map-context-menu.md#add--edit-marker)

</TabItem>

<TabItem value="ios" label="iOS">

[Link to the article](../map/map-context-menu.md#add--edit-marker)

</TabItem>

</Tabs>

## Appearance on the map


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Link to description](../widgets/markers.md#configure-marker-widgets-and-marker-appearance)

![Map markers Appearance Android](@site/static/img/personal/markers/map_markers_appearance_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

[Link to description](../widgets/markers.md#configure-marker-widgets-and-marker-appearance)

![Map markers Appearance iOS](@site/static/img/personal/markers/map_markers_appearance_ios.png)

</TabItem>

</Tabs>

## Map markers widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Link to description Top Bar](../widgets/markers.md#top-bar-widget-markers)

[Link to description Widget panel](../widgets/markers.md#panel-widgets-markers)

</TabItem>

<TabItem value="ios" label="iOS">

[Link to description Top Bar](../widgets/markers.md#top-bar-widget-markers)

[Link to description Widget panel](../widgets/markers.md#panel-widgets-markers)

</TabItem>

</Tabs>


## Plan route for Markers

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Link to description](../navigation/markers-navigation.md)

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>

![Map markers Plan Route Android](@site/static/img/personal/markers/map_markers_plan_route_android.png)

You need choose markers for your route.

![Map markers Plan Route points Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png)

Next 'Options' button (top corner):

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route,shared_string_options"/>

<p> </p>

![Map markers Plan Route Options Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

<Translate android="true" ids="shared_string_options"/>:

- &nbsp;<Translate android="true" ids="get_directions"/> - Starting build your route ([Navigation](../navigation/index.md)).
- &nbsp;<Translate android="true" ids="make_round_trip"/> - <Translate android="true" ids="make_round_trip_descr"/> Round trip or not. 

<Translate android="true" ids="sort_by"/> :

- &nbsp;<Translate android="true" ids="intermediate_items_sort_by_distance"/>   - Sort your markers in [List](../personal/markers.md#list-android).
- &nbsp;<Translate android="true" ids="shared_string_reverse_order"/>  - Reverse order for markder in [List](../personal/markers.md#list-android).

Next, building a route.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route,shared_string_options,get_directions"/>

<p> </p>


![Map markers Plan Route Directions Android](@site/static/img/personal/markers/map_markers_plan_route_directions_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

## Add/Remove Markers from Favorites/Waypoints

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Favorites to Map Markers link](../personal/favorites.md#add-to-map-markers-android)

[Waypoints to Map Markers link](../personal/tracks.md#group-menu)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>