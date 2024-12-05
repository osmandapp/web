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


## Required Setup Parameters

To display street-level images on the OsmAnd map, you need to make the following settings:

1. Enable the [Mapillary plugin](../plugins/#enable--disable) in the *Plugins* section of the *Main Menu*.
2. Display the [Street-level imagery](#enable-layer) on the map for the required profile in the Configure map menu.


## Map Layer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

The map layer with street images is displayed on the OsmAnd map as rows of connected green dots.

- Mapillary users' photos are attached to these green dots.
- Tap a green dot on the map to open a street view photo. Photos can also be selected from a list in the [map context menu](#map-context-menu), if available.
- After selection, the application screen is divided into OsmAnd map and Mapillarystreet-level street images.
- You can apply [filters](#data-filtering) to select the photos you want to display on the map.


### Enable Layer

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_1_andr.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapilary_enable_layer_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

To display Mapillary street-level imagery on the map, you need to enable this layer in the [Configure Map menu](../map/configure-map-menu.md) in the *Show* section.  

*To access: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*.  

:::note Mapillary Photo viewer

- Tap the *three-dot menu* (&#8285;) button to open selected image in the [**Mapillary**](https://www.mapillary.com/mobile-apps) application.
- Tap the arrow to move from image to image.
:::


### Data Filtering

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_plugin_filter_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

You can create a filter and select which photos you want to display on the map, for example, you can only view recent images or only 360 degrees images.  

*To access: <Translate ids="shared_string_menu,configure_map,street_level_imagery"/>*→ &#8230;

:::note Tile cash
If the selected images are not displayed, use **Reload** for the **Tile cache**.
:::


## Map Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

If the Mapillary plugin is enabled, you can view photos of streets available within a 40-meter radius of the selected point on the map. The photos are opened in the [map context menu](../map/map-context-menu.md#online-photos).


## Add Photos

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_add_photos_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photos_ios.png)

</TabItem>

</Tabs>

To add photos, you need to register in the [Mapillary app](https://www.mapillary.com/mobile-apps). You can also add photos to the map context menu by tapping the *Add photos* button in the [Online photos](../map/map-context-menu.md#online-photos) section of the map context menu. Then the Mapillary application will open.


## Mapillary Widget

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Choose a panel → <Translate android="true" ids="mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_1_andr.png)  ![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_widget_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Choose a panel → <Translate ios="true" ids="mapillary"/>*

![Mapillary plugin Map Context menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

The [Mapillary widget](../widgets/info-widgets.md#mapillary-widget) is used to get quick access to the Mapillary application. The widget is added to the main screen automatically when the Mapillary plugin is enabled. You can enable or disable the Mapillary widget and other widgets in the [Configure screen](../widgets/configure-screen.md) menu.


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *This article was last updated in October 2024*
