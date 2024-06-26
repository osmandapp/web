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

## Overview

The *Track context menu* provides information about the *[Track](../personal/tracks/index.md)* in both text and [graphic](#altitude--speed-graphs) forms. It allows you to add information, make changes, edit and perform various other actions with the track. You can access *Track context menu* by simply tapping the needed track on the map or using *[My places](../personal/myplaces.md)* menu (*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/>*). You may need to open track folder and select the desired track by tapping it.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Overview track context menu Android](@site/static/img/personal/tracks/track_context_overview_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Overview track context menu iOS](@site/static/img/personal/tracks/track_context_overview_ios_1.png)

</TabItem>

</Tabs>

As you can see on the screenshot, the *Track context menu* consists of 4 tabs, which can be accessed by clicking on the corresponding icons at the bottom of the screen: 
- [Overview tab](#overview-tab) 
- [Track tab](#altitude--speed-graphs) with Altitude / Speed Graphs 
- [Points tab](#points--waypoints) 
- [Options tab](#options)

## Overview tab

When you tap a track, opens the first screen of the *Track context menu* - *Overview tab*. On this tab you can find a summary about the chosen track (*[Info panel](#info-panel)*) and make the most common actions with the track using *[Quick actions menu](#quick-actions)*. If you pull Overview tab up, you will see [description and service information](#description-and-info) about your track.

<!--
You can [short tap](../map/map-context-menu.md#select-route-short-tap-for-android) on the track on the map → <Translate android="true" ids="shared_string_overview"/> → click to "eye" button for not showing the track on the map. 
-->

### Info panel

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Info panel overview Android](@site/static/img/personal/tracks/track_context_overview_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Info panel overview iOS](@site/static/img/personal/tracks/track_context_overview_ios_2.png)

</TabItem>

</Tabs>

At the top of the information panel you can see the name of the track, as well as the symbol used to mark it (*only Android*). Track name can be changed using rename function in [Options menu](#options). Some tracks (mostly *[Travel guides](../plan-route/travel-guides.md#manage-as-gpx-track)*) may have short *[description](#description-and-info)* and (or) a picture below the *Track name*. An arrow shows *Direction to the nearest point of the track* from [My location](../map/interact-with-map#my-location--zoom). Info panel also provides information about:
- *<Translate android="true" ids="distance"/>* - shows track length.
- *<Translate android="true" ids="altitude_ascent"/>* / *<Translate android="true" ids="altitude_descent"/>* - displays the total sum of ascents and descents during the trip.
- *<Translate android="true" ids="altitude_range"/>* - indicates min and max altitude on a track.  

:::note
If your track was created in OsmAnd or any other tracking app (so its points have [`time` and  `speed`](../plugins/trip-recording#recorded-gpx-file) tags), in info panel will be also information about *<Translate android="true" ids="average_speed"/>*, *<Translate android="true" ids="max_speed"/>*, *<Translate android="true" ids="shared_string_time_span"/>* (**Android**) or *<Translate ios="true" ids="total_time"/>* (**iOS**) (the length of time between the start and end points of the track) , *<Translate android="true" ids="shared_string_time_moving"/>* (sum of time during motion).
:::  

### Quick actions

Buttons panel with the next action: *Show / Hide* a track on the map, opening [_Appearance_](../map/tracks-on-map/track-appearance.md) menu of a track, *Export / [Plan route](../plan-route/create-route.md)*, [_Navigation_](../navigation/setup/gpx-navigation.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track context menu overview Android 3](@site/static/img/personal/tracks/track_context_overview_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track context menu overview iOS 3](@site/static/img/personal/tracks/track_context_overview_ios_3.png)

</TabItem>

</Tabs>

- [*Show / hide* buttons](../map/tracks-on-map/tracks-types.md#tracks-in-track-context-menu) allow to anable or disable displaying of a track on the map.
- *Appearance* - is used to customise the [Appearance](../map/tracks-on-map/track-appearance.md) of your track.
- *Edit track* (**Android**) - opens the track in *[Plan route tool](../plan-route/create-route.md)* or *Export* (**iOS**) allows [to export a track](../personal/tracks/manage-tracks.md#export).
- *Directions* - opens the track in *[Navigation](../navigation/setup/gpx-navigation.md#start-gpx-navigation)* mode.

### Description and info

All tags info and description show at this part of Overview tab.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Description of a track Android 1](@site/static/img/personal/tracks/track_context_overview_andr_4.png) <!--  ![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5.png) -->

<!-- ![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5-1.png) ![Description of a track Android 2](@site/static/img/personal/tracks/track_context_overview_andr_5-2.png) -->

</TabItem>

<TabItem value="ios" label="iOS">

![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4.png)  <!-- ![Description of a track iOS](@site/static/img/personal/tracks/track_context_overview_ios_4-1.png) -->

</TabItem>

</Tabs>

This section displays data from the following tags, as well as general information:

- **Description**:  *<Translate android="true" ids="shared_string_edit"/>* (**Android**) or *<Translate ios="true" ids="context_menu_edit_descr"/>* (**iOS**) - is used to edit description of the track.
- **General** (contains info about file size, location folder, date of creation): _Created on_(tag `time`), _Size_(GPX file size), _Location_(File folder), _Description_(tag `desc`).
- **Info**: _Keywords_(tag `keywords`), _Link_(tag `link`).
- **Author** (tag `author`): _Name_(tag `name`), _E-mail address_ (tag `email`), _Link_(`link`).
- **Copyright** (tag `copyright`): (tag `author`), _Year_(tag `year`), _License_(tag `license`).
- **Additional** (all tags from `extensions` section): _osmand_:`address`, `icon`, `background`, `color`, `country`, `state`, `telephone`, `postcode`, `start_date`, `desc`.
  

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
      <osmand:desc>Boardwalks are walkways that cross over water or marshy ground. They’re typically made of wood or other smooth materials, and are accessible to wheelchairs. Please check with your park to see if there are accessible trails available. You’ll often find boardwalks close to parking lots, so expect larger crowds.</osmand:desc>
    </extensions>
  </metadata>

```

</details>



## Altitude / Speed Graphs

On the *<Translate android="true" ids="shared_string_gpx_track"/>* tab you can find information about the track in graphical form. Using the switch, you can choose which data to display on the graph: separately data on *[<Translate android="true" ids="altitude"/>](#altitude)*, about the *[Speed](#speed)* (this option is available only for recorded tracks) or display all together (*[<Translate android="true" ids="shared_string_overview"/>](#overview-1)*).

Interaction with the graph:

- ***Place a point on the graph***. If you want to see the information at a particular point of a track, you can tap anywhere on the graph and a pointer with the values will appear. At the same time, a blue marker will appear on the map, pointing to that location on the track.
- ***Zoom in/out***. You can use [two-finger movements](./interact-with-map.md#gestures) to zoom in and out for a more detailed view. After zooming in, you can move the graph to the right and left, which corresponds to moving forward and backward along the route.
- ***Additional information***. The right side of the graph contains data about the lowest, highest and average altitude, slope and speed. At the bottom of the graph you can see the distance marks. 

### Overview

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
- *<Translate android="true" ids="shared_string_start_time"/>* This is the exact time when recording of the track starts.
- *<Translate android="true" ids="shared_string_end_time"/>*. This is the end time of the track recording.

**Buttons**:
- **<Translate android="true" ids="analyze_on_map"/>** button opens [Analyze track menu](../map/tracks-on-map/tracks-types.md#analyze-track-on-map) for the track.
- **<Translate android="true" ids="shared_string_options"/>** button opens menu with: 
  - *Edit* opens the track in [Plan route tool](../plan-route/index.md).
  - *Delete* allows to delete chosen track item.
  - *Split interval* opens [Split interval function](#split-interval) for the track.


### Speed

:::note
This tab can be visible only on recorded tracks (points of this track type have [< speed >](../plugins/trip-recording#recorded-gpx-file) tags).
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
- *Calculate elevation* button *→ [Use nearby roads](../plan-route/create-route.md#use-nearby-roads)*. Uses the offline map to find nearby roads and elevation data. Can adjust the track geometry.
- [*Use Terrain maps*](#calculating-missing-elevation). Uses terrain maps to retrieve elevation data. The track geometry remains unchanged.


### Calculating missing elevation

<InfoAndroidOnly />

:::note
Calculate elevation offline feature is only available for [**OsmAnd Pro subscribers**](../purchases/android.md#pro-features) <ProFeature />.
:::

This feature allows you to calculate elevation profile for GPX track offline for any terrain between 70 degrees north latitude and 70 degrees south latitude, based on [Terrain map data](../plugins/contour-lines.md#how-to-download). *Terrain maps (3D) should be previously downloaded*.

1. Download [Terrain maps(3D)](../plugins/contour-lines.md#download-maps) for the required region.
2. If the track does not contain any altitude data, go to the track context menu (*Track Context menu → <Translate android="true" ids="shared_string_gpx_track,altitude,get_altitude_data"/>*), select *Use Terrain maps*, and after the calculation you will get a track graph based on the terrain data.  
  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_2.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_10.png)   <!--![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_4.png)  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_3.png) -->  
3. If you are creating a route with the [*Plan a route*](../plan-route/create-route.md#graph) tool using the *Straight line* method and there is no elevation data on the graph, you need to:
    - Tap *Get elevation data*, then select *Use Terrain maps*.
    - After the calculation, you will get a complete Altitude/Slope graph of your route based on terrain data.  
    
  ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_9.png)   ![Track graph altitude Android](@site/static/img/personal/tracks/calculate_elevation_5.png)  


## Points / Waypoints

Waypoints are one kind of point available on the map. The description is in the article [Points on the map](../map/point-layers-on-map.md). In general, waypoints are track points that are part of GPX files.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context track menu Points Android](@site/static/img/personal/tracks/track_context_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context track menu Points iOS](@site/static/img/personal/tracks/track_context_points_ios.png)

</TabItem>

</Tabs>

In this _Points_ tab:
-  [show track points data](#display-custom-gpx-tags) and modify your track points (waypoints and route points), [delete its and add](#add--delete-buttons) waypoints to a track.
-  create and modify [Group (folder) of points](#waypoints-folder).

### Add Waypoint to a track

Waypoints can be added to the currently recorded track or to any track from your track collection [*My Places → Tracks list*](../personal/tracks/index.md):

- Using the [Map Context Menu](../map/map-context-menu.md#-add--edit--track-waypoint). Waypoints are automatically displayed if the selected track is enabled on the map. To create a waypoint use a [long-tap](../map/map-context-menu.md#select-any-point-long-tap) on the map at any chosen location. In the opened [Map Context Menu](../map/map-context-menu.md#-add--edit--track-waypoint) you can set information about the waypoint. 
- Using [_Add Waypoint_](#add--delete-buttons) button of the Track Context menu.
- You can also add a waypoint as a Quick action. Follow the [*Add track waypoint*](../widgets/quick-action.md#create-items) to configure.

When you tap to _Add Waypoint_ button, the Creation point screen opens (this screen is familiar with [_Favorite Context menu_](../personal/favorites.md#favorite-context-menu)):

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-and-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-and-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-2.png)

</TabItem>
 
</Tabs>

1. **Add** the name of the waypoint, the address of the selected place and a description for it.
2. **Select** Group.
- You can select previously created categories of groups or create a new one.
- For a new group (in the application it is also called a new category) of waypoints you create a name and an appearance. The icon, its color and shape will be used for all new waypoints added to the group.
3. **Appearance** setting:
- Icon from the list: *Default, Special, Amenity, Transport, Service, Symbols, Sport, Emergency, Travel, Nautical, Education, Industrial*.
- Color of the icon.
- Shape of the icon: *Circle, Octagon, Square*.
4. **Replace** another point with this, if you need to.  


### Display custom GPX tags

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

| Parameter | Description | 
| --- | --- |
| `lat` | **Latitude** is one of the geographic coordinates by which you can determine a location. | 
| `lon` | **Longitude** is another of the geographic coordinates by which you can determine a location. |
| `time` | **Timestamp** is the date and time when the point was recorded. |
| `name` | **Name** is the name of the point. Any characters are allowed.  |
| `desc` | **Description** contains additional information about the point. |
| `type` | **Select group** is the name of the OsmAnd folder in which this waypoint is saved. |
| `cmt` | **Comment** is a short comment of a point. |
| `link` | **Link** is a link to any sources. |
| `ele` | **Elevation** is a point elevation. |

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
| `osmand:start_date` | **Start date** is the sheduele data of a point.  |

Waypoints are recorded together with the track in the [GPX file](../../technical/osmand-file-formats/osmand-gpx.md). Each of these waypoints has its own set of tags for description. All tags that are directly related to the description of waypoints and that can be edited directly in the OsmAnd application are listed in this section.  
To change the Waypoint description, you can go one of the following ways:
  
1. Find the required track in the *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab* list.
2. Tap the track on the map, if it is included in the [list of visible](#show-tracks-on-map).
3. Tap the required waypoint if it is [visible](../personal/tracks/manage-tracks.md#show-tracks-on-map) on the map.  

    Then in the [Tracks Context menu](../map/track-context-menu.md) tap *Points*, the field of the required folder with available waypoints and the Waypoint you are looking for. Select menu *Actions →* **Edit GPX waypoint** and make changes. You cannot change the creation date of a point, *timestamp*, in the application.  

**Amenity tags** that describe additional information, such as hours of operation or phone number, specific to the POI take that information from OpenStreetMap data or data that you entered when creating the POI. You can edit such tags and [custom tags](#display-custom-gpx-tags) only in the code of the GPX file, which you can open with any text editor on your device.


### Add / Delete buttons

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

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

*&#8285;* button opens waypoint Group menu.

![Track menu Group menu Android](@site/static/img/personal/tracks/track_menu_group_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*&#8230;* button opens waypoint Group menu.

![Track menu Group menu iOS](@site/static/img/personal/tracks/track_menu_group_menu_ios.png) 

</TabItem>

</Tabs>

Actions:  
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Allows you to show or not show group waypoints on the map. Or you can use [the screen button](#show-waypoints-on-the-map) for showing or not group waypoints on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Allows you to change the name of the group.
- **<Translate android="true" ids="change_color"/>**. Allows you to change the color for group waypoints.
- **<Translate android="true" ids="copy_to_map_markers"/>** (*Android only*). Allows you to move group waypoints to [Map markers](../personal/markers.md).
- **<Translate android="true" ids="copy_to_map_favorites"/>** (*Android only*). Allows you to move group waypoints to [Favorites](../personal/favorites.md).
- **<Translate android="true" ids="shared_string_delete"/>**. Allows you to delete group waypoints.


### Show Waypoints on the map

You can control group visibility on the map (if track is hidden, all groups will be hidden, too). 

You switch on/off group waypoints on the map by the button on the screen. Tap it and open the menu to switch on/off group waypoints on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_android.png) ![Track menu Group map Android](@site/static/img/personal/tracks/waypoints_group_map_1_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_ios.png) ![Track menu Group map iOS](@site/static/img/personal/tracks/waypoints_group_map_1_ios.png)

</TabItem>

</Tabs>


## Options

Menu Options allows to make manipulation with the chosen track, Information Routing Edit Delete Share Export to open it in other tools.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_android.png)  

- *<Translate android="true" ids="shared_string_show_on_map"/>* - shows or not the track on the map.
- *<Translate android="true" ids="shared_string_appearance"/>* - opens [Appearance menu](../map/tracks-on-map/track-appearance.md) for the track.
- *<Translate android="true" ids="follow_track"/>* - starts navigation by [Follow track option](../navigation/setup/gpx-navigation.md).


- *<Translate android="true" ids="join_segments"/>* - allows to join gaps of the track.
- *<Translate android="true" ids="analyze_on_map"/>* - opens [Analyze on map function](../map/tracks-on-map/tracks-types.md#analyze-track-on-map).
- *<Translate android="true" ids="analyze_by_intervals"/>* - [analyze the track by time or distance intervals](../map/track-context-menu.md#split-interval).


- *<Translate android="true" ids="shared_string_share"/>* - export the chosen track.
- *<Translate android="true" ids="upload_to_openstreetmap"/>* - [upload the chose track to OpenStreetMap](../plugins/osm-editing.md#how-to-upload-gpx-track).


- *<Translate android="true" ids="edit_track"/>* - open the chosen track in [Plan route tool](../plan-route/create-route.md).
- *<Translate android="true" ids="rename_track"/>* - change track name.
- *<Translate android="true" ids="change_folder"/>* - select folder and add new one for the chosen track.


- *<Translate android="true" ids="shared_string_gps_filter"/>* - allows [to filter points of the track](../map/track-context-menu.md#gps-filter).
- *<Translate android="true" ids="altitude_correction"/>* - to [receive elevation data](../map/track-context-menu.md#calculate-elevation-offline), attach your track to the roads or calculate it offline (needed [Terrain maps](../plugins/contour-lines.md#download-maps)).
- *<Translate android="true" ids="simulate_your_location"/>* - [simulate your position](../plugins/development.md#gpx-track-simulation) using a GPX track.


- *<Translate android="true" ids="shared_string_delete"/>* - delete the track.

</TabItem>

<TabItem value="ios" label="iOS">

![Track menu options Android](@site/static/img/personal/tracks/track_menu_options_ios.png)  

- *<Translate ios="true" ids="shared_string_show_on_map"/>* - shows or not the track on the map.
- *<Translate ios="true" ids="shared_string_appearance"/>* - opens [Appearance menu](../map/tracks-on-map/track-appearance.md) for the track.
- *<Translate ios="true" ids="shared_string_navigation"/>* - starts navigation by [Follow track option](../navigation/setup/gpx-navigation.md).


- *<Translate ios="true" ids="analyze_on_map"/>* - opens [Analyze on map function](../map/tracks-on-map/tracks-types.md#analyze-track-on-map).


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

This filter allows you to improve your track statistics by excluding unnecessary or incorrect data. You can filter out track points that don't fit your track parameters, and as a result, get a more accurate graph and visual route line without distortion or recording noise. You can make changes with filters such as *Smoothing*, *Speed*, *Altitude*, and *GPS Precision*, which hide filtered points from the current track. Besides, in the *Statistics* menu, you can check how your changes are displayed on the graph before you save them. You can also *Reset to original* and *Save as a copy* of your track in this filter without saving the original one.  

*<Translate android="true" ids="shared_string_options,shared_string_gps_filter"/>*

![GPS filter screen Android](@site/static/img/personal/tracks/gps_filter_android.png)

<!-- In the screen you see the map (with [zoom buttons](../map/interact-with-map.md#my-location--zoom), [my location button](../map/interact-with-map.md#my-location--zoom), my track location button), buttons "Reset" and "&#8285;"(Actions), part with two menus: **Filter** and **Statistics**.

- "&#8285;"(Actions) button opens "Actions" part of "Filter" or "Statistics" menu.
- "&#8634;" button allows to reset the track to original.
- "My track location" button allows to move the map to your track.-->

The Android GPS Filter app page includes:  
- A map with a saved track and an extra button *My track location* (it aligns a track to the center of a map).
- Buttons *Refresh* and *Menu* at the top (*Menu* opens *Action* field at the bottom of the page).
- Blocks *Filter*, *Statistics*, *Action*.  

#### **Filter** Menu

In this menu, you can change some parameters of your track with filters such as, *Smoothing*, *Speed*, *Altitude*, *GPS precision*. The menu is divided into a Points part and an Actions part.

| ***Points*** | 
|:------------|
|This part shows the number of points after filtering and the total number of points on the selected track before filters were used.| 
|![GPS filter screen points numbers Android](@site/static/img/personal/tracks/gps_filter_points_numbers_android.png) |
| ***Actions*** | 
|*Smoothing* – Sets the threshold distance between points. <!--Track points not at least this distance away from the last visible point will be hidden.--> All points on the track, that are at a distance from each other less than the distance selected by the filter, will be hidden. Track points are counted from the last visible point. Note, that high thresholds can oversimplify the track geometry.| 
|![GPS filter smoothing numbers Android](@site/static/img/personal/tracks/gps_filter_smoothing_android.png) |
|*Speed* – Only the track points that correspond to the selected speed interval will be displayed on the graph and on the map, the others will be hidden.| 
|![GPS filter speed numbers Android](@site/static/img/personal/tracks/gps_filter_speed_android.png) | 
|*Altitude* – Only the track points that correspond to the selected altitude interval will be displayed on the graph and on the map, the others will be hidden.| 
|![GPS filter altitude numbers Android](@site/static/img/personal/tracks/gps_filter_altitude_android.png) | 
|*GPS precision* – Sets the maximum permissible value for HDOP. Points with a higher value will be hidden.| 
|![GPS filter precision numbers Android](@site/static/img/personal/tracks/gps_filter_precision_android.png) |  

 
#### **Statistics**

Statistics tab displays information about **modified** track i.e. without filtered values. It's displayed within stat blocks and graph data.
  
- The *Data* part shows statistics similar to the Filter menu.  
- The *Graph* part displays three types of graphs by parameters: Overview, Altitude, Speed. This functional is a copy of [track Graph](#altitude--speed-graphs).

![GPS filter graph Android](@site/static/img/personal/tracks/gps_filter_graph_android.png)   

#### **Actions**

Actions list is available on the bottom of **Filter** or **Statistics** tab. OsmAnd will apply all changes made to the track without updating the file. You can save the changes manually.

- *<Translate android="true" ids="reset_to_original"/>* – allows you to return the parameters to their original state.  
- *<Translate android="true" ids="save_as_copy"/>* – allows you to save the track as a new one.
- *<Translate android="true" ids="save_changes_into_file"/>* – allows you to rewrite the track with the new parameters.  

![GPS filter action Android](@site/static/img/personal/tracks/gps_filter_action_android.png)  


## Read more

- [GPX tracks](../personal/tracks/index.md)
- [Tracks on the map](../map/tracks-on-map/tracks-types.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Plan route](../plan-route/index.md)
- [Trip Recording plugin](../plugins/trip-recording.md)
- [Analyze on Map](../map/tracks-on-map/tracks-types.md#analyze-track-on-map)
