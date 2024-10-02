---
sidebar_position: 0
title:  About OsmAnd routing
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


## Overview

Offline OsmAnd routing is based on OpenStreetMap data and provides variety of routes for different purposes. This is a list of predefined routing types which could be extended. The navigation rules are contained in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) file and are used for offline routing. The route type changes automatically, when you change your profile.  


## Routing Types

The following profiles with their routing types are preset in OsmAnd: *Driving, Cycling, Walking, Truck, Motorcycle, Moped, Public transport, Boat, Aircraft, Skiing, Train, Horseback riding*. Besides these, you can create your own profiles with specific routing rules or [modify OsmAnd routing algorithm](../routing/osmand-routing.md#customize-offline-routing).  

:::note

- [**Truck, Motorcycle, Moped, Train, Aircraft, Boat and Horseback riding**](./osmand-routing.md) profiles are switched off by default. To use these profiles, you need to activate them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  

- [**Direct-to-point**](./direct-to-point-routing.md) navigation type doesn't have its own profile and can be used with any enabled one.  

- OsmAnd offline routing can be **configured by modifying the [.xml file](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. For more information, see the [*Customize offline routing*](../routing/osmand-routing.md#customize-offline-routing) article.

:::

| Category | Description | Note |
|:------------|:---------------|:---------------|
| *OsmAnd offline routing*  |  OsmAnd offline routing mechanism uses predownloaded maps as data source for route calculation. |  Navigation types: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorcycle](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Truck](car-based-routing#route-parameters---truck), [Train](./train-routing.md).            |
| *Direct to point routing* |  Also uses offline maps and provides a straight line routing (or *point-to-point* navigation).  | Navigation types: *[Straight line](./straight-line-routing.md)*,  *[Direct-to-point](./direct-to-point-routing.md)*.  |
| [*BRouter* *(offline)*](./brouter.md)  |  Offline routing provided by [BRouter app](https://brouter.de/).  | Available for **Android only**. The full description read [here](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) |  Online routing builds the route servers' resources online by the Internet connection. | Available for **Android only**. You can configure [online routing](./online-routing.md) to build a route from various online routing engines such as [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |

- *[Car routing (Truck, Motorcycle)](./car-based-routing.md)* - OsmAnd provides driving instructions for  drivers of Cars, Trucks and Motorcycles.  
- *[Bicycle  routing (MTB)](./bicycle-based-routing.md)* - Bicycle routing provides navigation prompts specifically for cyclists and mtb enthusiasts. It can also be used by moped (scooter) drivers.  
- *[Pedestrian routing](./pedestrian-routing.md)* - can be used not only for walking around the city, but also during hiking trips.
- *[Moped routing](./moped-routing.md)* - is based on the bicycle routing, though it has it's own features.
- *[Public Transport routing](./public-transport-navigation.md)* - can help you while traveling around the city.
- *[Horseback routing](./horse-routing.md)* - provides equestrians with tools they need to plan and enjoy their horseback riding activities.  
- *[Skiing routing](./ski-routing.md)* - allows users to plan and navigate ski tours and other winter sports activities using the OsmAnd mobile app.  
- *[Train routing](./train-routing.md)* - provides an opportunity to use the railroad tracks for navigation.
- *[Boat routing](./boat-navigation.md)* - can be used to build a route on rivers, channels, small lakes and in the open sea but only when fairways are marked in OpenStreetMap.
- *[Straight line routing](./straight-line-routing.md)* - provides a straight line routing (or "point-to-point" navigation) that is recalculated when your location changes.  
- *[Direct-to-point routing](./direct-to-point-routing.md)* - provides a straight line routing (or "point-to-point" navigation) which stays stable for whole navigation in contrast to **Straight line** routing (route recalculation is disabled).


## Customize Offline Routing

You can also create your **[own routing.xml file](#customize-offline-routing)** or modify default **routing.xml** and use it for navigation (only for advanced OsmAnd users).

- Copy the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file to your device. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. As an example, view the [routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file of the OsmAnd user.
- After making the changes, the new *routing.xml* file can be added to OsmAnd by tapping it and selecting to open it in the OsmAnd app.
- Select the modified [Navigation type](../../navigation/guidance/navigation-settings.md#navigation-type) for your profile.

More information about this feature can be found in the [*Technical documentation*](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [*OsmAnd's GitHub page*](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  


## Avoid Specific Roads

:::caution
Avoid roads feature is global and affects all **[Routing types](#routing-types)** except *[Online routing](../routing/online-routing.md)* and *[BRouter](../routing/brouter.md)*.  
:::

There are two possible ways to choose which roads to avoid when calculating a route:

- Select road type in the [Route parameters](../guidance/navigation-settings.md#route-parameters) section of [Navigation settings](../guidance/navigation-settings.md). Description of this setting is provided in the articles about [Routing types](#routing-types) settings. As example, see [Car / Truck / Motorcycle](../routing/car-based-routing.md#route-parameters---car) routing type description.
- You can also select specific roads that will not be used for routing using the *[Avoid roads](../../map/map-context-menu.md#avoid-road)* option through the *Map context menu* or using *[Avoid roads menu](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note

- The road must be marked at maximum zoom, as OsmAnd may misinterpret the tap and block, for example, the incorrect side of two-roadways road or sidewalk.
- The Avoid specific roads function incorrectly works with [Navigation by track](../setup/gpx-navigation.md) option and doesn't impact simplified [Markers navigation](../setup/markers-navigation.md#how-to-use).

:::

### Avoid Roads Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*Navigation button → Settings → Avoid roads...*

![Avoid road menu Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*Navigation button → Settings → Avoid roads*

![Avoid road menu iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png) 

</TabItem>

</Tabs>

In this menu, you can cancel the previous selection of the road that should be avoided. To do so, tap a cross (Android) or a red **"-"** opposite the road you intend to use for route calculation.

Using *Select on map* option you can continue to mark roads as invalid for routing on the OsmAnd map.

When you select a road to avoid using *Map context menu* or *Avoid roads menu*, the list of roads will be shown above map screen.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map list Android](@site/static/img/navigation/routing/action_avoid_roads_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map list iOS](@site/static/img/navigation/routing/avoid_route_ios_2.png)

</TabItem>

</Tabs>

### Export / Import

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*  

![Avoid road on the map export Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Avoid road on the map export Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*  

![Avoid road on the map export iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Avoid road on the map export iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

Depending on your device settings and available applications, your whole list of roads to avoid or just one of them can be [exported](../../personal/import-export.md#export) as an .osf file to a different locations. Select the roads you want to export in the suggested list.

You can [import](../../personal/import-export.md#import) roads to avoid during route calculation from other sources in .osf file format.  Also, it can be done using *Import option* (*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_import"/>*). You can choose to import all data or only few roads to avoid (marking a road with a tick in the list).  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map import Android](@site/static/img/navigation/routing/avoid_roads_import_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map import iOS](@site/static/img/navigation/routing/avoid_roads_import_ios_1.png)

</TabItem>

</Tabs>

:::note
The most convenient way to synchronize roads to avoid between your devices is to use [OsmAnd Cloud](../../personal/osmand-cloud.md) (Pro subscription required).
:::


## Consider Temporary Limitations

*Consider temporary limitations* option allows taking into account temporary road restrictions when calculating routes. They may include things like road construction or road closures for some reason (an accident, road repairs, natural disasters). Enabling this option can help you avoid unexpected detours or delays. Please note that sometimes this information may be outdated.
In OpenStreetMap, this information is usually marked with the tag '*[temporary](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions)*'.  


## Development Section

The **Development section** of the *Route parameters* settings (*Menu → Settings → app profile → Navigation settings → Route parameters → Development*) is visible only when [OsmAnd development plugin](../../plugins/development.md) is enabled. It includes settings such as *Routing type (Android) / Routing algorithm (iOS), GPX approximation (Android only), Autozoom, and OsmAnd Live data (Android only)*. Read the [Navigation Settings](../../navigation/guidance/navigation-settings.md#development-settings) article for a detailed description.


> *This article was last updated in Jule 2024*
