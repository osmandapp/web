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

<InfoIncompleteArticle/>

To get around faster, in OsmAnd you can use street-level views of your routes or places of interest provided by [Mapillari](https://www.mapillary.com/) (an internet connection is required).

## Overview

[The Mapillary layer](https://www.mapillary.com/) brings street-level imagery straight into the OsmAnd app. So you can easily overview the surroundings of any place of interest or along the route you have planned. If imagery is missing, you can add it by yourself and others can make use of it. This feature has emerged from our collaboration with [the Mapillary team](https://www.mapillary.com/about) uniting the benefits of both apps.

## Setup 

To display street-level imaginary on the OsmAnd map, you need to make the following settings: 
   
1. Enable the [Mapillary plugin](https://docs.osmand.net/docs/user/plugins/mapillary#enable-plugin) in the Plugins section of the main menu.    
2. Display the [Street-level imagery](https://docs.osmand.net/docs/user/plugins/mapillary#enable-layer-map) on the map for the required profile in the Configure map menu.


### Enable plugin

To enable plugin go to
*<Translate ids="menu,plugins,mapillary"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_plugin_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/mapillary_plugin_ios.png) 

</TabItem>

</Tabs>


### Enable Layer Map

To display street-level imagery on the map go to 
*<Translate ids="menu,configure_map,street_level_imagery"/>*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Mapillary plugin Android](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/Mapilary_street_level_imagery_ios.png) 

</TabItem>

</Tabs>


## How to use



### Viewing images

Street-level imageries are displayed as green points on the map. Mapillary user’s photos are attached to these points. You can create [a filter](../plugins/mapillary.md#filtering-the-data) and select what photos you would like to display on the map. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

In order to open the street-view photo, you need to press on the green point. Mapillary window will pop up in the Osmand app and the picture of the selected place will be shown.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapillary_plugin_images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Tap on &#8285; button to open chosen image in [Mapillary application](https://www.mapillary.com/mobile-apps).

Tap on an arrow to moove from image to image.

### Filtering the data

You can create a filter and select which photos you would like to display on the map. Go to 
*<Translate ids="menu,configure_map,street_level_imagery"/>*→ &#8230;

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_plugin_filter_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

In these menu you can:
- enable or disable mapillary map layer
- reload layer to see up to date data

Filter images by date or by type. Only active in closeup zoom:
- filter images by date. Start date to End date.
- display only 360 &#176; images.


### Images in Map Context menu

In the [Details](../map/map-context-menu.md#details) of selected point on the map of [Map Context menu](../map/map-context-menu.md#online-photos) you can find Mapillary images if there are near selected point.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Tap on the images opens [viewing images doublescreen](../plugins/mapillary.md#viewing-images):

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin dialogue Android](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin  dialogue  iOS](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_ios.png)

</TabItem>

</Tabs>

### Adding images

Tap on the [Mapillary widget](../widgets/info-widgets.md#-mapillary-widget) to open the [Mapillary application](https://www.mapillary.com/mobile-apps).

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_app_activation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_app_activation_ios.png)

</TabItem>

</Tabs>

If there are no photos near selected point on the map, you can add them by clicking on button "Add photos" in [Online photos of Map Context menu](../map/map-context-menu.md#online-photos). The Mapillary application opens.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_add_photo_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_add_photo_ios.png)

</TabItem>

</Tabs>