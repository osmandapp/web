---
sidebar_position: 9
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


## Overview {#overview}

Direct-to-point routing in OsmAnd is a useful feature that allows you to navigate directly to a specific point on the map without having to follow a pre-defined route or road network. This feature can be used by boat skippers,
outdoor enthusiasts, or by emergency services during rescue operations. Overall, direct-to-point routing is a flexible and versatile feature that can be used in a variety of situations where traditional routing methods may not be appropriate or effective.  

![Direct-to-point Navigation type Android](@site/static/img/navigation/boat/direct_navigation_type_android.png)

A point on a line is a virtual point the distance from which to the destination is the same as the distance from your current location, but it is not a projection of your current location onto a line. This makes it easy to measure progress, and you can use the measurement tool to get the correct distance.


## Route Parameters - Direct-to-Point {#route-parameters---direct-to-point}

*Direct-to-point* routing type is not linked to any profile and can be used with different ones.
This type of routing does not consider any obstacles or barriers that may be present in the terrain, such as mountains, rivers, or dense forests. It also does not provide any information about the quality of the terrain, the difficulty level of the route, or any other relevant factors that may affect the safety or feasibility of the route ([Route Details](../setup/route-details.md) section is empty).  

:::note
When using Direct-to-point and Boat navigation types, you will need [Depth contours data](../../plugins/nautical-charts.md#nautical-map-style), which can be enabled and set in *Configure map*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → any profile → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-to-point routing settings](@site/static/img/navigation/routing/direct_to_point_routing_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings"/> → any profile → <Translate android="true" ids="routing_settings_2,nav_type_hint"/>*

![Direct-to-point routing settings iOS](@site/static/img/navigation/routing/direct_to_point_ios.png)  

</TabItem>

</Tabs>

