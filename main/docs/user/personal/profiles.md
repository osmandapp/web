---
sidebar_position: 4
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

## Overview

OsmAnd offers a variety of default profiles tailored for different activities, including driving, cycling, walking, and more specialized activities like skiing and boating. These profiles are designed to enhance your navigation experience according to the activity you are engaged in. Each profile includes configurable options, enabling you to adjust settings and incorporate additional plugins to match your preferences.

- Certain profiles, such as *Skiing* and *Boat*, have **additional features** that become available only when the corresponding plugins are enabled.

     - Plugins can be activated by navigating to *Menu → Plugins → Ski map view* or *Nautical map view*.
     - Enabling the plugins provides the profiles with the essential features to meet the specific requirements of these activities.

- It's important to note that some profiles, such as **Truck**, **Motorcycle**, **Moped**, **Train**, **Aircraft**, **Boat**, and **Horseback riding**, are not activated by default.

     - To access and use these profiles, you need to manually enable them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - This method helps maintain an organized and relevant list of profiles by activating only those required for specific activities.

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


## Profile Configuration

:::caution Applying settings to a specific profile only
All settings apply exclusively to the currently selected application profile.
:::

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

This section contains all settings related to appearance, navigation options, map display, settings menu, and profile screen.


### Free Cloud Backup

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

OsmAnd allows you [to back up](../personal/osmand-cloud.md#osmand-start) your application profile settings to OsmAnd Cloud, ensuring that your configurations are securely stored and easily restored across Android, iOS, and Web versions. This backup feature protects your settings in case of device failure or app reinstallation. You can benefit from this special plan by using [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

You must have an [OsmAnd Cloud](../personal/osmand-cloud.md#login) account to use the *Free Settings Backup*. If you have an *OsmAnd Pro* subscription or an active *OsmAnd Cloud* account, the promotion banner will not be displayed.


## General Settings

This section contains settings for the application theme and compass button, map and profile data units and formats, external input devices, and many other settings to create the optimal configuration for your chosen profile.

### Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Allows you to set a day and night theme for the app, which can be applied to one profile or all at once. This option does not change the [map mode](../map/vector-maps.md#map-mode) settings.
  - *<Translate android="true" ids="dark_theme"/> theme*
  - *<Translate android="true" ids="light_theme"/> theme*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applies the system theme. By default and for all new users, the map style corresponds to the light or dark theme selected in your device's system settings.
- **<Translate android="true" ids="rotate_map_to"/>**. Allows you to choose [the map orientation mode](../map/interact-with-map.md#map-orientation-modes) for the selected profile.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Sets and locks the screen position in the OsmAnd application. This feature is not supported on iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android*). Opens the screen control menu, where you can select options for the device screen while navigating to save device battery consumption.  


### Units & Formats

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/profile_gs_unitsformats_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/profile_unitsformats_3_ios.png)

</TabItem>

</Tabs>

In the **Units and Formats** section, you can adjust measurement units and formats to align with your personal preferences and regional standards, ensuring all data is displayed most conveniently and familiarly.


<!--

<table>
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Format</th>
            <th>Note</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan=4 align="left">**<Translate android="true" ids="driving_region"/>**</td>
            <td rowspan=2 align="left"><Translate android="true" ids="shared_string_automatic"/></td>
            <td align="left">According to the device location.</td>
        </tr>
        <tr>
            <td rowspan=2 align="left"><Translate android="true" ids="driving_region_europe_asia"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_km_m"/></td>
        </tr>
        <tr>
            <td align="left"><Translate android="true" ids="driving_region_us"/></td>
            <td align="left"><Translate android="true" ids="right_side_navigation"/>, <Translate android="true" ids="si_mi_feet"/></td>
        </tr>
    </tbody>
</table>

-->

|  |  |  |
|:------------|:---------------|:---------------|
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | According to the device location. |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Example: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Android version only) | Example: 2 215 227.87, 830 915.9 ([Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Android version only) | Example: 4 215 227.87, 1 830 915.9 ([Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *For precise measurements*, choose how distance information is displayed in the navigation widgets, such as the distance to a point, the next turn, or a specific lane. |
|          | <Translate android="true" ids="round_up"/> | *For better readability*, the numbers displayed in the navigation widgets (distance to a point, next turn, or lane) will be rounded down to have fewer digits. <br/> For examples: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


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

The **Other** section offers additional profile settings, allowing you to customize buttons and input devices, enable or disable animation in navigation mode, and toggle features like full-screen mode, the magnetic sensor, and the Kalman filter. Note that some options may not be available on iOS.

- *[<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices)* (*Android* and *iOS*). Allow you to add other devices, such as <Translate ios="true" ids="sett_wunderlinq_ext_input"/>, <Translate ios="true" ids="sett_generic_ext_input"/>, or <Translate android="true" ids="sett_parrot_ext_input"/>, to control the OsmAnd program using the existing buttons.  

- *<Translate android="true" ids="use_volume_buttons_as_zoom"/> (Android)*. Allows to use or not volume buttons of a device as [zoom](../map/interact-with-map.md#my-location--zoom).
- *[<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (Android)*. Allows to use or not [Kalman filter](https://en.wikipedia.org/wiki/Kalman_filter) for smoothen rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *[<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (Android)*. Allows to use or not [Magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) for smoothening rotation of the map with a slower rotation animation though it introduces a small delay (< 1 second) till.
- *<Translate android="true" ids="tap_on_map_to_hide_interface"/> (Android)*. Tapping an empty space on the map hides the control buttons and widgets.
- *[<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (Android)*. Allows to switch on/off animation for navigation mode.
- *[<Translate android="true" ids="animate_my_location"/>](../navigation/guidance/map-during-navigation.md#animate-my-location-android-animate-own-position) (Android)*. <Translate android="true" ids="animate_my_location_desc"/> Note that the animation takes about 1 second, which creates a slight delay for the *[My location](../map/interact-with-map.md#my-location-and-zoom)* position to display on the map relative to your location.  


## Navigation Settings

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

We recommend you read the information in the article [Navigation Settings](../navigation/guidance/navigation-settings.md), where you can find the relevant settings of the OsmAnd application that can enhance your journey experience.

- [Navigation type](../navigation/guidance/navigation-settings.md#navigation-type). Provides options to select the type of navigation based on your mode of travel and whether you have an internet connection.
- [Route parameters](../navigation/guidance/navigation-settings.md#route-parameters). These settings determine how the app calculates routes to reach your destination.
- [Screen alerts](../navigation/guidance/navigation-settings.md#screen-alerts). This navigation setting allows you to enable the Alerts Widget and select which alerts you want to see on the app screen while navigating.
- [Voice prompts](../navigation/guidance/navigation-settings.md#voice-prompts). Audio instructions during navigation help you as a driver or pedestrian get to your destination while navigating a selected route.
- [Vehicle parameters](../navigation/guidance/navigation-settings.md#vehicle-parameters). Allows you to select the correct parameter settings to help you avoid problems when navigating a route.
- [Customise route line](../navigation/guidance/navigation-settings.md#customize-route-line). With this setting, you can choose the appearance of the route line that will be visible on the map during navigation.
- [Map during navigation](../navigation/guidance/navigation-settings.md#map-during-navigation). The map is used during navigation to determine your location, plan your route, and land orientation.
- [Animate own position](../navigation/guidance/navigation-settings.md#animate-own-position) (*for iOS is available in this menu*). This setting provides a smooth animation of the My Position point moving on the map during navigation. For ***Android***, this item is located in the [Other](#other) section of the *General Settings* menu.
- [Detailed track guidance](../navigation/guidance/navigation-settings.md). Allows you to match your route to nearby roads to enhance turn-by-turn instructions. Available settings: *Ask every time* or *Always*.

:::info
There are no navigation settings in the *Browse map* profile.  
:::


## Configure Map

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
- [Overlay terrain information](../plugins/topography.md), satellite images, or any other available [raster maps](../map/raster-maps.md).
- Display [public transport](../map/public-transport.md) information and [change the map style](../map/vector-maps.md#default-map-styles).


## Configure Screen

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


## Profile Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

The **Profile appearance** settings allow you to customize your profile's name and visual representation. You can also modify the appearance of [**My location**](#my-location-appearance) here. While the *profile name* must be unique, *icons* and *colors* can be the same across different profiles. These changes will be applied across various parts of the application, such as the [*Route preparation*](../navigation/setup/route-navigation.md) menu.


### My Location Appearance

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

*<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

*<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

The [**My location**](../map/interact-with-map.md#my-location-and-zoom) **appearance** settings allow you to customize how your location is displayed on the map, both when stationary and in motion. Motion is detected by the operating system when it provides a location update with a speed greater than 0  speed.

- **Additional options**. You can control how certain location-related visual elements appear on the map and apply them separately or both for the Resting and Navigation positions below the *my location* icon.

  - **<Translate android="true" ids="view_angle"/>**. Displays a cone-shaped area that shows the direction you are currently facing.
  - **<Translate android="true" ids="location_radius"/>**. Shows a circular area around your icon, representing the accuracy of your current location.

<!--
**3D location icon**. You can select the appearance of your location icon in 3D or 2D, depending on the map rendering version you are using. *Map rendering* (*Android*). 3D icons are only available for [map rendering Version 2 (OpenGL)](../personal/global-settings.md#map-rendering-engine). If you are using [map rendering Version 1](../personal/global-settings.md#map-rendering-engine), the icons will appear in 2D.

![My location Appearance](@site/static/img/personal/profiles/location_appearance_3d_icons.png)
-->

- **Custom 3D Icons**. If you want to further personalize your map experience, you can create your own 3D icons and add them to the app. To do this, follow the steps below:

  - Create a custom 3D model in [MTL and OBJ formats](https://en.wikipedia.org/wiki/Wavefront_.obj_file).
  - [Create a custom plugin](../plugins/custom.md) by using [pluging example](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf) and include your 3D icons with the following paths:
    - `..osmand/models/icon_folder_name/custom_3d_file.mtl`
    - `..osmand/models/icon_folder_name/custom_3d_file.obj`
  - Alternatively, directly copy the custom 3D files to the OsmAnd folder with the paths above.

- With the [map orientation modes](../widgets/map-buttons.md#compass), you can control the display of **My location** and the behavior of the map during navigation. If you find that the location icon jiggles or rotates even when you are stationary, switch the mode from the *Movement direction* ([Rotate map by bearing](../map/interact-with-map.md#rotate-map-by-bearing)) to another mode that is more appropriate for you, or use the settings in the *Options* section (*Menu → Settings → App profiles → Profile appearance → Options*). You can read more about *bearing* [here](../widgets/nav-widgets#bearing-widget).


## UI Customization

<InfoAndroidOnly />

:::note For unused plugins
To hide all control parameters of unused [*plugins*](../plugins/index.md#configure-a-plugin), disable them.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

With the UI customization feature, you can adjust the number of items in actions such as [*<Translate android="true" ids="shared_string_drawer"/>*](../start-with/main-menu.md#customize-advanced-use-of-android), [*<Translate android="true" ids="configure_map"/>*](../map/configure-map-menu.md) and [*<Translate android="true" ids="context_menu_actions"/>*](../map/map-context-menu.md). Information about the number of added items out of all possible items can be found under the title of each feature.


### Drawer

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Main visible items**. In the Customise UI section, you can reorder hide, and restore items from the [Drawer](../start-with/main-menu.md#customize-advanced-use-of-android).
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the main menu in the drawer. All your changes are instantly undone.  
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can duplicate the element arrangement from another OsmAnd profile to this one.

### Configuring the Map

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Configure map menu**. In this part of the Customise UI section, you can reorder or hide items from the [Configure map](../map/configure-map-menu.md).  
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the Configure map menu. All your changes are instantly undone.  
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can duplicate the element arrangement from another OsmAnd profile to this one.


### Context Menu Actions

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Map context menu**.  In this part of the Customise UI section, you can reorder or hide items from the [map context menu](../map/map-context-menu.md).  
- **<Translate android="true" ids="reset_to_default"/>**. Tapping it restores the original list of items in the main menu in the drawer. All your changes are instantly undone.
- **<Translate android="true" ids="copy_from_other_profile"/>**. You can duplicate the element arrangement from another OsmAnd profile to this one.


## Plugin Settings

:::caution Access to plugin settings
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


- **Trip Recording**. This item opens the [trip recording settings](../plugins/trip-recording.md#recording-settings) for the selected profile, where you can choose any parameters for recording your journeys.

- **Weather**. Interactive [Weather](../plugins/weather.md#weather-settings) map layers allow you to monitor the temperature, air pressure, cloud coverage, wind speed, and precipitation in your city or any other location on a global map.

- **Audio / Video Notes** (*Android only*). This item opens [audio-video plugin settings](../plugins/audio-video-notes.md#plugin-settings) for the selected profile. The *Audio/Video Notes* plugin extends the functionality of OsmAnd by allowing you to create your notes in various formats such as photo, video, or audio and associate them with geographical location or current location.  

- **OpenStreetMap Editing**. This item opens the [OpenStreetMap editing plugin settings](../plugins/osm-editing.md#settings) for the selected profile. With OsmAnd and the OSM editing plugin, you can contribute to OpenStreetMap.org by creating or modifying POIs, adding or commenting on notes, and uploading recorded GPX tracks.

- **External Sensors**. When you tap an item in the *Plugin Settings* section, the [settings of external sensors](../plugins/external-sensors.md#sensors-settings) for the selected profile are opened. The External Sensors plugin allows you to read and record data from wireless external sensors and display it using widgets in the OsmAnd application.

- **Accessibility** (*Android only*). This item opens [Accessibility plugin settings](../plugins/accessibility.md#plugin-settings) for the selected profile. The Accessibility plugin settings allow you to customize the application according to your needs. All settings relate to the navigation process and are set individually for each profile.

- **OsmAnd Development**. This menu opens the [OsmAnd development plugin settings](../plugins/development.md#plugin-settings), where you can configure the OsmAnd application for testing purposes or explore upcoming features. These settings are intended for developers and are not required for normal use of the application.  

  > ***Changing the settings of the OsmAnd development plugin affects all profiles.***

- **Wikipedia**. This menu opens *[Wikipedia plugin settings](../plugins/wikipedia.md#wikipedia-settings)*. You can select the language in which articles will be displayed and choose whether or not to download images from Wikipedia. Having Wikipedia on your trip enhances your experience by providing information about the places you visit. It works offline and displays relevant Wikipedia articles directly on the map related to points of interest.


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
- **Delete profile**:
    - This action is available only for *Android* and only for a *Custom profile*.
    - Default profiles cannot be deleted.
    - To add a profile go to *Menu → Settings → App profiles → + New profile*.


## Related Articles

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)

> *This article was last updated in October 2024*
