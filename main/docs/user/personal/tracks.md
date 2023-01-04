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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

Track on the map is user [recorded trip](../plugins/trip-recording.md) or [plan route](../plan-route/create-route.md) with makred points on it or not. OsmAnd track file has [gpx-format](../plugins/trip-recording.md#gpx-file-details).

You can add / create tracks to / in OsmAnd in these ways: 
- [Import](./tracks.md#import-track) from the external source.
- Create in the application using [Plan route](../plan-route/index.md) tool.
- Record in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

All tracks in the application are stored in the [<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md).

Abilities to manage tracks in OsmAnd:
- Enable and disable tracks on the map.
- Configuring track appearance, editing and analyzing.
- Using for navigation.

OsmAnd has no limit on the number of tracks to store and display.

There are three options to display Tracks on the map:
- [Configure map](../map/tracks-on-map.md#display-via-configure-map-menu) menu.
- [My places](../map/tracks-on-map.md#display-via-my-places-menu) menu.
- [Track Context menu](../map/track-context-menu.md).  

Formats: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.  
Import: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>


## Create / Edit Track


### Coordinate input

<InfoAndroidOnly /> 

Read how to add points by coordinates: [By Coordinate input](../plan-route/coordinate-input.md) 


### Record track

Read about [Trip recording Plugin](../plugins/trip-recording.md).  


### Add waypoint

- Add waypoint via [Context menu](../map/map-context-menu.md#-add--edit--track-waypoint).
- Add waypoint as Quick action: [Add track waypoint](../widgets/quick-action.md#create-items).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Quick action widget](@site/static/img/widgets/waypoint_qa_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget](@site/static/img/widgets/waypoint_qa_ios.png)

</TabItem>
 
</Tabs>


#### Waypoint format description

OsmAnd records tracks in a file in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format) according to the following structure: *file > track > segments > points*.

- One point has a number of attributes: coordinates, speed, altitude, heading.
- Points are grouped into tracks.
- The next point after the gap makes up a new segment.
- Both segments and tracks are shown with the Start and Finish icons on the map.

![GPX file of a recorded track](@site/static/img/plugins/trip-recording/exs_trkpt_seqn_with_segm2.png)

| Parameter | Description | 
| --- | --- |
| `trkpt` | **Description** | 
| `trkseg` | **Mobile number**  |
| `lat` |  | 
| `lon` |  |


### Edit via Plan Route

- [Edit track via "Plan route" tool](../plan-route/create-route.md#modify-existing-gpx-track).  


## My Places menu


### Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>_  

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

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_ios.png) ![My places tracks Actions iOS](@site/static/img/personal/tracks/my_places_tracks_actions_ios.png)


ACTIONS: on bottom part of the device screen
- "_<Translate ios="true" ids="gpx_import_title"/>_"  - open tab "<Translate ios="true" ids="import_from_docs"/>" and next description "<Translate ios="true" ids="gpx_import_desc"/>", [My files](../plan-route/create-route.md).
- "_<Translate ios="true" ids="create_new_trip"/>_" - opens ["Plan route tool"](../personal/tracks.md#edit-mode-ios) for creating a new track.

Buttons (by clicking to "&#8230;" in top screen):
- "export" button - allows to export choosing GPX file or files by anyways (messengers, email) or save to [My files](../plan-route/create-route.md).
- "map" button - allows to choose tracks for showing its on the map.
- "&#x1F5D1;" button - allows to choose tracks for deleting.

</TabItem>
 
</Tabs>


### Search / Sort

<InfoAndroidOnly />  

Clicking to "&#x1F50D;" button on the top of the device screen opens the searching function of the tracks list.

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_seaching_android.png) 

Clicking to "sort" button on the top of the device screen opens choosing sort menu for tracks on the list.

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_android.png) ![My places tracks sort 1 function Android](@site/static/img/personal/tracks/my_places_tracks_sort_1_android.png) 

Sort menu: 

- <Translate android="true" ids="sort_last_modified"/> - sorting tracks in the list by last modified.
- <Translate android="true" ids="sort_name_ascending"/> - sorting tracks in the list by name A → Z.
- <Translate android="true" ids="sort_name_descending"/> - sorting tracks in the list by name Z → A.


## Import / Export track

### Import track

There are two variants for importing a track file in OsmAnd. The first is importing by clicking on a track file, the second is by My Places menu action.

1. Importing track by clicking to GPX (KML, KMZ) track file (massengers, email, Drive, File managers..). It suggests to open it by OsmAnd app. Importing tracks save in "Import" folder of [My places menu](../personal/myplaces.md): _clicking to the chosen GPX file → opening it by OsmAnd_.
2. Importing button in _[My places menu → Tracks](../personal/tracks.md#actions)_.

- Track GPX file:
- Multitrack GPX file: saving as one GPX track or selected tracks.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png) 

</TabItem>

<TabItem value="ios" label="iOS">

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
2. By [Local backup file](../personal/storage.md#local-backup). Exporting GPX-tracks as OSF-file.

</TabItem>

<TabItem value="ios" label="iOS">

Exporting track file or files to any massengers, email, file managers, Drive , apps. There are two general ways:
1. By [Track Context menu → Share](../map/track-context-menu.md#options).
2. By [My Places menu → Tracks → … → "export" button](../personal/tracks.md#actions). Exporting more than one track by a bundle (It's the case of Local Backup).
3. By [Local backup file](../personal/storage.md#local-backup). Exporting GPX-tracks as OSF-file.

</TabItem>
 
</Tabs>


## Manage tracks

After recording and saving, the tracks can be managed as follows:  

- In [**My Places**](../personal/myplaces.md), so that to view all ever recorded data pieces in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). 
- In [**Configure map**](../map/configure-map-menu.md), so that to select a specific track and display it on the map.
- With the [**Context menu**](../map/track-context-menu.md) of the track on the map, so that to adjust the appearance, to update points on the route, to view segments, to start navigation along the track/segment, and/or other options. 


### View all tracks 

All tracks ever recorded are automatically displayed in [**My Places**](../personal/myplaces.md). This is the central storage of all user-generated information, organized in tabs according to the main criterion of saved data. There are favourites, notes, and tracks. Browse through [**Tracks**](../personal/tracks.md) tab to find any trip recordings. 

More information about [My Places](../personal/myplaces.md), and/or [Tracks](../personal/tracks.md) stored in it can be found in the relevant sections of the current documentation. However, it makes sense to underscore here that:

- The internal organization of the Tracks tab in My Places can be managed with the Trip recording plugin settings described above.
- This is a useful place to consult with in case of doubts, for example, on what/if something is recorded, what/if something is visible right now on the map, and so forth.
- My Places is perfect for any inventory work: tap the triple points/arrow at the right side of a track to manage it with any of the options, such as Move, Rename, Share, etc. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/plugins/trip-recording/view_all_tr_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/plugins/trip-recording/view_all_tr_ios.png)

</TabItem>

</Tabs>


### Show tracks on map

Tracks are an individual data layer that can be shown or hidden using the corresponding option in the [**Configure map**](../map/configure-map-menu.md#map-data-layers) menu or in the [**My Places**](../plugins/trip-recording.md#view-all-tracks) menu. In addition, when you tap on [**Tracks**](../map/tracks-on-map.md#display-via-my-places-menu), a track selection dialog appears, allowing you to choose which track or multiple tracks to display on the map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

For a specific profile, to display a track on the map, open **Configure map** and tap **Tracks**. Then from the opened dialog, check the needed track. To hide a track, either uncheck it from the list of tracks, or toggle off the Tracks option in the **Configure map** menu: *<Translate android="true" ids="shared_string_menu,configure_map,show_gpx"/>*.

![Show tracks on the map in Android](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_1.png) ![Select a track to display in Android](@site/static/img/plugins/trip-recording/show_tr_onmap_andr_2.png)

To display a track on the map another way, open the [**My Places**](../plugins/trip-recording.md#view-all-tracks) menu and then **Tracks**. The *Visible* folder displays the tracks already selected. In the *Rec*, *Import* and *Tracks* folders, you can select one or more tracks to display on the map by tapping the Show on map icon on the bottom menu of the screen. Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.

![Show tracks on the map Android](@site/static/img/plugins/trip-recording/show_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

For a specific profile, to display a track on the map, open **Configure map** and tap **Tracks**. Then from the opened dialog, check the needed track. To hide a track, either uncheck it from the list of tracks, or toggle off the Tracks option in the **Configure map** menu: *<Translate ios="true" ids="menu,configure_map,tracks"/>*.

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Select a track to display in iOS](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_2.png)

To display a track on the map another way, open the [**My Places**](../plugins/trip-recording.md#view-all-tracks) menu and then **Tracks**. The *Tracks on map* folder displays the tracks already selected. In the *Rec*, *Import* and *Tracks* folders, you can select one or more tracks to display on the map by first tapping the three dots in the upper right corner and then tapping the Show on Map icon on the bottom menu of the screen. Go to: *<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*.    

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/show_ios.png)  

</TabItem>

</Tabs>


### Options of context menu

 When a track is displayed on the map, tapping on it, the [track context menu](../map/track-context-menu.md) appears. For detailed information about each available option, refer to the respective section of the current documentation. Here is an overview of the options:

- Basic info to show the distance, ascending and descending areas, description and quick action buttons, such as whether to show the track on the map, its appearance, points and if to place the track for navigation.
- Graphs for analysis of altitude and speed.
- Tab for any overview and/or updates of points and waypoints.
- And other [options](../map/track-context-menu.md#options): appearance, analysis of split intervals, sharing, editing, renaming, etc. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

When you tap the track directly on the map, the [track context menu](../map/track-context-menu.md) appears, providing a [basic overview of the track](../map/track-context-menu.md#overview) as well as more [analytical data](../map/track-context-menu.md#altitude--speed-graphs) for investigating the route and making adjustments to [points and waypoints](../map/track-context-menu.md#points--waypoints), if necessary. You can also edit the track with the [Plan route tool](../plan-route/create-route.md#opening-plan-route), in the context menu open the track in this tool and edit it: delete or add points, cut the track before or after a certain point. For more information, refer to [Track Context Menu](../map/track-context-menu.md).  

![Context menu of a track in Android](@site/static/img/plugins/trip-recording/opt_ofcont_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

When you tap the track directly on the map, the [track context menu](../map/track-context-menu.md) appears, providing a [basic overview of the track](../map/track-context-menu.md#overview) as well as more [analytical data](../map/track-context-menu.md#altitude--speed-graphs) for investigating the route and making adjustments to [points and waypoints](../map/track-context-menu.md#points--waypoints), if necessary. You can also edit the track with the [Plan route tool](../plan-route/create-route.md#opening-plan-route), in the context menu open the track in this tool and edit it: delete or add points, cut the track before or after a certain point. For more information, refer to [Track Context Menu](../map/track-context-menu.md).  

![Context menu of a track in iOS](@site/static/img/plugins/trip-recording/opt_ofcont_menu_ios.png)

</TabItem>

</Tabs>


### Change folder

All recorded tracks are stored [**My Places**](../personal/myplaces.md). This is the only storage location for tracks. Even when moved, tracks are moved between folders in My Places. However, as soon as a new track is created, it is automatically saved to the default folder in My Places. The default folder is one and the same for all new tracks. After showing up in the default folder, tracks can be moved to any other preferred folder, as follows:

- Select more options from the [Context menu](../map/track-context-menu.md) of a track on the map. 
- Tap **Change folder** and select another folder in My Places to store the track in.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Default folder in My Places for saved new tracks: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.

The default folder can be established in [Trip recording settings](../plugins/trip-recording.md#establish-options) as one of the following options:

- The `Rec` folder, which is one folder for all tracks. 
- The `Rec/yyyy-mm` folder is created individually for each month and contains tracks recorded during that month.

Then you can move the track to any other preferred folder in the My Places using the:

- [Context menu of a track on the map](../map/track-context-menu.md).
- [Context menu of a track in My Places](../personal/tracks.md#my-places-menu).  


#### CONTEXT MENU ON THE MAP

To move a track to another folder inside My Places, you can use [Context menu of a track on the map](../map/track-context-menu.md) as follows: 

- Open the **Context menu** of a track on the map in one of the following ways:  
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map.  
- Tap **<Translate android="true" ids="shared_string_options"/>**.
- Tap **<Translate android="true" ids="change_folder"/>** from the opened *<Translate android="true" ids="shared_string_options"/> list*.
- Select a folder to move the track to. 

![More options in Android](@site/static/img/plugins/trip-recording/change_folder_andr_1.png) ![Change folder in Android](@site/static/img/plugins/trip-recording/change_folder_andr_2.png)  


#### CONTEXT MENU IN MY PLACES

To move a track to another folder inside My Places, you can use [Context menu of a track in My Places](../personal/tracks.md#manage-tracks) as follows: 

- Open: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.
- Tap the triple points on the right of the required track.
- Tap **<Translate android="true" ids="shared_string_move"/>** from the opened context menu.
- Select a folder to move the track to. 

![Move with My Places in Android](@site/static/img/plugins/trip-recording/cont_menu_in_myplaces_and.png)

</TabItem>

<TabItem value="ios" label="iOS">

Default folder in My Places for saved new tracks: *<Translate ios="true" ids="menu,menu_my_places,tracks"/> tab*.

You can then move the track to any other preferred folder in My Places and/or export the GPX file to an external storage device.   


#### MOVE TRACK WITHIN MY PLACES

To move a track from the default folder to another folder in My Places, do the following:

- Open the [Context menu](../map/track-context-menu.md) of a track on the map in one of the following ways:  
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map. 
- Tap the triple points on the extreme right of the bottom panel.
- Tap **<Translate ios="true" ids="plan_route_change_folder"/>** from the opened *<Translate ios="true" ids="actions"/> list*.
- Select a folder to move the track to.   

![More options in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_1.png) ![Change folder in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_2.png)  


#### EXPORT GPX FILE TO EXTERNAL STORAGE

To export a GPX file to an external storage, do the following: 

- Open the [Context menu](../map/track-context-menu.md) of a track on the map in one of the following ways:
    - By tapping a track in My Places, the map shows up with the context menu opened for the track;
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map. 
- Tap **<Translate ios="true" ids="shared_string_export"/>**.
- Select the required storage to export the GPX file to.   

![Export with Context menu in iOS](@site/static/img/plugins/trip-recording/cont_menu_in_myplaces_ios.png) 

</TabItem>

</Tabs>

## Read more

- [Show track on Map](../map/tracks-on-map.md)
- [Analyze on Map](../map/tracks-on-map.md)
- [Track Context menu](../map/track-context-menu.md)
- [Navigation by track](../navigation/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
