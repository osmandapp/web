---
sidebar_position: 7
title:  Boat navigation
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

Boat mode for navigation can be enabled together with the [Nautical plugin](../../plugins/nautical-charts.md). You can build your trip on rivers or waterway fairway. You can read more about navigation profiles [here](../../personal/profiles.md).

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png) ![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)


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


### Settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>*  

![Boat Navigation screen options Android](@site/static/img/navigation/boat/boat_navigation_options_android.png)  

- *<Translate android="true" ids="shared_string_sound"/>* - allows to switch off/on voice prompts and to open [voice prompts settings menu](../../personal/profiles.md#navigation-settings).
- *<Translate android="true" ids="impassable_road"/>* - allows to select a road you want to avoid during navigation.
- *<Translate android="true" ids="show_along_the_route"/>* - link
- *<Translate android="true" ids="follow_track"/>* - link
- *<Translate android="true" ids="temporary_conditional_routing"/>* - link
- *<Translate android="true" ids="routing_settings_2"/>* - opens [Navigation settings menu](../../personal/profiles.md#navigation-settings) of your app profile.
- *<Translate android="true" ids="customize_route_line"/>* - [link](../../map/tracks-on-map.md#route-appearance-android).
- *<Translate android="true" ids="simulate_navigation"/>* - allows to simulate your navigation trip.

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,routing_settings,shared_string_settings"/>*  

![Boat Navigation screen options iOS](@site/static/img/navigation/boat/boat_navigation_settings_ios.png)  

- *<Translate android="true" ids="shared_string_sound"/>* - allows to switch off/on voice prompts and to open [voice prompts settings menu](../../personal/profiles.md#navigation-settings).
- *<Translate android="true" ids="impassable_road"/>* - allows to select a road you want to avoid during navigation.
- *<Translate android="true" ids="follow_track"/>* - link
- *<Translate android="true" ids="temporary_conditional_routing"/>* - link
- *<Translate android="true" ids="routing_settings_2"/>* - opens [Navigation settings menu](../../personal/profiles.md#navigation-settings) of your app profile.
- *<Translate android="true" ids="simulate_navigation"/>* - allows to simulate your navigation trip.

</TabItem>

</Tabs>


## Navigation types

In OsmAnd users can choose boat navigation types. It's a need for different use cases. 
[Boat navigation type](../../navigation/routing/#boat) is by default for Boat profile. Advanced users can choose additional two navigation types for boat navigation: [Direct-to-point](#direct-to-point) and [Straight-line](#straight-line).  

### Boat

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

**1.** Next version of navigation type for boat:  **Direct-to-point**. Direct-to-point navigation is a critical and frequently used feature for marine users.  
How to make your navigation profile with your parameters read [here](../../personal/profiles.md).  

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint,routing_profile_direct_to"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title,nav_type_direct_to"/>*

**2.** It is possible to specify the recalculation distance (by default it is OFF for this routing profile). The route will be recalculated if the distance from the route to the current location is more than selected value.

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,route_parameters,route_recalculation_dist_title"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,route_parameters,recalculate_route"/>*  

**3.** Also, you can see a point projection that represents the distance to the end point on the line. The point on the line is a virtual point to show the distance (it is not a projection on the line) but a point that has the same distance as current location to the finish point. So it is easy to measure the progress and it is possible to use measurements tool to get correct distance.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Straight line

The next navigation type is **Straight line**.

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint,routing_profile_straightline"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title,nav_type_straight_line"/>*  

There is also a new setting to specify at which distance of user's location from route to start recalculation.
The route will be recalculated if the distance from the route to the current location is more than selected value.
Next, in case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,route_parameters,route_recalculation_dist_title"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>*
- *<Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,route_parameters,recalculate_route"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>*  

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

:::note
Professional sailors are required to have official maps, but this extension can help you a lot on a small voyage or be a supplement to the official nautical charts.
:::

