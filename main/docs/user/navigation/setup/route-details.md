---
sidebar_position: 4
title:  Route Details
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';

<InfoIncompleteArticle/>


## Overview

In the OsmAnd app, you can find detailed information about the whole route, analyze it on the map, add or delete information on route segments, print the route plan, save the route and share it.


## Setup

There are three ways to access the Route Details menu:  
1. Go to the main *Menu → Navigation*, set the route, and tap the *Details* button.
2. Tap the Navigation icon on the map screen, set the route, and tap the Details button.
3. Go to the My Places menu, tap any available track in the list *Menu → My Places → Tracks*, select the Navigation icon in the track context menu in the Overview, and tap Details.  


## Details

Depending on the resolution of certain settings, terrain and road information, and the selected routing type, your route details may or may not be fully displayed.


### Main information / Altitude Graph

[Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*.   

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_main-info.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png)

</TabItem>

</Tabs>


### Analyse on map

A graph with altitude / slope info on distance, additional track data.

[Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map.  

- *Average altitude*
- *Altitude range*
- *Uphill*
- *Downhill*

This option allows you to interactively review track information using graphs and the map. To get access to this menu shortly tap on the *track → [<Translate android="true" ids="shared_string_options"/>](../map/track-context-menu.md#options) → <Translate android="true" ids="analyze_on_map"/>*  

- **Graph data Y-axis**: Altitude / Slope / Speed (if data is available in the track).
- **Graph dimension X-axis**: Distance / Time / Time of day.
- **Tap/Slide**: tap to Graph for showing info about track point and moving along Graph highlights point location on the map and displays info about point on the bar.
- **Scale**: scale Graph by [two fingers gesture](../map/interact-with-map.md#gestures). 
- **Follow My location**: click button [My Location](../map/interact-with-map.md#my-location--zoom), so map view and graph is synchronized with your location. In that case **graph scale** will stay constant and **bar information** will be fixed to 1/4 from the left. As you move, **graph will slide** from left to right displaying information Ahead of your Track. This functionality is useful for hiking & cycling during navigation, though this screen doesn't have other widgets displayed.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Route details Android](@site/static/img/navigation/route/navigation_route_android_analiz.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Route details iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png)

</TabItem>

</Tabs>


### The features with map legend

The features with [map legend](../../map-legend/osmand.md#routes):  

- *Road type*
- *Surface*
- *Steepness*
- *Surface firmness*
- *Slope* 
- *Smoothness* 
- *Winter and ice roads*
- *Difficulty of horse trails*
- *Speed and Altitude* 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png)   

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png)

</TabItem>

</Tabs>


### Turn-by-turn information

### Routing file operation buttons

#### Print information

#### Save information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Share buttons: *Share as GPX file* and *Save to OsmAnd tracks*  

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)   

</TabItem>

<TabItem value="ios" label="iOS">

Export button: *Export as GPX file* or *Share as link*  

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>


#### Share information

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

Share buttons: *Share as GPX file* and *Save to OsmAnd tracks*  

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png)   

</TabItem>

<TabItem value="ios" label="iOS">

Export button: *Export as GPX file* or *Share as link*  

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png)

</TabItem>

</Tabs>


## Share link

Each link consists of parts containing specific information. For example:  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|  |
|------------|
| [Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_main-info.png) |
| [Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_analiz.png) |
| The features with [map legend](../../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_features.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_steepness.png) |
| Turn-by-turn information - You can view the details of separate sections of the route by tapping the needed one. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_turn.png) |
| Print button - You can print a turn-by-turn description of the route with the total distance and estimated travel time, or save it as a pdf. |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_print.png) |
| Save as new track button. | 
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_save.png) |
| Share buttons: *Share as GPX file* and *Save to OsmAnd tracks* |
| ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share1.png)   ![Navigation route Android](@site/static/img/navigation/route/navigation_route_android_share2.png) |

</TabItem>

<TabItem value="ios" label="iOS">

|  |
|------------|
| [Main information](../../map/track-context-menu.md#altitude--speed-graphs): *Total distance, Estimated travel time/Estimated time of arrival, Graph with details*. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_main-info.png) |
| [Analyse](../../map/tracks-on-map.md#analyze-track-on-map) on map - This option allows you to interactively view track information with graphs and a map. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_analiz.png) |
| The features with [map legend](../../map-legend/osmand.md#routes): *Road type, Surface, Steepness, Surface firmness, Slope, Smoothness, Winter and ice roads, Difficulty of horse trails, Speed and Altitude*. |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_features.png) |
| Save as new track button. | 
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_save.png) |
| Export button: *Export as GPX file* or *Share as link* |
| ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios_share.png) |

</TabItem>

</Tabs>

:::info
**Share link**.  
Each link consists of parts containing specific information. For example:  
https://osmand.net/map?start=52.310331,4.863615&end=52.327645,4.863272&mode=pedestrian#15/52.3161/4.8658.
- *start=52.310331,4.863615*- coordinates of the start point.
- If the coordinates are not specified, My Location is used.
- *end=52.327645,4.863272* - coordinates of the end point.
- *mode=pedestrian* - type of [routing](../../navigation/routing/index.md), which depends on the selected profile.
- *#15/52.3161/4.8658* - zoom level and map center coordinates.
:::

:::note
The display of some details depends on the availability of map section information, GPS data, subscriptions, or a profile setting.
:::  