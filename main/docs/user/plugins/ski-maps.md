---
sidebar_position: 13
title:  Ski Map View
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview {#overview}

OsmAnd Ski Map view plugin shows famous and popular slopes, officially approved ski areas, and trail maps of most ski resorts. [OpenStreetMap](https://www.openstreetmap.org/#map=16/51.5110/0.0550) piste maps are the data source for OsmAnd ski maps. Combined vector maps with raster maps, the OsmAnd ski map is very accurate and will be useful for instructors, climbers, and winter sports enthusiasts.

The OsmAnd ski map is a part of the vector maps and does not require additional downloads. It is disabled by default. The OsmAnd Ski Map is one of the [Map Styles](../map/vector-maps.md) that provides additional features by highlighting some objects and making others less visible.  

Two profiles are shown below: the one on the left is for skiing and the one on the right is for driving. The Skiing profile highlights trails, airways, winter colors, and all map objects useful for navigating the ski area.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Ski maps in Android](@site/static/img/plugins/ski-maps/and_yes_ski.png) ![No Ski maps in Android](@site/static/img/plugins/ski-maps/and_no_ski.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_yes_ski.png) ![No Ski maps in iOS](@site/static/img/plugins/ski-maps/ios_no_ski.png)

</TabItem>

</Tabs>


## Required Setup Parameters {#required-setup-parameters}

The following setting makes the OsmAnd Ski Map appear on the screen:

1. Enable [Ski map view plugin](../plugins/index.md#enable--disable).  
2. Set the [Winter and Ski](#set-winter-and-ski-map-style) map style for the required [profile](../personal/profiles.md).  
3. If needed, [combine maps](#combine-maps).  
  

### Set Winter and Ski Map Style {#set-winter-and-ski-map-style}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,map_widget_renderer,winter_and_ski_renderer"/>*  

![Enable Winter style in Android](@site/static/img/plugins/ski-maps/and_map_styles-2.png) ![Ski maps plugin map style Android](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_settings_type,map_settings_offline,plugin_popup_ski_title"/>*  

![Enable Winter style in iOS](@site/static/img/plugins/ski-maps/ios_map_style_winter-2.png) ![Ski maps plugin map style iOS](@site/static/img/plugins/ski-maps/plugin_ski_maps_style_ios-2.png)

</TabItem>

</Tabs>

Winter and Ski map style highlights trails, ski touring routes, sledding trails and information related to winter and skiing. To display style on the map, you need to make the following settings:

1. Select the required [profile](../personal/profiles.md).  
2. Open [Configure map](../map/configure-map-menu.md).  
3. Scroll down to Map style/Map type, open it, and check the **Winter and Ski**.

:::tip configurations
The Skiing profile is designed for use in combination with the Winter and Ski styles. However, the navigation type for each specific profile can be changed and set individually, so the final configuration of the profile, map style, and navigation completely depends on your settings.
:::


### Combine Maps {#combine-maps}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![No map combination in Android](@site/static/img/plugins/ski-maps/and_no_contour_hillshade.png) ![With map combination in Android](@site/static/img/plugins/ski-maps/and_yes_contour_hillshade.png)

</TabItem>

<TabItem value="ios" label="iOS">

![No map combination in iOS](@site/static/img/plugins/ski-maps/ios_no_contours_hillshade.png) ![With map combination in iOS](@site/static/img/plugins/ski-maps/ios_yes_contours_hillshade.png)

</TabItem>

</Tabs>

The [Vector map](../map/vector-maps.md) with [Winter and Ski map style](../map/vector-maps.md#winter-and-ski) included can be completed with [Contour lines](../plugins/topography.md#show-contour-linesterrain) and [Hillshade](../plugins/topography.md#hillshade-map). Below are two examples. The tracks on the default vector map are shown on the left, and the tracks on the vector map combined with the *Contour Lines* and *Hillshade* raster map are shown on the right. In the second case, the map shows more elevation data to help estimate difficulty, risk, and distance.  


### Disable Ski Map Style {#disable-ski-map-style}

If removing trails and winter colors from the map is preferred, or the ski season is over, do one of the following:

- Uncheck the [Winter and Ski](#set-winter-and-ski-map-style) map style for the required profile.  
- Change [Skiing profile](../personal/profiles.md) to any other profile.
- Disable [Ski map view plugin](../plugins/index.md#enable--disable).


:::info uninstall plugin
The Ski Map Viewer plugin is a separate application, and disabling its display does not remove it. If you need to uninstall it, go to the Android settings using *Open Settings* in the plugin menu.  
:::


## Skiing Profile {#skiing-profile}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Nautical depth contours in Android](@site/static/img/plugins/ski-maps/and_skiing_profile.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,app_profiles"/>*

![Depth contours in iOS](@site/static/img/plugins/ski-maps/ios_skiing_profile.png)

</TabItem>

</Tabs>

Winter and Ski map styles can be enabled in any profile. But it is most valuable in the [Skiing profile](../personal/profiles.md), where it is set by default. The Skiing profile is very comfortable for the [Skiing navigation](../navigation/routing/ski-routing.md).


## Ski Map Style {#ski-map-style}

Use the [Ski map legend](../../user/map-legend/ski-map.md) for any reference. It helps to identify the types of pistes on the map, as well as the types of airways and other characteristics that can be read from the map.

By reading the map, you can find out the details that are important to you, such as the difficulty of a particular trail, the type of trail, whether grooming is done, and whether the trail is lit at night.

The options described here are available in the [Skiing navigation](../navigation/setup/route-navigation.md). The **Skiing navigation** sets the individual route options, which apply only to skiing.


:::info rendering style
OsmAnd Ski Map is built as one of the rendering styles, that determines which objects to show on the map and the appearance of objects. All rendering styles are described in the [Rendering.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/rendering_styles/skimap.render.xml) file. For the rules that define the internal structure of the XML file, see the [Rendering documentation](../../technical/osmand-file-formats/osmand-rendering-style.md).
:::


### Pistes by Difficulty {#pistes-by-difficulty}

| Color | Description |
| --- | --- |
| ![Beginner piste](@site/static/img/plugins/ski-maps/1c_green_1.png) | Green - Beginner piste |
| ![ Easy hills](@site/static/img/plugins/ski-maps/2c_blue_1.png) | Blue - Easy hills |
| ![Intermediate slopes](@site/static/img/plugins/ski-maps/3c_red_1.png) | Red - Intermediate slopes |
| ![Advanced difficulty](@site/static/img/plugins/ski-maps/4c_black_1.png) | Gray - Slopes of advanced difficulty |
| ![Expert difficulty](@site/static/img/plugins/ski-maps/5c_yellow_1.png) | Yellow - Slopes of expert difficulty |

The difficulty of traces is usually indicated by specific colors. The colors may be different in different countries and resorts. Below are some practical guidelines.

:::tip guidance
For more specific guidance for each trail difficulty type, see the [OSM piste difficulty reference](https://wiki.openstreetmap.org/wiki/Key:piste:difficulty) or any other source that also considers slopes, obstacles, and hazards.  
:::


### Piste by Types {#piste-by-types}

Pistes differ by type. A type represents different characteristics for a piste to meet the requirements of different winter-related activities: alpine skiing, classic skating, snowboarding, sled riding, backcountry skiing, ski touring, mogul skiing, night skiing, etc. Understanding the [type of the piste](https://wiki.openstreetmap.org/wiki/Key:piste:type) on the map helps to build an optimal navigation route.

- **Downhill/alpine skiing piste.**  
Used for Ski navigation. This [piste type](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Ddownhill) has direction and difficulty, and most often it is surrounded by the boundaries of the ski resort. When a downhill piste is selected for Ski navigation, the direction of the piste is taken into consideration. If the Departure and the Destination points are established opposite to the direction of the piste, the navigation goes along the nearest aerial way.

- **Nordic/backcountry skiing piste.**  
Also used for Ski navigation. This [piste type](https://wiki.openstreetmap.org/wiki/Tag:piste:type%3Dnordic) has no difficulty, may or may not have a direction, and most often goes beyond the boundaries of the ski resort. When navigating along this type of pistes, the Departure and Destination points often can be switched.

- **Ski touring piste.**  
Often used by skiers for a Nordic ascent and a downhill descent. The difficulty of a ski touring piste is often marked with the respective color. The Ski navigation can build a route along this type of piste, which allows you to combine the piste types.

- **Other skiing piste.**  
Piste types such as *Hiking Trails* or *Sledging Trails* can be used for skiing or hiking profiles.


### Grooming Trails {#grooming-trails}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,map_widget_map_rendering,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Enable grooming in Android](@site/static/img/plugins/ski-maps/and_enable_grooming.png) ![Grooming displayed in Android](@site/static/img/plugins/ski-maps/and_yes_grooming.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,map_widget_renderer,rendering_category_details,rendering_attr_pisteGrooming_name"/>*

![Enable grooming in iOS](@site/static/img/plugins/ski-maps/ios_details_grooming.png) ![Grooming displayed in iOS](@site/static/img/plugins/ski-maps/ios_grooming_enabled.png)

</TabItem>

</Tabs>

To check on the map whether a particular piste is groomed, you need to enable **<Translate android="true" ids="rendering_attr_pisteGrooming_name"/>** the option in the **<Translate android="true" ids="rendering_category_details"/>** list opened from the [Configure map](../map/configure-map-menu.md) menu.  
Special machines groom the tracks to prepare them for the appropriate activity, such as classic skating, ice skating, and others. The same piste can be groomed differently in different areas.

### Ski Slope Routes {#ski-slope-routes}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes disabled in Android](@site/static/img/plugins/ski-maps/and_no_routes.png) ![Routes enabled in Android](@site/static/img/plugins/ski-maps/and_yes_routes.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,configure_map,rendering_category_routes,rendering_attr_pisteRoutes_name"/>*

![Routes disabled in iOS](@site/static/img/plugins/ski-maps/ios_no_routes.png) ![Routes enabled in iOS](@site/static/img/plugins/ski-maps/ios_yes_routes.png)

</TabItem>

</Tabs>

To find out which pistes outside the ski resort you can navigate, you need to enable **<Translate android="true" ids="rendering_attr_pisteRoutes_name"/>** option in the **<Translate android="true" ids="rendering_category_routes"/>** list, opened from the [Configure map](../map/configure-map-menu.md) menu.  

With the Skiing profile, the ski navigation and the [Winter and Ski map style](../map/vector-maps.md#winter-and-ski) enabled, the [Ski slopes](../map/vector-maps.md#routes) routes show all types of pistes that the Ski navigation can use to build navigation routes along. Such ski slope routes, if enabled, are outlined with the violet color mostly outside ski resort boundaries.


### Night and Lighting {#night-and-lighting}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Enable Night mode and Lighting in Android](@site/static/img/plugins/ski-maps/and_night_and_lighting1.png) ![Night and lighting in Android](@site/static/img/plugins/ski-maps/and_yes_lighting.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Enabling Night mode and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_night_lighting1.png) ![Night and Lighting in iOS](@site/static/img/plugins/ski-maps/ios_yes_lighting.png)

</TabItem>

</Tabs>

**Winter and ski** style can be used with the [Night or Sunrise/sunset mode](../map/vector-maps.md#map-mode). A comfortable choice for those who prefer dark colors, or darkening the screen at night, as well as for those who practice night skiing. Together with the Night mode, OsmAnd Ski Maps also can show which pistes have lighting with the [Street Lighting](../map/vector-maps.md#details) option.  

Both options are in the [Configure map](../map/configure-map-menu.md) menu.  

- To enable the ***Night mode*** option, scroll down the list:  
*<Translate android="true" ids="shared_string_menu,configure_map,map_mode"/>*  

- To enable the ***Street Lighting*** option, open **<Translate android="true" ids="rendering_category_details"/>** list and switch on option:  
*<Translate android="true" ids="shared_string_menu,configure_map,rendering_category_details,rendering_attr_streetLighting_name"/>*


## Related Articles {#related-articles}

- [Interact with Map](../../user/map/interact-with-map.md)
- [Global Settings](../../user/personal/global-settings.md)
- [Vector Maps (Map Styles)](../../user/map/vector-maps.md)

> *Last updated: December 2024*
