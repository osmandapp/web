---
sidebar_position: 2
title:  Map buttons
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

<InfoIncompleteArticle/>

> *This article was last updated in March 2024.*

## Overview

Map buttons such as Zoom buttons, Search, Direction, Compass, My Location and Menu represent main controls on the map.


## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

My location and Zoom buttons control the map display. You can read more in [Interact with map](../map/interact-with-map.md#my-location--zoom) article.


## Directions

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

**Directions** button allows to [build a route](../navigation/index.md) and [start navigation](../navigation/index.md). In navigation mode this button is not visible by default and it appears after a short tap the map.

**Directions** button has 3 different indicative states:
- Default grey icon - the route has not been built yet. A dialog to build a new route will appear by click.
- Default blue icon - the route is built, but navigation has not started yet. A dialog with route information will appear by click.
- Blue arrow icon - the route is built and navigation has started. A dialog with route information will appear by click.


## Configure Map

![Configure Map](@site/static/img/widgets/configure_map.png)

**Configure Map** button allows to access to [Configure Map menu](../map/configure-map-menu.md). Icon on it indicates [Current app profile](../personal/profiles.md).


## Main menu

![Main menu button](@site/static/img/widgets/main_menu_button.png)

[Main menu](../start-with/main-menu.md) button allows to access to [all features](../start-with/main-menu.md) of the application. In navigation mode this button is not visible by default. It appears after a short tap the map.


## Search

![Search button](@site/static/img/widgets/search_button.png)

Search button buttons provides quick access from the map to [search capabilities](../search/index.md).


## Compass

The Compass button shows how the map is oriented on your device screen. For more information, go to the *Map* section of the [*Interact with map*](../map/interact-with-map.md#map-orientation--compass) article.   

<!--

|  |  |
|:------------|:----------- |
| ![Compass widget](@site/static/img/widgets/map_butt_north_up_ios.png)   | **North is up (fixed)**. The map is fixed in the North direction, which is the top edge of your device. Similar to physical maps. |
| ![Compass widget](@site/static/img/widgets/map_butt_movem_dir_ios.png)  | **Movement direction**. The map rotates relative to the direction of your movement known from GPS data. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).  |
| ![Compass widget](@site/static/img/widgets/map_butt_compas_dir_ios.png) | **Compass direction**        |
| ![Compass widget](@site/static/img/widgets/map_butt_manually_ios.png)   | **Manually rotated (fixed)** |

-->

#### Buttons

- ![Compass](@site/static/img/widgets/map_butt_north_up_ios.png)   
**North is up**. In this mode, the map is oriented so that the North is always at the top of the screen. Regardless of the direction in which you move the device, the map remains static and you can see your position in relation to your surroundings.  
The map does not have automatic rotation, but you can rotate it manually with a [two-pointer gesture (two-finger touch & rotate)](../map/interact-with-map.md#gestures), and in this case, the map orientation mode will change to Manual rotation. You can hard lock this position using the [*<Translate android="true" ids="fix_north_up"/>*](../personal/profiles.md#other) feature, if you do not need to rotate the map with a gesture. 

- ![Compass](@site/static/img/widgets/map_butt_movem_dir_ios.png)   
**Movement direction**. In this mode, the map is oriented according to the direction of your device. For example, if you turn to the right, the map also rotates so that the right side of the screen corresponds to the direction of movement. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).   

- ![Compass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Compass direction**. In this mode, the map is oriented according to the device's compass. In this way, the north of the map corresponds to real north and you can see the orientation of the map in relation to the surrounding terrain. 

- ![Compass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manually rotated**. In this mode you can manually rotate the map with a [two-pointer gesture (two-finger touch & rotate)](../map/interact-with-map.md#gestures) according to your preference. The orientation of the map does not depend on the direction of travel or the compass of the device, but is determined by the user. 


#### Display options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_left,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/map_butt_compass_widg_ios.png)

</TabItem>

</Tabs> 

The compass icon on the button always points to the North. You can select how the compass button is displayed on the screen.
- *Always visible* - the button does not disappear from the screen. 
- *Always hidden* - in this case, you will not be able to change the map orientation quickly, but the button will not take up space on the screen.
- *Visible if map is rotated* - the button is not visible while the compass is pointing the North at the top edge of your device.  

:::tip
1. Tap the Compass button in the upper left corner of the screen, if visible, to switch the map orientation mode.
2. You can change the map orientation mode by long-tapping the Compass button. This action opens the [*Map orientation*](../map/interact-with-map.md#map-orientation-modes) screen.
:::


## 3D mode

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_3d_mode_action"/>*  

![3D mode](@site/static/img/widgets/map_butt_3D_mode_ios.png)

</TabItem>

</Tabs>  

- *<Translate android="true" ids="shared_string_hidden"/>* - if this mode is selected for a button, you have to use a gesture to change the map view. Tap the map with two fingers and move them up and down to adjust the map's tilt.  
- *<Translate android="true" ids="shared_string_visible"/>* - the button is always displayed on the map screen.
- *<Translate android="true" ids="visible_in_3d_mode"/>* - the button is displayed on the map screen when you change the map view with a [*two-finger and move*](../map/interact-with-map.md#gestures) gesture.   

Additional settings for 3D Mode.  

1. **Display the button**. (*For Android*) The setting for the *3D Mode* button appears in the Configure screen list only if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected.  
2. **Saves the angle**. After switching to 3D mode and changing the angle manually with a gesture, the angle is saved and used the next time 3D mode is activated. This option is only saved for the profile selected at the time.
3. **Moving**. You can place the button anywhere on the screen of your device. To do this, hold down the button and without taking your finger off, drag it to the required place.  
4. **Button position**. The position of the button on the map on the application screen is saved separately for each profile.
5. **Recommendation**. It is recommended to download and enable the [Hillshade map](../plugins/contour-lines.md#configure-map-view) for the selected region to improve the user experience.


## Related Articles

- [Configure Screen](./configure-screen.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)


