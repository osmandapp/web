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

## Overview

Map buttons such as Zoom buttons, Search, Direction, Compass, My Location and Menu represent main controls on the map.


## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

My location and Zoom buttons control the map display. You can read more in [Interact with map](../map/interact-with-map.md#my-location--zoom) article.


## Directions

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

**Directions** button allows to [build a route](../navigation/index.md) and [start navigation](../navigation/index.md). In navigation mode this button is not visible by default and it appears after a short tap on the map.

**Directions** button has 3 different indicative states:
- Default grey icon - the route has not been built yet. A dialog to build a new route will appear by click.
- Default blue icon - the route is built, but navigation has not started yet. A dialog with route information will appear by click.
- Blue arrow icon - the route is built and navigation has started. A dialog with route information will appear by click.


## Configure Map

![Configure Map](@site/static/img/widgets/configure_map.png)

**Configure Map** button allows to access to [Configure Map menu](../map/configure-map-menu.md). Icon on it indicates [Current app profile](../personal/profiles.md).


## Main menu

![Main menu button](@site/static/img/widgets/main_menu_button.png)

[Main menu](../start-with/main-menu.md) button allows to access to [all features](../start-with/main-menu.md) of the application. In navigation mode this button is not visible by default. It appears after a short tap on the map.


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
**North is up (fixed)**. The map is fixed in the North direction, which is the top edge of your device. Similar to physical maps.  

- ![Compass](@site/static/img/widgets/map_butt_movem_dir_ios.png)   
**Movement direction**. The map rotates relative to the direction of your movement known from GPS data. For details, go to [*Rotate map by bearing*](../map/interact-with-map#rotate-map-by-bearing).   

- ![Compass](@site/static/img/widgets/map_butt_compas_dir_ios.png)  
**Compass direction**. The icon points to the actual North, and the map moves according to the compass orientation of your device.  

- ![Compass](@site/static/img/widgets/map_butt_manually_ios.png)  
**Manually rotated (fixed)**. When you select this option, the map is fixed in the current position. You can manually change the map orientation with a [*two-finger gesture*](../map/interact-with-map.md#gestures).


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

You can choose in the widget menu how the compass is displayed: *Always visible*, *Always hidden*, or *Visible if map is rotated*.  

:::tip
Tap the Compass button, if visible, in the upper left corner of the screen to switch the map orientation mode.
:::


