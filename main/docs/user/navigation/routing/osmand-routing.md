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
**You can also create your [own routing.xml file](#custom-routing) and use it for navigation (only for advanced OsmAnd users).**  

- *[Car routing (Truck, Motorcycle)](./car-based-routing.md)* - OsmAnd provides driving instructions for  drivers of Cars, Trucks and Motorcycles.  
- *[Bicycle  routing (MTB)](./bicycle-based-routing.md)* - Bicycle routing provides navigation prompts specifically for cyclists and mtb enthusiasts. It can also be used by moped (scooter) drivers.  
- *[Pedestrian routing](./pedestrian-routing.md)* - Pedestrian routing can be used not only for walking around the city, but also during hiking trips.
- *[Moped routing](./moped-routing.md)* - Moped routing is based on the bicycle routing, though it has it's own features.
- *[Public Transport routing](./public-transport-navigation.md)* - Public Transport navigation can help you while traveling around the city.
- *[Horseback routing](./horse-routing.md)* - Horse routing provides equestrians with tools they need to plan and enjoy their horseback riding activities.  
- *[Skiing routing](./ski-routing.md)* - Ski routing allows users to plan and navigate ski tours and other winter sports activities using the OsmAnd mobile app.  
- *[Boat routing](./boat-navigation.md)* - Boat routing can be used to build a route on rivers, channels, small lakes and in the open sea but only when fairways are marked in OpenStreetMap.
- *[Straight line routing](./straight-line-routing.md)* - Provides a straight line routing (or "point-to-point" navigation) which is recalculated if location is far away from straight line.  
- *[Direct-to-point routing](./direct-to-point-routing.md)* - Provides a straight line routing (or "point-to-point" navigation) which stays stable for whole navigation in contrast to **Straight line** routing (route recalculation is disabled).

## Other Routing types

- *[Online routing](./online-routing.md)* (**Android only**) - Online routing is an OsmAnd feature that allows users to plan and navigate routes using online services.  
- *[BRouter routing](./brouter.md)* (**Offline**, **Android only**) - BRouter app can be used for offline routing.

## Customize offline routing

You can modify the OsmAnd routing algorithm according to your needs. This can be done by updating the *routing.xml file*:  

- Copy the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file on your device. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. Check out OsmAnd [user's routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file as an example.
- After making the changes, the new *routing.xml* file can be added to OsmAnd by tapping it and selecting to open it in the OsmAnd app.
- Select the modified [Navigation type](../../navigation/setup/route-navigation.md#type-of-navigation) for your profile.

:::note
More info about this possibility you can find in [Technical documentation](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  
:::

## Avoid specific roads

:::caution
Avoid roads function is global and affects all *[Routing types](../routing/index.md)* (except *[Online routing](../routing/online-routing.md)* and *[BRouter](../routing/brouter.md)*, **Android**).  
:::

There are two possible ways to choose which roads to avoid when calculating a route:
- Select road type in the [Route parameters](../guidance/navigation-settings.md#route-parameters) section of [Navigation settings](../guidance/voice-navigation.md). Description of this setting is provided in the articles about [Routing types](../routing/index.md) settings. As example, see [Car / Truck / Motorcycle](../routing/car-based-routing.md#route-parameters---car) routing type description.
- You can also select specific roads that will not be used for routing using the *[Avoid roads](../../map/map-context-menu.md#avoid-road)* option through the *Map context menu* or using *[Avoid roads menu](#avoid-roads-menu)* (*<Translate android="true" ids="shared_string_menu,shared_string_navigation,impassable_road"/>*).

:::note
- The road must be marked at maximum zoom, as OsmAnd may misinterpret the tap and block, for example, the incorrect side of two-roadways road or sidewalk.
- The Avoid specific roads function incorrectly works with [Navigation by track](../setup/gpx-navigation.md) option and doesn't impact simplified [Markers navigation](../setup/markers-navigation.md#how-to-use).
:::

### Avoid roads menu

*Avoid roads menu* can be reached via *Navigation button → Settings → Avoid roads... (Android) or Avoid roads (iOS)*.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road menu Android](@site/static/img/navigation/routing/avoid_roads_menu_andr_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road menu iOS](@site/static/img/navigation/routing/avoid_roads_menu_ios_2.png) 

</TabItem>

</Tabs>

In this menu, you can cancel the previous selection of the road that should be avoided. To do so, tap on a cross (Android) or a red "-" opposite the road you intend to use for route calculation.

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

Depending on your device settings and available applications, your whole list of roads to avoid or just one of them can be [exported](../../personal/import-export.md#export) as an .osf file to a different locations. Select the roads you want to export in the suggested list.

*<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_actions,shared_string_export"/>*  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid road on the map export Android 1](@site/static/img/navigation/routing/avoid_roads_export_andr_1.png) ![Avoid road on the map export Android 2](@site/static/img/navigation/routing/avoid_roads_export_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Avoid road on the map export iOS 1](@site/static/img/navigation/routing/avoid_roads_export_ios_1.png) ![Avoid road on the map export iOS 2](@site/static/img/navigation/routing/avoid_roads_export_ios_2.png)

</TabItem>

</Tabs>

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

## Consider temporary limitations

*Consider temporary limitations* option allows taking into account temporary road restrictions when calculating routes. They may include things like road construction or road closures for some reason (an accident, road repairs, natural disasters). Enabling this option can help you avoid unexpected detours or delays. Please note that sometimes this information may be outdated.
In OpenStreetMap, this information is usually marked with the tag '*[temporary](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions)*'.  

## Development settings

<InfoAndroidOnly />

:::note
*Development section* of the Route parameters settings only visible when [Development plugin](../../plugins/development.md) is turned on.
:::

| Parameter | Description |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows to use [OsmAnd Live updates](../../personal/maps.md#osmand-live) while routing. Note, that we recommend to use this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | Adds an extra phase to the default (A*) algorithm to improve the quality of the calculated route. This option may be useful for finding routes in large and complex road networks, although it may take more time for route calculation.|  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |  
