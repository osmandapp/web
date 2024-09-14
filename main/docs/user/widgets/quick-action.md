---
sidebar_position: 7
title:  Quick Action (Custom buttons)
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

Quick Action widget is an interactive user interface element that provides quick access to key functions or actions without having to open additional settings. This widget is placed on the main map screen and allows you to simplify and speed up interaction with the application, making it more convenient and efficient.  

![Quick action widget](@site/static/img/widgets/quick_action_widget.png)


## Quick Action Widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

To use the Quick Action button you need to enable this widget first.  

<!--
- To open the Quick action menu just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->


### Add and Delete Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tap Delete (Bin icon on the right top corner) → Select actions*

![Quick action widget_android_add](@site/static/img/widgets/quick_action_widget_andr.png)  ![Custom button Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>  → Tap Edit (Pencil icon on the right top corner) → Select actions*

![Quick action widget_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Custom button Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

All actions are organized in the **Add Action** menu and grouped by type. A complete list of actions and their descriptions can be found in the [Action types](#action-types) section.

You can assign one or more [actions](#action-types) to the quick action button. There are 2 ways to add actions.

- **In the Configure screen**  - Select a button from the list, tap the&nbsp;  "**＋**"  &nbsp;button. You need to select the [action type](#action-types) first, and then change its name and [parameters](#actions-in-loop).
- **In the quick action button panel** - Tap the *Quick Action button* on the map screen. At the end of the list, on the latest screen in the panel, is the "**＋**"  &nbsp;*Add Action* box. Tap it and select an action from the [list of types](#action-types).


:::note

- Each action must have a unique name.
- Screens 1, 2, and others are created automatically when the number of actions in the list increases to 6 items.

:::


### Action Parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Quick action widget_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

The actions assigned to a button are divided into Screens. These screens, 1, 2, and others are created automatically when the number of actions in the list increases to **6 items**. You can group the actions in an order that is convenient for you. To change the order of items, you need to:

- *Android*. *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Hold & Drag*  
    Select an up or down action using the icon (*three vertical lines*) in the list.

- *Android*. Open *Quick action menu → long tap Add action → Hold & Drag*  
    Select an up or down action using the icon (*three vertical lines*) in the list.

- *iOS*. *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tap Edit (Pencil icon) → Hold & Drag*  
     Select an up or down action using the icon (*three vertical lines*) in the list *→ Done*.

#### Actions in Loop

![Custom button Android](@site/static/img/widgets/actions_in_loop_andr.png)  

For some actions, you can assign a list of layers that will change in a circle with each tap.  

- *Map source*
- *Map style*
- *Overlay*
- *Underlay*
- *Terrain color scheme*
- *Add profile*

The button allows you to assign a single layer or a list of layers that change circularly when tapped or with an interim dialog.

- **Show an interim dialog**: displays dialog with maps list
- **Do not show an interim dialog**: map sources will be changed by defined order.


### Change Position on the Map

When enabled, the *Quick Action* widget initially appears in the lower right corner of the screen, positioned just above the zoom buttons. This widget allows you to perform a variety of custom actions directly from the map. You can move it to any part of the screen by performing a long tap and dragging it to your preferred location.

- **Initial appearance**. By default, the quick action widget is placed in the lower right corner of the map interface.

    ![Quick action widget_view](@site/static/img/widgets/quick_action_widget_view.png)

- **Move the widget**. Long tap the widget and drag it to reposition it anywhere on the screen, allowing you to customize your map interface.

    ![Quick action widget_tap](@site/static/img/widgets/quick_action_widget_tap.png)

- **New placement**. Once moved, the widget will remain in its new position on the map screen until manually adjusted again.

    ![Quick action widget_move](@site/static/img/widgets/quick_action_widget_move.png)

- **Multiple [Custom buttons](#custom-buttons)**. You can add multiple quick action buttons to the map screen. These buttons can also be customized and repositioned individually using the same drag-and-drop method.

    ![Quick action widget_move](@site/static/img/widgets/quick_action_widget_multi.png)


### Custom buttons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate android="true" ids="add_button"/>*  

![Custom button Android](@site/static/img/widgets/custom_button_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp;  "**＋**"  &nbsp;*→ <Translate ios="true" ids="add_button"/>*  

![Custom button Android](@site/static/img/widgets/custom_button_ios.png)  

</TabItem>

</Tabs>

**Custom buttons** are additional buttons on the map that act the same as the *Quick Action* button. You can create a button with one or more actions and display it on the map screen.  Custom buttons are located in the *Configure screen → Buttons → Custom buttons* list. Each button has a profile-independent actions list and should have a unique ***Name***, however, a button could be switched on/off individually for each **profile**.

All available [actions](#action-types) are identical to those that can be applied to the default quick action. Custom buttons can be configured as ***Single-action*** buttons, which apply the selected action immediately upon being tapped, without the need to navigate through an extra menu.


### Button Appearance

<InfoAndroidOnly/>

![Quick action button appearance](@site/static/img/widgets/qa_button_appearance_andr.png)

You can modify the appearance of Quick Action buttons through the three-dot menu: *Menu → Configure screen → Custom buttons → Quick action → three-dot menu → Appearance*. This setting provides options to personalize the button's size, shape, icon, and background opacity, offering greater control over how the buttons look on your screen.  

For detailed customization settings, refer to the [Configure Screen](../widgets/configure-screen.md#button-appearance) article, where you can learn how to fine-tune each button's appearance to match your preferences.


## Action Types

### Configure Map

| Action | Description |
|:-------------|:-------------|
| Show / Hide <br/> [**Routes**](../map/vector-maps.md#routes) | You can select route types to enable or disable their display. <br/> Some routes have additional settings. By default, if you have not selected anything in the [Configure Map](../map/configure-map-menu.md) menu, the first route type from the list will be assigned, otherwise, a type of your choice will be assigned. You can read more in the [Routes](../map/routes.md) article. <br/> - ***Cycle routes***  &nbsp;(*Route*, *Node networks*) <br/> - ***Mountain bike routes***  &nbsp;(*MTB scale*, *IMBA*) <br/> - ***Hiking routes***  &nbsp;(*OSMC*, *Network affiliation*, *Node networks*) <br/> - ***Hiking trails difficulty grade***  &nbsp;(*SAC scale*, *CAI scale*) <br/> - ***Ski slopes*** <br/> - ***Horse routes*** <br/> - ***Whitewater sports*** <br/> - ***Running routes*** <br/> - ***Fitness trails*** <br/> - ***Travel routes***  &nbsp;(*Tracks*, *Travel books*, *Points*) <br/> |
| Show / Hide <br/> [**Topography layers**](../plugins/topography.md#overview) | All topography data is presented as separate map layers. You can quickly switch the visibility of these layers with Quick Action. <br/> - ***Contour lines*** <br/> - ***Terrain***.  &nbsp;(*Depending on the layer selected in the [Configure Map](../map/configure-map-menu.md) menu*, *Hillshade*, *Slope*, or *Altitude* *will be displayed.*) |
| Change <br/> [**Terrain color scheme**](../plugins/topography.md#color-scheme) | Allows you to select one or more palettes from a list of existing ones, which will change when you tap the button. |
| Show / Hide <br/> [**Weather layers**](../plugins/weather.md#weather-layers) | All weather data is presented as separate map layers. With Quick Action, you can get quick access to switch the visibility of these layers on the map. <br/> - *Precipitation layer* <br/> - *Cloud layer* <br/> - *Pressure layer* <br/> - *Wind layer* <br/> - *Temperature layer* |
| Open <br/> [**Weather screen**](../plugins/weather.md) <br /> *Android only* | Opens the [*Weather* forecast screen](../plugins/weather.md#weather-forecast-screen) with the detailed information. |
| Show / Hide <br/> [**Favourites**](../personal/favorites.md#view-on-the-map) | Show or hide the favourite points on the map. |
| Show / Hide <br/> [**Tracks**](../personal/tracks/manage-tracks.md#show-tracks-on-map) | Show or hide the last visible tracks on the map. |
| Show / Hide <br/> [**POIs**](../map/point-layers-on-map.md#points-of-interest-poi) | Enable or disable POI layer with selected categories. <br/> - **POI Categories**: allows to select multiple categories <br/> Note: Action will replace previously selected categories if the POI layer was active before.  |
| Change <br/> [**Map mode**](../map/vector-maps.md#map-mode) | Quick access to switch between day and night modes. |
| Change <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | The button allows you to assign a single map source or a list of source that change circularly when tapped or with an interim dialog. <br/> - **Show an interim dialog**. displays a dialog with maps list <br/> - **Do not show an interim dialog**: map sources will be changed by defined order. <br/> - Displayed Name - '**Map source >**'. '>' after the map name indicates what the currently selected map source is. <br/> - Displayed Name - '**> Next map source**'. '>' before the map name indicates what is the next selected map source if the action is executed. <br/> - **Note**: you could have 1 action to change source and select multiple map sources or many quick actions with 1 map source selected, so you could quickly select the map source just from the quick action list. |
| Show / Hide <br /> [**Public transport**](../map/vector-maps.md#transport) | Enable or disable public transport map layer. <br /> - **Transport type** (on first tap): select one or many options from *Transport stops*, *Bus, trolleybus, and shuttle routes*, *Tram and train routes*, *Subway routes*. |
| Change <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Create a list of map sources as map overlay and cycle through them. <br /> Note, works similar to *Change* **<Translate ios="true" ids="quick_action_map_source_title"/>** |
| Change <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) |  Create a list of map sources as map underlay and cycle through them. <br /> Note, works similar to *Change* **<Translate ios="true" ids="quick_action_map_source_title"/>**  |
| Change <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Create a list of map styles for vector maps and cycle through them. <br /> Note: works similar to **<Translate ios="true" ids="quick_action_map_source_title"/>** (see above) |
| Show / Hide <br/> [**Mapillary layer**](../plugins/mapillary.md) | Allows you to view map layers with street-level imagery provided by Mapillary. |
| Show / Hide <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | You can select to display or hide all OSM notes on the map with a single tap on the button. |


### Map Interactions

| Action | Description |
|:-------------|:-------------|
| Map <br/> [**Zoom in**](../map/interact-with-map.md) | Zooming in the map with simultaneously increasing the amount of data displayed. |
| Map <br/> [**Zoom out**](../map/interact-with-map.md) | Downscaling the map. It is convenient to use with [Developer widget - Zoom level](../widgets/info-widgets.md#developer-widgets). |
| Move <br/> [**Map down**](../map/interact-with-map.md) | You can use the quick action button to move the map down.  |
| Move <br/> [**Map up**](../map/interact-with-map.md) | When tapped, the map screen moves up. |
| Move <br/> [**Map to the left**](../map/interact-with-map.md) | When you tap button map screen moves to the left |
| Move <br/> [**Map to the right**](../map/interact-with-map.md) | With a quick action button you can move the map to the right. |
| Move <br/> [**To My location**](../map/interact-with-map.md#my-location--zoom) | Moves the map to the *My location* position. |


### My Places

| Action | Description |
|:-------------|:-------------|
| Add <br/> [**Favorite**](../map/configure-map-menu.md#map-layers) | Adds favorite to a selected (center) map location. <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Group**: adds favorite to a selected group <br /> - **Color**: adds favorite with a preselected color <br /> - **Name**: adds favorite with a given name prefix  |
| Add <br/> [**Track waypoint**](../map/point-layers-on-map.md#track-waypoints) | Adds a new Track waypoint to [currently recording track](../plugins/trip-recording.md) or to [any track from My Places](../personal/tracks/manage-tracks.md). <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Group**: adds favorite to a selected group <br /> - **Color**: adds favorite with a preselected color <br /> - **Name**: adds favorite with a given name prefix  |
| Add <br/> [**Map marker**](../map/configure-map-menu.md#map-layers) | Adds marker to a selected (center) map location. |
| Add <br/> [**Parking place**](../plugins/parking.md) | Adds parking to a selected (center) map location. The old parking position is deleted. |
| Add <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-poi) | Adds POI to a selected (center) map location map (same as context menu action). <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **POI type** (optional): preselect OSM type <br /> - **Tag/Value** (multiple): add [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) tags / values |
| Add <br/> [**OSM Note**](../plugins/osm-editing.md) | Adds [OSM note](https://wiki.openstreetmap.org/wiki/Notes)  <br /> - **Show an interim dialog**: displays confirmation dialog <br /> - **Message**: adds default message to the note |
| Add <br/> [**Media notes**](../plugins/audio-video-notes.md) | Starts audio / photo / video note recording for a selected (center) map location. |
| Create <br/> [**New route**](../plan-route/create-route.md) <br /> *Android only* | Opening of [Plan a route](../plan-route/create-route.md) tool and creation a route for a selected (center) map location. |


### Navigation

| Action | Description |
|:-------------|:-------------|
| Add <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | You can select the center of the map screen as the first intermediate point. The previous destination remains the same. |
| Turn On / Off <br/> [**Voice prompts**](../navigation/guidance/voice-navigation.md) | Mute or unmute voice guidance during navigation. |
| Set <br/> [**Start point**](../navigation/setup/route-navigation.md#set-destinations) | Mark a selected (center) map location as a point of departure. |
| Set <br/> [**Destination**](../navigation/setup/route-navigation.md#set-destinations) | Add a selected (center) map location as a destination. The previous destination becomes the last intermediate point.  |
| Replace <br/> [**Destination**](../navigation/setup/route-navigation.md#intermediate-destinations) | Set / Replace a selected (center) map location as a destination. The previous destination is deleted. |
| Turn On /Off <br/> [**Auto-zoom map**](../map/interact-with-map.md) | Enable or disable map auto zoom during navigation. |
| Start/stop <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Start navigation (if there is a destination point present) or stop navigation. |
| Pause / Resume <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pause / Resume navigation. |
| Remote <br/> [**Next destination point**](../navigation/setup/route-navigation.md#intermediate-destinations) | Removes next intermediate point, if present, otherwise removes destination and displays finish navigation dialog. Action is inactive if you don't have any destination. |
| Simulate <br/> [**Location by GPX**](../plugins/development.md#gpx-track-simulation) | Simulates the location and movement of your device using a GPX track. |


### Settings

| Action | Description |
|:-------------|:-------------|
| Change <br/> [**App profile**](../personal/profiles.md) | Create a list of application profiles and cycle through them.  <br /> - **Show an interim dialog**: displays dialog with profiles list <br /> - **Do not show an interim dialog**: profiles will be changed by defined order. <br /> - **Note**: you could have 1 action with multiple profiles or many actions with 1 profile. |
| Change <br/> [**App profile to next**](../personal/profiles.md) | - |
| Change <br/> [**App profile to previous**](../personal/profiles.md) | - |
| Change <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position) | Allows you to set the placement of the *My Location* cursor on the map. Enables or disables the cursor to always be in the center of the screen. |


## Use Keyboard for Actions

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_custom_2_andr.png)

Using the Quick Action tool's functionality, you can assign required actions to the keys of your external input device. A description can be found in the [Interact with Map](../map/interact-with-map.md#custom-input-device-type) article.


## Related Articles

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)

> *This article was last updated in August 2024*
