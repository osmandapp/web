---
source-hash: 7383905bb345c0cfdbf50ed15d18aae91b8bc80311e03ee2f6696d7066e7903f
sidebar_position: 7
title: Quick Action (Custom buttons)
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

The Quick Action widget is an interactive user interface element that provides fast access to key functions or actions without opening additional settings. This widget is placed on the main map screen and allows you to simplify and speed up interaction with the application, making it more convenient and efficient.

![Quick action widget](@site/static/img/widgets/quick_action_widget.png)

## Quick Action Widget {#quick-action-widget}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_android](@site/static/img/widgets/quick_action_widget_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*

![Quick action widget_ios](@site/static/img/widgets/quick_action_widget_ios.png)

</TabItem>

</Tabs>

To use the Quick Action button, you have to enable this widget first.

<!--
- To open the Quick action menu, just tap the button.
- By default, the Quick action button will appear on the right corner (above the zoom buttons), but it can be moved to any part of the screen by long tapping it. -->

### Add and Delete Actions {#add-and-delete-actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/> → Tap Delete (Bin icon on the right top corner) → Select actions*

![Quick action widget_android_add](@site/static/img/widgets/quick_action_widget_andr.png) ![Custom button Android](@site/static/img/widgets/add_action_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/> → Tap Edit (Pencil icon on the right top corner) → Select actions*

![Quick action widget_ios_add](@site/static/img/widgets/quick_action_widget_2_ios.png) ![Custom button Android](@site/static/img/widgets/add_action_screen_ios.png)

</TabItem>

</Tabs>

All actions are organized in the **Add Action** menu and grouped by type. A complete list of actions and their descriptions can be found in the [Action types](#action-types) section.

You can assign one or more [actions](#action-types) to the quick action button. There are two ways to add actions.

- **In the Configure screen**. Select a button from the list, and tap the&nbsp; "**＋**" &nbsp;button. You need to select the [action type](#action-types) first, and then change its name and [parameters](#action-parameters).
- **In the quick action button panel**. Tap the *Quick Action button* on the map screen. At the end of the list, on the latest screen in the panel, is the "**＋**" &nbsp;*Add Action* box. Tap it and select an action from the [list of types](#action-types).

:::note

- Each action must have a unique name.
- The screens, labeled numerically as Screen 1, Screen 2, etc., are created automatically when the number of actions in the list increases to 6 items.

:::

### Action Parameters {#action-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Quick action widget_android_order](@site/static/img/widgets/quick_action_widget_android_order.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action widget_ios_order](@site/static/img/widgets/quick_action_widget_ios_order.png)

</TabItem>

</Tabs>

The actions assigned to a quick action button are grouped into screens. These groups of actions are opened when you tap that button on the map. New screens are automatically created when the list of actions exceeds *6 items*. You can rearrange actions to suit your preferences by following these steps:

**For Android**.

1. Via configure screen:

    - Go to *<Translate android="true" ids="shared_string_menu,layer_map_appearance,custom_buttons,configure_screen_quick_action"/>*.
    - Use *Hold & Drag* on the two vertical lines icon to rearrange actions.

2. Via quick action menu:

    - Open the quick action menu, then long tap *Add Action*.
    - Use *Hold & Drag* on the two vertical lines icon to rearrange actions.

**For iOS**.

- Navigate to *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,configure_screen_quick_action"/>*.
- Tap *Edit* (pencil icon), then *Hold & Drag* on the three vertical lines icon to rearrange actions.

#### Actions in Loop {#actions-in-loop}

![Custom button Android](@site/static/img/widgets/actions_in_loop_andr.png)

For some actions, you can assign a list of layers that will change in a circle with each tap: *Map source*, *Map style*, *Overlay*, *Underlay*, *Terrain color scheme*, *Add profile*.

The button allows you to assign a single layer or a list of layers that change circularly when tapped or with an interim dialog.

- **Show an interim dialog**. Displays a dialog with a list of maps.
- **Do not show an interim dialog**. The map sources change in a defined order.

### Change Position on the Map {#change-position-on-the-map}

The *Quick Action* widget appears at the bottom corner of the map screen when you first enable it. You can move the widget to any part of the screen by holding and dragging. For precise and accurate placement of buttons on the map screen, they are automatically aligned to the nearest invisible grid position when dragged.

- **Initial appearance**. By default, the quick action widget is placed in the lower right corner of the map interface.

    ![Quick action widget_view](@site/static/img/widgets/quick_action_widget_view.png)

- **Move the widget**. By long pressing and dragging the widget, you can reposition it on the screen, with automatic column and row alignment.

    ![Quick action widget_tap](@site/static/img/widgets/quick_action_widget_tap.png)

- **New placement**. Once moved, the widget will remain in its new position on the map screen until manually adjusted again.

    ![Quick action widget_move](@site/static/img/widgets/quick_action_widget_move.png)

- **Multiple [Custom buttons](#custom-buttons)**. You can add multiple quick action buttons to the map screen. These buttons can also be customized and repositioned individually using the same drag-and-drop method.

    ![Quick action widget_move](@site/static/img/widgets/quick_action_widget_multi.png)

### Custom buttons {#custom-buttons}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp; "**＋**" &nbsp;*→ <Translate android="true" ids="add_button"/>*

![Custom button Android](@site/static/img/widgets/custom_button_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,custom_buttons"/> →*&nbsp; "**＋**" &nbsp;*→ <Translate ios="true" ids="add_button"/>*

![Custom button Android](@site/static/img/widgets/custom_button_ios.png)

</TabItem>

</Tabs>

**Custom buttons** are additional buttons on the map that act the same as the *Quick Action* button. You can create a button with one or more actions and display it on the map screen. Custom buttons are located in the *Configure screen → Buttons → Custom buttons* list. Each button has a profile-independent actions list and should have a unique ***Name***, however, a button could be switched on/off individually for each **profile**.

All available [actions](#action-types) are identical to those that can be applied to the default quick action. Custom buttons can be configured as ***Single-action*** buttons, which apply the selected action immediately upon being tapped, without the need to navigate through an extra menu.

### Quick Action Button Appearance {#quick-action-button-appearance}

<InfoAndroidOnly/>

![Quick action button appearance](@site/static/img/widgets/qa_button_appearance_andr.png)

You can modify the appearance of Quick Action buttons through: *Menu → Configure screen → Custom buttons → Quick action → three-dot menu → Appearance*. This setting provides options to personalize the button's size, shape, icon, and background opacity, offering greater control over how the buttons look on your screen.

For detailed customization settings, refer to the [Configure Screen](../widgets/configure-screen.md#button-appearance) article, where you can learn how to fine-tune each button's appearance to match your preferences.

## Action Types {#action-types}

### Configure Map {#configure-map}

| Action | Description |
| :------------- | :------------- |
| Show / Hide <br/> [**Routes**](../map/vector-maps.md#routes) | You can select route types to enable or disable their display. <br/> Some routes have additional settings. By default, if you have not selected anything in the [Configure Map](../map/configure-map-menu.md) menu, the first route type from the list will be assigned, otherwise, a type of your choice will be assigned. You can read more in the [Routes](../map/routes.md) article. <br/> - ***Cycle routes*** &nbsp;(*Route*, *Node networks*) <br/> - ***Mountain bike routes*** &nbsp;(*MTB scale*, *IMBA*) <br/> - ***Hiking routes*** &nbsp;(*OSMC*, *Network affiliation*, *Node networks*) <br/> - ***Hiking trails difficulty grade*** &nbsp;(*SAC scale*, *CAI scale*) <br/> - ***Ski slopes*** <br/> - ***Horse routes*** <br/> - ***Whitewater sports*** <br/> - ***Running routes*** <br/> - ***Fitness trails*** <br/> - ***Travel routes*** &nbsp;(*Tracks*, *Travel books*, *Points*) <br/> |
| Show / Hide <br/> [**Topography layers**](../plugins/topography.md#overview) | All topography data is presented as separate map layers. You can quickly switch the visibility of these layers with Quick Action. <br/> - ***Contour lines*** <br/> - ***Terrain*** &nbsp;(*Depending on the layer selected in the [Configure Map](../map/configure-map-menu.md) menu*, *Hillshade*, *Slope*, or *Altitude* *will be displayed.*) |
| Change <br/> [**Terrain color scheme**](../plugins/topography.md#modify-color-scheme) | Allows you to select one or more palettes from a list of existing ones, which will change when you tap the button. |
| Show / Hide <br/> [**Weather layers**](../plugins/weather.md#weather-layers) | All weather data is presented as separate map layers. With Quick Action, you can get quick access to switch the visibility of these layers on the map. <br/> - ***Precipitation layer*** <br/> - ***Cloud layer*** <br/> - ***Pressure layer*** <br/> - ***Wind layer*** <br/> - ***Temperature layer*** |
| Open <br/> [**Weather screen**](../plugins/weather.md) <br /> *Android only* | Opens the [*Weather* forecast screen](../plugins/weather.md#weather-forecast-screen) with the detailed information. |
| Show / Hide <br/> [**Favorites**](../personal/favorites.md#view-on-the-map) | Show or hide the favourite points on the map. |
| Show / Hide <br/> [**Tracks**](../personal/tracks/manage-tracks.md#track-menu) | Show or hide the last visible tracks on the map. |
| Show / Hide <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Enable or disable the display of POI layers with selected categories on the map.<br/>You can select multiple POI categories. The action replaces the POI categories from the Configure Map selected without using Quick Actions. |
| Change <br/> [**Map mode**](../map/vector-maps.md#map-mode) | Quick access to switch between day and night modes. |
| Change <br/> [**<Translate ios="true" ids="quick_action_map_source_title"/>**](../map/raster-maps.md) | The button allows you to assign a single map source or a list of source that change circularly when tapped or with an interim dialog. <br/> - *Show an interim dialog*. Displays a dialog with a list of maps. <br/> - *Do not show an interim dialog*. The map sources change in a defined order. <br/> - *Displayed Name* - *Map source* >. ">" after the map name indicates which map source is currently selected. <br/> - *Displayed Name* - > *Next map source*. ">" before the map name indicates what the next selected map source will be if the action is executed. <br/> - *Note*. To change map sources in OsmAnd, you can either set up a single quick action that allows you to switch between multiple map sources, or create several separate quick actions, each for a specific map source. |
| Show / Hide <br /> [**Public transport**](../map/vector-maps.md#transport) | Enable or disable the public transport map layer <br /> - *Transport type*. On the first tap, you can select one or multiple transport types, including *Transport stops*, *Bus, trolleybus, and shuttle routes*, *Tram and train routes*, *Subway routes*. |
| Change <br/> [**<Translate ios="true" ids="map_settings_over"/>**](../map/raster-maps.md) | Create a list of map sources as a map overlay and cycle through them. <br /> - *Note*. To change map overlays in OsmAnd, you can either set up a single quick action that allows you to switch between multiple map overlays, or create several separate quick actions, each for a specific map overlay. |
| Change <br/> [**<Translate ios="true" ids="map_settings_under"/>**](../map/raster-maps.md) | Create a list of map sources as a map underlay and cycle through them. <br /> - *Note*. To change map overlays in OsmAnd, you can either set up a single quick action that allows you to switch between multiple map underlays, or create several separate quick actions, each for a specific map underlay. |
| Change <br/> [**<Translate android="true" ids="quick_action_map_style"/>**](../map/vector-maps.md#default-map-styles) | Create a list of map styles for vector maps and cycle through them. <br /> - *Note*. To change map styles in OsmAnd, you can either set up a single quick action that allows you to switch between multiple map overlays, or create several separate quick actions, each for a specific map style. |
| Show / Hide <br/> [**Mapillary layer**](../plugins/mapillary.md) | Allows you to view map layers with street-level imagery provided by Mapillary. |
| Show / Hide <br/> [**<Translate android="true" ids="osm_notes"/>**](../plugins/osm-editing.md) | You can select to display or hide all OSM notes on the map with a single tap of the button. |

### Interface {#interface}

| Action | Description |
| :------------- | :------------- |
| Navigate <br/> **Previous screen** | A toggle to navigate to the previous screen. |
| Show / Hide <br/> [**Navigation view**](../navigation/setup/route-navigation.md) | Toggles visibility of the navigation screen view. |
| Show / Hide <br/> [**Search view**](../search/search-all.md) | Opens or closes the search view. |
| Show / Hide <br/> [**Side menu**](../start-with/main-menu.md) | Toggles the visibility of the main side menu for accessing core features. |
| Turn On / Off <br/> [**Touch screen lock**](../map/interact-with-map.md#touch-screen-lock) | Activates or deactivates touch screen locking to avoid unintended screen interactions. |

### Map Interactions {#map-interactions}

| Action | Description |
| :------------- | :------------- |
| Map <br/> [**Zoom in**](../map/interact-with-map.md) | Zooming in the map with simultaneously increasing the amount of data displayed. |
| Map <br/> [**Zoom out**](../map/interact-with-map.md) | Down scaling the map. It is convenient to use with [Developer widget - Zoom level](../widgets/info-widgets.md#developer-widgets). |
| Move <br/> [**Map down**](../map/interact-with-map.md) | You can use the quick action button to move the map down. |
| Move <br/> [**Map up**](../map/interact-with-map.md) | When tapped, the map screen moves up. |
| Move <br/> [**Map to the left**](../map/interact-with-map.md) | When you tap the button, the map screen moves to the left. |
| Move <br/> [**Map to the right**](../map/interact-with-map.md) | With a quick action button, you can move the map to the right. |
| Move <br/> [**To My location**](../map/interact-with-map.md#my-location-and-zoom) | Moves the map to *My location* position. |

### My Places {#my-places}

| Action | Description |
| :------------- | :------------- |
| Start / Pause <br/> [**Trip recording**](../plugins/trip-recording.md#new-track-recording) | Begin a recording session of the current track or pause to temporarily stop without completing the trip. |
| Start <br/> [**New trip segment**](../plugins/trip-recording.md#overview-screen) | Start a new segment of the trip without stopping the overall recording. |
| Save <br/> [**Recorded Trip & Continue**](../plugins/trip-recording.md#current-track-recording) | Save the current trip recording and continue recording without interruption. |
| Finish <br/> [**Trip recording**](../plugins/trip-recording.md#current-track-recording) | End the current trip recording session. |
| Add <br/> [**Favorite**](../map/configure-map-menu.md#map-layers) | Adds a favorite to the selected (central) map location. <br /> - *Show an interim dialog*. Displays a confirmation dialog. <br /> - *Group*. Adds a favorite to the selected group. <br /> - *Color*. Adds a favorite with a preselected color <br /> - *Name*. Adds a favorite with the specified name prefix. |
| Add <br/> [**Track waypoint**](../map/point-layers-on-map.md#track-waypoints) | Adds a new Track waypoint to the [currently recording track](../plugins/trip-recording.md) or [any track in My Places](../personal/tracks/manage-tracks.md). <br /> - *Show an interim dialog*. Displays a confirmation dialog. <br /> - *Group*. Adds a favorite to the selected group. <br /> - *Color*. Adds a favorite with a preselected color <br /> - *Name*. Adds a favorite with the specified name prefix. |
| Add <br/> [**Map marker**](../map/configure-map-menu.md#map-layers) | Adds marker to a selected (center) map location. |
| Add <br/> [**Parking place**](../plugins/parking.md) | Adds parking to a selected (center) map location. The old parking position is deleted. |
| Add <br/> [**POI**](../map/point-layers-on-map.md#points-of-interest-pois) | Adds POI to a selected (center) map location map (same as context menu action). <br /> - *Show an interim dialog*. Displays a confirmation dialog. <br /> - *POI Type* (optional). Preselects the OSM POI type. <br /> - *Tag/Value* (multiple). Adds [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Map_Features) tags / values |
| Add <br/> [**OSM Note**](../plugins/osm-editing.md#create--modify-osm-note) | Adds an [OSM note](https://wiki.openstreetmap.org/wiki/Notes) <br /> - *Show an interim dialog*. Displays a confirmation dialog. <br /> - *Message*. Adds a default message to the note. |
| Add <br/> [**Media notes**](../plugins/audio-video-notes.md) | Starts audio / photo / video note recording for a selected (center) map location. |
| Create <br/> [**New route**](../plan-route/create-route.md) <br /> *Android only* | Opens the [Plan a route](../plan-route/create-route.md) tool and creates a route for the selected (central) location on the map. |

### Navigation {#navigation}

| Action | Description |
| :------------- | :------------- |
| Add <br/> [**<Translate android="true" ids="quick_action_first_intermediate"/>**](../navigation/setup/route-navigation.md#intermediate-destinations) | You can select the center of the map screen as the first intermediate point. The previous destination remains the same. |
| Turn On / Off <br/> [**Voice prompts**](../navigation/guidance/voice-navigation.md) | Mute or unmute voice guidance during navigation. |
| Set <br/> [**Start point**](../navigation/setup/route-navigation.md#set-destinations) | Mark a selected (center) map location as a point of departure. |
| Set <br/> [**Destination**](../navigation/setup/route-navigation.md#set-destinations) | Add the selected (central) location on the map as a destination. The previous destination becomes the last intermediate point. |
| Replace <br/> [**Destination**](../navigation/setup/route-navigation.md#intermediate-destinations) | Set / Replace a selected (center) map location as a destination. The previous destination is deleted. |
| Turn On /Off <br/> [**Auto-zoom map**](../map/interact-with-map.md) | Enable or disable map auto zoom during navigation. |
| Start/stop <br/> [**Navigation**](../navigation/setup/route-navigation.md#start--stop-navigation) | Start navigation (if there is a destination point present) or stop navigation. |
| Pause / Resume <br/> [**Navigation**](../navigation/setup/route-navigation.md#pause--resume-navigation) | Pause / Resume navigation. |
| Remote <br/> [**Next destination point**](../navigation/setup/route-navigation.md#intermediate-destinations) | Removes next intermediate point, if present, otherwise removes destination and displays finish navigation dialog. Action is inactive if you don't have any destination. |
| Simulate <br/> [**Location by GPX**](../plugins/development.md#gpx-track-simulation) | Simulates the location and movement of your device using a GPX track. |

### Settings {#settings}

| Action | Description |
| :------------- | :------------- |
| Change <br/> [**App profile**](../personal/profiles.md) | Create a list of application profiles and cycle through them. <br /> - *Show an interim dialog*. Displays a dialog with a list of profiles. <br /> - *Do not show an interim dialog*. The profiles change in a defined order. <br /> - *Note*. You can customize a single action that allows you to switch between multiple profiles, or create several separate actions, each for a specific profile. |
| Change <br/> [**App profile to next**](../personal/profiles.md) | Switches to the next profile in the list. |
| Change <br/> [**App profile to previous**](../personal/profiles.md) | Switches to the previous profile in the list. |
| Change <br/> [**<Translate android="true" ids="quick_action_display_position_in_center"/>**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *Android only* | Allows you to set the placement of the *My Location* cursor on the map. Enables or disables the cursor to always be in the center of the screen. |
| Change <br/> [**Location position on screen**](../widgets/configure-screen.md#display-position-location-position-on-screen) <br /> *iOS only* | Allows you to enable or disable the display of the previously selected My Location cursor position on the map. |

## Use Keyboard for Actions {#use-keyboard-for-actions}

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_custom_2_andr.png)

Using the Quick Action tool's functionality, you can assign required actions to the keys of your external input device. A description can be found in the [Interact with Map](../map/interact-with-map.md#custom-input-device-type) article.

## Related Articles {#related-articles}

- [Configure Screen](./configure-screen.md)
- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)

> *Last updated: April 2025*