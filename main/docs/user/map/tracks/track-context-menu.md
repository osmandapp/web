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


## Overview {#overview}

The *Track context menu* provides information about the *[Track](../../personal/tracks/index.md)* in both text and [graphic](#altitude--speed-graphs) forms. It allows you to add information, make changes, edit, and perform various other actions with the track. You can access the *track context menu* by simply tapping the needed track on the map or using menu *[My places](../../personal/myplaces.md)* (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). You may need to open the track folder and select the desired track by tapping it.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_2_ios.png)

</TabItem>

</Tabs>


## Track Overview {#track-overview}

When you tap a track, the first screen opens of the *Track context menu* - *Overview tab*. On this tab, you can find a summary about the chosen track (*[Info panel](#info-panel)*) and make the most common actions with the track using *[Track actions menu](#track-actions)*. You can see [description and service information](#description-and-info) about your track if you pull the Overview tab up.

<!--
You can [short tap](../../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Info Panel {#info-panel}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_info_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_info_panel_ios.png)

</TabItem>

</Tabs>

At the top of the information panel, you can see the track’s name and the symbol used to mark it (*Android only*). The track name can be changed using the rename function in the [Options menu](#options). Some tracks (mostly the *[Travel guides](../../plan-route/travel-guides.md#manage-as-gpx-track)*) may have a short *[description](#description-and-info)* and (or) a picture below the *Track name*. An arrow shows *Direction to the nearest point of the track* from [My location](../../map/interact-with-map.md#my-location-and-zoom).  

The info panel also provides information about the following:

- *<Translate android="true" ids="distance"/>*. Shows track length.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>*. Displays the total sum of ascents and descents during the trip.
- *<Translate android="true" ids="altitude_range"/>*. Indicates min and max altitude on a track.  

:::note
In case your track was created in OsmAnd or any other tracking app (so its points have [`time` and  `speed`](../../plugins/trip-recording#recorded-gpx-file) tags), the informational panel will also contain information about *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (*Android*) or *<Translate ios="true" ids="total_time"/>* (*iOS*) (the length of time between the start and end points of the track), *<Translate android="true" ids="shared_string_time_moving"/>* (the sum of time while driving).
:::  

### Track Actions {#track-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_actions_ios.png)

</TabItem>

</Tabs>

- **Show / hide** buttons. Changes the visibility of the track on the map.
- [Appearance](./appearance.md). Customize the appearance of your track.
- **Edit track** (*Android*). Opens the track in [Plan a route tool](../../plan-route/create-route.md).
- **Export** (*iOS*). Allows you [to export a track](../../personal/tracks/manage-tracks.md#export).
- **Directions**. Opens the track in *[Navigation](../../navigation/setup/gpx-navigation.md#start-gpx-navigation)* mode.


### Options {#options}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

</TabItem>

</Tabs>

The menu **Options** allows you to manage and modify the selected track with various tools and settings.  

- **<Translate android="true" ids="shared_string_show_on_map"/>** – Controls the visibility of the track on the map.
- **<Translate android="true" ids="shared_string_appearance"/>** – Opens the [Appearance menu](../tracks/appearance.md) to customize the track’s color, width, and transparency.
- **<Translate android="true" ids="follow_track"/>** (*Android*) / **<Translate ios="true" ids="shared_string_navigation"/>** (*iOS*) – Starts [navigation by track](../../navigation/setup/gpx-navigation.md)., aligning your route with the selected track.

<br/>

- **<Translate android="true" ids="join_segments"/>** (*Android only*) – Merges track segments to fill gaps.
- **<Translate android="true" ids="analyze_on_map"/>**. Opens the [Analyze on map](../tracks/index.md#analyze-track-on-map) tool to inspect the track’s elevation, speed, and distance.
- **<Translate android="true" ids="analyze_by_intervals"/>** (*Android only*) - Analyzes the track by time or distance [intervals](./track-context-menu.md#analyze-by-intervals).

<br/>

- **<Translate android="true" ids="shared_string_share"/>** – Exports the selected track in a GPX format.
- **<Translate android="true" ids="upload_to_openstreetmap"/>** - [Uploads](../../plugins/osm-editing.md#upload-gps-track) the selected track to OpenStreetMap.

<br/>

- **<Translate android="true" ids="edit_track"/>** - Opens the [Plan route](../../plan-route/create-route.md) tool for modifying the track.
- **Duplicate track** (*iOS only*) – Creates and saves a copy of the track.
- **<Translate android="true" ids="rename_track"/>** – Allows changing the track name.
- **<Translate android="true" ids="change_folder"/>** – Moves the track to another folder or creates a new one.

<br/>

- **<Translate android="true" ids="shared_string_gps_filter"/>** (*Android only*) - Allows [filtering points of the track](#gps-filter) to refine accuracy.
- **<Translate android="true" ids="altitude_correction"/>** (*Android only*) - To [receive elevation data](#calculate-missing-elevation), [attach your track to the roads](../../navigation/setup/gpx-navigation.md#attach-to-the-roads) or calculate it offline (needed [Terrain maps](../../plugins/topography.md#download-maps)).
- **<Translate android="true" ids="simulate_your_location"/>** (*Android only*) - [Simulates your position](../../plugins/development.md#gpx-track-simulation) using a GPX track.

<br/>

- **<Translate android="true" ids="shared_string_delete"/>**. Deletes the track.


### Description and Info {#description-and-info}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_1_andr.png)  ![Description and Info Android](@site/static/img/personal/tracks/track_context_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png)

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


### Track Activity Type {#ttrack-activity-type}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track Activity Type](@site/static/img/personal/tracks/track_info_activity_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track Activity Type](@site/static/img/personal/tracks/track_info_activity_ios.png)

</TabItem>

</Tabs>


The *Activity* feature in OsmAnd allows you to tag recorded GPX tracks with specific activities for further analysis and organization in folders.

- [Activity tags for GPX tracks](../../plugins/trip-recording.md#recording-settings). When recording a GPX track, you can assign an activity type. This activity tagging helps you initially categorize tracks.
- [Activity filter](../../personal/tracks/smart-folder.md#search-filter). You can filter the recorded GPX tracks by activity, which allows you to focus on finding specific types of recordings, such as all biking or hiking tracks.
- [Manage activity types](../../personal/tracks/manage-tracks.md#selection-mode). You can change the activity type for selected folders or tracks using the selection mode in the Tracks tab of the My Places menu.
- **Activity list**. The activity categories and groups are defined in OsmAnd's resources. For developers and contributors, the activity list is maintained in a structured format at [activities.json](https://github.com/osmandapp/OsmAnd-resources/blob/master/poi/activities.json), which details the available activity groups and types.


## Altitude / Speed Graphs {#altitude--speed-graphs}

On the *<Translate android="true" ids="shared_string_gpx_track"/>* tab, you can find information about the track in graphical form. Using the switch, you can choose which data to display on the graph: separate data on *[<Translate android="true" ids="altitude"/>](#altitude)*, about the *[Speed](#speed)* (this option is available only for recorded tracks) or display altogether (*[<Translate android="true" ids="shared_string_overview"/>](#overview-information)*).

Interaction with the graph:

- ***Place a point on the graph***. If you want to see the information at a particular point of a track, you can tap anywhere on the graph and a pointer with the values will appear. At the same time, a blue marker will appear on the map, pointing to that location on the track.
- ***Zoom in/out***. You can use [two-finger movements](../../map/interact-with-map.md#gestures) to zoom in and out for a more detailed view. After zooming in, you can move the graph to the right and left, corresponding to moving forward and backward along the route.
- ***Additional information***. The right side of the graph contains data about the lowest, highest, and average altitude, slope, and speed. At the bottom of the graph, you can see the distance marks.


### Overview Information {#overview-information}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Context track menu Graphs Android](@site/static/img/personal/tracks/track_menu_graph_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Graphs iOS](@site/static/img/personal/tracks/track_menu_graph_2_ios.png)

</TabItem>

</Tabs>

On the **Overview** tab, you can see parameters such as:

- *<Translate android="true" ids="distance"/>*. The sum of the total distance traveled on the track, or the length of the track itself.
- *<Translate android="true" ids="shared_string_time_span"/>*. The time interval between the start and end points of the track.
- *<Translate android="true" ids="shared_string_start_time"/>* The exact time when the recording of the track starts.
- *<Translate android="true" ids="shared_string_end_time"/>*. The end time of the track recording.

The active **buttons** give access to actions such as:

- **<Translate android="true" ids="analyze_on_map"/>** button opens [Analyze track menu](../tracks/index.md#analyze-track-on-map) for the track.
- **<Translate android="true" ids="shared_string_options"/>** button opens a menu with:

  - *Edit* opens the track in [Plan route tool](../../plan-route/index.md).
  - *Delete* allows you to remove the selected track element.
  - *Split interval* opens [Split interval function](#analyze-by-intervals) for the track.


### Speed {#speed}

:::note Only recorded tracks
This tab can only be visible only on recorded tracks. Points on this type of track have **[`speed`](../../plugins/trip-recording#recorded-gpx-file)** tags.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track graph Speed Android](@site/static/img/personal/tracks/track_graph_speed_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph Speed iOS](@site/static/img/personal/tracks/track_graph_speed_3_ios.png)

</TabItem>

</Tabs>

The **Speed** graph displays metrics such as:

- *<Translate android="true" ids="average_speed"/>*. Indicates the average speed during the trip.
- *<Translate android="true" ids="max_speed"/>*. Shows the maximum speed during the trip.
- *<Translate android="true" ids="moving_time"/>*. Shows the total time during the trip in motion only.
- *<Translate android="true" ids="distance_moving"/>*. Indicates the adjusted distance of the trip.


### Altitude {#altitude}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track graph altitude Android](@site/static/img/personal/tracks/track_graph_altitude_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track graph altitude iOS](@site/static/img/personal/tracks/track_graph_altitude_2_ios.png)

</TabItem>

</Tabs>

The **Altitude** graph displays metrics such as:

- *<Translate android="true" ids="average_altitude"/>*. Indicates the average altitude above sea level on the route.
- *<Translate android="true" ids="altitude_range"/>*. The highest and lowest altitude recorded on the route.
- *<Translate android="true" ids="altitude_ascent"/>*. The cumulative gain in altitude above sea level along the route.
- *<Translate android="true" ids="altitude_descent"/>*. The cumulative loss of altitude along the route.

**Get elevation data.**  
If there is *no elevation information* on the route, you can add it in the following ways:

- *Calculate elevation button → [Use nearby roads](../../plan-route/create-route.md#get-elevation-data)*. Utilizes an offline map to find nearby roads and elevation data. It allows you to customize the geometry of the track.
- [Use Terrain maps](#calculate-missing-elevation). Utilizes terrain maps to obtain elevation data. The track geometry remains unchanged.


### Calculate Missing Elevation {#calculate-missing-elevation}

:::note OsmAnd Pro subscription
Calculate elevation offline feature is only available for [**OsmAnd Pro subscribers**](../../purchases/android.md#pro-features) <ProFeature />.
:::

<InfoAndroidOnly />

This feature allows you to calculate the elevation profile for GPX track offline for any terrain between 70 degrees north latitude and 70 degrees south latitude, based on [Terrain map data](../../plugins/topography.md#download-maps). *Terrain maps (3D) should be previously downloaded*.

1. Download [Terrain maps (3D)](../../plugins/topography.md#download-maps) for the required region.
2. If the track does not contain any altitude data, go to the track context menu (*Track context menu → <Translate android="true" ids="shared_string_gpx_track,altitude,calculate_altitude"/>*), select *Use Terrain maps*, and after the calculation you will get a track graph based on the terrain data.  

    ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  

3. If you are creating a route with the [Plan a route](../../plan-route/create-route.md#graph) tool using the *Straight line* method and there is no elevation data on the graph, you need to:
    - Tap *Get elevation data*, then select *Use Terrain maps*.
    - After the calculation, you will get your route's complete Altitude/Slope graph based on terrain data.  

  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Points / Waypoints {#points--waypoints}

Waypoints are one of the types of points available on the map. In general, they can be track points that are part of GPX files. A detailed description is available in the [points on the map](../../map/point-layers-on-map.md) article.

<Tabs groupId="operating-systems" queryString="current-os">

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


### Add Waypoint to a Track {#add-waypoint-to-a-track}

Waypoints can be added to the currently recorded track or to any track from [*My Places → Tracks list*](../../personal/tracks/manage-tracks.md):

- Use the [map context menu](../../map/map-context-menu.md#-add--edit-track-waypoint).
  - Waypoints are automatically displayed if the selected track is enabled on the map.
  - [Long tap](../../map/map-context-menu.md#select-any-point-long-tap) the map at any chosen location to create a waypoint.
  - You can set information about the waypoint in the opened [map context menu](../../map/map-context-menu.md#-add--edit-track-waypoint).

- Use [Add Waypoint](#points--waypoints) button of the track context menu.

- Add a waypoint as a [Quick action](../../widgets/quick-action.md#my-places) button.

### Create Waypoint {#create-waypoint}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add_waypoint_1_andr.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoint_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add_waypoints_2_ios.png)

</TabItem>

</Tabs>

Tap the *Add Waypoint* button to open waypoint creation screen (this screen is familiar with [Favorite Context menu](../../personal/favorites.md#create)).

1. **Add** *Name* of the waypoint, *Address* of the selected location and *Description* for it (optional).
2. **Select** Group.

    - Select previously created group categories or create a new one.
    - Create a name and appearance for the new waypoint group. This is also called *new category* in the application.
    - The **icon**, **icon color**, and **shape** will be used for all new waypoints added to the group.

3. **Appearance** setting:

    - Select an [**icon**](../../personal/favorites.md#favorite-icons) from the list of all POI categories icons.
    - Select **Color** of the icon.
    - Then select the **Shape** of the icon: *Circle, Octagon, Square*.

4. **Replace** another point with this, if you need to.  


### Actions with Groups {#actions-with-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png)

</TabItem>

</Tabs>

The *three-dot menu* ( &#8285; ) opens the waypoint *Group menu*.

**Actions:**

- **<Translate android="true" ids="shared_string_show_on_map"/>** - Allows you to display or not display group waypoints on the map. Or you can use [the screen button](#points--waypoints) to display or omit group waypoints on the map.
- **<Translate android="true" ids="shared_string_rename"/>** - Change the name of the group.
- **<Translate android="true" ids="change_default_appearance"/>** - Change the display options for a group of waypoints.
- **<Translate android="true" ids="add_group_to_markers"/>** or **Remove** (*Android only*) - Move group waypoints to [Map markers](../../personal/markers.md) list.
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Android only*) - Move group waypoints to [Favorites](../../personal/favorites.md).
- **<Translate android="true" ids="add_to_navigation"/>**  (*Android only*) - Creates a route between waypoints. The first and last points become the start and finish of the route, and the rest are converted to intermediate points.
- **<Translate android="true" ids="shared_string_delete"/>** - Delete a group of waypoints.


### Waypoint Groups {#waypoint-groups}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>

Manage the visibility of groups on the map: if you hide one track, the entire group will also be hidden.  

You can switch group waypoints on or off on the map using the button in the upper right corner of the context menu of the track on the map. Tap it and select the required action.

### Display Custom GPX Tags {#display-custom-gpx-tags}

<Tabs groupId="operating-systems" queryString="current-os">

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
| `osmand:background` | **Background** is the shape of the icon, such as a circle, octagon, or square. |
| `osmand:country` | **Country** is the name of country.  |
| `osmand:address` | **Address** is the address.  |
| `osmand:postcode` | **Postcode** is the postcode.  |
| `osmand:telephone` | **Telephone** is the telephone number.  |
| `osmand:state` | **State** is the state name.  |
| `osmand:start_date` | **Start date** is the schedule data of a point.  |

Waypoints are recorded with the track in the [GPX file](../../../technical/osmand-file-formats/osmand-gpx.md). Each of these waypoints has its own set of tags for description. All tags directly related to the description of waypoints that can be edited directly in the OsmAnd application are listed in this section.  
To change the Waypoint description, you can go one of the following ways:
  
1. Find the required track in the *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab* list.
2. Tap the track on the map, if it is included in the [list of visible](../tracks/index.md#display-tracks-on-the-map).
3. Tap the required waypoint if it is [visible](../../personal/tracks/manage-tracks.md#track-menu) on the map.  

    Then in the [Tracks Context menu](./track-context-menu.md) tap *points*, the field of the required folder with available waypoints and the Waypoint you are looking for. Select menu *Actions →* **Edit GPX waypoint** and make changes. You cannot change the creation date of a point, *timestamp*, in the application.  

**Amenity tags** that describe additional information, such as hours of operation or phone number, specific to the POI take that information from OpenStreetMap data or data you entered when creating the POI. You can edit such tags and [custom tags](#display-custom-gpx-tags) only in the code of the GPX file, which you can open with any text editor on your device.


## Analyze by Intervals {#analyze-by-intervals}

<InfoAndroidOnly />

![Track split by Android](@site/static/img/personal/tracks/split_by_1.png) 

The **Analyze by Intervals** option allows you to divide a track into sections and view detailed statistics for each part of the route. Tracks can be split by ***distance***, ***time***, or ***uphill/downhill*** parameters. 

To open this option:  
*<Translate android="true" ids="shared_string_options,analyze_by_intervals"/>* → choose the desired split mode 


### Split by Distance {#split-by-distance}

![Track split by distance tab](@site/static/img/personal/tracks/split_by_2_tab.png) ![Track split by distance map](@site/static/img/personal/tracks/split_by_2_map.png)  

This option allows you to divide a track into fixed distance intervals and analyze detailed statistics for each segment. Available distance intervals are ***20 m***, ***50 m***, ***100 m***, ***200 m***, ***500 m***, ***1 km***, ***2 km***, ***5 km***, and ***10 km***. After choosing a distance interval, the track is displayed as a list of segments. 

For each segment, you can view:
- distance covered.
- time span.
- average, minimum and maximum altitude.
- ascent and descent.
- time in motion.
- average and maximum speed.

When you tap on any segment in the list, the map view shows the full track with its intervals and opens the context menu for the track at the bottom of the screen.


### Split by Time {#split-by-time}

![Track split by time tab](@site/static/img/personal/tracks/split_by_3_tab.png) ![Track split by time map](@site/static/img/personal/tracks/split_by_3_map.png) 

The **Split by Time** option divides a track into intervals of equal duration. You can choose between ***1 min***, ***2 min***, ***2.5 min***, ***5 min***, ***10 min***, ***15 min***, ***30 min***, and ***60 min***. The way the intervals are displayed, the statistics provided for each segment, and how they appear on the map are the same as in [Split by Distance](#split-by-distance) section.


### Split by Uphill/Downhill {#split-by-uphill-downhill}

![Track split by uphill/downhill tab](@site/static/img/personal/tracks/split_by_4_tab.png) ![Track split by uphill/downhill map](@site/static/img/personal/tracks/split_by_4_map.png) 

This option divides a track into segments based on elevation changes. Each interval is classified as ***uphill***, ***downhill***, or ***flat***. The way the intervals are displayed, the statistics provided for each segment, and how they appear on the map are also the same as in [Split by Distance](#split-by-distance) section.


## GPS Filter {#gps-filter}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- A user can filter points of a GPX track by Smoothing, Speed, Altitude, and Min GPS Precision for saving new track without excluded points. -->

This filter allows you to improve your track statistics by excluding unnecessary or incorrect data. You can filter out track points that don't fit your track parameters, and as a result, get a more accurate graph and visual route line without distortion or recording noise. You can make changes with filters such as *Smoothing*, *Speed*, *Altitude*, and *GPS Precision*, which hide filtered points from the current track. Besides, in the *Statistics* menu, you can check how your changes are displayed on the graph before you save them. You can also *Reset to original* and *Save as a copy* of your track in this filter without saving the original one.  

<!-- In the screen you see the map (with [zoom buttons](../../map/interact-with-map.md#my-location-and-zoom), [my location button](../../map/interact-with-map.md#my-location-and-zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens the "Actions" part of the "Filter" or "Statistics" menu.
- "&#8634;" button allows you to reset the track to the original.
- "My track location" button allows you to move the map to your track.-->

The Android GPS Filter app page includes the following:  

- A map with a saved track and an extra button, *My track location* (it aligns a track to the center of a map).
- Buttons *Refresh* and *Menu* at the top (*Menu* opens *Action* field at the bottom of the page).
- Blocks *Filter*, *Statistics*, *Action*.  


### Filter Menu {#filter-menu}

In this menu, you can change some parameters of your track such as *Smoothing*, *Speed*, *Altitude*, or *GPS precision* using filters. The menu is divided into a *Points part* and an *Actions part*.

| ***Points*** |
|:------------|
|This part shows the number of points after filtering and the total number of points on the selected track before filters were used.|
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Actions*** |
|*Smoothing*. Sets the threshold distance between points. Track points are at least this distance from the last visible point are hidden. All points on the track, that are at a distance from each other less than the distance selected by the filter, will be hidden. Track points are counted from the last visible point. Note, that high thresholds can oversimplify the track geometry.|
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Speed*. Only the track points corresponding to the selected speed interval are displayed on the graph and the map, the others are hidden.|
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) |
|*Altitude*. Only the track points corresponding to the selected altitude interval are displayed on the graph and the map, the others are hidden.|
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) |
|*GPS precision*. Sets the maximum permissible value for HDOP. Points with a higher value are hidden.|
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  


### Statistics {#statistics}

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_statistics_andr.png)

The Statistics tab displays information about the **modified** track, meaning the track without filtered values. It is displayed in the statistics blocks and graph data.
  
- The *Data* part shows statistics similar to the [Filter menu](#filter-menu).  
- The *Graph* part displays three types of graphs by parameters: Overview, Altitude, and Speed. This functional is a copy of [track Graph](#altitude--speed-graphs).

### Actions {#actions}

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)

The list of actions is available at the bottom of the **Filter** or **Statistics** tab. OsmAnd applies all changes made to the track without updating the file, but you can save the changes manually.

- *<Translate android="true" ids="reset_to_original"/>*. Allows you to return the parameters to their original state.  
- *<Translate android="true" ids="save_as_copy"/>*. Allows you to save the track as a new one.
- *<Translate android="true" ids="save_changes_into_file"/>*. Allows you to rewrite the track with the new parameters.  


## Related Articles {#related-articles}

- [GPX tracks](../../personal/tracks/manage-tracks.md)
- [Tracks on the map](./track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Plan route](../../plan-route/index.md)
- [Trip Recording plugin](../../plugins/trip-recording.md)
- [Analyze on Map](../tracks/index.md#analyze-track-on-map)


