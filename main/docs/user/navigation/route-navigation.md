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
2. Go to the navigation [menu](#navigation-menu):
    - specify the destination point
    - if needed, add intermediate destinations
    - you can also change departure point from [current location](../map/interact-with-map#my-location--zoom)
3. Additional [navigation settings](./index.md#navigation-settings) can be used depending on your purposes
4. Start / stop navigation

### Navigation menu  

There are 3 ways to reach navigation menu:

- [the navigation button](../widgets/map-buttons.md#directions) on the map screen  
- *direction to/from* in a [map context menu](../map/map-context-menu#directions-to--from)  
- navigation section in the main menu  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen select point Android](@site/static/img/navigation/route/navigation_points_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_points_ios.png)

</TabItem>

</Tabs>

- &nbsp;_<Translate android="true" ids="search_button"/>_ - opens [the search menu](../search/index.md)
- &nbsp;_<Translate android="true" ids="shared_string_address"/>_ - opens [address search menu](../search/search-address.md)
- &nbsp;_<Translate android="true" ids="shared_string_my_location"/>_ - allows to choose [Your position](../map/interact-with-map.md#my-location--zoom) for point
- &nbsp;_<Translate android="true" ids="shared_string_select_on_map"/>_ - opens the map to chose destinatino point by tapping on the map
- &nbsp;_<Translate android="true" ids="shared_string_favorites"/>_ - allows to choose [Favorite](../personal/favorites.md) for point
- &nbsp;_<Translate android="true" ids="shared_string_markers"/>_ - allows to choose [Map marker](../personal/markers.md) for point
- &nbsp;"&#8595;&#8593;"_Swap Starting point and Destination_ - allows to change Start <-> Finish points
- &nbsp;"&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation
- &nbsp;"&#x1F589;" - allows to open destination the points list ("Destinations") for edition

The points list:
- &nbsp;"&#8592;" - moves to Navigation menu screen.
- &nbsp;"Sort" - opens the sort menu with next options of sorting destinations points: _<Translate android="true" ids="intermediate_items_sort_by_distance"/>, <Translate android="true" ids="switch_start_finish"/>, <Translate android="true" ids="reverse_all_points"/>, <Translate android="true" ids="add_intermediate_point"/>, <Translate android="true" ids="clear_all_intermediates"/>_.
- &nbsp;"&#10005;" - allows to delete destination point from the points list.
- &nbsp;"&#61;" - allows to change point order in the points list.
- &nbsp;"&#43; Add button - opens context menu "Add intermediate".
- &nbsp;"&#9776; Clear all intermediate points" button - allows to clear all points.

### Choose destination

The most important thing to start navigation is to determine your destination. Destination point can be found using a [search](../search/index.md#overview) function, or simply by scrolling a map. These possibilities are also available in navigation menu.  

#### Home - Work points

[Special points](../personal/favorites.md#special-favorites-personal) of Favorites in Navigation menu for quickly access.

#### Previous route

Last route which you built for navigation.

#### History

Tracks list.

### Choose starting point

As for the starting point, you can choose your current location, [Favorite location](../map/point-layers-on-map.md#favorites), select a point on the map or use [search](../search/index.md). You can also set a starting point in [Map Context menu](../map/map-context-menu.md) by choosing [directions from](../map/map-context-menu.md#directions-to--from) function.  


### Start / stop navigation

As soon as your points are selected, the app will create a route and will start guiding you after you tap "Start" button. To stop your navigation mode, tap on the "Dismiss" button.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

When the navigation is running, you can press the home button. You will get the message ['OsmAnd is running in the background'](../navigation/route-navigation.md#background-navigation). This means that even if you turn the screen off or exit the active app window, you'll still get voice prompts. For Android versions other than 3.3, we have added the [“Turn on screen”](../navigation/route-navigation.md#turn-on-screen) option. This allows you to show the map on the lock screen during navigation. Now, this function does not request any permissions for the correct operation. You can use it to save phone power. The function is configured separately for each profile. To configure, you need to select a profile that supports navigation and go to Profile settings - General settings - Screen control and enable the Screen timeout option (move the slider to the ON state - should turn blue).  






