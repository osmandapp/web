---
sidebar_position: 9
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

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillary](https://www.mapillary.com/) (an internet connection is required).

## Overview

[The Mapillary layer](https://www.mapillary.com/) brings street-level imagery straight into the OsmAnd app. So you can easily overview the surroundings of any place of interest or along the route you have planned. If imagery is missing, you can add it by yourself and others can make use of it. This feature has emerged from our collaboration with [the Mapillary team](https://www.mapillary.com/about) uniting the benefits of both apps.

## Setup 

To display street-level images on the OsmAnd map, you need to make the following settings: 
   
1. Enable the [Mapillary plugin](../start-with/first-steps.md#how-to-configure-plugins) in the Plugins section of the main menu.    
2. Display the [Street-level imagery](#enable-layer) on the map for the required profile in the Configure map menu.


## Map Layer

Map layer of street-level imagery is displayed on the OsmAnd map as rows of connected green dots. Mapillary user’s photos are attached to these green points. To open the street-view photo, you need to press on the green point and pictures of a selected place will be shown. You can create [a filter](../plugins/mapillary.md#filtering-the-data) and select what photos you would like to display on the map.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>


### Enable Layer

To display street-level imagery on the map, you need to enable layer first in [Configure Map](../map/configure-map-menu.md) section of Main menu: *<Translate ids="menu,configure_map,street_level_imagery"/>*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_android.png) ![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapillary_plugin_images_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) ![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png) 

</TabItem>

</Tabs>

:::note Mapillary Photo viewer
- Tap on &#8285; button to open chosen image in [Mapillary application](https://www.mapillary.com/mobile-apps).
- Tap on an arrow to move from image to image.
:::

### Filtering the data

You can create a filter and select which photos you would like to display on the map, for example so you can view only newer images or only 360-degrees.  Go to *<Translate ids="menu,configure_map,street_level_imagery"/>*→ &#8230; . 

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


## Map Context menu

You can also view nearby Mapillary photos (40 m radius) in the [Map Context menu](../map/map-context-menu.md#online-photos) of a selected point on the map.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Context menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png) ![Mapillary plugin dialogue Android](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png) ![Mapillary plugin  dialogue  iOS](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_ios.png)

</TabItem>

</Tabs>

## Add Photos

In order to add photos you will need to register in the [Mapillary application](https://www.mapillary.com/mobile-apps). You can also add photos in the Map Context menu by clicking on button "Add photos" in [Online photos](../map/map-context-menu.md#online-photos) of Map Context menu. Then the window of the Mapillary application will open.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_add_photo_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photo_ios.png)

</TabItem>

</Tabs>

### Mapillary Widget

The [Mapillary widget](../widgets/info-widgets.md#-mapillary-widget) is used to get quick access to the Mapillary application. The widget is added to the main screen automatically when the Mapillary plugin enabled. You can enable or disable the Mapillary widget and other widgets in the [Configure screen](../widgets/configure-screen.md) section of the Main Menu.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To enable/disable widget demonstration on the main screen go to
*<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_right,mapillary"/>*

or *<Translate android="true" ids="shared_string_menu,map_widget_config,map_widget_left,mapillary"/>*

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_widget_disable_android.png)  ![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_app_activation_android.png)


</TabItem>

<TabItem value="ios" label="iOS">

To enable/disable widget demonstration on the main screen go to 
*<Translate ios="true" ids="menu,layer_map_appearance,shared_string_widgets,mapillary"/>*

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/mapillary_widget_disable_ios.png) ![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>