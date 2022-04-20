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

<InfoIncompleteArticle/>

Tracks Context menu is menu with actions and data of GPX-track.

For openng Track Context menu:

<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> → click to choosing track or just tap to choosing track on the map.

<p> </p>

There are the next tabs of Track Context menu:

 - [Overview](/docs/documentation/map/track-context-menu#overview)
 - [Altitude / Speed Graphs](/docs/documentation/map/track-context-menu#altitude--speed-graphs) 
 - [Points / Waypoints](/docs/documentation/map/track-context-menu#points--waypoints)
 - [Options](/docs/documentation/map/track-context-menu#options)

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track menu Android](@site/static/img/personal/tracks/menu_track_android.png) ![Track menu iOS](@site/static/img/personal/tracks/menu_track_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Track menu Android](@site/static/img/personal/tracks/menu_track_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Statistics screen track iOS](@site/static/img/personal/tracks/menu_track_ios.png)

</TabItem>

</Tabs>

## Overview

In Overview user can find track data info and make actions with viewing of the chosen track:

- [Info panel](/docs/documentation/map/track-context-menu#info-panel) - shows track info: distance, speed, ascent/descent...
- [Quick actions](/docs/documentation/map/track-context-menu#quick-actions) - action buttons for the chosen track.
- [Description and info](/docs/documentation/map/track-context-menu#description-and-info) - track file info and track description.

You can [short tap](/docs/documentation/map/map-context-menu#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track menu overview Android](@site/static/img/personal/tracks/track_menu_overview_android.png) ![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Track menu overview Android](@site/static/img/personal/tracks/track_menu_overview_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

 ![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs>

### Info panel

Info panel shows the track name, info about trip data, distance and direction to chosen track point from your position.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Full info for track Android](@site/static/img/personal/tracks/full_info_track_android.png) ![Full info for track Android](@site/static/img/personal/tracks/full_info_track_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Full info for track Android](@site/static/img/personal/tracks/full_info_track_android.png)

Next track info:
- The track name - you can change it in [Options menu](/docs/documentation/map/track-context-menu#options).
- Short description of the track - short part from [full description](/docs/documentation/map/track-context-menu#description).
- Direction and distance to the point on the track - blue arrow with distance.
- Info panel of data trip:

 <Translate android="true" ids="distance"/> - showing track distance.

 <Translate android="true" ids="altitude_ascent"/> / <Translate android="true" ids="altitude_descent"/> - sums of ascents and descents of a trip.

 <Translate android="true" ids="altitude_range"/> - showing min and max altitude of a trip.

<p>  </p>

 <Translate android="true" ids="average_speed"/> - average speed of a trip.

<p>  </p>

 <Translate android="true" ids="max_speed"/> - max speed of a trip.

<p>  </p>

 <Translate android="true" ids="shared_string_time_span"/> - recorded time of a trip.

<p>  </p>

 <Translate android="true" ids="shared_string_time_moving"/> - sum of time during motion of a trip.

</TabItem>

<TabItem value="ios" label="iOS">

![Full info for track Android](@site/static/img/personal/tracks/full_info_track_ios.png)

Next track info:
- The track name - you can change it in [Options menu](/docs/documentation/map/track-context-menu#options).
- Direction and distance to the point on the track - blue arrow with distance.
- Info panel of data trip:

 <Translate ios="true" ids="shared_string_distance"/> - showing track distance.
 
<p>  </p>

 <Translate ios="true" ids="gpx_ascent"/> / <Translate ios="true" ids="gpx_descent"/> - sums of ascents and descents of a trip.

<p>  </p>

 <Translate ios="true" ids="gpx_alt_range"/> - showing min and max altitude of a trip.

<p>  </p>

 <Translate ios="true" ids="gpx_average_speed"/> - average speed of a trip.

<p>  </p>

 <Translate ios="true" ids="gpx_max_speed"/> - max speed of a trip.

<p>  </p>

 <Translate ios="true" ids="total_time"/> - recorded time of a trip.

<p>  </p>

 <Translate ios="true" ids="moving_time"/> - sum of time during motion of a trip.

</TabItem>

</Tabs>

### Quick actions

Buttons panel with the next action: Show/Hide a track on the map, opening [Appearance](/docs/documentation/map/tracks-on-map#track-appearance) menu of a track, Export / [Plan route](/docs/documentation/plan-route/create-route), [Navigation](/docs/documentation/navigation/gpx-navigation).

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![quick actions for track Android](@site/static/img/personal/tracks/quick_actions_track_android.png) ![quick actions for track iOS](@site/static/img/personal/tracks/quick_actions_track_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![quick actions for track Android](@site/static/img/personal/tracks/quick_actions_track_android.png)

- "Show / hide"  - track on the map
- "Appearance" - opens [Appearance](/docs/documentation/map/tracks-on-map#track-appearance) menu of the track.
- "Edit track" - opens the track in ["Plan route" tool](/docs/documentation/plan-route/create-route).
- "Directions" - opens the track for ["Follow track"](/docs/documentation/navigation/gpx-navigation) option in Navigation.

</TabItem>

<TabItem value="ios" label="iOS">

![quick actions for track iOS](@site/static/img/personal/tracks/quick_actions_track_ios.png)

- "Show / hide"  - allows to show or not a track on the map.
- "Appearance" - opens [Appearance](/docs/documentation/map/tracks-on-map#track-appearance) menu of the track.
- "Export" - allows to export a track.
- "Directions" - opens the track for ["Follow track"](/docs/documentation/navigation/gpx-navigation) option in Navigation.

</TabItem>

</Tabs>

### Description and info

This part contains info about GPX file and description of a GPX track.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Description for track Android](@site/static/img/personal/tracks/description_track_android.png) ![Description for track iOS](@site/static/img/personal/tracks/description_track_ios.png)

</TabItem>

<TabItem value="android" label="Android">

![Description for track Android](@site/static/img/personal/tracks/description_track_1_android.png) ![Description for track Android](@site/static/img/personal/tracks/description_track_android.png)

- Image??   <!--how to add any images to descriptions?}-->
- <Translate android="true" ids="add_description"/> - for creating description of the track.
- <Translate android="true" ids="shared_string_edit"/> - for editing description of the track.
- <Translate android="true" ids="context_menu_read_full"/> - for opening and reading full description.
- <Translate android="true" ids="info_button"/> - contains info about file size, location folder, date of creation.

</TabItem>

<TabItem value="ios" label="iOS">

![Description for track iOS](@site/static/img/personal/tracks/description_track_ios.png)

- <Translate ios="true" ids="shared_string_info"/> - contains info about file size, location folder

</TabItem>

</Tabs>



## Altitude / Speed Graphs 

Click to the "<Translate android="true" ids="shared_string_gpx_track"/>" button opens Graph of Track Context menu. Here there are name of track, three tabs:
- [<Translate android="true" ids="shared_string_overview"/>](/docs/documentation/map/track-context-menu#overview-1)
- [<Translate android="true" ids="altitude"/>](/docs/documentation/map/track-context-menu#altitude)
- [<Translate android="true" ids="map_widget_speed"/>](/docs/documentation/map/track-context-menu#speed)

Graph with additional info and [<Translate android="true" ids="analyze_on_map"/>](/docs/documentation/map/tracks-on-map#analyze-route-on-map-android), <Translate android="true" ids="shared_string_options"/> buttons.

**<Translate android="true" ids="analyze_on_map"/>** button opens [Analyze track menu](/docs/documentation/map/tracks-on-map#analyze-route-on-map-android) for the track.

**<Translate android="true" ids="shared_string_options"/>** button opens menu with: "Edit" opens the track in [Plan route tool](/docs/documentation/plan-route), "Delete" allows to delete chosen track item, "Split interval" opens [Split interval function](/docs/documentation/map/track-context-menu#split-interval) for the track.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_android.png) ![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_ios.png)

</TabItem>

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

<TabItem value="def" label="Default" default>

![Track graph overview Android](@site/static/img/personal/tracks/track_graph_overview_android.png) ![Track graph overview iOS](@site/static/img/personal/tracks/track_graph_overview_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

![Track graph overview Android](@site/static/img/personal/tracks/track_graph_overview_android.png) 

- <Translate android="true" ids="distance"/>
- <Translate android="true" ids="shared_string_time_span"/>
- <Translate android="true" ids="shared_string_start_time"/>
- <Translate android="true" ids="shared_string_end_time"/>

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph overview iOS](@site/static/img/personal/tracks/track_graph_overview_ios.png) 

- <Translate ios="true" ids="shared_string_distance"/> 
- <Translate ios="true" ids="shared_string_time_span"/> 
- <Translate ios="true" ids="shared_string_start_time"/> 
- <Translate ios="true" ids="shared_string_end_time"/> 


</TabItem>

</Tabs>





### Altitude

This tab opens a graph with altitude / slope info on distance, additional track data.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_android.png) ![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_ios.png) 

</TabItem>

<TabItem value="android" label="Android">


![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_android.png) 

- <Translate android="true" ids="average_altitude"/>
- <Translate android="true" ids="altitude_range"/>
- <Translate android="true" ids="altitude_ascent"/>
- <Translate android="true" ids="altitude_descent"/>

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_ios.png) 

- <Translate ios="true" ids="gpx_avg_altitude"/> 
- <Translate ios="true" ids="gpx_alt_range"/> 
- <Translate ios="true" ids="gpx_ascent"/> 
- <Translate ios="true" ids="gpx_descent"/> 

</TabItem>

</Tabs>



### Speed

This tab opens a with speed info on distance, additional track data.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_android.png) ![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_android.png) 

 - <Translate android="true" ids="average_speed"/>
 - <Translate android="true" ids="max_speed"/>
 - <Translate android="true" ids="moving_time"/>
 - <Translate android="true" ids="distance_moving"/>

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_ios.png) 

- <Translate ios="true" ids="gpx_average_speed"/> 
- <Translate ios="true" ids="gpx_max_speed"/> 
- <Translate ios="true" ids="shared_string_time_moving"/> 
- <Translate ios="true" ids="distance_moving"/> 

</TabItem>

</Tabs>

## Points / Waypoints

### Add / Delete

Points / Waypoins menu in Context track menu opens list of track / folders waypoints.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track menu points Android](@site/static/img/personal/tracks/track_menu_points_android.png) ![Statistics screen track iOS](@site/static/img/personal/tracks/waypoints_track_list_ios.png)

</TabItem>

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

<TabItem value="def" label="Default" default>

"&#8285;" button opens waypoint Group menu.

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png) ![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png) 

</TabItem>

<TabItem value="android" label="Android">

"&#8285;" button opens waypoint Group menu.

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png) 

Actions:
- &nbsp;<Translate android="true" ids="shared_string_show_on_map"/> - allows to show or not group waypoints on the map.
- &nbsp;<Translate android="true" ids="shared_string_rename"/> - allows to change Group name.
- &nbsp;<Translate android="true" ids="change_color"/> - allows to change color for group waypoints.
- &nbsp;<Translate android="true" ids="copy_to_map_markers"/> - allows to move group waypoints to [Map markers](/docs/documentation/personal/markers).
- &nbsp;<Translate android="true" ids="copy_to_map_favorites"/> - allows to move group waypoints to [Favorites](/docs/documentation/personal/favorites).
- &nbsp;<Translate android="true" ids="shared_string_delete"/> - allows to delete group waypoints.

</TabItem>

<TabItem value="ios" label="iOS">

"&#8230;" button opens waypoint Group menu.

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png) 

Actions:
- <Translate ios="true" ids="map_settings_show"/> - allows to show or not group waypoints on the map.
- <Translate ios="true" ids="fav_rename"/> - allows to change Group name.
- <Translate ios="true" ids="change_color"/> - allows to change color for group waypoints.
- <Translate ios="true" ids="shared_string_delete"/> - allows to delete group waypoints.

</TabItem>

</Tabs>

## Options

Menu "Options" allows to make manipulation with the chosen track, to opens it in other tools.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  ![Track menu options iOS](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

- &nbsp;<Translate android="true" ids="shared_string_show_on_map"/> - shows or not the track on the map.
- &nbsp;<Translate android="true" ids="shared_string_appearance"/> - opens [Appearance menu](/docs/documentation/map/tracks-on-map#track-appearance-android) for the track.
- &nbsp;<Translate android="true" ids="shared_string_navigation"/> - starts navigation by [Follow track option](/docs/documentation/navigation/gpx-navigation).
- &nbsp;<Translate android="true" ids="gpx_join_gaps"/> - allows to join gaps of the track.
- &nbsp;<Translate android="true" ids="analyze_on_map"/> - opens [Analyze on map function](/docs/documentation/map/tracks-on-map#analyze-track-on-map-android).
- &nbsp;<Translate android="true" ids="analyze_by_intervals"/> - [analyze the track by time or distance intervals](/docs/documentation/map/track-context-menu#split-interval).
- &nbsp;<Translate android="true" ids="shared_string_share"/> - export the chosen track.
- &nbsp;<Translate android="true" ids="upload_to_openstreetmap"/> - [upload the chose track to OpenStreetMap](/docs/documentation/plugins/osm-editing#how-to-upload-gpx-track).
- &nbsp;<Translate android="true" ids="edit_track"/> - open the chosen track in [Plan route tool](/docs/documentation/plan-route/create-route).
- &nbsp;<Translate android="true" ids="rename_track"/> - change track name.
- &nbsp;<Translate android="true" ids="change_folder"/> - select folder and add new one for the chosen track.
- &nbsp;<Translate android="true" ids="shared_string_gps_filter"/> - allows [to filter points of the track](/docs/documentation/map/track-context-menu#gps-filter). 
- &nbsp;<Translate android="true" ids="shared_string_delete"/> - delete the track.

</TabItem>

<TabItem value="ios" label="iOS">

 ![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

- &nbsp;<Translate ios="true" ids="map_settings_show"/> - shows or not the track on the map.
- &nbsp;<Translate ios="true" ids="map_settings_appearance"/> - opens [Appearance menu](/docs/documentation/map/tracks-on-map#track-appearance-android) for the track.
- &nbsp;<Translate ios="true" ids="shared_string_navigation"/> - starts navigation by [Follow track option](/docs/documentation/navigation/gpx-navigation).
- &nbsp;<Translate ios="true" ids="analyze_on_map"/> - opens [Analyze on map function](/docs/documentation/map/tracks-on-map#analyze-track-on-map-android).
- &nbsp;<Translate ios="true" ids="shared_string_export"/> - export the chosen track.
- &nbsp;<Translate ios="true" ids="edit_track"/> - open the chosen track in [Plan route tool](/docs/documentation/plan-route/create-route).
- &nbsp;Dublicate track - allows to make and save a copy of the track.
- &nbsp;<Translate ios="true" ids="gpx_rename_q"/> - change track name.
- &nbsp;<Translate ios="true" ids="plan_route_change_folder"/> - select folder and add new one for the chosen track.
- &nbsp;<Translate ios="true" ids="shared_string_delete"/> - delete the track.


</TabItem>

</Tabs>


### Split interval

A user can divide a track by intervals (distance or time) and analyze it.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)

</TabItem>

<TabItem value="android" label="Android">

<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>

<p>  </p>

- Split the track  by distance or time interval

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

> This feature doesn't exist for iOS version of OsmAnd.

</TabItem>

</Tabs>

### GPS filter

A user can filter points of a GPX track by Smoothing, Speed, Altitude, Min GPS Precision for saving new track without excluded points.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

</TabItem>

<TabItem value="android" label="Android">

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

In the screen you see the map (with [zoom buttons](/docs/documentation/map/interact-with-map#my-location--zoom), [my location button](/docs/documentation/map/interact-with-map#my-location--zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens "Actions" part of "Filter" or "Statistics" menu.
- "&#8634;" button allows to reset the track to original.
- "My track location" button allows to move the map to your track.

**Filter** Menu

Here you can change any filter parameters for your track. The menu two parts: Points and Actions.

| **_Points_** | 
|:------------|
|Numbers points after filtration / all points of the track.| 
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) | 
|*Smoothing*: Set the threshold distance between points. Track points not at least this distance away from the last visible point will be hidden. Be aware that high thresholds may oversimplify the track geometry.| 
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Speed*: Only track points matching the set interval will appear on the chart and map, the rest will be hidden.| 
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) | 
|*Altitude*: Only track points matching the set interval will appear on the chart and map, the rest will be hidden.| 
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) | 
|*GPS precision*: Set the maximum accepted value for HDOP. Points with higher value will be hidden.| 
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) | 


**_Actions_**

OsmAnd will apply the changes to the track without updating the file. You can save changes manually.

- <Translate android="true" ids="reset_to_original"/> - allows to reset parameters to original.
- <Translate android="true" ids="save_as_copy"/> - allows to save the track as new.
- <Translate android="true" ids="save_changes_into_file"/> - allows to rewrite the track with new parameters.

**Statistics** Menu

This menu has two parts: Graph and Actions. Actions part is similar like Filter menu.

The Graph part has three graph parametes: Overview, Altitude, Speed. This functional is a copy of [track Graph](/docs/documentation/map/track-context-menu#altitude--speed-graphs).

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_android.png)


</TabItem>

<TabItem value="ios" label="iOS">


> This feature doesn't exist for iOS version of OsmAnd.


</TabItem>

</Tabs>


## Read more

[GPX tracks](/docs/documentation/personal/tracks)

[Tracks on the map](/docs/documentation/map/tracks-on-map)

[Plan route](/docs/documentation/plan-route)

[Trip Recording](/docs/documentation/plugins/trip-recording)

[Analyze on Map](/docs/documentation/map/tracks-on-map)
