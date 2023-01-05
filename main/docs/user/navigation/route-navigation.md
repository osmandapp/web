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
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


<InfoIncompleteArticle/>

The navigation function allows you to reach your destination easily using voice guidance (optional).

There are the next navigation profiles ([type of navigation](../navigation/route-navigation.md#type-of-navigation)) by default: _Driving, Cycling, Walking, Truck, Motorcycle, Public transport, Boat, Aircraft, Skiing, Horseback riding_. 

:::note 
Truck, Motorcycle, Aircraft and Horseback riding profiles are switched off by default. You need to activate these profiles.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">


![Navigation screen Android](@site/static/img/navigation/route/navigation_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation screen iOS](@site/static/img/navigation/route/navigation_ios.png)

</TabItem>

</Tabs>


## How to use

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

To start the navigation, you need to use [the navigation button](../widgets/map-buttons.md#directions) on the map screen. Or choose navigation option in the main menu:

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation"/>_

Next, you'll need to set the starting point and the destination. As for the starting point, you can choose your current location, [Favorite location](../map/point-layers-on-map.md#favorites), select a point on the map or use [an address](../search/index.md). You can also set a starting point by long tapping on the map and choosing ['Directions from'](../map/map-context-menu.md#directions-to--from) in [Map Context menu](../map/map-context-menu.md). To navigate to a point, just press the navigation button in its context menu.

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
  - &nbsp;"&#9776; Clear all" button - allows to clear all points.

![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android.png) ![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android_2.png) ![Navigation interpoints Android](@site/static/img/navigation/route/navigation_interpoints_android_3.png)


As soon as your points are selected, the app will create a route and will start guiding you after you tap "Start" button. To stop your navigation mode, tap on the "Dismiss" button.


![Navigation screen start Android](@site/static/img/navigation/route/navigation_start_android.png)

When the navigation is running, you can press the home button. You will get the message ['OsmAnd is running in the background'](../navigation/route-navigation.md#background-navigation). This means that even if you turn the screen off or exit the active app window, you'll still get voice prompts. For Android versions other than 3.3, we have added the [“Turn on screen”](../navigation/route-navigation.md#turn-on-screen) option. This allows you to show the map on the lock screen during navigation. Now, this function does not request any permissions for the correct operation. You can use it to save phone power. The function is configured separately for each profile. To configure, you need to select a profile that supports navigation and go to Profile settings - General settings - Screen control and enable the Screen timeout option (move the slider to the ON state - should turn blue).


</TabItem>

<TabItem value="ios" label="iOS">

To start the navigation, you need to use [the navigation button](../widgets/map-buttons.md#directions) on the map screen. Or choose navigation option in the main menu:

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings"/>_

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

### Navigation options

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_options"/>_

Settings of Route parameters for Navigation profile you can find [here](../personal/profiles.md#route-parameters).

![Navigation options Android](@site/static/img/navigation/route/navigation_options_menu_android.png) ![Navigation options Android](@site/static/img/navigation/route/navigation_options_menu_android_2.png)

- &nbsp;_<Translate android="true" ids="shared_string_sound"/>_ - allows to switch on/off navigation prompts and to open [Voice prompts](../navigation/voice-navigation.md) menu.
- &nbsp;_<Translate android="true" ids="routing_attr_driving_style_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose driving style for bicycle navigation type: _<Translate android="true" ids="routing_attr_prefer_unpaved_name"/>, <Translate android="true" ids="routing_attr_driving_style_safety_name"/>, <Translate android="true" ids="routing_attr_driving_style_balance_name"/>, <Translate android="true" ids="routing_attr_driving_style_speed_name"/>_.
- &nbsp;_<Translate android="true" ids="routing_attr_height_obstacles_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows [to avoid strong uphills](../personal/profiles.md#route-parameters): _<Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>, <Translate android="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>_.
- &nbsp;_<Translate android="true" ids="routing_attr_allow_motorway_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to avoid or prefer motorways.
- &nbsp;_<Translate android="true" ids="impassable_road"/>_ - allows to select a road you want [to avoid during navigation](../personal/profiles.md#route-parameters), either on the map.
- &nbsp;<Translate android="true" ids="show_along_the_route"/> - allows to shows [POI, My Favourites](../widgets/nav-widgets.md#approach-poisfavorites), [Traffic warnings](../widgets/nav-widgets.md#alert-widget) along the route.
- &nbsp;_<Translate android="true" ids="follow_track"/>_ - allows to choose a track for [navigation by it](../navigation/gpx-navigation.md).
- &nbsp;_<Translate android="true" ids="routing_attr_allow_private_name"/>_ - allows to navigate to private zone.
- &nbsp;_<Translate android="true" ids="routing_attr_short_way_name"/>_ - calculates navigation by fuel-efficient algorithm.
- &nbsp;_<Translate android="true" ids="temporary_conditional_routing"/>_ - allows to consider temporary limitations.
- &nbsp;_<Translate android="true" ids="routing_settings_2"/>_ - opens [Navigation settings](../personal/profiles.md#navigation-settings) of app profile.
- &nbsp;_<Translate android="true" ids="customize_route_line"/>_ - opens menu of [Route line customization](../navigation/route-navigation.md#route-line-appearance).
- &nbsp;_<Translate android="true" ids="simulate_navigation"/>_ - allows [to simulate your navigation](../navigation/route-navigation.md#simulate-navigation).

</TabItem>

<TabItem value="ios" label="iOS">

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_options"/>_

![Navigation options iOS](@site/static/img/navigation/route/navigation_options_menu_ios.png) ![Navigation options iOS](@site/static/img/navigation/route/navigation_options_menu_ios_2.png) ![Navigation options iOS](@site/static/img/navigation/route/navigation_options_menu_ios_3.png)

- &nbsp;_<Translate ios="true" ids="shared_string_sound"/>_ - allows to switch on/off navigation prompts and to open [Voice prompts](../navigation/voice-navigation.md) menu.

**Route parameters:**

Settings of Route parameters for Navigation profile you can find [here](../personal/profiles.md#route-parameters).

- &nbsp;<Translate ios="true" ids="impassable_road"/> - allows to select a road you want to avoid during navigation, either on the map.
- &nbsp;_<Translate ios="true" ids="routing_attr_driving_style_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose [driving style](../personal/profiles.md#route-parameters) for bicycle navigation type: _<Translate ios="true" ids="routing_attr_prefer_unpaved_name"/>, <Translate ios="true" ids="routing_attr_driving_style_safety_name"/>, <Translate ios="true" ids="routing_attr_driving_style_balance_name"/>, <Translate ios="true" ids="routing_attr_driving_style_speed_name"/>_.
- &nbsp;_<Translate ios="true" ids="routing_attr_allow_motorway_name"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows [to avoid or prefer motorways](../personal/profiles.md#route-parameters).
- &nbsp;_<Translate ios="true" ids="preferred_terrain"/>_ ([Navigation type](../navigation/route-navigation.md#type-of-navigation) - Cycling) - allows to choose [routes with a hilly relief profile](../personal/profiles.md#route-parameters) for bicycle navigation type: _<Translate ios="true" ids="shared_string_any"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_plains_name"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_more_plains_name"/>, <Translate ios="true" ids="routing_attr_relief_smoothness_factor_hills_name"/>_.
- &nbsp;_<Translate ios="true" ids="routing_attr_short_way_name"/>_ - calculates navigation by fuel-efficient algorithm.
- &nbsp;_<Translate ios="true" ids="routing_attr_prefer_unpaved_name"/>_ - allows to prefer unpaved over paved roads for routing.
- &nbsp;_Prefer hiking routes_ - allows to avoid certain routes and prefer celected routes.
- &nbsp;_Prefer tactile paving_ - allows to avoid road types and prefer tactile paving.
- &nbsp;_<Translate ios="true" ids="routing_attr_allow_private_name"/>_ - allows to navigate to private zone.
- &nbsp;_Goods vehicles restrictions_ - consider access permissions for light goods vehicles (goods).
- &nbsp;_<Translate ios="true" ids="consider_limitations_param"/>_ - allows to consider temporary limitations.

**Advanced:**
- &nbsp;_<Translate ios="true" ids="follow_track"/>_ - allows to choose a track for [navigation by it](../navigation/gpx-navigation.md).
- &nbsp;_<Translate ios="true" ids="routing_settings_2"/>_ - opens [Navigation settings](../personal/profiles.md#navigation-settings) of app profile.
- &nbsp;_<Translate ios="true" ids="customize_route_line"/>_ - opens menu of [Route line customization](../navigation/route-navigation.md#route-line-appearance).
- &nbsp;_<Translate ios="true" ids="simulate_navigation"/>_ - allows [to simulate your navigation](../navigation/route-navigation.md#simulate-navigation).


</TabItem>

</Tabs>

### Home - Work points

[Special points](../personal/favorites.md#special-favorites-personal) of Favorites in Navigation menu for quickly access.

### Previous route

Last route which you built for navigation.

### Displayed tracks

List of shown track on the map. Clicking by one of it opens [Follow track](../navigation/gpx-navigation.md) menu function.

### History

Tracks list.

### Simulate navigation


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate android="true" ids="simulate_navigation"/>"_.

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_options,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_options,simulate_navigation"/>  →  &#x2699_

![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android.png) ![Simulate navigation Android](@site/static/img/navigation/route/simulate_navigation_android_2.png)

- &nbsp;_<Translate android="true" ids="simulation_preview_mode_title"/>_ - <Translate android="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_constant_mode_title"/>_ - <Translate android="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate android="true" ids="simulation_real_mode_title"/>_ - <Translate android="true" ids="simulation_real_mode_desc"/>

When you click on ["Start" button](../navigation/route-navigation.md#how-to-use), your simulation of navigation will start. 

For stop the simulation of navigation you need to click on ["Navigation" button → "Dismiss" button](../navigation/route-navigation.md#how-to-use).


</TabItem>

<TabItem value="ios" label="iOS">

When the navigation route is built. You can start to simulate a motion by this way using features _"<Translate ios="true" ids="simulate_navigation"/>"_.

_<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_options,simulate_navigation"/>_. Enable the feature and starting navigation.

You can choose "<Translate ios="true" ids="speed_mode"/>" settings for the speed of simulation navigation: _<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="menu,routing_settings,shared_string_options,simulate_navigation"/> → &#8230;|_

![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios.png) ![Simulate navigation ios](@site/static/img/navigation/route/simulate_navigation_ios_2.png)

- &nbsp;_<Translate ios="true" ids="simulation_preview_mode_title"/>_ - <Translate ios="true" ids="simulation_preview_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_constant_mode_title"/>_ - <Translate ios="true" ids="simulation_constant_mode_desc"/>
- &nbsp;_<Translate ios="true" ids="simulation_real_mode_title"/>_ - <Translate ios="true" ids="simulation_real_mode_desc"/>

When you click on ["Start" button](../navigation/route-navigation.md#how-to-use), your simulation of navigation will start. 

For stop the simulation of navigation you need to click on ["Navigation" button → "Cancel" button](../navigation/route-navigation.md#how-to-use).


</TabItem>

</Tabs>



## Navigation route

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_ios.png)

</TabItem>

</Tabs>


### Details

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_android.png)

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_1_android.png)

![Navigation route Android](@site/static/img/navigation/route/navigation_route_details_2_android.png)
</TabItem>

<TabItem value="ios" label="iOS">

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_ios.png)

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_1_ios.png)

![Navigation route iOS](@site/static/img/navigation/route/navigation_route_details_2_ios.png)

</TabItem>

</Tabs>


### Route line appearance

This menu allows you to adapt the route line appearance. If there are some changes to your route, you can customize them using this menu. Its could be like, changes in elevation while driving, next significant uphill or downhill, ice, unpaved roads, autobahns, etc.  In the items of this menu you will be able to change all these parameters by colour or just apply any colour and transparency to the line. Besides, if necessary, you can change the width of the line and the display of the angle at turns.  

:::note
  
<ProFeature/> Some parameters you can use only with Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.

:::


<!--This menu allows you to customize the route line appearance. You can configure the colour for different configurations such as altitude, road type, and others. Also, you can select the line's width and make turn arrows hidden or visible.  <ProFeature/>
[Pro feature](../purchases/android.md#free-and-paid-features)-->

<!--### Route Appearance

:::note
<ProFeature/> It's the Pro feature <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribers</a>.
:::

You can [customize the route line's appearance](../navigation/route-navigation.md##route-line-appearance) for any navigation profile differently. It is possible to select **_Color_** and **_Width_** for the line, **separately** for **_Day_** and **_Night_** [mode](../map/vector-maps.md#map-mode).

<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,customize_route_line"/>  

![Route Customization Android](@site/static/img/map/route_custom_android.png) -->



<Tabs groupId="operating-systems">


<TabItem value="android" label="Android">

_<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>_  

![Navigation route Android](@site/static/img/navigation/route/RLApp.png)  


#### Colour

Select a route line's colour by types.  

|  |
|------------|
|&nbsp;*"<Translate android="true" id="map_widget_renderer"/>"* – Map style is used with default colours. You can see a full description of the colours by clicking here [Map style](../map/vector-maps.md#default-map-styles) |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| &nbsp;*"Custom"* – It allows you to show the line in any preferred colour and transparency. You can select different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom.png) |
| &nbsp;*"<Translate android="true" id="altitude"/>"* – It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow** - median height points and **red** the highest points. If the route altitude difference is < 100 m, gradient is applied partially or not applied i.e. for a simple uphill route from 100 m to 150 m - the gradient will be **green**-**yellow**. Please note that the colour doesn't represent the absolute height value.    |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
|*<ProFeature/> &nbsp;"<Translate android="true" id="shared_string_slope"/>"* – The route line will be colored differently depending on the elevation profile of the route. [Slope](../plugins/contour-lines.md#slope-map)|
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  |  


#### Width  

Select a route line's width.

|  |
|------------|
|*"<Translate ios="true" id="map_settings_style"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/map_st.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/custom_1.png)  ![custom](@site/static/img/navigation/route/custom_2.png)|  



&nbsp;  
#### Turn Arrows  
Select whether turn arrows are indicated on the route line or not. 

|  |
|------------|
|![Altitude](@site/static/img/navigation/route/turn_arr.png) ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)|
|![Altitude](@site/static/img/navigation/route/turn_arr_off_and.png) ![Altitude](@site/static/img/navigation/route/turn_arr_off_map_and.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

_<Translate ios="true" ids="menu,shared_string_settings,app_profiles,routing_settings_2,customize_route_line"/>_


&nbsp;  
![Navigation route Android](@site/static/img/navigation/route/RLApp_iOS.png)

  


<!--Customize route line menu items-->
&nbsp;  
#### Colour
Select a route line's colour by types.  

|  |
|------------|
|&nbsp;*"<Translate android="true" id="map_widget_renderer"/>"* – Map style is used with default colours. You can see a full description of the colours by clicking here [Map style](../map/vector-maps.md#default-map-styles) |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| &nbsp;*"Custom"* – It allows you to show the line in any preferred colour and transparency. You can select different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom_ios.png) |
| &nbsp;*"<Translate android="true" id="altitude"/>"* –  It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow* - median height points and **red** the highest points. If the route altitude difference is < 50 m, gradient is not applied i.e. for a simple uphill route from 100 m to 120 m. Please note that the colour doesn't represent the absolute height value. |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
<!--
|*<ProFeature/> &nbsp;"<Translate android="true" id="shared_string_slope"/>"* – The route line will be colored differently depending on the elevation profile of the route. [Slope](../plugins/contour-lines.md#slope-map)|
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  | -->



&nbsp;  
#### Width
Select a route line's width.

|  |
|------------|
|*"<Translate ios="true" id="map_settings_style"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/width_ms_ios.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width_ios.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/width_cus_ios.png)  ![custom](@site/static/img/navigation/route/custom_2.png)|  


&nbsp;  
#### Turn Arrows
Select whether turn arrows are indicated on the route line or not. 

|  |
|------------|
|![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_map.png)|
|![turn_arr_on_ios](@site/static/img/navigation/route/turn_arr_on_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)|
___

<!-- ![customise route line 1](@site/static/img/navigation/route/customise_route_line-1.png) -->

</TabItem>

</Tabs>  

## Type of navigation

Navigation type is rules how the route will be calculated. This rules content in [routing.xml](./../../technical/osmand-file-formats/osmand-routing-xml.md) file for offline OsmAnd routing. For Android version of OsmAnd there is an opportunity to set Online routing by providers.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

There are next routing engines for OsmAnd in [Navigation settings for profile](../personal/profiles.md#navigation):

- _[Offline OsmAnd routing](../personal/profiles.md#navigation)_: [<Translate android="true" ids="app_mode_boat"/>](../navigation/boat-navigation.md#boat), [<Translate android="true" ids="rendering_value_bicycle_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="routing_profile_direct_to"/>](../navigation/boat-navigation.md#direct-to-point), [<Translate android="true" ids="rendering_value_car_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="app_mode_public_transport"/>](../map/public-transport.md), [<Translate android="true" ids="routing_profile_ski"/>](../plugins/ski-maps.md), [<Translate android="true" ids="routing_profile_straightline"/>](../navigation/boat-navigation.md#straight-line), [<Translate android="true" ids="horseback_riding"/>](../navigation/route-navigation.md)..

- _[Online routing](../personal/profiles.md#navigation)_ uses online providers services: ([Graphhopper](https://graphhopper.com/), [OSRM](http://project-osrm.org/), [Routing OSM DE](https://routing.openstreetmap.de/), GPX.

- _[Third-party routing](../navigation/thirdparty-routing.md)_.

</TabItem>

<TabItem value="ios" label="iOS">

There is OsmAnd engine for offline navigation. For choosing navigation type: [Navigation settings for profile](../personal/profiles.md#navigation):

- _[Offline OsmAnd routing](../personal/profiles.md#navigation)_: [<Translate android="true" ids="app_mode_boat"/>](../navigation/boat-navigation.md#boat), [<Translate android="true" ids="rendering_value_bicycle_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="routing_profile_direct_to"/>](../navigation/boat-navigation.md#direct-to-point), [<Translate android="true" ids="rendering_value_car_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="rendering_value_pedestrian_name"/>](../navigation/route-navigation.md), [<Translate android="true" ids="app_mode_public_transport"/>](../map/public-transport.md), [<Translate android="true" ids="routing_profile_ski"/>](../plugins/ski-maps.md), [<Translate android="true" ids="routing_profile_straightline"/>](../navigation/boat-navigation.md#straight-line), [<Translate android="true" ids="horseback_riding"/>](../navigation/route-navigation.md)..

</TabItem>

</Tabs>


## Custom routing

OsmAnd allows modification _routing.xml file_ for routing. It means that you can update the routing algorithm for your needs. More info about it you may find in [Technical documentation](../../technical/osmand-file-formats/osmand-routing-xml.md) and on [OsmAnd Github page](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml).

For start modification [routing.xml](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml) file, you need to copy it and start changing it for your needs. Please, read attentively [Help information](https://github.com/osmandapp/OsmAnd-resources/blob/master/routing/routing.xml#L25). Example of [routing.xml from OsmAnd user](https://groups.google.com/g/osmand/c/JvV7p_JJvEU). 

For adding new routing.xml to OsmAnd just tap to this file and open by OsmAnd.


For your Profile you need to choose your [Navigation type](../navigation/route-navigation.md#type-of-navigation).


## Background navigation

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

When you created your route and started navigation. You can use it in the Background. You receive voice prompts and silent notifications. This mode is important for low battery consumption.

</TabItem>
<TabItem value="ios" label="iOS">

When you created your route and started navigation. You can use it in the Background. You receive voice prompts.
This mode is important for low battery consumption.

</TabItem>
</Tabs>


### Sound

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

Set your voice prompts and listen to navigation prompts. [Voice navigation](../navigation/voice-navigation.md).

</TabItem>
<TabItem value="ios" label="iOS">

Set your voice prompts and listen to navigation prompts. [Voice navigation](../navigation/voice-navigation.md).

</TabItem>
</Tabs>

### Notification

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

You can see notification info in Drop-down system menu: _Turn-by-turn instructions; arrows; arrival time and time to go, current speed_.

![Navigation route Notification Android](@site/static/img/navigation/route/navigation_notifications_android.png) 

Active buttons on Drop-down system menu for your navigation:
- &nbsp;_<Translate android="true" ids="stop_navigation_service"/>_ - allows to stop your navigation.
- &nbsp;_<Translate android="true" ids="shared_string_pause"/>_ - allows to pause your navigation.
- &nbsp;_<Translate android="true" ids="shared_string_resume"/>_ - allows to resume your navigation.

</TabItem>
<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>
</Tabs>

### Screen control

<Tabs groupId="operating-systems">
<TabItem value="android" label="Android">

_<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,screen_control"/>_

![Screen control menu Android](@site/static/img/navigation/route/screen_control_android.png)

You can control the device screen to save power. This mode has two general settings:  _<Translate android="true" ids="screen_timeout"/>_ and _<Translate android="true" ids="turn_screen_on"/>_.

<p> </p>

#### Screen timeout

- &nbsp;_<Translate android="true" ids="system_screen_timeout"/>_ - the screen will go blank depending on the device settings. Enable it for using _Turn the screen off_ as per the system's screen timeout. _"Change setting"_ button opens system menu.

![System timeout screen control Android](@site/static/img/navigation/route/system_timeout_android.png)

- &nbsp;_<Translate android="true" ids="wake_time"/>_ - if "Keep screen on" is enabled the device screen applies no timeout. if the previous setting is disabled, then you can set the time after which the device screen will go blank if you do not interact with it.

![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_android.png) ![Timeout after wakeup Android](@site/static/img/navigation/route/timeout_after_wakeup_1_android.png)

#### Turn screen on

Select screen wake-up options (make sure OsmAnd is in the foreground when the device is being locked):

![turn screen on Android](@site/static/img/navigation/route/turn_screen_on_android.png)

- &nbsp;_<Translate android="true" ids="turn_screen_on_proximity_sensor"/>_ - waving your hand across the screen will turn it on.
- &nbsp;_<Translate android="true" ids="turn_screen_on_navigation_instructions"/>_ - each navigation instruction will turn the screen on.
- &nbsp;_<Translate android="true" ids="turn_screen_on_power_button"/>_ - pressing the device power button will turn the screen on with OsmAnd on top of the lock screen.


</TabItem>

<TabItem value="ios" label="iOS">

<InfoAndroidOnly/>

</TabItem>
</Tabs>

