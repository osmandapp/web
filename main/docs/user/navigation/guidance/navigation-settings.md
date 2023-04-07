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

For a comfortable navigation experience, you need to customize the OsmAnd app to meet your needs and the parameters of your vehicle. The Navigation settings contain information about basic route settings, voice prompts, screen alerts, the map during navigation, and vehicle settings to help you optimize your route on the road.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Navigation Settings Android](@site/static/img/personal/profiles/profile_navigation_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

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



## Voice Prompts

Main article -  **[Voice prompts / Notifications](./voice-navigation.md)**.  

Voice prompts is feature used to help you while [navigating a selected route](../setup/route-navigation.md). With its help, you can easily know where you are or in which direction you should go next. The main function of these features is to provide you with comfortable and safe movement on the route. And also their use significantly reduces battery consumption, which can be useful for different [types of routes](../routing/index.md), where saving battery power is important. 


## Screen alerts

[Screen alerts](./map-during-navigation.md#screen-alerts) combines multiple type of alerts that are displayed in the lower left corner during navigation. There are options to turn on and off specific alerts such as: Traffic warnings, Pedestrian crosswalks, Speed cameras, Tunnels. Alert types have different visuals that depends on Driving region which could be configured in *Settings → General settings*. OsmAnd doesn't have a goal to represent 100% identical road signs but to indicate some similarities.

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

If you select the engine type in the vehicle parameters, the CO2 footprint data will be displayed above the graph in [Route Details](../setup/route-details.md).
Available six fuel types: *Petrol, Diesel, LPG, CNG, Electric, Hybrid*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios-2.png)

</TabItem>

</Tabs>

### Size parameters

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parameter | Description | 
|:------------|:---------------|
| <Translate android="true" ids="routing_attr_weight_name"/>   | <Translate android="true" ids="weight_limit_description"/>   |
| <Translate android="true" ids="routing_attr_height_name"/>  | <Translate android="true" ids="height_limit_description"/>   |
| <Translate android="true" ids="routing_attr_length_name"/>  | <Translate android="true" ids="lenght_limit_description"/>   |
| <Translate android="true" ids="routing_attr_width_name"/> | <Translate android="true" ids="width_limit_description"/>   |

