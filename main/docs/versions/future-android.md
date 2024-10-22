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

Android 4.9 is the latest release that introduces many new features and improvements to the OsmAnd app. This article describes all the key updates that represent meaningful changes for our users.

# Join Beta

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>

# What's new

- [Real-Time Turn & Lane Indicators](#real-time-turn--lane-indicators). Added a group of widgets to the top and bottom panels for real-time updates on upcoming turns and lane info.
- [Gallery viewer](#wikimedia-gallery-viewer). Full-screen view for Wikimedia images.
- [Vehicle Metrics plugin](#vehicle-metrics). Monitor vehicle performance via OBD-II protocol.
- [Track activities](#gpx-track-activities). Assign and filter tracks by activities.
- [Customizable map buttons](#customizable-map-buttons). Adjust appearance with a precise grid.
- [Widget Context menu](#widget-context-menu).
    - Includes a [Reset average speed](#reset-average-speed) action.
- [Quick Action updates](#new-actions-for-qa). Added new quick action for *touchscreen lock*, *trip recording*, and control the *visibility of OSM Edits*.
- [Dirt Bike trails](#dirt-bike-trails). New route layer for off-road biking.
- [Surrounding areas info](#surrounding-areas). Displays information about areas around a selected point.
- [Terrain colorization visibility](#visibility-parameters-for-terrain). Separated parameters for enhanced control.
- [Interactive access points](#interactive-access-points). Display access or other road and path attributes with a single tap.
- [Hiking trails difficulty](#hiking-trails). Renamed from *Difficulty classification*.
- [Custom graph display for GPX tracks](#custom-graph-display-for-gpx-tracks). Improved the track graph, allowing you to select any available data type for the graph on the Trip recording screen.
- [Optional updates](#optional-updates). Additional updates and refinements for the release.


## Real-Time Turn & Lane Indicators

The [Top/Bottom widget panels](../user/widgets/configure-screen.md#top-and-bottom-panels) in OsmAnd's *Configure screen menu* provides a new set of widgets for route guidance. These widgets give you real-time navigation information, including the distance to the next turn, second next turn, lane guidance, road name, and current street name. Perfect for keeping track of your route at every step of your journey.

*Find them in: Menu → Configure screen → Top panel / Bottom panel → Route guidance: Next turn, Second next turn, Lanes*

![Main Navigation widget](../../blog/2024-09-13-android-4-9/img/main_nav_widget.png)


## Wikimedia Gallery Viewer

Introducing a full-screen gallery viewer for Wikimedia images in the [Map Context menu](../user/map/map-context-menu.md#online-photos). The image block has been redesigned for easier browsing, allowing you to view and swipe through all images associated with a location. A dedicated screen displays a list of all available images, making it easier to explore related media. Tapping on an image opens it in a full-screen mode for a detailed view of the place or POI.

![Gallery](../../blog/2024-09-13-android-4-9/img/gallery.png)


## Vehicle Metrics

The new *Vehicle Metrics* plugin has been added to the [Plugins menu](../user/plugins/index.md), enabling the monitoring of key vehicle performance data using the [OBD-II protocol](https://en.wikipedia.org/wiki/OBD-II_PIDs). This plugin offers real-time metrics, such as engine speed, fuel consumption, and coolant temperature, with dedicated widgets for easy access to this data. Whether you're tracking fuel efficiency or ensuring engine health, the *Vehicle Metrics* plugin brings valuable insights directly to your device.

![OBD](../../blog/2024-09-13-android-4-9/img/obd.png) ![OBD](../../blog/2024-09-13-android-4-9/img/obd_1.png)


## GPX Track Activities

A new feature allows you to assign **Activity** types (such as hiking or cycling) to your recorded GPX tracks, enhancing track management and organization. You can now easily [filter tracks](../user/personal/tracks/smart-folder.md#available-filters) by activity, making it more convenient to organize and analyze your trips.

![3D track](../../blog/2024-09-13-android-4-9/img/track_activity.png)


## Customizable Map Buttons

Enhance your map screen with fully customizable [Quick Action and Default buttons](../user/widgets/quick-action.md#quick-action-button-appearance), including changes to icon, size, corner radius, and background opacity. Through the new grid layout, you can position buttons precisely for easy access. Button appearance settings can be adjusted via *Menu → Configure screen → Custom buttons* or *Default buttons → three-dot menu → Appearance*. Additionally, you can now export and import your custom button configurations, ensuring seamless transitions between devices.

![Button appearance](../../blog/2024-09-13-android-4-9/img/button_appearance.png) ![Button appearance](../../blog/2024-09-13-android-4-9/img/button_appearance_1.png)


## Widget Context Menu

The [**Widget Context menu**](../user/widgets/configure-screen#panel-widgets-settings) allows you to manage and configure widgets directly from the map screen, providing *a quick way to organize panels*. You can access this menu by ***long tapping*** on any widget to customize the layout of widgets without leaving the map.

![Widget context menu](@site/static/img/widgets/widget_context_menu_andr.png)


### Reset Average Speed

We've added a convenient [Reset average speed](https://osmand.net/docs/user/widgets/info-widgets#average-speed) action directly in the widget context menu. With just a long tap on the widget, you can instantly reset the average speed value during your trip. This feature makes it easier to track real-time performance on the go without navigating through multiple menus, giving you more control over your trip statistics with minimal effort.

![Widget context menu - Average speed](@site/static/img/widgets/average_speed_widget_1_andr.png)  ![Widget context menu - Average speed](@site/static/img/widgets/average_speed_widget_2_andr.png)


## New actions for QA

Added [new actions](../user/widgets/quick-action#action-types):

1. Action for Lock/Unlock screen: _Menu → Configure screen → Custom buttons → + → Add acton → Inteface → Lock screen_
2. Actions for Trip recording: _Menu → Configure screen → Custom buttons → + → Add acton → My Places → Start/Pause - Trip recording, Start new trip segment, Finish Trip recording, Save Recorded Trip & Continue_
3. Action for Show/Hide OSM edits: _Menu → Configure screen → Custom buttons → + → Add acton → My Places → Show/Hide OSM edits_

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


## Visibility parameters for Terrain

Slope / Hillshade / Altitude have their own independant [Visibility setting](../user/plugins/topography#visibility).


## Interactive Access Points

When using OsmAnd, you can now interact with access-related icons such as *Barrier*, *Steps*, or *Gate* directly on the map. A simple tap on these icons will bring up detailed information, including the name of the POI, its type, and the address. This functionality enhances quick access to important navigation data for objects on your route, helping you understand restrictions or attributes of paths and roads at a glance. You can explore this via the [Map Context menu](https://osmand.net/docs/user/map/map-context-menu#overview).

By tapping on icons for *Barrier*, *Steps*, or *Gate*, the context menu reveals additional details, including the name (POI type) and address associated with these features, or displays object type, if a name is not available.

![Barrier icons](../../blog/2024-09-13-android-4-9/img/icons.png)


## Hiking trails

"Difficulty classification" was renamed to "Hiking trails difficulty grade":

_Configure map → Routes → [Hiking trails difficulty grade](../user/map/routes#hiking-trails-difficulty-grade): SAC or CAI_


## Custom Graph Display for GPX Tracks

We have enhanced the [graph toggle](https://osmand.net/docs/user/plugins/trip-recording#overview-screen) for recorded tracks, allowing you to select specific data types, such as heart rate or other available options, and display them directly on the graph. This update lets you select any available data on the Trip recording screen, making it easier to view critical information during or after your trip, improving your overall analysis of recorded GPX data.

![Graph](../../blog/2024-09-13-android-4-9/img/rectrack_graph_1.png) ![Graph](../../blog/2024-09-13-android-4-9/img/rectrack_graph.png)


## Optional updates

- [System font applied](https://github.com/osmandapp/OsmAnd/issues/19123) integrates your device's system font throughout the app interface without additional configuration.
- [Auto-record track](https://github.com/osmandapp/OsmAnd/issues/19905) simplifies navigation by automatically recording your path.
- Improved [Favorite search](https://github.com/osmandapp/OsmAnd/issues/19242) allows you to quickly return to the list of search results.
- Resolved [Y-axis graph display issue](https://github.com/osmandapp/OsmAnd/issues/20076) for improved data clarity.
- Display [Wikipedia overlays](https://github.com/osmandapp/OsmAnd/issues/17944) as separate layer.
- Optimized [Samsung DeX screen sizes](https://github.com/osmandapp/OsmAnd-Issues/issues/2590) for seamless performance.
- Fixed missing [water transport routes](https://github.com/osmandapp/OsmAnd/issues/20251) when selecting stops.
- Correctly save [GPX track names](https://github.com/osmandapp/OsmAnd/issues/20211) for future reference.
- Fixed app crash issues when [deleting track from Smart folder](https://github.com/osmandapp/OsmAnd/issues/20661), and when trying [to apply a filter to a track](https://github.com/osmandapp/OsmAnd/issues/20794).
- Added active [Navigation mode updates](https://github.com/osmandapp/OsmAnd/issues/19168)with Continue navigation in Android Auto's main menu.
- [Remembere 2D/3D settings](https://github.com/osmandapp/OsmAnd/issues/20779) automatically in Android Auto.
- [Added tresholds](https://github.com/osmandapp/OsmAnd/issues/20494#issuecomment-2326033245) for free rotation mode.
- Fixed [keyboard input issue](https://github.com/osmandapp/OsmAnd/issues/20636) affecting [external devices](https://osmand.net/docs/user/map/interact-with-map#external-input-devices).
- Updated [Sun position widget](https://github.com/osmandapp/OsmAnd/issues/20447)to hide the next day's sunrise.
- Resolved [performance slowdowns](https://github.com/osmandapp/OsmAnd/issues/20889) when trying to display a track and colorize it by speed and height.
- Corrected issue where [*None* setting](https://github.com/osmandapp/OsmAnd/issues/20503) for *Analyze by intervals* failed to work.
- Fixed [export list freezes](https://github.com/osmandapp/OsmAnd/issues/20900) to prevent app lag.
- [3D track issue](https://github.com/osmandapp/OsmAnd/issues/20810) now work correctly with path visualization.
- Corrected [RTL coordinate flipping](https://github.com/osmandapp/OsmAnd/issues/20595) for right-to-left language displays.
- Restored [missed sensor data](https://github.com/osmandapp/OsmAnd/issues/17937) for ongoing track recordings.
- [Temperature data](https://github.com/osmandapp/OsmAnd/issues/20829) now visible in the *Analyze on map* graph.
- Added zoom functionality for [route points](https://github.com/osmandapp/OsmAnd/issues/20722) in Plan a Route.
