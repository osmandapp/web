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


## Overview {#overview}

All tracks in OsmAnd are stored in a tab in the *<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*. OsmAnd processes the track file in [GPX format](https://en.wikipedia.org/wiki/GPS_Exchange_Format), but [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) & [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) can be imported and converted to GPX. Read more about different types of tracks in the article [Tracks on map](../../map/tracks/index.md#types-of-tracks).

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Manage track Overview Android](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Manage track Overview iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>

</Tabs>


## Create a Track {#create-a-track}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Plan a route modify-track-android](@site/static/img/plan-route/plan-route-modify-track-android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Plan a route modify-track-ios](@site/static/img/plan-route/plan-route-modify-track-ios.png)

</TabItem>

</Tabs>

You can add tracks in OsmAnd in the following ways:

1. **[Import](./manage-tracks.md#import--export-track)** a track from an external source.
2. Create a new track in the application using **[Plan a route](../../plan-route/create-route.md)** tool.
3. Record track in the application using **[Trip recording](../../plugins/trip-recording.md)** plugin.
4. Enter multiple points by coordinates and save them as a track using the **[Coordinate input](../../plan-route/coordinate-input.md)** tool.
5. You can also add **Waypoints** to a new track via **[Context menu](../../map/map-context-menu.md#-add--edit-track-waypoint)**.


## Manage Tracks {#manage-tracks}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

All tracks ever recorded, created, or imported are automatically displayed in the [My Places](../../personal/myplaces.md) folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.


### Track Menu {#track-menu}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/one_track_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/one_track_menu_ios.png)

</TabItem>

</Tabs>  

Each track, like folders, has a menu, allowing you to manage tracks efficiently. Here is how to access it:

- *Android* - tap the *three-dot menu* in the track field.
- *iOS* - long tap the required track in the list.

The menu provides the following actions:

- **Show/Hide on map** — Displays or hides the selected tracks on the map, visually representing their location.

- [Open](../../map/tracks/index.md#configure-map) (*iOS*) — This setting is available in the Configure Map menu. Located in the *<Translate ios="true" ids="shared_string_menu,configure_map,shared_string_gpx_tracks"/>*, it allows you to access the [context menu of the selected track](../../map/tracks/track-context-menu.md) when tapped.

- **Appearance** (*iOS*) — Customize the [appearance of tracks](../../map/tracks/appearance.md) to suit your preferences.

- **Navigation** (*iOS*) — Initiates [navigation](../../navigation/setup/gpx-navigation.md) along the selected track.

- **Analyze on map** (*Android*) / **Analyze** (*iOS*) — Opens the [Analyze on map](../../navigation/setup/route-details.md#analyze-on-map) tool within Route Details for further analysis.

- **Share** — Enables sharing of the selected track with others.

- **Upload modifications to OSM** (*iOS*) — [Upload the changes](../../plugins/osm-editing.md#gps-track) you have made to the track directly to *OpenStreetMap*.

- **Edit** (*iOS*) — Use the [Plan a route](../../plan-route/create-route.md#modify-gpx-track) tool to modify tracks.

- **Duplicate** (*iOS*) — Creates a copy of the selected track.

- **Rename** — Change the name of the selected track for better organization.

- **Move** — Allows you to relocate the selected track to a different folder.

- **Export** (*Android*) — Navigate to *Menu → Settings → Actions* tab to export all tracks from a folder.

- **Delete** — Permanently remove the selected track that is no longer needed.


### Search {#search}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks seach function Android](@site/static/img/personal/tracks/my_places_tracks_search_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks seach function iOS](@site/static/img/personal/tracks/my_places_tracks_search_ios.png)

</TabItem>

</Tabs>  

Tap the &#x1F50D; button at the top of the device screen to open the track list sorting menu.  

Available:

- Search by track name.
- [Sort by](#sort-by) for better search if you can't remember the title.
- [Filter](./smart-folder.md#search-filter) (*Android only*) if you need the specific characteristics of the track.


### Selection Mode {#selection-mode}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/manage_tracks_selection_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks iOS](@site/static/img/personal/tracks/manage_tracks_selection_mode_2_ios.png)

</TabItem>

</Tabs>  

The **Select** menu item provides options for managing folders and tracks. This feature allows you to select multiple tracks or track folders. You can also select all tracks and folders by tapping the special **Select All** button.

Once you have made your choice, the following steps are provided:  

- **Show on map** — With this feature, you can display the selected tracks on the map to better understand their location and relationship to each other.

- **Share** (*Android*) / **Export** (*iOS*) — If you want to share selected data with other users or save it to a cloud service, the *Share/Export* feature allows you to send tracks and folders using different sharing methods.

- **Upload to OpenStreetMap** — You can submit selected tracks to OpenStreetMap, contributing to the development and improvement of the data.

- **Move** — You can organize your data by moving selected tracks and folders to other folders.

- [Change activity](../../map/tracks/track-context-menu.md#track-activity-type) — This action allows you to change the activity type, for example to *Car*, *Adventure Motorsport*, *Backpacking* or others, for the selected track.

- [Change appearance](../../map/tracks/appearance.md#change-appearance-for-multiple-tracks) — This option allows you to customize the appearance of selected tracks, making them more visible and recognizable on the map.

- **Delete** — If the selected tracks or folders are no longer needed, the Delete function allows you to delete them, with the app providing confirmation options to avoid accidental deletion.


### Sort Tracks {#sort-by}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_ios.png)

</TabItem>

</Tabs>  

OsmAnd offers an easy way to sort your tracks, helping you manage a large collection or quickly find specific features. To access the sort menu, tap **Sort by** at the top of the tracks list.

***Sorting options:***

- **Nearest** — Shows tracks closest to your current location.
- **Last modified** — Displays tracks sorted by their most recent modification date.
- **Name: A - Z** — Arranges tracks alphabetically from A to Z.
- **Name: Z - A** — Arranges tracks alphabetically from Z to A.
- **Newest date first** — Lists tracks by creation date, with the newest at the top.
- **Oldest date first** — Lists tracks by creation date, with the oldest at the top.
- **Longest distance first** — Displays tracks sorted by length, with the longest at the top.
- **Shortest distance first** — Displays tracks sorted by length, with the shortest at the top.
- **Longest duration first** — Sorts tracks by duration, placing the longest at the top.
- **Shorted duration first** — Sorts tracks by duration, placing the shortest at the top.

### Sorting Subfolders {#sorting-subfolders}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_sort_by_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![My places tracks sort function iOS](@site/static/img/personal/tracks/my_places_tracks_sort_by_ios.png)

</TabItem>

</Tabs>

If you want to sort [subfolders](#folder-actions), go to the three-dot menu within the selected folder and select the required [options](#sort-by).  

The selected sorting option is applied not only to the current subfolder but also to all nesting folders and tracks at all levels. This ensures a consistent structure across your saved data.


## Track Folder {#track-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Tap the *three-dot menu* in the folder field to **open** the folder menu.

![import multitrack](@site/static/img/personal/tracks/tracks_folder_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">

> Long tap on the folder field to **open** the folder menu.

![Context menu of a track in iOS](@site/static/img/personal/tracks/folder_menu_2_ios.png)

</TabItem>

</Tabs>

Track folder menu lets you view, rename, export, and manage folders.


***Actions with a folder:***

- **Name** — Displays the folder name, creation date, and the number of tracks it contains.
- **Show all tracks on the map** (*Android only*) — Displays all tracks in the folder on the map. If there are many tracks, this may cause the device to freeze.
- **Edit name** (*Android*) / **Rename** (*iOS*) — Allows you to rename the folder.
- [Change default appearance](../../map/tracks/appearance.md) (*Android*) / **Appearance** (*iOS*) — Changes the display appearance of all tracks in the folder.
- [Export](../../personal/import-export.md) — Opens the *Menu → Settings → Actions* tab to export all tracks in the folder as an [`.osf` file](../../personal/import-export.md#export).
- [Move](#track-folder) — Allows you to move the folder to another existing folder or create a new one.
- [Delete folder](#delete-folder) — Deletes the folder after confirmation. ***This action is irreversible.***


### Folder Statistics {#folder-statistics}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/dashboard_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/dashboard_2_ios.png)

</TabItem>

</Tabs>

At the bottom of the list in the *Tracks* tab, and below the list of tracks **in each of your folders**, there is an information section that allows you to view the overall summary statistics for the tracks in the selected folder. All values are displayed in the [units](../../personal/profiles.md#units--formats) you have selected.

- *Number of **Tracks** in the folder* — Displays the number of tracks contained in the selected folder.
- *Total sum of* **Distances** — The total length of all tracks in the selected folder, measured in the units you have selected, is displayed.
- *Sum of* **Uphills** — The data indicates the total vertical rise across all tracks in the selected folder.
- *Sum of* **Downhills** — This parameter is the sum of vertical descents on all tracks in the selected folder.
- *Sum of* **Duration** *time* — This displays the total time taken to complete all tracks in the selected folder.
- *Total **Size** of downloaded files in MB* — The total downloaded file size in megabytes shows how much space all tracks in the selected folder take up on your device.


### Folder Actions {#folder-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks sort function Android](@site/static/img/personal/tracks/my_places_tracks_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/>*

![My places tracks iOS](@site/static/img/personal/tracks/my_places_tracks_menu_ios.png)

</TabItem>

</Tabs>

The actions in the folder help you organize, sort and import tracks, to structure your navigation data.  

How to open folder actions:

- Open the Tracks tab in My Places.
- Navigate to the folder you want to manage.
- Tap the *three-dot menu* in the upper-right corner to open the folder actions menu.

***Actions in the folder menu:***

- [Select](#selection-mode) — Tap the required folders and tracks to apply actions from the menu in *selection mode*.
- [Sort subfolders](#sort-by) — Apply a sorting order (e.g., by name, date) to all subfolders and tracks at every level.
- [Add smart folder](../tracks/smart-folder.md#how-to-create-smart-folder) — Automatically sort routes and tracks based on criteria you set.
- [Import](#import) — Upload GPX or other track files from your device to OsmAnd for offline use.
- **Add new folder** — To organize your routes and tracks into logical categories, put them in different folders. This helps to structure your navigation information.


### Delete Folder {#delete-folder}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/tracks_delete_folder_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![Context menu of a track in iOS](@site/static/img/personal/tracks/tracks_delete_folder_ios.png)

</TabItem>

</Tabs>  

You can delete a folder with all the tracks it contains. To do this:

- Tap the *three-dot menu* in the folder field to delete.
- At the bottom of the menu, find the **Delete Folder** option.
- ***NOTE: This action is irreversible.***


## Import / Export Track {#import--export-track}

### Import {#import}

Import tool allows you to add tracks from external files for offline navigation and analysis. Methods for importing tracks:

1. **Direct file import:**

    - Tap a GPX, KML, or KMZ file from messaging apps, email, Google Drive, or file managers.
    - Select Open in OsmAnd when prompted.
    - The imported track is saved in the **Import** folder in the *My Places*.
    - Steps: Tap the GPX file → Open in OsmAnd.

2. **Import using the *My Places* menu:**

    - Open the *My Places menu → Tracks*.
    - Select the GPX file to import.

    *Additional options:*

    - **Single-track GPX files** - import the entire track directly.
    - **Multi-track GPX files** - choose to import the single GPX file or select specific tracks.

***NOTE:*** *Tracks manually added to the OsmAnd folder on your device are automatically imported without restarting the application.*  


### Export {#export}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![import multitrack](@site/static/img/personal/tracks/import_multitrack.png) ![import multitrack](@site/static/img/personal/tracks/import_multitrack_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

| Export | Import |
|:------------|:---------------|
| ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_1.png) <details><summary> Export </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios.png) </details> | ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_3.png) <details><summary> Export </summary> ![import multitrack](@site/static/img/personal/tracks/import_gpx_ios_2.png) </details> |

<!--
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
-->

</TabItem>

</Tabs>

There are several ways to export one or more track files to any messenger, email, file manager, or app.  

1. By [*Track context menu → Share*](../../map/tracks/track-context-menu.md#options).

2. By *My Places menu → Tracks → Folder / Track menu*:

    - To [**export a single track**](#track-menu), select the menu of the track.
    - To [**multi-track export**](#track-folder), select the menu of the required folder.

3. By [Local backup file](../../personal/import-export.md#export-to-file). Exporting GPX tracks as `.osf` files.


## Related Articles {#related-articles}

- [Show track on Map](../../map/tracks/index.md)
- [Analyze on Map](../../map/tracks/index.md#analyze-track-on-map)
- [Track Context menu](../../map/tracks/track-context-menu.md)
- [Navigation by track](../../navigation/setup/gpx-navigation.md)
- [Trip recording](../../plugins/trip-recording.md)


