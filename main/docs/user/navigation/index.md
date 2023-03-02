---
sidebar_position: 4
title: Navigation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Documentation of Navigation section

OsmAnd Navigation features help you get to your destination by displaying routes, offering turn-by-turn directions, and additional voice prompts.  
List of articles:

- [Routing types (Profiles)](./routing/) - Routing type determines how the route will be calculated.  
- [Navigation by route](./route-navigation.md).
- [Navigation by track](./gpx-navigation.md).
- [Markers navigation](./markers-navigation.md) - Straight navigation to your marker.
- [Voice navigation](./voice-navigation.md).
- [Android Auto / CarPlay](./auto-car.md) - Using a vehicle media screen for navigation by OsmAnd.
- [Route line appearance](./route-line-appearance.md).


## Common settings

This section describes the general settings available for all types of navigation in OsmAnd.

### Navigation settings

You can adjust the navigation settings according to your needs.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>*

Settings of Route parameters for Navigation profile you can find [here](../personal/profiles.md#route-parameters).

![Navigation settings Android](@site/static/img/navigation/route/navigation_options_menu_android.png) ![Navigation  Android](@site/static/img/navigation/route/navigation_options_menu_android_2.png)

- &nbsp;_<Translate android="true" ids="shared_string_sound"/>_ - allows to switch on/off navigation prompts and to open [Voice prompts](../navigation/voice-navigation.md) menu.
- &nbsp;_<Translate android="true" ids="routing_attr_driving_style_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose driving style for bicycle navigation type: _<Translate android="true" ids="routing_attr_prefer_unpaved_name"/>, <Translate android="true" ids="routing_attr_driving_style_safety_name"/>, <Translate android="true" ids="routing_attr_driving_style_balance_name"/>, <Translate android="true" ids="routing_attr_driving_style_speed_name"/>_.
- &nbsp;_<Translate android="true" ids="routing_attr_height_obstacles_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows [to avoid strong uphills](../personal/profiles.md#route-parameters): _<Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>_.
- &nbsp;_<Translate android="true" ids="routing_attr_allow_motorway_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to avoid or prefer motorways.
- &nbsp;_<Translate android="true" ids="impassable_road"/>_ - allows to select a road you want [to avoid during navigation](../personal/profiles.md#route-parameters), either on the map.
- &nbsp;<Translate android="true" ids="show_along_the_route"/> - allows to shows [POI, My Favourites](../widgets/nav-widgets.md#approach-poisfavorites), [Traffic warnings](../widgets/nav-widgets.md#alert-widget) along the route.
- &nbsp;_<Translate android="true" ids="follow_track"/>_ - allows to choose a track for [navigation by it](../navigation/gpx-navigation.md).
- &nbsp;_<Translate android="true" ids="routing_attr_allow_private_name"/>_ - allows to navigate to private zone.
- &nbsp;_<Translate android="true" ids="routing_attr_short_way_name"/>_ - calculates navigation by fuel-efficient algorithm.
- &nbsp;_<Translate android="true" ids="temporary_conditional_routing"/>_ - allows to consider temporary limitations.
- &nbsp;_<Translate android="true" ids="routing_settings_2"/>_ - opens [Navigation settings](../personal/profiles.md#navigation-settings) of app profile.
- &nbsp;_<Translate android="true" ids="customize_route_line"/>_ - opens menu of [Route line customization](../navigation/route-navigation.md#route-line-appearance).
- &nbsp;_<Translate android="true" ids="simulate_navigation"/>_ - allows [to simulate your navigation](../navigation/route-navigation.md#simulate-navigation).

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,routing_settings,shared_string_settings"/>*  

![Navigation settings iOS](@site/static/img/navigation/route/settings_navigation_ios_1.png) ![Navigation settings iOS](@site/static/img/navigation/route/settings_navigation_ios_2.png)  

- &nbsp;_<Translate ios="true" ids="shared_string_sound"/>_ - allows to switch on/off navigation prompts and to open [Voice prompts](../navigation/voice-navigation.md) menu.

**Route parameters:**

Settings of Route parameters for Navigation profile you can find [here](../personal/profiles.md#route-parameters).

- &nbsp;<Translate ios="true" ids="impassable_road"/> - allows to select a road you want to avoid during navigation, either on the map.
- &nbsp;_<Translate ios="true" ids="routing_attr_driving_style_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose [driving style](../personal/profiles.md#route-parameters) for bicycle navigation type: _<Translate ios="true" ids="routing_attr_prefer_unpaved_name"/>, <Translate ios="true" ids="routing_attr_driving_style_safety_name"/>, <Translate ios="true" ids="routing_attr_driving_style_balance_name"/>, <Translate ios="true" ids="routing_attr_driving_style_speed_name"/>_.
- &nbsp;_<Translate ios="true" ids="routing_attr_allow_motorway_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows [to avoid or prefer motorways](../personal/profiles.md#route-parameters).
- &nbsp;_<Translate ios="true" ids="preferred_terrain"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose [routes with a hilly relief profile](../personal/profiles.md#route-parameters) for bicycle navigation type: _<Translate ios="true" ids="shared_string_any"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>_.
- &nbsp;_<Translate ios="true" ids="routing_attr_short_way_name"/>_ - calculates navigation by fuel-efficient algorithm.
- &nbsp;_<Translate ios="true" ids="routing_attr_prefer_unpaved_name"/>_ - allows to prefer unpaved over paved roads for routing.
- &nbsp;_Prefer hiking routes_ - allows to avoid certain routes and prefer celected routes.
- &nbsp;_Prefer tactile paving_ - allows to avoid road types and prefer tactile paving.
- &nbsp;_<Translate ios="true" ids="routing_attr_allow_private_name"/>_ - allows to navigate to private zone.
- &nbsp;_Goods vehicles restrictions_ - consider access permissions for light goods vehicles (goods).
- &nbsp;_<Translate ios="true" ids="consider_limitations_param"/>_ - allows to consider temporary limitations.

**Advanced:**
- &nbsp;_<Translate ios="true" ids="follow_track"/>_ - allows to choose a track for [navigation by it](../navigation/gpx-navigation.md).
- &nbsp;_<Translate ios="true" ids="routing_settings_2"/>_ - opens [Navigation settings](../personal/profiles.md#navigation-settings) of app profile.
- &nbsp;_<Translate ios="true" ids="customize_route_line"/>_ - opens menu of [Route line customization](../navigation/route-navigation.md#route-line-appearance).
- &nbsp;_<Translate ios="true" ids="simulate_navigation"/>_ - allows [to simulate your navigation](../navigation/route-navigation.md#simulate-navigation).  

</TabItem>

</Tabs>


### Route Details

In the OsmAnd app, you can find detailed information about the whole route, analyze it on the map, add or delete information on route segments, print the route plan, save the route and share it.

There are three ways to access the Route Details menu:  
1. Go to the main *Menu → Navigation*, set the route, and press the Details button.
2. Tap the Navigation icon on the map screen, set the route, and tap the Details button.
3. Go to the My Places menu, tap any available track in the list *Menu → My Places → Tracks*, select the Navigation icon in the track context menu in the Overview, and tap Details.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|  |
|------------|
| [Main information](../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_main-info.png) |
| [Analyse](../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_analiz.png) |
| The features with [map legend](../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png) |
| Turn-by-turn information - You can view the details of separate sections of the route by tapping the needed one. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png) |
| Print button - You can print a turn-by-turn description of the route with the total distance and estimated travel time, or save it as a pdf. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_print.png) |
| Save as new track button. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_save.png) |
| Share buttons: *Share as GPX file* and *Save to OsmAnd tracks* |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

|  |
|------------|
| [Main information](../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png) |
| [Analyse](../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png) |
| The features with [map legend](../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png) |
| Save as new track button. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_save.png) |
| Export button: *Export as GPX file* or *Share as link* |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png) |

</TabItem>

</Tabs>

:::info
**Share link**.  
Each link consists of parts containing specific information. For example:  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of navigation, which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.
:::

:::note
The display of some details depends on the availability of map section information, GPS data, subscriptions, or a profile setting.
:::  

#### Select engine type

If you have selected the engine type in the [vehicle parameters](../personal/profiles/#vehicle-parameters), the CO2 footprint data will be displayed above the graph.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,routing_settings"/>*

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios-2.png)

</TabItem>

</Tabs>


### Simulate navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate android="true" ids="simulate_navigation"/>"_.

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,simulate_navigation"/>  →  &#x2699_

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android.png) ![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android_2.png)

- &nbsp;_<Translate android="true" ids="simulation_preview_mode_title"/>_ - <Translate android="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_constant_mode_title"/>_ - <Translate android="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_real_mode_title"/>_ - <Translate android="true" ids="simulation_real_mode_desc"/>

When you click on ["Start" button](../navigation/route-navigation.md#how-to-use), your simulation of navigation will start. 

For stop the simulation of navigation you need to click on ["Navigation" button → "Dismiss" button](../navigation/route-navigation.md#how-to-use).  

</TabItem>

<TabItem value="ios" label="iOS">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate ios="true" ids="simulate_navigation"/>"_.

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_settings,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_settings,simulate_navigation"/> → &#8230;|_

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios.png) ![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

- &nbsp;_<Translate ios="true" ids="simulation_preview_mode_title"/>_ - <Translate ios="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_constant_mode_title"/>_ - <Translate ios="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_real_mode_title"/>_ - <Translate ios="true" ids="simulation_real_mode_desc"/>

When you click on ["Start" button](../navigation/route-navigation.md#how-to-use), your simulation of navigation will start. 

For stop the simulation of navigation you need to click on ["Navigation" button → "Cancel" button](../navigation/route-navigation.md#how-to-use).

</TabItem>

</Tabs>
