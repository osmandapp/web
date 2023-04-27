---
sidebar_position: 0
title:  About OsmAnd routing
---

## Overview

Offline OsmAnd routing is based on OpenStreetMap data and provides variety of routes for different purposes. This is a list of predefined routing types which could be extended. The navigation rules are contained in [routing.xml](../../../technical/osmand-file-formats/osmand-routing-xml.md) file and are used for offline routing. The route type changes automatically, when you change your profile.  
**You can also create your [own routing.xml file](#custom-routing) and use it for navigation (only for advanced OsmAnd users).**  

- [Car routing (Truck, Motorcycle)](./car-based-routing.md) - OsmAnd provides driving instructions for  drivers of Cars, Trucks and Motorcycles.  
- [Bicycle  routing (MTB)](./bicycle-based-routing.md) - Bicycle routing provides navigation prompts specifically for cyclists and mtb enthusiasts. It can also be used by moped (scooter) drivers.  
- [Pedestrian routing](./pedestrian-routing.md) - Pedestrian routing can be used not only for walking around the city, but also during hiking trips.
- [Moped routing](./moped-routing.md) - Moped routing is based on the bicycle routing, though it has it's own features.
- [Public Transport routing](./public-transport-navigation.md) - Public Transport navigation can help you while traveling around the city.
- [Horseback routing](./horse-routing.md) - Horse routing provides equestrians with tools they need to plan and enjoy their horseback riding activities.  
- [Skiing routing](./ski-routing.md) - Ski routing allows users to plan and navigate ski tours and other winter sports activities using the OsmAnd mobile app.  
- [Boat routing](./boat-navigation.md) - Boat routing can be used to build a route on rivers, channels, small lakes and in the open sea but only when fairways are marked in OpenStreetMap.

## Avoid specific roads

There are two possible ways to select what roads to avoid during route calculation:
- Select road type in the [Route parameters](../guidance/navigation-settings.md#route-parameters) section of [Navigation settings](../guidance/voice-navigation.md). For example, see Avoid roads in Route parameters for [Car / Truck / Motorcycle](../routing/car-based-routing.md#route-parameters---car) routing type.
- You can also select specific roads that will not be used for routing. This can be done using the [Avoid roads](../../map/map-context-menu.md#avoid-road) option through the [Map context menu](../../map/map-context-menu.md).

:::note
The Avoid specific roads function incorrectly works whith [Navigation by track](../setup/gpx-navigation.md) option and doesn't impact simplified [Markers navigation](../setup/markers-navigation.md#how-to-use).
:::

## Avoid temporary closures

*Consider temporary limitations* option allows taking into account temporary road restrictions when calculating routes. They may include things like road construction or road closures for some reason (an accident, road repairs, natural disasters). Enabling this option can help you avoid unexpected detours or delays. Please note that sometimes this information may be outdated.
In OpenStreetMap, this information is usually marked with the tag '*[temporary](https://wiki.openstreetmap.org/wiki/Comparison_of_life_cycle_concepts#Opening_hours_time_range_and_Temporary_namespace_and_Conditional_restrictions)*'.  

## Customize offline routing

You can modify _routing.xml file_ for your own needs. It means that you can update the routing algorithm according to your preferences.  
More info about this possibility you may find in [Technical documentation](../../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).  

- To change the [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file, you first need to copy it. Read the [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25) carefully. [OsmAnd user's routing.xml](https://groups.google.com/g/osmand/c/JvV7p_JJvEU) file for an example.
- To add a new *routing.xml* file to OsmAnd, just tap on the file and choose to open it in the OsmAnd app.
- Select the [Navigation type](../../navigation/setup/route-navigation.md#type-of-navigation) for your profile.

## Development settings

| Parameter | Description | Note |
|:------------|:---------------|
| *<Translate android="true" ids="use_live_routing"/>*  | Allows to use OsmAnd Live updates while routing. Note, that we recommend to use this option for testing purposes only. |   
| *<Translate android="true" ids="use_two_phase_routing"/>*  | You can use <Translate android="true" ids="complex_routing_descr"/> |  
| *<Translate android="true" ids="use_fast_recalculation"/>* | <Translate android="true" ids="use_fast_recalculation_desc"/>  |  
