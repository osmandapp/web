---
sidebar_position: 6
title:  Ski map view
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

Ski Map View shows winter colors and pistes downhill or cross-country, as well as cable cars, chairlifts, facilities and services nearby, which is useful for navigating destinations such as recreation areas, ski resorts and terrain parks.

## Overview

OsmAnd Ski Map shows famous and popular slopes, officially approved ski areas and trail maps of most ski resorts. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) piste maps are the data source for OsmAnd ski maps. Combined with vector maps, the OsmAnd ski map is very accurate and will be useful for instructors, climbers, and winter sports enthusiasts.

The OsmAnd ski map is part of the vector maps and does not require additional downloads. It is disabled by default. The plugin allows you to enable the OsmAnd ski map and start using it. The OsmAnd Ski Map is one of [Map Styles](../map/vector-maps.md) that provides additional features by highlighting some objects and making others less visible.  

Two profiles are shown below: the one on the left is for skiing and the one on the right is for driving. The Skiing profile highlights trails, airways, winter colors, and all map objects useful for navigating the ski area.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Ski maps in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![No Ski maps in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![No Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Setup

The following setting makes the OsmAnd Ski Map appear on the screen:

1. Enable [Ski map view plugin](../plugins/index.md#enable--disable).  
2. Set the [Winter and Ski](#set-winter-and-ski-map-style) map style for the required [profile](../personal/profiles.md).  
3. If needed, [combine maps](#combine-maps).  
  


## Ski map style

Use the [Ski map legend](../../user/map-legend/ski-map.md) for any reference. It helps to know exactly the types of pistes displayed on the map, as well as the types of airways and other characteristics that can be read from the map.


### Set Winter and Ski map style  

Winter and Ski map style highlights trails, ski touring routes, sledding trails and information related to winter and skiing.  


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

To display style on the map, you need to make the following setting:  

1. Select the required [profile](../personal/profiles.md).  
2. Open [Configure map](../map/configure-map-menu.md).  
3. Scroll down up to Map style, open it and check the **Winter and Ski**.  
4. *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>* 



![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Ski maps plugin map style Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

To display style on the map, you need to make the following setting:  

1. Select the required [profile](../personal/profiles.md).  
2. Open [Configure map](../map/configure-map-menu.md).  
3. Scroll down up to Map type, open it and check the **Winter and Ski**.  
4. *<Translate ios="true" ids="menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  
 

![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Ski maps plugin map style iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>


:::tip NOTE 
The Skiing profile is designed to be used in combination with the Winter and Ski styles. However, the navigation type for each specific profile can be changed and set individually, so the final configuration of the profile, map style and navigation completely depends on the user settings.
:::



### Combine maps

The [Vector map](../map/vector-maps.md) with [Winter and Ski map style](../map/vector-maps.md#winter-and-ski) included can be completed with [Contour lines](../plugins/contour-lines.md#show-contour-linesterrain) and [Hillshade](../plugins/contour-lines.md#hillshade-map). Below are two examples. The left shows tracks on the vector map which is displayed by default, and the right shows tracks on the vector map combined with Contour lines and the Hillshade raster map. In the second case, the map shows more geolocation and elevation data to help estimate difficulty, risk, and distance.  

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![No map combination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![With map combination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![No map combination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![With map combination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>



## Map Layer

By reading the map, you can find out the details that are important to you, such as the difficulty of a particular trail, the type of trail, whether grooming is done, and whether the trail is lit at night.

> **NOTE**: The options described here are available in the [Ski navigation](../navigation/route-navigation.md). By default, the [Skiing profile](../personal/profiles.md) is set to the relevant navigation, unless otherwise specified. The **Skiing navigation** sets the individual route options which apply only to skiing and pistes on the slopes.  


### Pistes by difficulty

The difficulty of traces is usually indicated by certain colors. The colors may be different in different countries and resorts. Below are some practical guidelines. 

| Color | Description | 
| --- | --- |
| ![Beginner piste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Green - Beginner piste |
| ![ Easy hills](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blue - Easy hills | 
| ![Intermediate slopes](@site/static/img/plugins/ski-maps/3c_red_1.png) | Red - Intermediate slopes | 
| ![Advanced difficulty](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gray - Slopes of advanced difficulty |
| ![Expert difficulty](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Yellow - Slopes of expert difficulty | 

>**NOTE**: For more specific guidance for each trail difficulty type, see the [OSM piste difficulty reference](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) or any other source that also considers slopes, obstacles, and hazards.  



### Piste type 

Pistes differ by type. A type represents different characterstics for a piste to meet the requirements of different winter related activities: alpine skiing, classic skating, snowboarding, sled riding, backcountry skiing, ski touring, mogul skiing, night skiing, etc. Understanding the [type of the piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) on the map helps in building an optimal navigation route.

**Downhill/alpine skiing piste** is used for the Ski navigation. This piste type has a direction, difficulty, and most often it is surrounded by the boundaries of the ski resort. When a downhill piste is selected for the Ski navigation, the direction of the piste is taken into consideration. And in case if the Departure and the Destination points are established opposite to the direction of the piste, the navigation goes along the nearest aerial way. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Downhill piste type in Android](@site/static/img/plugins/ski-maps/and_downhill_piste_type.png)


</TabItem>

<TabItem value="ios" label="iOS">

![Downhill piste type in iOS](@site/static/img/plugins/ski-maps/ios_downhill_piste.png)

</TabItem>

</Tabs>



**Nordic/backcountry skiing piste** is also used for the Ski navigation. This piste type has no difficulty; can, or cannot have a direction, and most often it goes beyond the boundaries of the ski resort. When navigating along this type of pistes, the Departure and Destination points often can be exchanged. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Nordic piste type in Android](@site/static/img/plugins/ski-maps/and_nordic_piste_type.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nordic piste type in iOS](@site/static/img/plugins/ski-maps/ios_nordic_piste.png)

</TabItem>

</Tabs>


**Ski touring piste** is often used by skiers for a nordic ascent and a downhill descent. The difficulty of a ski touring piste is often marked with the respective color. The Ski navigation can build a route along this type of piste, thus allowing you to combine the piste types.

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

![Ski touring in Android](@site/static/img/plugins/ski-maps/and_skitour1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski touring in iOS](@site/static/img/plugins/ski-maps/ios_skitour.png)

</TabItem>

</Tabs>



**Other** Trail types such as Hiking Trails or Sledging Trails can be used for skiing or hiking.



### Grooming trails

Grooming is performed by special machines and ensures that the track is ready for the appropriate activity: classic skating, skating, and others. The same trail can be groomed differently in different areas. If the pistes outside the ski resort boundaries are pictured being groomed, it is a good sign for those going out for skiing.  

To check out the map on whether a piste is subject to grooming, it is needed to enable the respective option in the **Details** list opened from the [Configure map](../map/configure-map-menu.md) menu. And the map will show groomed pistes, as exemplified on the figures below. The left-hand one shows no grooming, while the right-hand one differentiates pistes by grooming conditions. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

To check out the map on whether a piste is subject to grooming, use the **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** option. It makes the map show which pistes are groomed. To enable the option, select the profile and open the **<Translate android="true" ids="rendering_category_details"/>** list, as follows: 

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>

![Enable grooming in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Grooming displayed in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

To check out the map on whether a piste is subject to grooming, use the **<Translate ios="true" ids="rendering_attr_pisteGrooming_name"/>** option. It makes the map show which pistes are groomed. To enable the option, select the profile and open the **<Translate ios="true" ids="rendering_category_details"/>** list, as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,map_settings_style,rendering_category_details,rendering_attr_pisteGrooming_name"/> 

![Enable grooming in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Grooming displayed in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)


</TabItem>

</Tabs>



### Ski slope routes

With the Skiing profile, the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) enabled, the [Ski slopes](../map/vector-maps.md#routes) routes show all types of pistes that the Ski navigation can use to build navigation routes along. Such Ski slopes routes, if enabled, are outlined with the violet color mostly outside ski resort boundaries.  

The **Routes** panel in the [Configure map](../map/configure-map-menu.md) menu, opened for a specific profile, shows the **Ski slopes** routes among other available options in the app. To view the Ski slopes routes, enable the respective option. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

To view what piste outside the ski resort is possible to navigate along, enable the **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** option in the **<Translate android="true" ids="rendering_category_routes"/>** list, opened for the required profile as follows:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>

![Routes disabled in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes enabled in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png) 

</TabItem>

<TabItem value="ios" label="iOS">

To view what piste outside the ski resort is possible to navigate along, enable the **<Translate ios="true" ids="rendering_attr_pisteRoutes_name"/>** option in the **<Translate ios="true" ids="rendering_category_routes"/>** list, opened for the required profile as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>

![Routes disabled in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes enabled in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>



### Night and lighting  

The **Winter and ski** style can be used with the [**Night**](../map/vector-maps.md#map-mode) mode. It is an obvious choice for someone who prefers dark colors, and/or it is getting dark at night, as well as for those who does some night skiing. Together with the Night mode, OsmAnd Ski Maps can show which pistes has [lighting](../map/vector-maps.md#details). 

Both options are provided with the [Configure map](../map/configure-map-menu.md) menu. To enable the Night mode, look for the respective option within the **Map mode** section of settings. To make the map show which pistes are lit up at night, enable the respective option in the **Details** section of settings. 

<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

The **Night** mode and **Street lighting** can help during night skiing. Both options are available within the [Configure map](../map/configure-map-menu.md) menu opened for the needed profile.  

To enable the **Night** mode, select the respective option from the following list: 

<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>

To enable the **Street lighting**, toggle the following option: 

<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>

![Enable Night mode and Lighting in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Night and lighting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

The **Night** mode and **Street lighting** can help during night skiing. Both options are available within the [Configure map](../map/configure-map-menu.md) menu opened for the needed profile.  

To enable the **Night** mode, select the respective option from the following list:

<Translate ios="true" ids="menu,configure_map,map_settings_style,map_mode"/>

To enable the **Street lighting**, toggle the following option:

<Translate ios="true" ids="menu,configure_map,res_details,rendering_attr_streetLighting_name"/>

![Enabling Night mode and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Night and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>



### Map data details

OsmAnd Ski Map is built as one of the rendering styles, which determines which objects to show on the map and the appearance of objects. All rendering styles are described in the XML file. For the rules that define the internal structure of the XML file, see the [Rendering documentation](../../technical/osmand-file-formats/osmand-rendering-style.md).

For the details on what data OsmAnd Ski Map shows, refer to the [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) file.




### Desible Ski map view plugin 

If removing trails and winter colors from the map are preferred, or the ski season is over, do one of the following: 

- Uncheck the [Winter and Ski](#set-winter-and-ski-map-style) map style for the required profile.  
- Change [Skiing profile](../personal/profiles.md) to any other profile.
- Disable [Ski map view plugin](../plugins/index.md#enable--disable). 

>**NOTE**: The Ski map viewer plugin is a separate application, and disabling its display does not remove it. If you need to uninstall it, go to the Android settings using "Open Settings" in the plugin menu.  
