---
sidebar_position: 4
title:  Manage Tracks
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


## Manage tracks

After recording and saving, tracks can be managed as follows:    

- In [*My Places*](../../personal/myplaces.md), you can view all [GPX data](https://en.wikipedia.org/wiki/GPS_Exchange_Format) that has ever been recorded.
- In [*Configure map*](../../map/tracks-on-map/tracks-types.md), select a specific track and display it on the map.
- With the [*Context menu*](../../map/track-context-menu.md) of the track on the map, so that to adjust the appearance, to update points on the route, to view segments, to start navigation along the track/segment, and/or other options. 


### View all tracks 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

All tracks ever recorded, created or imported are automatically displayed in the [My Places](../../personal/myplaces.md) folder in the *Tracks* tab. They are organised by folder or displayed in a list below them.

### Folder menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>  

To open the folder menu, you need to:
- *Android* - tap the 3-dot menu in the field with the required folder.
- *iOS* - to make a long-tap the field of the folder.

Actions:
- **Name**. Displays the selected folder name, creation date and the number of tracks it contains.
- **Show all tracks on the map** (*Android only*). Shows all tracks in the folder on the map. It is not recommended, if there are a lot of tracks, the device may freeze.
- **Edit name** (*Android*) / **Rename** (*iOS*). Changing the folder name.
- [*Change default appearance*](../../map/tracks-on-map/track-appearance.md) (*Android*) / **Appearance** (*iOS*). You can change the appearance of all tracks in a folder.
- [*Export*](../../personal/import-export.md). You go to the *Menu → Settings → Actions* tab, where you can export all the tracks in the folder as an [OSF file](../../personal/import-export.md#export).
- [**Move**](#context-menu-in-my-places). You can move the selected folder to another existing folder or create a new one.
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
- Tap the 3-dot menu of the folder you want to delete.
- At the bottom of the menu, find the Delete Folder option.
- **NOTE** that this action is irreversible.


### Folder statistics (Android)

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)  

At the bottom of the list in the _Tracks_ tab, and below the list of tracks **in each of your folders**, there is an information section that allows you to view the overall summary statistics for the tracks in the selected folder. All values are displayed in the [units](../../personal/profiles.md#units--formats) you have selected.   

- *Number of **Tracks** in the folder*. Displays the number of tracks contained in the selected folder.
- *Total sum of* **Distances**. The total length of all tracks in the selected folder, measured in in the units you have selected, is displayed.
- *Sum of* **Uphills**. The data indicates the total vertical rise across all tracks in the selected folder.
- *Sum of* **Downhills**. This parameter is the sum of vertical descents on all tracks in the selected folder.
- *Sum of* **Duration** *time*. This displays the total time taken to complete all tracks in the selected folder.
- *Total **Size** of downloaded files in MB*. Total downloaded file size in megabytes shows how much space all tracks in the selected folder take up on your device.


### Single track menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Each track, like folders, has its menu. To open it: 
- *Android* - tap the 3-dot menu in the field with the required track.
- *iOS* - long-tap the required track in the list.

Menu with actions:
- **Show on map**. Displays selected tracks on the map to provide a visual representation of their location.
- **Appearance** (*iOS only*). You can choose the [appearance of tracks](../../map/tracks-on-map/track-appearance.md).
- **Navigation** (*iOS only*). Starts [navigation](../../navigation/setup/gpx-navigation.md) on the selected track. 
- **Analyze on map (Android) / Analyze (iOS)**. Opens the [Analyse on map](../../navigation/setup/route-details.md#analyse-on-map) tool in Route Details. 
- **Share**. Allows you to share the selected track.
- **Upload modifications to OSM** (*iOS only*). You can [upload the changes](../../plugins/osm-editing.md#gps-track) you have created to *OpenStreetMap*.
- **Edit** (*iOS only*). This item allows you to make changes to the track using the [Plan a route](../../plan-route/create-route.md#modify-gpx-track) tool. 
- **Duplicate** (*iOS only*). Allows you to create a copy of the selected track.
- **Rename**. Item to change the name of the selected track.
- **Move**. Gives you the ability to move the selected track to a specified folder.
- **Export** (*Android only*). You will go to *Menu → Settings → Actions* tab, where you can export all tracks from the folder.
- **Delete**. Deletes the selected track that you do not need.


### Configure map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>* 

![Tracks and Routes](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_1_andr.png)   ![Tracks and Routes](@site/static/img/map/tracks_and_routes/tracks_and_routes_display_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*  

![Context menu of a track in iOS](@site/static/img/personal/tracks/follow_track_1_ios.png)  ![Context menu of a track in iOS](@site/static/img/personal/tracks/follow_track_2_ios.png)

</TabItem>

</Tabs>  

1. **Actions**.
- **Search**. Opens the track name search screen with a list of all existing tracks and the ability to sort them.  
- **Cancel**. Closes the Search without applying the changes.
- **Import**. Opens a list of files on your device for importing tracks. In Android, it is located in the 3-dot menu.
- [Change appearance](../../map/tracks-on-map/track-appearance.md) (*Android only, located in the 3-dot menu*). Goes to the option of customising the appearance of the selected tracks.
- **Switch folder** (*Android only*). You can select the required folder from the list, which is especially convenient if there are many folders.

2. **Sort for tracks**

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,show_gpx"/>* 

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*  

![Context menu of a track in iOS](@site/static/img/personal/tracks/my_places_tracks_sort_ios.png) 

</TabItem>

</Tabs>  

Provides convenient [track sorting](#sort-by).  
*For *iOS*, the sorting list in this section is the same as for *Android*.*


### Show tracks on map

Tracks are a separate data layer that can be shown or hidden using the appropriate option in the [Configure map](../../map/configure-map-menu.md#map-data-layers) menu or [My Places](../../personal/myplaces.md) menu. In addition, tapping Tracks item opens [the track selection screen](#single-track-menu), allowing you to choose which track or multiple tracks to display on the map.  

To display a track for a specific profile on the map, you can:
1. Open **Configure map** and select **Tracks**. Then check the required track.  
    You can hide one or more tracks by deselecting them, or hide them all at once by switching off the Tracks option in the Configure map menu: [*Menu → Configure Map → Tracks*](#configure-map).

2. Open the **My Places** menu and then **Tracks**. The *Visible* folder displays the tracks already selected.  
    In the *Rec*, *Import* and other folders, you can select one or more tracks to display on the map by tapping **Show on map** in the [Folder](#folder-menu) or [Track](#single-track-menu) menu. Go to: [*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*](#view-all-tracks).

3. Tap the selected track, and in the **Tracks context menu** using the [*Show / Hide*](../../map/track-context-menu.md#quick-actions) button you can enable or disable the display of the track on the map.


### Open tracks menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tracks and Routes](@site/static/img/personal/tracks/open_tracks_menu_3_andr.png)  ![Tracks and Routes](@site/static/img/personal/tracks/open_tracks_menu_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/open_tracks_menu_3_ios.png)  ![Context menu of a track in iOS](@site/static/img/personal/tracks/open_tracks_menu_2_ios.png)

</TabItem>

</Tabs>

**Places from which tracks can be opened**.
- [*Plan route → Open existing track*](../../plan-route/create-route.md#menu-options)
- [*Plan route → Add to a track*](../../plan-route/create-route.md#menu-options)
- [*Navigation → Follow track → Select*](../../navigation/setup/gpx-navigation.md#follow-track-menu)
- [*Markers → Groups → Add → Track waypoints*](../../map/point-layers-on-map.md#track-waypoints)
- [*OsmAnd Development → Settings → Simulate your position → Select track*](../../plugins/development.md#gpx-track-simulation)
- [*Quick action → Simulate your position → Select track*](../../widgets/quick-action.md)

With the various tools provided by OsmAnd, you can open the entire track list and track folders on your device.


### Options of Tracks context menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Context menu of a track in Android](@site/static/img/plugins/trip-recording/opt_ofcont_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/plugins/trip-recording/opt_ofcont_menu_ios.png)

</TabItem>

</Tabs>  

When a track is displayed on the map, a context menu appears when you tap it. For detailed information about each available option, see the [Tracks Context menu](../../map/track-context-menu.md) article.  
Options:

- Basic information showing distance, ascent and descent sections, descriptions and quick action buttons such as whether to show the track on the map, its appearance, points and whether to place the track for navigation.
- Graphs for analysing of altitude and speed.
- Tab to view and update points and waypoints.
- Other [options](../../map/track-context-menu.md#options): appearance, analysis of split intervals, sharing, editing, renaming, and more.  

When you tap a track directly on the map, the track context menu appears, where you can see a [basic overview of the track](../../map/track-context-menu.md#overview) as well as a more [analytical data](../../map/track-context-menu.md#altitude--speed-graphs) for investigating the route and making adjustments to [points and waypoints](../../map/track-context-menu.md#points--waypoints), if necessary. You can also edit a track using the [Plan route tool](../../plan-route/create-route.md#opening-plan-route). From the context menu, open a track in this tool and edit it: delete or add points, cut the track before or after a certain point.


#### Change folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![More options in Android](@site/static/img/plugins/trip-recording/change_folder_andr_1.png) ![Change folder in Android](@site/static/img/plugins/trip-recording/change_folder_andr_2.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![More options in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_1.png) ![Change folder in iOS](@site/static/img/plugins/trip-recording/change_folder_ios_2.png)  

</TabItem>

</Tabs>

All recorded tracks are stored in **My Places**, the only place to store them. As you move tracks around, they are moved between folders in My Places. As soon as a new track is created, it is automatically saved in the default My Places folder, which is the same for all new tracks, but you can then move tracks to any other convenient folder.  

You can change the folder for tracks not only using the Folder or Single track menu, but also move tracks with an option in the track context menu.  

- Open the **Context menu** for a track on the map in one of the following ways:  
    - Tap a track in the *My Places → Tracks tab*. The map opens with the Track context menu.
    - Tap the track directly on the map.  
    In either case, make sure the track is visible on the map.  
- Tap **<Translate android="true" ids="shared_string_options"/>** (Android) / **Actions** (iOS).
- In the *<Translate android="true" ids="shared_string_options"/> list* that opens, tap **<Translate android="true" ids="change_folder"/>**.
- Select the folder to which you want to move the track.   

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

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png) 

</TabItem>
 
</Tabs>  

Tap the &#x1F50D; button at the top of the device screen to open the track list sorting menu. 

Available:
- Search by track name.
- [*Sort by*](#sort-by) for better search if you can't remember the title.
- [*Filter*](#filter) (Android only) if you need the specific characteristics of the track.


### Three-dots menu

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

- [**Add smart folder**](../tracks/smart-folder.md#create-smart-folder) (*Android only*). This is a tool for automating data organization. Folders automatically sort routes and tracks according to specified criteria. 

- [**Import**](#import). If you have tracks you want to add to OsmAnd, you can use the import function to upload files from your device.


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

:::note
**In iOS,** you can use sorting using *Menu → Configure Map → Tracks*.
:::


## Import / Export track

### Import

There are two primary methods for importing a track file into OsmAnd:

1. **Direct File Import.**  
    - You can import a track by directly tapping a GPX, KML or KMZ file. This can be done from various sources such as messaging applications, email, Google Drive or file managers. When tapped, the file is suggested to open in the OsmAnd app. Once imported, the track is saved in the **Import** folder in the *My Places* menu. The process is as follows: Tap the required GPX file and then open it in the OsmAnd app.

2. **Import using the *My Places* menu.**
    - Tracks can also be imported through the *My Places* menu in the OsmAnd app. Navigate to this menu and select the *Tracks* option to import your GPX files. Additionally:
        - For **single-track GPX files**, select the file to import as is.
        - For **multi-track GPX files**, you have the option to save as a single GPX track or select specific tracks for import.

3. Tracks manually added to the OsmAnd folder on your device are automatically imported without the need to restart the application.  


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

There are several ways to export one or more track files to any messenger, email, file managers, Drive or app.  

1. By [*Track Context menu → Share*](../../map/track-context-menu.md#options).
2. By *My Places menu → Tracks → Folfer / Track menu*. 
    - For [**single track export**](#single-track-menu), select the track to import as is.
    - For [**multi-track export**](#folder-menu), select the required folder.
3. By [*Local backup file*](../../personal/import-export.md#export-to-file). Exporting GPX-tracks as OSF-file.


### Export GPX file to an external storage device (iOS)

![Export with Context menu in iOS](@site/static/img/plugins/trip-recording/cont_menu_in_myplaces_ios.png) 

To export a GPX file to an external storage, do the following: 

- Open the [Context menu](../../map/track-context-menu.md) of a track on the map in one of the following ways:
    - By tapping a track in My Places, the map shows up with the context menu opened for the track.
    - By tapping a track directly on the map.  
    In any case, make certain the track is visible on the map. 
- Tap **<Translate ios="true" ids="shared_string_export"/>**.
- Select the desired storage for exporting the GPX file. 


