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

<InfoIncompleteArticle/>

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

- [Left panel](#right--left-panel-widgets)
- [Right panel](#right--left-panel-widgets) 
- [Top panel](#top--bottom-panel-widgets)
- [Bottom panel](#top--bottom-panel-widgets)
- [Buttons](#buttons-android-and-remaining-elements-ios)
- [Actions](#actions-panel-android--three-button-menu)  
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

1. [Route maneuvers](../widgets/nav-widgets.md#next-turns). This set of *navigational* widgets is activated during navigation and display information about the distance to the next maneuver.  
    3 widgets included: *Next turn*, *Next turn (small)*, *Second next turn*.

2. [Navigation point](../widgets/nav-widgets.md#navigation-points). A set of *navigation widgets* shows the remaining distance to a destination, intermediate point, arrival time to an intermediate point, or travel time for a calculated route.  
    4 widgets included: [Distance to destination](../widgets/nav-widgets.md#distance-to-destination), [Distance to intermediate](../widgets/nav-widgets.md#distance-to-intermediate), [Time to intermediate](../widgets/nav-widgets.md#time-to-intermediate), [Time to destination](../widgets/nav-widgets.md#time-to-destination).

3. [Map markers](../widgets/markers.md). A set of widgets shows the distance or estimated time of arrival (ETA) for the first two markers in the list of map markers. show special points marked as flags on the map.  
    2 widgets included: *First marker*, *Second marker*.

4. [Bearing](../widgets/nav-widgets.md#bearing). This set of *navigational* widgets shows the absolute or relative bearing to a target in angular units (in 180 degrees, 360 degrees, or milliradians mode).  
    3 widgets included: *Relative bearing*, *Magnetic bearing*, *True bearing*.

5. [Current Speed](../widgets/info-widgets.md#speed). *Informational* widget shows the current speed detected by the GPS sensor. 
6. [Average speed](../widgets/info-widgets.md#average-speed-widget). *Informational* widget shows the average speed of the current trip.
7. [Speed limit](../widgets/nav-widgets.md#speed-limit). A set of *informational* widgets displays the speed limit on the current road you are traveling on.
8. [Altitude](../widgets/info-widgets.md#altitude-widgets). A set of *informational* widgets displays the altitude above sea level for the current geolocation or the altitude above sea level for the current map center.  
    2 widgets included: *Altitude: current location*, *Elevation: map center*.

9. [Current time](../widgets/info-widgets.md#current-time). *Informational* widget displays the current time taken from your device.
10. [Battery level](../widgets/info-widgets.md#battery-level). *Informational* widget shows battery level of your device.
11. [Radius ruler](../widgets/info-widgets.md#radius-ruler). The widget displays on a map the distance between the user's location and the inner point of the distance circles of the [Radius ruler tool](../widgets/radius-ruler.md).

12. [Glide ratio](../widgets/info-widgets.md#glide-ratio). The widgets show the glide ratio to the target and the average glide ratio for the current flight.  
    2 widgets included: *Glide ratio to target*, *Average glide ratio*.

13. [Sunrise, sunset](../widgets/info-widgets.md#sunset-and-sunrise). A set of *informational* widgets shows the time of the next sunrise or sunset for the center of the map.  
    2 widgets included: *Sunrise*, *Sunset*.

14. [OsmAnd Tracker status](../widgets/info-widgets.md#-tracker-widget). This *informational* widget is used to quickly access the [OsmAnd Tracker application](https://play.google.com/store/apps/details?id=net.osmand.telegram) to share your location with other users. 

15. [GPS info (*Android only*)](../widgets/info-widgets.md#gps-info). *Informational* widget shows the number of satellites the device is currently detecting and using.

16. [Available RAM (*Android only*)](../widgets/info-widgets#available-ram). *Informational* widget

17. [Developer widgets (from *Development plugin*)](../widgets/info-widgets.md#developer-widgets). A set of *informational* widgets provides information about zoom level, map rendering speed, map center elevation above sea level, distance to the map center, camera height and tilt.  
    4 widgets included: *Map rendering FPS*, *Camera tilt*, *Camera elevation*, *Zoom level*, *Distance from camera to target*.

18. [Mapillary (from *Mapillary plugin*)](../widgets/info-widgets.md#mapillary-widget). *Informational* widget provides quick access to Mapillary app to add street images. 
19. [Parking (from *Parking position plugin*)](../widgets/info-widgets.md#parking-widget). *Informational* widget shows the distance from the center of the screen to the parking location.  

20. [Wheather (from *Weather plugin*)](../widgets/info-widgets.md#weather-widgets). A set of *informational* widgets displays detailed weather data.    
    5 widgets included: *Temperature*, *Air Pressure*, *Wind*, *Cloud*, *Precipitation*.  

21. [Trip recording (from *Trip recording plugin*)](../widgets/info-widgets.md#trip-recording-widgets). A set of *informational* widgets provides quick access to start and stop track recording.  
    4 widgets included: *Distance*, *Duration*, *Uphill*, *Downhill*.

21. [Audio/video notes (from *Audio/video notes plugin*)](../widgets/info-widgets.md#audiovideo-notes-widget). This set of *informational* widgets provides quick access to start/stop taking an audio, video or photo notes.      
    4 widgets included: *On request*, *Record audio*, *Record video*, *Take a photo*.

22. [External Sensors widgets (from *External sensors plugin*)](../widgets/info-widgets.md#external-sensors-widgets). A set of *informational* widgets help you track data from your external sensors in real time.
    6 widgets included: *Heart Rate*, *Bicycle Power*, *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance*, *Temperature*.


### Top / Bottom panel widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![top panel](@site/static/img/widgets/top_bottom_panel_1_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![top panel](@site/static/img/widgets/top_bottom_panel_1_ios.png)    

</TabItem>

</Tabs> 


1. [Coordinates widgets](../widgets/info-widgets#coordinates-widget). This set of *informational* widgets displays the geographic coordinates of the current geolocation.  
    2 widgets included: *Coordinates: map center*, *Coordinates: current location*.
2. [Street name](../widgets/nav-widgets#street-name). *Navigational* widget shows the current street name with a straight arrow or the next street name with an arrow pointing to an upcoming turn.
3. [Lanes](../widgets/nav-widgets#lanes). *Navigational* widget shows the current road lanes layout and highlights lanes for traffic with active navigation.
4. [Map markers bar (*Android only*)](../widgets/markers.md#configure-marker-widgets-android). The widget displays the distance and direction to the next Map marker from your current location. The widget can be configured to show 1 or 2 markers.
5. [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget). *Navigational* widget shows the elevation and slope profile of the current route.  

    ![elevation profile](@site/static/img/widgets/elevation_prof_and.png)  


### Buttons

1. [Compass](../widgets/map-buttons.md#display-options). Indicates how the map is oriented on the device.  
    3 views: *Always visible*, *Always hidden*, *Visible if map is rotated*.
2. [3D mode](../widgets/map-buttons.md#3d-mode) - appears in the list and is available for setting if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected. 
3. [Distance by tap](../widgets/radius-ruler.md#distance-by-tap-tool) - gives options to measure the distance from your position to the selected point.  
4. [Quick action](../widgets/quick-action.md) - is a button that gives quick access to frequently used actions.  


### Pages for widgets

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edit → Add page*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)    

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edit → Add page*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs> 

Widgets in the right and left panels can be grouped into **Pages**. To do this, select a panel, tap *Edit*, and then tap *Add Page*. This helps you interact with the map more easily and without distractions when navigating, as well as having multiple sets of widgets for different cases.


### Actions panel (Android) / Three-button menu

- **Reset to default** - return to preset settings.
- **Copy from another profile** - allows you to copy settings made for another profile


## Actions with added widgets

### Duplicates for widgets

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

**Duplicates** can be shown simultaneously for the all panels, as well as for each page of the widget. To find the desired options, follow the steps below:  
*OsmAnd menu → Configure screen → Widgets → **Add** chosen widget*.  


### Remove / Delete

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)     

To remove or delete a widget from the application screen, you need to select the required panel and then press the **Edit** button. 
- To move a widget to the desired location or page, long press the icon on the right and select a position in the widget list. 
- To no longer see the widget, tap the minus icon to the left of its name.

## Switch profile

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)     

</TabItem>

</Tabs> 

For Android, the ability to change profiles is presented as their previously added icons at the top of the screen. For iOS, you need to go to the three dots menu.  
Note that not all existing profiles are displayed, but only the ones you selected earlier.  

