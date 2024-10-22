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


# Android 4.9 (beta)

Android 4.8 is the latest release that introduces many new features and improvements to the OsmAnd app. This article describes all the key updates that represent meaningful changes for our users.

# Join Beta

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>

# What's new



- Introduced [Main Navigation widget](#main-navigation-widget),
- Added a full-screen [gallery viewer](#images-gallery) for Wikimedia images,
- Introduced a new [plugin "Vehicle Metrics"](#vehicle-metrics) to monitor vehicle performance using the OBD-II protocol,
- Added the ability to assign [activities to tracks and filter](#gpx-track-activities) them accordingly,
- Introduced customizable map [button appearance and a precise grid](#customizable-map-buttons),
- Added a [Widget Context menu](#widget-context-menu) and a ["Reset average speed"](#reset-average-speed) action to widgets,
- Added [new actions](#new-actions-for-qa) for Quick Action:
  - Action for [touchscreen lock](https://github.com/osmandapp/OsmAnd/issues/20742),
  - Implemented new quick actions for [trip recording](../user/plugins/trip-recording),
  - Quick action to [control visibility of OSM Edits](https://github.com/osmandapp/OsmAnd/issues/20711).
- Added new route layer ["Dirt Bike trails"](https://github.com/osmandapp/OsmAnd/issues/18756),
- Added [information about surrounding areas](#surrounding-areas) for the selected point,
- [System font](#system-font) everywhere,
- Separated [visibility parameters](#visibility-parameters-for-terrain) for Terrain colorization options,
- [Tappable icon](#tappable-access-actions) to display access or other road or path attributes,
- [Renamed "Difficulty classification"](#hiking-trails) to "Hiking trails difficulty grade",
- [Fixed issues](#fixed-issues)



## Main Navigation widget

Added the Main navigation widget for [Top panel](../user/widgets/configure-screen#top-and-bottom-panels): _Configure screen → Top panel → Route guidance: Next turn, Second next turn, Lanes_

![Main Navigation widget](../../blog/2024-09-13-android-4-9/img/main_nav_widget.png)


## Images Gallery

Added on [Map Context menu](../user/map/map-context-menu#online-photos) full-screen gallery viewer for Wikimedia images.

![Gallery](../../blog/2024-09-13-android-4-9/img/gallery.png)

## Vehicle Metrics

The new Plugin - Vehicle Metrics was added to the [Plugins menu](../user/plugins/). It monitors key vehicle metrics using the [OBD-II protocol](https://en.wikipedia.org/wiki/OBD-II_PIDs). New widgets for this data were added too.

![OBD](../../blog/2024-09-13-android-4-9/img/obd.png) ![OBD](../../blog/2024-09-13-android-4-9/img/obd_1.png)

## GPX Track activities

The new feature of [adding **Activity**](../user/plugins/trip-recording#recording-settings) to a recorded GPX track improves navigation and [track management (filter)](../user/personal/tracks/smart-folder#available-filters). This increases the convenience of working with track recordings.

![3D track](../../blog/2024-09-13-android-4-9/img/track_activity.png)

## Customizable Map buttons

No you can modify [the appearance of Quick Action buttons](../user/widgets/quick-action#quick-action-button-appearance) and Default buttons through the three-dot menu: _Menu → Configure screen → Custom buttons_ or _Default buttons → choose needed buttons → three-dot menu → Appearance_ (chagne icon, corner radius, size, background opacity).

Added [grid for buttons](https://github.com/osmandapp/OsmAnd/issues/19164).

Added Custom buttons to [export/import settings](https://github.com/osmandapp/OsmAnd/issues/20867).

![Button appearance](../../blog/2024-09-13-android-4-9/img/button_appearance.png) ![Button appearance](../../blog/2024-09-13-android-4-9/img/button_appearance_1.png)


## Widget Context Menu

The [**Widget Context menu**](../user/widgets/configure-screen.md#panel-widgets-settings) allows you to manage and configure widgets directly from the map screen, providing *a quick way to organize panels*. You can access this menu by ***long tapping*** on any widget to customize the layout of widgets without leaving the map.

![Widget context menu](@site/static/img/widgets/widget_context_menu_andr.png)

### Reset average speed

Added the "Reset average speed" action of the current value in Widget Context menu.

## New actions for QA

Added [new actions](../user/widgets/quick-action#action-types): 
1. Action for Lock/Unlock screen: _Menu → Configure screen → Custom buttons → + → Add acton → Inteface → Lock screen_
2. Actions for Trip recording: _Menu → Configure screen → Custom buttons → + → Add action → My Places → Start/Pause - Trip recording, Start new trip segment, Finish Trip recording, Save Recorded Trip & Continue_
3. Action for Show/Hide OSM edits: _Menu → Configure screen → Custom buttons → + → Add action → My Places → Show/Hide OSM edits_

![Quick actions](../../blog/2024-09-13-android-4-9/img/quick_action.png)

## Dirt Bike Trails

Added new Route options  - [Dirt bike trails](../user/map/vector-maps#routes): _Menu → Configure map → Routes → Dirt bike routes_ . Read more about [dirtbike tag](https://wiki.openstreetmap.org/wiki/Key:dirtbike:scale).

Upon activation, display a colored route overlay for all paths marked with the dirtbike:scale tag, similar to the approach used for mtb:scale (Mountain bike).

![Dirt Bike legend](../../blog/2024-09-13-android-4-9/img/dirt_bike.png) ![Dirt Bike legend](../../blog/2024-09-13-android-4-9/img/dirt_bike_1.png)

## Surrounding areas

Show data information to [Map Context](../user/map/map-context-menu#details) menu about surrounding areas (polygons) after [**long tap**](../user/map/map-context-menu#select-any-point-long-tap) on the map:

_Long tap on the map → Map Context menu → Details → Within_

Sort by polygon size: from small to big. Show polygon type and name.

![Poligon info](../../blog/2024-09-13-android-4-9/img/areas_info.png)

## System font

[Use system font](https://github.com/osmandapp/OsmAnd/issues/19123) as font for OsmAnd menu:

_Device settings → Display → Font size an style_

## Visibility parameters for Terrain

Slope / Hillshade / Altitude have their own independant [Visibility setting](../user/plugins/topography#visibility).

## Tappable access actions

By tapping on _Barrier_, _Steps_, _Gate_ icons in the [Map Сontext menu](../user/map/map-context-menu#overview) now displays the name (POI type) and address:

![Barrier icons](../../blog/2024-09-13-android-4-9/img/icons.png)

## Hiking trails

"Difficulty classification" was renamed to "Hiking trails difficulty grade":

_Configure map → Routes → [Hiking trails difficulty grade](../user/map/routes#hiking-trails-difficulty-grade): SAC or CAI_

## Change of graph toggle 

Changed [graph toggle](../user/plugins/trip-recording#overview-screen) (Recording track) to give the ability to select any available options for displaying on the graph.

![Graph](../../blog/2024-09-13-android-4-9/img/rectrack_graph_1.png) ![Graph](../../blog/2024-09-13-android-4-9/img/rectrack_graph.png)


## Fixed issues

  - ["Auto-record track](https://github.com/osmandapp/OsmAnd/issues/19905) during navigation",
  - [Favorite search](https://github.com/osmandapp/OsmAnd/issues/19242),
  - [Not visible Y-axis](https://github.com/osmandapp/OsmAnd/issues/20076) on graph,
  - Showing [Wikipedia overlay](https://github.com/osmandapp/OsmAnd/issues/17944),
  - [Samsung DeX](https://github.com/osmandapp/OsmAnd-Issues/issues/2590) sizes,
  - [Water transport routes](https://github.com/osmandapp/OsmAnd/issues/20251) are not displayed when selecting a stop,
  - [GPX track's name](https://github.com/osmandapp/OsmAnd/issues/20211) after saving,
  - [Crash](https://github.com/osmandapp/OsmAnd/issues/20661) when deleting track from Smart folder, [applying a filter](https://github.com/osmandapp/OsmAnd/issues/20794).
  - Active [Navigation mode](https://github.com/osmandapp/OsmAnd/issues/19168)(added "Continue navigation" action to the main menu) for Android Auto,
  - Remembering [2D/3D setting](https://github.com/osmandapp/OsmAnd/issues/20779) for Android Auto,
  - [Treshold](https://github.com/osmandapp/OsmAnd/issues/20494#issuecomment-2326033245) for free rotation mode,
  - [No effect of keys “D”, “N”, “S”](https://github.com/osmandapp/OsmAnd/issues/20636) of [external Keyboards](../user/map/interact-with-map#external-input-devices),
  - [Sun position widget](https://github.com/osmandapp/OsmAnd/issues/20447): not show sunrise tomorrow,
  - [Slows down](https://github.com/osmandapp/OsmAnd/issues/20889) when turning on the track and coloring by speed and height,
  - ["None" doesn't work](https://github.com/osmandapp/OsmAnd/issues/20503) for "Analyze by intervals",
  - [Freezes in export list](https://github.com/osmandapp/OsmAnd/issues/20900),
  - [3D track incorrectly work](https://github.com/osmandapp/OsmAnd/issues/20810),
  - issue with fliped [coordinates in RTL](https://github.com/osmandapp/OsmAnd/issues/20595),
  - [Missed sensor data](https://github.com/osmandapp/OsmAnd/issues/17937) for currently recording track,
  - [Missed temperature](https://github.com/osmandapp/OsmAnd/issues/20829) for graph of "Analyze on map",
  - Zoom for [Points in Plan Route](https://github.com/osmandapp/OsmAnd/issues/20722),








