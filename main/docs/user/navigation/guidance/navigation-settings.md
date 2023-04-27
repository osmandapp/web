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

![Navigation Settings Android](@site/static/img/navigation//navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings iOS](@site/static/img/navigation//navigation_settings_overview_ios.png)

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

You can find out how the map behavior changes during navigation in OsmAnd app in the article [Configure map screen](../guidance/map-during-navigation.md).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png)

</TabItem>
 
<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png)

</TabItem>

</Tabs>

## Animate own position

https://osmand.net/docs/user/navigation/guidance/map-during-navigation#animate-my-location


## Vehicle parameters


### Default speed / Road speeds 

- Used as a speed to estimate [arrival time](../../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed could not be determined by map data: 
    - pedestrian, boat, ski, airplain, ... profiles, 
    - roads without speed limits (can affect routing), 
    - user generated or imported tracks. 
- Used to determine how late/early voice announcements should be pronounced 
- [Details of Base Profile Default Speeds](../../../technical/algorithms/voice-prompt-triggering.md#base-profile-default-speeds) . 
- Affects speed formatting Unit of speed (Add link - general-settings). [For absolute speed](https://github.com/osmandapp/OsmAnd/issues/14338) >= 10 m/s - 1 digit formatting, < 10 m/s - 2 digit.  
- For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. 

#### Min/max speed (Road speeds)


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
Available six fuel types: *Petrol, Diesel, LPG, CNG, Electric, Hybrid*.


### Size parameters

Vehicle parameters affect navigation and route construction because they determine the availability of roads, bridges, ferries, dams, and other infrastructure. If the height, width, length, or weight of a vehicle exceeds the permissible values for certain road sections, the OsmAnd navigation system will find an alternative route to avoid obstacles along the way.  

- The units of measurement will correspond to the settings selected in *General settings → [Units & formats](../../personal/profiles.md#units--formats)*.
- The vehicle parameters can be set manually.
- If you manually select the vehicle measurement parameter, the application will offer you the closest value from the ready-made list. This is necessary to avoid errors and build the route more correctly.
- You can choose vehicle parameters from a ready-made list of sizes.
- Do not set the size, *None*, means that no restrictions on the selected parameter will be applied.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

#### [**<Translate android="true" ids="routing_attr_weight_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxweight)  

![Navigation Settings Android](@site/static/img/navigation//navigation_settings_weight_andr.png)   

Some possible vehicle weight limits may include:  
1. Limiting the maximum weight of a vehicle that can travel on a road or bridge.
2. Weight limits per vehicle axle can be especially important for trucks and buses.
3. Weight limits for vehicles traveling on certain road segments, such as those with low-capacity bridges or tunnels.
4. Weight limits for vehicles traveling in certain areas of cities or parks.
5. Weight limits for vehicles moving in certain conditions, such as high temperatures, rain, or snowy roads.

All of these restrictions can be important for navigation and should be considered when planning a route. If a vehicle's weight exceeds the limits, it may result in road safety, infrastructure damage, accidents fines, and other legal consequences. Therefore, drivers should carefully examine the route and make sure that the height of their vehicle meets the limits.  


#### [**<Translate android="true" ids="routing_attr_height_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxheight)  

![Navigation Settings Android](@site/static/img/navigation//navigation_settings_height_andr.png)  

Some possible restrictions on vehicle height may include:  
1. Limiting the maximum height of a vehicle that can travel on a road, under a bridge, or through a tunnel.
2. Height limits for vehicles traveling in certain areas of cities or parks.
3. Height restrictions for vehicles traveling on certain sections of roads, such as where there are low-height bridges or overpasses.
4. Height restrictions for vehicles traveling in certain conditions, such as high temperatures, rain, or snow-covered roads.  


#### [**<Translate android="true" ids="routing_attr_length_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxlength)   

![Navigation Settings Android](@site/static/img/navigation//navigation_settings_length_andr.png)   



#### [**<Translate android="true" ids="routing_attr_width_name"/> limit**](https://wiki.openstreetmap.org/wiki/Key:maxwidth)  

![Navigation Settings Android](@site/static/img/navigation//navigation_settings_width_andr.png)   


