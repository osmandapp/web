---
sidebar_position: 7
title:  Nautical map view
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

Nautical map provides detailed graphical representation of oceans, seas, coastal areas and rivers to help you navigate on the water, and be aware of popular traffic routes, obstacles in your waterway, the nearest harbors, anchorages, and other essential reference. 



## Overview

Nautical Chart is a typographic map with high level of detail to help skippers drive a boat along the selected course on the water. It is like a road map for everybody on a vehicle. The map, often called as *'Chart'* due to historical reasons, provides a detailed graphical representation of oceans, seas, coastal areas and rivers.

Nautical Charts are important for professional sailors as well as amateurs easily renting a boat to make a tour over the city canals. The charts provide them with various information like sailing routes, navigation lights, dangerous areas, areas where it's allowed or not allowed to sail or dock, etc.

![Nautical maps](@site/static/img/plugins/nautical-charts/nautical_maps.png)


### What is the Nautical plugin?

The Nautical plugin of OsmAnd extends the map styles of the vector layer with the Nautical map style. It makes the map data displayed according to the rules of the Nautical Chart, such as: yellow areas for land and sandbars, light blue areas for shallow water, etc. For more details, refer to: the [Map legend](../../user/map-legend/nautical-map.md). 

In addition to the Nautical style, the plugin provides the Nautical map packages for download. These are extra data to enrich the representation of marine information on the map. It cannot replace the official nautical chart. However, based on [OpenSeaMap](http://www.openseamap.org/), the Nautical map packages provide vital details on the inland waterways, wildwater, infrastructure of ports and onshore facilities, etc. which are helpful during navigating on the water.


### Why does Nautical matter? 

All professional sailors are obliged to have official nautical charts on their ships. These charts are published by authorized agencies and cost quite some money. Agencies are investing a lot in keeping the charts up to date. They release updates for the charts on regular basis, but, because of the fact that reviewing the information and processing the updates take time, the nautical charts are never completely up-to-date.

Being based on the data from [OpenSeaMap](http://www.openseamap.org/), the Nautical maps of OsmAnd are created by people who actually use it. Every user of the map can contribute to it by adding information they view being important and useful to them, thus, making the map more detailed and accurate, ideal for orientation or route planning.



## Setup 

The following setup makes the Nautical map show up on the screen: 

1. Purchase Nautical services.

2. Enable the plugin. 

3. Download the Nautical maps.

4. Enable the Nautical map style.




### Purchase Nautical  

Nautical Chart is a paid service. Depending on the app version whether it is an iOS app, or an Android one, there are different options of obtaining the map. For more details, visit [Purchases](../purchases/index.md). 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

For a Nautical Chart purchase on **Android**, refer to [in-app purchases, a subscription, or the full version of the app](../purchases/android.md#free-and-paid-features). 

It is also possible to view the already made purchases, by opening the following section in settings: 

<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>

</TabItem>

<TabItem value="ios" label="iOS">

For a Nautical Chart purchase on **iOS**, refer to [in-app purchases, or a subscription](../purchases/ios.md#in-app-purchases). 

It is also possible to view the already made purchases, by opening the following section in settings: 

<Translate ios="true" ids="menu,sett_settings,purchases"/> 

</TabItem>

</Tabs>


### Enable plugin  

After the purchase of Nautical service, the Nautical plugin can be enabled. The plugin unlocks more functional capabilities, such as: 

- download nautical maps, 
- enable the Nautical map style for any of the profiles,
- view depth contours and seabed information. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

With the purchase of Nautical service made in the **Android** version, to start using Nautical Charts, the Nautical plugin should be enabled, as follows:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_nautical_name"/> 

After enabling the Nautical plugin, you can download Nautical maps, select the Nautical map style per profile, guide yourself with more nautical details during navigation.

![Nautical maps plugin Android](@site/static/img/plugins/nautical-charts/plugin_nautical_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

With the purchase of Nautical service made in the **iOS** version, to start using Nautical Charts, the Nautical plugin should be enabled, as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,plugins,product_title_nautical"/>


After enabling the Nautical plugin, you can download Nautical maps, select the Nautical map type per profile, guide yourself with more nautical details during navigation.

![Nautical maps plugin iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_ios.png)

</TabItem>

</Tabs>




  
### Download Nautical maps  

With the [download](../start-with/download-maps.md) of a nautical map, more details specific to the Boat navigation show up on the map. There are some types of a [nautical map](../start-with/download-maps.md#type-of-maps) providing such details as:

- sea marks and symbols,
- depth points,
- depth contours. 

Marks and symbols are downloaded once for the entire World. Depth points are available per hemisphere, and for some regions. Depth contours can be downloaded for specific areas and then turned off, if not needed. If a nautical package is downloaded, its data is displayed on the map, according to the nautical settings described below. 

Nautical data from the depth points packages is represented with the numbers displayed on the water to indicate the lowest depth at a specific spot. The depth contours packages allow you to identify areas of equal depth. Both points and contours are intended to visualize how the relief might change underneath the water surface. 

Marks and symbols provide all nautical navigation signs, for inland as well as for nearshore navigation. Knowing these symbols helps to predict the location of rocks, obstacles, anchorages, the move of the current, areas of deep and shallow water, the side of a channel regardless of the direction of your movement, etc. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, all nautical maps are available for [download](../start-with/download-maps.md) in the following area:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,welmode_download_maps,nautical_maps"/> 

![Nautical plugin maps view Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, all nautical packages are available for [download](../start-with/download-maps.md) in the following area:

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,res_mapsres,region_nautical"/> 

![Nautical plugin maps view iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

For an optimal representation, it is possible to select maps up to your current needs: marks and symbols can be added with depth points, and if required, with contours. On the other hand, standard maps with inland, onshore and nearshore information for a specific region can be a good addition to the waterway information of the Nautical map. 

> **NOTE**: All numbers on the Nautical Charts are presented in meters. 




### Set map style to Nautical  

By establishing the Nautical map style, it is possible to achieve the best representation of the downloaded and rendered Nautical data.  To change the current map style to Nautical, use the [Configure map](../map/configure-map-menu.md) menu, scroll down to the Map Style, and select Nautical. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, to change the map style to **Nautical** and thus, reveal more nautical-specific colors and visualization on the map, go to: 

&nbsp;&nbsp;&nbsp;&nbsp;<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>

![Nautical Map Type in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, to change the map type to [**Nautical**](../map/vector-maps.md#nautical) and thus, reveal more nautical-specific colors and visualization on the map, go to:

&nbsp;&nbsp;&nbsp;&nbsp;**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,map_settings_type"/>

![Nautical Map Type in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)


</TabItem>

</Tabs>








## Nautical options

The Nautical map can be enabled for any profile. However, the most value it makes to use it within the [Boat profile](../personal/profiles.md) and especially with the [Boat navigation](../navigation/boat-navigation.md). 

![Boat profile in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile1.png) ![Boat navigation in iOS](@site/static/img/plugins/nautical-charts/ios_boat_navigation2.png) 

### Depth contours  

With the Nautical map on the screen, you can adjust what you see by:
     
- showing or hiding the depth contours;
- specifying the detail level for the seabed information. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

In the **Android** version, with the Nautical plugin set up, you can show, or hide the depth contours with the respective option in the [Configure map](../map/configure-map-menu.md) menu: 

&nbsp;&nbsp;&nbsp;&nbsp;<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,rendering_attr_depthContours_name"/>

![Nautical depth contours in Android](@site/static/img/plugins/nautical-charts/and_depth_contours.png)


</TabItem>

<TabItem value="ios" label="iOS">

In the **iOS** version, with the Nautical plugin set up, you can show, or hide the depth contours with the respective option in the [Configure map](../map/configure-map-menu.md) menu: 

&nbsp;&nbsp;&nbsp;&nbsp;<Translate ios="true" ids="menu,configure_map,map_settings_style,res_details"/>  
        
![Depth contours in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours.png)

</TabItem>

</Tabs>



### Seabed details - Android only

Seabed details provide information about the vegetation and general material the surface is composed of, such as: rocky, shells, gravel, coral, mud, etc. Due to the international classification of the seabed data, there are options of how to display such details on the map: *simple*, *category*, *all*, or *omit*. To select one of the seabed details options, go to:

&nbsp;&nbsp;&nbsp;&nbsp;<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_seabedDetail_name"/> 

![Seabed details in Android](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

| Parameter and Description |
| --- | 
| **Omit** - shows no seabed details. |
| **Simple** - shows the seamark symbols in accordance with INT-1 Ref, indicating the nature of the seabed surface. |
| ![Seabed simple](@site/static/img/plugins/nautical-charts/seabed_simple1.png) |
| **Category** - in addition to the seamark symbol, also shows the respective seamark tag, indicating the natural material, or the seaweed/seagrass category. | 
| ![Seabed category](@site/static/img/plugins/nautical-charts/seabed_category1.png) |
| **All** - in addition to the seamark symbol, tag or category, also shows qualification, like: fine, sticky, coarse, etc.; or for seagrass/seaweed, shows data marked with the *taxon* and *genus* tags.|
| ![Seabed all](@site/static/img/plugins/nautical-charts/seabed_all1.png) | 

>**NOTE**: For more details on the classification of the surface details and the rendering options, refer to [OSM's seamark wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).



### Map legend

Use the Map Legend for any reference on what is displayed on the Nautical map. [Map legend](../../user/map-legend/nautical-map.md) helps everybody who wants to read the map. It provides explanation of symbolic elements on the Nautical map, and serves as a reference to guide yourself with in case of doubts. The Map Legend shows the following visual elements you can find on the map:

- Anchorage and berth,
- Navigation lines and areas,
- Buoys and beacons, 
- Electronic position-fixing systems, fog signals,
- Lights,
- Ports, moorings,
- Offshore platforms,
- Landmarks,
- Buildings, 
- Wrecks and rocks,
- Bridges, lockgates,
- Small craft facilities, 
- Marine farm, fishing,
- Seabed area,
- Cables and pipelines,
- Obstruction,
- and other signs of prohibition, information, regulation, recommendation, etc.


### Remove Nautical 

To remove Nautical and display one of OsmAnd's conventional maps, do any of the following:

- disable the Nautical plugin, 
- change the map style to anything else then 'Nautical'. 

>**NOTE**: By disabling the Nautical plugin, the downloaded nautical data is not deleted, so even if the rendering method is changed from nautical to anything else, when the nautical data is downloaded, it remains visible on the map. 

