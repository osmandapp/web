---
sidebar_position: 6
title:  Ski routing
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

:::note
The ski routing and skiing profile are only availible when [Ski map view plugin](../../plugins/ski-maps.md) is activated.  
:::

*Ski routing* can be particularly useful for backcountry skiers, ski mountaineers, and other winter sports enthusiasts who want to explore new areas and plan their trips in advance. With *ski routing* OsmAnd users can plan routes and navigate safely while enjoying the beauty of winter landscapes.  

*Ski routing* can be configured according to your needs in the [Route parameters section](../guidance/navigation-settings.md#route-parameters) of the Navigation settings.  

![Map routes - ski slopes](@site/static/img/navigation/routing/ski_routing_overview.png)


## Route Parameters - Ski {#route-parameters---ski}

:::note
By default, *Skiing profile* is deactivated. To use this profile for routing, you need to switch it on in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::

*Ski routing* settings allows users to plan their routes by selecting the desired difficulty level and the type of terrain they want to explore. There are various options for safe, comfortable, and enjoyable movement on pistes or during a freeride.  

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Ski routing settings Android 1](@site/static/img/navigation/routing/skiing_routing_1_andr.png) ![Ski routing settings Android 2](@site/static/img/navigation/routing/skiing_routing_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski routing settings iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png)

</TabItem>

</Tabs>

| Parameter | Allows to use for routing | Note |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="routing_attr_allow_skating_only_name"/>* | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |  `https://wiki.openstreetmap.org/wiki/Piste_Maps#Type`  |
|*<Translate android="true" ids="app_mode_ski_touring"/>* |   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> | A recommended [ski tour way](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) or area that is generally used by many skiers during a season for the purpose of a Nordic ascent and a downhill descent in the backcountry. |
|*<Translate android="true" ids="routing_attr_allow_advanced_name"/>* |  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  | More [difficult routes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Difficulty) will be allowed for routing. |
|*<Translate android="true" ids="routing_attr_freeride_policy_name"/>* |   <details><summary> Choose one of the options for freeride skiing.  </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|*<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> | Using [ski lifts](https://wiki.openstreetmap.org/wiki/Piste_Maps#Ski_lifts) will be switched on |
|*<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>*&nbsp;(Android) *<Translate ios="true" ids="routeInfo_piste_type_name"/>*&nbsp;(iOS) |   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_classic_only_name"/>* |   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|*<Translate android="true" ids="routing_attr_allow_expert_name"/>* |   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|*<Translate android="true" ids="routing_attr_piste_type_sled_name"/>* |  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> | [Sleds](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) are smaller vehicles that are pulled by a human or propelled only by gravity. When enabled, [sledding pistes](https://wiki.openstreetmap.org/wiki/Piste_Maps#Type) will be used for ski routing |
|*<Translate android="true" ids="routing_attr_allow_intermediate_name"/>* |   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|*<Translate android="true" ids="routing_attr_difficulty_preference_name"/>* |  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |

