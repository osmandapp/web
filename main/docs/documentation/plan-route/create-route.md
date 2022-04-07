---
sidebar_position: 1
title:  Plane route
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/_buttonAndroidStore.mdx';
import AppleStore from '@site/src/components/_buttonAppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

The **'Plan route'** tool is a powerful feature of OsmAnd allows you to measure distances on the map, create GPX tracks or add new segments to your own ones, to snap your track to the nearest available road with one of your navigation profiles. Of course, it works offline and available for Android and iOS versions of OsmAnd.

The route is many strings between points. Strings can be straight lines or routes of chosen navigation profiles. The sum of all these points and strings is a route, that can be saved, imported, or modified. 


![Plan route android](@site/static/img/plan-route/plan-route-android.png) ![Plan route ios](@site/static/img/plan-route/plan-route-ios.png)

## Opening 'Plan route'

The 'Plan route' can be switched on:

- Main menu

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plan_a_route"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plan_route"/>

<p> </p>

![Plan route android_menu](@site/static/img/plan-route/plan-route-android-menu.png)  ![Plan route ios_menu](@site/static/img/plan-route/plan-route-ios-menu.png) 

- Track context menu (Android)

<Translate android="true" ids="shared_string_options,edit_track"/> or to click to <Translate android="true" ids="edit_track"/> on the context menu screen:

<p> </p>

![Plan route android_contextmenu](@site/static/img/plan-route/plan-route-android-contextmenu.png)

## 'Plan route' 

### Main menu

In the tool, you can create a new GPX route or open and modify the existing track. When you open 'Plan route' tool menu you find the next buttons:
- **<Translate android="true" ids="plan_route_create_new_route"/>** - create a new GPX route.
- **<Translate android="true" ids="plan_route_open_existing_track"/>** - open existing GPX track from OsmAnd track folder.
- **<Translate android="true" ids="plan_route_import_track"/>** - import GPX track from your device storage (Android).
- **<Translate android="true" ids="plan_route_last_edited"/>** - choose GPX track from last modified.

![Plan route android_choosemenu](@site/static/img/plan-route/plan-route-android-choose-menu.png) ![Plan route ios_choosemenu](@site/static/img/plan-route/plan-route-ios-choosemenu.png) 

### Main screen

At the main screen of the tool there are the next elements:

![Plan route android-screen](@site/static/img/plan-route/plan-route-android-screen.png)  ![Plan route ios-screen](@site/static/img/plan-route/plan-route-ios-screen.png) 

**1.** ['<Translate android="true" ids="shared_string_options"/>'](/docs/documentation/plan-route/create-route#options-menu) menu.

**2.** '<Translate android="true" ids="shared_string_add"/>' button for shaping points.

**3.** Back/forward - move along planning process steps.

**4.** [Points list and Graph (Android) list](/docs/documentation/plan-route/create-route#points-list-and-graph).

**5.** 'Profile' button for choosing [application profile](/docs/documentation/personal/profiles).

**6.** 'Done' button - finish and save GPX route.

**7.** Name of GPX route by default (Android).

**8.** 'Close' button - exit from the tool with saving GPX route or no saving.

**9.** Widgets (Android) - [Configure map
](/docs/documentation/widgets/map-buttons#configure-map), [Search](/docs/documentation/widgets/map-buttons#search), [Compass](/docs/documentation/widgets/map-buttons#compass).

**10.** Widgets (Android) - [Informational widgets
](/docs/documentation/widgets/info-widgets), [Navigational widgets
](/docs/documentation/widgets/nav-widgets).

**11.** Widgets - [My Location & Zoom](/docs/documentation/widgets/map-buttons#my-location--zoom).

### Route line

The Route line shows an [automatically-generated road or straight route](/docs/documentation/plan-route/create-route#creating-a-route) which you can save like a GPX track.


![Plan route android-routeline](@site/static/img/plan-route/plan-route-routeline-android.png) ![Plan route ios-screen](@site/static/img/plan-route/plan-route-routeline-ios.png)

**1.** Profile icon (Android). It's mean that this segment was built by this profile routing.

**2.** Shaping points - basic points building the route.

**3.** Calculated route segment between shaping points. Colors of your chosen application profiles (Android) or last chosen application profile (iOS).

**4.** Straight-line from last shaping point and target point.

### 'Points' list and Graph

For opening 'Points' list and Graph:


**1.Click to ['Points' list](/docs/documentation/plan-route/create-route#main-screen).** (Android)

**1.Click to the open icon &#710 on ['Points' list](/docs/documentation/plan-route/create-route#main-screen).** (iOS)

![Plan route android-pointslist](@site/static/img/plan-route/plan-route-pointslist-android.png)  ![Plan route ios-pointslist](@site/static/img/plan-route/plan-route-pointslist-ios.png) 

Description:  Each point has information about distance and azimuth for a new making route, and additional altitude, and the speed information for recorded GPX track. In ['Points' list](/docs/documentation/plan-route/create-route#main-screen) we can delete points (click to 'Delete' button near chosen point) or change the order of it (move a line of chosen point to up or below). Clicking to a point opens ['Point' menu](/docs/documentation/plan-route/create-route#actions-of-point-menu). 

**2.Click to "Graph" button.** (Android)

![Plan route android-graph](@site/static/img/plan-route/plan-route-graph-android.png)

Description: [Click to graph](/docs/documentation/plan-route/create-route#actions-of-points-list-and-graph) shows information about point and its location on the route. View of the graph of a route with Overview, Altitude, Slope, Road type, Surface, Steepness.

## Creating a route

[Start creating a route](/docs/documentation/plan-route/create-route#main-menu):

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_create_new_route"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plan_route,plan_route_create_new_route"/>

### Drawing a line

Choose how to draw:
- By default **straight line** - only plain line stretches between shaping points:

![Plan route straight_line](@site/static/img/plan-route/plan-route-straight-line.png)

The straight line is useful for simple distance measurement, azimuth info or for areas not covered by routing data (off-road and off-path areas).

- Click to 'Add' button for adding shaping points or just click on the screen.

**Note**: Overview data available only on roads, calculate a route using ["Route between points”](/docs/documentation/plan-route/create-route#drawing-a-route) to see graphs.

### Drawing a route

- Click on ['Profile' button](/docs/documentation/plan-route/create-route#main-screen) for choosing an application profile. The route will be calculated between points by routing of your profile.
- Click to ['Add' button](/docs/documentation/plan-route/create-route#main-screen) for adding shaping points or just click on the screen.

![Plan route app_button](@site/static/img/plan-route/plan-route-app-button.png)

For Android we can modify routing parameters for chosen app profile by clicking to settings icon ![icon-settings](@site/static/img/plan-route/icon-settings.png) on ['Profile' button](/docs/documentation/plan-route/create-route#main-screen):

![app-settings](@site/static/img/plan-route/plan-route-app-set.png)

- Choose two or more application profiles for creating a route. Click to ['Profile' button](/docs/documentation/plan-route/create-route#main-screen):

 ![Plan route app_choosing](@site/static/img/plan-route/plan-route-app-choosing.png) 

Choose how to connect the points, by a straight line, or calculate a route between them as specified:

<Translate android="true" ids="whole_track"/> - <Translate android="true" ids="route_between_points_whole_track_button_desc"/>

<Translate android="true" ids="next_segment"/> - <Translate android="true" ids="route_between_points_next_segment_button_desc"/>

 - When you use two or more application profiles for your route:

for Android each segment has [a profile icon and color](/docs/documentation/plan-route/create-route#route-line) of the application profile which using for calculated route between shaping points;

for iOS all segments have [color of last using application profile](/docs/documentation/plan-route/create-route#route-line) for calculated route.

### Actions of 'Point' menu

Actions in 'Point' menu (by clicking to a point in ['Points' list](/docs/documentation/plan-route/create-route#points-list-and-graph)):

| | |
|------------|------------|
| **1.Click to a point from 'Points' list**: | Open 'Point' menu| 
|**Actions in 'Point' menu:** |   |
|1. Point info | Showed Number of point, Distance, Speed, Altitude of point. |
|2. <Translate ios="true" ids="move_point"/>|  <Translate ios="true" ids="move_point_descr"/> |
|3. <Translate ios="true" ids="add_after"/>| Move map to add points after a chosen point.  |
|4. <Translate ios="true" ids="add_before"/>|  Move map to add points before a chosen point.  |
|5. <Translate ios="true" ids="trim_before"/>| The trim route before a chosen point.  |
|6. <Translate ios="true" ids="trim_after"/>| The trim route after a chosen point. |
| 7. <Translate ios="true" ids="split_before"/>|  Split route before a chosen point.   |
|8. <Translate ios="true" ids="split_after"/>| Split route after a chosen point. |
| 9. <Translate ios="true" ids="change_route_type_before"/>| Change route type (application profile) before a chosen point. |
|10. <Translate ios="true" ids="change_route_type_after"/>| Change route type (application profile) after a chosen point.  |
|11. <Translate ios="true" ids="delete_point"/>| Delete chosen point from the route.  |

### Saving a route

Click to ['Done' button](/docs/documentation/plan-route/create-route#main-screen) to save your route like the GPX file.

![Plan route android-save](@site/static/img/plan-route/plan-route-animation.gif)

Find your track in 'My Places' menu:

<Translate android="true" ids="shared_string_menu,shared_string_my_places,show_gpx"/>

## 'Options' menu

In 'Options' menu you can make the next actions with your route:

![Plan route android-options](@site/static/img/plan-route/plan-route-options-android.png) ![Plan route ios-options](@site/static/img/plan-route/plan-route-options-ios.png)

|Action   |Description
|:------------|:------------|
|1. <Translate android="true" ids="route_between_points"/> | Showing chosen application profile (The straight line by default). Click to this action is equal ['Profile' button](/docs/documentation/plan-route/create-route#main-screen)  with opening [application profile menu](/docs/documentation/plan-route/create-route#drawing-a-route). |
|2. <Translate android="true" ids="plan_route_add_new_segment"/> or <Translate ios="true" ids="track_new_segment"/> | Drawing new segments of the route which not connect with the previous segment. |
|3. <Translate android="true" ids="shared_string_save_changes"/> | Save your route like GPX track and continue to create the next segment. |
|4. <Translate android="true" ids="save_as_new_track"/> | Save your route like GPX track.|
|5. <Translate android="true" ids="add_to_a_track"/> | Add your route to a track from your track folder and save the new track. |
|6. <Translate android="true" ids="get_directions"/> |Start navigation from your position to the finish point using a drawn route.|
|7. <Translate android="true" ids="reverse_route"/> | Change the direction of a drawn route. |
|8. <Translate android="true" ids="shared_string_clear_all"/> | Clear all shaping points.  |


## Modify existing GPX track

### Modify GPX track

'Plan route' tool allows modifying existing GPX track. You can make any actions with your tracks.

[Open any GPX track](/docs/documentation/plan-route/create-route#modify-gpx-track) for modifying it:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track,plan_route_import_track"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plan_route,plan_route_open_existing_track"/>

<p> </p>

In ['Points' list](/docs/documentation/plan-route/create-route#points-list-and-graph), there is information about the number  of points and a track distance.


![Plan route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png) ![Plan route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

You can make all actions with points in ['Points' list](/docs/documentation/plan-route/create-route#points-list-and-graph) and ['Point' menu](/docs/documentation/plan-route/create-route#actions-of-point-menu): delete, change order, move and etc.

For [Graph (Android)](/docs/documentation/plan-route/create-route#points-list-and-graph) you can see the actual information for a GPX track: Altitude, Slope, Speed.

In ['Options' menu](/docs/documentation/plan-route/create-route#options-menu) is available all actions for GPX track too: add a new segment, reverse route, directions, etc.


### Snap to roads

For example, you have recorded tracks. 'Plan route' tool allows snapping your track to the nearest allowed road with one of your application profiles.

For using this option you need to open your track by 'Plan route' tool:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> or <Translate android="true" ids="plan_route_import_track"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,plan_route,plan_route_open_existing_track"/>

<p> </p>

Next, choose the needed application profile for snapping your track to the nearest road. For this, you need to click ['Profile' button](/docs/documentation/plan-route/create-route#main-screen) or choose in ['Options' menu](/docs/documentation/plan-route/create-route#options-menu) → <translate android="true" ids="route_between_points"/>. For Android, you can set <translate android="true" ids="threshold_distance"/> parameter.

After calculating the new route you click ['Done' button](/docs/documentation/plan-route/create-route#main-screen) for saving the new GPX track which snapping to roads.


![Plan route snap-road-android](@site/static/img/plan-route/plan-route-snap-android.gif) ![Plan route snap-road-ios](@site/static/img/plan-route/plan-route-snap-ios.gif)

## Useful links

[Travel guides](/docs/documentation/plan-route/travel-guides)

