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

For a comfortable navigation experience, you need to configure the OsmAnd app according to your needs and vehicle configuration. The Navigation settings contain information about basic route settings, voice prompts, screen alerts, the map during navigation, and vehicle settings to help you improve your route on the road.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>


### How to open

In this section, you can read about all the navigation settings (routing, vehicle, navigation parameters, voice prompts, and how the map looks while moving) that can be set for a profile. 

There are three ways to access the Navigation settings menu. 

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2"/>*.  
- *Navigation button → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
There are no navigation settings in *Browse map* profile.  
:::


## Navigation Type

<Translate android="true" ids="select_nav_profile_dialog_message"/>  

#### Offline navigation type

![Navigation Type](@site/static/img/navigation/navigation_type.png)  

#### Online navigation type

For information about routing online, see this [article](../routing/online-routing.md). 
  

## Route Parameters

For each profile (except *Browse map*) can be chosen [routing type](../routing/index.md).

Route parameters can be reached through:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2,route_parameters"/>*.  
  
You can also tune routing rules while building navigation to your destination:
- *Navigation button → <Translate android="true" ids="shared_string_settings,routing_settings_2,route_parameters"/>* 
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2,route_parameters"/>*.

:::note
The most important routing parameters can also be found in *Navigation menu* in settings section:
- *Navigation button → <Translate android="true" ids="shared_string_settings"/>*  
-  *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings"/>*
:::

:::info
There are no navigation settings in *Browse map* profile.  
:::


- **<Translate android="true" ids="nav_type_hint"/>** determines how routes are calculated. For example, your bicycle profile has a Cycling navigation type, which set the routing rules. You can import these roules (as routing.xml file) in OsmAnd. More about routing you can read on our [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) page.&nbsp;  

- **<Translate android="true" ids="route_parameters"/>** controls which parameters will be used during routing (this is the process of selecting a route for navigation). 


### How to open


## Voice Prompts

Main article -  **[Voice prompts / Notifications](./voice-navigation.md)**.  

Voice prompts is feature used to help you while [navigating a selected route](../setup/route-navigation.md). With its help, you can easily know where you are or in which direction you should go next. The main function of these features is to provide you with comfortable and safe movement on the route. And also their use significantly reduces battery consumption, which can be useful for different [types of routes](../routing/index.md), where saving battery power is important. 


## Screen alerts


<!-- [Screen alerts](./map-during-navigation.md#screen-alerts) combines multiple type of alerts that are displayed in the lower left corner during navigation. There are options to turn on and off specific alerts such as: Traffic warnings, Pedestrian crosswalks, Speed cameras, Tunnels. Alert types have different visuals that depends on Driving region which could be configured in *Settings → General settings*. OsmAnd does not have a goal to represent 100% identical road signs but to indicate some similarities. -->

[Screen alerts](./map-during-navigation.md#screen-alerts) combine several types of alerts that appear in the lower left corner while you are navigating. You can turn certain alerts on and off, such as warnings for traffic, crosswalks, speed cameras, and tunnels. The types of alerts have different visual appearance, which depends on the driving region and can be configured in *Settings → General Settings*. OsmAnd does not strive to present 100% identical road signs, but points out some similarities.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Notifications, such as traffic warnings or speed limits, will appear on the screen as a widget. They appear in the bottom left corner while you are navigating. | [Types of alert widgets](../../widgets/nav-widgets.md#alert-widget)   |  


## Map during navigation 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

</TabItem>

</Tabs>

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-1_andr.png)   ![Navigation Settings Android](@site/static/img/navigation/navigation_settings_map-during-2_andr.png)  

The map is used during navigation to determine your location, plan your route, and navigate your way around. During navigation, you can view the map with auto-center, move it around, and zoom in and out to see the required area. The map can also display markers indicating points of interest, routes, weather conditions, road signs, and other objects that can help you navigate. The map can be updated in real-time and displays up-to-date information that can affect route planning.

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

With the Customise Route Line setting you can choose the appearance of the route line that will be visible on the map during navigation. You can choose the color, the width of the line, and the display of the turn arrows on it. For each profile, you can choose a different line view. All these parameters are described in detail in the article *Configure map screen* in the section [*Route line appearance*](../../navigation/guidance/map-during-navigation.md#route-line-appearance).


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
1. Set the [*Default Speed* or *Road Speeds*](#default-speed--road-speeds), as the [minimum and maximum speed](#road-speeds) of the vehicle. This will help the application determine the time required to complete the route and allow it to choose the best route, taking into account the speed limits on different road segments.
2. Specify the [*type*](#fuel-used-by-motor) of fuel used by the motor. This will allow the app to estimate CO2 emissions.
3. Define the [*size and weight parameters*](#size-parameters) of your vihicle, which can help the app to calculate the optimal route and avoid obtacles on the road due to restrictions.

Correctly setting the parameters in the OsmAnd app will help you avoid problems when navigating a route, choose the most suitable one according to the type of vehicle and road restrictions, and calculate the time for your trip.


### Default speed / Road speeds 

- Used as a speed to estimate [arrival time](../../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed could not be determined by map data: 
    - pedestrian, boat, ski, airplain, ... profiles, 
    - roads without speed limits (can affect routing), 
    - user generated or imported tracks. 
- Used to determine how late/early voice announcements should be pronounced 
- [Details of Base Profile Default Speeds](../../../technical/algorithms/voice-prompt-triggering.md#base-profile-default-speeds) . 
- Affects speed formatting Unit of speed (Add link - general-settings). [For absolute speed](https://github.com/osmandapp/OsmAnd/issues/14338) >= 10 m/s - 1 digit formatting, < 10 m/s - 2 digit.  
- For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. 


#### Default speed

#### Road speeds

Min and Max speed


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

