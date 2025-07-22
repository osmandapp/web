---
sidebar_position: 4
title:  Moped routing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview {#overview}

*Moped routing* allows drivers to build an optimal (fastest) route, taking into account the specifics of driving a vehicle such as a moped or scooter. The routing process considers various factors for safe, comfortable, and legal movement on roads or bicycle paths.

:::note
By default, *Moped profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Route Parameters - Moped {#route-parameters---moped}

*Moped routing* can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#route-parameters) of the Navigation settings.  

The moped's rooting settings are very simple and consist of just a few options.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Moped routing settings Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Moped routing settings iOS](@site/static/img/navigation/routing/moped_routing_ios.png)  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Select roads you want to avoid during navigation.  </summary>![Avoid roads Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | You can either [select a road on the map](../../map/map-context-menu/#avoid-road) or choose road type(s) from the list:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (a type of water transportation, that carries  vehicles across bodies of water)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Private access restrictions will be ignored when route calculating.  | Tag *[private](https://wiki.openstreetmap.org/wiki/Key:access)* is used in OSM to describe restrictions on the use of highways and other transportation routes, as well as buildings, entrances, amenities, and leisure entities.   |


## Other Routing Settings {#other-routing-settings}

- The routing algorithm can also consider temporary limitations specified in OpenStreetMap. This can be done using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, information from OSM can be outdated.  

- In the [*Recalculate route section*](../../navigation/guidance/navigation-settings.md#recalculate-route) of the *Route parameters*, you can enable and adjust route recalculation options.

- In the [*Development section*](../guidance/navigation-settings.md#development-settings) of the *Route parameters*, you can try new routing features that are currently in the testing phase. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.

- *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#road-speeds)* setting in the *iOS* version of OsmAnd is located in *Navigation settings → Route parameters* (for *Android*, in *Vehicle parameters → [<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed--road-speeds)*). This setting is used on unknown roads without speed limits. This is most often the case when navigating a track or online route. It must be set according to the parameters of your vehicle.

- *[<Translate ios="true" ids="vehicle_parameters"/>](../guidance/navigation-settings.md#vehicle-parameters)*. Properly configuring the settings will help you avoid problems when creating a route. You can select the most appropriate route depending on the type of vehicle and road restrictions, as well as calculate the travel time.

> *Last updated: June 2024*
