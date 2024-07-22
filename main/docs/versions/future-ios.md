---
sidebar_position: 5
---

# iOS 4.8

# Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>


# What's new

- New [Speedometer widget](#speedometer-widget) compatible with [CarPlay](#speedometer-for-carplay).
- Added [Turn-by-turn instructions](#turn-by-turn-instructions) to route details.
- Customize the map screen by adding multiple ["Quick Action" buttons](#custom-buttons).
- Improvements for the [3D track view](#3d-track-improvements): new visualization and colorization options.
- Added improved [multi-selection mode for Tracks](#multi-selection-for-my-tracks).
- [3D options](#3d-my-location-icons) for My location icons.
- [Color palette files](#color-palettes): use & Import/Extport.
- [Weather](#weather-tool-updates): UI refresh, added wind animation.
- Added [smooth transitions](#smooth-transitions) while zooming in 3D mode.
- ["Location position on screen"](#location-position-on-screen) is now in the "Configure Screen" menu.
- Added separate ["Speed limit" navigation alert](#separate-speed-limit-alert). 
- Removed login/password authorization method in [OpenStreetMap Editing plugin](#login-to-openstreetmap).
- Changed ["Wheel circumference"](#others) in BLE sensor settings.
- Fixed [names for bearing widgets](#others).
- Fixed ["Radius ruler" visibility](#others) in all widget panels.


## Speedometer widget

![Speedometer](@site/static/img/widgets/speedometer_2_ios.png) 

For this release, a [new speedometer widget](https://osmand.net/docs/user/widgets/info-widgets/#speedometer) has been added. In the widget settings, you can choose from three speedometer sizes, set the speed limit tolerance, and enable warnings.

### Speedometer for CarPlay

![CarPlay screen](@site/static/img/navigation/auto-car/speedometer_carplay_2_ios.png) 

The [Speedometer widget](https://osmand.net/docs/user/navigation/car-play#speedometer) has also been added for CarPlay. The Speedometer widget is profile-dependent, so if you change the settings for one profile, they will not be applied to another.


## Turn-by-Turn Instructions

![Navigation route Android](@site/static/img/navigation/route/navigation_turn_ios.png) 

[Turn-by-turn information](https://osmand.net/docs/user/navigation/setup/route-details/#turn-by-turn-information) provides detailed instructions for navigating your route. These instructions include information about your movements along the route.


## Custom Buttons

*Menu → Configure screen → Buttons → Custom buttons → + → Add button*  
![Custom button](../../blog/2024-06-20-ios-4-8/img/custom_button.png) ![Custom button](../../blog/2024-06-20-ios-4-8/img/custom_button_1.png)

In this update, we've introduced Custom Buttons, a unique type of [Quick action](https://osmand.net/docs/user/widgets/quick-action#custom-buttons) tool. Users can now create a custom action button for their device's screen.


## 3D Track Improvements

![3D track](../../blog/2024-06-20-ios-4-8/img/3d_track.png)

We have improved the [3D track appearance](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#3d-track) and added more options for wall colors. You can now customize wall colors based on _Altitude, Slope, Speed, Heart Rate, Bicycle Cadence, Bicycle Power, Temperature_, and more.


## Multi-Selection for My Tracks

*Menu → My Places → Tracks → &#8230; → Select*  
![Multi selection on My Tracks](../../blog/2024-06-20-ios-4-8/img/multi_selection.png) ![Multi selection on My Tracks](../../blog/2024-06-20-ios-4-8/img/multi_selection_1.png)

[This menu item](https://osmand.net/docs/user/personal/tracks/manage-tracks#three-dots-menu) allows you [to select the folders and routes](https://osmand.net/docs/user/personal/tracks/manage-tracks#selection-mode) you need for further management.


## 3D My location Icons

![3D icon](../../blog/2024-06-20-ios-4-8/img/3d_icon.png)

A new 3D view has been added for [My Location](../user/personal/profiles.md#profile-appearance) icons, which improves their visualization on the map. These changes bring the appearance of the icons in alignment with the 3D tilt of the map.   


## Color Palettes

For this release you can use (export/import) color palette files for:
- [Route](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color): Speed, Slope, Elevation (Altitude).
- [Terrain](https://osmand.net/docs/user/plugins/contour-lines#hillshade-slope-and-altitude-layers): Hillshade, Slope.
- [Weather](https://osmand.net/docs/user/plugins/weather#weather-layers): All weather layers.

Users can create and add their own color palettes. Simply compose your TXT file with the following names: _Terrain_ - `height_altitude_name.txt`, `hillshade_color_name.txt`, `slope_name.txt`, _Routes_ - `route_speed_name.txt`, `route_slope_default.txt`, `route_elevation_default.txt`, _Weather_ - `weather_name.txt`

*height_altitude_0-200.txt*

```
# 0 - 90 degree RGBA
0,46,185,0,191
# yellow 
100,255,222,2,227
# red
200,255,1,1,255
# violet
220,130,1,255,255

```

## Weather Tool Updates

![Weather](../../blog/2024-06-20-ios-4-8/img/weather_ios.png)

[The Weather tool](https://osmand.net/docs/user/plugins/weather) has been updated with a refreshed UI, added wind animation.<!-- and two data source providers ⚙ ([GFS](https://en.wikipedia.org/wiki/Global_Forecast_System) or [ECMWF](https://en.wikipedia.org/wiki/European_Centre_for_Medium-Range_Weather_Forecasts)).-->


## Smooth Transitions

Smooth transitions have been added while [zooming in 3D mode](https://github.com/osmandapp/OsmAnd-iOS/issues/3802).


## Location Position on the Screen

*Menu → Configure screen → Other → Location position on screen*  
![Widget page](@site/static/img/widgets/conf_screen_display_position_ios.png) 

The ["Location position on screen"](https://osmand.net/docs/user/widgets/configure-screen/#display-position--location-position-on-screen) setting has been moved to the "Configure Screen" menu.


## Separate Speed Limit Alert

![Navigation Settings](@site/static/img/navigation/navigation_settings_screen-alerts_new_ios.png)

The ["Speed limit" screen alert](https://osmand.net/docs/user/navigation/guidance/navigation-settings/#screen-alerts) has been separated from the Traffic Warnings screen alert.


## Login to OpenStreetMap

![OsmAnd live for mappers](@site/static/img/personal/maps/osm_authorization_ios.png)

To improve security, the option to authorize with login and password has been removed. As of June 1, 2024, only [the new secure OAuth 2.0 method](https://github.com/osmandapp/OsmAnd-iOS/issues/3736) will be supported.  This authorization method provides a higher level of information security to help protect your data and prevent unauthorized access.

The *Use username and password* button has been removed from: 

- *Login to* screen in the OSM Editing plugin menu.
- Benefits for active OSM contributors. 


## Optional Updates

- [Context menu for tracks](https://github.com/osmandapp/OsmAnd-iOS/issues/3488) in Configure map was added.

- Added [grouping of name-tag](https://github.com/osmandapp/OsmAnd-iOS/issues/3554) for Routes and POI's.

- Added changing of ["Wheel circumference"](https://github.com/osmandapp/OsmAnd-iOS/issues/3503) in BLE [sensor settings](https://osmand.net/docs/user/plugins/external-sensors#sensors-settings).

- Fixed:

  - Broken [Hazmat parameters](https://github.com/osmandapp/OsmAnd-iOS/issues/3761).

  - Bug with [dublicates of Custom Plugins data](https://github.com/osmandapp/OsmAnd-iOS/issues/3739).

  - [Names for bearing widgets](https://github.com/osmandapp/OsmAnd-iOS/issues/3563).

  - [Radius ruler visibility](https://github.com/osmandapp/OsmAnd-iOS/issues/3656) in all widget panels.

  - [The Next Turn and Distance](https://github.com/osmandapp/OsmAnd-iOS/issues/3738) to Destination widgets.

  - Bad visibility of text on [Next turn widget](https://github.com/osmandapp/OsmAnd-iOS/issues/3734) - CarPlay.

  - [Zoom search](https://github.com/osmandapp/OsmAnd-iOS/issues/3569).

  - [Missed subway station icons](https://github.com/osmandapp/OsmAnd-iOS/issues/3711).

  - The [crash while downloading](https://github.com/osmandapp/OsmAnd-iOS/issues/3561) in the background.

  - [Favorite points sizes](https://github.com/osmandapp/OsmAnd-iOS/issues/3641) on Mac OS.

