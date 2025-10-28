---
sidebar_position: 2
title:  Car routing (Truck, Motorcycle)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview {#overview}

Car-based routing is designed to help drivers navigate the roads efficiently, safely, and comfortably, by providing customized directions tailored to each driver's unique needs and preferences. Proper routing settings can help drivers save time and fuel, and avoid hazards on the road. The fastest routing is offered by default.

:::info
The routing mechanism for motorized ground vehicles differs only in a few settings. The common parameters are described in the [Car](#route-parameters---car) section of this article. [Truck](#route-parameters---truck) and [Motorcycle](#route-parameters---motorcycle) have their own particularities.  
:::

Routing can be configured according to your needs in the [Route parameters section](../../navigation/guidance/navigation-settings.md#route-parameters) of the Navigation settings of the corresponding profile (*Driving, Truck, Motorcycle*).  


## Route Parameters - Car {#route-parameters---car}

Car routing is designed to help drivers find the most efficient and direct routes to their destinations. It takes into account common driving restrictions, such as one-way streets, ban on turns, pedestrian zones, and also helps avoid roads that are not suitable for cars, such as narrow roads or roads with weight limitations.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Car routing settings iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road types from the list.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll).</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface).</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Avoid crossing a border into another country).</li><li>Avoid [ice roads](https://wiki.openstreetmap.org/wiki/Key:ice_road) (seasonal roads in cold regions that are laid upon frozen water) and [fords](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parts of a highway where a waterway runs over it). </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water).</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway).</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone).</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (car-carrying trains, that connect two places not easily accessible to each other by road).</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel).</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (only suitable for 4WD vehicles).</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | For car routing it is assumed, that the surface of roads is [paved](https://wiki.openstreetmap.org/wiki/Key:surface), unless otherwise specified. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (only&nbsp;car) |  <details><summary> Roads, that are closed for goods delivery, will be avoided. </summary>![Goods delivery Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| This option applies only to vehicles carrying goods, that weigh no more than 3.5 tonnes. If your vehicle weight is more than 3.5 tonnes, you should use the [Truck profile](#route-parameters---truck).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | To calculate a fuel-efficient route, the routing engine limits speed internally to 60 km/h, it doesn't change Estimated Time of Arrival though. So in case of 2 same start-end routes: motorway (120 km/h) and minor (60 km/h) - shorter route will be selected. For the service roads that have a speed limit < 60 km/h, faster route will be selected. |


## Route Parameters - Truck {#route-parameters---truck}

:::note
By default, *Tuck profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Truck routing is similar to car routing, but is designed specifically for drivers of large commercial vehicles. It considers additional factors such as vehicle [height, width, weight limits, max axle load, and max weight at full load restrictions](../guidance/vehicle-parameters.md#size-parameters) and the possibility to transport hazardous materials (check table below). All other routing settings are identical to [car routing](#route-parameters---car).  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Truck routing settings Android 2](@site/static/img/navigation/routing/routing_truck_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,route_parameters"/>*

![Truck routing settings iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="transport_hazmat_title"/>* (for **EU region**) | <details><summary> Local authorities may forbid the transportation of hazardous materials on some roads or tunnels. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_hazmat_andr.png) </details> | When enabled, the truck routing mechanism takes into account the OSM tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. You can choose one of the five categories (*A, B, C, D, E*) of dangerous materials according to **EU restrictions**. |
| *<Translate android="true" ids="dangerous_goods"/>* (only if **USA region** is selected) | <details><summary> Hazardous materials transportation rules in the USA differ from the EU. Displayed only if the Driving Region is set to US. You can select multiple classes. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/routing_truck_dangerous_goods_andr.png) </details> | Select one of the types (from 1 to 9) of dangerous materials according to the [**USA restrictions**](https://www.iafc.org/topics-and-tools/hazmat/fusion-center/transportation-commodities/dot-hazard-classification-system). Transportation of hazardous materials is forbidden on some roads and tunnels. <ul><li>1. *Explosives* </li><li> 2. *Gases* </li><li> 3. *Flammable Liquids* </li><li> 4. *Flammable Solids* </li><li> 5. *Oxidizing Agents and Organic Peroxides* </li><li> 6. *Toxic and Infectious Substances* </li><li> 7. *Radioactive Substances* </li><li> 8. *Corrosive Substances* </li><li> 9. *Miscellaneous* </li></ul> |


## Route Parameters - Motorcycle {#route-parameters---motorcycle}

:::note
By default, *Motorcycle profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Motorcycle routing is the process of creating a route specifically optimized for motorcycle travel. This type of routing takes into account the unique needs and preferences of motorcyclists, providing the best possible riding conditions. Routes are laid out taking into account a number of parameters such as choice of road surface ( for example, poor road conditions can be preferred or avoided), avoidance of traffic jams, accessibility of infrastructure or safety.

