---
sidebar_position: 4
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


# Android 4.6 (beta)

Android 4.6 is the latest release that introduces many new features and improvements to the OsmAnd app. This article describes all the key updates that represent meaningful changes for our users.

## Join Beta

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>

## What's new

- [Update widgets](#widgets-update):
    - Updates for [Top/Bottom panels](#updates-for-topbottom-panels) in the Configure screen menu.
    - Added [Glide Ratio](#glide-ratio-widget) Widget.
    - Added [Temperature widget](#ant-temperature-widget) for External sensors.
- Added [ANT+ temperature widget](#ant-temperature-widget) for Garmin tempe device
- New [Local tab](#local-menu-redesign) in Maps & Resources menu.
- New feature [Smart Folder](#smart-folders) in Tracks menu.
- [Filters](#filters-for-tracks-search) for Tracks search.
- Adding a [screen Trash](#trash-feature-in-osmand-cloud) to view and manage files deleted from OsmAnd Cloud.
- New [Help screen](#help-screen) with offline support.
- [Redesigned Weather screen](#redesign-weather-screen).
- Added share [point coordinates](#share-point-coordinates-by-an-osm-link) by OSM link.
- [Custom actions](#custom-actions-for-buttons-of-external-controllers) for buttons of external controllers.
- Update for [Plan a route](#update-plan-a-route-tool).
- [More](#more) updates for the release.


## Update widgets

With the new release, it is now possible to add all widgets to the Top/Bottom panels in the Configure screen menu. Added Glide Ratio widget and Temperature widget for external sensors, providing additional data and usability of the application.

### Top/Bottom panels

Our top and bottom panels have been redesigned with all our users' needs in mind. Now you can customize the widgets on your home screen the way you want, giving you more freedom to display important data.  

**1.** Added ability to add and remove rows for *Top / Bottom panel*: 

*OsmAnd menu → Configure screen → Widgets → Edit → [Add row](https://docs.osmand.net/docs/user/widgets/configure-screen#rows-for-panels)*

| View mode  | Edit mode   |
|-----|------|
| ![Row](../../blog/2023-09-30-android-4-6/img/row.png) | ![Row](../../blog/2023-09-30-android-4-6/img/row_1.png) |

**2.** Added support to change [widget size](../user/widgets/configure-screen.md#settings). You can choose the size that best suits your needs: Small, Medium, Large.  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)  

**3.** You have the ability to add more than one [Simple widget](../user/widgets/configure-screen.md#rows-for-panels) in a single row.

|  |
|-----|
| ![Row](../../blog/2023-09-30-android-4-6/img/row_4.png) |


### Glide Ratio Widget

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Any panels → Glide ratio → [Glide ratio to target](../user/widgets/info-widgets.md#glide-ratio)* and [*Average glide ratio*](https://osmand.net/docs/user/widgets/info-widgets/#glide-ratio) 

![Glide ratio widget](@site/static/img/widgets/glide_ratio_widget.png)  

The Glide Ratio widget is an innovative tool designed to meet the needs of pilots. The widget provides valuable glide ratio information to help make informed decisions when planning air routes.  

Simple *[Glide Ratio](https://en.wikipedia.org/wiki/Lift-to-drag_ratio#Glide_ratio)* widgets were added for Aircraft usage. Widgets show the glide ratio to the target or avearge glide for the current trip:

- *Glide ratio to target* shows the glide ratio needed to reach the target point. You need to use [Map marker](https://osmand.net/docs/user/personal/markers) as a target point.
- *Average glide ratio* shows the average glide ratio for the set interval. For this widget you can specify the time interval for glide averaging.

| Glide ratio widgets | Widgets on the screen |
|--------|---------|
| ![Glide ratio](../../blog/2023-09-30-android-4-6/img/glide_ratio_1.png) | ![Glide ratio](../../blog/2023-09-30-android-4-6/img/glide_ratio_2.png) |

### Temperature widget

We added the new external widget ([External sensor plugin](https://osmand.net/docs/user/plugins/external-sensors/#overview)) which show the tempetarute sensor data. Read more how to connect a sensor to OsmAnd [here](https://osmand.net/docs/user/plugins/external-sensors/#setup).

Next you need [to add the temperature widget](https://osmand.net/docs/user/widgets/configure-screen/#right--left-panel-widgets) to the OsmAnd screen:

_Menu → Configure screen → [Left panel /Right panel](https://osmand.net/docs/user/widgets/configure-screen/#right--left-panel-widgets) → External sensors → Temperature_

|   |   |
|--------|---------|
|![Temperature](../../blog/2023-09-30-android-4-6/img/temp.png)|![Temperature](../../blog/2023-09-30-android-4-6/img/temp_1.png)|


## ANT+ temperature widget

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_left"/> /<Translate android="true" ids="map_widget_right"/> → <Translate android="true" ids="external_sensor_widgets"/>*  

![External sensors widgets Android](@site/static/img/plugins/sensors/external-sensors-plugin-wid_1.png)  

**<Translate android="true" ids="external_device_characteristic_temperature"/>** widget displays the ambient temperature, which can be very useful if you don't want to overheat or freeze on your bike or motorcycle. 


## Local menu redesign

_Local menu_ contains more info about OsmAnd data:
_Menu → Download maps (Maps & Resources) → Local_. 

- _Resources_: Standart Maps; Terrain maps; Wikipedia and Travel maps; Nautical Maps; Weather; Map sources; Rendering styles; Routing; Cache.
- _My Places_: Favorites; Tracks; OSM Notes; OSM Edits; A/V Notes; Map markers; History; Itinerary.
- _Settings_: Profiles; Other.

| Resources  | My places  |  Settings   |
|--------|---------|---------|
|![Local](../../blog/2023-09-30-android-4-6/img/local.png)|![Local](../../blog/2023-09-30-android-4-6/img/local_1.png)|![Local](../../blog/2023-09-30-android-4-6/img/local_2.png)|


You can choose each item subcategories for opening subcategories screen and it options:

| Terrain maps  | Tracks  |
|--------|---------|
|![Local](../../blog/2023-09-30-android-4-6/img/local_3.png)|![Local](../../blog/2023-09-30-android-4-6/img/local_4.png)|


## Smart folders

Smart Folders allow you to specify a set of criteria for GPX tracks to be contained in the folder, to make keeping way of files even easier:

_OsmAnd menu → My Places → Tracks → &#8942; → Add smart folder_

| Tracks menu  | Settings  |
|--------|---------|
|![Smart folder](../../blog/2023-09-30-android-4-6/img/smart_folder.png)|![Local](../../blog/2023-09-30-android-4-6/img/smart_folder_1.png)|

Now, you can add filters for Smart folders.


## Filters for Tracks search

_OsmAnd menu → My Places → Tracks → 🔍 → Filter_

_OsmAnd menu → My Places → Smart folder → Filter_

![My places tracks](@site/static/img/personal/tracks/my_places_tracks_filter_andr.png)   

In addition to navigation and track creation, the Osmand app provides handy tools for managing your track recordings. With the latest update to the app, new features have been added to the Tracks section to better search and filter your tracks. These new filters provide more detailed and customizable options to search for tracks based on various parameters, allowing you to quickly find tracks that meet your specific requirements and preferences.   

Filters for tracks can be used for tracks Search function and for Smart folders.

**Filters**: _Duration, Time in motion, Length, Average speed, Uphill, Downhill, Average altitude, Max altitude, Date of creation, Nearest cities, Other_.

| Search menu | Filter menu |
|--------|---------|
|![Filter](../../blog/2023-09-30-android-4-6/img/filter.png)|![Filter](../../blog/2023-09-30-android-4-6/img/filter_1.png)|


## Trash feature in OsmAnd Cloud

Trash feature was added for OsmAnd Cloud:

_OsmAnd menu → Settings → OsmAnd Cloud → Trash_

_Trash_ is the screen to view and manage files deleted from OsmAnd Cloud.

_Empty trash_ button deletes all items. 

:::note
Items in trash will be erased after 30 days.
:::


| OsmAnd Cloud menu| Trash menu|
|-------|-------|
|![Trash](../../blog/2023-09-30-android-4-6/img/trash.png)|![Trash](../../blog/2023-09-30-android-4-6/img/trash_1.png)|

Each item from _Trash_ can be _Restore_ or _Delete_. 

| Item's acitons|
|-------|
|![Trash](../../blog/2023-09-30-android-4-6/img/trash_2.png)|


## Help screen

*<Translate android="true" ids="shared_string_menu,shared_string_help"/>*

![Help screen](@site/static/img/widgets/help_screen.png)  

We redesigned _Help_ menu with added articles from [www.osmand.net/docs](https://osmand.net/docs/intro/) with next menu sections and offline (saved to cache) new documentation:

_Most viewed_, [_User guide_](https://osmand.net/docs/user/), [_Troubleshooting_](https://osmand.net/docs/user/troubleshooting/), _Contact us_, _Report issues_, _About OsmAnd_.

| | |
|-------|-------|
|![Help](../../blog/2023-09-30-android-4-6/img/help.png)|![Help](../../blog/2023-09-30-android-4-6/img/help_1.png)|


## Share point coordinates by an OSM link

Now in the Context menu of a point, you can find not only geographical coordinates in various formats, but also a shareable [OpenStreetMap Link with location marker](https://wiki.openstreetmap.org/wiki/Browsing#Adding_a_Marker).  

| | |
|-------|-------|
|![Osm Location pin 1](../../blog/2023-09-30-android-4-6/img/osm_location_pin_1.png) |![Osm Location pin 2](../../blog/2023-09-30-android-4-6/img/osm_location_pin_2.png)|


## Custom actions for buttons of external controllers

Now, you can create your custom buttoons for [external controllers](https://osmand.net/docs/user/map/interact-with-map#external-input-device-buttons).

Menu → Settings → Profiles → General settings → External input devices

Choose your external input devices (Keyboard, for example) and make Key bindings.

| Add new type| Add key binding|
|-------|-------|
|![External Devices](../../blog/2023-09-30-android-4-6/img/external.png) |![External devices](../../blog/2023-09-30-android-4-6/img/external_1.png)|

Actions and Map iteracions for Key bindings


| Key bindings|
|-------|
|![External Devices](../../blog/2023-09-30-android-4-6/img/external_2.png) |


## Update Plan a route tool

Added "Import from track" function allows to import to current track from another existing trask (waypoints, segments, all data) 

_[Plan a route](https://osmand.net/docs/user/plan-route/create-route) →  Options → Import from track_

| Options menu|
|-------|
|![Import from track](../../blog/2023-09-30-android-4-6/img/planroute.png) |


## Redesign weather screen

Added the convenient time scale.

| |
|-------|
|![Weather](../../blog/2023-09-30-android-4-6/img/weather.png)|


## More

- Improved memory management for large GPX tracks
- Shutdown [the OpenPlaceReviews project](https://osmand.net/docs/user/plugins/openplacereviews)
- Updated Search screen for Android Auto
- Fixed map freezes for Android Auto
- Renamed _Terrain_ to [_Topography_](https://osmand.net/docs/user/plugins/contour-lines#configure-map-view) menu
- _Select all_ / _Deselect all_ actions for [Track menu](https://osmand.net/docs/user/personal/tracks#my-places-menu)
- Fixed _North fixed_ mode for [Compass](https://osmand.net/docs/user/map/interact-with-map#map-orientation-modes)
- Added widget _Available RAM_ for [OsmAnd Development plugin](https://osmand.net/docs/user/plugins/development)
- Added paragliding / baby carriage / stroller / buggy [icons](https://osmand.net/docs/user/personal/profiles#profile-appearance) for profiles
- Added [ANT+ temperature widget](https://osmand.net/docs/user/plugins/external-sensors) for Garmin temperature sensor device
- [_"Destination is reached"_](https://osmand.net/docs/user/navigation/guidance/map-during-navigation), the location moves to map center
