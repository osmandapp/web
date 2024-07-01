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

> *This article was last updated in June 2023.*

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

*The marker navigation* option has two use cases:
- *Map markers* can serve as [destinations](./route-navigation.md/#set-destinations) while building a route. They are especially convenient when you need to set a route with intermediate points.
- In some situations (especially for short routes, for example, during off-road competitions), due to the possibility to display the direction of movement and distance to markers on the map, they can serve as waypoints without setting the navigation mode.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

 ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png) 

</TabItem>

</Tabs>

Either way, follow these steps to set *Marker navigation*:

1. Create markers. Find the desired object(s) on the map, tap it, and choose the *[Marker button](../../personal/markers.md#add-marker-on-the-map)* in the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)*. You can also make markers from [favorites](#add-favorite-group) or [GPX tracks](#add-gpx).

2. Customise *Map markers view* if you would like to use Markers without starting Navigation. Enable **Arrows on the map** and **Direction line** options in the *[Appearance](../../personal/markers.md#appearance-on-the-map)* section of *[Map markers menu](../../personal/markers.md#map-markers-menu)*.

3.  Add *[Markers widgets](../../personal/markers.md#marker-widgets)* in *[Configure screen menu](../../widgets/configure-screen.md)* (optional).

4. [Select a marker](#select-markers) as your destination or use *Markers* to create a route in [**Plan a route**](../../personal/markers.md#plan-route-for-markers) tool.
   
:::note
- When **Arrows on the map** and **Direction line** options are enabled in *Appearance* section of [Map markers menu](../../personal/markers.md#appearance-on-the-map), you will see an arrow or dashed line on the map. The arrow shows the direction to the active marker when it is outside the current map screen. Direction line is drawn when your geolocation and marker are both on the same screen.  
- These two options can be used for navigation to the marker without actiually starting navigation in a classical way. This use case is similar to the *[straight line](../routing/straight-line-routing.md)* routing type.
:::

## Add marker on a map

*Markers* can be added or deleted from the map by single tap the screen at the desired location. Then you need to follow instructions from the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)* article.  

### Add favorite

<InfoAndroidOnly />

You can create *Map markers* from *[Favorites](../../personal/favorites.md)* using:
- *[Favorites groups menu](../../personal/favorites.md#add-to-map-markers)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites)*.
- &#128681; icon in the Favorites in-page menu *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites→&#128681;)*.
- **'+'** (add) option  in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.  
  
![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)


### Add GPX

<InfoAndroidOnly />

GPX tracks with waypoints can be transformed into *Map markers*:
- using **'+'** (add) option  in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.  
- by turning on switch near track in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

:::note
Only tracks with waypoints can be added to the *Map markers list*. The track you intend to add should also be visible (active) on the map.
:::

- You can also create *Markers* from a track with waypoints using *[Track context menu](../../map/track-context-menu.md#waypoints-folder)*: *Tap a visible track on the map → in Track context menu chose Points → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)

## Select a marker

Once a marker is added to the map, you can select it as your [destination](./route-navigation.md/#set-destinations) while [Preparing your route](./route-navigation.md). A *Marker* can be picked up:

- In [Navigation menu](./route-navigation.md#set-target-point).  
- Using *[Map markers list](../../personal/markers.md#list)*.
- By tap a *[Marker widget](../../widgets/markers.md)*.
- With single tap a marker on the map.

<!-- screenshot -->

After a *Marker* is selected, the map screen will move to its location and the *[Map context menu](../../map/map-context-menu.md)* will be opened. In that menu you can find information about distance to selected *Marker*.  
From *Map context menu* you can also build navigation to *Marker* using [directions](../../map/map-context-menu.md#directions-to--from) option, [Edit](../../personal/markers.md#add--edit-marker) marker's name (**Android only**), *[Mark marker as passed](#pass-markers)* or *Make *Marker* active* (**Android only**) (this action will put chosen marker on the first place in the *Markers navigation list* and *Markers widget*).

## Navigation list

When you use *Map markers* as destinations for planning and building a specific route, especially with *[Intermediate destinations](./route-navigation.md#intermediate-destinations)*, they serve as waypoints in created by OsmAnd track.  

In other cases *Markers* can be used for navigation one by one from *[Map markers list](../../personal/markers.md#list)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>

### Sort markers

Pressing on a left corner (Android) or right corner (iOS) of a *Map marker* tab in *[Map markers list](../../personal/markers.md#list)* and moving it up or down, you can change its order in *Navigation list* (while moving a marker card you will see a line indicating where the marker will be placed).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Sort Markers in a list Android](@site/static/img/navigation/marker/sort_markers_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Sort Markers in a list iOS](@site/static/img/navigation/marker/sort_markers_ios.png)

</TabItem>

</Tabs>

In Android version of the OsmAnd app, there are other sorting options for *Map markers* *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_more"/>→ 'Sort by' or 'Plan a route')*.

#### Sort markers by ...

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Alternative Markers sorting Android 1](@site/static/img/navigation/marker/sorting_markers_andr_1.png) ![Alternative Markers sorting Android 2](@site/static/img/navigation/marker/sorting_markers_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

You can sort *Markers* by:

- Name (alphabetically). If markers have descriptive names, this can be a useful way to quickly find the marker you are looking for.
- Distance (nearest or farthest first). This option will sort the markers by their distance from your current location.
- Date (recently or a long time ago) This will sort the markers by the date they were added. If you have added a lot of markers over time, this can be a useful way to see which ones are the most recent.

#### Sort markers with Plan a route tool

Using functionality of the [Plan a route](../../plan-route/create-route.md#points-list-and-graph) tool you can sort *Markers* *Dor-to-dor*, put them in reverse order or create a *Round trip*. If you tap a *Navigation* option, *Markers* will be used as [intermediate destinations](../setup/route-navigation.md#intermediate-destinations) while [Route preparation](../setup/route-navigation.md).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly />

</TabItem>

</Tabs>

## Pass markers

*Markers* can be helpful if you want to keep track of your progress on a route or if you want to be notified when you approach the designated place (only when *Markes* serve as waypoints and *[Voice guidance](../guidance/voice-navigation.md)* is enabled).
### Mark as passed

A *Marker* can be marked as passed (Android) or dismissed (iOS) through the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)* (first screenshot).  
When you approach the *Marker* at a distance closer than 40 meters (Android) or 50 meters (iOS), a switch in the *[Markers widgets](../../widgets/markers.md#top-bar-widget)* bar becomes active (second screenshot). By single tap this switch, a *Marker* becomes inactive, and navigation is built to the next one from the [list](#navigation-list).  
After the *Marker* is been dismissed, it gets into the [History](../../personal/markers.md#history) folder, from where it can be restored if needed.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png) 

</TabItem>

</Tabs>

### Next Marker

After one *Marker* is been [passed](#mark-as-passed), the next one in the [list](../../personal/markers.md#list) became active. Depending on your [settings](#how-to-use), you may be guided to it with an arrow or dashed line.

## Related Articles

- [About Map markers](../../personal/markers.md).
- [Marker widget](../../widgets/markers.md).