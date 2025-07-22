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


## Overview {#overview}

Markers are special points marked on the map as flags that could be quickly created as a single tap without specifying name and other information in contrast with [Favorite points](./favorites.md). Also markers provide additional functionality with [widgets](../widgets/markers.md), **arrows** (<Translate android="true" ids="show_arrows_on_the_map"/>) and **distance indication** (<Translate android="true" ids="show_direction"/>).

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Map markers Android](@site/static/img/map/map_markers_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers iOS](@site/static/img/map/map_markers_ios.png)

</TabItem>

</Tabs>

## Markers {#markers}

### Add / Edit Markers {#add--edit-markers}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

Short or long tap the map and select the required action from the [map context menu](../map/map-context-menu.md#add--edit-marker).  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Short or long tap the map and choose needed action in [map context menu](../map/map-context-menu.md#add--edit-marker).  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs>

It is possible to mark a point or an object to make it easier to plan navigation. You just need to tap the *flag* (*Android*) or *arrow* (*iOS*) icon in the menu to display direction and distance to the selected point from your current location (or the centre map point / the initial map touching point when the Location is off).

***Actions***:

- **<Translate android="true" ids="shared_string_marker"/>** / **<Translate android="true" ids="edit_map_marker"/>**. Puts a new marker on the selected point.
- **Mark passed** (*Android*) / Dismiss (iOS). Deactivates marker and puts it to the History.
- **Make active** (*Android*). Moves marker to the top position (on the top panel).
- **Restore marker** (*Android*). Moves marker from History to active list.  

:::note
You can't delete marker immediately, you need to first deactivate (mark as passed) it, so it's moved to [History](#history) and then you can permanently delete from history. Once marker deactivated it will be removed from map and itinerary list.
:::


<!--
### Add Favorites to Map Markers {#add-favorites-to-map-markers}

<InfoAndroidOnly/>

![Favorites folder functions android](@site/static/img/personal/favorites_folder_functions_android.png)

You can add to or remove your favorites from [Map markers list](../personal/markers.md).
Tap &#8942; button (**Android**) opens special functions for a chosen Favorite folder (group).

**Functions for Favorite folder:**
- &nbsp;<Translate android="true" ids="shared_string_add_to_map_markers"/>  or <Translate android="true" ids="remove_from_map_markers"/>.
- Add or remove all Favorite points from a folder in [Map markers list](../personal/markers.md).
-->


### Itinerary List {#itinerary-list}

Itinerary list represents an ordered list of markers where top 1st marker used in widgets for navigation. Read more about it in [Navigate by markers](../navigation/setup/markers-navigation.md#itinerary-list) article.

### Marker Groups {#marker-groups}

<InfoAndroidOnly />

![Map markers Groups Android](@site/static/img/personal/markers/map_markers_groups_add_android.png)

Markers can be added and deleted as a whole group from Favorite group or GPX file with waypoints. That makes it's very convenient to be used in a special navigation mode - [Navigate by markers](../navigation/setup/markers-navigation.md#add-group-of-favorite).

### History {#history}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">

![Map markers History Android](@site/static/img/personal/markers/map_markers_history_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Map markers History iOS](@site/static/img/personal/markers/map_markers_history_ios.png)

</TabItem>

</Tabs>

History is a list of all deactivated (passed) markers. From this list it's possibly to permanently delete a marker or restore it back.


## Appearance on the Map {#appearance-on-the-map}

<Tabs groupId="operating-systems" queryString="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>*

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-01.png)   ![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,map_markers,appearance_on_map"/>*

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-01.png)  ![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

</TabItem>

</Tabs>

The *Appearance on Map* menu is a general setting for displaying markers and additional pointers to them.
In the iOS version of OsmAnd, *Appearance on Map* is also a setting for displaying widgets.There are also additional settings for [configuring the widgets with markers](../widgets/markers.md#configure-marker-widgets).  

- **Active markers**. Shows information about the first one or two markers in the Map marker list.  
- **Distance indication** *(for iOS)*. Allows you to choose whether or not to display widgets and how they will appear: above the map (Top bar) or on the right side of the screen (Widgets).  
- **Arrows on the map**. Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed.  
- **Direction line**. Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  
- ***One tap*** active (*for Android*). With a one-tap the required marker on the map, this marker moves to the top of the list of active Map markers without opening the Context menu.  
- **Keep passed markers on the map** *(for Android)*. Markers added as a group of Favorites or GPX waypoints marked Passed will remain on the map. If the group is not active, the markers will disappear from the map.


## Plan Route for Markers {#plan-route-for-markers}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more_without_dots,plan_route"/>*

![Map markers Plan Route points Android](@site/static/img/personal/markers/map_markers_plan_route_points_android.png) ![Map markers Plan Route Options Android](@site/static/img/personal/markers/map_markers_plan_route_options_android.png)

Using functionality of the Plan a route in Markers list tool you can sort *Markers* *Door-to-door*, put them in reverse order or create a *Round trip*. If you tap a *Navigation* option, *Markers* will be used as [intermediate destinations](../navigation/setup/route-navigation.md#intermediate-destinations).


## Actions {#actions}

<InfoAndroidOnly />

![Map markers More Android](@site/static/img/personal/markers/map_markers_more_android.png)

- **<Translate android="true" ids="sort_by"/>**. Markers can be sort in list by name, proximity, adding time.
- **<Translate android="true" ids="appearance_on_the_map"/>**  or **<Translate ios="true" ids="shared_string_appearance"/>**. [Settings for Map markers](#appearance-on-the-map).
- **<Translate android="true" ids="coordinate_input"/>**. Adds Markers by [coorditanes input](../plan-route/coordinate-input.md).
- **<Translate android="true" ids="plan_route"/>**. Builds route [for navigation](../navigation/setup/markers-navigation.md) using chosen markers.
- **<Translate android="true" ids="marker_save_as_track"/>**. Saves active markers in a GPX file.
- **<Translate android="true" ids="move_all_to_history"/>**. Deactivates all markers and move them to [History](#history).


## Related Articles {#related-articles}

- [Navigation by markers](../navigation/setup/markers-navigation.md)
- [Marker widgets](../widgets/markers.md)

> *Last updated: August 2024*
