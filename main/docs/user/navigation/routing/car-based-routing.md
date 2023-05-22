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

<InfoIncompleteArticle/>

## Overview

Car-based routing is designed to help drivers navigate efficiently, safely, and comfortably, by providing tailored directions that take into account the unique needs and preferences of each driver. The right routing settings can help drivers save time, and fuel, and avoid hazards on the road.  

:::info
The routing mechanism for ground vehicles differs only in a few settings. Common parameters are described in the [Car](#route-parameters---car) section of this article. [Truck](#route-parameters---truck) and [Motorcycle](#route-parameters---motorcycle) have their particularities.  
:::

Routing can be configured according to your needs in the [Route parameters section](../../navigation/guidance/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings of the corresponding profile (*Driving, Truck, Motorcycle*).  
## Route parameters - Car

Car routing is designed to help drivers find the most efficient and direct routes to their destinations. It takes into account common driving restrictions (one-way streets, ban on turns, pedestrian zones) and also helps avoid roads that are not suitable for cars, such as narrow roads or roads with weight limitations.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Car routing settings Android](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Car routing settings iOS 1](@site/static/img/navigation/routing/car_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road types from the list.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li>[<Translate android="true" ids="routing_attr_avoid_toll_name"/>](https://wiki.openstreetmap.org/wiki/Key:toll)</li><li>[<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_borders_name"/>](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dborder_control) (Avoid crossing a border into another country)</li><li>Avoid [ice roads](https://wiki.openstreetmap.org/wiki/Key:ice_road) (seasonal roads in cold regions that are laid upon frozen water) and [fords](https://wiki.openstreetmap.org/wiki/Tag:ford%3Dyes) (parts of a highway where a waterway runs over it) </li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li><li>[<Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/>](https://wiki.openstreetmap.org/wiki/Tag:boundary%3Dlow_emission_zone)</li><li>[<Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/>](https://wiki.openstreetmap.org/wiki/Proposed_features/shuttle_train) (car-carrying trains, that connect two places not easily accessible to each other by road)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>](https://wiki.openstreetmap.org/wiki/Key:4wd_only) (only suitable for 4WD vehicles)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> | For car routing it is assumed, that the surface of roads is [paved](https://wiki.openstreetmap.org/wiki/Key:surface), unless otherwise specified. |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>* (only&nbsp;car) |  <details><summary> Roads, that are closed for goods delivery, will be avoided. </summary>![Goods delivery Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| This option applies only to vehicles carrying goods, that weigh no more than 3.5 tonnes. If your vehicle weight is more than 3.5 tonnes, you should use the [Truck profile](#truck-routing-settings).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> | In most cases, the shortest route will be suggested. Often this route can take longer than if the setting was disabled |

Other routing settings:
- The routing algorithm can also take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#avoid-temporary-closures)* option. Note that in some cases, information from OSM can be outdated.
- In the [Recalculate route section](../setup/route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (iOS) should be set according to your vehicle parameters. They are used to determine whether the road can be used for routing.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

## Route parameters - Truck

:::note
By default, *Tuck profile* is deactivated. In order to use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Truck routing is similar to car routing, but is designed specifically for drivers of large commercial vehicles. It takes into account additional factors such as vehicle [height, weight, and width restrictions](../guidance/navigation-settings.md#size-parameters) and the possibility to transport hazardous materials (see table below). All other routing settings are identical to [car routing](#route-parameters---car).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Truck routing settings Android 2](@site/static/img/navigation/routing/routing_truck_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Truck routing settings iOS 2](@site/static/img/navigation/routing/truck_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="transport_hazmat_title"/>* | <details><summary> The transportation of hazardous materials on certain roads or tunnels may be prohibited by local authorities. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/hazards_andr.png) </details> | When enabled, the truck routing mechanism takes into account the OSM tag *[hazmat](https://wiki.openstreetmap.org/wiki/Key:hazmat)*. You can choose one of the five categories (A, B, C, D, E) of dangerous materials according to EU restrictions. |
|*<Translate android="true" ids="routing_attr_hazmat_category_name"/>* | <details><summary> Hazardous materials transportation rules in the USA differ from the EU. You can also consider them on the route. </summary> ![Transporting of hazardous materials Android](@site/static/img/navigation/routing/truck_hazmat_andr.png) </details> | Select one of the types (from 1 to 9) of dangerous materials according to the USA restrictions.  |

## Route parameters - Motorcycle

:::note
By default, *Motorcycle profile* is deactivated. In order to use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Motorcycle routing is designed to create the best possible route for motorcycle riders, taking into account their preferences (for example, you can prefer or avoid roads with poor road conditions).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Motorbicke routing settings Android 2](@site/static/img/navigation/routing/routing_moto_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Motorbicke routing settings iOS 2](@site/static/img/navigation/routing/motorcycle_routing_ios.png)

</TabItem>

</Tabs>
