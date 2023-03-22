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

## Navigation Type / Route Parameters

For each profile (except *Browse map*) can be chosen routing type.

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

## Voice Prompts

Links to Voice prompts

## Screen alerts

Links to Screen alerts

## Map during navigation 

Links to Map during navigation

## Vehicle parameters


### Default speed

- Used as a speed to estimate [arrival time](./../widgets/nav-widgets.md#arrival-time-or-time-to-go) when speed could not be determined by map data: 1) pedestrian, boat, ski, airplain, ... profiles 2) roads without speed limits (can affect routing) 3) user generated or imported tracks. 
- Used to determine how late/early voice announcements should be pronounced 
- [details](./../../technical/algorithms/voice-prompt-triggering.md#base-profile-default-speeds). 
- Affects speed formatting Unit of speed (Add link - general-settings). [For absolute speed](https://github.com/osmandapp/OsmAnd/issues/14338) >= 10 m/s - 1 digit formatting, < 10 m/s - 2 digit.  
- For Walking, Horseback Riding and Cycling profiles the speed is set in small steps of 0.1 km/h, for other profiles in steps of 1 km/h. |

### Min/max speed (Road speeds)


### Fuel used by motor

If you select the engine type in the vehicle parameters, the CO2 footprint data will be displayed above the graph in [Route Details](./route-navigation.md#route-details).
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

