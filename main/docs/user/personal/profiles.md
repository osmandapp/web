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

## Overview {#overview}

OsmAnd offers a variety of default profiles tailored for different activities, including driving, cycling, walking, and more specialized activities like skiing and boating. These profiles are designed to enhance your navigation experience according to the activity you are engaged in. Each profile includes configurable options, enabling you to adjust settings and incorporate additional plugins to match your preferences.

- Certain profiles, such as *Skiing* and *Boat*, have **additional features** that become available only when the corresponding plugins are enabled.

     - Plugins can be activated by navigating to *Menu → Plugins → Ski map view* or *Nautical map view*.
     - Enabling the plugins provides the profiles with the essential features to meet the specific requirements of these activities.

- It's important to note that some profiles, such as **Truck**, **Motorcycle**, **Moped**, **Train**, **Aircraft**, **Boat**, and **Horseback riding**, are not activated by default.

     - To access and use these profiles, you need to manually enable them in *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
     - This method helps maintain an organized and relevant list of profiles by activating only those required for specific activities.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile"/>* (Browse map or any other profile)
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*  

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_overview_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_ios.png)

</TabItem>

</Tabs>


## Profile Configuration {#profile-configuration}

:::caution Applying settings to a specific profile only
All settings apply exclusively to the currently selected application profile.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_1_andr.png)  ![Profiles Settings Android](@site/static/img/personal/profiles/profile_settings_menu_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Settings iOS](@site/static/img/personal/profiles/profile_settings_menu_2_ios.png)

</TabItem>

</Tabs>

This section contains all settings related to appearance, navigation options, map display, settings menu, and profile screen.


### Free Cloud Backup {#free-cloud-backup}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile"/>*

![Favorites folder functions android](@site/static/img/personal/profile_settings_free_backup_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*

![Favorites actions ios](@site/static/img/personal/profile_settings_free_backup_ios.png)

</TabItem>

</Tabs>

OsmAnd allows you [to back up](../personal/osmand-cloud.md#osmand-start) your application profile settings to OsmAnd Cloud, ensuring that your configurations are securely stored and easily restored across Android, iOS, and Web versions. This backup feature protects your settings in case of device failure or app reinstallation. You can benefit from this special plan using [OsmAnd Start](../personal/osmand-cloud.md#osmand-start).  

You must have an [OsmAnd Cloud](../personal/osmand-cloud.md#login) account to use the *Free Settings Backup*. If you have an *OsmAnd Pro* subscription or an active *OsmAnd Cloud* account, the promotion banner will not be displayed.


## General Settings {#general-settings}

This section contains settings for the application theme and compass button, map and profile data units and formats, external input devices, and many other settings to create the optimal configuration for your chosen profile.

### Appearance {#appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Appearance Android](@site/static/img/personal/profiles/profiles_appearance_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_appearance"/>*

![Profiles General Settings Apperance iOS](@site/static/img/personal/profiles/profiles_appearance_3_ios.png)

</TabItem>

</Tabs>

- **<Translate android="true" ids="choose_osmand_theme"/>**. Allows you to set a day and night theme for the app, which can be applied to one profile or all at once. This option does not change the [map mode](../map/vector-maps.md#map-mode) settings.
  - *<Translate android="true" ids="dark_theme"/> theme*
  - *<Translate android="true" ids="light_theme"/> theme*
  - *<Translate android="true" ids="system_default_theme"/>*  
      Applies the system theme. By default, and for all new users, the map style corresponds to the light or dark theme selected in your device's system settings.
- **<Translate android="true" ids="rotate_map_to"/>**. Allows you to choose [the map orientation mode](../map/interact-with-map.md#map-orientation-modes) for the selected profile.
  - *<Translate android="true" ids="rotate_map_manual_opt"/>*
  - *<Translate android="true" ids="rotate_map_bearing_opt"/>*
  - *<Translate android="true" ids="rotate_map_compass_opt"/>*
  - *<Translate android="true" ids="rotate_map_north_opt"/>*

- **<Translate android="true" ids="map_screen_orientation"/>**. Sets and locks the screen position in the OsmAnd application. This feature is not supported on iPad.
  - *<Translate android="true" ids="map_orientation_portrait"/>*
  - *<Translate android="true" ids="map_orientation_portrait"/> (inverted)*
  - *<Translate android="true" ids="map_orientation_landscape"/>*
  - *<Translate android="true" ids="map_orientation_landscape"/> (inverted)*
  - *<Translate android="true" ids="map_orientation_default"/>*  

- **[<Translate android="true" ids="screen_control"/>](../navigation/guidance/voice-navigation.md#screen-control)** (*Android only*). Opens the screen control menu, where you can select options for the device screen while navigating to save device battery consumption.  


### Units & Formats {#units--formats}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles General Settings Units & formats Android](@site/static/img/personal/profiles/units_formats_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles General Settings Units & formats iOS](@site/static/img/personal/profiles/units_formats_ios.png)

</TabItem>

</Tabs>

In the **Units and Formats** section, you can adjust measurement units and formats to align with your personal preferences and regional standards, ensuring all data is displayed conveniently and familiarly.


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
| **<Translate android="true" ids="driving_region"/>** | <Translate android="true" ids="shared_string_automatic"/> | <ul><li>According to the device location</li></ul> |
|            | <Translate android="true" ids="driving_region_europe_asia"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_us"/>   |  <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_mi_feet"/></li></ul>  |
|            | <Translate android="true" ids="driving_region_canada"/>   | <ul><li><Translate android="true" ids="right_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_uk"/>  |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_mi_meters"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_japan"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_india"/>   | <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>   |
|            | <Translate android="true" ids="driving_region_australia"/>   |  <ul><li><Translate android="true" ids="left_side_navigation"/></li><li><Translate android="true" ids="si_km_m"/></li></ul>  |
|  |  |  |
| **<Translate android="true" ids="unit_of_length"/>** | <Translate android="true" ids="si_km_m"/> | 1 km / 1000 m |
|          | <Translate android="true" ids="si_mi_feet"/> | 0.62 ml / 3281 ft (1000 m) |
|          | <Translate android="true" ids="si_mi_meters"/> | 0.62 ml / 1000 m |
|          | <Translate android="true" ids="si_mi_yard"/> | 1094 ya / 0.62 ml (1000 m) |
|          | <Translate android="true" ids="si_nm_ft"/>, <Translate android="true" ids="si_nm_mt"/> | 0.54 nmi / 3280.84 ft / 1000 m |
|  |  |  |
| **Units of altitude** | <ul><li><Translate android="true" ids="shared_string_meters"/></li><li><Translate android="true" ids="shared_string_feet"/></li></ul> | 1 m / 3.28 ft |
|  |  |  |
| **<Translate android="true" ids="coordinates_format"/>** | <Translate android="true" ids="dd_mm_mmmm_format"/> | Example: 50.12333° 19.93233° (Lat Long) |
|          | <Translate android="true" ids="dd_mm_mmm_format"/> | Example: 50°7.393′ 19°55.941′ (Lat Long)  |
|          | <Translate android="true" ids="dd_mm_ss_format"/> | Example: 50°7′23.6″ 19°55′56.4″ (Lat Long) 23°27′30″ |
|          | <Translate android="true" ids="navigate_point_format_utm"/> | 34N 5552876 423678 (Zone Northing Easting) . [<Translate android="true" ids="utm_format_descr"/>](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system) |
|          | <Translate android="true" ids="navigate_point_format_mgrs"/> | Example: 34U DA 23678 52873 . [<Translate android="true" ids="mgrs_format_descr"/>](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)  |
|          | <Translate android="true" ids="navigate_point_format_olc"/> | Example:  9F2X4WFJ+7W ([Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code) represents area 9m x 14m)  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid"/> (Android version only) | Example: 2 215 227.87, 830 915.9 ([Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).)))  |
|          | <Translate android="true" ids="navigate_point_format_swiss_grid_plus"/> (Android version only) | Example: 4 215 227.87, 1 830 915.9 ([Swiss coordinate system](https://en.wikipedia.org/wiki/Swiss_coordinate_system#:~:text=The%20Swiss%20coordinate%20system%20(or,Office%20of%20Topography%20(Swisstopo).))) |
|  |  |  |
| **<Translate android="true" ids="angular_measeurement"/>** (*Android*) / **<Translate ios="true" ids="angular_units"/>** (iOS)| Degrees 180° | All angular values have readings from 0° to 180° and from 0° to -180°.  |
|          | Degrees 360° | All angular values have readings from 0° to 360°.  |
|          | <Translate android="true" ids="shared_string_milliradians"/> | All angular values have [milliradian value](https://en.wikipedia.org/wiki/Milliradian).  |
|  |  |  |
| **<Translate android="true" ids="default_speed_system"/>** (*Android*) / **<Translate ios="true" ids="units_of_speed"/>** (iOS)| <Translate android="true" ids="si_kmh"/> | 90 km/h  |
|          | <Translate android="true" ids="si_mph"/> | 55.92 mph  |
|          | <Translate android="true" ids="si_m_s"/> | 30 m/s |
|          | <Translate android="true" ids="si_min_m"/> | 1.073 min/m |
|          | <Translate android="true" ids="si_min_km"/> | 0.667 min/km |
|          | <Translate android="true" ids="si_nm_h"/> | 48.59 kn |
|  |  |  |
| **<Translate android="true" ids="unit_of_volume"/>** | <Translate android="true" ids="litres"/> | Europe, Aisa, Latin America, Canada, Japan, India, Australia |
|  | <Translate android="true" ids="imperial_gallons"/> | UK and similar |
|  | <Translate android="true" ids="us_gallons"/> | United States |
|  |  |  |
| **<Translate android="true" ids="shared_string_temperature"/>**| <Translate android="true" ids="system_default_theme"/> |  |
|  | <Translate android="true" ids="weather_temperature_celsius"/> |  |
|  | <Translate android="true" ids="weather_temperature_fahrenheit"/> |  |
|  |  |  |
| **<Translate android="true" ids="distance_during_navigation"/>** | <Translate android="true" ids="precise"/> | *For precise measurements*, choose how distance information is displayed in the navigation widgets, such as the distance to a point, the next turn, or a specific lane. |
|          | <Translate android="true" ids="round_up"/> | *For better readability*, the numbers displayed in the navigation widgets (distance to a point, next turn, or lane) will be rounded down to have fewer digits. <br/> For examples: 3672 m *→* 3.6 km,&nbsp; 462 m *→* 400 m,&nbsp; 184 m *→* 150 m,&nbsp; 47 m *→* 40 m,&nbsp; 18 m *→* 15 m. |


### Other {#other}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,general_settings_2,shared_string_other"/>*

![Profiles General Settings Other Android](@site/static/img/personal/profiles/profile_general_settings_other_2_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,general_settings_2,shared_string_others"/>*

![Profiles General Settings Other iOS](@site/static/img/personal/profiles/profile_general_settings_other_ios.png)  

</TabItem>

</Tabs>

The **Other** section provides additional profile settings to customize OsmAnd’s interface and input controls. These settings allow you to configure external devices, adjust animation preferences, and toggle fullscreen mode.

- [<Translate android="true" ids="external_input_device"/>](../map/interact-with-map.md#external-input-devices) – Connect external controllers such as *<Translate ios="true" ids="sett_wunderlinq_ext_input"/>*, *<Translate ios="true" ids="sett_generic_ext_input"/>*, or *<Translate android="true" ids="sett_parrot_ext_input"/>* to operate OsmAnd using physical buttons.

- **<Translate android="true" ids="position_animation"/>** / **Animate own position** – The [position](../map/interact-with-map.md#my-location-and-zoom) icon animates with each GPS point received (once per second). A slight delay in its movement may be noticeable, especially during fast movement or GPS signal fluctuations. You can adjust this effect using the *Prediction time* setting (Android only): higher values increase smoothness but add delay, lower values reduce delay but may make movement less smooth.

- **<Translate android="true" ids="use_volume_buttons_as_zoom"/>** (*Android only*) – Enable or disable the ability to use your device’s volume buttons for [zooming](../map/interact-with-map.md#my-location-and-zoom) in and out on the map.

- [<Translate android="true" ids="use_kalman_filter_compass"/>](../map/interact-with-map.md#extra-compass-settings) (*Android only*) – Smooths map rotation with [gradual movement](https://en.wikipedia.org/wiki/Kalman_filter), reducing sudden position shifts. This introduces a small delay (*less than 1 second*).

- [<Translate android="true" ids="use_magnetic_sensor"/>](../map/interact-with-map.md#extra-compass-settings) (*Android only*) – Uses your device’s [magnetic sensor](https://en.wikipedia.org/wiki/Kalman_filter) to stabilize map rotation, reducing abrupt changes. This also introduces a slight delay.

- **<Translate android="true" ids="tap_on_map_to_hide_interface"/>** (*Android only*) – Tap an empty space on the map to hide control buttons and widgets, maximizing map visibility.

- [<Translate android="true" ids="do_not_use_animations"/>](../map/interact-with-map.md#no-animations) (*Android only*) – Disable animations in navigation mode for faster screen transitions.



## Navigation Settings {#navigation-settings}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,routing_settings_2"/>*

![Navigation Settings Android](@site/static/img/navigation/navigation_settings_overview_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,routing_settings_2"/>*  

![Navigation Settings iOS](@site/static/img/navigation/navigation_settings_overview_2_ios.png)

</TabItem>

</Tabs>

For a detailed overview of navigation options, refer to the [Navigation Settings](../navigation/guidance/navigation-settings.md) article, which explains how to configure OsmAnd for an optimal navigation experience.

- [Navigation type](../navigation/guidance/navigation-settings.md#navigation-type) - Choose the appropriate navigation mode based on your travel method and internet availability.

- [Route parameters](../navigation/guidance/navigation-settings.md#route-parameters) - Define how OsmAnd calculates routes, including preferences for avoiding certain roads or selecting route types.

- [Screen alerts](../navigation/guidance/navigation-settings.md#screen-alerts) - Enable the *Alerts Widget* to display real-time notifications for speed limits, turns, and other important road conditions.

- [Voice prompts](../navigation/guidance/navigation-settings.md#voice-prompts) - Enable audio guidance to receive spoken navigation instructions while driving or walking along a selected route.

- [Vehicle parameters](../navigation/guidance/navigation-settings.md#vehicle-parameters) – Configure vehicle-specific settings such as maximum speed and vehicle height to ensure accurate routing and avoid restricted roads.

- [Customize route line](../navigation/guidance/navigation-settings.md#customize-route-line) – Adjust the color, width, and style of the route line displayed on the map for better visibility during navigation.

- [Map during navigation](../navigation/guidance/navigation-settings.md#map-during-navigation) – View real-time positioning on the map, track progress along the route, and improve orientation using landmarks.

- [Detailed track guidance](../navigation/guidance/navigation-settings.md) – Improve turn-by-turn navigation by aligning your route with mapped roads. Available settings: *Ask Every Time* or *Always*.

:::info
There are no navigation settings in the *Browse map* profile.  
:::


## Configure Map {#configure-map}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

- *<Translate android="true" ids="shared_string_menu,configure_profile,configure_map"/>*  
- *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>* *→ Configure map*

![Profiles Configure map Settings Android](@site/static/img/personal/profiles/profile_configure_map_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,configure_map"/>*  

![Profiles Configure map Settings iOS](@site/static/img/personal/profiles/profile_configure_map_ios.png)

</TabItem>

</Tabs>

The [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) menu allows you to customize the map display settings for the selected profile, enabling better visualization of key map elements.  

With this menu, you can:

- **Highlight important map elements**, including [Favorite points](../personal/favorites.md), [Navigation markers](../personal/markers.md), or special [Points of Interests](../map/point-layers-on-map.md#points-of-interest-pois) on the map.

- **Display specific routes and GPX files**, including third-party tracks for navigation or analysis.

- **Overlay additional map layers**, such as [terrain information](../plugins/topography.md), **satellite imagery**, or other available [raster maps](../map/raster-maps.md).

- **Enable public transport visualization**, showing [routes and stops](../map/public-transport.md) for better trip planning.

- **Adjust map appearance** by selecting a different [map style](../map/vector-maps.md#default-map-styles) to match your needs.


## Configure Screen {#configure-screen}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

- Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  
- Go to: *Menu → Settings → App Profile → Configure screen*

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_1-1_andr.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_3_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">  

Go to: *<Translate android="true" ids="shared_string_menu,map_widget_config"/>*  

![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_1.png)  ![Configure screen menu](@site/static/img/widgets/configure_screen_overview_ios_2.png)

</TabItem>

</Tabs>

The [<Translate android="true" ids="map_widget_config"/>](../widgets/configure-screen.md) is a menu that allows you to configure the widgets for the selected profile to be displayed on the map. On this screen, you can enable and configure [Informational](../widgets/info-widgets.md) and [Navigational](../widgets/nav-widgets.md) widgets, as well as other items.


## Profile Appearance {#profile-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![Profiles Appearance](@site/static/img/personal/profiles/profile_appearance_1_ios.png)

</TabItem>

</Tabs>

The **Profile appearance** settings allow you to customize your profile's name and visual representation. You can also modify the appearance of [My Location](#my-location-appearance) here. While the *profile name* must be unique, *icons* and *colors* can be the same across different profiles. These changes will be applied across various parts of the application, such as the [Route preparation](../navigation/setup/route-navigation.md) menu.


## My Location Appearance {#my-location-appearance}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,configure_profile,profile_appearance"/>*

![My location Appearance](@site/static/img/personal/profiles/location_appearance_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,profile_appearance"/>*  

![My location Appearance](@site/static/img/personal/profiles/location_appearance_2_ios.png)

</TabItem>

</Tabs>

The **My Location appearance** settings allow you to customize how your location is displayed on the map, both when stationary and in motion. Motion is detected by the operating system when the device speed is **greater than zero**.

### View Angle and Location Radius {#view-angle-and-location-radius}

You can customize the visual elements related to your location and apply them separately or together for **Resting** and **Navigation** positions. For both 2D and 3D modes, *View Angle* and *Location Radius* are displayed in the same color selected for the [navigation profile](#profile-appearance), directly below the [My Location](../map/interact-with-map.md#my-location-and-zoom) icon.

- **<Translate android="true" ids="view_angle"/>** – Displays a **cone-shaped** area indicating the direction you are currently facing.  
- **<Translate android="true" ids="location_radius"/>** – Shows a **circular area** around your icon, representing the accuracy of your current location.


### Custom 3D Icons {#custom-3d-icons}

For a more personalized experience, you can create and add **custom 3D icons** to OsmAnd.  

***How to add a custom 3D location icon:***

1. **Create a 3D model**. Design your icon in [MTL and OBJ formats](https://en.wikipedia.org/wiki/Wavefront_.obj_file).

2. **Integrate the model into OsmAnd:**  
   - Develop a [custom plugin](../plugins/custom.md) using the provided [plugin example](https://osmand.net/uploads/plugins/model.plugin/1/model.plugin-1.osf).  
   - Place your 3D icon files in the following paths:  

     `..osmand/models/icon_folder_name/custom_3d_file.mtl`  
     `..osmand/models/icon_folder_name/custom_3d_file.obj`

   - Alternatively, copy the **MTL and OBJ files** directly into the OsmAnd folder using the same directory structure.  

### Map Orientation Modes {#map-orientation-modes-my-location}

You can control how the **My Location** icon behaves using different [map orientation modes](../widgets/map-buttons.md#compass).  

- If the location icon **jiggles or rotates** while stationary, switch from **Movement Direction Mode** ([Rotate Map by Bearing](../map/interact-with-map.md#rotate-map-by-bearing)) to another mode.  
- Adjust additional settings in *Menu → Settings → App Profiles → Profile Appearance → Options*.
- Learn more about bearing and direction tracking in the [Bearing Widget](../widgets/nav-widgets#bearing-widget) section.  


## UI Customization {#ui-customization}

<InfoAndroidOnly />

:::note For unused plugins
To hide all control parameters of unused [plugins](../plugins/index.md#configure-plugin), disable them.
:::

*<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,ui_customization"/>*

![Profile UI Customization Android](@site/static/img/personal/profiles/profile_ui_customization_android.png)  

With the UI customization feature, you can adjust the number of items in actions such as [<Translate android="true" ids="shared_string_drawer"/>](../start-with/main-menu.md#customize-advanced-use-of-android), [<Translate android="true" ids="configure_map"/>](../map/configure-map-menu.md) and [<Translate android="true" ids="context_menu_actions"/>](../map/map-context-menu.md). Information about the number of added items out of all possible items can be found under the title of each feature.


### Drawer {#drawer}

![Profile Drawer Android](@site/static/img/personal/profiles/profile_drawer_moving_android.png)  ![Profile Reset Android](@site/static/img/personal/profiles/profile_drawer_reset_item_android.png)  

- **Main visible items** - In the *Customize UI* section, you can *reorder hide, and restore* items from the [Drawer](../start-with/main-menu.md#customize-advanced-use-of-android) to match your preferences.

- **<Translate android="true" ids="reset_to_default"/>** - Restores the *original list of items* in the drawer, instantly undoing any customizations.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Allow you to copy the *drawer layout* from another OsmAnd profile to maintain a consistent setup across profiles.

### Configuring the Map {#configuring-the-map}

![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_visible_andr.png) ![Profile Configure map menu Android](@site/static/img/personal/profiles/profile_configure_map_show_andr.png)

- **Configure map menu** - In the *Customize UI* section, you can *reorder or hide items* from the [Configure map](../map/configure-map-menu.md), allowing quick access to frequently used settings.

- **<Translate android="true" ids="reset_to_default"/>** - Restores the *original item list* in the Configure map menu, removing any changes.

- **<Translate android="true" ids="copy_from_other_profile"/>** - Copies the *Configure map menu layout* from another OsmAnd profile.


### Context Menu Actions {#context-menu-actions}

![Profile Context menu Android](@site/static/img/personal/profiles/profile_context_menu_visible_andr.png)  ![Profile Configure map menu Reset Android](@site/static/img/personal/profiles/profile_context_menu_hidden_2_andr.png)

- **Map context menu** - In the Customize UI section, you can reorder or hide items in the [map context menu](../map/map-context-menu.md) to optimize access to frequently used features.

- **<Translate android="true" ids="reset_to_default"/>** – Restores the *default item list* in the map context menu, instantly reverting any modifications.

- **<Translate android="true" ids="copy_from_other_profile"/>** – Copies the *context menu arrangement* from another OsmAnd profile to maintain consistency across different profiles.


## Plugin Settings {#plugin-settings}

:::caution Access to plugin settings
To access the plugin's settings, you must first [**enable the plugin**](../plugins/index.md#enable--disable) in the *Plugin section of the main menu*.
:::

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

Go to: *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugin_settings"/>*  

![Profile Settings Plugins Android](@site/static/img/personal/profiles/profile_plugins_1_andr.png)

</TabItem>

<TabItem value="ios" label="iOS">

Go to: *<Translate ios="true" ids="shared_string_menu,shared_string_settings,application_profiles,plugins_menu_group"/>*

![Profile Settings Plugins iOS](@site/static/img/personal/profiles/profile_plugins_1_ios.png)

</TabItem>

</Tabs>

Plugins unlock additional features of the application and can be either [paid or free](../plugins/index.md#purchase). Some plugins have their own [settings](../plugins/index.md#plugin-settings), others do not. OsmAnd gives you the possibility to configure plugins for each profile separately.


- **Trip Recording**. This item opens the [trip recording settings](../plugins/trip-recording.md#recording-settings) for the selected profile, where you can choose any parameters for recording your journeys.

- **Weather**. Interactive [Weather](../plugins/weather.md#weather-settings) map layers allow you to monitor the temperature, air pressure, cloud coverage, wind speed, and precipitation in your city or any other location on a global map.

- **Audio / Video Notes** (*Android only*). This item opens [audio-video plugin settings](../plugins/audio-video-notes.md#plugin-settings) for the selected profile. The *Audio/Video Notes* plugin extends the functionality of OsmAnd by allowing you to create your notes in various formats such as photo, video, or audio and associate them with geographical location or current location.  

- **OpenStreetMap Editing**. This item opens the [OpenStreetMap editing plugin settings](../plugins/osm-editing.md#settings) for the selected profile. With OsmAnd and the OSM editing plugin, you can contribute to OpenStreetMap.org by creating or modifying POIs, adding or commenting on notes, and uploading recorded GPX tracks.

- **External Sensors**. When you tap an item in the *Plugin Settings* section, the [settings of external sensors](../plugins/external-sensors.md#sensor-settings) for the selected profile are opened. The External Sensors plugin allows you to read and record data from wireless external sensors and display it using widgets in the OsmAnd application.

- **Accessibility** (*Android only*). This item opens [Accessibility plugin settings](../plugins/accessibility.md#plugin-settings) for the selected profile. The Accessibility plugin settings allow you to customize the application according to your needs. All settings relate to the navigation process and are set individually for each profile.

- **OsmAnd Development**. This menu opens the [OsmAnd development plugin settings](../plugins/development.md#plugin-settings), where you can configure the OsmAnd application for testing purposes or explore upcoming features. These settings are intended for developers and are not required for normal use of the application.  

  > ***Changing the settings of the OsmAnd development plugin affects all profiles.***

- **Wikipedia** (iOS only). This menu opens *[Wikipedia plugin settings](../plugins/wikipedia.md#wikipedia-settings)*. You can select the language in which articles will be displayed and choose whether to download images from Wikipedia. Having Wikipedia on your trip enhances your experience by providing information about the places you visit. It works offline and displays relevant Wikipedia articles directly on the map related to points of interest.

- **Vehicle Metrics**. This menu opens *[Vehicle metrics plugin settings](../plugins/vehicle-metrics.md#scanner-settings)*. It allows you to connect OBD-II scanner to OsmAnd.

- **AIS vessel tracker** (Android only). This menu opens *[AIS vessel tracker plugin settings](../plugins/ais-tracker.md#plugin-settings)*. This plugin allows you to connect AIS tracker to OsmAnd.



## Actions {#actions}

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">

![Profiles Actions Settings Android](@site/static/img/personal/profiles/profile_actions_settings_android.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Profiles Actions Settings iOS](@site/static/img/personal/profiles/profile_actions_settings_ios.png)  

</TabItem>

</Tabs>

Actions with selected profile:  

- [Export profile](https://osmand.net/docs/user/personal/import-export#export) - Export all settings of the selected profile in OSF format.

- **Copy from another profile** - Copies all settings from another existing profile in your OsmAnd application.

- **Reset to default** - Returns all settings to the initial state.

- **Delete profile**:
    - This action is available only for *Android* and only for a *Custom profile*.
    - Default profiles cannot be deleted.
    - To add a profile, go to *Menu → Settings → App profiles → + New profile*.


## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md#import--export-track)
- [Search History](../search/search-history.md#export-and-share)
- [Color Palette Schemes](../personal/color-palette-schemes.md)


