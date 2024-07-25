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

Configure screen is a menu that allows you to customize the widgets that will be displayed on the map. On this screen, you can enable [information](../widgets/info-widgets.md) and [navigation](../widgets/nav-widgets.md) widgets, [buttons](../widgets/map-buttons.md), a [ruler](../widgets/radius-ruler.md), and add [quick actions](../widgets/quick-action.md).   
 
All widgets are [profile dependent](../personal/profiles.md), so if you change the order, visibility, or state for one profile, they will not apply to other profiles. Each profile has its own predefined list of widgets based on the navigation screen design. It can be configured and used with or without navigation.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)   

</TabItem>

</Tabs> 


## Widget Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs> 

OsmAnd application allows you to group, copy and customize widgets in various ways, move them in the list and delete widgets added to the screen.

With the help of panels you can arrange widgets on the application screen in a convenient place. In panels, widgets can be organized in rows on the right/left or top/bottom.

### Widgets for All Panels  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_ios.png)    

</TabItem>

</Tabs> 

1. [Route maneuvers](../widgets/nav-widgets.md#next-turns) (*only for Left/Right panel*)  This set of *navigational* widgets is activated during navigation and display information about the distance to the next maneuver.  
    3 widgets included: *Next turn*, *Next turn (small)*, *Second next turn*. 

2. [Navigation point](../widgets/nav-widgets.md#navigation-points)  A set of *navigation widgets* shows the remaining distance to a destination, intermediate point, arrival time to an intermediate point, or travel time for a calculated route.  
    4 widgets included: [Distance to destination](../widgets/nav-widgets.md#distance-to-destination), [Distance to intermediate](../widgets/nav-widgets.md#distance-to-intermediate), [Time to intermediate](../widgets/nav-widgets.md#time-to-intermediate), [Time to destination](../widgets/nav-widgets.md#time-to-destination). 

3. [Map markers](../widgets/markers.md)  A set of widgets shows the distance or estimated time of arrival (ETA) for the first two markers in the list of map markers. show special points marked as flags on the map.  2 widgets included: *First marker*, *Second marker*. 

4. [Bearing](../widgets/nav-widgets.md#bearing)  This set of *navigational* widgets shows the absolute or relative bearing to a target in angular units (in 180 degrees, 360 degrees, or milliradians mode).  
    3 widgets included: *Relative bearing*, *Magnetic bearing*, *True bearing*. 

5. [Current Speed](../widgets/info-widgets.md#speed)  *Informational* widget shows the current speed detected by the GPS sensor.  

6. [Average speed](../widgets/info-widgets.md#average-speed-widget)  *Informational* widget shows the average speed of the current trip.  

7. [Speed limit](../widgets/nav-widgets.md#speed-limit)  A set of *informational* widgets displays the speed limit on the current road you are traveling on. 

8. [Altitude](../widgets/info-widgets.md#altitude-widgets)  A set of *informational* widgets displays the altitude above sea level for the current geolocation or the altitude above sea level for the current map center.  
    2 widgets included: *Altitude: current location*, *Elevation: map center*. 

9. [Current time](../widgets/info-widgets.md#current-time)  *Informational* widget displays the current time taken from your device.  

10. [Battery level](../widgets/info-widgets.md#battery-level)  *Informational* widget shows battery level of your device.  

11. [Radius ruler](../widgets/info-widgets.md#radius-ruler)  The widget displays on a map the distance between the user's location and the inner point of the distance circles of the [Radius ruler tool](../widgets/radius-ruler.md).  

12. [Glide ratio](../widgets/info-widgets.md#glide-ratio)  The widgets show the glide ratio to the target and the average glide ratio for the current flight.  
    2 widgets included: *Glide ratio to target*, *Average glide ratio*. 

13. [Sunrise, sunset](../widgets/info-widgets.md#sunset-and-sunrise)  A set of *informational* widgets shows the time of the next sunrise or sunset for the center of the map.  
    2 widgets included: *Sunrise*, *Sunset*. 

14. [OsmAnd Tracker status](../widgets/info-widgets.md#-tracker-widget)  This *informational* widget is used to quickly access the [OsmAnd Tracker application](https://play.google.com/store/apps/details?id=net.osmand.telegram) to share your location with other users.  

15. [GPS info (*Android only*)](../widgets/info-widgets.md#gps-info)  *Informational* widget shows the number of satellites the device is currently detecting and using.  

16. [Developer widgets (from *OsmAnd development plugin*)](../widgets/info-widgets.md#developer-widgets)  A set of *informational* widgets provides information about zoom level, map rendering speed, map center elevation above sea level, distance to the map center, camera height and tilt and available RAM on your device.  
    5 widgets included: *Map rendering FPS*, *Camera tilt*, *Camera elevation*, *Zoom level*, *Distance from camera to target*, *Available RAM*.  

17. [Mapillary (from *Mapillary plugin*)](../widgets/info-widgets.md#mapillary-widget)  *Informational* widget provides quick access to Mapillary app to add street images.  

18. [Parking (from *Parking position plugin*)](../widgets/info-widgets.md#parking-widget)  *Informational* widget shows the distance from the center of the screen to the parking location.  

19. [Wheather (from *Weather plugin*)](../widgets/info-widgets.md#weather-widgets)  A set of *informational* widgets displays detailed weather data.  
    5 widgets included: *Temperature*, *Air Pressure*, *Wind*, *Cloud*, *Precipitation*.  
20. [Trip recording (from *Trip recording plugin*)](../widgets/info-widgets.md#trip-recording-widgets)  A set of *informational* widgets provides quick access to start and stop track recording.  
    4 widgets included: *Distance*, *Duration*, *Uphill*, *Downhill*.  

21. [Audio/video notes (from *Audio/video notes plugin*)](../widgets/info-widgets.md#audiovideo-notes-widget)  This set of *informational* widgets provides quick access to start/stop taking an audio, video or photo notes.  
    4 widgets included: *On request*, *Record audio*, *Record video*, *Take a photo*.  

22. [External Sensors widgets (from *External sensors plugin*)](../widgets/info-widgets.md#external-sensors-widgets)  A set of *informational* widgets help you track data from your external sensors in real time.  
    6 widgets included: *Heart Rate*, *Bicycle Power* (_Android only_), *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance*, *Temperature*. 
23. [Speedometer](../widgets/info-widgets.md#speedometer). Shows the current speed based on GPS data and and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed).


## Top / Bottom Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Top / Bottom panel*  

![top panel](@site/static/img/widgets/top_bottom_panel_1_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Top / Bottom panel* 

![top panel](@site/static/img/widgets/top_bottom_panel_1_ios.png)    

</TabItem>

</Tabs> 

The OsmAnd app allows you to place widgets in top or buttom and group them by rows.  
Types of widgets are available for Top / Bottom panels:

1. [All widgets](#all-panel-widgets) from other panels.   

2. [Coordinates widgets](../widgets/info-widgets#coordinates-widget). This set of *informational* widgets displays the geographic coordinates of the current geolocation.  
    2 widgets included: *Coordinates: map center*, *Coordinates: current location*.  

3. [Street name](../widgets/nav-widgets#street-name). *Navigational* widget shows the current street name with a straight arrow or the next street name with an arrow pointing to an upcoming turn.  

4. [Lanes](../widgets/nav-widgets#lanes). *Navigational* widget shows the current road lanes layout and highlights lanes for traffic with active navigation.  
5. [Map markers bar](../widgets/markers.md#configure-marker-widgets-android). The widget displays the distance and direction to the next Map marker from your current location.  
    The widget can be configured to show 1 or 2 markers.  

6. [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget). *Navigational* widget shows the elevation and slope profile of the current route.  
      ![elevation profile](@site/static/img/widgets/elevation_prof_and.png) 


### Rows for Panels

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

There is a **Row mode** for the top and bottom panels, which can be used to add as many rows as you need to the application screen to place widgets on them.

How to do it:   
- Add the required widgets from the list of *Available widgets*.
- Tap the *Change order* button below the list of added widgets. 
- Find the *Add row* button at the bottom of the list. 
- Widgets can be moved between rows.
- Tap the *Apply* button.

The mode allows you to add **more than one widgets in a single row** on the top and bottom panels to display as many information as needed. Restrictions:    

- A row can contain only one **Complex** widget that has a unique display. These widgets include:
    - [Map markers bar (*Android only*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Street name](../widgets/nav-widgets#street-name)
    - [Coordinates widgets](../widgets/info-widgets#coordinates-widget)
    - [Lanes](../widgets/nav-widgets#lanes)
    - [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget)
    - [Route maneuvers](../widgets/nav-widgets.md#next-turns)

- For all rest **Simple** widgets that only display information such as *Widget Name*, *Units of measurement*, *Value*, and *Icon*, there is a option to add several to one panel at once. 

### Settings

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

**Change widget size**  
Size customization is available for all **Simple** widgets in the Top and Bottom panels. You can choose the size that best suits your needs:

- *Small*. This size is suitable for narrow widget display, saving more screen space for maps and widgets on other panels, especially if you have a small device.
- *Medium*. This is the default widget size. It provides a balance between information visibility and screen space usage.
- *Large*. The size is suitable for you if you need larger and more visual information in the widget.  

**Hiding  widget icons**  
For all widgets belonging to *Simple*, you can hide the icons located on the widget fields. This makes it possible to free up space for useful information. For example, if there are several widgets in the Row, the information is better visible.  

**Individual size for different rows**  
The size of each widget can be customized individually, which means that you can set different sizes of widgets by changing the size of the row. However, it is important to take into account that if there are several widgets in one row, then changing the size of one of them automatically applies to all widgets in this row and, accordingly, to the size of the row as a whole.  

To change the widget size and icon visibility:
- Select a widget that you have already added to the panel.  
- Tap the *Settings* icon on the right side of the widget field.
- Tap the *Size* setting and select one of the available sizes.
- Switch to the Off position, in the *Show icon* field.


## Left / Right Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left / Right panel*  

![Configure screen](@site/static/img/widgets/configure_screen_left_right_andr.png) ![Configure screen](@site/static/img/widgets/configure_screen_left_right_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left / Right panel*  

![Configure screen](@site/static/img/widgets/configure_screen_left_right_ios.png)

</TabItem>

</Tabs> 

The OsmAnd app allows you to place [widgets from the table](#widgets-for-all-panels) in sidebars and group them by pages.

### Pages for Widgets

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

## Panel Widgets Settings

### Copies of Widgets

*OsmAnd menu → Configure screen → Widgets → Panel → **Add** chosen widget*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

**Copies** can be shown simultaneously for the all panels, as well as for each page of the widget. To find the required options, follow the steps below:  
- Add the widget you need and tap it.
- In the list of actions, select the *Duplicate* button.
- Another option. Select the same widget in the *Available widgets* list and tap the *Add* button.


### Move / Delete

*OsmAnd menu → Configure screen → Widgets → Panel → **Add** chosen widget*  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)     

To remove or delete a widget from the application screen, you need to select the required panel and then press the **Edit** button. 
- To move a widget to the required location or page, long-tap the icon on the right and select a position in the widget list. 
- To no longer see the widget, tap the minus icon to the left of its name.


## Buttons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)  

</TabItem>

</Tabs> 

- **Custom buttons**. Allows you to add a list of single actions from all available [Quick actions](../widgets/quick-action.md#custom-buttons). These actions can be assigned to one or more widget buttons on the map screen. Custom buttons provide quick access to frequently used actions.
- **Default buttons**. It gives you the ability to hide or show preset map buttons.
    - [3D mode](../widgets/map-buttons.md#3d-mode). Appears in the list and is available for setting if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected.
    - [Compass](../widgets/map-buttons.md#display-options). Indicates how the map is oriented on the device.  
    3 views: *Always visible*, *Always hidden*, *Visible if map is rotated*.   


## Other

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Other*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png) 

</TabItem>

</Tabs> 

- [**<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>**](#display-position). [⬇](#display-position)
- [**Distance by tap**](../widgets/radius-ruler.md#distance-by-tap-tool). Gives the ability to measure the distance from your position to the selected point.
- [**Speedometer**](../widgets/info-widgets.md#speedometer). Shows the current speed based on GPS data and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed). The displayed data also depends on OsmAnd's [*Speed Limit Tolerance*](../navigation/guidance/voice-navigation.md#speed-limit) setting.


### Display Position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png) 

</TabItem>

</Tabs> 

> *Location position on screen* is the name of this setting in the iOS version of OsmAnd.  

Allows you to set the placement of the cursor *[My location](../map/interact-with-map.md#my-location--zoom)* on the Osmand map. There are three options available:  

- **<Translate android="true" ids="position_on_map_center"/>**. The cursor is always positioned in the center of the screen.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *My location* is placed slightly below the center of the screen. This mode allows you to see more map information ahead of your movement, which is very useful during navigation.
- **<Translate android="true" ids="shared_string_automatic"/>**. Places *My location* depending on *[Map orientation](../map/interact-with-map.md#map-orientation-modes)* (*Bottom* - for movement direction, *Center* - for all others).


## Actions 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)    

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Any panel*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs> 

Access to additional actions in the Configure screen are:
- *Android*
    Located in Configure screen at the bottom of the screen in the *Actions* section: *Menu → Configure screen → Actions*.
- *Android / iOS*
    Located on the screens of each Panel in the 3-dot menu in the upper right corner of the screen.

Available actions:
- **Reset to default**. This feature allows you to reset all settings to default values if you want to start over, or use only the preset ones when starting OsmAnd.
- **Copy from another profile**. This feature allows you to quickly import settings from another profile, select the required ones from the list, and copy. 


## Switch Profile

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_2_andr.png)   

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_switch_ios.png)     

</TabItem>

</Tabs> 

- For **Android** devices, you can change profiles at the top of the Configure Screen home screen using the profile icons that are available.  
- If you are using an **iOS** device, tap the profile icon in the top corner of the Configure Screen home screen and select the required profile from the list to activate it.  

**Take note**. The *Switch profile option* does not display all existing profiles, but only those that have been *switched on* in the Settings menu. 


## Related Articles

- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)


> *This article was last updated in July 2024*
