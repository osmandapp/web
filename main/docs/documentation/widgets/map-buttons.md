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


Map buttons such as Zoom buttons, Search, Direction, Compass, My Location and Menu represent main controls on the map.


## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

My location & zoom buttons control the map display. You can read more in [Interact with map](/docs/documentation/map/interact-with-map#my-location--zoom) article.

## Directions

![Directions button allows](@site/static/img/widgets/directions_button_allows.png)

**Directions** button allows to [build a route](/docs/documentation/navigation) and [start navigation](/docs/documentation/navigation). In navigation mode this button is not visible by default and it appears after a short tap on the map.

**Directions** button has 3 different indicative states:
- Default grey icon - the route has not been built yet. A dialog to build a new route will appear by click.
- Default blue icon - the route is built, but navigation has not started yet. A dialog with route information will appear by click.
- Blue arrow icon - the route is built and navigation has started. A dialog with route information will appear by click.

## Configure Map

![Configure Map](@site/static/img/widgets/configure_map.png)

**Configure Map** button allows to access to [Configure Map menu](/docs/documentation/map/configure-map-menu). Icon on it indicates [Current app profile](/docs/documentation/personal/profiles).

## Main menu

![Main menu button](@site/static/img/widgets/main_menu_button.png)

[Main menu](/docs/documentation/start-with/main-menu) button allows to access to [all features](/docs/documentation/start-with/main-menu) of the application. In navigation mode this button is not visible by default. It appears after a short tap on the map.

## Search

![Search button](@site/static/img/widgets/search_button.png)

Search button buttons provides quick access from the map to [search capabilities](/docs/documentation/search/).

## Compass

![Compass widget](@site/static/img/widgets/compass_widget.png)

Compass widget indicates how map is oriented on the device screen and top arrow / red arrow points where the north of map is located. It also shows the current **[Map orientation mode](/docs/documentation/map/interact-with-map#map-orientation--compass)**. Clicking on the compass will cycle through all Map orientation modes.

**Configure visibility**

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,map_widget_compass"/>

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,layer_map_appearance,map_widget_left,map_widget_compass"/>

Compass widget could be hidden if current orientation mode is *<Translate android="true" ids="rotate_map_none_opt"/>* and north of the map is pointed exactly to the top of device.
