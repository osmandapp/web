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

<InfoIncompleteArticle/>


## Overview

The **Plan a route** (*Menu → Plan a route*) tool is a powerful feature of the OsmAnd application that allows you to [create new routes](#create-new-route) as GPX tracks, [edit and add new segments](#segments---route-between-points) to already saved tracks, [measure distances](#distance-measurement) on the map, and [attach track](#attach-track-to-roads) segments to the nearest available road using different navigation profiles. The feature is designed to work in *offline mode*.

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

To create a new track in GPX format, use the main function of the *Plan a route* tool. Unlike recording the current track with *[Trip recording plugin](../plugins/trip-recording.md)*, pre-creating a route has many advantages. You can [add](#add-points) as many points as you want to the route, [delete and move them](#point-context-menu), change route types by [segments](#segments---route-between-points), and get [detailed information about the route](#graph).  

By default, the routing type will match the previously selected profile, click on the routing icon to select how the application should calculate the segment to connect points. The available profile should be configured [separately](../navigation/routing/osmand-routing.md#routing-types).  

You can **zoom in and out** for easy placement of points when creating or editing a track. When you **zoom out**, the points on the track become invisible for a better view of the entire length of the track and the map as a whole. Only the last added point and the pointer for adding the next point remain visible.


### Modify GPX Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

*Plan a route* tool allows modifying [existing GPX track](../personal/tracks/create-edit.md) as well as an [imported track](../personal/tracks/manage-tracks.md#import).  

- Open the required track.
- If necessary, use [Attach to the roads](#add-to-a-track).
- Start editing the route using the [points list](#point-context-menu), start a [new segment](#segments---route-between-points) using the [Options menu](#menu-options) or [continue](#add-points) the route forward.  
- To find out more details about the route, use the [Graph](#graph).


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

If [*Elevation data*](../map/tracks/track-context-menu.md#calculating-missing-elevation) was missed when opening or importing a track, you can use one of the route calculation modes.

- [*Use nearby roads*](#use-nearby-roads). This mode uses previously loaded maps and elevation data to find the nearest roads to build a track. The geometry of the track can be adjusted.  
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

When you open a track in *Plan a route*, if the parameters with which this route was recorded or created do not match the current ones, the tool can offer you two options to recalculate the route. There are continue to connect the points with a *straight line* or *attach it* to the nearest available road.  

The current parameter status, the route type shown by an icon in the screen's bottom left corner, will be undefined and indicated by a *question mark*. It is the one you need to tap to access these settings.  

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_attach_andr.png)  

The *Plan a route* tool in the OsmAnd app automatically calculates a track, attaching its sections to the nearest permitted road, depending on the routing type selected. The **Attach to the roads** feature is necessary for imported tracks, especially if they have been created with other applications, but also for large existing tracks where the routing types at different sections need to be changed and the track needs to be recalculated.  

Additional conditions for opening the Attach to roads menu:

- If no routing data is available in the GPX track or a straight line is selected.
- No internet connection or location data.
- *Attach to the roads* may not be activated if the *Plan a route* tool has already automatically linked GPX track points to the nearest road points.

:::note
For more information on attaching track to the road, see the Navigation section, the article [*Navigate by track*](../navigation/setup/gpx-navigation.md#how-to-follow-the-track).
:::

## Editor

### Points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

In order to measure a distance or plan a trip, you need to add points at the *Pointer* location one by one and clicking *Add Point* button. By accessing **points list** below you can reorder points, delete or access to a specific [point context menu](#point-context-menu).

:::note
 You can also **Undo**/**Redo** every action you made in plan route.
:::
  
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

- [*<Translate ios="true" ids="change_route_type_before"/>*](#change-the-route-type-beforeafter-point). You can change the connection mode, the routing type configured on the available profile, between points on the previous segment, or for all segments from the start of the route to the selected point.  

- [*<Translate ios="true" ids="change_route_type_after"/>*](#change-the-route-type-beforeafter-point). You can change the routing type between points on the next segment or for all segments from the selected point to the last added point.  

- ***<Translate ios="true" ids="delete_point"/>***. Remove the selected point from the route. Similar to deleting a point in a list.


### Segments - Route between points

A segment is a section of a road, the distance between two points. The whole route consists of a set of segments you have set up, connected to each other or spaced apart from each other.

- Segments can be connected to each other: adding points also adds a new segment, you can use the [Join segments](#menu-options) option for previously separated segments or the [Add to a track](#add-to-a-track) feature.
- Segments can be separate, unconnected sections of track. To create one, use the [Start new segment](#menu-options) option or select the [Split](#point-context-menu) feature from the Point context menu.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png)

</TabItem>

</Tabs>

*Route between points* can be accessed in several ways:

1. From the *Options* menu *→* *Route between points*.
2. Tap the *profile icon* in the bottom left corner of the map screen. Not on the top icon, it will open the Configure Map menu.
3. In the *[Point Context menu](#point-context-menu) → Change route type before/after*.  

With this option, you can choose how points are connected for the whole track or only for the next segment. This can be done in a straight line or by calculating a route using one of the [profiles](../navigation/routing/osmand-routing.md#routing-types) that you have enabled in the OsmAnd app *Menu → Settings → App profiles*.

- *Whole track*. The whole track will be recalculated using the selected profile.
- *Next segment*. Only the next segment will be recalculated using the selected profile.  

**Recalculate routes**. You can use route recalculation without changing the profile type. The profile icon shown on the planned route in the tool will not change, but the route type will match the selected one. You may need this to find alternative routes.  


### Change the Route Type Before/After Point

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>

In the *Point context menu* **Change route type before (or after)** opens the *Options* menu [*Route between points*](#segments---route-between-points). The difference is that you can change the way the route is calculated for the section from this point to the nearest or to the edge point.  
The setting provides information about the distance from this point to the beginning or the end of the route or to the next/previous point.




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
You can do it via option [Route between points](segments---route-between-points). Multi-modal navigation is not possible, so you will need to select one the most suited profile to follow turn instrctions.

## Saving route

After [you have added](#add-points) at least one point to the map, you can use the save option. All tracks saved in *Plane a route* can be found in the main *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/create-edit.md)*.  

There are four ways to save:

- [Quick](#quick-save)
- [Save as new](#save-as-a-new-track)
- [Save the changes](#save-changes)
- [Add changes to a track](#add-to-a-track)  


### Save as a New Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_ios.png)

</TabItem>

</Tabs>  

With this option you can save any track without even modifying it.  

1. Add at least one point to the map or open a previously created track.
2. Go to the menu *Options → Save as a new track*.
3. Write a name for the track, and select a folder from the list.
4. Enable displaying the track on the map, if required.
5. You can use the *Simplified track* feature if you want to delete all previously recorded waypoints from the track and save the route line only.  
6. After you tap the *Save* button, a dialogue opens informing you that the track has been saved and suggesting the next steps. You can [*open the track*](../personal/tracks/manage-tracks.md#options-of-tracks-context-menu), *share* it, reopen the Plan a route to [*create a new route*](#create-new-route), or *Exit*.  

You can optionally change the name and folder later in *Menu → My Places → Tracks tab*. For more information about this and about displaying the track on the map, see the article [Tracks](../personal/tracks/manage-tracks.md).  


### Quick Save

There is a button in the top right corner of the screen to quickly save your actions in the Plan a route.  

1. **Done**. This button is displayed when you [create a new route](#create-new-route).
    - When tapped, a notification appears that the GPX file is saved with a name corresponding to the current date. In this way you can save as many routes as you want in one day, all files will differ by ordinal index at the end of a name, for example, *"Weekday Date _2.gpx"*.
    - The notification has an *UNDO* button to cancel the saving.
    - The *Done* button saves the route to a gpx file and closes the Plan a route tool.  

2. **Save**. This button is displayed when using an [existing or imported track](#modify-gpx-track) for route planning.
    - When you tap it, the changes you have made to this track are recorded.
    - As with *Done*, there is an *UNDO* button in the notification.
    - The *Plan a route* is closed after saving.  


### Save Changes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.png)

</TabItem>

</Tabs>  

This option allows you to save changes to a file that already exists in your device's storage.
Changes are saved during the planning process and, unlike a *Quick save*, **Plan a route is not closed**. If the file is new, tapping on it will open [Save as new track](#save-as-a-new-track).  


### Add to a Track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_add-to-track_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_add-to-track_ios.png)

</TabItem>

</Tabs>

When creating a new track or editing an existing one, you can use this option to attach it as a [separate segment](#segments---route-between-points) to a track from the list of available tracks. Changes to a selected track *cannot be undone*. It can only be re-opened in the *Plan a route* for editing.



## Other actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>

- [*<Translate android="true" ids="route_between_points"/>*](#segments---route-between-points). Shows the chosen application profile (the straight line by default). Tap this action is equal *Profile* button with opening application [profile menu](../personal/profiles.md).
- *<Translate ios="true" ids="gpx_start_new_segment"/>* (*iOS*) or *<Translate android="true" ids="plan_route_add_new_segment"/>* (*Android*). Draws new route segments that do not connect to the previous segment.
- [*<Translate android="true" ids="shared_string_save_changes"/>*](#save-changes). If it is a new track without linking to the existing one, the *Save as new track* menu opens. When you add new segments to an opened or imported track, the notification about saving the GPS file to the storage appears, after which you can continue to create the next segment.
- [*<Translate android="true" ids="save_as_new_track"/>*](#save-as-a-new-track). Saves your route like GPX track.
- [*<Translate android="true" ids="add_to_a_track"/>*](#add-to-a-track). Add your route to a track from your track folder and save the new track.
- [*<Translate android="true" ids="shared_string_navigation"/>*](#navigation-with-plan-a-route). Starts navigation from your position to the finish point using a drawn route.
- *<Translate android="true" ids="reverse_route"/>*. You swap the Start point of the route and the last added point. The route segment settings do not change when Reverse is applied.
- [*<Translate android="true" ids="attach_to_the_roads"/>*](#add-to-a-track). Creates an approximate route. Each point on the track is matched to the nearest permitted road on the map according to the selected profile and threshold distance.
- [*<Translate android="true" ids="shared_string_gps_filter"/>*](../map/tracks/track-context-menu.md#gps-filter). You can filter out route points that do not match the selected routing type, delete unnecessary data or correct inaccurate data. GPS filter will only work if the routing type is specified as *Straight Line*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- *<Translate android="true" ids="get_altitude_data"/>* (*Android only*). This option is only displayed in the menu if no elevation data is available. With this [option](#get-elevation-data), you can choose to calculate altitude using *Terrain map data* or use data from downloaded maps to find the *nearby roads*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. It archives completely all your actions. An "artifact" remains on the map - the dotted lines of the just cleared route. It disappears at the next adding new points. You can cancel the Clear All function with the Return Action button. The feature does not affect the unchanged parts of the routes opened in the tool.  


## Navigation with Plan a Route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_navigation_ios.png)

</TabItem>

</Tabs>

The *Plan a route* tool provides a feature such as starting navigation directly during the planning process. To do this, you need to open the [Options](#menu-options) menu and select ***Navigation***.

- Navigation opens the [Navigate by track](../navigation/setup/gpx-navigation.md) function with the start from the first point in the list. The track can be from an [existing list or imported](#modify-gpx-track). In this case, its name will correspond to the previously selected one, and the navigation will be built taking into account all the changes made in the current route planning.  

- You can start navigating on the route you have just created. In this case, the name of the route will be in the form of a date, as in the case of a [quick save](#quick-save).  

- You should note that if a route you have created or changed has not been saved, all data will be lost when you close the navigation. To avoid this, you can save the route by tapping it in the navigation field and selecting edit.
  

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
