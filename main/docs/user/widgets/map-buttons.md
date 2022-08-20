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


Map buttons such as Zoom buttons, Search, Direction, Compass, My Location and Menu represent main controls on the map.


## My Location & Zoom

![Configure screen menu](@site/static/img/widgets/location_zoom_buttons.png)

My location & zoom buttons control the map display. You can read more in [Interact with map](../map/interact-with-map.md#my-location--zoom) article.

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

Compass widget shows how the map is oriented on your device's screen. You can select three types of compass:
- **Fixed (north is up):** Map exhibits no automatic rotation, the north direction aways points upwards. When manually rotating with a [two fingers gesture](../map/interact-with-map.md#gestures), the widget's north direction changes accordingly. By tapping on the widget, the compass and the map return to the original orientation.
- **Movement direction:** Map rotates by bearing, this is the direction of your movement by GPS, which is synchronized with the map. [Read more](../map/interact-with-map#rotate-map-by-bearing)
- **Compass direction:** Map synchronizes with the compass on your device and the widget points to the actual north of the Earth. If your device does not have a compass sensor, the map orientation will not change.  

[Read more info here](../map/interact-with-map.md#map-orientation--compass).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_buttons,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/cmp_dir_north_andr.png) ![Compass widget](@site/static/img/widgets/movement_dir_andr.png) ![Compass widget](@site/static/img/widgets/compas_dir_andr.png)

You can choose in the widget menu how the compass is displayed: *Always visible*, *Always hidden*, or *Visible only if the map is rotated*.

![Compass widget](@site/static/img/widgets/compass_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to:* <Translate ios="true" ids="menu,layer_map_appearance,map_widget_left,map_widget_compass"/>*

![Compass widget](@site/static/img/widgets/cmp_dir_north_andr.png) ![Compass widget](@site/static/img/widgets/movement_dir_andr.png) ![Compass widget](@site/static/img/widgets/compas_dir_andr.png)

You can choose in the widget menu how the compass is displayed: *Always visible*, *Always hidden*, or *Visible only if the map is rotated*.

</TabItem>

</Tabs> 
