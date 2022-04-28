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

Ski map view shows winter colors and pistes - ski paths down a mountain or cross-country - as well as cableways, chairlifts, amenities and services nearby, which are useful in navigating through the destinations like recreational areas, ski resorts, and terrain parks.



## Overview

To illustrate skiing location and amenities, most resorts and parks provide their piste map/trail map. OsmAnd Ski Map shows known/popular ski touring trails, officially approved ski areas and piste maps of most ski resorts on the northern and southern hemispheres, in Europe, Scandinavia, central Asia, Japan, North America, and other. 

The Piste Maps of [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) is the source of data for OsmAnd Ski Map. Combined with the default vector maps, the Ski Map of OsmAnd preserves its accuracy and benefits from a variety of contributors, like: ski resorts, lift operators, instructors, eager mountaineers, winter sports enthusiasts, etc.

OsmAnd Ski Map is delivered as part of the default vector maps, and does not require any extra downloading. However, it is disabled by default. The plugin allows you quickly to enable OsmAnd Ski Map and start to use it. OsmAnd Ski Map is one of the [Map Styles](../map/vector-maps.md) that provide extra capabilities by highlighting some objects, while making other less viable. 

With the profiles configured individually, it is possible to prepare a Skiing profile specifically for skiing. It will highlight an assorted amount of winter and ski related information on the map. Below are two profiles: the left-hand one is for skiing, the other one is for driving. And the profile for skiing highlights pistes, aerial ways, winter colors, etc. - the map objects useful when navigating through the ski area.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![No Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![No Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

<TabItem value="android" label="Android">

![Ski maps in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![No Ski maps in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

</Tabs>





&nbsp;&nbsp;&nbsp;&nbsp;

## Setup

The following setup makes OsmAnd Ski Map show up on the screen:

1. Enable the plugin.

2. Set the Winter and Ski map style.

3. If needed, combine maps. 


### Enable plugin

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

Enabling the Ski map plugin is a quick way to setup OsmAnd Ski Map. The plugin can add the default profile for skiing. If it has not been used yet, the default Skiing profile has the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) already established for it. Otherwise, the profile would remember the settings of the latest use. 

To enable the Ski Map plugin, do the following:

1. Open the list of plugins in the menu.

2. Find the Ski map plugin, and tap it. 

3. If needed, leave the Ski profile option toggled-on in the opened popup window, so that together with the plugin to enable the Skiing profile. 

![Ski maps plugin Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_android.png) ![Ski maps plugin iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_ios.png)

</TabItem>

<TabItem value="ios" label="iOS">

The **<Translate ios="true" ids="product_title_skimap"/>** plugin can  be enabled together with the **<Translate ios="true" ids="app_mode_skiing"/>** profile, which on the first use, has the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) established for it. 

To enable the **<Translate ios="true" ids="product_title_skimap"/>** plugin, tap it in the list of plugins opened, as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,plugins,product_title_skimap"/>

![Ski maps plugin iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_ios.png)

If the **<Translate ios="true" ids="app_mode_skiing"/>** profile is needed, leave the respective option toggled on in the opened popup window and tap **OK**. Otherwise, tap Turn off, and the plugin will be enabled without adding the profile. 

![Enabling Ski profile with plugin in iOS](@site/static/img/plugins/ski-maps/ios_profile_in_ski_plugin.png)

</TabItem>

<TabItem value="android" label="Android">

The **<Translate android="true" ids="plugin_ski_name"/>** plugin can  be enabled together with the **<Translate android="true" ids="app_mode_skiing"/>** profile, which on the first use, has the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) established for it. 

To enable the **<Translate android="true" ids="plugin_ski_name"/>** plugin, tap it in the list of plugins opened, as follows:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,plugins_menu_group,plugin_ski_name"/>

![Ski maps plugin Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_android.png) 

If the **<Translate android="true" ids="app_mode_skiing"/>** profile is needed, leave the respective option toggled on in the opened popup window and tap **OK**. Otherwise, tap Turn off, and the plugin will be enabled without adding the profile. 

![Enabling Ski profile with plugin in Android](@site/static/img/plugins/ski-maps/and_profile_in_ski_plugin.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Set Winter style

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The **Winter and Ski** style highlights pistes, ski touring trails, sled paths, etc. - the winter and ski related information. Whenever needed, just enable it for the required profile, as follows: 

1. Select the required [profile](../personal/profiles.md). 

2. Open [Configure map](../map/configure-map-menu.md).

3. Scroll down up to [Map style](../map/vector-maps.md), open it and check the Winter and Ski style. 


![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter.png) ![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles.png)

</TabItem>

<TabItem value="ios" label="iOS">

To verify what style is currently established for the profile, and\or to establish the **Winter and ski** style, select the respective option in the list of styles opened, as follows:

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,map_settings_type,map_settings_offline,winter_and_ski_renderer"/> 

![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter.png) ![Ski maps plugin map style iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios.png)

</TabItem>

<TabItem value="android" label="Android">

To verify what style is currently established for the profile, and\or to establish the **Winter and ski** style, select the respective option in the list of styles opened, as follows:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/> 

![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles.png) ![Ski maps plugin map style Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android.png)

</TabItem>

</Tabs>

>**NOTE**: The Skiing profile is initially created to be used together with the Winter and Ski style, as by default the Skiing profile is expected to have the Ski navigation established, which is intended for navigating along the pistes. However, what navigation type to use for every specific profile can be changed, and established individually, and thus, the final configuration of the profile, the map style and the navigation is fully governed by the settings made by the user.


&nbsp;&nbsp;&nbsp;&nbsp;

### Combine maps

The default [vector map](../map/vector-maps.md) with the enabled [Winter and Ski map style](../map/vector-maps.md#winter-and-ski) can be added with the [Contour lines](../plugins/contour-lines.md#show-contour-linesterrain) and\or [Hillshade](../plugins/contour-lines.md#hillshade-map) maps. Below are two examples. The left-hand figure shows pistes on the default vector map, while the one on the right shows pistes on the default vector map combined with the contour lines and the hillshade raster map. In the second case, the map unveils more geolocation insights and elevation data to help making an assessment of the complexity, risks, distance, etc. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![No map combination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![With map combination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![No map combination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![With map combination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

<TabItem value="android" label="Android">

![No map combination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![With map combination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

## Ski map options

While reading the map, it is possible to get other accompanying details, like: the complexity of a specific piste, the type of the trail, if any grooming is conducted, if the path is lit up at night, or other characteristics that might be helpful to skiing and snowboarding enthusiasts. 

> **NOTE**: The options covered herein, are worth considering also when using the [Ski navigation](../navigation/route-navigation.md). As a rule, it is available within the [Ski profile](../personal/profiles.md). The default navigation for the Ski profile is the **Ski navigation**, unless it is established otherwise. The Ski navigation is supplied with individual route parameters applicable only to skiing, and builds the route along pistes. 


### Piste difficulty

Being aware of the difficulty of a specific piste makes sense for alpine/downhill skiers, and also anybody who is visiting a ski resort, or area, so that to get straight to the point, and/or turn in the right direction. The difficulty of a piste is displayed with colors. Colors might differ in different resorts as well as in different countries. Below is some hands-on reference. 

| Color | Description | 
| --- | --- |
| ![Beginner piste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Beginner piste |
| ![ Easy hills](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Easy hills | 
| ![Intermediate slopes](@site/static/img/plugins/ski-maps/3c_red_1.png) | Intermediate slopes | 
| ![Advanced difficulty](@site/static/img/plugins/ski-maps/4c_black_1.png) | Slopes of advanced difficulty |
| ![Expert difficulty](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Slopes of expert difficulty | 

>**NOTE**: For more specific guidance on each piste difficulty type, see the [OSM piste difficulty reference](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty), and/or any other sources that consider also inclination, the presence of any obstacles and hazards.  


&nbsp;&nbsp;&nbsp;&nbsp;

### Piste type 

Pistes differ by type. A type represents different characterstics for a piste to meet the requirements of different winter related activities: alpine skiing, classic skating, snowboarding, sled riding, backcountry skiing, ski touring, mogul skiing, night skiing, etc. Understanding the [type of the piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) on the map helps in building an optimal navigation route.

**Downhill/alpine skiing piste** is used for the Ski navigation. This piste type has a direction, difficulty, and most often it is surrounded by the boundaries of the ski resort. When a downhill piste is selected for the Ski navigation, the direction of the piste is taken into consideration. And in case if the Departure and the Destination points are established opposite to the direction of the piste, the navigation goes along the nearest aerial way. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Downhill piste type in iOS](@site/static/img/plugins/ski-maps/ios_downhill_piste.png) ![Downhill piste type in Android](@site/static/img/plugins/ski-maps/and_downhill_piste_type.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Downhill piste type in iOS](@site/static/img/plugins/ski-maps/ios_downhill_piste.png)

</TabItem>

<TabItem value="android" label="Android">

![Downhill piste type in Android](@site/static/img/plugins/ski-maps/and_downhill_piste_type.png)


</TabItem>

</Tabs>

&nbsp;&nbsp;&nbsp;&nbsp;

**Nordic/backcountry skiing piste** is also used for the Ski navigation. This piste type has no difficulty; can, or cannot have a direction, and most often it goes beyond the boundaries of the ski resort. When navigating along this type of pistes, the Departure and Destination points often can be exchanged. 

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Nordic piste type in iOS](@site/static/img/plugins/ski-maps/ios_nordic_piste.png) ![Nordic piste type in Android](@site/static/img/plugins/ski-maps/and_nordic_piste_type.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Nordic piste type in iOS](@site/static/img/plugins/ski-maps/ios_nordic_piste.png)

</TabItem>

<TabItem value="android" label="Android">

![Nordic piste type in Android](@site/static/img/plugins/ski-maps/and_nordic_piste_type.png)

</TabItem>

</Tabs>

&nbsp;&nbsp;&nbsp;&nbsp;

**Ski touring piste** is often used by skiers for a nordic ascent and a downhill descent. The difficulty of a ski touring piste is often marked with the respective color. The Ski navigation can build a route along this type of piste, thus allowing you to combine the piste types.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

![Ski touring in iOS](@site/static/img/plugins/ski-maps/ios_skitour.png) ![Ski touring in Android](@site/static/img/plugins/ski-maps/and_skitour1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski touring in iOS](@site/static/img/plugins/ski-maps/ios_skitour.png)

</TabItem>

<TabItem value="android" label="Android">

![Ski touring in Android](@site/static/img/plugins/ski-maps/and_skitour1.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

**Other** piste types, like: Hiking piste, Sleigh and sled piste can, or cannot be used for the Ski navigation, however, they may be applicable for the On foot navigation, or other. 


&nbsp;&nbsp;&nbsp;&nbsp;

### Piste grooming

Grooming is performed by special vehicles and ensure the piste is ready for the respective type of activities: classic skiing, skating, other. The same piste can be groomed differently on different segments. If the pistes outside the ski resort boundaries are pictured being groomed, it is a good sign for those going out for skiing.  

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

To check out the map on whether a piste is subject to grooming, it is needed to enable the respective option in the **Details** list opened from the [Configure map](../map/configure-map-menu.md) menu. And the map will show groomed pistes, as exemplified on the figures below. The left-hand one shows no grooming, while the right-hand one differentiates pistes by grooming conditions. 

![No grooming in iOS](@site/static/img/plugins/ski-maps/ios_no_grooming.png) ![Grooming displayed in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

To check out the map on whether a piste is subject to grooming, use the **<Translate ios="true" ids="rendering_attr_pisteGrooming_name"/>** option. It makes the map show which pistes are groomed. To enable the option, select the profile and open the **<Translate ios="true" ids="rendering_category_details"/>** list, as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,map_settings_style,rendering_category_details,rendering_attr_pisteGrooming_name"/> 

![Enable grooming in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Grooming displayed in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)


</TabItem>

<TabItem value="android" label="Android">

To check out the map on whether a piste is subject to grooming, use the **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** option. It makes the map show which pistes are groomed. To enable the option, select the profile and open the **<Translate android="true" ids="rendering_category_details"/>** list, as follows: 

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>

![Enable grooming in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Grooming displayed in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

</Tabs>


&nbsp;&nbsp;&nbsp;&nbsp;

### Ski slope routes

With the Skiing profile, the Ski navigation and the [Winter and ski map style](../map/vector-maps.md#winter-and-ski) enabled, the [Ski slopes](../map/vector-maps.md#routes) routes show all types of pistes that the Ski navigation can use to build navigation routes along. Such Ski slopes routes, if enabled, are outlined with the violet color mostly outside ski resort boundaries.

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The **Routes** panel in the [Configure map](../map/configure-map-menu.md) menu, opened for a specific profile, shows the **Ski slopes** routes among other available options in the app. To view the Ski slopes routes, enable the respective option. 

![Enabling routes in iOS](@site/static/img/plugins/ski-maps/ios_enable_routes.png) ![Routes enabled in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

To view what piste outside the ski resort is possible to navigate along, enable the **<Translate ios="true" ids="rendering_attr_pisteRoutes_name"/>** option in the **<Translate ios="true" ids="rendering_category_routes"/>** list, opened for the required profile as follows: 

**<Translate ios="true" ids="ios_button_seq"/>:** <Translate ios="true" ids="menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>

![Routes disabled in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes enabled in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

<TabItem value="android" label="Android">

To view what piste outside the ski resort is possible to navigate along, enable the **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** option in the **<Translate android="true" ids="rendering_category_routes"/>** list, opened for the required profile as follows:

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>

![Routes disabled in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes enabled in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png) 

</TabItem>

</Tabs>




&nbsp;&nbsp;&nbsp;&nbsp;

### Night and lighting

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

The **Winter and ski** style can be used with the [**Night**](../map/vector-maps.md#map-mode) mode. It is an obvious choice for someone who prefers dark colors, and/or it is getting dark at night, as well as for those who does some night skiing. Together with the Night mode, OsmAnd Ski Maps can show which pistes has [lighting](../map/vector-maps.md#details). 

Both options are provided with the [Configure map](../map/configure-map-menu.md) menu. To enable the Night mode, look for the respective option within the **Map mode** section of settings. To make the map show which pistes are lit up at night, enable the respective option in the **Details** section of settings. 

![No lighting in iOS](@site/static/img/plugins/ski-maps/ios_no_lighting.png) ![Night and lighting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

The **Night** mode and **Street lighting** can help during night skiing. Both options are available within the [Configure map](../map/configure-map-menu.md) menu opened for the needed profile.  

To enable the **Night** mode, select the respective option from the following list:

<Translate ios="true" ids="menu,configure_map,map_settings_style,map_mode"/>

To enable the **Street lighting**, toggle the following option:

<Translate ios="true" ids="menu,configure_map,res_details,rendering_attr_streetLighting_name"/>

![Enabling Night mode and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Night and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

<TabItem value="android" label="Android">

The **Night** mode and **Street lighting** can help during night skiing. Both options are available within the [Configure map](../map/configure-map-menu.md) menu opened for the needed profile.  

To enable the **Night** mode, select the respective option from the following list: 

<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>

To enable the **Street lighting**, toggle the following option: 

<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>

![Enable Night mode and Lighting in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Night and lighting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

</Tabs>



&nbsp;&nbsp;&nbsp;&nbsp;

### Map legend

For any reference, use the [Ski map legend](../../user/map-legend/ski-map.md). It helps to be certain of the types of piste displayed on the map, as well as the types of aerial ways and other characteristics that can be read from the map.  


&nbsp;&nbsp;&nbsp;&nbsp;

### Map data details

OsmAnd Ski Map is built as one of the rendering styles that determine what objects to show on the map and the objects' appearance. All rendering styles are described within an XML file. For the rules that govern the internal structure of the XML file, refer to the [Rendering documentation](../../technical/osmand-file-formats/osmand-rendering-style.md).

For the details on what data OsmAnd Ski Map shows, refer to the [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) file.


&nbsp;&nbsp;&nbsp;&nbsp;

### Remove Ski

<Tabs groupId="operating-systems">

<TabItem value="def" label="Default" default>

Whenever removing pistes and winter colors from the map is preferable, and/or the ski season is over, do any of the following: 

- uncheck the [Winter and ski style](../map/vector-maps.md) for the needed profile, and/or

- disable the Skiing [profile](../personal/profiles.md). 

</TabItem>

<TabItem value="ios" label="iOS">

To remove the **Winter and ski** style, uncheck the option for the needed profile, as follows:

<Translate ios="true" ids="menu,configure_map,map_settings_type,map_settings_offline,winter_and_ski_renderer"/>

![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter.png) 

</TabItem>

<TabItem value="android" label="Android">

To remove the **Winter and ski** style, uncheck the option for the needed profile, as follows:

<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>

![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles.png) 

</TabItem>

</Tabs>

>**NOTE**: Disabling the Skiing profile is also an option to consider, if the Winter and ski style gets disabled together with the profile. 
