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

Markers are temporary points indicated on the map in the form of flags. The widgets show the *Direction*, *Distance*, *Address*, and *Estimated arrival time to the marker. They allow you to quickly find markers on the map, as well as change their position. You can read more about markers in this [article](../personal/markers).  


## Top bar widget

The **Map markers bar** (Android) widget / **Distance indication - Top bar** (iOS) widget displays:
- Distance from your current location to the selected point indicated by the Marker on the map ([Units of length](../personal/profiles/#general-settings) can be choosed in the Profile settings).
- An arrow of the same color as the marker indicates the direction from the current location and orientation in space of your device (heading) towards the marker.
- Location Address.
- Menu icon leading to [Map marker list](../personal/markers/#map-markers-menu).

You can also select to display one or two markers. Read more about widget settings in this [article](https://osmand.net/docs/user/personal/markers#map-markers-widgets).    
:::info
*The distance to the marker* is the length of the straight line between your position (or a particular point on the map) and the marker.
:::  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-andr.png)


| | |
|------------|------------|
| Enable | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_markers_bar"/>* |
| By tapping | The visible part of the map shifts to the marker location. |
| Long-tap + move | To measure the distance and see the direction from a particular point on the map to the tracked marker, you need to make a long-tap and immediately slightly move the map position (the context menu should not appear). |
| Approach marker | In case your location is within a small radius of the map marker (**< 50 m**), in the widget field you can see a checkmark button to quickly delete the map marker (mark as passed). The checked marker is replaced by the next marker in the list of markers.  |
| Distance format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

<TabItem value="ios" label="iOS">  

![Map markers on the Top bar widget](@site/static/img/widgets/map_markers_top-bar-widget-ios.png)

| | |
|------------|------------|
| Enable | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_markers_bar"/>*|
| By tapping | The visible part of the map shifts to the marker location. |
| By tapping | Changing between "Distance" / "Estimated time of arrival" (Switch mode). |
| Approach marker | In case your location is within a small radius of the map marker (**< 50 m**), in the widget field you can see a checkmark button to quickly delete the map marker (mark as passed). The checked marker is replaced by the next marker in the list of markers.  |
| Distance format  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |  

</TabItem>

</Tabs> 


## Panel widgets

The **Map markers** *(for Android)* widget and **Distance indication - Widgets** *(for iOS)* displays:  
- _Distance from your current location_ to the selected point indicated by the Marker on the map ([Units of length](../personal/profiles/#general-settings) can be choosed in the Profile settings).
- _Estimated time of arrival or ETA_.  
This is the time (hh:mm) when the vehicle or person should arrive at the destination. It is calculated as the distance to the marker divided by the average speed. 
The average speed is calculated as the mean of all speed values received from location points for the time interval you selected from 15 seconds to 60 minutes.

You can also select to display one or two markers. Read more about widget settings in this [article](https://osmand.net/docs/user/personal/markers#map-markers-widgets).   
:::info
*The distance to the marker* is the length of the straight line between your position (or a particular point on the map) and the marker.
:::  


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Panel widgets](@site/static/img/widgets/map_markers_widget-02.png)  

| | |
|------------|------------|
| Enable | *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → <Translate android="true" ids="map_widget_left"/>/<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="map_markers_item"/>*  |
| By tapping 1 | Changing between "Distance" / "Estimated time of arrival" (Switch mode). |
| By tapping 2 | The visible part of the map shifts to the marker location (Go to marker location mode) |
| Long-tap + move | To measure the distance and see the direction from a particular point on the map to the tracked marker, you need to make a long-tap and immediately slightly move the map position (the context menu should not appear). |
| Distance format | *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,units_and_formats,unit_of_length"/>*  |


</TabItem>

<TabItem value="ios" label="iOS">  

![Panel widgets](@site/static/img/widgets/map_markers_widget_ios-02.png)

| | |
|------------|------------|
| Enable | *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Left/Right/Top/Bottom panels → <Translate android="true" ids="map_markers_bar"/>*  |
| By tapping | The visible part of the map shifts to the marker location. |
| By tapping | Changing between "Distance" / "Estimated time of arrival" (Switch mode). |
| Distance format  | *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,units_and_formats,unit_of_length"/>*  |

</TabItem>

</Tabs> 


## Configure marker widgets

You can read general information about the Map markers widget settings on this [page](../personal/markers#map-markers-widgets).  

**Map markers bar**  
The top bar widget displays the distance and direction to the next Map marker from your current location. In the settings, you can choose whether one or two markers will be displayed at the top of the screen.   

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-02.png)  

**Map markers**  
The widget shows the distance or estimated time of arrival (ETA) for the first or second marker in the list of Map markers. You can choose: one marker, first or second, to be displayed on the screen or both.    

![appearence_on_the_map](@site/static/img/widgets/configure-marker-wid-01.png)  ![appearence_on_the_map](@site/static/img/widgets/settings-marker-wid-first-01.png)  

|    |     |  
| :------------- | :------------- | 
| Shows | This mode allows you to choose what information the widget will display: *Distance* or *Estimated arrival time*. | 
| Interval | If *Estimated arrival time* is selected in 'Show', this option appears with a choice of times (from 15 seconds to 60 minutes) for ETA calculation. | 
| Click on widget |  This setting allows you to choose which action will be performed when you click on the widget: *Switch mode* or *Go to marker location*. |   


## Appearance on the map

Configuring the appearance of map markers is available in both the Android and iOS versions of OsmAnd. The "Appearance on the Map" menu is a general setting for Map markers and applies whether the widgets are enabled or not. You can read the detailed information on this [page](../personal/markers.md#appearance-on-the-map).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,appearance_on_the_map"/>* 

![appearence_on_the_map](@site/static/img/widgets/appearence_on_the_map-02.png)  

|    |    |
| :------------- | :------------- | 
| <Translate android="true" ids="active_markers"/> | Shows information about the first one or two markers in the Map marker list. | 
|  <Translate android="true" ids="show_arrows_on_the_map"/> |  Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed. | 
| <Translate android="true" ids="show_guide_line"/> | Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  | 
| <Translate android="true" ids="one_tap_active"/> |  With a one-tap the required marker on the map, this marker moves to the top of the list of active Map markers without opening the Context menu. |  
| <Translate android="true" ids="keep_passed_markers"/> | Markers added as a group of Favourites or GPX waypoints marked Passed will remain on the map. If the group is not active, the markers will disappear from the map. | 

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,map_markers,shared_string_appearance"/>* 

![Map markers Appearance iOS](@site/static/img/widgets/map_markers_appearance_ios-02.png)  

|    |     |  
| :------------- | :------------- | 
| <Translate android="true" ids="active_markers"/> | Shows information about the first one or two markers in the Map marker list. | 
|  <Translate android="true" ids="show_direction"/> | Allows you to choose whether or not to display widgets and how they will appear: above the map (<Translate android="true" ids="shared_string_topbar"/>) or on the right side of the screen (<Translate android="true" ids="shared_string_widgets"/>). | 
|  Arrows on the map |  Indicates the direction to the tracked marker (one or two) as an arrow on the map. If the marker is in the visible part of the map, no arrow is displayed. | 
| Direction line | Shows the direction, as a dashed line, from a particular point on the map to the tracked marker in a straight line.  | 

</TabItem>

</Tabs> 
