---
sidebar_position: 6
title:  Marker widgets
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

## Overview

Markers are temporary points indicated on the map in the form of flags. The widget shows the *Direction*, *Distance*, *Address*, and *Estimated arrival time (for Android)* to the marker. Allows you to quickly find markers on the map, as well as change their position. You can read more about markers in this [article](../personal/markers).  


## Top bar widget

The **Map markers bar**(for Android) and **Distance indication Top bar**(for iOS) widgets displays:
- Distance from your current location to the selected point indicated by the Marker on the map ([Units of length](../personal/profiles/#general-settings) can be selected in the Profile settings).
- In the form of an arrow, the same color as the marker, indicates the direction from the current location and orientation in space of your device (hearding) towards the marker.
- Location Address.
- Menu icon leading to [Map marker list](../personal/markers/#map-markers-menu).

You can also select one or two markers to display in the widget.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top_bar_widget.png)

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Widgets → Top panel → Map markers* |
| By tapping | The visible part of the map shifts to the marker location. |
| Long tap + move | To measure the distance and see the direction from a particular point on the map to the tracked marker, you need to make a long tap and immediately slightly move the map position (the context menu should not appear). |
| Approach marker | In case your location is within a small radius of the map marker (**< 50 m**), in the widget field you can see a checkmark button to quickly delete the map marker (mark as passed). The checked marker is replaced by the next marker in the list of markers.  |
| Distance format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

<TabItem value="ios" label="iOS">  

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top_bar_widget_ios.png)

| | |
|------------|------------|
| Enable | *<Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,map_markers"/>* |
| By tapping | The visible part of the map shifts to the marker location. |
| Approach marker | In case your location is within a small radius of the map marker (**< 50 m**), in the widget field you can see a checkmark button to quickly delete the map marker (mark as passed). The checked marker is replaced by the next marker in the list of markers.  |
| Distance format  | *<Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs> 



## Panel widgets

The **Map markers**(for Android) widget and **Distance indication Widgets**(for iOS) displays:  
- Distance from your current location to the selected point indicated by the Marker on the map ([Units of length](../personal/profiles/#general-settings) can be selected in the Profile settings).
- (Only for Android) **Estimated time of arrival**  

You can also select one or two markers to display in the widget.  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Panel widgets](@site/static/img/widgets/map_markers_widget.png) ![Panel widgets](@site/static/img/widgets/map_markers_widget_settings.png)  


:::note
**"Estimated time of arrival" (ETA)** is the value that is calculated as the distance to the marker / average speed. 

_The average speed_ is calculated from a specified interval (15sec - 60 min). For example, we have 300 location points with speed data during a specified 10 min. Average speed is the sum of speeds from points data / 300.

_The distance to the marker_ is a straight distance from your position (or a specific map point) to the marker.
:::

| | |
|------------|------------|
| Enable | *Menu → Configure screen → Widgets → Left / Right panel → Map markers*  |
| By tapping | Changing between "Distance" / "Estimated time of arrival" |
| Long tap + move | To measure the distance and see the direction from a particular point on the map to the tracked marker, you need to make a long tap and immediately slightly move the map position (the context menu should not appear). |
| Distance format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios.png)

On panel widgets only distance to the map marker is displayed.

| | |
|------------|------------|
| Enable | *<Translate ios="true" ids="menu,layer_map_appearance,map_widget_appearance_rem,map_markers"/>*  |
| By tapping | Centers map view to the marker position |
| Distance format  | *<Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

</Tabs> 


## Configure Marker widgets and Marker appearance

All marker appearance settings and widget parameters are configured through the same menu.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,map_markers_item,appearance_on_the_map"/> 

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map.png)


</TabItem>

<TabItem value="ios" label="iOS">  

**<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,map_markers,appearance_on_map"/> 

![Map markers Appearance iOS](@site/static/img/personal/markers/map_markers_appearance_ios.png) 


</TabItem>

</Tabs> 

|    | Description    | State | 
| :------------- | :------------- | :------------- |
| <Translate android="true" ids="active_markers"/> | Specifies a number of direction indicators| 1 or 2 | 
|  <Translate android="true" ids="show_direction"/> | Specifies how direction indicators should be displayed | <Translate android="true" ids="shared_string_topbar"/> / <Translate android="true" ids="shared_string_widgets"/>| 
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Displays arrows on the map to the top markers in case they are not part of the visible map | - |
| <Translate android="true" ids="show_guide_line"/> | Shows direction line from user location to the top markers  | - |
| <Translate android="true" ids="one_tap_active"/> (**Android**) |  Displays / switches marker in the widget by tapping on a marker on the map. |  - | 
| <Translate android="true" ids="keep_passed_markers"/> (**Android**) | Keeps or hides inactive markers on the map, if a marker is part of the visible group of Favorites or GPX waypoints. | -  |
