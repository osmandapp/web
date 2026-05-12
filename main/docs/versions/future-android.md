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


# Android 5.4 {#android-54}



## Join Beta {#join-beta}

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## What's new {#whats-new}

- Enhanced **[Favorites](https://osmand.net/docs/user/personal/favorites)** with support for media attachments (photos, audio and video) and improved audio/video notes integration.
- Improved **[navigation widgets](https://osmand.net/docs/user/widgets/nav-widgets)** with more flexible size and layout adaptation across different screen densities and orientations.
- Map legend added to **[Configure Map](https://osmand.net/docs/user/map/configure-map-menu)** for better understanding of route types and map elements.
- Improved route filtering and visual control in **[Configure Map](https://osmand.net/docs/user/map/configure-map-menu)**, including route classifications and priorities.
- Improved track analysis with new graph types and more detailed data such as surface, road type and steepness.
- Enhanced track management with previews and improved organisation in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Automatic backup and more reliable synchronization of user data in **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)**, including **[Smart Folders](https://osmand.net/docs/user/personal/tracks/smart-folder)**.
- Initial nautical navigation improvements with AIS enhancements and additional navigation parameters and widgets.
- Enhanced **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** experience with improved search and navigation controls.
- Added ability to interact with the map on **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)**, including selecting points directly.
- Redesigned **[Elevation widget](https://osmand.net/docs/user/widgets/nav-widgets#elevation-widget)** with more detailed route elevation information.

<!--
- New experimental **[Astronomy plugin](https://osmand.net/docs/user/plugins/astronomy)** with an astronomical overlay showing the paths of the Sun, planets and stars.
- Improved **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** section with clearer backup, version history and automatic backup settings.
- Updated **[Configure map](https://osmand.net/docs/user/map/configure-map-menu)** options with a clearer legend and improved filters for hiking, cycling and MTB routes.
- New and redesigned elevation and navigation widgets with elevation profiles, uphill/downhill metrics and average grade.
- **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** improvements with extended widget support and better OBD II integration.
- More flexible **[widget and map button layout](https://osmand.net/docs/user/widgets/configure-screen#map-screen-layout)**, especially in landscape mode.
- Enhanced Favorites management in **[My Places](https://osmand.net/docs/user/personal/myplaces)**.
- Smarter track organization with Smart Folders and clearer summary statistics.
- Advanced route and track analysis.
- Improved accessibility features, including more flexible audio and haptic navigation feedback.
- Initial groundwork for smartwatch integration for navigation and trip recording data.
-->


## Bug fixes {#bug-fixes}

- Fixed an [issue](https://github.com/osmandapp/OsmAnd/issues/16507) where favorite properties (color, icon, shape) were not updated when changing its group.
- Fixed [incorrect exit directions](https://github.com/osmandapp/OsmAnd/issues/23104) shown on roundabouts in Android Auto.
- Corrected inaccurate [uphill and downhill values](https://github.com/osmandapp/OsmAnd/issues/20624) in elevation widgets.
- Prevented [hidden favorites](https://github.com/osmandapp/OsmAnd/issues/24689) from reappearing on the map when adding track waypoints to a folder.
- Resolved [inconsistencies between graphs](https://github.com/osmandapp/OsmAnd/issues/24712) in the Details screen.
- Resolved an [issue](https://github.com/osmandapp/OsmAnd/issues/24791) where unpinned Favorites folders appeared pinned again after app restart.

<!--
- Improved stability of **[OsmAnd Cloud](https://osmand.net/docs/user/personal/osmand-cloud)** sync and backup, reducing conflicts and ensuring widgets and settings restore correctly across devices.
- Fixed incorrect uphill/downhill values in elevation widgets and improved accuracy of ascent/descent calculations in route analysis.
- Improved **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** navigation behaviour, including correct exit directions at roundabouts and proper placement of on-screen tools such as the radius ruler.
- Fixed several issues related to **[Accessibility](https://osmand.net/docs/user/plugins/accessibility)** mode, including navigation announcements and interaction with certain map tools.
- General interface and performance fixes across map rendering, widget display and configuration screens.
-->








