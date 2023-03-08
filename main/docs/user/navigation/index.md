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
- Route line appearance.


## Navigation settings

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


## Setting details

In this section, you can read about all the navigation settings (routing, vehicle, navigation parameters, voice prompts, and how the map looks while moving) that can be set for a profile.  

:::info
There are no navigation settings in *Browse map* profile.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>* 

![Profiles Navigation Settings Android](@site/static/img/personal/profiles/profile_navigation_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determines how routes are calculated. For example, your bicycle profile has a Cycling navigation type, which set the routing rules. You can import these roules (as routing.xml file) in OsmAnd. More about routing you can read on our [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) page.&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controls which parameters will be used during routing and which parameters will be shown on the device screen. During navigation, you can change some of these parameters in [Navigation Options](../navigation/route-navigation.md#navigation-options).  

Below, you can find the list of possible route options.  

### Navigation Type

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|**<Translate android="true" ids="nav_type_hint"/>:**| <Translate android="true" ids="select_nav_profile_dialog_message"/> |     |
| <Translate android="true" ids="shared_string_offline"/> |  Offline routing uses sources of the device and calculation the route by using data of OsmAnd offline maps.  |  Navigation types ([OsmAnd routing](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)) by default: [<Translate android="true" ids="app_mode_boat"/>](../navigation/routing/boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="routing_profile_direct_to"/>](../navigation/routing/boat-navigation.md#direct-to-point), [<Translate android="true" ids="rendering_value_car_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="app_mode_public_transport"/>](../map/public-transport.md), [<Translate android="true" ids="routing_profile_ski"/>](../plugins/ski-maps.md), [<Translate android="true" ids="routing_profile_straightline"/>](../navigation/routing/boat-navigation.md#straight-line), [<Translate android="true" ids="horseback_riding"/>](../navigation/route-navigation.md).            |
| <Translate android="true" ids="shared_string_online"/> |  Online routing builds the route servers' resources online by the Internet connection. |   List of online routing providers. Here you can add an online routing engine: ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX.   |
| <Translate android="true" ids="routing_profile_broutrer"/> |  [Offline third-party routing](https://brouter.de/)  |   The full description read [here](../navigation/routing/brouter.md)   |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|**<Translate ios="true" ids="nav_type_title"/>**| choose your Navigation type which controls how routes are calcualted.  | Navigation types ([OsmAnd routing](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)) by default: [<Translate ios="true" ids="app_mode_boat"/>](../navigation/routing/boat-navigation.md#boat), [<Translate ios="true" ids="m_style_bicycle"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="nav_type_direct_to"/>](../navigation/routing/boat-navigation.md#direct-to-point), [<Translate ios="true" ids="m_style_car"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="m_style_pulic_transport"/>](../map/public-transport.md), [<Translate ios="true" ids="nav_type_ski"/>](../plugins/ski-maps.md), [<Translate ios="true" ids="nav_type_straight_line"/>](../navigation/routing/boat-navigation.md#straight-line). |

</TabItem>

</Tabs>


### Route parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/> → Route parameters*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="route_parameters"/>** |  Allows you to set routing for all cases and show additional information about roads.   |              |
| "<Translate android="true" ids="fast_route_mode"/>" |  <Translate android="true" ids="fast_route_mode_descr"/>    |              |
| "<Translate android="true" ids="routing_attr_driving_style_name"/>"   |  Select a driving target to get a shorter, faster, safer, or unpaved route. | "<Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>": prefer unpaved over paved roads for routing. <br />  "<Translate android="true" ids="routing_attr_driving_style_safety_name"/>": prefer safer roads for routing. <br /> "<Translate android="true" ids="routing_attr_driving_style_balance_name"/>": prefer faster way for routing. <br />  "<Translate android="true" ids="routing_attr_driving_style_speed_name"/>": prefer shorter way for routing. <br />     |
| "<Translate android="true" ids="impassable_road"/>" |  Avoid certain routes and road types for routing:    |  Each navigation type has its own set of avoiding.  |
|                 |  "<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>"    |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_stairs_name"/>"    |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_borders_name"/>"    |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_footways_name"/>"     |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>"    |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_sett_name"/>"|              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_toll_name"/>"|              |
|                 |   "<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>"|               |
|                 |  "<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_motorway_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_ice_roads_fords_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_train_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_subway_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_ferries_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_tram_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_bus_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_share_taxi_name"/>" |              |
|                 |  "<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>" | "<Translate android="true" ids="routing_attr_avoid_4wd_only_description"/>"             |
| "<Translate android="true" ids="prefer_in_routing_title"/>" |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/>  |    |
| "<Translate android="true" ids="transport_hazmat_title"/>" |  <Translate android="true" ids="transport_hazmat_no_desc"/>  | Truck   |
| "<Translate android="true" ids="routing_attr_goods_restrictions_name"/>" |  <Translate android="true" ids="routing_attr_goods_restrictions_description"/>  | Truck   |
| "<Translate android="true" ids="routing_attr_short_way_name"/>" |  <Translate android="true" ids="routing_attr_short_way_description"/>  |    |
| "<Translate android="true" ids="routing_attr_allow_streams_name"/>" |  Allows streams and drains for boat navigation type.  | Boat navigation type |
| "<Translate android="true" ids="routing_attr_allow_intermittent_name"/>" |  Allows intermittent water ways for boat navigation type.  | Boat navigation type    |
| "<Translate android="true" ids="routing_attr_max_num_changes_name"/>" |  Specify upper limit of changes of for public transport.  | Public transport navigation type    |
| "<Translate android="true" ids="routing_attr_allow_motorway_name"/>" |  <Translate android="true" ids="routing_attr_allow_motorway_description"/>  | Cycling |
| "<Translate android="true" ids="routing_attr_allow_private_name"/>" |  <Translate android="true" ids="routing_attr_allow_private_description"/>  |    |
| "<Translate android="true" ids="routing_attr_allow_private_for_truck_name"/>" |  <Translate android="true" ids="routing_attr_allow_private_for_truck_description"/>  | Track    |
| "<Translate android="true" ids="routing_attr_height_obstacles_name"/>" |  Allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>"  | Routing could avoid strong uphills.    |
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>"  | Routing could avoid strong uphills.    |
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>"  | Routing could avoid strong uphills.    |  
| "<Translate android="true" ids="temporary_conditional_routing"/>" |  <Translate android="true" ids="temporary_conditional_routing_descr"/>. Data from OpenStreetMap. |    |
| **_<Translate android="true" ids="recalculate_route"/>_** | Allows to recalculate the route by the next cases:    |    |
|   | "<Translate android="true" ids="route_recalculation_dist_title"/>"    |  <Translate android="true" ids="recalculate_route_in_deviation"/>. <Translate android="true" ids="select_distance_route_will_recalc"/>  |
|   | "<Translate android="true" ids="in_case_of_reverse_direction"/>"   |  The route will be recalculated if the direction is changed to reverse. |
| **_<Translate android="true" ids="development"/>_** | Using live updates and the initial part for calculation the route    |    |
|   | "<Translate android="true" ids="use_live_routing"/>"    |  Enable navigation for [OsmAnd Live changes](../personal/maps.md#osmand-live).  |
|   | "<Translate android="true" ids="use_fast_recalculation"/>"   |  <Translate android="true" ids="use_fast_recalculation_desc"/> |
|   | "<Translate android="true" ids="use_two_phase_routing"/>"   |  <Translate android="true" ids="complex_routing_descr"/> |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate ios="true" ids="route_parameters"/>** |  Allows setting routing for any cases and showing additional info about roads.   |              |
| "<Translate ios="true" ids="recalculate_route"/>" |  <Translate ios="true" ids="route_recalculation_descr"/>    |              |
| "<Translate ios="true" ids="recalculate_wrong_dir"/>"  |  The route will be recalculated if you are moving to the start point.   |              |
| "<Translate ios="true" ids="routing_attr_driving_style_name"/>"   |  Select driving puprose to get shorter, faster, safer or unpaved route. | "<Translate ios="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>": prefer unpaved over paved roads for routing. <br />  "<Translate ios="true" ids="routing_attr_driving_style_safety_name"/>": prefer safer roads for routing. <br /> "<Translate ios="true" ids="routing_attr_driving_style_balance_name"/>": prefer faster way for routing. <br />  "<Translate ios="true" ids="routing_attr_driving_style_speed_name"/>": prefer shorter way for routing. <br />     |
| "<Translate ios="true" ids="impassable_road"/>" |  Avoid certain routes and road types for routing:    |   Navigation types and notes           |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_unpaved_name"/>"    |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_stairs_name"/>"    |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_borders_name"/>"    |              |
|                 |  "Avoid footways"    |              |
|                 |  "Avoid tunnels"    |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_sett_name"/>"|              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_toll_name"/>"|              |
|                 |  "Avoid low emissions zones"    |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_shuttle_train_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_motorway_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_ice_roads_fords_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_train_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_subway_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_ferries_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_tram_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_bus_name"/>" |              |
|                 |  "<Translate ios="true" ids="routing_attr_avoid_share_taxi_name"/>" |              |
|                 |  Avoid 4WD roads | Avoid roads only suitable for 4WD only vehicles  |
| Goods vehicles restrictions |  Consider access permissions for light goods vehicles (goods)   |   Driving routing |
| <Translate ios="true" ids="routing_attr_hazmat_category_name"/> |  <Translate ios="true" ids="transport_hazmat_no_desc"/>  |   Truck |
| "<Translate ios="true" ids="preferred_terrain"/>" |  allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |
|   | "<Translate ios="true" ids="shared_string_any"/>"  | <Translate ios="true" ids="route_preferred_terrain_any"/>    |
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>"  | <Translate ios="true" ids="route_preferred_terrain_flat"/>    |
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>"  | <Translate ios="true" ids="route_preferred_terrain_less_hilly"/>    |
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>"  | <Translate ios="true" ids="route_preferred_terrain_hilly"/>  |  
| "<Translate ios="true" ids="routing_attr_height_obstacles_name"/>" |  Using elevation fluctuation for routing.  |    |
| "<Translate ios="true" ids="routing_attr_allow_motorway_name"/>" |  using Motorways for routing  |   Cycling routing |
| "<Translate ios="true" ids="prefer_in_routing_title"/>" | <Translate ios="true" ids="avoid_routes_and_road"/>    | Navigation type - On foot  |
|                 |  "Prefer hiking routes"    |  using [hiking routes](../map/vector-maps.md#routes) for routing.           |
|                 |  "Prefer tactile paving"    |  using tactile paving road types for routing.            |
| "<Translate ios="true" ids="routing_attr_allow_private_name"/>" |  Ignore the Private Access restriction for routing  |    |
| "<Translate ios="true" ids="routing_attr_allow_private_for_truck_name"/>" |  Allow access to private areas for trucks  |  Truck  |
| "<Translate ios="true" ids="consider_limitations_param"/>" |  Using temporaty limitations for routing from OpenStreetMap data  |    |
| "<Translate ios="true" ids="road_speeds"/>" |  Setting the minimum and the maximum travel speed for all roads in the route.  |    |

</TabItem>

</Tabs>


### Screen alerts

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Show or not show notifications on the screen as a widget. Alerts appear at the bottom left during navigation. | [Types of alert widgets](../widgets/nav-widgets.md#alert-widget)   |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate ios="true" ids="screen_alerts"/>** | Show or not show notifications on the screen as a widget.  | [Types of alert widgets](../widgets/nav-widgets.md#alert-widget)   |

</TabItem>

</Tabs>


### Voice prompts

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="voice_announcements"/>** | on/off and settings of [voice guidance](../navigation/voice-navigation.md) during navigation.    |  Configure to announce street names, traffic warnings (forced stops, speed bumps), speed camera warnings, speed limits.  |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate ios="true" ids="voice_announces"/>** | on/off and settings of [voice guidance](../navigation/voice-navigation.md) during navigation.    |  <Translate ios="true" ids="speak_descr"/>  |

</TabItem>

</Tabs>

### Vehicle parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="vehicle_parameters"/>** | List of car parameters that can affect the route.   |   |
|     | **<Translate android="true" ids="default_speed_setting_title"/>**  | - Used as a speed to estimate [arrival time](../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed could not be determined by map data: 1) pedestrian, boat, ski, airplain, ... profiles 2) roads without speed limits (can affect routing) 3) user generated or imported tracks. <br/> - Used to determine how late/early voice announcements should be pronounced - [details](../../technical/algorithms/voice-prompt-triggering.md#base-profile-default-speeds). <br/> - Affects speed formatting [Unit of speed](#general-settings). [For absolute speed](https://github.com/osmandapp/OsmAnd/issues/14338) >= 10 m/s - 1 digit formatting, < 10 m/s - 2 digit.  <br/> - For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. |
|     | <Translate android="true" ids="routing_attr_weight_name"/>   | <Translate android="true" ids="weight_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_height_name"/>  | <Translate android="true" ids="height_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_length_name"/>  | <Translate android="true" ids="lenght_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_width_name"/> | <Translate android="true" ids="width_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_motor_type_name"/>  | <Translate android="true" ids="routing_attr_motor_type_description"/> Available types: *Petrol, Diesel, LPG, CNG, Electric, Hybrid.* |
| **<Translate android="true" ids="customize_route_line"/>** | Specify color and width for the route line during [navigation](../navigation/index.md).   | It's available only with [Pro feature](../purchases/android.md#free-and-paid-features). <ProFeature/> |
|     | <Translate android="true" ids="shared_string_color"/> | Using color by: Map style, Custom, Altitude, Slope, Road type, Surface, Smoothness, Winter and ice roads,Surface firmness.  |
|     | <Translate android="true" ids="shared_string_width"/> | Using width by: Map style, Thin, Medium, Bold, Custom.  |
|     | <Translate android="true" ids="turn_arrows"/> | Select whether turn arrows are indicated on the route line.  |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate ios="true" ids="vehicle_parameters"/>** | List of car parameters that can affect the route.   |   |
|     | **<Translate ios="true" ids="default_speed"/>**  | - Used as a speed to estimate [arrival time](../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed could not be determined by map data: 1) pedestrian, boat, ski, airplain, ... profiles 2) roads without speed limits (can affect routing) 3) user generated or imported tracks. <br/> - Used to determine how late/early voice announcements should be pronounced - [details](../../technical/algorithms/voice-prompt-triggering.md#base-profile-default-speeds). <br/> - Affects speed formatting [Unit of speed](#general-settings). [For absolute speed](https://github.com/osmandapp/OsmAnd/issues/14338) >= 10 m/s - 1 digit formatting, < 10 m/s - 2 digit.  <br/> - For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. |
|     | <Translate ios="true" ids="routing_attr_weight_name"/>   | <Translate ios="true" ids="weight_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_height_name"/>  | <Translate ios="true" ids="height_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_length_name"/>  | <Translate ios="true" ids="lenght_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_width_name"/>   | <Translate ios="true" ids="width_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_motor_type_name"/>  | <Translate ios="true" ids="routing_attr_motor_type_description"/> Available types: *Petrol, Diesel, LPG, CNG, Electric, Hybrid.*  |
| **<Translate ios="true" ids="customize_route_line"/>** | Change color and width for the route line during [navigation](../navigation/index.md).   | It's available only with [Pro feature](../purchases/android.md#free-and-paid-features). <ProFeature/>  |
|     | <Translate ios="true" ids="fav_color"/> | Using color by: Map style, Custom, Altitude, Slope, Road type, Surface, Smoothness, Winter and ice roads,Surface firmness.  |
|     | <Translate ios="true" ids="shared_string_width"/> | Using width by: Map style, Thin, Medium, Bold, Custom.  |
|     | <Translate ios="true" ids="turn_arrows"/> | Control the visibility of the turn arrows on the route line.  |

</TabItem>

</Tabs>


### Customise route line

This option is described in detail in the article by [Route line appearance](../navigation/route-navigation#route-line-appearance)


### Map during navigation

Description of the change in map behavior during navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate android="true" ids="choose_auto_follow_route"/>" |  The time before the map view is synchronized with the current position after moving.  |  Value: <br /> Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| "<Translate android="true" ids="auto_zoom_map"/>"  |  Automatically scale the map according to your speed (as long as the map is in sync with your current position). | Value: <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manually zoom. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom is 200m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom is 100m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom is 50m. |
| "<Translate android="true" ids="snap_to_road"/>"  |  The current position icon will be associated with the current navigation route.   | This option can be turned off, but then all road-related options, such as lane display, will also not be visible during navigation.   |

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>*  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate ios="true" ids="choose_auto_follow_route"/>" |  The time before the map view is synchronized with the current position after moving.   |  Value: <br /> Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec. |
| "<Translate ios="true" ids="auto_zoom_map"/>"  |  Automatically scale the map according to your speed (as long as the map is in sync with your current position).  | Value: <br />  *<Translate ios="true" ids="auto_zoom_none"/>* - manually zoom. <br /> *<Translate ios="true" ids="auto_zoom_farthest"/>* - zoom is 200m. <br /> *<Translate ios="true" ids="auto_zoom_far"/>* - zoom is 100m. <br /> *<Translate ios="true" ids="auto_zoom_close"/>* - zoom is 50m. |
| "<Translate ios="true" ids="snap_to_road"/>"  |  The current position icon will be associated with the current navigation route.  | This option can be turned off, but then all road-related options, such as lane display, will also not be visible during navigation.   |

</TabItem>

</Tabs>


### Animate location change

This setting provides a smooth animation of the "My location" point moving on the map during navigation. Note that the animation takes about 1 second, which creates a slight delay for the "My location" position to display on the map relative to your location.
For Android, this item named [Animate own position](#other) is located in the "Other" section of the General Settings menu.


## General options

This section describes the general options available for all types of navigation in OsmAnd.

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

Simulate navigation function allows users to test and preview a navigation route without actually physically traveling along it. This can be useful for:  
- Planning. You can see how long it may take to complete the entire route or its single segment.
- Familiarization. You can familiarize yourself with the route before you actually go along it. This can be useful in unfamiliar areas, such as a new city or a difficult transport interchange.
- Testing. You can test the OsmAnd navigation system itself to make sure it works correctly and provides accurate instructions.

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
