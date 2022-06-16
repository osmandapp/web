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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';

<InfoIncompleteArticle/>

Nautical map is a detailed graphic representation of oceans, seas, coastal areas, and rivers that helps you navigate the water and know popular routes, obstacles in your waterway, nearest harbors, anchorages, and other essential references.  



## Overview

Nautical Chart is a highly detailed topographical map to help skippers navigate a vessel on a selected course on the water. It is similar to a road map for those traveling by car. Often referred to as a *'Chart'* for historical reasons, it is a detailed graphic representation of the oceans, seas, coastal areas and rivers.

Nautical charts are important for professional sailors as well as for amateurs who rent a boat for cruising the city's canals. The maps provide them with a variety of information such as sailing routes, navigation lights, danger zones, zones where it is allowed or prohibited to sail or dock, etc.

![Nautical maps](@site/static/img/plugins/nautical-charts/nautical_maps.png)


### What's in

The Nautical plugin in OsmAnd extends the vector layer map styles with the Nautical map style. It allows you to display map data according to Nautical Chart rules, for example: yellow areas for land and shoals, light blue areas for shallow waters, etc. For more information see: [Map legend](../../user/map-legend/nautical-map.md). 

In addition to the Nautical style, the plugin provides Nautical map packs for download. This is additional data to enrich the representation of nautical information on the map. They cannot replace the official nautical map. However, based on [OpenSeaMap](http://www.openseamap.org/), Nautical map packs provide important information about inland waterways, wild waters, port and coastal infrastructure, etc., which helps with navigation on the water.  


### Why the Nautical theme matters 

All professional sailors are required to have official nautical charts on their ships. These charts are published by authorized agencies and are quite expensive. The agencies invest heavily in keeping the charts up to date. They issue regular updates to the charts, but because it takes time to verify the information and process the updates, nautical charts are never completely up to date.

Based on [OpenSeaMap](http://www.openseamap.org/) data, OsmAnd Nautical maps are created by people who actually use them. Each map user can contribute to the map by adding information they find important and useful for themselves, thereby making the map more detailed and accurate, ideal for orienteering or route planning.  



## Setup   

The following setup makes the Nautical map show up on the screen: 
1. Purchase Nautical services.  
2. Enable the plugin.  
3. Download the Nautical maps.  
4. Enable the Nautical map style.  


### Purchase Nautical    
 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">  

:::note
  
<ProFeature/>  Nautical maps you can use with Pro or Free feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>. 

:::
  
For more details, visit [Purchases](../purchases/ios.md#in-app-purchases).  
Additionally, view purchases you have already made by opening the following section: *<Translate android="true" ids="shared_string_menu,shared_string_settings,purchases"/>*

</TabItem>

<TabItem value="ios" label="iOS">

:::note
  
<ProFeature/>  Nautical maps you can use with Pro or Free feature  <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.  

:::  

For more details, visit [Purchases](../purchases/ios.md#in-app-purchases).  
Additionally, view purchases you have already made by opening the following section: *<Translate ios="true" ids="menu,sett_settings,purchases"/>*  

</TabItem>

</Tabs>


### Enable plugin  

After the purchase of **Nautical service**, the Nautical plugin can be enabled. The plugin unlocks more functional capabilities, such as: 

- Download nautical maps. 
- Enable the Nautical map style for any of the profiles.
- View depth contours and seabed information. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

With the purchase of Nautical service made in the *<Translate android="true" ids="android_button_seq"/>* version, to start using Nautical Charts, the Nautical plugin should be enabled, as follows: *<Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_nautical_name"/>*   

After enabling the Nautical plugin, you can download Nautical maps, select a Nautical maps style for the profile, and navigate in nautical details while navigating.

![Nautical maps plugin Android](@site/static/img/plugins/nautical-charts/plugin_nautical_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

With the purchase of Nautical service made in the *<Translate ios="true" ids="ios_button_seq"/>* version, to start using Nautical Charts, the Nautical plugin should be enabled, as follows: *<Translate ios="true" ids="menu,plugins,product_title_nautical"/>*


After enabling the Nautical plugin, you can download Nautical maps, select a Nautical maps style for the profile, and navigate in nautical details while navigating.

![Nautical maps plugin iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_ios.png)

</TabItem>

</Tabs>


### Download Nautical maps  

When you [download](../start-with/download-maps.md) a nautical map, more details related to Boat navigation appear on the map. Some types of [nautical map](../start-with/download-maps.md#type-of-maps) contain details such as:
- Nautical marks and symbols.
- Depth points.
- Depth contours.  

**Details**  

1. Marks and symbols are downloaded once for the entire world. Depth points are available for each hemisphere and for some regions. Depth contours can be downloaded for certain areas and then turned off if you do not need them. If a navigation package is downloaded, its data is displayed on the map according to the navigation settings described below.  
2. Nautical data from the depth point packages are represented by numbers displayed on the water that indicate the shallowest depth at a particular location. Depth contour packages allow you to define areas of equal depth. Both points and contours are intended to visualize changes in relief beneath the water surface.   
3. Marks and symbols contain all nautical navigational marks for both inland and coastal navigation. Knowing these marks will help you predict the location of rocks, obstructions, anchorages, currents, deep and shallow water, channel sides regardless of direction, etc.   

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">  

In the *<Translate android="true" ids="android_button_seq"/>* version, all nautical maps are available for [download](../start-with/download-maps.md) in the following area: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,nautical_maps"/>*  

![Nautical plugin maps view Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

In the *<Translate ios="true" ids="ios_button_seq"/>* version, all nautical packages are available for [download](../start-with/download-maps.md) in the following area: *<Translate ios="true" ids="menu,res_mapsres,region_nautical"/>*  

![Nautical plugin maps view iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>

For optimal presentation, maps can be adapted to current needs: marks and symbols can be added with depth points and, if necessary, contours. On the other hand, standard maps with information about inland, onshore and nearshore waters information for a particular region can be a good complement to the information about waterways on a Nautical map.

> **NOTE**: All numbers on the Nautical Charts are presented in meters. 


### Set map style to Nautical  

By setting the Nautical map style, you can get the best representation of the downloaded and rendered Nautical data. To change the current map style to Nautical, use the [Configure map](../map/configure-map-menu.md) menu, scroll down to Map Style, and select Nautical.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">  

In the _Android_ version, to change the map style to [**Nautical**](../map/vector-maps.md#nautical) and thus, reveal more nautical-specific colours and visualization on the map, go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer"/>* 

![Nautical Map Type in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

In the *<Translate ios="true" ids="ios_button_seq"/>* version, to change the map type to [**Nautical**](../map/vector-maps.md#nautical) and thus, reveal more nautical-specific colors and visualization on the map, go to: *<Translate ios="true" ids="menu,configure_map,map_settings_type"/>*  

![Nautical Map Type in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)


</TabItem>

</Tabs>


## Nautical options

Nautical map can be included in any profile. However, it is most valuable in the [Boat profile](../personal/profiles.md) and especially in [Boat navigation](../navigation/boat-navigation.md).   

![Boat profile in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile1.png) ![Boat navigation in iOS](@site/static/img/plugins/nautical-charts/ios_boat_navigation2.png) 

### Depth contours  

When a Nautical map is displayed on the screen, you can adjust what you see:

- Show or hide the depth contours.
- Setting the detail level of the seafloor information.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">  

In the *Android* version with the Nautical plugin set up, you can show or hide depth contours using the corresponding option in [Configure map](../map/configure-map-menu.md) menu: *<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,rendering_attr_depthContours_name"/>*  


![Nautical depth contours in Android](@site/static/img/plugins/nautical-charts/and_depth_contours.png)


</TabItem>

<TabItem value="ios" label="iOS">  

In the *iOS* version with the Nautical plugin set up, you can show or hide depth contours using the corresponding option in [Configure map](../map/configure-map-menu.md) menu: *<Translate ios="true" ids="menu,configure_map,map_settings_style,res_details"/>*    

        
![Depth contours in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours.png)

</TabItem>

</Tabs>



### Seabed details - Android only

Seabed data contains information about vegetation and general surface material such as rocky rocks, shells, gravel, coral, silt, etc. Due to the international classification of seafloor data, there are options for displaying such details on a map: *simple*, *category*, *all* or *omit*.  
To select one of the seabed detail display options, click on the link: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_attr_seabedDetail_name"/>*  

![Seabed details in Android](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

| Parameter and Description |
| --- | 
| **Omit** does not show details of the seafloor. |
| **Simple** - shows the seamark symbols in accordance with INT-1 Ref, indicating the nature of the seabed surface. |
| ![Seabed simple](@site/static/img/plugins/nautical-charts/seabed_simple1.png) |
| **Category** - in addition to the seamark symbol, also shows the respective seamark tag, indicating the natural material, or the seaweed/seagrass category. | 
| ![Seabed category](@site/static/img/plugins/nautical-charts/seabed_category1.png) |
| **All** - in addition to the seamark symbol, tag or category, also shows qualifications, like: fine, sticky, coarse, etc.; or for seagrass/seaweed, shows data marked with the *taxon* and *genus* tags.|
| ![Seabed all](@site/static/img/plugins/nautical-charts/seabed_all1.png) | 

>**NOTE**: For more details on the classification of the surface details and the rendering options, refer to [OSM's seamark wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).



### Map legend

Use the map legend for any reference to what is shown on the nautical map. [Map legend](../../user/map-legend/nautical-map.md) helps anyone who wants to read a map. It explains the symbolic elements on a nautical map and serves as a reference to help you navigate when in doubt.
The map legend shows the following visual elements that can be found on the map:  

- Anchorage and berth.
- Navigation lines and areas.
- Buoys and beacons. 
- Electronic position-fixing systems, fog signals.
- Lights.
- Ports, moorings.
- Offshore platforms.
- Landmarks.
- Buildings. 
- Wrecks and rocks.
- Bridges, lockgates.
- Small craft facilities. 
- Marine farm, fishing.
- Seabed area.
- Cables and pipelines.
- Obstruction.
- And other signs of prohibition, information, regulation, recommendation, etc.


### Remove Nautical 

To remove Nautical and display one of OsmAnd's conventional maps, do any of the following:

- Disable Nautical plugin. 
- Change the map style to anything else then "Nautical". 

>**NOTE**: Disabling the Nautical plugin does not remove loaded nautical data, so even if you change the rendering method from nautical to any other method when nautical data is downloaded, it remains visible on the map.  

