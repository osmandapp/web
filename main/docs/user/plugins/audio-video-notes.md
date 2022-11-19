---
sidebar_position: 7
title:  Audio/video notes
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

<!--<InfoAndroidOnly />-->


:::caution Android only
This plugin is available only for the **Android version** of OsmAnd app.
:::


Your audio and video recordings can come in useful in the future, for example as memories of where you've been. They are available in the "My Places" menu and are visible when Audio/Video Notes plugin is enabled.

## Overview 

The Audio/Video Notes plugin extends OsmAnd's functionality in storing geolocation information by allowing the user to create their own notes in various formats, such as photos, video or audio, and associate them with their geographic location or current location. You can make recordings only when the plugin is on, using the [Audio/Video Notes widget](../widgets/info-widgets.md#-audio-video-notes-widget) and/or the POI context menu. The received data is automatically saved in the central storage, from where it can be conveniently managed and shared.   

All created audio and video notes compose the Record layer. When enabled on the map, it changes the view of the recorded data and there are more settings to manage the recordings. In the Record layer, audio and video notes are placed as POIs on the map, thus creating a user narrative visible only to the device owner.  

![Audio video notes intro](@site/static/img/plugins/audio-video-notes/widgets_view.png) 


## Setup

The audio/video notes are provided with the Audio/video notes plugin, and require the following setup:


1. Enable the [Audio/video notes plugin](../plugins/index.md#enable--disable) in the Plugins section of the Main menu.  
2. If needed, add [the widget](../widgets/info-widgets.md#-audio-video-notes-widget) to the device screen.  
3. If needed, configure [the recording settings](#plugin-settings) per profile.  


## Plugin settings

For every profile, it is possible to configure the recording settings. 

**Android**: <Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_settings_photo_android.png)  ![Audio video plugin settings Video Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_settings_video_android.png)


| Parameter | Description |
| --- | --- |
| **<Translate android="true" ids="multimedia_use_system_camera"/>** in <Translate android="true" ids="photo_notes"/> | If enabled, OsmAnd uses the system application to create photos.|
| **<Translate android="true" ids="av_camera_pic_size"/>** | This establishes a size for photos to take in. The number of available options is determined with the capabilities of the device camera. If no option is selected, the app uses the size that is established in the system settings for the device camera. |
| **<Translate android="true" ids="av_camera_focus"/>** | This establishes the method of how focus is set by the camera. The number of available options is determined with the capabilities of the device camera. Basically, there are the following three options: *<Translate android="true" ids="av_camera_focus_auto"/>*; *<Translate android="true" ids="av_camera_focus_continuous"/>*; and *<Translate android="true" ids="av_camera_focus_infinity"/>*, where **autofocus** is the most popular one and establishes the automatic mode for the camera to focus by rotating the lens focus ring; **continuous** one makes the camera detect movements and refocus accordingly; and the **infinity** option makes the lens to focus on a distance and thus keep everything extraordinarily wide in focus no matter how far it is. |
| **<Translate android="true" ids="multimedia_photo_play_sound"/>** | If enabled, a sound is produced on closing the camera.| 
| **<Translate android="true" ids="av_audio_format"/>** | This provides a choice of formats for an audio file to be created in. The number of options available as well as which one is used as default are determined with the parameters of a specific device. |
| **<Translate android="true" ids="av_audio_bitrate"/>** | This provides a choice of bitrate options for an audio file to be created in. The available bitrate options range from 16kbps to 128 kbps, or the Default option. The default option is determined with the default microphone settings of the device. | 
| **<Translate android="true" ids="multimedia_use_system_camera"/>** in <Translate android="true" ids="video_notes"/> | If enabled, OsmAnd uses the system application to record video. |
| **<Translate android="true" ids="av_video_quality"/>** | This provides a choice of options that determine the format of the output image. The number of options available is determined with the parameters of a specific device. The default option is the *Highest quality* option.  |
| **<Translate android="true" ids="multimedia_rec_split_title"/>** | If enabled, old video recordings will be automatically re-written and replaced with new video recordings if the storage size reaches the established size limit.  |
| **<Translate android="true" ids="rec_split_clip_length"/>** | This determines the upper time limit for recorded video clips. There are options with the range from 1 minute to 30 minutes.|
| **<Translate android="true" ids="rec_split_storage_size"/>** | This establishes the size of the storage intended for recorded video. There are options with the range from 1024 MB to 62 GB. A specific range of options, as well as the default option are determined with the parameters of a specific device. A system message will remind on the storage size reaching the established limit. |
| **<Translate android="true" ids="notes"/>** | This re-directs you directly to the [Audio/video notes in My Places](../personal/myplaces.md). This is the central storage of all Audio/video notes ever made in the app. |
| **<Translate android="true" ids="reset_plugin_to_default"/>** | This establishes the default values for all of the above settings.  |
| **<Translate android="true" ids="copy_from_other_profile"/>** | This opens a dialog to select a profile to copy the established Audio/video note recording configuration of values from, and further to establish them for the current profile. |


## Manage a single note

You can manage your information, thoughts, ideas, etc. tied to a geographical place, as follows:

- create a note;
- view all notes as a list in [My Places](../personal/myplaces.md);
- show the specific note on the map;
- rename a note in My Places;
- show all notes [on the map](../map/configure-map-menu.md#map-data-layers);
- play the note;
- create waypoints in a [track](../plugins/trip-recording.md#gpx-file-details);
- export to [JOSM](https://josm.openstreetmap.de/);


### Create

You can create a photo, video, and/or audio note in any of the following ways:
- with the [Widget](../widgets/info-widgets.md#-audio-video-notes-widget-android) - if the note should be tied to your current geographical position;
- with the [Context menu](../map/map-context-menu.md#-record-av-note-android) of a point on the map - if the note should be tied to the selected point on the map.


#### 1. Create and tie to your current position

To create a note tied to your current position, and thus, avoiding any search of a suitable point on the map to tie the note to, the <Translate android="true" ids="map_widget_av_notes"/> widget is used: tap the widget, and make the note. 

The functions provided by the <Translate android="true" ids="map_widget_av_notes"/> widget depend on how it is configured in the [Configure screen](../widgets/info-widgets.md#-audio-video-notes-widget-android) menu. The widget either immediately opens the camera to make a note, according to the established settings, or asks first what format to create a note in, and then opens the respective recorder dialog.

![Audio video plugin widget Android](@site/static/img/plugins/audio-video-notes/audio_video_plugin_widget_choice_android.png)


#### 2. Create and tie to selected geolocation

To create a note tied to a selected point on the map, the [Context menu](../map/map-context-menu.md#-record-av-note-android) of the point is used, as follows:

1. Long-tap a point on the map, and the [Context menu](../map/map-context-menu.md) opens.
2. Tap **Actions**, and select one of the available options from the list: 

    - **<Translate android="true" ids="recording_context_menu_arecord"/>** - to make an audio note and tie it to the selected point on the map;
    - **<Translate android="true" ids="recording_context_menu_vrecord"/>** - to make a video note and tie it to the selected point on the map;
    - **<Translate android="true" ids="recording_context_menu_precord"/>** - to make a photo note and tie it to the selected point on the map.

3. Depending on the selected format of the note, the respective recorder dialog opens. 

![Audio video plugin  Context menu take a note](@site/static/img/plugins/audio-video-notes/context-menu-take-note.png)



#### Recorder dialog

For _an audio / video note_, respectively the audio, or video recorder shows up. And you can:

- stop the recording with the Stop icon,
- see the length of the record,
- hide/show the video screen.

Also, it is possible to stop the recording with a tap on the <Translate android="true" ids="map_widget_av_notes"/> widget, regardless of whether the Context menu, or the widget started the recording. For _a photo note_, the camera functionality shows up, and you can take a photo, view the result, and accept and save it, or take a new photo.

![Video note recorder](@site/static/img/plugins/audio-video-notes/take_a_video_note_widget.png) 

:::info note
Automatically, all photo, audio, and video records are saved to: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/> tab. 
:::


###  View in My Places

[My Places](../personal/myplaces.md) is the central storage for all notes. It allows you to view all notes listed as a list; open a specific note; and to manage the entire list of notes. To open My Places, follow the path: 

**Android**: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>

![Audio video plugin My places menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu.png)


### Show on the map

To show a specific note on the map, use the list of notes in My Places, find the needed one and tap it. As a result, the map shows up, highlights the location of the note, and opens the [Context menu](../plugins/audio-video-notes.md#actions-in-map-context-menu). It is possible to work with the note by selecting the options in the context menu.

![Audio video plugin My places menu Context](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_context.png)


### Play

To play a note, use the respective option in the [Context menu](../map/map-context-menu#-audiovideo-note-android) opened for the note:

- on the map;
- in My Places. 

Also, [Details](../map/map-context-menu#-audiovideo-note-android) will help by giving more data, like: the latitude and longitude; the date and time of the record, if any photos.

![Audio video plugin Context menu](@site/static/img/plugins/audio-video-notes/audio_video_notes_map_context_menu_1.png) ![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)



### Rename, delete, share

To manage a note in My Places, tap the vertical triple points of the note in the list, and the available options show up, as follows: 

- **<Translate android="true" ids="watch"/>** / **<Translate android="true" ids="recording_context_menu_play"/>** - to play/show the note,
- **<Translate android="true" ids="shared_string_share"/>** - to share the note, 
- **<Translate android="true" ids="shared_string_show_on_map"/>** - to show the linked place on the map and the [Context menu](../plugins/audio-video-notes#actions-in-map-context-menu),
- **<Translate android="true" ids="shared_string_rename"/>** - to rename the note,
- **<Translate android="true" ids="shared_string_delete"/>** - to delete the note.

![Audio video plugin My places menu actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_actions.png)

## Recording Widget

The <Translate android="true" ids="map_widget_av_notes"/> widget makes records (i.e. photo, audio, video) and ties them to the current position of the user. The widget has several options that can be set up as the default action performed by the widget on tap. 

![The widget](@site/static/img/plugins/audio-video-notes/audio_video_notes_widget.png)

Adding the widget to the screen is needed when you would rather skip looking for a geolocation on the map and by default link the notes to your current position. To add, and/or configure the widget, do the following:

1. Open <Translate android="true" ids="shared_string_menu,map_widget_config"/>

2. Select  **<Translate android="true" ids="map_widget_left"/>** or **<Translate android="true" ids="map_widget_right"/>**.

3. Tap **<Translate android="true" ids="map_widget_av_notes"/>** and the context menu of the widget opens. 

4. Select an option you prefer to do by default by tapping the widget:

    - **<Translate android="true" ids="av_def_action_choose"/>** - to open a choice of options;

    - **<Translate android="true" ids="av_def_action_audio"/>** - to immediately start to record an audio message;

    - **<Translate android="true" ids="av_def_action_video"/>** - to immediately start to record a video;

    - **<Translate android="true" ids="av_def_action_picture"/>** - to immediately start taking a photo.  


![The widget](@site/static/img/plugins/audio-video-notes/widget.png)



## Manage multiple notes

### Manage in My Places

The options on the bottom bar can be used to manage the list of notes in My Places, as follows:

- **<Translate android="true" ids="shared_string_sort"/>** - opens a choice of how to sort: by type, or date, and on selection an option, sorts the list respectively. 
- **<Translate android="true" ids="shared_string_share"/>** - shows a check list of all notes, including those added as waypoints to GPX files. First, required notes are checked, then the Share icon on tap at the right-hand top corner of the screen provides the available sharing options, and finally, the checked notes are shared, according to the selected option. 
- **<Translate android="true" ids="shared_string_delete"/>** - shows a check list of audio, photo and video notes only. First, required notes are checked, then the Delete icon at the right-hand top corner of the screen is clicked, and after confirmation, deletes the selected notes.  


![Audio video plugin My places menu Three actions](@site/static/img/plugins/audio-video-notes/audio_video_notes_myplaces_menu_three_actions.png)  

### Share with GPX waypoints

**Android**: <Translate android="true" ids="shared_string_menu,shared_string_my_places,notes"/>  
You could share all Notes including [GPX](#waypoints-created-from-notes) that has selected notes as waypoints on **My Places** screen by clicking on bottom menu button share. A checkbox will appear next to each note to select specific notes. There are two checkboxes above the notes: *A/V notes by date* to select all notes and the *Locations* checkbox. The *Locations* checkbox allows you to add a separate GPX file with coordinates and data.

![Share 1](@site/static/img/plugins/audio-video-notes/a-v_share_2.png)

Each note contains the time at which it was created, the amount of data, and if it is a record, the time of recording, location data, you can add GPX data. File formats: Audio - 3gp, Video - mp4, Photo - jpg.


### Show all on the map 

Notes can tell you a story, once displayed on the map: e.g. where to notice signs, which door to open, how to find a way out, an optimal path to go, etc. It is possible to show all notes altogether instead of [one by one](../plugins/audio-video-notes#show-a-note-on-the-map). 

To show/hide all notes altogether, use the [Recording layer](../map/point-layers-on-map#-audio--video-points-android). Once toggled on in the [Configure map](../map/configure-map-menu) menu, the Recording layer shows all notes on the map.

![No notes on the map](@site/static/img/plugins/audio-video-notes/no_notes_on_map.png) ![Notes are on the map](@site/static/img/plugins/audio-video-notes/notes_on_map.png)

The [Recording layer](../map/point-layers-on-map#-audio--video-points-android) can be reached out, as follows:

**Android**: <Translate android="true" ids="shared_string_menu,configure_map,layer_recordings"/>

![Show notes on the map](@site/static/img/plugins/audio-video-notes/recording_layer.png)

## Waypoints created from notes

If an audio/video/photo note is added to a track, a waypoint is created. Waypoints exist within the track. If a track is visible, its waypoints are visible. So, audio/video/photo notes can be visible on the map altogether, or by the specific visible track. In the latter case, audio/video/photo notes are displayed as track waypoints. 

>**NOTE**: If a track is exported, the waypoints cannot be viewed, or played, because audio/video/photo notes are stored on the device only, and available only to the user of the device. 

![Notes and waypoints on the map](@site/static/img/plugins/audio-video-notes/note_waypoint_on_map.png) ![Waypoints on the track](@site/static/img/plugins/audio-video-notes/waypoint_auto_manual.png)


### Create waypoints

There are two ways to create a waypoint: automatically and manually. 

**Automatically**, a waypoint is created, in case if the user takes an audio/video/photo note when the [Trip recording](../plugins/trip-recording) is in progress, regardless of the geolocation if it is tied to the current position, or any place, and thus, regardless of the means used for that: if it is the [Widget](../widgets/info-widgets#-audio-video-notes-widget-android), or the [Context menu](../map/map-context-menu#-audiovideo-note-android). 

All waypoints added automatically get an automatically assigned name. The name is created, according to the format specified below for an audio/video/photo file, and has a [shortlink](https://wiki.openstreetmap.org/wiki/Shortlink). The example of the waypoints on the figure above shows automatically and manually created waypoints, where first four were created automatically, and the last one - manually. 

**Manually**, a waypoint is created via the [Context menu](../map/map-context-menu#-audiovideo-note-android), as follows: 

1. Select the required audio/video/photo note on the map;
2. Tap **Actions**, and then tap **Add track**.
3. Select the track that the waypoint is intended to be added to. 
4. The *<Translate android="true" ids="quick_action_add_gpx"/>* dialog opens, and allows the user to set some properties, like: the name to the waypoint, an icon, color, etc. Once done, tap **Save**.


:::info note
The name of a manually created waypoint can be established by the user. 
:::

![Manually adding a waypoint to track](@site/static/img/plugins/audio-video-notes/waypoint_manually_created.png)
 


### View waypoints 

A waypoint is available for viewing as a waypoint on the map and in the list of [waypoints of a specific track](../map/track-context-menu#points--waypoints). Deleting the waypoint does not delete the respective audio/video/photo note. 

An audio/video/photo note is available for viewing on the map and in the list of A/V notes in [My Places](../plugins/audio-video-notes#view-in-my-places). Deleting the audio/video/photo note does not delete the respective waypoint. 

On the map, a waypoint and an audio/video/photo note can be visible, or not. It is determined by what layer is currently toggled on for the profile.

| Visible | Layer toggled on |
| --- | --- |
| Only waypoints | Tracks layer |
| Waypoints and notes | Tracks and Recording layer | 
| Only notes | Recording layer | 
| None | Neither Tracks, not Recording layer. |

:::info note
 When neither Tracks, nor Recording layer is toggled on, both waypoints and notes can be shown by tapping them in My Places. In this case, the map shows the locations of the tapped note, or respectively, the locations of all waypoints of the tapped track. 
:::

### GPX file with waypoints

If to view the GPX file of the track added with a waypoint from an audio/video/photo note, the waypoint will be like on the example below, having the coordinates, the timestamp, the name of the respective note, and the shortlink.

![Waypoint in a GPX file](@site/static/img/plugins/audio-video-notes/waypoint_in_GPX_file.png)


## Miscellaneous

### File name details

The <Translate android="true" ids="audionotes_plugin_name"/> plugin generates audio/video/photo files in the following format:

    {SHORTLINK_LOCATION}_Description.{avi,mp3,jpg}

where `SHORTLINK_LOCATION` indicates the latitude and longitude of the location that the file is linked to. The `SHORTLINK_LOCATION` is encoded, according to the specification https://wiki.openstreetmap.org/wiki/Shortlink.


### Export to JOSM 


To view everything later, you can export the track together with all the media and see them in the  [JOSM editor](https://josm.openstreetmap.de/). Please note that you'll need to put the media in the corresponding folder (you'll know which one if you click on a video note and see the message about a missing file. Just put it in the indicated folder).

![Audio video notes in Josm](@site/static/img/plugins/audio-video-notes/josm-track-points.png)


So there you have it: your personal notes linked to the map and stored in one place. Document your adventures!
