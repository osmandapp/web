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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

:::tip NOTE
The Nautical map view plugin is a paid feature of the OsmAnd app.  
:::

Nautical map view is a detailed graphic representation of oceans, seas, coastal areas, and rivers that helps you navigate the water and know popular routes, obstacles in your waterway, nearest harbors, anchorages, and other important landmarks.  


## Overview

Nautical Chart is a highly detailed topographical map to help skippers navigate a vessel on a selected course on the water. It is similar to a road map for those traveling by car. Often colled a *'Chart'* for historical reasons, it is a detailed graphic representation of the oceans, seas, coastal areas and rivers.  

Nautical charts are important for professional sailors as well as for amateurs who rent a boat for cruising the city's canals. The maps provide them with a variety of information such as sailing routes, navigation lights, danger zones, zones where it is allowed or prohibited to sail or dock, etc.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nautical maps](@site/static/img/plugins/nautical-charts/nautical_pl_3.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Nautical maps](@site/static/img/plugins/nautical-charts/nautical_pl_4.png) 

</TabItem>

</Tabs>

 
### Why the Nautical theme matters 

All professional sailors are required to have official nautical charts on their ships. These charts are published by authorized agencies and are quite expensive. The agencies invest heavily in keeping the charts up to date. They issue regular updates to the charts, but because it takes time to verify the information and process the updates, nautical charts are never completely up to date.

Based on [OpenSeaMap](https://wiki.openstreetmap.org/wiki/OpenSeaMap) data, OsmAnd Nautical maps are created by people who actually use them. Each map user can contribute to the map by adding information they find important and useful for themselves, thereby making the map more detailed and accurate, ideal for orienteering or route planning.  


## Setup   

The following setup makes the Nautical map show up on the screen: 
1. [Purchase](../plugins/index.md#purchase) and [Enable](../plugins/index.md#enable--disable) Nautical map view plugin.  
2. [Download](#download-nautical-maps) the Nautical maps.  
3. Set the [Nautical](#set-nautical-map-style) map style for the required [profile](../personal/profiles.md).   


### Set Nautical map style

Use the [Map legend](../../user/map-legend/nautical-map.md) for any reference to what is shown on the nautical map. It explains the symbolic elements on a nautical map and serves as a reference to help you navigate when in doubt. By setting the Nautical chart style, you can get the best view of the downloaded and displayed nautical data.  

To change the current map style to Nautical, you need to make the following setting:  

1. Select the required [profile](../personal/profiles.md).  
2. Open [Configure map](../map/configure-map-menu.md).  
3. Scroll down up to Map style, open it and check the **Nautical**. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

 *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,nautical_renderer"/>*  

![Nautical Map Type in Android](@site/static/img/plugins/nautical-charts/and_map_style1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline"/>*  

![Nautical Map Type in iOS](@site/static/img/plugins/nautical-charts/ios_nautical_map_type1.png)

</TabItem>

</Tabs>


### Download Nautical maps  

For optimal presentation, maps can be adapted to current needs: marks and symbols can be added with depth points and, as needed, contours. On the other hand, standard maps with information about inland, onshore and nearshore waters information for a particular region can be a good complement to the information about waterways on a Nautical map.  

When you [download](../start-with/download-maps.md) a nautical map, more details related to Boat navigation appear on the map. Some types of [Nautical maps](../start-with/download-maps.md#type-of-maps) contain details such as:  

- **Nautical marks and symbols**   
Marks and symbols contain all nautical navigational marks for both inland and coastal navigation. Knowing these marks will help you predict the location of rocks, obstructions, anchorages, buoys, currents, deep and shallow water, and sides of the channel, regardless of the direction, etc. Marks and symbols are downloaded once for the entire world.    

- **Depth points**   
Nautical data from the depth point packages are represented by numbers displayed on the water that indicate the shallowest depth at a particular location. Depth points are available for each hemisphere and for some regions.     

- **Depth contours**   
Depth contour packages allow you to define areas of equal depth.  They are intended to visualize changes in relief beneath the water's surface. Depth contours can be downloaded for certain areas and then turned off if you do not need them.   

:::info NOTE
All depth numbers on the Nautical Charts are indicated in meters. 
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,maps_and_resources,nautical_maps"/>*  

![Nautical plugin maps view Android](@site/static/img/plugins/nautical-charts/plugin_nautical_view_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,res_mapsres,region_nautical"/>*  

![Nautical plugin maps view iOS](@site/static/img/plugins/nautical-charts/plugin_nautical_view_ios.png)

</TabItem>

</Tabs>


### Disable Nautical map style

To remove Nautical and display one of OsmAnd's conventional maps, do any of the following:

- Disable Nautical plugin. 
- Change the map style to anything else then "Nautical". 

:::info NOTE
Disabling the Nautical plugin does not remove loaded nautical data, so even if you change the rendering method from nautical to any other method when nautical data is downloaded, it remains visible on the map.  
:::


## Nautical profile

Nautical map can be included in any profile. However, it is most valuable in the [Boat profile](../personal/profiles.md) and especially in [Boat navigation](../navigation/routing/boat-navigation.md).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Nautical depth contours in Android](@site/static/img/plugins/nautical-charts/and_boat_profile-2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*    

![Depth contours in iOS](@site/static/img/plugins/nautical-charts/ios_boat_profile-2.png)

</TabItem>

</Tabs>


## Nautical map style

The Nautical plugin in OsmAnd extends the vector layer map styles with the Nautical map style. It allows you to display map data according to Nautical Chart rules, for example: yellow areas for land and shoals, light blue areas for shallow waters, etc. For more information see [Map legend](../../user/map-legend/nautical-map.md).  


### Depth points

Depth point [packages](../start-with/download-maps.md#type-of-maps) are available for Europe, Northern Hemisphere, and Southern Hemisphere and are informational. Depth points indicate changes in topography below the water's surface, indicating the shallowest depth. This is necessary for Boat navigation. After downloading, you need to turn on [Depth contours](#depth-contours) to display it on the map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Nautical maps](@site/static/img/plugins/nautical-charts/and_depth_points.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Nautical maps](@site/static/img/plugins/nautical-charts/ios_depth_points.png) 

</TabItem>

</Tabs>


### Depth contours  

When a Nautical map is displayed on the screen, you can adjust what you see:

- Show or hide the *Depth contours*.
- Setting the detail level of the seafloor information: [*Line width* and *Line color scheme*](../map/vector-maps.md#-nautical-depth). 

:::info NOTE
You can help OsmAnd app increase the Depth contours database by adding your information using [OpenSeaMap](https://map.openseamap.org/) 
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_show,nautical_depth"/>*  

![Nautical depth contours in Android](@site/static/img/plugins/nautical-charts/and_depth_contours-3.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*    

![Depth contours in iOS](@site/static/img/plugins/nautical-charts/ios_depth_contours-2.png)

</TabItem>

</Tabs>


### Seabed details

Seabed data contains information about vegetation and general surface material such as rocky rocks, shells, gravel, coral, silt, etc. Due to the international classification of seafloor data, there are options for displaying such details on a map: *simple*, *category*, *all* or *omit*. Use the [Seabed area map legend](../map-legend/nautical-map.md#seabed-area) for more information.    

- **Simple** (*for Android version*)- shows the seamark symbols in accordance with INT-1 Ref, indicating the nature of the seabed surface.  
- **Category** - in addition to the seamark symbol, also shows the relevant seamark tag, indicating the natural material, or the seaweed and seagrass category. 
- **All** - in addition to the seamark symbol, tag or category, also shows qualifications such as fine, sticky, coarse, etc. For seagrass and seaweed, shows data marked with the *taxon* and *genus* tags.  
- **Omit** - does not show details of the seafloor.  

:::info NOTE
For more details on the classification of the surface details and the rendering options, refer to [OSM's seamark wiki](https://wiki.openstreetmap.org/wiki/Seamarks/INT-1_Section_J).
:::  
 
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_others,rendering_attr_seabedDetail_name"/>*  

![Seabed details](@site/static/img/plugins/nautical-charts/and_seabed_details1.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_style,nautical_depth"/>*     

![Seabed details](@site/static/img/plugins/nautical-charts/ios_seabed_details.png)

</TabItem>

</Tabs>
