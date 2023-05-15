---
sidebar_position: 1
title:  Plan a route
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


## Overview

The **Plan a route** tool is a powerful feature of the OsmAnd application that allows you to [create new routes](#create-new-route) as GPX tracks, [edit and add new segments](#segments) to already saved tracks, [measure distances](#distance-measurement) on the map, and link track segments to the nearest available road using different navigation profiles. The feature is designed to work in offline mode.

A route consists of a set of segments between specified points. The segments can be either straight lines or routes adapted to the selected profile. The route can be saved, imported, edited, and used for navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_overview_ios.png)

</TabItem>

</Tabs>


### How to open

As **Plan a route** is one of the main feature of the OsmAnd app, you can find it directly in main Menu. The tool is also available in the context menu of any track, whether it is a previously created, recorded, or imported track.  
There are four ways to access the *Plan a route* tool.

1. Go to the main *Menu → Plan a route*.
2. Go to the *My Places* menu, tap any available track in the list *Menu → My Places → Tracks*, select the *Options* (or *Actions* for iOS) tab in the [track context menu](../map/track-context-menu.md), and in the opened menu find *Edit track*.
3. In the [track context menu](../map/track-context-menu.md) select *Track tab → Options → Edit*. 
4. (Android only) Select the *Edit* icon in the *Overview* tab by tapping any available track in the *Menu → My Places → Tracks*.
5. (iOS only) Select *Create New Track* from the Actions section in the *Menu → My Places → Tracks*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_track_menu_options_ios.png)

</TabItem>

</Tabs> 


## Plan a route usage

Actions in the Plan a route  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route"/>*  

![Plan a route android](@site/static/img/plan-route/plan-route-menu-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route"/>*  

![Plan a route ios](@site/static/img/plan-route/plan-route-menu-ios.png)

</TabItem>

</Tabs>   

<!-- The main purpose of the Route Planning tool is to create new routes or modify existing tracks.  -->

In case you chose [*Plan a route*](#how-to-open) in the main *Menu*, you can select the following **actions** in the opened screen:

- [*Create new route*](#create-new-route) - Select the section of the map on your screen where you want to start ctreating a GPS route. Points are created using the pointer in the center of the visible map and the *Add point* button. Or you can tap anywhere on the map, and a Point will be placed automaticlly. In the [*point context menu*](#point-context-menu) you can change its location.
- [*<Translate android="true" ids="plan_route_open_existing_track"/>*](#modify-gpx-track) - The list of all GPX tracks available to the application opens. In this menu, you can select tracks from the existing [folders](../personal/tracks.md#my-places-menu) and use the sort option for more convenience.  
- *<Translate android="true" ids="plan_route_last_edited"/>* - This is a list of the last 5 GPX tracks used in the app, for quick access.
- *<Translate android="true" ids="plan_route_import_track"/>* - (Android only) With this option, you can choose to import the GPX track on your device or in connected cloud storage. For iOS, the [*Import Tracks*](../personal/tracks.md#import-track) option is available in the *Menu → My Places → Tracks → Actions*. 


## Menu Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs>   

- [*<Translate android="true" ids="route_between_points"/>*](#route-between-points) - Showing chosen application profile (The straight line by default). Click to this action is equal *Profile* button(link)  with opening application profile menu(link). 
- [*<Translate ios="true" ids="gpx_start_new_segment"/>*](#start-new-segment) (iOS) or *<Translate android="true" ids="plan_route_add_new_segment"/>* (Android) - Draws new route segments that do not connect to the previous segment. 
- *<Translate android="true" ids="shared_string_save_changes"/>* - If it is a new track without linking to the existing one, the *Save as new track* menu opens. When you add new segments to an opened or imported track, the notification about saving the GPS file to the storage appears, after which you can continue to create the next segment.
- [*<Translate android="true" ids="save_as_new_track"/>*](#save-as-new-track) - Save your route like GPX track.
- [*<Translate android="true" ids="add_to_a_track"/>*](#add-to-a-track) - Add your route to a track from your track folder and save the new track. 
- [*<Translate android="true" ids="shared_string_navigation"/>*](#navigation) - Start navigation from your position to the finish point using a drawn route.
- *<Translate android="true" ids="reverse_route"/>* - You swap the Start point of the route and the last added point. The route segment settings do not change when Reverse is applied. 
- [*<Translate android="true" ids="attach_to_the_roads"/>*](#attach-to-the-roads) - text.
- [*<Translate android="true" ids="shared_string_gps_filter"/>*](../map/track-context-menu.md#gps-filter) - text. <!-- Android only(No!!!) with Straight line routing. **?How to use?** **When are additional details needed to calculate a route when switching to another type of routing?** -->
- ***<Translate android="true" ids="shared_string_clear_all"/>*** - It archives completely all your actions. An "artifact" remains on the map - the dotted lines of the just cleared route. It disappears at the next adding new points. You can cancel the Clear All function with the Return Action button. The feature does not affect the unchanged parts of the routes opened in the tool.  


## Points list

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_list_ios.png)

</TabItem>

</Tabs>  

- Text What is a Point
- [How to create points](#how-to-create-points)
- How to swap and delete points in a list


### Add points

***Add point*** - Adds a point at the location of the *Pointer* in the center of the visible part of the map.  
Move your finger on the map (gesture link). A straight dotted line will be visible from the last (first) point. the next point will always be located in the center of the screen. to add a point, tap Add Point. To add a point that is not a pointer, tap anywhere on the screen. you can use the action arrows to cancel or return canceled actions.  


### Distance measurement

![Plan a route android](@site/static/img/plan-route/plan_route_lines_andr.png)  

Straight Lines - How it is calculated.

First of all, add a point from which the line will be drawn.  

Choose how to draw:  
By default **straight line** - only plain line stretches between shaping points:

The straight line is useful for simple distance measurement, azimuth info or for areas not covered by routing data (off-road and off-path areas).  
Click to *Add* button for adding shaping points or just click on the screen.

:::note
Overview data available only on roads, calculate a route using [*Route between points*](#route-between-points) to see Graphs.
:::


### Point Context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>    

Tap a point from *Points list* or on the map to open Point Contecst menu   

1. *Point info*:  Point number in the list. The distance to the first point on a straight line.
2. *<Translate ios="true" ids="move_point"/>* - <Translate ios="true" ids="move_point_descr"/> 
3. *<Translate ios="true" ids="add_point_after"/>* - Move map to add points after a chosen point.  
4. *<Translate ios="true" ids="add_point_before"/>* - Move map to add points before a chosen point.  
5. *<Translate ios="true" ids="trim_before"/>* - The trim route before a chosen point.  
6. *<Translate ios="true" ids="trim_after"/>* - The trim route after a chosen point. 
7. *<Translate ios="true" ids="plan_route_split_before"/>* - Split route before a chosen point.   
8. *<Translate ios="true" ids="plan_route_split_after"/>* - Split route after a chosen point. 
9. [*<Translate ios="true" ids="change_route_type_before"/>*](#change-route-type) - Change route type (application profile) before a chosen point. 
10. [*<Translate ios="true" ids="change_route_type_after"/>*](#change-route-type) - Change route type (application profile) after a chosen point.  
11. *<Translate ios="true" ids="delete_point"/>* - Delete chosen point from the route.  


### Route between points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_between_points_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_between_points_ios.png)

</TabItem>

</Tabs>   

This setting can be accessed in several ways:
1. From the *Options* menu → *Route between points*.
2. Tap the *profile icon* in the bottom left corner of the map screen. Not on the top icon, it will open the Configure Map menu.
3. In the *[Point Context menu](#point-context-menu) → Change route type before/after*.  

With this option, you can choose how points are connected for the whole track or only for the next segment. This can be done in a straight line or by calculating a route using one of the profiles that you have enabled in the OsmAnd app *Menu → Settings → App profiles*.  
- *Whole track* - The whole track will be recalculated using the selected profile.
- *Next segment* - Only the next segment will be recalculated using the selected profile.


#### Change route type before/after this point

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_change-route-type_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_change-route-type_ios.png)

</TabItem>

</Tabs>    

In the *Point context menu* **Change route type before (or after)** opens the *Options* menu [*Route between points*](#route-between-points). The difference is that you can change the way the route is calculated for the section from this point to the nearest or to the edge point.  
The setting provides information about the distance from this point to the beginning or the end of the route or to the next/previous point.


## Segments

text

#### Route calculation

By default, the routing type will match the previously selected profile, click on the routing icon to select how the application should calculate the segment to connect points. The available profile should be configured separately (link).  

- Click on [*Profile* button](../plan-route/create-route.md#main-screen) for choosing an application profile. The route will be calculated between points by routing of your profile.
- Click to [*Add* button](../plan-route/create-route.md#main-screen) for adding shaping points or just click on the screen.

![Plan a route app_button](@site/static/img/plan-route/plan-route-app-button.png)

- Choose two or more application profiles for creating a route. Click to [*Profile* button](../plan-route/create-route.md#main-screen):


#### Route line

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>  

The Route line shows an [automatically-generated road or straight route](../plan-route/create-route.md#creating-a-route) which you can save like a GPX track.  

1. Profile icon (Android). It*s mean that this segment was built by this profile routing.
2. Shaping points - basic points building the route.
3. Calculated route segment between shaping points. Colors of your chosen application profiles (Android) or last chosen application profile (iOS).
4. Straight-line from last shaping point and target point.


### Start new segment

Allows you to start creating a new route segment away from the previous segment.  

A segment is a section of a route between two points that have already been calculated for a given routing type.


### Menu Settings

![Plan a route android](@site/static/img/plan-route/plan_route_menu_settings_andr.png)

[Route parameters](../navigation/routing/osmand-routing.md)  
For Android we can modify routing parameters for chosen app profile by clicking to settings icon ![icon-settings](@site/static/img/plan-route/icon-settings.png) on [*Profile* button](../plan-route/create-route.md#main-screen).  


Choose how to connect the points, by a straight line, or calculate a route between them as specified:

<Translate android="true" ids="whole_track"/> - <Translate android="true" ids="route_between_points_whole_track_button_desc"/>

<Translate android="true" ids="next_segment"/> - <Translate android="true" ids="route_between_points_next_segment_button_desc"/>  

When you use two or more application profiles for your route:
- For Android each segment has [a profile icon and color](../plan-route/create-route.md#route-line) of the application profile which using for calculated route between shaping points.
- For iOS all segments have [color of last using application profile](../plan-route/create-route.md#route-line) for calculated route.

#### Use elevation data

![Plan a route android](@site/static/img/plan-route/plan_route_menu_settings_use_elevation_data_andr.png)


## Create new route

To create a new route (track) in GPX format, use the main function of the Plan a Route tool. Unlike recording the current track with a plugin (name), pre-creating a route has many advantages. You can add as many points as you want to the route, delete and move them, change route types by segments, and get detailed information about the route (internal link). It is also the easiest and fastest way to measure the distance between points.  

By default, the routing type will match the previously selected profile, click on the routing icon to select how the application should calculate the segment to connect points. The available profile should be configured separately (link).  


## Modify GPX track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track,plan_route_import_track"/>*

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>  

*Plan a route* tool allows modifying existing GPX track. You can make any actions with your tracks.  

[Open any GPX track](../plan-route/create-route.md#modify-gpx-track) for modifying it:  

In [Points list](../plan-route/create-route.md#points-list-and-graph), there is information about the number  of points and a track distance.  
You can make all actions with points in [Points list](../plan-route/create-route.md#points-list-and-graph) and [Point menu](../plan-route/create-route.md#actions-of-point-menu): delete, change order, move and etc.  
For [Graph (Android)](../plan-route/create-route.md#points-list-and-graph) you can see the actual information for a GPX track: Altitude, Slope, Speed.  
In [Options menu](../plan-route/create-route.md#options-menu) is available all actions for GPX track too: add a new segment, reverse route, directions, etc.  


### Add to a track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_menu_options_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_menu_options_ios.png)

</TabItem>

</Tabs> 

Select the track file to add a new segment.

Currently recording track.


### Graph

Click to "Graph" button. 

![Plan a route android-graph](@site/static/img/plan-route/plan-route-graph-android.png)

Description: [Click to graph](../plan-route/create-route.md#actions-of-points-list-and-graph) shows information about point and its location on the route. View of the graph of a route with Overview, Altitude, Slope, Road type, Surface, Steepness.  


### Attach to the roads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/>*
- *<Translate android="true" ids="plan_route_import_track"/>*

![Plan a route snap-road-android](@site/static/img/plan-route/plan-route-snap-android.gif)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route snap-road-ios](@site/static/img/plan-route/plan-route-snap-ios.gif)

</TabItem>

</Tabs>  

Attach to the roads is used mainly for tracks not created in OsmAnd.  

For example, you have recorded tracks. *Plan a route* tool allows snapping your track to the nearest allowed road with one of your application profiles.

For using this option you need to open your track by *Plan a route* tool:  

Next, choose the needed application profile for snapping your track to the nearest road. For this, you need to click [Profile button](../plan-route/create-route.md#main-screen) or choose in _[Options menu](../plan-route/create-route.md#options-menu) → <Translate android="true" ids="route_between_points"/>_. For Android, you can set <translate android="true" ids="threshold_distance"/> parameter.

After calculating the new route you click [*Done* button](../plan-route/create-route.md#main-screen) for saving the new GPX track which snapping to roads.


## Save a route 

#### Save as new track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_save_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_save_ios.png)

</TabItem>

</Tabs>  


#### Quick save

There is a button in the top right corner of the screen to quickly save your actions in the Plan a route.  



Find your track in *My Places* menu:
*<Translate android="true" ids="shared_string_menu,shared_string_my_places,show_gpx"/>*

And  *Save as new track* menu Options.


## Navigation with Plan a route

[Navigate by track](../navigation/setup/gpx-navigation.md)


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan_route_navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan_route_navigation_andr.png)

</TabItem>

</Tabs> 



<!--
## User case



______  

## Information


### Create/Edit route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-screen](@site/static/img/plan-route/plan_route_сreate-edit_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan_route_сreate-edit_ios.png)

</TabItem>

</Tabs>   

At the main screen of the tool there are the next elements:   

1. [*<Translate android="true" ids="shared_string_options"/>*](../plan-route/create-route.md#options-menu) menu.
2. *<Translate android="true" ids="shared_string_add"/>* button for shaping points.
3. Back/forward - move along planning process steps.
4. [Points list and Graph (Android) list](../plan-route/create-route.md#points-list-and-graph).
5. *Profile* button for choosing [application profile](../personal/profiles.md).
6. *Done* button - finish and save GPX route.
7. Name of GPX route by default (Android).
8. *Close* button - exit from the tool with saving GPX route or no saving.
9. Widgets (Android) - [Configure map
](../widgets/map-buttons.md#configure-map), [Search](../widgets/map-buttons.md#search), [Compass](../widgets/map-buttons.md#compass).
10. Widgets (Android) - [Informational widgets
](../widgets/info-widgets.md), [Navigational widgets
](../widgets/nav-widgets.md).
11. Widgets - [My Location & Zoom](../widgets/map-buttons.md#my-location--zoom).


### How to draw a line

Choose how to draw:
- By default **straight line** - only plain line stretches between shaping points:

![Plan a route straight_line](@site/static/img/plan-route/plan-route-straight-line.png)

The straight line is useful for simple distance measurement, azimuth info or for areas not covered by routing data (off-road and off-path areas).

- Click to *Add* button for adding shaping points or just click on the screen.

**Note**: Overview data available only on roads, calculate a route using ["Route between points”](../plan-route/create-route.md#drawing-a-route) to see graphs.


### How to draw a route

- Click on [*Profile* button](../plan-route/create-route.md#main-screen) for choosing an application profile. The route will be calculated between points by routing of your profile.
- Click to [*Add* button](../plan-route/create-route.md#main-screen) for adding shaping points or just click on the screen.

![Plan a route app_button](@site/static/img/plan-route/plan-route-app-button.png)

For Android we can modify routing parameters for chosen app profile by clicking to settings icon ![icon-settings](@site/static/img/plan-route/icon-settings.png) on [*Profile* button](../plan-route/create-route.md#main-screen):

![app-settings](@site/static/img/plan-route/plan-route-app-set.png)

- Choose two or more application profiles for creating a route. Click to [*Profile* button](../plan-route/create-route.md#main-screen):

![Plan a route app_choosing](@site/static/img/plan-route/plan-route-app-choosing.png) 

Choose how to connect the points, by a straight line, or calculate a route between them as specified:

<Translate android="true" ids="whole_track"/> - <Translate android="true" ids="route_between_points_whole_track_button_desc"/>

<Translate android="true" ids="next_segment"/> - <Translate android="true" ids="route_between_points_next_segment_button_desc"/>  

When you use two or more application profiles for your route:
- For Android each segment has [a profile icon and color](../plan-route/create-route.md#route-line) of the application profile which using for calculated route between shaping points.
- For iOS all segments have [color of last using application profile](../plan-route/create-route.md#route-line) for calculated route.



### How to save a route

![Plan a route android-save](@site/static/img/plan-route/plan-route-animation.gif)  

Tap [Done button](../plan-route/create-route.md#main-screen) to save your route like the GPX file.  

Find your track in *My Places* menu:
*<Translate android="true" ids="shared_string_menu,shared_string_my_places,show_gpx"/>*


## Route line

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

</TabItem>

</Tabs>  

The Route line shows an [automatically-generated road or straight route](../plan-route/create-route.md#creating-a-route) which you can save like a GPX track.


**1.** Profile icon (Android). It*s mean that this segment was built by this profile routing.

**2.** Shaping points - basic points building the route.

**3.** Calculated route segment between shaping points. Colors of your chosen application profiles (Android) or last chosen application profile (iOS).

**4.** Straight-line from last shaping point and target point.


## Points list

For opening *Points* list and Graph:  

**1.Click to [*Points* list](../plan-route/create-route#main-screen).** (Android)

**1.Click to the open icon &#710 on [*Points* list](../plan-route/create-route#main-screen).** (iOS)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-pointslist](@site/static/img/plan-route/plan-route-pointslist-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-pointslist](@site/static/img/plan-route/plan-route-pointslist-ios.png)

</TabItem>

</Tabs>  

Each point has information about distance and azimuth for a new making route, and additional altitude, and the speed information for recorded GPX track. In [*Points* list](../plan-route/create-route.md#main-screen) we can delete points (click to *Delete* button near chosen point) or change the order of it (move a line of chosen point to up or below). Clicking to a point opens [*Point* menu](../plan-route/create-route.md#actions-of-point-menu).  


### Points Context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android](@site/static/img/plan-route/plan_route_points_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios](@site/static/img/plan-route/plan_route_points_menu_ios.png)

</TabItem>

</Tabs>   

Actions in the *Point* menu (by clicking to a point in [Points list](../plan-route/create-route.md#points-list-and-graph)):


**1.Click to a point from *Points* list**:  Open *Point* menu  
**Actions in *Point* menu:**  

1. Point info  Showed Number of point, Distance, Speed, Altitude of point. 
2. <Translate ios="true" ids="move_point"/> - <Translate ios="true" ids="move_point_descr"/> 
3. <Translate ios="true" ids="add_point_after"/> - Move map to add points after a chosen point.  
4. <Translate ios="true" ids="add_point_before"/> - Move map to add points before a chosen point.  
5. <Translate ios="true" ids="trim_before"/> - The trim route before a chosen point.  
6. <Translate ios="true" ids="trim_after"/> - The trim route after a chosen point. 
7. <Translate ios="true" ids="split_before"/> - Split route before a chosen point.   
8. <Translate ios="true" ids="split_after"/> - Split route after a chosen point. 
9. <Translate ios="true" ids="change_route_type_before"/> - Change route type (application profile) before a chosen point. 
10. <Translate ios="true" ids="change_route_type_after"/> - Change route type (application profile) after a chosen point.  
11. <Translate ios="true" ids="delete_point"/> - Delete chosen point from the route.    


### Graph

Click to "Graph" button. 

![Plan a route android-graph](@site/static/img/plan-route/plan-route-graph-android.png)

Description: [Click to graph](../plan-route/create-route.md#actions-of-points-list-and-graph) shows information about point and its location on the route. View of the graph of a route with Overview, Altitude, Slope, Road type, Surface, Steepness.  


## Menu Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route android-options](@site/static/img/plan-route/plan-route-options-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route ios-options](@site/static/img/plan-route/plan-route-options-ios.png)

</TabItem>

</Tabs>  

In Options menu you can make the next actions with your route:  

|Action   |Description
|:------------|:------------|
|1. <Translate android="true" ids="route_between_points"/> | Showing chosen application profile (The straight line by default). Click to this action is equal [*Profile* button](../plan-route/create-route.md#main-screen)  with opening [application profile menu](../plan-route/create-route.md#drawing-a-route). |
|2. <Translate android="true" ids="plan_route_add_new_segment"/> or <Translate ios="true" ids="track_new_segment"/> | Drawing new segments of the route which not connect with the previous segment. |
|3. <Translate android="true" ids="shared_string_save_changes"/> | Save your route like GPX track and continue to create the next segment. |
|4. <Translate android="true" ids="save_as_new_track"/> | Save your route like GPX track.|
|5. <Translate android="true" ids="add_to_a_track"/> | Add your route to a track from your track folder and save the new track. |
|6. <Translate android="true" ids="get_directions"/> |Start navigation from your position to the finish point using a drawn route.|
|7. <Translate android="true" ids="reverse_route"/> | Change the direction of a drawn route. |
|8. <Translate android="true" ids="shared_string_clear_all"/> | Clear all shaping points.  |


## Modify GPX track


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track,plan_route_import_track"/>*

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>  

*Plan a route* tool allows modifying existing GPX track. You can make any actions with your tracks.  

[Open any GPX track](../plan-route/create-route.md#modify-gpx-track) for modifying it:  

In [Points list](../plan-route/create-route.md#points-list-and-graph), there is information about the number  of points and a track distance.  

You can make all actions with points in [Points list](../plan-route/create-route.md#points-list-and-graph) and [Point menu](../plan-route/create-route.md#actions-of-point-menu): delete, change order, move and etc.

For [Graph (Android)](../plan-route/create-route.md#points-list-and-graph) you can see the actual information for a GPX track: Altitude, Slope, Speed.

In [Options menu](../plan-route/create-route.md#options-menu) is available all actions for GPX track too: add a new segment, reverse route, directions, etc.


## Attach to the roads

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/>*
- *<Translate android="true" ids="plan_route_import_track"/>*

![Plan a route snap-road-android](@site/static/img/plan-route/plan-route-snap-android.gif)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route snap-road-ios](@site/static/img/plan-route/plan-route-snap-ios.gif)

</TabItem>

</Tabs>  

For example, you have recorded tracks. *Plan a route* tool allows snapping your track to the nearest allowed road with one of your application profiles.

For using this option you need to open your track by *Plan a route* tool:  

Next, choose the needed application profile for snapping your track to the nearest road. For this, you need to click [Profile button](../plan-route/create-route.md#main-screen) or choose in [Options menu](../plan-route/create-route.md#options-menu) → <translate android="true" ids="route_between_points"/>. For Android, you can set <translate android="true" ids="threshold_distance"/> parameter.

After calculating the new route you click [*Done* button](../plan-route/create-route.md#main-screen) for saving the new GPX track which snapping to roads.

-->

