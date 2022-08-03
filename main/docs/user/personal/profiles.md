---
sidebar_position: 6
title:  Profiles (Settings)
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

Each profile is available for full customization. There are the next profiles by default: _Browse map, Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding_. ```Truck, Motorcycle, Aircraft and Horseback riding profiles are switched off by default. You need to activate these profiles.```

In fact, each profile can become a separate application for the needs of the user. Of course, you can create your own profile with full customization for your needed.

To start setting up an application profile:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile)

<p> </p>

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles"/>

<p> </p>

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>

## Profile configuration

This section contains all the settings related to the appearance, navigation settings, map rendering, configure menu, and screen of a profile.


> `All settings affect the selected application profile only.`



<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_ios.png)

</TabItem>

</Tabs>


### General settings

This section of settings contains settings of the cursor on the map and map view, settings of units & formats of map and profile data, settings of external input devices, and other sensors.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="general_settings_2"/>
<p> </p> 

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,general_settings_2"/>

<p> </p>

</TabItem>

</Tabs>

#### **Appearance**

In this section of the General settings menu, you can set parameters for the cursor on the map and map view for the chosen profile.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profile_gs_appearance_android.png)

- &nbsp;<Translate android="true" ids="choose_osmand_theme"/> - sets a day or night theme for the application. This setting doesn't change ["Map mode"](../map/vector-maps.md#map-mode) parameter.
- &nbsp;<Translate android="true" ids="rotate_map_to_bearing"/> - allows [to set orientation the map view](../map/interact-with-map.md#map-orientation-modes).
- &nbsp;<Translate android="true" ids="always_center_position_on_map"/> - allows to use center or bottom screen position for the cursor (["My location"](../map/interact-with-map.md#my-location--zoom)). In this mode the center of the map will be located slightly below the center of the device. It allows seeing more map information ahead of your movement which is usable in the navigation mode.
- &nbsp;<Translate android="true" ids="map_screen_orientation"/> - sets the screen position for the OsmAnd application: <Translate android="true" ids="map_orientation_portrait"/>, <Translate android="true" ids="map_orientation_landscape"/>, <Translate android="true" ids="map_screen_orientation"/>.
- &nbsp;<Translate android="true" ids="screen_control"/> - opens [the screen control menu](../navigation/route-navigation.md#turn-on-screen), where you can select parameters for your device screen during navigation for keeping device battery consumption.

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profile_gs_appearance_ios.png)

- &nbsp;<Translate ios="true" ids="rotate_map_to_bearing"/> - allows [to set orientation the map view](../map/interact-with-map.md#map-orientation-modes).
- &nbsp;<Translate ios="true" ids="allow_3D_view"/> - enables/disables 2.5D view of the map view. Use ["Gesture"](../map/interact-with-map.md#gestures) or ["My Location button"](../map/interact-with-map.md#my-location--zoom) for 3D view
- &nbsp;<Translate ios="true" ids="always_center_position_on_map"/> - allows to use center or bottom screen position for the cursor (["My location"](../map/interact-with-map.md#my-location--zoom)). In this mode the center of the map will be located slightly below the center of the device. It allows seeing more map information ahead of your movement which is usable in the navigation mode.

</TabItem>

</Tabs>


#### **Units & formats**


In this section you can set parameters of units & formats for chosen application profile.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profile_gs_unitsformats_android.png)

| Parameter | Format | Note   |
|:------------|:---------------|:---------------|
|**<Translate android="true" ids="driving_region"/>**| <Translate android="true" ids="driving_region_automatic"/> | According to the device location |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_uk"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|**<Translate android="true" ids="unit_of_length"/>**| <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 f |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m  |
|          | <Translate android="true" ids="si_mi_yard"/> |  0.62 ml / 1094 ya |
|          | <Translate android="true" ids="si_nm"/> | 0.54 nml |
|**<Translate android="true" ids="coordinates_format"/>**| <Translate android="true" ids="dd_mm_mmmm_format"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Example: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|**<Translate android="true" ids="coordinates_format"/>**| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|**<Translate android="true" ids="default_speed_system"/>**| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_gs_unitsformats_ios.png)

| Parameter | Format | Note |
|:------------|:---------------|:---------------|
|**<Translate ios="true" ids="driving_region"/>**| <Translate ios="true" ids="driving_region_automatic"/> | According to the device location |
|            | <Translate ios="true" ids="driving_region_europe_asia"/>   | <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>  |
|            | <Translate ios="true" ids="driving_region_us"/>   |  <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_mi_feet"/>  |
|            | <Translate ios="true" ids="driving_region_canada"/>   | <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>   |
|            | <Translate ios="true" ids="driving_region_uk"/>   |  <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_mi_feet"/>   |
|            | <Translate ios="true" ids="driving_region_japan"/>   | <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>   |
|            | <Translate ios="true" ids="driving_region_australia"/>   |  <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>  |
|**<Translate ios="true" ids="unit_of_length"/>**| <Translate ios="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate ios="true" ids="si_mi_feet"/> | 0.62 ml / 3281 f |
|          | <Translate ios="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate ios="true" ids="si_mi_yard"/> | 0.62 ml / 1094 ya |
|          | <Translate ios="true" ids="si_nm"/> | 0.54 nml |
|**<Translate ios="true" ids="coords_format"/>**| <Translate ios="true" ids="navigate_point_format_D"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate ios="true" ids="navigate_point_format_DM"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate ios="true" ids="navigate_point_format_DMS"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate ios="true" ids="navigate_point_format_UTM"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate ios="true" ids="utm_description"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate ios="true" ids="navigate_point_format_OLC"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|**<Translate ios="true" ids="angular_units"/>**| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate ios="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|**<Translate ios="true" ids="default_speed_system"/>**| <Translate ios="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate ios="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate ios="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate ios="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate ios="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate ios="true" ids="si_nm_h"/> | 48.59 kn |

</TabItem>

</Tabs>


#### **Other**

Additional settings for profile (like external devices and etc.)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

You can enable/disable buttons and input devices for OsmAnd, on or off animations for navigation mode, use or not fullscreen mode, magnetic sensor, Kalman filter.

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_gs_other_android.png)

- &nbsp;<Translate android="true" ids="use_volume_buttons_as_zoom"/> - allows to use or not volume buttons of a device as [zoom](../map/interact-with-map.md#my-location--zoom).
- &nbsp;[<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) - allows to use or not [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- &nbsp;[<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) - &nbsp;allows to use or not [Magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- &nbsp;<Translate android="true" ids="tap_on_map_to_hide_interface"/> - use or not fullscreen mode of OsmAnd app on the device.
- &nbsp;[<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#disable-all-animations) - allows to switch on/off animation for navigation mode. 
- &nbsp;[<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-device-buttons) - allows adding external input devices for control OsmAnd app by buttons of these devices. External input devices: <Translate android="true" ids="sett_wunderlinq_ext_input"/>, <Translate android="true" ids="sett_generic_ext_input"/>, <Translate android="true" ids="sett_parrot_ext_input"/>.

</TabItem>

<TabItem value="ios" label="iOS">

You can enable/disable buttons and input devices for OsmAnd.

- &nbsp;[<Translate ios="true" ids="sett_ext_input"/>](../map/interact-with-map.md#external-input-device-buttons) - allows adding external input devices for control OsmAnd app by buttons of these devices. External input devices: <Translate ios="true" ids="sett_wunderlinq_ext_input"/>, <Translate ios="true" ids="sett_generic_ext_input"/>.

</TabItem>

</Tabs>

### Navigation settings

In this part, there are all settings for navigation mode of a profile.


> `This part of settings doesn't exist for "Browse map" profile.`


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>
<p> </p>

![Profiles Navigation Settings Android](@site/static/img/personal/profiles/profile_navigation_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,routing_settings_2"/>

<p> </p>

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

#### **Navigation**

In this section you can set [routing and navigation parameters of your profile, map during navigation and vehicle parameters](../navigation/index.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

&nbsp;<Translate android="true" ids="nav_type_hint"/> - governs how routes are calculated. These are rules for routing your profile. It means that your bicycle profile has Cycling navigation type for example. You can import the routing file from any cloud storage app by opening it in OsmAnd. More about [Routing.xml on our Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

&nbsp;<Translate android="true" ids="route_parameters"/> - controls which parameters will be used during routing and which parameters will be showed on the device screen. During navigation you can change some of these parameters in ["Navigation Options"](../navigation/route-navigation.md#navigation-options). Below list of parameters:

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|**<Translate android="true" ids="nav_type_hint"/>:**| <Translate android="true" ids="select_nav_profile_dialog_message"/> |     |
| <Translate android="true" ids="shared_string_offline"/> |  Offline routing uses sources of the device and calculation the route by using data of OsmAnd offline maps.  |  Navigation types ([OsmAnd routing](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)) by default: [<Translate android="true" ids="app_mode_boat"/>](../navigation/boat-navigation.md#boat), [<Translate android="true" ids="rendering_value_bicycle_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="routing_profile_direct_to"/>](../navigation/boat-navigation.md#direct-to-point), [<Translate android="true" ids="rendering_value_car_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="app_mode_public_transport"/>](../map/public-transport.md), [<Translate android="true" ids="routing_profile_ski"/>](../plugins/ski-maps.md), [<Translate android="true" ids="routing_profile_straightline"/>](../navigation/boat-navigation.md#straight-line), [<Translate android="true" ids="horseback_riding"/>](../navigation/route-navigation.md).            |
| <Translate android="true" ids="shared_string_online"/> |  Online routing builds the route servers' resources online by the Internet connection. |   List of online routing providers. Here you can add an online routing engine: ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX.   |
| <Translate android="true" ids="routing_profile_broutrer"/> |  [Offline third-party routing](https://brouter.de/)  |   The full description read [here](../navigation/thirdparty-routing.md)   |
| **<Translate android="true" ids="route_parameters"/>:** |  allows setting routing for any cases and showing additional info about roads.   |              |
| "<Translate android="true" ids="fast_route_mode"/>" |  <Translate android="true" ids="fast_route_mode_descr"/>    |              |
| "<Translate android="true" ids="routing_attr_driving_style_name"/>"   |  select driving puprose to get shorter, faster, safer or unpaved route. | "<Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>": prefer unpaved over paved roads for routing. <br />  "<Translate android="true" ids="routing_attr_driving_style_safety_name"/>": prefer safer roads for routing. <br /> "<Translate android="true" ids="routing_attr_driving_style_balance_name"/>": prefer faster way for routing. <br />  "<Translate android="true" ids="routing_attr_driving_style_speed_name"/>": prefer shorter way for routing. <br />     |
| "<Translate android="true" ids="impassable_road"/>" |  avoid certain routes and road types for routing:    |  Each navigation type has its own set of avoiding.  |
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
| "<Translate android="true" ids="routing_attr_allow_streams_name"/>" |  allows streams and drains for boat navigation type.  | Boat navigation type |
| "<Translate android="true" ids="routing_attr_allow_intermittent_name"/>" |  allows intermittent water ways for boat navigation type.  | Boat navigation type    |
| "<Translate android="true" ids="routing_attr_max_num_changes_name"/>" |  specify upper limit of changes of for public transport.  | Public transport navigation type    |
| "<Translate android="true" ids="routing_attr_allow_motorway_name"/>" |  <Translate android="true" ids="routing_attr_allow_motorway_description"/>  | Cycling |
| "<Translate android="true" ids="routing_attr_allow_private_name"/>" |  <Translate android="true" ids="routing_attr_allow_private_description"/>  |    |
| "<Translate android="true" ids="routing_attr_height_obstacles_name"/>" |  allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>"  | Routing could avoid strong uphills.    | 
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>"  | Routing could avoid strong uphills.    | 
|   | "<Translate android="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>"  | Routing could avoid strong uphills.    |  
| "<Translate android="true" ids="temporary_conditional_routing"/>" |  <Translate android="true" ids="temporary_conditional_routing_descr"/>. Data from OpenStreetMap. |    |
| "<Translate android="true" ids="recalculate_route"/>" | allows to recalculate the route by the next cases:    |    |
|   | "<Translate android="true" ids="route_recalculation_dist_title"/>"    |  <Translate android="true" ids="recalculate_route_in_deviation"/>. <Translate android="true" ids="select_distance_route_will_recalc"/>  |
|   | "<Translate android="true" ids="in_case_of_reverse_direction"/>"   |  The route will be recalculated if the direction is changed to reverse. |
| "<Translate android="true" ids="development"/>" | using live updates and the initial part for calculation the route    |    |
|   | "<Translate android="true" ids="use_live_routing"/>"    |  Enable navigation for [OsmAnd Live changes](../personal/maps.md#osmand-live).  |
|   | "<Translate android="true" ids="use_fast_recalculation"/>"   |  <Translate android="true" ids="use_fast_recalculation_desc"/> |
|   | "<Translate android="true" ids="use_two_phase_routing"/>"   |  <Translate android="true" ids="complex_routing_descr"/> |
| **<Translate android="true" ids="screen_alerts"/>** | showing or not alerts on the screen like a widget. Alerts shown bottom left during navigation. | [Types of alert widgets](../widgets/nav-widgets.md#alert-widget)   |
| **<Translate android="true" ids="voice_announcements"/>** | on/off and settings of [voice guidance](../navigation/voice-navigation.md) during navigation.    |  Configure to announce street names, traffic warnings (forced stops, speed bumps), speed camera warnings, speed limits.  |
| **<Translate android="true" ids="vehicle_parameters"/>** | specified vehicle parameters may affect routing:   |   |
|     | <Translate android="true" ids="default_speed_setting_title"/>  | Estimates arrival times for unknown road types and limits the speed for all roads (can affect routing). For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h.  |
|     | <Translate android="true" ids="routing_attr_weight_name"/>   | <Translate android="true" ids="weight_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_height_name"/>  | <Translate android="true" ids="height_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_length_name"/>  | <Translate android="true" ids="lenght_limit_description"/>   |
|     | <Translate android="true" ids="routing_attr_width_name"/> | <Translate android="true" ids="width_limit_description"/>   |
| **<Translate android="true" ids="customize_route_line"/>** | Change color and width for the route line during [navigation](../navigation/index.md).   | [Pro feature](../purchases/android.md#free-and-paid-features)  |
|     | <Translate android="true" ids="shared_string_color"/> | Using color by: Map style, Custom, Altitude, Slope, Road type, Surface, Smoothness, Winter and ice roads,Surface firmness.  |
|     | <Translate android="true" ids="shared_string_width"/> | Using width by: Map style, Thin, Medium, Bold, Custom.  |
|     | <Translate android="true" ids="turn_arrows"/> | Select whether turn arrows are indicated on the route line.  |


</TabItem>

<TabItem value="ios" label="iOS">

&nbsp;<Translate ios="true" ids="nav_type_title"/> - governs how routes are calculated. These are rules for routing your profile. It means that your bicycle profile has Cycling navigation type for example. You can import the routing file from any cloud storage app by opening it in OsmAnd. More about [Routing.xml on our Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

&nbsp;<Translate ios="true" ids="route_parameters"/> - controls which parameters will be used during routing and which parameters will be showed on the device screen. During navigation you can change some of these parameters in ["Navigation Options"](../navigation/route-navigation.md#navigation-options). Below list of parameters:

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|**<Translate ios="true" ids="nav_type_title"/>**| choose your Navigation type which controls how routes are calcualted.  | Navigation types ([OsmAnd routing](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)) by default: [<Translate ios="true" ids="app_mode_boat"/>](../navigation/boat-navigation.md#boat), [<Translate ios="true" ids="m_style_bicycle"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="nav_type_direct_to"/>](../navigation/boat-navigation.md#direct-to-point), [<Translate ios="true" ids="m_style_car"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate ios="true" ids="m_style_pulic_transport"/>](../map/public-transport.md), [<Translate ios="true" ids="nav_type_ski"/>](../plugins/ski-maps.md), [<Translate ios="true" ids="nav_type_straight_line"/>](../navigation/boat-navigation.md#straight-line). |
| **<Translate ios="true" ids="route_parameters"/>:** |  allows setting routing for any cases and showing additional info about roads.   |              |
| "<Translate ios="true" ids="recalculate_route"/>" |  <Translate ios="true" ids="route_recalculation_descr"/>    |              |
| "<Translate ios="true" ids="recalculate_wrong_dir"/>"  |  the route will be recalculated if you are moving to the start point.   |              |
| "<Translate ios="true" ids="routing_attr_driving_style_name"/>"   |  select driving puprose to get shorter, faster, safer or unpaved route. | "<Translate ios="true" ids="routing_attr_driving_style_prefer_unpaved_name"/>": prefer unpaved over paved roads for routing. <br />  "<Translate ios="true" ids="routing_attr_driving_style_safety_name"/>": prefer safer roads for routing. <br /> "<Translate ios="true" ids="routing_attr_driving_style_balance_name"/>": prefer faster way for routing. <br />  "<Translate ios="true" ids="routing_attr_driving_style_speed_name"/>": prefer shorter way for routing. <br />     |
| "<Translate ios="true" ids="impassable_road"/>" |  avoid certain routes and road types for routing:    |   Navigation types and notes           |
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
| Motor type |  allows choosing type of motor: Petrol, Diesel, Lpg, Gas, Electric, Hybrid  |   Driving routing |
| "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_name"/>" |  allows choosing relief parameters for the routing. The routing could avoid strong uphills:   |   Cycling routing |
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>"  | Routing could avoid strong uphills.    | 
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>"  | Routing could avoid strong uphills.    | 
|   | "<Translate ios="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>"  | Routing could avoid strong uphills.    |  
| "<Translate ios="true" ids="routing_attr_height_obstacles_name"/>" |  Using elevation fluctuation for routing.  |    |
| "<Translate ios="true" ids="routing_attr_allow_motorway_name"/>" |  using Motorways for routing  |   Cycling routing |
| "<Translate ios="true" ids="routing_attr_allow_private_name"/>" |  ignore the Private Access restriction for routing  |    |
| "<Translate ios="true" ids="consider_limitations_param"/>" |  using temporaty limitations for routing from OpenStreetMap data  |    |
| "<Translate ios="true" ids="road_speeds"/>" |  setting the minimum and the maximum travel speed for all roads in the route.  |    |
| **<Translate ios="true" ids="voice_announces"/>** | on/off and settings of [voice guidance](../navigation/voice-navigation.md) during navigation.    |  <Translate ios="true" ids="speak_descr"/>  |
| **<Translate ios="true" ids="screen_alerts"/>** | showing or not alerts on the screen like a widget.  | [Types of alert widgets](../widgets/nav-widgets.md#alert-widget)   |
| **<Translate ios="true" ids="vehicle_parameters"/>** | specified vehicle parameters may affect routing:   |   |
|     | <Translate ios="true" ids="default_speed"/>  | <Translate ios="true" ids="default_speed_dialog_msg"/>. For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. |
|     | <Translate ios="true" ids="routing_attr_weight_name"/>   | <Translate ios="true" ids="weight_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_height_name"/>  | <Translate ios="true" ids="height_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_length_name"/>  | <Translate ios="true" ids="lenght_limit_description"/>   |
|     | <Translate ios="true" ids="routing_attr_width_name"/>   | <Translate ios="true" ids="width_limit_description"/>   |
| **<Translate ios="true" ids="customize_route_line"/>** | Change color and width for the route line during [navigation](../navigation/index.md).   | [Pro feature](../purchases/android.md#free-and-paid-features)  |
|     | <Translate ios="true" ids="fav_color"/> | Using color by: Map style, Custom, Altitude, Slope, Road type, Surface, Smoothness, Winter and ice roads,Surface firmness.  |
|     | <Translate ios="true" ids="shared_string_width"/> | Using width by: Map style, Thin, Medium, Bold, Custom.  |
|     | <Translate ios="true" ids="turn_arrows"/> | Control the visibility of the turn arrows on the route line.  |

</TabItem>

</Tabs>

#### **Other**

Parameters for "Map during navigation" and others:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="map_during_navigation"/>:** |  Change map behavior during navigation.   |              |
| "<Translate android="true" ids="choose_auto_follow_route"/>" |  <Translate android="true" ids="choose_auto_follow_route_descr"/>.   |  Value: Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| "<Translate android="true" ids="auto_zoom_map"/>"  |  <Translate android="true" ids="auto_zoom_map_descr"/>.   | Value: <Translate android="true" ids="auto_zoom_none"/>, <Translate android="true" ids="auto_zoom_farthest"/>, <Translate android="true" ids="auto_zoom_far"/>, <Translate android="true" ids="auto_zoom_close"/>. |
| "<Translate android="true" ids="map_orientation_change_in_accordance_with_speed"/>"  |  [<Translate android="true" ids="map_orientation_change_in_accordance_with_speed_descr"/>](../map/interact-with-map.md#map-orientation-modes).   | Value: 0 km/h, 5 km/h, 7 km/h, 10 km/h, 15 km/h, 20 km/h.    |
| "<Translate android="true" ids="snap_to_road"/>"  |  <Translate android="true" ids="snap_to_road_descr"/>.   |    |
| **<Translate android="true" ids="animate_my_location"/>** |  <Translate android="true" ids="animate_my_location_desc"/>   |              |

</TabItem>

<TabItem value="ios" label="iOS">

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **Map during navigation:** |  Change map behavior during navigation.   |              |
| "<Translate ios="true" ids="choose_auto_follow_route"/>" |  <Translate ios="true" ids="choose_auto_center_map_view_descr"/>.   |  Value: Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| "<Translate ios="true" ids="auto_zoom_map"/>"  |  <Translate ios="true" ids="auto_zoom_map_descr"/>.   | Value: <Translate ios="true" ids="auto_zoom_none"/>, <Translate ios="true" ids="auto_zoom_farthest"/>, <Translate ios="true" ids="auto_zoom_far"/>, <Translate ios="true" ids="auto_zoom_close"/>. |
| "<Translate ios="true" ids="map_orientation_change_in_accordance_with_speed"/>"  |  [<Translate ios="true" ids="map_orientation_change_in_accordance_with_speed_descr"/>](../map/interact-with-map.md#map-orientation-modes).   | Value: 0 km/h, 5 km/h, 7 km/h, 10 km/h, 15 km/h, 20 km/h.    |
| "<Translate ios="true" ids="snap_to_road"/>"  |  <Translate ios="true" ids="snap_to_road_descr"/>.   |    |

</TabItem>

</Tabs>


### Configure map

Here you can set parameters for [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) of chosen profile

[<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) menu is a central place where you could configure map display for your profile needs, i.e. highlight [Favorite points](../personal/favorites.md), [Navigation markers](../personal/markers.md) or special [Points of Interests](../map/point-layers-on-map.md#points-of-interest-poi) on the map; display specific routes or 3rd party GPX files; [overlay the map with relief information](../plugins/contour-lines.md), [satellite imagery or any other available raster map](../map/raster-maps.md); display [public transport information](../map/public-transport.md) and [change the map style](../map/vector-maps.md#default-map-styles).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>
<p> </p>

Set parameters for [Configure map](../map/configure-map-menu.md) menu for chosen profile.

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,configure_map"/>

<p> </p>

Set parameters for [Configure map](../map/configure-map-menu.md) menu for chosen profile.

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_settings_ios.png)

</TabItem>

</Tabs>


### Configure screen

Here you can set parameters for [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) of chosen profile.

[<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) is a menu that allows to configure what widgets will be displayed over the map. It allows you to enable and configure [Quick action](../widgets/quick-action.md), [Informational](../widgets/info-widgets.md) & [Navigational](../widgets/nav-widgets.md) widgets and other elements.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,layer_map_appearance"/>
<p> </p>

Set parameters for [Configure screen](../widgets/configure-screen.md) menu for chosen profile.

![Profiles Configure screen Settings Android](@site/static/img/personal/profiles/profile_configure_screen_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,layer_map_appearance"/>

<p> </p>

Set parameters for [Configure screen](../widgets/configure-screen.md) menu for chosen profile.

![Profiles Configure screen Settings iOS](@site/static/img/personal/profiles/profile_configure_screen_settings_ios.png)

</TabItem>

</Tabs>

### Profile appearance

You can choose the color of the profile elements, its icon and name, also assign icons on the map for movement and without.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>
<p> </p>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate android="true" ids="profile_name_hint"/>"| entering a profile name |     |
| "<Translate android="true" ids="profile_appearance"/>"| changing color and label for chosen profile: |     |
|       | "<Translate android="true" ids="select_color"/>" |  choosing color for a profile icon and menu   |
|       | "<Translate android="true" ids="select_icon_profile_dialog_title"/>" | choosing label for a profile icon    |
|       | ![Profile Appearance Android](@site/static/img/personal/profiles/profile_appearance_android.png) |   |
| "<Translate android="true" ids="appearance_on_the_map"/>"| changing position icons: |     |
|       | "<Translate android="true" ids="select_map_icon"/>" |  choosing label for a profile icon without moving   |
|       | ![Profile Appearance at rest Android](@site/static/img/personal/profiles/profile_appearance_atrest_android.png) |   |
|       | "<Translate android="true" ids="select_navigation_icon"/>" |  choosing label for a profile icon while moving   |
|       | ![Profile Appearance on the map Android](@site/static/img/personal/profiles/profile_appearance_moving_android.png) |   |


</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,profile_appearance"/>

<p> </p>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate ios="true" ids="fav_name"/>"| entering a profile name |     |
| "<Translate ios="true" ids="map_settings_appearance"/>"| changing color and label for chosen profile: |     |
|       | "<Translate ios="true" ids="select_color"/>" |  choosing color for a profile icon and menu   |
|       | "<Translate ios="true" ids="select_icon"/>" | choosing label for a profile icon    |
|       | ![Profile Appearance iOS](@site/static/img/personal/profiles/profile_appearance_ios.png) |   |
| "<Translate ios="true" ids="appearance_on_map"/>"| changing position icons: |     |
|       | "<Translate ios="true" ids="position_icon_at_rest"/>" |  choosing label for a profile icon without moving   |
|       | "<Translate ios="true" ids="position_icon_while_moving"/>" |  choosing label for a profile icon while moving    |
|       | ![Profile Appearance on the map iOS](@site/static/img/personal/profiles/profile_appearance_onthemap_ios.png) |   |

</TabItem>

</Tabs>

### UI Customization

Customize the quantity of items in ["<Translate android="true" ids="shared_string_drawer"/>"](../start-with/main-menu.md#main-menu-drawer), ["<Translate android="true" ids="configure_map"/>"](../map/configure-map-menu.md) and ["<Translate android="true" ids="context_menu_actions"/>"](../map/map-context-menu.md).


> `Turn off unused [plugins](../plugins) for hide all their controls.`


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,ui_customization"/>
<p> </p>

Under each menu there is the info about items quantity / active items.

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)


**Drawer**

In this part of the menu you reorder or hide items from the [Drawer](../start-with/main-menu.md#main-menu-drawer).

| Actions | Note |
|:---------------|:---------------|
| "Minus" | These items are hidden from the menu, but the represented options or plugins will continue to work.  |
| "Moving" | These items are moved to other positions in the menu.  |
| ![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png) |   |
| "Reset" | These items are reset from the "Hidden" part of the menu to the visible. |
| ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png) |   |
| "<Translate android="true" ids="reset_to_default"/>" | resetting the "Drawer" menu to default. |
| "<Translate android="true" ids="copy_from_other_profile"/>" | coping the "Drawer" menu from another profile.  |
| ![Profile Copy Android](@site/static/img/personal/profiles/profile_drawer_reset_copy_android.png) |   |

**Configure map**

In this part of the menu you reorder or hide items from the [Configure map](../map/configure-map-menu.md) menu.

| Actions | Note |
|:---------------|:---------------|
| "Minus" | These items are hidden from the menu, but the represented options or plugins will continue to work.  |
| "Moving" | These items are moved to other positions in the menu.  |
| ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_moving_android.png) |   |
| "Reset" | These items are reset from the "Hidden" part of the menu to the visible. |
| ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_configure_reset_item_android.png) |   |
| "<Translate android="true" ids="reset_to_default"/>" | resetting the "Configure map" menu to default. |
| "<Translate android="true" ids="copy_from_other_profile"/>" | coping the "Configure map" menu from another profile.  |
| ![Profile Configure map menu Copy Android](@site/static/img/personal/profiles/profile_configure_reset_copy_android.png) |   |


**Context menu actions**

In this part of the menu you reorder or hide items from the [Context menu actions](../map/map-context-menu.md) menu.

| Actions | Note |
|:---------------|:---------------|
| "Minus" | These items are hidden from the menu, but the represented options or plugins will continue to work.  |
| "Moving" | These items are moved to other positions in the menu.  |
| ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_context_moving_android.png) |   |
| "Reset" | These items are reset from the "Hidden" part of the menu to the visible. |
| ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_reset_item_android.png) |   |
| "<Translate android="true" ids="reset_to_default"/>" | resetting the "Context menu actions" menu to default. |
| "<Translate android="true" ids="copy_from_other_profile"/>" | coping the "Context menu actions" menu from another profile.  |
| ![Profile Configure map menu Copy Android](@site/static/img/personal/profiles/profile_context_reset_copy_android.png) |   |

</TabItem>

</Tabs>


## Plugin settings

[Plugins](https://docs.osmand.net/en/main@latest../plugins) are a collection of settings that can be enabled with one click. Plugins also unlock additional functions of the application, they can be either [paid or free](../purchases/index.md). Some plugins have their own settings. Among other things, you can enable or disable plugins for each profile separately.


> Plugins must be enabled in [the Plugin list](../plugins/index.md) for activating it in the setting list for the profile.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings"/>
<p> </p>

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,plugins"/>

<p> </p>

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_ios.png)

</TabItem>

</Tabs>

### Trip recording

This menu opens [the trip recording settings](../plugins/trip-recording.md#trip-recording-plugin-settings) for the selected profile. Where you can choose any parameters for recording your trip.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,record_plugin_name"/>
<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,sett_settings,app_profiles,plugins,track_recording"/>

<p> </p>

</TabItem>

</Tabs>

### Audio / Video notes

This menu opens [audio-video plugin settings](../plugins/audio-video-notes.md#plugin-settings) for the selected profile. Where you can choose any parameters for your needed.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,audionotes_plugin_name"/>

<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">


> `Not exist for iOS version.`


</TabItem>

</Tabs>

### OpenStreetMap editing

This menu opens [the OpenStreetMap editing plugin settings](../plugins/osm-editing.md#plugin-settings) for the selected profile. Where you can input your data for starting OSM edit.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,osm_editing_plugin_name"/>
<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">

Check!
<Translate ios="true" ids="ios_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,product_title_osm_editing"/>
<p> </p>

</TabItem>

</Tabs>

### OpenPlaceReviews

This menu opens [the OpenPlaceReviews plugin settings](../plugins/openplacereviews.md#plugin-settings) for the selected profile. Where you can input your data for starting added reviews of any places.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,open_place_reviews"/>
<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">


> `Not exist for iOS version.`


</TabItem>

</Tabs>

### Accesibility

This menu opens [Accessibility plugin settings](../plugins/accessibility.md) for the selected profile. Where you can choose any parameters for your needed.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,shared_string_accessibility"/>
<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">


> `Not exist for iOS version.`


</TabItem>

</Tabs>

### OsmAnd development

This menu opens [Development plugin settings](../plugins/accessibility.md) for the selected profile. Settings for development and debugging features, like navigation simulation, rendering performance, or voice prompting. Intended for developers, not needed for normal app use.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile"/> (Browse map or any other profile) → <Translate android="true" ids="plugins_settings,development"/>
<p> </p>

</TabItem>

<TabItem value="ios" label="iOS">


> `Not exist for iOS version.`


</TabItem>

</Tabs>

## Actions

Actions with chosen profile: export, copy from another profile, reset to default, delete profile:

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)

- &nbsp;<Translate android="true" ids="export_profile"/>
- &nbsp;<Translate android="true" ids="copy_from_other_profile"/>
- &nbsp;<Translate android="true" ids="map_widget_reset"/>
- &nbsp;<Translate android="true" ids="profile_alert_delete_title"/>

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)
- &nbsp;<Translate android="true" ids="export_profile"/>
- &nbsp;<Translate android="true" ids="copy_from_other_profile"/>
- &nbsp;<Translate android="true" ids="map_widget_reset"/>
- &nbsp;<Translate android="true" ids="profile_alert_delete_title"/>

</TabItem>

</Tabs>
