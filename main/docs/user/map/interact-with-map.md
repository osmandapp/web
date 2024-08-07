---
sidebar_position: 2
title:  Interact with Map
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

<InfoIncompleteArticle/>


## Overview

This article describes how to customize and interact with the map using buttons and gestures. How to rotate, zoom, change the view angle of the map, rotate it manually, automatically by compass or bearing.


## Gestures

Gestures are important part of the map navigation.

| Map Action | Gesture |
|:------------|:---------------|
|**Move**| Press on the map with **one** finger and move around. |
|**Slide**| Swipe the map with **one** finger. |
|**Zoom in**| Double tap the map with **one** finger   <br /> Double tap the map with **one** finger and then swipe down   <br /> Pinch with **two** fingers. |
|**Zoom out**|  Double tap the map with **two** fingers   <br /> Double tap the map with **one** finger and then swipe up   <br />  Pinch with **two** fingers. |
|**Rotate**| Tap with **two** fingers on the map and rotate. |
|**Tilt** - 3D | Tap with **two** fingers on the map and then move them up/down  <br /> This option is only available with [map rendering engine](../personal/global-settings.md#map-rendering-engine) version 2 (OpenGL).  |

Slide animations could be disabled with special [setting](#disable-all-animations).


## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**My location** is a circle button that shows whether the center of the map is synchronized with *My location* (geolocation of the device). It is also known as "Where am I?". Generally in navigation, the map is synced with device location, and there are no needs to move the map constantly. In this case, the button is hidden and will be activated when the map and *My location* will go out of sync by user gesture. The app will try to find the device location and show it on the map at the center of the screen when the user clicks on it. It will switch to the 3D mode when the user click twice on it.

**My location** button has following indicative states:
- Full blue icon - location is found but it is not synchronized with map
- White icon - location is found and it is synchronized with map
- Grey icon - location has not found yet
- Arrow icon - 3D mode is switched on

**Long-tap** (Android) on **My location** opens [Map Context menu](../map/map-context-menu.md), so user can share own location.

**Zoom buttons** are always visible next to **My Location** and allow to control map zoom level. Changing zoom level doesn't change map synchronization with location. **Long-tap** on **Zoom buttons** opens Map magnifier dialog and allows to change map detailing.

Keep in mind that during navigation zoom can be controlled by **Auto zoom setting**:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>  

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>  


## Map magnifier

Map magnifier is a special way to magnify the map. Essentially it works as a magnifying glass for paper maps, it allows to see the text bigger for raster maps or to see more or less details for the same scale - [Read more](../map/vector-maps.md#map-magnifier).


## Map orientation and Compass

### Map orientation modes

The map orientation modes allow the user to select how the map is displayed on the device screen. Enabling each mode changes the way the map is oriented according to the selected option.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  


- **<Translate android="true" ids="rotate_map_north_opt"/>**. The map is fixed in the direction of the North, which is the top edge of your device. The map does not have automatic rotation. 
   - for **Android** version it has hard lock the North mode (without manual rotation with twor-finger touch & rotate). 
   - for **iOS** version you can rotate it manually with a [two-pointer gesture (two-finger touch & rotate)](../map/interact-with-map.md#gestures), and in this case, the map orientation mode will change to *Manually rotated*. 
- **<Translate android="true" ids="rotate_map_bearing_opt"/>**. The map rotates relative to the direction of your movement known from GPS data. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).
- **<Translate android="true" ids="rotate_map_compass_opt"/>**. The [icon on the button](../widgets/map-buttons.md/#compass) points to the actual North, and the map moves according to the compass orientation of your device. Your device should be in as horizontal a position as possible. If your device does not have a compass sensor, the orientation of the map remains unchanged.
- **<Translate android="true" ids="rotate_map_manual_opt"/>**. When you select this option, the map is fixed in the current position and does not rotate automatically. You can manually change the map orientation with a two-pointer gesture (two-finger touch & rotate).   


**Note:**  

- Map Orientation modes can be opened in the [Profile settings](../personal/profiles.md#appearance) as well as by long-tapping the [Compass button](../widgets/map-buttons.md#compass).  
- To quickly switch between map orientation modes:
   - for **Android** version.  
   **Double tap** the [Compass button](../widgets/map-buttons.md#compass) located in the upper left corner of the screen, if [visible](../widgets/map-buttons.md#display-options).
   - for **iOS** version.  
   **Single tap** the [Compass button](../widgets/map-buttons.md#compass) located in the upper left corner of the screen, if [visible](../widgets/map-buttons.md#display-options).
- (*Android only*) A single tap the [Compass button](../widgets/map-buttons.md#compass) rotates the map orientation to the North in all orientations. Even if it reverts back after a second, such as in compass mode.


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

The compass button shows how the [map is oriented](#map-orientation-modes). The red arrow, or the direction of the arrow in *Movement direction* mode, indicates the North. [The icon on the button](../widgets/map-buttons.md#compass) indicates the current map orientation mode. Double tap (Android), One tap (iOS) the compass button toggles through all modes in turn.


### Rotate map by bearing

If rotate map by bearing (rotation by [movement direction](#map-orientation-modes)) is enabled, the map will be oriented so that the forward view will be strictly above the icon of my location on the map. Without movement, the map won't be rotated.  
In this mode, the center of the map will be located slightly below the center of the device. It allows you to see more map data before you move, which is useful in the navigation mode.  
Rotate map by bearing mode can be changed in [Profile settings](../personal/profiles.md#appearance) or by single tap the [Compass](#compass).  

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

External input device buttons provide a convenient and efficient way to interact with the map and the OsmAnd application interface.  They are located on external devices, such as **Bluetooth or other types of keyboards**, **specialized buttons on vehicle navigation devices**, or [WunderLINQ](https://blackboxembedded.com/) and [Parrot](https://www.parrot.com/en) controllers.   

One of the main functions of buttons on external input devices is to zoom in and out of the map. They also allow you to navigate the map and change its orientation without having to tap and gesture on the screen. Buttons on external input devices support many other functions, such as opening the main menu.

:::note
The keyboard continues to work even if the *External input devices* option is turned off, when *None* is selected. 
:::

#### Setup of External Input Devices

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

To access the settings of an external input device, you need to enable this feature.

- Go to the main *Menu → Settings →* select the *Profile → General settings → Other → External input devices*, and switch to *Enabled*.

- Select a device from those supported by OsmAnd by tapping the *Type* item in the list:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*Android only*), or create [**your own type**](#custom-keys-assignment) (*Android only*).

- There is a different **defined action-key bundle** assignment for each type of external input device. Tap the *<Translate android="true" ids="key_assignments"/>* to see a list of actions and keys. The table of keys is shown below.

- You can read more about external input device actions on GitHub in the [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) package.

| Key | Device | Action |
|:---------|:---------------|:---------------|
|**C**| *Keyboard*   | [My location](../map/interact-with-map.md#my-location--zoom) |
|**D**| *Keyboard*   | [Map orientation](../map/interact-with-map.md#map-orientation-modes) |
|**N**| *Keyboard*   | Open Navigation view. |
|**S**| *Keyboard*   | Open [Search](../search/index.md) view. |
|**P**| *Keyboard*   | Switch to the next app profile. Show toast like message **App profile: Name**. |
|**O**| *Keyboard*   | Switch to the previous app profile. |
|**&#8593; **| *Keyboard*   | Move up  |
|**&#8595; **| *Keyboard*   | Move down  |
|**&#8592; **| *Keyboard*   | Move left  |
|**&#8594; **| *Keyboard*   | Move right  |
|**&#43; **| *Keyboard*  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
|**&#8722; **| *Keyboard*  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8595; **| *Wunderlinq*  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
|**&#8593; **| *Wunderlinq*  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |
| **ESC** | *Wunderlinq*  | Opens Wunderlinq dashboard |
| **Menu** <br/> (*legacy Android*) | *Keyboard*  | [Drawer](../start-with/main-menu.md#main-menu-drawer) |
| **Joystick click** <br/> (*legacy Android*) | *Keyboard*  | [My location](../map/interact-with-map.md#my-location--zoom) |
| **Media button** <br/> (*Android only*)| *Keyboard*  | [AV notes](../plugins/audio-video-notes.md#add-note-on-the-map) |
| **&#8592;** <br/> (*Android only*)| *Parrot*  | [Zoom out](../map/interact-with-map.md#my-location--zoom) |
| **&#8594;** <br/> (*Android only*) | *Parrot*  | [Zoom in](../map/interact-with-map.md#my-location--zoom) |


### Extra Compass Settings  

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Smoothes the rotation of the card with a slower rotation animation, although this introduces a slight delay, not more than 1 second.   
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Smoothes the rotation of the card with a slower rotation animation, although this introduces a slight delay, not more than 1 second.   
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### No Animations

<InfoAndroidOnly/>  

You can turn off all map animations during map changes, such as gestures and buttons.    
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*

### Animate Own Position

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Creates a smooth map panning effect versus the *[My Position](../personal/profiles/#profile-appearance)* icon when in motion. The effect introduces a slight delay versus ground truth of about 1 second. Enabling this has been reported to create some pronounced lag issues under some circumstances, disable if such issues arise.


## Custom Keys Assignment

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

#### Create New Type  

You can create your custom type with a set of actions for the keys of an external input device (such as a keyboard, joystick, or controller). 

- Go to the [External Input Device](#external-input-device-buttons) setting, select **Type** from the list.
- Tap the&nbsp;  "**＋**"  &nbsp;button in the upper right corner of the screen and enter a name.
- After applying, the new type will appear in the *Type* list.
- To select a created type as the main one, tap it in the list.
- Each new type has a three-dot menu next to it that includes actions such as:  
    ***Rename, Duplicate***, and ***Remove***.

#### Add New Key Asssigment

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

After you have created your custom type for the keys, you can assign the required actions to them.

- Select a device type, then tap the **Key assignments** item.
- Tap the ***Add*** button (&nbsp;"**＋**"&nbsp;) in the bottom right corner of the screen. 
- Select the required action then tap the ***Add key*** field and tap the button on your device to assign it to the action.  

:::note
If the button you assign is already being used for another action, you will receive a notification with the option to reassign the button or cancel the assignment. 
:::

#### Delete Actions

![External devices](@site/static/img/map/external_custom_1_andr.png)

A list of actions for *Keyboard* will open by default. You can delete unnecessary actions using the **Edit button** (*pencil-shaped*) in the upper right corner of the screen:
- ***Remove one action*** per action, with the&nbsp;  "**−**"  &nbsp;button in the item field.
- ***Remove all key assignments*** for the selected type by tapping the button in the upper right corner of the screen next to the *Edit name*.      

#### Edit Existing Actions

![External devices](@site/static/img/map/external_custom_2_andr.png)  

Tap an action from the list. There are two buttons in the upper right corner of the screen:
- The **three-dot menu** allows you to:   
    - ***Rename*** the action.  
    - ***Remove*** the keys assigned to this action.

- With the **Edit button** (*pencil-shaped*) you can:
    - **Delete** an existing action.
    - [**Add a new**](../widgets/quick-action.md#custom-buttons) action.
    - The original main name of the *action-key bundle* is not changed.  
    - Also in this mode, you can **add a new key** and **assign an additional keys** to the selected action.  


## Related Articles

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks and Routes](./tracks-on-map.md)
- [Tracks Context menu](./track-context-menu.md)
- [Public transport](./public-transport.md)


> *This article was last updated in July 2024*