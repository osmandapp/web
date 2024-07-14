---
sidebar_position: 1
title: Routing types
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

The route type determines how the route is calculated, which roads are permitted, and what the travel time is. The OsmAnd application uses different route types for hiking, cycling, skiing or boating routes. Each profile is assigned a specific routing type that best matches it.  

OsmAnd allows you to customize the type of routing according to your needs and preferences. To make changes, go to *<Translate android="true" ids="shared_string_menu,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/>, <Translate android="true" ids="app_mode_car"/>, <Translate android="true" ids="app_mode_pedestrian"/> or others) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.


## Routing types

The following profiles with their routing types are preset in OsmAnd: *Driving, Cycling, Walking, Truck, Motorcycle, Moped, Public transport, Boat, Aircraft, Skiing, Train, Horseback riding*. Besides these, you can create your own profiles with specific routing rules or [modify OsmAnd routing algorithm](../routing/osmand-routing.md#customize-offline-routing).  

:::note  
- [**Truck, Motorcycle, Moped, Train, Aircraft, Boat and Horseback riding**](./osmand-routing.md) profiles are switched off by default. In order to use these profiles, you need to activate them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  

- [**Direct-to-point**](./direct-to-point-routing.md) navigation type doesn't have its own profile and can be used with any enabled one.  

- OsmAnd offline routing can be **configured by modifying the [.xml file](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml)**. For more information, see the [*Customize offline routing*](../routing/osmand-routing.md#customize-offline-routing) article.
:::

| Category | Description | Note |
|:------------|:---------------|:---------------|
| *[OsmAnd offline routing](./osmand-routing.md)*  |  OsmAnd offline routing mechanism uses predownloaded maps as data source for route calculation. |  Navigation types: [<Translate android="true" ids="app_mode_boat"/>](./boat-navigation.md), [<Translate android="true" ids="rendering_value_bicycle_name"/>](./bicycle-based-routing.md), [<Translate android="true" ids="rendering_value_car_name"/>](./car-based-routing.md),  [<Translate android="true" ids="horseback_riding"/>](./horse-routing.md), [Moped](./moped-routing.md), [Motorcycle](./car-based-routing.md#route-parameters---motorcycle), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](./pedestrian-routing.md), [<Translate android="true" ids="app_mode_public_transport"/>](./public-transport-navigation.md), [<Translate android="true" ids="routing_profile_ski"/>](./ski-routing.md), [Truck](car-based-routing#route-parameters---truck), [Train](./train-routing.md).            |
| *Direct to point routing* |  Also uses offline maps and provides a straight line routing (or *point-to-point* navigation).  | Navigation types: *[Straight line](./straight-line-routing.md)*,  *[Direct-to-point](./direct-to-point-routing.md)*.  |
| [*BRouter* *(offline)*](./brouter.md)  |  Offline routing provided by [BRouter app](https://brouter.de/).  | Available for **Android only**. The full description read [here](./brouter.md).   |
| [*<Translate android="true" ids="shared_string_online"/>* (*Android*)](./online-routing.md) |  Online routing builds the route servers' resources online by the Internet connection. | Available for **Android only**. You can configure [online routing](./online-routing.md) to build a route from various online routing engines such as [Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), Generic GPX.  |

> *This article was last updated in Jule 2024*
