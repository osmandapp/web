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


## Overview

This article explains how to customize and interact with the map using various buttons and gestures. It covers how to rotate, zoom, adjust the view angle, and change the map's view angle, rotate it manually or automatically using the compass, or according to bearing.


## Gestures

Gestures are essential for navigating the map easily and intuitively.

| Map Action  | Gesture  |
|:------------|:-------------|
| **Move**    | Tap and hold the map with **one** finger, then drag to move around. |
| **Slide**   | Swipe the map with **one** finger. |
| **Zoom In** | Double tap the map with **one** finger. <br/> Double tap with **one** finger and swipe down. <br/> Pinch with **two** fingers to zoom in. |
| **Zoom Out**| Double tap with **two** fingers. <br/> Double tap with **one** finger and swipe up. <br/> Pinch with **two** fingers to zoom out. |
| **Rotate**  | Tap the map with **two** fingers, then rotate your fingers in a circular motion. |
| **Tilt (3D)** | Tap with **two** fingers and move them up or down. <br/> Available only with [Map Rendering Engine](../personal/global-settings.md#map-rendering-engine) version 2 (OpenGL). |

Slide animations can be disabled in the settings with a [special option](#no-animations).


## My Location and Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

**My location**.  
The *My Location* button is a circular icon that indicates whether the map's center is synchronized with your device’s current geolocation. Often referred to as the "Where am I?" button, it helps you quickly find your location on the map. During navigation, the map typically stays synced with the device's location, so the button remains hidden. However, it becomes visible if the map and your location go out of sync due to user interaction. Tapping the button will re-center the map on your current location, and a double tap will switch the view to 3D mode.

- The *My Location* button has the following states:
  - *Full blue icon*. The location is found but not synced with the map.
  - *White icon*. The location is found and synced with the map.
  - *Grey icon*. The location has not been found yet.
  - *Arrow icon*. 3D mode is activated.

- **Long tap** (*Android*) the *My Location* button opens the [map context menu](../map/map-context-menu.md), allowing you to share your location.

<br/>

**Zoom buttons**.  
*Zoom buttons* are always visible next to *My Location* and allow you to control the map's zoom level.

- Changing the zoom level does not affect the map's synchronization with your location.
- **Long tap** *Zoom buttons* opens *Map magnifier* dialog,allowing you to adjust map detail levels.
- Keep in mind that during navigation, the zoom can be controlled automatically by the **Auto zoom** setting:
   - *<Translate android="true" ids="android_button_seq"/>:*&nbsp; *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation_info,auto_zoom_map"/>*  
   - *<Translate ios="true" ids="ios_button_seq"/>:*&nbsp; *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation,auto_zoom_map"/>*  

### My Location Appearance

You can customize **My Location** button icons using Profile appearance settings. Read more about how to do this [here](../personal/profiles.md#profile-appearance).


## Map Magnifier

The *Map Magnifier* is a tool that enhances the map's visibility, similar to a magnifying glass used with paper maps. It allows you to zoom in on the map to view text and details more clearly or to adjust the level of detail while maintaining the same scale. For more information, go to [Vector Maps](../map/vector-maps.md#map-magnifier) article.


## Map Orientation Modes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_2_andr.png)  
  
</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_appearance,rotate_map_to"/>*

![Compass widget](@site/static/img/map/map_orientation_mode_ios.png)  

</TabItem>

</Tabs>  

*Map orientation modes* allow you to choose how the map is displayed on the device screen. OsmAnd offers modes such as **Manually Rotated**, **Movement Direction**, **Compass Direction**, and **North is Up**. Enabling each mode changes the way the map is oriented according to the selected option. For full details, see the [Map Buttons](../widgets/map-buttons.md#compass) article.


## Compass

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/compass_widget.png)

</TabItem>

</Tabs>

The compass button shows how the [map is oriented](#map-orientation-modes). The *red arrow* on icons, or the direction of the arrow in *Movement direction* mode, indicates the North. [The icon on the compass button](../widgets/map-buttons.md#compass) indicates the current map orientation mode. The compass button widget offers three [interaction options](../widgets/map-buttons.md#compass-tapping-behavior): *Single Tap* rotates the map to the North, *Double Tap* alternates between all map orientation modes, and *Long Tap* opens the list of modes.


## Rotate Map by Bearing

In the **rotate map by bearing** mode ([Movement direction](../widgets/map-buttons.md#compass)), the map automatically aligns with your direction of movement, so the area ahead of you is displayed at the top of the screen. This mode enhances navigation by shifting the map center slightly downward, showing more of the route ahead. If you are stationary, the map stays fixed.  

You can activate this feature via *Menu → Settings → Profiles → General settings → Appearance → Map orientation* or by double tapping the [Compass button](../widgets/map-buttons.md#compass-tapping-behavior). For more details about bearing, see [here](../widgets/nav-widgets.md#bearing-widget).


## Map Tilt and Horizon

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Tilt android 1](@site/static/img/map/tilt_horizon_andr_1.png)  ![Tilt android 2](@site/static/img/map/tilt_horizon_andr_2.png)
  
</TabItem>

<TabItem value="ios" label="iOS">

![Tilt ios 1](@site/static/img/map/tilt_horizon_ios_1.png) ![Tilt ios 2](@site/static/img/map/tilt_horizon_ios_2.png)  
</TabItem>

</Tabs>  

With new map [rendering engine](../personal/global-settings.md#map-rendering-engine) you can change [camera tilt](../plugins/development.md#camera-tilt) from 90 (no tilt) to 10 degrees. Approximately at a map tilt less than 20-22 degrees (this parameter depends on zoom level), the imaginary horizon line becomes visible. Unlike the real one, the program horizon is always straight.  

Under the horizon, you can see so-called *haze* or *fog*. This area of the map is filled with grey color, only a few map details can be observed.  
The use of fog is necessary since the display of remote objects on the map requires significant computing resources and is not always justified due to map [distortions](../plugins/development.md#comparison-with-a-satellite-imagery) at small viewing angles. So the visible distance on the OsmAnd map is currently limited to 35 tiles.  

:::info
Map tilt can be changed by a long tap on the screen with two fingers and moving them up/down. You can also change the tilt by tapping on the [My location](#my-location-and-zoom) icon in the lower-right corner of the screen (only 45 and 90-degree positions are available).  
You can not change the Camera tilt when the old [map rendering engine](../personal/global-settings.md#map-rendering-engine) (version 1) is on.
:::


## Touch Screen Lock

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Quick action button Touch Screen Lock Android](@site/static/img/widgets/qa_touch_lock_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Quick action button Touch Screen Lock iOS](@site/static/img/widgets/qa_touch_lock_ios.png)

</TabItem>

</Tabs>

Use the **Touch Screen Lock** feature to avoid accidental taps during navigation. This is especially helpful for activities like cycling or hiking, where unintentional touches might disrupt your route.

**Unlocking**.  
Tap the on-screen button, or, if the lock is activated, via an external button (e.g., Volume Down), press the external button and tap the on-screen button.  

**Setup**.

- Navigate to *Menu → Configure screen → Custom buttons*.
- Select *+ → Add action → Interface → Touch Screen Lock*.

Clear on-screen messages will guide you when locking or unlocking the screen.


## Settings

### Extra Compass Settings  

- **<Translate android="true" ids="use_kalman_filter_compass"/>** - <Translate android="true" ids="use_kalman_filter_compass_descr"/> Smoothes the rotation of the map with a slower rotation animation, although this introduces a slight delay, not more than 1 second.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_kalman_filter_compass"/>*

- **<Translate android="true" ids="use_magnetic_sensor"/>** - <Translate android="true" ids="use_magnetic_sensor_descr"/> Smoothes the rotation of the map with a slower rotation animation, although this introduces a slight delay, not more than 1 second.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,shared_string_other,use_magnetic_sensor"/>*

### No Animations

<InfoAndroidOnly/>  

You can disable all map animations during map interactions, including gestures and buttons.  
*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,do_not_use_animations"/>*


### Animate Own Position

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,routing_settings_2,animate_my_location"/>*  

Creates a smooth map panning effect versus the *[My Position](../personal/profiles/#profile-appearance)* icon when in motion. The effect introduces a slight delay versus ground truth of about 1 second. Enabling this has been reported to create some pronounced lag issues under some circumstances, disable it if such issues arise.


## External Input Devices

External input device buttons provide a convenient and efficient way to interact with the map and the OsmAnd application interface.  They are located on external devices, such as **Bluetooth or other types of keyboards**, **specialized buttons on vehicle navigation devices**, or [WunderLINQ](https://blackboxembedded.com/) and [Parrot](https://www.parrot.com/en) controllers.  

One of the main functions of buttons on external input devices is to zoom in and out of the map. They also allow you to navigate the map and change its orientation without having to tap and gesture on the screen. Buttons on external input devices support many other functions, such as opening the *Main Menu*.

:::note
The keyboard remains functional even when the *External input devices* option is turned off, and *None* is selected.
:::

### Preconfigured Input Device

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,other_menu_group,external_input_device"/>*

![External devices](@site/static/img/map/external_menu_android.png) ![External devices](@site/static/img/map/external_types_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device"/>*

![External devices](@site/static/img/map/external_types_ios.png)

</TabItem>

</Tabs>  

To access the settings of an external input device, you need to enable this feature.

- Go to the main *Menu → Settings →* select the *Profile → General settings → Other → External input devices*, and switch to *Enabled*.

- Select a device from those supported by OsmAnd by tapping the *Type* item in the list:  
    **<Translate android="true" ids="sett_generic_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_wunderlinq_ext_input"/>**,&nbsp; **<Translate android="true" ids="sett_parrot_ext_input"/>** (*Android only*), or create [**your own type**](#custom-input-device-type) (*Android only*).

- There is a different **defined action-key bundle** assignment for each type of external input device. Tap the *<Translate android="true" ids="key_assignments"/>* to see a list of actions and keys. The table of keys is shown below.

- You can read more about external input device actions on GitHub in the [MapActivityKeyListener](https://github.com/osmandapp/OsmAnd/blob/22e40f113ce5c6df97f2f1687d5024ae38a4d28b/OsmAnd/src/net/osmand/plus/activities/MapActivityKeyListener.java#L82) package.

| Key | Device | Action |
|:---------|:---------------|:---------------|
|**C**| *Keyboard*   | Move - [To My location](#my-location-and-zoom) |
|**D**| *Keyboard*   | Change - [Map orientation](#map-orientation-modes) |
|**N**| *Keyboard*   | Show / Hide - Navigation view |
|**S**| *Keyboard*   | Show / Hide - [Search view](../search/index.md) |
|**P**| *Keyboard*   | Change - App profile to next |
|**O**| *Keyboard*   | Change - App profile to previous |
|**&#8593;**| *Keyboard*   | Move - Map up  |
|**&#8595;**| *Keyboard*   | Move - Map down  |
|**&#8592;**| *Keyboard*   | Move - Map to the left  |
|**&#8594;**| *Keyboard*   | Move - Map to the right  |
|**&#43;** **=**| *Keyboard*  | Map - [Zoom in](#my-location-and-zoom) |
|**&#8722;**| *Keyboard*  | Map - [Zoom out](#my-location-and-zoom) |
|**Press back**| *Keyboard*   | Navigate – Previous screen  |
|**&#8595;**| *Wunderlinq*  | Map - [Zoom out](#my-location-and-zoom) |
|**&#8593;**| *Wunderlinq*  | Map - [Zoom in](#my-location-and-zoom) |
| **ESC** | *Wunderlinq*  | Open WunderLINQ Datagrid |
| **M** <br/> (*legacy Android*) | *Keyboard*  | Show / Hide - [Side menu](../start-with/main-menu.md#main-menu-drawer) |
| **Joystick press** <br/> (*legacy Android*) | *Keyboard*  | Move - [To My location](#my-location-and-zoom) |
| **Media button** <br/> (*Android only*)| *Keyboard*  | Show / Hide - [AV notes](../plugins/audio-video-notes.md#add-note-on-the-map) |
| **&#8592;** <br/> (*Android only*)| *Parrot*  | Map - [Zoom out](#my-location-and-zoom) |
| **&#8594;** <br/> (*Android only*) | *Parrot*  | Map - [Zoom in](#my-location-and-zoom) |


### Custom Input Device Type

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,general_settings_2,external_input_device,shared_string_type"/> → &#43;*

![External devices](@site/static/img/map/external_mypilot_android.png)  ![External devices](@site/static/img/map/external_mypilot2_android.png)

If you want to assign keys for an external input device (such as a keyboard, joystick, or controller), you need to create a device type: go to the [External Input Device](#external-input-devices) setting, select **Type** from the list, tap the&nbsp;  "**＋**"  &nbsp; and enter a name. Each type has a menu with the following options: ***Rename, Duplicate***, and ***Remove***.

### Add Action & Key Asssigments

![External devices](@site/static/img/map/external_custom_4_andr.png)  ![External devices](@site/static/img/map/external_custom_3_andr.png)

After you have created a custom input type, you can assign the required actions to the keys. A wide range of [action types](../widgets/quick-action.md#action-types) from the Quick Action widget is available.

- Select a device type, then tap the **Key assignments** item.
- Tap the ***Add*** button (&nbsp;"**＋**"&nbsp;) in the bottom right corner of the screen.
- Select the required action then tap the ***Add key*** field and tap the button on your device to assign it to the action.  

:::note

- If the button you assign is already being used for another action, you will receive a notification with the option to reassign the button or cancel the assignment.
- Later you can change actions and key assignments or add other ones for already created actions, just select an item in the Key assignments list.

:::

### Delete Key assignment

![External devices](@site/static/img/map/external_custom_1_andr.png)

You can delete multiple unnecessary actions using the **Edit button** (*pencil-shaped*) in the upper right corner of the screen at once:

- ***Remove one action*** per action, with the&nbsp;  "**−**"  &nbsp;button in the item field.
- ***Remove all key assignments*** for the selected type by tapping the button in the upper right corner of the screen next to the *Edit name*.


## Related Articles

- [Map Context menu](./map-context-menu.md)
- [Configure Map](./configure-map-menu.md)
- [Vector maps (Map styles)](./vector-maps.md)
- [Raster Maps (Online / Offline)](./raster-maps.md)
- [Points on the map](./point-layers-on-map.md)
- [Tracks and Routes](./tracks/index.md)
- [Tracks Context menu](./tracks/track-context-menu.md)
- [Public transport](./public-transport.md)


> *This article was last updated in December 2024*
