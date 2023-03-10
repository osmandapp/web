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


## Overview

The Navigation by route option provides you with simple step-by-step instructions, that help you easily reach your destination. Like other [navigation options](./index.md), *Navigation by route* can be used with different [types of routing](./routing/index.md) (or profiles). No matter whether you drive a [car](./routing/car-based-routing.md), ride a [horse](./routing/horse-ski-routing.md), or [walk](./routing/pedestrian-routing.md).  
By default, OsmAnd has offline navigation enabled. Although you can also use [online routing engines](./routing/online-routing.md).  

:::tip
For correct work of the navigation, you need to give OsmAnd permission to receive information about [precise location](../start-with/first-steps.md#permission-to-access-the-location) of your device.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigation screen Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigation screen iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>

## How to use

To use the offline navigation, you first need to [download maps](../start-with/download-maps.md) of the region you plan to navigate through. Once the maps are downloaded, follow these steps to set up navigation:  

1. Configure profiles you intend to use for navigation according to your needs:  

    - Set your [vehicle parameters](../personal/profiles/#vehicle-parameters) (important for truck drivers), select the [engine type](../navigation/#select-engine-type) (optional).
    - Configure [route line appearance](./route-line-appearance) (optional, only for Pro users).  
    - Choose whether to provide [notifications](./voice-navigation) during your route or not. If you need voice prompts, [configure](./voice-navigation.md#settings-of-voice-prompts) them.
 
2. Go to the [Navigation menu](#navigation-menu):
    - Specify the [destination point](#set-destination).
    - You can switch between different [routing types](./routing/index.md) to get the best result.
    - Add [intermediate destinations](#intermediate-destinations) (optional).
    - You can also change the departure point from the [current location](../map/interact-with-map#my-location--zoom) to the required one.
  
3. Additional [navigation settings](./index.md#navigation-settings) can be used depending on your purposes (avoid roads).

4. [Start](#start--stop-navigation) navigation or at first [simulate navigation](./index.md#simulate-navigation) (with this function you can test your route before actually traveling along it).

5. [Stop](#start--stop-navigation) navigation.

### Navigation menu  

There are 3 ways to reach the navigation menu:

- [The navigation button](../widgets/map-buttons.md#directions) on the map screen.  
- *Direction to/from* in a [map context menu](../map/map-context-menu#directions-to--from).  
- Navigation section in the main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png) ![Navigation menu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png) ![Navigation menu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="shared_string_my_location"/>_ - allows you to choose where your route will start. The default value is [my curent location](../map/interact-with-map.md#my-location--zoom), though you can set a different one.
- &nbsp;_<Translate android="true" ids="add_destination_point"/>_ - is used to [set your destination point](#set-destination).
- &nbsp;_<Translate android="true" ids="search_button"/>_ - opens [the search menu](../search/index.md).
- &nbsp;_<Translate android="true" ids="shared_string_address"/>_ - opens [address search menu](../search/search-address.md).
- &nbsp;_<Translate android="true" ids="shared_string_select_on_map"/>_ - opens the map to choose a destination point by tapping on the map.
- &nbsp;_<Translate android="true" ids="shared_string_favorites"/>_ - allows to use [Favorite](../personal/favorites.md) as a destination.
- &nbsp;_<Translate android="true" ids="shared_string_markers"/>_ - allows to choose one of the [Map markers](../personal/markers.md) as a destination point.
- &nbsp;"&#8595;&#8593;" _Swap Starting point and Destination_ - allows to swap *Start* and *Finish* points.
- &nbsp;"&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation.

### Choose starting point

As for the starting point, you can choose your current location, location of a [Favorite point](../map/point-layers-on-map.md#favorites), select a point on the map or use [Search](../search/index.md). You can also set a starting point in [Map Context menu](../map/map-context-menu.md) by selecting the [Directions from](../map/map-context-menu.md#directions-to--from) function.  

### Set destination

The most important thing to start navigation is to determine your destination. The destination point can be found using a [Search](../search/index.md#overview) function, or simply on a map. You can also set destination point in the [Navigation menu](#navigation-menu). You can also set destination using special options in [Navigation menu](#navigation-menu):  

- Home - Work points - _Home_ and _Work_ tabs (or [Special points](../personal/favorites.md#special-favorites-personal) of Favorites)  can be used to quickly set destination point in the navigation menu.  
- Previous route - Last route which you built for navigation.
- History - Tracks list.

### Intermediate destinations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 1](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation intermediate Android 2](@site/static/img/navigation/route/navigation_interpoints_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- &nbsp;"&#x1F589;" - allows to open the destination points list to make changes.
- &nbsp;"&#8592;" - moves to Navigation menu screen.
- &nbsp;"&#10005;" - allows to delete destination point from the points list.
- &nbsp;"&#61;" - allows to change point order in the points list.
- &nbsp;"&#43; Add" - opens context menu "Add intermediate".
- &nbsp;"&#9776; Clear all" - allows to clear all intermediate points.

If you choose "Sort" (Android) or "Options" (iOS) in the destinations points list, you will reach special options to adjust the order of navigation to intermediate points.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In this menu, you can find additional options for managing destinations points:
-  *<Translate android="true" ids="intermediate_items_sort_by_distance"/>* - OsmAnd will offer the shortest route between all your destinations, however, the order of the visit can be edited. The starting point and the final destination will not be changed.
-  *<Translate android="true" ids="switch_start_finish"/>* - starting point and final destination will be swapped.  
-  *<Translate android="true" ids="reverse_all_points"/>* (only Android) - all points will be put in the reverse direction.
-  *<Translate android="true" ids="add_intermediate_point"/>* (or *<Translate ios="true" ids="add_waypoint_short"/>* for iOS) - you can add intermediate destination from this menu.
-  *<Translate android="true" ids="clear_all_intermediates"/>* - all the intermediate destinations will be removed from the map.

### Start / stop navigation

Once your destination point is selected, the app will create a route to it. To begin navigation, you need to use "Start" button. To stop navigation mode, tap on the "Stop" button and confirm your choice.  

:::note
After the route is created, in the ["Details" section](../navigation/index.md#route-details) you can find additional information (altitude, uphill, downhill, road type, turn-by-turn instructions, etc.), analyze your route on the map, print the route plan, save the route and share it.  
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
Even if you turn off the screen or exit the OsmAnd app, you'll still get voice prompts.  
:::

:::tip
To save your device battery, while navigation you can use [“Screen control”](./voice-navigation#screen-control) options (<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>).  
:::