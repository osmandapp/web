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

The following profiles are available by default: *Browse map, Driving, Cycling, Walking, Truck, Motorcycle, Moped, Train, Public transport, Boat, Aircraft, Skiing, Horseback riding*. Each profile is available for full configuration. Of course, you can create your own profile with full customization.  
Please note that Ski and Nautical profiles will only be available after Menu → Plugins are enabled.

:::note
**Truck, Motorcycle, Moped, Train, Aircraft, Boat and Horseback riding** profiles are switched off by default. In order to use these profiles, you need to activate them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.  
:::


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Browse map or any other profile)

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Profile configuration

This section contains all settings related to appearance, navigation options, map display, settings menu and profile screen.

:::note
All settings affect only the selected application profile.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

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

You need to have an OsmAnd Cloud account to use the Free Settings Backup. If you have an account in *OsmAnd Pro* or an active account in OsmAnd Cloud, you will not see the promotion banner.  


## General settings

This section contains settings of the cursor on the map and map view, settings of units & formats of map and profile data, settings of external input devices, and other sensors.

### Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profile_sett_appearance_1_ios.png)

</TabItem>

</Tabs>

In this section of the General settings menu, you can set parameters for the cursor on the map and map view for the chosen profile.  

- **<Translate android="true" ids="choose_osmand_theme"/>**. Allows you to set a day and night theme for the app, which can be applied to one profile or to all at once. This option does not change the [map mode](../map/vector-maps.md#map-mode) settings.
  - *<Translate android="true" ids="dark_theme"/> theme*
  - *<Translate android="true" ids="light_theme"/> theme*
  - *<Translate android="true" ids="system_default_theme"/>*. Applies the system theme. By default and for all new users, the map style corresponds to the light or dark theme selected in your device's system settings.
- **<Translate android="true" ids="rotate_map_to"/>**. Allows you to choose [the map orientation mode](../map/interact-with-map.md#map-orientation-modes) for the selected profile.
  - *<Translate android="true" ids="rotate_map_north_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_manual_opt"/>* 

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android*). Opens the screen control menu, where you can select options for the device screen while navigating to save device battery consumption.
- **<Translate android="true" ids="map_screen_orientation"/>**. Sets and locks the screen position in the OsmAnd application. Not supported on iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>* 
  - *<Translate android="true" ids="map_orientation_landscape"/>* 
  - *<Translate android="true" ids="map_orientation_default"/>*  

  ![Profiles Apperance](@site/static/img/personal/profiles/profile_sett_appearance_orientation_andr.png) 


### Units & formats

In this section you can set parameters of units & formats for chosen application profile.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profile_gs_unitsformats_android.png)

| Parameter | Format | Note   |
|:------------|:---------------|:---------------|
|**<Translate android="true" ids="driving_region"/>**| <Translate android="true" ids="shared_string_automatic"/> | According to the device location |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_uk"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <Translate android="true" ids="left_side_navigation"/>, <Translate android="true" ids="si_km_m"/>  |
|**<Translate android="true" ids="unit_of_length"/>**| <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|**<Translate android="true" ids="coordinates_format"/>**| <Translate android="true" ids="dd_mm_mmmm_format"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Example: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> | Example: 2 215 227.87, 830 915.9 ([Swiss coordinate system](https://www.wikiwand.com/en/Swiss_coordinate_system))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> | Example: 4 215 227.87, 1 830 915.9 ([Swiss coordinate system](https://www.wikiwand.com/en/Swiss_coordinate_system)) |
|**<Translate android="true" ids="angular_measeurement"/>**| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|**<Translate android="true" ids="default_speed_system"/>**| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_gs_unitsformats_ios.png)

| Parameter | Format | Note |
|:------------|:---------------|:---------------|
|**<Translate ios="true" ids="driving_region"/>**| <Translate ios="true" ids="shared_string_automatic"/> | According to the device location |
|            | <Translate ios="true" ids="driving_region_europe_asia"/>   | <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>  |
|            | <Translate ios="true" ids="driving_region_us"/>   |  <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_mi_feet"/>  |
|            | <Translate ios="true" ids="driving_region_canada"/>   | <Translate ios="true" ids="right_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>   |
|            | <Translate ios="true" ids="driving_region_uk"/>   |  <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_mi_feet"/>   |
|            | <Translate ios="true" ids="driving_region_japan"/>   | <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>   |
|            | <Translate ios="true" ids="driving_region_australia"/>   |  <Translate ios="true" ids="left_side_navigation"/>, <Translate ios="true" ids="si_km_m"/>  |
|**<Translate ios="true" ids="unit_of_length"/>**| <Translate ios="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate ios="true" ids="si_mi_feet"/> | 0.62 ml / 3281 f |
|          | <Translate ios="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate ios="true" ids="si_mi_yard"/> | 0.62 ml / 1094 ya |
|          | <Translate ios="true" ids="si_nm"/> | 0.54 nml |
|**<Translate ios="true" ids="coords_format"/>**| <Translate ios="true" ids="navigate_point_format_D"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate ios="true" ids="navigate_point_format_DM"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate ios="true" ids="navigate_point_format_DMS"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate ios="true" ids="navigate_point_format_UTM"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate ios="true" ids="utm_description"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate ios="true" ids="navigate_point_format_OLC"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|**<Translate ios="true" ids="angular_units"/>**| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate ios="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|**<Translate ios="true" ids="default_speed_system"/>**| <Translate ios="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate ios="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate ios="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate ios="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate ios="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate ios="true" ids="si_nm_h"/> | 48.59 kn |

</TabItem>

</Tabs>


### Other

Additional settings for profile.You can switch buttons and input devices for OsmAnd, enable or disable animation for navigation mode, use or not the fullscreen mode, magnetic sensor, and Kalman filter. Not everything is available for iOS.    

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_gs_other_android.png)

- *<Translate android="true" ids="use_volume_buttons_as_zoom"/>* - allows to use or not volume buttons of a device as [zoom](../map/interact-with-map.md#my-location--zoom).
- *[<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings)* - allows to use or not [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *[<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings)* - allows to use or not [Magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *<Translate android="true" ids="tap_on_map_to_hide_interface"/>* - tapping an empty space on the map hides control buttons and widgets.
- *[<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#disable-all-animations)* - allows to switch on/off animation for navigation mode.
- *[<Translate android="true" ids="animate_my_location"/>](../navigation/guidance/map-during-navigation.md#animate-my-location-android-animate-own-position)* - <Translate android="true" ids="animate_my_location_desc"/> Note that the animation takes about 1 second, which creates a slight delay for the *[My location](../map/interact-with-map.md#my-location--zoom)* position to display on the map relative to your location.  
- *[<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-device-buttons)* - allow you to add other devices, such as <Translate ios="true" ids="sett_wunderlinq_ext_input"/>, <Translate ios="true" ids="sett_generic_ext_input"/>, or <Translate android="true" ids="sett_parrot_ext_input"/>, to control the OsmAnd program using the existing buttons.  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_gs_other_android.png)  

- *[<Translate ios="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-device-buttons)* - allow you to add other devices, such as <Translate ios="true" ids="sett_wunderlinq_ext_input"/> or <Translate ios="true" ids="sett_generic_ext_input"/>, to control the OsmAnd program using the existing buttons.  

</TabItem>

</Tabs>


## Navigation settings

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>* 

![Profiles Navigation Settings Android](@site/static/img/personal/profiles/profile_navigation_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Profiles Navigation Settings iOS](@site/static/img/personal/profiles/profile_navigation_settings_ios.png)

</TabItem>

</Tabs>

In the [Navigation section](../navigation/index.md), you can read all about the navigation settings in the OsmAnd app that you can use on your trips.

- [Routing Types](../navigation/routing/index.md)
- [Route parameters](../navigation/routing/online-routing.md)
- [Screen alerts](../navigation/guidance/navigation-settings.md#screen-alerts)
- [Voice prompts](../navigation/guidance/voice-navigation.md)
- [Vehicle parameters](../navigation/guidance/navigation-settings.md#vehicle-parameters)
- [Customise route line](../navigation/guidance/map-during-navigation.md#route-line-appearance)
- [Map during navigation](../navigation/guidance/map-during-navigation.md)
- [Animate location change](../navigation/guidance/navigation-settings.md#animate-own-position)  

:::info
There are no navigation settings in *Browse map* profile.  
:::


### Animate location change

This setting provides a smooth animation of the "My location" point moving on the map during navigation. Note that the animation takes about 1 second, which creates a slight delay for the "My location" position to display on the map relative to your location.
For Android, this item named [Animate own position](#other) is located in the "Other" section of the General Settings menu.


## Configure map

Here you can set parameters for [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) of chosen profile

[<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) menu is a central place where you could configure map display for your profile needs, i.e. highlight [Favorite points](../personal/favorites.md), [Navigation markers](../personal/markers.md) or special [Points of Interests](../map/point-layers-on-map.md#points-of-interest-poi) on the map; display specific routes or 3rd party GPX files; [overlay the map with relief information](../plugins/contour-lines.md), [satellite imagery or any other available raster map](../map/raster-maps.md); display [public transport information](../map/public-transport.md) and [change the map style](../map/vector-maps.md#default-map-styles).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  

Set parameters for [Configure map](../map/configure-map-menu.md) menu for chosen profile.

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

Set parameters for [Configure map](../map/configure-map-menu.md) menu for chosen profile.

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_settings_ios.png)

</TabItem>

</Tabs>


## Configure screen

Here you can set parameters for [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) of chosen profile.

[<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) is a menu that allows to configure what widgets will be displayed over the map. It allows you to enable and configure [Quick action](../widgets/quick-action.md), [Informational](../widgets/info-widgets.md) & [Navigational](../widgets/nav-widgets.md) widgets and other elements.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,layer_map_appearance"/>

Set parameters for [Configure screen](../widgets/configure-screen.md) menu for chosen profile.

![Profiles Configure screen Settings Android](@site/static/img/personal/profiles/profile_configure_screen_settings_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,layer_map_appearance"/>

Set parameters for [Configure screen](../widgets/configure-screen.md) menu for chosen profile.

![Profiles Configure screen Settings iOS](@site/static/img/personal/profiles/profile_configure_screen_settings_ios.png)

</TabItem>

</Tabs>


## Profile appearance

You can choose the color of the profile elements, its icon and name, also assign icons on the map for movement and without.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

<Translate android="true" ids="android_button_seq"/> <Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate android="true" ids="profile_name_hint"/>"| entering a profile name |     |
| "<Translate android="true" ids="profile_appearance"/>"| changing color and label for chosen profile: |     |
|       | "<Translate android="true" ids="select_color"/>" |  choosing color for a profile icon and menu   |
|       | "<Translate android="true" ids="select_icon_profile_dialog_title"/>" | choosing label for a profile icon    |
|       | ![Profile Appearance Android](@site/static/img/personal/profiles/profile_appearance_android.png) |   |
| "<Translate android="true" ids="appearance_on_the_map"/>"| changing position icons: |     |
|       | "<Translate android="true" ids="select_map_icon"/>" |  choosing label for a profile icon without moving   |
|       | ![Profile Appearance at rest Android](@site/static/img/personal/profiles/profile_appearance_atrest_android.png) |   |
|       | "<Translate android="true" ids="select_navigation_icon"/>" |  choosing label for a profile icon while moving   |
|       | ![Profile Appearance on the map Android](@site/static/img/personal/profiles/profile_appearance_moving_android.png) |   |

</TabItem>

<TabItem value="ios" label="iOS">

<Translate ios="true" ids="ios_button_seq"/> <Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>

| Parameter | Description | Note |
|:------------|:---------------|:---------------|
| "<Translate ios="true" ids="fav_name"/>"| entering a profile name |     |
| "<Translate ios="true" ids="shared_string_appearance"/>"| changing color and label for chosen profile: |     |
|       | "<Translate ios="true" ids="select_color"/>" |  choosing color for a profile icon and menu   |
|       | "<Translate ios="true" ids="select_icon"/>" | choosing label for a profile icon    |
|       | ![Profile Appearance iOS](@site/static/img/personal/profiles/profile_appearance_ios.png) |   |
| "<Translate ios="true" ids="appearance_on_map"/>"| changing position icons: |     |
|       | "<Translate ios="true" ids="position_icon_at_rest"/>" |  choosing label for a profile icon without moving   |
|       | "<Translate ios="true" ids="position_icon_while_moving"/>" |  choosing label for a profile icon while moving    |
|       | ![Profile Appearance on the map iOS](@site/static/img/personal/profiles/profile_appearance_onthemap_ios.png) |   |

</TabItem>

</Tabs>


## UI Customization

Customize the quantity of items in ["<Translate android="true" ids="shared_string_drawer"/>"](../start-with/main-menu.md#main-menu-drawer), ["<Translate android="true" ids="configure_map"/>"](../map/configure-map-menu.md) and ["<Translate android="true" ids="context_menu_actions"/>"](../map/map-context-menu.md).  

<InfoAndroidOnly />

:::note
Turn off unused [plugins](../plugins) for hide all their controls.
:::  

*<Translate android="true" ids="shared_string_menu,configure_profile,ui_customization"/>*  

Under each menu there is the info about items quantity / active items.

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

#### Drawer

In this part of the menu you reorder or hide items from the [Drawer](../start-with/main-menu.md#main-menu-drawer).

| Actions:  Note |
|:---------------|
| "Minus": These items are hidden from the menu, but the represented options or plugins will continue to work.  |
| "Moving": These items are moved to other positions in the menu.  |
| ![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)|
| "Reset": These items are reset from the "Hidden" part of the menu to the visible. |
| ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)|
| "<Translate android="true" ids="reset_to_default"/>": resetting the "Drawer" menu to default. |
| "<Translate android="true" ids="copy_from_other_profile"/>": coping the "Drawer" menu from another profile.  |
| ![Profile Copy Android](@site/static/img/personal/profiles/profile_drawer_reset_copy_android.png)|  

#### Configure map

In this part of the menu you reorder or hide items from the [Configure map](../map/configure-map-menu.md) menu.

| Actions: Note |
|:---------------|
| "Minus": These items are hidden from the menu, but the represented options or plugins will continue to work.|
| "Moving": These items are moved to other positions in the menu.|
| ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_moving_android.png)|
| "Reset": These items are reset from the "Hidden" part of the menu to the visible.|
| ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_configure_reset_item_android.png)|
| "<Translate android="true" ids="reset_to_default"/>": resetting the "Configure map" menu to default.|
| "<Translate android="true" ids="copy_from_other_profile"/>": coping the "Configure map" menu from another profile.|
| ![Profile Configure map menu Copy Android](@site/static/img/personal/profiles/profile_configure_reset_copy_android.png)|  

#### Context menu actions

In this part of the menu you reorder or hide items from the [Context menu actions](../map/map-context-menu.md) menu.

| Actions: Note |
|:---------------|
| "Minus": These items are hidden from the menu, but the represented options or plugins will continue to work.  |
| "Moving": These items are moved to other positions in the menu.|
| ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_context_moving_android.png)|
| "Reset": These items are reset from the "Hidden" part of the menu to the visible. |
| ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_reset_item_android.png)|
| "<Translate android="true" ids="reset_to_default"/>": resetting the "Context menu actions" menu to default. |
| "<Translate android="true" ids="copy_from_other_profile"/>": coping the "Context menu actions" menu from another profile.  |
| ![Profile Configure map menu Copy Android](@site/static/img/personal/profiles/profile_context_reset_copy_android.png)|  


## Plugin settings

:::caution
To access the plugin's settings, you must first [enable the plugin](../plugins/index.md#enable--disable) in the *Plugin section of the Main menu*.
:::

Plugins unlock additional functions of the application, they can be either [paid or free](../plugins/index.md#purchase). Not all the plugins have their own [settings](../plugins/index.md#plugin-settings). You can configure plugins for each profile separately.  

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings"/>*

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_ios.png)

</TabItem>

</Tabs>

### Trip recording

This menu opens [the trip recording settings](../plugins/trip-recording.md#recording-settings) for the selected profile. Where you can choose any parameters for recording your trip.

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,record_plugin_name"/>*  

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,track_recording"/>*

</TabItem>

</Tabs>

### Audio / Video notes

<InfoAndroidOnly />  

This menu opens [audio-video plugin settings](../plugins/audio-video-notes.md#plugin-settings) for the selected profile. Where you can choose any parameters for your needed.  

*<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,audionotes_plugin_name"/>*  

### OpenStreetMap editing

This menu opens the [OpenStreetMap editing plugin settings](../plugins/osm-editing.md#settings) for the selected profile. Where you can input your data for starting OSM edit.

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


### Accesibility

<InfoAndroidOnly />  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,shared_string_accessibility"/>*

This menu opens [Accessibility plugin settings](../plugins/accessibility.md) for the selected profile. Where you can choose any parameters for your needed.  

### OsmAnd development

<InfoAndroidOnly />  

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,configure_profile,plugins_settings,development"/>*  

This menu opens [Development plugin settings](../plugins/development.md#plugin-settings). Here you can configure the OsmAnd app for testing or try new features. These settings are intended for developers, and are not required for normal use of the application.  

:::note
Changing the settings of the OsmAnd development plugin affects all profiles.
:::

### Wikipedia

:::caution iOS ONLY
This feature is currently not available for the Android version of the OsmAnd app.
:::

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group,download_wikipedia_maps"/>*  

This menu opens *[Wikipedia plugin settings](../plugins/wikipedia.md#wikipedia-settings)*. You can choose in which language the articles will be shown to you, and decide whether to download images from Wikipedia or not.

## Actions

Actions with chosen profile:  

- *Export profile.*
- *Copy from another profile.*
- *Reset to default.*
- *Delete profile.*

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>
