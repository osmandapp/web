---
sidebar_position: 1
title: Map Screen During Navigation
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

This article describes how to configure the appearance of the map during navigation. This includes features such as [animated location changes](#animate-own-position), displaying [POIs along the route](#show-points-along-the-route), using [screen alerts](#screen-alerts), [route line appearance](#route-line-appearance) including color, width, and turn arrows. These features are closely related to the [route navigation settings](../setup/route-navigation.md#settings).


## Map during navigation

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2,map_during_navigation"/>*  

![Map screen during navigation](@site/static/img/navigation/configure_map-during-navigation_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,map_during_navigation"/>*  

![Map screen during navigation](@site/static/img/navigation/configure_map-during-navigation_ios.png)

</TabItem>

</Tabs>

When navigating, the map serves as a visual tool to locate your position, identify your destination and plan your route, and view navigation guidance. You can use zooming to do this, and drag and rotate the map as needed. The map can also display road information, street names, buildings, and other objects to help you easily determine your route.  

During navigation, the appearance of the map changes depending on the profile of the application used for navigation. Before you start navigating, check that the appearance of the map matches the way you want it to behave while you are driving. 


| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="choose_auto_follow_route"/>* |  The time for which the map view is synchronized with the current position after moving.  |  *Value:* <br /> Never, 5 sec, 10 sec, 15 sec, 20 sec, 25 sec, 30 sec, 45 sec, 60 sec, 50 sec.|
| *<Translate android="true" ids="auto_zoom_map"/>*  |  Automatically scale the map according to your speed, as long as the map is synchronized with your current position. | *Value:* <br /> *<Translate android="true" ids="auto_zoom_none"/>* - manually zoom. <br /> *<Translate android="true" ids="auto_zoom_farthest"/>* - zoom is 200 m.<br /> *<Translate android="true" ids="auto_zoom_far"/>* - zoom is 100 m. <br /> *<Translate android="true" ids="auto_zoom_close"/>* - zoom is 5 m. |
| *<Translate android="true" ids="snap_to_road"/>*  | The current position icon will be associated with the current navigation route.  | You can turn this option off, but then all road-related options, such as lane display, will also not be visible during navigation.  |
| *<Translate android="true" ids="approximate_bearing"/>* | Determines bearing based on the navigation route you are following.  | The setting is only visible when the [OsmAnd development plugin](../../plugins/development.md) is enabled. <br /> This settings should be enabled if the orientation of the directional map is flipped or jiggles when using [Android Auto](../auto-car.md#issues).   |


### Animate own position

**Android**: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,animate_my_location"/>*  
**iOS**: *<Translate ios="true" ids="shared_string_menu,routing_settings,routing_settings_2,animate_my_location"/>*  

This setting provides a smooth animation of the *[My Position](../../personal/profiles.md#profile-appearance)* point moving on the map during navigation.
- Note that the animation takes about 1 second, which creates a slight delay when *My Position* is displayed on the map relative to your location.
- For Android, this item is located in the *[Other](../../personal/profiles.md#other)* section of the General Settings menu.
- Turning this item on can cause a pronounced delay in some circumstances, disable it if you experience such issues.


## Show points along the route

The *Show along the route* setting allows you to configure additional route parameters and is required for the operation of widgets such as the [Street name](../../widgets/nav-widgets.md/#street-name) and the [Alert widget](../../widgets/nav-widgets.md#alert-widget). Options include displaying [**POIs**](#points-of-interest-poi) and [**My Favourites**](#my-favorites) along the route or using them as an addition to those already configured for the profile, as well as displaying a complete list of [**Traffic warnings**](#traffic-warnings) along the route.  

- The ability to set different distances (up to 5 km, or 3.11 miles, depending on the [unit of length](../../personal/profiles.md#units--formats) you set) from the route to nearby points is useful when using routing types such as [Straight Line](../routing/straight-line-routing.md) or [Direct-to-point](../routing/direct-to-point-routing.md).
- For the *Show along the route* setting, it is recommended to use [Voice prompts](../guidance/voice-navigation.md) for navigation.
- *POIs, Favorite, and Traffic warnings* are not displayed in the list for a route you have already traveled.


### View and select points

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_navigation,shared_string_settings,show_along_the_route"/>* 

![points along the route](@site/static/img/navigation/show-points-along-3-andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_navigation,shared_string_waypoints"/>*

![points along the route](@site/static/img/navigation/show-points-along-3-ios.png)  

</TabItem>

</Tabs>

In the *Navigation section*, when creating a route, you can set the types of points that will be displayed on the map along the route.

### Points of interest (POI)

![POI overlay Android](@site/static/img/map/poi_overlay_android.png) ![POI overlay iOS](@site/static/img/map/poi_overlay_ios.png)   

POIs settings in [*<Translate android="true" ids="shared_string_menu,configure_map,shared_string_shows,layer_poi"/>*](../../map/point-layers-on-map.md#points-of-interest-poi) are associated with the **Show along the route** setting. This is essentially an additional setting for displaying POIs on the map, directly related to the created route.  

When you specify the display of certain POIs on the *Configure map*, they are all displayed on the maps you have downloaded, whether you have selected categories or, if you do not care which category, selected nearby POIs.  

- The number and identification of POIs is *scale dependent*. 

- The *Show along the route* setting displays the same category as in the *POI overlay*, but you see the *entire list* of selected POIs at once, starting from the point of the current location at the set distance within your route.  

- You can remove unnecessary POIs from the list or edit them in the [Сontext menu](../../map/map-context-menu.md) by tapping one of them.

- The list contains the selected [POI types](../../map/point-layers-on-map.md#poi-types) and brief information about each of them, such as the *type icon, name, distance from the current location point to the POI along the route*, and *indications of which side of the route in a straight line and how far away the POI is*.  


### My Favorites

The list contains all previously added [*Favourite*](../../personal/favorites.md#favorite-point) points near the route you have created. As with POIs, you can select the distance at which these points are located.  

- If you [turn off the display of Favourites on the map](../../map/configure-map-menu.md), they do not disappear from the list and continue to be displayed in the [widget](../../widgets/nav-widgets.md#street-name) and announced when you approach them. 

- You can add your *Favourite points* to the map not only in advance, but also while navigating a route.

- *To update the list*, you need to turn My Favourites off and then on again.  

- Each point contains a name or coordinates, a group, the distance from the current location point to the *Favourite* directly on the route line, and information about how far to the right or left the point is from the line and the direction of the route.


### Traffic warnings

*Traffic warnings* are not displayed directly on the map like *POIs* or *My Favorites*. 

- **To enable** this option and see the warnings, you must first enable and configure the [*Alerts widget*](../../widgets/nav-widgets.md#alert-widget).

- The choice to display *Traffic warnings* along your route allows you to see the entire list just before you start your route, which is useful when planning your trip. 

- Unnecessary alerts can be removed from the list or you can tap the name and [edit the location](../../map/map-context-menu.md#avoid-road).  


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

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,routing_settings_2,customize_route_line"/>*  

![Navigation route Android](@site/static/img/navigation/route/route_line_appearance_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2,customize_route_line"/>*

![Navigation route Android](@site/static/img/navigation/route/RLApp_iOS.png)

</TabItem>

</Tabs>  

You can select route line appearance by style or manually select the color, the width and transparency of the line. In addition, you can select whether to show turn arrows and direction arrows on the line.

**Advanced**: the Customize route line setting allows you to adjust the appearance of the route line to display elevation changes, significant uphill or downhill, ice on the road, unpaved roads, highways, and other possible obstacles. You can also select or create custom [color schemes](../../personal/color-palette-schemes.md#routes) to apply to the route line.


:::note
 <ProFeature/> Some parameters you can use only with <a href="https://osmand.net/docs/user/purchases/android#free-and-paid-features">OsmAnd Pro subscribtion</a>.
:::


### Color

The Color setting changes the color tones of the route lines, with their overall color changing according to the type selected from OsmAnd's suggestions, according to the **Map Legend**, or becoming whatever color and transparency you set manually.


- ***<Translate android="true" id="map_widget_renderer"/>***. Used with the default colors. For a full description of the colors, go to [Default Map styles](../../map/vector-maps.md#default-map-styles).  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)

- ***Custom***. Allows you o select a line in any preferred color and transparency. You can select different settings for the day map and separately for the night map.  
    ![custom](@site/static/img/navigation/route/custom.png)   ![custom](@site/static/img/navigation/route/custom_ios.png)

- ***<Translate android="true" id="altitude"/>***. It shows the height of the route point as a **green-yellow-red** gradient. **Green** indicates the lowest point of the route, **yellow** indicates average height of the point, and **red** is the highest. If the route altitude difference is < 100 meters, the gradient is partially applied or not applied, for example for a simple climb from 100 meters to 150 meters - the gradient will be **green-yellow**. Note that the color doesn't represent the absolute value of the altitude.  
    ![Altitude](@site/static/img/navigation/route/Altitude_rl.png)

- ***<ProFeature/> &nbsp; <Translate android="true" id="shared_string_slope"/>***. The route line is colored in different colors depending on the elevation profile of the route. A detailed description is in the *Topography plugin* article, [Slope](../../plugins/topography.md#slope) section.  
    ![Altitude](@site/static/img/navigation/route/Slope.png)   ![Altitude](@site/static/img/navigation/route/Slope4.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_roadClass_name"/>***. Colours a route or track line according to the *road classification*. A detailed description is in the *Vector Maps - [Road Style](../../map/vector-maps.md#road-style)* section.  
    ![Altitude](@site/static/img/navigation/route/Roud_type.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_surface_name" />***. Provides information about the physical surface of the road or trail. A detailed description can be found in the *OsmAnd Map Style - [Surface](../../map-legend/osmand.md#surface-smoothness)* article in the *Map Legend* section.  
    ![Altitude](@site/static/img/navigation/route/Surface.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_smoothness_name"/>***. Road or trail maneuverability classification for wheeled vehicles, especially concerning the regularity and smoothness of the surface. A detailed description can be found in the *OsmAnd Map Style - [Smoothness](../../map-legend/osmand.md#surface-smoothness)* article in the *Map Legend* section.  
    ![Altitude](@site/static/img/navigation/route/Smoothness.png)
    
- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_winter_ice_road_name" />***. Colours a route or track line according to the *winter road classification*. A detailed description can be found in the *Vector Maps* article, [Winter and ice roads](../../map/vector-maps.md#winter-and-ski) section.  
    ![Altitude](@site/static/img/navigation/route/Winter.png)

- ***<ProFeature/> &nbsp;<Translate android="true" id="routeInfo_tracktype_name" />***. Coloring of a route or trail line by pavement composition. Typically used when the road network is largely unpaved. A detailed description can be found in the *OsmAnd Map Style - [Surface firmness](../../map-legend/osmand.md#surface-smoothness)* article in the *Map Legend* section.   
    ![Altitude](@site/static/img/navigation/route/firmness.png)

- ***<ProFeature/> &nbsp;Difficulty of horse trails***. Render paths according to difficulty of horse trails.    
    ![Altitude](@site/static/img/navigation/route/firmness.png)


### Width  

You can adjust the width of the displayed line of your route to match the width of the road or path on the map. For better visual identification, you can make the line width wider or narrower by adjusting it manually. More information can be found in the *Tracks and Routes — [Appearance](../../map/tracks/appearance.md) article*.

- ***<Translate android="true" id="map_widget_renderer"/>***. It's used with default width set by OsmAnd. A full description can be found in the *Vector Maps* article, [Map style](../../map/vector-maps.md#default-map-styles) section.  
    ![map stule](@site/static/img/navigation/route/map_st_2.png)

- ***Thin, Medium, and Bold widths***. You can select the width of the line to match the width of the road, or emphasize the route line more strongly on the map.   
    ![width](@site/static/img/navigation/route/width_med.png)

- ***Custom***. It allows you to display a line of the width you require. Select the width using the slider bar.  
    ![custom](@site/static/img/navigation/route/custom_2.png)  

 
### Turn Arrows  

The Turn Arrows setting allows you to select whether or not turn arrows are displayed on the route line.  

- ***On map***  
    ![Altitude](@site/static/img/navigation/route/turn_arr_on_map_and.png)   ![turn_arr_ios_map](@site/static/img/navigation/route/turn_arr_ios_on_map.png)  

- ***In app***  
    ![Altitude](@site/static/img/navigation/route/turn_arr.png)   ![turn_arr_ios](@site/static/img/navigation/route/turn_arr_ios.png)


## Related Articles

- [Route parameters](../routing/osmand-routing.md#routing-types)
- [Route preparation](../setup/route-navigation.md)
- [Navigation by track](../setup/gpx-navigation.md)
- [Navigation by markers](../setup/markers-navigation.md)
- [Route details](../setup/route-details.md)
- [Navigation settings](./navigation-settings.md)
- [Voice prompts / Notifications](./voice-navigation.md)
- [Android Auto](../auto-car.md)
- [CarPlay](../car-play.md)

> *This article was last updated in June 2024*
