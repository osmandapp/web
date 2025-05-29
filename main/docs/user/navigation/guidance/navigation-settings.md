---
sidebar_position: 7
title:  Navigation Settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

For successful navigation, it's important to properly configure the appropriate settings according to your needs and how you travel - by car, on foot, on horseback, or skis. This article describes the basic route parameters, [Voice prompts](#voice-prompts), [Screen alerts](#screen-alerts), [Map behavior during navigation](#map-during-navigation), and the [Appearance of route lines](#customize-route-line). It also details vehicle settings such as [Default speed](#default-speed) and [Maximum/minimum speed](#road-speeds), [Engine type](#fuel-used-by-motor) for CO2 calculation, [Fuel tank capacity](#fuel-tank-capacity), and [Size/weight](#size-parameters), which can affect the route. Adjusting these settings will help you get the most out of using OsmAnd and reach your goal without unnecessary delay.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

### How to Open {#how-to-open}

This section presents the navigation settings necessary for calculating and plotting a route, which you can set for the selected profile. This menu includes settings for [Route preparation](../setup/route-navigation.md), the [Map screen during navigation](../guidance/map-during-navigation.md), and what you set in the *Navigation settings* directly affects the display of data in the [Route Details](../setup/route-details.md).

There are three ways to access the Navigation settings menu.

- Go to the main *Menu → Settings*, select the required *Profile*, and tap *Navigation settings*.

- Tap the *Navigation* icon on the map screen, then select the *Settings icon → Navigation settings*.

- Go to the main *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
The default *Browse map* profile has no navigation settings.  
:::


## Navigation Type {#navigation-type}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Navigation is an important part of a trip, and choosing *the right type* of navigation can make your journey much easier. The type of navigation you choose can depend on how you travel and whether you have an Internet connection.  

- **Online navigation**
    It mainly uses a special routing system or website that allows the OsmAnd app to plot a route based on current information and other factors. You can read about choosing the best route online in the article [Online routing](../routing/online-routing.md). This navigation type is only available for the *Android version* of the app.  

- **Offline navigation**
It does not require internet access and offers a wider selection of [navigation types](../routing/osmand-routing.md#routing-types) that can be used to calculate a route. Among them are *bicycle, boat, car, on foot, ski*, and *straight line*. There are currently 13 basic types of routing, as well as an external [BRouter](../routing/brouter.md) routing type that provides additional routing opportunities.  

The navigation type determines which rules are used to calculate routes. If you need a specific type of navigation, you can **import your own modified *XML* routing file**. Read more about routing rules on our [GitHub page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). And there is a separate article about XML format and how to use it, [Map Rendering style](../../../technical/osmand-file-formats/osmand-rendering-style.md), which can help you in creating a route file.  


## Route Parameters {#route-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route_parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route_parameters_1_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** are settings that determine how the application will calculate a route to reach a destination, considering factors such as type of transport, routing priorities, route conditions, route complexity, and user preferences.  

For each [profile](../../personal/global-settings.md#default-profile), except for *Browse Map*, OsmAnd selects by default the optimal [Navigation type](#navigation-type) and the relevant [route parameters](../routing/osmand-routing.md#routing-types). However, you can choose any type you like and change the parameters depending on your preferences and the external conditions of the upcoming trip.  

All route parameters are described in detail in the corresponding sections of the documentation:  
*[Car routing (Truck, Motorcycle)](../routing/car-based-routing.md), [Bicycle  routing (MTB)](../routing/bicycle-based-routing.md), [Moped routing](../routing/moped-routing.md), [Pedestrian routing](../routing/pedestrian-routing.md), [Public Transport routing](../routing/public-transport-navigation.md), [Horseback routing](../routing/horse-routing.md), [Skiing routing](../routing/ski-routing.md), [Train routing](../routing/train-routing.md), [Boat routing](../routing/boat-navigation.md), [Direct-to-point routing](../routing/direct-to-point-routing.md), [Straight line routing](../routing/straight-line-routing.md), [Online routing](../routing/online-routing.md), [BRouter routing](../routing/brouter.md)*.  


### Recalculate Route {#recalculate-route}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation1_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-recalculation2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation1_ios.png)
![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_route-recalculation2_ios.png)

</TabItem>

</Tabs>  

The **Route Calculation** parameter automatically changes the calculated route when you deviate from it or drive in the opposite direction. In both cases, this setting helps you maintain your direction of travel and get to your destination without wasting time manually searching for a new route.  

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> in case of deviation*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | If [Voice prompts](../guidance/voice-navigation.md#voice-settings) are turned on, OsmAnd announces, that the route is being recalculated. |
|  *Recalculate route in case of reverse direction*  | Your route will be recalculated if you move to the starting point.  |  With this setting turned off, movement to the starting point is not considered a deviation from the path (as long as it follows the calculated route).  |


### Development Settings {#development-settings}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *Menu → Settings → app profile → Navigation settings → Route parameters → Development*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *Menu → Settings → app profile → Navigation settings → Route parameters → Development*

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_development_1_ios.png)

</TabItem>

</Tabs>  

The parameters in the **Development** section are mainly for advanced users and are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.  

| Parameter | Description | Note |
|:------------|:---------------|
| *Routing type* (*Android*) / *Routing algorithm* (*iOS*) | <ul><li>**A*** 2-phase (*Android*) / **A*** (*iOS*) adds an extra phase to the default algorithm to improve the quality of the calculated route. This option can be useful for finding routes in large and complex road networks, but route calculation may take longer.</li><li>**A* classic** (*Android*) / **Highway hierarchies** (*iOS*) optimize route planning by favoring main roads and motorways, minimizing the number of turns and junctions on the route. Particularly effective over long distances.</li><li>**HH (Highway Hierarchies) x Java** (*Android only*) is based on the implementation of hierarchical data structures to optimize pathfinding on a map, taking into account runtime constraints and device resource consumption, and is realized on the Java platform.</li><li>**HH (Highway Hierarchies) x C++** (*Android only*) is an algorithm that uses the C++ programming language to efficiently process road network data and build optimal routes using hierarchical data structures. It is optimized for fast processing of large amounts of data and is particularly effective for navigating maps with many road networks.</li></ul> |  
| *GPX approximation* (*Android only*)  | <ul><li>**Routing-based** GPX approximation in **C++ and Java** uses route data to approximate GPS tracks with existing road routes, which improves track accuracy and reduces track size.</li><li>**Geometry-based** GPX approximations in **C++ and Java** work based on geometric principles to quickly and accurately approximate GPS tracks, allowing efficient processing of large amounts of data.</li></ul> |
| *Auto zoom* | <ul><li>**Discrete** allows you to zoom in on the map to a specific level of detail measured in a few discrete steps.</li><li>**Smooth** provides a gradual change in map scale with smooth animation effects without jerks or jumps.</li></ul> |
| *<Translate android="true" ids="use_live_routing"/>* (*Android only*)  | Use [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) while routing. Note, that we recommend using this option for testing purposes only.  |

<!--
| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows using [OsmAnd Live updates](../../personal/maps-resources.md#osmand-live) while routing. Note, that we recommend using this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   
-->


## Voice Prompts {#voice-prompts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,voice_announces"/>*
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,shared_string_sound,shared_string_settings"/>*

![Voice Navigation settings Android](@site/static/img/navigation/voice/voice_promt-settings.png)

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,voice_announces"/>*
- *<Translate ios="true" ids="routing_settings"/> button* *(or <Translate ios="true" ids="shared_string_menu,shared_string_navigation"/>) → Choose profile → <Translate ios="true" ids="shared_string_settings,routing_settings_2,voice_announces"/>*

![Voice Navigation settings iOS](@site/static/img/navigation/voice/voice_promt-settings-ios.png)

</TabItem>

</Tabs>

The first part of the *[Voice Prompts / Notifications](./voice-navigation.md)* article describes how to set up voice prompts in detail.  

Audio instructions during navigation help you as a driver or pedestrian get to your destination while [navigating a selected route](../setup/route-navigation.md). They contain information about turns, driving directions, road signs, distances to your destination, and other factors that may affect your navigation.  

If you select a track as your destination point, you need to use the [Attach to the roads](../setup/gpx-navigation.md#attach-to-roads) option for the voice prompts to work correctly.

*Voice prompts* allow you to focus on the road and not be distracted by the map or navigation device. They also improve driving safety, reduce the time it takes to navigate unfamiliar terrain, and can be useful for different [types of routes](../routing/osmand-routing.md#routing-types).


## Screen Alerts {#screen-alerts}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

</TabItem>

</Tabs>  

The **Screen alert** navigation setting enable the [**Alerts Widget**](../../widgets/nav-widgets.md#alert-widget). *Details:*

- When you approach one of the supported obstacles on the road, notifications appear in the lower-left corner of the map.
- If you configure the [*voice and text prompts*](../../navigation/guidance/voice-navigation.md) available in the OsmAnd app, you'll have a more comfortable and safer trip.
- The appearance and timing of the prompts depend on your speed settings. You can find them [here](../../../technical/algorithms/voice-prompt-triggering.md).  
- The behavior of *Screen Alerts* is also affected by the [Show points along the route](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) setting.

You can ***select which alerts*** you want to see on the app screen while navigating:

- **Speed limit** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Speed_limits)). In the Screen alerts setting, the *Speed limit* is only displayed on the screen with *Traffic warnings* turned on. If you want to see speed limits during navigation without other warnings, use the [widget](../../widgets/nav-widgets.md#speed-limit).
- **Traffic warnings** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)). Additional information can be found in the article [Map screen during navigation](https://osmand.net/docs/user/navigation/guidance/map-during-navigation/#traffic-warnings).
- **Pedestrian crosswalks** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)).
- **Speed cameras** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera)). For more information about the Speed camera setting in OsmAnd, read [Alert Types](../../widgets/nav-widgets.md#alert-types) and the article *Global settings*, section [Legal](../../personal/global-settings.md#legal).
- **Tunnels** ([OSM Wiki info](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)).

:::note
The types of warnings have a different visual appearance, which depends on the travel region. OsmAnd does not aim to present 100% identical road signs but points out some similarities.  
:::


## Map During Navigation {#map-during-navigation}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)

The **map is used during navigation** to determine your location, plan your route, and land orientation. During navigation, you can view the map with *auto-center*, move it around, and *zoom in and out* to see the required area. The map can also display markers indicating points of interest, routes, weather conditions, road signs, and other objects to help you navigate. The map can be updated in *real-time* and displays *up-to-date information* that can affect route planning.

You can learn how the behavior of the map changes during navigation in the article [Map screen during navigation](../guidance/map-during-navigation.md).  

## Customize Route Line {#customize-route-line}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

With the **Customize Route Line** setting, you can choose the appearance of the route line that will be visible on the map during navigation. You can select the *color*, the *width of the line*, and the display of the *turn arrows* on it. For each profile, you can choose a different line view. All these parameters are described in detail in the article *Map screen during navigation* in the section [Route line appearance](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Vehicle Parameters {#vehicle-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png)

</TabItem>

</Tabs>  

For optimal route calculation in OsmAnd, you should consider the following vehicle parameters:

1. Set the [*Default Speed* or *Road Speeds*](#default-speed--road-speeds), as the [minimum and maximum speed](#road-speeds) of the vehicle. This will help the application determine the time required to complete the route and allow it to choose the best route, considering the speed limits on different road segments.
2. Specify the [*type*](#fuel-used-by-motor) of fuel used by the motor. This will allow the app to estimate CO2 emissions.
3. Enter the [*capacity of your tank*](#fuel-tank-capacity) (*Android*) to accurately track your fuel level and consumption.
4. Define [*size and weight parameters*](#size-parameters) of your vehicle, which can help the app calculate the optimal route and avoid obstacles on the road due to restrictions.

Correctly setting the parameters in the OsmAnd app will help you avoid problems when navigating a route, choose the most suitable one according to the type of vehicle and road restrictions, and calculate the time for your trip.


### Size Parameters {#size-parameters}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png)

</TabItem>

</Tabs>

Vehicle parameters affect navigation and route construction because they determine the availability of roads, bridges, ferries, dams, and other infrastructure. If the height, width, length, or weight of a vehicle exceeds the permissible values for certain road sections, the OsmAnd navigation system will find an alternative route to avoid obstacles along the way.  

- The units of measurement will correspond to the settings selected in *General settings → [Units & formats](../../personal/profiles.md#units--formats)*.
- The vehicle parameters can be set manually.
- If you manually select the vehicle measurement parameter, the application will offer you the closest value from the ready-made list. This is necessary to avoid errors and build the route more correctly.
- You can choose vehicle parameters from a ready-made list of sizes.
- Do not set the size, *None*, meaning no restrictions on the selected parameter will be applied.  

#### Limits {#limits}

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> The Weight parameter is only available in navigation types such as [*Car, Truck*, and *Motorcycle*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> The Height parameter is only available in navigation types such as *[Car, Truck, Motorcycle](../../navigation/routing/car-based-routing.md)*, and *[Boat](../../navigation/routing/boat-navigation.md)*.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> The Length parameter is only available in navigation types such as [*Car, Truck*, and *Motorcycle*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> The Width parameter is only available in navigation types such as *[Car, Truck, Motorcycle](../../navigation/routing/car-based-routing.md)*, and *[Boat](../../navigation/routing/boat-navigation.md)*.  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)

Limits on vehicle parameters can be important for navigation and road safety. Some of these restrictions may include:  

1. Restrictions on vehicles moving in certain urban areas.  
2. Restrictions on vehicle movement on specific sections of road, such as where there are bridges, tunnels with limited space, low elevation overpasses, complex turns, or other structures.  
3. Weight limits per vehicle axle can be especially important for trucks.
4. Restrictions for vehicles moving in certain conditions, such as high temperatures, wet or snowy roads, at night, or in weather conditions with limited visibility.

These restrictions can be important for navigation and should be considered when planning a route. If a vehicle exceeds the limits, it may result in road safety, infrastructure damage, accident fines, and other legal consequences. Therefore, drivers should carefully examine the route and make sure that the height of their vehicle meets the limits.


### Fuel parameters {#fuel-parameters}

#### Fuel Used by Motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_motor_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_motor_ios.png)

</TabItem>

</Tabs>

If you select the engine type in the vehicle parameters, the [***CO2 footprint data***](../../navigation/setup/route-details.md#elevation-info) will be displayed above the graph in [Route Details](../setup/route-details.md).
Available six fuel types: ***Petrol, Diesel, LPG, CNG, Electric,*** and ***Hybrid***.  

**Applicability:**

The **Fuel used by motor** setting is only available in vehicle-based navigation such as *[Car, Motorcycle, and Truck](../../navigation/routing/car-based-routing.md)*.


#### Fuel tank capacity {#fuel-tank-capacity}

<InfoAndroidOnly/>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

The **Fuel tank capacity** parameter allows you to track your vehicle's fuel level and consumption more accurately by providing the total volume of your tank. The unit of measurement for fuel capacity is determined by the settings configured in *Menu → Configure profile → General settings → Units & Formats → Unit of volume*. For detailed guidance on setting Units & Formats, refer to the [Profile (Settings)](https://osmand.net/docs/user/personal/profiles#units--formats) article.

OsmAnd supports the following units for capacity:

- Gallons - **gal**. This abbreviation is used to represent both **Imperial gallons** and **US gallons**, depending on your selected unit preferences.
- Liters - **l**. The metric unit for capacity.

**Applicability:**

The **Fuel tank capacity** setting is only available in vehicle-based navigation. For navigation types such as *Bicycle*, *Horseback riding*, *On foot*, and *Ski*, this parameter is not displayed in the Vehicle Parameters.

By entering the exact capacity of your fuel tank, the app can provide a more tailored experience, including:

- Precise tracking of remaining fuel based on your consumption.
- Enhanced route planning with fuel stops optimized according to your tank size.

To ensure accurate calculations and navigation suggestions, verify that your selected unit matches your tank’s measurement standard.


### Default Speed / Road Speeds {#default-speed--road-speeds}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

For all types of navigation the minimum and maximum allowable speed, both by default and by road, can be different, according to certain values ([Default speed limits](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) and restrictions for vehicles. The speed is also set in certain increments to make the application settings maximum usable. For the *Walking*, *Horseback riding* and *Cycling* profiles, in small increments equivalent to 0.1 km/h ([Units & formats](https://osmand.net/docs/user/personal/profiles#units--formats)), and for the other profiles, in increments equivalent to 1 km/h.  
Speed settings determine when [voice announcements](../guidance/voice-navigation.md) are activated.

These parameters are used as speed to estimate the [arrival time](../../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed cannot be determined from map data:

- for the selected profile;
- if the used roads have no speed limits, which can also affect the routing;
- if user-generated or imported tracks are selected.


#### Default Speed {#default-speed}

The **Default speed** is the preset movement speed. It is used to calculate the arrival time and determine the optimal route based on the movement speed that the application considers typical for this mode of transport. For example, car, public transport, pedestrian, or the speed you set manually.


#### Road Speeds {#road-speeds}

<InfoAndroidOnly />

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)


<!--
<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>  

:::note
These settings in iOS are available in *Menu → Settings → app profile → Navigation settings → Route parameters → Road speeds*.
:::

-->

- **Minimum speed**  
    The setting sets the minimum driving speed for all road types on the route. It increases the priority for roads with a recommended speed lower than the minimum speed.  
- **Maximum speed**  
    The setting sets the maximum driving speed and decreases the priority for roads with a possible speed higher than the maximum.


## Detailed Track Guidance {#detailed-track-guidance}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,detailed_track_guidance"/>*

![Attach to the roads 1](@site/static/img/navigation/gpx/detailed_track_guidance_1_andr.png)    ![Navigation Settings Android](@site/static/img/navigation/gpx/detailed_track_guidance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>* → *Detailed track guidance*

![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_1_ios.png)   ![Navigation Settings](@site/static/img/navigation/detailed_track_guidance_2_ios.png)

</TabItem>

</Tabs>

The **Detailed track guidance** feature improves the accuracy of route navigation when using **track-based routes**. When you select a track as the destination, you can enable the [Attach to the roads](../setup/gpx-navigation.md#attach-to-the-roads) setting from the [Follow track](../setup/gpx-navigation.md#follow-track-options) menu. This ensures the track is aligned with existing roads for smoother, more precise navigation.

There are two options for using *Detailed track guidance*:

- **<Translate android="true" ids="ask_every_time"/>** (*default settings*) – The *Attach to the roads* option will appear in the [Route Details](../setup/route-details.md) section each time a track-based route is calculated. This allows you to decide whether to apply road attachment for each navigation session.

- **<Translate android="true" ids="shared_string_always"/>** – The road attachment process will be applied automatically for every *navigation by track* route without requiring manual confirmation.

For more information on using track-based navigation, visit [Navigation by Track](../setup/gpx-navigation.md).


## Related Articles {#related-articles}

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](../setup/route-navigation.md)
- [Navigation by track](../setup/gpx-navigation.md)
- [Navigation by markers](../setup/markers-navigation.md)
- [Route details](../setup/route-details.md)
- [Map screen during navigation](./map-during-navigation.md)
- [Voice prompts / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in April 2025*
