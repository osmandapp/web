---
sidebar_position: 4
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


# Android 4.8 (beta)

Android 4.8 is the latest release that introduces many new features and improvements to the OsmAnd app. This article describes all the key updates that represent meaningful changes for our users. 

# Join Beta

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>

# What's new

- [Altitude](#altitude-color-scheme-for-terrain) terrain colorization option.
- [Custom color palettes](#custom-color-palettes) for terrain, tracks, and routes:
  - [Palette editor](#palette-editor).
  - [Quick action button](#quick-action-for-change-terrain-color-scheme) for Terrain color schemes.
  - [Color palette legend](#color-palette-legend) for tracks, routes, and terrain.
- [3D options](#3d-my-location-icon) for My location icons. 
- [Profile appearance redesign](#profile-appearance-redesign).
- [Add action screen](#update-of-quick-actions-tool) of the Quick Actions tool.
  - Quick Actions on the [external keyboard](#quick-actions-on-external-keyboard) allow you to assign actions for personalized use.
- [Weather UI](#weather-tool-improvements) has been updated with layer animations and improved label visibility.
- Improvements for the [3D track view](#3d-track-improvements).
- [GPX track activity](#gpx-track-activity).
- Removed login/password authorization method in [OpenStreetMap Editing plugin](#login-to-openstreetmap).
- [More icons](#more-favorite-icons) for Favorites.
- Added [Water category of POIs](#water-category-of-pois).
- Updates for [Compass button](#compass-button-updates).
- [Optional updates](#optional-updates).


## Altitude Color Scheme for Terrain

![Color palette](../../blog/2024-06-19-android-4-8/img/color_altitude.png)

The feature displays the altitude of the terrain in different colors, which greatly improves the visual perception of the map. Easily recognizable different altitude levels with [new color scheme](https://osmand.net/docs/user/plugins/contour-lines#terrain) helps you better navigate the terrain and distinguish uplands from lowlands.  


## Custom Color Palettes

![Palettes](../../blog/2024-06-19-android-4-8/img/palette.png)

New colorizations of color palette schemes have been added for:
- [Route](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color): Speed, Slope, Elevation (Altitude).
- [Terrain](https://osmand.net/docs/user/plugins/contour-lines#hillshade--slope): Hillshade, Slope, Altitude.
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
After moving the TXT file to _..Android/data/net.osmand/files/color-paletee/height_altitude_0-200.txt_, new palettes will appear in the Colour Scheme menu.

### Palette Editor

*Terrain → Modify (Colour scheme) → All colors → &#8942; → Edit*
![Palettes](../../blog/2024-06-19-android-4-8/img/palette_editor.png)  ![Palettes](../../blog/2024-06-19-android-4-8/img/palette_editor_1.png)  

Here, you can create and modify your own palette.

### Quick action for change Terrain color scheme

*Menu → Configure screen → Custom buttons → + → Add button → Add action → Topography → Change Terrain color scheme*  
![Color Scheme](../../blog/2024-06-19-android-4-8/img/color_scheme.png)

Added a switch between styles, similar to the switch between layers.

### Color Palette Legend

![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend.png) ![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend_1.png) ![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend_2.png)  

Added new color palettes and legends for [tracks](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#color), [routes](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color), [terrain](https://osmand.net/docs/user/plugins/contour-lines#color-scheme) to represent speed, altitude, and slopes, [weather](https://osmand.net/docs/user/plugins/weather#weather-layers)  all weather layers:


## 3D My location Icon

![3D icon](../../blog/2024-06-19-android-4-8/img/3d_icon.png)

3D icons for [My Location](https://osmand.net/docs/user/personal/profiles#profile-appearance) have been added.


## Profile Appearance Redesign

Updates of [Profile appearance](https://osmand.net/docs/user/personal/profiles#profile-appearance):
- new Icon and Color selection components
- Redesign card for location icon selection
- Added options to disable Location radius and view angle
- 3D icons default in Opengl


## Update of Quick Actions Tool

![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons.png) ![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons_2.png)  

We updated the "Add Action" screen of the [Quick actions](https://osmand.net/docs/user/widgets/quick-action) tool. Now you can find groups of actions and use the search function.

Additionally, you'll find more actions for configuring this tool.


### Quick Actions on External Keyboard

![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons.png) ![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons_1.png)  

Assign actions for a personalized experience. All Quick Actions can now be assigned to external keyboard buttons.


## Weather Tool Improvements

![weather](../../blog/2024-06-19-android-4-8/img/weather_annimation.gif)  

Layer animations and improved labels make the weather interface more visual and informative. These changes help you better understand current weather conditions and forecasts. Improved label visibility makes navigating weather data much easier.  

**Improvements**:
- **New weather panel** with an updated user interface.

- Additional **Weather source options**.
  - Tap the ⚙ icon and select [GFS](https://en.wikipedia.org/wiki/Global_Forecast_System) or [ECMWF](https://en.wikipedia.org/wiki/European_Centre_for_Medium-Range_Weather_Forecasts).

- **Weather animation**.
  - After making sure the weather layers are selected, tap the *Play* button on the *Weather* screen.
  
- A **Wind animation layer** has been added.


## 3D Track Improvements

![3D track](../../blog/2024-06-19-android-4-8/img/track_3d.png)

Updated 3D track visualizations provide a more detailed view of routes.  In this release, we have added the following improvements to the [3D track appearance](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#3d-track). 

1. **Visualization options.** 
    - If *Visualized by* is set to *Fixed height*,  
        *→* change *Vertical exaggeration* to *Wall height*.

2. **Wall color options.** 
    - You can choose from:  
        *Solid, Downward gradient, Upward gradient, Altitude, Slope,* or *Speed*.


## GPX Track Activity

![3D track](../../blog/2024-06-19-android-4-8/img/track_activity.png)

The new feature of adding **Activity** to a recorded GPX track improves navigation and track management. This increases the convenience of working with track recordings.


## Login to OpenStreetMap

![OSM Oath](../../blog/2024-06-19-android-4-8/img/osm_oath.png)

To improve security, the option to authorize with login and password has been removed. As of June 1, 2024, only the new secure OAuth 2.0 method will be supported. This authorization method provides a higher level of information security to help protect your data and prevent unauthorized access.

The Use username and password button has been removed from: 

- *Login to* screen in the OSM Editing plugin menu.
- Benefits for active OSM contributors. 
- Upload OSM Note dialog.


## More Favorite Icons

![Favorite icons](../../blog/2024-06-19-android-4-8/img/favorite_icons.png)

A complete list of [icons for Favorites](https://github.com/osmandapp/OsmAnd/issues/16223) has been added, which helps to organize and visualize them better. This allows you to search and select an icon for a favorite in a *Сustom POI search* from the icon library, making the use of favorites more convenient and efficient.  


## Water Category of POIs

![Water](../../blog/2024-06-19-android-4-8/img/water_poi.png)

The new POI [Water (Man made)](https://github.com/osmandapp/OsmAnd/issues/16021) category includes objects with drinking water sources. Searching this [сategories](https://osmand.net/docs/user/search/search-poi#categories-poi-search) will help you easily find water on the map when traveling.  


## Compass Button Updates

The compass button has received updates that improve its functionality. These changes make the compass more accurate and easier to use, and help you navigate better.

[**Compass button**](https://osmand.net/docs/user/map/interact-with-map/#map-orientation-and-compass): 

- **Single tap**. Rotates the map orientation to the North in all orientations. Even if it rotates back in a second, such as in compass mode.
- **Double tap**. Switches map orientations. This previously worked with a single tap.
- **Long tap**. Opens a bottom sheet with a list of available orientations. This function remains unchanged.

**Processed accessibility actions**: 

- **Single tap**. Rotates the map to the North in main mode.  
    *→* This action corresponds to a **Double tap** in *TalkBack*.
- **Long tap**. Opens the bottom sheet with orientations in main mode.  
    *→* This action corresponds to a **Double tap and hold** in *TalkBack*.
- **Double tap** to switch map orientation is not available in Accessibility mode.

## Optional Updates

- Significant speed improvement for [Attach to roads](https://osmand.net/docs/user/navigation/setup/gpx-navigation#attach-to-roads) algorithm.

- Added [Pale style](https://github.com/osmandapp/OsmAnd/issues/20208) for roads rendering.

- *Stair icon* was added to the map at border nodes.

- Added *Energy and Rendering statistics* to the Development plugin.

- Added [Brands](https://github.com/osmandapp/OsmAnd/issues/20256) for POIs categories.

- Fixed bug with [export-import of GPX files](https://github.com/osmandapp/OsmAnd/issues/19212).

- Fixed [incrorrect labeling](https://github.com/osmandapp/OsmAnd/issues/19834) of external temperature sensor data for GPX files.

- Improved colors for [multiple GPX tracks after import](https://github.com/osmandapp/OsmAnd/issues/19995).

- [New share sheet](https://osmand.net/docs/user/map/map-context-menu/#share)- Switch to the system shared sheet when Android 14 starts.

- Fixed an issue with [navigation not stopping after reconnecting in Android Auto](https://github.com/osmandapp/OsmAnd/issues/19651).

- Fixed [incorrect instructions during navigation in Android Auto](https://github.com/osmandapp/OsmAnd/issues/19438).

- Fixed [sorting (statistics and search) of tracks folders in *Configure map → Tracks*](https://github.com/osmandapp/OsmAnd/issues/19634).

- Fixed bug with [3D mode button tilt angle](https://github.com/osmandapp/OsmAnd/issues/19868) on the map.

- Using [localized names](https://github.com/osmandapp/OsmAnd/issues/20020) for routes.

- Fixed [incorrect calculation of uphil](https://github.com/osmandapp/OsmAnd/issues/20074).

