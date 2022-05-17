---
sidebar_position: 1
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


<InfoIncompleteArticle/>


The navigation function allows you to reach your destination easily using voice guidance (optional).

![Navigation screen Android](@site/static/img/navigation/route/navigation_android.png) ![Navigation screen iOS](@site/static/img/navigation/route/navigation_ios.png)

## How to use

To start the navigation, you need to use [the navigation button](../widgets/map-buttons.md#directions) on the map screen. Or choose navigation option in the main menu:

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation"/>

<p> </p>

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings"/>

<p> </p>

Next, you'll need to set the starting point and the destination. As for the starting point, you can choose your current location, [Favorite location](../map/point-layers-on-map.md#favorites), select a point on the map or use [an address](../search/index.md). You can also set a starting point by long tapping on the map and choosing ['Directions from'](../map/map-context-menu.md#directions-to--from) in [Map Context menu](../map/map-context-menu.md). To navigate to a point, just press the navigation button in its context menu.

![Navigation screen select point Android](@site/static/img/navigation/route/navigation_points_android.png) ![Navigation screen iOS](@site/static/img/navigation/route/navigation_points_ios.png)

Tap to <Translate android="true" ids="route_from"/> (your current position by default) or <Translate android="true" ids="route_from"/> for select Start-Finish points of your navigation:
- &nbsp;<Translate android="true" ids="search_button"/> - opens [the search menu](../search/index.md) for choosing point.
- &nbsp;<Translate android="true" ids="shared_string_address"/> - opens address search menu for choosing point.
- &nbsp;<Translate android="true" ids="shared_string_my_location"/> - allows to choose Your position for point.
- &nbsp;<Translate android="true" ids="shared_string_select_on_map"/> - opens the map for choosing point by tapping on the map.
- &nbsp;<Translate android="true" ids="shared_string_favorites"/> - allows to choose [Favorite](../personal/favorites.md) for point.
- &nbsp;<Translate android="true" ids="shared_string_markers"/> - allows to choose [Map marker](../personal/markers.md) for point.
- &nbsp;Swap Starting point and Destination - allows to change Start <-> Finish points.


"Swap Starting point and Destination" and "&#43;" buttons:
- "Swap Starting point and Destination" - allows to change Start <-> Finish points.
- "&#43;" - allows to add [intermediate points](../widgets/nav-widgets.md#intermediate-destination) for navigation.


 As soon as your points are selected, the app will create a route and will start guiding you after you tap "Start" button.


![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png) ![Navigation screen iOS](@site/static/img/navigation/route/navigation_start_ios.png)

When the navigation is running, you can press the home button. You will get the message 'OsmAnd is running in the background'. This means that even if you turn the screen off or exit the active app window, you'll still get voice prompts. For Android versions other than 3.3, we have added the “Turn on screen” option. This allows you to show the map on the lock screen during navigation. Now, this function does not request any permissions for the correct operation. You can use it to save phone power. The function is configured separately for each profile. To configure, you need to select a profile that supports navigation and go to Profile settings - General settings - Screen control and enable the Screen timeout option (move the slider to the ON state - should turn blue).

### Navigation options

- &nbsp;<Translate android="true" ids="shared_string_sound"/> - allows to switch on/off navigation prompts and to open [Voice prompts](../navigation/voice-navigation.md) menu.
- &nbsp;<Translate android="true" ids="routing_attr_driving_style_name"/> (bicycle..) - allows to choose driving style for bicycle navigation type: <Translate android="true" ids="routing_attr_prefer_unpaved_name"/>, <Translate android="true" ids="routing_attr_driving_style_safety_name"/>, <Translate android="true" ids="routing_attr_driving_style_balance_name"/>, <Translate android="true" ids="routing_attr_driving_style_speed_name"/>.
- &nbsp;<Translate android="true" ids="routing_attr_height_obstacles_name"/> (bicycle..) - allows to avoid strong uphills: <Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>.
- &nbsp;<Translate android="true" ids="routing_attr_allow_motorway_name"/> (bicycle..) - allows to avoid or prefer motorways.
- &nbsp;<Translate android="true" ids="impassable_road"/> - allows to select a road you want to avoid during navigation, either on the map.
- &nbsp;<Translate android="true" ids="show_along_the_route"/> - allows to shows [POI, My Favourites](../widgets/nav-widgets.md#approach-poisfavorites), [Traffic warnings](../widgets/nav-widgets.md#alert-widget) along the route.
- &nbsp;<Translate android="true" ids="follow_track"/> - allows to choose a track for [navigation by it](../navigation/gpx-navigation.md).
- &nbsp;<Translate android="true" ids="routing_attr_allow_private_name"/> - allows to navigate to private zone.
- &nbsp;<Translate android="true" ids="routing_attr_short_way_name"/> - calculates navigation by fuel-efficient algorithm.
- &nbsp;<Translate android="true" ids="temporary_conditional_routing"/> - allows to consider temporary limitations.
- &nbsp;<Translate android="true" ids="routing_settings_2"/> - opens Navigation settings of app profile.
- &nbsp;<Translate android="true" ids="customize_route_line"/> - opens menu of Route line.
- &nbsp;<Translate android="true" ids="simulate_navigation"/> - allows to simulate your navigation.


### Home - Work points

[Special points](../personal/favorites.md#special-favorites-personal) of Favorites in Navigation menu for quickly access.

### Previous route

Last route which you built for navigation.

### Displayed tracks

List of shown track on the map. Clicking by one of it opens [Follow track](../navigation/gpx-navigation.md) menu function.

### History

Tracks list.

## Navigation route

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android.png) ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios.png)

### Details

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_android.png) ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_ios.png)

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_1_android.png) ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_1_ios.png)

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_2_android.png) ![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_2_ios.png)



### Route line appearance


This menu allows you to customize the route line appearance. You can configure the color for different configurations such as altitude, road type, and others. Also, you can select the line's width and make turn arrows hidden or visible.  
[Pro feature](../purchases/android.md#free-and-paid-features)


<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>

![Navigation route Android](@site/static/img/navigation/route/route_line_android.png)

___



**Color**  
Provides to choose a route line's color by types:

* &nbsp;<Translate android="true" id="map_widget_renderer"/> – Use map style default color.
*&nbsp; Custom – Route line is colored by color spots in day or night mode
* &nbsp;<Translate android="true" id="altitude"/> – <Translate ios="true" id="route_line_color_elevation_description"/> 
* <ProFeature/> &nbsp;<Translate android="true" id="shared_string_slope"/> – Route line will be colorized depending on the elevation profile of the route.
* <ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/> – <Translate ios="true" id="routeInfo_roadClass_description"/>
* <ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" /> – <Translate ios="true" id="routeInfo_surface_description"/>
* <ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/> – <Translate ios="true" id="routeInfo_smoothness_description"/> 
* <ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" /> – <Translate ios="true" id="routeInfo_winter_ice_road_description"/>
* <ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" /> – <Translate ios="true" id="routeInfo_tracktype_description"/>
* <ProFeature/> Difficulty of horse trails – Render paths according to difficulty of horse trails



**Width**  
Provides to choose a route line's width:

* <Translate ios="true" id="map_settings_style"/> – Default width
* Thin width / Medium width / Bold width – Use the switch to choose width `-`
* Custom – Select the width using the slider

**Turn Arrows**  
Select whether turn arrows are indicated on the route line.

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>

___

<!-- ![customise route line 1](@site/static/img/navigation/route/customise_route_line-1.png) -->

![customise route line 1](@site/static/img/navigation/route/customise_route_line-1.png)

**Color**  
Provides to choose a route line's color by types:

* <Translate ios="true" id="map_settings_style"/> – Use map style default color.
* Custom – Route line is colored by custom color in day and night mode
* <Translate ios="true" id="altitude"/> – <Translate ios="true" id="route_line_color_elevation_description"/> 
* <Translate ios="true" id="gpx_slope"/> – Route line will be colorized depending on the elevation profile of the route.
* <Translate ios="true" id="routeInfo_roadClass_name"/> – <Translate ios="true" id="routeInfo_roadClass_description"/>
* <Translate ios="true" id="routeInfo_surface_name" /> – <Translate ios="true" id="routeInfo_surface_description"/>
* <Translate ios="true" id="routeInfo_smoothness_name"/> – <Translate ios="true" id="routeInfo_smoothness_description"/> 
* <Translate ios="true" id="routeInfo_winter_ice_road_name" /> – <Translate ios="true" id="routeInfo_winter_ice_road_description"/>
* <Translate ios="true" id="routeInfo_tracktype_name" /> – <Translate ios="true" id="routeInfo_tracktype_description"/>
* Difficulty of horse trails – Render paths according to difficulty of horse trails


**Width**  
Provides to choose a route line's width:

* <Translate ios="true" id="map_settings_style"/> – Default width
* Thin width / Medium width / Bold width – Use the switch to choose width `-`
* Custom – Select the width using the slider

**Turn Arrows**  
Select whether turn arrows are indicated on the route line.


</TabItem>

</Tabs>  


## Type of navigation

Link to [Navigation profiles](../personal/profiles.md)

## Custom routing

Link to Tech Documentation

## Background navigation

Navigation instruction in the background mode.

### Sound

Voice prompts in backgroun during navigation. [Voice navigation](../navigation/voice-navigation.md).

### Notification

Notification info: Turn-by-turn instructions; arrows; arrival time and time to go, current speed.

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png) 

Buttons:
- &nbsp;<Translate android="true" ids="stop_navigation_service"/> - allows to stop your navigation.
- &nbsp;<Translate android="true" ids="shared_string_pause"/> - allows to pause your navigation.
- &nbsp;<Translate android="true" ids="shared_string_resume"/> - allows to resume your navigation.

### Turn on screen

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>

<p> </p>

&nbsp;<Translate android="true" ids="screen_timeout"/>:
- &nbsp;<Translate android="true" ids="system_screen_timeout"/> - the screen will go blank depending on the device settings.
- &nbsp;<Translate android="true" ids="wake_time"/> - if the previous setting is disabled, then you can set the time after which the device screen will go blank if you do not interact with it.

&nbsp;<Translate android="true" ids="turn_screen_on"/>. Select screen wake-up options (make sure OsmAnd is in the foreground when the device is being locked):
- &nbsp;<Translate android="true" ids="turn_screen_on_proximity_sensor"/> - waving your hand across the screen will turn it on.
- &nbsp;<Translate android="true" ids="turn_screen_on_navigation_instructions"/> - each navigation instruction will turn the screen on.
- &nbsp;<Translate android="true" ids="turn_screen_on_power_button"/> - pressing the device power button will turn the screen on with OsmAnd on top of the lock screen.