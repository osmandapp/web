---
sidebar_position: 2
title:  Audio / Video Notes
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

<InfoAndroidOnly />

## Overview  

Your audio and video recordings can be useful in the future, such as memories of where you've been. They are available in the [My Places](../personal/myplaces.md) menu and are visible when the Audio/Video Notes plugin is enabled.

The Audio/Video Notes plugin extends OsmAnd's functionality by allowing the user to create their own notes in various formats, such as photos, video, or audio, and associate them with their geographic location or current location. You can make recordings only when the plugin is on, using the [Audio/Video Notes widget](../widgets/info-widgets.md#-audio-video-notes-widget) and/or the [Map context menu](../map/map-context-menu.md#-audiovideo-note). The received data is automatically saved in [My Places](../personal/myplaces.md), from where it can be conveniently managed and shared.  

All created audio and video notes compose the Record layer. When enabled on the map, it changes the view of the recorded data and there are more settings to manage the recordings. In the Record layer, audio and video notes are placed as POIs on the map, thus creating a user narrative visible only to the device owner.  

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png)


## Setup

The audio/video notes are provided with the Audio/video notes plugin, and require the following setup:

1. Enable the [Audio/video notes plugin](../plugins/index.md#enable--disable) in the Plugins section of the Main menu.  
2. Add a [widget](../widgets/info-widgets.md#-audio-video-notes-widget) to the map screen for the most convenient use.
3. Customize the [recording settings](#plugin-settings) for each profile, if necessary.  


## Plugin Settings

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)

For each profile, you can configure the *audio and video recording options*.  

| Parameter | Description |
| --- | --- |
| **<Translate android="true" ids="camera_app"/>**  | You can choose whether to use the system app or the OsmAnd camera to take <Translate android="true" ids="photo_notes"/>.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | Sets the size of the photos to be taken. The camera capabilities of the device determine the number of available options. If no option is selected, the app uses the size from the system settings of the device's camera. |
| **<Translate android="true" ids="av_camera_focus"/>** | Establishes the method of how camera focus is set. The number of available options is determined by the capabilities of the device camera. Basically, there are three following  options: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; and *<Translate android="true" ids="av_camera_focus_infinity"/>*. **Autofocus** is the most popular one and establishes the automatic mode for the camera; **continuous** makes the camera detect movements and refocus accordingly; and the **infinity** option makes the lens focus on a distance and thus keep objects in focus no matter how far it is. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | If enabled, a sound is produced when the camera makes a shot. Please note, that as required by privacy law, **in some countries devices will not have a camera shutter mute switch**. If you use the system app, sound should be disabled in the camera app. |
| **<Translate android="true" ids="av_audio_format"/>** | Provides a choice of formats for an audio file. The number of available options, and which one is used by default, is determined by the parameters of a specific device. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | This option provides a choice of bitrate options for an audio file to be created in. The available bitrate options range from 16kbps to 128 kbps, or the Default option. The Default parameter is determined by your device's “default” microphone settings. |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** | If enabled, OsmAnd uses the system application to record video in <Translate android="true" ids="video_notes"/>. |
| **<Translate android="true" ids="av_video_quality"/>** | This provides a choice of options that determine the format of the output image. The range of available options is determined by the parameters of a specific device. The default option is the *Highest quality* option.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | If enabled, old video recordings will be automatically re-written and replaced with new video recordings if the storage size reaches the size limit.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | This determines the upper time limit for recorded video clips. There are options with a range from 1 minute to 30 minutes.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | This establishes the size of the storage intended for recorded video. There are options with the range from 1024 MB to 62 GB. A specific range of options, and the default option, is determined with the parameters of a specific device. A system message will remind you of the storage size reaching the established limit. |
| **<Translate android="true" ids="notes"/>** | This option re-directs you to the [Audio/video notes in My Places](../personal/myplaces.md) - central storage of all Audio/video notes ever made in the app. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | You can establish the default values for all of the A/V notes settings.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | Opens a dialog to select a profile to copy the Audio/video note recording configuration from, and establish it for the current profile. |


## Manage a Single Note

You can manage your information, thoughts, ideas, etc. tied to a geographical place, as follows:

- Create a note.
- View all notes as a list in [My Places](../personal/myplaces.md).
- Show the specific note on the map.
- Rename a note in My Places.
- Show all notes [on the map](../map/configure-map-menu.md#map-data-layers).
- Play the note.
- Create waypoints in a [track](../plugins/trip-recording.md#gpx-file-details).
- Export to [JOSM](https://josm.openstreetmap.de/).


### Create

You can create a photo, video, and audio note in any of the following ways:

- With the [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android). If the note should be tied to your current geographical position.
- With the [Context menu](../map/map-context-menu.md#-record-av-note-android) of a point on the map. If the note should be tied to the selected point on the map.


#### 1. Create and Tie to your Current Position

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)

The <Translate android="true" ids="map_widget_av_notes"/> widget is used to create a note tied to your current position, and thus, avoid any search for a suitable point for a note on the map. Simply tap the widget, and make the note.  

The functions provided by the <Translate android="true" ids="map_widget_av_notes"/> widget depend on how it is configured in the [Configure screen](../widgets/info-widgets.md#-audio-video-notes-widget-android) menu. The widget either immediately opens the camera to make a note, according to the established settings, or asks first what format to create a note in and then opens the respective recorder dialog.


#### 2. Create and Tie to Selected Geolocation

![Audio video plugin  Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)

To create a note tied to a selected point on the map, use the [Context menu](../map/map-context-menu.md#-record-av-note-android) of the point:

1. Long-tap a point on the map, and the [Context menu](../map/map-context-menu.md) opens.
2. Tap **Actions**, and select one of the available options from the list:

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - to make an audio note and tie it to the selected point on the map;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - to make a video note and tie it to the selected point on the map;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - to make a photo note and tie it to the selected point on the map.

3. Depending on the selected format of the note, the respective recorder dialog opens.


#### Recorder Dialog

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png)

For *audio and video notes*, the audio or video recorder is displayed respectively. You can:

- Stop the recording with the *Stop* icon.
- View the duration of the recording.
- Show or hide the video screen.

It is possible to stop the recording with a tap of the <Translate android="true" ids="map_widget_av_notes"/> widget, regardless of whether the Context menu or the widget started the recording. For *a photo note*, the camera functionality shows up, and you can take a photo, view the result, accept and save it, or take a new photo.

:::info note
Automatically, all photo, audio, and video records are saved to: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> tab.
:::


### View in My Places

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)

[My Places](../personal/myplaces.md) is a central repository for all your notes. It allows you to view all your notes in a sorted list, display a specific note on a map, and manage your entire list of notes.


### Show on the Map

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)

To show a specific note on the map, use the list of notes in My Places, find the needed one, and tap it. As a result, the map shows up, highlights the location of the note, and opens the [Context menu](../plugins/audio-video-notes.md#actions-in-map-context-menu). It is possible to work with the note by selecting the options in the context menu.


### Play

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png) ![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

To play a note, use the respective option in the [Context menu](../map/map-context-menu#-audiovideo-note-android) opened for the note:

- on the map;
- in My Places.

The [Details](../map/map-context-menu#-audiovideo-note-android) section provides more data about the notes, such as latitude and longitude, the date and time of the note, and photos.


### Rename, Delete, Share

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

To manage a note in My Places, tap the vertical triple points of the note in the list, and the available options show up, as follows:

- **<Translate android="true" ids="recording_context_menu_play"/>** / **<Translate android="true" ids="watch"/>**. Open and view the selected video or play the audio note.
- **<Translate android="true" ids="shared_string_share"/>**. Easily share the selected note with others via various platforms.
- **<Translate android="true" ids="shared_string_show_on_map"/>**. Shows the exact location and [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu) of the note on the map.
- **<Translate android="true" ids="shared_string_rename"/>**. Change the name of the note for easier identification.
- **<Translate android="true" ids="shared_string_delete"/>**. Removes notes permanently from the application.


## Recording Widget

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)  

The [Audio/Video Notes widget](../widgets/info-widgets.md#audiovideo-notes-widget) creates notes, photos, audio, and video files and links them to the user's current position. The widget has several options that can be set as the default action performed by the widget when the screen is touched.  

Adding a widget to the screen is necessary if you prefer to avoid searching for geolocation on the map and link notes to your current default location. To add or customize a widget, follow the steps below:  

1. Go to:  
    *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*

2. Select  **<Translate android="true" ids="map_widget_left"/>** or **<Translate android="true" ids="map_widget_right"/>**.

3. Tap **<Translate android="true" ids="map_widget_av_notes"/>**, and the context menu of the widget opens.

4. Select the option you prefer to use by default by tapping on the widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - open a selection of options.

    - **<Translate android="true" ids="av_def_action_audio"/>** - start recording an audio message.

    - **<Translate android="true" ids="av_def_action_video"/>** - start recording video.

    - **<Translate android="true" ids="av_def_action_picture"/>** - start taking photos.

    ![The widget](@site/static/img/plugins/audio-video-notes/widget.png)  


## Manage Multiple Notes

### Manage in My Places

![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)  

The options on the bottom bar can be used to manage the list of notes in [*My Places*](../personal/myplaces.md#audiovideo-notes) menu.


### Share with GPX Waypoints

*<Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>*

![Share](@site/static/img/plugins/audio-video-notes/my_places_a-v_share_gpx.png)

You could share all Notes including [GPX](../plugins/audio-video-notes.md#waypoints-created-from-notes) that has selected notes as waypoints on [*My Places*](../personal/myplaces.md#audiovideo-notes) screen by clicking on bottom menu button share. A checkbox will appear next to each note to select specific notes. There are two checkboxes above the notes: *A/V notes by date* to select all notes and the *Locations* checkbox. The *Locations* checkbox allows you to add a separate GPX file with coordinates and data.  

Each note contains the time it was created, the amount of data, and if it is a record, the time of recording, and location data, you can add GPX data.  
Supported file formats: audio - **3gp**, video - **mp4**, photo -**jpg**.


### Show All on the Map

*<Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>*

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

Displayed on the map notes can tell your story, where you spotted signs, what door you needed to open, where the exit is, the optimal path, and more. You can show notes [one at a time](#show-on-the-map) or all at once.

Use the [*Recording*](../map/point-layers-on-map#-audio--video-points-android) map layer to show or hide all notes. If you turn it on in the [Configure map](../map/configure-map-menu) menu, the Recording layer shows all notes on the map.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)


## Waypoints Created from Notes

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png) ![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)

A waypoint is created when an audio, video, or photo note is added to a track. Waypoints exist within a track. If a track is visible, its waypoints are also visible. Thus, these notes can be visible on the map all at once or only on a specific visible track. In the latter case, the notes are displayed as waypoints of the track.

:::note
If a track is exported, the waypoints cannot be viewed, or played, because audio/video/photo notes are stored on the device only, and available only to the user of that device.
:::


### Create Waypoints

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)

There are two ways to create a waypoint: automatically and manually.

1. **Automatically**, a waypoint is created, in case the user takes an audio/video/photo note when the [Trip recording](../plugins/trip-recording) is in progress, regardless of the geolocation if it is tied to the current position or any place, and thus, regardless of the means used for that: if it is the [Widget](../widgets/info-widgets#-audio-video-notes-widget-android), or the [Context menu](../map/map-context-menu#-audiovideo-note-android).

    All waypoints added automatically get an automatically assigned name. The name is created, according to the format specified below for an audio/video/photo file, and has a [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). The example of the waypoints in the figure above shows automatically and manually created waypoints, where the first four were created automatically, and the last one - manually.

2. **Manually**, a waypoint is created via the [Context menu](../map/map-context-menu#-audiovideo-note-android), as follows:

    - Select the required audio/video/photo note on the map.
    - Tap **Actions**, and then tap **Add track**.
    - Select the track to which you intend to add a waypoint.
    - The *<Translate android="true" ids="quick_action_add_gpx"/>* dialog opens, and allows the user to set some properties, such as the name to the waypoint, an icon, color, and others. Once done, tap **Save**.

:::info note
You can specify names for each waypoint created manually.
:::


### View Waypoints

- A waypoint is available for viewing as a waypoint on the map and in the list of [waypoints of a specific track](../map/tracks/track-context-menu.md#points--waypoints). Deleting the waypoint does not delete the respective audio/video/photo note.

- An audio, video, or photo note is available for viewing on the map and in the list of A/V notes in [My Places](../plugins/audio-video-notes#view-in-my-places). Deleting the audio, video, or photo note does not delete the respective waypoint.

- On the map, a waypoint and an audio, video, or photo note may or may not be visible on the map. It is determined by what layer is currently toggled on for the profile.

- When neither Tracks nor Recording layer is toggled on, both waypoints and notes can be shown by tapping them in My Places. In this case, the map shows the locations of the tapped note, or respectively, the locations of all waypoints of the tapped track.

| Visible | Layer toggled on |
| --- | --- |
| Only waypoints | Tracks layer |
| Waypoints and notes | Tracks and Recording layer |
| Only notes | Recording layer |
| None | Neither Tracks, not Recording layer. |


### GPX File with Waypoints

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)

If viewing the GPX file of the track added with a waypoint from an audio/video/photo note, the waypoint will be like in the example below, having the coordinates, the timestamp, the name of the respective note, and the short link.


## Miscellaneous

### File Name Details

The <Translate android="true" ids="audionotes_plugin_name"/> plugin generates audio/video/photo files in the following format:

    {SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}

where `SHORTLINK_LOCATION` specifies the latitude and longitude of the location to which the file is bound. The `SHORTLINK_LOCATION` is encoded, according to the specification of the [Shortlink](https://wiki.openstreetmap.org/wiki/Shortlink).


### Export to JOSM

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)

To view everything later, you can export the track along with all the media files and view them in the [JOSM editor](https://josm.openstreetmap.de/). Note that the media files must be placed in the appropriate folder. You can find out which one by clicking on the video. A notification will appear showing that there is no file available, place the correct file in the specified folder.  


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in May 2023*
