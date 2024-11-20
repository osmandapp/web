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

Map buttons, including *Zoom*, *Search*, *Directions*, *Compass*, *My Location*, *3D Mode*, and *Menu*, are the primary controls for interacting with the map. Each button offers specific functionalities to enhance your navigation and map usage experience.


## My Location and Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

Use these buttons to control how the map is displayed on the screen of your device:

- **My Location**. Shows whether the center of the map is synchronized with your device's current geolocation.
- **Zoom**. Allows you to adjust the map's zoom level to provide more or less details.
If you would like more information on using these buttons, you can see the article [Interact with map](../map/interact-with-map.md#my-location-and-zoom).


## Directions

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

The **Directions** button is essential for route planning and navigation:

- [*Build a route*](../navigation/index.md). Use this button to create a route.
- [*Start navigation*](../navigation/index.md). Initiate turn-by-turn navigation.
- In navigation mode, the *Directions* button is not visible by default but appears after a short tap the map.

Indicative states of the *Directions* button:

- The *gray default icon* indicates that the route has not been created yet. Tapping this icon opens the [route setup](../navigation/setup/route-navigation.md) functionality.
- The *blue default icon* indicates that a route has been built but navigation has not started yet. Tapping this icon opens the [route setup](../navigation/setup/route-navigation.md#start--stop-navigation) functionality.
- The *blue arrow icon* indicates that navigation is active. Tapping this icon opens the [details of the current route](../navigation/setup/route-details.md).


## Configure Map

![Configure Map](@site/static/img/widgets/configure_map.png)

The **Configure map** button provides access to the [Configure Map menu](../map/configure-map-menu.md). The icon also reflects the [Current app profile](../personal/profiles.md), allowing you to quickly identify and switch between different profiles.


## Main Menu

![Main menu button](@site/static/img/widgets/main_menu_button.png)

The [**Main menu**](../start-with/main-menu.md) button opens the general menu, granting access to [all application features](../start-with/main-menu.md). In navigation mode, this button is hidden by default and becomes visible after a short tap the map.


## Search

![Search button](@site/static/img/widgets/search_button.png)

The Search button offers quick access to the [search capabilities](../search/index.md), allowing you to find locations, points of interest, and other information directly from the map.


## Compass

The Compass button indicates the orientation of the map on your device screen. For additional information, refer to the [*Interact with map*](../map/interact-with-map.md#map-orientation--compass) article.


### Map Orientation Modes

- ![Compass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manually rotated**. In this mode, you can manually rotate the map with a [two-pointer gesture (two-finger touch and rotate)](../map/interact-with-map.md#gestures) according to your preference. The orientation of the map does not depend on the direction of travel or the compass of the device but is determined by the user. The manual rotation mode is set by default.

- ![Compass](@site/static/img/widgets/map_butt_movem_dir_ios.png)  
**Movement direction**. In this mode, the map is oriented according to the direction of your movement known from GPS data. For example, if you turn to the right, the map also rotates so that the right side of the screen corresponds to the direction of movement. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).

- ![Compass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Compass direction**. The icon on the button points to the actual North, and the map moves according to the compass orientation of your device. This way, the north of the map corresponds to the real north and you can see the orientation of the map relative to the surrounding terrain. Your device should be in the most horizontal position possible. If your device does not have a compass sensor, the orientation of the map remains unchanged.

- ![Compass](@site/static/img/widgets/map_butt_north_up_ios.png)  
**North is up**. In this mode, the map is fixed (with a hard lock) in the North direction, which is the top edge of your device. Regardless of the direction in which you move the device, the map remains static and you can see your position related to your surroundings. The map has no automatic or manual rotation.

### Compass Tapping Behavior

The compass button provides multiple actions to control map orientation:

- **Single tap**. A *single tap* of the [Compass button](../widgets/map-buttons.md#compass) (located in the upper left corner of the screen when [visible](../widgets/map-buttons.md#display-options)) instantly reorients the map orientation *to the North* in all map orientation modes. Even if the map is in the *Compass direction* mode, it still rotates for a moment and then reverts to the dynamic orientation of that mode.

- **Double tap**. To quickly switch between map orientation modes, such as following the GPS direction or rotating with the device, *double tap* the [Compass button](../widgets/map-buttons.md#compass) (when [visible](../widgets/map-buttons.md#display-options)).

- **Long tap**. With a *long tap* the [Compass button](../widgets/map-buttons.md#compass) (when [visible](../widgets/map-buttons.md#display-options)) you can open a list of all map oriention modes and select the required one. This list can also be opened in the [Profile settings](../personal/profiles.md#appearance).


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

- **Always visible**. The button does not disappear from the screen.
- **Always hidden**. In this case, you cannot quickly change the orientation of the map, but the button will not take up space on the screen.
- **Visible if the map is rotated**. The button is not visible while the compass is pointing North at the top edge of your device.  


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

2. **Saves the angle**. After switching to 3D mode and changing the angle manually with a gesture, the angle is saved and used the next time the 3D mode is activated. This option is only saved for the profile selected at the time.

3. **Moving**. You can place the button anywhere on the screen of your device. To do this, hold down the button and without taking your finger off, drag it to the required place.

4. **Button position**. The position of the button on the map on the application screen is saved separately for each profile.

5. **Recommendation**. It is recommended to download and enable the [Hillshade map](../plugins/topography.md#configure-map-view) for the selected region to improve the user experience.


## Custom Buttons

[Quick action widget](./quick-action.md) is a configurable button with various action types that could be assigned to it. It is also possible to have multiple [Custom buttons](./quick-action.md#custom-buttons).


## Map Button Appearance

<InfoAndroidOnly/>

Customizing the appearance of buttons allows you to adjust the size, shape, icon, and background opacity for both [Quick Action (Custom buttons)](../widgets/quick-action.md#button-appearance) and [Default buttons](../widgets/configure-screen.md#button-appearance). This flexibility lets you personalize the interface to suit your preferences and improve usability. These options are available via the following menus:

- *Menu → Configure screen → Buttons → Default buttons*
- *Menu → Configure screen → Custom buttons → Quick action → three-dot menu → Appearance*


## Related Articles

- [Configure Screen](./configure-screen.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *This article was last updated in October 2024*
