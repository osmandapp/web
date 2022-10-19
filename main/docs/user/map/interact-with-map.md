---
sidebar_position: 1
title:  Interact with map
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';


How to interact with map using buttons and gestures, so you could pan, rotate and zoom in/out the map, how to rotate the map manually or automatically by compass or by bearing and how to change zoom scale.


## Gestures

Gestures are important part of the map navigation.

| Map Action | Gesture |
|:------------|:---------------|
|**Move**| Press on the map with **one** finger and move around |
|**Slide**| Swipe the map with **one** finger |
|**Zoom in**| Double tap on the map with **one** finger   <br /> Double tap on the map with **one** finger and then swipe up   <br /> Pinch with **two** fingers |
|**Zoom out**|  Double tap on the map with **two** fingers   <br /> Double tap on the map with **one** finger and then swipe down   <br />  Pinch with **two** fingers |
|**Rotate**| Press with **two** fingers on the map and rotate |
|**Tilt** - 3D | Press with **two** fingers on the map and then swipe up or down. <br /> Android: [switch on OpenGL rendering](../plugins/development.md#plugin-settings) and restart OsmAnd. <br /> Currently we have variable tilt angle, it depends on device's screen height in pixels: Minimum - from 33 to 45 degrees. Note: Thus tablets have a smaller tilt angle than phones. |

Slide animations could be disabled with special [setting](#disable-all-animations).

## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**My location** is a circle button that shows whether the center of the map is synchronized with "my location" (geolocation of the device). It is also known as "Where am I?". Generally in navigation, the map is synced with device location, and there are no needs to move the map constantly. In this case, the button is hidden and will be activated when the map and 'my location' will go out of sync by user gesture. The app will try to find the device location and show it on the map at the center of the screen when the user clicks on it. It will switch to the 3D mode when the user click twice on it.

**My location** button has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location has not found yet
- Arrow icon - 3D mode is switched on

**Long tap** on **My location** opens Context menu, so user can share own location.

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detailing.

Keep in mind that during navigation zoom can be controlled by **Auto zoom setting**:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>

<p> </p>

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,shared_string_settings,app_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>

<p> </p>


## Map magnifier
Map magnifier is a special way to magnify the map. Essentially it works as a magnifying glass for paper maps, it allows to see the text bigger for raster maps or to see more or less details for the same scale - [Read more](../map/vector-maps.md#map-magnifier).

## Map orientation & Compass

![Compass widget](@site/static/img/widgets/compass_widget.png)

Compass widget indicates how map is oriented on the device screen and top arrow / red arrow points where the north of map is located. It also shows the current Map orientation mode. Clicking on the compass will cycle through all Map orientation modes.

### Configure visibility

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_widget_compass"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,layer_map_appearance,map_widget_left,map_widget_compass"/>

<p> </p>

### Map orientation modes
- **<Translate android="true" ids="rotate_map_none_opt"/>** - map is not being rotated by any external movements, and it could be rotated only by *2 pointer gesture* (2 double tap & rotate).
- **<Translate android="true" ids="rotate_map_bearing_opt"/>** - map is being rotated by bearing, i.e. direction of your movement (GPS direction) is synchronized with the map. [Read more](#rotate-map-by-bearing).
- **<Translate android="true" ids="rotate_map_compass_opt"/>** - map is being synchronized with the device compass orientation. So, [Compass widget](../widgets/map-buttons.md/#compass) will point to actual Earth North if device is held flat. In case compass sensor is not present on device, map orientation won't change.

Map orientation could be changed in [Profile settings](../personal/profiles.md#appearance):

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,rotate_map_to_bearing"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,shared_string_settings,app_profiles,general_settings_2,map_settings_appearance,rotate_map_to_bearing"/>


### Rotate map by bearing
If rotate map by bearing is enabled, then the map will be oriented, so that head looking view will be strictly above (higher) my location icon on the map. Without movement the map won't be rotated. In this mode the center of the map will be located slightly below the center of the device. It allows seeing more map information ahead of your movement which is usable in the navigation mode. It can be disabled by a setting 

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,always_center_position_on_map"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,shared_string_settings,app_profiles,general_settings_2,always_center_position_on_map"/>

## Settings

### Disable all animations

You can disable all map animations during map change (gestures and buttons) in Settings <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>

### Extra compass settings

- ** Use Kalman filter (Android)** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till:  <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>

- ** Use Magnetic sensor** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till:  <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>

## External input device buttons (Android)

Select an external control device, such as a keyboard or WunderLINQ.

**<Translate android="true" ids="android_button_seq"/>** <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>


> Note: the keyboard works with the setting disabled too. 

| Key | Device | Action |
|:------------|:---------------|:---------------|
|**C**| Keyboard   |"[My location](../map/interact-with-map.md#my-location--zoom)" |
|**D**| Keyboard   |"[Map orientation](../map/interact-with-map.md#map-orientation-modes)"  |
|**&#8593; **| Keyboard   | Move up  |
|**&#8595; **| Keyboard   | Move down  |
|**&#8592; **| Keyboard   | Move left  |
|**&#8594; **| Keyboard   | Move right  |
|**&#43; **| Keyboard  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8722; **| Keyboard  |[Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**Menu** (legacy Android) | Keyboard  |[Drawer](../start-with/main-menu.md#main-menu-drawer) |
|**Joystick click** (legacy Android) | Keyboard  | "[My location](../map/interact-with-map.md#my-location--zoom)" |
|**Media button**| Keyboard  |[AV notes](../plugins/audio-video-notes.md#add-note-on-the-map) |
|**&#8592; **| Parrot  |[Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8594; **| Parrot  |[Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8595; **| Wunderlinq  |[Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8593; **| Wunderlinq  |[Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**ESC**| Wunderlinq  | Opens Wunderlinq dashboard |

> You can check other details in [the code](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82).
