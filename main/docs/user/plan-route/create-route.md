---
sidebar_position: 1
title:  Plan a Route
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview

The **Plan a route** (*Menu → Plan a route*) tool is a powerful feature of the OsmAnd application that allows you to [create new routes](#create-new-route) as GPX tracks, [edit and add new segments](#segments) to already saved tracks, [measure distances](#distance-measurement) on the map, and [attach track](#attach-track-to-roads) segments to the nearest available road using different navigation profiles. The feature is designed to work in *offline mode*.

A route consists of a set of segments between specified points. The segments can be either straight lines or routes adapted to the selected profile. The route can be saved as GPX for later import, edit and [navigation](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


## Main use cases

<Tabs groupId="operating-systems"><TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem><TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>
</Tabs>



### Create New Route

To create a new track in GPX format, use the main function of the *Plan a route* tool. Unlike recording the current track with *[Trip recording plugin](../plugins/trip-recording.md)*, pre-creating a route has many advantages. You can [add](#add-points) as many points as you want to the route, [delete and move them](#point-context-menu), change route types by [segments](#segments), and get [detailed information about the route](#graph).  

By default, the routing type will match the previously selected profile, click on the routing icon to select how the application should calculate the segment to connect points. The available profile should be configured [separately](../navigation/routing/osmand-routing.md#routing-types).  

You can **zoom in and out** for easy placement of points when creating or editing a track. When you **zoom out**, the points on the track become invisible for a better view of the entire length of the track and the map as a whole. Only the last added point and the pointer for adding the next point remain visible.


### Modify existing GPX Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

*Plan a route* tool allows modifying [existing GPX track](../personal/tracks/create-edit.md) as well as an [imported track](../personal/tracks/manage-tracks.md#import). However in case you need to exclude a large amount of points based on generic criterias, [*<Translate android="true" ids="shared_string_gps_filter"/>*](../map/tracks/track-context-menu.md#gps-filter) might be a more suitable tool.


### Distance Measurement

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)  

*Plan a route* is a quick and easy way to measure the distance between points.

- Select the *Straight line* method of route planning. A dashed line will be drawn between the points.
- [Add](#add-points) the first point on the map from which the line will be drawn.
- Move the map to determine the distance and the azimuth. The information will be displayed in a field with a list of points below the map.

:::note
The *Straight Line* is needed and will be used for areas not covered by routing data, such as off-road and off-track areas.
:::


### Get Elevation Data

<InfoAndroidOnly />

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)  

If [*Elevation data*](../map/tracks/track-context-menu.md#calculating-missing-elevation) is missing in an existing track, it's possible to add it using follow tools:

- [*Use nearby roads*](#attach-track-to-roads). This mode uses offline maps to find the nearest roads to build a track, so elevation data will be retrieved from attached roads. The geometry of the track can be adjusted.  
- [*Use Terrain maps*](../map/tracks/track-context-menu.md#calculating-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Mode calculates altitude based on Terrain map data (3D). The difference between the altitude recorded by your device can be used for elevation correction.  The geometry of the track remains unchanged.


### Attach track to Roads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>  

**Attach to roads** allows to attach a recorded or an imported track to the roads from OsmAnd offline maps to get additional information:
- Correct turn information for [*Navigate by track*](../navigation/setup/gpx-navigation.md#how-to-follow-the-track) (especially roundabouts).
- Street names and lane information
- Elevation data
- [Road attributes](../navigation/setup/route-details.md#road-attributes)

You can select a distance threshold how far points of a simplified track could be from points of an original track.

:::note 
If you open a track and see ***undefined*** profile icon, that means you can select whether to attach track to roads or simply connect points with a straight line and treat as a recorded track.
:::


## Points & Segments

### Adding points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

In order to measure a distance or plan a trip, you need to add points at the *Pointer* location one by one and click *Add Point* button. By accessing **points list** below you can reorder points, delete or access to a specific [point context menu](#point-context-menu).

:::note
 You can also **Undo**/**Redo** every action you made in plan route.
:::
  
### Route between points

Added points in the editor could be connected as a straight line or as a route between points of a selected profile. *Route between points* can be accessed in several ways:

1. From the *Options* menu *→* *Route between points*.
2. Tap the *profile icon* in the bottom left corner of the map screen. Not on the top icon, it will open the Configure Map menu.
3. In the *[Point Context menu](#point-context-menu) → Change route type before/after*.  


<Tabs groupId="operating-systems"><TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem><TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png) ![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem></Tabs>

You can change route between 2 specific points or between multiple points:
- *Whole track*. The whole track will be recalculated using the selected profile.
- *Next segment*. Only the next segment will be recalculated using the selected profile.  
- *Change the Route Type Before/After Point* - In the *Point context menu* you can change the way the route is calculated for the section from this point to the nearest or to the edge point. The setting provides information about the distance from this point to the beginning or the end of the route or to the next/previous point.
- *Recalculate routes*. You can use route recalculation without changing the profile type. The profile icon shown on the planned route in the tool will not change, but the route type will match the selected one. You may need this to find alternative routes.  

### Segments

A track segment is a collection of points that are connected without **gaps**. In a plan route tool it's possible:
- To merge segments with to each other: [Join segments](#point-context-menu) option removes gap to previously separated segments.
- To split or create new unconnected sections of a track. To create one, use the [Start new segment](#point-context-menu) option or select the [Split](#point-context-menu) feature from the Point context menu.

### Point Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>

Each point on your route has its own context menu. It shows the *sequence number* of the point, the *distance from the start of the route*, the function to move it on the map and remove it, and a set of actions with sections of the route before and after this point. To edit, tap the required point in the [list of points](#list-of-points) or directly on the map.

- ***Information about the point***. The number of the point in the list. And the distance to the first point based on the routing type set, the distance may change when recalculated to the new type if the *Route between points* parameter is changed.  

- ***<Translate ios="true" ids="move_point"/>***. Allows you to change the position of a point on the map. Move the map using gestures to change the location of the point. The point indicator will be in the centre of the visible part of the map.  

- ***<Translate ios="true" ids="add_point_after"/>***. Move the map to add an additional point after the selected point. You can add as many points as you need until you tap cancel or apply.  

- ***<Translate ios="true" ids="add_point_before"/>***. Move the map to add as many points as necessary after the selected point on the segment between this point and the next one.  

- ***<Translate ios="true" ids="trim_before"/>***. You can trim the whole section of the route, points and segments, from its start to the selected point. The distance to be trimmed is indicated under the option name.  

- ***<Translate ios="true" ids="trim_after"/>***. You can trim a route, points and segments, from the last point added to the selected point. The distance to be trimmed is indicated under the option name.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Allows to split the route before the selected point into separate unconnected segments.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Allows to split the route after the selected point into separate unconnected segments.  

- ***<Translate ios="true" ids="join_segments"/>***. The last point on one of the split segments and the next in the list of points on the other segment have this connection setting.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. You can change the connection mode, the routing type configured on the available profile, between points on the previous segment, or for all segments from the start of the route to the selected point.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. You can change the routing type between points on the next segment or for all segments from the selected point to the last added point.  

- ***<Translate ios="true" ids="delete_point"/>***. Remove the selected point from the route. Similar to deleting a point in a list.

### Multimodal routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>  

With Plan route tool you can create multi-modal routes i.e. first part could be a *cycling* part, then could be a straight line and then a *pedestrian*. 
You can do it via option [Route between points](#route-between-points). Multi-modal navigation is not possible, so you will need to select one the most suited profile to follow turn instructions.

## Editor

### Save route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  


After [you have added](#add-points) at least one point to the map, you can use the save option. All tracks saved in *Plane a route* can be found in the main *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/create-edit.md)*.  

There are four ways to save:

- ***Quick save*** - top right button ***Done*** / ***Save*** (for existing tracks) allows to quickly save your changes and exit Plan Route tool. Name is generated based on the current date. 
- ***Save changes*** in [Options menu](#options) allows you to save changes to a file and continue planning the route.
- ***Save as new track*** in [Options menu](#options) opens dialog where you could specify track name and track folder route will be saved to.
- ***Add changes to a track*** - attaches a created track as a [separate segment](#segments) to an other existing track. Changes to a selected track *cannot be undone*. 

:::note

When saving new track you can select option ***Simplified*** track, so the track might be compatible with other 3rd party applications. Technically track will be saved without route instructions just as a pure geometry track.

:::

### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [*<Translate android="true" ids="route_between_points"/>*](#route-between-points). Shows the chosen application profile (the straight line by default). Tap this action is equal *Profile* button with opening application [profile menu](../personal/profiles.md).
- *<Translate ios="true" ids="gpx_start_new_segment"/>* (*iOS*) or *<Translate android="true" ids="plan_route_add_new_segment"/>* (*Android*). Draws new route segments that do not connect to the previous segment.
- [*<Translate android="true" ids="shared_string_save_changes"/>*](#save-route). If it is a new track without linking to the existing one, the *Save as new track* menu opens. When you add new segments to an opened or imported track, the notification about saving the GPS file to the storage appears, after which you can continue to create the next segment.
- [*<Translate android="true" ids="save_as_new_track"/>*](#save-route). Saves your route like GPX track.
- [*<Translate android="true" ids="add_to_a_track"/>*](#save-route). Add your route to a track from your track folder and save the new track.
- [*<Translate android="true" ids="shared_string_navigation"/>*](../navigation/setup/gpx-navigation.md). Starts navigation from your position to the finish point using a drawn route.
- *<Translate android="true" ids="reverse_route"/>*. You swap the Start point of the route and the last added point. The route segment settings do not change when Reverse is applied.
- [*<Translate android="true" ids="attach_to_the_roads"/>*](#attach-track-to-roads). Creates an approximate route. Each point on the track is matched to the nearest permitted road on the map according to the selected profile and threshold distance.
- [*<Translate android="true" ids="shared_string_gps_filter"/>*](../map/tracks/track-context-menu.md#gps-filter) (Android only). You can filter out route points that do not match the selected routing type, delete unnecessary data or correct inaccurate data. GPS filter will only work if the routing type is specified as *Straight Line*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [*<Translate android="true" ids="get_altitude_data"/>*](#get-elevation-data) (*Android only*). This option is only displayed in the menu if no elevation data is available. With this [option](#get-elevation-data), you can choose to calculate altitude using *Terrain map data* or use data from downloaded maps to find the *nearby roads*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. It archives completely all your actions. An "artefact" remains on the map - the dotted lines of the just cleared route. It disappears at the next adding new points. You can cancel the Clear All function with the Return Action button. The feature does not affect the unchanged parts of the routes opened in the tool.    

### Graph

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.png)

</TabItem>

</Tabs>

During route planning, the [graph](../navigation/setup/route-details.md#elevation-graph) displays route altitude and slope percentage information, plus you can tap anywhere on the graph to display a pointer with particular data.  

- For **Android**, the graph is displayed in the *Graph* tab when creating or opening a track, and when [*Navigation*](#navigation-with-plan-a-route) using *Plan a route*.
- For **iOS**, the graph is only available through the *[Options](#menu-options) → Navigation* menu.

When calculating a route for navigation in *Plan a route*, you can find out additional track information such as [*Elevation info*](../navigation/setup/route-details.md#elevation-info) and [*Road attributes*](../navigation/setup/route-details.md#road-attributes), and use the [*Analyze on map*](../navigation/setup/route-details.md#analyse-on-map) tool. Tap the *Details* button below the graph.  



## Related Articles

- [Show track on Map](../map/tracks/index.md)
- [Analyze on Map](../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../map/tracks/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)

> *This article was last updated in August 2024*
