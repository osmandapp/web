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

Feures **Tracks** functionality lets you create and save routes so you can easily return to them later or share them with others. A trip planning feature lets you customize your routes based on your preferences and interests. You also get access to preloaded routes to popular destinations and attractions.

1. **Main Features**. 
- All tracks in OsmAnd are stored in the folder:    
*<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*.   
- The [Tracks](../personal/tracks.md) tab in the OsmAnd app provides a convenient way to manage and interact with your saved tracks. This feature allows you to record and save tracks completed during travel or outdoor activities. 
- A track on a map is Trip recording or Plan a route with or without marked points on it. OsmAnd track file is in [GPX format](../plugins/trip-recording.md#recorded-gpx-file).

2. **You can add or create tracks in OsmAnd in the following ways**.  
- [Import](#import) from an external source.
- Create in the application using [Plan a route](../plan-route/create-route.md) tool.
- Recording in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

3. **Tracks management special features in OsmAnd**.
- Enabling and disabling tracks on the map.
- Customizing the appearance, edit and analyze tracks.
- Use for navigation.

4. **OsmAnd has no limit on the number of tracks to store and display.**

5. **There are three options to display Tracks on the map**.
- [Configure map](../map/configure-map-menu.md) menu.
- [My places](../personal/myplaces.md) menu.
- [Track Context menu](../map/track-context-menu.md).  

**Formats**: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.  
**Import**: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.


## Create / Edit Track

Tracks is a powerful tool for tracking journeys, recording routes and Points of Interest (POIs) in real-time, and for later analyzing and sharing data.  

### Track recording

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/tracks_recording_3_andr.png)  ![Track on the map](@site/static/img/personal/tracks/tracks_recording_4_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/tracks_recording_1_1_ios.png)  ![Track on the map iOS](@site/static/img/personal/tracks/tracks_recording_2_ios.png)

</TabItem>
 
</Tabs>

You can create a new track by starting a record in the Tracks tab or using the OsmAnd [Trip recording Plugin](../plugins/trip-recording.md) and [Widgets](../widgets/info-widgets.md#trip-recording-widgets). Trip plugin is a special tool designed to record your journeys, walks, and other activities.   

- **New track**. In this field you can tap the *Start Recording* button to record a new track. You may need to confirm your [battery settings](#baterry-optimization) (for Android) before you start.
- **Currently recording track** (*Android*) / **Recorded track** (*iOS*). 
- [**Menu**](#folder-menu). Tapping the three dot menu (for Android) or long press (for iOS) opens the [track menu](#single-track-menu). During track recording, in this field you can see how many kilometers have already been recorded and how long the recording is in progress. The **Stop** button allows you to pause the recording, and to finish it, press the **Save** button.

#### Baterry optimization (Android only)

![Track on the map iOS](@site/static/img/personal/tracks/battery_andr.png)

Select an optimisation setting. To prevent the app from asking you the next time you make a selection, tap the Don't ask anymore button. You can additionally read the section in the article [Trip recording plugin](../plugins/trip-recording.md#baterry-optimization).  
**NOTE**. Optimizing battery usage in Android can cause gaps and inaccuracies in recorded tracks. If you encounter such problems, try changing the battery usage mode to *Unrestricted*.


### Coordinate input

<InfoAndroidOnly /> 

- *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> → Earth button at the bottom of the screen*
- *<Translate android="true" ids="shared_string_menu,map_markers_item,shared_string_more_without_dots,coordinate_input"/>*  

![Coordinate input Options menu Android](@site/static/img/plan-route/coordinates_input/coordinates_input_options.png)  

In the **Options** menu using the **Save as track** item, you can save the created points as a GPX track and also change its name.
For more details, read the article [Coordinates input](../plan-route/coordinate-input.md#options).


### Plane route

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

The **Plan a route** tool allows you to create *new routes as GPX tracks*, modify *existing tracks*, and *import* new ones.  
Read more in the article [**Plan a route** tool](../plan-route/create-route.md#types-of-save). 


## Tracks menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/>*  

![My places tracks Android](@site/static/img/personal/tracks/my_places_tracks_actions_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_1_ios.png) 

</TabItem>
 
</Tabs>

The Tracks tab provides several types of menus for related actions and settings.


### Search

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks seaching function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png) 

</TabItem>
 
</Tabs>  

Tap the &#x1F50D; button at the top of the device screen to open the track list sorting menu. 

Available:
- Search by track name.
- [**Sort by**](#sort-by) for better search if you can't remember the title.
- [**Filter**](#filter) if you need the specific characteristics of the track.


### Three-dot menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_appbar_menu_1_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_appbar_menu_ios.png) 

</TabItem>
 
</Tabs>  

- [**Select**](#selection-mode) (*Android only*). This menu item allows you to select the folders and routes you need to manage them further.  

- **Sort subfolder** (*Android only*). The selected sort order on the Tracks tab applies to all levels of subfolders and tracks. 

- **Add folder**. If you need to organize your routes and tracks into logical categories, the app provides the ability to quickly create a new folder and name it. This helps to structure your navigation information.  

- [**Add smart folder**](#smart-folder) (*Android only*). This is a tool for automating data organization. Folders automatically sort routes and tracks according to specified criteria. 

- **Import**. If you have tracks you want to add to OsmAnd, you can use the import function to upload files from your device.


### Selection mode

<InfoAndroidOnly/>

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

<InfoAndroidOnly/>

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_2_andr.png) 

Osmand provides convenient track management tools, one of them is filtering in the *Tracks* tab to help organize and manage all tracks on your device, as well as more detailed and customizable track searches by various parameters to quickly find tracks that meet specific requirements.  

- To access the Filter screen, tap the Search icon &#x1F50D;, in the *Sort by* row on the right, tap *Filter*. 
- After selecting the required filters, tap the Show button in the lower right corner of the screen. The number of filtered tracks is displayed in brackets.
- You can clear all configured filters using the *Reset all* button.
- The configured filter set can be saved as a new [*Smart folder*](#smart-folder) using the button in the upper right corner of the screen.

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)  

**Available filters**:

- **Filter by name**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_name_andr.png)  

    - This filter allows you to search for tracks by their title.
    - Enter a title or part of a title to filter tracks matching the specified text.

- **Folder**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_andr.png)  

    - The *Folder* filter allows you to search for tracks in one or more existing folders.
    - Select the needed folders to display the tracks in the search list.

- **Duration**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_duration_andr.png)  

    - This filter allows you to customize your search by the duration of the recorded tracks.
    - You can select a duration range in hours and minutes to find tracks matching your time limit.

- **Time in motion**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_time_in_motion_andr.png)  

    - This filter helps you find tracks during which you were in motion.
    - Select a range of time in motion to display tracks that match your parameters.

- **Length**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_length_andr.png)  

    - This filter allows you to customize your search by track length in kilometers or miles.
    - Specify the required length range to find tracks of a specific length.

- **Average speed**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_average_speed_andr.png)   

    - This filter helps you sort tracks by average speed.
    - Select the [average speed](../widgets/info-widgets.md#average-speed) range to search for tracks.

- **Max speed**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_max_speed_andr.png)     

    - This filter allows you to search for tracks with a specific maximum speed.
    - Select from the suggested range of maximum speed values to find tracks that match this parameter.

- **Uphill**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_uphill_andr.png)  

    - This filter searches for tracks that go up a slope or have a positive elevation.
    - Tracks that include sections with the selected uphill are displayed.

- **Downhill**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_downhill_andr.png)  

    - The *Downhill* filter searches for tracks that are descending or have a negative elevation.
    - Finds tracks that include downhill sections for the selected values.

- **Average altitude**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_average_altitude_andr.png)     

    - This filter helps you find tracks based on average altitude.
    - Specify a range of average altitude to find tracks with these parameters.

- **Max altitude**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_max_alt_andr.png)  

    - This filter searches for tracks according to their maximum altitude above sea level.
    - Specify a range of maximum altitude to find tracks matching the selected parameters.

- **Date of creation**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_date_of_reation_andr.png)  

    - The *Date of creation* allows you to filter tracks by date.
    - Specify the required time period to find tracks that were created then.

- **Nearest cities**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_cities_andr.png)   

    - The filter allows you to search for tracks that pass close to specific cities or settlements.
    - Select one or more locations to find tracks passing through them or nearby.

- **Country**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_country_andr.png)  

    - This filter allows you to search for tracks recorded in a specific country or region.
    - Select specific locations to find related tracks.  

- **Color**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_color_andr.png)

    - The *Color* filter helps you search for tracks by colors that have already been applied to the appearance of existing tracks.
    - Select one or more colors, or *Not specified* for items that do not have a specified color, to find the tracks you need.

- **Width**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_smart_folder_width_andr.png)  

    - This filter searches for tracks according to their width. Only the parameters that existing tracks have are listed.
    - Select one or more parameters or *Not specified* to find tracks with a specific width or without this attribute.

- **Other**

    ![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_other_andr.png)  

    The filter provides additional options for finding and filtering tracks that have special characteristics.  

    - *Visible on Map*. With this feature, you can find tracks that you have selected to be shown on the map.
    - *With Waypoints*. This filter helps you find tracks that contain waypoints, places that were marked during track recording, for example. With this filter, you can easily find tracks with important waypoints, such as vacation spots or notable events on your trip.


## Smart folder

<InfoAndroidOnly/>

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_andr.png)

*Smart Folder* is a special type of folder that provides intelligent and automated features for organizing and managing tracks.  

1. **Automated organization.** *Smart folder* can automatically sort files within itself based on specified rules or criteria. For example, you can set up a *Smart folder* so that all tracks created on a certain date are automatically moved to that folder.
2. **Filtering and searching.** This folder can provide options to quickly search for tracks within itself using various filters and keywords. These help users to quickly find the tracks they are looking for.
3. **Dynamic Refresh.** *Smart folder* can dynamically update its contents based on Refresh function. This allows you to always have up-to-date information inside the folder.
4. **Customize Rules.** You can customize rules that determine which files should be included in the *Smart folder*. 

### Create Smart folder

To create a smart folder, follow these steps:
1. **Tap the three-dot menu icon in the upper right corner** of the screen in the *Tracks* tab. 
2. **Select the *Add smart folder*** option from the menu that appears after tapping the icon.
3. **Set the parameters of the smart folder:**
   - **Name the folder** (Enter a new name) for identification.
   - **Specify track filter parameters** from the [Filter](#filter) list. These parameters determine which tracks will be automatically displayed in the smart folder.
4. **Save the settings.** Tap *Show* in the lower right corner of the screen, and then tap the *Save* button.

After completing these steps, the Smart Folder will automatically collect and display tracks matching the specified filter parameters.

### Folder menu in Tracks tab

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_2_andr.png)  

Once created, the Smart folder is displayed with a special icon in the folder list in the Tracks tab. To manage it, tap the three-dot menu in the folder field.

- **Details**. Opens the entire list of tracks in this folder.
- **Show all tracks on the map**. If there are many tracks in a folder, it is not recommended to map them all, it may take a long time.
- **Rename**. Changing the folder name.
- **Refresh**. Allows you to update the track list.
- **Edit filter**. You can change the track filter settings for the current Smart folder.
- [**Export**](../personal/import-export.md). You will go to *Menu → Settings → Actions* tab, where you can export all tracks from the folder.
- **Delete folde**. You can only delete the Smart folder, not the tracks. A warning message will appear on the display. The deletion will be irreversible.  


### Internal folder menu

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_3_andr.png)  

Go to the Smart folder and tap the menu with three dots in the upper right corner of the screen. The following actions are available in this menu:
- [**Select**](#select-in-smart-folder). Allows you to select all or only certain tracks for further interaction with them.
- **Refresh**. Updates the track list according to the specified filters.
- [**Edit filter**](#filters-for-smart-folder). Moves to the Filter screen where you can configure track filtering for the folder.


### Select in Smart folder

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_smart_folder_4_andr.png)  

This screen allows you to select the tracks you want, as well as a list of suggested actions:  

- **Show on map**. Unlike *Show all tracks on the map*, this function allows you to customize the display of tracks selectively.
- **Share**. Allows you to export tracks using *Export to File*.
- **Upload to [OpenStreetMap](../plugins/osm-editing.md#create--modify-osm-note)**. You can load the selected tracks into OpenStreetMap.
- **Move**. Moving selected tracks to another folder.
- [**Change appearance**](../map/tracks-on-map.md#track-appearance). Allows you to change the appearance of all or specific tracks in a folder.
- **Delete**. Deletes only the folder with its settings. The tracks displayed in this folder are not deleted.


###  Export tracks from Smart folder

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

### Import

There are two options for importing a track file into OsmAnd. The first is importing by clicking on the track file, the second is importing by the My Places menu action.  

1. Importing track by taping to GPX (KML, KMZ) track file (massengers, email, Drive, File managers). It suggests to open it by OsmAnd app. Importing tracks save in "Import" folder of [My places menu](../personal/myplaces.md):  
*taping to the chosen GPX file → opening it by OsmAnd*.
2. Importing button in *[My places menu → Tracks](../personal/tracks.md#actions)*.

- Track GPX file.
- Multitrack GPX file: saving as one GPX track or selected tracks.
- Tracks added manually to the OsmAnd folder are imported without restarting the application.  


### Export

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

1. By [*Track Context menu → Share*](../map/track-context-menu.md#options).
2. By [*My Places menu → Tracks → … → "export" button*](../personal/tracks.md#actions). Exporting more than one track by a bundle (It's the case of Local Backup).
3. By [*Local backup file*](../personal/import-export.md#export-to-file). Exporting GPX-tracks as OSF-file.


### Export GPX file to an external storage device (iOS)

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

[*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*](#my-places-menu)

At the bottom of the list in the _Tracks_ tab, and below the list of tracks **in each of your folders**, there is an information section that allows you to view the overall summary statistics for the tracks in the selected folder. All values are displayed in the [units](../personal/profiles.md#units--formats) you have selected.  

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

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


### Single track menu



### Folder menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_ios.png)

</TabItem>

</Tabs>  

To open the folder menu, you need to:
- *Android* - tap the three-dots menu in the field with the required folder.
- *iOS* - to make a long-tap on the field of the folder.

Actions:
- **Name**. Displays the selected folder name, creation date and the number of tracks it contains.
- **Show all tracks on the map** (*Android only*). Shows all tracks in the folder on the map. It is not recommended, if there are a lot of tracks, the device may freeze.
- **Edit name** (*Android*) / **Rename** (*iOS*). Changing the folder name.
- [*Change default appearance*](../map/tracks-on-map.md#track-appearance) (*Android*) / **Appearance** (*iOS*). You can change the appearance of all tracks in a folder.
- [*Export*](../personal/import-export.md). You go to the *Menu → Settings → Actions* tab, where you can export all the tracks in the folder as an [OSF file](../personal/import-export.md#export).
- **Move**. You can move the selected folder to another existing folder or create a new one.
- [*Delete folder*](#delete-folder). Allow you to delete a folder. A warning message will appear on the display. The deletion will be irreversible. 

####  Delete folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

You can delete a folder with all the tracks it contains. To do this:
- Tap on the three-dot menu of the folder you want to delete.
- At the bottom of the menu, find the Delete Folder option.
- **Note** that this action is irreversible.


### Follow track

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Navigation → Settings → Follow track → Select*

![My Places with tracks in Android](@site/static/img/personal/tracks/follow_track_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Navigation → Settings → Follow track → Select*

![Context menu of a track in iOS](@site/static/img/personal/tracks/follow_track_ios.png)

</TabItem>

</Tabs>  

**Places from which tracks can be opened**.
- *Plan route → Open existing track*
- *Plan route → Add to a track*
- *Navigation → Follow track → Select*
- *Markers → Groups → Add → Track waypoints*
- *OsmAnd Development → Settings → Simulate your position → Select track*
- *Quick action → Simulate your position → Select track*


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


### Context menu on the map 

To move a track to another folder inside My Places, you can use [Context menu of a track on the map](../map/track-context-menu.md) as follows: 

- Open the **Context menu** of a track on the map in one of the following ways:  
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map.  
- Tap **<Translate android="true" ids="shared_string_options"/>**.
- Tap **<Translate android="true" ids="change_folder"/>** from the opened *<Translate android="true" ids="shared_string_options"/> list*.
- Select a folder to move the track to. 

![More options in Android](@site/static/img/plugins/trip-recording/change_folder_andr_1.png) ![Change folder in Android](@site/static/img/plugins/trip-recording/change_folder_andr_2.png)  


### Context menu in my places

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


### Move track in the My places

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


## Read more about Tracks

- [Show track on Map](../map/tracks-on-map.md)
- [Analyze on Map](../map/tracks-on-map.md#analyze-track-on-map)
- [Track Context menu](../map/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
