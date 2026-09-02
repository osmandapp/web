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


## Overview {#overview}

The **Plan a route** (*Menu → Plan a route*) tool is a powerful feature of the OsmAnd application that allows you to [create new routes](#create-new-route) as GPX tracks, [edit and add new segments](#segments) to already saved tracks, [measure distances](#distance-measurement) on the map, and [attach track](#attach-track-to-roads) segments to the nearest available road using different navigation profiles. The feature is designed to work in *offline mode*.

A route consists of a set of segments between specified points. The segments can be straight lines or routes adapted to the selected profile. The route can be saved as GPX for later import, edit, and [navigation](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.webp)

</TabItem>

</Tabs>


## Main Use Cases {#main-use-cases}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>


### Create New Route {#create-new-route}

To create a new track in GPX format, use the main function of the *Plan a route* tool. Pre-creating a route has many advantages, unlike recording the current track with *[Trip recording plugin](../plugins/trip-recording.md)*. You can [add](#adding-points) as many points as you want to the route, [delete and move them](#point-context-menu), change route types by [segments](#route-between-points), and get [detailed information about the route](#graph--analyze).  

By default, the routing type will match the previously selected profile, tap the routing icon to select how the application should calculate the segment to connect points. The available profile should be configured [separately](../navigation/routing/osmand-routing.md#routing-types).  

You can **zoom in and out** for easy placement of points when creating or editing a track. When you **zoom out**, the points on the track become invisible for a better view of the entire length of the track and the map as a whole. Only the last added point and the pointer for adding the next point remain visible.


### Modify Existing GPX Track {#modify-existing-gpx-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

</TabItem>

</Tabs>  

*Plan a route* tool allows modifying existing GPX track as well as an [imported track](../personal/tracks/manage-tracks.md#import). However, in case you need to exclude large amount of points based on generic criteria, [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) might be a more suitable tool.


### Distance Measurement {#distance-measurement}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_lines_ios.webp)

</TabItem>

</Tabs>  

*Plan a route* is a quick and easy way to measure the distance between points.

- Select the *Straight line* method of route planning. A dashed line will be drawn between the points.
- [Add](#adding-points) the first point on the map from which the line will be drawn.
- Move the map to determine the distance and the azimuth. The information will be displayed in a field with a list of points below the map.

:::note
The *Straight Line* is needed and will be used for areas not covered by routing data, such as off-road and off-track areas.
:::


### Get Elevation Data {#get-elevation-data}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route iOS](@site/static/img/plan-route/plan_route_graph_ios.webp)

</TabItem>

</Tabs> 

If [Elevation data](../map/tracks/track-context-menu.md#calculate-missing-elevation) is missing in an existing track, it's possible to add it using the following tools:

- [Use nearby roads](#attach-track-to-roads). This mode uses offline maps to find the nearest roads to build a track, so elevation data will be retrieved from attached roads. The geometry of the track can be adjusted.  
- [Use Terrain maps](../map/tracks/track-context-menu.md#calculate-missing-elevation). ([OsmAnd Pro](../purchases/android.md#pro-features)) Mode calculates altitude based on Terrain map data (3D). The difference between the altitudes recorded by your device can be used for elevation correction.  The geometry of the track remains unchanged.

:::note

**Online elevation correction** (server-based) was removed in recent OsmAnd versions and is unavailable.  
For older versions, it was deprecated and unreliable.  
Use offline options instead: attach to roads or Terrain maps (Pro).  

:::

### Attach Track to Roads {#attach-track-to-roads}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route snap-road-andr](@site/static/img/plan-route/plan_route-snap_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route-snap_ios_2.webp)

</TabItem>

</Tabs>  

**Attach to the roads** setting allows attaching a recorded or an imported track to the roads from OsmAnd offline maps to get additional information:

- Correct turn information for [Navigate by track](../navigation/setup/gpx-navigation.md#follow-track-options) (especially at roundabouts).
- Street names and lane information.
- Elevation data.
- [Road attributes](../navigation/setup/route-details.md#road-attributes).
- Updated elevation profile based on road geometry.
- Possible recalculation of track geometry (simplifying or adjusting points to the road network).

When a track is attached to roads, the following parameters may change because the geometry and elevation of the track are recalculated: *Distance, Ascent / Descent, Average speed (and the speed graph), Maximum speed, Time in motion*, and *Duration*. These values may differ from the original GPX track if the recalculated road-based elevation or geometry significantly deviates from the recorded GPS data.

You can select a [threshold value](../navigation/setup/gpx-navigation.md#attach-to-the-roads) for the distance that simplified track points can be from the original track points.

:::note Unspecified profile icon
If you select a track and the ***unspecified*** profile icon ("?") is displayed next to the *Settings* icon, tap on it to choose whether to attach the track to roads or just connect the points with a straight line and treat it as a recorded track.
:::

<!--
### Add Route Points to Navigation from GPX {#add-route-points-to-navigation-from-gpx}

If you import a GPX file containing a route (with `<rtept>` elements), OsmAnd will display the route on the map but will not automatically convert the route points into a turn-by-turn navigation list.

To generate navigation instructions:

1. Open the GPX file from *My Places → Tracks*.
2. Tap the track to open it.
3. Tap the point menu (⋮) and choose **Add to Navigation**.
4. OsmAnd will convert the route points into a full navigation route with instructions.

> **NOTE:** *You may still use [Attach to roads](#attach-track-to-roads) to adjust geometry before converting to navigation.*
-->


## Points & Segments {#points--segments}

### Adding Points {#adding-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png) ![Plan a route Favorites android](@site/static/img/plan-route/plan_route_favorites_and.png)

To measure a distance or plan a trip, add points at the *Pointer* location one by one and tap the *Add* button. By accessing the **points list** below, you can reorder points, delete, or access a specific [point context menu](#point-context-menu).

You can also add a via point directly from the map by tapping a POI or Favorite to open its context menu and then tapping the *ADD POINT*. In this mode, context menus for non-point objects are not shown. When adding a POI/Favorite, its name is preserved as the route point name; if you later move this point on the map, the name is reset.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.webp)

To measure a distance or plan a trip, add points at the *Pointer* location one by one and tap the *Route +* button. By accessing the **points list** below, you can reorder points, delete, or access a specific [point context menu](#point-context-menu).

</TabItem>

</Tabs>  

:::note
You can also **Undo**/**Redo** every action you made in the plan route.
:::

### Adding Waypoints (iOS only) {#adding-waypoints}

![Plan a route ios](@site/static/img/plan-route/adding_poi_ios.webp) ![Plan a route ios](@site/static/img/plan-route/adding_poi_2_ios.webp)

The POI tab allows you to add and manage waypoints while planning a route.

To add a waypoint, select a location on the map and tap the *+ POI* button. The Waypoint screen opens, where you can enter a name, description, and address, select a group, and customize the icon, color, and shape. You can select an existing group or tap *Add a group* to create a new one.

The POI tab displays added points grouped by folders. Each group shows its name and the number of points it contains. For each group, tap the three-dot menu to access group actions:
- **Rename** — change the group name.
- **Change appearance** — change the group's appearance.
- **Sort** — change the order of points in the group.
- **Delete** — delete the group.

The Sort menu provides the following options: *Last modified*, *Name A–Z*, *Name Z–A*, *Newest date first*, and *Oldest date first*.

Tap a point in a group to open its context menu. You can:
- **Edit** — open the Edit Waypoint screen.
- **Delete** — remove the point from the group.
  
### Route Between Points {#route-between-points}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png) ![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

Added points in the editor could be connected as a straight line or as a route between points of a selected profile. *Route between points* can be accessed in several ways:

1. From the *Options* menu *→* *Route between points*.
2. Tap the *profile icon* in the bottom left corner of the map screen. Not on the top icon, will open the Configure Map menu.
3. In the *[Point Context menu](#point-context-menu) → Change route type before/after*.  

You can change route between 2 specific points or between multiple points:

- *Whole track*. The whole track will be recalculated using the selected profile.
- *Next segment*. Only the next segment will be recalculated using the selected profile.  
- *Change the Route Type Before/After Point*. In the *point context menu*, you can change the way the route is calculated for the section from this point to the nearest or to the edge point. The setting provides information about the distance from this point to the beginning or the end of the route, or to the next/previous point.
- *Recalculate routes*. You can use route recalculation without changing the profile type. The profile icon shown on the planned route in the tool will not change, but the route type will match the selected one. You may need this to find alternative routes.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/route_between_points_ios.webp) ![Plan a route ios](@site/static/img/plan-route/settings_tab_ios.webp)

Added points can be connected with a straight line or a route calculated using a selected routing profile. The Route between points menu allows you to view and change the routing type and settings for route segments and sections.

You can open Route between points by tapping the *Route between points* button, which displays the icon of the currently selected routing profile, or from a [Segment](#segments) or Section menu.

In the Route type tab, you can select a routing profile for the selected segment or section. Straight line is available as the first option, followed by the available routing profiles.

When a route contains only one routing type, the simple Route between points view is displayed. When a route contains multiple routing types, the complex view shows all segments and sections, allowing you to select which part of the route to modify.

You can also:
- **Start new segment** — create a new segment and continue adding route points. The new segment uses the same route type as the current one.
- **Change for whole track** — select a routing type to apply to the entire track.

In the Settings tab, you can select predefined routing settings for the selected route type.

</TabItem>

</Tabs>


### Segments {#segments}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

A track segment is a collection of points connected without **gaps**. In a plan route tool, it's possible:

- To merge segments: [Join segments](#point-context-menu) option removes the gap to previously separated segments.
- To split or create new, unconnected sections of a track. To create one, use the [Start new segment](#point-context-menu) option or select the [Split](#point-context-menu) feature from the Point context menu.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/segment_menu.webp) ![Plan a route ios](@site/static/img/plan-route/section_menu.webp)

A route can contain one or more segments. A segment can use a single route type or contain multiple sections with different route types.

In the Route tab, each segment is displayed with its route type and distance. When a segment contains multiple sections, each section displays its route type and distance.

You can manage a segment using its three-dot menu:
- **Change route type** — available for a segment with a single route type. Opens Route between points, where you can select a different route type.
- **Set single route type** — available when a segment contains multiple sections with different route types. Opens Route between points, where you can apply one route type to the segment.
- **Sort** — reorder route points manually or use Sort door-to-door to reorder them to minimize the total travel distance.
- **Save as…** — save the segment as a separate file.
- **Delete segment** — delete the segment.

To create a new unconnected segment, tap *Start new segment* at the bottom of the Route tab.

A segment can be divided into [sections](#multimodal-routes) when different route types are used for different parts of the segment. Each section displays its route type and distance.

Tap the three-dot menu for a section to:
- **Change route type** — open Route between points and select another route type.
- **Sort** — access the available sorting options.
- **Delete section** — remove the section.

</TabItem>

</Tabs>


### Point Context Menu {#point-context-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.webp)

</TabItem>

</Tabs>

Each point on your route has its context menu. It shows the *sequence number* of the point, the *distance from the start of the route*, the function to move it on the map and remove it, and a set of actions with sections of the route before and after this point. To edit, tap the required point in the [list of points](#adding-points) or directly on the map.

- ***Information about the point***. The number of points in the list. The distance to the first point is based on the routing type set, the distance may change when recalculated to the new type if the *Route between points* parameter is changed.  

- ***<Translate ios="true" ids="move_point"/>***. Allows you to change the position of a point on the map. Move the map using gestures to change the location of the point. The point indicator will be in the center of the visible part of the map.  

- ***<Translate ios="true" ids="add_point_after"/>***. Move the map to add a point after the selected point. You can add as many points as you need until you tap cancel or apply.  

- ***<Translate ios="true" ids="add_point_before"/>***. Move the map to add as many points as necessary after the selected point on the segment between this point and the next one.  

- ***<Translate ios="true" ids="trim_before"/>***. You can trim the whole section of the route, points, and segments, from its start to the selected point. The distance to be trimmed is indicated under the option name.  

- ***<Translate ios="true" ids="trim_after"/>***. You can trim a route, points, and segments, from the last point added to the selected point. The distance to be trimmed is indicated under the option name.  

- ***<Translate ios="true" ids="plan_route_split_before"/>***. Allows to split the route before the selected point into separate, unconnected segments.

- ***<Translate ios="true" ids="plan_route_split_after"/>***. Allows to split the route after the selected point into separate, unconnected segments.  

- ***<Translate ios="true" ids="join_segments"/>***. The last point on one of the split segments and the next in the list of points on the other segment have this connection setting.  

- ***<Translate ios="true" ids="change_route_type_before"/>***. You can change the routing type configured for an available profile, between points on the previous segment, or for all segments from the start of the route to the selected point.  

- ***<Translate ios="true" ids="change_route_type_after"/>***. You can change the routing type between points on the next segment, or for all segments from the selected point to the last added point.  

- ***<Translate ios="true" ids="delete_point"/>***. Remove the selected point from the route. Similar to deleting a point in a list.

### Multimodal Routes {#multimodal-routes}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.webp)

</TabItem>

</Tabs>

Using the *Plan a Route* tool and the [Route between points](#route-between-points) option, you can create multimodal routes where, for example, the first part can be a *cycling* route, the second part a *straight line* route and then a *pedestrian* one. Note that navigation on multimodal routes is not available, so you need to select one of the most suitable profiles to be able to follow the turn-by-turn instructions.


## Editor {#editor}

### Save Route {#save-route}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_changes_andr.png)

After [you have added](#adding-points) at least one point to the map, you can use the save option. All tracks saved in *Plane a route* can be found in the main *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> →* *[<Translate android="true" ids="show_gpx"/>](../personal/tracks/manage-tracks.md)*.  

There are four ways to save:

- ***Quick save***. The upper right ***Done*** (for existing tracks) button allows quick saving of changes and exiting the *Plan a Route* tool. The name is generated based on the current date.
- ***Save changes*** in [Options menu](#options) allows you to save changes to a file and continue planning the route.
- ***Save as new track*** in the [Options menu](#options) opens a dialog where you specify the name of the track and the folder where the route will be saved.
- ***Add changes to a track***. Attaches a created track as a [separate segment](#segments) to another existing track. Changes to a selected track *cannot be undone*.

When saving, the track inherits the activity type of the routing profile used for planning. The activity is saved in the track metadata and is preserved after exporting or importing the GPX file.

:::note Simplified track option
When saving a new track, you can select the ***Simplified*** track option to make the track compatible with other third-party applications. Technically, the track will be saved without route instructions as a purely geometric track.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_changes_ios.webp)

After [you have added](#adding-points) at least one point to the map, you can use the save option. All tracks saved in *Plane a route* can be found in the main *<Translate ios="true" ids="shared_string_menu"/> → <Translate ios="true" ids="shared_string_my_places"/> →* *[<Translate ios="true" ids="shared_string_gpx_tracks"/>](../personal/tracks/manage-tracks.md)*.

For a new route, tap *Save* in the top toolbar to save the current track. You can also use *Save as…* from the Options menu to enter a file name and save the route.

When editing an existing track, *Save* saves the current changes. You can also use the following options:
- **Save as…** — saves the track with a new file name.
- **Save as copy** — saves a duplicate of the track.
- **Append to existing track** — adds the planned track as a separate segment to an existing track.

When saving, the track inherits the activity type of the routing profile used for planning. The activity is saved in the track metadata and is preserved after exporting or importing the GPX file.

</TabItem>

</Tabs>  


### Options {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_3_andr.png)

- [<Translate android="true" ids="route_between_points"/>](#route-between-points). Shows the selected application profile (default is a straight line). Tapping this action is the same as tapping the *Profile* button, which opens the application [profile menu](../personal/profiles.md).
- **<Translate ios="true" ids="gpx_start_new_segment"/>** (*iOS*) or **<Translate android="true" ids="plan_route_add_new_segment"/>** (*Android*). Draws new route segments that do not connect to the previous segment.
- [<Translate android="true" ids="shared_string_save_changes"/>](#save-route). If it is a new track without linking to the existing one, the *Save as new track* menu opens. When you add new segments to an opened or imported track, the notification about saving the GPS file to the storage appears, after which you can continue to create the next segment.
- [<Translate android="true" ids="save_as_new_track"/>](#save-route). Saves your route like the GPX track.
- [<Translate android="true" ids="add_to_a_track"/>](#save-route). Add your route to a track from your track folder and save the new track.
- [<Translate android="true" ids="shared_string_navigation"/>](../navigation/setup/gpx-navigation.md). Starts navigation from your position to the finish point using a drawn route.
- **<Translate android="true" ids="reverse_route"/>**. You swap the *Start* point of the route and the last added point. The route segment settings do not change when Reverse is applied.
- [<Translate android="true" ids="attach_to_the_roads"/>](#attach-track-to-roads). Creates an approximate route. Each point on the track is matched to the nearest permitted road on the map according to the selected profile and threshold distance.
- [<Translate android="true" ids="shared_string_gps_filter"/>](../map/tracks/track-context-menu.md#gps-filter) (Android only). You can filter out route points that do not match the selected routing type, delete unnecessary data, or correct inaccurate data. GPS filter will only work if the routing type is specified as *Straight Line*. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- [<Translate android="true" ids="get_altitude_data"/>](#get-elevation-data) (*Android only*). This option is only displayed in the menu if no elevation data is available. With this [option](#get-elevation-data), you can calculate altitude using *Terrain map data* or use data from downloaded maps to find the *nearby roads*.
- ***<Translate android="true" ids="shared_string_clear_all"/>***. It archives completely all your actions. An "artifact" remains on the map - the dotted lines of the just cleared route. It disappears at the next, adding new points. You can cancel the Clear All function with the Return Action button. The feature does not affect the unchanged parts of the routes opened in the tool.

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.webp)

Tap the three-dot menu in the top toolbar to open the *Options* menu. The available actions depend on whether you are creating a new route or editing an existing track.

- **Save as…** — save the route with a new file name. Available for both new routes and edited tracks.
- **Save as copy** — save a duplicate of an existing track. Available when editing an existing track.
- **Append to existing track** — add the planned route as a separate segment to an existing track.
- **Change segment order** — change the order of route segments.
- **Reverse route** — reverse the direction of the route.
- **Navigation** — close Plan a route and start navigation using the planned route.
- **Clear all points** — remove all points from the planned route.

</TabItem>

</Tabs>


### Graph / Analyze {#graph--analyze}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_graph_5_new_andr.png)

During route planning, the [graph](../navigation/setup/route-details.md#elevation-graph) displays route altitude and slope percentage information, plus you can tap anywhere on the graph to display a pointer with particular data.  

The graph is displayed in the *Graph* tab when creating or opening a track, and when [Navigation](../navigation/setup/gpx-navigation.md) using *Plan a route*.

When calculating a route for navigation in *Plan a route*, you can find out additional track information such as [Elevation info](../navigation/setup/route-details.md#elevation-info) and [Road attributes](../navigation/setup/route-details.md#road-attributes), and use the [Analyze on map](../navigation/setup/route-details.md#analyze-on-map) tool. Tap the *Details* button below the graph.  

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios.webp) ![Plan a route snap-road-ios](@site/static/img/plan-route/plan_route_analyze_ios_2.webp)

The Overview section displays a graph based on the selected axis. Use the axis selection controls to choose the data displayed on the graph. *Recalculate elevation* allows you to recalculate elevation data when needed. If elevation data is unavailable, the Analyze tab displays No elevation data. The message explains that OsmAnd can retrieve elevation data from nearby roads or terrain maps. Tap *Get elevation data* to calculate elevation data. For more information, see [Get Elevation Data](#get-elevation-data) section.

The Overview Statistics section displays *Uphill*, *Downhill*, *Altitude range*, *Average speed*, *Max. speed*, and *Time in motion*. A dash `–` is displayed when data is unavailable. For example, speed and time in motion may be unavailable for planned routes.

The Road Types, Steepness, Surface, and Smoothness sections show the corresponding route characteristics. Tap a section to expand it and view detailed information in the legend.

</TabItem>

</Tabs>


## Related Articles {#related-articles}

- [Show track on Map](../map/tracks/index.md)
- [Analyze on Map](../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../map/tracks/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)




