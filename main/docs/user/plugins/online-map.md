---
sidebar_position: 2
title:  Online maps
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

Plugin needs to be enabled only for Android and it's automatically enabled for iOS.

## Overview

OsmAnd Online maps are an extensive addition to the OpenStreetMap database already present in the application. With this plugin, you can add layers to your map with information from a different source, beginning with the satellite or hiking routes view and ending with very specific data, such as the location of fire hydrants. You can also change the main source of the map from vector maps to online tiles.
Many new useful map sources you can find in [Anygis project](https://anygis.ru/Web/Html/Osmand_en.md).

:::info
Main article is https://docs.osmand.net/docs/user/map/raster-maps.  
:::
## Setup
 
The ability to use Online maps is automatically enabled in iOS version of OsmAnd. To display Online maps in Android, you need to make the following settings:
 
1. [Enable](../plugins/index.md#enable--disable) Online maps plugin in the Plugins section of the Main menu.
2. Make the necessary settings in [Map source](#configure-map-source) section of the Configure map menu.  
3. Download selected [Online map](#how-to-prepare-raster-maps) if needed.  

## Configure map source

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To select an online map as your basic map, go to <i>Configure map-> Map source</i> and choose the preferable one from the list. If you do not see the desired map on the list, select <i>Install more...</i> to view the entire list of installs available. Also, you can define or edit your map source by clicking to <i>Define/Edit...</i>.

![Online Maps](@site/static/img/plugins/online-maps/om4.jpg) ![Online Maps](@site/static/img/plugins/online-maps/om5.jpg)

When you select an online map as basic map (Overlay/Underlay map) all of map tiles of this map source will be cached. You can check the size of this cached file in the <i>map menu-> Download maps-> Local (Online and cashed tile maps)</i>. Here, you can delete a map source, clear all tiles, edit or rename it.

![Online Maps](@site/static/img/plugins/online-maps/om6.jpg) ![Online Maps](@site/static/img/plugins/online-maps/om7.jpg)

You can download the selected area of the online map for offline usage (recorded to cache).  To do this, you can choose online map as a basic map, after opening the app screen. The displayed piece of the map on your screen is a selected area. After that, make a long tap on your screen to display the available options where you can choose <i>Actions-> Download map</i>. Now you can select max/min zoom for your tiles and click to <i>Download</i>.

![Online Maps](@site/static/img/plugins/online-maps/om8.jpg) ![Online Maps](@site/static/img/plugins/online-maps/om9.jpg)

Not only can you use one map, you can also add up to two of the online tiles to the basic layer: open the <i>app menu-> Configure map-> </i><i>Underlay</i> and an <i>Overlay</i> maps to combine three of them on the screen. For instance, you can open a basic OsmAnd offline vector maps, then add a satellite view for the overlay, and put cycling routes map underneath.
You can set the base map transparency for your layer and whether display the transparency slider on the main screen or not.


![Online Maps](@site/static/img/plugins/online-maps/om10.jpg) ![Online Maps](@site/static/img/plugins/online-maps/om11.jpg)

But how to view all thee maps without getting lost in the details? Simply adjust which information from the map you need and set the transparency of the layer. For example, combining Microsoft Earth map with the basic OsmAnd offline vector map can be very helpful. You can hide all the excessive data from the map and simply overlay roads over the satellite images. To set the features you would like to hide from the current map, just go to <i>Configure map-> Hide</i> and select buildings, polygons, boundaries or all of them together.
Please see full video guide below:

<iframe width="900" height="506" src="https://www.youtube.com/embed/KBZ1DJa7RMg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>

<TabItem value="ios" label="iOS">

To select an online map as your basic map, go to <i>Map-> Map type-> Online maps</i> and select the one you prefer from the list. If you do not see the desired map on the list, select <i>Install more...</i> to view the entire list of  available installs.

![Online Maps](@site/static/img/plugins/online-maps/om12.jpg) ![Online Maps](@site/static/img/plugins/online-maps/om13.jpg)

When you select an online map as basic map (Overlay/Underlay map) all of map tiles of this map source will be cashed. You can check the size of the tiles in <i>Maps & Resources-> Installed-> Online Raster Maps</i>. You can delete this map source, clear all tiles, or edit them.


<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/plugins/online-maps/om14.jpg').default} alt="Image"/></td>
    <td><img src={require('@site/static/img/plugins/online-maps/om15.jpg').default} alt="Image"/></td>
    <td><img src={require('@site/static/img/plugins/online-maps/om16.jpg').default} alt="Image"/></td>
  </tr>
</table> 


<!--
 <div class="centeredimageblog">
<img src="/images/features/om14.jpg" alt="(Image not available offline)"/>
<img src="/images/features/om15.jpg" alt="(Image not available offline)"/>
<img src="/images/features/om16.jpg" alt="(Image not available offline)"/>
<div style="clear:both;"></div>
</div>
 -->

Online maps can be added with a special link. All of these online maps you can select in the <i>General menu-> Map-> Map type-> Online maps</i>.

![Online Maps](@site/static/img/plugins/online-maps/12.jpg) ![Online Maps](@site/static/img/plugins/online-maps/13.jpg)

Not only can you use one map (map type), you can also add up to two of them to the basic layer: open the <i>app menu-> Map-> Overlay / Underlay</i> maps to combine all three of them on the screen. For instance, you can open a basic OsmAnd offline vector map, then add a satellite view for the overlay, and then put cycling routes map underneath.
You can choose base map transparency for your layer, set the display of the transparency slider, and select whether display polygons on the map or not.

<table class="blogimage">
  <tr>
    <td><img src={require('@site/static/img/plugins/online-maps/om17.jpg').default} alt="Image"/></td>
    <td><img src={require('@site/static/img/plugins/online-maps/om18.jpg').default} alt="Image"/></td>
    <td><img src={require('@site/static/img/plugins/online-maps/om19.jpg').default} alt="Image"/></td>
  </tr>
</table> 

<!--

<div class="centeredimageblog">
<img src="/images/features/om17.jpg" alt="(Image not available offline)"/>
<img src="/images/features/om18.jpg" alt="(Image not available offline)"/>
<img src="/images/features/om19.jpg" alt="(Image not available offline)"/>
<div style="clear:both;"></div>
</div>

-->

But how to view all thee maps without getting lost in the details? Simply adjust which information from the map you need and set the transparency of the layer. For example, combining the Microsoft Earth map with the basic OsmAnd online tile can be very helpful. You can hide all the excessive data from the map and simply overlay roads over the satellite images. To set the features you would like to hide from the current map, just go to <i>Map-> Map style (Hide)</i> and select buildings, polygons, boundaries or all of them together.

Please see full video guide below:

<iframe width="900" height="506" src="https://www.youtube.com/embed/kmlgPA0W7VA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</TabItem>
 
</Tabs>


## How to prepare raster maps

:::info
Main article to prepare maps https://docs.osmand.net/docs/technical/map-creation/create-offline-maps-yourself#raster-maps-advanced
:::

Despite the plugin being called *Online Maps*, you can use the maps without internet connection as well. You just need to save the parts of maps (often called tiles) to use them later. To do that, download a specific [Map Creator tool](http://download.osmand.net/latest-night-build/OsmAndMapCreator-main.zip) developed by OsmAnd team.

Select the area you need to download, click on the Preload area, then set the smallest and the largest zoom levels you want to display and download the tiles.
For <b>Android version</b> you can copy them to your phone's <i>osmand/tiles/*tile type*</i> folder. You'll also need to open the <i>Configure map-. Overlay map</i> and choose OsmAnd online tiles.

For <b>iOS version</b> you can choose SQ Lite file in your phone (any messenger or dropbox), OsmAnd will suggest to add it. You'll also need to open <i>Map-> Overlay / Underlay or Map type</i> and choose new map source.

How to add SQ Lite file in Android and iOS version of OsmAnd you can read in <a href="https://anygis.ru/Web/Html/Osmand_en"><b>Anygis project</b></a>.


Online tiles can be helpful when you need just a small section of the map or a specific type of it to use in the limited area, but don't want to download the whole region. They can come in handy in endless situations.

![Online Maps](@site/static/img/plugins/online-maps/map_creator.jpg)

![Online Maps](@site/static/img/plugins/online-maps/map_creator_menu.jpg)



