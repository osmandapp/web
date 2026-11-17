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


# Android 5.5 {#android-55}



## Join Beta {#join-beta}

OsmAnd releases several Ready-To-Use builds daily, allowing you to track new features and participate in the OsmAnd translation process. You can take part in testing the beta version of OsmAnd using Google Play.

<div class="button-row">
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand.plus">OsmAnd+</a>
  <a class="button button--active" href="https://play.google.com/apps/testing/net.osmand">OsmAnd</a>
</div>  

<br/>


## What's new {#whats-new}

## What's new {#whats-new}

- **[Spatial Search](https://osmand.net/blog/offline-search-video)** is enabled by default, with more accurate ranking, synonyms, and suggested corrections for misspelled words.
- New **Panoramax plugin** with street-level imagery as a map layer, filtered by contributor, date, and type.
- Realistic **[sun shadows](https://osmand.net/docs/user/plugins/topography#3d-buildings)** cast by 3D buildings and terrain.
- Media library in **[My Places](https://osmand.net/docs/user/personal/myplaces)** that gathers your photos, videos, and audio notes in one place.
- Dashed and dotted lines in **[track appearance](https://osmand.net/docs/user/map/tracks/appearance#track-appearance-settings)**, also available as a folder's default appearance.
- Speed range for route calculation and arrival time based on your actual speed in **[vehicle parameters](https://osmand.net/docs/user/navigation/guidance/vehicle-parameters#default-speed)**.
- Smarter **[Android Auto](https://osmand.net/docs/user/navigation/auto-car)** with suggestions from recent destinations, automatic [Free ride](https://osmand.net/docs/user/navigation/auto-car#destination-points) while driving, and [Google Assistant and Gemini](https://osmand.net/docs/user/navigation/auto-car#voice-control) support.
- New **[Quick action](https://osmand.net/docs/user/widgets/quick-action#my-places)** to show or hide one or several tracks with a single tap.
- **[Contour line](https://osmand.net/docs/user/plugins/topography#contour-lines)** labels can face uphill, as on paper topographic maps.
- Support for BLE power meters in **[External sensors](https://osmand.net/docs/user/plugins/external-sensors#pair-new-sensor)**.

<!--
- Navigation settings included in route links.
- The trip recording "Notification" option is renamed to "Start from notification" to make clear it only adds a start button.
-->


## Bug fixes {#bug-fixes}

- Fixed an [issue](https://github.com/osmandapp/OsmAnd/issues/24228) where emptying the OsmAnd Cloud trash restored deleted data.
- Corrected [route recalculation announcements](https://github.com/osmandapp/OsmAnd/issues/25544) that didn't match the actual deviation from the route.
- Fixed the [compass pointing 180° off](https://github.com/osmandapp/OsmAnd/issues/26147) in inverted portrait orientation.
- Restored [stops with zero speed](https://github.com/osmandapp/OsmAnd/issues/26351) in speed charts.
- Resolved the trip recording [Start button disappearing](https://github.com/osmandapp/OsmAnd/issues/26305) with a large font or display size.
- Prevented [track appearance](https://github.com/osmandapp/OsmAnd/issues/25686) from staying unapplied after Cloud sync.
- Brought back [OSMC symbols](https://github.com/osmandapp/OsmAnd/issues/26148) in the What's here list that opens when you tap overlapping route shields.
- Updated [solar eclipse times](https://github.com/osmandapp/OsmAnd/issues/25830) to show local times instead of worldwide ones.

<!--
- Fixed the parking position marker not showing when Favorites are hidden.
- Fixed imported Favorites going to the wrong folder.
-->








