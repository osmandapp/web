---
sidebar_position: 4
title:  Track Context Menu
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


## Overview

The *Track context menu* provides information about the *[Track](../../personal/tracks/index.md)* in both text and [graphic](#altitude--speed-graphs) forms. It allows you to add information, make changes, edit, and perform various other actions with the track. You can access the *track context menu* by simply tapping the needed track on the map or using *[My places](../../personal/myplaces.md)* menu (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). You may need to open the track folder and select the desired track by tapping it.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_ios_1.png)

</TabItem>

</Tabs>


## Track Overview

When you tap a track, the first screen opens of the *Track context menu* - *Overview tab*. On this tab, you can find a summary about the chosen track (*[Info panel](#info-panel)*) and make the most common actions with the track using *[Quick actions menu](#quick-actions)*. You can see [description and service information](#description-and-info) about your track if you pull the Overview tab up.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Info Panel

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_overview_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_overview_ios_2.png)

</TabItem>

</Tabs>

At the top of the information panel, you can see the name of the track, as well as the symbol used to mark it (*Android only*). The track name can be changed using the rename function in [Options menu](#options). Some tracks (mostly *[Travel guides](../../plan-route/travel-guides.md#manage-as-gpx-track)*) may have a short *[description](#description-and-info)* and (or) a picture below the *Track name*. An arrow shows *Direction to the nearest point of the track* from [My location](../../map/interact-with-map#my-location--zoom).  

The info panel also provides information about the following:

- *<Translate android="true" ids="distance"/>*. Shows track length.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Displays the total sum of ascents and descents during the trip.
- *<Translate android="true" ids="altitude_range"/>*. Indicates min and max altitude on a track.  

:::note
If your track was created in OsmAnd or any other tracking app (so its points have [`time` and  `speed`](../../plugins/trip-recording#recorded-gpx-file) tags), the informational panel will also contain information about *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) or *<Translate ios="true" ids="total_time"/>* (*iOS*) (the length of time between the start and end points of the track), *<Translate android="true" ids="shared_string_time_moving"/>* (the sum of time while driving).
:::  

### Quick Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

- [**Show / hide** buttons](./track-context-menu.md#quick-actions). Allows you to enable or disable the track display on the map.
- [**Appearance**](../../map/tracks/appearance.md). Used to customize the appearance of your track.
- **Edit track** (*Android*). Opens the track in [*Plan a route tool*](../../plan-route/create-route.md).
- **Export** (*iOS*). Allows [to export a track](../../personal/tracks/manage-tracks.md#export).
- **Directions**. Opens the track in *[Navigation](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* mode.


### Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

Menu *Options* allows manipulation with the chosen track.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** - shows or not the track on the map.
- **<Translate android="true" ids="shared_string_appearance"/>** - opens [Appearance menu](../tracks/appearance.md) for the track.
- **<Translate android="true" ids="follow_track"/>** (*Android*) or **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) - starts navigation by [Follow track option](../../navigation/setup/gpx-navigation.md).


- **<Translate android="true" ids="join_segments"/>** (*Android*) - allows joining gaps of the track.
- **<Translate android="true" ids="analyze_on_map"/>** - opens [Analyze on map function](../index.md#analyze-track-on-map).
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Android*) - [analyze the track by time or distance intervals](./track-context-menu.md#split-interval).


- **<Translate android="true" ids="shared_string_share"/>** - export the chosen track.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [upload the chose track to OpenStreetMap](../../plugins/osm-editing.md#how-to-upload-gpx-track).


- **<Translate android="true" ids="edit_track"/>** - open the chosen track in [Plan route tool](../../plan-route/create-route.md).
- **Duplicate track** (*iOS*) - allows you to make and save a copy of the track.
- **<Translate android="true" ids="rename_track"/>** - change track name.
- **<Translate android="true" ids="change_folder"/>** - select a folder and add a new one for the chosen track.


- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Android*) - allows [filtering points of the track](./track-context-menu.md#gps-filter).
- **<Translate android="true" ids="altitude_correction"/>** (*Android*) - to [receive elevation data](./track-context-menu.md#calculate-elevation-offline), attach your track to the roads or calculate it offline (needed [Terrain maps](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Android*) - [simulate your position](../../plugins/development.md#gpx-track-simulation) using a GPX track.


- **<Translate android="true" ids="shared_string_delete"/>** - delete the track.


### Description and Info

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

<!-- ![Description of a track Android 1](@site/static/img/personal/tracks/track_context_overview_andr_4.png)  ![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5.png)
![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5-1.png) ![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5-2.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)  <!-- ![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4.png) -->

</TabItem>

</Tabs>

This section of the *Overview* tab displays ***tag data*** and ***all general information***.

- **Description**.  *<Translate android="true" ids="shared_string_edit"/>* (*Android*) / *<Translate ios="true" ids="context_menu_edit_descr"/>* (*iOS*) button is used to edit the track description. Tag `desc`.

- **General**. Contains information about the *GPX file size*, *file folder*, and *creation date* with the `time` tag.

- **Info**. Tags: *Keywords* - `keywords`, &nbsp;*Link* - `link`, &nbsp;*Activity* - `activities`.

- **Author**. Tags: *Author* - `author`, &nbsp;*Name* - `name`, &nbsp;*E-mail address* - `email`, &nbsp;*Link* - `link`.

- **Copyright**. Tags: *Copyright* - `copyright`, &nbsp;*Author* - `author`, &nbsp;*Year* - `year`, &nbsp;*License* - `license`.

- **Additional**. All tags from ***extensions*** section:&nbsp; `address`,&nbsp; `icon`,&nbsp; `background`,&nbsp; `color`,&nbsp; `country`,&nbsp; `state`,&nbsp; `telephone`,&nbsp; `postcode`,&nbsp; `start_date`,&nbsp; `desc`.
  

<details>

<summary>Example XML code of GPX file</summary>

```xml
 <metadata>
    <name>GPX File Example</name>
    <desc>Example GPX file with various tags</desc>
    <author>
      <name>Author Name</name>
      <email id="your" domain="email.com" />
      <link href="https://yourwebsite.com" />
    </author>
    <copyright author="OsmAnd B.V">
      <year>2023</year>
      <license>https://github.com/osmandapp/OsmAnd/blob/master/LICENSE</license>
    </copyright>
    <link href="http://docs.osmand.net" />
    <time>2023-12-13T12:00:00Z</time>
    <keywords>gpx, osmand, hiking</keywords>
    <extensions>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:icon>place_town</osmand:icon>
      <osmand:background>circle</osmand:background>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:country>United States</osmand:country>
      <osmand:state>Virginia</osmand:state>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They are typically made of wood or other smooth materials and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. Boardwalks are often near parking lots, so expect large crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>


### Track Information Activity

<InfoAndroidOnly />

![Track Information Activity](@site/static/img/personal/tracks/track_info_activity_andr.png)

The *Activity* feature in OsmAnd allows you to tag recorded GPX tracks with specific activities for further analysis and organization in folders.

- [Activity tags for GPX tracks](../../plugins/trip-recording.md#recording-settings). When recording a GPX track, you can assign an activity type. This activity tagging helps you to categorize tracks initially.
- [Activity filter](../../personal/tracks/smart-folder.md#search-filter). You can filter the recorded GPX tracks by activity, which allows you to focus on finding specific types of recordings, such as all biking or hiking tracks.
- [Manage activity types](../../personal/tracks/manage-tracks.md#selection-mode). You can change the activity type for selected folders or tracks using the selection mode in the Tracks tab of the My Places menu.
- **Activity list**. The activity categories and groups are defined in OsmAnd's resources. For developers and contributors, the activity list is maintained in a structured format at [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), which details the available activity groups and types.

## Altitude / Speed Graphs

On the *<Translate android="true" ids="shared_string_gpx_track"/>* tab, you can find information about the track in graphical form. Using the switch, you can choose which data to display on the graph: separate data on *[<Translate android="true" ids="altitude"/>](#altitude)*, about the *[Speed](#speed)* (this option is available only for recorded tracks) or display altogether (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interaction with the graph:

- ***Place a point on the graph***. If you want to see the information at a particular point of a track, you can tap anywhere on the graph and a pointer with the values will appear. At the same time, a blue marker will appear on the map, pointing to that location on the track.
- ***Zoom in/out***. You can use [two-finger movements](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. After zooming in, you can move the graph to the right and left, corresponding to moving forward and backward along the route.
- ***Additional information***. The right side of the graph contains data about the lowest, highest, and average altitude, slope, and speed. At the bottom of the graph, you can see the distance marks.


### Overview Information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_1_ios.png)

</TabItem>

</Tabs>

- *<Translate android="true" ids="distance"/>*. This is the sum of the total distance traveled on the track, or the length of the track itself.
- *<Translate android="true" ids="shared_string_time_span"/>*. This is the time interval between the start and end points of the track.
- *<Translate android="true" ids="shared_string_start_time"/>* This is the exact time when the recording of the track starts.
- *<Translate android="true" ids="shared_string_end_time"/>*. This is the end time of the track recording.

**Buttons**:

- **<Translate android="true" ids="analyze_on_map"/>** button opens [Analyze track menu](../index.md#analyze-track-on-map) for the track.

- **<Translate android="true" ids="shared_string_options"/>** button opens a menu with:

  - *Edit* opens the track in [Plan route tool](../../plan-route/index.md).
  - *Delete* allows you to remove the selected track element.
  - *Split interval* opens [Split interval function](#split-interval) for the track.


### Speed

:::note
This tab can be visible only on recorded tracks (points of this track type have [< speed >](../../plugins/trip-recording#recorded-gpx-file) tags).
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_ios.png)

</TabItem>

</Tabs>

The Speed graph shows:

- *<Translate android="true" ids="average_speed"/>*. Indicates the average speed during the trip.
- *<Translate android="true" ids="max_speed"/>*. Shows the maximum speed during the trip.
- *<Translate android="true" ids="moving_time"/>*. Shows the total time during trip in motion only.
- *<Translate android="true" ids="distance_moving"/>*. Indicates the adjusted distance of the trip.


### Altitude

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_ios.png)

</TabItem>

</Tabs>

- *<Translate android="true" ids="average_altitude"/>*. Indicates the average altitude above sea level on the route.
- *<Translate android="true" ids="altitude_range"/>*. The highest and lowest altitude recorded on the route.
- *<Translate android="true" ids="altitude_ascent"/>*. The cumulative gain in altitude above sea level along the route.
- *<Translate android="true" ids="altitude_descent"/>*. The cumulative loss of altitude along the route.

If there is no elevation information on the route, you can add it in the following ways:

- *Calculate elevation button → [Use nearby roads](../../plan-route/create-route.md#use-nearby-roads)*. Utilizes an offline map to find nearby roads and elevation data. Allows you to customize the geometry of the track.
- [*Use Terrain maps*](#calculating-missing-elevation). Utilizes terrain maps to obtain elevation data. The track geometry remains unchanged.


### Calculating Missing Elevation

<InfoAndroidOnly />

:::note
Calculate elevation offline feature is only available for [**OsmAnd Pro subscribers**](../../purchases/android.md#pro-features) <ProFeature />.
:::

This feature allows you to calculate the elevation profile for GPX track offline for any terrain between 70 degrees north latitude and 70 degrees south latitude, based on [Terrain map data](../../plugins/topography.md#how-to-download). *Terrain maps (3D) should be previously downloaded*.

1. Download [Terrain maps(3D)](../../plugins/topography.md#download-maps) for the required region.
2. If the track does not contain any altitude data, go to the track context menu (*Track context menu → <Translate android="true" ids="shared_string_gpx_track,altitude,get_altitude_data"/>*), select *Use Terrain maps*, and after the calculation you will get a track graph based on the terrain data.  
  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  
3. If you are creating a route with the [*Plan a route*](../../plan-route/create-route.md#graph) tool using the *Straight line* method and there is no elevation data on the graph, you need to:
    - Tap *Get elevation data*, then select *Use Terrain maps*.
    - After the calculation, you will get a complete Altitude/Slope graph of your route based on terrain data.  

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Points / Waypoints

Waypoints are one of the types of points available on the map. In general, they can be track points that are part of GPX files. A detailed description is available in the [Points on the map](../../map/point-layers-on-map.md) article.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In this *Points* tab:

- [Show track points data](#display-custom-gpx-tags) and modify your track points (waypoints and route points), [delete it and add](#points--waypoints) waypoints to a track.
- Create and modify [Group (folder) of points](#waypoint-groups).


### Add Waypoint to a Track

Waypoints can be added to the currently recorded track or any track from your track collection [*My Places → Tracks list*](../../personal/tracks/manage-tracks.md):

- Using the [map context menu](../../map/map-context-menu.md#-add--edit--track-waypoint). Waypoints are automatically displayed if the selected track is enabled on the map. To create a waypoint, use a [long tap](../../map/map-context-menu.md#select-any-point-long-tap) on the map at any chosen location. You can set information about the waypoint in the opened [map context menu](../../map/map-context-menu.md#-add--edit--track-waypoint).
- Using [*Add Waypoint*](#points--waypoints) button of the track context menu.
- You can also add a waypoint as a Quick action. Follow the [*Add track waypoint*](../../widgets/quick-action.md#create-items) to configure.

When you tap the *Add Waypoint* button, the Creation point screen opens (this screen is familiar with [*Favorite Context menu*](../../personal/favorites.md#favorite-context-menu)).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

1. **Add** *Name* of the waypoint, *Address* of the selected location and *Description* for it, if you want.
2. **Select** Group.

    - You can select previously created group categories or create a new one.
    - You can create a name and an appearance for a new group (in the application, it is also called a *new category*) of waypoints. The icon, icon color, and shape will be used for all new waypoints added to the group.

3. **Appearance** setting:

    - Select [**icon**](../../personal/favorites.md#favorite-icons) from the list.
    - Select **Color** of the icon.
    - Then select the **Shape** of the icon: *Circle, Octagon, Square*.

4. **Replace** another point with this, if you need to.  


### Actions with Groups

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

Three-dot button (**&#8285;**) opens the waypoint *Group menu*.

**Actions:**

- **<Translate android="true" ids="shared_string_show_on_map"/>**. Allows you to display or not display group waypoints on the map. Or you can use [the screen button](#points--waypoints) to display or omit group waypoints on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Allows you to change the name of the group.
- **<Translate android="true" ids="change_color"/>**. Allows you to change the color for group waypoints.
- **<Translate android="true" ids="copy_to_map_markers"/>** (*Android only*). Allows you to move group waypoints to [Map markers](../../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Android only*). Allows you to move group waypoints to [Favorites](../../personal/favorites.md).
- **<Translate android="true" ids="shared_string_delete"/>**. Allows you to delete group waypoints.


### Waypoint Groups

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

- You can control the visibility of groups on the map. If the track is hidden, all groups will also be hidden.

- You can switch group waypoints on or off on the map using the button in the upper right corner of the context menu of the track on the map. Tap it and select the required action.

### Display Custom GPX Tags

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Points](@site/static/img/personal/tracks/waypoints_tag_info_ios.png)

</TabItem>

</Tabs>
  

<details>

<summary>Example XML code of Waypoint tags</summary>

```xml
  <wpt lat="40.123456" lon="-73.987654">
    <ele>100</ele>
    <time>2024-04-04T13:12:11Z</time>
    <name>Waypoint 1</name>
    <desc>Long description</desc>
    <link href="http://docs.osmand.net" />
    <type></type>
    <cmt>Short comment for the waypoint.</cmt>
    <extensions>
      <osmand:country>United States</osmand:country>
      <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
      <osmand:color>#ff4e4eff</osmand:color>
      <osmand:background>circle</osmand:background>
      <osmand:icon>place_town</osmand:icon>
      <osmand:postcode>23284</osmand:postcode>
      <osmand:telephone>(804) 828-0100</osmand:telephone>
      <osmand:state>Virginia</osmand:state>
      <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
    </extensions>
  </wpt>
```

</details>

<details>

<summary>Example XML code of Route point tags</summary>

```xml
  <rte>
    <name>Route 1</name>
    <desc>A sample route</desc>
    <rtept lat="40.123456" lon="-73.987654">
      <ele>110</ele>
      <name>Route Point 1</name>
      <desc>Point 1 of the route</desc>
      <extensions>
        <osmand:country>United States</osmand:country>
        <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
        <osmand:color>#ff4e4eff</osmand:color>
        <osmand:background>circle</osmand:background>
        <osmand:icon>place_town</osmand:icon>
        <osmand:postcode>23284</osmand:postcode>
        <osmand:telephone>(804) 828-0100</osmand:telephone>
        <osmand:state>Virginia</osmand:state>
        <osmand:start_date>Thursday, June 8, 2023</osmand:start_date>
      </extensions>
    </rtept>
  </rte>
```

</details>

**Tags:**  

| Parameter | Description |
| --- | --- |
| `lat` | **Latitude** is one of the geographic coordinates by which you can determine a location. |
| `lon` | **Longitude** is another of the geographic coordinates by which you can determine a location. |
| `time` | **Timestamp** is the date and time when the point was recorded. |
| `name` | **Name** is the name of the point. Any characters are allowed.  |
| `desc` | **Description** contains additional information about the point. |
| `type` | **Select group** is the name of the OsmAnd folder in which this waypoint is saved. |
| `cmt` | **Comment** is a short comment on a point. |
| `link` | **Link** is a link to any sources. |
| `ele` | **Elevation** is a point elevation. |


**Extensions:**  

| Extension | Description |
| --- | --- |
| `osmand:icon` | **Icon** is the name of the icon you selected. |
| `osmand:color` | **Color** is the color in HEX format.  |
| `osmand:background` | **Background** is the shape of the icon, such as a circle, octagon or square. |
| `osmand:country` | **Country** is the name of country.  |
| `osmand:address` | **Address** is the address.  |
| `osmand:postcode` | **Postcode** is the postcode.  |
| `osmand:telephone` | **Telephone** is the telephone number.  |
| `osmand:state` | **State** is the state name.  |
| `osmand:start_date` | **Start date** is the schedule data of a point.  |

Waypoints are recorded with the track in the [GPX file](../../../technical/osmand-file-formats/osmand-gpx.md). Each of these waypoints has its own set of tags for description. All tags that are directly related to the description of waypoints and that can be edited directly in the OsmAnd application are listed in this section.  
To change the Waypoint description, you can go one of the following ways:
  
1. Find the required track in the *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab* list.
2. Tap the track on the map, if it is included in the [list of visible](../tracks/index.md#display-tracks-on-the-map).
3. Tap the required waypoint if it is [visible](../../personal/tracks/manage-tracks.md#show-tracks-on-map) on the map.  

    Then in the [Tracks Context menu](./track-context-menu.md) tap *Points*, the field of the required folder with available waypoints and the Waypoint you are looking for. Select menu *Actions →* **Edit GPX waypoint** and make changes. You cannot change the creation date of a point, *timestamp*, in the application.  

**Amenity tags** that describe additional information, such as hours of operation or phone number, specific to the POI take that information from OpenStreetMap data or data that you entered when creating the POI. You can edit such tags and [custom tags](#display-custom-gpx-tags) only in the code of the GPX file, which you can open with any text editor on your device.



## Split Interval

<InfoAndroidOnly />

You can divide the track into intervals, such as distance and time, and analyze it.  

Split the track by distance or time interval.  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>*  

![Track split interval screen Android](@site/static/img/personal/tracks/track_split_interval_android.png) ![Track split interval screen time Android](@site/static/img/personal/tracks/track_split_interval_time_android.png)  


## GPS Filter

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

This filter allows you to improve your track statistics by excluding unnecessary or incorrect data. You can filter out track points that don't fit your track parameters, and as a result, get a more accurate graph and visual route line without distortion or recording noise. You can make changes with filters such as *Smoothing*, *Speed*, *Altitude*, and *GPS Precision*, which hide filtered points from the current track. Besides, in the *Statistics* menu, you can check how your changes are displayed on the graph before you save them. You can also *Reset to original* and *Save as a copy* of your track in this filter without saving the original one.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location--zoom), [my location button](../../map/interact-with-map.md#my-location--zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

The Android GPS Filter app page includes the following:  

- A map with a saved track and an extra button, *My track location* (it aligns a track to the center of a map).
- Buttons *Refresh* and *Menu* at the top (*Menu* opens *Action* field at the bottom of the page).
- Blocks *Filter*, *Statistics*, *Action*.  


### Filter Menu

In this menu, you can change some parameters of your track such as *Smoothing*, *Speed*, *Altitude*, or *GPS precision* using filters. The menu is divided into a *Points part* and an *Actions part*.

| ***Points*** |
|:------------|
|This part shows the number of points after filtering and the total number of points on the selected track before filters were used.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Actions*** |
|*Smoothing*. Sets the threshold distance between points. Track points that are at least this distance from the last visible point are hidden. All points on the track, that are at a distance from each other less than the distance selected by the filter, will be hidden. Track points are counted from the last visible point. Note, that high thresholds can oversimplify the track geometry.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Speed*. Only the track points corresponding to the selected speed interval are displayed on the graph and the map, the others are hidden.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitude*. Only the track points corresponding to the selected altitude interval are displayed on the graph and the map, the others are hidden.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS precision*. Sets the maximum permissible value for HDOP. Points with a higher value are hidden.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statistics

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_android.png)

The Statistics tab displays information about the **modified** track, meaning the track without filtered values. It is displayed in the statistics blocks and graph data.
  
- The *Data* part shows statistics similar to the [Filter menu](#filter-menu).  
- The *Graph* part displays three types of graphs by parameters: Overview, Altitude, and Speed. This functional is a copy of [track Graph](#altitude--speed-graphs).

### Actions

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

The list of actions is available at the bottom of the **Filter** or **Statistics** tab. OsmAnd applies all changes made to the track without updating the file, but you can save the changes manually.

- *<Translate android="true" ids="reset_to_original"/>*. Allows you to return the parameters to their original state.  
- *<Translate android="true" ids="save_as_copy"/>*. Allows you to save the track as a new one.
- *<Translate android="true" ids="save_changes_into_file"/>*. Allows you to rewrite the track with the new parameters.  


## Related Articles

- [GPX tracks](../../personal/tracks/manage-tracks.md)
- [Tracks on the map](./track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Plan route](../../plan-route/index.md)
- [Trip Recording plugin](../../plugins/trip-recording.md)
- [Analyze on Map](../index.md#analyze-track-on-map)

> *This article was last updated in November 2024*
