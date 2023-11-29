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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>

1. **Main Features**  
- All tracks in OsmAnd are stored in the folder:    
*[<Translate android="true" ids="shared_string_menu"/>](../start-with/main-menu.md) → [<Translate android="true" ids="shared_string_my_places"/>](../personal/myplaces.md) → [<Translate android="true" ids="shared_string_gpx_tracks"/>](../personal/tracks.md)*.   
- The Tracks tab in the OsmAnd app provides a convenient way to manage and interact with your saved tracks. This feature allows users to record and save the tracks. they have traveled during their travels or outdoor activities.  
- Track on the map is user Trip recording or Plan a route with makred points on it or not. OsmAnd track file has [GPX format](../plugins/trip-recording.md#recorded-gpx-file).

2. **You can add or create tracks in OsmAnd in the following ways**  
- [Import](./tracks.md#import-track) from the external source.
- Create in the application using [Plan a route](../plan-route/create-route.md) tool.
- Record in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

3. **Tracks management special features in OsmAnd**
- Enabling and disabling tracks on the map.
- Customizing the appearance, editing and analyzing tracks.
- Use for navigation.

4. **OsmAnd has no limit on the number of tracks to store and display.**

5. **There are three options to display Tracks on the map**
- [Configure map](../map/tracks-on-map.md#display-via-configure-map-menu) menu.
- [My places](../map/tracks-on-map.md#display-via-my-places-menu) menu.
- [Track Context menu](../map/track-context-menu.md).  

**Formats**: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.  
**Import**: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.


## Create / Edit Track

Tracks is a powerful tool for tracking journeys, recording routes and points of interest (POIs) in real-time, and for later analyzing and sharing data.  

### Coordinate input

<InfoAndroidOnly /> 

- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Earth button at the bottom of the screen*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*  

![Coordinate input Options menu Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)  

- In the pop-up menu, you can enter your own track name or save it by default.  
- Tap <Translate android="true" ids="shared_string_save"/> to save the added points as a new track.  
- You will find your track in [My places menu](../personal/myplaces.md) *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks,map_markers_item"/>*. Read how to add points by coordinates:  
- [Coordinate input](../plan-route/coordinate-input.md) article. 


### Currently recording track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/tracks_recording_1_andr.png)  ![Track on the map](@site/static/img/personal/tracks/tracks_recording_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/tracks_recording_1_ios.png)

</TabItem>
 
</Tabs>

Use the OsmAnd [Trip recording Plugin](../plugins/trip-recording.md) and special widgets to record your tracks. Trip recording (Android) or Track recording (iOS) plugin is a special tool designed to record your routes, movements, and workouts. This feature allows you to reuse, modify, update, and share your tracks with friends.    

**Three-dot menu**

- Show on map.  

![Track on the map iOS](@site/static/img/personal/tracks/tracks_show_on_map_andr.png)

- Analyze on map.
- Share.
- Export.

### Modify GPX track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,plan_a_route,plan_route_open_existing_track"/> / <Translate android="true" ids="plan_route_import_track"/>*

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,plan_route,plan_route_open_existing_track"/>*

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>  

*Plan a Route* tool enables users to modify both [pre-existing GPX](../personal/tracks.md#my-places-menu) tracks and [imported tracks](../personal/tracks.md#import-track).  
Read more in the article [**Plan a route** tool](../plan-route/create-route.md#modify-existing-gpx-track).  


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

![My places tracks Android](@site/static/img/personal/tracks/my_places_tracks_actions_3_andr.png) 

- **Search** button. Takes you to a screen with a list of tracks, search by title, and filters.
- **...* menu button. Opens the action [menu](#appbar-menu).
- **Sort by**. [Sort tracks](#sort-by) by various parameters.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_ios.png) 

Actions  

- **<Translate ios="true" ids="import_tracks"/>**  - open tab *<Translate ios="true" ids="import_from_docs"/>* and next description <Translate ios="true" ids="gpx_import_desc"/>, [My files](../plan-route/create-route.md).
- **<Translate ios="true" ids="create_new_trip"/>** - opens [*Plan route tool*](../personal/tracks.md#edit-mode-ios) for creating a new track.

Buttons in "&#8230;" menu. **When you go to this menu, the ability to import or create tracks is not available.**  

- **Export** button. Allows you to export selected GPX files using a method available on your device, messengers, email, or save to a folder on your device.
- **Map** button. The selected tracks are displayed on the map.
- **OSM editing** button. Allows you to upload the selected [track to the OSM](../plugins/osm-editing.md).
- &#x1F5D1; button. Deletes the selected tracks.

</TabItem>
 
</Tabs>


### Search

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

Tap the &#x1F50D; button at the top of the device screen to open the track list sorting menu. 

Available:
- Search by track name.
- [**Sort by**](#sort-by) for better search if you can't remember the title.
- [**Filter**](#filter) if you need the specific characteristics of the track.


### AppBar menu

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_appbar_menu_andr.png)   

- [**Select**](#selection-mode). This menu item allows you to select the folders and routes you need to manage them further.  

- **Add new folder**. If you need to organize your routes and tracks into logical categories, the app provides the ability to quickly create a new folder and name it. This helps to structure your navigation information.  

- [**Add smart folder**](#smart-folder). This is a tool for automating data organization. Folders automatically sort routes and tracks according to specified criteria. 

- **Import**. If you have tracks you want to add to OsmAnd, you can use the import function to upload files from your device.


### Selection mode

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_selection_andr.png)

The **Select** menu item provides options for managing folders and tracks. This feature allows you to select multiple tracks or track folders. You can also select all tracks and folders by tapping the special *Select All* button at the top of the screen.

Once you have made your choice, the following steps are provided:  

- **Show on map**. With this feature you can display the selected tracks on the map to better understand their location and relationship to each other.

- **Share**. If you want to share selected data with other users or save it to a cloud service, the *Share* feature allows you to send tracks and folders using different sharing methods.

- **Upload to OpenStreetMap**. You can submit selected tracks to OpenStreetMap, contributing to the development and improvement of the data.

- **Move**. You can organize your data by moving selected tracks and folders to other folders.

- **Change appearance**. This option allows you to customize the appearance of selected tracks, making them more visible and recognizable on the map.

- **Delete**. If the selected tracks or folders are no longer needed, the Delete function allows you to delete them, with the app providing confirmation options to avoid accidental deletion.


### Sort by

<InfoAndroidOnly/>

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)   

OsmAnd provides a convenient option to sort tracks. This is especially useful if you have a lot of them or if you are searching by certain features.  
Tap the *Sort by* button at the top of the list to open the track list sorting menu tool.  

Sort menu: 

- **Nearest**. Shows tracks that are close to your location.
- **Last modified**. The tracks in the list are sorted by which ones have been changed recently.
- **Name: A - Z**. Sorting tracks in the list by name from A to Z.
- **<Translate android="true" ids="sort_name_descending"/>**. Sorting tracks in the list by name from Z to A.
- **Newest date first**. The tracks in the list are sorted by the date they were created. The newest ones first.
- **Oldest date first**. The tracks in the list are displayed so that the oldest created tracks are at the beginning.
- **Longest distance first**. The tracks are sorted so that the longest by distance are at the top of the list.
- **Shortest distance first**. At the top of the list are the shortest tracks.
- **Longest duration first**. Tracks are sorted so that the ones that took the longest are listed first.
- **Shorted duration first**. At the top of the list are the tracks that took the least amount of time to complete.


### Filter

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png) 

Osmand provides convenient track management tools, one of them is filtering in the *Tracks* tab to help organize and manage all tracks on your device, as well as more detailed and customizable track searches by various parameters to quickly find tracks that meet specific requirements.  

- To access the Filter screen, tap the Search icon &#x1F50D;, in the *Sort by* row on the right, tap *Filter*. 
- After selecting the required filters, tap the Show button in the lower right corner of the screen. The number of filtered tracks is displayed in brackets.
- You can clear all configured filters using the *Reset all* button.
- The configured filter set can be saved as a new [*Smart folder*](#smart-folder) using the button in the upper right corner of the screen.

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)  

#### Filter by name

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_name_andr.png)  

- This filter allows you to search for tracks by their title.
- Enter a title or part of a title to filter tracks matching the specified text.

#### Folder

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_andr.png)  

- The *Folder* filter allows you to search for tracks in one or more existing folders.
- Select the needed folders to display the tracks in the search list.

#### Duration

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_duration_andr.png)  

- This filter allows you to customize your search by the duration of the recorded tracks.
- You can select a duration range in hours and minutes to find tracks matching your time limit.

#### Time in motion

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_time_in_motion_andr.png)  

- This filter helps you find tracks during which you were in motion.
- Select a range of time in motion to display tracks that match your parameters.

#### Length

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_length_andr.png)  

- This filter allows you to customize your search by track length in kilometers or miles.
- Specify the required length range to find tracks of a specific length.

#### Average speed

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_average_speed_andr.png)   

- This filter helps you sort tracks by average speed.
- Select the [average speed](../widgets/info-widgets.md#average-speed) range to search for tracks.

#### Max speed

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_max_speed_andr.png)     

- This filter allows you to search for tracks with a specific maximum speed.
- Select from the suggested range of maximum speed values to find tracks that match this parameter.

#### Uphill

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_uphill_andr.png)  

- This filter searches for tracks that go up a slope or have a positive elevation.
- Tracks that include sections with the selected uphill are displayed.

#### Downhill

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_downhill_andr.png)  

- The *Downhill* filter searches for tracks that are descending or have a negative elevation.
- Finds tracks that include downhill sections for the selected values.

#### Average altitude

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_average_altitude_andr.png)     

- This filter helps you find tracks based on average altitude.
- Specify a range of average altitude to find tracks with these parameters.

#### Max altitude

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_max_alt_andr.png)  

- This filter searches for tracks according to their maximum altitude above sea level.
- Specify a range of maximum altitude to find tracks matching the selected parameters.

#### Date of creation

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_date_of_reation_andr.png)  

- The *Date of creation* allows you to filter tracks by date.
- Specify the required time period to find tracks that were created then.

#### Nearest cities

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_cities_andr.png)   

- The filter allows you to search for tracks that pass close to specific cities or settlements.
- Select one or more locations to find tracks passing through them or nearby.

#### Country

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_country_andr.png)  

- This filter allows you to search for tracks recorded in a specific country or region.
- Select specific locations to find related tracks.  

#### Color

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_color_andr.png)

- The *Color* filter helps you search for tracks by colors that have already been applied to the appearance of existing tracks.
- Select one or more colors, or *Not specified* for items that do not have a specified color, to find the tracks you need.

#### Width

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_width_andr.png)  

- This filter searches for tracks according to their width. Only the parameters that existing tracks have are listed.
- Select one or more parameters or *Not specified* to find tracks with a specific width or without this attribute.

#### Other

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_other_andr.png)  

The filter provides additional options for finding and filtering tracks that have special characteristics.  

- *Visible on Map*. With this feature, you can find tracks that you have selected to be shown on the map.
- *With Waypoints*. This filter helps you find tracks that contain waypoints, places that were marked during track recording, for example. With this filter, you can easily find tracks with important waypoints, such as vacation spots or notable events on your trip.


### Smart folder

<InfoAndroidOnly/>

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

*Smart Folder* is a special type of folder that provides intelligent and automated features for organizing and managing tracks.  

1. **Automated organization.** *Smart folder* can automatically sort files within itself based on specified rules or criteria. For example, you can set up a *Smart folder* so that all tracks created on a certain date are automatically moved to that folder.
2. **Filtering and searching.** This folder can provide options to quickly search for tracks within itself using various filters and keywords. These help users to quickly find the tracks they are looking for.
3. **Dynamic Refresh.** *Smart folder* can dynamically update its contents based on Refresh function. This allows you to always have up-to-date information inside the folder.
4. **Customize Rules.** You can customize rules that determine which files should be included in the *Smart folder*. 

#### Create Smart folder

To create a smart folder, follow these steps:
1. **Tap the three-dot menu icon in the upper right corner** of the screen in the *Tracks* tab. 
2. **Select the *Add smart folder*** option from the menu that appears after tapping the icon.
3. **Set the parameters of the smart folder:**
   - **Name the folder** (Enter a new name) for identification.
   - **Specify track filter parameters** from the [Filter](#filter) list. These parameters determine which tracks will be automatically displayed in the smart folder.
4. **Save the settings.** Tap *Show* in the lower right corner of the screen, and then tap the *Save* button.

After completing these steps, the Smart Folder will automatically collect and display tracks matching the specified filter parameters.

#### Folder menu in Tracks tab

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_2_andr.png)  

Once created, the Smart folder is displayed with a special icon in the folder list in the Tracks tab. To manage it, tap the three-dot menu in the folder field.

- **Details**. Opens the entire list of tracks in this folder.
- **Show all tracks on the map**. If there are many tracks in a folder, it is not recommended to map them all, it may take a long time.
- **Rename**. Changing the folder name.
- **Refresh**. Allows you to update the track list.
- **Edit filter**. You can change the track filter settings for the current Smart folder.
- [**Export**](../personal/import-export.md). You will go to *Menu → Settings → Actions* tab, where you can export all tracks from the folder.
- **Delete folde**. You can only delete the Smart folder, not the tracks. A warning message will appear on the display. The deletion will be irreversible.  

#### Internal folder menu

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)  

Go to the Smart folder and tap the menu with three dots in the upper right corner of the screen. The following actions are available in this menu:
- [**Select**](#select-in-smart-folder). Allows you to select all or only certain tracks for further interaction with them.
- **Refresh**. Updates the track list according to the specified filters.
- [**Edit filter**](#filters-for-smart-folder). Moves to the Filter screen where you can configure track filtering for the folder.


#### Select in Smart folder

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_4_andr.png)  

This screen allows you to select the tracks you want, as well as a list of suggested actions:  

- **Show on map**. Unlike *Show all tracks on the map*, this function allows you to customize the display of tracks selectively.
- **Share**. Allows you to export tracks using *Export to File*.
- **Upload to [OpenStreetMap](../plugins/osm-editing.md#create--modify-osm-note)**. You can load the selected tracks into OpenStreetMap.
- **Move**. Moving selected tracks to another folder.
- [**Change appearance**](../map/tracks-on-map.md#track-appearance). Allows you to change the appearance of all or specific tracks in a folder.
- **Delete**. Deletes only the folder with its settings. The tracks displayed in this folder are not deleted.

####  Import / Export Smart folder

1. Exporting tracks that are in the Smart folder is available through the menu in the folder field of the Tracks tab.
    - Tap the three-dot menu, then select **Export**.
    - You will go to screen *Menu → Settings → Export to File → My Places → Tracks*.
    - Tap *Continue* and select an available resource to export the osf file.  

2. Settings and the *Smart* folder itself belong to **Global Settings**, so you can export, import and save it to Cloud by selecting *OsmAnd Settings* in *Menu → Settings → Export to File → Settings*.

3. You can export tracks using the [*Select*](#select-in-smart-folder) menu item in the three-dot menu within a folder.
- Tap Smart folder in the folder list.
- Tap the three-dot menu in the upper right corner of the screen.
- From the three-dot menu, choose *Select*, then **Share**.


## Import / Export track

### Import track

There are two options for importing a track file into OsmAnd. The first is importing by clicking on the track file, the second is importing by the My Places menu action.  

1. Importing track by taping to GPX (KML, KMZ) track file (massengers, email, Drive, File managers). It suggests to open it by OsmAnd app. Importing tracks save in "Import" folder of [My places menu](../personal/myplaces.md):  
*taping to the chosen GPX file → opening it by OsmAnd*.
2. Importing button in *[My places menu → Tracks](../personal/tracks.md#actions)*.

- Track GPX file.
- Multitrack GPX file: saving as one GPX track or selected tracks.
- Tracks added manually to the OsmAnd folder are imported without restarting the application.  


### Export track

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

Exporting one or more track files to any messenger, email, file managers, Drive or app is possible in several ways.  

1. By [Track Context menu → Share](../map/track-context-menu.md#options).
2. By [My Places menu → Tracks → … → "export" button](../personal/tracks.md#actions). Exporting more than one track by a bundle (It's the case of Local Backup).
3. By [Local backup file](../personal/storage.md#local-backup). Exporting GPX-tracks as OSF-file.


### Export a GPX file to an external storage device (iOS)

![Export with Context menu in iOS](@site/static/img/plugins/trip-recording/cont_menu_in_myplaces_ios.png) 

To export a GPX file to an external storage, do the following: 

- Open the [Context menu](../map/track-context-menu.md) of a track on the map in one of the following ways:
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map. 
- Tap **<Translate ios="true" ids="shared_string_export"/>**.
- Select the required storage to export the GPX file to.   


## Manage tracks

After recording and saving, tracks can be managed as follows:    

- In [*My Places*](../personal/myplaces.md), you can view all [GPX data](https://en.wikipedia.org/wiki/GPS_Exchange_Format) that has ever been recorded.
- In [*Configure map*](../map/tracks-on-map.md), select a specific track and display it on the map.
- With the [*Context menu*](../map/track-context-menu.md) of the track on the map, so that to adjust the appearance, to update points on the route, to view segments, to start navigation along the track/segment, and/or other options. 


### Folder statistics (Android)

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab* 

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

At the bottom of the list in the Tracks tab, and below the list of tracks **in each of your folders**, there is an information section that allows you to view the overall summary statistics for the tracks in the selected folder. All values are displayed in the [units](../personal/profiles.md#units--formats) you have selected.  

- *Number of **Tracks** in the folder*.
- *Total sum of* **Distances**.
- *Sum of* **Uphills**.
- *Sum of* **Downhills**.
- *Sum of* **Duration** *time*.
- *Total **Size** of downloaded files in MB*.


### View all tracks 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/plugins/trip-recording/view_all_tr_ios.png)

</TabItem>

</Tabs>

All tracks ever recorded are automatically displayed in [**My Places**](../personal/myplaces.md). This is the central storage of all user-generated information, organized in tabs according to the main criterion of saved data. There are favourites, notes, and tracks. Browse through [**Tracks**](../personal/tracks.md) tab to find any trip recordings. 

More information about [My Places](../personal/myplaces.md), and/or [Tracks](../personal/tracks.md) stored in it can be found in the relevant sections of the current documentation. However, it makes sense to underscore here that:

- The internal organization of the Tracks tab in My Places can be managed with the Trip recording plugin settings described above.
- This is a useful place to consult with in case of doubts, for example, on what/if something is recorded, what/if something is visible right now on the map, and so forth.
- My Places is perfect for any inventory work: tap the triple points/arrow at the right side of a track to manage it with any of the options, such as Move, Rename, Share, etc. 


### Folder menu

<InfoAndroidOnly /> 

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

- *Name*. Displays the selected folder name, creation date and the number of tracks it contains.
- *Show all tracks on the map*. Shows all tracks in the folder on the map. It is not recommended, if there are a lot of tracks, the device may freeze.
- *Edit name*. Changing the folder name.
- [*Change default appearance*](../map/tracks-on-map.md#track-appearance). You can change the appearance of all tracks in a folder.
- [*Export*](../personal/import-export.md). You go to the *Menu → Settings → Actions* tab, where you can export all the tracks in the folder.
- [*Delete folder*](#delete-folder). You can delete a folder. A warning message will appear on the display. The deletion will be irreversible. 


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


#### Context menu on the map 

To move a track to another folder inside My Places, you can use [Context menu of a track on the map](../map/track-context-menu.md) as follows: 

- Open the **Context menu** of a track on the map in one of the following ways:  
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map.  
- Tap **<Translate android="true" ids="shared_string_options"/>**.
- Tap **<Translate android="true" ids="change_folder"/>** from the opened *<Translate android="true" ids="shared_string_options"/> list*.
- Select a folder to move the track to. 

![More options in Android](@site/static/img/plugins/trip-recording/change_folder_andr_1.png) ![Change folder in Android](@site/static/img/plugins/trip-recording/change_folder_andr_2.png)  


#### Context menu in my places

To move a track to another folder in My Places, you can use [Context menu of a track in My Places](../personal/tracks.md#manage-tracks) as follows: 

- Open: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*.
- Tap the triple points on the right of the required track.
- Tap **<Translate android="true" ids="shared_string_move"/>** from the opened context menu.
- Select the folder to which you want to move the track. 

![Move with My Places in Android](@site/static/img/personal/tracks/context_menu_in_myplaces_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Default folder in My Places for saved new tracks: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*.

You can then move the track to any other preferred folder in My Places and/or export the GPX file to an external storage device.   


#### Move track in the My places

![More options in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_1.png) ![Change folder in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_2.png)  

To move a track from the default folder to another folder in My Places, follow these steps:

- Open the [Context menu](../map/track-context-menu.md) of a track on the map in one of the following ways:  
    - When you tap a track in My Places on the map, the context menu open for that track appears.
    - When you tap a track directly on the map.  
    - In either case, make sure that the track is visible on the map.
- Tap the triple dot at the far right of the bottom panel.
- Tap **<Translate ios="true" ids="change_folder"/>** from the opened *<Translate ios="true" ids="select_folder"/> list*.
- Select the folder to which the track will be moved.

</TabItem>

</Tabs>

###  Delete folder

<InfoAndroidOnly /> 

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

You can delete a folder with all the tracks contained in it. To do this:
- Go to Menu → My Places → Tracks tab.
- Tab the three dots menu of the folder you want to delete.
- At the bottom of the menu, find the Delete Folder option.
- Note that this action is irreversible.

## Read more

- [Show track on Map](../map/tracks-on-map.md)
- [Analyze on Map](../map/tracks-on-map.md)
- [Track Context menu](../map/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
