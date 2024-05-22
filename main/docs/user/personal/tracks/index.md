---
sidebar_position: 1
title:  Tracks
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

<InfoIncompleteArticle/>

## Overview

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Track on the map](@site/static/img/personal/tracks/track_on_map_android.png)

</TabItem>

<TabItem value="ios" label="iOS">

![Track on the map iOS](@site/static/img/personal/tracks/track_on_map_ios.png)

</TabItem>
 
</Tabs>

Features **Tracks** functionality lets you create and save routes so you can easily return to them later or share them with others. A trip planning feature lets you customize your routes based on your preferences and interests. You also get access to preloaded routes to popular destinations and attractions.

1. **Main Features**. 
- All tracks in OsmAnd are stored in the folder:    
*<Translate android="true" ids="shared_string_menu"/> → <Translate android="true" ids="shared_string_my_places"/> → <Translate android="true" ids="shared_string_gpx_tracks"/>*.   
- The **Tracks** tab in the OsmAnd app provides a convenient way to manage and interact with your saved tracks. This feature allows you to record and save tracks completed during travel or outdoor activities. 
- A track on a map is Trip recording or Plan a route with or without marked points on it. OsmAnd track file is in [GPX format](../plugins/trip-recording.md#recorded-gpx-file).

2. **You can add or create tracks in OsmAnd in the following ways**.  
- [Import](#import) from an external source.
- Create in the application using [Plan a route](../plan-route/create-route.md) tool.
- Recording in the application using [Trip recording](../plugins/trip-recording.md) plugin. 

3. **Tracks management special features in OsmAnd**.
- Enabling and disabling [tracks on the map](#show-tracks-on-map).
- Customizing [the appearance](../map/tracks-on-map.md#track-appearance), [edit](#create--edit-track) and [analyze tracks](../map/tracks-on-map.md#analyze-track-on-map).
- Use for navigation.

4. **OsmAnd has no limit on the number of tracks to store and display.**

5. **There are three options to display Tracks on the map**.
- [Configure map](../map/configure-map-menu.md) menu.
- [My places](../personal/myplaces.md) menu.
- [Track Context menu](../map/track-context-menu.md).  

**Formats**: OsmAnd uses [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format) format for tracks and points.  
**Import**: the app can import [GPX](https://en.wikipedia.org/wiki/GPS_Exchange_Format), [KML](https://en.wikipedia.org/wiki/Keyhole_Markup_Language), [KMZ](https://en.wikipedia.org/wiki/Keyhole_Markup_Language) formats of tracks and points.


## Read more about Tracks

- [Show track on Map](../map/tracks-on-map.md)
- [Analyze on Map](../map/tracks-on-map.md#analyze-track-on-map)
- [Track Context menu](../map/track-context-menu.md)
- [Navigation by track](../navigation/setup/gpx-navigation.md)
- [Trip recording](../plugins/trip-recording.md)
