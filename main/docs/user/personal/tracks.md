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

## Overview

Track on the map is user [recorded trip](../plugins/trip-recording.md) or [plan route](../plan-route/create-route.md) with makred points on it or not. OsmAnd track file has [gpx-format](../plugins/trip-recording.md#gpx-file-details).

You can add / create tracks to / in OsmAnd in these ways: 
- [Import](./tracks.md#import-track) from the external source.
- Create in the application using [Plan route](../plan-route/index.md) tool.
- Record in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

All tracks in the application are stored in the *[<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md)*.

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

A simple and fast tool for creating points by specifying geographic coordinates. Read how to add points by coordinates: [By Coordinate input](../plan-route/coordinate-input.md) 


### Record track

Use the OsmAnd [Trip recording Plugin](../plugins/trip-recording.md) and special widgets to record your tracks. Trip recording (Android) or Track recording (iOS) plugin is a special tool designed to record your routes, movements, and workouts. This feature allows you to reuse, modify, update, and share your tracks with friends.    


### Edit tracks with Plan a route

[**Plan a route** tool](../plan-route/create-route.md#modify-existing-gpx-track).  


## Add waypoint

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-and-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-and-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-1.png)  ![Add waypoint](@site/static/img/personal/tracks/add-track-waypoint-ios-2.png)

</TabItem>
 
</Tabs>

Waypoints are one kind of point available on the map. The description is in the article [Points on the map](../map/point-layers-on-map.md). In general, waypoints are track points that are part of GPX files. They can be added to the currently recorded track or to any track from your *My Places → Tracks list* using the Map Context Menu. Waypoints are automatically displayed if the selected track is enabled on the map.  

To create a waypoint use a [long-tap](../map/map-context-menu.md#select-any-point-long-tap) on the map at any chosen location. In the opened [Map Context Menu](../map/map-context-menu.md#-add--edit--track-waypoint) you can set information about the waypoint.  

1. **Add** the name of the waypoint, the address of the selected place and a description for it.
2. **Select** Group.
- You can select previously created categories of groups or create a new one.
- For a new group (in the application it is also called a new category) of waypoints you create a name and an appearance. The icon, its color and shape will be used for all new waypoints added to the group.
3. **Appearance** setting:
- Icon from the list: *Default, Special, Amenity, Transport, Service, Symbols, Sport, Emergency, Travel, Nautical, Education, Industrial*.
- Color of the icon.
- Shape of the icon: *Circle, Octagon, Square*.
4. **Replace** another point with this, if you need to.  

#### Quick action  
You can also add a waypoint as a Quick action. Follow the [*Add track waypoint*](../widgets/quick-action.md#create-items) to configure.


### Waypoint format description

![Tracks](@site/static/img/personal/tracks/tracks_format_description.png)   

```xml
<gpx version="1.1" creator="OsmAndRouterV2" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <wpt lat="43.5368866" lon="3.7396109">
    <time>2023-05-24T04:42:07Z</time>
    <name>Test</name>
    <desc>description test</desc>
    <type>Waypoints test</type>
    <extensions>
      <osmand:icon>special_sun</osmand:icon>
      <osmand:color>#eecc22</osmand:color>
      <osmand:background>square</osmand:background>
      <osmand:amenity_subtype>building</osmand:amenity_subtype>
    </extensions>
  </wpt>
</gpx>
```

| Parameter | Description | 
| --- | --- |
| `lat` | **Latitude** is one of the geographic coordinates by which you can determine a location. | 
| `lon` | **Longitude** is another of the geographic coordinates by which you can determine a location. |
| `time` | **Timestamp** is the date and time when the point was recorded. |
| `name` | **Name** is the name of the point. Any characters are allowed.  |
| `desc` | **Description** contains additional information about the point. |
| `type` | **Select group** is the name of the OsmAnd folder in which this waypoint is saved. |

| Extension | Description | 
| --- | --- |
| `osmand:icon` | **Icon** is the name of the icon you selected. | 
| `osmand:color` | **Color** is the color in HEX format.  |
| `osmand:background` | **Background** is the shape of the icon, such as a circle, octagon or square. |

Waypoints are recorded together with the track in the [GPX file](../../technical/osmand-file-formats/osmand-gpx.md). Each of these waypoints has its own set of tags for description. All tags that are directly related to the description of waypoints and that can be edited directly in the OsmAnd application are listed in this section.  
To change the Waypoint description, you can go one of the following ways:
  
1. Find the required track in the *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab* list.
2. Tap the track on the map, if it is included in the [list of visible](#show-tracks-on-map).
3. Tap the required waypoint if it is [visible](#waypoints-folder) on the map.  

    Then in the [Tracks Context menu](../map/track-context-menu.md) tap *Points*, the field of the required folder with available waypoints and the Waypoint you are looking for. Select menu *Actions →* **Edit GPX waypoint** and make changes. You cannot change the creation date of a point, *timestamp*, in the application.  

**Amenity tags** that describe additional information, such as hours of operation or phone number, specific to the POI take that information from OpenStreetMap data or data that you entered when creating the POI. You can edit such tags and [custom tags](#display-custom-gpx-tags) only in the code of the GPX file, which you can open with any text editor on your device.


### Display custom GPX tags

![Tracks](@site/static/img/personal/tracks/tracks_custom_GPX.png)  

```xml
<gpx version="1.1" creator="OsmAnd" xmlns="http://www.topografix.com/GPX/1/1" xmlns:osmand="https://osmand.net" xmlns:test="https://test.net" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="37.5460870" lon="-77.4532843">
        <time>2023-06-07T12:31:35Z</time>
        <name>Test</name>
        <type>SOTM</type>
        <extensions>
            <osmand:address>Floyd Avenue (The Fan) 907, Richmond</osmand:address>
            <osmand:icon>place_town</osmand:icon>
            <osmand:background>circle</osmand:background>
            <osmand:color>#ff4e4eff</osmand:color>
            <test:country>United States</test:country>
            <test:state>Virginia</test:state>
            <test:telephone>(804) 828-0100</test:telephone>
            <test:postcode>23284</test:postcode>
            <test:start_date>Thursday, June 8, 2023</test:start_date>
        </extensions>
    </wpt>
</gpx>
```  

To describe points, you can use the basic [tags available](https://github.com/osmandapp/Osmand/blob/a3b5c637955a5914421d391206c2efb6ee2dff47/OsmAnd-java/src/main/java/net/osmand/GPXUtilities.java#L2476-L2500) in OsmAnd, which you can add and edit directly in the application. Or you can use [custom tags](https://github.com/osmandapp/OsmAnd/blob/fd3a882477518bd19bc8550af331507ba48cfb68/OsmAnd-java/src/main/java/net/osmand/gpx/GPXUtilities.java#L1137-L1160) for the description. These tags cannot be edited in the application, you need to use a text editor.  

The official documentation of the gpx standard [here](https://www.topografix.com/GPX/1/1/#type_wptType).  


### Locations along the route

Waypoints, points of interest (POIs), Favorite points and Audio/video notes all refer to the concept of saving locations and routes in GPX (GPS Exchange Format). You can use the same tags to describe and edit them.  

[*Waypoints*](#add-waypoint) are individual points on a map or route. They are used to mark certain places that may be important for navigating or recording your travels. For example, you can create a waypoint on the map to indicate an important intersection or change of direction.  

[*Points of interest(POI)*](../map/point-layers-on-map.md#points-of-interest-poi) are places of special interest to the user. These can be landmarks, restaurants, hotels, gas stations, and other places of interest that the user wants to note or visit.  

[*Favorite points*](../personal/favorites.md) are places that the user finds particularly important or interesting and saves to their list of favorite places. They can include any location that the user wants to easily find and return to later. 

[*Audio/video notes*](../plugins/audio-video-notes.md#gpx-file-with-waypoints). In GPX format, you can save audio and video recordings as waypoints. This allows you to associate media files to specific locations on the map or route.  

All of these point types can be saved in GPX format to provide the user with location information and help with navigation and route planning. They serve different purposes, but the general idea is to store and transmit geographic information so that the user can use it in their navigation tasks.


### Waypoints folder

*Track Context menu → <Translate android="true" ids="shared_string_gpx_points"/> → Three dots menu*

![My places Tracks](@site/static/img/personal/tracks/tracks_waypoints_folder.png)  

All waypoints of the route are stored in the folders you selected for them when creating or editing. To access a specific folder, you need to open the required track and go to the *Points* submenu. In the three points menu, you can edit a group of waypoints, add them to your marker list, or create a folder in *Menu → My Places → My Favorites*. You can read more information in the article [Tracks Context menu](../map/track-context-menu.md#waypoints-folder).


## My Places menu

The **My Places** menu allows you to organize and manage your personal points of interest, and provides convenient tools for saving, editing and using this data.  

Main features of the My Places menu:

- **Create Points of Interest.** In this menu, you can create new points of interest by marking places you are interested in. It can be a meeting place, vacation, travel, restaurant, store and more. You can add title, description, photos and even choose an icon for each point.
- **Edit and Delete.** The My Places menu provides the ability to edit information about saved points of interest. Users can update names, descriptions, photos and coordinates. There is also a delete function if the point is no longer relevant.
- **Categories and Hashtags.** You can organize your points of interest into different categories such as Restaurants, Parks, Attractions, and other. Hashtags can also be used for easier searching and filtering of places.
- **Export & Import.** The My Places menu allows you to export and import point of interest data. This is useful if you want to share your places with friends or save them on another device.
- **Navigation and Route Management.** Saved points of interest can be used as intermediate waypoints. You can include them in trip planning and navigation, making the process more convenient and customizable.  

My Places menu benefits:

- **Personalization.** The menu allows you to create your own places and organize them as you see prefer.
- **Integration with navigation.** Points of interest can be used in route planning to help you find places of interest quickly.
- **Ease of use.** With categories, hashtags and editing capabilities, you can easily manage your POI data.
- **Synchronization.** The optional data export and import feature allows you to save and use your points of interest information across devices.

### Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*  

![My places tracks Android](@site/static/img/personal/tracks/my_places_tracks_android.png) 

- "+" button  - allows [to import](./tracks.md#import-track) GPX track from device storage.
- "earth" button - opens [Add point menu](../plan-route/coordinate-input.md) for adding points by inputting coordinates.
- "map" button - allows to choose tracks for showing its on the map.
- "&#x1F5D1;" button - allows to choose tracks for deleting.
- "&#10227;" button - allows to refresh tracks list.
- "OSM editing" button - allows you to upload the selected [track to the OSM](../plugins/osm-editing.md).

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_ios.png) ![My places tracks Actions iOS](@site/static/img/personal/tracks/my_places_tracks_actions_ios.png)  

ACTIONS  
- **<Translate ios="true" ids="import_tracks"/>**  - open tab "<Translate ios="true" ids="import_from_docs"/>" and next description "<Translate ios="true" ids="gpx_import_desc"/>", [My files](../plan-route/create-route.md).
- **<Translate ios="true" ids="create_new_trip"/>** - opens ["Plan route tool"](../personal/tracks.md#edit-mode-ios) for creating a new track.

Buttons in "&#8230;" menu  
- "export" button - allows to export choosing GPX file or files by anyways (messengers, email) or save to [My files](../plan-route/create-route.md).
- "map" button - allows to choose tracks for showing its on the map.
- "OSM editing" button - allows you to upload the selected [track to the OSM](../plugins/osm-editing.md).
- "&#x1F5D1;" button - allows to choose tracks for deleting.

</TabItem>
 
</Tabs>


### Search

Tap the "&#x1F50D;" button at the top of the device screen to open the track list sorting menu.

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_seaching_android.png) 


### Sort

<InfoAndroidOnly/>

Tap the "sort" button at the top of the device screen to open the track list sorting menu tool.

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

- In [*My Places*](../personal/myplaces.md), so that to view all ever recorded data pieces in the [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format). 
- In [*Configure map*](../map/tracks-on-map.md), so that to select a specific track and display it on the map.
- With the [*Context menu*](../map/track-context-menu.md) of the track on the map, so that to adjust the appearance, to update points on the route, to view segments, to start navigation along the track/segment, and/or other options. 


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

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

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

For a specific profile, to display a track on the map, open **Configure map** and tap **Tracks**. Then from the opened dialog, check the needed track. To hide a track, either uncheck it from the list of tracks, or toggle off the Tracks option in the **Configure map** menu: *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*.

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_1.png) ![Select a track to display in iOS](@site/static/img/plugins/trip-recording/show_tr_onmap_ios_2.png)

To display a track on the map another way, open the [**My Places**](../plugins/trip-recording.md#view-all-tracks) menu and then **Tracks**. The *Tracks on map* folder displays the tracks already selected. In the *Rec*, *Import* and *Tracks* folders, you can select one or more tracks to display on the map by first tapping the three dots in the upper right corner and then tapping the Show on Map icon on the bottom menu of the screen. Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*.    

![Show tracks on the map in iOS](@site/static/img/plugins/trip-recording/show_ios.png)  

</TabItem>

</Tabs>


### Options of context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu of a track in Android](@site/static/img/plugins/trip-recording/opt_ofcont_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/plugins/trip-recording/opt_ofcont_menu_ios.png)

</TabItem>

</Tabs>  

When a track is displayed on the map, tapping on it, the [track context menu](../map/track-context-menu.md) appears. For detailed information about each available option, refer to the respective section of the current documentation. Here is an overview of the options:

- Basic info to show the distance, ascending and descending areas, description and quick action buttons, such as whether to show the track on the map, its appearance, points and if to place the track for navigation.
- Graphs for analysis of altitude and speed.
- Tab for any overview and/or updates of points and waypoints.
- And other [options](../map/track-context-menu.md#options): appearance, analysis of split intervals, sharing, editing, renaming, etc.  

When you tap the track directly on the map, the [track context menu](../map/track-context-menu.md) appears, providing a [basic overview of the track](../map/track-context-menu.md#overview) as well as more [analytical data](../map/track-context-menu.md#altitude--speed-graphs) for investigating the route and making adjustments to [points and waypoints](../map/track-context-menu.md#points--waypoints), if necessary. You can also edit the track with the [Plan route tool](../plan-route/create-route.md#opening-plan-route), in the context menu open the track in this tool and edit it: delete or add points, cut the track before or after a certain point. For more information, refer to [Track Context Menu](../map/track-context-menu.md).  


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

Default folder in My Places for saved new tracks: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*.

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
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
