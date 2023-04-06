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
|**Tilt** - 3D | Press with **two** fingers on the map and then move them up/down  <br /> This option is only available with [map rendering engine](../personal/global-settings.md#map-rendering-engine) version 2 (OpenGL)  |

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

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>

<p> </p>


## Map magnifier
Map magnifier is a special way to magnify the map. Essentially it works as a magnifying glass for paper maps, it allows to see the text bigger for raster maps or to see more or less details for the same scale - [Read more](../map/vector-maps.md#map-magnifier).

## Map orientation & Compass

### Map orientation modes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>

![Compass widget](@site/static/img/map/map_orientation_android.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>

![Compass widget](@site/static/img/map/map_orientation_ios.png)  

</TabItem>

</Tabs> 


- **<Translate android="true" ids="rotate_map_north_opt"/>** - north is always aligned towards the device top. The map orientation is fixed, i.e. not being rotated automatically, but can be rotated manually via a *2 pointer gesture* (2 finger touch & rotate).
- **<Translate android="true" ids="rotate_map_manual_opt"/>** - the map orientation is fixed, i.e. not being rotated automatically, but has been rotated manually via a *2 pointer gesture* (2 finger touch & rotate). A single tap on the compass returns the to its north-is-up orientation.
- **<Translate android="true" ids="rotate_map_bearing_opt"/>** - the map is being rotated by your bearing, i.e. the direction of your movement (GPS direction) is synchronized with the map. [Read more](#rotate-map-by-bearing).
- **<Translate android="true" ids="rotate_map_compass_opt"/>** - the map is being synchronized with the device compass orientation. The [Compass widget](../widgets/map-buttons.md/#compass) will indicate ground truth north while the device is held flat. On devices without compass sensor the map orientation won't change.



:::note
Map orientation mode can be changed in [Profile settings](../personal/profiles.md#appearance) or by single tap on the [Compass](#compass).
:::

### Compass

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*Menu → Configure screen → Buttons → Compass*  

![Compass widget](@site/static/img/widgets/compass_widget.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

*Menu → Configure screen → Left panel → Compass*  

![Compass widget](@site/static/img/widgets/compass_widget.png)  

</TabItem>

</Tabs>  

The compass widget indicates how the map is oriented: the red arrow or the top of the blue arrow points towards north. It also shows the current [Map orientation mode](#map-orientation-modes). Single tap on the compass will cycle through all of the modes.  

### Rotate map by bearing

If rotate map by bearing (rotation by [movement direction](#map-orientation-modes)) is enabled, the map will be oriented so that the forward view will be strictly above the icon of my location on the map. Without movement, the map won't be rotated.  
In this mode, the center of the map will be located slightly below the center of the device. It allows you to see more map data before you move, which is useful in the navigation mode.  
Rotate map by bearing mode can be changed in [Profile settings](../personal/profiles.md#appearance) or by single tap on the [Compass](#compass).  

### Map Tilt and Horizon

With new map [rendering engine](../personal/global-settings.md#map-rendering-engine) you can change [camera tilt](../plugins/development.md#camera-tilt) from 90 (no tilt) to 10 degrees. Approximately at map tilt less than 20-22 degrees (this parameter depends on zoom level), the imaginary horizon line becomes visible. Unlike the real one, the program horizon is always straight.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

Under horizon you can see so-called *haze* or *fog*. This area of the map is filled with grey color, only few map details can be observed.  
The use of fog is necessary, since the display of remote objects on the map requires significant computing resources and is not always justified due to map [distortions](../plugins/development.md#comparison-with-a-satellite-imagery) at small viewing angles. So the visible distance on OsmAnd map is currently limited to 35 tiles.  


:::info
Map tilt can be changed by long press on the screen with two fingers and moving them up/down. You can also change tilt by tapping on the ["My location"](#my-location--zoom) icon in the lower-right corner of the screen (only 45 and 90 degree positions are available).  
You can not change Camera tilt when old [map rendering engine](../personal/global-settings.md#map-rendering-engine) (version 1) is on.
:::

## Settings

### Disable all animations

You can disable all map animations during map change (gestures and buttons) in Settings <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>

### Extra compass settings

- ** Use Kalman filter (Android)** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till:  <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>

- ** Use Magnetic sensor** - smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till:  <Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>

## External input device buttons

Select an external control device, such as a keyboard or WunderLINQ.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>
  
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


</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>

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


</TabItem>

</Tabs>  

