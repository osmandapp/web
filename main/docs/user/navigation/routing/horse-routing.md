---
sidebar_position: 6
title:  Horseback routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview

*Horseback routing* can be useful for equestrians, who want to plan their rides on paths and trails that are safe and suitable for horses. With help of this type of routing you may also discover new routes that haven't been already known about otherwise.  

*Horseback routing* can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#route-parameters) of the Navigation settings.  

![Horseback](@site/static/img/navigation/routing/horseback_routing_overview.png)


## Route Parameters - Horse

:::note
By default, *Horseback riding profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

Horseback routing is designed to provide equestrians with information about horse-friendly paths, bridleways, and riding trails.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Horse routing settings Android 1](@site/static/img/navigation/routing/horse-routing-andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Horse routing settings iOS 1](@site/static/img/navigation/routing/horse-routing-ios.png)

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation. You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road types from the list.  </summary>  ![Avoid roads Android](@site/static/img/navigation/routing/horse_routing_avoid_android.png) </details> | <ul><li> [<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li><li>[<Translate android="true" ids="routing_attr_avoid_stairs_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dsteps)</li><li>[<Translate android="true" ids="routing_attr_avoid_tunnels_name"/>](https://wiki.openstreetmap.org/wiki/Key:tunnel)</li><li>[<Translate android="true" ids="routing_attr_avoid_motorway_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dmotorway)</li></ul>|
| *<Translate android="true" ids="prefer_in_routing_title"/>* | <details><summary> You can choose whether to prefer routes for horses or not. </summary> ![Prefer horses routes Android](@site/static/img/navigation/routing/horse_routing_prefer_android.png)  </details>  | <ul><li>[<Translate android="true" ids="routing_attr_prefer_horse_routes_name"/>](https://wiki.openstreetmap.org/wiki/Tag:highway%3Dbridleway). A way intended for use by horse riders (primarily) and pedestrians (depending on country-specific regulations). </li></ul> |
| *<Translate android="true" ids="routing_attr_allow_gate_name"/>* |  <Translate android="true" ids="routing_attr_allow_gate_description"/>. | A [gate](https://wiki.openstreetmap.org/wiki/Tag:barrier%3Dgate) is a kind of [barrier](https://wiki.openstreetmap.org/wiki/Key:barrier), that blocks movement. Usually it is a section in a wall or fence which can be opened or closed to allow or restrict access. |
|  *<Translate android="true" ids="routing_attr_carriage_restrictions_name"/>*  |  <Translate android="true" ids="routing_attr_carriage_restrictions_description"/>.  | In some countries, [horse-drawn carriages](https://wiki.openstreetmap.org/wiki/Key:carriage) are not permitted on motorways, they are only allowed on a very small number of other roads.   |
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |
| *<Translate android="true" ids="routing_attr_only_permitted_streets_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_streets_description"/>.  | Only streets specially designated for horses will be used for routing.   |
| *<Translate android="true" ids="routing_attr_only_permitted_ways_name"/>*   |  <Translate android="true" ids="routing_attr_only_permitted_ways_description"/>.  | Only ways specially designated for horses will be used for routing.   |
|*<Translate android="true" ids="routing_attr_height_obstacles_name"/>* | <details><summary> Projected travel time will reflect elevation impact. </summary> ![Use elevation data Android](@site/static/img/navigation/routing/horse_routing_elevation_android.png)  </details> | This preference can help avoid steep uphills. Without elevation data the fastest route as on plain terrain will be calculated. |


## Other Routing Settings

- The routing algorithm can also take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, information from OSM can be outdated.  

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, you can enable and adjust route recalculation options.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

- *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* setting in the *iOS* version of OsmAnd is located in *Navigation settings → Route parameters* (for *Android*, in *Vehicle parameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). This setting is used on unknown roads without speed limits. This is most often the case when navigating a track or online route. It must be set according to the parameters of your vehicle.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Properly configuring the settings will help you avoid problems when creating a route. You can select the most appropriate route depending on the type of vehicle and road restrictions, as well as calculate the travel time.

> *This article was last updated in June 2024*
