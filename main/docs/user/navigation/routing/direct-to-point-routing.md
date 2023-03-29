---
sidebar_position: 8
title:  Direct-to-point routing (Boat)
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

Direct-to-point routing in OsmAnd is a useful feature that allows you to navigate directly to a specific point on the map without having to follow a pre-defined route or road network. This feature can be used by boat skippers,
outdoor enthusiasts, or by emergency services during rescue operations. Overall, direct-to-point routing is a flexible and versatile feature that can be used in a variety of situations where traditional routing methods may not be appropriate or effective.

:::note
*Direct-to-point* routing type is not linked to any profile and can be used with different ones.
This type of routing does not take into account any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests. It also does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route ([Route Details](../route-navigation.md#route-details) section is empty).  
:::

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

The point on the line is a virtual point, that has the same distance to the destination as the current location  (it is not a projection of the current location on the line!). So it is easy to measure the progress, and it is possible to use measurement tool to get correct distance.
## Route parameters - Direct-to-point

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Direct-to-point routing settings](@site/static/img/navigation/routing/direct_to_point_routing_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Direct-to-point routing settings iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)  

</TabItem>

</Tabs>

You can activate *Direct-topoint* routing in the desired profile: 
- *<Translate android="true" ids="shared_string_menu,configure_profile"/> (<Translate android="true" ids="app_mode_boat"/> or another one) → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*.

Routing settings:  
- In the [Recalculate route section](../route-navigation.md#route-recalculation) of the Route parameters, you can enable and adjust route recalculation options. Default value - route will be recalculated in case of 0&nbsp;meters deviation. This means that the route will not be recalculated.
- *[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) should be set according to your vehicle parameters. Otherwise, the default speed of the selected profile will be used.
- In the [Development section](../routing/index.md#development-settings) of the Route parameters (**Android only**), you can try new routing features, that are under testing now. Note, that these settings are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.  
