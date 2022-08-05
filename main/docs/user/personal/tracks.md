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
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>

Track on the map is user [recorded trip](../plugins/trip-recording.md) or [plan route](../plan-route/create-route.md) with makred points on it or not. OsmAnd track file has [gpx-format](../plugins/trip-recording.md#gpx-file-details).

You can add / create tracks to / in OsmAnd in these ways: 
- &nbsp;[Import](./tracks.md#import-track) from the external source.
- &nbsp;Create in the application using [Plan route](../plan-route/index.md) tool.
- &nbsp;Record in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

All tracks in the application are stored in the [<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md).

Abilities to manage tracks in OsmAnd:
- &nbsp;Enable and disable tracks on the map.
- &nbsp;Configuring track appearance, editing and analyzing.
- &nbsp;Using for navigation.

OsmAnd has no limit on the number of tracks to store and display.

There are three options to display Tracks on the map: via [Configure map](../map/tracks-on-map.md#display-via-configure-map-menu) menu, [My places](../map/tracks-on-map.md#display-via-my-places-menu) menu, [Track Context menu](../map/track-context-menu.md)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>


- &nbsp;Formats: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.
- &nbsp;Import: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.

## Create / Edit Track

### Coordinate input

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Read how to add points by coordinates: &nbsp;[By Coordinate input](../plan-route/coordinate-input.md) 

</TabItem>

<TabItem value="ios" label="iOS">

> ```Coordinate input for **iOS** is not supported while.```

</TabItem>
 
</Tabs>

### Record track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- Read about &nbsp;[Trip recording Plugin](../plugins/trip-recording.md).

</TabItem>

<TabItem value="ios" label="iOS">

- Read about &nbsp;[Trip recording Plugin](../plugins/trip-recording.md).

</TabItem>
 
</Tabs>

### Add waypoint

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- How to add a waypoint to a track here: &nbsp;[Map Context menu - Add/Edit Track waypoint](../map/map-context-menu.md#-add--edit--track-waypoint).

</TabItem>

<TabItem value="ios" label="iOS">

- How to add a waypoint to a track here: &nbsp;[Map Context menu- Add/Edit Track waypoint](../map/map-context-menu.md#-add--edit--track-waypoint).

</TabItem>
 
</Tabs>

#### Add waypoint by Quick Action

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Creat the item ["Add track waypoint"](../widgets/quick-action.md#create-items):

![Quick action widget](@site/static/img/widgets/waypoint_qa_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Creat the item ["Add track waypoint"](../widgets/quick-action.md#create-items):

![Quick action widget](@site/static/img/widgets/waypoint_qa_ios.png)

</TabItem>
 
</Tabs>

<!-- ### Edit mode (iOS)

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks,create_new_trip"/>

<p> </p>

![Edit mode ios](@site/static/img/personal/tracks/edit_mode_ios.png) 

- Add points - click to <Translate ios="true" ids="add_waypoint"/> or <Translate ios="true" ids="select_wpt_on_map"/>.

![Edit mode adding point ios](@site/static/img/personal/tracks/edit_mode_add_point_ios.png) 

- Edit / delete - clicking to "Pencil" button open menu with "Edit" and "Delete" buttons. 

![Edit mode edit point ios](@site/static/img/personal/tracks/edit_mode_edit_point_ios.png)  ![Edit mode edit point ios](@site/static/img/personal/tracks/edit_mode_edit_point_1_ios.png)

- Change order - long tap to "&#9776;" button and change the order of chosen point by moving up or down.

![Edit mode moving point ios](@site/static/img/personal/tracks/edit_mode_moving_point_ios.png)  -->


### Edit via Plan Route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- &nbsp;[Edit track via "Plan route" tool](../plan-route/create-route.md#modify-existing-gpx-track).

</TabItem>

<TabItem value="ios" label="iOS">

- &nbsp;[Edit track via "Plan route" tool](../plan-route/create-route.md#modify-existing-gpx-track).

</TabItem>
 
</Tabs>


## My Places menu

### Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>_

<p> </p>

At the bottom of the screen are four Actions buttons.

![My places tracks Android](@site/static/img/personal/tracks/my_places_tracks_android.png) 

- "+" button  - allows [to import](./tracks.md#import-track) GPX track from device storage.
- "earth" button - opens [Add point menu](../plan-route/coordinate-input.md) for adding points by inputting coordinates.
- "map" button - allows to choose tracks for showing its on the map.
- "&#x1F5D1;" button - allows to choose tracks for deleting.
- "&#10227;" button - allows to refresh tracks list.
- "OSM editing" button - allows [to upload chosen track to OSM](../plugins/osm-editing.md).

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,menu_my_places,tracks"/>_

Clicking to choosing track opens [Track Context menu](../map/track-context-menu.md) for any actions with it.

Actions with track or tracks (track folders) by clicking to "&#8230;" in top screen.

<p> </p>

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_ios.png) ![My places tracks Actions iOS](@site/static/img/personal/tracks/my_places_tracks_actions_ios.png)


ACTIONS: on bottom part of the device screen
- &nbsp;"_<Translate ios="true" ids="gpx_import_title"/>_"  - open tab "<Translate ios="true" ids="import_from_docs"/>" and next description "<Translate ios="true" ids="gpx_import_desc"/>", [My files](../plan-route/create-route.md).
- &nbsp;"_<Translate ios="true" ids="create_new_trip"/>_" - opens ["Plan route tool"](../personal/tracks.md#edit-mode-ios) for creating a new track.

Buttons (by clicking to "&#8230;" in top screen):
- &nbsp;"export" button - allows to export choosing GPX file or files by anyways (messengers, email) or save to [My files](../plan-route/create-route.md).
- &nbsp;"map" button - allows to choose tracks for showing its on the map.
- &nbsp;"&#x1F5D1;" button - allows to choose tracks for deleting.

</TabItem>
 
</Tabs>

### Search / Sort

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Clicking to "&#x1F50D;" button on the top of the device screen opens the searching function of the tracks list.

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_seaching_android.png) 

Clicking to "sort" button on the top of the device screen opens choosing sort menu for tracks on the list.

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_android.png) ![My places tracks sort 1 function Android](@site/static/img/personal/tracks/my_places_tracks_sort_1_android.png) 

Sort menu: 

- <Translate android="true" ids="sort_last_modified"/> - sorting tracks in the list by last modified.
- <Translate android="true" ids="sort_name_ascending"/> - sorting tracks in the list by name A → Z.
- <Translate android="true" ids="sort_name_descending"/> - sorting tracks in the list by name Z → A.

</TabItem>

<TabItem value="ios" label="iOS">

> ```This function doesn't exist for iOS version.```

</TabItem>
 
</Tabs>

## Import / Export track

### Import track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

There are two variants for importing a track file in OsmAnd. The first is importing by clicking on a track file, the second is by My Places menu action.

1. Importing track by clicking to GPX (KML, KMZ) track file (massengers, email, Drive, File managers..). It suggests to open it by OsmAnd app. Importing tracks save in "Import" folder of [My places menu](../personal/myplaces.md): _clicking to the chosen GPX file → opening it by OsmAnd_.
2. Importing button in _[My places menu → Tracks](../personal/tracks.md#actions)_.

- Track GPX file:
- Multitrack GPX file: saving as one GPX track or selected tracks.

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

There are two variants for importing a track file in OsmAnd. The first is importing by clicking on a track file, the second is by My Places menu action.

1. Importing track by clicking to GPX (KML, KMZ) track file (massengers, email, Drive, File managers..). It suggests to open it by OsmAnd app. Importing tracks save in "Import" folder of [My places menu](../personal/myplaces.md): _clicking to the chosen GPX file → opening it by OsmAnd_.
2. Importing button in  _[My places menu → Tracks](../personal/tracks.md#actions)_.

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_1.png').default} alt="gpx"/></td>
    </tr>
</table> 

<table class="blogimage">
    <tr>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_2.png').default} alt="gpx"/></td>
        <td><img src={require('@site/static/img/personal/tracks/import_gpx_ios_3.png').default} alt="gpx"/></td>
    </tr>
</table> 


</TabItem>
 
</Tabs>

### Export track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Exporting track file or files to any massengers, email, file managers, Drive , apps. There are two general ways:
1. By [Track Context menu → Share](../map/track-context-menu.md#options).
2. By [My Places menu → Tracks](../personal/tracks.md#actions). Exporting more than one track by a bundle.

</TabItem>

<TabItem value="ios" label="iOS">

Exporting track file or files to any massengers, email, file managers, Drive , apps. There are two general ways:
1. By [Track Context menu → Share](../map/track-context-menu.md#options).
2. By [My Places menu → Tracks](../personal/tracks.md#actions). Exporting more than one track by a bundle.

</TabItem>
 
</Tabs>

## Read more

- [Show track on Map](../map/tracks-on-map.md)
- [Analyze on Map](../map/tracks-on-map.md)
- [Track Context menu](../map/track-context-menu.md)
- [Navigation by track](../navigation/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
