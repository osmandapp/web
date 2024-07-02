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


# What's new

- Visualize elevation changes with [new terrain colorization](#new-terrain-colorization):
   - Use new feature - [Palette editor](#palette-editor),
   - [Quick action button](#quick-action-for-change-terrain-color-scheme) for Terrain color schemes,
   - [Color palettes legend](#color-palettes-legend) for tracks, routes, terain.
- [My Location 3D](#3d-my-location-icon): Improved location position icons with 3D variants.
- New ["Add action" screen](#update-of-quick-actions-tool) of Quick Actions tool.
   - Quick Actions on [external keyboard](#quick-actions-on-external-keyboard): Assign actions for a personalized experience.
- [Weather UI refresh](#weather-tool-improvements): Layers animation & improved label visibility.
- Improvements for [3D trak view](#3d-track-improvements).
- [GPX track activity](#gpx-track-acitivity).
- [OSM Editing](#osm-login): deleted login / password authorization method.
- More icons for Favorites.
- Added [POI "Water" category](#category-water).
- [More updates](#others)
    - Significant speed improvement for ["Attach to roads"](https://osmand.net/docs/user/navigation/setup/gpx-navigation#attach-to-roads) algorithm

<!--

Info from release notes

• New terrain colorization option "Altitude"
• Custom color palettes for terrain, tracks, and routes.
• 3D variant for location position icons
• Quick Actions can now be assigned to external keyboards
• Weather: UI refresh, added wind animation
• 3D Track Improvements: new visualization and colorization options
• Added app theme option to follow map mode
• Fixed track stats, sorting & search
• OSM Editing: deleted login / password authorization method
• Switching to system share sheet starting Android 14 

-->

## New terrain colorization

New colorizations for [terrain](https://osmand.net/docs/user/plugins/contour-lines#color-scheme) schemes have been added.

Users can now create and add their own color palettes for terrain. Simply compose your TXT file with the following names: `height_altitude_name`, `hillshade_color_name`, `slope_name`.

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


![Palettes](../../blog/2024-06-19-android-4-8/img/palette.png)

### Palette editor


_Terrain → Modify (Colour scheme) → All colors → &#8942; → Edit_

![Palettes](../../blog/2024-06-19-android-4-8/img/palette_editor.png)

Here, you can create and modify your own palette.

![Palettes](../../blog/2024-06-19-android-4-8/img/palette_editor_1.png)

### Quick action for change Terrain color scheme

Added a switch between styles, similar to the switch between layers:

_Menu → Configure screen → Custom buttons → + → Add button → Add action → Topography → Change Terrain color scheme_

![Color Scheme](../../blog/2024-06-19-android-4-8/img/color_scheme.png)

### Color palettes legend

Added new color palettes and legends for [tracks](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#color), [routes](https://osmand.net/docs/user/navigation/guidance/map-during-navigation#color), [terrain](https://osmand.net/docs/user/plugins/contour-lines#color-scheme) to represent speed, altitude, and slopes:

![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend.png) ![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend_1.png) ![Palettes legend](../../blog/2024-06-19-android-4-8/img/legend_2.png)

## 3D My location icon

3D icons for [My Location](https://osmand.net/docs/user/personal/profiles#profile-appearance) have been added.

![3D icon](../../blog/2024-06-19-android-4-8/img/3d_icon.png)


## Update of Quick Actions tool

We updated the "Add Action" screen of the [Quick actions](https://osmand.net/docs/user/widgets/quick-action) tool. Now you can find groups of actions and use the search function.

Additionally, you'll find more actions for configuring this tool.

![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons.png) ![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons_2.png)


### Quick Actions on external keyboard

Assign actions for a personalized experience. All Quick Actions can now be assigned to external keyboard buttons.

![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons.png) ![External Buttons](../../blog/2024-06-19-android-4-8/img/external_buttons_1.png)

## Weather tool improvements

- New weather panel with an updated UI,

- Additional weather source options: click the ⚙ icon and choose between [GFS](https://en.wikipedia.org/wiki/Global_Forecast_System) or [ECMWF](https://en.wikipedia.org/wiki/European_Centre_for_Medium-Range_Weather_Forecasts),

- Weather animation: tap the "Play" button on the "Weather" screen (make sure to choose weather layers first).

![weather](../../blog/2024-06-19-android-4-8/img/weather_annimation.gif)


## 3D track improvements

For this release, we added the following improvements to the [appearance of 3D track](https://osmand.net/docs/user/map/tracks-on-map/track-appearance#3d-track).

- Visualization options: If "Visualized by" is set to "Fixed height," change "Vertical exaggeration" to "Wall height."

- Wall color options: Choose from Solid, Downward gradient, Upward gradient, Altitude, Slope, or Speed.

![3D track](../../blog/2024-06-19-android-4-8/img/track_3d.png)

## GPX track acitivity

Added the ability to add activity for track recording.

![3D track](../../blog/2024-06-19-android-4-8/img/track_activity.png)

## OSM login

Only new OAuth 2.0 will be supported from June 1st, 2024 onwards.

- Remove the "Use username and password" button from:
  - Main bottom sheet,
  - Benefits for active OSM contributors,
  - Upload OSM Note dialog.

![OSM Oath](../../blog/2024-06-19-android-4-8/img/osm_oath.png)

## More Favorite icons (4.8?)

Added a full list of [icons for Favorites](https://github.com/osmandapp/OsmAnd/issues/16223). Find and add an icon from the POI icons library.

![Favorite icons](../../blog/2024-06-19-android-4-8/img/favorite_icons.png)

## Category "Water"

Category ["Water" (Man made)](https://github.com/osmandapp/OsmAnd/issues/16021) has been added for [Categories](https://osmand.net/docs/user/search/search-poi#categories-poi-search).

![Water](../../blog/2024-06-19-android-4-8/img/water_poi.png)

## Others

- significant speed improvement for ["Attach to roads"](https://osmand.net/docs/user/navigation/setup/gpx-navigation#attach-to-roads) algorithm,
- fixed the bug with [export-import GPX file](https://github.com/osmandapp/OsmAnd/issues/19212),
- fixed [incrorrectly label](https://github.com/osmandapp/OsmAnd/issues/19834) of external temperature sensor data for GPX,
- improved colors for [multi GPX track after import](https://github.com/osmandapp/OsmAnd/issues/19995),
- [new share sheet](https://osmand.net/docs/user/map/map-context-menu/#share) for Android 14: Switching to system share sheet starting Android 14 
- [Android Auto](https://github.com/osmandapp/OsmAnd/issues/19651): navigation is not stopped after reconnecting,
- Fixed track stats, sorting & search.