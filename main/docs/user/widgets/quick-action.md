---
sidebar_position: 7
title:  Quick Action
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


Quick Action Widget is a configurable quick access button on the map with selected actions accessible 'just in 2 clicks'.

![Quick action widget](@site/static/img/widgets/quick_action_widget.png)

## Enable widget

In order to use the Quick Actions button you need to enable this widget first.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>_

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>_

</TabItem>

</Tabs>


By default the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to the any part of the screen by long tap on it. 

| | |
|------------|------------|
|First appearing  | ![Quick action widget_view](@site/static/img/widgets/quick_action_widget_view.png) |
|Long tap and moving  | ![Quick action widget_tap](@site/static/img/widgets/quick_action_widget_tap.png) |
|New place  | ![Quick action widget_move](@site/static/img/widgets/quick_action_widget_move.png) |

To open Quick action menu just press on the button.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Quick action widget_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>


## Edit actions list

### Add new action

There are 2 ways to add items to the Quick actions list: 
- _Menu → Configure screen → Quick action → &#8230;&#124; → Add action(+)_ 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Quick action widget_android_add](@site/static/img/widgets/quick_action_widget_android_add.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios_add](@site/static/img/widgets/quick_action_widget_ios_add.png)

</TabItem>

</Tabs>

- Click _"Quick action" button → "Quick action" menu → Add action_

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Quick action widget_android_add2](@site/static/img/widgets/quick_action_widget_android_add2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios_add2](@site/static/img/widgets/quick_action_widget_ios_add2.png)

</TabItem>

</Tabs>

First you need to select [type of the action](#quick-actions-types) and then you could change its name and parameters ([See below](#quick-actions-types) which parameters could be configured for each action type). Every action should have a unique name.

### Reorder actions

Quick action panel has only **6 slots** for actions per screen. However you could have multiple screens and actions are grouped by the specified order. In order to change the order of items:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Hold & Drag selected action up and down by the icon (three vertical lines) in the list

<p> </p>

- <Translate android="true" ids="android_button_seq"/> Open Quick action menu  → Long tap on 'Add action' → Hold & Drag selected action up and down by the icon (three vertical lines) in the list

![Quick action widget_android_order](@site/static/img/widgets/quick_action_widget_android_order.png) 

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Click Edit (Pencil icon) → Hold & Drag selected action up and down by the icon (three vertical lines) in the list → Done

![Quick action widget_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png) 

</TabItem>

</Tabs>


### Edit / Remove action

There are several ways how to access Quick Action to edit or delete it:

 - Long tap on the action (Android)

    Open Quick action menu → Long tap on the action (short tap to execute the action)

 - Delete via "Edit actions" list


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Click Delete (Bin icon on the right top corner) → Select actions → Delete_

![Quick action widget_android_del](@site/static/img/widgets/quick_action_widget_android_del.png)

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Click Edit (Pencil icon on the right top corner) → Select actions → Delete_

![Quick action widget_ios_del](@site/static/img/widgets/quick_action_widget_ios_del.png)

</TabItem>

</Tabs>


## Quick action types

### Create items

| Action | Description |
|:-------------|:-------------|
| [<Translate android="true" ids="quick_action_add_favorite"/>](../map/configure-map-menu.md#map-layers) | Adds favorite to a selected (center) map location. <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Group**: adds favorite to a selected group <br /> - **Color**: adds favorite with a preselected color <br /> - **Name**: adds favorite with a given name prefix  |
| [<Translate android="true" ids="quick_action_add_gpx"/>](../map/point-layers-on-map.md#track-waypoints) | Adds a new Track waypoint to [currently recording track](../plugins/trip-recording.md) or to [any track from My Places](../personal/tracks.md). <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Group**: adds favorite to a selected group <br /> - **Color**: adds favorite with a preselected color <br /> - **Name**: adds favorite with a given name prefix  |
| [<Translate android="true" ids="quick_action_add_marker"/>](../map/configure-map-menu.md#map-layers) | Adds marker to a selected (center) map location. |
| <Translate android="true" ids="quick_action_add_parking"/> <br /> [Plugin](../plugins/parking.md) | Adds parking to a selected (center) map location. Old parking position is deleted. |
| <Translate android="true" ids="quick_action_add_poi"/> <br /> [Plugin](../plugins/osm-editing.md) | Adds POI to a selected (center) map location map (same as context menu action). <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **POI type** (optional): preselect OSM type <br /> - **Tag/Value** (multiple): add [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) tags / values |
| <Translate android="true" ids="quick_action_add_osm_bug"/> <br /> [Plugin](../plugins/osm-editing.md) | Adds [OSM Note](https://wiki.openstreetmap.org/wiki/Notes)  <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Message**: adds default message to the note |
| Add media note <br /> [Android Plugin](../plugins/audio-video-notes.md) | Starts audio / photo / video note recording  for a selected (center) map location. |

### Configure map

| Action | Description |
|:-------------|:-------------|
| <Translate ios="true" ids="toggle_fav"/> | Show or hide the favourite points on the map. |
| <Translate ios="true" ids="show_hide_gpx"/> | Show or hide the last visible tracks on the map. |
| <Translate ios="true" ids="toggle_poi"/> | Enable or disable POI layer with selected categories. <br /> - **POI Categories**: allows to select multiple categories <br /> Note: Action will replace previously selected categories, if POI layer was active before.   |
| [<Translate ios="true" ids="toggle_public_transport"/>](../map/vector-maps.md#transport) | Enable or disable public transport map layer. <br /> - **Transport type** (on first click): select one or many options from 'Transport stops', 'Bus, trolleybus, shuttle routes', 'Tram and train routes', 'Subway routes' |
| [<Translate ios="true" ids="quick_action_map_source_title"/>](../map/raster-maps.md) | Create a list of map sources and cycle through them.  <br /> - **Show an interim dialog**: displays dialog with maps list <br /> - **Do not show an interim dialog**: map sources will be changed by defined  order. <br /> - Displayed Name - '**Map source >**'. '>' after the map name indicates what is current selected map source. <br /> - Displayed Name - '**> Next map source**'. '>' before the map name indciates what is next selected map source if action is executed. <br /> - **Note**: you could have 1 action to change source and select multiple map sources or many quick actions with 1 map source selected, so you could quickly select the map source just from quick aciton list. |
| [<Translate ios="true" ids="map_settings_over"/>](../map/raster-maps.md) | Create a list of map sources as map overlay and cycle through them. <br /> Note: works similar to **<Translate ios="true" ids="quick_action_map_source_title"/>** (see above) |
| [<Translate ios="true" ids="map_settings_under"/>](../map/raster-maps.md) |  Create a list of map sources as map underlay and cycle through them. <br /> Note: works similar to **<Translate ios="true" ids="quick_action_map_source_title"/>** (see above)  |
| [<Translate android="true" ids="quick_action_map_style"/>](../map/vector-maps.md#default-map-styles) | Create a list of map styles for vector maps and cycle through them. <br /> Note: works similar to **<Translate ios="true" ids="quick_action_map_source_title"/>** (see above) |
| <Translate ios="true" ids="quick_action_showhide_mapillary_title"/> <br /> [Plugin](../plugins/mapillary.md) | Display or hide Mapillary layer on the map |
| <Translate ios="true" ids="toggle_contour_lines"/> <br /> [Plugin](../plugins/contour-lines.md) | Display or hide Contour lines on the map |
| <Translate android="true" ids="quick_action_show_hide_title"/> <Translate android="true" ids="shared_string_hillshade_slope"/> <br /> [Plugin](../plugins/contour-lines.md) | Display and hide Hillshade / Slope layer on the map |
| <Translate android="true" ids="quick_action_show_hide_title"/> <Translate android="true" ids="osm_notes"/> <br /> [Plugin](../plugins/osm-editing.md) | Allows to display on the map all OSM notes |

### Navigation

| Action | Description |
|:-------------|:-------------|
| [<Translate android="true" ids="quick_action_day_night_switch_mode"/>](../map/vector-maps.md#map-mode) | Switche between day and night map modes |
| <Translate android="true" ids="quick_action_navigation_voice"/> | Mute or unmute voice guidance during navigation |
| <Translate android="true" ids="context_menu_item_directions_from"/> | Mark a selected (center) map location as a point of departure |
| <Translate android="true" ids="quick_action_add_destination"/> | Add a selected (center) map location as a destination. Previous destination becomes last intermediate point.  |
| <Translate android="true" ids="quick_action_add_first_intermediate"/> | Add a selected (center) map location as first intermediate point. Previous destination stays the same. |
| <Translate android="true" ids="quick_action_replace_destination"/> | Set / Replace a selected (center) map location as a destination. Previous destination is deleted. |
| <Translate android="true" ids="quick_action_remove_next_destination"/> | Remove next intermediate point, if present, otherwise removes destination and displays finish navigation dialog. Action is inactive if you don't have any destination. |
| <Translate android="true" ids="quick_action_auto_zoom"/> | Enable or disable map auto zoom during navigation |
| <Translate android="true" ids="quick_action_start_stop_navigation"/> | Start navigation (if there is a destination point present) or stop navigation |
| <Translate android="true" ids="quick_action_resume_pause_navigation"/> | Pause / Resume navigation |
| <Translate android="true" ids="change_application_profile"/> | Create a list of application profiles and cycle through them.  <br /> - **Show an interim dialog**: displays dialog with profiles list <br /> - **Do not show an interim dialog**: profiles will be changed by defined order. <br /> - **Note**: you could have 1 action with multiple profiles or many actions with 1 profile. |


### Configure screen

| Action | Description |
|:-------------|:-------------|
| [<Translate android="true" ids="quick_action_show_hide_title"/> <Translate android="true" ids="coordinates_widget"/>](../widgets/info-widgets.md#coordinates-widget) | Show and hide coordinates widget |
