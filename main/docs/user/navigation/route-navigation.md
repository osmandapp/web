---
sidebar_position: 2
title:  Navigation by route
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

The Navigation by route option provides you with simple step-by-step instructions, that help you easily reach your destination. No matter whether you drive a [car](./routing/car-based-routing.md), ride a [horse](./routing/horse-ski-routing.md), or go by [foot](./routing/pedestrian-routing.md).  

## Overview

Like other navigation options, *Navigation by route* can be used with different [types of routing](./routing/index.md), i.e. profiles. By default, OsmAnd provides offline navigation, but you can also use [online routing engines](./routing/online-routing.md).  
Also note, that for correct work of the navigation, you need to grant OsmAnd permission to receive information about precise location of your device.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android](@site/static/img/navigation/route/navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_ios.png)

</TabItem>

</Tabs>

## How to use

1. Configure each profile you intend to use for navigation according to your needs:  
    - set your [vehicle parameters](../personal/profiles/#vehicle-parameters), select the engine type
    - configure [route line appearance](./route-line-appearance) (optional, only for Pro users)  
    - choose whether to provide [voice prompts](./voice-navigation) during your route or not
2. Set navigation using search or by choosing one of the [navigation options](#navigation-options):
    - specify the destination point
    - if needed, add intermediate destinations
    - you can also change departure point from [current location](../map/interact-with-map#my-location--zoom)
3. Additional [navigation settings](./index.md#navigation-settings) can be used depending on your purposes
4. Start / stop navigation

### Navigation options  

In order to start a navigation, you need to choose your destination point. This can be done using a search button, by a single tap on a map in a context map menu, or using [navigation options](#navigation-options).  

To start the navigation, you need to use [the navigation button](../widgets/map-buttons.md#directions) on the map screen. You can also use *direction to/from option* in the [map context menu](../map/map-context-menu#directions-to--from) or choose navigation section in the main menu:  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>*

Next, you'll need to set the starting point and the destination. As for the starting point, you can choose your current location, [Favorite location](../map/point-layers-on-map.md#favorites), select a point on the map or use [an address](../search/index.md). You can also set a starting point by long tap on the map and choosing [Directions from](../map/map-context-menu.md#directions-to--from) in [Map Context menu](../map/map-context-menu.md). To navigate to a point, just press the navigation button in its context menu.

![Navigation screen select point Android](@site/static/img/navigation/route/navigation_points_android.png)

Tap to _<Translate android="true" ids="route_from"/>_ (your current position by default) or _<Translate android="true" ids="route_from"/>_ for select Start-Finish points of your navigation:
- &nbsp;_<Translate android="true" ids="search_button"/>_ - opens [the search menu](../search/index.md) for choosing point.
- &nbsp;_<Translate android="true" ids="shared_string_address"/>_ - opens [address search menu](../search/search-address.md) for choosing point.
- &nbsp;_<Translate android="true" ids="shared_string_my_location"/>_ - allows to choose [Your position](../map/interact-with-map.md#my-location--zoom) for point.
- &nbsp;_<Translate android="true" ids="shared_string_select_on_map"/>_ - opens the map for choosing point by tapping on the map.
- &nbsp;_<Translate android="true" ids="shared_string_favorites"/>_ - allows to choose [Favorite](../personal/favorites.md) for point.
- &nbsp;_<Translate android="true" ids="shared_string_markers"/>_ - allows to choose [Map marker](../personal/markers.md) for point.
- &nbsp;_Swap Starting point and Destination_ - allows to change Start <-> Finish points.


"Swap Starting point and Destination" and "&#43;" buttons:
- &nbsp;"&#8595;&#8593;"_Swap Starting point and Destination_ - allows to change Start <-> Finish points.
- &nbsp;"&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation.
- &nbsp;"&#x1F589;" - allows to open destination the points list ("Destinations") for edition.

 The points list:
  - &nbsp;"&#8592;" - moves to Navigation menu screen.
  - &nbsp;"Sort" - opens the sort menu with next options of sorting destinations points: _<Translate android="true" ids="intermediate_items_sort_by_distance"/>, <Translate android="true" ids="switch_start_finish"/>, <Translate android="true" ids="reverse_all_points"/>, <Translate android="true" ids="add_intermediate_point"/>, <Translate android="true" ids="clear_all_intermediates"/>_.
  - &nbsp;"&#10005;" - allows to delete destination point from the points list.
  - &nbsp;"&#61;" - allows to change point order in the points list.
  - &nbsp;"&#43; Add" button - opens context menu "Add intermediate".
  - &nbsp;"&#9776; Clear all intermediate points" button - allows to clear all points.

![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android_2.png) ![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android_3.png)  

As soon as your points are selected, the app will create a route and will start guiding you after you tap "Start" button. To stop your navigation mode, tap on the "Dismiss" button.  

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png)

When the navigation is running, you can press the home button. You will get the message ['OsmAnd is running in the background'](../navigation/route-navigation.md#background-navigation). This means that even if you turn the screen off or exit the active app window, you'll still get voice prompts. For Android versions other than 3.3, we have added the [“Turn on screen”](../navigation/route-navigation.md#turn-on-screen) option. This allows you to show the map on the lock screen during navigation. Now, this function does not request any permissions for the correct operation. You can use it to save phone power. The function is configured separately for each profile. To configure, you need to select a profile that supports navigation and go to Profile settings - General settings - Screen control and enable the Screen timeout option (move the slider to the ON state - should turn blue).  

</TabItem>

<TabItem value="ios" label="iOS">

To start navigation, you can use [the navigation button](../widgets/map-buttons.md#directions) on the map screen. Or choose navigation item in the main menu:

*<Translate ios="true" ids="menu,routing_settings"/>*

Next, you'll need to set the starting point and the destination. As for the starting point, you can choose your current location, [Favorite location](../map/point-layers-on-map.md#favorites), select a point on the map or use [an address](../search/index.md). You can also set a starting point by long tapping on the map and choosing ['Directions from'](../map/map-context-menu.md#directions-to--from) in [Map Context menu](../map/map-context-menu.md). To navigate to a point, just press the navigation button in its context menu.

![Navigation screen iOS](@site/static/img/navigation/route/navigation_points_ios.png)

Tap to _<Translate ios="true" ids="route_from"/>_ (your current position by default) or _<Translate ios="true" ids="route_from"/>_ for select Start-Finish points of your navigation:
- &nbsp;_<Translate ios="true" ids="search_activity"/>_ - opens [the search menu](../search/index.md) for choosing point.
- &nbsp;_<Translate ios="true" ids="shared_string_address"/>_ - opens address search menu for choosing point.
- &nbsp;_<Translate ios="true" ids="shared_string_my_location"/>_ - allows to choose Your position for point.
- &nbsp;_<Translate ios="true" ids="shared_string_select_on_map"/>_ - opens the map for choosing point by tapping on the map.
- &nbsp;_<Translate ios="true" ids="my_favorites"/>_ - allows to choose [Favorite](../personal/favorites.md) for point.
- &nbsp;_<Translate ios="true" ids="map_markers"/>_ - allows to choose [Map marker](../personal/markers.md) for point.
- &nbsp;_<Translate ios="true" ids="swap_points"/>_  - allows to change Start <-> Finish points.


&nbsp;_<Translate ios="true" ids="swap_points"/>_ and "&#43;" buttons:
- &nbsp;_<Translate ios="true" ids="swap_points"/>_ - allows to change Start <-> Finish points.
- "&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation.
- &nbsp;"&#x1F589;" - allows to open destination the points list ("Destinations") for edition.

 The points list:
  - &nbsp;"Options" - opens the sort menu with next options of sorting destinations points: _<Translate ios="true" ids="intermediate_items_sort_by_distance"/>, <Translate ios="true" ids="switch_start_finish"/>, <Translate ios="true" ids="add_waypoint_short"/>, <Translate ios="true" ids="clear_all_intermediates"/>_.
  - &nbsp;"&#10005;" - allows to delete destination point from the points list. At first, you need to side-move the point line.
  - &nbsp;"&#9776;" - allows to change point order in the points list.
  - &nbsp;"&#9776; <Translate ios="true" ids="clear_all_intermediates"/>" button - allows to clear all intermediate points from the list.
  - &nbsp;"<Translate ios="true" ids="poi"/>" button - allows to choose [categories of POI](../map/point-layers-on-map.md#poi-types) for showing on the map.  
  - &nbsp;"<Translate ios="true" ids="my_favorites"/>" button - allows showing the info of your [Favorites](../personal/favorites.md) points on [the widget](../widgets/nav-widgets.md#approach-poisfavorites) with editing distance from your location to Favorite.
  - &nbsp;"<Translate ios="true" ids="show_traffic_warnings"/>" button - allows showing the info about [Traffic Warnings](../widgets/nav-widgets.md#alert-types) on your way. Tapping on "&#10005;" button near the warning delete it from your navigation way.

![Navigation interpoints ios](@site/static/img/navigation/route/navigation_interpoints_ios.png) ![Navigation interpoints ios](@site/static/img/navigation/route/navigation_interpoints_ios_2.png) ![Navigation interpoints ios](@site/static/img/navigation/route/navigation_interpoints_ios_3.png)

As soon as your points are selected, the app will create a route and will start guiding you after you tap "Start" button. To stop your navigation mode, tap on the "Cancel" button.


![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

When the navigation is running, you can press the home button. You will get the message 'OsmAnd is running in the background'. This means that even if you turn the screen off or exit the active app window, you'll still get voice prompts.

</TabItem>

</Tabs>

### Home - Work points

[Special points](../personal/favorites.md#special-favorites-personal) of Favorites in Navigation menu for quickly access.

### Previous route

Last route which you built for navigation.

### History

Tracks list.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,osmand_settings,shared_string_history"/>*

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="menu,sett_settings,osmand_settings"/>*

</TabItem>

</Tabs>

## Routing features



