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


## Overview {#overview}

The **Configure screen** menu in OsmAnd allows you to customize the map interface by adding and arranging widgets, buttons, and quick actions across multiple panels.

You can:

- Add [informational](../widgets/info-widgets.md), [navigational](../widgets/nav-widgets.md), and [marker-related](../widgets/markers.md) widgets.
- Add or edit [Quick Actions](../widgets/quick-action.md), [Custom buttons](../widgets/quick-action.md#custom-buttons) and [Default buttons](../widgets/map-buttons.md).
- Organize widgets in panels (top, bottom, left, right, center).
- Create multiple **pages** within side panels, choose size of widgets.
- Choose row height and toggle widget icons.

All widgets are [profile-dependent](../personal/profiles.md) — each profile has its own layout, order, visibility, and settings.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  

</TabItem>

</Tabs>


## Widget Panels {#widget-panels}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config,shared_string_widgets"/>*  

![Configure screen](@site/static/img/widgets/configure_screen_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you to organize the map interface using customizable widget panels.  
You can add, reorder, group, and remove widgets in the following panels:

- **Top panel**
- **Bottom panel**
- **Left panel**
- **Right panel**

Each panel supports different layout behaviors:

- **Top and Bottom panels** display widgets in rows. You can place one or two widgets per row and add multiple rows if needed.
- **Left and Right panels** support multiple pages. You can group widgets into separate pages and switch between them.


### Widgets Catalog {#widgets-catalog}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_panels_ios.png)

</TabItem>

</Tabs>

***Navigational widgets:***  

- [Bearing](../widgets/nav-widgets.md#bearing).  
    This set shows the absolute or relative bearing to a target in angular units.  
    3 widgets are included: *Relative bearing*, *Magnetic bearing*, *True bearing*.

- [Elevation profile](../widgets/nav-widgets#elevation-widget) (*Top/Bottom only*, *Android only*).  
    Displays route elevation and slope.

- [Lanes](../widgets/nav-widgets#lanes) (*Top/Bottom only*).  
    Visual lane guidance.

- [Map markers bar](../widgets/markers.md#configure-marker-widgets-android) (*Top/Bottom only*).  
    Shows distance/direction to saved markers.  
    Configurable for 1 or 2 markers.

- [Navigation point](../widgets/nav-widgets.md#navigation-points).  
    The set shows the remaining distance to a destination, intermediate point, arrival time to an intermediate point, or travel time for a calculated route.  
    4 widgets are included: [Distance to destination](../widgets/nav-widgets.md#distance-to-destination), [Distance to intermediate](../widgets/nav-widgets.md#distance-to-intermediate), [Time to intermediate](../widgets/nav-widgets.md#time-to-intermediate), [Time to destination](../widgets/nav-widgets.md#time-to-destination).

- [Route maneuvers](../widgets/nav-widgets.md#next-turn) (*Left/Right panel only*).  
    This set is activated during navigation and shows the distance and arrow to the next maneuver.  
    3 widgets are included: *Next turn*, *Next turn (small)*, *Second next turn*.

- [Speed limit](../widgets/nav-widgets.md#speed-limit).  
    Display the current speed limit for the road.

- [Speedometer](../widgets/info-widgets.md#speedometer).  
    Shows the current speed based on GPS data and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed).

- [Street Name](../widgets/nav-widgets#street-name) (*Top/Bottom only*).  
    Displays the current or upcoming street.

<br/>

***Informational widgets:***

- [Altitude](../widgets/info-widgets.md#altitude-widgets).  
    The set displays the altitude above sea level for the current location or for the current map center.  
    2 widgets are included: *Altitude: current location*, *Elevation: map center*.

- [Average speed](../widgets/info-widgets.md#average-speed-widget).  
    Shows the average speed of the current trip.

- [Battery level](../widgets/info-widgets.md#battery-level).  
    Displays the device battery level.

- [Coordinates widgets](../widgets/info-widgets#coordinates-widget) (*Top/Bottom only*).  
    This set displays the geographic coordinates of the current geolocation.  
    2 widgets are included: *Coordinates: map center*, *Coordinates: current location*.

- [Current Speed](../widgets/info-widgets.md#speed).  
    Displays speed from the GPS sensor.

- [Current time](../widgets/info-widgets.md#current-time).  
    Displays the current system time.

- [Glide ratio](../widgets/info-widgets.md#glide-ratio).  
    The widgets show the glide ratio to the target and the average glide ratio for the current flight.  
    2 widgets are included: *Glide ratio to target*, *Average glide ratio*.

- [GPS info](../widgets/info-widgets.md#gps-info) (*Android only*).  
    Shows the number of detected satellites.

- [Map markers](../widgets/markers.md).  
    The set shows the distance or estimated time of arrival (ETA) for the first two markers in [the list](https://osmand.net/docs/user/personal/markers#itinerary-list).  
    2 widgets are included: *First marker*, *Second marker*.

- [Radius ruler](../widgets/info-widgets.md#radius-ruler).  
    Shows the distance between your location and a point on the map, circled by the [Radius ruler tool](../widgets/radius-ruler.md).

- [Sunrise, sunset](../widgets/info-widgets.md#sunset-and-sunrise).  
    Shows the time of the next sunrise or sunset for the center of the map.  
    2 widgets are included: *Sunrise*, *Sunset*.

<br/>

***Plugin-Based widgets:***  

- [Audio/video notes](../widgets/info-widgets.md#audiovideo-notes-widget).  
    Quick access to capture media.  
    4 widgets are included: *On request*, *Record audio*, *Record video*, *Take a photo*.

- [Developer widgets](../widgets/info-widgets.md#developer-widgets).  
    Displays optional information.  
    5 widgets are included: *Map rendering FPS*, *Camera tilt*, *Camera elevation*, *Zoom level*, *Distance from camera to target*, *Available RAM*.  

- [External Sensors widgets](../widgets/info-widgets.md#external-sensors-widgets).  
    The set helps track data from BLE/ANT+ sensors in real time.  
    6 widgets are included: *Heart Rate*, *Bicycle Power* (*Android only*), *Bicycle Cadence*, *Bicycle Speed*, *Bicycle Distance*, *Temperature*.

- [Mapillary](../widgets/info-widgets.md#mapillary-widget).  
    Opens the Mapillary app for street-level imagery.

- [OsmAnd Tracker status](../widgets/info-widgets.md#tracker-widget).  
    Quick access to the [OsmAnd Tracker application](https://play.google.com/store/apps/details?id=net.osmand.telegram).

- [Parking widget](../widgets/info-widgets.md#parking-widget).  
    Distance from the center of the screen to the saved parking location.

- [Trip recording](../widgets/info-widgets.md#trip-recording-widgets).  
    Starts and stops track recording, and displays track recording data.  
    4 widgets are included: *Distance*, *Duration*, *Uphill*, *Downhill*.

- [Whether](../widgets/info-widgets.md#weather-widgets).  
    Displays detailed weather information.  
    5 widgets are included: *Temperature*, *Air Pressure*, *Wind*, *Cloud*, *Precipitation*.

:::note Panel-dependent widgets

- Only available in the **Top and Bottom panels** and must be placed in separate rows: *Coordinates widgets, Elevation Profile widget, Lanes widget, Map markers bar, Street Name widget*.
- Only available in the **Left and Right panels**: *Route maneuvers*.

:::


### Rows {#rows}


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_1_ios.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_rows_ios.png) 

</TabItem>

</Tabs>



The **Row mode** feature allows you to add as many rows as needed to the top and bottom panels. You can display multiple widgets per row, enhancing the amount of visible information.

***How to configure rows:***

- **Add widgets**: Tap the *Plus* button (Android) or *Add widget* (iOS), then select from the list of available widgets.
- **Reorder widgets**: Tap the *Pencil* button (Android) or *Edit* (iOS) to rearrange the widgets.
- **Add rows**: Tap the *Add row* button to create new rows for your widgets.
- **Move widgets**: Drag widgets between different rows.
- **Access widget settings**: Tap the *"i"* icon (Android) or the *">"* arrow (iOS) to open widget settings.
- **Save changes**: Tap *Apply* (Android) or *Done* (iOS) to save the layout.


#### Widget Types and Restrictions {#widget-types-and-restrictions}

The mode allows you to add **more than one widget in a single row** on the top and bottom panels to display as much information as needed.  

- **Complex widgets**. Only one complex widget can be added per row. These include:
    - [Map markers bar (*Android only*)](../widgets/markers.md#configure-marker-widgets-android)
    - [Street name](../widgets/nav-widgets#street-name)
    - [Coordinates widgets](../widgets/info-widgets#coordinates-widget)
    - [Lanes](../widgets/nav-widgets#lanes)
    - [Elevation profile (*Android only*)](../widgets/nav-widgets#elevation-widget)
    - [Route maneuvers](../widgets/nav-widgets.md#next-turn)

- **Simple widgets**. Multiple simple widgets can be added to a single row. These widgets could display *Name*, *Units of measurement*, *Value*, and *Icon*.


### Pages {#pages}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate android="true" ids="map_widget_left"/> → Edit → Add page*  

![Widget page](@site/static/img/widgets/widget_page_1_andr.png) ![Widget page](@site/static/img/widgets/widget_page_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,map_widget_right"/> / <Translate ios="true" ids="map_widget_left"/> → Edit → Add page*

![Widget page](@site/static/img/widgets/widget_page_1_ios.png) ![Widget page](@site/static/img/widgets/widget_page_2_ios.png)  

</TabItem>

</Tabs>

Widgets in the right and left panels can be grouped into **Pages**. The **Pages mode** feature allows you to add 5 pages to the left and right panels.

***How to configure rows:***

- **Add a Page**. Navigate to the Left/Right Panel settings and tap *Edit → Add Page*.
- **Organize widgets by Page**. This feature is helpful when different sets of widgets are needed for different tasks, such as navigating versus browsing the map.
- Pages allow you to create **widget sets** for specific scenarios, improving workflow and reducing clutter.


## Widget Settings {#widget-settings}

![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_1_andr.png)   ![Configure screen menu](@site/static/img/widgets/configure_screen_widgets_settings_2_andr.png)

1. **Widget size options** (*for all panels*):  
    You can customize the size of **Simple widgets** in the **Top, Bottom, Left, and Right panels**:

    - **Small**. Ideal for compact displays, saving more screen space for maps.
    - **Medium** (*default widget size*). Balances visibility and space usage.
    - **Large**. Provides larger, more visible widget information.  

2. **Hiding widget icons** (*for top and bottom panels*):

    - Improves clarity and maximizes the space for important data.
    - Especially useful when displaying many widgets on the same **row**.

3. **Individual size for different rows** (*for all panels*):

    - Widgets can be individually sized by adjusting the row and column size.
    - **NOTE:** Changing the size of one widget in a row/column will resize all widgets in that row/column.

4. **To change the widget size and icon visibility:**

    - Select a widget that you have already added to the panel.  
    - Tap the *Settings* icon on the right side of the widget field.
    - Tap the *Size* setting and select one of the available sizes.
    - Switch to the Off position, in the *Show icon* field.


## Panels Customization {#panels-customization}

### Widget Context Menu {#widget-context-menu}

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

### Copies of Widgets {#copies-of-widgets}

*OsmAnd menu → Configure screen → Widgets → Panel*  

![Widget dublicate](@site/static/img/widgets/widget_dublicate.png)  

OsmAnd allows you to add multiple instances of the same widget to different panels or pages. This feature is particularly useful when you need consistent information across different views or profiles.  

***How to duplicate widgets:***

- **Add the widget**. Navigate to: *OsmAnd menu → Configure screen → Widgets → Panel →* **Add** *widget*.
- **Duplicate using the context menu**. Tap the widget and select **Duplicate** from the list of actions.
- **Alternative method**. Select the same widget from the *Available widgets* list and tap *Add*.


### Move or Delete {#move-or-delete}

*OsmAnd menu → Configure screen → Widgets → Panel*  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Configure screen menu](@site/static/img/widgets/configure_screen_remove_ios.png) 

</TabItem>

</Tabs>



You can rearrange or remove widgets from the application screen using the **Edit** mode.  

***How to move a widget:***

- Go to: *OsmAnd Menu → Configure Screen → Widgets → Panel → Edit button*.
- Long tap the **icon on the right** of the widget.
- Drag it to the required position in the widget list.

***How to delete a widget:***  

- Follow the same steps as above.
- Tap the **minus icon** to the left of the widget name.
- Confirm the deletion when prompted.


## Buttons {#buttons}

### Custom Buttons {#custom-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_2_ios.png)

</TabItem>

</Tabs>

**Quick Action (Custom buttons)** allows you to add a list of single actions from all available [Quick actions](../widgets/quick-action.md#custom-buttons). These actions can be assigned to one or more widget buttons on the map screen. Custom buttons provide quick access to frequently used actions.

### Default Buttons {#default-buttons}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

![Widget page](@site/static/img/widgets/conf_screen_buttons_3_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance,shared_string_buttons"/>*

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


### Button Appearance {#button-appearance}

<InfoAndroidOnly/>

![Button Appearance](@site/static/img/widgets/button_appearance_settings_andr.png)

The *Button appearance* feature enables you to fully customize the look of buttons on your map interface. These customization options are available for both *Quick Action (Custom buttons)* and *Default buttons*, providing comprehensive control over the map interface's appearance and allowing precise adjustments to button design.

***Customization options***:

- **Icon**. Select from a list of icons that represent actions you’ve already added, making it easy to identify functions at a glance.
- **Corner radius**. Adjust this setting to change the shape of the button, ranging from sharp, square corners to smooth, rounded edges.
- **Size**. Choose the button size that best fits your screen and stands out as needed. For *Default buttons*, sizes are preset and cannot be adjusted.
- **Background opacity**. Control the visibility of the button’s background. You can set it to be fully visible or partially transparent, or display only the frame shadow and icon.


## Other {#other}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*

![Widget page](@site/static/img/widgets/conf_screen_other_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/>* *→ Other*

![Widget page](@site/static/img/widgets/conf_screen_other_ios.png)

</TabItem>

</Tabs>

- [<Translate android="true" ids="display_position"/> / <Translate ios="true" ids="position_on_map"/>](#display-position-location-position-on-screen). [⬇](#display-position-location-position-on-screen)
- [Distance by tap](../widgets/radius-ruler.md#distance-by-tap). Gives the ability to measure the distance from your position to the selected point.
- [Speedometer](../widgets/info-widgets.md#speedometer). Shows the current speed based on GPS data and limited speed based on [OpenStreetMap data](https://wiki.openstreetmap.org/wiki/Key:maxspeed). The displayed data also depends on OsmAnd's [Speed Limit Tolerance](../navigation/guidance/voice-navigation.md#speed-limit) setting.


### Display Position (Location position on screen) {#display-position-location-position-on-screen}

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


## Actions {#actions}

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

Go to: *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_actions"/>*  

![Widget page](@site/static/img/widgets/widget_actions_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate ios="true" ids="shared_string_menu,layer_map_appearance"/> → Any panel*

![Widget page](@site/static/img/widgets/widget_actions_ios.png)  

</TabItem>

</Tabs>

Access to additional actions in the Configure screen are:

- *Android*. Located in the Configure screen at the bottom of the screen in the *Actions* section: *Menu → Configure screen → Actions*.
- *Android / iOS*. Located on the screens of each Panel in the *three-dot menu* in the upper right corner of the screen.

Available actions:

- **Reset to default**. This feature allows you to reset all settings to default values if you want to start over, or use only the preset ones when starting OsmAnd.
- **Copy from another profile**. This feature allows you to quickly import settings from another profile, select the required ones from the list, and copy.


## Switch Profile {#switch-profile}

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


## Related Articles {#related-articles}

- [Map buttons](./map-buttons.md)
- [Informational widgets](./info-widgets.md)
- [Navigational widgets](./nav-widgets.md)
- [Radius-ruler and Ruler](./radius-ruler.md)
- [Marker widgets](./markers.md)
- [Quick Action](./quick-action.md)

> *Last updated: May 2025*
