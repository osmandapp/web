---
sidebar_position: 8
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

Map markers are temporary points indicated on the map in the form of flags. Their appearance can be configured with **arrows** (Arrows on the map) and **distance indication** (Direction lines).

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


## Settings


### Add Marker on the map

A long-tap the map visible on the screen opens a point menu where you can select *Markers* to add a marker to the map. You can add markers even for unloaded areas.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Map markers](@site/static/img/personal/markers/map_markers_andr.png)  ![Map markers](@site/static/img/personal/markers//map_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Map markers](@site/static/img/personal/markers/map_markers_ios_1.png)

</TabItem>

</Tabs> 


### Add / Edit Marker

Short or long-tap the map and choose neede action in [Map Context menu](../map/map-context-menu.md#add--edit-marker).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs> 

It is possible to mark a point or an object in order to make it easier to plan navigation. You just need to click on the 'flag' icon in the menu (Android), 'arrow' (iOS) - displays direction and distance to the selected point from your current location (or the centre map point / the initial map touching point when the Location is off).

Actions:
- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md) - puts a new marker on the selected point.
- 'Mark passed' (Android) / Dismiss (iOS) - deactivates marker and puts it to the History.
- 'Make active' (Android) - moves marker to the top position (on the top panel).
- 'Restore marker' (Android) - moves marker from History to active list.  


## Map markers menu  

In this menu you can customize the markers you have added. Sort, group, view history, and more.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers"/>*   

![Map markers menu Android](@site/static/img/personal/markers/map_markers_menu_android_2.png)  

- *<Translate android="true" ids="shared_string_list"/>*  - keeps all your Map markers in the one place. Here you can move Map marker to the History part or replace it.
- *<Translate android="true" ids="shared_string_groups"/>*  - contains groups of your Map markers. 
- *<Translate android="true" ids="shared_string_history"/>*  - keeps all Map markers which were deleted yearlier.
- *<Translate android="true" ids="shared_string_more_without_dots"/>*  - keeps Options of Map markers (Appearance) and etc.

</TabItem>

<TabItem value="ios" label="iOS">

Tapping the menu item (<Translate ios="true" ids="map_markers"/>) opens a list of all markers on the map and the history of previously added markers.

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,map_markers"/>*  

![Map markers menu iOS](@site/static/img/personal/markers/map_markers_menu_ios.png)

</TabItem>

</Tabs>


### List

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location (or the centre map point / the initial map touching point when the Location is off), data of creation of this marker.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_list"/>*  

![Map markers List Android](@site/static/img/personal/markers/map_markers_list_android.png) 

Info:

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location (or the centre map point / the initial map touching point when the Location is off), data of creation of this marker.
Non active map markers: map marker color, showing the small arrow to the location, distance to it from your location (or the centre map point / the initial map touching point when the Location is off), data of creation of this marker.

Actions:

- Changing the order of Map markers - just click to "&equals;" button and swip up/down the map marker line.
- Delete the Map marker - click to "&#10003;" button.

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

You can import *Markers* to *[Map markers list](#list)* from one or more favorites groups or track waypoints. Tap '**&#43;**' button, then choose:
- &nbsp;<Translate android="true" ids="favourites_group"/>  - import *Markers* from Favorites.
- &nbsp;<Translate android="true" ids="shared_string_gpx_waypoints"/>  - import *Markers* from track waypoints.

*Markers* from track waypoints can also be created in *Groups tab* by turning switch on.  

:::note
Only tracks with waypoints can be added to the *Map markers list*. The track you intend to add should also be visible (active) on the map.
:::


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


### More

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Map markers More Android](@site/static/img/personal/markers/map_markers_more_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="sort_by"/>_ -  Makrers can be sort in [List](#list) by name, proximity, adding time.
- &nbsp;_<Translate android="true" ids="appearance_on_the_map"/>_  or <Translate ios="true" ids="shared_string_appearance"/>   - [settings for Map markers](#appearance-on-the-map).
- &nbsp;_<Translate android="true" ids="coordinate_input"/>_ - add Markers by [coorditanes input](../plan-route/coordinate-input.md).
- &nbsp;_<Translate android="true" ids="plan_route"/>_ - build route [for navigation](../navigation/setup/markers-navigation.md) using chosen markers.
- &nbsp;_<Translate android="true" ids="marker_save_as_track"/>_ - save active markers in a GPX file.
- &nbsp;_<Translate android="true" ids="move_all_to_history"/>_ - deactivate all markers and move them to [History](#history).

## Appearance on the map

Setting the appearance of markers is available in both the Android and iOS versions of the OsmAnd app. The "Appearance on Map" menu is a general setting for displaying markers and additional pointers to them.
In the iOS version of OsmAnd, "Appearance on Map" is also a setting for displaying widgets. Currently, it is not possible to completely disable the display of widgets, they will not be visible on the map only if the "Map Places" list is empty.
In the Android version, there are additional settings for [configuring the widgets](../widgets/markers.md#configure-marker-widgets) and disabling them.  

- **Active markers**. Shows information about the first one or two markers in the Map marker list.  
- **Distance indication** *(for iOS)*. Allows you to choose whether or not to display widgets and how they will appear: above the map (Top bar) or on the right side of the screen (Widgets).  
- **Arrows on the map**.	Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed.  
- **Direction line**.	Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  
- **'One tap' active** *(for Android)*.	With a one-tap the required marker on the map, this marker moves to the top of the list of active Map markers without opening the Context menu.  
- **Keep passed markers on the map** *(for Android)*.	Markers added as a group of Favourites or GPX waypoints marked Passed will remain on the map. If the group is not active, the markers will disappear from the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>* 

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-01.png)   ![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>* 

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png)  ![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

</TabItem>

</Tabs> 


## Plan route for Markers

<!-- https://osmand.net/docs/user/plan-route/create-route -->

Map markers are selected points marked as flags on the map. They provide useful information for direct-point-navigation on the map screen.    

Navigation to the marker is direct-point-navigation. This navigation is made special for quick destinations. For example, during any off-road competitions.  

At first user need to set [Map marker view](../personal/markers.md) and [Marker widget](../widgets/markers.md).
User need to find or tap to the object on the map, click to it and choose [Marker button in Map Conctext menu](../map/map-context-menu.md#add--edit-marker).  
The flag on the object (Map marker) with line from your location to it (option).
Arrow, line and widget show object location and distance to it.  

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png) ![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Map markers Plan Route Android](@site/static/img/personal/markers/map_markers_plan_route_android.png)

You need choose markers for your route.

![Map markers Plan Route points Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png)

Next 'Options' button (top corner):

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route,shared_string_options"/>*  

![Map markers Plan Route Options Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

<Translate android="true" ids="shared_string_options"/>:

- <Translate android="true" ids="get_directions"/> - Starting build your route ([Navigation](../navigation/index.md)).
- <Translate android="true" ids="make_round_trip"/> - <Translate android="true" ids="make_round_trip_descr"/> Round trip or not. 

<Translate android="true" ids="sort_by"/> :

- <Translate android="true" ids="intermediate_items_sort_by_distance"/>   - Sort your markers in [List](../personal/markers.md#list-android).
- <Translate android="true" ids="shared_string_reverse_order"/>  - Reverse order for markder in [List](../personal/markers.md#list-android).

Next, building a route.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route,shared_string_options,get_directions"/>  

![Map markers Plan Route Directions Android](@site/static/img/personal/markers/map_markers_plan_route_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>


## Marker widgets

The widget shows the *Direction*, *Distance*, *Address*, and *Estimated arrival time (for Android)* to the marker. Allows you to quickly find markers on the map, as well as change their position.  

To start using *Map markers widgets*, you need to make all of the following settings:
- [Map Context menu](../map/map-context-menu.md#add--edit-marker). 
- Configure Marker widgets and Marker appearance for the required [profile](../personal/profiles.md).


### Add Marker widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png)  ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs> 

It is possible to mark a point or an object in order to make it easier to plan navigation. You just need to click on the 'flag' icon in the menu (Android), 'arrow' (iOS) - displays direction and distance to the selected point from your current location (or the centre map point / the initial map touching point when the Location is off).

Actions:
- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md) - puts a new marker on the selected point.
- 'Mark passed' (Android) / Dismiss (iOS) - deactivates marker and puts it to the History.
- 'Make active' (Android) - moves marker to the top position (on the top panel).
- 'Restore marker' (Android) - moves marker from History to active list.  


**"Map marker" widget: added option to change click behavior.**

_Map marker widget_ can show _Estimated arrival time (ETA)_ now, not only the distance to the Map marker.

![map_marker_w_6](@site/blog/2022-12-12-android-4-3/map_marker_widget_6.png)  
At first, you need to add _Map marker widget_ to left or right panel: _Menu → Widgets → left / Right panel → Map markers_. Than you need check settings of these widgets by tapping on &#9881; button.  

![map_marker_w](@site/blog/2022-12-12-android-4-3/map_marker_widget.png)  
![map_marker_w_1](@site/blog/2022-12-12-android-4-3/map_marker_widget_1.png)  

Here you can choose what widget will show: Distance or ETA. What action will be by clicking on widget: _Switch mode_ or _Go to marker location_.  

_Switch mode_ changes mode from _Distance_ to _ETA_ and vice versa.  

_Go to marker location_ moves the center map to chosen Map marker.   

![map_marker_w_2](@site/blog/2022-12-12-android-4-3/map_marker_widget_2.png)  ![map_marker_w_2](@site/blog/2022-12-12-android-4-3/map_marker_widget_3.png)  

_Estimated arrival time (ETA)_ widget you can choose the time interval: Specify the time interval for speed averaging (used for the arrival time estimate).  

![map_marker_w_4](@site/blog/2022-12-12-android-4-3/map_marker_widget_4.png)  ![map_marker_w_5](@site/blog/2022-12-12-android-4-3/map_marker_widget_5.png)  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Configure screen → Widgets → Top panel → Map markers bar*   
*Menu → Configure screen → Widgets → Left / Right panel → Map markers*  

![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets-02.png)  ![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets-01.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_appearance_rem,map_markers"/>*  

![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets_ios.png)

</TabItem>

</Tabs>


### Configure Marker widgets

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png)  ![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)  
![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)  ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-02.png)


### Appearance on the map

You can read how to configure the appearance of the markers in [this section](#appearance-on-the-map) of the current article.  


## Markers from Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can add or remove your favorites in/from [Map markers list](../personal/markers.md).

Tap *&#8942;* button (**Android**) opens special functions for a chosen Favorite folder (group).

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

Functions for Favorite folder:
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>   - add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>


## Setting Markers for Waypoints

[Waypoints to Map Markers link](../map/track-context-menu.md#waypoints-folder)

Track points (waypoints) are points that are part of Track (GPX) files. These points displayed automatically if track is displayed on the map. They look & could be configured similar to [Favorites](#favorites) - icon, names, color, shape. How to create and add Waypoint read [here](../map/track-context-menu.md#add-waypoint-to-a-track).

![Track on map](@site/static/img/map/track_point_on_map.png)

[Read more](../map/tracks-on-map/tracks-types.md) about tracks on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can add or remove your Waypoints in/from [Map markers list](../personal/markers.md).

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>

</Tabs>
