---
sidebar_position: 1
title: Configure map screen
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

This article describes how the mapping behavior in the OsmAnd app changes during navigation. This includes [animated location changes](#animate-my-location), the display of [POIs along the route](#show-points-along-the-route), the use of [screen alerts](#screen-alerts), the [appearance of the route line](#route-line-appearance) including color and width, and turn arrows. These features are closely related to the [route navigation settings](../setup/route-navigation.md#settings).


## Map during navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Configure map screen](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Configure map screen](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>


The map during navigation serves as a visual tool for positioning, route planning, and orientation when navigating. You use the map to determine your current location as well as where you want to go. To do this, he can use zooming, drag and rotate the map to get a better view of his surroundings and determine the best route. The map can also display information about roads, streets, buildings, and other objects to help the user find his way easily.  

During navigation, the location, distance from the surface, and map view change depending on the settings. Before you start a route, you need to check whether the settings correspond to the way you want the OsmAnd map to behave while you are driving.   


| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *"<Translate android="true" ids="choose_auto_follow_route"/>"* |  The time until the map view is synced with your current position after moving.  |  *Value:* <br /> Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *"<Translate android="true" ids="auto_zoom_map"/>"*  |  Automatically scale the map according to your speed (as long as the map is in sync with your current position). | *Value:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manually zoom. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom is 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom is 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom is 5 m. |
| *"<Translate android="true" ids="snap_to_road"/>"*  |  The current position icon will be associated with the current navigation route.   | This option can be turned off, but then all road-related options, such as lane display, will also not be visible during navigation.   |
| *"<Translate android="true" ids="approximate_bearing"/>"*  |  Determines the bearing based on the navigational route you are following.    | The setting is visibled only if OsmAnd [Development plugin](../../plugins/development.md) is enabled. <br /> This option should be enabled if the orientation of the directional map is flipped or jiggles when using [Android Auto](../auto-car.md#issues).   |


### Animate my location

This setting provides a smooth animation of the "My location" point moving on the map during navigation. Note that the animation takes about 1 second, which creates a slight delay for the "My location" position to display on the map relative to your location.
For Android, this item named **Animate own position** is located in the "Other" section of the General Settings menu.

**POI Types**. You can select one or many from standard OsmAnd POI types or make your own [POI filter](../../search/search-poi.md) and select it to display POI on the map.
**Map style POI**. Each POI type in OsmAnd assigned a specific icon and color. POIs' [zoom level](../../map/vector-maps.md#details) and design could be different in some [map styles](../../map/vector-maps.md#default-map-styles).  



## Show points along the route

In the Navigation section when creating a route you can set the types of points that will be displayed on the map along the route. In order to go to this section of settings in Android and iOS there are different ways, which are determined by the features of the operating systems and design of OsmAnd.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>*   
- [Build your route](../setup/route-navigation.md#set-destinations).
- Tap on the [Settings](../setup/route-navigation.md#settings) menu.

![points along the route](@site/static/img/navigation/show-points-along-3-andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

- *<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_waypoints"/>*
- [Build your route](../setup/route-navigation.md#set-destinations). 
- Set [intermediate points](../setup/route-navigation.md#intermediate-destinations) of the route. Only this item has settings for selecting points to display along the route.
- Tap *Edit* next to the Intermediate destination to open the Waypoints settings menu.

![points along the route](@site/static/img/navigation/show-points-along-3-ios.png)  

</TabItem>

</Tabs>

The *Show along the route* setting allows you to configure additional parameters for your route and is necessary for the operation of widgets such as [Street name](../../widgets/nav-widgets.md/#street-name) and [Alert widget](../../widgets/nav-widgets.md#alert-widget). The parameters imply displaying [**POIs**](#points-of-interest-poi) and [**My Favourites**](#my-favorites) along the route or using them as an addition to those already configured for the profile, as well as displaying a complete list of [**Traffic warnings**](#traffic-warnings) on the route.  

The ability to set different distances (up to 5 km, or 3.11 miles, depending on the [unit of length](../../personal/profiles.md#units--formats) you set) from the route to points around will be useful when using routing types such as [Straight Line](../routing/straight-line-routing.md) or [Direct-to-point](../routing/direct-to-point-routing.md).


### Points of interest (POI)

The POIs settings in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-poi) are associated with the **Show along the route** setting. In fact, this is an additional setting for displaying POIs on the map, which is directly related to the created route.  

When you specify to display certain POIs in the *Configure map*, they are all displayed on the maps you have downloaded, regardless of whether you have selected categories or, if you do not care which category, selected the nearest POIs. Their number and identification change depending on the zoom. The *Show along the route* setting shows the same category as in the *POI overlay*, but you see the *whole list* of the selected POIs at once, starting from the point of the current location at the set distance within your route.  

You can remove unnecessary POIs from the list or edit them in the [Сontext menu](../../map/map-context-menu.md) by tapping one of them. The list contains the selected [POI types](../../map/point-layers-on-map.md#poi-types) and brief information about each, the type icon, the name, the distance from the current location point to the POI along the route, and indications of which side of the route in a straight line and how far away the POI is.  

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)   


### My Favorites

In the open list, you will see all the previously added [Favourite](../../personal/favorites.md#favorite-point) points close to the created route. As with POIs, you can select the distance within which these points will be located.  

If you [turn off the display of Favourites on the map](../../map/configure-map-menu.md), they will not disappear from the list. They will also be displayed in the [widget](../../widgets/nav-widgets.md#street-name) and announced when you approach them. You can add Favourite Points to the map while navigating a route. To update the list you need to turn off/on My Favourites.  

Each point contains a name or coordinates, a group, the distance from the current location point to the Favourite directly on the route line, and information about how far to the right or left the point is from the line and the direction of the route.


### Traffic warnings

Traffic warnings do not appear directly on the map, like POIs or My Favorites. **To turn on** this item and see the warnings, you need to enable and configure the [Alerts widget](../../widgets/nav-widgets.md#alert-widget) first.

Choosing to display traffic warnings along your route will allow you to see the entire list just before you start your route, which is useful when planning your trip. The list can be edited. You can delete unnecessary warnings in the list or tap the name and [edit the location](../../map/map-context-menu.md#avoid-road).  

:::note
POIs, Favorite, and Traffic warnings are not displayed in the list for the route you have traveled.
:::

:::tip
For the *Show along the route* setting, it is recommended to use [Voice prompts](../guidance/voice-navigation.md) for navigation.
:::


## Screen Alerts

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

</TabItem>

</Tabs>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="screen_alerts"/>** | Notifications, such as traffic warnings or speed limits, will appear on the screen as a widget. They appear in the bottom left corner while you are navigating. | [Types of alert widgets](../../widgets/nav-widgets.md#alert-widget)   |


## Route line appearance

The Customize route line setting allows you to adjust the appearance of the route line to account for different changes. These can be changes in elevation while driving, significant uphill or downhill ahead, ice on the road, unpaved roads, highways, and other possible obstacles. You can change all of these parameters by style or manually select the color and transparency of the line in the items in this setting. In addition, the setting provides the opportunity to change the width of the route line and the angle display on the turns.  

:::note
 <ProFeature/> Some parameters you can use only with <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribtion</a>.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation route Android](@site/static/img/navigation/route/RLApp.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation route Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  


### Color

Changes the shades of the colors of the route lines, and their overall coloring changes depending on the selected type from the suggested OsmAnd, according to the Map Legend, or becomes the color and transparency that you set manually.    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|  |
|------------|
| *<Translate android="true" id="map_widget_renderer"/>* – The map style is used with the default colors. For a full description of the colors, go to [Default Map styles](../../map/vector-maps.md#default-map-styles). |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| *Custom* - Allows you to display the line in any preferred color and transparency. You can choose different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom.png) |
| *<Translate android="true" id="altitude"/>* – It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow** - median height points and **red** the highest points. If the route altitude difference is < 100 m, gradient is applied partially or not applied i.e. for a simple uphill route from 100 m to 150 m - the gradient will be **green**-**yellow**. Please note that the color doesn't represent the absolute height value.    |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
|*<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>* – The route line will be colored in different colors depending on the elevation profile of the route. A detailed description is in the article on Topography: Contour lines and Terrain, section [Slope map](../../plugins/contour-lines.md#slope-map). |
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  |  

</TabItem>

<TabItem value="ios" label="iOS">  

|  |
|------------|
|&nbsp;*"<Translate android="true" id="map_widget_renderer"/>"* – Map style is used with default colors. You can see a full description of the colors by clicking here [Map style](../../map/vector-maps.md#default-map-styles) |  
![map stule](@site/static/img/navigation/route/map_st_2.png) |
| &nbsp;*"Custom"* – It allows you to show the line in any preferred color and transparency. You can select different settings for the day map and separately for the night map. |  
![custom](@site/static/img/navigation/route/custom_ios.png) |
| &nbsp;*"<Translate android="true" id="altitude"/>"* –  It shows the height on the route point as **green**-**yellow**-**red** gradient. Where **green** represents lowest point of the route, **yellow* - median height points and **red** the highest points. If the route altitude difference is < 50 m, gradient is not applied i.e. for a simple uphill route from 100 m to 120 m. Please note that the color doesn't represent the absolute height value. |  
![Altitude](@site/static/img/navigation/route/Altitude_rl.png) |
|*<ProFeature/> &nbsp;"<Translate android="true" id="shared_string_slope"/>"* – The route line will be colored differently depending on the elevation profile of the route. [Slope](../../plugins/contour-lines.md#slope-map)|
![Altitude](@site/static/img/navigation/route/Slope.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_roadClass_name"/>"* – Colour the route or the track line according to the road classification. [Road style](../../map/vector-maps.md#road-style)|
![Altitude](@site/static/img/navigation/route/Roud_type.png)  |
|*<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_surface_name" />"* – Provides information about the physical surface of the road/footpath. [Surface](../../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Surface.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_smoothness_name"/>"* – Classification of maneuverability of roads/footpaths for wheeled vehicles, particularly with regard to surface regularity/flatness. [Smoothness](../../map-legend/osmand.md#surface-smoothness)|
![Altitude](@site/static/img/navigation/route/Smoothness.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_winter_ice_road_name" />"* – Colouring the route or track line according to the winter road classification. [Winter and ice roads](../../map/vector-maps.md#winter-and-ski)|
![Altitude](@site/static/img/navigation/route/Winter.png)  |
| *<ProFeature/> &nbsp;"<Translate android="true" id="routeInfo_tracktype_name" />"* – Colouring the route or track line by surface composition. Typically used when the road network is largely unpaved. [Surface firmness](../../map-legend/osmand.md#surface-smoothness)| 
![Altitude](@site/static/img/navigation/route/firmness.png)  |
| *<ProFeature/> &nbsp;"Difficulty of horse trails"* – Render paths according to difficulty of horse trails.  |
![Altitude](@site/static/img/navigation/route/firmness.png)  | 

</TabItem>

</Tabs>  


### Width  

Select a route line's width.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

|  |
|------------|
|*"<Translate android="true" id="map_widget_renderer"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/map_st.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/custom_1.png)  ![custom](@site/static/img/navigation/route/custom_2.png)|  

</TabItem>

<TabItem value="ios" label="iOS">  

|  |
|------------|
|*"<Translate ios="true" id="map_widget_renderer"/>"* – It's used with default width. You can see a full description of the map style by clicking there [Map style](../../map/vector-maps.md#default-map-styles)  |
![map style](@site/static/img/navigation/route/width_ms_ios.png)   ![map stule](@site/static/img/navigation/route/map_st_2.png) |
|*"Thin width / Medium width / Bold width"* – You can choose the width of the line according to the width of the road or highlight the line of the route on the map more strongly. |
![width](@site/static/img/navigation/route/width_ios.png)   ![width](@site/static/img/navigation/route/width_med.png)|
|*"Custom"* – It allows you to show the line in some preferred width. Select the width using the slider.|
![custom](@site/static/img/navigation/route/width_cus_ios.png)  ![custom](@site/static/img/navigation/route/custom_2.png)| 

</TabItem>

</Tabs>  

 
### Turn Arrows  

Select whether turn arrows are indicated on the route line or not. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="profile_type_user_string,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

|  |
|------------|
|![Altitude](@site/static/img/navigation/route/turn_arr.png) ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)|
|![Altitude](@site/static/img/navigation/route/turn_arr_off_and.png) ![Altitude](@site/static/img/navigation/route/turn_arr_off_map_and.png)|

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

|  |
|------------|
|![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_map.png)|
|![turn_arr_on_ios](@site/static/img/navigation/route/turn_arr_on_ios.png) ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png) |

<!-- ![customise route line 1](@site/static/img/navigation/route/customise_route_line-1.png) -->

</TabItem>

</Tabs>  

