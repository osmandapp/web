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

<InfoIncompleteArticle/>


## Overview

For successful navigation with the OsmAnd app, it's important to properly configure the appropriate settings according to your needs and depending on your mode of travel, whether it's by car, on foot, horseback riding, or skiing. This article describes the basic route parametrs, [Voice prompts](#voice-prompts), [Screen alerts](#screen-alerts), [Map behavior during navigation](#map-during-navigation), [Animation of your own position](#animate-own-position), and the [Appearance of route lines](#customize-route-line). In addition, vehicle settings are also detailed, such as [Default speed](#default-speed) and [Maximum/minimum speed](#road-speeds), [Engine type](#fuel-used-by-motor) for CO2 calculation, and [Size/weight](#size-parameters), which can also affect the route. Adjusting these settings will help you get the most out of using OsmAnd and reach your goal without too much effort or delay.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>


### How to open

This section presents the navigation settings necessary for calculating and plotting a route, which you can set for the selected profile. This menu includes settings for [Route preparation](../setup/route-navigation.md), the [Configure map screen](../guidance/map-during-navigation.md), and what you set in the *Navigation settings* directly affects the display of data in the [Route Details](../setup/route-details.md).

There are three ways to access the Navigation settings menu. 

- Go to the main *Menu → Settings*, select the required *Profile*, and tap *Navigation settings*.
- Tap the *Navigation* icon on the map screen, than select the *Settings icon → Navigation settings*.
- Go to the main *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.  

:::info
The default *Browse map* profile has no settings for navigation.  
:::


## Navigation Type

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_offline_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_type_online_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_type_ios.png)

</TabItem>

</Tabs>  

Navigation is an important part of a trip, and choosing *the right type* of navigation can make your journey much easier. Choosing the type of navigation can depend on how you travel and whether you have an Internet connection.  

**Online navigation** basically uses a special routing engine or website that allows the OsmAnd app to plot a route based on current information and other factors. You can read about how to choose the best route online in the article [*Online routing*](../routing/online-routing.md). This navigation type is only available for *Android version* of the app.  

**Offline navigation**, on the other hand, does not require internet access and offers a wider selection of [navigation types](../routing/index.md) that can be used to calculate a route. Among them, there are such as *bicycle, boat, car, on foot, ski*, and *straight line*. There are currently 13 basic types of routing, as well as an external [BRouter](../routing/brouter.md) routing type that provides additional routing opportunities.  

The navigation type determines which rules are used to calculate routes. If you need a specific type of navigation, you can **import your own modified *XML* routing file**. Read more about routing rules on our [GitHub page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing). And there is a separate article about XML format and how to use it, [Map Rendering style](../../../technical/osmand-file-formats/osmand-rendering-style.md), which can help you in creating a route file.  


## Route Parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_route-parameters_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/routing/cycling_routing_ios.png)

</TabItem>

</Tabs>  

**<Translate android="true" ids="route_parameters"/>** are settings that determine how the application will calculate a route to reach a destination, considering factors such as type of transport, routing priorities, route conditions, route complexity, and user preferences.   

For each [profile](../../personal/global-settings.md#default-profile), except for *Browse Map*, OsmAnd selects by default the optimal [Navigation type](#navigation-type) and the relevant [route parameters](../routing/index.md). However, you can choose any type you like and change the parameters depending on your preferences and the external conditions of the upcoming trip.  

All route parameters are described in detail in the corresponding sections of the documentation:  
*[Car routing (Truck, Motorcycle)](../routing/car-based-routing.md)*, *[Bicycle  routing (MTB)](../routing/bicycle-based-routing.md)*, *[Moped routing](../routing/moped-routing.md)*, *[Pedestrian routing](../routing/pedestrian-routing.md)*, *[Public Transport routing](../routing/public-transport-navigation.md)*, *[Horseback routing](../routing/horse-routing.md)*, *[Skiing routing](../routing/ski-routing.md)*, *[Boat routing](../routing/boat-navigation.md)*, *[Direct-to-point routing](../routing/direct-to-point-routing.md)*, *[Straight line routing](../routing/straight-line-routing.md)*, *[Online routing](../routing/online-routing.md)*, *[BRouter routing](../routing /brouter.md)*.  


### Recalculate route

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

The **Recalculation route** parameter is a setting that allows you to automatically change the suggested route if you deviate from it or if you drive in the opposite direction. In both cases, this setting helps you keep your direction and get to your destination without wasting time searching for a new route manually.

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="route_recalculation_dist_title"/> in case of deviation*  | <Translate android="true" ids="recalculate_route_distance_promo"/>  | If [Voice prompts](../guidance/voice-navigation.md#settings-of-voice-prompts) are turned on, OsmAnd will announce, that route is being recalculated. |
|  *Recalculate route in case of reverse direction*  | Your route will be recalculated if you move to the starting point.  |  When the setting is turned off, the movement to the starting point will not be considered as a deviation from the path (if it is performed along the calculated route).  |


### Development settings

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_development_andr.png)

The three parameters for advanced users in the **Development** section are only available for the *Android version* of the app and only if you have enabled the [*Development plugin*](../../plugins/development.md).  

| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows to use [OsmAnd Live updates](../../personal/maps.md#osmand-live) while routing. Note, that we recommend to use this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation. |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   


## Voice Prompts

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

A detailed description of the voice prompts settings is written in the first part of the article *[Voice prompts / Notifications](./voice-navigation.md)*.  

Audio instructions during navigation help you as a driver or pedestrian get to your destination while [navigating a selected route](../setup/route-navigation.md). They contain information about turns, driving directions, road signs, distances to your destination, and other factors that may affect your navigation.  

*Voice prompts* allow you to focus on the road and not be distracted by the map or navigation device. They also improve driving safety and reduce the time it takes to navigate in unfamiliar terrain, and can be useful for different [types of routes](../routing/index.md).


## Screen alerts

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_ios.png)

</TabItem>

</Tabs>  

This navigation setting allows you to enable the [*Alerts Widget*](../../widgets/nav-widgets.md#alert-widget) and select which alerts you want to see on the app screen while navigating. When you approach one of the available types of obstacles on the road, notifications appear in the lower-left corner of the map. If you configure the [*voice and text prompts*](../../navigation/guidance/voice-navigation.md) available in the OsmAnd app, you'll have a more comfortable and safer trip. The appearance and timing of the prompts depend on your speed settings. You can find them [here](../../../technical/algorithms/voice-prompt-triggering.md).  
The behavior of *Screen Alerts* is also affected by the [*Show points along the route*](../../navigation/guidance/map-during-navigation.md#show-points-along-the-route) setting.

You can turn alerts on and off such as:
- [**Traffic warnings**](https://wiki.openstreetmap.org/wiki/Key:hazard#Traffic_hazards)
- [**Pedestrian crossings**](https://wiki.openstreetmap.org/wiki/Tag:crossing%3Duncontrolled)
- [**Speed cameras**](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dspeed_camera). For more information about the Speed cameras setting in OsmAnd, read [Alert Types](../../widgets/nav-widgets.md#alert-types) and the article *Global settings*, section [Legal](../../personal/global-settings.md#legal).
- [**Tunnels**](https://wiki.openstreetmap.org/wiki/Key:hazmat#Tunnel_restrictions)

The types of warnings have the different visual appearance, which depends on the driving region. OsmAnd does not aspire to present 100% identical road signs but indicates some similarities.  


## Map during navigation 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-3_andr.png)  

The **map is used during navigation** to determine your location, plan your route, and land orientation. During navigation, you can view the map with *auto-center*, move it around, and *zoom in and out* to see the required area. The map can also display markers indicating points of interest, routes, weather conditions, road signs, and other objects that can help you navigate. The map can be updated in *real-time* and displays *up-to-date information* that can affect route planning.

You can find out how the map behavior changes during navigation in OsmAnd app in the article [Configure map screen](../guidance/map-during-navigation.md).  


## Animate own position

This setting is located in different places in the OsmAnd app for the Android version and for the iOS version. Android - in the menu *General Settings → Other*. iOS - in the *Navigation settings*. For more information, see the article *Configure map screen*, section [Animate my location](../../navigation/guidance/map-during-navigation.md#animate-my-location).  

![Navigation Settings Android](@site/static/img/navigation/navigaton_settings_animate-own-position_ios.png)  


## Customize route line

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation Settings](@site/static/img/navigation/navigation_settings_route-line_ios.png)

</TabItem>

</Tabs>  

With the **Customise Route Line** setting you can choose the appearance of the route line that will be visible on the map during navigation. You can choose the *color*, the *width of the line*, and the display of the *turn arrows* on it. For each profile, you can choose a different line view. All these parameters are described in detail in the article *Configure map screen* in the section [*Route line appearance*](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


## Vehicle parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_vehicle-parameters_ios.png) 

</TabItem>

</Tabs>  

For optimal route calculation in OsmAnd, you should consider the following vehicle parameters:
1. Set the [*Default Speed* or *Road Speeds*](#default-speed--road-speeds), as the [minimum and maximum speed](#road-speeds) of the vehicle. This will help the application determine the time required to complete the route and allow it to choose the best route, considering the speed limits on different road segments.
2. Specify the [*type*](#fuel-used-by-motor) of fuel used by the motor. This will allow the app to estimate CO2 emissions.
3. Define the [*size and weight parameters*](#size-parameters) of your vihicle, which can help the app to calculate the optimal route and avoid obtacles on the road due to restrictions.

Correctly setting the parameters in the OsmAnd app will help you avoid problems when navigating a route, choose the most suitable one according to the type of vehicle and road restrictions, and calculate the time for your trip.


### Default speed / Road speeds 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)   ![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_ios.png)

</TabItem>

</Tabs>  

For all types of navigation the minimum and maximum allowable speed, both by default and by road, can be different, according to certain values ([Default speed limits](https://wiki.openstreetmap.org/wiki/Default_speed_limits)) and restrictions for vehicles. The speed is also set in certain increments to make the application settings maximum usable. For the "Walking", "Horseback riding" and "Cycling" profiles, in small increments equivalent to 0.1 km/h ([Units & formats](https://osmand.net/docs/user/personal/profiles#units--formats)), and for the other profiles, in increments equivalent to 1 km/h.  
Speed settings are used to determine when [voice announcements](../guidance/voice-navigation.md) are activated. 

These parameters are used as speed to estimate the [arrival time](../../widgets/nav-widgets.md#arrival-time-or-time-to-go) when the speed cannot be determined from the map data:
- for the selected profile;
- if the used roads have no speed limits, which can also affect the routing;
- if user generated or imported tracks are selected.   


#### Default speed 

The *Default speed* is the preset movement speed. It is used to calculate the arrival time and determine the optimal route based on the movement speed that the application considers typical for this mode of transport. For example, car, public transport, pedestrian, or the speed you set manually.


#### Road speeds

The **Minimum speed** setting sets the minimum driving speed for all road types on the route. It increases the priority for roads with a recommended speed lower than the minimum speed.  
The **Maximum speed** setting sets the maximum driving speed and decreases the priority for roads with a possible speed higher than the maximum.


### Fuel used by motor

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_settings_fuel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_settings_fuel_ios.png)

</TabItem>

</Tabs>


If you select the engine type in the vehicle parameters, the CO2 footprint data will be displayed above the graph in [Route Details](../setup/route-details.md).
Available six fuel types: ***Petrol, Diesel, LPG, CNG, Electric, Hybrid***.  

CO2 is a gas that is produced when fuel is burned in an engine. The amount of CO2 emitted by an engine depends on the type of fuel and its combustion efficiency.  

- Internal combustion engines, such as ***patrol*** and ***diesel*** engines, calculate CO2 emissions based on the amount of fuel burned during combustion. In general, patrol engines emit less CO2 than diesel engines due to more efficient combustion.
- Liquefied ***natural gas (LPG)*** and ***compressed natural gas (CNG)*** are also used to run internal combustion engines. They are considered more environmentally friendly than patrol or diesel because they emit less CO2 when burned. 
- When ***electric*** motors are used, there are no CO2 emissions directly at the point of use. However, electricity can be produced from sources such as gas, coal or nuclear fuel, resulting in CO2 emissions during the electricity production phase.
- ***Hybrid*** cars use both internal combustion engines and electric motors. CO2 emissions depend on which type of engine is used at the time.  

:::note
The *Fuel used by motor* setting is only available in navigation types such as *[Car, Motorcycle, and Truck](../../navigation/routing/car-based-routing.md)*.
:::

### Size parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_sizes2_ios.png) 

</TabItem>

</Tabs>

Vehicle parameters affect navigation and route construction because they determine the availability of roads, bridges, ferries, dams, and other infrastructure. If the height, width, length, or weight of a vehicle exceeds the permissible values for certain road sections, the OsmAnd navigation system will find an alternative route to avoid obstacles along the way.  

- The units of measurement will correspond to the settings selected in *General settings → [Units & formats](../../personal/profiles.md#units--formats)*.
- The vehicle parameters can be set manually.
- If you manually select the vehicle measurement parameter, the application will offer you the closest value from the ready-made list. This is necessary to avoid errors and build the route more correctly.
- You can choose vehicle parameters from a ready-made list of sizes.
- Do not set the size, *None*, means that no restrictions on the selected parameter will be applied.  

#### Limits

**1.** [**<Translate android="true" ids="routing_attr_weight_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxweight) - <Translate android="true" ids="weight_limit_description"/> The Weight parametr is only available in navigation types such as [*Car, Truck*, and *Motorcycle*](../../navigation/routing/car-based-routing.md).   

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_weight_andr.png)   

**2.**  [**<Translate android="true" ids="routing_attr_height_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxheight) - <Translate android="true" ids="height_limit_description"/> The Height parametr is only available in navigation types such as *[Car, Truck, Motorcycle](../../navigation/routing/car-based-routing.md)*, and *[Boat](../../navigation/routing/boat-navigation.md)*.       

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_height_boat_andr.png)  

**3.** [**<Translate android="true" ids="routing_attr_length_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxlength) - <Translate android="true" ids="lenght_limit_description"/> The Length parametr is only available in navigation types such as [*Car, Truck*, and *Motorcycle*](../../navigation/routing/car-based-routing.md).   

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_length_andr.png)   

**4.** [**<Translate android="true" ids="routing_attr_width_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxwidth) - <Translate android="true" ids="width_limit_description"/> The Width parametr is only available in navigation types such as *[Car, Truck, Motorcycle](../../navigation/routing/car-based-routing.md)*, and *[Boat](../../navigation/routing/boat-navigation.md)*.     

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_andr.png)
![Navigation Settings Android](@site/static/img/navigation/navigation_settings_width_boat_andr.png)     


Limits on vehicle parameters can be important for navigation and road safety. Some of these restrictions may include:  

1. Restrictions on vehicles moving in certain urban areas.  
2. Restrictions on the movement of vehicles on certain sections of road, such as where there are bridges, tunnels with limited space, low elevation overpasses, complex turns, or other structures.  
3. Weight limits per vehicle axle can be especially important for trucks.
4. Restrictions for vehicles moving in certain conditions, such as high temperatures, wet or snowy roads, at night, or in weather conditions with limited visibility.

All of these restrictions can be important for navigation and should be considered when planning a route. If a vehicle's exceeds the limits, it may result in road safety, infrastructure damage, accidents fines, and other legal consequences. Therefore, drivers should carefully examine the route and make sure that the height of their vehicle meets the limits.  

