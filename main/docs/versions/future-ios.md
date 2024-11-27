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

<!--
- New context menu for tracks. ([Add context menu for tracks in Configure Map](https://github.com/osmandapp/OsmAnd-iOS/issues/3488))
- Quick action *Location position on screen*. ([Add "Location position on screen" for "Quick Actions"](https://github.com/osmandapp/OsmAnd-iOS/issues/921))
- Resting position icon during movement. ([Allow to choose non-rotational icons for moving my location](https://github.com/osmandapp/OsmAnd-iOS/issues/3553))
- Total track statistic in Folders My Places. ([Total track statistic in folder footer](https://github.com/osmandapp/OsmAnd-iOS/issues/3533))
- Features for Tracks in My Places:
  - Sort for tracks. ([Sort for tracks in My Places](https://github.com/osmandapp/OsmAnd-Issues/issues/2419))
  - Filters for Search tool. ([Filters for Search – Tracks](https://github.com/osmandapp/OsmAnd-Issues/issues/1915))
  - Sort subfolders. ([Sort Subfolders – Tracks](https://github.com/osmandapp/OsmAnd-iOS/issues/3415))

-->

- Modified compass behavior: a single tap rotates the map to North, while a double tap switches the orientation.  
- Added search functionality for the most popular brand names.  
- Improved graph appearance: Y-axis labels no longer overlap with the graph.  
- Added total track statistics to each folder's footer.  
- Grouped all tags with translations into a single item in the context menu.  
- Fixed an issue where the POI category was missing from the context menu.  
- Fixed an issue with the auto-detection of the voice prompt language.  
- Fixed crash in Boat profile Route parameters.  
- CarPlay improvements: resolved an issue where the main navigation widget didn't update after route recalculations, and fixed the size of the arrows in the next turn widget.  
- Introduced a Map mode parameter that now follows the App theme.  
- Improved UI for selection of location icon, added options to disable location radius and view angle.  
- Add quick action to change "Location position on screen".


## New Compass Behavior

The compass button has been updated to provide more intuitive and user-friendly functionality. These improvements make the compass easier to use, help you navigate better, and optimize map orientation control during navigation.

[Compass button](../user/map/interact-with-map.md#map-orientation-and-compass):

- **Single tap**. Reorients the map *to the North* in all map orientation modes. If the map is in the *Compass direction* mode, it rotates for one moment and then returns to the dynamic orientation of this mode.
- **Double tap**. Switch between map orientation modes, such as following the GPS direction or rotating with the device. *Until this update, you could switch modes using Single tap*.
- **Long tap**. Opens a handy list with the names of all map orientation modes, allowing you to select the one you prefer.


## Search by Brand Names

We are pleased to introduce a new [brand search](../user/search/search-poi.md#how-to-use) feature in OsmAnd that will allow you to find your favorite places faster. You can now filter POIs by specific brands, making it faster to find what you are looking for.  

Whether you are interested to find your favorite coffee shop, hotel, or reliable supermarket, this update makes discovering nearby locations from your favorite brands easier. Enjoy a personalized and efficient search and optimize your travels with OsmAnd.



## Redesign Graphs

Elevation graphs have been redesigned to prevent overlapping labels.



## Total Track Statistics

The [overall statistics](../user/personal/tracks/manage-tracks.md#folder-statistics) are now displayed at the bottom of the list in each of the track folders.



## Updates for Map Mode Menu

Added the new [Map mode](../user/map/vector-maps.md#map-mode). The map is displayed in light or dark theme according to the mode selected from the list of suggested ones.


## Grouped Tags

POI's tag with any traslations have a single item on the [Context menu](../user/map/map-context-menu.md#details).


## Profile Appearance Redesign

The [appearance of profiles](../user/personal/profiles.md#my-location-appearance) has been improved to make them more interesting, recognizable, and usable.
<!-- 
The update includes:
- New icon and color selection components.
- Redesign of the location icon selection map.
- Default 3D icons.-->
- Added visual elements for the Resting and Navigation positions below the my location icon:

  - **View angle**. Displays a cone-shaped area that shows the direction you are currently facing.  
  Status: *Off*, &nbsp;*Resting position*, &nbsp;*Navigation position*, &nbsp;*Rest & navigation position*.  

  - **Location radius**. Shows a circular area around your icon, representing the accuracy of your current location.  
  Status: *Off*, &nbsp;*Resting position*, &nbsp;*Navigation position*, &nbsp;*Rest & navigation position*.  


## Quick Action Updates

### Location position screen

Added the ability to create a Quick Action button to change the [Location position on screen](../user/widgets/quick-action.md#settings). The setting allows you to enable or disable the display of the previously selected My Location cursor position on the map.

_Menu → Configure screen → Custom buttons → + → Add button → Add action → Settings → Location position on screen_



### Switch between Terrain styles

In this release, we have added the ability to switch between terrain color palettes, similar to switching between layers. This can be done using the Quick Actions tool.

_Menu → Configure screen → Custom buttons → + → Add button → Add action → Configure map → Terrain color scheme_

## CarPlay improvements

<!--
Resolved an issue that caused the main navigation widget to not refresh after a route recalculation, and fixed the size of the arrows in the next turn widget. -->

- Switch [Navigation to first Car profile](https://github.com/osmandapp/OsmAnd-iOS/issues/3957) when connected to CarPlay,
- [Opening hours for POIs](https://github.com/osmandapp/OsmAnd-iOS/issues/3961),

## Downloading dialog

New Downloading dialog was added for Maps & Resources and Context menus, First start screen.




## Optional Updates

- fixed bug with a [small arrow](https://github.com/osmandapp/OsmAnd-iOS/issues/3964) in Second next turn widget - CarPlay,
- fixed [wrong speedometer height](https://github.com/osmandapp/OsmAnd-iOS/issues/3958) - CarPlay,
- fixed bug with [visible track](https://github.com/osmandapp/OsmAnd-iOS/issues/3982) in My Places after removing,
- fixed bug with [copy coordinates](https://github.com/osmandapp/OsmAnd-iOS/issues/4045),
- renamed "Difficulty classification" > ["Hiking trails difficulty grade"](../user/map/routes.md#hiking-trails-difficulty-grade).

- Fixed a bug that caused POI category to be missing in the context menu. 
- Fixed a problem with [automatic language detection](https://github.com/osmandapp/OsmAnd-iOS/issues/3727) of voice prompts.
- Fixed a crash in boat profile route parameters.
