---
sidebar_position: 2
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



## Overview

All tracks in OsmAnd are stored in the folder: *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. Track file is processed by OsmAnd in [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format, however [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) could be imported and transformed to GPX. Read more about different types of tracks in [Tracks on map](../../map/tracks/index.md#types-of-tracks) article.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>


## Create a Track


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>
 
</Tabs>



You can add tracks in OsmAnd in the following ways:
1. **[Import](./manage-tracks.md#import--export-track)** a track from an external source.
2. Create new track in the application using **[Plan a route](../../plan-route/create-route.md)** tool.
3. Record track in the application using **[Trip recording](../../plugins/trip-recording.md)** plugin. 
4. Enter multiple points by coordinates and save as a track using **[Coordinate input](../../plan-route/coordinate-input.md)** tool.
5. You can also add **Waypoints** to a new track via **[Context menu](../../map/map-context-menu.md#-add--edit--track-waypoint)**.


## Manage Tracks


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


### Track Menu

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

- *Android* - tap the three-dot menu in the field with the required track.
- *iOS* - long tap the required track in the list.

Menu with actions:

- **Show on map**. Displays selected tracks on the map to provide a visual representation of their location.
- **Appearance** (*iOS only*). You can choose the [appearance of tracks](../../map/tracks/appearance.md).
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
- [*Filter*](./smart-folder.md#search-filter) (*Android only*) if you need the specific characteristics of the track.

### Selection Mode

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_selection_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_selection_ios.png)

</TabItem>

</Tabs>  

The **Select** menu item provides options for managing folders and tracks. This feature allows you to select multiple tracks or track folders. You can also select all tracks and folders by tapping the special **Select All** button.

Once you have made your choice, the following steps are provided:  

- **Show on map**. With this feature you can display the selected tracks on the map to better understand their location and relationship to each other.

- **Share** (*Android*) / **Export** (*iOS*). If you want to share selected data with other users or save it to a cloud service, the *Share/Export* feature allows you to send tracks and folders using different sharing methods.

- **Upload to OpenStreetMap**. You can submit selected tracks to OpenStreetMap, contributing to the development and improvement of the data.

- **Move**. You can organize your data by moving selected tracks and folders to other folders.

- [**Change appearance**](../../map/tracks/appearance.md) (*Android only*). This option allows you to customize the appearance of selected tracks, making them more visible and recognizable on the map.

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



## Track folder

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>  

To open the folder menu, you need to:

- *Android* - tap the three-dot menu in the field with the required folder.
- *iOS* - to make a long tap the field of the folder.

Actions:

- **Name**. Displays the selected folder name, creation date and the number of tracks it contains.
- **Show all tracks on the map** (*Android only*). Shows all tracks in the folder on the map. It is not recommended, if there are a lot of tracks, the device may freeze.
- **Edit name** (*Android*) / **Rename** (*iOS*). Changing the folder name.
- [*Change default appearance*](../../map/tracks/appearance.md) (*Android*) / **Appearance** (*iOS*). You can change the appearance of all tracks in a folder.
- [*Export*](../../personal/import-export.md). You go to the *Menu → Settings → Actions* tab, where you can export all the tracks in the folder as an [OSF file](../../personal/import-export.md#export).
- [**Move**](#change-folder). You can move the selected folder to another existing folder or create a new one.
- [*Delete folder*](#delete-folder). Allow you to delete a folder. A warning message will appear on the display. The deletion will be irreversible.

### Delete Folder

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

- Tap the three-dot menu of the folder you want to delete.
- At the bottom of the menu, find the Delete Folder option.
- **NOTE** that this action is irreversible.


### Folder Statistics

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)  

At the bottom of the list in the *Tracks* tab, and below the list of tracks **in each of your folders**, there is an information section that allows you to view the overall summary statistics for the tracks in the selected folder. All values are displayed in the [units](../../personal/profiles.md#units--formats) you have selected.

- *Number of **Tracks** in the folder*. Displays the number of tracks contained in the selected folder.
- *Total sum of* **Distances**. The total length of all tracks in the selected folder, measured in in the units you have selected, is displayed.
- *Sum of* **Uphills**. The data indicates the total vertical rise across all tracks in the selected folder.
- *Sum of* **Downhills**. This parameter is the sum of vertical descents on all tracks in the selected folder.
- *Sum of* **Duration** *time*. This displays the total time taken to complete all tracks in the selected folder.
- *Total **Size** of downloaded files in MB*. Total downloaded file size in megabytes shows how much space all tracks in the selected folder take up on your device.

### Folder actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_appbar_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_appbar_menu_2_ios.png)

</TabItem>

</Tabs>  

- [**Select**](#selection-mode). This menu item allows you to select the folders and routes you need to manage them further.  

- **Sort subfolder** (*Android only*). The selected sort order on the Tracks tab applies to all levels of subfolders and tracks.

- **Add new folder**. If you need to organize your routes and tracks into logical categories, the app provides the ability to quickly create a new folder and name it. This helps to structure your navigation information.  

- [**Add smart folder**](../tracks/smart-folder.md#create-smart-folder) (*Android only*). This is a tool for automating data organization. Folders automatically sort routes and tracks according to specified criteria.

- [**Import**](#import). If you have tracks you want to add to OsmAnd, you can use the import function to upload files from your device.



## Import / Export Track

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

1. By [*Track Context menu → Share*](../../map/tracks/track-context-menu.md#options).
2. By *My Places menu → Tracks → Folfer / Track menu*.
    - For [**single track export**](#single-track-menu), select the track to import as is.
    - For [**multi-track export**](#folder-menu), select the required folder.
3. By [*Local backup file*](../../personal/import-export.md#export-to-file). Exporting GPX-tracks as OSF-file.


## Related Articles

- [Show track on Map](../../map/tracks/index.md)
- [Analyze on Map](../../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../../map/tracks/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)

> *This article was last updated in July 2024*
