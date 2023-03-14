---
sidebar_position: 8
title:  Tracks Context menu
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

The Tracks context menu provides information about the track in the form of text, graphics, or a list of points. It also allows you to add information, make changes, edit, and perform various other actions with the track.

Track Context menu includes:

- [Overview](../map/track-context-menu.md#overview).
- [Altitude / Speed Graphs](../map/track-context-menu.md#altitude--speed-graphs). 
- [Points / Waypoints](../map/track-context-menu.md#points--waypoints).
- [Options](../map/track-context-menu.md#options).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → click to choosing track or just tap to choosing track on the map.*  

![Track menu Android](@site/static/img/personal/tracks/menu_track_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Menu → My Places → Tracks → click to choosing track or just tap to choosing track on the map.*  

![Statistics screen track iOS](@site/static/img/personal/tracks/menu_track_ios.png)

</TabItem>

</Tabs>


## Overview

In Overview user can find track data info and make actions with viewing of the chosen track:

- [Info panel](../map/track-context-menu.md#info-panel) - shows track info: distance, speed, ascent/descent...
- [Quick actions](../map/track-context-menu.md#quick-actions) - action buttons for the chosen track.
- [Description and info](../map/track-context-menu.md#description-and-info) - track file info and track description.

You can [short tap](../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu overview Android](@site/static/img/personal/tracks/track_menu_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>


### Info panel

Details are described in the information panel:
- *The track name* - you can change it in [Options menu](../map/track-context-menu.md#options).
- *Short description of the track* - short part from [full description](../map/track-context-menu.md#description).
- *Direction and distance to the point on the track* - blue arrow with distance.
- Info panel of data trip:  
     - <Translate android="true" ids="distance"/> - showing track distance.
     - <Translate android="true" ids="altitude_ascent"/> / <Translate android="true" ids="altitude_descent"/> - sums of ascents and descents of a trip.
     - <Translate android="true" ids="altitude_range"/> - showing min and max altitude of a trip.
     - <Translate android="true" ids="average_speed"/> - average speed of a trip.
     - <Translate android="true" ids="max_speed"/> - max speed of a trip.  
     - <Translate android="true" ids="shared_string_time_span"/> - recorded time of a trip.  
     - <Translate android="true" ids="shared_string_time_moving"/> - sum of time during motion of a trip.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Full info for track Android](@site/static/img/personal/tracks/full_info_track_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Full info for track Android](@site/static/img/personal/tracks/full_info_track_ios.png)

</TabItem>

</Tabs>

### Quick actions

Buttons panel with the next action: Show/Hide a track on the map, opening [Appearance](../map/tracks-on-map.md#track-appearance) menu of a track, Export / [Plan route](../plan-route/create-route.md), [Navigation](../navigation/gpx-navigation.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![quick actions for track Android](@site/static/img/personal/tracks/quick_actions_track_android.png)

- *"Show / hide"* - track on the map
- *"Appearance"* - opens [Appearance](../map/tracks-on-map.md#track-appearance) menu of the track.
- *"Edit track"* - opens the track in ["Plan route" tool](../plan-route/create-route.md).
- *"Directions"* - opens the track for ["Follow track"](../navigation/gpx-navigation.md) option in Navigation.

</TabItem>

<TabItem value="ios" label="iOS">

![quick actions for track iOS](@site/static/img/personal/tracks/quick_actions_track_ios.png)

- *"Show / hide"*  - allows to show or not a track on the map.
- *"Appearance"* - opens [Appearance](../map/tracks-on-map.md#track-appearance) menu of the track.
- *"Export"* - allows to export a track.
- *"Directions"* - opens the track for ["Follow track"](../navigation/gpx-navigation.md) option in Navigation.

</TabItem>

</Tabs>

### Description and info

This part contains info about GPX file and description of a GPX track.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description for track Android](@site/static/img/personal/tracks/description_track_1_android.png) ![Description for track Android](@site/static/img/personal/tracks/description_track_android.png)

- *Image*   <!--how to add any images to descriptions?}-->
- *<Translate android="true" ids="add_description"/>* - for creating description of the track.
- *<Translate android="true" ids="shared_string_edit"/>* - for editing description of the track.
- *<Translate android="true" ids="context_menu_read_full"/>* - for opening and reading full description.
- *<Translate android="true" ids="info_button"/>* - contains info about file size, location folder, date of creation.

</TabItem>

<TabItem value="ios" label="iOS">

![Description for track iOS](@site/static/img/personal/tracks/description_track_ios.png)

- *<Translate ios="true" ids="shared_string_info"/>* - contains info about file size, location folder

</TabItem>

</Tabs>


## Altitude / Speed Graphs 

Click to the "<Translate android="true" ids="shared_string_gpx_track"/>" button opens Graph of Track Context menu. Here there are name of track, three tabs:
- [<Translate android="true" ids="shared_string_overview"/>](../map/track-context-menu.md#overview-1)
- [<Translate android="true" ids="altitude"/>](../map/track-context-menu.md#altitude)
- [Speed](../map/track-context-menu.md#speed)

Graph with additional info and [<Translate android="true" ids="analyze_on_map"/>](../map/tracks-on-map.md#analyze-route-on-map-android), <Translate android="true" ids="shared_string_options"/> buttons.

**<Translate android="true" ids="analyze_on_map"/>** button opens [Analyze track menu](../map/tracks-on-map.md#analyze-route-on-map-android) for the track.

**<Translate android="true" ids="shared_string_options"/>** button opens menu with: "Edit" opens the track in [Plan route tool](../plan-route/index.md), "Delete" allows to delete chosen track item, "Split interval" opens [Split interval function](../map/track-context-menu.md#split-interval) for the track.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_ios.png)

</TabItem>

</Tabs>


### Overview

This tab opens a graph with speed / altitude info on distance, additional track data.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph overview Android](@site/static/img/personal/tracks/track_graph_overview_android.png) 

- *<Translate android="true" ids="distance"/>*.
- *<Translate android="true" ids="shared_string_time_span"/>*.
- *<Translate android="true" ids="shared_string_start_time"/>*.
- *<Translate android="true" ids="shared_string_end_time"/>*.

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph overview iOS](@site/static/img/personal/tracks/track_graph_overview_ios.png) 

- *<Translate ios="true" ids="shared_string_distance"/>*. 
- *<Translate ios="true" ids="shared_string_time_span"/>*. 
- *<Translate ios="true" ids="shared_string_start_time"/>*. 
- *<Translate ios="true" ids="shared_string_end_time"/>*. 

</TabItem>

</Tabs>


### Altitude

This tab opens a graph with altitude / slope info on distance, additional track data.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_android.png) 

- *<Translate android="true" ids="average_altitude"/>*.
- *<Translate android="true" ids="altitude_range"/>*.
- *<Translate android="true" ids="altitude_ascent"/>*.
- *<Translate android="true" ids="altitude_descent"/>*.  


<p>  </p>

#### Online Elevation profile

:::note
<ProFeature/> Online SRTM feature you can use only with Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.
:::

This feature allows to calculate Elevation profile for GPX track online by the OsmAnd server:  

Calculate altitude online on OsmAnd servers, based on satellite imagery and digital elevation models. Differences vs. device recorded altitude may be used as altitude correction.

This feature can help to find Altitude data for any place:  
_[Track Context menu](../map/track-context-menu.md) → <Translate android="true" ids="shared_string_gpx_track,altitude,calculating_altitude,calculate_online"/>_

![Track graph overview Android](@site/static/img/map/track-menu_track-tab_altitude-empty.png)  ![Track graph overview Android](@site/static/img/map/track-menu_track-tab_altitude-dialog.png)   ![Track graph overview Android](@site/static/img/map/track-menu_track-tab_altitude.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_ios.png) 

- *<Translate ios="true" ids="gpx_avg_altitude"/>*. 
- *<Translate ios="true" ids="gpx_alt_range"/>*.
- *<Translate ios="true" ids="gpx_ascent"/>*.
- *<Translate ios="true" ids="gpx_descent"/>*.

</TabItem>

</Tabs>


### Speed

This tab opens a with speed info on distance, additional track data.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_android.png) 

- *<Translate android="true" ids="average_speed"/>*.
- *<Translate android="true" ids="max_speed"/>*.
- *<Translate android="true" ids="moving_time"/>*.
- *<Translate android="true" ids="distance_moving"/>*.

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_ios.png) 

- *<Translate ios="true" ids="gpx_average_speed"/>*. 
- *<Translate ios="true" ids="gpx_max_speed"/>*. 
- *<Translate ios="true" ids="shared_string_time_moving"/>*. 
- *<Translate ios="true" ids="distance_moving"/>*. 

</TabItem>

</Tabs>


## Points / Waypoints

### Add / Delete

Points / Waypoins menu in Context track menu opens list of track / folders waypoints.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu points Android](@site/static/img/personal/tracks/track_menu_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Statistics screen track iOS](@site/static/img/personal/tracks/waypoints_track_list_ios.png)

</TabItem>

</Tabs>

### Waypoints folder 

Manipulation with waypoints folder: change name and color, delete..

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

"&#8285;" button opens waypoint Group menu.

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png) 

Actions:  
- *<Translate android="true" ids="shared_string_show_on_map"/>* - allows to show or not group waypoints on the map.
- *<Translate android="true" ids="shared_string_rename"/>* - allows to change Group name.
- *<Translate android="true" ids="change_color"/>* - allows to change color for group waypoints.
- *<Translate android="true" ids="copy_to_map_markers"/>* - allows to move group waypoints to [Map markers](../personal/markers.md).
- *<Translate android="true" ids="copy_to_map_favorites"/>* - allows to move group waypoints to [Favorites](../personal/favorites.md).
- *<Translate android="true" ids="shared_string_delete"/>* - allows to delete group waypoints.

</TabItem>

<TabItem value="ios" label="iOS">

"&#8230;" button opens waypoint Group menu.

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png) 

Actions:  
- *<Translate ios="true" ids="map_settings_show"/>* - allows to show or not group waypoints on the map.
- *<Translate ios="true" ids="fav_rename"/>* - allows to change Group name.
- *<Translate ios="true" ids="change_color"/>* - allows to change color for group waypoints.
- *<Translate ios="true" ids="shared_string_delete"/>* - allows to delete group waypoints.

</TabItem>

</Tabs>


## Options

Menu "Options" allows to make manipulation with the chosen track, to opens it in other tools.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

- *<Translate android="true" ids="shared_string_show_on_map"/>* - shows or not the track on the map.
- *<Translate android="true" ids="shared_string_appearance"/>* - opens [Appearance menu](../map/tracks-on-map.md#track-appearance-android) for the track.
- *<Translate android="true" ids="follow_track"/>* - starts navigation by [Follow track option](../navigation/gpx-navigation.md).


- *<Translate android="true" ids="join_segments"/>* - allows to join gaps of the track.
- *<Translate android="true" ids="analyze_on_map"/>* - opens [Analyze on map function](../map/tracks-on-map.md#analyze-track-on-map-android).
- *<Translate android="true" ids="analyze_by_intervals"/>* - [analyze the track by time or distance intervals](../map/track-context-menu.md#split-interval).


- *<Translate android="true" ids="shared_string_share"/>* - export the chosen track.
- *<Translate android="true" ids="upload_to_openstreetmap"/>* - [upload the chose track to OpenStreetMap](../plugins/osm-editing.md#how-to-upload-gpx-track).


- *<Translate android="true" ids="edit_track"/>* - open the chosen track in [Plan route tool](../plan-route/create-route.md).
- *<Translate android="true" ids="rename_track"/>* - change track name.
- *<Translate android="true" ids="change_folder"/>* - select folder and add new one for the chosen track.


- *<Translate android="true" ids="shared_string_gps_filter"/>* - allows [to filter points of the track](../map/track-context-menu.md#gps-filter).
- *<Translate android="true" ids="altitude_correction"/>* - to [receive elevation data](../map/track-context-menu.md#online-elevation-profile), attach your track to the roads or calculate it online.
- *<Translate android="true" ids="simulate_your_location"/>* - [simulate your position](../plugins/development.md#gpx-track-simulation) using a GPX track.


- *<Translate android="true" ids="shared_string_delete"/>* - delete the track.

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

- *<Translate ios="true" ids="shared_string_show_on_map"/>* - shows or not the track on the map.
- *<Translate ios="true" ids="shared_string_appearance"/>* - opens [Appearance menu](../map/tracks-on-map.md#track-appearance-android) for the track.
- *<Translate ios="true" ids="shared_string_navigation"/>* - starts navigation by [Follow track option](../navigation/gpx-navigation.md).


- *<Translate ios="true" ids="analyze_on_map"/>* - opens [Analyze on map function](../map/tracks-on-map.md#analyze-track-on-map).


- *<Translate ios="true" ids="shared_string_share"/>* - export the chosen track.
- *<Translate ios="true" ids="upload_to_openstreetmap"/>* - [upload the chose track to OpenStreetMap](../plugins/osm-editing.md#how-to-upload-gpx-track)


- *<Translate ios="true" ids="edit_track"/>* - open the chosen track in [Plan route tool](../plan-route/create-route.md).
- *Dublicate track* - allows to make and save a copy of the track.


- *<Translate ios="true" ids="rename_track"/>* - change track name.
- *<Translate ios="true" ids="change_folder"/>* - select folder and add new one for the chosen track.

- *<Translate ios="true" ids="shared_string_delete"/>* - delete the track.


</TabItem>

</Tabs>


### Split interval

<InfoAndroidOnly />

A user can divide a track by intervals (distance or time) and analyze it.  

Split the track  by distance or time interval.  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*  

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)  


### GPS filter

<InfoAndroidOnly />

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, Min GPS Precision for saving new track without excluded points. -->

This filter allows you to improve your track statistics by excluding unnecessary or incorrect data. You can filter out track points that don't fit your track parameters, and as a result, get a more accurate graph and visual route line without distortion or recording noise. You can make changes with filters such as *Smoothing*, *Speed*, *Altitude* and *GPS Precision*, which hide filtered points from the current track. Besides, in the *Statistics* menu you can check how your changes are displayed on the graph before you save them. You can also do *Reset to original* and *Save as a copy* of your track in this filter without saving the original one.  

:::note
GPS filter is in the context menu options of the selected track:
<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>
:::

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- In the screen you see the map (with [zoom buttons](../map/interact-with-map.md#my-location--zoom), [my location button](../map/interact-with-map.md#my-location--zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens "Actions" part of "Filter" or "Statistics" menu.
- "&#8634;" button allows to reset the track to original.
- "My track location" button allows to move the map to your track.-->

The Android GPS Filter app page includes:  
* A map with a saved track and an extra button *My track location* (it aligns a track to the center of a map)
* Buttons *Refresh* and *Menu* at the top (*Menu* opens *Action* field at the bottom of the page)
* Blocks *Filter*, *Statistics*, *Action*

&nbsp;  
#### **Filter** Menu

In this menu, you can change some parameters of your track with filters such as, *Smoothing*, *Speed*, *Altitude*, *GPS precision*. The menu is divided into a Points part and an Actions part.

| **_Points_** | 
|:------------|
|This part shows the number of points after filtering and the total number of points on the selected track before filters were used.| 
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| **_Actions_** | 
|*"Smoothing"* – Sets the threshold distance between points. <!--Track points not at least this distance away from the last visible point will be hidden.--> All points on the track, that are at a distance from each other less than the distance selected by the filter, will be hidden. Track points are counted from the last visible point. Note, that high thresholds can oversimplify the track geometry.| 
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*"Speed"* – Only the track points that correspond to the selected speed interval will be displayed on the graph and on the map, the others will be hidden.| 
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) | 
|*"Altitude"* – Only the track points that correspond to the selected altitude interval will be displayed on the graph and on the map, the others will be hidden.| 
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) | 
|*"GPS precision"* – Sets the maximum permissible value for HDOP. Points with a higher value will be hidden.| 
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) | 


&nbsp;  
#### **Statistics**

Statistics tab displays information about **modified** track i.e. without filtered values. It's displayed within stat blocks and graph data.
 
- The *Data* part shows statistics similar to the Filter menu.  
- The *Graph* part displays three types of graphs by parameters: Overview, Altitude, Speed. This functional is a copy of [track Graph](../map/track-context-menu.md#altitude--speed-graphs).

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_android.png)  

&nbsp;  
#### **Actions**

Actions list is available on the bottom of **Filter** or **Statistics** tab. OsmAnd will apply all changes made to the track without updating the file. You can save the changes manually.

- *<Translate android="true" ids="reset_to_original"/>* – allows you to return the parameters to their original state.  
- *<Translate android="true" ids="save_as_copy"/>* – allows you to save the track as a new one.
- *<Translate android="true" ids="save_changes_into_file"/>* – allows you to rewrite the track with the new parameters.  

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)  


## Read more

- [GPX tracks](../personal/tracks.md).
- [Tracks on the map](../map/tracks-on-map.md).
- [Plan route](../plan-route/index.md).
- [Trip Recording](../plugins/trip-recording.md).
- [Analyze on Map](../map/tracks-on-map.md).
