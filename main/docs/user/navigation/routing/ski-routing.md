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

<InfoIncompleteArticle/>

## Overview

*Ski routing* can be particularly useful for backcountry skiers, ski mountaineers, and other winter sports enthusiasts who want to explore new areas and plan their trips in advance. With *ski routing* OsmAnd users can plan routes and navigate safely while enjoying the beauty of winter landscapes.  

:::note
The ski routing (and skiing profile) only availible after [Ski map view plugin](../../plugins/ski-maps.md) is activated.  
:::

*Ski routing* can be configured according to your needs in the [Route parameters section](../../navigation/navigation-settings.md#navigation-type--route-parameters) of the Navigation settings of the *Skiing profile*.  

## Route parameters - Ski

*Ski routing* considers various options for safe, comfortable, and enjoyable movement on pistes or during a freeride.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Ski routing settings Android 1](@site/static/img/navigation/routing/skiing_routing_android_1.png) ![Ski routing settings Android 2](@site/static/img/navigation/routing/skiing_routing_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Ski routing settings iOS 1](@site/static/img/navigation/routing/skiing_routing_ios_1.png) ![Ski routing settings iOS 2](@site/static/img/navigation/routing/skiing_routing_ios_2.png)

</TabItem>

</Tabs>

<!--- Ski routing settings provide users with information about ski runs, ski lifts, and other important points of interest on the map. It also allows users to plan their routes by selecting the desired difficulty level and the type of terrain they want to explore. The routing algorithm takes into account the elevation, slope angle, and other terrain features to provide users with the most suitable route based on their preferences.  --->

| Parameter | Allows to use for routing | Note |
|:------------|:---------------|:---------------|
|<Translate android="true" ids="routing_attr_allow_skating_only_name"/> | <Translate android="true" ids="routing_attr_allow_skating_only_description"/> |   |
|<Translate android="true" ids="app_mode_ski_touring"/>|   <Translate android="true" ids="routing_attr_piste_type_skitour_description"/> |  |
|<Translate android="true" ids="routing_attr_allow_advanced_name"/>|  <Translate android="true" ids="routing_attr_allow_advanced_description"/>  |  |
|<Translate android="true" ids="routing_attr_freeride_policy_name"/>|   <details><summary> Choose one of the options for freeride skiing  </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |   |
|<Translate android="true" ids="routing_attr_piste_type_downhill_name"/>|  <Translate android="true" ids="routing_attr_piste_type_downhill_description"/> |  |
|<Translate android="true" ids="routing_attr_piste_type_nordic_name"/>|   <Translate android="true" ids="routing_attr_piste_type_nordic_description"/>|  |
|<Translate android="true" ids="routing_attr_allow_classic_only_name"/>|   <Translate android="true" ids="routing_attr_allow_classic_only_description"/>|  |
|<Translate android="true" ids="routing_attr_allow_expert_name"/>|   <Translate android="true" ids="routing_attr_allow_expert_description"/>|  |
|<Translate android="true" ids="routing_attr_piste_type_sled_name"/>|  <Translate android="true" ids="routing_attr_piste_type_sled_description"/> |  |
|<Translate android="true" ids="routing_attr_allow_intermediate_name"/>|   <Translate android="true" ids="routing_attr_allow_intermediate_description"/>|  |
|<Translate android="true" ids="routing_attr_difficulty_preference_name"/>|  <details><summary>  <Translate android="true" ids="routing_attr_difficulty_preference_description"/> </summary>![Off piste Android](@site/static/img/navigation/routing/offpiste_android.png) </details> |  |

The routing algorithm can also take into account temporary limitations specified in OpenStreetMap. This can be done by using *[<Translate android="true" ids="temporary_conditional_routing"/>](./index.md#avoid-temporary-closures)* option. Note that in some cases, information from OSM can be outdated.  

*[<Translate android="true" ids="default_speed_setting_title"/>](../navigation-settings.md#default-speed)* (Android) or *[<Translate ios="true" ids="road_speeds"/>](../navigation-settings.md#default-speed)* (iOS) are used to determine whether the road can be used for routing.  

In the [development section](../routing/index.md#development-settings) of Route parameters, you can configure routing settings that are only available when the [OsmAnd development plugin](../../plugins/development.md) is enabled.