---
sidebar_position: 3
title:  Tracks
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';

Short information about tracks and how to use them

Track on the map is user recorded trip or plan route with makred points on it or not. OsmAnd track file has gpx-format.

You can add tracks to OsmAnd in these ways: 
- &nbsp;Import from the external source.
- &nbsp;Create in the application using [Plan route](/docs/documentation/plan-route) tool.
- &nbsp;Record in the application using [Trip recording](/docs/documentation/plugins/trip-recording) plugin. 

All tracks in the application are stored in the [<Translate android="true" ids="shared_string_menu"/>](/docs/documentation/start-with/main-menu) → [<Translate android="true" ids="shared_string_my_places"/>](/docs/documentation/personal/myplaces) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](/docs/documentation/personal/tracks).

Abilities to manage tracks in OsmAnd:
- &nbsp;Enable and disable tracks on the map.
- &nbsp;Configure track appearance, edit and analyze.
- &nbsp;Use for navigation.

OsmAnd has no limit on the number of tracks to store and display.

There are two options to display [Tracks](/docs/documentation/personal/tracks) on the map: via [Configure map](/docs/documentation/map/tracks-on-map#display-via-configure-map-menu) menu or [My places](/docs/documentation/map/tracks-on-map#display-via-my-places-menu) menu


![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png) ![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)


- &nbsp;Formats: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.
- &nbsp;Import: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.

## Create / Edit Track

### Coordinate input (Android)

- &nbsp;[By Coordinate input](/docs/documentation/plan-route/coordinate-input) 

### Record track

- &nbsp;[Link to Recording Plugin](/docs/documentation/plugins/trip-recording)

### Add waypoint

- &nbsp;[Context menu](/docs/documentation/map/map-context-menu#-add--edit--track-waypoint)

### Edit mode (iOS)

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks,create_new_trip"/>

<p> </p>

![Edit mode ios](@site/static/img/personal/tracks/edit_mode_ios.png) 

- Add points - click to <Translate ios="true" ids="add_waypoint"/> or <Translate ios="true" ids="select_wpt_on_map"/>.

![Edit mode adding point ios](@site/static/img/personal/tracks/edit_mode_add_point_ios.png) 

- Edit / delete - clicking to "Pencil" button open menu with "Edit" and "Delete" buttons. 

![Edit mode edit point ios](@site/static/img/personal/tracks/edit_mode_edit_point_ios.png)  ![Edit mode edit point ios](@site/static/img/personal/tracks/edit_mode_edit_point_1_ios.png)

- Change order - long tap to "&#9776;" button and change the order of chosen point by moving up or down.

![Edit mode moving point ios](@site/static/img/personal/tracks/edit_mode_moving_point_ios.png) 


### Edit via Plan Route

- [Edit track](/docs/documentation/plan-route/create-route) via Plan route tool.

## Manage Tracks 

### My Places

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>

<p> </p>

At the bottom of the screen are four Actions buttons.

![My places tracks Android](@site/static/img/personal/tracks/my_places_tracks_android.png) 

- "+" button  - allows to import GPX track from device storage.
- "earth" button - opens [Add point menu](/docs/documentation/plan-route/coordinate-input) for adding points by inputting coordinates.
- "map" button - allows to choose tracks for showing its on the map.
- "&#x1F5D1;" button - allows to choose tracks for deleting.
- "&#10227;" button - allows to refresh tracks list.
- "OSM editing" button - allows [to upload chosen track to OSM](/docs/documentation/plugins/osm-editing).

</TabItem>

</Tabs>

### Search / Sort

Clicking to "&#x1F50D;" button on the top of the device screen opens the searching function of the tracks list.

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_seaching_android.png) 

Clicking to "sort" button on the top of the device screen opens choosing sort menu for tracks on the list.

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_android.png) ![My places tracks sort 1 function Android](@site/static/img/personal/tracks/my_places_tracks_sort_1_android.png) 

Sort menu: 

- <Translate android="true" ids="sort_last_modified"/> - sorting tracks in the list by last modified.
- <Translate android="true" ids="sort_name_ascending"/> - sorting tracks in the list by name A → Z.
- <Translate android="true" ids="sort_name_descending"/> - sorting tracks in the list by name Z → A.

### My Places (iOS)

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks"/>

<p> </p>

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_ios.png)


### Actions

**Actions on Folder list**

![My places tracks Actions iOS](@site/static/img/personal/tracks/my_places_tracks_actions_ios.png)

- &nbsp;"layers" button on the top of the device screen - allows to choose and show tracks on the map from tracks list.
- &nbsp;"<Translate ios="true" ids="gpx_import_title"/>" on bottom part of the device screen - open tab "<Translate ios="true" ids="import_from_docs"/>" and next description "<Translate ios="true" ids="gpx_import_desc"/>".
- &nbsp;"<Translate ios="true" ids="create_new_trip"/>" on bottom part of the device screen - opens ["Edit mode"](/docs/documentation/personal/tracks#edit-mode-ios) for creating new track.

**Actions on Track menu**

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks"/> → tap to the needed track

<p> </p>

![My places tracks file Actions iOS](@site/static/img/personal/tracks/my_places_track_file_actions_ios.png)

- &nbsp;<Translate ios="true" ids="fav_rename"/> - allows to rename the chosen track.
- &nbsp;<Translate ios="true" ids="shared_string_remove"/> - allows to delete the chosen track.
- &nbsp;<Translate ios="true" ids="shared_string_export"/> - allows to delete the chosen track.
- &nbsp;<Translate ios="true" ids="gpx_edit_mode"/> - allows [to edit / create track](/docs/documentation/personal/tracks#edit-mode-ios).
- &nbsp;<Translate ios="true" ids="product_title_trip_planning"/> - to be deleted.
- &nbsp;<Translate ios="true" ids="plan_route_change_folder"/> - allows to change a folder for the chosen track.


## Import/Export track

- Link to Import / Export functionality
- Storage

## Read more

- [Show track on Map](/docs/documentation/map/tracks-on-map)
- [Analyze on Map](/docs/documentation/map/tracks-on-map)
- [Track Context menu](/docs/documentation/map/track-context-menu)
- [Navigation by track](/docs/documentation/navigation/gpx-navigation)
- [Trip recording](/docs/documentation/plugins/trip-recording)
