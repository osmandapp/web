---
sidebar_position: 4
sidebar_label: Tracks
title: Tracks
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


## Overview {#overview}

The Web Planner gives you a simple way to work with your personal data right in the browser. After signing in, you can open your tracks, adjust them, create new ones, or upload files from your computer. 

All changes are automatically synced through [OsmAnd Cloud](../personal/osmand-cloud.md), so anything you update on the web appears on your devices, and anything you create on your phone shows up here as well. This makes it easy to move between platforms and keep your data consistent wherever you use OsmAnd.


## How to use {#how-to-use}

It's a paid feature <ProFeature/>. To use it, log in to your OsmAnd Pro account.

![Track login](@site/static/img/web/track_login.png) ![Track login](@site/static/img/web/track_login_2.png)

Tracks section contains all track-related tools and actions. The following options are available:

- Show tracks from [OsmAnd Cloud](#cloud-tracks).
- Adding tracks on the map (**Visible on map** folder).
- Looking all tracks info and graph
- Modify tracks and add it to Cloud.
- Download and delete tracks.
- Create new folders or delete it.
- Download folders as OSF or OBF collection.


## Visible on the Map {#visible-on-the-map}

The **Visible on map** view lists all tracks that are currently displayed on the map. Any track can be added to this list from the main Tracks panel using the **⋮ → Make track visible** option.

Tracks that are visible on the map are highlighted in blue, while tracks that are currently hidden appear in grey. A switch next to each track lets you quickly show or hide it. The **Hide all** button turns off all visible tracks at once.

Below the main list, the **Recently visible** section displays tracks that were shown on the map earlier. This makes it easy to turn a track back on without searching for it again in your folders or in OsmAnd Cloud.

![Visible on the map](@site/static/img/web/visible_new.png) ![Visible on the map](@site/static/img/web/visible_new_2.png)


## Track folder menu {#track-folder-menu}

![Track folder menu](@site/static/img/web/collection_new.png)

Click the three-dot button (⋮) to open the *Track Folder* menu. From here, you can:

 - Download as OSF.
 - Download as OBF Collection. Export the folder in OsmAnd Binary Format, choosing either an [OBF file](https://osmand.net/docs/technical/osmand-file-formats/osmand-obf/) or a [Travel OBF](https://osmand.net/blog/routes#generated-travel-routes).
      -  **OBF file**. You can download an offline OBF map and open it with OsmAnd on your device. It is suitable for displaying a large number of tracks on the map.
      -  **Travel OBF**. You can also import a map of tracks as a travel book, which allows you to select individual tracks on the map and use them like normal GPX files. A travel book also supports features such as displaying tracks as points, filtering tracks by activity type, and filtering waypoints.
 - Rename. Opens a dialog where you can enter a new name for the selected folder. The change is synced to OsmAnd Cloud and will appear on all connected devices.
 - Delete. Opens a confirmation dialog. Deleting a folder removes it permanently along with all tracks it contains. This action is also synced through OsmAnd Cloud.

![Track folder menu](@site/static/img/web/collection_rename.png) ![Track folder menu](@site/static/img/web/collection_delete.png)


## Cloud Tracks {#cloud-tracks}

GPX tracks that you have in [OsmAnd Cloud](../personal/osmand-cloud.md) will be available for display and editing after login. Only for **Pro users** <ProFeature/> and for [**OsmAnd Start**](../personal/osmand-cloud.md#osmand-start) users (who can download their data even after their Pro subscription has expired).

The following features are available after choosin cloud track:

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track.png)

- Information screens:
  - *Information* - displaying track data.
  - *Elevation* - graph of elevation.
  - *Speed* - speed graph.
  - *Slope* - slope graph.
  - *Settings* - list of navigation profiles for the *Create route* tool.
  - *Turns* - a generated list of approximate turn instructions based on the track geometry.
  - *Road type* - breaks the track into segments by road classification .
  - *Surface* - shows the types of track surfaces along the route.
  - *Smoothness* - displays segment smoothness based on OSM tags .

![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_turns.png) ![OsmAnd Web cloud GPX edit](@site/static/img/web/cloud_track_details.png)

- Action buttons:
  - *Edit track* - adding cloud track to local for editing (_Edit locality_ button on the panel).
  - *Download GPX* - downloads the track to the PC.
  - *Recalculate* Elevation (Satellite) - displays the elevation graph of the selected track.
  - *Delete Track* - deletes the track.
  - *Close track* - close the track.


## Related Articles {#related-articles}

- [Manage Tracks](../personal/tracks/manage-tracks.md)
- [Favorites](../personal/favorites.md)
- [OsmAnd Cloud](../personal/osmand-cloud.md)