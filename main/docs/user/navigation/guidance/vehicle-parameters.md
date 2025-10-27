---
sidebar_position: 4
title:  Vehicle parameters
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


## Overview

<Tabs groupId="operating-systems" queryString="current-os">

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

1. Set the [*Default Speed* or *Road Speeds*](#road-speeds), as the [minimum and maximum speed](#road-speeds) of the vehicle. This will help the application determine the time required to complete the route and allow it to choose the best route, considering the speed limits on different road segments.
2. Specify the [*type*](#fuel-used-by-motor) of fuel used by the motor. This will allow the app to estimate CO2 emissions.
3. Enter the [*capacity of your tank*](#fuel-tank-capacity) to accurately track your fuel level and consumption.
4. Define [*size and weight parameters*](#size-parameters) of your vehicle, which can help the app calculate the optimal route and avoid obstacles on the road due to restrictions.

Correctly setting the parameters in the OsmAnd app will help you avoid problems when navigating a route, choose the most suitable one according to the type of vehicle and road restrictions, and calculate the time for your trip.


## Size Parameters {#size-parameters}

<Tabs groupId="operating-systems" queryString="current-os">

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

### Limits {#limits}

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

**5.** [**Max axle load limit**](https://wiki.openstreetmap.org/wiki/Key:maxaxleload) - Provide your vehicle’s maximum axle load to avoid roads and bridges with axle weight restrictions. This parameter is only available in navigation types such as [*Truck*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/max_axle_load.png)

**6.** [**Max weight at full load**](https://wiki.openstreetmap.org/wiki/Key:maxweightrating) - Provide your vehicle’s maximum total weight when fully loaded to avoid roads and bridges with overall weight restrictions. This parameter is only available in navigation types such as [*Truck*](../../navigation/routing/car-based-routing.md).  

![Navigation Settings Android](@site/static/img/navigation/max_weight_at_full_load.png)

Limits on vehicle parameters can be important for navigation and road safety. Some of these restrictions may include:  

1. Restrictions on vehicles moving in certain urban areas.  
2. Restrictions on vehicle movement on specific sections of road, such as where there are bridges, tunnels with limited space, low elevation overpasses, complex turns, or other structures.  
3. Weight limits per vehicle axle can be especially important for trucks.
4. Restrictions for vehicles moving in certain conditions, such as high temperatures, wet or snowy roads, at night, or in weather conditions with limited visibility.


## Fuel parameters {#fuel-parameters}

### Fuel Used by Motor {#fuel-used-by-motor}

<Tabs groupId="operating-systems" queryString="current-os">

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


### Fuel tank capacity {#fuel-tank-capacity}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_tank_ios.png)

</TabItem>

</Tabs>


The **Fuel tank capacity** parameter allows you to track your vehicle's [fuel level](../../widgets/info-widgets.md#vehicle-metrics-widgets) and [consumption](../../widgets/info-widgets.md#vehicle-metrics-widgets) more accurately by providing the total volume of your tank. Default value is ~50 ***liters***. The unit of measurement for fuel capacity is determined by the [Profile (Settings)](../..//personal/profiles.md#units--formats) configured in *Menu → Configure profile → General settings → Units & Formats → Unit of volume*.

**Applicability:**

The **Fuel tank capacity** setting is only available in vehicle-based navigation. For navigation types such as *Bicycle*, *Horseback riding*, *On foot*, and *Ski*, this parameter is not displayed in the Vehicle Parameters.

## Speed parameters

### Default Speed {#default-speed}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds_ios.png)

</TabItem>

</Tabs>  

The **Default speed** is the default movement speed for this mode of transport ([Default speed limits](https://wiki.openstreetmap.org/wiki/Default_speed_limits)). For the *Walking*, *Horseback riding* and *Cycling* profiles, in small increments equivalent to 0.1 km/h (mph) ([Units & formats](https://osmand.net/docs/user/personal/profiles#units--formats)), and for the other profiles, in increments equivalent to 1 km/h (1 mph). It is used:
- To estimate the [route time](../../widgets/nav-widgets.md#time-to-intermediate) when speed cannot be determined from the roads like [GPX Navigation](../setup/gpx-navigation.md), [Ski routes](../routing/ski-routing.md), [Boat routes](../routing/boat-navigation.md), [Pedestrian](../routing/pedestrian-routing.md) and other similar profiles.
- To determine when [voice announcements](../guidance/voice-navigation.md) are activated.
- To determine ETA for Map markers by a straight line navigation if average speed is not calculated yet.



 It is used to calculate the arrival time and determine the optimal route based on the movement speed that the application considers typical. For example, car, public transport, pedestrian, or the speed you set manually.


### Road Speeds {#road-speeds}


![Navigation Settings](@site/static/img/navigation/navigation_settings_speeds-r_andr.png)

For some types of navigation the minimum and maximum allowable speed could be set. If it's set than routing engine assumes that vehicle or transportation mode won't move faster the limit and won't move slower than minimal speed. 
For example, it allows to create an **fuel efficient** route where fuel consumption is optimal at **maximum speed** set and the egnine will find shorter route avoiding longer but faster roads.

- **Minimum speed**  
    The setting sets the minimum driving speed for all road types on the route. It increases the priority for roads with a recommended speed lower than the minimum speed.  
- **Maximum speed**  
    The setting sets the maximum driving speed and decreases the priority for roads with a possible speed higher than the maximum.




## Related Articles {#related-articles}

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Navigation settings](./navigation-settings.md)
- [Voice prompts / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)


