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
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

## Overview

How to interact with map using buttons and gestures, so you could pan, rotate and zoom in/out the map, how to rotate the map manually or automatically by compass or by bearing and how to change zoom scale.


## Gestures

Gestures are important part of the map navigation.

| Map Action | Gesture |
|:------------|:---------------|
|**Move**| Press on the map with **one** finger and move around |
|**Slide**| Swipe the map with **one** finger |
|**Zoom in**| Double tap on the map with **one** finger   <br /> Double tap on the map with **one** finger and then swipe down   <br /> Pinch with **two** fingers |
|**Zoom out**|  Double tap on the map with **two** fingers   <br /> Double tap on the map with **one** finger and then swipe up   <br />  Pinch with **two** fingers |
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

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>  


## Map magnifier
Map magnifier is a special way to magnify the map. Essentially it works as a magnifying glass for paper maps, it allows to see the text bigger for raster maps or to see more or less details for the same scale - [Read more](../map/vector-maps.md#map-magnifier).


## Map orientation & Compass

### Map orientation modes

The map orientation modes allow the user to select how the map is displayed on the device screen. Enabling each mode changes the way the map is oriented according to the selected option.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_android.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_ios.png)  

</TabItem>

</Tabs>  


- **<Translate android="true" ids="rotate_map_north_opt"/>** - The map is fixed in the direction of the North, which is the top edge of your device. The map does not have automatic rotation, but you can rotate it manually with a [two-pointer gesture (two-finger touch & rotate)](../map/interact-with-map.md#gestures). In this case, the map orientation mode will change to Manual rotation.  
- **<Translate android="true" ids="rotate_map_bearing_opt"/>** - The map rotates relative to the direction of your movement known from GPS data. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).
- **<Translate android="true" ids="rotate_map_compass_opt"/>** - The [icon on the button](../widgets/map-buttons.md/#compass) points to the actual North, and the map moves according to the compass orientation of your device. Your device should be in as horizontal a position as possible. If your device does not have a compass sensor, the orientation of the map remains unchanged.
- **<Translate android="true" ids="rotate_map_manual_opt"/>** - When you select this option, the map is fixed in the current position and does not rotate automatically. You can manually change the map orientation with a two-pointer gesture (two-finger touch & rotate).   


**Note**  

- Map Orientation modes can be opened in [*Profile settings*](../personal/profiles.md#appearance) as well as by long-tapping the [*Compass button*](../widgets/map-buttons.md#compass).  

- To quickly switch map orientation modes, tap the "Compass" button located in the upper left corner of the screen, if [it is visible](../widgets/map-buttons.md#display-options).


### Compass

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_widget_compass"/>* 

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_left,map_widget_compass"/>* 

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs> 

The compass button shows how the [map is oriented](#map-orientation-modes). The red arrow, or the direction of the arrow in *Movement direction* mode, indicates the North. [The icon on the button](../widgets/map-buttons.md#compass) indicates the current map orientation mode. One tap the compass button toggles through all modes in turn.


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


### External input device buttons

External input device buttons provide a convenient and efficient way to interact with the map and the OsmAnd application interface.  They are located on external devices, such as Bluetooth or other types of keyboards, specialized buttons on vehicle navigation devices, [WunderLINQ](https://blackboxembedded.com/), [Parrot](https://www.parrot.com/en) and other controllers.  

One of the main functions of the external input device buttons is to zoom in and out on the map. They also allow you to navigate around the map, and change map orientation without having to tap and gesture at the screen. The external input device buttons also support other functions, such as opening the main menu or AV Notes.  

:::note
The keyboard continues to work even if the *External input devices* option is turned off, when *None* is selected. 
:::

Enabled the _External input device_ function:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

After you need to choose your device *<Translate android="true" ids="shared_string_type"/>*: *<Translate android="true" ids="sett_generic_ext_input"/>*, *<Translate android="true" ids="sett_parrot_ext_input"/>*, *<Translate android="true" ids="sett_wunderlinq_ext_input"/>*.

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

Each External input devices Type has *<Translate android="true" ids="key_assignments"/>*. You can click on *<Translate android="true" ids="key_assignments"/>* to see the list of actions and kyes. Table with _Keys_ you can see below:

| Key | Device | Action |
|:---------|:---------------|:---------------|
|**C**| Keyboard   | [My location](../map/interact-with-map.md#my-location--zoom) |
|**D**| Keyboard   | [Map orientation](../map/interact-with-map.md#map-orientation-modes) |
|**N**| Keyboard   | Open Navigation view. |
|**S**| Keyboard   | Open [Search](../search/index.md) view. |
|**P**| Keyboard   | Switch to the next app profile. Show toast like message **App profile: Name**. |
|**O**| Keyboard   | Switch to the previous app profile. |
|**&#8593; **| Keyboard   | Move up  |
|**&#8595; **| Keyboard   | Move down  |
|**&#8592; **| Keyboard   | Move left  |
|**&#8594; **| Keyboard   | Move right  |
|**&#43; **| Keyboard  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8722; **| Keyboard  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**Menu** (legacy Android) | Keyboard  | [Drawer](../start-with/main-menu.md#main-menu-drawer) |
|**Joystick click** (legacy Android) | Keyboard  | [My location](../map/interact-with-map.md#my-location--zoom) |
|**Media button**| Keyboard  | [AV notes](../plugins/audio-video-notes.md#add-note-on-the-map) |
|**&#8592; **| Parrot  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8594; **| Parrot  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8595; **| Wunderlinq  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8593; **| Wunderlinq  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**ESC**| Wunderlinq  | Opens Wunderlinq dashboard |

:::note
You can read more about the actions of external input devices on GitHub in the [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) package.
:::

#### Own Type creation

You can create your own *<Translate android="true" ids="shared_string_type"/>*:

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png) ![External devices](@site/static/img/map/external_mypilot2_android.png)

Now, you can change buttons for actions. Just go to your created *<Translate android="true" ids="shared_string_type"/>*:

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → Your type → <Translate android="true" ids="key_assignments"/> → Click to any Actions or Map interactions → &#43; or <Translate android="true" ids="shared_string_button"/>*

![External devices](@site/static/img/map/external_assign_android.png)

Now, press the button on your device to assign it to the action.

![External devices](@site/static/img/map/external_assign2_android.png)

If this button is used for another action you see a warning about it and a question about the reassignment.

![External devices](@site/static/img/map/external_assign3_android.png) ![External devices](@site/static/img/map/external_assign4_android.png)

This way the user can assign his actions to the _External input device_ buttons. You can reset key assignments by clicking to _Reset button_ in the top corner of the screen: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → Your type → <Translate android="true" ids="key_assignments"/> → Reset*. All key assignments for the selected type will be removed.

![External devices](@site/static/img/map/external_assign5_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

After you need to choose your device *Type*: *<Translate ios="true" ids="sett_generic_ext_input"/>*, *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*.

![External devices](@site/static/img/map/external_types_ios.png)

Each External input devices Type has *Key assignments*. Table with _Keys_ you can see below:

| Key | Device | Action |
|:------------|:---------------|:---------------|
|**C**| Keyboard   | [My location](../map/interact-with-map.md#my-location--zoom) |
|**D**| Keyboard   | [Map orientation](../map/interact-with-map.md#map-orientation-modes) |
|**N**| Keyboard   | Open Navigation view. |
|**S**| Keyboard   | Open [Search](../search/index.md) view. |
|**P**| Keyboard   | Switch to the next app profile. Show toast like message **App profile: Name**. |
|**O**| Keyboard   | Switch to the previous app profile. |
|**&#8593; **| Keyboard   | Move up  |
|**&#8595; **| Keyboard   | Move down  |
|**&#8592; **| Keyboard   | Move left  |
|**&#8594; **| Keyboard   | Move right  |
|**&#43; **| Keyboard  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8722; **| Keyboard  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |


</TabItem>

</Tabs>  


### Extra compass settings  

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Smoothes the rotation of the card with a slower rotation animation, although this introduces a slight delay, not more than 1 second.   
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Smoothes the rotation of the card with a slower rotation animation, although this introduces a slight delay, not more than 1 second.   
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### No animations

You can turn off all map animations during map changes, such as gestures and buttons.    
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*

<InfoAndroidOnly/>  

### Animate own position (iOS: Animate my location)

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,routing_settings,routing_settings_2,animate_my_location"/>*  

Creates a smooth map panning effect versus the *[My Position](../personal/profiles/#profile-appearance)* icon when in motion. The effect introduces a slight delay versus ground truth of about 1 second. Enabling this has been reported to create some pronounced lag issues under some circumstances, disable if such issues arise.


