---
sidebar_position: 3
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

Boat mode for navigation can be enabled together with [the Nautical plugin](../plugins/nautical-charts). You can build your trip on rivers or waterway fairway. You can read more about navigation profiles [here](../personal/profiles).

![Boat Navigation screen Android](@site/static/img/navigation/boat/boat_navigation_android.png) ![Boat Navigation screen iOS](@site/static/img/navigation/boat/boat_navigation_ios.png)
  
## How to use

Navigation type for Boat navigation is [Boat](../navigation/boat-navigation#boat) by default. This type uses rivers or waterway fairways for building your route. 
For starting naviation user need to click [navigation button](../widgets/map-buttons#directions) on the screen or choose ["Navigation" in the main menu](../start-with/main-menu#features):

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings"/>

<p> </p>

User need to choose start-finish points on a river, for example. 

![Boat Navigation screen points Android](@site/static/img/navigation/boat/boat_navigation_points_android.png) ![Boat Navigation screen points iOS](@site/static/img/navigation/boat/boat_navigation_points_ios.png)

### Details

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,rendering_category_details"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,res_details"/>

<p> </p>

![Boat Navigation screen details Android](@site/static/img/navigation/boat/boat_navigation_details_android.png) ![Boat Navigation screen details iOS](@site/static/img/navigation/boat/boat_navigation_details_ios.png)

buttons:
- &#128438; (Android) - allows to save and print your route like data table.
- <Translate android="true" ids="save_as_new_track"/> (Android) - allows...
- <Translate ios="true" ids="shared_string_export"/> or share - allows...

Graph with altitude info.

Button [Analyse on map](../navigation/route-navigation#details)

<Translate ios="true" ids="routeInfo_steepness_name"/> info.

<Translate android="true" ids="step_by_step"/> instructions (Android)


### Options

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_options"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_options"/>

<p> </p>

![Boat Navigation screen options Android](@site/static/img/navigation/boat/boat_navigation_options_android.png) ![Boat Navigation screen options iOS](@site/static/img/navigation/boat/boat_navigation_options_ios.png)

- &nbsp;<Translate android="true" ids="shared_string_sound"/> - allows to switch off/on voice prompts and to open [voice prompts settings menu](../personal/profiles#navigation-settings).
- &nbsp;<Translate android="true" ids="impassable_road"/> - allows to select a road you want to avoid during navigation.
- &nbsp;<Translate android="true" ids="show_along_the_route"/> (Android) - link
- &nbsp;<Translate android="true" ids="follow_track"/> - link
- &nbsp;<Translate android="true" ids="temporary_conditional_routing"/> - link
- &nbsp;<Translate android="true" ids="routing_settings_2"/> - opens [Navigation settings menu](../personal/profiles#navigation-settings) of your app profile.
- &nbsp;<Translate android="true" ids="customize_route_line"/> (Android) - [link](../map/tracks-on-map#route-appearance-android).
- &nbsp;<Translate android="true" ids="simulate_navigation"/> - allows to simulate your navigation trip.


## Navigation types

In OsmAnd users can choose boat navigation types. It's a need for different use cases. 
[Boat navigation type](../navigation/boat-navigation#boat) is by default for Boat profile. Advanced users can choose additional two navigation types for boat navigation: [Direct-to-point](../navigation/boat-navigation#direct-to-point) and [Straight-line](../navigation/boat-navigation#straight-line).

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title"/>

<p> </p>

### Boat

Boat navigation type (by default for Boat app profiles) uses rivers, waterway fairway for routing. 
User can calculate distance for koyak trip, for example.

![Boat Navigation type Android](@site/static/img/navigation/boat/boat_navigation_type_android.png) ![Boat Navigation type iOS](@site/static/img/navigation/boat/boat_navigation_type_ios.png)


### Direct-to-point

Next version of navigation type for boat:  **Direct-to-point**. Direct-to-point navigation is a critical and frequently used feature for marine users.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint,routing_profile_direct_to"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title,nav_type_direct_to"/>

<p> </p>

How to make your navigation profile with your parameters read [here](../personal/profiles).

It is possible to specify the recalculation distance (by default it is OFF for this routing profile). The route will be recalculated if the distance from the route to the current location is more than selected value.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,route_parameters,route_recalculation_dist_title"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,route_parameters,recalculate_route"/>

<p> </p>

Also, you can see a point projection that represents the distance to the end point on the line. The point on the line is a virtual point to show the distance (it is not a projection on the line) but a point that has the same distance as current location to the finish point. So it is easy to measure the progress and it is possible to use measurements tool to get correct distance.

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

### Straight line

The next navigation type:  **Straight line**.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,nav_type_hint,routing_profile_straightline"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,nav_type_title,nav_type_straight_line"/>

<p> </p>

There is also a new setting to specify at which distance of user's location from route to start recalculation.
The route will be recalculated if the distance from the route to the current location is more than selected value.
Next, in case if you deviate from the route during the navigation, this setting builds the shortest path from your current position to the calculated route with the maximum angle. In other words, if the angle is higher than the one set by the user, OsmAnd calculates the next point of the route to build an additional route segment, so the angle will be valid.

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/>(<Translate android="true" ids="app_mode_boat"/>) → <Translate android="true" ids="routing_settings_2,route_parameters,route_recalculation_dist_title"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>(<Translate ios="true" ids="app_mode_boat"/>) → <Translate ios="true" ids="sett_settings,routing_settings_2,route_parameters,recalculate_route"/> and <Translate android="true" ids="recalc_angle_dialog_title"/>

<p> </p>

![Streaight-line Navigation type Android](@site/static/img/navigation/boat/straight_navigation_type_android.png)

Professional sailors are required to have official maps, as well, but this extension can be of great help to you in a small voyage or be a supplement to the official nautical charts.
