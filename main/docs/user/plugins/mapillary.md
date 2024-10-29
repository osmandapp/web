---
sidebar_position: 6
title:  Mapillary
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).  

[The Mapillary layer](https://www.mapillary.com/) brings street-level imagery straight into the OsmAnd app, so you can easily overview the surroundings of any place of interest or along the route you have planned. If imagery is missing, you can add it yourself, and others can use it. This feature has emerged from our collaboration with [the Mapillary team](https://www.mapillary.com/about), uniting the benefits of both apps.


## Setup

To display street-level images on the OsmAnd map, you need to make the following settings:

1. Enable the [Mapillary plugin](../plugins/#enable--disable) in the Plugins section of the Main menu.
2. Display the [Street-level imagery](#enable-layer) on the map for the required profile in the Configure map menu.


## Map Layer

A map layer of street-level imagery is displayed on the OsmAnd map as rows of connected green dots. Mapillary users’ photos are attached to these green points. To open the street-view photo, you need to press on the green point and pictures of a selected place will be shown. You can create [a filter](../plugins/mapillary.md#filtering-the-data) and choose the photos you want to display on the map.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>


### Enable Layer

To display street-level imagery on the map, you need to enable the layer first in the [Configure Map](../map/configure-map-menu.md) section of the main menu: *<Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_android.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapillary_plugin_images_android.png)

:::note Mapillary Photo viewer

- Tap &#8285; button to open chosen image in [Mapillary application](https://www.mapillary.com/mobile-apps).
- Tap an arrow to move from image to image.
:::

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

:::note Mapillary Photo viewer

- Tap an arrow to move from image to image.
:::

</TabItem>

</Tabs>


### Filtering the Data

You can create a filter and select which photos you would like to display on the map, for example, you can view only newer images or only 360 degrees.  Go to *<Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*→ &#8230; .

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_plugin_filter_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

:::note Tile cash
Use *reload tile cache* if the selected images are not displayed.
:::


## Map Context Menu

You can also view nearby Mapillary photos (40 m radius) in the [map context menu](../map/map-context-menu.md#online-photos) of a selected point on the map.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>


## Add Photos

To add photos, you have to register in the [Mapillary application](https://www.mapillary.com/mobile-apps). You can also add photos to the map context menu by tapping the button *Add photos* in [Online photos](../map/map-context-menu.md#online-photos) of the map context menu. Then the Mapillary application will open.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_add_photo_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photo_ios.png)

</TabItem>

</Tabs>


## Mapillary Widget

The [Mapillary widget](../widgets/info-widgets.md#mapillary-widget) is used to get quick access to the Mapillary application. The widget is added to the main screen automatically when the Mapillary plugin is enabled. You can enable or disable the Mapillary widget and other widgets in the [Configure screen](../widgets/configure-screen.md) section of the main menu.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left,mapillary"/>*  

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_disable_android.png)  ![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_app_activation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left,mapillary"/>*

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in October 2024*
