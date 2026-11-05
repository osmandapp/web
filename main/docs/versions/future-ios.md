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

# iOS 5.5 {#ios-55}

## Join Beta {#join-beta}

iOS beta builds (TestFlight) are usually provided weekly (after a Team Sprint demo). They do not contain descriptions and may have continuous versioning. They are assumed to be stable and ready to use.  

<div>
  <a class="button button--active" href="https://testflight.apple.com/join/7poGNCKy">Join TestFlight</a>
</div>

<br/>


## What's new {#whats-new}

- New **[coordinate formats](https://osmand.net/docs/user/search/search-coordinates#coordinate-format)**, including EPSG systems, Maidenhead locator, and Swiss Grid, with a primary format and a list of preferred ones.
- Separate **[widget layouts](https://osmand.net/docs/user/widgets/configure-screen#single-and-separate-layouts)** for Portrait and Landscape, plus Wide or Compact top and bottom panels.
- Customizable **[widget panel appearance](https://osmand.net/docs/user/widgets/configure-screen#widget-panel-appearance)** with widget size, icons, and text and background colors.
- New **[CarPlay settings](https://osmand.net/docs/user/navigation/car-play#settings)** for map orientation and frame rate, with Home available in one tap from the Navigation menu.
- New **[Keep screen on](https://osmand.net/docs/user/navigation/guidance/voice-navigation#appearance)** setting for each profile: follow the system timeout, keep the screen on during navigation only, or keep it always on.
- **[Contour line](https://osmand.net/docs/user/plugins/topography#contour-lines)** labels can face uphill, as on paper topographic maps.
- Full appearance settings when you **[change several Favorites](https://osmand.net/docs/user/personal/favorites#bulk-edit--delete)** at once.


## Bug fixes {#bug-fixes}

- Fixed an [issue](https://github.com/osmandapp/OsmAnd-iOS/issues/5696) where emptying the OsmAnd Cloud trash restored deleted maps and Favorites.
- Corrected [elevation dropping to 0](https://github.com/osmandapp/OsmAnd-iOS/issues/5526) in tracks recorded in the background.
- Resolved [OsmAnd Cloud sync conflicts](https://github.com/osmandapp/OsmAnd-iOS/issues/5463) after updating maps on several devices.
- Prevented [Favorites from hidden folders](https://github.com/osmandapp/OsmAnd-iOS/issues/5558) from appearing in search results.
- Fixed [Plan a route closing](https://github.com/osmandapp/OsmAnd-iOS/issues/5947) when you tap a track on the map.
- Corrected [pedestrian travel time](https://github.com/osmandapp/OsmAnd-iOS/issues/5787) shown for car routes after Attach to roads.
- Fixed [waypoints added to the recording track](https://github.com/osmandapp/OsmAnd-iOS/issues/5893) not responding to taps.
- Stopped the [waypoint icon from blinking](https://github.com/osmandapp/OsmAnd-iOS/issues/2764) during track recording.

<!--
- Fixed map updates for mappers with Devanagari and Eastern Arabic numerals.
- Fixed the map zooming out when you add a Quick Action while moving.
- Fixed KML import creating an empty track.
-->









