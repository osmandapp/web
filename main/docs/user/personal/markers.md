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

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers"/>*   

![Map markers menu Android](@site/static/img/personal/markers/map_markers_menu_android_2.png)  

- *<Translate android="true" ids="shared_string_list"/>*  - keeps all your Map markers in the one place. Here you can move Map marker to the History part or replace it.
- *<Translate android="true" ids="shared_string_groups"/>*  - contains groups of your Map markers. 
- *<Translate android="true" ids="shared_string_history"/>*  - keeps all Map markers which were deleted yearlier.
- *<Translate android="true" ids="shared_string_more_without_dots"/>*  - keeps Options of Map markers (Appearance) and etc.

</TabItem>

<TabItem value="ios" label="iOS">

Tapping the menu item (<Translate ios="true" ids="map_markers"/>) opens a list of all markers on the map and the history of previously added markers.

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,map_markers"/>*  

![Map markers menu iOS](@site/static/img/personal/markers/map_markers_menu_ios.png)

</TabItem>

</Tabs>


### List

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location, data of creation of this marker.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_list"/>*  

![Map markers List Android](@site/static/img/personal/markers/map_markers_list_android.png) 

Info:

Active Map markers: map marker color, showing the big arrow to the location (color arrow), distance to it from your location, data of creation of this marker.
Non active map markers: map marker color, showing the small arrow to the location, distance to it from your location, data of creation of this marker.

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

You can import groups from favorites or track waypoints.

Click to '&#43;' Button.  <Translate android="true" ids="favourites_group"/> :
- <Translate android="true" ids="favourites_group"/>  - from Favorites.
- <Translate android="true" ids="shared_string_gpx_waypoints"/>  - from track waypoints.

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

- <Translate android="true" ids="appearance_on_the_map"/>  or <Translate ios="true" ids="map_settings_appearance"/>   - [settings for Map markers](../personal/markers.md#appearance-on-the-map).
- <Translate android="true" ids="sort_by"/> - sort Makrers in [List](../personal/markers.md#list-android).
- <Translate android="true" ids="coordinate_input"/> - add Markers by [input coorditanes (like for Tracks)](../personal/tracks.md#coordinate-input-android)
- <Translate android="true" ids="plan_route"/> - build route [for navigation using chosen markers](../navigation/markers-navigation.md).
- <Translate android="true" ids="marker_save_as_track"/> - save active markers like file GPX.
- <Translate android="true" ids="move_all_to_history"/> - deactivate all markers and move its to [History](../personal/markers.md#history).

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers Appearance iOS](@site/static/img/personal/markers/map_markers_appearance_ios.png) 

- <Translate android="true" ids="appearance_on_the_map"/>  or <Translate ios="true" ids="map_settings_appearance"/> - [settings for Map markers](../personal/markers.md#appearance-on-the-map).

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

Read about **Add / Edit Marker** [here](../map/map-context-menu.md#add--edit-marker).

</TabItem>

<TabItem value="ios" label="iOS">

Read about **Add / Edit Marker** [here](../map/map-context-menu.md#add--edit-marker).

</TabItem>

</Tabs>


## Appearance on the map

Configuring the appearance of map markers is available in both the Android and iOS versions of OsmAnd. The "Appearance on Map" menu is a general setting for Map markers and applies whether the widgets are enabled or not. [Description Marker widgets](../widgets/markers.md)   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>* 

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-01.png)   ![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- | 
| <Translate android="true" ids="active_markers"/> | Shows information about the first one or two markers in the Map marker list. | 
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed. | 
| <Translate android="true" ids="show_guide_line"/> | Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  | 
| <Translate android="true" ids="one_tap_active"/> |  With a one-tap the required marker on the map, this marker moves to the top of the list of active Map markers without opening the Context menu. |  
| <Translate android="true" ids="keep_passed_markers"/> | Markers added as a group of Favourites or GPX waypoints marked Passed will remain on the map. If the group is not active, the markers will disappear from the map. | 

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,map_markers,appearance_on_map"/>* 

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png)  ![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- | 
| <Translate android="true" ids="active_markers"/> | Shows information about the first one or two markers in the Map marker list. | 
|  <Translate android="true" ids="show_direction"/> | Allows you to choose whether or not to display widgets and how they will appear: above the map (<Translate android="true" ids="shared_string_topbar"/>) or on the right side of the screen (<Translate android="true" ids="shared_string_widgets"/>). | 
|  Arrows on the map |  Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed. | 
| Direction line | Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  | 

</TabItem>

</Tabs> 


## Map markers widgets

The widget shows the *Direction*, *Distance*, *Address*, and *Estimated arrival time (for Android)* to the marker. Allows you to quickly find markers on the map, as well as change their position.  

To start using *Map markers widgets*, you need to make all of the following settings:
- [Map Context menu](../map/map-context-menu.md#add--edit-marker). 
- Configure Marker widgets and Marker appearance for the required [profile](../personal/profiles.md).

<!-- ### Configure Marker widgets
### Appearance on the map
-->

### Add Marker widgets


<!---

Add / Edit Marker

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs> 

It is possible to mark a point or an object in order to make it easier to plan navigation. You just need to click on the 'flag' icon in the menu (Android), 'arrow' (iOS) - displays direction and distance to the selected point from your current location.

Actions:
- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md) - puts a new marker on the selected point.
- 'Mark passed' (Android) / Dismiss (iOS) - deactivates marker and puts it to the History.
- 'Make active' (Android) - moves marker to the top position (on the top panel).
- 'Restore marker' (Android) - moves marker from History to active list.

Read more about [markers](../personal/markers.md).




   * **"Map marker" widget: added option to change click behavior.**

   _Map marker widget_ can show _Estimated arrival time (ETA)_ now, not only the distance to the Map marker.

   <table class="blogimage">
   <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_6.png').default} alt="turn arrows visible"/></td>
    </tr>
   </table> 
  
   At first, you need to add _Map marker widget_ to left or right panel: _Menu → Widgets → left / Right panel → Map markers_. Than you need check settings of these widgets by tapping on &#9881; button. 

   <table class="blogimage">
  <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_1.png').default} alt="turn arrows visible"/></td>
  </tr>
  </table> 

  Here you can choose what widget will show: Distance or ETA. What action will be by clicking on widget: _Switch mode_ or _Go to marker location_.

  _Switch mode_ changes mode from _Distance_ to _ETA_ and vice versa.

  _Go to marker location_ moves the center map to chosen Map marker.

    <table class="blogimage">
    <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_2.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_3.png').default} alt="turn arrows visible"/></td>
    </tr>
    </table> 

    _Estimated arrival time (ETA)_ widget you can choose the time interval: Specify the time interval for speed averaging (used for the arrival time estimate).

    <table class="blogimage">
    <tr>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_4.png').default} alt="turn arrows visible"/></td>
    <td><img src={require('@site/blog/2022-12-08-android-4-3/map_marker_widget_5.png').default} alt="turn arrows visible"/></td>
    </tr>
    </table> 
-->

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">
 
*Menu → Configure screen → Widgets → Top panel → Map markers*   

![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets-01.png)  

*Menu → Configure screen → Widgets → Left / Right panel → Map markers*  

![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets-02.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,map_markers"/>*  

![Map markers Appearance iOS](@site/static/img/personal/markers/add_marker_widgets_ios.png)

</TabItem>

</Tabs>


### Configure Marker widgets

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png)  ![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)


### Appearance on the map

You can read how to configure the appearance of the markers in [this section](#appearance-on-the-map) of the current article.


## Plan route for Markers

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

[Link to description](../navigation/markers-navigation.md)

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Map markers Plan Route Android](@site/static/img/personal/markers/map_markers_plan_route_android.png)

You need choose markers for your route.

![Map markers Plan Route points Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png)

Next 'Options' button (top corner):

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route,shared_string_options"/>*

<p> </p>

![Map markers Plan Route Options Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

<Translate android="true" ids="shared_string_options"/>:

- <Translate android="true" ids="get_directions"/> - Starting build your route ([Navigation](../navigation/index.md)).
- <Translate android="true" ids="make_round_trip"/> - <Translate android="true" ids="make_round_trip_descr"/> Round trip or not. 

<Translate android="true" ids="sort_by"/> :

- <Translate android="true" ids="intermediate_items_sort_by_distance"/>   - Sort your markers in [List](../personal/markers.md#list-android).
- <Translate android="true" ids="shared_string_reverse_order"/>  - Reverse order for markder in [List](../personal/markers.md#list-android).

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