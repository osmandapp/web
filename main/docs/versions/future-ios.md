---
sidebar_position: 5
---

# iOS 4.7

# Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>


# What's new

- [iOS 4.7](#ios-47)
- [Join Beta](#join-beta)
- [What's new](#whats-new)
  - [Redesign Tracks menu](#redesign-tracks-menu)
  - [Widgets updates](#widgets-updates)
  - [Redesign Tracks menu of Configure map](#redesign-tracks-menu-of-configure-map)
  - [Updates of GPX tracks](#updates-of-gpx-tracks)
    - [3D visualization](#3d-visualization)
    - [External sensors data for Analize on map](#external-sensors-data-for-analize-on-map)
    - [Additional tags support](#additional-tags-support)
  - [Sun position widget](#sun-position-widget)
  - [Glide ratio widget](#glide-ratio-widget)
  - [Round up numbers in navigation widgets](#round-up-numbers-in-navigation-widgets)
  - [OsmAnd Cloud updates](#osmand-cloud-updates)
  - [App Language for Basemap](#app-language-for-basemap)
  - [Missing maps download](#missing-maps-download)
  - [More](#more)

## Redesign Tracks menu


We've completely redesigned the [_Tracks menu_](https://osmand.net/docs/user/personal/tracks#my-places-menu) in [_My Places_](https://osmand.net/docs/user/personal/myplaces). 

![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_ios.png) 

_Tracks on map_ folder now directly opens the [_Tracks menu_](#redesign-tracks-menu-of-configure-map) in Configure map.

By tapping the _Three Dots_ button, you access a menu with the following actions:
- _Add folder_ allows you to create and name a new folder.
- _Import_ enables the importation of a GPX file.

![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_2_ios.png) 

_New track_ allows to start [_Trip recording_](https://osmand.net/docs/user/plugins/trip-recording) action. Just click _"Start recording"_ button. During the recording, you can view the Recording track data, including distance, duration, and the number of waypoints. There are two key actions available during recording: _Stop record_ and _Save GPX track_.

![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_3_ios.png) ![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_4_ios.png)

A long press on any folder opens the _Folder_ menu, which includes the following options:
- _Rename_ lets you rename the selected folder.
- _Appearance_ opens the [_Appearance menu](https://osmand.net/docs/user/map/tracks-on-map#track-appearance), allowing you to customize the appearance of tracks within the selected folder. 
- _Export_ enables you to export the folder [as an OSF file](https://osmand.net/docs/user/personal/import-export#export).
- _Move_ provides the option to relocate a folder to another Tracks folder or to create a new folder for moving the selected folder into it.
- _Delete_ gives you the ability to remove the selected folder.

![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_5_ios.png)


A long press on any GPX track brings up a menu with the following options:
- _Show on map_ displays the selected track on the map.
- _Appearance_ opens the track [_Appearance menu](https://osmand.net/docs/user/map/tracks-on-map#track-appearance).
- _Navigation_ [starts navigation using the track](https://osmand.net/docs/user/navigation/setup/gpx-navigation).
- _Analyze_ launches [_Analyse on map_](https://osmand.net/docs/user/navigation/setup/route-details#analyse-on-map).
- _Share_ allows you to share the selected track.
- _Upload modifications to OSM_ enables you to upload changes to OpenStreetMap.
- _Edit_ opens the selected track in [Plan a route for editing](https://osmand.net/docs/user/plan-route/create-route).
- _Duplicate_ provides the option to create a copy of the selected track.
- _Rename_ lets you change the name of the selected track.
- _Move_ allows you to relocate the selected track to a specified folder.
- _Delete_ gives you the option to remove the selected track.

![My Places > Tracks menu iOS](../../blog/2024-03-06-ios-4-7/img/my_places_tracks_menu_6_ios.png)


## Widgets updates

- Enhanced [top and bottom widget panels](https://osmand.net/docs/user/widgets/configure-screen#top--bottom-panels) to accommodate all widgets.

- Background color opacity for transparency widget mode.

- Improved widget configuration by allowing users [to move pages and rows](https://osmand.net/docs/user/widgets/configure-screen#widget-panels).

![Widget iOS](../../blog/2024-03-06-ios-4-7/img/widget_rows_ios.png) ![Widget iOS](../../blog/2024-03-06-ios-4-7/img/widget_rows_2_ios.png)


## Redesign Tracks menu of Configure map

Enhanced management of tracks displayed on the map:

_iOS Menu → Configure map → Show on map → Tracks_

We've introduced two sections: _Visible_ and _All_

- In _Visible_, you can select and deselect tracks to be displayed on the map and choose from a "Recently Visible" section.
- In _All_, you have the option to select tracks from the complete track list.

![track menu iOS](../../blog/2024-03-06-ios-4-7/img/track_menu_ios.png) ![track menu iOS](../../blog/2024-03-06-ios-4-7/img/track_menu_2_ios.png)


You can utilize the following actions (buttons) for track management:
- 🔍 Magnifying glass for seaching a track from the track list.
- 📥 import a track from device.
- _"Select All"_ - select all tracks from the list.
- _"Done"_ - done your track selections and close the "Tracks" section.

By clicking on _"Last modified"_ you access the _Sort tracks_ menu. Here, you can organize your tracks by:
- _"Nearest"_ or _"Last modified"_
- _"Name A-Z"_ or _"Name Z-A"_
- _"Newest date first"_ or _"Oldest date first"_
- _"Longest distance first"_ or _"Shortest distance first"_
- _"Longest duration first"_ or _"Shorter duration first"_

![track menu iOS](../../blog/2024-03-06-ios-4-7/img/track_sort_menu_ios.png) ![track menu iOS](../../blog/2024-03-06-ios-4-7/img/track_sort_menu_2_ios.png)

## Updates of GPX tracks

### 3D visualization

Introduced 3D visualization for tracks based on altitude:

_[Track Context menu](https://osmand.net/docs/user/map/tracks-on-map#track-appearance) → Change Appearance → 3D visualization_

![3D tracks iOS](../../blog/2024-03-06-ios-4-7/img/3d_tracks_ios.png)

### External sensors data for Analize on map

Updated ["Analyze on Map"](https://osmand.net/docs/user/map/tracks-on-map#analyze-track-on-map) feature to include the capability to display metrics from [sensors](https://osmand.net/docs/user/plugins/external-sensors#trip-recording).

- You can now analyze your track data alongside external sensors data: choose the track → [Options](https://osmand.net/docs/user/map/track-context-menu/#options) → Analyze on map → Select graph data

![track menu iOS](../../blog/2024-03-06-ios-4-7/img/analyse_track_sensors_ios.png) ![track menu iOS](../../blog/2024-03-06-ios-4-7/img/analyse_track_sensors_2_ios.png) ![track menu iOS](../../blog/2024-03-06-ios-4-7/img/analyse_track_sensors_3_ios.png)

### Additional tags support

- Enhanced tags support for GPX has been implemented, including _link, author, copyright, and keywords_. 

- Added support for additional [tags for OSM routes](https://github.com/osmandapp/OsmAnd-iOS/issues/3370): `description`, `from`, `to`, `distance`, `direction`, `state`, `colour`, `ascent`, `descent`, `roundtrip`, `tourism`

## Sun position widget

A new [_Sun position_ widget](https://osmand.net/docs/user/widgets/info-widgets#sun-position) has been added, complementing the Sunrise and Sunset widgets. This section of widgets is now named _"Sun position"_:

_Menu → Configure screen → Widgets → Add widget → Sun Position → Sun position, Sunrise, Sunset_. 

![Sun Position](../../blog/2024-03-06-ios-4-7/img/sun_position_3_ios.png)

_"Sun Position"_ widget displays the time until sunrise or sunset, based on the current time. This widget offers the following settings:
- _Mode_: Select from _"Next event"_, _"Sunset"_, _"Sunrise"_.
- _Format_: Choose between  _"Time left"_ or _"Next event"_. These format settings can be adjusted by tapping the widget on the screen.

![Sun Position](../../blog/2024-03-06-ios-4-7/img/sun_position_ios.png) ![Sun Position](../../blog/2024-03-06-ios-4-7/img/sun_position_2_ios.png)

## Glide ratio widget

Simple [Glide Ratio widgets](https://osmand.net/docs/user/widgets/info-widgets#glide-ratio) have been introduced for use in aircraft. These widgets display the glide ratio to the target or the average glide ratio for the current flight.

_OsmAnd menu → Configure screen → Widgets (All panels) → Glide ratio to target and Average glide ratio_

![Glide Ratio widget iOS](../../blog/2024-03-06-ios-4-7/img/glide_ratio_widget_ios.png)

<!--
## Speedometer

Introduced a new distinctive widget called Speedometer:

Go to _Menu → Configure screen → Other → Speedometer_

Within this section, you can select the size (_small, medium, large_) of the Speedometer and specify when to receive a Speed limit warning (_Always, When exceeded_).

![Speedometer iOS](../../blog/2024-03-06-ios-4-7/img/speedometer_ios.png)

### Speedometer for CarPlay

The Speedometer feature has been introduced for CarPlay as well.

![Speedometer CarPlay iOS](../../blog/2024-03-06-ios-4-7/img/speedometer_carplay_ios.png)  -->

## Round up numbers in navigation widgets

You can now select the format for displaying distance information in navigation widgets, like distance to a point, the next turn, and lanes. Choose _"Precise"_ for exact figures or _"Round up"_ to enhance readability with simpler, rounded numbers:

_Menu → Settings → Navigation Profile → General settings → Units & formats → Distance during navigation → Precise or Round up_

![Round up iOS](../../blog/2024-03-06-ios-4-7/img/round_up_ios.png) ![Round up iOS](../../blog/2024-03-06-ios-4-7/img/round_up_1_ios.png)

## OsmAnd Cloud updates

- OsmAnd Cloud: added ability [to restore deleted files from Trash](https://osmand.net/docs/user/personal/osmand-cloud#trash).

- OsmAnd Cloud: added ability [to delete account](https://osmand.net/docs/user/personal/osmand-cloud#deletion-option).

## App Language for Basemap

The World Basemap now adopts the language of the app for naming, aligning with the app's language settings. This is applicable for base map zoom levels 1-6 (less than 7 map zoom). The app language can be modified in the System settings under _OsmAnd Maps – Language_. 

![App language](../../blog/2024-03-06-ios-4-7/img/app_language_ios.png) 

## Missing maps download

OsmAnd now alerts you if some maps between your start point and destination are missing. It's important to ensure that all maps are up to date and of the same release date for a consistent navigation experience.

![Map downloading suggestion iOS](../../blog/2024-03-06-ios-4-7/img/map_suggest_ios.png) 

## More

[Tasks resolved](https://github.com/osmandapp/OsmAnd-iOS/milestone/26?closed=1) in OsmAnd 4.7 include:
- Fixed [the "Coordinates" widget](https://github.com/osmandapp/OsmAnd-iOS/issues/3342) where, in some cases, the last digits were missed.
- Fixed ["3D Mode" button behavior](https://github.com/osmandapp/OsmAnd-iOS/issues/3334): tapping on the button doesn't save the tilt angle.
- Fixed [status bar color](https://github.com/osmandapp/OsmAnd-iOS/issues/3321) for older iOS versions.
- Fixed [rotate and pinch](https://github.com/osmandapp/OsmAnd-iOS/issues/3331) to zoom gestures and [Overlay/Underlay sliders](https://github.com/osmandapp/OsmAnd-iOS/issues/3258) for Mac OS version.
- [Improved Autozoom animation](https://github.com/osmandapp/OsmAnd-iOS/issues/3340) for navigation.


