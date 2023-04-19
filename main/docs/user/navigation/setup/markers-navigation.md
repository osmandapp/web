---
sidebar_position: 3
title:  Navigate by markers
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

<InfoIncompleteArticle/>

## Overview

[Map markers](../../personal/markers.md) are temporary points on the map marked by flags. They can be used for a variety of purposes, such as to indicate a location that you want to visit, a point of interest that you want to remember, or to create a custom route. They can be particularly helpful for hikers, bikers, or anyone exploring a new area who wants to mark interesting locations or points of reference on the map.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>

## How to use

*The marker navigation* option is a special *[Navigation](../../navigation/index.md)* use case:
- *Map markers* can serve as [destinations](./route-navigation.md/#set-destinations) while building a route. They are especially convenient to use when you need to set a route with intermediate points.
- In some situations (especially for short routes, for example, during off-road competitions), due to the possibility to display the direction of movement and distance to markers on the map, they can serve as waypoints without setting the navigation mode.  

Either way, follow these steps to set *Marker navigation*:

1. Create markers. Find the desired object(s) on the map, tap it, and choose the *[Marker button](../../map/map-context-menu.md#add--edit-marker)* in the *[Map context menu](../../map/map-context-menu.md)*. You can also make markers from [favorites](#add-favorite-group) or [GPX tracks](#add-gpx).

2. Customise *[Map markers view](../../personal/markers.md#appearance-on-the-map)* according to your needs and add *[Markers widgets](../../personal/markers.md#marker-widgets)*.

3. [Select a marker](#select-markers) as your destination.
   
If you would like to use Markers without starting Navigation, then enable **Arrows on the map** and **Direction line** options in the *[Map markers view](../../personal/markers.md#appearance-on-the-map)* menu. This use case is similar to the *[direct-to-point](../routing/direct-to-point-routing.md)* routing type.

:::note
The arrow shows the direction to the active marker when it is outside the current map screen. Direction line is drawn when your geolocation and marker are both on the same screen.
:::

## Select markers

- Once a marker is added to the map, you can select it as your [destination](./route-navigation.md/#set-destinations) in [Navigation menu](./route-navigation.md/#navigation-menu) and OsmAnd will provide navigation guidance to help you get there.  
- Using *[Map markers list](../../personal/markers.md#list)* you can select one of the markers and build navigation to it with [direction to/from](../../map/map-context-menu.md#directions-to--from) option in *[Map context menu](../../map/map-context-menu.md)* or use it for navigation without setting a route.
- You can select a marker on a map by single tap on it. Then press *Make active* button in *[Map context menu](../../personal/markers.md#add-marker-widgets)* to activate it (this action will put chosen marker on the first place in the *Markers list* and *Markers widget*).
### Add favorite group 

<InfoAndroidOnly />

You can create *Map markers* from *[Favorites](../../personal/favorites.md)*. How to do that you can read in *[Markers from Favorites](../../personal/markers.md#markers-from-favorites)* article.

### Add GPX

<InfoAndroidOnly />

You can not only add favorites group to *Map markers*, although a [track with waypoints](../../personal/markers.md#groups) (GPX file).  

![GPX to markers](@site/static/img/navigation/marker/track_to_markers_andr.png)

To use track waypoints as *Markers*, go to *[Groups tab](../../personal/markers.md#groups)* in *[Map markers menu](../../personal/markers.md#map-markers-menu)*, then choose a track you intend to use and turn switch on. Track waypoints will be added to *[Map markers list](../../personal/markers.md#list). After that you can use them for *Navigation by markers*.

:::note
Only tracks with waypoints can be added to the *Map markers list*. The track you intend to add should also be visible (active) on the map.
:::
### Add manually

*Markers* can also be added to the map manualy. How to do that is described in [*Map context menu*](../../map/map-context-menu.md#add--edit-marker) article.

## Navigation list

Map markers in OsmAnd can be very useful for planning and buildin a specific route, especially with intermediate destinations.  

### Sort markers


## Pass markers

### Mark as passed

### Next marker


## Read more

- [About Map markers](../../personal/markers.md).
- [Marker widget](../../widgets/markers.md).