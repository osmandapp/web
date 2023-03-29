---
sidebar_position: 7
title:  Boat routing
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

## Overview

Boat routing can be a valuable tool for anyone who enjoys boating or sailing, regardless of whether you are a water sports enthusiast or a professional sailor..

:::note
Boat routing is usualy used with boat profile (the last one enabled together with the [Nautical plugin](../../plugins/nautical-charts.md)). Boat routing can also be used with other profiles.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)  

</TabItem>

</Tabs> 

In OsmAnd users can choose boat navigation types. It's a need for different use cases. 
[Boat navigation type](../../navigation/routing/#boat) is by default for Boat profile. Advanced users can choose additional two navigation types for boat navigation: [Direct-to-point](#direct-to-point) and [Straight-line](#straight-line).  

:::note
Professional sailors are required to have official maps, but this extension can help you a lot on a small voyage or be a supplement to the official nautical charts.
:::

## Boat profile

Boat navigation type (by default for Boat app profiles) uses rivers, waterway fairway for routing. 
User can calculate distance for koyak trip, for example.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

*<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*   

![Boat Navigation type Android](@site/static/img/navigation/boat/boat_navigation_type_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title"/>*  

![Boat Navigation type iOS](@site/static/img/navigation/boat/boat_navigation_type_ios.png)

</TabItem>

</Tabs> 

### Direct-to-point

Version of navigation type for boat:  **Direct-to-point**. Direct-to-point navigation is a critical and frequently used feature for marine users.  
How to make your navigation profile with your parameters read [here](../../personal/profiles.md).  

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Straight line

The next navigation type is **Straight line**.

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)


## How to use

Navigation type for Boat navigation is *Boat* by default. This type uses rivers or waterway fairways for building your route.  
For starting naviation user need to click [navigation button](../../widgets/map-buttons.md#directions) on the screen or choose ["Navigation" in the main menu](../../start-with/main-menu.md#features).  

User need to choose start-finish points on a river, for example. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*  

![Boat Navigation screen points Android](@site/static/img/navigation/boat/boat_navigation_points_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,routing_settings"/>*

![Boat Navigation screen points iOS](@site/static/img/navigation/boat/boat_navigation_points_ios.png)

</TabItem>

</Tabs> 


### Details

User need to choose start-finish points on a river, for example. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,rendering_category_details"/>*  

![Boat Navigation screen details Android](@site/static/img/navigation/boat/boat_navigation_details_android.png)  

1. Buttons:
- &#128438; - allows to save and print your route like data table.
- <Translate android="true" ids="save_as_new_track"/> - allows to save as new track.
- <Translate ios="true" ids="shared_string_export"/> or share - allows to export or share.
2. Graph with altitude info.
3. Button [Analyse on map](../../navigation/route-navigation.md#details)
4. <Translate ios="true" ids="routeInfo_steepness_name"/> info.
5. <Translate android="true" ids="step_by_step"/> instructions  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="menu,routing_settings,res_details"/>*

![Boat Navigation screen details iOS](@site/static/img/navigation/boat/boat_navigation_details_ios.png)  

1. <Translate ios="true" ids="shared_string_export"/> or share - allows to export or share.
2. Graph with altitude info.
3. Button [Analyse on map](../../navigation/route-navigation.md#details)
4. <Translate ios="true" ids="routeInfo_steepness_name"/> info.

</TabItem>

</Tabs> 

### Route parameters - Boat

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Boat routing settings Android](@site/static/img/navigation/routing/boat_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Boat routing settings iOS](@site/static/img/navigation/routing/boat_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="routing_attr_allow_streams_name"/>* | Allows to use streams and drains for boat navigation. This option may be useful for smaller boats such as canoes, kayaks, rafts, rowboats. |  [Streams](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Dstream) are naturally-forming waterways that is too narrow to be called a river. [Drains](https://wiki.openstreetmap.org/wiki/Tag:waterway%3Ddrain) are artificial waterways, typically lined with concrete or similar, used to carry superfluous water like storm water or grey-discharge.|
| *<Translate android="true" ids="routing_attr_allow_intermittent_name"/>* |  Allows to use intermittent waterways for boat navigation.  | Tag [Intermittent](https://wiki.openstreetmap.org/wiki/Key:intermittent) is used to indicate that a waterway does not permanently contain water.  |

Other routing settings:  
- The routing algorithm can take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](./index.md#avoid-temporary-closures)* option. Note that in some cases, information from OSM can be outdated.  
- In the [Recalculate route section](../route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) should be set according to your boat parameters. They are used to determine whether the waterway can be used for routing.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.
