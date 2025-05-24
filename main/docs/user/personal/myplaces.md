---
sidebar_position: 6
title:  My Places
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>

## Overview

**My Places** is the central hub in the OsmAnd app for managing and customizing all personal data. You can use this section to organize [Favorite points](#favorites) marked as important or frequently visited. The [Tracks](#tracks) tab allows you to view, import, record, and create GPX files to help you keep a detailed history of your routes and travels. You can also manage your [OpenStreetMap Edits](#openstreetmap-edits), making contributing to map improvements and updates easy. The [Audio / Video Notes](#audiovideo-notes) plugin and widgets allow Android users to create and save multimedia notes related to specific locations, adding context to their travels.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu"/> → My Places*  

![My Places android](@site/static/img/personal/my_places_android.png) ![My places menu Android](@site/static/img/personal/my_places_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu"/> → My Places*  

![My Places ios](@site/static/img/personal/my_places_ios.png)  ![My places menu iOS](@site/static/img/personal/my_places_menu_ios.png)

</TabItem>

</Tabs>

- [***Import and export data***](../personal/import-export.md):  

    All data stored in the *My Places* menu can be moved using a special `.osf` format through applications on your device. This process simplifies saving and transferring data between devices and allows you to share it with other OsmAnd users.  

    **Go to** *<Translate android="true" ids="shared_string_menu,shared_string_settings"/>* section and select whether to export or import data. If you select *export*, you will need to expand *My Places group* and check the required data.

- [***Maps & Resources***](../personal/maps-resources.md):  

    *Maps & Resources* *Main Menu* item of the OsmAnd application provides access to data management from the *My Places* section. The [*Local*](../personal/maps-resources.md#local) tab shows you how much space is occupied by all existing OsmAnd data on your device, and the *My Places* section is in particular. You can use it to get detailed information about your data and access to manage it. The section can only contain items for which data has been downloaded.  

    **Go to** *<Translate android="true" ids="shared_string_menu,maps_and_resources,download_tab_local"/>*. Check and manage your data.


## Favorites

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Favorites menu android](@site/static/img/personal/favorites_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Favorites menu iOS](@site/static/img/personal/favorites_menu_tab_ios.png)

</TabItem>

</Tabs>

**Favorites** allow you to bookmark important or frequently visited locations. These favorite points are organized in folders and can be customized with different colors, shapes, and icons. You can quickly navigate to any favorite place through the **My Places** menu without needing to search for it repeatedly.


1. ***Action buttons***. *Action buttons* at the bottom of the My Places screen allow you to manage the list of folders with your favorites:  

    - **Import** (*Add* button) — Allows you to import *favorite.gpx* files from your device storage.

    - **Export** — Save your favorite points as a *favorites.gpx* file for external use or backup.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** (*Android only*) — You can add any favorite point or the entire list of favorite points in a folder to the [Map markers list](../personal/markers.md).

    - **Delete** (*on iOS, this option is located in the Edit menu*) — Deletes favorite points one at a time or selected favorite folders and all points contained in them.

2. ***Three-dot menu*** (*Android*) and ***long tap*** (*iOS*). Use the *three-dot* menu next to each folder or *long tap* the folder to manage groups of favorites:  

    <Tabs groupId="operating-systems">

    <TabItem value="android" label="Android">

    ![Three-dot menu](@site/static/img/personal/favorites_three-dot_menu.png)

    </TabItem>

    <TabItem value="ios" label="iOS">

    ![Favorites menu iOS](@site/static/img/personal/favorites_long-tap_ios.png)

    </TabItem>

    </Tabs>

    - **<Translate android="true" ids="shared_string_rename"/>** — Use this option to change the name of the selected folder.

    - **<Translate android="true" ids="change_default_appearance"/>** — Customize how the favorite points in the folder appear on the map by changing their icons, colors, or labels.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** or **Hide on map** — Toggle this option to display or hide the favorite points from the folder on the map.

    - **<Translate android="true" ids="shared_string_add_to_map_markers"/>** or **Remove from map markers** (*Android only*) — Add all favorite points from the folder to the *Map markers list* or remove them as needed for easy reference.

    - **<Translate android="true" ids="shared_string_share"/>** — Share the favorite points in the folder by exporting them as a *Favorites.gpx* file, making it easy to transfer or back up your data.

    - **<Translate android="true" ids="shared_string_delete"/>** — Permanently delete the selected favorites folder and all the points within it.

For more detailed instructions, refer to the [Favorites](../personal/favorites.md) article.


## Tracks

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_files"/> tab*

![My Places with tracks in Android](@site/static/img/personal/tracks/view_all_tracks_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_my_places,shared_string_gpx_tracks"/> tab*

![My Places with tracks in iOS](@site/static/img/personal/tracks/my_places_tracks_menu_1_ios.png)

</TabItem>

</Tabs>

**Tracks** offer powerful tools for recording, creating, and managing routes within OsmAnd. They can be used for [navigation](../navigation/setup/gpx-navigation.md), [trip recording](../plugins/trip-recording.md), or [integrating](../personal/tracks/manage-tracks.md#import) external GPX files.

- **Tracks tab** — All tracks ever recorded, created, or imported are automatically displayed in the *My Places* folder in the *Tracks* tab. They are organized by folder or displayed in a list below them.

- **Create a track** — Start recording using the **Tracks Tab** or the [Trip recording plugin](../plugins/trip-recording.md).

- **View and Edit** — Access the list of tracks through *My Places* and manage them using the *three-dot menu* for [folders](../personal/tracks/manage-tracks.md#folder-menu) or the [single track](../personal/tracks/manage-tracks.md#single-track-menu) menu.

- **Manage** — Use the [Filter](../personal/tracks/smart-folder.md#filter) and [Smart folder](../personal/tracks/smart-folder.md#smart-folder) tools to organize tracks based on specific parameters.

- **Appearance and Analysis** — [Customize](../map/tracks/appearance.md) the visual style of tracks and [analyze](../map/tracks/index.md#analyze-track-on-map) them using OsmAnd's [Plan a Route](../plan-route/create-route.md) tool.

For comprehensive guidance, see the [Manage Tracks](../personal/tracks/manage-tracks.md) article.


## OpenStreetMap Edits

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_my_places,osm_edits"/>*

![Share](@site/static/img/plugins/osm-editing/my_places_osm.png)

</TabItem>

</Tabs>

OsmAnd's **OpenStreetMap Edits** feature enables you to contribute to the global mapping community by adding, modifying, or commenting on map data.

1. ***Action buttons***. You can use the *action buttons* on the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/osm-editing/osm_plugin_export.png)

    - **Upload files to OSM** — Send your notes and data to OpenStreetMap to contribute to the community.

    - **Export** (*Android only*) — Save your notes and POIs as files for external use or backup, with options to export as OSM notes, POIs, or all data combined.

    - **Delete** — Remove selected items from your list permanently.


2. ***Three-dot menu***. You can manage specific POIs or notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/osm-editing/osm_plugin_three-dot_menu.png)

    - **Upload edit to OSM** — Submit your changes or edits to OpenStreetMap for others to see.

    - **Show on map** — Display the specific location of the POI or note on the map.

    - **Modify OSM change/note** — Make further edits to the POI or note that have already been added to OpenStreetMap.

    - **Delete** — Remove the selected POI or note from your list.

Refer to the [OSM Editing plugin](../plugins/osm-editing.md) for step-by-step instructions.


## Audio/Video Notes

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/my_places_a-v_notes.png)  

The **Audio/Video Notes plugin** allows you to create multimedia notes linked to specific map locations. These notes are stored in **My Places** under the **A/V Notes Tab**.

1. ***Action buttons***. You can use the *action buttons* at the bottom of the My Places screen to manage your list of notes:  

    ![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx_2.png)

    - **<Translate android="true" ids="shared_string_sort"/>** — Opens a selection of sorting methods, *By type* or *By date*, and when selected, sorts the list accordingly.

    - **<Translate android="true" ids="shared_string_share"/>** — Displays a checklist of all notes, including those added to GPX files as waypoints. First, the required notes are checked, then the *Share* icon in the upper right corner of the screen suggests available sharing options, and finally, these notes become available according to the selected option.

    - **Share with GPX waypoints** — You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

    - **<Translate android="true" ids="shared_string_delete"/>** — Displays a checklist of audio, photo, and video notes only. First, check the unnecessary notes, then tap the *Delete* icon in the upper right corner of the screen, after confirming, the selected notes will be deleted permanently.


2. ***Three-dot menu***. You can manage specific audio, video, or photo notes using the *three-dot menu* next to each note:  

    ![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

    - **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>** — Views or listens to the selected audio, video, or photo note directly.

    - **<Translate android="true" ids="shared_string_share"/>** — Shares the note with others through various apps or platforms.

    - **<Translate android="true" ids="shared_string_show_on_map"/>** — Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.

    - **<Translate android="true" ids="shared_string_rename"/>** — Change the name of the note to something more descriptive or relevant.

    - **<Translate android="true" ids="shared_string_delete"/>** — Selected notes are permanently deleted from your collection.

For more information, visit the [Audio/Video Notes plugin](../plugins/audio-video-notes.md) page.


<!--
### Share with GPX Waypoints

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You can share the notes selected as waypoints in the *My Places* menu by adding [GPX data](../plugins/audio-video-notes.md#share-with-gpx-waypoints) to them using the **Share** button at the bottom of the *A/V notes* tab screen.

### Manage Single Note

![Three-dot menu](@site/static/img/plugins/audio-video-notes/my_places_a-v_three-dot_menu.png)

You can manage specific audio, video, or photo notes using the **three-dot menu** next to each note:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Views or listens to the selected audio, video, or photo note directly.
- **<Translate android="true" ids="shared_string_share"/>**. Shares the note with others through various apps or platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Displays the related location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note to something more descriptive or relevant.
- **<Translate android="true" ids="shared_string_delete"/>**. Selected notes are permanently deleted from your collection.
-->

## Related Articles

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in March 2025*
