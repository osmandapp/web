---
sidebar_position: 2
title:  Car based routing (Truck, Motorcycle, Car)
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

### Overview

[Car](#car-routing-features), [truck](#truck-routing-features), and [motorcycle](#motorcycle-routing-features) routing features are designed to help drivers navigate efficiently, safely, and comfortably, by providing tailored directions that take into account the unique needs and preferences of each driver. This can help drivers save time, fuel, and avoid hazards on the road.

### Car routing settings

Car routing takes into account road types, speed limits, and other driving restrictions (one-way streets, ban on turns, etc.). It is designed to help drivers find the most efficient and direct routes to their destinations. It also helps avoid roads that are not suitable for cars, such as narrow roads or roads with weight restrictions.  
Car routing can be configured according to your needs in [Navigation settings](../../navigation/#navigation-settings) of the Driving profile (*Settings - Profiles - Driving - Navigation settings - Route parameters*).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Car routing settings Android 1](@site/static/img/navigation/routing/routing_car_settings_andr_1.png) ![Car routing settings Android 2](@site/static/img/navigation/routing/routing_car_settings_andr_2.png)

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road types from the list.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_avoid_roads_andr.png) </details>       | <ul><li><Translate android="true" ids="routing_attr_avoid_toll_name"/></li><li><Translate android="true" ids="routing_attr_avoid_unpaved_name"/></li><li><Translate android="true" ids="routing_attr_avoid_borders_name"/></li><li><Translate android="true" ids="routing_attr_avoid_ice_roads_fords_name"/></li><li><Translate android="true" ids="routing_attr_avoid_ferries_name"/></li><li><Translate android="true" ids="routing_attr_avoid_motorway_name"/></li><li><Translate android="true" ids="routing_attr_avoid_low_emission_zone_name"/></li><li><Translate android="true" ids="routing_attr_avoid_shuttle_train_name"/></li><li><Translate android="true" ids="routing_attr_avoid_tunnels_name"/></li><li><Translate android="true" ids="routing_attr_avoid_4wd_only_name"/>(only suitable for 4WD vehicles)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* |  <Translate android="true" ids="routing_attr_driving_style_prefer_unpaved_description"/> |   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  <Translate android="true" ids="routing_attr_allow_private_description"/>  |    |
| *<Translate android="true" ids="routing_attr_goods_restrictions_name"/>*  |  <details><summary> Roads, that are closed for goods delivery will be avoided. </summary>![Goods delivery Android](@site/static/img/navigation/routing/goods_delivery_andr.png) </details>| This option applies only for vehicles carrying goods, that weigh no more than 3.5 tonnes. If your vehicle weight is more than 3.5 tonnes, you should use [Truck profile](#truck-routing-settings).   |
| *<Translate android="true" ids="routing_attr_short_way_name"/>* | <Translate android="true" ids="routing_attr_short_way_description"/> |  |
| *<Translate android="true" ids="temporary_conditional_routing"/>* |  You can use temporaty limitations from OpenStreetMap for routing.  |    |
| *<Translate android="true" ids="route_recalculation_dist_title"/>* | <details><summary> <Translate android="true" ids="select_distance_route_will_recalc"/>  </summary>![Avoid roads Android](@site/static/img/navigation/routing/car_recalculate_route_andr.png) </details>        |   |
| *<Translate android="true" ids="in_case_of_reverse_direction"/>*  | If enabled, your route will be recalculated if you move to the starting point.  |   |
| *<Translate android="true" ids="use_live_routing"/>*  | You can use OsmAnd Live updates for navigation.  |   |
| *<Translate android="true" ids="use_two_phase_routing"/>  | You can use <Translate android="true" ids="complex_routing_descr"/> |   |
| *<Translate android="true" ids="use_fast_recalculation"/> | <Translate android="true" ids="use_fast_recalculation_desc"/>  |   |


</TabItem>

<TabItem value="ios" label="iOS">

![Car routing settings iOS 1](@site/static/img/navigation/routing/routing_car_settings_ios_1.png) ![Car routing settings iOS 2](@site/static/img/navigation/routing/routing_car_settings_ios_2.png)

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate ios="true" ids="recalculate_route"/>* |  <details><summary> <Translate ios="true" ids="route_recalculation_descr"/> </summary>![Recalculate route iOS](@site/static/img/navigation/routing/car_recalculate_ios.png) </details>  | You can select the distance from 10 m up to 1.5 km (or from 30 ft up to 1 mi) |
| *<Translate ios="true" ids="recalculate_wrong_dir"/>*  |  The route will be recalculated if you move to the starting point.   |              |
| *<Translate android="true" ids="fast_route_mode"/>* |  Enable to calculate the fastest route or disable for fuel-saving route.   |              |
| *<Translate ios="true" ids="impassable_road"/>* | <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose a type(s) from the list.  </summary>![Avoid roads iOs](@site/static/img/navigation/routing/car_avoid_roads_ios.png) </details>    | <ul><li><Translate ios="true" ids="routing_attr_avoid_toll_name"/></li><li><Translate ios="true" ids="routing_attr_avoid_low_emission_zone_description"/></li><li><Translate ios="true" ids="routing_attr_avoid_unpaved_name"/></li><li><Translate ios="true" ids="routing_attr_avoid_ferries_name"/></li><li>Avoid 4WD roads (only suitable for 4WD vehicles)</li><li><Translate ios="true" ids="routing_attr_avoid_tunnels_description"/></li><li><Translate ios="true" ids="routing_attr_avoid_borders_name"/></li><li><Translate ios="true" ids="routing_attr_avoid_shuttle_train_name"/></li><li><Translate ios="true" ids="routing_attr_avoid_ice_roads_fords_name"/></li><li><Translate ios="true" ids="routing_attr_avoid_motorway_name"/></li></ul>|
| *<Translate ios="true" ids="routing_attr_allow_private_name"/>* |  Ignore private access restrictions for routing.  |    |
| *<Translate ios="true" ids="routing_attr_goods_restrictions_name"/>*  |  <details><summary> Roads, that are closed for goods delivery will be avoided. </summary>![Goods delivery iOS](@site/static/img/navigation/routing/goods_delivery_ios.png) </details>| This option applies only for vehicles carrying goods, that weigh no more than 3.5 tonnes. If your vehicle weight is more than 3.5 tonnes, you should use [Truck profile](#truck-routing-settings).   |
| *<Translate ios="true" ids="prefer_in_routing_title"/>* |  <details><summary> <Translate ios="true" ids="routing_attr_driving_style_prefer_unpaved_description"/>  </summary>![Prefere iOS](@site/static/img/navigation/routing/car_prefer_ios.png) </details> |    |
| *<Translate ios="true" ids="consider_limitations_param"/>* |  You can use temporaty limitations from OpenStreetMap for routing.  |    |
| *<Translate ios="true" ids="road_speeds"/>* |  You can set the minimum and the maximum travel speeds for all roads in the route.  |    |

</TabItem>

</Tabs>

### Truck routing settings

Truck routing is similar to car routing, but is designed specifically for drivers of large commercial vehicles. It takes into account additional factors such as vehicle height, weight, and width restrictions, as well as information about road types and inclines that may be difficult for trucks to navigate. This helps truck drivers find the most suitable and efficient routes to their destinations, while avoiding roads that may be unsafe or inaccessible for their vehicles.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Truck routing settings Android 1](@site/static/img/navigation/routing/routing_truck_settings_andr_1.png) ![Truck routing settings Android 2](@site/static/img/navigation/routing/routing_truck_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Truck routing settings iOS 1](@site/static/img/navigation/routing/routing_truck_settings_ios_1.png) ![Truck routing settings iOS 2](@site/static/img/navigation/routing/routing_truck_settings_ios_2.png)

</TabItem>

</Tabs>

Truck routing can be configured according to your needs in [Navigation section](../../personal/profiles.md#navigation-settings) of settings of the Truck profile (*Settings - Profiles - Driving - Navigation settings - Route parameters*).  

<details><summary> Transporting of hazardous materials option </summary>

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Transporting of hazardous materials Android](@site/static/img/navigation/routing/hazards_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Transporting of hazardous materials iOS](@site/static/img/navigation/routing/hazards_ios.png)  

</TabItem>

</Tabs>

</details>

### Motorcycle routing settings

Moto routing is designed for motorbike riders and takes into account the unique needs of motorbike riders, such as the ability to filter through traffic and the importance of avoiding roads with poor road conditions. into account factors such as winding roads, scenic routes, and other features that may be appealing to motorcycle enthusiasts. It also takes 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Motobicke routing settings Android 1](@site/static/img/navigation/routing/routing_moto_settings_andr_1.png) ![Motobicke routing settings Android 2](@site/static/img/navigation/routing/routing_moto_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Motobicke routing settings iOS 1](@site/static/img/navigation/routing/routing_moto_settings_ios_1.png) ![Motobicke routing settings iOS 2](@site/static/img/navigation/routing/routing_moto_settings_ios_2.png)

</TabItem>

</Tabs>o

Motorcycle routing can be configured according to your needs in [Navigation section](../../personal/profiles.md#navigation-settings) of the settings of the Motorcycle profile (*Settings - Profiles - Driving - Navigation settings - Route parameters*).  
