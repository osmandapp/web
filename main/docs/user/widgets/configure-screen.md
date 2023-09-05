---
sidebar_position: 1
title:  Configure Screen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';


## Overview  

Configure screen is a menu that allows you to customize the widgets that will be displayed on the map. On this screen, you can enable [information](../widgets/info-widgets.md) and [navigation](../widgets/nav-widgets.md) widgets, [buttons](../widgets/map-buttons.md), [marker widgets](../widgets/markers.md), a [ruler](../widgets/radius-ruler.md), and add [quick actions](../widgets/quick-action.md).   
 
All widgets are [profile dependent](../personal/profiles.md), so if you change the order, visibility, or state for one profile, they will not apply to other profiles. Each profile has its own predefined list of widgets based on the navigation screen design. It can be configured and used with or without navigation.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_2_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)   

</TabItem>

</Tabs> 

- [Left panel](#rightleft-panel-widgets)
- [Right panel](#rightleft-panel-widgets) 
- [Top panel](#top-panel-widgets)
- [Bottom panel](#bottom-panel-widgets)
- [Buttons](#buttons-android-and-remaining-elements-ios)
- [Actions](#actions-panel-android) (*Android*)  
- **Transparent widgets** - makes transparent the background of the navigation and information widgets.  


## Widget panels


### Right / Left panel widgets  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_ios.png)    

</TabItem>

</Tabs> 

1. [Route maneuvers](../widgets/nav-widgets.md#next-turns). These *navigational* widgets are activated during navigation and display information about the distance to the next maneuver.  
    3 widgets included: *Next turn*, *Next turn (small)*, *Second next turn*.
2. [Navigation point](../widgets/nav-widgets.md#navigation-points). *Navigational* widgets *Navigation point* show the remaining distance to a destination, intermediate point, arrival time to an intermediate point, or travel time for a calculated route.  
    4 widgets included: [Distance to destination](../widgets/nav-widgets.md#distance-to-destination), [Distance to intermediate](../widgets/nav-widgets.md#distance-to-intermediate), [Time to intermediate](../widgets/nav-widgets.md#time-to-intermediate), [Time to destination](../widgets/nav-widgets.md#time-to-destination).
3. [Map markers](../widgets/markers.md). Widget shows the distance or estimated time of arrival (ETA) for the first two markers in the list of map markers. show special points marked as flags on the map.  
    2 widgets included: *First marker*, *Second marker*.
4. [Bearing](../widgets/nav-widgets.md#bearing). *Navigational* widgets show the absolute or relative bearing to a target in angular units (in 180 degrees, 360 degrees, or milliradians mode).  
    3 widgets included: *Relative bearing*, *Magnetic bearing*, *True bearing*.
5. [Current Speed](../widgets/info-widgets.md#speed). *Informational* widget shows the current speed detected by the GPS sensor. 
6. [Average speed  (*Android only*)](../widgets/info-widgets.md#average-speed-widget). *Informational* widget shows the average speed of the current trip.
7. [Speed limit](../widgets/nav-widgets.md#speed-limit). *Informational* widget displays the speed limit on the current road you are traveling on.
8. [Altitude](../widgets/info-widgets.md#altitude-widgets). *Informational* widget displays the altitude above sea level for the current geolocation or the altitude above sea level for the current map center.  
    2 widgets included: *Altitude: current location*, *Elevation: map center*.
9. [GPS info (*Android only*)](../widgets/info-widgets.md#gps-info). *Informational* widget shows the number of satellites the device is currently detecting and using.
10. [* Trip recording](../widgets/info-widgets.md#-trip-recording-widgets). *Informational* widget provides quick access to start and stop track recording.  
    4 widgets included: *Distance*, *Duration*, *Uphill*, *Downhill*.
11. [Current time](../widgets/info-widgets.md#current-time). *Informational* widget displays the current time taken from your device.
12. [Battery level](../widgets/info-widgets.md#battery-level). *Informational* widget shows battery level of your device.
13. [Radius ruler](../widgets/info-widgets.md#radius-ruler.md). The widget displays on a map the distance between the user's location and the inner point of the distance circles of the [Radius ruler tool](../widgets/radius-ruler.md).
14. [* Audio/video notes](../widgets/info-widgets.md#-audiovideo-notes-widget). *Informational* widget provides quick access to start/stop taking an audio, video or photo notes.      
    4 widgets included: *On request*, *Record audio*, *Record video*, *Take a photo*.
15. [* Parking](../widgets/info-widgets.md#-parking-widget). *Informational* widget shows the distance from the center of the screen to the parking location.
16. Wheather
17. [* Mapillary](../widgets/info-widgets.md#-mapillary-widget) - provides quick access to Mapillary app to add Street-Level-Imagery. 
18. [Glide ratio](../widgets/info-widgets.md#glide-ratio)  
    2 widgets included: *Glide ratio to target*, *Average glide ratio*.
19. [Sunrise, sunset](../widgets/info-widgets.md#sunset-and-sunrise-widgets) 
20. [* Developer widgets](../widgets/info-widgets.md#-developer-widgets)
    4 widgets included.


### Top / Bottom panel widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![top panel](@site/static/img/widgets/top_panel_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![top panel](@site/static/img/widgets/top_panel_andr.png)    

</TabItem>

</Tabs> 

- [Coordinates widget](../widgets/info-widgets#coordinates-widget) - shows the geographic coordinates of current geo-location.
- [Street name](../widgets/nav-widgets#street-name) - shows current street name with straight location arrow or next street name with the maneuver has to be completed.
- [Map markers bar](../widgets/markers#top-bar-widget-markers) - show the distance and direction to the marker from current location.
- [Lanes](../widgets/nav-widgets#lanes) - shows the current road lanes layout and highlights lanes to drive with active navigation.  

- [Elevation profile](../widgets/nav-widgets#elevation-widget) - shows the elevation and slope profile of the current route.  

![elevation profile](@site/static/img/widgets/elevation_prof_and.png)  


### Pages for widgets

Widgets in the <Translate android="true" id="map_widget_left" /> and <Translate android="true" id="map_widget_right" /> can be grouped into **Pages**. To find options, follow these steps: *OsmAnd menu → Configure screen → Widgets (Left / Right panel) → Change order → Add pages*.

![Widget page](@site/static/img/widgets/widget_page.png) ![Widget page](@site/static/img/widgets/widget_page_1.png)  


### Quick action

[Quick action](../widgets/quick-action.md) - is a button that gives quick access to frequently used actions.  

![Configure screen menu](@site/static/img/widgets/quick_act_ios.png)  


### Buttons (Android) and Remaining elements (iOS)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- [Compass](../widgets/map-buttons.md#compass) - indicates how the map is oriented on the device.
- [3D mode](../widgets/map-buttons.md#3d-mode) - appears in the list and is available for setting if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected. 
- [Distance by tap](../widgets/radius-ruler.md#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.  
- [Quick action](../widgets/quick-action.md) - is a button that gives quick access to frequently used actions.  

</TabItem>

<TabItem value="ios" label="iOS">  

- [**Distance by tap**](../widgets/radius-ruler.md#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.
- **Transparent widgets** - makes transparent the background of the navigation and information widgets.  

<!--
- [Street name](../widgets/nav-widgets.md#street-name) combined with [Approach POI](../widgets/nav-widgets.md#approach-poisfavorites) - displays street name of the current or next following road, displays information about approaching POI / favourites along the road.
- [**Coordinates widget**](../widgets/info-widgets.md#coordinates-widget) -  shows the geographic coordinates of current geolocation (appears on the top bar).
- [**Map markers**](../widgets/markers.md) - shows a directional line from your position to the active marker locations (could be on the top bar or on the right widget panel).
- [**Lanes**](../widgets/nav-widgets.md#lanes) - shows the lanes you have to drive during a navigation with distance to a maneuver.
-->

</TabItem>

</Tabs> 


### Actions panel (Android)

- **Reset to default** - return to preset settings.
- **Copy from another profile** - allows you to copy settings made for another profile


## Actions with added widgets

### Duplicates for widgets

You can show **Duplicates** for the right and left panels at the same time, as well as for each page of widgets. To find options, follow these steps: *OsmAnd menu → Configure screen → Widgets (Left / Right panel) → Change order → "+" chosen widget*.

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)


### Remove / Delete


## Switch profile

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_andr.png)   

On the home screen in the Android version, the ability to change profiles is presented as their previously added icons at the top of the screen.  

Not all existing profiles are displayed.  

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)     

</TabItem>

</Tabs> 

