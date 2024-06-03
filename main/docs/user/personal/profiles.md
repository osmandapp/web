---
sidebar_position: 6
title:  Profiles (Settings)
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

The following profiles are available by default: *Browse map, Driving, Cycling, Walking, Truck, Motorcycle, Moped, Train, Public transport, Boat, Aircraft,Skiing, Horseback riding*. Each profile is available for full configuration. OsmAnd also provides the possibility to create your own profile with full customization.  

There are profiles such as *Skiing* and *Boat*, the additional features of which are available only after enabling the corresponding plugins, *Menu → Plugins → Ski map view* and *Nautical map view*.

:::note
**Truck, Motorcycle, Moped, Train, Aircraft, Boat and Horseback riding** profiles are switched off by default. In order to use these profiles, you need to activate them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  
:::


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Browse map or any other profile)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Profile configuration

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

This section contains all settings related to appearance, navigation options, map display, settings menu and profile screen.

:::note
All settings affect only the selected application profile.
:::

### Free Cloud backup

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd provides [the ability to backup](../personal/osmand-cloud.md#osmand-start) your application profile settings and save them in OsmAnd Cloud. Thus, your settings will be safely and conveniently saved for Android, iOS, or Web versions and restored in case of device failure or reinstallation of OsmAnd app. You can take advantage of this special plan by using [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

You must have an [OsmAnd Cloud](../personal/osmand-cloud.md#login) account to use the *Free Settings Backup*. If you have an account in *OsmAnd Pro* or an active account in *OsmAnd Cloud*, you will not see the promotion banner.  


## General settings

This section contains settings for the application theme and compass button, map and profile data units and formats, external input devices, and many other settings to create the optimal configuration for your chosen profile.

### Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profile_sett_appearance_2_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Allows you to set a day and night theme for the app, which can be applied to one profile or to all at once. This option does not change the [map mode](../map/vector-maps.md#map-mode) settings.
  - *<Translate android="true" ids="dark_theme"/> theme*
  - *<Translate android="true" ids="light_theme"/> theme*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applies the system theme. By default and for all new users, the map style corresponds to the light or dark theme selected in your device's system settings.
- **<Translate android="true" ids="rotate_map_to"/>**. Allows you to choose [the map orientation mode](../map/interact-with-map.md#map-orientation-modes) for the selected profile.
  - *<Translate android="true" ids="rotate_map_north_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_manual_opt"/>* 

- **<Translate android="true" ids="map_screen_orientation"/>**. Sets and locks the screen position in the OsmAnd application. Not supported on iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>* 
  - *<Translate android="true" ids="map_orientation_landscape"/>* 
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android*). Opens the screen control menu, where you can select options for the device screen while navigating to save device battery consumption.  


#### Location position on screen (iOS)

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profile_sett_appearance_location_pos_ios.png)  

Allows you to choose where to display your location on the screen.
  - *<Translate ios="true" ids="shared_string_automatic"/>*. Places *My location* depending on *[Map orientation](../map/interact-with-map.md#map-orientation-modes)* (*Bottom* for movement direction, *Center* - for all others).
  - *<Translate ios="true" ids="position_on_map_center"/>*. The cursor is always positioned in the center of the screen.  
  - *<Translate ios="true" ids="position_on_map_bottom"/>*. *My location* is placed slightly below the center of the screen. This mode allows you to see more map information ahead of your movement, which is very useful during navigation.  

**NOTE.** A similar option for Android called [*Display position*](../widgets/configure-screen.md#other) is located in *<Translate android="true" ids="shared_string_menu,layer_map_appearance,shared_string_other"/>*.


### Units & formats

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profile_gs_unitsformats_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

In this section you can set parameters of units and formats for chosen application profile.  

| Parameter | Format | Note   |
|:------------|:---------------|:---------------|
|*<Translate android="true" ids="driving_region"/>*| <Translate android="true" ids="shared_string_automatic"/> | According to the device location |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_uk"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|*<Translate android="true" ids="unit_of_length"/>*| <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|*<Translate android="true" ids="coordinates_format"/>*| <Translate android="true" ids="dd_mm_mmmm_format"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Example: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Android version only) | Example: 2 215 227.87, 830 915.9 ([Swiss coordinate system](https://www.wikiwand.com/en/Swiss_coordinate_system))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Android version only) | Example: 4 215 227.87, 1 830 915.9 ([Swiss coordinate system](https://www.wikiwand.com/en/Swiss_coordinate_system)) |
|*<Translate android="true" ids="angular_measeurement"/>* (Android) / *<Translate ios="true" ids="angular_units"/>* (iOS)| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|*<Translate android="true" ids="default_speed_system"/>* (Android) / *<Translate ios="true" ids="units_of_speed"/>* (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|**<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *For exact numbers*. Select how distance information is displayed in the navigation widgets, such as distance to a point, next turn, or lane. |
|          | <Translate android="true" ids="round_up"/> | *For better readability*, the numbers displayed in the navigation widgets (distance to a point, next turn, or lane) will be rounded down to have fewer digits. For examples: 3672 m *→* 3.6 km, 462 m *→* 400 m, 184 m *→* 150 m, 47 m *→* 40 m, 18 m *→* 15 m. |


### Other    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_gs_other_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_other_1_ios.png)  

</TabItem>

</Tabs>

The **Other** section provides additional profile settings. You can switch buttons and input devices for OsmAnd, enable or disable animation in navigation mode, use or not use the full-screen mode, magnetic sensor, and Kalman filter. Not everything is available for iOS.

- *<Translate android="true" ids="use_volume_buttons_as_zoom"/> (Android)* - allows to use or not volume buttons of a device as [zoom](../map/interact-with-map.md#my-location--zoom).
- *[<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-device-buttons) (Android / iOS)* - allow you to add other devices, such as <Translate ios="true" ids="sett_wunderlinq_ext_input"/>, <Translate ios="true" ids="sett_generic_ext_input"/>, or <Translate android="true" ids="sett_parrot_ext_input"/>, to control the OsmAnd program using the existing buttons.  
- *[<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (Android)* - allows to use or not [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *[<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (Android)* - allows to use or not [Magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *[<Translate android="true" ids="fix_north_up"/>](../map/interact-with-map.md#map-orientation-modes) (Android)* - allows you to hard lock the map position [*North is up*](../map/interact-with-map.md#map-orientation-modes) if you do not need to rotate the map with a gesture.
- *<Translate android="true" ids="tap_on_map_to_hide_interface"/> (Android)* - tapping an empty space on the map hides control buttons and widgets.
- *[<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (Android)* - allows to switch on/off animation for navigation mode.
- *[<Translate android="true" ids="animate_my_location"/>](../navigation/guidance/map-during-navigation.md#animate-my-location-android-animate-own-position) (Android)* - <Translate android="true" ids="animate_my_location_desc"/> Note that the animation takes about 1 second, which creates a slight delay for the *[My location](../map/interact-with-map.md#my-location--zoom)* position to display on the map relative to your location.  


## Navigation settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>* 

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_ios.png)

</TabItem>

</Tabs>

In the article [Navigation settings](../navigation/guidance/navigation-settings.md) you can find the relevant settings of the OsmAnd app that you can use in your journeys.

- [Navigation Types](../navigation/guidance/navigation-settings.md#navigation-type). Gives you the option to choose the type of navigation depending on how you are travelling and whether you have an internet connection.
- [Route parameters](../navigation/guidance/navigation-settings.md#route-parameters). These are settings that determine how the app will calculate a route to reach your destination.
- [Screen alerts](../navigation/guidance/navigation-settings.md#screen-alerts). This navigation setting allows you to enable the Alerts Widget and select which alerts you want to see on the app screen while navigating.
- [Voice prompts](../navigation/guidance/navigation-settings.md#voice-prompts). Audio instructions during navigation help you as a driver or pedestrian get to your destination while navigating a selected route. 
- [Vehicle parameters](../navigation/guidance/navigation-settings.md#vehicle-parameters). Allows you to select the correct parameter settings to help you avoid problems when navigating a route.
- [Customise route line](../navigation/guidance/navigation-settings.md#customize-route-line). With this setting you can choose the appearance of the route line that will be visible on the map during navigation.
- [Map during navigation](../navigation/guidance/navigation-settings.md#map-during-navigation). The map is used during navigation to determine your location, plan your route, and land orientation.
- [Animate own position](../navigation/guidance/navigation-settings.md#animate-own-position) (*iOS*). For *Android*, this item is located in the [Other](#other) section of the *General Settings* menu. This setting provides a smooth animation of the My Position point moving on the map during navigation. 

:::info
There are no navigation settings in *Browse map* profile.  
:::


## Configure map

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configure map*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

The [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) menu allows you to customize the map display settings for the selected profile, for example:
- Highlight [Favorite points](../personal/favorites.md), [Navigation markers](../personal/markers.md), or special [Points of Interests](../map/point-layers-on-map.md#points-of-interest-poi) on the map.
- Display specific routes or third-party GPX files.
- [Overlay terrain information](../plugins/contour-lines.md), satellite images, or any other available [raster maps](../map/raster-maps.md). 
- Display [public transport](../map/public-transport.md) information and [change the map style](../map/vector-maps.md#default-map-styles).


## Configure screen

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

- *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- *Menu → Settings → App Profile → Configure screen*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)   

</TabItem>

</Tabs> 

The [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) is a menu that allows you to configure the widgets for the selected profile to be displayed on the map. On this screen, you can enable and configure [Informational](../widgets/info-widgets.md) and [Navigational](../widgets/nav-widgets.md) widgets, as well as other items.


## Profile appearance

You can choose the color of the profile elements, its icon and name, also assign icons on the map for movement and without.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

</TabItem>

</Tabs>

| Description | Android screens | iOS screens |
|:-----|:---------------|:---------------|
| **<Translate android="true" ids="profile_name_hint"/>**.<br/>You can change the name. |    |     |
| **<Translate android="true" ids="profile_appearance"/>**.<br/>You can change the color<br/>and label for the selected profile. |    |     |
| *<Translate android="true" ids="select_color"/>*.<br/>Allows you to select colors<br/>for the profile icon and menu. |  ![Profile Appearance](@site/static/img/personal/profiles/profile_appearance_color_andr.png)  | ![Profile Appearance](@site/static/img/personal/profiles/profile_appearance_color_ios.png)  |
| *<Translate android="true" ids="select_icon_profile_dialog_title"/>*.<br/>Allows you to select the icon<br/>that fits the best with the selected profile. | ![Profile Appearance](@site/static/img/personal/profiles/profile_appearance_icons_andr.png)  | ![Profile Appearance](@site/static/img/personal/profiles/profile_appearance_icons_ios.png)  |
| **<Translate android="true" ids="appearance_on_the_map"/>**.<br/>Allows you to select<br/>the appearance of the location icon<br/>according to your preferences. |    |     |
| *<Translate android="true" ids="select_map_icon"/>*.<br/>Select a location icon<br/>in a non-moving state. | ![Profile Appearance at rest Android](@site/static/img/personal/profiles/profile_appearance_at_rest_andr.png) | ![Profile Appearance iOS](@site/static/img/personal/profiles/profile_appearance_at_rest_ios.png)  |
| *<Translate android="true" ids="select_navigation_icon"/>*<br/>Selects the location icon<br/>in the state while moving. | ![Profile Appearance on the map Android](@site/static/img/personal/profiles/profile_appearance_moving_andr.png) | ![Profile Appearance iOS](@site/static/img/personal/profiles/profile_appearance_moving_ios.png) |


## UI Customization

<InfoAndroidOnly />

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization"/>*  

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

**NOTE:** To hide all controls of unused [plugins](../plugins/index.md), disable them.  

With the UI customization feature, you can adjust the number of items in actions such as [*<Translate android="true" ids="shared_string_drawer"/>*](../start-with/main-menu.md#customize-advanced-use-of-android), [*<Translate android="true" ids="configure_map"/>*](../map/configure-map-menu.md) and [*<Translate android="true" ids="context_menu_actions"/>*](../map/map-context-menu.md). Information about the number of added items out of all possible items can be found under the title of each feature. 


#### Drawer

- **Main visible items**. In the Customise UI section, you can reorder or hide items from the [Drawer](../start-with/main-menu.md#customize-advanced-use-of-android).
  - *Minus* button. When you tap, the list items are deleted from the main menu in the drawer and moved to the *Hidden* section. However, all options, settings, or plugins are not disabled.  
  - *Moving* button. Tap and hold the move icon to the right of the item name to change the position of the selected item in the list.  

      ![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  
- **Divider**. The list of items in the main menu can be separated by a divider to arrange the options in a convenient and logical order for you.  

    ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_divider_andr.png)  
- **Hidden**. These items are not displayed in the main menu, but all options, settings, or plugins from the list continue to work.  
  - *Restore* button. When you tap, the selected item will move to the visible items on the main menu.    

      ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)   
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the main menu in the drawer. All your changes are instantly undone.     
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can copy for this profile the position of elements created in another OsmAnd profile.  

    ![Profile Copy Android](@site/static/img/personal/profiles/profile_drawer_reset_copy_android.png)   


#### Configure map

- **Configure map menu**. Items visible in this section of the main menu.  

  ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png)
- **Show**. In this part of the Customise UI section you can reorder or hide items from the [Configure map](../map/configure-map-menu.md).  
  - *Minus* button. When you tap, the list items are deleted from the Configure map menu and moved to the *Hidden* section. However, all settings are not disabled.  
  - *Moving* button. Tap and hold the move icon to the right of the item name to change the position of the selected item in the list.  

      ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)
- **Hidden**. These items are not displayed in the main menu, but all options, settings, or plugins from the list continue to work.  
  - *Restore* button. When tapped, the selected item will return to its original state.   

      ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_configure_map_hidden_andr.png)
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the Configure map menu. All your changes are instantly undone.     
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can copy for this profile the position of elements created in another OsmAnd profile.  

    ![Profile Copy Android](@site/static/img/personal/profiles/profile_configure_map_reset_copy_andr.png)   
 

#### Context menu actions

- **Map Context menu**. Items visible in the main context and additional actions menu.  

  ![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)
- **Show**. In this part of the Customise UI section you can reorder or hide items from the [Map Context menu](../map/map-context-menu.md).  
  - *Minus* button. When you tap, the list items are deleted from the main context or actions menu and moved to the *Hidden* section. However, all options or plugins are not disabled.  
  - *Moving* button. Tap and hold the move icon to the right of the item name to change the position of the selected item in the list.  

      ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_context_menu_show_andr.png)
- **Hidden**. These items are not displayed in the menus, but all options or plugins from the list continue to work.  
  - *Restore* button. When you tap, the selected item will move to the visible items on the menus.    

      ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the main menu in the drawer. All your changes are instantly undone.     
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can copy for this profile the position of elements created in another OsmAnd profile.  

    ![Profile Copy Android](@site/static/img/personal/profiles/profile_context_menu_reset_copy_andr.png)   


## Plugin settings

:::caution
To access the plugin's settings, you must first [**enable the plugin**](../plugins/index.md#enable--disable) in the *Plugin section of the Main menu*.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Plugins unlock additional features of the application and can be either [paid or free](../plugins/index.md#purchase). Some plugins have their own [settings](../plugins/index.md#plugin-settings), others do not. OsmAnd gives you the possibility to configure plugins for each profile separately.


### Trip recording

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,record_plugin_name"/>*  

![Configuring Trip recording in Android](@site/static/img/plugins/trip-recording/recording_sett_1_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,track_recording"/>*  

![Configuring Trip recording in iOS](@site/static/img/plugins/trip-recording/recording_sett_1_ios.png) 

</TabItem>

</Tabs>

This item opens the [trip recording settings](../plugins/trip-recording.md#recording-settings) for the selected profile, where you can choose any parameters for recording your journeys.


### Weather

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,shared_string_weather"/>*  

![Configuring Trip recording in Android](@site/static/img/personal/profiles/weather_settings_1_andr.png) 

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,shared_string_weather"/>*  

![Weather Settings iOS](@site/static/img/plugins/weather/weather_settings_ios.png)

</TabItem>

</Tabs>

Interactive [Weather](../plugins/weather.md#weather-settings) map layers allow you to monitor the temperature, air pressure, cloud coverage, wind speed and precipitation in your city or any other location on a global map.


### Audio / Video notes

<InfoAndroidOnly />  

*<Translate android="true" ids="shared_string_menu,plugins_menu_group,audionotes_plugin_name,shared_string_settings"/>*  

![Audio video plugin settings Photo Android](@site/static/img/plugins/audio-video-notes/settings_av_plugin.png)  

This item opens [audio-video plugin settings](../plugins/audio-video-notes.md#plugin-settings) for the selected profile. The *Audio/Video notes* plugin extends the functionality of OsmAnd by allowing you to create your own notes in various formats such as photo, video or audio and associate them with geographical location or current location.  


### OpenStreetMap editing

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,osm_editing_plugin_name"/>*  

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_android-2.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,osm_editing_plugin_name"/>*  

![OpenStretMap editing plugin Settings Android](@site/static/img/plugins/osm-editing/osm_plugin_settings_ios-00.png)

</TabItem>

</Tabs>

This item opens the [OpenStreetMap editing plugin settings](../plugins/osm-editing.md#settings) for the selected profile. With OsmAnd and the OSM editing plugin, you can easily contribute your own information to OpenStreetMap.org, such as to create or modify POIs, add or comment notes, and upload recorded GPX tracks.  


### External Sensors

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,external_sensors_plugin_name"/>*

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,external_sensors_plugin_name"/>*  

![External sensors plugin](@site/static/img/plugins/sensors/external_sensors_sett_sensors_ios.png)  

</TabItem>

</Tabs>

When you tap an item in the *Plugin Settings* section, the [settings of external sensors](../plugins/external-sensors.md#sensors-settings) for the selected profile are opened. The External sensors plugin allows you to read and record data from wireless external sensors and display it using widgets in the OsmAnd application. 


### Accesibility

<InfoAndroidOnly />  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,shared_string_accessibility"/>*  

![Accessibility](@site/static/img/plugins/Accessibility/access_.png)  

This item opens [Accessibility plugin settings](../plugins/accessibility.md#plugin-settings) for the selected profile. The Accessibility plugin settings allow you to customize the application according to your needs. All settings relate to the navigation process and are set individually for each profile.


### OsmAnd development

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,debugging_and_development"/>*  

![Development Settings Android](@site/static/img/plugins/development/development_android_settings_1.png) ![Development Settings 2 Android](@site/static/img/plugins/development/development_android_settings_2.png)

</TabItem>

<TabItem value="ios" label="iOS">  

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,debugging_and_development"/>* 

![Development Settings iOS](@site/static/img/plugins/development/development_ios_1.png)

</TabItem>

</Tabs>  

This menu opens the [Development plugin settings](../plugins/development.md#plugin-settings), where you can configure the OsmAnd application for testing or try out new features. These settings are intended for developers and are not required for normal use of the application.

:::note
Changing the settings of the OsmAnd development plugin affects all profiles.
:::


### Wikipedia

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  

![Setting a preferred language on Android](@site/static/img/plugins/wikipedia/and_select_languages_wiki1.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  

![Setting a preferred language on iOS](@site/static/img/map/map-wikipedia-language-2-ios.png)

</TabItem>

</Tabs>

This menu opens *[Wikipedia plugin settings](../plugins/wikipedia.md#wikipedia-settings)*. You can choose in which language the articles will be shown to you, and decide whether to download images from Wikipedia or not. Having Wikipedia on your trip helps you learn more about the places you visit. It is available offline and shows Wikipedia articles in relation to the points of interest right on the map.


## Actions

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Actions with selected profile:  

- [Export profile](https://osmand.net/docs/user/personal/import-export#export). You can export all settings of the selected profile in OSF format.
- **Copy from another profile.** Copies all settings from another existing profile in your OsmAnd application.
- **Reset to default.** Returns all settings to the initial state.
- **Delete profile.**
    - This action is available only for *Android* and only for a *Custom profile*. 
    - Default profiles cannot be deleted.
    - To add a profile go to *Menu → Settings → App profiles → + New profile*.
