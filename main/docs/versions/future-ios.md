---
sidebar_position: 5
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

# iOS 4.9

# Join Beta

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

<br/>

# What's new

- [Updated Compass Behavior](#new-compass-behavior). Modified the interaction with the compass button for easier map orientation.
  - [Locked Map Rotation](#locked-map-rotation). Keep *North is up* consistently locked in place.
- [Search by Brand Name](#search-by-brand-names). Locate POIs quickly and intuitively by popular brand names.
- [Widget Context menu](#widget-context-menu). Customizable widget options for greater flexibility.
- [Revamped Graphs](#redesigned-graphs). Enhanced graph visuals prevent overlapping Y-axis labels, ensuring a cleaner display.
- [Track Menu Updates](#track-menu-updates):
  - [Folder Statistics Tracks](#total-tracks-statistics). View summary statistics for all tracks within a folder.  
  - [Track Filters](#tracks-filters-for-search). Quickly find tracks with new search options.
  - [Sort Subfolders](#sort-subfolders). Organize folders and tracks efficiently.
- [Map Mode Theme Updates](#updates-for-map-mode-menu). Map appearance now matches the app's light or dark theme automatically.
- [Grouped Tags with Translations](#grouped-tags). Easily access translations of tags grouped in the context menu.  
- [Polygon Information Access](#nearby-areas). Access polygon details directly from the map context menu with a long tap or single POI tap.
- [Location Icon Improvements](#profile-appearance-redesign). Redesigned *My Location* icon with enhanced settings.
- [Quick Action Feature](#quick-action-updates). Adjust your *Location position on screen* with a new quick action.
- [CarPlay Updates](#carplay-improvements). Resolved issues with navigation widget updates and refined visuals for turn indicators.
- [Updated Map Download Dialog](#downloading-dialog). A more user-friendly download interface.
- [Show Along the Route](#show-along-the-route). Discover options for displaying information relevant to your route.
- [Optional Updates](#optional-updates). Additional updates and refinement for this release.


## New Compass Behavior

[Compass button](../user/map/interact-with-map.md#map-orientation-and-compass):

- **Single tap**. Reorients the map *to the North* regardless of the current orientation mode. In *Compass direction* mode, the map briefly aligns to the North before returning to the dynamic orientation.
- **Double tap**. Cycles through orientation modes, such as GPS direction or device rotation. This function replaces the previous *Single tap* behavior for switching modes.
- **Long tap**. Opens a menu with all map orientation modes, letting you choose your preferred setting.


### Locked Map Rotation

![North is up](../../blog/2024-12-26-ios-4-9/img/north_locked.png)

A much-requested feature, [locked map rotation](https://github.com/osmandapp/OsmAnd/issues/17561#issuecomment-1623105410), now ensures the map remains consistently oriented with North at the top when the compass is set to the [**North is up**](../user/widgets/map-buttons.md#map-orientation-modes) mode. In this configuration, map rotation is disabled, but you can still zoom in and out freely.


## Search by Brand Names

![Brand name iOS](../../blog/2024-12-26-ios-4-9/img/brand.png)

The new [brand search](../user//search/search-poi.md#how-to-use) feature simplifies finding your favorite coffee shops, hotels, or trusted stores by allowing searches for POIs using brand names.


## Widget Context Menu

![Widget Context menu iOS](../../blog/2024-12-26-ios-4-9/img/widget_context_menu.png)

*Long tap* on any widget on the map screen to open the [context menu](../user/widgets/configure-screen.md#panel-widgets-settings). This quick access will help you customize widget settings and change the layout.


## Redesigned Graphs

![Graph iOS](../../blog/2024-12-26-ios-4-9/img/graph.png)

The elevation graphs have been redesigned to improve clarity. The Y-axis labels have been repositioned to eliminate overlap with the graph lines, so that all data remains readable at a glance.


## Track Menu Updates

### Total Tracks Statistics

![Track stats iOS](../../blog/2024-12-26-ios-4-9/img/track_stats.png)

You can now view comprehensive [tracks statistics](../user/personal/tracks/manage-tracks.md#folder-statistics) right at the bottom of each folder. These details include:

- Number of tracks
- Total distance
- Uphill and downhill elevation
- Duration
- Overall folder size

For example:  
`Tracks – 4, distance – 246.6 km, uphill – 325 m, downhill – 456 m, duration – 08:50:35, Total size – 14 MB.`


### Tracks Filters for Search

![Track filters iOS](../../blog/2024-12-26-ios-4-9/img/track_filters.png)

Finding specific tracks is more convenient with the new [track filters](https://osmand.net/docs/user/personal/tracks/smart-folder/#search-filter). You can filter results based on criteria like duration and length, ensuring you locate the exact track you need.


### Sort Subfolders

![Track filters iOS](../../blog/2024-12-26-ios-4-9/img/subfolders_ios.png) ![Track filters iOS](../../blog/2024-12-26-ios-4-9/img/subfolders_1_ios.png)

Improved sorting functionality in the [Tracks tab](https://osmand.net/docs/user/personal/tracks/manage-tracks#folder-actions), enables you to organize subfolders systematically. Sorting options make it effortless to navigate your tracks, whether grouped by activity, location, or other preferences.  


## Updates for Map Mode Menu

![Map mode iOS](https://osmand.net/assets/images/map_mode_4-9_ios-ca48bf82a5918214a8819924e38cdb72.png)

The *map mode menu* now includes an [auto-theme switch](../user/map/vector-maps.md#map-mode) that adapts to your app’s light or dark mode settings.


## Grouped Tags

To streamline the [Context menu](../user/map/map-context-menu.md#details), all POI tags and translations are now consolidated under a single item. This grouping includes fields such as:

- `name`
- `alt name`
- `old name`


## Nearby Areas

*Map context menu → Details → Within*

![Within iOS](../../blog/2024-12-26-ios-4-9/img/within_ios.png)

OsmAnd has enhanced **Polygon Information**, making geographic data even more accessible. From the [Map Context menu](../user/map/map-context-menu.md#details), you can view nearby polygons with detailed attributes.  

*How it works:*

- *Long tap* on the map
- *Single tap* on a POI

You’ll see information like polygon type, name, and a size-based sorting from smallest to largest. Whether exploring administrative boundaries or geographic features, this feature ensures you get all the essential details at a glance.


## Profile Appearance Redesign

The [profile appearance](../user/personal/profiles.md#my-location-appearance) has been redesigned for better usability and visual appeal.

*Ket updates*:

- *Customization tools*. New icon and color selection options for profiles.
- *Map redesign*. Improved interface for selecting location icons on the map.
- *Default 3D icons*. Modernized design elements for a fresh look.
- *Additional visual elements* for the Resting and Navigation positions below the my location icon:
  - **View angle**. Displays a cone-shaped area that shows the direction you are currently facing.  
  Status: *Off*, &nbsp;*Resting position*, &nbsp;*Navigation position*, &nbsp;*Rest & navigation position*.

  - **Location radius**. Shows a circular area around your icon, representing the accuracy of your current location.  
  Status: *Off*, &nbsp;*Resting position*, &nbsp;*Navigation position*, &nbsp;*Rest & navigation position*.


## Quick Action Updates

### Location Position on Screen

*Menu → Configure screen → Custom buttons → + → Add button → Add action → Settings → Location position on screen*

![Widget page](../../blog/2024-12-26-ios-4-9/img/conf_screen_display_position_ios.png)

A new Quick Action button allows changing the [Location position on screen](../user/widgets/quick-action.md#settings). You can enable or disable the display of the previously selected *My Location* cursor position on the map.


### Switch Between Terrain Styles

In this release, we have added the ability to switch between terrain color palettes, similar to switching between layers. This can be done using the Quick Actions tool.  

How to set it up:  
*Menu → Configure screen → Custom buttons → + → Add button → Add action → Configure map → Terrain color scheme*

### Touch Screen Lock

*Menu → Configure screen → Custom buttons → + → Add acton → Inteface → Lock screen*

![Lock screen](../../blog/2024-12-26-ios-4-9/img/lock_screen_ios.png)

Added a [Touch Screen Lock](../user/map/interact-with-map#touch-screen-lock) option in the Quick Actions menu for locking and unlocking the map interface with ease.


## CarPlay Improvements

This release brings several CarPlay enhancements:

- Automatic navigation switch to [the first Car profile](https://github.com/osmandapp/OsmAnd-iOS/issues/3957) upon CarPlay connection.
- Resolved issues with [POI opening hours](https://github.com/osmandapp/OsmAnd-iOS/issues/3961).
- Fixed bugs with:
  - [Navigation widget refresh](https://github.com/osmandapp/OsmAnd-iOS/issues/3963) after route recalculations.
  - [Second next turn widget](https://github.com/osmandapp/OsmAnd-iOS/issues/3964) arrow size.
  - [Speedometer height](https://github.com/osmandapp/OsmAnd-iOS/issues/3958).
- **Animate own position** moved from *Navigation settings* to [General settings](../user/personal/profiles.md#other) for better accessibility.


## Downloading dialog

![Downloading dialog iOS](../../blog/2024-12-26-ios-4-9/img/downloading.png)

The newly introduced downloading dialog for *Maps & Resources*, *Context menus*, and the *First start screen* improves user experience by streamlining these interactions.


## Show Along the Route

The [Show along the route](../user/navigation/guidance/map-during-navigation.md#view-and-select-points) option is now a dedicated item in the Navigation Settings Menu for easier customization.  

How to access:  
*Menu → Navigation → Settings → Show along the route*


## Optional Updates

This release includes several additional improvements and fixes:

- Renamed *Difficulty classification* to [*Hiking trails difficulty grade*](../user/map/routes.md#hiking-trails-difficulty-grade).
- Added a [dark icon](https://github.com/osmandapp/OsmAnd-iOS/issues/3893) for iOS 18.
- Consolidated [Hazmat parameters](https://github.com/osmandapp/OsmAnd-iOS/issues/3992) into a single list.
- Added support for [Dirt bike trails](../user/map/routes.md#dirt-bike-trails) in Configure map.
- Introduced a [Map Scale mode](https://github.com/osmandapp/OsmAnd-iOS/issues/3967) for [Zoom level](../user/plugins/development.md#zoom-level) widget.
- Fixed bugs and improved stability:
  - Resolved a bug with [visible tracks](https://github.com/osmandapp/OsmAnd-iOS/issues/3982) being removed in *My Places*.
  - Addressed an issue with [missing track name](https://github.com/osmandapp/OsmAnd-iOS/issues/4123) for routes.
  - Fixed a bug related to [copying coordinates](https://github.com/osmandapp/OsmAnd-iOS/issues/4045).
  - Corrected [automatic language detection](https://github.com/osmandapp/OsmAnd-iOS/issues/3727) for voice prompts.
  - Fixed an issue with the [location marker](https://github.com/osmandapp/OsmAnd-iOS/issues/4033) of GPX tracks using Analyze on map.
  - Resolved a bug with not [saving widget size](https://github.com/osmandapp/OsmAnd-iOS/issues/4137).
  - Fixed a problem with the [white position icon](https://github.com/osmandapp/OsmAnd-iOS/issues/3927).
  - Corrected [attributes for the Sun Position widget](https://github.com/osmandapp/OsmAnd-iOS/issues/4105).
  - Fixed a crash in the [boat profile route parameters](https://github.com/osmandapp/OsmAnd-iOS/issues/3972).
  - Addressed an issue with [incorrect uphill calculations](https://github.com/osmandapp/OsmAnd-iOS/issues/3865).
  - Resolved a bug causing the POI category to be missing in the context menu.
