---
sidebar_position: 8
title:  Online Maps
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

OsmAnd Online maps are an extensive addition to the OpenStreetMap database already present in the application. With this plugin, you can add layers to your map with information from a different source, beginning with the satellite or hiking routes view and ending with very specific data, such as the location of fire hydrants. You can also change the main source of the map from vector maps to online tiles.


## Required Setup Parameters

The ability to use Online maps is automatically enabled in iOS version of OsmAnd. To display Online maps in Android, you need to make the following settings:

1. [Enable](../plugins/index.md#enable--disable) **Online Maps** plugin in the *Main Menu → Plugins → Online Maps*.
2. Make the necessary settings in [Map source](../map/raster-maps.md#select-raster-maps) section of the Configure map menu.
3. Set the *Map Source*, *Overlay* and *Underlay* map. Select your preferred satellite map provider.
4. Download selected [Online map](#how-to-prepare-raster-maps) if needed.


## Use Raster Maps on Device

You can find detailed information about visualizing and customizing raster maps in the article [Raster Maps](../map/raster-maps.md). How to use:

1. [Select](../map/raster-maps.md#select-raster-maps) the raster map as a *Main*, *Underlay*, or *Overlay* layer.
    - [Change](../map/raster-maps.md#how-to-use-raster-maps) layer parameters (transparency).

2. [Prepare / copy](../map/raster-maps.md#prepare--copy-raster-maps-to-device) raster maps to device.
    - [Add new online raster map source](../map/raster-maps.md#add-new-online-raster-map-source)
    - [Add Magic URL](../map/raster-maps.md#magic-url-to-install-map-source) to install map source.

3. [Manage](../map/raster-maps.md#manage-raster-maps) raster maps.
    - [Download / update tiles](../map/raster-maps.md#download--update-tiles).
    - [Change](../map/raster-maps.md#change-raster-map-parameters) raster map parameters.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,layer_overlay"/> / <Translate android="true" ids="layer_underlay"/>*

![Configure underlay / overlay Android](@site/static/img/plugins/online-maps/config-underlay-overlay-android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_overunder"/>*

![Configure underlay / overlay iOS](@site/static/img/plugins/online-maps/config-underlay-overlay-ios.png)

</TabItem>

</Tabs>


## How to Prepare Raster Maps

:::info
Main article to prepare maps [read here](https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced).
:::

Despite the plugin being called *Online Maps*, you can use the maps without internet connection as well. You just need to save the parts of maps (often called tiles) to use them later. To do that, download a specific [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) developed by OsmAnd team.

Select the area you need to download, click on the Preload area, then set the smallest and the largest zoom levels you want to display and download the tiles.
For <b>Android version</b> you can copy them to your phone's <i>osmand/tiles/*tile type*</i> folder. You'll also need to open the <i>Configure map-. Overlay map</i> and choose OsmAnd online tiles.

For <b>iOS version</b> you can choose SQ Lite file in your phone (any messenger or dropbox), OsmAnd will suggest to add it. You'll also need to open <i>Map → Overlay / Underlay or Map type</i> and choose new map source.

How to add SQ Lite file in Android and iOS version of OsmAnd you can read in <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis project</b></a>.


Online tiles can be helpful when you need just a small section of the map or a specific type of it to use in the limited area, but don't want to download the whole region. They can come in handy in endless situations.

![Online Maps](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Maps](@site/static/img/plugins/online-maps/map_creator_menu.jpg)


## Related Articles

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

### Common Issues and Solutions

1. Online Maps do not appear in the Map Source menu:  
  
    - Verify that the Online Maps plugin is enabled: *Menu → Plugins → Online Maps*.  
    - Ensure you have an active internet connection to access satellite imagery.  
    - Check if the selected Online Map is downloaded or requires [additional settings](../map/raster-maps.md#select-raster-maps).

> *This article was last updated in January 2025*
