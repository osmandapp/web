---
sidebar_position: 1
title:  Route Preparation
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

## Overview

The *route navigation* option provides simple step-by-step instructions to help you reach your destination easily. You can use this navigation with different [routing types](./../routing/osmand-routing.md#routing-types) (or profiles), no matter if you [drive](./../routing/car-based-routing.md), ride a [horse](./../routing/horse-routing.md), [ski](./../routing/ski-routing.md), or [walk](./../routing/pedestrian-routing.md).

:::tip

- *Offline navigation* is enabled in OsmAnd by default. However, you can also use [*online routing engines*](./../routing/online-routing.md).
- For navigation to work correctly, you must permit OsmAnd to receive information about the [*precise location*](../../start-with/first-steps.md#permission-to-access-the-location) of your device.

:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Navigation screen Android 1](@site/static/img/navigation/route/navigation_by_route_andr_1.png) ![Navigation screen Android 3](@site/static/img/navigation/route/navigation_by_route_andr_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS 1](@site/static/img/navigation/route/navigation_by_route_ios_1.png) ![Navigation screen iOS 3](@site/static/img/navigation/route/navigation_by_route_ios_3.png)

</TabItem>

</Tabs>


## Set Destinations

To use the offline navigation, you first need to [download maps](../../start-with/download-maps.md) of the region you plan to navigate through. Once the maps are downloaded, follow these steps to set up navigation:  

1. [*Configure profiles*](../../personal/profiles.md) you intend to use for navigation according to your needs:  
    - Set your [vehicle parameters](../guidance/navigation-settings.md#size-parameters) (important for truck drivers), select the [engine type](../guidance/navigation-settings.md#fuel-used-by-motor) (optional).
    - Configure [route line appearance](../guidance/map-during-navigation#route-line-appearance) (optional, only for [Pro users](../../purchases/index.md#purchases)).  
    - Choose whether to provide [notifications](../guidance/voice-navigation.md) during your route or not. If you need voice prompts, [configure](../guidance/voice-navigation.md#settings-of-voice-prompts) them.
2. Go to the [*Navigation menu*](#navigation-menu):
    - Specify the [destination point](#set-target-point).
    - Wait until the route is calculated. After that, you will be able to obtain additional information about your route in *[Details section](./route-details.md#overview)*.
    - You can switch between different [routing types](./../routing/osmand-routing.md#routing-types) (profiles) to get the best result.
    - Add [intermediate destinations](#intermediate-destinations) (optional).
    - You can also change the departure point from the [current location](../../map/interact-with-map#my-location--zoom) to the required one.
3. Additional [*Navigation settings*](#settings) can be used depending on your purposes (you can configure which roads to avoid or prefer, save fuel or choose the fastest route, etc).
4. [Start](#start--stop-navigation) navigation or at first [simulate navigation](#simulated-navigation) (with this function you can test your route before actually traveling along it).
5. While on the route you can [*Pause/Resume*](#pause--resume-navigation) navigation and [*Stop*](#start--stop-navigation) it.

:::note

- Route cannot be build when *[Online map](../../map/raster-maps.md#select-raster-maps)* is selected as map source.

:::


### Navigation Menu  

There are 3 ways to reach the navigation menu:

- The [*Navigation button*](../../widgets/map-buttons.md#directions) on the map screen.  
- *Direction to/from* in a [*map context menu*](../../map/map-context-menu.md#directions-to--from).  
- Navigation section in the [*Main menu*](../../start-with/main-menu.md)  *(<Translate android="true" ids="shared_string_menu,shared_string_navigation"/>)*.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 1](@site/static/img/navigation/route/navigation_by_route_menu_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 1](@site/static/img/navigation/route/navigation_by_route_menu_ios_2.png)  

</TabItem>

</Tabs>

- *<Translate android="true" ids="shared_string_my_location"/>*. Allows you to select the starting location of the route. The default is [*My Current location*](../../map/interact-with-map.md#my-location--zoom), but you can set a different value.
- *<Translate android="true" ids="add_destination_point"/>*. Use to [set your destination point](#set-target-point).
- &#43; &nbsp; *Add*. Allows you to add [intermediate points](../../widgets/nav-widgets.md#intermediate-destination) for navigation.
- &#8595;&#8593; &nbsp; *Swap*. Allows you to swap the *Start* and *Finish* points.
- &#128266; &nbsp; *Sound*. You can use it to mute the [voice prompts](../guidance/voice-navigation.md).
- &#x2699 &nbsp; *<Translate android="true" ids="shared_string_settings"/>*. Opens a menu where you can quickly customize some [navigation settings](#settings).

In the *Navigation menu* you can set your destination using:

- Special favories points [***Home / Work***](#use-home-or-work-points).
- Previous route or [*History*](../../personal/global-settings.md#history).

The cancel button at the bottom of the screen leads back to the main screen. [*Start button*](#start--stop-navigation) can be used to start Navigation after route calculation has ended.
  
### Select Starting Point

As for the starting point, you can choose your current location, the location of a [Favorite point](../../map/point-layers-on-map.md#favorites), select a point on the map, or use [Search](../../search/index.md). You can also set a starting point in [map context menu](../../map/map-context-menu.md) by selecting the [Directions from](../../map/map-context-menu.md#directions-to--from) function.  


### Set Target Point

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation menu Android 2](@site/static/img/navigation/route/navigation_by_route_menu_andr_2.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigation menu iOS 2](@site/static/img/navigation/route/navigation_by_route_menu_ios_1.png)

</TabItem>

</Tabs>

The most important thing to start navigation is to determine your destination. The destination point can be found using a [*Search*](../../search/index.md#overview) function, or simply on a map. You can also set target point in the [*Navigation menu*](#navigation-menu):  

- *<Translate android="true" ids="search_button"/>* - opens [the search menu](../../search/index.md).
- *<Translate android="true" ids="shared_string_address"/>* - opens [address search menu](../../search/search-address.md).
- *<Translate android="true" ids="shared_string_select_on_map"/>* - opens the map to choose a destination point by tapping on the map.
- *<Translate android="true" ids="shared_string_favorites"/>* - allows to use [Favorite](../../personal/favorites.md) as a destination.
- *<Translate android="true" ids="shared_string_markers"/>* - allows to choose one of the [Map markers](../../personal/markers.md) as a destination point.
- &#8595;&#8593; &nbsp; *Swap Starting point and Destination* - allows to swap *Start* and *Finish* points.

### Intermediate Destinations

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 1](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation intermediate Android 2](@site/static/img/navigation/route/navigation_interpoints_android_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 1](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_1.png) ![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_2.png)

</TabItem>

</Tabs>

- **&nbsp;&#x1F589;** - allows to open the destination points list to make changes.
- **&nbsp;&#8592;** - moves to Navigation menu screen.
- **&nbsp;&#10005;** - allows to delete destination point from the points list.
- **&nbsp;&#61;** - allows to change point order in the points list.
- *&nbsp;&#43; Add* - opens context menu *Add intermediate*.
- *&nbsp;&#9776; Clear all* - allows to clear all intermediate points.

If you choose **Sort** (*Android*) or **Options** (*iOS*) in the destinations list, you will reach special options to adjust the order of navigation to intermediate points.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation intermediate Android 3](@site/static/img/navigation/route/navigation_interpoints_android_3.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation intermediate iOS 2](@site/static/img/navigation/route/navigation_by_route_intermediate_ios_3.png)

</TabItem>

</Tabs>

In this menu you can find additional options for managing the destination points:

- *<Translate android="true" ids="intermediate_items_sort_by_distance"/>*. OsmAnd will offer the shortest route between all your destinations, however, the order of the visit can be edited. The starting point and the final destination will not be changed.
- *<Translate android="true" ids="switch_start_finish"/>*. The starting point and final destination will be swapped.  
- *<Translate android="true" ids="reverse_all_points"/>* (Android only). All points will be put in the reverse direction.
- *<Translate android="true" ids="add_intermediate_point"/>* (or *<Translate ios="true" ids="add_waypoint_short"/>* for iOS). You can add intermediate destinations from this menu.
- *<Translate android="true" ids="clear_all_intermediates"/>*. All the intermediate destinations will be removed from the map.

### Use Home or Work Points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Special favorites Android](@site/static/img/navigation/route/special_favorite_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Special favorites iOS](@site/static/img/navigation/route/special_favorite_ios.png)

</TabItem>

</Tabs>

*Home* and *Work* tabs (or [Special points](../../personal/favorites.md#special-favorites-personal) of Favorites)  can be used to quickly set destination points in the navigation menu. If you have not entered the addresses of the Special favorites, these cells will remain empty. If you tap this field, you will be prompted to create these POIs.  


### History of Previous Routes

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Previous route Android](@site/static/img/navigation/route/previous_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Previous route  iOS](@site/static/img/navigation/route/previous_ios.png)  

</TabItem>

</Tabs>

If  [Navigation History](../../personal/global-settings.md#history) recording is enabled, you can use the previous routes or destinations from the history list for navigation. This option can be useful for quick access to frequently used routes. Items in the history list are sorted by most recent use, starting with the newest.  

:::note

- When [logging of History](../../personal/global-settings.md#history-options) data is disabled, you will not be prompted to use previous routes for navigation.
- You can delete some or all history records about your previous routes. This can be done on the *[Navigation history](../../personal/global-settings.md#history-options)* tab of the History option (*Menu → Settings → OsmAnd settings → History*).

:::


## Start / Stop Navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png) ![Navigation screen finish Android](@site/static/img/navigation/route/navigation_finish_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

</TabItem>

</Tabs>

Once start and end points are selected, the app will create a route between them using an active profile.
Once start and end points are selected, the app will create a route between them using an active profile. [The App profile](../../personal/profiles.md) and [widgets](../../widgets/index.md) set will only switch once you click the *Start* button of navigation.

- To begin navigation, you should tap the **Start** button.
- To stop navigation mode, tap the *[Navigation](../../widgets/map-buttons.md#directions)* button at the bottom of the screen, than choose **Dismiss** (*Android*) or **Cansel** (*iOS*) and confirm your choice.
- In the Android version of the app, when you reach your destination, OsmAnd proposes to finish navigation, recalculate the route, or find parking. In the iOS version, Osmand only announces the end of the route.

:::note

- After the route is created, in the *[Details](../setup/route-details.md)* section you can find additional information (altitude, uphill, downhill, road type, turn-by-turn instructions, and others), analyze your route on the map, print the route plan, save the route and share it.

:::

### Route Recalculation

The route can be recalculated automatically in case of deviation from it. You can change the parameters of the recalculation in the [Navigation settings](../guidance/navigation-settings.md#recalculate-route). You can also disable notification about route recalculation in the settings of [Voice prompts](../guidance/voice-navigation.md#voice-settings).

### Pause / Resume Navigation

<InfoAndroidOnly/>

If you want to stop for a break and deviate from the route for a short time, you can use the *Pause/Resume* navigation function to pause voice prompts and stop recalculating the route.  
This option is available in the Android version of the app in *[Notification list](../guidance/voice-navigation.md#text-notifications)* or from the *[Quick actions menu](../../widgets/quick-action.md)*.

![Notification screen Android](@site/static/img/navigation/route/navigation_pause_android.png)

To resume the navigation, you can use the previously mentioned message from OsmAnd in the notification bar, *Quick actions menu* or dialog, that appears when you tap the *[Navigation button](../../widgets/map-buttons.md#directions)* (see screenshot).  
Please note, that when you tap the *Navigation button* while on your route, navigation doesn't stop, and voice prompts continue to be voiced, although proposed options (*Resume* (for Android) or *Start* (for iOS)) may be confusing.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Resume navigation Android](@site/static/img/navigation/route/navigation_menu_start_pause_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Resume navigation ios](@site/static/img/navigation/route/navigation_menu_start_pause_ios_1.png)

</TabItem>

</Tabs>

### Saving Power during Navigation

Navigation consumes a lot of power due to the continuous use of GPS, Screen is on, and route calculation. So to save your device's battery, you can try using the following tips:

- Even if you turn off the screen or exit the OsmAnd app, you'll still get voice prompts (it will run in the background).  
- While navigation you can use *[Screen control](../guidance/voice-navigation.md#screen-control)* options (<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,turn_screen_on"/>).  


## Settings

![Route preparation Android](@site/static/img/navigation/route/navigation_menu_settings_andr.png)


### Navigation Settings

To access the navigation settings, follow one of the steps below:

- *<Translate android="true" ids="shared_string_menu,shared_string_settings,shared_string_profiles,app_mode_car,routing_settings_2"/>*.  
- *Navigation button → <Translate android="true" ids="shared_string_settings,routing_settings_2"/>*.  
- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,routing_settings_2"/>*.

:::info
There are no navigation settings in *Browse map* profile.  
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

- &nbsp;**<Translate android="true" ids="nav_type_hint"/>** determines how routes are calculated. For example, your bicycle profile has a Cycling navigation type, which sets the routing rules. You can import these roules (as routing.xml file) in OsmAnd. More about routing you can read on our [GitHub](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing) page.&nbsp;  

- &nbsp;**<Translate android="true" ids="route_parameters"/>** controls which parameters will be used during routing (this is the process of selecting a route for navigation).

Please read about route parameters for the corresponding navigation type.

How to configure [routing type](../routing/osmand-routing.md#routing-types) and [route parameters](../guidance/navigation-settings.md#route-parameters) you can read in the [Navigation settings article](../guidance/navigation-settings.md) or in articles about specific types of routing in the [Route Parameters section](../routing/osmand-routing.md#routing-types).  


### Simulated Navigation

The simulated navigation option allows users to test and preview a navigation route without physically traveling along it. This can be useful for:

- ***Planning***. You can see how long it may take to complete the entire route or its single segment.
- ***Familiarization***. You can familiarize yourself with the route before you go along it. This can be useful in unfamiliar areas, such as a new city or a difficult transport interchange.
- ***Testing***. You can test the OsmAnd navigation system itself to make sure it works correctly and provides accurate instructions.  

#### Start / Stop Simulation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_1.png)

</TabItem>

</Tabs>

When a navigation route is built, you can start simulating navigation using the *<Translate android="true" ids="simulate_navigation"/>* option.  

- In the *[Navigation menu](#navigation-menu)* go to *<Translate android="true" ids="shared_string_settings,simulate_navigation"/>*.
- Toggle the switch to enable the option.
- Tapping the *[Start navigation](#start--stop-navigation)* button starts the simulation.
- To stop the navigation simulation, tap *[Dismiss](#start--stop-navigation)* (Android), or *[Cancel](#start--stop-navigation)* (iOS).


#### Simulation Settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →  &#x2699*

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_andr_2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate android="true" ids="shared_string_navigation,shared_string_settings,simulate_navigation"/>  →  &#x2699*

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

</TabItem>

</Tabs>

- ***<Translate android="true" ids="simulation_preview_mode_title"/>***. Simulation speeds will be maximized on straight sections and reduced only at intersections.
- ***<Translate android="true" ids="simulation_constant_mode_title"/>***. The simulation will run at a constant selected speed.
- ***<Translate android="true" ids="simulation_real_mode_title"/>***.
    - On straight sections of the road, the speed will be close to the maximum allowable speed.
    - At intersections, the simulator will reduce speed.
    - Additional penalties will be applied at traffic lights, stop signs, and other similar obstacles.


## Troubleshouting

If you encounter difficulties when creating a route, refer to the troubleshooting instructions in the *[special documentation section](../../troubleshooting/navigation.md)*. There you can find information about:

- The possible causes of *[slow route calculation](../../troubleshooting/navigation.md#route-calculation-is-slow)*.
- What to do if the route length *[exceeds 250 kilometers](../../troubleshooting/navigation.md#how-to-calculate-routes-longer-than-250km)*.
- What to do if the suggested *[route seems incorrect](../../troubleshooting/navigation.md#the-calculated-route-does-not-seem-correct)*.
- How to solve the situation when navigation is not possible due to *[the lack of necessary maps](#maps-missing-or-not-synchronized)*.

### Maps Missing or Not Synchronized

To build a route all **necessary maps** need to be downloaded and have the same release date. Please note, that in some situations missing maps message could be hidden in the route preparation menu. If you pull the navigation menu up, you will see possible reasons why your route couldn't be calculated.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message no maps when building navigation Android 5](@site/static/img/navigation/route/navigation_by_route_no_maps_5.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Message no maps when building navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_1_ios.png)
</TabItem>

</Tabs>

#### Required maps

In the required maps dialog you will see suggestions of maps to be downloaded or updated. The list of used maps might be not precise as it calculates a very basic route, to get the precise list of maps you can click **Calculate online**. If you select **Use downloaded maps** then routing calculation will try to use already downloaded maps and skip the warning message.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Message no maps when building navigation Android](@site/static/img/navigation/route/navigation_by_route_no_maps_1.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Message no maps when building navigation iOS](@site/static/img/navigation/route/navigation_by_route_no_maps_2_ios.png)

</TabItem>

</Tabs>


## Related Articles

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route details](./route-details.md)
- [Navigation by track](./gpx-navigation.md)
- [Navigation by markers](./markers-navigation.md)
- [Navigation settings](../guidance/navigation-settings.md)
- [Map screen during navigation](../guidance/map-during-navigation.md)
- [Voice prompts / Notifications](../guidance/voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in September 2024*
