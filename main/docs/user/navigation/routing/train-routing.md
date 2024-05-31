---
sidebar_position: 7
title:  Train routing
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

*Train routing* in OsmAnd provides users with possibility to use railroad lines for navigation as if they were driving a train like a car. This option can be useful, for example, for hiking when no other roads are available. In other cases it's better to use *[Public transport routing](./public-transport-navigation.md)*.  

:::note
By default, *Train profile* is deactivated. In order to use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

## Route parameters - Train

*Train routing* can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Train routing settings Android](@site/static/img/navigation/routing/train_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Train routing settings iOS](@site/static/img/navigation/routing/train_routing_ios.png)  

</TabItem>

</Tabs>

Routing settings:  
- The routing algorithm can take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](../routing/osmand-routing.md#consider-temporary-limitations)* option. Note that in some cases, the information from OSM may be outdated. 
- In the [Recalculate route section](../setup/route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../guidance/navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../guidance/navigation-settings.md#default-speed)* (iOS) should be set according to your vehicle parameters. It is used to calculate Estimated Time of Arrival.
- In the [Development section](../guidance/navigation-settings.md#development-settings) of the Route parameters, you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.