---
sidebar_position: 2
title:  Map Buttons
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

Map buttons, including *Zoom*, *Search*, *Directions*, *Compass*, *My Location*, *3D Mode*, and *Menu*, serve as the primary controls for interacting with the map. Each button offers specific functionalities to enhance your navigation and map usage experience.


## My Location and Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

The *My Location* and *Zoom* buttons control how the map is displayed:

- **My Location**. Centers the map on your current location.
- **Zoom**. Adjusts the map's zoom level to provide more or less detail.  

For further details on using these buttons, refer to the [Interact with map](../map/interact-with-map.md#my-location--zoom) article.


## Directions

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

The **Directions** button is essential for route planning and navigation:

- [*Build a route*](../navigation/index.md). Use this button to create a route.
- [*Start navigation*](../navigation/index.md). Initiate turn-by-turn navigation.
- In navigation mode, the *Directions* button is not visible by default but appears after a short tap on the map.

Indicative states of the *Directions* button:

- *Default grey icon*. Indicates that no route has been built. Tapping this icon will prompt a dialog to create a new route.
- *Default blue icon*. Indicates that a route has been built but navigation has not started. Tapping this icon will display a dialog with route information.
- *Blue arrow icon*. Indicates that navigation is active. Tapping this icon will show a dialog with navigation details.


## Configure Map

![Configure Map](@site/static/img/widgets/configure_map.png)

The **Configure map** button provides access to the [Configure Map menu](../map/configure-map-menu.md). The icon also reflects the [Current app profile](../personal/profiles.md), allowing you to quickly identify and switch between different profiles.


## Main Menu

![Main menu button](@site/static/img/widgets/main_menu_button.png)

The [**Main menu**](../start-with/main-menu.md) button opens the general menu, granting access to [all application features](../start-with/main-menu.md). In navigation mode, this button is hidden by default and becomes visible after a short tap on the map.


## Search

![Search button](@site/static/img/widgets/search_button.png)

The Search button offers quick access to the [search capabilities](../search/index.md), allowing you to find locations, points of interest, and other information directly from the map.


## Compass

The Compass button indicates the orientation of the map on your device screen. For more information on how the map orientation is managed, refer to the *Map* section of the [*Interact with map*](../map/interact-with-map.md#map-orientation--compass) article.


<!--

|  |  |
|:------------|:----------- |
| ![Compass widget](@site/static/img/widgets/map_butt_north_up_ios.png)   | **North is up (fixed)**. The map is fixed in the North direction, which is the top edge of your device. Similar to physical maps. |
| ![Compass widget](@site/static/img/widgets/map_butt_movem_dir_ios.png)  | **Movement direction**. The map rotates relative to the direction of your movement known from GPS data. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).  |
| ![Compass widget](@site/static/img/widgets/map_butt_compas_dir_ios.png) | **Compass direction**        |
| ![Compass widget](@site/static/img/widgets/map_butt_manually_ios.png)   | **Manually rotated (fixed)** |

-->

### Map orientation modes

- ![Compass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manually rotated**. In this mode you can manually rotate the map with a [two-pointer gesture (two-finger touch and rotate)](../map/interact-with-map.md#gestures) according to your preference. The orientation of the map does not depend on the direction of travel or the compass of the device, but is determined by the user.

- ![Compass](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Movement direction**. In this mode, the map is oriented according to the direction of your device. For example, if you turn to the right, the map also rotates so that the right side of the screen corresponds to the direction of movement. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).

- ![Compass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Compass direction**. In this mode, the map is oriented according to the device's compass. In this way, the north of the map corresponds to real north and you can see the orientation of the map in relation to the surrounding terrain.

- ![Compass](@site/static/img/widgets/map_butt_north_up_ios.png)  
**North is up**. In this mode, the map is oriented so that the North is always at the top of the screen. Regardless of the direction in which you move the device, the map remains static and you can see your position in relation to your surroundings.  
   - for **Android** version it has hard lock the North mode (without manual rotation with twor-finger touch and rotate).
   - for **iOS** version you can rotate it manually with a [two-pointer gesture (two-finger touch and rotate)](../map/interact-with-map.md#gestures), and in this case, the map orientation mode will change to *Manually rotated*.


### Display Options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons,default_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs>

The compass icon on the button always points to the North. You can select how the compass button is displayed on the screen.

- **Always visible** - the button does not disappear from the screen.
- **Always hidden** - in this case, you will not be able to change the map orientation quickly, but the button will not take up space on the screen.
- **Visible if map is rotated** - the button is not visible while the compass is pointing the North at the top edge of your device.  

:::tip

1. Double tap (Android), One tap (iOS) the Compass button in the upper left corner of the screen, if visible, to switch the [map orientation mode](../map/interact-with-map.md).
2. You can change the map orientation mode by long tapping the Compass button. This action opens the [*Map orientation*](../map/interact-with-map.md#map-orientation-modes#map-orientation-modes) screen.

:::


## 3D Mode

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,default_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>*. If this mode is selected for a button, you have to use a gesture to change the map view. Tap the map with two fingers and move them up and down to adjust the map's tilt.  
- *<Translate android="true" ids="shared_string_visible"/>*. The button is always displayed on the map screen.
- *<Translate android="true" ids="visible_in_3d_mode"/>*. The button is displayed on the map screen when you change the map view with a [*two-finger and move*](../map/interact-with-map.md#gestures) gesture.  

### Additional Settings  

1. **Display the button**. (*For Android*) The setting for the *3D Mode* button appears in the Configure screen list only if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected.

2. **Saves the angle**. After switching to 3D mode and changing the angle manually with a gesture, the angle is saved and used the next time 3D mode is activated. This option is only saved for the profile selected at the time.

3. **Moving**. You can place the button anywhere on the screen of your device. To do this, hold down the button and without taking your finger off, drag it to the required place.

4. **Button position**. The position of the button on the map on the application screen is saved separately for each profile.

5. **Recommendation**. It is recommended to download and enable the [Hillshade map](../plugins/topography.md#configure-map-view) for the selected region to improve the user experience.


## Custom Buttons

[Quick action widget](./quick-action.md) is a configurable button with various action types that could be assigned to it. It also possible to have multiple [Custom buttons](./quick-action.md#custom-buttons).


## Button Appearance

<InfoAndroidOnly/>

Customizing the appearance of buttons allows you to adjust the size, shape, icon, and background opacity for both [Quick Action (Custom buttons)](../widgets/quick-action.md#button-appearance) and [Default buttons](../widgets/configure-screen.md#button-appearance). This flexibility lets you personalize the interface to suit your preferences and improve usability. These options are available via the following menus:

- *Menu → Configure screen → Buttons → Default buttons*
- *Menu → Configure screen → Custom buttons → Quick action → tree-dot menu → Appearance*


## Related Articles


- [Configure Screen](./configure-screen.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *This article was last updated in August 2024*
