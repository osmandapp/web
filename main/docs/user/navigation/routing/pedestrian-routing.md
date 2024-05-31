---
sidebar_position: 4
title:  Pedestrian routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


### Overview

Pedestrian routing refers to the process of finding the best route for a pedestrian to travel from one location to another, taking into account factors such as pedestrian-only areas, sidewalks, crosswalks, and pedestrian-friendly intersections. It may also consider other factors such as *stairs*, which may be useful for wheelchair accessibility. OsmAnd always uses elevation data when calculating the estimated time of arrival (time to cover the distance) according to [Naismith's rule](https://en.wikipedia.org/wiki/Naismith%27s_rule#Scarf's_equivalence_between_distance_and_climb).

To configure *Pedestrian routing* go to the [Route parameters section](../guidance/navigation-settings.md/#route-parameters) of the Navigation settings.
  
### Route parameters - Walking

Pedestrian routing can be useful not only in urban areas, where pedestrians may encounter various obstacles when trying to get from one place to another. You can also use this routing type while jogging, hiking, and Nordic walking outside the city or in the mountains. Simply adjust routing parameters according to your needs.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Pedestrian routing settings Android 2](@site/static/img/navigation/routing/routing_pedestrian_settings_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Pedestrian routing settings iOS 2](@site/static/img/navigation/routing/pedestrian_routing_ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road types from the list.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_pedestrian_andr.png) </details>       | <ul><li> [<Translate android="true" ids="routing_attr_avoid_unpaved_name"/>](https://wiki.openstreetmap.org/wiki/Key:surface)</li><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> You can choose what type of surface to prefer when building a route. </summary> ![Elevation pedestrian Android](@site/static/img/navigation/routing/prefer_pedestrian_andr.png)  </details>  | You can choose between two options:<ul><li>[<Translate android="true" ids="routing_attr_prefer_hiking_routes_name"/>](https://wiki.openstreetmap.org/wiki/Hiking#Tagging_ways,_points_and_areas). These routes are typically found in natural environments such as forests, mountains, and parks. </li><li>[<Translate android="true" ids="routing_attr_prefer_tactile_paving_name"/>](https://wiki.openstreetmap.org/wiki/Key:tactile_paving). This textured ground surface indicator system may be installed on footpaths, stairs and public transportation platforms to assist blind or visually impaired pedestrians in moving. </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Elevation data will be used in route calculation: [penalties](../../../technical/osmand-file-formats/osmand-routing-xml.md#penalties-of-elevation-data) will be set for roads that differ from the selected type. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/pedestrian_elevation_andr.png)  </details> | This preference can help avoid steep hills or vice versa, prefer them. Using this option may be very helpful in pedestrian routing. Without elevation data the fastest route as on plain terrain will be calculated. |
|*<Translate android="true" ids="routing_attr_allow_via_ferrata_name"/>*| *Via ferrata* routes will be used for routing when this option together with *Use elevation data* enabled.  | [Via ferrata](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dvia_ferrata) is a mountain route equipped with fixed cables, stemples, ladders, and bridges. |

Other routing settings:  
- The routing algorithm can take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, information from OSM can be outdated.  
- In the [Recalculate route section](../setup/route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#default-speed--road-speeds)* (iOS) should be set according to your speeds (especialy important when you use *Pedestrian routing* for jogging). It is used to calculate Estimated Time of Arrival.
- In the [Development section](../guidance/navigation-settings.md#development-settings) of the Route parameters, you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.
