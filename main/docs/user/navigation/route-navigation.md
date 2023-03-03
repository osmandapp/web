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
Also note, that for correct work of the navigation, you need to grant OsmAnd permission to receive information about [precise location](../start-with/first-steps.md#permission-to-access-the-location) of your device.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigation screen Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigation screen iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>

## How to use

To use offline navigation, you first need to [download maps](../start-with/download-maps.md) of the region you plan to navigate through. Once the maps are downloaded, follow these steps to set up navigation:  

1. Configure each profile you intend to use for navigation according to your needs:  
    - set your [vehicle parameters](../personal/profiles/#vehicle-parameters) (important for truck drivers), select the [engine type](../navigation/#select-engine-type) (optional)
    - configure [route line appearance](./route-line-appearance) (optional, only for Pro users)  
    - choose whether to provide [notifications](./voice-navigation) during your route or not. If you need voice prompts, [configure](./voice-navigation.md#settings-of-voice-prompts) them
2. Go to the navigation [menu](#navigation-menu):
    - specify the [destination point](#set-destination)
    - you can choose between different [routing types](./routing/index.md) to get the best result
    - if needed, add [intermediate destinations](#intermediate-destinations)
    - you can also change departure point from [current location](../map/interact-with-map#my-location--zoom) to the required one
3. Additional [navigation settings](./index.md#navigation-settings) can be used depending on your purposes
4. [Start](#start--stop-navigation) navigation or at first [simulate navigation](./index.md#simulate-navigation) (with this function you can test your route before actually travelling along it)
5. [Stop](#start--stop-navigation) navigation

## Navigation menu  

There are 3 ways to reach navigation menu:

- [the navigation button](../widgets/map-buttons.md#directions) on the map screen  
- *direction to/from* in a [map context menu](../map/map-context-menu#directions-to--from)  
- navigation section in the main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png) ![Navigation menu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png) ![Navigation menu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="shared_string_my_location"/>_ - allows to choose where your route will start. Default value is [my current location](../map/interact-with-map.md#my-location--zoom), but you can set a different one
- &nbsp;_<Translate android="true" ids="add_destination_point"/>_ - is used to [set your destination point](#set-destination)
- &nbsp;_<Translate android="true" ids="search_button"/>_ - opens [the search menu](../search/index.md)
- &nbsp;_<Translate android="true" ids="shared_string_address"/>_ - opens [address search menu](../search/search-address.md)
- &nbsp;_<Translate android="true" ids="shared_string_select_on_map"/>_ - opens the map to chose destinatino point by tapping on the map
- &nbsp;_<Translate android="true" ids="shared_string_favorites"/>_ - allows to use [Favorite](../personal/favorites.md) as destination
- &nbsp;_<Translate android="true" ids="shared_string_markers"/>_ - allows to choose one of the [map markers](../personal/markers.md) for a destination point
- &nbsp;"&#8595;&#8593;"_Swap Starting point and Destination_ - allows to swap Start <-> Finish points
- &nbsp;"&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation

## Choose starting point

As for the starting point, you can choose your current location, location of a [Favorite point](../map/point-layers-on-map.md#favorites), select a point on the map or use [search](../search/index.md). You can also set a starting point in [Map Context menu](../map/map-context-menu.md) by choosing [directions from](../map/map-context-menu.md#directions-to--from) function.  

## Set destination

The most important thing to start navigation is to determine your destination. Destination point can be found using a [search](../search/index.md#overview) function, or simply by scrolling a map. You can also set destination point in [navigation menu](#navigation-menu).  

#### Home - Work points

_Home_ and _Work_ tabs (or [Special points](../personal/favorites.md#special-favorites-personal) of Favorites)  can be used to quickly set destination point in navigation menu.  

#### Previous route

Last route which you built for navigation.

#### History

Tracks list.

### Intermediate destinations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 1](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation intermediate Android 2](@site/static/img/navigation/route/navigation_interpoints_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- &nbsp;"&#x1F589;" - allows to open the destination points list to make changes
- &nbsp;"&#8592;" - moves to Navigation menu screen.
- &nbsp;"&#10005;" - allows to delete destination point from the points list.
- &nbsp;"&#61;" - allows to change point order in the points list.
- &nbsp;"&#43; Add button - opens context menu "Add intermediate".
- &nbsp;"&#9776; Clear all intermediate points" button - allows to clear all points.

If you choose "Sort" (Android) or "Options" (iOS) in the destinations points list, you will reach special options to adjust the order of navigation to intermediate points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In this menu you can find additional options for managing destinations points:
-  *<Translate android="true" ids="intermediate_items_sort_by_distance"/>* - OsmAnd will offer the shortest route between all your destinations, but the order of visiting еруь can be changed. Starting point and final destination won't be touched.
-  *<Translate android="true" ids="switch_start_finish"/>* - starting point and final destination will be swaped.  
-  *<Translate android="true" ids="reverse_all_points"/>* (only Android) - all points will be put in the reverse direction.
-  *<Translate android="true" ids="add_intermediate_point"/>* (or add *<Translate ios="true" ids="add_waypoint_short"/>* for iOS) - you can add intermediate destination from this menu.
-  *<Translate android="true" ids="clear_all_intermediates"/>* - all the intermediate destinations will be removed from the map.

## Start / stop navigation

As soon as your destination point is selected, the app will create a route to it. To start navigation, you need to use "Start" button. To stop navigation mode, tap on the "Stop" button and confirm your choice.  

:::note
After the route is created, in ["Details" section](../navigation/index.md#route-details) you can find additional information (altitude, uphill, downhill, road type, turn-by-turn instructions, etc.), analyze your route on the map, print the route plan, save the route and share it.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

:::note
Even if you turn off the screen or exit the OsmAnd app window, you'll still get voice prompts.  
:::

:::tip
To save phone's battery, you can use [“Turn on screen”](..//personal/profiles.md#appearance) option. Pressing the device power button will show OsmAnd on the top of the lock screen of your phone during navigation.  
:::