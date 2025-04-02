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
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


## Overview  

Configure screen is a menu that allows you to customize the widgets to display on the map. On this screen, you can enable [information](../widgets/info-widgets.md) and [navigation](../widgets/nav-widgets.md) widgets, [buttons](../widgets/map-buttons.md), a [ruler](../widgets/radius-ruler.md), and add [quick actions](../widgets/quick-action.md).  

All widgets are [profile-dependent](../personal/profiles.md), so changes to one profile, such as order, visibility, or state, will not be applied to the others. Each profile has its predefined list of widgets based on the navigation screen design. It can be configured and used with or without navigation.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>


## Widget Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you to organize your widgets by grouping, copying, and customizing them. You can also move widgets within the list or remove them from the screen.  

To arrange widgets on the app screen, use panels. Panels enable you to place widgets in specific locations, either in rows at the top or bottom or on the left or right side of the screen. This helps you create a layout that suits your needs and preferences.

### Widgets for All Panels  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panel_ios.png)

</TabItem>

</Tabs>

1. [Route maneuvers](../widgets/nav-widgets.md#next-turns) (*only for Left/Right panel*). This set of *navigational* widgets is activated during navigation, and they display information about the distance to the next maneuver.  
    3 widgets are included: *Next turn*, *Next turn (small)*, *Second next turn*.

2. [Navigation point](../widgets/nav-widgets.md#navigation-points). A set of *navigation widgets* shows the remaining distance to a destination, intermediate point, arrival time to an intermediate point, or travel time for a calculated route.  
    4 widgets are included: [Distance to destination](../widgets/nav-widgets.md#distance-to-destination), [Distance to intermediate](../widgets/nav-widgets.md#distance-to-intermediate), [Time to intermediate](../widgets/nav-widgets.md#time-to-intermediate), [Time to destination](../widgets/nav-widgets.md#time-to-destination).

3. [Map markers](../widgets/markers.md). A set of widgets shows the distance or estimated time of arrival (ETA) for the first two markers in the list of map markers. Show special points marked as flags on the map.  2 widgets are included: *First marker*, *Second marker*.

4. [Bearing](../widgets/nav-widgets.md#bearing). This set of *navigational* widgets shows the absolute or relative bearing to a target in angular units (in 180 degrees, 360 degrees, or milliradians mode).  
    3 widgets are included: *Relative bearing*, *Magnetic bearing*, *True bearing*.

5. [Current Speed](../widgets/info-widgets.md#speed). An *informational* widget shows the current speed detected by the GPS sensor.  

6. [Average speed](../widgets/info-widgets.md#average-speed-widget). An *informational* widget shows the average speed of the current trip.  

7. [Speed limit](../widgets/nav-widgets.md#speed-limit). A set of *informational* widgets displays the speed limit on the current road you are traveling on.

8. [Altitude](../widgets/info-widgets.md#altitude-widgets). A set of *informational* widgets displays the altitude above sea level for the current geolocation or the altitude above sea level for the current map center.  
    2 widgets are included: *Altitude: current location*, *Elevation: map center*.

9. [Current time](../widgets/info-widgets.md#current-time). An *informational* widget displays the current time taken from your device.  

10. [Battery level](../widgets/info-widgets.md#battery-level). An *informational* widget shows battery level of your device.  

11. [Radius ruler](../widgets/info-widgets.md#radius-ruler). The widget displays on a map the distance between your location and the inner point of the distance circles of the [Radius ruler tool](../widgets/radius-ruler.md).  

12. [Glide ratio](../widgets/info-widgets.md#glide-ratio). The widgets show the glide ratio to the target and the average glide ratio for the current flight.  
    2 widgets are included: *Glide ratio to target*, *Average glide ratio*.

13. [Sunrise, sunset](../widgets/info-widgets.md#sunset-and-sunrise). A set of *informational* widgets shows the time of the next sunrise or sunset for the center of the map.  
    2 widgets are included: *Sunrise*, *Sunset*.

14. [OsmAnd Tracker status](../widgets/info-widgets.md#-tracker-widget). This *informational* widget is used to quickly access the [OsmAnd Tracker application](https://play.google.com/store/apps/details?id=net.osmand.telegram) to share your location with other users.  

15. [GPS info (*Android only*)](../widgets/info-widgets.md#gps-info). An *informational* widget shows the number of satellites the device is currently detecting and using.  

16. [Developer widgets (from *OsmAnd development plugin*)](../widgets/info-widgets.md#developer-widgets). A set of *informational* widgets provides information about zoom level, map rendering speed, map center elevation above sea level, distance to the map center, camera height and tilt and available RAM on your device.  
    5 widgets are included: *Map rendering FPS*, *Camera tilt*, *Camera elevation*, *Zoom level*, *Distance from camera to target*, *Available RAM*.  

17. [Mapillary (from *Mapillary plugin*)](../widgets/info-widgets.md#mapillary-widget). An *informational* widget provides quick access to the Mapillary app to add street images.  

18. [Parking (from *Parking position plugin*)](../widgets/info-widgets.md#parking-widget). An *informational* widget shows the distance from the center of the screen to the parking location.  

19. [Whether (from *Weather plugin*)](../widgets/info-widgets.md#weather-widgets). A set of *informational* widgets displays detailed weather data.  
    5 widgets are included: *Temperature*, *Air Pressure*, *Wind*, *Cloud*, *Precipitation*.  
20. [Trip recording (from *Trip recording plugin*)](../widgets/info-widgets.md#trip-recording-widgets). A set of *informational* widgets provides quick access to start and stop track recording.  
    4 widgets are included: *Distance*, *Duration*, *Uphill*, *Downhill*.  

21. [Audio/video notes (from *Audio/video notes plugin*)](../widgets/info-widgets.md#audiovideo-notes-widget). This set of *informational* widgets provides quick access to start/stop taking an audio, video, or photo notes.  
    4 widgets are included: *On request*, *Record audio*, *Record video*, *Take a photo*.  

22. [External Sensors widgets (from *External sensors plugin*)](../widgets/info-widgets.md#external-sensors-widgets). A set of *informational* widgets help you track data from your external sensors in real-time.  
    6 widgets are included: *Heart Rate*, *Bicycle Power* (*Android only*), *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance*, *Temperature*.
23. [Speedometer](../widgets/info-widgets.md#speedometer). Shows the current speed based on GPS data and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed).


## Top and Bottom Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Top / Bottom panel*  

![top panel](@site/static/img/widgets/top_bottom_panel_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_widgets"/> → Top / Bottom panel*

![top panel](@site/static/img/widgets/top_bottom_panel_1_ios.png)

</TabItem>

</Tabs>

The **Top and Bottom panels** allow you to organize widgets in rows. You can add multiple rows, customize widget sizes, and manage the display.  

***Available widgets:***

1. [All widgets](#widgets-for-all-panels). Any widget available for all panels.

2. [Coordinates widgets](../widgets/info-widgets#coordinates-widget). This set of *informational* widgets displays the geographic coordinates of the current geolocation.  
    2 widgets are included: *Coordinates: map center*, *Coordinates: current location*.  

3. [Street Name](../widgets/nav-widgets#street-name). A *navigational* widget shows the current street name with a straight arrow or the next street name with an arrow pointing to an upcoming turn.  

4. [Lanes](../widgets/nav-widgets#lanes). *Navigational* widget shows the current road lanes layout and highlights lanes for traffic with active navigation.  

5. [Map markers bar](../widgets/markers.md#configure-marker-widgets-android). The widget displays the distance and direction to the next Map marker from your current location.  
    The widget can be configured to show 1 or 2 markers.  

6. [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget). A *navigational* widget shows the elevation and slope profile of the current route.  
      ![elevation profile](@site/static/img/widgets/elevation_prof_and.png)


### Rows

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

The **Row mode** feature allows you to add as many rows as needed to the top and bottom panels. You can display multiple widgets per row, enhancing the amount of visible information.

***How to configure rows:***

- **Add widgets**. Select from the list of *Available widgets*.
- **Change order.** Tap the *Change order* button to arrange widgets.
- **Add rows.** Use the *Add row* button to create new rows for widgets.
- **Move widgets**. Move widgets between rows.
- **Apply changes.** Tap the *Apply* button to save the configuration.

#### Widget Types and Restrictions

The mode allows you to add **more than one widget in a single row** on the top and bottom panels to display as much information as needed.  

- **Complex widgets**. Only one complex widget can be added per row. These include:
    - [Map markers bar (*Android only*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Street name](../widgets/nav-widgets#street-name)
    - [Coordinates widgets](../widgets/info-widgets#coordinates-widget)
    - [Lanes](../widgets/nav-widgets#lanes)
    - [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget)
    - [Route maneuvers](../widgets/nav-widgets.md#next-turns)

- **Simple widgets**. Multiple simple widgets can be added to a single row. These widgets could display *Name*, *Units of measurement*, *Value*, and *Icon*.


## Left and Right Panels

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left / Right panel*  

![Configure screen](@site/static/img/widgets/configure_screen_left_right_andr.png) ![Configure screen](@site/static/img/widgets/configure_screen_left_right_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/> → Left / Right panel*  

![Configure screen](@site/static/img/widgets/configure_screen_left_right_ios.png)

</TabItem>

</Tabs>

The OsmAnd app allows you to place [widgets for all panels](#widgets-for-all-panels) in the left and right panels and group them by [Pages](#pages). Widget [resizing customization](#widget-settings) is available for side widgets, the same as for widgets in the top and bottom panels.

### Pages

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edit → Add page*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edit → Add page*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in the right and left panels can be grouped into **Pages**. The **Pages mode** feature allows you to add 5 pages to the left and right panels.

***How to configure rows:***

- **Add a Page**. Navigate to the Left/Right Panel settings and tap *Edit → Add Page*.
- **Organize widgets by Page**. This feature is helpful when different sets of widgets are needed for different tasks, such as navigating versus browsing the map.
- Pages allow you to create **widget sets** for specific scenarios, improving workflow and reducing clutter.


## Widget Settings

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widget size options** (*for all panels*):  
    You can customize the size of **Simple widgets** in the **Top, Bottom, Left, and Right panels**:

    - **Small**. Ideal for compact displays, saving more screen space for maps.
    - **Medium** (*default widget size*). Balances visibility and space usage.
    - **Large**. Provides larger, more visible widget information.  

2. **Hiding widget icons** (*for top and bottom panels*):

    - Improves clarity and maximizes the space for important data.
    - Especially useful when displaying many widgets on the same **row**.

3. **Individual size for different rows** (*for top and bottom panels*):

    - Widgets can be individually sized by adjusting the row size.
    - **NOTE:** Changing the size of one widget in a row will resize all widgets in that row.

4. **To change the widget size and icon visibility:**

    - Select a widget that you have already added to the panel.  
    - Tap the *Settings* icon on the right side of the widget field.
    - Tap the *Size* setting and select one of the available sizes.
    - Switch to the Off position, in the *Show icon* field.


## Panels Customization

### Widget Context Menu

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget dublicate](@site/static/img/widgets/widget_context_menu_ios.png)

</TabItem>

</Tabs>

The **widget context menu** provides a quick way to manage and configure widgets directly from the map screen. You can access it by ***long tapping*** any widget to customize the layout of widgets without leaving the map.

**For Top and Bottom panels**  

- *Add widget to the Right/Left:*

    - Select a position for the new widget relative to the current one.
    - Choose the widget from the [Available widgets](#widgets-for-all-panels) list.

**For Left and Right panels**  

- *Add widget Above/Below:*

    - Select whether to position the new widget above or below the current widget.
    - Tap the required widget in the list to add it to the specified position.

**General actions for all panels**  

- *Settings*.
    - Access the widget’s settings (if available) to customize its appearance or behavior.

- *Reset average speed*.
    - Available for the [Average Speed](../widgets/info-widgets.md#average-speed) widget.
    - Long tap to instantly reset the speed value during a trip.

- *Delete*.
    - Remove the widget from the panel.
    - A confirmation prompt ensures the action is intentional.

### Copies of Widgets

*OsmAnd menu → Configure screen → Widgets → Panel*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd allows you to add multiple instances of the same widget to different panels or pages. This feature is particularly useful when you need consistent information across different views or profiles.  

***How to duplicate widgets:***

- **Add the widget**. Navigate to: *OsmAnd menu → Configure screen → Widgets → Panel →* **Add** *widget*.
- **Duplicate using the context menu**. Tap the widget and select **Duplicate** from the list of actions.
- **Alternative method**. Select the same widget from the *Available widgets* list and tap *Add*.


### Move or Delete

*OsmAnd menu → Configure screen → Widgets → Panel*  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

You can rearrange or remove widgets from the application screen using the **Edit** mode.  

***How to move a widget:***

- Go to: *OsmAnd Menu → Configure Screen → Widgets → Panel → Edit button*.
- Long tap the **icon on the right** of the widget.
- Drag it to the required position in the widget list.

***How to delete a widget:***  

- Follow the same steps as above.
- Tap the **minus icon** to the left of the widget name.
- Confirm the deletion when prompted.


## Buttons

### Custom Buttons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Quick Action (Custom buttons)** allows you to add a list of single actions from all available [Quick actions](../widgets/quick-action.md#custom-buttons). These actions can be assigned to one or more widget buttons on the map screen. Custom buttons provide quick access to frequently used actions.

### Default Buttons

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_ios.png)

</TabItem>

</Tabs>

1. **Default buttons** allow you to customize which preset map buttons are visible on the map screen. You can choose to hide or show the following buttons:

    - [3D mode](../widgets/map-buttons.md#3d-mode). For iOS, the button is always available. For Android, it appears in the list and is available for setting if the map rendering engine [Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine) is selected.

    - [Compass](../widgets/map-buttons.md#display-options). Indicates how the map is oriented on the device.  
    3 views: *Always visible*, *Always hidden*, *Visible if map is rotated*.

    - [Configure map](../map/configure-map-menu.md). Access options to modify the map's style, layers, and additional settings.

    - [Menu](../widgets/map-buttons.md#main-menu). Opens the main application menu for accessing all features.

    - [My location](../widgets/map-buttons.md#my-location-and-zoom). Centers the map on your current position.

    - [Navigation](../widgets/map-buttons.md#directions). Essential for route planning and starting navigation.

    - [Search](../widgets/map-buttons.md#search). Opens the search tool for finding locations.

    - [Zoom in / out](../widgets/map-buttons.md#my-location-and-zoom). Adjusts the map's zoom level to show more or less detail.

2. The **three-dot menu** on the Default buttons screen contains actions such as:

    - *Reset to default*. Allows you to return the button settings to their original appearance.
    - *Copy from another profile*. Select from which profile from the offered list you want to copy button settings.

3. **The default button appearance** (*Android only*) offers a variety of customization options for these type of buttons. To modify a button's appearance, tap the required button from the list and select the [Appearance](#button-appearance) option.


### Button Appearance

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

The *Button appearance* feature enables you to fully customize the look of buttons on your map interface. These customization options are available for both *Quick Action (Custom buttons)* and *Default buttons*, providing comprehensive control over the map interface's appearance and allowing precise adjustments to button design.

***Customization options***:

- **Icon**. Select from a list of icons that represent actions you’ve already added, making it easy to identify functions at a glance.
- **Corner radius**. Adjust this setting to change the shape of the button, ranging from sharp, square corners to smooth, rounded edges.
- **Size**. Choose the button size that best fits your screen and stands out as needed. For *Default buttons*, sizes are preset and cannot be adjusted.
- **Background opacity**. Control the visibility of the button’s background. You can set it to be fully visible or partially transparent, or display only the frame shadow and icon.


## Other

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Other*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distance by tap](../widgets/radius-ruler.md#distance-by-tap-tool). Gives the ability to measure the distance from your position to the selected point.
- [Speedometer](../widgets/info-widgets.md#speedometer). Shows the current speed based on GPS data and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed). The displayed data also depends on OsmAnd's [Speed Limit Tolerance](../navigation/guidance/voice-navigation.md#speed-limit) setting.


### Display Position (Location position on screen)

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png)

</TabItem>

</Tabs>

> *Location position on screen* is the name of this setting in the iOS version of OsmAnd.  

Allows you to set the placement of the cursor to *[My location](../map/interact-with-map.md#my-location-and-zoom)* on the OsmAnd map. There are three options available:  

- **<Translate android="true" ids="position_on_map_center"/>**. The cursor is always positioned in the center of the screen.
- **<Translate android="true" ids="position_on_map_bottom"/>**. *My location* is placed slightly below the center of the screen. This mode allows you to see more map information ahead of your movement, which is useful during navigation.
- **<Translate android="true" ids="shared_string_automatic"/>**. Places *My location* depending on *[Map orientation](../map/interact-with-map.md#map-orientation-modes)* (*Bottom* - for movement direction, *Center* - for all others).


## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *Android* *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *iOS* *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Any panel*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Access to additional actions in the Configure screen are:

- *Android*. Located in the Configure screen at the bottom of the screen in the *Actions* section: *Menu → Configure screen → Actions*.
- *Android / iOS*. Located on the screens of each Panel in the *three-dot menu* in the upper right corner of the screen.

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

- For **Android** devices, you can change profiles at the top of the Configure Screen home screen using the available profile icons.  
- If you are using an **iOS** device, tap the profile icon in the top corner of the Configure Screen home screen and select the required profile from the list to activate it.  

**Take note**. The *Switch profile option* does not display all existing profiles, but only those that have been *switched on* in the Settings menu.


## Related Articles

- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *This article was last updated in April 2025*
