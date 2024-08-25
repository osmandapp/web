---
sidebar_position: 3
title:  Navigate by Markers
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

> *This article was last updated in June 2024.*

## Overview

[Map markers](../../personal/markers.md) are points on the map marked by flags. They can be used for a variety of purposes, such as to indicate a location that you want to visit, a point of interest that you want to remember, or to create a custom route. They can be particularly helpful for hikers, bikers, or anyone exploring a new area who wants to mark interesting locations or points of reference on the map. Main difference from [Favorite points](../../personal/favorites.md), Markers are faster to create as they don't require a name.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation marker Android](@site/static/img/navigation/marker/navigation_marker_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation marker iOS](@site/static/img/navigation/marker/navigation_marker_ios.png)

</TabItem>

</Tabs>

## Use markers in navigation
  *Map markers* can serve as [destinations](./route-navigation.md/#set-destinations) while building a route. They are especially convenient when you need to set a route with intermediate points.

  However *Map markers* also provide various functionality such as [widgets](../../widgets/markers.md), direction of movements, lines on the map, so you could use these tools for navigation without building a route line and entering full voice guidance navigation.

  In case you need a simple point to point navigation displayed as straight lines, you can build and sort ***Itinerary list*** consisted of markers as intermediate points and use widgets for simple navigation. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

 ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_2.png) ![Difference marker navigation Android](@site/static/img/navigation/marker/markers_ex_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Difference marker navigation iOS 2](@site/static/img/navigation/marker/markers_ex_ios_2.png) ![Difference marker navigation iOS 1](@site/static/img/navigation/marker/markers_ex_ios_1.png) 

</TabItem>

</Tabs>

Here are simple recommendation steps to *Navigate by markers*:

1. Create markers. Find the desired object(s) on the map, tap it, and choose the *[Marker button](../../personal/markers.md#add-marker-on-the-map)* in the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)*. You can also make markers from [favorites](#add-favorite-group) or [GPX tracks](#add-gpx).
2. [*Sort markers*](#sort-markers) in preferred way you want to pass them
3. Customise *Map markers view* if you would like to use Markers without starting Navigation. Enable **Arrows on the map** and **Direction line** options in the *[Appearance](../../personal/markers.md#appearance-on-the-map)* section of *[Map markers menu](../../personal/markers.md#map-markers-menu)*.
4.  Add *[Markers widgets](../../personal/markers.md#marker-widgets)* in *[Configure screen menu](../../widgets/configure-screen.md)* (optional).
5. [*Mark as passed*](#pass-markers) already visited markers or restore them from the history if you want to pass them again.
   
:::note
When **Arrows on the map** and **Direction line** options are enabled in *Appearance* section of [Map markers menu](../../personal/markers.md#appearance-on-the-map), you will see an arrow or dashed line on the map. The arrow shows the direction to the active marker when it is outside the current map screen. Direction line is drawn when your geolocation and marker are both on the same screen.  
:::

## Itinerary list

Itinerary list represents an ordered list of *passable* markers that are visible on the map. You can add and delete points one by one or do it in batch using prepared in advance [GPX file](#add-group-of-track-waypoints) or [Favorite group](#add-group-of-favorite). For local competitions or adventure it might be useful to create a list points from coordinates using [Coordinate input tool](../../plan-route/coordinate-input.md). 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Markers list Android](@site/static/img/navigation/marker/markers_list_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Markers list iOS](@site/static/img/navigation/marker/markers_list_ios.png)

</TabItem>

</Tabs>

### Add single markers

*Markers* can be added or deleted from the map by single tap the screen at the desired location. Then you need to follow instructions from the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)* article.  

### Add Group of Favorite

<InfoAndroidOnly />

You can create *Map markers* from *[Favorites](../../personal/favorites.md)* using:
- *[Favorites groups menu](../../personal/favorites.md#add-to-map-markers)* *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites)*.
- &#128681; icon in the Favorites in-page menu *(<Translate android="true" ids="shared_string_menu,shared_string_my_places"/>→My Favorites→&#128681;)*.
- **'+'** (add) option  in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→+)*.  
  
![Favorites to markers 1](@site/static/img/navigation/marker/markers_favorites_andr_3.png) ![Favorites to markers 2](@site/static/img/navigation/marker/markers_favorites_andr_2.png)


### Add Group of Track Waypoints

<InfoAndroidOnly />

GPX tracks with waypoints can be used as *Map markers* and quickly switched off:
- using **'+'** (add) option  in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.  
- by turning on switch near track in *[Groups tab](../../personal/markers.md#groups)* in Map markers menu *(<Translate android="true" ids="shared_string_menu,map_markers,shared_string_groups"/>→ +)*.

![GPX to markers 1](@site/static/img/navigation/marker/track_to_markers_andr.png)

:::note
Only tracks with waypoints can be added to the *Map markers list*. The track you intend to add should also be visible (active) on the map.
:::

- You can also create *Markers* from a track with waypoints using *[Track context menu](../../map/tracks/track-context-menu.md#waypoints-folder)*: *Tap a visible track on the map → in Track context menu chose Points → '&#8942;' → <Translate android="true" ids="add_group_to_markers"/>*

![GPX to markers 2](@site/static/img/navigation/marker/track_to_markers_andr_2.png) ![GPX to markers 3](@site/static/img/navigation/marker/track_to_markers_andr_3.png)


## Sort markers

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

### Sort by attributes

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

### Reorder with a Plan route tool

<InfoAndroidOnly />

Using functionality of the Plan a route in Markers list tool you can sort *Markers* *Door-to-door*, put them in reverse order or create a *Round trip*. If you tap a *Navigation* option, *Markers* will be used as [intermediate destinations](../setup/route-navigation.md#intermediate-destinations).

![Alternative Markers sorting Android 3](@site/static/img/navigation/marker/sorting_markers_andr_3.png) ![Alternative Markers sorting Android 4](@site/static/img/navigation/marker/sorting_markers_andr_4.png)

## Pass markers

A *Marker* can be marked as passed (Android) or dismissed (iOS)
- Through the *[Map context menu](../../map/map-context-menu.md#add--edit-marker)* (first screenshot).  
- When you approach the *Marker* at a distance closer than 40 meters (Android) or 50 meters (iOS), a switch in the *[Markers widgets](../../widgets/markers.md#top-bar-widget)* bar becomes active (second screenshot).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Pass Marker Android 1](@site/static/img/navigation/marker/pass_markers_andr_1.png) ![Pass Marker Android 2](@site/static/img/navigation/marker/pass_markers_andr_2.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Pass Marker iOS 1](@site/static/img/navigation/marker/pass_markers_ios_1.png) ![Pass Marker iOS 2](@site/static/img/navigation/marker/pass_markers_ios_2.png) 

</TabItem>

</Tabs>

After the *Marker* is been passed, it gets into the [History](../../personal/markers.md#history) folder, from where it can be restored if needed. The next marker in the [list](#itinerary-list) became active. Depending on your [settings](#how-to-use), you may be guided to it with an arrow or dashed line.


## Related Articles

- [About Map markers](../../personal/markers.md).
- [Marker widget](../../widgets/markers.md).  
__
- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](./route-navigation.md)
- [Route details](./route-details.md)
- [Navigation by track](./gpx-navigation.md)
- [Navigation settings](../guidance/navigation-settings.md)
- [Map screen during navigation](../guidance/map-during-navigation.md)
- [Voice prompts / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)