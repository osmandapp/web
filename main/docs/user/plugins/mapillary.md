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

[The Mapillary layer](https://www.mapillary.com/) brings street-level views straight into the OsmAnd app. This means you can easily check out the surroundings at any place of interest or along the route you have planned with OsmAnd. Where imagery is missing, you can just add it yourself so that others can make use of it. This feature has emerged from our collaboration with [the Mapillary team](https://www.mapillary.com/about) uniting the benefits of both apps.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

</TabItem>

<TabItem value="ios" label="iOS">

</TabItem>

</Tabs>

## Enable / Disable plugin

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,mapillary"/>

![Mapillary plugin Android](@site/static/img/plugins/mapillary/mapillary_plugin_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

**<Translate ios="true" ids="ios_button_seq"/>:**  <Translate ios="true" ids="menu,plugins,mapillary"/>

![Mapillary plugin iOS](@site/static/img/plugins/mapillary/mapillary_plugin_ios.png) 

</TabItem>

</Tabs>


## How to use



### Viewing images

Street-level imagery (Mapillary) are green points on the map. Street-view photos attached to these points. You can create [a filter](../plugins/mapillary.md#filtering-the-data) and select what photos you would like to display on the map. In order to open street-view photo you need to press on the green point.

Enable / disable Street-level imagery on the map: 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/> 

![Mapillary plugin points on the map Android](@site/static/img/plugins/mapillary/mapillary_plugin_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,street_level_imagery"/>

![Mapillary plugin points on the map iOS](@site/static/img/plugins/mapillary/mapillary_plugin_points_ios.png)

</TabItem>

</Tabs>

Cliking to the green points opens Mapillary screen in OsmAnd, where user can view images from Mapillary service.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin images Android](@site/static/img/plugins/mapillary/mapillary_plugin_images_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin images iOS](@site/static/img/plugins/mapillary/mapillary_plugin_images_ios.png)

</TabItem>

</Tabs>

Click to &#8285; button (Android) - opens chosen image in [Mapillary application](https://www.mapillary.com/mobile-apps).

Clicking to arrows on the images allows to move image by image.

There are info about username and year in bottom corner.


### Filtering the data

The filter images menu:

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,street_level_imagery"/> → &#8230;

![Mapillary plugin filter Android](@site/static/img/plugins/mapillary/mapillary_plugin_filter_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,street_level_imagery"/> → &#8230;

![Mapillary plugin filter iOS](@site/static/img/plugins/mapillary/mapillary_plugin_filter_ios.png)

</TabItem>

</Tabs>

Actions:
- <Translate android="true" ids="shared_string_on"/> / <Translate android="true" ids="shared_string_off"/> - enable or disable mapillary map layer.
- <Translate android="true" ids="mapillary_menu_title_tile_cache"/> - reload tiles to see up to date data

Filter images by sumbitter, by date or by type. Only active in closeup zoom (17):
- <Translate android="true" ids="mapillary_menu_title_username"/> - filter images by user. View only images by selected username.
- <Translate android="true" ids="mapillary_menu_title_dates"/> - filter images by date. Start date to End date.
- <Translate android="true" ids="mapillary_menu_title_pano"/> - allows to showing only 360 &#176; images.


### Images in Map Context menu

In the [Details](../map/map-context-menu.md#details) of selected point on the map of [Map Context menu you can find Mapillary images](../map/map-context-menu.md#online-photos) if there are near selected point.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin Map Conntext menu Android](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin Map Conntext menu iOS](@site/static/img/plugins/mapillary/mapillary_plugin_context_menu_ios.png)

</TabItem>

</Tabs>

Click to the images opens [viewing images doublescreen](../plugins/mapillary.md#viewing-images):

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Mapillary plugin dialogue Android](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Mapillary plugin  dialogue  iOS](@site/static/img/plugins/mapillary/mapillary_plugin_dialogue_ios.png)

</TabItem>

</Tabs>

### Adding images

1. By clicking to [Mapillary widget](../widgets/info-widgets.md#-mapillary-widget) opens [Mapillary application](https://www.mapillary.com/mobile-apps).

2. If there aren't photos near selected point on the map user can see next dialogue on [Online photos of Map Context menu](../map/map-context-menu.md#online-photos):  Add photos. By clicking "Add photos" button opens Mapillary application.


